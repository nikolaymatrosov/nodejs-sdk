/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface ScanPolicy {
  $type: "yandex.cloud.containerregistry.v1.ScanPolicy";
  /** Output only. ID of the scan policy. */
  id: string;
  /**
   * ID of the registry that the scan policy belongs to.
   * Required. The maximum string length in characters is 50.
   */
  registryId: string;
  /** Name of the scan policy. */
  name: string;
  /**
   * Description of the scan policy.
   * The maximum string length in characters is 256.
   */
  description: string;
  /** The rules of scan policy. */
  rules?:
    | ScanRules
    | undefined;
  /** Output only. Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Turns off scan policy. */
  disabled: boolean;
}

export interface ScanRules {
  $type: "yandex.cloud.containerregistry.v1.ScanRules";
  /** Description of on-push scan rule. */
  pushRule?:
    | PushRule
    | undefined;
  /** Description of time based rescan rule. */
  scheduleRules: ScheduledRule[];
}

export interface PushRule {
  $type: "yandex.cloud.containerregistry.v1.PushRule";
  /** List of repositories that are scanned with rule. Child repositories are included into parent node. "*" - means all repositories in registry */
  repositoryPrefixes: string[];
  /** Turns off scan rule. */
  disabled: boolean;
}

export interface ScheduledRule {
  $type: "yandex.cloud.containerregistry.v1.ScheduledRule";
  /** List of repositories that are scanned with rule. Child repositories are included into parent node. "*" - means all repositories in registry */
  repositoryPrefixes: string[];
  /** Period of time since last scan to trigger automatic rescan. */
  rescanPeriod?:
    | Duration
    | undefined;
  /** Turns off scan rule. */
  disabled: boolean;
}

function createBaseScanPolicy(): ScanPolicy {
  return {
    $type: "yandex.cloud.containerregistry.v1.ScanPolicy",
    id: "",
    registryId: "",
    name: "",
    description: "",
    rules: undefined,
    createdAt: undefined,
    disabled: false,
  };
}

export const ScanPolicy = {
  $type: "yandex.cloud.containerregistry.v1.ScanPolicy" as const,

  encode(message: ScanPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.registryId !== "") {
      writer.uint32(18).string(message.registryId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.rules !== undefined) {
      ScanRules.encode(message.rules, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.disabled === true) {
      writer.uint32(56).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanPolicy();
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

          message.registryId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rules = ScanRules.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.disabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanPolicy {
    return {
      $type: ScanPolicy.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      rules: isSet(object.rules) ? ScanRules.fromJSON(object.rules) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
    };
  },

  toJSON(message: ScanPolicy): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.rules !== undefined) {
      obj.rules = ScanRules.toJSON(message.rules);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScanPolicy>, I>>(base?: I): ScanPolicy {
    return ScanPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScanPolicy>, I>>(object: I): ScanPolicy {
    const message = createBaseScanPolicy();
    message.id = object.id ?? "";
    message.registryId = object.registryId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rules = (object.rules !== undefined && object.rules !== null)
      ? ScanRules.fromPartial(object.rules)
      : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.disabled = object.disabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(ScanPolicy.$type, ScanPolicy);

function createBaseScanRules(): ScanRules {
  return { $type: "yandex.cloud.containerregistry.v1.ScanRules", pushRule: undefined, scheduleRules: [] };
}

export const ScanRules = {
  $type: "yandex.cloud.containerregistry.v1.ScanRules" as const,

  encode(message: ScanRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pushRule !== undefined) {
      PushRule.encode(message.pushRule, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.scheduleRules) {
      ScheduledRule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanRules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pushRule = PushRule.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scheduleRules.push(ScheduledRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanRules {
    return {
      $type: ScanRules.$type,
      pushRule: isSet(object.pushRule) ? PushRule.fromJSON(object.pushRule) : undefined,
      scheduleRules: globalThis.Array.isArray(object?.scheduleRules)
        ? object.scheduleRules.map((e: any) => ScheduledRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ScanRules): unknown {
    const obj: any = {};
    if (message.pushRule !== undefined) {
      obj.pushRule = PushRule.toJSON(message.pushRule);
    }
    if (message.scheduleRules?.length) {
      obj.scheduleRules = message.scheduleRules.map((e) => ScheduledRule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScanRules>, I>>(base?: I): ScanRules {
    return ScanRules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScanRules>, I>>(object: I): ScanRules {
    const message = createBaseScanRules();
    message.pushRule = (object.pushRule !== undefined && object.pushRule !== null)
      ? PushRule.fromPartial(object.pushRule)
      : undefined;
    message.scheduleRules = object.scheduleRules?.map((e) => ScheduledRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ScanRules.$type, ScanRules);

function createBasePushRule(): PushRule {
  return { $type: "yandex.cloud.containerregistry.v1.PushRule", repositoryPrefixes: [], disabled: false };
}

export const PushRule = {
  $type: "yandex.cloud.containerregistry.v1.PushRule" as const,

  encode(message: PushRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.repositoryPrefixes) {
      writer.uint32(10).string(v!);
    }
    if (message.disabled === true) {
      writer.uint32(16).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PushRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePushRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repositoryPrefixes.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.disabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PushRule {
    return {
      $type: PushRule.$type,
      repositoryPrefixes: globalThis.Array.isArray(object?.repositoryPrefixes)
        ? object.repositoryPrefixes.map((e: any) => globalThis.String(e))
        : [],
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
    };
  },

  toJSON(message: PushRule): unknown {
    const obj: any = {};
    if (message.repositoryPrefixes?.length) {
      obj.repositoryPrefixes = message.repositoryPrefixes;
    }
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PushRule>, I>>(base?: I): PushRule {
    return PushRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PushRule>, I>>(object: I): PushRule {
    const message = createBasePushRule();
    message.repositoryPrefixes = object.repositoryPrefixes?.map((e) => e) || [];
    message.disabled = object.disabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(PushRule.$type, PushRule);

function createBaseScheduledRule(): ScheduledRule {
  return {
    $type: "yandex.cloud.containerregistry.v1.ScheduledRule",
    repositoryPrefixes: [],
    rescanPeriod: undefined,
    disabled: false,
  };
}

export const ScheduledRule = {
  $type: "yandex.cloud.containerregistry.v1.ScheduledRule" as const,

  encode(message: ScheduledRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.repositoryPrefixes) {
      writer.uint32(10).string(v!);
    }
    if (message.rescanPeriod !== undefined) {
      Duration.encode(message.rescanPeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.disabled === true) {
      writer.uint32(24).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduledRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repositoryPrefixes.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rescanPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScheduledRule {
    return {
      $type: ScheduledRule.$type,
      repositoryPrefixes: globalThis.Array.isArray(object?.repositoryPrefixes)
        ? object.repositoryPrefixes.map((e: any) => globalThis.String(e))
        : [],
      rescanPeriod: isSet(object.rescanPeriod) ? Duration.fromJSON(object.rescanPeriod) : undefined,
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
    };
  },

  toJSON(message: ScheduledRule): unknown {
    const obj: any = {};
    if (message.repositoryPrefixes?.length) {
      obj.repositoryPrefixes = message.repositoryPrefixes;
    }
    if (message.rescanPeriod !== undefined) {
      obj.rescanPeriod = Duration.toJSON(message.rescanPeriod);
    }
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScheduledRule>, I>>(base?: I): ScheduledRule {
    return ScheduledRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScheduledRule>, I>>(object: I): ScheduledRule {
    const message = createBaseScheduledRule();
    message.repositoryPrefixes = object.repositoryPrefixes?.map((e) => e) || [];
    message.rescanPeriod = (object.rescanPeriod !== undefined && object.rescanPeriod !== null)
      ? Duration.fromPartial(object.rescanPeriod)
      : undefined;
    message.disabled = object.disabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(ScheduledRule.$type, ScheduledRule);

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
  const seconds = Math.trunc(date.getTime() / 1_000);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
