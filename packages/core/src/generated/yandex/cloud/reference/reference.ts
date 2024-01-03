/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "yandex.cloud.reference";

export interface Reference {
  $type: "yandex.cloud.reference.Reference";
  referrer?: Referrer | undefined;
  type: Reference_Type;
}

export enum Reference_Type {
  TYPE_UNSPECIFIED = 0,
  MANAGED_BY = 1,
  USED_BY = 2,
  UNRECOGNIZED = -1,
}

export function reference_TypeFromJSON(object: any): Reference_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Reference_Type.TYPE_UNSPECIFIED;
    case 1:
    case "MANAGED_BY":
      return Reference_Type.MANAGED_BY;
    case 2:
    case "USED_BY":
      return Reference_Type.USED_BY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Reference_Type.UNRECOGNIZED;
  }
}

export function reference_TypeToJSON(object: Reference_Type): string {
  switch (object) {
    case Reference_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Reference_Type.MANAGED_BY:
      return "MANAGED_BY";
    case Reference_Type.USED_BY:
      return "USED_BY";
    case Reference_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Referrer {
  $type: "yandex.cloud.reference.Referrer";
  /**
   * `type = compute.instance, id = <instance id>`
   * * `type = compute.instanceGroup, id = <instanceGroup id>`
   * * `type = loadbalancer.networkLoadBalancer, id = <networkLoadBalancer id>`
   * * `type = managed-kubernetes.cluster, id = <cluster id>`
   * * `type = managed-mysql.cluster, id = <cluster id>`
   */
  type: string;
  id: string;
}

function createBaseReference(): Reference {
  return { $type: "yandex.cloud.reference.Reference", referrer: undefined, type: 0 };
}

export const Reference = {
  $type: "yandex.cloud.reference.Reference" as const,

  encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referrer !== undefined) {
      Referrer.encode(message.referrer, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.referrer = Referrer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Reference {
    return {
      $type: Reference.$type,
      referrer: isSet(object.referrer) ? Referrer.fromJSON(object.referrer) : undefined,
      type: isSet(object.type) ? reference_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Reference): unknown {
    const obj: any = {};
    if (message.referrer !== undefined) {
      obj.referrer = Referrer.toJSON(message.referrer);
    }
    if (message.type !== 0) {
      obj.type = reference_TypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<Reference>): Reference {
    return Reference.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = createBaseReference();
    message.referrer = (object.referrer !== undefined && object.referrer !== null)
      ? Referrer.fromPartial(object.referrer)
      : undefined;
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Reference.$type, Reference);

function createBaseReferrer(): Referrer {
  return { $type: "yandex.cloud.reference.Referrer", type: "", id: "" };
}

export const Referrer = {
  $type: "yandex.cloud.reference.Referrer" as const,

  encode(message: Referrer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Referrer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReferrer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Referrer {
    return {
      $type: Referrer.$type,
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: Referrer): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<Referrer>): Referrer {
    return Referrer.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Referrer>): Referrer {
    const message = createBaseReferrer();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(Referrer.$type, Referrer);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
