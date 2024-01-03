import * as cp from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import fg from 'fast-glob';
import log4js from 'log4js';
import mustache from 'mustache';

import { buildExportStatements } from './export-statements.js';
import { ProjectMeta } from './interfaces.js';
import { rootIndex } from './root-index.js';
import { servicesConfig } from './services.js';
import { generateCorePackage } from './core';
import {
    CORE_PROTO_PACKAGES,
    DIRNAME,
    PACKAGES,
    PACKAGES_ROOT_DIR,
    PROTO_DIR,
    PROTOBUF_FILES,
    YA_PROTO_DIR,
} from './constants';
import { siblingImports } from './sibling-imports';

const logger = log4js.getLogger();

logger.level = 'debug';

const commonProtoFiles = CORE_PROTO_PACKAGES.flatMap((commonProtoDir) => {
    const cwd = path.join(YA_PROTO_DIR, 'cloud', commonProtoDir);

    return fg.sync('**/*.proto', { cwd, absolute: true });
});

const thirdPartyProtoFiles = fg.sync('**/*.proto', {
    cwd: path.join(PROTO_DIR, 'third_party/googleapis'),
    absolute: true,
});

const thirdpartyRoot = path.join(PROTO_DIR, 'third_party/googleapis');
const yandexMappings = commonProtoFiles.map((mapping) => {
    const protoFile = path.relative(PROTO_DIR, mapping);
    const withoutExt = protoFile.replace('.proto', '');

    return `--ts_proto_opt=M${protoFile}=@yandex-cloud/core/dist/generated/${withoutExt}`;
});

const googleMappings = thirdPartyProtoFiles.map((mapping) => {
    const protoFile = path.relative(thirdpartyRoot, mapping);
    const withoutExt = protoFile.replace('.proto', '');

    return `--ts_proto_opt=M${protoFile}=@yandex-cloud/core/dist/generated/${withoutExt}`;
});

const protobufMappings = PROTOBUF_FILES.map((mapping) => {
    const withoutExt = mapping.replace('.proto', '');

    return `--ts_proto_opt=M${mapping}=@yandex-cloud/core/dist/generated/${withoutExt}`;
});

const packageProtoGen = async ({ name, exact }: { name: string, exact: boolean }): Promise<string> => {
    const packagePath = path.join(PACKAGES_ROOT_DIR, name);
    const packageSourcePath = path.join(packagePath, 'src');
    const packageProtoDir = path.join(YA_PROTO_DIR, 'cloud', name);

    const protoFiles = fg.sync('**/*.proto', { cwd: packageProtoDir, absolute: true });

    logger.debug(`Found ${protoFiles.length} proto files in ${YA_PROTO_DIR} directory`);

    logger.debug(`Recreating ${packageSourcePath} directory`);

    // If the directory already exists, remove it
    if (fs.existsSync(packageSourcePath)) {
        fs.rmSync(packageSourcePath, { recursive: true, force: true });
    }
    fs.mkdirSync(packageSourcePath, { recursive: true });

    const { siblingImportsMappings, siblingServices } = await siblingImports('**/*.proto', packageProtoDir, name);

    const packageJson = JSON.parse(fs.readFileSync(path.join(packagePath, 'package.json'), 'utf8'));

    packageJson.dependencies = packageJson.dependencies ?? {};
    for (const service of siblingServices) {
        packageJson.dependencies[`@yandex-cloud/${service}`] = 'file:*';
    }
    fs.writeFileSync(path.join(packagePath, 'package.json'), JSON.stringify(packageJson, null, 2), 'utf8');

    const commandArgs = [
        'npx --no-install grpc_tools_node_protoc',
        `--ts_proto_out=${packageSourcePath}`,
        `--ts_proto_opt=useExactTypes=${exact}`,
        '--ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,outputTypeRegistry=true,env=node,useOptionals=messages',
        ...yandexMappings,
        ...googleMappings,
        ...protobufMappings,
        ...siblingImportsMappings,
        '--ts_proto_opt=Myandex/cloud/validation.proto=@yandex-cloud/core/dist/yandex/cloud/validation',
        `-I ${PROTO_DIR}/third_party/googleapis`,
        `-I ${PROTO_DIR}`,
        `${YA_PROTO_DIR}/cloud/validation.proto`,
        ...commonProtoFiles,
        ...protoFiles,
    ];

    logger.debug(`Code generation command: \n ${commandArgs.join(' ')}`);
    cp.execSync(commandArgs.join(' '));

    // Replace generated typeRegistry.ts with our own pointing to core
    fs.copyFileSync(
        path.join(DIRNAME, 'templates/typeRegistry.ts'),
        path.join(packageSourcePath, 'typeRegistry.ts'),
    );

    return packageSourcePath;
};

const initPackage = (packageName: string) => {
    // Check if the package directory exists
    const packagePath = path.join(PACKAGES_ROOT_DIR, packageName);

    if (fs.existsSync(packagePath)) {
        logger.debug(`Package ${packageName} already exists`);

        return;
    }

    // Create package directory
    fs.mkdirSync(packagePath);

    // Create package.json
    // Read package.json from template
    const packageJson = JSON.parse(fs.readFileSync(path.join(DIRNAME, 'templates/package.json'), 'utf8'));

    // Modify package.json
    packageJson.name = `@yandex-cloud/${packageName}`;
    packageJson.description = `Yandex.Cloud ${packageName} SDK`;
    packageJson.homepage = `https://github.com/yandex-cloud/nodejs-sdk/tree/main/packages/${packageName}#readme`;

    // Write package.json
    fs.writeFileSync(
        path.join(packagePath, 'package.json'),
        JSON.stringify(packageJson, null, 2),
        'utf8',
    );

    // Create README.md
    // Read README.md from template
    const readmeTemplate = fs.readFileSync(path.join(DIRNAME, 'templates/README.md'), 'utf8');
    const readmeContent = mustache.render(readmeTemplate, {
        packageName: `@yandex-cloud/${packageName}`,
        libName: packageName,
    });

    // Write README.md
    fs.writeFileSync(path.join(packagePath, 'README.md'), readmeContent, 'utf8');

    // Create tsconfig.json
    // Copy tsconfig.json from template
    fs.copyFileSync(
        path.join(DIRNAME, 'templates/tsconfig.json'),
        path.join(packagePath, 'tsconfig.json'),
    );

    // Create src directory
    fs.mkdirSync(path.join(packagePath, 'src'));
};

const generateExportSourceCode = (packagePath: string, packageName: string) => {
    const projectsDirs = fg.sync('yandex/cloud/*', { cwd: packagePath, onlyDirectories: true, absolute: true });

    logger.debug(`Found ${projectsDirs.length} project directories`, projectsDirs);

    const projectsMeta: Record<string, ProjectMeta> = {};

    for (const projectDir of projectsDirs) {
        logger.debug(`Processing project directory ${projectDir}`);

        const projectName = path.basename(projectDir);
        const projectModules = fg
            .sync('**/*.ts', { cwd: projectDir, absolute: true })
            // Exclude alpha versions
            .filter((serviceModule) => !/v\d+alpha/.test(serviceModule));

        logger.debug(`Found ${projectModules.length} modules`, projectModules);

        if (projectModules.length > 0) {
            logger.debug('Generating export statements');

            const indexModulePath = path.join(projectDir, 'index.ts');

            projectsMeta[indexModulePath] = {
                name: projectName,
                services: [],
            };

            const moduleAliases: Set<string> = new Set();

            const exportStatements = buildExportStatements(
                projectModules,
                projectDir,
                moduleAliases,
                indexModulePath,
                projectsMeta,
            );

            const indexModuleContent = exportStatements.join('\n');

            logger.debug(`Writing export statements to ${indexModulePath} module`, indexModuleContent);

            fs.writeFileSync(indexModulePath, indexModuleContent, 'utf8');
        }
    }

    logger.debug('Generating root index module');

    const rootIndexModulePath = path.join(packagePath, 'index.ts');
    const serviceClientsModulePath = path.join(packagePath, 'service_clients.ts');

    const {
        rootModuleContentParts,
        serviceClientsModuleContentParts,
    } = rootIndex(projectsMeta, servicesConfig, packagePath, packageName);

    logger.debug(`Writing result to ${rootIndexModulePath} module`);
    logger.debug(`Writing result to ${serviceClientsModulePath} module`);

    fs.writeFileSync(rootIndexModulePath, rootModuleContentParts.join('\n'), 'utf8');
    fs.writeFileSync(serviceClientsModulePath, serviceClientsModuleContentParts.join('\n'), 'utf8');
};

(async () => {
    await generateCorePackage();
    generateExportSourceCode(path.join(PACKAGES_ROOT_DIR, 'core', 'src', 'generated'), 'core');

    for (const pkg of PACKAGES) {
        logger.debug(`Creating package ${pkg.name}`);
        initPackage(pkg.name);

        logger.debug(`Generating code for package ${pkg.name}`);
        const packagePath = await packageProtoGen(pkg);

        generateExportSourceCode(packagePath, pkg.name);
    }
})();
