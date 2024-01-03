/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.ai.vision.v1";

export interface ClassAnnotation {
  $type: "yandex.cloud.ai.vision.v1.ClassAnnotation";
  /**
   * Properties extracted by a specified model.
   *
   * For example, if you ask to evaluate the image quality,
   * the service could return such properties as `good` and `bad`.
   */
  properties: Property[];
}

export interface Property {
  $type: "yandex.cloud.ai.vision.v1.Property";
  /** Property name. */
  name: string;
  /** Probability of the property, from 0 to 1. */
  probability: number;
}

function createBaseClassAnnotation(): ClassAnnotation {
  return { $type: "yandex.cloud.ai.vision.v1.ClassAnnotation", properties: [] };
}

export const ClassAnnotation = {
  $type: "yandex.cloud.ai.vision.v1.ClassAnnotation" as const,

  encode(message: ClassAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.properties) {
      Property.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.properties.push(Property.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClassAnnotation {
    return {
      $type: ClassAnnotation.$type,
      properties: globalThis.Array.isArray(object?.properties)
        ? object.properties.map((e: any) => Property.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClassAnnotation): unknown {
    const obj: any = {};
    if (message.properties?.length) {
      obj.properties = message.properties.map((e) => Property.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassAnnotation>, I>>(base?: I): ClassAnnotation {
    return ClassAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClassAnnotation>, I>>(object: I): ClassAnnotation {
    const message = createBaseClassAnnotation();
    message.properties = object.properties?.map((e) => Property.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ClassAnnotation.$type, ClassAnnotation);

function createBaseProperty(): Property {
  return { $type: "yandex.cloud.ai.vision.v1.Property", name: "", probability: 0 };
}

export const Property = {
  $type: "yandex.cloud.ai.vision.v1.Property" as const,

  encode(message: Property, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.probability !== 0) {
      writer.uint32(17).double(message.probability);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Property {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.probability = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Property {
    return {
      $type: Property.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      probability: isSet(object.probability) ? globalThis.Number(object.probability) : 0,
    };
  },

  toJSON(message: Property): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.probability !== 0) {
      obj.probability = message.probability;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Property>, I>>(base?: I): Property {
    return Property.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Property>, I>>(object: I): Property {
    const message = createBaseProperty();
    message.name = object.name ?? "";
    message.probability = object.probability ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Property.$type, Property);

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
