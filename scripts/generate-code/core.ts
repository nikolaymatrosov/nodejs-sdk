import path from "path";
import fg from "fast-glob";
import cp from "child_process";
import { CORE_PROTO_PACKAGES, PACKAGES_ROOT_DIR, PROTO_DIR, YA_PROTO_DIR, PROTOBUF_FILES } from "./constants";
import { logger } from "@yandex-cloud/core/dist/utils/logger";
import * as fs from "fs";

const coreProtoGen =async (packageName: string): Promise<string> => {
    const packagePath = path.join(PACKAGES_ROOT_DIR, 'core', 'src', 'generated');
    const packageProtoDir = path.join(YA_PROTO_DIR, 'cloud', packageName);

    const protoFiles = fg.sync('**/*.proto', { cwd: packageProtoDir, absolute: true });

    logger.debug(`Found ${protoFiles.length} proto files in ${YA_PROTO_DIR} directory`);

    logger.debug(`Recreating ${packagePath} directory`);
    if (!fs.existsSync(packagePath)) {
        fs.mkdirSync(packagePath, { recursive: true });
    }

    const commandArgs = [
        'npx --no-install grpc_tools_node_protoc',
        `--ts_proto_out=${packagePath}`,
        '--ts_proto_opt=useExactTypes=false',
        '--ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,outputTypeRegistry=true,env=node,useOptionals=messages',
        `-I ${PROTO_DIR}/third_party/googleapis`,
        `-I ${PROTO_DIR}`,
        `${YA_PROTO_DIR}/cloud/validation.proto`,
        ...protoFiles,
        ...PROTOBUF_FILES
    ];

    logger.debug(`Code generation command: \n ${commandArgs.join(' ')}`);
    cp.execSync(commandArgs.join(' '));

    return packagePath;
};

export const generateCorePackage = async (): Promise<void> => {
    for (const packagePath of CORE_PROTO_PACKAGES) {
        const packageName = path.basename(packagePath);
        await coreProtoGen(packageName);
    }
};
