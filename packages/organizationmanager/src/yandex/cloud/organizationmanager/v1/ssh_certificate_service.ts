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

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

export interface GenerateSshCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest";
  /** the cloud must be attached to an organization */
  cloudId?: string | undefined;
  organizationId?:
    | string
    | undefined;
  /** specify subject to generate certificate for default login */
  subjectId?:
    | string
    | undefined;
  /** specify os_login for a specific login */
  osLogin?: string | undefined;
  publicKey: string;
}

export interface GenerateSshCertificateResponse {
  $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse";
  /** as per specification https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL.certkeys?annotate=HEAD */
  signedCertificate: string;
}

function createBaseGenerateSshCertificateRequest(): GenerateSshCertificateRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest",
    cloudId: undefined,
    organizationId: undefined,
    subjectId: undefined,
    osLogin: undefined,
    publicKey: "",
  };
}

export const GenerateSshCertificateRequest = {
  $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest" as const,

  encode(message: GenerateSshCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cloudId !== undefined) {
      writer.uint32(10).string(message.cloudId);
    }
    if (message.organizationId !== undefined) {
      writer.uint32(18).string(message.organizationId);
    }
    if (message.subjectId !== undefined) {
      writer.uint32(26).string(message.subjectId);
    }
    if (message.osLogin !== undefined) {
      writer.uint32(34).string(message.osLogin);
    }
    if (message.publicKey !== "") {
      writer.uint32(42).string(message.publicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateSshCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateSshCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cloudId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.organizationId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subjectId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.osLogin = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.publicKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateSshCertificateRequest {
    return {
      $type: GenerateSshCertificateRequest.$type,
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : undefined,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : undefined,
      subjectId: isSet(object.subjectId) ? globalThis.String(object.subjectId) : undefined,
      osLogin: isSet(object.osLogin) ? globalThis.String(object.osLogin) : undefined,
      publicKey: isSet(object.publicKey) ? globalThis.String(object.publicKey) : "",
    };
  },

  toJSON(message: GenerateSshCertificateRequest): unknown {
    const obj: any = {};
    if (message.cloudId !== undefined) {
      obj.cloudId = message.cloudId;
    }
    if (message.organizationId !== undefined) {
      obj.organizationId = message.organizationId;
    }
    if (message.subjectId !== undefined) {
      obj.subjectId = message.subjectId;
    }
    if (message.osLogin !== undefined) {
      obj.osLogin = message.osLogin;
    }
    if (message.publicKey !== "") {
      obj.publicKey = message.publicKey;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateSshCertificateRequest>, I>>(base?: I): GenerateSshCertificateRequest {
    return GenerateSshCertificateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateSshCertificateRequest>, I>>(
    object: I,
  ): GenerateSshCertificateRequest {
    const message = createBaseGenerateSshCertificateRequest();
    message.cloudId = object.cloudId ?? undefined;
    message.organizationId = object.organizationId ?? undefined;
    message.subjectId = object.subjectId ?? undefined;
    message.osLogin = object.osLogin ?? undefined;
    message.publicKey = object.publicKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(GenerateSshCertificateRequest.$type, GenerateSshCertificateRequest);

function createBaseGenerateSshCertificateResponse(): GenerateSshCertificateResponse {
  return { $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse", signedCertificate: "" };
}

export const GenerateSshCertificateResponse = {
  $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse" as const,

  encode(message: GenerateSshCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedCertificate !== "") {
      writer.uint32(10).string(message.signedCertificate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateSshCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateSshCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signedCertificate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateSshCertificateResponse {
    return {
      $type: GenerateSshCertificateResponse.$type,
      signedCertificate: isSet(object.signedCertificate) ? globalThis.String(object.signedCertificate) : "",
    };
  },

  toJSON(message: GenerateSshCertificateResponse): unknown {
    const obj: any = {};
    if (message.signedCertificate !== "") {
      obj.signedCertificate = message.signedCertificate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateSshCertificateResponse>, I>>(base?: I): GenerateSshCertificateResponse {
    return GenerateSshCertificateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateSshCertificateResponse>, I>>(
    object: I,
  ): GenerateSshCertificateResponse {
    const message = createBaseGenerateSshCertificateResponse();
    message.signedCertificate = object.signedCertificate ?? "";
    return message;
  },
};

messageTypeRegistry.set(GenerateSshCertificateResponse.$type, GenerateSshCertificateResponse);

export type SshCertificateServiceService = typeof SshCertificateServiceService;
export const SshCertificateServiceService = {
  /**
   * Members of an organization can generate certificates for themselves
   * Signing certificates for other users requires a special permission
   */
  generate: {
    path: "/yandex.cloud.organizationmanager.v1.SshCertificateService/Generate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GenerateSshCertificateRequest) =>
      Buffer.from(GenerateSshCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GenerateSshCertificateRequest.decode(value),
    responseSerialize: (value: GenerateSshCertificateResponse) =>
      Buffer.from(GenerateSshCertificateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GenerateSshCertificateResponse.decode(value),
  },
} as const;

export interface SshCertificateServiceServer extends UntypedServiceImplementation {
  /**
   * Members of an organization can generate certificates for themselves
   * Signing certificates for other users requires a special permission
   */
  generate: handleUnaryCall<GenerateSshCertificateRequest, GenerateSshCertificateResponse>;
}

export interface SshCertificateServiceClient extends Client {
  /**
   * Members of an organization can generate certificates for themselves
   * Signing certificates for other users requires a special permission
   */
  generate(
    request: GenerateSshCertificateRequest,
    callback: (error: ServiceError | null, response: GenerateSshCertificateResponse) => void,
  ): ClientUnaryCall;
  generate(
    request: GenerateSshCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GenerateSshCertificateResponse) => void,
  ): ClientUnaryCall;
  generate(
    request: GenerateSshCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GenerateSshCertificateResponse) => void,
  ): ClientUnaryCall;
}

export const SshCertificateServiceClient = makeGenericClientConstructor(
  SshCertificateServiceService,
  "yandex.cloud.organizationmanager.v1.SshCertificateService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SshCertificateServiceClient;
  service: typeof SshCertificateServiceService;
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
