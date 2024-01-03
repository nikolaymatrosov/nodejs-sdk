/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { ResourceOptions } from "./resource";

export const protobufPackage = "yandex.cloud.cdn.v1";

/** Resource rule. */
export interface Rule {
  $type: "yandex.cloud.cdn.v1.Rule";
  /** Rule ID. */
  id: number;
  /** Rule name. */
  name: string;
  /**
   * Rule pattern.
   * Must be a valid regular expression.
   */
  rulePattern: string;
  options?: ResourceOptions | undefined;
}

function createBaseRule(): Rule {
  return { $type: "yandex.cloud.cdn.v1.Rule", id: 0, name: "", rulePattern: "", options: undefined };
}

export const Rule = {
  $type: "yandex.cloud.cdn.v1.Rule" as const,

  encode(message: Rule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.rulePattern !== "") {
      writer.uint32(26).string(message.rulePattern);
    }
    if (message.options !== undefined) {
      ResourceOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRule();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rulePattern = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.options = ResourceOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Rule {
    return {
      $type: Rule.$type,
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      rulePattern: isSet(object.rulePattern) ? globalThis.String(object.rulePattern) : "",
      options: isSet(object.options) ? ResourceOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: Rule): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.rulePattern !== "") {
      obj.rulePattern = message.rulePattern;
    }
    if (message.options !== undefined) {
      obj.options = ResourceOptions.toJSON(message.options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Rule>, I>>(base?: I): Rule {
    return Rule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Rule>, I>>(object: I): Rule {
    const message = createBaseRule();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.rulePattern = object.rulePattern ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? ResourceOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Rule.$type, Rule);

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
