import * as cloudApi from '.'
export const ApiGatewayServiceClient = cloudApi.serverless.apigateway_service.ApiGatewayServiceClient;
export const ContainerServiceClient = cloudApi.serverless.containers_container_service.ContainerServiceClient;
export const FunctionServiceClient = cloudApi.serverless.functions_function_service.FunctionServiceClient;
export const ProxyServiceClient = cloudApi.serverless.mdbproxy_proxy_service.ProxyServiceClient;
export const TriggerServiceClient = cloudApi.serverless.triggers_trigger_service.TriggerServiceClient;
export const WebSocketConnectionServiceClient = cloudApi.serverless.apigateway_connection_service.ConnectionServiceClient;