/* eslint-disable */
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

/**
 * An object that represents an Apache Kafka® connector.
 *
 * See [the documentation](/docs/managed-kafka/concepts/connectors) for details.
 */
export interface ConnectorSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec";
  /** Name of the connector. */
  name: string;
  /** Maximum number of connector tasks. Default value is the number of brokers. */
  tasksMax?:
    | number
    | undefined;
  /**
   * A set of properties passed to Managed Service for Apache Kafka® with the connector configuration.
   * Example: `sync.topics.config.enabled: true`.
   */
  properties: { [key: string]: string };
  /** Configuration of the MirrorMaker connector. */
  connectorConfigMirrormaker?:
    | ConnectorConfigMirrorMakerSpec
    | undefined;
  /** Configuration of S3-Sink connector. */
  connectorConfigS3Sink?: ConnectorConfigS3SinkSpec | undefined;
}

export interface ConnectorSpec_PropertiesEntry {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry";
  key: string;
  value: string;
}

export interface UpdateConnectorSpec {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec";
  /** Maximum number of connector tasks to update. */
  tasksMax?:
    | number
    | undefined;
  /**
   * A set of new or changed properties to update for the connector. They are passed with the connector configuration to Managed Service for Apache Kafka®.
   * Example: `sync.topics.config.enabled: false`.
   */
  properties: { [key: string]: string };
  /** Configuration of the MirrorMaker connector. */
  connectorConfigMirrormaker?:
    | ConnectorConfigMirrorMakerSpec
    | undefined;
  /** Update specification for S3-Sink Connector. */
  connectorConfigS3Sink?: UpdateConnectorConfigS3SinkSpec | undefined;
}

export interface UpdateConnectorSpec_PropertiesEntry {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry";
  key: string;
  value: string;
}

export interface ConnectorConfigMirrorMakerSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec";
  /** Source cluster configuration for the MirrorMaker connector. */
  sourceCluster?:
    | ClusterConnectionSpec
    | undefined;
  /** Target cluster configuration for the MirrorMaker connector. */
  targetCluster?:
    | ClusterConnectionSpec
    | undefined;
  /** List of Kafka topics, separated by `,`. */
  topics: string;
  /** Replication factor for automatically created topics. */
  replicationFactor?: number | undefined;
}

export interface ClusterConnectionSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec";
  /**
   * Alias of cluster connection configuration.
   * Examples: `source`, `target`.
   */
  alias: string;
  /** Connection configuration of the cluster the connector belongs to. As all credentials are already known, leave this parameter empty. */
  thisCluster?:
    | ThisClusterSpec
    | undefined;
  /** Configuration of connection to an external cluster with all the necessary credentials. */
  externalCluster?: ExternalClusterConnectionSpec | undefined;
}

export interface ThisClusterSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec";
}

export interface ExternalClusterConnectionSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec";
  /** List of bootstrap servers of the cluster, separated by `,`. */
  bootstrapServers: string;
  /** SASL username to use for connection to the cluster. */
  saslUsername: string;
  /** SASL password to use for connection to the cluster. */
  saslPassword: string;
  /** SASL mechanism to use for connection to the cluster. */
  saslMechanism: string;
  /** Security protocol to use for connection to the cluster. */
  securityProtocol: string;
  /**
   * CA in PEM format to connect to external cluster.
   * Lines of certificate separated by '\n' symbol.
   */
  sslTruststoreCertificates: string;
}

/** Specification for Kafka S3-Sink Connector. */
export interface ConnectorConfigS3SinkSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec";
  /** List of Kafka topics, separated by ','. */
  topics: string;
  /**
   * The compression type used for files put on GCS.
   * The supported values are: `gzip`, `snappy`, `zstd`, `none`.
   * Optional, the default is `none`.
   */
  fileCompressionType: string;
  /** Max records per file. */
  fileMaxRecords?:
    | number
    | undefined;
  /** Credentials for connecting to S3 storage. */
  s3Connection?: S3ConnectionSpec | undefined;
}

/** Specification for update Kafka S3-Sink Connector. */
export interface UpdateConnectorConfigS3SinkSpec {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec";
  /** List of Kafka topics, separated by ','. */
  topics: string;
  /** Max records per file. */
  fileMaxRecords?:
    | number
    | undefined;
  /** Credentials for connecting to S3 storage. */
  s3Connection?: S3ConnectionSpec | undefined;
}

/**
 * Specification for S3Connection -
 * settings of connection to AWS-compatible S3 storage, that
 * are source or target of Kafka S3-connectors.
 * YC Object Storage is AWS-compatible.
 */
export interface S3ConnectionSpec {
  $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec";
  bucketName: string;
  externalS3?: ExternalS3StorageSpec | undefined;
}

export interface ExternalS3StorageSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec";
  accessKeyId: string;
  secretAccessKey: string;
  endpoint: string;
  /** Default is 'us-east-1'. */
  region: string;
}

export interface Connector {
  $type: "yandex.cloud.mdb.kafka.v1.Connector";
  /** Name of the connector. */
  name: string;
  /** Maximum number of connector tasks. Default value is the number of brokers. */
  tasksMax?:
    | number
    | undefined;
  /**
   * A set of properties passed to Managed Service for Apache Kafka® with the connector configuration.
   * Example: `sync.topics.config.enabled: true`.
   */
  properties: { [key: string]: string };
  /** Connector health. */
  health: Connector_Health;
  /** Current status of the connector. */
  status: Connector_Status;
  /** ID of the Apache Kafka® cluster that the connector belongs to. */
  clusterId: string;
  /** Configuration of the MirrorMaker connector. */
  connectorConfigMirrormaker?:
    | ConnectorConfigMirrorMaker
    | undefined;
  /** Configuration of S3-Sink connector. */
  connectorConfigS3Sink?: ConnectorConfigS3Sink | undefined;
}

export enum Connector_Health {
  /** HEALTH_UNKNOWN - Health of the connector is unknown. */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Connector is running. */
  ALIVE = 1,
  /** DEAD - Connector has failed to start. */
  DEAD = 2,
  UNRECOGNIZED = -1,
}

export function connector_HealthFromJSON(object: any): Connector_Health {
  switch (object) {
    case 0:
    case "HEALTH_UNKNOWN":
      return Connector_Health.HEALTH_UNKNOWN;
    case 1:
    case "ALIVE":
      return Connector_Health.ALIVE;
    case 2:
    case "DEAD":
      return Connector_Health.DEAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Connector_Health.UNRECOGNIZED;
  }
}

export function connector_HealthToJSON(object: Connector_Health): string {
  switch (object) {
    case Connector_Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
    case Connector_Health.ALIVE:
      return "ALIVE";
    case Connector_Health.DEAD:
      return "DEAD";
    case Connector_Health.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Connector_Status {
  /** STATUS_UNKNOWN - Connector state is unknown. */
  STATUS_UNKNOWN = 0,
  /** RUNNING - Connector is running normally. */
  RUNNING = 1,
  /** ERROR - Connector has encountered a problem and cannot operate. */
  ERROR = 2,
  /** PAUSED - Connector is paused. */
  PAUSED = 3,
  UNRECOGNIZED = -1,
}

export function connector_StatusFromJSON(object: any): Connector_Status {
  switch (object) {
    case 0:
    case "STATUS_UNKNOWN":
      return Connector_Status.STATUS_UNKNOWN;
    case 1:
    case "RUNNING":
      return Connector_Status.RUNNING;
    case 2:
    case "ERROR":
      return Connector_Status.ERROR;
    case 3:
    case "PAUSED":
      return Connector_Status.PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Connector_Status.UNRECOGNIZED;
  }
}

export function connector_StatusToJSON(object: Connector_Status): string {
  switch (object) {
    case Connector_Status.STATUS_UNKNOWN:
      return "STATUS_UNKNOWN";
    case Connector_Status.RUNNING:
      return "RUNNING";
    case Connector_Status.ERROR:
      return "ERROR";
    case Connector_Status.PAUSED:
      return "PAUSED";
    case Connector_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Connector_PropertiesEntry {
  $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry";
  key: string;
  value: string;
}

export interface ConnectorConfigMirrorMaker {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker";
  /** Source cluster connection configuration. */
  sourceCluster?:
    | ClusterConnection
    | undefined;
  /** Target cluster connection configuration. */
  targetCluster?:
    | ClusterConnection
    | undefined;
  /** List of Kafka topics, separated by `,`. */
  topics: string;
  /** Replication factor for automatically created topics. */
  replicationFactor?: number | undefined;
}

export interface ClusterConnection {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection";
  /**
   * Alias of cluster connection configuration.
   * Examples: `source`, `target`.
   */
  alias: string;
  /** Connection configuration of the cluster the connector belongs to. As all credentials are already known, leave this parameter empty. */
  thisCluster?:
    | ThisCluster
    | undefined;
  /** Configuration of connection to an external cluster with all the necessary credentials. */
  externalCluster?: ExternalClusterConnection | undefined;
}

export interface ThisCluster {
  $type: "yandex.cloud.mdb.kafka.v1.ThisCluster";
}

export interface ExternalClusterConnection {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection";
  /** List of bootstrap servers of the cluster, separated by `,`. */
  bootstrapServers: string;
  /** SASL username to use for connection to the cluster. */
  saslUsername: string;
  /** SASL mechanism to use for connection to the cluster. */
  saslMechanism: string;
  /** Security protocol to use for connection to the cluster. */
  securityProtocol: string;
}

/**
 * An Apache Kafka® S3-Sink
 * connector resource.
 */
export interface ConnectorConfigS3Sink {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink";
  /** List of Kafka topics, separated by ','. */
  topics: string;
  /**
   * The compression type used for files put on GCS.
   * The supported values are: `gzip`, `snappy`, `zstd`, `none`.
   * Optional, the default is `none`.
   */
  fileCompressionType: string;
  /** Max records per file. */
  fileMaxRecords?:
    | number
    | undefined;
  /** Credentials for connecting to S3 storage. */
  s3Connection?: S3Connection | undefined;
}

/**
 * Resource for S3Connection -
 * settings of connection to AWS-compatible S3 storage, that
 * are source or target of Kafka S3-connectors.
 * YC Object Storage is AWS-compatible.
 */
export interface S3Connection {
  $type: "yandex.cloud.mdb.kafka.v1.S3Connection";
  bucketName: string;
  externalS3?: ExternalS3Storage | undefined;
}

export interface ExternalS3Storage {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage";
  accessKeyId: string;
  endpoint: string;
  /** Default is 'us-east-1' */
  region: string;
}

function createBaseConnectorSpec(): ConnectorSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec",
    name: "",
    tasksMax: undefined,
    properties: {},
    connectorConfigMirrormaker: undefined,
    connectorConfigS3Sink: undefined,
  };
}

export const ConnectorSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec" as const,

  encode(message: ConnectorSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tasksMax !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tasksMax! }, writer.uint32(18).fork())
        .ldelim();
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      ConnectorSpec_PropertiesEntry.encode({
        $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry",
        key: key as any,
        value,
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.connectorConfigMirrormaker !== undefined) {
      ConnectorConfigMirrorMakerSpec.encode(message.connectorConfigMirrormaker, writer.uint32(82).fork()).ldelim();
    }
    if (message.connectorConfigS3Sink !== undefined) {
      ConnectorConfigS3SinkSpec.encode(message.connectorConfigS3Sink, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectorSpec();
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

          message.tasksMax = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = ConnectorSpec_PropertiesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.properties[entry3.key] = entry3.value;
          }
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.connectorConfigMirrormaker = ConnectorConfigMirrorMakerSpec.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.connectorConfigS3Sink = ConnectorConfigS3SinkSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectorSpec {
    return {
      $type: ConnectorSpec.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      tasksMax: isSet(object.tasksMax) ? Number(object.tasksMax) : undefined,
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      connectorConfigMirrormaker: isSet(object.connectorConfigMirrormaker)
        ? ConnectorConfigMirrorMakerSpec.fromJSON(object.connectorConfigMirrormaker)
        : undefined,
      connectorConfigS3Sink: isSet(object.connectorConfigS3Sink)
        ? ConnectorConfigS3SinkSpec.fromJSON(object.connectorConfigS3Sink)
        : undefined,
    };
  },

  toJSON(message: ConnectorSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tasksMax !== undefined) {
      obj.tasksMax = message.tasksMax;
    }
    if (message.properties) {
      const entries = Object.entries(message.properties);
      if (entries.length > 0) {
        obj.properties = {};
        entries.forEach(([k, v]) => {
          obj.properties[k] = v;
        });
      }
    }
    if (message.connectorConfigMirrormaker !== undefined) {
      obj.connectorConfigMirrormaker = ConnectorConfigMirrorMakerSpec.toJSON(message.connectorConfigMirrormaker);
    }
    if (message.connectorConfigS3Sink !== undefined) {
      obj.connectorConfigS3Sink = ConnectorConfigS3SinkSpec.toJSON(message.connectorConfigS3Sink);
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectorSpec>): ConnectorSpec {
    return ConnectorSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectorSpec>): ConnectorSpec {
    const message = createBaseConnectorSpec();
    message.name = object.name ?? "";
    message.tasksMax = object.tasksMax ?? undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.connectorConfigMirrormaker =
      (object.connectorConfigMirrormaker !== undefined && object.connectorConfigMirrormaker !== null)
        ? ConnectorConfigMirrorMakerSpec.fromPartial(object.connectorConfigMirrormaker)
        : undefined;
    message.connectorConfigS3Sink =
      (object.connectorConfigS3Sink !== undefined && object.connectorConfigS3Sink !== null)
        ? ConnectorConfigS3SinkSpec.fromPartial(object.connectorConfigS3Sink)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectorSpec.$type, ConnectorSpec);

function createBaseConnectorSpec_PropertiesEntry(): ConnectorSpec_PropertiesEntry {
  return { $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry", key: "", value: "" };
}

export const ConnectorSpec_PropertiesEntry = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry" as const,

  encode(message: ConnectorSpec_PropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorSpec_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectorSpec_PropertiesEntry();
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

  fromJSON(object: any): ConnectorSpec_PropertiesEntry {
    return {
      $type: ConnectorSpec_PropertiesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ConnectorSpec_PropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectorSpec_PropertiesEntry>): ConnectorSpec_PropertiesEntry {
    return ConnectorSpec_PropertiesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectorSpec_PropertiesEntry>): ConnectorSpec_PropertiesEntry {
    const message = createBaseConnectorSpec_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(ConnectorSpec_PropertiesEntry.$type, ConnectorSpec_PropertiesEntry);

function createBaseUpdateConnectorSpec(): UpdateConnectorSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec",
    tasksMax: undefined,
    properties: {},
    connectorConfigMirrormaker: undefined,
    connectorConfigS3Sink: undefined,
  };
}

export const UpdateConnectorSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec" as const,

  encode(message: UpdateConnectorSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tasksMax !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tasksMax! }, writer.uint32(10).fork())
        .ldelim();
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      UpdateConnectorSpec_PropertiesEntry.encode({
        $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry",
        key: key as any,
        value,
      }, writer.uint32(18).fork()).ldelim();
    });
    if (message.connectorConfigMirrormaker !== undefined) {
      ConnectorConfigMirrorMakerSpec.encode(message.connectorConfigMirrormaker, writer.uint32(82).fork()).ldelim();
    }
    if (message.connectorConfigS3Sink !== undefined) {
      UpdateConnectorConfigS3SinkSpec.encode(message.connectorConfigS3Sink, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConnectorSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tasksMax = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = UpdateConnectorSpec_PropertiesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.properties[entry2.key] = entry2.value;
          }
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.connectorConfigMirrormaker = ConnectorConfigMirrorMakerSpec.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.connectorConfigS3Sink = UpdateConnectorConfigS3SinkSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateConnectorSpec {
    return {
      $type: UpdateConnectorSpec.$type,
      tasksMax: isSet(object.tasksMax) ? Number(object.tasksMax) : undefined,
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      connectorConfigMirrormaker: isSet(object.connectorConfigMirrormaker)
        ? ConnectorConfigMirrorMakerSpec.fromJSON(object.connectorConfigMirrormaker)
        : undefined,
      connectorConfigS3Sink: isSet(object.connectorConfigS3Sink)
        ? UpdateConnectorConfigS3SinkSpec.fromJSON(object.connectorConfigS3Sink)
        : undefined,
    };
  },

  toJSON(message: UpdateConnectorSpec): unknown {
    const obj: any = {};
    if (message.tasksMax !== undefined) {
      obj.tasksMax = message.tasksMax;
    }
    if (message.properties) {
      const entries = Object.entries(message.properties);
      if (entries.length > 0) {
        obj.properties = {};
        entries.forEach(([k, v]) => {
          obj.properties[k] = v;
        });
      }
    }
    if (message.connectorConfigMirrormaker !== undefined) {
      obj.connectorConfigMirrormaker = ConnectorConfigMirrorMakerSpec.toJSON(message.connectorConfigMirrormaker);
    }
    if (message.connectorConfigS3Sink !== undefined) {
      obj.connectorConfigS3Sink = UpdateConnectorConfigS3SinkSpec.toJSON(message.connectorConfigS3Sink);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateConnectorSpec>): UpdateConnectorSpec {
    return UpdateConnectorSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateConnectorSpec>): UpdateConnectorSpec {
    const message = createBaseUpdateConnectorSpec();
    message.tasksMax = object.tasksMax ?? undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.connectorConfigMirrormaker =
      (object.connectorConfigMirrormaker !== undefined && object.connectorConfigMirrormaker !== null)
        ? ConnectorConfigMirrorMakerSpec.fromPartial(object.connectorConfigMirrormaker)
        : undefined;
    message.connectorConfigS3Sink =
      (object.connectorConfigS3Sink !== undefined && object.connectorConfigS3Sink !== null)
        ? UpdateConnectorConfigS3SinkSpec.fromPartial(object.connectorConfigS3Sink)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateConnectorSpec.$type, UpdateConnectorSpec);

function createBaseUpdateConnectorSpec_PropertiesEntry(): UpdateConnectorSpec_PropertiesEntry {
  return { $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry", key: "", value: "" };
}

export const UpdateConnectorSpec_PropertiesEntry = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry" as const,

  encode(message: UpdateConnectorSpec_PropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorSpec_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConnectorSpec_PropertiesEntry();
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

  fromJSON(object: any): UpdateConnectorSpec_PropertiesEntry {
    return {
      $type: UpdateConnectorSpec_PropertiesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateConnectorSpec_PropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateConnectorSpec_PropertiesEntry>): UpdateConnectorSpec_PropertiesEntry {
    return UpdateConnectorSpec_PropertiesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateConnectorSpec_PropertiesEntry>): UpdateConnectorSpec_PropertiesEntry {
    const message = createBaseUpdateConnectorSpec_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateConnectorSpec_PropertiesEntry.$type, UpdateConnectorSpec_PropertiesEntry);

function createBaseConnectorConfigMirrorMakerSpec(): ConnectorConfigMirrorMakerSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec",
    sourceCluster: undefined,
    targetCluster: undefined,
    topics: "",
    replicationFactor: undefined,
  };
}

export const ConnectorConfigMirrorMakerSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec" as const,

  encode(message: ConnectorConfigMirrorMakerSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceCluster !== undefined) {
      ClusterConnectionSpec.encode(message.sourceCluster, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetCluster !== undefined) {
      ClusterConnectionSpec.encode(message.targetCluster, writer.uint32(18).fork()).ldelim();
    }
    if (message.topics !== "") {
      writer.uint32(26).string(message.topics);
    }
    if (message.replicationFactor !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicationFactor! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigMirrorMakerSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectorConfigMirrorMakerSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceCluster = ClusterConnectionSpec.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetCluster = ClusterConnectionSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.topics = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectorConfigMirrorMakerSpec {
    return {
      $type: ConnectorConfigMirrorMakerSpec.$type,
      sourceCluster: isSet(object.sourceCluster) ? ClusterConnectionSpec.fromJSON(object.sourceCluster) : undefined,
      targetCluster: isSet(object.targetCluster) ? ClusterConnectionSpec.fromJSON(object.targetCluster) : undefined,
      topics: isSet(object.topics) ? globalThis.String(object.topics) : "",
      replicationFactor: isSet(object.replicationFactor) ? Number(object.replicationFactor) : undefined,
    };
  },

  toJSON(message: ConnectorConfigMirrorMakerSpec): unknown {
    const obj: any = {};
    if (message.sourceCluster !== undefined) {
      obj.sourceCluster = ClusterConnectionSpec.toJSON(message.sourceCluster);
    }
    if (message.targetCluster !== undefined) {
      obj.targetCluster = ClusterConnectionSpec.toJSON(message.targetCluster);
    }
    if (message.topics !== "") {
      obj.topics = message.topics;
    }
    if (message.replicationFactor !== undefined) {
      obj.replicationFactor = message.replicationFactor;
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectorConfigMirrorMakerSpec>): ConnectorConfigMirrorMakerSpec {
    return ConnectorConfigMirrorMakerSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectorConfigMirrorMakerSpec>): ConnectorConfigMirrorMakerSpec {
    const message = createBaseConnectorConfigMirrorMakerSpec();
    message.sourceCluster = (object.sourceCluster !== undefined && object.sourceCluster !== null)
      ? ClusterConnectionSpec.fromPartial(object.sourceCluster)
      : undefined;
    message.targetCluster = (object.targetCluster !== undefined && object.targetCluster !== null)
      ? ClusterConnectionSpec.fromPartial(object.targetCluster)
      : undefined;
    message.topics = object.topics ?? "";
    message.replicationFactor = object.replicationFactor ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectorConfigMirrorMakerSpec.$type, ConnectorConfigMirrorMakerSpec);

function createBaseClusterConnectionSpec(): ClusterConnectionSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec",
    alias: "",
    thisCluster: undefined,
    externalCluster: undefined,
  };
}

export const ClusterConnectionSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec" as const,

  encode(message: ClusterConnectionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    if (message.thisCluster !== undefined) {
      ThisClusterSpec.encode(message.thisCluster, writer.uint32(18).fork()).ldelim();
    }
    if (message.externalCluster !== undefined) {
      ExternalClusterConnectionSpec.encode(message.externalCluster, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConnectionSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClusterConnectionSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.thisCluster = ThisClusterSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalCluster = ExternalClusterConnectionSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClusterConnectionSpec {
    return {
      $type: ClusterConnectionSpec.$type,
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      thisCluster: isSet(object.thisCluster) ? ThisClusterSpec.fromJSON(object.thisCluster) : undefined,
      externalCluster: isSet(object.externalCluster)
        ? ExternalClusterConnectionSpec.fromJSON(object.externalCluster)
        : undefined,
    };
  },

  toJSON(message: ClusterConnectionSpec): unknown {
    const obj: any = {};
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.thisCluster !== undefined) {
      obj.thisCluster = ThisClusterSpec.toJSON(message.thisCluster);
    }
    if (message.externalCluster !== undefined) {
      obj.externalCluster = ExternalClusterConnectionSpec.toJSON(message.externalCluster);
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConnectionSpec>): ClusterConnectionSpec {
    return ClusterConnectionSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConnectionSpec>): ClusterConnectionSpec {
    const message = createBaseClusterConnectionSpec();
    message.alias = object.alias ?? "";
    message.thisCluster = (object.thisCluster !== undefined && object.thisCluster !== null)
      ? ThisClusterSpec.fromPartial(object.thisCluster)
      : undefined;
    message.externalCluster = (object.externalCluster !== undefined && object.externalCluster !== null)
      ? ExternalClusterConnectionSpec.fromPartial(object.externalCluster)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConnectionSpec.$type, ClusterConnectionSpec);

function createBaseThisClusterSpec(): ThisClusterSpec {
  return { $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec" };
}

export const ThisClusterSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec" as const,

  encode(_: ThisClusterSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThisClusterSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThisClusterSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ThisClusterSpec {
    return { $type: ThisClusterSpec.$type };
  },

  toJSON(_: ThisClusterSpec): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ThisClusterSpec>): ThisClusterSpec {
    return ThisClusterSpec.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ThisClusterSpec>): ThisClusterSpec {
    const message = createBaseThisClusterSpec();
    return message;
  },
};

messageTypeRegistry.set(ThisClusterSpec.$type, ThisClusterSpec);

function createBaseExternalClusterConnectionSpec(): ExternalClusterConnectionSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec",
    bootstrapServers: "",
    saslUsername: "",
    saslPassword: "",
    saslMechanism: "",
    securityProtocol: "",
    sslTruststoreCertificates: "",
  };
}

export const ExternalClusterConnectionSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec" as const,

  encode(message: ExternalClusterConnectionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bootstrapServers !== "") {
      writer.uint32(10).string(message.bootstrapServers);
    }
    if (message.saslUsername !== "") {
      writer.uint32(18).string(message.saslUsername);
    }
    if (message.saslPassword !== "") {
      writer.uint32(26).string(message.saslPassword);
    }
    if (message.saslMechanism !== "") {
      writer.uint32(34).string(message.saslMechanism);
    }
    if (message.securityProtocol !== "") {
      writer.uint32(42).string(message.securityProtocol);
    }
    if (message.sslTruststoreCertificates !== "") {
      writer.uint32(50).string(message.sslTruststoreCertificates);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalClusterConnectionSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalClusterConnectionSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bootstrapServers = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.saslUsername = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.saslPassword = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.saslMechanism = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.securityProtocol = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sslTruststoreCertificates = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalClusterConnectionSpec {
    return {
      $type: ExternalClusterConnectionSpec.$type,
      bootstrapServers: isSet(object.bootstrapServers) ? globalThis.String(object.bootstrapServers) : "",
      saslUsername: isSet(object.saslUsername) ? globalThis.String(object.saslUsername) : "",
      saslPassword: isSet(object.saslPassword) ? globalThis.String(object.saslPassword) : "",
      saslMechanism: isSet(object.saslMechanism) ? globalThis.String(object.saslMechanism) : "",
      securityProtocol: isSet(object.securityProtocol) ? globalThis.String(object.securityProtocol) : "",
      sslTruststoreCertificates: isSet(object.sslTruststoreCertificates)
        ? globalThis.String(object.sslTruststoreCertificates)
        : "",
    };
  },

  toJSON(message: ExternalClusterConnectionSpec): unknown {
    const obj: any = {};
    if (message.bootstrapServers !== "") {
      obj.bootstrapServers = message.bootstrapServers;
    }
    if (message.saslUsername !== "") {
      obj.saslUsername = message.saslUsername;
    }
    if (message.saslPassword !== "") {
      obj.saslPassword = message.saslPassword;
    }
    if (message.saslMechanism !== "") {
      obj.saslMechanism = message.saslMechanism;
    }
    if (message.securityProtocol !== "") {
      obj.securityProtocol = message.securityProtocol;
    }
    if (message.sslTruststoreCertificates !== "") {
      obj.sslTruststoreCertificates = message.sslTruststoreCertificates;
    }
    return obj;
  },

  create(base?: DeepPartial<ExternalClusterConnectionSpec>): ExternalClusterConnectionSpec {
    return ExternalClusterConnectionSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExternalClusterConnectionSpec>): ExternalClusterConnectionSpec {
    const message = createBaseExternalClusterConnectionSpec();
    message.bootstrapServers = object.bootstrapServers ?? "";
    message.saslUsername = object.saslUsername ?? "";
    message.saslPassword = object.saslPassword ?? "";
    message.saslMechanism = object.saslMechanism ?? "";
    message.securityProtocol = object.securityProtocol ?? "";
    message.sslTruststoreCertificates = object.sslTruststoreCertificates ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalClusterConnectionSpec.$type, ExternalClusterConnectionSpec);

function createBaseConnectorConfigS3SinkSpec(): ConnectorConfigS3SinkSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec",
    topics: "",
    fileCompressionType: "",
    fileMaxRecords: undefined,
    s3Connection: undefined,
  };
}

export const ConnectorConfigS3SinkSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec" as const,

  encode(message: ConnectorConfigS3SinkSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topics !== "") {
      writer.uint32(10).string(message.topics);
    }
    if (message.fileCompressionType !== "") {
      writer.uint32(18).string(message.fileCompressionType);
    }
    if (message.fileMaxRecords !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fileMaxRecords! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.s3Connection !== undefined) {
      S3ConnectionSpec.encode(message.s3Connection, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigS3SinkSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectorConfigS3SinkSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topics = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fileCompressionType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileMaxRecords = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.s3Connection = S3ConnectionSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectorConfigS3SinkSpec {
    return {
      $type: ConnectorConfigS3SinkSpec.$type,
      topics: isSet(object.topics) ? globalThis.String(object.topics) : "",
      fileCompressionType: isSet(object.fileCompressionType) ? globalThis.String(object.fileCompressionType) : "",
      fileMaxRecords: isSet(object.fileMaxRecords) ? Number(object.fileMaxRecords) : undefined,
      s3Connection: isSet(object.s3Connection) ? S3ConnectionSpec.fromJSON(object.s3Connection) : undefined,
    };
  },

  toJSON(message: ConnectorConfigS3SinkSpec): unknown {
    const obj: any = {};
    if (message.topics !== "") {
      obj.topics = message.topics;
    }
    if (message.fileCompressionType !== "") {
      obj.fileCompressionType = message.fileCompressionType;
    }
    if (message.fileMaxRecords !== undefined) {
      obj.fileMaxRecords = message.fileMaxRecords;
    }
    if (message.s3Connection !== undefined) {
      obj.s3Connection = S3ConnectionSpec.toJSON(message.s3Connection);
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectorConfigS3SinkSpec>): ConnectorConfigS3SinkSpec {
    return ConnectorConfigS3SinkSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectorConfigS3SinkSpec>): ConnectorConfigS3SinkSpec {
    const message = createBaseConnectorConfigS3SinkSpec();
    message.topics = object.topics ?? "";
    message.fileCompressionType = object.fileCompressionType ?? "";
    message.fileMaxRecords = object.fileMaxRecords ?? undefined;
    message.s3Connection = (object.s3Connection !== undefined && object.s3Connection !== null)
      ? S3ConnectionSpec.fromPartial(object.s3Connection)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectorConfigS3SinkSpec.$type, ConnectorConfigS3SinkSpec);

function createBaseUpdateConnectorConfigS3SinkSpec(): UpdateConnectorConfigS3SinkSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec",
    topics: "",
    fileMaxRecords: undefined,
    s3Connection: undefined,
  };
}

export const UpdateConnectorConfigS3SinkSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec" as const,

  encode(message: UpdateConnectorConfigS3SinkSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topics !== "") {
      writer.uint32(10).string(message.topics);
    }
    if (message.fileMaxRecords !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fileMaxRecords! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.s3Connection !== undefined) {
      S3ConnectionSpec.encode(message.s3Connection, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorConfigS3SinkSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConnectorConfigS3SinkSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topics = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fileMaxRecords = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.s3Connection = S3ConnectionSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateConnectorConfigS3SinkSpec {
    return {
      $type: UpdateConnectorConfigS3SinkSpec.$type,
      topics: isSet(object.topics) ? globalThis.String(object.topics) : "",
      fileMaxRecords: isSet(object.fileMaxRecords) ? Number(object.fileMaxRecords) : undefined,
      s3Connection: isSet(object.s3Connection) ? S3ConnectionSpec.fromJSON(object.s3Connection) : undefined,
    };
  },

  toJSON(message: UpdateConnectorConfigS3SinkSpec): unknown {
    const obj: any = {};
    if (message.topics !== "") {
      obj.topics = message.topics;
    }
    if (message.fileMaxRecords !== undefined) {
      obj.fileMaxRecords = message.fileMaxRecords;
    }
    if (message.s3Connection !== undefined) {
      obj.s3Connection = S3ConnectionSpec.toJSON(message.s3Connection);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateConnectorConfigS3SinkSpec>): UpdateConnectorConfigS3SinkSpec {
    return UpdateConnectorConfigS3SinkSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateConnectorConfigS3SinkSpec>): UpdateConnectorConfigS3SinkSpec {
    const message = createBaseUpdateConnectorConfigS3SinkSpec();
    message.topics = object.topics ?? "";
    message.fileMaxRecords = object.fileMaxRecords ?? undefined;
    message.s3Connection = (object.s3Connection !== undefined && object.s3Connection !== null)
      ? S3ConnectionSpec.fromPartial(object.s3Connection)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateConnectorConfigS3SinkSpec.$type, UpdateConnectorConfigS3SinkSpec);

function createBaseS3ConnectionSpec(): S3ConnectionSpec {
  return { $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec", bucketName: "", externalS3: undefined };
}

export const S3ConnectionSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec" as const,

  encode(message: S3ConnectionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.externalS3 !== undefined) {
      ExternalS3StorageSpec.encode(message.externalS3, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3ConnectionSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3ConnectionSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucketName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.externalS3 = ExternalS3StorageSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S3ConnectionSpec {
    return {
      $type: S3ConnectionSpec.$type,
      bucketName: isSet(object.bucketName) ? globalThis.String(object.bucketName) : "",
      externalS3: isSet(object.externalS3) ? ExternalS3StorageSpec.fromJSON(object.externalS3) : undefined,
    };
  },

  toJSON(message: S3ConnectionSpec): unknown {
    const obj: any = {};
    if (message.bucketName !== "") {
      obj.bucketName = message.bucketName;
    }
    if (message.externalS3 !== undefined) {
      obj.externalS3 = ExternalS3StorageSpec.toJSON(message.externalS3);
    }
    return obj;
  },

  create(base?: DeepPartial<S3ConnectionSpec>): S3ConnectionSpec {
    return S3ConnectionSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<S3ConnectionSpec>): S3ConnectionSpec {
    const message = createBaseS3ConnectionSpec();
    message.bucketName = object.bucketName ?? "";
    message.externalS3 = (object.externalS3 !== undefined && object.externalS3 !== null)
      ? ExternalS3StorageSpec.fromPartial(object.externalS3)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(S3ConnectionSpec.$type, S3ConnectionSpec);

function createBaseExternalS3StorageSpec(): ExternalS3StorageSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec",
    accessKeyId: "",
    secretAccessKey: "",
    endpoint: "",
    region: "",
  };
}

export const ExternalS3StorageSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec" as const,

  encode(message: ExternalS3StorageSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    if (message.secretAccessKey !== "") {
      writer.uint32(18).string(message.secretAccessKey);
    }
    if (message.endpoint !== "") {
      writer.uint32(26).string(message.endpoint);
    }
    if (message.region !== "") {
      writer.uint32(34).string(message.region);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalS3StorageSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalS3StorageSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.secretAccessKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.endpoint = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.region = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalS3StorageSpec {
    return {
      $type: ExternalS3StorageSpec.$type,
      accessKeyId: isSet(object.accessKeyId) ? globalThis.String(object.accessKeyId) : "",
      secretAccessKey: isSet(object.secretAccessKey) ? globalThis.String(object.secretAccessKey) : "",
      endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
      region: isSet(object.region) ? globalThis.String(object.region) : "",
    };
  },

  toJSON(message: ExternalS3StorageSpec): unknown {
    const obj: any = {};
    if (message.accessKeyId !== "") {
      obj.accessKeyId = message.accessKeyId;
    }
    if (message.secretAccessKey !== "") {
      obj.secretAccessKey = message.secretAccessKey;
    }
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    if (message.region !== "") {
      obj.region = message.region;
    }
    return obj;
  },

  create(base?: DeepPartial<ExternalS3StorageSpec>): ExternalS3StorageSpec {
    return ExternalS3StorageSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExternalS3StorageSpec>): ExternalS3StorageSpec {
    const message = createBaseExternalS3StorageSpec();
    message.accessKeyId = object.accessKeyId ?? "";
    message.secretAccessKey = object.secretAccessKey ?? "";
    message.endpoint = object.endpoint ?? "";
    message.region = object.region ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalS3StorageSpec.$type, ExternalS3StorageSpec);

function createBaseConnector(): Connector {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.Connector",
    name: "",
    tasksMax: undefined,
    properties: {},
    health: 0,
    status: 0,
    clusterId: "",
    connectorConfigMirrormaker: undefined,
    connectorConfigS3Sink: undefined,
  };
}

export const Connector = {
  $type: "yandex.cloud.mdb.kafka.v1.Connector" as const,

  encode(message: Connector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tasksMax !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tasksMax! }, writer.uint32(18).fork())
        .ldelim();
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      Connector_PropertiesEntry.encode({
        $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry",
        key: key as any,
        value,
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.health !== 0) {
      writer.uint32(32).int32(message.health);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.clusterId !== "") {
      writer.uint32(50).string(message.clusterId);
    }
    if (message.connectorConfigMirrormaker !== undefined) {
      ConnectorConfigMirrorMaker.encode(message.connectorConfigMirrormaker, writer.uint32(82).fork()).ldelim();
    }
    if (message.connectorConfigS3Sink !== undefined) {
      ConnectorConfigS3Sink.encode(message.connectorConfigS3Sink, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnector();
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

          message.tasksMax = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = Connector_PropertiesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.properties[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.health = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.connectorConfigMirrormaker = ConnectorConfigMirrorMaker.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.connectorConfigS3Sink = ConnectorConfigS3Sink.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Connector {
    return {
      $type: Connector.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      tasksMax: isSet(object.tasksMax) ? Number(object.tasksMax) : undefined,
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      health: isSet(object.health) ? connector_HealthFromJSON(object.health) : 0,
      status: isSet(object.status) ? connector_StatusFromJSON(object.status) : 0,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      connectorConfigMirrormaker: isSet(object.connectorConfigMirrormaker)
        ? ConnectorConfigMirrorMaker.fromJSON(object.connectorConfigMirrormaker)
        : undefined,
      connectorConfigS3Sink: isSet(object.connectorConfigS3Sink)
        ? ConnectorConfigS3Sink.fromJSON(object.connectorConfigS3Sink)
        : undefined,
    };
  },

  toJSON(message: Connector): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tasksMax !== undefined) {
      obj.tasksMax = message.tasksMax;
    }
    if (message.properties) {
      const entries = Object.entries(message.properties);
      if (entries.length > 0) {
        obj.properties = {};
        entries.forEach(([k, v]) => {
          obj.properties[k] = v;
        });
      }
    }
    if (message.health !== 0) {
      obj.health = connector_HealthToJSON(message.health);
    }
    if (message.status !== 0) {
      obj.status = connector_StatusToJSON(message.status);
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.connectorConfigMirrormaker !== undefined) {
      obj.connectorConfigMirrormaker = ConnectorConfigMirrorMaker.toJSON(message.connectorConfigMirrormaker);
    }
    if (message.connectorConfigS3Sink !== undefined) {
      obj.connectorConfigS3Sink = ConnectorConfigS3Sink.toJSON(message.connectorConfigS3Sink);
    }
    return obj;
  },

  create(base?: DeepPartial<Connector>): Connector {
    return Connector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Connector>): Connector {
    const message = createBaseConnector();
    message.name = object.name ?? "";
    message.tasksMax = object.tasksMax ?? undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.health = object.health ?? 0;
    message.status = object.status ?? 0;
    message.clusterId = object.clusterId ?? "";
    message.connectorConfigMirrormaker =
      (object.connectorConfigMirrormaker !== undefined && object.connectorConfigMirrormaker !== null)
        ? ConnectorConfigMirrorMaker.fromPartial(object.connectorConfigMirrormaker)
        : undefined;
    message.connectorConfigS3Sink =
      (object.connectorConfigS3Sink !== undefined && object.connectorConfigS3Sink !== null)
        ? ConnectorConfigS3Sink.fromPartial(object.connectorConfigS3Sink)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Connector.$type, Connector);

function createBaseConnector_PropertiesEntry(): Connector_PropertiesEntry {
  return { $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry", key: "", value: "" };
}

export const Connector_PropertiesEntry = {
  $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry" as const,

  encode(message: Connector_PropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connector_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnector_PropertiesEntry();
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

  fromJSON(object: any): Connector_PropertiesEntry {
    return {
      $type: Connector_PropertiesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Connector_PropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<Connector_PropertiesEntry>): Connector_PropertiesEntry {
    return Connector_PropertiesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Connector_PropertiesEntry>): Connector_PropertiesEntry {
    const message = createBaseConnector_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Connector_PropertiesEntry.$type, Connector_PropertiesEntry);

function createBaseConnectorConfigMirrorMaker(): ConnectorConfigMirrorMaker {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker",
    sourceCluster: undefined,
    targetCluster: undefined,
    topics: "",
    replicationFactor: undefined,
  };
}

export const ConnectorConfigMirrorMaker = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker" as const,

  encode(message: ConnectorConfigMirrorMaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceCluster !== undefined) {
      ClusterConnection.encode(message.sourceCluster, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetCluster !== undefined) {
      ClusterConnection.encode(message.targetCluster, writer.uint32(18).fork()).ldelim();
    }
    if (message.topics !== "") {
      writer.uint32(26).string(message.topics);
    }
    if (message.replicationFactor !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicationFactor! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigMirrorMaker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectorConfigMirrorMaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceCluster = ClusterConnection.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetCluster = ClusterConnection.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.topics = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectorConfigMirrorMaker {
    return {
      $type: ConnectorConfigMirrorMaker.$type,
      sourceCluster: isSet(object.sourceCluster) ? ClusterConnection.fromJSON(object.sourceCluster) : undefined,
      targetCluster: isSet(object.targetCluster) ? ClusterConnection.fromJSON(object.targetCluster) : undefined,
      topics: isSet(object.topics) ? globalThis.String(object.topics) : "",
      replicationFactor: isSet(object.replicationFactor) ? Number(object.replicationFactor) : undefined,
    };
  },

  toJSON(message: ConnectorConfigMirrorMaker): unknown {
    const obj: any = {};
    if (message.sourceCluster !== undefined) {
      obj.sourceCluster = ClusterConnection.toJSON(message.sourceCluster);
    }
    if (message.targetCluster !== undefined) {
      obj.targetCluster = ClusterConnection.toJSON(message.targetCluster);
    }
    if (message.topics !== "") {
      obj.topics = message.topics;
    }
    if (message.replicationFactor !== undefined) {
      obj.replicationFactor = message.replicationFactor;
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectorConfigMirrorMaker>): ConnectorConfigMirrorMaker {
    return ConnectorConfigMirrorMaker.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectorConfigMirrorMaker>): ConnectorConfigMirrorMaker {
    const message = createBaseConnectorConfigMirrorMaker();
    message.sourceCluster = (object.sourceCluster !== undefined && object.sourceCluster !== null)
      ? ClusterConnection.fromPartial(object.sourceCluster)
      : undefined;
    message.targetCluster = (object.targetCluster !== undefined && object.targetCluster !== null)
      ? ClusterConnection.fromPartial(object.targetCluster)
      : undefined;
    message.topics = object.topics ?? "";
    message.replicationFactor = object.replicationFactor ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectorConfigMirrorMaker.$type, ConnectorConfigMirrorMaker);

function createBaseClusterConnection(): ClusterConnection {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection",
    alias: "",
    thisCluster: undefined,
    externalCluster: undefined,
  };
}

export const ClusterConnection = {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection" as const,

  encode(message: ClusterConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    if (message.thisCluster !== undefined) {
      ThisCluster.encode(message.thisCluster, writer.uint32(18).fork()).ldelim();
    }
    if (message.externalCluster !== undefined) {
      ExternalClusterConnection.encode(message.externalCluster, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClusterConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.thisCluster = ThisCluster.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalCluster = ExternalClusterConnection.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClusterConnection {
    return {
      $type: ClusterConnection.$type,
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      thisCluster: isSet(object.thisCluster) ? ThisCluster.fromJSON(object.thisCluster) : undefined,
      externalCluster: isSet(object.externalCluster)
        ? ExternalClusterConnection.fromJSON(object.externalCluster)
        : undefined,
    };
  },

  toJSON(message: ClusterConnection): unknown {
    const obj: any = {};
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.thisCluster !== undefined) {
      obj.thisCluster = ThisCluster.toJSON(message.thisCluster);
    }
    if (message.externalCluster !== undefined) {
      obj.externalCluster = ExternalClusterConnection.toJSON(message.externalCluster);
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterConnection>): ClusterConnection {
    return ClusterConnection.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterConnection>): ClusterConnection {
    const message = createBaseClusterConnection();
    message.alias = object.alias ?? "";
    message.thisCluster = (object.thisCluster !== undefined && object.thisCluster !== null)
      ? ThisCluster.fromPartial(object.thisCluster)
      : undefined;
    message.externalCluster = (object.externalCluster !== undefined && object.externalCluster !== null)
      ? ExternalClusterConnection.fromPartial(object.externalCluster)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConnection.$type, ClusterConnection);

function createBaseThisCluster(): ThisCluster {
  return { $type: "yandex.cloud.mdb.kafka.v1.ThisCluster" };
}

export const ThisCluster = {
  $type: "yandex.cloud.mdb.kafka.v1.ThisCluster" as const,

  encode(_: ThisCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThisCluster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThisCluster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ThisCluster {
    return { $type: ThisCluster.$type };
  },

  toJSON(_: ThisCluster): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ThisCluster>): ThisCluster {
    return ThisCluster.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ThisCluster>): ThisCluster {
    const message = createBaseThisCluster();
    return message;
  },
};

messageTypeRegistry.set(ThisCluster.$type, ThisCluster);

function createBaseExternalClusterConnection(): ExternalClusterConnection {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection",
    bootstrapServers: "",
    saslUsername: "",
    saslMechanism: "",
    securityProtocol: "",
  };
}

export const ExternalClusterConnection = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection" as const,

  encode(message: ExternalClusterConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bootstrapServers !== "") {
      writer.uint32(10).string(message.bootstrapServers);
    }
    if (message.saslUsername !== "") {
      writer.uint32(18).string(message.saslUsername);
    }
    if (message.saslMechanism !== "") {
      writer.uint32(34).string(message.saslMechanism);
    }
    if (message.securityProtocol !== "") {
      writer.uint32(42).string(message.securityProtocol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalClusterConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalClusterConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bootstrapServers = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.saslUsername = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.saslMechanism = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.securityProtocol = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalClusterConnection {
    return {
      $type: ExternalClusterConnection.$type,
      bootstrapServers: isSet(object.bootstrapServers) ? globalThis.String(object.bootstrapServers) : "",
      saslUsername: isSet(object.saslUsername) ? globalThis.String(object.saslUsername) : "",
      saslMechanism: isSet(object.saslMechanism) ? globalThis.String(object.saslMechanism) : "",
      securityProtocol: isSet(object.securityProtocol) ? globalThis.String(object.securityProtocol) : "",
    };
  },

  toJSON(message: ExternalClusterConnection): unknown {
    const obj: any = {};
    if (message.bootstrapServers !== "") {
      obj.bootstrapServers = message.bootstrapServers;
    }
    if (message.saslUsername !== "") {
      obj.saslUsername = message.saslUsername;
    }
    if (message.saslMechanism !== "") {
      obj.saslMechanism = message.saslMechanism;
    }
    if (message.securityProtocol !== "") {
      obj.securityProtocol = message.securityProtocol;
    }
    return obj;
  },

  create(base?: DeepPartial<ExternalClusterConnection>): ExternalClusterConnection {
    return ExternalClusterConnection.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExternalClusterConnection>): ExternalClusterConnection {
    const message = createBaseExternalClusterConnection();
    message.bootstrapServers = object.bootstrapServers ?? "";
    message.saslUsername = object.saslUsername ?? "";
    message.saslMechanism = object.saslMechanism ?? "";
    message.securityProtocol = object.securityProtocol ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalClusterConnection.$type, ExternalClusterConnection);

function createBaseConnectorConfigS3Sink(): ConnectorConfigS3Sink {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink",
    topics: "",
    fileCompressionType: "",
    fileMaxRecords: undefined,
    s3Connection: undefined,
  };
}

export const ConnectorConfigS3Sink = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink" as const,

  encode(message: ConnectorConfigS3Sink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topics !== "") {
      writer.uint32(10).string(message.topics);
    }
    if (message.fileCompressionType !== "") {
      writer.uint32(18).string(message.fileCompressionType);
    }
    if (message.fileMaxRecords !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fileMaxRecords! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.s3Connection !== undefined) {
      S3Connection.encode(message.s3Connection, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigS3Sink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectorConfigS3Sink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topics = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fileCompressionType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileMaxRecords = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.s3Connection = S3Connection.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectorConfigS3Sink {
    return {
      $type: ConnectorConfigS3Sink.$type,
      topics: isSet(object.topics) ? globalThis.String(object.topics) : "",
      fileCompressionType: isSet(object.fileCompressionType) ? globalThis.String(object.fileCompressionType) : "",
      fileMaxRecords: isSet(object.fileMaxRecords) ? Number(object.fileMaxRecords) : undefined,
      s3Connection: isSet(object.s3Connection) ? S3Connection.fromJSON(object.s3Connection) : undefined,
    };
  },

  toJSON(message: ConnectorConfigS3Sink): unknown {
    const obj: any = {};
    if (message.topics !== "") {
      obj.topics = message.topics;
    }
    if (message.fileCompressionType !== "") {
      obj.fileCompressionType = message.fileCompressionType;
    }
    if (message.fileMaxRecords !== undefined) {
      obj.fileMaxRecords = message.fileMaxRecords;
    }
    if (message.s3Connection !== undefined) {
      obj.s3Connection = S3Connection.toJSON(message.s3Connection);
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectorConfigS3Sink>): ConnectorConfigS3Sink {
    return ConnectorConfigS3Sink.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectorConfigS3Sink>): ConnectorConfigS3Sink {
    const message = createBaseConnectorConfigS3Sink();
    message.topics = object.topics ?? "";
    message.fileCompressionType = object.fileCompressionType ?? "";
    message.fileMaxRecords = object.fileMaxRecords ?? undefined;
    message.s3Connection = (object.s3Connection !== undefined && object.s3Connection !== null)
      ? S3Connection.fromPartial(object.s3Connection)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectorConfigS3Sink.$type, ConnectorConfigS3Sink);

function createBaseS3Connection(): S3Connection {
  return { $type: "yandex.cloud.mdb.kafka.v1.S3Connection", bucketName: "", externalS3: undefined };
}

export const S3Connection = {
  $type: "yandex.cloud.mdb.kafka.v1.S3Connection" as const,

  encode(message: S3Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.externalS3 !== undefined) {
      ExternalS3Storage.encode(message.externalS3, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3Connection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3Connection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucketName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.externalS3 = ExternalS3Storage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S3Connection {
    return {
      $type: S3Connection.$type,
      bucketName: isSet(object.bucketName) ? globalThis.String(object.bucketName) : "",
      externalS3: isSet(object.externalS3) ? ExternalS3Storage.fromJSON(object.externalS3) : undefined,
    };
  },

  toJSON(message: S3Connection): unknown {
    const obj: any = {};
    if (message.bucketName !== "") {
      obj.bucketName = message.bucketName;
    }
    if (message.externalS3 !== undefined) {
      obj.externalS3 = ExternalS3Storage.toJSON(message.externalS3);
    }
    return obj;
  },

  create(base?: DeepPartial<S3Connection>): S3Connection {
    return S3Connection.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<S3Connection>): S3Connection {
    const message = createBaseS3Connection();
    message.bucketName = object.bucketName ?? "";
    message.externalS3 = (object.externalS3 !== undefined && object.externalS3 !== null)
      ? ExternalS3Storage.fromPartial(object.externalS3)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(S3Connection.$type, S3Connection);

function createBaseExternalS3Storage(): ExternalS3Storage {
  return { $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage", accessKeyId: "", endpoint: "", region: "" };
}

export const ExternalS3Storage = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage" as const,

  encode(message: ExternalS3Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    if (message.endpoint !== "") {
      writer.uint32(18).string(message.endpoint);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalS3Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalS3Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endpoint = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.region = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalS3Storage {
    return {
      $type: ExternalS3Storage.$type,
      accessKeyId: isSet(object.accessKeyId) ? globalThis.String(object.accessKeyId) : "",
      endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
      region: isSet(object.region) ? globalThis.String(object.region) : "",
    };
  },

  toJSON(message: ExternalS3Storage): unknown {
    const obj: any = {};
    if (message.accessKeyId !== "") {
      obj.accessKeyId = message.accessKeyId;
    }
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    if (message.region !== "") {
      obj.region = message.region;
    }
    return obj;
  },

  create(base?: DeepPartial<ExternalS3Storage>): ExternalS3Storage {
    return ExternalS3Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExternalS3Storage>): ExternalS3Storage {
    const message = createBaseExternalS3Storage();
    message.accessKeyId = object.accessKeyId ?? "";
    message.endpoint = object.endpoint ?? "";
    message.region = object.region ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalS3Storage.$type, ExternalS3Storage);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
