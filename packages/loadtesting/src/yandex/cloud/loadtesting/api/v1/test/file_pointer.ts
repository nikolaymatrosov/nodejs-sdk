/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import { ObjectStorage } from "./object_storage";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/** Variant-like structure for referencing files in different sources. */
export interface FilePointer {
  $type: "yandex.cloud.loadtesting.api.v1.test.FilePointer";
  /** Reference to a file in Object Storage. */
  objectStorage?: ObjectStorage | undefined;
}

function createBaseFilePointer(): FilePointer {
  return { $type: "yandex.cloud.loadtesting.api.v1.test.FilePointer", objectStorage: undefined };
}

export const FilePointer = {
  $type: "yandex.cloud.loadtesting.api.v1.test.FilePointer" as const,

  encode(message: FilePointer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectStorage !== undefined) {
      ObjectStorage.encode(message.objectStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FilePointer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilePointer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.objectStorage = ObjectStorage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FilePointer {
    return {
      $type: FilePointer.$type,
      objectStorage: isSet(object.objectStorage) ? ObjectStorage.fromJSON(object.objectStorage) : undefined,
    };
  },

  toJSON(message: FilePointer): unknown {
    const obj: any = {};
    if (message.objectStorage !== undefined) {
      obj.objectStorage = ObjectStorage.toJSON(message.objectStorage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FilePointer>, I>>(base?: I): FilePointer {
    return FilePointer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FilePointer>, I>>(object: I): FilePointer {
    const message = createBaseFilePointer();
    message.objectStorage = (object.objectStorage !== undefined && object.objectStorage !== null)
      ? ObjectStorage.fromPartial(object.objectStorage)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(FilePointer.$type, FilePointer);

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
