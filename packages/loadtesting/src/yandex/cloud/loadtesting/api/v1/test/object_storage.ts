/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/** Reference to a file stored in Object Storage. */
export interface ObjectStorage {
  $type: "yandex.cloud.loadtesting.api.v1.test.ObjectStorage";
  /** Bucket name. */
  bucket: string;
  /** File name. */
  name: string;
}

function createBaseObjectStorage(): ObjectStorage {
  return { $type: "yandex.cloud.loadtesting.api.v1.test.ObjectStorage", bucket: "", name: "" };
}

export const ObjectStorage = {
  $type: "yandex.cloud.loadtesting.api.v1.test.ObjectStorage" as const,

  encode(message: ObjectStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectStorage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectStorage {
    return {
      $type: ObjectStorage.$type,
      bucket: isSet(object.bucket) ? globalThis.String(object.bucket) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: ObjectStorage): unknown {
    const obj: any = {};
    if (message.bucket !== "") {
      obj.bucket = message.bucket;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectStorage>, I>>(base?: I): ObjectStorage {
    return ObjectStorage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ObjectStorage>, I>>(object: I): ObjectStorage {
    const message = createBaseObjectStorage();
    message.bucket = object.bucket ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(ObjectStorage.$type, ObjectStorage);

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
