/* eslint-disable */
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.sqlserver.v1.config";

/**
 * SQL Server 2017 Standard edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2017).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2017std {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017std";
  /**
   * Limits the number of processors to use in parallel plan execution per task.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2017).
   */
  maxDegreeOfParallelism?:
    | number
    | undefined;
  /**
   * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
   *
   * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2017).
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
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2017).
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
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2017).
   */
  fillFactorPercent?:
    | number
    | undefined;
  /**
   * Determines whether plans should be cached only after second execution.
   *
   * Allows to avoid SQL cache bloat because of single-use plans.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2017).
   */
  optimizeForAdHocWorkloads?: boolean | undefined;
}

export interface SQLServerConfigSet2017std {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017std";
  /** Effective settings for an SQL Server 2017 cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?:
    | SQLServerConfig2017std
    | undefined;
  /** User-defined settings for an SQL Server 2017 cluster. */
  userConfig?:
    | SQLServerConfig2017std
    | undefined;
  /** Default configuration for an SQL Server 2017 cluster. */
  defaultConfig?: SQLServerConfig2017std | undefined;
}

/**
 * SQL Server 2017 Enterprise edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2017).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2017ent {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017ent";
  /**
   * Limits the number of processors to use in parallel plan execution per task.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2017).
   */
  maxDegreeOfParallelism?:
    | number
    | undefined;
  /**
   * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
   *
   * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2017).
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
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2017).
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
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2017).
   */
  fillFactorPercent?:
    | number
    | undefined;
  /**
   * Determines whether plans should be cached only after second execution.
   *
   * Allows to avoid SQL cache bloat because of single-use plans.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2017).
   */
  optimizeForAdHocWorkloads?: boolean | undefined;
}

export interface SQLServerConfigSet2017ent {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017ent";
  /** Effective settings for an SQL Server 2017 cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?:
    | SQLServerConfig2017ent
    | undefined;
  /** User-defined settings for an SQL Server 2017 cluster. */
  userConfig?:
    | SQLServerConfig2017ent
    | undefined;
  /** Default configuration for an SQL Server 2017 cluster. */
  defaultConfig?: SQLServerConfig2017ent | undefined;
}

function createBaseSQLServerConfig2017std(): SQLServerConfig2017std {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017std",
    maxDegreeOfParallelism: undefined,
    costThresholdForParallelism: undefined,
    auditLevel: undefined,
    fillFactorPercent: undefined,
    optimizeForAdHocWorkloads: undefined,
  };
}

export const SQLServerConfig2017std = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017std" as const,

  encode(message: SQLServerConfig2017std, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConfig2017std {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQLServerConfig2017std();
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

  fromJSON(object: any): SQLServerConfig2017std {
    return {
      $type: SQLServerConfig2017std.$type,
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

  toJSON(message: SQLServerConfig2017std): unknown {
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

  create(base?: DeepPartial<SQLServerConfig2017std>): SQLServerConfig2017std {
    return SQLServerConfig2017std.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SQLServerConfig2017std>): SQLServerConfig2017std {
    const message = createBaseSQLServerConfig2017std();
    message.maxDegreeOfParallelism = object.maxDegreeOfParallelism ?? undefined;
    message.costThresholdForParallelism = object.costThresholdForParallelism ?? undefined;
    message.auditLevel = object.auditLevel ?? undefined;
    message.fillFactorPercent = object.fillFactorPercent ?? undefined;
    message.optimizeForAdHocWorkloads = object.optimizeForAdHocWorkloads ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfig2017std.$type, SQLServerConfig2017std);

function createBaseSQLServerConfigSet2017std(): SQLServerConfigSet2017std {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017std",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const SQLServerConfigSet2017std = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017std" as const,

  encode(message: SQLServerConfigSet2017std, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      SQLServerConfig2017std.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      SQLServerConfig2017std.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      SQLServerConfig2017std.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConfigSet2017std {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQLServerConfigSet2017std();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = SQLServerConfig2017std.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = SQLServerConfig2017std.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = SQLServerConfig2017std.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SQLServerConfigSet2017std {
    return {
      $type: SQLServerConfigSet2017std.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? SQLServerConfig2017std.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? SQLServerConfig2017std.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? SQLServerConfig2017std.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: SQLServerConfigSet2017std): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = SQLServerConfig2017std.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = SQLServerConfig2017std.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = SQLServerConfig2017std.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<SQLServerConfigSet2017std>): SQLServerConfigSet2017std {
    return SQLServerConfigSet2017std.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SQLServerConfigSet2017std>): SQLServerConfigSet2017std {
    const message = createBaseSQLServerConfigSet2017std();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? SQLServerConfig2017std.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? SQLServerConfig2017std.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? SQLServerConfig2017std.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfigSet2017std.$type, SQLServerConfigSet2017std);

function createBaseSQLServerConfig2017ent(): SQLServerConfig2017ent {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017ent",
    maxDegreeOfParallelism: undefined,
    costThresholdForParallelism: undefined,
    auditLevel: undefined,
    fillFactorPercent: undefined,
    optimizeForAdHocWorkloads: undefined,
  };
}

export const SQLServerConfig2017ent = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017ent" as const,

  encode(message: SQLServerConfig2017ent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConfig2017ent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQLServerConfig2017ent();
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

  fromJSON(object: any): SQLServerConfig2017ent {
    return {
      $type: SQLServerConfig2017ent.$type,
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

  toJSON(message: SQLServerConfig2017ent): unknown {
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

  create(base?: DeepPartial<SQLServerConfig2017ent>): SQLServerConfig2017ent {
    return SQLServerConfig2017ent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SQLServerConfig2017ent>): SQLServerConfig2017ent {
    const message = createBaseSQLServerConfig2017ent();
    message.maxDegreeOfParallelism = object.maxDegreeOfParallelism ?? undefined;
    message.costThresholdForParallelism = object.costThresholdForParallelism ?? undefined;
    message.auditLevel = object.auditLevel ?? undefined;
    message.fillFactorPercent = object.fillFactorPercent ?? undefined;
    message.optimizeForAdHocWorkloads = object.optimizeForAdHocWorkloads ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfig2017ent.$type, SQLServerConfig2017ent);

function createBaseSQLServerConfigSet2017ent(): SQLServerConfigSet2017ent {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017ent",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const SQLServerConfigSet2017ent = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017ent" as const,

  encode(message: SQLServerConfigSet2017ent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      SQLServerConfig2017ent.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      SQLServerConfig2017ent.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      SQLServerConfig2017ent.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConfigSet2017ent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQLServerConfigSet2017ent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = SQLServerConfig2017ent.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = SQLServerConfig2017ent.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = SQLServerConfig2017ent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SQLServerConfigSet2017ent {
    return {
      $type: SQLServerConfigSet2017ent.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? SQLServerConfig2017ent.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? SQLServerConfig2017ent.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? SQLServerConfig2017ent.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: SQLServerConfigSet2017ent): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = SQLServerConfig2017ent.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = SQLServerConfig2017ent.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = SQLServerConfig2017ent.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<SQLServerConfigSet2017ent>): SQLServerConfigSet2017ent {
    return SQLServerConfigSet2017ent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SQLServerConfigSet2017ent>): SQLServerConfigSet2017ent {
    const message = createBaseSQLServerConfigSet2017ent();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? SQLServerConfig2017ent.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? SQLServerConfig2017ent.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? SQLServerConfig2017ent.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfigSet2017ent.$type, SQLServerConfigSet2017ent);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
