/* eslint-disable */
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.redis.v1.config";

/**
 * Fields and structure of `RedisConfig` reflects Redis configuration file
 * parameters.
 */
export interface RedisConfig60 {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_0";
  /**
   * Redis key eviction policy for a dataset that reaches maximum memory,
   * available to the host. Redis maxmemory setting depends on Managed
   * Service for Redis [host class](/docs/managed-redis/concepts/instance-types).
   *
   * All policies are described in detail in [Redis documentation](https://redis.io/topics/lru-cache).
   */
  maxmemoryPolicy: RedisConfig60_MaxmemoryPolicy;
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
    | RedisConfig60_ClientOutputBufferLimit
    | undefined;
  /** Redis connection output buffers limits for clients. */
  clientOutputBufferLimitNormal?: RedisConfig60_ClientOutputBufferLimit | undefined;
}

export enum RedisConfig60_MaxmemoryPolicy {
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

export function redisConfig60_MaxmemoryPolicyFromJSON(object: any): RedisConfig60_MaxmemoryPolicy {
  switch (object) {
    case 0:
    case "MAXMEMORY_POLICY_UNSPECIFIED":
      return RedisConfig60_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED;
    case 1:
    case "VOLATILE_LRU":
      return RedisConfig60_MaxmemoryPolicy.VOLATILE_LRU;
    case 2:
    case "ALLKEYS_LRU":
      return RedisConfig60_MaxmemoryPolicy.ALLKEYS_LRU;
    case 3:
    case "VOLATILE_LFU":
      return RedisConfig60_MaxmemoryPolicy.VOLATILE_LFU;
    case 4:
    case "ALLKEYS_LFU":
      return RedisConfig60_MaxmemoryPolicy.ALLKEYS_LFU;
    case 5:
    case "VOLATILE_RANDOM":
      return RedisConfig60_MaxmemoryPolicy.VOLATILE_RANDOM;
    case 6:
    case "ALLKEYS_RANDOM":
      return RedisConfig60_MaxmemoryPolicy.ALLKEYS_RANDOM;
    case 7:
    case "VOLATILE_TTL":
      return RedisConfig60_MaxmemoryPolicy.VOLATILE_TTL;
    case 8:
    case "NOEVICTION":
      return RedisConfig60_MaxmemoryPolicy.NOEVICTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RedisConfig60_MaxmemoryPolicy.UNRECOGNIZED;
  }
}

export function redisConfig60_MaxmemoryPolicyToJSON(object: RedisConfig60_MaxmemoryPolicy): string {
  switch (object) {
    case RedisConfig60_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED:
      return "MAXMEMORY_POLICY_UNSPECIFIED";
    case RedisConfig60_MaxmemoryPolicy.VOLATILE_LRU:
      return "VOLATILE_LRU";
    case RedisConfig60_MaxmemoryPolicy.ALLKEYS_LRU:
      return "ALLKEYS_LRU";
    case RedisConfig60_MaxmemoryPolicy.VOLATILE_LFU:
      return "VOLATILE_LFU";
    case RedisConfig60_MaxmemoryPolicy.ALLKEYS_LFU:
      return "ALLKEYS_LFU";
    case RedisConfig60_MaxmemoryPolicy.VOLATILE_RANDOM:
      return "VOLATILE_RANDOM";
    case RedisConfig60_MaxmemoryPolicy.ALLKEYS_RANDOM:
      return "ALLKEYS_RANDOM";
    case RedisConfig60_MaxmemoryPolicy.VOLATILE_TTL:
      return "VOLATILE_TTL";
    case RedisConfig60_MaxmemoryPolicy.NOEVICTION:
      return "NOEVICTION";
    case RedisConfig60_MaxmemoryPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RedisConfig60_ClientOutputBufferLimit {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_0.ClientOutputBufferLimit";
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

export interface RedisConfigSet60 {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet6_0";
  /**
   * Effective settings for a Redis 6.0 cluster (a combination of settings
   * defined in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | RedisConfig60
    | undefined;
  /** User-defined settings for a Redis 6.0 cluster. */
  userConfig?:
    | RedisConfig60
    | undefined;
  /** Default configuration for a Redis 6.0 cluster. */
  defaultConfig?: RedisConfig60 | undefined;
}

function createBaseRedisConfig60(): RedisConfig60 {
  return {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_0",
    maxmemoryPolicy: 0,
    timeout: undefined,
    password: "",
    databases: undefined,
    slowlogLogSlowerThan: undefined,
    slowlogMaxLen: undefined,
    notifyKeyspaceEvents: "",
    clientOutputBufferLimitPubsub: undefined,
    clientOutputBufferLimitNormal: undefined,
  };
}

export const RedisConfig60 = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_0" as const,

  encode(message: RedisConfig60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      RedisConfig60_ClientOutputBufferLimit.encode(message.clientOutputBufferLimitPubsub, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.clientOutputBufferLimitNormal !== undefined) {
      RedisConfig60_ClientOutputBufferLimit.encode(message.clientOutputBufferLimitNormal, writer.uint32(74).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedisConfig60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedisConfig60();
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

          message.clientOutputBufferLimitPubsub = RedisConfig60_ClientOutputBufferLimit.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.clientOutputBufferLimitNormal = RedisConfig60_ClientOutputBufferLimit.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedisConfig60 {
    return {
      $type: RedisConfig60.$type,
      maxmemoryPolicy: isSet(object.maxmemoryPolicy)
        ? redisConfig60_MaxmemoryPolicyFromJSON(object.maxmemoryPolicy)
        : 0,
      timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      databases: isSet(object.databases) ? Number(object.databases) : undefined,
      slowlogLogSlowerThan: isSet(object.slowlogLogSlowerThan) ? Number(object.slowlogLogSlowerThan) : undefined,
      slowlogMaxLen: isSet(object.slowlogMaxLen) ? Number(object.slowlogMaxLen) : undefined,
      notifyKeyspaceEvents: isSet(object.notifyKeyspaceEvents) ? globalThis.String(object.notifyKeyspaceEvents) : "",
      clientOutputBufferLimitPubsub: isSet(object.clientOutputBufferLimitPubsub)
        ? RedisConfig60_ClientOutputBufferLimit.fromJSON(object.clientOutputBufferLimitPubsub)
        : undefined,
      clientOutputBufferLimitNormal: isSet(object.clientOutputBufferLimitNormal)
        ? RedisConfig60_ClientOutputBufferLimit.fromJSON(object.clientOutputBufferLimitNormal)
        : undefined,
    };
  },

  toJSON(message: RedisConfig60): unknown {
    const obj: any = {};
    if (message.maxmemoryPolicy !== 0) {
      obj.maxmemoryPolicy = redisConfig60_MaxmemoryPolicyToJSON(message.maxmemoryPolicy);
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
      obj.clientOutputBufferLimitPubsub = RedisConfig60_ClientOutputBufferLimit.toJSON(
        message.clientOutputBufferLimitPubsub,
      );
    }
    if (message.clientOutputBufferLimitNormal !== undefined) {
      obj.clientOutputBufferLimitNormal = RedisConfig60_ClientOutputBufferLimit.toJSON(
        message.clientOutputBufferLimitNormal,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<RedisConfig60>): RedisConfig60 {
    return RedisConfig60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RedisConfig60>): RedisConfig60 {
    const message = createBaseRedisConfig60();
    message.maxmemoryPolicy = object.maxmemoryPolicy ?? 0;
    message.timeout = object.timeout ?? undefined;
    message.password = object.password ?? "";
    message.databases = object.databases ?? undefined;
    message.slowlogLogSlowerThan = object.slowlogLogSlowerThan ?? undefined;
    message.slowlogMaxLen = object.slowlogMaxLen ?? undefined;
    message.notifyKeyspaceEvents = object.notifyKeyspaceEvents ?? "";
    message.clientOutputBufferLimitPubsub =
      (object.clientOutputBufferLimitPubsub !== undefined && object.clientOutputBufferLimitPubsub !== null)
        ? RedisConfig60_ClientOutputBufferLimit.fromPartial(object.clientOutputBufferLimitPubsub)
        : undefined;
    message.clientOutputBufferLimitNormal =
      (object.clientOutputBufferLimitNormal !== undefined && object.clientOutputBufferLimitNormal !== null)
        ? RedisConfig60_ClientOutputBufferLimit.fromPartial(object.clientOutputBufferLimitNormal)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(RedisConfig60.$type, RedisConfig60);

function createBaseRedisConfig60_ClientOutputBufferLimit(): RedisConfig60_ClientOutputBufferLimit {
  return {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_0.ClientOutputBufferLimit",
    hardLimit: undefined,
    softLimit: undefined,
    softSeconds: undefined,
  };
}

export const RedisConfig60_ClientOutputBufferLimit = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_0.ClientOutputBufferLimit" as const,

  encode(message: RedisConfig60_ClientOutputBufferLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RedisConfig60_ClientOutputBufferLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedisConfig60_ClientOutputBufferLimit();
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

  fromJSON(object: any): RedisConfig60_ClientOutputBufferLimit {
    return {
      $type: RedisConfig60_ClientOutputBufferLimit.$type,
      hardLimit: isSet(object.hardLimit) ? Number(object.hardLimit) : undefined,
      softLimit: isSet(object.softLimit) ? Number(object.softLimit) : undefined,
      softSeconds: isSet(object.softSeconds) ? Number(object.softSeconds) : undefined,
    };
  },

  toJSON(message: RedisConfig60_ClientOutputBufferLimit): unknown {
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

  create(base?: DeepPartial<RedisConfig60_ClientOutputBufferLimit>): RedisConfig60_ClientOutputBufferLimit {
    return RedisConfig60_ClientOutputBufferLimit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RedisConfig60_ClientOutputBufferLimit>): RedisConfig60_ClientOutputBufferLimit {
    const message = createBaseRedisConfig60_ClientOutputBufferLimit();
    message.hardLimit = object.hardLimit ?? undefined;
    message.softLimit = object.softLimit ?? undefined;
    message.softSeconds = object.softSeconds ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RedisConfig60_ClientOutputBufferLimit.$type, RedisConfig60_ClientOutputBufferLimit);

function createBaseRedisConfigSet60(): RedisConfigSet60 {
  return {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet6_0",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const RedisConfigSet60 = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet6_0" as const,

  encode(message: RedisConfigSet60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      RedisConfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      RedisConfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      RedisConfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedisConfigSet60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedisConfigSet60();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = RedisConfig60.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = RedisConfig60.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = RedisConfig60.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedisConfigSet60 {
    return {
      $type: RedisConfigSet60.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? RedisConfig60.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? RedisConfig60.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? RedisConfig60.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: RedisConfigSet60): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = RedisConfig60.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = RedisConfig60.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = RedisConfig60.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<RedisConfigSet60>): RedisConfigSet60 {
    return RedisConfigSet60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RedisConfigSet60>): RedisConfigSet60 {
    const message = createBaseRedisConfigSet60();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? RedisConfig60.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? RedisConfig60.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? RedisConfig60.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(RedisConfigSet60.$type, RedisConfigSet60);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
