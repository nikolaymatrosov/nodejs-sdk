import * as path from 'path';
import { buildExportStatements } from './export-statements';

const dirname = 'dirname';

describe('buildExportStatements', () => {
    it('should generate correct export statements for given modules', () => {

        const projectModules = [
            path.join(dirname, 'module1.ts'),
            path.join(dirname, 'module2.ts'),
        ];
        const projectDir = dirname;
        const moduleAliases = new Set<string>();
        const indexModulePath = path.join(dirname, 'index.ts');

        const result = buildExportStatements(projectModules, projectDir, moduleAliases, indexModulePath, {});

        expect(result).toEqual([
            "export * as module1 from './module1'",
            "export * as module2 from './module2'",
        ]);
    });

    it('should handle modules with same name correctly', () => {
        const projectModules = [
            path.join(dirname, 'v1', 'module.ts'),
            path.join(dirname, 'v2', 'module.ts'),
        ];
        const projectDir = dirname;
        const moduleAliases = new Set<string>();
        const indexModulePath = path.join(dirname, 'index.ts');

        const result = buildExportStatements(projectModules, projectDir, moduleAliases, indexModulePath, {});

        expect(result).toEqual([
            "export * as module from './v1/module'",
            "export * as module_v2 from './v2/module'",
        ]);
    });

    it('should handle service modules correctly', () => {
        const projectModules = [
            path.join(dirname, 'module_service.ts'),
        ];
        const projectDir = dirname;
        const moduleAliases = new Set<string>();
        const indexModulePath = path.join(dirname, 'index.ts');

        const result = buildExportStatements(projectModules, projectDir, moduleAliases, indexModulePath, {
            [indexModulePath]: {
                name: 'project',
                services: [],
            },
        });

        expect(result).toEqual([
            "export * as module_service from './module_service'",
        ]);
        expect(moduleAliases.has('module_service')).toBeTruthy();
    });
});
