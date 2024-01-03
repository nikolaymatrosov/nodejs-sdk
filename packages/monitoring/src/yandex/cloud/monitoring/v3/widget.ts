/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { ChartWidget } from "./chart_widget";
import { TextWidget } from "./text_widget";
import { TitleWidget } from "./title_widget";

export const protobufPackage = "yandex.cloud.monitoring.v3";

/** Widget. */
export interface Widget {
  $type: "yandex.cloud.monitoring.v3.Widget";
  /** Required. Widget layout position. */
  position?:
    | Widget_LayoutPosition
    | undefined;
  /** Text widget. */
  text?:
    | TextWidget
    | undefined;
  /** Title widget. */
  title?:
    | TitleWidget
    | undefined;
  /** Chart widget. */
  chart?: ChartWidget | undefined;
}

/** Layout item for widget item positioning. */
export interface Widget_LayoutPosition {
  $type: "yandex.cloud.monitoring.v3.Widget.LayoutPosition";
  /** Required. X-axis top-left corner coordinate. */
  x: number;
  /** Required. Y-axis top-left corner coordinate. */
  y: number;
  /** Required. Weight. */
  w: number;
  /** Required. Height. */
  h: number;
}

function createBaseWidget(): Widget {
  return {
    $type: "yandex.cloud.monitoring.v3.Widget",
    position: undefined,
    text: undefined,
    title: undefined,
    chart: undefined,
  };
}

export const Widget = {
  $type: "yandex.cloud.monitoring.v3.Widget" as const,

  encode(message: Widget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Widget_LayoutPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== undefined) {
      TextWidget.encode(message.text, writer.uint32(18).fork()).ldelim();
    }
    if (message.title !== undefined) {
      TitleWidget.encode(message.title, writer.uint32(26).fork()).ldelim();
    }
    if (message.chart !== undefined) {
      ChartWidget.encode(message.chart, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Widget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWidget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.position = Widget_LayoutPosition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = TextWidget.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = TitleWidget.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chart = ChartWidget.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Widget {
    return {
      $type: Widget.$type,
      position: isSet(object.position) ? Widget_LayoutPosition.fromJSON(object.position) : undefined,
      text: isSet(object.text) ? TextWidget.fromJSON(object.text) : undefined,
      title: isSet(object.title) ? TitleWidget.fromJSON(object.title) : undefined,
      chart: isSet(object.chart) ? ChartWidget.fromJSON(object.chart) : undefined,
    };
  },

  toJSON(message: Widget): unknown {
    const obj: any = {};
    if (message.position !== undefined) {
      obj.position = Widget_LayoutPosition.toJSON(message.position);
    }
    if (message.text !== undefined) {
      obj.text = TextWidget.toJSON(message.text);
    }
    if (message.title !== undefined) {
      obj.title = TitleWidget.toJSON(message.title);
    }
    if (message.chart !== undefined) {
      obj.chart = ChartWidget.toJSON(message.chart);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Widget>, I>>(base?: I): Widget {
    return Widget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Widget>, I>>(object: I): Widget {
    const message = createBaseWidget();
    message.position = (object.position !== undefined && object.position !== null)
      ? Widget_LayoutPosition.fromPartial(object.position)
      : undefined;
    message.text = (object.text !== undefined && object.text !== null)
      ? TextWidget.fromPartial(object.text)
      : undefined;
    message.title = (object.title !== undefined && object.title !== null)
      ? TitleWidget.fromPartial(object.title)
      : undefined;
    message.chart = (object.chart !== undefined && object.chart !== null)
      ? ChartWidget.fromPartial(object.chart)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Widget.$type, Widget);

function createBaseWidget_LayoutPosition(): Widget_LayoutPosition {
  return { $type: "yandex.cloud.monitoring.v3.Widget.LayoutPosition", x: 0, y: 0, w: 0, h: 0 };
}

export const Widget_LayoutPosition = {
  $type: "yandex.cloud.monitoring.v3.Widget.LayoutPosition" as const,

  encode(message: Widget_LayoutPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int64(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int64(message.y);
    }
    if (message.w !== 0) {
      writer.uint32(24).int64(message.w);
    }
    if (message.h !== 0) {
      writer.uint32(32).int64(message.h);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Widget_LayoutPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWidget_LayoutPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.x = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.y = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.w = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.h = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Widget_LayoutPosition {
    return {
      $type: Widget_LayoutPosition.$type,
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
      w: isSet(object.w) ? globalThis.Number(object.w) : 0,
      h: isSet(object.h) ? globalThis.Number(object.h) : 0,
    };
  },

  toJSON(message: Widget_LayoutPosition): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    if (message.w !== 0) {
      obj.w = Math.round(message.w);
    }
    if (message.h !== 0) {
      obj.h = Math.round(message.h);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Widget_LayoutPosition>, I>>(base?: I): Widget_LayoutPosition {
    return Widget_LayoutPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Widget_LayoutPosition>, I>>(object: I): Widget_LayoutPosition {
    const message = createBaseWidget_LayoutPosition();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.w = object.w ?? 0;
    message.h = object.h ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Widget_LayoutPosition.$type, Widget_LayoutPosition);

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
