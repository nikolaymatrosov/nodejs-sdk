/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Blob } from "./blob";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

/** An Image resource. For more information, see [Docker image](/docs/container-registry/concepts/docker-image). */
export interface Image {
  $type: "yandex.cloud.containerregistry.v1.Image";
  /** Output only. ID of the Docker image. */
  id: string;
  /**
   * Name of the Docker image.
   * The name is unique within the registry.
   */
  name: string;
  /** Content-addressable identifier of the Docker image. */
  digest: string;
  /** Compressed size of the Docker image, specified in bytes. */
  compressedSize: number;
  /** Configuration of the Docker image. */
  config?:
    | Blob
    | undefined;
  /** Layers of the Docker image. */
  layers: Blob[];
  /**
   * Tags of the Docker image.
   *
   * Each tag is unique within the repository.
   */
  tags: string[];
  /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date | undefined;
}

function createBaseImage(): Image {
  return {
    $type: "yandex.cloud.containerregistry.v1.Image",
    id: "",
    name: "",
    digest: "",
    compressedSize: 0,
    config: undefined,
    layers: [],
    tags: [],
    createdAt: undefined,
  };
}

export const Image = {
  $type: "yandex.cloud.containerregistry.v1.Image" as const,

  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.digest !== "") {
      writer.uint32(26).string(message.digest);
    }
    if (message.compressedSize !== 0) {
      writer.uint32(32).int64(message.compressedSize);
    }
    if (message.config !== undefined) {
      Blob.encode(message.config, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.layers) {
      Blob.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(58).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImage();
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

          message.digest = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.compressedSize = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.config = Blob.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.layers.push(Blob.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Image {
    return {
      $type: Image.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      digest: isSet(object.digest) ? globalThis.String(object.digest) : "",
      compressedSize: isSet(object.compressedSize) ? globalThis.Number(object.compressedSize) : 0,
      config: isSet(object.config) ? Blob.fromJSON(object.config) : undefined,
      layers: globalThis.Array.isArray(object?.layers) ? object.layers.map((e: any) => Blob.fromJSON(e)) : [],
      tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e: any) => globalThis.String(e)) : [],
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.digest !== "") {
      obj.digest = message.digest;
    }
    if (message.compressedSize !== 0) {
      obj.compressedSize = Math.round(message.compressedSize);
    }
    if (message.config !== undefined) {
      obj.config = Blob.toJSON(message.config);
    }
    if (message.layers?.length) {
      obj.layers = message.layers.map((e) => Blob.toJSON(e));
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Image>, I>>(base?: I): Image {
    return Image.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
    const message = createBaseImage();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.digest = object.digest ?? "";
    message.compressedSize = object.compressedSize ?? 0;
    message.config = (object.config !== undefined && object.config !== null)
      ? Blob.fromPartial(object.config)
      : undefined;
    message.layers = object.layers?.map((e) => Blob.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Image.$type, Image);

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
