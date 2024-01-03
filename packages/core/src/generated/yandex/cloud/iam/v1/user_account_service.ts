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

export interface GetUserAccountRequest {
  $type: "yandex.cloud.iam.v1.GetUserAccountRequest";
  /** ID of the UserAccount resource to return. */
  userAccountId: string;
}

function createBaseGetUserAccountRequest(): GetUserAccountRequest {
  return { $type: "yandex.cloud.iam.v1.GetUserAccountRequest", userAccountId: "" };
}

export const GetUserAccountRequest = {
  $type: "yandex.cloud.iam.v1.GetUserAccountRequest" as const,

  encode(message: GetUserAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAccountId !== "") {
      writer.uint32(10).string(message.userAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserAccountRequest {
    return {
      $type: GetUserAccountRequest.$type,
      userAccountId: isSet(object.userAccountId) ? globalThis.String(object.userAccountId) : "",
    };
  },

  toJSON(message: GetUserAccountRequest): unknown {
    const obj: any = {};
    if (message.userAccountId !== "") {
      obj.userAccountId = message.userAccountId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserAccountRequest>): GetUserAccountRequest {
    return GetUserAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserAccountRequest>): GetUserAccountRequest {
    const message = createBaseGetUserAccountRequest();
    message.userAccountId = object.userAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUserAccountRequest.$type, GetUserAccountRequest);

/** A set of methods for managing user accounts. Currently applicable only for [Yandex accounts](/docs/iam/concepts/#passport). */
export type UserAccountServiceService = typeof UserAccountServiceService;
export const UserAccountServiceService = {
  /** Returns the specified UserAccount resource. */
  get: {
    path: "/yandex.cloud.iam.v1.UserAccountService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserAccountRequest) => Buffer.from(GetUserAccountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserAccountRequest.decode(value),
    responseSerialize: (value: UserAccount) => Buffer.from(UserAccount.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UserAccount.decode(value),
  },
} as const;

export interface UserAccountServiceServer extends UntypedServiceImplementation {
  /** Returns the specified UserAccount resource. */
  get: handleUnaryCall<GetUserAccountRequest, UserAccount>;
}

export interface UserAccountServiceClient extends Client {
  /** Returns the specified UserAccount resource. */
  get(
    request: GetUserAccountRequest,
    callback: (error: ServiceError | null, response: UserAccount) => void,
  ): ClientUnaryCall;
  get(
    request: GetUserAccountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UserAccount) => void,
  ): ClientUnaryCall;
  get(
    request: GetUserAccountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UserAccount) => void,
  ): ClientUnaryCall;
}

export const UserAccountServiceClient = makeGenericClientConstructor(
  UserAccountServiceService,
  "yandex.cloud.iam.v1.UserAccountService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserAccountServiceClient;
  service: typeof UserAccountServiceService;
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
