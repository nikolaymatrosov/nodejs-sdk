import * as cp from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as fg from 'fast-glob';

import { logger } from '../../src/utils/logger';
import { buildExportStatements } from './export-statements';
import { ProjectMeta } from './interfaces';
import { rootIndex } from './root-index';
import { servicesConfig } from './services';

const GENERATED_CODE_DIR = path.resolve('./src/generated');
const GENERATED_PROJECTS_DIR = path.join(GENERATED_CODE_DIR, 'yandex', 'cloud');
const PROTO_DIR = path.resolve('./cloudapi');
const YA_PROTO_DIR = path.join(PROTO_DIR, 'yandex');

logger.debug(`Recreating ${GENERATED_CODE_DIR} directory`);

fs.rmSync(GENERATED_CODE_DIR, { recursive: true, force: true });
fs.mkdirSync(GENERATED_CODE_DIR);

const protoFiles = fg.sync('**/*.proto', { cwd: YA_PROTO_DIR, absolute: true });

logger.debug(`Found ${protoFiles.length} proto files in ${YA_PROTO_DIR} directory`);

const commandArgs = [
    'npx --no-install grpc_tools_node_protoc',
    `--ts_proto_out=${GENERATED_CODE_DIR}`,
    '--ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,outputTypeRegistry=true,env=node,useOptionals=messages',
    `-I ${PROTO_DIR} -I ${PROTO_DIR}/third_party/googleapis`,
    protoFiles.join(' '),
];
const command = commandArgs.join(' ');

logger.debug(`Code generation command: \n ${command}`);

cp.execSync(command);

const projectsDirs = fg.sync('*', { cwd: GENERATED_PROJECTS_DIR, onlyDirectories: true, absolute: true });

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

        const exportStatements = buildExportStatements(projectModules, projectDir, moduleAliases, indexModulePath, projectsMeta);

        const indexModuleContent = exportStatements.join('\n');

        logger.debug(`Writing export statements to ${indexModulePath} module`, indexModuleContent);

        fs.writeFileSync(indexModulePath, indexModuleContent, 'utf8');
    }
}

logger.debug('Generating root index module');

const rootIndexModulePath = path.join(GENERATED_PROJECTS_DIR, 'index.ts');
const serviceClientsModulePath = path.join(GENERATED_PROJECTS_DIR, 'service_clients.ts');

const {
    rootModuleContentParts,
    serviceClientsModuleContentParts,
} = rootIndex(projectsMeta, servicesConfig, GENERATED_PROJECTS_DIR);

logger.debug(`Writing result to ${rootIndexModulePath} module`);
logger.debug(`Writing result to ${serviceClientsModulePath} module`);

fs.writeFileSync(rootIndexModulePath, rootModuleContentParts.join('\n'), 'utf8');
fs.writeFileSync(serviceClientsModulePath, serviceClientsModuleContentParts.join('\n'), 'utf8');
