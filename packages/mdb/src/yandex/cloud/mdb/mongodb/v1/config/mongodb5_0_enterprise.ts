/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/).
 */
export interface MongodConfig50Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise";
  /** `storage` section of mongod configuration. */
  storage?:
    | MongodConfig50Enterprise_Storage
    | undefined;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?:
    | MongodConfig50Enterprise_OperationProfiling
    | undefined;
  /** `net` section of mongod configuration. */
  net?:
    | MongodConfig50Enterprise_Network
    | undefined;
  /** `security` section of mongod configuration. */
  security?:
    | MongodConfig50Enterprise_Security
    | undefined;
  /** `AuditLog` section of mongod configuration. */
  auditLog?:
    | MongodConfig50Enterprise_AuditLog
    | undefined;
  /** `SetParameter` section of mongod configuration. */
  setParameter?: MongodConfig50Enterprise_SetParameter | undefined;
}

export interface MongodConfig50Enterprise_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?:
    | MongodConfig50Enterprise_Storage_WiredTiger
    | undefined;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v5.0/reference/glossary/#term-journal). */
  journal?: MongodConfig50Enterprise_Storage_Journal | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongodConfig50Enterprise_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?:
    | MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig
    | undefined;
  /** Collection configuration for WiredTiger. */
  collectionConfig?: MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig | undefined;
}

export interface MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
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

export function mongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any,
): MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case 4:
    case "ZSTD":
      return MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
  switch (object) {
    case MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig50Enterprise_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number | undefined;
}

export interface MongodConfig50Enterprise_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongodConfig50Enterprise_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode.
   */
  slowOpThreshold?: number | undefined;
}

export enum MongodConfig50Enterprise_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig50Enterprise_OperationProfiling_ModeFromJSON(
  object: any,
): MongodConfig50Enterprise_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongodConfig50Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongodConfig50Enterprise_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongodConfig50Enterprise_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongodConfig50Enterprise_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig50Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodConfig50Enterprise_OperationProfiling_ModeToJSON(
  object: MongodConfig50Enterprise_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongodConfig50Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongodConfig50Enterprise_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongodConfig50Enterprise_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongodConfig50Enterprise_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongodConfig50Enterprise_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig50Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongodConfig50Enterprise_Security {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Security";
  /** If encryption at rest should be enabled or not */
  enableEncryption?:
    | boolean
    | undefined;
  /** `kmip` section of mongod security config */
  kmip?: MongodConfig50Enterprise_Security_KMIP | undefined;
}

export interface MongodConfig50Enterprise_Security_KMIP {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Security.KMIP";
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

export interface MongodConfig50Enterprise_AuditLog {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.AuditLog";
  /** Audit filter */
  filter: string;
  /** Allows runtime configuration of audit filter and auditAuthorizationSuccess */
  runtimeConfiguration?: boolean | undefined;
}

export interface MongodConfig50Enterprise_SetParameter {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.SetParameter";
  /** Enables the auditing of authorization successes */
  auditAuthorizationSuccess?: boolean | undefined;
}

export interface MongoCfgConfig50Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise";
  /** `storage` section of mongocfg configuration. */
  storage?:
    | MongoCfgConfig50Enterprise_Storage
    | undefined;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?:
    | MongoCfgConfig50Enterprise_OperationProfiling
    | undefined;
  /** `net` section of mongocfg configuration. */
  net?: MongoCfgConfig50Enterprise_Network | undefined;
}

export interface MongoCfgConfig50Enterprise_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: MongoCfgConfig50Enterprise_Storage_WiredTiger | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongoCfgConfig50Enterprise_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig | undefined;
}

export interface MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongoCfgConfig50Enterprise_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongoCfgConfig50Enterprise_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number | undefined;
}

export enum MongoCfgConfig50Enterprise_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongoCfgConfig50Enterprise_OperationProfiling_ModeFromJSON(
  object: any,
): MongoCfgConfig50Enterprise_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongoCfgConfig50Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongoCfgConfig50Enterprise_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongoCfgConfig50Enterprise_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongoCfgConfig50Enterprise_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongoCfgConfig50Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongoCfgConfig50Enterprise_OperationProfiling_ModeToJSON(
  object: MongoCfgConfig50Enterprise_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongoCfgConfig50Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongoCfgConfig50Enterprise_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongoCfgConfig50Enterprise_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongoCfgConfig50Enterprise_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongoCfgConfig50Enterprise_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongoCfgConfig50Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongosConfig50Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise";
  /** Network settings for mongos. */
  net?: MongosConfig50Enterprise_Network | undefined;
}

export interface MongosConfig50Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongodConfigSet50Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0_enterprise";
  /**
   * Effective mongod settings for a MongoDB 5.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongodConfig50Enterprise
    | undefined;
  /** User-defined mongod settings for a MongoDB 5.0 cluster. */
  userConfig?:
    | MongodConfig50Enterprise
    | undefined;
  /** Default mongod configuration for a MongoDB 5.0 cluster. */
  defaultConfig?: MongodConfig50Enterprise | undefined;
}

export interface MongoCfgConfigSet50Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0_enterprise";
  /**
   * Effective mongocfg settings for a MongoDB 5.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongoCfgConfig50Enterprise
    | undefined;
  /** User-defined mongocfg settings for a MongoDB 5.0 cluster. */
  userConfig?:
    | MongoCfgConfig50Enterprise
    | undefined;
  /** Default mongocfg configuration for a MongoDB 5.0 cluster. */
  defaultConfig?: MongoCfgConfig50Enterprise | undefined;
}

export interface MongosConfigSet50Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0_enterprise";
  /**
   * Effective mongos settings for a MongoDB 5.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongosConfig50Enterprise
    | undefined;
  /** User-defined mongos settings for a MongoDB 5.0 cluster. */
  userConfig?:
    | MongosConfig50Enterprise
    | undefined;
  /** Default mongos configuration for a MongoDB 5.0 cluster. */
  defaultConfig?: MongosConfig50Enterprise | undefined;
}

function createBaseMongodConfig50Enterprise(): MongodConfig50Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
    security: undefined,
    auditLog: undefined,
    setParameter: undefined,
  };
}

export const MongodConfig50Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise" as const,

  encode(message: MongodConfig50Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongodConfig50Enterprise_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongodConfig50Enterprise_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongodConfig50Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    if (message.security !== undefined) {
      MongodConfig50Enterprise_Security.encode(message.security, writer.uint32(34).fork()).ldelim();
    }
    if (message.auditLog !== undefined) {
      MongodConfig50Enterprise_AuditLog.encode(message.auditLog, writer.uint32(42).fork()).ldelim();
    }
    if (message.setParameter !== undefined) {
      MongodConfig50Enterprise_SetParameter.encode(message.setParameter, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongodConfig50Enterprise_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongodConfig50Enterprise_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongodConfig50Enterprise_Network.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.security = MongodConfig50Enterprise_Security.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.auditLog = MongodConfig50Enterprise_AuditLog.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setParameter = MongodConfig50Enterprise_SetParameter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig50Enterprise {
    return {
      $type: MongodConfig50Enterprise.$type,
      storage: isSet(object.storage) ? MongodConfig50Enterprise_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongodConfig50Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongodConfig50Enterprise_Network.fromJSON(object.net) : undefined,
      security: isSet(object.security) ? MongodConfig50Enterprise_Security.fromJSON(object.security) : undefined,
      auditLog: isSet(object.auditLog) ? MongodConfig50Enterprise_AuditLog.fromJSON(object.auditLog) : undefined,
      setParameter: isSet(object.setParameter)
        ? MongodConfig50Enterprise_SetParameter.fromJSON(object.setParameter)
        : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongodConfig50Enterprise_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongodConfig50Enterprise_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongodConfig50Enterprise_Network.toJSON(message.net);
    }
    if (message.security !== undefined) {
      obj.security = MongodConfig50Enterprise_Security.toJSON(message.security);
    }
    if (message.auditLog !== undefined) {
      obj.auditLog = MongodConfig50Enterprise_AuditLog.toJSON(message.auditLog);
    }
    if (message.setParameter !== undefined) {
      obj.setParameter = MongodConfig50Enterprise_SetParameter.toJSON(message.setParameter);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50Enterprise>): MongodConfig50Enterprise {
    return MongodConfig50Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50Enterprise>): MongodConfig50Enterprise {
    const message = createBaseMongodConfig50Enterprise();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongodConfig50Enterprise_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongodConfig50Enterprise_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongodConfig50Enterprise_Network.fromPartial(object.net)
      : undefined;
    message.security = (object.security !== undefined && object.security !== null)
      ? MongodConfig50Enterprise_Security.fromPartial(object.security)
      : undefined;
    message.auditLog = (object.auditLog !== undefined && object.auditLog !== null)
      ? MongodConfig50Enterprise_AuditLog.fromPartial(object.auditLog)
      : undefined;
    message.setParameter = (object.setParameter !== undefined && object.setParameter !== null)
      ? MongodConfig50Enterprise_SetParameter.fromPartial(object.setParameter)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise.$type, MongodConfig50Enterprise);

function createBaseMongodConfig50Enterprise_Storage(): MongodConfig50Enterprise_Storage {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage",
    wiredTiger: undefined,
    journal: undefined,
  };
}

export const MongodConfig50Enterprise_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage" as const,

  encode(message: MongodConfig50Enterprise_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongodConfig50Enterprise_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    if (message.journal !== undefined) {
      MongodConfig50Enterprise_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongodConfig50Enterprise_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.journal = MongodConfig50Enterprise_Storage_Journal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig50Enterprise_Storage {
    return {
      $type: MongodConfig50Enterprise_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongodConfig50Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
      journal: isSet(object.journal) ? MongodConfig50Enterprise_Storage_Journal.fromJSON(object.journal) : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongodConfig50Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    if (message.journal !== undefined) {
      obj.journal = MongodConfig50Enterprise_Storage_Journal.toJSON(message.journal);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50Enterprise_Storage>): MongodConfig50Enterprise_Storage {
    return MongodConfig50Enterprise_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50Enterprise_Storage>): MongodConfig50Enterprise_Storage {
    const message = createBaseMongodConfig50Enterprise_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongodConfig50Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    message.journal = (object.journal !== undefined && object.journal !== null)
      ? MongodConfig50Enterprise_Storage_Journal.fromPartial(object.journal)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise_Storage.$type, MongodConfig50Enterprise_Storage);

function createBaseMongodConfig50Enterprise_Storage_WiredTiger(): MongodConfig50Enterprise_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.WiredTiger",
    engineConfig: undefined,
    collectionConfig: undefined,
  };
}

export const MongodConfig50Enterprise_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.WiredTiger" as const,

  encode(message: MongodConfig50Enterprise_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.collectionConfig !== undefined) {
      MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig.encode(
        message.collectionConfig,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collectionConfig = MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig.decode(
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

  fromJSON(object: any): MongodConfig50Enterprise_Storage_WiredTiger {
    return {
      $type: MongodConfig50Enterprise_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
      collectionConfig: isSet(object.collectionConfig)
        ? MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
        : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    if (message.collectionConfig !== undefined) {
      obj.collectionConfig = MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig.toJSON(
        message.collectionConfig,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50Enterprise_Storage_WiredTiger>): MongodConfig50Enterprise_Storage_WiredTiger {
    return MongodConfig50Enterprise_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig50Enterprise_Storage_WiredTiger>,
  ): MongodConfig50Enterprise_Storage_WiredTiger {
    const message = createBaseMongodConfig50Enterprise_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    message.collectionConfig = (object.collectionConfig !== undefined && object.collectionConfig !== null)
      ? MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise_Storage_WiredTiger.$type, MongodConfig50Enterprise_Storage_WiredTiger);

function createBaseMongodConfig50Enterprise_Storage_WiredTiger_EngineConfig(): MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig {
    return MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongodConfig50Enterprise_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig.$type,
  MongodConfig50Enterprise_Storage_WiredTiger_EngineConfig,
);

function createBaseMongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig(): MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
  };
}

export const MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig,
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
  ): MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig();
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

  fromJSON(object: any): MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig {
    return {
      $type: MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig.$type,
      blockCompressor: isSet(object.blockCompressor)
        ? mongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
        : 0,
    };
  },

  toJSON(message: MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    if (message.blockCompressor !== 0) {
      obj.blockCompressor = mongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
        message.blockCompressor,
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig {
    return MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig {
    const message = createBaseMongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig();
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig.$type,
  MongodConfig50Enterprise_Storage_WiredTiger_CollectionConfig,
);

function createBaseMongodConfig50Enterprise_Storage_Journal(): MongodConfig50Enterprise_Storage_Journal {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.Journal",
    commitInterval: undefined,
  };
}

export const MongodConfig50Enterprise_Storage_Journal = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Storage.Journal" as const,

  encode(message: MongodConfig50Enterprise_Storage_Journal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_Storage_Journal();
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

  fromJSON(object: any): MongodConfig50Enterprise_Storage_Journal {
    return {
      $type: MongodConfig50Enterprise_Storage_Journal.$type,
      commitInterval: isSet(object.commitInterval) ? Number(object.commitInterval) : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise_Storage_Journal): unknown {
    const obj: any = {};
    if (message.commitInterval !== undefined) {
      obj.commitInterval = message.commitInterval;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50Enterprise_Storage_Journal>): MongodConfig50Enterprise_Storage_Journal {
    return MongodConfig50Enterprise_Storage_Journal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50Enterprise_Storage_Journal>): MongodConfig50Enterprise_Storage_Journal {
    const message = createBaseMongodConfig50Enterprise_Storage_Journal();
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise_Storage_Journal.$type, MongodConfig50Enterprise_Storage_Journal);

function createBaseMongodConfig50Enterprise_OperationProfiling(): MongodConfig50Enterprise_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongodConfig50Enterprise_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.OperationProfiling" as const,

  encode(message: MongodConfig50Enterprise_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_OperationProfiling();
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

  fromJSON(object: any): MongodConfig50Enterprise_OperationProfiling {
    return {
      $type: MongodConfig50Enterprise_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongodConfig50Enterprise_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongodConfig50Enterprise_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50Enterprise_OperationProfiling>): MongodConfig50Enterprise_OperationProfiling {
    return MongodConfig50Enterprise_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig50Enterprise_OperationProfiling>,
  ): MongodConfig50Enterprise_OperationProfiling {
    const message = createBaseMongodConfig50Enterprise_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise_OperationProfiling.$type, MongodConfig50Enterprise_OperationProfiling);

function createBaseMongodConfig50Enterprise_Network(): MongodConfig50Enterprise_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Network",
    maxIncomingConnections: undefined,
  };
}

export const MongodConfig50Enterprise_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Network" as const,

  encode(message: MongodConfig50Enterprise_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_Network();
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

  fromJSON(object: any): MongodConfig50Enterprise_Network {
    return {
      $type: MongodConfig50Enterprise_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50Enterprise_Network>): MongodConfig50Enterprise_Network {
    return MongodConfig50Enterprise_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50Enterprise_Network>): MongodConfig50Enterprise_Network {
    const message = createBaseMongodConfig50Enterprise_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise_Network.$type, MongodConfig50Enterprise_Network);

function createBaseMongodConfig50Enterprise_Security(): MongodConfig50Enterprise_Security {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Security",
    enableEncryption: undefined,
    kmip: undefined,
  };
}

export const MongodConfig50Enterprise_Security = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Security" as const,

  encode(message: MongodConfig50Enterprise_Security, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableEncryption !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableEncryption! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.kmip !== undefined) {
      MongodConfig50Enterprise_Security_KMIP.encode(message.kmip, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_Security {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_Security();
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

          message.kmip = MongodConfig50Enterprise_Security_KMIP.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig50Enterprise_Security {
    return {
      $type: MongodConfig50Enterprise_Security.$type,
      enableEncryption: isSet(object.enableEncryption) ? Boolean(object.enableEncryption) : undefined,
      kmip: isSet(object.kmip) ? MongodConfig50Enterprise_Security_KMIP.fromJSON(object.kmip) : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise_Security): unknown {
    const obj: any = {};
    if (message.enableEncryption !== undefined) {
      obj.enableEncryption = message.enableEncryption;
    }
    if (message.kmip !== undefined) {
      obj.kmip = MongodConfig50Enterprise_Security_KMIP.toJSON(message.kmip);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50Enterprise_Security>): MongodConfig50Enterprise_Security {
    return MongodConfig50Enterprise_Security.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50Enterprise_Security>): MongodConfig50Enterprise_Security {
    const message = createBaseMongodConfig50Enterprise_Security();
    message.enableEncryption = object.enableEncryption ?? undefined;
    message.kmip = (object.kmip !== undefined && object.kmip !== null)
      ? MongodConfig50Enterprise_Security_KMIP.fromPartial(object.kmip)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise_Security.$type, MongodConfig50Enterprise_Security);

function createBaseMongodConfig50Enterprise_Security_KMIP(): MongodConfig50Enterprise_Security_KMIP {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Security.KMIP",
    serverName: "",
    port: undefined,
    serverCa: "",
    clientCertificate: "",
    keyIdentifier: "",
  };
}

export const MongodConfig50Enterprise_Security_KMIP = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.Security.KMIP" as const,

  encode(message: MongodConfig50Enterprise_Security_KMIP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_Security_KMIP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_Security_KMIP();
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

  fromJSON(object: any): MongodConfig50Enterprise_Security_KMIP {
    return {
      $type: MongodConfig50Enterprise_Security_KMIP.$type,
      serverName: isSet(object.serverName) ? globalThis.String(object.serverName) : "",
      port: isSet(object.port) ? Number(object.port) : undefined,
      serverCa: isSet(object.serverCa) ? globalThis.String(object.serverCa) : "",
      clientCertificate: isSet(object.clientCertificate) ? globalThis.String(object.clientCertificate) : "",
      keyIdentifier: isSet(object.keyIdentifier) ? globalThis.String(object.keyIdentifier) : "",
    };
  },

  toJSON(message: MongodConfig50Enterprise_Security_KMIP): unknown {
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

  create(base?: DeepPartial<MongodConfig50Enterprise_Security_KMIP>): MongodConfig50Enterprise_Security_KMIP {
    return MongodConfig50Enterprise_Security_KMIP.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50Enterprise_Security_KMIP>): MongodConfig50Enterprise_Security_KMIP {
    const message = createBaseMongodConfig50Enterprise_Security_KMIP();
    message.serverName = object.serverName ?? "";
    message.port = object.port ?? undefined;
    message.serverCa = object.serverCa ?? "";
    message.clientCertificate = object.clientCertificate ?? "";
    message.keyIdentifier = object.keyIdentifier ?? "";
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise_Security_KMIP.$type, MongodConfig50Enterprise_Security_KMIP);

function createBaseMongodConfig50Enterprise_AuditLog(): MongodConfig50Enterprise_AuditLog {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.AuditLog",
    filter: "",
    runtimeConfiguration: undefined,
  };
}

export const MongodConfig50Enterprise_AuditLog = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.AuditLog" as const,

  encode(message: MongodConfig50Enterprise_AuditLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_AuditLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_AuditLog();
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

  fromJSON(object: any): MongodConfig50Enterprise_AuditLog {
    return {
      $type: MongodConfig50Enterprise_AuditLog.$type,
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      runtimeConfiguration: isSet(object.runtimeConfiguration) ? Boolean(object.runtimeConfiguration) : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise_AuditLog): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.runtimeConfiguration !== undefined) {
      obj.runtimeConfiguration = message.runtimeConfiguration;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50Enterprise_AuditLog>): MongodConfig50Enterprise_AuditLog {
    return MongodConfig50Enterprise_AuditLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50Enterprise_AuditLog>): MongodConfig50Enterprise_AuditLog {
    const message = createBaseMongodConfig50Enterprise_AuditLog();
    message.filter = object.filter ?? "";
    message.runtimeConfiguration = object.runtimeConfiguration ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise_AuditLog.$type, MongodConfig50Enterprise_AuditLog);

function createBaseMongodConfig50Enterprise_SetParameter(): MongodConfig50Enterprise_SetParameter {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.SetParameter",
    auditAuthorizationSuccess: undefined,
  };
}

export const MongodConfig50Enterprise_SetParameter = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise.SetParameter" as const,

  encode(message: MongodConfig50Enterprise_SetParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditAuthorizationSuccess !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.auditAuthorizationSuccess! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig50Enterprise_SetParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig50Enterprise_SetParameter();
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

  fromJSON(object: any): MongodConfig50Enterprise_SetParameter {
    return {
      $type: MongodConfig50Enterprise_SetParameter.$type,
      auditAuthorizationSuccess: isSet(object.auditAuthorizationSuccess)
        ? Boolean(object.auditAuthorizationSuccess)
        : undefined,
    };
  },

  toJSON(message: MongodConfig50Enterprise_SetParameter): unknown {
    const obj: any = {};
    if (message.auditAuthorizationSuccess !== undefined) {
      obj.auditAuthorizationSuccess = message.auditAuthorizationSuccess;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig50Enterprise_SetParameter>): MongodConfig50Enterprise_SetParameter {
    return MongodConfig50Enterprise_SetParameter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig50Enterprise_SetParameter>): MongodConfig50Enterprise_SetParameter {
    const message = createBaseMongodConfig50Enterprise_SetParameter();
    message.auditAuthorizationSuccess = object.auditAuthorizationSuccess ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig50Enterprise_SetParameter.$type, MongodConfig50Enterprise_SetParameter);

function createBaseMongoCfgConfig50Enterprise(): MongoCfgConfig50Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongoCfgConfig50Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise" as const,

  encode(message: MongoCfgConfig50Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongoCfgConfig50Enterprise_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongoCfgConfig50Enterprise_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.net !== undefined) {
      MongoCfgConfig50Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongoCfgConfig50Enterprise_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongoCfgConfig50Enterprise_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongoCfgConfig50Enterprise_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig50Enterprise {
    return {
      $type: MongoCfgConfig50Enterprise.$type,
      storage: isSet(object.storage) ? MongoCfgConfig50Enterprise_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongoCfgConfig50Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongoCfgConfig50Enterprise_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50Enterprise): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongoCfgConfig50Enterprise_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongoCfgConfig50Enterprise_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongoCfgConfig50Enterprise_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig50Enterprise>): MongoCfgConfig50Enterprise {
    return MongoCfgConfig50Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig50Enterprise>): MongoCfgConfig50Enterprise {
    const message = createBaseMongoCfgConfig50Enterprise();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongoCfgConfig50Enterprise_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongoCfgConfig50Enterprise_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongoCfgConfig50Enterprise_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig50Enterprise.$type, MongoCfgConfig50Enterprise);

function createBaseMongoCfgConfig50Enterprise_Storage(): MongoCfgConfig50Enterprise_Storage {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Storage", wiredTiger: undefined };
}

export const MongoCfgConfig50Enterprise_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Storage" as const,

  encode(message: MongoCfgConfig50Enterprise_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongoCfgConfig50Enterprise_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50Enterprise_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50Enterprise_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongoCfgConfig50Enterprise_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig50Enterprise_Storage {
    return {
      $type: MongoCfgConfig50Enterprise_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongoCfgConfig50Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50Enterprise_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongoCfgConfig50Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig50Enterprise_Storage>): MongoCfgConfig50Enterprise_Storage {
    return MongoCfgConfig50Enterprise_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig50Enterprise_Storage>): MongoCfgConfig50Enterprise_Storage {
    const message = createBaseMongoCfgConfig50Enterprise_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongoCfgConfig50Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig50Enterprise_Storage.$type, MongoCfgConfig50Enterprise_Storage);

function createBaseMongoCfgConfig50Enterprise_Storage_WiredTiger(): MongoCfgConfig50Enterprise_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Storage.WiredTiger",
    engineConfig: undefined,
  };
}

export const MongoCfgConfig50Enterprise_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Storage.WiredTiger" as const,

  encode(message: MongoCfgConfig50Enterprise_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50Enterprise_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50Enterprise_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig.decode(
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

  fromJSON(object: any): MongoCfgConfig50Enterprise_Storage_WiredTiger {
    return {
      $type: MongoCfgConfig50Enterprise_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50Enterprise_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig50Enterprise_Storage_WiredTiger>,
  ): MongoCfgConfig50Enterprise_Storage_WiredTiger {
    return MongoCfgConfig50Enterprise_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig50Enterprise_Storage_WiredTiger>,
  ): MongoCfgConfig50Enterprise_Storage_WiredTiger {
    const message = createBaseMongoCfgConfig50Enterprise_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig50Enterprise_Storage_WiredTiger.$type,
  MongoCfgConfig50Enterprise_Storage_WiredTiger,
);

function createBaseMongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig(): MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig {
    return MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig.$type,
  MongoCfgConfig50Enterprise_Storage_WiredTiger_EngineConfig,
);

function createBaseMongoCfgConfig50Enterprise_OperationProfiling(): MongoCfgConfig50Enterprise_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongoCfgConfig50Enterprise_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.OperationProfiling" as const,

  encode(message: MongoCfgConfig50Enterprise_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50Enterprise_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50Enterprise_OperationProfiling();
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

  fromJSON(object: any): MongoCfgConfig50Enterprise_OperationProfiling {
    return {
      $type: MongoCfgConfig50Enterprise_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongoCfgConfig50Enterprise_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50Enterprise_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongoCfgConfig50Enterprise_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig50Enterprise_OperationProfiling>,
  ): MongoCfgConfig50Enterprise_OperationProfiling {
    return MongoCfgConfig50Enterprise_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig50Enterprise_OperationProfiling>,
  ): MongoCfgConfig50Enterprise_OperationProfiling {
    const message = createBaseMongoCfgConfig50Enterprise_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig50Enterprise_OperationProfiling.$type,
  MongoCfgConfig50Enterprise_OperationProfiling,
);

function createBaseMongoCfgConfig50Enterprise_Network(): MongoCfgConfig50Enterprise_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Network",
    maxIncomingConnections: undefined,
  };
}

export const MongoCfgConfig50Enterprise_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise.Network" as const,

  encode(message: MongoCfgConfig50Enterprise_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig50Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig50Enterprise_Network();
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

  fromJSON(object: any): MongoCfgConfig50Enterprise_Network {
    return {
      $type: MongoCfgConfig50Enterprise_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig50Enterprise_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig50Enterprise_Network>): MongoCfgConfig50Enterprise_Network {
    return MongoCfgConfig50Enterprise_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig50Enterprise_Network>): MongoCfgConfig50Enterprise_Network {
    const message = createBaseMongoCfgConfig50Enterprise_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig50Enterprise_Network.$type, MongoCfgConfig50Enterprise_Network);

function createBaseMongosConfig50Enterprise(): MongosConfig50Enterprise {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise", net: undefined };
}

export const MongosConfig50Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise" as const,

  encode(message: MongosConfig50Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.net !== undefined) {
      MongosConfig50Enterprise_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig50Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig50Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.net = MongosConfig50Enterprise_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig50Enterprise {
    return {
      $type: MongosConfig50Enterprise.$type,
      net: isSet(object.net) ? MongosConfig50Enterprise_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongosConfig50Enterprise): unknown {
    const obj: any = {};
    if (message.net !== undefined) {
      obj.net = MongosConfig50Enterprise_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig50Enterprise>): MongosConfig50Enterprise {
    return MongosConfig50Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig50Enterprise>): MongosConfig50Enterprise {
    const message = createBaseMongosConfig50Enterprise();
    message.net = (object.net !== undefined && object.net !== null)
      ? MongosConfig50Enterprise_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig50Enterprise.$type, MongosConfig50Enterprise);

function createBaseMongosConfig50Enterprise_Network(): MongosConfig50Enterprise_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise.Network",
    maxIncomingConnections: undefined,
  };
}

export const MongosConfig50Enterprise_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise.Network" as const,

  encode(message: MongosConfig50Enterprise_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig50Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig50Enterprise_Network();
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

  fromJSON(object: any): MongosConfig50Enterprise_Network {
    return {
      $type: MongosConfig50Enterprise_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongosConfig50Enterprise_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig50Enterprise_Network>): MongosConfig50Enterprise_Network {
    return MongosConfig50Enterprise_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig50Enterprise_Network>): MongosConfig50Enterprise_Network {
    const message = createBaseMongosConfig50Enterprise_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig50Enterprise_Network.$type, MongosConfig50Enterprise_Network);

function createBaseMongodConfigSet50Enterprise(): MongodConfigSet50Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0_enterprise",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongodConfigSet50Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0_enterprise" as const,

  encode(message: MongodConfigSet50Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongodConfig50Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongodConfig50Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongodConfig50Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfigSet50Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfigSet50Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongodConfig50Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongodConfig50Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongodConfig50Enterprise.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfigSet50Enterprise {
    return {
      $type: MongodConfigSet50Enterprise.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? MongodConfig50Enterprise.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? MongodConfig50Enterprise.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongodConfig50Enterprise.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongodConfigSet50Enterprise): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongodConfig50Enterprise.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongodConfig50Enterprise.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongodConfig50Enterprise.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfigSet50Enterprise>): MongodConfigSet50Enterprise {
    return MongodConfigSet50Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfigSet50Enterprise>): MongodConfigSet50Enterprise {
    const message = createBaseMongodConfigSet50Enterprise();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongodConfig50Enterprise.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongodConfig50Enterprise.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongodConfig50Enterprise.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfigSet50Enterprise.$type, MongodConfigSet50Enterprise);

function createBaseMongoCfgConfigSet50Enterprise(): MongoCfgConfigSet50Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0_enterprise",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongoCfgConfigSet50Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0_enterprise" as const,

  encode(message: MongoCfgConfigSet50Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongoCfgConfig50Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongoCfgConfig50Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongoCfgConfig50Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfigSet50Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfigSet50Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongoCfgConfig50Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongoCfgConfig50Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongoCfgConfig50Enterprise.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfigSet50Enterprise {
    return {
      $type: MongoCfgConfigSet50Enterprise.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? MongoCfgConfig50Enterprise.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? MongoCfgConfig50Enterprise.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig)
        ? MongoCfgConfig50Enterprise.fromJSON(object.defaultConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfigSet50Enterprise): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongoCfgConfig50Enterprise.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongoCfgConfig50Enterprise.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongoCfgConfig50Enterprise.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfigSet50Enterprise>): MongoCfgConfigSet50Enterprise {
    return MongoCfgConfigSet50Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfigSet50Enterprise>): MongoCfgConfigSet50Enterprise {
    const message = createBaseMongoCfgConfigSet50Enterprise();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongoCfgConfig50Enterprise.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongoCfgConfig50Enterprise.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongoCfgConfig50Enterprise.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfigSet50Enterprise.$type, MongoCfgConfigSet50Enterprise);

function createBaseMongosConfigSet50Enterprise(): MongosConfigSet50Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0_enterprise",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongosConfigSet50Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0_enterprise" as const,

  encode(message: MongosConfigSet50Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongosConfig50Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongosConfig50Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongosConfig50Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfigSet50Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfigSet50Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongosConfig50Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongosConfig50Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongosConfig50Enterprise.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfigSet50Enterprise {
    return {
      $type: MongosConfigSet50Enterprise.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? MongosConfig50Enterprise.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? MongosConfig50Enterprise.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongosConfig50Enterprise.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongosConfigSet50Enterprise): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongosConfig50Enterprise.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongosConfig50Enterprise.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongosConfig50Enterprise.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfigSet50Enterprise>): MongosConfigSet50Enterprise {
    return MongosConfigSet50Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfigSet50Enterprise>): MongosConfigSet50Enterprise {
    const message = createBaseMongosConfigSet50Enterprise();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongosConfig50Enterprise.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongosConfig50Enterprise.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongosConfig50Enterprise.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfigSet50Enterprise.$type, MongosConfigSet50Enterprise);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
