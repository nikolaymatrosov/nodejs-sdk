/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.billing.v1";

/**
 * Represents a link to an object in other service.
 * This object is being billed in the scope of a billing account.
 */
export interface BillableObject {
  $type: "yandex.cloud.billing.v1.BillableObject";
  /** ID of the object in other service. */
  id: string;
  /**
   * Billable object type. Can be one of the following:
   * * `cloud`
   */
  type: string;
}

/** Represents a binding of the BillableObject to a BillingAccount. */
export interface BillableObjectBinding {
  $type: "yandex.cloud.billing.v1.BillableObjectBinding";
  /** Timestamp when binding was created. */
  effectiveTime?:
    | Date
    | undefined;
  /** Object that is bound to billing account. */
  billableObject?: BillableObject | undefined;
}

function createBaseBillableObject(): BillableObject {
  return { $type: "yandex.cloud.billing.v1.BillableObject", id: "", type: "" };
}

export const BillableObject = {
  $type: "yandex.cloud.billing.v1.BillableObject" as const,

  encode(message: BillableObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BillableObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBillableObject();
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

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BillableObject {
    return {
      $type: BillableObject.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
    };
  },

  toJSON(message: BillableObject): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BillableObject>, I>>(base?: I): BillableObject {
    return BillableObject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BillableObject>, I>>(object: I): BillableObject {
    const message = createBaseBillableObject();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

messageTypeRegistry.set(BillableObject.$type, BillableObject);

function createBaseBillableObjectBinding(): BillableObjectBinding {
  return {
    $type: "yandex.cloud.billing.v1.BillableObjectBinding",
    effectiveTime: undefined,
    billableObject: undefined,
  };
}

export const BillableObjectBinding = {
  $type: "yandex.cloud.billing.v1.BillableObjectBinding" as const,

  encode(message: BillableObjectBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveTime !== undefined) {
      Timestamp.encode(toTimestamp(message.effectiveTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.billableObject !== undefined) {
      BillableObject.encode(message.billableObject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BillableObjectBinding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBillableObjectBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.billableObject = BillableObject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BillableObjectBinding {
    return {
      $type: BillableObjectBinding.$type,
      effectiveTime: isSet(object.effectiveTime) ? fromJsonTimestamp(object.effectiveTime) : undefined,
      billableObject: isSet(object.billableObject) ? BillableObject.fromJSON(object.billableObject) : undefined,
    };
  },

  toJSON(message: BillableObjectBinding): unknown {
    const obj: any = {};
    if (message.effectiveTime !== undefined) {
      obj.effectiveTime = message.effectiveTime.toISOString();
    }
    if (message.billableObject !== undefined) {
      obj.billableObject = BillableObject.toJSON(message.billableObject);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BillableObjectBinding>, I>>(base?: I): BillableObjectBinding {
    return BillableObjectBinding.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BillableObjectBinding>, I>>(object: I): BillableObjectBinding {
    const message = createBaseBillableObjectBinding();
    message.effectiveTime = object.effectiveTime ?? undefined;
    message.billableObject = (object.billableObject !== undefined && object.billableObject !== null)
      ? BillableObject.fromPartial(object.billableObject)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(BillableObjectBinding.$type, BillableObjectBinding);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
