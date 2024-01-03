/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export interface Backup {
  $type: "yandex.cloud.mdb.greenplum.v1.Backup";
  /** Required. ID of the backup. */
  id: string;
  /** ID of the folder that the backup belongs to. */
  folderId: string;
  /** Time when the backup operation was completed. */
  createdAt?:
    | Date
    | undefined;
  /** ID of the Greenplum® cluster that the backup was created for. */
  sourceClusterId: string;
  /** Time when the backup operation was started. */
  startedAt?:
    | Date
    | undefined;
  /** Size of the backup in bytes. */
  size: number;
}

function createBaseBackup(): Backup {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.Backup",
    id: "",
    folderId: "",
    createdAt: undefined,
    sourceClusterId: "",
    startedAt: undefined,
    size: 0,
  };
}

export const Backup = {
  $type: "yandex.cloud.mdb.greenplum.v1.Backup" as const,

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
    if (message.startedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
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
      startedAt: isSet(object.startedAt) ? fromJsonTimestamp(object.startedAt) : undefined,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
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
    if (message.startedAt !== undefined) {
      obj.startedAt = message.startedAt.toISOString();
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
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
    message.startedAt = object.startedAt ?? undefined;
    message.size = object.size ?? 0;
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
