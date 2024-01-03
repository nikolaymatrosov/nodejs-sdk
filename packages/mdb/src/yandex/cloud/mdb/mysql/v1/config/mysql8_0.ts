/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1.config";

/** Options and structure of `MysqlConfig8_0` reflects MySQL 8.0 configuration file. */
export interface MysqlConfig80 {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig8_0";
  /**
   * Size of the InnoDB buffer pool used for caching table and index data.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size) for details.
   */
  innodbBufferPoolSize?:
    | number
    | undefined;
  /**
   * The maximum permitted number of simultaneous client connections.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_connections) for details.
   */
  maxConnections?:
    | number
    | undefined;
  /**
   * Time that it takes to process a query before it is considered slow.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_long_query_time) for details.
   */
  longQueryTime?:
    | number
    | undefined;
  /**
   * Enable writing of general query log of MySQL.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_general_log) for details.
   */
  generalLog?:
    | boolean
    | undefined;
  /**
   * Enable writing of audit log of MySQL.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/audit-log-reference.html#audit-log-options-variables) for details.
   */
  auditLog?:
    | boolean
    | undefined;
  /**
   * Server SQL mode of MySQL.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-setting) for details.
   */
  sqlMode: MysqlConfig80_SQLMode[];
  /**
   * The maximum size in bytes of one packet.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_allowed_packet) for details.
   */
  maxAllowedPacket?:
    | number
    | undefined;
  /**
   * Authentication plugin used in the managed MySQL cluster.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin) for details.
   */
  defaultAuthenticationPlugin: MysqlConfig80_AuthPlugin;
  /**
   * Transaction log flush behaviour.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_flush_log_at_trx_commit) for details.
   */
  innodbFlushLogAtTrxCommit?:
    | number
    | undefined;
  /**
   * Max time in seconds for a transaction to wait for a row lock.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_lock_wait_timeout) for details.
   */
  innodbLockWaitTimeout?:
    | number
    | undefined;
  /**
   * Default transaction isolation level.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_transaction_isolation) for details.
   */
  transactionIsolation: MysqlConfig80_TransactionIsolation;
  /**
   * Print information about deadlocks in error log.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_print_all_deadlocks) for details.
   */
  innodbPrintAllDeadlocks?:
    | boolean
    | undefined;
  /**
   * The number of seconds to wait for more data from a connection before aborting the read.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_read_timeout) for details.
   */
  netReadTimeout?:
    | number
    | undefined;
  /**
   * The number of seconds to wait for a block to be written to a connection before aborting the write.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_write_timeout) for details.
   */
  netWriteTimeout?:
    | number
    | undefined;
  /**
   * The maximum permitted result length in bytes for the GROUP_CONCAT() function.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_group_concat_max_len) for details.
   */
  groupConcatMaxLen?:
    | number
    | undefined;
  /**
   * The maximum size of internal in-memory temporary tables.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_tmp_table_size) for details.
   */
  tmpTableSize?:
    | number
    | undefined;
  /**
   * This variable sets the maximum size to which user-created MEMORY tables are permitted to grow.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_heap_table_size) for details.
   */
  maxHeapTableSize?:
    | number
    | undefined;
  /**
   * The servers default time zone.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-options.html#option_mysqld_default-time-zone) for details.
   */
  defaultTimeZone: string;
  /**
   * The servers default character set.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_character_set_server) for details.
   */
  characterSetServer: string;
  /**
   * The server default collation.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_collation_server) for details.
   */
  collationServer: string;
  /**
   * Enables InnoDB adaptive hash index.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_adaptive_hash_index) for details.
   */
  innodbAdaptiveHashIndex?:
    | boolean
    | undefined;
  /**
   * Enables the NUMA interleave memory policy for allocation of the InnoDB buffer pool.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_numa_interleave) for details.
   */
  innodbNumaInterleave?:
    | boolean
    | undefined;
  /**
   * The size in bytes of the buffer that InnoDB uses to write to the log files on disk.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_buffer_size) for details.
   */
  innodbLogBufferSize?:
    | number
    | undefined;
  /**
   * The size in bytes of the single InnoDB Redo log file.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_file_size) for details.
   */
  innodbLogFileSize?:
    | number
    | undefined;
  /**
   * Limits IO available for InnoDB background tasks.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_io_capacity) for details.
   */
  innodbIoCapacity?:
    | number
    | undefined;
  /**
   * Limits IO available for InnoDB background tasks.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_io_capacity_max) for details.
   */
  innodbIoCapacityMax?:
    | number
    | undefined;
  /**
   * The number of I/O threads for read operations in InnoDB.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_read_io_threads) for details.
   */
  innodbReadIoThreads?:
    | number
    | undefined;
  /**
   * The number of I/O threads for write operations in InnoDB.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_write_io_threads) for details.
   */
  innodbWriteIoThreads?:
    | number
    | undefined;
  /**
   * The number of background threads devoted to the InnoDB purge operation.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_purge_threads) for details.
   */
  innodbPurgeThreads?:
    | number
    | undefined;
  /**
   * Defines the maximum number of threads permitted inside of InnoDB.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_thread_concurrency) for details.
   */
  innodbThreadConcurrency?:
    | number
    | undefined;
  /**
   * Limits the max size of InnoDB temp tablespace.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_temp_data_file_path) for details.
   */
  innodbTempDataFileMaxSize?:
    | number
    | undefined;
  /**
   * How many threads the server should cache for reuse.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_thread_cache_size) for details.
   */
  threadCacheSize?:
    | number
    | undefined;
  /**
   * The stack size for each thread. The default is large enough for normal operation.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_thread_stack) for details.
   */
  threadStack?:
    | number
    | undefined;
  /**
   * The minimum size of the buffer that is used for plain index scans, range index scans, and joins that do not use indexes and thus perform full table scans.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_join_buffer_size) for details.
   */
  joinBufferSize?:
    | number
    | undefined;
  /**
   * Each session that must perform a sort allocates a buffer of this size.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_sort_buffer_size) for details.
   */
  sortBufferSize?:
    | number
    | undefined;
  /**
   * The number of table definitions that can be stored in the definition cache.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_definition_cache) for details.
   */
  tableDefinitionCache?:
    | number
    | undefined;
  /**
   * The number of open tables for all threads.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_open_cache) for details.
   */
  tableOpenCache?:
    | number
    | undefined;
  /**
   * The number of open tables cache instances.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_open_cache_instances) for details.
   */
  tableOpenCacheInstances?:
    | number
    | undefined;
  /**
   * Determines whether the server enables certain nonstandard behaviors for default values and NULL-value handling in TIMESTAMP columns.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_explicit_defaults_for_timestamp) for details.
   */
  explicitDefaultsForTimestamp?:
    | boolean
    | undefined;
  /**
   * Can be used to control the operation of AUTO_INCREMENT columns.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html#sysvar_auto_increment_increment) for details.
   */
  autoIncrementIncrement?:
    | number
    | undefined;
  /**
   * Can be used to control the operation of AUTO_INCREMENT columns.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html#sysvar_auto_increment_offset) for details.
   */
  autoIncrementOffset?:
    | number
    | undefined;
  /**
   * Controls how often the MySQL server synchronizes the binary log to disk.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_sync_binlog) for details.
   */
  syncBinlog?:
    | number
    | undefined;
  /**
   * The size of the cache to hold changes to the binary log during a transaction.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_cache_size) for details.
   */
  binlogCacheSize?:
    | number
    | undefined;
  /**
   * Controls how many microseconds the binary log commit waits before synchronizing the binary log file to disk.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_group_commit_sync_delay) for details.
   */
  binlogGroupCommitSyncDelay?:
    | number
    | undefined;
  /**
   * For MySQL row-based replication, this variable determines how row images are written to the binary log.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_row_image) for details.
   */
  binlogRowImage: MysqlConfig80_BinlogRowImage;
  /**
   * When enabled, it causes the server to write informational log events such as row query log events into its binary log.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_rows_query_log_events) for details.
   */
  binlogRowsQueryLogEvents?:
    | boolean
    | undefined;
  /**
   * The number of replica acknowledgments the source must receive per transaction before proceeding.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html#sysvar_rpl_semi_sync_master_wait_for_slave_count) for details.
   */
  rplSemiSyncMasterWaitForSlaveCount?:
    | number
    | undefined;
  /**
   * When using a multi-threaded replica, this variable specifies the policy used to decide which transactions are allowed to execute in parallel on the replica.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_parallel_type) for details.
   */
  slaveParallelType: MysqlConfig80_SlaveParallelType;
  /**
   * Sets the number of applier threads for executing replication transactions in parallel.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_parallel_workers) for details.
   */
  slaveParallelWorkers?:
    | number
    | undefined;
  /**
   * The time limit for regular expression matching operations performed by REGEXP_LIKE and similar functions.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_regexp_time_limit) for details.
   */
  regexpTimeLimit?:
    | number
    | undefined;
  /** The size of the binary log to hold. */
  mdbPreserveBinlogBytes?:
    | number
    | undefined;
  /**
   * The number of seconds the server waits for activity on an interactive connection before closing it.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout) for details.
   */
  interactiveTimeout?:
    | number
    | undefined;
  /**
   * The number of seconds the server waits for activity on a noninteractive connection before closing it.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout) for details.
   */
  waitTimeout?:
    | number
    | undefined;
  /** Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = ON' to prevent users from reading stale data. */
  mdbOfflineModeEnableLag?:
    | number
    | undefined;
  /**
   * Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = OFF'.
   * Should be less than mdb_offline_mode_enable_lag.
   */
  mdbOfflineModeDisableLag?:
    | number
    | undefined;
  /**
   * The limit on memory consumption for the range optimizer.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_range_optimizer_max_mem_size) for details.
   */
  rangeOptimizerMaxMemSize?:
    | number
    | undefined;
  /**
   * Manages slow query log.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_slow_query_log) for details.
   */
  slowQueryLog?:
    | boolean
    | undefined;
  /**
   * Query execution time, after which query to be logged unconditionally, that is, `log_slow_rate_limit` will not apply to it.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#slow_query_log_always_write_time) for details.
   */
  slowQueryLogAlwaysWriteTime?:
    | number
    | undefined;
  /**
   * Specifies slow log granularity for `log_slow_rate_limit` QUERY or SESSION value.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_rate_type) for details.
   */
  logSlowRateType: MysqlConfig80_LogSlowRateType;
  /**
   * Specifies what fraction of session/query should be logged. Logging is enabled for every nth session/query.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_rate_limit) for details.
   */
  logSlowRateLimit?:
    | number
    | undefined;
  /**
   * When TRUE, statements executed by stored procedures are logged to the slow log.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_sp_statements) for details.
   */
  logSlowSpStatements?:
    | boolean
    | undefined;
  /**
   * Filters the slow log by the query's execution plan.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_filter) for details.
   */
  logSlowFilter: MysqlConfig80_LogSlowFilterType[];
  /**
   * Replication lag threshold (seconds) which allows replica to be promoted to master while executing "switchover from".
   * Should be less than mdb_offline_mode_disable_lag.
   */
  mdbPriorityChoiceMaxLag?:
    | number
    | undefined;
  /**
   * Specifies the page size for InnoDB tablespaces.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_page_size).
   */
  innodbPageSize?:
    | number
    | undefined;
  /**
   * The limit in bytes on the size of the temporary log files used during online DDL operations
   *
   * See [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_online_alter_log_max_size) for details.
   */
  innodbOnlineAlterLogMaxSize?:
    | number
    | undefined;
  /**
   * Minimum length of words that are stored in an InnoDB FULLTEXT index
   *
   * See [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_min_token_size) for details.
   */
  innodbFtMinTokenSize?:
    | number
    | undefined;
  /**
   * Maximum length of words that are stored in an InnoDB FULLTEXT index
   *
   * See [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_max_token_size) for details.
   */
  innodbFtMaxTokenSize?:
    | number
    | undefined;
  /**
   * Table names storage and comparison strategy
   *
   * See [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lower_case_table_names) for details.
   */
  lowerCaseTableNames?:
    | number
    | undefined;
  /**
   * The number of times that any given stored procedure may be called recursively.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_sp_recursion_depth).
   */
  maxSpRecursionDepth?:
    | number
    | undefined;
  /**
   * The level of zlib compression to use for InnoDB compressed tables and indexes.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_compression_level).
   */
  innodbCompressionLevel?:
    | number
    | undefined;
  /**
   * Specifies how the source mysqld generates the dependency information that it writes in the binary log to help replicas determine which transactions can be executed in parallel.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_transaction_dependency_tracking).
   */
  binlogTransactionDependencyTracking: MysqlConfig80_BinlogTransactionDependencyTracking;
  /**
   * Config specific will be all changes to a table take effect immediately or you must use COMMIT to accept a transaction or ROLLBACK to cancel it.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_autocommit).
   */
  autocommit?:
    | boolean
    | undefined;
  /**
   * Enables or disables periodic output for the standard InnoDB Monitor.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_status_output).
   */
  innodbStatusOutput?:
    | boolean
    | undefined;
  /**
   * When innodb_strict_mode is enabled, InnoDB returns errors rather than warnings when checking for invalid or incompatible table options.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_strict_mode).
   */
  innodbStrictMode?:
    | boolean
    | undefined;
  /**
   * Makes InnoDB to write information about all lock wait timeout errors into the log file.
   *
   * For details, see [Percona documentation for the variable](https://docs.percona.com/percona-server/8.0/diagnostics/innodb_show_status.html?highlight=innodb_print_lock_wait_timeout_info).
   */
  innodbPrintLockWaitTimeoutInfo?:
    | boolean
    | undefined;
  /**
   * System variable specifies the verbosity for handling events intended for the error log
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_log_error_verbosity).
   */
  logErrorVerbosity?:
    | number
    | undefined;
  /**
   * The maximum number of bytes of memory reserved per session for computation of normalized statement digests.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_digest_length).
   */
  maxDigestLength?:
    | number
    | undefined;
  /**
   * This variable specifies the timeout in seconds for attempts to acquire metadata locks
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lock_wait_timeout).
   */
  lockWaitTimeout?:
    | number
    | undefined;
  /**
   * This variable limits the total number of prepared statements in the server.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_prepared_stmt_count).
   */
  maxPreparedStmtCount?:
    | number
    | undefined;
  /**
   * The system variable enables control over optimizer behavior.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_optimizer_switch)
   * https://dev.mysql.com/doc/refman/8.0/en/switchable-optimizations.html
   */
  optimizerSwitch: string;
  /**
   * The maximum depth of search performed by the query optimizer
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)
   */
  optimizerSearchDepth?: number | undefined;
}

export enum MysqlConfig80_SQLMode {
  SQLMODE_UNSPECIFIED = 0,
  ALLOW_INVALID_DATES = 1,
  ANSI_QUOTES = 2,
  ERROR_FOR_DIVISION_BY_ZERO = 3,
  HIGH_NOT_PRECEDENCE = 4,
  IGNORE_SPACE = 5,
  NO_AUTO_VALUE_ON_ZERO = 6,
  NO_BACKSLASH_ESCAPES = 7,
  NO_ENGINE_SUBSTITUTION = 8,
  NO_UNSIGNED_SUBTRACTION = 9,
  NO_ZERO_DATE = 10,
  NO_ZERO_IN_DATE = 11,
  ONLY_FULL_GROUP_BY = 15,
  PAD_CHAR_TO_FULL_LENGTH = 16,
  PIPES_AS_CONCAT = 17,
  REAL_AS_FLOAT = 18,
  STRICT_ALL_TABLES = 19,
  STRICT_TRANS_TABLES = 20,
  TIME_TRUNCATE_FRACTIONAL = 21,
  ANSI = 22,
  TRADITIONAL = 23,
  NO_DIR_IN_CREATE = 24,
  UNRECOGNIZED = -1,
}

export function mysqlConfig80_SQLModeFromJSON(object: any): MysqlConfig80_SQLMode {
  switch (object) {
    case 0:
    case "SQLMODE_UNSPECIFIED":
      return MysqlConfig80_SQLMode.SQLMODE_UNSPECIFIED;
    case 1:
    case "ALLOW_INVALID_DATES":
      return MysqlConfig80_SQLMode.ALLOW_INVALID_DATES;
    case 2:
    case "ANSI_QUOTES":
      return MysqlConfig80_SQLMode.ANSI_QUOTES;
    case 3:
    case "ERROR_FOR_DIVISION_BY_ZERO":
      return MysqlConfig80_SQLMode.ERROR_FOR_DIVISION_BY_ZERO;
    case 4:
    case "HIGH_NOT_PRECEDENCE":
      return MysqlConfig80_SQLMode.HIGH_NOT_PRECEDENCE;
    case 5:
    case "IGNORE_SPACE":
      return MysqlConfig80_SQLMode.IGNORE_SPACE;
    case 6:
    case "NO_AUTO_VALUE_ON_ZERO":
      return MysqlConfig80_SQLMode.NO_AUTO_VALUE_ON_ZERO;
    case 7:
    case "NO_BACKSLASH_ESCAPES":
      return MysqlConfig80_SQLMode.NO_BACKSLASH_ESCAPES;
    case 8:
    case "NO_ENGINE_SUBSTITUTION":
      return MysqlConfig80_SQLMode.NO_ENGINE_SUBSTITUTION;
    case 9:
    case "NO_UNSIGNED_SUBTRACTION":
      return MysqlConfig80_SQLMode.NO_UNSIGNED_SUBTRACTION;
    case 10:
    case "NO_ZERO_DATE":
      return MysqlConfig80_SQLMode.NO_ZERO_DATE;
    case 11:
    case "NO_ZERO_IN_DATE":
      return MysqlConfig80_SQLMode.NO_ZERO_IN_DATE;
    case 15:
    case "ONLY_FULL_GROUP_BY":
      return MysqlConfig80_SQLMode.ONLY_FULL_GROUP_BY;
    case 16:
    case "PAD_CHAR_TO_FULL_LENGTH":
      return MysqlConfig80_SQLMode.PAD_CHAR_TO_FULL_LENGTH;
    case 17:
    case "PIPES_AS_CONCAT":
      return MysqlConfig80_SQLMode.PIPES_AS_CONCAT;
    case 18:
    case "REAL_AS_FLOAT":
      return MysqlConfig80_SQLMode.REAL_AS_FLOAT;
    case 19:
    case "STRICT_ALL_TABLES":
      return MysqlConfig80_SQLMode.STRICT_ALL_TABLES;
    case 20:
    case "STRICT_TRANS_TABLES":
      return MysqlConfig80_SQLMode.STRICT_TRANS_TABLES;
    case 21:
    case "TIME_TRUNCATE_FRACTIONAL":
      return MysqlConfig80_SQLMode.TIME_TRUNCATE_FRACTIONAL;
    case 22:
    case "ANSI":
      return MysqlConfig80_SQLMode.ANSI;
    case 23:
    case "TRADITIONAL":
      return MysqlConfig80_SQLMode.TRADITIONAL;
    case 24:
    case "NO_DIR_IN_CREATE":
      return MysqlConfig80_SQLMode.NO_DIR_IN_CREATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MysqlConfig80_SQLMode.UNRECOGNIZED;
  }
}

export function mysqlConfig80_SQLModeToJSON(object: MysqlConfig80_SQLMode): string {
  switch (object) {
    case MysqlConfig80_SQLMode.SQLMODE_UNSPECIFIED:
      return "SQLMODE_UNSPECIFIED";
    case MysqlConfig80_SQLMode.ALLOW_INVALID_DATES:
      return "ALLOW_INVALID_DATES";
    case MysqlConfig80_SQLMode.ANSI_QUOTES:
      return "ANSI_QUOTES";
    case MysqlConfig80_SQLMode.ERROR_FOR_DIVISION_BY_ZERO:
      return "ERROR_FOR_DIVISION_BY_ZERO";
    case MysqlConfig80_SQLMode.HIGH_NOT_PRECEDENCE:
      return "HIGH_NOT_PRECEDENCE";
    case MysqlConfig80_SQLMode.IGNORE_SPACE:
      return "IGNORE_SPACE";
    case MysqlConfig80_SQLMode.NO_AUTO_VALUE_ON_ZERO:
      return "NO_AUTO_VALUE_ON_ZERO";
    case MysqlConfig80_SQLMode.NO_BACKSLASH_ESCAPES:
      return "NO_BACKSLASH_ESCAPES";
    case MysqlConfig80_SQLMode.NO_ENGINE_SUBSTITUTION:
      return "NO_ENGINE_SUBSTITUTION";
    case MysqlConfig80_SQLMode.NO_UNSIGNED_SUBTRACTION:
      return "NO_UNSIGNED_SUBTRACTION";
    case MysqlConfig80_SQLMode.NO_ZERO_DATE:
      return "NO_ZERO_DATE";
    case MysqlConfig80_SQLMode.NO_ZERO_IN_DATE:
      return "NO_ZERO_IN_DATE";
    case MysqlConfig80_SQLMode.ONLY_FULL_GROUP_BY:
      return "ONLY_FULL_GROUP_BY";
    case MysqlConfig80_SQLMode.PAD_CHAR_TO_FULL_LENGTH:
      return "PAD_CHAR_TO_FULL_LENGTH";
    case MysqlConfig80_SQLMode.PIPES_AS_CONCAT:
      return "PIPES_AS_CONCAT";
    case MysqlConfig80_SQLMode.REAL_AS_FLOAT:
      return "REAL_AS_FLOAT";
    case MysqlConfig80_SQLMode.STRICT_ALL_TABLES:
      return "STRICT_ALL_TABLES";
    case MysqlConfig80_SQLMode.STRICT_TRANS_TABLES:
      return "STRICT_TRANS_TABLES";
    case MysqlConfig80_SQLMode.TIME_TRUNCATE_FRACTIONAL:
      return "TIME_TRUNCATE_FRACTIONAL";
    case MysqlConfig80_SQLMode.ANSI:
      return "ANSI";
    case MysqlConfig80_SQLMode.TRADITIONAL:
      return "TRADITIONAL";
    case MysqlConfig80_SQLMode.NO_DIR_IN_CREATE:
      return "NO_DIR_IN_CREATE";
    case MysqlConfig80_SQLMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MysqlConfig80_AuthPlugin {
  AUTH_PLUGIN_UNSPECIFIED = 0,
  /** MYSQL_NATIVE_PASSWORD - Using [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
  MYSQL_NATIVE_PASSWORD = 1,
  /** CACHING_SHA2_PASSWORD - Using [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
  CACHING_SHA2_PASSWORD = 2,
  /** SHA256_PASSWORD - Using [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
  SHA256_PASSWORD = 3,
  UNRECOGNIZED = -1,
}

export function mysqlConfig80_AuthPluginFromJSON(object: any): MysqlConfig80_AuthPlugin {
  switch (object) {
    case 0:
    case "AUTH_PLUGIN_UNSPECIFIED":
      return MysqlConfig80_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED;
    case 1:
    case "MYSQL_NATIVE_PASSWORD":
      return MysqlConfig80_AuthPlugin.MYSQL_NATIVE_PASSWORD;
    case 2:
    case "CACHING_SHA2_PASSWORD":
      return MysqlConfig80_AuthPlugin.CACHING_SHA2_PASSWORD;
    case 3:
    case "SHA256_PASSWORD":
      return MysqlConfig80_AuthPlugin.SHA256_PASSWORD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MysqlConfig80_AuthPlugin.UNRECOGNIZED;
  }
}

export function mysqlConfig80_AuthPluginToJSON(object: MysqlConfig80_AuthPlugin): string {
  switch (object) {
    case MysqlConfig80_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED:
      return "AUTH_PLUGIN_UNSPECIFIED";
    case MysqlConfig80_AuthPlugin.MYSQL_NATIVE_PASSWORD:
      return "MYSQL_NATIVE_PASSWORD";
    case MysqlConfig80_AuthPlugin.CACHING_SHA2_PASSWORD:
      return "CACHING_SHA2_PASSWORD";
    case MysqlConfig80_AuthPlugin.SHA256_PASSWORD:
      return "SHA256_PASSWORD";
    case MysqlConfig80_AuthPlugin.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MysqlConfig80_TransactionIsolation {
  TRANSACTION_ISOLATION_UNSPECIFIED = 0,
  READ_COMMITTED = 1,
  REPEATABLE_READ = 2,
  SERIALIZABLE = 3,
  UNRECOGNIZED = -1,
}

export function mysqlConfig80_TransactionIsolationFromJSON(object: any): MysqlConfig80_TransactionIsolation {
  switch (object) {
    case 0:
    case "TRANSACTION_ISOLATION_UNSPECIFIED":
      return MysqlConfig80_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
    case 1:
    case "READ_COMMITTED":
      return MysqlConfig80_TransactionIsolation.READ_COMMITTED;
    case 2:
    case "REPEATABLE_READ":
      return MysqlConfig80_TransactionIsolation.REPEATABLE_READ;
    case 3:
    case "SERIALIZABLE":
      return MysqlConfig80_TransactionIsolation.SERIALIZABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MysqlConfig80_TransactionIsolation.UNRECOGNIZED;
  }
}

export function mysqlConfig80_TransactionIsolationToJSON(object: MysqlConfig80_TransactionIsolation): string {
  switch (object) {
    case MysqlConfig80_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
      return "TRANSACTION_ISOLATION_UNSPECIFIED";
    case MysqlConfig80_TransactionIsolation.READ_COMMITTED:
      return "READ_COMMITTED";
    case MysqlConfig80_TransactionIsolation.REPEATABLE_READ:
      return "REPEATABLE_READ";
    case MysqlConfig80_TransactionIsolation.SERIALIZABLE:
      return "SERIALIZABLE";
    case MysqlConfig80_TransactionIsolation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MysqlConfig80_BinlogRowImage {
  BINLOG_ROW_IMAGE_UNSPECIFIED = 0,
  FULL = 1,
  MINIMAL = 2,
  NOBLOB = 3,
  UNRECOGNIZED = -1,
}

export function mysqlConfig80_BinlogRowImageFromJSON(object: any): MysqlConfig80_BinlogRowImage {
  switch (object) {
    case 0:
    case "BINLOG_ROW_IMAGE_UNSPECIFIED":
      return MysqlConfig80_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED;
    case 1:
    case "FULL":
      return MysqlConfig80_BinlogRowImage.FULL;
    case 2:
    case "MINIMAL":
      return MysqlConfig80_BinlogRowImage.MINIMAL;
    case 3:
    case "NOBLOB":
      return MysqlConfig80_BinlogRowImage.NOBLOB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MysqlConfig80_BinlogRowImage.UNRECOGNIZED;
  }
}

export function mysqlConfig80_BinlogRowImageToJSON(object: MysqlConfig80_BinlogRowImage): string {
  switch (object) {
    case MysqlConfig80_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED:
      return "BINLOG_ROW_IMAGE_UNSPECIFIED";
    case MysqlConfig80_BinlogRowImage.FULL:
      return "FULL";
    case MysqlConfig80_BinlogRowImage.MINIMAL:
      return "MINIMAL";
    case MysqlConfig80_BinlogRowImage.NOBLOB:
      return "NOBLOB";
    case MysqlConfig80_BinlogRowImage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MysqlConfig80_SlaveParallelType {
  SLAVE_PARALLEL_TYPE_UNSPECIFIED = 0,
  DATABASE = 1,
  LOGICAL_CLOCK = 2,
  UNRECOGNIZED = -1,
}

export function mysqlConfig80_SlaveParallelTypeFromJSON(object: any): MysqlConfig80_SlaveParallelType {
  switch (object) {
    case 0:
    case "SLAVE_PARALLEL_TYPE_UNSPECIFIED":
      return MysqlConfig80_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED;
    case 1:
    case "DATABASE":
      return MysqlConfig80_SlaveParallelType.DATABASE;
    case 2:
    case "LOGICAL_CLOCK":
      return MysqlConfig80_SlaveParallelType.LOGICAL_CLOCK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MysqlConfig80_SlaveParallelType.UNRECOGNIZED;
  }
}

export function mysqlConfig80_SlaveParallelTypeToJSON(object: MysqlConfig80_SlaveParallelType): string {
  switch (object) {
    case MysqlConfig80_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED:
      return "SLAVE_PARALLEL_TYPE_UNSPECIFIED";
    case MysqlConfig80_SlaveParallelType.DATABASE:
      return "DATABASE";
    case MysqlConfig80_SlaveParallelType.LOGICAL_CLOCK:
      return "LOGICAL_CLOCK";
    case MysqlConfig80_SlaveParallelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MysqlConfig80_LogSlowRateType {
  LOG_SLOW_RATE_TYPE_UNSPECIFIED = 0,
  SESSION = 1,
  QUERY = 2,
  UNRECOGNIZED = -1,
}

export function mysqlConfig80_LogSlowRateTypeFromJSON(object: any): MysqlConfig80_LogSlowRateType {
  switch (object) {
    case 0:
    case "LOG_SLOW_RATE_TYPE_UNSPECIFIED":
      return MysqlConfig80_LogSlowRateType.LOG_SLOW_RATE_TYPE_UNSPECIFIED;
    case 1:
    case "SESSION":
      return MysqlConfig80_LogSlowRateType.SESSION;
    case 2:
    case "QUERY":
      return MysqlConfig80_LogSlowRateType.QUERY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MysqlConfig80_LogSlowRateType.UNRECOGNIZED;
  }
}

export function mysqlConfig80_LogSlowRateTypeToJSON(object: MysqlConfig80_LogSlowRateType): string {
  switch (object) {
    case MysqlConfig80_LogSlowRateType.LOG_SLOW_RATE_TYPE_UNSPECIFIED:
      return "LOG_SLOW_RATE_TYPE_UNSPECIFIED";
    case MysqlConfig80_LogSlowRateType.SESSION:
      return "SESSION";
    case MysqlConfig80_LogSlowRateType.QUERY:
      return "QUERY";
    case MysqlConfig80_LogSlowRateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MysqlConfig80_LogSlowFilterType {
  LOG_SLOW_FILTER_TYPE_UNSPECIFIED = 0,
  FULL_SCAN = 1,
  FULL_JOIN = 2,
  TMP_TABLE = 3,
  TMP_TABLE_ON_DISK = 4,
  FILESORT = 5,
  FILESORT_ON_DISK = 6,
  UNRECOGNIZED = -1,
}

export function mysqlConfig80_LogSlowFilterTypeFromJSON(object: any): MysqlConfig80_LogSlowFilterType {
  switch (object) {
    case 0:
    case "LOG_SLOW_FILTER_TYPE_UNSPECIFIED":
      return MysqlConfig80_LogSlowFilterType.LOG_SLOW_FILTER_TYPE_UNSPECIFIED;
    case 1:
    case "FULL_SCAN":
      return MysqlConfig80_LogSlowFilterType.FULL_SCAN;
    case 2:
    case "FULL_JOIN":
      return MysqlConfig80_LogSlowFilterType.FULL_JOIN;
    case 3:
    case "TMP_TABLE":
      return MysqlConfig80_LogSlowFilterType.TMP_TABLE;
    case 4:
    case "TMP_TABLE_ON_DISK":
      return MysqlConfig80_LogSlowFilterType.TMP_TABLE_ON_DISK;
    case 5:
    case "FILESORT":
      return MysqlConfig80_LogSlowFilterType.FILESORT;
    case 6:
    case "FILESORT_ON_DISK":
      return MysqlConfig80_LogSlowFilterType.FILESORT_ON_DISK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MysqlConfig80_LogSlowFilterType.UNRECOGNIZED;
  }
}

export function mysqlConfig80_LogSlowFilterTypeToJSON(object: MysqlConfig80_LogSlowFilterType): string {
  switch (object) {
    case MysqlConfig80_LogSlowFilterType.LOG_SLOW_FILTER_TYPE_UNSPECIFIED:
      return "LOG_SLOW_FILTER_TYPE_UNSPECIFIED";
    case MysqlConfig80_LogSlowFilterType.FULL_SCAN:
      return "FULL_SCAN";
    case MysqlConfig80_LogSlowFilterType.FULL_JOIN:
      return "FULL_JOIN";
    case MysqlConfig80_LogSlowFilterType.TMP_TABLE:
      return "TMP_TABLE";
    case MysqlConfig80_LogSlowFilterType.TMP_TABLE_ON_DISK:
      return "TMP_TABLE_ON_DISK";
    case MysqlConfig80_LogSlowFilterType.FILESORT:
      return "FILESORT";
    case MysqlConfig80_LogSlowFilterType.FILESORT_ON_DISK:
      return "FILESORT_ON_DISK";
    case MysqlConfig80_LogSlowFilterType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MysqlConfig80_BinlogTransactionDependencyTracking {
  BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED = 0,
  COMMIT_ORDER = 1,
  WRITESET = 2,
  WRITESET_SESSION = 3,
  UNRECOGNIZED = -1,
}

export function mysqlConfig80_BinlogTransactionDependencyTrackingFromJSON(
  object: any,
): MysqlConfig80_BinlogTransactionDependencyTracking {
  switch (object) {
    case 0:
    case "BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED":
      return MysqlConfig80_BinlogTransactionDependencyTracking.BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED;
    case 1:
    case "COMMIT_ORDER":
      return MysqlConfig80_BinlogTransactionDependencyTracking.COMMIT_ORDER;
    case 2:
    case "WRITESET":
      return MysqlConfig80_BinlogTransactionDependencyTracking.WRITESET;
    case 3:
    case "WRITESET_SESSION":
      return MysqlConfig80_BinlogTransactionDependencyTracking.WRITESET_SESSION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MysqlConfig80_BinlogTransactionDependencyTracking.UNRECOGNIZED;
  }
}

export function mysqlConfig80_BinlogTransactionDependencyTrackingToJSON(
  object: MysqlConfig80_BinlogTransactionDependencyTracking,
): string {
  switch (object) {
    case MysqlConfig80_BinlogTransactionDependencyTracking.BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED:
      return "BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED";
    case MysqlConfig80_BinlogTransactionDependencyTracking.COMMIT_ORDER:
      return "COMMIT_ORDER";
    case MysqlConfig80_BinlogTransactionDependencyTracking.WRITESET:
      return "WRITESET";
    case MysqlConfig80_BinlogTransactionDependencyTracking.WRITESET_SESSION:
      return "WRITESET_SESSION";
    case MysqlConfig80_BinlogTransactionDependencyTracking.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MysqlConfigSet80 {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet8_0";
  /**
   * Effective settings for a MySQL 8.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | MysqlConfig80
    | undefined;
  /** User-defined settings for a MySQL 8.0 cluster. */
  userConfig?:
    | MysqlConfig80
    | undefined;
  /** Default configuration for a MySQL 8.0 cluster. */
  defaultConfig?: MysqlConfig80 | undefined;
}

function createBaseMysqlConfig80(): MysqlConfig80 {
  return {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig8_0",
    innodbBufferPoolSize: undefined,
    maxConnections: undefined,
    longQueryTime: undefined,
    generalLog: undefined,
    auditLog: undefined,
    sqlMode: [],
    maxAllowedPacket: undefined,
    defaultAuthenticationPlugin: 0,
    innodbFlushLogAtTrxCommit: undefined,
    innodbLockWaitTimeout: undefined,
    transactionIsolation: 0,
    innodbPrintAllDeadlocks: undefined,
    netReadTimeout: undefined,
    netWriteTimeout: undefined,
    groupConcatMaxLen: undefined,
    tmpTableSize: undefined,
    maxHeapTableSize: undefined,
    defaultTimeZone: "",
    characterSetServer: "",
    collationServer: "",
    innodbAdaptiveHashIndex: undefined,
    innodbNumaInterleave: undefined,
    innodbLogBufferSize: undefined,
    innodbLogFileSize: undefined,
    innodbIoCapacity: undefined,
    innodbIoCapacityMax: undefined,
    innodbReadIoThreads: undefined,
    innodbWriteIoThreads: undefined,
    innodbPurgeThreads: undefined,
    innodbThreadConcurrency: undefined,
    innodbTempDataFileMaxSize: undefined,
    threadCacheSize: undefined,
    threadStack: undefined,
    joinBufferSize: undefined,
    sortBufferSize: undefined,
    tableDefinitionCache: undefined,
    tableOpenCache: undefined,
    tableOpenCacheInstances: undefined,
    explicitDefaultsForTimestamp: undefined,
    autoIncrementIncrement: undefined,
    autoIncrementOffset: undefined,
    syncBinlog: undefined,
    binlogCacheSize: undefined,
    binlogGroupCommitSyncDelay: undefined,
    binlogRowImage: 0,
    binlogRowsQueryLogEvents: undefined,
    rplSemiSyncMasterWaitForSlaveCount: undefined,
    slaveParallelType: 0,
    slaveParallelWorkers: undefined,
    regexpTimeLimit: undefined,
    mdbPreserveBinlogBytes: undefined,
    interactiveTimeout: undefined,
    waitTimeout: undefined,
    mdbOfflineModeEnableLag: undefined,
    mdbOfflineModeDisableLag: undefined,
    rangeOptimizerMaxMemSize: undefined,
    slowQueryLog: undefined,
    slowQueryLogAlwaysWriteTime: undefined,
    logSlowRateType: 0,
    logSlowRateLimit: undefined,
    logSlowSpStatements: undefined,
    logSlowFilter: [],
    mdbPriorityChoiceMaxLag: undefined,
    innodbPageSize: undefined,
    innodbOnlineAlterLogMaxSize: undefined,
    innodbFtMinTokenSize: undefined,
    innodbFtMaxTokenSize: undefined,
    lowerCaseTableNames: undefined,
    maxSpRecursionDepth: undefined,
    innodbCompressionLevel: undefined,
    binlogTransactionDependencyTracking: 0,
    autocommit: undefined,
    innodbStatusOutput: undefined,
    innodbStrictMode: undefined,
    innodbPrintLockWaitTimeoutInfo: undefined,
    logErrorVerbosity: undefined,
    maxDigestLength: undefined,
    lockWaitTimeout: undefined,
    maxPreparedStmtCount: undefined,
    optimizerSwitch: "",
    optimizerSearchDepth: undefined,
  };
}

export const MysqlConfig80 = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig8_0" as const,

  encode(message: MysqlConfig80, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.innodbBufferPoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbBufferPoolSize! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.longQueryTime !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.longQueryTime! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.generalLog !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.generalLog! }, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.auditLog !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.auditLog! }, writer.uint32(42).fork())
        .ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.sqlMode) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.maxAllowedPacket !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxAllowedPacket! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.defaultAuthenticationPlugin !== 0) {
      writer.uint32(64).int32(message.defaultAuthenticationPlugin);
    }
    if (message.innodbFlushLogAtTrxCommit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbFlushLogAtTrxCommit! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.innodbLockWaitTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbLockWaitTimeout! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.transactionIsolation !== 0) {
      writer.uint32(88).int32(message.transactionIsolation);
    }
    if (message.innodbPrintAllDeadlocks !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.innodbPrintAllDeadlocks! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.netReadTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.netReadTimeout! },
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.netWriteTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.netWriteTimeout! },
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.groupConcatMaxLen !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.groupConcatMaxLen! },
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.tmpTableSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tmpTableSize! },
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.maxHeapTableSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxHeapTableSize! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.defaultTimeZone !== "") {
      writer.uint32(146).string(message.defaultTimeZone);
    }
    if (message.characterSetServer !== "") {
      writer.uint32(154).string(message.characterSetServer);
    }
    if (message.collationServer !== "") {
      writer.uint32(162).string(message.collationServer);
    }
    if (message.innodbAdaptiveHashIndex !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.innodbAdaptiveHashIndex! },
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.innodbNumaInterleave !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.innodbNumaInterleave! },
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.innodbLogBufferSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbLogBufferSize! },
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.innodbLogFileSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbLogFileSize! },
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.innodbIoCapacity !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbIoCapacity! },
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.innodbIoCapacityMax !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbIoCapacityMax! },
        writer.uint32(210).fork(),
      ).ldelim();
    }
    if (message.innodbReadIoThreads !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbReadIoThreads! },
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.innodbWriteIoThreads !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbWriteIoThreads! },
        writer.uint32(226).fork(),
      ).ldelim();
    }
    if (message.innodbPurgeThreads !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbPurgeThreads! },
        writer.uint32(234).fork(),
      ).ldelim();
    }
    if (message.innodbThreadConcurrency !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbThreadConcurrency! },
        writer.uint32(242).fork(),
      ).ldelim();
    }
    if (message.innodbTempDataFileMaxSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbTempDataFileMaxSize! },
        writer.uint32(250).fork(),
      ).ldelim();
    }
    if (message.threadCacheSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.threadCacheSize! },
        writer.uint32(258).fork(),
      ).ldelim();
    }
    if (message.threadStack !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.threadStack! }, writer.uint32(266).fork())
        .ldelim();
    }
    if (message.joinBufferSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.joinBufferSize! },
        writer.uint32(274).fork(),
      ).ldelim();
    }
    if (message.sortBufferSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.sortBufferSize! },
        writer.uint32(282).fork(),
      ).ldelim();
    }
    if (message.tableDefinitionCache !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tableDefinitionCache! },
        writer.uint32(290).fork(),
      ).ldelim();
    }
    if (message.tableOpenCache !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tableOpenCache! },
        writer.uint32(298).fork(),
      ).ldelim();
    }
    if (message.tableOpenCacheInstances !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tableOpenCacheInstances! },
        writer.uint32(306).fork(),
      ).ldelim();
    }
    if (message.explicitDefaultsForTimestamp !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.explicitDefaultsForTimestamp! },
        writer.uint32(314).fork(),
      ).ldelim();
    }
    if (message.autoIncrementIncrement !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autoIncrementIncrement! },
        writer.uint32(322).fork(),
      ).ldelim();
    }
    if (message.autoIncrementOffset !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autoIncrementOffset! },
        writer.uint32(330).fork(),
      ).ldelim();
    }
    if (message.syncBinlog !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.syncBinlog! }, writer.uint32(338).fork())
        .ldelim();
    }
    if (message.binlogCacheSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.binlogCacheSize! },
        writer.uint32(346).fork(),
      ).ldelim();
    }
    if (message.binlogGroupCommitSyncDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.binlogGroupCommitSyncDelay! },
        writer.uint32(354).fork(),
      ).ldelim();
    }
    if (message.binlogRowImage !== 0) {
      writer.uint32(360).int32(message.binlogRowImage);
    }
    if (message.binlogRowsQueryLogEvents !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.binlogRowsQueryLogEvents! },
        writer.uint32(370).fork(),
      ).ldelim();
    }
    if (message.rplSemiSyncMasterWaitForSlaveCount !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.rplSemiSyncMasterWaitForSlaveCount! },
        writer.uint32(378).fork(),
      ).ldelim();
    }
    if (message.slaveParallelType !== 0) {
      writer.uint32(384).int32(message.slaveParallelType);
    }
    if (message.slaveParallelWorkers !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.slaveParallelWorkers! },
        writer.uint32(394).fork(),
      ).ldelim();
    }
    if (message.regexpTimeLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.regexpTimeLimit! },
        writer.uint32(402).fork(),
      ).ldelim();
    }
    if (message.mdbPreserveBinlogBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mdbPreserveBinlogBytes! },
        writer.uint32(410).fork(),
      ).ldelim();
    }
    if (message.interactiveTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.interactiveTimeout! },
        writer.uint32(418).fork(),
      ).ldelim();
    }
    if (message.waitTimeout !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.waitTimeout! }, writer.uint32(426).fork())
        .ldelim();
    }
    if (message.mdbOfflineModeEnableLag !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mdbOfflineModeEnableLag! },
        writer.uint32(434).fork(),
      ).ldelim();
    }
    if (message.mdbOfflineModeDisableLag !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mdbOfflineModeDisableLag! },
        writer.uint32(442).fork(),
      ).ldelim();
    }
    if (message.rangeOptimizerMaxMemSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.rangeOptimizerMaxMemSize! },
        writer.uint32(450).fork(),
      ).ldelim();
    }
    if (message.slowQueryLog !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.slowQueryLog! }, writer.uint32(458).fork())
        .ldelim();
    }
    if (message.slowQueryLogAlwaysWriteTime !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.slowQueryLogAlwaysWriteTime! },
        writer.uint32(466).fork(),
      ).ldelim();
    }
    if (message.logSlowRateType !== 0) {
      writer.uint32(472).int32(message.logSlowRateType);
    }
    if (message.logSlowRateLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logSlowRateLimit! },
        writer.uint32(482).fork(),
      ).ldelim();
    }
    if (message.logSlowSpStatements !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logSlowSpStatements! },
        writer.uint32(490).fork(),
      ).ldelim();
    }
    writer.uint32(498).fork();
    for (const v of message.logSlowFilter) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.mdbPriorityChoiceMaxLag !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.mdbPriorityChoiceMaxLag! },
        writer.uint32(506).fork(),
      ).ldelim();
    }
    if (message.innodbPageSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbPageSize! },
        writer.uint32(514).fork(),
      ).ldelim();
    }
    if (message.innodbOnlineAlterLogMaxSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbOnlineAlterLogMaxSize! },
        writer.uint32(522).fork(),
      ).ldelim();
    }
    if (message.innodbFtMinTokenSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbFtMinTokenSize! },
        writer.uint32(530).fork(),
      ).ldelim();
    }
    if (message.innodbFtMaxTokenSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbFtMaxTokenSize! },
        writer.uint32(538).fork(),
      ).ldelim();
    }
    if (message.lowerCaseTableNames !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.lowerCaseTableNames! },
        writer.uint32(546).fork(),
      ).ldelim();
    }
    if (message.maxSpRecursionDepth !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxSpRecursionDepth! },
        writer.uint32(554).fork(),
      ).ldelim();
    }
    if (message.innodbCompressionLevel !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbCompressionLevel! },
        writer.uint32(562).fork(),
      ).ldelim();
    }
    if (message.binlogTransactionDependencyTracking !== 0) {
      writer.uint32(568).int32(message.binlogTransactionDependencyTracking);
    }
    if (message.autocommit !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.autocommit! }, writer.uint32(578).fork())
        .ldelim();
    }
    if (message.innodbStatusOutput !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.innodbStatusOutput! },
        writer.uint32(586).fork(),
      ).ldelim();
    }
    if (message.innodbStrictMode !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.innodbStrictMode! },
        writer.uint32(594).fork(),
      ).ldelim();
    }
    if (message.innodbPrintLockWaitTimeoutInfo !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.innodbPrintLockWaitTimeoutInfo! },
        writer.uint32(602).fork(),
      ).ldelim();
    }
    if (message.logErrorVerbosity !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logErrorVerbosity! },
        writer.uint32(610).fork(),
      ).ldelim();
    }
    if (message.maxDigestLength !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxDigestLength! },
        writer.uint32(618).fork(),
      ).ldelim();
    }
    if (message.lockWaitTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.lockWaitTimeout! },
        writer.uint32(626).fork(),
      ).ldelim();
    }
    if (message.maxPreparedStmtCount !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPreparedStmtCount! },
        writer.uint32(634).fork(),
      ).ldelim();
    }
    if (message.optimizerSwitch !== "") {
      writer.uint32(642).string(message.optimizerSwitch);
    }
    if (message.optimizerSearchDepth !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.optimizerSearchDepth! },
        writer.uint32(650).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlConfig80 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMysqlConfig80();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.innodbBufferPoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.longQueryTime = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.generalLog = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.auditLog = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag === 48) {
            message.sqlMode.push(reader.int32() as any);

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sqlMode.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.maxAllowedPacket = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.defaultAuthenticationPlugin = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.innodbFlushLogAtTrxCommit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.innodbLockWaitTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.transactionIsolation = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.innodbPrintAllDeadlocks = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.netReadTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.netWriteTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.groupConcatMaxLen = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.tmpTableSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.maxHeapTableSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.defaultTimeZone = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.characterSetServer = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.collationServer = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.innodbAdaptiveHashIndex = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.innodbNumaInterleave = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.innodbLogBufferSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.innodbLogFileSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.innodbIoCapacity = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.innodbIoCapacityMax = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.innodbReadIoThreads = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.innodbWriteIoThreads = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.innodbPurgeThreads = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.innodbThreadConcurrency = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.innodbTempDataFileMaxSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.threadCacheSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.threadStack = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.joinBufferSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.sortBufferSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.tableDefinitionCache = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.tableOpenCache = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 38:
          if (tag !== 306) {
            break;
          }

          message.tableOpenCacheInstances = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.explicitDefaultsForTimestamp = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.autoIncrementIncrement = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.autoIncrementOffset = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 42:
          if (tag !== 338) {
            break;
          }

          message.syncBinlog = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 43:
          if (tag !== 346) {
            break;
          }

          message.binlogCacheSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.binlogGroupCommitSyncDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 45:
          if (tag !== 360) {
            break;
          }

          message.binlogRowImage = reader.int32() as any;
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.binlogRowsQueryLogEvents = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 47:
          if (tag !== 378) {
            break;
          }

          message.rplSemiSyncMasterWaitForSlaveCount = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 48:
          if (tag !== 384) {
            break;
          }

          message.slaveParallelType = reader.int32() as any;
          continue;
        case 49:
          if (tag !== 394) {
            break;
          }

          message.slaveParallelWorkers = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.regexpTimeLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 51:
          if (tag !== 410) {
            break;
          }

          message.mdbPreserveBinlogBytes = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 52:
          if (tag !== 418) {
            break;
          }

          message.interactiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 53:
          if (tag !== 426) {
            break;
          }

          message.waitTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 54:
          if (tag !== 434) {
            break;
          }

          message.mdbOfflineModeEnableLag = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 55:
          if (tag !== 442) {
            break;
          }

          message.mdbOfflineModeDisableLag = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.rangeOptimizerMaxMemSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.slowQueryLog = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 58:
          if (tag !== 466) {
            break;
          }

          message.slowQueryLogAlwaysWriteTime = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 59:
          if (tag !== 472) {
            break;
          }

          message.logSlowRateType = reader.int32() as any;
          continue;
        case 60:
          if (tag !== 482) {
            break;
          }

          message.logSlowRateLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          message.logSlowSpStatements = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 62:
          if (tag === 496) {
            message.logSlowFilter.push(reader.int32() as any);

            continue;
          }

          if (tag === 498) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.logSlowFilter.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 63:
          if (tag !== 506) {
            break;
          }

          message.mdbPriorityChoiceMaxLag = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 64:
          if (tag !== 514) {
            break;
          }

          message.innodbPageSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 65:
          if (tag !== 522) {
            break;
          }

          message.innodbOnlineAlterLogMaxSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 66:
          if (tag !== 530) {
            break;
          }

          message.innodbFtMinTokenSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 67:
          if (tag !== 538) {
            break;
          }

          message.innodbFtMaxTokenSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 68:
          if (tag !== 546) {
            break;
          }

          message.lowerCaseTableNames = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 69:
          if (tag !== 554) {
            break;
          }

          message.maxSpRecursionDepth = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 70:
          if (tag !== 562) {
            break;
          }

          message.innodbCompressionLevel = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 71:
          if (tag !== 568) {
            break;
          }

          message.binlogTransactionDependencyTracking = reader.int32() as any;
          continue;
        case 72:
          if (tag !== 578) {
            break;
          }

          message.autocommit = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 73:
          if (tag !== 586) {
            break;
          }

          message.innodbStatusOutput = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 74:
          if (tag !== 594) {
            break;
          }

          message.innodbStrictMode = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 75:
          if (tag !== 602) {
            break;
          }

          message.innodbPrintLockWaitTimeoutInfo = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 76:
          if (tag !== 610) {
            break;
          }

          message.logErrorVerbosity = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 77:
          if (tag !== 618) {
            break;
          }

          message.maxDigestLength = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 78:
          if (tag !== 626) {
            break;
          }

          message.lockWaitTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 79:
          if (tag !== 634) {
            break;
          }

          message.maxPreparedStmtCount = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 80:
          if (tag !== 642) {
            break;
          }

          message.optimizerSwitch = reader.string();
          continue;
        case 81:
          if (tag !== 650) {
            break;
          }

          message.optimizerSearchDepth = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MysqlConfig80 {
    return {
      $type: MysqlConfig80.$type,
      innodbBufferPoolSize: isSet(object.innodbBufferPoolSize) ? Number(object.innodbBufferPoolSize) : undefined,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      longQueryTime: isSet(object.longQueryTime) ? Number(object.longQueryTime) : undefined,
      generalLog: isSet(object.generalLog) ? Boolean(object.generalLog) : undefined,
      auditLog: isSet(object.auditLog) ? Boolean(object.auditLog) : undefined,
      sqlMode: globalThis.Array.isArray(object?.sqlMode)
        ? object.sqlMode.map((e: any) => mysqlConfig80_SQLModeFromJSON(e))
        : [],
      maxAllowedPacket: isSet(object.maxAllowedPacket) ? Number(object.maxAllowedPacket) : undefined,
      defaultAuthenticationPlugin: isSet(object.defaultAuthenticationPlugin)
        ? mysqlConfig80_AuthPluginFromJSON(object.defaultAuthenticationPlugin)
        : 0,
      innodbFlushLogAtTrxCommit: isSet(object.innodbFlushLogAtTrxCommit)
        ? Number(object.innodbFlushLogAtTrxCommit)
        : undefined,
      innodbLockWaitTimeout: isSet(object.innodbLockWaitTimeout) ? Number(object.innodbLockWaitTimeout) : undefined,
      transactionIsolation: isSet(object.transactionIsolation)
        ? mysqlConfig80_TransactionIsolationFromJSON(object.transactionIsolation)
        : 0,
      innodbPrintAllDeadlocks: isSet(object.innodbPrintAllDeadlocks)
        ? Boolean(object.innodbPrintAllDeadlocks)
        : undefined,
      netReadTimeout: isSet(object.netReadTimeout) ? Number(object.netReadTimeout) : undefined,
      netWriteTimeout: isSet(object.netWriteTimeout) ? Number(object.netWriteTimeout) : undefined,
      groupConcatMaxLen: isSet(object.groupConcatMaxLen) ? Number(object.groupConcatMaxLen) : undefined,
      tmpTableSize: isSet(object.tmpTableSize) ? Number(object.tmpTableSize) : undefined,
      maxHeapTableSize: isSet(object.maxHeapTableSize) ? Number(object.maxHeapTableSize) : undefined,
      defaultTimeZone: isSet(object.defaultTimeZone) ? globalThis.String(object.defaultTimeZone) : "",
      characterSetServer: isSet(object.characterSetServer) ? globalThis.String(object.characterSetServer) : "",
      collationServer: isSet(object.collationServer) ? globalThis.String(object.collationServer) : "",
      innodbAdaptiveHashIndex: isSet(object.innodbAdaptiveHashIndex)
        ? Boolean(object.innodbAdaptiveHashIndex)
        : undefined,
      innodbNumaInterleave: isSet(object.innodbNumaInterleave) ? Boolean(object.innodbNumaInterleave) : undefined,
      innodbLogBufferSize: isSet(object.innodbLogBufferSize) ? Number(object.innodbLogBufferSize) : undefined,
      innodbLogFileSize: isSet(object.innodbLogFileSize) ? Number(object.innodbLogFileSize) : undefined,
      innodbIoCapacity: isSet(object.innodbIoCapacity) ? Number(object.innodbIoCapacity) : undefined,
      innodbIoCapacityMax: isSet(object.innodbIoCapacityMax) ? Number(object.innodbIoCapacityMax) : undefined,
      innodbReadIoThreads: isSet(object.innodbReadIoThreads) ? Number(object.innodbReadIoThreads) : undefined,
      innodbWriteIoThreads: isSet(object.innodbWriteIoThreads) ? Number(object.innodbWriteIoThreads) : undefined,
      innodbPurgeThreads: isSet(object.innodbPurgeThreads) ? Number(object.innodbPurgeThreads) : undefined,
      innodbThreadConcurrency: isSet(object.innodbThreadConcurrency)
        ? Number(object.innodbThreadConcurrency)
        : undefined,
      innodbTempDataFileMaxSize: isSet(object.innodbTempDataFileMaxSize)
        ? Number(object.innodbTempDataFileMaxSize)
        : undefined,
      threadCacheSize: isSet(object.threadCacheSize) ? Number(object.threadCacheSize) : undefined,
      threadStack: isSet(object.threadStack) ? Number(object.threadStack) : undefined,
      joinBufferSize: isSet(object.joinBufferSize) ? Number(object.joinBufferSize) : undefined,
      sortBufferSize: isSet(object.sortBufferSize) ? Number(object.sortBufferSize) : undefined,
      tableDefinitionCache: isSet(object.tableDefinitionCache) ? Number(object.tableDefinitionCache) : undefined,
      tableOpenCache: isSet(object.tableOpenCache) ? Number(object.tableOpenCache) : undefined,
      tableOpenCacheInstances: isSet(object.tableOpenCacheInstances)
        ? Number(object.tableOpenCacheInstances)
        : undefined,
      explicitDefaultsForTimestamp: isSet(object.explicitDefaultsForTimestamp)
        ? Boolean(object.explicitDefaultsForTimestamp)
        : undefined,
      autoIncrementIncrement: isSet(object.autoIncrementIncrement) ? Number(object.autoIncrementIncrement) : undefined,
      autoIncrementOffset: isSet(object.autoIncrementOffset) ? Number(object.autoIncrementOffset) : undefined,
      syncBinlog: isSet(object.syncBinlog) ? Number(object.syncBinlog) : undefined,
      binlogCacheSize: isSet(object.binlogCacheSize) ? Number(object.binlogCacheSize) : undefined,
      binlogGroupCommitSyncDelay: isSet(object.binlogGroupCommitSyncDelay)
        ? Number(object.binlogGroupCommitSyncDelay)
        : undefined,
      binlogRowImage: isSet(object.binlogRowImage) ? mysqlConfig80_BinlogRowImageFromJSON(object.binlogRowImage) : 0,
      binlogRowsQueryLogEvents: isSet(object.binlogRowsQueryLogEvents)
        ? Boolean(object.binlogRowsQueryLogEvents)
        : undefined,
      rplSemiSyncMasterWaitForSlaveCount: isSet(object.rplSemiSyncMasterWaitForSlaveCount)
        ? Number(object.rplSemiSyncMasterWaitForSlaveCount)
        : undefined,
      slaveParallelType: isSet(object.slaveParallelType)
        ? mysqlConfig80_SlaveParallelTypeFromJSON(object.slaveParallelType)
        : 0,
      slaveParallelWorkers: isSet(object.slaveParallelWorkers) ? Number(object.slaveParallelWorkers) : undefined,
      regexpTimeLimit: isSet(object.regexpTimeLimit) ? Number(object.regexpTimeLimit) : undefined,
      mdbPreserveBinlogBytes: isSet(object.mdbPreserveBinlogBytes) ? Number(object.mdbPreserveBinlogBytes) : undefined,
      interactiveTimeout: isSet(object.interactiveTimeout) ? Number(object.interactiveTimeout) : undefined,
      waitTimeout: isSet(object.waitTimeout) ? Number(object.waitTimeout) : undefined,
      mdbOfflineModeEnableLag: isSet(object.mdbOfflineModeEnableLag)
        ? Number(object.mdbOfflineModeEnableLag)
        : undefined,
      mdbOfflineModeDisableLag: isSet(object.mdbOfflineModeDisableLag)
        ? Number(object.mdbOfflineModeDisableLag)
        : undefined,
      rangeOptimizerMaxMemSize: isSet(object.rangeOptimizerMaxMemSize)
        ? Number(object.rangeOptimizerMaxMemSize)
        : undefined,
      slowQueryLog: isSet(object.slowQueryLog) ? Boolean(object.slowQueryLog) : undefined,
      slowQueryLogAlwaysWriteTime: isSet(object.slowQueryLogAlwaysWriteTime)
        ? Number(object.slowQueryLogAlwaysWriteTime)
        : undefined,
      logSlowRateType: isSet(object.logSlowRateType)
        ? mysqlConfig80_LogSlowRateTypeFromJSON(object.logSlowRateType)
        : 0,
      logSlowRateLimit: isSet(object.logSlowRateLimit) ? Number(object.logSlowRateLimit) : undefined,
      logSlowSpStatements: isSet(object.logSlowSpStatements) ? Boolean(object.logSlowSpStatements) : undefined,
      logSlowFilter: globalThis.Array.isArray(object?.logSlowFilter)
        ? object.logSlowFilter.map((e: any) => mysqlConfig80_LogSlowFilterTypeFromJSON(e))
        : [],
      mdbPriorityChoiceMaxLag: isSet(object.mdbPriorityChoiceMaxLag)
        ? Number(object.mdbPriorityChoiceMaxLag)
        : undefined,
      innodbPageSize: isSet(object.innodbPageSize) ? Number(object.innodbPageSize) : undefined,
      innodbOnlineAlterLogMaxSize: isSet(object.innodbOnlineAlterLogMaxSize)
        ? Number(object.innodbOnlineAlterLogMaxSize)
        : undefined,
      innodbFtMinTokenSize: isSet(object.innodbFtMinTokenSize) ? Number(object.innodbFtMinTokenSize) : undefined,
      innodbFtMaxTokenSize: isSet(object.innodbFtMaxTokenSize) ? Number(object.innodbFtMaxTokenSize) : undefined,
      lowerCaseTableNames: isSet(object.lowerCaseTableNames) ? Number(object.lowerCaseTableNames) : undefined,
      maxSpRecursionDepth: isSet(object.maxSpRecursionDepth) ? Number(object.maxSpRecursionDepth) : undefined,
      innodbCompressionLevel: isSet(object.innodbCompressionLevel) ? Number(object.innodbCompressionLevel) : undefined,
      binlogTransactionDependencyTracking: isSet(object.binlogTransactionDependencyTracking)
        ? mysqlConfig80_BinlogTransactionDependencyTrackingFromJSON(object.binlogTransactionDependencyTracking)
        : 0,
      autocommit: isSet(object.autocommit) ? Boolean(object.autocommit) : undefined,
      innodbStatusOutput: isSet(object.innodbStatusOutput) ? Boolean(object.innodbStatusOutput) : undefined,
      innodbStrictMode: isSet(object.innodbStrictMode) ? Boolean(object.innodbStrictMode) : undefined,
      innodbPrintLockWaitTimeoutInfo: isSet(object.innodbPrintLockWaitTimeoutInfo)
        ? Boolean(object.innodbPrintLockWaitTimeoutInfo)
        : undefined,
      logErrorVerbosity: isSet(object.logErrorVerbosity) ? Number(object.logErrorVerbosity) : undefined,
      maxDigestLength: isSet(object.maxDigestLength) ? Number(object.maxDigestLength) : undefined,
      lockWaitTimeout: isSet(object.lockWaitTimeout) ? Number(object.lockWaitTimeout) : undefined,
      maxPreparedStmtCount: isSet(object.maxPreparedStmtCount) ? Number(object.maxPreparedStmtCount) : undefined,
      optimizerSwitch: isSet(object.optimizerSwitch) ? globalThis.String(object.optimizerSwitch) : "",
      optimizerSearchDepth: isSet(object.optimizerSearchDepth) ? Number(object.optimizerSearchDepth) : undefined,
    };
  },

  toJSON(message: MysqlConfig80): unknown {
    const obj: any = {};
    if (message.innodbBufferPoolSize !== undefined) {
      obj.innodbBufferPoolSize = message.innodbBufferPoolSize;
    }
    if (message.maxConnections !== undefined) {
      obj.maxConnections = message.maxConnections;
    }
    if (message.longQueryTime !== undefined) {
      obj.longQueryTime = message.longQueryTime;
    }
    if (message.generalLog !== undefined) {
      obj.generalLog = message.generalLog;
    }
    if (message.auditLog !== undefined) {
      obj.auditLog = message.auditLog;
    }
    if (message.sqlMode?.length) {
      obj.sqlMode = message.sqlMode.map((e) => mysqlConfig80_SQLModeToJSON(e));
    }
    if (message.maxAllowedPacket !== undefined) {
      obj.maxAllowedPacket = message.maxAllowedPacket;
    }
    if (message.defaultAuthenticationPlugin !== 0) {
      obj.defaultAuthenticationPlugin = mysqlConfig80_AuthPluginToJSON(message.defaultAuthenticationPlugin);
    }
    if (message.innodbFlushLogAtTrxCommit !== undefined) {
      obj.innodbFlushLogAtTrxCommit = message.innodbFlushLogAtTrxCommit;
    }
    if (message.innodbLockWaitTimeout !== undefined) {
      obj.innodbLockWaitTimeout = message.innodbLockWaitTimeout;
    }
    if (message.transactionIsolation !== 0) {
      obj.transactionIsolation = mysqlConfig80_TransactionIsolationToJSON(message.transactionIsolation);
    }
    if (message.innodbPrintAllDeadlocks !== undefined) {
      obj.innodbPrintAllDeadlocks = message.innodbPrintAllDeadlocks;
    }
    if (message.netReadTimeout !== undefined) {
      obj.netReadTimeout = message.netReadTimeout;
    }
    if (message.netWriteTimeout !== undefined) {
      obj.netWriteTimeout = message.netWriteTimeout;
    }
    if (message.groupConcatMaxLen !== undefined) {
      obj.groupConcatMaxLen = message.groupConcatMaxLen;
    }
    if (message.tmpTableSize !== undefined) {
      obj.tmpTableSize = message.tmpTableSize;
    }
    if (message.maxHeapTableSize !== undefined) {
      obj.maxHeapTableSize = message.maxHeapTableSize;
    }
    if (message.defaultTimeZone !== "") {
      obj.defaultTimeZone = message.defaultTimeZone;
    }
    if (message.characterSetServer !== "") {
      obj.characterSetServer = message.characterSetServer;
    }
    if (message.collationServer !== "") {
      obj.collationServer = message.collationServer;
    }
    if (message.innodbAdaptiveHashIndex !== undefined) {
      obj.innodbAdaptiveHashIndex = message.innodbAdaptiveHashIndex;
    }
    if (message.innodbNumaInterleave !== undefined) {
      obj.innodbNumaInterleave = message.innodbNumaInterleave;
    }
    if (message.innodbLogBufferSize !== undefined) {
      obj.innodbLogBufferSize = message.innodbLogBufferSize;
    }
    if (message.innodbLogFileSize !== undefined) {
      obj.innodbLogFileSize = message.innodbLogFileSize;
    }
    if (message.innodbIoCapacity !== undefined) {
      obj.innodbIoCapacity = message.innodbIoCapacity;
    }
    if (message.innodbIoCapacityMax !== undefined) {
      obj.innodbIoCapacityMax = message.innodbIoCapacityMax;
    }
    if (message.innodbReadIoThreads !== undefined) {
      obj.innodbReadIoThreads = message.innodbReadIoThreads;
    }
    if (message.innodbWriteIoThreads !== undefined) {
      obj.innodbWriteIoThreads = message.innodbWriteIoThreads;
    }
    if (message.innodbPurgeThreads !== undefined) {
      obj.innodbPurgeThreads = message.innodbPurgeThreads;
    }
    if (message.innodbThreadConcurrency !== undefined) {
      obj.innodbThreadConcurrency = message.innodbThreadConcurrency;
    }
    if (message.innodbTempDataFileMaxSize !== undefined) {
      obj.innodbTempDataFileMaxSize = message.innodbTempDataFileMaxSize;
    }
    if (message.threadCacheSize !== undefined) {
      obj.threadCacheSize = message.threadCacheSize;
    }
    if (message.threadStack !== undefined) {
      obj.threadStack = message.threadStack;
    }
    if (message.joinBufferSize !== undefined) {
      obj.joinBufferSize = message.joinBufferSize;
    }
    if (message.sortBufferSize !== undefined) {
      obj.sortBufferSize = message.sortBufferSize;
    }
    if (message.tableDefinitionCache !== undefined) {
      obj.tableDefinitionCache = message.tableDefinitionCache;
    }
    if (message.tableOpenCache !== undefined) {
      obj.tableOpenCache = message.tableOpenCache;
    }
    if (message.tableOpenCacheInstances !== undefined) {
      obj.tableOpenCacheInstances = message.tableOpenCacheInstances;
    }
    if (message.explicitDefaultsForTimestamp !== undefined) {
      obj.explicitDefaultsForTimestamp = message.explicitDefaultsForTimestamp;
    }
    if (message.autoIncrementIncrement !== undefined) {
      obj.autoIncrementIncrement = message.autoIncrementIncrement;
    }
    if (message.autoIncrementOffset !== undefined) {
      obj.autoIncrementOffset = message.autoIncrementOffset;
    }
    if (message.syncBinlog !== undefined) {
      obj.syncBinlog = message.syncBinlog;
    }
    if (message.binlogCacheSize !== undefined) {
      obj.binlogCacheSize = message.binlogCacheSize;
    }
    if (message.binlogGroupCommitSyncDelay !== undefined) {
      obj.binlogGroupCommitSyncDelay = message.binlogGroupCommitSyncDelay;
    }
    if (message.binlogRowImage !== 0) {
      obj.binlogRowImage = mysqlConfig80_BinlogRowImageToJSON(message.binlogRowImage);
    }
    if (message.binlogRowsQueryLogEvents !== undefined) {
      obj.binlogRowsQueryLogEvents = message.binlogRowsQueryLogEvents;
    }
    if (message.rplSemiSyncMasterWaitForSlaveCount !== undefined) {
      obj.rplSemiSyncMasterWaitForSlaveCount = message.rplSemiSyncMasterWaitForSlaveCount;
    }
    if (message.slaveParallelType !== 0) {
      obj.slaveParallelType = mysqlConfig80_SlaveParallelTypeToJSON(message.slaveParallelType);
    }
    if (message.slaveParallelWorkers !== undefined) {
      obj.slaveParallelWorkers = message.slaveParallelWorkers;
    }
    if (message.regexpTimeLimit !== undefined) {
      obj.regexpTimeLimit = message.regexpTimeLimit;
    }
    if (message.mdbPreserveBinlogBytes !== undefined) {
      obj.mdbPreserveBinlogBytes = message.mdbPreserveBinlogBytes;
    }
    if (message.interactiveTimeout !== undefined) {
      obj.interactiveTimeout = message.interactiveTimeout;
    }
    if (message.waitTimeout !== undefined) {
      obj.waitTimeout = message.waitTimeout;
    }
    if (message.mdbOfflineModeEnableLag !== undefined) {
      obj.mdbOfflineModeEnableLag = message.mdbOfflineModeEnableLag;
    }
    if (message.mdbOfflineModeDisableLag !== undefined) {
      obj.mdbOfflineModeDisableLag = message.mdbOfflineModeDisableLag;
    }
    if (message.rangeOptimizerMaxMemSize !== undefined) {
      obj.rangeOptimizerMaxMemSize = message.rangeOptimizerMaxMemSize;
    }
    if (message.slowQueryLog !== undefined) {
      obj.slowQueryLog = message.slowQueryLog;
    }
    if (message.slowQueryLogAlwaysWriteTime !== undefined) {
      obj.slowQueryLogAlwaysWriteTime = message.slowQueryLogAlwaysWriteTime;
    }
    if (message.logSlowRateType !== 0) {
      obj.logSlowRateType = mysqlConfig80_LogSlowRateTypeToJSON(message.logSlowRateType);
    }
    if (message.logSlowRateLimit !== undefined) {
      obj.logSlowRateLimit = message.logSlowRateLimit;
    }
    if (message.logSlowSpStatements !== undefined) {
      obj.logSlowSpStatements = message.logSlowSpStatements;
    }
    if (message.logSlowFilter?.length) {
      obj.logSlowFilter = message.logSlowFilter.map((e) => mysqlConfig80_LogSlowFilterTypeToJSON(e));
    }
    if (message.mdbPriorityChoiceMaxLag !== undefined) {
      obj.mdbPriorityChoiceMaxLag = message.mdbPriorityChoiceMaxLag;
    }
    if (message.innodbPageSize !== undefined) {
      obj.innodbPageSize = message.innodbPageSize;
    }
    if (message.innodbOnlineAlterLogMaxSize !== undefined) {
      obj.innodbOnlineAlterLogMaxSize = message.innodbOnlineAlterLogMaxSize;
    }
    if (message.innodbFtMinTokenSize !== undefined) {
      obj.innodbFtMinTokenSize = message.innodbFtMinTokenSize;
    }
    if (message.innodbFtMaxTokenSize !== undefined) {
      obj.innodbFtMaxTokenSize = message.innodbFtMaxTokenSize;
    }
    if (message.lowerCaseTableNames !== undefined) {
      obj.lowerCaseTableNames = message.lowerCaseTableNames;
    }
    if (message.maxSpRecursionDepth !== undefined) {
      obj.maxSpRecursionDepth = message.maxSpRecursionDepth;
    }
    if (message.innodbCompressionLevel !== undefined) {
      obj.innodbCompressionLevel = message.innodbCompressionLevel;
    }
    if (message.binlogTransactionDependencyTracking !== 0) {
      obj.binlogTransactionDependencyTracking = mysqlConfig80_BinlogTransactionDependencyTrackingToJSON(
        message.binlogTransactionDependencyTracking,
      );
    }
    if (message.autocommit !== undefined) {
      obj.autocommit = message.autocommit;
    }
    if (message.innodbStatusOutput !== undefined) {
      obj.innodbStatusOutput = message.innodbStatusOutput;
    }
    if (message.innodbStrictMode !== undefined) {
      obj.innodbStrictMode = message.innodbStrictMode;
    }
    if (message.innodbPrintLockWaitTimeoutInfo !== undefined) {
      obj.innodbPrintLockWaitTimeoutInfo = message.innodbPrintLockWaitTimeoutInfo;
    }
    if (message.logErrorVerbosity !== undefined) {
      obj.logErrorVerbosity = message.logErrorVerbosity;
    }
    if (message.maxDigestLength !== undefined) {
      obj.maxDigestLength = message.maxDigestLength;
    }
    if (message.lockWaitTimeout !== undefined) {
      obj.lockWaitTimeout = message.lockWaitTimeout;
    }
    if (message.maxPreparedStmtCount !== undefined) {
      obj.maxPreparedStmtCount = message.maxPreparedStmtCount;
    }
    if (message.optimizerSwitch !== "") {
      obj.optimizerSwitch = message.optimizerSwitch;
    }
    if (message.optimizerSearchDepth !== undefined) {
      obj.optimizerSearchDepth = message.optimizerSearchDepth;
    }
    return obj;
  },

  create(base?: DeepPartial<MysqlConfig80>): MysqlConfig80 {
    return MysqlConfig80.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MysqlConfig80>): MysqlConfig80 {
    const message = createBaseMysqlConfig80();
    message.innodbBufferPoolSize = object.innodbBufferPoolSize ?? undefined;
    message.maxConnections = object.maxConnections ?? undefined;
    message.longQueryTime = object.longQueryTime ?? undefined;
    message.generalLog = object.generalLog ?? undefined;
    message.auditLog = object.auditLog ?? undefined;
    message.sqlMode = object.sqlMode?.map((e) => e) || [];
    message.maxAllowedPacket = object.maxAllowedPacket ?? undefined;
    message.defaultAuthenticationPlugin = object.defaultAuthenticationPlugin ?? 0;
    message.innodbFlushLogAtTrxCommit = object.innodbFlushLogAtTrxCommit ?? undefined;
    message.innodbLockWaitTimeout = object.innodbLockWaitTimeout ?? undefined;
    message.transactionIsolation = object.transactionIsolation ?? 0;
    message.innodbPrintAllDeadlocks = object.innodbPrintAllDeadlocks ?? undefined;
    message.netReadTimeout = object.netReadTimeout ?? undefined;
    message.netWriteTimeout = object.netWriteTimeout ?? undefined;
    message.groupConcatMaxLen = object.groupConcatMaxLen ?? undefined;
    message.tmpTableSize = object.tmpTableSize ?? undefined;
    message.maxHeapTableSize = object.maxHeapTableSize ?? undefined;
    message.defaultTimeZone = object.defaultTimeZone ?? "";
    message.characterSetServer = object.characterSetServer ?? "";
    message.collationServer = object.collationServer ?? "";
    message.innodbAdaptiveHashIndex = object.innodbAdaptiveHashIndex ?? undefined;
    message.innodbNumaInterleave = object.innodbNumaInterleave ?? undefined;
    message.innodbLogBufferSize = object.innodbLogBufferSize ?? undefined;
    message.innodbLogFileSize = object.innodbLogFileSize ?? undefined;
    message.innodbIoCapacity = object.innodbIoCapacity ?? undefined;
    message.innodbIoCapacityMax = object.innodbIoCapacityMax ?? undefined;
    message.innodbReadIoThreads = object.innodbReadIoThreads ?? undefined;
    message.innodbWriteIoThreads = object.innodbWriteIoThreads ?? undefined;
    message.innodbPurgeThreads = object.innodbPurgeThreads ?? undefined;
    message.innodbThreadConcurrency = object.innodbThreadConcurrency ?? undefined;
    message.innodbTempDataFileMaxSize = object.innodbTempDataFileMaxSize ?? undefined;
    message.threadCacheSize = object.threadCacheSize ?? undefined;
    message.threadStack = object.threadStack ?? undefined;
    message.joinBufferSize = object.joinBufferSize ?? undefined;
    message.sortBufferSize = object.sortBufferSize ?? undefined;
    message.tableDefinitionCache = object.tableDefinitionCache ?? undefined;
    message.tableOpenCache = object.tableOpenCache ?? undefined;
    message.tableOpenCacheInstances = object.tableOpenCacheInstances ?? undefined;
    message.explicitDefaultsForTimestamp = object.explicitDefaultsForTimestamp ?? undefined;
    message.autoIncrementIncrement = object.autoIncrementIncrement ?? undefined;
    message.autoIncrementOffset = object.autoIncrementOffset ?? undefined;
    message.syncBinlog = object.syncBinlog ?? undefined;
    message.binlogCacheSize = object.binlogCacheSize ?? undefined;
    message.binlogGroupCommitSyncDelay = object.binlogGroupCommitSyncDelay ?? undefined;
    message.binlogRowImage = object.binlogRowImage ?? 0;
    message.binlogRowsQueryLogEvents = object.binlogRowsQueryLogEvents ?? undefined;
    message.rplSemiSyncMasterWaitForSlaveCount = object.rplSemiSyncMasterWaitForSlaveCount ?? undefined;
    message.slaveParallelType = object.slaveParallelType ?? 0;
    message.slaveParallelWorkers = object.slaveParallelWorkers ?? undefined;
    message.regexpTimeLimit = object.regexpTimeLimit ?? undefined;
    message.mdbPreserveBinlogBytes = object.mdbPreserveBinlogBytes ?? undefined;
    message.interactiveTimeout = object.interactiveTimeout ?? undefined;
    message.waitTimeout = object.waitTimeout ?? undefined;
    message.mdbOfflineModeEnableLag = object.mdbOfflineModeEnableLag ?? undefined;
    message.mdbOfflineModeDisableLag = object.mdbOfflineModeDisableLag ?? undefined;
    message.rangeOptimizerMaxMemSize = object.rangeOptimizerMaxMemSize ?? undefined;
    message.slowQueryLog = object.slowQueryLog ?? undefined;
    message.slowQueryLogAlwaysWriteTime = object.slowQueryLogAlwaysWriteTime ?? undefined;
    message.logSlowRateType = object.logSlowRateType ?? 0;
    message.logSlowRateLimit = object.logSlowRateLimit ?? undefined;
    message.logSlowSpStatements = object.logSlowSpStatements ?? undefined;
    message.logSlowFilter = object.logSlowFilter?.map((e) => e) || [];
    message.mdbPriorityChoiceMaxLag = object.mdbPriorityChoiceMaxLag ?? undefined;
    message.innodbPageSize = object.innodbPageSize ?? undefined;
    message.innodbOnlineAlterLogMaxSize = object.innodbOnlineAlterLogMaxSize ?? undefined;
    message.innodbFtMinTokenSize = object.innodbFtMinTokenSize ?? undefined;
    message.innodbFtMaxTokenSize = object.innodbFtMaxTokenSize ?? undefined;
    message.lowerCaseTableNames = object.lowerCaseTableNames ?? undefined;
    message.maxSpRecursionDepth = object.maxSpRecursionDepth ?? undefined;
    message.innodbCompressionLevel = object.innodbCompressionLevel ?? undefined;
    message.binlogTransactionDependencyTracking = object.binlogTransactionDependencyTracking ?? 0;
    message.autocommit = object.autocommit ?? undefined;
    message.innodbStatusOutput = object.innodbStatusOutput ?? undefined;
    message.innodbStrictMode = object.innodbStrictMode ?? undefined;
    message.innodbPrintLockWaitTimeoutInfo = object.innodbPrintLockWaitTimeoutInfo ?? undefined;
    message.logErrorVerbosity = object.logErrorVerbosity ?? undefined;
    message.maxDigestLength = object.maxDigestLength ?? undefined;
    message.lockWaitTimeout = object.lockWaitTimeout ?? undefined;
    message.maxPreparedStmtCount = object.maxPreparedStmtCount ?? undefined;
    message.optimizerSwitch = object.optimizerSwitch ?? "";
    message.optimizerSearchDepth = object.optimizerSearchDepth ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MysqlConfig80.$type, MysqlConfig80);

function createBaseMysqlConfigSet80(): MysqlConfigSet80 {
  return {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet8_0",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const MysqlConfigSet80 = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet8_0" as const,

  encode(message: MysqlConfigSet80, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      MysqlConfig80.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      MysqlConfig80.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      MysqlConfig80.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlConfigSet80 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMysqlConfigSet80();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = MysqlConfig80.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = MysqlConfig80.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = MysqlConfig80.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MysqlConfigSet80 {
    return {
      $type: MysqlConfigSet80.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? MysqlConfig80.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? MysqlConfig80.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? MysqlConfig80.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: MysqlConfigSet80): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = MysqlConfig80.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = MysqlConfig80.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = MysqlConfig80.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MysqlConfigSet80>): MysqlConfigSet80 {
    return MysqlConfigSet80.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MysqlConfigSet80>): MysqlConfigSet80 {
    const message = createBaseMysqlConfigSet80();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? MysqlConfig80.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? MysqlConfig80.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? MysqlConfig80.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MysqlConfigSet80.$type, MysqlConfigSet80);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
