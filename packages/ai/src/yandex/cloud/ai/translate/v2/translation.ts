/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.ai.translate.v2";

export interface TranslatedText {
  $type: "yandex.cloud.ai.translate.v2.TranslatedText";
  /** Translated text. */
  text: string;
  /**
   * The language code of the source text.
   * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
   */
  detectedLanguageCode: string;
}

export interface Language {
  $type: "yandex.cloud.ai.translate.v2.Language";
  /**
   * The language code.
   * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
   */
  code: string;
  /** The name of the language (for example, `` English ``). */
  name: string;
}

function createBaseTranslatedText(): TranslatedText {
  return { $type: "yandex.cloud.ai.translate.v2.TranslatedText", text: "", detectedLanguageCode: "" };
}

export const TranslatedText = {
  $type: "yandex.cloud.ai.translate.v2.TranslatedText" as const,

  encode(message: TranslatedText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.detectedLanguageCode !== "") {
      writer.uint32(18).string(message.detectedLanguageCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslatedText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslatedText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.detectedLanguageCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TranslatedText {
    return {
      $type: TranslatedText.$type,
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      detectedLanguageCode: isSet(object.detectedLanguageCode) ? globalThis.String(object.detectedLanguageCode) : "",
    };
  },

  toJSON(message: TranslatedText): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.detectedLanguageCode !== "") {
      obj.detectedLanguageCode = message.detectedLanguageCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TranslatedText>, I>>(base?: I): TranslatedText {
    return TranslatedText.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TranslatedText>, I>>(object: I): TranslatedText {
    const message = createBaseTranslatedText();
    message.text = object.text ?? "";
    message.detectedLanguageCode = object.detectedLanguageCode ?? "";
    return message;
  },
};

messageTypeRegistry.set(TranslatedText.$type, TranslatedText);

function createBaseLanguage(): Language {
  return { $type: "yandex.cloud.ai.translate.v2.Language", code: "", name: "" };
}

export const Language = {
  $type: "yandex.cloud.ai.translate.v2.Language" as const,

  encode(message: Language, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Language {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLanguage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
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

  fromJSON(object: any): Language {
    return {
      $type: Language.$type,
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Language): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Language>, I>>(base?: I): Language {
    return Language.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Language>, I>>(object: I): Language {
    const message = createBaseLanguage();
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(Language.$type, Language);

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
