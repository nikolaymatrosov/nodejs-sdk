/* eslint-disable */
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { CompressionType, compressionTypeFromJSON, compressionTypeToJSON } from "./common";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

/**
 * An Kafka topic.
 * For more information, see the [Concepts -> Topics and partitions](/docs/managed-kafka/concepts/topics) section of the documentation.
 */
export interface Topic {
  $type: "yandex.cloud.mdb.kafka.v1.Topic";
  /** Name of the topic. */
  name: string;
  /**
   * ID of an Apache Kafka® cluster that the topic belongs to.
   *
   * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** The number of the topic's partitions. */
  partitions?:
    | number
    | undefined;
  /** Amount of data copies (replicas) for the topic in the cluster. */
  replicationFactor?: number | undefined;
  topicConfig28?: TopicConfig28 | undefined;
  topicConfig3?: TopicConfig3 | undefined;
}

export interface TopicSpec {
  $type: "yandex.cloud.mdb.kafka.v1.TopicSpec";
  /** Name of the topic. */
  name: string;
  /** The number of the topic's partitions. */
  partitions?:
    | number
    | undefined;
  /** Amount of copies of a topic data kept in the cluster. */
  replicationFactor?: number | undefined;
  topicConfig28?: TopicConfig28 | undefined;
  topicConfig3?: TopicConfig3 | undefined;
}

/** A topic settings for 2.8 */
export interface TopicConfig28 {
  $type: "yandex.cloud.mdb.kafka.v1.TopicConfig2_8";
  /** Retention policy to use on old log messages. */
  cleanupPolicy: TopicConfig28_CleanupPolicy;
  /** The compression type for a given topic. */
  compressionType: CompressionType;
  /** The amount of time in milliseconds to retain delete tombstone markers for log compacted topics. */
  deleteRetentionMs?:
    | number
    | undefined;
  /** The time to wait before deleting a file from the filesystem. */
  fileDeleteDelayMs?:
    | number
    | undefined;
  /**
   * The number of messages accumulated on a log partition before messages are flushed to disk.
   *
   * This setting overrides the cluster-level [KafkaConfig2_8.log_flush_interval_messages] setting on the topic level.
   */
  flushMessages?:
    | number
    | undefined;
  /**
   * The maximum time in milliseconds that a message in the topic is kept in memory before flushed to disk.
   *
   * This setting overrides the cluster-level [KafkaConfig2_8.log_flush_interval_ms] setting on the topic level.
   */
  flushMs?:
    | number
    | undefined;
  /** The minimum time in milliseconds a message will remain uncompacted in the log. */
  minCompactionLagMs?:
    | number
    | undefined;
  /**
   * The maximum size a partition can grow to before Kafka will discard old log segments to free up space if the `delete` [cleanup_policy] is in effect.
   * It is helpful if you need to control the size of log due to limited disk space.
   *
   * This setting overrides the cluster-level [KafkaConfig2_8.log_retention_bytes] setting on the topic level.
   */
  retentionBytes?:
    | number
    | undefined;
  /**
   * The number of milliseconds to keep a log segment's file before deleting it.
   *
   * This setting overrides the cluster-level [KafkaConfig2_8.log_retention_ms] setting on the topic level.
   */
  retentionMs?:
    | number
    | undefined;
  /** The largest record batch size allowed in topic. */
  maxMessageBytes?:
    | number
    | undefined;
  /**
   * This configuration specifies the minimum number of replicas that must acknowledge a write to topic for the write
   * to be considered successful (when a producer sets acks to "all").
   */
  minInsyncReplicas?:
    | number
    | undefined;
  /**
   * This configuration controls the segment file size for the log. Retention and cleaning is always done a file
   * at a time so a larger segment size means fewer files but less granular control over retention.
   *
   * This setting overrides the cluster-level [KafkaConfig2_8.log_segment_bytes] setting on the topic level.
   */
  segmentBytes?:
    | number
    | undefined;
  /**
   * True if we should preallocate the file on disk when creating a new log segment.
   *
   * This setting overrides the cluster-level [KafkaConfig2_8.log_preallocate] setting on the topic level.
   */
  preallocate?: boolean | undefined;
}

export enum TopicConfig28_CleanupPolicy {
  CLEANUP_POLICY_UNSPECIFIED = 0,
  /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_8.log_retention_ms] and other similar parameters. */
  CLEANUP_POLICY_DELETE = 1,
  /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
  CLEANUP_POLICY_COMPACT = 2,
  /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
  CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
  UNRECOGNIZED = -1,
}

export function topicConfig28_CleanupPolicyFromJSON(object: any): TopicConfig28_CleanupPolicy {
  switch (object) {
    case 0:
    case "CLEANUP_POLICY_UNSPECIFIED":
      return TopicConfig28_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
    case 1:
    case "CLEANUP_POLICY_DELETE":
      return TopicConfig28_CleanupPolicy.CLEANUP_POLICY_DELETE;
    case 2:
    case "CLEANUP_POLICY_COMPACT":
      return TopicConfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT;
    case 3:
    case "CLEANUP_POLICY_COMPACT_AND_DELETE":
      return TopicConfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TopicConfig28_CleanupPolicy.UNRECOGNIZED;
  }
}

export function topicConfig28_CleanupPolicyToJSON(object: TopicConfig28_CleanupPolicy): string {
  switch (object) {
    case TopicConfig28_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
      return "CLEANUP_POLICY_UNSPECIFIED";
    case TopicConfig28_CleanupPolicy.CLEANUP_POLICY_DELETE:
      return "CLEANUP_POLICY_DELETE";
    case TopicConfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT:
      return "CLEANUP_POLICY_COMPACT";
    case TopicConfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE:
      return "CLEANUP_POLICY_COMPACT_AND_DELETE";
    case TopicConfig28_CleanupPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A topic settings for 3.x */
export interface TopicConfig3 {
  $type: "yandex.cloud.mdb.kafka.v1.TopicConfig3";
  /** Retention policy to use on old log messages. */
  cleanupPolicy: TopicConfig3_CleanupPolicy;
  /** The compression type for a given topic. */
  compressionType: CompressionType;
  /** The amount of time in milliseconds to retain delete tombstone markers for log compacted topics. */
  deleteRetentionMs?:
    | number
    | undefined;
  /** The time to wait before deleting a file from the filesystem. */
  fileDeleteDelayMs?:
    | number
    | undefined;
  /**
   * The number of messages accumulated on a log partition before messages are flushed to disk.
   *
   * This setting overrides the cluster-level [KafkaConfig3.log_flush_interval_messages] setting on the topic level.
   */
  flushMessages?:
    | number
    | undefined;
  /**
   * The maximum time in milliseconds that a message in the topic is kept in memory before flushed to disk.
   *
   * This setting overrides the cluster-level [KafkaConfig3.log_flush_interval_ms] setting on the topic level.
   */
  flushMs?:
    | number
    | undefined;
  /** The minimum time in milliseconds a message will remain uncompacted in the log. */
  minCompactionLagMs?:
    | number
    | undefined;
  /**
   * The maximum size a partition can grow to before Kafka will discard old log segments to free up space if the `delete` [cleanup_policy] is in effect.
   * It is helpful if you need to control the size of log due to limited disk space.
   *
   * This setting overrides the cluster-level [KafkaConfig3.log_retention_bytes] setting on the topic level.
   */
  retentionBytes?:
    | number
    | undefined;
  /**
   * The number of milliseconds to keep a log segment's file before deleting it.
   *
   * This setting overrides the cluster-level [KafkaConfig3.log_retention_ms] setting on the topic level.
   */
  retentionMs?:
    | number
    | undefined;
  /** The largest record batch size allowed in topic. */
  maxMessageBytes?:
    | number
    | undefined;
  /**
   * This configuration specifies the minimum number of replicas that must acknowledge a write to topic for the write
   * to be considered successful (when a producer sets acks to "all").
   */
  minInsyncReplicas?:
    | number
    | undefined;
  /**
   * This configuration controls the segment file size for the log. Retention and cleaning is always done a file
   * at a time so a larger segment size means fewer files but less granular control over retention.
   *
   * This setting overrides the cluster-level [KafkaConfig3.log_segment_bytes] setting on the topic level.
   */
  segmentBytes?:
    | number
    | undefined;
  /**
   * True if we should preallocate the file on disk when creating a new log segment.
   *
   * This setting overrides the cluster-level [KafkaConfig3.log_preallocate] setting on the topic level.
   */
  preallocate?: boolean | undefined;
}

export enum TopicConfig3_CleanupPolicy {
  CLEANUP_POLICY_UNSPECIFIED = 0,
  /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig3.log_retention_ms] and other similar parameters. */
  CLEANUP_POLICY_DELETE = 1,
  /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
  CLEANUP_POLICY_COMPACT = 2,
  /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
  CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
  UNRECOGNIZED = -1,
}

export function topicConfig3_CleanupPolicyFromJSON(object: any): TopicConfig3_CleanupPolicy {
  switch (object) {
    case 0:
    case "CLEANUP_POLICY_UNSPECIFIED":
      return TopicConfig3_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
    case 1:
    case "CLEANUP_POLICY_DELETE":
      return TopicConfig3_CleanupPolicy.CLEANUP_POLICY_DELETE;
    case 2:
    case "CLEANUP_POLICY_COMPACT":
      return TopicConfig3_CleanupPolicy.CLEANUP_POLICY_COMPACT;
    case 3:
    case "CLEANUP_POLICY_COMPACT_AND_DELETE":
      return TopicConfig3_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TopicConfig3_CleanupPolicy.UNRECOGNIZED;
  }
}

export function topicConfig3_CleanupPolicyToJSON(object: TopicConfig3_CleanupPolicy): string {
  switch (object) {
    case TopicConfig3_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
      return "CLEANUP_POLICY_UNSPECIFIED";
    case TopicConfig3_CleanupPolicy.CLEANUP_POLICY_DELETE:
      return "CLEANUP_POLICY_DELETE";
    case TopicConfig3_CleanupPolicy.CLEANUP_POLICY_COMPACT:
      return "CLEANUP_POLICY_COMPACT";
    case TopicConfig3_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE:
      return "CLEANUP_POLICY_COMPACT_AND_DELETE";
    case TopicConfig3_CleanupPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTopic(): Topic {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.Topic",
    name: "",
    clusterId: "",
    partitions: undefined,
    replicationFactor: undefined,
    topicConfig28: undefined,
    topicConfig3: undefined,
  };
}

export const Topic = {
  $type: "yandex.cloud.mdb.kafka.v1.Topic" as const,

  encode(message: Topic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.partitions !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.partitions! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.replicationFactor !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicationFactor! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.topicConfig28 !== undefined) {
      TopicConfig28.encode(message.topicConfig28, writer.uint32(58).fork()).ldelim();
    }
    if (message.topicConfig3 !== undefined) {
      TopicConfig3.encode(message.topicConfig3, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Topic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopic();
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

          message.partitions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.topicConfig28 = TopicConfig28.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.topicConfig3 = TopicConfig3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Topic {
    return {
      $type: Topic.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      partitions: isSet(object.partitions) ? Number(object.partitions) : undefined,
      replicationFactor: isSet(object.replicationFactor) ? Number(object.replicationFactor) : undefined,
      topicConfig28: isSet(object.topicConfig_2_8) ? TopicConfig28.fromJSON(object.topicConfig_2_8) : undefined,
      topicConfig3: isSet(object.topicConfig_3) ? TopicConfig3.fromJSON(object.topicConfig_3) : undefined,
    };
  },

  toJSON(message: Topic): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.partitions !== undefined) {
      obj.partitions = message.partitions;
    }
    if (message.replicationFactor !== undefined) {
      obj.replicationFactor = message.replicationFactor;
    }
    if (message.topicConfig28 !== undefined) {
      obj.topicConfig_2_8 = TopicConfig28.toJSON(message.topicConfig28);
    }
    if (message.topicConfig3 !== undefined) {
      obj.topicConfig_3 = TopicConfig3.toJSON(message.topicConfig3);
    }
    return obj;
  },

  create(base?: DeepPartial<Topic>): Topic {
    return Topic.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Topic>): Topic {
    const message = createBaseTopic();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.partitions = object.partitions ?? undefined;
    message.replicationFactor = object.replicationFactor ?? undefined;
    message.topicConfig28 = (object.topicConfig28 !== undefined && object.topicConfig28 !== null)
      ? TopicConfig28.fromPartial(object.topicConfig28)
      : undefined;
    message.topicConfig3 = (object.topicConfig3 !== undefined && object.topicConfig3 !== null)
      ? TopicConfig3.fromPartial(object.topicConfig3)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Topic.$type, Topic);

function createBaseTopicSpec(): TopicSpec {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.TopicSpec",
    name: "",
    partitions: undefined,
    replicationFactor: undefined,
    topicConfig28: undefined,
    topicConfig3: undefined,
  };
}

export const TopicSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.TopicSpec" as const,

  encode(message: TopicSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.partitions !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.partitions! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.replicationFactor !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicationFactor! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.topicConfig28 !== undefined) {
      TopicConfig28.encode(message.topicConfig28, writer.uint32(50).fork()).ldelim();
    }
    if (message.topicConfig3 !== undefined) {
      TopicConfig3.encode(message.topicConfig3, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopicSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopicSpec();
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

          message.partitions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.topicConfig28 = TopicConfig28.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.topicConfig3 = TopicConfig3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopicSpec {
    return {
      $type: TopicSpec.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      partitions: isSet(object.partitions) ? Number(object.partitions) : undefined,
      replicationFactor: isSet(object.replicationFactor) ? Number(object.replicationFactor) : undefined,
      topicConfig28: isSet(object.topicConfig_2_8) ? TopicConfig28.fromJSON(object.topicConfig_2_8) : undefined,
      topicConfig3: isSet(object.topicConfig_3) ? TopicConfig3.fromJSON(object.topicConfig_3) : undefined,
    };
  },

  toJSON(message: TopicSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.partitions !== undefined) {
      obj.partitions = message.partitions;
    }
    if (message.replicationFactor !== undefined) {
      obj.replicationFactor = message.replicationFactor;
    }
    if (message.topicConfig28 !== undefined) {
      obj.topicConfig_2_8 = TopicConfig28.toJSON(message.topicConfig28);
    }
    if (message.topicConfig3 !== undefined) {
      obj.topicConfig_3 = TopicConfig3.toJSON(message.topicConfig3);
    }
    return obj;
  },

  create(base?: DeepPartial<TopicSpec>): TopicSpec {
    return TopicSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TopicSpec>): TopicSpec {
    const message = createBaseTopicSpec();
    message.name = object.name ?? "";
    message.partitions = object.partitions ?? undefined;
    message.replicationFactor = object.replicationFactor ?? undefined;
    message.topicConfig28 = (object.topicConfig28 !== undefined && object.topicConfig28 !== null)
      ? TopicConfig28.fromPartial(object.topicConfig28)
      : undefined;
    message.topicConfig3 = (object.topicConfig3 !== undefined && object.topicConfig3 !== null)
      ? TopicConfig3.fromPartial(object.topicConfig3)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(TopicSpec.$type, TopicSpec);

function createBaseTopicConfig28(): TopicConfig28 {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig2_8",
    cleanupPolicy: 0,
    compressionType: 0,
    deleteRetentionMs: undefined,
    fileDeleteDelayMs: undefined,
    flushMessages: undefined,
    flushMs: undefined,
    minCompactionLagMs: undefined,
    retentionBytes: undefined,
    retentionMs: undefined,
    maxMessageBytes: undefined,
    minInsyncReplicas: undefined,
    segmentBytes: undefined,
    preallocate: undefined,
  };
}

export const TopicConfig28 = {
  $type: "yandex.cloud.mdb.kafka.v1.TopicConfig2_8" as const,

  encode(message: TopicConfig28, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cleanupPolicy !== 0) {
      writer.uint32(8).int32(message.cleanupPolicy);
    }
    if (message.compressionType !== 0) {
      writer.uint32(16).int32(message.compressionType);
    }
    if (message.deleteRetentionMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.deleteRetentionMs! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.fileDeleteDelayMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fileDeleteDelayMs! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.flushMessages !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.flushMessages! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.flushMs !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMs! }, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.minCompactionLagMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minCompactionLagMs! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.retentionBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.retentionBytes! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.retentionMs !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionMs! }, writer.uint32(74).fork())
        .ldelim();
    }
    if (message.maxMessageBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxMessageBytes! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.minInsyncReplicas !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minInsyncReplicas! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.segmentBytes !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.segmentBytes! }, writer.uint32(98).fork())
        .ldelim();
    }
    if (message.preallocate !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.preallocate! }, writer.uint32(106).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopicConfig28 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopicConfig28();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.cleanupPolicy = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.compressionType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deleteRetentionMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fileDeleteDelayMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.flushMessages = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.flushMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.minCompactionLagMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.retentionBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.retentionMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.maxMessageBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.minInsyncReplicas = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.segmentBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.preallocate = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopicConfig28 {
    return {
      $type: TopicConfig28.$type,
      cleanupPolicy: isSet(object.cleanupPolicy) ? topicConfig28_CleanupPolicyFromJSON(object.cleanupPolicy) : 0,
      compressionType: isSet(object.compressionType) ? compressionTypeFromJSON(object.compressionType) : 0,
      deleteRetentionMs: isSet(object.deleteRetentionMs) ? Number(object.deleteRetentionMs) : undefined,
      fileDeleteDelayMs: isSet(object.fileDeleteDelayMs) ? Number(object.fileDeleteDelayMs) : undefined,
      flushMessages: isSet(object.flushMessages) ? Number(object.flushMessages) : undefined,
      flushMs: isSet(object.flushMs) ? Number(object.flushMs) : undefined,
      minCompactionLagMs: isSet(object.minCompactionLagMs) ? Number(object.minCompactionLagMs) : undefined,
      retentionBytes: isSet(object.retentionBytes) ? Number(object.retentionBytes) : undefined,
      retentionMs: isSet(object.retentionMs) ? Number(object.retentionMs) : undefined,
      maxMessageBytes: isSet(object.maxMessageBytes) ? Number(object.maxMessageBytes) : undefined,
      minInsyncReplicas: isSet(object.minInsyncReplicas) ? Number(object.minInsyncReplicas) : undefined,
      segmentBytes: isSet(object.segmentBytes) ? Number(object.segmentBytes) : undefined,
      preallocate: isSet(object.preallocate) ? Boolean(object.preallocate) : undefined,
    };
  },

  toJSON(message: TopicConfig28): unknown {
    const obj: any = {};
    if (message.cleanupPolicy !== 0) {
      obj.cleanupPolicy = topicConfig28_CleanupPolicyToJSON(message.cleanupPolicy);
    }
    if (message.compressionType !== 0) {
      obj.compressionType = compressionTypeToJSON(message.compressionType);
    }
    if (message.deleteRetentionMs !== undefined) {
      obj.deleteRetentionMs = message.deleteRetentionMs;
    }
    if (message.fileDeleteDelayMs !== undefined) {
      obj.fileDeleteDelayMs = message.fileDeleteDelayMs;
    }
    if (message.flushMessages !== undefined) {
      obj.flushMessages = message.flushMessages;
    }
    if (message.flushMs !== undefined) {
      obj.flushMs = message.flushMs;
    }
    if (message.minCompactionLagMs !== undefined) {
      obj.minCompactionLagMs = message.minCompactionLagMs;
    }
    if (message.retentionBytes !== undefined) {
      obj.retentionBytes = message.retentionBytes;
    }
    if (message.retentionMs !== undefined) {
      obj.retentionMs = message.retentionMs;
    }
    if (message.maxMessageBytes !== undefined) {
      obj.maxMessageBytes = message.maxMessageBytes;
    }
    if (message.minInsyncReplicas !== undefined) {
      obj.minInsyncReplicas = message.minInsyncReplicas;
    }
    if (message.segmentBytes !== undefined) {
      obj.segmentBytes = message.segmentBytes;
    }
    if (message.preallocate !== undefined) {
      obj.preallocate = message.preallocate;
    }
    return obj;
  },

  create(base?: DeepPartial<TopicConfig28>): TopicConfig28 {
    return TopicConfig28.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TopicConfig28>): TopicConfig28 {
    const message = createBaseTopicConfig28();
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    message.compressionType = object.compressionType ?? 0;
    message.deleteRetentionMs = object.deleteRetentionMs ?? undefined;
    message.fileDeleteDelayMs = object.fileDeleteDelayMs ?? undefined;
    message.flushMessages = object.flushMessages ?? undefined;
    message.flushMs = object.flushMs ?? undefined;
    message.minCompactionLagMs = object.minCompactionLagMs ?? undefined;
    message.retentionBytes = object.retentionBytes ?? undefined;
    message.retentionMs = object.retentionMs ?? undefined;
    message.maxMessageBytes = object.maxMessageBytes ?? undefined;
    message.minInsyncReplicas = object.minInsyncReplicas ?? undefined;
    message.segmentBytes = object.segmentBytes ?? undefined;
    message.preallocate = object.preallocate ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(TopicConfig28.$type, TopicConfig28);

function createBaseTopicConfig3(): TopicConfig3 {
  return {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig3",
    cleanupPolicy: 0,
    compressionType: 0,
    deleteRetentionMs: undefined,
    fileDeleteDelayMs: undefined,
    flushMessages: undefined,
    flushMs: undefined,
    minCompactionLagMs: undefined,
    retentionBytes: undefined,
    retentionMs: undefined,
    maxMessageBytes: undefined,
    minInsyncReplicas: undefined,
    segmentBytes: undefined,
    preallocate: undefined,
  };
}

export const TopicConfig3 = {
  $type: "yandex.cloud.mdb.kafka.v1.TopicConfig3" as const,

  encode(message: TopicConfig3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cleanupPolicy !== 0) {
      writer.uint32(8).int32(message.cleanupPolicy);
    }
    if (message.compressionType !== 0) {
      writer.uint32(16).int32(message.compressionType);
    }
    if (message.deleteRetentionMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.deleteRetentionMs! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.fileDeleteDelayMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fileDeleteDelayMs! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.flushMessages !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.flushMessages! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.flushMs !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMs! }, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.minCompactionLagMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minCompactionLagMs! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.retentionBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.retentionBytes! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.retentionMs !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionMs! }, writer.uint32(74).fork())
        .ldelim();
    }
    if (message.maxMessageBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxMessageBytes! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.minInsyncReplicas !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minInsyncReplicas! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.segmentBytes !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.segmentBytes! }, writer.uint32(98).fork())
        .ldelim();
    }
    if (message.preallocate !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.preallocate! }, writer.uint32(106).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopicConfig3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopicConfig3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.cleanupPolicy = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.compressionType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deleteRetentionMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fileDeleteDelayMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.flushMessages = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.flushMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.minCompactionLagMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.retentionBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.retentionMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.maxMessageBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.minInsyncReplicas = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.segmentBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.preallocate = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopicConfig3 {
    return {
      $type: TopicConfig3.$type,
      cleanupPolicy: isSet(object.cleanupPolicy) ? topicConfig3_CleanupPolicyFromJSON(object.cleanupPolicy) : 0,
      compressionType: isSet(object.compressionType) ? compressionTypeFromJSON(object.compressionType) : 0,
      deleteRetentionMs: isSet(object.deleteRetentionMs) ? Number(object.deleteRetentionMs) : undefined,
      fileDeleteDelayMs: isSet(object.fileDeleteDelayMs) ? Number(object.fileDeleteDelayMs) : undefined,
      flushMessages: isSet(object.flushMessages) ? Number(object.flushMessages) : undefined,
      flushMs: isSet(object.flushMs) ? Number(object.flushMs) : undefined,
      minCompactionLagMs: isSet(object.minCompactionLagMs) ? Number(object.minCompactionLagMs) : undefined,
      retentionBytes: isSet(object.retentionBytes) ? Number(object.retentionBytes) : undefined,
      retentionMs: isSet(object.retentionMs) ? Number(object.retentionMs) : undefined,
      maxMessageBytes: isSet(object.maxMessageBytes) ? Number(object.maxMessageBytes) : undefined,
      minInsyncReplicas: isSet(object.minInsyncReplicas) ? Number(object.minInsyncReplicas) : undefined,
      segmentBytes: isSet(object.segmentBytes) ? Number(object.segmentBytes) : undefined,
      preallocate: isSet(object.preallocate) ? Boolean(object.preallocate) : undefined,
    };
  },

  toJSON(message: TopicConfig3): unknown {
    const obj: any = {};
    if (message.cleanupPolicy !== 0) {
      obj.cleanupPolicy = topicConfig3_CleanupPolicyToJSON(message.cleanupPolicy);
    }
    if (message.compressionType !== 0) {
      obj.compressionType = compressionTypeToJSON(message.compressionType);
    }
    if (message.deleteRetentionMs !== undefined) {
      obj.deleteRetentionMs = message.deleteRetentionMs;
    }
    if (message.fileDeleteDelayMs !== undefined) {
      obj.fileDeleteDelayMs = message.fileDeleteDelayMs;
    }
    if (message.flushMessages !== undefined) {
      obj.flushMessages = message.flushMessages;
    }
    if (message.flushMs !== undefined) {
      obj.flushMs = message.flushMs;
    }
    if (message.minCompactionLagMs !== undefined) {
      obj.minCompactionLagMs = message.minCompactionLagMs;
    }
    if (message.retentionBytes !== undefined) {
      obj.retentionBytes = message.retentionBytes;
    }
    if (message.retentionMs !== undefined) {
      obj.retentionMs = message.retentionMs;
    }
    if (message.maxMessageBytes !== undefined) {
      obj.maxMessageBytes = message.maxMessageBytes;
    }
    if (message.minInsyncReplicas !== undefined) {
      obj.minInsyncReplicas = message.minInsyncReplicas;
    }
    if (message.segmentBytes !== undefined) {
      obj.segmentBytes = message.segmentBytes;
    }
    if (message.preallocate !== undefined) {
      obj.preallocate = message.preallocate;
    }
    return obj;
  },

  create(base?: DeepPartial<TopicConfig3>): TopicConfig3 {
    return TopicConfig3.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TopicConfig3>): TopicConfig3 {
    const message = createBaseTopicConfig3();
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    message.compressionType = object.compressionType ?? 0;
    message.deleteRetentionMs = object.deleteRetentionMs ?? undefined;
    message.fileDeleteDelayMs = object.fileDeleteDelayMs ?? undefined;
    message.flushMessages = object.flushMessages ?? undefined;
    message.flushMs = object.flushMs ?? undefined;
    message.minCompactionLagMs = object.minCompactionLagMs ?? undefined;
    message.retentionBytes = object.retentionBytes ?? undefined;
    message.retentionMs = object.retentionMs ?? undefined;
    message.maxMessageBytes = object.maxMessageBytes ?? undefined;
    message.minInsyncReplicas = object.minInsyncReplicas ?? undefined;
    message.segmentBytes = object.segmentBytes ?? undefined;
    message.preallocate = object.preallocate ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(TopicConfig3.$type, TopicConfig3);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
