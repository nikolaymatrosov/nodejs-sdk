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
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Extension } from "./extension";

export const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";

export interface GetExtensionRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension to return. */
  extensionId: string;
}

export interface ListExtensionsRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest";
  /** ID of the cluster to list extensions in. */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the API returns a [ListExtensionsResponse.next_page_token] that can be used to get the next page of results in subsequent [ExtensionService.List] requests.
   */
  pageSize: number;
  /**
   * Page token that can be used to iterate through multiple pages of results.
   *
   * To get the next page of results, set [page_token] to the [ListExtensionsResponse.next_page_token] returned by the previous [ExtensionService.List] request.
   */
  pageToken: string;
}

export interface ListExtensionsResponse {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse";
  /** Requested list of extensions. */
  extensions: Extension[];
  /**
   * The token that can be used to get the next page of results.
   *
   * If the number of results is larger than [ListExtensionsRequest.page_size], use the [next_page_token] as the value for the [ListExtensionsRequest.page_token] in the subsequent [ExtensionService.List] request to iterate through multiple pages of results.
   *
   * Each of the subsequent [ExtensionService.List] requests should use the [next_page_token] value returned in the previous request to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteExtensionRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension to delete. */
  extensionId: string;
}

export interface DeleteExtensionMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension to delete. */
  extensionId: string;
}

export interface UpdateExtensionRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension to update. */
  extensionId: string;
  /** The flag shows whether to make the extension active. */
  active: boolean;
}

export interface UpdateExtensionMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension. */
  extensionId: string;
}

export interface CreateExtensionRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest";
  /** ID of the cluster. */
  clusterId: string;
  /** Name of the extension. */
  name: string;
  /** URI of the zip archive to create the new extension from. Currently only supports links that are stored in Object Storage. */
  uri: string;
  /** The flag that disables the extension. */
  disabled: boolean;
}

export interface CreateExtensionMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension. */
  extensionId: string;
}

function createBaseGetExtensionRequest(): GetExtensionRequest {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest", clusterId: "", extensionId: "" };
}

export const GetExtensionRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest" as const,

  encode(message: GetExtensionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExtensionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExtensionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extensionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExtensionRequest {
    return {
      $type: GetExtensionRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      extensionId: isSet(object.extensionId) ? globalThis.String(object.extensionId) : "",
    };
  },

  toJSON(message: GetExtensionRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.extensionId !== "") {
      obj.extensionId = message.extensionId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetExtensionRequest>): GetExtensionRequest {
    return GetExtensionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetExtensionRequest>): GetExtensionRequest {
    const message = createBaseGetExtensionRequest();
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetExtensionRequest.$type, GetExtensionRequest);

function createBaseListExtensionsRequest(): ListExtensionsRequest {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListExtensionsRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest" as const,

  encode(message: ListExtensionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExtensionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExtensionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListExtensionsRequest {
    return {
      $type: ListExtensionsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListExtensionsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListExtensionsRequest>): ListExtensionsRequest {
    return ListExtensionsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListExtensionsRequest>): ListExtensionsRequest {
    const message = createBaseListExtensionsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExtensionsRequest.$type, ListExtensionsRequest);

function createBaseListExtensionsResponse(): ListExtensionsResponse {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse", extensions: [], nextPageToken: "" };
}

export const ListExtensionsResponse = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse" as const,

  encode(message: ListExtensionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.extensions) {
      Extension.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExtensionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExtensionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.extensions.push(Extension.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListExtensionsResponse {
    return {
      $type: ListExtensionsResponse.$type,
      extensions: globalThis.Array.isArray(object?.extensions)
        ? object.extensions.map((e: any) => Extension.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListExtensionsResponse): unknown {
    const obj: any = {};
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => Extension.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListExtensionsResponse>): ListExtensionsResponse {
    return ListExtensionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListExtensionsResponse>): ListExtensionsResponse {
    const message = createBaseListExtensionsResponse();
    message.extensions = object.extensions?.map((e) => Extension.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExtensionsResponse.$type, ListExtensionsResponse);

function createBaseDeleteExtensionRequest(): DeleteExtensionRequest {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest", clusterId: "", extensionId: "" };
}

export const DeleteExtensionRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest" as const,

  encode(message: DeleteExtensionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExtensionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExtensionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extensionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteExtensionRequest {
    return {
      $type: DeleteExtensionRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      extensionId: isSet(object.extensionId) ? globalThis.String(object.extensionId) : "",
    };
  },

  toJSON(message: DeleteExtensionRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.extensionId !== "") {
      obj.extensionId = message.extensionId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteExtensionRequest>): DeleteExtensionRequest {
    return DeleteExtensionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteExtensionRequest>): DeleteExtensionRequest {
    const message = createBaseDeleteExtensionRequest();
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteExtensionRequest.$type, DeleteExtensionRequest);

function createBaseDeleteExtensionMetadata(): DeleteExtensionMetadata {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata", clusterId: "", extensionId: "" };
}

export const DeleteExtensionMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata" as const,

  encode(message: DeleteExtensionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExtensionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExtensionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extensionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteExtensionMetadata {
    return {
      $type: DeleteExtensionMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      extensionId: isSet(object.extensionId) ? globalThis.String(object.extensionId) : "",
    };
  },

  toJSON(message: DeleteExtensionMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.extensionId !== "") {
      obj.extensionId = message.extensionId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteExtensionMetadata>): DeleteExtensionMetadata {
    return DeleteExtensionMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteExtensionMetadata>): DeleteExtensionMetadata {
    const message = createBaseDeleteExtensionMetadata();
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteExtensionMetadata.$type, DeleteExtensionMetadata);

function createBaseUpdateExtensionRequest(): UpdateExtensionRequest {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest",
    clusterId: "",
    extensionId: "",
    active: false,
  };
}

export const UpdateExtensionRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest" as const,

  encode(message: UpdateExtensionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExtensionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExtensionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extensionId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateExtensionRequest {
    return {
      $type: UpdateExtensionRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      extensionId: isSet(object.extensionId) ? globalThis.String(object.extensionId) : "",
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
    };
  },

  toJSON(message: UpdateExtensionRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.extensionId !== "") {
      obj.extensionId = message.extensionId;
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateExtensionRequest>): UpdateExtensionRequest {
    return UpdateExtensionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateExtensionRequest>): UpdateExtensionRequest {
    const message = createBaseUpdateExtensionRequest();
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateExtensionRequest.$type, UpdateExtensionRequest);

function createBaseUpdateExtensionMetadata(): UpdateExtensionMetadata {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata", clusterId: "", extensionId: "" };
}

export const UpdateExtensionMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata" as const,

  encode(message: UpdateExtensionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExtensionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExtensionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extensionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateExtensionMetadata {
    return {
      $type: UpdateExtensionMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      extensionId: isSet(object.extensionId) ? globalThis.String(object.extensionId) : "",
    };
  },

  toJSON(message: UpdateExtensionMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.extensionId !== "") {
      obj.extensionId = message.extensionId;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateExtensionMetadata>): UpdateExtensionMetadata {
    return UpdateExtensionMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateExtensionMetadata>): UpdateExtensionMetadata {
    const message = createBaseUpdateExtensionMetadata();
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateExtensionMetadata.$type, UpdateExtensionMetadata);

function createBaseCreateExtensionRequest(): CreateExtensionRequest {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest",
    clusterId: "",
    name: "",
    uri: "",
    disabled: false,
  };
}

export const CreateExtensionRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest" as const,

  encode(message: CreateExtensionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.disabled === true) {
      writer.uint32(32).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExtensionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExtensionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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

          message.uri = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.disabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateExtensionRequest {
    return {
      $type: CreateExtensionRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
    };
  },

  toJSON(message: CreateExtensionRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateExtensionRequest>): CreateExtensionRequest {
    return CreateExtensionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateExtensionRequest>): CreateExtensionRequest {
    const message = createBaseCreateExtensionRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.disabled = object.disabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateExtensionRequest.$type, CreateExtensionRequest);

function createBaseCreateExtensionMetadata(): CreateExtensionMetadata {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata", clusterId: "", extensionId: "" };
}

export const CreateExtensionMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata" as const,

  encode(message: CreateExtensionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExtensionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExtensionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extensionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateExtensionMetadata {
    return {
      $type: CreateExtensionMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      extensionId: isSet(object.extensionId) ? globalThis.String(object.extensionId) : "",
    };
  },

  toJSON(message: CreateExtensionMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.extensionId !== "") {
      obj.extensionId = message.extensionId;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateExtensionMetadata>): CreateExtensionMetadata {
    return CreateExtensionMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateExtensionMetadata>): CreateExtensionMetadata {
    const message = createBaseCreateExtensionMetadata();
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateExtensionMetadata.$type, CreateExtensionMetadata);

export type ExtensionServiceService = typeof ExtensionServiceService;
export const ExtensionServiceService = {
  /** Returns the specified extension of Elasticsearch cluster. */
  get: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetExtensionRequest) => Buffer.from(GetExtensionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetExtensionRequest.decode(value),
    responseSerialize: (value: Extension) => Buffer.from(Extension.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Extension.decode(value),
  },
  /** Returns the list of available extensions for the specified Elasticsearch cluster. */
  list: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListExtensionsRequest) => Buffer.from(ListExtensionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListExtensionsRequest.decode(value),
    responseSerialize: (value: ListExtensionsResponse) => Buffer.from(ListExtensionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListExtensionsResponse.decode(value),
  },
  /** Creates new extension version. */
  create: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateExtensionRequest) => Buffer.from(CreateExtensionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateExtensionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified extension. */
  update: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateExtensionRequest) => Buffer.from(UpdateExtensionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateExtensionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified extension. */
  delete: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteExtensionRequest) => Buffer.from(DeleteExtensionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteExtensionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ExtensionServiceServer extends UntypedServiceImplementation {
  /** Returns the specified extension of Elasticsearch cluster. */
  get: handleUnaryCall<GetExtensionRequest, Extension>;
  /** Returns the list of available extensions for the specified Elasticsearch cluster. */
  list: handleUnaryCall<ListExtensionsRequest, ListExtensionsResponse>;
  /** Creates new extension version. */
  create: handleUnaryCall<CreateExtensionRequest, Operation>;
  /** Updates the specified extension. */
  update: handleUnaryCall<UpdateExtensionRequest, Operation>;
  /** Deletes the specified extension. */
  delete: handleUnaryCall<DeleteExtensionRequest, Operation>;
}

export interface ExtensionServiceClient extends Client {
  /** Returns the specified extension of Elasticsearch cluster. */
  get(
    request: GetExtensionRequest,
    callback: (error: ServiceError | null, response: Extension) => void,
  ): ClientUnaryCall;
  get(
    request: GetExtensionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Extension) => void,
  ): ClientUnaryCall;
  get(
    request: GetExtensionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Extension) => void,
  ): ClientUnaryCall;
  /** Returns the list of available extensions for the specified Elasticsearch cluster. */
  list(
    request: ListExtensionsRequest,
    callback: (error: ServiceError | null, response: ListExtensionsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListExtensionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListExtensionsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListExtensionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListExtensionsResponse) => void,
  ): ClientUnaryCall;
  /** Creates new extension version. */
  create(
    request: CreateExtensionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateExtensionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateExtensionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified extension. */
  update(
    request: UpdateExtensionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateExtensionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateExtensionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified extension. */
  delete(
    request: DeleteExtensionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteExtensionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteExtensionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ExtensionServiceClient = makeGenericClientConstructor(
  ExtensionServiceService,
  "yandex.cloud.mdb.elasticsearch.v1.ExtensionService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ExtensionServiceClient;
  service: typeof ExtensionServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
