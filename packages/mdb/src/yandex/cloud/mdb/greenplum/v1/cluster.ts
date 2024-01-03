/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import { TimeOfDay } from "@yandex-cloud/core/dist/generated/google/type/timeofday";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import {
  BackgroundActivitiesConfig,
  ConnectionPoolerConfigSet,
  GreenplumConfigSet6,
  GreenplumConfigSet617,
  GreenplumConfigSet619,
  GreenplumConfigSet621,
  GreenplumConfigSet622,
  MasterSubclusterConfig,
  SegmentSubclusterConfig,
} from "./config";
import { MaintenanceOperation, MaintenanceWindow } from "./maintenance";
import { PXFConfigSet } from "./pxf";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

/** A Greenplum® cluster resource. */
export interface Cluster {
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster";
  /**
   * ID of the Greenplum® cluster.
   * This ID is assigned by the platform at the moment of cluster creation.
   */
  id: string;
  /** ID of the folder that the Greenplum® cluster belongs to. */
  folderId: string;
  /** Time when the cluster was created. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the Greenplum® cluster.
   * The name is unique within the folder.
   */
  name: string;
  /** Greenplum® cluster configuration. */
  config?:
    | GreenplumConfig
    | undefined;
  /** Description of the Greenplum® cluster. */
  description: string;
  /** Custom labels for the Greenplum® cluster as `key:value` pairs. Maximum 64 labels per resource. */
  labels: { [key: string]: string };
  /** Deployment environment of the Greenplum® cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the Greenplum® cluster. */
  monitoring: Monitoring[];
  /** Configuration of the Greenplum® master subcluster. */
  masterConfig?:
    | MasterSubclusterConfig
    | undefined;
  /** Configuration of the Greenplum® segment subcluster. */
  segmentConfig?:
    | SegmentSubclusterConfig
    | undefined;
  /** Number of hosts in the master subcluster. */
  masterHostCount: number;
  /** Number of hosts in the segment subcluster. */
  segmentHostCount: number;
  /** Number of segments per host. */
  segmentInHost: number;
  /** ID of the cloud network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** A Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** Maintenance operation planned at nearest [maintenance_window]. */
  plannedOperation?:
    | MaintenanceOperation
    | undefined;
  /** User security groups. */
  securityGroupIds: string[];
  /** Owner user name. */
  userName: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
  /** Greenplum® and Odyssey® configuration. */
  clusterConfig?:
    | ClusterConfigSet
    | undefined;
  /** Cloud storage settings */
  cloudStorage?: CloudStorage | undefined;
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
  /** HEALTH_UNKNOWN - Health of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is working normally ([Host.health] for every host in the cluster is ALIVE). */
  ALIVE = 1,
  /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
  DEAD = 2,
  /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
  DEGRADED = 3,
  /** UNBALANCED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is UNBALANCED). */
  UNBALANCED = 4,
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
    case 4:
    case "UNBALANCED":
      return Cluster_Health.UNBALANCED;
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
    case Cluster_Health.UNBALANCED:
      return "UNBALANCED";
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
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

export interface ClusterConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet";
  greenplumConfigSet617?: GreenplumConfigSet617 | undefined;
  greenplumConfigSet619?: GreenplumConfigSet619 | undefined;
  greenplumConfigSet621?: GreenplumConfigSet621 | undefined;
  greenplumConfigSet622?: GreenplumConfigSet622 | undefined;
  greenplumConfigSet6?:
    | GreenplumConfigSet6
    | undefined;
  /** Odyssey® pool settings. */
  pool?: ConnectionPoolerConfigSet | undefined;
  backgroundActivities?: BackgroundActivitiesConfig | undefined;
  pxfConfig?: PXFConfigSet | undefined;
}

/** Monitoring system metadata. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.greenplum.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the Greenplum® cluster. */
  link: string;
}

export interface GreenplumConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig";
  /** Version of the Greenplum® server software. */
  version: string;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /** Retention policy of automated backups. */
  backupRetainPeriodDays?:
    | number
    | undefined;
  /** Access policy for external services. */
  access?:
    | Access
    | undefined;
  /**
   * ID of the availability zone the cluster belongs to.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /** ID of the subnet the cluster belongs to. This subnet should be a part of the cloud network the cluster belongs to (see [Cluster.network_id]). */
  subnetId: string;
  /**
   * Determines whether the cluster has a public IP address.
   *
   * After the cluster has been created, this setting cannot be changed.
   */
  assignPublicIp: boolean;
}

export interface Access {
  $type: "yandex.cloud.mdb.greenplum.v1.Access";
  /** Allows data export from the cluster to DataLens. */
  dataLens: boolean;
  /** Allows SQL queries to the cluster databases from the management console. */
  webSql: boolean;
  /** Allows access for DataTransfer. */
  dataTransfer: boolean;
}

export interface GreenplumRestoreConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig";
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /** Access policy for external services. */
  access?:
    | Access
    | undefined;
  /**
   * ID of the availability zone where the host resides.
   *
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /**
   * ID of the subnet that the host should belong to. This subnet should be a part of the network that the cluster belongs to.
   * The ID of the network is set in the field [Cluster.network_id].
   */
  subnetId: string;
  /**
   * Determines whether the host should get a public IP address on creation.
   *
   * After a host has been created, this setting cannot be changed.
   *
   * To remove an assigned public IP, or to assign a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
   *
   * Possible values:
   * * `false` - do not assign a public IP to the master host.
   * * `true` - assign a public IP to the master host.
   */
  assignPublicIp: boolean;
}

export interface RestoreResources {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources";
  /** ID of the preset for computational resources available to a host (CPU, memory, etc.). */
  resourcePresetId: string;
  /** Volume of the storage available to a host. */
  diskSize: number;
}

/** Cloud Storage Settings */
export interface CloudStorage {
  $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage";
  /** enable Cloud Storage for cluster */
  enable: boolean;
}

function createBaseCluster(): Cluster {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.Cluster",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    config: undefined,
    description: "",
    labels: {},
    environment: 0,
    monitoring: [],
    masterConfig: undefined,
    segmentConfig: undefined,
    masterHostCount: 0,
    segmentHostCount: 0,
    segmentInHost: 0,
    networkId: "",
    health: 0,
    status: 0,
    maintenanceWindow: undefined,
    plannedOperation: undefined,
    securityGroupIds: [],
    userName: "",
    deletionProtection: false,
    hostGroupIds: [],
    clusterConfig: undefined,
    cloudStorage: undefined,
  };
}

export const Cluster = {
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster" as const,

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
    if (message.config !== undefined) {
      GreenplumConfig.encode(message.config, writer.uint32(42).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Cluster_LabelsEntry.encode(
        { $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry", key: key as any, value },
        writer.uint32(58).fork(),
      ).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(64).int32(message.environment);
    }
    for (const v of message.monitoring) {
      Monitoring.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.masterConfig !== undefined) {
      MasterSubclusterConfig.encode(message.masterConfig, writer.uint32(82).fork()).ldelim();
    }
    if (message.segmentConfig !== undefined) {
      SegmentSubclusterConfig.encode(message.segmentConfig, writer.uint32(90).fork()).ldelim();
    }
    if (message.masterHostCount !== 0) {
      writer.uint32(96).int64(message.masterHostCount);
    }
    if (message.segmentHostCount !== 0) {
      writer.uint32(104).int64(message.segmentHostCount);
    }
    if (message.segmentInHost !== 0) {
      writer.uint32(112).int64(message.segmentInHost);
    }
    if (message.networkId !== "") {
      writer.uint32(122).string(message.networkId);
    }
    if (message.health !== 0) {
      writer.uint32(128).int32(message.health);
    }
    if (message.status !== 0) {
      writer.uint32(136).int32(message.status);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(146).fork()).ldelim();
    }
    if (message.plannedOperation !== undefined) {
      MaintenanceOperation.encode(message.plannedOperation, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(162).string(v!);
    }
    if (message.userName !== "") {
      writer.uint32(170).string(message.userName);
    }
    if (message.deletionProtection === true) {
      writer.uint32(176).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(186).string(v!);
    }
    if (message.clusterConfig !== undefined) {
      ClusterConfigSet.encode(message.clusterConfig, writer.uint32(194).fork()).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(message.cloudStorage, writer.uint32(210).fork()).ldelim();
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

          message.config = GreenplumConfig.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = Cluster_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.environment = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.monitoring.push(Monitoring.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.masterConfig = MasterSubclusterConfig.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.segmentConfig = SegmentSubclusterConfig.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.masterHostCount = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.segmentHostCount = longToNumber(reader.int64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.segmentInHost = longToNumber(reader.int64() as Long);
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.health = reader.int32() as any;
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.plannedOperation = MaintenanceOperation.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.hostGroupIds.push(reader.string());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.clusterConfig = ClusterConfigSet.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
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
      config: isSet(object.config) ? GreenplumConfig.fromJSON(object.config) : undefined,
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
      masterConfig: isSet(object.masterConfig) ? MasterSubclusterConfig.fromJSON(object.masterConfig) : undefined,
      segmentConfig: isSet(object.segmentConfig) ? SegmentSubclusterConfig.fromJSON(object.segmentConfig) : undefined,
      masterHostCount: isSet(object.masterHostCount) ? globalThis.Number(object.masterHostCount) : 0,
      segmentHostCount: isSet(object.segmentHostCount) ? globalThis.Number(object.segmentHostCount) : 0,
      segmentInHost: isSet(object.segmentInHost) ? globalThis.Number(object.segmentInHost) : 0,
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
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      hostGroupIds: globalThis.Array.isArray(object?.hostGroupIds)
        ? object.hostGroupIds.map((e: any) => globalThis.String(e))
        : [],
      clusterConfig: isSet(object.clusterConfig) ? ClusterConfigSet.fromJSON(object.clusterConfig) : undefined,
      cloudStorage: isSet(object.cloudStorage) ? CloudStorage.fromJSON(object.cloudStorage) : undefined,
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
    if (message.config !== undefined) {
      obj.config = GreenplumConfig.toJSON(message.config);
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
    if (message.masterConfig !== undefined) {
      obj.masterConfig = MasterSubclusterConfig.toJSON(message.masterConfig);
    }
    if (message.segmentConfig !== undefined) {
      obj.segmentConfig = SegmentSubclusterConfig.toJSON(message.segmentConfig);
    }
    if (message.masterHostCount !== 0) {
      obj.masterHostCount = Math.round(message.masterHostCount);
    }
    if (message.segmentHostCount !== 0) {
      obj.segmentHostCount = Math.round(message.segmentHostCount);
    }
    if (message.segmentInHost !== 0) {
      obj.segmentInHost = Math.round(message.segmentInHost);
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
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.hostGroupIds?.length) {
      obj.hostGroupIds = message.hostGroupIds;
    }
    if (message.clusterConfig !== undefined) {
      obj.clusterConfig = ClusterConfigSet.toJSON(message.clusterConfig);
    }
    if (message.cloudStorage !== undefined) {
      obj.cloudStorage = CloudStorage.toJSON(message.cloudStorage);
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
    message.config = (object.config !== undefined && object.config !== null)
      ? GreenplumConfig.fromPartial(object.config)
      : undefined;
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.environment = object.environment ?? 0;
    message.monitoring = object.monitoring?.map((e) => Monitoring.fromPartial(e)) || [];
    message.masterConfig = (object.masterConfig !== undefined && object.masterConfig !== null)
      ? MasterSubclusterConfig.fromPartial(object.masterConfig)
      : undefined;
    message.segmentConfig = (object.segmentConfig !== undefined && object.segmentConfig !== null)
      ? SegmentSubclusterConfig.fromPartial(object.segmentConfig)
      : undefined;
    message.masterHostCount = object.masterHostCount ?? 0;
    message.segmentHostCount = object.segmentHostCount ?? 0;
    message.segmentInHost = object.segmentInHost ?? 0;
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
    message.userName = object.userName ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    message.clusterConfig = (object.clusterConfig !== undefined && object.clusterConfig !== null)
      ? ClusterConfigSet.fromPartial(object.clusterConfig)
      : undefined;
    message.cloudStorage = (object.cloudStorage !== undefined && object.cloudStorage !== null)
      ? CloudStorage.fromPartial(object.cloudStorage)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

function createBaseCluster_LabelsEntry(): Cluster_LabelsEntry {
  return { $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry", key: "", value: "" };
}

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry" as const,

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

function createBaseClusterConfigSet(): ClusterConfigSet {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet",
    greenplumConfigSet617: undefined,
    greenplumConfigSet619: undefined,
    greenplumConfigSet621: undefined,
    greenplumConfigSet622: undefined,
    greenplumConfigSet6: undefined,
    pool: undefined,
    backgroundActivities: undefined,
    pxfConfig: undefined,
  };
}

export const ClusterConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet" as const,

  encode(message: ClusterConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.greenplumConfigSet617 !== undefined) {
      GreenplumConfigSet617.encode(message.greenplumConfigSet617, writer.uint32(10).fork()).ldelim();
    }
    if (message.greenplumConfigSet619 !== undefined) {
      GreenplumConfigSet619.encode(message.greenplumConfigSet619, writer.uint32(18).fork()).ldelim();
    }
    if (message.greenplumConfigSet621 !== undefined) {
      GreenplumConfigSet621.encode(message.greenplumConfigSet621, writer.uint32(34).fork()).ldelim();
    }
    if (message.greenplumConfigSet622 !== undefined) {
      GreenplumConfigSet622.encode(message.greenplumConfigSet622, writer.uint32(42).fork()).ldelim();
    }
    if (message.greenplumConfigSet6 !== undefined) {
      GreenplumConfigSet6.encode(message.greenplumConfigSet6, writer.uint32(74).fork()).ldelim();
    }
    if (message.pool !== undefined) {
      ConnectionPoolerConfigSet.encode(message.pool, writer.uint32(26).fork()).ldelim();
    }
    if (message.backgroundActivities !== undefined) {
      BackgroundActivitiesConfig.encode(message.backgroundActivities, writer.uint32(50).fork()).ldelim();
    }
    if (message.pxfConfig !== undefined) {
      PXFConfigSet.encode(message.pxfConfig, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConfigSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClusterConfigSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.greenplumConfigSet617 = GreenplumConfigSet617.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.greenplumConfigSet619 = GreenplumConfigSet619.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.greenplumConfigSet621 = GreenplumConfigSet621.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.greenplumConfigSet622 = GreenplumConfigSet622.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.greenplumConfigSet6 = GreenplumConfigSet6.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pool = ConnectionPoolerConfigSet.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.backgroundActivities = BackgroundActivitiesConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.pxfConfig = PXFConfigSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClusterConfigSet {
    return {
      $type: ClusterConfigSet.$type,
      greenplumConfigSet617: isSet(object.greenplumConfigSet_6_17)
        ? GreenplumConfigSet617.fromJSON(object.greenplumConfigSet_6_17)
        : undefined,
      greenplumConfigSet619: isSet(object.greenplumConfigSet_6_19)
        ? GreenplumConfigSet619.fromJSON(object.greenplumConfigSet_6_19)
        : undefined,
      greenplumConfigSet621: isSet(object.greenplumConfigSet_6_21)
        ? GreenplumConfigSet621.fromJSON(object.greenplumConfigSet_6_21)
        : undefined,
      greenplumConfigSet622: isSet(object.greenplumConfigSet_6_22)
        ? GreenplumConfigSet622.fromJSON(object.greenplumConfigSet_6_22)
        : undefined,
      greenplumConfigSet6: isSet(object.greenplumConfigSet_6)
        ? GreenplumConfigSet6.fromJSON(object.greenplumConfigSet_6)
        : undefined,
      pool: isSet(object.pool) ? ConnectionPoolerConfigSet.fromJSON(object.pool) : undefined,
      backgroundActivities: isSet(object.backgroundActivities)
        ? BackgroundActivitiesConfig.fromJSON(object.backgroundActivities)
        : undefined,
      pxfConfig: isSet(object.pxfConfig) ? PXFConfigSet.fromJSON(object.pxfConfig) : undefined,
    };
  },

  toJSON(message: ClusterConfigSet): unknown {
    const obj: any = {};
    if (message.greenplumConfigSet617 !== undefined) {
      obj.greenplumConfigSet_6_17 = GreenplumConfigSet617.toJSON(message.greenplumConfigSet617);
    }
    if (message.greenplumConfigSet619 !== undefined) {
      obj.greenplumConfigSet_6_19 = GreenplumConfigSet619.toJSON(message.greenplumConfigSet619);
    }
    if (message.greenplumConfigSet621 !== undefined) {
      obj.greenplumConfigSet_6_21 = GreenplumConfigSet621.toJSON(message.greenplumConfigSet621);
    }
    if (message.greenplumConfigSet622 !== undefined) {
      obj.greenplumConfigSet_6_22 = GreenplumConfigSet622.toJSON(message.greenplumConfigSet622);
    }
    if (message.greenplumConfigSet6 !== undefined) {
      obj.greenplumConfigSet_6 = GreenplumConfigSet6.toJSON(message.greenplumConfigSet6);
    }
    if (message.pool !== undefined) {
      obj.pool = ConnectionPoolerConfigSet.toJSON(message.pool);
    }
    if (message.backgroundActivities !== undefined) {
      obj.backgroundActivities = BackgroundActivitiesConfig.toJSON(message.backgroundActivities);
    }
    if (message.pxfConfig !== undefined) {
      obj.pxfConfig = PXFConfigSet.toJSON(message.pxfConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConfigSet>): ClusterConfigSet {
    return ClusterConfigSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConfigSet>): ClusterConfigSet {
    const message = createBaseClusterConfigSet();
    message.greenplumConfigSet617 =
      (object.greenplumConfigSet617 !== undefined && object.greenplumConfigSet617 !== null)
        ? GreenplumConfigSet617.fromPartial(object.greenplumConfigSet617)
        : undefined;
    message.greenplumConfigSet619 =
      (object.greenplumConfigSet619 !== undefined && object.greenplumConfigSet619 !== null)
        ? GreenplumConfigSet619.fromPartial(object.greenplumConfigSet619)
        : undefined;
    message.greenplumConfigSet621 =
      (object.greenplumConfigSet621 !== undefined && object.greenplumConfigSet621 !== null)
        ? GreenplumConfigSet621.fromPartial(object.greenplumConfigSet621)
        : undefined;
    message.greenplumConfigSet622 =
      (object.greenplumConfigSet622 !== undefined && object.greenplumConfigSet622 !== null)
        ? GreenplumConfigSet622.fromPartial(object.greenplumConfigSet622)
        : undefined;
    message.greenplumConfigSet6 = (object.greenplumConfigSet6 !== undefined && object.greenplumConfigSet6 !== null)
      ? GreenplumConfigSet6.fromPartial(object.greenplumConfigSet6)
      : undefined;
    message.pool = (object.pool !== undefined && object.pool !== null)
      ? ConnectionPoolerConfigSet.fromPartial(object.pool)
      : undefined;
    message.backgroundActivities = (object.backgroundActivities !== undefined && object.backgroundActivities !== null)
      ? BackgroundActivitiesConfig.fromPartial(object.backgroundActivities)
      : undefined;
    message.pxfConfig = (object.pxfConfig !== undefined && object.pxfConfig !== null)
      ? PXFConfigSet.fromPartial(object.pxfConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfigSet.$type, ClusterConfigSet);

function createBaseMonitoring(): Monitoring {
  return { $type: "yandex.cloud.mdb.greenplum.v1.Monitoring", name: "", description: "", link: "" };
}

export const Monitoring = {
  $type: "yandex.cloud.mdb.greenplum.v1.Monitoring" as const,

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

function createBaseGreenplumConfig(): GreenplumConfig {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig",
    version: "",
    backupWindowStart: undefined,
    backupRetainPeriodDays: undefined,
    access: undefined,
    zoneId: "",
    subnetId: "",
    assignPublicIp: false,
  };
}

export const GreenplumConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig" as const,

  encode(message: GreenplumConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(18).fork()).ldelim();
    }
    if (message.backupRetainPeriodDays !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backupRetainPeriodDays! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(26).fork()).ldelim();
    }
    if (message.zoneId !== "") {
      writer.uint32(34).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(42).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfig();
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

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.backupRetainPeriodDays = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subnetId = reader.string();
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

  fromJSON(object: any): GreenplumConfig {
    return {
      $type: GreenplumConfig.$type,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      backupRetainPeriodDays: isSet(object.backupRetainPeriodDays) ? Number(object.backupRetainPeriodDays) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
    };
  },

  toJSON(message: GreenplumConfig): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
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
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfig>): GreenplumConfig {
    return GreenplumConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfig>): GreenplumConfig {
    const message = createBaseGreenplumConfig();
    message.version = object.version ?? "";
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfig.$type, GreenplumConfig);

function createBaseAccess(): Access {
  return { $type: "yandex.cloud.mdb.greenplum.v1.Access", dataLens: false, webSql: false, dataTransfer: false };
}

export const Access = {
  $type: "yandex.cloud.mdb.greenplum.v1.Access" as const,

  encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataLens === true) {
      writer.uint32(8).bool(message.dataLens);
    }
    if (message.webSql === true) {
      writer.uint32(16).bool(message.webSql);
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
      webSql: isSet(object.webSql) ? globalThis.Boolean(object.webSql) : false,
      dataTransfer: isSet(object.dataTransfer) ? globalThis.Boolean(object.dataTransfer) : false,
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
    message.webSql = object.webSql ?? false;
    message.dataTransfer = object.dataTransfer ?? false;
    return message;
  },
};

messageTypeRegistry.set(Access.$type, Access);

function createBaseGreenplumRestoreConfig(): GreenplumRestoreConfig {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig",
    backupWindowStart: undefined,
    access: undefined,
    zoneId: "",
    subnetId: "",
    assignPublicIp: false,
  };
}

export const GreenplumRestoreConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig" as const,

  encode(message: GreenplumRestoreConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(10).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(18).fork()).ldelim();
    }
    if (message.zoneId !== "") {
      writer.uint32(26).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(34).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(40).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumRestoreConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumRestoreConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
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

          message.subnetId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): GreenplumRestoreConfig {
    return {
      $type: GreenplumRestoreConfig.$type,
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
    };
  },

  toJSON(message: GreenplumRestoreConfig): unknown {
    const obj: any = {};
    if (message.backupWindowStart !== undefined) {
      obj.backupWindowStart = TimeOfDay.toJSON(message.backupWindowStart);
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumRestoreConfig>): GreenplumRestoreConfig {
    return GreenplumRestoreConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumRestoreConfig>): GreenplumRestoreConfig {
    const message = createBaseGreenplumRestoreConfig();
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(GreenplumRestoreConfig.$type, GreenplumRestoreConfig);

function createBaseRestoreResources(): RestoreResources {
  return { $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources", resourcePresetId: "", diskSize: 0 };
}

export const RestoreResources = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources" as const,

  encode(message: RestoreResources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    if (message.diskSize !== 0) {
      writer.uint32(16).int64(message.diskSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreResources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreResources();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreResources {
    return {
      $type: RestoreResources.$type,
      resourcePresetId: isSet(object.resourcePresetId) ? globalThis.String(object.resourcePresetId) : "",
      diskSize: isSet(object.diskSize) ? globalThis.Number(object.diskSize) : 0,
    };
  },

  toJSON(message: RestoreResources): unknown {
    const obj: any = {};
    if (message.resourcePresetId !== "") {
      obj.resourcePresetId = message.resourcePresetId;
    }
    if (message.diskSize !== 0) {
      obj.diskSize = Math.round(message.diskSize);
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreResources>): RestoreResources {
    return RestoreResources.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreResources>): RestoreResources {
    const message = createBaseRestoreResources();
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.diskSize = object.diskSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RestoreResources.$type, RestoreResources);

function createBaseCloudStorage(): CloudStorage {
  return { $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage", enable: false };
}

export const CloudStorage = {
  $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage" as const,

  encode(message: CloudStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(8).bool(message.enable);
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

          message.enable = reader.bool();
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
    return { $type: CloudStorage.$type, enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false };
  },

  toJSON(message: CloudStorage): unknown {
    const obj: any = {};
    if (message.enable === true) {
      obj.enable = message.enable;
    }
    return obj;
  },

  create(base?: DeepPartial<CloudStorage>): CloudStorage {
    return CloudStorage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloudStorage>): CloudStorage {
    const message = createBaseCloudStorage();
    message.enable = object.enable ?? false;
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
