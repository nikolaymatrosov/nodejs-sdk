/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum YdbCleanupPolicy {
  YDB_CLEANUP_POLICY_UNSPECIFIED = 0,
  YDB_CLEANUP_POLICY_DISABLED = 1,
  YDB_CLEANUP_POLICY_DROP = 2,
  UNRECOGNIZED = -1,
}

export function ydbCleanupPolicyFromJSON(object: any): YdbCleanupPolicy {
  switch (object) {
    case 0:
    case "YDB_CLEANUP_POLICY_UNSPECIFIED":
      return YdbCleanupPolicy.YDB_CLEANUP_POLICY_UNSPECIFIED;
    case 1:
    case "YDB_CLEANUP_POLICY_DISABLED":
      return YdbCleanupPolicy.YDB_CLEANUP_POLICY_DISABLED;
    case 2:
    case "YDB_CLEANUP_POLICY_DROP":
      return YdbCleanupPolicy.YDB_CLEANUP_POLICY_DROP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return YdbCleanupPolicy.UNRECOGNIZED;
  }
}

export function ydbCleanupPolicyToJSON(object: YdbCleanupPolicy): string {
  switch (object) {
    case YdbCleanupPolicy.YDB_CLEANUP_POLICY_UNSPECIFIED:
      return "YDB_CLEANUP_POLICY_UNSPECIFIED";
    case YdbCleanupPolicy.YDB_CLEANUP_POLICY_DISABLED:
      return "YDB_CLEANUP_POLICY_DISABLED";
    case YdbCleanupPolicy.YDB_CLEANUP_POLICY_DROP:
      return "YDB_CLEANUP_POLICY_DROP";
    case YdbCleanupPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface YdbSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource";
  /** Path in YDB where to store tables */
  database: string;
  /** Instance of YDB. example: ydb-ru-prestable.yandex.net:2135 */
  instance: string;
  serviceAccountId: string;
  paths: string[];
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
  /** Security groups */
  securityGroups: string[];
  /** Authorization Key */
  saKeyContent: string;
}

export interface YdbTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget";
  /** Path in YDB where to store tables */
  database: string;
  /** Instance of YDB. example: ydb-ru-prestable.yandex.net:2135 */
  instance: string;
  serviceAccountId: string;
  /** Path extension for database, each table will be layouted into this path */
  path: string;
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
  /** Security groups */
  securityGroups: string[];
  /** SA content */
  saKeyContent: string;
  /** Cleanup policy */
  cleanupPolicy: YdbCleanupPolicy;
}

function createBaseYdbSource(): YdbSource {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource",
    database: "",
    instance: "",
    serviceAccountId: "",
    paths: [],
    subnetId: "",
    securityGroups: [],
    saKeyContent: "",
  };
}

export const YdbSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource" as const,

  encode(message: YdbSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.instance !== "") {
      writer.uint32(18).string(message.instance);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(50).string(message.serviceAccountId);
    }
    for (const v of message.paths) {
      writer.uint32(42).string(v!);
    }
    if (message.subnetId !== "") {
      writer.uint32(242).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(274).string(v!);
    }
    if (message.saKeyContent !== "") {
      writer.uint32(266).string(message.saKeyContent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): YdbSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYdbSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.database = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instance = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.paths.push(reader.string());
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.saKeyContent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): YdbSource {
    return {
      $type: YdbSource.$type,
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      instance: isSet(object.instance) ? globalThis.String(object.instance) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      paths: globalThis.Array.isArray(object?.paths) ? object.paths.map((e: any) => globalThis.String(e)) : [],
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      saKeyContent: isSet(object.saKeyContent) ? globalThis.String(object.saKeyContent) : "",
    };
  },

  toJSON(message: YdbSource): unknown {
    const obj: any = {};
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.instance !== "") {
      obj.instance = message.instance;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.paths?.length) {
      obj.paths = message.paths;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
    }
    if (message.saKeyContent !== "") {
      obj.saKeyContent = message.saKeyContent;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<YdbSource>, I>>(base?: I): YdbSource {
    return YdbSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<YdbSource>, I>>(object: I): YdbSource {
    const message = createBaseYdbSource();
    message.database = object.database ?? "";
    message.instance = object.instance ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.paths = object.paths?.map((e) => e) || [];
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.saKeyContent = object.saKeyContent ?? "";
    return message;
  },
};

messageTypeRegistry.set(YdbSource.$type, YdbSource);

function createBaseYdbTarget(): YdbTarget {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget",
    database: "",
    instance: "",
    serviceAccountId: "",
    path: "",
    subnetId: "",
    securityGroups: [],
    saKeyContent: "",
    cleanupPolicy: 0,
  };
}

export const YdbTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget" as const,

  encode(message: YdbTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.instance !== "") {
      writer.uint32(18).string(message.instance);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(90).string(message.serviceAccountId);
    }
    if (message.path !== "") {
      writer.uint32(82).string(message.path);
    }
    if (message.subnetId !== "") {
      writer.uint32(242).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(266).string(v!);
    }
    if (message.saKeyContent !== "") {
      writer.uint32(258).string(message.saKeyContent);
    }
    if (message.cleanupPolicy !== 0) {
      writer.uint32(168).int32(message.cleanupPolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): YdbTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYdbTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.database = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instance = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.path = reader.string();
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.saKeyContent = reader.string();
          continue;
        case 21:
          if (tag !== 168) {
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

  fromJSON(object: any): YdbTarget {
    return {
      $type: YdbTarget.$type,
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      instance: isSet(object.instance) ? globalThis.String(object.instance) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      saKeyContent: isSet(object.saKeyContent) ? globalThis.String(object.saKeyContent) : "",
      cleanupPolicy: isSet(object.cleanupPolicy) ? ydbCleanupPolicyFromJSON(object.cleanupPolicy) : 0,
    };
  },

  toJSON(message: YdbTarget): unknown {
    const obj: any = {};
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.instance !== "") {
      obj.instance = message.instance;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
    }
    if (message.saKeyContent !== "") {
      obj.saKeyContent = message.saKeyContent;
    }
    if (message.cleanupPolicy !== 0) {
      obj.cleanupPolicy = ydbCleanupPolicyToJSON(message.cleanupPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<YdbTarget>, I>>(base?: I): YdbTarget {
    return YdbTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<YdbTarget>, I>>(object: I): YdbTarget {
    const message = createBaseYdbTarget();
    message.database = object.database ?? "";
    message.instance = object.instance ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.path = object.path ?? "";
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.saKeyContent = object.saKeyContent ?? "";
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    return message;
  },
};

messageTypeRegistry.set(YdbTarget.$type, YdbTarget);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
