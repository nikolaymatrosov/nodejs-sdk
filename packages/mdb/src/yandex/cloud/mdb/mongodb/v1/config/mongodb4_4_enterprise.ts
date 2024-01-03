/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/).
 */
export interface MongodConfig44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise";
  /** `storage` section of mongod configuration. */
  storage?:
    | MongodConfig44Enterprise_Storage
    | undefined;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?:
    | MongodConfig44Enterprise_OperationProfiling
    | undefined;
  /** `net` section of mongod configuration. */
  net?:
    | MongodConfig44Enterprise_Network
    | undefined;
  /** `security` section of mongod configuration. */
  security?:
    | MongodConfig44Enterprise_Security
    | undefined;
  /** `AuditLog` section of mongod configuration. */
  auditLog?:
    | MongodConfig44Enterprise_AuditLog
    | undefined;
  /** `SetParameter` section of mongod configuration. */
  setParameter?: MongodConfig44Enterprise_SetParameter | undefined;
}

export interface MongodConfig44Enterprise_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?:
    | MongodConfig44Enterprise_Storage_WiredTiger
    | undefined;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.4/reference/glossary/#term-journal). */
  journal?: MongodConfig44Enterprise_Storage_Journal | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongodConfig44Enterprise_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?:
    | MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig
    | undefined;
  /** Collection configuration for WiredTiger. */
  collectionConfig?:
    | MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig
    | undefined;
  /** Index configuration for WiredTiger */
  indexConfig?: MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig | undefined;
}

export interface MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
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

export function mongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any,
): MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case 4:
    case "ZSTD":
      return MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
  switch (object) {
    case MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.IndexConfig";
  /** Enables or disables [prefix compression](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-prefix-compression) */
  prefixCompression?: boolean | undefined;
}

export interface MongodConfig44Enterprise_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number | undefined;
}

export interface MongodConfig44Enterprise_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongodConfig44Enterprise_OperationProfiling_Mode;
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

export enum MongodConfig44Enterprise_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig44Enterprise_OperationProfiling_ModeFromJSON(
  object: any,
): MongodConfig44Enterprise_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongodConfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongodConfig44Enterprise_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongodConfig44Enterprise_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongodConfig44Enterprise_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig44Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodConfig44Enterprise_OperationProfiling_ModeToJSON(
  object: MongodConfig44Enterprise_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongodConfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongodConfig44Enterprise_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongodConfig44Enterprise_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongodConfig44Enterprise_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongodConfig44Enterprise_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig44Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?:
    | number
    | undefined;
  /** Compression settings */
  compression?: MongodConfig44Enterprise_Network_Compression | undefined;
}

export interface MongodConfig44Enterprise_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: MongodConfig44Enterprise_Network_Compression_Compressor[];
}

export enum MongodConfig44Enterprise_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  UNRECOGNIZED = -1,
}

export function mongodConfig44Enterprise_Network_Compression_CompressorFromJSON(
  object: any,
): MongodConfig44Enterprise_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongodConfig44Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return MongodConfig44Enterprise_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return MongodConfig44Enterprise_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return MongodConfig44Enterprise_Network_Compression_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongodConfig44Enterprise_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongodConfig44Enterprise_Network_Compression_CompressorToJSON(
  object: MongodConfig44Enterprise_Network_Compression_Compressor,
): string {
  switch (object) {
    case MongodConfig44Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongodConfig44Enterprise_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case MongodConfig44Enterprise_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case MongodConfig44Enterprise_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case MongodConfig44Enterprise_Network_Compression_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfig44Enterprise_Security {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security";
  /** If encryption at rest should be enabled or not */
  enableEncryption?:
    | boolean
    | undefined;
  /** `kmip` section of mongod security config */
  kmip?: MongodConfig44Enterprise_Security_KMIP | undefined;
}

export interface MongodConfig44Enterprise_Security_KMIP {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security.KMIP";
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

export interface MongodConfig44Enterprise_AuditLog {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.AuditLog";
  /** Audit filter */
  filter: string;
}

export interface MongodConfig44Enterprise_SetParameter {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.SetParameter";
  /** Enables the auditing of authorization successes */
  auditAuthorizationSuccess?:
    | boolean
    | undefined;
  /**
   * Enables or disables the mechanism that controls the rate at which the primary applies its writes with the
   * goal of keeping the secondary members [majority committed](https://www.mongodb.com/docs/v4.2/reference/command/replSetGetStatus/#replSetGetStatus.optimes.lastCommittedOpTime)
   * lag under a configurable maximum value.
   */
  enableFlowControl?: boolean | undefined;
}

export interface MongoCfgConfig44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise";
  /** `storage` section of mongocfg configuration. */
  storage?:
    | MongoCfgConfig44Enterprise_Storage
    | undefined;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?:
    | MongoCfgConfig44Enterprise_OperationProfiling
    | undefined;
  /** `net` section of mongocfg configuration. */
  net?: MongoCfgConfig44Enterprise_Network | undefined;
}

export interface MongoCfgConfig44Enterprise_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: MongoCfgConfig44Enterprise_Storage_WiredTiger | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface MongoCfgConfig44Enterprise_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig | undefined;
}

export interface MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number | undefined;
}

export interface MongoCfgConfig44Enterprise_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: MongoCfgConfig44Enterprise_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number | undefined;
}

export enum MongoCfgConfig44Enterprise_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongoCfgConfig44Enterprise_OperationProfiling_ModeFromJSON(
  object: any,
): MongoCfgConfig44Enterprise_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return MongoCfgConfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return MongoCfgConfig44Enterprise_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return MongoCfgConfig44Enterprise_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return MongoCfgConfig44Enterprise_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongoCfgConfig44Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongoCfgConfig44Enterprise_OperationProfiling_ModeToJSON(
  object: MongoCfgConfig44Enterprise_OperationProfiling_Mode,
): string {
  switch (object) {
    case MongoCfgConfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case MongoCfgConfig44Enterprise_OperationProfiling_Mode.OFF:
      return "OFF";
    case MongoCfgConfig44Enterprise_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case MongoCfgConfig44Enterprise_OperationProfiling_Mode.ALL:
      return "ALL";
    case MongoCfgConfig44Enterprise_OperationProfiling_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongoCfgConfig44Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number | undefined;
}

export interface MongosConfig44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise";
  /** Network settings for mongos. */
  net?: MongosConfig44Enterprise_Network | undefined;
}

export interface MongosConfig44Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?:
    | number
    | undefined;
  /** Compression settings */
  compression?: MongosConfig44Enterprise_Network_Compression | undefined;
}

export interface MongosConfig44Enterprise_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: MongosConfig44Enterprise_Network_Compression_Compressor[];
}

export enum MongosConfig44Enterprise_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  UNRECOGNIZED = -1,
}

export function mongosConfig44Enterprise_Network_Compression_CompressorFromJSON(
  object: any,
): MongosConfig44Enterprise_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return MongosConfig44Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return MongosConfig44Enterprise_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return MongosConfig44Enterprise_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return MongosConfig44Enterprise_Network_Compression_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MongosConfig44Enterprise_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongosConfig44Enterprise_Network_Compression_CompressorToJSON(
  object: MongosConfig44Enterprise_Network_Compression_Compressor,
): string {
  switch (object) {
    case MongosConfig44Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case MongosConfig44Enterprise_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case MongosConfig44Enterprise_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case MongosConfig44Enterprise_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case MongosConfig44Enterprise_Network_Compression_Compressor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MongodConfigSet44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise";
  /**
   * Effective mongod settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongodConfig44Enterprise
    | undefined;
  /** User-defined mongod settings for a MongoDB 4.4 cluster. */
  userConfig?:
    | MongodConfig44Enterprise
    | undefined;
  /** Default mongod configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: MongodConfig44Enterprise | undefined;
}

export interface MongoCfgConfigSet44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise";
  /**
   * Effective mongocfg settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongoCfgConfig44Enterprise
    | undefined;
  /** User-defined mongocfg settings for a MongoDB 4.4 cluster. */
  userConfig?:
    | MongoCfgConfig44Enterprise
    | undefined;
  /** Default mongocfg configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: MongoCfgConfig44Enterprise | undefined;
}

export interface MongosConfigSet44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise";
  /**
   * Effective mongos settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MongosConfig44Enterprise
    | undefined;
  /** User-defined mongos settings for a MongoDB 4.4 cluster. */
  userConfig?:
    | MongosConfig44Enterprise
    | undefined;
  /** Default mongos configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: MongosConfig44Enterprise | undefined;
}

function createBaseMongodConfig44Enterprise(): MongodConfig44Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
    security: undefined,
    auditLog: undefined,
    setParameter: undefined,
  };
}

export const MongodConfig44Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise" as const,

  encode(message: MongodConfig44Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongodConfig44Enterprise_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongodConfig44Enterprise_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
    }
    if (message.net !== undefined) {
      MongodConfig44Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    if (message.security !== undefined) {
      MongodConfig44Enterprise_Security.encode(message.security, writer.uint32(34).fork()).ldelim();
    }
    if (message.auditLog !== undefined) {
      MongodConfig44Enterprise_AuditLog.encode(message.auditLog, writer.uint32(42).fork()).ldelim();
    }
    if (message.setParameter !== undefined) {
      MongodConfig44Enterprise_SetParameter.encode(message.setParameter, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongodConfig44Enterprise_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongodConfig44Enterprise_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongodConfig44Enterprise_Network.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.security = MongodConfig44Enterprise_Security.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.auditLog = MongodConfig44Enterprise_AuditLog.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setParameter = MongodConfig44Enterprise_SetParameter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig44Enterprise {
    return {
      $type: MongodConfig44Enterprise.$type,
      storage: isSet(object.storage) ? MongodConfig44Enterprise_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongodConfig44Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongodConfig44Enterprise_Network.fromJSON(object.net) : undefined,
      security: isSet(object.security) ? MongodConfig44Enterprise_Security.fromJSON(object.security) : undefined,
      auditLog: isSet(object.auditLog) ? MongodConfig44Enterprise_AuditLog.fromJSON(object.auditLog) : undefined,
      setParameter: isSet(object.setParameter)
        ? MongodConfig44Enterprise_SetParameter.fromJSON(object.setParameter)
        : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongodConfig44Enterprise_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongodConfig44Enterprise_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongodConfig44Enterprise_Network.toJSON(message.net);
    }
    if (message.security !== undefined) {
      obj.security = MongodConfig44Enterprise_Security.toJSON(message.security);
    }
    if (message.auditLog !== undefined) {
      obj.auditLog = MongodConfig44Enterprise_AuditLog.toJSON(message.auditLog);
    }
    if (message.setParameter !== undefined) {
      obj.setParameter = MongodConfig44Enterprise_SetParameter.toJSON(message.setParameter);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44Enterprise>): MongodConfig44Enterprise {
    return MongodConfig44Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44Enterprise>): MongodConfig44Enterprise {
    const message = createBaseMongodConfig44Enterprise();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongodConfig44Enterprise_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongodConfig44Enterprise_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongodConfig44Enterprise_Network.fromPartial(object.net)
      : undefined;
    message.security = (object.security !== undefined && object.security !== null)
      ? MongodConfig44Enterprise_Security.fromPartial(object.security)
      : undefined;
    message.auditLog = (object.auditLog !== undefined && object.auditLog !== null)
      ? MongodConfig44Enterprise_AuditLog.fromPartial(object.auditLog)
      : undefined;
    message.setParameter = (object.setParameter !== undefined && object.setParameter !== null)
      ? MongodConfig44Enterprise_SetParameter.fromPartial(object.setParameter)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise.$type, MongodConfig44Enterprise);

function createBaseMongodConfig44Enterprise_Storage(): MongodConfig44Enterprise_Storage {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage",
    wiredTiger: undefined,
    journal: undefined,
  };
}

export const MongodConfig44Enterprise_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage" as const,

  encode(message: MongodConfig44Enterprise_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongodConfig44Enterprise_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    if (message.journal !== undefined) {
      MongodConfig44Enterprise_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongodConfig44Enterprise_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.journal = MongodConfig44Enterprise_Storage_Journal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig44Enterprise_Storage {
    return {
      $type: MongodConfig44Enterprise_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongodConfig44Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
      journal: isSet(object.journal) ? MongodConfig44Enterprise_Storage_Journal.fromJSON(object.journal) : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongodConfig44Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    if (message.journal !== undefined) {
      obj.journal = MongodConfig44Enterprise_Storage_Journal.toJSON(message.journal);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44Enterprise_Storage>): MongodConfig44Enterprise_Storage {
    return MongodConfig44Enterprise_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44Enterprise_Storage>): MongodConfig44Enterprise_Storage {
    const message = createBaseMongodConfig44Enterprise_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongodConfig44Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    message.journal = (object.journal !== undefined && object.journal !== null)
      ? MongodConfig44Enterprise_Storage_Journal.fromPartial(object.journal)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise_Storage.$type, MongodConfig44Enterprise_Storage);

function createBaseMongodConfig44Enterprise_Storage_WiredTiger(): MongodConfig44Enterprise_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger",
    engineConfig: undefined,
    collectionConfig: undefined,
    indexConfig: undefined,
  };
}

export const MongodConfig44Enterprise_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger" as const,

  encode(message: MongodConfig44Enterprise_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.collectionConfig !== undefined) {
      MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig.encode(
        message.collectionConfig,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.indexConfig !== undefined) {
      MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig.encode(message.indexConfig, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collectionConfig = MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexConfig = MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig44Enterprise_Storage_WiredTiger {
    return {
      $type: MongodConfig44Enterprise_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
      collectionConfig: isSet(object.collectionConfig)
        ? MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
        : undefined,
      indexConfig: isSet(object.indexConfig)
        ? MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig.fromJSON(object.indexConfig)
        : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    if (message.collectionConfig !== undefined) {
      obj.collectionConfig = MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig.toJSON(
        message.collectionConfig,
      );
    }
    if (message.indexConfig !== undefined) {
      obj.indexConfig = MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig.toJSON(message.indexConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44Enterprise_Storage_WiredTiger>): MongodConfig44Enterprise_Storage_WiredTiger {
    return MongodConfig44Enterprise_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig44Enterprise_Storage_WiredTiger>,
  ): MongodConfig44Enterprise_Storage_WiredTiger {
    const message = createBaseMongodConfig44Enterprise_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    message.collectionConfig = (object.collectionConfig !== undefined && object.collectionConfig !== null)
      ? MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
      : undefined;
    message.indexConfig = (object.indexConfig !== undefined && object.indexConfig !== null)
      ? MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig.fromPartial(object.indexConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise_Storage_WiredTiger.$type, MongodConfig44Enterprise_Storage_WiredTiger);

function createBaseMongodConfig44Enterprise_Storage_WiredTiger_EngineConfig(): MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig {
    return MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongodConfig44Enterprise_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig.$type,
  MongodConfig44Enterprise_Storage_WiredTiger_EngineConfig,
);

function createBaseMongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig(): MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
  };
}

export const MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig,
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
  ): MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig();
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

  fromJSON(object: any): MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig {
    return {
      $type: MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig.$type,
      blockCompressor: isSet(object.blockCompressor)
        ? mongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
        : 0,
    };
  },

  toJSON(message: MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    if (message.blockCompressor !== 0) {
      obj.blockCompressor = mongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
        message.blockCompressor,
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig {
    return MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig>,
  ): MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig {
    const message = createBaseMongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig();
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig.$type,
  MongodConfig44Enterprise_Storage_WiredTiger_CollectionConfig,
);

function createBaseMongodConfig44Enterprise_Storage_WiredTiger_IndexConfig(): MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.IndexConfig",
    prefixCompression: undefined,
  };
}

export const MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.IndexConfig" as const,

  encode(
    message: MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.prefixCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.prefixCompression! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Storage_WiredTiger_IndexConfig();
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

  fromJSON(object: any): MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig {
    return {
      $type: MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig.$type,
      prefixCompression: isSet(object.prefixCompression) ? Boolean(object.prefixCompression) : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig): unknown {
    const obj: any = {};
    if (message.prefixCompression !== undefined) {
      obj.prefixCompression = message.prefixCompression;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig>,
  ): MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig {
    return MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig>,
  ): MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig {
    const message = createBaseMongodConfig44Enterprise_Storage_WiredTiger_IndexConfig();
    message.prefixCompression = object.prefixCompression ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig.$type,
  MongodConfig44Enterprise_Storage_WiredTiger_IndexConfig,
);

function createBaseMongodConfig44Enterprise_Storage_Journal(): MongodConfig44Enterprise_Storage_Journal {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.Journal",
    commitInterval: undefined,
  };
}

export const MongodConfig44Enterprise_Storage_Journal = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.Journal" as const,

  encode(message: MongodConfig44Enterprise_Storage_Journal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Storage_Journal();
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

  fromJSON(object: any): MongodConfig44Enterprise_Storage_Journal {
    return {
      $type: MongodConfig44Enterprise_Storage_Journal.$type,
      commitInterval: isSet(object.commitInterval) ? Number(object.commitInterval) : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise_Storage_Journal): unknown {
    const obj: any = {};
    if (message.commitInterval !== undefined) {
      obj.commitInterval = message.commitInterval;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44Enterprise_Storage_Journal>): MongodConfig44Enterprise_Storage_Journal {
    return MongodConfig44Enterprise_Storage_Journal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44Enterprise_Storage_Journal>): MongodConfig44Enterprise_Storage_Journal {
    const message = createBaseMongodConfig44Enterprise_Storage_Journal();
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise_Storage_Journal.$type, MongodConfig44Enterprise_Storage_Journal);

function createBaseMongodConfig44Enterprise_OperationProfiling(): MongodConfig44Enterprise_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
    slowOpSampleRate: undefined,
  };
}

export const MongodConfig44Enterprise_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.OperationProfiling" as const,

  encode(message: MongodConfig44Enterprise_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_OperationProfiling();
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

  fromJSON(object: any): MongodConfig44Enterprise_OperationProfiling {
    return {
      $type: MongodConfig44Enterprise_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongodConfig44Enterprise_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
      slowOpSampleRate: isSet(object.slowOpSampleRate) ? Number(object.slowOpSampleRate) : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongodConfig44Enterprise_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    if (message.slowOpSampleRate !== undefined) {
      obj.slowOpSampleRate = message.slowOpSampleRate;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44Enterprise_OperationProfiling>): MongodConfig44Enterprise_OperationProfiling {
    return MongodConfig44Enterprise_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig44Enterprise_OperationProfiling>,
  ): MongodConfig44Enterprise_OperationProfiling {
    const message = createBaseMongodConfig44Enterprise_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    message.slowOpSampleRate = object.slowOpSampleRate ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise_OperationProfiling.$type, MongodConfig44Enterprise_OperationProfiling);

function createBaseMongodConfig44Enterprise_Network(): MongodConfig44Enterprise_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network",
    maxIncomingConnections: undefined,
    compression: undefined,
  };
}

export const MongodConfig44Enterprise_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network" as const,

  encode(message: MongodConfig44Enterprise_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.compression !== undefined) {
      MongodConfig44Enterprise_Network_Compression.encode(message.compression, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Network();
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

          message.compression = MongodConfig44Enterprise_Network_Compression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig44Enterprise_Network {
    return {
      $type: MongodConfig44Enterprise_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
      compression: isSet(object.compression)
        ? MongodConfig44Enterprise_Network_Compression.fromJSON(object.compression)
        : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    if (message.compression !== undefined) {
      obj.compression = MongodConfig44Enterprise_Network_Compression.toJSON(message.compression);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44Enterprise_Network>): MongodConfig44Enterprise_Network {
    return MongodConfig44Enterprise_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44Enterprise_Network>): MongodConfig44Enterprise_Network {
    const message = createBaseMongodConfig44Enterprise_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression = (object.compression !== undefined && object.compression !== null)
      ? MongodConfig44Enterprise_Network_Compression.fromPartial(object.compression)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise_Network.$type, MongodConfig44Enterprise_Network);

function createBaseMongodConfig44Enterprise_Network_Compression(): MongodConfig44Enterprise_Network_Compression {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network.Compression",
    compressors: [],
  };
}

export const MongodConfig44Enterprise_Network_Compression = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network.Compression" as const,

  encode(message: MongodConfig44Enterprise_Network_Compression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Network_Compression();
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

  fromJSON(object: any): MongodConfig44Enterprise_Network_Compression {
    return {
      $type: MongodConfig44Enterprise_Network_Compression.$type,
      compressors: globalThis.Array.isArray(object?.compressors)
        ? object.compressors.map((e: any) => mongodConfig44Enterprise_Network_Compression_CompressorFromJSON(e))
        : [],
    };
  },

  toJSON(message: MongodConfig44Enterprise_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors?.length) {
      obj.compressors = message.compressors.map((e) =>
        mongodConfig44Enterprise_Network_Compression_CompressorToJSON(e)
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongodConfig44Enterprise_Network_Compression>,
  ): MongodConfig44Enterprise_Network_Compression {
    return MongodConfig44Enterprise_Network_Compression.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongodConfig44Enterprise_Network_Compression>,
  ): MongodConfig44Enterprise_Network_Compression {
    const message = createBaseMongodConfig44Enterprise_Network_Compression();
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  MongodConfig44Enterprise_Network_Compression.$type,
  MongodConfig44Enterprise_Network_Compression,
);

function createBaseMongodConfig44Enterprise_Security(): MongodConfig44Enterprise_Security {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security",
    enableEncryption: undefined,
    kmip: undefined,
  };
}

export const MongodConfig44Enterprise_Security = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security" as const,

  encode(message: MongodConfig44Enterprise_Security, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableEncryption !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableEncryption! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.kmip !== undefined) {
      MongodConfig44Enterprise_Security_KMIP.encode(message.kmip, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_Security {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Security();
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

          message.kmip = MongodConfig44Enterprise_Security_KMIP.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig44Enterprise_Security {
    return {
      $type: MongodConfig44Enterprise_Security.$type,
      enableEncryption: isSet(object.enableEncryption) ? Boolean(object.enableEncryption) : undefined,
      kmip: isSet(object.kmip) ? MongodConfig44Enterprise_Security_KMIP.fromJSON(object.kmip) : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise_Security): unknown {
    const obj: any = {};
    if (message.enableEncryption !== undefined) {
      obj.enableEncryption = message.enableEncryption;
    }
    if (message.kmip !== undefined) {
      obj.kmip = MongodConfig44Enterprise_Security_KMIP.toJSON(message.kmip);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44Enterprise_Security>): MongodConfig44Enterprise_Security {
    return MongodConfig44Enterprise_Security.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44Enterprise_Security>): MongodConfig44Enterprise_Security {
    const message = createBaseMongodConfig44Enterprise_Security();
    message.enableEncryption = object.enableEncryption ?? undefined;
    message.kmip = (object.kmip !== undefined && object.kmip !== null)
      ? MongodConfig44Enterprise_Security_KMIP.fromPartial(object.kmip)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise_Security.$type, MongodConfig44Enterprise_Security);

function createBaseMongodConfig44Enterprise_Security_KMIP(): MongodConfig44Enterprise_Security_KMIP {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security.KMIP",
    serverName: "",
    port: undefined,
    serverCa: "",
    clientCertificate: "",
    keyIdentifier: "",
  };
}

export const MongodConfig44Enterprise_Security_KMIP = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security.KMIP" as const,

  encode(message: MongodConfig44Enterprise_Security_KMIP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_Security_KMIP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_Security_KMIP();
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

  fromJSON(object: any): MongodConfig44Enterprise_Security_KMIP {
    return {
      $type: MongodConfig44Enterprise_Security_KMIP.$type,
      serverName: isSet(object.serverName) ? globalThis.String(object.serverName) : "",
      port: isSet(object.port) ? Number(object.port) : undefined,
      serverCa: isSet(object.serverCa) ? globalThis.String(object.serverCa) : "",
      clientCertificate: isSet(object.clientCertificate) ? globalThis.String(object.clientCertificate) : "",
      keyIdentifier: isSet(object.keyIdentifier) ? globalThis.String(object.keyIdentifier) : "",
    };
  },

  toJSON(message: MongodConfig44Enterprise_Security_KMIP): unknown {
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

  create(base?: DeepPartial<MongodConfig44Enterprise_Security_KMIP>): MongodConfig44Enterprise_Security_KMIP {
    return MongodConfig44Enterprise_Security_KMIP.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44Enterprise_Security_KMIP>): MongodConfig44Enterprise_Security_KMIP {
    const message = createBaseMongodConfig44Enterprise_Security_KMIP();
    message.serverName = object.serverName ?? "";
    message.port = object.port ?? undefined;
    message.serverCa = object.serverCa ?? "";
    message.clientCertificate = object.clientCertificate ?? "";
    message.keyIdentifier = object.keyIdentifier ?? "";
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise_Security_KMIP.$type, MongodConfig44Enterprise_Security_KMIP);

function createBaseMongodConfig44Enterprise_AuditLog(): MongodConfig44Enterprise_AuditLog {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.AuditLog", filter: "" };
}

export const MongodConfig44Enterprise_AuditLog = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.AuditLog" as const,

  encode(message: MongodConfig44Enterprise_AuditLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_AuditLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_AuditLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfig44Enterprise_AuditLog {
    return {
      $type: MongodConfig44Enterprise_AuditLog.$type,
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: MongodConfig44Enterprise_AuditLog): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44Enterprise_AuditLog>): MongodConfig44Enterprise_AuditLog {
    return MongodConfig44Enterprise_AuditLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44Enterprise_AuditLog>): MongodConfig44Enterprise_AuditLog {
    const message = createBaseMongodConfig44Enterprise_AuditLog();
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise_AuditLog.$type, MongodConfig44Enterprise_AuditLog);

function createBaseMongodConfig44Enterprise_SetParameter(): MongodConfig44Enterprise_SetParameter {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.SetParameter",
    auditAuthorizationSuccess: undefined,
    enableFlowControl: undefined,
  };
}

export const MongodConfig44Enterprise_SetParameter = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.SetParameter" as const,

  encode(message: MongodConfig44Enterprise_SetParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditAuthorizationSuccess !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.auditAuthorizationSuccess! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.enableFlowControl !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableFlowControl! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig44Enterprise_SetParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfig44Enterprise_SetParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.auditAuthorizationSuccess = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MongodConfig44Enterprise_SetParameter {
    return {
      $type: MongodConfig44Enterprise_SetParameter.$type,
      auditAuthorizationSuccess: isSet(object.auditAuthorizationSuccess)
        ? Boolean(object.auditAuthorizationSuccess)
        : undefined,
      enableFlowControl: isSet(object.enableFlowControl) ? Boolean(object.enableFlowControl) : undefined,
    };
  },

  toJSON(message: MongodConfig44Enterprise_SetParameter): unknown {
    const obj: any = {};
    if (message.auditAuthorizationSuccess !== undefined) {
      obj.auditAuthorizationSuccess = message.auditAuthorizationSuccess;
    }
    if (message.enableFlowControl !== undefined) {
      obj.enableFlowControl = message.enableFlowControl;
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfig44Enterprise_SetParameter>): MongodConfig44Enterprise_SetParameter {
    return MongodConfig44Enterprise_SetParameter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfig44Enterprise_SetParameter>): MongodConfig44Enterprise_SetParameter {
    const message = createBaseMongodConfig44Enterprise_SetParameter();
    message.auditAuthorizationSuccess = object.auditAuthorizationSuccess ?? undefined;
    message.enableFlowControl = object.enableFlowControl ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfig44Enterprise_SetParameter.$type, MongodConfig44Enterprise_SetParameter);

function createBaseMongoCfgConfig44Enterprise(): MongoCfgConfig44Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise",
    storage: undefined,
    operationProfiling: undefined,
    net: undefined,
  };
}

export const MongoCfgConfig44Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise" as const,

  encode(message: MongoCfgConfig44Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage !== undefined) {
      MongoCfgConfig44Enterprise_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      MongoCfgConfig44Enterprise_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.net !== undefined) {
      MongoCfgConfig44Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storage = MongoCfgConfig44Enterprise_Storage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationProfiling = MongoCfgConfig44Enterprise_OperationProfiling.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.net = MongoCfgConfig44Enterprise_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig44Enterprise {
    return {
      $type: MongoCfgConfig44Enterprise.$type,
      storage: isSet(object.storage) ? MongoCfgConfig44Enterprise_Storage.fromJSON(object.storage) : undefined,
      operationProfiling: isSet(object.operationProfiling)
        ? MongoCfgConfig44Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined,
      net: isSet(object.net) ? MongoCfgConfig44Enterprise_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44Enterprise): unknown {
    const obj: any = {};
    if (message.storage !== undefined) {
      obj.storage = MongoCfgConfig44Enterprise_Storage.toJSON(message.storage);
    }
    if (message.operationProfiling !== undefined) {
      obj.operationProfiling = MongoCfgConfig44Enterprise_OperationProfiling.toJSON(message.operationProfiling);
    }
    if (message.net !== undefined) {
      obj.net = MongoCfgConfig44Enterprise_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig44Enterprise>): MongoCfgConfig44Enterprise {
    return MongoCfgConfig44Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig44Enterprise>): MongoCfgConfig44Enterprise {
    const message = createBaseMongoCfgConfig44Enterprise();
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? MongoCfgConfig44Enterprise_Storage.fromPartial(object.storage)
      : undefined;
    message.operationProfiling = (object.operationProfiling !== undefined && object.operationProfiling !== null)
      ? MongoCfgConfig44Enterprise_OperationProfiling.fromPartial(object.operationProfiling)
      : undefined;
    message.net = (object.net !== undefined && object.net !== null)
      ? MongoCfgConfig44Enterprise_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig44Enterprise.$type, MongoCfgConfig44Enterprise);

function createBaseMongoCfgConfig44Enterprise_Storage(): MongoCfgConfig44Enterprise_Storage {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage", wiredTiger: undefined };
}

export const MongoCfgConfig44Enterprise_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage" as const,

  encode(message: MongoCfgConfig44Enterprise_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      MongoCfgConfig44Enterprise_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44Enterprise_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44Enterprise_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wiredTiger = MongoCfgConfig44Enterprise_Storage_WiredTiger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfig44Enterprise_Storage {
    return {
      $type: MongoCfgConfig44Enterprise_Storage.$type,
      wiredTiger: isSet(object.wiredTiger)
        ? MongoCfgConfig44Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44Enterprise_Storage): unknown {
    const obj: any = {};
    if (message.wiredTiger !== undefined) {
      obj.wiredTiger = MongoCfgConfig44Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig44Enterprise_Storage>): MongoCfgConfig44Enterprise_Storage {
    return MongoCfgConfig44Enterprise_Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig44Enterprise_Storage>): MongoCfgConfig44Enterprise_Storage {
    const message = createBaseMongoCfgConfig44Enterprise_Storage();
    message.wiredTiger = (object.wiredTiger !== undefined && object.wiredTiger !== null)
      ? MongoCfgConfig44Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig44Enterprise_Storage.$type, MongoCfgConfig44Enterprise_Storage);

function createBaseMongoCfgConfig44Enterprise_Storage_WiredTiger(): MongoCfgConfig44Enterprise_Storage_WiredTiger {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger",
    engineConfig: undefined,
  };
}

export const MongoCfgConfig44Enterprise_Storage_WiredTiger = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger" as const,

  encode(message: MongoCfgConfig44Enterprise_Storage_WiredTiger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfig !== undefined) {
      MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44Enterprise_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44Enterprise_Storage_WiredTiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.engineConfig = MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig.decode(
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

  fromJSON(object: any): MongoCfgConfig44Enterprise_Storage_WiredTiger {
    return {
      $type: MongoCfgConfig44Enterprise_Storage_WiredTiger.$type,
      engineConfig: isSet(object.engineConfig)
        ? MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44Enterprise_Storage_WiredTiger): unknown {
    const obj: any = {};
    if (message.engineConfig !== undefined) {
      obj.engineConfig = MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig);
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig44Enterprise_Storage_WiredTiger>,
  ): MongoCfgConfig44Enterprise_Storage_WiredTiger {
    return MongoCfgConfig44Enterprise_Storage_WiredTiger.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig44Enterprise_Storage_WiredTiger>,
  ): MongoCfgConfig44Enterprise_Storage_WiredTiger {
    const message = createBaseMongoCfgConfig44Enterprise_Storage_WiredTiger();
    message.engineConfig = (object.engineConfig !== undefined && object.engineConfig !== null)
      ? MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig44Enterprise_Storage_WiredTiger.$type,
  MongoCfgConfig44Enterprise_Storage_WiredTiger,
);

function createBaseMongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig(): MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig",
    cacheSizeGb: undefined,
  };
}

export const MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig();
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

  fromJSON(object: any): MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig {
    return {
      $type: MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig.$type,
      cacheSizeGb: isSet(object.cacheSizeGb) ? Number(object.cacheSizeGb) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    if (message.cacheSizeGb !== undefined) {
      obj.cacheSizeGb = message.cacheSizeGb;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig {
    return MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig>,
  ): MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const message = createBaseMongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig();
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig.$type,
  MongoCfgConfig44Enterprise_Storage_WiredTiger_EngineConfig,
);

function createBaseMongoCfgConfig44Enterprise_OperationProfiling(): MongoCfgConfig44Enterprise_OperationProfiling {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.OperationProfiling",
    mode: 0,
    slowOpThreshold: undefined,
  };
}

export const MongoCfgConfig44Enterprise_OperationProfiling = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.OperationProfiling" as const,

  encode(message: MongoCfgConfig44Enterprise_OperationProfiling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44Enterprise_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44Enterprise_OperationProfiling();
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

  fromJSON(object: any): MongoCfgConfig44Enterprise_OperationProfiling {
    return {
      $type: MongoCfgConfig44Enterprise_OperationProfiling.$type,
      mode: isSet(object.mode) ? mongoCfgConfig44Enterprise_OperationProfiling_ModeFromJSON(object.mode) : 0,
      slowOpThreshold: isSet(object.slowOpThreshold) ? Number(object.slowOpThreshold) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44Enterprise_OperationProfiling): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = mongoCfgConfig44Enterprise_OperationProfiling_ModeToJSON(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      obj.slowOpThreshold = message.slowOpThreshold;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongoCfgConfig44Enterprise_OperationProfiling>,
  ): MongoCfgConfig44Enterprise_OperationProfiling {
    return MongoCfgConfig44Enterprise_OperationProfiling.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongoCfgConfig44Enterprise_OperationProfiling>,
  ): MongoCfgConfig44Enterprise_OperationProfiling {
    const message = createBaseMongoCfgConfig44Enterprise_OperationProfiling();
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MongoCfgConfig44Enterprise_OperationProfiling.$type,
  MongoCfgConfig44Enterprise_OperationProfiling,
);

function createBaseMongoCfgConfig44Enterprise_Network(): MongoCfgConfig44Enterprise_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Network",
    maxIncomingConnections: undefined,
  };
}

export const MongoCfgConfig44Enterprise_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Network" as const,

  encode(message: MongoCfgConfig44Enterprise_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig44Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfig44Enterprise_Network();
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

  fromJSON(object: any): MongoCfgConfig44Enterprise_Network {
    return {
      $type: MongoCfgConfig44Enterprise_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
    };
  },

  toJSON(message: MongoCfgConfig44Enterprise_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfig44Enterprise_Network>): MongoCfgConfig44Enterprise_Network {
    return MongoCfgConfig44Enterprise_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfig44Enterprise_Network>): MongoCfgConfig44Enterprise_Network {
    const message = createBaseMongoCfgConfig44Enterprise_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfig44Enterprise_Network.$type, MongoCfgConfig44Enterprise_Network);

function createBaseMongosConfig44Enterprise(): MongosConfig44Enterprise {
  return { $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise", net: undefined };
}

export const MongosConfig44Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise" as const,

  encode(message: MongosConfig44Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.net !== undefined) {
      MongosConfig44Enterprise_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig44Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig44Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.net = MongosConfig44Enterprise_Network.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig44Enterprise {
    return {
      $type: MongosConfig44Enterprise.$type,
      net: isSet(object.net) ? MongosConfig44Enterprise_Network.fromJSON(object.net) : undefined,
    };
  },

  toJSON(message: MongosConfig44Enterprise): unknown {
    const obj: any = {};
    if (message.net !== undefined) {
      obj.net = MongosConfig44Enterprise_Network.toJSON(message.net);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig44Enterprise>): MongosConfig44Enterprise {
    return MongosConfig44Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig44Enterprise>): MongosConfig44Enterprise {
    const message = createBaseMongosConfig44Enterprise();
    message.net = (object.net !== undefined && object.net !== null)
      ? MongosConfig44Enterprise_Network.fromPartial(object.net)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig44Enterprise.$type, MongosConfig44Enterprise);

function createBaseMongosConfig44Enterprise_Network(): MongosConfig44Enterprise_Network {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network",
    maxIncomingConnections: undefined,
    compression: undefined,
  };
}

export const MongosConfig44Enterprise_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network" as const,

  encode(message: MongosConfig44Enterprise_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxIncomingConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.compression !== undefined) {
      MongosConfig44Enterprise_Network_Compression.encode(message.compression, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig44Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig44Enterprise_Network();
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

          message.compression = MongosConfig44Enterprise_Network_Compression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfig44Enterprise_Network {
    return {
      $type: MongosConfig44Enterprise_Network.$type,
      maxIncomingConnections: isSet(object.maxIncomingConnections) ? Number(object.maxIncomingConnections) : undefined,
      compression: isSet(object.compression)
        ? MongosConfig44Enterprise_Network_Compression.fromJSON(object.compression)
        : undefined,
    };
  },

  toJSON(message: MongosConfig44Enterprise_Network): unknown {
    const obj: any = {};
    if (message.maxIncomingConnections !== undefined) {
      obj.maxIncomingConnections = message.maxIncomingConnections;
    }
    if (message.compression !== undefined) {
      obj.compression = MongosConfig44Enterprise_Network_Compression.toJSON(message.compression);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfig44Enterprise_Network>): MongosConfig44Enterprise_Network {
    return MongosConfig44Enterprise_Network.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfig44Enterprise_Network>): MongosConfig44Enterprise_Network {
    const message = createBaseMongosConfig44Enterprise_Network();
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression = (object.compression !== undefined && object.compression !== null)
      ? MongosConfig44Enterprise_Network_Compression.fromPartial(object.compression)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfig44Enterprise_Network.$type, MongosConfig44Enterprise_Network);

function createBaseMongosConfig44Enterprise_Network_Compression(): MongosConfig44Enterprise_Network_Compression {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network.Compression",
    compressors: [],
  };
}

export const MongosConfig44Enterprise_Network_Compression = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network.Compression" as const,

  encode(message: MongosConfig44Enterprise_Network_Compression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig44Enterprise_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfig44Enterprise_Network_Compression();
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

  fromJSON(object: any): MongosConfig44Enterprise_Network_Compression {
    return {
      $type: MongosConfig44Enterprise_Network_Compression.$type,
      compressors: globalThis.Array.isArray(object?.compressors)
        ? object.compressors.map((e: any) => mongosConfig44Enterprise_Network_Compression_CompressorFromJSON(e))
        : [],
    };
  },

  toJSON(message: MongosConfig44Enterprise_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors?.length) {
      obj.compressors = message.compressors.map((e) =>
        mongosConfig44Enterprise_Network_Compression_CompressorToJSON(e)
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<MongosConfig44Enterprise_Network_Compression>,
  ): MongosConfig44Enterprise_Network_Compression {
    return MongosConfig44Enterprise_Network_Compression.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MongosConfig44Enterprise_Network_Compression>,
  ): MongosConfig44Enterprise_Network_Compression {
    const message = createBaseMongosConfig44Enterprise_Network_Compression();
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  MongosConfig44Enterprise_Network_Compression.$type,
  MongosConfig44Enterprise_Network_Compression,
);

function createBaseMongodConfigSet44Enterprise(): MongodConfigSet44Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongodConfigSet44Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise" as const,

  encode(message: MongodConfigSet44Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongodConfig44Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongodConfig44Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongodConfig44Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfigSet44Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodConfigSet44Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongodConfig44Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongodConfig44Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongodConfig44Enterprise.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodConfigSet44Enterprise {
    return {
      $type: MongodConfigSet44Enterprise.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? MongodConfig44Enterprise.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? MongodConfig44Enterprise.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongodConfig44Enterprise.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongodConfigSet44Enterprise): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongodConfig44Enterprise.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongodConfig44Enterprise.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongodConfig44Enterprise.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodConfigSet44Enterprise>): MongodConfigSet44Enterprise {
    return MongodConfigSet44Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodConfigSet44Enterprise>): MongodConfigSet44Enterprise {
    const message = createBaseMongodConfigSet44Enterprise();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongodConfig44Enterprise.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongodConfig44Enterprise.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongodConfig44Enterprise.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodConfigSet44Enterprise.$type, MongodConfigSet44Enterprise);

function createBaseMongoCfgConfigSet44Enterprise(): MongoCfgConfigSet44Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongoCfgConfigSet44Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise" as const,

  encode(message: MongoCfgConfigSet44Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongoCfgConfig44Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongoCfgConfig44Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongoCfgConfig44Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfigSet44Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCfgConfigSet44Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongoCfgConfig44Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongoCfgConfig44Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongoCfgConfig44Enterprise.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCfgConfigSet44Enterprise {
    return {
      $type: MongoCfgConfigSet44Enterprise.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? MongoCfgConfig44Enterprise.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? MongoCfgConfig44Enterprise.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig)
        ? MongoCfgConfig44Enterprise.fromJSON(object.defaultConfig)
        : undefined,
    };
  },

  toJSON(message: MongoCfgConfigSet44Enterprise): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongoCfgConfig44Enterprise.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongoCfgConfig44Enterprise.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongoCfgConfig44Enterprise.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongoCfgConfigSet44Enterprise>): MongoCfgConfigSet44Enterprise {
    return MongoCfgConfigSet44Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongoCfgConfigSet44Enterprise>): MongoCfgConfigSet44Enterprise {
    const message = createBaseMongoCfgConfigSet44Enterprise();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongoCfgConfig44Enterprise.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongoCfgConfig44Enterprise.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongoCfgConfig44Enterprise.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoCfgConfigSet44Enterprise.$type, MongoCfgConfigSet44Enterprise);

function createBaseMongosConfigSet44Enterprise(): MongosConfigSet44Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MongosConfigSet44Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise" as const,

  encode(message: MongosConfigSet44Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MongosConfig44Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MongosConfig44Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MongosConfig44Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfigSet44Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongosConfigSet44Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MongosConfig44Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MongosConfig44Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MongosConfig44Enterprise.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongosConfigSet44Enterprise {
    return {
      $type: MongosConfigSet44Enterprise.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? MongosConfig44Enterprise.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? MongosConfig44Enterprise.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MongosConfig44Enterprise.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MongosConfigSet44Enterprise): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MongosConfig44Enterprise.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MongosConfig44Enterprise.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MongosConfig44Enterprise.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MongosConfigSet44Enterprise>): MongosConfigSet44Enterprise {
    return MongosConfigSet44Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongosConfigSet44Enterprise>): MongosConfigSet44Enterprise {
    const message = createBaseMongosConfigSet44Enterprise();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MongosConfig44Enterprise.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MongosConfig44Enterprise.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MongosConfig44Enterprise.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongosConfigSet44Enterprise.$type, MongosConfigSet44Enterprise);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
