/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface Template {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Template";
  id: string;
  versionId: string;
  name: string;
  publisherId: string;
  productId: string;
  tariffId: string;
  licenseSkuId: string;
  period: string;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  state: Template_State;
}

export enum Template_State {
  STATE_UNSPECIFIED = 0,
  PENDING = 1,
  ACTIVE = 2,
  DEPRECATED = 3,
  DELETED = 4,
  UNRECOGNIZED = -1,
}

export function template_StateFromJSON(object: any): Template_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Template_State.STATE_UNSPECIFIED;
    case 1:
    case "PENDING":
      return Template_State.PENDING;
    case 2:
    case "ACTIVE":
      return Template_State.ACTIVE;
    case 3:
    case "DEPRECATED":
      return Template_State.DEPRECATED;
    case 4:
    case "DELETED":
      return Template_State.DELETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Template_State.UNRECOGNIZED;
  }
}

export function template_StateToJSON(object: Template_State): string {
  switch (object) {
    case Template_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Template_State.PENDING:
      return "PENDING";
    case Template_State.ACTIVE:
      return "ACTIVE";
    case Template_State.DEPRECATED:
      return "DEPRECATED";
    case Template_State.DELETED:
      return "DELETED";
    case Template_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTemplate(): Template {
  return {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Template",
    id: "",
    versionId: "",
    name: "",
    publisherId: "",
    productId: "",
    tariffId: "",
    licenseSkuId: "",
    period: "",
    createdAt: undefined,
    updatedAt: undefined,
    state: 0,
  };
}

export const Template = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Template" as const,

  encode(message: Template, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.publisherId !== "") {
      writer.uint32(34).string(message.publisherId);
    }
    if (message.productId !== "") {
      writer.uint32(42).string(message.productId);
    }
    if (message.tariffId !== "") {
      writer.uint32(50).string(message.tariffId);
    }
    if (message.licenseSkuId !== "") {
      writer.uint32(58).string(message.licenseSkuId);
    }
    if (message.period !== "") {
      writer.uint32(66).string(message.period);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(88).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplate();
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

          message.versionId = reader.string();
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

          message.publisherId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.productId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tariffId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.licenseSkuId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.period = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Template {
    return {
      $type: Template.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      publisherId: isSet(object.publisherId) ? globalThis.String(object.publisherId) : "",
      productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
      tariffId: isSet(object.tariffId) ? globalThis.String(object.tariffId) : "",
      licenseSkuId: isSet(object.licenseSkuId) ? globalThis.String(object.licenseSkuId) : "",
      period: isSet(object.period) ? globalThis.String(object.period) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      state: isSet(object.state) ? template_StateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: Template): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.publisherId !== "") {
      obj.publisherId = message.publisherId;
    }
    if (message.productId !== "") {
      obj.productId = message.productId;
    }
    if (message.tariffId !== "") {
      obj.tariffId = message.tariffId;
    }
    if (message.licenseSkuId !== "") {
      obj.licenseSkuId = message.licenseSkuId;
    }
    if (message.period !== "") {
      obj.period = message.period;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.state !== 0) {
      obj.state = template_StateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Template>, I>>(base?: I): Template {
    return Template.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Template>, I>>(object: I): Template {
    const message = createBaseTemplate();
    message.id = object.id ?? "";
    message.versionId = object.versionId ?? "";
    message.name = object.name ?? "";
    message.publisherId = object.publisherId ?? "";
    message.productId = object.productId ?? "";
    message.tariffId = object.tariffId ?? "";
    message.licenseSkuId = object.licenseSkuId ?? "";
    message.period = object.period ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Template.$type, Template);

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
