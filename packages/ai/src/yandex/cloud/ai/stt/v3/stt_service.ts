/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientDuplexStream,
  ClientReadableStream,
  handleBidiStreamingCall,
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
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { RecognizeFileRequest, StreamingRequest, StreamingResponse } from "./stt";

export const protobufPackage = "speechkit.stt.v3";

export interface GetRecognitionRequest {
  $type: "speechkit.stt.v3.GetRecognitionRequest";
  operationId: string;
}

function createBaseGetRecognitionRequest(): GetRecognitionRequest {
  return { $type: "speechkit.stt.v3.GetRecognitionRequest", operationId: "" };
}

export const GetRecognitionRequest = {
  $type: "speechkit.stt.v3.GetRecognitionRequest" as const,

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

/** A set of methods for voice recognition. */
export type RecognizerService = typeof RecognizerService;
export const RecognizerService = {
  /** Expects audio in real-time */
  recognizeStreaming: {
    path: "/speechkit.stt.v3.Recognizer/RecognizeStreaming",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: StreamingRequest) => Buffer.from(StreamingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StreamingRequest.decode(value),
    responseSerialize: (value: StreamingResponse) => Buffer.from(StreamingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamingResponse.decode(value),
  },
} as const;

export interface RecognizerServer extends UntypedServiceImplementation {
  /** Expects audio in real-time */
  recognizeStreaming: handleBidiStreamingCall<StreamingRequest, StreamingResponse>;
}

export interface RecognizerClient extends Client {
  /** Expects audio in real-time */
  recognizeStreaming(): ClientDuplexStream<StreamingRequest, StreamingResponse>;
  recognizeStreaming(options: Partial<CallOptions>): ClientDuplexStream<StreamingRequest, StreamingResponse>;
  recognizeStreaming(
    metadata: Metadata,
    options?: Partial<CallOptions>,
  ): ClientDuplexStream<StreamingRequest, StreamingResponse>;
}

export const RecognizerClient = makeGenericClientConstructor(
  RecognizerService,
  "speechkit.stt.v3.Recognizer",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RecognizerClient;
  service: typeof RecognizerService;
  serviceName: string;
};

/** A set of methods for async voice recognition. */
export type AsyncRecognizerService = typeof AsyncRecognizerService;
export const AsyncRecognizerService = {
  recognizeFile: {
    path: "/speechkit.stt.v3.AsyncRecognizer/RecognizeFile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RecognizeFileRequest) => Buffer.from(RecognizeFileRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RecognizeFileRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  getRecognition: {
    path: "/speechkit.stt.v3.AsyncRecognizer/GetRecognition",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetRecognitionRequest) => Buffer.from(GetRecognitionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRecognitionRequest.decode(value),
    responseSerialize: (value: StreamingResponse) => Buffer.from(StreamingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamingResponse.decode(value),
  },
} as const;

export interface AsyncRecognizerServer extends UntypedServiceImplementation {
  recognizeFile: handleUnaryCall<RecognizeFileRequest, Operation>;
  getRecognition: handleServerStreamingCall<GetRecognitionRequest, StreamingResponse>;
}

export interface AsyncRecognizerClient extends Client {
  recognizeFile(
    request: RecognizeFileRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  recognizeFile(
    request: RecognizeFileRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  recognizeFile(
    request: RecognizeFileRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  getRecognition(
    request: GetRecognitionRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<StreamingResponse>;
  getRecognition(
    request: GetRecognitionRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<StreamingResponse>;
}

export const AsyncRecognizerClient = makeGenericClientConstructor(
  AsyncRecognizerService,
  "speechkit.stt.v3.AsyncRecognizer",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AsyncRecognizerClient;
  service: typeof AsyncRecognizerService;
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
