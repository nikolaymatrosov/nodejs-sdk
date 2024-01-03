/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/).
 */
export interface MongodConfig60Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise";
  /** `storage` section of mongod configuration. */
  storage?:
    | MongodConfig60Enterprise_Storage
    | undefined;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?:
    | MongodConfig60Enterprise_OperationProfiling
    | undefined;
  /** `net` section of mongod configuration. */
  net?:
    | MongodConfig60Enterprise_Network
    | undefined;
  /** `security` section of mongod configuration. */
  security?:
    | MongodConfig60Enterprise_Security
    | undefined;
  /** `AuditLog` section of mongod configuration. */
  auditLog?:
    | MongodConfig60Enterprise_AuditLog
    | undefined;
  /** `SetParameter` section of mongod configuration. */
  setParameter?: MongodConfig60Enterprise_SetParameter | undefined;
}

export interface MongodConfig60Enterprise_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?:
    | MongodConfig60Enterprise_Storage_WiredTiger
    | undefined;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v6.0/reference/glossary/#term-journal). */
  journal?: MongodConfig60Enterprise_Storage_Journal | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongodConfig60Enterprise_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?:
    | MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig
    | undefined;
  /** Collection configuration for WiredTiger. */
  collectionConfig?: MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig | undefined;
}

export interface MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
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

export function mongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any,
): MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case 4:
    case "ZSTD":
      return MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
  switch (object) {
    case MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig60Enterprise_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number | undefined;
}

export interface MongodConfig60Enterprise_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongodConfig60Enterprise_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode.
   */
  slowOpThreshold?: number | undefined;
}

export enum MongodConfig60Enterprise_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig60Enterprise_OperationProfiling_ModeFromJSON(
  object: any,
): MongodConfig60Enterprise_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongodConfig60Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongodConfig60Enterprise_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongodConfig60Enterprise_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongodConfig60Enterprise_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig60Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodConfig60Enterprise_OperationProfiling_ModeToJSON(
  object: MongodConfig60Enterprise_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongodConfig60Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongodConfig60Enterprise_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongodConfig60Enterprise_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongodConfig60Enterprise_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongodConfig60Enterprise_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig60Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongodConfig60Enterprise_Security {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security";
  /** If encryption at rest should be enabled or not */
  enableEncryption?:
    | boolean
    | undefined;
  /** `kmip` section of mongod security config */
  kmip?: MongodConfig60Enterprise_Security_KMIP | undefined;
}

export interface MongodConfig60Enterprise_Security_KMIP {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security.KMIP";
  /** KMIP server name */
  serverName: string;
  /** KMIP server port */
  port?:
    | number
    | undefined;
  /** KMIP Server CA */
  serverCa: string;
  /** KMIP client certificate + private key (unencrypted) */
  clientCertificate: string;
  /** KMIP Key identifier (if any) */
  keyIdentifier: string;
}

export interface MongodConfig60Enterprise_AuditLog {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.AuditLog";
  /** Audit filter */
  filter: string;
  /** Allows runtime configuration of audit filter and auditAuthorizationSuccess */
  runtimeConfiguration?: boolean | undefined;
}

export interface MongodConfig60Enterprise_SetParameter {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.SetParameter";
  /** Enables the auditing of authorization successes */
  auditAuthorizationSuccess?: boolean | undefined;
}

export interface MongoCfgConfig60Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise";
  /** `storage` section of mongocfg configuration. */
  storage?:
    | MongoCfgConfig60Enterprise_Storage
    | undefined;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?:
    | MongoCfgConfig60Enterprise_OperationProfiling
    | undefined;
  /** `net` section of mongocfg configuration. */
  net?: MongoCfgConfig60Enterprise_Network | undefined;
}

export interface MongoCfgConfig60Enterprise_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: MongoCfgConfig60Enterprise_Storage_WiredTiger | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongoCfgConfig60Enterprise_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig | undefined;
}

export interface MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongoCfgConfig60Enterprise_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongoCfgConfig60Enterprise_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number | undefined;
}

export enum MongoCfgConfig60Enterprise_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongoCfgConfig60Enterprise_OperationProfiling_ModeFromJSON(
  object: any,
): MongoCfgConfig60Enterprise_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongoCfgConfig60Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongoCfgConfig60Enterprise_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongoCfgConfig60Enterprise_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongoCfgConfig60Enterprise_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongoCfgConfig60Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongoCfgConfig60Enterprise_OperationProfiling_ModeToJSON(
  object: MongoCfgConfig60Enterprise_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongoCfgConfig60Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongoCfgConfig60Enterprise_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongoCfgConfig60Enterprise_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongoCfgConfig60Enterprise_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongoCfgConfig60Enterprise_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongoCfgConfig60Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongosConfig60Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise";
  /** Network settings for mongos. */
  net?: MongosConfig60Enterprise_Network | undefined;
}

export interface MongosConfig60Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongodConfigSet60Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0_enterprise";
  /**
   * Effective mongod settings for a MongoDB 6.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongodConfig60Enterprise
    | undefined;
  /** User-defined mongod settings for a MongoDB 6.0 cluster. */
  userConfig?:
    | MongodConfig60Enterprise
    | undefined;
  /** Default mongod configuration for a MongoDB 6.0 cluster. */
  defaultConfig?: MongodConfig60Enterprise | undefined;
}

export interface MongoCfgConfigSet60Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0_enterprise";
  /**
   * Effective mongocfg settings for a MongoDB 6.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongoCfgConfig60Enterprise
    | undefined;
  /** User-defined mongocfg settings for a MongoDB 6.0 cluster. */
  userConfig?:
    | MongoCfgConfig60Enterprise
    | undefined;
  /** Default mongocfg configuration for a MongoDB 6.0 cluster. */
  defaultConfig?: MongoCfgConfig60Enterprise | undefined;
}

export interface MongosConfigSet60Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0_enterprise";
  /**
   * Effective mongos settings for a MongoDB 6.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongosConfig60Enterprise
    | undefined;
  /** User-defined mongos settings for a MongoDB 5.0 cluster. */
  userConfig?:
    | MongosConfig60Enterprise
    | undefined;
  /** Default mongos configuration for a MongoDB 5.0 cluster. */
  defaultConfig?: MongosConfig60Enterprise | undefined;
}

function createBaseMongodConfig60Enterprise(): MongodConfig60Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
    security: undefined,
    auditLog: undefined,
    setParameter: undefined,
  };
}

export const MongodConfig60Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise" as const,

  encode(message: MongodConfig60Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongodConfig60Enterprise_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongodConfig60Enterprise_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongodConfig60Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    if (message.security !== undefined) {
      MongodConfig60Enterprise_Security.encode(message.security, writer.uint32(34).fork()).ldelim();
    }
    if (message.auditLog !== undefined) {
      MongodConfig60Enterprise_AuditLog.encode(message.auditLog, writer.uint32(42).fork()).ldelim();
    }
    if (message.setParameter !== undefined) {
      MongodConfig60Enterprise_SetParameter.encode(message.setParameter, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongodConfig60Enterprise_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongodConfig60Enterprise_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongodConfig60Enterprise_Network.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.security = MongodConfig60Enterprise_Security.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.auditLog = MongodConfig60Enterprise_AuditLog.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setParameter = MongodConfig60Enterprise_SetParameter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60Enterprise {
    return {
      $type: MongodConfig60Enterprise.$type,
      storage: isSet(object.storage) ? MongodConfig60Enterprise_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongodConfig60Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongodConfig60Enterprise_Network.fromJSON(object.net) : undefined,
      security: isSet(object.security) ? MongodConfig60Enterprise_Security.fromJSON(object.security) : undefined,
      auditLog: isSet(object.auditLog) ? MongodConfig60Enterprise_AuditLog.fromJSON(object.auditLog) : undefined,
      setParameter: isSet(object.setParameter)
        ? MongodConfig60Enterprise_SetParameter.fromJSON(object.setParameter)
        : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongodConfig60Enterprise_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongodConfig60Enterprise_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongodConfig60Enterprise_Network.toJSON(message.net);
    }
    if (message.security !== undefined) {
      obj.security = MongodConfig60Enterprise_Security.toJSON(message.security);
    }
    if (message.auditLog !== undefined) {
      obj.auditLog = MongodConfig60Enterprise_AuditLog.toJSON(message.auditLog);
    }
    if (message.setParameter !== undefined) {
      obj.setParameter = MongodConfig60Enterprise_SetParameter.toJSON(message.setParameter);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise>): MongodConfig60Enterprise {
    return MongodConfig60Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60Enterprise>): MongodConfig60Enterprise {
    const message = createBaseMongodConfig60Enterprise();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongodConfig60Enterprise_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongodConfig60Enterprise_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongodConfig60Enterprise_Network.fromPartial(object.net)
      : undefined;
    message.security = (object.security !== undefined && object.security !== null)
      ? MongodConfig60Enterprise_Security.fromPartial(object.security)
      : undefined;
    message.auditLog = (object.auditLog !== undefined && object.auditLog !== null)
      ? MongodConfig60Enterprise_AuditLog.fromPartial(object.auditLog)
      : undefined;
    message.setParameter = (object.setParameter !== undefined && object.setParameter !== null)
      ? MongodConfig60Enterprise_SetParameter.fromPartial(object.setParameter)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise.$type, MongodConfig60Enterprise);

function createBaseMongodConfig60Enterprise_Storage(): MongodConfig60Enterprise_Storage {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage",
    wiredTiger: undefined,
    journal: undefined,
  };
}

export const MongodConfig60Enterprise_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage" as const,

  encode(message: MongodConfig60Enterprise_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongodConfig60Enterprise_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    if (message.journal !== undefined) {
      MongodConfig60Enterprise_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongodConfig60Enterprise_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.journal = MongodConfig60Enterprise_Storage_Journal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60Enterprise_Storage {
    return {
      $type: MongodConfig60Enterprise_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongodConfig60Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
      journal: isSet(object.journal) ? MongodConfig60Enterprise_Storage_Journal.fromJSON(object.journal) : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongodConfig60Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    if (message.journal !== undefined) {
      obj.journal = MongodConfig60Enterprise_Storage_Journal.toJSON(message.journal);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise_Storage>): MongodConfig60Enterprise_Storage {
    return MongodConfig60Enterprise_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60Enterprise_Storage>): MongodConfig60Enterprise_Storage {
    const message = createBaseMongodConfig60Enterprise_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongodConfig60Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    message.journal = (object.journal !== undefined && object.journal !== null)
      ? MongodConfig60Enterprise_Storage_Journal.fromPartial(object.journal)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise_Storage.$type, MongodConfig60Enterprise_Storage);

function createBaseMongodConfig60Enterprise_Storage_WiredTiger(): MongodConfig60Enterprise_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger",
    engineConfig: undefined,
    collectionConfig: undefined,
  };
}

export const MongodConfig60Enterprise_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger" as const,

  encode(message: MongodConfig60Enterprise_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.collectionConfig !== undefined) {
      MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig.encode(
        message.collectionConfig,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collectionConfig = MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60Enterprise_Storage_WiredTiger {
    return {
      $type: MongodConfig60Enterprise_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
      collectionConfig: isSet(object.collectionConfig)
        ? MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
        : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    if (message.collectionConfig !== undefined) {
      obj.collectionConfig = MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig.toJSON(
        message.collectionConfig,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise_Storage_WiredTiger>): MongodConfig60Enterprise_Storage_WiredTiger {
    return MongodConfig60Enterprise_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig60Enterprise_Storage_WiredTiger>,
  ): MongodConfig60Enterprise_Storage_WiredTiger {
    const message = createBaseMongodConfig60Enterprise_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    message.collectionConfig = (object.collectionConfig !== undefined && object.collectionConfig !== null)
      ? MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise_Storage_WiredTiger.$type, MongodConfig60Enterprise_Storage_WiredTiger);

function createBaseMongodConfig60Enterprise_Storage_WiredTiger_EngineConfig(): MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig {
    return MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongodConfig60Enterprise_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig.$type,
  MongodConfig60Enterprise_Storage_WiredTiger_EngineConfig,
);

function createBaseMongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig(): MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
  };
}

export const MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blockCompressor !== 0) {
      writer.uint32(8).int32(message.blockCompressor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig();
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

  fromJSON(object: any): MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig {
    return {
      $type: MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig.$type,
      blockCompressor: isSet(object.blockCompressor)
        ? mongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
        : 0,
    };
  },

  toJSON(message: MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    if (message.blockCompressor !== 0) {
      obj.blockCompressor = mongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
        message.blockCompressor,
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig {
    return MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig {
    const message = createBaseMongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig();
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig.$type,
  MongodConfig60Enterprise_Storage_WiredTiger_CollectionConfig,
);

function createBaseMongodConfig60Enterprise_Storage_Journal(): MongodConfig60Enterprise_Storage_Journal {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.Journal",
    commitInterval: undefined,
  };
}

export const MongodConfig60Enterprise_Storage_Journal = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.Journal" as const,

  encode(message: MongodConfig60Enterprise_Storage_Journal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_Storage_Journal();
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

  fromJSON(object: any): MongodConfig60Enterprise_Storage_Journal {
    return {
      $type: MongodConfig60Enterprise_Storage_Journal.$type,
      commitInterval: isSet(object.commitInterval) ? Number(object.commitInterval) : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise_Storage_Journal): unknown {
    const obj: any = {};
    if (message.commitInterval !== undefined) {
      obj.commitInterval = message.commitInterval;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise_Storage_Journal>): MongodConfig60Enterprise_Storage_Journal {
    return MongodConfig60Enterprise_Storage_Journal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60Enterprise_Storage_Journal>): MongodConfig60Enterprise_Storage_Journal {
    const message = createBaseMongodConfig60Enterprise_Storage_Journal();
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise_Storage_Journal.$type, MongodConfig60Enterprise_Storage_Journal);

function createBaseMongodConfig60Enterprise_OperationProfiling(): MongodConfig60Enterprise_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongodConfig60Enterprise_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.OperationProfiling" as const,

  encode(message: MongodConfig60Enterprise_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_OperationProfiling();
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

  fromJSON(object: any): MongodConfig60Enterprise_OperationProfiling {
    return {
      $type: MongodConfig60Enterprise_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongodConfig60Enterprise_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongodConfig60Enterprise_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise_OperationProfiling>): MongodConfig60Enterprise_OperationProfiling {
    return MongodConfig60Enterprise_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig60Enterprise_OperationProfiling>,
  ): MongodConfig60Enterprise_OperationProfiling {
    const message = createBaseMongodConfig60Enterprise_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise_OperationProfiling.$type, MongodConfig60Enterprise_OperationProfiling);

function createBaseMongodConfig60Enterprise_Network(): MongodConfig60Enterprise_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Network",
    maxIncomingConnections: undefined,
  };
}

export const MongodConfig60Enterprise_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Network" as const,

  encode(message: MongodConfig60Enterprise_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_Network();
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

  fromJSON(object: any): MongodConfig60Enterprise_Network {
    return {
      $type: MongodConfig60Enterprise_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise_Network>): MongodConfig60Enterprise_Network {
    return MongodConfig60Enterprise_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60Enterprise_Network>): MongodConfig60Enterprise_Network {
    const message = createBaseMongodConfig60Enterprise_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise_Network.$type, MongodConfig60Enterprise_Network);

function createBaseMongodConfig60Enterprise_Security(): MongodConfig60Enterprise_Security {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security",
    enableEncryption: undefined,
    kmip: undefined,
  };
}

export const MongodConfig60Enterprise_Security = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security" as const,

  encode(message: MongodConfig60Enterprise_Security, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableEncryption !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableEncryption! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.kmip !== undefined) {
      MongodConfig60Enterprise_Security_KMIP.encode(message.kmip, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_Security {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_Security();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.enableEncryption = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kmip = MongodConfig60Enterprise_Security_KMIP.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60Enterprise_Security {
    return {
      $type: MongodConfig60Enterprise_Security.$type,
      enableEncryption: isSet(object.enableEncryption) ? Boolean(object.enableEncryption) : undefined,
      kmip: isSet(object.kmip) ? MongodConfig60Enterprise_Security_KMIP.fromJSON(object.kmip) : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise_Security): unknown {
    const obj: any = {};
    if (message.enableEncryption !== undefined) {
      obj.enableEncryption = message.enableEncryption;
    }
    if (message.kmip !== undefined) {
      obj.kmip = MongodConfig60Enterprise_Security_KMIP.toJSON(message.kmip);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise_Security>): MongodConfig60Enterprise_Security {
    return MongodConfig60Enterprise_Security.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60Enterprise_Security>): MongodConfig60Enterprise_Security {
    const message = createBaseMongodConfig60Enterprise_Security();
    message.enableEncryption = object.enableEncryption ?? undefined;
    message.kmip = (object.kmip !== undefined && object.kmip !== null)
      ? MongodConfig60Enterprise_Security_KMIP.fromPartial(object.kmip)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise_Security.$type, MongodConfig60Enterprise_Security);

function createBaseMongodConfig60Enterprise_Security_KMIP(): MongodConfig60Enterprise_Security_KMIP {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security.KMIP",
    serverName: "",
    port: undefined,
    serverCa: "",
    clientCertificate: "",
    keyIdentifier: "",
  };
}

export const MongodConfig60Enterprise_Security_KMIP = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security.KMIP" as const,

  encode(message: MongodConfig60Enterprise_Security_KMIP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverName !== "") {
      writer.uint32(10).string(message.serverName);
    }
    if (message.port !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.port! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.serverCa !== "") {
      writer.uint32(26).string(message.serverCa);
    }
    if (message.clientCertificate !== "") {
      writer.uint32(34).string(message.clientCertificate);
    }
    if (message.keyIdentifier !== "") {
      writer.uint32(42).string(message.keyIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_Security_KMIP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_Security_KMIP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serverName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.port = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serverCa = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clientCertificate = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.keyIdentifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60Enterprise_Security_KMIP {
    return {
      $type: MongodConfig60Enterprise_Security_KMIP.$type,
      serverName: isSet(object.serverName) ? globalThis.String(object.serverName) : "",
      port: isSet(object.port) ? Number(object.port) : undefined,
      serverCa: isSet(object.serverCa) ? globalThis.String(object.serverCa) : "",
      clientCertificate: isSet(object.clientCertificate) ? globalThis.String(object.clientCertificate) : "",
      keyIdentifier: isSet(object.keyIdentifier) ? globalThis.String(object.keyIdentifier) : "",
    };
  },

  toJSON(message: MongodConfig60Enterprise_Security_KMIP): unknown {
    const obj: any = {};
    if (message.serverName !== "") {
      obj.serverName = message.serverName;
    }
    if (message.port !== undefined) {
      obj.port = message.port;
    }
    if (message.serverCa !== "") {
      obj.serverCa = message.serverCa;
    }
    if (message.clientCertificate !== "") {
      obj.clientCertificate = message.clientCertificate;
    }
    if (message.keyIdentifier !== "") {
      obj.keyIdentifier = message.keyIdentifier;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise_Security_KMIP>): MongodConfig60Enterprise_Security_KMIP {
    return MongodConfig60Enterprise_Security_KMIP.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60Enterprise_Security_KMIP>): MongodConfig60Enterprise_Security_KMIP {
    const message = createBaseMongodConfig60Enterprise_Security_KMIP();
    message.serverName = object.serverName ?? "";
    message.port = object.port ?? undefined;
    message.serverCa = object.serverCa ?? "";
    message.clientCertificate = object.clientCertificate ?? "";
    message.keyIdentifier = object.keyIdentifier ?? "";
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise_Security_KMIP.$type, MongodConfig60Enterprise_Security_KMIP);

function createBaseMongodConfig60Enterprise_AuditLog(): MongodConfig60Enterprise_AuditLog {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.AuditLog",
    filter: "",
    runtimeConfiguration: undefined,
  };
}

export const MongodConfig60Enterprise_AuditLog = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.AuditLog" as const,

  encode(message: MongodConfig60Enterprise_AuditLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.runtimeConfiguration !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.runtimeConfiguration! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_AuditLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_AuditLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runtimeConfiguration = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60Enterprise_AuditLog {
    return {
      $type: MongodConfig60Enterprise_AuditLog.$type,
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      runtimeConfiguration: isSet(object.runtimeConfiguration) ? Boolean(object.runtimeConfiguration) : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise_AuditLog): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.runtimeConfiguration !== undefined) {
      obj.runtimeConfiguration = message.runtimeConfiguration;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise_AuditLog>): MongodConfig60Enterprise_AuditLog {
    return MongodConfig60Enterprise_AuditLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60Enterprise_AuditLog>): MongodConfig60Enterprise_AuditLog {
    const message = createBaseMongodConfig60Enterprise_AuditLog();
    message.filter = object.filter ?? "";
    message.runtimeConfiguration = object.runtimeConfiguration ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise_AuditLog.$type, MongodConfig60Enterprise_AuditLog);

function createBaseMongodConfig60Enterprise_SetParameter(): MongodConfig60Enterprise_SetParameter {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.SetParameter",
    auditAuthorizationSuccess: undefined,
  };
}

export const MongodConfig60Enterprise_SetParameter = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.SetParameter" as const,

  encode(message: MongodConfig60Enterprise_SetParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditAuthorizationSuccess !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.auditAuthorizationSuccess! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig60Enterprise_SetParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig60Enterprise_SetParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.auditAuthorizationSuccess = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig60Enterprise_SetParameter {
    return {
      $type: MongodConfig60Enterprise_SetParameter.$type,
      auditAuthorizationSuccess: isSet(object.auditAuthorizationSuccess)
        ? Boolean(object.auditAuthorizationSuccess)
        : undefined,
    };
  },

  toJSON(message: MongodConfig60Enterprise_SetParameter): unknown {
    const obj: any = {};
    if (message.auditAuthorizationSuccess !== undefined) {
      obj.auditAuthorizationSuccess = message.auditAuthorizationSuccess;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig60Enterprise_SetParameter>): MongodConfig60Enterprise_SetParameter {
    return MongodConfig60Enterprise_SetParameter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig60Enterprise_SetParameter>): MongodConfig60Enterprise_SetParameter {
    const message = createBaseMongodConfig60Enterprise_SetParameter();
    message.auditAuthorizationSuccess = object.auditAuthorizationSuccess ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig60Enterprise_SetParameter.$type, MongodConfig60Enterprise_SetParameter);

function createBaseMongoCfgConfig60Enterprise(): MongoCfgConfig60Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongoCfgConfig60Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise" as const,

  encode(message: MongoCfgConfig60Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongoCfgConfig60Enterprise_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongoCfgConfig60Enterprise_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.net !== undefined) {
      MongoCfgConfig60Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongoCfgConfig60Enterprise_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongoCfgConfig60Enterprise_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongoCfgConfig60Enterprise_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig60Enterprise {
    return {
      $type: MongoCfgConfig60Enterprise.$type,
      storage: isSet(object.storage) ? MongoCfgConfig60Enterprise_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongoCfgConfig60Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongoCfgConfig60Enterprise_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60Enterprise): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongoCfgConfig60Enterprise_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongoCfgConfig60Enterprise_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongoCfgConfig60Enterprise_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig60Enterprise>): MongoCfgConfig60Enterprise {
    return MongoCfgConfig60Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig60Enterprise>): MongoCfgConfig60Enterprise {
    const message = createBaseMongoCfgConfig60Enterprise();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongoCfgConfig60Enterprise_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongoCfgConfig60Enterprise_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongoCfgConfig60Enterprise_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig60Enterprise.$type, MongoCfgConfig60Enterprise);

function createBaseMongoCfgConfig60Enterprise_Storage(): MongoCfgConfig60Enterprise_Storage {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage", wiredTiger: undefined };
}

export const MongoCfgConfig60Enterprise_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage" as const,

  encode(message: MongoCfgConfig60Enterprise_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongoCfgConfig60Enterprise_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60Enterprise_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60Enterprise_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongoCfgConfig60Enterprise_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig60Enterprise_Storage {
    return {
      $type: MongoCfgConfig60Enterprise_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongoCfgConfig60Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60Enterprise_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongoCfgConfig60Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig60Enterprise_Storage>): MongoCfgConfig60Enterprise_Storage {
    return MongoCfgConfig60Enterprise_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig60Enterprise_Storage>): MongoCfgConfig60Enterprise_Storage {
    const message = createBaseMongoCfgConfig60Enterprise_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongoCfgConfig60Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig60Enterprise_Storage.$type, MongoCfgConfig60Enterprise_Storage);

function createBaseMongoCfgConfig60Enterprise_Storage_WiredTiger(): MongoCfgConfig60Enterprise_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger",
    engineConfig: undefined,
  };
}

export const MongoCfgConfig60Enterprise_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger" as const,

  encode(message: MongoCfgConfig60Enterprise_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60Enterprise_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60Enterprise_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig60Enterprise_Storage_WiredTiger {
    return {
      $type: MongoCfgConfig60Enterprise_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60Enterprise_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig60Enterprise_Storage_WiredTiger>,
  ): MongoCfgConfig60Enterprise_Storage_WiredTiger {
    return MongoCfgConfig60Enterprise_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig60Enterprise_Storage_WiredTiger>,
  ): MongoCfgConfig60Enterprise_Storage_WiredTiger {
    const message = createBaseMongoCfgConfig60Enterprise_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig60Enterprise_Storage_WiredTiger.$type,
  MongoCfgConfig60Enterprise_Storage_WiredTiger,
);

function createBaseMongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig(): MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig {
    return MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig.$type,
  MongoCfgConfig60Enterprise_Storage_WiredTiger_EngineConfig,
);

function createBaseMongoCfgConfig60Enterprise_OperationProfiling(): MongoCfgConfig60Enterprise_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongoCfgConfig60Enterprise_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.OperationProfiling" as const,

  encode(message: MongoCfgConfig60Enterprise_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60Enterprise_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60Enterprise_OperationProfiling();
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

  fromJSON(object: any): MongoCfgConfig60Enterprise_OperationProfiling {
    return {
      $type: MongoCfgConfig60Enterprise_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongoCfgConfig60Enterprise_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60Enterprise_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongoCfgConfig60Enterprise_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig60Enterprise_OperationProfiling>,
  ): MongoCfgConfig60Enterprise_OperationProfiling {
    return MongoCfgConfig60Enterprise_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig60Enterprise_OperationProfiling>,
  ): MongoCfgConfig60Enterprise_OperationProfiling {
    const message = createBaseMongoCfgConfig60Enterprise_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig60Enterprise_OperationProfiling.$type,
  MongoCfgConfig60Enterprise_OperationProfiling,
);

function createBaseMongoCfgConfig60Enterprise_Network(): MongoCfgConfig60Enterprise_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Network",
    maxIncomingConnections: undefined,
  };
}

export const MongoCfgConfig60Enterprise_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Network" as const,

  encode(message: MongoCfgConfig60Enterprise_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig60Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig60Enterprise_Network();
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

  fromJSON(object: any): MongoCfgConfig60Enterprise_Network {
    return {
      $type: MongoCfgConfig60Enterprise_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig60Enterprise_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig60Enterprise_Network>): MongoCfgConfig60Enterprise_Network {
    return MongoCfgConfig60Enterprise_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig60Enterprise_Network>): MongoCfgConfig60Enterprise_Network {
    const message = createBaseMongoCfgConfig60Enterprise_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig60Enterprise_Network.$type, MongoCfgConfig60Enterprise_Network);

function createBaseMongosConfig60Enterprise(): MongosConfig60Enterprise {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise", net: undefined };
}

export const MongosConfig60Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise" as const,

  encode(message: MongosConfig60Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.net !== undefined) {
      MongosConfig60Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig60Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig60Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongosConfig60Enterprise_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig60Enterprise {
    return {
      $type: MongosConfig60Enterprise.$type,
      net: isSet(object.net) ? MongosConfig60Enterprise_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongosConfig60Enterprise): unknown {
    const obj: any = {};
    if (message.net !== undefined) {
      obj.net = MongosConfig60Enterprise_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig60Enterprise>): MongosConfig60Enterprise {
    return MongosConfig60Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig60Enterprise>): MongosConfig60Enterprise {
    const message = createBaseMongosConfig60Enterprise();
    message.net = (object.net !== undefined && object.net !== null)
      ? MongosConfig60Enterprise_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig60Enterprise.$type, MongosConfig60Enterprise);

function createBaseMongosConfig60Enterprise_Network(): MongosConfig60Enterprise_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise.Network",
    maxIncomingConnections: undefined,
  };
}

export const MongosConfig60Enterprise_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise.Network" as const,

  encode(message: MongosConfig60Enterprise_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig60Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig60Enterprise_Network();
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

  fromJSON(object: any): MongosConfig60Enterprise_Network {
    return {
      $type: MongosConfig60Enterprise_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongosConfig60Enterprise_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig60Enterprise_Network>): MongosConfig60Enterprise_Network {
    return MongosConfig60Enterprise_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig60Enterprise_Network>): MongosConfig60Enterprise_Network {
    const message = createBaseMongosConfig60Enterprise_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig60Enterprise_Network.$type, MongosConfig60Enterprise_Network);

function createBaseMongodConfigSet60Enterprise(): MongodConfigSet60Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0_enterprise",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongodConfigSet60Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0_enterprise" as const,

  encode(message: MongodConfigSet60Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongodConfig60Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongodConfig60Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongodConfig60Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfigSet60Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfigSet60Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongodConfig60Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongodConfig60Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongodConfig60Enterprise.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfigSet60Enterprise {
    return {
      $type: MongodConfigSet60Enterprise.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? MongodConfig60Enterprise.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? MongodConfig60Enterprise.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongodConfig60Enterprise.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongodConfigSet60Enterprise): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongodConfig60Enterprise.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongodConfig60Enterprise.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongodConfig60Enterprise.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfigSet60Enterprise>): MongodConfigSet60Enterprise {
    return MongodConfigSet60Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfigSet60Enterprise>): MongodConfigSet60Enterprise {
    const message = createBaseMongodConfigSet60Enterprise();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongodConfig60Enterprise.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongodConfig60Enterprise.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongodConfig60Enterprise.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfigSet60Enterprise.$type, MongodConfigSet60Enterprise);

function createBaseMongoCfgConfigSet60Enterprise(): MongoCfgConfigSet60Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0_enterprise",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongoCfgConfigSet60Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0_enterprise" as const,

  encode(message: MongoCfgConfigSet60Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongoCfgConfig60Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongoCfgConfig60Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongoCfgConfig60Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfigSet60Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfigSet60Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongoCfgConfig60Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongoCfgConfig60Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongoCfgConfig60Enterprise.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfigSet60Enterprise {
    return {
      $type: MongoCfgConfigSet60Enterprise.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? MongoCfgConfig60Enterprise.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? MongoCfgConfig60Enterprise.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig)
        ? MongoCfgConfig60Enterprise.fromJSON(object.defaultConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfigSet60Enterprise): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongoCfgConfig60Enterprise.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongoCfgConfig60Enterprise.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongoCfgConfig60Enterprise.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfigSet60Enterprise>): MongoCfgConfigSet60Enterprise {
    return MongoCfgConfigSet60Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfigSet60Enterprise>): MongoCfgConfigSet60Enterprise {
    const message = createBaseMongoCfgConfigSet60Enterprise();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongoCfgConfig60Enterprise.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongoCfgConfig60Enterprise.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongoCfgConfig60Enterprise.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfigSet60Enterprise.$type, MongoCfgConfigSet60Enterprise);

function createBaseMongosConfigSet60Enterprise(): MongosConfigSet60Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0_enterprise",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongosConfigSet60Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0_enterprise" as const,

  encode(message: MongosConfigSet60Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongosConfig60Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongosConfig60Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongosConfig60Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfigSet60Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfigSet60Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongosConfig60Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongosConfig60Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongosConfig60Enterprise.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfigSet60Enterprise {
    return {
      $type: MongosConfigSet60Enterprise.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? MongosConfig60Enterprise.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? MongosConfig60Enterprise.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongosConfig60Enterprise.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongosConfigSet60Enterprise): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongosConfig60Enterprise.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongosConfig60Enterprise.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongosConfig60Enterprise.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfigSet60Enterprise>): MongosConfigSet60Enterprise {
    return MongosConfigSet60Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfigSet60Enterprise>): MongosConfigSet60Enterprise {
    const message = createBaseMongosConfigSet60Enterprise();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongosConfig60Enterprise.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongosConfig60Enterprise.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongosConfig60Enterprise.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfigSet60Enterprise.$type, MongosConfigSet60Enterprise);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
