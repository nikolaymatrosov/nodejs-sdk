/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.2/reference/configuration-options/).
 */
export interface MongodConfig42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2";
  /** `storage` section of mongod configuration. */
  storage?:
    | MongodConfig42_Storage
    | undefined;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?:
    | MongodConfig42_OperationProfiling
    | undefined;
  /** `net` section of mongod configuration. */
  net?:
    | MongodConfig42_Network
    | undefined;
  /** `replication` section of mongod configuration. */
  setParameter?: MongodConfig42_SetParameter | undefined;
}

export interface MongodConfig42_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?:
    | MongodConfig42_Storage_WiredTiger
    | undefined;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.2/reference/glossary/#term-journal). */
  journal?: MongodConfig42_Storage_Journal | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongodConfig42_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?:
    | MongodConfig42_Storage_WiredTiger_EngineConfig
    | undefined;
  /** Collection configuration for WiredTiger. */
  collectionConfig?:
    | MongodConfig42_Storage_WiredTiger_CollectionConfig
    | undefined;
  /** Index configuration for WiredTiger */
  indexConfig?: MongodConfig42_Storage_WiredTiger_IndexConfig | undefined;
}

export interface MongodConfig42_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongodConfig42_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** NONE - No compression. */
  NONE = 1,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 2,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 3,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 4,
  UNRECOGNIZED = -1,
}

export function mongodConfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any,
): MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case 4:
    case "ZSTD":
      return MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
  switch (object) {
    case MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig42_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig42_Storage_WiredTiger_IndexConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.IndexConfig";
  /** Enables or disables [prefix compression](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-prefix-compression) */
  prefixCompression?: boolean | undefined;
}

export interface MongodConfig42_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number | undefined;
}

export interface MongodConfig42_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongodConfig42_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode.
   */
  slowOpThreshold?:
    | number
    | undefined;
  /**
   * The fraction of slow operations that should be profiled or logged.
   * operationProfiling.slowOpSampleRate accepts values between 0 and 1, inclusive.
   */
  slowOpSampleRate?: number | undefined;
}

export enum MongodConfig42_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig42_OperationProfiling_ModeFromJSON(object: any): MongodConfig42_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongodConfig42_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongodConfig42_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongodConfig42_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongodConfig42_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig42_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodConfig42_OperationProfiling_ModeToJSON(object: MongodConfig42_OperationProfiling_Mode): string {
  switch (object) {
    case MongodConfig42_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongodConfig42_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongodConfig42_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongodConfig42_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongodConfig42_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig42_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?:
    | number
    | undefined;
  /** Compression settings */
  compression?: MongodConfig42_Network_Compression | undefined;
}

export interface MongodConfig42_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: MongodConfig42_Network_Compression_Compressor[];
}

export enum MongodConfig42_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig42_Network_Compression_CompressorFromJSON(
  object: any,
): MongodConfig42_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig42_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return MongodConfig42_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return MongodConfig42_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return MongodConfig42_Network_Compression_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig42_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig42_Network_Compression_CompressorToJSON(
  object: MongodConfig42_Network_Compression_Compressor,
): string {
  switch (object) {
    case MongodConfig42_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig42_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig42_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig42_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig42_Network_Compression_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig42_SetParameter {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.SetParameter";
  /**
   * Enables or disables the mechanism that controls the rate at which the primary applies its writes with the
   * goal of keeping the secondary members [majority committed](https://www.mongodb.com/docs/v4.2/reference/command/replSetGetStatus/#replSetGetStatus.optimes.lastCommittedOpTime)
   * lag under a configurable maximum value.
   */
  enableFlowControl?: boolean | undefined;
}

export interface MongoCfgConfig42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2";
  /** `storage` section of mongocfg configuration. */
  storage?:
    | MongoCfgConfig42_Storage
    | undefined;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?:
    | MongoCfgConfig42_OperationProfiling
    | undefined;
  /** `net` section of mongocfg configuration. */
  net?: MongoCfgConfig42_Network | undefined;
}

export interface MongoCfgConfig42_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: MongoCfgConfig42_Storage_WiredTiger | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongoCfgConfig42_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: MongoCfgConfig42_Storage_WiredTiger_EngineConfig | undefined;
}

export interface MongoCfgConfig42_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongoCfgConfig42_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongoCfgConfig42_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.2/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number | undefined;
}

export enum MongoCfgConfig42_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongoCfgConfig42_OperationProfiling_ModeFromJSON(
  object: any,
): MongoCfgConfig42_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongoCfgConfig42_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongoCfgConfig42_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongoCfgConfig42_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongoCfgConfig42_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongoCfgConfig42_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongoCfgConfig42_OperationProfiling_ModeToJSON(
  object: MongoCfgConfig42_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongoCfgConfig42_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongoCfgConfig42_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongoCfgConfig42_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongoCfgConfig42_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongoCfgConfig42_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongoCfgConfig42_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongosConfig42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2";
  /** Network settings for mongos. */
  net?: MongosConfig42_Network | undefined;
}

export interface MongosConfig42_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?:
    | number
    | undefined;
  /** Compression settings */
  compression?: MongosConfig42_Network_Compression | undefined;
}

export interface MongosConfig42_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: MongosConfig42_Network_Compression_Compressor[];
}

export enum MongosConfig42_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  UNRECOGNIZED = -1,
}

export function mongosConfig42_Network_Compression_CompressorFromJSON(
  object: any,
): MongosConfig42_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongosConfig42_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return MongosConfig42_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return MongosConfig42_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return MongosConfig42_Network_Compression_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongosConfig42_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongosConfig42_Network_Compression_CompressorToJSON(
  object: MongosConfig42_Network_Compression_Compressor,
): string {
  switch (object) {
    case MongosConfig42_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongosConfig42_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case MongosConfig42_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case MongosConfig42_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case MongosConfig42_Network_Compression_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfigSet42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2";
  /**
   * Effective mongod settings for a MongoDB 4.2 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongodConfig42
    | undefined;
  /** User-defined mongod settings for a MongoDB 4.2 cluster. */
  userConfig?:
    | MongodConfig42
    | undefined;
  /** Default mongod configuration for a MongoDB 4.2 cluster. */
  defaultConfig?: MongodConfig42 | undefined;
}

export interface MongoCfgConfigSet42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2";
  /**
   * Effective mongocfg settings for a MongoDB 4.2 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongoCfgConfig42
    | undefined;
  /** User-defined mongocfg settings for a MongoDB 4.2 cluster. */
  userConfig?:
    | MongoCfgConfig42
    | undefined;
  /** Default mongocfg configuration for a MongoDB 4.2 cluster. */
  defaultConfig?: MongoCfgConfig42 | undefined;
}

export interface MongosConfigSet42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2";
  /**
   * Effective mongos settings for a MongoDB 4.2 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongosConfig42
    | undefined;
  /** User-defined mongos settings for a MongoDB 4.2 cluster. */
  userConfig?:
    | MongosConfig42
    | undefined;
  /** Default mongos configuration for a MongoDB 4.2 cluster. */
  defaultConfig?: MongosConfig42 | undefined;
}

function createBaseMongodConfig42(): MongodConfig42 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
    setParameter: undefined,
  };
}

export const MongodConfig42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2" as const,

  encode(message: MongodConfig42, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongodConfig42_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongodConfig42_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongodConfig42_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    if (message.setParameter !== undefined) {
      MongodConfig42_SetParameter.encode(message.setParameter, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongodConfig42_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongodConfig42_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongodConfig42_Network.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setParameter = MongodConfig42_SetParameter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42 {
    return {
      $type: MongodConfig42.$type,
      storage: isSet(object.storage) ? MongodConfig42_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongodConfig42_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongodConfig42_Network.fromJSON(object.net) : undefined,
      setParameter: isSet(object.setParameter) ? MongodConfig42_SetParameter.fromJSON(object.setParameter) : undefined,
    };
  },

  toJSON(message: MongodConfig42): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongodConfig42_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongodConfig42_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongodConfig42_Network.toJSON(message.net);
    }
    if (message.setParameter !== undefined) {
      obj.setParameter = MongodConfig42_SetParameter.toJSON(message.setParameter);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig42>): MongodConfig42 {
    return MongodConfig42.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig42>): MongodConfig42 {
    const message = createBaseMongodConfig42();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongodConfig42_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongodConfig42_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongodConfig42_Network.fromPartial(object.net)
      : undefined;
    message.setParameter = (object.setParameter !== undefined && object.setParameter !== null)
      ? MongodConfig42_SetParameter.fromPartial(object.setParameter)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig42.$type, MongodConfig42);

function createBaseMongodConfig42_Storage(): MongodConfig42_Storage {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage",
    wiredTiger: undefined,
    journal: undefined,
  };
}

export const MongodConfig42_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage" as const,

  encode(message: MongodConfig42_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongodConfig42_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    if (message.journal !== undefined) {
      MongodConfig42_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongodConfig42_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.journal = MongodConfig42_Storage_Journal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_Storage {
    return {
      $type: MongodConfig42_Storage.$type,
      wiredTiger: isSet(object.wiredTiger) ? MongodConfig42_Storage_WiredTiger.fromJSON(object.wiredTiger) : undefined,
      journal: isSet(object.journal) ? MongodConfig42_Storage_Journal.fromJSON(object.journal) : undefined,
    };
  },

  toJSON(message: MongodConfig42_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongodConfig42_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    if (message.journal !== undefined) {
      obj.journal = MongodConfig42_Storage_Journal.toJSON(message.journal);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig42_Storage>): MongodConfig42_Storage {
    return MongodConfig42_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig42_Storage>): MongodConfig42_Storage {
    const message = createBaseMongodConfig42_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongodConfig42_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    message.journal = (object.journal !== undefined && object.journal !== null)
      ? MongodConfig42_Storage_Journal.fromPartial(object.journal)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig42_Storage.$type, MongodConfig42_Storage);

function createBaseMongodConfig42_Storage_WiredTiger(): MongodConfig42_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger",
    engineConfig: undefined,
    collectionConfig: undefined,
    indexConfig: undefined,
  };
}

export const MongodConfig42_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger" as const,

  encode(message: MongodConfig42_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongodConfig42_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.collectionConfig !== undefined) {
      MongodConfig42_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.indexConfig !== undefined) {
      MongodConfig42_Storage_WiredTiger_IndexConfig.encode(message.indexConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongodConfig42_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collectionConfig = MongodConfig42_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexConfig = MongodConfig42_Storage_WiredTiger_IndexConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_Storage_WiredTiger {
    return {
      $type: MongodConfig42_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongodConfig42_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
      collectionConfig: isSet(object.collectionConfig)
        ? MongodConfig42_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
        : undefined,
      indexConfig: isSet(object.indexConfig)
        ? MongodConfig42_Storage_WiredTiger_IndexConfig.fromJSON(object.indexConfig)
        : undefined,
    };
  },

  toJSON(message: MongodConfig42_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongodConfig42_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    if (message.collectionConfig !== undefined) {
      obj.collectionConfig = MongodConfig42_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig);
    }
    if (message.indexConfig !== undefined) {
      obj.indexConfig = MongodConfig42_Storage_WiredTiger_IndexConfig.toJSON(message.indexConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig42_Storage_WiredTiger>): MongodConfig42_Storage_WiredTiger {
    return MongodConfig42_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig42_Storage_WiredTiger>): MongodConfig42_Storage_WiredTiger {
    const message = createBaseMongodConfig42_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongodConfig42_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    message.collectionConfig = (object.collectionConfig !== undefined && object.collectionConfig !== null)
      ? MongodConfig42_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
      : undefined;
    message.indexConfig = (object.indexConfig !== undefined && object.indexConfig !== null)
      ? MongodConfig42_Storage_WiredTiger_IndexConfig.fromPartial(object.indexConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig42_Storage_WiredTiger.$type, MongodConfig42_Storage_WiredTiger);

function createBaseMongodConfig42_Storage_WiredTiger_EngineConfig(): MongodConfig42_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongodConfig42_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongodConfig42_Storage_WiredTiger_EngineConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cacheSizeGb !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.cacheSizeGb! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_Storage_WiredTiger_EngineConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cacheSizeGb = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongodConfig42_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongodConfig42_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig42_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig42_Storage_WiredTiger_EngineConfig {
    return MongodConfig42_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig42_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig42_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongodConfig42_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig42_Storage_WiredTiger_EngineConfig.$type,
  MongodConfig42_Storage_WiredTiger_EngineConfig,
);

function createBaseMongodConfig42_Storage_WiredTiger_CollectionConfig(): MongodConfig42_Storage_WiredTiger_CollectionConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
  };
}

export const MongodConfig42_Storage_WiredTiger_CollectionConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: MongodConfig42_Storage_WiredTiger_CollectionConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blockCompressor !== 0) {
      writer.uint32(8).int32(message.blockCompressor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_Storage_WiredTiger_CollectionConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockCompressor = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_Storage_WiredTiger_CollectionConfig {
    return {
      $type: MongodConfig42_Storage_WiredTiger_CollectionConfig.$type,
      blockCompressor: isSet(object.blockCompressor)
        ? mongodConfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
        : 0,
    };
  },

  toJSON(message: MongodConfig42_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    if (message.blockCompressor !== 0) {
      obj.blockCompressor = mongodConfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
        message.blockCompressor,
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig42_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig42_Storage_WiredTiger_CollectionConfig {
    return MongodConfig42_Storage_WiredTiger_CollectionConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig42_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig42_Storage_WiredTiger_CollectionConfig {
    const message = createBaseMongodConfig42_Storage_WiredTiger_CollectionConfig();
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig42_Storage_WiredTiger_CollectionConfig.$type,
  MongodConfig42_Storage_WiredTiger_CollectionConfig,
);

function createBaseMongodConfig42_Storage_WiredTiger_IndexConfig(): MongodConfig42_Storage_WiredTiger_IndexConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.IndexConfig",
    prefixCompression: undefined,
  };
}

export const MongodConfig42_Storage_WiredTiger_IndexConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.IndexConfig" as const,

  encode(message: MongodConfig42_Storage_WiredTiger_IndexConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefixCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.prefixCompression! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_Storage_WiredTiger_IndexConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_Storage_WiredTiger_IndexConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prefixCompression = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_Storage_WiredTiger_IndexConfig {
    return {
      $type: MongodConfig42_Storage_WiredTiger_IndexConfig.$type,
      prefixCompression: isSet(object.prefixCompression) ? Boolean(object.prefixCompression) : undefined,
    };
  },

  toJSON(message: MongodConfig42_Storage_WiredTiger_IndexConfig): unknown {
    const obj: any = {};
    if (message.prefixCompression !== undefined) {
      obj.prefixCompression = message.prefixCompression;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig42_Storage_WiredTiger_IndexConfig>,
  ): MongodConfig42_Storage_WiredTiger_IndexConfig {
    return MongodConfig42_Storage_WiredTiger_IndexConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig42_Storage_WiredTiger_IndexConfig>,
  ): MongodConfig42_Storage_WiredTiger_IndexConfig {
    const message = createBaseMongodConfig42_Storage_WiredTiger_IndexConfig();
    message.prefixCompression = object.prefixCompression ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig42_Storage_WiredTiger_IndexConfig.$type,
  MongodConfig42_Storage_WiredTiger_IndexConfig,
);

function createBaseMongodConfig42_Storage_Journal(): MongodConfig42_Storage_Journal {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal", commitInterval: undefined };
}

export const MongodConfig42_Storage_Journal = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal" as const,

  encode(message: MongodConfig42_Storage_Journal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_Storage_Journal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitInterval = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_Storage_Journal {
    return {
      $type: MongodConfig42_Storage_Journal.$type,
      commitInterval: isSet(object.commitInterval) ? Number(object.commitInterval) : undefined,
    };
  },

  toJSON(message: MongodConfig42_Storage_Journal): unknown {
    const obj: any = {};
    if (message.commitInterval !== undefined) {
      obj.commitInterval = message.commitInterval;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig42_Storage_Journal>): MongodConfig42_Storage_Journal {
    return MongodConfig42_Storage_Journal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig42_Storage_Journal>): MongodConfig42_Storage_Journal {
    const message = createBaseMongodConfig42_Storage_Journal();
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig42_Storage_Journal.$type, MongodConfig42_Storage_Journal);

function createBaseMongodConfig42_OperationProfiling(): MongodConfig42_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
    slowOpSampleRate: undefined,
  };
}

export const MongodConfig42_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling" as const,

  encode(message: MongodConfig42_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.slowOpThreshold! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.slowOpSampleRate !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.slowOpSampleRate! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_OperationProfiling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.slowOpThreshold = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.slowOpSampleRate = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_OperationProfiling {
    return {
      $type: MongodConfig42_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongodConfig42_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
      slowOpSampleRate: isSet(object.slowOpSampleRate) ? Number(object.slowOpSampleRate) : undefined,
    };
  },

  toJSON(message: MongodConfig42_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongodConfig42_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    if (message.slowOpSampleRate !== undefined) {
      obj.slowOpSampleRate = message.slowOpSampleRate;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig42_OperationProfiling>): MongodConfig42_OperationProfiling {
    return MongodConfig42_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig42_OperationProfiling>): MongodConfig42_OperationProfiling {
    const message = createBaseMongodConfig42_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    message.slowOpSampleRate = object.slowOpSampleRate ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig42_OperationProfiling.$type, MongodConfig42_OperationProfiling);

function createBaseMongodConfig42_Network(): MongodConfig42_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network",
    maxIncomingConnections: undefined,
    compression: undefined,
  };
}

export const MongodConfig42_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network" as const,

  encode(message: MongodConfig42_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.compression !== undefined) {
      MongodConfig42_Network_Compression.encode(message.compression, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_Network();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxIncomingConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.compression = MongodConfig42_Network_Compression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_Network {
    return {
      $type: MongodConfig42_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
      compression: isSet(object.compression)
        ? MongodConfig42_Network_Compression.fromJSON(object.compression)
        : undefined,
    };
  },

  toJSON(message: MongodConfig42_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    if (message.compression !== undefined) {
      obj.compression = MongodConfig42_Network_Compression.toJSON(message.compression);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig42_Network>): MongodConfig42_Network {
    return MongodConfig42_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig42_Network>): MongodConfig42_Network {
    const message = createBaseMongodConfig42_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression = (object.compression !== undefined && object.compression !== null)
      ? MongodConfig42_Network_Compression.fromPartial(object.compression)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig42_Network.$type, MongodConfig42_Network);

function createBaseMongodConfig42_Network_Compression(): MongodConfig42_Network_Compression {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network.Compression", compressors: [] };
}

export const MongodConfig42_Network_Compression = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network.Compression" as const,

  encode(message: MongodConfig42_Network_Compression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_Network_Compression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.compressors.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.compressors.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_Network_Compression {
    return {
      $type: MongodConfig42_Network_Compression.$type,
      compressors: globalThis.Array.isArray(object?.compressors)
        ? object.compressors.map((e: any) => mongodConfig42_Network_Compression_CompressorFromJSON(e))
        : [],
    };
  },

  toJSON(message: MongodConfig42_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors?.length) {
      obj.compressors = message.compressors.map((e) => mongodConfig42_Network_Compression_CompressorToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig42_Network_Compression>): MongodConfig42_Network_Compression {
    return MongodConfig42_Network_Compression.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig42_Network_Compression>): MongodConfig42_Network_Compression {
    const message = createBaseMongodConfig42_Network_Compression();
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MongodConfig42_Network_Compression.$type, MongodConfig42_Network_Compression);

function createBaseMongodConfig42_SetParameter(): MongodConfig42_SetParameter {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.SetParameter", enableFlowControl: undefined };
}

export const MongodConfig42_SetParameter = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.SetParameter" as const,

  encode(message: MongodConfig42_SetParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableFlowControl !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableFlowControl! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig42_SetParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig42_SetParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.enableFlowControl = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig42_SetParameter {
    return {
      $type: MongodConfig42_SetParameter.$type,
      enableFlowControl: isSet(object.enableFlowControl) ? Boolean(object.enableFlowControl) : undefined,
    };
  },

  toJSON(message: MongodConfig42_SetParameter): unknown {
    const obj: any = {};
    if (message.enableFlowControl !== undefined) {
      obj.enableFlowControl = message.enableFlowControl;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig42_SetParameter>): MongodConfig42_SetParameter {
    return MongodConfig42_SetParameter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig42_SetParameter>): MongodConfig42_SetParameter {
    const message = createBaseMongodConfig42_SetParameter();
    message.enableFlowControl = object.enableFlowControl ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig42_SetParameter.$type, MongodConfig42_SetParameter);

function createBaseMongoCfgConfig42(): MongoCfgConfig42 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongoCfgConfig42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2" as const,

  encode(message: MongoCfgConfig42, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongoCfgConfig42_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongoCfgConfig42_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongoCfgConfig42_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig42 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig42();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongoCfgConfig42_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongoCfgConfig42_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongoCfgConfig42_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig42 {
    return {
      $type: MongoCfgConfig42.$type,
      storage: isSet(object.storage) ? MongoCfgConfig42_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongoCfgConfig42_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongoCfgConfig42_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig42): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongoCfgConfig42_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongoCfgConfig42_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongoCfgConfig42_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig42>): MongoCfgConfig42 {
    return MongoCfgConfig42.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig42>): MongoCfgConfig42 {
    const message = createBaseMongoCfgConfig42();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongoCfgConfig42_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongoCfgConfig42_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongoCfgConfig42_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig42.$type, MongoCfgConfig42);

function createBaseMongoCfgConfig42_Storage(): MongoCfgConfig42_Storage {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage", wiredTiger: undefined };
}

export const MongoCfgConfig42_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage" as const,

  encode(message: MongoCfgConfig42_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongoCfgConfig42_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig42_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig42_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongoCfgConfig42_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig42_Storage {
    return {
      $type: MongoCfgConfig42_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongoCfgConfig42_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig42_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongoCfgConfig42_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig42_Storage>): MongoCfgConfig42_Storage {
    return MongoCfgConfig42_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig42_Storage>): MongoCfgConfig42_Storage {
    const message = createBaseMongoCfgConfig42_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongoCfgConfig42_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig42_Storage.$type, MongoCfgConfig42_Storage);

function createBaseMongoCfgConfig42_Storage_WiredTiger(): MongoCfgConfig42_Storage_WiredTiger {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger", engineConfig: undefined };
}

export const MongoCfgConfig42_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger" as const,

  encode(message: MongoCfgConfig42_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongoCfgConfig42_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig42_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig42_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongoCfgConfig42_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig42_Storage_WiredTiger {
    return {
      $type: MongoCfgConfig42_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongoCfgConfig42_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig42_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongoCfgConfig42_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig42_Storage_WiredTiger>): MongoCfgConfig42_Storage_WiredTiger {
    return MongoCfgConfig42_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig42_Storage_WiredTiger>): MongoCfgConfig42_Storage_WiredTiger {
    const message = createBaseMongoCfgConfig42_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongoCfgConfig42_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig42_Storage_WiredTiger.$type, MongoCfgConfig42_Storage_WiredTiger);

function createBaseMongoCfgConfig42_Storage_WiredTiger_EngineConfig(): MongoCfgConfig42_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongoCfgConfig42_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongoCfgConfig42_Storage_WiredTiger_EngineConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cacheSizeGb !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.cacheSizeGb! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig42_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig42_Storage_WiredTiger_EngineConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cacheSizeGb = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig42_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongoCfgConfig42_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig42_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig42_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig42_Storage_WiredTiger_EngineConfig {
    return MongoCfgConfig42_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig42_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig42_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongoCfgConfig42_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig42_Storage_WiredTiger_EngineConfig.$type,
  MongoCfgConfig42_Storage_WiredTiger_EngineConfig,
);

function createBaseMongoCfgConfig42_OperationProfiling(): MongoCfgConfig42_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongoCfgConfig42_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling" as const,

  encode(message: MongoCfgConfig42_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.slowOpThreshold! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig42_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig42_OperationProfiling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.slowOpThreshold = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig42_OperationProfiling {
    return {
      $type: MongoCfgConfig42_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongoCfgConfig42_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig42_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongoCfgConfig42_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig42_OperationProfiling>): MongoCfgConfig42_OperationProfiling {
    return MongoCfgConfig42_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig42_OperationProfiling>): MongoCfgConfig42_OperationProfiling {
    const message = createBaseMongoCfgConfig42_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig42_OperationProfiling.$type, MongoCfgConfig42_OperationProfiling);

function createBaseMongoCfgConfig42_Network(): MongoCfgConfig42_Network {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network", maxIncomingConnections: undefined };
}

export const MongoCfgConfig42_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network" as const,

  encode(message: MongoCfgConfig42_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig42_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig42_Network();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxIncomingConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig42_Network {
    return {
      $type: MongoCfgConfig42_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig42_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig42_Network>): MongoCfgConfig42_Network {
    return MongoCfgConfig42_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig42_Network>): MongoCfgConfig42_Network {
    const message = createBaseMongoCfgConfig42_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig42_Network.$type, MongoCfgConfig42_Network);

function createBaseMongosConfig42(): MongosConfig42 {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2", net: undefined };
}

export const MongosConfig42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2" as const,

  encode(message: MongosConfig42, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.net !== undefined) {
      MongosConfig42_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig42 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig42();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.net = MongosConfig42_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig42 {
    return {
      $type: MongosConfig42.$type,
      net: isSet(object.net) ? MongosConfig42_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongosConfig42): unknown {
    const obj: any = {};
    if (message.net !== undefined) {
      obj.net = MongosConfig42_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig42>): MongosConfig42 {
    return MongosConfig42.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig42>): MongosConfig42 {
    const message = createBaseMongosConfig42();
    message.net = (object.net !== undefined && object.net !== null)
      ? MongosConfig42_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig42.$type, MongosConfig42);

function createBaseMongosConfig42_Network(): MongosConfig42_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network",
    maxIncomingConnections: undefined,
    compression: undefined,
  };
}

export const MongosConfig42_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network" as const,

  encode(message: MongosConfig42_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.compression !== undefined) {
      MongosConfig42_Network_Compression.encode(message.compression, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig42_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig42_Network();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxIncomingConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.compression = MongosConfig42_Network_Compression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig42_Network {
    return {
      $type: MongosConfig42_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
      compression: isSet(object.compression)
        ? MongosConfig42_Network_Compression.fromJSON(object.compression)
        : undefined,
    };
  },

  toJSON(message: MongosConfig42_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    if (message.compression !== undefined) {
      obj.compression = MongosConfig42_Network_Compression.toJSON(message.compression);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig42_Network>): MongosConfig42_Network {
    return MongosConfig42_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig42_Network>): MongosConfig42_Network {
    const message = createBaseMongosConfig42_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression = (object.compression !== undefined && object.compression !== null)
      ? MongosConfig42_Network_Compression.fromPartial(object.compression)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig42_Network.$type, MongosConfig42_Network);

function createBaseMongosConfig42_Network_Compression(): MongosConfig42_Network_Compression {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network.Compression", compressors: [] };
}

export const MongosConfig42_Network_Compression = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network.Compression" as const,

  encode(message: MongosConfig42_Network_Compression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig42_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig42_Network_Compression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.compressors.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.compressors.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig42_Network_Compression {
    return {
      $type: MongosConfig42_Network_Compression.$type,
      compressors: globalThis.Array.isArray(object?.compressors)
        ? object.compressors.map((e: any) => mongosConfig42_Network_Compression_CompressorFromJSON(e))
        : [],
    };
  },

  toJSON(message: MongosConfig42_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors?.length) {
      obj.compressors = message.compressors.map((e) => mongosConfig42_Network_Compression_CompressorToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig42_Network_Compression>): MongosConfig42_Network_Compression {
    return MongosConfig42_Network_Compression.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig42_Network_Compression>): MongosConfig42_Network_Compression {
    const message = createBaseMongosConfig42_Network_Compression();
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MongosConfig42_Network_Compression.$type, MongosConfig42_Network_Compression);

function createBaseMongodConfigSet42(): MongodConfigSet42 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongodConfigSet42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2" as const,

  encode(message: MongodConfigSet42, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongodConfig42.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongodConfig42.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongodConfig42.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfigSet42 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfigSet42();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongodConfig42.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongodConfig42.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongodConfig42.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfigSet42 {
    return {
      $type: MongodConfigSet42.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongodConfig42.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongodConfig42.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongodConfig42.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongodConfigSet42): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongodConfig42.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongodConfig42.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongodConfig42.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfigSet42>): MongodConfigSet42 {
    return MongodConfigSet42.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfigSet42>): MongodConfigSet42 {
    const message = createBaseMongodConfigSet42();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongodConfig42.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongodConfig42.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongodConfig42.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfigSet42.$type, MongodConfigSet42);

function createBaseMongoCfgConfigSet42(): MongoCfgConfigSet42 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongoCfgConfigSet42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2" as const,

  encode(message: MongoCfgConfigSet42, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongoCfgConfig42.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongoCfgConfig42.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongoCfgConfig42.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfigSet42 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfigSet42();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongoCfgConfig42.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongoCfgConfig42.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongoCfgConfig42.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfigSet42 {
    return {
      $type: MongoCfgConfigSet42.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongoCfgConfig42.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongoCfgConfig42.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongoCfgConfig42.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongoCfgConfigSet42): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongoCfgConfig42.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongoCfgConfig42.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongoCfgConfig42.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfigSet42>): MongoCfgConfigSet42 {
    return MongoCfgConfigSet42.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfigSet42>): MongoCfgConfigSet42 {
    const message = createBaseMongoCfgConfigSet42();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongoCfgConfig42.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongoCfgConfig42.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongoCfgConfig42.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfigSet42.$type, MongoCfgConfigSet42);

function createBaseMongosConfigSet42(): MongosConfigSet42 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongosConfigSet42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2" as const,

  encode(message: MongosConfigSet42, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongosConfig42.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongosConfig42.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongosConfig42.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfigSet42 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfigSet42();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongosConfig42.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongosConfig42.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongosConfig42.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfigSet42 {
    return {
      $type: MongosConfigSet42.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongosConfig42.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongosConfig42.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongosConfig42.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongosConfigSet42): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongosConfig42.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongosConfig42.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongosConfig42.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfigSet42>): MongosConfigSet42 {
    return MongosConfigSet42.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfigSet42>): MongosConfigSet42 {
    const message = createBaseMongosConfigSet42();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongosConfig42.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongosConfig42.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongosConfig42.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfigSet42.$type, MongosConfigSet42);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
