/* eslint-disable */
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.sqlserver.v1.config";

/**
 * SQL Server 2016 SP2 Standard edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2016).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2016sp2std {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2016sp2std";
  /**
   * Limits the number of processors to use in parallel plan execution per task.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2016).
   */
  maxDegreeOfParallelism?:
    | number
    | undefined;
  /**
   * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
   *
   * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2016).
   */
  costThresholdForParallelism?:
    | number
    | undefined;
  /**
   * Describes how to configure login auditing to monitor SQL Server Database Engine login activity.
   *
   * Possible values:
   * * 0 - do not log login attempts;
   * * 1 - log only failed login attempts;
   * * 2 - log only successful login attempts (not recommended);
   * * 3 - log all login attempts (not recommended).
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2016).
   */
  auditLevel?:
    | number
    | undefined;
  /**
   * Manages the fill factor server configuration option.
   *
   * When an index is created or rebuilt, the fill factor determines the percentage of space on each index leaf-level page to be filled with data, reserving the rest as free space for future growth.
   *
   * Values 0 and 100 mean full page usage (no space reserved).
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2016).
   */
  fillFactorPercent?:
    | number
    | undefined;
  /**
   * Determines whether plans should be cached only after second execution.
   *
   * Allows to avoid SQL cache bloat because of single-use plans.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2016).
   */
  optimizeForAdHocWorkloads?: boolean | undefined;
}

export interface SQLServerConfigSet2016sp2std {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2016sp2std";
  /** Effective settings for an SQL Server 2016 SP2 cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?:
    | SQLServerConfig2016sp2std
    | undefined;
  /** User-defined settings for an SQL Server 2016 SP2 cluster. */
  userConfig?:
    | SQLServerConfig2016sp2std
    | undefined;
  /** Default configuration for an SQL Server 2016 SP2 cluster. */
  defaultConfig?: SQLServerConfig2016sp2std | undefined;
}

/**
 * SQL Server 2016 SP2 Enterprise edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2016).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2016sp2ent {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2016sp2ent";
  /**
   * Limits the number of processors to use in parallel plan execution per task.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2016).
   */
  maxDegreeOfParallelism?:
    | number
    | undefined;
  /**
   * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
   *
   * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2016).
   */
  costThresholdForParallelism?:
    | number
    | undefined;
  /**
   * Describes how to configure login auditing to monitor SQL Server Database Engine login activity.
   *
   * Possible values:
   * * 0 - do not log login attempts;
   * * 1 - log only failed login attempts;
   * * 2 - log only successful login attempts (not recommended);
   * * 3 - log all login attempts (not recommended).
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2016).
   */
  auditLevel?:
    | number
    | undefined;
  /**
   * Manages the fill factor server configuration option.
   * When an index is created or rebuilt, the fill factor determines the percentage of space on each index leaf-level page to be filled with data, reserving the rest as free space for future growth.
   *
   * Values 0 and 100 mean full page usage (no space reserved).
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2016).
   */
  fillFactorPercent?:
    | number
    | undefined;
  /**
   * Determines whether plans should be cached only after second execution.
   *
   * Allows to avoid SQL cache bloat because of single-use plans.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2016).
   */
  optimizeForAdHocWorkloads?: boolean | undefined;
}

export interface SQLServerConfigSet2016sp2ent {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2016sp2ent";
  /** Effective settings for an SQL Server 2016 SP2 cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?:
    | SQLServerConfig2016sp2ent
    | undefined;
  /** User-defined settings for an SQL Server 2016 SP2 cluster. */
  userConfig?:
    | SQLServerConfig2016sp2ent
    | undefined;
  /** Default configuration for an SQL Server 2016 SP2 cluster. */
  defaultConfig?: SQLServerConfig2016sp2ent | undefined;
}

function createBaseSQLServerConfig2016sp2std(): SQLServerConfig2016sp2std {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2016sp2std",
    maxDegreeOfParallelism: undefined,
    costThresholdForParallelism: undefined,
    auditLevel: undefined,
    fillFactorPercent: undefined,
    optimizeForAdHocWorkloads: undefined,
  };
}

export const SQLServerConfig2016sp2std = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2016sp2std" as const,

  encode(message: SQLServerConfig2016sp2std, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxDegreeOfParallelism !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxDegreeOfParallelism! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.costThresholdForParallelism !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.costThresholdForParallelism! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.auditLevel !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.auditLevel! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.fillFactorPercent !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fillFactorPercent! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.optimizeForAdHocWorkloads !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.optimizeForAdHocWorkloads! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConfig2016sp2std {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQLServerConfig2016sp2std();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxDegreeOfParallelism = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.costThresholdForParallelism = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.auditLevel = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fillFactorPercent = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.optimizeForAdHocWorkloads = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SQLServerConfig2016sp2std {
    return {
      $type: SQLServerConfig2016sp2std.$type,
      maxDegreeOfParallelism: isSet(object.maxDegreeOfParallelism) ? Number(object.maxDegreeOfParallelism) : undefined,
      costThresholdForParallelism: isSet(object.costThresholdForParallelism)
        ? Number(object.costThresholdForParallelism)
        : undefined,
      auditLevel: isSet(object.auditLevel) ? Number(object.auditLevel) : undefined,
      fillFactorPercent: isSet(object.fillFactorPercent) ? Number(object.fillFactorPercent) : undefined,
      optimizeForAdHocWorkloads: isSet(object.optimizeForAdHocWorkloads)
        ? Boolean(object.optimizeForAdHocWorkloads)
        : undefined,
    };
  },

  toJSON(message: SQLServerConfig2016sp2std): unknown {
    const obj: any = {};
    if (message.maxDegreeOfParallelism !== undefined) {
      obj.maxDegreeOfParallelism = message.maxDegreeOfParallelism;
    }
    if (message.costThresholdForParallelism !== undefined) {
      obj.costThresholdForParallelism = message.costThresholdForParallelism;
    }
    if (message.auditLevel !== undefined) {
      obj.auditLevel = message.auditLevel;
    }
    if (message.fillFactorPercent !== undefined) {
      obj.fillFactorPercent = message.fillFactorPercent;
    }
    if (message.optimizeForAdHocWorkloads !== undefined) {
      obj.optimizeForAdHocWorkloads = message.optimizeForAdHocWorkloads;
    }
    return obj;
  },

  create(base?: DeepPartial<SQLServerConfig2016sp2std>): SQLServerConfig2016sp2std {
    return SQLServerConfig2016sp2std.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SQLServerConfig2016sp2std>): SQLServerConfig2016sp2std {
    const message = createBaseSQLServerConfig2016sp2std();
    message.maxDegreeOfParallelism = object.maxDegreeOfParallelism ?? undefined;
    message.costThresholdForParallelism = object.costThresholdForParallelism ?? undefined;
    message.auditLevel = object.auditLevel ?? undefined;
    message.fillFactorPercent = object.fillFactorPercent ?? undefined;
    message.optimizeForAdHocWorkloads = object.optimizeForAdHocWorkloads ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfig2016sp2std.$type, SQLServerConfig2016sp2std);

function createBaseSQLServerConfigSet2016sp2std(): SQLServerConfigSet2016sp2std {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2016sp2std",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const SQLServerConfigSet2016sp2std = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2016sp2std" as const,

  encode(message: SQLServerConfigSet2016sp2std, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      SQLServerConfig2016sp2std.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      SQLServerConfig2016sp2std.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      SQLServerConfig2016sp2std.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConfigSet2016sp2std {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQLServerConfigSet2016sp2std();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = SQLServerConfig2016sp2std.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = SQLServerConfig2016sp2std.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = SQLServerConfig2016sp2std.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SQLServerConfigSet2016sp2std {
    return {
      $type: SQLServerConfigSet2016sp2std.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? SQLServerConfig2016sp2std.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? SQLServerConfig2016sp2std.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? SQLServerConfig2016sp2std.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: SQLServerConfigSet2016sp2std): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = SQLServerConfig2016sp2std.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = SQLServerConfig2016sp2std.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = SQLServerConfig2016sp2std.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<SQLServerConfigSet2016sp2std>): SQLServerConfigSet2016sp2std {
    return SQLServerConfigSet2016sp2std.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SQLServerConfigSet2016sp2std>): SQLServerConfigSet2016sp2std {
    const message = createBaseSQLServerConfigSet2016sp2std();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? SQLServerConfig2016sp2std.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? SQLServerConfig2016sp2std.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? SQLServerConfig2016sp2std.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfigSet2016sp2std.$type, SQLServerConfigSet2016sp2std);

function createBaseSQLServerConfig2016sp2ent(): SQLServerConfig2016sp2ent {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2016sp2ent",
    maxDegreeOfParallelism: undefined,
    costThresholdForParallelism: undefined,
    auditLevel: undefined,
    fillFactorPercent: undefined,
    optimizeForAdHocWorkloads: undefined,
  };
}

export const SQLServerConfig2016sp2ent = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2016sp2ent" as const,

  encode(message: SQLServerConfig2016sp2ent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxDegreeOfParallelism !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxDegreeOfParallelism! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.costThresholdForParallelism !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.costThresholdForParallelism! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.auditLevel !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.auditLevel! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.fillFactorPercent !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fillFactorPercent! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.optimizeForAdHocWorkloads !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.optimizeForAdHocWorkloads! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConfig2016sp2ent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQLServerConfig2016sp2ent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxDegreeOfParallelism = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.costThresholdForParallelism = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.auditLevel = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fillFactorPercent = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.optimizeForAdHocWorkloads = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SQLServerConfig2016sp2ent {
    return {
      $type: SQLServerConfig2016sp2ent.$type,
      maxDegreeOfParallelism: isSet(object.maxDegreeOfParallelism) ? Number(object.maxDegreeOfParallelism) : undefined,
      costThresholdForParallelism: isSet(object.costThresholdForParallelism)
        ? Number(object.costThresholdForParallelism)
        : undefined,
      auditLevel: isSet(object.auditLevel) ? Number(object.auditLevel) : undefined,
      fillFactorPercent: isSet(object.fillFactorPercent) ? Number(object.fillFactorPercent) : undefined,
      optimizeForAdHocWorkloads: isSet(object.optimizeForAdHocWorkloads)
        ? Boolean(object.optimizeForAdHocWorkloads)
        : undefined,
    };
  },

  toJSON(message: SQLServerConfig2016sp2ent): unknown {
    const obj: any = {};
    if (message.maxDegreeOfParallelism !== undefined) {
      obj.maxDegreeOfParallelism = message.maxDegreeOfParallelism;
    }
    if (message.costThresholdForParallelism !== undefined) {
      obj.costThresholdForParallelism = message.costThresholdForParallelism;
    }
    if (message.auditLevel !== undefined) {
      obj.auditLevel = message.auditLevel;
    }
    if (message.fillFactorPercent !== undefined) {
      obj.fillFactorPercent = message.fillFactorPercent;
    }
    if (message.optimizeForAdHocWorkloads !== undefined) {
      obj.optimizeForAdHocWorkloads = message.optimizeForAdHocWorkloads;
    }
    return obj;
  },

  create(base?: DeepPartial<SQLServerConfig2016sp2ent>): SQLServerConfig2016sp2ent {
    return SQLServerConfig2016sp2ent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SQLServerConfig2016sp2ent>): SQLServerConfig2016sp2ent {
    const message = createBaseSQLServerConfig2016sp2ent();
    message.maxDegreeOfParallelism = object.maxDegreeOfParallelism ?? undefined;
    message.costThresholdForParallelism = object.costThresholdForParallelism ?? undefined;
    message.auditLevel = object.auditLevel ?? undefined;
    message.fillFactorPercent = object.fillFactorPercent ?? undefined;
    message.optimizeForAdHocWorkloads = object.optimizeForAdHocWorkloads ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfig2016sp2ent.$type, SQLServerConfig2016sp2ent);

function createBaseSQLServerConfigSet2016sp2ent(): SQLServerConfigSet2016sp2ent {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2016sp2ent",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const SQLServerConfigSet2016sp2ent = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2016sp2ent" as const,

  encode(message: SQLServerConfigSet2016sp2ent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      SQLServerConfig2016sp2ent.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      SQLServerConfig2016sp2ent.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      SQLServerConfig2016sp2ent.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConfigSet2016sp2ent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQLServerConfigSet2016sp2ent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = SQLServerConfig2016sp2ent.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = SQLServerConfig2016sp2ent.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = SQLServerConfig2016sp2ent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SQLServerConfigSet2016sp2ent {
    return {
      $type: SQLServerConfigSet2016sp2ent.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? SQLServerConfig2016sp2ent.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? SQLServerConfig2016sp2ent.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? SQLServerConfig2016sp2ent.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: SQLServerConfigSet2016sp2ent): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = SQLServerConfig2016sp2ent.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = SQLServerConfig2016sp2ent.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = SQLServerConfig2016sp2ent.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<SQLServerConfigSet2016sp2ent>): SQLServerConfigSet2016sp2ent {
    return SQLServerConfigSet2016sp2ent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SQLServerConfigSet2016sp2ent>): SQLServerConfigSet2016sp2ent {
    const message = createBaseSQLServerConfigSet2016sp2ent();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? SQLServerConfig2016sp2ent.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? SQLServerConfig2016sp2ent.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? SQLServerConfig2016sp2ent.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfigSet2016sp2ent.$type, SQLServerConfigSet2016sp2ent);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
