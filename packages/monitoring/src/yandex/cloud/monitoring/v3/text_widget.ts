/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.monitoring.v3";

/** Text widget. */
export interface TextWidget {
  $type: "yandex.cloud.monitoring.v3.TextWidget";
  /** Text. */
  text: string;
}

function createBaseTextWidget(): TextWidget {
  return { $type: "yandex.cloud.monitoring.v3.TextWidget", text: "" };
}

export const TextWidget = {
  $type: "yandex.cloud.monitoring.v3.TextWidget" as const,

  encode(message: TextWidget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextWidget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextWidget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): TextWidget {
    return { $type: TextWidget.$type, text: isSet(object.text) ? globalThis.String(object.text) : "" };
  },

  toJSON(message: TextWidget): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextWidget>, I>>(base?: I): TextWidget {
    return TextWidget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextWidget>, I>>(object: I): TextWidget {
    const message = createBaseTextWidget();
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(TextWidget.$type, TextWidget);

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
