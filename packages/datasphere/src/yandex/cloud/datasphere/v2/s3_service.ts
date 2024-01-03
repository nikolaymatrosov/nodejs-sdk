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
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface ActivateS3Request {
  $type: "yandex.cloud.datasphere.v2.ActivateS3Request";
  s3Id: string;
  projectId: string;
}

export interface DeactivateS3Request {
  $type: "yandex.cloud.datasphere.v2.DeactivateS3Request";
  s3Id: string;
  projectId: string;
}

function createBaseActivateS3Request(): ActivateS3Request {
  return { $type: "yandex.cloud.datasphere.v2.ActivateS3Request", s3Id: "", projectId: "" };
}

export const ActivateS3Request = {
  $type: "yandex.cloud.datasphere.v2.ActivateS3Request" as const,

  encode(message: ActivateS3Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.s3Id !== "") {
      writer.uint32(10).string(message.s3Id);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateS3Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateS3Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.s3Id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateS3Request {
    return {
      $type: ActivateS3Request.$type,
      s3Id: isSet(object.s3Id) ? globalThis.String(object.s3Id) : "",
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: ActivateS3Request): unknown {
    const obj: any = {};
    if (message.s3Id !== "") {
      obj.s3Id = message.s3Id;
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateS3Request>, I>>(base?: I): ActivateS3Request {
    return ActivateS3Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateS3Request>, I>>(object: I): ActivateS3Request {
    const message = createBaseActivateS3Request();
    message.s3Id = object.s3Id ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateS3Request.$type, ActivateS3Request);

function createBaseDeactivateS3Request(): DeactivateS3Request {
  return { $type: "yandex.cloud.datasphere.v2.DeactivateS3Request", s3Id: "", projectId: "" };
}

export const DeactivateS3Request = {
  $type: "yandex.cloud.datasphere.v2.DeactivateS3Request" as const,

  encode(message: DeactivateS3Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.s3Id !== "") {
      writer.uint32(10).string(message.s3Id);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateS3Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateS3Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.s3Id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeactivateS3Request {
    return {
      $type: DeactivateS3Request.$type,
      s3Id: isSet(object.s3Id) ? globalThis.String(object.s3Id) : "",
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: DeactivateS3Request): unknown {
    const obj: any = {};
    if (message.s3Id !== "") {
      obj.s3Id = message.s3Id;
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateS3Request>, I>>(base?: I): DeactivateS3Request {
    return DeactivateS3Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateS3Request>, I>>(object: I): DeactivateS3Request {
    const message = createBaseDeactivateS3Request();
    message.s3Id = object.s3Id ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateS3Request.$type, DeactivateS3Request);

export type S3ServiceService = typeof S3ServiceService;
export const S3ServiceService = {
  /** Activates shared s3 for project */
  activate: {
    path: "/yandex.cloud.datasphere.v2.S3Service/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateS3Request) => Buffer.from(ActivateS3Request.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateS3Request.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deactivates shared s3 for project */
  deactivate: {
    path: "/yandex.cloud.datasphere.v2.S3Service/Deactivate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeactivateS3Request) => Buffer.from(DeactivateS3Request.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeactivateS3Request.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface S3ServiceServer extends UntypedServiceImplementation {
  /** Activates shared s3 for project */
  activate: handleUnaryCall<ActivateS3Request, Operation>;
  /** Deactivates shared s3 for project */
  deactivate: handleUnaryCall<DeactivateS3Request, Operation>;
}

export interface S3ServiceClient extends Client {
  /** Activates shared s3 for project */
  activate(
    request: ActivateS3Request,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateS3Request,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateS3Request,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deactivates shared s3 for project */
  deactivate(
    request: DeactivateS3Request,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateS3Request,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateS3Request,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const S3ServiceClient = makeGenericClientConstructor(
  S3ServiceService,
  "yandex.cloud.datasphere.v2.S3Service",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): S3ServiceClient;
  service: typeof S3ServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
