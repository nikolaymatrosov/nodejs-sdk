/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Health, healthFromJSON, healthToJSON, Resources } from "./common";

export const protobufPackage = "yandex.cloud.dataproc.v1";

export enum Role {
  ROLE_UNSPECIFIED = 0,
  /**
   * MASTERNODE - The subcluster fulfills the master role.
   *
   * Master can run the following services, depending on the requested components:
   * * HDFS: Namenode, Secondary Namenode
   * * YARN: ResourceManager, Timeline Server
   * * HBase Master
   * * Hive: Server, Metastore, HCatalog
   * * Spark History Server
   * * Zeppelin
   * * ZooKeeper
   */
  MASTERNODE = 1,
  /**
   * DATANODE - The subcluster is a DATANODE in a Data Proc cluster.
   *
   * DATANODE can run the following services, depending on the requested components:
   * * HDFS DataNode
   * * YARN NodeManager
   * * HBase RegionServer
   * * Spark libraries
   */
  DATANODE = 2,
  /**
   * COMPUTENODE - The subcluster is a COMPUTENODE in a Data Proc cluster.
   *
   * COMPUTENODE can run the following services, depending on the requested components:
   * * YARN NodeManager
   * * Spark libraries
   */
  COMPUTENODE = 3,
  UNRECOGNIZED = -1,
}

export function roleFromJSON(object: any): Role {
  switch (object) {
    case 0:
    case "ROLE_UNSPECIFIED":
      return Role.ROLE_UNSPECIFIED;
    case 1:
    case "MASTERNODE":
      return Role.MASTERNODE;
    case 2:
    case "DATANODE":
      return Role.DATANODE;
    case 3:
    case "COMPUTENODE":
      return Role.COMPUTENODE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Role.UNRECOGNIZED;
  }
}

export function roleToJSON(object: Role): string {
  switch (object) {
    case Role.ROLE_UNSPECIFIED:
      return "ROLE_UNSPECIFIED";
    case Role.MASTERNODE:
      return "MASTERNODE";
    case Role.DATANODE:
      return "DATANODE";
    case Role.COMPUTENODE:
      return "COMPUTENODE";
    case Role.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AutoscalingConfig {
  $type: "yandex.cloud.dataproc.v1.AutoscalingConfig";
  /** Upper limit for total instance subcluster count. */
  maxHostsCount: number;
  /**
   * Preemptible instances are stopped at least once every 24 hours, and can be stopped at any time
   * if their resources are needed by Compute.
   * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
   */
  preemptible: boolean;
  /** Time in seconds allotted for averaging metrics. */
  measurementDuration?:
    | Duration
    | undefined;
  /**
   * The warmup time of the instance in seconds. During this time,
   * traffic is sent to the instance, but instance metrics are not collected.
   */
  warmupDuration?:
    | Duration
    | undefined;
  /**
   * Minimum amount of time in seconds allotted for monitoring before
   * Instance Groups can reduce the number of instances in the group.
   * During this time, the group size doesn't decrease, even if the new metric values
   * indicate that it should.
   */
  stabilizationDuration?:
    | Duration
    | undefined;
  /** Defines an autoscaling rule based on the average CPU utilization of the instance group. */
  cpuUtilizationTarget: number;
  /** Timeout to gracefully decommission nodes during downscaling. In seconds. Default value: 120 */
  decommissionTimeout: number;
}

/** A Data Proc subcluster. For details about the concept, see [documentation](/docs/data-proc/concepts/). */
export interface Subcluster {
  $type: "yandex.cloud.dataproc.v1.Subcluster";
  /** ID of the subcluster. Generated at creation time. */
  id: string;
  /** ID of the Data Proc cluster that the subcluster belongs to. */
  clusterId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the subcluster. The name is unique within the cluster. */
  name: string;
  /** Role that is fulfilled by hosts of the subcluster. */
  role: Role;
  /** Resources allocated for each host in the subcluster. */
  resources?:
    | Resources
    | undefined;
  /** ID of the VPC subnet used for hosts in the subcluster. */
  subnetId: string;
  /** Number of hosts in the subcluster. */
  hostsCount: number;
  /** Assign public ip addresses for all hosts in subcluter. */
  assignPublicIp: boolean;
  /** Configuration for instance group based subclusters */
  autoscalingConfig?:
    | AutoscalingConfig
    | undefined;
  /** ID of Compute Instance Group for autoscaling subclusters */
  instanceGroupId: string;
}

/** A Data Proc host. For details about the concept, see [documentation](/docs/data-proc/concepts/). */
export interface Host {
  $type: "yandex.cloud.dataproc.v1.Host";
  /**
   * Name of the Data Proc host. The host name is assigned by Data Proc at creation time
   * and cannot be changed. The name is generated to be unique across all Data Proc
   * hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the Data Proc subcluster that the host belongs to. */
  subclusterId: string;
  /** Status code of the aggregated health of the host. */
  health: Health;
  /** ID of the Compute virtual machine that is used as the Data Proc host. */
  computeInstanceId: string;
  /** Role of the host in the cluster. */
  role: Role;
}

function createBaseAutoscalingConfig(): AutoscalingConfig {
  return {
    $type: "yandex.cloud.dataproc.v1.AutoscalingConfig",
    maxHostsCount: 0,
    preemptible: false,
    measurementDuration: undefined,
    warmupDuration: undefined,
    stabilizationDuration: undefined,
    cpuUtilizationTarget: 0,
    decommissionTimeout: 0,
  };
}

export const AutoscalingConfig = {
  $type: "yandex.cloud.dataproc.v1.AutoscalingConfig" as const,

  encode(message: AutoscalingConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxHostsCount !== 0) {
      writer.uint32(8).int64(message.maxHostsCount);
    }
    if (message.preemptible === true) {
      writer.uint32(16).bool(message.preemptible);
    }
    if (message.measurementDuration !== undefined) {
      Duration.encode(message.measurementDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.warmupDuration !== undefined) {
      Duration.encode(message.warmupDuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.stabilizationDuration !== undefined) {
      Duration.encode(message.stabilizationDuration, writer.uint32(42).fork()).ldelim();
    }
    if (message.cpuUtilizationTarget !== 0) {
      writer.uint32(49).double(message.cpuUtilizationTarget);
    }
    if (message.decommissionTimeout !== 0) {
      writer.uint32(56).int64(message.decommissionTimeout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AutoscalingConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoscalingConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxHostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.preemptible = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.measurementDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.warmupDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stabilizationDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.cpuUtilizationTarget = reader.double();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.decommissionTimeout = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoscalingConfig {
    return {
      $type: AutoscalingConfig.$type,
      maxHostsCount: isSet(object.maxHostsCount) ? globalThis.Number(object.maxHostsCount) : 0,
      preemptible: isSet(object.preemptible) ? globalThis.Boolean(object.preemptible) : false,
      measurementDuration: isSet(object.measurementDuration)
        ? Duration.fromJSON(object.measurementDuration)
        : undefined,
      warmupDuration: isSet(object.warmupDuration) ? Duration.fromJSON(object.warmupDuration) : undefined,
      stabilizationDuration: isSet(object.stabilizationDuration)
        ? Duration.fromJSON(object.stabilizationDuration)
        : undefined,
      cpuUtilizationTarget: isSet(object.cpuUtilizationTarget) ? globalThis.Number(object.cpuUtilizationTarget) : 0,
      decommissionTimeout: isSet(object.decommissionTimeout) ? globalThis.Number(object.decommissionTimeout) : 0,
    };
  },

  toJSON(message: AutoscalingConfig): unknown {
    const obj: any = {};
    if (message.maxHostsCount !== 0) {
      obj.maxHostsCount = Math.round(message.maxHostsCount);
    }
    if (message.preemptible === true) {
      obj.preemptible = message.preemptible;
    }
    if (message.measurementDuration !== undefined) {
      obj.measurementDuration = Duration.toJSON(message.measurementDuration);
    }
    if (message.warmupDuration !== undefined) {
      obj.warmupDuration = Duration.toJSON(message.warmupDuration);
    }
    if (message.stabilizationDuration !== undefined) {
      obj.stabilizationDuration = Duration.toJSON(message.stabilizationDuration);
    }
    if (message.cpuUtilizationTarget !== 0) {
      obj.cpuUtilizationTarget = message.cpuUtilizationTarget;
    }
    if (message.decommissionTimeout !== 0) {
      obj.decommissionTimeout = Math.round(message.decommissionTimeout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AutoscalingConfig>, I>>(base?: I): AutoscalingConfig {
    return AutoscalingConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AutoscalingConfig>, I>>(object: I): AutoscalingConfig {
    const message = createBaseAutoscalingConfig();
    message.maxHostsCount = object.maxHostsCount ?? 0;
    message.preemptible = object.preemptible ?? false;
    message.measurementDuration = (object.measurementDuration !== undefined && object.measurementDuration !== null)
      ? Duration.fromPartial(object.measurementDuration)
      : undefined;
    message.warmupDuration = (object.warmupDuration !== undefined && object.warmupDuration !== null)
      ? Duration.fromPartial(object.warmupDuration)
      : undefined;
    message.stabilizationDuration =
      (object.stabilizationDuration !== undefined && object.stabilizationDuration !== null)
        ? Duration.fromPartial(object.stabilizationDuration)
        : undefined;
    message.cpuUtilizationTarget = object.cpuUtilizationTarget ?? 0;
    message.decommissionTimeout = object.decommissionTimeout ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AutoscalingConfig.$type, AutoscalingConfig);

function createBaseSubcluster(): Subcluster {
  return {
    $type: "yandex.cloud.dataproc.v1.Subcluster",
    id: "",
    clusterId: "",
    createdAt: undefined,
    name: "",
    role: 0,
    resources: undefined,
    subnetId: "",
    hostsCount: 0,
    assignPublicIp: false,
    autoscalingConfig: undefined,
    instanceGroupId: "",
  };
}

export const Subcluster = {
  $type: "yandex.cloud.dataproc.v1.Subcluster" as const,

  encode(message: Subcluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.role !== 0) {
      writer.uint32(40).int32(message.role);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(50).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(58).string(message.subnetId);
    }
    if (message.hostsCount !== 0) {
      writer.uint32(64).int64(message.hostsCount);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(72).bool(message.assignPublicIp);
    }
    if (message.autoscalingConfig !== undefined) {
      AutoscalingConfig.encode(message.autoscalingConfig, writer.uint32(82).fork()).ldelim();
    }
    if (message.instanceGroupId !== "") {
      writer.uint32(90).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subcluster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubcluster();
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

          message.clusterId = reader.string();
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
          if (tag !== 40) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
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

          message.hostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.autoscalingConfig = AutoscalingConfig.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Subcluster {
    return {
      $type: Subcluster.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      role: isSet(object.role) ? roleFromJSON(object.role) : 0,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      hostsCount: isSet(object.hostsCount) ? globalThis.Number(object.hostsCount) : 0,
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      autoscalingConfig: isSet(object.autoscalingConfig)
        ? AutoscalingConfig.fromJSON(object.autoscalingConfig)
        : undefined,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: Subcluster): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.role !== 0) {
      obj.role = roleToJSON(message.role);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.hostsCount !== 0) {
      obj.hostsCount = Math.round(message.hostsCount);
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    if (message.autoscalingConfig !== undefined) {
      obj.autoscalingConfig = AutoscalingConfig.toJSON(message.autoscalingConfig);
    }
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Subcluster>, I>>(base?: I): Subcluster {
    return Subcluster.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Subcluster>, I>>(object: I): Subcluster {
    const message = createBaseSubcluster();
    message.id = object.id ?? "";
    message.clusterId = object.clusterId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.role = object.role ?? 0;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.subnetId = object.subnetId ?? "";
    message.hostsCount = object.hostsCount ?? 0;
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.autoscalingConfig = (object.autoscalingConfig !== undefined && object.autoscalingConfig !== null)
      ? AutoscalingConfig.fromPartial(object.autoscalingConfig)
      : undefined;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Subcluster.$type, Subcluster);

function createBaseHost(): Host {
  return {
    $type: "yandex.cloud.dataproc.v1.Host",
    name: "",
    subclusterId: "",
    health: 0,
    computeInstanceId: "",
    role: 0,
  };
}

export const Host = {
  $type: "yandex.cloud.dataproc.v1.Host" as const,

  encode(message: Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.subclusterId !== "") {
      writer.uint32(18).string(message.subclusterId);
    }
    if (message.health !== 0) {
      writer.uint32(24).int32(message.health);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(34).string(message.computeInstanceId);
    }
    if (message.role !== 0) {
      writer.uint32(40).int32(message.role);
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

          message.subclusterId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.health = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.role = reader.int32() as any;
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
      subclusterId: isSet(object.subclusterId) ? globalThis.String(object.subclusterId) : "",
      health: isSet(object.health) ? healthFromJSON(object.health) : 0,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      role: isSet(object.role) ? roleFromJSON(object.role) : 0,
    };
  },

  toJSON(message: Host): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.subclusterId !== "") {
      obj.subclusterId = message.subclusterId;
    }
    if (message.health !== 0) {
      obj.health = healthToJSON(message.health);
    }
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.role !== 0) {
      obj.role = roleToJSON(message.role);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Host>, I>>(base?: I): Host {
    return Host.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Host>, I>>(object: I): Host {
    const message = createBaseHost();
    message.name = object.name ?? "";
    message.subclusterId = object.subclusterId ?? "";
    message.health = object.health ?? 0;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.role = object.role ?? 0;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
