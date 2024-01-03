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
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";

export interface AsymmetricSignRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest";
  /** ID of the asymmetric KMS key to use for signature. */
  keyId: string;
  /**
   * Message to sign.
   * Should be encoded with base64.
   */
  message: Buffer;
}

export interface AsymmetricSignResponse {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse";
  /** ID of the asymmetric KMS key that was used for signature. */
  keyId: string;
  /**
   * Value of signature.
   * Signature value is produced in accordance with RFC 8017 for RSA
   * and is a DER-encoded object as defined by ANSI X9.62-2005 and RFC 3279 Section 2.2.3 for ECDSA.
   */
  signature: Buffer;
}

export interface AsymmetricSignHashRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest";
  /** ID of the asymmetric KMS key to use for signature. */
  keyId: string;
  /**
   * Hash value to be signed.
   * Should be encoded with base64.
   */
  hash: Buffer;
}

export interface AsymmetricSignHashResponse {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse";
  /** ID of the asymmetric KMS key that was used for signature. */
  keyId: string;
  /**
   * Value of signature.
   * Signature value is produced in accordance with RFC 8017 for RSA
   * and is a DER-encoded object as defined by ANSI X9.62-2005 and RFC 3279 Section 2.2.3 for ECDSA.
   */
  signature: Buffer;
}

export interface AsymmetricGetPublicKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest";
  /** ID of the asymmetric KMS key to be used for public key retrieval. */
  keyId: string;
}

export interface AsymmetricGetPublicKeyResponse {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse";
  /** ID of the asymmetric KMS key to get public key of. */
  keyId: string;
  /**
   * Public key value.
   * The value is a PEM-encoded X.509 public key, also known as SubjectPublicKeyInfo (SPKI),
   * as defined in RFC 5280.
   */
  publicKey: string;
}

function createBaseAsymmetricSignRequest(): AsymmetricSignRequest {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest",
    keyId: "",
    message: Buffer.alloc(0),
  };
}

export const AsymmetricSignRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest" as const,

  encode(message: AsymmetricSignRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.message.length !== 0) {
      writer.uint32(18).bytes(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricSignRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricSignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignRequest {
    return {
      $type: AsymmetricSignRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      message: isSet(object.message) ? Buffer.from(bytesFromBase64(object.message)) : Buffer.alloc(0),
    };
  },

  toJSON(message: AsymmetricSignRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.message.length !== 0) {
      obj.message = base64FromBytes(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricSignRequest>, I>>(base?: I): AsymmetricSignRequest {
    return AsymmetricSignRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricSignRequest>, I>>(object: I): AsymmetricSignRequest {
    const message = createBaseAsymmetricSignRequest();
    message.keyId = object.keyId ?? "";
    message.message = object.message ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AsymmetricSignRequest.$type, AsymmetricSignRequest);

function createBaseAsymmetricSignResponse(): AsymmetricSignResponse {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse",
    keyId: "",
    signature: Buffer.alloc(0),
  };
}

export const AsymmetricSignResponse = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse" as const,

  encode(message: AsymmetricSignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricSignResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricSignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignResponse {
    return {
      $type: AsymmetricSignResponse.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: AsymmetricSignResponse): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricSignResponse>, I>>(base?: I): AsymmetricSignResponse {
    return AsymmetricSignResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricSignResponse>, I>>(object: I): AsymmetricSignResponse {
    const message = createBaseAsymmetricSignResponse();
    message.keyId = object.keyId ?? "";
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AsymmetricSignResponse.$type, AsymmetricSignResponse);

function createBaseAsymmetricSignHashRequest(): AsymmetricSignHashRequest {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest",
    keyId: "",
    hash: Buffer.alloc(0),
  };
}

export const AsymmetricSignHashRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest" as const,

  encode(message: AsymmetricSignHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricSignHashRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricSignHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hash = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignHashRequest {
    return {
      $type: AsymmetricSignHashRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      hash: isSet(object.hash) ? Buffer.from(bytesFromBase64(object.hash)) : Buffer.alloc(0),
    };
  },

  toJSON(message: AsymmetricSignHashRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.hash.length !== 0) {
      obj.hash = base64FromBytes(message.hash);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricSignHashRequest>, I>>(base?: I): AsymmetricSignHashRequest {
    return AsymmetricSignHashRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricSignHashRequest>, I>>(object: I): AsymmetricSignHashRequest {
    const message = createBaseAsymmetricSignHashRequest();
    message.keyId = object.keyId ?? "";
    message.hash = object.hash ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AsymmetricSignHashRequest.$type, AsymmetricSignHashRequest);

function createBaseAsymmetricSignHashResponse(): AsymmetricSignHashResponse {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse",
    keyId: "",
    signature: Buffer.alloc(0),
  };
}

export const AsymmetricSignHashResponse = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse" as const,

  encode(message: AsymmetricSignHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricSignHashResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricSignHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignHashResponse {
    return {
      $type: AsymmetricSignHashResponse.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: AsymmetricSignHashResponse): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricSignHashResponse>, I>>(base?: I): AsymmetricSignHashResponse {
    return AsymmetricSignHashResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricSignHashResponse>, I>>(object: I): AsymmetricSignHashResponse {
    const message = createBaseAsymmetricSignHashResponse();
    message.keyId = object.keyId ?? "";
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AsymmetricSignHashResponse.$type, AsymmetricSignHashResponse);

function createBaseAsymmetricGetPublicKeyRequest(): AsymmetricGetPublicKeyRequest {
  return { $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest", keyId: "" };
}

export const AsymmetricGetPublicKeyRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest" as const,

  encode(message: AsymmetricGetPublicKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricGetPublicKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricGetPublicKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsymmetricGetPublicKeyRequest {
    return {
      $type: AsymmetricGetPublicKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: AsymmetricGetPublicKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricGetPublicKeyRequest>, I>>(base?: I): AsymmetricGetPublicKeyRequest {
    return AsymmetricGetPublicKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricGetPublicKeyRequest>, I>>(
    object: I,
  ): AsymmetricGetPublicKeyRequest {
    const message = createBaseAsymmetricGetPublicKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AsymmetricGetPublicKeyRequest.$type, AsymmetricGetPublicKeyRequest);

function createBaseAsymmetricGetPublicKeyResponse(): AsymmetricGetPublicKeyResponse {
  return { $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse", keyId: "", publicKey: "" };
}

export const AsymmetricGetPublicKeyResponse = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse" as const,

  encode(message: AsymmetricGetPublicKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.publicKey !== "") {
      writer.uint32(18).string(message.publicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricGetPublicKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricGetPublicKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): AsymmetricGetPublicKeyResponse {
    return {
      $type: AsymmetricGetPublicKeyResponse.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      publicKey: isSet(object.publicKey) ? globalThis.String(object.publicKey) : "",
    };
  },

  toJSON(message: AsymmetricGetPublicKeyResponse): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.publicKey !== "") {
      obj.publicKey = message.publicKey;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricGetPublicKeyResponse>, I>>(base?: I): AsymmetricGetPublicKeyResponse {
    return AsymmetricGetPublicKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricGetPublicKeyResponse>, I>>(
    object: I,
  ): AsymmetricGetPublicKeyResponse {
    const message = createBaseAsymmetricGetPublicKeyResponse();
    message.keyId = object.keyId ?? "";
    message.publicKey = object.publicKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(AsymmetricGetPublicKeyResponse.$type, AsymmetricGetPublicKeyResponse);

/** Set of methods that perform asymmetric signature. */
export type AsymmetricSignatureCryptoServiceService = typeof AsymmetricSignatureCryptoServiceService;
export const AsymmetricSignatureCryptoServiceService = {
  /** Signs data specified KMS key. */
  sign: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/Sign",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AsymmetricSignRequest) => Buffer.from(AsymmetricSignRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AsymmetricSignRequest.decode(value),
    responseSerialize: (value: AsymmetricSignResponse) => Buffer.from(AsymmetricSignResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AsymmetricSignResponse.decode(value),
  },
  /** Signs hash value specified KMS key. */
  signHash: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/SignHash",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AsymmetricSignHashRequest) =>
      Buffer.from(AsymmetricSignHashRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AsymmetricSignHashRequest.decode(value),
    responseSerialize: (value: AsymmetricSignHashResponse) =>
      Buffer.from(AsymmetricSignHashResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AsymmetricSignHashResponse.decode(value),
  },
  /** Gets value of public key. */
  getPublicKey: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/GetPublicKey",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AsymmetricGetPublicKeyRequest) =>
      Buffer.from(AsymmetricGetPublicKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AsymmetricGetPublicKeyRequest.decode(value),
    responseSerialize: (value: AsymmetricGetPublicKeyResponse) =>
      Buffer.from(AsymmetricGetPublicKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AsymmetricGetPublicKeyResponse.decode(value),
  },
} as const;

export interface AsymmetricSignatureCryptoServiceServer extends UntypedServiceImplementation {
  /** Signs data specified KMS key. */
  sign: handleUnaryCall<AsymmetricSignRequest, AsymmetricSignResponse>;
  /** Signs hash value specified KMS key. */
  signHash: handleUnaryCall<AsymmetricSignHashRequest, AsymmetricSignHashResponse>;
  /** Gets value of public key. */
  getPublicKey: handleUnaryCall<AsymmetricGetPublicKeyRequest, AsymmetricGetPublicKeyResponse>;
}

export interface AsymmetricSignatureCryptoServiceClient extends Client {
  /** Signs data specified KMS key. */
  sign(
    request: AsymmetricSignRequest,
    callback: (error: ServiceError | null, response: AsymmetricSignResponse) => void,
  ): ClientUnaryCall;
  sign(
    request: AsymmetricSignRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AsymmetricSignResponse) => void,
  ): ClientUnaryCall;
  sign(
    request: AsymmetricSignRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AsymmetricSignResponse) => void,
  ): ClientUnaryCall;
  /** Signs hash value specified KMS key. */
  signHash(
    request: AsymmetricSignHashRequest,
    callback: (error: ServiceError | null, response: AsymmetricSignHashResponse) => void,
  ): ClientUnaryCall;
  signHash(
    request: AsymmetricSignHashRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AsymmetricSignHashResponse) => void,
  ): ClientUnaryCall;
  signHash(
    request: AsymmetricSignHashRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AsymmetricSignHashResponse) => void,
  ): ClientUnaryCall;
  /** Gets value of public key. */
  getPublicKey(
    request: AsymmetricGetPublicKeyRequest,
    callback: (error: ServiceError | null, response: AsymmetricGetPublicKeyResponse) => void,
  ): ClientUnaryCall;
  getPublicKey(
    request: AsymmetricGetPublicKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AsymmetricGetPublicKeyResponse) => void,
  ): ClientUnaryCall;
  getPublicKey(
    request: AsymmetricGetPublicKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AsymmetricGetPublicKeyResponse) => void,
  ): ClientUnaryCall;
}

export const AsymmetricSignatureCryptoServiceClient = makeGenericClientConstructor(
  AsymmetricSignatureCryptoServiceService,
  "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): AsymmetricSignatureCryptoServiceClient;
  service: typeof AsymmetricSignatureCryptoServiceService;
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
