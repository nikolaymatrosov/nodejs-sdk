/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";

export interface Backup {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Backup";
  /** Required. ID of the backup. */
  id: string;
  /** ID of the folder that the backup belongs to. */
  folderId: string;
  /** ID of the associated Elasticsearch cluster. */
  sourceClusterId: string;
  /** The time when the backup operation was started. */
  startedAt?:
    | Date
    | undefined;
  /** The time when the backup was created (i.e. when the backup operation completed). */
  createdAt?:
    | Date
    | undefined;
  /** Indices names. (max 100) */
  indices: string[];
  /** Elasticsearch version used to create the snapshot */
  elasticsearchVersion: string;
  /** Total size of all indices in backup. in bytes */
  sizeBytes: number;
  /** Total count of indices in backup */
  indicesTotal: number;
}

function createBaseBackup(): Backup {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Backup",
    id: "",
    folderId: "",
    sourceClusterId: "",
    startedAt: undefined,
    createdAt: undefined,
    indices: [],
    elasticsearchVersion: "",
    sizeBytes: 0,
    indicesTotal: 0,
  };
}

export const Backup = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Backup" as const,

  encode(message: Backup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.sourceClusterId !== "") {
      writer.uint32(26).string(message.sourceClusterId);
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.indices) {
      writer.uint32(50).string(v!);
    }
    if (message.elasticsearchVersion !== "") {
      writer.uint32(58).string(message.elasticsearchVersion);
    }
    if (message.sizeBytes !== 0) {
      writer.uint32(64).int64(message.sizeBytes);
    }
    if (message.indicesTotal !== 0) {
      writer.uint32(72).int64(message.indicesTotal);
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

          message.sourceClusterId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.indices.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.elasticsearchVersion = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.sizeBytes = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.indicesTotal = longToNumber(reader.int64() as Long);
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
      sourceClusterId: isSet(object.sourceClusterId) ? globalThis.String(object.sourceClusterId) : "",
      startedAt: isSet(object.startedAt) ? fromJsonTimestamp(object.startedAt) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      indices: globalThis.Array.isArray(object?.indices) ? object.indices.map((e: any) => globalThis.String(e)) : [],
      elasticsearchVersion: isSet(object.elasticsearchVersion) ? globalThis.String(object.elasticsearchVersion) : "",
      sizeBytes: isSet(object.sizeBytes) ? globalThis.Number(object.sizeBytes) : 0,
      indicesTotal: isSet(object.indicesTotal) ? globalThis.Number(object.indicesTotal) : 0,
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
    if (message.sourceClusterId !== "") {
      obj.sourceClusterId = message.sourceClusterId;
    }
    if (message.startedAt !== undefined) {
      obj.startedAt = message.startedAt.toISOString();
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.indices?.length) {
      obj.indices = message.indices;
    }
    if (message.elasticsearchVersion !== "") {
      obj.elasticsearchVersion = message.elasticsearchVersion;
    }
    if (message.sizeBytes !== 0) {
      obj.sizeBytes = Math.round(message.sizeBytes);
    }
    if (message.indicesTotal !== 0) {
      obj.indicesTotal = Math.round(message.indicesTotal);
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
    message.sourceClusterId = object.sourceClusterId ?? "";
    message.startedAt = object.startedAt ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.indices = object.indices?.map((e) => e) || [];
    message.elasticsearchVersion = object.elasticsearchVersion ?? "";
    message.sizeBytes = object.sizeBytes ?? 0;
    message.indicesTotal = object.indicesTotal ?? 0;
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
