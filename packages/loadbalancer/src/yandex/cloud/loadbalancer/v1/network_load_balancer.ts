/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { HealthCheck } from "./health_check";

export const protobufPackage = "yandex.cloud.loadbalancer.v1";

/**
 * IP version of the addresses that the load balancer works with.
 * Only IPv4 is currently available.
 */
export enum IpVersion {
  IP_VERSION_UNSPECIFIED = 0,
  /** IPV4 - IPv4 */
  IPV4 = 1,
  /** IPV6 - IPv6 */
  IPV6 = 2,
  UNRECOGNIZED = -1,
}

export function ipVersionFromJSON(object: any): IpVersion {
  switch (object) {
    case 0:
    case "IP_VERSION_UNSPECIFIED":
      return IpVersion.IP_VERSION_UNSPECIFIED;
    case 1:
    case "IPV4":
      return IpVersion.IPV4;
    case 2:
    case "IPV6":
      return IpVersion.IPV6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IpVersion.UNRECOGNIZED;
  }
}

export function ipVersionToJSON(object: IpVersion): string {
  switch (object) {
    case IpVersion.IP_VERSION_UNSPECIFIED:
      return "IP_VERSION_UNSPECIFIED";
    case IpVersion.IPV4:
      return "IPV4";
    case IpVersion.IPV6:
      return "IPV6";
    case IpVersion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A NetworkLoadBalancer resource. For more information, see [Network Load Balancer](/docs/network-load-balancer/concepts). */
export interface NetworkLoadBalancer {
  $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer";
  /** ID of the network load balancer. */
  id: string;
  /** ID of the folder that the network load balancer belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the network load balancer. The name is unique within the folder. 3-63 characters long. */
  name: string;
  /** Optional description of the network load balancer. 0-256 characters long. */
  description: string;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** ID of the region that the network load balancer belongs to. */
  regionId: string;
  /** Status of the network load balancer. */
  status: NetworkLoadBalancer_Status;
  /** Type of the network load balancer. Only external network load balancers are available now. */
  type: NetworkLoadBalancer_Type;
  /** Type of the session affinity. Only 5-tuple affinity is available now. */
  sessionAffinity: NetworkLoadBalancer_SessionAffinity;
  /** List of listeners for the network load balancer. */
  listeners: Listener[];
  /** List of target groups attached to the network load balancer. */
  attachedTargetGroups: AttachedTargetGroup[];
  /** Specifies if network load balancer protected from deletion. */
  deletionProtection: boolean;
}

export enum NetworkLoadBalancer_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Network load balancer is being created. */
  CREATING = 1,
  /** STARTING - Network load balancer is being started. */
  STARTING = 2,
  /** ACTIVE - Network load balancer is active and sends traffic to the targets. */
  ACTIVE = 3,
  /** STOPPING - Network load balancer is being stopped. */
  STOPPING = 4,
  /** STOPPED - Network load balancer is stopped and doesn't send traffic to the targets. */
  STOPPED = 5,
  /** DELETING - Network load balancer is being deleted. */
  DELETING = 6,
  /**
   * INACTIVE - The load balancer doesn't have any listeners or target groups, or
   * attached target groups are empty. The load balancer doesn't perform any health checks or
   * send traffic in this state.
   */
  INACTIVE = 7,
  UNRECOGNIZED = -1,
}

export function networkLoadBalancer_StatusFromJSON(object: any): NetworkLoadBalancer_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return NetworkLoadBalancer_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return NetworkLoadBalancer_Status.CREATING;
    case 2:
    case "STARTING":
      return NetworkLoadBalancer_Status.STARTING;
    case 3:
    case "ACTIVE":
      return NetworkLoadBalancer_Status.ACTIVE;
    case 4:
    case "STOPPING":
      return NetworkLoadBalancer_Status.STOPPING;
    case 5:
    case "STOPPED":
      return NetworkLoadBalancer_Status.STOPPED;
    case 6:
    case "DELETING":
      return NetworkLoadBalancer_Status.DELETING;
    case 7:
    case "INACTIVE":
      return NetworkLoadBalancer_Status.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetworkLoadBalancer_Status.UNRECOGNIZED;
  }
}

export function networkLoadBalancer_StatusToJSON(object: NetworkLoadBalancer_Status): string {
  switch (object) {
    case NetworkLoadBalancer_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case NetworkLoadBalancer_Status.CREATING:
      return "CREATING";
    case NetworkLoadBalancer_Status.STARTING:
      return "STARTING";
    case NetworkLoadBalancer_Status.ACTIVE:
      return "ACTIVE";
    case NetworkLoadBalancer_Status.STOPPING:
      return "STOPPING";
    case NetworkLoadBalancer_Status.STOPPED:
      return "STOPPED";
    case NetworkLoadBalancer_Status.DELETING:
      return "DELETING";
    case NetworkLoadBalancer_Status.INACTIVE:
      return "INACTIVE";
    case NetworkLoadBalancer_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum NetworkLoadBalancer_Type {
  TYPE_UNSPECIFIED = 0,
  /** EXTERNAL - External network load balancer. */
  EXTERNAL = 1,
  /** INTERNAL - Internal network load balancer. */
  INTERNAL = 2,
  UNRECOGNIZED = -1,
}

export function networkLoadBalancer_TypeFromJSON(object: any): NetworkLoadBalancer_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return NetworkLoadBalancer_Type.TYPE_UNSPECIFIED;
    case 1:
    case "EXTERNAL":
      return NetworkLoadBalancer_Type.EXTERNAL;
    case 2:
    case "INTERNAL":
      return NetworkLoadBalancer_Type.INTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetworkLoadBalancer_Type.UNRECOGNIZED;
  }
}

export function networkLoadBalancer_TypeToJSON(object: NetworkLoadBalancer_Type): string {
  switch (object) {
    case NetworkLoadBalancer_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case NetworkLoadBalancer_Type.EXTERNAL:
      return "EXTERNAL";
    case NetworkLoadBalancer_Type.INTERNAL:
      return "INTERNAL";
    case NetworkLoadBalancer_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Type of session affinity. Only 5-tuple affinity is currently available.
 * For more information, see [Load Balancer concepts](/docs/network-load-balancer/concepts/).
 */
export enum NetworkLoadBalancer_SessionAffinity {
  SESSION_AFFINITY_UNSPECIFIED = 0,
  /** CLIENT_IP_PORT_PROTO - 5-tuple affinity. */
  CLIENT_IP_PORT_PROTO = 1,
  UNRECOGNIZED = -1,
}

export function networkLoadBalancer_SessionAffinityFromJSON(object: any): NetworkLoadBalancer_SessionAffinity {
  switch (object) {
    case 0:
    case "SESSION_AFFINITY_UNSPECIFIED":
      return NetworkLoadBalancer_SessionAffinity.SESSION_AFFINITY_UNSPECIFIED;
    case 1:
    case "CLIENT_IP_PORT_PROTO":
      return NetworkLoadBalancer_SessionAffinity.CLIENT_IP_PORT_PROTO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetworkLoadBalancer_SessionAffinity.UNRECOGNIZED;
  }
}

export function networkLoadBalancer_SessionAffinityToJSON(object: NetworkLoadBalancer_SessionAffinity): string {
  switch (object) {
    case NetworkLoadBalancer_SessionAffinity.SESSION_AFFINITY_UNSPECIFIED:
      return "SESSION_AFFINITY_UNSPECIFIED";
    case NetworkLoadBalancer_SessionAffinity.CLIENT_IP_PORT_PROTO:
      return "CLIENT_IP_PORT_PROTO";
    case NetworkLoadBalancer_SessionAffinity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NetworkLoadBalancer_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry";
  key: string;
  value: string;
}

/** An AttachedTargetGroup resource. For more information, see [Targets and groups](/docs/network-load-balancer/concepts/target-resources). */
export interface AttachedTargetGroup {
  $type: "yandex.cloud.loadbalancer.v1.AttachedTargetGroup";
  /** ID of the target group. */
  targetGroupId: string;
  /**
   * A health check to perform on the target group.
   * For now we accept only one health check per AttachedTargetGroup.
   */
  healthChecks: HealthCheck[];
}

/** A Listener resource. For more information, see [Listener](/docs/network-load-balancer/concepts/listener) */
export interface Listener {
  $type: "yandex.cloud.loadbalancer.v1.Listener";
  /** Name of the listener. The name must be unique for each listener on a single load balancer. 3-63 characters long. */
  name: string;
  /** IP address for the listener. */
  address: string;
  /** Port. */
  port: number;
  /** Network protocol for incoming traffic. */
  protocol: Listener_Protocol;
  /** Port of a target. */
  targetPort: number;
  /** ID of the subnet. */
  subnetId: string;
  /** IP version of the external address. */
  ipVersion: IpVersion;
}

/** Network protocol to use. */
export enum Listener_Protocol {
  PROTOCOL_UNSPECIFIED = 0,
  TCP = 1,
  UDP = 2,
  UNRECOGNIZED = -1,
}

export function listener_ProtocolFromJSON(object: any): Listener_Protocol {
  switch (object) {
    case 0:
    case "PROTOCOL_UNSPECIFIED":
      return Listener_Protocol.PROTOCOL_UNSPECIFIED;
    case 1:
    case "TCP":
      return Listener_Protocol.TCP;
    case 2:
    case "UDP":
      return Listener_Protocol.UDP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Listener_Protocol.UNRECOGNIZED;
  }
}

export function listener_ProtocolToJSON(object: Listener_Protocol): string {
  switch (object) {
    case Listener_Protocol.PROTOCOL_UNSPECIFIED:
      return "PROTOCOL_UNSPECIFIED";
    case Listener_Protocol.TCP:
      return "TCP";
    case Listener_Protocol.UDP:
      return "UDP";
    case Listener_Protocol.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** State of the target that was returned after the last health check. */
export interface TargetState {
  $type: "yandex.cloud.loadbalancer.v1.TargetState";
  /** ID of the subnet that the target is connected to. */
  subnetId: string;
  /** IP address of the target. */
  address: string;
  /** Status of the target. */
  status: TargetState_Status;
}

/** Status of the target. */
export enum TargetState_Status {
  STATUS_UNSPECIFIED = 0,
  /** INITIAL - The network load balancer is setting up health checks for this target. */
  INITIAL = 1,
  /** HEALTHY - Health check passed and the target is ready to receive traffic. */
  HEALTHY = 2,
  /** UNHEALTHY - Health check failed and the target is not receiving traffic. */
  UNHEALTHY = 3,
  /** DRAINING - Target is being deleted and the network load balancer is no longer sending traffic to this target. */
  DRAINING = 4,
  /** INACTIVE - The network load balancer is stopped and not performing health checks on this target. */
  INACTIVE = 5,
  UNRECOGNIZED = -1,
}

export function targetState_StatusFromJSON(object: any): TargetState_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return TargetState_Status.STATUS_UNSPECIFIED;
    case 1:
    case "INITIAL":
      return TargetState_Status.INITIAL;
    case 2:
    case "HEALTHY":
      return TargetState_Status.HEALTHY;
    case 3:
    case "UNHEALTHY":
      return TargetState_Status.UNHEALTHY;
    case 4:
    case "DRAINING":
      return TargetState_Status.DRAINING;
    case 5:
    case "INACTIVE":
      return TargetState_Status.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TargetState_Status.UNRECOGNIZED;
  }
}

export function targetState_StatusToJSON(object: TargetState_Status): string {
  switch (object) {
    case TargetState_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case TargetState_Status.INITIAL:
      return "INITIAL";
    case TargetState_Status.HEALTHY:
      return "HEALTHY";
    case TargetState_Status.UNHEALTHY:
      return "UNHEALTHY";
    case TargetState_Status.DRAINING:
      return "DRAINING";
    case TargetState_Status.INACTIVE:
      return "INACTIVE";
    case TargetState_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseNetworkLoadBalancer(): NetworkLoadBalancer {
  return {
    $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    regionId: "",
    status: 0,
    type: 0,
    sessionAffinity: 0,
    listeners: [],
    attachedTargetGroups: [],
    deletionProtection: false,
  };
}

export const NetworkLoadBalancer = {
  $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer" as const,

  encode(message: NetworkLoadBalancer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      NetworkLoadBalancer_LabelsEntry.encode({
        $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.regionId !== "") {
      writer.uint32(58).string(message.regionId);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.type !== 0) {
      writer.uint32(80).int32(message.type);
    }
    if (message.sessionAffinity !== 0) {
      writer.uint32(88).int32(message.sessionAffinity);
    }
    for (const v of message.listeners) {
      Listener.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.attachedTargetGroups) {
      AttachedTargetGroup.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(112).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkLoadBalancer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkLoadBalancer();
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

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = NetworkLoadBalancer_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.regionId = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.sessionAffinity = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.listeners.push(Listener.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.attachedTargetGroups.push(AttachedTargetGroup.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkLoadBalancer {
    return {
      $type: NetworkLoadBalancer.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
      status: isSet(object.status) ? networkLoadBalancer_StatusFromJSON(object.status) : 0,
      type: isSet(object.type) ? networkLoadBalancer_TypeFromJSON(object.type) : 0,
      sessionAffinity: isSet(object.sessionAffinity)
        ? networkLoadBalancer_SessionAffinityFromJSON(object.sessionAffinity)
        : 0,
      listeners: globalThis.Array.isArray(object?.listeners)
        ? object.listeners.map((e: any) => Listener.fromJSON(e))
        : [],
      attachedTargetGroups: globalThis.Array.isArray(object?.attachedTargetGroups)
        ? object.attachedTargetGroups.map((e: any) => AttachedTargetGroup.fromJSON(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: NetworkLoadBalancer): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.regionId !== "") {
      obj.regionId = message.regionId;
    }
    if (message.status !== 0) {
      obj.status = networkLoadBalancer_StatusToJSON(message.status);
    }
    if (message.type !== 0) {
      obj.type = networkLoadBalancer_TypeToJSON(message.type);
    }
    if (message.sessionAffinity !== 0) {
      obj.sessionAffinity = networkLoadBalancer_SessionAffinityToJSON(message.sessionAffinity);
    }
    if (message.listeners?.length) {
      obj.listeners = message.listeners.map((e) => Listener.toJSON(e));
    }
    if (message.attachedTargetGroups?.length) {
      obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => AttachedTargetGroup.toJSON(e));
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkLoadBalancer>, I>>(base?: I): NetworkLoadBalancer {
    return NetworkLoadBalancer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkLoadBalancer>, I>>(object: I): NetworkLoadBalancer {
    const message = createBaseNetworkLoadBalancer();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.regionId = object.regionId ?? "";
    message.status = object.status ?? 0;
    message.type = object.type ?? 0;
    message.sessionAffinity = object.sessionAffinity ?? 0;
    message.listeners = object.listeners?.map((e) => Listener.fromPartial(e)) || [];
    message.attachedTargetGroups = object.attachedTargetGroups?.map((e) => AttachedTargetGroup.fromPartial(e)) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(NetworkLoadBalancer.$type, NetworkLoadBalancer);

function createBaseNetworkLoadBalancer_LabelsEntry(): NetworkLoadBalancer_LabelsEntry {
  return { $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry", key: "", value: "" };
}

export const NetworkLoadBalancer_LabelsEntry = {
  $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry" as const,

  encode(message: NetworkLoadBalancer_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkLoadBalancer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkLoadBalancer_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkLoadBalancer_LabelsEntry {
    return {
      $type: NetworkLoadBalancer_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: NetworkLoadBalancer_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkLoadBalancer_LabelsEntry>, I>>(base?: I): NetworkLoadBalancer_LabelsEntry {
    return NetworkLoadBalancer_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkLoadBalancer_LabelsEntry>, I>>(
    object: I,
  ): NetworkLoadBalancer_LabelsEntry {
    const message = createBaseNetworkLoadBalancer_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(NetworkLoadBalancer_LabelsEntry.$type, NetworkLoadBalancer_LabelsEntry);

function createBaseAttachedTargetGroup(): AttachedTargetGroup {
  return { $type: "yandex.cloud.loadbalancer.v1.AttachedTargetGroup", targetGroupId: "", healthChecks: [] };
}

export const AttachedTargetGroup = {
  $type: "yandex.cloud.loadbalancer.v1.AttachedTargetGroup" as const,

  encode(message: AttachedTargetGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    for (const v of message.healthChecks) {
      HealthCheck.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedTargetGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachedTargetGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.healthChecks.push(HealthCheck.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachedTargetGroup {
    return {
      $type: AttachedTargetGroup.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
      healthChecks: globalThis.Array.isArray(object?.healthChecks)
        ? object.healthChecks.map((e: any) => HealthCheck.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AttachedTargetGroup): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    if (message.healthChecks?.length) {
      obj.healthChecks = message.healthChecks.map((e) => HealthCheck.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachedTargetGroup>, I>>(base?: I): AttachedTargetGroup {
    return AttachedTargetGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttachedTargetGroup>, I>>(object: I): AttachedTargetGroup {
    const message = createBaseAttachedTargetGroup();
    message.targetGroupId = object.targetGroupId ?? "";
    message.healthChecks = object.healthChecks?.map((e) => HealthCheck.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AttachedTargetGroup.$type, AttachedTargetGroup);

function createBaseListener(): Listener {
  return {
    $type: "yandex.cloud.loadbalancer.v1.Listener",
    name: "",
    address: "",
    port: 0,
    protocol: 0,
    targetPort: 0,
    subnetId: "",
    ipVersion: 0,
  };
}

export const Listener = {
  $type: "yandex.cloud.loadbalancer.v1.Listener" as const,

  encode(message: Listener, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.port !== 0) {
      writer.uint32(24).int64(message.port);
    }
    if (message.protocol !== 0) {
      writer.uint32(32).int32(message.protocol);
    }
    if (message.targetPort !== 0) {
      writer.uint32(40).int64(message.targetPort);
    }
    if (message.subnetId !== "") {
      writer.uint32(50).string(message.subnetId);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(56).int32(message.ipVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Listener {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListener();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.protocol = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.targetPort = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.ipVersion = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Listener {
    return {
      $type: Listener.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      protocol: isSet(object.protocol) ? listener_ProtocolFromJSON(object.protocol) : 0,
      targetPort: isSet(object.targetPort) ? globalThis.Number(object.targetPort) : 0,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      ipVersion: isSet(object.ipVersion) ? ipVersionFromJSON(object.ipVersion) : 0,
    };
  },

  toJSON(message: Listener): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.protocol !== 0) {
      obj.protocol = listener_ProtocolToJSON(message.protocol);
    }
    if (message.targetPort !== 0) {
      obj.targetPort = Math.round(message.targetPort);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.ipVersion !== 0) {
      obj.ipVersion = ipVersionToJSON(message.ipVersion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Listener>, I>>(base?: I): Listener {
    return Listener.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Listener>, I>>(object: I): Listener {
    const message = createBaseListener();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.port = object.port ?? 0;
    message.protocol = object.protocol ?? 0;
    message.targetPort = object.targetPort ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Listener.$type, Listener);

function createBaseTargetState(): TargetState {
  return { $type: "yandex.cloud.loadbalancer.v1.TargetState", subnetId: "", address: "", status: 0 };
}

export const TargetState = {
  $type: "yandex.cloud.loadbalancer.v1.TargetState" as const,

  encode(message: TargetState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
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

  fromJSON(object: any): TargetState {
    return {
      $type: TargetState.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      status: isSet(object.status) ? targetState_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: TargetState): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.status !== 0) {
      obj.status = targetState_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetState>, I>>(base?: I): TargetState {
    return TargetState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetState>, I>>(object: I): TargetState {
    const message = createBaseTargetState();
    message.subnetId = object.subnetId ?? "";
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(TargetState.$type, TargetState);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
