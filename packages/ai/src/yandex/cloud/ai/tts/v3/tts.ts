/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "speechkit.tts.v3";

export interface AudioContent {
  $type: "speechkit.tts.v3.AudioContent";
  /** Bytes with audio data. */
  content?:
    | Buffer
    | undefined;
  /** Description of the audio format. */
  audioSpec?: AudioFormatOptions | undefined;
}

export interface AudioFormatOptions {
  $type: "speechkit.tts.v3.AudioFormatOptions";
  /** The audio format specified in request parameters. */
  rawAudio?:
    | RawAudio
    | undefined;
  /** The audio format specified inside the container metadata. */
  containerAudio?: ContainerAudio | undefined;
}

export interface RawAudio {
  $type: "speechkit.tts.v3.RawAudio";
  /** Encoding type. */
  audioEncoding: RawAudio_AudioEncoding;
  /** Sampling frequency of the signal. */
  sampleRateHertz: number;
}

export enum RawAudio_AudioEncoding {
  AUDIO_ENCODING_UNSPECIFIED = 0,
  /** LINEAR16_PCM - Audio bit depth 16-bit signed little-endian (Linear PCM). */
  LINEAR16_PCM = 1,
  UNRECOGNIZED = -1,
}

export function rawAudio_AudioEncodingFromJSON(object: any): RawAudio_AudioEncoding {
  switch (object) {
    case 0:
    case "AUDIO_ENCODING_UNSPECIFIED":
      return RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
    case 1:
    case "LINEAR16_PCM":
      return RawAudio_AudioEncoding.LINEAR16_PCM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RawAudio_AudioEncoding.UNRECOGNIZED;
  }
}

export function rawAudio_AudioEncodingToJSON(object: RawAudio_AudioEncoding): string {
  switch (object) {
    case RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
      return "AUDIO_ENCODING_UNSPECIFIED";
    case RawAudio_AudioEncoding.LINEAR16_PCM:
      return "LINEAR16_PCM";
    case RawAudio_AudioEncoding.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ContainerAudio {
  $type: "speechkit.tts.v3.ContainerAudio";
  containerAudioType: ContainerAudio_ContainerAudioType;
}

export enum ContainerAudio_ContainerAudioType {
  CONTAINER_AUDIO_TYPE_UNSPECIFIED = 0,
  /** WAV - Audio bit depth 16-bit signed little-endian (Linear PCM). */
  WAV = 1,
  /** OGG_OPUS - Data is encoded using the OPUS audio codec and compressed using the OGG container format. */
  OGG_OPUS = 2,
  /** MP3 - Data is encoded using MPEG-1/2 Layer III and compressed using the MP3 container format. */
  MP3 = 3,
  UNRECOGNIZED = -1,
}

export function containerAudio_ContainerAudioTypeFromJSON(object: any): ContainerAudio_ContainerAudioType {
  switch (object) {
    case 0:
    case "CONTAINER_AUDIO_TYPE_UNSPECIFIED":
      return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED;
    case 1:
    case "WAV":
      return ContainerAudio_ContainerAudioType.WAV;
    case 2:
    case "OGG_OPUS":
      return ContainerAudio_ContainerAudioType.OGG_OPUS;
    case 3:
    case "MP3":
      return ContainerAudio_ContainerAudioType.MP3;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContainerAudio_ContainerAudioType.UNRECOGNIZED;
  }
}

export function containerAudio_ContainerAudioTypeToJSON(object: ContainerAudio_ContainerAudioType): string {
  switch (object) {
    case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED:
      return "CONTAINER_AUDIO_TYPE_UNSPECIFIED";
    case ContainerAudio_ContainerAudioType.WAV:
      return "WAV";
    case ContainerAudio_ContainerAudioType.OGG_OPUS:
      return "OGG_OPUS";
    case ContainerAudio_ContainerAudioType.MP3:
      return "MP3";
    case ContainerAudio_ContainerAudioType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TextVariable {
  $type: "speechkit.tts.v3.TextVariable";
  /** The name of the variable. */
  variableName: string;
  /** The text of the variable. */
  variableValue: string;
}

export interface AudioVariable {
  $type: "speechkit.tts.v3.AudioVariable";
  /** The name of the variable. */
  variableName: string;
  /** Start time of the variable in milliseconds. */
  variableStartMs: number;
  /** Length of the variable in milliseconds. */
  variableLengthMs: number;
}

export interface UtteranceSynthesisResponse {
  $type: "speechkit.tts.v3.UtteranceSynthesisResponse";
  /** Part of synthesized audio. */
  audioChunk?:
    | AudioChunk
    | undefined;
  /** Part of synthesized text. */
  textChunk?:
    | TextChunk
    | undefined;
  /** Start time of the audio chunk in milliseconds. */
  startMs: number;
  /** Length of the audio chunk in milliseconds. */
  lengthMs: number;
}

export interface AudioTemplate {
  $type: "speechkit.tts.v3.AudioTemplate";
  /** Audio file. */
  audio?:
    | AudioContent
    | undefined;
  /** Template and description of its variables. */
  textTemplate?:
    | TextTemplate
    | undefined;
  /** Describing variables in audio. */
  variables: AudioVariable[];
}

export interface AudioChunk {
  $type: "speechkit.tts.v3.AudioChunk";
  /** Sequence of bytes of the synthesized audio in format specified in output_audio_spec. */
  data: Buffer;
}

export interface TextChunk {
  $type: "speechkit.tts.v3.TextChunk";
  /** Synthesized text. */
  text: string;
}

export interface TextTemplate {
  $type: "speechkit.tts.v3.TextTemplate";
  /**
   * Template text.
   *
   * Sample:`The {animal} goes to the {place}.`
   */
  textTemplate: string;
  /**
   * Defining variables in template text.
   *
   * Sample: `{animal: cat, place: forest}`
   */
  variables: TextVariable[];
}

export interface DurationHint {
  $type: "speechkit.tts.v3.DurationHint";
  /** Type of duration constraint. */
  policy: DurationHint_DurationHintPolicy;
  /** Constraint on audio duration in milliseconds. */
  durationMs: number;
}

export enum DurationHint_DurationHintPolicy {
  DURATION_HINT_POLICY_UNSPECIFIED = 0,
  /** EXACT_DURATION - Limit audio duration to exact value. */
  EXACT_DURATION = 1,
  /** MIN_DURATION - Limit the minimum audio duration. */
  MIN_DURATION = 2,
  /** MAX_DURATION - Limit the maximum audio duration. */
  MAX_DURATION = 3,
  UNRECOGNIZED = -1,
}

export function durationHint_DurationHintPolicyFromJSON(object: any): DurationHint_DurationHintPolicy {
  switch (object) {
    case 0:
    case "DURATION_HINT_POLICY_UNSPECIFIED":
      return DurationHint_DurationHintPolicy.DURATION_HINT_POLICY_UNSPECIFIED;
    case 1:
    case "EXACT_DURATION":
      return DurationHint_DurationHintPolicy.EXACT_DURATION;
    case 2:
    case "MIN_DURATION":
      return DurationHint_DurationHintPolicy.MIN_DURATION;
    case 3:
    case "MAX_DURATION":
      return DurationHint_DurationHintPolicy.MAX_DURATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DurationHint_DurationHintPolicy.UNRECOGNIZED;
  }
}

export function durationHint_DurationHintPolicyToJSON(object: DurationHint_DurationHintPolicy): string {
  switch (object) {
    case DurationHint_DurationHintPolicy.DURATION_HINT_POLICY_UNSPECIFIED:
      return "DURATION_HINT_POLICY_UNSPECIFIED";
    case DurationHint_DurationHintPolicy.EXACT_DURATION:
      return "EXACT_DURATION";
    case DurationHint_DurationHintPolicy.MIN_DURATION:
      return "MIN_DURATION";
    case DurationHint_DurationHintPolicy.MAX_DURATION:
      return "MAX_DURATION";
    case DurationHint_DurationHintPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Hints {
  $type: "speechkit.tts.v3.Hints";
  /** Name of speaker to use. */
  voice?:
    | string
    | undefined;
  /** Template for synthesizing. */
  audioTemplate?:
    | AudioTemplate
    | undefined;
  /** Hint to change speed. */
  speed?:
    | number
    | undefined;
  /**
   * Hint to regulate normalization level.
   * * For `MAX_PEAK` loudness_normalization_type: volume changes in a range (0;1], default value is 0.7.
   * * For `LUFS` loudness_normalization_type: volume changes in a range [-145;0), default value is -19.
   */
  volume?:
    | number
    | undefined;
  /** Hint to specify pronunciation character for the speaker. */
  role?:
    | string
    | undefined;
  /** Hint to increase (or decrease) speaker's pitch, measured in Hz. Valid values are in range [-1000;1000], default value is 0. */
  pitchShift?:
    | number
    | undefined;
  /** Hint to limit both minimum and maximum audio duration. */
  duration?: DurationHint | undefined;
}

export interface UtteranceSynthesisRequest {
  $type: "speechkit.tts.v3.UtteranceSynthesisRequest";
  /**
   * The name of the model.
   * Specifies basic synthesis functionality. Currently should be empty. Do not use it.
   */
  model: string;
  /** Raw text (e.g. "Hello, Alice"). */
  text?:
    | string
    | undefined;
  /** Text template instance, e.g. `{"Hello, {username}" with username="Alice"}`. */
  textTemplate?:
    | TextTemplate
    | undefined;
  /** Optional hints for synthesis. */
  hints: Hints[];
  /** Optional. Default: 22050 Hz, linear 16-bit signed little-endian PCM, with WAV header */
  outputAudioSpec?:
    | AudioFormatOptions
    | undefined;
  /**
   * Specifies type of loudness normalization.
   * Optional. Default: `LUFS`.
   */
  loudnessNormalizationType: UtteranceSynthesisRequest_LoudnessNormalizationType;
  /** Optional. Automatically split long text to several utterances and bill accordingly. Some degradation in service quality is possible. */
  unsafeMode: boolean;
}

export enum UtteranceSynthesisRequest_LoudnessNormalizationType {
  LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED = 0,
  /** MAX_PEAK - The type of normalization, wherein the gain is changed to bring the highest PCM sample value or analog signal peak to a given level. */
  MAX_PEAK = 1,
  /** LUFS - The type of normalization based on EBU R 128 recommendation. */
  LUFS = 2,
  UNRECOGNIZED = -1,
}

export function utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(
  object: any,
): UtteranceSynthesisRequest_LoudnessNormalizationType {
  switch (object) {
    case 0:
    case "LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED":
      return UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "MAX_PEAK":
      return UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK;
    case 2:
    case "LUFS":
      return UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UtteranceSynthesisRequest_LoudnessNormalizationType.UNRECOGNIZED;
  }
}

export function utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(
  object: UtteranceSynthesisRequest_LoudnessNormalizationType,
): string {
  switch (object) {
    case UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED:
      return "LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED";
    case UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK:
      return "MAX_PEAK";
    case UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS:
      return "LUFS";
    case UtteranceSynthesisRequest_LoudnessNormalizationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAudioContent(): AudioContent {
  return { $type: "speechkit.tts.v3.AudioContent", content: undefined, audioSpec: undefined };
}

export const AudioContent = {
  $type: "speechkit.tts.v3.AudioContent" as const,

  encode(message: AudioContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.audioSpec !== undefined) {
      AudioFormatOptions.encode(message.audioSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioContent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioContent();
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

          message.audioSpec = AudioFormatOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioContent {
    return {
      $type: AudioContent.$type,
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : undefined,
      audioSpec: isSet(object.audioSpec) ? AudioFormatOptions.fromJSON(object.audioSpec) : undefined,
    };
  },

  toJSON(message: AudioContent): unknown {
    const obj: any = {};
    if (message.content !== undefined) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.audioSpec !== undefined) {
      obj.audioSpec = AudioFormatOptions.toJSON(message.audioSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioContent>, I>>(base?: I): AudioContent {
    return AudioContent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioContent>, I>>(object: I): AudioContent {
    const message = createBaseAudioContent();
    message.content = object.content ?? undefined;
    message.audioSpec = (object.audioSpec !== undefined && object.audioSpec !== null)
      ? AudioFormatOptions.fromPartial(object.audioSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AudioContent.$type, AudioContent);

function createBaseAudioFormatOptions(): AudioFormatOptions {
  return { $type: "speechkit.tts.v3.AudioFormatOptions", rawAudio: undefined, containerAudio: undefined };
}

export const AudioFormatOptions = {
  $type: "speechkit.tts.v3.AudioFormatOptions" as const,

  encode(message: AudioFormatOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rawAudio !== undefined) {
      RawAudio.encode(message.rawAudio, writer.uint32(10).fork()).ldelim();
    }
    if (message.containerAudio !== undefined) {
      ContainerAudio.encode(message.containerAudio, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioFormatOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioFormatOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rawAudio = RawAudio.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.containerAudio = ContainerAudio.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioFormatOptions {
    return {
      $type: AudioFormatOptions.$type,
      rawAudio: isSet(object.rawAudio) ? RawAudio.fromJSON(object.rawAudio) : undefined,
      containerAudio: isSet(object.containerAudio) ? ContainerAudio.fromJSON(object.containerAudio) : undefined,
    };
  },

  toJSON(message: AudioFormatOptions): unknown {
    const obj: any = {};
    if (message.rawAudio !== undefined) {
      obj.rawAudio = RawAudio.toJSON(message.rawAudio);
    }
    if (message.containerAudio !== undefined) {
      obj.containerAudio = ContainerAudio.toJSON(message.containerAudio);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioFormatOptions>, I>>(base?: I): AudioFormatOptions {
    return AudioFormatOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioFormatOptions>, I>>(object: I): AudioFormatOptions {
    const message = createBaseAudioFormatOptions();
    message.rawAudio = (object.rawAudio !== undefined && object.rawAudio !== null)
      ? RawAudio.fromPartial(object.rawAudio)
      : undefined;
    message.containerAudio = (object.containerAudio !== undefined && object.containerAudio !== null)
      ? ContainerAudio.fromPartial(object.containerAudio)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AudioFormatOptions.$type, AudioFormatOptions);

function createBaseRawAudio(): RawAudio {
  return { $type: "speechkit.tts.v3.RawAudio", audioEncoding: 0, sampleRateHertz: 0 };
}

export const RawAudio = {
  $type: "speechkit.tts.v3.RawAudio" as const,

  encode(message: RawAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audioEncoding !== 0) {
      writer.uint32(8).int32(message.audioEncoding);
    }
    if (message.sampleRateHertz !== 0) {
      writer.uint32(16).int64(message.sampleRateHertz);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RawAudio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawAudio();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RawAudio {
    return {
      $type: RawAudio.$type,
      audioEncoding: isSet(object.audioEncoding) ? rawAudio_AudioEncodingFromJSON(object.audioEncoding) : 0,
      sampleRateHertz: isSet(object.sampleRateHertz) ? globalThis.Number(object.sampleRateHertz) : 0,
    };
  },

  toJSON(message: RawAudio): unknown {
    const obj: any = {};
    if (message.audioEncoding !== 0) {
      obj.audioEncoding = rawAudio_AudioEncodingToJSON(message.audioEncoding);
    }
    if (message.sampleRateHertz !== 0) {
      obj.sampleRateHertz = Math.round(message.sampleRateHertz);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RawAudio>, I>>(base?: I): RawAudio {
    return RawAudio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RawAudio>, I>>(object: I): RawAudio {
    const message = createBaseRawAudio();
    message.audioEncoding = object.audioEncoding ?? 0;
    message.sampleRateHertz = object.sampleRateHertz ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RawAudio.$type, RawAudio);

function createBaseContainerAudio(): ContainerAudio {
  return { $type: "speechkit.tts.v3.ContainerAudio", containerAudioType: 0 };
}

export const ContainerAudio = {
  $type: "speechkit.tts.v3.ContainerAudio" as const,

  encode(message: ContainerAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.containerAudioType !== 0) {
      writer.uint32(8).int32(message.containerAudioType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerAudio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerAudio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.containerAudioType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerAudio {
    return {
      $type: ContainerAudio.$type,
      containerAudioType: isSet(object.containerAudioType)
        ? containerAudio_ContainerAudioTypeFromJSON(object.containerAudioType)
        : 0,
    };
  },

  toJSON(message: ContainerAudio): unknown {
    const obj: any = {};
    if (message.containerAudioType !== 0) {
      obj.containerAudioType = containerAudio_ContainerAudioTypeToJSON(message.containerAudioType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerAudio>, I>>(base?: I): ContainerAudio {
    return ContainerAudio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerAudio>, I>>(object: I): ContainerAudio {
    const message = createBaseContainerAudio();
    message.containerAudioType = object.containerAudioType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ContainerAudio.$type, ContainerAudio);

function createBaseTextVariable(): TextVariable {
  return { $type: "speechkit.tts.v3.TextVariable", variableName: "", variableValue: "" };
}

export const TextVariable = {
  $type: "speechkit.tts.v3.TextVariable" as const,

  encode(message: TextVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.variableName !== "") {
      writer.uint32(10).string(message.variableName);
    }
    if (message.variableValue !== "") {
      writer.uint32(18).string(message.variableValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextVariable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextVariable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.variableName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.variableValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextVariable {
    return {
      $type: TextVariable.$type,
      variableName: isSet(object.variableName) ? globalThis.String(object.variableName) : "",
      variableValue: isSet(object.variableValue) ? globalThis.String(object.variableValue) : "",
    };
  },

  toJSON(message: TextVariable): unknown {
    const obj: any = {};
    if (message.variableName !== "") {
      obj.variableName = message.variableName;
    }
    if (message.variableValue !== "") {
      obj.variableValue = message.variableValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextVariable>, I>>(base?: I): TextVariable {
    return TextVariable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextVariable>, I>>(object: I): TextVariable {
    const message = createBaseTextVariable();
    message.variableName = object.variableName ?? "";
    message.variableValue = object.variableValue ?? "";
    return message;
  },
};

messageTypeRegistry.set(TextVariable.$type, TextVariable);

function createBaseAudioVariable(): AudioVariable {
  return { $type: "speechkit.tts.v3.AudioVariable", variableName: "", variableStartMs: 0, variableLengthMs: 0 };
}

export const AudioVariable = {
  $type: "speechkit.tts.v3.AudioVariable" as const,

  encode(message: AudioVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.variableName !== "") {
      writer.uint32(10).string(message.variableName);
    }
    if (message.variableStartMs !== 0) {
      writer.uint32(16).int64(message.variableStartMs);
    }
    if (message.variableLengthMs !== 0) {
      writer.uint32(24).int64(message.variableLengthMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioVariable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioVariable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.variableName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.variableStartMs = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.variableLengthMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioVariable {
    return {
      $type: AudioVariable.$type,
      variableName: isSet(object.variableName) ? globalThis.String(object.variableName) : "",
      variableStartMs: isSet(object.variableStartMs) ? globalThis.Number(object.variableStartMs) : 0,
      variableLengthMs: isSet(object.variableLengthMs) ? globalThis.Number(object.variableLengthMs) : 0,
    };
  },

  toJSON(message: AudioVariable): unknown {
    const obj: any = {};
    if (message.variableName !== "") {
      obj.variableName = message.variableName;
    }
    if (message.variableStartMs !== 0) {
      obj.variableStartMs = Math.round(message.variableStartMs);
    }
    if (message.variableLengthMs !== 0) {
      obj.variableLengthMs = Math.round(message.variableLengthMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioVariable>, I>>(base?: I): AudioVariable {
    return AudioVariable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioVariable>, I>>(object: I): AudioVariable {
    const message = createBaseAudioVariable();
    message.variableName = object.variableName ?? "";
    message.variableStartMs = object.variableStartMs ?? 0;
    message.variableLengthMs = object.variableLengthMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AudioVariable.$type, AudioVariable);

function createBaseUtteranceSynthesisResponse(): UtteranceSynthesisResponse {
  return {
    $type: "speechkit.tts.v3.UtteranceSynthesisResponse",
    audioChunk: undefined,
    textChunk: undefined,
    startMs: 0,
    lengthMs: 0,
  };
}

export const UtteranceSynthesisResponse = {
  $type: "speechkit.tts.v3.UtteranceSynthesisResponse" as const,

  encode(message: UtteranceSynthesisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audioChunk !== undefined) {
      AudioChunk.encode(message.audioChunk, writer.uint32(10).fork()).ldelim();
    }
    if (message.textChunk !== undefined) {
      TextChunk.encode(message.textChunk, writer.uint32(18).fork()).ldelim();
    }
    if (message.startMs !== 0) {
      writer.uint32(24).int64(message.startMs);
    }
    if (message.lengthMs !== 0) {
      writer.uint32(32).int64(message.lengthMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UtteranceSynthesisResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUtteranceSynthesisResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.audioChunk = AudioChunk.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.textChunk = TextChunk.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.startMs = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lengthMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UtteranceSynthesisResponse {
    return {
      $type: UtteranceSynthesisResponse.$type,
      audioChunk: isSet(object.audioChunk) ? AudioChunk.fromJSON(object.audioChunk) : undefined,
      textChunk: isSet(object.textChunk) ? TextChunk.fromJSON(object.textChunk) : undefined,
      startMs: isSet(object.startMs) ? globalThis.Number(object.startMs) : 0,
      lengthMs: isSet(object.lengthMs) ? globalThis.Number(object.lengthMs) : 0,
    };
  },

  toJSON(message: UtteranceSynthesisResponse): unknown {
    const obj: any = {};
    if (message.audioChunk !== undefined) {
      obj.audioChunk = AudioChunk.toJSON(message.audioChunk);
    }
    if (message.textChunk !== undefined) {
      obj.textChunk = TextChunk.toJSON(message.textChunk);
    }
    if (message.startMs !== 0) {
      obj.startMs = Math.round(message.startMs);
    }
    if (message.lengthMs !== 0) {
      obj.lengthMs = Math.round(message.lengthMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UtteranceSynthesisResponse>, I>>(base?: I): UtteranceSynthesisResponse {
    return UtteranceSynthesisResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UtteranceSynthesisResponse>, I>>(object: I): UtteranceSynthesisResponse {
    const message = createBaseUtteranceSynthesisResponse();
    message.audioChunk = (object.audioChunk !== undefined && object.audioChunk !== null)
      ? AudioChunk.fromPartial(object.audioChunk)
      : undefined;
    message.textChunk = (object.textChunk !== undefined && object.textChunk !== null)
      ? TextChunk.fromPartial(object.textChunk)
      : undefined;
    message.startMs = object.startMs ?? 0;
    message.lengthMs = object.lengthMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UtteranceSynthesisResponse.$type, UtteranceSynthesisResponse);

function createBaseAudioTemplate(): AudioTemplate {
  return { $type: "speechkit.tts.v3.AudioTemplate", audio: undefined, textTemplate: undefined, variables: [] };
}

export const AudioTemplate = {
  $type: "speechkit.tts.v3.AudioTemplate" as const,

  encode(message: AudioTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audio !== undefined) {
      AudioContent.encode(message.audio, writer.uint32(10).fork()).ldelim();
    }
    if (message.textTemplate !== undefined) {
      TextTemplate.encode(message.textTemplate, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.variables) {
      AudioVariable.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioTemplate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.audio = AudioContent.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.textTemplate = TextTemplate.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.variables.push(AudioVariable.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioTemplate {
    return {
      $type: AudioTemplate.$type,
      audio: isSet(object.audio) ? AudioContent.fromJSON(object.audio) : undefined,
      textTemplate: isSet(object.textTemplate) ? TextTemplate.fromJSON(object.textTemplate) : undefined,
      variables: globalThis.Array.isArray(object?.variables)
        ? object.variables.map((e: any) => AudioVariable.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AudioTemplate): unknown {
    const obj: any = {};
    if (message.audio !== undefined) {
      obj.audio = AudioContent.toJSON(message.audio);
    }
    if (message.textTemplate !== undefined) {
      obj.textTemplate = TextTemplate.toJSON(message.textTemplate);
    }
    if (message.variables?.length) {
      obj.variables = message.variables.map((e) => AudioVariable.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioTemplate>, I>>(base?: I): AudioTemplate {
    return AudioTemplate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioTemplate>, I>>(object: I): AudioTemplate {
    const message = createBaseAudioTemplate();
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? AudioContent.fromPartial(object.audio)
      : undefined;
    message.textTemplate = (object.textTemplate !== undefined && object.textTemplate !== null)
      ? TextTemplate.fromPartial(object.textTemplate)
      : undefined;
    message.variables = object.variables?.map((e) => AudioVariable.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AudioTemplate.$type, AudioTemplate);

function createBaseAudioChunk(): AudioChunk {
  return { $type: "speechkit.tts.v3.AudioChunk", data: Buffer.alloc(0) };
}

export const AudioChunk = {
  $type: "speechkit.tts.v3.AudioChunk" as const,

  encode(message: AudioChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioChunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioChunk {
    return {
      $type: AudioChunk.$type,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: AudioChunk): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioChunk>, I>>(base?: I): AudioChunk {
    return AudioChunk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioChunk>, I>>(object: I): AudioChunk {
    const message = createBaseAudioChunk();
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AudioChunk.$type, AudioChunk);

function createBaseTextChunk(): TextChunk {
  return { $type: "speechkit.tts.v3.TextChunk", text: "" };
}

export const TextChunk = {
  $type: "speechkit.tts.v3.TextChunk" as const,

  encode(message: TextChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextChunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): TextChunk {
    return { $type: TextChunk.$type, text: isSet(object.text) ? globalThis.String(object.text) : "" };
  },

  toJSON(message: TextChunk): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextChunk>, I>>(base?: I): TextChunk {
    return TextChunk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextChunk>, I>>(object: I): TextChunk {
    const message = createBaseTextChunk();
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(TextChunk.$type, TextChunk);

function createBaseTextTemplate(): TextTemplate {
  return { $type: "speechkit.tts.v3.TextTemplate", textTemplate: "", variables: [] };
}

export const TextTemplate = {
  $type: "speechkit.tts.v3.TextTemplate" as const,

  encode(message: TextTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.textTemplate !== "") {
      writer.uint32(10).string(message.textTemplate);
    }
    for (const v of message.variables) {
      TextVariable.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextTemplate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.textTemplate = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.variables.push(TextVariable.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextTemplate {
    return {
      $type: TextTemplate.$type,
      textTemplate: isSet(object.textTemplate) ? globalThis.String(object.textTemplate) : "",
      variables: globalThis.Array.isArray(object?.variables)
        ? object.variables.map((e: any) => TextVariable.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TextTemplate): unknown {
    const obj: any = {};
    if (message.textTemplate !== "") {
      obj.textTemplate = message.textTemplate;
    }
    if (message.variables?.length) {
      obj.variables = message.variables.map((e) => TextVariable.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextTemplate>, I>>(base?: I): TextTemplate {
    return TextTemplate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextTemplate>, I>>(object: I): TextTemplate {
    const message = createBaseTextTemplate();
    message.textTemplate = object.textTemplate ?? "";
    message.variables = object.variables?.map((e) => TextVariable.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TextTemplate.$type, TextTemplate);

function createBaseDurationHint(): DurationHint {
  return { $type: "speechkit.tts.v3.DurationHint", policy: 0, durationMs: 0 };
}

export const DurationHint = {
  $type: "speechkit.tts.v3.DurationHint" as const,

  encode(message: DurationHint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== 0) {
      writer.uint32(8).int32(message.policy);
    }
    if (message.durationMs !== 0) {
      writer.uint32(16).int64(message.durationMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DurationHint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDurationHint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.policy = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.durationMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DurationHint {
    return {
      $type: DurationHint.$type,
      policy: isSet(object.policy) ? durationHint_DurationHintPolicyFromJSON(object.policy) : 0,
      durationMs: isSet(object.durationMs) ? globalThis.Number(object.durationMs) : 0,
    };
  },

  toJSON(message: DurationHint): unknown {
    const obj: any = {};
    if (message.policy !== 0) {
      obj.policy = durationHint_DurationHintPolicyToJSON(message.policy);
    }
    if (message.durationMs !== 0) {
      obj.durationMs = Math.round(message.durationMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DurationHint>, I>>(base?: I): DurationHint {
    return DurationHint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DurationHint>, I>>(object: I): DurationHint {
    const message = createBaseDurationHint();
    message.policy = object.policy ?? 0;
    message.durationMs = object.durationMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DurationHint.$type, DurationHint);

function createBaseHints(): Hints {
  return {
    $type: "speechkit.tts.v3.Hints",
    voice: undefined,
    audioTemplate: undefined,
    speed: undefined,
    volume: undefined,
    role: undefined,
    pitchShift: undefined,
    duration: undefined,
  };
}

export const Hints = {
  $type: "speechkit.tts.v3.Hints" as const,

  encode(message: Hints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voice !== undefined) {
      writer.uint32(10).string(message.voice);
    }
    if (message.audioTemplate !== undefined) {
      AudioTemplate.encode(message.audioTemplate, writer.uint32(18).fork()).ldelim();
    }
    if (message.speed !== undefined) {
      writer.uint32(25).double(message.speed);
    }
    if (message.volume !== undefined) {
      writer.uint32(33).double(message.volume);
    }
    if (message.role !== undefined) {
      writer.uint32(42).string(message.role);
    }
    if (message.pitchShift !== undefined) {
      writer.uint32(49).double(message.pitchShift);
    }
    if (message.duration !== undefined) {
      DurationHint.encode(message.duration, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.voice = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audioTemplate = AudioTemplate.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.speed = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.volume = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.role = reader.string();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.pitchShift = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.duration = DurationHint.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Hints {
    return {
      $type: Hints.$type,
      voice: isSet(object.voice) ? globalThis.String(object.voice) : undefined,
      audioTemplate: isSet(object.audioTemplate) ? AudioTemplate.fromJSON(object.audioTemplate) : undefined,
      speed: isSet(object.speed) ? globalThis.Number(object.speed) : undefined,
      volume: isSet(object.volume) ? globalThis.Number(object.volume) : undefined,
      role: isSet(object.role) ? globalThis.String(object.role) : undefined,
      pitchShift: isSet(object.pitchShift) ? globalThis.Number(object.pitchShift) : undefined,
      duration: isSet(object.duration) ? DurationHint.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: Hints): unknown {
    const obj: any = {};
    if (message.voice !== undefined) {
      obj.voice = message.voice;
    }
    if (message.audioTemplate !== undefined) {
      obj.audioTemplate = AudioTemplate.toJSON(message.audioTemplate);
    }
    if (message.speed !== undefined) {
      obj.speed = message.speed;
    }
    if (message.volume !== undefined) {
      obj.volume = message.volume;
    }
    if (message.role !== undefined) {
      obj.role = message.role;
    }
    if (message.pitchShift !== undefined) {
      obj.pitchShift = message.pitchShift;
    }
    if (message.duration !== undefined) {
      obj.duration = DurationHint.toJSON(message.duration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Hints>, I>>(base?: I): Hints {
    return Hints.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Hints>, I>>(object: I): Hints {
    const message = createBaseHints();
    message.voice = object.voice ?? undefined;
    message.audioTemplate = (object.audioTemplate !== undefined && object.audioTemplate !== null)
      ? AudioTemplate.fromPartial(object.audioTemplate)
      : undefined;
    message.speed = object.speed ?? undefined;
    message.volume = object.volume ?? undefined;
    message.role = object.role ?? undefined;
    message.pitchShift = object.pitchShift ?? undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? DurationHint.fromPartial(object.duration)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Hints.$type, Hints);

function createBaseUtteranceSynthesisRequest(): UtteranceSynthesisRequest {
  return {
    $type: "speechkit.tts.v3.UtteranceSynthesisRequest",
    model: "",
    text: undefined,
    textTemplate: undefined,
    hints: [],
    outputAudioSpec: undefined,
    loudnessNormalizationType: 0,
    unsafeMode: false,
  };
}

export const UtteranceSynthesisRequest = {
  $type: "speechkit.tts.v3.UtteranceSynthesisRequest" as const,

  encode(message: UtteranceSynthesisRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    if (message.text !== undefined) {
      writer.uint32(18).string(message.text);
    }
    if (message.textTemplate !== undefined) {
      TextTemplate.encode(message.textTemplate, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hints) {
      Hints.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.outputAudioSpec !== undefined) {
      AudioFormatOptions.encode(message.outputAudioSpec, writer.uint32(42).fork()).ldelim();
    }
    if (message.loudnessNormalizationType !== 0) {
      writer.uint32(48).int32(message.loudnessNormalizationType);
    }
    if (message.unsafeMode === true) {
      writer.uint32(56).bool(message.unsafeMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UtteranceSynthesisRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUtteranceSynthesisRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.model = reader.string();
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

          message.textTemplate = TextTemplate.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hints.push(Hints.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.outputAudioSpec = AudioFormatOptions.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.loudnessNormalizationType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.unsafeMode = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UtteranceSynthesisRequest {
    return {
      $type: UtteranceSynthesisRequest.$type,
      model: isSet(object.model) ? globalThis.String(object.model) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : undefined,
      textTemplate: isSet(object.textTemplate) ? TextTemplate.fromJSON(object.textTemplate) : undefined,
      hints: globalThis.Array.isArray(object?.hints) ? object.hints.map((e: any) => Hints.fromJSON(e)) : [],
      outputAudioSpec: isSet(object.outputAudioSpec) ? AudioFormatOptions.fromJSON(object.outputAudioSpec) : undefined,
      loudnessNormalizationType: isSet(object.loudnessNormalizationType)
        ? utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(object.loudnessNormalizationType)
        : 0,
      unsafeMode: isSet(object.unsafeMode) ? globalThis.Boolean(object.unsafeMode) : false,
    };
  },

  toJSON(message: UtteranceSynthesisRequest): unknown {
    const obj: any = {};
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.text !== undefined) {
      obj.text = message.text;
    }
    if (message.textTemplate !== undefined) {
      obj.textTemplate = TextTemplate.toJSON(message.textTemplate);
    }
    if (message.hints?.length) {
      obj.hints = message.hints.map((e) => Hints.toJSON(e));
    }
    if (message.outputAudioSpec !== undefined) {
      obj.outputAudioSpec = AudioFormatOptions.toJSON(message.outputAudioSpec);
    }
    if (message.loudnessNormalizationType !== 0) {
      obj.loudnessNormalizationType = utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(
        message.loudnessNormalizationType,
      );
    }
    if (message.unsafeMode === true) {
      obj.unsafeMode = message.unsafeMode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UtteranceSynthesisRequest>, I>>(base?: I): UtteranceSynthesisRequest {
    return UtteranceSynthesisRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UtteranceSynthesisRequest>, I>>(object: I): UtteranceSynthesisRequest {
    const message = createBaseUtteranceSynthesisRequest();
    message.model = object.model ?? "";
    message.text = object.text ?? undefined;
    message.textTemplate = (object.textTemplate !== undefined && object.textTemplate !== null)
      ? TextTemplate.fromPartial(object.textTemplate)
      : undefined;
    message.hints = object.hints?.map((e) => Hints.fromPartial(e)) || [];
    message.outputAudioSpec = (object.outputAudioSpec !== undefined && object.outputAudioSpec !== null)
      ? AudioFormatOptions.fromPartial(object.outputAudioSpec)
      : undefined;
    message.loudnessNormalizationType = object.loudnessNormalizationType ?? 0;
    message.unsafeMode = object.unsafeMode ?? false;
    return message;
  },
};

messageTypeRegistry.set(UtteranceSynthesisRequest.$type, UtteranceSynthesisRequest);

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
