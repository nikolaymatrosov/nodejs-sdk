/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientReadableStream,
  handleServerStreamingCall,
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
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { TextAnnotation } from "./ocr";

export const protobufPackage = "yandex.cloud.ai.ocr.v1";

export interface RecognizeTextRequest {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest";
  /** Bytes with data */
  content?:
    | Buffer
    | undefined;
  /**
   * Specifications of the ([MIME type](https://en.wikipedia.org/wiki/Media_type)). Each specification contains the file to analyze and features to use for analysis. Restrictions:
   * * Supported file formats: `JPEG`, `PNG`, `WEBP`, `PDF`.
   * * Maximum file size: 20 MB.
   * * Image size should not exceed 20M pixels (length x width).
   * * The number of pages in a PDF file should not exceed 200 (each page counts as 1 request).
   */
  mimeType: string;
  /**
   * List of the languages to recognize text.
   * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `ru`).
   */
  languageCodes: string[];
  /**
   * Model to use for text detection. The maximum string length is 50 characters. Possible values:
   * * `page` (default): this model is suitable for detecting multiple text entries in an image.
   * * `passport`: passport, the main double-page spread.
   * * `driver-license-front`: driver's license, the front side.
   * * `driver-license-back`: driver's license, the reverse side.
   * * `vehicle-registration-front`: front side of the vehicle registration certificate.
   * * `vehicle-registration-back`: back side of the vehicle registration certificate.
   */
  model: string;
}

export interface RecognizeTextResponse {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse";
  /** Recognized text blocks in this page or text from entities. */
  textAnnotation?:
    | TextAnnotation
    | undefined;
  /** Page number in PDF file. */
  page: number;
}

export interface GetRecognitionRequest {
  $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest";
  /** Operation ID of async recognition request. */
  operationId: string;
}

function createBaseRecognizeTextRequest(): RecognizeTextRequest {
  return {
    $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest",
    content: undefined,
    mimeType: "",
    languageCodes: [],
    model: "",
  };
}

export const RecognizeTextRequest = {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest" as const,

  encode(message: RecognizeTextRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.mimeType !== "") {
      writer.uint32(18).string(message.mimeType);
    }
    for (const v of message.languageCodes) {
      writer.uint32(26).string(v!);
    }
    if (message.model !== "") {
      writer.uint32(34).string(message.model);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognizeTextRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognizeTextRequest();
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

          message.mimeType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.languageCodes.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): RecognizeTextRequest {
    return {
      $type: RecognizeTextRequest.$type,
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : undefined,
      mimeType: isSet(object.mimeType) ? globalThis.String(object.mimeType) : "",
      languageCodes: globalThis.Array.isArray(object?.languageCodes)
        ? object.languageCodes.map((e: any) => globalThis.String(e))
        : [],
      model: isSet(object.model) ? globalThis.String(object.model) : "",
    };
  },

  toJSON(message: RecognizeTextRequest): unknown {
    const obj: any = {};
    if (message.content !== undefined) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.mimeType !== "") {
      obj.mimeType = message.mimeType;
    }
    if (message.languageCodes?.length) {
      obj.languageCodes = message.languageCodes;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognizeTextRequest>, I>>(base?: I): RecognizeTextRequest {
    return RecognizeTextRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognizeTextRequest>, I>>(object: I): RecognizeTextRequest {
    const message = createBaseRecognizeTextRequest();
    message.content = object.content ?? undefined;
    message.mimeType = object.mimeType ?? "";
    message.languageCodes = object.languageCodes?.map((e) => e) || [];
    message.model = object.model ?? "";
    return message;
  },
};

messageTypeRegistry.set(RecognizeTextRequest.$type, RecognizeTextRequest);

function createBaseRecognizeTextResponse(): RecognizeTextResponse {
  return { $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse", textAnnotation: undefined, page: 0 };
}

export const RecognizeTextResponse = {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse" as const,

  encode(message: RecognizeTextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.textAnnotation !== undefined) {
      TextAnnotation.encode(message.textAnnotation, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== 0) {
      writer.uint32(16).int64(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognizeTextResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecognizeTextResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.textAnnotation = TextAnnotation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecognizeTextResponse {
    return {
      $type: RecognizeTextResponse.$type,
      textAnnotation: isSet(object.textAnnotation) ? TextAnnotation.fromJSON(object.textAnnotation) : undefined,
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
    };
  },

  toJSON(message: RecognizeTextResponse): unknown {
    const obj: any = {};
    if (message.textAnnotation !== undefined) {
      obj.textAnnotation = TextAnnotation.toJSON(message.textAnnotation);
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecognizeTextResponse>, I>>(base?: I): RecognizeTextResponse {
    return RecognizeTextResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecognizeTextResponse>, I>>(object: I): RecognizeTextResponse {
    const message = createBaseRecognizeTextResponse();
    message.textAnnotation = (object.textAnnotation !== undefined && object.textAnnotation !== null)
      ? TextAnnotation.fromPartial(object.textAnnotation)
      : undefined;
    message.page = object.page ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RecognizeTextResponse.$type, RecognizeTextResponse);

function createBaseGetRecognitionRequest(): GetRecognitionRequest {
  return { $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest", operationId: "" };
}

export const GetRecognitionRequest = {
  $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest" as const,

  encode(message: GetRecognitionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRecognitionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRecognitionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRecognitionRequest {
    return {
      $type: GetRecognitionRequest.$type,
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
    };
  },

  toJSON(message: GetRecognitionRequest): unknown {
    const obj: any = {};
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRecognitionRequest>, I>>(base?: I): GetRecognitionRequest {
    return GetRecognitionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRecognitionRequest>, I>>(object: I): GetRecognitionRequest {
    const message = createBaseGetRecognitionRequest();
    message.operationId = object.operationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetRecognitionRequest.$type, GetRecognitionRequest);

/** A set of methods for the Vision OCR service. */
export type TextRecognitionServiceService = typeof TextRecognitionServiceService;
export const TextRecognitionServiceService = {
  /** To send the image for text recognition. */
  recognize: {
    path: "/yandex.cloud.ai.ocr.v1.TextRecognitionService/Recognize",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: RecognizeTextRequest) => Buffer.from(RecognizeTextRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RecognizeTextRequest.decode(value),
    responseSerialize: (value: RecognizeTextResponse) => Buffer.from(RecognizeTextResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RecognizeTextResponse.decode(value),
  },
} as const;

export interface TextRecognitionServiceServer extends UntypedServiceImplementation {
  /** To send the image for text recognition. */
  recognize: handleServerStreamingCall<RecognizeTextRequest, RecognizeTextResponse>;
}

export interface TextRecognitionServiceClient extends Client {
  /** To send the image for text recognition. */
  recognize(request: RecognizeTextRequest, options?: Partial<CallOptions>): ClientReadableStream<RecognizeTextResponse>;
  recognize(
    request: RecognizeTextRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<RecognizeTextResponse>;
}

export const TextRecognitionServiceClient = makeGenericClientConstructor(
  TextRecognitionServiceService,
  "yandex.cloud.ai.ocr.v1.TextRecognitionService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): TextRecognitionServiceClient;
  service: typeof TextRecognitionServiceService;
};

/** A set of methods for managing operations for asynchronous API requests. */
export type TextRecognitionAsyncServiceService = typeof TextRecognitionAsyncServiceService;
export const TextRecognitionAsyncServiceService = {
  /** To send the image for asynchronous text recognition. */
  recognize: {
    path: "/yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService/Recognize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RecognizeTextRequest) => Buffer.from(RecognizeTextRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RecognizeTextRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** To get recognition results. */
  getRecognition: {
    path: "/yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService/GetRecognition",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetRecognitionRequest) => Buffer.from(GetRecognitionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRecognitionRequest.decode(value),
    responseSerialize: (value: RecognizeTextResponse) => Buffer.from(RecognizeTextResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RecognizeTextResponse.decode(value),
  },
} as const;

export interface TextRecognitionAsyncServiceServer extends UntypedServiceImplementation {
  /** To send the image for asynchronous text recognition. */
  recognize: handleUnaryCall<RecognizeTextRequest, Operation>;
  /** To get recognition results. */
  getRecognition: handleServerStreamingCall<GetRecognitionRequest, RecognizeTextResponse>;
}

export interface TextRecognitionAsyncServiceClient extends Client {
  /** To send the image for asynchronous text recognition. */
  recognize(
    request: RecognizeTextRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  recognize(
    request: RecognizeTextRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  recognize(
    request: RecognizeTextRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** To get recognition results. */
  getRecognition(
    request: GetRecognitionRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<RecognizeTextResponse>;
  getRecognition(
    request: GetRecognitionRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<RecognizeTextResponse>;
}

export const TextRecognitionAsyncServiceClient = makeGenericClientConstructor(
  TextRecognitionAsyncServiceService,
  "yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): TextRecognitionAsyncServiceClient;
  service: typeof TextRecognitionAsyncServiceService;
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
