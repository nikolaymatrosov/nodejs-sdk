/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import { TimeOfDay } from "@yandex-cloud/core/dist/generated/google/type/timeofday";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { PostgresqlHostConfig10 } from "./config/host10";
import { PostgresqlHostConfig101C } from "./config/host10_1c";
import { PostgresqlHostConfig11 } from "./config/host11";
import { PostgresqlHostConfig111C } from "./config/host11_1c";
import { PostgresqlHostConfig12 } from "./config/host12";
import { PostgresqlHostConfig121C } from "./config/host12_1c";
import { PostgresqlHostConfig13 } from "./config/host13";
import { PostgresqlHostConfig131C } from "./config/host13_1c";
import { PostgresqlHostConfig14 } from "./config/host14";
import { PostgresqlHostConfig141C } from "./config/host14_1c";
import { PostgresqlHostConfig15 } from "./config/host15";
import { PostgresqlHostConfig151C } from "./config/host15_1c";
import { PostgresqlHostConfig16 } from "./config/host16";
import { PostgresqlHostConfig161C } from "./config/host16_1c";
import { PostgresqlHostConfig96 } from "./config/host9_6";
import { PostgresqlConfigSet10 } from "./config/postgresql10";
import { PostgresqlConfigSet101C } from "./config/postgresql10_1c";
import { PostgresqlConfigSet11 } from "./config/postgresql11";
import { PostgresqlConfigSet111C } from "./config/postgresql11_1c";
import { PostgresqlConfigSet12 } from "./config/postgresql12";
import { PostgresqlConfigSet121C } from "./config/postgresql12_1c";
import { PostgresqlConfigSet13 } from "./config/postgresql13";
import { PostgresqlConfigSet131C } from "./config/postgresql13_1c";
import { PostgresqlConfigSet14 } from "./config/postgresql14";
import { PostgresqlConfigSet141C } from "./config/postgresql14_1c";
import { PostgresqlConfigSet15 } from "./config/postgresql15";
import { PostgresqlConfigSet151C } from "./config/postgresql15_1c";
import { PostgresqlConfigSet16 } from "./config/postgresql16";
import { PostgresqlConfigSet161C } from "./config/postgresql16_1c";
import { PostgresqlConfigSet96 } from "./config/postgresql9_6";
import { MaintenanceOperation, MaintenanceWindow } from "./maintenance";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

/**
 * A PostgreSQL Cluster resource. For more information, see
 * the [Concepts](/docs/managed-postgresql/concepts) section of the documentation.
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster";
  /**
   * ID of the PostgreSQL cluster.
   * This ID is assigned by MDB at creation time.
   */
  id: string;
  /** ID of the folder that the PostgreSQL cluster belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the PostgreSQL cluster.
   * The name is unique within the folder. 1-63 characters long.
   */
  name: string;
  /** Description of the PostgreSQL cluster. 0-256 characters long. */
  description: string;
  /**
   * Custom labels for the PostgreSQL cluster as `` key:value `` pairs.
   * Maximum 64 per resource.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the PostgreSQL cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the PostgreSQL cluster. */
  monitoring: Monitoring[];
  /** Configuration of the PostgreSQL cluster. */
  config?:
    | ClusterConfig
    | undefined;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
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
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
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
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Monitoring system. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.postgresql.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the PostgreSQL cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.postgresql.v1.ClusterConfig";
  /** Version of PostgreSQL server software. */
  version: string;
  /** Configuration of a PostgreSQL 9.6 server. */
  postgresqlConfig96?:
    | PostgresqlConfigSet96
    | undefined;
  /** Configuration of a PostgreSQL 10 1C server. */
  postgresqlConfig101c?:
    | PostgresqlConfigSet101C
    | undefined;
  /** Configuration of a PostgreSQL 10 server. */
  postgresqlConfig10?:
    | PostgresqlConfigSet10
    | undefined;
  /** Configuration of a PostgreSQL 11 server. */
  postgresqlConfig11?:
    | PostgresqlConfigSet11
    | undefined;
  /** Configuration of a PostgreSQL 11 1C server. */
  postgresqlConfig111c?:
    | PostgresqlConfigSet111C
    | undefined;
  /** Configuration of a PostgreSQL 12 server. */
  postgresqlConfig12?:
    | PostgresqlConfigSet12
    | undefined;
  /** Configuration of a PostgreSQL 12 1C server. */
  postgresqlConfig121c?:
    | PostgresqlConfigSet121C
    | undefined;
  /** Configuration of a PostgreSQL 13 server. */
  postgresqlConfig13?:
    | PostgresqlConfigSet13
    | undefined;
  /** Configuration of a PostgreSQL 13 1C server. */
  postgresqlConfig131c?:
    | PostgresqlConfigSet131C
    | undefined;
  /** Configuration of a PostgreSQL 14 server. */
  postgresqlConfig14?:
    | PostgresqlConfigSet14
    | undefined;
  /** Configuration of a PostgreSQL 14 1C server. */
  postgresqlConfig141c?:
    | PostgresqlConfigSet141C
    | undefined;
  /** Configuration of a PostgreSQL 15 server. */
  postgresqlConfig15?:
    | PostgresqlConfigSet15
    | undefined;
  /** Configuration of a PostgreSQL 15 1C server. */
  postgresqlConfig151c?:
    | PostgresqlConfigSet151C
    | undefined;
  /** Configuration of a PostgreSQL 16 server. */
  postgresqlConfig16?:
    | PostgresqlConfigSet16
    | undefined;
  /** Configuration of a PostgreSQL 16 1C server. */
  postgresqlConfig161c?:
    | PostgresqlConfigSet161C
    | undefined;
  /** Configuration of the connection pooler. */
  poolerConfig?:
    | ConnectionPoolerConfig
    | undefined;
  /** Resources allocated to PostgreSQL hosts. */
  resources?:
    | Resources
    | undefined;
  /** Configuration setting which enables/disables autofailover in cluster. */
  autofailover?:
    | boolean
    | undefined;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /** Retention policy of automated backups. */
  backupRetainPeriodDays?:
    | number
    | undefined;
  /** Access policy to DB */
  access?:
    | Access
    | undefined;
  /** Configuration of the performance diagnostics service. */
  performanceDiagnostics?:
    | PerformanceDiagnostics
    | undefined;
  /** Disk size autoscaling */
  diskSizeAutoscaling?: DiskSizeAutoscaling | undefined;
}

export interface ConnectionPoolerConfig {
  $type: "yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig";
  /**
   * Mode that the connection pooler is working in.
   * See descriptions of all modes in the [documentation for PgBouncer](https://pgbouncer.github.io/usage).
   */
  poolingMode: ConnectionPoolerConfig_PoolingMode;
  /** Setting `server_reset_query_always` parameter in PgBouncer. */
  poolDiscard?: boolean | undefined;
}

export enum ConnectionPoolerConfig_PoolingMode {
  POOLING_MODE_UNSPECIFIED = 0,
  /** SESSION - Session pooling mode. */
  SESSION = 1,
  /** TRANSACTION - Transaction pooling mode. */
  TRANSACTION = 2,
  /** STATEMENT - Statement pooling mode. */
  STATEMENT = 3,
  UNRECOGNIZED = -1,
}

export function connectionPoolerConfig_PoolingModeFromJSON(object: any): ConnectionPoolerConfig_PoolingMode {
  switch (object) {
    case 0:
    case "POOLING_MODE_UNSPECIFIED":
      return ConnectionPoolerConfig_PoolingMode.POOLING_MODE_UNSPECIFIED;
    case 1:
    case "SESSION":
      return ConnectionPoolerConfig_PoolingMode.SESSION;
    case 2:
    case "TRANSACTION":
      return ConnectionPoolerConfig_PoolingMode.TRANSACTION;
    case 3:
    case "STATEMENT":
      return ConnectionPoolerConfig_PoolingMode.STATEMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionPoolerConfig_PoolingMode.UNRECOGNIZED;
  }
}

export function connectionPoolerConfig_PoolingModeToJSON(object: ConnectionPoolerConfig_PoolingMode): string {
  switch (object) {
    case ConnectionPoolerConfig_PoolingMode.POOLING_MODE_UNSPECIFIED:
      return "POOLING_MODE_UNSPECIFIED";
    case ConnectionPoolerConfig_PoolingMode.SESSION:
      return "SESSION";
    case ConnectionPoolerConfig_PoolingMode.TRANSACTION:
      return "TRANSACTION";
    case ConnectionPoolerConfig_PoolingMode.STATEMENT:
      return "STATEMENT";
    case ConnectionPoolerConfig_PoolingMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Host {
  $type: "yandex.cloud.mdb.postgresql.v1.Host";
  /**
   * Name of the PostgreSQL host. The host name is assigned by MDB at creation time, and cannot be changed.
   * 1-63 characters long.
   *
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the PostgreSQL host. The ID is assigned by MDB at creation time. */
  clusterId: string;
  /** ID of the availability zone where the PostgreSQL host resides. */
  zoneId: string;
  /** Resources allocated to the PostgreSQL host. */
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
  /** Name of the host to be used as the replication source for cascading replication. */
  replicationSource: string;
  /**
   * Priority of the host as a replica. Higher value means higher priority.
   *
   * The host with the highest priority is the synchronous replica. All others are asynchronous.
   * The synchronous replica replaces the master when needed.
   *
   * When a replica becomes the master, its priority is ignored.
   */
  priority?:
    | number
    | undefined;
  /** Configuration of a PostgreSQL server for the host. */
  config?:
    | HostConfig
    | undefined;
  /** Flag showing public IP assignment status to this host. */
  assignPublicIp: boolean;
  replicaType: Host_ReplicaType;
}

export enum Host_Role {
  /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
  ROLE_UNKNOWN = 0,
  /** MASTER - Host is the master PostgreSQL server in the cluster. */
  MASTER = 1,
  /** REPLICA - Host is a replica (standby) PostgreSQL server in the cluster. */
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

export enum Host_ReplicaType {
  /** REPLICA_TYPE_UNKNOWN - Replica type is unknown (we have no data) or it's master */
  REPLICA_TYPE_UNKNOWN = 0,
  ASYNC = 1,
  SYNC = 2,
  QUORUM = 3,
  UNRECOGNIZED = -1,
}

export function host_ReplicaTypeFromJSON(object: any): Host_ReplicaType {
  switch (object) {
    case 0:
    case "REPLICA_TYPE_UNKNOWN":
      return Host_ReplicaType.REPLICA_TYPE_UNKNOWN;
    case 1:
    case "ASYNC":
      return Host_ReplicaType.ASYNC;
    case 2:
    case "SYNC":
      return Host_ReplicaType.SYNC;
    case 3:
    case "QUORUM":
      return Host_ReplicaType.QUORUM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_ReplicaType.UNRECOGNIZED;
  }
}

export function host_ReplicaTypeToJSON(object: Host_ReplicaType): string {
  switch (object) {
    case Host_ReplicaType.REPLICA_TYPE_UNKNOWN:
      return "REPLICA_TYPE_UNKNOWN";
    case Host_ReplicaType.ASYNC:
      return "ASYNC";
    case Host_ReplicaType.SYNC:
      return "SYNC";
    case Host_ReplicaType.QUORUM:
      return "QUORUM";
    case Host_ReplicaType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Host_Health {
  /** HEALTH_UNKNOWN - Health of the host is unknown. */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - The host is performing all its functions normally. */
  ALIVE = 1,
  /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
  DEGRADED = 3,
  /** READONLY - The host is alive, but in read-only mode. */
  READONLY = 4,
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
    case 4:
    case "READONLY":
      return Host_Health.READONLY;
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
    case Host_Health.READONLY:
      return "READONLY";
    case Host_Health.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface HostConfig {
  $type: "yandex.cloud.mdb.postgresql.v1.HostConfig";
  /** Configuration for a host with PostgreSQL 9.6 server deployed. */
  postgresqlConfig96?:
    | PostgresqlHostConfig96
    | undefined;
  /** Configuration for a host with PostgreSQL 10 1C server deployed. */
  postgresqlConfig101c?:
    | PostgresqlHostConfig101C
    | undefined;
  /** Configuration for a host with PostgreSQL 10 server deployed. */
  postgresqlConfig10?:
    | PostgresqlHostConfig10
    | undefined;
  /** Configuration for a host with PostgreSQL 11 server deployed. */
  postgresqlConfig11?:
    | PostgresqlHostConfig11
    | undefined;
  /** Configuration for a host with PostgreSQL 11 1C server deployed. */
  postgresqlConfig111c?:
    | PostgresqlHostConfig111C
    | undefined;
  /** Configuration for a host with PostgreSQL 12 server deployed. */
  postgresqlConfig12?:
    | PostgresqlHostConfig12
    | undefined;
  /** Configuration for a host with PostgreSQL 12 1C server deployed. */
  postgresqlConfig121c?:
    | PostgresqlHostConfig121C
    | undefined;
  /** Configuration for a host with PostgreSQL 13 server deployed. */
  postgresqlConfig13?:
    | PostgresqlHostConfig13
    | undefined;
  /** Configuration for a host with PostgreSQL 13 1C server deployed. */
  postgresqlConfig131c?:
    | PostgresqlHostConfig131C
    | undefined;
  /** Configuration for a host with PostgreSQL 14 server deployed. */
  postgresqlConfig14?:
    | PostgresqlHostConfig14
    | undefined;
  /** Configuration for a host with PostgreSQL 14 1C server deployed. */
  postgresqlConfig141c?:
    | PostgresqlHostConfig141C
    | undefined;
  /** Configuration for a host with PostgreSQL 15 server deployed. */
  postgresqlConfig15?:
    | PostgresqlHostConfig15
    | undefined;
  /** Configuration for a host with PostgreSQL 15 1C server deployed. */
  postgresqlConfig151c?:
    | PostgresqlHostConfig151C
    | undefined;
  /** Configuration for a host with PostgreSQL 16 server deployed. */
  postgresqlConfig16?:
    | PostgresqlHostConfig16
    | undefined;
  /** Configuration for a host with PostgreSQL 16 1C server deployed. */
  postgresqlConfig161c?: PostgresqlHostConfig161C | undefined;
}

export interface Service {
  $type: "yandex.cloud.mdb.postgresql.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Status code of server availability. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** POSTGRESQL - The host is a PostgreSQL server. */
  POSTGRESQL = 1,
  /** POOLER - The host is a PgBouncer server. */
  POOLER = 2,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "POSTGRESQL":
      return Service_Type.POSTGRESQL;
    case 2:
    case "POOLER":
      return Service_Type.POOLER;
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
    case Service_Type.POSTGRESQL:
      return "POSTGRESQL";
    case Service_Type.POOLER:
      return "POOLER";
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
  /** READONLY - The server is in read-only mode. */
  READONLY = 3,
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
    case 3:
    case "READONLY":
      return Service_Health.READONLY;
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
    case Service_Health.READONLY:
      return "READONLY";
    case Service_Health.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Resources {
  $type: "yandex.cloud.mdb.postgresql.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/managed-postgresql/concepts/instance-types).
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
  $type: "yandex.cloud.mdb.postgresql.v1.Access";
  /** Allow access for DataLens */
  dataLens: boolean;
  /**
   * Allow SQL queries to the cluster databases from the management console.
   *
   * See [SQL queries in the management console](/docs/managed-postgresql/operations/web-sql-query) for more details.
   */
  webSql: boolean;
  /** Allow access for Serverless */
  serverless: boolean;
  /** Allow access for DataTransfer. */
  dataTransfer: boolean;
  /** Allow access for YandexQuery. */
  yandexQuery: boolean;
}

export interface PerformanceDiagnostics {
  $type: "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics";
  /** Configuration setting which enables/disables performance diagnostics service in cluster. */
  enabled: boolean;
  /** Interval (in seconds) for pg_stat_activity sampling */
  sessionsSamplingInterval: number;
  /** Interval (in seconds) for pg_stat_statements sampling */
  statementsSamplingInterval: number;
}

export interface DiskSizeAutoscaling {
  $type: "yandex.cloud.mdb.postgresql.v1.DiskSizeAutoscaling";
  /** Threshold of storage usage (in percent) that triggers automatic scaling of the storage during the maintenance window. Zero value means disabled threshold. */
  plannedUsageThreshold: number;
  /** Threshold of storage usage (in percent) that triggers immediate automatic scaling of the storage. Zero value means disabled threshold. */
  emergencyUsageThreshold: number;
  /** New storage size (in bytes) that is set when one of the thresholds is achieved. */
  diskSizeLimit: number;
}

function createBaseCluster(): Cluster {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.Cluster",
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
    maintenanceWindow: undefined,
    plannedOperation: undefined,
    securityGroupIds: [],
    deletionProtection: false,
    hostGroupIds: [],
  };
}

export const Cluster = {
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster" as const,

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
        $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry",
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
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(106).fork()).ldelim();
    }
    if (message.plannedOperation !== undefined) {
      MaintenanceOperation.encode(message.plannedOperation, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(122).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(128).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(138).string(v!);
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

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.plannedOperation = MaintenanceOperation.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.hostGroupIds.push(reader.string());
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
      hostGroupIds: globalThis.Array.isArray(object?.hostGroupIds)
        ? object.hostGroupIds.map((e: any) => globalThis.String(e))
        : [],
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
    if (message.hostGroupIds?.length) {
      obj.hostGroupIds = message.hostGroupIds;
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
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    message.plannedOperation = (object.plannedOperation !== undefined && object.plannedOperation !== null)
      ? MaintenanceOperation.fromPartial(object.plannedOperation)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

function createBaseCluster_LabelsEntry(): Cluster_LabelsEntry {
  return { $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry", key: "", value: "" };
}

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.Monitoring", name: "", description: "", link: "" };
}

export const Monitoring = {
  $type: "yandex.cloud.mdb.postgresql.v1.Monitoring" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.ClusterConfig",
    version: "",
    postgresqlConfig96: undefined,
    postgresqlConfig101c: undefined,
    postgresqlConfig10: undefined,
    postgresqlConfig11: undefined,
    postgresqlConfig111c: undefined,
    postgresqlConfig12: undefined,
    postgresqlConfig121c: undefined,
    postgresqlConfig13: undefined,
    postgresqlConfig131c: undefined,
    postgresqlConfig14: undefined,
    postgresqlConfig141c: undefined,
    postgresqlConfig15: undefined,
    postgresqlConfig151c: undefined,
    postgresqlConfig16: undefined,
    postgresqlConfig161c: undefined,
    poolerConfig: undefined,
    resources: undefined,
    autofailover: undefined,
    backupWindowStart: undefined,
    backupRetainPeriodDays: undefined,
    access: undefined,
    performanceDiagnostics: undefined,
    diskSizeAutoscaling: undefined,
  };
}

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.postgresql.v1.ClusterConfig" as const,

  encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.postgresqlConfig96 !== undefined) {
      PostgresqlConfigSet96.encode(message.postgresqlConfig96, writer.uint32(18).fork()).ldelim();
    }
    if (message.postgresqlConfig101c !== undefined) {
      PostgresqlConfigSet101C.encode(message.postgresqlConfig101c, writer.uint32(82).fork()).ldelim();
    }
    if (message.postgresqlConfig10 !== undefined) {
      PostgresqlConfigSet10.encode(message.postgresqlConfig10, writer.uint32(26).fork()).ldelim();
    }
    if (message.postgresqlConfig11 !== undefined) {
      PostgresqlConfigSet11.encode(message.postgresqlConfig11, writer.uint32(66).fork()).ldelim();
    }
    if (message.postgresqlConfig111c !== undefined) {
      PostgresqlConfigSet111C.encode(message.postgresqlConfig111c, writer.uint32(106).fork()).ldelim();
    }
    if (message.postgresqlConfig12 !== undefined) {
      PostgresqlConfigSet12.encode(message.postgresqlConfig12, writer.uint32(90).fork()).ldelim();
    }
    if (message.postgresqlConfig121c !== undefined) {
      PostgresqlConfigSet121C.encode(message.postgresqlConfig121c, writer.uint32(114).fork()).ldelim();
    }
    if (message.postgresqlConfig13 !== undefined) {
      PostgresqlConfigSet13.encode(message.postgresqlConfig13, writer.uint32(122).fork()).ldelim();
    }
    if (message.postgresqlConfig131c !== undefined) {
      PostgresqlConfigSet131C.encode(message.postgresqlConfig131c, writer.uint32(146).fork()).ldelim();
    }
    if (message.postgresqlConfig14 !== undefined) {
      PostgresqlConfigSet14.encode(message.postgresqlConfig14, writer.uint32(130).fork()).ldelim();
    }
    if (message.postgresqlConfig141c !== undefined) {
      PostgresqlConfigSet141C.encode(message.postgresqlConfig141c, writer.uint32(154).fork()).ldelim();
    }
    if (message.postgresqlConfig15 !== undefined) {
      PostgresqlConfigSet15.encode(message.postgresqlConfig15, writer.uint32(170).fork()).ldelim();
    }
    if (message.postgresqlConfig151c !== undefined) {
      PostgresqlConfigSet151C.encode(message.postgresqlConfig151c, writer.uint32(178).fork()).ldelim();
    }
    if (message.postgresqlConfig16 !== undefined) {
      PostgresqlConfigSet16.encode(message.postgresqlConfig16, writer.uint32(194).fork()).ldelim();
    }
    if (message.postgresqlConfig161c !== undefined) {
      PostgresqlConfigSet161C.encode(message.postgresqlConfig161c, writer.uint32(202).fork()).ldelim();
    }
    if (message.poolerConfig !== undefined) {
      ConnectionPoolerConfig.encode(message.poolerConfig, writer.uint32(34).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.autofailover !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.autofailover! }, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(58).fork()).ldelim();
    }
    if (message.backupRetainPeriodDays !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backupRetainPeriodDays! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(74).fork()).ldelim();
    }
    if (message.performanceDiagnostics !== undefined) {
      PerformanceDiagnostics.encode(message.performanceDiagnostics, writer.uint32(98).fork()).ldelim();
    }
    if (message.diskSizeAutoscaling !== undefined) {
      DiskSizeAutoscaling.encode(message.diskSizeAutoscaling, writer.uint32(186).fork()).ldelim();
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

          message.postgresqlConfig96 = PostgresqlConfigSet96.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.postgresqlConfig101c = PostgresqlConfigSet101C.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.postgresqlConfig10 = PostgresqlConfigSet10.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.postgresqlConfig11 = PostgresqlConfigSet11.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.postgresqlConfig111c = PostgresqlConfigSet111C.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.postgresqlConfig12 = PostgresqlConfigSet12.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.postgresqlConfig121c = PostgresqlConfigSet121C.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.postgresqlConfig13 = PostgresqlConfigSet13.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.postgresqlConfig131c = PostgresqlConfigSet131C.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.postgresqlConfig14 = PostgresqlConfigSet14.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.postgresqlConfig141c = PostgresqlConfigSet141C.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.postgresqlConfig15 = PostgresqlConfigSet15.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.postgresqlConfig151c = PostgresqlConfigSet151C.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.postgresqlConfig16 = PostgresqlConfigSet16.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.postgresqlConfig161c = PostgresqlConfigSet161C.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.poolerConfig = ConnectionPoolerConfig.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.autofailover = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.backupRetainPeriodDays = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.performanceDiagnostics = PerformanceDiagnostics.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(reader, reader.uint32());
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
      postgresqlConfig96: isSet(object.postgresqlConfig_9_6)
        ? PostgresqlConfigSet96.fromJSON(object.postgresqlConfig_9_6)
        : undefined,
      postgresqlConfig101c: isSet(object.postgresqlConfig_10_1c)
        ? PostgresqlConfigSet101C.fromJSON(object.postgresqlConfig_10_1c)
        : undefined,
      postgresqlConfig10: isSet(object.postgresqlConfig_10)
        ? PostgresqlConfigSet10.fromJSON(object.postgresqlConfig_10)
        : undefined,
      postgresqlConfig11: isSet(object.postgresqlConfig_11)
        ? PostgresqlConfigSet11.fromJSON(object.postgresqlConfig_11)
        : undefined,
      postgresqlConfig111c: isSet(object.postgresqlConfig_11_1c)
        ? PostgresqlConfigSet111C.fromJSON(object.postgresqlConfig_11_1c)
        : undefined,
      postgresqlConfig12: isSet(object.postgresqlConfig_12)
        ? PostgresqlConfigSet12.fromJSON(object.postgresqlConfig_12)
        : undefined,
      postgresqlConfig121c: isSet(object.postgresqlConfig_12_1c)
        ? PostgresqlConfigSet121C.fromJSON(object.postgresqlConfig_12_1c)
        : undefined,
      postgresqlConfig13: isSet(object.postgresqlConfig_13)
        ? PostgresqlConfigSet13.fromJSON(object.postgresqlConfig_13)
        : undefined,
      postgresqlConfig131c: isSet(object.postgresqlConfig_13_1c)
        ? PostgresqlConfigSet131C.fromJSON(object.postgresqlConfig_13_1c)
        : undefined,
      postgresqlConfig14: isSet(object.postgresqlConfig_14)
        ? PostgresqlConfigSet14.fromJSON(object.postgresqlConfig_14)
        : undefined,
      postgresqlConfig141c: isSet(object.postgresqlConfig_14_1c)
        ? PostgresqlConfigSet141C.fromJSON(object.postgresqlConfig_14_1c)
        : undefined,
      postgresqlConfig15: isSet(object.postgresqlConfig_15)
        ? PostgresqlConfigSet15.fromJSON(object.postgresqlConfig_15)
        : undefined,
      postgresqlConfig151c: isSet(object.postgresqlConfig_15_1c)
        ? PostgresqlConfigSet151C.fromJSON(object.postgresqlConfig_15_1c)
        : undefined,
      postgresqlConfig16: isSet(object.postgresqlConfig_16)
        ? PostgresqlConfigSet16.fromJSON(object.postgresqlConfig_16)
        : undefined,
      postgresqlConfig161c: isSet(object.postgresqlConfig_16_1c)
        ? PostgresqlConfigSet161C.fromJSON(object.postgresqlConfig_16_1c)
        : undefined,
      poolerConfig: isSet(object.poolerConfig) ? ConnectionPoolerConfig.fromJSON(object.poolerConfig) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      autofailover: isSet(object.autofailover) ? Boolean(object.autofailover) : undefined,
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      backupRetainPeriodDays: isSet(object.backupRetainPeriodDays) ? Number(object.backupRetainPeriodDays) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
      performanceDiagnostics: isSet(object.performanceDiagnostics)
        ? PerformanceDiagnostics.fromJSON(object.performanceDiagnostics)
        : undefined,
      diskSizeAutoscaling: isSet(object.diskSizeAutoscaling)
        ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
        : undefined,
    };
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.postgresqlConfig96 !== undefined) {
      obj.postgresqlConfig_9_6 = PostgresqlConfigSet96.toJSON(message.postgresqlConfig96);
    }
    if (message.postgresqlConfig101c !== undefined) {
      obj.postgresqlConfig_10_1c = PostgresqlConfigSet101C.toJSON(message.postgresqlConfig101c);
    }
    if (message.postgresqlConfig10 !== undefined) {
      obj.postgresqlConfig_10 = PostgresqlConfigSet10.toJSON(message.postgresqlConfig10);
    }
    if (message.postgresqlConfig11 !== undefined) {
      obj.postgresqlConfig_11 = PostgresqlConfigSet11.toJSON(message.postgresqlConfig11);
    }
    if (message.postgresqlConfig111c !== undefined) {
      obj.postgresqlConfig_11_1c = PostgresqlConfigSet111C.toJSON(message.postgresqlConfig111c);
    }
    if (message.postgresqlConfig12 !== undefined) {
      obj.postgresqlConfig_12 = PostgresqlConfigSet12.toJSON(message.postgresqlConfig12);
    }
    if (message.postgresqlConfig121c !== undefined) {
      obj.postgresqlConfig_12_1c = PostgresqlConfigSet121C.toJSON(message.postgresqlConfig121c);
    }
    if (message.postgresqlConfig13 !== undefined) {
      obj.postgresqlConfig_13 = PostgresqlConfigSet13.toJSON(message.postgresqlConfig13);
    }
    if (message.postgresqlConfig131c !== undefined) {
      obj.postgresqlConfig_13_1c = PostgresqlConfigSet131C.toJSON(message.postgresqlConfig131c);
    }
    if (message.postgresqlConfig14 !== undefined) {
      obj.postgresqlConfig_14 = PostgresqlConfigSet14.toJSON(message.postgresqlConfig14);
    }
    if (message.postgresqlConfig141c !== undefined) {
      obj.postgresqlConfig_14_1c = PostgresqlConfigSet141C.toJSON(message.postgresqlConfig141c);
    }
    if (message.postgresqlConfig15 !== undefined) {
      obj.postgresqlConfig_15 = PostgresqlConfigSet15.toJSON(message.postgresqlConfig15);
    }
    if (message.postgresqlConfig151c !== undefined) {
      obj.postgresqlConfig_15_1c = PostgresqlConfigSet151C.toJSON(message.postgresqlConfig151c);
    }
    if (message.postgresqlConfig16 !== undefined) {
      obj.postgresqlConfig_16 = PostgresqlConfigSet16.toJSON(message.postgresqlConfig16);
    }
    if (message.postgresqlConfig161c !== undefined) {
      obj.postgresqlConfig_16_1c = PostgresqlConfigSet161C.toJSON(message.postgresqlConfig161c);
    }
    if (message.poolerConfig !== undefined) {
      obj.poolerConfig = ConnectionPoolerConfig.toJSON(message.poolerConfig);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.autofailover !== undefined) {
      obj.autofailover = message.autofailover;
    }
    if (message.backupWindowStart !== undefined) {
      obj.backupWindowStart = TimeOfDay.toJSON(message.backupWindowStart);
    }
    if (message.backupRetainPeriodDays !== undefined) {
      obj.backupRetainPeriodDays = message.backupRetainPeriodDays;
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    if (message.performanceDiagnostics !== undefined) {
      obj.performanceDiagnostics = PerformanceDiagnostics.toJSON(message.performanceDiagnostics);
    }
    if (message.diskSizeAutoscaling !== undefined) {
      obj.diskSizeAutoscaling = DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling);
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConfig>): ClusterConfig {
    return ClusterConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig {
    const message = createBaseClusterConfig();
    message.version = object.version ?? "";
    message.postgresqlConfig96 = (object.postgresqlConfig96 !== undefined && object.postgresqlConfig96 !== null)
      ? PostgresqlConfigSet96.fromPartial(object.postgresqlConfig96)
      : undefined;
    message.postgresqlConfig101c = (object.postgresqlConfig101c !== undefined && object.postgresqlConfig101c !== null)
      ? PostgresqlConfigSet101C.fromPartial(object.postgresqlConfig101c)
      : undefined;
    message.postgresqlConfig10 = (object.postgresqlConfig10 !== undefined && object.postgresqlConfig10 !== null)
      ? PostgresqlConfigSet10.fromPartial(object.postgresqlConfig10)
      : undefined;
    message.postgresqlConfig11 = (object.postgresqlConfig11 !== undefined && object.postgresqlConfig11 !== null)
      ? PostgresqlConfigSet11.fromPartial(object.postgresqlConfig11)
      : undefined;
    message.postgresqlConfig111c = (object.postgresqlConfig111c !== undefined && object.postgresqlConfig111c !== null)
      ? PostgresqlConfigSet111C.fromPartial(object.postgresqlConfig111c)
      : undefined;
    message.postgresqlConfig12 = (object.postgresqlConfig12 !== undefined && object.postgresqlConfig12 !== null)
      ? PostgresqlConfigSet12.fromPartial(object.postgresqlConfig12)
      : undefined;
    message.postgresqlConfig121c = (object.postgresqlConfig121c !== undefined && object.postgresqlConfig121c !== null)
      ? PostgresqlConfigSet121C.fromPartial(object.postgresqlConfig121c)
      : undefined;
    message.postgresqlConfig13 = (object.postgresqlConfig13 !== undefined && object.postgresqlConfig13 !== null)
      ? PostgresqlConfigSet13.fromPartial(object.postgresqlConfig13)
      : undefined;
    message.postgresqlConfig131c = (object.postgresqlConfig131c !== undefined && object.postgresqlConfig131c !== null)
      ? PostgresqlConfigSet131C.fromPartial(object.postgresqlConfig131c)
      : undefined;
    message.postgresqlConfig14 = (object.postgresqlConfig14 !== undefined && object.postgresqlConfig14 !== null)
      ? PostgresqlConfigSet14.fromPartial(object.postgresqlConfig14)
      : undefined;
    message.postgresqlConfig141c = (object.postgresqlConfig141c !== undefined && object.postgresqlConfig141c !== null)
      ? PostgresqlConfigSet141C.fromPartial(object.postgresqlConfig141c)
      : undefined;
    message.postgresqlConfig15 = (object.postgresqlConfig15 !== undefined && object.postgresqlConfig15 !== null)
      ? PostgresqlConfigSet15.fromPartial(object.postgresqlConfig15)
      : undefined;
    message.postgresqlConfig151c = (object.postgresqlConfig151c !== undefined && object.postgresqlConfig151c !== null)
      ? PostgresqlConfigSet151C.fromPartial(object.postgresqlConfig151c)
      : undefined;
    message.postgresqlConfig16 = (object.postgresqlConfig16 !== undefined && object.postgresqlConfig16 !== null)
      ? PostgresqlConfigSet16.fromPartial(object.postgresqlConfig16)
      : undefined;
    message.postgresqlConfig161c = (object.postgresqlConfig161c !== undefined && object.postgresqlConfig161c !== null)
      ? PostgresqlConfigSet161C.fromPartial(object.postgresqlConfig161c)
      : undefined;
    message.poolerConfig = (object.poolerConfig !== undefined && object.poolerConfig !== null)
      ? ConnectionPoolerConfig.fromPartial(object.poolerConfig)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.autofailover = object.autofailover ?? undefined;
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    message.performanceDiagnostics =
      (object.performanceDiagnostics !== undefined && object.performanceDiagnostics !== null)
        ? PerformanceDiagnostics.fromPartial(object.performanceDiagnostics)
        : undefined;
    message.diskSizeAutoscaling = (object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null)
      ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

function createBaseConnectionPoolerConfig(): ConnectionPoolerConfig {
  return { $type: "yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig", poolingMode: 0, poolDiscard: undefined };
}

export const ConnectionPoolerConfig = {
  $type: "yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig" as const,

  encode(message: ConnectionPoolerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolingMode !== 0) {
      writer.uint32(8).int32(message.poolingMode);
    }
    if (message.poolDiscard !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.poolDiscard! }, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPoolerConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionPoolerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolingMode = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.poolDiscard = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionPoolerConfig {
    return {
      $type: ConnectionPoolerConfig.$type,
      poolingMode: isSet(object.poolingMode) ? connectionPoolerConfig_PoolingModeFromJSON(object.poolingMode) : 0,
      poolDiscard: isSet(object.poolDiscard) ? Boolean(object.poolDiscard) : undefined,
    };
  },

  toJSON(message: ConnectionPoolerConfig): unknown {
    const obj: any = {};
    if (message.poolingMode !== 0) {
      obj.poolingMode = connectionPoolerConfig_PoolingModeToJSON(message.poolingMode);
    }
    if (message.poolDiscard !== undefined) {
      obj.poolDiscard = message.poolDiscard;
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectionPoolerConfig>): ConnectionPoolerConfig {
    return ConnectionPoolerConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionPoolerConfig>): ConnectionPoolerConfig {
    const message = createBaseConnectionPoolerConfig();
    message.poolingMode = object.poolingMode ?? 0;
    message.poolDiscard = object.poolDiscard ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectionPoolerConfig.$type, ConnectionPoolerConfig);

function createBaseHost(): Host {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    resources: undefined,
    role: 0,
    health: 0,
    services: [],
    subnetId: "",
    replicationSource: "",
    priority: undefined,
    config: undefined,
    assignPublicIp: false,
    replicaType: 0,
  };
}

export const Host = {
  $type: "yandex.cloud.mdb.postgresql.v1.Host" as const,

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
    if (message.replicationSource !== "") {
      writer.uint32(74).string(message.replicationSource);
    }
    if (message.priority !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.priority! }, writer.uint32(82).fork())
        .ldelim();
    }
    if (message.config !== undefined) {
      HostConfig.encode(message.config, writer.uint32(90).fork()).ldelim();
    }
    if (message.assignPublicIp === true) {
      writer.uint32(96).bool(message.assignPublicIp);
    }
    if (message.replicaType !== 0) {
      writer.uint32(104).int32(message.replicaType);
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
          if (tag !== 74) {
            break;
          }

          message.replicationSource = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.priority = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.config = HostConfig.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.replicaType = reader.int32() as any;
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
      replicationSource: isSet(object.replicationSource) ? globalThis.String(object.replicationSource) : "",
      priority: isSet(object.priority) ? Number(object.priority) : undefined,
      config: isSet(object.config) ? HostConfig.fromJSON(object.config) : undefined,
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      replicaType: isSet(object.replicaType) ? host_ReplicaTypeFromJSON(object.replicaType) : 0,
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
    if (message.replicationSource !== "") {
      obj.replicationSource = message.replicationSource;
    }
    if (message.priority !== undefined) {
      obj.priority = message.priority;
    }
    if (message.config !== undefined) {
      obj.config = HostConfig.toJSON(message.config);
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    if (message.replicaType !== 0) {
      obj.replicaType = host_ReplicaTypeToJSON(message.replicaType);
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
    message.replicationSource = object.replicationSource ?? "";
    message.priority = object.priority ?? undefined;
    message.config = (object.config !== undefined && object.config !== null)
      ? HostConfig.fromPartial(object.config)
      : undefined;
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.replicaType = object.replicaType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

function createBaseHostConfig(): HostConfig {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.HostConfig",
    postgresqlConfig96: undefined,
    postgresqlConfig101c: undefined,
    postgresqlConfig10: undefined,
    postgresqlConfig11: undefined,
    postgresqlConfig111c: undefined,
    postgresqlConfig12: undefined,
    postgresqlConfig121c: undefined,
    postgresqlConfig13: undefined,
    postgresqlConfig131c: undefined,
    postgresqlConfig14: undefined,
    postgresqlConfig141c: undefined,
    postgresqlConfig15: undefined,
    postgresqlConfig151c: undefined,
    postgresqlConfig16: undefined,
    postgresqlConfig161c: undefined,
  };
}

export const HostConfig = {
  $type: "yandex.cloud.mdb.postgresql.v1.HostConfig" as const,

  encode(message: HostConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postgresqlConfig96 !== undefined) {
      PostgresqlHostConfig96.encode(message.postgresqlConfig96, writer.uint32(10).fork()).ldelim();
    }
    if (message.postgresqlConfig101c !== undefined) {
      PostgresqlHostConfig101C.encode(message.postgresqlConfig101c, writer.uint32(34).fork()).ldelim();
    }
    if (message.postgresqlConfig10 !== undefined) {
      PostgresqlHostConfig10.encode(message.postgresqlConfig10, writer.uint32(18).fork()).ldelim();
    }
    if (message.postgresqlConfig11 !== undefined) {
      PostgresqlHostConfig11.encode(message.postgresqlConfig11, writer.uint32(26).fork()).ldelim();
    }
    if (message.postgresqlConfig111c !== undefined) {
      PostgresqlHostConfig111C.encode(message.postgresqlConfig111c, writer.uint32(50).fork()).ldelim();
    }
    if (message.postgresqlConfig12 !== undefined) {
      PostgresqlHostConfig12.encode(message.postgresqlConfig12, writer.uint32(42).fork()).ldelim();
    }
    if (message.postgresqlConfig121c !== undefined) {
      PostgresqlHostConfig121C.encode(message.postgresqlConfig121c, writer.uint32(58).fork()).ldelim();
    }
    if (message.postgresqlConfig13 !== undefined) {
      PostgresqlHostConfig13.encode(message.postgresqlConfig13, writer.uint32(66).fork()).ldelim();
    }
    if (message.postgresqlConfig131c !== undefined) {
      PostgresqlHostConfig131C.encode(message.postgresqlConfig131c, writer.uint32(82).fork()).ldelim();
    }
    if (message.postgresqlConfig14 !== undefined) {
      PostgresqlHostConfig14.encode(message.postgresqlConfig14, writer.uint32(74).fork()).ldelim();
    }
    if (message.postgresqlConfig141c !== undefined) {
      PostgresqlHostConfig141C.encode(message.postgresqlConfig141c, writer.uint32(90).fork()).ldelim();
    }
    if (message.postgresqlConfig15 !== undefined) {
      PostgresqlHostConfig15.encode(message.postgresqlConfig15, writer.uint32(98).fork()).ldelim();
    }
    if (message.postgresqlConfig151c !== undefined) {
      PostgresqlHostConfig151C.encode(message.postgresqlConfig151c, writer.uint32(106).fork()).ldelim();
    }
    if (message.postgresqlConfig16 !== undefined) {
      PostgresqlHostConfig16.encode(message.postgresqlConfig16, writer.uint32(114).fork()).ldelim();
    }
    if (message.postgresqlConfig161c !== undefined) {
      PostgresqlHostConfig161C.encode(message.postgresqlConfig161c, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.postgresqlConfig96 = PostgresqlHostConfig96.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.postgresqlConfig101c = PostgresqlHostConfig101C.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.postgresqlConfig10 = PostgresqlHostConfig10.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.postgresqlConfig11 = PostgresqlHostConfig11.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.postgresqlConfig111c = PostgresqlHostConfig111C.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.postgresqlConfig12 = PostgresqlHostConfig12.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.postgresqlConfig121c = PostgresqlHostConfig121C.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.postgresqlConfig13 = PostgresqlHostConfig13.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.postgresqlConfig131c = PostgresqlHostConfig131C.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.postgresqlConfig14 = PostgresqlHostConfig14.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.postgresqlConfig141c = PostgresqlHostConfig141C.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.postgresqlConfig15 = PostgresqlHostConfig15.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.postgresqlConfig151c = PostgresqlHostConfig151C.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.postgresqlConfig16 = PostgresqlHostConfig16.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.postgresqlConfig161c = PostgresqlHostConfig161C.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HostConfig {
    return {
      $type: HostConfig.$type,
      postgresqlConfig96: isSet(object.postgresqlHostConfig_9_6)
        ? PostgresqlHostConfig96.fromJSON(object.postgresqlHostConfig_9_6)
        : undefined,
      postgresqlConfig101c: isSet(object.postgresqlHostConfig_10_1c)
        ? PostgresqlHostConfig101C.fromJSON(object.postgresqlHostConfig_10_1c)
        : undefined,
      postgresqlConfig10: isSet(object.postgresqlHostConfig_10)
        ? PostgresqlHostConfig10.fromJSON(object.postgresqlHostConfig_10)
        : undefined,
      postgresqlConfig11: isSet(object.postgresqlHostConfig_11)
        ? PostgresqlHostConfig11.fromJSON(object.postgresqlHostConfig_11)
        : undefined,
      postgresqlConfig111c: isSet(object.postgresqlHostConfig_11_1c)
        ? PostgresqlHostConfig111C.fromJSON(object.postgresqlHostConfig_11_1c)
        : undefined,
      postgresqlConfig12: isSet(object.postgresqlHostConfig_12)
        ? PostgresqlHostConfig12.fromJSON(object.postgresqlHostConfig_12)
        : undefined,
      postgresqlConfig121c: isSet(object.postgresqlHostConfig_12_1c)
        ? PostgresqlHostConfig121C.fromJSON(object.postgresqlHostConfig_12_1c)
        : undefined,
      postgresqlConfig13: isSet(object.postgresqlHostConfig_13)
        ? PostgresqlHostConfig13.fromJSON(object.postgresqlHostConfig_13)
        : undefined,
      postgresqlConfig131c: isSet(object.postgresqlHostConfig_13_1c)
        ? PostgresqlHostConfig131C.fromJSON(object.postgresqlHostConfig_13_1c)
        : undefined,
      postgresqlConfig14: isSet(object.postgresqlHostConfig_14)
        ? PostgresqlHostConfig14.fromJSON(object.postgresqlHostConfig_14)
        : undefined,
      postgresqlConfig141c: isSet(object.postgresqlHostConfig_14_1c)
        ? PostgresqlHostConfig141C.fromJSON(object.postgresqlHostConfig_14_1c)
        : undefined,
      postgresqlConfig15: isSet(object.postgresqlHostConfig_15)
        ? PostgresqlHostConfig15.fromJSON(object.postgresqlHostConfig_15)
        : undefined,
      postgresqlConfig151c: isSet(object.postgresqlHostConfig_15_1c)
        ? PostgresqlHostConfig151C.fromJSON(object.postgresqlHostConfig_15_1c)
        : undefined,
      postgresqlConfig16: isSet(object.postgresqlHostConfig_16)
        ? PostgresqlHostConfig16.fromJSON(object.postgresqlHostConfig_16)
        : undefined,
      postgresqlConfig161c: isSet(object.postgresqlHostConfig_16_1c)
        ? PostgresqlHostConfig161C.fromJSON(object.postgresqlHostConfig_16_1c)
        : undefined,
    };
  },

  toJSON(message: HostConfig): unknown {
    const obj: any = {};
    if (message.postgresqlConfig96 !== undefined) {
      obj.postgresqlHostConfig_9_6 = PostgresqlHostConfig96.toJSON(message.postgresqlConfig96);
    }
    if (message.postgresqlConfig101c !== undefined) {
      obj.postgresqlHostConfig_10_1c = PostgresqlHostConfig101C.toJSON(message.postgresqlConfig101c);
    }
    if (message.postgresqlConfig10 !== undefined) {
      obj.postgresqlHostConfig_10 = PostgresqlHostConfig10.toJSON(message.postgresqlConfig10);
    }
    if (message.postgresqlConfig11 !== undefined) {
      obj.postgresqlHostConfig_11 = PostgresqlHostConfig11.toJSON(message.postgresqlConfig11);
    }
    if (message.postgresqlConfig111c !== undefined) {
      obj.postgresqlHostConfig_11_1c = PostgresqlHostConfig111C.toJSON(message.postgresqlConfig111c);
    }
    if (message.postgresqlConfig12 !== undefined) {
      obj.postgresqlHostConfig_12 = PostgresqlHostConfig12.toJSON(message.postgresqlConfig12);
    }
    if (message.postgresqlConfig121c !== undefined) {
      obj.postgresqlHostConfig_12_1c = PostgresqlHostConfig121C.toJSON(message.postgresqlConfig121c);
    }
    if (message.postgresqlConfig13 !== undefined) {
      obj.postgresqlHostConfig_13 = PostgresqlHostConfig13.toJSON(message.postgresqlConfig13);
    }
    if (message.postgresqlConfig131c !== undefined) {
      obj.postgresqlHostConfig_13_1c = PostgresqlHostConfig131C.toJSON(message.postgresqlConfig131c);
    }
    if (message.postgresqlConfig14 !== undefined) {
      obj.postgresqlHostConfig_14 = PostgresqlHostConfig14.toJSON(message.postgresqlConfig14);
    }
    if (message.postgresqlConfig141c !== undefined) {
      obj.postgresqlHostConfig_14_1c = PostgresqlHostConfig141C.toJSON(message.postgresqlConfig141c);
    }
    if (message.postgresqlConfig15 !== undefined) {
      obj.postgresqlHostConfig_15 = PostgresqlHostConfig15.toJSON(message.postgresqlConfig15);
    }
    if (message.postgresqlConfig151c !== undefined) {
      obj.postgresqlHostConfig_15_1c = PostgresqlHostConfig151C.toJSON(message.postgresqlConfig151c);
    }
    if (message.postgresqlConfig16 !== undefined) {
      obj.postgresqlHostConfig_16 = PostgresqlHostConfig16.toJSON(message.postgresqlConfig16);
    }
    if (message.postgresqlConfig161c !== undefined) {
      obj.postgresqlHostConfig_16_1c = PostgresqlHostConfig161C.toJSON(message.postgresqlConfig161c);
    }
    return obj;
  },

  create(base?: DeepPartial<HostConfig>): HostConfig {
    return HostConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HostConfig>): HostConfig {
    const message = createBaseHostConfig();
    message.postgresqlConfig96 = (object.postgresqlConfig96 !== undefined && object.postgresqlConfig96 !== null)
      ? PostgresqlHostConfig96.fromPartial(object.postgresqlConfig96)
      : undefined;
    message.postgresqlConfig101c = (object.postgresqlConfig101c !== undefined && object.postgresqlConfig101c !== null)
      ? PostgresqlHostConfig101C.fromPartial(object.postgresqlConfig101c)
      : undefined;
    message.postgresqlConfig10 = (object.postgresqlConfig10 !== undefined && object.postgresqlConfig10 !== null)
      ? PostgresqlHostConfig10.fromPartial(object.postgresqlConfig10)
      : undefined;
    message.postgresqlConfig11 = (object.postgresqlConfig11 !== undefined && object.postgresqlConfig11 !== null)
      ? PostgresqlHostConfig11.fromPartial(object.postgresqlConfig11)
      : undefined;
    message.postgresqlConfig111c = (object.postgresqlConfig111c !== undefined && object.postgresqlConfig111c !== null)
      ? PostgresqlHostConfig111C.fromPartial(object.postgresqlConfig111c)
      : undefined;
    message.postgresqlConfig12 = (object.postgresqlConfig12 !== undefined && object.postgresqlConfig12 !== null)
      ? PostgresqlHostConfig12.fromPartial(object.postgresqlConfig12)
      : undefined;
    message.postgresqlConfig121c = (object.postgresqlConfig121c !== undefined && object.postgresqlConfig121c !== null)
      ? PostgresqlHostConfig121C.fromPartial(object.postgresqlConfig121c)
      : undefined;
    message.postgresqlConfig13 = (object.postgresqlConfig13 !== undefined && object.postgresqlConfig13 !== null)
      ? PostgresqlHostConfig13.fromPartial(object.postgresqlConfig13)
      : undefined;
    message.postgresqlConfig131c = (object.postgresqlConfig131c !== undefined && object.postgresqlConfig131c !== null)
      ? PostgresqlHostConfig131C.fromPartial(object.postgresqlConfig131c)
      : undefined;
    message.postgresqlConfig14 = (object.postgresqlConfig14 !== undefined && object.postgresqlConfig14 !== null)
      ? PostgresqlHostConfig14.fromPartial(object.postgresqlConfig14)
      : undefined;
    message.postgresqlConfig141c = (object.postgresqlConfig141c !== undefined && object.postgresqlConfig141c !== null)
      ? PostgresqlHostConfig141C.fromPartial(object.postgresqlConfig141c)
      : undefined;
    message.postgresqlConfig15 = (object.postgresqlConfig15 !== undefined && object.postgresqlConfig15 !== null)
      ? PostgresqlHostConfig15.fromPartial(object.postgresqlConfig15)
      : undefined;
    message.postgresqlConfig151c = (object.postgresqlConfig151c !== undefined && object.postgresqlConfig151c !== null)
      ? PostgresqlHostConfig151C.fromPartial(object.postgresqlConfig151c)
      : undefined;
    message.postgresqlConfig16 = (object.postgresqlConfig16 !== undefined && object.postgresqlConfig16 !== null)
      ? PostgresqlHostConfig16.fromPartial(object.postgresqlConfig16)
      : undefined;
    message.postgresqlConfig161c = (object.postgresqlConfig161c !== undefined && object.postgresqlConfig161c !== null)
      ? PostgresqlHostConfig161C.fromPartial(object.postgresqlConfig161c)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HostConfig.$type, HostConfig);

function createBaseService(): Service {
  return { $type: "yandex.cloud.mdb.postgresql.v1.Service", type: 0, health: 0 };
}

export const Service = {
  $type: "yandex.cloud.mdb.postgresql.v1.Service" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.Resources", resourcePresetId: "", diskSize: 0, diskTypeId: "" };
}

export const Resources = {
  $type: "yandex.cloud.mdb.postgresql.v1.Resources" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.Access",
    dataLens: false,
    webSql: false,
    serverless: false,
    dataTransfer: false,
    yandexQuery: false,
  };
}

export const Access = {
  $type: "yandex.cloud.mdb.postgresql.v1.Access" as const,

  encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataLens === true) {
      writer.uint32(8).bool(message.dataLens);
    }
    if (message.webSql === true) {
      writer.uint32(16).bool(message.webSql);
    }
    if (message.serverless === true) {
      writer.uint32(24).bool(message.serverless);
    }
    if (message.dataTransfer === true) {
      writer.uint32(32).bool(message.dataTransfer);
    }
    if (message.yandexQuery === true) {
      writer.uint32(40).bool(message.yandexQuery);
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

          message.serverless = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.dataTransfer = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
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
    message.serverless = object.serverless ?? false;
    message.dataTransfer = object.dataTransfer ?? false;
    message.yandexQuery = object.yandexQuery ?? false;
    return message;
  },
};

messageTypeRegistry.set(Access.$type, Access);

function createBasePerformanceDiagnostics(): PerformanceDiagnostics {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics",
    enabled: false,
    sessionsSamplingInterval: 0,
    statementsSamplingInterval: 0,
  };
}

export const PerformanceDiagnostics = {
  $type: "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics" as const,

  encode(message: PerformanceDiagnostics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.sessionsSamplingInterval !== 0) {
      writer.uint32(16).int64(message.sessionsSamplingInterval);
    }
    if (message.statementsSamplingInterval !== 0) {
      writer.uint32(24).int64(message.statementsSamplingInterval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerformanceDiagnostics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerformanceDiagnostics();
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
          if (tag !== 16) {
            break;
          }

          message.sessionsSamplingInterval = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.statementsSamplingInterval = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PerformanceDiagnostics {
    return {
      $type: PerformanceDiagnostics.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      sessionsSamplingInterval: isSet(object.sessionsSamplingInterval)
        ? globalThis.Number(object.sessionsSamplingInterval)
        : 0,
      statementsSamplingInterval: isSet(object.statementsSamplingInterval)
        ? globalThis.Number(object.statementsSamplingInterval)
        : 0,
    };
  },

  toJSON(message: PerformanceDiagnostics): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.sessionsSamplingInterval !== 0) {
      obj.sessionsSamplingInterval = Math.round(message.sessionsSamplingInterval);
    }
    if (message.statementsSamplingInterval !== 0) {
      obj.statementsSamplingInterval = Math.round(message.statementsSamplingInterval);
    }
    return obj;
  },

  create(base?: DeepPartial<PerformanceDiagnostics>): PerformanceDiagnostics {
    return PerformanceDiagnostics.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PerformanceDiagnostics>): PerformanceDiagnostics {
    const message = createBasePerformanceDiagnostics();
    message.enabled = object.enabled ?? false;
    message.sessionsSamplingInterval = object.sessionsSamplingInterval ?? 0;
    message.statementsSamplingInterval = object.statementsSamplingInterval ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PerformanceDiagnostics.$type, PerformanceDiagnostics);

function createBaseDiskSizeAutoscaling(): DiskSizeAutoscaling {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.DiskSizeAutoscaling",
    plannedUsageThreshold: 0,
    emergencyUsageThreshold: 0,
    diskSizeLimit: 0,
  };
}

export const DiskSizeAutoscaling = {
  $type: "yandex.cloud.mdb.postgresql.v1.DiskSizeAutoscaling" as const,

  encode(message: DiskSizeAutoscaling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plannedUsageThreshold !== 0) {
      writer.uint32(8).int64(message.plannedUsageThreshold);
    }
    if (message.emergencyUsageThreshold !== 0) {
      writer.uint32(16).int64(message.emergencyUsageThreshold);
    }
    if (message.diskSizeLimit !== 0) {
      writer.uint32(24).int64(message.diskSizeLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskSizeAutoscaling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskSizeAutoscaling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.plannedUsageThreshold = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.emergencyUsageThreshold = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.diskSizeLimit = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiskSizeAutoscaling {
    return {
      $type: DiskSizeAutoscaling.$type,
      plannedUsageThreshold: isSet(object.plannedUsageThreshold) ? globalThis.Number(object.plannedUsageThreshold) : 0,
      emergencyUsageThreshold: isSet(object.emergencyUsageThreshold)
        ? globalThis.Number(object.emergencyUsageThreshold)
        : 0,
      diskSizeLimit: isSet(object.diskSizeLimit) ? globalThis.Number(object.diskSizeLimit) : 0,
    };
  },

  toJSON(message: DiskSizeAutoscaling): unknown {
    const obj: any = {};
    if (message.plannedUsageThreshold !== 0) {
      obj.plannedUsageThreshold = Math.round(message.plannedUsageThreshold);
    }
    if (message.emergencyUsageThreshold !== 0) {
      obj.emergencyUsageThreshold = Math.round(message.emergencyUsageThreshold);
    }
    if (message.diskSizeLimit !== 0) {
      obj.diskSizeLimit = Math.round(message.diskSizeLimit);
    }
    return obj;
  },

  create(base?: DeepPartial<DiskSizeAutoscaling>): DiskSizeAutoscaling {
    return DiskSizeAutoscaling.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DiskSizeAutoscaling>): DiskSizeAutoscaling {
    const message = createBaseDiskSizeAutoscaling();
    message.plannedUsageThreshold = object.plannedUsageThreshold ?? 0;
    message.emergencyUsageThreshold = object.emergencyUsageThreshold ?? 0;
    message.diskSizeLimit = object.diskSizeLimit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DiskSizeAutoscaling.$type, DiskSizeAutoscaling);

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
