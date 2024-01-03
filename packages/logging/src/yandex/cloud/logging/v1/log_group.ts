/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface LogGroup {
  $type: "yandex.cloud.logging.v1.LogGroup";
  /** Log group ID. */
  id: string;
  /** Log group folder ID. */
  folderId: string;
  /** Log group cloud ID. */
  cloudId: string;
  /** Log group creation time. */
  createdAt?:
    | Date
    | undefined;
  /** Log group name. */
  name: string;
  /** Log group description. */
  description: string;
  /** Log group labels. */
  labels: { [key: string]: string };
  /** Status of the log group. */
  status: LogGroup_Status;
  /**
   * Log group entry retention period.
   *
   * Entries will be present in group during this period.
   */
  retentionPeriod?:
    | Duration
    | undefined;
  /** Data stream name */
  dataStream: string;
}

/** Possible log group statuses. */
export enum LogGroup_Status {
  /**
   * STATUS_UNSPECIFIED - Unknown status.
   *
   * Should never occur.
   */
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Log group is creating. */
  CREATING = 1,
  /** ACTIVE - Log group is ready to accept messages, */
  ACTIVE = 2,
  /**
   * DELETING - Log group is being deleted.
   *
   * No messages will be accepted.
   */
  DELETING = 3,
  /** ERROR - Log group is in failed state. */
  ERROR = 4,
  UNRECOGNIZED = -1,
}

export function logGroup_StatusFromJSON(object: any): LogGroup_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return LogGroup_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return LogGroup_Status.CREATING;
    case 2:
    case "ACTIVE":
      return LogGroup_Status.ACTIVE;
    case 3:
    case "DELETING":
      return LogGroup_Status.DELETING;
    case 4:
    case "ERROR":
      return LogGroup_Status.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LogGroup_Status.UNRECOGNIZED;
  }
}

export function logGroup_StatusToJSON(object: LogGroup_Status): string {
  switch (object) {
    case LogGroup_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case LogGroup_Status.CREATING:
      return "CREATING";
    case LogGroup_Status.ACTIVE:
      return "ACTIVE";
    case LogGroup_Status.DELETING:
      return "DELETING";
    case LogGroup_Status.ERROR:
      return "ERROR";
    case LogGroup_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LogGroup_LabelsEntry {
  $type: "yandex.cloud.logging.v1.LogGroup.LabelsEntry";
  key: string;
  value: string;
}

function createBaseLogGroup(): LogGroup {
  return {
    $type: "yandex.cloud.logging.v1.LogGroup",
    id: "",
    folderId: "",
    cloudId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
    retentionPeriod: undefined,
    dataStream: "",
  };
}

export const LogGroup = {
  $type: "yandex.cloud.logging.v1.LogGroup" as const,

  encode(message: LogGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.cloudId !== "") {
      writer.uint32(26).string(message.cloudId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      LogGroup_LabelsEntry.encode(
        { $type: "yandex.cloud.logging.v1.LogGroup.LabelsEntry", key: key as any, value },
        writer.uint32(58).fork(),
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.retentionPeriod !== undefined) {
      Duration.encode(message.retentionPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.dataStream !== "") {
      writer.uint32(82).string(message.dataStream);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogGroup();
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

          message.cloudId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = LogGroup_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
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

          message.retentionPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dataStream = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogGroup {
    return {
      $type: LogGroup.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      status: isSet(object.status) ? logGroup_StatusFromJSON(object.status) : 0,
      retentionPeriod: isSet(object.retentionPeriod) ? Duration.fromJSON(object.retentionPeriod) : undefined,
      dataStream: isSet(object.dataStream) ? globalThis.String(object.dataStream) : "",
    };
  },

  toJSON(message: LogGroup): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.cloudId !== "") {
      obj.cloudId = message.cloudId;
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
      obj.status = logGroup_StatusToJSON(message.status);
    }
    if (message.retentionPeriod !== undefined) {
      obj.retentionPeriod = Duration.toJSON(message.retentionPeriod);
    }
    if (message.dataStream !== "") {
      obj.dataStream = message.dataStream;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogGroup>, I>>(base?: I): LogGroup {
    return LogGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogGroup>, I>>(object: I): LogGroup {
    const message = createBaseLogGroup();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.cloudId = object.cloudId ?? "";
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
    message.retentionPeriod = (object.retentionPeriod !== undefined && object.retentionPeriod !== null)
      ? Duration.fromPartial(object.retentionPeriod)
      : undefined;
    message.dataStream = object.dataStream ?? "";
    return message;
  },
};

messageTypeRegistry.set(LogGroup.$type, LogGroup);

function createBaseLogGroup_LabelsEntry(): LogGroup_LabelsEntry {
  return { $type: "yandex.cloud.logging.v1.LogGroup.LabelsEntry", key: "", value: "" };
}

export const LogGroup_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.LogGroup.LabelsEntry" as const,

  encode(message: LogGroup_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogGroup_LabelsEntry();
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

  fromJSON(object: any): LogGroup_LabelsEntry {
    return {
      $type: LogGroup_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: LogGroup_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogGroup_LabelsEntry>, I>>(base?: I): LogGroup_LabelsEntry {
    return LogGroup_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogGroup_LabelsEntry>, I>>(object: I): LogGroup_LabelsEntry {
    const message = createBaseLogGroup_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(LogGroup_LabelsEntry.$type, LogGroup_LabelsEntry);

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
