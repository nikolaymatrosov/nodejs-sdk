/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.billing.v1";

/** A BillingAccount resource. For more information, see [BillingAccount](/docs/billing/concepts/billing-account). */
export interface BillingAccount {
  $type: "yandex.cloud.billing.v1.BillingAccount";
  /** ID of the billing account. */
  id: string;
  /** Name of the billing account. */
  name: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** ISO 3166-1 alpha-2 country code of the billing account. */
  countryCode: string;
  /**
   * Currency of the billing account.
   * Can be one of the following:
   * * `RUB`
   * * `USD`
   * * `KZT`
   */
  currency: string;
  /** Represents whether corresponding billable objects can be used or not. */
  active: boolean;
  /** Current balance of the billing account. */
  balance: string;
}

function createBaseBillingAccount(): BillingAccount {
  return {
    $type: "yandex.cloud.billing.v1.BillingAccount",
    id: "",
    name: "",
    createdAt: undefined,
    countryCode: "",
    currency: "",
    active: false,
    balance: "",
  };
}

export const BillingAccount = {
  $type: "yandex.cloud.billing.v1.BillingAccount" as const,

  encode(message: BillingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.countryCode !== "") {
      writer.uint32(34).string(message.countryCode);
    }
    if (message.currency !== "") {
      writer.uint32(42).string(message.currency);
    }
    if (message.active === true) {
      writer.uint32(48).bool(message.active);
    }
    if (message.balance !== "") {
      writer.uint32(58).string(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BillingAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBillingAccount();
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.balance = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BillingAccount {
    return {
      $type: BillingAccount.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      countryCode: isSet(object.countryCode) ? globalThis.String(object.countryCode) : "",
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
      balance: isSet(object.balance) ? globalThis.String(object.balance) : "",
    };
  },

  toJSON(message: BillingAccount): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.countryCode !== "") {
      obj.countryCode = message.countryCode;
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.balance !== "") {
      obj.balance = message.balance;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BillingAccount>, I>>(base?: I): BillingAccount {
    return BillingAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BillingAccount>, I>>(object: I): BillingAccount {
    const message = createBaseBillingAccount();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.countryCode = object.countryCode ?? "";
    message.currency = object.currency ?? "";
    message.active = object.active ?? false;
    message.balance = object.balance ?? "";
    return message;
  },
};

messageTypeRegistry.set(BillingAccount.$type, BillingAccount);

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
