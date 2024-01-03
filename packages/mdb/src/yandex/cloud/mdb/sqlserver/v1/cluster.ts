/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { TimeOfDay } from "@yandex-cloud/core/dist/generated/google/type/timeofday";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { SQLServerConfigSet2016sp2ent, SQLServerConfigSet2016sp2std } from "./config/sqlserver2016sp2";
import { SQLServerConfigSet2017ent, SQLServerConfigSet2017std } from "./config/sqlserver2017";
import { SQLServerConfigSet2019ent, SQLServerConfigSet2019std } from "./config/sqlserver2019";

export const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";

/**
 * An SQL Server cluster.
 *
 * For more information, see the [Concepts](/docs/managed-sqlserver/concepts) section of the documentation.
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.sqlserver.v1.Cluster";
  /**
   * ID of the SQL Server cluster.
   *
   * This ID is assigned by Managed Service for SQL Server at the moment of creation.
   */
  id: string;
  /** ID of the folder the SQL Server cluster belongs to. */
  folderId: string;
  /** Time when SQL Server cluster was created. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the SQL Server cluster.
   *
   * The name must be unique within the folder, comply with [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt) and be 1-63 characters long.
   */
  name: string;
  /**
   * Description of the SQL Server cluster.
   *
   * Must be 0-256 characters long.
   */
  description: string;
  /**
   * Custom labels for the SQL Server cluster as `key:value` pairs.
   *
   * Maximum 64 per resource.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the SQL Server cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the SQL Server cluster. */
  monitoring: Monitoring[];
  /** Configuration of the SQL Server cluster. */
  config?:
    | ClusterConfig
    | undefined;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** User security groups. */
  securityGroupIds: string[];
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** SQL Server Collation. */
  sqlcollation: string;
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
  /** ID of the service account which is used for access to Object Storage. */
  serviceAccountId: string;
}

export enum Cluster_Environment {
  ENVIRONMENT_UNSPECIFIED = 0,
  /** PRODUCTION - Stable environment with a conservative update policy: only hotfixes are applied during regular maintenance. */
  PRODUCTION = 1,
  /** PRESTABLE - Environment with more aggressive update policy: new versions are rolled out irrespective of backward compatibility. */
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
  /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is alive and works well ([Host.health] of all hosts in the cluster is `ALIVE`). */
  ALIVE = 1,
  /** DEAD - Cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
  DEAD = 2,
  /** DEGRADED - Cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
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
  $type: "yandex.cloud.mdb.sqlserver.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

export interface Monitoring {
  $type: "yandex.cloud.mdb.sqlserver.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the SQL Server cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.sqlserver.v1.ClusterConfig";
  /** Version of the SQL Server. */
  version: string;
  /** Configuration of the SQL Server 2016sp2 standard edition instance. */
  sqlserverConfig2016sp2std?:
    | SQLServerConfigSet2016sp2std
    | undefined;
  /** Configuration of the SQL Server 2016sp2 enterprise edition instance. */
  sqlserverConfig2016sp2ent?:
    | SQLServerConfigSet2016sp2ent
    | undefined;
  /** Configuration of the SQL Server 2017 standard edition instance. */
  sqlserverConfig2017std?:
    | SQLServerConfigSet2017std
    | undefined;
  /** Configuration of the SQL Server 2017 enterprise edition instance. */
  sqlserverConfig2017ent?:
    | SQLServerConfigSet2017ent
    | undefined;
  /** Configuration of the SQL Server 2019 standard edition instance. */
  sqlserverConfig2019std?:
    | SQLServerConfigSet2019std
    | undefined;
  /** Configuration of the SQL Server 2019 enterprise edition instance. */
  sqlserverConfig2019ent?:
    | SQLServerConfigSet2019ent
    | undefined;
  /** Resources allocated to SQL Server hosts. */
  resources?:
    | Resources
    | undefined;
  /** Start time for the daily backup in UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /** Database access policy. */
  access?:
    | Access
    | undefined;
  /** Secondary replicas connection mode */
  secondaryConnections: ClusterConfig_SecondaryConnections;
}

export enum ClusterConfig_SecondaryConnections {
  SECONDARY_CONNECTIONS_UNSPECIFIED = 0,
  /** SECONDARY_CONNECTIONS_OFF - Connections to secondary replicas are prohibited */
  SECONDARY_CONNECTIONS_OFF = 1,
  /** SECONDARY_CONNECTIONS_READ_ONLY - Secondary replicas are read-only */
  SECONDARY_CONNECTIONS_READ_ONLY = 2,
  UNRECOGNIZED = -1,
}

export function clusterConfig_SecondaryConnectionsFromJSON(object: any): ClusterConfig_SecondaryConnections {
  switch (object) {
    case 0:
    case "SECONDARY_CONNECTIONS_UNSPECIFIED":
      return ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_UNSPECIFIED;
    case 1:
    case "SECONDARY_CONNECTIONS_OFF":
      return ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_OFF;
    case 2:
    case "SECONDARY_CONNECTIONS_READ_ONLY":
      return ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_READ_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClusterConfig_SecondaryConnections.UNRECOGNIZED;
  }
}

export function clusterConfig_SecondaryConnectionsToJSON(object: ClusterConfig_SecondaryConnections): string {
  switch (object) {
    case ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_UNSPECIFIED:
      return "SECONDARY_CONNECTIONS_UNSPECIFIED";
    case ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_OFF:
      return "SECONDARY_CONNECTIONS_OFF";
    case ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_READ_ONLY:
      return "SECONDARY_CONNECTIONS_READ_ONLY";
    case ClusterConfig_SecondaryConnections.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Host {
  $type: "yandex.cloud.mdb.sqlserver.v1.Host";
  /**
   * Name of the SQL Server host.
   *
   * The host name is assigned by Managed Service for SQL Server at the moment of creation and cannot be changed. 1-63 characters long.
   *
   * The name is unique across all database hosts that exist on the platform as it defines the FQDN of the host.
   */
  name: string;
  /**
   * ID of the SQL Server host.
   *
   * The ID is assigned by Managed Service for SQL Server at the moment of creation.
   */
  clusterId: string;
  /** ID of the availability zone where the SQL Server host resides. */
  zoneId: string;
  /** Resources allocated to the host. */
  resources?:
    | Resources
    | undefined;
  /** Role of the host in the cluster. */
  role: Host_Role;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** Services provided by the host. */
  services: Service[];
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Flag showing public IP assignment status to this host. */
  assignPublicIp: boolean;
}

export enum Host_Role {
  /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
  ROLE_UNKNOWN = 0,
  /** MASTER - Host is the master SQL Server instance in the cluster. */
  MASTER = 1,
  /** REPLICA - Host is a replica SQL Server instance in the cluster. */
  REPLICA = 2,
  UNRECOGNIZED = -1,
}

export function host_RoleFromJSON(object: any): Host_Role {
  switch (object) {
    case 0:
    case "ROLE_UNKNOWN":
      return Host_Role.ROLE_UNKNOWN;
    case 1:
    case "MASTER":
      return Host_Role.MASTER;
    case 2:
    case "REPLICA":
      return Host_Role.REPLICA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Role.UNRECOGNIZED;
  }
}

export function host_RoleToJSON(object: Host_Role): string {
  switch (object) {
    case Host_Role.ROLE_UNKNOWN:
      return "ROLE_UNKNOWN";
    case Host_Role.MASTER:
      return "MASTER";
    case Host_Role.REPLICA:
      return "REPLICA";
    case Host_Role.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Host_Health {
  /** HEALTH_UNKNOWN - Health of the host is unknown. */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - The host is performing all its functions normally. */
  ALIVE = 1,
  /** DEAD - The host is inoperable and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - The host is degraded and can perform only some of its essential functions. */
  DEGRADED = 3,
  UNRECOGNIZED = -1,
}

export function host_HealthFromJSON(object: any): Host_Health {
  switch (object) {
    case 0:
    case "HEALTH_UNKNOWN":
      return Host_Health.HEALTH_UNKNOWN;
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
    case Host_Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
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
  $type: "yandex.cloud.mdb.sqlserver.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Status code of server availability. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** SQLSERVER - SQL Server service. */
  SQLSERVER = 1,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "SQLSERVER":
      return Service_Type.SQLSERVER;
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
    case Service_Type.SQLSERVER:
      return "SQLSERVER";
    case Service_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Service_Health {
  /** HEALTH_UNKNOWN - Health of the server is unknown. */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - The server is working normally. */
  ALIVE = 1,
  /** DEAD - The server is dead or unresponsive. */
  DEAD = 2,
  UNRECOGNIZED = -1,
}

export function service_HealthFromJSON(object: any): Service_Health {
  switch (object) {
    case 0:
    case "HEALTH_UNKNOWN":
      return Service_Health.HEALTH_UNKNOWN;
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
    case Service_Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
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
  $type: "yandex.cloud.mdb.sqlserver.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory, etc.).
   *
   * All available presets are listed in the [documentation](/docs/managed-sqlserver/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage available to a host. */
  diskSize: number;
  /**
   * Type of the storage environment for the host.
   *
   * Possible values:
   * * `network-hdd` - network HDD drive;
   * * `network-ssd` - network SSD drive;
   * * `local-ssd` - local SSD storage.
   */
  diskTypeId: string;
}

export interface Access {
  $type: "yandex.cloud.mdb.sqlserver.v1.Access";
  /** Allows access for DataLens. */
  dataLens: boolean;
  /** Allows access for Web SQL. */
  webSql: boolean;
}

function createBaseCluster(): Cluster {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.Cluster",
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
    deletionProtection: false,
    sqlcollation: "",
    hostGroupIds: [],
    serviceAccountId: "",
  };
}

export const Cluster = {
  $type: "yandex.cloud.mdb.sqlserver.v1.Cluster" as const,

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
        { $type: "yandex.cloud.mdb.sqlserver.v1.Cluster.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
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
    if (message.deletionProtection === true) {
      writer.uint32(112).bool(message.deletionProtection);
    }
    if (message.sqlcollation !== "") {
      writer.uint32(122).string(message.sqlcollation);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(130).string(v!);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(138).string(message.serviceAccountId);
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
          if (tag !== 112) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.sqlcollation = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.hostGroupIds.push(reader.string());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.serviceAccountId = reader.string();
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
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      sqlcollation: isSet(object.sqlcollation) ? globalThis.String(object.sqlcollation) : "",
      hostGroupIds: globalThis.Array.isArray(object?.hostGroupIds)
        ? object.hostGroupIds.map((e: any) => globalThis.String(e))
        : [],
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
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
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.sqlcollation !== "") {
      obj.sqlcollation = message.sqlcollation;
    }
    if (message.hostGroupIds?.length) {
      obj.hostGroupIds = message.hostGroupIds;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
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
    message.deletionProtection = object.deletionProtection ?? false;
    message.sqlcollation = object.sqlcollation ?? "";
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

function createBaseCluster_LabelsEntry(): Cluster_LabelsEntry {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.Cluster.LabelsEntry", key: "", value: "" };
}

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.sqlserver.v1.Cluster.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.sqlserver.v1.Monitoring", name: "", description: "", link: "" };
}

export const Monitoring = {
  $type: "yandex.cloud.mdb.sqlserver.v1.Monitoring" as const,

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
    $type: "yandex.cloud.mdb.sqlserver.v1.ClusterConfig",
    version: "",
    sqlserverConfig2016sp2std: undefined,
    sqlserverConfig2016sp2ent: undefined,
    sqlserverConfig2017std: undefined,
    sqlserverConfig2017ent: undefined,
    sqlserverConfig2019std: undefined,
    sqlserverConfig2019ent: undefined,
    resources: undefined,
    backupWindowStart: undefined,
    access: undefined,
    secondaryConnections: 0,
  };
}

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.sqlserver.v1.ClusterConfig" as const,

  encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.sqlserverConfig2016sp2std !== undefined) {
      SQLServerConfigSet2016sp2std.encode(message.sqlserverConfig2016sp2std, writer.uint32(18).fork()).ldelim();
    }
    if (message.sqlserverConfig2016sp2ent !== undefined) {
      SQLServerConfigSet2016sp2ent.encode(message.sqlserverConfig2016sp2ent, writer.uint32(42).fork()).ldelim();
    }
    if (message.sqlserverConfig2017std !== undefined) {
      SQLServerConfigSet2017std.encode(message.sqlserverConfig2017std, writer.uint32(66).fork()).ldelim();
    }
    if (message.sqlserverConfig2017ent !== undefined) {
      SQLServerConfigSet2017ent.encode(message.sqlserverConfig2017ent, writer.uint32(74).fork()).ldelim();
    }
    if (message.sqlserverConfig2019std !== undefined) {
      SQLServerConfigSet2019std.encode(message.sqlserverConfig2019std, writer.uint32(82).fork()).ldelim();
    }
    if (message.sqlserverConfig2019ent !== undefined) {
      SQLServerConfigSet2019ent.encode(message.sqlserverConfig2019ent, writer.uint32(90).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(34).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(50).fork()).ldelim();
    }
    if (message.secondaryConnections !== 0) {
      writer.uint32(56).int32(message.secondaryConnections);
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

          message.sqlserverConfig2016sp2std = SQLServerConfigSet2016sp2std.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sqlserverConfig2016sp2ent = SQLServerConfigSet2016sp2ent.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sqlserverConfig2017std = SQLServerConfigSet2017std.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sqlserverConfig2017ent = SQLServerConfigSet2017ent.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.sqlserverConfig2019std = SQLServerConfigSet2019std.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.sqlserverConfig2019ent = SQLServerConfigSet2019ent.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.secondaryConnections = reader.int32() as any;
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
      sqlserverConfig2016sp2std: isSet(object.sqlserverConfig_2016sp2std)
        ? SQLServerConfigSet2016sp2std.fromJSON(object.sqlserverConfig_2016sp2std)
        : undefined,
      sqlserverConfig2016sp2ent: isSet(object.sqlserverConfig_2016sp2ent)
        ? SQLServerConfigSet2016sp2ent.fromJSON(object.sqlserverConfig_2016sp2ent)
        : undefined,
      sqlserverConfig2017std: isSet(object.sqlserverConfig_2017std)
        ? SQLServerConfigSet2017std.fromJSON(object.sqlserverConfig_2017std)
        : undefined,
      sqlserverConfig2017ent: isSet(object.sqlserverConfig_2017ent)
        ? SQLServerConfigSet2017ent.fromJSON(object.sqlserverConfig_2017ent)
        : undefined,
      sqlserverConfig2019std: isSet(object.sqlserverConfig_2019std)
        ? SQLServerConfigSet2019std.fromJSON(object.sqlserverConfig_2019std)
        : undefined,
      sqlserverConfig2019ent: isSet(object.sqlserverConfig_2019ent)
        ? SQLServerConfigSet2019ent.fromJSON(object.sqlserverConfig_2019ent)
        : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
      secondaryConnections: isSet(object.secondaryConnections)
        ? clusterConfig_SecondaryConnectionsFromJSON(object.secondaryConnections)
        : 0,
    };
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.sqlserverConfig2016sp2std !== undefined) {
      obj.sqlserverConfig_2016sp2std = SQLServerConfigSet2016sp2std.toJSON(message.sqlserverConfig2016sp2std);
    }
    if (message.sqlserverConfig2016sp2ent !== undefined) {
      obj.sqlserverConfig_2016sp2ent = SQLServerConfigSet2016sp2ent.toJSON(message.sqlserverConfig2016sp2ent);
    }
    if (message.sqlserverConfig2017std !== undefined) {
      obj.sqlserverConfig_2017std = SQLServerConfigSet2017std.toJSON(message.sqlserverConfig2017std);
    }
    if (message.sqlserverConfig2017ent !== undefined) {
      obj.sqlserverConfig_2017ent = SQLServerConfigSet2017ent.toJSON(message.sqlserverConfig2017ent);
    }
    if (message.sqlserverConfig2019std !== undefined) {
      obj.sqlserverConfig_2019std = SQLServerConfigSet2019std.toJSON(message.sqlserverConfig2019std);
    }
    if (message.sqlserverConfig2019ent !== undefined) {
      obj.sqlserverConfig_2019ent = SQLServerConfigSet2019ent.toJSON(message.sqlserverConfig2019ent);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.backupWindowStart !== undefined) {
      obj.backupWindowStart = TimeOfDay.toJSON(message.backupWindowStart);
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    if (message.secondaryConnections !== 0) {
      obj.secondaryConnections = clusterConfig_SecondaryConnectionsToJSON(message.secondaryConnections);
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConfig>): ClusterConfig {
    return ClusterConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig {
    const message = createBaseClusterConfig();
    message.version = object.version ?? "";
    message.sqlserverConfig2016sp2std =
      (object.sqlserverConfig2016sp2std !== undefined && object.sqlserverConfig2016sp2std !== null)
        ? SQLServerConfigSet2016sp2std.fromPartial(object.sqlserverConfig2016sp2std)
        : undefined;
    message.sqlserverConfig2016sp2ent =
      (object.sqlserverConfig2016sp2ent !== undefined && object.sqlserverConfig2016sp2ent !== null)
        ? SQLServerConfigSet2016sp2ent.fromPartial(object.sqlserverConfig2016sp2ent)
        : undefined;
    message.sqlserverConfig2017std =
      (object.sqlserverConfig2017std !== undefined && object.sqlserverConfig2017std !== null)
        ? SQLServerConfigSet2017std.fromPartial(object.sqlserverConfig2017std)
        : undefined;
    message.sqlserverConfig2017ent =
      (object.sqlserverConfig2017ent !== undefined && object.sqlserverConfig2017ent !== null)
        ? SQLServerConfigSet2017ent.fromPartial(object.sqlserverConfig2017ent)
        : undefined;
    message.sqlserverConfig2019std =
      (object.sqlserverConfig2019std !== undefined && object.sqlserverConfig2019std !== null)
        ? SQLServerConfigSet2019std.fromPartial(object.sqlserverConfig2019std)
        : undefined;
    message.sqlserverConfig2019ent =
      (object.sqlserverConfig2019ent !== undefined && object.sqlserverConfig2019ent !== null)
        ? SQLServerConfigSet2019ent.fromPartial(object.sqlserverConfig2019ent)
        : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    message.secondaryConnections = object.secondaryConnections ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

function createBaseHost(): Host {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    resources: undefined,
    role: 0,
    health: 0,
    services: [],
    subnetId: "",
    assignPublicIp: false,
  };
}

export const Host = {
  $type: "yandex.cloud.mdb.sqlserver.v1.Host" as const,

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
    if (message.role !== 0) {
      writer.uint32(40).int32(message.role);
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
          if (tag !== 34) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.role = reader.int32() as any;
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
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      role: isSet(object.role) ? host_RoleFromJSON(object.role) : 0,
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
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.role !== 0) {
      obj.role = host_RoleToJSON(message.role);
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
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.role = object.role ?? 0;
    message.health = object.health ?? 0;
    message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

function createBaseService(): Service {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.Service", type: 0, health: 0 };
}

export const Service = {
  $type: "yandex.cloud.mdb.sqlserver.v1.Service" as const,

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
  return { $type: "yandex.cloud.mdb.sqlserver.v1.Resources", resourcePresetId: "", diskSize: 0, diskTypeId: "" };
}

export const Resources = {
  $type: "yandex.cloud.mdb.sqlserver.v1.Resources" as const,

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
  return { $type: "yandex.cloud.mdb.sqlserver.v1.Access", dataLens: false, webSql: false };
}

export const Access = {
  $type: "yandex.cloud.mdb.sqlserver.v1.Access" as const,

  encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataLens === true) {
      writer.uint32(8).bool(message.dataLens);
    }
    if (message.webSql === true) {
      writer.uint32(16).bool(message.webSql);
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
    return obj;
  },

  create(base?: DeepPartial<Access>): Access {
    return Access.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Access>): Access {
    const message = createBaseAccess();
    message.dataLens = object.dataLens ?? false;
    message.webSql = object.webSql ?? false;
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
