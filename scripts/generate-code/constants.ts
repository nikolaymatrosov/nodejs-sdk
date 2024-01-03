import path from "path";
import url from "url";

export const DIRNAME = path.dirname(url.fileURLToPath(import.meta.url));
export const PACKAGES_ROOT_DIR = path.resolve('./packages');
export const PROTO_DIR = path.resolve('./cloudapi');
export const YA_PROTO_DIR = path.join(PROTO_DIR, 'yandex');

export const PACKAGES = [
        { name: 'ai', exact: true },
        { name: 'apploadbalancer', exact: true },
        { name: 'backup', exact: true },
        { name: 'billing', exact: true },
        { name: 'cdn', exact: true },
        { name: 'certificatemanager', exact: true },
        { name: 'compute', exact: true },
        { name: 'containerregistry', exact: true },
        { name: 'dataproc', exact: true },
        { name: 'datasphere', exact: true },
        { name: 'datatransfer', exact: true },
        { name: 'dns', exact: true },
        { name: 'iot', exact: true },
        { name: 'k8s', exact: true },
        { name: 'kms', exact: true },
        { name: 'loadbalancer', exact: true },
        { name: 'loadtesting', exact: true },
        { name: 'lockbox', exact: true },
        { name: 'logging', exact: true },
        { name: 'marketplace', exact: true },
        { name: 'mdb', exact: false },
        { name: 'monitoring', exact: true },
        { name: 'organizationmanager', exact: true },
        { name: 'resourcemanager', exact: true },
        { name: 'serverless', exact: true },
        { name: 'storage', exact: true },
        { name: 'vpc', exact: true },
        { name: 'ydb', exact: true }
    ]
;

export const CORE_PROTO_PACKAGES = [
    'access',
    'api',
    'endpoint',
    'iam',
    'oauth',
    'operation',
    'quota',
    'reference',
];

export const PROTOBUF_FILES = [
    'google/protobuf/any.proto',
    'google/protobuf/descriptor.proto',
    'google/protobuf/duration.proto',
    'google/protobuf/empty.proto',
    'google/protobuf/field_mask.proto',
    'google/protobuf/struct.proto',
    'google/protobuf/timestamp.proto',
    'google/protobuf/wrappers.proto',
]
