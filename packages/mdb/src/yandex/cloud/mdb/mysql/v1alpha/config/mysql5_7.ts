/* eslint-disable */
import { DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha.config";

/** Options and structure of `MysqlConfig5_7` reflects MySQL 5.7 configuration file */
export interface MysqlConfig57 {
  $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfig5_7";
  /**
   * Size of the InnoDB buffer pool used for caching table and index data.
   *
   * For details, see [MySQL documentation for the parameter](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size).
   */
  innodbBufferPoolSize?:
    | number
    | undefined;
  /**
   * The maximum permitted number of simultaneous client connections.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_connections).
   */
  maxConnections?:
    | number
    | undefined;
  /**
   * Time that it takes to process a query before it is considered slow.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time).
   */
  longQueryTime?: number | undefined;
}

export interface MysqlConfigSet57 {
  $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfigSet5_7";
  /**
   * Effective settings for a MySQL 5.7 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MysqlConfig57
    | undefined;
  /** User-defined settings for a MySQL 5.7 cluster. */
  userConfig?:
    | MysqlConfig57
    | undefined;
  /** Default configuration for a MySQL 5.7 cluster. */
  defaultConfig?: MysqlConfig57 | undefined;
}

function createBaseMysqlConfig57(): MysqlConfig57 {
  return {
    $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfig5_7",
    innodbBufferPoolSize: undefined,
    maxConnections: undefined,
    longQueryTime: undefined,
  };
}

export const MysqlConfig57 = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfig5_7" as const,

  encode(message: MysqlConfig57, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.innodbBufferPoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbBufferPoolSize! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.longQueryTime !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.longQueryTime! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlConfig57 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMysqlConfig57();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.innodbBufferPoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.longQueryTime = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MysqlConfig57 {
    return {
      $type: MysqlConfig57.$type,
      innodbBufferPoolSize: isSet(object.innodbBufferPoolSize) ? Number(object.innodbBufferPoolSize) : undefined,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      longQueryTime: isSet(object.longQueryTime) ? Number(object.longQueryTime) : undefined,
    };
  },

  toJSON(message: MysqlConfig57): unknown {
    const obj: any = {};
    if (message.innodbBufferPoolSize !== undefined) {
      obj.innodbBufferPoolSize = message.innodbBufferPoolSize;
    }
    if (message.maxConnections !== undefined) {
      obj.maxConnections = message.maxConnections;
    }
    if (message.longQueryTime !== undefined) {
      obj.longQueryTime = message.longQueryTime;
    }
    return obj;
  },

  create(base?: DeepPartial<MysqlConfig57>): MysqlConfig57 {
    return MysqlConfig57.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MysqlConfig57>): MysqlConfig57 {
    const message = createBaseMysqlConfig57();
    message.innodbBufferPoolSize = object.innodbBufferPoolSize ?? undefined;
    message.maxConnections = object.maxConnections ?? undefined;
    message.longQueryTime = object.longQueryTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MysqlConfig57.$type, MysqlConfig57);

function createBaseMysqlConfigSet57(): MysqlConfigSet57 {
  return {
    $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfigSet5_7",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MysqlConfigSet57 = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfigSet5_7" as const,

  encode(message: MysqlConfigSet57, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MysqlConfig57.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MysqlConfig57.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MysqlConfig57.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlConfigSet57 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMysqlConfigSet57();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MysqlConfig57.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MysqlConfig57.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MysqlConfig57.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MysqlConfigSet57 {
    return {
      $type: MysqlConfigSet57.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MysqlConfig57.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MysqlConfig57.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MysqlConfig57.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MysqlConfigSet57): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MysqlConfig57.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MysqlConfig57.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MysqlConfig57.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MysqlConfigSet57>): MysqlConfigSet57 {
    return MysqlConfigSet57.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MysqlConfigSet57>): MysqlConfigSet57 {
    const message = createBaseMysqlConfigSet57();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MysqlConfig57.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MysqlConfig57.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MysqlConfig57.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MysqlConfigSet57.$type, MysqlConfigSet57);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
