import * as cloudApi from '.';

export const { BrokerServiceClient } = cloudApi.iot.broker_service;
export const { DeviceDataServiceClient } = cloudApi.iot.devices_device_data_service;
export const { DeviceServiceClient } = cloudApi.iot.devices_device_service;
export const { RegistryDataServiceClient } = cloudApi.iot.devices_registry_data_service;
export const IotRegistryServiceClient = cloudApi.iot.devices_registry_service.RegistryServiceClient;
