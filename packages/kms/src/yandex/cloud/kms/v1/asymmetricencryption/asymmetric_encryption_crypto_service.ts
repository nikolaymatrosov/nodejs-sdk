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

export const protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";

export interface AsymmetricDecryptRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest";
  /** ID of the asymmetric KMS key to use for decryption. */
  keyId: string;
  /**
   * Ciphertext to be decrypted.
   * Should be encoded with base64.
   */
  ciphertext: Buffer;
}

export interface AsymmetricDecryptResponse {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse";
  /** ID of the asymmetric KMS key that was used for decryption. */
  keyId: string;
  /** Decrypted plaintext. */
  plaintext: Buffer;
}

export interface AsymmetricGetPublicKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest";
  /** ID of the asymmetric KMS key to be used for public key retrieval. */
  keyId: string;
}

export interface AsymmetricGetPublicKeyResponse {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse";
  /** ID of the asymmetric KMS key to get public key of. */
  keyId: string;
  /**
   * Public key value.
   * The value is a PEM-encoded X.509 public key, also known as SubjectPublicKeyInfo (SPKI),
   * as defined in RFC 5280.
   */
  publicKey: string;
}

function createBaseAsymmetricDecryptRequest(): AsymmetricDecryptRequest {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest",
    keyId: "",
    ciphertext: Buffer.alloc(0),
  };
}

export const AsymmetricDecryptRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest" as const,

  encode(message: AsymmetricDecryptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.ciphertext.length !== 0) {
      writer.uint32(18).bytes(message.ciphertext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricDecryptRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricDecryptRequest();
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

          message.ciphertext = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsymmetricDecryptRequest {
    return {
      $type: AsymmetricDecryptRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      ciphertext: isSet(object.ciphertext) ? Buffer.from(bytesFromBase64(object.ciphertext)) : Buffer.alloc(0),
    };
  },

  toJSON(message: AsymmetricDecryptRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.ciphertext.length !== 0) {
      obj.ciphertext = base64FromBytes(message.ciphertext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricDecryptRequest>, I>>(base?: I): AsymmetricDecryptRequest {
    return AsymmetricDecryptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricDecryptRequest>, I>>(object: I): AsymmetricDecryptRequest {
    const message = createBaseAsymmetricDecryptRequest();
    message.keyId = object.keyId ?? "";
    message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AsymmetricDecryptRequest.$type, AsymmetricDecryptRequest);

function createBaseAsymmetricDecryptResponse(): AsymmetricDecryptResponse {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse",
    keyId: "",
    plaintext: Buffer.alloc(0),
  };
}

export const AsymmetricDecryptResponse = {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse" as const,

  encode(message: AsymmetricDecryptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.plaintext.length !== 0) {
      writer.uint32(18).bytes(message.plaintext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricDecryptResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricDecryptResponse();
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

          message.plaintext = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsymmetricDecryptResponse {
    return {
      $type: AsymmetricDecryptResponse.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      plaintext: isSet(object.plaintext) ? Buffer.from(bytesFromBase64(object.plaintext)) : Buffer.alloc(0),
    };
  },

  toJSON(message: AsymmetricDecryptResponse): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.plaintext.length !== 0) {
      obj.plaintext = base64FromBytes(message.plaintext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricDecryptResponse>, I>>(base?: I): AsymmetricDecryptResponse {
    return AsymmetricDecryptResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricDecryptResponse>, I>>(object: I): AsymmetricDecryptResponse {
    const message = createBaseAsymmetricDecryptResponse();
    message.keyId = object.keyId ?? "";
    message.plaintext = object.plaintext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AsymmetricDecryptResponse.$type, AsymmetricDecryptResponse);

function createBaseAsymmetricGetPublicKeyRequest(): AsymmetricGetPublicKeyRequest {
  return { $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest", keyId: "" };
}

export const AsymmetricGetPublicKeyRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest" as const,

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
  return { $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse", keyId: "", publicKey: "" };
}

export const AsymmetricGetPublicKeyResponse = {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse" as const,

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

/** Set of methods that perform asymmetric decryption. */
export type AsymmetricEncryptionCryptoServiceService = typeof AsymmetricEncryptionCryptoServiceService;
export const AsymmetricEncryptionCryptoServiceService = {
  /** Decrypts the given ciphertext with the specified key. */
  decrypt: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/Decrypt",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AsymmetricDecryptRequest) => Buffer.from(AsymmetricDecryptRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AsymmetricDecryptRequest.decode(value),
    responseSerialize: (value: AsymmetricDecryptResponse) =>
      Buffer.from(AsymmetricDecryptResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AsymmetricDecryptResponse.decode(value),
  },
  /** Gets value of public key. */
  getPublicKey: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/GetPublicKey",
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

export interface AsymmetricEncryptionCryptoServiceServer extends UntypedServiceImplementation {
  /** Decrypts the given ciphertext with the specified key. */
  decrypt: handleUnaryCall<AsymmetricDecryptRequest, AsymmetricDecryptResponse>;
  /** Gets value of public key. */
  getPublicKey: handleUnaryCall<AsymmetricGetPublicKeyRequest, AsymmetricGetPublicKeyResponse>;
}

export interface AsymmetricEncryptionCryptoServiceClient extends Client {
  /** Decrypts the given ciphertext with the specified key. */
  decrypt(
    request: AsymmetricDecryptRequest,
    callback: (error: ServiceError | null, response: AsymmetricDecryptResponse) => void,
  ): ClientUnaryCall;
  decrypt(
    request: AsymmetricDecryptRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AsymmetricDecryptResponse) => void,
  ): ClientUnaryCall;
  decrypt(
    request: AsymmetricDecryptRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AsymmetricDecryptResponse) => void,
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

export const AsymmetricEncryptionCryptoServiceClient = makeGenericClientConstructor(
  AsymmetricEncryptionCryptoServiceService,
  "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): AsymmetricEncryptionCryptoServiceClient;
  service: typeof AsymmetricEncryptionCryptoServiceService;
  serviceName: string;
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
