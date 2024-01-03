/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import {
  CompressionType,
  compressionTypeFromJSON,
  compressionTypeToJSON,
  SaslMechanism,
  saslMechanismFromJSON,
  saslMechanismToJSON,
} from "./common";
import { MaintenanceOperation, MaintenanceWindow } from "./maintenance";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

/**
 * An Apache Kafka® cluster resource.
 * For more information, see the [Concepts](/docs/managed-kafka/concepts) section of the documentation.
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.kafka.v1.Cluster";
  /**
   * ID of the Apache Kafka® cluster.
   * This ID is assigned at creation time.
   */
  id: string;
  /** ID of the folder that the Apache Kafka® cluster belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the Apache Kafka® cluster.
   * The name must be unique within the folder. 1-63 characters long. Value must match the regular expression `[a-zA-Z0-9_-]*`.
   */
  name: string;
  /** Description of the Apache Kafka® cluster. 0-256 characters long. */
  description: string;
  /**
   * Custom labels for the Apache Kafka® cluster as `key:value` pairs.
   * A maximum of 64 labels per resource is allowed.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the Apache Kafka® cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the Apache Kafka® cluster. */
  monitoring: Monitoring[];
  /** Configuration of the Apache Kafka® cluster. */
  config?:
    | ConfigSpec
    | undefined;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** User security groups */
  securityGroupIds: string[];
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Window of maintenance operations. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** Scheduled maintenance operation. */
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
  $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Metadata of monitoring system. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.kafka.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the Apache Kafka® cluster. */
  link: string;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec";
  /** Version of Apache Kafka® used in the cluster. Possible values: `2.1`, `2.6`. */
  version: string;
  /** Configuration and resource allocation for Kafka brokers. */
  kafka?:
    | ConfigSpec_Kafka
    | undefined;
  /** Configuration and resource allocation for ZooKeeper hosts. */
  zookeeper?:
    | ConfigSpec_Zookeeper
    | undefined;
  /** IDs of availability zones where Kafka brokers reside. */
  zoneId: string[];
  /** The number of Kafka brokers deployed in each availability zone. */
  brokersCount?:
    | number
    | undefined;
  /**
   * The flag that defines whether a public IP address is assigned to the cluster.
   * If the value is `true`, then Apache Kafka® cluster is available on the Internet via it's public IP address.
   */
  assignPublicIp: boolean;
  /** Allows to manage topics via AdminAPI */
  unmanagedTopics: boolean;
  /** Enables managed schema registry on cluster */
  schemaRegistry: boolean;
  /** Access policy for external services. */
  access?:
    | Access
    | undefined;
  /** Configuration of REST API. */
  restApiConfig?: ConfigSpec_RestAPIConfig | undefined;
}

export interface ConfigSpec_Kafka {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka";
  /** Resources allocated to Kafka brokers. */
  resources?: Resources | undefined;
  kafkaConfig28?: KafkaConfig28 | undefined;
  kafkaConfig3?: KafkaConfig3 | undefined;
}

export interface ConfigSpec_Zookeeper {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper";
  /** Resources allocated to ZooKeeper hosts. */
  resources?: Resources | undefined;
}

export interface ConfigSpec_RestAPIConfig {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig";
  /** Is REST API enabled for this cluster. */
  enabled: boolean;
}

export interface Resources {
  $type: "yandex.cloud.mdb.kafka.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory, etc.).
   * All available presets are listed in the [documentation](/docs/managed-kafka/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage available to a host, in bytes. Must be greater than 2 * partition segment size in bytes * partitions count, so each partition can have one active segment file and one closed segment file that can be deleted. */
  diskSize: number;
  /** Type of the storage environment for the host. */
  diskTypeId: string;
}

/** Kafka version 2.8 broker configuration. */
export interface KafkaConfig28 {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8";
  /** Cluster topics compression type. */
  compressionType: CompressionType;
  /**
   * The number of messages accumulated on a log partition before messages are flushed to disk.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.flush_messages] setting.
   */
  logFlushIntervalMessages?:
    | number
    | undefined;
  /**
   * The maximum time (in milliseconds) that a message in any topic is kept in memory before flushed to disk.
   * If not set, the value of [log_flush_scheduler_interval_ms] is used.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.flush_ms] setting.
   */
  logFlushIntervalMs?:
    | number
    | undefined;
  /**
   * The frequency of checks (in milliseconds) for any logs that need to be flushed to disk.
   * This check is done by the log flusher.
   */
  logFlushSchedulerIntervalMs?:
    | number
    | undefined;
  /**
   * Partition size limit; Kafka will discard old log segments to free up space if `delete` [TopicConfig2_8.cleanup_policy] is in effect.
   * This setting is helpful if you need to control the size of a log due to limited disk space.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.retention_bytes] setting.
   */
  logRetentionBytes?:
    | number
    | undefined;
  /** The number of hours to keep a log segment file before deleting it. */
  logRetentionHours?:
    | number
    | undefined;
  /**
   * The number of minutes to keep a log segment file before deleting it.
   *
   * If not set, the value of [log_retention_hours] is used.
   */
  logRetentionMinutes?:
    | number
    | undefined;
  /**
   * The number of milliseconds to keep a log segment file before deleting it.
   *
   * If not set, the value of [log_retention_minutes] is used.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.retention_ms] setting.
   */
  logRetentionMs?:
    | number
    | undefined;
  /**
   * The maximum size of a single log file.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.segment_bytes] setting.
   */
  logSegmentBytes?:
    | number
    | undefined;
  /**
   * Should pre allocate file when create new segment?
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.preallocate] setting.
   */
  logPreallocate?:
    | boolean
    | undefined;
  /** The SO_SNDBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
  socketSendBufferBytes?:
    | number
    | undefined;
  /** The SO_RCVBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
  socketReceiveBufferBytes?:
    | number
    | undefined;
  /** Enable auto creation of topic on the server */
  autoCreateTopicsEnable?:
    | boolean
    | undefined;
  /** Default number of partitions per topic on the whole cluster */
  numPartitions?:
    | number
    | undefined;
  /** Default replication factor of the topic on the whole cluster */
  defaultReplicationFactor?:
    | number
    | undefined;
  /** The largest record batch size allowed by Kafka. Default value: 1048588. */
  messageMaxBytes?:
    | number
    | undefined;
  /** The number of bytes of messages to attempt to fetch for each partition. Default value: 1048576. */
  replicaFetchMaxBytes?:
    | number
    | undefined;
  /** A list of cipher suites. */
  sslCipherSuites: string[];
  /** Offset storage time after a consumer group loses all its consumers. Default: 10080. */
  offsetsRetentionMinutes?:
    | number
    | undefined;
  /** The list of SASL mechanisms enabled in the Kafka server. Default: [SCRAM_SHA_512]. */
  saslEnabledMechanisms: SaslMechanism[];
}

/** Kafka version 3.x broker configuration. */
export interface KafkaConfig3 {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3";
  /** Cluster topics compression type. */
  compressionType: CompressionType;
  /**
   * The number of messages accumulated on a log partition before messages are flushed to disk.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.flush_messages] setting.
   */
  logFlushIntervalMessages?:
    | number
    | undefined;
  /**
   * The maximum time (in milliseconds) that a message in any topic is kept in memory before flushed to disk.
   * If not set, the value of [log_flush_scheduler_interval_ms] is used.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.flush_ms] setting.
   */
  logFlushIntervalMs?:
    | number
    | undefined;
  /**
   * The frequency of checks (in milliseconds) for any logs that need to be flushed to disk.
   * This check is done by the log flusher.
   */
  logFlushSchedulerIntervalMs?:
    | number
    | undefined;
  /**
   * Partition size limit; Kafka will discard old log segments to free up space if `delete` [TopicConfig3.cleanup_policy] is in effect.
   * This setting is helpful if you need to control the size of a log due to limited disk space.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.retention_bytes] setting.
   */
  logRetentionBytes?:
    | number
    | undefined;
  /** The number of hours to keep a log segment file before deleting it. */
  logRetentionHours?:
    | number
    | undefined;
  /**
   * The number of minutes to keep a log segment file before deleting it.
   *
   * If not set, the value of [log_retention_hours] is used.
   */
  logRetentionMinutes?:
    | number
    | undefined;
  /**
   * The number of milliseconds to keep a log segment file before deleting it.
   *
   * If not set, the value of [log_retention_minutes] is used.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.retention_ms] setting.
   */
  logRetentionMs?:
    | number
    | undefined;
  /**
   * The maximum size of a single log file.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.segment_bytes] setting.
   */
  logSegmentBytes?:
    | number
    | undefined;
  /**
   * Should pre allocate file when create new segment?
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.preallocate] setting.
   */
  logPreallocate?:
    | boolean
    | undefined;
  /** The SO_SNDBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
  socketSendBufferBytes?:
    | number
    | undefined;
  /** The SO_RCVBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
  socketReceiveBufferBytes?:
    | number
    | undefined;
  /** Enable auto creation of topic on the server */
  autoCreateTopicsEnable?:
    | boolean
    | undefined;
  /** Default number of partitions per topic on the whole cluster */
  numPartitions?:
    | number
    | undefined;
  /** Default replication factor of the topic on the whole cluster */
  defaultReplicationFactor?:
    | number
    | undefined;
  /** The largest record batch size allowed by Kafka. Default value: 1048588. */
  messageMaxBytes?:
    | number
    | undefined;
  /** The number of bytes of messages to attempt to fetch for each partition. Default value: 1048576. */
  replicaFetchMaxBytes?:
    | number
    | undefined;
  /** A list of cipher suites. */
  sslCipherSuites: string[];
  /** Offset storage time after a consumer group loses all its consumers. Default: 10080. */
  offsetsRetentionMinutes?:
    | number
    | undefined;
  /** The list of SASL mechanisms enabled in the Kafka server. Default: [SCRAM_SHA_512]. */
  saslEnabledMechanisms: SaslMechanism[];
}

/** Cluster host metadata. */
export interface Host {
  $type: "yandex.cloud.mdb.kafka.v1.Host";
  /** Name of the host. */
  name: string;
  /** ID of the Apache Kafka® cluster. */
  clusterId: string;
  /** ID of the availability zone where the host resides. */
  zoneId: string;
  /** Host role. */
  role: Host_Role;
  /** Computational resources allocated to the host. */
  resources?:
    | Resources
    | undefined;
  /** Aggregated host health data. */
  health: Host_Health;
  /** ID of the subnet the host resides in. */
  subnetId: string;
  /**
   * The flag that defines whether a public IP address is assigned to the node.
   *
   * If the value is `true`, then this node is available on the Internet via it's public IP address.
   */
  assignPublicIp: boolean;
}

export enum Host_Role {
  ROLE_UNSPECIFIED = 0,
  /** KAFKA - the host is a Kafka broker. */
  KAFKA = 1,
  /** ZOOKEEPER - the host is a ZooKeeper server. */
  ZOOKEEPER = 2,
  UNRECOGNIZED = -1,
}

export function host_RoleFromJSON(object: any): Host_Role {
  switch (object) {
    case 0:
    case "ROLE_UNSPECIFIED":
      return Host_Role.ROLE_UNSPECIFIED;
    case 1:
    case "KAFKA":
      return Host_Role.KAFKA;
    case 2:
    case "ZOOKEEPER":
      return Host_Role.ZOOKEEPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Role.UNRECOGNIZED;
  }
}

export function host_RoleToJSON(object: Host_Role): string {
  switch (object) {
    case Host_Role.ROLE_UNSPECIFIED:
      return "ROLE_UNSPECIFIED";
    case Host_Role.KAFKA:
      return "KAFKA";
    case Host_Role.ZOOKEEPER:
      return "ZOOKEEPER";
    case Host_Role.UNRECOGNIZED:
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

export interface Access {
  $type: "yandex.cloud.mdb.kafka.v1.Access";
  /** Allow access for DataTransfer. */
  dataTransfer: boolean;
}

function createBaseCluster(): Cluster {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.Cluster",
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
    hostGroupIds: [],
    deletionProtection: false,
    maintenanceWindow: undefined,
    plannedOperation: undefined,
  };
}

export const Cluster = {
  $type: "yandex.cloud.mdb.kafka.v1.Cluster" as const,

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
        { $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry", key: key as any, value },
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
      ConfigSpec.encode(message.config, writer.uint32(74).fork()).ldelim();
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
    for (const v of message.hostGroupIds) {
      writer.uint32(114).string(v!);
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

          message.config = ConfigSpec.decode(reader, reader.uint32());
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

          message.hostGroupIds.push(reader.string());
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
      config: isSet(object.config) ? ConfigSpec.fromJSON(object.config) : undefined,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      health: isSet(object.health) ? cluster_HealthFromJSON(object.health) : 0,
      status: isSet(object.status) ? cluster_StatusFromJSON(object.status) : 0,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      hostGroupIds: globalThis.Array.isArray(object?.hostGroupIds)
        ? object.hostGroupIds.map((e: any) => globalThis.String(e))
        : [],
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
      obj.config = ConfigSpec.toJSON(message.config);
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
    if (message.hostGroupIds?.length) {
      obj.hostGroupIds = message.hostGroupIds;
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
      ? ConfigSpec.fromPartial(object.config)
      : undefined;
    message.networkId = object.networkId ?? "";
    message.health = object.health ?? 0;
    message.status = object.status ?? 0;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
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
  return { $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry", key: "", value: "" };
}

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.kafka.v1.Monitoring", name: "", description: "", link: "" };
}

export const Monitoring = {
  $type: "yandex.cloud.mdb.kafka.v1.Monitoring" as const,

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

function createBaseConfigSpec(): ConfigSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec",
    version: "",
    kafka: undefined,
    zookeeper: undefined,
    zoneId: [],
    brokersCount: undefined,
    assignPublicIp: false,
    unmanagedTopics: false,
    schemaRegistry: false,
    access: undefined,
    restApiConfig: undefined,
  };
}

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec" as const,

  encode(message: ConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.kafka !== undefined) {
      ConfigSpec_Kafka.encode(message.kafka, writer.uint32(18).fork()).ldelim();
    }
    if (message.zookeeper !== undefined) {
      ConfigSpec_Zookeeper.encode(message.zookeeper, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.zoneId) {
      writer.uint32(34).string(v!);
    }
    if (message.brokersCount !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.brokersCount! }, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    if (message.unmanagedTopics === true) {
      writer.uint32(56).bool(message.unmanagedTopics);
    }
    if (message.schemaRegistry === true) {
      writer.uint32(64).bool(message.schemaRegistry);
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(74).fork()).ldelim();
    }
    if (message.restApiConfig !== undefined) {
      ConfigSpec_RestAPIConfig.encode(message.restApiConfig, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigSpec();
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

          message.kafka = ConfigSpec_Kafka.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.zookeeper = ConfigSpec_Zookeeper.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zoneId.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.brokersCount = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.unmanagedTopics = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.schemaRegistry = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.restApiConfig = ConfigSpec_RestAPIConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigSpec {
    return {
      $type: ConfigSpec.$type,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      kafka: isSet(object.kafka) ? ConfigSpec_Kafka.fromJSON(object.kafka) : undefined,
      zookeeper: isSet(object.zookeeper) ? ConfigSpec_Zookeeper.fromJSON(object.zookeeper) : undefined,
      zoneId: globalThis.Array.isArray(object?.zoneId) ? object.zoneId.map((e: any) => globalThis.String(e)) : [],
      brokersCount: isSet(object.brokersCount) ? Number(object.brokersCount) : undefined,
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      unmanagedTopics: isSet(object.unmanagedTopics) ? globalThis.Boolean(object.unmanagedTopics) : false,
      schemaRegistry: isSet(object.schemaRegistry) ? globalThis.Boolean(object.schemaRegistry) : false,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
      restApiConfig: isSet(object.restApiConfig) ? ConfigSpec_RestAPIConfig.fromJSON(object.restApiConfig) : undefined,
    };
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.kafka !== undefined) {
      obj.kafka = ConfigSpec_Kafka.toJSON(message.kafka);
    }
    if (message.zookeeper !== undefined) {
      obj.zookeeper = ConfigSpec_Zookeeper.toJSON(message.zookeeper);
    }
    if (message.zoneId?.length) {
      obj.zoneId = message.zoneId;
    }
    if (message.brokersCount !== undefined) {
      obj.brokersCount = message.brokersCount;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    if (message.unmanagedTopics === true) {
      obj.unmanagedTopics = message.unmanagedTopics;
    }
    if (message.schemaRegistry === true) {
      obj.schemaRegistry = message.schemaRegistry;
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    if (message.restApiConfig !== undefined) {
      obj.restApiConfig = ConfigSpec_RestAPIConfig.toJSON(message.restApiConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec>): ConfigSpec {
    return ConfigSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec {
    const message = createBaseConfigSpec();
    message.version = object.version ?? "";
    message.kafka = (object.kafka !== undefined && object.kafka !== null)
      ? ConfigSpec_Kafka.fromPartial(object.kafka)
      : undefined;
    message.zookeeper = (object.zookeeper !== undefined && object.zookeeper !== null)
      ? ConfigSpec_Zookeeper.fromPartial(object.zookeeper)
      : undefined;
    message.zoneId = object.zoneId?.map((e) => e) || [];
    message.brokersCount = object.brokersCount ?? undefined;
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.unmanagedTopics = object.unmanagedTopics ?? false;
    message.schemaRegistry = object.schemaRegistry ?? false;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    message.restApiConfig = (object.restApiConfig !== undefined && object.restApiConfig !== null)
      ? ConfigSpec_RestAPIConfig.fromPartial(object.restApiConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

function createBaseConfigSpec_Kafka(): ConfigSpec_Kafka {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka",
    resources: undefined,
    kafkaConfig28: undefined,
    kafkaConfig3: undefined,
  };
}

export const ConfigSpec_Kafka = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka" as const,

  encode(message: ConfigSpec_Kafka, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.kafkaConfig28 !== undefined) {
      KafkaConfig28.encode(message.kafkaConfig28, writer.uint32(34).fork()).ldelim();
    }
    if (message.kafkaConfig3 !== undefined) {
      KafkaConfig3.encode(message.kafkaConfig3, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec_Kafka {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigSpec_Kafka();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.kafkaConfig28 = KafkaConfig28.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.kafkaConfig3 = KafkaConfig3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigSpec_Kafka {
    return {
      $type: ConfigSpec_Kafka.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      kafkaConfig28: isSet(object.kafkaConfig_2_8) ? KafkaConfig28.fromJSON(object.kafkaConfig_2_8) : undefined,
      kafkaConfig3: isSet(object.kafkaConfig_3) ? KafkaConfig3.fromJSON(object.kafkaConfig_3) : undefined,
    };
  },

  toJSON(message: ConfigSpec_Kafka): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.kafkaConfig28 !== undefined) {
      obj.kafkaConfig_2_8 = KafkaConfig28.toJSON(message.kafkaConfig28);
    }
    if (message.kafkaConfig3 !== undefined) {
      obj.kafkaConfig_3 = KafkaConfig3.toJSON(message.kafkaConfig3);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec_Kafka>): ConfigSpec_Kafka {
    return ConfigSpec_Kafka.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec_Kafka>): ConfigSpec_Kafka {
    const message = createBaseConfigSpec_Kafka();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.kafkaConfig28 = (object.kafkaConfig28 !== undefined && object.kafkaConfig28 !== null)
      ? KafkaConfig28.fromPartial(object.kafkaConfig28)
      : undefined;
    message.kafkaConfig3 = (object.kafkaConfig3 !== undefined && object.kafkaConfig3 !== null)
      ? KafkaConfig3.fromPartial(object.kafkaConfig3)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec_Kafka.$type, ConfigSpec_Kafka);

function createBaseConfigSpec_Zookeeper(): ConfigSpec_Zookeeper {
  return { $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper", resources: undefined };
}

export const ConfigSpec_Zookeeper = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper" as const,

  encode(message: ConfigSpec_Zookeeper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec_Zookeeper {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigSpec_Zookeeper();
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

  fromJSON(object: any): ConfigSpec_Zookeeper {
    return {
      $type: ConfigSpec_Zookeeper.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: ConfigSpec_Zookeeper): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec_Zookeeper>): ConfigSpec_Zookeeper {
    return ConfigSpec_Zookeeper.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec_Zookeeper>): ConfigSpec_Zookeeper {
    const message = createBaseConfigSpec_Zookeeper();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec_Zookeeper.$type, ConfigSpec_Zookeeper);

function createBaseConfigSpec_RestAPIConfig(): ConfigSpec_RestAPIConfig {
  return { $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig", enabled: false };
}

export const ConfigSpec_RestAPIConfig = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig" as const,

  encode(message: ConfigSpec_RestAPIConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec_RestAPIConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigSpec_RestAPIConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigSpec_RestAPIConfig {
    return {
      $type: ConfigSpec_RestAPIConfig.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
    };
  },

  toJSON(message: ConfigSpec_RestAPIConfig): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec_RestAPIConfig>): ConfigSpec_RestAPIConfig {
    return ConfigSpec_RestAPIConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec_RestAPIConfig>): ConfigSpec_RestAPIConfig {
    const message = createBaseConfigSpec_RestAPIConfig();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec_RestAPIConfig.$type, ConfigSpec_RestAPIConfig);

function createBaseResources(): Resources {
  return { $type: "yandex.cloud.mdb.kafka.v1.Resources", resourcePresetId: "", diskSize: 0, diskTypeId: "" };
}

export const Resources = {
  $type: "yandex.cloud.mdb.kafka.v1.Resources" as const,

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

function createBaseKafkaConfig28(): KafkaConfig28 {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8",
    compressionType: 0,
    logFlushIntervalMessages: undefined,
    logFlushIntervalMs: undefined,
    logFlushSchedulerIntervalMs: undefined,
    logRetentionBytes: undefined,
    logRetentionHours: undefined,
    logRetentionMinutes: undefined,
    logRetentionMs: undefined,
    logSegmentBytes: undefined,
    logPreallocate: undefined,
    socketSendBufferBytes: undefined,
    socketReceiveBufferBytes: undefined,
    autoCreateTopicsEnable: undefined,
    numPartitions: undefined,
    defaultReplicationFactor: undefined,
    messageMaxBytes: undefined,
    replicaFetchMaxBytes: undefined,
    sslCipherSuites: [],
    offsetsRetentionMinutes: undefined,
    saslEnabledMechanisms: [],
  };
}

export const KafkaConfig28 = {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8" as const,

  encode(message: KafkaConfig28, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.compressionType !== 0) {
      writer.uint32(8).int32(message.compressionType);
    }
    if (message.logFlushIntervalMessages !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logFlushIntervalMessages! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.logFlushIntervalMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logFlushIntervalMs! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.logFlushSchedulerIntervalMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logFlushSchedulerIntervalMs! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.logRetentionBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionBytes! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.logRetentionHours !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionHours! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.logRetentionMinutes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionMinutes! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.logRetentionMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionMs! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.logSegmentBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logSegmentBytes! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.logPreallocate !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logPreallocate! }, writer.uint32(82).fork())
        .ldelim();
    }
    if (message.socketSendBufferBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.socketSendBufferBytes! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.socketReceiveBufferBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.socketReceiveBufferBytes! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.autoCreateTopicsEnable !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autoCreateTopicsEnable! },
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.numPartitions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.numPartitions! },
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.defaultReplicationFactor !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.defaultReplicationFactor! },
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.messageMaxBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.messageMaxBytes! },
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.replicaFetchMaxBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicaFetchMaxBytes! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    for (const v of message.sslCipherSuites) {
      writer.uint32(146).string(v!);
    }
    if (message.offsetsRetentionMinutes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.offsetsRetentionMinutes! },
        writer.uint32(154).fork(),
      ).ldelim();
    }
    writer.uint32(162).fork();
    for (const v of message.saslEnabledMechanisms) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaConfig28 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaConfig28();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.compressionType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logFlushIntervalMessages = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.logFlushIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.logFlushSchedulerIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.logRetentionBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.logRetentionHours = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.logRetentionMinutes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.logRetentionMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.logSegmentBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.logPreallocate = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.socketSendBufferBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.socketReceiveBufferBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.autoCreateTopicsEnable = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.numPartitions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.defaultReplicationFactor = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.messageMaxBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.replicaFetchMaxBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.sslCipherSuites.push(reader.string());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.offsetsRetentionMinutes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag === 160) {
            message.saslEnabledMechanisms.push(reader.int32() as any);

            continue;
          }

          if (tag === 162) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.saslEnabledMechanisms.push(reader.int32() as any);
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

  fromJSON(object: any): KafkaConfig28 {
    return {
      $type: KafkaConfig28.$type,
      compressionType: isSet(object.compressionType) ? compressionTypeFromJSON(object.compressionType) : 0,
      logFlushIntervalMessages: isSet(object.logFlushIntervalMessages)
        ? Number(object.logFlushIntervalMessages)
        : undefined,
      logFlushIntervalMs: isSet(object.logFlushIntervalMs) ? Number(object.logFlushIntervalMs) : undefined,
      logFlushSchedulerIntervalMs: isSet(object.logFlushSchedulerIntervalMs)
        ? Number(object.logFlushSchedulerIntervalMs)
        : undefined,
      logRetentionBytes: isSet(object.logRetentionBytes) ? Number(object.logRetentionBytes) : undefined,
      logRetentionHours: isSet(object.logRetentionHours) ? Number(object.logRetentionHours) : undefined,
      logRetentionMinutes: isSet(object.logRetentionMinutes) ? Number(object.logRetentionMinutes) : undefined,
      logRetentionMs: isSet(object.logRetentionMs) ? Number(object.logRetentionMs) : undefined,
      logSegmentBytes: isSet(object.logSegmentBytes) ? Number(object.logSegmentBytes) : undefined,
      logPreallocate: isSet(object.logPreallocate) ? Boolean(object.logPreallocate) : undefined,
      socketSendBufferBytes: isSet(object.socketSendBufferBytes) ? Number(object.socketSendBufferBytes) : undefined,
      socketReceiveBufferBytes: isSet(object.socketReceiveBufferBytes)
        ? Number(object.socketReceiveBufferBytes)
        : undefined,
      autoCreateTopicsEnable: isSet(object.autoCreateTopicsEnable) ? Boolean(object.autoCreateTopicsEnable) : undefined,
      numPartitions: isSet(object.numPartitions) ? Number(object.numPartitions) : undefined,
      defaultReplicationFactor: isSet(object.defaultReplicationFactor)
        ? Number(object.defaultReplicationFactor)
        : undefined,
      messageMaxBytes: isSet(object.messageMaxBytes) ? Number(object.messageMaxBytes) : undefined,
      replicaFetchMaxBytes: isSet(object.replicaFetchMaxBytes) ? Number(object.replicaFetchMaxBytes) : undefined,
      sslCipherSuites: globalThis.Array.isArray(object?.sslCipherSuites)
        ? object.sslCipherSuites.map((e: any) => globalThis.String(e))
        : [],
      offsetsRetentionMinutes: isSet(object.offsetsRetentionMinutes)
        ? Number(object.offsetsRetentionMinutes)
        : undefined,
      saslEnabledMechanisms: globalThis.Array.isArray(object?.saslEnabledMechanisms)
        ? object.saslEnabledMechanisms.map((e: any) => saslMechanismFromJSON(e))
        : [],
    };
  },

  toJSON(message: KafkaConfig28): unknown {
    const obj: any = {};
    if (message.compressionType !== 0) {
      obj.compressionType = compressionTypeToJSON(message.compressionType);
    }
    if (message.logFlushIntervalMessages !== undefined) {
      obj.logFlushIntervalMessages = message.logFlushIntervalMessages;
    }
    if (message.logFlushIntervalMs !== undefined) {
      obj.logFlushIntervalMs = message.logFlushIntervalMs;
    }
    if (message.logFlushSchedulerIntervalMs !== undefined) {
      obj.logFlushSchedulerIntervalMs = message.logFlushSchedulerIntervalMs;
    }
    if (message.logRetentionBytes !== undefined) {
      obj.logRetentionBytes = message.logRetentionBytes;
    }
    if (message.logRetentionHours !== undefined) {
      obj.logRetentionHours = message.logRetentionHours;
    }
    if (message.logRetentionMinutes !== undefined) {
      obj.logRetentionMinutes = message.logRetentionMinutes;
    }
    if (message.logRetentionMs !== undefined) {
      obj.logRetentionMs = message.logRetentionMs;
    }
    if (message.logSegmentBytes !== undefined) {
      obj.logSegmentBytes = message.logSegmentBytes;
    }
    if (message.logPreallocate !== undefined) {
      obj.logPreallocate = message.logPreallocate;
    }
    if (message.socketSendBufferBytes !== undefined) {
      obj.socketSendBufferBytes = message.socketSendBufferBytes;
    }
    if (message.socketReceiveBufferBytes !== undefined) {
      obj.socketReceiveBufferBytes = message.socketReceiveBufferBytes;
    }
    if (message.autoCreateTopicsEnable !== undefined) {
      obj.autoCreateTopicsEnable = message.autoCreateTopicsEnable;
    }
    if (message.numPartitions !== undefined) {
      obj.numPartitions = message.numPartitions;
    }
    if (message.defaultReplicationFactor !== undefined) {
      obj.defaultReplicationFactor = message.defaultReplicationFactor;
    }
    if (message.messageMaxBytes !== undefined) {
      obj.messageMaxBytes = message.messageMaxBytes;
    }
    if (message.replicaFetchMaxBytes !== undefined) {
      obj.replicaFetchMaxBytes = message.replicaFetchMaxBytes;
    }
    if (message.sslCipherSuites?.length) {
      obj.sslCipherSuites = message.sslCipherSuites;
    }
    if (message.offsetsRetentionMinutes !== undefined) {
      obj.offsetsRetentionMinutes = message.offsetsRetentionMinutes;
    }
    if (message.saslEnabledMechanisms?.length) {
      obj.saslEnabledMechanisms = message.saslEnabledMechanisms.map((e) => saslMechanismToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<KafkaConfig28>): KafkaConfig28 {
    return KafkaConfig28.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<KafkaConfig28>): KafkaConfig28 {
    const message = createBaseKafkaConfig28();
    message.compressionType = object.compressionType ?? 0;
    message.logFlushIntervalMessages = object.logFlushIntervalMessages ?? undefined;
    message.logFlushIntervalMs = object.logFlushIntervalMs ?? undefined;
    message.logFlushSchedulerIntervalMs = object.logFlushSchedulerIntervalMs ?? undefined;
    message.logRetentionBytes = object.logRetentionBytes ?? undefined;
    message.logRetentionHours = object.logRetentionHours ?? undefined;
    message.logRetentionMinutes = object.logRetentionMinutes ?? undefined;
    message.logRetentionMs = object.logRetentionMs ?? undefined;
    message.logSegmentBytes = object.logSegmentBytes ?? undefined;
    message.logPreallocate = object.logPreallocate ?? undefined;
    message.socketSendBufferBytes = object.socketSendBufferBytes ?? undefined;
    message.socketReceiveBufferBytes = object.socketReceiveBufferBytes ?? undefined;
    message.autoCreateTopicsEnable = object.autoCreateTopicsEnable ?? undefined;
    message.numPartitions = object.numPartitions ?? undefined;
    message.defaultReplicationFactor = object.defaultReplicationFactor ?? undefined;
    message.messageMaxBytes = object.messageMaxBytes ?? undefined;
    message.replicaFetchMaxBytes = object.replicaFetchMaxBytes ?? undefined;
    message.sslCipherSuites = object.sslCipherSuites?.map((e) => e) || [];
    message.offsetsRetentionMinutes = object.offsetsRetentionMinutes ?? undefined;
    message.saslEnabledMechanisms = object.saslEnabledMechanisms?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(KafkaConfig28.$type, KafkaConfig28);

function createBaseKafkaConfig3(): KafkaConfig3 {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3",
    compressionType: 0,
    logFlushIntervalMessages: undefined,
    logFlushIntervalMs: undefined,
    logFlushSchedulerIntervalMs: undefined,
    logRetentionBytes: undefined,
    logRetentionHours: undefined,
    logRetentionMinutes: undefined,
    logRetentionMs: undefined,
    logSegmentBytes: undefined,
    logPreallocate: undefined,
    socketSendBufferBytes: undefined,
    socketReceiveBufferBytes: undefined,
    autoCreateTopicsEnable: undefined,
    numPartitions: undefined,
    defaultReplicationFactor: undefined,
    messageMaxBytes: undefined,
    replicaFetchMaxBytes: undefined,
    sslCipherSuites: [],
    offsetsRetentionMinutes: undefined,
    saslEnabledMechanisms: [],
  };
}

export const KafkaConfig3 = {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3" as const,

  encode(message: KafkaConfig3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.compressionType !== 0) {
      writer.uint32(8).int32(message.compressionType);
    }
    if (message.logFlushIntervalMessages !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logFlushIntervalMessages! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.logFlushIntervalMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logFlushIntervalMs! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.logFlushSchedulerIntervalMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logFlushSchedulerIntervalMs! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.logRetentionBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionBytes! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.logRetentionHours !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionHours! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.logRetentionMinutes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionMinutes! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.logRetentionMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionMs! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.logSegmentBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logSegmentBytes! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.logPreallocate !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logPreallocate! }, writer.uint32(82).fork())
        .ldelim();
    }
    if (message.socketSendBufferBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.socketSendBufferBytes! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.socketReceiveBufferBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.socketReceiveBufferBytes! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.autoCreateTopicsEnable !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autoCreateTopicsEnable! },
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.numPartitions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.numPartitions! },
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.defaultReplicationFactor !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.defaultReplicationFactor! },
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.messageMaxBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.messageMaxBytes! },
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.replicaFetchMaxBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicaFetchMaxBytes! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    for (const v of message.sslCipherSuites) {
      writer.uint32(146).string(v!);
    }
    if (message.offsetsRetentionMinutes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.offsetsRetentionMinutes! },
        writer.uint32(154).fork(),
      ).ldelim();
    }
    writer.uint32(162).fork();
    for (const v of message.saslEnabledMechanisms) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaConfig3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaConfig3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.compressionType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logFlushIntervalMessages = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.logFlushIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.logFlushSchedulerIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.logRetentionBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.logRetentionHours = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.logRetentionMinutes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.logRetentionMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.logSegmentBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.logPreallocate = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.socketSendBufferBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.socketReceiveBufferBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.autoCreateTopicsEnable = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.numPartitions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.defaultReplicationFactor = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.messageMaxBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.replicaFetchMaxBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.sslCipherSuites.push(reader.string());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.offsetsRetentionMinutes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag === 160) {
            message.saslEnabledMechanisms.push(reader.int32() as any);

            continue;
          }

          if (tag === 162) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.saslEnabledMechanisms.push(reader.int32() as any);
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

  fromJSON(object: any): KafkaConfig3 {
    return {
      $type: KafkaConfig3.$type,
      compressionType: isSet(object.compressionType) ? compressionTypeFromJSON(object.compressionType) : 0,
      logFlushIntervalMessages: isSet(object.logFlushIntervalMessages)
        ? Number(object.logFlushIntervalMessages)
        : undefined,
      logFlushIntervalMs: isSet(object.logFlushIntervalMs) ? Number(object.logFlushIntervalMs) : undefined,
      logFlushSchedulerIntervalMs: isSet(object.logFlushSchedulerIntervalMs)
        ? Number(object.logFlushSchedulerIntervalMs)
        : undefined,
      logRetentionBytes: isSet(object.logRetentionBytes) ? Number(object.logRetentionBytes) : undefined,
      logRetentionHours: isSet(object.logRetentionHours) ? Number(object.logRetentionHours) : undefined,
      logRetentionMinutes: isSet(object.logRetentionMinutes) ? Number(object.logRetentionMinutes) : undefined,
      logRetentionMs: isSet(object.logRetentionMs) ? Number(object.logRetentionMs) : undefined,
      logSegmentBytes: isSet(object.logSegmentBytes) ? Number(object.logSegmentBytes) : undefined,
      logPreallocate: isSet(object.logPreallocate) ? Boolean(object.logPreallocate) : undefined,
      socketSendBufferBytes: isSet(object.socketSendBufferBytes) ? Number(object.socketSendBufferBytes) : undefined,
      socketReceiveBufferBytes: isSet(object.socketReceiveBufferBytes)
        ? Number(object.socketReceiveBufferBytes)
        : undefined,
      autoCreateTopicsEnable: isSet(object.autoCreateTopicsEnable) ? Boolean(object.autoCreateTopicsEnable) : undefined,
      numPartitions: isSet(object.numPartitions) ? Number(object.numPartitions) : undefined,
      defaultReplicationFactor: isSet(object.defaultReplicationFactor)
        ? Number(object.defaultReplicationFactor)
        : undefined,
      messageMaxBytes: isSet(object.messageMaxBytes) ? Number(object.messageMaxBytes) : undefined,
      replicaFetchMaxBytes: isSet(object.replicaFetchMaxBytes) ? Number(object.replicaFetchMaxBytes) : undefined,
      sslCipherSuites: globalThis.Array.isArray(object?.sslCipherSuites)
        ? object.sslCipherSuites.map((e: any) => globalThis.String(e))
        : [],
      offsetsRetentionMinutes: isSet(object.offsetsRetentionMinutes)
        ? Number(object.offsetsRetentionMinutes)
        : undefined,
      saslEnabledMechanisms: globalThis.Array.isArray(object?.saslEnabledMechanisms)
        ? object.saslEnabledMechanisms.map((e: any) => saslMechanismFromJSON(e))
        : [],
    };
  },

  toJSON(message: KafkaConfig3): unknown {
    const obj: any = {};
    if (message.compressionType !== 0) {
      obj.compressionType = compressionTypeToJSON(message.compressionType);
    }
    if (message.logFlushIntervalMessages !== undefined) {
      obj.logFlushIntervalMessages = message.logFlushIntervalMessages;
    }
    if (message.logFlushIntervalMs !== undefined) {
      obj.logFlushIntervalMs = message.logFlushIntervalMs;
    }
    if (message.logFlushSchedulerIntervalMs !== undefined) {
      obj.logFlushSchedulerIntervalMs = message.logFlushSchedulerIntervalMs;
    }
    if (message.logRetentionBytes !== undefined) {
      obj.logRetentionBytes = message.logRetentionBytes;
    }
    if (message.logRetentionHours !== undefined) {
      obj.logRetentionHours = message.logRetentionHours;
    }
    if (message.logRetentionMinutes !== undefined) {
      obj.logRetentionMinutes = message.logRetentionMinutes;
    }
    if (message.logRetentionMs !== undefined) {
      obj.logRetentionMs = message.logRetentionMs;
    }
    if (message.logSegmentBytes !== undefined) {
      obj.logSegmentBytes = message.logSegmentBytes;
    }
    if (message.logPreallocate !== undefined) {
      obj.logPreallocate = message.logPreallocate;
    }
    if (message.socketSendBufferBytes !== undefined) {
      obj.socketSendBufferBytes = message.socketSendBufferBytes;
    }
    if (message.socketReceiveBufferBytes !== undefined) {
      obj.socketReceiveBufferBytes = message.socketReceiveBufferBytes;
    }
    if (message.autoCreateTopicsEnable !== undefined) {
      obj.autoCreateTopicsEnable = message.autoCreateTopicsEnable;
    }
    if (message.numPartitions !== undefined) {
      obj.numPartitions = message.numPartitions;
    }
    if (message.defaultReplicationFactor !== undefined) {
      obj.defaultReplicationFactor = message.defaultReplicationFactor;
    }
    if (message.messageMaxBytes !== undefined) {
      obj.messageMaxBytes = message.messageMaxBytes;
    }
    if (message.replicaFetchMaxBytes !== undefined) {
      obj.replicaFetchMaxBytes = message.replicaFetchMaxBytes;
    }
    if (message.sslCipherSuites?.length) {
      obj.sslCipherSuites = message.sslCipherSuites;
    }
    if (message.offsetsRetentionMinutes !== undefined) {
      obj.offsetsRetentionMinutes = message.offsetsRetentionMinutes;
    }
    if (message.saslEnabledMechanisms?.length) {
      obj.saslEnabledMechanisms = message.saslEnabledMechanisms.map((e) => saslMechanismToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<KafkaConfig3>): KafkaConfig3 {
    return KafkaConfig3.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<KafkaConfig3>): KafkaConfig3 {
    const message = createBaseKafkaConfig3();
    message.compressionType = object.compressionType ?? 0;
    message.logFlushIntervalMessages = object.logFlushIntervalMessages ?? undefined;
    message.logFlushIntervalMs = object.logFlushIntervalMs ?? undefined;
    message.logFlushSchedulerIntervalMs = object.logFlushSchedulerIntervalMs ?? undefined;
    message.logRetentionBytes = object.logRetentionBytes ?? undefined;
    message.logRetentionHours = object.logRetentionHours ?? undefined;
    message.logRetentionMinutes = object.logRetentionMinutes ?? undefined;
    message.logRetentionMs = object.logRetentionMs ?? undefined;
    message.logSegmentBytes = object.logSegmentBytes ?? undefined;
    message.logPreallocate = object.logPreallocate ?? undefined;
    message.socketSendBufferBytes = object.socketSendBufferBytes ?? undefined;
    message.socketReceiveBufferBytes = object.socketReceiveBufferBytes ?? undefined;
    message.autoCreateTopicsEnable = object.autoCreateTopicsEnable ?? undefined;
    message.numPartitions = object.numPartitions ?? undefined;
    message.defaultReplicationFactor = object.defaultReplicationFactor ?? undefined;
    message.messageMaxBytes = object.messageMaxBytes ?? undefined;
    message.replicaFetchMaxBytes = object.replicaFetchMaxBytes ?? undefined;
    message.sslCipherSuites = object.sslCipherSuites?.map((e) => e) || [];
    message.offsetsRetentionMinutes = object.offsetsRetentionMinutes ?? undefined;
    message.saslEnabledMechanisms = object.saslEnabledMechanisms?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(KafkaConfig3.$type, KafkaConfig3);

function createBaseHost(): Host {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    role: 0,
    resources: undefined,
    health: 0,
    subnetId: "",
    assignPublicIp: false,
  };
}

export const Host = {
  $type: "yandex.cloud.mdb.kafka.v1.Host" as const,

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
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
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

          message.role = reader.int32() as any;
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
      role: isSet(object.role) ? host_RoleFromJSON(object.role) : 0,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      health: isSet(object.health) ? host_HealthFromJSON(object.health) : 0,
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
    if (message.role !== 0) {
      obj.role = host_RoleToJSON(message.role);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
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
    message.role = object.role ?? 0;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.health = object.health ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

function createBaseAccess(): Access {
  return { $type: "yandex.cloud.mdb.kafka.v1.Access", dataTransfer: false };
}

export const Access = {
  $type: "yandex.cloud.mdb.kafka.v1.Access" as const,

  encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataTransfer === true) {
      writer.uint32(8).bool(message.dataTransfer);
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
    };
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
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
    message.dataTransfer = object.dataTransfer ?? false;
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
