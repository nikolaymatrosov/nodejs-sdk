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
import { Lock } from "./lock";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface GetLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest";
  lockId: string;
}

export interface CreateLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest";
  /** license */
  instanceId: string;
  resourceId: string;
}

export interface EnsureLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest";
  /** license */
  instanceId: string;
  resourceId: string;
}

export interface CreateLockMetadata {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata";
  lockId: string;
}

export interface EnsureLockMetadata {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata";
  lockId: string;
}

export interface DeleteLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest";
  lockId: string;
}

export interface DeleteLockMetadata {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata";
  lockId: string;
}

export interface GetLockByInstanceAndResourceRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest";
  /** license */
  instanceId: string;
  resourceId: string;
}

function createBaseGetLockRequest(): GetLockRequest {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest", lockId: "" };
}

export const GetLockRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest" as const,

  encode(message: GetLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLockRequest {
    return { $type: GetLockRequest.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: GetLockRequest): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLockRequest>, I>>(base?: I): GetLockRequest {
    return GetLockRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLockRequest>, I>>(object: I): GetLockRequest {
    const message = createBaseGetLockRequest();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLockRequest.$type, GetLockRequest);

function createBaseCreateLockRequest(): CreateLockRequest {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest", instanceId: "", resourceId: "" };
}

export const CreateLockRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest" as const,

  encode(message: CreateLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLockRequest {
    return {
      $type: CreateLockRequest.$type,
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: CreateLockRequest): unknown {
    const obj: any = {};
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLockRequest>, I>>(base?: I): CreateLockRequest {
    return CreateLockRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLockRequest>, I>>(object: I): CreateLockRequest {
    const message = createBaseCreateLockRequest();
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLockRequest.$type, CreateLockRequest);

function createBaseEnsureLockRequest(): EnsureLockRequest {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest", instanceId: "", resourceId: "" };
}

export const EnsureLockRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest" as const,

  encode(message: EnsureLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnsureLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnsureLockRequest {
    return {
      $type: EnsureLockRequest.$type,
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: EnsureLockRequest): unknown {
    const obj: any = {};
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnsureLockRequest>, I>>(base?: I): EnsureLockRequest {
    return EnsureLockRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnsureLockRequest>, I>>(object: I): EnsureLockRequest {
    const message = createBaseEnsureLockRequest();
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnsureLockRequest.$type, EnsureLockRequest);

function createBaseCreateLockMetadata(): CreateLockMetadata {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata", lockId: "" };
}

export const CreateLockMetadata = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata" as const,

  encode(message: CreateLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLockMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLockMetadata {
    return { $type: CreateLockMetadata.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: CreateLockMetadata): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLockMetadata>, I>>(base?: I): CreateLockMetadata {
    return CreateLockMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLockMetadata>, I>>(object: I): CreateLockMetadata {
    const message = createBaseCreateLockMetadata();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLockMetadata.$type, CreateLockMetadata);

function createBaseEnsureLockMetadata(): EnsureLockMetadata {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata", lockId: "" };
}

export const EnsureLockMetadata = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata" as const,

  encode(message: EnsureLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnsureLockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnsureLockMetadata {
    return { $type: EnsureLockMetadata.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: EnsureLockMetadata): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnsureLockMetadata>, I>>(base?: I): EnsureLockMetadata {
    return EnsureLockMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnsureLockMetadata>, I>>(object: I): EnsureLockMetadata {
    const message = createBaseEnsureLockMetadata();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnsureLockMetadata.$type, EnsureLockMetadata);

function createBaseDeleteLockRequest(): DeleteLockRequest {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest", lockId: "" };
}

export const DeleteLockRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest" as const,

  encode(message: DeleteLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLockRequest {
    return { $type: DeleteLockRequest.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: DeleteLockRequest): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLockRequest>, I>>(base?: I): DeleteLockRequest {
    return DeleteLockRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLockRequest>, I>>(object: I): DeleteLockRequest {
    const message = createBaseDeleteLockRequest();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLockRequest.$type, DeleteLockRequest);

function createBaseDeleteLockMetadata(): DeleteLockMetadata {
  return { $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata", lockId: "" };
}

export const DeleteLockMetadata = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata" as const,

  encode(message: DeleteLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLockMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLockMetadata {
    return { $type: DeleteLockMetadata.$type, lockId: isSet(object.lockId) ? globalThis.String(object.lockId) : "" };
  },

  toJSON(message: DeleteLockMetadata): unknown {
    const obj: any = {};
    if (message.lockId !== "") {
      obj.lockId = message.lockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLockMetadata>, I>>(base?: I): DeleteLockMetadata {
    return DeleteLockMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLockMetadata>, I>>(object: I): DeleteLockMetadata {
    const message = createBaseDeleteLockMetadata();
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLockMetadata.$type, DeleteLockMetadata);

function createBaseGetLockByInstanceAndResourceRequest(): GetLockByInstanceAndResourceRequest {
  return {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest",
    instanceId: "",
    resourceId: "",
  };
}

export const GetLockByInstanceAndResourceRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest" as const,

  encode(message: GetLockByInstanceAndResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockByInstanceAndResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockByInstanceAndResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLockByInstanceAndResourceRequest {
    return {
      $type: GetLockByInstanceAndResourceRequest.$type,
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: GetLockByInstanceAndResourceRequest): unknown {
    const obj: any = {};
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLockByInstanceAndResourceRequest>, I>>(
    base?: I,
  ): GetLockByInstanceAndResourceRequest {
    return GetLockByInstanceAndResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLockByInstanceAndResourceRequest>, I>>(
    object: I,
  ): GetLockByInstanceAndResourceRequest {
    const message = createBaseGetLockByInstanceAndResourceRequest();
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLockByInstanceAndResourceRequest.$type, GetLockByInstanceAndResourceRequest);

export type LockServiceService = typeof LockServiceService;
export const LockServiceService = {
  get: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLockRequest) => Buffer.from(GetLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLockRequest.decode(value),
    responseSerialize: (value: Lock) => Buffer.from(Lock.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lock.decode(value),
  },
  getByInstanceAndResource: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/GetByInstanceAndResource",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLockByInstanceAndResourceRequest) =>
      Buffer.from(GetLockByInstanceAndResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLockByInstanceAndResourceRequest.decode(value),
    responseSerialize: (value: Lock) => Buffer.from(Lock.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lock.decode(value),
  },
  create: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLockRequest) => Buffer.from(CreateLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLockRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  ensure: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Ensure",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EnsureLockRequest) => Buffer.from(EnsureLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EnsureLockRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  delete: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteLockRequest) => Buffer.from(DeleteLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteLockRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface LockServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetLockRequest, Lock>;
  getByInstanceAndResource: handleUnaryCall<GetLockByInstanceAndResourceRequest, Lock>;
  create: handleUnaryCall<CreateLockRequest, Operation>;
  ensure: handleUnaryCall<EnsureLockRequest, Operation>;
  delete: handleUnaryCall<DeleteLockRequest, Operation>;
}

export interface LockServiceClient extends Client {
  get(request: GetLockRequest, callback: (error: ServiceError | null, response: Lock) => void): ClientUnaryCall;
  get(
    request: GetLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  get(
    request: GetLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  getByInstanceAndResource(
    request: GetLockByInstanceAndResourceRequest,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  getByInstanceAndResource(
    request: GetLockByInstanceAndResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  getByInstanceAndResource(
    request: GetLockByInstanceAndResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lock) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLockRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  ensure(
    request: EnsureLockRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  ensure(
    request: EnsureLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  ensure(
    request: EnsureLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLockRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const LockServiceClient = makeGenericClientConstructor(
  LockServiceService,
  "yandex.cloud.marketplace.licensemanager.v1.LockService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LockServiceClient;
  service: typeof LockServiceService;
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
