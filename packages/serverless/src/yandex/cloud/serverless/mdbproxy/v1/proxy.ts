/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.serverless.mdbproxy.v1";

export interface Proxy {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy";
  /** ID of the proxy. */
  id: string;
  /** ID of the folder that the proxy belongs to. */
  folderId: string;
  /** Creation timestamp for the proxy. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the proxy. */
  name: string;
  /** Description of the proxy. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** MDB specific settings. */
  target?: Target | undefined;
}

export interface Proxy_LabelsEntry {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry";
  key: string;
  value: string;
}

export interface Target {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Target";
  /** Clickhouse settings for proxy. */
  clickhouse?:
    | Target_ClickHouse
    | undefined;
  /** PostgreSQL settings for proxy. */
  postgresql?: Target_PostgreSQL | undefined;
}

export interface Target_PostgreSQL {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Target.PostgreSQL";
  /** Cluster identifier for postgresql. */
  clusterId: string;
  /** PostgreSQL user. */
  user: string;
  /** PostgreSQL password, input only field. */
  password: string;
  /** PostgreSQL database name. */
  db: string;
  /** PostgreSQL proxy-host for connection, output only field. */
  endpoint: string;
}

export interface Target_ClickHouse {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Target.ClickHouse";
  /** Cluster identifier for clickhouse. */
  clusterId: string;
  /** Clickhouse user. */
  user: string;
  /** Clickhouse password, input only field. */
  password: string;
  /** Clickhouse database name. */
  db: string;
  /** Clickhouse proxy-host for connection, output only field. */
  endpoint: string;
}

function createBaseProxy(): Proxy {
  return {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    target: undefined,
  };
}

export const Proxy = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy" as const,

  encode(message: Proxy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Proxy_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proxy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProxy();
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

          const entry6 = Proxy_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.target = Target.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proxy {
    return {
      $type: Proxy.$type,
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
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
    };
  },

  toJSON(message: Proxy): unknown {
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
    if (message.target !== undefined) {
      obj.target = Target.toJSON(message.target);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proxy>, I>>(base?: I): Proxy {
    return Proxy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proxy>, I>>(object: I): Proxy {
    const message = createBaseProxy();
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
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Proxy.$type, Proxy);

function createBaseProxy_LabelsEntry(): Proxy_LabelsEntry {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry", key: "", value: "" };
}

export const Proxy_LabelsEntry = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry" as const,

  encode(message: Proxy_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proxy_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProxy_LabelsEntry();
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

  fromJSON(object: any): Proxy_LabelsEntry {
    return {
      $type: Proxy_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Proxy_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proxy_LabelsEntry>, I>>(base?: I): Proxy_LabelsEntry {
    return Proxy_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proxy_LabelsEntry>, I>>(object: I): Proxy_LabelsEntry {
    const message = createBaseProxy_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Proxy_LabelsEntry.$type, Proxy_LabelsEntry);

function createBaseTarget(): Target {
  return { $type: "yandex.cloud.serverless.mdbproxy.v1.Target", clickhouse: undefined, postgresql: undefined };
}

export const Target = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Target" as const,

  encode(message: Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clickhouse !== undefined) {
      Target_ClickHouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
    }
    if (message.postgresql !== undefined) {
      Target_PostgreSQL.encode(message.postgresql, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Target {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clickhouse = Target_ClickHouse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.postgresql = Target_PostgreSQL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Target {
    return {
      $type: Target.$type,
      clickhouse: isSet(object.clickhouse) ? Target_ClickHouse.fromJSON(object.clickhouse) : undefined,
      postgresql: isSet(object.postgresql) ? Target_PostgreSQL.fromJSON(object.postgresql) : undefined,
    };
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    if (message.clickhouse !== undefined) {
      obj.clickhouse = Target_ClickHouse.toJSON(message.clickhouse);
    }
    if (message.postgresql !== undefined) {
      obj.postgresql = Target_PostgreSQL.toJSON(message.postgresql);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Target>, I>>(base?: I): Target {
    return Target.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Target>, I>>(object: I): Target {
    const message = createBaseTarget();
    message.clickhouse = (object.clickhouse !== undefined && object.clickhouse !== null)
      ? Target_ClickHouse.fromPartial(object.clickhouse)
      : undefined;
    message.postgresql = (object.postgresql !== undefined && object.postgresql !== null)
      ? Target_PostgreSQL.fromPartial(object.postgresql)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Target.$type, Target);

function createBaseTarget_PostgreSQL(): Target_PostgreSQL {
  return {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.PostgreSQL",
    clusterId: "",
    user: "",
    password: "",
    db: "",
    endpoint: "",
  };
}

export const Target_PostgreSQL = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Target.PostgreSQL" as const,

  encode(message: Target_PostgreSQL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.db !== "") {
      writer.uint32(34).string(message.db);
    }
    if (message.endpoint !== "") {
      writer.uint32(42).string(message.endpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Target_PostgreSQL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget_PostgreSQL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.user = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.db = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endpoint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Target_PostgreSQL {
    return {
      $type: Target_PostgreSQL.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      db: isSet(object.db) ? globalThis.String(object.db) : "",
      endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
    };
  },

  toJSON(message: Target_PostgreSQL): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.db !== "") {
      obj.db = message.db;
    }
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Target_PostgreSQL>, I>>(base?: I): Target_PostgreSQL {
    return Target_PostgreSQL.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Target_PostgreSQL>, I>>(object: I): Target_PostgreSQL {
    const message = createBaseTarget_PostgreSQL();
    message.clusterId = object.clusterId ?? "";
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.db = object.db ?? "";
    message.endpoint = object.endpoint ?? "";
    return message;
  },
};

messageTypeRegistry.set(Target_PostgreSQL.$type, Target_PostgreSQL);

function createBaseTarget_ClickHouse(): Target_ClickHouse {
  return {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.ClickHouse",
    clusterId: "",
    user: "",
    password: "",
    db: "",
    endpoint: "",
  };
}

export const Target_ClickHouse = {
  $type: "yandex.cloud.serverless.mdbproxy.v1.Target.ClickHouse" as const,

  encode(message: Target_ClickHouse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.db !== "") {
      writer.uint32(34).string(message.db);
    }
    if (message.endpoint !== "") {
      writer.uint32(42).string(message.endpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Target_ClickHouse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget_ClickHouse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.user = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.db = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endpoint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Target_ClickHouse {
    return {
      $type: Target_ClickHouse.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      db: isSet(object.db) ? globalThis.String(object.db) : "",
      endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
    };
  },

  toJSON(message: Target_ClickHouse): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.db !== "") {
      obj.db = message.db;
    }
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Target_ClickHouse>, I>>(base?: I): Target_ClickHouse {
    return Target_ClickHouse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Target_ClickHouse>, I>>(object: I): Target_ClickHouse {
    const message = createBaseTarget_ClickHouse();
    message.clusterId = object.clusterId ?? "";
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.db = object.db ?? "";
    message.endpoint = object.endpoint ?? "";
    return message;
  },
};

messageTypeRegistry.set(Target_ClickHouse.$type, Target_ClickHouse);

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
