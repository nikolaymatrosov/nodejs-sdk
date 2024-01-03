/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";

/** Supported asymmetric signature algorithms. */
export enum AsymmetricSignatureAlgorithm {
  ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED = 0,
  /** RSA_2048_SIGN_PSS_SHA_256 - RSA-2048 signature with PSS padding and SHA-256 */
  RSA_2048_SIGN_PSS_SHA_256 = 1,
  /** RSA_2048_SIGN_PSS_SHA_384 - RSA-2048 signature with PSS padding and SHA-384 */
  RSA_2048_SIGN_PSS_SHA_384 = 2,
  /** RSA_2048_SIGN_PSS_SHA_512 - RSA-2048 signature with PSS padding and SHA-512 */
  RSA_2048_SIGN_PSS_SHA_512 = 3,
  /** RSA_3072_SIGN_PSS_SHA_256 - RSA-3072 signature with PSS padding and SHA-256 */
  RSA_3072_SIGN_PSS_SHA_256 = 4,
  /** RSA_3072_SIGN_PSS_SHA_384 - RSA-3072 signature with PSS padding and SHA-384 */
  RSA_3072_SIGN_PSS_SHA_384 = 5,
  /** RSA_3072_SIGN_PSS_SHA_512 - RSA-3072 signature with PSS padding and SHA-512 */
  RSA_3072_SIGN_PSS_SHA_512 = 6,
  /** RSA_4096_SIGN_PSS_SHA_256 - RSA-4096 signature with PSS padding and SHA-256 */
  RSA_4096_SIGN_PSS_SHA_256 = 7,
  /** RSA_4096_SIGN_PSS_SHA_384 - RSA-4096 signature with PSS padding and SHA-384 */
  RSA_4096_SIGN_PSS_SHA_384 = 8,
  /** RSA_4096_SIGN_PSS_SHA_512 - RSA-4096 signature with PSS padding and SHA-512 */
  RSA_4096_SIGN_PSS_SHA_512 = 9,
  /** ECDSA_NIST_P256_SHA_256 - ECDSA signature with NIST P-256 curve and SHA-256 */
  ECDSA_NIST_P256_SHA_256 = 10,
  /** ECDSA_NIST_P384_SHA_384 - ECDSA signature with NIST P-384 curve and SHA-384 */
  ECDSA_NIST_P384_SHA_384 = 11,
  /** ECDSA_NIST_P521_SHA_512 - ECDSA signature with NIST P-521 curve and SHA-512 */
  ECDSA_NIST_P521_SHA_512 = 12,
  /** ECDSA_SECP256_K1_SHA_256 - ECDSA signature with SECP256_K1 curve and SHA-256 */
  ECDSA_SECP256_K1_SHA_256 = 13,
  UNRECOGNIZED = -1,
}

export function asymmetricSignatureAlgorithmFromJSON(object: any): AsymmetricSignatureAlgorithm {
  switch (object) {
    case 0:
    case "ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED":
      return AsymmetricSignatureAlgorithm.ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED;
    case 1:
    case "RSA_2048_SIGN_PSS_SHA_256":
      return AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_256;
    case 2:
    case "RSA_2048_SIGN_PSS_SHA_384":
      return AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_384;
    case 3:
    case "RSA_2048_SIGN_PSS_SHA_512":
      return AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_512;
    case 4:
    case "RSA_3072_SIGN_PSS_SHA_256":
      return AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_256;
    case 5:
    case "RSA_3072_SIGN_PSS_SHA_384":
      return AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_384;
    case 6:
    case "RSA_3072_SIGN_PSS_SHA_512":
      return AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_512;
    case 7:
    case "RSA_4096_SIGN_PSS_SHA_256":
      return AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_256;
    case 8:
    case "RSA_4096_SIGN_PSS_SHA_384":
      return AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_384;
    case 9:
    case "RSA_4096_SIGN_PSS_SHA_512":
      return AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_512;
    case 10:
    case "ECDSA_NIST_P256_SHA_256":
      return AsymmetricSignatureAlgorithm.ECDSA_NIST_P256_SHA_256;
    case 11:
    case "ECDSA_NIST_P384_SHA_384":
      return AsymmetricSignatureAlgorithm.ECDSA_NIST_P384_SHA_384;
    case 12:
    case "ECDSA_NIST_P521_SHA_512":
      return AsymmetricSignatureAlgorithm.ECDSA_NIST_P521_SHA_512;
    case 13:
    case "ECDSA_SECP256_K1_SHA_256":
      return AsymmetricSignatureAlgorithm.ECDSA_SECP256_K1_SHA_256;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AsymmetricSignatureAlgorithm.UNRECOGNIZED;
  }
}

export function asymmetricSignatureAlgorithmToJSON(object: AsymmetricSignatureAlgorithm): string {
  switch (object) {
    case AsymmetricSignatureAlgorithm.ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED:
      return "ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED";
    case AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_256:
      return "RSA_2048_SIGN_PSS_SHA_256";
    case AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_384:
      return "RSA_2048_SIGN_PSS_SHA_384";
    case AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_512:
      return "RSA_2048_SIGN_PSS_SHA_512";
    case AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_256:
      return "RSA_3072_SIGN_PSS_SHA_256";
    case AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_384:
      return "RSA_3072_SIGN_PSS_SHA_384";
    case AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_512:
      return "RSA_3072_SIGN_PSS_SHA_512";
    case AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_256:
      return "RSA_4096_SIGN_PSS_SHA_256";
    case AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_384:
      return "RSA_4096_SIGN_PSS_SHA_384";
    case AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_512:
      return "RSA_4096_SIGN_PSS_SHA_512";
    case AsymmetricSignatureAlgorithm.ECDSA_NIST_P256_SHA_256:
      return "ECDSA_NIST_P256_SHA_256";
    case AsymmetricSignatureAlgorithm.ECDSA_NIST_P384_SHA_384:
      return "ECDSA_NIST_P384_SHA_384";
    case AsymmetricSignatureAlgorithm.ECDSA_NIST_P521_SHA_512:
      return "ECDSA_NIST_P521_SHA_512";
    case AsymmetricSignatureAlgorithm.ECDSA_SECP256_K1_SHA_256:
      return "ECDSA_SECP256_K1_SHA_256";
    case AsymmetricSignatureAlgorithm.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** An asymmetric KMS key that may contain several versions of the cryptographic material. */
export interface AsymmetricSignatureKey {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey";
  /** ID of the key. */
  id: string;
  /** ID of the folder that the key belongs to. */
  folderId: string;
  /** Time when the key was created. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the key. */
  name: string;
  /** Description of the key. */
  description: string;
  /** Custom labels for the key as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** Current status of the key. */
  status: AsymmetricSignatureKey_Status;
  /** Signature Algorithm ID. */
  signatureAlgorithm: AsymmetricSignatureAlgorithm;
  /** Flag that inhibits deletion of the key */
  deletionProtection: boolean;
}

export enum AsymmetricSignatureKey_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - The key is being created. */
  CREATING = 1,
  /**
   * ACTIVE - The key is active and can be used for encryption and decryption or signature and verification.
   * Can be set to INACTIVE using the [AsymmetricKeyService.Update] method.
   */
  ACTIVE = 2,
  /**
   * INACTIVE - The key is inactive and unusable.
   * Can be set to ACTIVE using the [AsymmetricKeyService.Update] method.
   */
  INACTIVE = 3,
  UNRECOGNIZED = -1,
}

export function asymmetricSignatureKey_StatusFromJSON(object: any): AsymmetricSignatureKey_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return AsymmetricSignatureKey_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return AsymmetricSignatureKey_Status.CREATING;
    case 2:
    case "ACTIVE":
      return AsymmetricSignatureKey_Status.ACTIVE;
    case 3:
    case "INACTIVE":
      return AsymmetricSignatureKey_Status.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AsymmetricSignatureKey_Status.UNRECOGNIZED;
  }
}

export function asymmetricSignatureKey_StatusToJSON(object: AsymmetricSignatureKey_Status): string {
  switch (object) {
    case AsymmetricSignatureKey_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case AsymmetricSignatureKey_Status.CREATING:
      return "CREATING";
    case AsymmetricSignatureKey_Status.ACTIVE:
      return "ACTIVE";
    case AsymmetricSignatureKey_Status.INACTIVE:
      return "INACTIVE";
    case AsymmetricSignatureKey_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AsymmetricSignatureKey_LabelsEntry {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry";
  key: string;
  value: string;
}

function createBaseAsymmetricSignatureKey(): AsymmetricSignatureKey {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
    signatureAlgorithm: 0,
    deletionProtection: false,
  };
}

export const AsymmetricSignatureKey = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey" as const,

  encode(message: AsymmetricSignatureKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      AsymmetricSignatureKey_LabelsEntry.encode({
        $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.signatureAlgorithm !== 0) {
      writer.uint32(64).int32(message.signatureAlgorithm);
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricSignatureKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricSignatureKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = AsymmetricSignatureKey_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.signatureAlgorithm = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignatureKey {
    return {
      $type: AsymmetricSignatureKey.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      status: isSet(object.status) ? asymmetricSignatureKey_StatusFromJSON(object.status) : 0,
      signatureAlgorithm: isSet(object.signatureAlgorithm)
        ? asymmetricSignatureAlgorithmFromJSON(object.signatureAlgorithm)
        : 0,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: AsymmetricSignatureKey): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.status !== 0) {
      obj.status = asymmetricSignatureKey_StatusToJSON(message.status);
    }
    if (message.signatureAlgorithm !== 0) {
      obj.signatureAlgorithm = asymmetricSignatureAlgorithmToJSON(message.signatureAlgorithm);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricSignatureKey>, I>>(base?: I): AsymmetricSignatureKey {
    return AsymmetricSignatureKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricSignatureKey>, I>>(object: I): AsymmetricSignatureKey {
    const message = createBaseAsymmetricSignatureKey();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.status = object.status ?? 0;
    message.signatureAlgorithm = object.signatureAlgorithm ?? 0;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(AsymmetricSignatureKey.$type, AsymmetricSignatureKey);

function createBaseAsymmetricSignatureKey_LabelsEntry(): AsymmetricSignatureKey_LabelsEntry {
  return { $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry", key: "", value: "" };
}

export const AsymmetricSignatureKey_LabelsEntry = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry" as const,

  encode(message: AsymmetricSignatureKey_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsymmetricSignatureKey_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsymmetricSignatureKey_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignatureKey_LabelsEntry {
    return {
      $type: AsymmetricSignatureKey_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: AsymmetricSignatureKey_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsymmetricSignatureKey_LabelsEntry>, I>>(
    base?: I,
  ): AsymmetricSignatureKey_LabelsEntry {
    return AsymmetricSignatureKey_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsymmetricSignatureKey_LabelsEntry>, I>>(
    object: I,
  ): AsymmetricSignatureKey_LabelsEntry {
    const message = createBaseAsymmetricSignatureKey_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(AsymmetricSignatureKey_LabelsEntry.$type, AsymmetricSignatureKey_LabelsEntry);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
