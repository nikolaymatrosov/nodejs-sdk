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
import { SymmetricAlgorithm, symmetricAlgorithmFromJSON, symmetricAlgorithmToJSON } from "./symmetric_key";

export const protobufPackage = "yandex.cloud.kms.v1";

export interface SymmetricEncryptRequest {
  $type: "yandex.cloud.kms.v1.SymmetricEncryptRequest";
  /** ID of the symmetric KMS key to use for encryption. */
  keyId: string;
  /**
   * ID of the key version to encrypt plaintext with.
   * Defaults to the primary version if not specified.
   */
  versionId: string;
  /**
   * Additional authenticated data (AAD context), optional.
   * If specified, this data will be required for decryption with the [SymmetricDecryptRequest].
   * Should be encoded with base64.
   */
  aadContext: Buffer;
  /**
   * Plaintext to be encrypted.
   * Should be encoded with base64.
   */
  plaintext: Buffer;
}

export interface SymmetricEncryptResponse {
  $type: "yandex.cloud.kms.v1.SymmetricEncryptResponse";
  /** ID of the symmetric KMS key that was used for encryption. */
  keyId: string;
  /** ID of the key version that was used for encryption. */
  versionId: string;
  /** Resulting ciphertext. */
  ciphertext: Buffer;
}

export interface SymmetricDecryptRequest {
  $type: "yandex.cloud.kms.v1.SymmetricDecryptRequest";
  /** ID of the symmetric KMS key to use for decryption. */
  keyId: string;
  /**
   * Additional authenticated data, must be the same as was provided
   * in the corresponding [SymmetricEncryptRequest].
   * Should be encoded with base64.
   */
  aadContext: Buffer;
  /**
   * Ciphertext to be decrypted.
   * Should be encoded with base64.
   */
  ciphertext: Buffer;
}

export interface SymmetricDecryptResponse {
  $type: "yandex.cloud.kms.v1.SymmetricDecryptResponse";
  /** ID of the symmetric KMS key that was used for decryption. */
  keyId: string;
  /** ID of the key version that was used for decryption. */
  versionId: string;
  /** Decrypted plaintext. */
  plaintext: Buffer;
}

export interface GenerateDataKeyRequest {
  $type: "yandex.cloud.kms.v1.GenerateDataKeyRequest";
  /** ID of the symmetric KMS key that the generated data key should be encrypted with. */
  keyId: string;
  /**
   * ID of the key version to encrypt the generated data key with.
   * Defaults to the primary version if not specified.
   */
  versionId: string;
  /**
   * Additional authenticated data (AAD context), optional.
   * If specified, this data will be required for decryption with the [SymmetricDecryptRequest].
   * Should be encoded with base64.
   */
  aadContext: Buffer;
  /** Encryption algorithm and key length for the generated data key. */
  dataKeySpec: SymmetricAlgorithm;
  /**
   * If `true`, the method won't return the data key as plaintext.
   * Default value is `false`.
   */
  skipPlaintext: boolean;
}

export interface GenerateDataKeyResponse {
  $type: "yandex.cloud.kms.v1.GenerateDataKeyResponse";
  /** ID of the symmetric KMS key that was used to encrypt the generated data key. */
  keyId: string;
  /** ID of the key version that was used for encryption. */
  versionId: string;
  /**
   * Generated data key as plaintext.
   * The field is empty, if the [GenerateDataKeyRequest.skip_plaintext] parameter
   * was set to `true`.
   */
  dataKeyPlaintext: Buffer;
  /** The encrypted data key. */
  dataKeyCiphertext: Buffer;
}

export interface SymmetricReEncryptRequest {
  $type: "yandex.cloud.kms.v1.SymmetricReEncryptRequest";
  /** ID of the new key to be used for encryption. */
  keyId: string;
  /**
   * ID of the version of the new key to be used for encryption.
   * Defaults to the primary version if not specified.
   */
  versionId: string;
  /**
   * Additional authenticated data to be required for decryption.
   * Should be encoded with base64.
   */
  aadContext: Buffer;
  /** ID of the key that the ciphertext is currently encrypted with. May be the same as for the new key. */
  sourceKeyId: string;
  /**
   * Additional authenticated data provided with the initial encryption request.
   * Should be encoded with base64.
   */
  sourceAadContext: Buffer;
  /**
   * Ciphertext to re-encrypt.
   * Should be encoded with base64.
   */
  ciphertext: Buffer;
}

export interface SymmetricReEncryptResponse {
  $type: "yandex.cloud.kms.v1.SymmetricReEncryptResponse";
  /** ID of the key that the ciphertext is encrypted with now. */
  keyId: string;
  /** ID of key version that was used for encryption. */
  versionId: string;
  /** ID of the key that the ciphertext was encrypted with previously. */
  sourceKeyId: string;
  /** ID of the key version that was used to decrypt the re-encrypted ciphertext. */
  sourceVersionId: string;
  /** Resulting re-encrypted ciphertext. */
  ciphertext: Buffer;
}

function createBaseSymmetricEncryptRequest(): SymmetricEncryptRequest {
  return {
    $type: "yandex.cloud.kms.v1.SymmetricEncryptRequest",
    keyId: "",
    versionId: "",
    aadContext: Buffer.alloc(0),
    plaintext: Buffer.alloc(0),
  };
}

export const SymmetricEncryptRequest = {
  $type: "yandex.cloud.kms.v1.SymmetricEncryptRequest" as const,

  encode(message: SymmetricEncryptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.aadContext.length !== 0) {
      writer.uint32(26).bytes(message.aadContext);
    }
    if (message.plaintext.length !== 0) {
      writer.uint32(34).bytes(message.plaintext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricEncryptRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymmetricEncryptRequest();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.aadContext = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): SymmetricEncryptRequest {
    return {
      $type: SymmetricEncryptRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      aadContext: isSet(object.aadContext) ? Buffer.from(bytesFromBase64(object.aadContext)) : Buffer.alloc(0),
      plaintext: isSet(object.plaintext) ? Buffer.from(bytesFromBase64(object.plaintext)) : Buffer.alloc(0),
    };
  },

  toJSON(message: SymmetricEncryptRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.aadContext.length !== 0) {
      obj.aadContext = base64FromBytes(message.aadContext);
    }
    if (message.plaintext.length !== 0) {
      obj.plaintext = base64FromBytes(message.plaintext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymmetricEncryptRequest>, I>>(base?: I): SymmetricEncryptRequest {
    return SymmetricEncryptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SymmetricEncryptRequest>, I>>(object: I): SymmetricEncryptRequest {
    const message = createBaseSymmetricEncryptRequest();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.aadContext = object.aadContext ?? Buffer.alloc(0);
    message.plaintext = object.plaintext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(SymmetricEncryptRequest.$type, SymmetricEncryptRequest);

function createBaseSymmetricEncryptResponse(): SymmetricEncryptResponse {
  return {
    $type: "yandex.cloud.kms.v1.SymmetricEncryptResponse",
    keyId: "",
    versionId: "",
    ciphertext: Buffer.alloc(0),
  };
}

export const SymmetricEncryptResponse = {
  $type: "yandex.cloud.kms.v1.SymmetricEncryptResponse" as const,

  encode(message: SymmetricEncryptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.ciphertext.length !== 0) {
      writer.uint32(26).bytes(message.ciphertext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricEncryptResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymmetricEncryptResponse();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): SymmetricEncryptResponse {
    return {
      $type: SymmetricEncryptResponse.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      ciphertext: isSet(object.ciphertext) ? Buffer.from(bytesFromBase64(object.ciphertext)) : Buffer.alloc(0),
    };
  },

  toJSON(message: SymmetricEncryptResponse): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.ciphertext.length !== 0) {
      obj.ciphertext = base64FromBytes(message.ciphertext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymmetricEncryptResponse>, I>>(base?: I): SymmetricEncryptResponse {
    return SymmetricEncryptResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SymmetricEncryptResponse>, I>>(object: I): SymmetricEncryptResponse {
    const message = createBaseSymmetricEncryptResponse();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(SymmetricEncryptResponse.$type, SymmetricEncryptResponse);

function createBaseSymmetricDecryptRequest(): SymmetricDecryptRequest {
  return {
    $type: "yandex.cloud.kms.v1.SymmetricDecryptRequest",
    keyId: "",
    aadContext: Buffer.alloc(0),
    ciphertext: Buffer.alloc(0),
  };
}

export const SymmetricDecryptRequest = {
  $type: "yandex.cloud.kms.v1.SymmetricDecryptRequest" as const,

  encode(message: SymmetricDecryptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.aadContext.length !== 0) {
      writer.uint32(18).bytes(message.aadContext);
    }
    if (message.ciphertext.length !== 0) {
      writer.uint32(26).bytes(message.ciphertext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricDecryptRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymmetricDecryptRequest();
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

          message.aadContext = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): SymmetricDecryptRequest {
    return {
      $type: SymmetricDecryptRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      aadContext: isSet(object.aadContext) ? Buffer.from(bytesFromBase64(object.aadContext)) : Buffer.alloc(0),
      ciphertext: isSet(object.ciphertext) ? Buffer.from(bytesFromBase64(object.ciphertext)) : Buffer.alloc(0),
    };
  },

  toJSON(message: SymmetricDecryptRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.aadContext.length !== 0) {
      obj.aadContext = base64FromBytes(message.aadContext);
    }
    if (message.ciphertext.length !== 0) {
      obj.ciphertext = base64FromBytes(message.ciphertext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymmetricDecryptRequest>, I>>(base?: I): SymmetricDecryptRequest {
    return SymmetricDecryptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SymmetricDecryptRequest>, I>>(object: I): SymmetricDecryptRequest {
    const message = createBaseSymmetricDecryptRequest();
    message.keyId = object.keyId ?? "";
    message.aadContext = object.aadContext ?? Buffer.alloc(0);
    message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(SymmetricDecryptRequest.$type, SymmetricDecryptRequest);

function createBaseSymmetricDecryptResponse(): SymmetricDecryptResponse {
  return {
    $type: "yandex.cloud.kms.v1.SymmetricDecryptResponse",
    keyId: "",
    versionId: "",
    plaintext: Buffer.alloc(0),
  };
}

export const SymmetricDecryptResponse = {
  $type: "yandex.cloud.kms.v1.SymmetricDecryptResponse" as const,

  encode(message: SymmetricDecryptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.plaintext.length !== 0) {
      writer.uint32(26).bytes(message.plaintext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricDecryptResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymmetricDecryptResponse();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): SymmetricDecryptResponse {
    return {
      $type: SymmetricDecryptResponse.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      plaintext: isSet(object.plaintext) ? Buffer.from(bytesFromBase64(object.plaintext)) : Buffer.alloc(0),
    };
  },

  toJSON(message: SymmetricDecryptResponse): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.plaintext.length !== 0) {
      obj.plaintext = base64FromBytes(message.plaintext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymmetricDecryptResponse>, I>>(base?: I): SymmetricDecryptResponse {
    return SymmetricDecryptResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SymmetricDecryptResponse>, I>>(object: I): SymmetricDecryptResponse {
    const message = createBaseSymmetricDecryptResponse();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.plaintext = object.plaintext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(SymmetricDecryptResponse.$type, SymmetricDecryptResponse);

function createBaseGenerateDataKeyRequest(): GenerateDataKeyRequest {
  return {
    $type: "yandex.cloud.kms.v1.GenerateDataKeyRequest",
    keyId: "",
    versionId: "",
    aadContext: Buffer.alloc(0),
    dataKeySpec: 0,
    skipPlaintext: false,
  };
}

export const GenerateDataKeyRequest = {
  $type: "yandex.cloud.kms.v1.GenerateDataKeyRequest" as const,

  encode(message: GenerateDataKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.aadContext.length !== 0) {
      writer.uint32(26).bytes(message.aadContext);
    }
    if (message.dataKeySpec !== 0) {
      writer.uint32(32).int32(message.dataKeySpec);
    }
    if (message.skipPlaintext === true) {
      writer.uint32(40).bool(message.skipPlaintext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDataKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDataKeyRequest();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.aadContext = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.dataKeySpec = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.skipPlaintext = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateDataKeyRequest {
    return {
      $type: GenerateDataKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      aadContext: isSet(object.aadContext) ? Buffer.from(bytesFromBase64(object.aadContext)) : Buffer.alloc(0),
      dataKeySpec: isSet(object.dataKeySpec) ? symmetricAlgorithmFromJSON(object.dataKeySpec) : 0,
      skipPlaintext: isSet(object.skipPlaintext) ? globalThis.Boolean(object.skipPlaintext) : false,
    };
  },

  toJSON(message: GenerateDataKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.aadContext.length !== 0) {
      obj.aadContext = base64FromBytes(message.aadContext);
    }
    if (message.dataKeySpec !== 0) {
      obj.dataKeySpec = symmetricAlgorithmToJSON(message.dataKeySpec);
    }
    if (message.skipPlaintext === true) {
      obj.skipPlaintext = message.skipPlaintext;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateDataKeyRequest>, I>>(base?: I): GenerateDataKeyRequest {
    return GenerateDataKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateDataKeyRequest>, I>>(object: I): GenerateDataKeyRequest {
    const message = createBaseGenerateDataKeyRequest();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.aadContext = object.aadContext ?? Buffer.alloc(0);
    message.dataKeySpec = object.dataKeySpec ?? 0;
    message.skipPlaintext = object.skipPlaintext ?? false;
    return message;
  },
};

messageTypeRegistry.set(GenerateDataKeyRequest.$type, GenerateDataKeyRequest);

function createBaseGenerateDataKeyResponse(): GenerateDataKeyResponse {
  return {
    $type: "yandex.cloud.kms.v1.GenerateDataKeyResponse",
    keyId: "",
    versionId: "",
    dataKeyPlaintext: Buffer.alloc(0),
    dataKeyCiphertext: Buffer.alloc(0),
  };
}

export const GenerateDataKeyResponse = {
  $type: "yandex.cloud.kms.v1.GenerateDataKeyResponse" as const,

  encode(message: GenerateDataKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.dataKeyPlaintext.length !== 0) {
      writer.uint32(26).bytes(message.dataKeyPlaintext);
    }
    if (message.dataKeyCiphertext.length !== 0) {
      writer.uint32(34).bytes(message.dataKeyCiphertext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDataKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDataKeyResponse();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dataKeyPlaintext = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dataKeyCiphertext = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateDataKeyResponse {
    return {
      $type: GenerateDataKeyResponse.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      dataKeyPlaintext: isSet(object.dataKeyPlaintext)
        ? Buffer.from(bytesFromBase64(object.dataKeyPlaintext))
        : Buffer.alloc(0),
      dataKeyCiphertext: isSet(object.dataKeyCiphertext)
        ? Buffer.from(bytesFromBase64(object.dataKeyCiphertext))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: GenerateDataKeyResponse): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.dataKeyPlaintext.length !== 0) {
      obj.dataKeyPlaintext = base64FromBytes(message.dataKeyPlaintext);
    }
    if (message.dataKeyCiphertext.length !== 0) {
      obj.dataKeyCiphertext = base64FromBytes(message.dataKeyCiphertext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateDataKeyResponse>, I>>(base?: I): GenerateDataKeyResponse {
    return GenerateDataKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateDataKeyResponse>, I>>(object: I): GenerateDataKeyResponse {
    const message = createBaseGenerateDataKeyResponse();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.dataKeyPlaintext = object.dataKeyPlaintext ?? Buffer.alloc(0);
    message.dataKeyCiphertext = object.dataKeyCiphertext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(GenerateDataKeyResponse.$type, GenerateDataKeyResponse);

function createBaseSymmetricReEncryptRequest(): SymmetricReEncryptRequest {
  return {
    $type: "yandex.cloud.kms.v1.SymmetricReEncryptRequest",
    keyId: "",
    versionId: "",
    aadContext: Buffer.alloc(0),
    sourceKeyId: "",
    sourceAadContext: Buffer.alloc(0),
    ciphertext: Buffer.alloc(0),
  };
}

export const SymmetricReEncryptRequest = {
  $type: "yandex.cloud.kms.v1.SymmetricReEncryptRequest" as const,

  encode(message: SymmetricReEncryptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.aadContext.length !== 0) {
      writer.uint32(26).bytes(message.aadContext);
    }
    if (message.sourceKeyId !== "") {
      writer.uint32(34).string(message.sourceKeyId);
    }
    if (message.sourceAadContext.length !== 0) {
      writer.uint32(42).bytes(message.sourceAadContext);
    }
    if (message.ciphertext.length !== 0) {
      writer.uint32(50).bytes(message.ciphertext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricReEncryptRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymmetricReEncryptRequest();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.aadContext = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sourceKeyId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sourceAadContext = reader.bytes() as Buffer;
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): SymmetricReEncryptRequest {
    return {
      $type: SymmetricReEncryptRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      aadContext: isSet(object.aadContext) ? Buffer.from(bytesFromBase64(object.aadContext)) : Buffer.alloc(0),
      sourceKeyId: isSet(object.sourceKeyId) ? globalThis.String(object.sourceKeyId) : "",
      sourceAadContext: isSet(object.sourceAadContext)
        ? Buffer.from(bytesFromBase64(object.sourceAadContext))
        : Buffer.alloc(0),
      ciphertext: isSet(object.ciphertext) ? Buffer.from(bytesFromBase64(object.ciphertext)) : Buffer.alloc(0),
    };
  },

  toJSON(message: SymmetricReEncryptRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.aadContext.length !== 0) {
      obj.aadContext = base64FromBytes(message.aadContext);
    }
    if (message.sourceKeyId !== "") {
      obj.sourceKeyId = message.sourceKeyId;
    }
    if (message.sourceAadContext.length !== 0) {
      obj.sourceAadContext = base64FromBytes(message.sourceAadContext);
    }
    if (message.ciphertext.length !== 0) {
      obj.ciphertext = base64FromBytes(message.ciphertext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymmetricReEncryptRequest>, I>>(base?: I): SymmetricReEncryptRequest {
    return SymmetricReEncryptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SymmetricReEncryptRequest>, I>>(object: I): SymmetricReEncryptRequest {
    const message = createBaseSymmetricReEncryptRequest();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.aadContext = object.aadContext ?? Buffer.alloc(0);
    message.sourceKeyId = object.sourceKeyId ?? "";
    message.sourceAadContext = object.sourceAadContext ?? Buffer.alloc(0);
    message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(SymmetricReEncryptRequest.$type, SymmetricReEncryptRequest);

function createBaseSymmetricReEncryptResponse(): SymmetricReEncryptResponse {
  return {
    $type: "yandex.cloud.kms.v1.SymmetricReEncryptResponse",
    keyId: "",
    versionId: "",
    sourceKeyId: "",
    sourceVersionId: "",
    ciphertext: Buffer.alloc(0),
  };
}

export const SymmetricReEncryptResponse = {
  $type: "yandex.cloud.kms.v1.SymmetricReEncryptResponse" as const,

  encode(message: SymmetricReEncryptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.sourceKeyId !== "") {
      writer.uint32(26).string(message.sourceKeyId);
    }
    if (message.sourceVersionId !== "") {
      writer.uint32(34).string(message.sourceVersionId);
    }
    if (message.ciphertext.length !== 0) {
      writer.uint32(42).bytes(message.ciphertext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricReEncryptResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymmetricReEncryptResponse();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sourceKeyId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sourceVersionId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): SymmetricReEncryptResponse {
    return {
      $type: SymmetricReEncryptResponse.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      sourceKeyId: isSet(object.sourceKeyId) ? globalThis.String(object.sourceKeyId) : "",
      sourceVersionId: isSet(object.sourceVersionId) ? globalThis.String(object.sourceVersionId) : "",
      ciphertext: isSet(object.ciphertext) ? Buffer.from(bytesFromBase64(object.ciphertext)) : Buffer.alloc(0),
    };
  },

  toJSON(message: SymmetricReEncryptResponse): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.sourceKeyId !== "") {
      obj.sourceKeyId = message.sourceKeyId;
    }
    if (message.sourceVersionId !== "") {
      obj.sourceVersionId = message.sourceVersionId;
    }
    if (message.ciphertext.length !== 0) {
      obj.ciphertext = base64FromBytes(message.ciphertext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymmetricReEncryptResponse>, I>>(base?: I): SymmetricReEncryptResponse {
    return SymmetricReEncryptResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SymmetricReEncryptResponse>, I>>(object: I): SymmetricReEncryptResponse {
    const message = createBaseSymmetricReEncryptResponse();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.sourceKeyId = object.sourceKeyId ?? "";
    message.sourceVersionId = object.sourceVersionId ?? "";
    message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(SymmetricReEncryptResponse.$type, SymmetricReEncryptResponse);

/** Set of methods that perform symmetric encryption and decryption. */
export type SymmetricCryptoServiceService = typeof SymmetricCryptoServiceService;
export const SymmetricCryptoServiceService = {
  /** Encrypts given plaintext with the specified key. */
  encrypt: {
    path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SymmetricEncryptRequest) => Buffer.from(SymmetricEncryptRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SymmetricEncryptRequest.decode(value),
    responseSerialize: (value: SymmetricEncryptResponse) =>
      Buffer.from(SymmetricEncryptResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SymmetricEncryptResponse.decode(value),
  },
  /** Decrypts the given ciphertext with the specified key. */
  decrypt: {
    path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SymmetricDecryptRequest) => Buffer.from(SymmetricDecryptRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SymmetricDecryptRequest.decode(value),
    responseSerialize: (value: SymmetricDecryptResponse) =>
      Buffer.from(SymmetricDecryptResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SymmetricDecryptResponse.decode(value),
  },
  /** Re-encrypts a ciphertext with the specified KMS key. */
  reEncrypt: {
    path: "/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SymmetricReEncryptRequest) =>
      Buffer.from(SymmetricReEncryptRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SymmetricReEncryptRequest.decode(value),
    responseSerialize: (value: SymmetricReEncryptResponse) =>
      Buffer.from(SymmetricReEncryptResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SymmetricReEncryptResponse.decode(value),
  },
  /**
   * Generates a new symmetric data encryption key (not a KMS key) and returns
   * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
   */
  generateDataKey: {
    path: "/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GenerateDataKeyRequest) => Buffer.from(GenerateDataKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GenerateDataKeyRequest.decode(value),
    responseSerialize: (value: GenerateDataKeyResponse) => Buffer.from(GenerateDataKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GenerateDataKeyResponse.decode(value),
  },
} as const;

export interface SymmetricCryptoServiceServer extends UntypedServiceImplementation {
  /** Encrypts given plaintext with the specified key. */
  encrypt: handleUnaryCall<SymmetricEncryptRequest, SymmetricEncryptResponse>;
  /** Decrypts the given ciphertext with the specified key. */
  decrypt: handleUnaryCall<SymmetricDecryptRequest, SymmetricDecryptResponse>;
  /** Re-encrypts a ciphertext with the specified KMS key. */
  reEncrypt: handleUnaryCall<SymmetricReEncryptRequest, SymmetricReEncryptResponse>;
  /**
   * Generates a new symmetric data encryption key (not a KMS key) and returns
   * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
   */
  generateDataKey: handleUnaryCall<GenerateDataKeyRequest, GenerateDataKeyResponse>;
}

export interface SymmetricCryptoServiceClient extends Client {
  /** Encrypts given plaintext with the specified key. */
  encrypt(
    request: SymmetricEncryptRequest,
    callback: (error: ServiceError | null, response: SymmetricEncryptResponse) => void,
  ): ClientUnaryCall;
  encrypt(
    request: SymmetricEncryptRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SymmetricEncryptResponse) => void,
  ): ClientUnaryCall;
  encrypt(
    request: SymmetricEncryptRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SymmetricEncryptResponse) => void,
  ): ClientUnaryCall;
  /** Decrypts the given ciphertext with the specified key. */
  decrypt(
    request: SymmetricDecryptRequest,
    callback: (error: ServiceError | null, response: SymmetricDecryptResponse) => void,
  ): ClientUnaryCall;
  decrypt(
    request: SymmetricDecryptRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SymmetricDecryptResponse) => void,
  ): ClientUnaryCall;
  decrypt(
    request: SymmetricDecryptRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SymmetricDecryptResponse) => void,
  ): ClientUnaryCall;
  /** Re-encrypts a ciphertext with the specified KMS key. */
  reEncrypt(
    request: SymmetricReEncryptRequest,
    callback: (error: ServiceError | null, response: SymmetricReEncryptResponse) => void,
  ): ClientUnaryCall;
  reEncrypt(
    request: SymmetricReEncryptRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SymmetricReEncryptResponse) => void,
  ): ClientUnaryCall;
  reEncrypt(
    request: SymmetricReEncryptRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SymmetricReEncryptResponse) => void,
  ): ClientUnaryCall;
  /**
   * Generates a new symmetric data encryption key (not a KMS key) and returns
   * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
   */
  generateDataKey(
    request: GenerateDataKeyRequest,
    callback: (error: ServiceError | null, response: GenerateDataKeyResponse) => void,
  ): ClientUnaryCall;
  generateDataKey(
    request: GenerateDataKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GenerateDataKeyResponse) => void,
  ): ClientUnaryCall;
  generateDataKey(
    request: GenerateDataKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GenerateDataKeyResponse) => void,
  ): ClientUnaryCall;
}

export const SymmetricCryptoServiceClient = makeGenericClientConstructor(
  SymmetricCryptoServiceService,
  "yandex.cloud.kms.v1.SymmetricCryptoService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): SymmetricCryptoServiceClient;
  service: typeof SymmetricCryptoServiceService;
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
