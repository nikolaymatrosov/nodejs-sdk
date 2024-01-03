/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.marketplace.v1.metering";

export interface UsageRecord {
  $type: "yandex.cloud.marketplace.v1.metering.UsageRecord";
  /** Unique identifier of the usage record (UUID format). */
  uuid: string;
  /** Consumed Marketplace SKU ID, linked to `UsageRecord.product_id`. */
  skuId: string;
  /** Quantity of SKU consumed, measured in `sku.usage_unit` units (e.g. bytes). */
  quantity: number;
  /** Timestamp in UTC for which the usage is being reported. */
  timestamp?: Date | undefined;
}

export interface AcceptedUsageRecord {
  $type: "yandex.cloud.marketplace.v1.metering.AcceptedUsageRecord";
  /** Unique identifier of the usage record (UUID format). */
  uuid: string;
}

export interface RejectedUsageRecord {
  $type: "yandex.cloud.marketplace.v1.metering.RejectedUsageRecord";
  /** Unique identifier of the usage record (UUID format). */
  uuid: string;
  /** The reason of rejection. */
  reason: RejectedUsageRecord_Reason;
}

export enum RejectedUsageRecord_Reason {
  REASON_UNSPECIFIED = 0,
  DUPLICATE = 1,
  EXPIRED = 2,
  INVALID_TIMESTAMP = 3,
  INVALID_SKU_ID = 4,
  INVALID_PRODUCT_ID = 5,
  INVALID_QUANTITY = 6,
  INVALID_ID = 7,
  UNRECOGNIZED = -1,
}

export function rejectedUsageRecord_ReasonFromJSON(object: any): RejectedUsageRecord_Reason {
  switch (object) {
    case 0:
    case "REASON_UNSPECIFIED":
      return RejectedUsageRecord_Reason.REASON_UNSPECIFIED;
    case 1:
    case "DUPLICATE":
      return RejectedUsageRecord_Reason.DUPLICATE;
    case 2:
    case "EXPIRED":
      return RejectedUsageRecord_Reason.EXPIRED;
    case 3:
    case "INVALID_TIMESTAMP":
      return RejectedUsageRecord_Reason.INVALID_TIMESTAMP;
    case 4:
    case "INVALID_SKU_ID":
      return RejectedUsageRecord_Reason.INVALID_SKU_ID;
    case 5:
    case "INVALID_PRODUCT_ID":
      return RejectedUsageRecord_Reason.INVALID_PRODUCT_ID;
    case 6:
    case "INVALID_QUANTITY":
      return RejectedUsageRecord_Reason.INVALID_QUANTITY;
    case 7:
    case "INVALID_ID":
      return RejectedUsageRecord_Reason.INVALID_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RejectedUsageRecord_Reason.UNRECOGNIZED;
  }
}

export function rejectedUsageRecord_ReasonToJSON(object: RejectedUsageRecord_Reason): string {
  switch (object) {
    case RejectedUsageRecord_Reason.REASON_UNSPECIFIED:
      return "REASON_UNSPECIFIED";
    case RejectedUsageRecord_Reason.DUPLICATE:
      return "DUPLICATE";
    case RejectedUsageRecord_Reason.EXPIRED:
      return "EXPIRED";
    case RejectedUsageRecord_Reason.INVALID_TIMESTAMP:
      return "INVALID_TIMESTAMP";
    case RejectedUsageRecord_Reason.INVALID_SKU_ID:
      return "INVALID_SKU_ID";
    case RejectedUsageRecord_Reason.INVALID_PRODUCT_ID:
      return "INVALID_PRODUCT_ID";
    case RejectedUsageRecord_Reason.INVALID_QUANTITY:
      return "INVALID_QUANTITY";
    case RejectedUsageRecord_Reason.INVALID_ID:
      return "INVALID_ID";
    case RejectedUsageRecord_Reason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUsageRecord(): UsageRecord {
  return {
    $type: "yandex.cloud.marketplace.v1.metering.UsageRecord",
    uuid: "",
    skuId: "",
    quantity: 0,
    timestamp: undefined,
  };
}

export const UsageRecord = {
  $type: "yandex.cloud.marketplace.v1.metering.UsageRecord" as const,

  encode(message: UsageRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.skuId !== "") {
      writer.uint32(18).string(message.skuId);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).int64(message.quantity);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsageRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsageRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.skuId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UsageRecord {
    return {
      $type: UsageRecord.$type,
      uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : "",
      skuId: isSet(object.skuId) ? globalThis.String(object.skuId) : "",
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: UsageRecord): unknown {
    const obj: any = {};
    if (message.uuid !== "") {
      obj.uuid = message.uuid;
    }
    if (message.skuId !== "") {
      obj.skuId = message.skuId;
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UsageRecord>, I>>(base?: I): UsageRecord {
    return UsageRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UsageRecord>, I>>(object: I): UsageRecord {
    const message = createBaseUsageRecord();
    message.uuid = object.uuid ?? "";
    message.skuId = object.skuId ?? "";
    message.quantity = object.quantity ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UsageRecord.$type, UsageRecord);

function createBaseAcceptedUsageRecord(): AcceptedUsageRecord {
  return { $type: "yandex.cloud.marketplace.v1.metering.AcceptedUsageRecord", uuid: "" };
}

export const AcceptedUsageRecord = {
  $type: "yandex.cloud.marketplace.v1.metering.AcceptedUsageRecord" as const,

  encode(message: AcceptedUsageRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedUsageRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedUsageRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AcceptedUsageRecord {
    return { $type: AcceptedUsageRecord.$type, uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : "" };
  },

  toJSON(message: AcceptedUsageRecord): unknown {
    const obj: any = {};
    if (message.uuid !== "") {
      obj.uuid = message.uuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AcceptedUsageRecord>, I>>(base?: I): AcceptedUsageRecord {
    return AcceptedUsageRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AcceptedUsageRecord>, I>>(object: I): AcceptedUsageRecord {
    const message = createBaseAcceptedUsageRecord();
    message.uuid = object.uuid ?? "";
    return message;
  },
};

messageTypeRegistry.set(AcceptedUsageRecord.$type, AcceptedUsageRecord);

function createBaseRejectedUsageRecord(): RejectedUsageRecord {
  return { $type: "yandex.cloud.marketplace.v1.metering.RejectedUsageRecord", uuid: "", reason: 0 };
}

export const RejectedUsageRecord = {
  $type: "yandex.cloud.marketplace.v1.metering.RejectedUsageRecord" as const,

  encode(message: RejectedUsageRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RejectedUsageRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRejectedUsageRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RejectedUsageRecord {
    return {
      $type: RejectedUsageRecord.$type,
      uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : "",
      reason: isSet(object.reason) ? rejectedUsageRecord_ReasonFromJSON(object.reason) : 0,
    };
  },

  toJSON(message: RejectedUsageRecord): unknown {
    const obj: any = {};
    if (message.uuid !== "") {
      obj.uuid = message.uuid;
    }
    if (message.reason !== 0) {
      obj.reason = rejectedUsageRecord_ReasonToJSON(message.reason);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RejectedUsageRecord>, I>>(base?: I): RejectedUsageRecord {
    return RejectedUsageRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RejectedUsageRecord>, I>>(object: I): RejectedUsageRecord {
    const message = createBaseRejectedUsageRecord();
    message.uuid = object.uuid ?? "";
    message.reason = object.reason ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RejectedUsageRecord.$type, RejectedUsageRecord);

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
