/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface Lock {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Lock";
  id: string;
  instanceId: string;
  resourceId: string;
  startTime?: Date | undefined;
  endTime?: Date | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  state: Lock_State;
}

export enum Lock_State {
  STATE_UNSPECIFIED = 0,
  UNLOCKED = 1,
  LOCKED = 2,
  DELETED = 3,
  UNRECOGNIZED = -1,
}

export function lock_StateFromJSON(object: any): Lock_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Lock_State.STATE_UNSPECIFIED;
    case 1:
    case "UNLOCKED":
      return Lock_State.UNLOCKED;
    case 2:
    case "LOCKED":
      return Lock_State.LOCKED;
    case 3:
    case "DELETED":
      return Lock_State.DELETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lock_State.UNRECOGNIZED;
  }
}

export function lock_StateToJSON(object: Lock_State): string {
  switch (object) {
    case Lock_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Lock_State.UNLOCKED:
      return "UNLOCKED";
    case Lock_State.LOCKED:
      return "LOCKED";
    case Lock_State.DELETED:
      return "DELETED";
    case Lock_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLock(): Lock {
  return {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Lock",
    id: "",
    instanceId: "",
    resourceId: "",
    startTime: undefined,
    endTime: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    state: 0,
  };
}

export const Lock = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Lock" as const,

  encode(message: Lock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.instanceId !== "") {
      writer.uint32(18).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(26).string(message.resourceId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(64).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lock {
    return {
      $type: Lock.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      state: isSet(object.state) ? lock_StateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: Lock): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.endTime !== undefined) {
      obj.endTime = message.endTime.toISOString();
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.state !== 0) {
      obj.state = lock_StateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Lock>, I>>(base?: I): Lock {
    return Lock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Lock>, I>>(object: I): Lock {
    const message = createBaseLock();
    message.id = object.id ?? "";
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Lock.$type, Lock);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
