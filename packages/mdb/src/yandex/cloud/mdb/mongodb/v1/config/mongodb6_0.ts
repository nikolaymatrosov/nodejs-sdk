/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/).
 */
export interface MongodConfig60 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0";
  /** `storage` section of mongod configuration. */
  storage?:
    | MongodConfig60_Storage
    | undefined;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?:
    | MongodConfig60_OperationProfiling
    | undefined;
  /** `net` section of mongod configuration. */
  net?:
    | MongodConfig60_Network
    | undefined;
  /** `SetParameter` section of mongod configuration. */
  setParameter?: MongodConfig60_SetParameter | undefined;
}

export interface MongodConfig60_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?:
    | MongodConfig60_Storage_WiredTiger
    | undefined;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v6.0/reference/glossary/#term-journal). */
  journal?: MongodConfig60_Storage_Journal | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongodConfig60_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?:
    | MongodConfig60_Storage_WiredTiger_EngineConfig
    | undefined;
  /** Collection configuration for WiredTiger. */
  collectionConfig?:
    | MongodConfig60_Storage_WiredTiger_CollectionConfig
    | undefined;
  /** Index configuration for WiredTiger */
  indexConfig?: MongodConfig60_Storage_WiredTiger_IndexConfig | undefined;
}

export interface MongodConfig60_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongodConfig60_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** NONE - No compression. */
  NONE = 1,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v6.0/reference/glossary/#term-snappy) compression. */
  SNAPPY = 2,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v6.0/reference/glossary/#term-zlib) compression. */
  ZLIB = 3,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v6.0/reference/glossary/#term-zstd) compression. */
  ZSTD = 4,
  UNRECOGNIZED = -1,
}

export function mongodConfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any,
): MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case 4:
    case "ZSTD":
      return MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
  switch (object) {
    case MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig60_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig60_Storage_WiredTiger_IndexConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.IndexConfig";
  /** Enables or disables [prefix compression](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-prefix-compression) */
  prefixCompression?: boolean | undefined;
}

export interface MongodConfig60_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number | undefined;
}

export interface MongodConfig60_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongodConfig60_OperationProfiling_Mode;
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

export enum MongodConfig60_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig60_OperationProfiling_ModeFromJSON(object: any): MongodConfig60_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongodConfig60_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongodConfig60_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongodConfig60_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongodConfig60_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig60_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodConfig60_OperationProfiling_ModeToJSON(object: MongodConfig60_OperationProfiling_Mode): string {
  switch (object) {
    case MongodConfig60_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongodConfig60_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongodConfig60_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongodConfig60_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongodConfig60_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig60_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?:
    | number
    | undefined;
  /** Compression settings */
  compression?: MongodConfig60_Network_Compression | undefined;
}

export interface MongodConfig60_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: MongodConfig60_Network_Compression_Compressor[];
}

export enum MongodConfig60_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig60_Network_Compression_CompressorFromJSON(
  object: any,
): MongodConfig60_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig60_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return MongodConfig60_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return MongodConfig60_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return MongodConfig60_Network_Compression_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig60_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig60_Network_Compression_CompressorToJSON(
  object: MongodConfig60_Network_Compression_Compressor,
): string {
  switch (object) {
    case MongodConfig60_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig60_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig60_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig60_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig60_Network_Compression_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig60_SetParameter {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.SetParameter";
  /**
   * Enables or disables the mechanism that controls the rate at which the primary applies its writes with the
   * goal of keeping the secondary members [majority committed](https://www.mongodb.com/docs/v4.2/reference/command/replSetGetStatus/#replSetGetStatus.optimes.lastCommittedOpTime)
   * lag under a configurable maximum value.
   */
  enableFlowControl?: boolean | undefined;
}

export interface MongoCfgConfig60 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0";
  /** `storage` section of mongocfg configuration. */
  storage?:
    | MongoCfgConfig60_Storage
    | undefined;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?:
    | MongoCfgConfig60_OperationProfiling
    | undefined;
  /** `net` section of mongocfg configuration. */
  net?: MongoCfgConfig60_Network | undefined;
}

export interface MongoCfgConfig60_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: MongoCfgConfig60_Storage_WiredTiger | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongoCfgConfig60_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: MongoCfgConfig60_Storage_WiredTiger_EngineConfig | undefined;
}

export interface MongoCfgConfig60_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongoCfgConfig60_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongoCfgConfig60_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number | undefined;
}

export enum MongoCfgConfig60_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongoCfgConfig60_OperationProfiling_ModeFromJSON(
  object: any,
): MongoCfgConfig60_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongoCfgConfig60_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongoCfgConfig60_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongoCfgConfig60_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongoCfgConfig60_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongoCfgConfig60_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongoCfgConfig60_OperationProfiling_ModeToJSON(
  object: MongoCfgConfig60_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongoCfgConfig60_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongoCfgConfig60_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongoCfgConfig60_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongoCfgConfig60_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongoCfgConfig60_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongoCfgConfig60_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongosConfig60 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0";
  /** Network settings for mongos. */
  net?: MongosConfig60_Network | undefined;
}

export interface MongosConfig60_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?:
    | number
    | undefined;
  /** Compression settings */
  compression?: MongosConfig60_Network_Compression | undefined;
}

export interface MongosConfig60_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: MongosConfig60_Network_Compression_Compressor[];
}

export enum MongosConfig60_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  UNRECOGNIZED = -1,
}

export function mongosConfig60_Network_Compression_CompressorFromJSON(
  object: any,
): MongosConfig60_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongosConfig60_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return MongosConfig60_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return MongosConfig60_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return MongosConfig60_Network_Compression_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongosConfig60_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongosConfig60_Network_Compression_CompressorToJSON(
  object: MongosConfig60_Network_Compression_Compressor,
): string {
  switch (object) {
    case MongosConfig60_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongosConfig60_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case MongosConfig60_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case MongosConfig60_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case MongosConfig60_Network_Compression_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfigSet60 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0";
  /**
   * Effective mongod settings for a MongoDB 6.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongodConfig60
    | undefined;
  /** User-defined mongod settings for a MongoDB 6.0 cluster. */
  userConfig?:
    | MongodConfig60
    | undefined;
  /** Default mongod configuration for a MongoDB 6.0 cluster. */
  defaultConfig?: MongodConfig60 | undefined;
}

export interface MongoCfgConfigSet60 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0";
  /**
   * Effective mongocfg settings for a MongoDB 6.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongoCfgConfig60
    | undefined;
  /** User-defined mongocfg settings for a MongoDB 6.0 cluster. */
  userConfig?:
    | MongoCfgConfig60
    | undefined;
  /** Default mongocfg configuration for a MongoDB 6.0 cluster. */
  defaultConfig?: MongoCfgConfig60 | undefined;
}

export interface MongosConfigSet60 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0";
  /**
   * Effective mongos settings for a MongoDB 6.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongosConfig60
    | undefined;
  /** User-defined mongos settings for a MongoDB 6.0 cluster. */
  userConfig?:
    | MongosConfig60
    | undefined;
  /** Default mongos configuration for a MongoDB 6.0 cluster. */
  defaultConfig?: MongosConfig60 | undefined;
}

function createBaseMongodConfig60(): MongodConfig60 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
    setParameter: undefined,
  };
}

export const MongodConfig60 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0" as const,

  encode(message: MongodConfig60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongodConfig60_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongodConfig60_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongodConfig60_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    if (message.setParameter !== undefined) {
      MongodConfig60_SetParameter.encode(message.setParameter, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongodConfig60_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongodConfig60_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongodConfig60_Network.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setParameter = MongodConfig60_SetParameter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60 {
    return {
      $type: MongodConfig60.$type,
      storage: isSet(object.storage) ? MongodConfig60_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongodConfig60_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongodConfig60_Network.fromJSON(object.net) : undefined,
      setParameter: isSet(object.setParameter) ? MongodConfig60_SetParameter.fromJSON(object.setParameter) : undefined,
    };
  },

  toJSON(message: MongodConfig60): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongodConfig60_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongodConfig60_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongodConfig60_Network.toJSON(message.net);
    }
    if (message.setParameter !== undefined) {
      obj.setParameter = MongodConfig60_SetParameter.toJSON(message.setParameter);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60>): MongodConfig60 {
    return MongodConfig60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60>): MongodConfig60 {
    const message = createBaseMongodConfig60();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongodConfig60_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongodConfig60_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongodConfig60_Network.fromPartial(object.net)
      : undefined;
    message.setParameter = (object.setParameter !== undefined && object.setParameter !== null)
      ? MongodConfig60_SetParameter.fromPartial(object.setParameter)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60.$type, MongodConfig60);

function createBaseMongodConfig60_Storage(): MongodConfig60_Storage {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage",
    wiredTiger: undefined,
    journal: undefined,
  };
}

export const MongodConfig60_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage" as const,

  encode(message: MongodConfig60_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongodConfig60_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    if (message.journal !== undefined) {
      MongodConfig60_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongodConfig60_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.journal = MongodConfig60_Storage_Journal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60_Storage {
    return {
      $type: MongodConfig60_Storage.$type,
      wiredTiger: isSet(object.wiredTiger) ? MongodConfig60_Storage_WiredTiger.fromJSON(object.wiredTiger) : undefined,
      journal: isSet(object.journal) ? MongodConfig60_Storage_Journal.fromJSON(object.journal) : undefined,
    };
  },

  toJSON(message: MongodConfig60_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongodConfig60_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    if (message.journal !== undefined) {
      obj.journal = MongodConfig60_Storage_Journal.toJSON(message.journal);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60_Storage>): MongodConfig60_Storage {
    return MongodConfig60_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60_Storage>): MongodConfig60_Storage {
    const message = createBaseMongodConfig60_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongodConfig60_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    message.journal = (object.journal !== undefined && object.journal !== null)
      ? MongodConfig60_Storage_Journal.fromPartial(object.journal)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60_Storage.$type, MongodConfig60_Storage);

function createBaseMongodConfig60_Storage_WiredTiger(): MongodConfig60_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger",
    engineConfig: undefined,
    collectionConfig: undefined,
    indexConfig: undefined,
  };
}

export const MongodConfig60_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger" as const,

  encode(message: MongodConfig60_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongodConfig60_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.collectionConfig !== undefined) {
      MongodConfig60_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.indexConfig !== undefined) {
      MongodConfig60_Storage_WiredTiger_IndexConfig.encode(message.indexConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongodConfig60_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collectionConfig = MongodConfig60_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexConfig = MongodConfig60_Storage_WiredTiger_IndexConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60_Storage_WiredTiger {
    return {
      $type: MongodConfig60_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongodConfig60_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
      collectionConfig: isSet(object.collectionConfig)
        ? MongodConfig60_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
        : undefined,
      indexConfig: isSet(object.indexConfig)
        ? MongodConfig60_Storage_WiredTiger_IndexConfig.fromJSON(object.indexConfig)
        : undefined,
    };
  },

  toJSON(message: MongodConfig60_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongodConfig60_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    if (message.collectionConfig !== undefined) {
      obj.collectionConfig = MongodConfig60_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig);
    }
    if (message.indexConfig !== undefined) {
      obj.indexConfig = MongodConfig60_Storage_WiredTiger_IndexConfig.toJSON(message.indexConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60_Storage_WiredTiger>): MongodConfig60_Storage_WiredTiger {
    return MongodConfig60_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60_Storage_WiredTiger>): MongodConfig60_Storage_WiredTiger {
    const message = createBaseMongodConfig60_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongodConfig60_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    message.collectionConfig = (object.collectionConfig !== undefined && object.collectionConfig !== null)
      ? MongodConfig60_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
      : undefined;
    message.indexConfig = (object.indexConfig !== undefined && object.indexConfig !== null)
      ? MongodConfig60_Storage_WiredTiger_IndexConfig.fromPartial(object.indexConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60_Storage_WiredTiger.$type, MongodConfig60_Storage_WiredTiger);

function createBaseMongodConfig60_Storage_WiredTiger_EngineConfig(): MongodConfig60_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongodConfig60_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongodConfig60_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongodConfig60_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongodConfig60_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongodConfig60_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig60_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig60_Storage_WiredTiger_EngineConfig {
    return MongodConfig60_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig60_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig60_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongodConfig60_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig60_Storage_WiredTiger_EngineConfig.$type,
  MongodConfig60_Storage_WiredTiger_EngineConfig,
);

function createBaseMongodConfig60_Storage_WiredTiger_CollectionConfig(): MongodConfig60_Storage_WiredTiger_CollectionConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
  };
}

export const MongodConfig60_Storage_WiredTiger_CollectionConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: MongodConfig60_Storage_WiredTiger_CollectionConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blockCompressor !== 0) {
      writer.uint32(8).int32(message.blockCompressor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_Storage_WiredTiger_CollectionConfig();
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

  fromJSON(object: any): MongodConfig60_Storage_WiredTiger_CollectionConfig {
    return {
      $type: MongodConfig60_Storage_WiredTiger_CollectionConfig.$type,
      blockCompressor: isSet(object.blockCompressor)
        ? mongodConfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
        : 0,
    };
  },

  toJSON(message: MongodConfig60_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    if (message.blockCompressor !== 0) {
      obj.blockCompressor = mongodConfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
        message.blockCompressor,
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig60_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig60_Storage_WiredTiger_CollectionConfig {
    return MongodConfig60_Storage_WiredTiger_CollectionConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig60_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig60_Storage_WiredTiger_CollectionConfig {
    const message = createBaseMongodConfig60_Storage_WiredTiger_CollectionConfig();
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig60_Storage_WiredTiger_CollectionConfig.$type,
  MongodConfig60_Storage_WiredTiger_CollectionConfig,
);

function createBaseMongodConfig60_Storage_WiredTiger_IndexConfig(): MongodConfig60_Storage_WiredTiger_IndexConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.IndexConfig",
    prefixCompression: undefined,
  };
}

export const MongodConfig60_Storage_WiredTiger_IndexConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.IndexConfig" as const,

  encode(message: MongodConfig60_Storage_WiredTiger_IndexConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefixCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.prefixCompression! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_Storage_WiredTiger_IndexConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_Storage_WiredTiger_IndexConfig();
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

  fromJSON(object: any): MongodConfig60_Storage_WiredTiger_IndexConfig {
    return {
      $type: MongodConfig60_Storage_WiredTiger_IndexConfig.$type,
      prefixCompression: isSet(object.prefixCompression) ? Boolean(object.prefixCompression) : undefined,
    };
  },

  toJSON(message: MongodConfig60_Storage_WiredTiger_IndexConfig): unknown {
    const obj: any = {};
    if (message.prefixCompression !== undefined) {
      obj.prefixCompression = message.prefixCompression;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig60_Storage_WiredTiger_IndexConfig>,
  ): MongodConfig60_Storage_WiredTiger_IndexConfig {
    return MongodConfig60_Storage_WiredTiger_IndexConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig60_Storage_WiredTiger_IndexConfig>,
  ): MongodConfig60_Storage_WiredTiger_IndexConfig {
    const message = createBaseMongodConfig60_Storage_WiredTiger_IndexConfig();
    message.prefixCompression = object.prefixCompression ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig60_Storage_WiredTiger_IndexConfig.$type,
  MongodConfig60_Storage_WiredTiger_IndexConfig,
);

function createBaseMongodConfig60_Storage_Journal(): MongodConfig60_Storage_Journal {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal", commitInterval: undefined };
}

export const MongodConfig60_Storage_Journal = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal" as const,

  encode(message: MongodConfig60_Storage_Journal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_Storage_Journal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MongodConfig60_Storage_Journal {
    return {
      $type: MongodConfig60_Storage_Journal.$type,
      commitInterval: isSet(object.commitInterval) ? Number(object.commitInterval) : undefined,
    };
  },

  toJSON(message: MongodConfig60_Storage_Journal): unknown {
    const obj: any = {};
    if (message.commitInterval !== undefined) {
      obj.commitInterval = message.commitInterval;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60_Storage_Journal>): MongodConfig60_Storage_Journal {
    return MongodConfig60_Storage_Journal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60_Storage_Journal>): MongodConfig60_Storage_Journal {
    const message = createBaseMongodConfig60_Storage_Journal();
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60_Storage_Journal.$type, MongodConfig60_Storage_Journal);

function createBaseMongodConfig60_OperationProfiling(): MongodConfig60_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
    slowOpSampleRate: undefined,
  };
}

export const MongodConfig60_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling" as const,

  encode(message: MongodConfig60_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_OperationProfiling();
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

  fromJSON(object: any): MongodConfig60_OperationProfiling {
    return {
      $type: MongodConfig60_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongodConfig60_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
      slowOpSampleRate: isSet(object.slowOpSampleRate) ? Number(object.slowOpSampleRate) : undefined,
    };
  },

  toJSON(message: MongodConfig60_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongodConfig60_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    if (message.slowOpSampleRate !== undefined) {
      obj.slowOpSampleRate = message.slowOpSampleRate;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60_OperationProfiling>): MongodConfig60_OperationProfiling {
    return MongodConfig60_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60_OperationProfiling>): MongodConfig60_OperationProfiling {
    const message = createBaseMongodConfig60_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    message.slowOpSampleRate = object.slowOpSampleRate ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60_OperationProfiling.$type, MongodConfig60_OperationProfiling);

function createBaseMongodConfig60_Network(): MongodConfig60_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network",
    maxIncomingConnections: undefined,
    compression: undefined,
  };
}

export const MongodConfig60_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network" as const,

  encode(message: MongodConfig60_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.compression !== undefined) {
      MongodConfig60_Network_Compression.encode(message.compression, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_Network();
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

          message.compression = MongodConfig60_Network_Compression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60_Network {
    return {
      $type: MongodConfig60_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
      compression: isSet(object.compression)
        ? MongodConfig60_Network_Compression.fromJSON(object.compression)
        : undefined,
    };
  },

  toJSON(message: MongodConfig60_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    if (message.compression !== undefined) {
      obj.compression = MongodConfig60_Network_Compression.toJSON(message.compression);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60_Network>): MongodConfig60_Network {
    return MongodConfig60_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60_Network>): MongodConfig60_Network {
    const message = createBaseMongodConfig60_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression = (object.compression !== undefined && object.compression !== null)
      ? MongodConfig60_Network_Compression.fromPartial(object.compression)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60_Network.$type, MongodConfig60_Network);

function createBaseMongodConfig60_Network_Compression(): MongodConfig60_Network_Compression {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network.Compression", compressors: [] };
}

export const MongodConfig60_Network_Compression = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network.Compression" as const,

  encode(message: MongodConfig60_Network_Compression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_Network_Compression();
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

  fromJSON(object: any): MongodConfig60_Network_Compression {
    return {
      $type: MongodConfig60_Network_Compression.$type,
      compressors: globalThis.Array.isArray(object?.compressors)
        ? object.compressors.map((e: any) => mongodConfig60_Network_Compression_CompressorFromJSON(e))
        : [],
    };
  },

  toJSON(message: MongodConfig60_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors?.length) {
      obj.compressors = message.compressors.map((e) => mongodConfig60_Network_Compression_CompressorToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60_Network_Compression>): MongodConfig60_Network_Compression {
    return MongodConfig60_Network_Compression.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60_Network_Compression>): MongodConfig60_Network_Compression {
    const message = createBaseMongodConfig60_Network_Compression();
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60_Network_Compression.$type, MongodConfig60_Network_Compression);

function createBaseMongodConfig60_SetParameter(): MongodConfig60_SetParameter {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.SetParameter", enableFlowControl: undefined };
}

export const MongodConfig60_SetParameter = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.SetParameter" as const,

  encode(message: MongodConfig60_SetParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableFlowControl !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableFlowControl! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60_SetParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60_SetParameter();
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

  fromJSON(object: any): MongodConfig60_SetParameter {
    return {
      $type: MongodConfig60_SetParameter.$type,
      enableFlowControl: isSet(object.enableFlowControl) ? Boolean(object.enableFlowControl) : undefined,
    };
  },

  toJSON(message: MongodConfig60_SetParameter): unknown {
    const obj: any = {};
    if (message.enableFlowControl !== undefined) {
      obj.enableFlowControl = message.enableFlowControl;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60_SetParameter>): MongodConfig60_SetParameter {
    return MongodConfig60_SetParameter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60_SetParameter>): MongodConfig60_SetParameter {
    const message = createBaseMongodConfig60_SetParameter();
    message.enableFlowControl = object.enableFlowControl ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60_SetParameter.$type, MongodConfig60_SetParameter);

function createBaseMongoCfgConfig60(): MongoCfgConfig60 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongoCfgConfig60 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0" as const,

  encode(message: MongoCfgConfig60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongoCfgConfig60_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongoCfgConfig60_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongoCfgConfig60_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongoCfgConfig60_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongoCfgConfig60_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongoCfgConfig60_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig60 {
    return {
      $type: MongoCfgConfig60.$type,
      storage: isSet(object.storage) ? MongoCfgConfig60_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongoCfgConfig60_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongoCfgConfig60_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongoCfgConfig60_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongoCfgConfig60_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongoCfgConfig60_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig60>): MongoCfgConfig60 {
    return MongoCfgConfig60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig60>): MongoCfgConfig60 {
    const message = createBaseMongoCfgConfig60();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongoCfgConfig60_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongoCfgConfig60_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongoCfgConfig60_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig60.$type, MongoCfgConfig60);

function createBaseMongoCfgConfig60_Storage(): MongoCfgConfig60_Storage {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage", wiredTiger: undefined };
}

export const MongoCfgConfig60_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage" as const,

  encode(message: MongoCfgConfig60_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongoCfgConfig60_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongoCfgConfig60_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig60_Storage {
    return {
      $type: MongoCfgConfig60_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongoCfgConfig60_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongoCfgConfig60_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig60_Storage>): MongoCfgConfig60_Storage {
    return MongoCfgConfig60_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig60_Storage>): MongoCfgConfig60_Storage {
    const message = createBaseMongoCfgConfig60_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongoCfgConfig60_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig60_Storage.$type, MongoCfgConfig60_Storage);

function createBaseMongoCfgConfig60_Storage_WiredTiger(): MongoCfgConfig60_Storage_WiredTiger {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger", engineConfig: undefined };
}

export const MongoCfgConfig60_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger" as const,

  encode(message: MongoCfgConfig60_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongoCfgConfig60_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongoCfgConfig60_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig60_Storage_WiredTiger {
    return {
      $type: MongoCfgConfig60_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongoCfgConfig60_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongoCfgConfig60_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig60_Storage_WiredTiger>): MongoCfgConfig60_Storage_WiredTiger {
    return MongoCfgConfig60_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig60_Storage_WiredTiger>): MongoCfgConfig60_Storage_WiredTiger {
    const message = createBaseMongoCfgConfig60_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongoCfgConfig60_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig60_Storage_WiredTiger.$type, MongoCfgConfig60_Storage_WiredTiger);

function createBaseMongoCfgConfig60_Storage_WiredTiger_EngineConfig(): MongoCfgConfig60_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongoCfgConfig60_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongoCfgConfig60_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongoCfgConfig60_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongoCfgConfig60_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig60_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig60_Storage_WiredTiger_EngineConfig {
    return MongoCfgConfig60_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig60_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig60_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongoCfgConfig60_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig60_Storage_WiredTiger_EngineConfig.$type,
  MongoCfgConfig60_Storage_WiredTiger_EngineConfig,
);

function createBaseMongoCfgConfig60_OperationProfiling(): MongoCfgConfig60_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongoCfgConfig60_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling" as const,

  encode(message: MongoCfgConfig60_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60_OperationProfiling();
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

  fromJSON(object: any): MongoCfgConfig60_OperationProfiling {
    return {
      $type: MongoCfgConfig60_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongoCfgConfig60_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongoCfgConfig60_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig60_OperationProfiling>): MongoCfgConfig60_OperationProfiling {
    return MongoCfgConfig60_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig60_OperationProfiling>): MongoCfgConfig60_OperationProfiling {
    const message = createBaseMongoCfgConfig60_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig60_OperationProfiling.$type, MongoCfgConfig60_OperationProfiling);

function createBaseMongoCfgConfig60_Network(): MongoCfgConfig60_Network {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network", maxIncomingConnections: undefined };
}

export const MongoCfgConfig60_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network" as const,

  encode(message: MongoCfgConfig60_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60_Network();
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

  fromJSON(object: any): MongoCfgConfig60_Network {
    return {
      $type: MongoCfgConfig60_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig60_Network>): MongoCfgConfig60_Network {
    return MongoCfgConfig60_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig60_Network>): MongoCfgConfig60_Network {
    const message = createBaseMongoCfgConfig60_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig60_Network.$type, MongoCfgConfig60_Network);

function createBaseMongosConfig60(): MongosConfig60 {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0", net: undefined };
}

export const MongosConfig60 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0" as const,

  encode(message: MongosConfig60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.net !== undefined) {
      MongosConfig60_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig60();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongosConfig60_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig60 {
    return {
      $type: MongosConfig60.$type,
      net: isSet(object.net) ? MongosConfig60_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongosConfig60): unknown {
    const obj: any = {};
    if (message.net !== undefined) {
      obj.net = MongosConfig60_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig60>): MongosConfig60 {
    return MongosConfig60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig60>): MongosConfig60 {
    const message = createBaseMongosConfig60();
    message.net = (object.net !== undefined && object.net !== null)
      ? MongosConfig60_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig60.$type, MongosConfig60);

function createBaseMongosConfig60_Network(): MongosConfig60_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network",
    maxIncomingConnections: undefined,
    compression: undefined,
  };
}

export const MongosConfig60_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network" as const,

  encode(message: MongosConfig60_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.compression !== undefined) {
      MongosConfig60_Network_Compression.encode(message.compression, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig60_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig60_Network();
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

          message.compression = MongosConfig60_Network_Compression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig60_Network {
    return {
      $type: MongosConfig60_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
      compression: isSet(object.compression)
        ? MongosConfig60_Network_Compression.fromJSON(object.compression)
        : undefined,
    };
  },

  toJSON(message: MongosConfig60_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    if (message.compression !== undefined) {
      obj.compression = MongosConfig60_Network_Compression.toJSON(message.compression);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig60_Network>): MongosConfig60_Network {
    return MongosConfig60_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig60_Network>): MongosConfig60_Network {
    const message = createBaseMongosConfig60_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression = (object.compression !== undefined && object.compression !== null)
      ? MongosConfig60_Network_Compression.fromPartial(object.compression)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig60_Network.$type, MongosConfig60_Network);

function createBaseMongosConfig60_Network_Compression(): MongosConfig60_Network_Compression {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network.Compression", compressors: [] };
}

export const MongosConfig60_Network_Compression = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network.Compression" as const,

  encode(message: MongosConfig60_Network_Compression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig60_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig60_Network_Compression();
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

  fromJSON(object: any): MongosConfig60_Network_Compression {
    return {
      $type: MongosConfig60_Network_Compression.$type,
      compressors: globalThis.Array.isArray(object?.compressors)
        ? object.compressors.map((e: any) => mongosConfig60_Network_Compression_CompressorFromJSON(e))
        : [],
    };
  },

  toJSON(message: MongosConfig60_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors?.length) {
      obj.compressors = message.compressors.map((e) => mongosConfig60_Network_Compression_CompressorToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig60_Network_Compression>): MongosConfig60_Network_Compression {
    return MongosConfig60_Network_Compression.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig60_Network_Compression>): MongosConfig60_Network_Compression {
    const message = createBaseMongosConfig60_Network_Compression();
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MongosConfig60_Network_Compression.$type, MongosConfig60_Network_Compression);

function createBaseMongodConfigSet60(): MongodConfigSet60 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongodConfigSet60 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0" as const,

  encode(message: MongodConfigSet60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongodConfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongodConfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongodConfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfigSet60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfigSet60();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongodConfig60.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongodConfig60.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongodConfig60.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfigSet60 {
    return {
      $type: MongodConfigSet60.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongodConfig60.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongodConfig60.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongodConfig60.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongodConfigSet60): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongodConfig60.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongodConfig60.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongodConfig60.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfigSet60>): MongodConfigSet60 {
    return MongodConfigSet60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfigSet60>): MongodConfigSet60 {
    const message = createBaseMongodConfigSet60();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongodConfig60.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongodConfig60.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongodConfig60.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfigSet60.$type, MongodConfigSet60);

function createBaseMongoCfgConfigSet60(): MongoCfgConfigSet60 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongoCfgConfigSet60 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0" as const,

  encode(message: MongoCfgConfigSet60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongoCfgConfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongoCfgConfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongoCfgConfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfigSet60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfigSet60();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongoCfgConfig60.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongoCfgConfig60.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongoCfgConfig60.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfigSet60 {
    return {
      $type: MongoCfgConfigSet60.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongoCfgConfig60.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongoCfgConfig60.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongoCfgConfig60.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongoCfgConfigSet60): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongoCfgConfig60.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongoCfgConfig60.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongoCfgConfig60.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfigSet60>): MongoCfgConfigSet60 {
    return MongoCfgConfigSet60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfigSet60>): MongoCfgConfigSet60 {
    const message = createBaseMongoCfgConfigSet60();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongoCfgConfig60.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongoCfgConfig60.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongoCfgConfig60.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfigSet60.$type, MongoCfgConfigSet60);

function createBaseMongosConfigSet60(): MongosConfigSet60 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongosConfigSet60 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0" as const,

  encode(message: MongosConfigSet60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongosConfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongosConfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongosConfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfigSet60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfigSet60();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongosConfig60.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongosConfig60.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongosConfig60.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfigSet60 {
    return {
      $type: MongosConfigSet60.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongosConfig60.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongosConfig60.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongosConfig60.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongosConfigSet60): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongosConfig60.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongosConfig60.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongosConfig60.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfigSet60>): MongosConfigSet60 {
    return MongosConfigSet60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfigSet60>): MongosConfigSet60 {
    const message = createBaseMongosConfigSet60();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongosConfig60.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongosConfig60.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongosConfig60.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfigSet60.$type, MongosConfigSet60);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
