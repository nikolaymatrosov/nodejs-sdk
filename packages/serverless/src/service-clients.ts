import * as cloudApi from '.';

export const { ApiGatewayServiceClient } = cloudApi.serverless.apigateway_service;
export const { ContainerServiceClient } = cloudApi.serverless.containers_container_service;
export const { FunctionServiceClient } = cloudApi.serverless.functions_function_service;
export const { ProxyServiceClient } = cloudApi.serverless.mdbproxy_proxy_service;
export const { TriggerServiceClient } = cloudApi.serverless.triggers_trigger_service;
export const WebSocketConnectionServiceClient = cloudApi.serverless.apigateway_connection_service.ConnectionServiceClient;
