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
import { MlModel, MlModelType, mlModelTypeFromJSON, mlModelTypeToJSON } from "./ml_model";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export interface GetMlModelRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest";
  /** ID of the cluster that the model belongs to. */
  clusterId: string;
  /**
   * Name of the model to return.
   *
   * To get a model name make a [MlModelService.List] request.
   */
  mlModelName: string;
}

export interface ListMlModelsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest";
  /** ID of the cluster that models belongs to. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListMlModelsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListMlModelsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListMlModelsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse";
  /** List of models in the specified cluster. */
  mlModels: MlModel[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListMlModelsRequest.page_size], use `next_page_token` as the value
   * for the [ListMlModelsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateMlModelRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest";
  /**
   * ID of the cluster to create a model in.
   *
   * To get a cluster ID make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Model name. The model name is one of the arguments of the modelEvaluate() function, which is used to call the model in ClickHouse. */
  mlModelName: string;
  /** Type of the model. */
  type: MlModelType;
  /** Model file URL. You can only use models stored in Object Storage. */
  uri: string;
}

export interface CreateMlModelMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata";
  /** ID of the cluster that a model is being added to. */
  clusterId: string;
  /** Name of the the model that is being created. */
  mlModelName: string;
}

export interface UpdateMlModelRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest";
  /**
   * ID of the cluster to update the model in.
   *
   * To get a cluster ID make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the the model to update. */
  mlModelName: string;
  updateMask?:
    | string[]
    | undefined;
  /** The new model file URL. You can only use models stored in Object Storage. */
  uri: string;
}

export interface UpdateMlModelMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata";
  /** ID of the cluster that contains the model being updated. */
  clusterId: string;
  /** Name of the the model that is being updated. */
  mlModelName: string;
}

export interface DeleteMlModelRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest";
  /**
   * ID of the cluster to delete the model in.
   *
   * To get a cluster ID make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the the model to delete. */
  mlModelName: string;
}

export interface DeleteMlModelMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata";
  /** ID of the cluster that contains the model being deleted. */
  clusterId: string;
  /** Name of the the model that is being deleted. */
  mlModelName: string;
}

function createBaseGetMlModelRequest(): GetMlModelRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest", clusterId: "", mlModelName: "" };
}

export const GetMlModelRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest" as const,

  encode(message: GetMlModelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMlModelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMlModelRequest();
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

          message.mlModelName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMlModelRequest {
    return {
      $type: GetMlModelRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      mlModelName: isSet(object.mlModelName) ? globalThis.String(object.mlModelName) : "",
    };
  },

  toJSON(message: GetMlModelRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.mlModelName !== "") {
      obj.mlModelName = message.mlModelName;
    }
    return obj;
  },

  create(base?: DeepPartial<GetMlModelRequest>): GetMlModelRequest {
    return GetMlModelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetMlModelRequest>): GetMlModelRequest {
    const message = createBaseGetMlModelRequest();
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetMlModelRequest.$type, GetMlModelRequest);

function createBaseListMlModelsRequest(): ListMlModelsRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListMlModelsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest" as const,

  encode(message: ListMlModelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMlModelsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMlModelsRequest();
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

  fromJSON(object: any): ListMlModelsRequest {
    return {
      $type: ListMlModelsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListMlModelsRequest): unknown {
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

  create(base?: DeepPartial<ListMlModelsRequest>): ListMlModelsRequest {
    return ListMlModelsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListMlModelsRequest>): ListMlModelsRequest {
    const message = createBaseListMlModelsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListMlModelsRequest.$type, ListMlModelsRequest);

function createBaseListMlModelsResponse(): ListMlModelsResponse {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse", mlModels: [], nextPageToken: "" };
}

export const ListMlModelsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse" as const,

  encode(message: ListMlModelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mlModels) {
      MlModel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMlModelsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMlModelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mlModels.push(MlModel.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListMlModelsResponse {
    return {
      $type: ListMlModelsResponse.$type,
      mlModels: globalThis.Array.isArray(object?.mlModels) ? object.mlModels.map((e: any) => MlModel.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListMlModelsResponse): unknown {
    const obj: any = {};
    if (message.mlModels?.length) {
      obj.mlModels = message.mlModels.map((e) => MlModel.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListMlModelsResponse>): ListMlModelsResponse {
    return ListMlModelsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListMlModelsResponse>): ListMlModelsResponse {
    const message = createBaseListMlModelsResponse();
    message.mlModels = object.mlModels?.map((e) => MlModel.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListMlModelsResponse.$type, ListMlModelsResponse);

function createBaseCreateMlModelRequest(): CreateMlModelRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest",
    clusterId: "",
    mlModelName: "",
    type: 0,
    uri: "",
  };
}

export const CreateMlModelRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest" as const,

  encode(message: CreateMlModelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMlModelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMlModelRequest();
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

          message.mlModelName = reader.string();
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

  fromJSON(object: any): CreateMlModelRequest {
    return {
      $type: CreateMlModelRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      mlModelName: isSet(object.mlModelName) ? globalThis.String(object.mlModelName) : "",
      type: isSet(object.type) ? mlModelTypeFromJSON(object.type) : 0,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: CreateMlModelRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.mlModelName !== "") {
      obj.mlModelName = message.mlModelName;
    }
    if (message.type !== 0) {
      obj.type = mlModelTypeToJSON(message.type);
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateMlModelRequest>): CreateMlModelRequest {
    return CreateMlModelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateMlModelRequest>): CreateMlModelRequest {
    const message = createBaseCreateMlModelRequest();
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    message.type = object.type ?? 0;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateMlModelRequest.$type, CreateMlModelRequest);

function createBaseCreateMlModelMetadata(): CreateMlModelMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata", clusterId: "", mlModelName: "" };
}

export const CreateMlModelMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata" as const,

  encode(message: CreateMlModelMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMlModelMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMlModelMetadata();
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

          message.mlModelName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateMlModelMetadata {
    return {
      $type: CreateMlModelMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      mlModelName: isSet(object.mlModelName) ? globalThis.String(object.mlModelName) : "",
    };
  },

  toJSON(message: CreateMlModelMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.mlModelName !== "") {
      obj.mlModelName = message.mlModelName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateMlModelMetadata>): CreateMlModelMetadata {
    return CreateMlModelMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateMlModelMetadata>): CreateMlModelMetadata {
    const message = createBaseCreateMlModelMetadata();
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateMlModelMetadata.$type, CreateMlModelMetadata);

function createBaseUpdateMlModelRequest(): UpdateMlModelRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest",
    clusterId: "",
    mlModelName: "",
    updateMask: undefined,
    uri: "",
  };
}

export const UpdateMlModelRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest" as const,

  encode(message: UpdateMlModelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMlModelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMlModelRequest();
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

          message.mlModelName = reader.string();
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

  fromJSON(object: any): UpdateMlModelRequest {
    return {
      $type: UpdateMlModelRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      mlModelName: isSet(object.mlModelName) ? globalThis.String(object.mlModelName) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: UpdateMlModelRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.mlModelName !== "") {
      obj.mlModelName = message.mlModelName;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateMlModelRequest>): UpdateMlModelRequest {
    return UpdateMlModelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateMlModelRequest>): UpdateMlModelRequest {
    const message = createBaseUpdateMlModelRequest();
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateMlModelRequest.$type, UpdateMlModelRequest);

function createBaseUpdateMlModelMetadata(): UpdateMlModelMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata", clusterId: "", mlModelName: "" };
}

export const UpdateMlModelMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata" as const,

  encode(message: UpdateMlModelMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMlModelMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMlModelMetadata();
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

          message.mlModelName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateMlModelMetadata {
    return {
      $type: UpdateMlModelMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      mlModelName: isSet(object.mlModelName) ? globalThis.String(object.mlModelName) : "",
    };
  },

  toJSON(message: UpdateMlModelMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.mlModelName !== "") {
      obj.mlModelName = message.mlModelName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateMlModelMetadata>): UpdateMlModelMetadata {
    return UpdateMlModelMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateMlModelMetadata>): UpdateMlModelMetadata {
    const message = createBaseUpdateMlModelMetadata();
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateMlModelMetadata.$type, UpdateMlModelMetadata);

function createBaseDeleteMlModelRequest(): DeleteMlModelRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest", clusterId: "", mlModelName: "" };
}

export const DeleteMlModelRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest" as const,

  encode(message: DeleteMlModelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMlModelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMlModelRequest();
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

          message.mlModelName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteMlModelRequest {
    return {
      $type: DeleteMlModelRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      mlModelName: isSet(object.mlModelName) ? globalThis.String(object.mlModelName) : "",
    };
  },

  toJSON(message: DeleteMlModelRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.mlModelName !== "") {
      obj.mlModelName = message.mlModelName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteMlModelRequest>): DeleteMlModelRequest {
    return DeleteMlModelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteMlModelRequest>): DeleteMlModelRequest {
    const message = createBaseDeleteMlModelRequest();
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteMlModelRequest.$type, DeleteMlModelRequest);

function createBaseDeleteMlModelMetadata(): DeleteMlModelMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata", clusterId: "", mlModelName: "" };
}

export const DeleteMlModelMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata" as const,

  encode(message: DeleteMlModelMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMlModelMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMlModelMetadata();
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

          message.mlModelName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteMlModelMetadata {
    return {
      $type: DeleteMlModelMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      mlModelName: isSet(object.mlModelName) ? globalThis.String(object.mlModelName) : "",
    };
  },

  toJSON(message: DeleteMlModelMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.mlModelName !== "") {
      obj.mlModelName = message.mlModelName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteMlModelMetadata>): DeleteMlModelMetadata {
    return DeleteMlModelMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteMlModelMetadata>): DeleteMlModelMetadata {
    const message = createBaseDeleteMlModelMetadata();
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteMlModelMetadata.$type, DeleteMlModelMetadata);

/** A set of methods for managing machine learning models. */
export type MlModelServiceService = typeof MlModelServiceService;
export const MlModelServiceService = {
  /**
   * Returns the specified machine learning model.
   *
   * To get the list of all available models, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMlModelRequest) => Buffer.from(GetMlModelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetMlModelRequest.decode(value),
    responseSerialize: (value: MlModel) => Buffer.from(MlModel.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MlModel.decode(value),
  },
  /** Retrieves the list of machine learning models in the specified cluster. */
  list: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListMlModelsRequest) => Buffer.from(ListMlModelsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListMlModelsRequest.decode(value),
    responseSerialize: (value: ListMlModelsResponse) => Buffer.from(ListMlModelsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListMlModelsResponse.decode(value),
  },
  /** Creates a machine learning model in the specified cluster. */
  create: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateMlModelRequest) => Buffer.from(CreateMlModelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateMlModelRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified machine learning model. */
  update: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateMlModelRequest) => Buffer.from(UpdateMlModelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateMlModelRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified machine learning model. */
  delete: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteMlModelRequest) => Buffer.from(DeleteMlModelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteMlModelRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface MlModelServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified machine learning model.
   *
   * To get the list of all available models, make a [List] request.
   */
  get: handleUnaryCall<GetMlModelRequest, MlModel>;
  /** Retrieves the list of machine learning models in the specified cluster. */
  list: handleUnaryCall<ListMlModelsRequest, ListMlModelsResponse>;
  /** Creates a machine learning model in the specified cluster. */
  create: handleUnaryCall<CreateMlModelRequest, Operation>;
  /** Updates the specified machine learning model. */
  update: handleUnaryCall<UpdateMlModelRequest, Operation>;
  /** Deletes the specified machine learning model. */
  delete: handleUnaryCall<DeleteMlModelRequest, Operation>;
}

export interface MlModelServiceClient extends Client {
  /**
   * Returns the specified machine learning model.
   *
   * To get the list of all available models, make a [List] request.
   */
  get(request: GetMlModelRequest, callback: (error: ServiceError | null, response: MlModel) => void): ClientUnaryCall;
  get(
    request: GetMlModelRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MlModel) => void,
  ): ClientUnaryCall;
  get(
    request: GetMlModelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MlModel) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of machine learning models in the specified cluster. */
  list(
    request: ListMlModelsRequest,
    callback: (error: ServiceError | null, response: ListMlModelsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListMlModelsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListMlModelsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListMlModelsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListMlModelsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a machine learning model in the specified cluster. */
  create(
    request: CreateMlModelRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateMlModelRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateMlModelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified machine learning model. */
  update(
    request: UpdateMlModelRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateMlModelRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateMlModelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified machine learning model. */
  delete(
    request: DeleteMlModelRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteMlModelRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteMlModelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const MlModelServiceClient = makeGenericClientConstructor(
  MlModelServiceService,
  "yandex.cloud.mdb.clickhouse.v1.MlModelService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MlModelServiceClient;
  service: typeof MlModelServiceService;
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
