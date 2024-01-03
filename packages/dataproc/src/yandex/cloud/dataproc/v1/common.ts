/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.dataproc.v1";

export enum Health {
  /** HEALTH_UNKNOWN - Object is in unknown state (we have no data). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Object is alive and well (for example, all hosts of the cluster are alive). */
  ALIVE = 1,
  /** DEAD - Object is inoperable (it cannot perform any of its essential functions). */
  DEAD = 2,
  /** DEGRADED - Object is partially alive (it can perform some of its essential functions). */
  DEGRADED = 3,
  UNRECOGNIZED = -1,
}

export function healthFromJSON(object: any): Health {
  switch (object) {
    case 0:
    case "HEALTH_UNKNOWN":
      return Health.HEALTH_UNKNOWN;
    case 1:
    case "ALIVE":
      return Health.ALIVE;
    case 2:
    case "DEAD":
      return Health.DEAD;
    case 3:
    case "DEGRADED":
      return Health.DEGRADED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Health.UNRECOGNIZED;
  }
}

export function healthToJSON(object: Health): string {
  switch (object) {
    case Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
    case Health.ALIVE:
      return "ALIVE";
    case Health.DEAD:
      return "DEAD";
    case Health.DEGRADED:
      return "DEGRADED";
    case Health.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Resources {
  $type: "yandex.cloud.dataproc.v1.Resources";
  /**
   * ID of the resource preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/data-proc/concepts/instance-types).
   */
  resourcePresetId: string;
  /**
   * Type of the storage environment for the host.
   * Possible values:
   * * network-hdd - network HDD drive,
   * * network-ssd - network SSD drive.
   */
  diskTypeId: string;
  /** Volume of the storage available to a host, in bytes. */
  diskSize: number;
}

function createBaseResources(): Resources {
  return { $type: "yandex.cloud.dataproc.v1.Resources", resourcePresetId: "", diskTypeId: "", diskSize: 0 };
}

export const Resources = {
  $type: "yandex.cloud.dataproc.v1.Resources" as const,

  encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    if (message.diskTypeId !== "") {
      writer.uint32(18).string(message.diskTypeId);
    }
    if (message.diskSize !== 0) {
      writer.uint32(24).int64(message.diskSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourcePresetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.diskTypeId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.diskSize = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resources {
    return {
      $type: Resources.$type,
      resourcePresetId: isSet(object.resourcePresetId) ? globalThis.String(object.resourcePresetId) : "",
      diskTypeId: isSet(object.diskTypeId) ? globalThis.String(object.diskTypeId) : "",
      diskSize: isSet(object.diskSize) ? globalThis.Number(object.diskSize) : 0,
    };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.resourcePresetId !== "") {
      obj.resourcePresetId = message.resourcePresetId;
    }
    if (message.diskTypeId !== "") {
      obj.diskTypeId = message.diskTypeId;
    }
    if (message.diskSize !== 0) {
      obj.diskSize = Math.round(message.diskSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resources>, I>>(base?: I): Resources {
    return Resources.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
    const message = createBaseResources();
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.diskTypeId = object.diskTypeId ?? "";
    message.diskSize = object.diskSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

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
