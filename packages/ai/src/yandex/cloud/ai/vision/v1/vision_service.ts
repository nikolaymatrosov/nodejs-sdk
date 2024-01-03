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
import { Status } from "@yandex-cloud/core/dist/generated/google/rpc/status";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { ClassAnnotation } from "./classification";
import { FaceAnnotation } from "./face_detection";
import { ImageCopySearchAnnotation } from "./image_copy_search";
import { TextAnnotation } from "./text_detection";

export const protobufPackage = "yandex.cloud.ai.vision.v1";

export interface BatchAnalyzeRequest {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeRequest";
  /**
   * A list of specifications. Each specification contains the file to analyze and features to use for analysis.
   *
   * Restrictions:
   * * Supported file formats: `JPEG`, `PNG`.
   * * Maximum file size: 1 MB.
   * * Image size should not exceed 20M pixels (length x width).
   */
  analyzeSpecs: AnalyzeSpec[];
  /**
   * ID of the folder to which you have access.
   * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
   * Don't specify this field if you make the request on behalf of a service account.
   */
  folderId: string;
}

export interface AnalyzeSpec {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeSpec";
  /**
   * Image content, represented as a stream of bytes.
   * Note: As with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
   */
  content?: Buffer | undefined;
  signature?:
    | string
    | undefined;
  /**
   * Requested features to use for analysis.
   *
   * Max count of requested features for one file is 8.
   */
  features: Feature[];
  /** [MIME type](https://en.wikipedia.org/wiki/Media_type) of content (for example, `` application/pdf ``). */
  mimeType: string;
}

export interface Feature {
  $type: "yandex.cloud.ai.vision.v1.Feature";
  /** Type of requested feature. */
  type: Feature_Type;
  /** Required for the `CLASSIFICATION` type. Specifies configuration for the classification feature. */
  classificationConfig?:
    | FeatureClassificationConfig
    | undefined;
  /** Required for the `TEXT_DETECTION` type. Specifies configuration for the text detection (OCR) feature. */
  textDetectionConfig?: FeatureTextDetectionConfig | undefined;
}

export enum Feature_Type {
  TYPE_UNSPECIFIED = 0,
  /** TEXT_DETECTION - Text detection (OCR) feature. */
  TEXT_DETECTION = 1,
  /** CLASSIFICATION - Classification feature. */
  CLASSIFICATION = 2,
  /** FACE_DETECTION - Face detection feature. */
  FACE_DETECTION = 3,
  /** IMAGE_COPY_SEARCH - Image copy search. */
  IMAGE_COPY_SEARCH = 4,
  UNRECOGNIZED = -1,
}

export function feature_TypeFromJSON(object: any): Feature_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Feature_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TEXT_DETECTION":
      return Feature_Type.TEXT_DETECTION;
    case 2:
    case "CLASSIFICATION":
      return Feature_Type.CLASSIFICATION;
    case 3:
    case "FACE_DETECTION":
      return Feature_Type.FACE_DETECTION;
    case 4:
    case "IMAGE_COPY_SEARCH":
      return Feature_Type.IMAGE_COPY_SEARCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Feature_Type.UNRECOGNIZED;
  }
}

export function feature_TypeToJSON(object: Feature_Type): string {
  switch (object) {
    case Feature_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Feature_Type.TEXT_DETECTION:
      return "TEXT_DETECTION";
    case Feature_Type.CLASSIFICATION:
      return "CLASSIFICATION";
    case Feature_Type.FACE_DETECTION:
      return "FACE_DETECTION";
    case Feature_Type.IMAGE_COPY_SEARCH:
      return "IMAGE_COPY_SEARCH";
    case Feature_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FeatureClassificationConfig {
  $type: "yandex.cloud.ai.vision.v1.FeatureClassificationConfig";
  /** Model to use for image classification. */
  model: string;
}

export interface FeatureTextDetectionConfig {
  $type: "yandex.cloud.ai.vision.v1.FeatureTextDetectionConfig";
  /**
   * List of the languages to recognize text.
   * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `ru`).
   */
  languageCodes: string[];
  /**
   * Model to use for text detection.
   * Possible values:
   * * `page` (default): this model is suitable for detecting multiple text entries in an image.
   * * `line`: this model is suitable for cropped images with one line of text.
   */
  model: string;
}

export interface BatchAnalyzeResponse {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeResponse";
  /**
   * Request results.
   * Results have the same order as specifications in the request.
   */
  results: AnalyzeResult[];
}

export interface AnalyzeResult {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeResult";
  /**
   * Results for each requested feature.
   * Feature results have the same order as in the request.
   */
  results: FeatureResult[];
  /** Return error in case of error with file processing. */
  error?: Status | undefined;
}

export interface FeatureResult {
  $type: "yandex.cloud.ai.vision.v1.FeatureResult";
  /** Text detection (OCR) result. */
  textDetection?:
    | TextAnnotation
    | undefined;
  /** Classification result. */
  classification?:
    | ClassAnnotation
    | undefined;
  /** Face detection result. */
  faceDetection?:
    | FaceAnnotation
    | undefined;
  /** Image Copy Search result. */
  imageCopySearch?:
    | ImageCopySearchAnnotation
    | undefined;
  /** Return error in case of error during the specified feature processing. */
  error?: Status | undefined;
}

function createBaseBatchAnalyzeRequest(): BatchAnalyzeRequest {
  return { $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeRequest", analyzeSpecs: [], folderId: "" };
}

export const BatchAnalyzeRequest = {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeRequest" as const,

  encode(message: BatchAnalyzeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.analyzeSpecs) {
      AnalyzeSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchAnalyzeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchAnalyzeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.analyzeSpecs.push(AnalyzeSpec.decode(reader, reader.uint32()));
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

  fromJSON(object: any): BatchAnalyzeRequest {
    return {
      $type: BatchAnalyzeRequest.$type,
      analyzeSpecs: globalThis.Array.isArray(object?.analyzeSpecs)
        ? object.analyzeSpecs.map((e: any) => AnalyzeSpec.fromJSON(e))
        : [],
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: BatchAnalyzeRequest): unknown {
    const obj: any = {};
    if (message.analyzeSpecs?.length) {
      obj.analyzeSpecs = message.analyzeSpecs.map((e) => AnalyzeSpec.toJSON(e));
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BatchAnalyzeRequest>, I>>(base?: I): BatchAnalyzeRequest {
    return BatchAnalyzeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BatchAnalyzeRequest>, I>>(object: I): BatchAnalyzeRequest {
    const message = createBaseBatchAnalyzeRequest();
    message.analyzeSpecs = object.analyzeSpecs?.map((e) => AnalyzeSpec.fromPartial(e)) || [];
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BatchAnalyzeRequest.$type, BatchAnalyzeRequest);

function createBaseAnalyzeSpec(): AnalyzeSpec {
  return {
    $type: "yandex.cloud.ai.vision.v1.AnalyzeSpec",
    content: undefined,
    signature: undefined,
    features: [],
    mimeType: "",
  };
}

export const AnalyzeSpec = {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeSpec" as const,

  encode(message: AnalyzeSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.signature !== undefined) {
      writer.uint32(42).string(message.signature);
    }
    for (const v of message.features) {
      Feature.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.mimeType !== "") {
      writer.uint32(34).string(message.mimeType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzeSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzeSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes() as Buffer;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.signature = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.features.push(Feature.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mimeType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzeSpec {
    return {
      $type: AnalyzeSpec.$type,
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : undefined,
      signature: isSet(object.signature) ? globalThis.String(object.signature) : undefined,
      features: globalThis.Array.isArray(object?.features) ? object.features.map((e: any) => Feature.fromJSON(e)) : [],
      mimeType: isSet(object.mimeType) ? globalThis.String(object.mimeType) : "",
    };
  },

  toJSON(message: AnalyzeSpec): unknown {
    const obj: any = {};
    if (message.content !== undefined) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.signature !== undefined) {
      obj.signature = message.signature;
    }
    if (message.features?.length) {
      obj.features = message.features.map((e) => Feature.toJSON(e));
    }
    if (message.mimeType !== "") {
      obj.mimeType = message.mimeType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzeSpec>, I>>(base?: I): AnalyzeSpec {
    return AnalyzeSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzeSpec>, I>>(object: I): AnalyzeSpec {
    const message = createBaseAnalyzeSpec();
    message.content = object.content ?? undefined;
    message.signature = object.signature ?? undefined;
    message.features = object.features?.map((e) => Feature.fromPartial(e)) || [];
    message.mimeType = object.mimeType ?? "";
    return message;
  },
};

messageTypeRegistry.set(AnalyzeSpec.$type, AnalyzeSpec);

function createBaseFeature(): Feature {
  return {
    $type: "yandex.cloud.ai.vision.v1.Feature",
    type: 0,
    classificationConfig: undefined,
    textDetectionConfig: undefined,
  };
}

export const Feature = {
  $type: "yandex.cloud.ai.vision.v1.Feature" as const,

  encode(message: Feature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.classificationConfig !== undefined) {
      FeatureClassificationConfig.encode(message.classificationConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.textDetectionConfig !== undefined) {
      FeatureTextDetectionConfig.encode(message.textDetectionConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feature {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeature();
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
          if (tag !== 18) {
            break;
          }

          message.classificationConfig = FeatureClassificationConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.textDetectionConfig = FeatureTextDetectionConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Feature {
    return {
      $type: Feature.$type,
      type: isSet(object.type) ? feature_TypeFromJSON(object.type) : 0,
      classificationConfig: isSet(object.classificationConfig)
        ? FeatureClassificationConfig.fromJSON(object.classificationConfig)
        : undefined,
      textDetectionConfig: isSet(object.textDetectionConfig)
        ? FeatureTextDetectionConfig.fromJSON(object.textDetectionConfig)
        : undefined,
    };
  },

  toJSON(message: Feature): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = feature_TypeToJSON(message.type);
    }
    if (message.classificationConfig !== undefined) {
      obj.classificationConfig = FeatureClassificationConfig.toJSON(message.classificationConfig);
    }
    if (message.textDetectionConfig !== undefined) {
      obj.textDetectionConfig = FeatureTextDetectionConfig.toJSON(message.textDetectionConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Feature>, I>>(base?: I): Feature {
    return Feature.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Feature>, I>>(object: I): Feature {
    const message = createBaseFeature();
    message.type = object.type ?? 0;
    message.classificationConfig = (object.classificationConfig !== undefined && object.classificationConfig !== null)
      ? FeatureClassificationConfig.fromPartial(object.classificationConfig)
      : undefined;
    message.textDetectionConfig = (object.textDetectionConfig !== undefined && object.textDetectionConfig !== null)
      ? FeatureTextDetectionConfig.fromPartial(object.textDetectionConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Feature.$type, Feature);

function createBaseFeatureClassificationConfig(): FeatureClassificationConfig {
  return { $type: "yandex.cloud.ai.vision.v1.FeatureClassificationConfig", model: "" };
}

export const FeatureClassificationConfig = {
  $type: "yandex.cloud.ai.vision.v1.FeatureClassificationConfig" as const,

  encode(message: FeatureClassificationConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureClassificationConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureClassificationConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.model = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeatureClassificationConfig {
    return {
      $type: FeatureClassificationConfig.$type,
      model: isSet(object.model) ? globalThis.String(object.model) : "",
    };
  },

  toJSON(message: FeatureClassificationConfig): unknown {
    const obj: any = {};
    if (message.model !== "") {
      obj.model = message.model;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeatureClassificationConfig>, I>>(base?: I): FeatureClassificationConfig {
    return FeatureClassificationConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeatureClassificationConfig>, I>>(object: I): FeatureClassificationConfig {
    const message = createBaseFeatureClassificationConfig();
    message.model = object.model ?? "";
    return message;
  },
};

messageTypeRegistry.set(FeatureClassificationConfig.$type, FeatureClassificationConfig);

function createBaseFeatureTextDetectionConfig(): FeatureTextDetectionConfig {
  return { $type: "yandex.cloud.ai.vision.v1.FeatureTextDetectionConfig", languageCodes: [], model: "" };
}

export const FeatureTextDetectionConfig = {
  $type: "yandex.cloud.ai.vision.v1.FeatureTextDetectionConfig" as const,

  encode(message: FeatureTextDetectionConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.languageCodes) {
      writer.uint32(10).string(v!);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureTextDetectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureTextDetectionConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.languageCodes.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.model = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeatureTextDetectionConfig {
    return {
      $type: FeatureTextDetectionConfig.$type,
      languageCodes: globalThis.Array.isArray(object?.languageCodes)
        ? object.languageCodes.map((e: any) => globalThis.String(e))
        : [],
      model: isSet(object.model) ? globalThis.String(object.model) : "",
    };
  },

  toJSON(message: FeatureTextDetectionConfig): unknown {
    const obj: any = {};
    if (message.languageCodes?.length) {
      obj.languageCodes = message.languageCodes;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeatureTextDetectionConfig>, I>>(base?: I): FeatureTextDetectionConfig {
    return FeatureTextDetectionConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeatureTextDetectionConfig>, I>>(object: I): FeatureTextDetectionConfig {
    const message = createBaseFeatureTextDetectionConfig();
    message.languageCodes = object.languageCodes?.map((e) => e) || [];
    message.model = object.model ?? "";
    return message;
  },
};

messageTypeRegistry.set(FeatureTextDetectionConfig.$type, FeatureTextDetectionConfig);

function createBaseBatchAnalyzeResponse(): BatchAnalyzeResponse {
  return { $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeResponse", results: [] };
}

export const BatchAnalyzeResponse = {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeResponse" as const,

  encode(message: BatchAnalyzeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      AnalyzeResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchAnalyzeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchAnalyzeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(AnalyzeResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchAnalyzeResponse {
    return {
      $type: BatchAnalyzeResponse.$type,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => AnalyzeResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchAnalyzeResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => AnalyzeResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BatchAnalyzeResponse>, I>>(base?: I): BatchAnalyzeResponse {
    return BatchAnalyzeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BatchAnalyzeResponse>, I>>(object: I): BatchAnalyzeResponse {
    const message = createBaseBatchAnalyzeResponse();
    message.results = object.results?.map((e) => AnalyzeResult.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(BatchAnalyzeResponse.$type, BatchAnalyzeResponse);

function createBaseAnalyzeResult(): AnalyzeResult {
  return { $type: "yandex.cloud.ai.vision.v1.AnalyzeResult", results: [], error: undefined };
}

export const AnalyzeResult = {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeResult" as const,

  encode(message: AnalyzeResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      FeatureResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzeResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzeResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(FeatureResult.decode(reader, reader.uint32()));
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzeResult {
    return {
      $type: AnalyzeResult.$type,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => FeatureResult.fromJSON(e))
        : [],
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AnalyzeResult): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => FeatureResult.toJSON(e));
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalyzeResult>, I>>(base?: I): AnalyzeResult {
    return AnalyzeResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnalyzeResult>, I>>(object: I): AnalyzeResult {
    const message = createBaseAnalyzeResult();
    message.results = object.results?.map((e) => FeatureResult.fromPartial(e)) || [];
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AnalyzeResult.$type, AnalyzeResult);

function createBaseFeatureResult(): FeatureResult {
  return {
    $type: "yandex.cloud.ai.vision.v1.FeatureResult",
    textDetection: undefined,
    classification: undefined,
    faceDetection: undefined,
    imageCopySearch: undefined,
    error: undefined,
  };
}

export const FeatureResult = {
  $type: "yandex.cloud.ai.vision.v1.FeatureResult" as const,

  encode(message: FeatureResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.textDetection !== undefined) {
      TextAnnotation.encode(message.textDetection, writer.uint32(18).fork()).ldelim();
    }
    if (message.classification !== undefined) {
      ClassAnnotation.encode(message.classification, writer.uint32(26).fork()).ldelim();
    }
    if (message.faceDetection !== undefined) {
      FaceAnnotation.encode(message.faceDetection, writer.uint32(34).fork()).ldelim();
    }
    if (message.imageCopySearch !== undefined) {
      ImageCopySearchAnnotation.encode(message.imageCopySearch, writer.uint32(42).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.textDetection = TextAnnotation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classification = ClassAnnotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.faceDetection = FaceAnnotation.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.imageCopySearch = ImageCopySearchAnnotation.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeatureResult {
    return {
      $type: FeatureResult.$type,
      textDetection: isSet(object.textDetection) ? TextAnnotation.fromJSON(object.textDetection) : undefined,
      classification: isSet(object.classification) ? ClassAnnotation.fromJSON(object.classification) : undefined,
      faceDetection: isSet(object.faceDetection) ? FaceAnnotation.fromJSON(object.faceDetection) : undefined,
      imageCopySearch: isSet(object.imageCopySearch)
        ? ImageCopySearchAnnotation.fromJSON(object.imageCopySearch)
        : undefined,
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: FeatureResult): unknown {
    const obj: any = {};
    if (message.textDetection !== undefined) {
      obj.textDetection = TextAnnotation.toJSON(message.textDetection);
    }
    if (message.classification !== undefined) {
      obj.classification = ClassAnnotation.toJSON(message.classification);
    }
    if (message.faceDetection !== undefined) {
      obj.faceDetection = FaceAnnotation.toJSON(message.faceDetection);
    }
    if (message.imageCopySearch !== undefined) {
      obj.imageCopySearch = ImageCopySearchAnnotation.toJSON(message.imageCopySearch);
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeatureResult>, I>>(base?: I): FeatureResult {
    return FeatureResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeatureResult>, I>>(object: I): FeatureResult {
    const message = createBaseFeatureResult();
    message.textDetection = (object.textDetection !== undefined && object.textDetection !== null)
      ? TextAnnotation.fromPartial(object.textDetection)
      : undefined;
    message.classification = (object.classification !== undefined && object.classification !== null)
      ? ClassAnnotation.fromPartial(object.classification)
      : undefined;
    message.faceDetection = (object.faceDetection !== undefined && object.faceDetection !== null)
      ? FaceAnnotation.fromPartial(object.faceDetection)
      : undefined;
    message.imageCopySearch = (object.imageCopySearch !== undefined && object.imageCopySearch !== null)
      ? ImageCopySearchAnnotation.fromPartial(object.imageCopySearch)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(FeatureResult.$type, FeatureResult);

/** A set of methods for the Vision service. */
export type VisionServiceService = typeof VisionServiceService;
export const VisionServiceService = {
  /** Analyzes a batch of images and returns results with annotations. */
  batchAnalyze: {
    path: "/yandex.cloud.ai.vision.v1.VisionService/BatchAnalyze",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BatchAnalyzeRequest) => Buffer.from(BatchAnalyzeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BatchAnalyzeRequest.decode(value),
    responseSerialize: (value: BatchAnalyzeResponse) => Buffer.from(BatchAnalyzeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BatchAnalyzeResponse.decode(value),
  },
} as const;

export interface VisionServiceServer extends UntypedServiceImplementation {
  /** Analyzes a batch of images and returns results with annotations. */
  batchAnalyze: handleUnaryCall<BatchAnalyzeRequest, BatchAnalyzeResponse>;
}

export interface VisionServiceClient extends Client {
  /** Analyzes a batch of images and returns results with annotations. */
  batchAnalyze(
    request: BatchAnalyzeRequest,
    callback: (error: ServiceError | null, response: BatchAnalyzeResponse) => void,
  ): ClientUnaryCall;
  batchAnalyze(
    request: BatchAnalyzeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BatchAnalyzeResponse) => void,
  ): ClientUnaryCall;
  batchAnalyze(
    request: BatchAnalyzeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BatchAnalyzeResponse) => void,
  ): ClientUnaryCall;
}

export const VisionServiceClient = makeGenericClientConstructor(
  VisionServiceService,
  "yandex.cloud.ai.vision.v1.VisionService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): VisionServiceClient;
  service: typeof VisionServiceService;
  serviceName: string;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
