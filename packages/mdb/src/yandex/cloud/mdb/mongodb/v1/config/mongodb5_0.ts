/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/).
 */
export interface MongodConfig50 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0";
  /** `storage` section of mongod configuration. */
  storage?:
    | MongodConfig50_Storage
    | undefined;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?:
    | MongodConfig50_OperationProfiling
    | undefined;
  /** `net` section of mongod configuration. */
  net?:
    | MongodConfig50_Network
    | undefined;
  /** `SetParameter` section of mongod configuration. */
  setParameter?: MongodConfig50_SetParameter | undefined;
}

export interface MongodConfig50_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?:
    | MongodConfig50_Storage_WiredTiger
    | undefined;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v5.0/reference/glossary/#term-journal). */
  journal?: MongodConfig50_Storage_Journal | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongodConfig50_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?:
    | MongodConfig50_Storage_WiredTiger_EngineConfig
    | undefined;
  /** Collection configuration for WiredTiger. */
  collectionConfig?:
    | MongodConfig50_Storage_WiredTiger_CollectionConfig
    | undefined;
  /** Index configuration for WiredTiger */
  indexConfig?: MongodConfig50_Storage_WiredTiger_IndexConfig | undefined;
}

export interface MongodConfig50_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongodConfig50_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** NONE - No compression. */
  NONE = 1,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v5.0/reference/glossary/#term-snappy) compression. */
  SNAPPY = 2,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v5.0/reference/glossary/#term-zlib) compression. */
  ZLIB = 3,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v5.0/reference/glossary/#term-zstd) compression. */
  ZSTD = 4,
  UNRECOGNIZED = -1,
}

export function mongodConfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any,
): MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case 4:
    case "ZSTD":
      return MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
  switch (object) {
    case MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig50_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig50_Storage_WiredTiger_IndexConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.IndexConfig";
  /** Enables or disables [prefix compression](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-prefix-compression) */
  prefixCompression?: boolean | undefined;
}

export interface MongodConfig50_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number | undefined;
}

export interface MongodConfig50_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongodConfig50_OperationProfiling_Mode;
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

export enum MongodConfig50_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig50_OperationProfiling_ModeFromJSON(object: any): MongodConfig50_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongodConfig50_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongodConfig50_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongodConfig50_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongodConfig50_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig50_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodConfig50_OperationProfiling_ModeToJSON(object: MongodConfig50_OperationProfiling_Mode): string {
  switch (object) {
    case MongodConfig50_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongodConfig50_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongodConfig50_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongodConfig50_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongodConfig50_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig50_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?:
    | number
    | undefined;
  /** Compression settings */
  compression?: MongodConfig50_Network_Compression | undefined;
}

export interface MongodConfig50_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: MongodConfig50_Network_Compression_Compressor[];
}

export enum MongodConfig50_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig50_Network_Compression_CompressorFromJSON(
  object: any,
): MongodConfig50_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig50_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return MongodConfig50_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return MongodConfig50_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return MongodConfig50_Network_Compression_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig50_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig50_Network_Compression_CompressorToJSON(
  object: MongodConfig50_Network_Compression_Compressor,
): string {
  switch (object) {
    case MongodConfig50_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig50_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig50_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig50_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig50_Network_Compression_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig50_SetParameter {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.SetParameter";
  /**
   * Enables or disables the mechanism that controls the rate at which the primary applies its writes with the
   * goal of keeping the secondary members [majority committed](https://www.mongodb.com/docs/v4.2/reference/command/replSetGetStatus/#replSetGetStatus.optimes.lastCommittedOpTime)
   * lag under a configurable maximum value.
   */
  enableFlowControl?: boolean | undefined;
}

export interface MongoCfgConfig50 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0";
  /** `storage` section of mongocfg configuration. */
  storage?:
    | MongoCfgConfig50_Storage
    | undefined;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?:
    | MongoCfgConfig50_OperationProfiling
    | undefined;
  /** `net` section of mongocfg configuration. */
  net?: MongoCfgConfig50_Network | undefined;
}

export interface MongoCfgConfig50_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: MongoCfgConfig50_Storage_WiredTiger | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongoCfgConfig50_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: MongoCfgConfig50_Storage_WiredTiger_EngineConfig | undefined;
}

export interface MongoCfgConfig50_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongoCfgConfig50_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongoCfgConfig50_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number | undefined;
}

export enum MongoCfgConfig50_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongoCfgConfig50_OperationProfiling_ModeFromJSON(
  object: any,
): MongoCfgConfig50_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongoCfgConfig50_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongoCfgConfig50_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongoCfgConfig50_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongoCfgConfig50_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongoCfgConfig50_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongoCfgConfig50_OperationProfiling_ModeToJSON(
  object: MongoCfgConfig50_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongoCfgConfig50_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongoCfgConfig50_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongoCfgConfig50_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongoCfgConfig50_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongoCfgConfig50_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongoCfgConfig50_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongosConfig50 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0";
  /** Network settings for mongos. */
  net?: MongosConfig50_Network | undefined;
}

export interface MongosConfig50_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?:
    | number
    | undefined;
  /** Compression settings */
  compression?: MongosConfig50_Network_Compression | undefined;
}

export interface MongosConfig50_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: MongosConfig50_Network_Compression_Compressor[];
}

export enum MongosConfig50_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  UNRECOGNIZED = -1,
}

export function mongosConfig50_Network_Compression_CompressorFromJSON(
  object: any,
): MongosConfig50_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongosConfig50_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return MongosConfig50_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return MongosConfig50_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return MongosConfig50_Network_Compression_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongosConfig50_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongosConfig50_Network_Compression_CompressorToJSON(
  object: MongosConfig50_Network_Compression_Compressor,
): string {
  switch (object) {
    case MongosConfig50_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongosConfig50_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case MongosConfig50_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case MongosConfig50_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case MongosConfig50_Network_Compression_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfigSet50 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0";
  /**
   * Effective mongod settings for a MongoDB 5.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongodConfig50
    | undefined;
  /** User-defined mongod settings for a MongoDB 5.0 cluster. */
  userConfig?:
    | MongodConfig50
    | undefined;
  /** Default mongod configuration for a MongoDB 5.0 cluster. */
  defaultConfig?: MongodConfig50 | undefined;
}

export interface MongoCfgConfigSet50 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0";
  /**
   * Effective mongocfg settings for a MongoDB 5.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongoCfgConfig50
    | undefined;
  /** User-defined mongocfg settings for a MongoDB 5.0 cluster. */
  userConfig?:
    | MongoCfgConfig50
    | undefined;
  /** Default mongocfg configuration for a MongoDB 5.0 cluster. */
  defaultConfig?: MongoCfgConfig50 | undefined;
}

export interface MongosConfigSet50 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0";
  /**
   * Effective mongos settings for a MongoDB 5.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongosConfig50
    | undefined;
  /** User-defined mongos settings for a MongoDB 5.0 cluster. */
  userConfig?:
    | MongosConfig50
    | undefined;
  /** Default mongos configuration for a MongoDB 5.0 cluster. */
  defaultConfig?: MongosConfig50 | undefined;
}

function createBaseMongodConfig50(): MongodConfig50 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
    setParameter: undefined,
  };
}

export const MongodConfig50 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0" as const,

  encode(message: MongodConfig50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongodConfig50_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongodConfig50_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongodConfig50_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    if (message.setParameter !== undefined) {
      MongodConfig50_SetParameter.encode(message.setParameter, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongodConfig50_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongodConfig50_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongodConfig50_Network.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setParameter = MongodConfig50_SetParameter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig50 {
    return {
      $type: MongodConfig50.$type,
      storage: isSet(object.storage) ? MongodConfig50_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongodConfig50_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongodConfig50_Network.fromJSON(object.net) : undefined,
      setParameter: isSet(object.setParameter) ? MongodConfig50_SetParameter.fromJSON(object.setParameter) : undefined,
    };
  },

  toJSON(message: MongodConfig50): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongodConfig50_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongodConfig50_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongodConfig50_Network.toJSON(message.net);
    }
    if (message.setParameter !== undefined) {
      obj.setParameter = MongodConfig50_SetParameter.toJSON(message.setParameter);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50>): MongodConfig50 {
    return MongodConfig50.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50>): MongodConfig50 {
    const message = createBaseMongodConfig50();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongodConfig50_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongodConfig50_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongodConfig50_Network.fromPartial(object.net)
      : undefined;
    message.setParameter = (object.setParameter !== undefined && object.setParameter !== null)
      ? MongodConfig50_SetParameter.fromPartial(object.setParameter)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50.$type, MongodConfig50);

function createBaseMongodConfig50_Storage(): MongodConfig50_Storage {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage",
    wiredTiger: undefined,
    journal: undefined,
  };
}

export const MongodConfig50_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage" as const,

  encode(message: MongodConfig50_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongodConfig50_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    if (message.journal !== undefined) {
      MongodConfig50_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongodConfig50_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.journal = MongodConfig50_Storage_Journal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig50_Storage {
    return {
      $type: MongodConfig50_Storage.$type,
      wiredTiger: isSet(object.wiredTiger) ? MongodConfig50_Storage_WiredTiger.fromJSON(object.wiredTiger) : undefined,
      journal: isSet(object.journal) ? MongodConfig50_Storage_Journal.fromJSON(object.journal) : undefined,
    };
  },

  toJSON(message: MongodConfig50_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongodConfig50_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    if (message.journal !== undefined) {
      obj.journal = MongodConfig50_Storage_Journal.toJSON(message.journal);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50_Storage>): MongodConfig50_Storage {
    return MongodConfig50_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50_Storage>): MongodConfig50_Storage {
    const message = createBaseMongodConfig50_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongodConfig50_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    message.journal = (object.journal !== undefined && object.journal !== null)
      ? MongodConfig50_Storage_Journal.fromPartial(object.journal)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50_Storage.$type, MongodConfig50_Storage);

function createBaseMongodConfig50_Storage_WiredTiger(): MongodConfig50_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger",
    engineConfig: undefined,
    collectionConfig: undefined,
    indexConfig: undefined,
  };
}

export const MongodConfig50_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger" as const,

  encode(message: MongodConfig50_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongodConfig50_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.collectionConfig !== undefined) {
      MongodConfig50_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.indexConfig !== undefined) {
      MongodConfig50_Storage_WiredTiger_IndexConfig.encode(message.indexConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongodConfig50_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collectionConfig = MongodConfig50_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexConfig = MongodConfig50_Storage_WiredTiger_IndexConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig50_Storage_WiredTiger {
    return {
      $type: MongodConfig50_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongodConfig50_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
      collectionConfig: isSet(object.collectionConfig)
        ? MongodConfig50_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
        : undefined,
      indexConfig: isSet(object.indexConfig)
        ? MongodConfig50_Storage_WiredTiger_IndexConfig.fromJSON(object.indexConfig)
        : undefined,
    };
  },

  toJSON(message: MongodConfig50_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongodConfig50_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    if (message.collectionConfig !== undefined) {
      obj.collectionConfig = MongodConfig50_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig);
    }
    if (message.indexConfig !== undefined) {
      obj.indexConfig = MongodConfig50_Storage_WiredTiger_IndexConfig.toJSON(message.indexConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50_Storage_WiredTiger>): MongodConfig50_Storage_WiredTiger {
    return MongodConfig50_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50_Storage_WiredTiger>): MongodConfig50_Storage_WiredTiger {
    const message = createBaseMongodConfig50_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongodConfig50_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    message.collectionConfig = (object.collectionConfig !== undefined && object.collectionConfig !== null)
      ? MongodConfig50_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
      : undefined;
    message.indexConfig = (object.indexConfig !== undefined && object.indexConfig !== null)
      ? MongodConfig50_Storage_WiredTiger_IndexConfig.fromPartial(object.indexConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50_Storage_WiredTiger.$type, MongodConfig50_Storage_WiredTiger);

function createBaseMongodConfig50_Storage_WiredTiger_EngineConfig(): MongodConfig50_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongodConfig50_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongodConfig50_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongodConfig50_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongodConfig50_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongodConfig50_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig50_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig50_Storage_WiredTiger_EngineConfig {
    return MongodConfig50_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig50_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig50_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongodConfig50_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig50_Storage_WiredTiger_EngineConfig.$type,
  MongodConfig50_Storage_WiredTiger_EngineConfig,
);

function createBaseMongodConfig50_Storage_WiredTiger_CollectionConfig(): MongodConfig50_Storage_WiredTiger_CollectionConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
  };
}

export const MongodConfig50_Storage_WiredTiger_CollectionConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: MongodConfig50_Storage_WiredTiger_CollectionConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blockCompressor !== 0) {
      writer.uint32(8).int32(message.blockCompressor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_Storage_WiredTiger_CollectionConfig();
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

  fromJSON(object: any): MongodConfig50_Storage_WiredTiger_CollectionConfig {
    return {
      $type: MongodConfig50_Storage_WiredTiger_CollectionConfig.$type,
      blockCompressor: isSet(object.blockCompressor)
        ? mongodConfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
        : 0,
    };
  },

  toJSON(message: MongodConfig50_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    if (message.blockCompressor !== 0) {
      obj.blockCompressor = mongodConfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
        message.blockCompressor,
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig50_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig50_Storage_WiredTiger_CollectionConfig {
    return MongodConfig50_Storage_WiredTiger_CollectionConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig50_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig50_Storage_WiredTiger_CollectionConfig {
    const message = createBaseMongodConfig50_Storage_WiredTiger_CollectionConfig();
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig50_Storage_WiredTiger_CollectionConfig.$type,
  MongodConfig50_Storage_WiredTiger_CollectionConfig,
);

function createBaseMongodConfig50_Storage_WiredTiger_IndexConfig(): MongodConfig50_Storage_WiredTiger_IndexConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.IndexConfig",
    prefixCompression: undefined,
  };
}

export const MongodConfig50_Storage_WiredTiger_IndexConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.IndexConfig" as const,

  encode(message: MongodConfig50_Storage_WiredTiger_IndexConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefixCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.prefixCompression! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_Storage_WiredTiger_IndexConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_Storage_WiredTiger_IndexConfig();
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

  fromJSON(object: any): MongodConfig50_Storage_WiredTiger_IndexConfig {
    return {
      $type: MongodConfig50_Storage_WiredTiger_IndexConfig.$type,
      prefixCompression: isSet(object.prefixCompression) ? Boolean(object.prefixCompression) : undefined,
    };
  },

  toJSON(message: MongodConfig50_Storage_WiredTiger_IndexConfig): unknown {
    const obj: any = {};
    if (message.prefixCompression !== undefined) {
      obj.prefixCompression = message.prefixCompression;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig50_Storage_WiredTiger_IndexConfig>,
  ): MongodConfig50_Storage_WiredTiger_IndexConfig {
    return MongodConfig50_Storage_WiredTiger_IndexConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig50_Storage_WiredTiger_IndexConfig>,
  ): MongodConfig50_Storage_WiredTiger_IndexConfig {
    const message = createBaseMongodConfig50_Storage_WiredTiger_IndexConfig();
    message.prefixCompression = object.prefixCompression ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig50_Storage_WiredTiger_IndexConfig.$type,
  MongodConfig50_Storage_WiredTiger_IndexConfig,
);

function createBaseMongodConfig50_Storage_Journal(): MongodConfig50_Storage_Journal {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.Journal", commitInterval: undefined };
}

export const MongodConfig50_Storage_Journal = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.Journal" as const,

  encode(message: MongodConfig50_Storage_Journal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_Storage_Journal();
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

  fromJSON(object: any): MongodConfig50_Storage_Journal {
    return {
      $type: MongodConfig50_Storage_Journal.$type,
      commitInterval: isSet(object.commitInterval) ? Number(object.commitInterval) : undefined,
    };
  },

  toJSON(message: MongodConfig50_Storage_Journal): unknown {
    const obj: any = {};
    if (message.commitInterval !== undefined) {
      obj.commitInterval = message.commitInterval;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50_Storage_Journal>): MongodConfig50_Storage_Journal {
    return MongodConfig50_Storage_Journal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50_Storage_Journal>): MongodConfig50_Storage_Journal {
    const message = createBaseMongodConfig50_Storage_Journal();
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50_Storage_Journal.$type, MongodConfig50_Storage_Journal);

function createBaseMongodConfig50_OperationProfiling(): MongodConfig50_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
    slowOpSampleRate: undefined,
  };
}

export const MongodConfig50_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.OperationProfiling" as const,

  encode(message: MongodConfig50_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_OperationProfiling();
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

  fromJSON(object: any): MongodConfig50_OperationProfiling {
    return {
      $type: MongodConfig50_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongodConfig50_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
      slowOpSampleRate: isSet(object.slowOpSampleRate) ? Number(object.slowOpSampleRate) : undefined,
    };
  },

  toJSON(message: MongodConfig50_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongodConfig50_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    if (message.slowOpSampleRate !== undefined) {
      obj.slowOpSampleRate = message.slowOpSampleRate;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50_OperationProfiling>): MongodConfig50_OperationProfiling {
    return MongodConfig50_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50_OperationProfiling>): MongodConfig50_OperationProfiling {
    const message = createBaseMongodConfig50_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    message.slowOpSampleRate = object.slowOpSampleRate ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50_OperationProfiling.$type, MongodConfig50_OperationProfiling);

function createBaseMongodConfig50_Network(): MongodConfig50_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network",
    maxIncomingConnections: undefined,
    compression: undefined,
  };
}

export const MongodConfig50_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network" as const,

  encode(message: MongodConfig50_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.compression !== undefined) {
      MongodConfig50_Network_Compression.encode(message.compression, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_Network();
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

          message.compression = MongodConfig50_Network_Compression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig50_Network {
    return {
      $type: MongodConfig50_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
      compression: isSet(object.compression)
        ? MongodConfig50_Network_Compression.fromJSON(object.compression)
        : undefined,
    };
  },

  toJSON(message: MongodConfig50_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    if (message.compression !== undefined) {
      obj.compression = MongodConfig50_Network_Compression.toJSON(message.compression);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50_Network>): MongodConfig50_Network {
    return MongodConfig50_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50_Network>): MongodConfig50_Network {
    const message = createBaseMongodConfig50_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression = (object.compression !== undefined && object.compression !== null)
      ? MongodConfig50_Network_Compression.fromPartial(object.compression)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50_Network.$type, MongodConfig50_Network);

function createBaseMongodConfig50_Network_Compression(): MongodConfig50_Network_Compression {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network.Compression", compressors: [] };
}

export const MongodConfig50_Network_Compression = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network.Compression" as const,

  encode(message: MongodConfig50_Network_Compression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_Network_Compression();
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

  fromJSON(object: any): MongodConfig50_Network_Compression {
    return {
      $type: MongodConfig50_Network_Compression.$type,
      compressors: globalThis.Array.isArray(object?.compressors)
        ? object.compressors.map((e: any) => mongodConfig50_Network_Compression_CompressorFromJSON(e))
        : [],
    };
  },

  toJSON(message: MongodConfig50_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors?.length) {
      obj.compressors = message.compressors.map((e) => mongodConfig50_Network_Compression_CompressorToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50_Network_Compression>): MongodConfig50_Network_Compression {
    return MongodConfig50_Network_Compression.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50_Network_Compression>): MongodConfig50_Network_Compression {
    const message = createBaseMongodConfig50_Network_Compression();
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50_Network_Compression.$type, MongodConfig50_Network_Compression);

function createBaseMongodConfig50_SetParameter(): MongodConfig50_SetParameter {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.SetParameter", enableFlowControl: undefined };
}

export const MongodConfig50_SetParameter = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.SetParameter" as const,

  encode(message: MongodConfig50_SetParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableFlowControl !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableFlowControl! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50_SetParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50_SetParameter();
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

  fromJSON(object: any): MongodConfig50_SetParameter {
    return {
      $type: MongodConfig50_SetParameter.$type,
      enableFlowControl: isSet(object.enableFlowControl) ? Boolean(object.enableFlowControl) : undefined,
    };
  },

  toJSON(message: MongodConfig50_SetParameter): unknown {
    const obj: any = {};
    if (message.enableFlowControl !== undefined) {
      obj.enableFlowControl = message.enableFlowControl;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50_SetParameter>): MongodConfig50_SetParameter {
    return MongodConfig50_SetParameter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50_SetParameter>): MongodConfig50_SetParameter {
    const message = createBaseMongodConfig50_SetParameter();
    message.enableFlowControl = object.enableFlowControl ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50_SetParameter.$type, MongodConfig50_SetParameter);

function createBaseMongoCfgConfig50(): MongoCfgConfig50 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongoCfgConfig50 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0" as const,

  encode(message: MongoCfgConfig50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongoCfgConfig50_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongoCfgConfig50_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongoCfgConfig50_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongoCfgConfig50_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongoCfgConfig50_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongoCfgConfig50_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig50 {
    return {
      $type: MongoCfgConfig50.$type,
      storage: isSet(object.storage) ? MongoCfgConfig50_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongoCfgConfig50_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongoCfgConfig50_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongoCfgConfig50_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongoCfgConfig50_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongoCfgConfig50_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig50>): MongoCfgConfig50 {
    return MongoCfgConfig50.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig50>): MongoCfgConfig50 {
    const message = createBaseMongoCfgConfig50();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongoCfgConfig50_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongoCfgConfig50_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongoCfgConfig50_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig50.$type, MongoCfgConfig50);

function createBaseMongoCfgConfig50_Storage(): MongoCfgConfig50_Storage {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage", wiredTiger: undefined };
}

export const MongoCfgConfig50_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage" as const,

  encode(message: MongoCfgConfig50_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongoCfgConfig50_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongoCfgConfig50_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig50_Storage {
    return {
      $type: MongoCfgConfig50_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongoCfgConfig50_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongoCfgConfig50_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig50_Storage>): MongoCfgConfig50_Storage {
    return MongoCfgConfig50_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig50_Storage>): MongoCfgConfig50_Storage {
    const message = createBaseMongoCfgConfig50_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongoCfgConfig50_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig50_Storage.$type, MongoCfgConfig50_Storage);

function createBaseMongoCfgConfig50_Storage_WiredTiger(): MongoCfgConfig50_Storage_WiredTiger {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger", engineConfig: undefined };
}

export const MongoCfgConfig50_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger" as const,

  encode(message: MongoCfgConfig50_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongoCfgConfig50_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongoCfgConfig50_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig50_Storage_WiredTiger {
    return {
      $type: MongoCfgConfig50_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongoCfgConfig50_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongoCfgConfig50_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig50_Storage_WiredTiger>): MongoCfgConfig50_Storage_WiredTiger {
    return MongoCfgConfig50_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig50_Storage_WiredTiger>): MongoCfgConfig50_Storage_WiredTiger {
    const message = createBaseMongoCfgConfig50_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongoCfgConfig50_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig50_Storage_WiredTiger.$type, MongoCfgConfig50_Storage_WiredTiger);

function createBaseMongoCfgConfig50_Storage_WiredTiger_EngineConfig(): MongoCfgConfig50_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongoCfgConfig50_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongoCfgConfig50_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongoCfgConfig50_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongoCfgConfig50_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig50_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig50_Storage_WiredTiger_EngineConfig {
    return MongoCfgConfig50_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig50_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig50_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongoCfgConfig50_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig50_Storage_WiredTiger_EngineConfig.$type,
  MongoCfgConfig50_Storage_WiredTiger_EngineConfig,
);

function createBaseMongoCfgConfig50_OperationProfiling(): MongoCfgConfig50_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongoCfgConfig50_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.OperationProfiling" as const,

  encode(message: MongoCfgConfig50_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50_OperationProfiling();
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

  fromJSON(object: any): MongoCfgConfig50_OperationProfiling {
    return {
      $type: MongoCfgConfig50_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongoCfgConfig50_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongoCfgConfig50_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig50_OperationProfiling>): MongoCfgConfig50_OperationProfiling {
    return MongoCfgConfig50_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig50_OperationProfiling>): MongoCfgConfig50_OperationProfiling {
    const message = createBaseMongoCfgConfig50_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig50_OperationProfiling.$type, MongoCfgConfig50_OperationProfiling);

function createBaseMongoCfgConfig50_Network(): MongoCfgConfig50_Network {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Network", maxIncomingConnections: undefined };
}

export const MongoCfgConfig50_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Network" as const,

  encode(message: MongoCfgConfig50_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50_Network();
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

  fromJSON(object: any): MongoCfgConfig50_Network {
    return {
      $type: MongoCfgConfig50_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig50_Network>): MongoCfgConfig50_Network {
    return MongoCfgConfig50_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig50_Network>): MongoCfgConfig50_Network {
    const message = createBaseMongoCfgConfig50_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig50_Network.$type, MongoCfgConfig50_Network);

function createBaseMongosConfig50(): MongosConfig50 {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0", net: undefined };
}

export const MongosConfig50 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0" as const,

  encode(message: MongosConfig50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.net !== undefined) {
      MongosConfig50_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig50 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig50();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.net = MongosConfig50_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig50 {
    return {
      $type: MongosConfig50.$type,
      net: isSet(object.net) ? MongosConfig50_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongosConfig50): unknown {
    const obj: any = {};
    if (message.net !== undefined) {
      obj.net = MongosConfig50_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig50>): MongosConfig50 {
    return MongosConfig50.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig50>): MongosConfig50 {
    const message = createBaseMongosConfig50();
    message.net = (object.net !== undefined && object.net !== null)
      ? MongosConfig50_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig50.$type, MongosConfig50);

function createBaseMongosConfig50_Network(): MongosConfig50_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network",
    maxIncomingConnections: undefined,
    compression: undefined,
  };
}

export const MongosConfig50_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network" as const,

  encode(message: MongosConfig50_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.compression !== undefined) {
      MongosConfig50_Network_Compression.encode(message.compression, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig50_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig50_Network();
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

          message.compression = MongosConfig50_Network_Compression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig50_Network {
    return {
      $type: MongosConfig50_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
      compression: isSet(object.compression)
        ? MongosConfig50_Network_Compression.fromJSON(object.compression)
        : undefined,
    };
  },

  toJSON(message: MongosConfig50_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    if (message.compression !== undefined) {
      obj.compression = MongosConfig50_Network_Compression.toJSON(message.compression);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig50_Network>): MongosConfig50_Network {
    return MongosConfig50_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig50_Network>): MongosConfig50_Network {
    const message = createBaseMongosConfig50_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression = (object.compression !== undefined && object.compression !== null)
      ? MongosConfig50_Network_Compression.fromPartial(object.compression)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig50_Network.$type, MongosConfig50_Network);

function createBaseMongosConfig50_Network_Compression(): MongosConfig50_Network_Compression {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network.Compression", compressors: [] };
}

export const MongosConfig50_Network_Compression = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network.Compression" as const,

  encode(message: MongosConfig50_Network_Compression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig50_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig50_Network_Compression();
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

  fromJSON(object: any): MongosConfig50_Network_Compression {
    return {
      $type: MongosConfig50_Network_Compression.$type,
      compressors: globalThis.Array.isArray(object?.compressors)
        ? object.compressors.map((e: any) => mongosConfig50_Network_Compression_CompressorFromJSON(e))
        : [],
    };
  },

  toJSON(message: MongosConfig50_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors?.length) {
      obj.compressors = message.compressors.map((e) => mongosConfig50_Network_Compression_CompressorToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig50_Network_Compression>): MongosConfig50_Network_Compression {
    return MongosConfig50_Network_Compression.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig50_Network_Compression>): MongosConfig50_Network_Compression {
    const message = createBaseMongosConfig50_Network_Compression();
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MongosConfig50_Network_Compression.$type, MongosConfig50_Network_Compression);

function createBaseMongodConfigSet50(): MongodConfigSet50 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongodConfigSet50 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0" as const,

  encode(message: MongodConfigSet50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongodConfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongodConfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongodConfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfigSet50 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfigSet50();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongodConfig50.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongodConfig50.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongodConfig50.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfigSet50 {
    return {
      $type: MongodConfigSet50.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongodConfig50.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongodConfig50.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongodConfig50.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongodConfigSet50): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongodConfig50.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongodConfig50.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongodConfig50.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfigSet50>): MongodConfigSet50 {
    return MongodConfigSet50.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfigSet50>): MongodConfigSet50 {
    const message = createBaseMongodConfigSet50();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongodConfig50.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongodConfig50.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongodConfig50.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfigSet50.$type, MongodConfigSet50);

function createBaseMongoCfgConfigSet50(): MongoCfgConfigSet50 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongoCfgConfigSet50 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0" as const,

  encode(message: MongoCfgConfigSet50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongoCfgConfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongoCfgConfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongoCfgConfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfigSet50 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfigSet50();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongoCfgConfig50.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongoCfgConfig50.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongoCfgConfig50.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfigSet50 {
    return {
      $type: MongoCfgConfigSet50.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongoCfgConfig50.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongoCfgConfig50.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongoCfgConfig50.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongoCfgConfigSet50): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongoCfgConfig50.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongoCfgConfig50.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongoCfgConfig50.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfigSet50>): MongoCfgConfigSet50 {
    return MongoCfgConfigSet50.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfigSet50>): MongoCfgConfigSet50 {
    const message = createBaseMongoCfgConfigSet50();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongoCfgConfig50.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongoCfgConfig50.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongoCfgConfig50.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfigSet50.$type, MongoCfgConfigSet50);

function createBaseMongosConfigSet50(): MongosConfigSet50 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongosConfigSet50 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0" as const,

  encode(message: MongosConfigSet50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongosConfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongosConfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongosConfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfigSet50 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfigSet50();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongosConfig50.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongosConfig50.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongosConfig50.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfigSet50 {
    return {
      $type: MongosConfigSet50.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongosConfig50.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongosConfig50.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongosConfig50.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongosConfigSet50): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongosConfig50.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongosConfig50.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongosConfig50.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfigSet50>): MongosConfigSet50 {
    return MongosConfigSet50.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfigSet50>): MongosConfigSet50 {
    const message = createBaseMongosConfigSet50();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongosConfig50.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongosConfig50.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongosConfig50.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfigSet50.$type, MongosConfigSet50);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
