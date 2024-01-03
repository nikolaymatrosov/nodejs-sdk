/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface LifecyclePolicy {
  $type: "yandex.cloud.containerregistry.v1.LifecyclePolicy";
  /** ID of the lifecycle policy. */
  id: string;
  /** Name of the lifecycle policy. */
  name: string;
  /**
   * ID of the repository that the lifecycle policy belongs to.
   * Required. The maximum string length in characters is 50.
   */
  repositoryId: string;
  /**
   * Description of the lifecycle policy.
   * The maximum string length in characters is 256.
   */
  description: string;
  /** Status of lifecycle policy. */
  status: LifecyclePolicy_Status;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** The rules of lifecycle policy. */
  rules: LifecycleRule[];
}

export enum LifecyclePolicy_Status {
  STATUS_UNSPECIFIED = 0,
  /** ACTIVE - Policy is active and regularly deletes Docker images according to the established rules. */
  ACTIVE = 1,
  /**
   * DISABLED - Policy is disabled and does not delete Docker images in the repository.
   * Policies in this status can be used for preparing and testing rules.
   */
  DISABLED = 2,
  UNRECOGNIZED = -1,
}

export function lifecyclePolicy_StatusFromJSON(object: any): LifecyclePolicy_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return LifecyclePolicy_Status.STATUS_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return LifecyclePolicy_Status.ACTIVE;
    case 2:
    case "DISABLED":
      return LifecyclePolicy_Status.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LifecyclePolicy_Status.UNRECOGNIZED;
  }
}

export function lifecyclePolicy_StatusToJSON(object: LifecyclePolicy_Status): string {
  switch (object) {
    case LifecyclePolicy_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case LifecyclePolicy_Status.ACTIVE:
      return "ACTIVE";
    case LifecyclePolicy_Status.DISABLED:
      return "DISABLED";
    case LifecyclePolicy_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LifecycleRule {
  $type: "yandex.cloud.containerregistry.v1.LifecycleRule";
  /** Description of the lifecycle policy rule. */
  description: string;
  /**
   * Period of time for automatic deletion.
   * Period must be a multiple of 24 hours.
   */
  expirePeriod?:
    | Duration
    | undefined;
  /** Tag for specifying a filter in the form of a regular expression. */
  tagRegexp: string;
  /** Tag for applying the rule to Docker images without tags. */
  untagged: boolean;
  /** Number of Docker images (falling under the specified filter by tags) that must be left, even if the expire_period has already expired. */
  retainedTop: number;
}

function createBaseLifecyclePolicy(): LifecyclePolicy {
  return {
    $type: "yandex.cloud.containerregistry.v1.LifecyclePolicy",
    id: "",
    name: "",
    repositoryId: "",
    description: "",
    status: 0,
    createdAt: undefined,
    rules: [],
  };
}

export const LifecyclePolicy = {
  $type: "yandex.cloud.containerregistry.v1.LifecyclePolicy" as const,

  encode(message: LifecyclePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.repositoryId !== "") {
      writer.uint32(26).string(message.repositoryId);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.rules) {
      LifecycleRule.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecyclePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecyclePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repositoryId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecyclePolicy {
    return {
      $type: LifecyclePolicy.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      repositoryId: isSet(object.repositoryId) ? globalThis.String(object.repositoryId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? lifecyclePolicy_StatusFromJSON(object.status) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e: any) => LifecycleRule.fromJSON(e)) : [],
    };
  },

  toJSON(message: LifecyclePolicy): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.repositoryId !== "") {
      obj.repositoryId = message.repositoryId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== 0) {
      obj.status = lifecyclePolicy_StatusToJSON(message.status);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => LifecycleRule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecyclePolicy>, I>>(base?: I): LifecyclePolicy {
    return LifecyclePolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecyclePolicy>, I>>(object: I): LifecyclePolicy {
    const message = createBaseLifecyclePolicy();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.repositoryId = object.repositoryId ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.rules = object.rules?.map((e) => LifecycleRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(LifecyclePolicy.$type, LifecyclePolicy);

function createBaseLifecycleRule(): LifecycleRule {
  return {
    $type: "yandex.cloud.containerregistry.v1.LifecycleRule",
    description: "",
    expirePeriod: undefined,
    tagRegexp: "",
    untagged: false,
    retainedTop: 0,
  };
}

export const LifecycleRule = {
  $type: "yandex.cloud.containerregistry.v1.LifecycleRule" as const,

  encode(message: LifecycleRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.expirePeriod !== undefined) {
      Duration.encode(message.expirePeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.tagRegexp !== "") {
      writer.uint32(26).string(message.tagRegexp);
    }
    if (message.untagged === true) {
      writer.uint32(32).bool(message.untagged);
    }
    if (message.retainedTop !== 0) {
      writer.uint32(40).int64(message.retainedTop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifecycleRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.expirePeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tagRegexp = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.untagged = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.retainedTop = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule {
    return {
      $type: LifecycleRule.$type,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      expirePeriod: isSet(object.expirePeriod) ? Duration.fromJSON(object.expirePeriod) : undefined,
      tagRegexp: isSet(object.tagRegexp) ? globalThis.String(object.tagRegexp) : "",
      untagged: isSet(object.untagged) ? globalThis.Boolean(object.untagged) : false,
      retainedTop: isSet(object.retainedTop) ? globalThis.Number(object.retainedTop) : 0,
    };
  },

  toJSON(message: LifecycleRule): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.expirePeriod !== undefined) {
      obj.expirePeriod = Duration.toJSON(message.expirePeriod);
    }
    if (message.tagRegexp !== "") {
      obj.tagRegexp = message.tagRegexp;
    }
    if (message.untagged === true) {
      obj.untagged = message.untagged;
    }
    if (message.retainedTop !== 0) {
      obj.retainedTop = Math.round(message.retainedTop);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifecycleRule>, I>>(base?: I): LifecycleRule {
    return LifecycleRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifecycleRule>, I>>(object: I): LifecycleRule {
    const message = createBaseLifecycleRule();
    message.description = object.description ?? "";
    message.expirePeriod = (object.expirePeriod !== undefined && object.expirePeriod !== null)
      ? Duration.fromPartial(object.expirePeriod)
      : undefined;
    message.tagRegexp = object.tagRegexp ?? "";
    message.untagged = object.untagged ?? false;
    message.retainedTop = object.retainedTop ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule.$type, LifecycleRule);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
