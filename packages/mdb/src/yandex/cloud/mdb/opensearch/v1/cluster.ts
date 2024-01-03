/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { OpenSearchConfigSet2 } from "./config/opensearch";
import { MaintenanceOperation, MaintenanceWindow } from "./maintenance";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

/** An OpenSearch cluster resource. */
export interface Cluster {
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster";
  /**
   * ID of the OpenSearch cluster.
   * This ID is assigned by the platform at the moment of cluster creation.
   */
  id: string;
  /** ID of the folder that the OpenSearch cluster belongs to. */
  folderId: string;
  /** Time when the cluster was created. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the OpenSearch cluster.
   * The name is unique within the folder. 1-63 characters long.
   */
  name: string;
  /** Description of the OpenSearch cluster. 0-256 characters long. */
  description: string;
  /**
   * Custom labels for the OpenSearch cluster as `key:value` pairs.
   * Maximum 64 labels per resource.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the OpenSearch cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the OpenSearch cluster. */
  monitoring: Monitoring[];
  /** Configuration of the OpenSearch cluster. */
  config?:
    | ClusterConfig
    | undefined;
  /** ID of the cloud network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** User security groups. */
  securityGroupIds: string[];
  /** ID of the service account used to access Object Storage. */
  serviceAccountId: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** Maintenance operation planned at nearest [maintenance_window]. */
  plannedOperation?: MaintenanceOperation | undefined;
}

export enum Cluster_Environment {
  ENVIRONMENT_UNSPECIFIED = 0,
  /**
   * PRODUCTION - Stable environment with a conservative update policy:
   * only hotfixes are applied during regular maintenance.
   */
  PRODUCTION = 1,
  /**
   * PRESTABLE - Environment with more aggressive update policy: new versions
   * are rolled out irrespective of backward compatibility.
   */
  PRESTABLE = 2,
  UNRECOGNIZED = -1,
}

export function cluster_EnvironmentFromJSON(object: any): Cluster_Environment {
  switch (object) {
    case 0:
    case "ENVIRONMENT_UNSPECIFIED":
      return Cluster_Environment.ENVIRONMENT_UNSPECIFIED;
    case 1:
    case "PRODUCTION":
      return Cluster_Environment.PRODUCTION;
    case 2:
    case "PRESTABLE":
      return Cluster_Environment.PRESTABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cluster_Environment.UNRECOGNIZED;
  }
}

export function cluster_EnvironmentToJSON(object: Cluster_Environment): string {
  switch (object) {
    case Cluster_Environment.ENVIRONMENT_UNSPECIFIED:
      return "ENVIRONMENT_UNSPECIFIED";
    case Cluster_Environment.PRODUCTION:
      return "PRODUCTION";
    case Cluster_Environment.PRESTABLE:
      return "PRESTABLE";
    case Cluster_Environment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Cluster_Health {
  /** HEALTH_UNKNOWN - Health of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is working normally ([Host.health] for every host in the cluster is ALIVE). */
  ALIVE = 1,
  /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
  DEAD = 2,
  /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
  DEGRADED = 3,
  UNRECOGNIZED = -1,
}

export function cluster_HealthFromJSON(object: any): Cluster_Health {
  switch (object) {
    case 0:
    case "HEALTH_UNKNOWN":
      return Cluster_Health.HEALTH_UNKNOWN;
    case 1:
    case "ALIVE":
      return Cluster_Health.ALIVE;
    case 2:
    case "DEAD":
      return Cluster_Health.DEAD;
    case 3:
    case "DEGRADED":
      return Cluster_Health.DEGRADED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cluster_Health.UNRECOGNIZED;
  }
}

export function cluster_HealthToJSON(object: Cluster_Health): string {
  switch (object) {
    case Cluster_Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
    case Cluster_Health.ALIVE:
      return "ALIVE";
    case Cluster_Health.DEAD:
      return "DEAD";
    case Cluster_Health.DEGRADED:
      return "DEGRADED";
    case Cluster_Health.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Current state of the cluster. */
export enum Cluster_Status {
  /** STATUS_UNKNOWN - Cluster state is unknown. */
  STATUS_UNKNOWN = 0,
  /** CREATING - Cluster is being created. */
  CREATING = 1,
  /** RUNNING - Cluster is running normally. */
  RUNNING = 2,
  /** ERROR - Cluster has encountered a problem and cannot operate. */
  ERROR = 3,
  /** UPDATING - Cluster is being updated. */
  UPDATING = 4,
  /** STOPPING - Cluster is stopping. */
  STOPPING = 5,
  /** STOPPED - Cluster has stopped. */
  STOPPED = 6,
  /** STARTING - Cluster is starting. */
  STARTING = 7,
  UNRECOGNIZED = -1,
}

export function cluster_StatusFromJSON(object: any): Cluster_Status {
  switch (object) {
    case 0:
    case "STATUS_UNKNOWN":
      return Cluster_Status.STATUS_UNKNOWN;
    case 1:
    case "CREATING":
      return Cluster_Status.CREATING;
    case 2:
    case "RUNNING":
      return Cluster_Status.RUNNING;
    case 3:
    case "ERROR":
      return Cluster_Status.ERROR;
    case 4:
    case "UPDATING":
      return Cluster_Status.UPDATING;
    case 5:
    case "STOPPING":
      return Cluster_Status.STOPPING;
    case 6:
    case "STOPPED":
      return Cluster_Status.STOPPED;
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
    case Cluster_Status.STATUS_UNKNOWN:
      return "STATUS_UNKNOWN";
    case Cluster_Status.CREATING:
      return "CREATING";
    case Cluster_Status.RUNNING:
      return "RUNNING";
    case Cluster_Status.ERROR:
      return "ERROR";
    case Cluster_Status.UPDATING:
      return "UPDATING";
    case Cluster_Status.STOPPING:
      return "STOPPING";
    case Cluster_Status.STOPPED:
      return "STOPPED";
    case Cluster_Status.STARTING:
      return "STARTING";
    case Cluster_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Cluster_LabelsEntry {
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Monitoring system metadata. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.opensearch.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the OpenSearch cluster. */
  link: string;
}

/** The OpenSearch cluster configuration. */
export interface ClusterConfig {
  $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig";
  /** Version of the OpenSearch server software. */
  version: string;
  /** OpenSearch configuration. */
  opensearch?:
    | OpenSearch
    | undefined;
  /** Dashboards configuration. */
  dashboards?:
    | Dashboards
    | undefined;
  /** Access policy for external services. */
  access?: Access | undefined;
}

/** The OpenSearch host group type configuration. */
export interface OpenSearch {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch";
  /** Names of the cluster plugins. */
  plugins: string[];
  /** Host groups of the OpenSearch type. */
  nodeGroups: OpenSearch_NodeGroup[];
  opensearchConfigSet2?: OpenSearchConfigSet2 | undefined;
}

export enum OpenSearch_GroupRole {
  GROUP_ROLE_UNSPECIFIED = 0,
  DATA = 1,
  MANAGER = 2,
  UNRECOGNIZED = -1,
}

export function openSearch_GroupRoleFromJSON(object: any): OpenSearch_GroupRole {
  switch (object) {
    case 0:
    case "GROUP_ROLE_UNSPECIFIED":
      return OpenSearch_GroupRole.GROUP_ROLE_UNSPECIFIED;
    case 1:
    case "DATA":
      return OpenSearch_GroupRole.DATA;
    case 2:
    case "MANAGER":
      return OpenSearch_GroupRole.MANAGER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OpenSearch_GroupRole.UNRECOGNIZED;
  }
}

export function openSearch_GroupRoleToJSON(object: OpenSearch_GroupRole): string {
  switch (object) {
    case OpenSearch_GroupRole.GROUP_ROLE_UNSPECIFIED:
      return "GROUP_ROLE_UNSPECIFIED";
    case OpenSearch_GroupRole.DATA:
      return "DATA";
    case OpenSearch_GroupRole.MANAGER:
      return "MANAGER";
    case OpenSearch_GroupRole.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Configuration of the host group. */
export interface OpenSearch_NodeGroup {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup";
  /** Name of the group. Must be 1-63 characters long. */
  name: string;
  /** Resources allocated to the hosts. */
  resources?:
    | Resources
    | undefined;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** IDs of the availability zones the hosts belong to. */
  zoneIds: string[];
  /** IDs of the subnets that the hosts belong to. */
  subnetIds: string[];
  /** Determines whether a public IP is assigned to the hosts in the group. */
  assignPublicIp: boolean;
  /** Roles of the host group. */
  roles: OpenSearch_GroupRole[];
}

/** The Dashboards host group type configuration. */
export interface Dashboards {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards";
  /** Host groups of the Dashboards type. */
  nodeGroups: Dashboards_NodeGroup[];
}

export interface Dashboards_NodeGroup {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup";
  /** Name of the group. 1-63 characters long. */
  name: string;
  /** Resources allocated to the hosts. */
  resources?:
    | Resources
    | undefined;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** IDs of the availability zones the hosts belong to. */
  zoneIds: string[];
  /** IDs of the subnets that the hosts belong to. */
  subnetIds: string[];
  /** Determines whether a public IP is assigned to the hosts in the group. */
  assignPublicIp: boolean;
}

/** A list of computational resources allocated to a host. */
export interface Resources {
  $type: "yandex.cloud.mdb.opensearch.v1.Resources";
  /** ID of the preset for computational resources allocated to a host. */
  resourcePresetId: string;
  /** Volume of the storage used by the host, in bytes. */
  diskSize: number;
  /** Type of the storage used by the host: `network-hdd`, `network-ssd` or `local-ssd`. */
  diskTypeId: string;
}

/** An OpenSearch cluster host resource. */
export interface Host {
  $type: "yandex.cloud.mdb.opensearch.v1.Host";
  /**
   * Required. Name of the OpenSearch host.
   *
   * The host name is assigned by the platform at creation time and cannot be changed.
   *
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** Required. ID of the OpenSearch cluster. The ID is assigned by the platform at creation time. */
  clusterId: string;
  /** ID of the availability zone the OpenSearch host belongs to. */
  zoneId: string;
  /** Resources allocated to the OpenSearch host. */
  resources?:
    | Resources
    | undefined;
  /** Type of the host. */
  type: Host_Type;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Determines whether a public IP is assigned to the host. */
  assignPublicIp: boolean;
  /** Resources used by the host. */
  system?:
    | Host_SystemMetrics
    | undefined;
  /** Name of the host group that the host belongs to. */
  nodeGroup: string;
  /** Roles of the host. */
  roles: OpenSearch_GroupRole[];
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
    case Host_Health.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Host_Type {
  /** TYPE_UNSPECIFIED - The type is not specified. */
  TYPE_UNSPECIFIED = 0,
  /** OPENSEARCH - An OpenSearch type host. */
  OPENSEARCH = 1,
  /** DASHBOARDS - A Dashboards type host. */
  DASHBOARDS = 2,
  UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Host_Type.TYPE_UNSPECIFIED;
    case 1:
    case "OPENSEARCH":
      return Host_Type.OPENSEARCH;
    case 2:
    case "DASHBOARDS":
      return Host_Type.DASHBOARDS;
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
    case Host_Type.OPENSEARCH:
      return "OPENSEARCH";
    case Host_Type.DASHBOARDS:
      return "DASHBOARDS";
    case Host_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** CPU usage of the host. */
export interface Host_CPUMetric {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric";
  /** Time of the record. */
  timestamp: number;
  /** Percentage of the CPU used. */
  used: number;
}

/** RAM usage of the host. */
export interface Host_MemoryMetric {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric";
  /** Time of the record. */
  timestamp: number;
  /** The amount of RAM used, in bytes. */
  used: number;
  /** Total amount of RAM allocated to the host. */
  total: number;
}

/** Disk usage of the host. */
export interface Host_DiskMetric {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric";
  /** Time of the record. */
  timestamp: number;
  /** The amount of disk space used, in bytes. */
  used: number;
  /** Total amount of disk space allocated to the host. */
  total: number;
}

/** Resources used by the host. */
export interface Host_SystemMetrics {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics";
  /** CPU usage of the host. */
  cpu?:
    | Host_CPUMetric
    | undefined;
  /** RAM usage of the host. */
  memory?:
    | Host_MemoryMetric
    | undefined;
  /** Disk usage of the host. */
  disk?: Host_DiskMetric | undefined;
}

/** Access policy for external services. */
export interface Access {
  $type: "yandex.cloud.mdb.opensearch.v1.Access";
  /** Determines whether the access to Data Transfer is allowed. */
  dataTransfer: boolean;
  /** Determines whether the access to Serverless is allowed. */
  serverless: boolean;
}

function createBaseCluster(): Cluster {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.Cluster",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    environment: 0,
    monitoring: [],
    config: undefined,
    networkId: "",
    health: 0,
    status: 0,
    securityGroupIds: [],
    serviceAccountId: "",
    deletionProtection: false,
    maintenanceWindow: undefined,
    plannedOperation: undefined,
  };
}

export const Cluster = {
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster" as const,

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
      Cluster_LabelsEntry.encode({
        $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(56).int32(message.environment);
    }
    for (const v of message.monitoring) {
      Monitoring.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.config !== undefined) {
      ClusterConfig.encode(message.config, writer.uint32(74).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(82).string(message.networkId);
    }
    if (message.health !== 0) {
      writer.uint32(88).int32(message.health);
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(106).string(v!);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(114).string(message.serviceAccountId);
    }
    if (message.deletionProtection === true) {
      writer.uint32(120).bool(message.deletionProtection);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(130).fork()).ldelim();
    }
    if (message.plannedOperation !== undefined) {
      MaintenanceOperation.encode(message.plannedOperation, writer.uint32(138).fork()).ldelim();
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

          message.environment = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.monitoring.push(Monitoring.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.config = ClusterConfig.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.health = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.plannedOperation = MaintenanceOperation.decode(reader, reader.uint32());
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
      environment: isSet(object.environment) ? cluster_EnvironmentFromJSON(object.environment) : 0,
      monitoring: globalThis.Array.isArray(object?.monitoring)
        ? object.monitoring.map((e: any) => Monitoring.fromJSON(e))
        : [],
      config: isSet(object.config) ? ClusterConfig.fromJSON(object.config) : undefined,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      health: isSet(object.health) ? cluster_HealthFromJSON(object.health) : 0,
      status: isSet(object.status) ? cluster_StatusFromJSON(object.status) : 0,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
      plannedOperation: isSet(object.plannedOperation)
        ? MaintenanceOperation.fromJSON(object.plannedOperation)
        : undefined,
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
    if (message.environment !== 0) {
      obj.environment = cluster_EnvironmentToJSON(message.environment);
    }
    if (message.monitoring?.length) {
      obj.monitoring = message.monitoring.map((e) => Monitoring.toJSON(e));
    }
    if (message.config !== undefined) {
      obj.config = ClusterConfig.toJSON(message.config);
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.health !== 0) {
      obj.health = cluster_HealthToJSON(message.health);
    }
    if (message.status !== 0) {
      obj.status = cluster_StatusToJSON(message.status);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    if (message.plannedOperation !== undefined) {
      obj.plannedOperation = MaintenanceOperation.toJSON(message.plannedOperation);
    }
    return obj;
  },

  create(base?: DeepPartial<Cluster>): Cluster {
    return Cluster.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Cluster>): Cluster {
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
    message.environment = object.environment ?? 0;
    message.monitoring = object.monitoring?.map((e) => Monitoring.fromPartial(e)) || [];
    message.config = (object.config !== undefined && object.config !== null)
      ? ClusterConfig.fromPartial(object.config)
      : undefined;
    message.networkId = object.networkId ?? "";
    message.health = object.health ?? 0;
    message.status = object.status ?? 0;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    message.plannedOperation = (object.plannedOperation !== undefined && object.plannedOperation !== null)
      ? MaintenanceOperation.fromPartial(object.plannedOperation)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

function createBaseCluster_LabelsEntry(): Cluster_LabelsEntry {
  return { $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry", key: "", value: "" };
}

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry" as const,

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

  create(base?: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry {
    return Cluster_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry {
    const message = createBaseCluster_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Cluster_LabelsEntry.$type, Cluster_LabelsEntry);

function createBaseMonitoring(): Monitoring {
  return { $type: "yandex.cloud.mdb.opensearch.v1.Monitoring", name: "", description: "", link: "" };
}

export const Monitoring = {
  $type: "yandex.cloud.mdb.opensearch.v1.Monitoring" as const,

  encode(message: Monitoring, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.link !== "") {
      writer.uint32(26).string(message.link);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoring();
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

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.link = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Monitoring {
    return {
      $type: Monitoring.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      link: isSet(object.link) ? globalThis.String(object.link) : "",
    };
  },

  toJSON(message: Monitoring): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.link !== "") {
      obj.link = message.link;
    }
    return obj;
  },

  create(base?: DeepPartial<Monitoring>): Monitoring {
    return Monitoring.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Monitoring>): Monitoring {
    const message = createBaseMonitoring();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.link = object.link ?? "";
    return message;
  },
};

messageTypeRegistry.set(Monitoring.$type, Monitoring);

function createBaseClusterConfig(): ClusterConfig {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig",
    version: "",
    opensearch: undefined,
    dashboards: undefined,
    access: undefined,
  };
}

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig" as const,

  encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.opensearch !== undefined) {
      OpenSearch.encode(message.opensearch, writer.uint32(18).fork()).ldelim();
    }
    if (message.dashboards !== undefined) {
      Dashboards.encode(message.dashboards, writer.uint32(26).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClusterConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opensearch = OpenSearch.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dashboards = Dashboards.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClusterConfig {
    return {
      $type: ClusterConfig.$type,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      opensearch: isSet(object.opensearch) ? OpenSearch.fromJSON(object.opensearch) : undefined,
      dashboards: isSet(object.dashboards) ? Dashboards.fromJSON(object.dashboards) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
    };
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.opensearch !== undefined) {
      obj.opensearch = OpenSearch.toJSON(message.opensearch);
    }
    if (message.dashboards !== undefined) {
      obj.dashboards = Dashboards.toJSON(message.dashboards);
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConfig>): ClusterConfig {
    return ClusterConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig {
    const message = createBaseClusterConfig();
    message.version = object.version ?? "";
    message.opensearch = (object.opensearch !== undefined && object.opensearch !== null)
      ? OpenSearch.fromPartial(object.opensearch)
      : undefined;
    message.dashboards = (object.dashboards !== undefined && object.dashboards !== null)
      ? Dashboards.fromPartial(object.dashboards)
      : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

function createBaseOpenSearch(): OpenSearch {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch",
    plugins: [],
    nodeGroups: [],
    opensearchConfigSet2: undefined,
  };
}

export const OpenSearch = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch" as const,

  encode(message: OpenSearch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.plugins) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.nodeGroups) {
      OpenSearch_NodeGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.opensearchConfigSet2 !== undefined) {
      OpenSearchConfigSet2.encode(message.opensearchConfigSet2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSearch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plugins.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeGroups.push(OpenSearch_NodeGroup.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.opensearchConfigSet2 = OpenSearchConfigSet2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenSearch {
    return {
      $type: OpenSearch.$type,
      plugins: globalThis.Array.isArray(object?.plugins) ? object.plugins.map((e: any) => globalThis.String(e)) : [],
      nodeGroups: globalThis.Array.isArray(object?.nodeGroups)
        ? object.nodeGroups.map((e: any) => OpenSearch_NodeGroup.fromJSON(e))
        : [],
      opensearchConfigSet2: isSet(object.opensearchConfigSet_2)
        ? OpenSearchConfigSet2.fromJSON(object.opensearchConfigSet_2)
        : undefined,
    };
  },

  toJSON(message: OpenSearch): unknown {
    const obj: any = {};
    if (message.plugins?.length) {
      obj.plugins = message.plugins;
    }
    if (message.nodeGroups?.length) {
      obj.nodeGroups = message.nodeGroups.map((e) => OpenSearch_NodeGroup.toJSON(e));
    }
    if (message.opensearchConfigSet2 !== undefined) {
      obj.opensearchConfigSet_2 = OpenSearchConfigSet2.toJSON(message.opensearchConfigSet2);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenSearch>): OpenSearch {
    return OpenSearch.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSearch>): OpenSearch {
    const message = createBaseOpenSearch();
    message.plugins = object.plugins?.map((e) => e) || [];
    message.nodeGroups = object.nodeGroups?.map((e) => OpenSearch_NodeGroup.fromPartial(e)) || [];
    message.opensearchConfigSet2 = (object.opensearchConfigSet2 !== undefined && object.opensearchConfigSet2 !== null)
      ? OpenSearchConfigSet2.fromPartial(object.opensearchConfigSet2)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(OpenSearch.$type, OpenSearch);

function createBaseOpenSearch_NodeGroup(): OpenSearch_NodeGroup {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup",
    name: "",
    resources: undefined,
    hostsCount: 0,
    zoneIds: [],
    subnetIds: [],
    assignPublicIp: false,
    roles: [],
  };
}

export const OpenSearch_NodeGroup = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup" as const,

  encode(message: OpenSearch_NodeGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(24).int64(message.hostsCount);
    }
    for (const v of message.zoneIds) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    writer.uint32(58).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearch_NodeGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSearch_NodeGroup();
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

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zoneIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
        case 7:
          if (tag === 56) {
            message.roles.push(reader.int32() as any);

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenSearch_NodeGroup {
    return {
      $type: OpenSearch_NodeGroup.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      hostsCount: isSet(object.hostsCount) ? globalThis.Number(object.hostsCount) : 0,
      zoneIds: globalThis.Array.isArray(object?.zoneIds) ? object.zoneIds.map((e: any) => globalThis.String(e)) : [],
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      roles: globalThis.Array.isArray(object?.roles)
        ? object.roles.map((e: any) => openSearch_GroupRoleFromJSON(e))
        : [],
    };
  },

  toJSON(message: OpenSearch_NodeGroup): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.hostsCount !== 0) {
      obj.hostsCount = Math.round(message.hostsCount);
    }
    if (message.zoneIds?.length) {
      obj.zoneIds = message.zoneIds;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<OpenSearch_NodeGroup>): OpenSearch_NodeGroup {
    return OpenSearch_NodeGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSearch_NodeGroup>): OpenSearch_NodeGroup {
    const message = createBaseOpenSearch_NodeGroup();
    message.name = object.name ?? "";
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(OpenSearch_NodeGroup.$type, OpenSearch_NodeGroup);

function createBaseDashboards(): Dashboards {
  return { $type: "yandex.cloud.mdb.opensearch.v1.Dashboards", nodeGroups: [] };
}

export const Dashboards = {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards" as const,

  encode(message: Dashboards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodeGroups) {
      Dashboards_NodeGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dashboards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDashboards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeGroups.push(Dashboards_NodeGroup.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dashboards {
    return {
      $type: Dashboards.$type,
      nodeGroups: globalThis.Array.isArray(object?.nodeGroups)
        ? object.nodeGroups.map((e: any) => Dashboards_NodeGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Dashboards): unknown {
    const obj: any = {};
    if (message.nodeGroups?.length) {
      obj.nodeGroups = message.nodeGroups.map((e) => Dashboards_NodeGroup.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Dashboards>): Dashboards {
    return Dashboards.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Dashboards>): Dashboards {
    const message = createBaseDashboards();
    message.nodeGroups = object.nodeGroups?.map((e) => Dashboards_NodeGroup.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Dashboards.$type, Dashboards);

function createBaseDashboards_NodeGroup(): Dashboards_NodeGroup {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup",
    name: "",
    resources: undefined,
    hostsCount: 0,
    zoneIds: [],
    subnetIds: [],
    assignPublicIp: false,
  };
}

export const Dashboards_NodeGroup = {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup" as const,

  encode(message: Dashboards_NodeGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(24).int64(message.hostsCount);
    }
    for (const v of message.zoneIds) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dashboards_NodeGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDashboards_NodeGroup();
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

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zoneIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
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

  fromJSON(object: any): Dashboards_NodeGroup {
    return {
      $type: Dashboards_NodeGroup.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      hostsCount: isSet(object.hostsCount) ? globalThis.Number(object.hostsCount) : 0,
      zoneIds: globalThis.Array.isArray(object?.zoneIds) ? object.zoneIds.map((e: any) => globalThis.String(e)) : [],
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
    };
  },

  toJSON(message: Dashboards_NodeGroup): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.hostsCount !== 0) {
      obj.hostsCount = Math.round(message.hostsCount);
    }
    if (message.zoneIds?.length) {
      obj.zoneIds = message.zoneIds;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    return obj;
  },

  create(base?: DeepPartial<Dashboards_NodeGroup>): Dashboards_NodeGroup {
    return Dashboards_NodeGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Dashboards_NodeGroup>): Dashboards_NodeGroup {
    const message = createBaseDashboards_NodeGroup();
    message.name = object.name ?? "";
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(Dashboards_NodeGroup.$type, Dashboards_NodeGroup);

function createBaseResources(): Resources {
  return { $type: "yandex.cloud.mdb.opensearch.v1.Resources", resourcePresetId: "", diskSize: 0, diskTypeId: "" };
}

export const Resources = {
  $type: "yandex.cloud.mdb.opensearch.v1.Resources" as const,

  encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    if (message.diskSize !== 0) {
      writer.uint32(16).int64(message.diskSize);
    }
    if (message.diskTypeId !== "") {
      writer.uint32(26).string(message.diskTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourcePresetId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.diskSize = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.diskTypeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resources {
    return {
      $type: Resources.$type,
      resourcePresetId: isSet(object.resourcePresetId) ? globalThis.String(object.resourcePresetId) : "",
      diskSize: isSet(object.diskSize) ? globalThis.Number(object.diskSize) : 0,
      diskTypeId: isSet(object.diskTypeId) ? globalThis.String(object.diskTypeId) : "",
    };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.resourcePresetId !== "") {
      obj.resourcePresetId = message.resourcePresetId;
    }
    if (message.diskSize !== 0) {
      obj.diskSize = Math.round(message.diskSize);
    }
    if (message.diskTypeId !== "") {
      obj.diskTypeId = message.diskTypeId;
    }
    return obj;
  },

  create(base?: DeepPartial<Resources>): Resources {
    return Resources.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Resources>): Resources {
    const message = createBaseResources();
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.diskSize = object.diskSize ?? 0;
    message.diskTypeId = object.diskTypeId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

function createBaseHost(): Host {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    resources: undefined,
    type: 0,
    health: 0,
    subnetId: "",
    assignPublicIp: false,
    system: undefined,
    nodeGroup: "",
    roles: [],
  };
}

export const Host = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host" as const,

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
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.health !== 0) {
      writer.uint32(48).int32(message.health);
    }
    if (message.subnetId !== "") {
      writer.uint32(66).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(72).bool(message.assignPublicIp);
    }
    if (message.system !== undefined) {
      Host_SystemMetrics.encode(message.system, writer.uint32(82).fork()).ldelim();
    }
    if (message.nodeGroup !== "") {
      writer.uint32(90).string(message.nodeGroup);
    }
    writer.uint32(98).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
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
          if (tag !== 34) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.health = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.subnetId = reader.string();
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

          message.system = Host_SystemMetrics.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.nodeGroup = reader.string();
          continue;
        case 12:
          if (tag === 96) {
            message.roles.push(reader.int32() as any);

            continue;
          }

          if (tag === 98) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }

            continue;
          }

          break;
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
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      type: isSet(object.type) ? host_TypeFromJSON(object.type) : 0,
      health: isSet(object.health) ? host_HealthFromJSON(object.health) : 0,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      system: isSet(object.system) ? Host_SystemMetrics.fromJSON(object.system) : undefined,
      nodeGroup: isSet(object.nodeGroup) ? globalThis.String(object.nodeGroup) : "",
      roles: globalThis.Array.isArray(object?.roles)
        ? object.roles.map((e: any) => openSearch_GroupRoleFromJSON(e))
        : [],
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
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.type !== 0) {
      obj.type = host_TypeToJSON(message.type);
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
    if (message.system !== undefined) {
      obj.system = Host_SystemMetrics.toJSON(message.system);
    }
    if (message.nodeGroup !== "") {
      obj.nodeGroup = message.nodeGroup;
    }
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
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
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.type = object.type ?? 0;
    message.health = object.health ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.system = (object.system !== undefined && object.system !== null)
      ? Host_SystemMetrics.fromPartial(object.system)
      : undefined;
    message.nodeGroup = object.nodeGroup ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

function createBaseHost_CPUMetric(): Host_CPUMetric {
  return { $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric", timestamp: 0, used: 0 };
}

export const Host_CPUMetric = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric" as const,

  encode(message: Host_CPUMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.used !== 0) {
      writer.uint32(17).double(message.used);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host_CPUMetric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHost_CPUMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.used = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Host_CPUMetric {
    return {
      $type: Host_CPUMetric.$type,
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      used: isSet(object.used) ? globalThis.Number(object.used) : 0,
    };
  },

  toJSON(message: Host_CPUMetric): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.used !== 0) {
      obj.used = message.used;
    }
    return obj;
  },

  create(base?: DeepPartial<Host_CPUMetric>): Host_CPUMetric {
    return Host_CPUMetric.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Host_CPUMetric>): Host_CPUMetric {
    const message = createBaseHost_CPUMetric();
    message.timestamp = object.timestamp ?? 0;
    message.used = object.used ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host_CPUMetric.$type, Host_CPUMetric);

function createBaseHost_MemoryMetric(): Host_MemoryMetric {
  return { $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric", timestamp: 0, used: 0, total: 0 };
}

export const Host_MemoryMetric = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric" as const,

  encode(message: Host_MemoryMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.used !== 0) {
      writer.uint32(16).int64(message.used);
    }
    if (message.total !== 0) {
      writer.uint32(24).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host_MemoryMetric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHost_MemoryMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.used = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Host_MemoryMetric {
    return {
      $type: Host_MemoryMetric.$type,
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      used: isSet(object.used) ? globalThis.Number(object.used) : 0,
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: Host_MemoryMetric): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.used !== 0) {
      obj.used = Math.round(message.used);
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create(base?: DeepPartial<Host_MemoryMetric>): Host_MemoryMetric {
    return Host_MemoryMetric.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Host_MemoryMetric>): Host_MemoryMetric {
    const message = createBaseHost_MemoryMetric();
    message.timestamp = object.timestamp ?? 0;
    message.used = object.used ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host_MemoryMetric.$type, Host_MemoryMetric);

function createBaseHost_DiskMetric(): Host_DiskMetric {
  return { $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric", timestamp: 0, used: 0, total: 0 };
}

export const Host_DiskMetric = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric" as const,

  encode(message: Host_DiskMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.used !== 0) {
      writer.uint32(16).int64(message.used);
    }
    if (message.total !== 0) {
      writer.uint32(24).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host_DiskMetric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHost_DiskMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.used = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Host_DiskMetric {
    return {
      $type: Host_DiskMetric.$type,
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      used: isSet(object.used) ? globalThis.Number(object.used) : 0,
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: Host_DiskMetric): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.used !== 0) {
      obj.used = Math.round(message.used);
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create(base?: DeepPartial<Host_DiskMetric>): Host_DiskMetric {
    return Host_DiskMetric.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Host_DiskMetric>): Host_DiskMetric {
    const message = createBaseHost_DiskMetric();
    message.timestamp = object.timestamp ?? 0;
    message.used = object.used ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host_DiskMetric.$type, Host_DiskMetric);

function createBaseHost_SystemMetrics(): Host_SystemMetrics {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics",
    cpu: undefined,
    memory: undefined,
    disk: undefined,
  };
}

export const Host_SystemMetrics = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics" as const,

  encode(message: Host_SystemMetrics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cpu !== undefined) {
      Host_CPUMetric.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Host_MemoryMetric.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    if (message.disk !== undefined) {
      Host_DiskMetric.encode(message.disk, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host_SystemMetrics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHost_SystemMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cpu = Host_CPUMetric.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.memory = Host_MemoryMetric.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.disk = Host_DiskMetric.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Host_SystemMetrics {
    return {
      $type: Host_SystemMetrics.$type,
      cpu: isSet(object.cpu) ? Host_CPUMetric.fromJSON(object.cpu) : undefined,
      memory: isSet(object.memory) ? Host_MemoryMetric.fromJSON(object.memory) : undefined,
      disk: isSet(object.disk) ? Host_DiskMetric.fromJSON(object.disk) : undefined,
    };
  },

  toJSON(message: Host_SystemMetrics): unknown {
    const obj: any = {};
    if (message.cpu !== undefined) {
      obj.cpu = Host_CPUMetric.toJSON(message.cpu);
    }
    if (message.memory !== undefined) {
      obj.memory = Host_MemoryMetric.toJSON(message.memory);
    }
    if (message.disk !== undefined) {
      obj.disk = Host_DiskMetric.toJSON(message.disk);
    }
    return obj;
  },

  create(base?: DeepPartial<Host_SystemMetrics>): Host_SystemMetrics {
    return Host_SystemMetrics.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Host_SystemMetrics>): Host_SystemMetrics {
    const message = createBaseHost_SystemMetrics();
    message.cpu = (object.cpu !== undefined && object.cpu !== null)
      ? Host_CPUMetric.fromPartial(object.cpu)
      : undefined;
    message.memory = (object.memory !== undefined && object.memory !== null)
      ? Host_MemoryMetric.fromPartial(object.memory)
      : undefined;
    message.disk = (object.disk !== undefined && object.disk !== null)
      ? Host_DiskMetric.fromPartial(object.disk)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Host_SystemMetrics.$type, Host_SystemMetrics);

function createBaseAccess(): Access {
  return { $type: "yandex.cloud.mdb.opensearch.v1.Access", dataTransfer: false, serverless: false };
}

export const Access = {
  $type: "yandex.cloud.mdb.opensearch.v1.Access" as const,

  encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataTransfer === true) {
      writer.uint32(8).bool(message.dataTransfer);
    }
    if (message.serverless === true) {
      writer.uint32(16).bool(message.serverless);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Access {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.dataTransfer = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.serverless = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Access {
    return {
      $type: Access.$type,
      dataTransfer: isSet(object.dataTransfer) ? globalThis.Boolean(object.dataTransfer) : false,
      serverless: isSet(object.serverless) ? globalThis.Boolean(object.serverless) : false,
    };
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
    if (message.dataTransfer === true) {
      obj.dataTransfer = message.dataTransfer;
    }
    if (message.serverless === true) {
      obj.serverless = message.serverless;
    }
    return obj;
  },

  create(base?: DeepPartial<Access>): Access {
    return Access.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Access>): Access {
    const message = createBaseAccess();
    message.dataTransfer = object.dataTransfer ?? false;
    message.serverless = object.serverless ?? false;
    return message;
  },
};

messageTypeRegistry.set(Access.$type, Access);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
