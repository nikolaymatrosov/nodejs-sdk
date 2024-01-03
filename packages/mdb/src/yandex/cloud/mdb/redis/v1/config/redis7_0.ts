/* eslint-disable */
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.redis.v1.config";

/**
 * Fields and structure of `RedisConfig` reflects Redis configuration file
 * parameters.
 */
export interface RedisConfig70 {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig7_0";
  /**
   * Redis key eviction policy for a dataset that reaches maximum memory,
   * available to the host. Redis maxmemory setting depends on Managed
   * Service for Redis [host class](/docs/managed-redis/concepts/instance-types).
   *
   * All policies are described in detail in [Redis documentation](https://redis.io/topics/lru-cache).
   */
  maxmemoryPolicy: RedisConfig70_MaxmemoryPolicy;
  /**
   * Time that Redis keeps the connection open while the client is idle.
   * If no new command is sent during that time, the connection is closed.
   */
  timeout?:
    | number
    | undefined;
  /** Authentication password. */
  password: string;
  /** Number of database buckets on a single redis-server process. */
  databases?:
    | number
    | undefined;
  /** Threshold for logging slow requests to server in microseconds (log only slower than it). */
  slowlogLogSlowerThan?:
    | number
    | undefined;
  /** Max slow requests number to log. */
  slowlogMaxLen?:
    | number
    | undefined;
  /** String setting for pub\sub functionality; subset of KEg$lshzxeAtm. */
  notifyKeyspaceEvents: string;
  /** Redis connection output buffers limits for pubsub operations. */
  clientOutputBufferLimitPubsub?:
    | RedisConfig70_ClientOutputBufferLimit
    | undefined;
  /** Redis connection output buffers limits for clients. */
  clientOutputBufferLimitNormal?:
    | RedisConfig70_ClientOutputBufferLimit
    | undefined;
  /** Redis maxmemory percent */
  maxmemoryPercent?: number | undefined;
}

export enum RedisConfig70_MaxmemoryPolicy {
  MAXMEMORY_POLICY_UNSPECIFIED = 0,
  /** VOLATILE_LRU - Try to remove less recently used (LRU) keys with `expire set`. */
  VOLATILE_LRU = 1,
  /** ALLKEYS_LRU - Remove less recently used (LRU) keys. */
  ALLKEYS_LRU = 2,
  /** VOLATILE_LFU - Try to remove least frequently used (LFU) keys with `expire set`. */
  VOLATILE_LFU = 3,
  /** ALLKEYS_LFU - Remove least frequently used (LFU) keys. */
  ALLKEYS_LFU = 4,
  /** VOLATILE_RANDOM - Try to remove keys with `expire set` randomly. */
  VOLATILE_RANDOM = 5,
  /** ALLKEYS_RANDOM - Remove keys randomly. */
  ALLKEYS_RANDOM = 6,
  /**
   * VOLATILE_TTL - Try to remove less recently used (LRU) keys with `expire set`
   * and shorter TTL first.
   */
  VOLATILE_TTL = 7,
  /**
   * NOEVICTION - Return errors when memory limit was reached and commands could require
   * more memory to be used.
   */
  NOEVICTION = 8,
  UNRECOGNIZED = -1,
}

export function redisConfig70_MaxmemoryPolicyFromJSON(object: any): RedisConfig70_MaxmemoryPolicy {
  switch (object) {
    case 0:
    case "MAXMEMORY_POLICY_UNSPECIFIED":
      return RedisConfig70_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED;
    case 1:
    case "VOLATILE_LRU":
      return RedisConfig70_MaxmemoryPolicy.VOLATILE_LRU;
    case 2:
    case "ALLKEYS_LRU":
      return RedisConfig70_MaxmemoryPolicy.ALLKEYS_LRU;
    case 3:
    case "VOLATILE_LFU":
      return RedisConfig70_MaxmemoryPolicy.VOLATILE_LFU;
    case 4:
    case "ALLKEYS_LFU":
      return RedisConfig70_MaxmemoryPolicy.ALLKEYS_LFU;
    case 5:
    case "VOLATILE_RANDOM":
      return RedisConfig70_MaxmemoryPolicy.VOLATILE_RANDOM;
    case 6:
    case "ALLKEYS_RANDOM":
      return RedisConfig70_MaxmemoryPolicy.ALLKEYS_RANDOM;
    case 7:
    case "VOLATILE_TTL":
      return RedisConfig70_MaxmemoryPolicy.VOLATILE_TTL;
    case 8:
    case "NOEVICTION":
      return RedisConfig70_MaxmemoryPolicy.NOEVICTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RedisConfig70_MaxmemoryPolicy.UNRECOGNIZED;
  }
}

export function redisConfig70_MaxmemoryPolicyToJSON(object: RedisConfig70_MaxmemoryPolicy): string {
  switch (object) {
    case RedisConfig70_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED:
      return "MAXMEMORY_POLICY_UNSPECIFIED";
    case RedisConfig70_MaxmemoryPolicy.VOLATILE_LRU:
      return "VOLATILE_LRU";
    case RedisConfig70_MaxmemoryPolicy.ALLKEYS_LRU:
      return "ALLKEYS_LRU";
    case RedisConfig70_MaxmemoryPolicy.VOLATILE_LFU:
      return "VOLATILE_LFU";
    case RedisConfig70_MaxmemoryPolicy.ALLKEYS_LFU:
      return "ALLKEYS_LFU";
    case RedisConfig70_MaxmemoryPolicy.VOLATILE_RANDOM:
      return "VOLATILE_RANDOM";
    case RedisConfig70_MaxmemoryPolicy.ALLKEYS_RANDOM:
      return "ALLKEYS_RANDOM";
    case RedisConfig70_MaxmemoryPolicy.VOLATILE_TTL:
      return "VOLATILE_TTL";
    case RedisConfig70_MaxmemoryPolicy.NOEVICTION:
      return "NOEVICTION";
    case RedisConfig70_MaxmemoryPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RedisConfig70_ClientOutputBufferLimit {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig7_0.ClientOutputBufferLimit";
  /** Total limit in bytes. */
  hardLimit?:
    | number
    | undefined;
  /** Limit in bytes during certain time period. */
  softLimit?:
    | number
    | undefined;
  /** Seconds for soft limit. */
  softSeconds?: number | undefined;
}

export interface RedisConfigSet70 {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet7_0";
  /**
   * Effective settings for a Redis 7.0 cluster (a combination of settings
   * defined in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | RedisConfig70
    | undefined;
  /** User-defined settings for a Redis 7.0 cluster. */
  userConfig?:
    | RedisConfig70
    | undefined;
  /** Default configuration for a Redis 7.0 cluster. */
  defaultConfig?: RedisConfig70 | undefined;
}

function createBaseRedisConfig70(): RedisConfig70 {
  return {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig7_0",
    maxmemoryPolicy: 0,
    timeout: undefined,
    password: "",
    databases: undefined,
    slowlogLogSlowerThan: undefined,
    slowlogMaxLen: undefined,
    notifyKeyspaceEvents: "",
    clientOutputBufferLimitPubsub: undefined,
    clientOutputBufferLimitNormal: undefined,
    maxmemoryPercent: undefined,
  };
}

export const RedisConfig70 = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig7_0" as const,

  encode(message: RedisConfig70, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxmemoryPolicy !== 0) {
      writer.uint32(8).int32(message.maxmemoryPolicy);
    }
    if (message.timeout !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.timeout! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.databases !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.databases! }, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.slowlogLogSlowerThan !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.slowlogLogSlowerThan! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.slowlogMaxLen !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.slowlogMaxLen! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.notifyKeyspaceEvents !== "") {
      writer.uint32(58).string(message.notifyKeyspaceEvents);
    }
    if (message.clientOutputBufferLimitPubsub !== undefined) {
      RedisConfig70_ClientOutputBufferLimit.encode(message.clientOutputBufferLimitPubsub, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.clientOutputBufferLimitNormal !== undefined) {
      RedisConfig70_ClientOutputBufferLimit.encode(message.clientOutputBufferLimitNormal, writer.uint32(74).fork())
        .ldelim();
    }
    if (message.maxmemoryPercent !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxmemoryPercent! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedisConfig70 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedisConfig70();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxmemoryPolicy = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.databases = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.slowlogLogSlowerThan = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.slowlogMaxLen = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.notifyKeyspaceEvents = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.clientOutputBufferLimitPubsub = RedisConfig70_ClientOutputBufferLimit.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.clientOutputBufferLimitNormal = RedisConfig70_ClientOutputBufferLimit.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.maxmemoryPercent = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedisConfig70 {
    return {
      $type: RedisConfig70.$type,
      maxmemoryPolicy: isSet(object.maxmemoryPolicy)
        ? redisConfig70_MaxmemoryPolicyFromJSON(object.maxmemoryPolicy)
        : 0,
      timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      databases: isSet(object.databases) ? Number(object.databases) : undefined,
      slowlogLogSlowerThan: isSet(object.slowlogLogSlowerThan) ? Number(object.slowlogLogSlowerThan) : undefined,
      slowlogMaxLen: isSet(object.slowlogMaxLen) ? Number(object.slowlogMaxLen) : undefined,
      notifyKeyspaceEvents: isSet(object.notifyKeyspaceEvents) ? globalThis.String(object.notifyKeyspaceEvents) : "",
      clientOutputBufferLimitPubsub: isSet(object.clientOutputBufferLimitPubsub)
        ? RedisConfig70_ClientOutputBufferLimit.fromJSON(object.clientOutputBufferLimitPubsub)
        : undefined,
      clientOutputBufferLimitNormal: isSet(object.clientOutputBufferLimitNormal)
        ? RedisConfig70_ClientOutputBufferLimit.fromJSON(object.clientOutputBufferLimitNormal)
        : undefined,
      maxmemoryPercent: isSet(object.maxmemoryPercent) ? Number(object.maxmemoryPercent) : undefined,
    };
  },

  toJSON(message: RedisConfig70): unknown {
    const obj: any = {};
    if (message.maxmemoryPolicy !== 0) {
      obj.maxmemoryPolicy = redisConfig70_MaxmemoryPolicyToJSON(message.maxmemoryPolicy);
    }
    if (message.timeout !== undefined) {
      obj.timeout = message.timeout;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.databases !== undefined) {
      obj.databases = message.databases;
    }
    if (message.slowlogLogSlowerThan !== undefined) {
      obj.slowlogLogSlowerThan = message.slowlogLogSlowerThan;
    }
    if (message.slowlogMaxLen !== undefined) {
      obj.slowlogMaxLen = message.slowlogMaxLen;
    }
    if (message.notifyKeyspaceEvents !== "") {
      obj.notifyKeyspaceEvents = message.notifyKeyspaceEvents;
    }
    if (message.clientOutputBufferLimitPubsub !== undefined) {
      obj.clientOutputBufferLimitPubsub = RedisConfig70_ClientOutputBufferLimit.toJSON(
        message.clientOutputBufferLimitPubsub,
      );
    }
    if (message.clientOutputBufferLimitNormal !== undefined) {
      obj.clientOutputBufferLimitNormal = RedisConfig70_ClientOutputBufferLimit.toJSON(
        message.clientOutputBufferLimitNormal,
      );
    }
    if (message.maxmemoryPercent !== undefined) {
      obj.maxmemoryPercent = message.maxmemoryPercent;
    }
    return obj;
  },

  create(base?: DeepPartial<RedisConfig70>): RedisConfig70 {
    return RedisConfig70.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RedisConfig70>): RedisConfig70 {
    const message = createBaseRedisConfig70();
    message.maxmemoryPolicy = object.maxmemoryPolicy ?? 0;
    message.timeout = object.timeout ?? undefined;
    message.password = object.password ?? "";
    message.databases = object.databases ?? undefined;
    message.slowlogLogSlowerThan = object.slowlogLogSlowerThan ?? undefined;
    message.slowlogMaxLen = object.slowlogMaxLen ?? undefined;
    message.notifyKeyspaceEvents = object.notifyKeyspaceEvents ?? "";
    message.clientOutputBufferLimitPubsub =
      (object.clientOutputBufferLimitPubsub !== undefined && object.clientOutputBufferLimitPubsub !== null)
        ? RedisConfig70_ClientOutputBufferLimit.fromPartial(object.clientOutputBufferLimitPubsub)
        : undefined;
    message.clientOutputBufferLimitNormal =
      (object.clientOutputBufferLimitNormal !== undefined && object.clientOutputBufferLimitNormal !== null)
        ? RedisConfig70_ClientOutputBufferLimit.fromPartial(object.clientOutputBufferLimitNormal)
        : undefined;
    message.maxmemoryPercent = object.maxmemoryPercent ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RedisConfig70.$type, RedisConfig70);

function createBaseRedisConfig70_ClientOutputBufferLimit(): RedisConfig70_ClientOutputBufferLimit {
  return {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig7_0.ClientOutputBufferLimit",
    hardLimit: undefined,
    softLimit: undefined,
    softSeconds: undefined,
  };
}

export const RedisConfig70_ClientOutputBufferLimit = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig7_0.ClientOutputBufferLimit" as const,

  encode(message: RedisConfig70_ClientOutputBufferLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hardLimit !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.hardLimit! }, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.softLimit !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.softLimit! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.softSeconds !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.softSeconds! }, writer.uint32(42).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedisConfig70_ClientOutputBufferLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedisConfig70_ClientOutputBufferLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hardLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.softLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.softSeconds = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedisConfig70_ClientOutputBufferLimit {
    return {
      $type: RedisConfig70_ClientOutputBufferLimit.$type,
      hardLimit: isSet(object.hardLimit) ? Number(object.hardLimit) : undefined,
      softLimit: isSet(object.softLimit) ? Number(object.softLimit) : undefined,
      softSeconds: isSet(object.softSeconds) ? Number(object.softSeconds) : undefined,
    };
  },

  toJSON(message: RedisConfig70_ClientOutputBufferLimit): unknown {
    const obj: any = {};
    if (message.hardLimit !== undefined) {
      obj.hardLimit = message.hardLimit;
    }
    if (message.softLimit !== undefined) {
      obj.softLimit = message.softLimit;
    }
    if (message.softSeconds !== undefined) {
      obj.softSeconds = message.softSeconds;
    }
    return obj;
  },

  create(base?: DeepPartial<RedisConfig70_ClientOutputBufferLimit>): RedisConfig70_ClientOutputBufferLimit {
    return RedisConfig70_ClientOutputBufferLimit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RedisConfig70_ClientOutputBufferLimit>): RedisConfig70_ClientOutputBufferLimit {
    const message = createBaseRedisConfig70_ClientOutputBufferLimit();
    message.hardLimit = object.hardLimit ?? undefined;
    message.softLimit = object.softLimit ?? undefined;
    message.softSeconds = object.softSeconds ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RedisConfig70_ClientOutputBufferLimit.$type, RedisConfig70_ClientOutputBufferLimit);

function createBaseRedisConfigSet70(): RedisConfigSet70 {
  return {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet7_0",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const RedisConfigSet70 = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet7_0" as const,

  encode(message: RedisConfigSet70, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      RedisConfig70.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      RedisConfig70.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      RedisConfig70.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedisConfigSet70 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedisConfigSet70();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = RedisConfig70.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = RedisConfig70.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = RedisConfig70.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedisConfigSet70 {
    return {
      $type: RedisConfigSet70.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? RedisConfig70.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? RedisConfig70.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? RedisConfig70.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: RedisConfigSet70): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = RedisConfig70.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = RedisConfig70.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = RedisConfig70.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<RedisConfigSet70>): RedisConfigSet70 {
    return RedisConfigSet70.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RedisConfigSet70>): RedisConfigSet70 {
    const message = createBaseRedisConfigSet70();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? RedisConfig70.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? RedisConfig70.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? RedisConfig70.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(RedisConfigSet70.$type, RedisConfigSet70);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
