import * as cloudApi from '.';

export const K8sClusterServiceClient = cloudApi.k8s.cluster_service.ClusterServiceClient;
export const { NodeGroupServiceClient } = cloudApi.k8s.node_group_service;
export const { VersionServiceClient } = cloudApi.k8s.version_service;
