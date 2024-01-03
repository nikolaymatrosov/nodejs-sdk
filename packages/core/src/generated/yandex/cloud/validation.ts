/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../typeRegistry";

export const protobufPackage = "yandex.cloud";

export interface MapKeySpec {
  $type: "yandex.cloud.MapKeySpec";
  value: string;
  pattern: string;
  length: string;
}

function createBaseMapKeySpec(): MapKeySpec {
  return { $type: "yandex.cloud.MapKeySpec", value: "", pattern: "", length: "" };
}

export const MapKeySpec = {
  $type: "yandex.cloud.MapKeySpec" as const,

  encode(message: MapKeySpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.pattern !== "") {
      writer.uint32(18).string(message.pattern);
    }
    if (message.length !== "") {
      writer.uint32(26).string(message.length);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapKeySpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapKeySpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pattern = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.length = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapKeySpec {
    return {
      $type: MapKeySpec.$type,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : "",
      length: isSet(object.length) ? globalThis.String(object.length) : "",
    };
  },

  toJSON(message: MapKeySpec): unknown {
    const obj: any = {};
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.pattern !== "") {
      obj.pattern = message.pattern;
    }
    if (message.length !== "") {
      obj.length = message.length;
    }
    return obj;
  },

  create(base?: DeepPartial<MapKeySpec>): MapKeySpec {
    return MapKeySpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MapKeySpec>): MapKeySpec {
    const message = createBaseMapKeySpec();
    message.value = object.value ?? "";
    message.pattern = object.pattern ?? "";
    message.length = object.length ?? "";
    return message;
  },
};

messageTypeRegistry.set(MapKeySpec.$type, MapKeySpec);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
