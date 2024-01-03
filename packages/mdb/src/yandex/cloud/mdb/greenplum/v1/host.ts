/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Resources } from "./config";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

/** A Greenplum® cluster host resource. */
export interface Host {
  $type: "yandex.cloud.mdb.greenplum.v1.Host";
  /**
   * Name of the Greenplum® host.
   *
   * The host name is assigned by the platform at creation time and cannot be changed.
   *
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the Greenplum® cluster. The ID is assigned by the platform at creation time. */
  clusterId: string;
  /** ID of the availability zone the Greenplum® host belongs to. */
  zoneId: string;
  /** Type of the host. */
  type: Host_Type;
  /** Resources allocated to the Greenplum® host. */
  resources?:
    | Resources
    | undefined;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Determines whether a public IP is assigned to the host. */
  assignPublicIp: boolean;
}

export enum Host_Type {
  /** TYPE_UNSPECIFIED - The type is not specified. */
  TYPE_UNSPECIFIED = 0,
  /** MASTER - A Greenplum® master host. */
  MASTER = 1,
  /** REPLICA - A Greenplum® master replica host. */
  REPLICA = 2,
  /** SEGMENT - A Greenplum® segment host. */
  SEGMENT = 3,
  UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Host_Type.TYPE_UNSPECIFIED;
    case 1:
    case "MASTER":
      return Host_Type.MASTER;
    case 2:
    case "REPLICA":
      return Host_Type.REPLICA;
    case 3:
    case "SEGMENT":
      return Host_Type.SEGMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Type.UNRECOGNIZED;
  }
}

export function host_TypeToJSON(object: Host_Type): string {
  switch (object) {
    case Host_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Host_Type.MASTER:
      return "MASTER";
    case Host_Type.REPLICA:
      return "REPLICA";
    case Host_Type.SEGMENT:
      return "SEGMENT";
    case Host_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Host_Health {
  /** UNKNOWN - Health of the host is unknown. */
  UNKNOWN = 0,
  /** ALIVE - The host is performing all its functions normally. */
  ALIVE = 1,
  /** DEAD - The host is inoperable and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - The host is working below capacity or not fully functional. */
  DEGRADED = 3,
  /** UNBALANCED - One or more segments are not in the preferred role. */
  UNBALANCED = 4,
  UNRECOGNIZED = -1,
}

export function host_HealthFromJSON(object: any): Host_Health {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Host_Health.UNKNOWN;
    case 1:
    case "ALIVE":
      return Host_Health.ALIVE;
    case 2:
    case "DEAD":
      return Host_Health.DEAD;
    case 3:
    case "DEGRADED":
      return Host_Health.DEGRADED;
    case 4:
    case "UNBALANCED":
      return Host_Health.UNBALANCED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Health.UNRECOGNIZED;
  }
}

export function host_HealthToJSON(object: Host_Health): string {
  switch (object) {
    case Host_Health.UNKNOWN:
      return "UNKNOWN";
    case Host_Health.ALIVE:
      return "ALIVE";
    case Host_Health.DEAD:
      return "DEAD";
    case Host_Health.DEGRADED:
      return "DEGRADED";
    case Host_Health.UNBALANCED:
      return "UNBALANCED";
    case Host_Health.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseHost(): Host {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    type: 0,
    resources: undefined,
    health: 0,
    subnetId: "",
    assignPublicIp: false,
  };
}

export const Host = {
  $type: "yandex.cloud.mdb.greenplum.v1.Host" as const,

  encode(message: Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.zoneId !== "") {
      writer.uint32(26).string(message.zoneId);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.health !== 0) {
      writer.uint32(48).int32(message.health);
    }
    if (message.subnetId !== "") {
      writer.uint32(58).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(64).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.health = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Host {
    return {
      $type: Host.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      type: isSet(object.type) ? host_TypeFromJSON(object.type) : 0,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      health: isSet(object.health) ? host_HealthFromJSON(object.health) : 0,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
    };
  },

  toJSON(message: Host): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.type !== 0) {
      obj.type = host_TypeToJSON(message.type);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.health !== 0) {
      obj.health = host_HealthToJSON(message.health);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    return obj;
  },

  create(base?: DeepPartial<Host>): Host {
    return Host.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Host>): Host {
    const message = createBaseHost();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.type = object.type ?? 0;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.health = object.health ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
