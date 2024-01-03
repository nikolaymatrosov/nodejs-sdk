/* eslint-disable */
import { DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.ai.llm.v1alpha";

/** Defines the options for text generation. */
export interface GenerationOptions {
  $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions";
  /** Enables streaming of partially generated text. */
  partialResults: boolean;
  /**
   * Affects creativity and randomness of responses. Should be a double number between 0 (inclusive) and 1 (inclusive).
   * Lower values produce more straightforward responses, while higher values lead to increased creativity and randomness.
   */
  temperature?:
    | number
    | undefined;
  /**
   * Sets the maximum limit on the total number of tokens used for both the input prompt and the generated response.
   * Must be greater than zero and not exceed 7400 tokens.
   */
  maxTokens?: number | undefined;
}

/** Represents an alternative generated response, including its score and token count. */
export interface Alternative {
  $type: "yandex.cloud.ai.llm.v1alpha.Alternative";
  /** The generated text response. */
  text: string;
  /** The score or confidence of the generated text. */
  score: number;
  /** The number of tokens in the generated response. */
  numTokens: number;
}

/** Represents a message within a chat. */
export interface Message {
  $type: "yandex.cloud.ai.llm.v1alpha.Message";
  /** Identifies the sender of the message. */
  role: string;
  /** The text content of the message. */
  text: string;
}

/** Represents a token, the basic unit of text, used by the LLM. */
export interface Token {
  $type: "yandex.cloud.ai.llm.v1alpha.Token";
  /** An internal token identifier. */
  id: number;
  /** The textual representation of the token. */
  text: string;
  /** Indicates whether the token is special or not. Special tokens define the model's behavior and are not visible to users. */
  special: boolean;
}

function createBaseGenerationOptions(): GenerationOptions {
  return {
    $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions",
    partialResults: false,
    temperature: undefined,
    maxTokens: undefined,
  };
}

export const GenerationOptions = {
  $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions" as const,

  encode(message: GenerationOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partialResults === true) {
      writer.uint32(8).bool(message.partialResults);
    }
    if (message.temperature !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.temperature! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.maxTokens !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxTokens! }, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerationOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerationOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.partialResults = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.temperature = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxTokens = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerationOptions {
    return {
      $type: GenerationOptions.$type,
      partialResults: isSet(object.partialResults) ? globalThis.Boolean(object.partialResults) : false,
      temperature: isSet(object.temperature) ? Number(object.temperature) : undefined,
      maxTokens: isSet(object.maxTokens) ? Number(object.maxTokens) : undefined,
    };
  },

  toJSON(message: GenerationOptions): unknown {
    const obj: any = {};
    if (message.partialResults === true) {
      obj.partialResults = message.partialResults;
    }
    if (message.temperature !== undefined) {
      obj.temperature = message.temperature;
    }
    if (message.maxTokens !== undefined) {
      obj.maxTokens = message.maxTokens;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerationOptions>, I>>(base?: I): GenerationOptions {
    return GenerationOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerationOptions>, I>>(object: I): GenerationOptions {
    const message = createBaseGenerationOptions();
    message.partialResults = object.partialResults ?? false;
    message.temperature = object.temperature ?? undefined;
    message.maxTokens = object.maxTokens ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GenerationOptions.$type, GenerationOptions);

function createBaseAlternative(): Alternative {
  return { $type: "yandex.cloud.ai.llm.v1alpha.Alternative", text: "", score: 0, numTokens: 0 };
}

export const Alternative = {
  $type: "yandex.cloud.ai.llm.v1alpha.Alternative" as const,

  encode(message: Alternative, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.score !== 0) {
      writer.uint32(17).double(message.score);
    }
    if (message.numTokens !== 0) {
      writer.uint32(24).int64(message.numTokens);
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

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.score = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numTokens = longToNumber(reader.int64() as Long);
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
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      score: isSet(object.score) ? globalThis.Number(object.score) : 0,
      numTokens: isSet(object.numTokens) ? globalThis.Number(object.numTokens) : 0,
    };
  },

  toJSON(message: Alternative): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.score !== 0) {
      obj.score = message.score;
    }
    if (message.numTokens !== 0) {
      obj.numTokens = Math.round(message.numTokens);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Alternative>, I>>(base?: I): Alternative {
    return Alternative.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Alternative>, I>>(object: I): Alternative {
    const message = createBaseAlternative();
    message.text = object.text ?? "";
    message.score = object.score ?? 0;
    message.numTokens = object.numTokens ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Alternative.$type, Alternative);

function createBaseMessage(): Message {
  return { $type: "yandex.cloud.ai.llm.v1alpha.Message", role: "", text: "" };
}

export const Message = {
  $type: "yandex.cloud.ai.llm.v1alpha.Message" as const,

  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = reader.string();
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

  fromJSON(object: any): Message {
    return {
      $type: Message.$type,
      role: isSet(object.role) ? globalThis.String(object.role) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : "",
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.role !== "") {
      obj.role = message.role;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.role = object.role ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(Message.$type, Message);

function createBaseToken(): Token {
  return { $type: "yandex.cloud.ai.llm.v1alpha.Token", id: 0, text: "", special: false };
}

export const Token = {
  $type: "yandex.cloud.ai.llm.v1alpha.Token" as const,

  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.special === true) {
      writer.uint32(24).bool(message.special);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
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

          message.special = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Token {
    return {
      $type: Token.$type,
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      special: isSet(object.special) ? globalThis.Boolean(object.special) : false,
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.special === true) {
      obj.special = message.special;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Token>, I>>(base?: I): Token {
    return Token.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.id = object.id ?? 0;
    message.text = object.text ?? "";
    message.special = object.special ?? false;
    return message;
  },
};

messageTypeRegistry.set(Token.$type, Token);

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
