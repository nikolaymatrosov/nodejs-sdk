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
import { BoolValue, StringValue } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { OriginParams } from "./origin";
import { OriginGroup } from "./origin_group";

export const protobufPackage = "yandex.cloud.cdn.v1";

export interface GetOriginGroupRequest {
  $type: "yandex.cloud.cdn.v1.GetOriginGroupRequest";
  /** ID of the folder that the origin group belongs to. */
  folderId: string;
  /**
   * ID of the origin group to return.
   *
   * To get a origin group ID, make a [OriginGroupService.List] request.
   */
  originGroupId: number;
}

export interface ListOriginGroupsRequest {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsRequest";
  /** ID of the folder that the origin group belongs to.. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListOriginGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListOriginGroupsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListOriginGroupsResponse {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsResponse";
  /** List of all Origin Groups associated with folder. */
  originGroups: OriginGroup[];
  /**
   * [next_page_token] token allows you to get the next page of results for list requests.
   * If the number of results is larger than [ListOriginGroupsRequest.page_size], use
   * the [next_page_token] as the value for the [ListOriginGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateOriginGroupRequest {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupRequest";
  /** ID of the folder that the origin group belongs to. */
  folderId: string;
  /** Name of the origin group. */
  name: string;
  /**
   * This option have two possible conditions:
   *  true - The option is active. In case the origin responds with 4XX or 5XX codes,
   *         use the next origin from the list.
   *  false - The option is disabled.
   *
   *  default value is true
   */
  useNext?:
    | boolean
    | undefined;
  /**
   * List of origins: IP addresses or Domain names of your origins and the port
   * (if custom).
   */
  origins: OriginParams[];
}

export interface CreateOriginGroupMetadata {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupMetadata";
  /** ID of created origin group. */
  originGroupId: number;
}

export interface UpdateOriginGroupRequest {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupRequest";
  /** ID of the folder that the origin group belongs to. */
  folderId: string;
  /** ID of the origin group. */
  originGroupId: number;
  /** Name of the origin group. */
  groupName?:
    | string
    | undefined;
  /**
   * This option have two possible values:
   *
   *   True - The option is active. In case the origin responds with 4XX or 5XX
   *          codes, use the next origin from the list.
   *   False - The option is disabled.
   */
  useNext?:
    | boolean
    | undefined;
  /**
   * List of origins: IP addresses or Domain names of your origins and the port
   * (if custom).
   */
  origins: OriginParams[];
}

export interface UpdateOriginGroupMetadata {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupMetadata";
  /** ID of the origin group. */
  originGroupId: number;
}

export interface DeleteOriginGroupRequest {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupRequest";
  /** ID of the folder that the origin group belongs to. */
  folderId: string;
  /** ID of the origin group. */
  originGroupId: number;
}

export interface DeleteOriginGroupMetadata {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupMetadata";
  /** ID of the origin group. */
  originGroupId: number;
}

function createBaseGetOriginGroupRequest(): GetOriginGroupRequest {
  return { $type: "yandex.cloud.cdn.v1.GetOriginGroupRequest", folderId: "", originGroupId: 0 };
}

export const GetOriginGroupRequest = {
  $type: "yandex.cloud.cdn.v1.GetOriginGroupRequest" as const,

  encode(message: GetOriginGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOriginGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOriginGroupRequest();
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

          message.originGroupId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOriginGroupRequest {
    return {
      $type: GetOriginGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
    };
  },

  toJSON(message: GetOriginGroupRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOriginGroupRequest>, I>>(base?: I): GetOriginGroupRequest {
    return GetOriginGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOriginGroupRequest>, I>>(object: I): GetOriginGroupRequest {
    const message = createBaseGetOriginGroupRequest();
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetOriginGroupRequest.$type, GetOriginGroupRequest);

function createBaseListOriginGroupsRequest(): ListOriginGroupsRequest {
  return { $type: "yandex.cloud.cdn.v1.ListOriginGroupsRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListOriginGroupsRequest = {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsRequest" as const,

  encode(message: ListOriginGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOriginGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOriginGroupsRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOriginGroupsRequest {
    return {
      $type: ListOriginGroupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListOriginGroupsRequest): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOriginGroupsRequest>, I>>(base?: I): ListOriginGroupsRequest {
    return ListOriginGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOriginGroupsRequest>, I>>(object: I): ListOriginGroupsRequest {
    const message = createBaseListOriginGroupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOriginGroupsRequest.$type, ListOriginGroupsRequest);

function createBaseListOriginGroupsResponse(): ListOriginGroupsResponse {
  return { $type: "yandex.cloud.cdn.v1.ListOriginGroupsResponse", originGroups: [], nextPageToken: "" };
}

export const ListOriginGroupsResponse = {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsResponse" as const,

  encode(message: ListOriginGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.originGroups) {
      OriginGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOriginGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOriginGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.originGroups.push(OriginGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListOriginGroupsResponse {
    return {
      $type: ListOriginGroupsResponse.$type,
      originGroups: globalThis.Array.isArray(object?.originGroups)
        ? object.originGroups.map((e: any) => OriginGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListOriginGroupsResponse): unknown {
    const obj: any = {};
    if (message.originGroups?.length) {
      obj.originGroups = message.originGroups.map((e) => OriginGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOriginGroupsResponse>, I>>(base?: I): ListOriginGroupsResponse {
    return ListOriginGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOriginGroupsResponse>, I>>(object: I): ListOriginGroupsResponse {
    const message = createBaseListOriginGroupsResponse();
    message.originGroups = object.originGroups?.map((e) => OriginGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOriginGroupsResponse.$type, ListOriginGroupsResponse);

function createBaseCreateOriginGroupRequest(): CreateOriginGroupRequest {
  return {
    $type: "yandex.cloud.cdn.v1.CreateOriginGroupRequest",
    folderId: "",
    name: "",
    useNext: undefined,
    origins: [],
  };
}

export const CreateOriginGroupRequest = {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupRequest" as const,

  encode(message: CreateOriginGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.useNext !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.useNext! }, writer.uint32(26).fork())
        .ldelim();
    }
    for (const v of message.origins) {
      OriginParams.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOriginGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOriginGroupRequest();
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

          message.useNext = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.origins.push(OriginParams.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOriginGroupRequest {
    return {
      $type: CreateOriginGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      useNext: isSet(object.useNext) ? Boolean(object.useNext) : undefined,
      origins: globalThis.Array.isArray(object?.origins)
        ? object.origins.map((e: any) => OriginParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateOriginGroupRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.useNext !== undefined) {
      obj.useNext = message.useNext;
    }
    if (message.origins?.length) {
      obj.origins = message.origins.map((e) => OriginParams.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOriginGroupRequest>, I>>(base?: I): CreateOriginGroupRequest {
    return CreateOriginGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOriginGroupRequest>, I>>(object: I): CreateOriginGroupRequest {
    const message = createBaseCreateOriginGroupRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.useNext = object.useNext ?? undefined;
    message.origins = object.origins?.map((e) => OriginParams.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateOriginGroupRequest.$type, CreateOriginGroupRequest);

function createBaseCreateOriginGroupMetadata(): CreateOriginGroupMetadata {
  return { $type: "yandex.cloud.cdn.v1.CreateOriginGroupMetadata", originGroupId: 0 };
}

export const CreateOriginGroupMetadata = {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupMetadata" as const,

  encode(message: CreateOriginGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originGroupId !== 0) {
      writer.uint32(8).int64(message.originGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOriginGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOriginGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.originGroupId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOriginGroupMetadata {
    return {
      $type: CreateOriginGroupMetadata.$type,
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
    };
  },

  toJSON(message: CreateOriginGroupMetadata): unknown {
    const obj: any = {};
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOriginGroupMetadata>, I>>(base?: I): CreateOriginGroupMetadata {
    return CreateOriginGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOriginGroupMetadata>, I>>(object: I): CreateOriginGroupMetadata {
    const message = createBaseCreateOriginGroupMetadata();
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateOriginGroupMetadata.$type, CreateOriginGroupMetadata);

function createBaseUpdateOriginGroupRequest(): UpdateOriginGroupRequest {
  return {
    $type: "yandex.cloud.cdn.v1.UpdateOriginGroupRequest",
    folderId: "",
    originGroupId: 0,
    groupName: undefined,
    useNext: undefined,
    origins: [],
  };
}

export const UpdateOriginGroupRequest = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupRequest" as const,

  encode(message: UpdateOriginGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    if (message.groupName !== undefined) {
      StringValue.encode({ $type: "google.protobuf.StringValue", value: message.groupName! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.useNext !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.useNext! }, writer.uint32(34).fork())
        .ldelim();
    }
    for (const v of message.origins) {
      OriginParams.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOriginGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOriginGroupRequest();
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

          message.originGroupId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.groupName = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.useNext = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.origins.push(OriginParams.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOriginGroupRequest {
    return {
      $type: UpdateOriginGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
      groupName: isSet(object.groupName) ? String(object.groupName) : undefined,
      useNext: isSet(object.useNext) ? Boolean(object.useNext) : undefined,
      origins: globalThis.Array.isArray(object?.origins)
        ? object.origins.map((e: any) => OriginParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateOriginGroupRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    if (message.groupName !== undefined) {
      obj.groupName = message.groupName;
    }
    if (message.useNext !== undefined) {
      obj.useNext = message.useNext;
    }
    if (message.origins?.length) {
      obj.origins = message.origins.map((e) => OriginParams.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOriginGroupRequest>, I>>(base?: I): UpdateOriginGroupRequest {
    return UpdateOriginGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOriginGroupRequest>, I>>(object: I): UpdateOriginGroupRequest {
    const message = createBaseUpdateOriginGroupRequest();
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    message.groupName = object.groupName ?? undefined;
    message.useNext = object.useNext ?? undefined;
    message.origins = object.origins?.map((e) => OriginParams.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateOriginGroupRequest.$type, UpdateOriginGroupRequest);

function createBaseUpdateOriginGroupMetadata(): UpdateOriginGroupMetadata {
  return { $type: "yandex.cloud.cdn.v1.UpdateOriginGroupMetadata", originGroupId: 0 };
}

export const UpdateOriginGroupMetadata = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupMetadata" as const,

  encode(message: UpdateOriginGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originGroupId !== 0) {
      writer.uint32(8).int64(message.originGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOriginGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOriginGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.originGroupId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOriginGroupMetadata {
    return {
      $type: UpdateOriginGroupMetadata.$type,
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
    };
  },

  toJSON(message: UpdateOriginGroupMetadata): unknown {
    const obj: any = {};
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOriginGroupMetadata>, I>>(base?: I): UpdateOriginGroupMetadata {
    return UpdateOriginGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOriginGroupMetadata>, I>>(object: I): UpdateOriginGroupMetadata {
    const message = createBaseUpdateOriginGroupMetadata();
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UpdateOriginGroupMetadata.$type, UpdateOriginGroupMetadata);

function createBaseDeleteOriginGroupRequest(): DeleteOriginGroupRequest {
  return { $type: "yandex.cloud.cdn.v1.DeleteOriginGroupRequest", folderId: "", originGroupId: 0 };
}

export const DeleteOriginGroupRequest = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupRequest" as const,

  encode(message: DeleteOriginGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOriginGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOriginGroupRequest();
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

          message.originGroupId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteOriginGroupRequest {
    return {
      $type: DeleteOriginGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
    };
  },

  toJSON(message: DeleteOriginGroupRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteOriginGroupRequest>, I>>(base?: I): DeleteOriginGroupRequest {
    return DeleteOriginGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteOriginGroupRequest>, I>>(object: I): DeleteOriginGroupRequest {
    const message = createBaseDeleteOriginGroupRequest();
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteOriginGroupRequest.$type, DeleteOriginGroupRequest);

function createBaseDeleteOriginGroupMetadata(): DeleteOriginGroupMetadata {
  return { $type: "yandex.cloud.cdn.v1.DeleteOriginGroupMetadata", originGroupId: 0 };
}

export const DeleteOriginGroupMetadata = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupMetadata" as const,

  encode(message: DeleteOriginGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originGroupId !== 0) {
      writer.uint32(8).int64(message.originGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOriginGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOriginGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.originGroupId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteOriginGroupMetadata {
    return {
      $type: DeleteOriginGroupMetadata.$type,
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
    };
  },

  toJSON(message: DeleteOriginGroupMetadata): unknown {
    const obj: any = {};
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteOriginGroupMetadata>, I>>(base?: I): DeleteOriginGroupMetadata {
    return DeleteOriginGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteOriginGroupMetadata>, I>>(object: I): DeleteOriginGroupMetadata {
    const message = createBaseDeleteOriginGroupMetadata();
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteOriginGroupMetadata.$type, DeleteOriginGroupMetadata);

/** Origin Groups management service. */
export type OriginGroupServiceService = typeof OriginGroupServiceService;
export const OriginGroupServiceService = {
  /** Gets origin group with specified origin group id. */
  get: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOriginGroupRequest) => Buffer.from(GetOriginGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOriginGroupRequest.decode(value),
    responseSerialize: (value: OriginGroup) => Buffer.from(OriginGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => OriginGroup.decode(value),
  },
  /** Lists origins of origin group. */
  list: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListOriginGroupsRequest) => Buffer.from(ListOriginGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListOriginGroupsRequest.decode(value),
    responseSerialize: (value: ListOriginGroupsResponse) =>
      Buffer.from(ListOriginGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListOriginGroupsResponse.decode(value),
  },
  /** Creates origin group. */
  create: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateOriginGroupRequest) => Buffer.from(CreateOriginGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateOriginGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified origin group.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
   * use the origin group via a [CacheService.Purge] request.
   */
  update: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateOriginGroupRequest) => Buffer.from(UpdateOriginGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateOriginGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes origin group with specified origin group id. */
  delete: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteOriginGroupRequest) => Buffer.from(DeleteOriginGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteOriginGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface OriginGroupServiceServer extends UntypedServiceImplementation {
  /** Gets origin group with specified origin group id. */
  get: handleUnaryCall<GetOriginGroupRequest, OriginGroup>;
  /** Lists origins of origin group. */
  list: handleUnaryCall<ListOriginGroupsRequest, ListOriginGroupsResponse>;
  /** Creates origin group. */
  create: handleUnaryCall<CreateOriginGroupRequest, Operation>;
  /**
   * Updates the specified origin group.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
   * use the origin group via a [CacheService.Purge] request.
   */
  update: handleUnaryCall<UpdateOriginGroupRequest, Operation>;
  /** Deletes origin group with specified origin group id. */
  delete: handleUnaryCall<DeleteOriginGroupRequest, Operation>;
}

export interface OriginGroupServiceClient extends Client {
  /** Gets origin group with specified origin group id. */
  get(
    request: GetOriginGroupRequest,
    callback: (error: ServiceError | null, response: OriginGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetOriginGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: OriginGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetOriginGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: OriginGroup) => void,
  ): ClientUnaryCall;
  /** Lists origins of origin group. */
  list(
    request: ListOriginGroupsRequest,
    callback: (error: ServiceError | null, response: ListOriginGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListOriginGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListOriginGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListOriginGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListOriginGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Creates origin group. */
  create(
    request: CreateOriginGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateOriginGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateOriginGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified origin group.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
   * use the origin group via a [CacheService.Purge] request.
   */
  update(
    request: UpdateOriginGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateOriginGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateOriginGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes origin group with specified origin group id. */
  delete(
    request: DeleteOriginGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteOriginGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteOriginGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const OriginGroupServiceClient = makeGenericClientConstructor(
  OriginGroupServiceService,
  "yandex.cloud.cdn.v1.OriginGroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): OriginGroupServiceClient;
  service: typeof OriginGroupServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
