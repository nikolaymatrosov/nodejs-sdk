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
import { Agent } from "./agent/agent";
import { CreateComputeInstance } from "./agent/create_compute_instance";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1";

export interface CreateAgentRequest {
  $type: "yandex.cloud.loadtesting.api.v1.CreateAgentRequest";
  /** ID of the folder to create an agent in. */
  folderId: string;
  /**
   * Name of the agent.
   *
   * A created compute instance will have the same name.
   */
  name: string;
  /**
   * Description of the agent.
   *
   * A created compute instance will have the same description.
   */
  description: string;
  /** Parameters for compute instance to be created. */
  computeInstanceParams?:
    | CreateComputeInstance
    | undefined;
  /**
   * Version of the agent.
   *
   * If not provided, the most recent agent version will be used.
   */
  agentVersion: string;
}

export interface CreateAgentMetadata {
  $type: "yandex.cloud.loadtesting.api.v1.CreateAgentMetadata";
  /** ID of the agent that is being created. */
  agentId: string;
}

export interface GetAgentRequest {
  $type: "yandex.cloud.loadtesting.api.v1.GetAgentRequest";
  /** ID of the agent to return. */
  agentId: string;
}

export interface DeleteAgentRequest {
  $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentRequest";
  /** ID of the agent to delete. */
  agentId: string;
}

export interface DeleteAgentMetadata {
  $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata";
  /** ID of the agent that is being deleted. */
  agentId: string;
}

export interface ListAgentsRequest {
  $type: "yandex.cloud.loadtesting.api.v1.ListAgentsRequest";
  /** ID of the folder to list agents in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListAgentsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListAgentsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters agents listed in the response.
   *
   * The filter expression may contain multiple field expressions joined by `AND`.
   * The field expression must specify:
   * 1. The field name.
   * 2. An operator:
   *    - `=`, `!=`, `CONTAINS`, for single values.
   *    - `IN` or `NOT IN` for lists of values.
   * 3. The value. String values must be encosed in `"`, boolean values are {`true`, `false`}, timestamp values in ISO-8601.
   *
   * Currently supported fields:
   * - `id` [yandex.cloud.loadtesting.api.v1.agent.Agent.id]
   *   - operators: `=`, `!=`, `IN`, `NOT IN`
   * - `name` [yandex.cloud.loadtesting.api.v1.agent.Agent.name]
   *   - operators: `=`, `!=`, `IN`, `NOT IN`, `CONTAINS`
   *
   * Examples:
   * - `id IN ("1", "2", "3")`
   * - `name CONTAINS "compute-agent-large" AND id NOT IN ("4", "5")`
   */
  filter: string;
}

export interface ListAgentsResponse {
  $type: "yandex.cloud.loadtesting.api.v1.ListAgentsResponse";
  /** List of agents in the specified folder. */
  agents: Agent[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListAgentsRequest.page_size], use `next_page_token` as the value
   * for the [ListAgentsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseCreateAgentRequest(): CreateAgentRequest {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.CreateAgentRequest",
    folderId: "",
    name: "",
    description: "",
    computeInstanceParams: undefined,
    agentVersion: "",
  };
}

export const CreateAgentRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.CreateAgentRequest" as const,

  encode(message: CreateAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.computeInstanceParams !== undefined) {
      CreateComputeInstance.encode(message.computeInstanceParams, writer.uint32(34).fork()).ldelim();
    }
    if (message.agentVersion !== "") {
      writer.uint32(42).string(message.agentVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAgentRequest();
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

          message.computeInstanceParams = CreateComputeInstance.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.agentVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAgentRequest {
    return {
      $type: CreateAgentRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      computeInstanceParams: isSet(object.computeInstanceParams)
        ? CreateComputeInstance.fromJSON(object.computeInstanceParams)
        : undefined,
      agentVersion: isSet(object.agentVersion) ? globalThis.String(object.agentVersion) : "",
    };
  },

  toJSON(message: CreateAgentRequest): unknown {
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
    if (message.computeInstanceParams !== undefined) {
      obj.computeInstanceParams = CreateComputeInstance.toJSON(message.computeInstanceParams);
    }
    if (message.agentVersion !== "") {
      obj.agentVersion = message.agentVersion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAgentRequest>, I>>(base?: I): CreateAgentRequest {
    return CreateAgentRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAgentRequest>, I>>(object: I): CreateAgentRequest {
    const message = createBaseCreateAgentRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.computeInstanceParams =
      (object.computeInstanceParams !== undefined && object.computeInstanceParams !== null)
        ? CreateComputeInstance.fromPartial(object.computeInstanceParams)
        : undefined;
    message.agentVersion = object.agentVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateAgentRequest.$type, CreateAgentRequest);

function createBaseCreateAgentMetadata(): CreateAgentMetadata {
  return { $type: "yandex.cloud.loadtesting.api.v1.CreateAgentMetadata", agentId: "" };
}

export const CreateAgentMetadata = {
  $type: "yandex.cloud.loadtesting.api.v1.CreateAgentMetadata" as const,

  encode(message: CreateAgentMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentId !== "") {
      writer.uint32(10).string(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAgentMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.agentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAgentMetadata {
    return {
      $type: CreateAgentMetadata.$type,
      agentId: isSet(object.agentId) ? globalThis.String(object.agentId) : "",
    };
  },

  toJSON(message: CreateAgentMetadata): unknown {
    const obj: any = {};
    if (message.agentId !== "") {
      obj.agentId = message.agentId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAgentMetadata>, I>>(base?: I): CreateAgentMetadata {
    return CreateAgentMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAgentMetadata>, I>>(object: I): CreateAgentMetadata {
    const message = createBaseCreateAgentMetadata();
    message.agentId = object.agentId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateAgentMetadata.$type, CreateAgentMetadata);

function createBaseGetAgentRequest(): GetAgentRequest {
  return { $type: "yandex.cloud.loadtesting.api.v1.GetAgentRequest", agentId: "" };
}

export const GetAgentRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.GetAgentRequest" as const,

  encode(message: GetAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentId !== "") {
      writer.uint32(18).string(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.agentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAgentRequest {
    return { $type: GetAgentRequest.$type, agentId: isSet(object.agentId) ? globalThis.String(object.agentId) : "" };
  },

  toJSON(message: GetAgentRequest): unknown {
    const obj: any = {};
    if (message.agentId !== "") {
      obj.agentId = message.agentId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAgentRequest>, I>>(base?: I): GetAgentRequest {
    return GetAgentRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAgentRequest>, I>>(object: I): GetAgentRequest {
    const message = createBaseGetAgentRequest();
    message.agentId = object.agentId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetAgentRequest.$type, GetAgentRequest);

function createBaseDeleteAgentRequest(): DeleteAgentRequest {
  return { $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentRequest", agentId: "" };
}

export const DeleteAgentRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentRequest" as const,

  encode(message: DeleteAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentId !== "") {
      writer.uint32(10).string(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.agentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAgentRequest {
    return { $type: DeleteAgentRequest.$type, agentId: isSet(object.agentId) ? globalThis.String(object.agentId) : "" };
  },

  toJSON(message: DeleteAgentRequest): unknown {
    const obj: any = {};
    if (message.agentId !== "") {
      obj.agentId = message.agentId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAgentRequest>, I>>(base?: I): DeleteAgentRequest {
    return DeleteAgentRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAgentRequest>, I>>(object: I): DeleteAgentRequest {
    const message = createBaseDeleteAgentRequest();
    message.agentId = object.agentId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteAgentRequest.$type, DeleteAgentRequest);

function createBaseDeleteAgentMetadata(): DeleteAgentMetadata {
  return { $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata", agentId: "" };
}

export const DeleteAgentMetadata = {
  $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata" as const,

  encode(message: DeleteAgentMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentId !== "") {
      writer.uint32(10).string(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAgentMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.agentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAgentMetadata {
    return {
      $type: DeleteAgentMetadata.$type,
      agentId: isSet(object.agentId) ? globalThis.String(object.agentId) : "",
    };
  },

  toJSON(message: DeleteAgentMetadata): unknown {
    const obj: any = {};
    if (message.agentId !== "") {
      obj.agentId = message.agentId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAgentMetadata>, I>>(base?: I): DeleteAgentMetadata {
    return DeleteAgentMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAgentMetadata>, I>>(object: I): DeleteAgentMetadata {
    const message = createBaseDeleteAgentMetadata();
    message.agentId = object.agentId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteAgentMetadata.$type, DeleteAgentMetadata);

function createBaseListAgentsRequest(): ListAgentsRequest {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.ListAgentsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListAgentsRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.ListAgentsRequest" as const,

  encode(message: ListAgentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAgentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAgentsRequest();
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

  fromJSON(object: any): ListAgentsRequest {
    return {
      $type: ListAgentsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListAgentsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListAgentsRequest>, I>>(base?: I): ListAgentsRequest {
    return ListAgentsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAgentsRequest>, I>>(object: I): ListAgentsRequest {
    const message = createBaseListAgentsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAgentsRequest.$type, ListAgentsRequest);

function createBaseListAgentsResponse(): ListAgentsResponse {
  return { $type: "yandex.cloud.loadtesting.api.v1.ListAgentsResponse", agents: [], nextPageToken: "" };
}

export const ListAgentsResponse = {
  $type: "yandex.cloud.loadtesting.api.v1.ListAgentsResponse" as const,

  encode(message: ListAgentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.agents) {
      Agent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAgentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAgentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.agents.push(Agent.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListAgentsResponse {
    return {
      $type: ListAgentsResponse.$type,
      agents: globalThis.Array.isArray(object?.agents) ? object.agents.map((e: any) => Agent.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListAgentsResponse): unknown {
    const obj: any = {};
    if (message.agents?.length) {
      obj.agents = message.agents.map((e) => Agent.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAgentsResponse>, I>>(base?: I): ListAgentsResponse {
    return ListAgentsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAgentsResponse>, I>>(object: I): ListAgentsResponse {
    const message = createBaseListAgentsResponse();
    message.agents = object.agents?.map((e) => Agent.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAgentsResponse.$type, ListAgentsResponse);

/** A set of methods for managing Load Testing agents. */
export type AgentServiceService = typeof AgentServiceService;
export const AgentServiceService = {
  /**
   * Creates an agent in the specified folder.
   *
   * Also creates a corresponding compute instance.
   */
  create: {
    path: "/yandex.cloud.loadtesting.api.v1.AgentService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateAgentRequest) => Buffer.from(CreateAgentRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateAgentRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified agent.
   *
   * To get the list of all available agents, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.loadtesting.api.v1.AgentService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAgentRequest) => Buffer.from(GetAgentRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAgentRequest.decode(value),
    responseSerialize: (value: Agent) => Buffer.from(Agent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Agent.decode(value),
  },
  /** Retrieves the list of agents in the specified folder. */
  list: {
    path: "/yandex.cloud.loadtesting.api.v1.AgentService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAgentsRequest) => Buffer.from(ListAgentsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAgentsRequest.decode(value),
    responseSerialize: (value: ListAgentsResponse) => Buffer.from(ListAgentsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAgentsResponse.decode(value),
  },
  /**
   * Deletes the specified agent.
   *
   * Also deletes a corresponding compute instance.
   */
  delete: {
    path: "/yandex.cloud.loadtesting.api.v1.AgentService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAgentRequest) => Buffer.from(DeleteAgentRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteAgentRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface AgentServiceServer extends UntypedServiceImplementation {
  /**
   * Creates an agent in the specified folder.
   *
   * Also creates a corresponding compute instance.
   */
  create: handleUnaryCall<CreateAgentRequest, Operation>;
  /**
   * Returns the specified agent.
   *
   * To get the list of all available agents, make a [List] request.
   */
  get: handleUnaryCall<GetAgentRequest, Agent>;
  /** Retrieves the list of agents in the specified folder. */
  list: handleUnaryCall<ListAgentsRequest, ListAgentsResponse>;
  /**
   * Deletes the specified agent.
   *
   * Also deletes a corresponding compute instance.
   */
  delete: handleUnaryCall<DeleteAgentRequest, Operation>;
}

export interface AgentServiceClient extends Client {
  /**
   * Creates an agent in the specified folder.
   *
   * Also creates a corresponding compute instance.
   */
  create(
    request: CreateAgentRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAgentRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAgentRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified agent.
   *
   * To get the list of all available agents, make a [List] request.
   */
  get(request: GetAgentRequest, callback: (error: ServiceError | null, response: Agent) => void): ClientUnaryCall;
  get(
    request: GetAgentRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Agent) => void,
  ): ClientUnaryCall;
  get(
    request: GetAgentRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Agent) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of agents in the specified folder. */
  list(
    request: ListAgentsRequest,
    callback: (error: ServiceError | null, response: ListAgentsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListAgentsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAgentsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListAgentsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAgentsResponse) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified agent.
   *
   * Also deletes a corresponding compute instance.
   */
  delete(
    request: DeleteAgentRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteAgentRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteAgentRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const AgentServiceClient = makeGenericClientConstructor(
  AgentServiceService,
  "yandex.cloud.loadtesting.api.v1.AgentService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AgentServiceClient;
  service: typeof AgentServiceService;
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
