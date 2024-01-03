/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import { TimeOfDay } from "@yandex-cloud/core/dist/generated/google/type/timeofday";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { MongoCfgConfigSet36, MongodConfigSet36, MongosConfigSet36 } from "./config/mongodb3_6";
import { MongoCfgConfigSet40, MongodConfigSet40, MongosConfigSet40 } from "./config/mongodb4_0";
import { MongoCfgConfigSet42, MongodConfigSet42, MongosConfigSet42 } from "./config/mongodb4_2";
import { MongoCfgConfigSet44, MongodConfigSet44, MongosConfigSet44 } from "./config/mongodb4_4";
import {
  MongoCfgConfigSet44Enterprise,
  MongodConfigSet44Enterprise,
  MongosConfigSet44Enterprise,
} from "./config/mongodb4_4_enterprise";
import { MongoCfgConfigSet50, MongodConfigSet50, MongosConfigSet50 } from "./config/mongodb5_0";
import {
  MongoCfgConfigSet50Enterprise,
  MongodConfigSet50Enterprise,
  MongosConfigSet50Enterprise,
} from "./config/mongodb5_0_enterprise";
import { MongoCfgConfigSet60, MongodConfigSet60, MongosConfigSet60 } from "./config/mongodb6_0";
import {
  MongoCfgConfigSet60Enterprise,
  MongodConfigSet60Enterprise,
  MongosConfigSet60Enterprise,
} from "./config/mongodb6_0_enterprise";
import { MaintenanceOperation, MaintenanceWindow } from "./maintenance";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1";

/** A managed MongoDB cluster. For more information, see the [documentation](/docs/managed-mongodb/concepts). */
export interface Cluster {
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster";
  /**
   * ID of the MongoDB cluster.
   * This ID is assigned by MDB at creation time.
   */
  id: string;
  /** ID of the folder that the MongoDB cluster belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the MongoDB cluster.
   * The name is unique within the folder. 1-63 characters long.
   */
  name: string;
  /** Description of the MongoDB cluster. 0-256 characters long. */
  description: string;
  /** Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource. */
  labels: { [key: string]: string };
  /** Deployment environment of the MongoDB cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the MongoDB cluster. */
  monitoring: Monitoring[];
  /** Configuration of the MongoDB cluster. */
  config?:
    | ClusterConfig
    | undefined;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** Indicates current sharding status of the cluster. */
  sharded: boolean;
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

/** Deployment environment. */
export enum Cluster_Environment {
  ENVIRONMENT_UNSPECIFIED = 0,
  /**
   * PRODUCTION - Stable environment with a conservative update policy: only hotfixes
   * are applied during regular maintenance.
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
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Monitoring system. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.mongodb.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the MongoDB cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.ClusterConfig";
  /** Version of MongoDB server software. Possible values: `3.6`, `4.0`, `4.2`, `4.4`, `4.4-enterprise`, `5.0`, `5.0-enterprise`, `6.0`, `6.0-enterprise`. */
  version: string;
  /**
   * MongoDB feature compatibility version. See usage details in [MongoDB documentation](https://docs.mongodb.com/manual/reference/command/setFeatureCompatibilityVersion/).
   *
   * Possible values:
   * * `3.6` - persist data compatibility for version 3.6. After setting this option the data will not be compatible with 3.4 or lower.
   * * `4.0` - persist data compatibility for version 4.0. After setting this option the data will not be compatible with 3.6 or lower.
   * * `4.2` - persist data compatibility for version 4.2. After setting this option the data will not be compatible with 4.0 or lower.
   * * `4.4` - persist data compatibility for version 4.4. After setting this option the data will not be compatible with 4.2 or lower.
   * * `5.0` - persist data compatibility for version 5.0. After setting this option the data will not be compatible with 5.0 or lower.
   * * `6.0` - persist data compatibility for version 6.0. After setting this option the data will not be compatible with 6.0 or lower.
   */
  featureCompatibilityVersion: string;
  /** Configuration and resource allocation for a MongoDB 3.6 cluster. */
  mongodb36?:
    | Mongodb36
    | undefined;
  /** Configuration and resource allocation for a MongoDB 4.0 cluster. */
  mongodb40?:
    | Mongodb40
    | undefined;
  /** Configuration and resource allocation for a MongoDB 4.2 cluster. */
  mongodb42?:
    | Mongodb42
    | undefined;
  /** Configuration and resource allocation for a MongoDB 4.4 cluster. */
  mongodb44?:
    | Mongodb44
    | undefined;
  /** Configuration and resource allocation for a MongoDB 5.0 cluster. */
  mongodb50?:
    | Mongodb50
    | undefined;
  /** Configuration and resource allocation for a MongoDB 6.0 cluster. */
  mongodb60?:
    | Mongodb60
    | undefined;
  /** Configuration and resource allocation for a MongoDB 4.4 Enterprise cluster. */
  mongodb44Enterprise?:
    | Mongodb44Enterprise
    | undefined;
  /** Configuration and resource allocation for a MongoDB 5.0 Enterprise cluster. */
  mongodb50Enterprise?:
    | Mongodb50Enterprise
    | undefined;
  /** Configuration and resource allocation for a MongoDB 6.0 Enterprise cluster. */
  mongodb60Enterprise?:
    | Mongodb60Enterprise
    | undefined;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /** Retain period of automatically created backup in days */
  backupRetainPeriodDays?:
    | number
    | undefined;
  /** Performance Diagnostic */
  performanceDiagnostics?:
    | PerformanceDiagnosticsConfig
    | undefined;
  /** Access policy to DB */
  access?: Access | undefined;
}

export interface Mongodb36 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6";
  /** Configuration and resource allocation for mongod in a MongoDB 3.6 cluster. */
  mongod?:
    | Mongodb36_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg in a MongoDB 3.6 cluster. */
  mongocfg?:
    | Mongodb36_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos in a MongoDB 3.6 cluster. */
  mongos?:
    | Mongodb36_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 3.6 cluster. */
  mongoinfra?: Mongodb36_MongoInfra | undefined;
}

export interface Mongodb36_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod";
  /** Configuration for a mongod 3.6 hosts. */
  config?:
    | MongodConfigSet36
    | undefined;
  /** Resources allocated to MongoDB hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb36_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg";
  config?:
    | MongoCfgConfigSet36
    | undefined;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb36_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos";
  config?:
    | MongosConfigSet36
    | undefined;
  /** Resources allocated to mongos hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb36_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra";
  configMongos?: MongosConfigSet36 | undefined;
  configMongocfg?:
    | MongoCfgConfigSet36
    | undefined;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb40 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0";
  /** Configuration and resource allocation for mongod in a MongoDB 4.0 cluster. */
  mongod?:
    | Mongodb40_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg in a MongoDB 4.0 cluster. */
  mongocfg?:
    | Mongodb40_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos in a MongoDB 4.0 cluster. */
  mongos?:
    | Mongodb40_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.0 cluster. */
  mongoinfra?: Mongodb40_MongoInfra | undefined;
}

export interface Mongodb40_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod";
  /** Configuration for mongod 4.0 hosts. */
  config?:
    | MongodConfigSet40
    | undefined;
  /** Resources allocated to mongod hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb40_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg";
  /** Configuration for mongocfg 4.0 hosts. */
  config?:
    | MongoCfgConfigSet40
    | undefined;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb40_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos";
  /** Configuration for mongos 4.0 hosts. */
  config?:
    | MongosConfigSet40
    | undefined;
  /** Resources allocated to mongos hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb40_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra";
  configMongos?: MongosConfigSet40 | undefined;
  configMongocfg?:
    | MongoCfgConfigSet40
    | undefined;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb42 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2";
  /** Configuration and resource allocation for mongod in a MongoDB 4.2 cluster. */
  mongod?:
    | Mongodb42_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg in a MongoDB 4.2 cluster. */
  mongocfg?:
    | Mongodb42_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos in a MongoDB 4.2 cluster. */
  mongos?:
    | Mongodb42_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.2 cluster. */
  mongoinfra?: Mongodb42_MongoInfra | undefined;
}

export interface Mongodb42_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod";
  /** Configuration for mongod 4.2 hosts. */
  config?:
    | MongodConfigSet42
    | undefined;
  /** Resources allocated to mongod hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb42_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg";
  /** Configuration for mongocfg 4.2 hosts. */
  config?:
    | MongoCfgConfigSet42
    | undefined;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb42_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos";
  /** Configuration for mongos 4.2 hosts. */
  config?:
    | MongosConfigSet42
    | undefined;
  /** Resources allocated to mongos hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb42_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra";
  configMongos?: MongosConfigSet42 | undefined;
  configMongocfg?:
    | MongoCfgConfigSet42
    | undefined;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb44 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4";
  /** Configuration and resource allocation for mongod in a MongoDB 4.4 cluster. */
  mongod?:
    | Mongodb44_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg in a MongoDB 4.4 cluster. */
  mongocfg?:
    | Mongodb44_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos in a MongoDB 4.4 cluster. */
  mongos?:
    | Mongodb44_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.4 cluster. */
  mongoinfra?: Mongodb44_MongoInfra | undefined;
}

export interface Mongodb44_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod";
  /** Configuration for mongod 4.4 hosts. */
  config?:
    | MongodConfigSet44
    | undefined;
  /** Resources allocated to mongod hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb44_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg";
  /** Configuration for mongocfg 4.4 hosts. */
  config?:
    | MongoCfgConfigSet44
    | undefined;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb44_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos";
  /** Configuration for mongos 4.4 hosts. */
  config?:
    | MongosConfigSet44
    | undefined;
  /** Resources allocated to mongos hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb44_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra";
  configMongos?: MongosConfigSet44 | undefined;
  configMongocfg?:
    | MongoCfgConfigSet44
    | undefined;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise";
  /** Configuration and resource allocation for mongod in a MongoDB 4.4 cluster. */
  mongod?:
    | Mongodb44Enterprise_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg in a MongoDB 4.4 cluster. */
  mongocfg?:
    | Mongodb44Enterprise_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos in a MongoDB 4.4 cluster. */
  mongos?:
    | Mongodb44Enterprise_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.4 cluster. */
  mongoinfra?: Mongodb44Enterprise_MongoInfra | undefined;
}

export interface Mongodb44Enterprise_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod";
  /** Configuration for mongod 4.4 hosts. */
  config?:
    | MongodConfigSet44Enterprise
    | undefined;
  /** Resources allocated to mongod hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb44Enterprise_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg";
  /** Configuration for mongocfg 4.4 hosts. */
  config?:
    | MongoCfgConfigSet44Enterprise
    | undefined;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb44Enterprise_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos";
  /** Configuration for mongos 4.4 hosts. */
  config?:
    | MongosConfigSet44Enterprise
    | undefined;
  /** Resources allocated to mongos hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb44Enterprise_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra";
  configMongos?: MongosConfigSet44Enterprise | undefined;
  configMongocfg?:
    | MongoCfgConfigSet44Enterprise
    | undefined;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb50 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0";
  /** Configuration and resource allocation for mongod in a MongoDB 5.0 cluster. */
  mongod?:
    | Mongodb50_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg in a MongoDB 5.0 cluster. */
  mongocfg?:
    | Mongodb50_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos in a MongoDB 5.0 cluster. */
  mongos?:
    | Mongodb50_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 5.0 cluster. */
  mongoinfra?: Mongodb50_MongoInfra | undefined;
}

export interface Mongodb50_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod";
  /** Configuration for mongod 5.0 hosts. */
  config?:
    | MongodConfigSet50
    | undefined;
  /** Resources allocated to mongod hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb50_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg";
  /** Configuration for mongocfg 5.0 hosts. */
  config?:
    | MongoCfgConfigSet50
    | undefined;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb50_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos";
  /** Configuration for mongos 5.0 hosts. */
  config?:
    | MongosConfigSet50
    | undefined;
  /** Resources allocated to mongos hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb50_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra";
  configMongos?: MongosConfigSet50 | undefined;
  configMongocfg?:
    | MongoCfgConfigSet50
    | undefined;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb50Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise";
  /** Configuration and resource allocation for mongod in a MongoDB 5.0 cluster. */
  mongod?:
    | Mongodb50Enterprise_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg in a MongoDB 5.0 cluster. */
  mongocfg?:
    | Mongodb50Enterprise_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos in a MongoDB 5.0 cluster. */
  mongos?:
    | Mongodb50Enterprise_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 5.0 cluster. */
  mongoinfra?: Mongodb50Enterprise_MongoInfra | undefined;
}

export interface Mongodb50Enterprise_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod";
  /** Configuration for mongod 5.0 hosts. */
  config?:
    | MongodConfigSet50Enterprise
    | undefined;
  /** Resources allocated to mongod hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb50Enterprise_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg";
  /** Configuration for mongocfg 5.0 hosts. */
  config?:
    | MongoCfgConfigSet50Enterprise
    | undefined;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb50Enterprise_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos";
  /** Configuration for mongos 5.0 hosts. */
  config?:
    | MongosConfigSet50Enterprise
    | undefined;
  /** Resources allocated to mongos hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb50Enterprise_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra";
  configMongos?: MongosConfigSet50Enterprise | undefined;
  configMongocfg?:
    | MongoCfgConfigSet50Enterprise
    | undefined;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb60 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0";
  /** Configuration and resource allocation for mongod in a MongoDB 6.0 cluster. */
  mongod?:
    | Mongodb60_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg in a MongoDB 6.0 cluster. */
  mongocfg?:
    | Mongodb60_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos in a MongoDB 6.0 cluster. */
  mongos?:
    | Mongodb60_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 6.0 cluster. */
  mongoinfra?: Mongodb60_MongoInfra | undefined;
}

export interface Mongodb60_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongod";
  /** Configuration for mongod 6.0 hosts. */
  config?:
    | MongodConfigSet60
    | undefined;
  /** Resources allocated to mongod hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb60_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoCfg";
  /** Configuration for mongocfg 6.0 hosts. */
  config?:
    | MongoCfgConfigSet60
    | undefined;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb60_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongos";
  /** Configuration for mongos 6.0 hosts. */
  config?:
    | MongosConfigSet60
    | undefined;
  /** Resources allocated to mongos hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb60_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoInfra";
  configMongos?: MongosConfigSet60 | undefined;
  configMongocfg?:
    | MongoCfgConfigSet60
    | undefined;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb60Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise";
  /** Configuration and resource allocation for mongod in a MongoDB 6.0 cluster. */
  mongod?:
    | Mongodb60Enterprise_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg in a MongoDB 6.0 cluster. */
  mongocfg?:
    | Mongodb60Enterprise_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos in a MongoDB 6.0 cluster. */
  mongos?:
    | Mongodb60Enterprise_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 6.0 cluster. */
  mongoinfra?: Mongodb60Enterprise_MongoInfra | undefined;
}

export interface Mongodb60Enterprise_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongod";
  /** Configuration for mongod 6.0 hosts. */
  config?:
    | MongodConfigSet60Enterprise
    | undefined;
  /** Resources allocated to mongod hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb60Enterprise_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoCfg";
  /** Configuration for mongocfg 6.0 hosts. */
  config?:
    | MongoCfgConfigSet60Enterprise
    | undefined;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb60Enterprise_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongos";
  /** Configuration for mongos 6.0 hosts. */
  config?:
    | MongosConfigSet60Enterprise
    | undefined;
  /** Resources allocated to mongos hosts. */
  resources?: Resources | undefined;
}

export interface Mongodb60Enterprise_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoInfra";
  configMongos?: MongosConfigSet60Enterprise | undefined;
  configMongocfg?:
    | MongoCfgConfigSet60Enterprise
    | undefined;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface Shard {
  $type: "yandex.cloud.mdb.mongodb.v1.Shard";
  /** Name of the shard. */
  name: string;
  /** ID of the cluster that the shard belongs to. */
  clusterId: string;
}

export interface Host {
  $type: "yandex.cloud.mdb.mongodb.v1.Host";
  /**
   * Name of the MongoDB host. The host name is assigned by MDB at creation time, and cannot be changed.
   * 1-63 characters long.
   *
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the MongoDB host. The ID is assigned by MDB at creation time. */
  clusterId: string;
  /** ID of the availability zone where the MongoDB host resides. */
  zoneId: string;
  /** Resources allocated to the MongoDB host. */
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
  /** Shard which this host belongs to. */
  shardName: string;
  /** Host type */
  type: Host_Type;
}

export enum Host_Type {
  TYPE_UNSPECIFIED = 0,
  /** MONGOD - A mongod host. */
  MONGOD = 1,
  /** MONGOS - A mongos host. */
  MONGOS = 2,
  /** MONGOCFG - A mongocfg host. */
  MONGOCFG = 3,
  /** MONGOINFRA - A mongoinfra (mongos+mongocfg) host. */
  MONGOINFRA = 4,
  UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Host_Type.TYPE_UNSPECIFIED;
    case 1:
    case "MONGOD":
      return Host_Type.MONGOD;
    case 2:
    case "MONGOS":
      return Host_Type.MONGOS;
    case 3:
    case "MONGOCFG":
      return Host_Type.MONGOCFG;
    case 4:
    case "MONGOINFRA":
      return Host_Type.MONGOINFRA;
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
    case Host_Type.MONGOD:
      return "MONGOD";
    case Host_Type.MONGOS:
      return "MONGOS";
    case Host_Type.MONGOCFG:
      return "MONGOCFG";
    case Host_Type.MONGOINFRA:
      return "MONGOINFRA";
    case Host_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Host_Role {
  /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
  ROLE_UNKNOWN = 0,
  /** PRIMARY - Host is the primary MongoDB server in the cluster. */
  PRIMARY = 1,
  /** SECONDARY - Host is a secondary MongoDB server in the cluster. */
  SECONDARY = 2,
  UNRECOGNIZED = -1,
}

export function host_RoleFromJSON(object: any): Host_Role {
  switch (object) {
    case 0:
    case "ROLE_UNKNOWN":
      return Host_Role.ROLE_UNKNOWN;
    case 1:
    case "PRIMARY":
      return Host_Role.PRIMARY;
    case 2:
    case "SECONDARY":
      return Host_Role.SECONDARY;
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
    case Host_Role.PRIMARY:
      return "PRIMARY";
    case Host_Role.SECONDARY:
      return "SECONDARY";
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
  /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
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
  $type: "yandex.cloud.mdb.mongodb.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Status code of server availability. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** MONGOD - The host is running a mongod daemon. */
  MONGOD = 1,
  /** MONGOS - The host is running a mongos daemon. */
  MONGOS = 2,
  /** MONGOCFG - The host is running a MongoDB config server. */
  MONGOCFG = 3,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "MONGOD":
      return Service_Type.MONGOD;
    case 2:
    case "MONGOS":
      return Service_Type.MONGOS;
    case 3:
    case "MONGOCFG":
      return Service_Type.MONGOCFG;
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
    case Service_Type.MONGOD:
      return "MONGOD";
    case Service_Type.MONGOS:
      return "MONGOS";
    case Service_Type.MONGOCFG:
      return "MONGOCFG";
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
  $type: "yandex.cloud.mdb.mongodb.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/managed-mongodb/concepts/instance-types).
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
  $type: "yandex.cloud.mdb.mongodb.v1.Access";
  /** Allow access for DataLens. */
  dataLens: boolean;
  /** Allow access for DataTransfer. */
  dataTransfer: boolean;
}

export interface PerformanceDiagnosticsConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.PerformanceDiagnosticsConfig";
  profilingEnabled: boolean;
}

function createBaseCluster(): Cluster {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Cluster",
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
    sharded: false,
    maintenanceWindow: undefined,
    plannedOperation: undefined,
    securityGroupIds: [],
    deletionProtection: false,
  };
}

export const Cluster = {
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster" as const,

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
        { $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry", key: key as any, value },
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
    if (message.sharded === true) {
      writer.uint32(104).bool(message.sharded);
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
          if (tag !== 104) {
            break;
          }

          message.sharded = reader.bool();
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
      sharded: isSet(object.sharded) ? globalThis.Boolean(object.sharded) : false,
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
    if (message.sharded === true) {
      obj.sharded = message.sharded;
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
    message.sharded = object.sharded ?? false;
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
  return { $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry", key: "", value: "" };
}

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.Monitoring", name: "", description: "", link: "" };
}

export const Monitoring = {
  $type: "yandex.cloud.mdb.mongodb.v1.Monitoring" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.ClusterConfig",
    version: "",
    featureCompatibilityVersion: "",
    mongodb36: undefined,
    mongodb40: undefined,
    mongodb42: undefined,
    mongodb44: undefined,
    mongodb50: undefined,
    mongodb60: undefined,
    mongodb44Enterprise: undefined,
    mongodb50Enterprise: undefined,
    mongodb60Enterprise: undefined,
    backupWindowStart: undefined,
    backupRetainPeriodDays: undefined,
    performanceDiagnostics: undefined,
    access: undefined,
  };
}

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.ClusterConfig" as const,

  encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.featureCompatibilityVersion !== "") {
      writer.uint32(42).string(message.featureCompatibilityVersion);
    }
    if (message.mongodb36 !== undefined) {
      Mongodb36.encode(message.mongodb36, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongodb40 !== undefined) {
      Mongodb40.encode(message.mongodb40, writer.uint32(34).fork()).ldelim();
    }
    if (message.mongodb42 !== undefined) {
      Mongodb42.encode(message.mongodb42, writer.uint32(58).fork()).ldelim();
    }
    if (message.mongodb44 !== undefined) {
      Mongodb44.encode(message.mongodb44, writer.uint32(66).fork()).ldelim();
    }
    if (message.mongodb50 !== undefined) {
      Mongodb50.encode(message.mongodb50, writer.uint32(82).fork()).ldelim();
    }
    if (message.mongodb60 !== undefined) {
      Mongodb60.encode(message.mongodb60, writer.uint32(114).fork()).ldelim();
    }
    if (message.mongodb44Enterprise !== undefined) {
      Mongodb44Enterprise.encode(message.mongodb44Enterprise, writer.uint32(90).fork()).ldelim();
    }
    if (message.mongodb50Enterprise !== undefined) {
      Mongodb50Enterprise.encode(message.mongodb50Enterprise, writer.uint32(98).fork()).ldelim();
    }
    if (message.mongodb60Enterprise !== undefined) {
      Mongodb60Enterprise.encode(message.mongodb60Enterprise, writer.uint32(122).fork()).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(26).fork()).ldelim();
    }
    if (message.backupRetainPeriodDays !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backupRetainPeriodDays! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.performanceDiagnostics !== undefined) {
      PerformanceDiagnosticsConfig.encode(message.performanceDiagnostics, writer.uint32(106).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(50).fork()).ldelim();
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.featureCompatibilityVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongodb36 = Mongodb36.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongodb40 = Mongodb40.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mongodb42 = Mongodb42.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.mongodb44 = Mongodb44.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.mongodb50 = Mongodb50.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.mongodb60 = Mongodb60.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.mongodb44Enterprise = Mongodb44Enterprise.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.mongodb50Enterprise = Mongodb50Enterprise.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.mongodb60Enterprise = Mongodb60Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.backupRetainPeriodDays = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.performanceDiagnostics = PerformanceDiagnosticsConfig.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
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
      featureCompatibilityVersion: isSet(object.featureCompatibilityVersion)
        ? globalThis.String(object.featureCompatibilityVersion)
        : "",
      mongodb36: isSet(object.mongodb_3_6) ? Mongodb36.fromJSON(object.mongodb_3_6) : undefined,
      mongodb40: isSet(object.mongodb_4_0) ? Mongodb40.fromJSON(object.mongodb_4_0) : undefined,
      mongodb42: isSet(object.mongodb_4_2) ? Mongodb42.fromJSON(object.mongodb_4_2) : undefined,
      mongodb44: isSet(object.mongodb_4_4) ? Mongodb44.fromJSON(object.mongodb_4_4) : undefined,
      mongodb50: isSet(object.mongodb_5_0) ? Mongodb50.fromJSON(object.mongodb_5_0) : undefined,
      mongodb60: isSet(object.mongodb_6_0) ? Mongodb60.fromJSON(object.mongodb_6_0) : undefined,
      mongodb44Enterprise: isSet(object.mongodb_4_4_enterprise)
        ? Mongodb44Enterprise.fromJSON(object.mongodb_4_4_enterprise)
        : undefined,
      mongodb50Enterprise: isSet(object.mongodb_5_0_enterprise)
        ? Mongodb50Enterprise.fromJSON(object.mongodb_5_0_enterprise)
        : undefined,
      mongodb60Enterprise: isSet(object.mongodb_6_0_enterprise)
        ? Mongodb60Enterprise.fromJSON(object.mongodb_6_0_enterprise)
        : undefined,
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      backupRetainPeriodDays: isSet(object.backupRetainPeriodDays) ? Number(object.backupRetainPeriodDays) : undefined,
      performanceDiagnostics: isSet(object.performanceDiagnostics)
        ? PerformanceDiagnosticsConfig.fromJSON(object.performanceDiagnostics)
        : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
    };
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.featureCompatibilityVersion !== "") {
      obj.featureCompatibilityVersion = message.featureCompatibilityVersion;
    }
    if (message.mongodb36 !== undefined) {
      obj.mongodb_3_6 = Mongodb36.toJSON(message.mongodb36);
    }
    if (message.mongodb40 !== undefined) {
      obj.mongodb_4_0 = Mongodb40.toJSON(message.mongodb40);
    }
    if (message.mongodb42 !== undefined) {
      obj.mongodb_4_2 = Mongodb42.toJSON(message.mongodb42);
    }
    if (message.mongodb44 !== undefined) {
      obj.mongodb_4_4 = Mongodb44.toJSON(message.mongodb44);
    }
    if (message.mongodb50 !== undefined) {
      obj.mongodb_5_0 = Mongodb50.toJSON(message.mongodb50);
    }
    if (message.mongodb60 !== undefined) {
      obj.mongodb_6_0 = Mongodb60.toJSON(message.mongodb60);
    }
    if (message.mongodb44Enterprise !== undefined) {
      obj.mongodb_4_4_enterprise = Mongodb44Enterprise.toJSON(message.mongodb44Enterprise);
    }
    if (message.mongodb50Enterprise !== undefined) {
      obj.mongodb_5_0_enterprise = Mongodb50Enterprise.toJSON(message.mongodb50Enterprise);
    }
    if (message.mongodb60Enterprise !== undefined) {
      obj.mongodb_6_0_enterprise = Mongodb60Enterprise.toJSON(message.mongodb60Enterprise);
    }
    if (message.backupWindowStart !== undefined) {
      obj.backupWindowStart = TimeOfDay.toJSON(message.backupWindowStart);
    }
    if (message.backupRetainPeriodDays !== undefined) {
      obj.backupRetainPeriodDays = message.backupRetainPeriodDays;
    }
    if (message.performanceDiagnostics !== undefined) {
      obj.performanceDiagnostics = PerformanceDiagnosticsConfig.toJSON(message.performanceDiagnostics);
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
    message.featureCompatibilityVersion = object.featureCompatibilityVersion ?? "";
    message.mongodb36 = (object.mongodb36 !== undefined && object.mongodb36 !== null)
      ? Mongodb36.fromPartial(object.mongodb36)
      : undefined;
    message.mongodb40 = (object.mongodb40 !== undefined && object.mongodb40 !== null)
      ? Mongodb40.fromPartial(object.mongodb40)
      : undefined;
    message.mongodb42 = (object.mongodb42 !== undefined && object.mongodb42 !== null)
      ? Mongodb42.fromPartial(object.mongodb42)
      : undefined;
    message.mongodb44 = (object.mongodb44 !== undefined && object.mongodb44 !== null)
      ? Mongodb44.fromPartial(object.mongodb44)
      : undefined;
    message.mongodb50 = (object.mongodb50 !== undefined && object.mongodb50 !== null)
      ? Mongodb50.fromPartial(object.mongodb50)
      : undefined;
    message.mongodb60 = (object.mongodb60 !== undefined && object.mongodb60 !== null)
      ? Mongodb60.fromPartial(object.mongodb60)
      : undefined;
    message.mongodb44Enterprise = (object.mongodb44Enterprise !== undefined && object.mongodb44Enterprise !== null)
      ? Mongodb44Enterprise.fromPartial(object.mongodb44Enterprise)
      : undefined;
    message.mongodb50Enterprise = (object.mongodb50Enterprise !== undefined && object.mongodb50Enterprise !== null)
      ? Mongodb50Enterprise.fromPartial(object.mongodb50Enterprise)
      : undefined;
    message.mongodb60Enterprise = (object.mongodb60Enterprise !== undefined && object.mongodb60Enterprise !== null)
      ? Mongodb60Enterprise.fromPartial(object.mongodb60Enterprise)
      : undefined;
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
    message.performanceDiagnostics =
      (object.performanceDiagnostics !== undefined && object.performanceDiagnostics !== null)
        ? PerformanceDiagnosticsConfig.fromPartial(object.performanceDiagnostics)
        : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

function createBaseMongodb36(): Mongodb36 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const Mongodb36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6" as const,

  encode(message: Mongodb36, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb36_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb36_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb36_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb36_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb36 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb36();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = Mongodb36_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = Mongodb36_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = Mongodb36_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = Mongodb36_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mongodb36 {
    return {
      $type: Mongodb36.$type,
      mongod: isSet(object.mongod) ? Mongodb36_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? Mongodb36_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? Mongodb36_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? Mongodb36_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: Mongodb36): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = Mongodb36_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = Mongodb36_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = Mongodb36_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = Mongodb36_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb36>): Mongodb36 {
    return Mongodb36.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb36>): Mongodb36 {
    const message = createBaseMongodb36();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? Mongodb36_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? Mongodb36_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? Mongodb36_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? Mongodb36_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36.$type, Mongodb36);

function createBaseMongodb36_Mongod(): Mongodb36_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod", config: undefined, resources: undefined };
}

export const Mongodb36_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod" as const,

  encode(message: Mongodb36_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfigSet36.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb36_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb36_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfigSet36.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb36_Mongod {
    return {
      $type: Mongodb36_Mongod.$type,
      config: isSet(object.config) ? MongodConfigSet36.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb36_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfigSet36.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb36_Mongod>): Mongodb36_Mongod {
    return Mongodb36_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb36_Mongod>): Mongodb36_Mongod {
    const message = createBaseMongodb36_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfigSet36.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36_Mongod.$type, Mongodb36_Mongod);

function createBaseMongodb36_MongoCfg(): Mongodb36_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg", config: undefined, resources: undefined };
}

export const Mongodb36_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg" as const,

  encode(message: Mongodb36_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfigSet36.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb36_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb36_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfigSet36.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb36_MongoCfg {
    return {
      $type: Mongodb36_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfigSet36.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb36_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfigSet36.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb36_MongoCfg>): Mongodb36_MongoCfg {
    return Mongodb36_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb36_MongoCfg>): Mongodb36_MongoCfg {
    const message = createBaseMongodb36_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfigSet36.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36_MongoCfg.$type, Mongodb36_MongoCfg);

function createBaseMongodb36_Mongos(): Mongodb36_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos", config: undefined, resources: undefined };
}

export const Mongodb36_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos" as const,

  encode(message: Mongodb36_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfigSet36.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb36_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb36_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfigSet36.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb36_Mongos {
    return {
      $type: Mongodb36_Mongos.$type,
      config: isSet(object.config) ? MongosConfigSet36.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb36_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfigSet36.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb36_Mongos>): Mongodb36_Mongos {
    return Mongodb36_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb36_Mongos>): Mongodb36_Mongos {
    const message = createBaseMongodb36_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfigSet36.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36_Mongos.$type, Mongodb36_Mongos);

function createBaseMongodb36_MongoInfra(): Mongodb36_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const Mongodb36_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra" as const,

  encode(message: Mongodb36_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfigSet36.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfigSet36.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb36_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb36_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfigSet36.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfigSet36.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Mongodb36_MongoInfra {
    return {
      $type: Mongodb36_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfigSet36.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfigSet36.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb36_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfigSet36.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfigSet36.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb36_MongoInfra>): Mongodb36_MongoInfra {
    return Mongodb36_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb36_MongoInfra>): Mongodb36_MongoInfra {
    const message = createBaseMongodb36_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfigSet36.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfigSet36.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36_MongoInfra.$type, Mongodb36_MongoInfra);

function createBaseMongodb40(): Mongodb40 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const Mongodb40 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0" as const,

  encode(message: Mongodb40, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb40_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb40_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb40_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb40_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb40 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb40();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = Mongodb40_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = Mongodb40_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = Mongodb40_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = Mongodb40_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mongodb40 {
    return {
      $type: Mongodb40.$type,
      mongod: isSet(object.mongod) ? Mongodb40_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? Mongodb40_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? Mongodb40_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? Mongodb40_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: Mongodb40): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = Mongodb40_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = Mongodb40_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = Mongodb40_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = Mongodb40_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb40>): Mongodb40 {
    return Mongodb40.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb40>): Mongodb40 {
    const message = createBaseMongodb40();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? Mongodb40_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? Mongodb40_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? Mongodb40_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? Mongodb40_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40.$type, Mongodb40);

function createBaseMongodb40_Mongod(): Mongodb40_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod", config: undefined, resources: undefined };
}

export const Mongodb40_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod" as const,

  encode(message: Mongodb40_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfigSet40.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb40_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb40_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfigSet40.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb40_Mongod {
    return {
      $type: Mongodb40_Mongod.$type,
      config: isSet(object.config) ? MongodConfigSet40.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb40_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfigSet40.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb40_Mongod>): Mongodb40_Mongod {
    return Mongodb40_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb40_Mongod>): Mongodb40_Mongod {
    const message = createBaseMongodb40_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfigSet40.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40_Mongod.$type, Mongodb40_Mongod);

function createBaseMongodb40_MongoCfg(): Mongodb40_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg", config: undefined, resources: undefined };
}

export const Mongodb40_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg" as const,

  encode(message: Mongodb40_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfigSet40.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb40_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb40_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfigSet40.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb40_MongoCfg {
    return {
      $type: Mongodb40_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfigSet40.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb40_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfigSet40.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb40_MongoCfg>): Mongodb40_MongoCfg {
    return Mongodb40_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb40_MongoCfg>): Mongodb40_MongoCfg {
    const message = createBaseMongodb40_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfigSet40.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40_MongoCfg.$type, Mongodb40_MongoCfg);

function createBaseMongodb40_Mongos(): Mongodb40_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos", config: undefined, resources: undefined };
}

export const Mongodb40_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos" as const,

  encode(message: Mongodb40_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfigSet40.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb40_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb40_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfigSet40.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb40_Mongos {
    return {
      $type: Mongodb40_Mongos.$type,
      config: isSet(object.config) ? MongosConfigSet40.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb40_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfigSet40.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb40_Mongos>): Mongodb40_Mongos {
    return Mongodb40_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb40_Mongos>): Mongodb40_Mongos {
    const message = createBaseMongodb40_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfigSet40.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40_Mongos.$type, Mongodb40_Mongos);

function createBaseMongodb40_MongoInfra(): Mongodb40_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const Mongodb40_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra" as const,

  encode(message: Mongodb40_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfigSet40.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfigSet40.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb40_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb40_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfigSet40.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfigSet40.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Mongodb40_MongoInfra {
    return {
      $type: Mongodb40_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfigSet40.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfigSet40.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb40_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfigSet40.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfigSet40.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb40_MongoInfra>): Mongodb40_MongoInfra {
    return Mongodb40_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb40_MongoInfra>): Mongodb40_MongoInfra {
    const message = createBaseMongodb40_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfigSet40.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfigSet40.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40_MongoInfra.$type, Mongodb40_MongoInfra);

function createBaseMongodb42(): Mongodb42 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const Mongodb42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2" as const,

  encode(message: Mongodb42, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb42_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb42_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb42_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb42_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb42 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb42();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = Mongodb42_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = Mongodb42_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = Mongodb42_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = Mongodb42_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mongodb42 {
    return {
      $type: Mongodb42.$type,
      mongod: isSet(object.mongod) ? Mongodb42_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? Mongodb42_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? Mongodb42_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? Mongodb42_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: Mongodb42): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = Mongodb42_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = Mongodb42_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = Mongodb42_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = Mongodb42_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb42>): Mongodb42 {
    return Mongodb42.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb42>): Mongodb42 {
    const message = createBaseMongodb42();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? Mongodb42_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? Mongodb42_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? Mongodb42_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? Mongodb42_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42.$type, Mongodb42);

function createBaseMongodb42_Mongod(): Mongodb42_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod", config: undefined, resources: undefined };
}

export const Mongodb42_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod" as const,

  encode(message: Mongodb42_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfigSet42.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb42_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb42_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfigSet42.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb42_Mongod {
    return {
      $type: Mongodb42_Mongod.$type,
      config: isSet(object.config) ? MongodConfigSet42.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb42_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfigSet42.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb42_Mongod>): Mongodb42_Mongod {
    return Mongodb42_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb42_Mongod>): Mongodb42_Mongod {
    const message = createBaseMongodb42_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfigSet42.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42_Mongod.$type, Mongodb42_Mongod);

function createBaseMongodb42_MongoCfg(): Mongodb42_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg", config: undefined, resources: undefined };
}

export const Mongodb42_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg" as const,

  encode(message: Mongodb42_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfigSet42.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb42_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb42_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfigSet42.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb42_MongoCfg {
    return {
      $type: Mongodb42_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfigSet42.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb42_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfigSet42.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb42_MongoCfg>): Mongodb42_MongoCfg {
    return Mongodb42_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb42_MongoCfg>): Mongodb42_MongoCfg {
    const message = createBaseMongodb42_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfigSet42.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42_MongoCfg.$type, Mongodb42_MongoCfg);

function createBaseMongodb42_Mongos(): Mongodb42_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos", config: undefined, resources: undefined };
}

export const Mongodb42_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos" as const,

  encode(message: Mongodb42_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfigSet42.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb42_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb42_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfigSet42.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb42_Mongos {
    return {
      $type: Mongodb42_Mongos.$type,
      config: isSet(object.config) ? MongosConfigSet42.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb42_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfigSet42.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb42_Mongos>): Mongodb42_Mongos {
    return Mongodb42_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb42_Mongos>): Mongodb42_Mongos {
    const message = createBaseMongodb42_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfigSet42.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42_Mongos.$type, Mongodb42_Mongos);

function createBaseMongodb42_MongoInfra(): Mongodb42_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const Mongodb42_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra" as const,

  encode(message: Mongodb42_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfigSet42.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfigSet42.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb42_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb42_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfigSet42.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfigSet42.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Mongodb42_MongoInfra {
    return {
      $type: Mongodb42_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfigSet42.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfigSet42.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb42_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfigSet42.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfigSet42.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb42_MongoInfra>): Mongodb42_MongoInfra {
    return Mongodb42_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb42_MongoInfra>): Mongodb42_MongoInfra {
    const message = createBaseMongodb42_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfigSet42.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfigSet42.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42_MongoInfra.$type, Mongodb42_MongoInfra);

function createBaseMongodb44(): Mongodb44 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const Mongodb44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4" as const,

  encode(message: Mongodb44, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb44_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb44_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb44_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb44_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = Mongodb44_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = Mongodb44_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = Mongodb44_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = Mongodb44_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mongodb44 {
    return {
      $type: Mongodb44.$type,
      mongod: isSet(object.mongod) ? Mongodb44_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? Mongodb44_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? Mongodb44_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? Mongodb44_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: Mongodb44): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = Mongodb44_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = Mongodb44_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = Mongodb44_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = Mongodb44_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44>): Mongodb44 {
    return Mongodb44.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44>): Mongodb44 {
    const message = createBaseMongodb44();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? Mongodb44_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? Mongodb44_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? Mongodb44_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? Mongodb44_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44.$type, Mongodb44);

function createBaseMongodb44_Mongod(): Mongodb44_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod", config: undefined, resources: undefined };
}

export const Mongodb44_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod" as const,

  encode(message: Mongodb44_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfigSet44.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfigSet44.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb44_Mongod {
    return {
      $type: Mongodb44_Mongod.$type,
      config: isSet(object.config) ? MongodConfigSet44.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb44_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfigSet44.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44_Mongod>): Mongodb44_Mongod {
    return Mongodb44_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44_Mongod>): Mongodb44_Mongod {
    const message = createBaseMongodb44_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfigSet44.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44_Mongod.$type, Mongodb44_Mongod);

function createBaseMongodb44_MongoCfg(): Mongodb44_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg", config: undefined, resources: undefined };
}

export const Mongodb44_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg" as const,

  encode(message: Mongodb44_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfigSet44.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfigSet44.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb44_MongoCfg {
    return {
      $type: Mongodb44_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfigSet44.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb44_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfigSet44.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44_MongoCfg>): Mongodb44_MongoCfg {
    return Mongodb44_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44_MongoCfg>): Mongodb44_MongoCfg {
    const message = createBaseMongodb44_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfigSet44.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44_MongoCfg.$type, Mongodb44_MongoCfg);

function createBaseMongodb44_Mongos(): Mongodb44_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos", config: undefined, resources: undefined };
}

export const Mongodb44_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos" as const,

  encode(message: Mongodb44_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfigSet44.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfigSet44.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb44_Mongos {
    return {
      $type: Mongodb44_Mongos.$type,
      config: isSet(object.config) ? MongosConfigSet44.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb44_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfigSet44.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44_Mongos>): Mongodb44_Mongos {
    return Mongodb44_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44_Mongos>): Mongodb44_Mongos {
    const message = createBaseMongodb44_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfigSet44.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44_Mongos.$type, Mongodb44_Mongos);

function createBaseMongodb44_MongoInfra(): Mongodb44_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const Mongodb44_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra" as const,

  encode(message: Mongodb44_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfigSet44.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfigSet44.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfigSet44.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfigSet44.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Mongodb44_MongoInfra {
    return {
      $type: Mongodb44_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfigSet44.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfigSet44.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb44_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfigSet44.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfigSet44.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44_MongoInfra>): Mongodb44_MongoInfra {
    return Mongodb44_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44_MongoInfra>): Mongodb44_MongoInfra {
    const message = createBaseMongodb44_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfigSet44.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfigSet44.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44_MongoInfra.$type, Mongodb44_MongoInfra);

function createBaseMongodb44Enterprise(): Mongodb44Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const Mongodb44Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise" as const,

  encode(message: Mongodb44Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb44Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb44Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb44Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb44Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = Mongodb44Enterprise_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = Mongodb44Enterprise_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = Mongodb44Enterprise_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = Mongodb44Enterprise_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mongodb44Enterprise {
    return {
      $type: Mongodb44Enterprise.$type,
      mongod: isSet(object.mongod) ? Mongodb44Enterprise_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? Mongodb44Enterprise_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? Mongodb44Enterprise_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? Mongodb44Enterprise_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: Mongodb44Enterprise): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = Mongodb44Enterprise_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = Mongodb44Enterprise_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = Mongodb44Enterprise_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = Mongodb44Enterprise_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44Enterprise>): Mongodb44Enterprise {
    return Mongodb44Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44Enterprise>): Mongodb44Enterprise {
    const message = createBaseMongodb44Enterprise();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? Mongodb44Enterprise_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? Mongodb44Enterprise_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? Mongodb44Enterprise_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? Mongodb44Enterprise_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44Enterprise.$type, Mongodb44Enterprise);

function createBaseMongodb44Enterprise_Mongod(): Mongodb44Enterprise_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod", config: undefined, resources: undefined };
}

export const Mongodb44Enterprise_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod" as const,

  encode(message: Mongodb44Enterprise_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfigSet44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44Enterprise_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44Enterprise_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfigSet44Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb44Enterprise_Mongod {
    return {
      $type: Mongodb44Enterprise_Mongod.$type,
      config: isSet(object.config) ? MongodConfigSet44Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb44Enterprise_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfigSet44Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44Enterprise_Mongod>): Mongodb44Enterprise_Mongod {
    return Mongodb44Enterprise_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44Enterprise_Mongod>): Mongodb44Enterprise_Mongod {
    const message = createBaseMongodb44Enterprise_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfigSet44Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44Enterprise_Mongod.$type, Mongodb44Enterprise_Mongod);

function createBaseMongodb44Enterprise_MongoCfg(): Mongodb44Enterprise_MongoCfg {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg",
    config: undefined,
    resources: undefined,
  };
}

export const Mongodb44Enterprise_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg" as const,

  encode(message: Mongodb44Enterprise_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfigSet44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44Enterprise_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44Enterprise_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfigSet44Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb44Enterprise_MongoCfg {
    return {
      $type: Mongodb44Enterprise_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfigSet44Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb44Enterprise_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfigSet44Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44Enterprise_MongoCfg>): Mongodb44Enterprise_MongoCfg {
    return Mongodb44Enterprise_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44Enterprise_MongoCfg>): Mongodb44Enterprise_MongoCfg {
    const message = createBaseMongodb44Enterprise_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfigSet44Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44Enterprise_MongoCfg.$type, Mongodb44Enterprise_MongoCfg);

function createBaseMongodb44Enterprise_Mongos(): Mongodb44Enterprise_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos", config: undefined, resources: undefined };
}

export const Mongodb44Enterprise_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos" as const,

  encode(message: Mongodb44Enterprise_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfigSet44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44Enterprise_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44Enterprise_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfigSet44Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb44Enterprise_Mongos {
    return {
      $type: Mongodb44Enterprise_Mongos.$type,
      config: isSet(object.config) ? MongosConfigSet44Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb44Enterprise_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfigSet44Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44Enterprise_Mongos>): Mongodb44Enterprise_Mongos {
    return Mongodb44Enterprise_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44Enterprise_Mongos>): Mongodb44Enterprise_Mongos {
    const message = createBaseMongodb44Enterprise_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfigSet44Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44Enterprise_Mongos.$type, Mongodb44Enterprise_Mongos);

function createBaseMongodb44Enterprise_MongoInfra(): Mongodb44Enterprise_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const Mongodb44Enterprise_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra" as const,

  encode(message: Mongodb44Enterprise_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfigSet44Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfigSet44Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44Enterprise_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb44Enterprise_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfigSet44Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfigSet44Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Mongodb44Enterprise_MongoInfra {
    return {
      $type: Mongodb44Enterprise_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfigSet44Enterprise.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg)
        ? MongoCfgConfigSet44Enterprise.fromJSON(object.configMongocfg)
        : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb44Enterprise_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfigSet44Enterprise.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfigSet44Enterprise.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb44Enterprise_MongoInfra>): Mongodb44Enterprise_MongoInfra {
    return Mongodb44Enterprise_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb44Enterprise_MongoInfra>): Mongodb44Enterprise_MongoInfra {
    const message = createBaseMongodb44Enterprise_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfigSet44Enterprise.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfigSet44Enterprise.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44Enterprise_MongoInfra.$type, Mongodb44Enterprise_MongoInfra);

function createBaseMongodb50(): Mongodb50 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const Mongodb50 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0" as const,

  encode(message: Mongodb50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb50_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb50_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb50_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb50_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = Mongodb50_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = Mongodb50_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = Mongodb50_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = Mongodb50_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mongodb50 {
    return {
      $type: Mongodb50.$type,
      mongod: isSet(object.mongod) ? Mongodb50_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? Mongodb50_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? Mongodb50_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? Mongodb50_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: Mongodb50): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = Mongodb50_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = Mongodb50_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = Mongodb50_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = Mongodb50_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50>): Mongodb50 {
    return Mongodb50.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50>): Mongodb50 {
    const message = createBaseMongodb50();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? Mongodb50_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? Mongodb50_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? Mongodb50_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? Mongodb50_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50.$type, Mongodb50);

function createBaseMongodb50_Mongod(): Mongodb50_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod", config: undefined, resources: undefined };
}

export const Mongodb50_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod" as const,

  encode(message: Mongodb50_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfigSet50.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfigSet50.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb50_Mongod {
    return {
      $type: Mongodb50_Mongod.$type,
      config: isSet(object.config) ? MongodConfigSet50.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb50_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfigSet50.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50_Mongod>): Mongodb50_Mongod {
    return Mongodb50_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50_Mongod>): Mongodb50_Mongod {
    const message = createBaseMongodb50_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfigSet50.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50_Mongod.$type, Mongodb50_Mongod);

function createBaseMongodb50_MongoCfg(): Mongodb50_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg", config: undefined, resources: undefined };
}

export const Mongodb50_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg" as const,

  encode(message: Mongodb50_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfigSet50.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfigSet50.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb50_MongoCfg {
    return {
      $type: Mongodb50_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfigSet50.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb50_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfigSet50.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50_MongoCfg>): Mongodb50_MongoCfg {
    return Mongodb50_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50_MongoCfg>): Mongodb50_MongoCfg {
    const message = createBaseMongodb50_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfigSet50.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50_MongoCfg.$type, Mongodb50_MongoCfg);

function createBaseMongodb50_Mongos(): Mongodb50_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos", config: undefined, resources: undefined };
}

export const Mongodb50_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos" as const,

  encode(message: Mongodb50_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfigSet50.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfigSet50.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb50_Mongos {
    return {
      $type: Mongodb50_Mongos.$type,
      config: isSet(object.config) ? MongosConfigSet50.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb50_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfigSet50.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50_Mongos>): Mongodb50_Mongos {
    return Mongodb50_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50_Mongos>): Mongodb50_Mongos {
    const message = createBaseMongodb50_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfigSet50.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50_Mongos.$type, Mongodb50_Mongos);

function createBaseMongodb50_MongoInfra(): Mongodb50_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const Mongodb50_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra" as const,

  encode(message: Mongodb50_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfigSet50.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfigSet50.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfigSet50.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfigSet50.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Mongodb50_MongoInfra {
    return {
      $type: Mongodb50_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfigSet50.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfigSet50.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb50_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfigSet50.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfigSet50.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50_MongoInfra>): Mongodb50_MongoInfra {
    return Mongodb50_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50_MongoInfra>): Mongodb50_MongoInfra {
    const message = createBaseMongodb50_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfigSet50.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfigSet50.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50_MongoInfra.$type, Mongodb50_MongoInfra);

function createBaseMongodb50Enterprise(): Mongodb50Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const Mongodb50Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise" as const,

  encode(message: Mongodb50Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb50Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb50Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb50Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb50Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = Mongodb50Enterprise_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = Mongodb50Enterprise_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = Mongodb50Enterprise_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = Mongodb50Enterprise_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mongodb50Enterprise {
    return {
      $type: Mongodb50Enterprise.$type,
      mongod: isSet(object.mongod) ? Mongodb50Enterprise_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? Mongodb50Enterprise_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? Mongodb50Enterprise_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? Mongodb50Enterprise_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: Mongodb50Enterprise): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = Mongodb50Enterprise_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = Mongodb50Enterprise_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = Mongodb50Enterprise_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = Mongodb50Enterprise_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50Enterprise>): Mongodb50Enterprise {
    return Mongodb50Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50Enterprise>): Mongodb50Enterprise {
    const message = createBaseMongodb50Enterprise();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? Mongodb50Enterprise_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? Mongodb50Enterprise_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? Mongodb50Enterprise_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? Mongodb50Enterprise_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50Enterprise.$type, Mongodb50Enterprise);

function createBaseMongodb50Enterprise_Mongod(): Mongodb50Enterprise_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod", config: undefined, resources: undefined };
}

export const Mongodb50Enterprise_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod" as const,

  encode(message: Mongodb50Enterprise_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfigSet50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50Enterprise_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50Enterprise_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfigSet50Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb50Enterprise_Mongod {
    return {
      $type: Mongodb50Enterprise_Mongod.$type,
      config: isSet(object.config) ? MongodConfigSet50Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb50Enterprise_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfigSet50Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50Enterprise_Mongod>): Mongodb50Enterprise_Mongod {
    return Mongodb50Enterprise_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50Enterprise_Mongod>): Mongodb50Enterprise_Mongod {
    const message = createBaseMongodb50Enterprise_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfigSet50Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50Enterprise_Mongod.$type, Mongodb50Enterprise_Mongod);

function createBaseMongodb50Enterprise_MongoCfg(): Mongodb50Enterprise_MongoCfg {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg",
    config: undefined,
    resources: undefined,
  };
}

export const Mongodb50Enterprise_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg" as const,

  encode(message: Mongodb50Enterprise_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfigSet50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50Enterprise_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50Enterprise_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfigSet50Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb50Enterprise_MongoCfg {
    return {
      $type: Mongodb50Enterprise_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfigSet50Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb50Enterprise_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfigSet50Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50Enterprise_MongoCfg>): Mongodb50Enterprise_MongoCfg {
    return Mongodb50Enterprise_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50Enterprise_MongoCfg>): Mongodb50Enterprise_MongoCfg {
    const message = createBaseMongodb50Enterprise_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfigSet50Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50Enterprise_MongoCfg.$type, Mongodb50Enterprise_MongoCfg);

function createBaseMongodb50Enterprise_Mongos(): Mongodb50Enterprise_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos", config: undefined, resources: undefined };
}

export const Mongodb50Enterprise_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos" as const,

  encode(message: Mongodb50Enterprise_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfigSet50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50Enterprise_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50Enterprise_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfigSet50Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb50Enterprise_Mongos {
    return {
      $type: Mongodb50Enterprise_Mongos.$type,
      config: isSet(object.config) ? MongosConfigSet50Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb50Enterprise_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfigSet50Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50Enterprise_Mongos>): Mongodb50Enterprise_Mongos {
    return Mongodb50Enterprise_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50Enterprise_Mongos>): Mongodb50Enterprise_Mongos {
    const message = createBaseMongodb50Enterprise_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfigSet50Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50Enterprise_Mongos.$type, Mongodb50Enterprise_Mongos);

function createBaseMongodb50Enterprise_MongoInfra(): Mongodb50Enterprise_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const Mongodb50Enterprise_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra" as const,

  encode(message: Mongodb50Enterprise_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfigSet50Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfigSet50Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50Enterprise_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb50Enterprise_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfigSet50Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfigSet50Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Mongodb50Enterprise_MongoInfra {
    return {
      $type: Mongodb50Enterprise_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfigSet50Enterprise.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg)
        ? MongoCfgConfigSet50Enterprise.fromJSON(object.configMongocfg)
        : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb50Enterprise_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfigSet50Enterprise.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfigSet50Enterprise.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb50Enterprise_MongoInfra>): Mongodb50Enterprise_MongoInfra {
    return Mongodb50Enterprise_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb50Enterprise_MongoInfra>): Mongodb50Enterprise_MongoInfra {
    const message = createBaseMongodb50Enterprise_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfigSet50Enterprise.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfigSet50Enterprise.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50Enterprise_MongoInfra.$type, Mongodb50Enterprise_MongoInfra);

function createBaseMongodb60(): Mongodb60 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const Mongodb60 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0" as const,

  encode(message: Mongodb60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb60_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb60_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb60_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb60_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = Mongodb60_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = Mongodb60_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = Mongodb60_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = Mongodb60_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mongodb60 {
    return {
      $type: Mongodb60.$type,
      mongod: isSet(object.mongod) ? Mongodb60_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? Mongodb60_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? Mongodb60_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? Mongodb60_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: Mongodb60): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = Mongodb60_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = Mongodb60_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = Mongodb60_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = Mongodb60_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60>): Mongodb60 {
    return Mongodb60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60>): Mongodb60 {
    const message = createBaseMongodb60();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? Mongodb60_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? Mongodb60_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? Mongodb60_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? Mongodb60_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60.$type, Mongodb60);

function createBaseMongodb60_Mongod(): Mongodb60_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongod", config: undefined, resources: undefined };
}

export const Mongodb60_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongod" as const,

  encode(message: Mongodb60_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfigSet60.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfigSet60.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb60_Mongod {
    return {
      $type: Mongodb60_Mongod.$type,
      config: isSet(object.config) ? MongodConfigSet60.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb60_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfigSet60.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60_Mongod>): Mongodb60_Mongod {
    return Mongodb60_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60_Mongod>): Mongodb60_Mongod {
    const message = createBaseMongodb60_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfigSet60.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60_Mongod.$type, Mongodb60_Mongod);

function createBaseMongodb60_MongoCfg(): Mongodb60_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoCfg", config: undefined, resources: undefined };
}

export const Mongodb60_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoCfg" as const,

  encode(message: Mongodb60_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfigSet60.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfigSet60.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb60_MongoCfg {
    return {
      $type: Mongodb60_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfigSet60.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb60_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfigSet60.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60_MongoCfg>): Mongodb60_MongoCfg {
    return Mongodb60_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60_MongoCfg>): Mongodb60_MongoCfg {
    const message = createBaseMongodb60_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfigSet60.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60_MongoCfg.$type, Mongodb60_MongoCfg);

function createBaseMongodb60_Mongos(): Mongodb60_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongos", config: undefined, resources: undefined };
}

export const Mongodb60_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongos" as const,

  encode(message: Mongodb60_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfigSet60.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfigSet60.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb60_Mongos {
    return {
      $type: Mongodb60_Mongos.$type,
      config: isSet(object.config) ? MongosConfigSet60.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb60_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfigSet60.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60_Mongos>): Mongodb60_Mongos {
    return Mongodb60_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60_Mongos>): Mongodb60_Mongos {
    const message = createBaseMongodb60_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfigSet60.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60_Mongos.$type, Mongodb60_Mongos);

function createBaseMongodb60_MongoInfra(): Mongodb60_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const Mongodb60_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoInfra" as const,

  encode(message: Mongodb60_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfigSet60.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfigSet60.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfigSet60.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfigSet60.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Mongodb60_MongoInfra {
    return {
      $type: Mongodb60_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfigSet60.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfigSet60.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb60_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfigSet60.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfigSet60.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60_MongoInfra>): Mongodb60_MongoInfra {
    return Mongodb60_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60_MongoInfra>): Mongodb60_MongoInfra {
    const message = createBaseMongodb60_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfigSet60.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfigSet60.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60_MongoInfra.$type, Mongodb60_MongoInfra);

function createBaseMongodb60Enterprise(): Mongodb60Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const Mongodb60Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise" as const,

  encode(message: Mongodb60Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb60Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb60Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb60Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb60Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = Mongodb60Enterprise_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = Mongodb60Enterprise_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = Mongodb60Enterprise_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = Mongodb60Enterprise_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mongodb60Enterprise {
    return {
      $type: Mongodb60Enterprise.$type,
      mongod: isSet(object.mongod) ? Mongodb60Enterprise_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? Mongodb60Enterprise_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? Mongodb60Enterprise_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? Mongodb60Enterprise_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: Mongodb60Enterprise): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = Mongodb60Enterprise_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = Mongodb60Enterprise_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = Mongodb60Enterprise_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = Mongodb60Enterprise_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60Enterprise>): Mongodb60Enterprise {
    return Mongodb60Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60Enterprise>): Mongodb60Enterprise {
    const message = createBaseMongodb60Enterprise();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? Mongodb60Enterprise_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? Mongodb60Enterprise_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? Mongodb60Enterprise_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? Mongodb60Enterprise_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60Enterprise.$type, Mongodb60Enterprise);

function createBaseMongodb60Enterprise_Mongod(): Mongodb60Enterprise_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongod", config: undefined, resources: undefined };
}

export const Mongodb60Enterprise_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongod" as const,

  encode(message: Mongodb60Enterprise_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfigSet60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60Enterprise_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60Enterprise_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfigSet60Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb60Enterprise_Mongod {
    return {
      $type: Mongodb60Enterprise_Mongod.$type,
      config: isSet(object.config) ? MongodConfigSet60Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb60Enterprise_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfigSet60Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60Enterprise_Mongod>): Mongodb60Enterprise_Mongod {
    return Mongodb60Enterprise_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60Enterprise_Mongod>): Mongodb60Enterprise_Mongod {
    const message = createBaseMongodb60Enterprise_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfigSet60Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60Enterprise_Mongod.$type, Mongodb60Enterprise_Mongod);

function createBaseMongodb60Enterprise_MongoCfg(): Mongodb60Enterprise_MongoCfg {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoCfg",
    config: undefined,
    resources: undefined,
  };
}

export const Mongodb60Enterprise_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoCfg" as const,

  encode(message: Mongodb60Enterprise_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfigSet60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60Enterprise_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60Enterprise_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfigSet60Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb60Enterprise_MongoCfg {
    return {
      $type: Mongodb60Enterprise_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfigSet60Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb60Enterprise_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfigSet60Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60Enterprise_MongoCfg>): Mongodb60Enterprise_MongoCfg {
    return Mongodb60Enterprise_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60Enterprise_MongoCfg>): Mongodb60Enterprise_MongoCfg {
    const message = createBaseMongodb60Enterprise_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfigSet60Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60Enterprise_MongoCfg.$type, Mongodb60Enterprise_MongoCfg);

function createBaseMongodb60Enterprise_Mongos(): Mongodb60Enterprise_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongos", config: undefined, resources: undefined };
}

export const Mongodb60Enterprise_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongos" as const,

  encode(message: Mongodb60Enterprise_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfigSet60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60Enterprise_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60Enterprise_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfigSet60Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb60Enterprise_Mongos {
    return {
      $type: Mongodb60Enterprise_Mongos.$type,
      config: isSet(object.config) ? MongosConfigSet60Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb60Enterprise_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfigSet60Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60Enterprise_Mongos>): Mongodb60Enterprise_Mongos {
    return Mongodb60Enterprise_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60Enterprise_Mongos>): Mongodb60Enterprise_Mongos {
    const message = createBaseMongodb60Enterprise_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfigSet60Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60Enterprise_Mongos.$type, Mongodb60Enterprise_Mongos);

function createBaseMongodb60Enterprise_MongoInfra(): Mongodb60Enterprise_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const Mongodb60Enterprise_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoInfra" as const,

  encode(message: Mongodb60Enterprise_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfigSet60Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfigSet60Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb60Enterprise_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodb60Enterprise_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfigSet60Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfigSet60Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Mongodb60Enterprise_MongoInfra {
    return {
      $type: Mongodb60Enterprise_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfigSet60Enterprise.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg)
        ? MongoCfgConfigSet60Enterprise.fromJSON(object.configMongocfg)
        : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: Mongodb60Enterprise_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfigSet60Enterprise.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfigSet60Enterprise.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<Mongodb60Enterprise_MongoInfra>): Mongodb60Enterprise_MongoInfra {
    return Mongodb60Enterprise_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Mongodb60Enterprise_MongoInfra>): Mongodb60Enterprise_MongoInfra {
    const message = createBaseMongodb60Enterprise_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfigSet60Enterprise.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfigSet60Enterprise.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb60Enterprise_MongoInfra.$type, Mongodb60Enterprise_MongoInfra);

function createBaseShard(): Shard {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Shard", name: "", clusterId: "" };
}

export const Shard = {
  $type: "yandex.cloud.mdb.mongodb.v1.Shard" as const,

  encode(message: Shard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
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
    return obj;
  },

  create(base?: DeepPartial<Shard>): Shard {
    return Shard.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Shard>): Shard {
    const message = createBaseShard();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Shard.$type, Shard);

function createBaseHost(): Host {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    resources: undefined,
    role: 0,
    health: 0,
    services: [],
    subnetId: "",
    assignPublicIp: false,
    shardName: "",
    type: 0,
  };
}

export const Host = {
  $type: "yandex.cloud.mdb.mongodb.v1.Host" as const,

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
    if (message.shardName !== "") {
      writer.uint32(82).string(message.shardName);
    }
    if (message.type !== 0) {
      writer.uint32(88).int32(message.type);
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
        case 10:
          if (tag !== 82) {
            break;
          }

          message.shardName = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
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
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
      type: isSet(object.type) ? host_TypeFromJSON(object.type) : 0,
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
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    if (message.type !== 0) {
      obj.type = host_TypeToJSON(message.type);
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
    message.shardName = object.shardName ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

function createBaseService(): Service {
  return { $type: "yandex.cloud.mdb.mongodb.v1.Service", type: 0, health: 0 };
}

export const Service = {
  $type: "yandex.cloud.mdb.mongodb.v1.Service" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.Resources", resourcePresetId: "", diskSize: 0, diskTypeId: "" };
}

export const Resources = {
  $type: "yandex.cloud.mdb.mongodb.v1.Resources" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.Access", dataLens: false, dataTransfer: false };
}

export const Access = {
  $type: "yandex.cloud.mdb.mongodb.v1.Access" as const,

  encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataLens === true) {
      writer.uint32(8).bool(message.dataLens);
    }
    if (message.dataTransfer === true) {
      writer.uint32(24).bool(message.dataTransfer);
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.dataTransfer = reader.bool();
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
      dataTransfer: isSet(object.dataTransfer) ? globalThis.Boolean(object.dataTransfer) : false,
    };
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
    if (message.dataLens === true) {
      obj.dataLens = message.dataLens;
    }
    if (message.dataTransfer === true) {
      obj.dataTransfer = message.dataTransfer;
    }
    return obj;
  },

  create(base?: DeepPartial<Access>): Access {
    return Access.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Access>): Access {
    const message = createBaseAccess();
    message.dataLens = object.dataLens ?? false;
    message.dataTransfer = object.dataTransfer ?? false;
    return message;
  },
};

messageTypeRegistry.set(Access.$type, Access);

function createBasePerformanceDiagnosticsConfig(): PerformanceDiagnosticsConfig {
  return { $type: "yandex.cloud.mdb.mongodb.v1.PerformanceDiagnosticsConfig", profilingEnabled: false };
}

export const PerformanceDiagnosticsConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.PerformanceDiagnosticsConfig" as const,

  encode(message: PerformanceDiagnosticsConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profilingEnabled === true) {
      writer.uint32(8).bool(message.profilingEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerformanceDiagnosticsConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerformanceDiagnosticsConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.profilingEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PerformanceDiagnosticsConfig {
    return {
      $type: PerformanceDiagnosticsConfig.$type,
      profilingEnabled: isSet(object.profilingEnabled) ? globalThis.Boolean(object.profilingEnabled) : false,
    };
  },

  toJSON(message: PerformanceDiagnosticsConfig): unknown {
    const obj: any = {};
    if (message.profilingEnabled === true) {
      obj.profilingEnabled = message.profilingEnabled;
    }
    return obj;
  },

  create(base?: DeepPartial<PerformanceDiagnosticsConfig>): PerformanceDiagnosticsConfig {
    return PerformanceDiagnosticsConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PerformanceDiagnosticsConfig>): PerformanceDiagnosticsConfig {
    const message = createBasePerformanceDiagnosticsConfig();
    message.profilingEnabled = object.profilingEnabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(PerformanceDiagnosticsConfig.$type, PerformanceDiagnosticsConfig);

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
