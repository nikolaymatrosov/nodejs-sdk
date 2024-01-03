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
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface RegisterRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest";
  computeInstanceId: string;
}

export interface RegisterResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse";
  agentInstanceId: string;
}

export interface ExternalAgentRegisterRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest";
  folderId: string;
  computeInstanceId: string;
  name: string;
  agentVersion: string;
}

export interface ExternalAgentRegisterMetadata {
  $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata";
  agentInstanceId: string;
}

function createBaseRegisterRequest(): RegisterRequest {
  return { $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest", computeInstanceId: "" };
}

export const RegisterRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest" as const,

  encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    return {
      $type: RegisterRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
    };
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterRequest>, I>>(base?: I): RegisterRequest {
    return RegisterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterRequest>, I>>(object: I): RegisterRequest {
    const message = createBaseRegisterRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RegisterRequest.$type, RegisterRequest);

function createBaseRegisterResponse(): RegisterResponse {
  return { $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse", agentInstanceId: "" };
}

export const RegisterResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse" as const,

  encode(message: RegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentInstanceId !== "") {
      writer.uint32(10).string(message.agentInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.agentInstanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterResponse {
    return {
      $type: RegisterResponse.$type,
      agentInstanceId: isSet(object.agentInstanceId) ? globalThis.String(object.agentInstanceId) : "",
    };
  },

  toJSON(message: RegisterResponse): unknown {
    const obj: any = {};
    if (message.agentInstanceId !== "") {
      obj.agentInstanceId = message.agentInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterResponse>, I>>(base?: I): RegisterResponse {
    return RegisterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterResponse>, I>>(object: I): RegisterResponse {
    const message = createBaseRegisterResponse();
    message.agentInstanceId = object.agentInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RegisterResponse.$type, RegisterResponse);

function createBaseExternalAgentRegisterRequest(): ExternalAgentRegisterRequest {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest",
    folderId: "",
    computeInstanceId: "",
    name: "",
    agentVersion: "",
  };
}

export const ExternalAgentRegisterRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest" as const,

  encode(message: ExternalAgentRegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.agentVersion !== "") {
      writer.uint32(34).string(message.agentVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalAgentRegisterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalAgentRegisterRequest();
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

          message.computeInstanceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): ExternalAgentRegisterRequest {
    return {
      $type: ExternalAgentRegisterRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      agentVersion: isSet(object.agentVersion) ? globalThis.String(object.agentVersion) : "",
    };
  },

  toJSON(message: ExternalAgentRegisterRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.agentVersion !== "") {
      obj.agentVersion = message.agentVersion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalAgentRegisterRequest>, I>>(base?: I): ExternalAgentRegisterRequest {
    return ExternalAgentRegisterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalAgentRegisterRequest>, I>>(object: I): ExternalAgentRegisterRequest {
    const message = createBaseExternalAgentRegisterRequest();
    message.folderId = object.folderId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.name = object.name ?? "";
    message.agentVersion = object.agentVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalAgentRegisterRequest.$type, ExternalAgentRegisterRequest);

function createBaseExternalAgentRegisterMetadata(): ExternalAgentRegisterMetadata {
  return { $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata", agentInstanceId: "" };
}

export const ExternalAgentRegisterMetadata = {
  $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata" as const,

  encode(message: ExternalAgentRegisterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentInstanceId !== "") {
      writer.uint32(10).string(message.agentInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalAgentRegisterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalAgentRegisterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.agentInstanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalAgentRegisterMetadata {
    return {
      $type: ExternalAgentRegisterMetadata.$type,
      agentInstanceId: isSet(object.agentInstanceId) ? globalThis.String(object.agentInstanceId) : "",
    };
  },

  toJSON(message: ExternalAgentRegisterMetadata): unknown {
    const obj: any = {};
    if (message.agentInstanceId !== "") {
      obj.agentInstanceId = message.agentInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalAgentRegisterMetadata>, I>>(base?: I): ExternalAgentRegisterMetadata {
    return ExternalAgentRegisterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalAgentRegisterMetadata>, I>>(
    object: I,
  ): ExternalAgentRegisterMetadata {
    const message = createBaseExternalAgentRegisterMetadata();
    message.agentInstanceId = object.agentInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalAgentRegisterMetadata.$type, ExternalAgentRegisterMetadata);

export type AgentRegistrationServiceService = typeof AgentRegistrationServiceService;
export const AgentRegistrationServiceService = {
  /** Registers specified agent. */
  register: {
    path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/Register",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterRequest) => Buffer.from(RegisterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RegisterRequest.decode(value),
    responseSerialize: (value: RegisterResponse) => Buffer.from(RegisterResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RegisterResponse.decode(value),
  },
  /** Registers external agent. */
  externalAgentRegister: {
    path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/ExternalAgentRegister",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExternalAgentRegisterRequest) =>
      Buffer.from(ExternalAgentRegisterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ExternalAgentRegisterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface AgentRegistrationServiceServer extends UntypedServiceImplementation {
  /** Registers specified agent. */
  register: handleUnaryCall<RegisterRequest, RegisterResponse>;
  /** Registers external agent. */
  externalAgentRegister: handleUnaryCall<ExternalAgentRegisterRequest, Operation>;
}

export interface AgentRegistrationServiceClient extends Client {
  /** Registers specified agent. */
  register(
    request: RegisterRequest,
    callback: (error: ServiceError | null, response: RegisterResponse) => void,
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RegisterResponse) => void,
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RegisterResponse) => void,
  ): ClientUnaryCall;
  /** Registers external agent. */
  externalAgentRegister(
    request: ExternalAgentRegisterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  externalAgentRegister(
    request: ExternalAgentRegisterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  externalAgentRegister(
    request: ExternalAgentRegisterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const AgentRegistrationServiceClient = makeGenericClientConstructor(
  AgentRegistrationServiceService,
  "yandex.cloud.loadtesting.agent.v1.AgentRegistrationService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): AgentRegistrationServiceClient;
  service: typeof AgentRegistrationServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
