/* eslint-disable */
import {
  BoolValue,
  DoubleValue,
  Int64Value,
  StringValue,
} from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1.config";

/**
 * ClickHouse configuration options. Detailed description for each set of options
 * is available in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server_settings/settings/).
 *
 * Any options not listed here are not supported.
 */
export interface ClickhouseConfig {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig";
  /** Logging level for the ClickHouse cluster. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
  logLevel: ClickhouseConfig_LogLevel;
  /**
   * Settings for the MergeTree engine.
   * See description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server_settings/settings/#merge_tree).
   */
  mergeTree?:
    | ClickhouseConfig_MergeTree
    | undefined;
  /**
   * Compression settings for the ClickHouse cluster.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server_settings/settings/#compression).
   */
  compression: ClickhouseConfig_Compression[];
  /**
   * Configuration of external dictionaries to be used by the ClickHouse cluster.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts/).
   */
  dictionaries: ClickhouseConfig_ExternalDictionary[];
  /**
   * Settings for thinning Graphite data.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server_settings/settings/#server_settings-graphite_rollup).
   */
  graphiteRollup: ClickhouseConfig_GraphiteRollup[];
  kafka?: ClickhouseConfig_Kafka | undefined;
  kafkaTopics: ClickhouseConfig_KafkaTopic[];
  rabbitmq?:
    | ClickhouseConfig_Rabbitmq
    | undefined;
  /** Maximum number of inbound connections. */
  maxConnections?:
    | number
    | undefined;
  /** Maximum number of simultaneously processed requests. */
  maxConcurrentQueries?:
    | number
    | undefined;
  /** Number of milliseconds that ClickHouse waits for incoming requests before closing the connection. */
  keepAliveTimeout?:
    | number
    | undefined;
  /** Cache size (in bytes) for uncompressed data used by MergeTree tables. */
  uncompressedCacheSize?:
    | number
    | undefined;
  /** Approximate size (in bytes) of the cache of "marks" used by MergeTree tables. */
  markCacheSize?:
    | number
    | undefined;
  /** Maximum size of the table that can be deleted using a DROP query. */
  maxTableSizeToDrop?:
    | number
    | undefined;
  /** Maximum size of the partition that can be deleted using a DROP query. */
  maxPartitionSizeToDrop?:
    | number
    | undefined;
  /**
   * The setting is deprecated and has no effect.
   *
   * @deprecated
   */
  builtinDictionariesReloadInterval?:
    | number
    | undefined;
  /** The server's time zone to be used in DateTime fields conversions. Specified as an IANA identifier. */
  timezone: string;
  /** Address of the archive with the user geobase in Object Storage. */
  geobaseUri: string;
  /**
   * The maximum size that query_log can grow to before old data will be removed. If set to 0, automatic removal of
   * query_log data based on size is disabled.
   */
  queryLogRetentionSize?:
    | number
    | undefined;
  /**
   * The maximum time that query_log records will be retained before removal. If set to 0, automatic removal of
   * query_log data based on time is disabled.
   */
  queryLogRetentionTime?:
    | number
    | undefined;
  /** Whether query_thread_log system table is enabled. */
  queryThreadLogEnabled?:
    | boolean
    | undefined;
  /**
   * The maximum size that query_thread_log can grow to before old data will be removed. If set to 0, automatic removal of
   * query_thread_log data based on size is disabled.
   */
  queryThreadLogRetentionSize?:
    | number
    | undefined;
  /**
   * The maximum time that query_thread_log records will be retained before removal. If set to 0, automatic removal of
   * query_thread_log data based on time is disabled.
   */
  queryThreadLogRetentionTime?:
    | number
    | undefined;
  /**
   * The maximum size that part_log can grow to before old data will be removed. If set to 0, automatic removal of
   * part_log data based on size is disabled.
   */
  partLogRetentionSize?:
    | number
    | undefined;
  /**
   * The maximum time that part_log records will be retained before removal. If set to 0, automatic removal of
   * part_log data based on time is disabled.
   */
  partLogRetentionTime?:
    | number
    | undefined;
  /** Whether metric_log system table is enabled. */
  metricLogEnabled?:
    | boolean
    | undefined;
  /**
   * The maximum size that metric_log can grow to before old data will be removed. If set to 0, automatic removal of
   * metric_log data based on size is disabled.
   */
  metricLogRetentionSize?:
    | number
    | undefined;
  /**
   * The maximum time that metric_log records will be retained before removal. If set to 0, automatic removal of
   * metric_log data based on time is disabled.
   */
  metricLogRetentionTime?:
    | number
    | undefined;
  /** Whether trace_log system table is enabled. */
  traceLogEnabled?:
    | boolean
    | undefined;
  /**
   * The maximum size that trace_log can grow to before old data will be removed. If set to 0, automatic removal of
   * trace_log data based on size is disabled.
   */
  traceLogRetentionSize?:
    | number
    | undefined;
  /**
   * The maximum time that trace_log records will be retained before removal. If set to 0, automatic removal of
   * trace_log data based on time is disabled.
   */
  traceLogRetentionTime?:
    | number
    | undefined;
  /** Whether text_log system table is enabled. */
  textLogEnabled?:
    | boolean
    | undefined;
  /**
   * The maximum size that text_log can grow to before old data will be removed. If set to 0, automatic removal of
   * text_log data based on size is disabled.
   */
  textLogRetentionSize?:
    | number
    | undefined;
  /**
   * The maximum time that text_log records will be retained before removal. If set to 0, automatic removal of
   * text_log data based on time is disabled.
   */
  textLogRetentionTime?:
    | number
    | undefined;
  /** Logging level for text_log system table. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
  textLogLevel: ClickhouseConfig_LogLevel;
  opentelemetrySpanLogEnabled?: boolean | undefined;
  backgroundPoolSize?: number | undefined;
  backgroundSchedulePoolSize?:
    | number
    | undefined;
  /**
   * Sets the number of threads performing background fetches for tables with **ReplicatedMergeTree** engines. Default value: 8.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings/#background_fetches_pool_size).
   */
  backgroundFetchesPoolSize?: number | undefined;
  backgroundMovePoolSize?: number | undefined;
  backgroundDistributedSchedulePoolSize?: number | undefined;
  backgroundBufferFlushSchedulePoolSize?: number | undefined;
  backgroundMessageBrokerSchedulePoolSize?:
    | number
    | undefined;
  /**
   * The default database.
   *
   * To get a list of cluster databases, see [Yandex Managed ClickHouse documentation](https://cloud.yandex.com/en/docs/managed-clickhouse/operations/databases#list-db).
   */
  defaultDatabase?:
    | string
    | undefined;
  /**
   * Sets the memory size (in bytes) for a stack trace at every peak allocation step. Default value: **4194304**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings/#total-memory-profiler-step).
   */
  totalMemoryProfilerStep?: number | undefined;
  totalMemoryTrackerSampleProbability?:
    | number
    | undefined;
  /**
   * The maximum number of threads that will be used for performing a variety of operations (mostly garbage collection) for *MergeTree-engine tables in a background.
   * Default: 8
   * Min version: 21.11
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings#background_common_pool_size)
   */
  backgroundCommonPoolSize?:
    | number
    | undefined;
  /**
   * Sets a ratio between the number of threads and the number of background merges and mutations that can be executed concurrently. For example, if the ratio equals to 2 and background_pool_size is set to 16 then ClickHouse can execute 32 background merges concurrently. This is possible, because background operations could be suspended and postponed. This is needed to give small merges more execution priority. You can only increase this ratio at runtime. To lower it you have to restart the server. The same as for background_pool_size setting background_merges_mutations_concurrency_ratio could be applied from the default profile for backward compatibility.
   * Default: 2
   * Min_version: 21.11
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings#background_merges_mutations_concurrency_ratio)
   */
  backgroundMergesMutationsConcurrencyRatio?:
    | number
    | undefined;
  /**
   * Default: false
   * Min version: 21.9
   */
  queryViewsLogEnabled?:
    | boolean
    | undefined;
  /** Default: 0 */
  queryViewsLogRetentionSize?: number | undefined;
  queryViewsLogRetentionTime?:
    | number
    | undefined;
  /**
   * Default: false
   * Min version: 20.11
   */
  asynchronousMetricLogEnabled?:
    | boolean
    | undefined;
  /** Default: 0 */
  asynchronousMetricLogRetentionSize?: number | undefined;
  asynchronousMetricLogRetentionTime?:
    | number
    | undefined;
  /**
   * Default: 0
   * Min version: 20.11
   */
  opentelemetrySpanLogRetentionSize?: number | undefined;
  opentelemetrySpanLogRetentionTime?:
    | number
    | undefined;
  /**
   * Default: false
   * Min version: 21.11
   */
  sessionLogEnabled?:
    | boolean
    | undefined;
  /** Default: 0 */
  sessionLogRetentionSize?: number | undefined;
  sessionLogRetentionTime?:
    | number
    | undefined;
  /**
   * Default: false
   * Min version: 21.9
   */
  zookeeperLogEnabled?:
    | boolean
    | undefined;
  /** Default: 0 */
  zookeeperLogRetentionSize?: number | undefined;
  zookeeperLogRetentionTime?:
    | number
    | undefined;
  /**
   * Default: false
   * Min version: 22.10
   */
  asynchronousInsertLogEnabled?:
    | boolean
    | undefined;
  /** Default: 0 */
  asynchronousInsertLogRetentionSize?: number | undefined;
  asynchronousInsertLogRetentionTime?: number | undefined;
  geobaseEnabled?: boolean | undefined;
}

export enum ClickhouseConfig_LogLevel {
  LOG_LEVEL_UNSPECIFIED = 0,
  TRACE = 1,
  DEBUG = 2,
  INFORMATION = 3,
  WARNING = 4,
  ERROR = 5,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_LogLevelFromJSON(object: any): ClickhouseConfig_LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return ClickhouseConfig_LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "TRACE":
      return ClickhouseConfig_LogLevel.TRACE;
    case 2:
    case "DEBUG":
      return ClickhouseConfig_LogLevel.DEBUG;
    case 3:
    case "INFORMATION":
      return ClickhouseConfig_LogLevel.INFORMATION;
    case 4:
    case "WARNING":
      return ClickhouseConfig_LogLevel.WARNING;
    case 5:
    case "ERROR":
      return ClickhouseConfig_LogLevel.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_LogLevel.UNRECOGNIZED;
  }
}

export function clickhouseConfig_LogLevelToJSON(object: ClickhouseConfig_LogLevel): string {
  switch (object) {
    case ClickhouseConfig_LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case ClickhouseConfig_LogLevel.TRACE:
      return "TRACE";
    case ClickhouseConfig_LogLevel.DEBUG:
      return "DEBUG";
    case ClickhouseConfig_LogLevel.INFORMATION:
      return "INFORMATION";
    case ClickhouseConfig_LogLevel.WARNING:
      return "WARNING";
    case ClickhouseConfig_LogLevel.ERROR:
      return "ERROR";
    case ClickhouseConfig_LogLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Options specific to the MergeTree table engine. */
export interface ClickhouseConfig_MergeTree {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree";
  /** Number of blocks of hashes to keep in ZooKeeper. */
  replicatedDeduplicationWindow?:
    | number
    | undefined;
  /** Period of time to keep blocks of hashes for. */
  replicatedDeduplicationWindowSeconds?:
    | number
    | undefined;
  /** If table contains at least that many active parts in single partition, artificially slow down insert into table. */
  partsToDelayInsert?:
    | number
    | undefined;
  /** If more than this number active parts in single partition, throw 'Too many parts ...' exception. */
  partsToThrowInsert?: number | undefined;
  inactivePartsToDelayInsert?: number | undefined;
  inactivePartsToThrowInsert?:
    | number
    | undefined;
  /** How many tasks of merging and mutating parts are allowed simultaneously in ReplicatedMergeTree queue. */
  maxReplicatedMergesInQueue?:
    | number
    | undefined;
  /**
   * If there is less than specified number of free entries in background pool (or replicated queue), start to lower
   * maximum size of merge to process.
   */
  numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?:
    | number
    | undefined;
  /**
   * Maximum in total size of parts to merge, when there are minimum free threads in background pool (or entries
   * in replication queue).
   */
  maxBytesToMergeAtMinSpaceInPool?: number | undefined;
  maxBytesToMergeAtMaxSpaceInPool?:
    | number
    | undefined;
  /**
   * Minimum number of bytes in a data part that can be stored in **Wide** format.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/#min_bytes_for_wide_part).
   */
  minBytesForWidePart?:
    | number
    | undefined;
  /**
   * Minimum number of rows in a data part that can be stored in **Wide** format.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/#min_bytes_for_wide_part).
   */
  minRowsForWidePart?:
    | number
    | undefined;
  /**
   * Enables or disables complete dropping of data parts where all rows are expired in MergeTree tables.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#ttl_only_drop_parts).
   */
  ttlOnlyDropParts?: boolean | undefined;
  allowRemoteFsZeroCopyReplication?: boolean | undefined;
  mergeWithTtlTimeout?: number | undefined;
  mergeWithRecompressionTtlTimeout?: number | undefined;
  maxPartsInTotal?: number | undefined;
  maxNumberOfMergesWithTtlInPool?: number | undefined;
  cleanupDelayPeriod?: number | undefined;
  numberOfFreeEntriesInPoolToExecuteMutation?:
    | number
    | undefined;
  /**
   * The 'too many parts' check according to 'parts_to_delay_insert' and 'parts_to_throw_insert' will be active only if the average part size (in the relevant partition) is not larger than the specified threshold. If it is larger than the specified threshold, the INSERTs will be neither delayed or rejected. This allows to have hundreds of terabytes in a single table on a single server if the parts are successfully merged to larger parts. This does not affect the thresholds on inactive parts or total parts.
   * Default: 1 GiB
   * Min version: 22.10
   * See in-depth description in [ClickHouse GitHub](https://github.com/ClickHouse/ClickHouse/blob/f9558345e886876b9132d9c018e357f7fa9b22a3/src/Storages/MergeTree/MergeTreeSettings.h#L80)
   */
  maxAvgPartSizeForTooManyParts?:
    | number
    | undefined;
  /**
   * Merge parts if every part in the range is older than the value of min_age_to_force_merge_seconds.
   * Default: 0 - disabled
   * Min_version: 22.10
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/merge-tree-settings#min_age_to_force_merge_seconds)
   */
  minAgeToForceMergeSeconds?:
    | number
    | undefined;
  /**
   * Whether min_age_to_force_merge_seconds should be applied only on the entire partition and not on subset.
   * Default: false
   * Min_version: 22.11
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/merge-tree-settings#min_age_to_force_merge_seconds)
   */
  minAgeToForceMergeOnPartitionOnly?:
    | boolean
    | undefined;
  /**
   * Sleep time for merge selecting when no part is selected. A lower setting triggers selecting tasks in background_schedule_pool frequently, which results in a large number of requests to ClickHouse Keeper in large-scale clusters.
   * Default: 5000
   * Min_version: 21.10
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#merge_selecting_sleep_ms)
   */
  mergeSelectingSleepMs?: number | undefined;
}

export interface ClickhouseConfig_Kafka {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka";
  securityProtocol: ClickhouseConfig_Kafka_SecurityProtocol;
  saslMechanism: ClickhouseConfig_Kafka_SaslMechanism;
  saslUsername: string;
  saslPassword: string;
  enableSslCertificateVerification?: boolean | undefined;
  maxPollIntervalMs?: number | undefined;
  sessionTimeoutMs?: number | undefined;
}

export enum ClickhouseConfig_Kafka_SecurityProtocol {
  SECURITY_PROTOCOL_UNSPECIFIED = 0,
  SECURITY_PROTOCOL_PLAINTEXT = 1,
  SECURITY_PROTOCOL_SSL = 2,
  SECURITY_PROTOCOL_SASL_PLAINTEXT = 3,
  SECURITY_PROTOCOL_SASL_SSL = 4,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_Kafka_SecurityProtocolFromJSON(object: any): ClickhouseConfig_Kafka_SecurityProtocol {
  switch (object) {
    case 0:
    case "SECURITY_PROTOCOL_UNSPECIFIED":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_UNSPECIFIED;
    case 1:
    case "SECURITY_PROTOCOL_PLAINTEXT":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_PLAINTEXT;
    case 2:
    case "SECURITY_PROTOCOL_SSL":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SSL;
    case 3:
    case "SECURITY_PROTOCOL_SASL_PLAINTEXT":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_PLAINTEXT;
    case 4:
    case "SECURITY_PROTOCOL_SASL_SSL":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_SSL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_Kafka_SecurityProtocol.UNRECOGNIZED;
  }
}

export function clickhouseConfig_Kafka_SecurityProtocolToJSON(object: ClickhouseConfig_Kafka_SecurityProtocol): string {
  switch (object) {
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_UNSPECIFIED:
      return "SECURITY_PROTOCOL_UNSPECIFIED";
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_PLAINTEXT:
      return "SECURITY_PROTOCOL_PLAINTEXT";
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SSL:
      return "SECURITY_PROTOCOL_SSL";
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_PLAINTEXT:
      return "SECURITY_PROTOCOL_SASL_PLAINTEXT";
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_SSL:
      return "SECURITY_PROTOCOL_SASL_SSL";
    case ClickhouseConfig_Kafka_SecurityProtocol.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ClickhouseConfig_Kafka_SaslMechanism {
  SASL_MECHANISM_UNSPECIFIED = 0,
  SASL_MECHANISM_GSSAPI = 1,
  SASL_MECHANISM_PLAIN = 2,
  SASL_MECHANISM_SCRAM_SHA_256 = 3,
  SASL_MECHANISM_SCRAM_SHA_512 = 4,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_Kafka_SaslMechanismFromJSON(object: any): ClickhouseConfig_Kafka_SaslMechanism {
  switch (object) {
    case 0:
    case "SASL_MECHANISM_UNSPECIFIED":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_UNSPECIFIED;
    case 1:
    case "SASL_MECHANISM_GSSAPI":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_GSSAPI;
    case 2:
    case "SASL_MECHANISM_PLAIN":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_PLAIN;
    case 3:
    case "SASL_MECHANISM_SCRAM_SHA_256":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256;
    case 4:
    case "SASL_MECHANISM_SCRAM_SHA_512":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_Kafka_SaslMechanism.UNRECOGNIZED;
  }
}

export function clickhouseConfig_Kafka_SaslMechanismToJSON(object: ClickhouseConfig_Kafka_SaslMechanism): string {
  switch (object) {
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_UNSPECIFIED:
      return "SASL_MECHANISM_UNSPECIFIED";
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_GSSAPI:
      return "SASL_MECHANISM_GSSAPI";
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_PLAIN:
      return "SASL_MECHANISM_PLAIN";
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256:
      return "SASL_MECHANISM_SCRAM_SHA_256";
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512:
      return "SASL_MECHANISM_SCRAM_SHA_512";
    case ClickhouseConfig_Kafka_SaslMechanism.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ClickhouseConfig_KafkaTopic {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic";
  name: string;
  settings?: ClickhouseConfig_Kafka | undefined;
}

export interface ClickhouseConfig_Rabbitmq {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq";
  /** [RabbitMQ](https://clickhouse.com/docs/en/engines/table-engines/integrations/rabbitmq/) username */
  username: string;
  /** [RabbitMQ](https://clickhouse.com/docs/en/engines/table-engines/integrations/rabbitmq/) password */
  password: string;
  /** [RabbitMQ](https://clickhouse.com/docs/en/engines/table-engines/integrations/rabbitmq/) virtual host */
  vhost: string;
}

export interface ClickhouseConfig_Compression {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression";
  /** Compression method to use for the specified combination of [min_part_size] and [min_part_size_ratio]. */
  method: ClickhouseConfig_Compression_Method;
  /** Minimum size of a part of a table. */
  minPartSize: number;
  /** Minimum ratio of a part relative to the size of all the data in the table. */
  minPartSizeRatio: number;
  level?: number | undefined;
}

export enum ClickhouseConfig_Compression_Method {
  METHOD_UNSPECIFIED = 0,
  /** LZ4 - [LZ4 compression algorithm](https://lz4.github.io/lz4/). */
  LZ4 = 1,
  /** ZSTD - [Zstandard compression algorithm](https://facebook.github.io/zstd/). */
  ZSTD = 2,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_Compression_MethodFromJSON(object: any): ClickhouseConfig_Compression_Method {
  switch (object) {
    case 0:
    case "METHOD_UNSPECIFIED":
      return ClickhouseConfig_Compression_Method.METHOD_UNSPECIFIED;
    case 1:
    case "LZ4":
      return ClickhouseConfig_Compression_Method.LZ4;
    case 2:
    case "ZSTD":
      return ClickhouseConfig_Compression_Method.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_Compression_Method.UNRECOGNIZED;
  }
}

export function clickhouseConfig_Compression_MethodToJSON(object: ClickhouseConfig_Compression_Method): string {
  switch (object) {
    case ClickhouseConfig_Compression_Method.METHOD_UNSPECIFIED:
      return "METHOD_UNSPECIFIED";
    case ClickhouseConfig_Compression_Method.LZ4:
      return "LZ4";
    case ClickhouseConfig_Compression_Method.ZSTD:
      return "ZSTD";
    case ClickhouseConfig_Compression_Method.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ClickhouseConfig_ExternalDictionary {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary";
  /** Name of the external dictionary. */
  name: string;
  /**
   * Set of attributes for the external dictionary.
   * For in-depth description, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_structure/).
   */
  structure?:
    | ClickhouseConfig_ExternalDictionary_Structure
    | undefined;
  /**
   * Layout for storing the dictionary in memory.
   * For in-depth description, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_layout/).
   */
  layout?:
    | ClickhouseConfig_ExternalDictionary_Layout
    | undefined;
  /** Fixed interval between dictionary updates. */
  fixedLifetime?:
    | number
    | undefined;
  /** Range of intervals between dictionary updates for ClickHouse to choose from. */
  lifetimeRange?:
    | ClickhouseConfig_ExternalDictionary_Range
    | undefined;
  /** HTTP source for the dictionary. */
  httpSource?:
    | ClickhouseConfig_ExternalDictionary_HttpSource
    | undefined;
  /** MySQL source for the dictionary. */
  mysqlSource?:
    | ClickhouseConfig_ExternalDictionary_MysqlSource
    | undefined;
  /** ClickHouse source for the dictionary. */
  clickhouseSource?:
    | ClickhouseConfig_ExternalDictionary_ClickhouseSource
    | undefined;
  /** MongoDB source for the dictionary. */
  mongodbSource?:
    | ClickhouseConfig_ExternalDictionary_MongodbSource
    | undefined;
  /** PostgreSQL source for the dictionary. */
  postgresqlSource?: ClickhouseConfig_ExternalDictionary_PostgresqlSource | undefined;
}

export interface ClickhouseConfig_ExternalDictionary_HttpSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource";
  /** URL of the source dictionary available over HTTP. */
  url: string;
  /** The data format. Valid values are all formats supported by ClickHouse SQL dialect. */
  format: string;
}

export interface ClickhouseConfig_ExternalDictionary_MysqlSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource";
  /** Name of the MySQL database to connect to. */
  db: string;
  /** Name of the database table to use as a ClickHouse dictionary. */
  table: string;
  /** Default port to use when connecting to a replica of the dictionary source. */
  port: number;
  /** Name of the default user for replicas of the dictionary source. */
  user: string;
  /** Password of the default user for replicas of the dictionary source. */
  password: string;
  /** List of MySQL replicas of the database used as dictionary source. */
  replicas: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica[];
  /** Selection criteria for the data in the specified MySQL table. */
  where: string;
  /**
   * Query for checking the dictionary status, to pull only updated data.
   * For more details, see [ClickHouse documentation on dictionaries](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_lifetime/).
   */
  invalidateQuery: string;
}

export interface ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica";
  /** MySQL host of the replica. */
  host: string;
  /**
   * The priority of the replica that ClickHouse takes into account when connecting.
   * Replica with the highest priority should have this field set to the lowest number.
   */
  priority: number;
  /**
   * Port to use when connecting to the replica.
   * If a port is not specified for a replica, ClickHouse uses the port specified for the source.
   */
  port: number;
  /** Name of the MySQL database user. */
  user: string;
  /** Password of the MySQL database user. */
  password: string;
}

export interface ClickhouseConfig_ExternalDictionary_ClickhouseSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource";
  /** Name of the ClickHouse database. */
  db: string;
  /** Name of the table in the specified database to be used as the dictionary source. */
  table: string;
  /** ClickHouse host of the specified database. */
  host: string;
  /** Port to use when connecting to the host. */
  port: number;
  /** Name of the ClickHouse database user. */
  user: string;
  /** Password of the ClickHouse database user. */
  password: string;
  /** Selection criteria for the data in the specified ClickHouse table. */
  where: string;
}

export interface ClickhouseConfig_ExternalDictionary_MongodbSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource";
  /** Name of the MongoDB database. */
  db: string;
  /** Name of the collection in the specified database to be used as the dictionary source. */
  collection: string;
  /** MongoDB host of the specified database. */
  host: string;
  /** Port to use when connecting to the host. */
  port: number;
  /** Name of the MongoDB database user. */
  user: string;
  /** Password of the MongoDB database user. */
  password: string;
  options: string;
}

export interface ClickhouseConfig_ExternalDictionary_PostgresqlSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource";
  /** Name of the PostrgreSQL database. */
  db: string;
  /** Name of the table in the specified database to be used as the dictionary source. */
  table: string;
  /** Name of the PostrgreSQL host */
  hosts: string[];
  /** Port to use when connecting to the host. */
  port: number;
  /** Name of the PostrgreSQL database user. */
  user: string;
  /** Password of the PostrgreSQL database user. */
  password: string;
  /**
   * Query for checking the dictionary status, to pull only updated data.
   * For more details, see [ClickHouse documentation on dictionaries](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_lifetime/).
   */
  invalidateQuery: string;
  /**
   * Mode of SSL TCP/IP connection to the PostgreSQL host.
   * For more details, see [PostgreSQL documentation](https://www.postgresql.org/docs/current/libpq-ssl.html).
   */
  sslMode: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode;
}

export enum ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode {
  SSL_MODE_UNSPECIFIED = 0,
  /** DISABLE - Only try a non-SSL connection. */
  DISABLE = 1,
  /** ALLOW - First try a non-SSL connection; if that fails, try an SSL connection. */
  ALLOW = 2,
  /** PREFER - First try an SSL connection; if that fails, try a non-SSL connection. */
  PREFER = 3,
  /** VERIFY_CA - Only try an SSL connection, and verify that the server certificate is issued by a trusted certificate authority (CA). */
  VERIFY_CA = 4,
  /** VERIFY_FULL - Only try an SSL connection, verify that the server certificate is issued by a trusted CA and that the requested server host name matches that in the certificate. */
  VERIFY_FULL = 5,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(
  object: any,
): ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode {
  switch (object) {
    case 0:
    case "SSL_MODE_UNSPECIFIED":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.SSL_MODE_UNSPECIFIED;
    case 1:
    case "DISABLE":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.DISABLE;
    case 2:
    case "ALLOW":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.ALLOW;
    case 3:
    case "PREFER":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.PREFER;
    case 4:
    case "VERIFY_CA":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_CA;
    case 5:
    case "VERIFY_FULL":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.UNRECOGNIZED;
  }
}

export function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(
  object: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode,
): string {
  switch (object) {
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.SSL_MODE_UNSPECIFIED:
      return "SSL_MODE_UNSPECIFIED";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.DISABLE:
      return "DISABLE";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.ALLOW:
      return "ALLOW";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.PREFER:
      return "PREFER";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_CA:
      return "VERIFY_CA";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_FULL:
      return "VERIFY_FULL";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ClickhouseConfig_ExternalDictionary_Structure {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure";
  /** Single numeric key column for the dictionary. */
  id?:
    | ClickhouseConfig_ExternalDictionary_Structure_Id
    | undefined;
  /**
   * Composite key for the dictionary, containing of one or more key columns.
   * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_structure/#composite-key).
   */
  key?:
    | ClickhouseConfig_ExternalDictionary_Structure_Key
    | undefined;
  /**
   * Field holding the beginning of the range for dictionaries with `RANGE_HASHED` layout.
   * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_layout/#range-hashed).
   */
  rangeMin?:
    | ClickhouseConfig_ExternalDictionary_Structure_Attribute
    | undefined;
  /**
   * Field holding the end of the range for dictionaries with `RANGE_HASHED` layout.
   * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_layout/#range-hashed).
   */
  rangeMax?:
    | ClickhouseConfig_ExternalDictionary_Structure_Attribute
    | undefined;
  /**
   * Description of the fields available for database queries.
   * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_structure/#attributes).
   */
  attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}

export interface ClickhouseConfig_ExternalDictionary_Structure_Attribute {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute";
  /** Name of the column. */
  name: string;
  /** Type of the column. */
  type: string;
  /** Default value for an element without data (for example, an empty string). */
  nullValue: string;
  /** Expression, describing the attribute, if applicable. */
  expression: string;
  /**
   * Indication of hierarchy support.
   * Default value: `false`.
   */
  hierarchical: boolean;
  /**
   * Indication of injective mapping "id -> attribute".
   * Default value: `false`.
   */
  injective: boolean;
}

/** Numeric key. */
export interface ClickhouseConfig_ExternalDictionary_Structure_Id {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id";
  /** Name of the numeric key. */
  name: string;
}

/** Complex key. */
export interface ClickhouseConfig_ExternalDictionary_Structure_Key {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key";
  /** Attributes of a complex key. */
  attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}

/** Layout determining how to store the dictionary in memory. */
export interface ClickhouseConfig_ExternalDictionary_Layout {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout";
  /** Layout type for an external dictionary. */
  type: ClickhouseConfig_ExternalDictionary_Layout_Type;
  /**
   * Number of cells in the cache. Rounded up to a power of two.
   * Applicable only for CACHE and COMPLEX_KEY_CACHE layout types.
   */
  sizeInCells: number;
}

export enum ClickhouseConfig_ExternalDictionary_Layout_Type {
  TYPE_UNSPECIFIED = 0,
  /**
   * FLAT - The entire dictionary is stored in memory in the form of flat arrays.
   * Available for all dictionary sources.
   */
  FLAT = 1,
  /**
   * HASHED - The entire dictionary is stored in memory in the form of a hash table.
   * Available for all dictionary sources.
   */
  HASHED = 2,
  /**
   * COMPLEX_KEY_HASHED - Similar to HASHED, to be used with composite keys.
   * Available for all dictionary sources.
   */
  COMPLEX_KEY_HASHED = 3,
  /**
   * RANGE_HASHED - The entire dictionary is stored in memory in the form of a hash table,
   * with an ordered array of ranges and their corresponding values.
   * Available for all dictionary sources.
   */
  RANGE_HASHED = 4,
  /**
   * CACHE - The dictionary is stored in a cache with a set number of cells.
   * Available for MySQL, ClickHouse and HTTP dictionary sources.
   */
  CACHE = 5,
  /**
   * COMPLEX_KEY_CACHE - Similar to CACHE, to be used with composite keys.
   * Available for MySQL, ClickHouse and HTTP dictionary sources.
   */
  COMPLEX_KEY_CACHE = 6,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(
  object: any,
): ClickhouseConfig_ExternalDictionary_Layout_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.TYPE_UNSPECIFIED;
    case 1:
    case "FLAT":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.FLAT;
    case 2:
    case "HASHED":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.HASHED;
    case 3:
    case "COMPLEX_KEY_HASHED":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_HASHED;
    case 4:
    case "RANGE_HASHED":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.RANGE_HASHED;
    case 5:
    case "CACHE":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.CACHE;
    case 6:
    case "COMPLEX_KEY_CACHE":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_CACHE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_ExternalDictionary_Layout_Type.UNRECOGNIZED;
  }
}

export function clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(
  object: ClickhouseConfig_ExternalDictionary_Layout_Type,
): string {
  switch (object) {
    case ClickhouseConfig_ExternalDictionary_Layout_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.FLAT:
      return "FLAT";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.HASHED:
      return "HASHED";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_HASHED:
      return "COMPLEX_KEY_HASHED";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.RANGE_HASHED:
      return "RANGE_HASHED";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.CACHE:
      return "CACHE";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_CACHE:
      return "COMPLEX_KEY_CACHE";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ClickhouseConfig_ExternalDictionary_Range {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range";
  /** Minimum dictionary lifetime. */
  min: number;
  /** Maximum dictionary lifetime. */
  max: number;
}

/** Rollup settings for the GraphiteMergeTree table engine. */
export interface ClickhouseConfig_GraphiteRollup {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup";
  /** Name for the specified combination of settings for Graphite rollup. */
  name: string;
  /** Pattern to use for the rollup. */
  patterns: ClickhouseConfig_GraphiteRollup_Pattern[];
}

export interface ClickhouseConfig_GraphiteRollup_Pattern {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern";
  /** Pattern for metric names. */
  regexp: string;
  /** Name of the aggregating function to apply to data of the age specified in [retention]. */
  function: string;
  /** Age of data to use for thinning. */
  retention: ClickhouseConfig_GraphiteRollup_Pattern_Retention[];
}

export interface ClickhouseConfig_GraphiteRollup_Pattern_Retention {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention";
  /** Minimum age of the data in seconds. */
  age: number;
  /** Precision of determining the age of the data, in seconds. */
  precision: number;
}

export interface ClickhouseConfigSet {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet";
  /**
   * Effective settings for a ClickHouse cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | ClickhouseConfig
    | undefined;
  /** User-defined settings for a ClickHouse cluster. */
  userConfig?:
    | ClickhouseConfig
    | undefined;
  /** Default configuration for a ClickHouse cluster. */
  defaultConfig?: ClickhouseConfig | undefined;
}

function createBaseClickhouseConfig(): ClickhouseConfig {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig",
    logLevel: 0,
    mergeTree: undefined,
    compression: [],
    dictionaries: [],
    graphiteRollup: [],
    kafka: undefined,
    kafkaTopics: [],
    rabbitmq: undefined,
    maxConnections: undefined,
    maxConcurrentQueries: undefined,
    keepAliveTimeout: undefined,
    uncompressedCacheSize: undefined,
    markCacheSize: undefined,
    maxTableSizeToDrop: undefined,
    maxPartitionSizeToDrop: undefined,
    builtinDictionariesReloadInterval: undefined,
    timezone: "",
    geobaseUri: "",
    queryLogRetentionSize: undefined,
    queryLogRetentionTime: undefined,
    queryThreadLogEnabled: undefined,
    queryThreadLogRetentionSize: undefined,
    queryThreadLogRetentionTime: undefined,
    partLogRetentionSize: undefined,
    partLogRetentionTime: undefined,
    metricLogEnabled: undefined,
    metricLogRetentionSize: undefined,
    metricLogRetentionTime: undefined,
    traceLogEnabled: undefined,
    traceLogRetentionSize: undefined,
    traceLogRetentionTime: undefined,
    textLogEnabled: undefined,
    textLogRetentionSize: undefined,
    textLogRetentionTime: undefined,
    textLogLevel: 0,
    opentelemetrySpanLogEnabled: undefined,
    backgroundPoolSize: undefined,
    backgroundSchedulePoolSize: undefined,
    backgroundFetchesPoolSize: undefined,
    backgroundMovePoolSize: undefined,
    backgroundDistributedSchedulePoolSize: undefined,
    backgroundBufferFlushSchedulePoolSize: undefined,
    backgroundMessageBrokerSchedulePoolSize: undefined,
    defaultDatabase: undefined,
    totalMemoryProfilerStep: undefined,
    totalMemoryTrackerSampleProbability: undefined,
    backgroundCommonPoolSize: undefined,
    backgroundMergesMutationsConcurrencyRatio: undefined,
    queryViewsLogEnabled: undefined,
    queryViewsLogRetentionSize: undefined,
    queryViewsLogRetentionTime: undefined,
    asynchronousMetricLogEnabled: undefined,
    asynchronousMetricLogRetentionSize: undefined,
    asynchronousMetricLogRetentionTime: undefined,
    opentelemetrySpanLogRetentionSize: undefined,
    opentelemetrySpanLogRetentionTime: undefined,
    sessionLogEnabled: undefined,
    sessionLogRetentionSize: undefined,
    sessionLogRetentionTime: undefined,
    zookeeperLogEnabled: undefined,
    zookeeperLogRetentionSize: undefined,
    zookeeperLogRetentionTime: undefined,
    asynchronousInsertLogEnabled: undefined,
    asynchronousInsertLogRetentionSize: undefined,
    asynchronousInsertLogRetentionTime: undefined,
    geobaseEnabled: undefined,
  };
}

export const ClickhouseConfig = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig" as const,

  encode(message: ClickhouseConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logLevel !== 0) {
      writer.uint32(8).int32(message.logLevel);
    }
    if (message.mergeTree !== undefined) {
      ClickhouseConfig_MergeTree.encode(message.mergeTree, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.compression) {
      ClickhouseConfig_Compression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.dictionaries) {
      ClickhouseConfig_ExternalDictionary.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.graphiteRollup) {
      ClickhouseConfig_GraphiteRollup.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.kafka !== undefined) {
      ClickhouseConfig_Kafka.encode(message.kafka, writer.uint32(282).fork()).ldelim();
    }
    for (const v of message.kafkaTopics) {
      ClickhouseConfig_KafkaTopic.encode(v!, writer.uint32(290).fork()).ldelim();
    }
    if (message.rabbitmq !== undefined) {
      ClickhouseConfig_Rabbitmq.encode(message.rabbitmq, writer.uint32(298).fork()).ldelim();
    }
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.maxConcurrentQueries !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConcurrentQueries! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.keepAliveTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.keepAliveTimeout! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.uncompressedCacheSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.uncompressedCacheSize! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.markCacheSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.markCacheSize! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.maxTableSizeToDrop !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxTableSizeToDrop! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.maxPartitionSizeToDrop !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPartitionSizeToDrop! },
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.builtinDictionariesReloadInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.builtinDictionariesReloadInterval! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.timezone !== "") {
      writer.uint32(114).string(message.timezone);
    }
    if (message.geobaseUri !== "") {
      writer.uint32(122).string(message.geobaseUri);
    }
    if (message.queryLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.queryLogRetentionSize! },
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.queryLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.queryLogRetentionTime! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.queryThreadLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.queryThreadLogEnabled! },
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.queryThreadLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.queryThreadLogRetentionSize! },
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.queryThreadLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.queryThreadLogRetentionTime! },
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.partLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.partLogRetentionSize! },
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.partLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.partLogRetentionTime! },
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.metricLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.metricLogEnabled! },
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.metricLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.metricLogRetentionSize! },
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.metricLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.metricLogRetentionTime! },
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.traceLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.traceLogEnabled! },
        writer.uint32(210).fork(),
      ).ldelim();
    }
    if (message.traceLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.traceLogRetentionSize! },
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.traceLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.traceLogRetentionTime! },
        writer.uint32(226).fork(),
      ).ldelim();
    }
    if (message.textLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.textLogEnabled! },
        writer.uint32(234).fork(),
      ).ldelim();
    }
    if (message.textLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.textLogRetentionSize! },
        writer.uint32(242).fork(),
      ).ldelim();
    }
    if (message.textLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.textLogRetentionTime! },
        writer.uint32(250).fork(),
      ).ldelim();
    }
    if (message.textLogLevel !== 0) {
      writer.uint32(256).int32(message.textLogLevel);
    }
    if (message.opentelemetrySpanLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.opentelemetrySpanLogEnabled! },
        writer.uint32(338).fork(),
      ).ldelim();
    }
    if (message.backgroundPoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backgroundPoolSize! },
        writer.uint32(266).fork(),
      ).ldelim();
    }
    if (message.backgroundSchedulePoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backgroundSchedulePoolSize! },
        writer.uint32(274).fork(),
      ).ldelim();
    }
    if (message.backgroundFetchesPoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backgroundFetchesPoolSize! },
        writer.uint32(306).fork(),
      ).ldelim();
    }
    if (message.backgroundMovePoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backgroundMovePoolSize! },
        writer.uint32(314).fork(),
      ).ldelim();
    }
    if (message.backgroundDistributedSchedulePoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backgroundDistributedSchedulePoolSize! },
        writer.uint32(322).fork(),
      ).ldelim();
    }
    if (message.backgroundBufferFlushSchedulePoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backgroundBufferFlushSchedulePoolSize! },
        writer.uint32(330).fork(),
      ).ldelim();
    }
    if (message.backgroundMessageBrokerSchedulePoolSize !== undefined) {
      Int64Value.encode({
        $type: "google.protobuf.Int64Value",
        value: message.backgroundMessageBrokerSchedulePoolSize!,
      }, writer.uint32(370).fork()).ldelim();
    }
    if (message.defaultDatabase !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.defaultDatabase! },
        writer.uint32(346).fork(),
      ).ldelim();
    }
    if (message.totalMemoryProfilerStep !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.totalMemoryProfilerStep! },
        writer.uint32(354).fork(),
      ).ldelim();
    }
    if (message.totalMemoryTrackerSampleProbability !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.totalMemoryTrackerSampleProbability! },
        writer.uint32(362).fork(),
      ).ldelim();
    }
    if (message.backgroundCommonPoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backgroundCommonPoolSize! },
        writer.uint32(378).fork(),
      ).ldelim();
    }
    if (message.backgroundMergesMutationsConcurrencyRatio !== undefined) {
      Int64Value.encode({
        $type: "google.protobuf.Int64Value",
        value: message.backgroundMergesMutationsConcurrencyRatio!,
      }, writer.uint32(386).fork()).ldelim();
    }
    if (message.queryViewsLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.queryViewsLogEnabled! },
        writer.uint32(394).fork(),
      ).ldelim();
    }
    if (message.queryViewsLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.queryViewsLogRetentionSize! },
        writer.uint32(402).fork(),
      ).ldelim();
    }
    if (message.queryViewsLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.queryViewsLogRetentionTime! },
        writer.uint32(410).fork(),
      ).ldelim();
    }
    if (message.asynchronousMetricLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.asynchronousMetricLogEnabled! },
        writer.uint32(418).fork(),
      ).ldelim();
    }
    if (message.asynchronousMetricLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.asynchronousMetricLogRetentionSize! },
        writer.uint32(426).fork(),
      ).ldelim();
    }
    if (message.asynchronousMetricLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.asynchronousMetricLogRetentionTime! },
        writer.uint32(434).fork(),
      ).ldelim();
    }
    if (message.opentelemetrySpanLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.opentelemetrySpanLogRetentionSize! },
        writer.uint32(442).fork(),
      ).ldelim();
    }
    if (message.opentelemetrySpanLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.opentelemetrySpanLogRetentionTime! },
        writer.uint32(450).fork(),
      ).ldelim();
    }
    if (message.sessionLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.sessionLogEnabled! },
        writer.uint32(458).fork(),
      ).ldelim();
    }
    if (message.sessionLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.sessionLogRetentionSize! },
        writer.uint32(466).fork(),
      ).ldelim();
    }
    if (message.sessionLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.sessionLogRetentionTime! },
        writer.uint32(474).fork(),
      ).ldelim();
    }
    if (message.zookeeperLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.zookeeperLogEnabled! },
        writer.uint32(482).fork(),
      ).ldelim();
    }
    if (message.zookeeperLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.zookeeperLogRetentionSize! },
        writer.uint32(490).fork(),
      ).ldelim();
    }
    if (message.zookeeperLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.zookeeperLogRetentionTime! },
        writer.uint32(498).fork(),
      ).ldelim();
    }
    if (message.asynchronousInsertLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.asynchronousInsertLogEnabled! },
        writer.uint32(506).fork(),
      ).ldelim();
    }
    if (message.asynchronousInsertLogRetentionSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.asynchronousInsertLogRetentionSize! },
        writer.uint32(514).fork(),
      ).ldelim();
    }
    if (message.asynchronousInsertLogRetentionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.asynchronousInsertLogRetentionTime! },
        writer.uint32(522).fork(),
      ).ldelim();
    }
    if (message.geobaseEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.geobaseEnabled! },
        writer.uint32(530).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.logLevel = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mergeTree = ClickhouseConfig_MergeTree.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.compression.push(ClickhouseConfig_Compression.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dictionaries.push(ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.graphiteRollup.push(ClickhouseConfig_GraphiteRollup.decode(reader, reader.uint32()));
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.kafka = ClickhouseConfig_Kafka.decode(reader, reader.uint32());
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.kafkaTopics.push(ClickhouseConfig_KafkaTopic.decode(reader, reader.uint32()));
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.rabbitmq = ClickhouseConfig_Rabbitmq.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.maxConcurrentQueries = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.keepAliveTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.uncompressedCacheSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.markCacheSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.maxTableSizeToDrop = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.maxPartitionSizeToDrop = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.builtinDictionariesReloadInterval = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.timezone = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.geobaseUri = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.queryLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.queryLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.queryThreadLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.queryThreadLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.queryThreadLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.partLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.partLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.metricLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.metricLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.metricLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.traceLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.traceLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.traceLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.textLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.textLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.textLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.textLogLevel = reader.int32() as any;
          continue;
        case 42:
          if (tag !== 338) {
            break;
          }

          message.opentelemetrySpanLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.backgroundPoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.backgroundSchedulePoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 38:
          if (tag !== 306) {
            break;
          }

          message.backgroundFetchesPoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.backgroundMovePoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.backgroundDistributedSchedulePoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.backgroundBufferFlushSchedulePoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.backgroundMessageBrokerSchedulePoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 43:
          if (tag !== 346) {
            break;
          }

          message.defaultDatabase = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.totalMemoryProfilerStep = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.totalMemoryTrackerSampleProbability = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 47:
          if (tag !== 378) {
            break;
          }

          message.backgroundCommonPoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          message.backgroundMergesMutationsConcurrencyRatio = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 49:
          if (tag !== 394) {
            break;
          }

          message.queryViewsLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.queryViewsLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 51:
          if (tag !== 410) {
            break;
          }

          message.queryViewsLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 52:
          if (tag !== 418) {
            break;
          }

          message.asynchronousMetricLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 53:
          if (tag !== 426) {
            break;
          }

          message.asynchronousMetricLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 54:
          if (tag !== 434) {
            break;
          }

          message.asynchronousMetricLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 55:
          if (tag !== 442) {
            break;
          }

          message.opentelemetrySpanLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.opentelemetrySpanLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.sessionLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 58:
          if (tag !== 466) {
            break;
          }

          message.sessionLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 59:
          if (tag !== 474) {
            break;
          }

          message.sessionLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 60:
          if (tag !== 482) {
            break;
          }

          message.zookeeperLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          message.zookeeperLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 62:
          if (tag !== 498) {
            break;
          }

          message.zookeeperLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 63:
          if (tag !== 506) {
            break;
          }

          message.asynchronousInsertLogEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 64:
          if (tag !== 514) {
            break;
          }

          message.asynchronousInsertLogRetentionSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 65:
          if (tag !== 522) {
            break;
          }

          message.asynchronousInsertLogRetentionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 66:
          if (tag !== 530) {
            break;
          }

          message.geobaseEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig {
    return {
      $type: ClickhouseConfig.$type,
      logLevel: isSet(object.logLevel) ? clickhouseConfig_LogLevelFromJSON(object.logLevel) : 0,
      mergeTree: isSet(object.mergeTree) ? ClickhouseConfig_MergeTree.fromJSON(object.mergeTree) : undefined,
      compression: globalThis.Array.isArray(object?.compression)
        ? object.compression.map((e: any) => ClickhouseConfig_Compression.fromJSON(e))
        : [],
      dictionaries: globalThis.Array.isArray(object?.dictionaries)
        ? object.dictionaries.map((e: any) => ClickhouseConfig_ExternalDictionary.fromJSON(e))
        : [],
      graphiteRollup: globalThis.Array.isArray(object?.graphiteRollup)
        ? object.graphiteRollup.map((e: any) => ClickhouseConfig_GraphiteRollup.fromJSON(e))
        : [],
      kafka: isSet(object.kafka) ? ClickhouseConfig_Kafka.fromJSON(object.kafka) : undefined,
      kafkaTopics: globalThis.Array.isArray(object?.kafkaTopics)
        ? object.kafkaTopics.map((e: any) => ClickhouseConfig_KafkaTopic.fromJSON(e))
        : [],
      rabbitmq: isSet(object.rabbitmq) ? ClickhouseConfig_Rabbitmq.fromJSON(object.rabbitmq) : undefined,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      maxConcurrentQueries: isSet(object.maxConcurrentQueries) ? Number(object.maxConcurrentQueries) : undefined,
      keepAliveTimeout: isSet(object.keepAliveTimeout) ? Number(object.keepAliveTimeout) : undefined,
      uncompressedCacheSize: isSet(object.uncompressedCacheSize) ? Number(object.uncompressedCacheSize) : undefined,
      markCacheSize: isSet(object.markCacheSize) ? Number(object.markCacheSize) : undefined,
      maxTableSizeToDrop: isSet(object.maxTableSizeToDrop) ? Number(object.maxTableSizeToDrop) : undefined,
      maxPartitionSizeToDrop: isSet(object.maxPartitionSizeToDrop) ? Number(object.maxPartitionSizeToDrop) : undefined,
      builtinDictionariesReloadInterval: isSet(object.builtinDictionariesReloadInterval)
        ? Number(object.builtinDictionariesReloadInterval)
        : undefined,
      timezone: isSet(object.timezone) ? globalThis.String(object.timezone) : "",
      geobaseUri: isSet(object.geobaseUri) ? globalThis.String(object.geobaseUri) : "",
      queryLogRetentionSize: isSet(object.queryLogRetentionSize) ? Number(object.queryLogRetentionSize) : undefined,
      queryLogRetentionTime: isSet(object.queryLogRetentionTime) ? Number(object.queryLogRetentionTime) : undefined,
      queryThreadLogEnabled: isSet(object.queryThreadLogEnabled) ? Boolean(object.queryThreadLogEnabled) : undefined,
      queryThreadLogRetentionSize: isSet(object.queryThreadLogRetentionSize)
        ? Number(object.queryThreadLogRetentionSize)
        : undefined,
      queryThreadLogRetentionTime: isSet(object.queryThreadLogRetentionTime)
        ? Number(object.queryThreadLogRetentionTime)
        : undefined,
      partLogRetentionSize: isSet(object.partLogRetentionSize) ? Number(object.partLogRetentionSize) : undefined,
      partLogRetentionTime: isSet(object.partLogRetentionTime) ? Number(object.partLogRetentionTime) : undefined,
      metricLogEnabled: isSet(object.metricLogEnabled) ? Boolean(object.metricLogEnabled) : undefined,
      metricLogRetentionSize: isSet(object.metricLogRetentionSize) ? Number(object.metricLogRetentionSize) : undefined,
      metricLogRetentionTime: isSet(object.metricLogRetentionTime) ? Number(object.metricLogRetentionTime) : undefined,
      traceLogEnabled: isSet(object.traceLogEnabled) ? Boolean(object.traceLogEnabled) : undefined,
      traceLogRetentionSize: isSet(object.traceLogRetentionSize) ? Number(object.traceLogRetentionSize) : undefined,
      traceLogRetentionTime: isSet(object.traceLogRetentionTime) ? Number(object.traceLogRetentionTime) : undefined,
      textLogEnabled: isSet(object.textLogEnabled) ? Boolean(object.textLogEnabled) : undefined,
      textLogRetentionSize: isSet(object.textLogRetentionSize) ? Number(object.textLogRetentionSize) : undefined,
      textLogRetentionTime: isSet(object.textLogRetentionTime) ? Number(object.textLogRetentionTime) : undefined,
      textLogLevel: isSet(object.textLogLevel) ? clickhouseConfig_LogLevelFromJSON(object.textLogLevel) : 0,
      opentelemetrySpanLogEnabled: isSet(object.opentelemetrySpanLogEnabled)
        ? Boolean(object.opentelemetrySpanLogEnabled)
        : undefined,
      backgroundPoolSize: isSet(object.backgroundPoolSize) ? Number(object.backgroundPoolSize) : undefined,
      backgroundSchedulePoolSize: isSet(object.backgroundSchedulePoolSize)
        ? Number(object.backgroundSchedulePoolSize)
        : undefined,
      backgroundFetchesPoolSize: isSet(object.backgroundFetchesPoolSize)
        ? Number(object.backgroundFetchesPoolSize)
        : undefined,
      backgroundMovePoolSize: isSet(object.backgroundMovePoolSize) ? Number(object.backgroundMovePoolSize) : undefined,
      backgroundDistributedSchedulePoolSize: isSet(object.backgroundDistributedSchedulePoolSize)
        ? Number(object.backgroundDistributedSchedulePoolSize)
        : undefined,
      backgroundBufferFlushSchedulePoolSize: isSet(object.backgroundBufferFlushSchedulePoolSize)
        ? Number(object.backgroundBufferFlushSchedulePoolSize)
        : undefined,
      backgroundMessageBrokerSchedulePoolSize: isSet(object.backgroundMessageBrokerSchedulePoolSize)
        ? Number(object.backgroundMessageBrokerSchedulePoolSize)
        : undefined,
      defaultDatabase: isSet(object.defaultDatabase) ? String(object.defaultDatabase) : undefined,
      totalMemoryProfilerStep: isSet(object.totalMemoryProfilerStep)
        ? Number(object.totalMemoryProfilerStep)
        : undefined,
      totalMemoryTrackerSampleProbability: isSet(object.totalMemoryTrackerSampleProbability)
        ? Number(object.totalMemoryTrackerSampleProbability)
        : undefined,
      backgroundCommonPoolSize: isSet(object.backgroundCommonPoolSize)
        ? Number(object.backgroundCommonPoolSize)
        : undefined,
      backgroundMergesMutationsConcurrencyRatio: isSet(object.backgroundMergesMutationsConcurrencyRatio)
        ? Number(object.backgroundMergesMutationsConcurrencyRatio)
        : undefined,
      queryViewsLogEnabled: isSet(object.queryViewsLogEnabled) ? Boolean(object.queryViewsLogEnabled) : undefined,
      queryViewsLogRetentionSize: isSet(object.queryViewsLogRetentionSize)
        ? Number(object.queryViewsLogRetentionSize)
        : undefined,
      queryViewsLogRetentionTime: isSet(object.queryViewsLogRetentionTime)
        ? Number(object.queryViewsLogRetentionTime)
        : undefined,
      asynchronousMetricLogEnabled: isSet(object.asynchronousMetricLogEnabled)
        ? Boolean(object.asynchronousMetricLogEnabled)
        : undefined,
      asynchronousMetricLogRetentionSize: isSet(object.asynchronousMetricLogRetentionSize)
        ? Number(object.asynchronousMetricLogRetentionSize)
        : undefined,
      asynchronousMetricLogRetentionTime: isSet(object.asynchronousMetricLogRetentionTime)
        ? Number(object.asynchronousMetricLogRetentionTime)
        : undefined,
      opentelemetrySpanLogRetentionSize: isSet(object.opentelemetrySpanLogRetentionSize)
        ? Number(object.opentelemetrySpanLogRetentionSize)
        : undefined,
      opentelemetrySpanLogRetentionTime: isSet(object.opentelemetrySpanLogRetentionTime)
        ? Number(object.opentelemetrySpanLogRetentionTime)
        : undefined,
      sessionLogEnabled: isSet(object.sessionLogEnabled) ? Boolean(object.sessionLogEnabled) : undefined,
      sessionLogRetentionSize: isSet(object.sessionLogRetentionSize)
        ? Number(object.sessionLogRetentionSize)
        : undefined,
      sessionLogRetentionTime: isSet(object.sessionLogRetentionTime)
        ? Number(object.sessionLogRetentionTime)
        : undefined,
      zookeeperLogEnabled: isSet(object.zookeeperLogEnabled) ? Boolean(object.zookeeperLogEnabled) : undefined,
      zookeeperLogRetentionSize: isSet(object.zookeeperLogRetentionSize)
        ? Number(object.zookeeperLogRetentionSize)
        : undefined,
      zookeeperLogRetentionTime: isSet(object.zookeeperLogRetentionTime)
        ? Number(object.zookeeperLogRetentionTime)
        : undefined,
      asynchronousInsertLogEnabled: isSet(object.asynchronousInsertLogEnabled)
        ? Boolean(object.asynchronousInsertLogEnabled)
        : undefined,
      asynchronousInsertLogRetentionSize: isSet(object.asynchronousInsertLogRetentionSize)
        ? Number(object.asynchronousInsertLogRetentionSize)
        : undefined,
      asynchronousInsertLogRetentionTime: isSet(object.asynchronousInsertLogRetentionTime)
        ? Number(object.asynchronousInsertLogRetentionTime)
        : undefined,
      geobaseEnabled: isSet(object.geobaseEnabled) ? Boolean(object.geobaseEnabled) : undefined,
    };
  },

  toJSON(message: ClickhouseConfig): unknown {
    const obj: any = {};
    if (message.logLevel !== 0) {
      obj.logLevel = clickhouseConfig_LogLevelToJSON(message.logLevel);
    }
    if (message.mergeTree !== undefined) {
      obj.mergeTree = ClickhouseConfig_MergeTree.toJSON(message.mergeTree);
    }
    if (message.compression?.length) {
      obj.compression = message.compression.map((e) => ClickhouseConfig_Compression.toJSON(e));
    }
    if (message.dictionaries?.length) {
      obj.dictionaries = message.dictionaries.map((e) => ClickhouseConfig_ExternalDictionary.toJSON(e));
    }
    if (message.graphiteRollup?.length) {
      obj.graphiteRollup = message.graphiteRollup.map((e) => ClickhouseConfig_GraphiteRollup.toJSON(e));
    }
    if (message.kafka !== undefined) {
      obj.kafka = ClickhouseConfig_Kafka.toJSON(message.kafka);
    }
    if (message.kafkaTopics?.length) {
      obj.kafkaTopics = message.kafkaTopics.map((e) => ClickhouseConfig_KafkaTopic.toJSON(e));
    }
    if (message.rabbitmq !== undefined) {
      obj.rabbitmq = ClickhouseConfig_Rabbitmq.toJSON(message.rabbitmq);
    }
    if (message.maxConnections !== undefined) {
      obj.maxConnections = message.maxConnections;
    }
    if (message.maxConcurrentQueries !== undefined) {
      obj.maxConcurrentQueries = message.maxConcurrentQueries;
    }
    if (message.keepAliveTimeout !== undefined) {
      obj.keepAliveTimeout = message.keepAliveTimeout;
    }
    if (message.uncompressedCacheSize !== undefined) {
      obj.uncompressedCacheSize = message.uncompressedCacheSize;
    }
    if (message.markCacheSize !== undefined) {
      obj.markCacheSize = message.markCacheSize;
    }
    if (message.maxTableSizeToDrop !== undefined) {
      obj.maxTableSizeToDrop = message.maxTableSizeToDrop;
    }
    if (message.maxPartitionSizeToDrop !== undefined) {
      obj.maxPartitionSizeToDrop = message.maxPartitionSizeToDrop;
    }
    if (message.builtinDictionariesReloadInterval !== undefined) {
      obj.builtinDictionariesReloadInterval = message.builtinDictionariesReloadInterval;
    }
    if (message.timezone !== "") {
      obj.timezone = message.timezone;
    }
    if (message.geobaseUri !== "") {
      obj.geobaseUri = message.geobaseUri;
    }
    if (message.queryLogRetentionSize !== undefined) {
      obj.queryLogRetentionSize = message.queryLogRetentionSize;
    }
    if (message.queryLogRetentionTime !== undefined) {
      obj.queryLogRetentionTime = message.queryLogRetentionTime;
    }
    if (message.queryThreadLogEnabled !== undefined) {
      obj.queryThreadLogEnabled = message.queryThreadLogEnabled;
    }
    if (message.queryThreadLogRetentionSize !== undefined) {
      obj.queryThreadLogRetentionSize = message.queryThreadLogRetentionSize;
    }
    if (message.queryThreadLogRetentionTime !== undefined) {
      obj.queryThreadLogRetentionTime = message.queryThreadLogRetentionTime;
    }
    if (message.partLogRetentionSize !== undefined) {
      obj.partLogRetentionSize = message.partLogRetentionSize;
    }
    if (message.partLogRetentionTime !== undefined) {
      obj.partLogRetentionTime = message.partLogRetentionTime;
    }
    if (message.metricLogEnabled !== undefined) {
      obj.metricLogEnabled = message.metricLogEnabled;
    }
    if (message.metricLogRetentionSize !== undefined) {
      obj.metricLogRetentionSize = message.metricLogRetentionSize;
    }
    if (message.metricLogRetentionTime !== undefined) {
      obj.metricLogRetentionTime = message.metricLogRetentionTime;
    }
    if (message.traceLogEnabled !== undefined) {
      obj.traceLogEnabled = message.traceLogEnabled;
    }
    if (message.traceLogRetentionSize !== undefined) {
      obj.traceLogRetentionSize = message.traceLogRetentionSize;
    }
    if (message.traceLogRetentionTime !== undefined) {
      obj.traceLogRetentionTime = message.traceLogRetentionTime;
    }
    if (message.textLogEnabled !== undefined) {
      obj.textLogEnabled = message.textLogEnabled;
    }
    if (message.textLogRetentionSize !== undefined) {
      obj.textLogRetentionSize = message.textLogRetentionSize;
    }
    if (message.textLogRetentionTime !== undefined) {
      obj.textLogRetentionTime = message.textLogRetentionTime;
    }
    if (message.textLogLevel !== 0) {
      obj.textLogLevel = clickhouseConfig_LogLevelToJSON(message.textLogLevel);
    }
    if (message.opentelemetrySpanLogEnabled !== undefined) {
      obj.opentelemetrySpanLogEnabled = message.opentelemetrySpanLogEnabled;
    }
    if (message.backgroundPoolSize !== undefined) {
      obj.backgroundPoolSize = message.backgroundPoolSize;
    }
    if (message.backgroundSchedulePoolSize !== undefined) {
      obj.backgroundSchedulePoolSize = message.backgroundSchedulePoolSize;
    }
    if (message.backgroundFetchesPoolSize !== undefined) {
      obj.backgroundFetchesPoolSize = message.backgroundFetchesPoolSize;
    }
    if (message.backgroundMovePoolSize !== undefined) {
      obj.backgroundMovePoolSize = message.backgroundMovePoolSize;
    }
    if (message.backgroundDistributedSchedulePoolSize !== undefined) {
      obj.backgroundDistributedSchedulePoolSize = message.backgroundDistributedSchedulePoolSize;
    }
    if (message.backgroundBufferFlushSchedulePoolSize !== undefined) {
      obj.backgroundBufferFlushSchedulePoolSize = message.backgroundBufferFlushSchedulePoolSize;
    }
    if (message.backgroundMessageBrokerSchedulePoolSize !== undefined) {
      obj.backgroundMessageBrokerSchedulePoolSize = message.backgroundMessageBrokerSchedulePoolSize;
    }
    if (message.defaultDatabase !== undefined) {
      obj.defaultDatabase = message.defaultDatabase;
    }
    if (message.totalMemoryProfilerStep !== undefined) {
      obj.totalMemoryProfilerStep = message.totalMemoryProfilerStep;
    }
    if (message.totalMemoryTrackerSampleProbability !== undefined) {
      obj.totalMemoryTrackerSampleProbability = message.totalMemoryTrackerSampleProbability;
    }
    if (message.backgroundCommonPoolSize !== undefined) {
      obj.backgroundCommonPoolSize = message.backgroundCommonPoolSize;
    }
    if (message.backgroundMergesMutationsConcurrencyRatio !== undefined) {
      obj.backgroundMergesMutationsConcurrencyRatio = message.backgroundMergesMutationsConcurrencyRatio;
    }
    if (message.queryViewsLogEnabled !== undefined) {
      obj.queryViewsLogEnabled = message.queryViewsLogEnabled;
    }
    if (message.queryViewsLogRetentionSize !== undefined) {
      obj.queryViewsLogRetentionSize = message.queryViewsLogRetentionSize;
    }
    if (message.queryViewsLogRetentionTime !== undefined) {
      obj.queryViewsLogRetentionTime = message.queryViewsLogRetentionTime;
    }
    if (message.asynchronousMetricLogEnabled !== undefined) {
      obj.asynchronousMetricLogEnabled = message.asynchronousMetricLogEnabled;
    }
    if (message.asynchronousMetricLogRetentionSize !== undefined) {
      obj.asynchronousMetricLogRetentionSize = message.asynchronousMetricLogRetentionSize;
    }
    if (message.asynchronousMetricLogRetentionTime !== undefined) {
      obj.asynchronousMetricLogRetentionTime = message.asynchronousMetricLogRetentionTime;
    }
    if (message.opentelemetrySpanLogRetentionSize !== undefined) {
      obj.opentelemetrySpanLogRetentionSize = message.opentelemetrySpanLogRetentionSize;
    }
    if (message.opentelemetrySpanLogRetentionTime !== undefined) {
      obj.opentelemetrySpanLogRetentionTime = message.opentelemetrySpanLogRetentionTime;
    }
    if (message.sessionLogEnabled !== undefined) {
      obj.sessionLogEnabled = message.sessionLogEnabled;
    }
    if (message.sessionLogRetentionSize !== undefined) {
      obj.sessionLogRetentionSize = message.sessionLogRetentionSize;
    }
    if (message.sessionLogRetentionTime !== undefined) {
      obj.sessionLogRetentionTime = message.sessionLogRetentionTime;
    }
    if (message.zookeeperLogEnabled !== undefined) {
      obj.zookeeperLogEnabled = message.zookeeperLogEnabled;
    }
    if (message.zookeeperLogRetentionSize !== undefined) {
      obj.zookeeperLogRetentionSize = message.zookeeperLogRetentionSize;
    }
    if (message.zookeeperLogRetentionTime !== undefined) {
      obj.zookeeperLogRetentionTime = message.zookeeperLogRetentionTime;
    }
    if (message.asynchronousInsertLogEnabled !== undefined) {
      obj.asynchronousInsertLogEnabled = message.asynchronousInsertLogEnabled;
    }
    if (message.asynchronousInsertLogRetentionSize !== undefined) {
      obj.asynchronousInsertLogRetentionSize = message.asynchronousInsertLogRetentionSize;
    }
    if (message.asynchronousInsertLogRetentionTime !== undefined) {
      obj.asynchronousInsertLogRetentionTime = message.asynchronousInsertLogRetentionTime;
    }
    if (message.geobaseEnabled !== undefined) {
      obj.geobaseEnabled = message.geobaseEnabled;
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig>): ClickhouseConfig {
    return ClickhouseConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfig>): ClickhouseConfig {
    const message = createBaseClickhouseConfig();
    message.logLevel = object.logLevel ?? 0;
    message.mergeTree = (object.mergeTree !== undefined && object.mergeTree !== null)
      ? ClickhouseConfig_MergeTree.fromPartial(object.mergeTree)
      : undefined;
    message.compression = object.compression?.map((e) => ClickhouseConfig_Compression.fromPartial(e)) || [];
    message.dictionaries = object.dictionaries?.map((e) => ClickhouseConfig_ExternalDictionary.fromPartial(e)) || [];
    message.graphiteRollup = object.graphiteRollup?.map((e) => ClickhouseConfig_GraphiteRollup.fromPartial(e)) || [];
    message.kafka = (object.kafka !== undefined && object.kafka !== null)
      ? ClickhouseConfig_Kafka.fromPartial(object.kafka)
      : undefined;
    message.kafkaTopics = object.kafkaTopics?.map((e) => ClickhouseConfig_KafkaTopic.fromPartial(e)) || [];
    message.rabbitmq = (object.rabbitmq !== undefined && object.rabbitmq !== null)
      ? ClickhouseConfig_Rabbitmq.fromPartial(object.rabbitmq)
      : undefined;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxConcurrentQueries = object.maxConcurrentQueries ?? undefined;
    message.keepAliveTimeout = object.keepAliveTimeout ?? undefined;
    message.uncompressedCacheSize = object.uncompressedCacheSize ?? undefined;
    message.markCacheSize = object.markCacheSize ?? undefined;
    message.maxTableSizeToDrop = object.maxTableSizeToDrop ?? undefined;
    message.maxPartitionSizeToDrop = object.maxPartitionSizeToDrop ?? undefined;
    message.builtinDictionariesReloadInterval = object.builtinDictionariesReloadInterval ?? undefined;
    message.timezone = object.timezone ?? "";
    message.geobaseUri = object.geobaseUri ?? "";
    message.queryLogRetentionSize = object.queryLogRetentionSize ?? undefined;
    message.queryLogRetentionTime = object.queryLogRetentionTime ?? undefined;
    message.queryThreadLogEnabled = object.queryThreadLogEnabled ?? undefined;
    message.queryThreadLogRetentionSize = object.queryThreadLogRetentionSize ?? undefined;
    message.queryThreadLogRetentionTime = object.queryThreadLogRetentionTime ?? undefined;
    message.partLogRetentionSize = object.partLogRetentionSize ?? undefined;
    message.partLogRetentionTime = object.partLogRetentionTime ?? undefined;
    message.metricLogEnabled = object.metricLogEnabled ?? undefined;
    message.metricLogRetentionSize = object.metricLogRetentionSize ?? undefined;
    message.metricLogRetentionTime = object.metricLogRetentionTime ?? undefined;
    message.traceLogEnabled = object.traceLogEnabled ?? undefined;
    message.traceLogRetentionSize = object.traceLogRetentionSize ?? undefined;
    message.traceLogRetentionTime = object.traceLogRetentionTime ?? undefined;
    message.textLogEnabled = object.textLogEnabled ?? undefined;
    message.textLogRetentionSize = object.textLogRetentionSize ?? undefined;
    message.textLogRetentionTime = object.textLogRetentionTime ?? undefined;
    message.textLogLevel = object.textLogLevel ?? 0;
    message.opentelemetrySpanLogEnabled = object.opentelemetrySpanLogEnabled ?? undefined;
    message.backgroundPoolSize = object.backgroundPoolSize ?? undefined;
    message.backgroundSchedulePoolSize = object.backgroundSchedulePoolSize ?? undefined;
    message.backgroundFetchesPoolSize = object.backgroundFetchesPoolSize ?? undefined;
    message.backgroundMovePoolSize = object.backgroundMovePoolSize ?? undefined;
    message.backgroundDistributedSchedulePoolSize = object.backgroundDistributedSchedulePoolSize ?? undefined;
    message.backgroundBufferFlushSchedulePoolSize = object.backgroundBufferFlushSchedulePoolSize ?? undefined;
    message.backgroundMessageBrokerSchedulePoolSize = object.backgroundMessageBrokerSchedulePoolSize ?? undefined;
    message.defaultDatabase = object.defaultDatabase ?? undefined;
    message.totalMemoryProfilerStep = object.totalMemoryProfilerStep ?? undefined;
    message.totalMemoryTrackerSampleProbability = object.totalMemoryTrackerSampleProbability ?? undefined;
    message.backgroundCommonPoolSize = object.backgroundCommonPoolSize ?? undefined;
    message.backgroundMergesMutationsConcurrencyRatio = object.backgroundMergesMutationsConcurrencyRatio ?? undefined;
    message.queryViewsLogEnabled = object.queryViewsLogEnabled ?? undefined;
    message.queryViewsLogRetentionSize = object.queryViewsLogRetentionSize ?? undefined;
    message.queryViewsLogRetentionTime = object.queryViewsLogRetentionTime ?? undefined;
    message.asynchronousMetricLogEnabled = object.asynchronousMetricLogEnabled ?? undefined;
    message.asynchronousMetricLogRetentionSize = object.asynchronousMetricLogRetentionSize ?? undefined;
    message.asynchronousMetricLogRetentionTime = object.asynchronousMetricLogRetentionTime ?? undefined;
    message.opentelemetrySpanLogRetentionSize = object.opentelemetrySpanLogRetentionSize ?? undefined;
    message.opentelemetrySpanLogRetentionTime = object.opentelemetrySpanLogRetentionTime ?? undefined;
    message.sessionLogEnabled = object.sessionLogEnabled ?? undefined;
    message.sessionLogRetentionSize = object.sessionLogRetentionSize ?? undefined;
    message.sessionLogRetentionTime = object.sessionLogRetentionTime ?? undefined;
    message.zookeeperLogEnabled = object.zookeeperLogEnabled ?? undefined;
    message.zookeeperLogRetentionSize = object.zookeeperLogRetentionSize ?? undefined;
    message.zookeeperLogRetentionTime = object.zookeeperLogRetentionTime ?? undefined;
    message.asynchronousInsertLogEnabled = object.asynchronousInsertLogEnabled ?? undefined;
    message.asynchronousInsertLogRetentionSize = object.asynchronousInsertLogRetentionSize ?? undefined;
    message.asynchronousInsertLogRetentionTime = object.asynchronousInsertLogRetentionTime ?? undefined;
    message.geobaseEnabled = object.geobaseEnabled ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig.$type, ClickhouseConfig);

function createBaseClickhouseConfig_MergeTree(): ClickhouseConfig_MergeTree {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree",
    replicatedDeduplicationWindow: undefined,
    replicatedDeduplicationWindowSeconds: undefined,
    partsToDelayInsert: undefined,
    partsToThrowInsert: undefined,
    inactivePartsToDelayInsert: undefined,
    inactivePartsToThrowInsert: undefined,
    maxReplicatedMergesInQueue: undefined,
    numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge: undefined,
    maxBytesToMergeAtMinSpaceInPool: undefined,
    maxBytesToMergeAtMaxSpaceInPool: undefined,
    minBytesForWidePart: undefined,
    minRowsForWidePart: undefined,
    ttlOnlyDropParts: undefined,
    allowRemoteFsZeroCopyReplication: undefined,
    mergeWithTtlTimeout: undefined,
    mergeWithRecompressionTtlTimeout: undefined,
    maxPartsInTotal: undefined,
    maxNumberOfMergesWithTtlInPool: undefined,
    cleanupDelayPeriod: undefined,
    numberOfFreeEntriesInPoolToExecuteMutation: undefined,
    maxAvgPartSizeForTooManyParts: undefined,
    minAgeToForceMergeSeconds: undefined,
    minAgeToForceMergeOnPartitionOnly: undefined,
    mergeSelectingSleepMs: undefined,
  };
}

export const ClickhouseConfig_MergeTree = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree" as const,

  encode(message: ClickhouseConfig_MergeTree, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.replicatedDeduplicationWindow !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicatedDeduplicationWindow! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.replicatedDeduplicationWindowSeconds !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicatedDeduplicationWindowSeconds! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.partsToDelayInsert !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.partsToDelayInsert! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.partsToThrowInsert !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.partsToThrowInsert! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.inactivePartsToDelayInsert !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.inactivePartsToDelayInsert! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.inactivePartsToThrowInsert !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.inactivePartsToThrowInsert! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.maxReplicatedMergesInQueue !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxReplicatedMergesInQueue! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined) {
      Int64Value.encode({
        $type: "google.protobuf.Int64Value",
        value: message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge!,
      }, writer.uint32(50).fork()).ldelim();
    }
    if (message.maxBytesToMergeAtMinSpaceInPool !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesToMergeAtMinSpaceInPool! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.maxBytesToMergeAtMaxSpaceInPool !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesToMergeAtMaxSpaceInPool! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.minBytesForWidePart !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minBytesForWidePart! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.minRowsForWidePart !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minRowsForWidePart! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.ttlOnlyDropParts !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.ttlOnlyDropParts! },
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.allowRemoteFsZeroCopyReplication !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.allowRemoteFsZeroCopyReplication! },
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.mergeWithTtlTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mergeWithTtlTimeout! },
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.mergeWithRecompressionTtlTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mergeWithRecompressionTtlTimeout! },
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.maxPartsInTotal !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPartsInTotal! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.maxNumberOfMergesWithTtlInPool !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxNumberOfMergesWithTtlInPool! },
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.cleanupDelayPeriod !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.cleanupDelayPeriod! },
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.numberOfFreeEntriesInPoolToExecuteMutation !== undefined) {
      Int64Value.encode({
        $type: "google.protobuf.Int64Value",
        value: message.numberOfFreeEntriesInPoolToExecuteMutation!,
      }, writer.uint32(162).fork()).ldelim();
    }
    if (message.maxAvgPartSizeForTooManyParts !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxAvgPartSizeForTooManyParts! },
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.minAgeToForceMergeSeconds !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minAgeToForceMergeSeconds! },
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.minAgeToForceMergeOnPartitionOnly !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.minAgeToForceMergeOnPartitionOnly! },
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.mergeSelectingSleepMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mergeSelectingSleepMs! },
        writer.uint32(194).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_MergeTree {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_MergeTree();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.replicatedDeduplicationWindow = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.replicatedDeduplicationWindowSeconds = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.partsToDelayInsert = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.partsToThrowInsert = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.inactivePartsToDelayInsert = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.inactivePartsToThrowInsert = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.maxReplicatedMergesInQueue = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.maxBytesToMergeAtMinSpaceInPool = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.maxBytesToMergeAtMaxSpaceInPool = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.minBytesForWidePart = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.minRowsForWidePart = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.ttlOnlyDropParts = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.allowRemoteFsZeroCopyReplication = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.mergeWithTtlTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.mergeWithRecompressionTtlTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.maxPartsInTotal = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.maxNumberOfMergesWithTtlInPool = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.cleanupDelayPeriod = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.numberOfFreeEntriesInPoolToExecuteMutation = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.maxAvgPartSizeForTooManyParts = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.minAgeToForceMergeSeconds = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.minAgeToForceMergeOnPartitionOnly = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.mergeSelectingSleepMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_MergeTree {
    return {
      $type: ClickhouseConfig_MergeTree.$type,
      replicatedDeduplicationWindow: isSet(object.replicatedDeduplicationWindow)
        ? Number(object.replicatedDeduplicationWindow)
        : undefined,
      replicatedDeduplicationWindowSeconds: isSet(object.replicatedDeduplicationWindowSeconds)
        ? Number(object.replicatedDeduplicationWindowSeconds)
        : undefined,
      partsToDelayInsert: isSet(object.partsToDelayInsert) ? Number(object.partsToDelayInsert) : undefined,
      partsToThrowInsert: isSet(object.partsToThrowInsert) ? Number(object.partsToThrowInsert) : undefined,
      inactivePartsToDelayInsert: isSet(object.inactivePartsToDelayInsert)
        ? Number(object.inactivePartsToDelayInsert)
        : undefined,
      inactivePartsToThrowInsert: isSet(object.inactivePartsToThrowInsert)
        ? Number(object.inactivePartsToThrowInsert)
        : undefined,
      maxReplicatedMergesInQueue: isSet(object.maxReplicatedMergesInQueue)
        ? Number(object.maxReplicatedMergesInQueue)
        : undefined,
      numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge: isSet(object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge)
        ? Number(object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge)
        : undefined,
      maxBytesToMergeAtMinSpaceInPool: isSet(object.maxBytesToMergeAtMinSpaceInPool)
        ? Number(object.maxBytesToMergeAtMinSpaceInPool)
        : undefined,
      maxBytesToMergeAtMaxSpaceInPool: isSet(object.maxBytesToMergeAtMaxSpaceInPool)
        ? Number(object.maxBytesToMergeAtMaxSpaceInPool)
        : undefined,
      minBytesForWidePart: isSet(object.minBytesForWidePart) ? Number(object.minBytesForWidePart) : undefined,
      minRowsForWidePart: isSet(object.minRowsForWidePart) ? Number(object.minRowsForWidePart) : undefined,
      ttlOnlyDropParts: isSet(object.ttlOnlyDropParts) ? Boolean(object.ttlOnlyDropParts) : undefined,
      allowRemoteFsZeroCopyReplication: isSet(object.allowRemoteFsZeroCopyReplication)
        ? Boolean(object.allowRemoteFsZeroCopyReplication)
        : undefined,
      mergeWithTtlTimeout: isSet(object.mergeWithTtlTimeout) ? Number(object.mergeWithTtlTimeout) : undefined,
      mergeWithRecompressionTtlTimeout: isSet(object.mergeWithRecompressionTtlTimeout)
        ? Number(object.mergeWithRecompressionTtlTimeout)
        : undefined,
      maxPartsInTotal: isSet(object.maxPartsInTotal) ? Number(object.maxPartsInTotal) : undefined,
      maxNumberOfMergesWithTtlInPool: isSet(object.maxNumberOfMergesWithTtlInPool)
        ? Number(object.maxNumberOfMergesWithTtlInPool)
        : undefined,
      cleanupDelayPeriod: isSet(object.cleanupDelayPeriod) ? Number(object.cleanupDelayPeriod) : undefined,
      numberOfFreeEntriesInPoolToExecuteMutation: isSet(object.numberOfFreeEntriesInPoolToExecuteMutation)
        ? Number(object.numberOfFreeEntriesInPoolToExecuteMutation)
        : undefined,
      maxAvgPartSizeForTooManyParts: isSet(object.maxAvgPartSizeForTooManyParts)
        ? Number(object.maxAvgPartSizeForTooManyParts)
        : undefined,
      minAgeToForceMergeSeconds: isSet(object.minAgeToForceMergeSeconds)
        ? Number(object.minAgeToForceMergeSeconds)
        : undefined,
      minAgeToForceMergeOnPartitionOnly: isSet(object.minAgeToForceMergeOnPartitionOnly)
        ? Boolean(object.minAgeToForceMergeOnPartitionOnly)
        : undefined,
      mergeSelectingSleepMs: isSet(object.mergeSelectingSleepMs) ? Number(object.mergeSelectingSleepMs) : undefined,
    };
  },

  toJSON(message: ClickhouseConfig_MergeTree): unknown {
    const obj: any = {};
    if (message.replicatedDeduplicationWindow !== undefined) {
      obj.replicatedDeduplicationWindow = message.replicatedDeduplicationWindow;
    }
    if (message.replicatedDeduplicationWindowSeconds !== undefined) {
      obj.replicatedDeduplicationWindowSeconds = message.replicatedDeduplicationWindowSeconds;
    }
    if (message.partsToDelayInsert !== undefined) {
      obj.partsToDelayInsert = message.partsToDelayInsert;
    }
    if (message.partsToThrowInsert !== undefined) {
      obj.partsToThrowInsert = message.partsToThrowInsert;
    }
    if (message.inactivePartsToDelayInsert !== undefined) {
      obj.inactivePartsToDelayInsert = message.inactivePartsToDelayInsert;
    }
    if (message.inactivePartsToThrowInsert !== undefined) {
      obj.inactivePartsToThrowInsert = message.inactivePartsToThrowInsert;
    }
    if (message.maxReplicatedMergesInQueue !== undefined) {
      obj.maxReplicatedMergesInQueue = message.maxReplicatedMergesInQueue;
    }
    if (message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined) {
      obj.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge;
    }
    if (message.maxBytesToMergeAtMinSpaceInPool !== undefined) {
      obj.maxBytesToMergeAtMinSpaceInPool = message.maxBytesToMergeAtMinSpaceInPool;
    }
    if (message.maxBytesToMergeAtMaxSpaceInPool !== undefined) {
      obj.maxBytesToMergeAtMaxSpaceInPool = message.maxBytesToMergeAtMaxSpaceInPool;
    }
    if (message.minBytesForWidePart !== undefined) {
      obj.minBytesForWidePart = message.minBytesForWidePart;
    }
    if (message.minRowsForWidePart !== undefined) {
      obj.minRowsForWidePart = message.minRowsForWidePart;
    }
    if (message.ttlOnlyDropParts !== undefined) {
      obj.ttlOnlyDropParts = message.ttlOnlyDropParts;
    }
    if (message.allowRemoteFsZeroCopyReplication !== undefined) {
      obj.allowRemoteFsZeroCopyReplication = message.allowRemoteFsZeroCopyReplication;
    }
    if (message.mergeWithTtlTimeout !== undefined) {
      obj.mergeWithTtlTimeout = message.mergeWithTtlTimeout;
    }
    if (message.mergeWithRecompressionTtlTimeout !== undefined) {
      obj.mergeWithRecompressionTtlTimeout = message.mergeWithRecompressionTtlTimeout;
    }
    if (message.maxPartsInTotal !== undefined) {
      obj.maxPartsInTotal = message.maxPartsInTotal;
    }
    if (message.maxNumberOfMergesWithTtlInPool !== undefined) {
      obj.maxNumberOfMergesWithTtlInPool = message.maxNumberOfMergesWithTtlInPool;
    }
    if (message.cleanupDelayPeriod !== undefined) {
      obj.cleanupDelayPeriod = message.cleanupDelayPeriod;
    }
    if (message.numberOfFreeEntriesInPoolToExecuteMutation !== undefined) {
      obj.numberOfFreeEntriesInPoolToExecuteMutation = message.numberOfFreeEntriesInPoolToExecuteMutation;
    }
    if (message.maxAvgPartSizeForTooManyParts !== undefined) {
      obj.maxAvgPartSizeForTooManyParts = message.maxAvgPartSizeForTooManyParts;
    }
    if (message.minAgeToForceMergeSeconds !== undefined) {
      obj.minAgeToForceMergeSeconds = message.minAgeToForceMergeSeconds;
    }
    if (message.minAgeToForceMergeOnPartitionOnly !== undefined) {
      obj.minAgeToForceMergeOnPartitionOnly = message.minAgeToForceMergeOnPartitionOnly;
    }
    if (message.mergeSelectingSleepMs !== undefined) {
      obj.mergeSelectingSleepMs = message.mergeSelectingSleepMs;
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_MergeTree>): ClickhouseConfig_MergeTree {
    return ClickhouseConfig_MergeTree.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfig_MergeTree>): ClickhouseConfig_MergeTree {
    const message = createBaseClickhouseConfig_MergeTree();
    message.replicatedDeduplicationWindow = object.replicatedDeduplicationWindow ?? undefined;
    message.replicatedDeduplicationWindowSeconds = object.replicatedDeduplicationWindowSeconds ?? undefined;
    message.partsToDelayInsert = object.partsToDelayInsert ?? undefined;
    message.partsToThrowInsert = object.partsToThrowInsert ?? undefined;
    message.inactivePartsToDelayInsert = object.inactivePartsToDelayInsert ?? undefined;
    message.inactivePartsToThrowInsert = object.inactivePartsToThrowInsert ?? undefined;
    message.maxReplicatedMergesInQueue = object.maxReplicatedMergesInQueue ?? undefined;
    message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge ??
      undefined;
    message.maxBytesToMergeAtMinSpaceInPool = object.maxBytesToMergeAtMinSpaceInPool ?? undefined;
    message.maxBytesToMergeAtMaxSpaceInPool = object.maxBytesToMergeAtMaxSpaceInPool ?? undefined;
    message.minBytesForWidePart = object.minBytesForWidePart ?? undefined;
    message.minRowsForWidePart = object.minRowsForWidePart ?? undefined;
    message.ttlOnlyDropParts = object.ttlOnlyDropParts ?? undefined;
    message.allowRemoteFsZeroCopyReplication = object.allowRemoteFsZeroCopyReplication ?? undefined;
    message.mergeWithTtlTimeout = object.mergeWithTtlTimeout ?? undefined;
    message.mergeWithRecompressionTtlTimeout = object.mergeWithRecompressionTtlTimeout ?? undefined;
    message.maxPartsInTotal = object.maxPartsInTotal ?? undefined;
    message.maxNumberOfMergesWithTtlInPool = object.maxNumberOfMergesWithTtlInPool ?? undefined;
    message.cleanupDelayPeriod = object.cleanupDelayPeriod ?? undefined;
    message.numberOfFreeEntriesInPoolToExecuteMutation = object.numberOfFreeEntriesInPoolToExecuteMutation ?? undefined;
    message.maxAvgPartSizeForTooManyParts = object.maxAvgPartSizeForTooManyParts ?? undefined;
    message.minAgeToForceMergeSeconds = object.minAgeToForceMergeSeconds ?? undefined;
    message.minAgeToForceMergeOnPartitionOnly = object.minAgeToForceMergeOnPartitionOnly ?? undefined;
    message.mergeSelectingSleepMs = object.mergeSelectingSleepMs ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_MergeTree.$type, ClickhouseConfig_MergeTree);

function createBaseClickhouseConfig_Kafka(): ClickhouseConfig_Kafka {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka",
    securityProtocol: 0,
    saslMechanism: 0,
    saslUsername: "",
    saslPassword: "",
    enableSslCertificateVerification: undefined,
    maxPollIntervalMs: undefined,
    sessionTimeoutMs: undefined,
  };
}

export const ClickhouseConfig_Kafka = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka" as const,

  encode(message: ClickhouseConfig_Kafka, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityProtocol !== 0) {
      writer.uint32(8).int32(message.securityProtocol);
    }
    if (message.saslMechanism !== 0) {
      writer.uint32(16).int32(message.saslMechanism);
    }
    if (message.saslUsername !== "") {
      writer.uint32(26).string(message.saslUsername);
    }
    if (message.saslPassword !== "") {
      writer.uint32(34).string(message.saslPassword);
    }
    if (message.enableSslCertificateVerification !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableSslCertificateVerification! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.maxPollIntervalMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPollIntervalMs! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.sessionTimeoutMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.sessionTimeoutMs! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_Kafka {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_Kafka();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.securityProtocol = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.saslMechanism = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.saslUsername = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.saslPassword = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.enableSslCertificateVerification = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxPollIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sessionTimeoutMs = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_Kafka {
    return {
      $type: ClickhouseConfig_Kafka.$type,
      securityProtocol: isSet(object.securityProtocol)
        ? clickhouseConfig_Kafka_SecurityProtocolFromJSON(object.securityProtocol)
        : 0,
      saslMechanism: isSet(object.saslMechanism)
        ? clickhouseConfig_Kafka_SaslMechanismFromJSON(object.saslMechanism)
        : 0,
      saslUsername: isSet(object.saslUsername) ? globalThis.String(object.saslUsername) : "",
      saslPassword: isSet(object.saslPassword) ? globalThis.String(object.saslPassword) : "",
      enableSslCertificateVerification: isSet(object.enableSslCertificateVerification)
        ? Boolean(object.enableSslCertificateVerification)
        : undefined,
      maxPollIntervalMs: isSet(object.maxPollIntervalMs) ? Number(object.maxPollIntervalMs) : undefined,
      sessionTimeoutMs: isSet(object.sessionTimeoutMs) ? Number(object.sessionTimeoutMs) : undefined,
    };
  },

  toJSON(message: ClickhouseConfig_Kafka): unknown {
    const obj: any = {};
    if (message.securityProtocol !== 0) {
      obj.securityProtocol = clickhouseConfig_Kafka_SecurityProtocolToJSON(message.securityProtocol);
    }
    if (message.saslMechanism !== 0) {
      obj.saslMechanism = clickhouseConfig_Kafka_SaslMechanismToJSON(message.saslMechanism);
    }
    if (message.saslUsername !== "") {
      obj.saslUsername = message.saslUsername;
    }
    if (message.saslPassword !== "") {
      obj.saslPassword = message.saslPassword;
    }
    if (message.enableSslCertificateVerification !== undefined) {
      obj.enableSslCertificateVerification = message.enableSslCertificateVerification;
    }
    if (message.maxPollIntervalMs !== undefined) {
      obj.maxPollIntervalMs = message.maxPollIntervalMs;
    }
    if (message.sessionTimeoutMs !== undefined) {
      obj.sessionTimeoutMs = message.sessionTimeoutMs;
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_Kafka>): ClickhouseConfig_Kafka {
    return ClickhouseConfig_Kafka.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfig_Kafka>): ClickhouseConfig_Kafka {
    const message = createBaseClickhouseConfig_Kafka();
    message.securityProtocol = object.securityProtocol ?? 0;
    message.saslMechanism = object.saslMechanism ?? 0;
    message.saslUsername = object.saslUsername ?? "";
    message.saslPassword = object.saslPassword ?? "";
    message.enableSslCertificateVerification = object.enableSslCertificateVerification ?? undefined;
    message.maxPollIntervalMs = object.maxPollIntervalMs ?? undefined;
    message.sessionTimeoutMs = object.sessionTimeoutMs ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_Kafka.$type, ClickhouseConfig_Kafka);

function createBaseClickhouseConfig_KafkaTopic(): ClickhouseConfig_KafkaTopic {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic", name: "", settings: undefined };
}

export const ClickhouseConfig_KafkaTopic = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic" as const,

  encode(message: ClickhouseConfig_KafkaTopic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.settings !== undefined) {
      ClickhouseConfig_Kafka.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_KafkaTopic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_KafkaTopic();
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

          message.settings = ClickhouseConfig_Kafka.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_KafkaTopic {
    return {
      $type: ClickhouseConfig_KafkaTopic.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      settings: isSet(object.settings) ? ClickhouseConfig_Kafka.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: ClickhouseConfig_KafkaTopic): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.settings !== undefined) {
      obj.settings = ClickhouseConfig_Kafka.toJSON(message.settings);
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_KafkaTopic>): ClickhouseConfig_KafkaTopic {
    return ClickhouseConfig_KafkaTopic.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfig_KafkaTopic>): ClickhouseConfig_KafkaTopic {
    const message = createBaseClickhouseConfig_KafkaTopic();
    message.name = object.name ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? ClickhouseConfig_Kafka.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_KafkaTopic.$type, ClickhouseConfig_KafkaTopic);

function createBaseClickhouseConfig_Rabbitmq(): ClickhouseConfig_Rabbitmq {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq",
    username: "",
    password: "",
    vhost: "",
  };
}

export const ClickhouseConfig_Rabbitmq = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq" as const,

  encode(message: ClickhouseConfig_Rabbitmq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.vhost !== "") {
      writer.uint32(26).string(message.vhost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_Rabbitmq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_Rabbitmq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.vhost = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_Rabbitmq {
    return {
      $type: ClickhouseConfig_Rabbitmq.$type,
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      vhost: isSet(object.vhost) ? globalThis.String(object.vhost) : "",
    };
  },

  toJSON(message: ClickhouseConfig_Rabbitmq): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.vhost !== "") {
      obj.vhost = message.vhost;
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_Rabbitmq>): ClickhouseConfig_Rabbitmq {
    return ClickhouseConfig_Rabbitmq.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfig_Rabbitmq>): ClickhouseConfig_Rabbitmq {
    const message = createBaseClickhouseConfig_Rabbitmq();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.vhost = object.vhost ?? "";
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_Rabbitmq.$type, ClickhouseConfig_Rabbitmq);

function createBaseClickhouseConfig_Compression(): ClickhouseConfig_Compression {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression",
    method: 0,
    minPartSize: 0,
    minPartSizeRatio: 0,
    level: undefined,
  };
}

export const ClickhouseConfig_Compression = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression" as const,

  encode(message: ClickhouseConfig_Compression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.method !== 0) {
      writer.uint32(8).int32(message.method);
    }
    if (message.minPartSize !== 0) {
      writer.uint32(16).int64(message.minPartSize);
    }
    if (message.minPartSizeRatio !== 0) {
      writer.uint32(25).double(message.minPartSizeRatio);
    }
    if (message.level !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.level! }, writer.uint32(34).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_Compression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_Compression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.method = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minPartSize = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.minPartSizeRatio = reader.double();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.level = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_Compression {
    return {
      $type: ClickhouseConfig_Compression.$type,
      method: isSet(object.method) ? clickhouseConfig_Compression_MethodFromJSON(object.method) : 0,
      minPartSize: isSet(object.minPartSize) ? globalThis.Number(object.minPartSize) : 0,
      minPartSizeRatio: isSet(object.minPartSizeRatio) ? globalThis.Number(object.minPartSizeRatio) : 0,
      level: isSet(object.level) ? Number(object.level) : undefined,
    };
  },

  toJSON(message: ClickhouseConfig_Compression): unknown {
    const obj: any = {};
    if (message.method !== 0) {
      obj.method = clickhouseConfig_Compression_MethodToJSON(message.method);
    }
    if (message.minPartSize !== 0) {
      obj.minPartSize = Math.round(message.minPartSize);
    }
    if (message.minPartSizeRatio !== 0) {
      obj.minPartSizeRatio = message.minPartSizeRatio;
    }
    if (message.level !== undefined) {
      obj.level = message.level;
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_Compression>): ClickhouseConfig_Compression {
    return ClickhouseConfig_Compression.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfig_Compression>): ClickhouseConfig_Compression {
    const message = createBaseClickhouseConfig_Compression();
    message.method = object.method ?? 0;
    message.minPartSize = object.minPartSize ?? 0;
    message.minPartSizeRatio = object.minPartSizeRatio ?? 0;
    message.level = object.level ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_Compression.$type, ClickhouseConfig_Compression);

function createBaseClickhouseConfig_ExternalDictionary(): ClickhouseConfig_ExternalDictionary {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary",
    name: "",
    structure: undefined,
    layout: undefined,
    fixedLifetime: undefined,
    lifetimeRange: undefined,
    httpSource: undefined,
    mysqlSource: undefined,
    clickhouseSource: undefined,
    mongodbSource: undefined,
    postgresqlSource: undefined,
  };
}

export const ClickhouseConfig_ExternalDictionary = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary" as const,

  encode(message: ClickhouseConfig_ExternalDictionary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.structure !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure.encode(message.structure, writer.uint32(18).fork()).ldelim();
    }
    if (message.layout !== undefined) {
      ClickhouseConfig_ExternalDictionary_Layout.encode(message.layout, writer.uint32(26).fork()).ldelim();
    }
    if (message.fixedLifetime !== undefined) {
      writer.uint32(32).int64(message.fixedLifetime);
    }
    if (message.lifetimeRange !== undefined) {
      ClickhouseConfig_ExternalDictionary_Range.encode(message.lifetimeRange, writer.uint32(42).fork()).ldelim();
    }
    if (message.httpSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_HttpSource.encode(message.httpSource, writer.uint32(50).fork()).ldelim();
    }
    if (message.mysqlSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_MysqlSource.encode(message.mysqlSource, writer.uint32(58).fork()).ldelim();
    }
    if (message.clickhouseSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_ClickhouseSource.encode(message.clickhouseSource, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.mongodbSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_MongodbSource.encode(message.mongodbSource, writer.uint32(74).fork())
        .ldelim();
    }
    if (message.postgresqlSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_PostgresqlSource.encode(message.postgresqlSource, writer.uint32(82).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary();
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

          message.structure = ClickhouseConfig_ExternalDictionary_Structure.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.layout = ClickhouseConfig_ExternalDictionary_Layout.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.fixedLifetime = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lifetimeRange = ClickhouseConfig_ExternalDictionary_Range.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.httpSource = ClickhouseConfig_ExternalDictionary_HttpSource.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mysqlSource = ClickhouseConfig_ExternalDictionary_MysqlSource.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.clickhouseSource = ClickhouseConfig_ExternalDictionary_ClickhouseSource.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.mongodbSource = ClickhouseConfig_ExternalDictionary_MongodbSource.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.postgresqlSource = ClickhouseConfig_ExternalDictionary_PostgresqlSource.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary {
    return {
      $type: ClickhouseConfig_ExternalDictionary.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      structure: isSet(object.structure)
        ? ClickhouseConfig_ExternalDictionary_Structure.fromJSON(object.structure)
        : undefined,
      layout: isSet(object.layout) ? ClickhouseConfig_ExternalDictionary_Layout.fromJSON(object.layout) : undefined,
      fixedLifetime: isSet(object.fixedLifetime) ? globalThis.Number(object.fixedLifetime) : undefined,
      lifetimeRange: isSet(object.lifetimeRange)
        ? ClickhouseConfig_ExternalDictionary_Range.fromJSON(object.lifetimeRange)
        : undefined,
      httpSource: isSet(object.httpSource)
        ? ClickhouseConfig_ExternalDictionary_HttpSource.fromJSON(object.httpSource)
        : undefined,
      mysqlSource: isSet(object.mysqlSource)
        ? ClickhouseConfig_ExternalDictionary_MysqlSource.fromJSON(object.mysqlSource)
        : undefined,
      clickhouseSource: isSet(object.clickhouseSource)
        ? ClickhouseConfig_ExternalDictionary_ClickhouseSource.fromJSON(object.clickhouseSource)
        : undefined,
      mongodbSource: isSet(object.mongodbSource)
        ? ClickhouseConfig_ExternalDictionary_MongodbSource.fromJSON(object.mongodbSource)
        : undefined,
      postgresqlSource: isSet(object.postgresqlSource)
        ? ClickhouseConfig_ExternalDictionary_PostgresqlSource.fromJSON(object.postgresqlSource)
        : undefined,
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.structure !== undefined) {
      obj.structure = ClickhouseConfig_ExternalDictionary_Structure.toJSON(message.structure);
    }
    if (message.layout !== undefined) {
      obj.layout = ClickhouseConfig_ExternalDictionary_Layout.toJSON(message.layout);
    }
    if (message.fixedLifetime !== undefined) {
      obj.fixedLifetime = Math.round(message.fixedLifetime);
    }
    if (message.lifetimeRange !== undefined) {
      obj.lifetimeRange = ClickhouseConfig_ExternalDictionary_Range.toJSON(message.lifetimeRange);
    }
    if (message.httpSource !== undefined) {
      obj.httpSource = ClickhouseConfig_ExternalDictionary_HttpSource.toJSON(message.httpSource);
    }
    if (message.mysqlSource !== undefined) {
      obj.mysqlSource = ClickhouseConfig_ExternalDictionary_MysqlSource.toJSON(message.mysqlSource);
    }
    if (message.clickhouseSource !== undefined) {
      obj.clickhouseSource = ClickhouseConfig_ExternalDictionary_ClickhouseSource.toJSON(message.clickhouseSource);
    }
    if (message.mongodbSource !== undefined) {
      obj.mongodbSource = ClickhouseConfig_ExternalDictionary_MongodbSource.toJSON(message.mongodbSource);
    }
    if (message.postgresqlSource !== undefined) {
      obj.postgresqlSource = ClickhouseConfig_ExternalDictionary_PostgresqlSource.toJSON(message.postgresqlSource);
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_ExternalDictionary>): ClickhouseConfig_ExternalDictionary {
    return ClickhouseConfig_ExternalDictionary.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary>): ClickhouseConfig_ExternalDictionary {
    const message = createBaseClickhouseConfig_ExternalDictionary();
    message.name = object.name ?? "";
    message.structure = (object.structure !== undefined && object.structure !== null)
      ? ClickhouseConfig_ExternalDictionary_Structure.fromPartial(object.structure)
      : undefined;
    message.layout = (object.layout !== undefined && object.layout !== null)
      ? ClickhouseConfig_ExternalDictionary_Layout.fromPartial(object.layout)
      : undefined;
    message.fixedLifetime = object.fixedLifetime ?? undefined;
    message.lifetimeRange = (object.lifetimeRange !== undefined && object.lifetimeRange !== null)
      ? ClickhouseConfig_ExternalDictionary_Range.fromPartial(object.lifetimeRange)
      : undefined;
    message.httpSource = (object.httpSource !== undefined && object.httpSource !== null)
      ? ClickhouseConfig_ExternalDictionary_HttpSource.fromPartial(object.httpSource)
      : undefined;
    message.mysqlSource = (object.mysqlSource !== undefined && object.mysqlSource !== null)
      ? ClickhouseConfig_ExternalDictionary_MysqlSource.fromPartial(object.mysqlSource)
      : undefined;
    message.clickhouseSource = (object.clickhouseSource !== undefined && object.clickhouseSource !== null)
      ? ClickhouseConfig_ExternalDictionary_ClickhouseSource.fromPartial(object.clickhouseSource)
      : undefined;
    message.mongodbSource = (object.mongodbSource !== undefined && object.mongodbSource !== null)
      ? ClickhouseConfig_ExternalDictionary_MongodbSource.fromPartial(object.mongodbSource)
      : undefined;
    message.postgresqlSource = (object.postgresqlSource !== undefined && object.postgresqlSource !== null)
      ? ClickhouseConfig_ExternalDictionary_PostgresqlSource.fromPartial(object.postgresqlSource)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_ExternalDictionary.$type, ClickhouseConfig_ExternalDictionary);

function createBaseClickhouseConfig_ExternalDictionary_HttpSource(): ClickhouseConfig_ExternalDictionary_HttpSource {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource",
    url: "",
    format: "",
  };
}

export const ClickhouseConfig_ExternalDictionary_HttpSource = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_HttpSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.format !== "") {
      writer.uint32(18).string(message.format);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_HttpSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_HttpSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.format = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_HttpSource {
    return {
      $type: ClickhouseConfig_ExternalDictionary_HttpSource.$type,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      format: isSet(object.format) ? globalThis.String(object.format) : "",
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_HttpSource): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.format !== "") {
      obj.format = message.format;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_HttpSource>,
  ): ClickhouseConfig_ExternalDictionary_HttpSource {
    return ClickhouseConfig_ExternalDictionary_HttpSource.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_HttpSource>,
  ): ClickhouseConfig_ExternalDictionary_HttpSource {
    const message = createBaseClickhouseConfig_ExternalDictionary_HttpSource();
    message.url = object.url ?? "";
    message.format = object.format ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_HttpSource.$type,
  ClickhouseConfig_ExternalDictionary_HttpSource,
);

function createBaseClickhouseConfig_ExternalDictionary_MysqlSource(): ClickhouseConfig_ExternalDictionary_MysqlSource {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource",
    db: "",
    table: "",
    port: 0,
    user: "",
    password: "",
    replicas: [],
    where: "",
    invalidateQuery: "",
  };
}

export const ClickhouseConfig_ExternalDictionary_MysqlSource = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_MysqlSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.db !== "") {
      writer.uint32(10).string(message.db);
    }
    if (message.table !== "") {
      writer.uint32(18).string(message.table);
    }
    if (message.port !== 0) {
      writer.uint32(24).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(42).string(message.password);
    }
    for (const v of message.replicas) {
      ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.where !== "") {
      writer.uint32(58).string(message.where);
    }
    if (message.invalidateQuery !== "") {
      writer.uint32(66).string(message.invalidateQuery);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_MysqlSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_MysqlSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.db = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.table = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.user = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.password = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.replicas.push(
            ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.decode(reader, reader.uint32()),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.where = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.invalidateQuery = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MysqlSource {
    return {
      $type: ClickhouseConfig_ExternalDictionary_MysqlSource.$type,
      db: isSet(object.db) ? globalThis.String(object.db) : "",
      table: isSet(object.table) ? globalThis.String(object.table) : "",
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      replicas: globalThis.Array.isArray(object?.replicas)
        ? object.replicas.map((e: any) => ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.fromJSON(e))
        : [],
      where: isSet(object.where) ? globalThis.String(object.where) : "",
      invalidateQuery: isSet(object.invalidateQuery) ? globalThis.String(object.invalidateQuery) : "",
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_MysqlSource): unknown {
    const obj: any = {};
    if (message.db !== "") {
      obj.db = message.db;
    }
    if (message.table !== "") {
      obj.table = message.table;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.replicas?.length) {
      obj.replicas = message.replicas.map((e) => ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.toJSON(e));
    }
    if (message.where !== "") {
      obj.where = message.where;
    }
    if (message.invalidateQuery !== "") {
      obj.invalidateQuery = message.invalidateQuery;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource>,
  ): ClickhouseConfig_ExternalDictionary_MysqlSource {
    return ClickhouseConfig_ExternalDictionary_MysqlSource.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource>,
  ): ClickhouseConfig_ExternalDictionary_MysqlSource {
    const message = createBaseClickhouseConfig_ExternalDictionary_MysqlSource();
    message.db = object.db ?? "";
    message.table = object.table ?? "";
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.replicas =
      object.replicas?.map((e) => ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.fromPartial(e)) || [];
    message.where = object.where ?? "";
    message.invalidateQuery = object.invalidateQuery ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_MysqlSource.$type,
  ClickhouseConfig_ExternalDictionary_MysqlSource,
);

function createBaseClickhouseConfig_ExternalDictionary_MysqlSource_Replica(): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica",
    host: "",
    priority: 0,
    port: 0,
    user: "",
    password: "",
  };
}

export const ClickhouseConfig_ExternalDictionary_MysqlSource_Replica = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.priority !== 0) {
      writer.uint32(16).int64(message.priority);
    }
    if (message.port !== 0) {
      writer.uint32(24).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(42).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_MysqlSource_Replica();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.host = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.priority = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.user = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
    return {
      $type: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.$type,
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      priority: isSet(object.priority) ? globalThis.Number(object.priority) : 0,
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica): unknown {
    const obj: any = {};
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.priority !== 0) {
      obj.priority = Math.round(message.priority);
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource_Replica>,
  ): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
    return ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource_Replica>,
  ): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
    const message = createBaseClickhouseConfig_ExternalDictionary_MysqlSource_Replica();
    message.host = object.host ?? "";
    message.priority = object.priority ?? 0;
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.$type,
  ClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
);

function createBaseClickhouseConfig_ExternalDictionary_ClickhouseSource(): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource",
    db: "",
    table: "",
    host: "",
    port: 0,
    user: "",
    password: "",
    where: "",
  };
}

export const ClickhouseConfig_ExternalDictionary_ClickhouseSource = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_ClickhouseSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.db !== "") {
      writer.uint32(10).string(message.db);
    }
    if (message.table !== "") {
      writer.uint32(18).string(message.table);
    }
    if (message.host !== "") {
      writer.uint32(26).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(32).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    if (message.where !== "") {
      writer.uint32(58).string(message.where);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_ClickhouseSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.db = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.table = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.host = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.user = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.where = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
    return {
      $type: ClickhouseConfig_ExternalDictionary_ClickhouseSource.$type,
      db: isSet(object.db) ? globalThis.String(object.db) : "",
      table: isSet(object.table) ? globalThis.String(object.table) : "",
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      where: isSet(object.where) ? globalThis.String(object.where) : "",
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_ClickhouseSource): unknown {
    const obj: any = {};
    if (message.db !== "") {
      obj.db = message.db;
    }
    if (message.table !== "") {
      obj.table = message.table;
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.where !== "") {
      obj.where = message.where;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_ClickhouseSource>,
  ): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
    return ClickhouseConfig_ExternalDictionary_ClickhouseSource.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_ClickhouseSource>,
  ): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
    const message = createBaseClickhouseConfig_ExternalDictionary_ClickhouseSource();
    message.db = object.db ?? "";
    message.table = object.table ?? "";
    message.host = object.host ?? "";
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.where = object.where ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_ClickhouseSource.$type,
  ClickhouseConfig_ExternalDictionary_ClickhouseSource,
);

function createBaseClickhouseConfig_ExternalDictionary_MongodbSource(): ClickhouseConfig_ExternalDictionary_MongodbSource {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource",
    db: "",
    collection: "",
    host: "",
    port: 0,
    user: "",
    password: "",
    options: "",
  };
}

export const ClickhouseConfig_ExternalDictionary_MongodbSource = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_MongodbSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.db !== "") {
      writer.uint32(10).string(message.db);
    }
    if (message.collection !== "") {
      writer.uint32(18).string(message.collection);
    }
    if (message.host !== "") {
      writer.uint32(26).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(32).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    if (message.options !== "") {
      writer.uint32(58).string(message.options);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_MongodbSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_MongodbSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.db = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collection = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.host = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.user = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.options = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MongodbSource {
    return {
      $type: ClickhouseConfig_ExternalDictionary_MongodbSource.$type,
      db: isSet(object.db) ? globalThis.String(object.db) : "",
      collection: isSet(object.collection) ? globalThis.String(object.collection) : "",
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      options: isSet(object.options) ? globalThis.String(object.options) : "",
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_MongodbSource): unknown {
    const obj: any = {};
    if (message.db !== "") {
      obj.db = message.db;
    }
    if (message.collection !== "") {
      obj.collection = message.collection;
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.options !== "") {
      obj.options = message.options;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_MongodbSource>,
  ): ClickhouseConfig_ExternalDictionary_MongodbSource {
    return ClickhouseConfig_ExternalDictionary_MongodbSource.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_MongodbSource>,
  ): ClickhouseConfig_ExternalDictionary_MongodbSource {
    const message = createBaseClickhouseConfig_ExternalDictionary_MongodbSource();
    message.db = object.db ?? "";
    message.collection = object.collection ?? "";
    message.host = object.host ?? "";
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.options = object.options ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_MongodbSource.$type,
  ClickhouseConfig_ExternalDictionary_MongodbSource,
);

function createBaseClickhouseConfig_ExternalDictionary_PostgresqlSource(): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource",
    db: "",
    table: "",
    hosts: [],
    port: 0,
    user: "",
    password: "",
    invalidateQuery: "",
    sslMode: 0,
  };
}

export const ClickhouseConfig_ExternalDictionary_PostgresqlSource = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_PostgresqlSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.db !== "") {
      writer.uint32(10).string(message.db);
    }
    if (message.table !== "") {
      writer.uint32(18).string(message.table);
    }
    for (const v of message.hosts) {
      writer.uint32(26).string(v!);
    }
    if (message.port !== 0) {
      writer.uint32(32).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    if (message.invalidateQuery !== "") {
      writer.uint32(58).string(message.invalidateQuery);
    }
    if (message.sslMode !== 0) {
      writer.uint32(64).int32(message.sslMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_PostgresqlSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.db = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.table = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hosts.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.user = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.invalidateQuery = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.sslMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
    return {
      $type: ClickhouseConfig_ExternalDictionary_PostgresqlSource.$type,
      db: isSet(object.db) ? globalThis.String(object.db) : "",
      table: isSet(object.table) ? globalThis.String(object.table) : "",
      hosts: globalThis.Array.isArray(object?.hosts) ? object.hosts.map((e: any) => globalThis.String(e)) : [],
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      invalidateQuery: isSet(object.invalidateQuery) ? globalThis.String(object.invalidateQuery) : "",
      sslMode: isSet(object.sslMode)
        ? clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(object.sslMode)
        : 0,
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_PostgresqlSource): unknown {
    const obj: any = {};
    if (message.db !== "") {
      obj.db = message.db;
    }
    if (message.table !== "") {
      obj.table = message.table;
    }
    if (message.hosts?.length) {
      obj.hosts = message.hosts;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.invalidateQuery !== "") {
      obj.invalidateQuery = message.invalidateQuery;
    }
    if (message.sslMode !== 0) {
      obj.sslMode = clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(message.sslMode);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_PostgresqlSource>,
  ): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
    return ClickhouseConfig_ExternalDictionary_PostgresqlSource.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_PostgresqlSource>,
  ): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
    const message = createBaseClickhouseConfig_ExternalDictionary_PostgresqlSource();
    message.db = object.db ?? "";
    message.table = object.table ?? "";
    message.hosts = object.hosts?.map((e) => e) || [];
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.invalidateQuery = object.invalidateQuery ?? "";
    message.sslMode = object.sslMode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_PostgresqlSource.$type,
  ClickhouseConfig_ExternalDictionary_PostgresqlSource,
);

function createBaseClickhouseConfig_ExternalDictionary_Structure(): ClickhouseConfig_ExternalDictionary_Structure {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure",
    id: undefined,
    key: undefined,
    rangeMin: undefined,
    rangeMax: undefined,
    attributes: [],
  };
}

export const ClickhouseConfig_ExternalDictionary_Structure = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure" as const,

  encode(message: ClickhouseConfig_ExternalDictionary_Structure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure_Id.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.key !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure_Key.encode(message.key, writer.uint32(26).fork()).ldelim();
    }
    if (message.rangeMin !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(message.rangeMin, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.rangeMax !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(message.rangeMax, writer.uint32(42).fork())
        .ldelim();
    }
    for (const v of message.attributes) {
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_Structure {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_Structure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = ClickhouseConfig_ExternalDictionary_Structure_Id.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = ClickhouseConfig_ExternalDictionary_Structure_Key.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rangeMin = ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rangeMax = ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributes.push(
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure {
    return {
      $type: ClickhouseConfig_ExternalDictionary_Structure.$type,
      id: isSet(object.id) ? ClickhouseConfig_ExternalDictionary_Structure_Id.fromJSON(object.id) : undefined,
      key: isSet(object.key) ? ClickhouseConfig_ExternalDictionary_Structure_Key.fromJSON(object.key) : undefined,
      rangeMin: isSet(object.rangeMin)
        ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(object.rangeMin)
        : undefined,
      rangeMax: isSet(object.rangeMax)
        ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(object.rangeMax)
        : undefined,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Structure): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = ClickhouseConfig_ExternalDictionary_Structure_Id.toJSON(message.id);
    }
    if (message.key !== undefined) {
      obj.key = ClickhouseConfig_ExternalDictionary_Structure_Key.toJSON(message.key);
    }
    if (message.rangeMin !== undefined) {
      obj.rangeMin = ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(message.rangeMin);
    }
    if (message.rangeMax !== undefined) {
      obj.rangeMax = ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(message.rangeMax);
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(e));
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure>,
  ): ClickhouseConfig_ExternalDictionary_Structure {
    return ClickhouseConfig_ExternalDictionary_Structure.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure>,
  ): ClickhouseConfig_ExternalDictionary_Structure {
    const message = createBaseClickhouseConfig_ExternalDictionary_Structure();
    message.id = (object.id !== undefined && object.id !== null)
      ? ClickhouseConfig_ExternalDictionary_Structure_Id.fromPartial(object.id)
      : undefined;
    message.key = (object.key !== undefined && object.key !== null)
      ? ClickhouseConfig_ExternalDictionary_Structure_Key.fromPartial(object.key)
      : undefined;
    message.rangeMin = (object.rangeMin !== undefined && object.rangeMin !== null)
      ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(object.rangeMin)
      : undefined;
    message.rangeMax = (object.rangeMax !== undefined && object.rangeMax !== null)
      ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(object.rangeMax)
      : undefined;
    message.attributes =
      object.attributes?.map((e) => ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Structure.$type,
  ClickhouseConfig_ExternalDictionary_Structure,
);

function createBaseClickhouseConfig_ExternalDictionary_Structure_Attribute(): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute",
    name: "",
    type: "",
    nullValue: "",
    expression: "",
    hierarchical: false,
    injective: false,
  };
}

export const ClickhouseConfig_ExternalDictionary_Structure_Attribute = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_Structure_Attribute,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.nullValue !== "") {
      writer.uint32(26).string(message.nullValue);
    }
    if (message.expression !== "") {
      writer.uint32(34).string(message.expression);
    }
    if (message.hierarchical === true) {
      writer.uint32(40).bool(message.hierarchical);
    }
    if (message.injective === true) {
      writer.uint32(48).bool(message.injective);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_Structure_Attribute();
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

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nullValue = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.expression = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hierarchical = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.injective = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    return {
      $type: ClickhouseConfig_ExternalDictionary_Structure_Attribute.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      nullValue: isSet(object.nullValue) ? globalThis.String(object.nullValue) : "",
      expression: isSet(object.expression) ? globalThis.String(object.expression) : "",
      hierarchical: isSet(object.hierarchical) ? globalThis.Boolean(object.hierarchical) : false,
      injective: isSet(object.injective) ? globalThis.Boolean(object.injective) : false,
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Attribute): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.nullValue !== "") {
      obj.nullValue = message.nullValue;
    }
    if (message.expression !== "") {
      obj.expression = message.expression;
    }
    if (message.hierarchical === true) {
      obj.hierarchical = message.hierarchical;
    }
    if (message.injective === true) {
      obj.injective = message.injective;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Attribute>,
  ): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    return ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Attribute>,
  ): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    const message = createBaseClickhouseConfig_ExternalDictionary_Structure_Attribute();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.nullValue = object.nullValue ?? "";
    message.expression = object.expression ?? "";
    message.hierarchical = object.hierarchical ?? false;
    message.injective = object.injective ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Structure_Attribute.$type,
  ClickhouseConfig_ExternalDictionary_Structure_Attribute,
);

function createBaseClickhouseConfig_ExternalDictionary_Structure_Id(): ClickhouseConfig_ExternalDictionary_Structure_Id {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id", name: "" };
}

export const ClickhouseConfig_ExternalDictionary_Structure_Id = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_Structure_Id,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_Structure_Id {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_Structure_Id();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Id {
    return {
      $type: ClickhouseConfig_ExternalDictionary_Structure_Id.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Id): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Id>,
  ): ClickhouseConfig_ExternalDictionary_Structure_Id {
    return ClickhouseConfig_ExternalDictionary_Structure_Id.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Id>,
  ): ClickhouseConfig_ExternalDictionary_Structure_Id {
    const message = createBaseClickhouseConfig_ExternalDictionary_Structure_Id();
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Structure_Id.$type,
  ClickhouseConfig_ExternalDictionary_Structure_Id,
);

function createBaseClickhouseConfig_ExternalDictionary_Structure_Key(): ClickhouseConfig_ExternalDictionary_Structure_Key {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key",
    attributes: [],
  };
}

export const ClickhouseConfig_ExternalDictionary_Structure_Key = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_Structure_Key,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.attributes) {
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_Structure_Key {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_Structure_Key();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attributes.push(
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Key {
    return {
      $type: ClickhouseConfig_ExternalDictionary_Structure_Key.$type,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Key): unknown {
    const obj: any = {};
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(e));
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Key>,
  ): ClickhouseConfig_ExternalDictionary_Structure_Key {
    return ClickhouseConfig_ExternalDictionary_Structure_Key.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Key>,
  ): ClickhouseConfig_ExternalDictionary_Structure_Key {
    const message = createBaseClickhouseConfig_ExternalDictionary_Structure_Key();
    message.attributes =
      object.attributes?.map((e) => ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Structure_Key.$type,
  ClickhouseConfig_ExternalDictionary_Structure_Key,
);

function createBaseClickhouseConfig_ExternalDictionary_Layout(): ClickhouseConfig_ExternalDictionary_Layout {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout",
    type: 0,
    sizeInCells: 0,
  };
}

export const ClickhouseConfig_ExternalDictionary_Layout = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout" as const,

  encode(message: ClickhouseConfig_ExternalDictionary_Layout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.sizeInCells !== 0) {
      writer.uint32(16).int64(message.sizeInCells);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_Layout {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_Layout();
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

          message.sizeInCells = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Layout {
    return {
      $type: ClickhouseConfig_ExternalDictionary_Layout.$type,
      type: isSet(object.type) ? clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(object.type) : 0,
      sizeInCells: isSet(object.sizeInCells) ? globalThis.Number(object.sizeInCells) : 0,
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Layout): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(message.type);
    }
    if (message.sizeInCells !== 0) {
      obj.sizeInCells = Math.round(message.sizeInCells);
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_ExternalDictionary_Layout>): ClickhouseConfig_ExternalDictionary_Layout {
    return ClickhouseConfig_ExternalDictionary_Layout.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_Layout>,
  ): ClickhouseConfig_ExternalDictionary_Layout {
    const message = createBaseClickhouseConfig_ExternalDictionary_Layout();
    message.type = object.type ?? 0;
    message.sizeInCells = object.sizeInCells ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_ExternalDictionary_Layout.$type, ClickhouseConfig_ExternalDictionary_Layout);

function createBaseClickhouseConfig_ExternalDictionary_Range(): ClickhouseConfig_ExternalDictionary_Range {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range", min: 0, max: 0 };
}

export const ClickhouseConfig_ExternalDictionary_Range = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range" as const,

  encode(message: ClickhouseConfig_ExternalDictionary_Range, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(8).int64(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(16).int64(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_ExternalDictionary_Range {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_ExternalDictionary_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Range {
    return {
      $type: ClickhouseConfig_ExternalDictionary_Range.$type,
      min: isSet(object.min) ? globalThis.Number(object.min) : 0,
      max: isSet(object.max) ? globalThis.Number(object.max) : 0,
    };
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Range): unknown {
    const obj: any = {};
    if (message.min !== 0) {
      obj.min = Math.round(message.min);
    }
    if (message.max !== 0) {
      obj.max = Math.round(message.max);
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_ExternalDictionary_Range>): ClickhouseConfig_ExternalDictionary_Range {
    return ClickhouseConfig_ExternalDictionary_Range.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_ExternalDictionary_Range>,
  ): ClickhouseConfig_ExternalDictionary_Range {
    const message = createBaseClickhouseConfig_ExternalDictionary_Range();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_ExternalDictionary_Range.$type, ClickhouseConfig_ExternalDictionary_Range);

function createBaseClickhouseConfig_GraphiteRollup(): ClickhouseConfig_GraphiteRollup {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup", name: "", patterns: [] };
}

export const ClickhouseConfig_GraphiteRollup = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup" as const,

  encode(message: ClickhouseConfig_GraphiteRollup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.patterns) {
      ClickhouseConfig_GraphiteRollup_Pattern.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_GraphiteRollup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_GraphiteRollup();
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

          message.patterns.push(ClickhouseConfig_GraphiteRollup_Pattern.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_GraphiteRollup {
    return {
      $type: ClickhouseConfig_GraphiteRollup.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      patterns: globalThis.Array.isArray(object?.patterns)
        ? object.patterns.map((e: any) => ClickhouseConfig_GraphiteRollup_Pattern.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClickhouseConfig_GraphiteRollup): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.patterns?.length) {
      obj.patterns = message.patterns.map((e) => ClickhouseConfig_GraphiteRollup_Pattern.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_GraphiteRollup>): ClickhouseConfig_GraphiteRollup {
    return ClickhouseConfig_GraphiteRollup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfig_GraphiteRollup>): ClickhouseConfig_GraphiteRollup {
    const message = createBaseClickhouseConfig_GraphiteRollup();
    message.name = object.name ?? "";
    message.patterns = object.patterns?.map((e) => ClickhouseConfig_GraphiteRollup_Pattern.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_GraphiteRollup.$type, ClickhouseConfig_GraphiteRollup);

function createBaseClickhouseConfig_GraphiteRollup_Pattern(): ClickhouseConfig_GraphiteRollup_Pattern {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern",
    regexp: "",
    function: "",
    retention: [],
  };
}

export const ClickhouseConfig_GraphiteRollup_Pattern = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern" as const,

  encode(message: ClickhouseConfig_GraphiteRollup_Pattern, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regexp !== "") {
      writer.uint32(10).string(message.regexp);
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    for (const v of message.retention) {
      ClickhouseConfig_GraphiteRollup_Pattern_Retention.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_GraphiteRollup_Pattern {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_GraphiteRollup_Pattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.regexp = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.function = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.retention.push(ClickhouseConfig_GraphiteRollup_Pattern_Retention.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern {
    return {
      $type: ClickhouseConfig_GraphiteRollup_Pattern.$type,
      regexp: isSet(object.regexp) ? globalThis.String(object.regexp) : "",
      function: isSet(object.function) ? globalThis.String(object.function) : "",
      retention: globalThis.Array.isArray(object?.retention)
        ? object.retention.map((e: any) => ClickhouseConfig_GraphiteRollup_Pattern_Retention.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClickhouseConfig_GraphiteRollup_Pattern): unknown {
    const obj: any = {};
    if (message.regexp !== "") {
      obj.regexp = message.regexp;
    }
    if (message.function !== "") {
      obj.function = message.function;
    }
    if (message.retention?.length) {
      obj.retention = message.retention.map((e) => ClickhouseConfig_GraphiteRollup_Pattern_Retention.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern>): ClickhouseConfig_GraphiteRollup_Pattern {
    return ClickhouseConfig_GraphiteRollup_Pattern.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern>): ClickhouseConfig_GraphiteRollup_Pattern {
    const message = createBaseClickhouseConfig_GraphiteRollup_Pattern();
    message.regexp = object.regexp ?? "";
    message.function = object.function ?? "";
    message.retention =
      object.retention?.map((e) => ClickhouseConfig_GraphiteRollup_Pattern_Retention.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_GraphiteRollup_Pattern.$type, ClickhouseConfig_GraphiteRollup_Pattern);

function createBaseClickhouseConfig_GraphiteRollup_Pattern_Retention(): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention",
    age: 0,
    precision: 0,
  };
}

export const ClickhouseConfig_GraphiteRollup_Pattern_Retention = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention" as const,

  encode(
    message: ClickhouseConfig_GraphiteRollup_Pattern_Retention,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.age !== 0) {
      writer.uint32(8).int64(message.age);
    }
    if (message.precision !== 0) {
      writer.uint32(16).int64(message.precision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfig_GraphiteRollup_Pattern_Retention();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.age = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.precision = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    return {
      $type: ClickhouseConfig_GraphiteRollup_Pattern_Retention.$type,
      age: isSet(object.age) ? globalThis.Number(object.age) : 0,
      precision: isSet(object.precision) ? globalThis.Number(object.precision) : 0,
    };
  },

  toJSON(message: ClickhouseConfig_GraphiteRollup_Pattern_Retention): unknown {
    const obj: any = {};
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    if (message.precision !== 0) {
      obj.precision = Math.round(message.precision);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern_Retention>,
  ): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    return ClickhouseConfig_GraphiteRollup_Pattern_Retention.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern_Retention>,
  ): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    const message = createBaseClickhouseConfig_GraphiteRollup_Pattern_Retention();
    message.age = object.age ?? 0;
    message.precision = object.precision ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_GraphiteRollup_Pattern_Retention.$type,
  ClickhouseConfig_GraphiteRollup_Pattern_Retention,
);

function createBaseClickhouseConfigSet(): ClickhouseConfigSet {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const ClickhouseConfigSet = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet" as const,

  encode(message: ClickhouseConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      ClickhouseConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      ClickhouseConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      ClickhouseConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfigSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickhouseConfigSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = ClickhouseConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = ClickhouseConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = ClickhouseConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfigSet {
    return {
      $type: ClickhouseConfigSet.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? ClickhouseConfig.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? ClickhouseConfig.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? ClickhouseConfig.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: ClickhouseConfigSet): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = ClickhouseConfig.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = ClickhouseConfig.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = ClickhouseConfig.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<ClickhouseConfigSet>): ClickhouseConfigSet {
    return ClickhouseConfigSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClickhouseConfigSet>): ClickhouseConfigSet {
    const message = createBaseClickhouseConfigSet();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? ClickhouseConfig.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? ClickhouseConfig.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? ClickhouseConfig.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfigSet.$type, ClickhouseConfigSet);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
