/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

/** A preset of resources for hardware configuration of Greenplum® hosts. */
export interface ResourcePreset {
  $type: "yandex.cloud.mdb.greenplum.v1.ResourcePreset";
  /** ID of the resource preset. */
  id: string;
  /** IDs of availability zones where the resource preset is available. */
  zoneIds: string[];
  /** IDs of availability disk types available in the resource preset. */
  diskTypeIds: string[];
  /** Number of CPU cores for a Greenplum® host created with the preset. */
  cores: number;
  /** RAM volume for a Greenplum® host created with the preset, in bytes. */
  memory: number;
  /** Host type. */
  type: ResourcePreset_Type;
  /** The number of hosts must be divisible by [host_count_divider]. */
  hostCountDivider: number;
  /** Maximum number of segments in segment host. */
  maxSegmentInHostCount: number;
}

export enum ResourcePreset_Type {
  TYPE_UNSPECIFIED = 0,
  /** MASTER - Greenplum® master host. */
  MASTER = 1,
  /** SEGMENT - Greenplum® segment host. */
  SEGMENT = 2,
  UNRECOGNIZED = -1,
}

export function resourcePreset_TypeFromJSON(object: any): ResourcePreset_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return ResourcePreset_Type.TYPE_UNSPECIFIED;
    case 1:
    case "MASTER":
      return ResourcePreset_Type.MASTER;
    case 2:
    case "SEGMENT":
      return ResourcePreset_Type.SEGMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourcePreset_Type.UNRECOGNIZED;
  }
}

export function resourcePreset_TypeToJSON(object: ResourcePreset_Type): string {
  switch (object) {
    case ResourcePreset_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case ResourcePreset_Type.MASTER:
      return "MASTER";
    case ResourcePreset_Type.SEGMENT:
      return "SEGMENT";
    case ResourcePreset_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseResourcePreset(): ResourcePreset {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.ResourcePreset",
    id: "",
    zoneIds: [],
    diskTypeIds: [],
    cores: 0,
    memory: 0,
    type: 0,
    hostCountDivider: 0,
    maxSegmentInHostCount: 0,
  };
}

export const ResourcePreset = {
  $type: "yandex.cloud.mdb.greenplum.v1.ResourcePreset" as const,

  encode(message: ResourcePreset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.zoneIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.diskTypeIds) {
      writer.uint32(82).string(v!);
    }
    if (message.cores !== 0) {
      writer.uint32(24).int64(message.cores);
    }
    if (message.memory !== 0) {
      writer.uint32(32).int64(message.memory);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.hostCountDivider !== 0) {
      writer.uint32(64).int64(message.hostCountDivider);
    }
    if (message.maxSegmentInHostCount !== 0) {
      writer.uint32(72).int64(message.maxSegmentInHostCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcePreset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcePreset();
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

          message.zoneIds.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.diskTypeIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.cores = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.memory = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.hostCountDivider = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.maxSegmentInHostCount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourcePreset {
    return {
      $type: ResourcePreset.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      zoneIds: globalThis.Array.isArray(object?.zoneIds) ? object.zoneIds.map((e: any) => globalThis.String(e)) : [],
      diskTypeIds: globalThis.Array.isArray(object?.diskTypeIds)
        ? object.diskTypeIds.map((e: any) => globalThis.String(e))
        : [],
      cores: isSet(object.cores) ? globalThis.Number(object.cores) : 0,
      memory: isSet(object.memory) ? globalThis.Number(object.memory) : 0,
      type: isSet(object.type) ? resourcePreset_TypeFromJSON(object.type) : 0,
      hostCountDivider: isSet(object.hostCountDivider) ? globalThis.Number(object.hostCountDivider) : 0,
      maxSegmentInHostCount: isSet(object.maxSegmentInHostCount) ? globalThis.Number(object.maxSegmentInHostCount) : 0,
    };
  },

  toJSON(message: ResourcePreset): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.zoneIds?.length) {
      obj.zoneIds = message.zoneIds;
    }
    if (message.diskTypeIds?.length) {
      obj.diskTypeIds = message.diskTypeIds;
    }
    if (message.cores !== 0) {
      obj.cores = Math.round(message.cores);
    }
    if (message.memory !== 0) {
      obj.memory = Math.round(message.memory);
    }
    if (message.type !== 0) {
      obj.type = resourcePreset_TypeToJSON(message.type);
    }
    if (message.hostCountDivider !== 0) {
      obj.hostCountDivider = Math.round(message.hostCountDivider);
    }
    if (message.maxSegmentInHostCount !== 0) {
      obj.maxSegmentInHostCount = Math.round(message.maxSegmentInHostCount);
    }
    return obj;
  },

  create(base?: DeepPartial<ResourcePreset>): ResourcePreset {
    return ResourcePreset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResourcePreset>): ResourcePreset {
    const message = createBaseResourcePreset();
    message.id = object.id ?? "";
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.diskTypeIds = object.diskTypeIds?.map((e) => e) || [];
    message.cores = object.cores ?? 0;
    message.memory = object.memory ?? 0;
    message.type = object.type ?? 0;
    message.hostCountDivider = object.hostCountDivider ?? 0;
    message.maxSegmentInHostCount = object.maxSegmentInHostCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ResourcePreset.$type, ResourcePreset);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
