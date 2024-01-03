/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.lockbox.v1";

/** A secret that may contain several versions of the payload. */
export interface Secret {
  $type: "yandex.cloud.lockbox.v1.Secret";
  /** ID of the secret. */
  id: string;
  /** ID of the folder that the secret belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the secret. */
  name: string;
  /** Description of the secret. */
  description: string;
  /** Custom labels for the secret as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** Optional ID of the KMS key will be used to encrypt and decrypt the secret. */
  kmsKeyId: string;
  /** Status of the secret. */
  status: Secret_Status;
  /** Current (i.e. the `latest`) version of the secret. */
  currentVersion?:
    | Version
    | undefined;
  /** Flag that inhibits deletion of the secret. */
  deletionProtection: boolean;
}

export enum Secret_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - The secret is being created. */
  CREATING = 1,
  /**
   * ACTIVE - The secret is active and the secret payload can be accessed.
   *
   * Can be set to INACTIVE using the [SecretService.Deactivate] method.
   */
  ACTIVE = 2,
  /**
   * INACTIVE - The secret is inactive and unusable.
   *
   * Can be set to ACTIVE using the [SecretService.Deactivate] method.
   */
  INACTIVE = 3,
  UNRECOGNIZED = -1,
}

export function secret_StatusFromJSON(object: any): Secret_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Secret_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Secret_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Secret_Status.ACTIVE;
    case 3:
    case "INACTIVE":
      return Secret_Status.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Secret_Status.UNRECOGNIZED;
  }
}

export function secret_StatusToJSON(object: Secret_Status): string {
  switch (object) {
    case Secret_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Secret_Status.CREATING:
      return "CREATING";
    case Secret_Status.ACTIVE:
      return "ACTIVE";
    case Secret_Status.INACTIVE:
      return "INACTIVE";
    case Secret_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Secret_LabelsEntry {
  $type: "yandex.cloud.lockbox.v1.Secret.LabelsEntry";
  key: string;
  value: string;
}

export interface Version {
  $type: "yandex.cloud.lockbox.v1.Version";
  /** ID of the version. */
  id: string;
  /** ID of the secret that the version belongs to. */
  secretId: string;
  /** Time when the version was created. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Time when the version is going to be destroyed. Empty unless the status
   * is `SCHEDULED_FOR_DESTRUCTION`.
   */
  destroyAt?:
    | Date
    | undefined;
  /** Description of the version. */
  description: string;
  /** Status of the secret. */
  status: Version_Status;
  /** Keys of the entries contained in the version payload. */
  payloadEntryKeys: string[];
}

export enum Version_Status {
  STATUS_UNSPECIFIED = 0,
  /** ACTIVE - The version is active and the secret payload can be accessed. */
  ACTIVE = 1,
  /**
   * SCHEDULED_FOR_DESTRUCTION - The version is scheduled for destruction, the time when it will be destroyed
   * is specified in the [Version.destroy_at] field.
   */
  SCHEDULED_FOR_DESTRUCTION = 2,
  /** DESTROYED - The version is destroyed and cannot be recovered. */
  DESTROYED = 3,
  UNRECOGNIZED = -1,
}

export function version_StatusFromJSON(object: any): Version_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Version_Status.STATUS_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return Version_Status.ACTIVE;
    case 2:
    case "SCHEDULED_FOR_DESTRUCTION":
      return Version_Status.SCHEDULED_FOR_DESTRUCTION;
    case 3:
    case "DESTROYED":
      return Version_Status.DESTROYED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Version_Status.UNRECOGNIZED;
  }
}

export function version_StatusToJSON(object: Version_Status): string {
  switch (object) {
    case Version_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Version_Status.ACTIVE:
      return "ACTIVE";
    case Version_Status.SCHEDULED_FOR_DESTRUCTION:
      return "SCHEDULED_FOR_DESTRUCTION";
    case Version_Status.DESTROYED:
      return "DESTROYED";
    case Version_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseSecret(): Secret {
  return {
    $type: "yandex.cloud.lockbox.v1.Secret",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    kmsKeyId: "",
    status: 0,
    currentVersion: undefined,
    deletionProtection: false,
  };
}

export const Secret = {
  $type: "yandex.cloud.lockbox.v1.Secret" as const,

  encode(message: Secret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Secret_LabelsEntry.encode(
        { $type: "yandex.cloud.lockbox.v1.Secret.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.kmsKeyId !== "") {
      writer.uint32(58).string(message.kmsKeyId);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.currentVersion !== undefined) {
      Version.encode(message.currentVersion, writer.uint32(74).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(80).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecret();
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

          const entry6 = Secret_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.kmsKeyId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.currentVersion = Version.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
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

  fromJSON(object: any): Secret {
    return {
      $type: Secret.$type,
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
      kmsKeyId: isSet(object.kmsKeyId) ? globalThis.String(object.kmsKeyId) : "",
      status: isSet(object.status) ? secret_StatusFromJSON(object.status) : 0,
      currentVersion: isSet(object.currentVersion) ? Version.fromJSON(object.currentVersion) : undefined,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: Secret): unknown {
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
    if (message.kmsKeyId !== "") {
      obj.kmsKeyId = message.kmsKeyId;
    }
    if (message.status !== 0) {
      obj.status = secret_StatusToJSON(message.status);
    }
    if (message.currentVersion !== undefined) {
      obj.currentVersion = Version.toJSON(message.currentVersion);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Secret>, I>>(base?: I): Secret {
    return Secret.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
    const message = createBaseSecret();
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
    message.kmsKeyId = object.kmsKeyId ?? "";
    message.status = object.status ?? 0;
    message.currentVersion = (object.currentVersion !== undefined && object.currentVersion !== null)
      ? Version.fromPartial(object.currentVersion)
      : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(Secret.$type, Secret);

function createBaseSecret_LabelsEntry(): Secret_LabelsEntry {
  return { $type: "yandex.cloud.lockbox.v1.Secret.LabelsEntry", key: "", value: "" };
}

export const Secret_LabelsEntry = {
  $type: "yandex.cloud.lockbox.v1.Secret.LabelsEntry" as const,

  encode(message: Secret_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecret_LabelsEntry();
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

  fromJSON(object: any): Secret_LabelsEntry {
    return {
      $type: Secret_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Secret_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Secret_LabelsEntry>, I>>(base?: I): Secret_LabelsEntry {
    return Secret_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Secret_LabelsEntry>, I>>(object: I): Secret_LabelsEntry {
    const message = createBaseSecret_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Secret_LabelsEntry.$type, Secret_LabelsEntry);

function createBaseVersion(): Version {
  return {
    $type: "yandex.cloud.lockbox.v1.Version",
    id: "",
    secretId: "",
    createdAt: undefined,
    destroyAt: undefined,
    description: "",
    status: 0,
    payloadEntryKeys: [],
  };
}

export const Version = {
  $type: "yandex.cloud.lockbox.v1.Version" as const,

  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.secretId !== "") {
      writer.uint32(18).string(message.secretId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.destroyAt !== undefined) {
      Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    for (const v of message.payloadEntryKeys) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
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

          message.secretId = reader.string();
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

          message.destroyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payloadEntryKeys.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      $type: Version.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      destroyAt: isSet(object.destroyAt) ? fromJsonTimestamp(object.destroyAt) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? version_StatusFromJSON(object.status) : 0,
      payloadEntryKeys: globalThis.Array.isArray(object?.payloadEntryKeys)
        ? object.payloadEntryKeys.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.destroyAt !== undefined) {
      obj.destroyAt = message.destroyAt.toISOString();
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== 0) {
      obj.status = version_StatusToJSON(message.status);
    }
    if (message.payloadEntryKeys?.length) {
      obj.payloadEntryKeys = message.payloadEntryKeys;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Version>, I>>(base?: I): Version {
    return Version.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
    const message = createBaseVersion();
    message.id = object.id ?? "";
    message.secretId = object.secretId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.destroyAt = object.destroyAt ?? undefined;
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.payloadEntryKeys = object.payloadEntryKeys?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Version.$type, Version);

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
