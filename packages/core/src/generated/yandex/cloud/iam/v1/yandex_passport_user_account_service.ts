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
import { messageTypeRegistry } from "../../../../typeRegistry";
import { UserAccount } from "./user_account";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface GetUserAccountByLoginRequest {
  $type: "yandex.cloud.iam.v1.GetUserAccountByLoginRequest";
  /** Login of the YandexPassportUserAccount resource to return. */
  login: string;
}

function createBaseGetUserAccountByLoginRequest(): GetUserAccountByLoginRequest {
  return { $type: "yandex.cloud.iam.v1.GetUserAccountByLoginRequest", login: "" };
}

export const GetUserAccountByLoginRequest = {
  $type: "yandex.cloud.iam.v1.GetUserAccountByLoginRequest" as const,

  encode(message: GetUserAccountByLoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserAccountByLoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserAccountByLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.login = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserAccountByLoginRequest {
    return {
      $type: GetUserAccountByLoginRequest.$type,
      login: isSet(object.login) ? globalThis.String(object.login) : "",
    };
  },

  toJSON(message: GetUserAccountByLoginRequest): unknown {
    const obj: any = {};
    if (message.login !== "") {
      obj.login = message.login;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserAccountByLoginRequest>): GetUserAccountByLoginRequest {
    return GetUserAccountByLoginRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserAccountByLoginRequest>): GetUserAccountByLoginRequest {
    const message = createBaseGetUserAccountByLoginRequest();
    message.login = object.login ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUserAccountByLoginRequest.$type, GetUserAccountByLoginRequest);

/** A set of methods for managing YandexPassportUserAccount resources. */
export type YandexPassportUserAccountServiceService = typeof YandexPassportUserAccountServiceService;
export const YandexPassportUserAccountServiceService = {
  /** Returns the specified YandexPassportUserAccount resource. */
  getByLogin: {
    path: "/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserAccountByLoginRequest) =>
      Buffer.from(GetUserAccountByLoginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserAccountByLoginRequest.decode(value),
    responseSerialize: (value: UserAccount) => Buffer.from(UserAccount.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UserAccount.decode(value),
  },
} as const;

export interface YandexPassportUserAccountServiceServer extends UntypedServiceImplementation {
  /** Returns the specified YandexPassportUserAccount resource. */
  getByLogin: handleUnaryCall<GetUserAccountByLoginRequest, UserAccount>;
}

export interface YandexPassportUserAccountServiceClient extends Client {
  /** Returns the specified YandexPassportUserAccount resource. */
  getByLogin(
    request: GetUserAccountByLoginRequest,
    callback: (error: ServiceError | null, response: UserAccount) => void,
  ): ClientUnaryCall;
  getByLogin(
    request: GetUserAccountByLoginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UserAccount) => void,
  ): ClientUnaryCall;
  getByLogin(
    request: GetUserAccountByLoginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UserAccount) => void,
  ): ClientUnaryCall;
}

export const YandexPassportUserAccountServiceClient = makeGenericClientConstructor(
  YandexPassportUserAccountServiceService,
  "yandex.cloud.iam.v1.YandexPassportUserAccountService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): YandexPassportUserAccountServiceClient;
  service: typeof YandexPassportUserAccountServiceService;
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
