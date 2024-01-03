/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.monitoring.v3";

/** List of available aggregate functions for downsampling. */
export interface Downsampling {
  $type: "yandex.cloud.monitoring.v3.Downsampling";
  /** Maximum number of points to be returned. */
  maxPoints?:
    | number
    | undefined;
  /**
   * Time interval (grid) for downsampling in milliseconds.
   * Points in the specified range are aggregated into one time point.
   */
  gridInterval?:
    | number
    | undefined;
  /** Disable downsampling. */
  disabled?:
    | boolean
    | undefined;
  /** Function that is used for downsampling. */
  gridAggregation: Downsampling_GridAggregation;
  /** Parameters for filling gaps in data. */
  gapFilling: Downsampling_GapFilling;
}

/** List of available aggregate functions for downsampling. */
export enum Downsampling_GridAggregation {
  GRID_AGGREGATION_UNSPECIFIED = 0,
  /** GRID_AGGREGATION_MAX - Max value. */
  GRID_AGGREGATION_MAX = 1,
  /** GRID_AGGREGATION_MIN - Min value. */
  GRID_AGGREGATION_MIN = 2,
  /** GRID_AGGREGATION_SUM - Sum of values. */
  GRID_AGGREGATION_SUM = 3,
  /** GRID_AGGREGATION_AVG - Average value. */
  GRID_AGGREGATION_AVG = 4,
  /** GRID_AGGREGATION_LAST - Last value. */
  GRID_AGGREGATION_LAST = 5,
  /** GRID_AGGREGATION_COUNT - Total count of points. */
  GRID_AGGREGATION_COUNT = 6,
  UNRECOGNIZED = -1,
}

export function downsampling_GridAggregationFromJSON(object: any): Downsampling_GridAggregation {
  switch (object) {
    case 0:
    case "GRID_AGGREGATION_UNSPECIFIED":
      return Downsampling_GridAggregation.GRID_AGGREGATION_UNSPECIFIED;
    case 1:
    case "GRID_AGGREGATION_MAX":
      return Downsampling_GridAggregation.GRID_AGGREGATION_MAX;
    case 2:
    case "GRID_AGGREGATION_MIN":
      return Downsampling_GridAggregation.GRID_AGGREGATION_MIN;
    case 3:
    case "GRID_AGGREGATION_SUM":
      return Downsampling_GridAggregation.GRID_AGGREGATION_SUM;
    case 4:
    case "GRID_AGGREGATION_AVG":
      return Downsampling_GridAggregation.GRID_AGGREGATION_AVG;
    case 5:
    case "GRID_AGGREGATION_LAST":
      return Downsampling_GridAggregation.GRID_AGGREGATION_LAST;
    case 6:
    case "GRID_AGGREGATION_COUNT":
      return Downsampling_GridAggregation.GRID_AGGREGATION_COUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Downsampling_GridAggregation.UNRECOGNIZED;
  }
}

export function downsampling_GridAggregationToJSON(object: Downsampling_GridAggregation): string {
  switch (object) {
    case Downsampling_GridAggregation.GRID_AGGREGATION_UNSPECIFIED:
      return "GRID_AGGREGATION_UNSPECIFIED";
    case Downsampling_GridAggregation.GRID_AGGREGATION_MAX:
      return "GRID_AGGREGATION_MAX";
    case Downsampling_GridAggregation.GRID_AGGREGATION_MIN:
      return "GRID_AGGREGATION_MIN";
    case Downsampling_GridAggregation.GRID_AGGREGATION_SUM:
      return "GRID_AGGREGATION_SUM";
    case Downsampling_GridAggregation.GRID_AGGREGATION_AVG:
      return "GRID_AGGREGATION_AVG";
    case Downsampling_GridAggregation.GRID_AGGREGATION_LAST:
      return "GRID_AGGREGATION_LAST";
    case Downsampling_GridAggregation.GRID_AGGREGATION_COUNT:
      return "GRID_AGGREGATION_COUNT";
    case Downsampling_GridAggregation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** List of available gap filling policy for downsampling. */
export enum Downsampling_GapFilling {
  GAP_FILLING_UNSPECIFIED = 0,
  /** GAP_FILLING_NULL - Returns `null` as a metric value and `timestamp` as a time series value. */
  GAP_FILLING_NULL = 1,
  /** GAP_FILLING_NONE - Returns no value and no timestamp. */
  GAP_FILLING_NONE = 2,
  /** GAP_FILLING_PREVIOUS - Returns the value from the previous time interval. */
  GAP_FILLING_PREVIOUS = 3,
  UNRECOGNIZED = -1,
}

export function downsampling_GapFillingFromJSON(object: any): Downsampling_GapFilling {
  switch (object) {
    case 0:
    case "GAP_FILLING_UNSPECIFIED":
      return Downsampling_GapFilling.GAP_FILLING_UNSPECIFIED;
    case 1:
    case "GAP_FILLING_NULL":
      return Downsampling_GapFilling.GAP_FILLING_NULL;
    case 2:
    case "GAP_FILLING_NONE":
      return Downsampling_GapFilling.GAP_FILLING_NONE;
    case 3:
    case "GAP_FILLING_PREVIOUS":
      return Downsampling_GapFilling.GAP_FILLING_PREVIOUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Downsampling_GapFilling.UNRECOGNIZED;
  }
}

export function downsampling_GapFillingToJSON(object: Downsampling_GapFilling): string {
  switch (object) {
    case Downsampling_GapFilling.GAP_FILLING_UNSPECIFIED:
      return "GAP_FILLING_UNSPECIFIED";
    case Downsampling_GapFilling.GAP_FILLING_NULL:
      return "GAP_FILLING_NULL";
    case Downsampling_GapFilling.GAP_FILLING_NONE:
      return "GAP_FILLING_NONE";
    case Downsampling_GapFilling.GAP_FILLING_PREVIOUS:
      return "GAP_FILLING_PREVIOUS";
    case Downsampling_GapFilling.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDownsampling(): Downsampling {
  return {
    $type: "yandex.cloud.monitoring.v3.Downsampling",
    maxPoints: undefined,
    gridInterval: undefined,
    disabled: undefined,
    gridAggregation: 0,
    gapFilling: 0,
  };
}

export const Downsampling = {
  $type: "yandex.cloud.monitoring.v3.Downsampling" as const,

  encode(message: Downsampling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxPoints !== undefined) {
      writer.uint32(8).int64(message.maxPoints);
    }
    if (message.gridInterval !== undefined) {
      writer.uint32(16).int64(message.gridInterval);
    }
    if (message.disabled !== undefined) {
      writer.uint32(24).bool(message.disabled);
    }
    if (message.gridAggregation !== 0) {
      writer.uint32(32).int32(message.gridAggregation);
    }
    if (message.gapFilling !== 0) {
      writer.uint32(40).int32(message.gapFilling);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Downsampling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownsampling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxPoints = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gridInterval = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disabled = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gridAggregation = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gapFilling = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Downsampling {
    return {
      $type: Downsampling.$type,
      maxPoints: isSet(object.maxPoints) ? globalThis.Number(object.maxPoints) : undefined,
      gridInterval: isSet(object.gridInterval) ? globalThis.Number(object.gridInterval) : undefined,
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : undefined,
      gridAggregation: isSet(object.gridAggregation) ? downsampling_GridAggregationFromJSON(object.gridAggregation) : 0,
      gapFilling: isSet(object.gapFilling) ? downsampling_GapFillingFromJSON(object.gapFilling) : 0,
    };
  },

  toJSON(message: Downsampling): unknown {
    const obj: any = {};
    if (message.maxPoints !== undefined) {
      obj.maxPoints = Math.round(message.maxPoints);
    }
    if (message.gridInterval !== undefined) {
      obj.gridInterval = Math.round(message.gridInterval);
    }
    if (message.disabled !== undefined) {
      obj.disabled = message.disabled;
    }
    if (message.gridAggregation !== 0) {
      obj.gridAggregation = downsampling_GridAggregationToJSON(message.gridAggregation);
    }
    if (message.gapFilling !== 0) {
      obj.gapFilling = downsampling_GapFillingToJSON(message.gapFilling);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Downsampling>, I>>(base?: I): Downsampling {
    return Downsampling.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Downsampling>, I>>(object: I): Downsampling {
    const message = createBaseDownsampling();
    message.maxPoints = object.maxPoints ?? undefined;
    message.gridInterval = object.gridInterval ?? undefined;
    message.disabled = object.disabled ?? undefined;
    message.gridAggregation = object.gridAggregation ?? 0;
    message.gapFilling = object.gapFilling ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Downsampling.$type, Downsampling);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
