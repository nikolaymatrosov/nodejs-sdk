/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "speechkit.stt.v3";

export enum CodeType {
  CODE_TYPE_UNSPECIFIED = 0,
  /** WORKING - all good */
  WORKING = 1,
  /** WARNING - for example, if speech is sent not in real time. or unknown context (and we've made fallback). */
  WARNING = 2,
  /** CLOSED - after session was closed. */
  CLOSED = 3,
  UNRECOGNIZED = -1,
}

export function codeTypeFromJSON(object: any): CodeType {
  switch (object) {
    case 0:
    case "CODE_TYPE_UNSPECIFIED":
      return CodeType.CODE_TYPE_UNSPECIFIED;
    case 1:
    case "WORKING":
      return CodeType.WORKING;
    case 2:
    case "WARNING":
      return CodeType.WARNING;
    case 3:
    case "CLOSED":
      return CodeType.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CodeType.UNRECOGNIZED;
  }
}

export function codeTypeToJSON(object: CodeType): string {
  switch (object) {
    case CodeType.CODE_TYPE_UNSPECIFIED:
      return "CODE_TYPE_UNSPECIFIED";
    case CodeType.WORKING:
      return "WORKING";
    case CodeType.WARNING:
      return "WARNING";
    case CodeType.CLOSED:
      return "CLOSED";
    case CodeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Options */
export interface TextNormalizationOptions {
  $type: "speechkit.stt.v3.TextNormalizationOptions";
  textNormalization: TextNormalizationOptions_TextNormalization;
  /** Profanity filter (default: false). */
  profanityFilter: boolean;
  /** Rewrite text in literature style (default: false). */
  literatureText: boolean;
  /** Define phone formatting mode */
  phoneFormattingMode: TextNormalizationOptions_PhoneFormattingMode;
}

/** Normalization */
export enum TextNormalizationOptions_TextNormalization {
  TEXT_NORMALIZATION_UNSPECIFIED = 0,
  /** TEXT_NORMALIZATION_ENABLED - Enable normalization */
  TEXT_NORMALIZATION_ENABLED = 1,
  /** TEXT_NORMALIZATION_DISABLED - Disable normalization */
  TEXT_NORMALIZATION_DISABLED = 2,
  UNRECOGNIZED = -1,
}

export function textNormalizationOptions_TextNormalizationFromJSON(
  object: any,
): TextNormalizationOptions_TextNormalization {
  switch (object) {
    case 0:
    case "TEXT_NORMALIZATION_UNSPECIFIED":
      return TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_UNSPECIFIED;
    case 1:
    case "TEXT_NORMALIZATION_ENABLED":
      return TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_ENABLED;
    case 2:
    case "TEXT_NORMALIZATION_DISABLED":
      return TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TextNormalizationOptions_TextNormalization.UNRECOGNIZED;
  }
}

export function textNormalizationOptions_TextNormalizationToJSON(
  object: TextNormalizationOptions_TextNormalization,
): string {
  switch (object) {
    case TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_UNSPECIFIED:
      return "TEXT_NORMALIZATION_UNSPECIFIED";
    case TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_ENABLED:
      return "TEXT_NORMALIZATION_ENABLED";
    case TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_DISABLED:
      return "TEXT_NORMALIZATION_DISABLED";
    case TextNormalizationOptions_TextNormalization.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TextNormalizationOptions_PhoneFormattingMode {
  PHONE_FORMATTING_MODE_UNSPECIFIED = 0,
  /** PHONE_FORMATTING_MODE_DISABLED - Disable phone formatting */
  PHONE_FORMATTING_MODE_DISABLED = 1,
  UNRECOGNIZED = -1,
}

export function textNormalizationOptions_PhoneFormattingModeFromJSON(
  object: any,
): TextNormalizationOptions_PhoneFormattingMode {
  switch (object) {
    case 0:
    case "PHONE_FORMATTING_MODE_UNSPECIFIED":
      return TextNormalizationOptions_PhoneFormattingMode.PHONE_FORMATTING_MODE_UNSPECIFIED;
    case 1:
    case "PHONE_FORMATTING_MODE_DISABLED":
      return TextNormalizationOptions_PhoneFormattingMode.PHONE_FORMATTING_MODE_DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TextNormalizationOptions_PhoneFormattingMode.UNRECOGNIZED;
  }
}

export function textNormalizationOptions_PhoneFormattingModeToJSON(
  object: TextNormalizationOptions_PhoneFormattingMode,
): string {
  switch (object) {
    case TextNormalizationOptions_PhoneFormattingMode.PHONE_FORMATTING_MODE_UNSPECIFIED:
      return "PHONE_FORMATTING_MODE_UNSPECIFIED";
    case TextNormalizationOptions_PhoneFormattingMode.PHONE_FORMATTING_MODE_DISABLED:
      return "PHONE_FORMATTING_MODE_DISABLED";
    case TextNormalizationOptions_PhoneFormattingMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefaultEouClassifier {
  $type: "speechkit.stt.v3.DefaultEouClassifier";
  /** EOU sensitivity. Currently two levels, faster with more error and more conservative (our default). */
  type: DefaultEouClassifier_EouSensitivity;
  /** Hint for max pause between words. Our EOU detector could use this information to distinguish between end of utterance and slow speech (like one <long pause> two <long pause> three, etc). */
  maxPauseBetweenWordsHintMs: number;
}

export enum DefaultEouClassifier_EouSensitivity {
  EOU_SENSITIVITY_UNSPECIFIED = 0,
  DEFAULT = 1,
  HIGH = 2,
  UNRECOGNIZED = -1,
}

export function defaultEouClassifier_EouSensitivityFromJSON(object: any): DefaultEouClassifier_EouSensitivity {
  switch (object) {
    case 0:
    case "EOU_SENSITIVITY_UNSPECIFIED":
      return DefaultEouClassifier_EouSensitivity.EOU_SENSITIVITY_UNSPECIFIED;
    case 1:
    case "DEFAULT":
      return DefaultEouClassifier_EouSensitivity.DEFAULT;
    case 2:
    case "HIGH":
      return DefaultEouClassifier_EouSensitivity.HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefaultEouClassifier_EouSensitivity.UNRECOGNIZED;
  }
}

export function defaultEouClassifier_EouSensitivityToJSON(object: DefaultEouClassifier_EouSensitivity): string {
  switch (object) {
    case DefaultEouClassifier_EouSensitivity.EOU_SENSITIVITY_UNSPECIFIED:
      return "EOU_SENSITIVITY_UNSPECIFIED";
    case DefaultEouClassifier_EouSensitivity.DEFAULT:
      return "DEFAULT";
    case DefaultEouClassifier_EouSensitivity.HIGH:
      return "HIGH";
    case DefaultEouClassifier_EouSensitivity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Use EOU provided by user */
export interface ExternalEouClassifier {
  $type: "speechkit.stt.v3.ExternalEouClassifier";
}

export interface EouClassifierOptions {
  $type: "speechkit.stt.v3.EouClassifierOptions";
  /** EOU classifier provided by SpeechKit. Default. */
  defaultClassifier?:
    | DefaultEouClassifier
    | undefined;
  /** EOU is enforced by external messages from user. */
  externalClassifier?: ExternalEouClassifier | undefined;
}

export interface RecognitionClassifier {
  $type: "speechkit.stt.v3.RecognitionClassifier";
  /** Classifier name */
  classifier: string;
  /** Describes the types of responses to which the classification results will come */
  triggers: RecognitionClassifier_TriggerType[];
}

export enum RecognitionClassifier_TriggerType {
  /** TRIGGER_TYPE_UNSPECIFIED - Do not use */
  TRIGGER_TYPE_UNSPECIFIED = 0,
  /** ON_UTTERANCE - Apply classifier to utterance responses */
  ON_UTTERANCE = 1,
  /** ON_FINAL - Apply classifier to final responses */
  ON_FINAL = 2,
  UNRECOGNIZED = -1,
}

export function recognitionClassifier_TriggerTypeFromJSON(object: any): RecognitionClassifier_TriggerType {
  switch (object) {
    case 0:
    case "TRIGGER_TYPE_UNSPECIFIED":
      return RecognitionClassifier_TriggerType.TRIGGER_TYPE_UNSPECIFIED;
    case 1:
    case "ON_UTTERANCE":
      return RecognitionClassifier_TriggerType.ON_UTTERANCE;
    case 2:
    case "ON_FINAL":
      return RecognitionClassifier_TriggerType.ON_FINAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecognitionClassifier_TriggerType.UNRECOGNIZED;
  }
}

export function recognitionClassifier_TriggerTypeToJSON(object: RecognitionClassifier_TriggerType): string {
  switch (object) {
    case RecognitionClassifier_TriggerType.TRIGGER_TYPE_UNSPECIFIED:
      return "TRIGGER_TYPE_UNSPECIFIED";
    case RecognitionClassifier_TriggerType.ON_UTTERANCE:
      return "ON_UTTERANCE";
    case RecognitionClassifier_TriggerType.ON_FINAL:
      return "ON_FINAL";
    case RecognitionClassifier_TriggerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RecognitionClassifierOptions {
  $type: "speechkit.stt.v3.RecognitionClassifierOptions";
  /** List of classifiers to use */
  classifiers: RecognitionClassifier[];
}

export interface SpeechAnalysisOptions {
  $type: "speechkit.stt.v3.SpeechAnalysisOptions";
  /** Analyse speech for every speaker */
  enableSpeakerAnalysis: boolean;
  /** Analyse conversation of two speakers */
  enableConversationAnalysis: boolean;
  /** Quantile levels in range (0, 1) for descriptive statistics */
  descriptiveStatisticsQuantiles: number[];
}

/** RAW Audio format spec (no container to infer type). Used in AudioFormat options. */
export interface RawAudio {
  $type: "speechkit.stt.v3.RawAudio";
  /** Type of audio encoding */
  audioEncoding: RawAudio_AudioEncoding;
  /** PCM sample rate */
  sampleRateHertz: number;
  /** PCM channel count. Currently only single channel audio is supported in real-time recognition. */
  audioChannelCount: number;
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

/** Audio with fixed type in container. Used in AudioFormat options. */
export interface ContainerAudio {
  $type: "speechkit.stt.v3.ContainerAudio";
  /** Type of audio container. */
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

/** Audio format options. */
export interface AudioFormatOptions {
  $type: "speechkit.stt.v3.AudioFormatOptions";
  /** Audio without container. */
  rawAudio?:
    | RawAudio
    | undefined;
  /** Audio is wrapped in container. */
  containerAudio?: ContainerAudio | undefined;
}

/** Type of restriction for the list of languages expected in the incoming speech stream. */
export interface LanguageRestrictionOptions {
  $type: "speechkit.stt.v3.LanguageRestrictionOptions";
  /** Language restriction type */
  restrictionType: LanguageRestrictionOptions_LanguageRestrictionType;
  /** The list of language codes to restrict recognition in the case of an auto model */
  languageCode: string[];
}

export enum LanguageRestrictionOptions_LanguageRestrictionType {
  LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED = 0,
  /** WHITELIST - The allowing list. The incoming audio can contain only the listed languages. */
  WHITELIST = 1,
  /** BLACKLIST - The forbidding list. The incoming audio cannot contain the listed languages. */
  BLACKLIST = 2,
  UNRECOGNIZED = -1,
}

export function languageRestrictionOptions_LanguageRestrictionTypeFromJSON(
  object: any,
): LanguageRestrictionOptions_LanguageRestrictionType {
  switch (object) {
    case 0:
    case "LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED":
      return LanguageRestrictionOptions_LanguageRestrictionType.LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED;
    case 1:
    case "WHITELIST":
      return LanguageRestrictionOptions_LanguageRestrictionType.WHITELIST;
    case 2:
    case "BLACKLIST":
      return LanguageRestrictionOptions_LanguageRestrictionType.BLACKLIST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LanguageRestrictionOptions_LanguageRestrictionType.UNRECOGNIZED;
  }
}

export function languageRestrictionOptions_LanguageRestrictionTypeToJSON(
  object: LanguageRestrictionOptions_LanguageRestrictionType,
): string {
  switch (object) {
    case LanguageRestrictionOptions_LanguageRestrictionType.LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED:
      return "LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED";
    case LanguageRestrictionOptions_LanguageRestrictionType.WHITELIST:
      return "WHITELIST";
    case LanguageRestrictionOptions_LanguageRestrictionType.BLACKLIST:
      return "BLACKLIST";
    case LanguageRestrictionOptions_LanguageRestrictionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RecognitionModelOptions {
  $type: "speechkit.stt.v3.RecognitionModelOptions";
  /**
   * Sets the recognition model for the cloud version of SpeechKit. Possible values: 'general', 'general:rc', 'general:deprecated'.
   * The model is ignored for SpeechKit Hybrid.
   */
  model: string;
  /** Specified input audio. */
  audioFormat?:
    | AudioFormatOptions
    | undefined;
  /** Text normalization options. */
  textNormalization?:
    | TextNormalizationOptions
    | undefined;
  /** Possible languages in audio. */
  languageRestriction?:
    | LanguageRestrictionOptions
    | undefined;
  /** How to deal with audio data (in real time, after all data is received, etc). Default is REAL_TIME. */
  audioProcessingType: RecognitionModelOptions_AudioProcessingType;
}

export enum RecognitionModelOptions_AudioProcessingType {
  AUDIO_PROCESSING_TYPE_UNSPECIFIED = 0,
  /** REAL_TIME - Process audio in mode optimized for real-time recognition, i.e. send partials and final responses as soon as possible */
  REAL_TIME = 1,
  /** FULL_DATA - Process audio after all data was received */
  FULL_DATA = 2,
  UNRECOGNIZED = -1,
}

export function recognitionModelOptions_AudioProcessingTypeFromJSON(
  object: any,
): RecognitionModelOptions_AudioProcessingType {
  switch (object) {
    case 0:
    case "AUDIO_PROCESSING_TYPE_UNSPECIFIED":
      return RecognitionModelOptions_AudioProcessingType.AUDIO_PROCESSING_TYPE_UNSPECIFIED;
    case 1:
    case "REAL_TIME":
      return RecognitionModelOptions_AudioProcessingType.REAL_TIME;
    case 2:
    case "FULL_DATA":
      return RecognitionModelOptions_AudioProcessingType.FULL_DATA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecognitionModelOptions_AudioProcessingType.UNRECOGNIZED;
  }
}

export function recognitionModelOptions_AudioProcessingTypeToJSON(
  object: RecognitionModelOptions_AudioProcessingType,
): string {
  switch (object) {
    case RecognitionModelOptions_AudioProcessingType.AUDIO_PROCESSING_TYPE_UNSPECIFIED:
      return "AUDIO_PROCESSING_TYPE_UNSPECIFIED";
    case RecognitionModelOptions_AudioProcessingType.REAL_TIME:
      return "REAL_TIME";
    case RecognitionModelOptions_AudioProcessingType.FULL_DATA:
      return "FULL_DATA";
    case RecognitionModelOptions_AudioProcessingType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface StreamingOptions {
  $type: "speechkit.stt.v3.StreamingOptions";
  /** Configuration for speech recognition model. */
  recognitionModel?:
    | RecognitionModelOptions
    | undefined;
  /** Configuration for end of utterance detection model. */
  eouClassifier?:
    | EouClassifierOptions
    | undefined;
  /** Configuration for classifiers over speech recognition. */
  recognitionClassifier?:
    | RecognitionClassifierOptions
    | undefined;
  /** Configuration for speech analysis over speech recognition. */
  speechAnalysis?: SpeechAnalysisOptions | undefined;
}

/** Data chunk with audio. */
export interface AudioChunk {
  $type: "speechkit.stt.v3.AudioChunk";
  /** Bytes with audio data. */
  data: Buffer;
}

/** Data chunk with silence. */
export interface SilenceChunk {
  $type: "speechkit.stt.v3.SilenceChunk";
  /** Duration of silence chunk in ms. */
  durationMs: number;
}

/** Force EOU */
export interface Eou {
  $type: "speechkit.stt.v3.Eou";
}

/**
 * Streaming audio request
 * Events are control messages from user.
 * First message should be session options.
 * The next messages are audio data chunks or control messages.
 */
export interface StreamingRequest {
  $type: "speechkit.stt.v3.StreamingRequest";
  /** Session options. Should be the first message from user. */
  sessionOptions?:
    | StreamingOptions
    | undefined;
  /** Chunk with audio data. */
  chunk?:
    | AudioChunk
    | undefined;
  /** Chunk with silence. */
  silenceChunk?:
    | SilenceChunk
    | undefined;
  /** Request to end current utterance. Works only with external EOU detector. */
  eou?: Eou | undefined;
}

export interface RecognizeFileRequest {
  $type: "speechkit.stt.v3.RecognizeFileRequest";
  /** Bytes with data */
  content?:
    | Buffer
    | undefined;
  /** S3 data url */
  uri?:
    | string
    | undefined;
  /** Configuration for speech recognition model. */
  recognitionModel?:
    | RecognitionModelOptions
    | undefined;
  /** Configuration for classifiers over speech recognition. */
  recognitionClassifier?:
    | RecognitionClassifierOptions
    | undefined;
  /** Configuration for speech analysis over speech recognition. */
  speechAnalysis?: SpeechAnalysisOptions | undefined;
}

/** Recognized word. */
export interface Word {
  $type: "speechkit.stt.v3.Word";
  /** Word text. */
  text: string;
  /** Estimation of word start time in ms. */
  startTimeMs: number;
  /** Estimation of word end time in ms. */
  endTimeMs: number;
}

/** Estimation of language and its probability. */
export interface LanguageEstimation {
  $type: "speechkit.stt.v3.LanguageEstimation";
  /** Language code in ISO 639-1 format. */
  languageCode: string;
  /** Estimation of language probability. */
  probability: number;
}

/** Recognition of specific time frame. */
export interface Alternative {
  $type: "speechkit.stt.v3.Alternative";
  /** Words in time frame. */
  words: Word[];
  /** Text in time frame. */
  text: string;
  /** Start of time frame. */
  startTimeMs: number;
  /** End of time frame. */
  endTimeMs: number;
  /** The hypothesis confidence. Currently is not used. */
  confidence: number;
  /** Distribution over possible languages. */
  languages: LanguageEstimation[];
}

/** Update information for external End of Utterance. */
export interface EouUpdate {
  $type: "speechkit.stt.v3.EouUpdate";
  /** EOU estimated time. */
  timeMs: number;
}

/** Update of hypothesis. */
export interface AlternativeUpdate {
  $type: "speechkit.stt.v3.AlternativeUpdate";
  /** List of hypothesis for timeframes. */
  alternatives: Alternative[];
  /** @deprecated */
  channelTag: string;
}

/** AudioCursors are state of ASR recognition stream. */
export interface AudioCursors {
  $type: "speechkit.stt.v3.AudioCursors";
  /** Amount of audio chunks server received. This cursor is moved after each audio chunk was received by server. */
  receivedDataMs: number;
  /** Input stream reset data. */
  resetTimeMs: number;
  /**
   * How much audio was processed. This time includes trimming silences as well. This cursor is moved after server received enough data
   * to update recognition results (includes silence as well).
   */
  partialTimeMs: number;
  /**
   * Time of last final. This cursor is moved when server decides that recognition from start of audio until final_time_ms will not change anymore
   * usually this even is followed by EOU detection (but this could change in future).
   */
  finalTimeMs: number;
  /** This is index of last final server send. Incremented after each new final. */
  finalIndex: number;
  /**
   * Estimated time of EOU. Cursor is updated after each new EOU is sent.
   * For external classifier this equals to received_data_ms at the moment EOU event arrives.
   * For internal classifier this is estimation of time. The time is not exact and has the same guarantees as word timings.
   */
  eouTimeMs: number;
}

/** Refinement for final hypo. For example, text normalization is refinement. */
export interface FinalRefinement {
  $type: "speechkit.stt.v3.FinalRefinement";
  /** Index of final for which server sends additional information. */
  finalIndex: number;
  /** Normalized text instead of raw one. */
  normalizedText?: AlternativeUpdate | undefined;
}

/** Status message */
export interface StatusCode {
  $type: "speechkit.stt.v3.StatusCode";
  /** Code type. */
  codeType: CodeType;
  /** Human readable message. */
  message: string;
}

/** Session identifier. */
export interface SessionUuid {
  $type: "speechkit.stt.v3.SessionUuid";
  /** Internal session identifier. */
  uuid: string;
  /** User session identifier. */
  userRequestId: string;
}

export interface PhraseHighlight {
  $type: "speechkit.stt.v3.PhraseHighlight";
  /** Text transcription of the highlighted audio segment */
  text: string;
  /** Start time of the highlighted audio segment */
  startTimeMs: number;
  /** End time of the highlighted audio segment */
  endTimeMs: number;
}

export interface RecognitionClassifierLabel {
  $type: "speechkit.stt.v3.RecognitionClassifierLabel";
  /** The label of the class predicted by the classifier */
  label: string;
  /** The prediction confidence */
  confidence: number;
}

export interface RecognitionClassifierResult {
  $type: "speechkit.stt.v3.RecognitionClassifierResult";
  /** Name of the triggered classifier */
  classifier: string;
  /** List of highlights, i.e. parts of phrase that determine the result of the classification */
  highlights: PhraseHighlight[];
  /** Classifier predictions */
  labels: RecognitionClassifierLabel[];
}

export interface RecognitionClassifierUpdate {
  $type: "speechkit.stt.v3.RecognitionClassifierUpdate";
  /** Response window type */
  windowType: RecognitionClassifierUpdate_WindowType;
  /** Start time of the audio segment used for classification */
  startTimeMs: number;
  /** End time of the audio segment used for classification */
  endTimeMs: number;
  /** Result for dictionary-based classifier */
  classifierResult?: RecognitionClassifierResult | undefined;
}

export enum RecognitionClassifierUpdate_WindowType {
  /** WINDOW_TYPE_UNSPECIFIED - Never used */
  WINDOW_TYPE_UNSPECIFIED = 0,
  /** LAST_UTTERANCE - The result of applying the classifier to the last utterance response */
  LAST_UTTERANCE = 1,
  /** LAST_FINAL - The result of applying the classifier to the last final response */
  LAST_FINAL = 2,
  UNRECOGNIZED = -1,
}

export function recognitionClassifierUpdate_WindowTypeFromJSON(object: any): RecognitionClassifierUpdate_WindowType {
  switch (object) {
    case 0:
    case "WINDOW_TYPE_UNSPECIFIED":
      return RecognitionClassifierUpdate_WindowType.WINDOW_TYPE_UNSPECIFIED;
    case 1:
    case "LAST_UTTERANCE":
      return RecognitionClassifierUpdate_WindowType.LAST_UTTERANCE;
    case 2:
    case "LAST_FINAL":
      return RecognitionClassifierUpdate_WindowType.LAST_FINAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecognitionClassifierUpdate_WindowType.UNRECOGNIZED;
  }
}

export function recognitionClassifierUpdate_WindowTypeToJSON(object: RecognitionClassifierUpdate_WindowType): string {
  switch (object) {
    case RecognitionClassifierUpdate_WindowType.WINDOW_TYPE_UNSPECIFIED:
      return "WINDOW_TYPE_UNSPECIFIED";
    case RecognitionClassifierUpdate_WindowType.LAST_UTTERANCE:
      return "LAST_UTTERANCE";
    case RecognitionClassifierUpdate_WindowType.LAST_FINAL:
      return "LAST_FINAL";
    case RecognitionClassifierUpdate_WindowType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DescriptiveStatistics {
  $type: "speechkit.stt.v3.DescriptiveStatistics";
  /** Minimum observed value */
  min: number;
  /** Maximum observed value */
  max: number;
  /** Estimated mean of distribution */
  mean: number;
  /** Estimated standard deviation of distribution */
  std: number;
  /** List of evaluated quantiles */
  quantiles: DescriptiveStatistics_Quantile[];
}

export interface DescriptiveStatistics_Quantile {
  $type: "speechkit.stt.v3.DescriptiveStatistics.Quantile";
  /** Quantile level in range (0, 1) */
  level: number;
  /** Quantile value */
  value: number;
}

export interface AudioSegmentBoundaries {
  $type: "speechkit.stt.v3.AudioSegmentBoundaries";
  /** Audio segment start time */
  startTimeMs: number;
  /** Audio segment end time */
  endTimeMs: number;
}

export interface SpeakerAnalysis {
  $type: "speechkit.stt.v3.SpeakerAnalysis";
  /** Speaker tag */
  speakerTag: string;
  /** Response window type */
  windowType: SpeakerAnalysis_WindowType;
  /** Audio segment boundaries */
  speechBoundaries?:
    | AudioSegmentBoundaries
    | undefined;
  /** Total speech duration */
  totalSpeechMs: number;
  /** Speech ratio within audio segment */
  speechRatio: number;
  /** Total silence duration */
  totalSilenceMs: number;
  /** Silence ratio within audio segment */
  silenceRatio: number;
  /** Number of words in recognized speech */
  wordsCount: number;
  /** Number of letters in recognized speech */
  lettersCount: number;
  /** Descriptive statistics for words per second distribution */
  wordsPerSecond?:
    | DescriptiveStatistics
    | undefined;
  /** Descriptive statistics for letters per second distribution */
  lettersPerSecond?:
    | DescriptiveStatistics
    | undefined;
  /** Descriptive statistics for words per utterance distribution */
  wordsPerUtterance?:
    | DescriptiveStatistics
    | undefined;
  /** Descriptive statistics for letters per utterance distribution */
  lettersPerUtterance?:
    | DescriptiveStatistics
    | undefined;
  /** Number of utterances */
  utteranceCount: number;
  /** Descriptive statistics for utterance duration distribution */
  utteranceDurationEstimation?: DescriptiveStatistics | undefined;
}

export enum SpeakerAnalysis_WindowType {
  WINDOW_TYPE_UNSPECIFIED = 0,
  /** TOTAL - Stats for all received audio */
  TOTAL = 1,
  /** LAST_UTTERANCE - Stats for last utterance */
  LAST_UTTERANCE = 2,
  UNRECOGNIZED = -1,
}

export function speakerAnalysis_WindowTypeFromJSON(object: any): SpeakerAnalysis_WindowType {
  switch (object) {
    case 0:
    case "WINDOW_TYPE_UNSPECIFIED":
      return SpeakerAnalysis_WindowType.WINDOW_TYPE_UNSPECIFIED;
    case 1:
    case "TOTAL":
      return SpeakerAnalysis_WindowType.TOTAL;
    case 2:
    case "LAST_UTTERANCE":
      return SpeakerAnalysis_WindowType.LAST_UTTERANCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SpeakerAnalysis_WindowType.UNRECOGNIZED;
  }
}

export function speakerAnalysis_WindowTypeToJSON(object: SpeakerAnalysis_WindowType): string {
  switch (object) {
    case SpeakerAnalysis_WindowType.WINDOW_TYPE_UNSPECIFIED:
      return "WINDOW_TYPE_UNSPECIFIED";
    case SpeakerAnalysis_WindowType.TOTAL:
      return "TOTAL";
    case SpeakerAnalysis_WindowType.LAST_UTTERANCE:
      return "LAST_UTTERANCE";
    case SpeakerAnalysis_WindowType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ConversationAnalysis {
  $type: "speechkit.stt.v3.ConversationAnalysis";
  /** Audio segment boundaries */
  conversationBoundaries?:
    | AudioSegmentBoundaries
    | undefined;
  /** Total simultaneous silence duration */
  totalSimultaneousSilenceDurationMs: number;
  /** Simultaneous silence ratio within audio segment */
  totalSimultaneousSilenceRatio: number;
  /** Descriptive statistics for simultaneous silence duration distribution */
  simultaneousSilenceDurationEstimation?:
    | DescriptiveStatistics
    | undefined;
  /** Total simultaneous speech duration */
  totalSimultaneousSpeechDurationMs: number;
  /** Simultaneous speech ratio within audio segment */
  totalSimultaneousSpeechRatio: number;
  /** Descriptive statistics for simultaneous speech duration distribution */
  simultaneousSpeechDurationEstimation?:
    | DescriptiveStatistics
    | undefined;
  /** Interrupts description for every speaker */
  speakerInterrupts: ConversationAnalysis_InterruptsEvaluation[];
}

export interface ConversationAnalysis_InterruptsEvaluation {
  $type: "speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation";
  /** Speaker tag */
  speakerTag: string;
  /** Number of interrupts made by the speaker */
  interruptsCount: number;
  /** Total duration of all interrupts */
  interruptsDurationMs: number;
  /** Boundaries for every interrupt */
  interrupts: AudioSegmentBoundaries[];
}

/**
 * Responses from server.
 * Each response contains session uuid
 * AudioCursors
 * plus specific event
 */
export interface StreamingResponse {
  $type: "speechkit.stt.v3.StreamingResponse";
  /** Session identifier */
  sessionUuid?:
    | SessionUuid
    | undefined;
  /** Progress bar for stream session recognition: how many data we obtained; final and partial times; etc. */
  audioCursors?:
    | AudioCursors
    | undefined;
  /** Wall clock on server side. This is time when server wrote results to stream */
  responseWallTimeMs: number;
  /**
   * Partial results, server will send them regularly after enough audio data was received from user. This are current text estimation
   * from final_time_ms to partial_time_ms. Could change after new data will arrive.
   */
  partial?:
    | AlternativeUpdate
    | undefined;
  /** Final results, the recognition is now fixed until final_time_ms. For now, final is sent only if the EOU event was triggered. This could be change in future releases. */
  final?:
    | AlternativeUpdate
    | undefined;
  /**
   * After EOU classifier, send the message with final, send the EouUpdate with time of EOU
   * before eou_update we send final with the same time. there could be several finals before eou update.
   */
  eouUpdate?:
    | EouUpdate
    | undefined;
  /**
   * For each final, if normalization is enabled, sent the normalized text (or some other advanced post-processing).
   * Final normalization will introduce additional latency.
   */
  finalRefinement?:
    | FinalRefinement
    | undefined;
  /** Status messages, send by server with fixed interval (keep-alive). */
  statusCode?:
    | StatusCode
    | undefined;
  /** Result of the triggered classifier */
  classifierUpdate?:
    | RecognitionClassifierUpdate
    | undefined;
  /** Speech statistics for every speaker */
  speakerAnalysis?:
    | SpeakerAnalysis
    | undefined;
  /** Conversation statistics */
  conversationAnalysis?:
    | ConversationAnalysis
    | undefined;
  /** Tag for distinguish audio channels. */
  channelTag: string;
}

function createBaseTextNormalizationOptions(): TextNormalizationOptions {
  return {
    $type: "speechkit.stt.v3.TextNormalizationOptions",
    textNormalization: 0,
    profanityFilter: false,
    literatureText: false,
    phoneFormattingMode: 0,
  };
}

export const TextNormalizationOptions = {
  $type: "speechkit.stt.v3.TextNormalizationOptions" as const,

  encode(message: TextNormalizationOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.textNormalization !== 0) {
      writer.uint32(8).int32(message.textNormalization);
    }
    if (message.profanityFilter === true) {
      writer.uint32(16).bool(message.profanityFilter);
    }
    if (message.literatureText === true) {
      writer.uint32(24).bool(message.literatureText);
    }
    if (message.phoneFormattingMode !== 0) {
      writer.uint32(32).int32(message.phoneFormattingMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextNormalizationOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextNormalizationOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.textNormalization = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.profanityFilter = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.literatureText = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.phoneFormattingMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextNormalizationOptions {
    return {
      $type: TextNormalizationOptions.$type,
      textNormalization: isSet(object.textNormalization)
        ? textNormalizationOptions_TextNormalizationFromJSON(object.textNormalization)
        : 0,
      profanityFilter: isSet(object.profanityFilter) ? globalThis.Boolean(object.profanityFilter) : false,
      literatureText: isSet(object.literatureText) ? globalThis.Boolean(object.literatureText) : false,
      phoneFormattingMode: isSet(object.phoneFormattingMode)
        ? textNormalizationOptions_PhoneFormattingModeFromJSON(object.phoneFormattingMode)
        : 0,
    };
  },

  toJSON(message: TextNormalizationOptions): unknown {
    const obj: any = {};
    if (message.textNormalization !== 0) {
      obj.textNormalization = textNormalizationOptions_TextNormalizationToJSON(message.textNormalization);
    }
    if (message.profanityFilter === true) {
      obj.profanityFilter = message.profanityFilter;
    }
    if (message.literatureText === true) {
      obj.literatureText = message.literatureText;
    }
    if (message.phoneFormattingMode !== 0) {
      obj.phoneFormattingMode = textNormalizationOptions_PhoneFormattingModeToJSON(message.phoneFormattingMode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextNormalizationOptions>, I>>(base?: I): TextNormalizationOptions {
    return TextNormalizationOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextNormalizationOptions>, I>>(object: I): TextNormalizationOptions {
    const message = createBaseTextNormalizationOptions();
    message.textNormalization = object.textNormalization ?? 0;
    message.profanityFilter = object.profanityFilter ?? false;
    message.literatureText = object.literatureText ?? false;
    message.phoneFormattingMode = object.phoneFormattingMode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(TextNormalizationOptions.$type, TextNormalizationOptions);

function createBaseDefaultEouClassifier(): DefaultEouClassifier {
  return { $type: "speechkit.stt.v3.DefaultEouClassifier", type: 0, maxPauseBetweenWordsHintMs: 0 };
}

export const DefaultEouClassifier = {
  $type: "speechkit.stt.v3.DefaultEouClassifier" as const,

  encode(message: DefaultEouClassifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.maxPauseBetweenWordsHintMs !== 0) {
      writer.uint32(16).int64(message.maxPauseBetweenWordsHintMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultEouClassifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultEouClassifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxPauseBetweenWordsHintMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DefaultEouClassifier {
    return {
      $type: DefaultEouClassifier.$type,
      type: isSet(object.type) ? defaultEouClassifier_EouSensitivityFromJSON(object.type) : 0,
      maxPauseBetweenWordsHintMs: isSet(object.maxPauseBetweenWordsHintMs)
        ? globalThis.Number(object.maxPauseBetweenWordsHintMs)
        : 0,
    };
  },

  toJSON(message: DefaultEouClassifier): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = defaultEouClassifier_EouSensitivityToJSON(message.type);
    }
    if (message.maxPauseBetweenWordsHintMs !== 0) {
      obj.maxPauseBetweenWordsHintMs = Math.round(message.maxPauseBetweenWordsHintMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DefaultEouClassifier>, I>>(base?: I): DefaultEouClassifier {
    return DefaultEouClassifier.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefaultEouClassifier>, I>>(object: I): DefaultEouClassifier {
    const message = createBaseDefaultEouClassifier();
    message.type = object.type ?? 0;
    message.maxPauseBetweenWordsHintMs = object.maxPauseBetweenWordsHintMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DefaultEouClassifier.$type, DefaultEouClassifier);

function createBaseExternalEouClassifier(): ExternalEouClassifier {
  return { $type: "speechkit.stt.v3.ExternalEouClassifier" };
}

export const ExternalEouClassifier = {
  $type: "speechkit.stt.v3.ExternalEouClassifier" as const,

  encode(_: ExternalEouClassifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalEouClassifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalEouClassifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ExternalEouClassifier {
    return { $type: ExternalEouClassifier.$type };
  },

  toJSON(_: ExternalEouClassifier): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalEouClassifier>, I>>(base?: I): ExternalEouClassifier {
    return ExternalEouClassifier.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalEouClassifier>, I>>(_: I): ExternalEouClassifier {
    const message = createBaseExternalEouClassifier();
    return message;
  },
};

messageTypeRegistry.set(ExternalEouClassifier.$type, ExternalEouClassifier);

function createBaseEouClassifierOptions(): EouClassifierOptions {
  return {
    $type: "speechkit.stt.v3.EouClassifierOptions",
    defaultClassifier: undefined,
    externalClassifier: undefined,
  };
}

export const EouClassifierOptions = {
  $type: "speechkit.stt.v3.EouClassifierOptions" as const,

  encode(message: EouClassifierOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultClassifier !== undefined) {
      DefaultEouClassifier.encode(message.defaultClassifier, writer.uint32(10).fork()).ldelim();
    }
    if (message.externalClassifier !== undefined) {
      ExternalEouClassifier.encode(message.externalClassifier, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EouClassifierOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEouClassifierOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultClassifier = DefaultEouClassifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.externalClassifier = ExternalEouClassifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EouClassifierOptions {
    return {
      $type: EouClassifierOptions.$type,
      defaultClassifier: isSet(object.defaultClassifier)
        ? DefaultEouClassifier.fromJSON(object.defaultClassifier)
        : undefined,
      externalClassifier: isSet(object.externalClassifier)
        ? ExternalEouClassifier.fromJSON(object.externalClassifier)
        : undefined,
    };
  },

  toJSON(message: EouClassifierOptions): unknown {
    const obj: any = {};
    if (message.defaultClassifier !== undefined) {
      obj.defaultClassifier = DefaultEouClassifier.toJSON(message.defaultClassifier);
    }
    if (message.externalClassifier !== undefined) {
      obj.externalClassifier = ExternalEouClassifier.toJSON(message.externalClassifier);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EouClassifierOptions>, I>>(base?: I): EouClassifierOptions {
    return EouClassifierOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EouClassifierOptions>, I>>(object: I): EouClassifierOptions {
    const message = createBaseEouClassifierOptions();
    message.defaultClassifier = (object.defaultClassifier !== undefined && object.defaultClassifier !== null)
      ? DefaultEouClassifier.fromPartial(object.defaultClassifier)
      : undefined;
    message.externalClassifier = (object.externalClassifier !== undefined && object.externalClassifier !== null)
      ? ExternalEouClassifier.fromPartial(object.externalClassifier)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(EouClassifierOptions.$type, EouClassifierOptions);

function createBaseRecognitionClassifier(): RecognitionClassifier {
  return { $type: "speechkit.stt.v3.RecognitionClassifier", classifier: "", triggers: [] };
}

export const RecognitionClassifier = {
  $type: "speechkit.stt.v3.RecognitionClassifier" as const,

  encode(message: RecognitionClassifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classifier !== "") {
      writer.uint32(10).string(message.classifier);
    }
    writer.uint32(18).fork();
    for (const v of message.triggers) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionClassifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognitionClassifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classifier = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.triggers.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.triggers.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecognitionClassifier {
    return {
      $type: RecognitionClassifier.$type,
      classifier: isSet(object.classifier) ? globalThis.String(object.classifier) : "",
      triggers: globalThis.Array.isArray(object?.triggers)
        ? object.triggers.map((e: any) => recognitionClassifier_TriggerTypeFromJSON(e))
        : [],
    };
  },

  toJSON(message: RecognitionClassifier): unknown {
    const obj: any = {};
    if (message.classifier !== "") {
      obj.classifier = message.classifier;
    }
    if (message.triggers?.length) {
      obj.triggers = message.triggers.map((e) => recognitionClassifier_TriggerTypeToJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognitionClassifier>, I>>(base?: I): RecognitionClassifier {
    return RecognitionClassifier.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognitionClassifier>, I>>(object: I): RecognitionClassifier {
    const message = createBaseRecognitionClassifier();
    message.classifier = object.classifier ?? "";
    message.triggers = object.triggers?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RecognitionClassifier.$type, RecognitionClassifier);

function createBaseRecognitionClassifierOptions(): RecognitionClassifierOptions {
  return { $type: "speechkit.stt.v3.RecognitionClassifierOptions", classifiers: [] };
}

export const RecognitionClassifierOptions = {
  $type: "speechkit.stt.v3.RecognitionClassifierOptions" as const,

  encode(message: RecognitionClassifierOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classifiers) {
      RecognitionClassifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionClassifierOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognitionClassifierOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classifiers.push(RecognitionClassifier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecognitionClassifierOptions {
    return {
      $type: RecognitionClassifierOptions.$type,
      classifiers: globalThis.Array.isArray(object?.classifiers)
        ? object.classifiers.map((e: any) => RecognitionClassifier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RecognitionClassifierOptions): unknown {
    const obj: any = {};
    if (message.classifiers?.length) {
      obj.classifiers = message.classifiers.map((e) => RecognitionClassifier.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognitionClassifierOptions>, I>>(base?: I): RecognitionClassifierOptions {
    return RecognitionClassifierOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognitionClassifierOptions>, I>>(object: I): RecognitionClassifierOptions {
    const message = createBaseRecognitionClassifierOptions();
    message.classifiers = object.classifiers?.map((e) => RecognitionClassifier.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RecognitionClassifierOptions.$type, RecognitionClassifierOptions);

function createBaseSpeechAnalysisOptions(): SpeechAnalysisOptions {
  return {
    $type: "speechkit.stt.v3.SpeechAnalysisOptions",
    enableSpeakerAnalysis: false,
    enableConversationAnalysis: false,
    descriptiveStatisticsQuantiles: [],
  };
}

export const SpeechAnalysisOptions = {
  $type: "speechkit.stt.v3.SpeechAnalysisOptions" as const,

  encode(message: SpeechAnalysisOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableSpeakerAnalysis === true) {
      writer.uint32(8).bool(message.enableSpeakerAnalysis);
    }
    if (message.enableConversationAnalysis === true) {
      writer.uint32(16).bool(message.enableConversationAnalysis);
    }
    writer.uint32(26).fork();
    for (const v of message.descriptiveStatisticsQuantiles) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeechAnalysisOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpeechAnalysisOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enableSpeakerAnalysis = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enableConversationAnalysis = reader.bool();
          continue;
        case 3:
          if (tag === 25) {
            message.descriptiveStatisticsQuantiles.push(reader.double());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.descriptiveStatisticsQuantiles.push(reader.double());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpeechAnalysisOptions {
    return {
      $type: SpeechAnalysisOptions.$type,
      enableSpeakerAnalysis: isSet(object.enableSpeakerAnalysis)
        ? globalThis.Boolean(object.enableSpeakerAnalysis)
        : false,
      enableConversationAnalysis: isSet(object.enableConversationAnalysis)
        ? globalThis.Boolean(object.enableConversationAnalysis)
        : false,
      descriptiveStatisticsQuantiles: globalThis.Array.isArray(object?.descriptiveStatisticsQuantiles)
        ? object.descriptiveStatisticsQuantiles.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: SpeechAnalysisOptions): unknown {
    const obj: any = {};
    if (message.enableSpeakerAnalysis === true) {
      obj.enableSpeakerAnalysis = message.enableSpeakerAnalysis;
    }
    if (message.enableConversationAnalysis === true) {
      obj.enableConversationAnalysis = message.enableConversationAnalysis;
    }
    if (message.descriptiveStatisticsQuantiles?.length) {
      obj.descriptiveStatisticsQuantiles = message.descriptiveStatisticsQuantiles;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SpeechAnalysisOptions>, I>>(base?: I): SpeechAnalysisOptions {
    return SpeechAnalysisOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SpeechAnalysisOptions>, I>>(object: I): SpeechAnalysisOptions {
    const message = createBaseSpeechAnalysisOptions();
    message.enableSpeakerAnalysis = object.enableSpeakerAnalysis ?? false;
    message.enableConversationAnalysis = object.enableConversationAnalysis ?? false;
    message.descriptiveStatisticsQuantiles = object.descriptiveStatisticsQuantiles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(SpeechAnalysisOptions.$type, SpeechAnalysisOptions);

function createBaseRawAudio(): RawAudio {
  return { $type: "speechkit.stt.v3.RawAudio", audioEncoding: 0, sampleRateHertz: 0, audioChannelCount: 0 };
}

export const RawAudio = {
  $type: "speechkit.stt.v3.RawAudio" as const,

  encode(message: RawAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audioEncoding !== 0) {
      writer.uint32(8).int32(message.audioEncoding);
    }
    if (message.sampleRateHertz !== 0) {
      writer.uint32(16).int64(message.sampleRateHertz);
    }
    if (message.audioChannelCount !== 0) {
      writer.uint32(24).int64(message.audioChannelCount);
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.audioChannelCount = longToNumber(reader.int64() as Long);
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
      audioChannelCount: isSet(object.audioChannelCount) ? globalThis.Number(object.audioChannelCount) : 0,
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
    if (message.audioChannelCount !== 0) {
      obj.audioChannelCount = Math.round(message.audioChannelCount);
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
    message.audioChannelCount = object.audioChannelCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RawAudio.$type, RawAudio);

function createBaseContainerAudio(): ContainerAudio {
  return { $type: "speechkit.stt.v3.ContainerAudio", containerAudioType: 0 };
}

export const ContainerAudio = {
  $type: "speechkit.stt.v3.ContainerAudio" as const,

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

function createBaseAudioFormatOptions(): AudioFormatOptions {
  return { $type: "speechkit.stt.v3.AudioFormatOptions", rawAudio: undefined, containerAudio: undefined };
}

export const AudioFormatOptions = {
  $type: "speechkit.stt.v3.AudioFormatOptions" as const,

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

function createBaseLanguageRestrictionOptions(): LanguageRestrictionOptions {
  return { $type: "speechkit.stt.v3.LanguageRestrictionOptions", restrictionType: 0, languageCode: [] };
}

export const LanguageRestrictionOptions = {
  $type: "speechkit.stt.v3.LanguageRestrictionOptions" as const,

  encode(message: LanguageRestrictionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.restrictionType !== 0) {
      writer.uint32(8).int32(message.restrictionType);
    }
    for (const v of message.languageCode) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LanguageRestrictionOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLanguageRestrictionOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.restrictionType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.languageCode.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LanguageRestrictionOptions {
    return {
      $type: LanguageRestrictionOptions.$type,
      restrictionType: isSet(object.restrictionType)
        ? languageRestrictionOptions_LanguageRestrictionTypeFromJSON(object.restrictionType)
        : 0,
      languageCode: globalThis.Array.isArray(object?.languageCode)
        ? object.languageCode.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: LanguageRestrictionOptions): unknown {
    const obj: any = {};
    if (message.restrictionType !== 0) {
      obj.restrictionType = languageRestrictionOptions_LanguageRestrictionTypeToJSON(message.restrictionType);
    }
    if (message.languageCode?.length) {
      obj.languageCode = message.languageCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LanguageRestrictionOptions>, I>>(base?: I): LanguageRestrictionOptions {
    return LanguageRestrictionOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LanguageRestrictionOptions>, I>>(object: I): LanguageRestrictionOptions {
    const message = createBaseLanguageRestrictionOptions();
    message.restrictionType = object.restrictionType ?? 0;
    message.languageCode = object.languageCode?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(LanguageRestrictionOptions.$type, LanguageRestrictionOptions);

function createBaseRecognitionModelOptions(): RecognitionModelOptions {
  return {
    $type: "speechkit.stt.v3.RecognitionModelOptions",
    model: "",
    audioFormat: undefined,
    textNormalization: undefined,
    languageRestriction: undefined,
    audioProcessingType: 0,
  };
}

export const RecognitionModelOptions = {
  $type: "speechkit.stt.v3.RecognitionModelOptions" as const,

  encode(message: RecognitionModelOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    if (message.audioFormat !== undefined) {
      AudioFormatOptions.encode(message.audioFormat, writer.uint32(18).fork()).ldelim();
    }
    if (message.textNormalization !== undefined) {
      TextNormalizationOptions.encode(message.textNormalization, writer.uint32(26).fork()).ldelim();
    }
    if (message.languageRestriction !== undefined) {
      LanguageRestrictionOptions.encode(message.languageRestriction, writer.uint32(34).fork()).ldelim();
    }
    if (message.audioProcessingType !== 0) {
      writer.uint32(40).int32(message.audioProcessingType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionModelOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognitionModelOptions();
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

          message.audioFormat = AudioFormatOptions.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.textNormalization = TextNormalizationOptions.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.languageRestriction = LanguageRestrictionOptions.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.audioProcessingType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecognitionModelOptions {
    return {
      $type: RecognitionModelOptions.$type,
      model: isSet(object.model) ? globalThis.String(object.model) : "",
      audioFormat: isSet(object.audioFormat) ? AudioFormatOptions.fromJSON(object.audioFormat) : undefined,
      textNormalization: isSet(object.textNormalization)
        ? TextNormalizationOptions.fromJSON(object.textNormalization)
        : undefined,
      languageRestriction: isSet(object.languageRestriction)
        ? LanguageRestrictionOptions.fromJSON(object.languageRestriction)
        : undefined,
      audioProcessingType: isSet(object.audioProcessingType)
        ? recognitionModelOptions_AudioProcessingTypeFromJSON(object.audioProcessingType)
        : 0,
    };
  },

  toJSON(message: RecognitionModelOptions): unknown {
    const obj: any = {};
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.audioFormat !== undefined) {
      obj.audioFormat = AudioFormatOptions.toJSON(message.audioFormat);
    }
    if (message.textNormalization !== undefined) {
      obj.textNormalization = TextNormalizationOptions.toJSON(message.textNormalization);
    }
    if (message.languageRestriction !== undefined) {
      obj.languageRestriction = LanguageRestrictionOptions.toJSON(message.languageRestriction);
    }
    if (message.audioProcessingType !== 0) {
      obj.audioProcessingType = recognitionModelOptions_AudioProcessingTypeToJSON(message.audioProcessingType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognitionModelOptions>, I>>(base?: I): RecognitionModelOptions {
    return RecognitionModelOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognitionModelOptions>, I>>(object: I): RecognitionModelOptions {
    const message = createBaseRecognitionModelOptions();
    message.model = object.model ?? "";
    message.audioFormat = (object.audioFormat !== undefined && object.audioFormat !== null)
      ? AudioFormatOptions.fromPartial(object.audioFormat)
      : undefined;
    message.textNormalization = (object.textNormalization !== undefined && object.textNormalization !== null)
      ? TextNormalizationOptions.fromPartial(object.textNormalization)
      : undefined;
    message.languageRestriction = (object.languageRestriction !== undefined && object.languageRestriction !== null)
      ? LanguageRestrictionOptions.fromPartial(object.languageRestriction)
      : undefined;
    message.audioProcessingType = object.audioProcessingType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RecognitionModelOptions.$type, RecognitionModelOptions);

function createBaseStreamingOptions(): StreamingOptions {
  return {
    $type: "speechkit.stt.v3.StreamingOptions",
    recognitionModel: undefined,
    eouClassifier: undefined,
    recognitionClassifier: undefined,
    speechAnalysis: undefined,
  };
}

export const StreamingOptions = {
  $type: "speechkit.stt.v3.StreamingOptions" as const,

  encode(message: StreamingOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recognitionModel !== undefined) {
      RecognitionModelOptions.encode(message.recognitionModel, writer.uint32(10).fork()).ldelim();
    }
    if (message.eouClassifier !== undefined) {
      EouClassifierOptions.encode(message.eouClassifier, writer.uint32(18).fork()).ldelim();
    }
    if (message.recognitionClassifier !== undefined) {
      RecognitionClassifierOptions.encode(message.recognitionClassifier, writer.uint32(26).fork()).ldelim();
    }
    if (message.speechAnalysis !== undefined) {
      SpeechAnalysisOptions.encode(message.speechAnalysis, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recognitionModel = RecognitionModelOptions.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eouClassifier = EouClassifierOptions.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recognitionClassifier = RecognitionClassifierOptions.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.speechAnalysis = SpeechAnalysisOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingOptions {
    return {
      $type: StreamingOptions.$type,
      recognitionModel: isSet(object.recognitionModel)
        ? RecognitionModelOptions.fromJSON(object.recognitionModel)
        : undefined,
      eouClassifier: isSet(object.eouClassifier) ? EouClassifierOptions.fromJSON(object.eouClassifier) : undefined,
      recognitionClassifier: isSet(object.recognitionClassifier)
        ? RecognitionClassifierOptions.fromJSON(object.recognitionClassifier)
        : undefined,
      speechAnalysis: isSet(object.speechAnalysis) ? SpeechAnalysisOptions.fromJSON(object.speechAnalysis) : undefined,
    };
  },

  toJSON(message: StreamingOptions): unknown {
    const obj: any = {};
    if (message.recognitionModel !== undefined) {
      obj.recognitionModel = RecognitionModelOptions.toJSON(message.recognitionModel);
    }
    if (message.eouClassifier !== undefined) {
      obj.eouClassifier = EouClassifierOptions.toJSON(message.eouClassifier);
    }
    if (message.recognitionClassifier !== undefined) {
      obj.recognitionClassifier = RecognitionClassifierOptions.toJSON(message.recognitionClassifier);
    }
    if (message.speechAnalysis !== undefined) {
      obj.speechAnalysis = SpeechAnalysisOptions.toJSON(message.speechAnalysis);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingOptions>, I>>(base?: I): StreamingOptions {
    return StreamingOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingOptions>, I>>(object: I): StreamingOptions {
    const message = createBaseStreamingOptions();
    message.recognitionModel = (object.recognitionModel !== undefined && object.recognitionModel !== null)
      ? RecognitionModelOptions.fromPartial(object.recognitionModel)
      : undefined;
    message.eouClassifier = (object.eouClassifier !== undefined && object.eouClassifier !== null)
      ? EouClassifierOptions.fromPartial(object.eouClassifier)
      : undefined;
    message.recognitionClassifier =
      (object.recognitionClassifier !== undefined && object.recognitionClassifier !== null)
        ? RecognitionClassifierOptions.fromPartial(object.recognitionClassifier)
        : undefined;
    message.speechAnalysis = (object.speechAnalysis !== undefined && object.speechAnalysis !== null)
      ? SpeechAnalysisOptions.fromPartial(object.speechAnalysis)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(StreamingOptions.$type, StreamingOptions);

function createBaseAudioChunk(): AudioChunk {
  return { $type: "speechkit.stt.v3.AudioChunk", data: Buffer.alloc(0) };
}

export const AudioChunk = {
  $type: "speechkit.stt.v3.AudioChunk" as const,

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

function createBaseSilenceChunk(): SilenceChunk {
  return { $type: "speechkit.stt.v3.SilenceChunk", durationMs: 0 };
}

export const SilenceChunk = {
  $type: "speechkit.stt.v3.SilenceChunk" as const,

  encode(message: SilenceChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.durationMs !== 0) {
      writer.uint32(8).int64(message.durationMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SilenceChunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSilenceChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): SilenceChunk {
    return {
      $type: SilenceChunk.$type,
      durationMs: isSet(object.durationMs) ? globalThis.Number(object.durationMs) : 0,
    };
  },

  toJSON(message: SilenceChunk): unknown {
    const obj: any = {};
    if (message.durationMs !== 0) {
      obj.durationMs = Math.round(message.durationMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SilenceChunk>, I>>(base?: I): SilenceChunk {
    return SilenceChunk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SilenceChunk>, I>>(object: I): SilenceChunk {
    const message = createBaseSilenceChunk();
    message.durationMs = object.durationMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SilenceChunk.$type, SilenceChunk);

function createBaseEou(): Eou {
  return { $type: "speechkit.stt.v3.Eou" };
}

export const Eou = {
  $type: "speechkit.stt.v3.Eou" as const,

  encode(_: Eou, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Eou {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEou();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Eou {
    return { $type: Eou.$type };
  },

  toJSON(_: Eou): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Eou>, I>>(base?: I): Eou {
    return Eou.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Eou>, I>>(_: I): Eou {
    const message = createBaseEou();
    return message;
  },
};

messageTypeRegistry.set(Eou.$type, Eou);

function createBaseStreamingRequest(): StreamingRequest {
  return {
    $type: "speechkit.stt.v3.StreamingRequest",
    sessionOptions: undefined,
    chunk: undefined,
    silenceChunk: undefined,
    eou: undefined,
  };
}

export const StreamingRequest = {
  $type: "speechkit.stt.v3.StreamingRequest" as const,

  encode(message: StreamingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionOptions !== undefined) {
      StreamingOptions.encode(message.sessionOptions, writer.uint32(10).fork()).ldelim();
    }
    if (message.chunk !== undefined) {
      AudioChunk.encode(message.chunk, writer.uint32(18).fork()).ldelim();
    }
    if (message.silenceChunk !== undefined) {
      SilenceChunk.encode(message.silenceChunk, writer.uint32(26).fork()).ldelim();
    }
    if (message.eou !== undefined) {
      Eou.encode(message.eou, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionOptions = StreamingOptions.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chunk = AudioChunk.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.silenceChunk = SilenceChunk.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.eou = Eou.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingRequest {
    return {
      $type: StreamingRequest.$type,
      sessionOptions: isSet(object.sessionOptions) ? StreamingOptions.fromJSON(object.sessionOptions) : undefined,
      chunk: isSet(object.chunk) ? AudioChunk.fromJSON(object.chunk) : undefined,
      silenceChunk: isSet(object.silenceChunk) ? SilenceChunk.fromJSON(object.silenceChunk) : undefined,
      eou: isSet(object.eou) ? Eou.fromJSON(object.eou) : undefined,
    };
  },

  toJSON(message: StreamingRequest): unknown {
    const obj: any = {};
    if (message.sessionOptions !== undefined) {
      obj.sessionOptions = StreamingOptions.toJSON(message.sessionOptions);
    }
    if (message.chunk !== undefined) {
      obj.chunk = AudioChunk.toJSON(message.chunk);
    }
    if (message.silenceChunk !== undefined) {
      obj.silenceChunk = SilenceChunk.toJSON(message.silenceChunk);
    }
    if (message.eou !== undefined) {
      obj.eou = Eou.toJSON(message.eou);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingRequest>, I>>(base?: I): StreamingRequest {
    return StreamingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingRequest>, I>>(object: I): StreamingRequest {
    const message = createBaseStreamingRequest();
    message.sessionOptions = (object.sessionOptions !== undefined && object.sessionOptions !== null)
      ? StreamingOptions.fromPartial(object.sessionOptions)
      : undefined;
    message.chunk = (object.chunk !== undefined && object.chunk !== null)
      ? AudioChunk.fromPartial(object.chunk)
      : undefined;
    message.silenceChunk = (object.silenceChunk !== undefined && object.silenceChunk !== null)
      ? SilenceChunk.fromPartial(object.silenceChunk)
      : undefined;
    message.eou = (object.eou !== undefined && object.eou !== null) ? Eou.fromPartial(object.eou) : undefined;
    return message;
  },
};

messageTypeRegistry.set(StreamingRequest.$type, StreamingRequest);

function createBaseRecognizeFileRequest(): RecognizeFileRequest {
  return {
    $type: "speechkit.stt.v3.RecognizeFileRequest",
    content: undefined,
    uri: undefined,
    recognitionModel: undefined,
    recognitionClassifier: undefined,
    speechAnalysis: undefined,
  };
}

export const RecognizeFileRequest = {
  $type: "speechkit.stt.v3.RecognizeFileRequest" as const,

  encode(message: RecognizeFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.uri !== undefined) {
      writer.uint32(18).string(message.uri);
    }
    if (message.recognitionModel !== undefined) {
      RecognitionModelOptions.encode(message.recognitionModel, writer.uint32(26).fork()).ldelim();
    }
    if (message.recognitionClassifier !== undefined) {
      RecognitionClassifierOptions.encode(message.recognitionClassifier, writer.uint32(34).fork()).ldelim();
    }
    if (message.speechAnalysis !== undefined) {
      SpeechAnalysisOptions.encode(message.speechAnalysis, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognizeFileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognizeFileRequest();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recognitionModel = RecognitionModelOptions.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.recognitionClassifier = RecognitionClassifierOptions.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.speechAnalysis = SpeechAnalysisOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecognizeFileRequest {
    return {
      $type: RecognizeFileRequest.$type,
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : undefined,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : undefined,
      recognitionModel: isSet(object.recognitionModel)
        ? RecognitionModelOptions.fromJSON(object.recognitionModel)
        : undefined,
      recognitionClassifier: isSet(object.recognitionClassifier)
        ? RecognitionClassifierOptions.fromJSON(object.recognitionClassifier)
        : undefined,
      speechAnalysis: isSet(object.speechAnalysis) ? SpeechAnalysisOptions.fromJSON(object.speechAnalysis) : undefined,
    };
  },

  toJSON(message: RecognizeFileRequest): unknown {
    const obj: any = {};
    if (message.content !== undefined) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.uri !== undefined) {
      obj.uri = message.uri;
    }
    if (message.recognitionModel !== undefined) {
      obj.recognitionModel = RecognitionModelOptions.toJSON(message.recognitionModel);
    }
    if (message.recognitionClassifier !== undefined) {
      obj.recognitionClassifier = RecognitionClassifierOptions.toJSON(message.recognitionClassifier);
    }
    if (message.speechAnalysis !== undefined) {
      obj.speechAnalysis = SpeechAnalysisOptions.toJSON(message.speechAnalysis);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognizeFileRequest>, I>>(base?: I): RecognizeFileRequest {
    return RecognizeFileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognizeFileRequest>, I>>(object: I): RecognizeFileRequest {
    const message = createBaseRecognizeFileRequest();
    message.content = object.content ?? undefined;
    message.uri = object.uri ?? undefined;
    message.recognitionModel = (object.recognitionModel !== undefined && object.recognitionModel !== null)
      ? RecognitionModelOptions.fromPartial(object.recognitionModel)
      : undefined;
    message.recognitionClassifier =
      (object.recognitionClassifier !== undefined && object.recognitionClassifier !== null)
        ? RecognitionClassifierOptions.fromPartial(object.recognitionClassifier)
        : undefined;
    message.speechAnalysis = (object.speechAnalysis !== undefined && object.speechAnalysis !== null)
      ? SpeechAnalysisOptions.fromPartial(object.speechAnalysis)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(RecognizeFileRequest.$type, RecognizeFileRequest);

function createBaseWord(): Word {
  return { $type: "speechkit.stt.v3.Word", text: "", startTimeMs: 0, endTimeMs: 0 };
}

export const Word = {
  $type: "speechkit.stt.v3.Word" as const,

  encode(message: Word, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.startTimeMs !== 0) {
      writer.uint32(16).int64(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      writer.uint32(24).int64(message.endTimeMs);
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

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.endTimeMs = longToNumber(reader.int64() as Long);
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
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      startTimeMs: isSet(object.startTimeMs) ? globalThis.Number(object.startTimeMs) : 0,
      endTimeMs: isSet(object.endTimeMs) ? globalThis.Number(object.endTimeMs) : 0,
    };
  },

  toJSON(message: Word): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.startTimeMs !== 0) {
      obj.startTimeMs = Math.round(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      obj.endTimeMs = Math.round(message.endTimeMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Word>, I>>(base?: I): Word {
    return Word.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Word>, I>>(object: I): Word {
    const message = createBaseWord();
    message.text = object.text ?? "";
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Word.$type, Word);

function createBaseLanguageEstimation(): LanguageEstimation {
  return { $type: "speechkit.stt.v3.LanguageEstimation", languageCode: "", probability: 0 };
}

export const LanguageEstimation = {
  $type: "speechkit.stt.v3.LanguageEstimation" as const,

  encode(message: LanguageEstimation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.languageCode !== "") {
      writer.uint32(10).string(message.languageCode);
    }
    if (message.probability !== 0) {
      writer.uint32(17).double(message.probability);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LanguageEstimation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLanguageEstimation();
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

          message.probability = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LanguageEstimation {
    return {
      $type: LanguageEstimation.$type,
      languageCode: isSet(object.languageCode) ? globalThis.String(object.languageCode) : "",
      probability: isSet(object.probability) ? globalThis.Number(object.probability) : 0,
    };
  },

  toJSON(message: LanguageEstimation): unknown {
    const obj: any = {};
    if (message.languageCode !== "") {
      obj.languageCode = message.languageCode;
    }
    if (message.probability !== 0) {
      obj.probability = message.probability;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LanguageEstimation>, I>>(base?: I): LanguageEstimation {
    return LanguageEstimation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LanguageEstimation>, I>>(object: I): LanguageEstimation {
    const message = createBaseLanguageEstimation();
    message.languageCode = object.languageCode ?? "";
    message.probability = object.probability ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LanguageEstimation.$type, LanguageEstimation);

function createBaseAlternative(): Alternative {
  return {
    $type: "speechkit.stt.v3.Alternative",
    words: [],
    text: "",
    startTimeMs: 0,
    endTimeMs: 0,
    confidence: 0,
    languages: [],
  };
}

export const Alternative = {
  $type: "speechkit.stt.v3.Alternative" as const,

  encode(message: Alternative, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.words) {
      Word.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.startTimeMs !== 0) {
      writer.uint32(24).int64(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      writer.uint32(32).int64(message.endTimeMs);
    }
    if (message.confidence !== 0) {
      writer.uint32(41).double(message.confidence);
    }
    for (const v of message.languages) {
      LanguageEstimation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Alternative {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlternative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.words.push(Word.decode(reader, reader.uint32()));
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

          message.startTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.endTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.confidence = reader.double();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.languages.push(LanguageEstimation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Alternative {
    return {
      $type: Alternative.$type,
      words: globalThis.Array.isArray(object?.words) ? object.words.map((e: any) => Word.fromJSON(e)) : [],
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      startTimeMs: isSet(object.startTimeMs) ? globalThis.Number(object.startTimeMs) : 0,
      endTimeMs: isSet(object.endTimeMs) ? globalThis.Number(object.endTimeMs) : 0,
      confidence: isSet(object.confidence) ? globalThis.Number(object.confidence) : 0,
      languages: globalThis.Array.isArray(object?.languages)
        ? object.languages.map((e: any) => LanguageEstimation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Alternative): unknown {
    const obj: any = {};
    if (message.words?.length) {
      obj.words = message.words.map((e) => Word.toJSON(e));
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.startTimeMs !== 0) {
      obj.startTimeMs = Math.round(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      obj.endTimeMs = Math.round(message.endTimeMs);
    }
    if (message.confidence !== 0) {
      obj.confidence = message.confidence;
    }
    if (message.languages?.length) {
      obj.languages = message.languages.map((e) => LanguageEstimation.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Alternative>, I>>(base?: I): Alternative {
    return Alternative.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Alternative>, I>>(object: I): Alternative {
    const message = createBaseAlternative();
    message.words = object.words?.map((e) => Word.fromPartial(e)) || [];
    message.text = object.text ?? "";
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    message.confidence = object.confidence ?? 0;
    message.languages = object.languages?.map((e) => LanguageEstimation.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Alternative.$type, Alternative);

function createBaseEouUpdate(): EouUpdate {
  return { $type: "speechkit.stt.v3.EouUpdate", timeMs: 0 };
}

export const EouUpdate = {
  $type: "speechkit.stt.v3.EouUpdate" as const,

  encode(message: EouUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeMs !== 0) {
      writer.uint32(16).int64(message.timeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EouUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEouUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timeMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EouUpdate {
    return { $type: EouUpdate.$type, timeMs: isSet(object.timeMs) ? globalThis.Number(object.timeMs) : 0 };
  },

  toJSON(message: EouUpdate): unknown {
    const obj: any = {};
    if (message.timeMs !== 0) {
      obj.timeMs = Math.round(message.timeMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EouUpdate>, I>>(base?: I): EouUpdate {
    return EouUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EouUpdate>, I>>(object: I): EouUpdate {
    const message = createBaseEouUpdate();
    message.timeMs = object.timeMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(EouUpdate.$type, EouUpdate);

function createBaseAlternativeUpdate(): AlternativeUpdate {
  return { $type: "speechkit.stt.v3.AlternativeUpdate", alternatives: [], channelTag: "" };
}

export const AlternativeUpdate = {
  $type: "speechkit.stt.v3.AlternativeUpdate" as const,

  encode(message: AlternativeUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.alternatives) {
      Alternative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.channelTag !== "") {
      writer.uint32(18).string(message.channelTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlternativeUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlternativeUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alternatives.push(Alternative.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelTag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AlternativeUpdate {
    return {
      $type: AlternativeUpdate.$type,
      alternatives: globalThis.Array.isArray(object?.alternatives)
        ? object.alternatives.map((e: any) => Alternative.fromJSON(e))
        : [],
      channelTag: isSet(object.channelTag) ? globalThis.String(object.channelTag) : "",
    };
  },

  toJSON(message: AlternativeUpdate): unknown {
    const obj: any = {};
    if (message.alternatives?.length) {
      obj.alternatives = message.alternatives.map((e) => Alternative.toJSON(e));
    }
    if (message.channelTag !== "") {
      obj.channelTag = message.channelTag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlternativeUpdate>, I>>(base?: I): AlternativeUpdate {
    return AlternativeUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlternativeUpdate>, I>>(object: I): AlternativeUpdate {
    const message = createBaseAlternativeUpdate();
    message.alternatives = object.alternatives?.map((e) => Alternative.fromPartial(e)) || [];
    message.channelTag = object.channelTag ?? "";
    return message;
  },
};

messageTypeRegistry.set(AlternativeUpdate.$type, AlternativeUpdate);

function createBaseAudioCursors(): AudioCursors {
  return {
    $type: "speechkit.stt.v3.AudioCursors",
    receivedDataMs: 0,
    resetTimeMs: 0,
    partialTimeMs: 0,
    finalTimeMs: 0,
    finalIndex: 0,
    eouTimeMs: 0,
  };
}

export const AudioCursors = {
  $type: "speechkit.stt.v3.AudioCursors" as const,

  encode(message: AudioCursors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receivedDataMs !== 0) {
      writer.uint32(8).int64(message.receivedDataMs);
    }
    if (message.resetTimeMs !== 0) {
      writer.uint32(16).int64(message.resetTimeMs);
    }
    if (message.partialTimeMs !== 0) {
      writer.uint32(24).int64(message.partialTimeMs);
    }
    if (message.finalTimeMs !== 0) {
      writer.uint32(32).int64(message.finalTimeMs);
    }
    if (message.finalIndex !== 0) {
      writer.uint32(40).int64(message.finalIndex);
    }
    if (message.eouTimeMs !== 0) {
      writer.uint32(48).int64(message.eouTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioCursors {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioCursors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.receivedDataMs = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.resetTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.partialTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.finalTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.finalIndex = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.eouTimeMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioCursors {
    return {
      $type: AudioCursors.$type,
      receivedDataMs: isSet(object.receivedDataMs) ? globalThis.Number(object.receivedDataMs) : 0,
      resetTimeMs: isSet(object.resetTimeMs) ? globalThis.Number(object.resetTimeMs) : 0,
      partialTimeMs: isSet(object.partialTimeMs) ? globalThis.Number(object.partialTimeMs) : 0,
      finalTimeMs: isSet(object.finalTimeMs) ? globalThis.Number(object.finalTimeMs) : 0,
      finalIndex: isSet(object.finalIndex) ? globalThis.Number(object.finalIndex) : 0,
      eouTimeMs: isSet(object.eouTimeMs) ? globalThis.Number(object.eouTimeMs) : 0,
    };
  },

  toJSON(message: AudioCursors): unknown {
    const obj: any = {};
    if (message.receivedDataMs !== 0) {
      obj.receivedDataMs = Math.round(message.receivedDataMs);
    }
    if (message.resetTimeMs !== 0) {
      obj.resetTimeMs = Math.round(message.resetTimeMs);
    }
    if (message.partialTimeMs !== 0) {
      obj.partialTimeMs = Math.round(message.partialTimeMs);
    }
    if (message.finalTimeMs !== 0) {
      obj.finalTimeMs = Math.round(message.finalTimeMs);
    }
    if (message.finalIndex !== 0) {
      obj.finalIndex = Math.round(message.finalIndex);
    }
    if (message.eouTimeMs !== 0) {
      obj.eouTimeMs = Math.round(message.eouTimeMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioCursors>, I>>(base?: I): AudioCursors {
    return AudioCursors.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioCursors>, I>>(object: I): AudioCursors {
    const message = createBaseAudioCursors();
    message.receivedDataMs = object.receivedDataMs ?? 0;
    message.resetTimeMs = object.resetTimeMs ?? 0;
    message.partialTimeMs = object.partialTimeMs ?? 0;
    message.finalTimeMs = object.finalTimeMs ?? 0;
    message.finalIndex = object.finalIndex ?? 0;
    message.eouTimeMs = object.eouTimeMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AudioCursors.$type, AudioCursors);

function createBaseFinalRefinement(): FinalRefinement {
  return { $type: "speechkit.stt.v3.FinalRefinement", finalIndex: 0, normalizedText: undefined };
}

export const FinalRefinement = {
  $type: "speechkit.stt.v3.FinalRefinement" as const,

  encode(message: FinalRefinement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.finalIndex !== 0) {
      writer.uint32(8).int64(message.finalIndex);
    }
    if (message.normalizedText !== undefined) {
      AlternativeUpdate.encode(message.normalizedText, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinalRefinement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalRefinement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.finalIndex = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.normalizedText = AlternativeUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinalRefinement {
    return {
      $type: FinalRefinement.$type,
      finalIndex: isSet(object.finalIndex) ? globalThis.Number(object.finalIndex) : 0,
      normalizedText: isSet(object.normalizedText) ? AlternativeUpdate.fromJSON(object.normalizedText) : undefined,
    };
  },

  toJSON(message: FinalRefinement): unknown {
    const obj: any = {};
    if (message.finalIndex !== 0) {
      obj.finalIndex = Math.round(message.finalIndex);
    }
    if (message.normalizedText !== undefined) {
      obj.normalizedText = AlternativeUpdate.toJSON(message.normalizedText);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinalRefinement>, I>>(base?: I): FinalRefinement {
    return FinalRefinement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinalRefinement>, I>>(object: I): FinalRefinement {
    const message = createBaseFinalRefinement();
    message.finalIndex = object.finalIndex ?? 0;
    message.normalizedText = (object.normalizedText !== undefined && object.normalizedText !== null)
      ? AlternativeUpdate.fromPartial(object.normalizedText)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(FinalRefinement.$type, FinalRefinement);

function createBaseStatusCode(): StatusCode {
  return { $type: "speechkit.stt.v3.StatusCode", codeType: 0, message: "" };
}

export const StatusCode = {
  $type: "speechkit.stt.v3.StatusCode" as const,

  encode(message: StatusCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeType !== 0) {
      writer.uint32(8).int32(message.codeType);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codeType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusCode {
    return {
      $type: StatusCode.$type,
      codeType: isSet(object.codeType) ? codeTypeFromJSON(object.codeType) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: StatusCode): unknown {
    const obj: any = {};
    if (message.codeType !== 0) {
      obj.codeType = codeTypeToJSON(message.codeType);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatusCode>, I>>(base?: I): StatusCode {
    return StatusCode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatusCode>, I>>(object: I): StatusCode {
    const message = createBaseStatusCode();
    message.codeType = object.codeType ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

messageTypeRegistry.set(StatusCode.$type, StatusCode);

function createBaseSessionUuid(): SessionUuid {
  return { $type: "speechkit.stt.v3.SessionUuid", uuid: "", userRequestId: "" };
}

export const SessionUuid = {
  $type: "speechkit.stt.v3.SessionUuid" as const,

  encode(message: SessionUuid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.userRequestId !== "") {
      writer.uint32(18).string(message.userRequestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionUuid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionUuid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userRequestId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SessionUuid {
    return {
      $type: SessionUuid.$type,
      uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : "",
      userRequestId: isSet(object.userRequestId) ? globalThis.String(object.userRequestId) : "",
    };
  },

  toJSON(message: SessionUuid): unknown {
    const obj: any = {};
    if (message.uuid !== "") {
      obj.uuid = message.uuid;
    }
    if (message.userRequestId !== "") {
      obj.userRequestId = message.userRequestId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SessionUuid>, I>>(base?: I): SessionUuid {
    return SessionUuid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SessionUuid>, I>>(object: I): SessionUuid {
    const message = createBaseSessionUuid();
    message.uuid = object.uuid ?? "";
    message.userRequestId = object.userRequestId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SessionUuid.$type, SessionUuid);

function createBasePhraseHighlight(): PhraseHighlight {
  return { $type: "speechkit.stt.v3.PhraseHighlight", text: "", startTimeMs: 0, endTimeMs: 0 };
}

export const PhraseHighlight = {
  $type: "speechkit.stt.v3.PhraseHighlight" as const,

  encode(message: PhraseHighlight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.startTimeMs !== 0) {
      writer.uint32(16).int64(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      writer.uint32(24).int64(message.endTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhraseHighlight {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhraseHighlight();
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
          if (tag !== 16) {
            break;
          }

          message.startTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.endTimeMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PhraseHighlight {
    return {
      $type: PhraseHighlight.$type,
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      startTimeMs: isSet(object.startTimeMs) ? globalThis.Number(object.startTimeMs) : 0,
      endTimeMs: isSet(object.endTimeMs) ? globalThis.Number(object.endTimeMs) : 0,
    };
  },

  toJSON(message: PhraseHighlight): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.startTimeMs !== 0) {
      obj.startTimeMs = Math.round(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      obj.endTimeMs = Math.round(message.endTimeMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PhraseHighlight>, I>>(base?: I): PhraseHighlight {
    return PhraseHighlight.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PhraseHighlight>, I>>(object: I): PhraseHighlight {
    const message = createBasePhraseHighlight();
    message.text = object.text ?? "";
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PhraseHighlight.$type, PhraseHighlight);

function createBaseRecognitionClassifierLabel(): RecognitionClassifierLabel {
  return { $type: "speechkit.stt.v3.RecognitionClassifierLabel", label: "", confidence: 0 };
}

export const RecognitionClassifierLabel = {
  $type: "speechkit.stt.v3.RecognitionClassifierLabel" as const,

  encode(message: RecognitionClassifierLabel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.confidence !== 0) {
      writer.uint32(17).double(message.confidence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionClassifierLabel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognitionClassifierLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.label = reader.string();
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

  fromJSON(object: any): RecognitionClassifierLabel {
    return {
      $type: RecognitionClassifierLabel.$type,
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      confidence: isSet(object.confidence) ? globalThis.Number(object.confidence) : 0,
    };
  },

  toJSON(message: RecognitionClassifierLabel): unknown {
    const obj: any = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.confidence !== 0) {
      obj.confidence = message.confidence;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognitionClassifierLabel>, I>>(base?: I): RecognitionClassifierLabel {
    return RecognitionClassifierLabel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognitionClassifierLabel>, I>>(object: I): RecognitionClassifierLabel {
    const message = createBaseRecognitionClassifierLabel();
    message.label = object.label ?? "";
    message.confidence = object.confidence ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RecognitionClassifierLabel.$type, RecognitionClassifierLabel);

function createBaseRecognitionClassifierResult(): RecognitionClassifierResult {
  return { $type: "speechkit.stt.v3.RecognitionClassifierResult", classifier: "", highlights: [], labels: [] };
}

export const RecognitionClassifierResult = {
  $type: "speechkit.stt.v3.RecognitionClassifierResult" as const,

  encode(message: RecognitionClassifierResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classifier !== "") {
      writer.uint32(10).string(message.classifier);
    }
    for (const v of message.highlights) {
      PhraseHighlight.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.labels) {
      RecognitionClassifierLabel.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionClassifierResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognitionClassifierResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.highlights.push(PhraseHighlight.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.labels.push(RecognitionClassifierLabel.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecognitionClassifierResult {
    return {
      $type: RecognitionClassifierResult.$type,
      classifier: isSet(object.classifier) ? globalThis.String(object.classifier) : "",
      highlights: globalThis.Array.isArray(object?.highlights)
        ? object.highlights.map((e: any) => PhraseHighlight.fromJSON(e))
        : [],
      labels: globalThis.Array.isArray(object?.labels)
        ? object.labels.map((e: any) => RecognitionClassifierLabel.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RecognitionClassifierResult): unknown {
    const obj: any = {};
    if (message.classifier !== "") {
      obj.classifier = message.classifier;
    }
    if (message.highlights?.length) {
      obj.highlights = message.highlights.map((e) => PhraseHighlight.toJSON(e));
    }
    if (message.labels?.length) {
      obj.labels = message.labels.map((e) => RecognitionClassifierLabel.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognitionClassifierResult>, I>>(base?: I): RecognitionClassifierResult {
    return RecognitionClassifierResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognitionClassifierResult>, I>>(object: I): RecognitionClassifierResult {
    const message = createBaseRecognitionClassifierResult();
    message.classifier = object.classifier ?? "";
    message.highlights = object.highlights?.map((e) => PhraseHighlight.fromPartial(e)) || [];
    message.labels = object.labels?.map((e) => RecognitionClassifierLabel.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RecognitionClassifierResult.$type, RecognitionClassifierResult);

function createBaseRecognitionClassifierUpdate(): RecognitionClassifierUpdate {
  return {
    $type: "speechkit.stt.v3.RecognitionClassifierUpdate",
    windowType: 0,
    startTimeMs: 0,
    endTimeMs: 0,
    classifierResult: undefined,
  };
}

export const RecognitionClassifierUpdate = {
  $type: "speechkit.stt.v3.RecognitionClassifierUpdate" as const,

  encode(message: RecognitionClassifierUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.windowType !== 0) {
      writer.uint32(8).int32(message.windowType);
    }
    if (message.startTimeMs !== 0) {
      writer.uint32(16).int64(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      writer.uint32(24).int64(message.endTimeMs);
    }
    if (message.classifierResult !== undefined) {
      RecognitionClassifierResult.encode(message.classifierResult, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionClassifierUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognitionClassifierUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.windowType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.endTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.classifierResult = RecognitionClassifierResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecognitionClassifierUpdate {
    return {
      $type: RecognitionClassifierUpdate.$type,
      windowType: isSet(object.windowType) ? recognitionClassifierUpdate_WindowTypeFromJSON(object.windowType) : 0,
      startTimeMs: isSet(object.startTimeMs) ? globalThis.Number(object.startTimeMs) : 0,
      endTimeMs: isSet(object.endTimeMs) ? globalThis.Number(object.endTimeMs) : 0,
      classifierResult: isSet(object.classifierResult)
        ? RecognitionClassifierResult.fromJSON(object.classifierResult)
        : undefined,
    };
  },

  toJSON(message: RecognitionClassifierUpdate): unknown {
    const obj: any = {};
    if (message.windowType !== 0) {
      obj.windowType = recognitionClassifierUpdate_WindowTypeToJSON(message.windowType);
    }
    if (message.startTimeMs !== 0) {
      obj.startTimeMs = Math.round(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      obj.endTimeMs = Math.round(message.endTimeMs);
    }
    if (message.classifierResult !== undefined) {
      obj.classifierResult = RecognitionClassifierResult.toJSON(message.classifierResult);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognitionClassifierUpdate>, I>>(base?: I): RecognitionClassifierUpdate {
    return RecognitionClassifierUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognitionClassifierUpdate>, I>>(object: I): RecognitionClassifierUpdate {
    const message = createBaseRecognitionClassifierUpdate();
    message.windowType = object.windowType ?? 0;
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    message.classifierResult = (object.classifierResult !== undefined && object.classifierResult !== null)
      ? RecognitionClassifierResult.fromPartial(object.classifierResult)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(RecognitionClassifierUpdate.$type, RecognitionClassifierUpdate);

function createBaseDescriptiveStatistics(): DescriptiveStatistics {
  return { $type: "speechkit.stt.v3.DescriptiveStatistics", min: 0, max: 0, mean: 0, std: 0, quantiles: [] };
}

export const DescriptiveStatistics = {
  $type: "speechkit.stt.v3.DescriptiveStatistics" as const,

  encode(message: DescriptiveStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(9).double(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(17).double(message.max);
    }
    if (message.mean !== 0) {
      writer.uint32(25).double(message.mean);
    }
    if (message.std !== 0) {
      writer.uint32(33).double(message.std);
    }
    for (const v of message.quantiles) {
      DescriptiveStatistics_Quantile.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptiveStatistics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptiveStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.min = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.max = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.mean = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.std = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quantiles.push(DescriptiveStatistics_Quantile.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DescriptiveStatistics {
    return {
      $type: DescriptiveStatistics.$type,
      min: isSet(object.min) ? globalThis.Number(object.min) : 0,
      max: isSet(object.max) ? globalThis.Number(object.max) : 0,
      mean: isSet(object.mean) ? globalThis.Number(object.mean) : 0,
      std: isSet(object.std) ? globalThis.Number(object.std) : 0,
      quantiles: globalThis.Array.isArray(object?.quantiles)
        ? object.quantiles.map((e: any) => DescriptiveStatistics_Quantile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DescriptiveStatistics): unknown {
    const obj: any = {};
    if (message.min !== 0) {
      obj.min = message.min;
    }
    if (message.max !== 0) {
      obj.max = message.max;
    }
    if (message.mean !== 0) {
      obj.mean = message.mean;
    }
    if (message.std !== 0) {
      obj.std = message.std;
    }
    if (message.quantiles?.length) {
      obj.quantiles = message.quantiles.map((e) => DescriptiveStatistics_Quantile.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DescriptiveStatistics>, I>>(base?: I): DescriptiveStatistics {
    return DescriptiveStatistics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DescriptiveStatistics>, I>>(object: I): DescriptiveStatistics {
    const message = createBaseDescriptiveStatistics();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    message.mean = object.mean ?? 0;
    message.std = object.std ?? 0;
    message.quantiles = object.quantiles?.map((e) => DescriptiveStatistics_Quantile.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(DescriptiveStatistics.$type, DescriptiveStatistics);

function createBaseDescriptiveStatistics_Quantile(): DescriptiveStatistics_Quantile {
  return { $type: "speechkit.stt.v3.DescriptiveStatistics.Quantile", level: 0, value: 0 };
}

export const DescriptiveStatistics_Quantile = {
  $type: "speechkit.stt.v3.DescriptiveStatistics.Quantile" as const,

  encode(message: DescriptiveStatistics_Quantile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(9).double(message.level);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptiveStatistics_Quantile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptiveStatistics_Quantile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.level = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DescriptiveStatistics_Quantile {
    return {
      $type: DescriptiveStatistics_Quantile.$type,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: DescriptiveStatistics_Quantile): unknown {
    const obj: any = {};
    if (message.level !== 0) {
      obj.level = message.level;
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DescriptiveStatistics_Quantile>, I>>(base?: I): DescriptiveStatistics_Quantile {
    return DescriptiveStatistics_Quantile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DescriptiveStatistics_Quantile>, I>>(
    object: I,
  ): DescriptiveStatistics_Quantile {
    const message = createBaseDescriptiveStatistics_Quantile();
    message.level = object.level ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DescriptiveStatistics_Quantile.$type, DescriptiveStatistics_Quantile);

function createBaseAudioSegmentBoundaries(): AudioSegmentBoundaries {
  return { $type: "speechkit.stt.v3.AudioSegmentBoundaries", startTimeMs: 0, endTimeMs: 0 };
}

export const AudioSegmentBoundaries = {
  $type: "speechkit.stt.v3.AudioSegmentBoundaries" as const,

  encode(message: AudioSegmentBoundaries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTimeMs !== 0) {
      writer.uint32(8).int64(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      writer.uint32(16).int64(message.endTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioSegmentBoundaries {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioSegmentBoundaries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.startTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.endTimeMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioSegmentBoundaries {
    return {
      $type: AudioSegmentBoundaries.$type,
      startTimeMs: isSet(object.startTimeMs) ? globalThis.Number(object.startTimeMs) : 0,
      endTimeMs: isSet(object.endTimeMs) ? globalThis.Number(object.endTimeMs) : 0,
    };
  },

  toJSON(message: AudioSegmentBoundaries): unknown {
    const obj: any = {};
    if (message.startTimeMs !== 0) {
      obj.startTimeMs = Math.round(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      obj.endTimeMs = Math.round(message.endTimeMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioSegmentBoundaries>, I>>(base?: I): AudioSegmentBoundaries {
    return AudioSegmentBoundaries.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioSegmentBoundaries>, I>>(object: I): AudioSegmentBoundaries {
    const message = createBaseAudioSegmentBoundaries();
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AudioSegmentBoundaries.$type, AudioSegmentBoundaries);

function createBaseSpeakerAnalysis(): SpeakerAnalysis {
  return {
    $type: "speechkit.stt.v3.SpeakerAnalysis",
    speakerTag: "",
    windowType: 0,
    speechBoundaries: undefined,
    totalSpeechMs: 0,
    speechRatio: 0,
    totalSilenceMs: 0,
    silenceRatio: 0,
    wordsCount: 0,
    lettersCount: 0,
    wordsPerSecond: undefined,
    lettersPerSecond: undefined,
    wordsPerUtterance: undefined,
    lettersPerUtterance: undefined,
    utteranceCount: 0,
    utteranceDurationEstimation: undefined,
  };
}

export const SpeakerAnalysis = {
  $type: "speechkit.stt.v3.SpeakerAnalysis" as const,

  encode(message: SpeakerAnalysis, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.speakerTag !== "") {
      writer.uint32(10).string(message.speakerTag);
    }
    if (message.windowType !== 0) {
      writer.uint32(16).int32(message.windowType);
    }
    if (message.speechBoundaries !== undefined) {
      AudioSegmentBoundaries.encode(message.speechBoundaries, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalSpeechMs !== 0) {
      writer.uint32(32).int64(message.totalSpeechMs);
    }
    if (message.speechRatio !== 0) {
      writer.uint32(41).double(message.speechRatio);
    }
    if (message.totalSilenceMs !== 0) {
      writer.uint32(48).int64(message.totalSilenceMs);
    }
    if (message.silenceRatio !== 0) {
      writer.uint32(57).double(message.silenceRatio);
    }
    if (message.wordsCount !== 0) {
      writer.uint32(64).int64(message.wordsCount);
    }
    if (message.lettersCount !== 0) {
      writer.uint32(72).int64(message.lettersCount);
    }
    if (message.wordsPerSecond !== undefined) {
      DescriptiveStatistics.encode(message.wordsPerSecond, writer.uint32(82).fork()).ldelim();
    }
    if (message.lettersPerSecond !== undefined) {
      DescriptiveStatistics.encode(message.lettersPerSecond, writer.uint32(90).fork()).ldelim();
    }
    if (message.wordsPerUtterance !== undefined) {
      DescriptiveStatistics.encode(message.wordsPerUtterance, writer.uint32(98).fork()).ldelim();
    }
    if (message.lettersPerUtterance !== undefined) {
      DescriptiveStatistics.encode(message.lettersPerUtterance, writer.uint32(106).fork()).ldelim();
    }
    if (message.utteranceCount !== 0) {
      writer.uint32(112).int64(message.utteranceCount);
    }
    if (message.utteranceDurationEstimation !== undefined) {
      DescriptiveStatistics.encode(message.utteranceDurationEstimation, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeakerAnalysis {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpeakerAnalysis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.speakerTag = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.windowType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.speechBoundaries = AudioSegmentBoundaries.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalSpeechMs = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.speechRatio = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.totalSilenceMs = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.silenceRatio = reader.double();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.wordsCount = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.lettersCount = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.wordsPerSecond = DescriptiveStatistics.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.lettersPerSecond = DescriptiveStatistics.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.wordsPerUtterance = DescriptiveStatistics.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.lettersPerUtterance = DescriptiveStatistics.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.utteranceCount = longToNumber(reader.int64() as Long);
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.utteranceDurationEstimation = DescriptiveStatistics.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpeakerAnalysis {
    return {
      $type: SpeakerAnalysis.$type,
      speakerTag: isSet(object.speakerTag) ? globalThis.String(object.speakerTag) : "",
      windowType: isSet(object.windowType) ? speakerAnalysis_WindowTypeFromJSON(object.windowType) : 0,
      speechBoundaries: isSet(object.speechBoundaries)
        ? AudioSegmentBoundaries.fromJSON(object.speechBoundaries)
        : undefined,
      totalSpeechMs: isSet(object.totalSpeechMs) ? globalThis.Number(object.totalSpeechMs) : 0,
      speechRatio: isSet(object.speechRatio) ? globalThis.Number(object.speechRatio) : 0,
      totalSilenceMs: isSet(object.totalSilenceMs) ? globalThis.Number(object.totalSilenceMs) : 0,
      silenceRatio: isSet(object.silenceRatio) ? globalThis.Number(object.silenceRatio) : 0,
      wordsCount: isSet(object.wordsCount) ? globalThis.Number(object.wordsCount) : 0,
      lettersCount: isSet(object.lettersCount) ? globalThis.Number(object.lettersCount) : 0,
      wordsPerSecond: isSet(object.wordsPerSecond) ? DescriptiveStatistics.fromJSON(object.wordsPerSecond) : undefined,
      lettersPerSecond: isSet(object.lettersPerSecond)
        ? DescriptiveStatistics.fromJSON(object.lettersPerSecond)
        : undefined,
      wordsPerUtterance: isSet(object.wordsPerUtterance)
        ? DescriptiveStatistics.fromJSON(object.wordsPerUtterance)
        : undefined,
      lettersPerUtterance: isSet(object.lettersPerUtterance)
        ? DescriptiveStatistics.fromJSON(object.lettersPerUtterance)
        : undefined,
      utteranceCount: isSet(object.utteranceCount) ? globalThis.Number(object.utteranceCount) : 0,
      utteranceDurationEstimation: isSet(object.utteranceDurationEstimation)
        ? DescriptiveStatistics.fromJSON(object.utteranceDurationEstimation)
        : undefined,
    };
  },

  toJSON(message: SpeakerAnalysis): unknown {
    const obj: any = {};
    if (message.speakerTag !== "") {
      obj.speakerTag = message.speakerTag;
    }
    if (message.windowType !== 0) {
      obj.windowType = speakerAnalysis_WindowTypeToJSON(message.windowType);
    }
    if (message.speechBoundaries !== undefined) {
      obj.speechBoundaries = AudioSegmentBoundaries.toJSON(message.speechBoundaries);
    }
    if (message.totalSpeechMs !== 0) {
      obj.totalSpeechMs = Math.round(message.totalSpeechMs);
    }
    if (message.speechRatio !== 0) {
      obj.speechRatio = message.speechRatio;
    }
    if (message.totalSilenceMs !== 0) {
      obj.totalSilenceMs = Math.round(message.totalSilenceMs);
    }
    if (message.silenceRatio !== 0) {
      obj.silenceRatio = message.silenceRatio;
    }
    if (message.wordsCount !== 0) {
      obj.wordsCount = Math.round(message.wordsCount);
    }
    if (message.lettersCount !== 0) {
      obj.lettersCount = Math.round(message.lettersCount);
    }
    if (message.wordsPerSecond !== undefined) {
      obj.wordsPerSecond = DescriptiveStatistics.toJSON(message.wordsPerSecond);
    }
    if (message.lettersPerSecond !== undefined) {
      obj.lettersPerSecond = DescriptiveStatistics.toJSON(message.lettersPerSecond);
    }
    if (message.wordsPerUtterance !== undefined) {
      obj.wordsPerUtterance = DescriptiveStatistics.toJSON(message.wordsPerUtterance);
    }
    if (message.lettersPerUtterance !== undefined) {
      obj.lettersPerUtterance = DescriptiveStatistics.toJSON(message.lettersPerUtterance);
    }
    if (message.utteranceCount !== 0) {
      obj.utteranceCount = Math.round(message.utteranceCount);
    }
    if (message.utteranceDurationEstimation !== undefined) {
      obj.utteranceDurationEstimation = DescriptiveStatistics.toJSON(message.utteranceDurationEstimation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SpeakerAnalysis>, I>>(base?: I): SpeakerAnalysis {
    return SpeakerAnalysis.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SpeakerAnalysis>, I>>(object: I): SpeakerAnalysis {
    const message = createBaseSpeakerAnalysis();
    message.speakerTag = object.speakerTag ?? "";
    message.windowType = object.windowType ?? 0;
    message.speechBoundaries = (object.speechBoundaries !== undefined && object.speechBoundaries !== null)
      ? AudioSegmentBoundaries.fromPartial(object.speechBoundaries)
      : undefined;
    message.totalSpeechMs = object.totalSpeechMs ?? 0;
    message.speechRatio = object.speechRatio ?? 0;
    message.totalSilenceMs = object.totalSilenceMs ?? 0;
    message.silenceRatio = object.silenceRatio ?? 0;
    message.wordsCount = object.wordsCount ?? 0;
    message.lettersCount = object.lettersCount ?? 0;
    message.wordsPerSecond = (object.wordsPerSecond !== undefined && object.wordsPerSecond !== null)
      ? DescriptiveStatistics.fromPartial(object.wordsPerSecond)
      : undefined;
    message.lettersPerSecond = (object.lettersPerSecond !== undefined && object.lettersPerSecond !== null)
      ? DescriptiveStatistics.fromPartial(object.lettersPerSecond)
      : undefined;
    message.wordsPerUtterance = (object.wordsPerUtterance !== undefined && object.wordsPerUtterance !== null)
      ? DescriptiveStatistics.fromPartial(object.wordsPerUtterance)
      : undefined;
    message.lettersPerUtterance = (object.lettersPerUtterance !== undefined && object.lettersPerUtterance !== null)
      ? DescriptiveStatistics.fromPartial(object.lettersPerUtterance)
      : undefined;
    message.utteranceCount = object.utteranceCount ?? 0;
    message.utteranceDurationEstimation =
      (object.utteranceDurationEstimation !== undefined && object.utteranceDurationEstimation !== null)
        ? DescriptiveStatistics.fromPartial(object.utteranceDurationEstimation)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SpeakerAnalysis.$type, SpeakerAnalysis);

function createBaseConversationAnalysis(): ConversationAnalysis {
  return {
    $type: "speechkit.stt.v3.ConversationAnalysis",
    conversationBoundaries: undefined,
    totalSimultaneousSilenceDurationMs: 0,
    totalSimultaneousSilenceRatio: 0,
    simultaneousSilenceDurationEstimation: undefined,
    totalSimultaneousSpeechDurationMs: 0,
    totalSimultaneousSpeechRatio: 0,
    simultaneousSpeechDurationEstimation: undefined,
    speakerInterrupts: [],
  };
}

export const ConversationAnalysis = {
  $type: "speechkit.stt.v3.ConversationAnalysis" as const,

  encode(message: ConversationAnalysis, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conversationBoundaries !== undefined) {
      AudioSegmentBoundaries.encode(message.conversationBoundaries, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalSimultaneousSilenceDurationMs !== 0) {
      writer.uint32(16).int64(message.totalSimultaneousSilenceDurationMs);
    }
    if (message.totalSimultaneousSilenceRatio !== 0) {
      writer.uint32(25).double(message.totalSimultaneousSilenceRatio);
    }
    if (message.simultaneousSilenceDurationEstimation !== undefined) {
      DescriptiveStatistics.encode(message.simultaneousSilenceDurationEstimation, writer.uint32(34).fork()).ldelim();
    }
    if (message.totalSimultaneousSpeechDurationMs !== 0) {
      writer.uint32(40).int64(message.totalSimultaneousSpeechDurationMs);
    }
    if (message.totalSimultaneousSpeechRatio !== 0) {
      writer.uint32(49).double(message.totalSimultaneousSpeechRatio);
    }
    if (message.simultaneousSpeechDurationEstimation !== undefined) {
      DescriptiveStatistics.encode(message.simultaneousSpeechDurationEstimation, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.speakerInterrupts) {
      ConversationAnalysis_InterruptsEvaluation.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationAnalysis {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationAnalysis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conversationBoundaries = AudioSegmentBoundaries.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalSimultaneousSilenceDurationMs = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.totalSimultaneousSilenceRatio = reader.double();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.simultaneousSilenceDurationEstimation = DescriptiveStatistics.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.totalSimultaneousSpeechDurationMs = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.totalSimultaneousSpeechRatio = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.simultaneousSpeechDurationEstimation = DescriptiveStatistics.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.speakerInterrupts.push(ConversationAnalysis_InterruptsEvaluation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationAnalysis {
    return {
      $type: ConversationAnalysis.$type,
      conversationBoundaries: isSet(object.conversationBoundaries)
        ? AudioSegmentBoundaries.fromJSON(object.conversationBoundaries)
        : undefined,
      totalSimultaneousSilenceDurationMs: isSet(object.totalSimultaneousSilenceDurationMs)
        ? globalThis.Number(object.totalSimultaneousSilenceDurationMs)
        : 0,
      totalSimultaneousSilenceRatio: isSet(object.totalSimultaneousSilenceRatio)
        ? globalThis.Number(object.totalSimultaneousSilenceRatio)
        : 0,
      simultaneousSilenceDurationEstimation: isSet(object.simultaneousSilenceDurationEstimation)
        ? DescriptiveStatistics.fromJSON(object.simultaneousSilenceDurationEstimation)
        : undefined,
      totalSimultaneousSpeechDurationMs: isSet(object.totalSimultaneousSpeechDurationMs)
        ? globalThis.Number(object.totalSimultaneousSpeechDurationMs)
        : 0,
      totalSimultaneousSpeechRatio: isSet(object.totalSimultaneousSpeechRatio)
        ? globalThis.Number(object.totalSimultaneousSpeechRatio)
        : 0,
      simultaneousSpeechDurationEstimation: isSet(object.simultaneousSpeechDurationEstimation)
        ? DescriptiveStatistics.fromJSON(object.simultaneousSpeechDurationEstimation)
        : undefined,
      speakerInterrupts: globalThis.Array.isArray(object?.speakerInterrupts)
        ? object.speakerInterrupts.map((e: any) => ConversationAnalysis_InterruptsEvaluation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ConversationAnalysis): unknown {
    const obj: any = {};
    if (message.conversationBoundaries !== undefined) {
      obj.conversationBoundaries = AudioSegmentBoundaries.toJSON(message.conversationBoundaries);
    }
    if (message.totalSimultaneousSilenceDurationMs !== 0) {
      obj.totalSimultaneousSilenceDurationMs = Math.round(message.totalSimultaneousSilenceDurationMs);
    }
    if (message.totalSimultaneousSilenceRatio !== 0) {
      obj.totalSimultaneousSilenceRatio = message.totalSimultaneousSilenceRatio;
    }
    if (message.simultaneousSilenceDurationEstimation !== undefined) {
      obj.simultaneousSilenceDurationEstimation = DescriptiveStatistics.toJSON(
        message.simultaneousSilenceDurationEstimation,
      );
    }
    if (message.totalSimultaneousSpeechDurationMs !== 0) {
      obj.totalSimultaneousSpeechDurationMs = Math.round(message.totalSimultaneousSpeechDurationMs);
    }
    if (message.totalSimultaneousSpeechRatio !== 0) {
      obj.totalSimultaneousSpeechRatio = message.totalSimultaneousSpeechRatio;
    }
    if (message.simultaneousSpeechDurationEstimation !== undefined) {
      obj.simultaneousSpeechDurationEstimation = DescriptiveStatistics.toJSON(
        message.simultaneousSpeechDurationEstimation,
      );
    }
    if (message.speakerInterrupts?.length) {
      obj.speakerInterrupts = message.speakerInterrupts.map((e) => ConversationAnalysis_InterruptsEvaluation.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationAnalysis>, I>>(base?: I): ConversationAnalysis {
    return ConversationAnalysis.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConversationAnalysis>, I>>(object: I): ConversationAnalysis {
    const message = createBaseConversationAnalysis();
    message.conversationBoundaries =
      (object.conversationBoundaries !== undefined && object.conversationBoundaries !== null)
        ? AudioSegmentBoundaries.fromPartial(object.conversationBoundaries)
        : undefined;
    message.totalSimultaneousSilenceDurationMs = object.totalSimultaneousSilenceDurationMs ?? 0;
    message.totalSimultaneousSilenceRatio = object.totalSimultaneousSilenceRatio ?? 0;
    message.simultaneousSilenceDurationEstimation =
      (object.simultaneousSilenceDurationEstimation !== undefined &&
          object.simultaneousSilenceDurationEstimation !== null)
        ? DescriptiveStatistics.fromPartial(object.simultaneousSilenceDurationEstimation)
        : undefined;
    message.totalSimultaneousSpeechDurationMs = object.totalSimultaneousSpeechDurationMs ?? 0;
    message.totalSimultaneousSpeechRatio = object.totalSimultaneousSpeechRatio ?? 0;
    message.simultaneousSpeechDurationEstimation =
      (object.simultaneousSpeechDurationEstimation !== undefined &&
          object.simultaneousSpeechDurationEstimation !== null)
        ? DescriptiveStatistics.fromPartial(object.simultaneousSpeechDurationEstimation)
        : undefined;
    message.speakerInterrupts =
      object.speakerInterrupts?.map((e) => ConversationAnalysis_InterruptsEvaluation.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ConversationAnalysis.$type, ConversationAnalysis);

function createBaseConversationAnalysis_InterruptsEvaluation(): ConversationAnalysis_InterruptsEvaluation {
  return {
    $type: "speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation",
    speakerTag: "",
    interruptsCount: 0,
    interruptsDurationMs: 0,
    interrupts: [],
  };
}

export const ConversationAnalysis_InterruptsEvaluation = {
  $type: "speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation" as const,

  encode(message: ConversationAnalysis_InterruptsEvaluation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.speakerTag !== "") {
      writer.uint32(10).string(message.speakerTag);
    }
    if (message.interruptsCount !== 0) {
      writer.uint32(16).int64(message.interruptsCount);
    }
    if (message.interruptsDurationMs !== 0) {
      writer.uint32(24).int64(message.interruptsDurationMs);
    }
    for (const v of message.interrupts) {
      AudioSegmentBoundaries.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationAnalysis_InterruptsEvaluation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationAnalysis_InterruptsEvaluation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.speakerTag = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.interruptsCount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.interruptsDurationMs = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.interrupts.push(AudioSegmentBoundaries.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationAnalysis_InterruptsEvaluation {
    return {
      $type: ConversationAnalysis_InterruptsEvaluation.$type,
      speakerTag: isSet(object.speakerTag) ? globalThis.String(object.speakerTag) : "",
      interruptsCount: isSet(object.interruptsCount) ? globalThis.Number(object.interruptsCount) : 0,
      interruptsDurationMs: isSet(object.interruptsDurationMs) ? globalThis.Number(object.interruptsDurationMs) : 0,
      interrupts: globalThis.Array.isArray(object?.interrupts)
        ? object.interrupts.map((e: any) => AudioSegmentBoundaries.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ConversationAnalysis_InterruptsEvaluation): unknown {
    const obj: any = {};
    if (message.speakerTag !== "") {
      obj.speakerTag = message.speakerTag;
    }
    if (message.interruptsCount !== 0) {
      obj.interruptsCount = Math.round(message.interruptsCount);
    }
    if (message.interruptsDurationMs !== 0) {
      obj.interruptsDurationMs = Math.round(message.interruptsDurationMs);
    }
    if (message.interrupts?.length) {
      obj.interrupts = message.interrupts.map((e) => AudioSegmentBoundaries.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationAnalysis_InterruptsEvaluation>, I>>(
    base?: I,
  ): ConversationAnalysis_InterruptsEvaluation {
    return ConversationAnalysis_InterruptsEvaluation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConversationAnalysis_InterruptsEvaluation>, I>>(
    object: I,
  ): ConversationAnalysis_InterruptsEvaluation {
    const message = createBaseConversationAnalysis_InterruptsEvaluation();
    message.speakerTag = object.speakerTag ?? "";
    message.interruptsCount = object.interruptsCount ?? 0;
    message.interruptsDurationMs = object.interruptsDurationMs ?? 0;
    message.interrupts = object.interrupts?.map((e) => AudioSegmentBoundaries.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ConversationAnalysis_InterruptsEvaluation.$type, ConversationAnalysis_InterruptsEvaluation);

function createBaseStreamingResponse(): StreamingResponse {
  return {
    $type: "speechkit.stt.v3.StreamingResponse",
    sessionUuid: undefined,
    audioCursors: undefined,
    responseWallTimeMs: 0,
    partial: undefined,
    final: undefined,
    eouUpdate: undefined,
    finalRefinement: undefined,
    statusCode: undefined,
    classifierUpdate: undefined,
    speakerAnalysis: undefined,
    conversationAnalysis: undefined,
    channelTag: "",
  };
}

export const StreamingResponse = {
  $type: "speechkit.stt.v3.StreamingResponse" as const,

  encode(message: StreamingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionUuid !== undefined) {
      SessionUuid.encode(message.sessionUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.audioCursors !== undefined) {
      AudioCursors.encode(message.audioCursors, writer.uint32(18).fork()).ldelim();
    }
    if (message.responseWallTimeMs !== 0) {
      writer.uint32(24).int64(message.responseWallTimeMs);
    }
    if (message.partial !== undefined) {
      AlternativeUpdate.encode(message.partial, writer.uint32(34).fork()).ldelim();
    }
    if (message.final !== undefined) {
      AlternativeUpdate.encode(message.final, writer.uint32(42).fork()).ldelim();
    }
    if (message.eouUpdate !== undefined) {
      EouUpdate.encode(message.eouUpdate, writer.uint32(50).fork()).ldelim();
    }
    if (message.finalRefinement !== undefined) {
      FinalRefinement.encode(message.finalRefinement, writer.uint32(58).fork()).ldelim();
    }
    if (message.statusCode !== undefined) {
      StatusCode.encode(message.statusCode, writer.uint32(66).fork()).ldelim();
    }
    if (message.classifierUpdate !== undefined) {
      RecognitionClassifierUpdate.encode(message.classifierUpdate, writer.uint32(82).fork()).ldelim();
    }
    if (message.speakerAnalysis !== undefined) {
      SpeakerAnalysis.encode(message.speakerAnalysis, writer.uint32(90).fork()).ldelim();
    }
    if (message.conversationAnalysis !== undefined) {
      ConversationAnalysis.encode(message.conversationAnalysis, writer.uint32(98).fork()).ldelim();
    }
    if (message.channelTag !== "") {
      writer.uint32(74).string(message.channelTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionUuid = SessionUuid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audioCursors = AudioCursors.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.responseWallTimeMs = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.partial = AlternativeUpdate.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.final = AlternativeUpdate.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.eouUpdate = EouUpdate.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.finalRefinement = FinalRefinement.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.statusCode = StatusCode.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.classifierUpdate = RecognitionClassifierUpdate.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.speakerAnalysis = SpeakerAnalysis.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.conversationAnalysis = ConversationAnalysis.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.channelTag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingResponse {
    return {
      $type: StreamingResponse.$type,
      sessionUuid: isSet(object.sessionUuid) ? SessionUuid.fromJSON(object.sessionUuid) : undefined,
      audioCursors: isSet(object.audioCursors) ? AudioCursors.fromJSON(object.audioCursors) : undefined,
      responseWallTimeMs: isSet(object.responseWallTimeMs) ? globalThis.Number(object.responseWallTimeMs) : 0,
      partial: isSet(object.partial) ? AlternativeUpdate.fromJSON(object.partial) : undefined,
      final: isSet(object.final) ? AlternativeUpdate.fromJSON(object.final) : undefined,
      eouUpdate: isSet(object.eouUpdate) ? EouUpdate.fromJSON(object.eouUpdate) : undefined,
      finalRefinement: isSet(object.finalRefinement) ? FinalRefinement.fromJSON(object.finalRefinement) : undefined,
      statusCode: isSet(object.statusCode) ? StatusCode.fromJSON(object.statusCode) : undefined,
      classifierUpdate: isSet(object.classifierUpdate)
        ? RecognitionClassifierUpdate.fromJSON(object.classifierUpdate)
        : undefined,
      speakerAnalysis: isSet(object.speakerAnalysis) ? SpeakerAnalysis.fromJSON(object.speakerAnalysis) : undefined,
      conversationAnalysis: isSet(object.conversationAnalysis)
        ? ConversationAnalysis.fromJSON(object.conversationAnalysis)
        : undefined,
      channelTag: isSet(object.channelTag) ? globalThis.String(object.channelTag) : "",
    };
  },

  toJSON(message: StreamingResponse): unknown {
    const obj: any = {};
    if (message.sessionUuid !== undefined) {
      obj.sessionUuid = SessionUuid.toJSON(message.sessionUuid);
    }
    if (message.audioCursors !== undefined) {
      obj.audioCursors = AudioCursors.toJSON(message.audioCursors);
    }
    if (message.responseWallTimeMs !== 0) {
      obj.responseWallTimeMs = Math.round(message.responseWallTimeMs);
    }
    if (message.partial !== undefined) {
      obj.partial = AlternativeUpdate.toJSON(message.partial);
    }
    if (message.final !== undefined) {
      obj.final = AlternativeUpdate.toJSON(message.final);
    }
    if (message.eouUpdate !== undefined) {
      obj.eouUpdate = EouUpdate.toJSON(message.eouUpdate);
    }
    if (message.finalRefinement !== undefined) {
      obj.finalRefinement = FinalRefinement.toJSON(message.finalRefinement);
    }
    if (message.statusCode !== undefined) {
      obj.statusCode = StatusCode.toJSON(message.statusCode);
    }
    if (message.classifierUpdate !== undefined) {
      obj.classifierUpdate = RecognitionClassifierUpdate.toJSON(message.classifierUpdate);
    }
    if (message.speakerAnalysis !== undefined) {
      obj.speakerAnalysis = SpeakerAnalysis.toJSON(message.speakerAnalysis);
    }
    if (message.conversationAnalysis !== undefined) {
      obj.conversationAnalysis = ConversationAnalysis.toJSON(message.conversationAnalysis);
    }
    if (message.channelTag !== "") {
      obj.channelTag = message.channelTag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamingResponse>, I>>(base?: I): StreamingResponse {
    return StreamingResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamingResponse>, I>>(object: I): StreamingResponse {
    const message = createBaseStreamingResponse();
    message.sessionUuid = (object.sessionUuid !== undefined && object.sessionUuid !== null)
      ? SessionUuid.fromPartial(object.sessionUuid)
      : undefined;
    message.audioCursors = (object.audioCursors !== undefined && object.audioCursors !== null)
      ? AudioCursors.fromPartial(object.audioCursors)
      : undefined;
    message.responseWallTimeMs = object.responseWallTimeMs ?? 0;
    message.partial = (object.partial !== undefined && object.partial !== null)
      ? AlternativeUpdate.fromPartial(object.partial)
      : undefined;
    message.final = (object.final !== undefined && object.final !== null)
      ? AlternativeUpdate.fromPartial(object.final)
      : undefined;
    message.eouUpdate = (object.eouUpdate !== undefined && object.eouUpdate !== null)
      ? EouUpdate.fromPartial(object.eouUpdate)
      : undefined;
    message.finalRefinement = (object.finalRefinement !== undefined && object.finalRefinement !== null)
      ? FinalRefinement.fromPartial(object.finalRefinement)
      : undefined;
    message.statusCode = (object.statusCode !== undefined && object.statusCode !== null)
      ? StatusCode.fromPartial(object.statusCode)
      : undefined;
    message.classifierUpdate = (object.classifierUpdate !== undefined && object.classifierUpdate !== null)
      ? RecognitionClassifierUpdate.fromPartial(object.classifierUpdate)
      : undefined;
    message.speakerAnalysis = (object.speakerAnalysis !== undefined && object.speakerAnalysis !== null)
      ? SpeakerAnalysis.fromPartial(object.speakerAnalysis)
      : undefined;
    message.conversationAnalysis = (object.conversationAnalysis !== undefined && object.conversationAnalysis !== null)
      ? ConversationAnalysis.fromPartial(object.conversationAnalysis)
      : undefined;
    message.channelTag = object.channelTag ?? "";
    return message;
  },
};

messageTypeRegistry.set(StreamingResponse.$type, StreamingResponse);

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
