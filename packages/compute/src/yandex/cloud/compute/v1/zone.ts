/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

/** Availability zone. For more information, see [Availability zones](/docs/overview/concepts/geo-scope). */
export interface Zone {
  $type: "yandex.cloud.compute.v1.Zone";
  /** ID of the zone. */
  id: string;
  /** ID of the region. */
  regionId: string;
  /** Status of the zone. */
  status: Zone_Status;
}

export enum Zone_Status {
  STATUS_UNSPECIFIED = 0,
  /** UP - Zone is available. You can access the resources allocated in this zone. */
  UP = 1,
  /** DOWN - Zone is not available. */
  DOWN = 2,
  UNRECOGNIZED = -1,
}

export function zone_StatusFromJSON(object: any): Zone_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Zone_Status.STATUS_UNSPECIFIED;
    case 1:
    case "UP":
      return Zone_Status.UP;
    case 2:
    case "DOWN":
      return Zone_Status.DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Zone_Status.UNRECOGNIZED;
  }
}

export function zone_StatusToJSON(object: Zone_Status): string {
  switch (object) {
    case Zone_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Zone_Status.UP:
      return "UP";
    case Zone_Status.DOWN:
      return "DOWN";
    case Zone_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseZone(): Zone {
  return { $type: "yandex.cloud.compute.v1.Zone", id: "", regionId: "", status: 0 };
}

export const Zone = {
  $type: "yandex.cloud.compute.v1.Zone" as const,

  encode(message: Zone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Zone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZone();
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

          message.regionId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Zone {
    return {
      $type: Zone.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
      status: isSet(object.status) ? zone_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Zone): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.regionId !== "") {
      obj.regionId = message.regionId;
    }
    if (message.status !== 0) {
      obj.status = zone_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Zone>, I>>(base?: I): Zone {
    return Zone.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Zone>, I>>(object: I): Zone {
    const message = createBaseZone();
    message.id = object.id ?? "";
    message.regionId = object.regionId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Zone.$type, Zone);

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
