/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface Sink {
  $type: "yandex.cloud.logging.v1.Sink";
  /** Sink ID. */
  id: string;
  /** Sink folder ID. */
  folderId: string;
  /** Sink cloud ID. */
  cloudId: string;
  /** Sink creation time. */
  createdAt?:
    | Date
    | undefined;
  /** Sink name. */
  name: string;
  /** Sink description. */
  description: string;
  /** Sink labels. */
  labels: { [key: string]: string };
  /** Logs will be written to the sink on behalf of this service account */
  serviceAccountId: string;
  /** Yandex data stream */
  yds?:
    | Sink_Yds
    | undefined;
  /** Object storage */
  s3?: Sink_S3 | undefined;
}

export interface Sink_LabelsEntry {
  $type: "yandex.cloud.logging.v1.Sink.LabelsEntry";
  key: string;
  value: string;
}

export interface Sink_Yds {
  $type: "yandex.cloud.logging.v1.Sink.Yds";
  /** Fully qualified name of data stream */
  streamName: string;
}

export interface Sink_S3 {
  $type: "yandex.cloud.logging.v1.Sink.S3";
  /** Object storage bucket */
  bucket: string;
  /** Prefix to use for saved log object names */
  prefix: string;
}

function createBaseSink(): Sink {
  return {
    $type: "yandex.cloud.logging.v1.Sink",
    id: "",
    folderId: "",
    cloudId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    serviceAccountId: "",
    yds: undefined,
    s3: undefined,
  };
}

export const Sink = {
  $type: "yandex.cloud.logging.v1.Sink" as const,

  encode(message: Sink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Sink_LabelsEntry.encode(
        { $type: "yandex.cloud.logging.v1.Sink.LabelsEntry", key: key as any, value },
        writer.uint32(58).fork(),
      ).ldelim();
    });
    if (message.serviceAccountId !== "") {
      writer.uint32(66).string(message.serviceAccountId);
    }
    if (message.yds !== undefined) {
      Sink_Yds.encode(message.yds, writer.uint32(74).fork()).ldelim();
    }
    if (message.s3 !== undefined) {
      Sink_S3.encode(message.s3, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSink();
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

          const entry7 = Sink_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.yds = Sink_Yds.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.s3 = Sink_S3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sink {
    return {
      $type: Sink.$type,
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
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      yds: isSet(object.yds) ? Sink_Yds.fromJSON(object.yds) : undefined,
      s3: isSet(object.s3) ? Sink_S3.fromJSON(object.s3) : undefined,
    };
  },

  toJSON(message: Sink): unknown {
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
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.yds !== undefined) {
      obj.yds = Sink_Yds.toJSON(message.yds);
    }
    if (message.s3 !== undefined) {
      obj.s3 = Sink_S3.toJSON(message.s3);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sink>, I>>(base?: I): Sink {
    return Sink.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sink>, I>>(object: I): Sink {
    const message = createBaseSink();
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
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.yds = (object.yds !== undefined && object.yds !== null) ? Sink_Yds.fromPartial(object.yds) : undefined;
    message.s3 = (object.s3 !== undefined && object.s3 !== null) ? Sink_S3.fromPartial(object.s3) : undefined;
    return message;
  },
};

messageTypeRegistry.set(Sink.$type, Sink);

function createBaseSink_LabelsEntry(): Sink_LabelsEntry {
  return { $type: "yandex.cloud.logging.v1.Sink.LabelsEntry", key: "", value: "" };
}

export const Sink_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.Sink.LabelsEntry" as const,

  encode(message: Sink_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sink_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSink_LabelsEntry();
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

  fromJSON(object: any): Sink_LabelsEntry {
    return {
      $type: Sink_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Sink_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sink_LabelsEntry>, I>>(base?: I): Sink_LabelsEntry {
    return Sink_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sink_LabelsEntry>, I>>(object: I): Sink_LabelsEntry {
    const message = createBaseSink_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Sink_LabelsEntry.$type, Sink_LabelsEntry);

function createBaseSink_Yds(): Sink_Yds {
  return { $type: "yandex.cloud.logging.v1.Sink.Yds", streamName: "" };
}

export const Sink_Yds = {
  $type: "yandex.cloud.logging.v1.Sink.Yds" as const,

  encode(message: Sink_Yds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streamName !== "") {
      writer.uint32(10).string(message.streamName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sink_Yds {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSink_Yds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): Sink_Yds {
    return { $type: Sink_Yds.$type, streamName: isSet(object.streamName) ? globalThis.String(object.streamName) : "" };
  },

  toJSON(message: Sink_Yds): unknown {
    const obj: any = {};
    if (message.streamName !== "") {
      obj.streamName = message.streamName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sink_Yds>, I>>(base?: I): Sink_Yds {
    return Sink_Yds.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sink_Yds>, I>>(object: I): Sink_Yds {
    const message = createBaseSink_Yds();
    message.streamName = object.streamName ?? "";
    return message;
  },
};

messageTypeRegistry.set(Sink_Yds.$type, Sink_Yds);

function createBaseSink_S3(): Sink_S3 {
  return { $type: "yandex.cloud.logging.v1.Sink.S3", bucket: "", prefix: "" };
}

export const Sink_S3 = {
  $type: "yandex.cloud.logging.v1.Sink.S3" as const,

  encode(message: Sink_S3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sink_S3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSink_S3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sink_S3 {
    return {
      $type: Sink_S3.$type,
      bucket: isSet(object.bucket) ? globalThis.String(object.bucket) : "",
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : "",
    };
  },

  toJSON(message: Sink_S3): unknown {
    const obj: any = {};
    if (message.bucket !== "") {
      obj.bucket = message.bucket;
    }
    if (message.prefix !== "") {
      obj.prefix = message.prefix;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sink_S3>, I>>(base?: I): Sink_S3 {
    return Sink_S3.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sink_S3>, I>>(object: I): Sink_S3 {
    const message = createBaseSink_S3();
    message.bucket = object.bucket ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
};

messageTypeRegistry.set(Sink_S3.$type, Sink_S3);

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
