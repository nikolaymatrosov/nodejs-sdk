/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { DayOfWeek, dayOfWeekFromJSON, dayOfWeekToJSON } from "@yandex-cloud/core/dist/generated/google/type/dayofweek";
import { TimeOfDay } from "@yandex-cloud/core/dist/generated/google/type/timeofday";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.k8s.v1";

export interface MaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.MaintenanceWindow";
  /** Updating the master at any time. */
  anytime?:
    | AnytimeMaintenanceWindow
    | undefined;
  /** Updating the master on any day during the specified time window. */
  dailyMaintenanceWindow?:
    | DailyMaintenanceWindow
    | undefined;
  /** Updating the master on selected days during the specified time window. */
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow | undefined;
}

export interface AnytimeMaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow";
}

export interface DailyMaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow";
  /** Window start time, in the UTC timezone. */
  startTime?:
    | TimeOfDay
    | undefined;
  /** Window duration. */
  duration?: Duration | undefined;
}

export interface DaysOfWeekMaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow";
  /** Days of the week when automatic updates are allowed. */
  days: DayOfWeek[];
  /** Window start time, in the UTC timezone. */
  startTime?:
    | TimeOfDay
    | undefined;
  /** Window duration. */
  duration?: Duration | undefined;
}

export interface WeeklyMaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow";
  /** Days of the week and the maintenance window for these days when automatic updates are allowed. */
  daysOfWeek: DaysOfWeekMaintenanceWindow[];
}

function createBaseMaintenanceWindow(): MaintenanceWindow {
  return {
    $type: "yandex.cloud.k8s.v1.MaintenanceWindow",
    anytime: undefined,
    dailyMaintenanceWindow: undefined,
    weeklyMaintenanceWindow: undefined,
  };
}

export const MaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.MaintenanceWindow" as const,

  encode(message: MaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.anytime !== undefined) {
      AnytimeMaintenanceWindow.encode(message.anytime, writer.uint32(10).fork()).ldelim();
    }
    if (message.dailyMaintenanceWindow !== undefined) {
      DailyMaintenanceWindow.encode(message.dailyMaintenanceWindow, writer.uint32(18).fork()).ldelim();
    }
    if (message.weeklyMaintenanceWindow !== undefined) {
      WeeklyMaintenanceWindow.encode(message.weeklyMaintenanceWindow, writer.uint32(26).fork()).ldelim();
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

          message.dailyMaintenanceWindow = DailyMaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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
      dailyMaintenanceWindow: isSet(object.dailyMaintenanceWindow)
        ? DailyMaintenanceWindow.fromJSON(object.dailyMaintenanceWindow)
        : undefined,
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
    if (message.dailyMaintenanceWindow !== undefined) {
      obj.dailyMaintenanceWindow = DailyMaintenanceWindow.toJSON(message.dailyMaintenanceWindow);
    }
    if (message.weeklyMaintenanceWindow !== undefined) {
      obj.weeklyMaintenanceWindow = WeeklyMaintenanceWindow.toJSON(message.weeklyMaintenanceWindow);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MaintenanceWindow>, I>>(base?: I): MaintenanceWindow {
    return MaintenanceWindow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MaintenanceWindow>, I>>(object: I): MaintenanceWindow {
    const message = createBaseMaintenanceWindow();
    message.anytime = (object.anytime !== undefined && object.anytime !== null)
      ? AnytimeMaintenanceWindow.fromPartial(object.anytime)
      : undefined;
    message.dailyMaintenanceWindow =
      (object.dailyMaintenanceWindow !== undefined && object.dailyMaintenanceWindow !== null)
        ? DailyMaintenanceWindow.fromPartial(object.dailyMaintenanceWindow)
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
  return { $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow" };
}

export const AnytimeMaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow" as const,

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

  create<I extends Exact<DeepPartial<AnytimeMaintenanceWindow>, I>>(base?: I): AnytimeMaintenanceWindow {
    return AnytimeMaintenanceWindow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AnytimeMaintenanceWindow>, I>>(_: I): AnytimeMaintenanceWindow {
    const message = createBaseAnytimeMaintenanceWindow();
    return message;
  },
};

messageTypeRegistry.set(AnytimeMaintenanceWindow.$type, AnytimeMaintenanceWindow);

function createBaseDailyMaintenanceWindow(): DailyMaintenanceWindow {
  return { $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow", startTime: undefined, duration: undefined };
}

export const DailyMaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow" as const,

  encode(message: DailyMaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) {
      TimeOfDay.encode(message.startTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DailyMaintenanceWindow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDailyMaintenanceWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startTime = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DailyMaintenanceWindow {
    return {
      $type: DailyMaintenanceWindow.$type,
      startTime: isSet(object.startTime) ? TimeOfDay.fromJSON(object.startTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: DailyMaintenanceWindow): unknown {
    const obj: any = {};
    if (message.startTime !== undefined) {
      obj.startTime = TimeOfDay.toJSON(message.startTime);
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DailyMaintenanceWindow>, I>>(base?: I): DailyMaintenanceWindow {
    return DailyMaintenanceWindow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DailyMaintenanceWindow>, I>>(object: I): DailyMaintenanceWindow {
    const message = createBaseDailyMaintenanceWindow();
    message.startTime = (object.startTime !== undefined && object.startTime !== null)
      ? TimeOfDay.fromPartial(object.startTime)
      : undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(DailyMaintenanceWindow.$type, DailyMaintenanceWindow);

function createBaseDaysOfWeekMaintenanceWindow(): DaysOfWeekMaintenanceWindow {
  return {
    $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow",
    days: [],
    startTime: undefined,
    duration: undefined,
  };
}

export const DaysOfWeekMaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow" as const,

  encode(message: DaysOfWeekMaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.days) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.startTime !== undefined) {
      TimeOfDay.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DaysOfWeekMaintenanceWindow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDaysOfWeekMaintenanceWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.days.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.days.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.startTime = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DaysOfWeekMaintenanceWindow {
    return {
      $type: DaysOfWeekMaintenanceWindow.$type,
      days: globalThis.Array.isArray(object?.days) ? object.days.map((e: any) => dayOfWeekFromJSON(e)) : [],
      startTime: isSet(object.startTime) ? TimeOfDay.fromJSON(object.startTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: DaysOfWeekMaintenanceWindow): unknown {
    const obj: any = {};
    if (message.days?.length) {
      obj.days = message.days.map((e) => dayOfWeekToJSON(e));
    }
    if (message.startTime !== undefined) {
      obj.startTime = TimeOfDay.toJSON(message.startTime);
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DaysOfWeekMaintenanceWindow>, I>>(base?: I): DaysOfWeekMaintenanceWindow {
    return DaysOfWeekMaintenanceWindow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DaysOfWeekMaintenanceWindow>, I>>(object: I): DaysOfWeekMaintenanceWindow {
    const message = createBaseDaysOfWeekMaintenanceWindow();
    message.days = object.days?.map((e) => e) || [];
    message.startTime = (object.startTime !== undefined && object.startTime !== null)
      ? TimeOfDay.fromPartial(object.startTime)
      : undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(DaysOfWeekMaintenanceWindow.$type, DaysOfWeekMaintenanceWindow);

function createBaseWeeklyMaintenanceWindow(): WeeklyMaintenanceWindow {
  return { $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow", daysOfWeek: [] };
}

export const WeeklyMaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow" as const,

  encode(message: WeeklyMaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.daysOfWeek) {
      DaysOfWeekMaintenanceWindow.encode(v!, writer.uint32(10).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.daysOfWeek.push(DaysOfWeekMaintenanceWindow.decode(reader, reader.uint32()));
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
      daysOfWeek: globalThis.Array.isArray(object?.daysOfWeek)
        ? object.daysOfWeek.map((e: any) => DaysOfWeekMaintenanceWindow.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WeeklyMaintenanceWindow): unknown {
    const obj: any = {};
    if (message.daysOfWeek?.length) {
      obj.daysOfWeek = message.daysOfWeek.map((e) => DaysOfWeekMaintenanceWindow.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WeeklyMaintenanceWindow>, I>>(base?: I): WeeklyMaintenanceWindow {
    return WeeklyMaintenanceWindow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WeeklyMaintenanceWindow>, I>>(object: I): WeeklyMaintenanceWindow {
    const message = createBaseWeeklyMaintenanceWindow();
    message.daysOfWeek = object.daysOfWeek?.map((e) => DaysOfWeekMaintenanceWindow.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(WeeklyMaintenanceWindow.$type, WeeklyMaintenanceWindow);

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
