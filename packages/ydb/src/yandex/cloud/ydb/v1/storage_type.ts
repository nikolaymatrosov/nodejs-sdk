/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.ydb.v1";

export interface StorageType {
  $type: "yandex.cloud.ydb.v1.StorageType";
  id: string;
  deviceType: string;
  redundancyType: string;
}

function createBaseStorageType(): StorageType {
  return { $type: "yandex.cloud.ydb.v1.StorageType", id: "", deviceType: "", redundancyType: "" };
}

export const StorageType = {
  $type: "yandex.cloud.ydb.v1.StorageType" as const,

  encode(message: StorageType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.deviceType !== "") {
      writer.uint32(18).string(message.deviceType);
    }
    if (message.redundancyType !== "") {
      writer.uint32(26).string(message.redundancyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageType();
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

          message.deviceType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.redundancyType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StorageType {
    return {
      $type: StorageType.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      deviceType: isSet(object.deviceType) ? globalThis.String(object.deviceType) : "",
      redundancyType: isSet(object.redundancyType) ? globalThis.String(object.redundancyType) : "",
    };
  },

  toJSON(message: StorageType): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.deviceType !== "") {
      obj.deviceType = message.deviceType;
    }
    if (message.redundancyType !== "") {
      obj.redundancyType = message.redundancyType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StorageType>, I>>(base?: I): StorageType {
    return StorageType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StorageType>, I>>(object: I): StorageType {
    const message = createBaseStorageType();
    message.id = object.id ?? "";
    message.deviceType = object.deviceType ?? "";
    message.redundancyType = object.redundancyType ?? "";
    return message;
  },
};

messageTypeRegistry.set(StorageType.$type, StorageType);

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
