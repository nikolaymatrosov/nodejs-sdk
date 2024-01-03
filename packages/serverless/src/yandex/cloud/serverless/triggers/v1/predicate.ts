/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.serverless.triggers.v1";

export interface Predicate {
  $type: "yandex.cloud.serverless.triggers.v1.Predicate";
  andPredicate?: AndPredicate | undefined;
  fieldValuePredicate?: FieldValuePredicate | undefined;
}

export interface AndPredicate {
  $type: "yandex.cloud.serverless.triggers.v1.AndPredicate";
  predicate: Predicate[];
}

export interface FieldValuePredicate {
  $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate";
  fieldPath: string;
  /** string representation of the value matches exactly to the given string */
  exact?:
    | string
    | undefined;
  /** value has given prefix */
  prefix?:
    | string
    | undefined;
  /** value has given suffix */
  suffix?: string | undefined;
}

function createBasePredicate(): Predicate {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Predicate",
    andPredicate: undefined,
    fieldValuePredicate: undefined,
  };
}

export const Predicate = {
  $type: "yandex.cloud.serverless.triggers.v1.Predicate" as const,

  encode(message: Predicate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.andPredicate !== undefined) {
      AndPredicate.encode(message.andPredicate, writer.uint32(18).fork()).ldelim();
    }
    if (message.fieldValuePredicate !== undefined) {
      FieldValuePredicate.encode(message.fieldValuePredicate, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Predicate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePredicate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.andPredicate = AndPredicate.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fieldValuePredicate = FieldValuePredicate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Predicate {
    return {
      $type: Predicate.$type,
      andPredicate: isSet(object.andPredicate) ? AndPredicate.fromJSON(object.andPredicate) : undefined,
      fieldValuePredicate: isSet(object.fieldValuePredicate)
        ? FieldValuePredicate.fromJSON(object.fieldValuePredicate)
        : undefined,
    };
  },

  toJSON(message: Predicate): unknown {
    const obj: any = {};
    if (message.andPredicate !== undefined) {
      obj.andPredicate = AndPredicate.toJSON(message.andPredicate);
    }
    if (message.fieldValuePredicate !== undefined) {
      obj.fieldValuePredicate = FieldValuePredicate.toJSON(message.fieldValuePredicate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Predicate>, I>>(base?: I): Predicate {
    return Predicate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Predicate>, I>>(object: I): Predicate {
    const message = createBasePredicate();
    message.andPredicate = (object.andPredicate !== undefined && object.andPredicate !== null)
      ? AndPredicate.fromPartial(object.andPredicate)
      : undefined;
    message.fieldValuePredicate = (object.fieldValuePredicate !== undefined && object.fieldValuePredicate !== null)
      ? FieldValuePredicate.fromPartial(object.fieldValuePredicate)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Predicate.$type, Predicate);

function createBaseAndPredicate(): AndPredicate {
  return { $type: "yandex.cloud.serverless.triggers.v1.AndPredicate", predicate: [] };
}

export const AndPredicate = {
  $type: "yandex.cloud.serverless.triggers.v1.AndPredicate" as const,

  encode(message: AndPredicate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.predicate) {
      Predicate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AndPredicate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAndPredicate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.predicate.push(Predicate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AndPredicate {
    return {
      $type: AndPredicate.$type,
      predicate: globalThis.Array.isArray(object?.predicate)
        ? object.predicate.map((e: any) => Predicate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AndPredicate): unknown {
    const obj: any = {};
    if (message.predicate?.length) {
      obj.predicate = message.predicate.map((e) => Predicate.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AndPredicate>, I>>(base?: I): AndPredicate {
    return AndPredicate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AndPredicate>, I>>(object: I): AndPredicate {
    const message = createBaseAndPredicate();
    message.predicate = object.predicate?.map((e) => Predicate.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AndPredicate.$type, AndPredicate);

function createBaseFieldValuePredicate(): FieldValuePredicate {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate",
    fieldPath: "",
    exact: undefined,
    prefix: undefined,
    suffix: undefined,
  };
}

export const FieldValuePredicate = {
  $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate" as const,

  encode(message: FieldValuePredicate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fieldPath !== "") {
      writer.uint32(10).string(message.fieldPath);
    }
    if (message.exact !== undefined) {
      writer.uint32(26).string(message.exact);
    }
    if (message.prefix !== undefined) {
      writer.uint32(66).string(message.prefix);
    }
    if (message.suffix !== undefined) {
      writer.uint32(74).string(message.suffix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldValuePredicate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldValuePredicate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fieldPath = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.exact = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.prefix = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.suffix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldValuePredicate {
    return {
      $type: FieldValuePredicate.$type,
      fieldPath: isSet(object.fieldPath) ? globalThis.String(object.fieldPath) : "",
      exact: isSet(object.exact) ? globalThis.String(object.exact) : undefined,
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : undefined,
      suffix: isSet(object.suffix) ? globalThis.String(object.suffix) : undefined,
    };
  },

  toJSON(message: FieldValuePredicate): unknown {
    const obj: any = {};
    if (message.fieldPath !== "") {
      obj.fieldPath = message.fieldPath;
    }
    if (message.exact !== undefined) {
      obj.exact = message.exact;
    }
    if (message.prefix !== undefined) {
      obj.prefix = message.prefix;
    }
    if (message.suffix !== undefined) {
      obj.suffix = message.suffix;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FieldValuePredicate>, I>>(base?: I): FieldValuePredicate {
    return FieldValuePredicate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FieldValuePredicate>, I>>(object: I): FieldValuePredicate {
    const message = createBaseFieldValuePredicate();
    message.fieldPath = object.fieldPath ?? "";
    message.exact = object.exact ?? undefined;
    message.prefix = object.prefix ?? undefined;
    message.suffix = object.suffix ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(FieldValuePredicate.$type, FieldValuePredicate);

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
