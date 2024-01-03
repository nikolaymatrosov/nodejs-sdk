/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "yandex.cloud.quota";

export interface QuotaMetric {
  $type: "yandex.cloud.quota.QuotaMetric";
  /** formatted as <domain>.<metric>.<unit>, e.g. mdb.hdd.size */
  name: string;
  limit: number;
  usage: number;
}

export interface MetricLimit {
  $type: "yandex.cloud.quota.MetricLimit";
  name: string;
  limit: number;
}

export interface QuotaFailure {
  $type: "yandex.cloud.quota.QuotaFailure";
  violations: QuotaFailure_Violation[];
}

export interface QuotaFailure_Violation {
  $type: "yandex.cloud.quota.QuotaFailure.Violation";
  metric?:
    | QuotaMetric
    | undefined;
  /** new value for the MetricLimit.limit, so it is: old limit + delta */
  required: number;
}

function createBaseQuotaMetric(): QuotaMetric {
  return { $type: "yandex.cloud.quota.QuotaMetric", name: "", limit: 0, usage: 0 };
}

export const QuotaMetric = {
  $type: "yandex.cloud.quota.QuotaMetric" as const,

  encode(message: QuotaMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int64(message.limit);
    }
    if (message.usage !== 0) {
      writer.uint32(33).double(message.usage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaMetric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.usage = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuotaMetric {
    return {
      $type: QuotaMetric.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      usage: isSet(object.usage) ? globalThis.Number(object.usage) : 0,
    };
  },

  toJSON(message: QuotaMetric): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.usage !== 0) {
      obj.usage = message.usage;
    }
    return obj;
  },

  create(base?: DeepPartial<QuotaMetric>): QuotaMetric {
    return QuotaMetric.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuotaMetric>): QuotaMetric {
    const message = createBaseQuotaMetric();
    message.name = object.name ?? "";
    message.limit = object.limit ?? 0;
    message.usage = object.usage ?? 0;
    return message;
  },
};

messageTypeRegistry.set(QuotaMetric.$type, QuotaMetric);

function createBaseMetricLimit(): MetricLimit {
  return { $type: "yandex.cloud.quota.MetricLimit", name: "", limit: 0 };
}

export const MetricLimit = {
  $type: "yandex.cloud.quota.MetricLimit" as const,

  encode(message: MetricLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.limit !== 0) {
      writer.uint32(16).int64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MetricLimit {
    return {
      $type: MetricLimit.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: MetricLimit): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    return obj;
  },

  create(base?: DeepPartial<MetricLimit>): MetricLimit {
    return MetricLimit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MetricLimit>): MetricLimit {
    const message = createBaseMetricLimit();
    message.name = object.name ?? "";
    message.limit = object.limit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MetricLimit.$type, MetricLimit);

function createBaseQuotaFailure(): QuotaFailure {
  return { $type: "yandex.cloud.quota.QuotaFailure", violations: [] };
}

export const QuotaFailure = {
  $type: "yandex.cloud.quota.QuotaFailure" as const,

  encode(message: QuotaFailure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.violations) {
      QuotaFailure_Violation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaFailure {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.violations.push(QuotaFailure_Violation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuotaFailure {
    return {
      $type: QuotaFailure.$type,
      violations: globalThis.Array.isArray(object?.violations)
        ? object.violations.map((e: any) => QuotaFailure_Violation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuotaFailure): unknown {
    const obj: any = {};
    if (message.violations?.length) {
      obj.violations = message.violations.map((e) => QuotaFailure_Violation.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QuotaFailure>): QuotaFailure {
    return QuotaFailure.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuotaFailure>): QuotaFailure {
    const message = createBaseQuotaFailure();
    message.violations = object.violations?.map((e) => QuotaFailure_Violation.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(QuotaFailure.$type, QuotaFailure);

function createBaseQuotaFailure_Violation(): QuotaFailure_Violation {
  return { $type: "yandex.cloud.quota.QuotaFailure.Violation", metric: undefined, required: 0 };
}

export const QuotaFailure_Violation = {
  $type: "yandex.cloud.quota.QuotaFailure.Violation" as const,

  encode(message: QuotaFailure_Violation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metric !== undefined) {
      QuotaMetric.encode(message.metric, writer.uint32(10).fork()).ldelim();
    }
    if (message.required !== 0) {
      writer.uint32(16).int64(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaFailure_Violation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaFailure_Violation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metric = QuotaMetric.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.required = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuotaFailure_Violation {
    return {
      $type: QuotaFailure_Violation.$type,
      metric: isSet(object.metric) ? QuotaMetric.fromJSON(object.metric) : undefined,
      required: isSet(object.required) ? globalThis.Number(object.required) : 0,
    };
  },

  toJSON(message: QuotaFailure_Violation): unknown {
    const obj: any = {};
    if (message.metric !== undefined) {
      obj.metric = QuotaMetric.toJSON(message.metric);
    }
    if (message.required !== 0) {
      obj.required = Math.round(message.required);
    }
    return obj;
  },

  create(base?: DeepPartial<QuotaFailure_Violation>): QuotaFailure_Violation {
    return QuotaFailure_Violation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuotaFailure_Violation>): QuotaFailure_Violation {
    const message = createBaseQuotaFailure_Violation();
    message.metric = (object.metric !== undefined && object.metric !== null)
      ? QuotaMetric.fromPartial(object.metric)
      : undefined;
    message.required = object.required ?? 0;
    return message;
  },
};

messageTypeRegistry.set(QuotaFailure_Violation.$type, QuotaFailure_Violation);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
