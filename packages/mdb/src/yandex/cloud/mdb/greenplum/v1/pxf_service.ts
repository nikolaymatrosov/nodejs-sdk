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
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { PXFDatasource } from "./pxf";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export interface CreatePXFDatasourceMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceMetadata";
  clusterId: string;
  datasourceName: string;
}

export interface UpdatePXFDatasourceMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceMetadata";
  clusterId: string;
  datasourceName: string;
}

export interface DeletePXFDatasourceMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceMetadata";
  clusterId: string;
  datasourceName: string;
}

export interface ListPXFDatasourcesRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesRequest";
  clusterId: string;
}

export interface ListPXFDatasourcesResponse {
  $type: "yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesResponse";
  datasources: PXFDatasource[];
}

export interface CreatePXFDatasourceRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceRequest";
  clusterId: string;
  datasource?: PXFDatasource | undefined;
}

export interface UpdatePXFDatasourceRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceRequest";
  clusterId: string;
  updateMask?: string[] | undefined;
  datasource?: PXFDatasource | undefined;
}

export interface DeletePXFDatasourceRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceRequest";
  clusterId: string;
  datasourceName: string;
}

function createBaseCreatePXFDatasourceMetadata(): CreatePXFDatasourceMetadata {
  return { $type: "yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceMetadata", clusterId: "", datasourceName: "" };
}

export const CreatePXFDatasourceMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceMetadata" as const,

  encode(message: CreatePXFDatasourceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.datasourceName !== "") {
      writer.uint32(18).string(message.datasourceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePXFDatasourceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePXFDatasourceMetadata();
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

          message.datasourceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePXFDatasourceMetadata {
    return {
      $type: CreatePXFDatasourceMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      datasourceName: isSet(object.datasourceName) ? globalThis.String(object.datasourceName) : "",
    };
  },

  toJSON(message: CreatePXFDatasourceMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.datasourceName !== "") {
      obj.datasourceName = message.datasourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreatePXFDatasourceMetadata>): CreatePXFDatasourceMetadata {
    return CreatePXFDatasourceMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreatePXFDatasourceMetadata>): CreatePXFDatasourceMetadata {
    const message = createBaseCreatePXFDatasourceMetadata();
    message.clusterId = object.clusterId ?? "";
    message.datasourceName = object.datasourceName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreatePXFDatasourceMetadata.$type, CreatePXFDatasourceMetadata);

function createBaseUpdatePXFDatasourceMetadata(): UpdatePXFDatasourceMetadata {
  return { $type: "yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceMetadata", clusterId: "", datasourceName: "" };
}

export const UpdatePXFDatasourceMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceMetadata" as const,

  encode(message: UpdatePXFDatasourceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.datasourceName !== "") {
      writer.uint32(18).string(message.datasourceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePXFDatasourceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePXFDatasourceMetadata();
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

          message.datasourceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePXFDatasourceMetadata {
    return {
      $type: UpdatePXFDatasourceMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      datasourceName: isSet(object.datasourceName) ? globalThis.String(object.datasourceName) : "",
    };
  },

  toJSON(message: UpdatePXFDatasourceMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.datasourceName !== "") {
      obj.datasourceName = message.datasourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdatePXFDatasourceMetadata>): UpdatePXFDatasourceMetadata {
    return UpdatePXFDatasourceMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdatePXFDatasourceMetadata>): UpdatePXFDatasourceMetadata {
    const message = createBaseUpdatePXFDatasourceMetadata();
    message.clusterId = object.clusterId ?? "";
    message.datasourceName = object.datasourceName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdatePXFDatasourceMetadata.$type, UpdatePXFDatasourceMetadata);

function createBaseDeletePXFDatasourceMetadata(): DeletePXFDatasourceMetadata {
  return { $type: "yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceMetadata", clusterId: "", datasourceName: "" };
}

export const DeletePXFDatasourceMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceMetadata" as const,

  encode(message: DeletePXFDatasourceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.datasourceName !== "") {
      writer.uint32(18).string(message.datasourceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePXFDatasourceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePXFDatasourceMetadata();
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

          message.datasourceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePXFDatasourceMetadata {
    return {
      $type: DeletePXFDatasourceMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      datasourceName: isSet(object.datasourceName) ? globalThis.String(object.datasourceName) : "",
    };
  },

  toJSON(message: DeletePXFDatasourceMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.datasourceName !== "") {
      obj.datasourceName = message.datasourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeletePXFDatasourceMetadata>): DeletePXFDatasourceMetadata {
    return DeletePXFDatasourceMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeletePXFDatasourceMetadata>): DeletePXFDatasourceMetadata {
    const message = createBaseDeletePXFDatasourceMetadata();
    message.clusterId = object.clusterId ?? "";
    message.datasourceName = object.datasourceName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeletePXFDatasourceMetadata.$type, DeletePXFDatasourceMetadata);

function createBaseListPXFDatasourcesRequest(): ListPXFDatasourcesRequest {
  return { $type: "yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesRequest", clusterId: "" };
}

export const ListPXFDatasourcesRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesRequest" as const,

  encode(message: ListPXFDatasourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPXFDatasourcesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPXFDatasourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPXFDatasourcesRequest {
    return {
      $type: ListPXFDatasourcesRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: ListPXFDatasourcesRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPXFDatasourcesRequest>): ListPXFDatasourcesRequest {
    return ListPXFDatasourcesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPXFDatasourcesRequest>): ListPXFDatasourcesRequest {
    const message = createBaseListPXFDatasourcesRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPXFDatasourcesRequest.$type, ListPXFDatasourcesRequest);

function createBaseListPXFDatasourcesResponse(): ListPXFDatasourcesResponse {
  return { $type: "yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesResponse", datasources: [] };
}

export const ListPXFDatasourcesResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesResponse" as const,

  encode(message: ListPXFDatasourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.datasources) {
      PXFDatasource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPXFDatasourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPXFDatasourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.datasources.push(PXFDatasource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPXFDatasourcesResponse {
    return {
      $type: ListPXFDatasourcesResponse.$type,
      datasources: globalThis.Array.isArray(object?.datasources)
        ? object.datasources.map((e: any) => PXFDatasource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListPXFDatasourcesResponse): unknown {
    const obj: any = {};
    if (message.datasources?.length) {
      obj.datasources = message.datasources.map((e) => PXFDatasource.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListPXFDatasourcesResponse>): ListPXFDatasourcesResponse {
    return ListPXFDatasourcesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPXFDatasourcesResponse>): ListPXFDatasourcesResponse {
    const message = createBaseListPXFDatasourcesResponse();
    message.datasources = object.datasources?.map((e) => PXFDatasource.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListPXFDatasourcesResponse.$type, ListPXFDatasourcesResponse);

function createBaseCreatePXFDatasourceRequest(): CreatePXFDatasourceRequest {
  return { $type: "yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceRequest", clusterId: "", datasource: undefined };
}

export const CreatePXFDatasourceRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceRequest" as const,

  encode(message: CreatePXFDatasourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.datasource !== undefined) {
      PXFDatasource.encode(message.datasource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePXFDatasourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePXFDatasourceRequest();
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

          message.datasource = PXFDatasource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePXFDatasourceRequest {
    return {
      $type: CreatePXFDatasourceRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      datasource: isSet(object.datasource) ? PXFDatasource.fromJSON(object.datasource) : undefined,
    };
  },

  toJSON(message: CreatePXFDatasourceRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.datasource !== undefined) {
      obj.datasource = PXFDatasource.toJSON(message.datasource);
    }
    return obj;
  },

  create(base?: DeepPartial<CreatePXFDatasourceRequest>): CreatePXFDatasourceRequest {
    return CreatePXFDatasourceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreatePXFDatasourceRequest>): CreatePXFDatasourceRequest {
    const message = createBaseCreatePXFDatasourceRequest();
    message.clusterId = object.clusterId ?? "";
    message.datasource = (object.datasource !== undefined && object.datasource !== null)
      ? PXFDatasource.fromPartial(object.datasource)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreatePXFDatasourceRequest.$type, CreatePXFDatasourceRequest);

function createBaseUpdatePXFDatasourceRequest(): UpdatePXFDatasourceRequest {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceRequest",
    clusterId: "",
    updateMask: undefined,
    datasource: undefined,
  };
}

export const UpdatePXFDatasourceRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceRequest" as const,

  encode(message: UpdatePXFDatasourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.datasource !== undefined) {
      PXFDatasource.encode(message.datasource, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePXFDatasourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePXFDatasourceRequest();
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

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.datasource = PXFDatasource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePXFDatasourceRequest {
    return {
      $type: UpdatePXFDatasourceRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      datasource: isSet(object.datasource) ? PXFDatasource.fromJSON(object.datasource) : undefined,
    };
  },

  toJSON(message: UpdatePXFDatasourceRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.datasource !== undefined) {
      obj.datasource = PXFDatasource.toJSON(message.datasource);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdatePXFDatasourceRequest>): UpdatePXFDatasourceRequest {
    return UpdatePXFDatasourceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdatePXFDatasourceRequest>): UpdatePXFDatasourceRequest {
    const message = createBaseUpdatePXFDatasourceRequest();
    message.clusterId = object.clusterId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.datasource = (object.datasource !== undefined && object.datasource !== null)
      ? PXFDatasource.fromPartial(object.datasource)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdatePXFDatasourceRequest.$type, UpdatePXFDatasourceRequest);

function createBaseDeletePXFDatasourceRequest(): DeletePXFDatasourceRequest {
  return { $type: "yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceRequest", clusterId: "", datasourceName: "" };
}

export const DeletePXFDatasourceRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceRequest" as const,

  encode(message: DeletePXFDatasourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.datasourceName !== "") {
      writer.uint32(18).string(message.datasourceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePXFDatasourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePXFDatasourceRequest();
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

          message.datasourceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePXFDatasourceRequest {
    return {
      $type: DeletePXFDatasourceRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      datasourceName: isSet(object.datasourceName) ? globalThis.String(object.datasourceName) : "",
    };
  },

  toJSON(message: DeletePXFDatasourceRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.datasourceName !== "") {
      obj.datasourceName = message.datasourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeletePXFDatasourceRequest>): DeletePXFDatasourceRequest {
    return DeletePXFDatasourceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeletePXFDatasourceRequest>): DeletePXFDatasourceRequest {
    const message = createBaseDeletePXFDatasourceRequest();
    message.clusterId = object.clusterId ?? "";
    message.datasourceName = object.datasourceName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeletePXFDatasourceRequest.$type, DeletePXFDatasourceRequest);

export type PXFDatasourceServiceService = typeof PXFDatasourceServiceService;
export const PXFDatasourceServiceService = {
  /** List all PXF datasources */
  list: {
    path: "/yandex.cloud.mdb.greenplum.v1.PXFDatasourceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPXFDatasourcesRequest) =>
      Buffer.from(ListPXFDatasourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListPXFDatasourcesRequest.decode(value),
    responseSerialize: (value: ListPXFDatasourcesResponse) =>
      Buffer.from(ListPXFDatasourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListPXFDatasourcesResponse.decode(value),
  },
  /** Creates PXF datasource */
  create: {
    path: "/yandex.cloud.mdb.greenplum.v1.PXFDatasourceService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePXFDatasourceRequest) =>
      Buffer.from(CreatePXFDatasourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePXFDatasourceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Update PXF datasource */
  update: {
    path: "/yandex.cloud.mdb.greenplum.v1.PXFDatasourceService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePXFDatasourceRequest) =>
      Buffer.from(UpdatePXFDatasourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdatePXFDatasourceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Delete PXF datasource */
  delete: {
    path: "/yandex.cloud.mdb.greenplum.v1.PXFDatasourceService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePXFDatasourceRequest) =>
      Buffer.from(DeletePXFDatasourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeletePXFDatasourceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface PXFDatasourceServiceServer extends UntypedServiceImplementation {
  /** List all PXF datasources */
  list: handleUnaryCall<ListPXFDatasourcesRequest, ListPXFDatasourcesResponse>;
  /** Creates PXF datasource */
  create: handleUnaryCall<CreatePXFDatasourceRequest, Operation>;
  /** Update PXF datasource */
  update: handleUnaryCall<UpdatePXFDatasourceRequest, Operation>;
  /** Delete PXF datasource */
  delete: handleUnaryCall<DeletePXFDatasourceRequest, Operation>;
}

export interface PXFDatasourceServiceClient extends Client {
  /** List all PXF datasources */
  list(
    request: ListPXFDatasourcesRequest,
    callback: (error: ServiceError | null, response: ListPXFDatasourcesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListPXFDatasourcesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListPXFDatasourcesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListPXFDatasourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListPXFDatasourcesResponse) => void,
  ): ClientUnaryCall;
  /** Creates PXF datasource */
  create(
    request: CreatePXFDatasourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePXFDatasourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePXFDatasourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Update PXF datasource */
  update(
    request: UpdatePXFDatasourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdatePXFDatasourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdatePXFDatasourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Delete PXF datasource */
  delete(
    request: DeletePXFDatasourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeletePXFDatasourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeletePXFDatasourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const PXFDatasourceServiceClient = makeGenericClientConstructor(
  PXFDatasourceServiceService,
  "yandex.cloud.mdb.greenplum.v1.PXFDatasourceService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PXFDatasourceServiceClient;
  service: typeof PXFDatasourceServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
