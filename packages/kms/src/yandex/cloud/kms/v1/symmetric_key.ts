/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.kms.v1";

/** Supported symmetric encryption algorithms. */
export enum SymmetricAlgorithm {
  SYMMETRIC_ALGORITHM_UNSPECIFIED = 0,
  /** AES_128 - AES algorithm with 128-bit keys. */
  AES_128 = 1,
  /** AES_192 - AES algorithm with 192-bit keys. */
  AES_192 = 2,
  /** AES_256 - AES algorithm with 256-bit keys. */
  AES_256 = 3,
  /** AES_256_HSM - AES algorithm with 256-bit keys hosted by HSM */
  AES_256_HSM = 4,
  UNRECOGNIZED = -1,
}

export function symmetricAlgorithmFromJSON(object: any): SymmetricAlgorithm {
  switch (object) {
    case 0:
    case "SYMMETRIC_ALGORITHM_UNSPECIFIED":
      return SymmetricAlgorithm.SYMMETRIC_ALGORITHM_UNSPECIFIED;
    case 1:
    case "AES_128":
      return SymmetricAlgorithm.AES_128;
    case 2:
    case "AES_192":
      return SymmetricAlgorithm.AES_192;
    case 3:
    case "AES_256":
      return SymmetricAlgorithm.AES_256;
    case 4:
    case "AES_256_HSM":
      return SymmetricAlgorithm.AES_256_HSM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SymmetricAlgorithm.UNRECOGNIZED;
  }
}

export function symmetricAlgorithmToJSON(object: SymmetricAlgorithm): string {
  switch (object) {
    case SymmetricAlgorithm.SYMMETRIC_ALGORITHM_UNSPECIFIED:
      return "SYMMETRIC_ALGORITHM_UNSPECIFIED";
    case SymmetricAlgorithm.AES_128:
      return "AES_128";
    case SymmetricAlgorithm.AES_192:
      return "AES_192";
    case SymmetricAlgorithm.AES_256:
      return "AES_256";
    case SymmetricAlgorithm.AES_256_HSM:
      return "AES_256_HSM";
    case SymmetricAlgorithm.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A symmetric KMS key that may contain several versions of the cryptographic material. */
export interface SymmetricKey {
  $type: "yandex.cloud.kms.v1.SymmetricKey";
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
  status: SymmetricKey_Status;
  /**
   * Primary version of the key, used as the default for all encrypt/decrypt operations,
   * when no version ID is specified.
   */
  primaryVersion?:
    | SymmetricKeyVersion
    | undefined;
  /** Default encryption algorithm to be used with new versions of the key. */
  defaultAlgorithm: SymmetricAlgorithm;
  /**
   * Time of the last key rotation (time when the last version was created).
   * Empty if the key does not have versions yet.
   */
  rotatedAt?:
    | Date
    | undefined;
  /** Time period between automatic key rotations. */
  rotationPeriod?:
    | Duration
    | undefined;
  /** Flag that inhibits deletion of the key */
  deletionProtection: boolean;
}

export enum SymmetricKey_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - The key is being created. */
  CREATING = 1,
  /**
   * ACTIVE - The key is active and can be used for encryption and decryption.
   * Can be set to INACTIVE using the [SymmetricKeyService.Update] method.
   */
  ACTIVE = 2,
  /**
   * INACTIVE - The key is inactive and unusable.
   * Can be set to ACTIVE using the [SymmetricKeyService.Update] method.
   */
  INACTIVE = 3,
  UNRECOGNIZED = -1,
}

export function symmetricKey_StatusFromJSON(object: any): SymmetricKey_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return SymmetricKey_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return SymmetricKey_Status.CREATING;
    case 2:
    case "ACTIVE":
      return SymmetricKey_Status.ACTIVE;
    case 3:
    case "INACTIVE":
      return SymmetricKey_Status.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SymmetricKey_Status.UNRECOGNIZED;
  }
}

export function symmetricKey_StatusToJSON(object: SymmetricKey_Status): string {
  switch (object) {
    case SymmetricKey_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case SymmetricKey_Status.CREATING:
      return "CREATING";
    case SymmetricKey_Status.ACTIVE:
      return "ACTIVE";
    case SymmetricKey_Status.INACTIVE:
      return "INACTIVE";
    case SymmetricKey_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SymmetricKey_LabelsEntry {
  $type: "yandex.cloud.kms.v1.SymmetricKey.LabelsEntry";
  key: string;
  value: string;
}

/** Symmetric KMS key version: metadata about actual cryptographic data. */
export interface SymmetricKeyVersion {
  $type: "yandex.cloud.kms.v1.SymmetricKeyVersion";
  /** ID of the key version. */
  id: string;
  /** ID of the symmetric KMS key that the version belongs to. */
  keyId: string;
  /** Status of the key version. */
  status: SymmetricKeyVersion_Status;
  /** Encryption algorithm that should be used when using the key version to encrypt plaintext. */
  algorithm: SymmetricAlgorithm;
  /** Time when the key version was created. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Indication of a primary version, that is to be used by default for all cryptographic
   * operations that don't have a key version explicitly specified.
   */
  primary: boolean;
  /**
   * Time when the key version is going to be destroyed. Empty unless the status
   * is `SCHEDULED_FOR_DESTRUCTION`.
   */
  destroyAt?:
    | Date
    | undefined;
  /** Indication of the version that is hosted by HSM. */
  hostedByHsm: boolean;
}

/** Possible version status. */
export enum SymmetricKeyVersion_Status {
  STATUS_UNSPECIFIED = 0,
  /** ACTIVE - The version is active and can be used for encryption and decryption. */
  ACTIVE = 1,
  /**
   * SCHEDULED_FOR_DESTRUCTION - The version is scheduled for destruction, the time when it will be destroyed
   * is specified in the [SymmetricKeyVersion.destroy_at] field.
   */
  SCHEDULED_FOR_DESTRUCTION = 2,
  /** DESTROYED - The version is destroyed and cannot be recovered. */
  DESTROYED = 3,
  UNRECOGNIZED = -1,
}

export function symmetricKeyVersion_StatusFromJSON(object: any): SymmetricKeyVersion_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return SymmetricKeyVersion_Status.STATUS_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return SymmetricKeyVersion_Status.ACTIVE;
    case 2:
    case "SCHEDULED_FOR_DESTRUCTION":
      return SymmetricKeyVersion_Status.SCHEDULED_FOR_DESTRUCTION;
    case 3:
    case "DESTROYED":
      return SymmetricKeyVersion_Status.DESTROYED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SymmetricKeyVersion_Status.UNRECOGNIZED;
  }
}

export function symmetricKeyVersion_StatusToJSON(object: SymmetricKeyVersion_Status): string {
  switch (object) {
    case SymmetricKeyVersion_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case SymmetricKeyVersion_Status.ACTIVE:
      return "ACTIVE";
    case SymmetricKeyVersion_Status.SCHEDULED_FOR_DESTRUCTION:
      return "SCHEDULED_FOR_DESTRUCTION";
    case SymmetricKeyVersion_Status.DESTROYED:
      return "DESTROYED";
    case SymmetricKeyVersion_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseSymmetricKey(): SymmetricKey {
  return {
    $type: "yandex.cloud.kms.v1.SymmetricKey",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
    primaryVersion: undefined,
    defaultAlgorithm: 0,
    rotatedAt: undefined,
    rotationPeriod: undefined,
    deletionProtection: false,
  };
}

export const SymmetricKey = {
  $type: "yandex.cloud.kms.v1.SymmetricKey" as const,

  encode(message: SymmetricKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      SymmetricKey_LabelsEntry.encode(
        { $type: "yandex.cloud.kms.v1.SymmetricKey.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.primaryVersion !== undefined) {
      SymmetricKeyVersion.encode(message.primaryVersion, writer.uint32(66).fork()).ldelim();
    }
    if (message.defaultAlgorithm !== 0) {
      writer.uint32(72).int32(message.defaultAlgorithm);
    }
    if (message.rotatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.rotatedAt), writer.uint32(82).fork()).ldelim();
    }
    if (message.rotationPeriod !== undefined) {
      Duration.encode(message.rotationPeriod, writer.uint32(90).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(96).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymmetricKey();
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

          const entry6 = SymmetricKey_LabelsEntry.decode(reader, reader.uint32());
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
          if (tag !== 66) {
            break;
          }

          message.primaryVersion = SymmetricKeyVersion.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.defaultAlgorithm = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.rotatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.rotationPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
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

  fromJSON(object: any): SymmetricKey {
    return {
      $type: SymmetricKey.$type,
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
      status: isSet(object.status) ? symmetricKey_StatusFromJSON(object.status) : 0,
      primaryVersion: isSet(object.primaryVersion) ? SymmetricKeyVersion.fromJSON(object.primaryVersion) : undefined,
      defaultAlgorithm: isSet(object.defaultAlgorithm) ? symmetricAlgorithmFromJSON(object.defaultAlgorithm) : 0,
      rotatedAt: isSet(object.rotatedAt) ? fromJsonTimestamp(object.rotatedAt) : undefined,
      rotationPeriod: isSet(object.rotationPeriod) ? Duration.fromJSON(object.rotationPeriod) : undefined,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: SymmetricKey): unknown {
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
      obj.status = symmetricKey_StatusToJSON(message.status);
    }
    if (message.primaryVersion !== undefined) {
      obj.primaryVersion = SymmetricKeyVersion.toJSON(message.primaryVersion);
    }
    if (message.defaultAlgorithm !== 0) {
      obj.defaultAlgorithm = symmetricAlgorithmToJSON(message.defaultAlgorithm);
    }
    if (message.rotatedAt !== undefined) {
      obj.rotatedAt = message.rotatedAt.toISOString();
    }
    if (message.rotationPeriod !== undefined) {
      obj.rotationPeriod = Duration.toJSON(message.rotationPeriod);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymmetricKey>, I>>(base?: I): SymmetricKey {
    return SymmetricKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SymmetricKey>, I>>(object: I): SymmetricKey {
    const message = createBaseSymmetricKey();
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
    message.primaryVersion = (object.primaryVersion !== undefined && object.primaryVersion !== null)
      ? SymmetricKeyVersion.fromPartial(object.primaryVersion)
      : undefined;
    message.defaultAlgorithm = object.defaultAlgorithm ?? 0;
    message.rotatedAt = object.rotatedAt ?? undefined;
    message.rotationPeriod = (object.rotationPeriod !== undefined && object.rotationPeriod !== null)
      ? Duration.fromPartial(object.rotationPeriod)
      : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(SymmetricKey.$type, SymmetricKey);

function createBaseSymmetricKey_LabelsEntry(): SymmetricKey_LabelsEntry {
  return { $type: "yandex.cloud.kms.v1.SymmetricKey.LabelsEntry", key: "", value: "" };
}

export const SymmetricKey_LabelsEntry = {
  $type: "yandex.cloud.kms.v1.SymmetricKey.LabelsEntry" as const,

  encode(message: SymmetricKey_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricKey_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymmetricKey_LabelsEntry();
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

  fromJSON(object: any): SymmetricKey_LabelsEntry {
    return {
      $type: SymmetricKey_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: SymmetricKey_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymmetricKey_LabelsEntry>, I>>(base?: I): SymmetricKey_LabelsEntry {
    return SymmetricKey_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SymmetricKey_LabelsEntry>, I>>(object: I): SymmetricKey_LabelsEntry {
    const message = createBaseSymmetricKey_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(SymmetricKey_LabelsEntry.$type, SymmetricKey_LabelsEntry);

function createBaseSymmetricKeyVersion(): SymmetricKeyVersion {
  return {
    $type: "yandex.cloud.kms.v1.SymmetricKeyVersion",
    id: "",
    keyId: "",
    status: 0,
    algorithm: 0,
    createdAt: undefined,
    primary: false,
    destroyAt: undefined,
    hostedByHsm: false,
  };
}

export const SymmetricKeyVersion = {
  $type: "yandex.cloud.kms.v1.SymmetricKeyVersion" as const,

  encode(message: SymmetricKeyVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.algorithm !== 0) {
      writer.uint32(32).int32(message.algorithm);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.primary === true) {
      writer.uint32(48).bool(message.primary);
    }
    if (message.destroyAt !== undefined) {
      Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.hostedByHsm === true) {
      writer.uint32(64).bool(message.hostedByHsm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricKeyVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymmetricKeyVersion();
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

          message.keyId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.algorithm = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.primary = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.destroyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.hostedByHsm = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SymmetricKeyVersion {
    return {
      $type: SymmetricKeyVersion.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      status: isSet(object.status) ? symmetricKeyVersion_StatusFromJSON(object.status) : 0,
      algorithm: isSet(object.algorithm) ? symmetricAlgorithmFromJSON(object.algorithm) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      primary: isSet(object.primary) ? globalThis.Boolean(object.primary) : false,
      destroyAt: isSet(object.destroyAt) ? fromJsonTimestamp(object.destroyAt) : undefined,
      hostedByHsm: isSet(object.hostedByHsm) ? globalThis.Boolean(object.hostedByHsm) : false,
    };
  },

  toJSON(message: SymmetricKeyVersion): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.status !== 0) {
      obj.status = symmetricKeyVersion_StatusToJSON(message.status);
    }
    if (message.algorithm !== 0) {
      obj.algorithm = symmetricAlgorithmToJSON(message.algorithm);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.primary === true) {
      obj.primary = message.primary;
    }
    if (message.destroyAt !== undefined) {
      obj.destroyAt = message.destroyAt.toISOString();
    }
    if (message.hostedByHsm === true) {
      obj.hostedByHsm = message.hostedByHsm;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymmetricKeyVersion>, I>>(base?: I): SymmetricKeyVersion {
    return SymmetricKeyVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SymmetricKeyVersion>, I>>(object: I): SymmetricKeyVersion {
    const message = createBaseSymmetricKeyVersion();
    message.id = object.id ?? "";
    message.keyId = object.keyId ?? "";
    message.status = object.status ?? 0;
    message.algorithm = object.algorithm ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.primary = object.primary ?? false;
    message.destroyAt = object.destroyAt ?? undefined;
    message.hostedByHsm = object.hostedByHsm ?? false;
    return message;
  },
};

messageTypeRegistry.set(SymmetricKeyVersion.$type, SymmetricKeyVersion);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
