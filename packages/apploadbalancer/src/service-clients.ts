import * as cloudApi from '.';

export const { BackendGroupServiceClient } = cloudApi.apploadbalancer.backend_group_service;
export const { HttpRouterServiceClient } = cloudApi.apploadbalancer.http_router_service;
export const { LoadBalancerServiceClient } = cloudApi.apploadbalancer.load_balancer_service;
export const AlbTargetGroupServiceClient = cloudApi.apploadbalancer.target_group_service.TargetGroupServiceClient;
export const { VirtualHostServiceClient } = cloudApi.apploadbalancer.virtual_host_service;
