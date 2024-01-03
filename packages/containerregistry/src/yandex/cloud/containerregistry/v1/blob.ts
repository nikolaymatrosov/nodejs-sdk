/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

/** A Blob resource. */
export interface Blob {
  $type: "yandex.cloud.containerregistry.v1.Blob";
  /** Output only. ID of the blob. */
  id: string;
  /** Content-addressable identifier of the blob. */
  digest: string;
  /** Size of the blob, specified in bytes. */
  size: number;
  /** List of blob urls. */
  urls: string[];
}

function createBaseBlob(): Blob {
  return { $type: "yandex.cloud.containerregistry.v1.Blob", id: "", digest: "", size: 0, urls: [] };
}

export const Blob = {
  $type: "yandex.cloud.containerregistry.v1.Blob" as const,

  encode(message: Blob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.digest !== "") {
      writer.uint32(18).string(message.digest);
    }
    if (message.size !== 0) {
      writer.uint32(24).int64(message.size);
    }
    for (const v of message.urls) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Blob {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlob();
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

          message.digest = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.urls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Blob {
    return {
      $type: Blob.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      digest: isSet(object.digest) ? globalThis.String(object.digest) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      urls: globalThis.Array.isArray(object?.urls) ? object.urls.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Blob): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.digest !== "") {
      obj.digest = message.digest;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.urls?.length) {
      obj.urls = message.urls;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Blob>, I>>(base?: I): Blob {
    return Blob.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Blob>, I>>(object: I): Blob {
    const message = createBaseBlob();
    message.id = object.id ?? "";
    message.digest = object.digest ?? "";
    message.size = object.size ?? 0;
    message.urls = object.urls?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Blob.$type, Blob);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
