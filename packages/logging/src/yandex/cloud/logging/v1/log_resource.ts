/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.logging.v1";

/**
 * Log entry resource specification.
 *
 * May be used either by services and by user.
 */
export interface LogEntryResource {
  $type: "yandex.cloud.logging.v1.LogEntryResource";
  /** Resource type, i.e., `serverless.function` */
  type: string;
  /** Resource ID, i.e., ID of the function producing logs. */
  id: string;
}

/** Log group resource. */
export interface LogGroupResource {
  $type: "yandex.cloud.logging.v1.LogGroupResource";
  /**
   * Resource type.
   *
   * Collected from log entries inside log group.
   */
  type: string;
  /** List of resource IDs with the same resource type. */
  ids: string[];
}

function createBaseLogEntryResource(): LogEntryResource {
  return { $type: "yandex.cloud.logging.v1.LogEntryResource", type: "", id: "" };
}

export const LogEntryResource = {
  $type: "yandex.cloud.logging.v1.LogEntryResource" as const,

  encode(message: LogEntryResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntryResource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntryResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogEntryResource {
    return {
      $type: LogEntryResource.$type,
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: LogEntryResource): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogEntryResource>, I>>(base?: I): LogEntryResource {
    return LogEntryResource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogEntryResource>, I>>(object: I): LogEntryResource {
    const message = createBaseLogEntryResource();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(LogEntryResource.$type, LogEntryResource);

function createBaseLogGroupResource(): LogGroupResource {
  return { $type: "yandex.cloud.logging.v1.LogGroupResource", type: "", ids: [] };
}

export const LogGroupResource = {
  $type: "yandex.cloud.logging.v1.LogGroupResource" as const,

  encode(message: LogGroupResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogGroupResource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogGroupResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ids.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogGroupResource {
    return {
      $type: LogGroupResource.$type,
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      ids: globalThis.Array.isArray(object?.ids) ? object.ids.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: LogGroupResource): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.ids?.length) {
      obj.ids = message.ids;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogGroupResource>, I>>(base?: I): LogGroupResource {
    return LogGroupResource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogGroupResource>, I>>(object: I): LogGroupResource {
    const message = createBaseLogGroupResource();
    message.type = object.type ?? "";
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(LogGroupResource.$type, LogGroupResource);

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
