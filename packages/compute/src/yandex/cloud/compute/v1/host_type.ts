/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

/**
 * Represents host resources.
 * Note: Platform can use hosts with different number of memory and cores.
 * TODO: Do we need sockets here?
 */
export interface HostType {
  $type: "yandex.cloud.compute.v1.HostType";
  /** Unique type identifier. */
  id: string;
  /** Total number of cores available for instances. */
  cores: number;
  /** Ammount of memory available for instances. */
  memory: number;
  /** Number of local disks available for instances */
  disks: number;
  /** Size of each local disk */
  diskSize: number;
}

function createBaseHostType(): HostType {
  return { $type: "yandex.cloud.compute.v1.HostType", id: "", cores: 0, memory: 0, disks: 0, diskSize: 0 };
}

export const HostType = {
  $type: "yandex.cloud.compute.v1.HostType" as const,

  encode(message: HostType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.cores !== 0) {
      writer.uint32(16).int64(message.cores);
    }
    if (message.memory !== 0) {
      writer.uint32(24).int64(message.memory);
    }
    if (message.disks !== 0) {
      writer.uint32(32).int64(message.disks);
    }
    if (message.diskSize !== 0) {
      writer.uint32(40).int64(message.diskSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostType();
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
          if (tag !== 16) {
            break;
          }

          message.cores = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.memory = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.disks = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): HostType {
    return {
      $type: HostType.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      cores: isSet(object.cores) ? globalThis.Number(object.cores) : 0,
      memory: isSet(object.memory) ? globalThis.Number(object.memory) : 0,
      disks: isSet(object.disks) ? globalThis.Number(object.disks) : 0,
      diskSize: isSet(object.diskSize) ? globalThis.Number(object.diskSize) : 0,
    };
  },

  toJSON(message: HostType): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.cores !== 0) {
      obj.cores = Math.round(message.cores);
    }
    if (message.memory !== 0) {
      obj.memory = Math.round(message.memory);
    }
    if (message.disks !== 0) {
      obj.disks = Math.round(message.disks);
    }
    if (message.diskSize !== 0) {
      obj.diskSize = Math.round(message.diskSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HostType>, I>>(base?: I): HostType {
    return HostType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HostType>, I>>(object: I): HostType {
    const message = createBaseHostType();
    message.id = object.id ?? "";
    message.cores = object.cores ?? 0;
    message.memory = object.memory ?? 0;
    message.disks = object.disks ?? 0;
    message.diskSize = object.diskSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(HostType.$type, HostType);

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
