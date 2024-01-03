/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v3.6/reference/configuration-options/).
 */
export interface MongodConfig36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6";
  /** `storage` section of mongod configuration. */
  storage?:
    | MongodConfig36_Storage
    | undefined;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?:
    | MongodConfig36_OperationProfiling
    | undefined;
  /** `net` section of mongod configuration. */
  net?: MongodConfig36_Network | undefined;
}

export interface MongodConfig36_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?:
    | MongodConfig36_Storage_WiredTiger
    | undefined;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v3.6/reference/glossary/#term-journal). */
  journal?: MongodConfig36_Storage_Journal | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongodConfig36_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?:
    | MongodConfig36_Storage_WiredTiger_EngineConfig
    | undefined;
  /** Collection configuration for WiredTiger. */
  collectionConfig?: MongodConfig36_Storage_WiredTiger_CollectionConfig | undefined;
}

export interface MongodConfig36_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongodConfig36_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** NONE - No compression. */
  NONE = 1,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v3.6/reference/glossary/#term-snappy) compression. */
  SNAPPY = 2,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v3.6/reference/glossary/#term-zlib) compression. */
  ZLIB = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig36_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any,
): MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig36_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
  switch (object) {
    case MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig36_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig36_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal";
  /**
   * Whether the journal is enabled or disabled.
   * Possible values:
   * * true (default) - the journal is enabled.
   * * false - the journal is disabled.
   */
  enabled?:
    | boolean
    | undefined;
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number | undefined;
}

export interface MongodConfig36_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongodConfig36_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode.
   */
  slowOpThreshold?: number | undefined;
}

export enum MongodConfig36_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig36_OperationProfiling_ModeFromJSON(object: any): MongodConfig36_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongodConfig36_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongodConfig36_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongodConfig36_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongodConfig36_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig36_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodConfig36_OperationProfiling_ModeToJSON(object: MongodConfig36_OperationProfiling_Mode): string {
  switch (object) {
    case MongodConfig36_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongodConfig36_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongodConfig36_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongodConfig36_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongodConfig36_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig36_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongoCfgConfig36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6";
  /** `storage` section of mongocfg configuration. */
  storage?:
    | MongoCfgConfig36_Storage
    | undefined;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?:
    | MongoCfgConfig36_OperationProfiling
    | undefined;
  /** `net` section of mongocfg configuration. */
  net?: MongoCfgConfig36_Network | undefined;
}

export interface MongoCfgConfig36_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: MongoCfgConfig36_Storage_WiredTiger | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongoCfgConfig36_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: MongoCfgConfig36_Storage_WiredTiger_EngineConfig | undefined;
}

export interface MongoCfgConfig36_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongoCfgConfig36_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling";
  /** Operation profiling level. For details, see [MongoDB documentation](https://docs.mongodb.com/v3.6/tutorial/manage-the-database-profiler/). */
  mode: MongoCfgConfig36_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v3.6/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number | undefined;
}

export enum MongoCfgConfig36_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /**
   * OFF - The profiler is off and does not collect any data. This is the default
   * profiler level.
   */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongoCfgConfig36_OperationProfiling_ModeFromJSON(
  object: any,
): MongoCfgConfig36_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongoCfgConfig36_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongoCfgConfig36_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongoCfgConfig36_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongoCfgConfig36_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongoCfgConfig36_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongoCfgConfig36_OperationProfiling_ModeToJSON(
  object: MongoCfgConfig36_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongoCfgConfig36_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongoCfgConfig36_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongoCfgConfig36_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongoCfgConfig36_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongoCfgConfig36_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongoCfgConfig36_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network";
  /** The maximum number of incoming connections. */
  maxIncomingConnections?: number | undefined;
}

export interface MongosConfig36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6";
  /** Network settings for mongos. */
  net?: MongosConfig36_Network | undefined;
}

export interface MongosConfig36_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network";
  /** The maximum number of incoming connections. */
  maxIncomingConnections?: number | undefined;
}

export interface MongodConfigSet36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6";
  /**
   * Effective mongod settings for a MongoDB 3.6 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongodConfig36
    | undefined;
  /** User-defined mongod settings for a MongoDB 3.6 cluster. */
  userConfig?:
    | MongodConfig36
    | undefined;
  /** Default mongod configuration for a MongoDB 3.6 cluster. */
  defaultConfig?: MongodConfig36 | undefined;
}

export interface MongoCfgConfigSet36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6";
  /**
   * Effective mongocfg settings for a MongoDB 3.6 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongoCfgConfig36
    | undefined;
  /** User-defined mongocfg settings for a MongoDB 3.6 cluster. */
  userConfig?:
    | MongoCfgConfig36
    | undefined;
  /** Default mongocfg configuration for a MongoDB 3.6 cluster. */
  defaultConfig?: MongoCfgConfig36 | undefined;
}

export interface MongosConfigSet36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6";
  /**
   * Effective settings for a MongoDB 3.6 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongosConfig36
    | undefined;
  /** User-defined settings for a MongoDB 3.6 cluster. */
  userConfig?:
    | MongosConfig36
    | undefined;
  /** Default configuration for a MongoDB 3.6 cluster. */
  defaultConfig?: MongosConfig36 | undefined;
}

function createBaseMongodConfig36(): MongodConfig36 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongodConfig36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6" as const,

  encode(message: MongodConfig36, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongodConfig36_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongodConfig36_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongodConfig36_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig36 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig36();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongodConfig36_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongodConfig36_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongodConfig36_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig36 {
    return {
      $type: MongodConfig36.$type,
      storage: isSet(object.storage) ? MongodConfig36_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongodConfig36_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongodConfig36_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongodConfig36): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongodConfig36_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongodConfig36_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongodConfig36_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig36>): MongodConfig36 {
    return MongodConfig36.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig36>): MongodConfig36 {
    const message = createBaseMongodConfig36();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongodConfig36_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongodConfig36_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongodConfig36_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig36.$type, MongodConfig36);

function createBaseMongodConfig36_Storage(): MongodConfig36_Storage {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage",
    wiredTiger: undefined,
    journal: undefined,
  };
}

export const MongodConfig36_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage" as const,

  encode(message: MongodConfig36_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongodConfig36_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    if (message.journal !== undefined) {
      MongodConfig36_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig36_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig36_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongodConfig36_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.journal = MongodConfig36_Storage_Journal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig36_Storage {
    return {
      $type: MongodConfig36_Storage.$type,
      wiredTiger: isSet(object.wiredTiger) ? MongodConfig36_Storage_WiredTiger.fromJSON(object.wiredTiger) : undefined,
      journal: isSet(object.journal) ? MongodConfig36_Storage_Journal.fromJSON(object.journal) : undefined,
    };
  },

  toJSON(message: MongodConfig36_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongodConfig36_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    if (message.journal !== undefined) {
      obj.journal = MongodConfig36_Storage_Journal.toJSON(message.journal);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig36_Storage>): MongodConfig36_Storage {
    return MongodConfig36_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig36_Storage>): MongodConfig36_Storage {
    const message = createBaseMongodConfig36_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongodConfig36_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    message.journal = (object.journal !== undefined && object.journal !== null)
      ? MongodConfig36_Storage_Journal.fromPartial(object.journal)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig36_Storage.$type, MongodConfig36_Storage);

function createBaseMongodConfig36_Storage_WiredTiger(): MongodConfig36_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger",
    engineConfig: undefined,
    collectionConfig: undefined,
  };
}

export const MongodConfig36_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger" as const,

  encode(message: MongodConfig36_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongodConfig36_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.collectionConfig !== undefined) {
      MongodConfig36_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig36_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig36_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongodConfig36_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collectionConfig = MongodConfig36_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig36_Storage_WiredTiger {
    return {
      $type: MongodConfig36_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongodConfig36_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
      collectionConfig: isSet(object.collectionConfig)
        ? MongodConfig36_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
        : undefined,
    };
  },

  toJSON(message: MongodConfig36_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongodConfig36_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    if (message.collectionConfig !== undefined) {
      obj.collectionConfig = MongodConfig36_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig36_Storage_WiredTiger>): MongodConfig36_Storage_WiredTiger {
    return MongodConfig36_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig36_Storage_WiredTiger>): MongodConfig36_Storage_WiredTiger {
    const message = createBaseMongodConfig36_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongodConfig36_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    message.collectionConfig = (object.collectionConfig !== undefined && object.collectionConfig !== null)
      ? MongodConfig36_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig36_Storage_WiredTiger.$type, MongodConfig36_Storage_WiredTiger);

function createBaseMongodConfig36_Storage_WiredTiger_EngineConfig(): MongodConfig36_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongodConfig36_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongodConfig36_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig36_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig36_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongodConfig36_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongodConfig36_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongodConfig36_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig36_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig36_Storage_WiredTiger_EngineConfig {
    return MongodConfig36_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig36_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig36_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongodConfig36_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig36_Storage_WiredTiger_EngineConfig.$type,
  MongodConfig36_Storage_WiredTiger_EngineConfig,
);

function createBaseMongodConfig36_Storage_WiredTiger_CollectionConfig(): MongodConfig36_Storage_WiredTiger_CollectionConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
  };
}

export const MongodConfig36_Storage_WiredTiger_CollectionConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: MongodConfig36_Storage_WiredTiger_CollectionConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blockCompressor !== 0) {
      writer.uint32(8).int32(message.blockCompressor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig36_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig36_Storage_WiredTiger_CollectionConfig();
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

  fromJSON(object: any): MongodConfig36_Storage_WiredTiger_CollectionConfig {
    return {
      $type: MongodConfig36_Storage_WiredTiger_CollectionConfig.$type,
      blockCompressor: isSet(object.blockCompressor)
        ? mongodConfig36_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
        : 0,
    };
  },

  toJSON(message: MongodConfig36_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    if (message.blockCompressor !== 0) {
      obj.blockCompressor = mongodConfig36_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
        message.blockCompressor,
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig36_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig36_Storage_WiredTiger_CollectionConfig {
    return MongodConfig36_Storage_WiredTiger_CollectionConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig36_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig36_Storage_WiredTiger_CollectionConfig {
    const message = createBaseMongodConfig36_Storage_WiredTiger_CollectionConfig();
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig36_Storage_WiredTiger_CollectionConfig.$type,
  MongodConfig36_Storage_WiredTiger_CollectionConfig,
);

function createBaseMongodConfig36_Storage_Journal(): MongodConfig36_Storage_Journal {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal",
    enabled: undefined,
    commitInterval: undefined,
  };
}

export const MongodConfig36_Storage_Journal = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal" as const,

  encode(message: MongodConfig36_Storage_Journal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enabled! }, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig36_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig36_Storage_Journal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.enabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
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

  fromJSON(object: any): MongodConfig36_Storage_Journal {
    return {
      $type: MongodConfig36_Storage_Journal.$type,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      commitInterval: isSet(object.commitInterval) ? Number(object.commitInterval) : undefined,
    };
  },

  toJSON(message: MongodConfig36_Storage_Journal): unknown {
    const obj: any = {};
    if (message.enabled !== undefined) {
      obj.enabled = message.enabled;
    }
    if (message.commitInterval !== undefined) {
      obj.commitInterval = message.commitInterval;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig36_Storage_Journal>): MongodConfig36_Storage_Journal {
    return MongodConfig36_Storage_Journal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig36_Storage_Journal>): MongodConfig36_Storage_Journal {
    const message = createBaseMongodConfig36_Storage_Journal();
    message.enabled = object.enabled ?? undefined;
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig36_Storage_Journal.$type, MongodConfig36_Storage_Journal);

function createBaseMongodConfig36_OperationProfiling(): MongodConfig36_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongodConfig36_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling" as const,

  encode(message: MongodConfig36_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig36_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig36_OperationProfiling();
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

  fromJSON(object: any): MongodConfig36_OperationProfiling {
    return {
      $type: MongodConfig36_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongodConfig36_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongodConfig36_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongodConfig36_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig36_OperationProfiling>): MongodConfig36_OperationProfiling {
    return MongodConfig36_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig36_OperationProfiling>): MongodConfig36_OperationProfiling {
    const message = createBaseMongodConfig36_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig36_OperationProfiling.$type, MongodConfig36_OperationProfiling);

function createBaseMongodConfig36_Network(): MongodConfig36_Network {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network", maxIncomingConnections: undefined };
}

export const MongodConfig36_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network" as const,

  encode(message: MongodConfig36_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig36_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig36_Network();
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

  fromJSON(object: any): MongodConfig36_Network {
    return {
      $type: MongodConfig36_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongodConfig36_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig36_Network>): MongodConfig36_Network {
    return MongodConfig36_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig36_Network>): MongodConfig36_Network {
    const message = createBaseMongodConfig36_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig36_Network.$type, MongodConfig36_Network);

function createBaseMongoCfgConfig36(): MongoCfgConfig36 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongoCfgConfig36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6" as const,

  encode(message: MongoCfgConfig36, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongoCfgConfig36_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongoCfgConfig36_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongoCfgConfig36_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig36 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig36();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongoCfgConfig36_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongoCfgConfig36_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongoCfgConfig36_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig36 {
    return {
      $type: MongoCfgConfig36.$type,
      storage: isSet(object.storage) ? MongoCfgConfig36_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongoCfgConfig36_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongoCfgConfig36_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig36): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongoCfgConfig36_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongoCfgConfig36_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongoCfgConfig36_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig36>): MongoCfgConfig36 {
    return MongoCfgConfig36.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig36>): MongoCfgConfig36 {
    const message = createBaseMongoCfgConfig36();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongoCfgConfig36_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongoCfgConfig36_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongoCfgConfig36_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig36.$type, MongoCfgConfig36);

function createBaseMongoCfgConfig36_Storage(): MongoCfgConfig36_Storage {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage", wiredTiger: undefined };
}

export const MongoCfgConfig36_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage" as const,

  encode(message: MongoCfgConfig36_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongoCfgConfig36_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig36_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig36_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongoCfgConfig36_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig36_Storage {
    return {
      $type: MongoCfgConfig36_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongoCfgConfig36_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig36_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongoCfgConfig36_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig36_Storage>): MongoCfgConfig36_Storage {
    return MongoCfgConfig36_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig36_Storage>): MongoCfgConfig36_Storage {
    const message = createBaseMongoCfgConfig36_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongoCfgConfig36_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig36_Storage.$type, MongoCfgConfig36_Storage);

function createBaseMongoCfgConfig36_Storage_WiredTiger(): MongoCfgConfig36_Storage_WiredTiger {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger", engineConfig: undefined };
}

export const MongoCfgConfig36_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger" as const,

  encode(message: MongoCfgConfig36_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongoCfgConfig36_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig36_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig36_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongoCfgConfig36_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig36_Storage_WiredTiger {
    return {
      $type: MongoCfgConfig36_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongoCfgConfig36_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig36_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongoCfgConfig36_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig36_Storage_WiredTiger>): MongoCfgConfig36_Storage_WiredTiger {
    return MongoCfgConfig36_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig36_Storage_WiredTiger>): MongoCfgConfig36_Storage_WiredTiger {
    const message = createBaseMongoCfgConfig36_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongoCfgConfig36_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig36_Storage_WiredTiger.$type, MongoCfgConfig36_Storage_WiredTiger);

function createBaseMongoCfgConfig36_Storage_WiredTiger_EngineConfig(): MongoCfgConfig36_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongoCfgConfig36_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongoCfgConfig36_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig36_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig36_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongoCfgConfig36_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongoCfgConfig36_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig36_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig36_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig36_Storage_WiredTiger_EngineConfig {
    return MongoCfgConfig36_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig36_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig36_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongoCfgConfig36_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig36_Storage_WiredTiger_EngineConfig.$type,
  MongoCfgConfig36_Storage_WiredTiger_EngineConfig,
);

function createBaseMongoCfgConfig36_OperationProfiling(): MongoCfgConfig36_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongoCfgConfig36_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling" as const,

  encode(message: MongoCfgConfig36_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig36_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig36_OperationProfiling();
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

  fromJSON(object: any): MongoCfgConfig36_OperationProfiling {
    return {
      $type: MongoCfgConfig36_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongoCfgConfig36_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig36_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongoCfgConfig36_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig36_OperationProfiling>): MongoCfgConfig36_OperationProfiling {
    return MongoCfgConfig36_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig36_OperationProfiling>): MongoCfgConfig36_OperationProfiling {
    const message = createBaseMongoCfgConfig36_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig36_OperationProfiling.$type, MongoCfgConfig36_OperationProfiling);

function createBaseMongoCfgConfig36_Network(): MongoCfgConfig36_Network {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network", maxIncomingConnections: undefined };
}

export const MongoCfgConfig36_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network" as const,

  encode(message: MongoCfgConfig36_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig36_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig36_Network();
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

  fromJSON(object: any): MongoCfgConfig36_Network {
    return {
      $type: MongoCfgConfig36_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig36_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig36_Network>): MongoCfgConfig36_Network {
    return MongoCfgConfig36_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig36_Network>): MongoCfgConfig36_Network {
    const message = createBaseMongoCfgConfig36_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig36_Network.$type, MongoCfgConfig36_Network);

function createBaseMongosConfig36(): MongosConfig36 {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6", net: undefined };
}

export const MongosConfig36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6" as const,

  encode(message: MongosConfig36, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.net !== undefined) {
      MongosConfig36_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig36 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig36();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.net = MongosConfig36_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig36 {
    return {
      $type: MongosConfig36.$type,
      net: isSet(object.net) ? MongosConfig36_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongosConfig36): unknown {
    const obj: any = {};
    if (message.net !== undefined) {
      obj.net = MongosConfig36_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig36>): MongosConfig36 {
    return MongosConfig36.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig36>): MongosConfig36 {
    const message = createBaseMongosConfig36();
    message.net = (object.net !== undefined && object.net !== null)
      ? MongosConfig36_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig36.$type, MongosConfig36);

function createBaseMongosConfig36_Network(): MongosConfig36_Network {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network", maxIncomingConnections: undefined };
}

export const MongosConfig36_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network" as const,

  encode(message: MongosConfig36_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig36_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig36_Network();
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

  fromJSON(object: any): MongosConfig36_Network {
    return {
      $type: MongosConfig36_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongosConfig36_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig36_Network>): MongosConfig36_Network {
    return MongosConfig36_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig36_Network>): MongosConfig36_Network {
    const message = createBaseMongosConfig36_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig36_Network.$type, MongosConfig36_Network);

function createBaseMongodConfigSet36(): MongodConfigSet36 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongodConfigSet36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6" as const,

  encode(message: MongodConfigSet36, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongodConfig36.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongodConfig36.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongodConfig36.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfigSet36 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfigSet36();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongodConfig36.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongodConfig36.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongodConfig36.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfigSet36 {
    return {
      $type: MongodConfigSet36.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongodConfig36.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongodConfig36.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongodConfig36.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongodConfigSet36): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongodConfig36.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongodConfig36.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongodConfig36.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfigSet36>): MongodConfigSet36 {
    return MongodConfigSet36.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfigSet36>): MongodConfigSet36 {
    const message = createBaseMongodConfigSet36();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongodConfig36.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongodConfig36.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongodConfig36.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfigSet36.$type, MongodConfigSet36);

function createBaseMongoCfgConfigSet36(): MongoCfgConfigSet36 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongoCfgConfigSet36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6" as const,

  encode(message: MongoCfgConfigSet36, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongoCfgConfig36.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongoCfgConfig36.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongoCfgConfig36.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfigSet36 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfigSet36();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongoCfgConfig36.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongoCfgConfig36.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongoCfgConfig36.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfigSet36 {
    return {
      $type: MongoCfgConfigSet36.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongoCfgConfig36.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongoCfgConfig36.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongoCfgConfig36.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongoCfgConfigSet36): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongoCfgConfig36.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongoCfgConfig36.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongoCfgConfig36.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfigSet36>): MongoCfgConfigSet36 {
    return MongoCfgConfigSet36.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfigSet36>): MongoCfgConfigSet36 {
    const message = createBaseMongoCfgConfigSet36();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongoCfgConfig36.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongoCfgConfig36.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongoCfgConfig36.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfigSet36.$type, MongoCfgConfigSet36);

function createBaseMongosConfigSet36(): MongosConfigSet36 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongosConfigSet36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6" as const,

  encode(message: MongosConfigSet36, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongosConfig36.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongosConfig36.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongosConfig36.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfigSet36 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfigSet36();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongosConfig36.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongosConfig36.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongosConfig36.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfigSet36 {
    return {
      $type: MongosConfigSet36.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MongosConfig36.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MongosConfig36.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongosConfig36.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongosConfigSet36): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongosConfig36.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongosConfig36.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongosConfig36.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfigSet36>): MongosConfigSet36 {
    return MongosConfigSet36.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfigSet36>): MongosConfigSet36 {
    const message = createBaseMongosConfigSet36();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongosConfig36.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongosConfig36.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongosConfig36.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfigSet36.$type, MongosConfigSet36);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
