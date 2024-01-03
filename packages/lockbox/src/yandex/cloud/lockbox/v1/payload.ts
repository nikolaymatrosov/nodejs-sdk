/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.lockbox.v1";

/** A payload. */
export interface Payload {
  $type: "yandex.cloud.lockbox.v1.Payload";
  /** ID of the version that the payload belongs to. */
  versionId: string;
  /** Payload entries. */
  entries: Payload_Entry[];
}

export interface Payload_Entry {
  $type: "yandex.cloud.lockbox.v1.Payload.Entry";
  /** Non-confidential key of the entry. */
  key: string;
  /** Text value. */
  textValue?:
    | string
    | undefined;
  /** Binary value. */
  binaryValue?: Buffer | undefined;
}

function createBasePayload(): Payload {
  return { $type: "yandex.cloud.lockbox.v1.Payload", versionId: "", entries: [] };
}

export const Payload = {
  $type: "yandex.cloud.lockbox.v1.Payload" as const,

  encode(message: Payload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.versionId !== "") {
      writer.uint32(10).string(message.versionId);
    }
    for (const v of message.entries) {
      Payload_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.versionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entries.push(Payload_Entry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Payload {
    return {
      $type: Payload.$type,
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      entries: globalThis.Array.isArray(object?.entries)
        ? object.entries.map((e: any) => Payload_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Payload): unknown {
    const obj: any = {};
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => Payload_Entry.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Payload>, I>>(base?: I): Payload {
    return Payload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Payload>, I>>(object: I): Payload {
    const message = createBasePayload();
    message.versionId = object.versionId ?? "";
    message.entries = object.entries?.map((e) => Payload_Entry.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Payload.$type, Payload);

function createBasePayload_Entry(): Payload_Entry {
  return { $type: "yandex.cloud.lockbox.v1.Payload.Entry", key: "", textValue: undefined, binaryValue: undefined };
}

export const Payload_Entry = {
  $type: "yandex.cloud.lockbox.v1.Payload.Entry" as const,

  encode(message: Payload_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.textValue !== undefined) {
      writer.uint32(18).string(message.textValue);
    }
    if (message.binaryValue !== undefined) {
      writer.uint32(26).bytes(message.binaryValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payload_Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload_Entry();
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

          message.textValue = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.binaryValue = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Payload_Entry {
    return {
      $type: Payload_Entry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      textValue: isSet(object.textValue) ? globalThis.String(object.textValue) : undefined,
      binaryValue: isSet(object.binaryValue) ? Buffer.from(bytesFromBase64(object.binaryValue)) : undefined,
    };
  },

  toJSON(message: Payload_Entry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.textValue !== undefined) {
      obj.textValue = message.textValue;
    }
    if (message.binaryValue !== undefined) {
      obj.binaryValue = base64FromBytes(message.binaryValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Payload_Entry>, I>>(base?: I): Payload_Entry {
    return Payload_Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Payload_Entry>, I>>(object: I): Payload_Entry {
    const message = createBasePayload_Entry();
    message.key = object.key ?? "";
    message.textValue = object.textValue ?? undefined;
    message.binaryValue = object.binaryValue ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Payload_Entry.$type, Payload_Entry);

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
