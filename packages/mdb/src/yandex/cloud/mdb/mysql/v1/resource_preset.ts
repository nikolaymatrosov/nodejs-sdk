/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1";

/**
 * An object that represents MySQL resource preset.
 * A resource preset defines hardware configuration for cluster hosts.
 *
 * See [the documentation](/docs/managed-mysql/concepts/instance-types) for details.
 */
export interface ResourcePreset {
  $type: "yandex.cloud.mdb.mysql.v1.ResourcePreset";
  /** ID of the resource preset that defines available computational resources (vCPU, RAM, etc.) for a cluster host. */
  id: string;
  /** IDs of availability zones where the resource preset is available. */
  zoneIds: string[];
  /** Number of CPU cores for a MySQL host created with the preset. */
  cores: number;
  /** RAM volume for a MySQL host created with the preset, in bytes. */
  memory: number;
}

function createBaseResourcePreset(): ResourcePreset {
  return { $type: "yandex.cloud.mdb.mysql.v1.ResourcePreset", id: "", zoneIds: [], cores: 0, memory: 0 };
}

export const ResourcePreset = {
  $type: "yandex.cloud.mdb.mysql.v1.ResourcePreset" as const,

  encode(message: ResourcePreset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.zoneIds) {
      writer.uint32(18).string(v!);
    }
    if (message.cores !== 0) {
      writer.uint32(24).int64(message.cores);
    }
    if (message.memory !== 0) {
      writer.uint32(32).int64(message.memory);
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
      cores: isSet(object.cores) ? globalThis.Number(object.cores) : 0,
      memory: isSet(object.memory) ? globalThis.Number(object.memory) : 0,
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
    if (message.cores !== 0) {
      obj.cores = Math.round(message.cores);
    }
    if (message.memory !== 0) {
      obj.memory = Math.round(message.memory);
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
    message.cores = object.cores ?? 0;
    message.memory = object.memory ?? 0;
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
