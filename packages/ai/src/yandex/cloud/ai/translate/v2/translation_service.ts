/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Language, TranslatedText } from "./translation";

export const protobufPackage = "yandex.cloud.ai.translate.v2";

export interface TranslateRequest {
  $type: "yandex.cloud.ai.translate.v2.TranslateRequest";
  /**
   * The text language to translate from.
   * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
   *
   * Required for translating with glossary.
   */
  sourceLanguageCode: string;
  /**
   * The target language to translate the text.
   * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
   */
  targetLanguageCode: string;
  /** Format of the text. */
  format: TranslateRequest_Format;
  /**
   * Array of the strings to translate.
   * The maximum total length of all strings is 10000 characters.
   */
  texts: string[];
  /**
   * ID of the folder to which you have access.
   * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
   * Don't specify this field if you make the request on behalf of a service account.
   */
  folderId: string;
  /** Do not specify this field, custom models are not supported yet. */
  model: string;
  /** Glossary to be applied for the translation. For more information, see [Glossaries](/docs/translate/concepts/glossary). */
  glossaryConfig?:
    | TranslateGlossaryConfig
    | undefined;
  /** use speller */
  speller: boolean;
}

export enum TranslateRequest_Format {
  FORMAT_UNSPECIFIED = 0,
  /** PLAIN_TEXT - Text without markup. Default value. */
  PLAIN_TEXT = 1,
  /** HTML - Text in the HTML format. */
  HTML = 2,
  UNRECOGNIZED = -1,
}

export function translateRequest_FormatFromJSON(object: any): TranslateRequest_Format {
  switch (object) {
    case 0:
    case "FORMAT_UNSPECIFIED":
      return TranslateRequest_Format.FORMAT_UNSPECIFIED;
    case 1:
    case "PLAIN_TEXT":
      return TranslateRequest_Format.PLAIN_TEXT;
    case 2:
    case "HTML":
      return TranslateRequest_Format.HTML;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TranslateRequest_Format.UNRECOGNIZED;
  }
}

export function translateRequest_FormatToJSON(object: TranslateRequest_Format): string {
  switch (object) {
    case TranslateRequest_Format.FORMAT_UNSPECIFIED:
      return "FORMAT_UNSPECIFIED";
    case TranslateRequest_Format.PLAIN_TEXT:
      return "PLAIN_TEXT";
    case TranslateRequest_Format.HTML:
      return "HTML";
    case TranslateRequest_Format.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TranslateGlossaryConfig {
  $type: "yandex.cloud.ai.translate.v2.TranslateGlossaryConfig";
  /** Pass glossary data in the request. Currently, only this way to pass glossary is supported. */
  glossaryData?: GlossaryData | undefined;
}

export interface GlossaryData {
  $type: "yandex.cloud.ai.translate.v2.GlossaryData";
  /**
   * Array of text pairs.
   *
   * The maximum total length of all source texts is 10000 characters.
   * The maximum total length of all translated texts is 10000 characters.
   */
  glossaryPairs: GlossaryPair[];
}

export interface GlossaryPair {
  $type: "yandex.cloud.ai.translate.v2.GlossaryPair";
  /** Text in the source language. */
  sourceText: string;
  /** Text in the target language. */
  translatedText: string;
  exact: boolean;
}

export interface TranslateResponse {
  $type: "yandex.cloud.ai.translate.v2.TranslateResponse";
  /** Array of the translations. */
  translations: TranslatedText[];
}

export interface DetectLanguageRequest {
  $type: "yandex.cloud.ai.translate.v2.DetectLanguageRequest";
  /** The text to detect the language for. */
  text: string;
  /**
   * List of the most likely languages. These languages will be given preference when detecting the text language.
   * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
   *
   * To get the list of supported languages, use a [TranslationService.ListLanguages] request.
   */
  languageCodeHints: string[];
  /**
   * ID of the folder to which you have access.
   * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
   * Don't specify this field if you make the request on behalf of a service account.
   */
  folderId: string;
}

export interface DetectLanguageResponse {
  $type: "yandex.cloud.ai.translate.v2.DetectLanguageResponse";
  /**
   * The text language in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
   *
   * To get the language name, use a [TranslationService.ListLanguages] request.
   */
  languageCode: string;
}

export interface ListLanguagesRequest {
  $type: "yandex.cloud.ai.translate.v2.ListLanguagesRequest";
  /**
   * ID of the folder to which you have access.
   * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
   * Don't specify this field if you make the request on behalf of a service account.
   */
  folderId: string;
}

export interface ListLanguagesResponse {
  $type: "yandex.cloud.ai.translate.v2.ListLanguagesResponse";
  /** List of supported languages. */
  languages: Language[];
}

function createBaseTranslateRequest(): TranslateRequest {
  return {
    $type: "yandex.cloud.ai.translate.v2.TranslateRequest",
    sourceLanguageCode: "",
    targetLanguageCode: "",
    format: 0,
    texts: [],
    folderId: "",
    model: "",
    glossaryConfig: undefined,
    speller: false,
  };
}

export const TranslateRequest = {
  $type: "yandex.cloud.ai.translate.v2.TranslateRequest" as const,

  encode(message: TranslateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceLanguageCode !== "") {
      writer.uint32(10).string(message.sourceLanguageCode);
    }
    if (message.targetLanguageCode !== "") {
      writer.uint32(18).string(message.targetLanguageCode);
    }
    if (message.format !== 0) {
      writer.uint32(24).int32(message.format);
    }
    for (const v of message.texts) {
      writer.uint32(34).string(v!);
    }
    if (message.folderId !== "") {
      writer.uint32(42).string(message.folderId);
    }
    if (message.model !== "") {
      writer.uint32(50).string(message.model);
    }
    if (message.glossaryConfig !== undefined) {
      TranslateGlossaryConfig.encode(message.glossaryConfig, writer.uint32(58).fork()).ldelim();
    }
    if (message.speller === true) {
      writer.uint32(64).bool(message.speller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceLanguageCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetLanguageCode = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.texts.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.model = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.glossaryConfig = TranslateGlossaryConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.speller = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TranslateRequest {
    return {
      $type: TranslateRequest.$type,
      sourceLanguageCode: isSet(object.sourceLanguageCode) ? globalThis.String(object.sourceLanguageCode) : "",
      targetLanguageCode: isSet(object.targetLanguageCode) ? globalThis.String(object.targetLanguageCode) : "",
      format: isSet(object.format) ? translateRequest_FormatFromJSON(object.format) : 0,
      texts: globalThis.Array.isArray(object?.texts) ? object.texts.map((e: any) => globalThis.String(e)) : [],
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      model: isSet(object.model) ? globalThis.String(object.model) : "",
      glossaryConfig: isSet(object.glossaryConfig)
        ? TranslateGlossaryConfig.fromJSON(object.glossaryConfig)
        : undefined,
      speller: isSet(object.speller) ? globalThis.Boolean(object.speller) : false,
    };
  },

  toJSON(message: TranslateRequest): unknown {
    const obj: any = {};
    if (message.sourceLanguageCode !== "") {
      obj.sourceLanguageCode = message.sourceLanguageCode;
    }
    if (message.targetLanguageCode !== "") {
      obj.targetLanguageCode = message.targetLanguageCode;
    }
    if (message.format !== 0) {
      obj.format = translateRequest_FormatToJSON(message.format);
    }
    if (message.texts?.length) {
      obj.texts = message.texts;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.glossaryConfig !== undefined) {
      obj.glossaryConfig = TranslateGlossaryConfig.toJSON(message.glossaryConfig);
    }
    if (message.speller === true) {
      obj.speller = message.speller;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TranslateRequest>, I>>(base?: I): TranslateRequest {
    return TranslateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TranslateRequest>, I>>(object: I): TranslateRequest {
    const message = createBaseTranslateRequest();
    message.sourceLanguageCode = object.sourceLanguageCode ?? "";
    message.targetLanguageCode = object.targetLanguageCode ?? "";
    message.format = object.format ?? 0;
    message.texts = object.texts?.map((e) => e) || [];
    message.folderId = object.folderId ?? "";
    message.model = object.model ?? "";
    message.glossaryConfig = (object.glossaryConfig !== undefined && object.glossaryConfig !== null)
      ? TranslateGlossaryConfig.fromPartial(object.glossaryConfig)
      : undefined;
    message.speller = object.speller ?? false;
    return message;
  },
};

messageTypeRegistry.set(TranslateRequest.$type, TranslateRequest);

function createBaseTranslateGlossaryConfig(): TranslateGlossaryConfig {
  return { $type: "yandex.cloud.ai.translate.v2.TranslateGlossaryConfig", glossaryData: undefined };
}

export const TranslateGlossaryConfig = {
  $type: "yandex.cloud.ai.translate.v2.TranslateGlossaryConfig" as const,

  encode(message: TranslateGlossaryConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.glossaryData !== undefined) {
      GlossaryData.encode(message.glossaryData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslateGlossaryConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslateGlossaryConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.glossaryData = GlossaryData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TranslateGlossaryConfig {
    return {
      $type: TranslateGlossaryConfig.$type,
      glossaryData: isSet(object.glossaryData) ? GlossaryData.fromJSON(object.glossaryData) : undefined,
    };
  },

  toJSON(message: TranslateGlossaryConfig): unknown {
    const obj: any = {};
    if (message.glossaryData !== undefined) {
      obj.glossaryData = GlossaryData.toJSON(message.glossaryData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TranslateGlossaryConfig>, I>>(base?: I): TranslateGlossaryConfig {
    return TranslateGlossaryConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TranslateGlossaryConfig>, I>>(object: I): TranslateGlossaryConfig {
    const message = createBaseTranslateGlossaryConfig();
    message.glossaryData = (object.glossaryData !== undefined && object.glossaryData !== null)
      ? GlossaryData.fromPartial(object.glossaryData)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(TranslateGlossaryConfig.$type, TranslateGlossaryConfig);

function createBaseGlossaryData(): GlossaryData {
  return { $type: "yandex.cloud.ai.translate.v2.GlossaryData", glossaryPairs: [] };
}

export const GlossaryData = {
  $type: "yandex.cloud.ai.translate.v2.GlossaryData" as const,

  encode(message: GlossaryData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.glossaryPairs) {
      GlossaryPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlossaryData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlossaryData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.glossaryPairs.push(GlossaryPair.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GlossaryData {
    return {
      $type: GlossaryData.$type,
      glossaryPairs: globalThis.Array.isArray(object?.glossaryPairs)
        ? object.glossaryPairs.map((e: any) => GlossaryPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GlossaryData): unknown {
    const obj: any = {};
    if (message.glossaryPairs?.length) {
      obj.glossaryPairs = message.glossaryPairs.map((e) => GlossaryPair.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GlossaryData>, I>>(base?: I): GlossaryData {
    return GlossaryData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GlossaryData>, I>>(object: I): GlossaryData {
    const message = createBaseGlossaryData();
    message.glossaryPairs = object.glossaryPairs?.map((e) => GlossaryPair.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GlossaryData.$type, GlossaryData);

function createBaseGlossaryPair(): GlossaryPair {
  return { $type: "yandex.cloud.ai.translate.v2.GlossaryPair", sourceText: "", translatedText: "", exact: false };
}

export const GlossaryPair = {
  $type: "yandex.cloud.ai.translate.v2.GlossaryPair" as const,

  encode(message: GlossaryPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceText !== "") {
      writer.uint32(10).string(message.sourceText);
    }
    if (message.translatedText !== "") {
      writer.uint32(18).string(message.translatedText);
    }
    if (message.exact === true) {
      writer.uint32(24).bool(message.exact);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlossaryPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlossaryPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceText = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.translatedText = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.exact = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GlossaryPair {
    return {
      $type: GlossaryPair.$type,
      sourceText: isSet(object.sourceText) ? globalThis.String(object.sourceText) : "",
      translatedText: isSet(object.translatedText) ? globalThis.String(object.translatedText) : "",
      exact: isSet(object.exact) ? globalThis.Boolean(object.exact) : false,
    };
  },

  toJSON(message: GlossaryPair): unknown {
    const obj: any = {};
    if (message.sourceText !== "") {
      obj.sourceText = message.sourceText;
    }
    if (message.translatedText !== "") {
      obj.translatedText = message.translatedText;
    }
    if (message.exact === true) {
      obj.exact = message.exact;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GlossaryPair>, I>>(base?: I): GlossaryPair {
    return GlossaryPair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GlossaryPair>, I>>(object: I): GlossaryPair {
    const message = createBaseGlossaryPair();
    message.sourceText = object.sourceText ?? "";
    message.translatedText = object.translatedText ?? "";
    message.exact = object.exact ?? false;
    return message;
  },
};

messageTypeRegistry.set(GlossaryPair.$type, GlossaryPair);

function createBaseTranslateResponse(): TranslateResponse {
  return { $type: "yandex.cloud.ai.translate.v2.TranslateResponse", translations: [] };
}

export const TranslateResponse = {
  $type: "yandex.cloud.ai.translate.v2.TranslateResponse" as const,

  encode(message: TranslateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.translations) {
      TranslatedText.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.translations.push(TranslatedText.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TranslateResponse {
    return {
      $type: TranslateResponse.$type,
      translations: globalThis.Array.isArray(object?.translations)
        ? object.translations.map((e: any) => TranslatedText.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TranslateResponse): unknown {
    const obj: any = {};
    if (message.translations?.length) {
      obj.translations = message.translations.map((e) => TranslatedText.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TranslateResponse>, I>>(base?: I): TranslateResponse {
    return TranslateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TranslateResponse>, I>>(object: I): TranslateResponse {
    const message = createBaseTranslateResponse();
    message.translations = object.translations?.map((e) => TranslatedText.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TranslateResponse.$type, TranslateResponse);

function createBaseDetectLanguageRequest(): DetectLanguageRequest {
  return { $type: "yandex.cloud.ai.translate.v2.DetectLanguageRequest", text: "", languageCodeHints: [], folderId: "" };
}

export const DetectLanguageRequest = {
  $type: "yandex.cloud.ai.translate.v2.DetectLanguageRequest" as const,

  encode(message: DetectLanguageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    for (const v of message.languageCodeHints) {
      writer.uint32(18).string(v!);
    }
    if (message.folderId !== "") {
      writer.uint32(26).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DetectLanguageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetectLanguageRequest();
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

          message.languageCodeHints.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DetectLanguageRequest {
    return {
      $type: DetectLanguageRequest.$type,
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      languageCodeHints: globalThis.Array.isArray(object?.languageCodeHints)
        ? object.languageCodeHints.map((e: any) => globalThis.String(e))
        : [],
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: DetectLanguageRequest): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.languageCodeHints?.length) {
      obj.languageCodeHints = message.languageCodeHints;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DetectLanguageRequest>, I>>(base?: I): DetectLanguageRequest {
    return DetectLanguageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DetectLanguageRequest>, I>>(object: I): DetectLanguageRequest {
    const message = createBaseDetectLanguageRequest();
    message.text = object.text ?? "";
    message.languageCodeHints = object.languageCodeHints?.map((e) => e) || [];
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DetectLanguageRequest.$type, DetectLanguageRequest);

function createBaseDetectLanguageResponse(): DetectLanguageResponse {
  return { $type: "yandex.cloud.ai.translate.v2.DetectLanguageResponse", languageCode: "" };
}

export const DetectLanguageResponse = {
  $type: "yandex.cloud.ai.translate.v2.DetectLanguageResponse" as const,

  encode(message: DetectLanguageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.languageCode !== "") {
      writer.uint32(10).string(message.languageCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DetectLanguageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetectLanguageResponse();
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

  fromJSON(object: any): DetectLanguageResponse {
    return {
      $type: DetectLanguageResponse.$type,
      languageCode: isSet(object.languageCode) ? globalThis.String(object.languageCode) : "",
    };
  },

  toJSON(message: DetectLanguageResponse): unknown {
    const obj: any = {};
    if (message.languageCode !== "") {
      obj.languageCode = message.languageCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DetectLanguageResponse>, I>>(base?: I): DetectLanguageResponse {
    return DetectLanguageResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DetectLanguageResponse>, I>>(object: I): DetectLanguageResponse {
    const message = createBaseDetectLanguageResponse();
    message.languageCode = object.languageCode ?? "";
    return message;
  },
};

messageTypeRegistry.set(DetectLanguageResponse.$type, DetectLanguageResponse);

function createBaseListLanguagesRequest(): ListLanguagesRequest {
  return { $type: "yandex.cloud.ai.translate.v2.ListLanguagesRequest", folderId: "" };
}

export const ListLanguagesRequest = {
  $type: "yandex.cloud.ai.translate.v2.ListLanguagesRequest" as const,

  encode(message: ListLanguagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLanguagesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLanguagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListLanguagesRequest {
    return {
      $type: ListLanguagesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: ListLanguagesRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLanguagesRequest>, I>>(base?: I): ListLanguagesRequest {
    return ListLanguagesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLanguagesRequest>, I>>(object: I): ListLanguagesRequest {
    const message = createBaseListLanguagesRequest();
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLanguagesRequest.$type, ListLanguagesRequest);

function createBaseListLanguagesResponse(): ListLanguagesResponse {
  return { $type: "yandex.cloud.ai.translate.v2.ListLanguagesResponse", languages: [] };
}

export const ListLanguagesResponse = {
  $type: "yandex.cloud.ai.translate.v2.ListLanguagesResponse" as const,

  encode(message: ListLanguagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.languages) {
      Language.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLanguagesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLanguagesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.languages.push(Language.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListLanguagesResponse {
    return {
      $type: ListLanguagesResponse.$type,
      languages: globalThis.Array.isArray(object?.languages)
        ? object.languages.map((e: any) => Language.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListLanguagesResponse): unknown {
    const obj: any = {};
    if (message.languages?.length) {
      obj.languages = message.languages.map((e) => Language.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLanguagesResponse>, I>>(base?: I): ListLanguagesResponse {
    return ListLanguagesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLanguagesResponse>, I>>(object: I): ListLanguagesResponse {
    const message = createBaseListLanguagesResponse();
    message.languages = object.languages?.map((e) => Language.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListLanguagesResponse.$type, ListLanguagesResponse);

/** A set of methods for the Translate service. */
export type TranslationServiceService = typeof TranslationServiceService;
export const TranslationServiceService = {
  /** Translates the text to the specified language. */
  translate: {
    path: "/yandex.cloud.ai.translate.v2.TranslationService/Translate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TranslateRequest) => Buffer.from(TranslateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TranslateRequest.decode(value),
    responseSerialize: (value: TranslateResponse) => Buffer.from(TranslateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TranslateResponse.decode(value),
  },
  /** Detects the language of the text. */
  detectLanguage: {
    path: "/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DetectLanguageRequest) => Buffer.from(DetectLanguageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DetectLanguageRequest.decode(value),
    responseSerialize: (value: DetectLanguageResponse) => Buffer.from(DetectLanguageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DetectLanguageResponse.decode(value),
  },
  /** Retrieves the list of supported languages. */
  listLanguages: {
    path: "/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLanguagesRequest) => Buffer.from(ListLanguagesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListLanguagesRequest.decode(value),
    responseSerialize: (value: ListLanguagesResponse) => Buffer.from(ListLanguagesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListLanguagesResponse.decode(value),
  },
} as const;

export interface TranslationServiceServer extends UntypedServiceImplementation {
  /** Translates the text to the specified language. */
  translate: handleUnaryCall<TranslateRequest, TranslateResponse>;
  /** Detects the language of the text. */
  detectLanguage: handleUnaryCall<DetectLanguageRequest, DetectLanguageResponse>;
  /** Retrieves the list of supported languages. */
  listLanguages: handleUnaryCall<ListLanguagesRequest, ListLanguagesResponse>;
}

export interface TranslationServiceClient extends Client {
  /** Translates the text to the specified language. */
  translate(
    request: TranslateRequest,
    callback: (error: ServiceError | null, response: TranslateResponse) => void,
  ): ClientUnaryCall;
  translate(
    request: TranslateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TranslateResponse) => void,
  ): ClientUnaryCall;
  translate(
    request: TranslateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TranslateResponse) => void,
  ): ClientUnaryCall;
  /** Detects the language of the text. */
  detectLanguage(
    request: DetectLanguageRequest,
    callback: (error: ServiceError | null, response: DetectLanguageResponse) => void,
  ): ClientUnaryCall;
  detectLanguage(
    request: DetectLanguageRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DetectLanguageResponse) => void,
  ): ClientUnaryCall;
  detectLanguage(
    request: DetectLanguageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DetectLanguageResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of supported languages. */
  listLanguages(
    request: ListLanguagesRequest,
    callback: (error: ServiceError | null, response: ListLanguagesResponse) => void,
  ): ClientUnaryCall;
  listLanguages(
    request: ListLanguagesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListLanguagesResponse) => void,
  ): ClientUnaryCall;
  listLanguages(
    request: ListLanguagesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListLanguagesResponse) => void,
  ): ClientUnaryCall;
}

export const TranslationServiceClient = makeGenericClientConstructor(
  TranslationServiceService,
  "yandex.cloud.ai.translate.v2.TranslationService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TranslationServiceClient;
  service: typeof TranslationServiceService;
  serviceName: string;
};

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
