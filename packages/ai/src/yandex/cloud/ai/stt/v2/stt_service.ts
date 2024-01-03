/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientDuplexStream,
  handleBidiStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.ai.stt.v2";

export interface LongRunningRecognitionRequest {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest";
  config?: RecognitionConfig | undefined;
  audio?: RecognitionAudio | undefined;
}

export interface LongRunningRecognitionResponse {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse";
  chunks: SpeechRecognitionResult[];
}

export interface StreamingRecognitionRequest {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest";
  config?: RecognitionConfig | undefined;
  audioContent?: Buffer | undefined;
}

export interface StreamingRecognitionResponse {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse";
  chunks: SpeechRecognitionChunk[];
}

export interface RecognitionAudio {
  $type: "yandex.cloud.ai.stt.v2.RecognitionAudio";
  content?: Buffer | undefined;
  uri?: string | undefined;
}

export interface RecognitionConfig {
  $type: "yandex.cloud.ai.stt.v2.RecognitionConfig";
  specification?: RecognitionSpec | undefined;
  folderId: string;
}

export interface RecognitionSpec {
  $type: "yandex.cloud.ai.stt.v2.RecognitionSpec";
  audioEncoding: RecognitionSpec_AudioEncoding;
  /** 8000, 16000, 48000 only for pcm */
  sampleRateHertz: number;
  /** code in BCP-47 */
  languageCode: string;
  profanityFilter: boolean;
  model: string;
  /**
   * If set true, tentative hypotheses may be returned as they become available (final=false flag)
   * If false or omitted, only final=true result(s) are returned.
   * Makes sense only for StreamingRecognize requests.
   */
  partialResults: boolean;
  singleUtterance: boolean;
  /** Used only for long running recognize. */
  audioChannelCount: number;
  /** This mark allows disable normalization text */
  rawResults: boolean;
  /** Rewrite text in literature style (default: false) */
  literatureText: boolean;
}

export enum RecognitionSpec_AudioEncoding {
  AUDIO_ENCODING_UNSPECIFIED = 0,
  /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM) */
  LINEAR16_PCM = 1,
  OGG_OPUS = 2,
  /** MP3 - transcription only */
  MP3 = 3,
  UNRECOGNIZED = -1,
}

export function recognitionSpec_AudioEncodingFromJSON(object: any): RecognitionSpec_AudioEncoding {
  switch (object) {
    case 0:
    case "AUDIO_ENCODING_UNSPECIFIED":
      return RecognitionSpec_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
    case 1:
    case "LINEAR16_PCM":
      return RecognitionSpec_AudioEncoding.LINEAR16_PCM;
    case 2:
    case "OGG_OPUS":
      return RecognitionSpec_AudioEncoding.OGG_OPUS;
    case 3:
    case "MP3":
      return RecognitionSpec_AudioEncoding.MP3;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecognitionSpec_AudioEncoding.UNRECOGNIZED;
  }
}

export function recognitionSpec_AudioEncodingToJSON(object: RecognitionSpec_AudioEncoding): string {
  switch (object) {
    case RecognitionSpec_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
      return "AUDIO_ENCODING_UNSPECIFIED";
    case RecognitionSpec_AudioEncoding.LINEAR16_PCM:
      return "LINEAR16_PCM";
    case RecognitionSpec_AudioEncoding.OGG_OPUS:
      return "OGG_OPUS";
    case RecognitionSpec_AudioEncoding.MP3:
      return "MP3";
    case RecognitionSpec_AudioEncoding.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SpeechRecognitionChunk {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk";
  alternatives: SpeechRecognitionAlternative[];
  /** This flag shows that the received chunk contains a part of the recognized text that won't be changed. */
  final: boolean;
  /** This flag shows that the received chunk is the end of an utterance. */
  endOfUtterance: boolean;
}

export interface SpeechRecognitionResult {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult";
  alternatives: SpeechRecognitionAlternative[];
  channelTag: number;
}

export interface SpeechRecognitionAlternative {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative";
  text: string;
  confidence: number;
  words: WordInfo[];
}

export interface WordInfo {
  $type: "yandex.cloud.ai.stt.v2.WordInfo";
  startTime?: Duration | undefined;
  endTime?: Duration | undefined;
  word: string;
  confidence: number;
}

function createBaseLongRunningRecognitionRequest(): LongRunningRecognitionRequest {
  return { $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest", config: undefined, audio: undefined };
}

export const LongRunningRecognitionRequest = {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest" as const,

  encode(message: LongRunningRecognitionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      RecognitionConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      RecognitionAudio.encode(message.audio, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LongRunningRecognitionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLongRunningRecognitionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = RecognitionConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audio = RecognitionAudio.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LongRunningRecognitionRequest {
    return {
      $type: LongRunningRecognitionRequest.$type,
      config: isSet(object.config) ? RecognitionConfig.fromJSON(object.config) : undefined,
      audio: isSet(object.audio) ? RecognitionAudio.fromJSON(object.audio) : undefined,
    };
  },

  toJSON(message: LongRunningRecognitionRequest): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = RecognitionConfig.toJSON(message.config);
    }
    if (message.audio !== undefined) {
      obj.audio = RecognitionAudio.toJSON(message.audio);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LongRunningRecognitionRequest>, I>>(base?: I): LongRunningRecognitionRequest {
    return LongRunningRecognitionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LongRunningRecognitionRequest>, I>>(
    object: I,
  ): LongRunningRecognitionRequest {
    const message = createBaseLongRunningRecognitionRequest();
    message.config = (object.config !== undefined && object.config !== null)
      ? RecognitionConfig.fromPartial(object.config)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? RecognitionAudio.fromPartial(object.audio)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(LongRunningRecognitionRequest.$type, LongRunningRecognitionRequest);

function createBaseLongRunningRecognitionResponse(): LongRunningRecognitionResponse {
  return { $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse", chunks: [] };
}

export const LongRunningRecognitionResponse = {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse" as const,

  encode(message: LongRunningRecognitionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chunks) {
      SpeechRecognitionResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LongRunningRecognitionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLongRunningRecognitionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chunks.push(SpeechRecognitionResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LongRunningRecognitionResponse {
    return {
      $type: LongRunningRecognitionResponse.$type,
      chunks: globalThis.Array.isArray(object?.chunks)
        ? object.chunks.map((e: any) => SpeechRecognitionResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LongRunningRecognitionResponse): unknown {
    const obj: any = {};
    if (message.chunks?.length) {
      obj.chunks = message.chunks.map((e) => SpeechRecognitionResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LongRunningRecognitionResponse>, I>>(base?: I): LongRunningRecognitionResponse {
    return LongRunningRecognitionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LongRunningRecognitionResponse>, I>>(
    object: I,
  ): LongRunningRecognitionResponse {
    const message = createBaseLongRunningRecognitionResponse();
    message.chunks = object.chunks?.map((e) => SpeechRecognitionResult.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(LongRunningRecognitionResponse.$type, LongRunningRecognitionResponse);

function createBaseStreamingRecognitionRequest(): StreamingRecognitionRequest {
  return { $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest", config: undefined, audioContent: undefined };
}

export const StreamingRecognitionRequest = {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest" as const,

  encode(message: StreamingRecognitionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      RecognitionConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.audioContent !== undefined) {
      writer.uint32(18).bytes(message.audioContent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingRecognitionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingRecognitionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = RecognitionConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audioContent = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingRecognitionRequest {
    return {
      $type: StreamingRecognitionRequest.$type,
      config: isSet(object.config) ? RecognitionConfig.fromJSON(object.config) : undefined,
      audioContent: isSet(object.audioContent) ? Buffer.from(bytesFromBase64(object.audioContent)) : undefined,
    };
  },

  toJSON(message: StreamingRecognitionRequest): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = RecognitionConfig.toJSON(message.config);
    }
    if (message.audioContent !== undefined) {
      obj.audioContent = base64FromBytes(message.audioContent);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingRecognitionRequest>, I>>(base?: I): StreamingRecognitionRequest {
    return StreamingRecognitionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingRecognitionRequest>, I>>(object: I): StreamingRecognitionRequest {
    const message = createBaseStreamingRecognitionRequest();
    message.config = (object.config !== undefined && object.config !== null)
      ? RecognitionConfig.fromPartial(object.config)
      : undefined;
    message.audioContent = object.audioContent ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(StreamingRecognitionRequest.$type, StreamingRecognitionRequest);

function createBaseStreamingRecognitionResponse(): StreamingRecognitionResponse {
  return { $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse", chunks: [] };
}

export const StreamingRecognitionResponse = {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse" as const,

  encode(message: StreamingRecognitionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chunks) {
      SpeechRecognitionChunk.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingRecognitionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingRecognitionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chunks.push(SpeechRecognitionChunk.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingRecognitionResponse {
    return {
      $type: StreamingRecognitionResponse.$type,
      chunks: globalThis.Array.isArray(object?.chunks)
        ? object.chunks.map((e: any) => SpeechRecognitionChunk.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StreamingRecognitionResponse): unknown {
    const obj: any = {};
    if (message.chunks?.length) {
      obj.chunks = message.chunks.map((e) => SpeechRecognitionChunk.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingRecognitionResponse>, I>>(base?: I): StreamingRecognitionResponse {
    return StreamingRecognitionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingRecognitionResponse>, I>>(object: I): StreamingRecognitionResponse {
    const message = createBaseStreamingRecognitionResponse();
    message.chunks = object.chunks?.map((e) => SpeechRecognitionChunk.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(StreamingRecognitionResponse.$type, StreamingRecognitionResponse);

function createBaseRecognitionAudio(): RecognitionAudio {
  return { $type: "yandex.cloud.ai.stt.v2.RecognitionAudio", content: undefined, uri: undefined };
}

export const RecognitionAudio = {
  $type: "yandex.cloud.ai.stt.v2.RecognitionAudio" as const,

  encode(message: RecognitionAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.uri !== undefined) {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionAudio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognitionAudio();
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
          if (tag !== 18) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecognitionAudio {
    return {
      $type: RecognitionAudio.$type,
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : undefined,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : undefined,
    };
  },

  toJSON(message: RecognitionAudio): unknown {
    const obj: any = {};
    if (message.content !== undefined) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.uri !== undefined) {
      obj.uri = message.uri;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognitionAudio>, I>>(base?: I): RecognitionAudio {
    return RecognitionAudio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognitionAudio>, I>>(object: I): RecognitionAudio {
    const message = createBaseRecognitionAudio();
    message.content = object.content ?? undefined;
    message.uri = object.uri ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RecognitionAudio.$type, RecognitionAudio);

function createBaseRecognitionConfig(): RecognitionConfig {
  return { $type: "yandex.cloud.ai.stt.v2.RecognitionConfig", specification: undefined, folderId: "" };
}

export const RecognitionConfig = {
  $type: "yandex.cloud.ai.stt.v2.RecognitionConfig" as const,

  encode(message: RecognitionConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.specification !== undefined) {
      RecognitionSpec.encode(message.specification, writer.uint32(10).fork()).ldelim();
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognitionConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.specification = RecognitionSpec.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): RecognitionConfig {
    return {
      $type: RecognitionConfig.$type,
      specification: isSet(object.specification) ? RecognitionSpec.fromJSON(object.specification) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: RecognitionConfig): unknown {
    const obj: any = {};
    if (message.specification !== undefined) {
      obj.specification = RecognitionSpec.toJSON(message.specification);
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognitionConfig>, I>>(base?: I): RecognitionConfig {
    return RecognitionConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognitionConfig>, I>>(object: I): RecognitionConfig {
    const message = createBaseRecognitionConfig();
    message.specification = (object.specification !== undefined && object.specification !== null)
      ? RecognitionSpec.fromPartial(object.specification)
      : undefined;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RecognitionConfig.$type, RecognitionConfig);

function createBaseRecognitionSpec(): RecognitionSpec {
  return {
    $type: "yandex.cloud.ai.stt.v2.RecognitionSpec",
    audioEncoding: 0,
    sampleRateHertz: 0,
    languageCode: "",
    profanityFilter: false,
    model: "",
    partialResults: false,
    singleUtterance: false,
    audioChannelCount: 0,
    rawResults: false,
    literatureText: false,
  };
}

export const RecognitionSpec = {
  $type: "yandex.cloud.ai.stt.v2.RecognitionSpec" as const,

  encode(message: RecognitionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audioEncoding !== 0) {
      writer.uint32(8).int32(message.audioEncoding);
    }
    if (message.sampleRateHertz !== 0) {
      writer.uint32(16).int64(message.sampleRateHertz);
    }
    if (message.languageCode !== "") {
      writer.uint32(26).string(message.languageCode);
    }
    if (message.profanityFilter === true) {
      writer.uint32(32).bool(message.profanityFilter);
    }
    if (message.model !== "") {
      writer.uint32(42).string(message.model);
    }
    if (message.partialResults === true) {
      writer.uint32(56).bool(message.partialResults);
    }
    if (message.singleUtterance === true) {
      writer.uint32(64).bool(message.singleUtterance);
    }
    if (message.audioChannelCount !== 0) {
      writer.uint32(72).int64(message.audioChannelCount);
    }
    if (message.rawResults === true) {
      writer.uint32(80).bool(message.rawResults);
    }
    if (message.literatureText === true) {
      writer.uint32(88).bool(message.literatureText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognitionSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.audioEncoding = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sampleRateHertz = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.languageCode = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.profanityFilter = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.model = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.partialResults = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.singleUtterance = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.audioChannelCount = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.rawResults = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.literatureText = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecognitionSpec {
    return {
      $type: RecognitionSpec.$type,
      audioEncoding: isSet(object.audioEncoding) ? recognitionSpec_AudioEncodingFromJSON(object.audioEncoding) : 0,
      sampleRateHertz: isSet(object.sampleRateHertz) ? globalThis.Number(object.sampleRateHertz) : 0,
      languageCode: isSet(object.languageCode) ? globalThis.String(object.languageCode) : "",
      profanityFilter: isSet(object.profanityFilter) ? globalThis.Boolean(object.profanityFilter) : false,
      model: isSet(object.model) ? globalThis.String(object.model) : "",
      partialResults: isSet(object.partialResults) ? globalThis.Boolean(object.partialResults) : false,
      singleUtterance: isSet(object.singleUtterance) ? globalThis.Boolean(object.singleUtterance) : false,
      audioChannelCount: isSet(object.audioChannelCount) ? globalThis.Number(object.audioChannelCount) : 0,
      rawResults: isSet(object.rawResults) ? globalThis.Boolean(object.rawResults) : false,
      literatureText: isSet(object.literatureText) ? globalThis.Boolean(object.literatureText) : false,
    };
  },

  toJSON(message: RecognitionSpec): unknown {
    const obj: any = {};
    if (message.audioEncoding !== 0) {
      obj.audioEncoding = recognitionSpec_AudioEncodingToJSON(message.audioEncoding);
    }
    if (message.sampleRateHertz !== 0) {
      obj.sampleRateHertz = Math.round(message.sampleRateHertz);
    }
    if (message.languageCode !== "") {
      obj.languageCode = message.languageCode;
    }
    if (message.profanityFilter === true) {
      obj.profanityFilter = message.profanityFilter;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.partialResults === true) {
      obj.partialResults = message.partialResults;
    }
    if (message.singleUtterance === true) {
      obj.singleUtterance = message.singleUtterance;
    }
    if (message.audioChannelCount !== 0) {
      obj.audioChannelCount = Math.round(message.audioChannelCount);
    }
    if (message.rawResults === true) {
      obj.rawResults = message.rawResults;
    }
    if (message.literatureText === true) {
      obj.literatureText = message.literatureText;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognitionSpec>, I>>(base?: I): RecognitionSpec {
    return RecognitionSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognitionSpec>, I>>(object: I): RecognitionSpec {
    const message = createBaseRecognitionSpec();
    message.audioEncoding = object.audioEncoding ?? 0;
    message.sampleRateHertz = object.sampleRateHertz ?? 0;
    message.languageCode = object.languageCode ?? "";
    message.profanityFilter = object.profanityFilter ?? false;
    message.model = object.model ?? "";
    message.partialResults = object.partialResults ?? false;
    message.singleUtterance = object.singleUtterance ?? false;
    message.audioChannelCount = object.audioChannelCount ?? 0;
    message.rawResults = object.rawResults ?? false;
    message.literatureText = object.literatureText ?? false;
    return message;
  },
};

messageTypeRegistry.set(RecognitionSpec.$type, RecognitionSpec);

function createBaseSpeechRecognitionChunk(): SpeechRecognitionChunk {
  return {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk",
    alternatives: [],
    final: false,
    endOfUtterance: false,
  };
}

export const SpeechRecognitionChunk = {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk" as const,

  encode(message: SpeechRecognitionChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.alternatives) {
      SpeechRecognitionAlternative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.final === true) {
      writer.uint32(16).bool(message.final);
    }
    if (message.endOfUtterance === true) {
      writer.uint32(24).bool(message.endOfUtterance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeechRecognitionChunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpeechRecognitionChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alternatives.push(SpeechRecognitionAlternative.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.final = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.endOfUtterance = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpeechRecognitionChunk {
    return {
      $type: SpeechRecognitionChunk.$type,
      alternatives: globalThis.Array.isArray(object?.alternatives)
        ? object.alternatives.map((e: any) => SpeechRecognitionAlternative.fromJSON(e))
        : [],
      final: isSet(object.final) ? globalThis.Boolean(object.final) : false,
      endOfUtterance: isSet(object.endOfUtterance) ? globalThis.Boolean(object.endOfUtterance) : false,
    };
  },

  toJSON(message: SpeechRecognitionChunk): unknown {
    const obj: any = {};
    if (message.alternatives?.length) {
      obj.alternatives = message.alternatives.map((e) => SpeechRecognitionAlternative.toJSON(e));
    }
    if (message.final === true) {
      obj.final = message.final;
    }
    if (message.endOfUtterance === true) {
      obj.endOfUtterance = message.endOfUtterance;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SpeechRecognitionChunk>, I>>(base?: I): SpeechRecognitionChunk {
    return SpeechRecognitionChunk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SpeechRecognitionChunk>, I>>(object: I): SpeechRecognitionChunk {
    const message = createBaseSpeechRecognitionChunk();
    message.alternatives = object.alternatives?.map((e) => SpeechRecognitionAlternative.fromPartial(e)) || [];
    message.final = object.final ?? false;
    message.endOfUtterance = object.endOfUtterance ?? false;
    return message;
  },
};

messageTypeRegistry.set(SpeechRecognitionChunk.$type, SpeechRecognitionChunk);

function createBaseSpeechRecognitionResult(): SpeechRecognitionResult {
  return { $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult", alternatives: [], channelTag: 0 };
}

export const SpeechRecognitionResult = {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult" as const,

  encode(message: SpeechRecognitionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.alternatives) {
      SpeechRecognitionAlternative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.channelTag !== 0) {
      writer.uint32(16).int64(message.channelTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeechRecognitionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpeechRecognitionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alternatives.push(SpeechRecognitionAlternative.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.channelTag = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpeechRecognitionResult {
    return {
      $type: SpeechRecognitionResult.$type,
      alternatives: globalThis.Array.isArray(object?.alternatives)
        ? object.alternatives.map((e: any) => SpeechRecognitionAlternative.fromJSON(e))
        : [],
      channelTag: isSet(object.channelTag) ? globalThis.Number(object.channelTag) : 0,
    };
  },

  toJSON(message: SpeechRecognitionResult): unknown {
    const obj: any = {};
    if (message.alternatives?.length) {
      obj.alternatives = message.alternatives.map((e) => SpeechRecognitionAlternative.toJSON(e));
    }
    if (message.channelTag !== 0) {
      obj.channelTag = Math.round(message.channelTag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SpeechRecognitionResult>, I>>(base?: I): SpeechRecognitionResult {
    return SpeechRecognitionResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SpeechRecognitionResult>, I>>(object: I): SpeechRecognitionResult {
    const message = createBaseSpeechRecognitionResult();
    message.alternatives = object.alternatives?.map((e) => SpeechRecognitionAlternative.fromPartial(e)) || [];
    message.channelTag = object.channelTag ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SpeechRecognitionResult.$type, SpeechRecognitionResult);

function createBaseSpeechRecognitionAlternative(): SpeechRecognitionAlternative {
  return { $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative", text: "", confidence: 0, words: [] };
}

export const SpeechRecognitionAlternative = {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative" as const,

  encode(message: SpeechRecognitionAlternative, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.confidence !== 0) {
      writer.uint32(21).float(message.confidence);
    }
    for (const v of message.words) {
      WordInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeechRecognitionAlternative {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpeechRecognitionAlternative();
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
          if (tag !== 21) {
            break;
          }

          message.confidence = reader.float();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.words.push(WordInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpeechRecognitionAlternative {
    return {
      $type: SpeechRecognitionAlternative.$type,
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      confidence: isSet(object.confidence) ? globalThis.Number(object.confidence) : 0,
      words: globalThis.Array.isArray(object?.words) ? object.words.map((e: any) => WordInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: SpeechRecognitionAlternative): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.confidence !== 0) {
      obj.confidence = message.confidence;
    }
    if (message.words?.length) {
      obj.words = message.words.map((e) => WordInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SpeechRecognitionAlternative>, I>>(base?: I): SpeechRecognitionAlternative {
    return SpeechRecognitionAlternative.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SpeechRecognitionAlternative>, I>>(object: I): SpeechRecognitionAlternative {
    const message = createBaseSpeechRecognitionAlternative();
    message.text = object.text ?? "";
    message.confidence = object.confidence ?? 0;
    message.words = object.words?.map((e) => WordInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(SpeechRecognitionAlternative.$type, SpeechRecognitionAlternative);

function createBaseWordInfo(): WordInfo {
  return {
    $type: "yandex.cloud.ai.stt.v2.WordInfo",
    startTime: undefined,
    endTime: undefined,
    word: "",
    confidence: 0,
  };
}

export const WordInfo = {
  $type: "yandex.cloud.ai.stt.v2.WordInfo" as const,

  encode(message: WordInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) {
      Duration.encode(message.startTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Duration.encode(message.endTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.word !== "") {
      writer.uint32(26).string(message.word);
    }
    if (message.confidence !== 0) {
      writer.uint32(37).float(message.confidence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WordInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWordInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startTime = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endTime = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.word = reader.string();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.confidence = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WordInfo {
    return {
      $type: WordInfo.$type,
      startTime: isSet(object.startTime) ? Duration.fromJSON(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? Duration.fromJSON(object.endTime) : undefined,
      word: isSet(object.word) ? globalThis.String(object.word) : "",
      confidence: isSet(object.confidence) ? globalThis.Number(object.confidence) : 0,
    };
  },

  toJSON(message: WordInfo): unknown {
    const obj: any = {};
    if (message.startTime !== undefined) {
      obj.startTime = Duration.toJSON(message.startTime);
    }
    if (message.endTime !== undefined) {
      obj.endTime = Duration.toJSON(message.endTime);
    }
    if (message.word !== "") {
      obj.word = message.word;
    }
    if (message.confidence !== 0) {
      obj.confidence = message.confidence;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WordInfo>, I>>(base?: I): WordInfo {
    return WordInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WordInfo>, I>>(object: I): WordInfo {
    const message = createBaseWordInfo();
    message.startTime = (object.startTime !== undefined && object.startTime !== null)
      ? Duration.fromPartial(object.startTime)
      : undefined;
    message.endTime = (object.endTime !== undefined && object.endTime !== null)
      ? Duration.fromPartial(object.endTime)
      : undefined;
    message.word = object.word ?? "";
    message.confidence = object.confidence ?? 0;
    return message;
  },
};

messageTypeRegistry.set(WordInfo.$type, WordInfo);

export type SttServiceService = typeof SttServiceService;
export const SttServiceService = {
  longRunningRecognize: {
    path: "/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LongRunningRecognitionRequest) =>
      Buffer.from(LongRunningRecognitionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LongRunningRecognitionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  streamingRecognize: {
    path: "/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: StreamingRecognitionRequest) =>
      Buffer.from(StreamingRecognitionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StreamingRecognitionRequest.decode(value),
    responseSerialize: (value: StreamingRecognitionResponse) =>
      Buffer.from(StreamingRecognitionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamingRecognitionResponse.decode(value),
  },
} as const;

export interface SttServiceServer extends UntypedServiceImplementation {
  longRunningRecognize: handleUnaryCall<LongRunningRecognitionRequest, Operation>;
  streamingRecognize: handleBidiStreamingCall<StreamingRecognitionRequest, StreamingRecognitionResponse>;
}

export interface SttServiceClient extends Client {
  longRunningRecognize(
    request: LongRunningRecognitionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  longRunningRecognize(
    request: LongRunningRecognitionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  longRunningRecognize(
    request: LongRunningRecognitionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  streamingRecognize(): ClientDuplexStream<StreamingRecognitionRequest, StreamingRecognitionResponse>;
  streamingRecognize(
    options: Partial<CallOptions>,
  ): ClientDuplexStream<StreamingRecognitionRequest, StreamingRecognitionResponse>;
  streamingRecognize(
    metadata: Metadata,
    options?: Partial<CallOptions>,
  ): ClientDuplexStream<StreamingRecognitionRequest, StreamingRecognitionResponse>;
}

export const SttServiceClient = makeGenericClientConstructor(
  SttServiceService,
  "yandex.cloud.ai.stt.v2.SttService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SttServiceClient;
  service: typeof SttServiceService;
};

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
