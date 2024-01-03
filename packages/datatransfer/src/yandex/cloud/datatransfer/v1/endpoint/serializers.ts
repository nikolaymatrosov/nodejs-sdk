/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export interface SerializerAuto {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto";
}

export interface SerializerJSON {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON";
}

export interface DebeziumSerializerParameter {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter";
  /** Name of the serializer parameter */
  key: string;
  /** Value of the serializer parameter */
  value: string;
}

export interface SerializerDebezium {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium";
  /** Settings of sterilization parameters as key-value pairs */
  serializerParameters: DebeziumSerializerParameter[];
}

/** Data serialization format */
export interface Serializer {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer";
  /** Select the serialization format automatically */
  serializerAuto?:
    | SerializerAuto
    | undefined;
  /** Serialize data in json format */
  serializerJson?:
    | SerializerJSON
    | undefined;
  /** Serialize data in debezium format */
  serializerDebezium?: SerializerDebezium | undefined;
}

function createBaseSerializerAuto(): SerializerAuto {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto" };
}

export const SerializerAuto = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto" as const,

  encode(_: SerializerAuto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SerializerAuto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSerializerAuto();
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

  fromJSON(_: any): SerializerAuto {
    return { $type: SerializerAuto.$type };
  },

  toJSON(_: SerializerAuto): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SerializerAuto>, I>>(base?: I): SerializerAuto {
    return SerializerAuto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SerializerAuto>, I>>(_: I): SerializerAuto {
    const message = createBaseSerializerAuto();
    return message;
  },
};

messageTypeRegistry.set(SerializerAuto.$type, SerializerAuto);

function createBaseSerializerJSON(): SerializerJSON {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON" };
}

export const SerializerJSON = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON" as const,

  encode(_: SerializerJSON, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SerializerJSON {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSerializerJSON();
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

  fromJSON(_: any): SerializerJSON {
    return { $type: SerializerJSON.$type };
  },

  toJSON(_: SerializerJSON): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SerializerJSON>, I>>(base?: I): SerializerJSON {
    return SerializerJSON.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SerializerJSON>, I>>(_: I): SerializerJSON {
    const message = createBaseSerializerJSON();
    return message;
  },
};

messageTypeRegistry.set(SerializerJSON.$type, SerializerJSON);

function createBaseDebeziumSerializerParameter(): DebeziumSerializerParameter {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter", key: "", value: "" };
}

export const DebeziumSerializerParameter = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter" as const,

  encode(message: DebeziumSerializerParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebeziumSerializerParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebeziumSerializerParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DebeziumSerializerParameter {
    return {
      $type: DebeziumSerializerParameter.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: DebeziumSerializerParameter): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DebeziumSerializerParameter>, I>>(base?: I): DebeziumSerializerParameter {
    return DebeziumSerializerParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DebeziumSerializerParameter>, I>>(object: I): DebeziumSerializerParameter {
    const message = createBaseDebeziumSerializerParameter();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(DebeziumSerializerParameter.$type, DebeziumSerializerParameter);

function createBaseSerializerDebezium(): SerializerDebezium {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium", serializerParameters: [] };
}

export const SerializerDebezium = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium" as const,

  encode(message: SerializerDebezium, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.serializerParameters) {
      DebeziumSerializerParameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SerializerDebezium {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSerializerDebezium();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serializerParameters.push(DebeziumSerializerParameter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SerializerDebezium {
    return {
      $type: SerializerDebezium.$type,
      serializerParameters: globalThis.Array.isArray(object?.serializerParameters)
        ? object.serializerParameters.map((e: any) => DebeziumSerializerParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SerializerDebezium): unknown {
    const obj: any = {};
    if (message.serializerParameters?.length) {
      obj.serializerParameters = message.serializerParameters.map((e) => DebeziumSerializerParameter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SerializerDebezium>, I>>(base?: I): SerializerDebezium {
    return SerializerDebezium.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SerializerDebezium>, I>>(object: I): SerializerDebezium {
    const message = createBaseSerializerDebezium();
    message.serializerParameters =
      object.serializerParameters?.map((e) => DebeziumSerializerParameter.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(SerializerDebezium.$type, SerializerDebezium);

function createBaseSerializer(): Serializer {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer",
    serializerAuto: undefined,
    serializerJson: undefined,
    serializerDebezium: undefined,
  };
}

export const Serializer = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer" as const,

  encode(message: Serializer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serializerAuto !== undefined) {
      SerializerAuto.encode(message.serializerAuto, writer.uint32(10).fork()).ldelim();
    }
    if (message.serializerJson !== undefined) {
      SerializerJSON.encode(message.serializerJson, writer.uint32(18).fork()).ldelim();
    }
    if (message.serializerDebezium !== undefined) {
      SerializerDebezium.encode(message.serializerDebezium, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Serializer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSerializer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serializerAuto = SerializerAuto.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serializerJson = SerializerJSON.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serializerDebezium = SerializerDebezium.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Serializer {
    return {
      $type: Serializer.$type,
      serializerAuto: isSet(object.serializerAuto) ? SerializerAuto.fromJSON(object.serializerAuto) : undefined,
      serializerJson: isSet(object.serializerJson) ? SerializerJSON.fromJSON(object.serializerJson) : undefined,
      serializerDebezium: isSet(object.serializerDebezium)
        ? SerializerDebezium.fromJSON(object.serializerDebezium)
        : undefined,
    };
  },

  toJSON(message: Serializer): unknown {
    const obj: any = {};
    if (message.serializerAuto !== undefined) {
      obj.serializerAuto = SerializerAuto.toJSON(message.serializerAuto);
    }
    if (message.serializerJson !== undefined) {
      obj.serializerJson = SerializerJSON.toJSON(message.serializerJson);
    }
    if (message.serializerDebezium !== undefined) {
      obj.serializerDebezium = SerializerDebezium.toJSON(message.serializerDebezium);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Serializer>, I>>(base?: I): Serializer {
    return Serializer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Serializer>, I>>(object: I): Serializer {
    const message = createBaseSerializer();
    message.serializerAuto = (object.serializerAuto !== undefined && object.serializerAuto !== null)
      ? SerializerAuto.fromPartial(object.serializerAuto)
      : undefined;
    message.serializerJson = (object.serializerJson !== undefined && object.serializerJson !== null)
      ? SerializerJSON.fromPartial(object.serializerJson)
      : undefined;
    message.serializerDebezium = (object.serializerDebezium !== undefined && object.serializerDebezium !== null)
      ? SerializerDebezium.fromPartial(object.serializerDebezium)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Serializer.$type, Serializer);

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
