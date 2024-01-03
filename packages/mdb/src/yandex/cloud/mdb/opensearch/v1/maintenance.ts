/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

/** An OpenSearch cluster maintenance window. Should be defined by either one of the two options. */
export interface MaintenanceWindow {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceWindow";
  /** An any-time maintenance window. */
  anytime?:
    | AnytimeMaintenanceWindow
    | undefined;
  /** A weekly maintenance window. */
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow | undefined;
}

/** An any-time maintenance window. */
export interface AnytimeMaintenanceWindow {
  $type: "yandex.cloud.mdb.opensearch.v1.AnytimeMaintenanceWindow";
}

/** A weekly maintenance window. */
export interface WeeklyMaintenanceWindow {
  $type: "yandex.cloud.mdb.opensearch.v1.WeeklyMaintenanceWindow";
  /** Day of the week. */
  day: WeeklyMaintenanceWindow_WeekDay;
  /** Hour of the day in the UTC timezone. */
  hour: number;
}

export enum WeeklyMaintenanceWindow_WeekDay {
  WEEK_DAY_UNSPECIFIED = 0,
  /** MON - Monday */
  MON = 1,
  /** TUE - Tuesday */
  TUE = 2,
  /** WED - Wednesday */
  WED = 3,
  /** THU - Thursday */
  THU = 4,
  /** FRI - Friday */
  FRI = 5,
  /** SAT - Saturday */
  SAT = 6,
  /** SUN - Sunday */
  SUN = 7,
  UNRECOGNIZED = -1,
}

export function weeklyMaintenanceWindow_WeekDayFromJSON(object: any): WeeklyMaintenanceWindow_WeekDay {
  switch (object) {
    case 0:
    case "WEEK_DAY_UNSPECIFIED":
      return WeeklyMaintenanceWindow_WeekDay.WEEK_DAY_UNSPECIFIED;
    case 1:
    case "MON":
      return WeeklyMaintenanceWindow_WeekDay.MON;
    case 2:
    case "TUE":
      return WeeklyMaintenanceWindow_WeekDay.TUE;
    case 3:
    case "WED":
      return WeeklyMaintenanceWindow_WeekDay.WED;
    case 4:
    case "THU":
      return WeeklyMaintenanceWindow_WeekDay.THU;
    case 5:
    case "FRI":
      return WeeklyMaintenanceWindow_WeekDay.FRI;
    case 6:
    case "SAT":
      return WeeklyMaintenanceWindow_WeekDay.SAT;
    case 7:
    case "SUN":
      return WeeklyMaintenanceWindow_WeekDay.SUN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WeeklyMaintenanceWindow_WeekDay.UNRECOGNIZED;
  }
}

export function weeklyMaintenanceWindow_WeekDayToJSON(object: WeeklyMaintenanceWindow_WeekDay): string {
  switch (object) {
    case WeeklyMaintenanceWindow_WeekDay.WEEK_DAY_UNSPECIFIED:
      return "WEEK_DAY_UNSPECIFIED";
    case WeeklyMaintenanceWindow_WeekDay.MON:
      return "MON";
    case WeeklyMaintenanceWindow_WeekDay.TUE:
      return "TUE";
    case WeeklyMaintenanceWindow_WeekDay.WED:
      return "WED";
    case WeeklyMaintenanceWindow_WeekDay.THU:
      return "THU";
    case WeeklyMaintenanceWindow_WeekDay.FRI:
      return "FRI";
    case WeeklyMaintenanceWindow_WeekDay.SAT:
      return "SAT";
    case WeeklyMaintenanceWindow_WeekDay.SUN:
      return "SUN";
    case WeeklyMaintenanceWindow_WeekDay.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MaintenanceOperation {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceOperation";
  /** The description of the operation. */
  info: string;
  /** Delay time for the maintenance operation. */
  delayedUntil?:
    | Date
    | undefined;
  /** Time of the last maintenance window. */
  latestMaintenanceTime?:
    | Date
    | undefined;
  /** Time of the next maintenance window. */
  nextMaintenanceWindowTime?: Date | undefined;
}

function createBaseMaintenanceWindow(): MaintenanceWindow {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceWindow",
    anytime: undefined,
    weeklyMaintenanceWindow: undefined,
  };
}

export const MaintenanceWindow = {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceWindow" as const,

  encode(message: MaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.anytime !== undefined) {
      AnytimeMaintenanceWindow.encode(message.anytime, writer.uint32(10).fork()).ldelim();
    }
    if (message.weeklyMaintenanceWindow !== undefined) {
      WeeklyMaintenanceWindow.encode(message.weeklyMaintenanceWindow, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaintenanceWindow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaintenanceWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.anytime = AnytimeMaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.weeklyMaintenanceWindow = WeeklyMaintenanceWindow.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaintenanceWindow {
    return {
      $type: MaintenanceWindow.$type,
      anytime: isSet(object.anytime) ? AnytimeMaintenanceWindow.fromJSON(object.anytime) : undefined,
      weeklyMaintenanceWindow: isSet(object.weeklyMaintenanceWindow)
        ? WeeklyMaintenanceWindow.fromJSON(object.weeklyMaintenanceWindow)
        : undefined,
    };
  },

  toJSON(message: MaintenanceWindow): unknown {
    const obj: any = {};
    if (message.anytime !== undefined) {
      obj.anytime = AnytimeMaintenanceWindow.toJSON(message.anytime);
    }
    if (message.weeklyMaintenanceWindow !== undefined) {
      obj.weeklyMaintenanceWindow = WeeklyMaintenanceWindow.toJSON(message.weeklyMaintenanceWindow);
    }
    return obj;
  },

  create(base?: DeepPartial<MaintenanceWindow>): MaintenanceWindow {
    return MaintenanceWindow.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MaintenanceWindow>): MaintenanceWindow {
    const message = createBaseMaintenanceWindow();
    message.anytime = (object.anytime !== undefined && object.anytime !== null)
      ? AnytimeMaintenanceWindow.fromPartial(object.anytime)
      : undefined;
    message.weeklyMaintenanceWindow =
      (object.weeklyMaintenanceWindow !== undefined && object.weeklyMaintenanceWindow !== null)
        ? WeeklyMaintenanceWindow.fromPartial(object.weeklyMaintenanceWindow)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MaintenanceWindow.$type, MaintenanceWindow);

function createBaseAnytimeMaintenanceWindow(): AnytimeMaintenanceWindow {
  return { $type: "yandex.cloud.mdb.opensearch.v1.AnytimeMaintenanceWindow" };
}

export const AnytimeMaintenanceWindow = {
  $type: "yandex.cloud.mdb.opensearch.v1.AnytimeMaintenanceWindow" as const,

  encode(_: AnytimeMaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnytimeMaintenanceWindow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnytimeMaintenanceWindow();
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

  fromJSON(_: any): AnytimeMaintenanceWindow {
    return { $type: AnytimeMaintenanceWindow.$type };
  },

  toJSON(_: AnytimeMaintenanceWindow): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AnytimeMaintenanceWindow>): AnytimeMaintenanceWindow {
    return AnytimeMaintenanceWindow.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AnytimeMaintenanceWindow>): AnytimeMaintenanceWindow {
    const message = createBaseAnytimeMaintenanceWindow();
    return message;
  },
};

messageTypeRegistry.set(AnytimeMaintenanceWindow.$type, AnytimeMaintenanceWindow);

function createBaseWeeklyMaintenanceWindow(): WeeklyMaintenanceWindow {
  return { $type: "yandex.cloud.mdb.opensearch.v1.WeeklyMaintenanceWindow", day: 0, hour: 0 };
}

export const WeeklyMaintenanceWindow = {
  $type: "yandex.cloud.mdb.opensearch.v1.WeeklyMaintenanceWindow" as const,

  encode(message: WeeklyMaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.day !== 0) {
      writer.uint32(8).int32(message.day);
    }
    if (message.hour !== 0) {
      writer.uint32(16).int64(message.hour);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeeklyMaintenanceWindow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeeklyMaintenanceWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.day = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.hour = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WeeklyMaintenanceWindow {
    return {
      $type: WeeklyMaintenanceWindow.$type,
      day: isSet(object.day) ? weeklyMaintenanceWindow_WeekDayFromJSON(object.day) : 0,
      hour: isSet(object.hour) ? globalThis.Number(object.hour) : 0,
    };
  },

  toJSON(message: WeeklyMaintenanceWindow): unknown {
    const obj: any = {};
    if (message.day !== 0) {
      obj.day = weeklyMaintenanceWindow_WeekDayToJSON(message.day);
    }
    if (message.hour !== 0) {
      obj.hour = Math.round(message.hour);
    }
    return obj;
  },

  create(base?: DeepPartial<WeeklyMaintenanceWindow>): WeeklyMaintenanceWindow {
    return WeeklyMaintenanceWindow.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WeeklyMaintenanceWindow>): WeeklyMaintenanceWindow {
    const message = createBaseWeeklyMaintenanceWindow();
    message.day = object.day ?? 0;
    message.hour = object.hour ?? 0;
    return message;
  },
};

messageTypeRegistry.set(WeeklyMaintenanceWindow.$type, WeeklyMaintenanceWindow);

function createBaseMaintenanceOperation(): MaintenanceOperation {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceOperation",
    info: "",
    delayedUntil: undefined,
    latestMaintenanceTime: undefined,
    nextMaintenanceWindowTime: undefined,
  };
}

export const MaintenanceOperation = {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceOperation" as const,

  encode(message: MaintenanceOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== "") {
      writer.uint32(10).string(message.info);
    }
    if (message.delayedUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(18).fork()).ldelim();
    }
    if (message.latestMaintenanceTime !== undefined) {
      Timestamp.encode(toTimestamp(message.latestMaintenanceTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.nextMaintenanceWindowTime !== undefined) {
      Timestamp.encode(toTimestamp(message.nextMaintenanceWindowTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaintenanceOperation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaintenanceOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.info = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.delayedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.latestMaintenanceTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextMaintenanceWindowTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaintenanceOperation {
    return {
      $type: MaintenanceOperation.$type,
      info: isSet(object.info) ? globalThis.String(object.info) : "",
      delayedUntil: isSet(object.delayedUntil) ? fromJsonTimestamp(object.delayedUntil) : undefined,
      latestMaintenanceTime: isSet(object.latestMaintenanceTime)
        ? fromJsonTimestamp(object.latestMaintenanceTime)
        : undefined,
      nextMaintenanceWindowTime: isSet(object.nextMaintenanceWindowTime)
        ? fromJsonTimestamp(object.nextMaintenanceWindowTime)
        : undefined,
    };
  },

  toJSON(message: MaintenanceOperation): unknown {
    const obj: any = {};
    if (message.info !== "") {
      obj.info = message.info;
    }
    if (message.delayedUntil !== undefined) {
      obj.delayedUntil = message.delayedUntil.toISOString();
    }
    if (message.latestMaintenanceTime !== undefined) {
      obj.latestMaintenanceTime = message.latestMaintenanceTime.toISOString();
    }
    if (message.nextMaintenanceWindowTime !== undefined) {
      obj.nextMaintenanceWindowTime = message.nextMaintenanceWindowTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<MaintenanceOperation>): MaintenanceOperation {
    return MaintenanceOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MaintenanceOperation>): MaintenanceOperation {
    const message = createBaseMaintenanceOperation();
    message.info = object.info ?? "";
    message.delayedUntil = object.delayedUntil ?? undefined;
    message.latestMaintenanceTime = object.latestMaintenanceTime ?? undefined;
    message.nextMaintenanceWindowTime = object.nextMaintenanceWindowTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MaintenanceOperation.$type, MaintenanceOperation);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
