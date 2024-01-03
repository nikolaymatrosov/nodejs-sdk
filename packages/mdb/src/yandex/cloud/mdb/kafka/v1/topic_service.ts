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
import { Topic, TopicSpec } from "./topic";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

export interface GetTopicRequest {
  $type: "yandex.cloud.mdb.kafka.v1.GetTopicRequest";
  /**
   * ID of the Apache Kafka® cluster that the topic belongs to.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the Kafka topic resource to return.
   *
   * To get the name of the topic, make a [TopicService.List] request.
   */
  topicName: string;
}

export interface ListTopicsRequest {
  $type: "yandex.cloud.mdb.kafka.v1.ListTopicsRequest";
  /**
   * ID of the Apache Kafka® cluster to list topics in.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListTopicsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.
   *
   * To get the next page of results, set [page_token] to the [ListTopicsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListTopicsResponse {
  $type: "yandex.cloud.mdb.kafka.v1.ListTopicsResponse";
  /** List of Kafka topics. */
  topics: Topic[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListTopicsRequest.page_size], use the [next_page_token] as the value for the [ListTopicsRequest.page_token] parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateTopicRequest {
  $type: "yandex.cloud.mdb.kafka.v1.CreateTopicRequest";
  /**
   * ID of the Apache Kafka® cluster to create a topic in.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the topic to create. */
  topicSpec?: TopicSpec | undefined;
}

export interface CreateTopicMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.CreateTopicMetadata";
  /** ID of the Apache Kafka® cluster where a topic is being created. */
  clusterId: string;
  /** Name of the Kafka topic that is being created. */
  topicName: string;
}

export interface UpdateTopicRequest {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicRequest";
  /**
   * ID of the Apache Kafka® cluster to update a topic in.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the topic to update.
   *
   * To get the name of the topic, make a [TopicService.List] request.
   */
  topicName: string;
  updateMask?:
    | string[]
    | undefined;
  /**
   * New configuration of the topic.
   *
   * Use [update_mask] to prevent reverting all topic settings that are not listed in [topic_spec] to their default values.
   */
  topicSpec?: TopicSpec | undefined;
}

export interface UpdateTopicMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata";
  /** ID of the Apache Kafka® cluster where a topic is being updated. */
  clusterId: string;
  /** Name of the Kafka topic that is being updated. */
  topicName: string;
}

export interface DeleteTopicRequest {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicRequest";
  /**
   * ID of the Apache Kafka® cluster to delete a topic in.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the topic to delete.
   *
   * To get the name of the topic, make a [TopicService.List] request.
   */
  topicName: string;
}

export interface DeleteTopicMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata";
  /** ID of the Apache Kafka® cluster where a topic is being deleted. */
  clusterId: string;
  /** Name of the Kafka topic that is being deleted. */
  topicName: string;
}

function createBaseGetTopicRequest(): GetTopicRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.GetTopicRequest", clusterId: "", topicName: "" };
}

export const GetTopicRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.GetTopicRequest" as const,

  encode(message: GetTopicRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.topicName !== "") {
      writer.uint32(18).string(message.topicName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTopicRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTopicRequest();
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

          message.topicName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTopicRequest {
    return {
      $type: GetTopicRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      topicName: isSet(object.topicName) ? globalThis.String(object.topicName) : "",
    };
  },

  toJSON(message: GetTopicRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.topicName !== "") {
      obj.topicName = message.topicName;
    }
    return obj;
  },

  create(base?: DeepPartial<GetTopicRequest>): GetTopicRequest {
    return GetTopicRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetTopicRequest>): GetTopicRequest {
    const message = createBaseGetTopicRequest();
    message.clusterId = object.clusterId ?? "";
    message.topicName = object.topicName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTopicRequest.$type, GetTopicRequest);

function createBaseListTopicsRequest(): ListTopicsRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.ListTopicsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListTopicsRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.ListTopicsRequest" as const,

  encode(message: ListTopicsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTopicsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTopicsRequest();
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

  fromJSON(object: any): ListTopicsRequest {
    return {
      $type: ListTopicsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListTopicsRequest): unknown {
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

  create(base?: DeepPartial<ListTopicsRequest>): ListTopicsRequest {
    return ListTopicsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListTopicsRequest>): ListTopicsRequest {
    const message = createBaseListTopicsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTopicsRequest.$type, ListTopicsRequest);

function createBaseListTopicsResponse(): ListTopicsResponse {
  return { $type: "yandex.cloud.mdb.kafka.v1.ListTopicsResponse", topics: [], nextPageToken: "" };
}

export const ListTopicsResponse = {
  $type: "yandex.cloud.mdb.kafka.v1.ListTopicsResponse" as const,

  encode(message: ListTopicsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.topics) {
      Topic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTopicsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTopicsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topics.push(Topic.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTopicsResponse {
    return {
      $type: ListTopicsResponse.$type,
      topics: globalThis.Array.isArray(object?.topics) ? object.topics.map((e: any) => Topic.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTopicsResponse): unknown {
    const obj: any = {};
    if (message.topics?.length) {
      obj.topics = message.topics.map((e) => Topic.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListTopicsResponse>): ListTopicsResponse {
    return ListTopicsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListTopicsResponse>): ListTopicsResponse {
    const message = createBaseListTopicsResponse();
    message.topics = object.topics?.map((e) => Topic.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTopicsResponse.$type, ListTopicsResponse);

function createBaseCreateTopicRequest(): CreateTopicRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.CreateTopicRequest", clusterId: "", topicSpec: undefined };
}

export const CreateTopicRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.CreateTopicRequest" as const,

  encode(message: CreateTopicRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.topicSpec !== undefined) {
      TopicSpec.encode(message.topicSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTopicRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTopicRequest();
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

          message.topicSpec = TopicSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTopicRequest {
    return {
      $type: CreateTopicRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      topicSpec: isSet(object.topicSpec) ? TopicSpec.fromJSON(object.topicSpec) : undefined,
    };
  },

  toJSON(message: CreateTopicRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.topicSpec !== undefined) {
      obj.topicSpec = TopicSpec.toJSON(message.topicSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateTopicRequest>): CreateTopicRequest {
    return CreateTopicRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateTopicRequest>): CreateTopicRequest {
    const message = createBaseCreateTopicRequest();
    message.clusterId = object.clusterId ?? "";
    message.topicSpec = (object.topicSpec !== undefined && object.topicSpec !== null)
      ? TopicSpec.fromPartial(object.topicSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateTopicRequest.$type, CreateTopicRequest);

function createBaseCreateTopicMetadata(): CreateTopicMetadata {
  return { $type: "yandex.cloud.mdb.kafka.v1.CreateTopicMetadata", clusterId: "", topicName: "" };
}

export const CreateTopicMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.CreateTopicMetadata" as const,

  encode(message: CreateTopicMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.topicName !== "") {
      writer.uint32(18).string(message.topicName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTopicMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTopicMetadata();
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

          message.topicName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTopicMetadata {
    return {
      $type: CreateTopicMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      topicName: isSet(object.topicName) ? globalThis.String(object.topicName) : "",
    };
  },

  toJSON(message: CreateTopicMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.topicName !== "") {
      obj.topicName = message.topicName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateTopicMetadata>): CreateTopicMetadata {
    return CreateTopicMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateTopicMetadata>): CreateTopicMetadata {
    const message = createBaseCreateTopicMetadata();
    message.clusterId = object.clusterId ?? "";
    message.topicName = object.topicName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTopicMetadata.$type, CreateTopicMetadata);

function createBaseUpdateTopicRequest(): UpdateTopicRequest {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicRequest",
    clusterId: "",
    topicName: "",
    updateMask: undefined,
    topicSpec: undefined,
  };
}

export const UpdateTopicRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicRequest" as const,

  encode(message: UpdateTopicRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.topicName !== "") {
      writer.uint32(18).string(message.topicName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.topicSpec !== undefined) {
      TopicSpec.encode(message.topicSpec, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTopicRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTopicRequest();
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

          message.topicName = reader.string();
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

          message.topicSpec = TopicSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTopicRequest {
    return {
      $type: UpdateTopicRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      topicName: isSet(object.topicName) ? globalThis.String(object.topicName) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      topicSpec: isSet(object.topicSpec) ? TopicSpec.fromJSON(object.topicSpec) : undefined,
    };
  },

  toJSON(message: UpdateTopicRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.topicName !== "") {
      obj.topicName = message.topicName;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.topicSpec !== undefined) {
      obj.topicSpec = TopicSpec.toJSON(message.topicSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateTopicRequest>): UpdateTopicRequest {
    return UpdateTopicRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateTopicRequest>): UpdateTopicRequest {
    const message = createBaseUpdateTopicRequest();
    message.clusterId = object.clusterId ?? "";
    message.topicName = object.topicName ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.topicSpec = (object.topicSpec !== undefined && object.topicSpec !== null)
      ? TopicSpec.fromPartial(object.topicSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateTopicRequest.$type, UpdateTopicRequest);

function createBaseUpdateTopicMetadata(): UpdateTopicMetadata {
  return { $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata", clusterId: "", topicName: "" };
}

export const UpdateTopicMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata" as const,

  encode(message: UpdateTopicMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.topicName !== "") {
      writer.uint32(18).string(message.topicName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTopicMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTopicMetadata();
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

          message.topicName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTopicMetadata {
    return {
      $type: UpdateTopicMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      topicName: isSet(object.topicName) ? globalThis.String(object.topicName) : "",
    };
  },

  toJSON(message: UpdateTopicMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.topicName !== "") {
      obj.topicName = message.topicName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateTopicMetadata>): UpdateTopicMetadata {
    return UpdateTopicMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateTopicMetadata>): UpdateTopicMetadata {
    const message = createBaseUpdateTopicMetadata();
    message.clusterId = object.clusterId ?? "";
    message.topicName = object.topicName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTopicMetadata.$type, UpdateTopicMetadata);

function createBaseDeleteTopicRequest(): DeleteTopicRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicRequest", clusterId: "", topicName: "" };
}

export const DeleteTopicRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicRequest" as const,

  encode(message: DeleteTopicRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.topicName !== "") {
      writer.uint32(18).string(message.topicName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTopicRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTopicRequest();
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

          message.topicName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTopicRequest {
    return {
      $type: DeleteTopicRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      topicName: isSet(object.topicName) ? globalThis.String(object.topicName) : "",
    };
  },

  toJSON(message: DeleteTopicRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.topicName !== "") {
      obj.topicName = message.topicName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteTopicRequest>): DeleteTopicRequest {
    return DeleteTopicRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteTopicRequest>): DeleteTopicRequest {
    const message = createBaseDeleteTopicRequest();
    message.clusterId = object.clusterId ?? "";
    message.topicName = object.topicName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTopicRequest.$type, DeleteTopicRequest);

function createBaseDeleteTopicMetadata(): DeleteTopicMetadata {
  return { $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata", clusterId: "", topicName: "" };
}

export const DeleteTopicMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata" as const,

  encode(message: DeleteTopicMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.topicName !== "") {
      writer.uint32(18).string(message.topicName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTopicMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTopicMetadata();
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

          message.topicName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTopicMetadata {
    return {
      $type: DeleteTopicMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      topicName: isSet(object.topicName) ? globalThis.String(object.topicName) : "",
    };
  },

  toJSON(message: DeleteTopicMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.topicName !== "") {
      obj.topicName = message.topicName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteTopicMetadata>): DeleteTopicMetadata {
    return DeleteTopicMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteTopicMetadata>): DeleteTopicMetadata {
    const message = createBaseDeleteTopicMetadata();
    message.clusterId = object.clusterId ?? "";
    message.topicName = object.topicName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTopicMetadata.$type, DeleteTopicMetadata);

/** A set of methods for managing Kafka topics. */
export type TopicServiceService = typeof TopicServiceService;
export const TopicServiceService = {
  /**
   * Returns the specified Kafka topic.
   *
   * To get the list of available Kafka topics, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTopicRequest) => Buffer.from(GetTopicRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTopicRequest.decode(value),
    responseSerialize: (value: Topic) => Buffer.from(Topic.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Topic.decode(value),
  },
  /** Retrieves the list of Kafka topics in the specified cluster. */
  list: {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTopicsRequest) => Buffer.from(ListTopicsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTopicsRequest.decode(value),
    responseSerialize: (value: ListTopicsResponse) => Buffer.from(ListTopicsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTopicsResponse.decode(value),
  },
  /** Creates a new Kafka topic in the specified cluster. */
  create: {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTopicRequest) => Buffer.from(CreateTopicRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTopicRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified Kafka topic. */
  update: {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTopicRequest) => Buffer.from(UpdateTopicRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTopicRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified Kafka topic. */
  delete: {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteTopicRequest) => Buffer.from(DeleteTopicRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteTopicRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface TopicServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Kafka topic.
   *
   * To get the list of available Kafka topics, make a [List] request.
   */
  get: handleUnaryCall<GetTopicRequest, Topic>;
  /** Retrieves the list of Kafka topics in the specified cluster. */
  list: handleUnaryCall<ListTopicsRequest, ListTopicsResponse>;
  /** Creates a new Kafka topic in the specified cluster. */
  create: handleUnaryCall<CreateTopicRequest, Operation>;
  /** Updates the specified Kafka topic. */
  update: handleUnaryCall<UpdateTopicRequest, Operation>;
  /** Deletes the specified Kafka topic. */
  delete: handleUnaryCall<DeleteTopicRequest, Operation>;
}

export interface TopicServiceClient extends Client {
  /**
   * Returns the specified Kafka topic.
   *
   * To get the list of available Kafka topics, make a [List] request.
   */
  get(request: GetTopicRequest, callback: (error: ServiceError | null, response: Topic) => void): ClientUnaryCall;
  get(
    request: GetTopicRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Topic) => void,
  ): ClientUnaryCall;
  get(
    request: GetTopicRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Topic) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Kafka topics in the specified cluster. */
  list(
    request: ListTopicsRequest,
    callback: (error: ServiceError | null, response: ListTopicsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTopicsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTopicsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTopicsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTopicsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a new Kafka topic in the specified cluster. */
  create(
    request: CreateTopicRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTopicRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTopicRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified Kafka topic. */
  update(
    request: UpdateTopicRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTopicRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTopicRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified Kafka topic. */
  delete(
    request: DeleteTopicRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTopicRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTopicRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const TopicServiceClient = makeGenericClientConstructor(
  TopicServiceService,
  "yandex.cloud.mdb.kafka.v1.TopicService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TopicServiceClient;
  service: typeof TopicServiceService;
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
