/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

/**
 * A ClickHouse User resource. For more information, see
 * the [Developer's guide](/docs/managed-clickhouse/concepts).
 */
export interface User {
  $type: "yandex.cloud.mdb.clickhouse.v1.User";
  /** Name of the ClickHouse user. */
  name: string;
  /** ID of the ClickHouse cluster the user belongs to. */
  clusterId: string;
  /** Set of permissions granted to the user. */
  permissions: Permission[];
  settings?:
    | UserSettings
    | undefined;
  /** Set of quotas assigned to the user. */
  quotas: UserQuota[];
}

export interface Permission {
  $type: "yandex.cloud.mdb.clickhouse.v1.Permission";
  /** Name of the database that the permission grants access to. */
  databaseName: string;
}

export interface UserSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec";
  /** Name of the ClickHouse user. */
  name: string;
  /** Password of the ClickHouse user. */
  password: string;
  /** Set of permissions to grant to the user. If not set, it's granted permissions to access all databases. */
  permissions: Permission[];
  settings?:
    | UserSettings
    | undefined;
  /** Set of quotas assigned to the user. */
  quotas: UserQuota[];
}

/**
 * ClickHouse user settings. Supported settings are a limited subset of all settings
 * described in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/).
 */
export interface UserSettings {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings";
  /**
   * Restricts permissions for non-DDL queries. To restrict permissions for DDL queries, use [allow_ddl] instead.
   * * **0** (default)-no restrictions.
   * * **1**-only read data queries are allowed.
   * * **2**-read data and change settings queries are allowed.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/permissions-for-queries/#settings_readonly).
   */
  readonly?:
    | number
    | undefined;
  /**
   * Determines whether DDL queries are allowed (e.g., **CREATE**, **ALTER**, **RENAME**, etc).
   *
   * Default value: **true**.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/permissions-for-queries/#settings_allow_ddl).
   */
  allowDdl?:
    | boolean
    | undefined;
  /**
   * Enables [introspections functions](https://clickhouse.com/docs/en/sql-reference/functions/introspection) for query profiling.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-allow_introspection_functions).
   */
  allowIntrospectionFunctions?:
    | boolean
    | undefined;
  /**
   * Connection timeout in milliseconds.
   *
   * Value must be greater than **0** (default: **10000**, 10 seconds).
   */
  connectTimeout?:
    | number
    | undefined;
  /**
   * The timeout in milliseconds for connecting to a remote server for a Distributed table engine. Applies only if the cluster uses sharding and replication. If unsuccessful, several attempts are made to connect to various replicas.
   *
   * Default value: **50**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#connect-timeout-with-failover-ms).
   */
  connectTimeoutWithFailover?:
    | number
    | undefined;
  /**
   * Receive timeout in milliseconds.
   *
   * Value must be greater than **0** (default: **300000**, 300 seconds or 5 minutes).
   */
  receiveTimeout?:
    | number
    | undefined;
  /**
   * Send timeout in milliseconds.
   *
   * Value must be greater than **0** (default: **300000**, 300 seconds or 5 minutes).
   */
  sendTimeout?:
    | number
    | undefined;
  /**
   * Timeout (in seconds) between checks of execution speed. It is checked that execution speed is not less that specified in [min_execution_speed] parameter.
   *
   * Default value: **10**.
   */
  timeoutBeforeCheckingExecutionSpeed?:
    | number
    | undefined;
  /**
   * Enables or disables write quorum for ClickHouse cluster.
   * If the value is less than **2**, then write quorum is disabled, otherwise it is enabled.
   *
   * When used, write quorum guarantees that ClickHouse has written data to the quorum of **insert_quorum** replicas with no errors until the [insert_quorum_timeout] expires.
   * All replicas in the quorum are in the consistent state, meaning that they contain linearized data from the previous **INSERT** queries.
   * Employ write quorum, if you need the guarantees that the written data would not be lost in case of one or more replicas failure.
   *
   * You can use [select_sequential_consistency] setting to read the data written with write quorum.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-insert_quorum).
   */
  insertQuorum?:
    | number
    | undefined;
  /**
   * Quorum write timeout in milliseconds.
   *
   * If the write quorum is enabled in the cluster, this timeout expires and some data is not written to the [insert_quorum] replicas, then ClickHouse will abort the execution of **INSERT** query and return an error.
   * In this case, the client must send the query again to write the data block into the same or another replica.
   *
   * Minimum value: **1000**, 1 second (default: **60000**, 1 minute).
   */
  insertQuorumTimeout?:
    | number
    | undefined;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-insert_quorum_parallel). */
  insertQuorumParallel?:
    | boolean
    | undefined;
  /**
   * Enables the insertion of default values instead of NULL into columns with not nullable data type.
   *
   * Default value: **true**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#insert_null_as_default).
   */
  insertNullAsDefault?:
    | boolean
    | undefined;
  /**
   * Determines the behavior of **SELECT** queries from the replicated table: if enabled, ClickHouse will terminate a query with error message in case the replica does not have a chunk written with the quorum and will not read the parts that have not yet been written with the quorum.
   *
   * Default value: **false** (sequential consistency is disabled).
   */
  selectSequentialConsistency?:
    | boolean
    | undefined;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-deduplicate-blocks-in-dependent-materialized-views). */
  deduplicateBlocksInDependentMaterializedViews?:
    | boolean
    | undefined;
  /**
   * Wait mode for asynchronous actions in **ALTER** queries on replicated tables:
   *
   * * **0**-do not wait for replicas.
   * * **1**-only wait for own execution (default).
   * * **2**-wait for all replicas.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/sql-reference/statements/alter/#synchronicity-of-alter-queries).
   */
  replicationAlterPartitionsSync?:
    | number
    | undefined;
  /**
   * Max replica delay in milliseconds. If a replica lags more than the set value, this replica is not used and becomes a stale one.
   *
   * Minimum value: **1000**, 1 second (default: **300000**, 300 seconds or 5 minutes).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_replica_delay_for_distributed_queries).
   */
  maxReplicaDelayForDistributedQueries?:
    | number
    | undefined;
  /**
   * Enables or disables query forcing to a stale replica in case the actual data is unavailable.
   * If enabled, ClickHouse will choose the most up-to-date replica and force the query to use the data in this replica.
   * This setting can be used when doing **SELECT** query from a distributed table that points to replicated tables.
   *
   * Default value: **true** (query forcing is enabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-fallback_to_stale_replicas_for_distributed_queries).
   */
  fallbackToStaleReplicasForDistributedQueries?:
    | boolean
    | undefined;
  /**
   * Determine the behavior of distributed subqueries.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#distributed-product-mode).
   */
  distributedProductMode: UserSettings_DistributedProductMode;
  /**
   * Enables of disables memory saving mode when doing distributed aggregation.
   *
   * When ClickHouse works with a distributed query, external aggregation is done on remote servers.
   * Enable this setting to achieve a smaller memory footprint on the server that sourced such a distributed query.
   *
   * Default value: **false** (memory saving mode is disabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/sql-reference/statements/select/group-by/#select-group-by-in-external-memory).
   */
  distributedAggregationMemoryEfficient?:
    | boolean
    | undefined;
  /** Timeout for DDL queries, in milliseconds. */
  distributedDdlTaskTimeout?:
    | number
    | undefined;
  /**
   * Enables or disables silent skipping of unavailable shards.
   *
   * A shard is considered unavailable if all its replicas are also unavailable.
   *
   * Default value: **false** (silent skipping is disabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-skip_unavailable_shards).
   */
  skipUnavailableShards?:
    | boolean
    | undefined;
  /**
   * Enables or disables expression compilation.
   * If you execute a lot of queries that contain identical expressions, then enable this setting.
   * As a result, such queries may be executed faster due to use of compiled expressions.
   *
   * Use this setting in combination with [min_count_to_compile_expression] setting.
   *
   * Default value: **false** (expression compilation is disabled).
   */
  compileExpressions?:
    | boolean
    | undefined;
  /**
   * How many identical expressions ClickHouse has to encounter before they are compiled.
   *
   * Minimum value: **0** (default: **3**).
   *
   * For the **0** value compilation is synchronous: a query waits for expression compilation process to complete prior to continuing execution.
   * It is recommended to set this value only for testing purposes.
   *
   * For all other values, compilation is asynchronous: the compilation process executes in a separate thread.
   * When a compiled expression is ready, it will be used by ClickHouse for eligible queries, including the ones that are currently running.
   */
  minCountToCompileExpression?:
    | number
    | undefined;
  /**
   * The maximum block size for reading.
   *
   * Data in ClickHouse is organized and processed by blocks (block is a set of columns' parts).
   * The internal processing cycles for a single block are efficient enough, but there are noticeable expenditures on each block.
   *
   * This setting is a recommendation for size of block (in a count of rows) that should be loaded from tables.
   *
   * Value must be greater than **0** (default: **65536**).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#setting-max_block_size).
   */
  maxBlockSize?:
    | number
    | undefined;
  /**
   * Limits the minimum number of rows in a block to be inserted in a table by **INSERT** query.
   * Blocks that are smaller than the specified value, will be squashed together into the bigger blocks.
   *
   * Minimal value: **0**, block squashing is disabled (default: **1048576**).
   */
  minInsertBlockSizeRows?:
    | number
    | undefined;
  /**
   * Limits the minimum number of bytes in a block to be inserted in a table by **INSERT** query.
   * Blocks that are smaller than the specified value, will be squashed together into the bigger blocks.
   *
   * Minimal value: **0**, block squashing is disabled (default: **268435456**, 256 MB).
   */
  minInsertBlockSizeBytes?:
    | number
    | undefined;
  /**
   * Allows to form blocks of the specified size (in bytes) when inserting data in a table.
   * This setting has effect only if server is creating such blocks by itself.
   *
   * Value must be greater than **0** (default: **1048576**).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_insert_block_size).
   */
  maxInsertBlockSize?:
    | number
    | undefined;
  /**
   * Limits the minimum number of bytes to enable unbuffered direct reads from disk (Direct I/O).
   *
   * By default, ClickHouse does not read data directly from disk, but relies on the filesystem and its cache instead.
   * Such reading strategy is effective when the data volume is small.
   * If the amount of the data to read is huge, it is more effective to read directly from the disk, bypassing the filesystem cache.
   *
   * If the total amount of the data to read is greater than the value of this setting, then ClickHouse will fetch this data directly from the disk.
   *
   * Minimal value and default value: **0**, Direct I/O is disabled.
   */
  minBytesToUseDirectIo?:
    | number
    | undefined;
  /**
   * Determines whether to use the cache of uncompressed blocks, or not.
   * Using this cache can significantly reduce latency and increase the throughput when a huge amount of small queries is to be processed.
   * Enable this setting for the users who instantiates small queries frequently.
   *
   * This setting has effect only for tables of the MergeTree family.
   *
   * Default value: **false** (uncompressed cache is disabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#setting-use_uncompressed_cache).
   */
  useUncompressedCache?:
    | boolean
    | undefined;
  /**
   * Limits the maximum size in rows of the request that can use the cache of uncompressed data. The cache is not used for requests larger
   * than the specified value.
   *
   * Use this setting in combination with [use_uncompressed_cache] setting.
   *
   * Value must be greater than **0** (default: **128x8192**).
   */
  mergeTreeMaxRowsToUseCache?:
    | number
    | undefined;
  /**
   * Limits the maximum size in bytes of the request that can use the cache of uncompressed data. The cache is not used for requests larger
   * than the specified value.
   *
   * Use this setting in combination with [use_uncompressed_cache] setting.
   *
   * Value must be greater than **0** (default: **192x10x1024x1024**).
   */
  mergeTreeMaxBytesToUseCache?:
    | number
    | undefined;
  /**
   * Limits the minimum number of rows to be read from a file to enable concurrent read.
   * If the number of rows to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
   *
   * This setting has effect only for tables of the MergeTree family.
   *
   * Value must be greater than **0** (default: **20x8192**).
   */
  mergeTreeMinRowsForConcurrentRead?:
    | number
    | undefined;
  /**
   * Limits the number of bytes to be read from a file to enable concurrent read.
   * If the number of bytes to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
   *
   * This setting has effect only for tables of the MergeTree family.
   *
   * Value must be greater than **0** (default: **24x10x1024x1024**).
   */
  mergeTreeMinBytesForConcurrentRead?:
    | number
    | undefined;
  /**
   * Sets the threshold of RAM consumption (in bytes) after that the temporary data, collected during the **GROUP BY** operation, should be flushed to disk to limit the RAM comsumption.
   *
   * By default, aggregation is done by employing hash table that resides in RAM.
   * A query can result in aggregation of huge data volumes that can lead to memory exhaustion and abortion of the query (see the [max_memory_usage] setting).
   * For such queries, you can use this setting to force ClickHouse to do flushing and complete aggregation successfully.
   *
   * Minimal value and default value: **0**, **GROUP BY** in the external memory is disabled.
   *
   * When using aggregation in external memory, it is recommended to set the value of this setting twice as low as the [max_memory_usage] setting value (by default, the maximum memory usage is limited to ten gigabytes).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/sql-reference/statements/select/group-by/#select-group-by-in-external-memory).
   *
   * See also: the [distributed_aggregation_memory_efficient] setting.
   */
  maxBytesBeforeExternalGroupBy?:
    | number
    | undefined;
  /** This setting is equivalent of the [max_bytes_before_external_group_by] setting, except for it is for sort operation (**ORDER BY**), not aggregation. */
  maxBytesBeforeExternalSort?:
    | number
    | undefined;
  /**
   * Sets the threshold of the number of keys, after that the two-level aggregation should be used.
   *
   * Minimal value: **0**, threshold is not set (default: **10000**).
   */
  groupByTwoLevelThreshold?:
    | number
    | undefined;
  /**
   * Sets the threshold of the number of bytes, after that the two-level aggregation should be used.
   *
   * Minimal value: **0**, threshold is not set (default: **100000000**).
   */
  groupByTwoLevelThresholdBytes?:
    | number
    | undefined;
  /**
   * Sets the priority of a query.
   *
   * * **0**-priority is not used.
   * * **1**-the highest priority.
   * * and so on. The higher the number, the lower a query's priority.
   *
   * This setting should be set up for each query individually.
   *
   * If ClickHouse is working with the high-priority queries, and a low-priority query enters, then the low-priority query is paused until higher-priority queries are completed.
   *
   * Minimal value and default value: **0**, priority is not used.
   */
  priority?:
    | number
    | undefined;
  /**
   * Limits the maximum number of threads to process the request (setting does not take threads that read data from remote servers into account).
   *
   * This setting applies to threads that perform the same stages of the query processing pipeline in parallel.
   *
   * Minimal value and default value: **0** (the thread number is calculated automatically based on the number of physical CPU cores, no HyperThreading cores are taken into account).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_threads).
   */
  maxThreads?:
    | number
    | undefined;
  /**
   * Limits the maximum memory usage (in bytes) for processing of a single user's query on a single server.
   * This setting does not take server's free RAM amount or total RAM amount into account.
   *
   * This limitation is enforced for any user's single query on a single server.
   *
   * Minimal value: **0**, no limitation is set.
   * Value that is set in the ClickHouse default config file: **10737418240** (10 GB).
   *
   * If you use [max_bytes_before_external_group_by] or [max_bytes_before_external_sort] setting, then it is recommended to set their values twice as low as [max_memory_usage] setting value.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#settings_max_memory_usage).
   */
  maxMemoryUsage?:
    | number
    | undefined;
  /**
   * Limits the maximum memory usage (in bytes) for processing of user's queries on a single server.
   * This setting does not take server's free RAM amount or total RAM amount into account.
   *
   * This limitation is enforced for all queries that belong to one user and run simultaneously on a single server.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxMemoryUsageForUser?:
    | number
    | undefined;
  /**
   * The maximum speed of data exchange over the network in bytes per second for a query.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxNetworkBandwidth?:
    | number
    | undefined;
  /**
   * The maximum speed of data exchange over the network in bytes per second for all concurrently running user queries.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxNetworkBandwidthForUser?:
    | number
    | undefined;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/ru/operations/settings/query-complexity/#max-partitions-per-insert-block). */
  maxPartitionsPerInsertBlock?:
    | number
    | undefined;
  /**
   * The maximum number of concurrent requests per user.
   * Default value: 0 (no limit).
   */
  maxConcurrentQueriesForUser?:
    | number
    | undefined;
  /**
   * If enabled, query is not executed if the ClickHouse can't use index by date.
   * This setting has effect only for tables of the MergeTree family.
   *
   * Default value: **false** (setting is disabled, query executes even if ClickHouse can't use index by date).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-force_index_by_date).
   */
  forceIndexByDate?:
    | boolean
    | undefined;
  /**
   * If enabled, query is not executed if the ClickHouse can't use index by primary key.
   * This setting has effect only for tables of the MergeTree family.
   *
   * Default value: **false** (setting is disabled, query executes even if ClickHouse can't use index by primary key).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#force-primary-key).
   */
  forcePrimaryKey?:
    | boolean
    | undefined;
  /**
   * Limits the maximum number of rows that can be read from a table when running a query.
   *
   * Minimal value and default value: **0**, no limitation is set.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#max-rows-to-read).
   */
  maxRowsToRead?:
    | number
    | undefined;
  /**
   * Limits the maximum number of bytes (uncompressed data) that can be read from a table when running a query.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxBytesToRead?:
    | number
    | undefined;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while reading the data.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  readOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the maximum number of unique keys received from aggregation function.
   * This setting helps to reduce RAM consumption while doing aggregation.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxRowsToGroupBy?:
    | number
    | undefined;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing aggregation.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   * * **any**-perform approximate **GROUP BY** operation by continuing aggregation for the keys that got into the set, but don't add new keys to the set.
   */
  groupByOverflowMode: UserSettings_GroupByOverflowMode;
  /**
   * Limits the maximum number of rows that can be read from a table for sorting.
   * This setting helps to reduce RAM consumption.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxRowsToSort?:
    | number
    | undefined;
  /**
   * Limits the maximum number of bytes (uncompressed data) that can be read from a table for sorting.
   * This setting helps to reduce RAM consumption.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxBytesToSort?:
    | number
    | undefined;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while sorting.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  sortOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the number of rows in the result.
   * This limitation is also checked for subqueries and parts of distributed queries that run on remote servers.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxResultRows?:
    | number
    | undefined;
  /**
   * Limits the number of bytes in the result.
   * This limitation is also checked for subqueries and parts of distributed queries that run on remote servers.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxResultBytes?:
    | number
    | undefined;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while forming result.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  resultOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the maximum number of different rows when using **DISTINCT**.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxRowsInDistinct?:
    | number
    | undefined;
  /** Limits the maximum size of a hash table in bytes (uncompressed data) when using **DISTINCT**. */
  maxBytesInDistinct?:
    | number
    | undefined;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing **DISCTINCT**.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  distinctOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the maximum number of rows that can be passed to a remote server or saved in a temporary table when using **GLOBAL IN**.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxRowsToTransfer?:
    | number
    | undefined;
  /**
   * Limits the maximum number of bytes (uncompressed data) that can be passed to a remote server or saved in a temporary
   * table when using **GLOBAL IN**.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxBytesToTransfer?:
    | number
    | undefined;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing transfers.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  transferOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the maximum query execution time in milliseconds.
   * At this moment, this limitation is not checked when passing one of the sorting stages, as well as merging and finalizing aggregation funictions.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxExecutionTime?:
    | number
    | undefined;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) of execution time.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  timeoutOverflowMode: UserSettings_OverflowMode;
  /** Limit on the number of rows in the set resulting from the execution of the IN section. */
  maxRowsInSet?:
    | number
    | undefined;
  /** Limit on the number of bytes in the set resulting from the execution of the IN section. */
  maxBytesInSet?:
    | number
    | undefined;
  /**
   * Determine the behavior on exceeding max_rows_in_set or max_bytes_in_set limit.
   * Possible values: OVERFLOW_MODE_THROW, OVERFLOW_MODE_BREAK.
   */
  setOverflowMode: UserSettings_OverflowMode;
  /** Limit on maximum size of the hash table for JOIN, in rows. */
  maxRowsInJoin?:
    | number
    | undefined;
  /** Limit on maximum size of the hash table for JOIN, in bytes. */
  maxBytesInJoin?:
    | number
    | undefined;
  /**
   * Determine the behavior on exceeding max_rows_in_join or max_bytes_in_join limit.
   * Possible values: OVERFLOW_MODE_THROW, OVERFLOW_MODE_BREAK.
   */
  joinOverflowMode: UserSettings_OverflowMode;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-join_algorithm). */
  joinAlgorithm: UserSettings_JoinAlgorithm[];
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#any_join_distinct_right_table_keys). */
  anyJoinDistinctRightTableKeys?:
    | boolean
    | undefined;
  /**
   * Limits the maximum number of columns that can be read from a table in a single query.
   * If the query requires to read more columns to complete, then it will be aborted.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxColumnsToRead?:
    | number
    | undefined;
  /**
   * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, including constant columns.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxTemporaryColumns?:
    | number
    | undefined;
  /**
   * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, excluding constant columns.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxTemporaryNonConstColumns?:
    | number
    | undefined;
  /**
   * Limits the size of the part of a query that can be transferred to RAM for parsing with the SQL parser, in bytes.
   *
   * Value must be greater than **0** (default: **262144**).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_query_size).
   */
  maxQuerySize?:
    | number
    | undefined;
  /**
   * Limits the maximum depth of query syntax tree.
   *
   * Executing a big and complex query may result in building a syntax tree of enormous depth.
   * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
   *
   * For example, the **SELECT *** query may result in more complex and deeper syntax tree, compared to the **SELECT ... WHERE ...** query, containing constraints and conditions, in the most cases.
   * A user can be forced to construct more optimized queries, if this setting is used.
   *
   * Value must be greater than **0** (default: **1000**).
   * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#max-ast-depth).
   */
  maxAstDepth?:
    | number
    | undefined;
  /**
   * Limits the maximum size of query syntax tree in number of nodes.
   *
   * Executing a big and complex query may result in building a syntax tree of enormous size.
   * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
   *
   * Value must be greater than **0** (default: **50000**).
   * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#max-ast-elements).
   */
  maxAstElements?:
    | number
    | undefined;
  /**
   * Limits the maximum size of query syntax tree in number of nodes after expansion of aliases and the asterisk values.
   *
   * Executing a big and complex query may result in building a syntax tree of enormous size.
   * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
   *
   * Value must be greater than **0** (default: **500000**).
   * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
   */
  maxExpandedAstElements?:
    | number
    | undefined;
  /** Minimal execution speed in rows per second. */
  minExecutionSpeed?:
    | number
    | undefined;
  /** Minimal execution speed in bytes per second. */
  minExecutionSpeedBytes?:
    | number
    | undefined;
  /** Aggregate function to use for implementation of count(DISTINCT ...). */
  countDistinctImplementation: UserSettings_CountDistinctImplementation;
  /**
   * Enables or disables SQL parser if the fast stream parser cannot parse the data.
   *
   * Enable this setting, if the data that you want to insert into a table contains SQL expressions.
   *
   * For example, the stream parser is unable to parse a value that contains **now()** expression; therefore an **INSERT** query for this value will fail and no data will be inserted into a table.
   * With enabled SQL parser, this expression is parsed correctly: the **now()** expression will be parsed as SQL function, interpreted, and the current date and time will be inserted into the table as a result.
   *
   * This setting has effect only if you use [Values](https://clickhouse.com/docs/en/interfaces/formats/#data-format-values) format when inserting data.
   *
   * Default value: **true** (SQL parser is enabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-input_format_values_interpret_expressions).
   */
  inputFormatValuesInterpretExpressions?:
    | boolean
    | undefined;
  /**
   * Enables or disables replacing omitted input values with default values of the respective columns when performing **INSERT** queries.
   *
   * Default value: **true** (replacing is enabled).
   */
  inputFormatDefaultsForOmittedFields?:
    | boolean
    | undefined;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#input_format_null_as_default). */
  inputFormatNullAsDefault?:
    | boolean
    | undefined;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#date_time_input_format). */
  dateTimeInputFormat: UserSettings_DateTimeInputFormat;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#input_format_with_names_use_header). */
  inputFormatWithNamesUseHeader?:
    | boolean
    | undefined;
  /**
   * Enables quoting of 64-bit integers in JSON output format.
   *
   * If this setting is enabled, then 64-bit integers (**UInt64** and **Int64**) will be quoted when written to JSON output in order to maintain compatibility with the most of the JavaScript engines.
   * Otherwise, such integers will not be quoted.
   *
   * Default value: **false** (quoting 64-bit integers is disabled).
   */
  outputFormatJsonQuote64bitIntegers?:
    | boolean
    | undefined;
  /**
   * Enables special floating-point values (**+nan**, **-nan**, **+inf** and **-inf**) in JSON output format.
   *
   * Default value: **false** (special values do not present in output).
   */
  outputFormatJsonQuoteDenormals?:
    | boolean
    | undefined;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#date_time_output_format). */
  dateTimeOutputFormat: UserSettings_DateTimeOutputFormat;
  /**
   * Determines whether to use LowCardinality type in Native format.
   *
   * * **true** (default)-yes, use.
   * * **false**-convert LowCardinality columns to regular columns when doing **SELECT**, and convert regular columns to LowCardinality when doing **INSERT**.
   *
   * LowCardinality columns (aka sparse columns) store data in more effective way, compared to regular columns, by using hash tables.
   * If data to insert suits this storage format, ClickHouse will place them into LowCardinality column.
   *
   * If you use a third-party ClickHouse client that can't work with LowCardinality columns, then this client will not be able to correctly interpret the result of the query that asks for data stored in LowCardinality column.
   * Disable this setting to convert LowCardinality column to regular column when creating the result, so such clients will be able to process the result.
   *
   * Official ClickHouse client works with LowCardinality columns out-of-the-box.
   *
   * Default value: **true** (LowCardinality columns are used in Native format).
   */
  lowCardinalityAllowInNativeFormat?:
    | boolean
    | undefined;
  /**
   * Allows specifying **LowCardinality** modifier for types of small fixed size (8 or less) in CREATE TABLE statements. Enabling this may increase merge times and memory consumption.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#allow_suspicious_low_cardinality_types).
   */
  allowSuspiciousLowCardinalityTypes?:
    | boolean
    | undefined;
  /**
   * Enables returning of empty result when aggregating without keys (with **GROUP BY** operation absent) on empty set (e.g., **SELECT count(*) FROM table WHERE 0**).
   *
   * * **true**-ClickHouse will return an empty result for such queries.
   * * **false** (default)-ClickHouse will return a single-line result consisting of **NULL** values for aggregation functions, in accordance with SQL standard.
   */
  emptyResultForAggregationByEmptySet?:
    | boolean
    | undefined;
  /**
   * HTTP connection timeout, in milliseconds.
   *
   * Value must be greater than **0** (default: **1000**, 1 second).
   */
  httpConnectionTimeout?:
    | number
    | undefined;
  /**
   * HTTP receive timeout, in milliseconds.
   *
   * Value must be greater than **0** (default: **1800000**, 1800 seconds, 30 minutes).
   */
  httpReceiveTimeout?:
    | number
    | undefined;
  /**
   * HTTP send timeout, in milliseconds.
   *
   * Value must be greater than **0** (default: **1800000**, 1800 seconds, 30 minutes).
   */
  httpSendTimeout?:
    | number
    | undefined;
  /**
   * Enables or disables data compression in HTTP responses.
   *
   * By default, ClickHouse stores data compressed. When executing a query, its result is uncompressed.
   * Use this setting to command ClickHouse to compress the result when sending it via HTTP.
   *
   * Enable this setting and add the **Accept-Encoding: <compression method>** HTTP header in a HTTP request to force compression of HTTP response from ClickHouse.
   *
   * ClickHouse support the following compression methods: **gzip**, **br** and **deflate**.
   *
   * Default value: **false** (compression is disabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/interfaces/http/).
   */
  enableHttpCompression?:
    | boolean
    | undefined;
  /**
   * Enables progress notifications using **X-ClickHouse-Progress** HTTP header.
   *
   * Default value: **false** (notifications disabled).
   */
  sendProgressInHttpHeaders?:
    | boolean
    | undefined;
  /**
   * Minimum interval between progress notifications with **X-ClickHouse-Progress** HTTP header, in milliseconds.
   *
   * Value must be greater than **0** (default: **100**).
   */
  httpHeadersProgressInterval?:
    | number
    | undefined;
  /**
   * Adds CORS header in HTTP responses.
   *
   * Default value: **false** (header is not added).
   */
  addHttpCorsHeader?:
    | boolean
    | undefined;
  /**
   * Cancels HTTP read-only queries (e.g. SELECT) when a client closes the connection without waiting for the response.
   *
   * Default value: **false**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#cancel-http-readonly-queries-on-client-close).
   */
  cancelHttpReadonlyQueriesOnClientClose?:
    | boolean
    | undefined;
  /**
   * Limits the maximum number of HTTP GET redirect hops for [URL-engine](https://clickhouse.com/docs/en/engines/table-engines/special/url) tables.
   *
   * If the parameter is set to **0** (default), no hops is allowed.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#setting-max_http_get_redirects).
   */
  maxHttpGetRedirects?: number | undefined;
  joinedSubqueryRequiresAlias?: boolean | undefined;
  joinUseNulls?: boolean | undefined;
  transformNullIn?:
    | boolean
    | undefined;
  /** Quota accounting mode. Possible values: QUOTA_MODE_DEFAULT, QUOTA_MODE_KEYED and QUOTA_MODE_KEYED_BY_IP. */
  quotaMode: UserSettings_QuotaMode;
  /**
   * Sets the data format of a [nested](https://clickhouse.com/docs/en/sql-reference/data-types/nested-data-structures/nested) columns.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#flatten-nested).
   */
  flattenNested?:
    | boolean
    | undefined;
  /** Regular expression (for Regexp format) */
  formatRegexp: string;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#format_regexp_escaping_rule). */
  formatRegexpEscapingRule: UserSettings_FormatRegexpEscapingRule;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#format_regexp_skip_unmatched). */
  formatRegexpSkipUnmatched?:
    | boolean
    | undefined;
  /**
   * Enables asynchronous inserts.
   *
   * Disabled by default.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert).
   */
  asyncInsert?:
    | boolean
    | undefined;
  /**
   * The maximum number of threads for background data parsing and insertion.
   *
   * If the parameter is set to **0**, asynchronous insertions are disabled. Default value: **16**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert-threads).
   */
  asyncInsertThreads?:
    | number
    | undefined;
  /**
   * Enables waiting for processing of asynchronous insertion. If enabled, server returns OK only after the data is inserted.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#wait-for-async-insert).
   */
  waitForAsyncInsert?:
    | boolean
    | undefined;
  /**
   * The timeout (in seconds) for waiting for processing of asynchronous insertion.
   *
   * Default value: **120**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#wait-for-async-insert-timeout).
   */
  waitForAsyncInsertTimeout?:
    | number
    | undefined;
  /**
   * The maximum size of the unparsed data in bytes collected per query before being inserted.
   *
   * If the parameter is set to **0**, asynchronous insertions are disabled. Default value: **100000**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert-max-data-size).
   */
  asyncInsertMaxDataSize?:
    | number
    | undefined;
  /**
   * The maximum timeout in milliseconds since the first INSERT query before inserting collected data.
   *
   * If the parameter is set to **0**, the timeout is disabled. Default value: **200**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert-busy-timeout-ms).
   */
  asyncInsertBusyTimeout?:
    | number
    | undefined;
  /**
   * The maximum timeout in milliseconds since the last INSERT query before dumping collected data. If enabled, the settings prolongs the [async_insert_busy_timeout] with every INSERT query as long as [async_insert_max_data_size] is not exceeded.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert-stale-timeout-ms).
   */
  asyncInsertStaleTimeout?:
    | number
    | undefined;
  /**
   * Memory profiler step (in bytes).
   *
   * If the next query step requires more memory than this parameter specifies, the memory profiler collects the allocating stack trace. Values lower than a few megabytes slow down query processing.
   *
   * Default value: **4194304** (4 MB). Zero means disabled memory profiler.
   */
  memoryProfilerStep?:
    | number
    | undefined;
  /**
   * Collect random allocations and deallocations and write them into system.trace_log with 'MemorySample' trace_type. The probability is for every alloc/free regardless to the size of the allocation.
   *
   * Possible values: from **0** to **1**. Default: **0**.
   */
  memoryProfilerSampleProbability?:
    | number
    | undefined;
  /**
   * Sets the maximum number of parallel threads for the SELECT query data read phase with the FINAL modifier.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#max-final-threads).
   */
  maxFinalThreads?:
    | number
    | undefined;
  /**
   * Enables or disables order-preserving parallel parsing of data formats. Supported only for [TSV](https://clickhouse.com/docs/en/interfaces/formats#tabseparated), [TKSV](https://clickhouse.com/docs/en/interfaces/formats#tskv), [CSV](https://clickhouse.com/docs/en/interfaces/formats#csv) and [JSONEachRow](https://clickhouse.com/docs/en/interfaces/formats#jsoneachrow) formats.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#input-format-parallel-parsing)
   */
  inputFormatParallelParsing?:
    | boolean
    | undefined;
  /**
   * Enables or disables the insertion of JSON data with nested objects.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#input-format-parallel-parsing)
   */
  inputFormatImportNestedJson?:
    | boolean
    | undefined;
  /** Method of reading data from local filesystem, one of: read, pread, mmap, io_uring, pread_threadpool. The 'io_uring' method is experimental and does not work for Log, TinyLog, StripeLog, File, Set and Join, and other tables with append-able files in presence of concurrent reads and writes. */
  localFilesystemReadMethod: UserSettings_LocalFilesystemReadMethod;
  /**
   * The maximum size of the buffer to read from the filesystem.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/codebrowser/ClickHouse/src/Core/Settings.h.html#DB::SettingsTraits::Data::max_read_buffer_size)
   */
  maxReadBufferSize?:
    | number
    | undefined;
  /**
   * The setting sets the maximum number of retries for ClickHouse Keeper (or ZooKeeper) requests during insert into replicated MergeTree. Only Keeper requests which failed due to network error, Keeper session timeout, or request timeout are considered for retries.
   * Default: 20 from 23.2, 0(disabled) before
   * Min_version: 22.11
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#insert_keeper_max_retries)
   */
  insertKeeperMaxRetries?:
    | number
    | undefined;
  /**
   * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running user queries. Zero means unlimited.
   * Default: 0 - unlimited
   * Min_version: 22.10
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity#settings_max_temporary_data_on_disk_size_for_user)
   */
  maxTemporaryDataOnDiskSizeForUser?:
    | number
    | undefined;
  /**
   * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running queries. Zero means unlimited.
   * Default: 0 - unlimited
   * Min_version: 22.10
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity#settings_max_temporary_data_on_disk_size_for_query)
   */
  maxTemporaryDataOnDiskSizeForQuery?:
    | number
    | undefined;
  /**
   * Limits maximum recursion depth in the recursive descent parser. Allows controlling the stack size.
   * Default: 1000
   * Special: 0 - unlimited
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#max_parser_depth)
   */
  maxParserDepth?:
    | number
    | undefined;
  /**
   * Method of reading data from remote filesystem, one of: read, threadpool.
   * Default: read
   * Min_version: 21.11
   * See in-depth description in [ClickHouse GitHub](https://github.com/ClickHouse/ClickHouse/blob/f9558345e886876b9132d9c018e357f7fa9b22a3/src/Core/Settings.h#L660)
   */
  remoteFilesystemReadMethod: UserSettings_RemoteFilesystemReadMethod;
  /**
   * It represents soft memory limit in case when hard limit is reached on user level. This value is used to compute overcommit ratio for the query. Zero means skip the query.
   * Default: 1GiB
   * Min_version: 22.5
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#memory_overcommit_ratio_denominator)
   */
  memoryOvercommitRatioDenominator?:
    | number
    | undefined;
  /**
   * It represents soft memory limit in case when hard limit is reached on global level. This value is used to compute overcommit ratio for the query. Zero means skip the query.
   * Default: 1GiB
   * Min_version: 22.5
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#memory_overcommit_ratio_denominator_for_user)
   */
  memoryOvercommitRatioDenominatorForUser?:
    | number
    | undefined;
  /**
   * Maximum time thread will wait for memory to be freed in the case of memory overcommit on a user level. If the timeout is reached and memory is not freed, an exception is thrown.
   * Default: 5000000
   * Min_version: 22.5
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#memory_usage_overcommit_max_wait_microseconds)
   */
  memoryUsageOvercommitMaxWaitMicroseconds?:
    | number
    | undefined;
  /**
   * The setting is deprecated and has no effect.
   *
   * @deprecated
   */
  compile?:
    | boolean
    | undefined;
  /**
   * The setting is deprecated and has no effect.
   *
   * @deprecated
   */
  minCountToCompile?: number | undefined;
}

export enum UserSettings_OverflowMode {
  OVERFLOW_MODE_UNSPECIFIED = 0,
  OVERFLOW_MODE_THROW = 1,
  OVERFLOW_MODE_BREAK = 2,
  UNRECOGNIZED = -1,
}

export function userSettings_OverflowModeFromJSON(object: any): UserSettings_OverflowMode {
  switch (object) {
    case 0:
    case "OVERFLOW_MODE_UNSPECIFIED":
      return UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED;
    case 1:
    case "OVERFLOW_MODE_THROW":
      return UserSettings_OverflowMode.OVERFLOW_MODE_THROW;
    case 2:
    case "OVERFLOW_MODE_BREAK":
      return UserSettings_OverflowMode.OVERFLOW_MODE_BREAK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_OverflowMode.UNRECOGNIZED;
  }
}

export function userSettings_OverflowModeToJSON(object: UserSettings_OverflowMode): string {
  switch (object) {
    case UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED:
      return "OVERFLOW_MODE_UNSPECIFIED";
    case UserSettings_OverflowMode.OVERFLOW_MODE_THROW:
      return "OVERFLOW_MODE_THROW";
    case UserSettings_OverflowMode.OVERFLOW_MODE_BREAK:
      return "OVERFLOW_MODE_BREAK";
    case UserSettings_OverflowMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_GroupByOverflowMode {
  GROUP_BY_OVERFLOW_MODE_UNSPECIFIED = 0,
  GROUP_BY_OVERFLOW_MODE_THROW = 1,
  GROUP_BY_OVERFLOW_MODE_BREAK = 2,
  GROUP_BY_OVERFLOW_MODE_ANY = 3,
  UNRECOGNIZED = -1,
}

export function userSettings_GroupByOverflowModeFromJSON(object: any): UserSettings_GroupByOverflowMode {
  switch (object) {
    case 0:
    case "GROUP_BY_OVERFLOW_MODE_UNSPECIFIED":
      return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED;
    case 1:
    case "GROUP_BY_OVERFLOW_MODE_THROW":
      return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW;
    case 2:
    case "GROUP_BY_OVERFLOW_MODE_BREAK":
      return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK;
    case 3:
    case "GROUP_BY_OVERFLOW_MODE_ANY":
      return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_GroupByOverflowMode.UNRECOGNIZED;
  }
}

export function userSettings_GroupByOverflowModeToJSON(object: UserSettings_GroupByOverflowMode): string {
  switch (object) {
    case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED:
      return "GROUP_BY_OVERFLOW_MODE_UNSPECIFIED";
    case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW:
      return "GROUP_BY_OVERFLOW_MODE_THROW";
    case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK:
      return "GROUP_BY_OVERFLOW_MODE_BREAK";
    case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY:
      return "GROUP_BY_OVERFLOW_MODE_ANY";
    case UserSettings_GroupByOverflowMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_DistributedProductMode {
  DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED = 0,
  /** DISTRIBUTED_PRODUCT_MODE_DENY - Default value. Prohibits using these types of subqueries (returns the "Double-distributed in/JOIN subqueries is denied" exception). */
  DISTRIBUTED_PRODUCT_MODE_DENY = 1,
  /** DISTRIBUTED_PRODUCT_MODE_LOCAL - Replaces the database and table in the subquery with local ones for the destination server (shard), leaving the normal IN/JOIN. */
  DISTRIBUTED_PRODUCT_MODE_LOCAL = 2,
  /** DISTRIBUTED_PRODUCT_MODE_GLOBAL - Replaces the IN/JOIN query with GLOBAL IN/GLOBAL JOIN. */
  DISTRIBUTED_PRODUCT_MODE_GLOBAL = 3,
  /** DISTRIBUTED_PRODUCT_MODE_ALLOW - Allows the use of these types of subqueries. */
  DISTRIBUTED_PRODUCT_MODE_ALLOW = 4,
  UNRECOGNIZED = -1,
}

export function userSettings_DistributedProductModeFromJSON(object: any): UserSettings_DistributedProductMode {
  switch (object) {
    case 0:
    case "DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED;
    case 1:
    case "DISTRIBUTED_PRODUCT_MODE_DENY":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY;
    case 2:
    case "DISTRIBUTED_PRODUCT_MODE_LOCAL":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL;
    case 3:
    case "DISTRIBUTED_PRODUCT_MODE_GLOBAL":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL;
    case 4:
    case "DISTRIBUTED_PRODUCT_MODE_ALLOW":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_DistributedProductMode.UNRECOGNIZED;
  }
}

export function userSettings_DistributedProductModeToJSON(object: UserSettings_DistributedProductMode): string {
  switch (object) {
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED:
      return "DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED";
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY:
      return "DISTRIBUTED_PRODUCT_MODE_DENY";
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL:
      return "DISTRIBUTED_PRODUCT_MODE_LOCAL";
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL:
      return "DISTRIBUTED_PRODUCT_MODE_GLOBAL";
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW:
      return "DISTRIBUTED_PRODUCT_MODE_ALLOW";
    case UserSettings_DistributedProductMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_QuotaMode {
  QUOTA_MODE_UNSPECIFIED = 0,
  QUOTA_MODE_DEFAULT = 1,
  QUOTA_MODE_KEYED = 2,
  QUOTA_MODE_KEYED_BY_IP = 3,
  UNRECOGNIZED = -1,
}

export function userSettings_QuotaModeFromJSON(object: any): UserSettings_QuotaMode {
  switch (object) {
    case 0:
    case "QUOTA_MODE_UNSPECIFIED":
      return UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED;
    case 1:
    case "QUOTA_MODE_DEFAULT":
      return UserSettings_QuotaMode.QUOTA_MODE_DEFAULT;
    case 2:
    case "QUOTA_MODE_KEYED":
      return UserSettings_QuotaMode.QUOTA_MODE_KEYED;
    case 3:
    case "QUOTA_MODE_KEYED_BY_IP":
      return UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_QuotaMode.UNRECOGNIZED;
  }
}

export function userSettings_QuotaModeToJSON(object: UserSettings_QuotaMode): string {
  switch (object) {
    case UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED:
      return "QUOTA_MODE_UNSPECIFIED";
    case UserSettings_QuotaMode.QUOTA_MODE_DEFAULT:
      return "QUOTA_MODE_DEFAULT";
    case UserSettings_QuotaMode.QUOTA_MODE_KEYED:
      return "QUOTA_MODE_KEYED";
    case UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP:
      return "QUOTA_MODE_KEYED_BY_IP";
    case UserSettings_QuotaMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_CountDistinctImplementation {
  COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED = 0,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ = 1,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED = 2,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64 = 3,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12 = 4,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT = 5,
  UNRECOGNIZED = -1,
}

export function userSettings_CountDistinctImplementationFromJSON(
  object: any,
): UserSettings_CountDistinctImplementation {
  switch (object) {
    case 0:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED;
    case 1:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ;
    case 2:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED;
    case 3:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64;
    case 4:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12;
    case 5:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_CountDistinctImplementation.UNRECOGNIZED;
  }
}

export function userSettings_CountDistinctImplementationToJSON(
  object: UserSettings_CountDistinctImplementation,
): string {
  switch (object) {
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT";
    case UserSettings_CountDistinctImplementation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_JoinAlgorithm {
  JOIN_ALGORITHM_UNSPECIFIED = 0,
  JOIN_ALGORITHM_HASH = 1,
  JOIN_ALGORITHM_PARALLEL_HASH = 2,
  JOIN_ALGORITHM_PARTIAL_MERGE = 3,
  JOIN_ALGORITHM_DIRECT = 4,
  JOIN_ALGORITHM_AUTO = 5,
  JOIN_ALGORITHM_FULL_SORTING_MERGE = 6,
  JOIN_ALGORITHM_PREFER_PARTIAL_MERGE = 7,
  UNRECOGNIZED = -1,
}

export function userSettings_JoinAlgorithmFromJSON(object: any): UserSettings_JoinAlgorithm {
  switch (object) {
    case 0:
    case "JOIN_ALGORITHM_UNSPECIFIED":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_UNSPECIFIED;
    case 1:
    case "JOIN_ALGORITHM_HASH":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_HASH;
    case 2:
    case "JOIN_ALGORITHM_PARALLEL_HASH":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARALLEL_HASH;
    case 3:
    case "JOIN_ALGORITHM_PARTIAL_MERGE":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARTIAL_MERGE;
    case 4:
    case "JOIN_ALGORITHM_DIRECT":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_DIRECT;
    case 5:
    case "JOIN_ALGORITHM_AUTO":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_AUTO;
    case 6:
    case "JOIN_ALGORITHM_FULL_SORTING_MERGE":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_FULL_SORTING_MERGE;
    case 7:
    case "JOIN_ALGORITHM_PREFER_PARTIAL_MERGE":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PREFER_PARTIAL_MERGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_JoinAlgorithm.UNRECOGNIZED;
  }
}

export function userSettings_JoinAlgorithmToJSON(object: UserSettings_JoinAlgorithm): string {
  switch (object) {
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_UNSPECIFIED:
      return "JOIN_ALGORITHM_UNSPECIFIED";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_HASH:
      return "JOIN_ALGORITHM_HASH";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARALLEL_HASH:
      return "JOIN_ALGORITHM_PARALLEL_HASH";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARTIAL_MERGE:
      return "JOIN_ALGORITHM_PARTIAL_MERGE";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_DIRECT:
      return "JOIN_ALGORITHM_DIRECT";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_AUTO:
      return "JOIN_ALGORITHM_AUTO";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_FULL_SORTING_MERGE:
      return "JOIN_ALGORITHM_FULL_SORTING_MERGE";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PREFER_PARTIAL_MERGE:
      return "JOIN_ALGORITHM_PREFER_PARTIAL_MERGE";
    case UserSettings_JoinAlgorithm.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_FormatRegexpEscapingRule {
  FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED = 0,
  FORMAT_REGEXP_ESCAPING_RULE_ESCAPED = 1,
  FORMAT_REGEXP_ESCAPING_RULE_QUOTED = 2,
  FORMAT_REGEXP_ESCAPING_RULE_CSV = 3,
  FORMAT_REGEXP_ESCAPING_RULE_JSON = 4,
  FORMAT_REGEXP_ESCAPING_RULE_XML = 5,
  FORMAT_REGEXP_ESCAPING_RULE_RAW = 6,
  UNRECOGNIZED = -1,
}

export function userSettings_FormatRegexpEscapingRuleFromJSON(object: any): UserSettings_FormatRegexpEscapingRule {
  switch (object) {
    case 0:
    case "FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED;
    case 1:
    case "FORMAT_REGEXP_ESCAPING_RULE_ESCAPED":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_ESCAPED;
    case 2:
    case "FORMAT_REGEXP_ESCAPING_RULE_QUOTED":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_QUOTED;
    case 3:
    case "FORMAT_REGEXP_ESCAPING_RULE_CSV":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_CSV;
    case 4:
    case "FORMAT_REGEXP_ESCAPING_RULE_JSON":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_JSON;
    case 5:
    case "FORMAT_REGEXP_ESCAPING_RULE_XML":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_XML;
    case 6:
    case "FORMAT_REGEXP_ESCAPING_RULE_RAW":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_RAW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_FormatRegexpEscapingRule.UNRECOGNIZED;
  }
}

export function userSettings_FormatRegexpEscapingRuleToJSON(object: UserSettings_FormatRegexpEscapingRule): string {
  switch (object) {
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED:
      return "FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_ESCAPED:
      return "FORMAT_REGEXP_ESCAPING_RULE_ESCAPED";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_QUOTED:
      return "FORMAT_REGEXP_ESCAPING_RULE_QUOTED";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_CSV:
      return "FORMAT_REGEXP_ESCAPING_RULE_CSV";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_JSON:
      return "FORMAT_REGEXP_ESCAPING_RULE_JSON";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_XML:
      return "FORMAT_REGEXP_ESCAPING_RULE_XML";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_RAW:
      return "FORMAT_REGEXP_ESCAPING_RULE_RAW";
    case UserSettings_FormatRegexpEscapingRule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_DateTimeInputFormat {
  DATE_TIME_INPUT_FORMAT_UNSPECIFIED = 0,
  DATE_TIME_INPUT_FORMAT_BEST_EFFORT = 1,
  DATE_TIME_INPUT_FORMAT_BASIC = 2,
  DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US = 3,
  UNRECOGNIZED = -1,
}

export function userSettings_DateTimeInputFormatFromJSON(object: any): UserSettings_DateTimeInputFormat {
  switch (object) {
    case 0:
    case "DATE_TIME_INPUT_FORMAT_UNSPECIFIED":
      return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_UNSPECIFIED;
    case 1:
    case "DATE_TIME_INPUT_FORMAT_BEST_EFFORT":
      return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT;
    case 2:
    case "DATE_TIME_INPUT_FORMAT_BASIC":
      return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BASIC;
    case 3:
    case "DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US":
      return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_DateTimeInputFormat.UNRECOGNIZED;
  }
}

export function userSettings_DateTimeInputFormatToJSON(object: UserSettings_DateTimeInputFormat): string {
  switch (object) {
    case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_UNSPECIFIED:
      return "DATE_TIME_INPUT_FORMAT_UNSPECIFIED";
    case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT:
      return "DATE_TIME_INPUT_FORMAT_BEST_EFFORT";
    case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BASIC:
      return "DATE_TIME_INPUT_FORMAT_BASIC";
    case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US:
      return "DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US";
    case UserSettings_DateTimeInputFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_DateTimeOutputFormat {
  DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED = 0,
  DATE_TIME_OUTPUT_FORMAT_SIMPLE = 1,
  DATE_TIME_OUTPUT_FORMAT_ISO = 2,
  DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP = 3,
  UNRECOGNIZED = -1,
}

export function userSettings_DateTimeOutputFormatFromJSON(object: any): UserSettings_DateTimeOutputFormat {
  switch (object) {
    case 0:
    case "DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED":
      return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED;
    case 1:
    case "DATE_TIME_OUTPUT_FORMAT_SIMPLE":
      return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_SIMPLE;
    case 2:
    case "DATE_TIME_OUTPUT_FORMAT_ISO":
      return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_ISO;
    case 3:
    case "DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP":
      return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_DateTimeOutputFormat.UNRECOGNIZED;
  }
}

export function userSettings_DateTimeOutputFormatToJSON(object: UserSettings_DateTimeOutputFormat): string {
  switch (object) {
    case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED:
      return "DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED";
    case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_SIMPLE:
      return "DATE_TIME_OUTPUT_FORMAT_SIMPLE";
    case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_ISO:
      return "DATE_TIME_OUTPUT_FORMAT_ISO";
    case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP:
      return "DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP";
    case UserSettings_DateTimeOutputFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_LocalFilesystemReadMethod {
  LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED = 0,
  LOCAL_FILESYSTEM_READ_METHOD_READ = 1,
  LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL = 2,
  LOCAL_FILESYSTEM_READ_METHOD_PREAD = 3,
  LOCAL_FILESYSTEM_READ_METHOD_NMAP = 4,
  UNRECOGNIZED = -1,
}

export function userSettings_LocalFilesystemReadMethodFromJSON(object: any): UserSettings_LocalFilesystemReadMethod {
  switch (object) {
    case 0:
    case "LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED;
    case 1:
    case "LOCAL_FILESYSTEM_READ_METHOD_READ":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_READ;
    case 2:
    case "LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL;
    case 3:
    case "LOCAL_FILESYSTEM_READ_METHOD_PREAD":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD;
    case 4:
    case "LOCAL_FILESYSTEM_READ_METHOD_NMAP":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_NMAP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_LocalFilesystemReadMethod.UNRECOGNIZED;
  }
}

export function userSettings_LocalFilesystemReadMethodToJSON(object: UserSettings_LocalFilesystemReadMethod): string {
  switch (object) {
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED:
      return "LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED";
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_READ:
      return "LOCAL_FILESYSTEM_READ_METHOD_READ";
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL:
      return "LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL";
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD:
      return "LOCAL_FILESYSTEM_READ_METHOD_PREAD";
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_NMAP:
      return "LOCAL_FILESYSTEM_READ_METHOD_NMAP";
    case UserSettings_LocalFilesystemReadMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserSettings_RemoteFilesystemReadMethod {
  REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED = 0,
  REMOTE_FILESYSTEM_READ_METHOD_READ = 1,
  REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL = 2,
  UNRECOGNIZED = -1,
}

export function userSettings_RemoteFilesystemReadMethodFromJSON(object: any): UserSettings_RemoteFilesystemReadMethod {
  switch (object) {
    case 0:
    case "REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED":
      return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED;
    case 1:
    case "REMOTE_FILESYSTEM_READ_METHOD_READ":
      return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_READ;
    case 2:
    case "REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL":
      return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_RemoteFilesystemReadMethod.UNRECOGNIZED;
  }
}

export function userSettings_RemoteFilesystemReadMethodToJSON(object: UserSettings_RemoteFilesystemReadMethod): string {
  switch (object) {
    case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED:
      return "REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED";
    case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_READ:
      return "REMOTE_FILESYSTEM_READ_METHOD_READ";
    case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL:
      return "REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL";
    case UserSettings_RemoteFilesystemReadMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * ClickHouse quota representation. Each quota associated with an user and limits it resource usage for an interval.
 * See in-depth description [ClickHouse documentation](https://clickhouse.com/docs/en/operations/quotas/).
 */
export interface UserQuota {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota";
  /**
   * Duration of interval for quota in milliseconds.
   * Minimal value is 1 second.
   */
  intervalDuration?:
    | number
    | undefined;
  /**
   * The total number of queries.
   * 0 - unlimited.
   */
  queries?:
    | number
    | undefined;
  /**
   * The number of queries that threw exception.
   * 0 - unlimited.
   */
  errors?:
    | number
    | undefined;
  /**
   * The total number of rows given as the result..
   * 0 - unlimited.
   */
  resultRows?:
    | number
    | undefined;
  /**
   * The total number of source rows read from tables for running the query, on all remote servers.
   * 0 - unlimited.
   */
  readRows?:
    | number
    | undefined;
  /**
   * The total query execution time, in milliseconds (wall time).
   * 0 - unlimited.
   */
  executionTime?: number | undefined;
}

function createBaseUser(): User {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.User",
    name: "",
    clusterId: "",
    permissions: [],
    settings: undefined,
    quotas: [],
  };
}

export const User = {
  $type: "yandex.cloud.mdb.clickhouse.v1.User" as const,

  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.quotas) {
      UserQuota.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.permissions.push(Permission.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.settings = UserSettings.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quotas.push(UserQuota.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      $type: User.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => Permission.fromJSON(e))
        : [],
      settings: isSet(object.settings) ? UserSettings.fromJSON(object.settings) : undefined,
      quotas: globalThis.Array.isArray(object?.quotas) ? object.quotas.map((e: any) => UserQuota.fromJSON(e)) : [],
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    if (message.settings !== undefined) {
      obj.settings = UserSettings.toJSON(message.settings);
    }
    if (message.quotas?.length) {
      obj.quotas = message.quotas.map((e) => UserQuota.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? UserSettings.fromPartial(object.settings)
      : undefined;
    message.quotas = object.quotas?.map((e) => UserQuota.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(User.$type, User);

function createBasePermission(): Permission {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.Permission", databaseName: "" };
}

export const Permission = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Permission" as const,

  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseName !== "") {
      writer.uint32(10).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permission {
    return {
      $type: Permission.$type,
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create(base?: DeepPartial<Permission>): Permission {
    return Permission.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Permission>): Permission {
    const message = createBasePermission();
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(Permission.$type, Permission);

function createBaseUserSpec(): UserSpec {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec",
    name: "",
    password: "",
    permissions: [],
    settings: undefined,
    quotas: [],
  };
}

export const UserSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec" as const,

  encode(message: UserSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.quotas) {
      UserQuota.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSpec();
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

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permissions.push(Permission.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.settings = UserSettings.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quotas.push(UserQuota.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSpec {
    return {
      $type: UserSpec.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => Permission.fromJSON(e))
        : [],
      settings: isSet(object.settings) ? UserSettings.fromJSON(object.settings) : undefined,
      quotas: globalThis.Array.isArray(object?.quotas) ? object.quotas.map((e: any) => UserQuota.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    if (message.settings !== undefined) {
      obj.settings = UserSettings.toJSON(message.settings);
    }
    if (message.quotas?.length) {
      obj.quotas = message.quotas.map((e) => UserQuota.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UserSpec>): UserSpec {
    return UserSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserSpec>): UserSpec {
    const message = createBaseUserSpec();
    message.name = object.name ?? "";
    message.password = object.password ?? "";
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? UserSettings.fromPartial(object.settings)
      : undefined;
    message.quotas = object.quotas?.map((e) => UserQuota.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UserSpec.$type, UserSpec);

function createBaseUserSettings(): UserSettings {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings",
    readonly: undefined,
    allowDdl: undefined,
    allowIntrospectionFunctions: undefined,
    connectTimeout: undefined,
    connectTimeoutWithFailover: undefined,
    receiveTimeout: undefined,
    sendTimeout: undefined,
    timeoutBeforeCheckingExecutionSpeed: undefined,
    insertQuorum: undefined,
    insertQuorumTimeout: undefined,
    insertQuorumParallel: undefined,
    insertNullAsDefault: undefined,
    selectSequentialConsistency: undefined,
    deduplicateBlocksInDependentMaterializedViews: undefined,
    replicationAlterPartitionsSync: undefined,
    maxReplicaDelayForDistributedQueries: undefined,
    fallbackToStaleReplicasForDistributedQueries: undefined,
    distributedProductMode: 0,
    distributedAggregationMemoryEfficient: undefined,
    distributedDdlTaskTimeout: undefined,
    skipUnavailableShards: undefined,
    compileExpressions: undefined,
    minCountToCompileExpression: undefined,
    maxBlockSize: undefined,
    minInsertBlockSizeRows: undefined,
    minInsertBlockSizeBytes: undefined,
    maxInsertBlockSize: undefined,
    minBytesToUseDirectIo: undefined,
    useUncompressedCache: undefined,
    mergeTreeMaxRowsToUseCache: undefined,
    mergeTreeMaxBytesToUseCache: undefined,
    mergeTreeMinRowsForConcurrentRead: undefined,
    mergeTreeMinBytesForConcurrentRead: undefined,
    maxBytesBeforeExternalGroupBy: undefined,
    maxBytesBeforeExternalSort: undefined,
    groupByTwoLevelThreshold: undefined,
    groupByTwoLevelThresholdBytes: undefined,
    priority: undefined,
    maxThreads: undefined,
    maxMemoryUsage: undefined,
    maxMemoryUsageForUser: undefined,
    maxNetworkBandwidth: undefined,
    maxNetworkBandwidthForUser: undefined,
    maxPartitionsPerInsertBlock: undefined,
    maxConcurrentQueriesForUser: undefined,
    forceIndexByDate: undefined,
    forcePrimaryKey: undefined,
    maxRowsToRead: undefined,
    maxBytesToRead: undefined,
    readOverflowMode: 0,
    maxRowsToGroupBy: undefined,
    groupByOverflowMode: 0,
    maxRowsToSort: undefined,
    maxBytesToSort: undefined,
    sortOverflowMode: 0,
    maxResultRows: undefined,
    maxResultBytes: undefined,
    resultOverflowMode: 0,
    maxRowsInDistinct: undefined,
    maxBytesInDistinct: undefined,
    distinctOverflowMode: 0,
    maxRowsToTransfer: undefined,
    maxBytesToTransfer: undefined,
    transferOverflowMode: 0,
    maxExecutionTime: undefined,
    timeoutOverflowMode: 0,
    maxRowsInSet: undefined,
    maxBytesInSet: undefined,
    setOverflowMode: 0,
    maxRowsInJoin: undefined,
    maxBytesInJoin: undefined,
    joinOverflowMode: 0,
    joinAlgorithm: [],
    anyJoinDistinctRightTableKeys: undefined,
    maxColumnsToRead: undefined,
    maxTemporaryColumns: undefined,
    maxTemporaryNonConstColumns: undefined,
    maxQuerySize: undefined,
    maxAstDepth: undefined,
    maxAstElements: undefined,
    maxExpandedAstElements: undefined,
    minExecutionSpeed: undefined,
    minExecutionSpeedBytes: undefined,
    countDistinctImplementation: 0,
    inputFormatValuesInterpretExpressions: undefined,
    inputFormatDefaultsForOmittedFields: undefined,
    inputFormatNullAsDefault: undefined,
    dateTimeInputFormat: 0,
    inputFormatWithNamesUseHeader: undefined,
    outputFormatJsonQuote64bitIntegers: undefined,
    outputFormatJsonQuoteDenormals: undefined,
    dateTimeOutputFormat: 0,
    lowCardinalityAllowInNativeFormat: undefined,
    allowSuspiciousLowCardinalityTypes: undefined,
    emptyResultForAggregationByEmptySet: undefined,
    httpConnectionTimeout: undefined,
    httpReceiveTimeout: undefined,
    httpSendTimeout: undefined,
    enableHttpCompression: undefined,
    sendProgressInHttpHeaders: undefined,
    httpHeadersProgressInterval: undefined,
    addHttpCorsHeader: undefined,
    cancelHttpReadonlyQueriesOnClientClose: undefined,
    maxHttpGetRedirects: undefined,
    joinedSubqueryRequiresAlias: undefined,
    joinUseNulls: undefined,
    transformNullIn: undefined,
    quotaMode: 0,
    flattenNested: undefined,
    formatRegexp: "",
    formatRegexpEscapingRule: 0,
    formatRegexpSkipUnmatched: undefined,
    asyncInsert: undefined,
    asyncInsertThreads: undefined,
    waitForAsyncInsert: undefined,
    waitForAsyncInsertTimeout: undefined,
    asyncInsertMaxDataSize: undefined,
    asyncInsertBusyTimeout: undefined,
    asyncInsertStaleTimeout: undefined,
    memoryProfilerStep: undefined,
    memoryProfilerSampleProbability: undefined,
    maxFinalThreads: undefined,
    inputFormatParallelParsing: undefined,
    inputFormatImportNestedJson: undefined,
    localFilesystemReadMethod: 0,
    maxReadBufferSize: undefined,
    insertKeeperMaxRetries: undefined,
    maxTemporaryDataOnDiskSizeForUser: undefined,
    maxTemporaryDataOnDiskSizeForQuery: undefined,
    maxParserDepth: undefined,
    remoteFilesystemReadMethod: 0,
    memoryOvercommitRatioDenominator: undefined,
    memoryOvercommitRatioDenominatorForUser: undefined,
    memoryUsageOvercommitMaxWaitMicroseconds: undefined,
    compile: undefined,
    minCountToCompile: undefined,
  };
}

export const UserSettings = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings" as const,

  encode(message: UserSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.readonly !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.readonly! }, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.allowDdl !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.allowDdl! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.allowIntrospectionFunctions !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.allowIntrospectionFunctions! },
        writer.uint32(770).fork(),
      ).ldelim();
    }
    if (message.connectTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.connectTimeout! },
        writer.uint32(314).fork(),
      ).ldelim();
    }
    if (message.connectTimeoutWithFailover !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.connectTimeoutWithFailover! },
        writer.uint32(778).fork(),
      ).ldelim();
    }
    if (message.receiveTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.receiveTimeout! },
        writer.uint32(322).fork(),
      ).ldelim();
    }
    if (message.sendTimeout !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.sendTimeout! }, writer.uint32(330).fork())
        .ldelim();
    }
    if (message.timeoutBeforeCheckingExecutionSpeed !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.timeoutBeforeCheckingExecutionSpeed! },
        writer.uint32(786).fork(),
      ).ldelim();
    }
    if (message.insertQuorum !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.insertQuorum! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.insertQuorumTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.insertQuorumTimeout! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.insertQuorumParallel !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.insertQuorumParallel! },
        writer.uint32(794).fork(),
      ).ldelim();
    }
    if (message.insertNullAsDefault !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.insertNullAsDefault! },
        writer.uint32(802).fork(),
      ).ldelim();
    }
    if (message.selectSequentialConsistency !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.selectSequentialConsistency! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.deduplicateBlocksInDependentMaterializedViews !== undefined) {
      BoolValue.encode({
        $type: "google.protobuf.BoolValue",
        value: message.deduplicateBlocksInDependentMaterializedViews!,
      }, writer.uint32(810).fork()).ldelim();
    }
    if (message.replicationAlterPartitionsSync !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicationAlterPartitionsSync! },
        writer.uint32(338).fork(),
      ).ldelim();
    }
    if (message.maxReplicaDelayForDistributedQueries !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxReplicaDelayForDistributedQueries! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.fallbackToStaleReplicasForDistributedQueries !== undefined) {
      BoolValue.encode({
        $type: "google.protobuf.BoolValue",
        value: message.fallbackToStaleReplicasForDistributedQueries!,
      }, writer.uint32(58).fork()).ldelim();
    }
    if (message.distributedProductMode !== 0) {
      writer.uint32(344).int32(message.distributedProductMode);
    }
    if (message.distributedAggregationMemoryEfficient !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.distributedAggregationMemoryEfficient! },
        writer.uint32(578).fork(),
      ).ldelim();
    }
    if (message.distributedDdlTaskTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.distributedDdlTaskTimeout! },
        writer.uint32(586).fork(),
      ).ldelim();
    }
    if (message.skipUnavailableShards !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.skipUnavailableShards! },
        writer.uint32(650).fork(),
      ).ldelim();
    }
    if (message.compileExpressions !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.compileExpressions! },
        writer.uint32(370).fork(),
      ).ldelim();
    }
    if (message.minCountToCompileExpression !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minCountToCompileExpression! },
        writer.uint32(378).fork(),
      ).ldelim();
    }
    if (message.maxBlockSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxBlockSize! }, writer.uint32(74).fork())
        .ldelim();
    }
    if (message.minInsertBlockSizeRows !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minInsertBlockSizeRows! },
        writer.uint32(386).fork(),
      ).ldelim();
    }
    if (message.minInsertBlockSizeBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minInsertBlockSizeBytes! },
        writer.uint32(394).fork(),
      ).ldelim();
    }
    if (message.maxInsertBlockSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxInsertBlockSize! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.minBytesToUseDirectIo !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minBytesToUseDirectIo! },
        writer.uint32(402).fork(),
      ).ldelim();
    }
    if (message.useUncompressedCache !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.useUncompressedCache! },
        writer.uint32(410).fork(),
      ).ldelim();
    }
    if (message.mergeTreeMaxRowsToUseCache !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mergeTreeMaxRowsToUseCache! },
        writer.uint32(418).fork(),
      ).ldelim();
    }
    if (message.mergeTreeMaxBytesToUseCache !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mergeTreeMaxBytesToUseCache! },
        writer.uint32(426).fork(),
      ).ldelim();
    }
    if (message.mergeTreeMinRowsForConcurrentRead !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mergeTreeMinRowsForConcurrentRead! },
        writer.uint32(434).fork(),
      ).ldelim();
    }
    if (message.mergeTreeMinBytesForConcurrentRead !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mergeTreeMinBytesForConcurrentRead! },
        writer.uint32(442).fork(),
      ).ldelim();
    }
    if (message.maxBytesBeforeExternalGroupBy !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesBeforeExternalGroupBy! },
        writer.uint32(594).fork(),
      ).ldelim();
    }
    if (message.maxBytesBeforeExternalSort !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesBeforeExternalSort! },
        writer.uint32(602).fork(),
      ).ldelim();
    }
    if (message.groupByTwoLevelThreshold !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.groupByTwoLevelThreshold! },
        writer.uint32(610).fork(),
      ).ldelim();
    }
    if (message.groupByTwoLevelThresholdBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.groupByTwoLevelThresholdBytes! },
        writer.uint32(618).fork(),
      ).ldelim();
    }
    if (message.priority !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.priority! }, writer.uint32(450).fork())
        .ldelim();
    }
    if (message.maxThreads !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxThreads! }, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.maxMemoryUsage !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxMemoryUsage! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.maxMemoryUsageForUser !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxMemoryUsageForUser! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.maxNetworkBandwidth !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxNetworkBandwidth! },
        writer.uint32(458).fork(),
      ).ldelim();
    }
    if (message.maxNetworkBandwidthForUser !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxNetworkBandwidthForUser! },
        writer.uint32(466).fork(),
      ).ldelim();
    }
    if (message.maxPartitionsPerInsertBlock !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPartitionsPerInsertBlock! },
        writer.uint32(818).fork(),
      ).ldelim();
    }
    if (message.maxConcurrentQueriesForUser !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConcurrentQueriesForUser! },
        writer.uint32(826).fork(),
      ).ldelim();
    }
    if (message.forceIndexByDate !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.forceIndexByDate! },
        writer.uint32(474).fork(),
      ).ldelim();
    }
    if (message.forcePrimaryKey !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.forcePrimaryKey! },
        writer.uint32(482).fork(),
      ).ldelim();
    }
    if (message.maxRowsToRead !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsToRead! },
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.maxBytesToRead !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesToRead! },
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.readOverflowMode !== 0) {
      writer.uint32(120).int32(message.readOverflowMode);
    }
    if (message.maxRowsToGroupBy !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsToGroupBy! },
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.groupByOverflowMode !== 0) {
      writer.uint32(136).int32(message.groupByOverflowMode);
    }
    if (message.maxRowsToSort !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsToSort! },
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.maxBytesToSort !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesToSort! },
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.sortOverflowMode !== 0) {
      writer.uint32(160).int32(message.sortOverflowMode);
    }
    if (message.maxResultRows !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxResultRows! },
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.maxResultBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxResultBytes! },
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.resultOverflowMode !== 0) {
      writer.uint32(184).int32(message.resultOverflowMode);
    }
    if (message.maxRowsInDistinct !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsInDistinct! },
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.maxBytesInDistinct !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesInDistinct! },
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.distinctOverflowMode !== 0) {
      writer.uint32(208).int32(message.distinctOverflowMode);
    }
    if (message.maxRowsToTransfer !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsToTransfer! },
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.maxBytesToTransfer !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesToTransfer! },
        writer.uint32(226).fork(),
      ).ldelim();
    }
    if (message.transferOverflowMode !== 0) {
      writer.uint32(232).int32(message.transferOverflowMode);
    }
    if (message.maxExecutionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxExecutionTime! },
        writer.uint32(242).fork(),
      ).ldelim();
    }
    if (message.timeoutOverflowMode !== 0) {
      writer.uint32(248).int32(message.timeoutOverflowMode);
    }
    if (message.maxRowsInSet !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsInSet! },
        writer.uint32(698).fork(),
      ).ldelim();
    }
    if (message.maxBytesInSet !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesInSet! },
        writer.uint32(706).fork(),
      ).ldelim();
    }
    if (message.setOverflowMode !== 0) {
      writer.uint32(712).int32(message.setOverflowMode);
    }
    if (message.maxRowsInJoin !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsInJoin! },
        writer.uint32(722).fork(),
      ).ldelim();
    }
    if (message.maxBytesInJoin !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesInJoin! },
        writer.uint32(730).fork(),
      ).ldelim();
    }
    if (message.joinOverflowMode !== 0) {
      writer.uint32(736).int32(message.joinOverflowMode);
    }
    writer.uint32(834).fork();
    for (const v of message.joinAlgorithm) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.anyJoinDistinctRightTableKeys !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.anyJoinDistinctRightTableKeys! },
        writer.uint32(842).fork(),
      ).ldelim();
    }
    if (message.maxColumnsToRead !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxColumnsToRead! },
        writer.uint32(258).fork(),
      ).ldelim();
    }
    if (message.maxTemporaryColumns !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxTemporaryColumns! },
        writer.uint32(266).fork(),
      ).ldelim();
    }
    if (message.maxTemporaryNonConstColumns !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxTemporaryNonConstColumns! },
        writer.uint32(274).fork(),
      ).ldelim();
    }
    if (message.maxQuerySize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxQuerySize! },
        writer.uint32(282).fork(),
      ).ldelim();
    }
    if (message.maxAstDepth !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxAstDepth! }, writer.uint32(290).fork())
        .ldelim();
    }
    if (message.maxAstElements !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxAstElements! },
        writer.uint32(298).fork(),
      ).ldelim();
    }
    if (message.maxExpandedAstElements !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxExpandedAstElements! },
        writer.uint32(306).fork(),
      ).ldelim();
    }
    if (message.minExecutionSpeed !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minExecutionSpeed! },
        writer.uint32(674).fork(),
      ).ldelim();
    }
    if (message.minExecutionSpeedBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minExecutionSpeedBytes! },
        writer.uint32(682).fork(),
      ).ldelim();
    }
    if (message.countDistinctImplementation !== 0) {
      writer.uint32(688).int32(message.countDistinctImplementation);
    }
    if (message.inputFormatValuesInterpretExpressions !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.inputFormatValuesInterpretExpressions! },
        writer.uint32(490).fork(),
      ).ldelim();
    }
    if (message.inputFormatDefaultsForOmittedFields !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.inputFormatDefaultsForOmittedFields! },
        writer.uint32(498).fork(),
      ).ldelim();
    }
    if (message.inputFormatNullAsDefault !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.inputFormatNullAsDefault! },
        writer.uint32(850).fork(),
      ).ldelim();
    }
    if (message.dateTimeInputFormat !== 0) {
      writer.uint32(856).int32(message.dateTimeInputFormat);
    }
    if (message.inputFormatWithNamesUseHeader !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.inputFormatWithNamesUseHeader! },
        writer.uint32(866).fork(),
      ).ldelim();
    }
    if (message.outputFormatJsonQuote64bitIntegers !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.outputFormatJsonQuote64bitIntegers! },
        writer.uint32(506).fork(),
      ).ldelim();
    }
    if (message.outputFormatJsonQuoteDenormals !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.outputFormatJsonQuoteDenormals! },
        writer.uint32(514).fork(),
      ).ldelim();
    }
    if (message.dateTimeOutputFormat !== 0) {
      writer.uint32(872).int32(message.dateTimeOutputFormat);
    }
    if (message.lowCardinalityAllowInNativeFormat !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.lowCardinalityAllowInNativeFormat! },
        writer.uint32(626).fork(),
      ).ldelim();
    }
    if (message.allowSuspiciousLowCardinalityTypes !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.allowSuspiciousLowCardinalityTypes! },
        writer.uint32(882).fork(),
      ).ldelim();
    }
    if (message.emptyResultForAggregationByEmptySet !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.emptyResultForAggregationByEmptySet! },
        writer.uint32(634).fork(),
      ).ldelim();
    }
    if (message.httpConnectionTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.httpConnectionTimeout! },
        writer.uint32(522).fork(),
      ).ldelim();
    }
    if (message.httpReceiveTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.httpReceiveTimeout! },
        writer.uint32(530).fork(),
      ).ldelim();
    }
    if (message.httpSendTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.httpSendTimeout! },
        writer.uint32(538).fork(),
      ).ldelim();
    }
    if (message.enableHttpCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableHttpCompression! },
        writer.uint32(546).fork(),
      ).ldelim();
    }
    if (message.sendProgressInHttpHeaders !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.sendProgressInHttpHeaders! },
        writer.uint32(554).fork(),
      ).ldelim();
    }
    if (message.httpHeadersProgressInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.httpHeadersProgressInterval! },
        writer.uint32(562).fork(),
      ).ldelim();
    }
    if (message.addHttpCorsHeader !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.addHttpCorsHeader! },
        writer.uint32(570).fork(),
      ).ldelim();
    }
    if (message.cancelHttpReadonlyQueriesOnClientClose !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.cancelHttpReadonlyQueriesOnClientClose! },
        writer.uint32(890).fork(),
      ).ldelim();
    }
    if (message.maxHttpGetRedirects !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxHttpGetRedirects! },
        writer.uint32(898).fork(),
      ).ldelim();
    }
    if (message.joinedSubqueryRequiresAlias !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.joinedSubqueryRequiresAlias! },
        writer.uint32(746).fork(),
      ).ldelim();
    }
    if (message.joinUseNulls !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.joinUseNulls! }, writer.uint32(754).fork())
        .ldelim();
    }
    if (message.transformNullIn !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.transformNullIn! },
        writer.uint32(762).fork(),
      ).ldelim();
    }
    if (message.quotaMode !== 0) {
      writer.uint32(640).int32(message.quotaMode);
    }
    if (message.flattenNested !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.flattenNested! }, writer.uint32(906).fork())
        .ldelim();
    }
    if (message.formatRegexp !== "") {
      writer.uint32(914).string(message.formatRegexp);
    }
    if (message.formatRegexpEscapingRule !== 0) {
      writer.uint32(920).int32(message.formatRegexpEscapingRule);
    }
    if (message.formatRegexpSkipUnmatched !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.formatRegexpSkipUnmatched! },
        writer.uint32(930).fork(),
      ).ldelim();
    }
    if (message.asyncInsert !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.asyncInsert! }, writer.uint32(938).fork())
        .ldelim();
    }
    if (message.asyncInsertThreads !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.asyncInsertThreads! },
        writer.uint32(946).fork(),
      ).ldelim();
    }
    if (message.waitForAsyncInsert !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.waitForAsyncInsert! },
        writer.uint32(954).fork(),
      ).ldelim();
    }
    if (message.waitForAsyncInsertTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.waitForAsyncInsertTimeout! },
        writer.uint32(962).fork(),
      ).ldelim();
    }
    if (message.asyncInsertMaxDataSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.asyncInsertMaxDataSize! },
        writer.uint32(970).fork(),
      ).ldelim();
    }
    if (message.asyncInsertBusyTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.asyncInsertBusyTimeout! },
        writer.uint32(978).fork(),
      ).ldelim();
    }
    if (message.asyncInsertStaleTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.asyncInsertStaleTimeout! },
        writer.uint32(986).fork(),
      ).ldelim();
    }
    if (message.memoryProfilerStep !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.memoryProfilerStep! },
        writer.uint32(994).fork(),
      ).ldelim();
    }
    if (message.memoryProfilerSampleProbability !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.memoryProfilerSampleProbability! },
        writer.uint32(1002).fork(),
      ).ldelim();
    }
    if (message.maxFinalThreads !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxFinalThreads! },
        writer.uint32(1010).fork(),
      ).ldelim();
    }
    if (message.inputFormatParallelParsing !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.inputFormatParallelParsing! },
        writer.uint32(1018).fork(),
      ).ldelim();
    }
    if (message.inputFormatImportNestedJson !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.inputFormatImportNestedJson! },
        writer.uint32(1026).fork(),
      ).ldelim();
    }
    if (message.localFilesystemReadMethod !== 0) {
      writer.uint32(1032).int32(message.localFilesystemReadMethod);
    }
    if (message.maxReadBufferSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxReadBufferSize! },
        writer.uint32(1042).fork(),
      ).ldelim();
    }
    if (message.insertKeeperMaxRetries !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.insertKeeperMaxRetries! },
        writer.uint32(1050).fork(),
      ).ldelim();
    }
    if (message.maxTemporaryDataOnDiskSizeForUser !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxTemporaryDataOnDiskSizeForUser! },
        writer.uint32(1058).fork(),
      ).ldelim();
    }
    if (message.maxTemporaryDataOnDiskSizeForQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxTemporaryDataOnDiskSizeForQuery! },
        writer.uint32(1066).fork(),
      ).ldelim();
    }
    if (message.maxParserDepth !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxParserDepth! },
        writer.uint32(1074).fork(),
      ).ldelim();
    }
    if (message.remoteFilesystemReadMethod !== 0) {
      writer.uint32(1080).int32(message.remoteFilesystemReadMethod);
    }
    if (message.memoryOvercommitRatioDenominator !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.memoryOvercommitRatioDenominator! },
        writer.uint32(1090).fork(),
      ).ldelim();
    }
    if (message.memoryOvercommitRatioDenominatorForUser !== undefined) {
      Int64Value.encode({
        $type: "google.protobuf.Int64Value",
        value: message.memoryOvercommitRatioDenominatorForUser!,
      }, writer.uint32(1098).fork()).ldelim();
    }
    if (message.memoryUsageOvercommitMaxWaitMicroseconds !== undefined) {
      Int64Value.encode({
        $type: "google.protobuf.Int64Value",
        value: message.memoryUsageOvercommitMaxWaitMicroseconds!,
      }, writer.uint32(1106).fork()).ldelim();
    }
    if (message.compile !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.compile! }, writer.uint32(354).fork())
        .ldelim();
    }
    if (message.minCountToCompile !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minCountToCompile! },
        writer.uint32(362).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.readonly = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allowDdl = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 96:
          if (tag !== 770) {
            break;
          }

          message.allowIntrospectionFunctions = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.connectTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 97:
          if (tag !== 778) {
            break;
          }

          message.connectTimeoutWithFailover = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.receiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.sendTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 98:
          if (tag !== 786) {
            break;
          }

          message.timeoutBeforeCheckingExecutionSpeed = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.insertQuorum = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.insertQuorumTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 99:
          if (tag !== 794) {
            break;
          }

          message.insertQuorumParallel = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.insertNullAsDefault = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.selectSequentialConsistency = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.deduplicateBlocksInDependentMaterializedViews = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 42:
          if (tag !== 338) {
            break;
          }

          message.replicationAlterPartitionsSync = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxReplicaDelayForDistributedQueries = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fallbackToStaleReplicasForDistributedQueries = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 43:
          if (tag !== 344) {
            break;
          }

          message.distributedProductMode = reader.int32() as any;
          continue;
        case 72:
          if (tag !== 578) {
            break;
          }

          message.distributedAggregationMemoryEfficient = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 73:
          if (tag !== 586) {
            break;
          }

          message.distributedDdlTaskTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 81:
          if (tag !== 650) {
            break;
          }

          message.skipUnavailableShards = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.compileExpressions = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 47:
          if (tag !== 378) {
            break;
          }

          message.minCountToCompileExpression = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.maxBlockSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          message.minInsertBlockSizeRows = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 49:
          if (tag !== 394) {
            break;
          }

          message.minInsertBlockSizeBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.maxInsertBlockSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.minBytesToUseDirectIo = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 51:
          if (tag !== 410) {
            break;
          }

          message.useUncompressedCache = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 52:
          if (tag !== 418) {
            break;
          }

          message.mergeTreeMaxRowsToUseCache = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 53:
          if (tag !== 426) {
            break;
          }

          message.mergeTreeMaxBytesToUseCache = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 54:
          if (tag !== 434) {
            break;
          }

          message.mergeTreeMinRowsForConcurrentRead = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 55:
          if (tag !== 442) {
            break;
          }

          message.mergeTreeMinBytesForConcurrentRead = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 74:
          if (tag !== 594) {
            break;
          }

          message.maxBytesBeforeExternalGroupBy = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 75:
          if (tag !== 602) {
            break;
          }

          message.maxBytesBeforeExternalSort = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 76:
          if (tag !== 610) {
            break;
          }

          message.groupByTwoLevelThreshold = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 77:
          if (tag !== 618) {
            break;
          }

          message.groupByTwoLevelThresholdBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.priority = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.maxThreads = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.maxMemoryUsage = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.maxMemoryUsageForUser = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.maxNetworkBandwidth = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 58:
          if (tag !== 466) {
            break;
          }

          message.maxNetworkBandwidthForUser = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.maxPartitionsPerInsertBlock = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.maxConcurrentQueriesForUser = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 59:
          if (tag !== 474) {
            break;
          }

          message.forceIndexByDate = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 60:
          if (tag !== 482) {
            break;
          }

          message.forcePrimaryKey = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.maxRowsToRead = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.maxBytesToRead = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.readOverflowMode = reader.int32() as any;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.maxRowsToGroupBy = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.groupByOverflowMode = reader.int32() as any;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.maxRowsToSort = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.maxBytesToSort = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.sortOverflowMode = reader.int32() as any;
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.maxResultRows = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.maxResultBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.resultOverflowMode = reader.int32() as any;
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.maxRowsInDistinct = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.maxBytesInDistinct = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.distinctOverflowMode = reader.int32() as any;
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.maxRowsToTransfer = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.maxBytesToTransfer = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.transferOverflowMode = reader.int32() as any;
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.maxExecutionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.timeoutOverflowMode = reader.int32() as any;
          continue;
        case 87:
          if (tag !== 698) {
            break;
          }

          message.maxRowsInSet = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 88:
          if (tag !== 706) {
            break;
          }

          message.maxBytesInSet = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 89:
          if (tag !== 712) {
            break;
          }

          message.setOverflowMode = reader.int32() as any;
          continue;
        case 90:
          if (tag !== 722) {
            break;
          }

          message.maxRowsInJoin = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 91:
          if (tag !== 730) {
            break;
          }

          message.maxBytesInJoin = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 92:
          if (tag !== 736) {
            break;
          }

          message.joinOverflowMode = reader.int32() as any;
          continue;
        case 104:
          if (tag === 832) {
            message.joinAlgorithm.push(reader.int32() as any);

            continue;
          }

          if (tag === 834) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.joinAlgorithm.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 105:
          if (tag !== 842) {
            break;
          }

          message.anyJoinDistinctRightTableKeys = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.maxColumnsToRead = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.maxTemporaryColumns = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.maxTemporaryNonConstColumns = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.maxQuerySize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.maxAstDepth = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.maxAstElements = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 38:
          if (tag !== 306) {
            break;
          }

          message.maxExpandedAstElements = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 84:
          if (tag !== 674) {
            break;
          }

          message.minExecutionSpeed = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 85:
          if (tag !== 682) {
            break;
          }

          message.minExecutionSpeedBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 86:
          if (tag !== 688) {
            break;
          }

          message.countDistinctImplementation = reader.int32() as any;
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          message.inputFormatValuesInterpretExpressions = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 62:
          if (tag !== 498) {
            break;
          }

          message.inputFormatDefaultsForOmittedFields = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 106:
          if (tag !== 850) {
            break;
          }

          message.inputFormatNullAsDefault = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 107:
          if (tag !== 856) {
            break;
          }

          message.dateTimeInputFormat = reader.int32() as any;
          continue;
        case 108:
          if (tag !== 866) {
            break;
          }

          message.inputFormatWithNamesUseHeader = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 63:
          if (tag !== 506) {
            break;
          }

          message.outputFormatJsonQuote64bitIntegers = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 64:
          if (tag !== 514) {
            break;
          }

          message.outputFormatJsonQuoteDenormals = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 109:
          if (tag !== 872) {
            break;
          }

          message.dateTimeOutputFormat = reader.int32() as any;
          continue;
        case 78:
          if (tag !== 626) {
            break;
          }

          message.lowCardinalityAllowInNativeFormat = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 110:
          if (tag !== 882) {
            break;
          }

          message.allowSuspiciousLowCardinalityTypes = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 79:
          if (tag !== 634) {
            break;
          }

          message.emptyResultForAggregationByEmptySet = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 65:
          if (tag !== 522) {
            break;
          }

          message.httpConnectionTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 66:
          if (tag !== 530) {
            break;
          }

          message.httpReceiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 67:
          if (tag !== 538) {
            break;
          }

          message.httpSendTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 68:
          if (tag !== 546) {
            break;
          }

          message.enableHttpCompression = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 69:
          if (tag !== 554) {
            break;
          }

          message.sendProgressInHttpHeaders = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 70:
          if (tag !== 562) {
            break;
          }

          message.httpHeadersProgressInterval = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 71:
          if (tag !== 570) {
            break;
          }

          message.addHttpCorsHeader = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 111:
          if (tag !== 890) {
            break;
          }

          message.cancelHttpReadonlyQueriesOnClientClose = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 112:
          if (tag !== 898) {
            break;
          }

          message.maxHttpGetRedirects = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 93:
          if (tag !== 746) {
            break;
          }

          message.joinedSubqueryRequiresAlias = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 94:
          if (tag !== 754) {
            break;
          }

          message.joinUseNulls = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 95:
          if (tag !== 762) {
            break;
          }

          message.transformNullIn = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 80:
          if (tag !== 640) {
            break;
          }

          message.quotaMode = reader.int32() as any;
          continue;
        case 113:
          if (tag !== 906) {
            break;
          }

          message.flattenNested = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 114:
          if (tag !== 914) {
            break;
          }

          message.formatRegexp = reader.string();
          continue;
        case 115:
          if (tag !== 920) {
            break;
          }

          message.formatRegexpEscapingRule = reader.int32() as any;
          continue;
        case 116:
          if (tag !== 930) {
            break;
          }

          message.formatRegexpSkipUnmatched = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 117:
          if (tag !== 938) {
            break;
          }

          message.asyncInsert = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 118:
          if (tag !== 946) {
            break;
          }

          message.asyncInsertThreads = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 119:
          if (tag !== 954) {
            break;
          }

          message.waitForAsyncInsert = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 120:
          if (tag !== 962) {
            break;
          }

          message.waitForAsyncInsertTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 121:
          if (tag !== 970) {
            break;
          }

          message.asyncInsertMaxDataSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 122:
          if (tag !== 978) {
            break;
          }

          message.asyncInsertBusyTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 123:
          if (tag !== 986) {
            break;
          }

          message.asyncInsertStaleTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 124:
          if (tag !== 994) {
            break;
          }

          message.memoryProfilerStep = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 125:
          if (tag !== 1002) {
            break;
          }

          message.memoryProfilerSampleProbability = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 126:
          if (tag !== 1010) {
            break;
          }

          message.maxFinalThreads = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 127:
          if (tag !== 1018) {
            break;
          }

          message.inputFormatParallelParsing = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 128:
          if (tag !== 1026) {
            break;
          }

          message.inputFormatImportNestedJson = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 129:
          if (tag !== 1032) {
            break;
          }

          message.localFilesystemReadMethod = reader.int32() as any;
          continue;
        case 130:
          if (tag !== 1042) {
            break;
          }

          message.maxReadBufferSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 131:
          if (tag !== 1050) {
            break;
          }

          message.insertKeeperMaxRetries = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 132:
          if (tag !== 1058) {
            break;
          }

          message.maxTemporaryDataOnDiskSizeForUser = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 133:
          if (tag !== 1066) {
            break;
          }

          message.maxTemporaryDataOnDiskSizeForQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 134:
          if (tag !== 1074) {
            break;
          }

          message.maxParserDepth = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 135:
          if (tag !== 1080) {
            break;
          }

          message.remoteFilesystemReadMethod = reader.int32() as any;
          continue;
        case 136:
          if (tag !== 1090) {
            break;
          }

          message.memoryOvercommitRatioDenominator = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 137:
          if (tag !== 1098) {
            break;
          }

          message.memoryOvercommitRatioDenominatorForUser = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 138:
          if (tag !== 1106) {
            break;
          }

          message.memoryUsageOvercommitMaxWaitMicroseconds = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.compile = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.minCountToCompile = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSettings {
    return {
      $type: UserSettings.$type,
      readonly: isSet(object.readonly) ? Number(object.readonly) : undefined,
      allowDdl: isSet(object.allowDdl) ? Boolean(object.allowDdl) : undefined,
      allowIntrospectionFunctions: isSet(object.allowIntrospectionFunctions)
        ? Boolean(object.allowIntrospectionFunctions)
        : undefined,
      connectTimeout: isSet(object.connectTimeout) ? Number(object.connectTimeout) : undefined,
      connectTimeoutWithFailover: isSet(object.connectTimeoutWithFailover)
        ? Number(object.connectTimeoutWithFailover)
        : undefined,
      receiveTimeout: isSet(object.receiveTimeout) ? Number(object.receiveTimeout) : undefined,
      sendTimeout: isSet(object.sendTimeout) ? Number(object.sendTimeout) : undefined,
      timeoutBeforeCheckingExecutionSpeed: isSet(object.timeoutBeforeCheckingExecutionSpeed)
        ? Number(object.timeoutBeforeCheckingExecutionSpeed)
        : undefined,
      insertQuorum: isSet(object.insertQuorum) ? Number(object.insertQuorum) : undefined,
      insertQuorumTimeout: isSet(object.insertQuorumTimeout) ? Number(object.insertQuorumTimeout) : undefined,
      insertQuorumParallel: isSet(object.insertQuorumParallel) ? Boolean(object.insertQuorumParallel) : undefined,
      insertNullAsDefault: isSet(object.insertNullAsDefault) ? Boolean(object.insertNullAsDefault) : undefined,
      selectSequentialConsistency: isSet(object.selectSequentialConsistency)
        ? Boolean(object.selectSequentialConsistency)
        : undefined,
      deduplicateBlocksInDependentMaterializedViews: isSet(object.deduplicateBlocksInDependentMaterializedViews)
        ? Boolean(object.deduplicateBlocksInDependentMaterializedViews)
        : undefined,
      replicationAlterPartitionsSync: isSet(object.replicationAlterPartitionsSync)
        ? Number(object.replicationAlterPartitionsSync)
        : undefined,
      maxReplicaDelayForDistributedQueries: isSet(object.maxReplicaDelayForDistributedQueries)
        ? Number(object.maxReplicaDelayForDistributedQueries)
        : undefined,
      fallbackToStaleReplicasForDistributedQueries: isSet(object.fallbackToStaleReplicasForDistributedQueries)
        ? Boolean(object.fallbackToStaleReplicasForDistributedQueries)
        : undefined,
      distributedProductMode: isSet(object.distributedProductMode)
        ? userSettings_DistributedProductModeFromJSON(object.distributedProductMode)
        : 0,
      distributedAggregationMemoryEfficient: isSet(object.distributedAggregationMemoryEfficient)
        ? Boolean(object.distributedAggregationMemoryEfficient)
        : undefined,
      distributedDdlTaskTimeout: isSet(object.distributedDdlTaskTimeout)
        ? Number(object.distributedDdlTaskTimeout)
        : undefined,
      skipUnavailableShards: isSet(object.skipUnavailableShards) ? Boolean(object.skipUnavailableShards) : undefined,
      compileExpressions: isSet(object.compileExpressions) ? Boolean(object.compileExpressions) : undefined,
      minCountToCompileExpression: isSet(object.minCountToCompileExpression)
        ? Number(object.minCountToCompileExpression)
        : undefined,
      maxBlockSize: isSet(object.maxBlockSize) ? Number(object.maxBlockSize) : undefined,
      minInsertBlockSizeRows: isSet(object.minInsertBlockSizeRows) ? Number(object.minInsertBlockSizeRows) : undefined,
      minInsertBlockSizeBytes: isSet(object.minInsertBlockSizeBytes)
        ? Number(object.minInsertBlockSizeBytes)
        : undefined,
      maxInsertBlockSize: isSet(object.maxInsertBlockSize) ? Number(object.maxInsertBlockSize) : undefined,
      minBytesToUseDirectIo: isSet(object.minBytesToUseDirectIo) ? Number(object.minBytesToUseDirectIo) : undefined,
      useUncompressedCache: isSet(object.useUncompressedCache) ? Boolean(object.useUncompressedCache) : undefined,
      mergeTreeMaxRowsToUseCache: isSet(object.mergeTreeMaxRowsToUseCache)
        ? Number(object.mergeTreeMaxRowsToUseCache)
        : undefined,
      mergeTreeMaxBytesToUseCache: isSet(object.mergeTreeMaxBytesToUseCache)
        ? Number(object.mergeTreeMaxBytesToUseCache)
        : undefined,
      mergeTreeMinRowsForConcurrentRead: isSet(object.mergeTreeMinRowsForConcurrentRead)
        ? Number(object.mergeTreeMinRowsForConcurrentRead)
        : undefined,
      mergeTreeMinBytesForConcurrentRead: isSet(object.mergeTreeMinBytesForConcurrentRead)
        ? Number(object.mergeTreeMinBytesForConcurrentRead)
        : undefined,
      maxBytesBeforeExternalGroupBy: isSet(object.maxBytesBeforeExternalGroupBy)
        ? Number(object.maxBytesBeforeExternalGroupBy)
        : undefined,
      maxBytesBeforeExternalSort: isSet(object.maxBytesBeforeExternalSort)
        ? Number(object.maxBytesBeforeExternalSort)
        : undefined,
      groupByTwoLevelThreshold: isSet(object.groupByTwoLevelThreshold)
        ? Number(object.groupByTwoLevelThreshold)
        : undefined,
      groupByTwoLevelThresholdBytes: isSet(object.groupByTwoLevelThresholdBytes)
        ? Number(object.groupByTwoLevelThresholdBytes)
        : undefined,
      priority: isSet(object.priority) ? Number(object.priority) : undefined,
      maxThreads: isSet(object.maxThreads) ? Number(object.maxThreads) : undefined,
      maxMemoryUsage: isSet(object.maxMemoryUsage) ? Number(object.maxMemoryUsage) : undefined,
      maxMemoryUsageForUser: isSet(object.maxMemoryUsageForUser) ? Number(object.maxMemoryUsageForUser) : undefined,
      maxNetworkBandwidth: isSet(object.maxNetworkBandwidth) ? Number(object.maxNetworkBandwidth) : undefined,
      maxNetworkBandwidthForUser: isSet(object.maxNetworkBandwidthForUser)
        ? Number(object.maxNetworkBandwidthForUser)
        : undefined,
      maxPartitionsPerInsertBlock: isSet(object.maxPartitionsPerInsertBlock)
        ? Number(object.maxPartitionsPerInsertBlock)
        : undefined,
      maxConcurrentQueriesForUser: isSet(object.maxConcurrentQueriesForUser)
        ? Number(object.maxConcurrentQueriesForUser)
        : undefined,
      forceIndexByDate: isSet(object.forceIndexByDate) ? Boolean(object.forceIndexByDate) : undefined,
      forcePrimaryKey: isSet(object.forcePrimaryKey) ? Boolean(object.forcePrimaryKey) : undefined,
      maxRowsToRead: isSet(object.maxRowsToRead) ? Number(object.maxRowsToRead) : undefined,
      maxBytesToRead: isSet(object.maxBytesToRead) ? Number(object.maxBytesToRead) : undefined,
      readOverflowMode: isSet(object.readOverflowMode) ? userSettings_OverflowModeFromJSON(object.readOverflowMode) : 0,
      maxRowsToGroupBy: isSet(object.maxRowsToGroupBy) ? Number(object.maxRowsToGroupBy) : undefined,
      groupByOverflowMode: isSet(object.groupByOverflowMode)
        ? userSettings_GroupByOverflowModeFromJSON(object.groupByOverflowMode)
        : 0,
      maxRowsToSort: isSet(object.maxRowsToSort) ? Number(object.maxRowsToSort) : undefined,
      maxBytesToSort: isSet(object.maxBytesToSort) ? Number(object.maxBytesToSort) : undefined,
      sortOverflowMode: isSet(object.sortOverflowMode) ? userSettings_OverflowModeFromJSON(object.sortOverflowMode) : 0,
      maxResultRows: isSet(object.maxResultRows) ? Number(object.maxResultRows) : undefined,
      maxResultBytes: isSet(object.maxResultBytes) ? Number(object.maxResultBytes) : undefined,
      resultOverflowMode: isSet(object.resultOverflowMode)
        ? userSettings_OverflowModeFromJSON(object.resultOverflowMode)
        : 0,
      maxRowsInDistinct: isSet(object.maxRowsInDistinct) ? Number(object.maxRowsInDistinct) : undefined,
      maxBytesInDistinct: isSet(object.maxBytesInDistinct) ? Number(object.maxBytesInDistinct) : undefined,
      distinctOverflowMode: isSet(object.distinctOverflowMode)
        ? userSettings_OverflowModeFromJSON(object.distinctOverflowMode)
        : 0,
      maxRowsToTransfer: isSet(object.maxRowsToTransfer) ? Number(object.maxRowsToTransfer) : undefined,
      maxBytesToTransfer: isSet(object.maxBytesToTransfer) ? Number(object.maxBytesToTransfer) : undefined,
      transferOverflowMode: isSet(object.transferOverflowMode)
        ? userSettings_OverflowModeFromJSON(object.transferOverflowMode)
        : 0,
      maxExecutionTime: isSet(object.maxExecutionTime) ? Number(object.maxExecutionTime) : undefined,
      timeoutOverflowMode: isSet(object.timeoutOverflowMode)
        ? userSettings_OverflowModeFromJSON(object.timeoutOverflowMode)
        : 0,
      maxRowsInSet: isSet(object.maxRowsInSet) ? Number(object.maxRowsInSet) : undefined,
      maxBytesInSet: isSet(object.maxBytesInSet) ? Number(object.maxBytesInSet) : undefined,
      setOverflowMode: isSet(object.setOverflowMode) ? userSettings_OverflowModeFromJSON(object.setOverflowMode) : 0,
      maxRowsInJoin: isSet(object.maxRowsInJoin) ? Number(object.maxRowsInJoin) : undefined,
      maxBytesInJoin: isSet(object.maxBytesInJoin) ? Number(object.maxBytesInJoin) : undefined,
      joinOverflowMode: isSet(object.joinOverflowMode) ? userSettings_OverflowModeFromJSON(object.joinOverflowMode) : 0,
      joinAlgorithm: globalThis.Array.isArray(object?.joinAlgorithm)
        ? object.joinAlgorithm.map((e: any) => userSettings_JoinAlgorithmFromJSON(e))
        : [],
      anyJoinDistinctRightTableKeys: isSet(object.anyJoinDistinctRightTableKeys)
        ? Boolean(object.anyJoinDistinctRightTableKeys)
        : undefined,
      maxColumnsToRead: isSet(object.maxColumnsToRead) ? Number(object.maxColumnsToRead) : undefined,
      maxTemporaryColumns: isSet(object.maxTemporaryColumns) ? Number(object.maxTemporaryColumns) : undefined,
      maxTemporaryNonConstColumns: isSet(object.maxTemporaryNonConstColumns)
        ? Number(object.maxTemporaryNonConstColumns)
        : undefined,
      maxQuerySize: isSet(object.maxQuerySize) ? Number(object.maxQuerySize) : undefined,
      maxAstDepth: isSet(object.maxAstDepth) ? Number(object.maxAstDepth) : undefined,
      maxAstElements: isSet(object.maxAstElements) ? Number(object.maxAstElements) : undefined,
      maxExpandedAstElements: isSet(object.maxExpandedAstElements) ? Number(object.maxExpandedAstElements) : undefined,
      minExecutionSpeed: isSet(object.minExecutionSpeed) ? Number(object.minExecutionSpeed) : undefined,
      minExecutionSpeedBytes: isSet(object.minExecutionSpeedBytes) ? Number(object.minExecutionSpeedBytes) : undefined,
      countDistinctImplementation: isSet(object.countDistinctImplementation)
        ? userSettings_CountDistinctImplementationFromJSON(object.countDistinctImplementation)
        : 0,
      inputFormatValuesInterpretExpressions: isSet(object.inputFormatValuesInterpretExpressions)
        ? Boolean(object.inputFormatValuesInterpretExpressions)
        : undefined,
      inputFormatDefaultsForOmittedFields: isSet(object.inputFormatDefaultsForOmittedFields)
        ? Boolean(object.inputFormatDefaultsForOmittedFields)
        : undefined,
      inputFormatNullAsDefault: isSet(object.inputFormatNullAsDefault)
        ? Boolean(object.inputFormatNullAsDefault)
        : undefined,
      dateTimeInputFormat: isSet(object.dateTimeInputFormat)
        ? userSettings_DateTimeInputFormatFromJSON(object.dateTimeInputFormat)
        : 0,
      inputFormatWithNamesUseHeader: isSet(object.inputFormatWithNamesUseHeader)
        ? Boolean(object.inputFormatWithNamesUseHeader)
        : undefined,
      outputFormatJsonQuote64bitIntegers: isSet(object.outputFormatJsonQuote_64bitIntegers)
        ? Boolean(object.outputFormatJsonQuote_64bitIntegers)
        : undefined,
      outputFormatJsonQuoteDenormals: isSet(object.outputFormatJsonQuoteDenormals)
        ? Boolean(object.outputFormatJsonQuoteDenormals)
        : undefined,
      dateTimeOutputFormat: isSet(object.dateTimeOutputFormat)
        ? userSettings_DateTimeOutputFormatFromJSON(object.dateTimeOutputFormat)
        : 0,
      lowCardinalityAllowInNativeFormat: isSet(object.lowCardinalityAllowInNativeFormat)
        ? Boolean(object.lowCardinalityAllowInNativeFormat)
        : undefined,
      allowSuspiciousLowCardinalityTypes: isSet(object.allowSuspiciousLowCardinalityTypes)
        ? Boolean(object.allowSuspiciousLowCardinalityTypes)
        : undefined,
      emptyResultForAggregationByEmptySet: isSet(object.emptyResultForAggregationByEmptySet)
        ? Boolean(object.emptyResultForAggregationByEmptySet)
        : undefined,
      httpConnectionTimeout: isSet(object.httpConnectionTimeout) ? Number(object.httpConnectionTimeout) : undefined,
      httpReceiveTimeout: isSet(object.httpReceiveTimeout) ? Number(object.httpReceiveTimeout) : undefined,
      httpSendTimeout: isSet(object.httpSendTimeout) ? Number(object.httpSendTimeout) : undefined,
      enableHttpCompression: isSet(object.enableHttpCompression) ? Boolean(object.enableHttpCompression) : undefined,
      sendProgressInHttpHeaders: isSet(object.sendProgressInHttpHeaders)
        ? Boolean(object.sendProgressInHttpHeaders)
        : undefined,
      httpHeadersProgressInterval: isSet(object.httpHeadersProgressInterval)
        ? Number(object.httpHeadersProgressInterval)
        : undefined,
      addHttpCorsHeader: isSet(object.addHttpCorsHeader) ? Boolean(object.addHttpCorsHeader) : undefined,
      cancelHttpReadonlyQueriesOnClientClose: isSet(object.cancelHttpReadonlyQueriesOnClientClose)
        ? Boolean(object.cancelHttpReadonlyQueriesOnClientClose)
        : undefined,
      maxHttpGetRedirects: isSet(object.maxHttpGetRedirects) ? Number(object.maxHttpGetRedirects) : undefined,
      joinedSubqueryRequiresAlias: isSet(object.joinedSubqueryRequiresAlias)
        ? Boolean(object.joinedSubqueryRequiresAlias)
        : undefined,
      joinUseNulls: isSet(object.joinUseNulls) ? Boolean(object.joinUseNulls) : undefined,
      transformNullIn: isSet(object.transformNullIn) ? Boolean(object.transformNullIn) : undefined,
      quotaMode: isSet(object.quotaMode) ? userSettings_QuotaModeFromJSON(object.quotaMode) : 0,
      flattenNested: isSet(object.flattenNested) ? Boolean(object.flattenNested) : undefined,
      formatRegexp: isSet(object.formatRegexp) ? globalThis.String(object.formatRegexp) : "",
      formatRegexpEscapingRule: isSet(object.formatRegexpEscapingRule)
        ? userSettings_FormatRegexpEscapingRuleFromJSON(object.formatRegexpEscapingRule)
        : 0,
      formatRegexpSkipUnmatched: isSet(object.formatRegexpSkipUnmatched)
        ? Boolean(object.formatRegexpSkipUnmatched)
        : undefined,
      asyncInsert: isSet(object.asyncInsert) ? Boolean(object.asyncInsert) : undefined,
      asyncInsertThreads: isSet(object.asyncInsertThreads) ? Number(object.asyncInsertThreads) : undefined,
      waitForAsyncInsert: isSet(object.waitForAsyncInsert) ? Boolean(object.waitForAsyncInsert) : undefined,
      waitForAsyncInsertTimeout: isSet(object.waitForAsyncInsertTimeout)
        ? Number(object.waitForAsyncInsertTimeout)
        : undefined,
      asyncInsertMaxDataSize: isSet(object.asyncInsertMaxDataSize) ? Number(object.asyncInsertMaxDataSize) : undefined,
      asyncInsertBusyTimeout: isSet(object.asyncInsertBusyTimeout) ? Number(object.asyncInsertBusyTimeout) : undefined,
      asyncInsertStaleTimeout: isSet(object.asyncInsertStaleTimeout)
        ? Number(object.asyncInsertStaleTimeout)
        : undefined,
      memoryProfilerStep: isSet(object.memoryProfilerStep) ? Number(object.memoryProfilerStep) : undefined,
      memoryProfilerSampleProbability: isSet(object.memoryProfilerSampleProbability)
        ? Number(object.memoryProfilerSampleProbability)
        : undefined,
      maxFinalThreads: isSet(object.maxFinalThreads) ? Number(object.maxFinalThreads) : undefined,
      inputFormatParallelParsing: isSet(object.inputFormatParallelParsing)
        ? Boolean(object.inputFormatParallelParsing)
        : undefined,
      inputFormatImportNestedJson: isSet(object.inputFormatImportNestedJson)
        ? Boolean(object.inputFormatImportNestedJson)
        : undefined,
      localFilesystemReadMethod: isSet(object.localFilesystemReadMethod)
        ? userSettings_LocalFilesystemReadMethodFromJSON(object.localFilesystemReadMethod)
        : 0,
      maxReadBufferSize: isSet(object.maxReadBufferSize) ? Number(object.maxReadBufferSize) : undefined,
      insertKeeperMaxRetries: isSet(object.insertKeeperMaxRetries) ? Number(object.insertKeeperMaxRetries) : undefined,
      maxTemporaryDataOnDiskSizeForUser: isSet(object.maxTemporaryDataOnDiskSizeForUser)
        ? Number(object.maxTemporaryDataOnDiskSizeForUser)
        : undefined,
      maxTemporaryDataOnDiskSizeForQuery: isSet(object.maxTemporaryDataOnDiskSizeForQuery)
        ? Number(object.maxTemporaryDataOnDiskSizeForQuery)
        : undefined,
      maxParserDepth: isSet(object.maxParserDepth) ? Number(object.maxParserDepth) : undefined,
      remoteFilesystemReadMethod: isSet(object.remoteFilesystemReadMethod)
        ? userSettings_RemoteFilesystemReadMethodFromJSON(object.remoteFilesystemReadMethod)
        : 0,
      memoryOvercommitRatioDenominator: isSet(object.memoryOvercommitRatioDenominator)
        ? Number(object.memoryOvercommitRatioDenominator)
        : undefined,
      memoryOvercommitRatioDenominatorForUser: isSet(object.memoryOvercommitRatioDenominatorForUser)
        ? Number(object.memoryOvercommitRatioDenominatorForUser)
        : undefined,
      memoryUsageOvercommitMaxWaitMicroseconds: isSet(object.memoryUsageOvercommitMaxWaitMicroseconds)
        ? Number(object.memoryUsageOvercommitMaxWaitMicroseconds)
        : undefined,
      compile: isSet(object.compile) ? Boolean(object.compile) : undefined,
      minCountToCompile: isSet(object.minCountToCompile) ? Number(object.minCountToCompile) : undefined,
    };
  },

  toJSON(message: UserSettings): unknown {
    const obj: any = {};
    if (message.readonly !== undefined) {
      obj.readonly = message.readonly;
    }
    if (message.allowDdl !== undefined) {
      obj.allowDdl = message.allowDdl;
    }
    if (message.allowIntrospectionFunctions !== undefined) {
      obj.allowIntrospectionFunctions = message.allowIntrospectionFunctions;
    }
    if (message.connectTimeout !== undefined) {
      obj.connectTimeout = message.connectTimeout;
    }
    if (message.connectTimeoutWithFailover !== undefined) {
      obj.connectTimeoutWithFailover = message.connectTimeoutWithFailover;
    }
    if (message.receiveTimeout !== undefined) {
      obj.receiveTimeout = message.receiveTimeout;
    }
    if (message.sendTimeout !== undefined) {
      obj.sendTimeout = message.sendTimeout;
    }
    if (message.timeoutBeforeCheckingExecutionSpeed !== undefined) {
      obj.timeoutBeforeCheckingExecutionSpeed = message.timeoutBeforeCheckingExecutionSpeed;
    }
    if (message.insertQuorum !== undefined) {
      obj.insertQuorum = message.insertQuorum;
    }
    if (message.insertQuorumTimeout !== undefined) {
      obj.insertQuorumTimeout = message.insertQuorumTimeout;
    }
    if (message.insertQuorumParallel !== undefined) {
      obj.insertQuorumParallel = message.insertQuorumParallel;
    }
    if (message.insertNullAsDefault !== undefined) {
      obj.insertNullAsDefault = message.insertNullAsDefault;
    }
    if (message.selectSequentialConsistency !== undefined) {
      obj.selectSequentialConsistency = message.selectSequentialConsistency;
    }
    if (message.deduplicateBlocksInDependentMaterializedViews !== undefined) {
      obj.deduplicateBlocksInDependentMaterializedViews = message.deduplicateBlocksInDependentMaterializedViews;
    }
    if (message.replicationAlterPartitionsSync !== undefined) {
      obj.replicationAlterPartitionsSync = message.replicationAlterPartitionsSync;
    }
    if (message.maxReplicaDelayForDistributedQueries !== undefined) {
      obj.maxReplicaDelayForDistributedQueries = message.maxReplicaDelayForDistributedQueries;
    }
    if (message.fallbackToStaleReplicasForDistributedQueries !== undefined) {
      obj.fallbackToStaleReplicasForDistributedQueries = message.fallbackToStaleReplicasForDistributedQueries;
    }
    if (message.distributedProductMode !== 0) {
      obj.distributedProductMode = userSettings_DistributedProductModeToJSON(message.distributedProductMode);
    }
    if (message.distributedAggregationMemoryEfficient !== undefined) {
      obj.distributedAggregationMemoryEfficient = message.distributedAggregationMemoryEfficient;
    }
    if (message.distributedDdlTaskTimeout !== undefined) {
      obj.distributedDdlTaskTimeout = message.distributedDdlTaskTimeout;
    }
    if (message.skipUnavailableShards !== undefined) {
      obj.skipUnavailableShards = message.skipUnavailableShards;
    }
    if (message.compileExpressions !== undefined) {
      obj.compileExpressions = message.compileExpressions;
    }
    if (message.minCountToCompileExpression !== undefined) {
      obj.minCountToCompileExpression = message.minCountToCompileExpression;
    }
    if (message.maxBlockSize !== undefined) {
      obj.maxBlockSize = message.maxBlockSize;
    }
    if (message.minInsertBlockSizeRows !== undefined) {
      obj.minInsertBlockSizeRows = message.minInsertBlockSizeRows;
    }
    if (message.minInsertBlockSizeBytes !== undefined) {
      obj.minInsertBlockSizeBytes = message.minInsertBlockSizeBytes;
    }
    if (message.maxInsertBlockSize !== undefined) {
      obj.maxInsertBlockSize = message.maxInsertBlockSize;
    }
    if (message.minBytesToUseDirectIo !== undefined) {
      obj.minBytesToUseDirectIo = message.minBytesToUseDirectIo;
    }
    if (message.useUncompressedCache !== undefined) {
      obj.useUncompressedCache = message.useUncompressedCache;
    }
    if (message.mergeTreeMaxRowsToUseCache !== undefined) {
      obj.mergeTreeMaxRowsToUseCache = message.mergeTreeMaxRowsToUseCache;
    }
    if (message.mergeTreeMaxBytesToUseCache !== undefined) {
      obj.mergeTreeMaxBytesToUseCache = message.mergeTreeMaxBytesToUseCache;
    }
    if (message.mergeTreeMinRowsForConcurrentRead !== undefined) {
      obj.mergeTreeMinRowsForConcurrentRead = message.mergeTreeMinRowsForConcurrentRead;
    }
    if (message.mergeTreeMinBytesForConcurrentRead !== undefined) {
      obj.mergeTreeMinBytesForConcurrentRead = message.mergeTreeMinBytesForConcurrentRead;
    }
    if (message.maxBytesBeforeExternalGroupBy !== undefined) {
      obj.maxBytesBeforeExternalGroupBy = message.maxBytesBeforeExternalGroupBy;
    }
    if (message.maxBytesBeforeExternalSort !== undefined) {
      obj.maxBytesBeforeExternalSort = message.maxBytesBeforeExternalSort;
    }
    if (message.groupByTwoLevelThreshold !== undefined) {
      obj.groupByTwoLevelThreshold = message.groupByTwoLevelThreshold;
    }
    if (message.groupByTwoLevelThresholdBytes !== undefined) {
      obj.groupByTwoLevelThresholdBytes = message.groupByTwoLevelThresholdBytes;
    }
    if (message.priority !== undefined) {
      obj.priority = message.priority;
    }
    if (message.maxThreads !== undefined) {
      obj.maxThreads = message.maxThreads;
    }
    if (message.maxMemoryUsage !== undefined) {
      obj.maxMemoryUsage = message.maxMemoryUsage;
    }
    if (message.maxMemoryUsageForUser !== undefined) {
      obj.maxMemoryUsageForUser = message.maxMemoryUsageForUser;
    }
    if (message.maxNetworkBandwidth !== undefined) {
      obj.maxNetworkBandwidth = message.maxNetworkBandwidth;
    }
    if (message.maxNetworkBandwidthForUser !== undefined) {
      obj.maxNetworkBandwidthForUser = message.maxNetworkBandwidthForUser;
    }
    if (message.maxPartitionsPerInsertBlock !== undefined) {
      obj.maxPartitionsPerInsertBlock = message.maxPartitionsPerInsertBlock;
    }
    if (message.maxConcurrentQueriesForUser !== undefined) {
      obj.maxConcurrentQueriesForUser = message.maxConcurrentQueriesForUser;
    }
    if (message.forceIndexByDate !== undefined) {
      obj.forceIndexByDate = message.forceIndexByDate;
    }
    if (message.forcePrimaryKey !== undefined) {
      obj.forcePrimaryKey = message.forcePrimaryKey;
    }
    if (message.maxRowsToRead !== undefined) {
      obj.maxRowsToRead = message.maxRowsToRead;
    }
    if (message.maxBytesToRead !== undefined) {
      obj.maxBytesToRead = message.maxBytesToRead;
    }
    if (message.readOverflowMode !== 0) {
      obj.readOverflowMode = userSettings_OverflowModeToJSON(message.readOverflowMode);
    }
    if (message.maxRowsToGroupBy !== undefined) {
      obj.maxRowsToGroupBy = message.maxRowsToGroupBy;
    }
    if (message.groupByOverflowMode !== 0) {
      obj.groupByOverflowMode = userSettings_GroupByOverflowModeToJSON(message.groupByOverflowMode);
    }
    if (message.maxRowsToSort !== undefined) {
      obj.maxRowsToSort = message.maxRowsToSort;
    }
    if (message.maxBytesToSort !== undefined) {
      obj.maxBytesToSort = message.maxBytesToSort;
    }
    if (message.sortOverflowMode !== 0) {
      obj.sortOverflowMode = userSettings_OverflowModeToJSON(message.sortOverflowMode);
    }
    if (message.maxResultRows !== undefined) {
      obj.maxResultRows = message.maxResultRows;
    }
    if (message.maxResultBytes !== undefined) {
      obj.maxResultBytes = message.maxResultBytes;
    }
    if (message.resultOverflowMode !== 0) {
      obj.resultOverflowMode = userSettings_OverflowModeToJSON(message.resultOverflowMode);
    }
    if (message.maxRowsInDistinct !== undefined) {
      obj.maxRowsInDistinct = message.maxRowsInDistinct;
    }
    if (message.maxBytesInDistinct !== undefined) {
      obj.maxBytesInDistinct = message.maxBytesInDistinct;
    }
    if (message.distinctOverflowMode !== 0) {
      obj.distinctOverflowMode = userSettings_OverflowModeToJSON(message.distinctOverflowMode);
    }
    if (message.maxRowsToTransfer !== undefined) {
      obj.maxRowsToTransfer = message.maxRowsToTransfer;
    }
    if (message.maxBytesToTransfer !== undefined) {
      obj.maxBytesToTransfer = message.maxBytesToTransfer;
    }
    if (message.transferOverflowMode !== 0) {
      obj.transferOverflowMode = userSettings_OverflowModeToJSON(message.transferOverflowMode);
    }
    if (message.maxExecutionTime !== undefined) {
      obj.maxExecutionTime = message.maxExecutionTime;
    }
    if (message.timeoutOverflowMode !== 0) {
      obj.timeoutOverflowMode = userSettings_OverflowModeToJSON(message.timeoutOverflowMode);
    }
    if (message.maxRowsInSet !== undefined) {
      obj.maxRowsInSet = message.maxRowsInSet;
    }
    if (message.maxBytesInSet !== undefined) {
      obj.maxBytesInSet = message.maxBytesInSet;
    }
    if (message.setOverflowMode !== 0) {
      obj.setOverflowMode = userSettings_OverflowModeToJSON(message.setOverflowMode);
    }
    if (message.maxRowsInJoin !== undefined) {
      obj.maxRowsInJoin = message.maxRowsInJoin;
    }
    if (message.maxBytesInJoin !== undefined) {
      obj.maxBytesInJoin = message.maxBytesInJoin;
    }
    if (message.joinOverflowMode !== 0) {
      obj.joinOverflowMode = userSettings_OverflowModeToJSON(message.joinOverflowMode);
    }
    if (message.joinAlgorithm?.length) {
      obj.joinAlgorithm = message.joinAlgorithm.map((e) => userSettings_JoinAlgorithmToJSON(e));
    }
    if (message.anyJoinDistinctRightTableKeys !== undefined) {
      obj.anyJoinDistinctRightTableKeys = message.anyJoinDistinctRightTableKeys;
    }
    if (message.maxColumnsToRead !== undefined) {
      obj.maxColumnsToRead = message.maxColumnsToRead;
    }
    if (message.maxTemporaryColumns !== undefined) {
      obj.maxTemporaryColumns = message.maxTemporaryColumns;
    }
    if (message.maxTemporaryNonConstColumns !== undefined) {
      obj.maxTemporaryNonConstColumns = message.maxTemporaryNonConstColumns;
    }
    if (message.maxQuerySize !== undefined) {
      obj.maxQuerySize = message.maxQuerySize;
    }
    if (message.maxAstDepth !== undefined) {
      obj.maxAstDepth = message.maxAstDepth;
    }
    if (message.maxAstElements !== undefined) {
      obj.maxAstElements = message.maxAstElements;
    }
    if (message.maxExpandedAstElements !== undefined) {
      obj.maxExpandedAstElements = message.maxExpandedAstElements;
    }
    if (message.minExecutionSpeed !== undefined) {
      obj.minExecutionSpeed = message.minExecutionSpeed;
    }
    if (message.minExecutionSpeedBytes !== undefined) {
      obj.minExecutionSpeedBytes = message.minExecutionSpeedBytes;
    }
    if (message.countDistinctImplementation !== 0) {
      obj.countDistinctImplementation = userSettings_CountDistinctImplementationToJSON(
        message.countDistinctImplementation,
      );
    }
    if (message.inputFormatValuesInterpretExpressions !== undefined) {
      obj.inputFormatValuesInterpretExpressions = message.inputFormatValuesInterpretExpressions;
    }
    if (message.inputFormatDefaultsForOmittedFields !== undefined) {
      obj.inputFormatDefaultsForOmittedFields = message.inputFormatDefaultsForOmittedFields;
    }
    if (message.inputFormatNullAsDefault !== undefined) {
      obj.inputFormatNullAsDefault = message.inputFormatNullAsDefault;
    }
    if (message.dateTimeInputFormat !== 0) {
      obj.dateTimeInputFormat = userSettings_DateTimeInputFormatToJSON(message.dateTimeInputFormat);
    }
    if (message.inputFormatWithNamesUseHeader !== undefined) {
      obj.inputFormatWithNamesUseHeader = message.inputFormatWithNamesUseHeader;
    }
    if (message.outputFormatJsonQuote64bitIntegers !== undefined) {
      obj.outputFormatJsonQuote_64bitIntegers = message.outputFormatJsonQuote64bitIntegers;
    }
    if (message.outputFormatJsonQuoteDenormals !== undefined) {
      obj.outputFormatJsonQuoteDenormals = message.outputFormatJsonQuoteDenormals;
    }
    if (message.dateTimeOutputFormat !== 0) {
      obj.dateTimeOutputFormat = userSettings_DateTimeOutputFormatToJSON(message.dateTimeOutputFormat);
    }
    if (message.lowCardinalityAllowInNativeFormat !== undefined) {
      obj.lowCardinalityAllowInNativeFormat = message.lowCardinalityAllowInNativeFormat;
    }
    if (message.allowSuspiciousLowCardinalityTypes !== undefined) {
      obj.allowSuspiciousLowCardinalityTypes = message.allowSuspiciousLowCardinalityTypes;
    }
    if (message.emptyResultForAggregationByEmptySet !== undefined) {
      obj.emptyResultForAggregationByEmptySet = message.emptyResultForAggregationByEmptySet;
    }
    if (message.httpConnectionTimeout !== undefined) {
      obj.httpConnectionTimeout = message.httpConnectionTimeout;
    }
    if (message.httpReceiveTimeout !== undefined) {
      obj.httpReceiveTimeout = message.httpReceiveTimeout;
    }
    if (message.httpSendTimeout !== undefined) {
      obj.httpSendTimeout = message.httpSendTimeout;
    }
    if (message.enableHttpCompression !== undefined) {
      obj.enableHttpCompression = message.enableHttpCompression;
    }
    if (message.sendProgressInHttpHeaders !== undefined) {
      obj.sendProgressInHttpHeaders = message.sendProgressInHttpHeaders;
    }
    if (message.httpHeadersProgressInterval !== undefined) {
      obj.httpHeadersProgressInterval = message.httpHeadersProgressInterval;
    }
    if (message.addHttpCorsHeader !== undefined) {
      obj.addHttpCorsHeader = message.addHttpCorsHeader;
    }
    if (message.cancelHttpReadonlyQueriesOnClientClose !== undefined) {
      obj.cancelHttpReadonlyQueriesOnClientClose = message.cancelHttpReadonlyQueriesOnClientClose;
    }
    if (message.maxHttpGetRedirects !== undefined) {
      obj.maxHttpGetRedirects = message.maxHttpGetRedirects;
    }
    if (message.joinedSubqueryRequiresAlias !== undefined) {
      obj.joinedSubqueryRequiresAlias = message.joinedSubqueryRequiresAlias;
    }
    if (message.joinUseNulls !== undefined) {
      obj.joinUseNulls = message.joinUseNulls;
    }
    if (message.transformNullIn !== undefined) {
      obj.transformNullIn = message.transformNullIn;
    }
    if (message.quotaMode !== 0) {
      obj.quotaMode = userSettings_QuotaModeToJSON(message.quotaMode);
    }
    if (message.flattenNested !== undefined) {
      obj.flattenNested = message.flattenNested;
    }
    if (message.formatRegexp !== "") {
      obj.formatRegexp = message.formatRegexp;
    }
    if (message.formatRegexpEscapingRule !== 0) {
      obj.formatRegexpEscapingRule = userSettings_FormatRegexpEscapingRuleToJSON(message.formatRegexpEscapingRule);
    }
    if (message.formatRegexpSkipUnmatched !== undefined) {
      obj.formatRegexpSkipUnmatched = message.formatRegexpSkipUnmatched;
    }
    if (message.asyncInsert !== undefined) {
      obj.asyncInsert = message.asyncInsert;
    }
    if (message.asyncInsertThreads !== undefined) {
      obj.asyncInsertThreads = message.asyncInsertThreads;
    }
    if (message.waitForAsyncInsert !== undefined) {
      obj.waitForAsyncInsert = message.waitForAsyncInsert;
    }
    if (message.waitForAsyncInsertTimeout !== undefined) {
      obj.waitForAsyncInsertTimeout = message.waitForAsyncInsertTimeout;
    }
    if (message.asyncInsertMaxDataSize !== undefined) {
      obj.asyncInsertMaxDataSize = message.asyncInsertMaxDataSize;
    }
    if (message.asyncInsertBusyTimeout !== undefined) {
      obj.asyncInsertBusyTimeout = message.asyncInsertBusyTimeout;
    }
    if (message.asyncInsertStaleTimeout !== undefined) {
      obj.asyncInsertStaleTimeout = message.asyncInsertStaleTimeout;
    }
    if (message.memoryProfilerStep !== undefined) {
      obj.memoryProfilerStep = message.memoryProfilerStep;
    }
    if (message.memoryProfilerSampleProbability !== undefined) {
      obj.memoryProfilerSampleProbability = message.memoryProfilerSampleProbability;
    }
    if (message.maxFinalThreads !== undefined) {
      obj.maxFinalThreads = message.maxFinalThreads;
    }
    if (message.inputFormatParallelParsing !== undefined) {
      obj.inputFormatParallelParsing = message.inputFormatParallelParsing;
    }
    if (message.inputFormatImportNestedJson !== undefined) {
      obj.inputFormatImportNestedJson = message.inputFormatImportNestedJson;
    }
    if (message.localFilesystemReadMethod !== 0) {
      obj.localFilesystemReadMethod = userSettings_LocalFilesystemReadMethodToJSON(message.localFilesystemReadMethod);
    }
    if (message.maxReadBufferSize !== undefined) {
      obj.maxReadBufferSize = message.maxReadBufferSize;
    }
    if (message.insertKeeperMaxRetries !== undefined) {
      obj.insertKeeperMaxRetries = message.insertKeeperMaxRetries;
    }
    if (message.maxTemporaryDataOnDiskSizeForUser !== undefined) {
      obj.maxTemporaryDataOnDiskSizeForUser = message.maxTemporaryDataOnDiskSizeForUser;
    }
    if (message.maxTemporaryDataOnDiskSizeForQuery !== undefined) {
      obj.maxTemporaryDataOnDiskSizeForQuery = message.maxTemporaryDataOnDiskSizeForQuery;
    }
    if (message.maxParserDepth !== undefined) {
      obj.maxParserDepth = message.maxParserDepth;
    }
    if (message.remoteFilesystemReadMethod !== 0) {
      obj.remoteFilesystemReadMethod = userSettings_RemoteFilesystemReadMethodToJSON(
        message.remoteFilesystemReadMethod,
      );
    }
    if (message.memoryOvercommitRatioDenominator !== undefined) {
      obj.memoryOvercommitRatioDenominator = message.memoryOvercommitRatioDenominator;
    }
    if (message.memoryOvercommitRatioDenominatorForUser !== undefined) {
      obj.memoryOvercommitRatioDenominatorForUser = message.memoryOvercommitRatioDenominatorForUser;
    }
    if (message.memoryUsageOvercommitMaxWaitMicroseconds !== undefined) {
      obj.memoryUsageOvercommitMaxWaitMicroseconds = message.memoryUsageOvercommitMaxWaitMicroseconds;
    }
    if (message.compile !== undefined) {
      obj.compile = message.compile;
    }
    if (message.minCountToCompile !== undefined) {
      obj.minCountToCompile = message.minCountToCompile;
    }
    return obj;
  },

  create(base?: DeepPartial<UserSettings>): UserSettings {
    return UserSettings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserSettings>): UserSettings {
    const message = createBaseUserSettings();
    message.readonly = object.readonly ?? undefined;
    message.allowDdl = object.allowDdl ?? undefined;
    message.allowIntrospectionFunctions = object.allowIntrospectionFunctions ?? undefined;
    message.connectTimeout = object.connectTimeout ?? undefined;
    message.connectTimeoutWithFailover = object.connectTimeoutWithFailover ?? undefined;
    message.receiveTimeout = object.receiveTimeout ?? undefined;
    message.sendTimeout = object.sendTimeout ?? undefined;
    message.timeoutBeforeCheckingExecutionSpeed = object.timeoutBeforeCheckingExecutionSpeed ?? undefined;
    message.insertQuorum = object.insertQuorum ?? undefined;
    message.insertQuorumTimeout = object.insertQuorumTimeout ?? undefined;
    message.insertQuorumParallel = object.insertQuorumParallel ?? undefined;
    message.insertNullAsDefault = object.insertNullAsDefault ?? undefined;
    message.selectSequentialConsistency = object.selectSequentialConsistency ?? undefined;
    message.deduplicateBlocksInDependentMaterializedViews = object.deduplicateBlocksInDependentMaterializedViews ??
      undefined;
    message.replicationAlterPartitionsSync = object.replicationAlterPartitionsSync ?? undefined;
    message.maxReplicaDelayForDistributedQueries = object.maxReplicaDelayForDistributedQueries ?? undefined;
    message.fallbackToStaleReplicasForDistributedQueries = object.fallbackToStaleReplicasForDistributedQueries ??
      undefined;
    message.distributedProductMode = object.distributedProductMode ?? 0;
    message.distributedAggregationMemoryEfficient = object.distributedAggregationMemoryEfficient ?? undefined;
    message.distributedDdlTaskTimeout = object.distributedDdlTaskTimeout ?? undefined;
    message.skipUnavailableShards = object.skipUnavailableShards ?? undefined;
    message.compileExpressions = object.compileExpressions ?? undefined;
    message.minCountToCompileExpression = object.minCountToCompileExpression ?? undefined;
    message.maxBlockSize = object.maxBlockSize ?? undefined;
    message.minInsertBlockSizeRows = object.minInsertBlockSizeRows ?? undefined;
    message.minInsertBlockSizeBytes = object.minInsertBlockSizeBytes ?? undefined;
    message.maxInsertBlockSize = object.maxInsertBlockSize ?? undefined;
    message.minBytesToUseDirectIo = object.minBytesToUseDirectIo ?? undefined;
    message.useUncompressedCache = object.useUncompressedCache ?? undefined;
    message.mergeTreeMaxRowsToUseCache = object.mergeTreeMaxRowsToUseCache ?? undefined;
    message.mergeTreeMaxBytesToUseCache = object.mergeTreeMaxBytesToUseCache ?? undefined;
    message.mergeTreeMinRowsForConcurrentRead = object.mergeTreeMinRowsForConcurrentRead ?? undefined;
    message.mergeTreeMinBytesForConcurrentRead = object.mergeTreeMinBytesForConcurrentRead ?? undefined;
    message.maxBytesBeforeExternalGroupBy = object.maxBytesBeforeExternalGroupBy ?? undefined;
    message.maxBytesBeforeExternalSort = object.maxBytesBeforeExternalSort ?? undefined;
    message.groupByTwoLevelThreshold = object.groupByTwoLevelThreshold ?? undefined;
    message.groupByTwoLevelThresholdBytes = object.groupByTwoLevelThresholdBytes ?? undefined;
    message.priority = object.priority ?? undefined;
    message.maxThreads = object.maxThreads ?? undefined;
    message.maxMemoryUsage = object.maxMemoryUsage ?? undefined;
    message.maxMemoryUsageForUser = object.maxMemoryUsageForUser ?? undefined;
    message.maxNetworkBandwidth = object.maxNetworkBandwidth ?? undefined;
    message.maxNetworkBandwidthForUser = object.maxNetworkBandwidthForUser ?? undefined;
    message.maxPartitionsPerInsertBlock = object.maxPartitionsPerInsertBlock ?? undefined;
    message.maxConcurrentQueriesForUser = object.maxConcurrentQueriesForUser ?? undefined;
    message.forceIndexByDate = object.forceIndexByDate ?? undefined;
    message.forcePrimaryKey = object.forcePrimaryKey ?? undefined;
    message.maxRowsToRead = object.maxRowsToRead ?? undefined;
    message.maxBytesToRead = object.maxBytesToRead ?? undefined;
    message.readOverflowMode = object.readOverflowMode ?? 0;
    message.maxRowsToGroupBy = object.maxRowsToGroupBy ?? undefined;
    message.groupByOverflowMode = object.groupByOverflowMode ?? 0;
    message.maxRowsToSort = object.maxRowsToSort ?? undefined;
    message.maxBytesToSort = object.maxBytesToSort ?? undefined;
    message.sortOverflowMode = object.sortOverflowMode ?? 0;
    message.maxResultRows = object.maxResultRows ?? undefined;
    message.maxResultBytes = object.maxResultBytes ?? undefined;
    message.resultOverflowMode = object.resultOverflowMode ?? 0;
    message.maxRowsInDistinct = object.maxRowsInDistinct ?? undefined;
    message.maxBytesInDistinct = object.maxBytesInDistinct ?? undefined;
    message.distinctOverflowMode = object.distinctOverflowMode ?? 0;
    message.maxRowsToTransfer = object.maxRowsToTransfer ?? undefined;
    message.maxBytesToTransfer = object.maxBytesToTransfer ?? undefined;
    message.transferOverflowMode = object.transferOverflowMode ?? 0;
    message.maxExecutionTime = object.maxExecutionTime ?? undefined;
    message.timeoutOverflowMode = object.timeoutOverflowMode ?? 0;
    message.maxRowsInSet = object.maxRowsInSet ?? undefined;
    message.maxBytesInSet = object.maxBytesInSet ?? undefined;
    message.setOverflowMode = object.setOverflowMode ?? 0;
    message.maxRowsInJoin = object.maxRowsInJoin ?? undefined;
    message.maxBytesInJoin = object.maxBytesInJoin ?? undefined;
    message.joinOverflowMode = object.joinOverflowMode ?? 0;
    message.joinAlgorithm = object.joinAlgorithm?.map((e) => e) || [];
    message.anyJoinDistinctRightTableKeys = object.anyJoinDistinctRightTableKeys ?? undefined;
    message.maxColumnsToRead = object.maxColumnsToRead ?? undefined;
    message.maxTemporaryColumns = object.maxTemporaryColumns ?? undefined;
    message.maxTemporaryNonConstColumns = object.maxTemporaryNonConstColumns ?? undefined;
    message.maxQuerySize = object.maxQuerySize ?? undefined;
    message.maxAstDepth = object.maxAstDepth ?? undefined;
    message.maxAstElements = object.maxAstElements ?? undefined;
    message.maxExpandedAstElements = object.maxExpandedAstElements ?? undefined;
    message.minExecutionSpeed = object.minExecutionSpeed ?? undefined;
    message.minExecutionSpeedBytes = object.minExecutionSpeedBytes ?? undefined;
    message.countDistinctImplementation = object.countDistinctImplementation ?? 0;
    message.inputFormatValuesInterpretExpressions = object.inputFormatValuesInterpretExpressions ?? undefined;
    message.inputFormatDefaultsForOmittedFields = object.inputFormatDefaultsForOmittedFields ?? undefined;
    message.inputFormatNullAsDefault = object.inputFormatNullAsDefault ?? undefined;
    message.dateTimeInputFormat = object.dateTimeInputFormat ?? 0;
    message.inputFormatWithNamesUseHeader = object.inputFormatWithNamesUseHeader ?? undefined;
    message.outputFormatJsonQuote64bitIntegers = object.outputFormatJsonQuote64bitIntegers ?? undefined;
    message.outputFormatJsonQuoteDenormals = object.outputFormatJsonQuoteDenormals ?? undefined;
    message.dateTimeOutputFormat = object.dateTimeOutputFormat ?? 0;
    message.lowCardinalityAllowInNativeFormat = object.lowCardinalityAllowInNativeFormat ?? undefined;
    message.allowSuspiciousLowCardinalityTypes = object.allowSuspiciousLowCardinalityTypes ?? undefined;
    message.emptyResultForAggregationByEmptySet = object.emptyResultForAggregationByEmptySet ?? undefined;
    message.httpConnectionTimeout = object.httpConnectionTimeout ?? undefined;
    message.httpReceiveTimeout = object.httpReceiveTimeout ?? undefined;
    message.httpSendTimeout = object.httpSendTimeout ?? undefined;
    message.enableHttpCompression = object.enableHttpCompression ?? undefined;
    message.sendProgressInHttpHeaders = object.sendProgressInHttpHeaders ?? undefined;
    message.httpHeadersProgressInterval = object.httpHeadersProgressInterval ?? undefined;
    message.addHttpCorsHeader = object.addHttpCorsHeader ?? undefined;
    message.cancelHttpReadonlyQueriesOnClientClose = object.cancelHttpReadonlyQueriesOnClientClose ?? undefined;
    message.maxHttpGetRedirects = object.maxHttpGetRedirects ?? undefined;
    message.joinedSubqueryRequiresAlias = object.joinedSubqueryRequiresAlias ?? undefined;
    message.joinUseNulls = object.joinUseNulls ?? undefined;
    message.transformNullIn = object.transformNullIn ?? undefined;
    message.quotaMode = object.quotaMode ?? 0;
    message.flattenNested = object.flattenNested ?? undefined;
    message.formatRegexp = object.formatRegexp ?? "";
    message.formatRegexpEscapingRule = object.formatRegexpEscapingRule ?? 0;
    message.formatRegexpSkipUnmatched = object.formatRegexpSkipUnmatched ?? undefined;
    message.asyncInsert = object.asyncInsert ?? undefined;
    message.asyncInsertThreads = object.asyncInsertThreads ?? undefined;
    message.waitForAsyncInsert = object.waitForAsyncInsert ?? undefined;
    message.waitForAsyncInsertTimeout = object.waitForAsyncInsertTimeout ?? undefined;
    message.asyncInsertMaxDataSize = object.asyncInsertMaxDataSize ?? undefined;
    message.asyncInsertBusyTimeout = object.asyncInsertBusyTimeout ?? undefined;
    message.asyncInsertStaleTimeout = object.asyncInsertStaleTimeout ?? undefined;
    message.memoryProfilerStep = object.memoryProfilerStep ?? undefined;
    message.memoryProfilerSampleProbability = object.memoryProfilerSampleProbability ?? undefined;
    message.maxFinalThreads = object.maxFinalThreads ?? undefined;
    message.inputFormatParallelParsing = object.inputFormatParallelParsing ?? undefined;
    message.inputFormatImportNestedJson = object.inputFormatImportNestedJson ?? undefined;
    message.localFilesystemReadMethod = object.localFilesystemReadMethod ?? 0;
    message.maxReadBufferSize = object.maxReadBufferSize ?? undefined;
    message.insertKeeperMaxRetries = object.insertKeeperMaxRetries ?? undefined;
    message.maxTemporaryDataOnDiskSizeForUser = object.maxTemporaryDataOnDiskSizeForUser ?? undefined;
    message.maxTemporaryDataOnDiskSizeForQuery = object.maxTemporaryDataOnDiskSizeForQuery ?? undefined;
    message.maxParserDepth = object.maxParserDepth ?? undefined;
    message.remoteFilesystemReadMethod = object.remoteFilesystemReadMethod ?? 0;
    message.memoryOvercommitRatioDenominator = object.memoryOvercommitRatioDenominator ?? undefined;
    message.memoryOvercommitRatioDenominatorForUser = object.memoryOvercommitRatioDenominatorForUser ?? undefined;
    message.memoryUsageOvercommitMaxWaitMicroseconds = object.memoryUsageOvercommitMaxWaitMicroseconds ?? undefined;
    message.compile = object.compile ?? undefined;
    message.minCountToCompile = object.minCountToCompile ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UserSettings.$type, UserSettings);

function createBaseUserQuota(): UserQuota {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota",
    intervalDuration: undefined,
    queries: undefined,
    errors: undefined,
    resultRows: undefined,
    readRows: undefined,
    executionTime: undefined,
  };
}

export const UserQuota = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota" as const,

  encode(message: UserQuota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.intervalDuration !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.intervalDuration! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.queries !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.queries! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.errors !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.errors! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.resultRows !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.resultRows! }, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.readRows !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.readRows! }, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.executionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.executionTime! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserQuota {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserQuota();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.intervalDuration = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.queries = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.errors = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resultRows = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.readRows = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.executionTime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserQuota {
    return {
      $type: UserQuota.$type,
      intervalDuration: isSet(object.intervalDuration) ? Number(object.intervalDuration) : undefined,
      queries: isSet(object.queries) ? Number(object.queries) : undefined,
      errors: isSet(object.errors) ? Number(object.errors) : undefined,
      resultRows: isSet(object.resultRows) ? Number(object.resultRows) : undefined,
      readRows: isSet(object.readRows) ? Number(object.readRows) : undefined,
      executionTime: isSet(object.executionTime) ? Number(object.executionTime) : undefined,
    };
  },

  toJSON(message: UserQuota): unknown {
    const obj: any = {};
    if (message.intervalDuration !== undefined) {
      obj.intervalDuration = message.intervalDuration;
    }
    if (message.queries !== undefined) {
      obj.queries = message.queries;
    }
    if (message.errors !== undefined) {
      obj.errors = message.errors;
    }
    if (message.resultRows !== undefined) {
      obj.resultRows = message.resultRows;
    }
    if (message.readRows !== undefined) {
      obj.readRows = message.readRows;
    }
    if (message.executionTime !== undefined) {
      obj.executionTime = message.executionTime;
    }
    return obj;
  },

  create(base?: DeepPartial<UserQuota>): UserQuota {
    return UserQuota.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserQuota>): UserQuota {
    const message = createBaseUserQuota();
    message.intervalDuration = object.intervalDuration ?? undefined;
    message.queries = object.queries ?? undefined;
    message.errors = object.errors ?? undefined;
    message.resultRows = object.resultRows ?? undefined;
    message.readRows = object.readRows ?? undefined;
    message.executionTime = object.executionTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UserQuota.$type, UserQuota);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
