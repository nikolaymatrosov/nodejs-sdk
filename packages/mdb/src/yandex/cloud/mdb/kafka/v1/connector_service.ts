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
import { Connector, ConnectorSpec, UpdateConnectorSpec } from "./connector";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

export interface GetConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest";
  /**
   * ID of the Apache Kafka® cluster the connector belongs to.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the Apache Kafka® connector to return information about.
   *
   * To get this name, make a [ConnectorService.List] request.
   */
  connectorName: string;
}

export interface ListConnectorsRequest {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest";
  /**
   * ID of the Apache Kafka® cluster to list connectors in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the API returns a [ListConnectorsResponse.next_page_token] that can be used to get the next page of results in the subsequent [ConnectorService.List] requests.
   */
  pageSize: number;
  /**
   * Page token that can be used to iterate through multiple pages of results.
   *
   * To get the next page of results, set [page_token] to the [ListConnectorsResponse.next_page_token] returned by the previous [ConnectorService.List] request.
   */
  pageToken: string;
}

export interface ListConnectorsResponse {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse";
  /** List of Apache Kafka® Connectors. */
  connectors: Connector[];
  /**
   * The token that can be used to get the next page of results.
   *
   * If the number of results is larger than [ListConnectorsRequest.page_size], use the [next_page_token] as the value for the [ListConnectorsRequest.page_token] in the subsequent [ConnectorService.List] request to iterate through multiple pages of results.
   */
  nextPageToken: string;
}

export interface CreateConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest";
  /**
   * ID of the Apache Kafka® cluster to create the connector in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the connector to create. */
  connectorSpec?: ConnectorSpec | undefined;
}

export interface CreateConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata";
  /** ID of the Apache Kafka® cluster the connector is being created in. */
  clusterId: string;
  /** Name of the Apache Kafka® connector that is being created. */
  connectorName: string;
}

export interface UpdateConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest";
  /**
   * ID of the Apache Kafka® cluster to update the connector in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the connector to update.
   *
   * To get this name, make a [ConnectorService.List] request.
   */
  connectorName: string;
  /** Field mask that specifies which settings of the connector should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Configuration of the connector to update. */
  connectorSpec?: UpdateConnectorSpec | undefined;
}

export interface UpdateConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata";
  /** ID of the Apache Kafka® cluster the connector is being updated in. */
  clusterId: string;
  /** Name of the Apache Kafka® connector that is being updated. */
  connectorName: string;
}

export interface DeleteConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest";
  /**
   * ID of the Apache Kafka® cluster to delete the connector from.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the connector to delete.
   *
   * To get this name, make a [ConnectorService.List] request.
   */
  connectorName: string;
}

export interface DeleteConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata";
  /** ID of the Apache Kafka® cluster the connector is being deleted from. */
  clusterId: string;
  /** Name of the Apache Kafka® connector that is being deleted. */
  connectorName: string;
}

export interface ResumeConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest";
  /**
   * ID of the Apache Kafka® cluster to resume the connector in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the Apache Kafka® connector to resume.
   *
   * To get this name, make a [ConnectorService.List] request.
   */
  connectorName: string;
}

export interface ResumeConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata";
  /** ID of the Apache Kafka® cluster the connector is being resumed in. */
  clusterId: string;
  /** Name of the Apache Kafka® connector that is beign resumed. */
  connectorName: string;
}

export interface PauseConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest";
  /**
   * ID of the Apache Kafka® cluster to pause the connector in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the Apache Kafka® connector to pause.
   *
   * To get this name, make a [ConnectorService.List] request.
   */
  connectorName: string;
}

export interface PauseConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata";
  /** ID of the Apache Kafka® cluster the connector is being paused in. */
  clusterId: string;
  /** Name of the Apache Kafka® connector that is being paused. */
  connectorName: string;
}

function createBaseGetConnectorRequest(): GetConnectorRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest", clusterId: "", connectorName: "" };
}

export const GetConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest" as const,

  encode(message: GetConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConnectorRequest();
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

          message.connectorName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetConnectorRequest {
    return {
      $type: GetConnectorRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
    };
  },

  toJSON(message: GetConnectorRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    return obj;
  },

  create(base?: DeepPartial<GetConnectorRequest>): GetConnectorRequest {
    return GetConnectorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetConnectorRequest>): GetConnectorRequest {
    const message = createBaseGetConnectorRequest();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetConnectorRequest.$type, GetConnectorRequest);

function createBaseListConnectorsRequest(): ListConnectorsRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListConnectorsRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest" as const,

  encode(message: ListConnectorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectorsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConnectorsRequest();
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

  fromJSON(object: any): ListConnectorsRequest {
    return {
      $type: ListConnectorsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListConnectorsRequest): unknown {
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

  create(base?: DeepPartial<ListConnectorsRequest>): ListConnectorsRequest {
    return ListConnectorsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListConnectorsRequest>): ListConnectorsRequest {
    const message = createBaseListConnectorsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListConnectorsRequest.$type, ListConnectorsRequest);

function createBaseListConnectorsResponse(): ListConnectorsResponse {
  return { $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse", connectors: [], nextPageToken: "" };
}

export const ListConnectorsResponse = {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse" as const,

  encode(message: ListConnectorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connectors) {
      Connector.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConnectorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectors.push(Connector.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListConnectorsResponse {
    return {
      $type: ListConnectorsResponse.$type,
      connectors: globalThis.Array.isArray(object?.connectors)
        ? object.connectors.map((e: any) => Connector.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListConnectorsResponse): unknown {
    const obj: any = {};
    if (message.connectors?.length) {
      obj.connectors = message.connectors.map((e) => Connector.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListConnectorsResponse>): ListConnectorsResponse {
    return ListConnectorsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListConnectorsResponse>): ListConnectorsResponse {
    const message = createBaseListConnectorsResponse();
    message.connectors = object.connectors?.map((e) => Connector.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListConnectorsResponse.$type, ListConnectorsResponse);

function createBaseCreateConnectorRequest(): CreateConnectorRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest", clusterId: "", connectorSpec: undefined };
}

export const CreateConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest" as const,

  encode(message: CreateConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorSpec !== undefined) {
      ConnectorSpec.encode(message.connectorSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConnectorRequest();
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

          message.connectorSpec = ConnectorSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateConnectorRequest {
    return {
      $type: CreateConnectorRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorSpec: isSet(object.connectorSpec) ? ConnectorSpec.fromJSON(object.connectorSpec) : undefined,
    };
  },

  toJSON(message: CreateConnectorRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorSpec !== undefined) {
      obj.connectorSpec = ConnectorSpec.toJSON(message.connectorSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateConnectorRequest>): CreateConnectorRequest {
    return CreateConnectorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateConnectorRequest>): CreateConnectorRequest {
    const message = createBaseCreateConnectorRequest();
    message.clusterId = object.clusterId ?? "";
    message.connectorSpec = (object.connectorSpec !== undefined && object.connectorSpec !== null)
      ? ConnectorSpec.fromPartial(object.connectorSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateConnectorRequest.$type, CreateConnectorRequest);

function createBaseCreateConnectorMetadata(): CreateConnectorMetadata {
  return { $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata", clusterId: "", connectorName: "" };
}

export const CreateConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata" as const,

  encode(message: CreateConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConnectorMetadata();
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

          message.connectorName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateConnectorMetadata {
    return {
      $type: CreateConnectorMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
    };
  },

  toJSON(message: CreateConnectorMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateConnectorMetadata>): CreateConnectorMetadata {
    return CreateConnectorMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateConnectorMetadata>): CreateConnectorMetadata {
    const message = createBaseCreateConnectorMetadata();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateConnectorMetadata.$type, CreateConnectorMetadata);

function createBaseUpdateConnectorRequest(): UpdateConnectorRequest {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest",
    clusterId: "",
    connectorName: "",
    updateMask: undefined,
    connectorSpec: undefined,
  };
}

export const UpdateConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest" as const,

  encode(message: UpdateConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.connectorSpec !== undefined) {
      UpdateConnectorSpec.encode(message.connectorSpec, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConnectorRequest();
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

          message.connectorName = reader.string();
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

          message.connectorSpec = UpdateConnectorSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateConnectorRequest {
    return {
      $type: UpdateConnectorRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      connectorSpec: isSet(object.connectorSpec) ? UpdateConnectorSpec.fromJSON(object.connectorSpec) : undefined,
    };
  },

  toJSON(message: UpdateConnectorRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.connectorSpec !== undefined) {
      obj.connectorSpec = UpdateConnectorSpec.toJSON(message.connectorSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateConnectorRequest>): UpdateConnectorRequest {
    return UpdateConnectorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateConnectorRequest>): UpdateConnectorRequest {
    const message = createBaseUpdateConnectorRequest();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.connectorSpec = (object.connectorSpec !== undefined && object.connectorSpec !== null)
      ? UpdateConnectorSpec.fromPartial(object.connectorSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateConnectorRequest.$type, UpdateConnectorRequest);

function createBaseUpdateConnectorMetadata(): UpdateConnectorMetadata {
  return { $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata", clusterId: "", connectorName: "" };
}

export const UpdateConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata" as const,

  encode(message: UpdateConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConnectorMetadata();
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

          message.connectorName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateConnectorMetadata {
    return {
      $type: UpdateConnectorMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
    };
  },

  toJSON(message: UpdateConnectorMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateConnectorMetadata>): UpdateConnectorMetadata {
    return UpdateConnectorMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateConnectorMetadata>): UpdateConnectorMetadata {
    const message = createBaseUpdateConnectorMetadata();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateConnectorMetadata.$type, UpdateConnectorMetadata);

function createBaseDeleteConnectorRequest(): DeleteConnectorRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest", clusterId: "", connectorName: "" };
}

export const DeleteConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest" as const,

  encode(message: DeleteConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteConnectorRequest();
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

          message.connectorName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteConnectorRequest {
    return {
      $type: DeleteConnectorRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
    };
  },

  toJSON(message: DeleteConnectorRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteConnectorRequest>): DeleteConnectorRequest {
    return DeleteConnectorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteConnectorRequest>): DeleteConnectorRequest {
    const message = createBaseDeleteConnectorRequest();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteConnectorRequest.$type, DeleteConnectorRequest);

function createBaseDeleteConnectorMetadata(): DeleteConnectorMetadata {
  return { $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata", clusterId: "", connectorName: "" };
}

export const DeleteConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata" as const,

  encode(message: DeleteConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteConnectorMetadata();
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

          message.connectorName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteConnectorMetadata {
    return {
      $type: DeleteConnectorMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
    };
  },

  toJSON(message: DeleteConnectorMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteConnectorMetadata>): DeleteConnectorMetadata {
    return DeleteConnectorMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteConnectorMetadata>): DeleteConnectorMetadata {
    const message = createBaseDeleteConnectorMetadata();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteConnectorMetadata.$type, DeleteConnectorMetadata);

function createBaseResumeConnectorRequest(): ResumeConnectorRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest", clusterId: "", connectorName: "" };
}

export const ResumeConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest" as const,

  encode(message: ResumeConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeConnectorRequest();
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

          message.connectorName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResumeConnectorRequest {
    return {
      $type: ResumeConnectorRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
    };
  },

  toJSON(message: ResumeConnectorRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    return obj;
  },

  create(base?: DeepPartial<ResumeConnectorRequest>): ResumeConnectorRequest {
    return ResumeConnectorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResumeConnectorRequest>): ResumeConnectorRequest {
    const message = createBaseResumeConnectorRequest();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeConnectorRequest.$type, ResumeConnectorRequest);

function createBaseResumeConnectorMetadata(): ResumeConnectorMetadata {
  return { $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata", clusterId: "", connectorName: "" };
}

export const ResumeConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata" as const,

  encode(message: ResumeConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeConnectorMetadata();
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

          message.connectorName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResumeConnectorMetadata {
    return {
      $type: ResumeConnectorMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
    };
  },

  toJSON(message: ResumeConnectorMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    return obj;
  },

  create(base?: DeepPartial<ResumeConnectorMetadata>): ResumeConnectorMetadata {
    return ResumeConnectorMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResumeConnectorMetadata>): ResumeConnectorMetadata {
    const message = createBaseResumeConnectorMetadata();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeConnectorMetadata.$type, ResumeConnectorMetadata);

function createBasePauseConnectorRequest(): PauseConnectorRequest {
  return { $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest", clusterId: "", connectorName: "" };
}

export const PauseConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest" as const,

  encode(message: PauseConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePauseConnectorRequest();
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

          message.connectorName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PauseConnectorRequest {
    return {
      $type: PauseConnectorRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
    };
  },

  toJSON(message: PauseConnectorRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    return obj;
  },

  create(base?: DeepPartial<PauseConnectorRequest>): PauseConnectorRequest {
    return PauseConnectorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PauseConnectorRequest>): PauseConnectorRequest {
    const message = createBasePauseConnectorRequest();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseConnectorRequest.$type, PauseConnectorRequest);

function createBasePauseConnectorMetadata(): PauseConnectorMetadata {
  return { $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata", clusterId: "", connectorName: "" };
}

export const PauseConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata" as const,

  encode(message: PauseConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePauseConnectorMetadata();
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

          message.connectorName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PauseConnectorMetadata {
    return {
      $type: PauseConnectorMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorName: isSet(object.connectorName) ? globalThis.String(object.connectorName) : "",
    };
  },

  toJSON(message: PauseConnectorMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorName !== "") {
      obj.connectorName = message.connectorName;
    }
    return obj;
  },

  create(base?: DeepPartial<PauseConnectorMetadata>): PauseConnectorMetadata {
    return PauseConnectorMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PauseConnectorMetadata>): PauseConnectorMetadata {
    const message = createBasePauseConnectorMetadata();
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseConnectorMetadata.$type, PauseConnectorMetadata);

/** A set of methods for managing Apache Kafka® connectors. */
export type ConnectorServiceService = typeof ConnectorServiceService;
export const ConnectorServiceService = {
  /** Returns information about an Apache Kafka® connector. */
  get: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetConnectorRequest) => Buffer.from(GetConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetConnectorRequest.decode(value),
    responseSerialize: (value: Connector) => Buffer.from(Connector.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Connector.decode(value),
  },
  /** Retrieves the list of Apache Kafka® connectors in a cluster. */
  list: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListConnectorsRequest) => Buffer.from(ListConnectorsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListConnectorsRequest.decode(value),
    responseSerialize: (value: ListConnectorsResponse) => Buffer.from(ListConnectorsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListConnectorsResponse.decode(value),
  },
  /** Creates a new Apache Kafka® connector in a cluster. */
  create: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateConnectorRequest) => Buffer.from(CreateConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateConnectorRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates an Apache Kafka® connector. */
  update: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateConnectorRequest) => Buffer.from(UpdateConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateConnectorRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes an Apache Kafka® connector. */
  delete: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteConnectorRequest) => Buffer.from(DeleteConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteConnectorRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Resumes an Apache Kafka® connector. */
  resume: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ResumeConnectorRequest) => Buffer.from(ResumeConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ResumeConnectorRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Pauses an Apache Kafka® connector. */
  pause: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PauseConnectorRequest) => Buffer.from(PauseConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PauseConnectorRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ConnectorServiceServer extends UntypedServiceImplementation {
  /** Returns information about an Apache Kafka® connector. */
  get: handleUnaryCall<GetConnectorRequest, Connector>;
  /** Retrieves the list of Apache Kafka® connectors in a cluster. */
  list: handleUnaryCall<ListConnectorsRequest, ListConnectorsResponse>;
  /** Creates a new Apache Kafka® connector in a cluster. */
  create: handleUnaryCall<CreateConnectorRequest, Operation>;
  /** Updates an Apache Kafka® connector. */
  update: handleUnaryCall<UpdateConnectorRequest, Operation>;
  /** Deletes an Apache Kafka® connector. */
  delete: handleUnaryCall<DeleteConnectorRequest, Operation>;
  /** Resumes an Apache Kafka® connector. */
  resume: handleUnaryCall<ResumeConnectorRequest, Operation>;
  /** Pauses an Apache Kafka® connector. */
  pause: handleUnaryCall<PauseConnectorRequest, Operation>;
}

export interface ConnectorServiceClient extends Client {
  /** Returns information about an Apache Kafka® connector. */
  get(
    request: GetConnectorRequest,
    callback: (error: ServiceError | null, response: Connector) => void,
  ): ClientUnaryCall;
  get(
    request: GetConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Connector) => void,
  ): ClientUnaryCall;
  get(
    request: GetConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Connector) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Apache Kafka® connectors in a cluster. */
  list(
    request: ListConnectorsRequest,
    callback: (error: ServiceError | null, response: ListConnectorsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListConnectorsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListConnectorsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListConnectorsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListConnectorsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a new Apache Kafka® connector in a cluster. */
  create(
    request: CreateConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates an Apache Kafka® connector. */
  update(
    request: UpdateConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes an Apache Kafka® connector. */
  delete(
    request: DeleteConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Resumes an Apache Kafka® connector. */
  resume(
    request: ResumeConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  resume(
    request: ResumeConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  resume(
    request: ResumeConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Pauses an Apache Kafka® connector. */
  pause(
    request: PauseConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  pause(
    request: PauseConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  pause(
    request: PauseConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ConnectorServiceClient = makeGenericClientConstructor(
  ConnectorServiceService,
  "yandex.cloud.mdb.kafka.v1.ConnectorService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ConnectorServiceClient;
  service: typeof ConnectorServiceService;
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
