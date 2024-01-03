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
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface CreateIamTokenRequest {
  $type: "yandex.cloud.iam.v1.CreateIamTokenRequest";
  /**
   * OAuth token for a Yandex account.
   * For more information, see [OAuth token](/docs/iam/concepts/authorization/oauth-token).
   */
  yandexPassportOauthToken?:
    | string
    | undefined;
  /**
   * JSON Web Token (JWT) for a service account.
   * For more information, see [Get IAM token for a service account](/docs/iam/operations/iam-token/create-for-sa).
   */
  jwt?: string | undefined;
}

export interface CreateIamTokenResponse {
  $type: "yandex.cloud.iam.v1.CreateIamTokenResponse";
  /**
   * IAM token for the specified identity.
   *
   * You should pass the token in the `Authorization` header for any further API requests.
   * For example, `Authorization: Bearer [iam_token]`.
   */
  iamToken: string;
  /** IAM token expiration time. */
  expiresAt?: Date | undefined;
}

export interface CreateIamTokenForServiceAccountRequest {
  $type: "yandex.cloud.iam.v1.CreateIamTokenForServiceAccountRequest";
  serviceAccountId: string;
}

function createBaseCreateIamTokenRequest(): CreateIamTokenRequest {
  return { $type: "yandex.cloud.iam.v1.CreateIamTokenRequest", yandexPassportOauthToken: undefined, jwt: undefined };
}

export const CreateIamTokenRequest = {
  $type: "yandex.cloud.iam.v1.CreateIamTokenRequest" as const,

  encode(message: CreateIamTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yandexPassportOauthToken !== undefined) {
      writer.uint32(10).string(message.yandexPassportOauthToken);
    }
    if (message.jwt !== undefined) {
      writer.uint32(18).string(message.jwt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateIamTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateIamTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.yandexPassportOauthToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jwt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateIamTokenRequest {
    return {
      $type: CreateIamTokenRequest.$type,
      yandexPassportOauthToken: isSet(object.yandexPassportOauthToken)
        ? globalThis.String(object.yandexPassportOauthToken)
        : undefined,
      jwt: isSet(object.jwt) ? globalThis.String(object.jwt) : undefined,
    };
  },

  toJSON(message: CreateIamTokenRequest): unknown {
    const obj: any = {};
    if (message.yandexPassportOauthToken !== undefined) {
      obj.yandexPassportOauthToken = message.yandexPassportOauthToken;
    }
    if (message.jwt !== undefined) {
      obj.jwt = message.jwt;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateIamTokenRequest>): CreateIamTokenRequest {
    return CreateIamTokenRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateIamTokenRequest>): CreateIamTokenRequest {
    const message = createBaseCreateIamTokenRequest();
    message.yandexPassportOauthToken = object.yandexPassportOauthToken ?? undefined;
    message.jwt = object.jwt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateIamTokenRequest.$type, CreateIamTokenRequest);

function createBaseCreateIamTokenResponse(): CreateIamTokenResponse {
  return { $type: "yandex.cloud.iam.v1.CreateIamTokenResponse", iamToken: "", expiresAt: undefined };
}

export const CreateIamTokenResponse = {
  $type: "yandex.cloud.iam.v1.CreateIamTokenResponse" as const,

  encode(message: CreateIamTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iamToken !== "") {
      writer.uint32(10).string(message.iamToken);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateIamTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateIamTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.iamToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateIamTokenResponse {
    return {
      $type: CreateIamTokenResponse.$type,
      iamToken: isSet(object.iamToken) ? globalThis.String(object.iamToken) : "",
      expiresAt: isSet(object.expiresAt) ? fromJsonTimestamp(object.expiresAt) : undefined,
    };
  },

  toJSON(message: CreateIamTokenResponse): unknown {
    const obj: any = {};
    if (message.iamToken !== "") {
      obj.iamToken = message.iamToken;
    }
    if (message.expiresAt !== undefined) {
      obj.expiresAt = message.expiresAt.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<CreateIamTokenResponse>): CreateIamTokenResponse {
    return CreateIamTokenResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateIamTokenResponse>): CreateIamTokenResponse {
    const message = createBaseCreateIamTokenResponse();
    message.iamToken = object.iamToken ?? "";
    message.expiresAt = object.expiresAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateIamTokenResponse.$type, CreateIamTokenResponse);

function createBaseCreateIamTokenForServiceAccountRequest(): CreateIamTokenForServiceAccountRequest {
  return { $type: "yandex.cloud.iam.v1.CreateIamTokenForServiceAccountRequest", serviceAccountId: "" };
}

export const CreateIamTokenForServiceAccountRequest = {
  $type: "yandex.cloud.iam.v1.CreateIamTokenForServiceAccountRequest" as const,

  encode(message: CreateIamTokenForServiceAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateIamTokenForServiceAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateIamTokenForServiceAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateIamTokenForServiceAccountRequest {
    return {
      $type: CreateIamTokenForServiceAccountRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: CreateIamTokenForServiceAccountRequest): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateIamTokenForServiceAccountRequest>): CreateIamTokenForServiceAccountRequest {
    return CreateIamTokenForServiceAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateIamTokenForServiceAccountRequest>): CreateIamTokenForServiceAccountRequest {
    const message = createBaseCreateIamTokenForServiceAccountRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateIamTokenForServiceAccountRequest.$type, CreateIamTokenForServiceAccountRequest);

/** A set of methods for managing IAM tokens. */
export type IamTokenServiceService = typeof IamTokenServiceService;
export const IamTokenServiceService = {
  /** Creates an IAM token for the specified identity. */
  create: {
    path: "/yandex.cloud.iam.v1.IamTokenService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateIamTokenRequest) => Buffer.from(CreateIamTokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateIamTokenRequest.decode(value),
    responseSerialize: (value: CreateIamTokenResponse) => Buffer.from(CreateIamTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateIamTokenResponse.decode(value),
  },
  /** Create iam token for service account. */
  createForServiceAccount: {
    path: "/yandex.cloud.iam.v1.IamTokenService/CreateForServiceAccount",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateIamTokenForServiceAccountRequest) =>
      Buffer.from(CreateIamTokenForServiceAccountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateIamTokenForServiceAccountRequest.decode(value),
    responseSerialize: (value: CreateIamTokenResponse) => Buffer.from(CreateIamTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateIamTokenResponse.decode(value),
  },
} as const;

export interface IamTokenServiceServer extends UntypedServiceImplementation {
  /** Creates an IAM token for the specified identity. */
  create: handleUnaryCall<CreateIamTokenRequest, CreateIamTokenResponse>;
  /** Create iam token for service account. */
  createForServiceAccount: handleUnaryCall<CreateIamTokenForServiceAccountRequest, CreateIamTokenResponse>;
}

export interface IamTokenServiceClient extends Client {
  /** Creates an IAM token for the specified identity. */
  create(
    request: CreateIamTokenRequest,
    callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateIamTokenRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateIamTokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void,
  ): ClientUnaryCall;
  /** Create iam token for service account. */
  createForServiceAccount(
    request: CreateIamTokenForServiceAccountRequest,
    callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void,
  ): ClientUnaryCall;
  createForServiceAccount(
    request: CreateIamTokenForServiceAccountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void,
  ): ClientUnaryCall;
  createForServiceAccount(
    request: CreateIamTokenForServiceAccountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void,
  ): ClientUnaryCall;
}

export const IamTokenServiceClient = makeGenericClientConstructor(
  IamTokenServiceService,
  "yandex.cloud.iam.v1.IamTokenService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): IamTokenServiceClient;
  service: typeof IamTokenServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
