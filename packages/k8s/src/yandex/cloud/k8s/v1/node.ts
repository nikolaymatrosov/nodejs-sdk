/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.k8s.v1";

export enum IpVersion {
  IP_VERSION_UNSPECIFIED = 0,
  /** IPV4 - IPv4 address, for example 192.168.0.0. */
  IPV4 = 1,
  /** IPV6 - IPv6 address, not available yet. */
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

export interface Node {
  $type: "yandex.cloud.k8s.v1.Node";
  /** Computed node status. */
  status: Node_Status;
  /** Node specificaion. */
  spec?:
    | Node_Spec
    | undefined;
  /**
   * Cloud instance status.
   * Not available in `MISSING` status.
   */
  cloudStatus?:
    | Node_CloudStatus
    | undefined;
  /**
   * Kubernetes node status.
   * Not available in `PROVISIONING` and `NOT_CONNECTED` states.
   */
  kubernetesStatus?: Node_KubernetesStatus | undefined;
}

/** Computed node status. */
export enum Node_Status {
  STATUS_UNSPECIFIED = 0,
  /** PROVISIONING - Node instance is not yet created (e.g. in progress). */
  PROVISIONING = 1,
  /**
   * NOT_CONNECTED - Node instance is created but not registered
   * (e.g. is still initializing).
   */
  NOT_CONNECTED = 2,
  /**
   * NOT_READY - Node has connected but is not ready for
   * workload (see conditions for details).
   */
  NOT_READY = 3,
  /** READY - Node has connected and ready for workload. */
  READY = 4,
  /**
   * MISSING - Node is still registered but its instance
   * is deleted (this is our bug).
   */
  MISSING = 5,
  /** STOPPED - Node is stopped */
  STOPPED = 6,
  /** UNKNOWN - Backend request to kubernetes api was unsuccessful. */
  UNKNOWN = 7,
  UNRECOGNIZED = -1,
}

export function node_StatusFromJSON(object: any): Node_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Node_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PROVISIONING":
      return Node_Status.PROVISIONING;
    case 2:
    case "NOT_CONNECTED":
      return Node_Status.NOT_CONNECTED;
    case 3:
    case "NOT_READY":
      return Node_Status.NOT_READY;
    case 4:
    case "READY":
      return Node_Status.READY;
    case 5:
    case "MISSING":
      return Node_Status.MISSING;
    case 6:
    case "STOPPED":
      return Node_Status.STOPPED;
    case 7:
    case "UNKNOWN":
      return Node_Status.UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Node_Status.UNRECOGNIZED;
  }
}

export function node_StatusToJSON(object: Node_Status): string {
  switch (object) {
    case Node_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Node_Status.PROVISIONING:
      return "PROVISIONING";
    case Node_Status.NOT_CONNECTED:
      return "NOT_CONNECTED";
    case Node_Status.NOT_READY:
      return "NOT_READY";
    case Node_Status.READY:
      return "READY";
    case Node_Status.MISSING:
      return "MISSING";
    case Node_Status.STOPPED:
      return "STOPPED";
    case Node_Status.UNKNOWN:
      return "UNKNOWN";
    case Node_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Kubernetes node info */
export interface Node_KubernetesStatus {
  $type: "yandex.cloud.k8s.v1.Node.KubernetesStatus";
  /** Node id (and instance name) */
  id: string;
  /**
   * Conditions is an array of current observed node conditions.
   * More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
   */
  conditions: Condition[];
  /** If specified, the node's taints. */
  taints: Taint[];
  /** List of volumes that are attached to the node. */
  attachedVolumes: AttachedVolume[];
}

/** Cloud instance info */
export interface Node_CloudStatus {
  $type: "yandex.cloud.k8s.v1.Node.CloudStatus";
  /** Compute instance id */
  id: string;
  /** IG instance status */
  status: string;
  /** IG instance status message */
  statusMessage: string;
}

/** Node specification. */
export interface Node_Spec {
  $type: "yandex.cloud.k8s.v1.Node.Spec";
  /** Node group specified resources. */
  resources?:
    | ResourcesSpec
    | undefined;
  /** Node group specified disk. */
  disk?: DiskSpec | undefined;
}

export interface Condition {
  $type: "yandex.cloud.k8s.v1.Condition";
  /** Type of node condition. */
  type: string;
  /** Status is the status of the condition. */
  status: string;
  /** Human-readable message indicating details about last transition. */
  message: string;
  /** Last time we got an update on a given condition. */
  lastHeartbeatTime?:
    | Date
    | undefined;
  /** Last time the condition transit from one status to another. */
  lastTransitionTime?: Date | undefined;
}

export interface Taint {
  $type: "yandex.cloud.k8s.v1.Taint";
  /** The taint key to be applied to a node. */
  key: string;
  /** The taint value corresponding to the taint key. */
  value: string;
  /** The effect of the taint on pods that do not tolerate the taint. */
  effect: Taint_Effect;
}

export enum Taint_Effect {
  EFFECT_UNSPECIFIED = 0,
  /**
   * NO_SCHEDULE - Do not allow new pods to schedule onto the node unless they tolerate the taint,
   * but allow all pods submitted to Kubelet without going through the scheduler
   * to start, and allow all already-running pods to continue running.
   */
  NO_SCHEDULE = 1,
  /**
   * PREFER_NO_SCHEDULE - Like NO_SCHEDULE, but the scheduler tries not to schedule
   * new pods onto the node, rather than prohibiting new pods from scheduling
   * onto the node entirely. Enforced by the scheduler.
   */
  PREFER_NO_SCHEDULE = 2,
  /** NO_EXECUTE - Evict any already-running pods that do not tolerate the taint. */
  NO_EXECUTE = 3,
  UNRECOGNIZED = -1,
}

export function taint_EffectFromJSON(object: any): Taint_Effect {
  switch (object) {
    case 0:
    case "EFFECT_UNSPECIFIED":
      return Taint_Effect.EFFECT_UNSPECIFIED;
    case 1:
    case "NO_SCHEDULE":
      return Taint_Effect.NO_SCHEDULE;
    case 2:
    case "PREFER_NO_SCHEDULE":
      return Taint_Effect.PREFER_NO_SCHEDULE;
    case 3:
    case "NO_EXECUTE":
      return Taint_Effect.NO_EXECUTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Taint_Effect.UNRECOGNIZED;
  }
}

export function taint_EffectToJSON(object: Taint_Effect): string {
  switch (object) {
    case Taint_Effect.EFFECT_UNSPECIFIED:
      return "EFFECT_UNSPECIFIED";
    case Taint_Effect.NO_SCHEDULE:
      return "NO_SCHEDULE";
    case Taint_Effect.PREFER_NO_SCHEDULE:
      return "PREFER_NO_SCHEDULE";
    case Taint_Effect.NO_EXECUTE:
      return "NO_EXECUTE";
    case Taint_Effect.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** AttachedVolume describes a volume attached to a node */
export interface AttachedVolume {
  $type: "yandex.cloud.k8s.v1.AttachedVolume";
  /** Name of the driver which has attached the volume */
  driverName: string;
  /** Volume handle (cloud disk id) */
  volumeHandle: string;
}

export interface NodeTemplate {
  $type: "yandex.cloud.k8s.v1.NodeTemplate";
  /**
   * Name of the instance.
   * In order to be unique it must contain at least on of instance unique placeholders:
   *   {instance.short_id}
   *   {instance.index}
   *   combination of {instance.zone_id} and {instance.index_in_zone}
   * Example: my-instance-{instance.index}
   * If not set, default is used: {instance_group.id}-{instance.short_id}
   * It may also contain another placeholders, see metadata doc for full list.
   */
  name: string;
  /** these labels will be assigned to compute nodes (instances), created by the nodegroup */
  labels: { [key: string]: string };
  /** ID of the hardware platform configuration for the node. */
  platformId: string;
  /** Computing resources of the node such as the amount of memory and number of cores. */
  resourcesSpec?:
    | ResourcesSpec
    | undefined;
  /** Specification for the boot disk that will be attached to the node. */
  bootDiskSpec?:
    | DiskSpec
    | undefined;
  /**
   * The metadata as `key:value` pairs assigned to this instance template. Only SSH keys are supported as metadata.
   *
   * For more information, see [Connecting to a node over SSH](/docs/managed-kubernetes/operations/node-connect-ssh).
   */
  metadata: { [key: string]: string };
  /**
   * Specification for the create network interfaces for the node group compute instances.
   * Deprecated, please use network_interface_specs.
   *
   * @deprecated
   */
  v4AddressSpec?:
    | NodeAddressSpec
    | undefined;
  /** Scheduling policy configuration. */
  schedulingPolicy?:
    | SchedulingPolicy
    | undefined;
  /**
   * New api, to specify network interfaces for the node group compute instances.
   * Can not be used together with 'v4_address_spec'
   */
  networkInterfaceSpecs: NetworkInterfaceSpec[];
  placementPolicy?:
    | PlacementPolicy
    | undefined;
  /** this parameter allows to specify type of network acceleration used on nodes (instances) */
  networkSettings?: NodeTemplate_NetworkSettings | undefined;
  containerRuntimeSettings?: NodeTemplate_ContainerRuntimeSettings | undefined;
  containerNetworkSettings?:
    | NodeTemplate_ContainerNetworkSettings
    | undefined;
  /** GPU settings */
  gpuSettings?: GpuSettings | undefined;
}

export interface NodeTemplate_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.LabelsEntry";
  key: string;
  value: string;
}

export interface NodeTemplate_MetadataEntry {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry";
  key: string;
  value: string;
}

export interface NodeTemplate_NetworkSettings {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.NetworkSettings";
  type: NodeTemplate_NetworkSettings_Type;
}

export enum NodeTemplate_NetworkSettings_Type {
  TYPE_UNSPECIFIED = 0,
  STANDARD = 1,
  /**
   * SOFTWARE_ACCELERATED - unsupported yet, commented for possible future utilization.
   * HARDWARE_ACCELERATED = 3;
   */
  SOFTWARE_ACCELERATED = 2,
  UNRECOGNIZED = -1,
}

export function nodeTemplate_NetworkSettings_TypeFromJSON(object: any): NodeTemplate_NetworkSettings_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return NodeTemplate_NetworkSettings_Type.TYPE_UNSPECIFIED;
    case 1:
    case "STANDARD":
      return NodeTemplate_NetworkSettings_Type.STANDARD;
    case 2:
    case "SOFTWARE_ACCELERATED":
      return NodeTemplate_NetworkSettings_Type.SOFTWARE_ACCELERATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NodeTemplate_NetworkSettings_Type.UNRECOGNIZED;
  }
}

export function nodeTemplate_NetworkSettings_TypeToJSON(object: NodeTemplate_NetworkSettings_Type): string {
  switch (object) {
    case NodeTemplate_NetworkSettings_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case NodeTemplate_NetworkSettings_Type.STANDARD:
      return "STANDARD";
    case NodeTemplate_NetworkSettings_Type.SOFTWARE_ACCELERATED:
      return "SOFTWARE_ACCELERATED";
    case NodeTemplate_NetworkSettings_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NodeTemplate_ContainerRuntimeSettings {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerRuntimeSettings";
  type: NodeTemplate_ContainerRuntimeSettings_Type;
}

export enum NodeTemplate_ContainerRuntimeSettings_Type {
  TYPE_UNSPECIFIED = 0,
  DOCKER = 1,
  CONTAINERD = 2,
  UNRECOGNIZED = -1,
}

export function nodeTemplate_ContainerRuntimeSettings_TypeFromJSON(
  object: any,
): NodeTemplate_ContainerRuntimeSettings_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return NodeTemplate_ContainerRuntimeSettings_Type.TYPE_UNSPECIFIED;
    case 1:
    case "DOCKER":
      return NodeTemplate_ContainerRuntimeSettings_Type.DOCKER;
    case 2:
    case "CONTAINERD":
      return NodeTemplate_ContainerRuntimeSettings_Type.CONTAINERD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NodeTemplate_ContainerRuntimeSettings_Type.UNRECOGNIZED;
  }
}

export function nodeTemplate_ContainerRuntimeSettings_TypeToJSON(
  object: NodeTemplate_ContainerRuntimeSettings_Type,
): string {
  switch (object) {
    case NodeTemplate_ContainerRuntimeSettings_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case NodeTemplate_ContainerRuntimeSettings_Type.DOCKER:
      return "DOCKER";
    case NodeTemplate_ContainerRuntimeSettings_Type.CONTAINERD:
      return "CONTAINERD";
    case NodeTemplate_ContainerRuntimeSettings_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NodeTemplate_ContainerNetworkSettings {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerNetworkSettings";
  podMtu: number;
}

export interface GpuSettings {
  $type: "yandex.cloud.k8s.v1.GpuSettings";
  /** GPU cluster id, that mk8s node will join. */
  gpuClusterId: string;
  /** GPU environment configured on node. */
  gpuEnvironment: GpuSettings_GpuEnvironment;
}

export enum GpuSettings_GpuEnvironment {
  /** GPU_ENVIRONMENT_UNSPECIFIED - Use one of the values below, depending on the default for the specific Cloud installation. */
  GPU_ENVIRONMENT_UNSPECIFIED = 0,
  /** RUNC_DRIVERS_CUDA - Use a node image with the pre-installed GPU toolkit, drivers and CUDA. */
  RUNC_DRIVERS_CUDA = 1,
  /**
   * RUNC - Use a node image with the pre-installed GPU toolkit but without drivers.
   * You should install drivers on a node yourself in that case.
   * There are tools to help you to do that, for example gpu-operator.
   */
  RUNC = 2,
  UNRECOGNIZED = -1,
}

export function gpuSettings_GpuEnvironmentFromJSON(object: any): GpuSettings_GpuEnvironment {
  switch (object) {
    case 0:
    case "GPU_ENVIRONMENT_UNSPECIFIED":
      return GpuSettings_GpuEnvironment.GPU_ENVIRONMENT_UNSPECIFIED;
    case 1:
    case "RUNC_DRIVERS_CUDA":
      return GpuSettings_GpuEnvironment.RUNC_DRIVERS_CUDA;
    case 2:
    case "RUNC":
      return GpuSettings_GpuEnvironment.RUNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GpuSettings_GpuEnvironment.UNRECOGNIZED;
  }
}

export function gpuSettings_GpuEnvironmentToJSON(object: GpuSettings_GpuEnvironment): string {
  switch (object) {
    case GpuSettings_GpuEnvironment.GPU_ENVIRONMENT_UNSPECIFIED:
      return "GPU_ENVIRONMENT_UNSPECIFIED";
    case GpuSettings_GpuEnvironment.RUNC_DRIVERS_CUDA:
      return "RUNC_DRIVERS_CUDA";
    case GpuSettings_GpuEnvironment.RUNC:
      return "RUNC";
    case GpuSettings_GpuEnvironment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NetworkInterfaceSpec {
  $type: "yandex.cloud.k8s.v1.NetworkInterfaceSpec";
  /** IDs of the subnets. */
  subnetIds: string[];
  /** Primary IPv4 address that is assigned to the instance for this network interface. */
  primaryV4AddressSpec?:
    | NodeAddressSpec
    | undefined;
  /** Primary IPv6 address that is assigned to the instance for this network interface. */
  primaryV6AddressSpec?:
    | NodeAddressSpec
    | undefined;
  /** IDs of security groups. */
  securityGroupIds: string[];
}

export interface NodeAddressSpec {
  $type: "yandex.cloud.k8s.v1.NodeAddressSpec";
  /** One-to-one NAT configuration. Setting up one-to-one NAT ensures that public IP addresses are assigned to nodes, and therefore internet is accessible for all nodes of the node group. If the field is not set, NAT will not be set up. */
  oneToOneNatSpec?:
    | OneToOneNatSpec
    | undefined;
  /** Internal DNS configuration. */
  dnsRecordSpecs: DnsRecordSpec[];
}

export interface DnsRecordSpec {
  $type: "yandex.cloud.k8s.v1.DnsRecordSpec";
  /** FQDN (required). */
  fqdn: string;
  /** DNS zone id (optional, if not set, private zone is used). */
  dnsZoneId: string;
  /** DNS record ttl, values in 0-86400 (optional). */
  ttl: number;
  /** When set to true, also create PTR DNS record (optional). */
  ptr: boolean;
}

export interface OneToOneNatSpec {
  $type: "yandex.cloud.k8s.v1.OneToOneNatSpec";
  /** IP version for the public IP address. */
  ipVersion: IpVersion;
}

export interface ResourcesSpec {
  $type: "yandex.cloud.k8s.v1.ResourcesSpec";
  /** Amount of memory available to the node, specified in bytes. */
  memory: number;
  /** Number of cores available to the node. */
  cores: number;
  /**
   * Baseline level of CPU performance with the possibility to burst performance above that baseline level.
   * This field sets baseline performance for each core.
   */
  coreFraction: number;
  /** Number of GPUs available to the node. */
  gpus: number;
}

export interface DiskSpec {
  $type: "yandex.cloud.k8s.v1.DiskSpec";
  /** ID of the disk type. */
  diskTypeId: string;
  /** Size of the disk, specified in bytes. */
  diskSize: number;
}

export interface SchedulingPolicy {
  $type: "yandex.cloud.k8s.v1.SchedulingPolicy";
  /**
   * True for preemptible compute instances. Default value is false. Preemptible compute instances are stopped at least once every 24 hours, and can be stopped at any time
   * if their resources are needed by Compute.
   * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
   */
  preemptible: boolean;
}

export interface PlacementPolicy {
  $type: "yandex.cloud.k8s.v1.PlacementPolicy";
  /** Identifier of placement group */
  placementGroupId: string;
}

function createBaseNode(): Node {
  return {
    $type: "yandex.cloud.k8s.v1.Node",
    status: 0,
    spec: undefined,
    cloudStatus: undefined,
    kubernetesStatus: undefined,
  };
}

export const Node = {
  $type: "yandex.cloud.k8s.v1.Node" as const,

  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.spec !== undefined) {
      Node_Spec.encode(message.spec, writer.uint32(18).fork()).ldelim();
    }
    if (message.cloudStatus !== undefined) {
      Node_CloudStatus.encode(message.cloudStatus, writer.uint32(26).fork()).ldelim();
    }
    if (message.kubernetesStatus !== undefined) {
      Node_KubernetesStatus.encode(message.kubernetesStatus, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spec = Node_Spec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cloudStatus = Node_CloudStatus.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.kubernetesStatus = Node_KubernetesStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Node {
    return {
      $type: Node.$type,
      status: isSet(object.status) ? node_StatusFromJSON(object.status) : 0,
      spec: isSet(object.spec) ? Node_Spec.fromJSON(object.spec) : undefined,
      cloudStatus: isSet(object.cloudStatus) ? Node_CloudStatus.fromJSON(object.cloudStatus) : undefined,
      kubernetesStatus: isSet(object.kubernetesStatus)
        ? Node_KubernetesStatus.fromJSON(object.kubernetesStatus)
        : undefined,
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = node_StatusToJSON(message.status);
    }
    if (message.spec !== undefined) {
      obj.spec = Node_Spec.toJSON(message.spec);
    }
    if (message.cloudStatus !== undefined) {
      obj.cloudStatus = Node_CloudStatus.toJSON(message.cloudStatus);
    }
    if (message.kubernetesStatus !== undefined) {
      obj.kubernetesStatus = Node_KubernetesStatus.toJSON(message.kubernetesStatus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Node>, I>>(base?: I): Node {
    return Node.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Node>, I>>(object: I): Node {
    const message = createBaseNode();
    message.status = object.status ?? 0;
    message.spec = (object.spec !== undefined && object.spec !== null) ? Node_Spec.fromPartial(object.spec) : undefined;
    message.cloudStatus = (object.cloudStatus !== undefined && object.cloudStatus !== null)
      ? Node_CloudStatus.fromPartial(object.cloudStatus)
      : undefined;
    message.kubernetesStatus = (object.kubernetesStatus !== undefined && object.kubernetesStatus !== null)
      ? Node_KubernetesStatus.fromPartial(object.kubernetesStatus)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Node.$type, Node);

function createBaseNode_KubernetesStatus(): Node_KubernetesStatus {
  return {
    $type: "yandex.cloud.k8s.v1.Node.KubernetesStatus",
    id: "",
    conditions: [],
    taints: [],
    attachedVolumes: [],
  };
}

export const Node_KubernetesStatus = {
  $type: "yandex.cloud.k8s.v1.Node.KubernetesStatus" as const,

  encode(message: Node_KubernetesStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.conditions) {
      Condition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.taints) {
      Taint.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.attachedVolumes) {
      AttachedVolume.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node_KubernetesStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode_KubernetesStatus();
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

          message.conditions.push(Condition.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.taints.push(Taint.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.attachedVolumes.push(AttachedVolume.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Node_KubernetesStatus {
    return {
      $type: Node_KubernetesStatus.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      conditions: globalThis.Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => Condition.fromJSON(e))
        : [],
      taints: globalThis.Array.isArray(object?.taints) ? object.taints.map((e: any) => Taint.fromJSON(e)) : [],
      attachedVolumes: globalThis.Array.isArray(object?.attachedVolumes)
        ? object.attachedVolumes.map((e: any) => AttachedVolume.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Node_KubernetesStatus): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.conditions?.length) {
      obj.conditions = message.conditions.map((e) => Condition.toJSON(e));
    }
    if (message.taints?.length) {
      obj.taints = message.taints.map((e) => Taint.toJSON(e));
    }
    if (message.attachedVolumes?.length) {
      obj.attachedVolumes = message.attachedVolumes.map((e) => AttachedVolume.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Node_KubernetesStatus>, I>>(base?: I): Node_KubernetesStatus {
    return Node_KubernetesStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Node_KubernetesStatus>, I>>(object: I): Node_KubernetesStatus {
    const message = createBaseNode_KubernetesStatus();
    message.id = object.id ?? "";
    message.conditions = object.conditions?.map((e) => Condition.fromPartial(e)) || [];
    message.taints = object.taints?.map((e) => Taint.fromPartial(e)) || [];
    message.attachedVolumes = object.attachedVolumes?.map((e) => AttachedVolume.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Node_KubernetesStatus.$type, Node_KubernetesStatus);

function createBaseNode_CloudStatus(): Node_CloudStatus {
  return { $type: "yandex.cloud.k8s.v1.Node.CloudStatus", id: "", status: "", statusMessage: "" };
}

export const Node_CloudStatus = {
  $type: "yandex.cloud.k8s.v1.Node.CloudStatus" as const,

  encode(message: Node_CloudStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.statusMessage !== "") {
      writer.uint32(26).string(message.statusMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node_CloudStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode_CloudStatus();
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

          message.status = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.statusMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Node_CloudStatus {
    return {
      $type: Node_CloudStatus.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      statusMessage: isSet(object.statusMessage) ? globalThis.String(object.statusMessage) : "",
    };
  },

  toJSON(message: Node_CloudStatus): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.statusMessage !== "") {
      obj.statusMessage = message.statusMessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Node_CloudStatus>, I>>(base?: I): Node_CloudStatus {
    return Node_CloudStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Node_CloudStatus>, I>>(object: I): Node_CloudStatus {
    const message = createBaseNode_CloudStatus();
    message.id = object.id ?? "";
    message.status = object.status ?? "";
    message.statusMessage = object.statusMessage ?? "";
    return message;
  },
};

messageTypeRegistry.set(Node_CloudStatus.$type, Node_CloudStatus);

function createBaseNode_Spec(): Node_Spec {
  return { $type: "yandex.cloud.k8s.v1.Node.Spec", resources: undefined, disk: undefined };
}

export const Node_Spec = {
  $type: "yandex.cloud.k8s.v1.Node.Spec" as const,

  encode(message: Node_Spec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      ResourcesSpec.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.disk !== undefined) {
      DiskSpec.encode(message.disk, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node_Spec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode_Spec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources = ResourcesSpec.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.disk = DiskSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Node_Spec {
    return {
      $type: Node_Spec.$type,
      resources: isSet(object.resources) ? ResourcesSpec.fromJSON(object.resources) : undefined,
      disk: isSet(object.disk) ? DiskSpec.fromJSON(object.disk) : undefined,
    };
  },

  toJSON(message: Node_Spec): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = ResourcesSpec.toJSON(message.resources);
    }
    if (message.disk !== undefined) {
      obj.disk = DiskSpec.toJSON(message.disk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Node_Spec>, I>>(base?: I): Node_Spec {
    return Node_Spec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Node_Spec>, I>>(object: I): Node_Spec {
    const message = createBaseNode_Spec();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? ResourcesSpec.fromPartial(object.resources)
      : undefined;
    message.disk = (object.disk !== undefined && object.disk !== null) ? DiskSpec.fromPartial(object.disk) : undefined;
    return message;
  },
};

messageTypeRegistry.set(Node_Spec.$type, Node_Spec);

function createBaseCondition(): Condition {
  return {
    $type: "yandex.cloud.k8s.v1.Condition",
    type: "",
    status: "",
    message: "",
    lastHeartbeatTime: undefined,
    lastTransitionTime: undefined,
  };
}

export const Condition = {
  $type: "yandex.cloud.k8s.v1.Condition" as const,

  encode(message: Condition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.lastHeartbeatTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastHeartbeatTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastTransitionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastTransitionTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Condition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lastHeartbeatTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastTransitionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Condition {
    return {
      $type: Condition.$type,
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      lastHeartbeatTime: isSet(object.lastHeartbeatTime) ? fromJsonTimestamp(object.lastHeartbeatTime) : undefined,
      lastTransitionTime: isSet(object.lastTransitionTime) ? fromJsonTimestamp(object.lastTransitionTime) : undefined,
    };
  },

  toJSON(message: Condition): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.lastHeartbeatTime !== undefined) {
      obj.lastHeartbeatTime = message.lastHeartbeatTime.toISOString();
    }
    if (message.lastTransitionTime !== undefined) {
      obj.lastTransitionTime = message.lastTransitionTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Condition>, I>>(base?: I): Condition {
    return Condition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Condition>, I>>(object: I): Condition {
    const message = createBaseCondition();
    message.type = object.type ?? "";
    message.status = object.status ?? "";
    message.message = object.message ?? "";
    message.lastHeartbeatTime = object.lastHeartbeatTime ?? undefined;
    message.lastTransitionTime = object.lastTransitionTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Condition.$type, Condition);

function createBaseTaint(): Taint {
  return { $type: "yandex.cloud.k8s.v1.Taint", key: "", value: "", effect: 0 };
}

export const Taint = {
  $type: "yandex.cloud.k8s.v1.Taint" as const,

  encode(message: Taint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.effect !== 0) {
      writer.uint32(24).int32(message.effect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Taint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaint();
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.effect = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Taint {
    return {
      $type: Taint.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      effect: isSet(object.effect) ? taint_EffectFromJSON(object.effect) : 0,
    };
  },

  toJSON(message: Taint): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.effect !== 0) {
      obj.effect = taint_EffectToJSON(message.effect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Taint>, I>>(base?: I): Taint {
    return Taint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Taint>, I>>(object: I): Taint {
    const message = createBaseTaint();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.effect = object.effect ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Taint.$type, Taint);

function createBaseAttachedVolume(): AttachedVolume {
  return { $type: "yandex.cloud.k8s.v1.AttachedVolume", driverName: "", volumeHandle: "" };
}

export const AttachedVolume = {
  $type: "yandex.cloud.k8s.v1.AttachedVolume" as const,

  encode(message: AttachedVolume, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.driverName !== "") {
      writer.uint32(10).string(message.driverName);
    }
    if (message.volumeHandle !== "") {
      writer.uint32(18).string(message.volumeHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedVolume {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachedVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.driverName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.volumeHandle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachedVolume {
    return {
      $type: AttachedVolume.$type,
      driverName: isSet(object.driverName) ? globalThis.String(object.driverName) : "",
      volumeHandle: isSet(object.volumeHandle) ? globalThis.String(object.volumeHandle) : "",
    };
  },

  toJSON(message: AttachedVolume): unknown {
    const obj: any = {};
    if (message.driverName !== "") {
      obj.driverName = message.driverName;
    }
    if (message.volumeHandle !== "") {
      obj.volumeHandle = message.volumeHandle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachedVolume>, I>>(base?: I): AttachedVolume {
    return AttachedVolume.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttachedVolume>, I>>(object: I): AttachedVolume {
    const message = createBaseAttachedVolume();
    message.driverName = object.driverName ?? "";
    message.volumeHandle = object.volumeHandle ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedVolume.$type, AttachedVolume);

function createBaseNodeTemplate(): NodeTemplate {
  return {
    $type: "yandex.cloud.k8s.v1.NodeTemplate",
    name: "",
    labels: {},
    platformId: "",
    resourcesSpec: undefined,
    bootDiskSpec: undefined,
    metadata: {},
    v4AddressSpec: undefined,
    schedulingPolicy: undefined,
    networkInterfaceSpecs: [],
    placementPolicy: undefined,
    networkSettings: undefined,
    containerRuntimeSettings: undefined,
    containerNetworkSettings: undefined,
    gpuSettings: undefined,
  };
}

export const NodeTemplate = {
  $type: "yandex.cloud.k8s.v1.NodeTemplate" as const,

  encode(message: NodeTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(106).string(message.name);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      NodeTemplate_LabelsEntry.encode(
        { $type: "yandex.cloud.k8s.v1.NodeTemplate.LabelsEntry", key: key as any, value },
        writer.uint32(122).fork(),
      ).ldelim();
    });
    if (message.platformId !== "") {
      writer.uint32(10).string(message.platformId);
    }
    if (message.resourcesSpec !== undefined) {
      ResourcesSpec.encode(message.resourcesSpec, writer.uint32(18).fork()).ldelim();
    }
    if (message.bootDiskSpec !== undefined) {
      DiskSpec.encode(message.bootDiskSpec, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      NodeTemplate_MetadataEntry.encode({
        $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.v4AddressSpec !== undefined) {
      NodeAddressSpec.encode(message.v4AddressSpec, writer.uint32(42).fork()).ldelim();
    }
    if (message.schedulingPolicy !== undefined) {
      SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.networkInterfaceSpecs) {
      NetworkInterfaceSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.placementPolicy !== undefined) {
      PlacementPolicy.encode(message.placementPolicy, writer.uint32(82).fork()).ldelim();
    }
    if (message.networkSettings !== undefined) {
      NodeTemplate_NetworkSettings.encode(message.networkSettings, writer.uint32(90).fork()).ldelim();
    }
    if (message.containerRuntimeSettings !== undefined) {
      NodeTemplate_ContainerRuntimeSettings.encode(message.containerRuntimeSettings, writer.uint32(98).fork()).ldelim();
    }
    if (message.containerNetworkSettings !== undefined) {
      NodeTemplate_ContainerNetworkSettings.encode(message.containerNetworkSettings, writer.uint32(130).fork())
        .ldelim();
    }
    if (message.gpuSettings !== undefined) {
      GpuSettings.encode(message.gpuSettings, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeTemplate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 13:
          if (tag !== 106) {
            break;
          }

          message.name = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          const entry15 = NodeTemplate_LabelsEntry.decode(reader, reader.uint32());
          if (entry15.value !== undefined) {
            message.labels[entry15.key] = entry15.value;
          }
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platformId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bootDiskSpec = DiskSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = NodeTemplate_MetadataEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.metadata[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.v4AddressSpec = NodeAddressSpec.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.schedulingPolicy = SchedulingPolicy.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.networkInterfaceSpecs.push(NetworkInterfaceSpec.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.placementPolicy = PlacementPolicy.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.networkSettings = NodeTemplate_NetworkSettings.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.containerRuntimeSettings = NodeTemplate_ContainerRuntimeSettings.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.containerNetworkSettings = NodeTemplate_ContainerNetworkSettings.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.gpuSettings = GpuSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeTemplate {
    return {
      $type: NodeTemplate.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      platformId: isSet(object.platformId) ? globalThis.String(object.platformId) : "",
      resourcesSpec: isSet(object.resourcesSpec) ? ResourcesSpec.fromJSON(object.resourcesSpec) : undefined,
      bootDiskSpec: isSet(object.bootDiskSpec) ? DiskSpec.fromJSON(object.bootDiskSpec) : undefined,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      v4AddressSpec: isSet(object.v4AddressSpec) ? NodeAddressSpec.fromJSON(object.v4AddressSpec) : undefined,
      schedulingPolicy: isSet(object.schedulingPolicy) ? SchedulingPolicy.fromJSON(object.schedulingPolicy) : undefined,
      networkInterfaceSpecs: globalThis.Array.isArray(object?.networkInterfaceSpecs)
        ? object.networkInterfaceSpecs.map((e: any) => NetworkInterfaceSpec.fromJSON(e))
        : [],
      placementPolicy: isSet(object.placementPolicy) ? PlacementPolicy.fromJSON(object.placementPolicy) : undefined,
      networkSettings: isSet(object.networkSettings)
        ? NodeTemplate_NetworkSettings.fromJSON(object.networkSettings)
        : undefined,
      containerRuntimeSettings: isSet(object.containerRuntimeSettings)
        ? NodeTemplate_ContainerRuntimeSettings.fromJSON(object.containerRuntimeSettings)
        : undefined,
      containerNetworkSettings: isSet(object.containerNetworkSettings)
        ? NodeTemplate_ContainerNetworkSettings.fromJSON(object.containerNetworkSettings)
        : undefined,
      gpuSettings: isSet(object.gpuSettings) ? GpuSettings.fromJSON(object.gpuSettings) : undefined,
    };
  },

  toJSON(message: NodeTemplate): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
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
    if (message.platformId !== "") {
      obj.platformId = message.platformId;
    }
    if (message.resourcesSpec !== undefined) {
      obj.resourcesSpec = ResourcesSpec.toJSON(message.resourcesSpec);
    }
    if (message.bootDiskSpec !== undefined) {
      obj.bootDiskSpec = DiskSpec.toJSON(message.bootDiskSpec);
    }
    if (message.metadata) {
      const entries = Object.entries(message.metadata);
      if (entries.length > 0) {
        obj.metadata = {};
        entries.forEach(([k, v]) => {
          obj.metadata[k] = v;
        });
      }
    }
    if (message.v4AddressSpec !== undefined) {
      obj.v4AddressSpec = NodeAddressSpec.toJSON(message.v4AddressSpec);
    }
    if (message.schedulingPolicy !== undefined) {
      obj.schedulingPolicy = SchedulingPolicy.toJSON(message.schedulingPolicy);
    }
    if (message.networkInterfaceSpecs?.length) {
      obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => NetworkInterfaceSpec.toJSON(e));
    }
    if (message.placementPolicy !== undefined) {
      obj.placementPolicy = PlacementPolicy.toJSON(message.placementPolicy);
    }
    if (message.networkSettings !== undefined) {
      obj.networkSettings = NodeTemplate_NetworkSettings.toJSON(message.networkSettings);
    }
    if (message.containerRuntimeSettings !== undefined) {
      obj.containerRuntimeSettings = NodeTemplate_ContainerRuntimeSettings.toJSON(message.containerRuntimeSettings);
    }
    if (message.containerNetworkSettings !== undefined) {
      obj.containerNetworkSettings = NodeTemplate_ContainerNetworkSettings.toJSON(message.containerNetworkSettings);
    }
    if (message.gpuSettings !== undefined) {
      obj.gpuSettings = GpuSettings.toJSON(message.gpuSettings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeTemplate>, I>>(base?: I): NodeTemplate {
    return NodeTemplate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeTemplate>, I>>(object: I): NodeTemplate {
    const message = createBaseNodeTemplate();
    message.name = object.name ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.platformId = object.platformId ?? "";
    message.resourcesSpec = (object.resourcesSpec !== undefined && object.resourcesSpec !== null)
      ? ResourcesSpec.fromPartial(object.resourcesSpec)
      : undefined;
    message.bootDiskSpec = (object.bootDiskSpec !== undefined && object.bootDiskSpec !== null)
      ? DiskSpec.fromPartial(object.bootDiskSpec)
      : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.v4AddressSpec = (object.v4AddressSpec !== undefined && object.v4AddressSpec !== null)
      ? NodeAddressSpec.fromPartial(object.v4AddressSpec)
      : undefined;
    message.schedulingPolicy = (object.schedulingPolicy !== undefined && object.schedulingPolicy !== null)
      ? SchedulingPolicy.fromPartial(object.schedulingPolicy)
      : undefined;
    message.networkInterfaceSpecs = object.networkInterfaceSpecs?.map((e) => NetworkInterfaceSpec.fromPartial(e)) || [];
    message.placementPolicy = (object.placementPolicy !== undefined && object.placementPolicy !== null)
      ? PlacementPolicy.fromPartial(object.placementPolicy)
      : undefined;
    message.networkSettings = (object.networkSettings !== undefined && object.networkSettings !== null)
      ? NodeTemplate_NetworkSettings.fromPartial(object.networkSettings)
      : undefined;
    message.containerRuntimeSettings =
      (object.containerRuntimeSettings !== undefined && object.containerRuntimeSettings !== null)
        ? NodeTemplate_ContainerRuntimeSettings.fromPartial(object.containerRuntimeSettings)
        : undefined;
    message.containerNetworkSettings =
      (object.containerNetworkSettings !== undefined && object.containerNetworkSettings !== null)
        ? NodeTemplate_ContainerNetworkSettings.fromPartial(object.containerNetworkSettings)
        : undefined;
    message.gpuSettings = (object.gpuSettings !== undefined && object.gpuSettings !== null)
      ? GpuSettings.fromPartial(object.gpuSettings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(NodeTemplate.$type, NodeTemplate);

function createBaseNodeTemplate_LabelsEntry(): NodeTemplate_LabelsEntry {
  return { $type: "yandex.cloud.k8s.v1.NodeTemplate.LabelsEntry", key: "", value: "" };
}

export const NodeTemplate_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.LabelsEntry" as const,

  encode(message: NodeTemplate_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeTemplate_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeTemplate_LabelsEntry();
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

  fromJSON(object: any): NodeTemplate_LabelsEntry {
    return {
      $type: NodeTemplate_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: NodeTemplate_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeTemplate_LabelsEntry>, I>>(base?: I): NodeTemplate_LabelsEntry {
    return NodeTemplate_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeTemplate_LabelsEntry>, I>>(object: I): NodeTemplate_LabelsEntry {
    const message = createBaseNodeTemplate_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(NodeTemplate_LabelsEntry.$type, NodeTemplate_LabelsEntry);

function createBaseNodeTemplate_MetadataEntry(): NodeTemplate_MetadataEntry {
  return { $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry", key: "", value: "" };
}

export const NodeTemplate_MetadataEntry = {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry" as const,

  encode(message: NodeTemplate_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeTemplate_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeTemplate_MetadataEntry();
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

  fromJSON(object: any): NodeTemplate_MetadataEntry {
    return {
      $type: NodeTemplate_MetadataEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: NodeTemplate_MetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeTemplate_MetadataEntry>, I>>(base?: I): NodeTemplate_MetadataEntry {
    return NodeTemplate_MetadataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeTemplate_MetadataEntry>, I>>(object: I): NodeTemplate_MetadataEntry {
    const message = createBaseNodeTemplate_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(NodeTemplate_MetadataEntry.$type, NodeTemplate_MetadataEntry);

function createBaseNodeTemplate_NetworkSettings(): NodeTemplate_NetworkSettings {
  return { $type: "yandex.cloud.k8s.v1.NodeTemplate.NetworkSettings", type: 0 };
}

export const NodeTemplate_NetworkSettings = {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.NetworkSettings" as const,

  encode(message: NodeTemplate_NetworkSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeTemplate_NetworkSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeTemplate_NetworkSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeTemplate_NetworkSettings {
    return {
      $type: NodeTemplate_NetworkSettings.$type,
      type: isSet(object.type) ? nodeTemplate_NetworkSettings_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: NodeTemplate_NetworkSettings): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = nodeTemplate_NetworkSettings_TypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeTemplate_NetworkSettings>, I>>(base?: I): NodeTemplate_NetworkSettings {
    return NodeTemplate_NetworkSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeTemplate_NetworkSettings>, I>>(object: I): NodeTemplate_NetworkSettings {
    const message = createBaseNodeTemplate_NetworkSettings();
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(NodeTemplate_NetworkSettings.$type, NodeTemplate_NetworkSettings);

function createBaseNodeTemplate_ContainerRuntimeSettings(): NodeTemplate_ContainerRuntimeSettings {
  return { $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerRuntimeSettings", type: 0 };
}

export const NodeTemplate_ContainerRuntimeSettings = {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerRuntimeSettings" as const,

  encode(message: NodeTemplate_ContainerRuntimeSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeTemplate_ContainerRuntimeSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeTemplate_ContainerRuntimeSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeTemplate_ContainerRuntimeSettings {
    return {
      $type: NodeTemplate_ContainerRuntimeSettings.$type,
      type: isSet(object.type) ? nodeTemplate_ContainerRuntimeSettings_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: NodeTemplate_ContainerRuntimeSettings): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = nodeTemplate_ContainerRuntimeSettings_TypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeTemplate_ContainerRuntimeSettings>, I>>(
    base?: I,
  ): NodeTemplate_ContainerRuntimeSettings {
    return NodeTemplate_ContainerRuntimeSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeTemplate_ContainerRuntimeSettings>, I>>(
    object: I,
  ): NodeTemplate_ContainerRuntimeSettings {
    const message = createBaseNodeTemplate_ContainerRuntimeSettings();
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(NodeTemplate_ContainerRuntimeSettings.$type, NodeTemplate_ContainerRuntimeSettings);

function createBaseNodeTemplate_ContainerNetworkSettings(): NodeTemplate_ContainerNetworkSettings {
  return { $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerNetworkSettings", podMtu: 0 };
}

export const NodeTemplate_ContainerNetworkSettings = {
  $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerNetworkSettings" as const,

  encode(message: NodeTemplate_ContainerNetworkSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.podMtu !== 0) {
      writer.uint32(8).int64(message.podMtu);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeTemplate_ContainerNetworkSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeTemplate_ContainerNetworkSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.podMtu = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeTemplate_ContainerNetworkSettings {
    return {
      $type: NodeTemplate_ContainerNetworkSettings.$type,
      podMtu: isSet(object.podMtu) ? globalThis.Number(object.podMtu) : 0,
    };
  },

  toJSON(message: NodeTemplate_ContainerNetworkSettings): unknown {
    const obj: any = {};
    if (message.podMtu !== 0) {
      obj.podMtu = Math.round(message.podMtu);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeTemplate_ContainerNetworkSettings>, I>>(
    base?: I,
  ): NodeTemplate_ContainerNetworkSettings {
    return NodeTemplate_ContainerNetworkSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeTemplate_ContainerNetworkSettings>, I>>(
    object: I,
  ): NodeTemplate_ContainerNetworkSettings {
    const message = createBaseNodeTemplate_ContainerNetworkSettings();
    message.podMtu = object.podMtu ?? 0;
    return message;
  },
};

messageTypeRegistry.set(NodeTemplate_ContainerNetworkSettings.$type, NodeTemplate_ContainerNetworkSettings);

function createBaseGpuSettings(): GpuSettings {
  return { $type: "yandex.cloud.k8s.v1.GpuSettings", gpuClusterId: "", gpuEnvironment: 0 };
}

export const GpuSettings = {
  $type: "yandex.cloud.k8s.v1.GpuSettings" as const,

  encode(message: GpuSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    if (message.gpuEnvironment !== 0) {
      writer.uint32(16).int32(message.gpuEnvironment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpuSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpuSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gpuEnvironment = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GpuSettings {
    return {
      $type: GpuSettings.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
      gpuEnvironment: isSet(object.gpuEnvironment) ? gpuSettings_GpuEnvironmentFromJSON(object.gpuEnvironment) : 0,
    };
  },

  toJSON(message: GpuSettings): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
    }
    if (message.gpuEnvironment !== 0) {
      obj.gpuEnvironment = gpuSettings_GpuEnvironmentToJSON(message.gpuEnvironment);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GpuSettings>, I>>(base?: I): GpuSettings {
    return GpuSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GpuSettings>, I>>(object: I): GpuSettings {
    const message = createBaseGpuSettings();
    message.gpuClusterId = object.gpuClusterId ?? "";
    message.gpuEnvironment = object.gpuEnvironment ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GpuSettings.$type, GpuSettings);

function createBaseNetworkInterfaceSpec(): NetworkInterfaceSpec {
  return {
    $type: "yandex.cloud.k8s.v1.NetworkInterfaceSpec",
    subnetIds: [],
    primaryV4AddressSpec: undefined,
    primaryV6AddressSpec: undefined,
    securityGroupIds: [],
  };
}

export const NetworkInterfaceSpec = {
  $type: "yandex.cloud.k8s.v1.NetworkInterfaceSpec" as const,

  encode(message: NetworkInterfaceSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subnetIds) {
      writer.uint32(18).string(v!);
    }
    if (message.primaryV4AddressSpec !== undefined) {
      NodeAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(26).fork()).ldelim();
    }
    if (message.primaryV6AddressSpec !== undefined) {
      NodeAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterfaceSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkInterfaceSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.primaryV4AddressSpec = NodeAddressSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.primaryV6AddressSpec = NodeAddressSpec.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkInterfaceSpec {
    return {
      $type: NetworkInterfaceSpec.$type,
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      primaryV4AddressSpec: isSet(object.primaryV4AddressSpec)
        ? NodeAddressSpec.fromJSON(object.primaryV4AddressSpec)
        : undefined,
      primaryV6AddressSpec: isSet(object.primaryV6AddressSpec)
        ? NodeAddressSpec.fromJSON(object.primaryV6AddressSpec)
        : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: NetworkInterfaceSpec): unknown {
    const obj: any = {};
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.primaryV4AddressSpec !== undefined) {
      obj.primaryV4AddressSpec = NodeAddressSpec.toJSON(message.primaryV4AddressSpec);
    }
    if (message.primaryV6AddressSpec !== undefined) {
      obj.primaryV6AddressSpec = NodeAddressSpec.toJSON(message.primaryV6AddressSpec);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkInterfaceSpec>, I>>(base?: I): NetworkInterfaceSpec {
    return NetworkInterfaceSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkInterfaceSpec>, I>>(object: I): NetworkInterfaceSpec {
    const message = createBaseNetworkInterfaceSpec();
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.primaryV4AddressSpec = (object.primaryV4AddressSpec !== undefined && object.primaryV4AddressSpec !== null)
      ? NodeAddressSpec.fromPartial(object.primaryV4AddressSpec)
      : undefined;
    message.primaryV6AddressSpec = (object.primaryV6AddressSpec !== undefined && object.primaryV6AddressSpec !== null)
      ? NodeAddressSpec.fromPartial(object.primaryV6AddressSpec)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(NetworkInterfaceSpec.$type, NetworkInterfaceSpec);

function createBaseNodeAddressSpec(): NodeAddressSpec {
  return { $type: "yandex.cloud.k8s.v1.NodeAddressSpec", oneToOneNatSpec: undefined, dnsRecordSpecs: [] };
}

export const NodeAddressSpec = {
  $type: "yandex.cloud.k8s.v1.NodeAddressSpec" as const,

  encode(message: NodeAddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oneToOneNatSpec !== undefined) {
      OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.dnsRecordSpecs) {
      DnsRecordSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeAddressSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeAddressSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oneToOneNatSpec = OneToOneNatSpec.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dnsRecordSpecs.push(DnsRecordSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeAddressSpec {
    return {
      $type: NodeAddressSpec.$type,
      oneToOneNatSpec: isSet(object.oneToOneNatSpec) ? OneToOneNatSpec.fromJSON(object.oneToOneNatSpec) : undefined,
      dnsRecordSpecs: globalThis.Array.isArray(object?.dnsRecordSpecs)
        ? object.dnsRecordSpecs.map((e: any) => DnsRecordSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NodeAddressSpec): unknown {
    const obj: any = {};
    if (message.oneToOneNatSpec !== undefined) {
      obj.oneToOneNatSpec = OneToOneNatSpec.toJSON(message.oneToOneNatSpec);
    }
    if (message.dnsRecordSpecs?.length) {
      obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) => DnsRecordSpec.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeAddressSpec>, I>>(base?: I): NodeAddressSpec {
    return NodeAddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeAddressSpec>, I>>(object: I): NodeAddressSpec {
    const message = createBaseNodeAddressSpec();
    message.oneToOneNatSpec = (object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null)
      ? OneToOneNatSpec.fromPartial(object.oneToOneNatSpec)
      : undefined;
    message.dnsRecordSpecs = object.dnsRecordSpecs?.map((e) => DnsRecordSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(NodeAddressSpec.$type, NodeAddressSpec);

function createBaseDnsRecordSpec(): DnsRecordSpec {
  return { $type: "yandex.cloud.k8s.v1.DnsRecordSpec", fqdn: "", dnsZoneId: "", ttl: 0, ptr: false };
}

export const DnsRecordSpec = {
  $type: "yandex.cloud.k8s.v1.DnsRecordSpec" as const,

  encode(message: DnsRecordSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fqdn !== "") {
      writer.uint32(10).string(message.fqdn);
    }
    if (message.dnsZoneId !== "") {
      writer.uint32(18).string(message.dnsZoneId);
    }
    if (message.ttl !== 0) {
      writer.uint32(24).int64(message.ttl);
    }
    if (message.ptr === true) {
      writer.uint32(32).bool(message.ptr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DnsRecordSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDnsRecordSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fqdn = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dnsZoneId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ttl = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.ptr = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DnsRecordSpec {
    return {
      $type: DnsRecordSpec.$type,
      fqdn: isSet(object.fqdn) ? globalThis.String(object.fqdn) : "",
      dnsZoneId: isSet(object.dnsZoneId) ? globalThis.String(object.dnsZoneId) : "",
      ttl: isSet(object.ttl) ? globalThis.Number(object.ttl) : 0,
      ptr: isSet(object.ptr) ? globalThis.Boolean(object.ptr) : false,
    };
  },

  toJSON(message: DnsRecordSpec): unknown {
    const obj: any = {};
    if (message.fqdn !== "") {
      obj.fqdn = message.fqdn;
    }
    if (message.dnsZoneId !== "") {
      obj.dnsZoneId = message.dnsZoneId;
    }
    if (message.ttl !== 0) {
      obj.ttl = Math.round(message.ttl);
    }
    if (message.ptr === true) {
      obj.ptr = message.ptr;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DnsRecordSpec>, I>>(base?: I): DnsRecordSpec {
    return DnsRecordSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DnsRecordSpec>, I>>(object: I): DnsRecordSpec {
    const message = createBaseDnsRecordSpec();
    message.fqdn = object.fqdn ?? "";
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.ttl = object.ttl ?? 0;
    message.ptr = object.ptr ?? false;
    return message;
  },
};

messageTypeRegistry.set(DnsRecordSpec.$type, DnsRecordSpec);

function createBaseOneToOneNatSpec(): OneToOneNatSpec {
  return { $type: "yandex.cloud.k8s.v1.OneToOneNatSpec", ipVersion: 0 };
}

export const OneToOneNatSpec = {
  $type: "yandex.cloud.k8s.v1.OneToOneNatSpec" as const,

  encode(message: OneToOneNatSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipVersion !== 0) {
      writer.uint32(8).int32(message.ipVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneToOneNatSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneToOneNatSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): OneToOneNatSpec {
    return {
      $type: OneToOneNatSpec.$type,
      ipVersion: isSet(object.ipVersion) ? ipVersionFromJSON(object.ipVersion) : 0,
    };
  },

  toJSON(message: OneToOneNatSpec): unknown {
    const obj: any = {};
    if (message.ipVersion !== 0) {
      obj.ipVersion = ipVersionToJSON(message.ipVersion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OneToOneNatSpec>, I>>(base?: I): OneToOneNatSpec {
    return OneToOneNatSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneToOneNatSpec>, I>>(object: I): OneToOneNatSpec {
    const message = createBaseOneToOneNatSpec();
    message.ipVersion = object.ipVersion ?? 0;
    return message;
  },
};

messageTypeRegistry.set(OneToOneNatSpec.$type, OneToOneNatSpec);

function createBaseResourcesSpec(): ResourcesSpec {
  return { $type: "yandex.cloud.k8s.v1.ResourcesSpec", memory: 0, cores: 0, coreFraction: 0, gpus: 0 };
}

export const ResourcesSpec = {
  $type: "yandex.cloud.k8s.v1.ResourcesSpec" as const,

  encode(message: ResourcesSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memory !== 0) {
      writer.uint32(8).int64(message.memory);
    }
    if (message.cores !== 0) {
      writer.uint32(16).int64(message.cores);
    }
    if (message.coreFraction !== 0) {
      writer.uint32(24).int64(message.coreFraction);
    }
    if (message.gpus !== 0) {
      writer.uint32(32).int64(message.gpus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcesSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.memory = longToNumber(reader.int64() as Long);
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

          message.coreFraction = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gpus = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourcesSpec {
    return {
      $type: ResourcesSpec.$type,
      memory: isSet(object.memory) ? globalThis.Number(object.memory) : 0,
      cores: isSet(object.cores) ? globalThis.Number(object.cores) : 0,
      coreFraction: isSet(object.coreFraction) ? globalThis.Number(object.coreFraction) : 0,
      gpus: isSet(object.gpus) ? globalThis.Number(object.gpus) : 0,
    };
  },

  toJSON(message: ResourcesSpec): unknown {
    const obj: any = {};
    if (message.memory !== 0) {
      obj.memory = Math.round(message.memory);
    }
    if (message.cores !== 0) {
      obj.cores = Math.round(message.cores);
    }
    if (message.coreFraction !== 0) {
      obj.coreFraction = Math.round(message.coreFraction);
    }
    if (message.gpus !== 0) {
      obj.gpus = Math.round(message.gpus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourcesSpec>, I>>(base?: I): ResourcesSpec {
    return ResourcesSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourcesSpec>, I>>(object: I): ResourcesSpec {
    const message = createBaseResourcesSpec();
    message.memory = object.memory ?? 0;
    message.cores = object.cores ?? 0;
    message.coreFraction = object.coreFraction ?? 0;
    message.gpus = object.gpus ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ResourcesSpec.$type, ResourcesSpec);

function createBaseDiskSpec(): DiskSpec {
  return { $type: "yandex.cloud.k8s.v1.DiskSpec", diskTypeId: "", diskSize: 0 };
}

export const DiskSpec = {
  $type: "yandex.cloud.k8s.v1.DiskSpec" as const,

  encode(message: DiskSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskTypeId !== "") {
      writer.uint32(10).string(message.diskTypeId);
    }
    if (message.diskSize !== 0) {
      writer.uint32(16).int64(message.diskSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskTypeId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): DiskSpec {
    return {
      $type: DiskSpec.$type,
      diskTypeId: isSet(object.diskTypeId) ? globalThis.String(object.diskTypeId) : "",
      diskSize: isSet(object.diskSize) ? globalThis.Number(object.diskSize) : 0,
    };
  },

  toJSON(message: DiskSpec): unknown {
    const obj: any = {};
    if (message.diskTypeId !== "") {
      obj.diskTypeId = message.diskTypeId;
    }
    if (message.diskSize !== 0) {
      obj.diskSize = Math.round(message.diskSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiskSpec>, I>>(base?: I): DiskSpec {
    return DiskSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiskSpec>, I>>(object: I): DiskSpec {
    const message = createBaseDiskSpec();
    message.diskTypeId = object.diskTypeId ?? "";
    message.diskSize = object.diskSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DiskSpec.$type, DiskSpec);

function createBaseSchedulingPolicy(): SchedulingPolicy {
  return { $type: "yandex.cloud.k8s.v1.SchedulingPolicy", preemptible: false };
}

export const SchedulingPolicy = {
  $type: "yandex.cloud.k8s.v1.SchedulingPolicy" as const,

  encode(message: SchedulingPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preemptible === true) {
      writer.uint32(8).bool(message.preemptible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchedulingPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedulingPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.preemptible = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchedulingPolicy {
    return {
      $type: SchedulingPolicy.$type,
      preemptible: isSet(object.preemptible) ? globalThis.Boolean(object.preemptible) : false,
    };
  },

  toJSON(message: SchedulingPolicy): unknown {
    const obj: any = {};
    if (message.preemptible === true) {
      obj.preemptible = message.preemptible;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SchedulingPolicy>, I>>(base?: I): SchedulingPolicy {
    return SchedulingPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SchedulingPolicy>, I>>(object: I): SchedulingPolicy {
    const message = createBaseSchedulingPolicy();
    message.preemptible = object.preemptible ?? false;
    return message;
  },
};

messageTypeRegistry.set(SchedulingPolicy.$type, SchedulingPolicy);

function createBasePlacementPolicy(): PlacementPolicy {
  return { $type: "yandex.cloud.k8s.v1.PlacementPolicy", placementGroupId: "" };
}

export const PlacementPolicy = {
  $type: "yandex.cloud.k8s.v1.PlacementPolicy" as const,

  encode(message: PlacementPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlacementPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacementPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlacementPolicy {
    return {
      $type: PlacementPolicy.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
    };
  },

  toJSON(message: PlacementPolicy): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlacementPolicy>, I>>(base?: I): PlacementPolicy {
    return PlacementPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlacementPolicy>, I>>(object: I): PlacementPolicy {
    const message = createBasePlacementPolicy();
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PlacementPolicy.$type, PlacementPolicy);

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
