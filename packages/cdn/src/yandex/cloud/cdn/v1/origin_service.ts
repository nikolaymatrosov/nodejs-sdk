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
import { BoolValue } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Origin, OriginMeta } from "./origin";

export const protobufPackage = "yandex.cloud.cdn.v1";

export interface GetOriginRequest {
  $type: "yandex.cloud.cdn.v1.GetOriginRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** [origin_id] group ID to request origin from. */
  originId: number;
}

export interface ListOriginsRequest {
  $type: "yandex.cloud.cdn.v1.ListOriginsRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** ID of the group to request origins from. */
  originGroupId: number;
}

export interface ListOriginsResponse {
  $type: "yandex.cloud.cdn.v1.ListOriginsResponse";
  /** Origin from response. */
  origins: Origin[];
}

export interface CreateOriginRequest {
  $type: "yandex.cloud.cdn.v1.CreateOriginRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** [origin_group_id] group ID to request origins from. */
  originGroupId: number;
  /**
   * IP address or Domain name of your origin and the port (if custom).
   * Used if [meta] variant is `common`.
   */
  source: string;
  /**
   * The setting allows to enable or disable an Origin source in the Origins group.
   *
   * It has two possible values:
   *
   * True - The origin is enabled and used as a source for the CDN. An origins
   * group must contain at least one enabled origin. Default value.
   * False - The origin is disabled and the CDN is not using it to pull content.
   */
  enabled?:
    | boolean
    | undefined;
  /**
   * Specifies whether the origin is used in its origin group as backup.
   * A backup origin is used when one of active origins becomes unavailable.
   *
   * Default value: False.
   */
  backup?:
    | boolean
    | undefined;
  /** Set up origin of the content. */
  meta?: OriginMeta | undefined;
}

export interface CreateOriginMetadata {
  $type: "yandex.cloud.cdn.v1.CreateOriginMetadata";
  /** ID of the origin. */
  originId: number;
  /** ID pf the parent origins group. */
  originGroupId: number;
}

export interface UpdateOriginRequest {
  $type: "yandex.cloud.cdn.v1.UpdateOriginRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** ID of the origin. */
  originId: number;
  /**
   * IP address or Domain name of your origin and the port (if custom).
   * Used if [meta] variant is `common`.
   * Required.
   */
  source: string;
  /**
   * The setting allows to enable or disable an Origin source in the Origins group.
   *
   * It has two possible values:
   *
   * True - The origin is enabled and used as a source for the CDN. An origins
   * group must contain at least one enabled origin. Default value.
   * False - The origin is disabled and the CDN is not using it to pull content.
   *
   * Required.
   */
  enabled: boolean;
  /**
   * Specifies whether the origin is used in its origin group as backup.
   * A backup origin is used when one of active origins becomes unavailable.
   *
   * Required.
   */
  backup: boolean;
  /** Set up type of the origin. */
  meta?: OriginMeta | undefined;
}

export interface UpdateOriginMetadata {
  $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata";
  /** ID of the origin. */
  originId: number;
  /** Parent origins group ID. */
  originGroupId: number;
}

export interface DeleteOriginRequest {
  $type: "yandex.cloud.cdn.v1.DeleteOriginRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** ID of the origin. */
  originId: number;
}

export interface DeleteOriginMetadata {
  $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata";
  /** ID of the origin. */
  originId: number;
}

function createBaseGetOriginRequest(): GetOriginRequest {
  return { $type: "yandex.cloud.cdn.v1.GetOriginRequest", folderId: "", originId: 0 };
}

export const GetOriginRequest = {
  $type: "yandex.cloud.cdn.v1.GetOriginRequest" as const,

  encode(message: GetOriginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originId !== 0) {
      writer.uint32(16).int64(message.originId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOriginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOriginRequest();
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

          message.originId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOriginRequest {
    return {
      $type: GetOriginRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      originId: isSet(object.originId) ? globalThis.Number(object.originId) : 0,
    };
  },

  toJSON(message: GetOriginRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.originId !== 0) {
      obj.originId = Math.round(message.originId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOriginRequest>, I>>(base?: I): GetOriginRequest {
    return GetOriginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOriginRequest>, I>>(object: I): GetOriginRequest {
    const message = createBaseGetOriginRequest();
    message.folderId = object.folderId ?? "";
    message.originId = object.originId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetOriginRequest.$type, GetOriginRequest);

function createBaseListOriginsRequest(): ListOriginsRequest {
  return { $type: "yandex.cloud.cdn.v1.ListOriginsRequest", folderId: "", originGroupId: 0 };
}

export const ListOriginsRequest = {
  $type: "yandex.cloud.cdn.v1.ListOriginsRequest" as const,

  encode(message: ListOriginsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOriginsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOriginsRequest();
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

  fromJSON(object: any): ListOriginsRequest {
    return {
      $type: ListOriginsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
    };
  },

  toJSON(message: ListOriginsRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOriginsRequest>, I>>(base?: I): ListOriginsRequest {
    return ListOriginsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOriginsRequest>, I>>(object: I): ListOriginsRequest {
    const message = createBaseListOriginsRequest();
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListOriginsRequest.$type, ListOriginsRequest);

function createBaseListOriginsResponse(): ListOriginsResponse {
  return { $type: "yandex.cloud.cdn.v1.ListOriginsResponse", origins: [] };
}

export const ListOriginsResponse = {
  $type: "yandex.cloud.cdn.v1.ListOriginsResponse" as const,

  encode(message: ListOriginsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.origins) {
      Origin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOriginsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOriginsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.origins.push(Origin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOriginsResponse {
    return {
      $type: ListOriginsResponse.$type,
      origins: globalThis.Array.isArray(object?.origins) ? object.origins.map((e: any) => Origin.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListOriginsResponse): unknown {
    const obj: any = {};
    if (message.origins?.length) {
      obj.origins = message.origins.map((e) => Origin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOriginsResponse>, I>>(base?: I): ListOriginsResponse {
    return ListOriginsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOriginsResponse>, I>>(object: I): ListOriginsResponse {
    const message = createBaseListOriginsResponse();
    message.origins = object.origins?.map((e) => Origin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListOriginsResponse.$type, ListOriginsResponse);

function createBaseCreateOriginRequest(): CreateOriginRequest {
  return {
    $type: "yandex.cloud.cdn.v1.CreateOriginRequest",
    folderId: "",
    originGroupId: 0,
    source: "",
    enabled: undefined,
    backup: undefined,
    meta: undefined,
  };
}

export const CreateOriginRequest = {
  $type: "yandex.cloud.cdn.v1.CreateOriginRequest" as const,

  encode(message: CreateOriginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.enabled !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enabled! }, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.backup !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.backup! }, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOriginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOriginRequest();
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

          message.source = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.enabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.backup = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.meta = OriginMeta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOriginRequest {
    return {
      $type: CreateOriginRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      backup: isSet(object.backup) ? Boolean(object.backup) : undefined,
      meta: isSet(object.meta) ? OriginMeta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: CreateOriginRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.enabled !== undefined) {
      obj.enabled = message.enabled;
    }
    if (message.backup !== undefined) {
      obj.backup = message.backup;
    }
    if (message.meta !== undefined) {
      obj.meta = OriginMeta.toJSON(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOriginRequest>, I>>(base?: I): CreateOriginRequest {
    return CreateOriginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOriginRequest>, I>>(object: I): CreateOriginRequest {
    const message = createBaseCreateOriginRequest();
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    message.source = object.source ?? "";
    message.enabled = object.enabled ?? undefined;
    message.backup = object.backup ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? OriginMeta.fromPartial(object.meta)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateOriginRequest.$type, CreateOriginRequest);

function createBaseCreateOriginMetadata(): CreateOriginMetadata {
  return { $type: "yandex.cloud.cdn.v1.CreateOriginMetadata", originId: 0, originGroupId: 0 };
}

export const CreateOriginMetadata = {
  $type: "yandex.cloud.cdn.v1.CreateOriginMetadata" as const,

  encode(message: CreateOriginMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originId !== 0) {
      writer.uint32(8).int64(message.originId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOriginMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOriginMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.originId = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): CreateOriginMetadata {
    return {
      $type: CreateOriginMetadata.$type,
      originId: isSet(object.originId) ? globalThis.Number(object.originId) : 0,
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
    };
  },

  toJSON(message: CreateOriginMetadata): unknown {
    const obj: any = {};
    if (message.originId !== 0) {
      obj.originId = Math.round(message.originId);
    }
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOriginMetadata>, I>>(base?: I): CreateOriginMetadata {
    return CreateOriginMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOriginMetadata>, I>>(object: I): CreateOriginMetadata {
    const message = createBaseCreateOriginMetadata();
    message.originId = object.originId ?? 0;
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateOriginMetadata.$type, CreateOriginMetadata);

function createBaseUpdateOriginRequest(): UpdateOriginRequest {
  return {
    $type: "yandex.cloud.cdn.v1.UpdateOriginRequest",
    folderId: "",
    originId: 0,
    source: "",
    enabled: false,
    backup: false,
    meta: undefined,
  };
}

export const UpdateOriginRequest = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginRequest" as const,

  encode(message: UpdateOriginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originId !== 0) {
      writer.uint32(16).int64(message.originId);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.backup === true) {
      writer.uint32(40).bool(message.backup);
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOriginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOriginRequest();
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

          message.originId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.source = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.backup = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.meta = OriginMeta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOriginRequest {
    return {
      $type: UpdateOriginRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      originId: isSet(object.originId) ? globalThis.Number(object.originId) : 0,
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      backup: isSet(object.backup) ? globalThis.Boolean(object.backup) : false,
      meta: isSet(object.meta) ? OriginMeta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: UpdateOriginRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.originId !== 0) {
      obj.originId = Math.round(message.originId);
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.backup === true) {
      obj.backup = message.backup;
    }
    if (message.meta !== undefined) {
      obj.meta = OriginMeta.toJSON(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOriginRequest>, I>>(base?: I): UpdateOriginRequest {
    return UpdateOriginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOriginRequest>, I>>(object: I): UpdateOriginRequest {
    const message = createBaseUpdateOriginRequest();
    message.folderId = object.folderId ?? "";
    message.originId = object.originId ?? 0;
    message.source = object.source ?? "";
    message.enabled = object.enabled ?? false;
    message.backup = object.backup ?? false;
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? OriginMeta.fromPartial(object.meta)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateOriginRequest.$type, UpdateOriginRequest);

function createBaseUpdateOriginMetadata(): UpdateOriginMetadata {
  return { $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata", originId: 0, originGroupId: 0 };
}

export const UpdateOriginMetadata = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata" as const,

  encode(message: UpdateOriginMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originId !== 0) {
      writer.uint32(8).int64(message.originId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOriginMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOriginMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.originId = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): UpdateOriginMetadata {
    return {
      $type: UpdateOriginMetadata.$type,
      originId: isSet(object.originId) ? globalThis.Number(object.originId) : 0,
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
    };
  },

  toJSON(message: UpdateOriginMetadata): unknown {
    const obj: any = {};
    if (message.originId !== 0) {
      obj.originId = Math.round(message.originId);
    }
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOriginMetadata>, I>>(base?: I): UpdateOriginMetadata {
    return UpdateOriginMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOriginMetadata>, I>>(object: I): UpdateOriginMetadata {
    const message = createBaseUpdateOriginMetadata();
    message.originId = object.originId ?? 0;
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UpdateOriginMetadata.$type, UpdateOriginMetadata);

function createBaseDeleteOriginRequest(): DeleteOriginRequest {
  return { $type: "yandex.cloud.cdn.v1.DeleteOriginRequest", folderId: "", originId: 0 };
}

export const DeleteOriginRequest = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginRequest" as const,

  encode(message: DeleteOriginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originId !== 0) {
      writer.uint32(16).int64(message.originId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOriginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOriginRequest();
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

          message.originId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteOriginRequest {
    return {
      $type: DeleteOriginRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      originId: isSet(object.originId) ? globalThis.Number(object.originId) : 0,
    };
  },

  toJSON(message: DeleteOriginRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.originId !== 0) {
      obj.originId = Math.round(message.originId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteOriginRequest>, I>>(base?: I): DeleteOriginRequest {
    return DeleteOriginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteOriginRequest>, I>>(object: I): DeleteOriginRequest {
    const message = createBaseDeleteOriginRequest();
    message.folderId = object.folderId ?? "";
    message.originId = object.originId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteOriginRequest.$type, DeleteOriginRequest);

function createBaseDeleteOriginMetadata(): DeleteOriginMetadata {
  return { $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata", originId: 0 };
}

export const DeleteOriginMetadata = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata" as const,

  encode(message: DeleteOriginMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originId !== 0) {
      writer.uint32(8).int64(message.originId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOriginMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOriginMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.originId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteOriginMetadata {
    return {
      $type: DeleteOriginMetadata.$type,
      originId: isSet(object.originId) ? globalThis.Number(object.originId) : 0,
    };
  },

  toJSON(message: DeleteOriginMetadata): unknown {
    const obj: any = {};
    if (message.originId !== 0) {
      obj.originId = Math.round(message.originId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteOriginMetadata>, I>>(base?: I): DeleteOriginMetadata {
    return DeleteOriginMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteOriginMetadata>, I>>(object: I): DeleteOriginMetadata {
    const message = createBaseDeleteOriginMetadata();
    message.originId = object.originId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteOriginMetadata.$type, DeleteOriginMetadata);

/**
 * Origin management service.
 * Origin is not a standalone entity. It can live only within origin group.
 */
export type OriginServiceService = typeof OriginServiceService;
export const OriginServiceService = {
  /** Get origin in origin group. */
  get: {
    path: "/yandex.cloud.cdn.v1.OriginService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOriginRequest) => Buffer.from(GetOriginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOriginRequest.decode(value),
    responseSerialize: (value: Origin) => Buffer.from(Origin.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Origin.decode(value),
  },
  /** Lists origins of origin group. */
  list: {
    path: "/yandex.cloud.cdn.v1.OriginService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListOriginsRequest) => Buffer.from(ListOriginsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListOriginsRequest.decode(value),
    responseSerialize: (value: ListOriginsResponse) => Buffer.from(ListOriginsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListOriginsResponse.decode(value),
  },
  /** Creates origin inside origin group. */
  create: {
    path: "/yandex.cloud.cdn.v1.OriginService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateOriginRequest) => Buffer.from(CreateOriginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateOriginRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified origin from the origin group.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
   * use the origin via a [CacheService.Purge] request.
   */
  update: {
    path: "/yandex.cloud.cdn.v1.OriginService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateOriginRequest) => Buffer.from(UpdateOriginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateOriginRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes origin from origin group. */
  delete: {
    path: "/yandex.cloud.cdn.v1.OriginService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteOriginRequest) => Buffer.from(DeleteOriginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteOriginRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface OriginServiceServer extends UntypedServiceImplementation {
  /** Get origin in origin group. */
  get: handleUnaryCall<GetOriginRequest, Origin>;
  /** Lists origins of origin group. */
  list: handleUnaryCall<ListOriginsRequest, ListOriginsResponse>;
  /** Creates origin inside origin group. */
  create: handleUnaryCall<CreateOriginRequest, Operation>;
  /**
   * Updates the specified origin from the origin group.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
   * use the origin via a [CacheService.Purge] request.
   */
  update: handleUnaryCall<UpdateOriginRequest, Operation>;
  /** Deletes origin from origin group. */
  delete: handleUnaryCall<DeleteOriginRequest, Operation>;
}

export interface OriginServiceClient extends Client {
  /** Get origin in origin group. */
  get(request: GetOriginRequest, callback: (error: ServiceError | null, response: Origin) => void): ClientUnaryCall;
  get(
    request: GetOriginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Origin) => void,
  ): ClientUnaryCall;
  get(
    request: GetOriginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Origin) => void,
  ): ClientUnaryCall;
  /** Lists origins of origin group. */
  list(
    request: ListOriginsRequest,
    callback: (error: ServiceError | null, response: ListOriginsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListOriginsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListOriginsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListOriginsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListOriginsResponse) => void,
  ): ClientUnaryCall;
  /** Creates origin inside origin group. */
  create(
    request: CreateOriginRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateOriginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateOriginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified origin from the origin group.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
   * use the origin via a [CacheService.Purge] request.
   */
  update(
    request: UpdateOriginRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateOriginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateOriginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes origin from origin group. */
  delete(
    request: DeleteOriginRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteOriginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteOriginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const OriginServiceClient = makeGenericClientConstructor(
  OriginServiceService,
  "yandex.cloud.cdn.v1.OriginService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): OriginServiceClient;
  service: typeof OriginServiceService;
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
