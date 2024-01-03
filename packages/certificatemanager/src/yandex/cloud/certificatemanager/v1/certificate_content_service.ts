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

export const protobufPackage = "yandex.cloud.certificatemanager.v1";

export enum PrivateKeyFormat {
  PRIVATE_KEY_FORMAT_UNSPECIFIED = 0,
  PKCS1 = 1,
  PKCS8 = 2,
  UNRECOGNIZED = -1,
}

export function privateKeyFormatFromJSON(object: any): PrivateKeyFormat {
  switch (object) {
    case 0:
    case "PRIVATE_KEY_FORMAT_UNSPECIFIED":
      return PrivateKeyFormat.PRIVATE_KEY_FORMAT_UNSPECIFIED;
    case 1:
    case "PKCS1":
      return PrivateKeyFormat.PKCS1;
    case 2:
    case "PKCS8":
      return PrivateKeyFormat.PKCS8;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PrivateKeyFormat.UNRECOGNIZED;
  }
}

export function privateKeyFormatToJSON(object: PrivateKeyFormat): string {
  switch (object) {
    case PrivateKeyFormat.PRIVATE_KEY_FORMAT_UNSPECIFIED:
      return "PRIVATE_KEY_FORMAT_UNSPECIFIED";
    case PrivateKeyFormat.PKCS1:
      return "PKCS1";
    case PrivateKeyFormat.PKCS8:
      return "PKCS8";
    case PrivateKeyFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetCertificateContentResponse {
  $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentResponse";
  /** ID of the certificate. */
  certificateId: string;
  /** PEM-encoded certificate chain content of the certificate. */
  certificateChain: string[];
  /** PEM-encoded private key content of the certificate. */
  privateKey: string;
}

export interface GetCertificateContentRequest {
  $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentRequest";
  /** ID of the certificate to download content. */
  certificateId: string;
  /** Optional ID of the version. */
  versionId: string;
  /** Desired format of private key */
  privateKeyFormat: PrivateKeyFormat;
}

function createBaseGetCertificateContentResponse(): GetCertificateContentResponse {
  return {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentResponse",
    certificateId: "",
    certificateChain: [],
    privateKey: "",
  };
}

export const GetCertificateContentResponse = {
  $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentResponse" as const,

  encode(message: GetCertificateContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    for (const v of message.certificateChain) {
      writer.uint32(26).string(v!);
    }
    if (message.privateKey !== "") {
      writer.uint32(34).string(message.privateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCertificateContentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCertificateContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.certificateChain.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.privateKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCertificateContentResponse {
    return {
      $type: GetCertificateContentResponse.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
      certificateChain: globalThis.Array.isArray(object?.certificateChain)
        ? object.certificateChain.map((e: any) => globalThis.String(e))
        : [],
      privateKey: isSet(object.privateKey) ? globalThis.String(object.privateKey) : "",
    };
  },

  toJSON(message: GetCertificateContentResponse): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    if (message.certificateChain?.length) {
      obj.certificateChain = message.certificateChain;
    }
    if (message.privateKey !== "") {
      obj.privateKey = message.privateKey;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCertificateContentResponse>, I>>(base?: I): GetCertificateContentResponse {
    return GetCertificateContentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCertificateContentResponse>, I>>(
    object: I,
  ): GetCertificateContentResponse {
    const message = createBaseGetCertificateContentResponse();
    message.certificateId = object.certificateId ?? "";
    message.certificateChain = object.certificateChain?.map((e) => e) || [];
    message.privateKey = object.privateKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetCertificateContentResponse.$type, GetCertificateContentResponse);

function createBaseGetCertificateContentRequest(): GetCertificateContentRequest {
  return {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentRequest",
    certificateId: "",
    versionId: "",
    privateKeyFormat: 0,
  };
}

export const GetCertificateContentRequest = {
  $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentRequest" as const,

  encode(message: GetCertificateContentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.privateKeyFormat !== 0) {
      writer.uint32(24).int32(message.privateKeyFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCertificateContentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCertificateContentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificateId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.privateKeyFormat = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCertificateContentRequest {
    return {
      $type: GetCertificateContentRequest.$type,
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      privateKeyFormat: isSet(object.privateKeyFormat) ? privateKeyFormatFromJSON(object.privateKeyFormat) : 0,
    };
  },

  toJSON(message: GetCertificateContentRequest): unknown {
    const obj: any = {};
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.privateKeyFormat !== 0) {
      obj.privateKeyFormat = privateKeyFormatToJSON(message.privateKeyFormat);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCertificateContentRequest>, I>>(base?: I): GetCertificateContentRequest {
    return GetCertificateContentRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCertificateContentRequest>, I>>(object: I): GetCertificateContentRequest {
    const message = createBaseGetCertificateContentRequest();
    message.certificateId = object.certificateId ?? "";
    message.versionId = object.versionId ?? "";
    message.privateKeyFormat = object.privateKeyFormat ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetCertificateContentRequest.$type, GetCertificateContentRequest);

/** A set of methods for managing certificate content. */
export type CertificateContentServiceService = typeof CertificateContentServiceService;
export const CertificateContentServiceService = {
  /** Returns chain and private key of the specified certificate. */
  get: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateContentService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCertificateContentRequest) =>
      Buffer.from(GetCertificateContentRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCertificateContentRequest.decode(value),
    responseSerialize: (value: GetCertificateContentResponse) =>
      Buffer.from(GetCertificateContentResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetCertificateContentResponse.decode(value),
  },
} as const;

export interface CertificateContentServiceServer extends UntypedServiceImplementation {
  /** Returns chain and private key of the specified certificate. */
  get: handleUnaryCall<GetCertificateContentRequest, GetCertificateContentResponse>;
}

export interface CertificateContentServiceClient extends Client {
  /** Returns chain and private key of the specified certificate. */
  get(
    request: GetCertificateContentRequest,
    callback: (error: ServiceError | null, response: GetCertificateContentResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetCertificateContentRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetCertificateContentResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetCertificateContentRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetCertificateContentResponse) => void,
  ): ClientUnaryCall;
}

export const CertificateContentServiceClient = makeGenericClientConstructor(
  CertificateContentServiceService,
  "yandex.cloud.certificatemanager.v1.CertificateContentService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): CertificateContentServiceClient;
  service: typeof CertificateContentServiceService;
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
