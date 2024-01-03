import * as cloudApi from '.';

export const DataProcClusterServiceClient = cloudApi.dataproc.cluster_service.ClusterServiceClient;
export const { JobServiceClient } = cloudApi.dataproc.job_service;
export const { ResourcePresetServiceClient } = cloudApi.dataproc.resource_preset_service;
export const { SubclusterServiceClient } = cloudApi.dataproc.subcluster_service;
export const ManagerJobServiceClient = cloudApi.dataproc.manager_job_service.JobServiceClient;
export const { DataprocManagerServiceClient } = cloudApi.dataproc.manager_service;
