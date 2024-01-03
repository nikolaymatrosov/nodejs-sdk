/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Polygon } from "./primitives";

export const protobufPackage = "yandex.cloud.ai.vision.v1";

export interface TextAnnotation {
  $type: "yandex.cloud.ai.vision.v1.TextAnnotation";
  /**
   * Pages of the recognized file.
   *
   * For JPEG and PNG files contains only 1 page.
   */
  pages: Page[];
}

export interface Page {
  $type: "yandex.cloud.ai.vision.v1.Page";
  /** Page width in pixels. */
  width: number;
  /** Page height in pixels. */
  height: number;
  /** Recognized text blocks in this page. */
  blocks: Block[];
  /** Recognized entities */
  entities: Entity[];
}

export interface Entity {
  $type: "yandex.cloud.ai.vision.v1.Entity";
  /** Entity name */
  name: string;
  /** Recognized entity text */
  text: string;
}

export interface Block {
  $type: "yandex.cloud.ai.vision.v1.Block";
  /** Area on the page where the text block is located. */
  boundingBox?:
    | Polygon
    | undefined;
  /** Recognized lines in this block. */
  lines: Line[];
}

export interface Line {
  $type: "yandex.cloud.ai.vision.v1.Line";
  /** Area on the page where the line is located. */
  boundingBox?:
    | Polygon
    | undefined;
  /** Recognized words in this line. */
  words: Word[];
  /** Confidence of the OCR results for the line. Range [0, 1]. */
  confidence: number;
}

export interface Word {
  $type: "yandex.cloud.ai.vision.v1.Word";
  /** Area on the page where the word is located. */
  boundingBox?:
    | Polygon
    | undefined;
  /** Recognized word value. */
  text: string;
  /** Confidence of the OCR results for the word. Range [0, 1]. */
  confidence: number;
  /** A list of detected languages together with confidence. */
  languages: Word_DetectedLanguage[];
  /** Id of recognized word in entities array */
  entityIndex: number;
}

export interface Word_DetectedLanguage {
  $type: "yandex.cloud.ai.vision.v1.Word.DetectedLanguage";
  /** Detected language code. */
  languageCode: string;
  /** Confidence of detected language. Range [0, 1]. */
  confidence: number;
}

function createBaseTextAnnotation(): TextAnnotation {
  return { $type: "yandex.cloud.ai.vision.v1.TextAnnotation", pages: [] };
}

export const TextAnnotation = {
  $type: "yandex.cloud.ai.vision.v1.TextAnnotation" as const,

  encode(message: TextAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pages) {
      Page.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pages.push(Page.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextAnnotation {
    return {
      $type: TextAnnotation.$type,
      pages: globalThis.Array.isArray(object?.pages) ? object.pages.map((e: any) => Page.fromJSON(e)) : [],
    };
  },

  toJSON(message: TextAnnotation): unknown {
    const obj: any = {};
    if (message.pages?.length) {
      obj.pages = message.pages.map((e) => Page.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextAnnotation>, I>>(base?: I): TextAnnotation {
    return TextAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextAnnotation>, I>>(object: I): TextAnnotation {
    const message = createBaseTextAnnotation();
    message.pages = object.pages?.map((e) => Page.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TextAnnotation.$type, TextAnnotation);

function createBasePage(): Page {
  return { $type: "yandex.cloud.ai.vision.v1.Page", width: 0, height: 0, blocks: [], entities: [] };
}

export const Page = {
  $type: "yandex.cloud.ai.vision.v1.Page" as const,

  encode(message: Page, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).int64(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).int64(message.height);
    }
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.entities) {
      Entity.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Page {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.width = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blocks.push(Block.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entities.push(Entity.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Page {
    return {
      $type: Page.$type,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      blocks: globalThis.Array.isArray(object?.blocks) ? object.blocks.map((e: any) => Block.fromJSON(e)) : [],
      entities: globalThis.Array.isArray(object?.entities) ? object.entities.map((e: any) => Entity.fromJSON(e)) : [],
    };
  },

  toJSON(message: Page): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.blocks?.length) {
      obj.blocks = message.blocks.map((e) => Block.toJSON(e));
    }
    if (message.entities?.length) {
      obj.entities = message.entities.map((e) => Entity.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Page>, I>>(base?: I): Page {
    return Page.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Page>, I>>(object: I): Page {
    const message = createBasePage();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
    message.entities = object.entities?.map((e) => Entity.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Page.$type, Page);

function createBaseEntity(): Entity {
  return { $type: "yandex.cloud.ai.vision.v1.Entity", name: "", text: "" };
}

export const Entity = {
  $type: "yandex.cloud.ai.vision.v1.Entity" as const,

  encode(message: Entity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Entity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntity();
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
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Entity {
    return {
      $type: Entity.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : "",
    };
  },

  toJSON(message: Entity): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Entity>, I>>(base?: I): Entity {
    return Entity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Entity>, I>>(object: I): Entity {
    const message = createBaseEntity();
    message.name = object.name ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(Entity.$type, Entity);

function createBaseBlock(): Block {
  return { $type: "yandex.cloud.ai.vision.v1.Block", boundingBox: undefined, lines: [] };
}

export const Block = {
  $type: "yandex.cloud.ai.vision.v1.Block" as const,

  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lines) {
      Line.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.boundingBox = Polygon.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lines.push(Line.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      $type: Block.$type,
      boundingBox: isSet(object.boundingBox) ? Polygon.fromJSON(object.boundingBox) : undefined,
      lines: globalThis.Array.isArray(object?.lines) ? object.lines.map((e: any) => Line.fromJSON(e)) : [],
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    if (message.boundingBox !== undefined) {
      obj.boundingBox = Polygon.toJSON(message.boundingBox);
    }
    if (message.lines?.length) {
      obj.lines = message.lines.map((e) => Line.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Block>, I>>(base?: I): Block {
    return Block.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.boundingBox = (object.boundingBox !== undefined && object.boundingBox !== null)
      ? Polygon.fromPartial(object.boundingBox)
      : undefined;
    message.lines = object.lines?.map((e) => Line.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Block.$type, Block);

function createBaseLine(): Line {
  return { $type: "yandex.cloud.ai.vision.v1.Line", boundingBox: undefined, words: [], confidence: 0 };
}

export const Line = {
  $type: "yandex.cloud.ai.vision.v1.Line" as const,

  encode(message: Line, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.words) {
      Word.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.confidence !== 0) {
      writer.uint32(25).double(message.confidence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Line {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.boundingBox = Polygon.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.words.push(Word.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.confidence = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Line {
    return {
      $type: Line.$type,
      boundingBox: isSet(object.boundingBox) ? Polygon.fromJSON(object.boundingBox) : undefined,
      words: globalThis.Array.isArray(object?.words) ? object.words.map((e: any) => Word.fromJSON(e)) : [],
      confidence: isSet(object.confidence) ? globalThis.Number(object.confidence) : 0,
    };
  },

  toJSON(message: Line): unknown {
    const obj: any = {};
    if (message.boundingBox !== undefined) {
      obj.boundingBox = Polygon.toJSON(message.boundingBox);
    }
    if (message.words?.length) {
      obj.words = message.words.map((e) => Word.toJSON(e));
    }
    if (message.confidence !== 0) {
      obj.confidence = message.confidence;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Line>, I>>(base?: I): Line {
    return Line.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Line>, I>>(object: I): Line {
    const message = createBaseLine();
    message.boundingBox = (object.boundingBox !== undefined && object.boundingBox !== null)
      ? Polygon.fromPartial(object.boundingBox)
      : undefined;
    message.words = object.words?.map((e) => Word.fromPartial(e)) || [];
    message.confidence = object.confidence ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Line.$type, Line);

function createBaseWord(): Word {
  return {
    $type: "yandex.cloud.ai.vision.v1.Word",
    boundingBox: undefined,
    text: "",
    confidence: 0,
    languages: [],
    entityIndex: 0,
  };
}

export const Word = {
  $type: "yandex.cloud.ai.vision.v1.Word" as const,

  encode(message: Word, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.confidence !== 0) {
      writer.uint32(25).double(message.confidence);
    }
    for (const v of message.languages) {
      Word_DetectedLanguage.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.entityIndex !== 0) {
      writer.uint32(40).int64(message.entityIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Word {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.boundingBox = Polygon.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.confidence = reader.double();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.languages.push(Word_DetectedLanguage.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.entityIndex = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Word {
    return {
      $type: Word.$type,
      boundingBox: isSet(object.boundingBox) ? Polygon.fromJSON(object.boundingBox) : undefined,
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      confidence: isSet(object.confidence) ? globalThis.Number(object.confidence) : 0,
      languages: globalThis.Array.isArray(object?.languages)
        ? object.languages.map((e: any) => Word_DetectedLanguage.fromJSON(e))
        : [],
      entityIndex: isSet(object.entityIndex) ? globalThis.Number(object.entityIndex) : 0,
    };
  },

  toJSON(message: Word): unknown {
    const obj: any = {};
    if (message.boundingBox !== undefined) {
      obj.boundingBox = Polygon.toJSON(message.boundingBox);
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.confidence !== 0) {
      obj.confidence = message.confidence;
    }
    if (message.languages?.length) {
      obj.languages = message.languages.map((e) => Word_DetectedLanguage.toJSON(e));
    }
    if (message.entityIndex !== 0) {
      obj.entityIndex = Math.round(message.entityIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Word>, I>>(base?: I): Word {
    return Word.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Word>, I>>(object: I): Word {
    const message = createBaseWord();
    message.boundingBox = (object.boundingBox !== undefined && object.boundingBox !== null)
      ? Polygon.fromPartial(object.boundingBox)
      : undefined;
    message.text = object.text ?? "";
    message.confidence = object.confidence ?? 0;
    message.languages = object.languages?.map((e) => Word_DetectedLanguage.fromPartial(e)) || [];
    message.entityIndex = object.entityIndex ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Word.$type, Word);

function createBaseWord_DetectedLanguage(): Word_DetectedLanguage {
  return { $type: "yandex.cloud.ai.vision.v1.Word.DetectedLanguage", languageCode: "", confidence: 0 };
}

export const Word_DetectedLanguage = {
  $type: "yandex.cloud.ai.vision.v1.Word.DetectedLanguage" as const,

  encode(message: Word_DetectedLanguage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.languageCode !== "") {
      writer.uint32(10).string(message.languageCode);
    }
    if (message.confidence !== 0) {
      writer.uint32(17).double(message.confidence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Word_DetectedLanguage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWord_DetectedLanguage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.languageCode = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.confidence = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Word_DetectedLanguage {
    return {
      $type: Word_DetectedLanguage.$type,
      languageCode: isSet(object.languageCode) ? globalThis.String(object.languageCode) : "",
      confidence: isSet(object.confidence) ? globalThis.Number(object.confidence) : 0,
    };
  },

  toJSON(message: Word_DetectedLanguage): unknown {
    const obj: any = {};
    if (message.languageCode !== "") {
      obj.languageCode = message.languageCode;
    }
    if (message.confidence !== 0) {
      obj.confidence = message.confidence;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Word_DetectedLanguage>, I>>(base?: I): Word_DetectedLanguage {
    return Word_DetectedLanguage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Word_DetectedLanguage>, I>>(object: I): Word_DetectedLanguage {
    const message = createBaseWord_DetectedLanguage();
    message.languageCode = object.languageCode ?? "";
    message.confidence = object.confidence ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Word_DetectedLanguage.$type, Word_DetectedLanguage);

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
