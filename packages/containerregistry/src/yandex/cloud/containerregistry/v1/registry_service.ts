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
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "@yandex-cloud/core/dist/generated/yandex/cloud/access/access";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { IpPermission, IpPermissionDelta } from "./ip_permission";
import { Registry } from "./registry";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface GetRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest";
  /**
   * ID of the Registry resource to return.
   *
   * To get the registry ID use a [RegistryService.List] request.
   */
  registryId: string;
}

export interface ListRegistriesRequest {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest";
  /**
   * ID of the folder to list registries in.
   *
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListRegistriesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListRegistriesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Registry.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListRegistriesResponse {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse";
  /** List of Registry resources. */
  registries: Registry[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListRegistriesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListRegistriesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest";
  /**
   * ID of the folder to create a registry in.
   *
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the registry.
   *
   * There may be only one registry per folder.
   */
  name: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface CreateRegistryRequest_LabelsEntry {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateRegistryMetadata {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata";
  /** ID of the registry that is being created. */
  registryId: string;
}

export interface UpdateRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest";
  /**
   * ID of the Registry resource to update.
   *
   * To get the registry ID use a [RegistryService.List] request.
   */
  registryId: string;
  /** Field mask that specifies which fields of the Registry resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the registry.
   *
   * There may be only one registry per folder.
   */
  name: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
}

export interface UpdateRegistryRequest_LabelsEntry {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateRegistryMetadata {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata";
  /** ID of the Registry resource that is being updated. */
  registryId: string;
}

export interface DeleteRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest";
  /** ID of the registry to delete. */
  registryId: string;
}

export interface DeleteRegistryMetadata {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata";
  /** ID of the registry that is being deleted. */
  registryId: string;
}

export interface SetIpPermissionRequest {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest";
  /** ID of the registry for which ip permissions are being set. */
  registryId: string;
  /** IP permission to be set. */
  ipPermission: IpPermission[];
}

export interface UpdateIpPermissionRequest {
  $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest";
  /** ID of the registry for which ip permissions are being updated. */
  registryId: string;
  /** Updates to IP permissions. */
  ipPermissionDeltas: IpPermissionDelta[];
}

export interface ListIpPermissionRequest {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest";
  /** ID of the Registry to return ip permission list. */
  registryId: string;
}

export interface ListIpPermissionsResponse {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse";
  /** List of ip permissions for registry */
  permissions: IpPermission[];
}

export interface SetIpPermissionMetadata {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata";
  /** ID of the registry that ip permission is being set. */
  registryId: string;
}

export interface UpdateIpPermissionMetadata {
  $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata";
  /** ID of the registry that ip permission is being updated. */
  registryId: string;
}

function createBaseGetRegistryRequest(): GetRegistryRequest {
  return { $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest", registryId: "" };
}

export const GetRegistryRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest" as const,

  encode(message: GetRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRegistryRequest {
    return {
      $type: GetRegistryRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
    };
  },

  toJSON(message: GetRegistryRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRegistryRequest>, I>>(base?: I): GetRegistryRequest {
    return GetRegistryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRegistryRequest>, I>>(object: I): GetRegistryRequest {
    const message = createBaseGetRegistryRequest();
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetRegistryRequest.$type, GetRegistryRequest);

function createBaseListRegistriesRequest(): ListRegistriesRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListRegistriesRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest" as const,

  encode(message: ListRegistriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistriesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRegistriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
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

  fromJSON(object: any): ListRegistriesRequest {
    return {
      $type: ListRegistriesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListRegistriesRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
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

  create<I extends Exact<DeepPartial<ListRegistriesRequest>, I>>(base?: I): ListRegistriesRequest {
    return ListRegistriesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRegistriesRequest>, I>>(object: I): ListRegistriesRequest {
    const message = createBaseListRegistriesRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRegistriesRequest.$type, ListRegistriesRequest);

function createBaseListRegistriesResponse(): ListRegistriesResponse {
  return { $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse", registries: [], nextPageToken: "" };
}

export const ListRegistriesResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse" as const,

  encode(message: ListRegistriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.registries) {
      Registry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistriesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRegistriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registries.push(Registry.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListRegistriesResponse {
    return {
      $type: ListRegistriesResponse.$type,
      registries: globalThis.Array.isArray(object?.registries)
        ? object.registries.map((e: any) => Registry.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListRegistriesResponse): unknown {
    const obj: any = {};
    if (message.registries?.length) {
      obj.registries = message.registries.map((e) => Registry.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRegistriesResponse>, I>>(base?: I): ListRegistriesResponse {
    return ListRegistriesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRegistriesResponse>, I>>(object: I): ListRegistriesResponse {
    const message = createBaseListRegistriesResponse();
    message.registries = object.registries?.map((e) => Registry.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRegistriesResponse.$type, ListRegistriesResponse);

function createBaseCreateRegistryRequest(): CreateRegistryRequest {
  return { $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest", folderId: "", name: "", labels: {} };
}

export const CreateRegistryRequest = {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest" as const,

  encode(message: CreateRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateRegistryRequest_LabelsEntry.encode({
        $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
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

          const entry3 = CreateRegistryRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
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

  fromJSON(object: any): CreateRegistryRequest {
    return {
      $type: CreateRegistryRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateRegistryRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRegistryRequest>, I>>(base?: I): CreateRegistryRequest {
    return CreateRegistryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRegistryRequest>, I>>(object: I): CreateRegistryRequest {
    const message = createBaseCreateRegistryRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(CreateRegistryRequest.$type, CreateRegistryRequest);

function createBaseCreateRegistryRequest_LabelsEntry(): CreateRegistryRequest_LabelsEntry {
  return { $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry", key: "", value: "" };
}

export const CreateRegistryRequest_LabelsEntry = {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry" as const,

  encode(message: CreateRegistryRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegistryRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRegistryRequest_LabelsEntry();
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

  fromJSON(object: any): CreateRegistryRequest_LabelsEntry {
    return {
      $type: CreateRegistryRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateRegistryRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRegistryRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateRegistryRequest_LabelsEntry {
    return CreateRegistryRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRegistryRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateRegistryRequest_LabelsEntry {
    const message = createBaseCreateRegistryRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateRegistryRequest_LabelsEntry.$type, CreateRegistryRequest_LabelsEntry);

function createBaseCreateRegistryMetadata(): CreateRegistryMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata", registryId: "" };
}

export const CreateRegistryMetadata = {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata" as const,

  encode(message: CreateRegistryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegistryMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRegistryMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateRegistryMetadata {
    return {
      $type: CreateRegistryMetadata.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
    };
  },

  toJSON(message: CreateRegistryMetadata): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRegistryMetadata>, I>>(base?: I): CreateRegistryMetadata {
    return CreateRegistryMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRegistryMetadata>, I>>(object: I): CreateRegistryMetadata {
    const message = createBaseCreateRegistryMetadata();
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateRegistryMetadata.$type, CreateRegistryMetadata);

function createBaseUpdateRegistryRequest(): UpdateRegistryRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest",
    registryId: "",
    updateMask: undefined,
    name: "",
    labels: {},
  };
}

export const UpdateRegistryRequest = {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest" as const,

  encode(message: UpdateRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateRegistryRequest_LabelsEntry.encode({
        $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRegistryRequest();
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

          const entry4 = UpdateRegistryRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
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

  fromJSON(object: any): UpdateRegistryRequest {
    return {
      $type: UpdateRegistryRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpdateRegistryRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRegistryRequest>, I>>(base?: I): UpdateRegistryRequest {
    return UpdateRegistryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRegistryRequest>, I>>(object: I): UpdateRegistryRequest {
    const message = createBaseUpdateRegistryRequest();
    message.registryId = object.registryId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(UpdateRegistryRequest.$type, UpdateRegistryRequest);

function createBaseUpdateRegistryRequest_LabelsEntry(): UpdateRegistryRequest_LabelsEntry {
  return { $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateRegistryRequest_LabelsEntry = {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry" as const,

  encode(message: UpdateRegistryRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRegistryRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateRegistryRequest_LabelsEntry {
    return {
      $type: UpdateRegistryRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateRegistryRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRegistryRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateRegistryRequest_LabelsEntry {
    return UpdateRegistryRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRegistryRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateRegistryRequest_LabelsEntry {
    const message = createBaseUpdateRegistryRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateRegistryRequest_LabelsEntry.$type, UpdateRegistryRequest_LabelsEntry);

function createBaseUpdateRegistryMetadata(): UpdateRegistryMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata", registryId: "" };
}

export const UpdateRegistryMetadata = {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata" as const,

  encode(message: UpdateRegistryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRegistryMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateRegistryMetadata {
    return {
      $type: UpdateRegistryMetadata.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
    };
  },

  toJSON(message: UpdateRegistryMetadata): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRegistryMetadata>, I>>(base?: I): UpdateRegistryMetadata {
    return UpdateRegistryMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRegistryMetadata>, I>>(object: I): UpdateRegistryMetadata {
    const message = createBaseUpdateRegistryMetadata();
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateRegistryMetadata.$type, UpdateRegistryMetadata);

function createBaseDeleteRegistryRequest(): DeleteRegistryRequest {
  return { $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest", registryId: "" };
}

export const DeleteRegistryRequest = {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest" as const,

  encode(message: DeleteRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteRegistryRequest {
    return {
      $type: DeleteRegistryRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
    };
  },

  toJSON(message: DeleteRegistryRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRegistryRequest>, I>>(base?: I): DeleteRegistryRequest {
    return DeleteRegistryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRegistryRequest>, I>>(object: I): DeleteRegistryRequest {
    const message = createBaseDeleteRegistryRequest();
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteRegistryRequest.$type, DeleteRegistryRequest);

function createBaseDeleteRegistryMetadata(): DeleteRegistryMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata", registryId: "" };
}

export const DeleteRegistryMetadata = {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata" as const,

  encode(message: DeleteRegistryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegistryMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRegistryMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteRegistryMetadata {
    return {
      $type: DeleteRegistryMetadata.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
    };
  },

  toJSON(message: DeleteRegistryMetadata): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRegistryMetadata>, I>>(base?: I): DeleteRegistryMetadata {
    return DeleteRegistryMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRegistryMetadata>, I>>(object: I): DeleteRegistryMetadata {
    const message = createBaseDeleteRegistryMetadata();
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteRegistryMetadata.$type, DeleteRegistryMetadata);

function createBaseSetIpPermissionRequest(): SetIpPermissionRequest {
  return { $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest", registryId: "", ipPermission: [] };
}

export const SetIpPermissionRequest = {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest" as const,

  encode(message: SetIpPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    for (const v of message.ipPermission) {
      IpPermission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetIpPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetIpPermissionRequest();
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

          message.ipPermission.push(IpPermission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetIpPermissionRequest {
    return {
      $type: SetIpPermissionRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      ipPermission: globalThis.Array.isArray(object?.ipPermission)
        ? object.ipPermission.map((e: any) => IpPermission.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SetIpPermissionRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.ipPermission?.length) {
      obj.ipPermission = message.ipPermission.map((e) => IpPermission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetIpPermissionRequest>, I>>(base?: I): SetIpPermissionRequest {
    return SetIpPermissionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetIpPermissionRequest>, I>>(object: I): SetIpPermissionRequest {
    const message = createBaseSetIpPermissionRequest();
    message.registryId = object.registryId ?? "";
    message.ipPermission = object.ipPermission?.map((e) => IpPermission.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(SetIpPermissionRequest.$type, SetIpPermissionRequest);

function createBaseUpdateIpPermissionRequest(): UpdateIpPermissionRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest",
    registryId: "",
    ipPermissionDeltas: [],
  };
}

export const UpdateIpPermissionRequest = {
  $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest" as const,

  encode(message: UpdateIpPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    for (const v of message.ipPermissionDeltas) {
      IpPermissionDelta.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIpPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateIpPermissionRequest();
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

          message.ipPermissionDeltas.push(IpPermissionDelta.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateIpPermissionRequest {
    return {
      $type: UpdateIpPermissionRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      ipPermissionDeltas: globalThis.Array.isArray(object?.ipPermissionDeltas)
        ? object.ipPermissionDeltas.map((e: any) => IpPermissionDelta.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateIpPermissionRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.ipPermissionDeltas?.length) {
      obj.ipPermissionDeltas = message.ipPermissionDeltas.map((e) => IpPermissionDelta.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateIpPermissionRequest>, I>>(base?: I): UpdateIpPermissionRequest {
    return UpdateIpPermissionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateIpPermissionRequest>, I>>(object: I): UpdateIpPermissionRequest {
    const message = createBaseUpdateIpPermissionRequest();
    message.registryId = object.registryId ?? "";
    message.ipPermissionDeltas = object.ipPermissionDeltas?.map((e) => IpPermissionDelta.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateIpPermissionRequest.$type, UpdateIpPermissionRequest);

function createBaseListIpPermissionRequest(): ListIpPermissionRequest {
  return { $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest", registryId: "" };
}

export const ListIpPermissionRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest" as const,

  encode(message: ListIpPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListIpPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListIpPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListIpPermissionRequest {
    return {
      $type: ListIpPermissionRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
    };
  },

  toJSON(message: ListIpPermissionRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListIpPermissionRequest>, I>>(base?: I): ListIpPermissionRequest {
    return ListIpPermissionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListIpPermissionRequest>, I>>(object: I): ListIpPermissionRequest {
    const message = createBaseListIpPermissionRequest();
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListIpPermissionRequest.$type, ListIpPermissionRequest);

function createBaseListIpPermissionsResponse(): ListIpPermissionsResponse {
  return { $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse", permissions: [] };
}

export const ListIpPermissionsResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse" as const,

  encode(message: ListIpPermissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permissions) {
      IpPermission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListIpPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListIpPermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permissions.push(IpPermission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListIpPermissionsResponse {
    return {
      $type: ListIpPermissionsResponse.$type,
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => IpPermission.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListIpPermissionsResponse): unknown {
    const obj: any = {};
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => IpPermission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListIpPermissionsResponse>, I>>(base?: I): ListIpPermissionsResponse {
    return ListIpPermissionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListIpPermissionsResponse>, I>>(object: I): ListIpPermissionsResponse {
    const message = createBaseListIpPermissionsResponse();
    message.permissions = object.permissions?.map((e) => IpPermission.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListIpPermissionsResponse.$type, ListIpPermissionsResponse);

function createBaseSetIpPermissionMetadata(): SetIpPermissionMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata", registryId: "" };
}

export const SetIpPermissionMetadata = {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata" as const,

  encode(message: SetIpPermissionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetIpPermissionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetIpPermissionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetIpPermissionMetadata {
    return {
      $type: SetIpPermissionMetadata.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
    };
  },

  toJSON(message: SetIpPermissionMetadata): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetIpPermissionMetadata>, I>>(base?: I): SetIpPermissionMetadata {
    return SetIpPermissionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetIpPermissionMetadata>, I>>(object: I): SetIpPermissionMetadata {
    const message = createBaseSetIpPermissionMetadata();
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetIpPermissionMetadata.$type, SetIpPermissionMetadata);

function createBaseUpdateIpPermissionMetadata(): UpdateIpPermissionMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata", registryId: "" };
}

export const UpdateIpPermissionMetadata = {
  $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata" as const,

  encode(message: UpdateIpPermissionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIpPermissionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateIpPermissionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateIpPermissionMetadata {
    return {
      $type: UpdateIpPermissionMetadata.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
    };
  },

  toJSON(message: UpdateIpPermissionMetadata): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateIpPermissionMetadata>, I>>(base?: I): UpdateIpPermissionMetadata {
    return UpdateIpPermissionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateIpPermissionMetadata>, I>>(object: I): UpdateIpPermissionMetadata {
    const message = createBaseUpdateIpPermissionMetadata();
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateIpPermissionMetadata.$type, UpdateIpPermissionMetadata);

/** A set of methods for managing Registry resources. */
export type RegistryServiceService = typeof RegistryServiceService;
export const RegistryServiceService = {
  /**
   * Returns the specified Registry resource.
   *
   * To get the list of available Registry resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRegistryRequest) => Buffer.from(GetRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRegistryRequest.decode(value),
    responseSerialize: (value: Registry) => Buffer.from(Registry.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Registry.decode(value),
  },
  /** Retrieves the list of Registry resources in the specified folder. */
  list: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRegistriesRequest) => Buffer.from(ListRegistriesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListRegistriesRequest.decode(value),
    responseSerialize: (value: ListRegistriesResponse) => Buffer.from(ListRegistriesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListRegistriesResponse.decode(value),
  },
  /** Creates a registry in the specified folder. */
  create: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateRegistryRequest) => Buffer.from(CreateRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateRegistryRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified registry. */
  update: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateRegistryRequest) => Buffer.from(UpdateRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateRegistryRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified registry. */
  delete: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteRegistryRequest) => Buffer.from(DeleteRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteRegistryRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists access bindings for the specified registry. */
  listAccessBindings: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified registry. */
  setAccessBindings: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified registry. */
  updateAccessBindings: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List ip permissions for the specified registry. */
  listIpPermission: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/ListIpPermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListIpPermissionRequest) => Buffer.from(ListIpPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListIpPermissionRequest.decode(value),
    responseSerialize: (value: ListIpPermissionsResponse) =>
      Buffer.from(ListIpPermissionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListIpPermissionsResponse.decode(value),
  },
  /** Set ip permissions for the specified registry. */
  setIpPermission: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/SetIpPermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetIpPermissionRequest) => Buffer.from(SetIpPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetIpPermissionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Update ip permissions for the specified registry. */
  updateIpPermission: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateIpPermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateIpPermissionRequest) =>
      Buffer.from(UpdateIpPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateIpPermissionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface RegistryServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Registry resource.
   *
   * To get the list of available Registry resources, make a [List] request.
   */
  get: handleUnaryCall<GetRegistryRequest, Registry>;
  /** Retrieves the list of Registry resources in the specified folder. */
  list: handleUnaryCall<ListRegistriesRequest, ListRegistriesResponse>;
  /** Creates a registry in the specified folder. */
  create: handleUnaryCall<CreateRegistryRequest, Operation>;
  /** Updates the specified registry. */
  update: handleUnaryCall<UpdateRegistryRequest, Operation>;
  /** Deletes the specified registry. */
  delete: handleUnaryCall<DeleteRegistryRequest, Operation>;
  /** Lists access bindings for the specified registry. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the specified registry. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified registry. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /** List ip permissions for the specified registry. */
  listIpPermission: handleUnaryCall<ListIpPermissionRequest, ListIpPermissionsResponse>;
  /** Set ip permissions for the specified registry. */
  setIpPermission: handleUnaryCall<SetIpPermissionRequest, Operation>;
  /** Update ip permissions for the specified registry. */
  updateIpPermission: handleUnaryCall<UpdateIpPermissionRequest, Operation>;
}

export interface RegistryServiceClient extends Client {
  /**
   * Returns the specified Registry resource.
   *
   * To get the list of available Registry resources, make a [List] request.
   */
  get(request: GetRegistryRequest, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
  get(
    request: GetRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Registry) => void,
  ): ClientUnaryCall;
  get(
    request: GetRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Registry) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Registry resources in the specified folder. */
  list(
    request: ListRegistriesRequest,
    callback: (error: ServiceError | null, response: ListRegistriesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListRegistriesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListRegistriesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListRegistriesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListRegistriesResponse) => void,
  ): ClientUnaryCall;
  /** Creates a registry in the specified folder. */
  create(
    request: CreateRegistryRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified registry. */
  update(
    request: UpdateRegistryRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified registry. */
  delete(
    request: DeleteRegistryRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists access bindings for the specified registry. */
  listAccessBindings(
    request: ListAccessBindingsRequest,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  /** Sets access bindings for the specified registry. */
  setAccessBindings(
    request: SetAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates access bindings for the specified registry. */
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** List ip permissions for the specified registry. */
  listIpPermission(
    request: ListIpPermissionRequest,
    callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void,
  ): ClientUnaryCall;
  listIpPermission(
    request: ListIpPermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void,
  ): ClientUnaryCall;
  listIpPermission(
    request: ListIpPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void,
  ): ClientUnaryCall;
  /** Set ip permissions for the specified registry. */
  setIpPermission(
    request: SetIpPermissionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setIpPermission(
    request: SetIpPermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setIpPermission(
    request: SetIpPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Update ip permissions for the specified registry. */
  updateIpPermission(
    request: UpdateIpPermissionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateIpPermission(
    request: UpdateIpPermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateIpPermission(
    request: UpdateIpPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const RegistryServiceClient = makeGenericClientConstructor(
  RegistryServiceService,
  "yandex.cloud.containerregistry.v1.RegistryService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RegistryServiceClient;
  service: typeof RegistryServiceService;
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
