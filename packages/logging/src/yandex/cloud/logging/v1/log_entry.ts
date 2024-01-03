/* eslint-disable */
import { Struct } from "@yandex-cloud/core/dist/generated/google/protobuf/struct";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { LogEntryResource } from "./log_resource";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface LogEntry {
  $type: "yandex.cloud.logging.v1.LogEntry";
  /**
   * Unique entry ID.
   *
   * Useful for logs deduplication.
   */
  uid: string;
  /**
   * Entry resource specification.
   *
   * May contain information about source service and resource ID.
   * Also may be provided by the user.
   */
  resource?:
    | LogEntryResource
    | undefined;
  /** Timestamp of the entry. */
  timestamp?:
    | Date
    | undefined;
  /** Entry ingestion time observed by [LogIngestionService]. */
  ingestedAt?:
    | Date
    | undefined;
  /**
   * Entry save time.
   *
   * Entry is ready to be read since this moment.
   */
  savedAt?:
    | Date
    | undefined;
  /**
   * Entry severity.
   *
   * See [LogLevel.Level] for details.
   */
  level: LogLevel_Level;
  /** Entry text message. */
  message: string;
  /** Entry annotation. */
  jsonPayload?:
    | { [key: string]: any }
    | undefined;
  /** Entry stream name. */
  streamName: string;
}

export interface IncomingLogEntry {
  $type: "yandex.cloud.logging.v1.IncomingLogEntry";
  /** Timestamp of the entry. */
  timestamp?:
    | Date
    | undefined;
  /**
   * Entry severity.
   *
   * See [LogLevel.Level] for details.
   */
  level: LogLevel_Level;
  /** Entry text message. */
  message: string;
  /** Entry annotation. */
  jsonPayload?:
    | { [key: string]: any }
    | undefined;
  /** Entry stream name. */
  streamName: string;
}

export interface LogEntryDefaults {
  $type: "yandex.cloud.logging.v1.LogEntryDefaults";
  /**
   * Default entry severity.
   * Will be applied if entry level is unspecified.
   *
   * See [LogLevel.Level] for details.
   */
  level: LogLevel_Level;
  /**
   * Default entry annotation.
   * Will be merged with entry annotation.
   * Any conflict will be resolved in favor of entry own annotation.
   */
  jsonPayload?:
    | { [key: string]: any }
    | undefined;
  /** Entry stream name. */
  streamName: string;
}

export interface Destination {
  $type: "yandex.cloud.logging.v1.Destination";
  /** Entry should be written to log group resolved by ID. */
  logGroupId?:
    | string
    | undefined;
  /** Entry should be written to default log group for the folder. */
  folderId?: string | undefined;
}

export interface LogLevel {
  $type: "yandex.cloud.logging.v1.LogLevel";
  /**
   * Entry level.
   *
   * See [Level] for possible values.
   */
  level: LogLevel_Level;
}

/** Possible log levels for entries. */
export enum LogLevel_Level {
  /**
   * LEVEL_UNSPECIFIED - Default log level.
   *
   * Equivalent to not specifying log level at all.
   */
  LEVEL_UNSPECIFIED = 0,
  /**
   * TRACE - Trace log level.
   *
   * Possible use case: verbose logging of some business logic.
   */
  TRACE = 1,
  /**
   * DEBUG - Debug log level.
   *
   * Possible use case: debugging special cases in application logic.
   */
  DEBUG = 2,
  /**
   * INFO - Info log level.
   *
   * Mostly used for information messages.
   */
  INFO = 3,
  /**
   * WARN - Warn log level.
   *
   * May be used to alert about significant events.
   */
  WARN = 4,
  /**
   * ERROR - Error log level.
   *
   * May be used to alert about errors in infrastructure, logic, etc.
   */
  ERROR = 5,
  /**
   * FATAL - Fatal log level.
   *
   * May be used to alert about unrecoverable failures and events.
   */
  FATAL = 6,
  UNRECOGNIZED = -1,
}

export function logLevel_LevelFromJSON(object: any): LogLevel_Level {
  switch (object) {
    case 0:
    case "LEVEL_UNSPECIFIED":
      return LogLevel_Level.LEVEL_UNSPECIFIED;
    case 1:
    case "TRACE":
      return LogLevel_Level.TRACE;
    case 2:
    case "DEBUG":
      return LogLevel_Level.DEBUG;
    case 3:
    case "INFO":
      return LogLevel_Level.INFO;
    case 4:
    case "WARN":
      return LogLevel_Level.WARN;
    case 5:
    case "ERROR":
      return LogLevel_Level.ERROR;
    case 6:
    case "FATAL":
      return LogLevel_Level.FATAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LogLevel_Level.UNRECOGNIZED;
  }
}

export function logLevel_LevelToJSON(object: LogLevel_Level): string {
  switch (object) {
    case LogLevel_Level.LEVEL_UNSPECIFIED:
      return "LEVEL_UNSPECIFIED";
    case LogLevel_Level.TRACE:
      return "TRACE";
    case LogLevel_Level.DEBUG:
      return "DEBUG";
    case LogLevel_Level.INFO:
      return "INFO";
    case LogLevel_Level.WARN:
      return "WARN";
    case LogLevel_Level.ERROR:
      return "ERROR";
    case LogLevel_Level.FATAL:
      return "FATAL";
    case LogLevel_Level.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLogEntry(): LogEntry {
  return {
    $type: "yandex.cloud.logging.v1.LogEntry",
    uid: "",
    resource: undefined,
    timestamp: undefined,
    ingestedAt: undefined,
    savedAt: undefined,
    level: 0,
    message: "",
    jsonPayload: undefined,
    streamName: "",
  };
}

export const LogEntry = {
  $type: "yandex.cloud.logging.v1.LogEntry" as const,

  encode(message: LogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.resource !== undefined) {
      LogEntryResource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.ingestedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.ingestedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.savedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.savedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.level !== 0) {
      writer.uint32(48).int32(message.level);
    }
    if (message.message !== "") {
      writer.uint32(58).string(message.message);
    }
    if (message.jsonPayload !== undefined) {
      Struct.encode(Struct.wrap(message.jsonPayload), writer.uint32(66).fork()).ldelim();
    }
    if (message.streamName !== "") {
      writer.uint32(74).string(message.streamName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resource = LogEntryResource.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ingestedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.savedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.level = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.message = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.jsonPayload = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.streamName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogEntry {
    return {
      $type: LogEntry.$type,
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      resource: isSet(object.resource) ? LogEntryResource.fromJSON(object.resource) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      ingestedAt: isSet(object.ingestedAt) ? fromJsonTimestamp(object.ingestedAt) : undefined,
      savedAt: isSet(object.savedAt) ? fromJsonTimestamp(object.savedAt) : undefined,
      level: isSet(object.level) ? logLevel_LevelFromJSON(object.level) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      jsonPayload: isObject(object.jsonPayload) ? object.jsonPayload : undefined,
      streamName: isSet(object.streamName) ? globalThis.String(object.streamName) : "",
    };
  },

  toJSON(message: LogEntry): unknown {
    const obj: any = {};
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.resource !== undefined) {
      obj.resource = LogEntryResource.toJSON(message.resource);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.ingestedAt !== undefined) {
      obj.ingestedAt = message.ingestedAt.toISOString();
    }
    if (message.savedAt !== undefined) {
      obj.savedAt = message.savedAt.toISOString();
    }
    if (message.level !== 0) {
      obj.level = logLevel_LevelToJSON(message.level);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.jsonPayload !== undefined) {
      obj.jsonPayload = message.jsonPayload;
    }
    if (message.streamName !== "") {
      obj.streamName = message.streamName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogEntry>, I>>(base?: I): LogEntry {
    return LogEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogEntry>, I>>(object: I): LogEntry {
    const message = createBaseLogEntry();
    message.uid = object.uid ?? "";
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? LogEntryResource.fromPartial(object.resource)
      : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.ingestedAt = object.ingestedAt ?? undefined;
    message.savedAt = object.savedAt ?? undefined;
    message.level = object.level ?? 0;
    message.message = object.message ?? "";
    message.jsonPayload = object.jsonPayload ?? undefined;
    message.streamName = object.streamName ?? "";
    return message;
  },
};

messageTypeRegistry.set(LogEntry.$type, LogEntry);

function createBaseIncomingLogEntry(): IncomingLogEntry {
  return {
    $type: "yandex.cloud.logging.v1.IncomingLogEntry",
    timestamp: undefined,
    level: 0,
    message: "",
    jsonPayload: undefined,
    streamName: "",
  };
}

export const IncomingLogEntry = {
  $type: "yandex.cloud.logging.v1.IncomingLogEntry" as const,

  encode(message: IncomingLogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.jsonPayload !== undefined) {
      Struct.encode(Struct.wrap(message.jsonPayload), writer.uint32(34).fork()).ldelim();
    }
    if (message.streamName !== "") {
      writer.uint32(42).string(message.streamName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncomingLogEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncomingLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.level = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.jsonPayload = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.streamName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IncomingLogEntry {
    return {
      $type: IncomingLogEntry.$type,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      level: isSet(object.level) ? logLevel_LevelFromJSON(object.level) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      jsonPayload: isObject(object.jsonPayload) ? object.jsonPayload : undefined,
      streamName: isSet(object.streamName) ? globalThis.String(object.streamName) : "",
    };
  },

  toJSON(message: IncomingLogEntry): unknown {
    const obj: any = {};
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.level !== 0) {
      obj.level = logLevel_LevelToJSON(message.level);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.jsonPayload !== undefined) {
      obj.jsonPayload = message.jsonPayload;
    }
    if (message.streamName !== "") {
      obj.streamName = message.streamName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IncomingLogEntry>, I>>(base?: I): IncomingLogEntry {
    return IncomingLogEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IncomingLogEntry>, I>>(object: I): IncomingLogEntry {
    const message = createBaseIncomingLogEntry();
    message.timestamp = object.timestamp ?? undefined;
    message.level = object.level ?? 0;
    message.message = object.message ?? "";
    message.jsonPayload = object.jsonPayload ?? undefined;
    message.streamName = object.streamName ?? "";
    return message;
  },
};

messageTypeRegistry.set(IncomingLogEntry.$type, IncomingLogEntry);

function createBaseLogEntryDefaults(): LogEntryDefaults {
  return { $type: "yandex.cloud.logging.v1.LogEntryDefaults", level: 0, jsonPayload: undefined, streamName: "" };
}

export const LogEntryDefaults = {
  $type: "yandex.cloud.logging.v1.LogEntryDefaults" as const,

  encode(message: LogEntryDefaults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    if (message.jsonPayload !== undefined) {
      Struct.encode(Struct.wrap(message.jsonPayload), writer.uint32(34).fork()).ldelim();
    }
    if (message.streamName !== "") {
      writer.uint32(42).string(message.streamName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntryDefaults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntryDefaults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.level = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.jsonPayload = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.streamName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogEntryDefaults {
    return {
      $type: LogEntryDefaults.$type,
      level: isSet(object.level) ? logLevel_LevelFromJSON(object.level) : 0,
      jsonPayload: isObject(object.jsonPayload) ? object.jsonPayload : undefined,
      streamName: isSet(object.streamName) ? globalThis.String(object.streamName) : "",
    };
  },

  toJSON(message: LogEntryDefaults): unknown {
    const obj: any = {};
    if (message.level !== 0) {
      obj.level = logLevel_LevelToJSON(message.level);
    }
    if (message.jsonPayload !== undefined) {
      obj.jsonPayload = message.jsonPayload;
    }
    if (message.streamName !== "") {
      obj.streamName = message.streamName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogEntryDefaults>, I>>(base?: I): LogEntryDefaults {
    return LogEntryDefaults.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogEntryDefaults>, I>>(object: I): LogEntryDefaults {
    const message = createBaseLogEntryDefaults();
    message.level = object.level ?? 0;
    message.jsonPayload = object.jsonPayload ?? undefined;
    message.streamName = object.streamName ?? "";
    return message;
  },
};

messageTypeRegistry.set(LogEntryDefaults.$type, LogEntryDefaults);

function createBaseDestination(): Destination {
  return { $type: "yandex.cloud.logging.v1.Destination", logGroupId: undefined, folderId: undefined };
}

export const Destination = {
  $type: "yandex.cloud.logging.v1.Destination" as const,

  encode(message: Destination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== undefined) {
      writer.uint32(10).string(message.logGroupId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Destination {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Destination {
    return {
      $type: Destination.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
    };
  },

  toJSON(message: Destination): unknown {
    const obj: any = {};
    if (message.logGroupId !== undefined) {
      obj.logGroupId = message.logGroupId;
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Destination>, I>>(base?: I): Destination {
    return Destination.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Destination>, I>>(object: I): Destination {
    const message = createBaseDestination();
    message.logGroupId = object.logGroupId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Destination.$type, Destination);

function createBaseLogLevel(): LogLevel {
  return { $type: "yandex.cloud.logging.v1.LogLevel", level: 0 };
}

export const LogLevel = {
  $type: "yandex.cloud.logging.v1.LogLevel" as const,

  encode(message: LogLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogLevel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.level = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogLevel {
    return { $type: LogLevel.$type, level: isSet(object.level) ? logLevel_LevelFromJSON(object.level) : 0 };
  },

  toJSON(message: LogLevel): unknown {
    const obj: any = {};
    if (message.level !== 0) {
      obj.level = logLevel_LevelToJSON(message.level);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogLevel>, I>>(base?: I): LogLevel {
    return LogLevel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogLevel>, I>>(object: I): LogLevel {
    const message = createBaseLogLevel();
    message.level = object.level ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LogLevel.$type, LogLevel);

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
