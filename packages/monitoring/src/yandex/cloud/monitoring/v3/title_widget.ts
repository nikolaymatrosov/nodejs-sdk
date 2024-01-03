/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.monitoring.v3";

/** Title widget. */
export interface TitleWidget {
  $type: "yandex.cloud.monitoring.v3.TitleWidget";
  /** Title text. */
  text: string;
  /** Title size. */
  size: TitleWidget_TitleSize;
}

/** Title size. */
export enum TitleWidget_TitleSize {
  TITLE_SIZE_UNSPECIFIED = 0,
  /** TITLE_SIZE_XS - Extra small size. */
  TITLE_SIZE_XS = 1,
  /** TITLE_SIZE_S - Small size. */
  TITLE_SIZE_S = 2,
  /** TITLE_SIZE_M - Middle size. */
  TITLE_SIZE_M = 3,
  /** TITLE_SIZE_L - Large size. */
  TITLE_SIZE_L = 4,
  UNRECOGNIZED = -1,
}

export function titleWidget_TitleSizeFromJSON(object: any): TitleWidget_TitleSize {
  switch (object) {
    case 0:
    case "TITLE_SIZE_UNSPECIFIED":
      return TitleWidget_TitleSize.TITLE_SIZE_UNSPECIFIED;
    case 1:
    case "TITLE_SIZE_XS":
      return TitleWidget_TitleSize.TITLE_SIZE_XS;
    case 2:
    case "TITLE_SIZE_S":
      return TitleWidget_TitleSize.TITLE_SIZE_S;
    case 3:
    case "TITLE_SIZE_M":
      return TitleWidget_TitleSize.TITLE_SIZE_M;
    case 4:
    case "TITLE_SIZE_L":
      return TitleWidget_TitleSize.TITLE_SIZE_L;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TitleWidget_TitleSize.UNRECOGNIZED;
  }
}

export function titleWidget_TitleSizeToJSON(object: TitleWidget_TitleSize): string {
  switch (object) {
    case TitleWidget_TitleSize.TITLE_SIZE_UNSPECIFIED:
      return "TITLE_SIZE_UNSPECIFIED";
    case TitleWidget_TitleSize.TITLE_SIZE_XS:
      return "TITLE_SIZE_XS";
    case TitleWidget_TitleSize.TITLE_SIZE_S:
      return "TITLE_SIZE_S";
    case TitleWidget_TitleSize.TITLE_SIZE_M:
      return "TITLE_SIZE_M";
    case TitleWidget_TitleSize.TITLE_SIZE_L:
      return "TITLE_SIZE_L";
    case TitleWidget_TitleSize.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTitleWidget(): TitleWidget {
  return { $type: "yandex.cloud.monitoring.v3.TitleWidget", text: "", size: 0 };
}

export const TitleWidget = {
  $type: "yandex.cloud.monitoring.v3.TitleWidget" as const,

  encode(message: TitleWidget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.size !== 0) {
      writer.uint32(16).int32(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TitleWidget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTitleWidget();
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
          if (tag !== 16) {
            break;
          }

          message.size = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TitleWidget {
    return {
      $type: TitleWidget.$type,
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      size: isSet(object.size) ? titleWidget_TitleSizeFromJSON(object.size) : 0,
    };
  },

  toJSON(message: TitleWidget): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.size !== 0) {
      obj.size = titleWidget_TitleSizeToJSON(message.size);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TitleWidget>, I>>(base?: I): TitleWidget {
    return TitleWidget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TitleWidget>, I>>(object: I): TitleWidget {
    const message = createBaseTitleWidget();
    message.text = object.text ?? "";
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(TitleWidget.$type, TitleWidget);

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
