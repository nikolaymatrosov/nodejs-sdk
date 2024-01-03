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
import { messageTypeRegistry } from "../../../typeRegistry";
import { Operation } from "./operation";

export const protobufPackage = "yandex.cloud.operation";

export interface GetOperationRequest {
  $type: "yandex.cloud.operation.GetOperationRequest";
  /** ID of the Operation resource to return. */
  operationId: string;
}

export interface CancelOperationRequest {
  $type: "yandex.cloud.operation.CancelOperationRequest";
  /** ID of the operation to cancel. */
  operationId: string;
}

function createBaseGetOperationRequest(): GetOperationRequest {
  return { $type: "yandex.cloud.operation.GetOperationRequest", operationId: "" };
}

export const GetOperationRequest = {
  $type: "yandex.cloud.operation.GetOperationRequest" as const,

  encode(message: GetOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOperationRequest {
    return {
      $type: GetOperationRequest.$type,
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
    };
  },

  toJSON(message: GetOperationRequest): unknown {
    const obj: any = {};
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetOperationRequest>): GetOperationRequest {
    return GetOperationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetOperationRequest>): GetOperationRequest {
    const message = createBaseGetOperationRequest();
    message.operationId = object.operationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetOperationRequest.$type, GetOperationRequest);

function createBaseCancelOperationRequest(): CancelOperationRequest {
  return { $type: "yandex.cloud.operation.CancelOperationRequest", operationId: "" };
}

export const CancelOperationRequest = {
  $type: "yandex.cloud.operation.CancelOperationRequest" as const,

  encode(message: CancelOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOperationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelOperationRequest {
    return {
      $type: CancelOperationRequest.$type,
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
    };
  },

  toJSON(message: CancelOperationRequest): unknown {
    const obj: any = {};
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    return obj;
  },

  create(base?: DeepPartial<CancelOperationRequest>): CancelOperationRequest {
    return CancelOperationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CancelOperationRequest>): CancelOperationRequest {
    const message = createBaseCancelOperationRequest();
    message.operationId = object.operationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CancelOperationRequest.$type, CancelOperationRequest);

/** A set of methods for managing operations for asynchronous API requests. */
export type OperationServiceService = typeof OperationServiceService;
export const OperationServiceService = {
  /** Returns the specified Operation resource. */
  get: {
    path: "/yandex.cloud.operation.OperationService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOperationRequest) => Buffer.from(GetOperationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOperationRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Cancels the specified operation.
   *
   * Note that currently Object Storage API does not support cancelling operations.
   */
  cancel: {
    path: "/yandex.cloud.operation.OperationService/Cancel",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CancelOperationRequest) => Buffer.from(CancelOperationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CancelOperationRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface OperationServiceServer extends UntypedServiceImplementation {
  /** Returns the specified Operation resource. */
  get: handleUnaryCall<GetOperationRequest, Operation>;
  /**
   * Cancels the specified operation.
   *
   * Note that currently Object Storage API does not support cancelling operations.
   */
  cancel: handleUnaryCall<CancelOperationRequest, Operation>;
}

export interface OperationServiceClient extends Client {
  /** Returns the specified Operation resource. */
  get(
    request: GetOperationRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  get(
    request: GetOperationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  get(
    request: GetOperationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Cancels the specified operation.
   *
   * Note that currently Object Storage API does not support cancelling operations.
   */
  cancel(
    request: CancelOperationRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  cancel(
    request: CancelOperationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  cancel(
    request: CancelOperationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const OperationServiceClient = makeGenericClientConstructor(
  OperationServiceService,
  "yandex.cloud.operation.OperationService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): OperationServiceClient;
  service: typeof OperationServiceService;
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
