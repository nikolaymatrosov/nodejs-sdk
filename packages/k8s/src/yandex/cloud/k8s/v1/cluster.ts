/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { MaintenanceWindow } from "./maintenance";
import { VersionInfo } from "./version";

export const protobufPackage = "yandex.cloud.k8s.v1";

export enum ReleaseChannel {
  RELEASE_CHANNEL_UNSPECIFIED = 0,
  /**
   * RAPID - Minor updates with new functions and improvements are often added.
   * You can't disable automatic updates in this channel, but you can specify a time period for automatic updates.
   */
  RAPID = 1,
  /** REGULAR - New functions and improvements are added in chunks shortly after they appear on `RAPID`. */
  REGULAR = 2,
  /** STABLE - Only updates related to bug fixes or security improvements are added. */
  STABLE = 3,
  UNRECOGNIZED = -1,
}

export function releaseChannelFromJSON(object: any): ReleaseChannel {
  switch (object) {
    case 0:
    case "RELEASE_CHANNEL_UNSPECIFIED":
      return ReleaseChannel.RELEASE_CHANNEL_UNSPECIFIED;
    case 1:
    case "RAPID":
      return ReleaseChannel.RAPID;
    case 2:
    case "REGULAR":
      return ReleaseChannel.REGULAR;
    case 3:
    case "STABLE":
      return ReleaseChannel.STABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReleaseChannel.UNRECOGNIZED;
  }
}

export function releaseChannelToJSON(object: ReleaseChannel): string {
  switch (object) {
    case ReleaseChannel.RELEASE_CHANNEL_UNSPECIFIED:
      return "RELEASE_CHANNEL_UNSPECIFIED";
    case ReleaseChannel.RAPID:
      return "RAPID";
    case ReleaseChannel.REGULAR:
      return "REGULAR";
    case ReleaseChannel.STABLE:
      return "STABLE";
    case ReleaseChannel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A Kubernetes cluster. */
export interface Cluster {
  $type: "yandex.cloud.k8s.v1.Cluster";
  /** ID of the Kubernetes cluster. */
  id: string;
  /** ID of the folder that the Kubernetes cluster belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the Kubernetes cluster. */
  name: string;
  /** Description of the Kubernetes cluster. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** Status of the Kubernetes cluster. */
  status: Cluster_Status;
  /** Health of the Kubernetes cluster. */
  health: Cluster_Health;
  /** ID of the network the Kubernetes cluster belongs to. */
  networkId: string;
  /** Properties of the master for the Kubernetes cluster. */
  master?:
    | Master
    | undefined;
  /** Allocation policy for IP addresses of services and pods inside the Kubernetes cluster in different availability zones. */
  ipAllocationPolicy?:
    | IPAllocationPolicy
    | undefined;
  /** Gateway IPv4 address. */
  gatewayIpv4Address?:
    | string
    | undefined;
  /** Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster. */
  serviceAccountId: string;
  /** Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry or to push node logs and metrics. */
  nodeServiceAccountId: string;
  /**
   * When creating a Kubernetes cluster, you should specify one of three release channels. The release channel contains several Kubernetes versions.
   * Channels differ in the set of available versions, the management of auto-updates, and the updates received.
   * You can't change the channel once the Kubernetes cluster is created, you can only recreate the Kubernetes cluster and specify a new release channel.
   * For more details see [documentation](https://cloud.yandex.com/docs/managed-kubernetes/concepts/release-channels-and-updates).
   */
  releaseChannel: ReleaseChannel;
  networkPolicy?:
    | NetworkPolicy
    | undefined;
  /** KMS provider configuration. */
  kmsProvider?:
    | KMSProvider
    | undefined;
  /** Log group where cluster stores cluster system logs, like audit, events, or controlplane logs. */
  logGroupId: string;
  cilium?: Cilium | undefined;
}

export enum Cluster_Status {
  STATUS_UNSPECIFIED = 0,
  /** PROVISIONING - Kubernetes cluster is waiting for resources to be allocated. */
  PROVISIONING = 1,
  /** RUNNING - Kubernetes cluster is running. */
  RUNNING = 2,
  /** RECONCILING - Kubernetes cluster is being reconciled. */
  RECONCILING = 3,
  /** STOPPING - Kubernetes cluster is being stopped. */
  STOPPING = 4,
  /** STOPPED - Kubernetes cluster stopped. */
  STOPPED = 5,
  /** DELETING - Kubernetes cluster is being deleted. */
  DELETING = 6,
  /** STARTING - Kubernetes cluster is being started. */
  STARTING = 7,
  UNRECOGNIZED = -1,
}

export function cluster_StatusFromJSON(object: any): Cluster_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Cluster_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PROVISIONING":
      return Cluster_Status.PROVISIONING;
    case 2:
    case "RUNNING":
      return Cluster_Status.RUNNING;
    case 3:
    case "RECONCILING":
      return Cluster_Status.RECONCILING;
    case 4:
    case "STOPPING":
      return Cluster_Status.STOPPING;
    case 5:
    case "STOPPED":
      return Cluster_Status.STOPPED;
    case 6:
    case "DELETING":
      return Cluster_Status.DELETING;
    case 7:
    case "STARTING":
      return Cluster_Status.STARTING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cluster_Status.UNRECOGNIZED;
  }
}

export function cluster_StatusToJSON(object: Cluster_Status): string {
  switch (object) {
    case Cluster_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Cluster_Status.PROVISIONING:
      return "PROVISIONING";
    case Cluster_Status.RUNNING:
      return "RUNNING";
    case Cluster_Status.RECONCILING:
      return "RECONCILING";
    case Cluster_Status.STOPPING:
      return "STOPPING";
    case Cluster_Status.STOPPED:
      return "STOPPED";
    case Cluster_Status.DELETING:
      return "DELETING";
    case Cluster_Status.STARTING:
      return "STARTING";
    case Cluster_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Cluster_Health {
  HEALTH_UNSPECIFIED = 0,
  /** HEALTHY - Kubernetes cluster is alive and well. */
  HEALTHY = 1,
  /** UNHEALTHY - Kubernetes cluster is inoperable. */
  UNHEALTHY = 2,
  UNRECOGNIZED = -1,
}

export function cluster_HealthFromJSON(object: any): Cluster_Health {
  switch (object) {
    case 0:
    case "HEALTH_UNSPECIFIED":
      return Cluster_Health.HEALTH_UNSPECIFIED;
    case 1:
    case "HEALTHY":
      return Cluster_Health.HEALTHY;
    case 2:
    case "UNHEALTHY":
      return Cluster_Health.UNHEALTHY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cluster_Health.UNRECOGNIZED;
  }
}

export function cluster_HealthToJSON(object: Cluster_Health): string {
  switch (object) {
    case Cluster_Health.HEALTH_UNSPECIFIED:
      return "HEALTH_UNSPECIFIED";
    case Cluster_Health.HEALTHY:
      return "HEALTHY";
    case Cluster_Health.UNHEALTHY:
      return "UNHEALTHY";
    case Cluster_Health.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Cluster_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

export interface Master {
  $type: "yandex.cloud.k8s.v1.Master";
  /** Parameters of the availability zone for the master. */
  zonalMaster?:
    | ZonalMaster
    | undefined;
  /** Parameters of the region for the master. */
  regionalMaster?:
    | RegionalMaster
    | undefined;
  /** Locations specification for Kubernetes control-plane (master) instances. */
  locations: Location[];
  /** Number of etcd nodes in cluster. */
  etcdClusterSize: number;
  /** Version of Kubernetes components that runs on the master. */
  version: string;
  /**
   * Endpoints of the master. Endpoints constitute of scheme and port (i.e. `https://ip-address:port`)
   * and can be used by the clients to communicate with the Kubernetes API of the Kubernetes cluster.
   */
  endpoints?:
    | MasterEndpoints
    | undefined;
  /** Master authentication parameters are used to establish trust between the master and a client. */
  masterAuth?:
    | MasterAuth
    | undefined;
  /** Detailed information about the Kubernetes version that is running on the master. */
  versionInfo?:
    | VersionInfo
    | undefined;
  /** Maintenance policy of the master. */
  maintenancePolicy?:
    | MasterMaintenancePolicy
    | undefined;
  /** Master security groups. */
  securityGroupIds: string[];
  /** Cloud Logging for master components. */
  masterLogging?: MasterLogging | undefined;
}

export interface MasterAuth {
  $type: "yandex.cloud.k8s.v1.MasterAuth";
  /** PEM-encoded public certificate that is the root of trust for the Kubernetes cluster. */
  clusterCaCertificate: string;
}

export interface ZonalMaster {
  $type: "yandex.cloud.k8s.v1.ZonalMaster";
  /** ID of the availability zone where the master resides. */
  zoneId: string;
  /** IPv4 internal network address that is assigned to the master. */
  internalV4Address: string;
  /** IPv4 external network address that is assigned to the master. */
  externalV4Address: string;
}

export interface RegionalMaster {
  $type: "yandex.cloud.k8s.v1.RegionalMaster";
  /** ID of the region where the master resides. */
  regionId: string;
  /** IPv4 internal network address that is assigned to the master. */
  internalV4Address: string;
  /** IPv4 external network address that is assigned to the master. */
  externalV4Address: string;
  /** IPv6 external network address that is assigned to the master. */
  externalV6Address: string;
}

export interface Location {
  $type: "yandex.cloud.k8s.v1.Location";
  /** ID of the availability zone where the master resides. */
  zoneId: string;
  /** ID of the VPC network's subnet where the master resides. */
  subnetId: string;
}

export interface MasterEndpoints {
  $type: "yandex.cloud.k8s.v1.MasterEndpoints";
  /** Internal endpoint that can be used to connect to the master from cloud networks. */
  internalV4Endpoint: string;
  /** External endpoint that can be used to access Kubernetes cluster API from the internet (outside of the cloud). */
  externalV4Endpoint: string;
  /** External IPv6 endpoint that can be used to access Kubernetes cluster API from the internet (outside of the cloud). */
  externalV6Endpoint: string;
}

export interface IPAllocationPolicy {
  $type: "yandex.cloud.k8s.v1.IPAllocationPolicy";
  /**
   * CIDR block. IP range for allocating pod addresses.
   *
   * It should not overlap with any subnet in the network the Kubernetes cluster located in. Static routes will be
   * set up for this CIDR blocks in node subnets.
   */
  clusterIpv4CidrBlock: string;
  /**
   * Size of the masks that are assigned for each node in the cluster.
   *
   * If not specified, 24 is used.
   */
  nodeIpv4CidrMaskSize: number;
  /**
   * CIDR block. IP range Kubernetes service Kubernetes cluster IP addresses will be allocated from.
   *
   * It should not overlap with any subnet in the network the Kubernetes cluster located in.
   */
  serviceIpv4CidrBlock: string;
  /** IPv6 range for allocating pod IP addresses. */
  clusterIpv6CidrBlock: string;
  /** IPv6 range for allocating Kubernetes service IP addresses */
  serviceIpv6CidrBlock: string;
}

export interface MasterMaintenancePolicy {
  $type: "yandex.cloud.k8s.v1.MasterMaintenancePolicy";
  /**
   * If set to true, automatic updates are installed in the specified period of time with no interaction from the user.
   * If set to false, automatic upgrades are disabled.
   */
  autoUpgrade: boolean;
  /**
   * Maintenance window settings. Update will start at the specified time and last no more than the specified duration.
   * The time is set in UTC.
   */
  maintenanceWindow?: MaintenanceWindow | undefined;
}

export interface MasterLogging {
  $type: "yandex.cloud.k8s.v1.MasterLogging";
  /** Identifies whether Cloud Logging is enabled for master components. */
  enabled: boolean;
  /** ID of the log group where logs of master components should be stored. */
  logGroupId?:
    | string
    | undefined;
  /** ID of the folder where logs should be stored (in default group). */
  folderId?:
    | string
    | undefined;
  /** Identifies whether Cloud Logging is enabled for audit logs. */
  auditEnabled: boolean;
  /** Identifies whether Cloud Logging is enabled for cluster-autoscaler. */
  clusterAutoscalerEnabled: boolean;
  /** Identifies whether Cloud Logging is enabled for kube-apiserver. */
  kubeApiserverEnabled: boolean;
  /** Identifies whether Cloud Logging is enabled for events. */
  eventsEnabled: boolean;
}

export interface NetworkPolicy {
  $type: "yandex.cloud.k8s.v1.NetworkPolicy";
  provider: NetworkPolicy_Provider;
}

export enum NetworkPolicy_Provider {
  PROVIDER_UNSPECIFIED = 0,
  CALICO = 1,
  UNRECOGNIZED = -1,
}

export function networkPolicy_ProviderFromJSON(object: any): NetworkPolicy_Provider {
  switch (object) {
    case 0:
    case "PROVIDER_UNSPECIFIED":
      return NetworkPolicy_Provider.PROVIDER_UNSPECIFIED;
    case 1:
    case "CALICO":
      return NetworkPolicy_Provider.CALICO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetworkPolicy_Provider.UNRECOGNIZED;
  }
}

export function networkPolicy_ProviderToJSON(object: NetworkPolicy_Provider): string {
  switch (object) {
    case NetworkPolicy_Provider.PROVIDER_UNSPECIFIED:
      return "PROVIDER_UNSPECIFIED";
    case NetworkPolicy_Provider.CALICO:
      return "CALICO";
    case NetworkPolicy_Provider.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface KMSProvider {
  $type: "yandex.cloud.k8s.v1.KMSProvider";
  /**
   * KMS key ID for secrets encryption.
   * To obtain a KMS key ID use a [yandex.cloud.kms.v1.SymmetricKeyService.List] request.
   */
  keyId: string;
}

export interface Cilium {
  $type: "yandex.cloud.k8s.v1.Cilium";
  routingMode: Cilium_RoutingMode;
}

export enum Cilium_RoutingMode {
  ROUTING_MODE_UNSPECIFIED = 0,
  TUNNEL = 1,
  UNRECOGNIZED = -1,
}

export function cilium_RoutingModeFromJSON(object: any): Cilium_RoutingMode {
  switch (object) {
    case 0:
    case "ROUTING_MODE_UNSPECIFIED":
      return Cilium_RoutingMode.ROUTING_MODE_UNSPECIFIED;
    case 1:
    case "TUNNEL":
      return Cilium_RoutingMode.TUNNEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cilium_RoutingMode.UNRECOGNIZED;
  }
}

export function cilium_RoutingModeToJSON(object: Cilium_RoutingMode): string {
  switch (object) {
    case Cilium_RoutingMode.ROUTING_MODE_UNSPECIFIED:
      return "ROUTING_MODE_UNSPECIFIED";
    case Cilium_RoutingMode.TUNNEL:
      return "TUNNEL";
    case Cilium_RoutingMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCluster(): Cluster {
  return {
    $type: "yandex.cloud.k8s.v1.Cluster",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
    health: 0,
    networkId: "",
    master: undefined,
    ipAllocationPolicy: undefined,
    gatewayIpv4Address: undefined,
    serviceAccountId: "",
    nodeServiceAccountId: "",
    releaseChannel: 0,
    networkPolicy: undefined,
    kmsProvider: undefined,
    logGroupId: "",
    cilium: undefined,
  };
}

export const Cluster = {
  $type: "yandex.cloud.k8s.v1.Cluster" as const,

  encode(message: Cluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Cluster_LabelsEntry.encode(
        { $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.health !== 0) {
      writer.uint32(64).int32(message.health);
    }
    if (message.networkId !== "") {
      writer.uint32(74).string(message.networkId);
    }
    if (message.master !== undefined) {
      Master.encode(message.master, writer.uint32(82).fork()).ldelim();
    }
    if (message.ipAllocationPolicy !== undefined) {
      IPAllocationPolicy.encode(message.ipAllocationPolicy, writer.uint32(90).fork()).ldelim();
    }
    if (message.gatewayIpv4Address !== undefined) {
      writer.uint32(98).string(message.gatewayIpv4Address);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(106).string(message.serviceAccountId);
    }
    if (message.nodeServiceAccountId !== "") {
      writer.uint32(114).string(message.nodeServiceAccountId);
    }
    if (message.releaseChannel !== 0) {
      writer.uint32(120).int32(message.releaseChannel);
    }
    if (message.networkPolicy !== undefined) {
      NetworkPolicy.encode(message.networkPolicy, writer.uint32(130).fork()).ldelim();
    }
    if (message.kmsProvider !== undefined) {
      KMSProvider.encode(message.kmsProvider, writer.uint32(138).fork()).ldelim();
    }
    if (message.logGroupId !== "") {
      writer.uint32(146).string(message.logGroupId);
    }
    if (message.cilium !== undefined) {
      Cilium.encode(message.cilium, writer.uint32(154).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCluster();
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

          const entry6 = Cluster_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.health = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.master = Master.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.ipAllocationPolicy = IPAllocationPolicy.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.gatewayIpv4Address = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.nodeServiceAccountId = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.releaseChannel = reader.int32() as any;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.networkPolicy = NetworkPolicy.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.kmsProvider = KMSProvider.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.cilium = Cilium.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Cluster {
    return {
      $type: Cluster.$type,
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
      status: isSet(object.status) ? cluster_StatusFromJSON(object.status) : 0,
      health: isSet(object.health) ? cluster_HealthFromJSON(object.health) : 0,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      master: isSet(object.master) ? Master.fromJSON(object.master) : undefined,
      ipAllocationPolicy: isSet(object.ipAllocationPolicy)
        ? IPAllocationPolicy.fromJSON(object.ipAllocationPolicy)
        : undefined,
      gatewayIpv4Address: isSet(object.gatewayIpv4Address) ? globalThis.String(object.gatewayIpv4Address) : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      nodeServiceAccountId: isSet(object.nodeServiceAccountId) ? globalThis.String(object.nodeServiceAccountId) : "",
      releaseChannel: isSet(object.releaseChannel) ? releaseChannelFromJSON(object.releaseChannel) : 0,
      networkPolicy: isSet(object.networkPolicy) ? NetworkPolicy.fromJSON(object.networkPolicy) : undefined,
      kmsProvider: isSet(object.kmsProvider) ? KMSProvider.fromJSON(object.kmsProvider) : undefined,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      cilium: isSet(object.cilium) ? Cilium.fromJSON(object.cilium) : undefined,
    };
  },

  toJSON(message: Cluster): unknown {
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
    if (message.status !== 0) {
      obj.status = cluster_StatusToJSON(message.status);
    }
    if (message.health !== 0) {
      obj.health = cluster_HealthToJSON(message.health);
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.master !== undefined) {
      obj.master = Master.toJSON(message.master);
    }
    if (message.ipAllocationPolicy !== undefined) {
      obj.ipAllocationPolicy = IPAllocationPolicy.toJSON(message.ipAllocationPolicy);
    }
    if (message.gatewayIpv4Address !== undefined) {
      obj.gatewayIpv4Address = message.gatewayIpv4Address;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.nodeServiceAccountId !== "") {
      obj.nodeServiceAccountId = message.nodeServiceAccountId;
    }
    if (message.releaseChannel !== 0) {
      obj.releaseChannel = releaseChannelToJSON(message.releaseChannel);
    }
    if (message.networkPolicy !== undefined) {
      obj.networkPolicy = NetworkPolicy.toJSON(message.networkPolicy);
    }
    if (message.kmsProvider !== undefined) {
      obj.kmsProvider = KMSProvider.toJSON(message.kmsProvider);
    }
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.cilium !== undefined) {
      obj.cilium = Cilium.toJSON(message.cilium);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Cluster>, I>>(base?: I): Cluster {
    return Cluster.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Cluster>, I>>(object: I): Cluster {
    const message = createBaseCluster();
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
    message.status = object.status ?? 0;
    message.health = object.health ?? 0;
    message.networkId = object.networkId ?? "";
    message.master = (object.master !== undefined && object.master !== null)
      ? Master.fromPartial(object.master)
      : undefined;
    message.ipAllocationPolicy = (object.ipAllocationPolicy !== undefined && object.ipAllocationPolicy !== null)
      ? IPAllocationPolicy.fromPartial(object.ipAllocationPolicy)
      : undefined;
    message.gatewayIpv4Address = object.gatewayIpv4Address ?? undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.nodeServiceAccountId = object.nodeServiceAccountId ?? "";
    message.releaseChannel = object.releaseChannel ?? 0;
    message.networkPolicy = (object.networkPolicy !== undefined && object.networkPolicy !== null)
      ? NetworkPolicy.fromPartial(object.networkPolicy)
      : undefined;
    message.kmsProvider = (object.kmsProvider !== undefined && object.kmsProvider !== null)
      ? KMSProvider.fromPartial(object.kmsProvider)
      : undefined;
    message.logGroupId = object.logGroupId ?? "";
    message.cilium = (object.cilium !== undefined && object.cilium !== null)
      ? Cilium.fromPartial(object.cilium)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

function createBaseCluster_LabelsEntry(): Cluster_LabelsEntry {
  return { $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry", key: "", value: "" };
}

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry" as const,

  encode(message: Cluster_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cluster_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCluster_LabelsEntry();
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

  fromJSON(object: any): Cluster_LabelsEntry {
    return {
      $type: Cluster_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Cluster_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Cluster_LabelsEntry>, I>>(base?: I): Cluster_LabelsEntry {
    return Cluster_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Cluster_LabelsEntry>, I>>(object: I): Cluster_LabelsEntry {
    const message = createBaseCluster_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Cluster_LabelsEntry.$type, Cluster_LabelsEntry);

function createBaseMaster(): Master {
  return {
    $type: "yandex.cloud.k8s.v1.Master",
    zonalMaster: undefined,
    regionalMaster: undefined,
    locations: [],
    etcdClusterSize: 0,
    version: "",
    endpoints: undefined,
    masterAuth: undefined,
    versionInfo: undefined,
    maintenancePolicy: undefined,
    securityGroupIds: [],
    masterLogging: undefined,
  };
}

export const Master = {
  $type: "yandex.cloud.k8s.v1.Master" as const,

  encode(message: Master, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zonalMaster !== undefined) {
      ZonalMaster.encode(message.zonalMaster, writer.uint32(10).fork()).ldelim();
    }
    if (message.regionalMaster !== undefined) {
      RegionalMaster.encode(message.regionalMaster, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.locations) {
      Location.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.etcdClusterSize !== 0) {
      writer.uint32(88).int64(message.etcdClusterSize);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.endpoints !== undefined) {
      MasterEndpoints.encode(message.endpoints, writer.uint32(26).fork()).ldelim();
    }
    if (message.masterAuth !== undefined) {
      MasterAuth.encode(message.masterAuth, writer.uint32(34).fork()).ldelim();
    }
    if (message.versionInfo !== undefined) {
      VersionInfo.encode(message.versionInfo, writer.uint32(42).fork()).ldelim();
    }
    if (message.maintenancePolicy !== undefined) {
      MasterMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(66).string(v!);
    }
    if (message.masterLogging !== undefined) {
      MasterLogging.encode(message.masterLogging, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Master {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zonalMaster = ZonalMaster.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.regionalMaster = RegionalMaster.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.locations.push(Location.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.etcdClusterSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.endpoints = MasterEndpoints.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.masterAuth = MasterAuth.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.versionInfo = VersionInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maintenancePolicy = MasterMaintenancePolicy.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.masterLogging = MasterLogging.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Master {
    return {
      $type: Master.$type,
      zonalMaster: isSet(object.zonalMaster) ? ZonalMaster.fromJSON(object.zonalMaster) : undefined,
      regionalMaster: isSet(object.regionalMaster) ? RegionalMaster.fromJSON(object.regionalMaster) : undefined,
      locations: globalThis.Array.isArray(object?.locations)
        ? object.locations.map((e: any) => Location.fromJSON(e))
        : [],
      etcdClusterSize: isSet(object.etcdClusterSize) ? globalThis.Number(object.etcdClusterSize) : 0,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      endpoints: isSet(object.endpoints) ? MasterEndpoints.fromJSON(object.endpoints) : undefined,
      masterAuth: isSet(object.masterAuth) ? MasterAuth.fromJSON(object.masterAuth) : undefined,
      versionInfo: isSet(object.versionInfo) ? VersionInfo.fromJSON(object.versionInfo) : undefined,
      maintenancePolicy: isSet(object.maintenancePolicy)
        ? MasterMaintenancePolicy.fromJSON(object.maintenancePolicy)
        : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      masterLogging: isSet(object.masterLogging) ? MasterLogging.fromJSON(object.masterLogging) : undefined,
    };
  },

  toJSON(message: Master): unknown {
    const obj: any = {};
    if (message.zonalMaster !== undefined) {
      obj.zonalMaster = ZonalMaster.toJSON(message.zonalMaster);
    }
    if (message.regionalMaster !== undefined) {
      obj.regionalMaster = RegionalMaster.toJSON(message.regionalMaster);
    }
    if (message.locations?.length) {
      obj.locations = message.locations.map((e) => Location.toJSON(e));
    }
    if (message.etcdClusterSize !== 0) {
      obj.etcdClusterSize = Math.round(message.etcdClusterSize);
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.endpoints !== undefined) {
      obj.endpoints = MasterEndpoints.toJSON(message.endpoints);
    }
    if (message.masterAuth !== undefined) {
      obj.masterAuth = MasterAuth.toJSON(message.masterAuth);
    }
    if (message.versionInfo !== undefined) {
      obj.versionInfo = VersionInfo.toJSON(message.versionInfo);
    }
    if (message.maintenancePolicy !== undefined) {
      obj.maintenancePolicy = MasterMaintenancePolicy.toJSON(message.maintenancePolicy);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.masterLogging !== undefined) {
      obj.masterLogging = MasterLogging.toJSON(message.masterLogging);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Master>, I>>(base?: I): Master {
    return Master.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Master>, I>>(object: I): Master {
    const message = createBaseMaster();
    message.zonalMaster = (object.zonalMaster !== undefined && object.zonalMaster !== null)
      ? ZonalMaster.fromPartial(object.zonalMaster)
      : undefined;
    message.regionalMaster = (object.regionalMaster !== undefined && object.regionalMaster !== null)
      ? RegionalMaster.fromPartial(object.regionalMaster)
      : undefined;
    message.locations = object.locations?.map((e) => Location.fromPartial(e)) || [];
    message.etcdClusterSize = object.etcdClusterSize ?? 0;
    message.version = object.version ?? "";
    message.endpoints = (object.endpoints !== undefined && object.endpoints !== null)
      ? MasterEndpoints.fromPartial(object.endpoints)
      : undefined;
    message.masterAuth = (object.masterAuth !== undefined && object.masterAuth !== null)
      ? MasterAuth.fromPartial(object.masterAuth)
      : undefined;
    message.versionInfo = (object.versionInfo !== undefined && object.versionInfo !== null)
      ? VersionInfo.fromPartial(object.versionInfo)
      : undefined;
    message.maintenancePolicy = (object.maintenancePolicy !== undefined && object.maintenancePolicy !== null)
      ? MasterMaintenancePolicy.fromPartial(object.maintenancePolicy)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.masterLogging = (object.masterLogging !== undefined && object.masterLogging !== null)
      ? MasterLogging.fromPartial(object.masterLogging)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Master.$type, Master);

function createBaseMasterAuth(): MasterAuth {
  return { $type: "yandex.cloud.k8s.v1.MasterAuth", clusterCaCertificate: "" };
}

export const MasterAuth = {
  $type: "yandex.cloud.k8s.v1.MasterAuth" as const,

  encode(message: MasterAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterCaCertificate !== "") {
      writer.uint32(10).string(message.clusterCaCertificate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterAuth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterCaCertificate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MasterAuth {
    return {
      $type: MasterAuth.$type,
      clusterCaCertificate: isSet(object.clusterCaCertificate) ? globalThis.String(object.clusterCaCertificate) : "",
    };
  },

  toJSON(message: MasterAuth): unknown {
    const obj: any = {};
    if (message.clusterCaCertificate !== "") {
      obj.clusterCaCertificate = message.clusterCaCertificate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterAuth>, I>>(base?: I): MasterAuth {
    return MasterAuth.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterAuth>, I>>(object: I): MasterAuth {
    const message = createBaseMasterAuth();
    message.clusterCaCertificate = object.clusterCaCertificate ?? "";
    return message;
  },
};

messageTypeRegistry.set(MasterAuth.$type, MasterAuth);

function createBaseZonalMaster(): ZonalMaster {
  return { $type: "yandex.cloud.k8s.v1.ZonalMaster", zoneId: "", internalV4Address: "", externalV4Address: "" };
}

export const ZonalMaster = {
  $type: "yandex.cloud.k8s.v1.ZonalMaster" as const,

  encode(message: ZonalMaster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.internalV4Address !== "") {
      writer.uint32(18).string(message.internalV4Address);
    }
    if (message.externalV4Address !== "") {
      writer.uint32(26).string(message.externalV4Address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZonalMaster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZonalMaster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.internalV4Address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalV4Address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZonalMaster {
    return {
      $type: ZonalMaster.$type,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      internalV4Address: isSet(object.internalV4Address) ? globalThis.String(object.internalV4Address) : "",
      externalV4Address: isSet(object.externalV4Address) ? globalThis.String(object.externalV4Address) : "",
    };
  },

  toJSON(message: ZonalMaster): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.internalV4Address !== "") {
      obj.internalV4Address = message.internalV4Address;
    }
    if (message.externalV4Address !== "") {
      obj.externalV4Address = message.externalV4Address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZonalMaster>, I>>(base?: I): ZonalMaster {
    return ZonalMaster.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZonalMaster>, I>>(object: I): ZonalMaster {
    const message = createBaseZonalMaster();
    message.zoneId = object.zoneId ?? "";
    message.internalV4Address = object.internalV4Address ?? "";
    message.externalV4Address = object.externalV4Address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ZonalMaster.$type, ZonalMaster);

function createBaseRegionalMaster(): RegionalMaster {
  return {
    $type: "yandex.cloud.k8s.v1.RegionalMaster",
    regionId: "",
    internalV4Address: "",
    externalV4Address: "",
    externalV6Address: "",
  };
}

export const RegionalMaster = {
  $type: "yandex.cloud.k8s.v1.RegionalMaster" as const,

  encode(message: RegionalMaster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    if (message.internalV4Address !== "") {
      writer.uint32(18).string(message.internalV4Address);
    }
    if (message.externalV4Address !== "") {
      writer.uint32(26).string(message.externalV4Address);
    }
    if (message.externalV6Address !== "") {
      writer.uint32(34).string(message.externalV6Address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegionalMaster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegionalMaster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.regionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.internalV4Address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalV4Address = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.externalV6Address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegionalMaster {
    return {
      $type: RegionalMaster.$type,
      regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
      internalV4Address: isSet(object.internalV4Address) ? globalThis.String(object.internalV4Address) : "",
      externalV4Address: isSet(object.externalV4Address) ? globalThis.String(object.externalV4Address) : "",
      externalV6Address: isSet(object.externalV6Address) ? globalThis.String(object.externalV6Address) : "",
    };
  },

  toJSON(message: RegionalMaster): unknown {
    const obj: any = {};
    if (message.regionId !== "") {
      obj.regionId = message.regionId;
    }
    if (message.internalV4Address !== "") {
      obj.internalV4Address = message.internalV4Address;
    }
    if (message.externalV4Address !== "") {
      obj.externalV4Address = message.externalV4Address;
    }
    if (message.externalV6Address !== "") {
      obj.externalV6Address = message.externalV6Address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegionalMaster>, I>>(base?: I): RegionalMaster {
    return RegionalMaster.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegionalMaster>, I>>(object: I): RegionalMaster {
    const message = createBaseRegionalMaster();
    message.regionId = object.regionId ?? "";
    message.internalV4Address = object.internalV4Address ?? "";
    message.externalV4Address = object.externalV4Address ?? "";
    message.externalV6Address = object.externalV6Address ?? "";
    return message;
  },
};

messageTypeRegistry.set(RegionalMaster.$type, RegionalMaster);

function createBaseLocation(): Location {
  return { $type: "yandex.cloud.k8s.v1.Location", zoneId: "", subnetId: "" };
}

export const Location = {
  $type: "yandex.cloud.k8s.v1.Location" as const,

  encode(message: Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Location {
    return {
      $type: Location.$type,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Location>, I>>(base?: I): Location {
    return Location.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Location>, I>>(object: I): Location {
    const message = createBaseLocation();
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Location.$type, Location);

function createBaseMasterEndpoints(): MasterEndpoints {
  return {
    $type: "yandex.cloud.k8s.v1.MasterEndpoints",
    internalV4Endpoint: "",
    externalV4Endpoint: "",
    externalV6Endpoint: "",
  };
}

export const MasterEndpoints = {
  $type: "yandex.cloud.k8s.v1.MasterEndpoints" as const,

  encode(message: MasterEndpoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.internalV4Endpoint !== "") {
      writer.uint32(10).string(message.internalV4Endpoint);
    }
    if (message.externalV4Endpoint !== "") {
      writer.uint32(18).string(message.externalV4Endpoint);
    }
    if (message.externalV6Endpoint !== "") {
      writer.uint32(26).string(message.externalV6Endpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterEndpoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterEndpoints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.internalV4Endpoint = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.externalV4Endpoint = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalV6Endpoint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MasterEndpoints {
    return {
      $type: MasterEndpoints.$type,
      internalV4Endpoint: isSet(object.internalV4Endpoint) ? globalThis.String(object.internalV4Endpoint) : "",
      externalV4Endpoint: isSet(object.externalV4Endpoint) ? globalThis.String(object.externalV4Endpoint) : "",
      externalV6Endpoint: isSet(object.externalV6Endpoint) ? globalThis.String(object.externalV6Endpoint) : "",
    };
  },

  toJSON(message: MasterEndpoints): unknown {
    const obj: any = {};
    if (message.internalV4Endpoint !== "") {
      obj.internalV4Endpoint = message.internalV4Endpoint;
    }
    if (message.externalV4Endpoint !== "") {
      obj.externalV4Endpoint = message.externalV4Endpoint;
    }
    if (message.externalV6Endpoint !== "") {
      obj.externalV6Endpoint = message.externalV6Endpoint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterEndpoints>, I>>(base?: I): MasterEndpoints {
    return MasterEndpoints.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterEndpoints>, I>>(object: I): MasterEndpoints {
    const message = createBaseMasterEndpoints();
    message.internalV4Endpoint = object.internalV4Endpoint ?? "";
    message.externalV4Endpoint = object.externalV4Endpoint ?? "";
    message.externalV6Endpoint = object.externalV6Endpoint ?? "";
    return message;
  },
};

messageTypeRegistry.set(MasterEndpoints.$type, MasterEndpoints);

function createBaseIPAllocationPolicy(): IPAllocationPolicy {
  return {
    $type: "yandex.cloud.k8s.v1.IPAllocationPolicy",
    clusterIpv4CidrBlock: "",
    nodeIpv4CidrMaskSize: 0,
    serviceIpv4CidrBlock: "",
    clusterIpv6CidrBlock: "",
    serviceIpv6CidrBlock: "",
  };
}

export const IPAllocationPolicy = {
  $type: "yandex.cloud.k8s.v1.IPAllocationPolicy" as const,

  encode(message: IPAllocationPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterIpv4CidrBlock !== "") {
      writer.uint32(10).string(message.clusterIpv4CidrBlock);
    }
    if (message.nodeIpv4CidrMaskSize !== 0) {
      writer.uint32(40).int64(message.nodeIpv4CidrMaskSize);
    }
    if (message.serviceIpv4CidrBlock !== "") {
      writer.uint32(18).string(message.serviceIpv4CidrBlock);
    }
    if (message.clusterIpv6CidrBlock !== "") {
      writer.uint32(50).string(message.clusterIpv6CidrBlock);
    }
    if (message.serviceIpv6CidrBlock !== "") {
      writer.uint32(58).string(message.serviceIpv6CidrBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IPAllocationPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIPAllocationPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterIpv4CidrBlock = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.nodeIpv4CidrMaskSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serviceIpv4CidrBlock = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.clusterIpv6CidrBlock = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.serviceIpv6CidrBlock = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IPAllocationPolicy {
    return {
      $type: IPAllocationPolicy.$type,
      clusterIpv4CidrBlock: isSet(object.clusterIpv4CidrBlock) ? globalThis.String(object.clusterIpv4CidrBlock) : "",
      nodeIpv4CidrMaskSize: isSet(object.nodeIpv4CidrMaskSize) ? globalThis.Number(object.nodeIpv4CidrMaskSize) : 0,
      serviceIpv4CidrBlock: isSet(object.serviceIpv4CidrBlock) ? globalThis.String(object.serviceIpv4CidrBlock) : "",
      clusterIpv6CidrBlock: isSet(object.clusterIpv6CidrBlock) ? globalThis.String(object.clusterIpv6CidrBlock) : "",
      serviceIpv6CidrBlock: isSet(object.serviceIpv6CidrBlock) ? globalThis.String(object.serviceIpv6CidrBlock) : "",
    };
  },

  toJSON(message: IPAllocationPolicy): unknown {
    const obj: any = {};
    if (message.clusterIpv4CidrBlock !== "") {
      obj.clusterIpv4CidrBlock = message.clusterIpv4CidrBlock;
    }
    if (message.nodeIpv4CidrMaskSize !== 0) {
      obj.nodeIpv4CidrMaskSize = Math.round(message.nodeIpv4CidrMaskSize);
    }
    if (message.serviceIpv4CidrBlock !== "") {
      obj.serviceIpv4CidrBlock = message.serviceIpv4CidrBlock;
    }
    if (message.clusterIpv6CidrBlock !== "") {
      obj.clusterIpv6CidrBlock = message.clusterIpv6CidrBlock;
    }
    if (message.serviceIpv6CidrBlock !== "") {
      obj.serviceIpv6CidrBlock = message.serviceIpv6CidrBlock;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IPAllocationPolicy>, I>>(base?: I): IPAllocationPolicy {
    return IPAllocationPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IPAllocationPolicy>, I>>(object: I): IPAllocationPolicy {
    const message = createBaseIPAllocationPolicy();
    message.clusterIpv4CidrBlock = object.clusterIpv4CidrBlock ?? "";
    message.nodeIpv4CidrMaskSize = object.nodeIpv4CidrMaskSize ?? 0;
    message.serviceIpv4CidrBlock = object.serviceIpv4CidrBlock ?? "";
    message.clusterIpv6CidrBlock = object.clusterIpv6CidrBlock ?? "";
    message.serviceIpv6CidrBlock = object.serviceIpv6CidrBlock ?? "";
    return message;
  },
};

messageTypeRegistry.set(IPAllocationPolicy.$type, IPAllocationPolicy);

function createBaseMasterMaintenancePolicy(): MasterMaintenancePolicy {
  return { $type: "yandex.cloud.k8s.v1.MasterMaintenancePolicy", autoUpgrade: false, maintenanceWindow: undefined };
}

export const MasterMaintenancePolicy = {
  $type: "yandex.cloud.k8s.v1.MasterMaintenancePolicy" as const,

  encode(message: MasterMaintenancePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.autoUpgrade === true) {
      writer.uint32(8).bool(message.autoUpgrade);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterMaintenancePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterMaintenancePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.autoUpgrade = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MasterMaintenancePolicy {
    return {
      $type: MasterMaintenancePolicy.$type,
      autoUpgrade: isSet(object.autoUpgrade) ? globalThis.Boolean(object.autoUpgrade) : false,
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
    };
  },

  toJSON(message: MasterMaintenancePolicy): unknown {
    const obj: any = {};
    if (message.autoUpgrade === true) {
      obj.autoUpgrade = message.autoUpgrade;
    }
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterMaintenancePolicy>, I>>(base?: I): MasterMaintenancePolicy {
    return MasterMaintenancePolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterMaintenancePolicy>, I>>(object: I): MasterMaintenancePolicy {
    const message = createBaseMasterMaintenancePolicy();
    message.autoUpgrade = object.autoUpgrade ?? false;
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MasterMaintenancePolicy.$type, MasterMaintenancePolicy);

function createBaseMasterLogging(): MasterLogging {
  return {
    $type: "yandex.cloud.k8s.v1.MasterLogging",
    enabled: false,
    logGroupId: undefined,
    folderId: undefined,
    auditEnabled: false,
    clusterAutoscalerEnabled: false,
    kubeApiserverEnabled: false,
    eventsEnabled: false,
  };
}

export const MasterLogging = {
  $type: "yandex.cloud.k8s.v1.MasterLogging" as const,

  encode(message: MasterLogging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.logGroupId !== undefined) {
      writer.uint32(18).string(message.logGroupId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(26).string(message.folderId);
    }
    if (message.auditEnabled === true) {
      writer.uint32(32).bool(message.auditEnabled);
    }
    if (message.clusterAutoscalerEnabled === true) {
      writer.uint32(40).bool(message.clusterAutoscalerEnabled);
    }
    if (message.kubeApiserverEnabled === true) {
      writer.uint32(48).bool(message.kubeApiserverEnabled);
    }
    if (message.eventsEnabled === true) {
      writer.uint32(56).bool(message.eventsEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterLogging {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterLogging();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.auditEnabled = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.clusterAutoscalerEnabled = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.kubeApiserverEnabled = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.eventsEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MasterLogging {
    return {
      $type: MasterLogging.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      auditEnabled: isSet(object.auditEnabled) ? globalThis.Boolean(object.auditEnabled) : false,
      clusterAutoscalerEnabled: isSet(object.clusterAutoscalerEnabled)
        ? globalThis.Boolean(object.clusterAutoscalerEnabled)
        : false,
      kubeApiserverEnabled: isSet(object.kubeApiserverEnabled)
        ? globalThis.Boolean(object.kubeApiserverEnabled)
        : false,
      eventsEnabled: isSet(object.eventsEnabled) ? globalThis.Boolean(object.eventsEnabled) : false,
    };
  },

  toJSON(message: MasterLogging): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.logGroupId !== undefined) {
      obj.logGroupId = message.logGroupId;
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.auditEnabled === true) {
      obj.auditEnabled = message.auditEnabled;
    }
    if (message.clusterAutoscalerEnabled === true) {
      obj.clusterAutoscalerEnabled = message.clusterAutoscalerEnabled;
    }
    if (message.kubeApiserverEnabled === true) {
      obj.kubeApiserverEnabled = message.kubeApiserverEnabled;
    }
    if (message.eventsEnabled === true) {
      obj.eventsEnabled = message.eventsEnabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterLogging>, I>>(base?: I): MasterLogging {
    return MasterLogging.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterLogging>, I>>(object: I): MasterLogging {
    const message = createBaseMasterLogging();
    message.enabled = object.enabled ?? false;
    message.logGroupId = object.logGroupId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    message.auditEnabled = object.auditEnabled ?? false;
    message.clusterAutoscalerEnabled = object.clusterAutoscalerEnabled ?? false;
    message.kubeApiserverEnabled = object.kubeApiserverEnabled ?? false;
    message.eventsEnabled = object.eventsEnabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(MasterLogging.$type, MasterLogging);

function createBaseNetworkPolicy(): NetworkPolicy {
  return { $type: "yandex.cloud.k8s.v1.NetworkPolicy", provider: 0 };
}

export const NetworkPolicy = {
  $type: "yandex.cloud.k8s.v1.NetworkPolicy" as const,

  encode(message: NetworkPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== 0) {
      writer.uint32(8).int32(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.provider = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkPolicy {
    return {
      $type: NetworkPolicy.$type,
      provider: isSet(object.provider) ? networkPolicy_ProviderFromJSON(object.provider) : 0,
    };
  },

  toJSON(message: NetworkPolicy): unknown {
    const obj: any = {};
    if (message.provider !== 0) {
      obj.provider = networkPolicy_ProviderToJSON(message.provider);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkPolicy>, I>>(base?: I): NetworkPolicy {
    return NetworkPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkPolicy>, I>>(object: I): NetworkPolicy {
    const message = createBaseNetworkPolicy();
    message.provider = object.provider ?? 0;
    return message;
  },
};

messageTypeRegistry.set(NetworkPolicy.$type, NetworkPolicy);

function createBaseKMSProvider(): KMSProvider {
  return { $type: "yandex.cloud.k8s.v1.KMSProvider", keyId: "" };
}

export const KMSProvider = {
  $type: "yandex.cloud.k8s.v1.KMSProvider" as const,

  encode(message: KMSProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KMSProvider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKMSProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KMSProvider {
    return { $type: KMSProvider.$type, keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "" };
  },

  toJSON(message: KMSProvider): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KMSProvider>, I>>(base?: I): KMSProvider {
    return KMSProvider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KMSProvider>, I>>(object: I): KMSProvider {
    const message = createBaseKMSProvider();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(KMSProvider.$type, KMSProvider);

function createBaseCilium(): Cilium {
  return { $type: "yandex.cloud.k8s.v1.Cilium", routingMode: 0 };
}

export const Cilium = {
  $type: "yandex.cloud.k8s.v1.Cilium" as const,

  encode(message: Cilium, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routingMode !== 0) {
      writer.uint32(8).int32(message.routingMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cilium {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCilium();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.routingMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Cilium {
    return {
      $type: Cilium.$type,
      routingMode: isSet(object.routingMode) ? cilium_RoutingModeFromJSON(object.routingMode) : 0,
    };
  },

  toJSON(message: Cilium): unknown {
    const obj: any = {};
    if (message.routingMode !== 0) {
      obj.routingMode = cilium_RoutingModeToJSON(message.routingMode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Cilium>, I>>(base?: I): Cilium {
    return Cilium.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Cilium>, I>>(object: I): Cilium {
    const message = createBaseCilium();
    message.routingMode = object.routingMode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Cilium.$type, Cilium);

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
  const seconds = Math.trunc(date.getTime() / 1_000);
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
