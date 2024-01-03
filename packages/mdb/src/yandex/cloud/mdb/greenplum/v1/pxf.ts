/* eslint-disable */
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export interface PXFConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig";
  /** Connection */
  connectionTimeout?: number | undefined;
  uploadTimeout?:
    | number
    | undefined;
  /** Thread pool */
  maxThreads?: number | undefined;
  poolAllowCoreThreadTimeout?: boolean | undefined;
  poolCoreSize?: number | undefined;
  poolQueueCapacity?: number | undefined;
  poolMaxSize?:
    | number
    | undefined;
  /** JVM */
  xmx?: number | undefined;
  xms?: number | undefined;
}

export interface PXFConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet";
  effectiveConfig?:
    | PXFConfig
    | undefined;
  /** User-defined settings */
  userConfig?:
    | PXFConfig
    | undefined;
  /** Default configuration */
  defaultConfig?: PXFConfig | undefined;
}

export interface PXFDatasourceS3 {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceS3";
  accessKey: string;
  secretKey: string;
  fastUpload?: boolean | undefined;
  endpoint: string;
}

export interface PXFDatasourceJDBC {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceJDBC";
  /** Matches jdbc.driver */
  driver: string;
  /** Matches jdbc.url */
  url: string;
  /** Matches jdbc.user */
  user: string;
  /** Matches jdbc.password */
  password: string;
  /** Matches jdbc.statement.batchsize */
  statementBatchSize?:
    | number
    | undefined;
  /** Matches jdbc.statement.fetchsize */
  statementFetchSize?:
    | number
    | undefined;
  /** Matches jdbc.statement.querytimeout */
  statementQueryTimeout?:
    | number
    | undefined;
  /** Matches jdbc.pool.enabled */
  poolEnabled?:
    | boolean
    | undefined;
  /** Matches jdbc.pool.property.maximumpoolsize */
  poolMaximumSize?:
    | number
    | undefined;
  /** Matches jdbc.pool.property.connectiontimeout */
  poolConnectionTimeout?:
    | number
    | undefined;
  /** Matches jdbc.pool.property.idletimeout */
  poolIdleTimeout?:
    | number
    | undefined;
  /** Matches jdbc.pool.property.minimumidle */
  poolMinimumIdle?: number | undefined;
}

export interface PXFDatasourceCore {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceCore";
  defaultFs: string;
  securityAuthToLocal: string;
}

export interface PXFDatasourceKerberos {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceKerberos";
  enable?: boolean | undefined;
  primary: string;
  realm: string;
  kdcServers: string[];
  adminServer: string;
  defaultDomain: string;
  keytabBase64: string;
}

export interface PXFDatasourceHDFSDfsNamenode {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfsNamenode";
  rpcAddress: string;
  serviceRpcAddress: string;
  httpAddress: string;
  httpsAddress: string;
}

export interface PXFDatasourceHDFSDfs {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfs";
  haAutomaticFailoverEnabled?: boolean | undefined;
  blockAccessTokenEnabled?: boolean | undefined;
  useDatanodeHostname?: boolean | undefined;
  namenodes: { [key: string]: PXFDatasourceHDFSDfsNamenode };
}

export interface PXFDatasourceHDFSDfs_NamenodesEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfs.NamenodesEntry";
  key: string;
  value?: PXFDatasourceHDFSDfsNamenode | undefined;
}

export interface PXFDatasourceHDFSYarnHaRm {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarnHaRm";
  resourcemanagerAddress: string;
  resourcemanagerSchedulerAddress: string;
  resourcemanagerResourceTrackerAddress: string;
  resourcemanagerAdminAddress: string;
  resourcemanagerWebappAddress: string;
  resourcemanagerWebappHttpsAddress: string;
}

export interface PXFDatasourceHDFSYarn {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarn";
  resourcemanagerHaEnabled?: boolean | undefined;
  resourcemanagerHaAutoFailoverEnabled?: boolean | undefined;
  resourcemanagerHaAutoFailoverEmbedded?: boolean | undefined;
  resourcemanagerClusterId: string;
  haRm: { [key: string]: PXFDatasourceHDFSYarnHaRm };
}

export interface PXFDatasourceHDFSYarn_HaRmEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarn.HaRmEntry";
  key: string;
  value?: PXFDatasourceHDFSYarnHaRm | undefined;
}

export interface PXFDatasourceHDFS {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFS";
  core?: PXFDatasourceCore | undefined;
  kerberos?: PXFDatasourceKerberos | undefined;
  userImpersonation?: boolean | undefined;
  username: string;
  saslConnectionRetries?: number | undefined;
  zkHosts: string[];
  dfs?: PXFDatasourceHDFSDfs | undefined;
  yarn?: PXFDatasourceHDFSYarn | undefined;
}

export interface PXFDatasourceHive {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHive";
  core?: PXFDatasourceCore | undefined;
  kerberos?: PXFDatasourceKerberos | undefined;
  userImpersonation?: boolean | undefined;
  username: string;
  saslConnectionRetries?: number | undefined;
  zkHosts: string[];
  ppd?: boolean | undefined;
  metastoreUris: string[];
  metastoreKerberosPrincipal: string;
  authKerberosPrincipal: string;
}

export interface PXFDatasource {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasource";
  name: string;
  s3?: PXFDatasourceS3 | undefined;
  jdbc?: PXFDatasourceJDBC | undefined;
  hdfs?: PXFDatasourceHDFS | undefined;
  hive?: PXFDatasourceHive | undefined;
}

function createBasePXFConfig(): PXFConfig {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig",
    connectionTimeout: undefined,
    uploadTimeout: undefined,
    maxThreads: undefined,
    poolAllowCoreThreadTimeout: undefined,
    poolCoreSize: undefined,
    poolQueueCapacity: undefined,
    poolMaxSize: undefined,
    xmx: undefined,
    xms: undefined,
  };
}

export const PXFConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig" as const,

  encode(message: PXFConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.connectionTimeout! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.uploadTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.uploadTimeout! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.maxThreads !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxThreads! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.poolAllowCoreThreadTimeout !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.poolAllowCoreThreadTimeout! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.poolCoreSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.poolCoreSize! }, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.poolQueueCapacity !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.poolQueueCapacity! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.poolMaxSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.poolMaxSize! }, writer.uint32(58).fork())
        .ldelim();
    }
    if (message.xmx !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.xmx! }, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.xms !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.xms! }, writer.uint32(74).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uploadTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxThreads = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.poolAllowCoreThreadTimeout = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.poolCoreSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.poolQueueCapacity = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.poolMaxSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.xmx = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.xms = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFConfig {
    return {
      $type: PXFConfig.$type,
      connectionTimeout: isSet(object.connectionTimeout) ? Number(object.connectionTimeout) : undefined,
      uploadTimeout: isSet(object.uploadTimeout) ? Number(object.uploadTimeout) : undefined,
      maxThreads: isSet(object.maxThreads) ? Number(object.maxThreads) : undefined,
      poolAllowCoreThreadTimeout: isSet(object.poolAllowCoreThreadTimeout)
        ? Boolean(object.poolAllowCoreThreadTimeout)
        : undefined,
      poolCoreSize: isSet(object.poolCoreSize) ? Number(object.poolCoreSize) : undefined,
      poolQueueCapacity: isSet(object.poolQueueCapacity) ? Number(object.poolQueueCapacity) : undefined,
      poolMaxSize: isSet(object.poolMaxSize) ? Number(object.poolMaxSize) : undefined,
      xmx: isSet(object.xmx) ? Number(object.xmx) : undefined,
      xms: isSet(object.xms) ? Number(object.xms) : undefined,
    };
  },

  toJSON(message: PXFConfig): unknown {
    const obj: any = {};
    if (message.connectionTimeout !== undefined) {
      obj.connectionTimeout = message.connectionTimeout;
    }
    if (message.uploadTimeout !== undefined) {
      obj.uploadTimeout = message.uploadTimeout;
    }
    if (message.maxThreads !== undefined) {
      obj.maxThreads = message.maxThreads;
    }
    if (message.poolAllowCoreThreadTimeout !== undefined) {
      obj.poolAllowCoreThreadTimeout = message.poolAllowCoreThreadTimeout;
    }
    if (message.poolCoreSize !== undefined) {
      obj.poolCoreSize = message.poolCoreSize;
    }
    if (message.poolQueueCapacity !== undefined) {
      obj.poolQueueCapacity = message.poolQueueCapacity;
    }
    if (message.poolMaxSize !== undefined) {
      obj.poolMaxSize = message.poolMaxSize;
    }
    if (message.xmx !== undefined) {
      obj.xmx = message.xmx;
    }
    if (message.xms !== undefined) {
      obj.xms = message.xms;
    }
    return obj;
  },

  create(base?: DeepPartial<PXFConfig>): PXFConfig {
    return PXFConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFConfig>): PXFConfig {
    const message = createBasePXFConfig();
    message.connectionTimeout = object.connectionTimeout ?? undefined;
    message.uploadTimeout = object.uploadTimeout ?? undefined;
    message.maxThreads = object.maxThreads ?? undefined;
    message.poolAllowCoreThreadTimeout = object.poolAllowCoreThreadTimeout ?? undefined;
    message.poolCoreSize = object.poolCoreSize ?? undefined;
    message.poolQueueCapacity = object.poolQueueCapacity ?? undefined;
    message.poolMaxSize = object.poolMaxSize ?? undefined;
    message.xmx = object.xmx ?? undefined;
    message.xms = object.xms ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFConfig.$type, PXFConfig);

function createBasePXFConfigSet(): PXFConfigSet {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const PXFConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet" as const,

  encode(message: PXFConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      PXFConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      PXFConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      PXFConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFConfigSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFConfigSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = PXFConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = PXFConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = PXFConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFConfigSet {
    return {
      $type: PXFConfigSet.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? PXFConfig.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? PXFConfig.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? PXFConfig.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: PXFConfigSet): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = PXFConfig.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = PXFConfig.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = PXFConfig.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<PXFConfigSet>): PXFConfigSet {
    return PXFConfigSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFConfigSet>): PXFConfigSet {
    const message = createBasePXFConfigSet();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? PXFConfig.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? PXFConfig.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? PXFConfig.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFConfigSet.$type, PXFConfigSet);

function createBasePXFDatasourceS3(): PXFDatasourceS3 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceS3",
    accessKey: "",
    secretKey: "",
    fastUpload: undefined,
    endpoint: "",
  };
}

export const PXFDatasourceS3 = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceS3" as const,

  encode(message: PXFDatasourceS3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKey !== "") {
      writer.uint32(10).string(message.accessKey);
    }
    if (message.secretKey !== "") {
      writer.uint32(18).string(message.secretKey);
    }
    if (message.fastUpload !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.fastUpload! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.endpoint !== "") {
      writer.uint32(34).string(message.endpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceS3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceS3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.secretKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fastUpload = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): PXFDatasourceS3 {
    return {
      $type: PXFDatasourceS3.$type,
      accessKey: isSet(object.accessKey) ? globalThis.String(object.accessKey) : "",
      secretKey: isSet(object.secretKey) ? globalThis.String(object.secretKey) : "",
      fastUpload: isSet(object.fastUpload) ? Boolean(object.fastUpload) : undefined,
      endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
    };
  },

  toJSON(message: PXFDatasourceS3): unknown {
    const obj: any = {};
    if (message.accessKey !== "") {
      obj.accessKey = message.accessKey;
    }
    if (message.secretKey !== "") {
      obj.secretKey = message.secretKey;
    }
    if (message.fastUpload !== undefined) {
      obj.fastUpload = message.fastUpload;
    }
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceS3>): PXFDatasourceS3 {
    return PXFDatasourceS3.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceS3>): PXFDatasourceS3 {
    const message = createBasePXFDatasourceS3();
    message.accessKey = object.accessKey ?? "";
    message.secretKey = object.secretKey ?? "";
    message.fastUpload = object.fastUpload ?? undefined;
    message.endpoint = object.endpoint ?? "";
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceS3.$type, PXFDatasourceS3);

function createBasePXFDatasourceJDBC(): PXFDatasourceJDBC {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceJDBC",
    driver: "",
    url: "",
    user: "",
    password: "",
    statementBatchSize: undefined,
    statementFetchSize: undefined,
    statementQueryTimeout: undefined,
    poolEnabled: undefined,
    poolMaximumSize: undefined,
    poolConnectionTimeout: undefined,
    poolIdleTimeout: undefined,
    poolMinimumIdle: undefined,
  };
}

export const PXFDatasourceJDBC = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceJDBC" as const,

  encode(message: PXFDatasourceJDBC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.driver !== "") {
      writer.uint32(10).string(message.driver);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    if (message.statementBatchSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.statementBatchSize! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.statementFetchSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.statementFetchSize! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.statementQueryTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.statementQueryTimeout! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.poolEnabled !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.poolEnabled! }, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.poolMaximumSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.poolMaximumSize! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.poolConnectionTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.poolConnectionTimeout! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.poolIdleTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.poolIdleTimeout! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.poolMinimumIdle !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.poolMinimumIdle! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceJDBC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceJDBC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.user = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.statementBatchSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.statementFetchSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.statementQueryTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.poolEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.poolMaximumSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.poolConnectionTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.poolIdleTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.poolMinimumIdle = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceJDBC {
    return {
      $type: PXFDatasourceJDBC.$type,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      statementBatchSize: isSet(object.statementBatchSize) ? Number(object.statementBatchSize) : undefined,
      statementFetchSize: isSet(object.statementFetchSize) ? Number(object.statementFetchSize) : undefined,
      statementQueryTimeout: isSet(object.statementQueryTimeout) ? Number(object.statementQueryTimeout) : undefined,
      poolEnabled: isSet(object.poolEnabled) ? Boolean(object.poolEnabled) : undefined,
      poolMaximumSize: isSet(object.poolMaximumSize) ? Number(object.poolMaximumSize) : undefined,
      poolConnectionTimeout: isSet(object.poolConnectionTimeout) ? Number(object.poolConnectionTimeout) : undefined,
      poolIdleTimeout: isSet(object.poolIdleTimeout) ? Number(object.poolIdleTimeout) : undefined,
      poolMinimumIdle: isSet(object.poolMinimumIdle) ? Number(object.poolMinimumIdle) : undefined,
    };
  },

  toJSON(message: PXFDatasourceJDBC): unknown {
    const obj: any = {};
    if (message.driver !== "") {
      obj.driver = message.driver;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.statementBatchSize !== undefined) {
      obj.statementBatchSize = message.statementBatchSize;
    }
    if (message.statementFetchSize !== undefined) {
      obj.statementFetchSize = message.statementFetchSize;
    }
    if (message.statementQueryTimeout !== undefined) {
      obj.statementQueryTimeout = message.statementQueryTimeout;
    }
    if (message.poolEnabled !== undefined) {
      obj.poolEnabled = message.poolEnabled;
    }
    if (message.poolMaximumSize !== undefined) {
      obj.poolMaximumSize = message.poolMaximumSize;
    }
    if (message.poolConnectionTimeout !== undefined) {
      obj.poolConnectionTimeout = message.poolConnectionTimeout;
    }
    if (message.poolIdleTimeout !== undefined) {
      obj.poolIdleTimeout = message.poolIdleTimeout;
    }
    if (message.poolMinimumIdle !== undefined) {
      obj.poolMinimumIdle = message.poolMinimumIdle;
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceJDBC>): PXFDatasourceJDBC {
    return PXFDatasourceJDBC.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceJDBC>): PXFDatasourceJDBC {
    const message = createBasePXFDatasourceJDBC();
    message.driver = object.driver ?? "";
    message.url = object.url ?? "";
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.statementBatchSize = object.statementBatchSize ?? undefined;
    message.statementFetchSize = object.statementFetchSize ?? undefined;
    message.statementQueryTimeout = object.statementQueryTimeout ?? undefined;
    message.poolEnabled = object.poolEnabled ?? undefined;
    message.poolMaximumSize = object.poolMaximumSize ?? undefined;
    message.poolConnectionTimeout = object.poolConnectionTimeout ?? undefined;
    message.poolIdleTimeout = object.poolIdleTimeout ?? undefined;
    message.poolMinimumIdle = object.poolMinimumIdle ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceJDBC.$type, PXFDatasourceJDBC);

function createBasePXFDatasourceCore(): PXFDatasourceCore {
  return { $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceCore", defaultFs: "", securityAuthToLocal: "" };
}

export const PXFDatasourceCore = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceCore" as const,

  encode(message: PXFDatasourceCore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultFs !== "") {
      writer.uint32(10).string(message.defaultFs);
    }
    if (message.securityAuthToLocal !== "") {
      writer.uint32(18).string(message.securityAuthToLocal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceCore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceCore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultFs = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.securityAuthToLocal = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceCore {
    return {
      $type: PXFDatasourceCore.$type,
      defaultFs: isSet(object.defaultFs) ? globalThis.String(object.defaultFs) : "",
      securityAuthToLocal: isSet(object.securityAuthToLocal) ? globalThis.String(object.securityAuthToLocal) : "",
    };
  },

  toJSON(message: PXFDatasourceCore): unknown {
    const obj: any = {};
    if (message.defaultFs !== "") {
      obj.defaultFs = message.defaultFs;
    }
    if (message.securityAuthToLocal !== "") {
      obj.securityAuthToLocal = message.securityAuthToLocal;
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceCore>): PXFDatasourceCore {
    return PXFDatasourceCore.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceCore>): PXFDatasourceCore {
    const message = createBasePXFDatasourceCore();
    message.defaultFs = object.defaultFs ?? "";
    message.securityAuthToLocal = object.securityAuthToLocal ?? "";
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceCore.$type, PXFDatasourceCore);

function createBasePXFDatasourceKerberos(): PXFDatasourceKerberos {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceKerberos",
    enable: undefined,
    primary: "",
    realm: "",
    kdcServers: [],
    adminServer: "",
    defaultDomain: "",
    keytabBase64: "",
  };
}

export const PXFDatasourceKerberos = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceKerberos" as const,

  encode(message: PXFDatasourceKerberos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enable! }, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.primary !== "") {
      writer.uint32(18).string(message.primary);
    }
    if (message.realm !== "") {
      writer.uint32(26).string(message.realm);
    }
    for (const v of message.kdcServers) {
      writer.uint32(34).string(v!);
    }
    if (message.adminServer !== "") {
      writer.uint32(42).string(message.adminServer);
    }
    if (message.defaultDomain !== "") {
      writer.uint32(50).string(message.defaultDomain);
    }
    if (message.keytabBase64 !== "") {
      writer.uint32(58).string(message.keytabBase64);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceKerberos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceKerberos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.enable = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.primary = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.realm = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.kdcServers.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.adminServer = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.defaultDomain = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.keytabBase64 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceKerberos {
    return {
      $type: PXFDatasourceKerberos.$type,
      enable: isSet(object.enable) ? Boolean(object.enable) : undefined,
      primary: isSet(object.primary) ? globalThis.String(object.primary) : "",
      realm: isSet(object.realm) ? globalThis.String(object.realm) : "",
      kdcServers: globalThis.Array.isArray(object?.kdcServers)
        ? object.kdcServers.map((e: any) => globalThis.String(e))
        : [],
      adminServer: isSet(object.adminServer) ? globalThis.String(object.adminServer) : "",
      defaultDomain: isSet(object.defaultDomain) ? globalThis.String(object.defaultDomain) : "",
      keytabBase64: isSet(object.keytabBase64) ? globalThis.String(object.keytabBase64) : "",
    };
  },

  toJSON(message: PXFDatasourceKerberos): unknown {
    const obj: any = {};
    if (message.enable !== undefined) {
      obj.enable = message.enable;
    }
    if (message.primary !== "") {
      obj.primary = message.primary;
    }
    if (message.realm !== "") {
      obj.realm = message.realm;
    }
    if (message.kdcServers?.length) {
      obj.kdcServers = message.kdcServers;
    }
    if (message.adminServer !== "") {
      obj.adminServer = message.adminServer;
    }
    if (message.defaultDomain !== "") {
      obj.defaultDomain = message.defaultDomain;
    }
    if (message.keytabBase64 !== "") {
      obj.keytabBase64 = message.keytabBase64;
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceKerberos>): PXFDatasourceKerberos {
    return PXFDatasourceKerberos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceKerberos>): PXFDatasourceKerberos {
    const message = createBasePXFDatasourceKerberos();
    message.enable = object.enable ?? undefined;
    message.primary = object.primary ?? "";
    message.realm = object.realm ?? "";
    message.kdcServers = object.kdcServers?.map((e) => e) || [];
    message.adminServer = object.adminServer ?? "";
    message.defaultDomain = object.defaultDomain ?? "";
    message.keytabBase64 = object.keytabBase64 ?? "";
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceKerberos.$type, PXFDatasourceKerberos);

function createBasePXFDatasourceHDFSDfsNamenode(): PXFDatasourceHDFSDfsNamenode {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfsNamenode",
    rpcAddress: "",
    serviceRpcAddress: "",
    httpAddress: "",
    httpsAddress: "",
  };
}

export const PXFDatasourceHDFSDfsNamenode = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfsNamenode" as const,

  encode(message: PXFDatasourceHDFSDfsNamenode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rpcAddress !== "") {
      writer.uint32(10).string(message.rpcAddress);
    }
    if (message.serviceRpcAddress !== "") {
      writer.uint32(18).string(message.serviceRpcAddress);
    }
    if (message.httpAddress !== "") {
      writer.uint32(26).string(message.httpAddress);
    }
    if (message.httpsAddress !== "") {
      writer.uint32(34).string(message.httpsAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSDfsNamenode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceHDFSDfsNamenode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rpcAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serviceRpcAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.httpAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.httpsAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceHDFSDfsNamenode {
    return {
      $type: PXFDatasourceHDFSDfsNamenode.$type,
      rpcAddress: isSet(object.rpcAddress) ? globalThis.String(object.rpcAddress) : "",
      serviceRpcAddress: isSet(object.serviceRpcAddress) ? globalThis.String(object.serviceRpcAddress) : "",
      httpAddress: isSet(object.httpAddress) ? globalThis.String(object.httpAddress) : "",
      httpsAddress: isSet(object.httpsAddress) ? globalThis.String(object.httpsAddress) : "",
    };
  },

  toJSON(message: PXFDatasourceHDFSDfsNamenode): unknown {
    const obj: any = {};
    if (message.rpcAddress !== "") {
      obj.rpcAddress = message.rpcAddress;
    }
    if (message.serviceRpcAddress !== "") {
      obj.serviceRpcAddress = message.serviceRpcAddress;
    }
    if (message.httpAddress !== "") {
      obj.httpAddress = message.httpAddress;
    }
    if (message.httpsAddress !== "") {
      obj.httpsAddress = message.httpsAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceHDFSDfsNamenode>): PXFDatasourceHDFSDfsNamenode {
    return PXFDatasourceHDFSDfsNamenode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceHDFSDfsNamenode>): PXFDatasourceHDFSDfsNamenode {
    const message = createBasePXFDatasourceHDFSDfsNamenode();
    message.rpcAddress = object.rpcAddress ?? "";
    message.serviceRpcAddress = object.serviceRpcAddress ?? "";
    message.httpAddress = object.httpAddress ?? "";
    message.httpsAddress = object.httpsAddress ?? "";
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceHDFSDfsNamenode.$type, PXFDatasourceHDFSDfsNamenode);

function createBasePXFDatasourceHDFSDfs(): PXFDatasourceHDFSDfs {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfs",
    haAutomaticFailoverEnabled: undefined,
    blockAccessTokenEnabled: undefined,
    useDatanodeHostname: undefined,
    namenodes: {},
  };
}

export const PXFDatasourceHDFSDfs = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfs" as const,

  encode(message: PXFDatasourceHDFSDfs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.haAutomaticFailoverEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.haAutomaticFailoverEnabled! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.blockAccessTokenEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.blockAccessTokenEnabled! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.useDatanodeHostname !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.useDatanodeHostname! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    Object.entries(message.namenodes).forEach(([key, value]) => {
      PXFDatasourceHDFSDfs_NamenodesEntry.encode({
        $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfs.NamenodesEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSDfs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceHDFSDfs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.haAutomaticFailoverEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blockAccessTokenEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.useDatanodeHostname = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = PXFDatasourceHDFSDfs_NamenodesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.namenodes[entry4.key] = entry4.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceHDFSDfs {
    return {
      $type: PXFDatasourceHDFSDfs.$type,
      haAutomaticFailoverEnabled: isSet(object.haAutomaticFailoverEnabled)
        ? Boolean(object.haAutomaticFailoverEnabled)
        : undefined,
      blockAccessTokenEnabled: isSet(object.blockAccessTokenEnabled)
        ? Boolean(object.blockAccessTokenEnabled)
        : undefined,
      useDatanodeHostname: isSet(object.useDatanodeHostname) ? Boolean(object.useDatanodeHostname) : undefined,
      namenodes: isObject(object.namenodes)
        ? Object.entries(object.namenodes).reduce<{ [key: string]: PXFDatasourceHDFSDfsNamenode }>(
          (acc, [key, value]) => {
            acc[key] = PXFDatasourceHDFSDfsNamenode.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: PXFDatasourceHDFSDfs): unknown {
    const obj: any = {};
    if (message.haAutomaticFailoverEnabled !== undefined) {
      obj.haAutomaticFailoverEnabled = message.haAutomaticFailoverEnabled;
    }
    if (message.blockAccessTokenEnabled !== undefined) {
      obj.blockAccessTokenEnabled = message.blockAccessTokenEnabled;
    }
    if (message.useDatanodeHostname !== undefined) {
      obj.useDatanodeHostname = message.useDatanodeHostname;
    }
    if (message.namenodes) {
      const entries = Object.entries(message.namenodes);
      if (entries.length > 0) {
        obj.namenodes = {};
        entries.forEach(([k, v]) => {
          obj.namenodes[k] = PXFDatasourceHDFSDfsNamenode.toJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceHDFSDfs>): PXFDatasourceHDFSDfs {
    return PXFDatasourceHDFSDfs.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceHDFSDfs>): PXFDatasourceHDFSDfs {
    const message = createBasePXFDatasourceHDFSDfs();
    message.haAutomaticFailoverEnabled = object.haAutomaticFailoverEnabled ?? undefined;
    message.blockAccessTokenEnabled = object.blockAccessTokenEnabled ?? undefined;
    message.useDatanodeHostname = object.useDatanodeHostname ?? undefined;
    message.namenodes = Object.entries(object.namenodes ?? {}).reduce<{ [key: string]: PXFDatasourceHDFSDfsNamenode }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PXFDatasourceHDFSDfsNamenode.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceHDFSDfs.$type, PXFDatasourceHDFSDfs);

function createBasePXFDatasourceHDFSDfs_NamenodesEntry(): PXFDatasourceHDFSDfs_NamenodesEntry {
  return { $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfs.NamenodesEntry", key: "", value: undefined };
}

export const PXFDatasourceHDFSDfs_NamenodesEntry = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSDfs.NamenodesEntry" as const,

  encode(message: PXFDatasourceHDFSDfs_NamenodesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PXFDatasourceHDFSDfsNamenode.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSDfs_NamenodesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceHDFSDfs_NamenodesEntry();
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

          message.value = PXFDatasourceHDFSDfsNamenode.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceHDFSDfs_NamenodesEntry {
    return {
      $type: PXFDatasourceHDFSDfs_NamenodesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? PXFDatasourceHDFSDfsNamenode.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PXFDatasourceHDFSDfs_NamenodesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = PXFDatasourceHDFSDfsNamenode.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceHDFSDfs_NamenodesEntry>): PXFDatasourceHDFSDfs_NamenodesEntry {
    return PXFDatasourceHDFSDfs_NamenodesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceHDFSDfs_NamenodesEntry>): PXFDatasourceHDFSDfs_NamenodesEntry {
    const message = createBasePXFDatasourceHDFSDfs_NamenodesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PXFDatasourceHDFSDfsNamenode.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceHDFSDfs_NamenodesEntry.$type, PXFDatasourceHDFSDfs_NamenodesEntry);

function createBasePXFDatasourceHDFSYarnHaRm(): PXFDatasourceHDFSYarnHaRm {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarnHaRm",
    resourcemanagerAddress: "",
    resourcemanagerSchedulerAddress: "",
    resourcemanagerResourceTrackerAddress: "",
    resourcemanagerAdminAddress: "",
    resourcemanagerWebappAddress: "",
    resourcemanagerWebappHttpsAddress: "",
  };
}

export const PXFDatasourceHDFSYarnHaRm = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarnHaRm" as const,

  encode(message: PXFDatasourceHDFSYarnHaRm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourcemanagerAddress !== "") {
      writer.uint32(10).string(message.resourcemanagerAddress);
    }
    if (message.resourcemanagerSchedulerAddress !== "") {
      writer.uint32(18).string(message.resourcemanagerSchedulerAddress);
    }
    if (message.resourcemanagerResourceTrackerAddress !== "") {
      writer.uint32(26).string(message.resourcemanagerResourceTrackerAddress);
    }
    if (message.resourcemanagerAdminAddress !== "") {
      writer.uint32(34).string(message.resourcemanagerAdminAddress);
    }
    if (message.resourcemanagerWebappAddress !== "") {
      writer.uint32(42).string(message.resourcemanagerWebappAddress);
    }
    if (message.resourcemanagerWebappHttpsAddress !== "") {
      writer.uint32(50).string(message.resourcemanagerWebappHttpsAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSYarnHaRm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceHDFSYarnHaRm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourcemanagerAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourcemanagerSchedulerAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourcemanagerResourceTrackerAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resourcemanagerAdminAddress = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resourcemanagerWebappAddress = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.resourcemanagerWebappHttpsAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceHDFSYarnHaRm {
    return {
      $type: PXFDatasourceHDFSYarnHaRm.$type,
      resourcemanagerAddress: isSet(object.resourcemanagerAddress)
        ? globalThis.String(object.resourcemanagerAddress)
        : "",
      resourcemanagerSchedulerAddress: isSet(object.resourcemanagerSchedulerAddress)
        ? globalThis.String(object.resourcemanagerSchedulerAddress)
        : "",
      resourcemanagerResourceTrackerAddress: isSet(object.resourcemanagerResourceTrackerAddress)
        ? globalThis.String(object.resourcemanagerResourceTrackerAddress)
        : "",
      resourcemanagerAdminAddress: isSet(object.resourcemanagerAdminAddress)
        ? globalThis.String(object.resourcemanagerAdminAddress)
        : "",
      resourcemanagerWebappAddress: isSet(object.resourcemanagerWebappAddress)
        ? globalThis.String(object.resourcemanagerWebappAddress)
        : "",
      resourcemanagerWebappHttpsAddress: isSet(object.resourcemanagerWebappHttpsAddress)
        ? globalThis.String(object.resourcemanagerWebappHttpsAddress)
        : "",
    };
  },

  toJSON(message: PXFDatasourceHDFSYarnHaRm): unknown {
    const obj: any = {};
    if (message.resourcemanagerAddress !== "") {
      obj.resourcemanagerAddress = message.resourcemanagerAddress;
    }
    if (message.resourcemanagerSchedulerAddress !== "") {
      obj.resourcemanagerSchedulerAddress = message.resourcemanagerSchedulerAddress;
    }
    if (message.resourcemanagerResourceTrackerAddress !== "") {
      obj.resourcemanagerResourceTrackerAddress = message.resourcemanagerResourceTrackerAddress;
    }
    if (message.resourcemanagerAdminAddress !== "") {
      obj.resourcemanagerAdminAddress = message.resourcemanagerAdminAddress;
    }
    if (message.resourcemanagerWebappAddress !== "") {
      obj.resourcemanagerWebappAddress = message.resourcemanagerWebappAddress;
    }
    if (message.resourcemanagerWebappHttpsAddress !== "") {
      obj.resourcemanagerWebappHttpsAddress = message.resourcemanagerWebappHttpsAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceHDFSYarnHaRm>): PXFDatasourceHDFSYarnHaRm {
    return PXFDatasourceHDFSYarnHaRm.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceHDFSYarnHaRm>): PXFDatasourceHDFSYarnHaRm {
    const message = createBasePXFDatasourceHDFSYarnHaRm();
    message.resourcemanagerAddress = object.resourcemanagerAddress ?? "";
    message.resourcemanagerSchedulerAddress = object.resourcemanagerSchedulerAddress ?? "";
    message.resourcemanagerResourceTrackerAddress = object.resourcemanagerResourceTrackerAddress ?? "";
    message.resourcemanagerAdminAddress = object.resourcemanagerAdminAddress ?? "";
    message.resourcemanagerWebappAddress = object.resourcemanagerWebappAddress ?? "";
    message.resourcemanagerWebappHttpsAddress = object.resourcemanagerWebappHttpsAddress ?? "";
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceHDFSYarnHaRm.$type, PXFDatasourceHDFSYarnHaRm);

function createBasePXFDatasourceHDFSYarn(): PXFDatasourceHDFSYarn {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarn",
    resourcemanagerHaEnabled: undefined,
    resourcemanagerHaAutoFailoverEnabled: undefined,
    resourcemanagerHaAutoFailoverEmbedded: undefined,
    resourcemanagerClusterId: "",
    haRm: {},
  };
}

export const PXFDatasourceHDFSYarn = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarn" as const,

  encode(message: PXFDatasourceHDFSYarn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourcemanagerHaEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.resourcemanagerHaEnabled! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.resourcemanagerHaAutoFailoverEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.resourcemanagerHaAutoFailoverEnabled! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.resourcemanagerHaAutoFailoverEmbedded !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.resourcemanagerHaAutoFailoverEmbedded! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.resourcemanagerClusterId !== "") {
      writer.uint32(34).string(message.resourcemanagerClusterId);
    }
    Object.entries(message.haRm).forEach(([key, value]) => {
      PXFDatasourceHDFSYarn_HaRmEntry.encode({
        $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarn.HaRmEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSYarn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceHDFSYarn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourcemanagerHaEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourcemanagerHaAutoFailoverEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourcemanagerHaAutoFailoverEmbedded = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resourcemanagerClusterId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = PXFDatasourceHDFSYarn_HaRmEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.haRm[entry5.key] = entry5.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceHDFSYarn {
    return {
      $type: PXFDatasourceHDFSYarn.$type,
      resourcemanagerHaEnabled: isSet(object.resourcemanagerHaEnabled)
        ? Boolean(object.resourcemanagerHaEnabled)
        : undefined,
      resourcemanagerHaAutoFailoverEnabled: isSet(object.resourcemanagerHaAutoFailoverEnabled)
        ? Boolean(object.resourcemanagerHaAutoFailoverEnabled)
        : undefined,
      resourcemanagerHaAutoFailoverEmbedded: isSet(object.resourcemanagerHaAutoFailoverEmbedded)
        ? Boolean(object.resourcemanagerHaAutoFailoverEmbedded)
        : undefined,
      resourcemanagerClusterId: isSet(object.resourcemanagerClusterId)
        ? globalThis.String(object.resourcemanagerClusterId)
        : "",
      haRm: isObject(object.haRm)
        ? Object.entries(object.haRm).reduce<{ [key: string]: PXFDatasourceHDFSYarnHaRm }>((acc, [key, value]) => {
          acc[key] = PXFDatasourceHDFSYarnHaRm.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PXFDatasourceHDFSYarn): unknown {
    const obj: any = {};
    if (message.resourcemanagerHaEnabled !== undefined) {
      obj.resourcemanagerHaEnabled = message.resourcemanagerHaEnabled;
    }
    if (message.resourcemanagerHaAutoFailoverEnabled !== undefined) {
      obj.resourcemanagerHaAutoFailoverEnabled = message.resourcemanagerHaAutoFailoverEnabled;
    }
    if (message.resourcemanagerHaAutoFailoverEmbedded !== undefined) {
      obj.resourcemanagerHaAutoFailoverEmbedded = message.resourcemanagerHaAutoFailoverEmbedded;
    }
    if (message.resourcemanagerClusterId !== "") {
      obj.resourcemanagerClusterId = message.resourcemanagerClusterId;
    }
    if (message.haRm) {
      const entries = Object.entries(message.haRm);
      if (entries.length > 0) {
        obj.haRm = {};
        entries.forEach(([k, v]) => {
          obj.haRm[k] = PXFDatasourceHDFSYarnHaRm.toJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceHDFSYarn>): PXFDatasourceHDFSYarn {
    return PXFDatasourceHDFSYarn.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceHDFSYarn>): PXFDatasourceHDFSYarn {
    const message = createBasePXFDatasourceHDFSYarn();
    message.resourcemanagerHaEnabled = object.resourcemanagerHaEnabled ?? undefined;
    message.resourcemanagerHaAutoFailoverEnabled = object.resourcemanagerHaAutoFailoverEnabled ?? undefined;
    message.resourcemanagerHaAutoFailoverEmbedded = object.resourcemanagerHaAutoFailoverEmbedded ?? undefined;
    message.resourcemanagerClusterId = object.resourcemanagerClusterId ?? "";
    message.haRm = Object.entries(object.haRm ?? {}).reduce<{ [key: string]: PXFDatasourceHDFSYarnHaRm }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PXFDatasourceHDFSYarnHaRm.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceHDFSYarn.$type, PXFDatasourceHDFSYarn);

function createBasePXFDatasourceHDFSYarn_HaRmEntry(): PXFDatasourceHDFSYarn_HaRmEntry {
  return { $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarn.HaRmEntry", key: "", value: undefined };
}

export const PXFDatasourceHDFSYarn_HaRmEntry = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFSYarn.HaRmEntry" as const,

  encode(message: PXFDatasourceHDFSYarn_HaRmEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PXFDatasourceHDFSYarnHaRm.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSYarn_HaRmEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceHDFSYarn_HaRmEntry();
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

          message.value = PXFDatasourceHDFSYarnHaRm.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceHDFSYarn_HaRmEntry {
    return {
      $type: PXFDatasourceHDFSYarn_HaRmEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? PXFDatasourceHDFSYarnHaRm.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PXFDatasourceHDFSYarn_HaRmEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = PXFDatasourceHDFSYarnHaRm.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceHDFSYarn_HaRmEntry>): PXFDatasourceHDFSYarn_HaRmEntry {
    return PXFDatasourceHDFSYarn_HaRmEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceHDFSYarn_HaRmEntry>): PXFDatasourceHDFSYarn_HaRmEntry {
    const message = createBasePXFDatasourceHDFSYarn_HaRmEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PXFDatasourceHDFSYarnHaRm.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceHDFSYarn_HaRmEntry.$type, PXFDatasourceHDFSYarn_HaRmEntry);

function createBasePXFDatasourceHDFS(): PXFDatasourceHDFS {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFS",
    core: undefined,
    kerberos: undefined,
    userImpersonation: undefined,
    username: "",
    saslConnectionRetries: undefined,
    zkHosts: [],
    dfs: undefined,
    yarn: undefined,
  };
}

export const PXFDatasourceHDFS = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHDFS" as const,

  encode(message: PXFDatasourceHDFS, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.core !== undefined) {
      PXFDatasourceCore.encode(message.core, writer.uint32(10).fork()).ldelim();
    }
    if (message.kerberos !== undefined) {
      PXFDatasourceKerberos.encode(message.kerberos, writer.uint32(18).fork()).ldelim();
    }
    if (message.userImpersonation !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.userImpersonation! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.username !== "") {
      writer.uint32(34).string(message.username);
    }
    if (message.saslConnectionRetries !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.saslConnectionRetries! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    for (const v of message.zkHosts) {
      writer.uint32(50).string(v!);
    }
    if (message.dfs !== undefined) {
      PXFDatasourceHDFSDfs.encode(message.dfs, writer.uint32(58).fork()).ldelim();
    }
    if (message.yarn !== undefined) {
      PXFDatasourceHDFSYarn.encode(message.yarn, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFS {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceHDFS();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.core = PXFDatasourceCore.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kerberos = PXFDatasourceKerberos.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userImpersonation = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.username = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.saslConnectionRetries = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.zkHosts.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.dfs = PXFDatasourceHDFSDfs.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.yarn = PXFDatasourceHDFSYarn.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceHDFS {
    return {
      $type: PXFDatasourceHDFS.$type,
      core: isSet(object.core) ? PXFDatasourceCore.fromJSON(object.core) : undefined,
      kerberos: isSet(object.kerberos) ? PXFDatasourceKerberos.fromJSON(object.kerberos) : undefined,
      userImpersonation: isSet(object.userImpersonation) ? Boolean(object.userImpersonation) : undefined,
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      saslConnectionRetries: isSet(object.saslConnectionRetries) ? Number(object.saslConnectionRetries) : undefined,
      zkHosts: globalThis.Array.isArray(object?.zkHosts) ? object.zkHosts.map((e: any) => globalThis.String(e)) : [],
      dfs: isSet(object.dfs) ? PXFDatasourceHDFSDfs.fromJSON(object.dfs) : undefined,
      yarn: isSet(object.yarn) ? PXFDatasourceHDFSYarn.fromJSON(object.yarn) : undefined,
    };
  },

  toJSON(message: PXFDatasourceHDFS): unknown {
    const obj: any = {};
    if (message.core !== undefined) {
      obj.core = PXFDatasourceCore.toJSON(message.core);
    }
    if (message.kerberos !== undefined) {
      obj.kerberos = PXFDatasourceKerberos.toJSON(message.kerberos);
    }
    if (message.userImpersonation !== undefined) {
      obj.userImpersonation = message.userImpersonation;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.saslConnectionRetries !== undefined) {
      obj.saslConnectionRetries = message.saslConnectionRetries;
    }
    if (message.zkHosts?.length) {
      obj.zkHosts = message.zkHosts;
    }
    if (message.dfs !== undefined) {
      obj.dfs = PXFDatasourceHDFSDfs.toJSON(message.dfs);
    }
    if (message.yarn !== undefined) {
      obj.yarn = PXFDatasourceHDFSYarn.toJSON(message.yarn);
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceHDFS>): PXFDatasourceHDFS {
    return PXFDatasourceHDFS.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceHDFS>): PXFDatasourceHDFS {
    const message = createBasePXFDatasourceHDFS();
    message.core = (object.core !== undefined && object.core !== null)
      ? PXFDatasourceCore.fromPartial(object.core)
      : undefined;
    message.kerberos = (object.kerberos !== undefined && object.kerberos !== null)
      ? PXFDatasourceKerberos.fromPartial(object.kerberos)
      : undefined;
    message.userImpersonation = object.userImpersonation ?? undefined;
    message.username = object.username ?? "";
    message.saslConnectionRetries = object.saslConnectionRetries ?? undefined;
    message.zkHosts = object.zkHosts?.map((e) => e) || [];
    message.dfs = (object.dfs !== undefined && object.dfs !== null)
      ? PXFDatasourceHDFSDfs.fromPartial(object.dfs)
      : undefined;
    message.yarn = (object.yarn !== undefined && object.yarn !== null)
      ? PXFDatasourceHDFSYarn.fromPartial(object.yarn)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceHDFS.$type, PXFDatasourceHDFS);

function createBasePXFDatasourceHive(): PXFDatasourceHive {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHive",
    core: undefined,
    kerberos: undefined,
    userImpersonation: undefined,
    username: "",
    saslConnectionRetries: undefined,
    zkHosts: [],
    ppd: undefined,
    metastoreUris: [],
    metastoreKerberosPrincipal: "",
    authKerberosPrincipal: "",
  };
}

export const PXFDatasourceHive = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasourceHive" as const,

  encode(message: PXFDatasourceHive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.core !== undefined) {
      PXFDatasourceCore.encode(message.core, writer.uint32(10).fork()).ldelim();
    }
    if (message.kerberos !== undefined) {
      PXFDatasourceKerberos.encode(message.kerberos, writer.uint32(18).fork()).ldelim();
    }
    if (message.userImpersonation !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.userImpersonation! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.username !== "") {
      writer.uint32(34).string(message.username);
    }
    if (message.saslConnectionRetries !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.saslConnectionRetries! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    for (const v of message.zkHosts) {
      writer.uint32(50).string(v!);
    }
    if (message.ppd !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.ppd! }, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.metastoreUris) {
      writer.uint32(66).string(v!);
    }
    if (message.metastoreKerberosPrincipal !== "") {
      writer.uint32(74).string(message.metastoreKerberosPrincipal);
    }
    if (message.authKerberosPrincipal !== "") {
      writer.uint32(82).string(message.authKerberosPrincipal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHive {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasourceHive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.core = PXFDatasourceCore.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kerberos = PXFDatasourceKerberos.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userImpersonation = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.username = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.saslConnectionRetries = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.zkHosts.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ppd = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.metastoreUris.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.metastoreKerberosPrincipal = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.authKerberosPrincipal = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasourceHive {
    return {
      $type: PXFDatasourceHive.$type,
      core: isSet(object.core) ? PXFDatasourceCore.fromJSON(object.core) : undefined,
      kerberos: isSet(object.kerberos) ? PXFDatasourceKerberos.fromJSON(object.kerberos) : undefined,
      userImpersonation: isSet(object.userImpersonation) ? Boolean(object.userImpersonation) : undefined,
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      saslConnectionRetries: isSet(object.saslConnectionRetries) ? Number(object.saslConnectionRetries) : undefined,
      zkHosts: globalThis.Array.isArray(object?.zkHosts) ? object.zkHosts.map((e: any) => globalThis.String(e)) : [],
      ppd: isSet(object.ppd) ? Boolean(object.ppd) : undefined,
      metastoreUris: globalThis.Array.isArray(object?.metastoreUris)
        ? object.metastoreUris.map((e: any) => globalThis.String(e))
        : [],
      metastoreKerberosPrincipal: isSet(object.metastoreKerberosPrincipal)
        ? globalThis.String(object.metastoreKerberosPrincipal)
        : "",
      authKerberosPrincipal: isSet(object.authKerberosPrincipal) ? globalThis.String(object.authKerberosPrincipal) : "",
    };
  },

  toJSON(message: PXFDatasourceHive): unknown {
    const obj: any = {};
    if (message.core !== undefined) {
      obj.core = PXFDatasourceCore.toJSON(message.core);
    }
    if (message.kerberos !== undefined) {
      obj.kerberos = PXFDatasourceKerberos.toJSON(message.kerberos);
    }
    if (message.userImpersonation !== undefined) {
      obj.userImpersonation = message.userImpersonation;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.saslConnectionRetries !== undefined) {
      obj.saslConnectionRetries = message.saslConnectionRetries;
    }
    if (message.zkHosts?.length) {
      obj.zkHosts = message.zkHosts;
    }
    if (message.ppd !== undefined) {
      obj.ppd = message.ppd;
    }
    if (message.metastoreUris?.length) {
      obj.metastoreUris = message.metastoreUris;
    }
    if (message.metastoreKerberosPrincipal !== "") {
      obj.metastoreKerberosPrincipal = message.metastoreKerberosPrincipal;
    }
    if (message.authKerberosPrincipal !== "") {
      obj.authKerberosPrincipal = message.authKerberosPrincipal;
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasourceHive>): PXFDatasourceHive {
    return PXFDatasourceHive.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasourceHive>): PXFDatasourceHive {
    const message = createBasePXFDatasourceHive();
    message.core = (object.core !== undefined && object.core !== null)
      ? PXFDatasourceCore.fromPartial(object.core)
      : undefined;
    message.kerberos = (object.kerberos !== undefined && object.kerberos !== null)
      ? PXFDatasourceKerberos.fromPartial(object.kerberos)
      : undefined;
    message.userImpersonation = object.userImpersonation ?? undefined;
    message.username = object.username ?? "";
    message.saslConnectionRetries = object.saslConnectionRetries ?? undefined;
    message.zkHosts = object.zkHosts?.map((e) => e) || [];
    message.ppd = object.ppd ?? undefined;
    message.metastoreUris = object.metastoreUris?.map((e) => e) || [];
    message.metastoreKerberosPrincipal = object.metastoreKerberosPrincipal ?? "";
    message.authKerberosPrincipal = object.authKerberosPrincipal ?? "";
    return message;
  },
};

messageTypeRegistry.set(PXFDatasourceHive.$type, PXFDatasourceHive);

function createBasePXFDatasource(): PXFDatasource {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasource",
    name: "",
    s3: undefined,
    jdbc: undefined,
    hdfs: undefined,
    hive: undefined,
  };
}

export const PXFDatasource = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFDatasource" as const,

  encode(message: PXFDatasource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.s3 !== undefined) {
      PXFDatasourceS3.encode(message.s3, writer.uint32(18).fork()).ldelim();
    }
    if (message.jdbc !== undefined) {
      PXFDatasourceJDBC.encode(message.jdbc, writer.uint32(26).fork()).ldelim();
    }
    if (message.hdfs !== undefined) {
      PXFDatasourceHDFS.encode(message.hdfs, writer.uint32(34).fork()).ldelim();
    }
    if (message.hive !== undefined) {
      PXFDatasourceHive.encode(message.hive, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFDatasource();
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

          message.s3 = PXFDatasourceS3.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jdbc = PXFDatasourceJDBC.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hdfs = PXFDatasourceHDFS.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.hive = PXFDatasourceHive.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFDatasource {
    return {
      $type: PXFDatasource.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      s3: isSet(object.s3) ? PXFDatasourceS3.fromJSON(object.s3) : undefined,
      jdbc: isSet(object.jdbc) ? PXFDatasourceJDBC.fromJSON(object.jdbc) : undefined,
      hdfs: isSet(object.hdfs) ? PXFDatasourceHDFS.fromJSON(object.hdfs) : undefined,
      hive: isSet(object.hive) ? PXFDatasourceHive.fromJSON(object.hive) : undefined,
    };
  },

  toJSON(message: PXFDatasource): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.s3 !== undefined) {
      obj.s3 = PXFDatasourceS3.toJSON(message.s3);
    }
    if (message.jdbc !== undefined) {
      obj.jdbc = PXFDatasourceJDBC.toJSON(message.jdbc);
    }
    if (message.hdfs !== undefined) {
      obj.hdfs = PXFDatasourceHDFS.toJSON(message.hdfs);
    }
    if (message.hive !== undefined) {
      obj.hive = PXFDatasourceHive.toJSON(message.hive);
    }
    return obj;
  },

  create(base?: DeepPartial<PXFDatasource>): PXFDatasource {
    return PXFDatasource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFDatasource>): PXFDatasource {
    const message = createBasePXFDatasource();
    message.name = object.name ?? "";
    message.s3 = (object.s3 !== undefined && object.s3 !== null) ? PXFDatasourceS3.fromPartial(object.s3) : undefined;
    message.jdbc = (object.jdbc !== undefined && object.jdbc !== null)
      ? PXFDatasourceJDBC.fromPartial(object.jdbc)
      : undefined;
    message.hdfs = (object.hdfs !== undefined && object.hdfs !== null)
      ? PXFDatasourceHDFS.fromPartial(object.hdfs)
      : undefined;
    message.hive = (object.hive !== undefined && object.hive !== null)
      ? PXFDatasourceHive.fromPartial(object.hive)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFDatasource.$type, PXFDatasource);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
