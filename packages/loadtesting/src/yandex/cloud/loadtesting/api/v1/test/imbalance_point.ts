/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/** Test imbalance point. */
export interface ImbalancePoint {
  $type: "yandex.cloud.loadtesting.api.v1.test.ImbalancePoint";
  /** Imbalance moment timestamp. */
  at?:
    | Date
    | undefined;
  /** Imbalance moment RPS. */
  rps: number;
}

function createBaseImbalancePoint(): ImbalancePoint {
  return { $type: "yandex.cloud.loadtesting.api.v1.test.ImbalancePoint", at: undefined, rps: 0 };
}

export const ImbalancePoint = {
  $type: "yandex.cloud.loadtesting.api.v1.test.ImbalancePoint" as const,

  encode(message: ImbalancePoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.at !== undefined) {
      Timestamp.encode(toTimestamp(message.at), writer.uint32(10).fork()).ldelim();
    }
    if (message.rps !== 0) {
      writer.uint32(16).int64(message.rps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImbalancePoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImbalancePoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rps = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImbalancePoint {
    return {
      $type: ImbalancePoint.$type,
      at: isSet(object.at) ? fromJsonTimestamp(object.at) : undefined,
      rps: isSet(object.rps) ? globalThis.Number(object.rps) : 0,
    };
  },

  toJSON(message: ImbalancePoint): unknown {
    const obj: any = {};
    if (message.at !== undefined) {
      obj.at = message.at.toISOString();
    }
    if (message.rps !== 0) {
      obj.rps = Math.round(message.rps);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ImbalancePoint>, I>>(base?: I): ImbalancePoint {
    return ImbalancePoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ImbalancePoint>, I>>(object: I): ImbalancePoint {
    const message = createBaseImbalancePoint();
    message.at = object.at ?? undefined;
    message.rps = object.rps ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ImbalancePoint.$type, ImbalancePoint);

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
