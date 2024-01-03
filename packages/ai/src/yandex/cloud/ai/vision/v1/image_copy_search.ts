/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.ai.vision.v1";

export interface ImageCopySearchAnnotation {
  $type: "yandex.cloud.ai.vision.v1.ImageCopySearchAnnotation";
  /** Number of image copies */
  copyCount: number;
  /** Top relevance result of image copy search */
  topResults: CopyMatch[];
}

export interface CopyMatch {
  $type: "yandex.cloud.ai.vision.v1.CopyMatch";
  /** url of image */
  imageUrl: string;
  /** url of page that contains image */
  pageUrl: string;
  /** page title that contains image */
  title: string;
  /** image description */
  description: string;
}

function createBaseImageCopySearchAnnotation(): ImageCopySearchAnnotation {
  return { $type: "yandex.cloud.ai.vision.v1.ImageCopySearchAnnotation", copyCount: 0, topResults: [] };
}

export const ImageCopySearchAnnotation = {
  $type: "yandex.cloud.ai.vision.v1.ImageCopySearchAnnotation" as const,

  encode(message: ImageCopySearchAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.copyCount !== 0) {
      writer.uint32(8).int64(message.copyCount);
    }
    for (const v of message.topResults) {
      CopyMatch.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageCopySearchAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageCopySearchAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.copyCount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.topResults.push(CopyMatch.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImageCopySearchAnnotation {
    return {
      $type: ImageCopySearchAnnotation.$type,
      copyCount: isSet(object.copyCount) ? globalThis.Number(object.copyCount) : 0,
      topResults: globalThis.Array.isArray(object?.topResults)
        ? object.topResults.map((e: any) => CopyMatch.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ImageCopySearchAnnotation): unknown {
    const obj: any = {};
    if (message.copyCount !== 0) {
      obj.copyCount = Math.round(message.copyCount);
    }
    if (message.topResults?.length) {
      obj.topResults = message.topResults.map((e) => CopyMatch.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ImageCopySearchAnnotation>, I>>(base?: I): ImageCopySearchAnnotation {
    return ImageCopySearchAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ImageCopySearchAnnotation>, I>>(object: I): ImageCopySearchAnnotation {
    const message = createBaseImageCopySearchAnnotation();
    message.copyCount = object.copyCount ?? 0;
    message.topResults = object.topResults?.map((e) => CopyMatch.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ImageCopySearchAnnotation.$type, ImageCopySearchAnnotation);

function createBaseCopyMatch(): CopyMatch {
  return { $type: "yandex.cloud.ai.vision.v1.CopyMatch", imageUrl: "", pageUrl: "", title: "", description: "" };
}

export const CopyMatch = {
  $type: "yandex.cloud.ai.vision.v1.CopyMatch" as const,

  encode(message: CopyMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageUrl !== "") {
      writer.uint32(10).string(message.imageUrl);
    }
    if (message.pageUrl !== "") {
      writer.uint32(18).string(message.pageUrl);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CopyMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.imageUrl = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageUrl = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CopyMatch {
    return {
      $type: CopyMatch.$type,
      imageUrl: isSet(object.imageUrl) ? globalThis.String(object.imageUrl) : "",
      pageUrl: isSet(object.pageUrl) ? globalThis.String(object.pageUrl) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: CopyMatch): unknown {
    const obj: any = {};
    if (message.imageUrl !== "") {
      obj.imageUrl = message.imageUrl;
    }
    if (message.pageUrl !== "") {
      obj.pageUrl = message.pageUrl;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CopyMatch>, I>>(base?: I): CopyMatch {
    return CopyMatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CopyMatch>, I>>(object: I): CopyMatch {
    const message = createBaseCopyMatch();
    message.imageUrl = object.imageUrl ?? "";
    message.pageUrl = object.pageUrl ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(CopyMatch.$type, CopyMatch);

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
