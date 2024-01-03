/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.ai.ocr.v1";

export interface Polygon {
  $type: "yandex.cloud.ai.ocr.v1.Polygon";
  /** The bounding polygon vertices. */
  vertices: Vertex[];
}

export interface Vertex {
  $type: "yandex.cloud.ai.ocr.v1.Vertex";
  /** X coordinate in pixels. */
  x: number;
  /** Y coordinate in pixels. */
  y: number;
}

export interface TextAnnotation {
  $type: "yandex.cloud.ai.ocr.v1.TextAnnotation";
  /** Page width in pixels. */
  width: number;
  /** Page height in pixels. */
  height: number;
  /** Recognized text blocks in this page. */
  blocks: Block[];
  /** Recognized entities. */
  entities: Entity[];
}

export interface Entity {
  $type: "yandex.cloud.ai.ocr.v1.Entity";
  /** Entity name. */
  name: string;
  /** Recognized entity text. */
  text: string;
}

export interface Block {
  $type: "yandex.cloud.ai.ocr.v1.Block";
  /** Area on the page where the text block is located. */
  boundingBox?:
    | Polygon
    | undefined;
  /** Recognized lines in this block. */
  lines: Line[];
  /** A list of detected languages */
  languages: Block_DetectedLanguage[];
}

export interface Block_DetectedLanguage {
  $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage";
  /** Detected language code. */
  languageCode: string;
}

export interface Line {
  $type: "yandex.cloud.ai.ocr.v1.Line";
  /** Area on the page where the line is located. */
  boundingBox?:
    | Polygon
    | undefined;
  /** Recognized text. */
  text: string;
  /** Recognized words */
  words: Word[];
}

export interface Word {
  $type: "yandex.cloud.ai.ocr.v1.Word";
  /** Area on the page where the word is located. */
  boundingBox?:
    | Polygon
    | undefined;
  /** Recognized word value. */
  text: string;
  /** ID of the recognized word in entities array. */
  entityIndex: number;
}

function createBasePolygon(): Polygon {
  return { $type: "yandex.cloud.ai.ocr.v1.Polygon", vertices: [] };
}

export const Polygon = {
  $type: "yandex.cloud.ai.ocr.v1.Polygon" as const,

  encode(message: Polygon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vertices) {
      Vertex.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Polygon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolygon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vertices.push(Vertex.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Polygon {
    return {
      $type: Polygon.$type,
      vertices: globalThis.Array.isArray(object?.vertices) ? object.vertices.map((e: any) => Vertex.fromJSON(e)) : [],
    };
  },

  toJSON(message: Polygon): unknown {
    const obj: any = {};
    if (message.vertices?.length) {
      obj.vertices = message.vertices.map((e) => Vertex.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Polygon>, I>>(base?: I): Polygon {
    return Polygon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Polygon>, I>>(object: I): Polygon {
    const message = createBasePolygon();
    message.vertices = object.vertices?.map((e) => Vertex.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Polygon.$type, Polygon);

function createBaseVertex(): Vertex {
  return { $type: "yandex.cloud.ai.ocr.v1.Vertex", x: 0, y: 0 };
}

export const Vertex = {
  $type: "yandex.cloud.ai.ocr.v1.Vertex" as const,

  encode(message: Vertex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int64(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int64(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vertex {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.x = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.y = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vertex {
    return {
      $type: Vertex.$type,
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: Vertex): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Vertex>, I>>(base?: I): Vertex {
    return Vertex.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Vertex>, I>>(object: I): Vertex {
    const message = createBaseVertex();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Vertex.$type, Vertex);

function createBaseTextAnnotation(): TextAnnotation {
  return { $type: "yandex.cloud.ai.ocr.v1.TextAnnotation", width: 0, height: 0, blocks: [], entities: [] };
}

export const TextAnnotation = {
  $type: "yandex.cloud.ai.ocr.v1.TextAnnotation" as const,

  encode(message: TextAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TextAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextAnnotation();
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

  fromJSON(object: any): TextAnnotation {
    return {
      $type: TextAnnotation.$type,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      blocks: globalThis.Array.isArray(object?.blocks) ? object.blocks.map((e: any) => Block.fromJSON(e)) : [],
      entities: globalThis.Array.isArray(object?.entities) ? object.entities.map((e: any) => Entity.fromJSON(e)) : [],
    };
  },

  toJSON(message: TextAnnotation): unknown {
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

  create<I extends Exact<DeepPartial<TextAnnotation>, I>>(base?: I): TextAnnotation {
    return TextAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextAnnotation>, I>>(object: I): TextAnnotation {
    const message = createBaseTextAnnotation();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
    message.entities = object.entities?.map((e) => Entity.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TextAnnotation.$type, TextAnnotation);

function createBaseEntity(): Entity {
  return { $type: "yandex.cloud.ai.ocr.v1.Entity", name: "", text: "" };
}

export const Entity = {
  $type: "yandex.cloud.ai.ocr.v1.Entity" as const,

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
  return { $type: "yandex.cloud.ai.ocr.v1.Block", boundingBox: undefined, lines: [], languages: [] };
}

export const Block = {
  $type: "yandex.cloud.ai.ocr.v1.Block" as const,

  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lines) {
      Line.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.languages) {
      Block_DetectedLanguage.encode(v!, writer.uint32(26).fork()).ldelim();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.languages.push(Block_DetectedLanguage.decode(reader, reader.uint32()));
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
      languages: globalThis.Array.isArray(object?.languages)
        ? object.languages.map((e: any) => Block_DetectedLanguage.fromJSON(e))
        : [],
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
    if (message.languages?.length) {
      obj.languages = message.languages.map((e) => Block_DetectedLanguage.toJSON(e));
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
    message.languages = object.languages?.map((e) => Block_DetectedLanguage.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Block.$type, Block);

function createBaseBlock_DetectedLanguage(): Block_DetectedLanguage {
  return { $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage", languageCode: "" };
}

export const Block_DetectedLanguage = {
  $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage" as const,

  encode(message: Block_DetectedLanguage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.languageCode !== "") {
      writer.uint32(10).string(message.languageCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block_DetectedLanguage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock_DetectedLanguage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.languageCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Block_DetectedLanguage {
    return {
      $type: Block_DetectedLanguage.$type,
      languageCode: isSet(object.languageCode) ? globalThis.String(object.languageCode) : "",
    };
  },

  toJSON(message: Block_DetectedLanguage): unknown {
    const obj: any = {};
    if (message.languageCode !== "") {
      obj.languageCode = message.languageCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Block_DetectedLanguage>, I>>(base?: I): Block_DetectedLanguage {
    return Block_DetectedLanguage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Block_DetectedLanguage>, I>>(object: I): Block_DetectedLanguage {
    const message = createBaseBlock_DetectedLanguage();
    message.languageCode = object.languageCode ?? "";
    return message;
  },
};

messageTypeRegistry.set(Block_DetectedLanguage.$type, Block_DetectedLanguage);

function createBaseLine(): Line {
  return { $type: "yandex.cloud.ai.ocr.v1.Line", boundingBox: undefined, text: "", words: [] };
}

export const Line = {
  $type: "yandex.cloud.ai.ocr.v1.Line" as const,

  encode(message: Line, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    for (const v of message.words) {
      Word.encode(v!, writer.uint32(26).fork()).ldelim();
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

          message.text = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.words.push(Word.decode(reader, reader.uint32()));
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
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      words: globalThis.Array.isArray(object?.words) ? object.words.map((e: any) => Word.fromJSON(e)) : [],
    };
  },

  toJSON(message: Line): unknown {
    const obj: any = {};
    if (message.boundingBox !== undefined) {
      obj.boundingBox = Polygon.toJSON(message.boundingBox);
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.words?.length) {
      obj.words = message.words.map((e) => Word.toJSON(e));
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
    message.text = object.text ?? "";
    message.words = object.words?.map((e) => Word.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Line.$type, Line);

function createBaseWord(): Word {
  return { $type: "yandex.cloud.ai.ocr.v1.Word", boundingBox: undefined, text: "", entityIndex: 0 };
}

export const Word = {
  $type: "yandex.cloud.ai.ocr.v1.Word" as const,

  encode(message: Word, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(24).int64(message.entityIndex);
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
          if (tag !== 24) {
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
    message.entityIndex = object.entityIndex ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Word.$type, Word);

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
