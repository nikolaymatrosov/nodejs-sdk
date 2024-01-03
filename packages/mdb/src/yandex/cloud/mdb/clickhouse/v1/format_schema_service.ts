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
import { FormatSchema, FormatSchemaType, formatSchemaTypeFromJSON, formatSchemaTypeToJSON } from "./format_schema";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export interface GetFormatSchemaRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest";
  clusterId: string;
  formatSchemaName: string;
}

export interface ListFormatSchemasRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest";
  clusterId: string;
  pageSize: number;
  pageToken: string;
}

export interface ListFormatSchemasResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse";
  formatSchemas: FormatSchema[];
  nextPageToken: string;
}

export interface CreateFormatSchemaRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest";
  clusterId: string;
  formatSchemaName: string;
  type: FormatSchemaType;
  uri: string;
}

export interface CreateFormatSchemaMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata";
  clusterId: string;
  formatSchemaName: string;
}

export interface UpdateFormatSchemaRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest";
  clusterId: string;
  formatSchemaName: string;
  updateMask?: string[] | undefined;
  uri: string;
}

export interface UpdateFormatSchemaMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata";
  clusterId: string;
  formatSchemaName: string;
}

export interface DeleteFormatSchemaRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest";
  clusterId: string;
  formatSchemaName: string;
}

export interface DeleteFormatSchemaMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata";
  clusterId: string;
  formatSchemaName: string;
}

function createBaseGetFormatSchemaRequest(): GetFormatSchemaRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest", clusterId: "", formatSchemaName: "" };
}

export const GetFormatSchemaRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest" as const,

  encode(message: GetFormatSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFormatSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFormatSchemaRequest();
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

          message.formatSchemaName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFormatSchemaRequest {
    return {
      $type: GetFormatSchemaRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      formatSchemaName: isSet(object.formatSchemaName) ? globalThis.String(object.formatSchemaName) : "",
    };
  },

  toJSON(message: GetFormatSchemaRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.formatSchemaName !== "") {
      obj.formatSchemaName = message.formatSchemaName;
    }
    return obj;
  },

  create(base?: DeepPartial<GetFormatSchemaRequest>): GetFormatSchemaRequest {
    return GetFormatSchemaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetFormatSchemaRequest>): GetFormatSchemaRequest {
    const message = createBaseGetFormatSchemaRequest();
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFormatSchemaRequest.$type, GetFormatSchemaRequest);

function createBaseListFormatSchemasRequest(): ListFormatSchemasRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListFormatSchemasRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest" as const,

  encode(message: ListFormatSchemasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFormatSchemasRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFormatSchemasRequest();
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

  fromJSON(object: any): ListFormatSchemasRequest {
    return {
      $type: ListFormatSchemasRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListFormatSchemasRequest): unknown {
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

  create(base?: DeepPartial<ListFormatSchemasRequest>): ListFormatSchemasRequest {
    return ListFormatSchemasRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListFormatSchemasRequest>): ListFormatSchemasRequest {
    const message = createBaseListFormatSchemasRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFormatSchemasRequest.$type, ListFormatSchemasRequest);

function createBaseListFormatSchemasResponse(): ListFormatSchemasResponse {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse", formatSchemas: [], nextPageToken: "" };
}

export const ListFormatSchemasResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse" as const,

  encode(message: ListFormatSchemasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.formatSchemas) {
      FormatSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFormatSchemasResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFormatSchemasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.formatSchemas.push(FormatSchema.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListFormatSchemasResponse {
    return {
      $type: ListFormatSchemasResponse.$type,
      formatSchemas: globalThis.Array.isArray(object?.formatSchemas)
        ? object.formatSchemas.map((e: any) => FormatSchema.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFormatSchemasResponse): unknown {
    const obj: any = {};
    if (message.formatSchemas?.length) {
      obj.formatSchemas = message.formatSchemas.map((e) => FormatSchema.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListFormatSchemasResponse>): ListFormatSchemasResponse {
    return ListFormatSchemasResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListFormatSchemasResponse>): ListFormatSchemasResponse {
    const message = createBaseListFormatSchemasResponse();
    message.formatSchemas = object.formatSchemas?.map((e) => FormatSchema.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFormatSchemasResponse.$type, ListFormatSchemasResponse);

function createBaseCreateFormatSchemaRequest(): CreateFormatSchemaRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest",
    clusterId: "",
    formatSchemaName: "",
    type: 0,
    uri: "",
  };
}

export const CreateFormatSchemaRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest" as const,

  encode(message: CreateFormatSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFormatSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFormatSchemaRequest();
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

          message.formatSchemaName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFormatSchemaRequest {
    return {
      $type: CreateFormatSchemaRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      formatSchemaName: isSet(object.formatSchemaName) ? globalThis.String(object.formatSchemaName) : "",
      type: isSet(object.type) ? formatSchemaTypeFromJSON(object.type) : 0,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: CreateFormatSchemaRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.formatSchemaName !== "") {
      obj.formatSchemaName = message.formatSchemaName;
    }
    if (message.type !== 0) {
      obj.type = formatSchemaTypeToJSON(message.type);
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateFormatSchemaRequest>): CreateFormatSchemaRequest {
    return CreateFormatSchemaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateFormatSchemaRequest>): CreateFormatSchemaRequest {
    const message = createBaseCreateFormatSchemaRequest();
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    message.type = object.type ?? 0;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFormatSchemaRequest.$type, CreateFormatSchemaRequest);

function createBaseCreateFormatSchemaMetadata(): CreateFormatSchemaMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata", clusterId: "", formatSchemaName: "" };
}

export const CreateFormatSchemaMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata" as const,

  encode(message: CreateFormatSchemaMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFormatSchemaMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFormatSchemaMetadata();
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

          message.formatSchemaName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFormatSchemaMetadata {
    return {
      $type: CreateFormatSchemaMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      formatSchemaName: isSet(object.formatSchemaName) ? globalThis.String(object.formatSchemaName) : "",
    };
  },

  toJSON(message: CreateFormatSchemaMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.formatSchemaName !== "") {
      obj.formatSchemaName = message.formatSchemaName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateFormatSchemaMetadata>): CreateFormatSchemaMetadata {
    return CreateFormatSchemaMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateFormatSchemaMetadata>): CreateFormatSchemaMetadata {
    const message = createBaseCreateFormatSchemaMetadata();
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFormatSchemaMetadata.$type, CreateFormatSchemaMetadata);

function createBaseUpdateFormatSchemaRequest(): UpdateFormatSchemaRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest",
    clusterId: "",
    formatSchemaName: "",
    updateMask: undefined,
    uri: "",
  };
}

export const UpdateFormatSchemaRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest" as const,

  encode(message: UpdateFormatSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFormatSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFormatSchemaRequest();
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

          message.formatSchemaName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFormatSchemaRequest {
    return {
      $type: UpdateFormatSchemaRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      formatSchemaName: isSet(object.formatSchemaName) ? globalThis.String(object.formatSchemaName) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: UpdateFormatSchemaRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.formatSchemaName !== "") {
      obj.formatSchemaName = message.formatSchemaName;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateFormatSchemaRequest>): UpdateFormatSchemaRequest {
    return UpdateFormatSchemaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateFormatSchemaRequest>): UpdateFormatSchemaRequest {
    const message = createBaseUpdateFormatSchemaRequest();
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFormatSchemaRequest.$type, UpdateFormatSchemaRequest);

function createBaseUpdateFormatSchemaMetadata(): UpdateFormatSchemaMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata", clusterId: "", formatSchemaName: "" };
}

export const UpdateFormatSchemaMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata" as const,

  encode(message: UpdateFormatSchemaMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFormatSchemaMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFormatSchemaMetadata();
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

          message.formatSchemaName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFormatSchemaMetadata {
    return {
      $type: UpdateFormatSchemaMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      formatSchemaName: isSet(object.formatSchemaName) ? globalThis.String(object.formatSchemaName) : "",
    };
  },

  toJSON(message: UpdateFormatSchemaMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.formatSchemaName !== "") {
      obj.formatSchemaName = message.formatSchemaName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateFormatSchemaMetadata>): UpdateFormatSchemaMetadata {
    return UpdateFormatSchemaMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateFormatSchemaMetadata>): UpdateFormatSchemaMetadata {
    const message = createBaseUpdateFormatSchemaMetadata();
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFormatSchemaMetadata.$type, UpdateFormatSchemaMetadata);

function createBaseDeleteFormatSchemaRequest(): DeleteFormatSchemaRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest", clusterId: "", formatSchemaName: "" };
}

export const DeleteFormatSchemaRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest" as const,

  encode(message: DeleteFormatSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFormatSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFormatSchemaRequest();
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

          message.formatSchemaName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFormatSchemaRequest {
    return {
      $type: DeleteFormatSchemaRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      formatSchemaName: isSet(object.formatSchemaName) ? globalThis.String(object.formatSchemaName) : "",
    };
  },

  toJSON(message: DeleteFormatSchemaRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.formatSchemaName !== "") {
      obj.formatSchemaName = message.formatSchemaName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteFormatSchemaRequest>): DeleteFormatSchemaRequest {
    return DeleteFormatSchemaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteFormatSchemaRequest>): DeleteFormatSchemaRequest {
    const message = createBaseDeleteFormatSchemaRequest();
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFormatSchemaRequest.$type, DeleteFormatSchemaRequest);

function createBaseDeleteFormatSchemaMetadata(): DeleteFormatSchemaMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata", clusterId: "", formatSchemaName: "" };
}

export const DeleteFormatSchemaMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata" as const,

  encode(message: DeleteFormatSchemaMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFormatSchemaMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFormatSchemaMetadata();
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

          message.formatSchemaName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFormatSchemaMetadata {
    return {
      $type: DeleteFormatSchemaMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      formatSchemaName: isSet(object.formatSchemaName) ? globalThis.String(object.formatSchemaName) : "",
    };
  },

  toJSON(message: DeleteFormatSchemaMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.formatSchemaName !== "") {
      obj.formatSchemaName = message.formatSchemaName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteFormatSchemaMetadata>): DeleteFormatSchemaMetadata {
    return DeleteFormatSchemaMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteFormatSchemaMetadata>): DeleteFormatSchemaMetadata {
    const message = createBaseDeleteFormatSchemaMetadata();
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFormatSchemaMetadata.$type, DeleteFormatSchemaMetadata);

export type FormatSchemaServiceService = typeof FormatSchemaServiceService;
export const FormatSchemaServiceService = {
  get: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFormatSchemaRequest) => Buffer.from(GetFormatSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFormatSchemaRequest.decode(value),
    responseSerialize: (value: FormatSchema) => Buffer.from(FormatSchema.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FormatSchema.decode(value),
  },
  list: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFormatSchemasRequest) => Buffer.from(ListFormatSchemasRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFormatSchemasRequest.decode(value),
    responseSerialize: (value: ListFormatSchemasResponse) =>
      Buffer.from(ListFormatSchemasResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFormatSchemasResponse.decode(value),
  },
  create: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFormatSchemaRequest) =>
      Buffer.from(CreateFormatSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateFormatSchemaRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  update: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateFormatSchemaRequest) =>
      Buffer.from(UpdateFormatSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateFormatSchemaRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  delete: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFormatSchemaRequest) =>
      Buffer.from(DeleteFormatSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteFormatSchemaRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface FormatSchemaServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetFormatSchemaRequest, FormatSchema>;
  list: handleUnaryCall<ListFormatSchemasRequest, ListFormatSchemasResponse>;
  create: handleUnaryCall<CreateFormatSchemaRequest, Operation>;
  update: handleUnaryCall<UpdateFormatSchemaRequest, Operation>;
  delete: handleUnaryCall<DeleteFormatSchemaRequest, Operation>;
}

export interface FormatSchemaServiceClient extends Client {
  get(
    request: GetFormatSchemaRequest,
    callback: (error: ServiceError | null, response: FormatSchema) => void,
  ): ClientUnaryCall;
  get(
    request: GetFormatSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: FormatSchema) => void,
  ): ClientUnaryCall;
  get(
    request: GetFormatSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: FormatSchema) => void,
  ): ClientUnaryCall;
  list(
    request: ListFormatSchemasRequest,
    callback: (error: ServiceError | null, response: ListFormatSchemasResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListFormatSchemasRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFormatSchemasResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListFormatSchemasRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFormatSchemasResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateFormatSchemaRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateFormatSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateFormatSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateFormatSchemaRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateFormatSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateFormatSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteFormatSchemaRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteFormatSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteFormatSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const FormatSchemaServiceClient = makeGenericClientConstructor(
  FormatSchemaServiceService,
  "yandex.cloud.mdb.clickhouse.v1.FormatSchemaService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FormatSchemaServiceClient;
  service: typeof FormatSchemaServiceService;
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
