/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Device, DeviceCertificate, DevicePassword, DeviceView, deviceViewFromJSON, deviceViewToJSON } from "./device";

export const protobufPackage = "yandex.cloud.iot.devices.v1";

export interface GetDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest";
  /**
   * ID of the device to return.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /**
   * Specifies which parts of the device resource should be returned
   * in the response.
   */
  deviceView: DeviceView;
}

export interface GetByNameDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest";
  /**
   * ID of the registry to get device.
   *
   * To get a registry ID make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
   */
  registryId: string;
  /**
   * Name of the device to return.
   *
   * To get a device name make a [DeviceService.List] request.
   */
  deviceName: string;
  /**
   * Specifies which parts of the device resource should be returned
   * in the response.
   */
  deviceView: DeviceView;
}

export interface ListDevicesRequest {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest";
  /**
   * ID of the registry to list devices in.
   *
   * To get a registry ID make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
   */
  registryId?:
    | string
    | undefined;
  /**
   * ID of the folder to list devices in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId?:
    | string
    | undefined;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListDevicesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDevicesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * Specifies which parts of the device resource should be returned
   * in the response.
   */
  deviceView: DeviceView;
}

export interface ListDevicesResponse {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse";
  /** List of devices. */
  devices: Device[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDevicesRequest.page_size], use `next_page_token` as the value
   * for the [ListDevicesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest";
  /**
   * ID of the registry to create a device in.
   *
   * To get a registry ID, make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
   */
  registryId: string;
  /** Name of the device. The name must be unique within the registry. */
  name: string;
  /** Description of the device. */
  description: string;
  /** Device certificate. */
  certificates: CreateDeviceRequest_Certificate[];
  /**
   * Alias of a device topic.
   *
   * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/{id}/events`.
   */
  topicAliases: { [key: string]: string };
  /**
   * Device password.
   *
   * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
   */
  password: string;
}

export interface CreateDeviceRequest_TopicAliasesEntry {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry";
  key: string;
  value: string;
}

/** Specification of a device certificate. */
export interface CreateDeviceRequest_Certificate {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate";
  /** Public part of the device certificate. */
  certificateData: string;
}

export interface CreateDeviceMetadata {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata";
  /** ID of the device that is being created. */
  deviceId: string;
}

export interface UpdateDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest";
  /**
   * ID of the device to update.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /** Field mask that specifies which fields of the device are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the device. The name must be unique within the registry. */
  name: string;
  /** Description of the device. */
  description: string;
  /**
   * Alias of a device topic.
   *
   * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/{id}/events`.
   */
  topicAliases: { [key: string]: string };
}

export interface UpdateDeviceRequest_TopicAliasesEntry {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry";
  key: string;
  value: string;
}

export interface UpdateDeviceMetadata {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata";
  /** ID of the device that is being updated. */
  deviceId: string;
}

export interface DeleteDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest";
  /**
   * ID of the device to delete.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
}

export interface DeleteDeviceMetadata {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata";
  /** ID of the device that is being deleted. */
  deviceId: string;
}

export interface ListDeviceCertificatesRequest {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest";
  /** ID of the device to list certificates for. */
  deviceId: string;
}

export interface ListDeviceCertificatesResponse {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse";
  /** List of certificates for the specified device. */
  certificates: DeviceCertificate[];
}

export interface AddDeviceCertificateRequest {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest";
  /**
   * ID of the device for which the certificate is being added.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /** Public part of the certificate. */
  certificateData: string;
}

export interface AddDeviceCertificateMetadata {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata";
  /** ID of the device certificate that is being added. */
  deviceId: string;
  /** Fingerprint of the certificate that is being added. */
  fingerprint: string;
}

export interface DeleteDeviceCertificateRequest {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest";
  /**
   * ID of the device to delete a certificate for.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /** Fingerprint of the certificate to delete. */
  fingerprint: string;
}

export interface DeleteDeviceCertificateMetadata {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata";
  /** ID of the device certificate that is being deleted. */
  deviceId: string;
  /** Fingerprint of the certificate that is being deleted. */
  fingerprint: string;
}

export interface ListDevicePasswordsRequest {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest";
  /**
   * ID of the registry to list passwords in.
   *
   * To get a registry ID make a [RegistryService.List] request.
   */
  deviceId: string;
}

export interface ListDevicePasswordsResponse {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse";
  /** List of passwords for the specified device. */
  passwords: DevicePassword[];
}

export interface AddDevicePasswordRequest {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest";
  /**
   * ID of the device to add a password for.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /**
   * Passwords for the device.
   *
   * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
   */
  password: string;
}

export interface AddDevicePasswordMetadata {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata";
  /** ID of the device for which the password is being added. */
  deviceId: string;
  /** ID of the password that is being added. */
  passwordId: string;
}

export interface DeleteDevicePasswordRequest {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest";
  /**
   * ID of the device to delete a password for.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /**
   * ID of the password to delete.
   *
   * To get a password ID make a [DeviceService.ListPasswords] request.
   */
  passwordId: string;
}

export interface DeleteDevicePasswordMetadata {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata";
  /** ID of the device for which the password is being deleted. */
  deviceId: string;
  /** ID of the password that is being deleted. */
  passwordId: string;
}

export interface ListDeviceOperationsRequest {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest";
  /**
   * ID of the device to list operations for.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListDeviceOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDeviceOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [Device.name] field.
   */
  filter: string;
}

export interface ListDeviceOperationsResponse {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse";
  /** List of operations for the specified device certificate. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDeviceOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListDeviceOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetDeviceRequest(): GetDeviceRequest {
  return { $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest", deviceId: "", deviceView: 0 };
}

export const GetDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest" as const,

  encode(message: GetDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.deviceView !== 0) {
      writer.uint32(16).int32(message.deviceView);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.deviceView = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDeviceRequest {
    return {
      $type: GetDeviceRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      deviceView: isSet(object.deviceView) ? deviceViewFromJSON(object.deviceView) : 0,
    };
  },

  toJSON(message: GetDeviceRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.deviceView !== 0) {
      obj.deviceView = deviceViewToJSON(message.deviceView);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDeviceRequest>, I>>(base?: I): GetDeviceRequest {
    return GetDeviceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDeviceRequest>, I>>(object: I): GetDeviceRequest {
    const message = createBaseGetDeviceRequest();
    message.deviceId = object.deviceId ?? "";
    message.deviceView = object.deviceView ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetDeviceRequest.$type, GetDeviceRequest);

function createBaseGetByNameDeviceRequest(): GetByNameDeviceRequest {
  return { $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest", registryId: "", deviceName: "", deviceView: 0 };
}

export const GetByNameDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest" as const,

  encode(message: GetByNameDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.deviceView !== 0) {
      writer.uint32(24).int32(message.deviceView);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetByNameDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetByNameDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deviceName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deviceView = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetByNameDeviceRequest {
    return {
      $type: GetByNameDeviceRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      deviceName: isSet(object.deviceName) ? globalThis.String(object.deviceName) : "",
      deviceView: isSet(object.deviceView) ? deviceViewFromJSON(object.deviceView) : 0,
    };
  },

  toJSON(message: GetByNameDeviceRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.deviceName !== "") {
      obj.deviceName = message.deviceName;
    }
    if (message.deviceView !== 0) {
      obj.deviceView = deviceViewToJSON(message.deviceView);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetByNameDeviceRequest>, I>>(base?: I): GetByNameDeviceRequest {
    return GetByNameDeviceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetByNameDeviceRequest>, I>>(object: I): GetByNameDeviceRequest {
    const message = createBaseGetByNameDeviceRequest();
    message.registryId = object.registryId ?? "";
    message.deviceName = object.deviceName ?? "";
    message.deviceView = object.deviceView ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetByNameDeviceRequest.$type, GetByNameDeviceRequest);

function createBaseListDevicesRequest(): ListDevicesRequest {
  return {
    $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest",
    registryId: undefined,
    folderId: undefined,
    pageSize: 0,
    pageToken: "",
    deviceView: 0,
  };
}

export const ListDevicesRequest = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest" as const,

  encode(message: ListDevicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== undefined) {
      writer.uint32(10).string(message.registryId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.deviceView !== 0) {
      writer.uint32(40).int32(message.deviceView);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDevicesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDevicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.deviceView = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDevicesRequest {
    return {
      $type: ListDevicesRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      deviceView: isSet(object.deviceView) ? deviceViewFromJSON(object.deviceView) : 0,
    };
  },

  toJSON(message: ListDevicesRequest): unknown {
    const obj: any = {};
    if (message.registryId !== undefined) {
      obj.registryId = message.registryId;
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.deviceView !== 0) {
      obj.deviceView = deviceViewToJSON(message.deviceView);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDevicesRequest>, I>>(base?: I): ListDevicesRequest {
    return ListDevicesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDevicesRequest>, I>>(object: I): ListDevicesRequest {
    const message = createBaseListDevicesRequest();
    message.registryId = object.registryId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.deviceView = object.deviceView ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListDevicesRequest.$type, ListDevicesRequest);

function createBaseListDevicesResponse(): ListDevicesResponse {
  return { $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse", devices: [], nextPageToken: "" };
}

export const ListDevicesResponse = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse" as const,

  encode(message: ListDevicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devices) {
      Device.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDevicesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDevicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.devices.push(Device.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDevicesResponse {
    return {
      $type: ListDevicesResponse.$type,
      devices: globalThis.Array.isArray(object?.devices) ? object.devices.map((e: any) => Device.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDevicesResponse): unknown {
    const obj: any = {};
    if (message.devices?.length) {
      obj.devices = message.devices.map((e) => Device.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDevicesResponse>, I>>(base?: I): ListDevicesResponse {
    return ListDevicesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDevicesResponse>, I>>(object: I): ListDevicesResponse {
    const message = createBaseListDevicesResponse();
    message.devices = object.devices?.map((e) => Device.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDevicesResponse.$type, ListDevicesResponse);

function createBaseCreateDeviceRequest(): CreateDeviceRequest {
  return {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest",
    registryId: "",
    name: "",
    description: "",
    certificates: [],
    topicAliases: {},
    password: "",
  };
}

export const CreateDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest" as const,

  encode(message: CreateDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.certificates) {
      CreateDeviceRequest_Certificate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.topicAliases).forEach(([key, value]) => {
      CreateDeviceRequest_TopicAliasesEntry.encode({
        $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.certificates.push(CreateDeviceRequest_Certificate.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = CreateDeviceRequest_TopicAliasesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.topicAliases[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDeviceRequest {
    return {
      $type: CreateDeviceRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      certificates: globalThis.Array.isArray(object?.certificates)
        ? object.certificates.map((e: any) => CreateDeviceRequest_Certificate.fromJSON(e))
        : [],
      topicAliases: isObject(object.topicAliases)
        ? Object.entries(object.topicAliases).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: CreateDeviceRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.certificates?.length) {
      obj.certificates = message.certificates.map((e) => CreateDeviceRequest_Certificate.toJSON(e));
    }
    if (message.topicAliases) {
      const entries = Object.entries(message.topicAliases);
      if (entries.length > 0) {
        obj.topicAliases = {};
        entries.forEach(([k, v]) => {
          obj.topicAliases[k] = v;
        });
      }
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDeviceRequest>, I>>(base?: I): CreateDeviceRequest {
    return CreateDeviceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDeviceRequest>, I>>(object: I): CreateDeviceRequest {
    const message = createBaseCreateDeviceRequest();
    message.registryId = object.registryId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.certificates = object.certificates?.map((e) => CreateDeviceRequest_Certificate.fromPartial(e)) || [];
    message.topicAliases = Object.entries(object.topicAliases ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDeviceRequest.$type, CreateDeviceRequest);

function createBaseCreateDeviceRequest_TopicAliasesEntry(): CreateDeviceRequest_TopicAliasesEntry {
  return { $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry", key: "", value: "" };
}

export const CreateDeviceRequest_TopicAliasesEntry = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry" as const,

  encode(message: CreateDeviceRequest_TopicAliasesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeviceRequest_TopicAliasesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDeviceRequest_TopicAliasesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDeviceRequest_TopicAliasesEntry {
    return {
      $type: CreateDeviceRequest_TopicAliasesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateDeviceRequest_TopicAliasesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDeviceRequest_TopicAliasesEntry>, I>>(
    base?: I,
  ): CreateDeviceRequest_TopicAliasesEntry {
    return CreateDeviceRequest_TopicAliasesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDeviceRequest_TopicAliasesEntry>, I>>(
    object: I,
  ): CreateDeviceRequest_TopicAliasesEntry {
    const message = createBaseCreateDeviceRequest_TopicAliasesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDeviceRequest_TopicAliasesEntry.$type, CreateDeviceRequest_TopicAliasesEntry);

function createBaseCreateDeviceRequest_Certificate(): CreateDeviceRequest_Certificate {
  return { $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate", certificateData: "" };
}

export const CreateDeviceRequest_Certificate = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate" as const,

  encode(message: CreateDeviceRequest_Certificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateData !== "") {
      writer.uint32(10).string(message.certificateData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeviceRequest_Certificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDeviceRequest_Certificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateData = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDeviceRequest_Certificate {
    return {
      $type: CreateDeviceRequest_Certificate.$type,
      certificateData: isSet(object.certificateData) ? globalThis.String(object.certificateData) : "",
    };
  },

  toJSON(message: CreateDeviceRequest_Certificate): unknown {
    const obj: any = {};
    if (message.certificateData !== "") {
      obj.certificateData = message.certificateData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDeviceRequest_Certificate>, I>>(base?: I): CreateDeviceRequest_Certificate {
    return CreateDeviceRequest_Certificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDeviceRequest_Certificate>, I>>(
    object: I,
  ): CreateDeviceRequest_Certificate {
    const message = createBaseCreateDeviceRequest_Certificate();
    message.certificateData = object.certificateData ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDeviceRequest_Certificate.$type, CreateDeviceRequest_Certificate);

function createBaseCreateDeviceMetadata(): CreateDeviceMetadata {
  return { $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata", deviceId: "" };
}

export const CreateDeviceMetadata = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata" as const,

  encode(message: CreateDeviceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeviceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDeviceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDeviceMetadata {
    return {
      $type: CreateDeviceMetadata.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
    };
  },

  toJSON(message: CreateDeviceMetadata): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDeviceMetadata>, I>>(base?: I): CreateDeviceMetadata {
    return CreateDeviceMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDeviceMetadata>, I>>(object: I): CreateDeviceMetadata {
    const message = createBaseCreateDeviceMetadata();
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDeviceMetadata.$type, CreateDeviceMetadata);

function createBaseUpdateDeviceRequest(): UpdateDeviceRequest {
  return {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest",
    deviceId: "",
    updateMask: undefined,
    name: "",
    description: "",
    topicAliases: {},
  };
}

export const UpdateDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest" as const,

  encode(message: UpdateDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.topicAliases).forEach(([key, value]) => {
      UpdateDeviceRequest_TopicAliasesEntry.encode({
        $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = UpdateDeviceRequest_TopicAliasesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.topicAliases[entry5.key] = entry5.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDeviceRequest {
    return {
      $type: UpdateDeviceRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      topicAliases: isObject(object.topicAliases)
        ? Object.entries(object.topicAliases).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpdateDeviceRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.topicAliases) {
      const entries = Object.entries(message.topicAliases);
      if (entries.length > 0) {
        obj.topicAliases = {};
        entries.forEach(([k, v]) => {
          obj.topicAliases[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDeviceRequest>, I>>(base?: I): UpdateDeviceRequest {
    return UpdateDeviceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDeviceRequest>, I>>(object: I): UpdateDeviceRequest {
    const message = createBaseUpdateDeviceRequest();
    message.deviceId = object.deviceId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.topicAliases = Object.entries(object.topicAliases ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

messageTypeRegistry.set(UpdateDeviceRequest.$type, UpdateDeviceRequest);

function createBaseUpdateDeviceRequest_TopicAliasesEntry(): UpdateDeviceRequest_TopicAliasesEntry {
  return { $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry", key: "", value: "" };
}

export const UpdateDeviceRequest_TopicAliasesEntry = {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry" as const,

  encode(message: UpdateDeviceRequest_TopicAliasesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDeviceRequest_TopicAliasesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDeviceRequest_TopicAliasesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDeviceRequest_TopicAliasesEntry {
    return {
      $type: UpdateDeviceRequest_TopicAliasesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateDeviceRequest_TopicAliasesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDeviceRequest_TopicAliasesEntry>, I>>(
    base?: I,
  ): UpdateDeviceRequest_TopicAliasesEntry {
    return UpdateDeviceRequest_TopicAliasesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDeviceRequest_TopicAliasesEntry>, I>>(
    object: I,
  ): UpdateDeviceRequest_TopicAliasesEntry {
    const message = createBaseUpdateDeviceRequest_TopicAliasesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDeviceRequest_TopicAliasesEntry.$type, UpdateDeviceRequest_TopicAliasesEntry);

function createBaseUpdateDeviceMetadata(): UpdateDeviceMetadata {
  return { $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata", deviceId: "" };
}

export const UpdateDeviceMetadata = {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata" as const,

  encode(message: UpdateDeviceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDeviceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDeviceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDeviceMetadata {
    return {
      $type: UpdateDeviceMetadata.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
    };
  },

  toJSON(message: UpdateDeviceMetadata): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDeviceMetadata>, I>>(base?: I): UpdateDeviceMetadata {
    return UpdateDeviceMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDeviceMetadata>, I>>(object: I): UpdateDeviceMetadata {
    const message = createBaseUpdateDeviceMetadata();
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDeviceMetadata.$type, UpdateDeviceMetadata);

function createBaseDeleteDeviceRequest(): DeleteDeviceRequest {
  return { $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest", deviceId: "" };
}

export const DeleteDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest" as const,

  encode(message: DeleteDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDeviceRequest {
    return {
      $type: DeleteDeviceRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
    };
  },

  toJSON(message: DeleteDeviceRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDeviceRequest>, I>>(base?: I): DeleteDeviceRequest {
    return DeleteDeviceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDeviceRequest>, I>>(object: I): DeleteDeviceRequest {
    const message = createBaseDeleteDeviceRequest();
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDeviceRequest.$type, DeleteDeviceRequest);

function createBaseDeleteDeviceMetadata(): DeleteDeviceMetadata {
  return { $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata", deviceId: "" };
}

export const DeleteDeviceMetadata = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata" as const,

  encode(message: DeleteDeviceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDeviceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDeviceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDeviceMetadata {
    return {
      $type: DeleteDeviceMetadata.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
    };
  },

  toJSON(message: DeleteDeviceMetadata): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDeviceMetadata>, I>>(base?: I): DeleteDeviceMetadata {
    return DeleteDeviceMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDeviceMetadata>, I>>(object: I): DeleteDeviceMetadata {
    const message = createBaseDeleteDeviceMetadata();
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDeviceMetadata.$type, DeleteDeviceMetadata);

function createBaseListDeviceCertificatesRequest(): ListDeviceCertificatesRequest {
  return { $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest", deviceId: "" };
}

export const ListDeviceCertificatesRequest = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest" as const,

  encode(message: ListDeviceCertificatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDeviceCertificatesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDeviceCertificatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDeviceCertificatesRequest {
    return {
      $type: ListDeviceCertificatesRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
    };
  },

  toJSON(message: ListDeviceCertificatesRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDeviceCertificatesRequest>, I>>(base?: I): ListDeviceCertificatesRequest {
    return ListDeviceCertificatesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDeviceCertificatesRequest>, I>>(
    object: I,
  ): ListDeviceCertificatesRequest {
    const message = createBaseListDeviceCertificatesRequest();
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDeviceCertificatesRequest.$type, ListDeviceCertificatesRequest);

function createBaseListDeviceCertificatesResponse(): ListDeviceCertificatesResponse {
  return { $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse", certificates: [] };
}

export const ListDeviceCertificatesResponse = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse" as const,

  encode(message: ListDeviceCertificatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.certificates) {
      DeviceCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDeviceCertificatesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDeviceCertificatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificates.push(DeviceCertificate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDeviceCertificatesResponse {
    return {
      $type: ListDeviceCertificatesResponse.$type,
      certificates: globalThis.Array.isArray(object?.certificates)
        ? object.certificates.map((e: any) => DeviceCertificate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListDeviceCertificatesResponse): unknown {
    const obj: any = {};
    if (message.certificates?.length) {
      obj.certificates = message.certificates.map((e) => DeviceCertificate.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDeviceCertificatesResponse>, I>>(base?: I): ListDeviceCertificatesResponse {
    return ListDeviceCertificatesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDeviceCertificatesResponse>, I>>(
    object: I,
  ): ListDeviceCertificatesResponse {
    const message = createBaseListDeviceCertificatesResponse();
    message.certificates = object.certificates?.map((e) => DeviceCertificate.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListDeviceCertificatesResponse.$type, ListDeviceCertificatesResponse);

function createBaseAddDeviceCertificateRequest(): AddDeviceCertificateRequest {
  return { $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest", deviceId: "", certificateData: "" };
}

export const AddDeviceCertificateRequest = {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest" as const,

  encode(message: AddDeviceCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.certificateData !== "") {
      writer.uint32(26).string(message.certificateData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDeviceCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDeviceCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.certificateData = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDeviceCertificateRequest {
    return {
      $type: AddDeviceCertificateRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      certificateData: isSet(object.certificateData) ? globalThis.String(object.certificateData) : "",
    };
  },

  toJSON(message: AddDeviceCertificateRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.certificateData !== "") {
      obj.certificateData = message.certificateData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddDeviceCertificateRequest>, I>>(base?: I): AddDeviceCertificateRequest {
    return AddDeviceCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddDeviceCertificateRequest>, I>>(object: I): AddDeviceCertificateRequest {
    const message = createBaseAddDeviceCertificateRequest();
    message.deviceId = object.deviceId ?? "";
    message.certificateData = object.certificateData ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddDeviceCertificateRequest.$type, AddDeviceCertificateRequest);

function createBaseAddDeviceCertificateMetadata(): AddDeviceCertificateMetadata {
  return { $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata", deviceId: "", fingerprint: "" };
}

export const AddDeviceCertificateMetadata = {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata" as const,

  encode(message: AddDeviceCertificateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDeviceCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDeviceCertificateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fingerprint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDeviceCertificateMetadata {
    return {
      $type: AddDeviceCertificateMetadata.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
    };
  },

  toJSON(message: AddDeviceCertificateMetadata): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.fingerprint !== "") {
      obj.fingerprint = message.fingerprint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddDeviceCertificateMetadata>, I>>(base?: I): AddDeviceCertificateMetadata {
    return AddDeviceCertificateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddDeviceCertificateMetadata>, I>>(object: I): AddDeviceCertificateMetadata {
    const message = createBaseAddDeviceCertificateMetadata();
    message.deviceId = object.deviceId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddDeviceCertificateMetadata.$type, AddDeviceCertificateMetadata);

function createBaseDeleteDeviceCertificateRequest(): DeleteDeviceCertificateRequest {
  return { $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest", deviceId: "", fingerprint: "" };
}

export const DeleteDeviceCertificateRequest = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest" as const,

  encode(message: DeleteDeviceCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDeviceCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDeviceCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fingerprint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDeviceCertificateRequest {
    return {
      $type: DeleteDeviceCertificateRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
    };
  },

  toJSON(message: DeleteDeviceCertificateRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.fingerprint !== "") {
      obj.fingerprint = message.fingerprint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDeviceCertificateRequest>, I>>(base?: I): DeleteDeviceCertificateRequest {
    return DeleteDeviceCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDeviceCertificateRequest>, I>>(
    object: I,
  ): DeleteDeviceCertificateRequest {
    const message = createBaseDeleteDeviceCertificateRequest();
    message.deviceId = object.deviceId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDeviceCertificateRequest.$type, DeleteDeviceCertificateRequest);

function createBaseDeleteDeviceCertificateMetadata(): DeleteDeviceCertificateMetadata {
  return { $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata", deviceId: "", fingerprint: "" };
}

export const DeleteDeviceCertificateMetadata = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata" as const,

  encode(message: DeleteDeviceCertificateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDeviceCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDeviceCertificateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fingerprint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDeviceCertificateMetadata {
    return {
      $type: DeleteDeviceCertificateMetadata.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
    };
  },

  toJSON(message: DeleteDeviceCertificateMetadata): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.fingerprint !== "") {
      obj.fingerprint = message.fingerprint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDeviceCertificateMetadata>, I>>(base?: I): DeleteDeviceCertificateMetadata {
    return DeleteDeviceCertificateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDeviceCertificateMetadata>, I>>(
    object: I,
  ): DeleteDeviceCertificateMetadata {
    const message = createBaseDeleteDeviceCertificateMetadata();
    message.deviceId = object.deviceId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDeviceCertificateMetadata.$type, DeleteDeviceCertificateMetadata);

function createBaseListDevicePasswordsRequest(): ListDevicePasswordsRequest {
  return { $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest", deviceId: "" };
}

export const ListDevicePasswordsRequest = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest" as const,

  encode(message: ListDevicePasswordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDevicePasswordsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDevicePasswordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDevicePasswordsRequest {
    return {
      $type: ListDevicePasswordsRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
    };
  },

  toJSON(message: ListDevicePasswordsRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDevicePasswordsRequest>, I>>(base?: I): ListDevicePasswordsRequest {
    return ListDevicePasswordsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDevicePasswordsRequest>, I>>(object: I): ListDevicePasswordsRequest {
    const message = createBaseListDevicePasswordsRequest();
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDevicePasswordsRequest.$type, ListDevicePasswordsRequest);

function createBaseListDevicePasswordsResponse(): ListDevicePasswordsResponse {
  return { $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse", passwords: [] };
}

export const ListDevicePasswordsResponse = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse" as const,

  encode(message: ListDevicePasswordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.passwords) {
      DevicePassword.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDevicePasswordsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDevicePasswordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.passwords.push(DevicePassword.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDevicePasswordsResponse {
    return {
      $type: ListDevicePasswordsResponse.$type,
      passwords: globalThis.Array.isArray(object?.passwords)
        ? object.passwords.map((e: any) => DevicePassword.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListDevicePasswordsResponse): unknown {
    const obj: any = {};
    if (message.passwords?.length) {
      obj.passwords = message.passwords.map((e) => DevicePassword.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDevicePasswordsResponse>, I>>(base?: I): ListDevicePasswordsResponse {
    return ListDevicePasswordsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDevicePasswordsResponse>, I>>(object: I): ListDevicePasswordsResponse {
    const message = createBaseListDevicePasswordsResponse();
    message.passwords = object.passwords?.map((e) => DevicePassword.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListDevicePasswordsResponse.$type, ListDevicePasswordsResponse);

function createBaseAddDevicePasswordRequest(): AddDevicePasswordRequest {
  return { $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest", deviceId: "", password: "" };
}

export const AddDevicePasswordRequest = {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest" as const,

  encode(message: AddDevicePasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDevicePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDevicePasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDevicePasswordRequest {
    return {
      $type: AddDevicePasswordRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: AddDevicePasswordRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddDevicePasswordRequest>, I>>(base?: I): AddDevicePasswordRequest {
    return AddDevicePasswordRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddDevicePasswordRequest>, I>>(object: I): AddDevicePasswordRequest {
    const message = createBaseAddDevicePasswordRequest();
    message.deviceId = object.deviceId ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddDevicePasswordRequest.$type, AddDevicePasswordRequest);

function createBaseAddDevicePasswordMetadata(): AddDevicePasswordMetadata {
  return { $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata", deviceId: "", passwordId: "" };
}

export const AddDevicePasswordMetadata = {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata" as const,

  encode(message: AddDevicePasswordMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDevicePasswordMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDevicePasswordMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passwordId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDevicePasswordMetadata {
    return {
      $type: AddDevicePasswordMetadata.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      passwordId: isSet(object.passwordId) ? globalThis.String(object.passwordId) : "",
    };
  },

  toJSON(message: AddDevicePasswordMetadata): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.passwordId !== "") {
      obj.passwordId = message.passwordId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddDevicePasswordMetadata>, I>>(base?: I): AddDevicePasswordMetadata {
    return AddDevicePasswordMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddDevicePasswordMetadata>, I>>(object: I): AddDevicePasswordMetadata {
    const message = createBaseAddDevicePasswordMetadata();
    message.deviceId = object.deviceId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddDevicePasswordMetadata.$type, AddDevicePasswordMetadata);

function createBaseDeleteDevicePasswordRequest(): DeleteDevicePasswordRequest {
  return { $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest", deviceId: "", passwordId: "" };
}

export const DeleteDevicePasswordRequest = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest" as const,

  encode(message: DeleteDevicePasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDevicePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDevicePasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passwordId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDevicePasswordRequest {
    return {
      $type: DeleteDevicePasswordRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      passwordId: isSet(object.passwordId) ? globalThis.String(object.passwordId) : "",
    };
  },

  toJSON(message: DeleteDevicePasswordRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.passwordId !== "") {
      obj.passwordId = message.passwordId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDevicePasswordRequest>, I>>(base?: I): DeleteDevicePasswordRequest {
    return DeleteDevicePasswordRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDevicePasswordRequest>, I>>(object: I): DeleteDevicePasswordRequest {
    const message = createBaseDeleteDevicePasswordRequest();
    message.deviceId = object.deviceId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDevicePasswordRequest.$type, DeleteDevicePasswordRequest);

function createBaseDeleteDevicePasswordMetadata(): DeleteDevicePasswordMetadata {
  return { $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata", deviceId: "", passwordId: "" };
}

export const DeleteDevicePasswordMetadata = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata" as const,

  encode(message: DeleteDevicePasswordMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDevicePasswordMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDevicePasswordMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passwordId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDevicePasswordMetadata {
    return {
      $type: DeleteDevicePasswordMetadata.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      passwordId: isSet(object.passwordId) ? globalThis.String(object.passwordId) : "",
    };
  },

  toJSON(message: DeleteDevicePasswordMetadata): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.passwordId !== "") {
      obj.passwordId = message.passwordId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDevicePasswordMetadata>, I>>(base?: I): DeleteDevicePasswordMetadata {
    return DeleteDevicePasswordMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDevicePasswordMetadata>, I>>(object: I): DeleteDevicePasswordMetadata {
    const message = createBaseDeleteDevicePasswordMetadata();
    message.deviceId = object.deviceId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDevicePasswordMetadata.$type, DeleteDevicePasswordMetadata);

function createBaseListDeviceOperationsRequest(): ListDeviceOperationsRequest {
  return {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest",
    deviceId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListDeviceOperationsRequest = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest" as const,

  encode(message: ListDeviceOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDeviceOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDeviceOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDeviceOperationsRequest {
    return {
      $type: ListDeviceOperationsRequest.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListDeviceOperationsRequest): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDeviceOperationsRequest>, I>>(base?: I): ListDeviceOperationsRequest {
    return ListDeviceOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDeviceOperationsRequest>, I>>(object: I): ListDeviceOperationsRequest {
    const message = createBaseListDeviceOperationsRequest();
    message.deviceId = object.deviceId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDeviceOperationsRequest.$type, ListDeviceOperationsRequest);

function createBaseListDeviceOperationsResponse(): ListDeviceOperationsResponse {
  return { $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListDeviceOperationsResponse = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse" as const,

  encode(message: ListDeviceOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDeviceOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDeviceOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operations.push(Operation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDeviceOperationsResponse {
    return {
      $type: ListDeviceOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDeviceOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDeviceOperationsResponse>, I>>(base?: I): ListDeviceOperationsResponse {
    return ListDeviceOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDeviceOperationsResponse>, I>>(object: I): ListDeviceOperationsResponse {
    const message = createBaseListDeviceOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDeviceOperationsResponse.$type, ListDeviceOperationsResponse);

/** A set of methods for managing devices. */
export type DeviceServiceService = typeof DeviceServiceService;
export const DeviceServiceService = {
  /**
   * Returns the specified device.
   *
   * To get the list of available devices, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDeviceRequest) => Buffer.from(GetDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDeviceRequest.decode(value),
    responseSerialize: (value: Device) => Buffer.from(Device.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Device.decode(value),
  },
  getByName: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/GetByName",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetByNameDeviceRequest) => Buffer.from(GetByNameDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetByNameDeviceRequest.decode(value),
    responseSerialize: (value: Device) => Buffer.from(Device.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Device.decode(value),
  },
  /** Retrieves the list of devices in the specified registry. */
  list: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDevicesRequest) => Buffer.from(ListDevicesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDevicesRequest.decode(value),
    responseSerialize: (value: ListDevicesResponse) => Buffer.from(ListDevicesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDevicesResponse.decode(value),
  },
  /** Creates a device in the specified registry. */
  create: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDeviceRequest) => Buffer.from(CreateDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDeviceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified device. */
  update: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDeviceRequest) => Buffer.from(UpdateDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateDeviceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified device. */
  delete: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDeviceRequest) => Buffer.from(DeleteDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDeviceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of device certificates for the specified device. */
  listCertificates: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDeviceCertificatesRequest) =>
      Buffer.from(ListDeviceCertificatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDeviceCertificatesRequest.decode(value),
    responseSerialize: (value: ListDeviceCertificatesResponse) =>
      Buffer.from(ListDeviceCertificatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDeviceCertificatesResponse.decode(value),
  },
  /** Adds a certificate. */
  addCertificate: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddDeviceCertificateRequest) =>
      Buffer.from(AddDeviceCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddDeviceCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified device certificate. */
  deleteCertificate: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDeviceCertificateRequest) =>
      Buffer.from(DeleteDeviceCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDeviceCertificateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of passwords for the specified device. */
  listPasswords: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDevicePasswordsRequest) =>
      Buffer.from(ListDevicePasswordsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDevicePasswordsRequest.decode(value),
    responseSerialize: (value: ListDevicePasswordsResponse) =>
      Buffer.from(ListDevicePasswordsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDevicePasswordsResponse.decode(value),
  },
  /** Adds password for the specified device. */
  addPassword: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/AddPassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddDevicePasswordRequest) => Buffer.from(AddDevicePasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddDevicePasswordRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified password. */
  deletePassword: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDevicePasswordRequest) =>
      Buffer.from(DeleteDevicePasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDevicePasswordRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified device. */
  listOperations: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDeviceOperationsRequest) =>
      Buffer.from(ListDeviceOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDeviceOperationsRequest.decode(value),
    responseSerialize: (value: ListDeviceOperationsResponse) =>
      Buffer.from(ListDeviceOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDeviceOperationsResponse.decode(value),
  },
} as const;

export interface DeviceServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified device.
   *
   * To get the list of available devices, make a [List] request.
   */
  get: handleUnaryCall<GetDeviceRequest, Device>;
  getByName: handleUnaryCall<GetByNameDeviceRequest, Device>;
  /** Retrieves the list of devices in the specified registry. */
  list: handleUnaryCall<ListDevicesRequest, ListDevicesResponse>;
  /** Creates a device in the specified registry. */
  create: handleUnaryCall<CreateDeviceRequest, Operation>;
  /** Updates the specified device. */
  update: handleUnaryCall<UpdateDeviceRequest, Operation>;
  /** Deletes the specified device. */
  delete: handleUnaryCall<DeleteDeviceRequest, Operation>;
  /** Retrieves the list of device certificates for the specified device. */
  listCertificates: handleUnaryCall<ListDeviceCertificatesRequest, ListDeviceCertificatesResponse>;
  /** Adds a certificate. */
  addCertificate: handleUnaryCall<AddDeviceCertificateRequest, Operation>;
  /** Deletes the specified device certificate. */
  deleteCertificate: handleUnaryCall<DeleteDeviceCertificateRequest, Operation>;
  /** Retrieves the list of passwords for the specified device. */
  listPasswords: handleUnaryCall<ListDevicePasswordsRequest, ListDevicePasswordsResponse>;
  /** Adds password for the specified device. */
  addPassword: handleUnaryCall<AddDevicePasswordRequest, Operation>;
  /** Deletes the specified password. */
  deletePassword: handleUnaryCall<DeleteDevicePasswordRequest, Operation>;
  /** Lists operations for the specified device. */
  listOperations: handleUnaryCall<ListDeviceOperationsRequest, ListDeviceOperationsResponse>;
}

export interface DeviceServiceClient extends Client {
  /**
   * Returns the specified device.
   *
   * To get the list of available devices, make a [List] request.
   */
  get(request: GetDeviceRequest, callback: (error: ServiceError | null, response: Device) => void): ClientUnaryCall;
  get(
    request: GetDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Device) => void,
  ): ClientUnaryCall;
  get(
    request: GetDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Device) => void,
  ): ClientUnaryCall;
  getByName(
    request: GetByNameDeviceRequest,
    callback: (error: ServiceError | null, response: Device) => void,
  ): ClientUnaryCall;
  getByName(
    request: GetByNameDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Device) => void,
  ): ClientUnaryCall;
  getByName(
    request: GetByNameDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Device) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of devices in the specified registry. */
  list(
    request: ListDevicesRequest,
    callback: (error: ServiceError | null, response: ListDevicesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDevicesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDevicesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDevicesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDevicesResponse) => void,
  ): ClientUnaryCall;
  /** Creates a device in the specified registry. */
  create(
    request: CreateDeviceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified device. */
  update(
    request: UpdateDeviceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified device. */
  delete(
    request: DeleteDeviceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of device certificates for the specified device. */
  listCertificates(
    request: ListDeviceCertificatesRequest,
    callback: (error: ServiceError | null, response: ListDeviceCertificatesResponse) => void,
  ): ClientUnaryCall;
  listCertificates(
    request: ListDeviceCertificatesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDeviceCertificatesResponse) => void,
  ): ClientUnaryCall;
  listCertificates(
    request: ListDeviceCertificatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDeviceCertificatesResponse) => void,
  ): ClientUnaryCall;
  /** Adds a certificate. */
  addCertificate(
    request: AddDeviceCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addCertificate(
    request: AddDeviceCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addCertificate(
    request: AddDeviceCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified device certificate. */
  deleteCertificate(
    request: DeleteDeviceCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteCertificate(
    request: DeleteDeviceCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteCertificate(
    request: DeleteDeviceCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of passwords for the specified device. */
  listPasswords(
    request: ListDevicePasswordsRequest,
    callback: (error: ServiceError | null, response: ListDevicePasswordsResponse) => void,
  ): ClientUnaryCall;
  listPasswords(
    request: ListDevicePasswordsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDevicePasswordsResponse) => void,
  ): ClientUnaryCall;
  listPasswords(
    request: ListDevicePasswordsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDevicePasswordsResponse) => void,
  ): ClientUnaryCall;
  /** Adds password for the specified device. */
  addPassword(
    request: AddDevicePasswordRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addPassword(
    request: AddDevicePasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addPassword(
    request: AddDevicePasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified password. */
  deletePassword(
    request: DeleteDevicePasswordRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deletePassword(
    request: DeleteDevicePasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deletePassword(
    request: DeleteDevicePasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified device. */
  listOperations(
    request: ListDeviceOperationsRequest,
    callback: (error: ServiceError | null, response: ListDeviceOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListDeviceOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDeviceOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListDeviceOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDeviceOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const DeviceServiceClient = makeGenericClientConstructor(
  DeviceServiceService,
  "yandex.cloud.iot.devices.v1.DeviceService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DeviceServiceClient;
  service: typeof DeviceServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
