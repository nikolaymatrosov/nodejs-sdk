import fg from 'fast-glob';
import path from 'path';
import * as fs from 'fs';
import { CORE_PROTO_PACKAGES } from './constants';

const CORE_PROTO_PACKAGES_SET = new Set(CORE_PROTO_PACKAGES);

export async function siblingImports(source: string, cwd: string, currentService: string) {
    const protoFiles = fg.sync(source, { cwd });

    const siblingImportsMappings = new Set<string>();
    const siblingServices = new Set<string>();

    for (const protoFile of protoFiles) {
        // read file
        const file = fs.readFileSync(path.join(cwd, protoFile), 'utf8');
        // find imports
        const imports = file.matchAll(/import ["'](?<modulepath>yandex\/cloud\/(?<service>.*?)\/.*)["']/g);

        for (const i of imports) {
            const { modulepath, service } = i.groups ?? {};

            if (service !== currentService && !CORE_PROTO_PACKAGES_SET.has(service ?? '')) {
                const withoutExt = modulepath.replace('.proto', '');

                siblingServices.add(service);
                siblingImportsMappings.add(`--ts_proto_opt=M${modulepath}=@yandex-cloud/${service}/dist/${withoutExt}`);
            }
        }
    }

    return {
        siblingServices,
        siblingImportsMappings,
    };
}
