/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { ElasticsearchConfigSet7 } from "./config/elasticsearch";
import { MaintenanceOperation, MaintenanceWindow } from "./maintenance";

export const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";

/**
 * An Elasticsearch cluster resource.
 * For more information, see the [Concepts](/docs/managed-elasticsearch/concepts) section of the documentation.
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster";
  /**
   * ID of the Elasticsearch cluster.
   * This ID is assigned at creation time.
   */
  id: string;
  /** ID of the folder that the Elasticsearch cluster belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the Elasticsearch cluster.
   * The name must be unique within the folder. 1-63 characters long.
   */
  name: string;
  /** Description of the Elasticsearch cluster. 0-256 characters long. */
  description: string;
  /**
   * Custom labels for the Elasticsearch cluster as `key:value` pairs.
   * A maximum of 64 labels per resource is allowed.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the Elasticsearch cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the Elasticsearch cluster. */
  monitoring: Monitoring[];
  /** Configuration of the Elasticsearch cluster. */
  config?:
    | ClusterConfig
    | undefined;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** User security groups */
  securityGroupIds: string[];
  /** ID of the service account used for access to Object Storage. */
  serviceAccountId: string;
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Window of maintenance operations. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** Maintenance operation planned at nearest maintenance_window. */
  plannedOperation?: MaintenanceOperation | undefined;
}

export enum Cluster_Environment {
  ENVIRONMENT_UNSPECIFIED = 0,
  /** PRODUCTION - stable environment with a conservative update policy when only hotfixes are applied during regular maintenance. */
  PRODUCTION = 1,
  /** PRESTABLE - environment with a more aggressive update policy when new versions are rolled out irrespective of backward compatibility. */
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
  /** HEALTH_UNKNOWN - state of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - cluster is alive and well ([Host.health] of all hosts in the cluster is `ALIVE`). */
  ALIVE = 1,
  /** DEAD - cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
  DEAD = 2,
  /** DEGRADED - cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
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

export enum Cluster_Status {
  /** STATUS_UNKNOWN - cluster state is unknown. */
  STATUS_UNKNOWN = 0,
  /** CREATING - cluster is being created. */
  CREATING = 1,
  /** RUNNING - cluster is running normally. */
  RUNNING = 2,
  /** ERROR - cluster encountered a problem and cannot operate. */
  ERROR = 3,
  /** UPDATING - cluster is being updated. */
  UPDATING = 4,
  /** STOPPING - cluster is stopping. */
  STOPPING = 5,
  /** STOPPED - cluster stopped. */
  STOPPED = 6,
  /** STARTING - cluster is starting. */
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
  $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Metadata of monitoring system. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the Elasticsearch cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ClusterConfig";
  /** Elasticsearch version. */
  version: string;
  /** Configuration and resource allocation for Elasticsearch nodes. */
  elasticsearch?:
    | Elasticsearch
    | undefined;
  /** ElasticSearch edition. */
  edition: string;
}

export interface Elasticsearch {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch";
  /** Configuration and resource allocation for Elasticsearch data nodes. */
  dataNode?:
    | Elasticsearch_DataNode
    | undefined;
  /** Configuration and resource allocation for Elasticsearch master nodes. */
  masterNode?:
    | Elasticsearch_MasterNode
    | undefined;
  /** Cluster wide plugins */
  plugins: string[];
}

export interface Elasticsearch_DataNode {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.DataNode";
  /** Elasticsearch 7.x data node configuration. */
  elasticsearchConfigSet7?:
    | ElasticsearchConfigSet7
    | undefined;
  /** Resources allocated to Elasticsearch data nodes. */
  resources?: Resources | undefined;
}

export interface Elasticsearch_MasterNode {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.MasterNode";
  /** Resources allocated to Elasticsearch master nodes. */
  resources?: Resources | undefined;
}

/** Computational resources. */
export interface Resources {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/managed-elasticsearch/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage available to a host, in bytes. */
  diskSize: number;
  /**
   * Type of the storage environment for the host.
   * All available types are listed in the [documentation](/docs/managed-elasticsearch/concepts/storage).
   */
  diskTypeId: string;
}

/** Cluster host metadata. */
export interface Host {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Host";
  /** Name of the host. */
  name: string;
  /** ID of the Elasticsearch cluster. */
  clusterId: string;
  /** ID of the availability zone where the host resides. */
  zoneId: string;
  /** Host type. */
  type: Host_Type;
  resources?:
    | Resources
    | undefined;
  /** Aggregated host health data. */
  health: Host_Health;
  /** Services provided by the host. */
  services: Service[];
  /** ID of the subnet the host resides in. */
  subnetId: string;
  /**
   * The flag that defines whether a public IP address is assigned to the host.
   *
   * If the value is `true`, then this host is available on the Internet via it's public IP address.
   */
  assignPublicIp: boolean;
}

export enum Host_Type {
  TYPE_UNSPECIFIED = 0,
  /** DATA_NODE - the host is an Elasticsearch data node. */
  DATA_NODE = 1,
  /** MASTER_NODE - the host is an Elasticsearch master node. */
  MASTER_NODE = 2,
  UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Host_Type.TYPE_UNSPECIFIED;
    case 1:
    case "DATA_NODE":
      return Host_Type.DATA_NODE;
    case 2:
    case "MASTER_NODE":
      return Host_Type.MASTER_NODE;
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
    case Host_Type.DATA_NODE:
      return "DATA_NODE";
    case Host_Type.MASTER_NODE:
      return "MASTER_NODE";
    case Host_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Host_Health {
  /** UNKNOWN - health of the host is unknown. */
  UNKNOWN = 0,
  /** ALIVE - the host is performing all its functions normally. */
  ALIVE = 1,
  /** DEAD - the host is inoperable and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - the host is degraded and can perform only some of its essential functions. */
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

/** Cluster service metadata. */
export interface Service {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Service health data. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** ELASTICSEARCH - the Elasticsearch service. */
  ELASTICSEARCH = 1,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "ELASTICSEARCH":
      return Service_Type.ELASTICSEARCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Service_Type.UNRECOGNIZED;
  }
}

export function service_TypeToJSON(object: Service_Type): string {
  switch (object) {
    case Service_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Service_Type.ELASTICSEARCH:
      return "ELASTICSEARCH";
    case Service_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Service_Health {
  /** UNKNOWN - health of the service is unknown. */
  UNKNOWN = 0,
  /** ALIVE - the service is working normally. */
  ALIVE = 1,
  /** DEAD - the service is dead or unresponsive. */
  DEAD = 2,
  UNRECOGNIZED = -1,
}

export function service_HealthFromJSON(object: any): Service_Health {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Service_Health.UNKNOWN;
    case 1:
    case "ALIVE":
      return Service_Health.ALIVE;
    case 2:
    case "DEAD":
      return Service_Health.DEAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Service_Health.UNRECOGNIZED;
  }
}

export function service_HealthToJSON(object: Service_Health): string {
  switch (object) {
    case Service_Health.UNKNOWN:
      return "UNKNOWN";
    case Service_Health.ALIVE:
      return "ALIVE";
    case Service_Health.DEAD:
      return "DEAD";
    case Service_Health.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCluster(): Cluster {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster",
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
  $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster" as const,

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
        $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster.LabelsEntry",
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
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster.LabelsEntry", key: "", value: "" };
}

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.Monitoring", name: "", description: "", link: "" };
}

export const Monitoring = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Monitoring" as const,

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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ClusterConfig",
    version: "",
    elasticsearch: undefined,
    edition: "",
  };
}

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ClusterConfig" as const,

  encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.elasticsearch !== undefined) {
      Elasticsearch.encode(message.elasticsearch, writer.uint32(18).fork()).ldelim();
    }
    if (message.edition !== "") {
      writer.uint32(26).string(message.edition);
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

          message.elasticsearch = Elasticsearch.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.edition = reader.string();
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
      elasticsearch: isSet(object.elasticsearch) ? Elasticsearch.fromJSON(object.elasticsearch) : undefined,
      edition: isSet(object.edition) ? globalThis.String(object.edition) : "",
    };
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.elasticsearch !== undefined) {
      obj.elasticsearch = Elasticsearch.toJSON(message.elasticsearch);
    }
    if (message.edition !== "") {
      obj.edition = message.edition;
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConfig>): ClusterConfig {
    return ClusterConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig {
    const message = createBaseClusterConfig();
    message.version = object.version ?? "";
    message.elasticsearch = (object.elasticsearch !== undefined && object.elasticsearch !== null)
      ? Elasticsearch.fromPartial(object.elasticsearch)
      : undefined;
    message.edition = object.edition ?? "";
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

function createBaseElasticsearch(): Elasticsearch {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch",
    dataNode: undefined,
    masterNode: undefined,
    plugins: [],
  };
}

export const Elasticsearch = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch" as const,

  encode(message: Elasticsearch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataNode !== undefined) {
      Elasticsearch_DataNode.encode(message.dataNode, writer.uint32(10).fork()).ldelim();
    }
    if (message.masterNode !== undefined) {
      Elasticsearch_MasterNode.encode(message.masterNode, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.plugins) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Elasticsearch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseElasticsearch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataNode = Elasticsearch_DataNode.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.masterNode = Elasticsearch_MasterNode.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.plugins.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Elasticsearch {
    return {
      $type: Elasticsearch.$type,
      dataNode: isSet(object.dataNode) ? Elasticsearch_DataNode.fromJSON(object.dataNode) : undefined,
      masterNode: isSet(object.masterNode) ? Elasticsearch_MasterNode.fromJSON(object.masterNode) : undefined,
      plugins: globalThis.Array.isArray(object?.plugins) ? object.plugins.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Elasticsearch): unknown {
    const obj: any = {};
    if (message.dataNode !== undefined) {
      obj.dataNode = Elasticsearch_DataNode.toJSON(message.dataNode);
    }
    if (message.masterNode !== undefined) {
      obj.masterNode = Elasticsearch_MasterNode.toJSON(message.masterNode);
    }
    if (message.plugins?.length) {
      obj.plugins = message.plugins;
    }
    return obj;
  },

  create(base?: DeepPartial<Elasticsearch>): Elasticsearch {
    return Elasticsearch.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Elasticsearch>): Elasticsearch {
    const message = createBaseElasticsearch();
    message.dataNode = (object.dataNode !== undefined && object.dataNode !== null)
      ? Elasticsearch_DataNode.fromPartial(object.dataNode)
      : undefined;
    message.masterNode = (object.masterNode !== undefined && object.masterNode !== null)
      ? Elasticsearch_MasterNode.fromPartial(object.masterNode)
      : undefined;
    message.plugins = object.plugins?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Elasticsearch.$type, Elasticsearch);

function createBaseElasticsearch_DataNode(): Elasticsearch_DataNode {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.DataNode",
    elasticsearchConfigSet7: undefined,
    resources: undefined,
  };
}

export const Elasticsearch_DataNode = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.DataNode" as const,

  encode(message: Elasticsearch_DataNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elasticsearchConfigSet7 !== undefined) {
      ElasticsearchConfigSet7.encode(message.elasticsearchConfigSet7, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Elasticsearch_DataNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseElasticsearch_DataNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.elasticsearchConfigSet7 = ElasticsearchConfigSet7.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Elasticsearch_DataNode {
    return {
      $type: Elasticsearch_DataNode.$type,
      elasticsearchConfigSet7: isSet(object.elasticsearchConfigSet_7)
        ? ElasticsearchConfigSet7.fromJSON(object.elasticsearchConfigSet_7)
        : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Elasticsearch_DataNode): unknown {
    const obj: any = {};
    if (message.elasticsearchConfigSet7 !== undefined) {
      obj.elasticsearchConfigSet_7 = ElasticsearchConfigSet7.toJSON(message.elasticsearchConfigSet7);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Elasticsearch_DataNode>): Elasticsearch_DataNode {
    return Elasticsearch_DataNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Elasticsearch_DataNode>): Elasticsearch_DataNode {
    const message = createBaseElasticsearch_DataNode();
    message.elasticsearchConfigSet7 =
      (object.elasticsearchConfigSet7 !== undefined && object.elasticsearchConfigSet7 !== null)
        ? ElasticsearchConfigSet7.fromPartial(object.elasticsearchConfigSet7)
        : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Elasticsearch_DataNode.$type, Elasticsearch_DataNode);

function createBaseElasticsearch_MasterNode(): Elasticsearch_MasterNode {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.MasterNode", resources: undefined };
}

export const Elasticsearch_MasterNode = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.MasterNode" as const,

  encode(message: Elasticsearch_MasterNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Elasticsearch_MasterNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseElasticsearch_MasterNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Elasticsearch_MasterNode {
    return {
      $type: Elasticsearch_MasterNode.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Elasticsearch_MasterNode): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Elasticsearch_MasterNode>): Elasticsearch_MasterNode {
    return Elasticsearch_MasterNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Elasticsearch_MasterNode>): Elasticsearch_MasterNode {
    const message = createBaseElasticsearch_MasterNode();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Elasticsearch_MasterNode.$type, Elasticsearch_MasterNode);

function createBaseResources(): Resources {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.Resources", resourcePresetId: "", diskSize: 0, diskTypeId: "" };
}

export const Resources = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Resources" as const,

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
    $type: "yandex.cloud.mdb.elasticsearch.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    type: 0,
    resources: undefined,
    health: 0,
    services: [],
    subnetId: "",
    assignPublicIp: false,
  };
}

export const Host = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Host" as const,

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
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(66).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(72).bool(message.assignPublicIp);
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

          message.services.push(Service.decode(reader, reader.uint32()));
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
      services: globalThis.Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromJSON(e)) : [],
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
    if (message.services?.length) {
      obj.services = message.services.map((e) => Service.toJSON(e));
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
    message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

function createBaseService(): Service {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.Service", type: 0, health: 0 };
}

export const Service = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Service" as const,

  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.health !== 0) {
      writer.uint32(16).int32(message.health);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.health = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Service {
    return {
      $type: Service.$type,
      type: isSet(object.type) ? service_TypeFromJSON(object.type) : 0,
      health: isSet(object.health) ? service_HealthFromJSON(object.health) : 0,
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = service_TypeToJSON(message.type);
    }
    if (message.health !== 0) {
      obj.health = service_HealthToJSON(message.health);
    }
    return obj;
  },

  create(base?: DeepPartial<Service>): Service {
    return Service.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.type = object.type ?? 0;
    message.health = object.health ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Service.$type, Service);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
