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
import { Struct } from "@yandex-cloud/core/dist/generated/google/protobuf/struct";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datasphere.v1";

export interface NodeExecutionRequest {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest";
  /** ID of the folder that will be matched with Node ACL. */
  folderId: string;
  /** ID of the Node to perform request on. */
  nodeId: string;
  /** Input data for the execution. */
  input?: { [key: string]: any } | undefined;
}

export interface NodeExecutionResponse {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse";
  /** Result of the execution. */
  output?: { [key: string]: any } | undefined;
}

export interface AliasExecutionRequest {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionRequest";
  /** ID of the folder that will be matched with Alias ACL */
  folderId: string;
  /** Name of the Alias to perform request on */
  aliasName: string;
  /** Input data for the execution */
  input?: { [key: string]: any } | undefined;
}

export interface AliasExecutionResponse {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionResponse";
  /** Result of the execution */
  output?: { [key: string]: any } | undefined;
}

function createBaseNodeExecutionRequest(): NodeExecutionRequest {
  return { $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest", folderId: "", nodeId: "", input: undefined };
}

export const NodeExecutionRequest = {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest" as const,

  encode(message: NodeExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.input !== undefined) {
      Struct.encode(Struct.wrap(message.input), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeExecutionRequest();
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

          message.nodeId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.input = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeExecutionRequest {
    return {
      $type: NodeExecutionRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      nodeId: isSet(object.nodeId) ? globalThis.String(object.nodeId) : "",
      input: isObject(object.input) ? object.input : undefined,
    };
  },

  toJSON(message: NodeExecutionRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.nodeId !== "") {
      obj.nodeId = message.nodeId;
    }
    if (message.input !== undefined) {
      obj.input = message.input;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeExecutionRequest>, I>>(base?: I): NodeExecutionRequest {
    return NodeExecutionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeExecutionRequest>, I>>(object: I): NodeExecutionRequest {
    const message = createBaseNodeExecutionRequest();
    message.folderId = object.folderId ?? "";
    message.nodeId = object.nodeId ?? "";
    message.input = object.input ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(NodeExecutionRequest.$type, NodeExecutionRequest);

function createBaseNodeExecutionResponse(): NodeExecutionResponse {
  return { $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse", output: undefined };
}

export const NodeExecutionResponse = {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse" as const,

  encode(message: NodeExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.output !== undefined) {
      Struct.encode(Struct.wrap(message.output), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeExecutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.output = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeExecutionResponse {
    return { $type: NodeExecutionResponse.$type, output: isObject(object.output) ? object.output : undefined };
  },

  toJSON(message: NodeExecutionResponse): unknown {
    const obj: any = {};
    if (message.output !== undefined) {
      obj.output = message.output;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeExecutionResponse>, I>>(base?: I): NodeExecutionResponse {
    return NodeExecutionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeExecutionResponse>, I>>(object: I): NodeExecutionResponse {
    const message = createBaseNodeExecutionResponse();
    message.output = object.output ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(NodeExecutionResponse.$type, NodeExecutionResponse);

function createBaseAliasExecutionRequest(): AliasExecutionRequest {
  return { $type: "yandex.cloud.datasphere.v1.AliasExecutionRequest", folderId: "", aliasName: "", input: undefined };
}

export const AliasExecutionRequest = {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionRequest" as const,

  encode(message: AliasExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.aliasName !== "") {
      writer.uint32(18).string(message.aliasName);
    }
    if (message.input !== undefined) {
      Struct.encode(Struct.wrap(message.input), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AliasExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAliasExecutionRequest();
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

          message.aliasName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.input = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AliasExecutionRequest {
    return {
      $type: AliasExecutionRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      aliasName: isSet(object.aliasName) ? globalThis.String(object.aliasName) : "",
      input: isObject(object.input) ? object.input : undefined,
    };
  },

  toJSON(message: AliasExecutionRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.aliasName !== "") {
      obj.aliasName = message.aliasName;
    }
    if (message.input !== undefined) {
      obj.input = message.input;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AliasExecutionRequest>, I>>(base?: I): AliasExecutionRequest {
    return AliasExecutionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AliasExecutionRequest>, I>>(object: I): AliasExecutionRequest {
    const message = createBaseAliasExecutionRequest();
    message.folderId = object.folderId ?? "";
    message.aliasName = object.aliasName ?? "";
    message.input = object.input ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AliasExecutionRequest.$type, AliasExecutionRequest);

function createBaseAliasExecutionResponse(): AliasExecutionResponse {
  return { $type: "yandex.cloud.datasphere.v1.AliasExecutionResponse", output: undefined };
}

export const AliasExecutionResponse = {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionResponse" as const,

  encode(message: AliasExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.output !== undefined) {
      Struct.encode(Struct.wrap(message.output), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AliasExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAliasExecutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.output = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AliasExecutionResponse {
    return { $type: AliasExecutionResponse.$type, output: isObject(object.output) ? object.output : undefined };
  },

  toJSON(message: AliasExecutionResponse): unknown {
    const obj: any = {};
    if (message.output !== undefined) {
      obj.output = message.output;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AliasExecutionResponse>, I>>(base?: I): AliasExecutionResponse {
    return AliasExecutionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AliasExecutionResponse>, I>>(object: I): AliasExecutionResponse {
    const message = createBaseAliasExecutionResponse();
    message.output = object.output ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AliasExecutionResponse.$type, AliasExecutionResponse);

/** A set of methods for managing Node resources. */
export type NodeServiceService = typeof NodeServiceService;
export const NodeServiceService = {
  /** Executes deployed Node. */
  execute: {
    path: "/yandex.cloud.datasphere.v1.NodeService/Execute",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: NodeExecutionRequest) => Buffer.from(NodeExecutionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => NodeExecutionRequest.decode(value),
    responseSerialize: (value: NodeExecutionResponse) => Buffer.from(NodeExecutionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => NodeExecutionResponse.decode(value),
  },
  /** Executes NodeAlias requests. */
  executeAlias: {
    path: "/yandex.cloud.datasphere.v1.NodeService/ExecuteAlias",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AliasExecutionRequest) => Buffer.from(AliasExecutionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AliasExecutionRequest.decode(value),
    responseSerialize: (value: AliasExecutionResponse) => Buffer.from(AliasExecutionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AliasExecutionResponse.decode(value),
  },
} as const;

export interface NodeServiceServer extends UntypedServiceImplementation {
  /** Executes deployed Node. */
  execute: handleUnaryCall<NodeExecutionRequest, NodeExecutionResponse>;
  /** Executes NodeAlias requests. */
  executeAlias: handleUnaryCall<AliasExecutionRequest, AliasExecutionResponse>;
}

export interface NodeServiceClient extends Client {
  /** Executes deployed Node. */
  execute(
    request: NodeExecutionRequest,
    callback: (error: ServiceError | null, response: NodeExecutionResponse) => void,
  ): ClientUnaryCall;
  execute(
    request: NodeExecutionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: NodeExecutionResponse) => void,
  ): ClientUnaryCall;
  execute(
    request: NodeExecutionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: NodeExecutionResponse) => void,
  ): ClientUnaryCall;
  /** Executes NodeAlias requests. */
  executeAlias(
    request: AliasExecutionRequest,
    callback: (error: ServiceError | null, response: AliasExecutionResponse) => void,
  ): ClientUnaryCall;
  executeAlias(
    request: AliasExecutionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AliasExecutionResponse) => void,
  ): ClientUnaryCall;
  executeAlias(
    request: AliasExecutionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AliasExecutionResponse) => void,
  ): ClientUnaryCall;
}

export const NodeServiceClient = makeGenericClientConstructor(
  NodeServiceService,
  "yandex.cloud.datasphere.v1.NodeService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): NodeServiceClient;
  service: typeof NodeServiceService;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
