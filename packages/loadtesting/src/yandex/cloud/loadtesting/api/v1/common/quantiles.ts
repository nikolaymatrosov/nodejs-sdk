/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.common";

/** Statistical data aggregated by predefined set of quantiles. */
export interface Quantiles {
  $type: "yandex.cloud.loadtesting.api.v1.common.Quantiles";
  /** 50 percentile (median). */
  q50: number;
  /** 75 percentile. */
  q75: number;
  /** 80 percentile. */
  q80: number;
  /** 85 percentile. */
  q85: number;
  /** 90 percentile. */
  q90: number;
  /** 95 percentile. */
  q95: number;
  /** 98 percentile. */
  q98: number;
  /** 99 percentile. */
  q99: number;
  /** 100 percentile (maximum or minimum). */
  q100: number;
}

function createBaseQuantiles(): Quantiles {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.common.Quantiles",
    q50: 0,
    q75: 0,
    q80: 0,
    q85: 0,
    q90: 0,
    q95: 0,
    q98: 0,
    q99: 0,
    q100: 0,
  };
}

export const Quantiles = {
  $type: "yandex.cloud.loadtesting.api.v1.common.Quantiles" as const,

  encode(message: Quantiles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.q50 !== 0) {
      writer.uint32(9).double(message.q50);
    }
    if (message.q75 !== 0) {
      writer.uint32(17).double(message.q75);
    }
    if (message.q80 !== 0) {
      writer.uint32(25).double(message.q80);
    }
    if (message.q85 !== 0) {
      writer.uint32(33).double(message.q85);
    }
    if (message.q90 !== 0) {
      writer.uint32(41).double(message.q90);
    }
    if (message.q95 !== 0) {
      writer.uint32(49).double(message.q95);
    }
    if (message.q98 !== 0) {
      writer.uint32(57).double(message.q98);
    }
    if (message.q99 !== 0) {
      writer.uint32(65).double(message.q99);
    }
    if (message.q100 !== 0) {
      writer.uint32(73).double(message.q100);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quantiles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuantiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.q50 = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.q75 = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.q80 = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.q85 = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.q90 = reader.double();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.q95 = reader.double();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.q98 = reader.double();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.q99 = reader.double();
          continue;
        case 9:
          if (tag !== 73) {
            break;
          }

          message.q100 = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quantiles {
    return {
      $type: Quantiles.$type,
      q50: isSet(object.q50) ? globalThis.Number(object.q50) : 0,
      q75: isSet(object.q75) ? globalThis.Number(object.q75) : 0,
      q80: isSet(object.q80) ? globalThis.Number(object.q80) : 0,
      q85: isSet(object.q85) ? globalThis.Number(object.q85) : 0,
      q90: isSet(object.q90) ? globalThis.Number(object.q90) : 0,
      q95: isSet(object.q95) ? globalThis.Number(object.q95) : 0,
      q98: isSet(object.q98) ? globalThis.Number(object.q98) : 0,
      q99: isSet(object.q99) ? globalThis.Number(object.q99) : 0,
      q100: isSet(object.q100) ? globalThis.Number(object.q100) : 0,
    };
  },

  toJSON(message: Quantiles): unknown {
    const obj: any = {};
    if (message.q50 !== 0) {
      obj.q50 = message.q50;
    }
    if (message.q75 !== 0) {
      obj.q75 = message.q75;
    }
    if (message.q80 !== 0) {
      obj.q80 = message.q80;
    }
    if (message.q85 !== 0) {
      obj.q85 = message.q85;
    }
    if (message.q90 !== 0) {
      obj.q90 = message.q90;
    }
    if (message.q95 !== 0) {
      obj.q95 = message.q95;
    }
    if (message.q98 !== 0) {
      obj.q98 = message.q98;
    }
    if (message.q99 !== 0) {
      obj.q99 = message.q99;
    }
    if (message.q100 !== 0) {
      obj.q100 = message.q100;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Quantiles>, I>>(base?: I): Quantiles {
    return Quantiles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Quantiles>, I>>(object: I): Quantiles {
    const message = createBaseQuantiles();
    message.q50 = object.q50 ?? 0;
    message.q75 = object.q75 ?? 0;
    message.q80 = object.q80 ?? 0;
    message.q85 = object.q85 ?? 0;
    message.q90 = object.q90 ?? 0;
    message.q95 = object.q95 ?? 0;
    message.q98 = object.q98 ?? 0;
    message.q99 = object.q99 ?? 0;
    message.q100 = object.q100 ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Quantiles.$type, Quantiles);

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
