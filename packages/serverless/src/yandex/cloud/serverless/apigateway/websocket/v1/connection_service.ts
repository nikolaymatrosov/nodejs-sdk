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
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import { Connection } from "./connection";

export const protobufPackage = "yandex.cloud.serverless.apigateway.websocket.v1";

export interface GetConnectionRequest {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest";
  /** ID of the connection to get. */
  connectionId: string;
}

export interface SendToConnectionRequest {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest";
  /** ID of the connection to which send. */
  connectionId: string;
  /** Data to send. */
  data: Buffer;
  /** Type of the sending data. */
  type: SendToConnectionRequest_DataType;
}

export enum SendToConnectionRequest_DataType {
  DATA_TYPE_UNSPECIFIED = 0,
  /** BINARY - Binary data. */
  BINARY = 1,
  /** TEXT - Text data. */
  TEXT = 2,
  UNRECOGNIZED = -1,
}

export function sendToConnectionRequest_DataTypeFromJSON(object: any): SendToConnectionRequest_DataType {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNSPECIFIED":
      return SendToConnectionRequest_DataType.DATA_TYPE_UNSPECIFIED;
    case 1:
    case "BINARY":
      return SendToConnectionRequest_DataType.BINARY;
    case 2:
    case "TEXT":
      return SendToConnectionRequest_DataType.TEXT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SendToConnectionRequest_DataType.UNRECOGNIZED;
  }
}

export function sendToConnectionRequest_DataTypeToJSON(object: SendToConnectionRequest_DataType): string {
  switch (object) {
    case SendToConnectionRequest_DataType.DATA_TYPE_UNSPECIFIED:
      return "DATA_TYPE_UNSPECIFIED";
    case SendToConnectionRequest_DataType.BINARY:
      return "BINARY";
    case SendToConnectionRequest_DataType.TEXT:
      return "TEXT";
    case SendToConnectionRequest_DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SendToConnectionResponse {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse";
}

export interface DisconnectRequest {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest";
  /** ID of the connection to disconnect. */
  connectionId: string;
}

export interface DisconnectResponse {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse";
}

function createBaseGetConnectionRequest(): GetConnectionRequest {
  return { $type: "yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest", connectionId: "" };
}

export const GetConnectionRequest = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest" as const,

  encode(message: GetConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetConnectionRequest {
    return {
      $type: GetConnectionRequest.$type,
      connectionId: isSet(object.connectionId) ? globalThis.String(object.connectionId) : "",
    };
  },

  toJSON(message: GetConnectionRequest): unknown {
    const obj: any = {};
    if (message.connectionId !== "") {
      obj.connectionId = message.connectionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetConnectionRequest>, I>>(base?: I): GetConnectionRequest {
    return GetConnectionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetConnectionRequest>, I>>(object: I): GetConnectionRequest {
    const message = createBaseGetConnectionRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetConnectionRequest.$type, GetConnectionRequest);

function createBaseSendToConnectionRequest(): SendToConnectionRequest {
  return {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest",
    connectionId: "",
    data: Buffer.alloc(0),
    type: 0,
  };
}

export const SendToConnectionRequest = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest" as const,

  encode(message: SendToConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendToConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendToConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendToConnectionRequest {
    return {
      $type: SendToConnectionRequest.$type,
      connectionId: isSet(object.connectionId) ? globalThis.String(object.connectionId) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      type: isSet(object.type) ? sendToConnectionRequest_DataTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: SendToConnectionRequest): unknown {
    const obj: any = {};
    if (message.connectionId !== "") {
      obj.connectionId = message.connectionId;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.type !== 0) {
      obj.type = sendToConnectionRequest_DataTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SendToConnectionRequest>, I>>(base?: I): SendToConnectionRequest {
    return SendToConnectionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendToConnectionRequest>, I>>(object: I): SendToConnectionRequest {
    const message = createBaseSendToConnectionRequest();
    message.connectionId = object.connectionId ?? "";
    message.data = object.data ?? Buffer.alloc(0);
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SendToConnectionRequest.$type, SendToConnectionRequest);

function createBaseSendToConnectionResponse(): SendToConnectionResponse {
  return { $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse" };
}

export const SendToConnectionResponse = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse" as const,

  encode(_: SendToConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendToConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendToConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SendToConnectionResponse {
    return { $type: SendToConnectionResponse.$type };
  },

  toJSON(_: SendToConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SendToConnectionResponse>, I>>(base?: I): SendToConnectionResponse {
    return SendToConnectionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendToConnectionResponse>, I>>(_: I): SendToConnectionResponse {
    const message = createBaseSendToConnectionResponse();
    return message;
  },
};

messageTypeRegistry.set(SendToConnectionResponse.$type, SendToConnectionResponse);

function createBaseDisconnectRequest(): DisconnectRequest {
  return { $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest", connectionId: "" };
}

export const DisconnectRequest = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest" as const,

  encode(message: DisconnectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisconnectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisconnectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DisconnectRequest {
    return {
      $type: DisconnectRequest.$type,
      connectionId: isSet(object.connectionId) ? globalThis.String(object.connectionId) : "",
    };
  },

  toJSON(message: DisconnectRequest): unknown {
    const obj: any = {};
    if (message.connectionId !== "") {
      obj.connectionId = message.connectionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DisconnectRequest>, I>>(base?: I): DisconnectRequest {
    return DisconnectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DisconnectRequest>, I>>(object: I): DisconnectRequest {
    const message = createBaseDisconnectRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DisconnectRequest.$type, DisconnectRequest);

function createBaseDisconnectResponse(): DisconnectResponse {
  return { $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse" };
}

export const DisconnectResponse = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse" as const,

  encode(_: DisconnectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisconnectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisconnectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DisconnectResponse {
    return { $type: DisconnectResponse.$type };
  },

  toJSON(_: DisconnectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DisconnectResponse>, I>>(base?: I): DisconnectResponse {
    return DisconnectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DisconnectResponse>, I>>(_: I): DisconnectResponse {
    const message = createBaseDisconnectResponse();
    return message;
  },
};

messageTypeRegistry.set(DisconnectResponse.$type, DisconnectResponse);

/** A set of methods for managing API Gateway WebSocket connections. */
export type ConnectionServiceService = typeof ConnectionServiceService;
export const ConnectionServiceService = {
  /** Returns the specified connection info. */
  get: {
    path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetConnectionRequest) => Buffer.from(GetConnectionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetConnectionRequest.decode(value),
    responseSerialize: (value: Connection) => Buffer.from(Connection.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Connection.decode(value),
  },
  /** Sends data to the specified connection. */
  send: {
    path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Send",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SendToConnectionRequest) => Buffer.from(SendToConnectionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SendToConnectionRequest.decode(value),
    responseSerialize: (value: SendToConnectionResponse) =>
      Buffer.from(SendToConnectionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SendToConnectionResponse.decode(value),
  },
  /** Disconnects the specified connection. */
  disconnect: {
    path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Disconnect",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DisconnectRequest) => Buffer.from(DisconnectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DisconnectRequest.decode(value),
    responseSerialize: (value: DisconnectResponse) => Buffer.from(DisconnectResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DisconnectResponse.decode(value),
  },
} as const;

export interface ConnectionServiceServer extends UntypedServiceImplementation {
  /** Returns the specified connection info. */
  get: handleUnaryCall<GetConnectionRequest, Connection>;
  /** Sends data to the specified connection. */
  send: handleUnaryCall<SendToConnectionRequest, SendToConnectionResponse>;
  /** Disconnects the specified connection. */
  disconnect: handleUnaryCall<DisconnectRequest, DisconnectResponse>;
}

export interface ConnectionServiceClient extends Client {
  /** Returns the specified connection info. */
  get(
    request: GetConnectionRequest,
    callback: (error: ServiceError | null, response: Connection) => void,
  ): ClientUnaryCall;
  get(
    request: GetConnectionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Connection) => void,
  ): ClientUnaryCall;
  get(
    request: GetConnectionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Connection) => void,
  ): ClientUnaryCall;
  /** Sends data to the specified connection. */
  send(
    request: SendToConnectionRequest,
    callback: (error: ServiceError | null, response: SendToConnectionResponse) => void,
  ): ClientUnaryCall;
  send(
    request: SendToConnectionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SendToConnectionResponse) => void,
  ): ClientUnaryCall;
  send(
    request: SendToConnectionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SendToConnectionResponse) => void,
  ): ClientUnaryCall;
  /** Disconnects the specified connection. */
  disconnect(
    request: DisconnectRequest,
    callback: (error: ServiceError | null, response: DisconnectResponse) => void,
  ): ClientUnaryCall;
  disconnect(
    request: DisconnectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DisconnectResponse) => void,
  ): ClientUnaryCall;
  disconnect(
    request: DisconnectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DisconnectResponse) => void,
  ): ClientUnaryCall;
}

export const ConnectionServiceClient = makeGenericClientConstructor(
  ConnectionServiceService,
  "yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ConnectionServiceClient;
  service: typeof ConnectionServiceService;
  serviceName: string;
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
