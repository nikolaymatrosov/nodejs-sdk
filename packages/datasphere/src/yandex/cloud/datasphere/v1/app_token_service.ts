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
import { Empty } from "@yandex-cloud/core/dist/generated/google/protobuf/empty";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datasphere.v1";

export interface AppTokenValidateRequest {
  $type: "yandex.cloud.datasphere.v1.AppTokenValidateRequest";
  /** App token to validate. */
  token: string;
}

function createBaseAppTokenValidateRequest(): AppTokenValidateRequest {
  return { $type: "yandex.cloud.datasphere.v1.AppTokenValidateRequest", token: "" };
}

export const AppTokenValidateRequest = {
  $type: "yandex.cloud.datasphere.v1.AppTokenValidateRequest" as const,

  encode(message: AppTokenValidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppTokenValidateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppTokenValidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppTokenValidateRequest {
    return { $type: AppTokenValidateRequest.$type, token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: AppTokenValidateRequest): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppTokenValidateRequest>, I>>(base?: I): AppTokenValidateRequest {
    return AppTokenValidateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AppTokenValidateRequest>, I>>(object: I): AppTokenValidateRequest {
    const message = createBaseAppTokenValidateRequest();
    message.token = object.token ?? "";
    return message;
  },
};

messageTypeRegistry.set(AppTokenValidateRequest.$type, AppTokenValidateRequest);

/** A set of methods for managing app tokens. */
export type AppTokenServiceService = typeof AppTokenServiceService;
export const AppTokenServiceService = {
  /** Validates app token. */
  validate: {
    path: "/yandex.cloud.datasphere.v1.AppTokenService/Validate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AppTokenValidateRequest) => Buffer.from(AppTokenValidateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AppTokenValidateRequest.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface AppTokenServiceServer extends UntypedServiceImplementation {
  /** Validates app token. */
  validate: handleUnaryCall<AppTokenValidateRequest, Empty>;
}

export interface AppTokenServiceClient extends Client {
  /** Validates app token. */
  validate(
    request: AppTokenValidateRequest,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  validate(
    request: AppTokenValidateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  validate(
    request: AppTokenValidateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
}

export const AppTokenServiceClient = makeGenericClientConstructor(
  AppTokenServiceService,
  "yandex.cloud.datasphere.v1.AppTokenService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AppTokenServiceClient;
  service: typeof AppTokenServiceService;
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
