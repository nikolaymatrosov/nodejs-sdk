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
import { Alternative, CompletionOptions, ContentUsage, Message, Token } from "./foundation_models";

export const protobufPackage = "yandex.cloud.ai.foundation_models.v1";

/** Request for the service to generate text completion. */
export interface CompletionRequest {
  $type: "yandex.cloud.ai.foundation_models.v1.CompletionRequest";
  /** The identifier of the model to be used for completion generation. */
  modelUri: string;
  /** Configuration options for completion generation. */
  completionOptions?:
    | CompletionOptions
    | undefined;
  /** A list of messages representing the context for the completion model. */
  messages: Message[];
}

/** Response containing generated text completions */
export interface CompletionResponse {
  $type: "yandex.cloud.ai.foundation_models.v1.CompletionResponse";
  /** A list of generated completion alternatives. */
  alternatives: Alternative[];
  /** A set of statistics describing the number of content tokens used by the completion model. */
  usage?:
    | ContentUsage
    | undefined;
  /** Model version (changes with model releases). */
  modelVersion: string;
}

/** Request for the service to tokenize input text. */
export interface TokenizeRequest {
  $type: "yandex.cloud.ai.foundation_models.v1.TokenizeRequest";
  /** The identifier of the model to be used for tokenization. */
  modelUri: string;
  /** Text to be tokenized. */
  text: string;
}

/** Response containing tokenized content from request. */
export interface TokenizeResponse {
  $type: "yandex.cloud.ai.foundation_models.v1.TokenizeResponse";
  /** A list of tokens obtained from tokenization. */
  tokens: Token[];
  /** Model version (changes with model releases). */
  modelVersion: string;
}

/** Request for the service to obtain text embeddings. */
export interface TextEmbeddingRequest {
  $type: "yandex.cloud.ai.foundation_models.v1.TextEmbeddingRequest";
  /** The identifier of the model to be used for obtaining text embeddings. */
  modelUri: string;
  /** The input text for which the embedding is requested. */
  text: string;
}

/** Response containing generated text embedding. */
export interface TextEmbeddingResponse {
  $type: "yandex.cloud.ai.foundation_models.v1.TextEmbeddingResponse";
  /** A repeated list of double values representing the embedding. */
  embedding: number[];
  /** The number of tokens in the input text. */
  numTokens: number;
  /** Model version (changes with model releases). */
  modelVersion: string;
}

function createBaseCompletionRequest(): CompletionRequest {
  return {
    $type: "yandex.cloud.ai.foundation_models.v1.CompletionRequest",
    modelUri: "",
    completionOptions: undefined,
    messages: [],
  };
}

export const CompletionRequest = {
  $type: "yandex.cloud.ai.foundation_models.v1.CompletionRequest" as const,

  encode(message: CompletionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelUri !== "") {
      writer.uint32(10).string(message.modelUri);
    }
    if (message.completionOptions !== undefined) {
      CompletionOptions.encode(message.completionOptions, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.messages) {
      Message.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompletionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompletionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modelUri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.completionOptions = CompletionOptions.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.messages.push(Message.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompletionRequest {
    return {
      $type: CompletionRequest.$type,
      modelUri: isSet(object.modelUri) ? globalThis.String(object.modelUri) : "",
      completionOptions: isSet(object.completionOptions)
        ? CompletionOptions.fromJSON(object.completionOptions)
        : undefined,
      messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e: any) => Message.fromJSON(e)) : [],
    };
  },

  toJSON(message: CompletionRequest): unknown {
    const obj: any = {};
    if (message.modelUri !== "") {
      obj.modelUri = message.modelUri;
    }
    if (message.completionOptions !== undefined) {
      obj.completionOptions = CompletionOptions.toJSON(message.completionOptions);
    }
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Message.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompletionRequest>, I>>(base?: I): CompletionRequest {
    return CompletionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompletionRequest>, I>>(object: I): CompletionRequest {
    const message = createBaseCompletionRequest();
    message.modelUri = object.modelUri ?? "";
    message.completionOptions = (object.completionOptions !== undefined && object.completionOptions !== null)
      ? CompletionOptions.fromPartial(object.completionOptions)
      : undefined;
    message.messages = object.messages?.map((e) => Message.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CompletionRequest.$type, CompletionRequest);

function createBaseCompletionResponse(): CompletionResponse {
  return {
    $type: "yandex.cloud.ai.foundation_models.v1.CompletionResponse",
    alternatives: [],
    usage: undefined,
    modelVersion: "",
  };
}

export const CompletionResponse = {
  $type: "yandex.cloud.ai.foundation_models.v1.CompletionResponse" as const,

  encode(message: CompletionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.alternatives) {
      Alternative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.usage !== undefined) {
      ContentUsage.encode(message.usage, writer.uint32(18).fork()).ldelim();
    }
    if (message.modelVersion !== "") {
      writer.uint32(26).string(message.modelVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompletionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompletionResponse();
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

          message.usage = ContentUsage.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompletionResponse {
    return {
      $type: CompletionResponse.$type,
      alternatives: globalThis.Array.isArray(object?.alternatives)
        ? object.alternatives.map((e: any) => Alternative.fromJSON(e))
        : [],
      usage: isSet(object.usage) ? ContentUsage.fromJSON(object.usage) : undefined,
      modelVersion: isSet(object.modelVersion) ? globalThis.String(object.modelVersion) : "",
    };
  },

  toJSON(message: CompletionResponse): unknown {
    const obj: any = {};
    if (message.alternatives?.length) {
      obj.alternatives = message.alternatives.map((e) => Alternative.toJSON(e));
    }
    if (message.usage !== undefined) {
      obj.usage = ContentUsage.toJSON(message.usage);
    }
    if (message.modelVersion !== "") {
      obj.modelVersion = message.modelVersion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompletionResponse>, I>>(base?: I): CompletionResponse {
    return CompletionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompletionResponse>, I>>(object: I): CompletionResponse {
    const message = createBaseCompletionResponse();
    message.alternatives = object.alternatives?.map((e) => Alternative.fromPartial(e)) || [];
    message.usage = (object.usage !== undefined && object.usage !== null)
      ? ContentUsage.fromPartial(object.usage)
      : undefined;
    message.modelVersion = object.modelVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(CompletionResponse.$type, CompletionResponse);

function createBaseTokenizeRequest(): TokenizeRequest {
  return { $type: "yandex.cloud.ai.foundation_models.v1.TokenizeRequest", modelUri: "", text: "" };
}

export const TokenizeRequest = {
  $type: "yandex.cloud.ai.foundation_models.v1.TokenizeRequest" as const,

  encode(message: TokenizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelUri !== "") {
      writer.uint32(10).string(message.modelUri);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modelUri = reader.string();
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

  fromJSON(object: any): TokenizeRequest {
    return {
      $type: TokenizeRequest.$type,
      modelUri: isSet(object.modelUri) ? globalThis.String(object.modelUri) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : "",
    };
  },

  toJSON(message: TokenizeRequest): unknown {
    const obj: any = {};
    if (message.modelUri !== "") {
      obj.modelUri = message.modelUri;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenizeRequest>, I>>(base?: I): TokenizeRequest {
    return TokenizeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenizeRequest>, I>>(object: I): TokenizeRequest {
    const message = createBaseTokenizeRequest();
    message.modelUri = object.modelUri ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(TokenizeRequest.$type, TokenizeRequest);

function createBaseTokenizeResponse(): TokenizeResponse {
  return { $type: "yandex.cloud.ai.foundation_models.v1.TokenizeResponse", tokens: [], modelVersion: "" };
}

export const TokenizeResponse = {
  $type: "yandex.cloud.ai.foundation_models.v1.TokenizeResponse" as const,

  encode(message: TokenizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.modelVersion !== "") {
      writer.uint32(18).string(message.modelVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokens.push(Token.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.modelVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenizeResponse {
    return {
      $type: TokenizeResponse.$type,
      tokens: globalThis.Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Token.fromJSON(e)) : [],
      modelVersion: isSet(object.modelVersion) ? globalThis.String(object.modelVersion) : "",
    };
  },

  toJSON(message: TokenizeResponse): unknown {
    const obj: any = {};
    if (message.tokens?.length) {
      obj.tokens = message.tokens.map((e) => Token.toJSON(e));
    }
    if (message.modelVersion !== "") {
      obj.modelVersion = message.modelVersion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenizeResponse>, I>>(base?: I): TokenizeResponse {
    return TokenizeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenizeResponse>, I>>(object: I): TokenizeResponse {
    const message = createBaseTokenizeResponse();
    message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
    message.modelVersion = object.modelVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(TokenizeResponse.$type, TokenizeResponse);

function createBaseTextEmbeddingRequest(): TextEmbeddingRequest {
  return { $type: "yandex.cloud.ai.foundation_models.v1.TextEmbeddingRequest", modelUri: "", text: "" };
}

export const TextEmbeddingRequest = {
  $type: "yandex.cloud.ai.foundation_models.v1.TextEmbeddingRequest" as const,

  encode(message: TextEmbeddingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelUri !== "") {
      writer.uint32(10).string(message.modelUri);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextEmbeddingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modelUri = reader.string();
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

  fromJSON(object: any): TextEmbeddingRequest {
    return {
      $type: TextEmbeddingRequest.$type,
      modelUri: isSet(object.modelUri) ? globalThis.String(object.modelUri) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : "",
    };
  },

  toJSON(message: TextEmbeddingRequest): unknown {
    const obj: any = {};
    if (message.modelUri !== "") {
      obj.modelUri = message.modelUri;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextEmbeddingRequest>, I>>(base?: I): TextEmbeddingRequest {
    return TextEmbeddingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextEmbeddingRequest>, I>>(object: I): TextEmbeddingRequest {
    const message = createBaseTextEmbeddingRequest();
    message.modelUri = object.modelUri ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(TextEmbeddingRequest.$type, TextEmbeddingRequest);

function createBaseTextEmbeddingResponse(): TextEmbeddingResponse {
  return {
    $type: "yandex.cloud.ai.foundation_models.v1.TextEmbeddingResponse",
    embedding: [],
    numTokens: 0,
    modelVersion: "",
  };
}

export const TextEmbeddingResponse = {
  $type: "yandex.cloud.ai.foundation_models.v1.TextEmbeddingResponse" as const,

  encode(message: TextEmbeddingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.embedding) {
      writer.double(v);
    }
    writer.ldelim();
    if (message.numTokens !== 0) {
      writer.uint32(16).int64(message.numTokens);
    }
    if (message.modelVersion !== "") {
      writer.uint32(26).string(message.modelVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextEmbeddingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 9) {
            message.embedding.push(reader.double());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.embedding.push(reader.double());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.numTokens = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextEmbeddingResponse {
    return {
      $type: TextEmbeddingResponse.$type,
      embedding: globalThis.Array.isArray(object?.embedding)
        ? object.embedding.map((e: any) => globalThis.Number(e))
        : [],
      numTokens: isSet(object.numTokens) ? globalThis.Number(object.numTokens) : 0,
      modelVersion: isSet(object.modelVersion) ? globalThis.String(object.modelVersion) : "",
    };
  },

  toJSON(message: TextEmbeddingResponse): unknown {
    const obj: any = {};
    if (message.embedding?.length) {
      obj.embedding = message.embedding;
    }
    if (message.numTokens !== 0) {
      obj.numTokens = Math.round(message.numTokens);
    }
    if (message.modelVersion !== "") {
      obj.modelVersion = message.modelVersion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextEmbeddingResponse>, I>>(base?: I): TextEmbeddingResponse {
    return TextEmbeddingResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextEmbeddingResponse>, I>>(object: I): TextEmbeddingResponse {
    const message = createBaseTextEmbeddingResponse();
    message.embedding = object.embedding?.map((e) => e) || [];
    message.numTokens = object.numTokens ?? 0;
    message.modelVersion = object.modelVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(TextEmbeddingResponse.$type, TextEmbeddingResponse);

/** Service for text generation. */
export type TextGenerationServiceService = typeof TextGenerationServiceService;
export const TextGenerationServiceService = {
  /** RPC method for generating text completions. */
  completion: {
    path: "/yandex.cloud.ai.foundation_models.v1.TextGenerationService/Completion",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: CompletionRequest) => Buffer.from(CompletionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CompletionRequest.decode(value),
    responseSerialize: (value: CompletionResponse) => Buffer.from(CompletionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CompletionResponse.decode(value),
  },
} as const;

export interface TextGenerationServiceServer extends UntypedServiceImplementation {
  /** RPC method for generating text completions. */
  completion: handleServerStreamingCall<CompletionRequest, CompletionResponse>;
}

export interface TextGenerationServiceClient extends Client {
  /** RPC method for generating text completions. */
  completion(request: CompletionRequest, options?: Partial<CallOptions>): ClientReadableStream<CompletionResponse>;
  completion(
    request: CompletionRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<CompletionResponse>;
}

export const TextGenerationServiceClient = makeGenericClientConstructor(
  TextGenerationServiceService,
  "yandex.cloud.ai.foundation_models.v1.TextGenerationService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TextGenerationServiceClient;
  service: typeof TextGenerationServiceService;
  serviceName: string;
};

/** Service for asynchronous text generation. */
export type TextGenerationAsyncServiceService = typeof TextGenerationAsyncServiceService;
export const TextGenerationAsyncServiceService = {
  /** RPC method for generating text completions in asynchronous mode. */
  completion: {
    path: "/yandex.cloud.ai.foundation_models.v1.TextGenerationAsyncService/Completion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CompletionRequest) => Buffer.from(CompletionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CompletionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface TextGenerationAsyncServiceServer extends UntypedServiceImplementation {
  /** RPC method for generating text completions in asynchronous mode. */
  completion: handleUnaryCall<CompletionRequest, Operation>;
}

export interface TextGenerationAsyncServiceClient extends Client {
  /** RPC method for generating text completions in asynchronous mode. */
  completion(
    request: CompletionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  completion(
    request: CompletionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  completion(
    request: CompletionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const TextGenerationAsyncServiceClient = makeGenericClientConstructor(
  TextGenerationAsyncServiceService,
  "yandex.cloud.ai.foundation_models.v1.TextGenerationAsyncService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): TextGenerationAsyncServiceClient;
  service: typeof TextGenerationAsyncServiceService;
  serviceName: string;
};

/** Service for tokenizing input content. */
export type TokenizerServiceService = typeof TokenizerServiceService;
export const TokenizerServiceService = {
  /** RPC method for tokenizing text. */
  tokenize: {
    path: "/yandex.cloud.ai.foundation_models.v1.TokenizerService/Tokenize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TokenizeRequest) => Buffer.from(TokenizeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TokenizeRequest.decode(value),
    responseSerialize: (value: TokenizeResponse) => Buffer.from(TokenizeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TokenizeResponse.decode(value),
  },
  /** RPC method for tokenizing content of CompletionRequest */
  tokenizeCompletion: {
    path: "/yandex.cloud.ai.foundation_models.v1.TokenizerService/TokenizeCompletion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CompletionRequest) => Buffer.from(CompletionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CompletionRequest.decode(value),
    responseSerialize: (value: TokenizeResponse) => Buffer.from(TokenizeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TokenizeResponse.decode(value),
  },
} as const;

export interface TokenizerServiceServer extends UntypedServiceImplementation {
  /** RPC method for tokenizing text. */
  tokenize: handleUnaryCall<TokenizeRequest, TokenizeResponse>;
  /** RPC method for tokenizing content of CompletionRequest */
  tokenizeCompletion: handleUnaryCall<CompletionRequest, TokenizeResponse>;
}

export interface TokenizerServiceClient extends Client {
  /** RPC method for tokenizing text. */
  tokenize(
    request: TokenizeRequest,
    callback: (error: ServiceError | null, response: TokenizeResponse) => void,
  ): ClientUnaryCall;
  tokenize(
    request: TokenizeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TokenizeResponse) => void,
  ): ClientUnaryCall;
  tokenize(
    request: TokenizeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TokenizeResponse) => void,
  ): ClientUnaryCall;
  /** RPC method for tokenizing content of CompletionRequest */
  tokenizeCompletion(
    request: CompletionRequest,
    callback: (error: ServiceError | null, response: TokenizeResponse) => void,
  ): ClientUnaryCall;
  tokenizeCompletion(
    request: CompletionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TokenizeResponse) => void,
  ): ClientUnaryCall;
  tokenizeCompletion(
    request: CompletionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TokenizeResponse) => void,
  ): ClientUnaryCall;
}

export const TokenizerServiceClient = makeGenericClientConstructor(
  TokenizerServiceService,
  "yandex.cloud.ai.foundation_models.v1.TokenizerService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TokenizerServiceClient;
  service: typeof TokenizerServiceService;
  serviceName: string;
};

/** Service for obtaining embeddings from input data. */
export type EmbeddingsServiceService = typeof EmbeddingsServiceService;
export const EmbeddingsServiceService = {
  /** RPC method for obtaining embeddings from text data. */
  textEmbedding: {
    path: "/yandex.cloud.ai.foundation_models.v1.EmbeddingsService/TextEmbedding",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TextEmbeddingRequest) => Buffer.from(TextEmbeddingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TextEmbeddingRequest.decode(value),
    responseSerialize: (value: TextEmbeddingResponse) => Buffer.from(TextEmbeddingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TextEmbeddingResponse.decode(value),
  },
} as const;

export interface EmbeddingsServiceServer extends UntypedServiceImplementation {
  /** RPC method for obtaining embeddings from text data. */
  textEmbedding: handleUnaryCall<TextEmbeddingRequest, TextEmbeddingResponse>;
}

export interface EmbeddingsServiceClient extends Client {
  /** RPC method for obtaining embeddings from text data. */
  textEmbedding(
    request: TextEmbeddingRequest,
    callback: (error: ServiceError | null, response: TextEmbeddingResponse) => void,
  ): ClientUnaryCall;
  textEmbedding(
    request: TextEmbeddingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TextEmbeddingResponse) => void,
  ): ClientUnaryCall;
  textEmbedding(
    request: TextEmbeddingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TextEmbeddingResponse) => void,
  ): ClientUnaryCall;
}

export const EmbeddingsServiceClient = makeGenericClientConstructor(
  EmbeddingsServiceService,
  "yandex.cloud.ai.foundation_models.v1.EmbeddingsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EmbeddingsServiceClient;
  service: typeof EmbeddingsServiceService;
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
