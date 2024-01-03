/* eslint-disable */
import { DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/).
 */
export interface MongodConfig44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4";
  /** `storage` section of mongod configuration. */
  storage?:
    | MongodConfig44_Storage
    | undefined;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?:
    | MongodConfig44_OperationProfiling
    | undefined;
  /** `net` section of mongod configuration. */
  net?: MongodConfig44_Network | undefined;
}

export interface MongodConfig44_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?:
    | MongodConfig44_Storage_WiredTiger
    | undefined;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.4/reference/glossary/#term-journal). */
  journal?: MongodConfig44_Storage_Journal | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongodConfig44_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?:
    | MongodConfig44_Storage_WiredTiger_EngineConfig
    | undefined;
  /** Collection configuration for WiredTiger. */
  collectionConfig?: MongodConfig44_Storage_WiredTiger_CollectionConfig | undefined;
}

export interface MongodConfig44_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongodConfig44_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** NONE - No compression. */
  NONE = 1,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.4/reference/glossary/#term-snappy) compression. */
  SNAPPY = 2,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.4/reference/glossary/#term-zlib) compression. */
  ZLIB = 3,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.4/reference/glossary/#term-zstd) compression. */
  ZSTD = 4,
  UNRECOGNIZED = -1,
}

export function mongodConfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any,
): MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case 4:
    case "ZSTD":
      return MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
  switch (object) {
    case MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig44_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig44_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number | undefined;
}

export interface MongodConfig44_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongodConfig44_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode.
   */
  slowOpThreshold?: number | undefined;
}

export enum MongodConfig44_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig44_OperationProfiling_ModeFromJSON(object: any): MongodConfig44_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongodConfig44_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongodConfig44_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongodConfig44_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongodConfig44_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig44_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodConfig44_OperationProfiling_ModeToJSON(object: MongodConfig44_OperationProfiling_Mode): string {
  switch (object) {
    case MongodConfig44_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongodConfig44_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongodConfig44_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongodConfig44_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongodConfig44_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig44_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongoCfgConfig44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4";
  /** `storage` section of mongocfg configuration. */
  storage?:
    | MongoCfgConfig44_Storage
    | undefined;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?:
    | MongoCfgConfig44_OperationProfiling
    | undefined;
  /** `net` section of mongocfg configuration. */
  net?: MongoCfgConfig44_Network | undefined;
}

export interface MongoCfgConfig44_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: MongoCfgConfig44_Storage_WiredTiger | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongoCfgConfig44_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: MongoCfgConfig44_Storage_WiredTiger_EngineConfig | undefined;
}

export interface MongoCfgConfig44_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongoCfgConfig44_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongoCfgConfig44_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number | undefined;
}

export enum MongoCfgConfig44_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongoCfgConfig44_OperationProfiling_ModeFromJSON(
  object: any,
): MongoCfgConfig44_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongoCfgConfig44_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongoCfgConfig44_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongoCfgConfig44_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongoCfgConfig44_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongoCfgConfig44_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongoCfgConfig44_OperationProfiling_ModeToJSON(
  object: MongoCfgConfig44_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongoCfgConfig44_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongoCfgConfig44_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongoCfgConfig44_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongoCfgConfig44_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongoCfgConfig44_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongoCfgConfig44_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongosConfig44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4";
  /** Network settings for mongos. */
  net?: MongosConfig44_Network | undefined;
}

export interface MongosConfig44_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongodConfigSet44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4";
  /**
   * Effective mongod settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongodConfig44
    | undefined;
  /** User-defined mongod settings for a MongoDB 4.4 cluster. */
  userConfig?:
    | MongodConfig44
    | undefined;
  /** Default mongod configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: MongodConfig44 | undefined;
}

export interface MongoCfgConfigSet44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4";
  /**
   * Effective mongocfg settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongoCfgConfig44
    | undefined;
  /** User-defined mongocfg settings for a MongoDB 4.4 cluster. */
  userConfig?:
    | MongoCfgConfig44
    | undefined;
  /** Default mongocfg configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: MongoCfgConfig44 | undefined;
}

export interface MongosConfigSet44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4";
  /**
   * Effective mongos settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongosConfig44
    | undefined;
  /** User-defined mongos settings for a MongoDB 4.4 cluster. */
  userConfig?:
    | MongosConfig44
    | undefined;
  /** Default mongos configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: MongosConfig44 | undefined;
}

function createBaseMongodConfig44(): MongodConfig44 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongodConfig44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4" as const,

  encode(message: MongodConfig44, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongodConfig44_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongodConfig44_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongodConfig44_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongodConfig44_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongodConfig44_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongodConfig44_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig44 {
    return {
      $type: MongodConfig44.$type,
      storage: isSet(object.storage) ? MongodConfig44_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongodConfig44_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongodConfig44_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongodConfig44): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongodConfig44_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongodConfig44_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongodConfig44_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44>): MongodConfig44 {
    return MongodConfig44.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44>): MongodConfig44 {
    const message = createBaseMongodConfig44();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongodConfig44_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongodConfig44_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongodConfig44_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44.$type, MongodConfig44);

function createBaseMongodConfig44_Storage(): MongodConfig44_Storage {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage",
    wiredTiger: undefined,
    journal: undefined,
  };
}

export const MongodConfig44_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage" as const,

  encode(message: MongodConfig44_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongodConfig44_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    if (message.journal !== undefined) {
      MongodConfig44_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongodConfig44_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.journal = MongodConfig44_Storage_Journal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig44_Storage {
    return {
      $type: MongodConfig44_Storage.$type,
      wiredTiger: isSet(object.wiredTiger) ? MongodConfig44_Storage_WiredTiger.fromJSON(object.wiredTiger) : undefined,
      journal: isSet(object.journal) ? MongodConfig44_Storage_Journal.fromJSON(object.journal) : undefined,
    };
  },

  toJSON(message: MongodConfig44_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongodConfig44_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    if (message.journal !== undefined) {
      obj.journal = MongodConfig44_Storage_Journal.toJSON(message.journal);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44_Storage>): MongodConfig44_Storage {
    return MongodConfig44_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44_Storage>): MongodConfig44_Storage {
    const message = createBaseMongodConfig44_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongodConfig44_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    message.journal = (object.journal !== undefined && object.journal !== null)
      ? MongodConfig44_Storage_Journal.fromPartial(object.journal)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44_Storage.$type, MongodConfig44_Storage);

function createBaseMongodConfig44_Storage_WiredTiger(): MongodConfig44_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger",
    engineConfig: undefined,
    collectionConfig: undefined,
  };
}

export const MongodConfig44_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger" as const,

  encode(message: MongodConfig44_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongodConfig44_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.collectionConfig !== undefined) {
      MongodConfig44_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongodConfig44_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collectionConfig = MongodConfig44_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig44_Storage_WiredTiger {
    return {
      $type: MongodConfig44_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongodConfig44_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
      collectionConfig: isSet(object.collectionConfig)
        ? MongodConfig44_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
        : undefined,
    };
  },

  toJSON(message: MongodConfig44_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongodConfig44_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    if (message.collectionConfig !== undefined) {
      obj.collectionConfig = MongodConfig44_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44_Storage_WiredTiger>): MongodConfig44_Storage_WiredTiger {
    return MongodConfig44_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44_Storage_WiredTiger>): MongodConfig44_Storage_WiredTiger {
    const message = createBaseMongodConfig44_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongodConfig44_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    message.collectionConfig = (object.collectionConfig !== undefined && object.collectionConfig !== null)
      ? MongodConfig44_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44_Storage_WiredTiger.$type, MongodConfig44_Storage_WiredTiger);

function createBaseMongodConfig44_Storage_WiredTiger_EngineConfig(): MongodConfig44_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongodConfig44_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongodConfig44_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongodConfig44_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongodConfig44_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongodConfig44_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig44_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig44_Storage_WiredTiger_EngineConfig {
    return MongodConfig44_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig44_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig44_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongodConfig44_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig44_Storage_WiredTiger_EngineConfig.$type,
  MongodConfig44_Storage_WiredTiger_EngineConfig,
);

function createBaseMongodConfig44_Storage_WiredTiger_CollectionConfig(): MongodConfig44_Storage_WiredTiger_CollectionConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
  };
}

export const MongodConfig44_Storage_WiredTiger_CollectionConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: MongodConfig44_Storage_WiredTiger_CollectionConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blockCompressor !== 0) {
      writer.uint32(8).int32(message.blockCompressor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44_Storage_WiredTiger_CollectionConfig();
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

  fromJSON(object: any): MongodConfig44_Storage_WiredTiger_CollectionConfig {
    return {
      $type: MongodConfig44_Storage_WiredTiger_CollectionConfig.$type,
      blockCompressor: isSet(object.blockCompressor)
        ? mongodConfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
        : 0,
    };
  },

  toJSON(message: MongodConfig44_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    if (message.blockCompressor !== 0) {
      obj.blockCompressor = mongodConfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
        message.blockCompressor,
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig44_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig44_Storage_WiredTiger_CollectionConfig {
    return MongodConfig44_Storage_WiredTiger_CollectionConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig44_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig44_Storage_WiredTiger_CollectionConfig {
    const message = createBaseMongodConfig44_Storage_WiredTiger_CollectionConfig();
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig44_Storage_WiredTiger_CollectionConfig.$type,
  MongodConfig44_Storage_WiredTiger_CollectionConfig,
);

function createBaseMongodConfig44_Storage_Journal(): MongodConfig44_Storage_Journal {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.Journal", commitInterval: undefined };
}

export const MongodConfig44_Storage_Journal = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.Journal" as const,

  encode(message: MongodConfig44_Storage_Journal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44_Storage_Journal();
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

  fromJSON(object: any): MongodConfig44_Storage_Journal {
    return {
      $type: MongodConfig44_Storage_Journal.$type,
      commitInterval: isSet(object.commitInterval) ? Number(object.commitInterval) : undefined,
    };
  },

  toJSON(message: MongodConfig44_Storage_Journal): unknown {
    const obj: any = {};
    if (message.commitInterval !== undefined) {
      obj.commitInterval = message.commitInterval;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44_Storage_Journal>): MongodConfig44_Storage_Journal {
    return MongodConfig44_Storage_Journal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44_Storage_Journal>): MongodConfig44_Storage_Journal {
    const message = createBaseMongodConfig44_Storage_Journal();
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44_Storage_Journal.$type, MongodConfig44_Storage_Journal);

function createBaseMongodConfig44_OperationProfiling(): MongodConfig44_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongodConfig44_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.OperationProfiling" as const,

  encode(message: MongodConfig44_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44_OperationProfiling();
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

  fromJSON(object: any): MongodConfig44_OperationProfiling {
    return {
      $type: MongodConfig44_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongodConfig44_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongodConfig44_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongodConfig44_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44_OperationProfiling>): MongodConfig44_OperationProfiling {
    return MongodConfig44_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44_OperationProfiling>): MongodConfig44_OperationProfiling {
    const message = createBaseMongodConfig44_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44_OperationProfiling.$type, MongodConfig44_OperationProfiling);

function createBaseMongodConfig44_Network(): MongodConfig44_Network {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Network", maxIncomingConnections: undefined };
}

export const MongodConfig44_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Network" as const,

  encode(message: MongodConfig44_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44_Network();
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

  fromJSON(object: any): MongodConfig44_Network {
    return {
      $type: MongodConfig44_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongodConfig44_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44_Network>): MongodConfig44_Network {
    return MongodConfig44_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44_Network>): MongodConfig44_Network {
    const message = createBaseMongodConfig44_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44_Network.$type, MongodConfig44_Network);

function createBaseMongoCfgConfig44(): MongoCfgConfig44 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongoCfgConfig44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4" as const,

  encode(message: MongoCfgConfig44, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongoCfgConfig44_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongoCfgConfig44_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongoCfgConfig44_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongoCfgConfig44_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongoCfgConfig44_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongoCfgConfig44_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig44 {
    return {
      $type: MongoCfgConfig44.$type,
      storage: isSet(object.storage) ? MongoCfgConfig44_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongoCfgConfig44_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongoCfgConfig44_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongoCfgConfig44_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongoCfgConfig44_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongoCfgConfig44_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig44>): MongoCfgConfig44 {
    return MongoCfgConfig44.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig44>): MongoCfgConfig44 {
    const message = createBaseMongoCfgConfig44();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongoCfgConfig44_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongoCfgConfig44_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongoCfgConfig44_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig44.$type, MongoCfgConfig44);

function createBaseMongoCfgConfig44_Storage(): MongoCfgConfig44_Storage {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage", wiredTiger: undefined };
}

export const MongoCfgConfig44_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage" as const,

  encode(message: MongoCfgConfig44_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongoCfgConfig44_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongoCfgConfig44_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig44_Storage {
    return {
      $type: MongoCfgConfig44_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongoCfgConfig44_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongoCfgConfig44_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig44_Storage>): MongoCfgConfig44_Storage {
    return MongoCfgConfig44_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig44_Storage>): MongoCfgConfig44_Storage {
    const message = createBaseMongoCfgConfig44_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongoCfgConfig44_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig44_Storage.$type, MongoCfgConfig44_Storage);

function createBaseMongoCfgConfig44_Storage_WiredTiger(): MongoCfgConfig44_Storage_WiredTiger {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger", engineConfig: undefined };
}

export const MongoCfgConfig44_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger" as const,

  encode(message: MongoCfgConfig44_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongoCfgConfig44_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongoCfgConfig44_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig44_Storage_WiredTiger {
    return {
      $type: MongoCfgConfig44_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongoCfgConfig44_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongoCfgConfig44_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig44_Storage_WiredTiger>): MongoCfgConfig44_Storage_WiredTiger {
    return MongoCfgConfig44_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig44_Storage_WiredTiger>): MongoCfgConfig44_Storage_WiredTiger {
    const message = createBaseMongoCfgConfig44_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongoCfgConfig44_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig44_Storage_WiredTiger.$type, MongoCfgConfig44_Storage_WiredTiger);

function createBaseMongoCfgConfig44_Storage_WiredTiger_EngineConfig(): MongoCfgConfig44_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongoCfgConfig44_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongoCfgConfig44_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongoCfgConfig44_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongoCfgConfig44_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig44_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig44_Storage_WiredTiger_EngineConfig {
    return MongoCfgConfig44_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig44_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig44_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongoCfgConfig44_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig44_Storage_WiredTiger_EngineConfig.$type,
  MongoCfgConfig44_Storage_WiredTiger_EngineConfig,
);

function createBaseMongoCfgConfig44_OperationProfiling(): MongoCfgConfig44_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongoCfgConfig44_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.OperationProfiling" as const,

  encode(message: MongoCfgConfig44_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44_OperationProfiling();
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

  fromJSON(object: any): MongoCfgConfig44_OperationProfiling {
    return {
      $type: MongoCfgConfig44_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongoCfgConfig44_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongoCfgConfig44_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig44_OperationProfiling>): MongoCfgConfig44_OperationProfiling {
    return MongoCfgConfig44_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig44_OperationProfiling>): MongoCfgConfig44_OperationProfiling {
    const message = createBaseMongoCfgConfig44_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig44_OperationProfiling.$type, MongoCfgConfig44_OperationProfiling);

function createBaseMongoCfgConfig44_Network(): MongoCfgConfig44_Network {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Network", maxIncomingConnections: undefined };
}

export const MongoCfgConfig44_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Network" as const,

  encode(message: MongoCfgConfig44_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44_Network();
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

  fromJSON(object: any): MongoCfgConfig44_Network {
    return {
      $type: MongoCfgConfig44_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig44_Network>): MongoCfgConfig44_Network {
    return MongoCfgConfig44_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig44_Network>): MongoCfgConfig44_Network {
    const message = createBaseMongoCfgConfig44_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig44_Network.$type, MongoCfgConfig44_Network);

function createBaseMongosConfig44(): MongosConfig44 {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4", net: undefined };
}

export const MongosConfig44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4" as const,

  encode(message: MongosConfig44, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.net !== undefined) {
      MongosConfig44_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig44 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig44();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.net = MongosConfig44_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig44 {
    return {
      $type: MongosConfig44.$type,
      net: isSet(object.net) ? MongosConfig44_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongosConfig44): unknown {
    const obj: any = {};
    if (message.net !== undefined) {
      obj.net = MongosConfig44_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig44>): MongosConfig44 {
    return MongosConfig44.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig44>): MongosConfig44 {
    const message = createBaseMongosConfig44();
    message.net = (object.net !== undefined && object.net !== null)
      ? MongosConfig44_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig44.$type, MongosConfig44);

function createBaseMongosConfig44_Network(): MongosConfig44_Network {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4.Network", maxIncomingConnections: undefined };
}

export const MongosConfig44_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4.Network" as const,

  encode(message: MongosConfig44_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig44_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig44_Network();
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

  fromJSON(object: any): MongosConfig44_Network {
    return {
      $type: MongosConfig44_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongosConfig44_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig44_Network>): MongosConfig44_Network {
    return MongosConfig44_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig44_Network>): MongosConfig44_Network {
    const message = createBaseMongosConfig44_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig44_Network.$type, MongosConfig44_Network);

function createBaseMongodConfigSet44(): MongodConfigSet44 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongodConfigSet44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4" as const,

  encode(message: MongodConfigSet44, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongodConfig44.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongodConfig44.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongodConfig44.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfigSet44 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfigSet44();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongodConfig44.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongodConfig44.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongodConfig44.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfigSet44 {
    return {
      $type: MongodConfigSet44.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongodConfig44.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongodConfig44.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongodConfig44.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongodConfigSet44): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongodConfig44.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongodConfig44.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongodConfig44.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfigSet44>): MongodConfigSet44 {
    return MongodConfigSet44.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfigSet44>): MongodConfigSet44 {
    const message = createBaseMongodConfigSet44();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongodConfig44.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongodConfig44.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongodConfig44.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfigSet44.$type, MongodConfigSet44);

function createBaseMongoCfgConfigSet44(): MongoCfgConfigSet44 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongoCfgConfigSet44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4" as const,

  encode(message: MongoCfgConfigSet44, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongoCfgConfig44.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongoCfgConfig44.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongoCfgConfig44.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfigSet44 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfigSet44();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongoCfgConfig44.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongoCfgConfig44.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongoCfgConfig44.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfigSet44 {
    return {
      $type: MongoCfgConfigSet44.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongoCfgConfig44.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongoCfgConfig44.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongoCfgConfig44.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongoCfgConfigSet44): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongoCfgConfig44.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongoCfgConfig44.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongoCfgConfig44.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfigSet44>): MongoCfgConfigSet44 {
    return MongoCfgConfigSet44.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfigSet44>): MongoCfgConfigSet44 {
    const message = createBaseMongoCfgConfigSet44();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongoCfgConfig44.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongoCfgConfig44.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongoCfgConfig44.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfigSet44.$type, MongoCfgConfigSet44);

function createBaseMongosConfigSet44(): MongosConfigSet44 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongosConfigSet44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4" as const,

  encode(message: MongosConfigSet44, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongosConfig44.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongosConfig44.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongosConfig44.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfigSet44 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfigSet44();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongosConfig44.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongosConfig44.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongosConfig44.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfigSet44 {
    return {
      $type: MongosConfigSet44.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongosConfig44.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongosConfig44.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongosConfig44.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongosConfigSet44): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongosConfig44.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongosConfig44.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongosConfig44.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfigSet44>): MongosConfigSet44 {
    return MongosConfigSet44.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfigSet44>): MongosConfigSet44 {
    const message = createBaseMongosConfigSet44();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongosConfig44.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongosConfig44.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongosConfig44.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfigSet44.$type, MongosConfigSet44);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
