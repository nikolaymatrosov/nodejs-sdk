/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../../typeRegistry";
import { Quantiles } from "../../common/quantiles";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.report.table";

/** Aggregated test results. */
export interface Report {
  $type: "yandex.cloud.loadtesting.api.v1.report.table.Report";
  /** Total count of HTTP responses, grouped by HTTP response code. */
  httpCodes: { [key: number]: number };
  /** Total count of network responses, grouped by response code. */
  netCodes: { [key: number]: number };
  /** Response time statistics, aggregated by quantiles. */
  quantiles?: Quantiles | undefined;
}

export interface Report_HttpCodesEntry {
  $type: "yandex.cloud.loadtesting.api.v1.report.table.Report.HttpCodesEntry";
  key: number;
  value: number;
}

export interface Report_NetCodesEntry {
  $type: "yandex.cloud.loadtesting.api.v1.report.table.Report.NetCodesEntry";
  key: number;
  value: number;
}

function createBaseReport(): Report {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.report.table.Report",
    httpCodes: {},
    netCodes: {},
    quantiles: undefined,
  };
}

export const Report = {
  $type: "yandex.cloud.loadtesting.api.v1.report.table.Report" as const,

  encode(message: Report, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.httpCodes).forEach(([key, value]) => {
      Report_HttpCodesEntry.encode({
        $type: "yandex.cloud.loadtesting.api.v1.report.table.Report.HttpCodesEntry",
        key: key as any,
        value,
      }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.netCodes).forEach(([key, value]) => {
      Report_NetCodesEntry.encode({
        $type: "yandex.cloud.loadtesting.api.v1.report.table.Report.NetCodesEntry",
        key: key as any,
        value,
      }, writer.uint32(18).fork()).ldelim();
    });
    if (message.quantiles !== undefined) {
      Quantiles.encode(message.quantiles, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Report {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Report_HttpCodesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.httpCodes[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = Report_NetCodesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.netCodes[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quantiles = Quantiles.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Report {
    return {
      $type: Report.$type,
      httpCodes: isObject(object.httpCodes)
        ? Object.entries(object.httpCodes).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      netCodes: isObject(object.netCodes)
        ? Object.entries(object.netCodes).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      quantiles: isSet(object.quantiles) ? Quantiles.fromJSON(object.quantiles) : undefined,
    };
  },

  toJSON(message: Report): unknown {
    const obj: any = {};
    if (message.httpCodes) {
      const entries = Object.entries(message.httpCodes);
      if (entries.length > 0) {
        obj.httpCodes = {};
        entries.forEach(([k, v]) => {
          obj.httpCodes[k] = Math.round(v);
        });
      }
    }
    if (message.netCodes) {
      const entries = Object.entries(message.netCodes);
      if (entries.length > 0) {
        obj.netCodes = {};
        entries.forEach(([k, v]) => {
          obj.netCodes[k] = Math.round(v);
        });
      }
    }
    if (message.quantiles !== undefined) {
      obj.quantiles = Quantiles.toJSON(message.quantiles);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Report>, I>>(base?: I): Report {
    return Report.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Report>, I>>(object: I): Report {
    const message = createBaseReport();
    message.httpCodes = Object.entries(object.httpCodes ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.netCodes = Object.entries(object.netCodes ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.quantiles = (object.quantiles !== undefined && object.quantiles !== null)
      ? Quantiles.fromPartial(object.quantiles)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Report.$type, Report);

function createBaseReport_HttpCodesEntry(): Report_HttpCodesEntry {
  return { $type: "yandex.cloud.loadtesting.api.v1.report.table.Report.HttpCodesEntry", key: 0, value: 0 };
}

export const Report_HttpCodesEntry = {
  $type: "yandex.cloud.loadtesting.api.v1.report.table.Report.HttpCodesEntry" as const,

  encode(message: Report_HttpCodesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Report_HttpCodesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport_HttpCodesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Report_HttpCodesEntry {
    return {
      $type: Report_HttpCodesEntry.$type,
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: Report_HttpCodesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Report_HttpCodesEntry>, I>>(base?: I): Report_HttpCodesEntry {
    return Report_HttpCodesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Report_HttpCodesEntry>, I>>(object: I): Report_HttpCodesEntry {
    const message = createBaseReport_HttpCodesEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Report_HttpCodesEntry.$type, Report_HttpCodesEntry);

function createBaseReport_NetCodesEntry(): Report_NetCodesEntry {
  return { $type: "yandex.cloud.loadtesting.api.v1.report.table.Report.NetCodesEntry", key: 0, value: 0 };
}

export const Report_NetCodesEntry = {
  $type: "yandex.cloud.loadtesting.api.v1.report.table.Report.NetCodesEntry" as const,

  encode(message: Report_NetCodesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Report_NetCodesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport_NetCodesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Report_NetCodesEntry {
    return {
      $type: Report_NetCodesEntry.$type,
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: Report_NetCodesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Report_NetCodesEntry>, I>>(base?: I): Report_NetCodesEntry {
    return Report_NetCodesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Report_NetCodesEntry>, I>>(object: I): Report_NetCodesEntry {
    const message = createBaseReport_NetCodesEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Report_NetCodesEntry.$type, Report_NetCodesEntry);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
