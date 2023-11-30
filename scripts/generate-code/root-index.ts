import path from 'path';
import { ProjectMeta, ServiceMeta } from './interfaces';
import { logger } from '../../src/utils/logger';
import { ClassNameMappingRule, ServicesConfig } from './services';

/**
 * Generates the content for the root index module and the service clients module.
 *
 * @param {Record<string, ProjectMeta>} registry - A record of project metadata, with the index module path as the key.
 * @param {ServicesConfig} servicesConfig - The configuration for the services.
 * @param {string} rootPath - The root path of the project.
 *
 * @returns {Object} An object containing two arrays of strings: `rootModuleContentParts` and `serviceClientsModuleContentParts`.
 * `rootModuleContentParts` contains the lines of code for the root index module.
 * `serviceClientsModuleContentParts` contains the lines of code for the service clients module.
 */
export const rootIndex = (registry: Record<string, ProjectMeta>, servicesConfig: ServicesConfig, rootPath: string) => {
    const rootModuleContentParts: string[] = [];
    const serviceClientsModuleContentParts: string[] = [
        'import * as cloudApi from \'.\'',
    ];

    const pushExportStatment = (serviceConfig: ClassNameMappingRule, projectMeta: ProjectMeta, serviceMeta: ServiceMeta) => {
        serviceClientsModuleContentParts.push(
            // eslint-disable-next-line max-len
            `export const ${serviceConfig.exportClassName || serviceConfig.importClassName} = cloudApi.${projectMeta.name}.${serviceMeta.exportAlias}.${serviceConfig.importClassName};`,
        );
    };

    for (const [indexModulePath, projectMeta] of Object.entries(registry)) {
        logger.debug(`Processing ${indexModulePath} module`);
        const relativePath = path.relative(rootPath, indexModulePath).replace('index.ts', '');

        rootModuleContentParts.push(`export * as ${projectMeta.name} from './${relativePath}'`);

        for (const serviceMeta of projectMeta.services) {
            const serviceConfig = servicesConfig[projectMeta.name]?.[serviceMeta.exportAlias];

            if (serviceConfig) {
                if (Array.isArray(serviceConfig)) {
                    for (const config of serviceConfig) {
                        pushExportStatment(config, projectMeta, serviceMeta);
                    }
                } else {
                    pushExportStatment(serviceConfig, projectMeta, serviceMeta);
                }
            } else {
                logger.warn(`There is no configuration for service ${serviceMeta.exportAlias} in project ${projectMeta.name}`);
            }
        }
    }

    return {
        rootModuleContentParts,
        serviceClientsModuleContentParts,
    };
};
