/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.billing.v1";

/** Type of the pricing version. */
export enum PricingVersionType {
  PRICING_VERSION_TYPE_UNSPECIFIED = 0,
  /** STREET_PRICE - Regular price. */
  STREET_PRICE = 1,
  /** CONTRACT_PRICE - Price is overridden by a contract. Defined in the scope of a billing account. */
  CONTRACT_PRICE = 2,
  UNRECOGNIZED = -1,
}

export function pricingVersionTypeFromJSON(object: any): PricingVersionType {
  switch (object) {
    case 0:
    case "PRICING_VERSION_TYPE_UNSPECIFIED":
      return PricingVersionType.PRICING_VERSION_TYPE_UNSPECIFIED;
    case 1:
    case "STREET_PRICE":
      return PricingVersionType.STREET_PRICE;
    case 2:
    case "CONTRACT_PRICE":
      return PricingVersionType.CONTRACT_PRICE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PricingVersionType.UNRECOGNIZED;
  }
}

export function pricingVersionTypeToJSON(object: PricingVersionType): string {
  switch (object) {
    case PricingVersionType.PRICING_VERSION_TYPE_UNSPECIFIED:
      return "PRICING_VERSION_TYPE_UNSPECIFIED";
    case PricingVersionType.STREET_PRICE:
      return "STREET_PRICE";
    case PricingVersionType.CONTRACT_PRICE:
      return "CONTRACT_PRICE";
    case PricingVersionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A Stock keeping unit resource. */
export interface Sku {
  $type: "yandex.cloud.billing.v1.Sku";
  /** ID of the SKU. */
  id: string;
  /** Name of the SKU. */
  name: string;
  /** Description of the sku. */
  description: string;
  /** ID of the service that sku belongs to. */
  serviceId: string;
  /** Pricing unit of the SKU, e.g. `core*hour`, `gbyte*hour`. */
  pricingUnit: string;
  /** List of pricing versions. */
  pricingVersions: PricingVersion[];
}

/**
 * Pricing version of the SKU.
 * Defines current and past prices for the sku.
 */
export interface PricingVersion {
  $type: "yandex.cloud.billing.v1.PricingVersion";
  /** Type of the pricing version. */
  type: PricingVersionType;
  /**
   * Timestamp pricing version is active since inclusive.
   * The pricing version is active until next pricing version effective time exclusive.
   */
  effectiveTime?:
    | Date
    | undefined;
  /** List of pricing expressions. */
  pricingExpressions: PricingExpression[];
}

/**
 * Pricing expression of the pricing version.
 * Defines price for the sku.
 */
export interface PricingExpression {
  $type: "yandex.cloud.billing.v1.PricingExpression";
  /** List of rates. */
  rates: Rate[];
}

/**
 * Rate of the pricing expression.
 * Define unit price for pricing quantity interval.
 */
export interface Rate {
  $type: "yandex.cloud.billing.v1.Rate";
  /** Start of the pricing quantity interval. The end of the interval is the start pricing quantity of the next rate. */
  startPricingQuantity: string;
  /** Unit price for the pricing quantity interval. */
  unitPrice: string;
  /**
   * Currency of the unit price.
   * Can be one of the following:
   * * `RUB`
   * * `USD`
   * * `KZT`
   */
  currency: string;
}

function createBaseSku(): Sku {
  return {
    $type: "yandex.cloud.billing.v1.Sku",
    id: "",
    name: "",
    description: "",
    serviceId: "",
    pricingUnit: "",
    pricingVersions: [],
  };
}

export const Sku = {
  $type: "yandex.cloud.billing.v1.Sku" as const,

  encode(message: Sku, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.serviceId !== "") {
      writer.uint32(34).string(message.serviceId);
    }
    if (message.pricingUnit !== "") {
      writer.uint32(42).string(message.pricingUnit);
    }
    for (const v of message.pricingVersions) {
      PricingVersion.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sku {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSku();
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

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.serviceId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pricingUnit = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.pricingVersions.push(PricingVersion.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sku {
    return {
      $type: Sku.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      serviceId: isSet(object.serviceId) ? globalThis.String(object.serviceId) : "",
      pricingUnit: isSet(object.pricingUnit) ? globalThis.String(object.pricingUnit) : "",
      pricingVersions: globalThis.Array.isArray(object?.pricingVersions)
        ? object.pricingVersions.map((e: any) => PricingVersion.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Sku): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.serviceId !== "") {
      obj.serviceId = message.serviceId;
    }
    if (message.pricingUnit !== "") {
      obj.pricingUnit = message.pricingUnit;
    }
    if (message.pricingVersions?.length) {
      obj.pricingVersions = message.pricingVersions.map((e) => PricingVersion.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sku>, I>>(base?: I): Sku {
    return Sku.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sku>, I>>(object: I): Sku {
    const message = createBaseSku();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.serviceId = object.serviceId ?? "";
    message.pricingUnit = object.pricingUnit ?? "";
    message.pricingVersions = object.pricingVersions?.map((e) => PricingVersion.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Sku.$type, Sku);

function createBasePricingVersion(): PricingVersion {
  return { $type: "yandex.cloud.billing.v1.PricingVersion", type: 0, effectiveTime: undefined, pricingExpressions: [] };
}

export const PricingVersion = {
  $type: "yandex.cloud.billing.v1.PricingVersion" as const,

  encode(message: PricingVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.effectiveTime !== undefined) {
      Timestamp.encode(toTimestamp(message.effectiveTime), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pricingExpressions) {
      PricingExpression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PricingVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricingVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.effectiveTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pricingExpressions.push(PricingExpression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PricingVersion {
    return {
      $type: PricingVersion.$type,
      type: isSet(object.type) ? pricingVersionTypeFromJSON(object.type) : 0,
      effectiveTime: isSet(object.effectiveTime) ? fromJsonTimestamp(object.effectiveTime) : undefined,
      pricingExpressions: globalThis.Array.isArray(object?.pricingExpressions)
        ? object.pricingExpressions.map((e: any) => PricingExpression.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PricingVersion): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = pricingVersionTypeToJSON(message.type);
    }
    if (message.effectiveTime !== undefined) {
      obj.effectiveTime = message.effectiveTime.toISOString();
    }
    if (message.pricingExpressions?.length) {
      obj.pricingExpressions = message.pricingExpressions.map((e) => PricingExpression.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PricingVersion>, I>>(base?: I): PricingVersion {
    return PricingVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PricingVersion>, I>>(object: I): PricingVersion {
    const message = createBasePricingVersion();
    message.type = object.type ?? 0;
    message.effectiveTime = object.effectiveTime ?? undefined;
    message.pricingExpressions = object.pricingExpressions?.map((e) => PricingExpression.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PricingVersion.$type, PricingVersion);

function createBasePricingExpression(): PricingExpression {
  return { $type: "yandex.cloud.billing.v1.PricingExpression", rates: [] };
}

export const PricingExpression = {
  $type: "yandex.cloud.billing.v1.PricingExpression" as const,

  encode(message: PricingExpression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rates) {
      Rate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PricingExpression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricingExpression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rates.push(Rate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PricingExpression {
    return {
      $type: PricingExpression.$type,
      rates: globalThis.Array.isArray(object?.rates) ? object.rates.map((e: any) => Rate.fromJSON(e)) : [],
    };
  },

  toJSON(message: PricingExpression): unknown {
    const obj: any = {};
    if (message.rates?.length) {
      obj.rates = message.rates.map((e) => Rate.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PricingExpression>, I>>(base?: I): PricingExpression {
    return PricingExpression.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PricingExpression>, I>>(object: I): PricingExpression {
    const message = createBasePricingExpression();
    message.rates = object.rates?.map((e) => Rate.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PricingExpression.$type, PricingExpression);

function createBaseRate(): Rate {
  return { $type: "yandex.cloud.billing.v1.Rate", startPricingQuantity: "", unitPrice: "", currency: "" };
}

export const Rate = {
  $type: "yandex.cloud.billing.v1.Rate" as const,

  encode(message: Rate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startPricingQuantity !== "") {
      writer.uint32(10).string(message.startPricingQuantity);
    }
    if (message.unitPrice !== "") {
      writer.uint32(18).string(message.unitPrice);
    }
    if (message.currency !== "") {
      writer.uint32(26).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startPricingQuantity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.unitPrice = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currency = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Rate {
    return {
      $type: Rate.$type,
      startPricingQuantity: isSet(object.startPricingQuantity) ? globalThis.String(object.startPricingQuantity) : "",
      unitPrice: isSet(object.unitPrice) ? globalThis.String(object.unitPrice) : "",
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
    };
  },

  toJSON(message: Rate): unknown {
    const obj: any = {};
    if (message.startPricingQuantity !== "") {
      obj.startPricingQuantity = message.startPricingQuantity;
    }
    if (message.unitPrice !== "") {
      obj.unitPrice = message.unitPrice;
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Rate>, I>>(base?: I): Rate {
    return Rate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Rate>, I>>(object: I): Rate {
    const message = createBaseRate();
    message.startPricingQuantity = object.startPricingQuantity ?? "";
    message.unitPrice = object.unitPrice ?? "";
    message.currency = object.currency ?? "";
    return message;
  },
};

messageTypeRegistry.set(Rate.$type, Rate);

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
