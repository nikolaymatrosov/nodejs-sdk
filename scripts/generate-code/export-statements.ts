import path from 'path';
import { ProjectMeta } from './interfaces';

/**
 * Function to build export statements for a given set of project modules.
 *
 * @param {string[]} projectModules - An array of paths to the project modules.
 * @param {string} projectDir - The path to the project directory.
 * @param {Set<string>} moduleAliases - A set to store the aliases of the modules.
 * @param {string} indexModulePath - The path to the index module.
 * @param {Record<string, ProjectMeta>} projectsMeta - A record of project metadata.
 *
 * @returns {string[]} An array of export statements for the project modules.
 */
export const buildExportStatements = (
    projectModules: string[],
    projectDir: string,
    moduleAliases: Set<string>,
    indexModulePath: string,
    projectsMeta: Record<string, ProjectMeta>,
) => projectModules.map((modulePath) => {
    // Calculate the relative path of the module from the project directory
    const relativePath = path.relative(projectDir, modulePath);

    // Split the relative path into segments
    const relativePathSegments = relativePath.split(path.sep);

    // Extract the first segment of the relative path
    const firstPathSegment = relativePathSegments[0];

    // Extract the module name from the path and remove the '.ts' extension
    const moduleName = path.basename(modulePath, '.ts');

    // Create a `serviceName` by removing '_service' from the `moduleName`
    const serviceName = moduleName.replace('_service', '');

    // Determine whether to use the first path segment as a prefix for the module alias
    const usePathSegmentAsPrefix = relativePathSegments.length > 1
        && firstPathSegment.length > 2
        && firstPathSegment !== serviceName;

    // Create a `moduleAlias` by joining the first path segment (if it's used as a prefix) and the `moduleName` with an underscore
    let moduleAlias = [
        usePathSegmentAsPrefix ? firstPathSegment : undefined,
        moduleName,
    ].filter(Boolean).join('_');

    // If the `moduleAlias` already exists in the `moduleAliases` set, append a version number to the `moduleAlias`
    if (moduleAliases.has(moduleAlias)) {
        const version = relativePathSegments.find((segment) => /^v\d+$/.test(segment));

        moduleAlias += `_${version}`;
    }

    // Remove the file extension from the module path
    const { ext } = path.parse(modulePath);
    const moduleWithoutExt = relativePath.replace(ext, '');

    // If the module path ends with '_service', add the module to the `services` array of the current project in `projectsMeta`
    if (moduleWithoutExt.endsWith('_service')) {
        projectsMeta[indexModulePath].services.push({
            name: moduleName,
            exportAlias: moduleAlias,
        });
    }

    // Add the `moduleAlias` to the `moduleAliases` set to keep track of all aliases
    moduleAliases.add(moduleAlias);

    // Return an export statement for the module
    return `export * as ${moduleAlias} from './${moduleWithoutExt}'`;
});
