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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Proxy, Target } from "./proxy";

export const protobufPackage = "yandex.cloud.serverless.mdbproxy.v1";

export interface GetProxyRequest {
  $type: "yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest";
  /**
   * ID of the proxy to return.
   *
   * To get a proxy ID make a [ProxyService.List] request.
   */
  proxyId: string;
}

export interface ListProxyRequest {
  $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest";
  /**
   * ID of the folder to list proxies in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListProxyResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListProxyResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters proxies listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Proxy.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-proxy`.
   */
  filter: string;
}

export interface ListProxyResponse {
  $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse";
  /** List of proxies in the specified folder. */
  proxies: Proxy[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListProxyRequest.page_size], use `nextPageToken` as the value
   * for the [ListProxyRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateProxyRequest {
  $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest";
  /**
   * ID of the folder to create a proxy in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the proxy.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the proxy. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Proxy target. */
  target?: Target | undefined;
}

export interface CreateProxyRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateProxyMetadata {
  $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata";
  /** ID of the proxy. */
  proxyId: string;
}

export interface UpdateProxyRequest {
  $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest";
  /** ID of the proxy to update. */
  proxyId: string;
  /** Field mask that specifies which attributes of the proxy should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the proxy.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description for the proxy. */
  description: string;
  /** Proxy labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Proxy target. */
  target?: Target | undefined;
}

export interface UpdateProxyRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateProxyMetadata {
  $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata";
  /** ID of the proxy. */
  proxyId: string;
}

export interface DeleteProxyRequest {
  $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest";
  /** ID of the proxy. */
  proxyId: string;
}

export interface DeleteProxyMetadata {
  $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata";
  /** ID of the proxy. */
  proxyId: string;
}

export interface ListProxyOperationsRequest {
  $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest";
  /** ID of the proxy to list operations for. */
  proxyId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListProxyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListProxyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Examples of a filter: `done=false`, `created_by='John.Doe'`.
   */
  filter: string;
}

export interface ListProxyOperationsResponse {
  $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse";
  /** List of operations for the specified proxy. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListProxyOperationsRequest.page_size], use `nextPageToken` as the value
   * for the [ListProxyOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetProxyRequest(): GetProxyRequest {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest", proxyId: "" };
}

export const GetProxyRequest = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest" as const,

  encode(message: GetProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proxyId !== "") {
      writer.uint32(10).string(message.proxyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProxyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProxyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proxyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProxyRequest {
    return { $type: GetProxyRequest.$type, proxyId: isSet(object.proxyId) ? globalThis.String(object.proxyId) : "" };
  },

  toJSON(message: GetProxyRequest): unknown {
    const obj: any = {};
    if (message.proxyId !== "") {
      obj.proxyId = message.proxyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProxyRequest>, I>>(base?: I): GetProxyRequest {
    return GetProxyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProxyRequest>, I>>(object: I): GetProxyRequest {
    const message = createBaseGetProxyRequest();
    message.proxyId = object.proxyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetProxyRequest.$type, GetProxyRequest);

function createBaseListProxyRequest(): ListProxyRequest {
  return {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListProxyRequest = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest" as const,

  encode(message: ListProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProxyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProxyRequest();
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

  fromJSON(object: any): ListProxyRequest {
    return {
      $type: ListProxyRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListProxyRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListProxyRequest>, I>>(base?: I): ListProxyRequest {
    return ListProxyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProxyRequest>, I>>(object: I): ListProxyRequest {
    const message = createBaseListProxyRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProxyRequest.$type, ListProxyRequest);

function createBaseListProxyResponse(): ListProxyResponse {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse", proxies: [], nextPageToken: "" };
}

export const ListProxyResponse = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse" as const,

  encode(message: ListProxyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proxies) {
      Proxy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProxyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProxyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proxies.push(Proxy.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListProxyResponse {
    return {
      $type: ListProxyResponse.$type,
      proxies: globalThis.Array.isArray(object?.proxies) ? object.proxies.map((e: any) => Proxy.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListProxyResponse): unknown {
    const obj: any = {};
    if (message.proxies?.length) {
      obj.proxies = message.proxies.map((e) => Proxy.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProxyResponse>, I>>(base?: I): ListProxyResponse {
    return ListProxyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProxyResponse>, I>>(object: I): ListProxyResponse {
    const message = createBaseListProxyResponse();
    message.proxies = object.proxies?.map((e) => Proxy.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProxyResponse.$type, ListProxyResponse);

function createBaseCreateProxyRequest(): CreateProxyRequest {
  return {
    $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    target: undefined,
  };
}

export const CreateProxyRequest = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest" as const,

  encode(message: CreateProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateProxyRequest_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProxyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProxyRequest();
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

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = CreateProxyRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.target = Target.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProxyRequest {
    return {
      $type: CreateProxyRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
    };
  },

  toJSON(message: CreateProxyRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
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
    if (message.target !== undefined) {
      obj.target = Target.toJSON(message.target);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProxyRequest>, I>>(base?: I): CreateProxyRequest {
    return CreateProxyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProxyRequest>, I>>(object: I): CreateProxyRequest {
    const message = createBaseCreateProxyRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateProxyRequest.$type, CreateProxyRequest);

function createBaseCreateProxyRequest_LabelsEntry(): CreateProxyRequest_LabelsEntry {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry", key: "", value: "" };
}

export const CreateProxyRequest_LabelsEntry = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry" as const,

  encode(message: CreateProxyRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProxyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProxyRequest_LabelsEntry();
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

  fromJSON(object: any): CreateProxyRequest_LabelsEntry {
    return {
      $type: CreateProxyRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateProxyRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProxyRequest_LabelsEntry>, I>>(base?: I): CreateProxyRequest_LabelsEntry {
    return CreateProxyRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProxyRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateProxyRequest_LabelsEntry {
    const message = createBaseCreateProxyRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateProxyRequest_LabelsEntry.$type, CreateProxyRequest_LabelsEntry);

function createBaseCreateProxyMetadata(): CreateProxyMetadata {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata", proxyId: "" };
}

export const CreateProxyMetadata = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata" as const,

  encode(message: CreateProxyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proxyId !== "") {
      writer.uint32(10).string(message.proxyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProxyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProxyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proxyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProxyMetadata {
    return {
      $type: CreateProxyMetadata.$type,
      proxyId: isSet(object.proxyId) ? globalThis.String(object.proxyId) : "",
    };
  },

  toJSON(message: CreateProxyMetadata): unknown {
    const obj: any = {};
    if (message.proxyId !== "") {
      obj.proxyId = message.proxyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProxyMetadata>, I>>(base?: I): CreateProxyMetadata {
    return CreateProxyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProxyMetadata>, I>>(object: I): CreateProxyMetadata {
    const message = createBaseCreateProxyMetadata();
    message.proxyId = object.proxyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateProxyMetadata.$type, CreateProxyMetadata);

function createBaseUpdateProxyRequest(): UpdateProxyRequest {
  return {
    $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest",
    proxyId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    target: undefined,
  };
}

export const UpdateProxyRequest = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest" as const,

  encode(message: UpdateProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proxyId !== "") {
      writer.uint32(10).string(message.proxyId);
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
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateProxyRequest_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProxyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProxyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proxyId = reader.string();
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

          const entry5 = UpdateProxyRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.target = Target.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProxyRequest {
    return {
      $type: UpdateProxyRequest.$type,
      proxyId: isSet(object.proxyId) ? globalThis.String(object.proxyId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
    };
  },

  toJSON(message: UpdateProxyRequest): unknown {
    const obj: any = {};
    if (message.proxyId !== "") {
      obj.proxyId = message.proxyId;
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
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.target !== undefined) {
      obj.target = Target.toJSON(message.target);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProxyRequest>, I>>(base?: I): UpdateProxyRequest {
    return UpdateProxyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProxyRequest>, I>>(object: I): UpdateProxyRequest {
    const message = createBaseUpdateProxyRequest();
    message.proxyId = object.proxyId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateProxyRequest.$type, UpdateProxyRequest);

function createBaseUpdateProxyRequest_LabelsEntry(): UpdateProxyRequest_LabelsEntry {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateProxyRequest_LabelsEntry = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry" as const,

  encode(message: UpdateProxyRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProxyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProxyRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateProxyRequest_LabelsEntry {
    return {
      $type: UpdateProxyRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateProxyRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProxyRequest_LabelsEntry>, I>>(base?: I): UpdateProxyRequest_LabelsEntry {
    return UpdateProxyRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProxyRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateProxyRequest_LabelsEntry {
    const message = createBaseUpdateProxyRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateProxyRequest_LabelsEntry.$type, UpdateProxyRequest_LabelsEntry);

function createBaseUpdateProxyMetadata(): UpdateProxyMetadata {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata", proxyId: "" };
}

export const UpdateProxyMetadata = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata" as const,

  encode(message: UpdateProxyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proxyId !== "") {
      writer.uint32(10).string(message.proxyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProxyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProxyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proxyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProxyMetadata {
    return {
      $type: UpdateProxyMetadata.$type,
      proxyId: isSet(object.proxyId) ? globalThis.String(object.proxyId) : "",
    };
  },

  toJSON(message: UpdateProxyMetadata): unknown {
    const obj: any = {};
    if (message.proxyId !== "") {
      obj.proxyId = message.proxyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProxyMetadata>, I>>(base?: I): UpdateProxyMetadata {
    return UpdateProxyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProxyMetadata>, I>>(object: I): UpdateProxyMetadata {
    const message = createBaseUpdateProxyMetadata();
    message.proxyId = object.proxyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateProxyMetadata.$type, UpdateProxyMetadata);

function createBaseDeleteProxyRequest(): DeleteProxyRequest {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest", proxyId: "" };
}

export const DeleteProxyRequest = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest" as const,

  encode(message: DeleteProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proxyId !== "") {
      writer.uint32(10).string(message.proxyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProxyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProxyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proxyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteProxyRequest {
    return { $type: DeleteProxyRequest.$type, proxyId: isSet(object.proxyId) ? globalThis.String(object.proxyId) : "" };
  },

  toJSON(message: DeleteProxyRequest): unknown {
    const obj: any = {};
    if (message.proxyId !== "") {
      obj.proxyId = message.proxyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProxyRequest>, I>>(base?: I): DeleteProxyRequest {
    return DeleteProxyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteProxyRequest>, I>>(object: I): DeleteProxyRequest {
    const message = createBaseDeleteProxyRequest();
    message.proxyId = object.proxyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteProxyRequest.$type, DeleteProxyRequest);

function createBaseDeleteProxyMetadata(): DeleteProxyMetadata {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata", proxyId: "" };
}

export const DeleteProxyMetadata = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata" as const,

  encode(message: DeleteProxyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proxyId !== "") {
      writer.uint32(10).string(message.proxyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProxyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProxyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proxyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteProxyMetadata {
    return {
      $type: DeleteProxyMetadata.$type,
      proxyId: isSet(object.proxyId) ? globalThis.String(object.proxyId) : "",
    };
  },

  toJSON(message: DeleteProxyMetadata): unknown {
    const obj: any = {};
    if (message.proxyId !== "") {
      obj.proxyId = message.proxyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProxyMetadata>, I>>(base?: I): DeleteProxyMetadata {
    return DeleteProxyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteProxyMetadata>, I>>(object: I): DeleteProxyMetadata {
    const message = createBaseDeleteProxyMetadata();
    message.proxyId = object.proxyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteProxyMetadata.$type, DeleteProxyMetadata);

function createBaseListProxyOperationsRequest(): ListProxyOperationsRequest {
  return {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest",
    proxyId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListProxyOperationsRequest = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest" as const,

  encode(message: ListProxyOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proxyId !== "") {
      writer.uint32(10).string(message.proxyId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProxyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProxyOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proxyId = reader.string();
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

  fromJSON(object: any): ListProxyOperationsRequest {
    return {
      $type: ListProxyOperationsRequest.$type,
      proxyId: isSet(object.proxyId) ? globalThis.String(object.proxyId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListProxyOperationsRequest): unknown {
    const obj: any = {};
    if (message.proxyId !== "") {
      obj.proxyId = message.proxyId;
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

  create<I extends Exact<DeepPartial<ListProxyOperationsRequest>, I>>(base?: I): ListProxyOperationsRequest {
    return ListProxyOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProxyOperationsRequest>, I>>(object: I): ListProxyOperationsRequest {
    const message = createBaseListProxyOperationsRequest();
    message.proxyId = object.proxyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProxyOperationsRequest.$type, ListProxyOperationsRequest);

function createBaseListProxyOperationsResponse(): ListProxyOperationsResponse {
  return {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListProxyOperationsResponse = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse" as const,

  encode(message: ListProxyOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProxyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProxyOperationsResponse();
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

  fromJSON(object: any): ListProxyOperationsResponse {
    return {
      $type: ListProxyOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListProxyOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProxyOperationsResponse>, I>>(base?: I): ListProxyOperationsResponse {
    return ListProxyOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProxyOperationsResponse>, I>>(object: I): ListProxyOperationsResponse {
    const message = createBaseListProxyOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProxyOperationsResponse.$type, ListProxyOperationsResponse);

/** A set of methods for managing serverless MDB proxy. */
export type ProxyServiceService = typeof ProxyServiceService;
export const ProxyServiceService = {
  /**
   * Returns the specified proxy.
   *
   * To get the list of all available proxies, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProxyRequest) => Buffer.from(GetProxyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProxyRequest.decode(value),
    responseSerialize: (value: Proxy) => Buffer.from(Proxy.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Proxy.decode(value),
  },
  /** Retrieves the list of proxies in the specified folder. */
  list: {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListProxyRequest) => Buffer.from(ListProxyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListProxyRequest.decode(value),
    responseSerialize: (value: ListProxyResponse) => Buffer.from(ListProxyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListProxyResponse.decode(value),
  },
  /** Creates a proxy in the specified folder. */
  create: {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProxyRequest) => Buffer.from(CreateProxyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProxyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified proxy. */
  update: {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateProxyRequest) => Buffer.from(UpdateProxyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateProxyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified proxy. */
  delete: {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProxyRequest) => Buffer.from(DeleteProxyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteProxyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified proxy. */
  listOperations: {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListProxyOperationsRequest) =>
      Buffer.from(ListProxyOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListProxyOperationsRequest.decode(value),
    responseSerialize: (value: ListProxyOperationsResponse) =>
      Buffer.from(ListProxyOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListProxyOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified proxy. */
  listAccessBindings: {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the proxy. */
  setAccessBindings: {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified proxy. */
  updateAccessBindings: {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ProxyServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified proxy.
   *
   * To get the list of all available proxies, make a [List] request.
   */
  get: handleUnaryCall<GetProxyRequest, Proxy>;
  /** Retrieves the list of proxies in the specified folder. */
  list: handleUnaryCall<ListProxyRequest, ListProxyResponse>;
  /** Creates a proxy in the specified folder. */
  create: handleUnaryCall<CreateProxyRequest, Operation>;
  /** Updates the specified proxy. */
  update: handleUnaryCall<UpdateProxyRequest, Operation>;
  /** Deletes the specified proxy. */
  delete: handleUnaryCall<DeleteProxyRequest, Operation>;
  /** Lists operations for the specified proxy. */
  listOperations: handleUnaryCall<ListProxyOperationsRequest, ListProxyOperationsResponse>;
  /** Lists existing access bindings for the specified proxy. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the proxy. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified proxy. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface ProxyServiceClient extends Client {
  /**
   * Returns the specified proxy.
   *
   * To get the list of all available proxies, make a [List] request.
   */
  get(request: GetProxyRequest, callback: (error: ServiceError | null, response: Proxy) => void): ClientUnaryCall;
  get(
    request: GetProxyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Proxy) => void,
  ): ClientUnaryCall;
  get(
    request: GetProxyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Proxy) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of proxies in the specified folder. */
  list(
    request: ListProxyRequest,
    callback: (error: ServiceError | null, response: ListProxyResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListProxyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListProxyResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListProxyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListProxyResponse) => void,
  ): ClientUnaryCall;
  /** Creates a proxy in the specified folder. */
  create(
    request: CreateProxyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProxyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProxyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified proxy. */
  update(
    request: UpdateProxyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateProxyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateProxyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified proxy. */
  delete(
    request: DeleteProxyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteProxyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteProxyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified proxy. */
  listOperations(
    request: ListProxyOperationsRequest,
    callback: (error: ServiceError | null, response: ListProxyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListProxyOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListProxyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListProxyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListProxyOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified proxy. */
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
  /** Sets access bindings for the proxy. */
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
  /** Updates access bindings for the specified proxy. */
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
}

export const ProxyServiceClient = makeGenericClientConstructor(
  ProxyServiceService,
  "yandex.cloud.serverless.mdbproxy.v1.ProxyService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProxyServiceClient;
  service: typeof ProxyServiceService;
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
