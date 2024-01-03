/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import { TimeOfDay } from "@yandex-cloud/core/dist/generated/google/type/timeofday";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { ClickhouseConfigSet } from "./config/clickhouse";
import { MaintenanceOperation, MaintenanceWindow } from "./maintenance";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

/**
 * A ClickHouse Cluster resource. For more information, see the
 * [Cluster](/docs/managed-clickhouse/concepts) section in the Developer's Guide.
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster";
  /**
   * ID of the ClickHouse cluster.
   * This ID is assigned by MDB at creation time.
   */
  id: string;
  /** ID of the folder that the ClickHouse cluster belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the ClickHouse cluster.
   * The name is unique within the folder. 1-63 characters long.
   */
  name: string;
  /** Description of the ClickHouse cluster. 0-256 characters long. */
  description: string;
  /** Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource. */
  labels: { [key: string]: string };
  /** Deployment environment of the ClickHouse cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the ClickHouse cluster. */
  monitoring: Monitoring[];
  /** Configuration of the ClickHouse cluster. */
  config?:
    | ClusterConfig
    | undefined;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** ID of the service account used for access to Object Storage. */
  serviceAccountId: string;
  /** Maintenance window for the cluster. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** Planned maintenance operation to be started for the cluster within the nearest [maintenance_window]. */
  plannedOperation?:
    | MaintenanceOperation
    | undefined;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
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
  /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is alive and well ([Host.health] for every host in the cluster is ALIVE). */
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

export enum Cluster_Status {
  /** STATUS_UNKNOWN - Cluster state is unknown. */
  STATUS_UNKNOWN = 0,
  /** CREATING - Cluster is being created. */
  CREATING = 1,
  /** RUNNING - Cluster is running normally. */
  RUNNING = 2,
  /** ERROR - Cluster encountered a problem and cannot operate. */
  ERROR = 3,
  /** UPDATING - Cluster is being updated. */
  UPDATING = 4,
  /** STOPPING - Cluster is stopping. */
  STOPPING = 5,
  /** STOPPED - Cluster stopped. */
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
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Monitoring system metadata. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.clickhouse.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the ClickHouse cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig";
  /** Version of the ClickHouse server software. */
  version: string;
  /** Configuration and resource allocation for ClickHouse hosts. */
  clickhouse?:
    | ClusterConfig_Clickhouse
    | undefined;
  /** Configuration and resource allocation for ZooKeeper hosts. */
  zookeeper?:
    | ClusterConfig_Zookeeper
    | undefined;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /** Access policy for external services. */
  access?: Access | undefined;
  cloudStorage?:
    | CloudStorage
    | undefined;
  /** Whether database management through SQL commands is enabled. */
  sqlDatabaseManagement?:
    | boolean
    | undefined;
  /** Whether user management through SQL commands is enabled. */
  sqlUserManagement?:
    | boolean
    | undefined;
  /** Whether cluster should use embedded Keeper instead of Zookeeper. */
  embeddedKeeper?: boolean | undefined;
}

export interface ClusterConfig_Clickhouse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse";
  /** Configuration settings of a ClickHouse server. */
  config?:
    | ClickhouseConfigSet
    | undefined;
  /** Resources allocated to ClickHouse hosts. */
  resources?: Resources | undefined;
}

export interface ClusterConfig_Zookeeper {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper";
  /** Resources allocated to ZooKeeper hosts. */
  resources?: Resources | undefined;
}

export interface Shard {
  $type: "yandex.cloud.mdb.clickhouse.v1.Shard";
  /** Name of the shard. */
  name: string;
  /** ID of the cluster that the shard belongs to. */
  clusterId: string;
  /** Configuration of the shard. */
  config?: ShardConfig | undefined;
}

export interface ShardGroup {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardGroup";
  /** Name of the shard group. */
  name: string;
  /** ID of the ClickHouse cluster that the shard group belongs to. */
  clusterId: string;
  /** Description of the shard group. 0-256 characters long. */
  description: string;
  /** List of shard names contained in the shard group. */
  shardNames: string[];
}

export interface ShardConfig {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig";
  /** ClickHouse configuration for a shard. */
  clickhouse?: ShardConfig_Clickhouse | undefined;
}

export interface ShardConfig_Clickhouse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse";
  /** ClickHouse settings for a shard. */
  config?:
    | ClickhouseConfigSet
    | undefined;
  /** Computational resources for a shard. */
  resources?:
    | Resources
    | undefined;
  /**
   * Relative weight of a shard considered when writing data to the cluster.
   * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/operations/table_engines/distributed/).
   */
  weight?: number | undefined;
}

export interface Host {
  $type: "yandex.cloud.mdb.clickhouse.v1.Host";
  /**
   * Name of the ClickHouse host. The host name is assigned by MDB at creation time, and cannot be changed.
   * 1-63 characters long.
   *
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the ClickHouse host. The ID is assigned by MDB at creation time. */
  clusterId: string;
  /** ID of the availability zone where the ClickHouse host resides. */
  zoneId: string;
  /** Type of the host. */
  type: Host_Type;
  /** Resources allocated to the ClickHouse host. */
  resources?:
    | Resources
    | undefined;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** Services provided by the host. */
  services: Service[];
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Flag showing public IP assignment status to this host. */
  assignPublicIp: boolean;
  shardName: string;
}

export enum Host_Type {
  TYPE_UNSPECIFIED = 0,
  /** CLICKHOUSE - ClickHouse host. */
  CLICKHOUSE = 1,
  /** ZOOKEEPER - ZooKeeper host. */
  ZOOKEEPER = 2,
  UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Host_Type.TYPE_UNSPECIFIED;
    case 1:
    case "CLICKHOUSE":
      return Host_Type.CLICKHOUSE;
    case 2:
    case "ZOOKEEPER":
      return Host_Type.ZOOKEEPER;
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
    case Host_Type.CLICKHOUSE:
      return "CLICKHOUSE";
    case Host_Type.ZOOKEEPER:
      return "ZOOKEEPER";
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
  /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
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

export interface Service {
  $type: "yandex.cloud.mdb.clickhouse.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Status code of server availability. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** CLICKHOUSE - The host is a ClickHouse server. */
  CLICKHOUSE = 1,
  /** ZOOKEEPER - The host is a ZooKeeper server. */
  ZOOKEEPER = 2,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "CLICKHOUSE":
      return Service_Type.CLICKHOUSE;
    case 2:
    case "ZOOKEEPER":
      return Service_Type.ZOOKEEPER;
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
    case Service_Type.CLICKHOUSE:
      return "CLICKHOUSE";
    case Service_Type.ZOOKEEPER:
      return "ZOOKEEPER";
    case Service_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Service_Health {
  /** UNKNOWN - Health of the server is unknown. */
  UNKNOWN = 0,
  /** ALIVE - The server is working normally. */
  ALIVE = 1,
  /** DEAD - The server is dead or unresponsive. */
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

export interface Resources {
  $type: "yandex.cloud.mdb.clickhouse.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/managed-clickhouse/concepts/instance-types)
   */
  resourcePresetId: string;
  /** Volume of the storage available to a host, in bytes. */
  diskSize: number;
  /**
   * Type of the storage environment for the host.
   * Possible values:
   * * network-hdd - network HDD drive,
   * * network-ssd - network SSD drive,
   * * local-ssd - local SSD storage.
   */
  diskTypeId: string;
}

export interface Access {
  $type: "yandex.cloud.mdb.clickhouse.v1.Access";
  /** Allow to export data from the cluster to DataLens. */
  dataLens: boolean;
  /**
   * Allow SQL queries to the cluster databases from the management console.
   *
   * See [SQL queries in the management console](/docs/managed-clickhouse/operations/web-sql-query) for more details.
   */
  webSql: boolean;
  /**
   * Allow to import data from Yandex Metrica and AppMetrica to the cluster.
   *
   * See [AppMetrica documentation](https://appmetrica.yandex.com/docs/cloud/index.html) for more details.
   */
  metrika: boolean;
  /** Allow access to cluster for Serverless. */
  serverless: boolean;
  /** Allow access for DataTransfer */
  dataTransfer: boolean;
  /** Allow access for Query */
  yandexQuery: boolean;
}

export interface CloudStorage {
  $type: "yandex.cloud.mdb.clickhouse.v1.CloudStorage";
  /** Whether to use Object Storage for storing ClickHouse data. */
  enabled: boolean;
  moveFactor?: number | undefined;
  dataCacheEnabled?: boolean | undefined;
  dataCacheMaxSize?: number | undefined;
  preferNotToMerge?: boolean | undefined;
}

function createBaseCluster(): Cluster {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.Cluster",
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
    serviceAccountId: "",
    maintenanceWindow: undefined,
    plannedOperation: undefined,
    securityGroupIds: [],
    deletionProtection: false,
  };
}

export const Cluster = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster" as const,

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
        $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry",
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
    if (message.serviceAccountId !== "") {
      writer.uint32(106).string(message.serviceAccountId);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(114).fork()).ldelim();
    }
    if (message.plannedOperation !== undefined) {
      MaintenanceOperation.encode(message.plannedOperation, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(130).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(136).bool(message.deletionProtection);
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

          message.serviceAccountId = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.plannedOperation = MaintenanceOperation.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 17:
          if (tag !== 136) {
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
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
      plannedOperation: isSet(object.plannedOperation)
        ? MaintenanceOperation.fromJSON(object.plannedOperation)
        : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
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
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    if (message.plannedOperation !== undefined) {
      obj.plannedOperation = MaintenanceOperation.toJSON(message.plannedOperation);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
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
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    message.plannedOperation = (object.plannedOperation !== undefined && object.plannedOperation !== null)
      ? MaintenanceOperation.fromPartial(object.plannedOperation)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

function createBaseCluster_LabelsEntry(): Cluster_LabelsEntry {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry", key: "", value: "" };
}

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.Monitoring", name: "", description: "", link: "" };
}

export const Monitoring = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Monitoring" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig",
    version: "",
    clickhouse: undefined,
    zookeeper: undefined,
    backupWindowStart: undefined,
    access: undefined,
    cloudStorage: undefined,
    sqlDatabaseManagement: undefined,
    sqlUserManagement: undefined,
    embeddedKeeper: undefined,
  };
}

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig" as const,

  encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.clickhouse !== undefined) {
      ClusterConfig_Clickhouse.encode(message.clickhouse, writer.uint32(18).fork()).ldelim();
    }
    if (message.zookeeper !== undefined) {
      ClusterConfig_Zookeeper.encode(message.zookeeper, writer.uint32(26).fork()).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(34).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(42).fork()).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(message.cloudStorage, writer.uint32(50).fork()).ldelim();
    }
    if (message.sqlDatabaseManagement !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.sqlDatabaseManagement! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.sqlUserManagement !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.sqlUserManagement! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.embeddedKeeper !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.embeddedKeeper! }, writer.uint32(74).fork())
        .ldelim();
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

          message.clickhouse = ClusterConfig_Clickhouse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.zookeeper = ClusterConfig_Zookeeper.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sqlDatabaseManagement = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sqlUserManagement = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.embeddedKeeper = BoolValue.decode(reader, reader.uint32()).value;
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
      clickhouse: isSet(object.clickhouse) ? ClusterConfig_Clickhouse.fromJSON(object.clickhouse) : undefined,
      zookeeper: isSet(object.zookeeper) ? ClusterConfig_Zookeeper.fromJSON(object.zookeeper) : undefined,
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
      cloudStorage: isSet(object.cloudStorage) ? CloudStorage.fromJSON(object.cloudStorage) : undefined,
      sqlDatabaseManagement: isSet(object.sqlDatabaseManagement) ? Boolean(object.sqlDatabaseManagement) : undefined,
      sqlUserManagement: isSet(object.sqlUserManagement) ? Boolean(object.sqlUserManagement) : undefined,
      embeddedKeeper: isSet(object.embeddedKeeper) ? Boolean(object.embeddedKeeper) : undefined,
    };
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.clickhouse !== undefined) {
      obj.clickhouse = ClusterConfig_Clickhouse.toJSON(message.clickhouse);
    }
    if (message.zookeeper !== undefined) {
      obj.zookeeper = ClusterConfig_Zookeeper.toJSON(message.zookeeper);
    }
    if (message.backupWindowStart !== undefined) {
      obj.backupWindowStart = TimeOfDay.toJSON(message.backupWindowStart);
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    if (message.cloudStorage !== undefined) {
      obj.cloudStorage = CloudStorage.toJSON(message.cloudStorage);
    }
    if (message.sqlDatabaseManagement !== undefined) {
      obj.sqlDatabaseManagement = message.sqlDatabaseManagement;
    }
    if (message.sqlUserManagement !== undefined) {
      obj.sqlUserManagement = message.sqlUserManagement;
    }
    if (message.embeddedKeeper !== undefined) {
      obj.embeddedKeeper = message.embeddedKeeper;
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConfig>): ClusterConfig {
    return ClusterConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig {
    const message = createBaseClusterConfig();
    message.version = object.version ?? "";
    message.clickhouse = (object.clickhouse !== undefined && object.clickhouse !== null)
      ? ClusterConfig_Clickhouse.fromPartial(object.clickhouse)
      : undefined;
    message.zookeeper = (object.zookeeper !== undefined && object.zookeeper !== null)
      ? ClusterConfig_Zookeeper.fromPartial(object.zookeeper)
      : undefined;
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    message.cloudStorage = (object.cloudStorage !== undefined && object.cloudStorage !== null)
      ? CloudStorage.fromPartial(object.cloudStorage)
      : undefined;
    message.sqlDatabaseManagement = object.sqlDatabaseManagement ?? undefined;
    message.sqlUserManagement = object.sqlUserManagement ?? undefined;
    message.embeddedKeeper = object.embeddedKeeper ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

function createBaseClusterConfig_Clickhouse(): ClusterConfig_Clickhouse {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse", config: undefined, resources: undefined };
}

export const ClusterConfig_Clickhouse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse" as const,

  encode(message: ClusterConfig_Clickhouse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      ClickhouseConfigSet.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConfig_Clickhouse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClusterConfig_Clickhouse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = ClickhouseConfigSet.decode(reader, reader.uint32());
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

  fromJSON(object: any): ClusterConfig_Clickhouse {
    return {
      $type: ClusterConfig_Clickhouse.$type,
      config: isSet(object.config) ? ClickhouseConfigSet.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: ClusterConfig_Clickhouse): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = ClickhouseConfigSet.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConfig_Clickhouse>): ClusterConfig_Clickhouse {
    return ClusterConfig_Clickhouse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConfig_Clickhouse>): ClusterConfig_Clickhouse {
    const message = createBaseClusterConfig_Clickhouse();
    message.config = (object.config !== undefined && object.config !== null)
      ? ClickhouseConfigSet.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig_Clickhouse.$type, ClusterConfig_Clickhouse);

function createBaseClusterConfig_Zookeeper(): ClusterConfig_Zookeeper {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper", resources: undefined };
}

export const ClusterConfig_Zookeeper = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper" as const,

  encode(message: ClusterConfig_Zookeeper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConfig_Zookeeper {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClusterConfig_Zookeeper();
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

  fromJSON(object: any): ClusterConfig_Zookeeper {
    return {
      $type: ClusterConfig_Zookeeper.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: ClusterConfig_Zookeeper): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConfig_Zookeeper>): ClusterConfig_Zookeeper {
    return ClusterConfig_Zookeeper.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConfig_Zookeeper>): ClusterConfig_Zookeeper {
    const message = createBaseClusterConfig_Zookeeper();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig_Zookeeper.$type, ClusterConfig_Zookeeper);

function createBaseShard(): Shard {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.Shard", name: "", clusterId: "", config: undefined };
}

export const Shard = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Shard" as const,

  encode(message: Shard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.config !== undefined) {
      ShardConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Shard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShard();
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

          message.config = ShardConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Shard {
    return {
      $type: Shard.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      config: isSet(object.config) ? ShardConfig.fromJSON(object.config) : undefined,
    };
  },

  toJSON(message: Shard): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.config !== undefined) {
      obj.config = ShardConfig.toJSON(message.config);
    }
    return obj;
  },

  create(base?: DeepPartial<Shard>): Shard {
    return Shard.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Shard>): Shard {
    const message = createBaseShard();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.config = (object.config !== undefined && object.config !== null)
      ? ShardConfig.fromPartial(object.config)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Shard.$type, Shard);

function createBaseShardGroup(): ShardGroup {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardGroup",
    name: "",
    clusterId: "",
    description: "",
    shardNames: [],
  };
}

export const ShardGroup = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardGroup" as const,

  encode(message: ShardGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.shardNames) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShardGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShardGroup();
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

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.shardNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShardGroup {
    return {
      $type: ShardGroup.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      shardNames: globalThis.Array.isArray(object?.shardNames)
        ? object.shardNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ShardGroup): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.shardNames?.length) {
      obj.shardNames = message.shardNames;
    }
    return obj;
  },

  create(base?: DeepPartial<ShardGroup>): ShardGroup {
    return ShardGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ShardGroup>): ShardGroup {
    const message = createBaseShardGroup();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.description = object.description ?? "";
    message.shardNames = object.shardNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ShardGroup.$type, ShardGroup);

function createBaseShardConfig(): ShardConfig {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig", clickhouse: undefined };
}

export const ShardConfig = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig" as const,

  encode(message: ShardConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clickhouse !== undefined) {
      ShardConfig_Clickhouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShardConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShardConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clickhouse = ShardConfig_Clickhouse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShardConfig {
    return {
      $type: ShardConfig.$type,
      clickhouse: isSet(object.clickhouse) ? ShardConfig_Clickhouse.fromJSON(object.clickhouse) : undefined,
    };
  },

  toJSON(message: ShardConfig): unknown {
    const obj: any = {};
    if (message.clickhouse !== undefined) {
      obj.clickhouse = ShardConfig_Clickhouse.toJSON(message.clickhouse);
    }
    return obj;
  },

  create(base?: DeepPartial<ShardConfig>): ShardConfig {
    return ShardConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ShardConfig>): ShardConfig {
    const message = createBaseShardConfig();
    message.clickhouse = (object.clickhouse !== undefined && object.clickhouse !== null)
      ? ShardConfig_Clickhouse.fromPartial(object.clickhouse)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ShardConfig.$type, ShardConfig);

function createBaseShardConfig_Clickhouse(): ShardConfig_Clickhouse {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse",
    config: undefined,
    resources: undefined,
    weight: undefined,
  };
}

export const ShardConfig_Clickhouse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse" as const,

  encode(message: ShardConfig_Clickhouse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      ClickhouseConfigSet.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.weight !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.weight! }, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShardConfig_Clickhouse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShardConfig_Clickhouse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = ClickhouseConfigSet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.weight = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShardConfig_Clickhouse {
    return {
      $type: ShardConfig_Clickhouse.$type,
      config: isSet(object.config) ? ClickhouseConfigSet.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      weight: isSet(object.weight) ? Number(object.weight) : undefined,
    };
  },

  toJSON(message: ShardConfig_Clickhouse): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = ClickhouseConfigSet.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.weight !== undefined) {
      obj.weight = message.weight;
    }
    return obj;
  },

  create(base?: DeepPartial<ShardConfig_Clickhouse>): ShardConfig_Clickhouse {
    return ShardConfig_Clickhouse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ShardConfig_Clickhouse>): ShardConfig_Clickhouse {
    const message = createBaseShardConfig_Clickhouse();
    message.config = (object.config !== undefined && object.config !== null)
      ? ClickhouseConfigSet.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.weight = object.weight ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ShardConfig_Clickhouse.$type, ShardConfig_Clickhouse);

function createBaseHost(): Host {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    type: 0,
    resources: undefined,
    health: 0,
    services: [],
    subnetId: "",
    assignPublicIp: false,
    shardName: "",
  };
}

export const Host = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Host" as const,

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
    if (message.shardName !== "") {
      writer.uint32(82).string(message.shardName);
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
        case 10:
          if (tag !== 82) {
            break;
          }

          message.shardName = reader.string();
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
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
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
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
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
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

function createBaseService(): Service {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.Service", type: 0, health: 0 };
}

export const Service = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Service" as const,

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

function createBaseResources(): Resources {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.Resources", resourcePresetId: "", diskSize: 0, diskTypeId: "" };
}

export const Resources = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Resources" as const,

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

function createBaseAccess(): Access {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.Access",
    dataLens: false,
    webSql: false,
    metrika: false,
    serverless: false,
    dataTransfer: false,
    yandexQuery: false,
  };
}

export const Access = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Access" as const,

  encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataLens === true) {
      writer.uint32(8).bool(message.dataLens);
    }
    if (message.webSql === true) {
      writer.uint32(16).bool(message.webSql);
    }
    if (message.metrika === true) {
      writer.uint32(24).bool(message.metrika);
    }
    if (message.serverless === true) {
      writer.uint32(32).bool(message.serverless);
    }
    if (message.dataTransfer === true) {
      writer.uint32(40).bool(message.dataTransfer);
    }
    if (message.yandexQuery === true) {
      writer.uint32(48).bool(message.yandexQuery);
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

          message.dataLens = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.webSql = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.metrika = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.serverless = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.dataTransfer = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.yandexQuery = reader.bool();
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
      dataLens: isSet(object.dataLens) ? globalThis.Boolean(object.dataLens) : false,
      webSql: isSet(object.webSql) ? globalThis.Boolean(object.webSql) : false,
      metrika: isSet(object.metrika) ? globalThis.Boolean(object.metrika) : false,
      serverless: isSet(object.serverless) ? globalThis.Boolean(object.serverless) : false,
      dataTransfer: isSet(object.dataTransfer) ? globalThis.Boolean(object.dataTransfer) : false,
      yandexQuery: isSet(object.yandexQuery) ? globalThis.Boolean(object.yandexQuery) : false,
    };
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
    if (message.dataLens === true) {
      obj.dataLens = message.dataLens;
    }
    if (message.webSql === true) {
      obj.webSql = message.webSql;
    }
    if (message.metrika === true) {
      obj.metrika = message.metrika;
    }
    if (message.serverless === true) {
      obj.serverless = message.serverless;
    }
    if (message.dataTransfer === true) {
      obj.dataTransfer = message.dataTransfer;
    }
    if (message.yandexQuery === true) {
      obj.yandexQuery = message.yandexQuery;
    }
    return obj;
  },

  create(base?: DeepPartial<Access>): Access {
    return Access.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Access>): Access {
    const message = createBaseAccess();
    message.dataLens = object.dataLens ?? false;
    message.webSql = object.webSql ?? false;
    message.metrika = object.metrika ?? false;
    message.serverless = object.serverless ?? false;
    message.dataTransfer = object.dataTransfer ?? false;
    message.yandexQuery = object.yandexQuery ?? false;
    return message;
  },
};

messageTypeRegistry.set(Access.$type, Access);

function createBaseCloudStorage(): CloudStorage {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.CloudStorage",
    enabled: false,
    moveFactor: undefined,
    dataCacheEnabled: undefined,
    dataCacheMaxSize: undefined,
    preferNotToMerge: undefined,
  };
}

export const CloudStorage = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CloudStorage" as const,

  encode(message: CloudStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.moveFactor !== undefined) {
      DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.moveFactor! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.dataCacheEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.dataCacheEnabled! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.dataCacheMaxSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.dataCacheMaxSize! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.preferNotToMerge !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.preferNotToMerge! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloudStorage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloudStorage();
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

          message.moveFactor = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dataCacheEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dataCacheMaxSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.preferNotToMerge = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CloudStorage {
    return {
      $type: CloudStorage.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      moveFactor: isSet(object.moveFactor) ? Number(object.moveFactor) : undefined,
      dataCacheEnabled: isSet(object.dataCacheEnabled) ? Boolean(object.dataCacheEnabled) : undefined,
      dataCacheMaxSize: isSet(object.dataCacheMaxSize) ? Number(object.dataCacheMaxSize) : undefined,
      preferNotToMerge: isSet(object.preferNotToMerge) ? Boolean(object.preferNotToMerge) : undefined,
    };
  },

  toJSON(message: CloudStorage): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.moveFactor !== undefined) {
      obj.moveFactor = message.moveFactor;
    }
    if (message.dataCacheEnabled !== undefined) {
      obj.dataCacheEnabled = message.dataCacheEnabled;
    }
    if (message.dataCacheMaxSize !== undefined) {
      obj.dataCacheMaxSize = message.dataCacheMaxSize;
    }
    if (message.preferNotToMerge !== undefined) {
      obj.preferNotToMerge = message.preferNotToMerge;
    }
    return obj;
  },

  create(base?: DeepPartial<CloudStorage>): CloudStorage {
    return CloudStorage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloudStorage>): CloudStorage {
    const message = createBaseCloudStorage();
    message.enabled = object.enabled ?? false;
    message.moveFactor = object.moveFactor ?? undefined;
    message.dataCacheEnabled = object.dataCacheEnabled ?? undefined;
    message.dataCacheMaxSize = object.dataCacheMaxSize ?? undefined;
    message.preferNotToMerge = object.preferNotToMerge ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CloudStorage.$type, CloudStorage);

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
