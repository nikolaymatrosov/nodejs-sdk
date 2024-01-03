/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

/**
 * A ClickHouse Backup resource. See the [Developer's Guide](/docs/managed-clickhouse/concepts)
 * for more information.
 */
export interface Backup {
  $type: "yandex.cloud.mdb.clickhouse.v1.Backup";
  /** ID of the backup. */
  id: string;
  /** ID of the folder that the backup belongs to. */
  folderId: string;
  /**
   * Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format
   * (i.e. when the backup operation was completed).
   */
  createdAt?:
    | Date
    | undefined;
  /** ID of the ClickHouse cluster that the backup was created for. */
  sourceClusterId: string;
  /** Names of the shards included in the backup. */
  sourceShardNames: string[];
  /** Time when the backup operation was started. */
  startedAt?:
    | Date
    | undefined;
  /** Size of backup in bytes. */
  size: number;
  /** How this backup was created (manual/automatic/etc...). */
  type: Backup_BackupType;
}

export enum Backup_BackupType {
  BACKUP_TYPE_UNSPECIFIED = 0,
  /** AUTOMATED - Backup created by automated daily schedule. */
  AUTOMATED = 1,
  /** MANUAL - Backup created by user request. */
  MANUAL = 2,
  UNRECOGNIZED = -1,
}

export function backup_BackupTypeFromJSON(object: any): Backup_BackupType {
  switch (object) {
    case 0:
    case "BACKUP_TYPE_UNSPECIFIED":
      return Backup_BackupType.BACKUP_TYPE_UNSPECIFIED;
    case 1:
    case "AUTOMATED":
      return Backup_BackupType.AUTOMATED;
    case 2:
    case "MANUAL":
      return Backup_BackupType.MANUAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Backup_BackupType.UNRECOGNIZED;
  }
}

export function backup_BackupTypeToJSON(object: Backup_BackupType): string {
  switch (object) {
    case Backup_BackupType.BACKUP_TYPE_UNSPECIFIED:
      return "BACKUP_TYPE_UNSPECIFIED";
    case Backup_BackupType.AUTOMATED:
      return "AUTOMATED";
    case Backup_BackupType.MANUAL:
      return "MANUAL";
    case Backup_BackupType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseBackup(): Backup {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.Backup",
    id: "",
    folderId: "",
    createdAt: undefined,
    sourceClusterId: "",
    sourceShardNames: [],
    startedAt: undefined,
    size: 0,
    type: 0,
  };
}

export const Backup = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Backup" as const,

  encode(message: Backup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.sourceClusterId !== "") {
      writer.uint32(34).string(message.sourceClusterId);
    }
    for (const v of message.sourceShardNames) {
      writer.uint32(50).string(v!);
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(56).int64(message.size);
    }
    if (message.type !== 0) {
      writer.uint32(64).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackup();
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

          message.sourceClusterId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sourceShardNames.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Backup {
    return {
      $type: Backup.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      sourceClusterId: isSet(object.sourceClusterId) ? globalThis.String(object.sourceClusterId) : "",
      sourceShardNames: globalThis.Array.isArray(object?.sourceShardNames)
        ? object.sourceShardNames.map((e: any) => globalThis.String(e))
        : [],
      startedAt: isSet(object.startedAt) ? fromJsonTimestamp(object.startedAt) : undefined,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      type: isSet(object.type) ? backup_BackupTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Backup): unknown {
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
    if (message.sourceClusterId !== "") {
      obj.sourceClusterId = message.sourceClusterId;
    }
    if (message.sourceShardNames?.length) {
      obj.sourceShardNames = message.sourceShardNames;
    }
    if (message.startedAt !== undefined) {
      obj.startedAt = message.startedAt.toISOString();
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.type !== 0) {
      obj.type = backup_BackupTypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<Backup>): Backup {
    return Backup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Backup>): Backup {
    const message = createBaseBackup();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.sourceClusterId = object.sourceClusterId ?? "";
    message.sourceShardNames = object.sourceShardNames?.map((e) => e) || [];
    message.startedAt = object.startedAt ?? undefined;
    message.size = object.size ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Backup.$type, Backup);

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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
