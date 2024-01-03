import * as cloudApi from '.';

export const CrImageServiceClient = cloudApi.containerregistry.image_service.ImageServiceClient;
export const { LifecyclePolicyServiceClient } = cloudApi.containerregistry.lifecycle_policy_service;
export const { RegistryServiceClient } = cloudApi.containerregistry.registry_service;
export const { RepositoryServiceClient } = cloudApi.containerregistry.repository_service;
export const { ScanPolicyServiceClient } = cloudApi.containerregistry.scan_policy_service;
export const { ScannerServiceClient } = cloudApi.containerregistry.scanner_service;
