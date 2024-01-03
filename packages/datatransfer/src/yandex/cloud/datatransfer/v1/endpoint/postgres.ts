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

export interface PostgresObjectTransferSettings {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings";
  /**
   * Sequences
   *
   * CREATE SEQUENCE ...
   */
  sequence: ObjectTransferStage;
  /**
   * Owned sequences
   *
   * CREATE SEQUENCE ... OWNED BY ...
   */
  sequenceOwnedBy: ObjectTransferStage;
  /**  */
  sequenceSet: ObjectTransferStage;
  /**
   * Tables
   *
   * CREATE TABLE ...
   */
  table: ObjectTransferStage;
  /**
   * Primary keys
   *
   * ALTER TABLE ... ADD PRIMARY KEY ...
   */
  primaryKey: ObjectTransferStage;
  /**
   * Foreign keys
   *
   * ALTER TABLE ... ADD FOREIGN KEY ...
   */
  fkConstraint: ObjectTransferStage;
  /**
   * Default values
   *
   * ALTER TABLE ... ALTER COLUMN ... SET DEFAULT ...
   */
  defaultValues: ObjectTransferStage;
  /**
   * Constraints
   *
   * ALTER TABLE ... ADD CONSTRAINT ...
   */
  constraint: ObjectTransferStage;
  /**
   * Indexes
   *
   * CREATE INDEX ...
   */
  index: ObjectTransferStage;
  /**
   * Views
   *
   * CREATE VIEW ...
   */
  view: ObjectTransferStage;
  /**
   * Materialized views
   *
   * CREATE MATERIALIZED VIEW ...
   */
  materializedView: ObjectTransferStage;
  /**
   * Functions
   *
   * CREATE FUNCTION ...
   */
  function: ObjectTransferStage;
  /**
   * Triggers
   *
   * CREATE TRIGGER ...
   */
  trigger: ObjectTransferStage;
  /**
   * Types
   *
   * CREATE TYPE ...
   */
  type: ObjectTransferStage;
  /**
   * Rules
   *
   * CREATE RULE ...
   */
  rule: ObjectTransferStage;
  /**
   * Collations
   *
   * CREATE COLLATION ...
   */
  collation: ObjectTransferStage;
  /**
   * Policies
   *
   * CREATE POLICY ...
   */
  policy: ObjectTransferStage;
  /**
   * Casts
   *
   * CREATE CAST ...
   */
  cast: ObjectTransferStage;
}

export interface OnPremisePostgres {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres";
  hosts: string[];
  /** Will be used if the cluster ID is not specified. */
  port: number;
  /** TLS settings for server connection. Disabled by default. */
  tlsMode?:
    | TLSMode
    | undefined;
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
}

export interface PostgresConnection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection";
  /** Managed Service for PostgreSQL cluster ID */
  mdbClusterId?:
    | string
    | undefined;
  /** Connection options for on-premise PostgreSQL */
  onPremise?: OnPremisePostgres | undefined;
}

export interface PostgresSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource";
  /** Database connection settings */
  connection?:
    | PostgresConnection
    | undefined;
  /** Security groups */
  securityGroups: string[];
  /** Database name */
  database: string;
  /** User for database access. */
  user: string;
  /** Password for database access. */
  password?:
    | Secret
    | undefined;
  /**
   * Included tables
   *
   * If none or empty list is presented, all tables are replicated. Full table name
   * with schema. Can contain schema_name.* patterns.
   */
  includeTables: string[];
  /**
   * Excluded tables
   *
   * If none or empty list is presented, all tables are replicated. Full table name
   * with schema. Can contain schema_name.* patterns.
   */
  excludeTables: string[];
  /**
   * Maximum lag of replication slot (in bytes); after exceeding this limit
   * replication will be aborted.
   */
  slotByteLagLimit: number;
  /**
   * Database schema for service tables (__consumer_keeper,
   * __data_transfer_mole_finder). Default is public
   */
  serviceSchema: string;
  /** Select database objects to be transferred during activation or deactivation. */
  objectTransferSettings?: PostgresObjectTransferSettings | undefined;
}

export interface PostgresTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget";
  /** Database connection settings */
  connection?:
    | PostgresConnection
    | undefined;
  /** Security groups */
  securityGroups: string[];
  /** Database name */
  database: string;
  /** User for database access. */
  user: string;
  /** Password for database access. */
  password?:
    | Secret
    | undefined;
  /**
   * Cleanup policy for activate, reactivate and reupload processes. Default is
   * truncate.
   */
  cleanupPolicy: CleanupPolicy;
}

function createBasePostgresObjectTransferSettings(): PostgresObjectTransferSettings {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings",
    sequence: 0,
    sequenceOwnedBy: 0,
    sequenceSet: 0,
    table: 0,
    primaryKey: 0,
    fkConstraint: 0,
    defaultValues: 0,
    constraint: 0,
    index: 0,
    view: 0,
    materializedView: 0,
    function: 0,
    trigger: 0,
    type: 0,
    rule: 0,
    collation: 0,
    policy: 0,
    cast: 0,
  };
}

export const PostgresObjectTransferSettings = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings" as const,

  encode(message: PostgresObjectTransferSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).int32(message.sequence);
    }
    if (message.sequenceOwnedBy !== 0) {
      writer.uint32(16).int32(message.sequenceOwnedBy);
    }
    if (message.sequenceSet !== 0) {
      writer.uint32(144).int32(message.sequenceSet);
    }
    if (message.table !== 0) {
      writer.uint32(24).int32(message.table);
    }
    if (message.primaryKey !== 0) {
      writer.uint32(32).int32(message.primaryKey);
    }
    if (message.fkConstraint !== 0) {
      writer.uint32(40).int32(message.fkConstraint);
    }
    if (message.defaultValues !== 0) {
      writer.uint32(48).int32(message.defaultValues);
    }
    if (message.constraint !== 0) {
      writer.uint32(56).int32(message.constraint);
    }
    if (message.index !== 0) {
      writer.uint32(64).int32(message.index);
    }
    if (message.view !== 0) {
      writer.uint32(72).int32(message.view);
    }
    if (message.materializedView !== 0) {
      writer.uint32(136).int32(message.materializedView);
    }
    if (message.function !== 0) {
      writer.uint32(80).int32(message.function);
    }
    if (message.trigger !== 0) {
      writer.uint32(88).int32(message.trigger);
    }
    if (message.type !== 0) {
      writer.uint32(96).int32(message.type);
    }
    if (message.rule !== 0) {
      writer.uint32(104).int32(message.rule);
    }
    if (message.collation !== 0) {
      writer.uint32(112).int32(message.collation);
    }
    if (message.policy !== 0) {
      writer.uint32(120).int32(message.policy);
    }
    if (message.cast !== 0) {
      writer.uint32(128).int32(message.cast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresObjectTransferSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostgresObjectTransferSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sequence = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sequenceOwnedBy = reader.int32() as any;
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.sequenceSet = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.table = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.primaryKey = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.fkConstraint = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.defaultValues = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.constraint = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.index = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.view = reader.int32() as any;
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.materializedView = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.function = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.trigger = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.rule = reader.int32() as any;
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.collation = reader.int32() as any;
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.policy = reader.int32() as any;
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.cast = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostgresObjectTransferSettings {
    return {
      $type: PostgresObjectTransferSettings.$type,
      sequence: isSet(object.sequence) ? objectTransferStageFromJSON(object.sequence) : 0,
      sequenceOwnedBy: isSet(object.sequenceOwnedBy) ? objectTransferStageFromJSON(object.sequenceOwnedBy) : 0,
      sequenceSet: isSet(object.sequenceSet) ? objectTransferStageFromJSON(object.sequenceSet) : 0,
      table: isSet(object.table) ? objectTransferStageFromJSON(object.table) : 0,
      primaryKey: isSet(object.primaryKey) ? objectTransferStageFromJSON(object.primaryKey) : 0,
      fkConstraint: isSet(object.fkConstraint) ? objectTransferStageFromJSON(object.fkConstraint) : 0,
      defaultValues: isSet(object.defaultValues) ? objectTransferStageFromJSON(object.defaultValues) : 0,
      constraint: isSet(object.constraint) ? objectTransferStageFromJSON(object.constraint) : 0,
      index: isSet(object.index) ? objectTransferStageFromJSON(object.index) : 0,
      view: isSet(object.view) ? objectTransferStageFromJSON(object.view) : 0,
      materializedView: isSet(object.materializedView) ? objectTransferStageFromJSON(object.materializedView) : 0,
      function: isSet(object.function) ? objectTransferStageFromJSON(object.function) : 0,
      trigger: isSet(object.trigger) ? objectTransferStageFromJSON(object.trigger) : 0,
      type: isSet(object.type) ? objectTransferStageFromJSON(object.type) : 0,
      rule: isSet(object.rule) ? objectTransferStageFromJSON(object.rule) : 0,
      collation: isSet(object.collation) ? objectTransferStageFromJSON(object.collation) : 0,
      policy: isSet(object.policy) ? objectTransferStageFromJSON(object.policy) : 0,
      cast: isSet(object.cast) ? objectTransferStageFromJSON(object.cast) : 0,
    };
  },

  toJSON(message: PostgresObjectTransferSettings): unknown {
    const obj: any = {};
    if (message.sequence !== 0) {
      obj.sequence = objectTransferStageToJSON(message.sequence);
    }
    if (message.sequenceOwnedBy !== 0) {
      obj.sequenceOwnedBy = objectTransferStageToJSON(message.sequenceOwnedBy);
    }
    if (message.sequenceSet !== 0) {
      obj.sequenceSet = objectTransferStageToJSON(message.sequenceSet);
    }
    if (message.table !== 0) {
      obj.table = objectTransferStageToJSON(message.table);
    }
    if (message.primaryKey !== 0) {
      obj.primaryKey = objectTransferStageToJSON(message.primaryKey);
    }
    if (message.fkConstraint !== 0) {
      obj.fkConstraint = objectTransferStageToJSON(message.fkConstraint);
    }
    if (message.defaultValues !== 0) {
      obj.defaultValues = objectTransferStageToJSON(message.defaultValues);
    }
    if (message.constraint !== 0) {
      obj.constraint = objectTransferStageToJSON(message.constraint);
    }
    if (message.index !== 0) {
      obj.index = objectTransferStageToJSON(message.index);
    }
    if (message.view !== 0) {
      obj.view = objectTransferStageToJSON(message.view);
    }
    if (message.materializedView !== 0) {
      obj.materializedView = objectTransferStageToJSON(message.materializedView);
    }
    if (message.function !== 0) {
      obj.function = objectTransferStageToJSON(message.function);
    }
    if (message.trigger !== 0) {
      obj.trigger = objectTransferStageToJSON(message.trigger);
    }
    if (message.type !== 0) {
      obj.type = objectTransferStageToJSON(message.type);
    }
    if (message.rule !== 0) {
      obj.rule = objectTransferStageToJSON(message.rule);
    }
    if (message.collation !== 0) {
      obj.collation = objectTransferStageToJSON(message.collation);
    }
    if (message.policy !== 0) {
      obj.policy = objectTransferStageToJSON(message.policy);
    }
    if (message.cast !== 0) {
      obj.cast = objectTransferStageToJSON(message.cast);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PostgresObjectTransferSettings>, I>>(base?: I): PostgresObjectTransferSettings {
    return PostgresObjectTransferSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PostgresObjectTransferSettings>, I>>(
    object: I,
  ): PostgresObjectTransferSettings {
    const message = createBasePostgresObjectTransferSettings();
    message.sequence = object.sequence ?? 0;
    message.sequenceOwnedBy = object.sequenceOwnedBy ?? 0;
    message.sequenceSet = object.sequenceSet ?? 0;
    message.table = object.table ?? 0;
    message.primaryKey = object.primaryKey ?? 0;
    message.fkConstraint = object.fkConstraint ?? 0;
    message.defaultValues = object.defaultValues ?? 0;
    message.constraint = object.constraint ?? 0;
    message.index = object.index ?? 0;
    message.view = object.view ?? 0;
    message.materializedView = object.materializedView ?? 0;
    message.function = object.function ?? 0;
    message.trigger = object.trigger ?? 0;
    message.type = object.type ?? 0;
    message.rule = object.rule ?? 0;
    message.collation = object.collation ?? 0;
    message.policy = object.policy ?? 0;
    message.cast = object.cast ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PostgresObjectTransferSettings.$type, PostgresObjectTransferSettings);

function createBaseOnPremisePostgres(): OnPremisePostgres {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres",
    hosts: [],
    port: 0,
    tlsMode: undefined,
    subnetId: "",
  };
}

export const OnPremisePostgres = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres" as const,

  encode(message: OnPremisePostgres, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OnPremisePostgres {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnPremisePostgres();
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

  fromJSON(object: any): OnPremisePostgres {
    return {
      $type: OnPremisePostgres.$type,
      hosts: globalThis.Array.isArray(object?.hosts) ? object.hosts.map((e: any) => globalThis.String(e)) : [],
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      tlsMode: isSet(object.tlsMode) ? TLSMode.fromJSON(object.tlsMode) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: OnPremisePostgres): unknown {
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

  create<I extends Exact<DeepPartial<OnPremisePostgres>, I>>(base?: I): OnPremisePostgres {
    return OnPremisePostgres.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OnPremisePostgres>, I>>(object: I): OnPremisePostgres {
    const message = createBaseOnPremisePostgres();
    message.hosts = object.hosts?.map((e) => e) || [];
    message.port = object.port ?? 0;
    message.tlsMode = (object.tlsMode !== undefined && object.tlsMode !== null)
      ? TLSMode.fromPartial(object.tlsMode)
      : undefined;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(OnPremisePostgres.$type, OnPremisePostgres);

function createBasePostgresConnection(): PostgresConnection {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection",
    mdbClusterId: undefined,
    onPremise: undefined,
  };
}

export const PostgresConnection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection" as const,

  encode(message: PostgresConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mdbClusterId !== undefined) {
      writer.uint32(10).string(message.mdbClusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremisePostgres.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostgresConnection();
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

          message.onPremise = OnPremisePostgres.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostgresConnection {
    return {
      $type: PostgresConnection.$type,
      mdbClusterId: isSet(object.mdbClusterId) ? globalThis.String(object.mdbClusterId) : undefined,
      onPremise: isSet(object.onPremise) ? OnPremisePostgres.fromJSON(object.onPremise) : undefined,
    };
  },

  toJSON(message: PostgresConnection): unknown {
    const obj: any = {};
    if (message.mdbClusterId !== undefined) {
      obj.mdbClusterId = message.mdbClusterId;
    }
    if (message.onPremise !== undefined) {
      obj.onPremise = OnPremisePostgres.toJSON(message.onPremise);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PostgresConnection>, I>>(base?: I): PostgresConnection {
    return PostgresConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PostgresConnection>, I>>(object: I): PostgresConnection {
    const message = createBasePostgresConnection();
    message.mdbClusterId = object.mdbClusterId ?? undefined;
    message.onPremise = (object.onPremise !== undefined && object.onPremise !== null)
      ? OnPremisePostgres.fromPartial(object.onPremise)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PostgresConnection.$type, PostgresConnection);

function createBasePostgresSource(): PostgresSource {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource",
    connection: undefined,
    securityGroups: [],
    database: "",
    user: "",
    password: undefined,
    includeTables: [],
    excludeTables: [],
    slotByteLagLimit: 0,
    serviceSchema: "",
    objectTransferSettings: undefined,
  };
}

export const PostgresSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource" as const,

  encode(message: PostgresSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      PostgresConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(114).string(v!);
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
    for (const v of message.includeTables) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.excludeTables) {
      writer.uint32(50).string(v!);
    }
    if (message.slotByteLagLimit !== 0) {
      writer.uint32(64).int64(message.slotByteLagLimit);
    }
    if (message.serviceSchema !== "") {
      writer.uint32(74).string(message.serviceSchema);
    }
    if (message.objectTransferSettings !== undefined) {
      PostgresObjectTransferSettings.encode(message.objectTransferSettings, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostgresSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = PostgresConnection.decode(reader, reader.uint32());
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

          message.includeTables.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.excludeTables.push(reader.string());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.slotByteLagLimit = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.serviceSchema = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.objectTransferSettings = PostgresObjectTransferSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostgresSource {
    return {
      $type: PostgresSource.$type,
      connection: isSet(object.connection) ? PostgresConnection.fromJSON(object.connection) : undefined,
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? Secret.fromJSON(object.password) : undefined,
      includeTables: globalThis.Array.isArray(object?.includeTables)
        ? object.includeTables.map((e: any) => globalThis.String(e))
        : [],
      excludeTables: globalThis.Array.isArray(object?.excludeTables)
        ? object.excludeTables.map((e: any) => globalThis.String(e))
        : [],
      slotByteLagLimit: isSet(object.slotByteLagLimit) ? globalThis.Number(object.slotByteLagLimit) : 0,
      serviceSchema: isSet(object.serviceSchema) ? globalThis.String(object.serviceSchema) : "",
      objectTransferSettings: isSet(object.objectTransferSettings)
        ? PostgresObjectTransferSettings.fromJSON(object.objectTransferSettings)
        : undefined,
    };
  },

  toJSON(message: PostgresSource): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = PostgresConnection.toJSON(message.connection);
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
    if (message.includeTables?.length) {
      obj.includeTables = message.includeTables;
    }
    if (message.excludeTables?.length) {
      obj.excludeTables = message.excludeTables;
    }
    if (message.slotByteLagLimit !== 0) {
      obj.slotByteLagLimit = Math.round(message.slotByteLagLimit);
    }
    if (message.serviceSchema !== "") {
      obj.serviceSchema = message.serviceSchema;
    }
    if (message.objectTransferSettings !== undefined) {
      obj.objectTransferSettings = PostgresObjectTransferSettings.toJSON(message.objectTransferSettings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PostgresSource>, I>>(base?: I): PostgresSource {
    return PostgresSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PostgresSource>, I>>(object: I): PostgresSource {
    const message = createBasePostgresSource();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? PostgresConnection.fromPartial(object.connection)
      : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.password = (object.password !== undefined && object.password !== null)
      ? Secret.fromPartial(object.password)
      : undefined;
    message.includeTables = object.includeTables?.map((e) => e) || [];
    message.excludeTables = object.excludeTables?.map((e) => e) || [];
    message.slotByteLagLimit = object.slotByteLagLimit ?? 0;
    message.serviceSchema = object.serviceSchema ?? "";
    message.objectTransferSettings =
      (object.objectTransferSettings !== undefined && object.objectTransferSettings !== null)
        ? PostgresObjectTransferSettings.fromPartial(object.objectTransferSettings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PostgresSource.$type, PostgresSource);

function createBasePostgresTarget(): PostgresTarget {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget",
    connection: undefined,
    securityGroups: [],
    database: "",
    user: "",
    password: undefined,
    cleanupPolicy: 0,
  };
}

export const PostgresTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget" as const,

  encode(message: PostgresTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      PostgresConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(58).string(v!);
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
    if (message.cleanupPolicy !== 0) {
      writer.uint32(40).int32(message.cleanupPolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostgresTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = PostgresConnection.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
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
          if (tag !== 40) {
            break;
          }

          message.cleanupPolicy = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostgresTarget {
    return {
      $type: PostgresTarget.$type,
      connection: isSet(object.connection) ? PostgresConnection.fromJSON(object.connection) : undefined,
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? Secret.fromJSON(object.password) : undefined,
      cleanupPolicy: isSet(object.cleanupPolicy) ? cleanupPolicyFromJSON(object.cleanupPolicy) : 0,
    };
  },

  toJSON(message: PostgresTarget): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = PostgresConnection.toJSON(message.connection);
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
    if (message.cleanupPolicy !== 0) {
      obj.cleanupPolicy = cleanupPolicyToJSON(message.cleanupPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PostgresTarget>, I>>(base?: I): PostgresTarget {
    return PostgresTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PostgresTarget>, I>>(object: I): PostgresTarget {
    const message = createBasePostgresTarget();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? PostgresConnection.fromPartial(object.connection)
      : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.password = (object.password !== undefined && object.password !== null)
      ? Secret.fromPartial(object.password)
      : undefined;
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PostgresTarget.$type, PostgresTarget);

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
