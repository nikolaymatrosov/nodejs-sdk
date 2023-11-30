import * as path from 'path';
import { rootIndex } from './root-index';
import { ServicesConfig } from './services';
import { ProjectMeta } from './interfaces';

const root = 'dirname';

describe('rootIndex', () => {
    it('should generate correct export statements for given registry', () => {
        const registry = {
            [path.join(root, 'index.ts')]: {
                name: 'project',
                services: [],
            },
        };

        const servicesConfig: ServicesConfig = {
            [path.join(root, 'index.ts')]: {
                project: {
                    importClassName: 'Project',
                    exportClassName: 'Project',
                },
            },
        };
        const result = rootIndex(registry, servicesConfig, root);

        expect(result.rootModuleContentParts).toEqual([
            "export * as project from './'",
        ]);
        expect(result.serviceClientsModuleContentParts).toEqual([
            'import * as cloudApi from \'.\'',
        ]);
    });

    it('should handle registry with services correctly', () => {
        const registry: Record<string, ProjectMeta> = {
            [path.join(root, 'index.ts')]: {
                name: 'ai',
                services: [
                    {
                        name: 'stt_service',
                        exportAlias: 'stt_service',
                    },
                    {
                        name: 'stt_service',
                        exportAlias: 'stt_service_v3',
                    },
                ],
            },
        };
        const servicesConfig: ServicesConfig = {
            ai: {
                stt_service: { importClassName: 'SttServiceClient' },
                stt_service_v3: [
                    { importClassName: 'RecognizerServiceClient' },
                    { importClassName: 'AsyncRecognizerClient' },
                ],
            },
        };

        const result = rootIndex(registry, servicesConfig, root);

        expect(result.rootModuleContentParts).toEqual([
            "export * as ai from './'",
        ]);
        expect(result.serviceClientsModuleContentParts).toEqual([
            'import * as cloudApi from \'.\'',
            'export const SttServiceClient = cloudApi.ai.stt_service.SttServiceClient;',
            'export const RecognizerServiceClient = cloudApi.ai.stt_service_v3.RecognizerServiceClient;',
            'export const AsyncRecognizerClient = cloudApi.ai.stt_service_v3.AsyncRecognizerClient;',
        ]);
    });

    it('should handle empty registry correctly', () => {
        const registry = {};
        const servicesConfig: ServicesConfig = {};

        const result = rootIndex(registry, servicesConfig, root);

        expect(result.rootModuleContentParts).toEqual([]);
        expect(result.serviceClientsModuleContentParts).toEqual([
            'import * as cloudApi from \'.\'',
        ]);
    });
});
