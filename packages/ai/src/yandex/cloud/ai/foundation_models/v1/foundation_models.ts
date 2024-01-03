/* eslint-disable */
import { DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.ai.foundation_models.v1";

/** Defines the options for completion generation. */
export interface CompletionOptions {
  $type: "yandex.cloud.ai.foundation_models.v1.CompletionOptions";
  /** Enables streaming of partially generated text. */
  stream: boolean;
  /**
   * Affects creativity and randomness of responses. Should be a double number between 0 (inclusive) and 1 (inclusive).
   * Lower values produce more straightforward responses, while higher values lead to increased creativity and randomness.
   * Default temperature: 0.6
   */
  temperature?:
    | number
    | undefined;
  /**
   * The limit on the number of tokens used for single completion generation.
   * Must be greater than zero. The maximum allowed parameter value may depend on the model used.
   */
  maxTokens?: number | undefined;
}

/** A message object representing a wrapper over the inputs and outputs of the completion model. */
export interface Message {
  $type: "yandex.cloud.ai.foundation_models.v1.Message";
  /**
   * Identifier of the message sender. Supported roles:
   * * `system` - special role used to define the behaviour of the completion model
   * * `assistant` - a role used by the model to generate responses
   * * `user` - a role used by the user to describe requests to the model
   */
  role: string;
  /** Textual content of the message. */
  text?: string | undefined;
}

/** An object representing the number of content tokens used by the completion model. */
export interface ContentUsage {
  $type: "yandex.cloud.ai.foundation_models.v1.ContentUsage";
  /** The number of tokens in the text parts of the model input. */
  inputTextTokens: number;
  /** The total number of tokens in the generated completions. */
  completionTokens: number;
  /** The total number of tokens, including all input tokens and all generated tokens. */
  totalTokens: number;
}

/** Represents a generated completion alternative, including its content and generation status. */
export interface Alternative {
  $type: "yandex.cloud.ai.foundation_models.v1.Alternative";
  /** A message containing the content of the alternative. */
  message?:
    | Message
    | undefined;
  /** The generation status of the alternative */
  status: Alternative_AlternativeStatus;
}

/** Enum representing the generation status of the alternative. */
export enum Alternative_AlternativeStatus {
  /** ALTERNATIVE_STATUS_UNSPECIFIED - Unspecified generation status. */
  ALTERNATIVE_STATUS_UNSPECIFIED = 0,
  /** ALTERNATIVE_STATUS_PARTIAL - Partially generated alternative. */
  ALTERNATIVE_STATUS_PARTIAL = 1,
  /** ALTERNATIVE_STATUS_TRUNCATED_FINAL - Incomplete final alternative resulting from reaching the maximum allowed number of tokens. */
  ALTERNATIVE_STATUS_TRUNCATED_FINAL = 2,
  /** ALTERNATIVE_STATUS_FINAL - Final alternative generated without running into any limits. */
  ALTERNATIVE_STATUS_FINAL = 3,
  UNRECOGNIZED = -1,
}

export function alternative_AlternativeStatusFromJSON(object: any): Alternative_AlternativeStatus {
  switch (object) {
    case 0:
    case "ALTERNATIVE_STATUS_UNSPECIFIED":
      return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_UNSPECIFIED;
    case 1:
    case "ALTERNATIVE_STATUS_PARTIAL":
      return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_PARTIAL;
    case 2:
    case "ALTERNATIVE_STATUS_TRUNCATED_FINAL":
      return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_TRUNCATED_FINAL;
    case 3:
    case "ALTERNATIVE_STATUS_FINAL":
      return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_FINAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Alternative_AlternativeStatus.UNRECOGNIZED;
  }
}

export function alternative_AlternativeStatusToJSON(object: Alternative_AlternativeStatus): string {
  switch (object) {
    case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_UNSPECIFIED:
      return "ALTERNATIVE_STATUS_UNSPECIFIED";
    case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_PARTIAL:
      return "ALTERNATIVE_STATUS_PARTIAL";
    case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_TRUNCATED_FINAL:
      return "ALTERNATIVE_STATUS_TRUNCATED_FINAL";
    case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_FINAL:
      return "ALTERNATIVE_STATUS_FINAL";
    case Alternative_AlternativeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Represents a token, the basic unit of content, used by the foundation model. */
export interface Token {
  $type: "yandex.cloud.ai.foundation_models.v1.Token";
  /** An internal token identifier. */
  id: number;
  /** The textual representation of the token. */
  text: string;
  /** Indicates whether the token is special or not. Special tokens may define the model's behavior and are not visible to users. */
  special: boolean;
}

function createBaseCompletionOptions(): CompletionOptions {
  return {
    $type: "yandex.cloud.ai.foundation_models.v1.CompletionOptions",
    stream: false,
    temperature: undefined,
    maxTokens: undefined,
  };
}

export const CompletionOptions = {
  $type: "yandex.cloud.ai.foundation_models.v1.CompletionOptions" as const,

  encode(message: CompletionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stream === true) {
      writer.uint32(8).bool(message.stream);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CompletionOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompletionOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.stream = reader.bool();
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

  fromJSON(object: any): CompletionOptions {
    return {
      $type: CompletionOptions.$type,
      stream: isSet(object.stream) ? globalThis.Boolean(object.stream) : false,
      temperature: isSet(object.temperature) ? Number(object.temperature) : undefined,
      maxTokens: isSet(object.maxTokens) ? Number(object.maxTokens) : undefined,
    };
  },

  toJSON(message: CompletionOptions): unknown {
    const obj: any = {};
    if (message.stream === true) {
      obj.stream = message.stream;
    }
    if (message.temperature !== undefined) {
      obj.temperature = message.temperature;
    }
    if (message.maxTokens !== undefined) {
      obj.maxTokens = message.maxTokens;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompletionOptions>, I>>(base?: I): CompletionOptions {
    return CompletionOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompletionOptions>, I>>(object: I): CompletionOptions {
    const message = createBaseCompletionOptions();
    message.stream = object.stream ?? false;
    message.temperature = object.temperature ?? undefined;
    message.maxTokens = object.maxTokens ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CompletionOptions.$type, CompletionOptions);

function createBaseMessage(): Message {
  return { $type: "yandex.cloud.ai.foundation_models.v1.Message", role: "", text: undefined };
}

export const Message = {
  $type: "yandex.cloud.ai.foundation_models.v1.Message" as const,

  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    if (message.text !== undefined) {
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
      text: isSet(object.text) ? globalThis.String(object.text) : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.role !== "") {
      obj.role = message.role;
    }
    if (message.text !== undefined) {
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
    message.text = object.text ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Message.$type, Message);

function createBaseContentUsage(): ContentUsage {
  return {
    $type: "yandex.cloud.ai.foundation_models.v1.ContentUsage",
    inputTextTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
  };
}

export const ContentUsage = {
  $type: "yandex.cloud.ai.foundation_models.v1.ContentUsage" as const,

  encode(message: ContentUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputTextTokens !== 0) {
      writer.uint32(8).int64(message.inputTextTokens);
    }
    if (message.completionTokens !== 0) {
      writer.uint32(16).int64(message.completionTokens);
    }
    if (message.totalTokens !== 0) {
      writer.uint32(24).int64(message.totalTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentUsage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inputTextTokens = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.completionTokens = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalTokens = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContentUsage {
    return {
      $type: ContentUsage.$type,
      inputTextTokens: isSet(object.inputTextTokens) ? globalThis.Number(object.inputTextTokens) : 0,
      completionTokens: isSet(object.completionTokens) ? globalThis.Number(object.completionTokens) : 0,
      totalTokens: isSet(object.totalTokens) ? globalThis.Number(object.totalTokens) : 0,
    };
  },

  toJSON(message: ContentUsage): unknown {
    const obj: any = {};
    if (message.inputTextTokens !== 0) {
      obj.inputTextTokens = Math.round(message.inputTextTokens);
    }
    if (message.completionTokens !== 0) {
      obj.completionTokens = Math.round(message.completionTokens);
    }
    if (message.totalTokens !== 0) {
      obj.totalTokens = Math.round(message.totalTokens);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentUsage>, I>>(base?: I): ContentUsage {
    return ContentUsage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContentUsage>, I>>(object: I): ContentUsage {
    const message = createBaseContentUsage();
    message.inputTextTokens = object.inputTextTokens ?? 0;
    message.completionTokens = object.completionTokens ?? 0;
    message.totalTokens = object.totalTokens ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ContentUsage.$type, ContentUsage);

function createBaseAlternative(): Alternative {
  return { $type: "yandex.cloud.ai.foundation_models.v1.Alternative", message: undefined, status: 0 };
}

export const Alternative = {
  $type: "yandex.cloud.ai.foundation_models.v1.Alternative" as const,

  encode(message: Alternative, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
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

          message.message = Message.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
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
      message: isSet(object.message) ? Message.fromJSON(object.message) : undefined,
      status: isSet(object.status) ? alternative_AlternativeStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Alternative): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = Message.toJSON(message.message);
    }
    if (message.status !== 0) {
      obj.status = alternative_AlternativeStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Alternative>, I>>(base?: I): Alternative {
    return Alternative.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Alternative>, I>>(object: I): Alternative {
    const message = createBaseAlternative();
    message.message = (object.message !== undefined && object.message !== null)
      ? Message.fromPartial(object.message)
      : undefined;
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Alternative.$type, Alternative);

function createBaseToken(): Token {
  return { $type: "yandex.cloud.ai.foundation_models.v1.Token", id: 0, text: "", special: false };
}

export const Token = {
  $type: "yandex.cloud.ai.foundation_models.v1.Token" as const,

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
