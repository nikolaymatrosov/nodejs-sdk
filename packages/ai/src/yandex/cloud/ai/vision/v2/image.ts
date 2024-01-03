/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.ai.vision.v2";

export interface Image {
  $type: "yandex.cloud.ai.vision.v2.Image";
  /** bytes with data */
  content?:
    | Buffer
    | undefined;
  /** type of data */
  imageType: Image_ImageType;
}

/** type of image */
export enum Image_ImageType {
  IMAGE_TYPE_UNSPECIFIED = 0,
  JPEG = 1,
  PNG = 2,
  UNRECOGNIZED = -1,
}

export function image_ImageTypeFromJSON(object: any): Image_ImageType {
  switch (object) {
    case 0:
    case "IMAGE_TYPE_UNSPECIFIED":
      return Image_ImageType.IMAGE_TYPE_UNSPECIFIED;
    case 1:
    case "JPEG":
      return Image_ImageType.JPEG;
    case 2:
    case "PNG":
      return Image_ImageType.PNG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Image_ImageType.UNRECOGNIZED;
  }
}

export function image_ImageTypeToJSON(object: Image_ImageType): string {
  switch (object) {
    case Image_ImageType.IMAGE_TYPE_UNSPECIFIED:
      return "IMAGE_TYPE_UNSPECIFIED";
    case Image_ImageType.JPEG:
      return "JPEG";
    case Image_ImageType.PNG:
      return "PNG";
    case Image_ImageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseImage(): Image {
  return { $type: "yandex.cloud.ai.vision.v2.Image", content: undefined, imageType: 0 };
}

export const Image = {
  $type: "yandex.cloud.ai.vision.v2.Image" as const,

  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.imageType !== 0) {
      writer.uint32(16).int32(message.imageType);
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

          message.content = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.imageType = reader.int32() as any;
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
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : undefined,
      imageType: isSet(object.imageType) ? image_ImageTypeFromJSON(object.imageType) : 0,
    };
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    if (message.content !== undefined) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.imageType !== 0) {
      obj.imageType = image_ImageTypeToJSON(message.imageType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Image>, I>>(base?: I): Image {
    return Image.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
    const message = createBaseImage();
    message.content = object.content ?? undefined;
    message.imageType = object.imageType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Image.$type, Image);

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
