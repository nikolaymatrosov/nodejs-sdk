import fg from 'fast-glob';
import path from "path";
import * as fs from "fs";
import { CORE_PROTO_PACKAGES } from "./constants";

const CORE_PROTO_PACKAGES_SET = new Set(CORE_PROTO_PACKAGES);

export async function siblingImports(source: string, cwd: string, currentService: string) {

    const protoFiles = fg.sync(source, { cwd });

    const siblingImportsMappings = new Set<string>();
    const siblingServices = new Set<string>();

    for (const protoFile of protoFiles) {
        // read file
        const file = await fs.promises.readFile(path.join(cwd, protoFile), 'utf-8');
        // find imports
        const imports = file.matchAll(/import ['"](?<path>yandex\/cloud\/(?<service>.*?)\/.*)['"]/g);
        for (const i of imports) {
            const { path, service } = i.groups ?? {};
            if (service !== currentService && !CORE_PROTO_PACKAGES_SET.has(service ?? '')) {
                const withoutExt = path.replace('.proto', '');
                siblingServices.add(service);
                siblingImportsMappings.add(`--ts_proto_opt=M${path}=@yandex-cloud/${service}/dist/${withoutExt}`);
            }


        }
    }

    return {
        siblingServices,
        siblingImportsMappings
    };
}
