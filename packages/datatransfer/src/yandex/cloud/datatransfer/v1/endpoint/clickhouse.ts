/* eslint-disable */
import { Empty } from "@yandex-cloud/core/dist/generated/google/protobuf/empty";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { AltName, ColumnValue, Secret, TLSMode } from "./common";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum ClickhouseCleanupPolicy {
  CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED = 0,
  CLICKHOUSE_CLEANUP_POLICY_DISABLED = 1,
  CLICKHOUSE_CLEANUP_POLICY_DROP = 2,
  CLICKHOUSE_CLEANUP_POLICY_TRUNCATE = 3,
  UNRECOGNIZED = -1,
}

export function clickhouseCleanupPolicyFromJSON(object: any): ClickhouseCleanupPolicy {
  switch (object) {
    case 0:
    case "CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED":
      return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED;
    case 1:
    case "CLICKHOUSE_CLEANUP_POLICY_DISABLED":
      return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DISABLED;
    case 2:
    case "CLICKHOUSE_CLEANUP_POLICY_DROP":
      return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DROP;
    case 3:
    case "CLICKHOUSE_CLEANUP_POLICY_TRUNCATE":
      return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_TRUNCATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseCleanupPolicy.UNRECOGNIZED;
  }
}

export function clickhouseCleanupPolicyToJSON(object: ClickhouseCleanupPolicy): string {
  switch (object) {
    case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED:
      return "CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED";
    case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DISABLED:
      return "CLICKHOUSE_CLEANUP_POLICY_DISABLED";
    case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DROP:
      return "CLICKHOUSE_CLEANUP_POLICY_DROP";
    case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_TRUNCATE:
      return "CLICKHOUSE_CLEANUP_POLICY_TRUNCATE";
    case ClickhouseCleanupPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ClickhouseShard {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard";
  name: string;
  hosts: string[];
}

export interface OnPremiseClickhouse {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse";
  shards: ClickhouseShard[];
  httpPort: number;
  nativePort: number;
  tlsMode?: TLSMode | undefined;
}

export interface ClickhouseConnectionOptions {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions";
  mdbClusterId?: string | undefined;
  onPremise?:
    | OnPremiseClickhouse
    | undefined;
  /** Database */
  database: string;
  user: string;
  password?: Secret | undefined;
}

export interface ClickhouseConnection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection";
  connectionOptions?: ClickhouseConnectionOptions | undefined;
}

export interface ClickhouseSharding {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding";
  columnValueHash?: ClickhouseSharding_ColumnValueHash | undefined;
  customMapping?: ClickhouseSharding_ColumnValueMapping | undefined;
  transferId?: Empty | undefined;
  roundRobin?: Empty | undefined;
}

export interface ClickhouseSharding_ColumnValueHash {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash";
  columnName: string;
}

export interface ClickhouseSharding_ColumnValueMapping {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping";
  columnName: string;
  mapping: ClickhouseSharding_ColumnValueMapping_ValueToShard[];
}

export interface ClickhouseSharding_ColumnValueMapping_ValueToShard {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard";
  columnValue?: ColumnValue | undefined;
  shardName: string;
}

export interface ClickhouseSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource";
  connection?: ClickhouseConnection | undefined;
  subnetId: string;
  securityGroups: string[];
  /**
   * While list of tables for replication. If none or empty list is presented - will
   * replicate all tables. Can contain * patterns.
   */
  includeTables: string[];
  /**
   * Exclude list of tables for replication. If none or empty list is presented -
   * will replicate all tables. Can contain * patterns.
   */
  excludeTables: string[];
}

export interface ClickhouseTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget";
  connection?: ClickhouseConnection | undefined;
  subnetId: string;
  securityGroups: string[];
  clickhouseClusterName: string;
  /** Alternative table names in target */
  altNames: AltName[];
  sharding?: ClickhouseSharding | undefined;
  cleanupPolicy: ClickhouseCleanupPolicy;
}

function createBaseClickhouseShard(): ClickhouseShard {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard", name: "", hosts: [] };
}

export const ClickhouseShard = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard" as const,

  encode(message: ClickhouseShard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.hosts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseShard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseShard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hosts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseShard {
    return {
      $type: ClickhouseShard.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      hosts: globalThis.Array.isArray(object?.hosts) ? object.hosts.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ClickhouseShard): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.hosts?.length) {
      obj.hosts = message.hosts;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickhouseShard>, I>>(base?: I): ClickhouseShard {
    return ClickhouseShard.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickhouseShard>, I>>(object: I): ClickhouseShard {
    const message = createBaseClickhouseShard();
    message.name = object.name ?? "";
    message.hosts = object.hosts?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ClickhouseShard.$type, ClickhouseShard);

function createBaseOnPremiseClickhouse(): OnPremiseClickhouse {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse",
    shards: [],
    httpPort: 0,
    nativePort: 0,
    tlsMode: undefined,
  };
}

export const OnPremiseClickhouse = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse" as const,

  encode(message: OnPremiseClickhouse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.shards) {
      ClickhouseShard.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.httpPort !== 0) {
      writer.uint32(24).int64(message.httpPort);
    }
    if (message.nativePort !== 0) {
      writer.uint32(32).int64(message.nativePort);
    }
    if (message.tlsMode !== undefined) {
      TLSMode.encode(message.tlsMode, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnPremiseClickhouse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnPremiseClickhouse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shards.push(ClickhouseShard.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.httpPort = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nativePort = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tlsMode = TLSMode.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OnPremiseClickhouse {
    return {
      $type: OnPremiseClickhouse.$type,
      shards: globalThis.Array.isArray(object?.shards)
        ? object.shards.map((e: any) => ClickhouseShard.fromJSON(e))
        : [],
      httpPort: isSet(object.httpPort) ? globalThis.Number(object.httpPort) : 0,
      nativePort: isSet(object.nativePort) ? globalThis.Number(object.nativePort) : 0,
      tlsMode: isSet(object.tlsMode) ? TLSMode.fromJSON(object.tlsMode) : undefined,
    };
  },

  toJSON(message: OnPremiseClickhouse): unknown {
    const obj: any = {};
    if (message.shards?.length) {
      obj.shards = message.shards.map((e) => ClickhouseShard.toJSON(e));
    }
    if (message.httpPort !== 0) {
      obj.httpPort = Math.round(message.httpPort);
    }
    if (message.nativePort !== 0) {
      obj.nativePort = Math.round(message.nativePort);
    }
    if (message.tlsMode !== undefined) {
      obj.tlsMode = TLSMode.toJSON(message.tlsMode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OnPremiseClickhouse>, I>>(base?: I): OnPremiseClickhouse {
    return OnPremiseClickhouse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OnPremiseClickhouse>, I>>(object: I): OnPremiseClickhouse {
    const message = createBaseOnPremiseClickhouse();
    message.shards = object.shards?.map((e) => ClickhouseShard.fromPartial(e)) || [];
    message.httpPort = object.httpPort ?? 0;
    message.nativePort = object.nativePort ?? 0;
    message.tlsMode = (object.tlsMode !== undefined && object.tlsMode !== null)
      ? TLSMode.fromPartial(object.tlsMode)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(OnPremiseClickhouse.$type, OnPremiseClickhouse);

function createBaseClickhouseConnectionOptions(): ClickhouseConnectionOptions {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions",
    mdbClusterId: undefined,
    onPremise: undefined,
    database: "",
    user: "",
    password: undefined,
  };
}

export const ClickhouseConnectionOptions = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions" as const,

  encode(message: ClickhouseConnectionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mdbClusterId !== undefined) {
      writer.uint32(42).string(message.mdbClusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremiseClickhouse.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
    }
    if (message.database !== "") {
      writer.uint32(66).string(message.database);
    }
    if (message.user !== "") {
      writer.uint32(50).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConnectionOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConnectionOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.mdbClusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.onPremise = OnPremiseClickhouse.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.database = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.user = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.password = Secret.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConnectionOptions {
    return {
      $type: ClickhouseConnectionOptions.$type,
      mdbClusterId: isSet(object.mdbClusterId) ? globalThis.String(object.mdbClusterId) : undefined,
      onPremise: isSet(object.onPremise) ? OnPremiseClickhouse.fromJSON(object.onPremise) : undefined,
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? Secret.fromJSON(object.password) : undefined,
    };
  },

  toJSON(message: ClickhouseConnectionOptions): unknown {
    const obj: any = {};
    if (message.mdbClusterId !== undefined) {
      obj.mdbClusterId = message.mdbClusterId;
    }
    if (message.onPremise !== undefined) {
      obj.onPremise = OnPremiseClickhouse.toJSON(message.onPremise);
    }
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== undefined) {
      obj.password = Secret.toJSON(message.password);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickhouseConnectionOptions>, I>>(base?: I): ClickhouseConnectionOptions {
    return ClickhouseConnectionOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickhouseConnectionOptions>, I>>(object: I): ClickhouseConnectionOptions {
    const message = createBaseClickhouseConnectionOptions();
    message.mdbClusterId = object.mdbClusterId ?? undefined;
    message.onPremise = (object.onPremise !== undefined && object.onPremise !== null)
      ? OnPremiseClickhouse.fromPartial(object.onPremise)
      : undefined;
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.password = (object.password !== undefined && object.password !== null)
      ? Secret.fromPartial(object.password)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConnectionOptions.$type, ClickhouseConnectionOptions);

function createBaseClickhouseConnection(): ClickhouseConnection {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection", connectionOptions: undefined };
}

export const ClickhouseConnection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection" as const,

  encode(message: ClickhouseConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionOptions !== undefined) {
      ClickhouseConnectionOptions.encode(message.connectionOptions, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionOptions = ClickhouseConnectionOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConnection {
    return {
      $type: ClickhouseConnection.$type,
      connectionOptions: isSet(object.connectionOptions)
        ? ClickhouseConnectionOptions.fromJSON(object.connectionOptions)
        : undefined,
    };
  },

  toJSON(message: ClickhouseConnection): unknown {
    const obj: any = {};
    if (message.connectionOptions !== undefined) {
      obj.connectionOptions = ClickhouseConnectionOptions.toJSON(message.connectionOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickhouseConnection>, I>>(base?: I): ClickhouseConnection {
    return ClickhouseConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickhouseConnection>, I>>(object: I): ClickhouseConnection {
    const message = createBaseClickhouseConnection();
    message.connectionOptions = (object.connectionOptions !== undefined && object.connectionOptions !== null)
      ? ClickhouseConnectionOptions.fromPartial(object.connectionOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConnection.$type, ClickhouseConnection);

function createBaseClickhouseSharding(): ClickhouseSharding {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding",
    columnValueHash: undefined,
    customMapping: undefined,
    transferId: undefined,
    roundRobin: undefined,
  };
}

export const ClickhouseSharding = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding" as const,

  encode(message: ClickhouseSharding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.columnValueHash !== undefined) {
      ClickhouseSharding_ColumnValueHash.encode(message.columnValueHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.customMapping !== undefined) {
      ClickhouseSharding_ColumnValueMapping.encode(message.customMapping, writer.uint32(18).fork()).ldelim();
    }
    if (message.transferId !== undefined) {
      Empty.encode(message.transferId, writer.uint32(26).fork()).ldelim();
    }
    if (message.roundRobin !== undefined) {
      Empty.encode(message.roundRobin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseSharding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseSharding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.columnValueHash = ClickhouseSharding_ColumnValueHash.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customMapping = ClickhouseSharding_ColumnValueMapping.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.transferId = Empty.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.roundRobin = Empty.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSharding {
    return {
      $type: ClickhouseSharding.$type,
      columnValueHash: isSet(object.columnValueHash)
        ? ClickhouseSharding_ColumnValueHash.fromJSON(object.columnValueHash)
        : undefined,
      customMapping: isSet(object.customMapping)
        ? ClickhouseSharding_ColumnValueMapping.fromJSON(object.customMapping)
        : undefined,
      transferId: isSet(object.transferId) ? Empty.fromJSON(object.transferId) : undefined,
      roundRobin: isSet(object.roundRobin) ? Empty.fromJSON(object.roundRobin) : undefined,
    };
  },

  toJSON(message: ClickhouseSharding): unknown {
    const obj: any = {};
    if (message.columnValueHash !== undefined) {
      obj.columnValueHash = ClickhouseSharding_ColumnValueHash.toJSON(message.columnValueHash);
    }
    if (message.customMapping !== undefined) {
      obj.customMapping = ClickhouseSharding_ColumnValueMapping.toJSON(message.customMapping);
    }
    if (message.transferId !== undefined) {
      obj.transferId = Empty.toJSON(message.transferId);
    }
    if (message.roundRobin !== undefined) {
      obj.roundRobin = Empty.toJSON(message.roundRobin);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickhouseSharding>, I>>(base?: I): ClickhouseSharding {
    return ClickhouseSharding.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickhouseSharding>, I>>(object: I): ClickhouseSharding {
    const message = createBaseClickhouseSharding();
    message.columnValueHash = (object.columnValueHash !== undefined && object.columnValueHash !== null)
      ? ClickhouseSharding_ColumnValueHash.fromPartial(object.columnValueHash)
      : undefined;
    message.customMapping = (object.customMapping !== undefined && object.customMapping !== null)
      ? ClickhouseSharding_ColumnValueMapping.fromPartial(object.customMapping)
      : undefined;
    message.transferId = (object.transferId !== undefined && object.transferId !== null)
      ? Empty.fromPartial(object.transferId)
      : undefined;
    message.roundRobin = (object.roundRobin !== undefined && object.roundRobin !== null)
      ? Empty.fromPartial(object.roundRobin)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseSharding.$type, ClickhouseSharding);

function createBaseClickhouseSharding_ColumnValueHash(): ClickhouseSharding_ColumnValueHash {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash", columnName: "" };
}

export const ClickhouseSharding_ColumnValueHash = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash" as const,

  encode(message: ClickhouseSharding_ColumnValueHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.columnName !== "") {
      writer.uint32(10).string(message.columnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseSharding_ColumnValueHash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseSharding_ColumnValueHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.columnName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSharding_ColumnValueHash {
    return {
      $type: ClickhouseSharding_ColumnValueHash.$type,
      columnName: isSet(object.columnName) ? globalThis.String(object.columnName) : "",
    };
  },

  toJSON(message: ClickhouseSharding_ColumnValueHash): unknown {
    const obj: any = {};
    if (message.columnName !== "") {
      obj.columnName = message.columnName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickhouseSharding_ColumnValueHash>, I>>(
    base?: I,
  ): ClickhouseSharding_ColumnValueHash {
    return ClickhouseSharding_ColumnValueHash.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickhouseSharding_ColumnValueHash>, I>>(
    object: I,
  ): ClickhouseSharding_ColumnValueHash {
    const message = createBaseClickhouseSharding_ColumnValueHash();
    message.columnName = object.columnName ?? "";
    return message;
  },
};

messageTypeRegistry.set(ClickhouseSharding_ColumnValueHash.$type, ClickhouseSharding_ColumnValueHash);

function createBaseClickhouseSharding_ColumnValueMapping(): ClickhouseSharding_ColumnValueMapping {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping",
    columnName: "",
    mapping: [],
  };
}

export const ClickhouseSharding_ColumnValueMapping = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping" as const,

  encode(message: ClickhouseSharding_ColumnValueMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.columnName !== "") {
      writer.uint32(10).string(message.columnName);
    }
    for (const v of message.mapping) {
      ClickhouseSharding_ColumnValueMapping_ValueToShard.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseSharding_ColumnValueMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseSharding_ColumnValueMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.columnName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mapping.push(ClickhouseSharding_ColumnValueMapping_ValueToShard.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSharding_ColumnValueMapping {
    return {
      $type: ClickhouseSharding_ColumnValueMapping.$type,
      columnName: isSet(object.columnName) ? globalThis.String(object.columnName) : "",
      mapping: globalThis.Array.isArray(object?.mapping)
        ? object.mapping.map((e: any) => ClickhouseSharding_ColumnValueMapping_ValueToShard.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClickhouseSharding_ColumnValueMapping): unknown {
    const obj: any = {};
    if (message.columnName !== "") {
      obj.columnName = message.columnName;
    }
    if (message.mapping?.length) {
      obj.mapping = message.mapping.map((e) => ClickhouseSharding_ColumnValueMapping_ValueToShard.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickhouseSharding_ColumnValueMapping>, I>>(
    base?: I,
  ): ClickhouseSharding_ColumnValueMapping {
    return ClickhouseSharding_ColumnValueMapping.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickhouseSharding_ColumnValueMapping>, I>>(
    object: I,
  ): ClickhouseSharding_ColumnValueMapping {
    const message = createBaseClickhouseSharding_ColumnValueMapping();
    message.columnName = object.columnName ?? "";
    message.mapping = object.mapping?.map((e) => ClickhouseSharding_ColumnValueMapping_ValueToShard.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(ClickhouseSharding_ColumnValueMapping.$type, ClickhouseSharding_ColumnValueMapping);

function createBaseClickhouseSharding_ColumnValueMapping_ValueToShard(): ClickhouseSharding_ColumnValueMapping_ValueToShard {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard",
    columnValue: undefined,
    shardName: "",
  };
}

export const ClickhouseSharding_ColumnValueMapping_ValueToShard = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard" as const,

  encode(
    message: ClickhouseSharding_ColumnValueMapping_ValueToShard,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.columnValue !== undefined) {
      ColumnValue.encode(message.columnValue, writer.uint32(10).fork()).ldelim();
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseSharding_ColumnValueMapping_ValueToShard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseSharding_ColumnValueMapping_ValueToShard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.columnValue = ColumnValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.shardName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSharding_ColumnValueMapping_ValueToShard {
    return {
      $type: ClickhouseSharding_ColumnValueMapping_ValueToShard.$type,
      columnValue: isSet(object.columnValue) ? ColumnValue.fromJSON(object.columnValue) : undefined,
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
    };
  },

  toJSON(message: ClickhouseSharding_ColumnValueMapping_ValueToShard): unknown {
    const obj: any = {};
    if (message.columnValue !== undefined) {
      obj.columnValue = ColumnValue.toJSON(message.columnValue);
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickhouseSharding_ColumnValueMapping_ValueToShard>, I>>(
    base?: I,
  ): ClickhouseSharding_ColumnValueMapping_ValueToShard {
    return ClickhouseSharding_ColumnValueMapping_ValueToShard.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickhouseSharding_ColumnValueMapping_ValueToShard>, I>>(
    object: I,
  ): ClickhouseSharding_ColumnValueMapping_ValueToShard {
    const message = createBaseClickhouseSharding_ColumnValueMapping_ValueToShard();
    message.columnValue = (object.columnValue !== undefined && object.columnValue !== null)
      ? ColumnValue.fromPartial(object.columnValue)
      : undefined;
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseSharding_ColumnValueMapping_ValueToShard.$type,
  ClickhouseSharding_ColumnValueMapping_ValueToShard,
);

function createBaseClickhouseSource(): ClickhouseSource {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource",
    connection: undefined,
    subnetId: "",
    securityGroups: [],
    includeTables: [],
    excludeTables: [],
  };
}

export const ClickhouseSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource" as const,

  encode(message: ClickhouseSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      ClickhouseConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(74).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.includeTables) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.excludeTables) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = ClickhouseConnection.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.includeTables.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.excludeTables.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSource {
    return {
      $type: ClickhouseSource.$type,
      connection: isSet(object.connection) ? ClickhouseConnection.fromJSON(object.connection) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      includeTables: globalThis.Array.isArray(object?.includeTables)
        ? object.includeTables.map((e: any) => globalThis.String(e))
        : [],
      excludeTables: globalThis.Array.isArray(object?.excludeTables)
        ? object.excludeTables.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ClickhouseSource): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = ClickhouseConnection.toJSON(message.connection);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
    }
    if (message.includeTables?.length) {
      obj.includeTables = message.includeTables;
    }
    if (message.excludeTables?.length) {
      obj.excludeTables = message.excludeTables;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickhouseSource>, I>>(base?: I): ClickhouseSource {
    return ClickhouseSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickhouseSource>, I>>(object: I): ClickhouseSource {
    const message = createBaseClickhouseSource();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? ClickhouseConnection.fromPartial(object.connection)
      : undefined;
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.includeTables = object.includeTables?.map((e) => e) || [];
    message.excludeTables = object.excludeTables?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ClickhouseSource.$type, ClickhouseSource);

function createBaseClickhouseTarget(): ClickhouseTarget {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget",
    connection: undefined,
    subnetId: "",
    securityGroups: [],
    clickhouseClusterName: "",
    altNames: [],
    sharding: undefined,
    cleanupPolicy: 0,
  };
}

export const ClickhouseTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget" as const,

  encode(message: ClickhouseTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      ClickhouseConnection.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(98).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(410).string(v!);
    }
    if (message.clickhouseClusterName !== "") {
      writer.uint32(402).string(message.clickhouseClusterName);
    }
    for (const v of message.altNames) {
      AltName.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.sharding !== undefined) {
      ClickhouseSharding.encode(message.sharding, writer.uint32(178).fork()).ldelim();
    }
    if (message.cleanupPolicy !== 0) {
      writer.uint32(168).int32(message.cleanupPolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connection = ClickhouseConnection.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 51:
          if (tag !== 410) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.clickhouseClusterName = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.altNames.push(AltName.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.sharding = ClickhouseSharding.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.cleanupPolicy = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseTarget {
    return {
      $type: ClickhouseTarget.$type,
      connection: isSet(object.connection) ? ClickhouseConnection.fromJSON(object.connection) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      clickhouseClusterName: isSet(object.clickhouseClusterName) ? globalThis.String(object.clickhouseClusterName) : "",
      altNames: globalThis.Array.isArray(object?.altNames) ? object.altNames.map((e: any) => AltName.fromJSON(e)) : [],
      sharding: isSet(object.sharding) ? ClickhouseSharding.fromJSON(object.sharding) : undefined,
      cleanupPolicy: isSet(object.cleanupPolicy) ? clickhouseCleanupPolicyFromJSON(object.cleanupPolicy) : 0,
    };
  },

  toJSON(message: ClickhouseTarget): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = ClickhouseConnection.toJSON(message.connection);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
    }
    if (message.clickhouseClusterName !== "") {
      obj.clickhouseClusterName = message.clickhouseClusterName;
    }
    if (message.altNames?.length) {
      obj.altNames = message.altNames.map((e) => AltName.toJSON(e));
    }
    if (message.sharding !== undefined) {
      obj.sharding = ClickhouseSharding.toJSON(message.sharding);
    }
    if (message.cleanupPolicy !== 0) {
      obj.cleanupPolicy = clickhouseCleanupPolicyToJSON(message.cleanupPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickhouseTarget>, I>>(base?: I): ClickhouseTarget {
    return ClickhouseTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickhouseTarget>, I>>(object: I): ClickhouseTarget {
    const message = createBaseClickhouseTarget();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? ClickhouseConnection.fromPartial(object.connection)
      : undefined;
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.clickhouseClusterName = object.clickhouseClusterName ?? "";
    message.altNames = object.altNames?.map((e) => AltName.fromPartial(e)) || [];
    message.sharding = (object.sharding !== undefined && object.sharding !== null)
      ? ClickhouseSharding.fromPartial(object.sharding)
      : undefined;
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseTarget.$type, ClickhouseTarget);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

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
