/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import {
  CleanupPolicy,
  cleanupPolicyFromJSON,
  cleanupPolicyToJSON,
  ObjectTransferStage,
  objectTransferStageFromJSON,
  objectTransferStageToJSON,
  Secret,
  TLSMode,
} from "./common";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export interface OnPremiseMysql {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql";
  hosts: string[];
  /** Database port */
  port: number;
  /** TLS settings for server connection. Disabled by default. */
  tlsMode?:
    | TLSMode
    | undefined;
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
}

export interface MysqlConnection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection";
  /** Managed Service for MySQL cluster ID */
  mdbClusterId?:
    | string
    | undefined;
  /** Connection options for on-premise MySQL */
  onPremise?: OnPremiseMysql | undefined;
}

export interface MysqlObjectTransferSettings {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings";
  /**
   * Views
   *
   * CREATE VIEW ...
   */
  view: ObjectTransferStage;
  /**
   * Routines
   *
   * CREATE PROCEDURE ... ; CREATE FUNCTION ... ;
   */
  routine: ObjectTransferStage;
  /**
   * Triggers
   *
   * CREATE TRIGGER ...
   */
  trigger: ObjectTransferStage;
  tables: ObjectTransferStage;
}

export interface MysqlSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource";
  /** Database connection settings */
  connection?:
    | MysqlConnection
    | undefined;
  /** Security groups */
  securityGroups: string[];
  /**
   * Database name
   *
   * You can leave it empty, then it will be possible to transfer tables from several
   * databases at the same time from this source.
   */
  database: string;
  /**
   * Database for service tables
   *
   * Default: data source database. Here created technical tables (__tm_keeper,
   * __tm_gtid_keeper).
   */
  serviceDatabase: string;
  /** User for database access. */
  user: string;
  /** Password for database access. */
  password?: Secret | undefined;
  includeTablesRegex: string[];
  excludeTablesRegex: string[];
  /**
   * Database timezone
   *
   * Is used for parsing timestamps for saving source timezones. Accepts values from
   * IANA timezone database. Default: local timezone.
   */
  timezone: string;
  /**
   * Schema migration
   *
   * Select database objects to be transferred during activation or deactivation.
   */
  objectTransferSettings?: MysqlObjectTransferSettings | undefined;
}

export interface MysqlTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget";
  /** Database connection settings */
  connection?:
    | MysqlConnection
    | undefined;
  /** Security groups */
  securityGroups: string[];
  /**
   * Database name
   *
   * Allowed to leave it empty, then the tables will be created in databases with the
   * same names as on the source. If this field is empty, then you must fill below db
   * schema for service table.
   */
  database: string;
  /** User for database access. */
  user: string;
  /** Password for database access. */
  password?:
    | Secret
    | undefined;
  /** Default: NO_AUTO_VALUE_ON_ZERO,NO_DIR_IN_CREATE,NO_ENGINE_SUBSTITUTION. */
  sqlMode: string;
  /**
   * Disable constraints checks
   *
   * Recommend to disable for increase replication speed, but if schema contain
   * cascading operations we don't recommend to disable. This option set
   * FOREIGN_KEY_CHECKS=0 and UNIQUE_CHECKS=0.
   */
  skipConstraintChecks: boolean;
  /**
   * Database timezone
   *
   * Is used for parsing timestamps for saving source timezones. Accepts values from
   * IANA timezone database. Default: local timezone.
   */
  timezone: string;
  /**
   * Cleanup policy
   *
   * Cleanup policy for activate, reactivate and reupload processes. Default is
   * DISABLED.
   */
  cleanupPolicy: CleanupPolicy;
  /**
   * Database schema for service table
   *
   * Default: db name. Here created technical tables (__tm_keeper, __tm_gtid_keeper).
   */
  serviceDatabase: string;
}

function createBaseOnPremiseMysql(): OnPremiseMysql {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql",
    hosts: [],
    port: 0,
    tlsMode: undefined,
    subnetId: "",
  };
}

export const OnPremiseMysql = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql" as const,

  encode(message: OnPremiseMysql, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hosts) {
      writer.uint32(42).string(v!);
    }
    if (message.port !== 0) {
      writer.uint32(16).int64(message.port);
    }
    if (message.tlsMode !== undefined) {
      TLSMode.encode(message.tlsMode, writer.uint32(50).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(34).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnPremiseMysql {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnPremiseMysql();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.hosts.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tlsMode = TLSMode.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OnPremiseMysql {
    return {
      $type: OnPremiseMysql.$type,
      hosts: globalThis.Array.isArray(object?.hosts) ? object.hosts.map((e: any) => globalThis.String(e)) : [],
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      tlsMode: isSet(object.tlsMode) ? TLSMode.fromJSON(object.tlsMode) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: OnPremiseMysql): unknown {
    const obj: any = {};
    if (message.hosts?.length) {
      obj.hosts = message.hosts;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.tlsMode !== undefined) {
      obj.tlsMode = TLSMode.toJSON(message.tlsMode);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OnPremiseMysql>, I>>(base?: I): OnPremiseMysql {
    return OnPremiseMysql.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OnPremiseMysql>, I>>(object: I): OnPremiseMysql {
    const message = createBaseOnPremiseMysql();
    message.hosts = object.hosts?.map((e) => e) || [];
    message.port = object.port ?? 0;
    message.tlsMode = (object.tlsMode !== undefined && object.tlsMode !== null)
      ? TLSMode.fromPartial(object.tlsMode)
      : undefined;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(OnPremiseMysql.$type, OnPremiseMysql);

function createBaseMysqlConnection(): MysqlConnection {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection",
    mdbClusterId: undefined,
    onPremise: undefined,
  };
}

export const MysqlConnection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection" as const,

  encode(message: MysqlConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mdbClusterId !== undefined) {
      writer.uint32(10).string(message.mdbClusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremiseMysql.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMysqlConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mdbClusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.onPremise = OnPremiseMysql.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MysqlConnection {
    return {
      $type: MysqlConnection.$type,
      mdbClusterId: isSet(object.mdbClusterId) ? globalThis.String(object.mdbClusterId) : undefined,
      onPremise: isSet(object.onPremise) ? OnPremiseMysql.fromJSON(object.onPremise) : undefined,
    };
  },

  toJSON(message: MysqlConnection): unknown {
    const obj: any = {};
    if (message.mdbClusterId !== undefined) {
      obj.mdbClusterId = message.mdbClusterId;
    }
    if (message.onPremise !== undefined) {
      obj.onPremise = OnPremiseMysql.toJSON(message.onPremise);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MysqlConnection>, I>>(base?: I): MysqlConnection {
    return MysqlConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MysqlConnection>, I>>(object: I): MysqlConnection {
    const message = createBaseMysqlConnection();
    message.mdbClusterId = object.mdbClusterId ?? undefined;
    message.onPremise = (object.onPremise !== undefined && object.onPremise !== null)
      ? OnPremiseMysql.fromPartial(object.onPremise)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MysqlConnection.$type, MysqlConnection);

function createBaseMysqlObjectTransferSettings(): MysqlObjectTransferSettings {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings",
    view: 0,
    routine: 0,
    trigger: 0,
    tables: 0,
  };
}

export const MysqlObjectTransferSettings = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings" as const,

  encode(message: MysqlObjectTransferSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.view !== 0) {
      writer.uint32(8).int32(message.view);
    }
    if (message.routine !== 0) {
      writer.uint32(16).int32(message.routine);
    }
    if (message.trigger !== 0) {
      writer.uint32(24).int32(message.trigger);
    }
    if (message.tables !== 0) {
      writer.uint32(32).int32(message.tables);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlObjectTransferSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMysqlObjectTransferSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.view = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.routine = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.trigger = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.tables = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MysqlObjectTransferSettings {
    return {
      $type: MysqlObjectTransferSettings.$type,
      view: isSet(object.view) ? objectTransferStageFromJSON(object.view) : 0,
      routine: isSet(object.routine) ? objectTransferStageFromJSON(object.routine) : 0,
      trigger: isSet(object.trigger) ? objectTransferStageFromJSON(object.trigger) : 0,
      tables: isSet(object.tables) ? objectTransferStageFromJSON(object.tables) : 0,
    };
  },

  toJSON(message: MysqlObjectTransferSettings): unknown {
    const obj: any = {};
    if (message.view !== 0) {
      obj.view = objectTransferStageToJSON(message.view);
    }
    if (message.routine !== 0) {
      obj.routine = objectTransferStageToJSON(message.routine);
    }
    if (message.trigger !== 0) {
      obj.trigger = objectTransferStageToJSON(message.trigger);
    }
    if (message.tables !== 0) {
      obj.tables = objectTransferStageToJSON(message.tables);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MysqlObjectTransferSettings>, I>>(base?: I): MysqlObjectTransferSettings {
    return MysqlObjectTransferSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MysqlObjectTransferSettings>, I>>(object: I): MysqlObjectTransferSettings {
    const message = createBaseMysqlObjectTransferSettings();
    message.view = object.view ?? 0;
    message.routine = object.routine ?? 0;
    message.trigger = object.trigger ?? 0;
    message.tables = object.tables ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MysqlObjectTransferSettings.$type, MysqlObjectTransferSettings);

function createBaseMysqlSource(): MysqlSource {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource",
    connection: undefined,
    securityGroups: [],
    database: "",
    serviceDatabase: "",
    user: "",
    password: undefined,
    includeTablesRegex: [],
    excludeTablesRegex: [],
    timezone: "",
    objectTransferSettings: undefined,
  };
}

export const MysqlSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource" as const,

  encode(message: MysqlSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      MysqlConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(114).string(v!);
    }
    if (message.database !== "") {
      writer.uint32(18).string(message.database);
    }
    if (message.serviceDatabase !== "") {
      writer.uint32(122).string(message.serviceDatabase);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.includeTablesRegex) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.excludeTablesRegex) {
      writer.uint32(106).string(v!);
    }
    if (message.timezone !== "") {
      writer.uint32(66).string(message.timezone);
    }
    if (message.objectTransferSettings !== undefined) {
      MysqlObjectTransferSettings.encode(message.objectTransferSettings, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMysqlSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = MysqlConnection.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.database = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.serviceDatabase = reader.string();
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

          message.password = Secret.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.includeTablesRegex.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.excludeTablesRegex.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.timezone = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.objectTransferSettings = MysqlObjectTransferSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MysqlSource {
    return {
      $type: MysqlSource.$type,
      connection: isSet(object.connection) ? MysqlConnection.fromJSON(object.connection) : undefined,
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      serviceDatabase: isSet(object.serviceDatabase) ? globalThis.String(object.serviceDatabase) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? Secret.fromJSON(object.password) : undefined,
      includeTablesRegex: globalThis.Array.isArray(object?.includeTablesRegex)
        ? object.includeTablesRegex.map((e: any) => globalThis.String(e))
        : [],
      excludeTablesRegex: globalThis.Array.isArray(object?.excludeTablesRegex)
        ? object.excludeTablesRegex.map((e: any) => globalThis.String(e))
        : [],
      timezone: isSet(object.timezone) ? globalThis.String(object.timezone) : "",
      objectTransferSettings: isSet(object.objectTransferSettings)
        ? MysqlObjectTransferSettings.fromJSON(object.objectTransferSettings)
        : undefined,
    };
  },

  toJSON(message: MysqlSource): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = MysqlConnection.toJSON(message.connection);
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
    }
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.serviceDatabase !== "") {
      obj.serviceDatabase = message.serviceDatabase;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== undefined) {
      obj.password = Secret.toJSON(message.password);
    }
    if (message.includeTablesRegex?.length) {
      obj.includeTablesRegex = message.includeTablesRegex;
    }
    if (message.excludeTablesRegex?.length) {
      obj.excludeTablesRegex = message.excludeTablesRegex;
    }
    if (message.timezone !== "") {
      obj.timezone = message.timezone;
    }
    if (message.objectTransferSettings !== undefined) {
      obj.objectTransferSettings = MysqlObjectTransferSettings.toJSON(message.objectTransferSettings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MysqlSource>, I>>(base?: I): MysqlSource {
    return MysqlSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MysqlSource>, I>>(object: I): MysqlSource {
    const message = createBaseMysqlSource();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? MysqlConnection.fromPartial(object.connection)
      : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.serviceDatabase = object.serviceDatabase ?? "";
    message.user = object.user ?? "";
    message.password = (object.password !== undefined && object.password !== null)
      ? Secret.fromPartial(object.password)
      : undefined;
    message.includeTablesRegex = object.includeTablesRegex?.map((e) => e) || [];
    message.excludeTablesRegex = object.excludeTablesRegex?.map((e) => e) || [];
    message.timezone = object.timezone ?? "";
    message.objectTransferSettings =
      (object.objectTransferSettings !== undefined && object.objectTransferSettings !== null)
        ? MysqlObjectTransferSettings.fromPartial(object.objectTransferSettings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MysqlSource.$type, MysqlSource);

function createBaseMysqlTarget(): MysqlTarget {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget",
    connection: undefined,
    securityGroups: [],
    database: "",
    user: "",
    password: undefined,
    sqlMode: "",
    skipConstraintChecks: false,
    timezone: "",
    cleanupPolicy: 0,
    serviceDatabase: "",
  };
}

export const MysqlTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget" as const,

  encode(message: MysqlTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      MysqlConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(130).string(v!);
    }
    if (message.database !== "") {
      writer.uint32(18).string(message.database);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
    }
    if (message.sqlMode !== "") {
      writer.uint32(42).string(message.sqlMode);
    }
    if (message.skipConstraintChecks === true) {
      writer.uint32(48).bool(message.skipConstraintChecks);
    }
    if (message.timezone !== "") {
      writer.uint32(58).string(message.timezone);
    }
    if (message.cleanupPolicy !== 0) {
      writer.uint32(64).int32(message.cleanupPolicy);
    }
    if (message.serviceDatabase !== "") {
      writer.uint32(122).string(message.serviceDatabase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMysqlTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = MysqlConnection.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.database = reader.string();
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

          message.password = Secret.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sqlMode = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.skipConstraintChecks = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.timezone = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.cleanupPolicy = reader.int32() as any;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.serviceDatabase = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MysqlTarget {
    return {
      $type: MysqlTarget.$type,
      connection: isSet(object.connection) ? MysqlConnection.fromJSON(object.connection) : undefined,
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? Secret.fromJSON(object.password) : undefined,
      sqlMode: isSet(object.sqlMode) ? globalThis.String(object.sqlMode) : "",
      skipConstraintChecks: isSet(object.skipConstraintChecks)
        ? globalThis.Boolean(object.skipConstraintChecks)
        : false,
      timezone: isSet(object.timezone) ? globalThis.String(object.timezone) : "",
      cleanupPolicy: isSet(object.cleanupPolicy) ? cleanupPolicyFromJSON(object.cleanupPolicy) : 0,
      serviceDatabase: isSet(object.serviceDatabase) ? globalThis.String(object.serviceDatabase) : "",
    };
  },

  toJSON(message: MysqlTarget): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = MysqlConnection.toJSON(message.connection);
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
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
    if (message.sqlMode !== "") {
      obj.sqlMode = message.sqlMode;
    }
    if (message.skipConstraintChecks === true) {
      obj.skipConstraintChecks = message.skipConstraintChecks;
    }
    if (message.timezone !== "") {
      obj.timezone = message.timezone;
    }
    if (message.cleanupPolicy !== 0) {
      obj.cleanupPolicy = cleanupPolicyToJSON(message.cleanupPolicy);
    }
    if (message.serviceDatabase !== "") {
      obj.serviceDatabase = message.serviceDatabase;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MysqlTarget>, I>>(base?: I): MysqlTarget {
    return MysqlTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MysqlTarget>, I>>(object: I): MysqlTarget {
    const message = createBaseMysqlTarget();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? MysqlConnection.fromPartial(object.connection)
      : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.password = (object.password !== undefined && object.password !== null)
      ? Secret.fromPartial(object.password)
      : undefined;
    message.sqlMode = object.sqlMode ?? "";
    message.skipConstraintChecks = object.skipConstraintChecks ?? false;
    message.timezone = object.timezone ?? "";
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    message.serviceDatabase = object.serviceDatabase ?? "";
    return message;
  },
};

messageTypeRegistry.set(MysqlTarget.$type, MysqlTarget);

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
