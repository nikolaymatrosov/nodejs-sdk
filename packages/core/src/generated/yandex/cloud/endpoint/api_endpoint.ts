/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "yandex.cloud.endpoint";

export interface ApiEndpoint {
  $type: "yandex.cloud.endpoint.ApiEndpoint";
  id: string;
  address: string;
}

function createBaseApiEndpoint(): ApiEndpoint {
  return { $type: "yandex.cloud.endpoint.ApiEndpoint", id: "", address: "" };
}

export const ApiEndpoint = {
  $type: "yandex.cloud.endpoint.ApiEndpoint" as const,

  encode(message: ApiEndpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiEndpoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiEndpoint();
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

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApiEndpoint {
    return {
      $type: ApiEndpoint.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: ApiEndpoint): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<ApiEndpoint>): ApiEndpoint {
    return ApiEndpoint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ApiEndpoint>): ApiEndpoint {
    const message = createBaseApiEndpoint();
    message.id = object.id ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ApiEndpoint.$type, ApiEndpoint);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
