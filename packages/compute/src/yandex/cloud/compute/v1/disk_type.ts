/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface DiskType {
  $type: "yandex.cloud.compute.v1.DiskType";
  /** ID of the disk type. */
  id: string;
  /** Description of the disk type. 0-256 characters long. */
  description: string;
  /** Array of availability zones where the disk type is available. */
  zoneIds: string[];
}

function createBaseDiskType(): DiskType {
  return { $type: "yandex.cloud.compute.v1.DiskType", id: "", description: "", zoneIds: [] };
}

export const DiskType = {
  $type: "yandex.cloud.compute.v1.DiskType" as const,

  encode(message: DiskType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.zoneIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskType();
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

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.zoneIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiskType {
    return {
      $type: DiskType.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      zoneIds: globalThis.Array.isArray(object?.zoneIds) ? object.zoneIds.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: DiskType): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.zoneIds?.length) {
      obj.zoneIds = message.zoneIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiskType>, I>>(base?: I): DiskType {
    return DiskType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiskType>, I>>(object: I): DiskType {
    const message = createBaseDiskType();
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(DiskType.$type, DiskType);

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
