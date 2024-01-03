/* eslint-disable */
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export enum LogStatement {
  LOG_STATEMENT_UNSPECIFIED = 0,
  /** NONE - None statements are logged. */
  NONE = 1,
  /** DDL - Logs all data definition commands like `CREATE`, `ALTER`, and `DROP`. Default value. */
  DDL = 2,
  /** MOD - Logs all `DDL` statements, plus `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`, and `COPY FROM`. */
  MOD = 3,
  /** ALL - Logs all statements. */
  ALL = 4,
  UNRECOGNIZED = -1,
}

export function logStatementFromJSON(object: any): LogStatement {
  switch (object) {
    case 0:
    case "LOG_STATEMENT_UNSPECIFIED":
      return LogStatement.LOG_STATEMENT_UNSPECIFIED;
    case 1:
    case "NONE":
      return LogStatement.NONE;
    case 2:
    case "DDL":
      return LogStatement.DDL;
    case 3:
    case "MOD":
      return LogStatement.MOD;
    case 4:
    case "ALL":
      return LogStatement.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LogStatement.UNRECOGNIZED;
  }
}

export function logStatementToJSON(object: LogStatement): string {
  switch (object) {
    case LogStatement.LOG_STATEMENT_UNSPECIFIED:
      return "LOG_STATEMENT_UNSPECIFIED";
    case LogStatement.NONE:
      return "NONE";
    case LogStatement.DDL:
      return "DDL";
    case LogStatement.MOD:
      return "MOD";
    case LogStatement.ALL:
      return "ALL";
    case LogStatement.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Resources {
  $type: "yandex.cloud.mdb.greenplum.v1.Resources";
  /**
   * ID of the preset for computational resources allocated to a host.
   *
   * Available presets are listed in the [documentation](/docs/managed-greenplum/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage used by the host, in bytes. */
  diskSize: number;
  /** Type of the storage used by the host: `network-hdd`, `network-ssd` or `local-ssd`. */
  diskTypeId: string;
}

export interface ConnectionPoolerConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig";
  /** Route server pool mode. */
  mode: ConnectionPoolerConfig_PoolMode;
  /**
   * The number of servers in the server pool. Clients are placed in a wait queue when all servers are busy.
   *
   * Set to zero to disable the limit.
   */
  size?:
    | number
    | undefined;
  /**
   * Server pool idle timeout, in seconds.
   *
   * A server connection closes after being idle for the specified time.
   *
   * Set to zero to disable the limit.
   */
  clientIdleTimeout?: number | undefined;
}

export enum ConnectionPoolerConfig_PoolMode {
  POOL_MODE_UNSPECIFIED = 0,
  /** SESSION - Assign server connection to a client until it disconnects. Default value. */
  SESSION = 1,
  /** TRANSACTION - Assign server connection to a client for a transaction processing. */
  TRANSACTION = 2,
  UNRECOGNIZED = -1,
}

export function connectionPoolerConfig_PoolModeFromJSON(object: any): ConnectionPoolerConfig_PoolMode {
  switch (object) {
    case 0:
    case "POOL_MODE_UNSPECIFIED":
      return ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED;
    case 1:
    case "SESSION":
      return ConnectionPoolerConfig_PoolMode.SESSION;
    case 2:
    case "TRANSACTION":
      return ConnectionPoolerConfig_PoolMode.TRANSACTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionPoolerConfig_PoolMode.UNRECOGNIZED;
  }
}

export function connectionPoolerConfig_PoolModeToJSON(object: ConnectionPoolerConfig_PoolMode): string {
  switch (object) {
    case ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED:
      return "POOL_MODE_UNSPECIFIED";
    case ConnectionPoolerConfig_PoolMode.SESSION:
      return "SESSION";
    case ConnectionPoolerConfig_PoolMode.TRANSACTION:
      return "TRANSACTION";
    case ConnectionPoolerConfig_PoolMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface BackgroundActivityStartAt {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt";
  hours: number;
  minutes: number;
}

export interface TableSizes {
  $type: "yandex.cloud.mdb.greenplum.v1.TableSizes";
  starts: BackgroundActivityStartAt[];
}

export interface AnalyzeAndVacuum {
  $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum";
  start?:
    | BackgroundActivityStartAt
    | undefined;
  /** in seconds 24*60*60-1 = 86399 */
  analyzeTimeout?:
    | number
    | undefined;
  /** in seconds 24*60*60-1 = 86399 */
  vacuumTimeout?: number | undefined;
}

export interface BackgroundActivitiesConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig";
  tableSizes?: TableSizes | undefined;
  analyzeAndVacuum?: AnalyzeAndVacuum | undefined;
}

export interface MasterSubclusterConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig";
  /** Computational resources allocated to Greenplum® master subcluster hosts. */
  resources?: Resources | undefined;
}

export interface SegmentSubclusterConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig";
  /** Computational resources allocated to Greenplum® segment subcluster hosts. */
  resources?: Resources | undefined;
}

export interface GreenplumConfig6 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6";
  /** Maximum number of inbound connections on master segment */
  maxConnections?:
    | number
    | undefined;
  /**
   * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
   * https://www.postgresql.org/docs/current/runtime-config-replication.html
   */
  maxSlotWalKeepSize?:
    | number
    | undefined;
  /**
   * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_segment
   */
  gpWorkfileLimitPerSegment?:
    | number
    | undefined;
  /**
   * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_query
   */
  gpWorkfileLimitPerQuery?:
    | number
    | undefined;
  /**
   * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
   * Spill files are created when executing a query that requires more memory than it is allocated.
   * The current query is terminated when the limit is exceeded.
   * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_files_per_query
   * Default value is 10000
   */
  gpWorkfileLimitFilesPerQuery?:
    | number
    | undefined;
  /**
   * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
   * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
   */
  maxPreparedTransactions?:
    | number
    | undefined;
  /**
   * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_compression
   */
  gpWorkfileCompression?:
    | boolean
    | undefined;
  /**
   * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
   * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
   * (seghost_physical_memory) / (average_number_concurrent_queries)
   * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
   * https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
   * Default value is 2097152000 (2000MB)
   */
  maxStatementMem?:
    | number
    | undefined;
  /**
   * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
   * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
   * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#log_statement
   * Default value is ddl
   */
  logStatement: LogStatement;
  /** https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
  gpAddColumnInheritsTableSetting?: boolean | undefined;
}

export interface GreenplumConfig617 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17";
  /** Maximum number of inbound connections on master segment. */
  maxConnections?:
    | number
    | undefined;
  /**
   * The maximum size of WAL files that replication slots are allowed to retain in the `pg_wal` directory at checkpoint time.
   *
   * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/current/runtime-config-replication.html).
   */
  maxSlotWalKeepSize?:
    | number
    | undefined;
  /**
   * The maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   *
   * The default value is 0 (no limit).
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment).
   */
  gpWorkfileLimitPerSegment?:
    | number
    | undefined;
  /**
   * The maximum disk size that an individual query is allowed to use for creating temporary spill files at each segment.
   *
   * The default value is 0 (no limit).
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query).
   */
  gpWorkfileLimitPerQuery?:
    | number
    | undefined;
  /**
   * The maximum number of temporary spill files allowed per query at each segment.
   *
   * Spill files, also known as workfiles, are created when a query requires more memory than there is allocated.
   *
   * The current query is terminated if the limit is exceeded.
   *
   * Set to zero to disable the limit.
   *
   * Master session reloads if the parameter changes.
   *
   * Default value is 10000.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query).
   */
  gpWorkfileLimitFilesPerQuery?:
    | number
    | undefined;
  /**
   * The maximum number of transactions that can be in the `prepared` state simultaneously.
   *
   * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/9.6/runtime-config-resource.html).
   */
  maxPreparedTransactions?:
    | number
    | undefined;
  /**
   * Whether the spill files are compressed or not.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression).
   */
  gpWorkfileCompression?: boolean | undefined;
}

export interface GreenplumConfig619 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19";
  /** Maximum number of inbound connections on master segment. */
  maxConnections?:
    | number
    | undefined;
  /**
   * The maximum size of WAL files that replication slots are allowed to retain in the `pg_wal` directory at checkpoint time.
   *
   * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/current/runtime-config-replication.html).
   */
  maxSlotWalKeepSize?:
    | number
    | undefined;
  /**
   * The maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   *
   * The default value is 0 (no limit).
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment).
   */
  gpWorkfileLimitPerSegment?:
    | number
    | undefined;
  /**
   * The maximum disk size that an individual query is allowed to use for creating temporary spill files at each segment.
   *
   * The default value is 0 (no limit).
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query).
   */
  gpWorkfileLimitPerQuery?:
    | number
    | undefined;
  /**
   * The maximum number of temporary spill files allowed per query at each segment.
   *
   * Spill files, also known as workfiles, are created when a query requires more memory than there is allocated.
   *
   * The current query is terminated if the limit is exceeded.
   *
   * Set to zero to disable the limit.
   *
   * Master session reloads if the parameter changes.
   *
   * Default value is 10000.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query).
   */
  gpWorkfileLimitFilesPerQuery?:
    | number
    | undefined;
  /**
   * The maximum number of transactions that can be in the `prepared` state simultaneously.
   *
   * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/9.6/runtime-config-resource.html).
   */
  maxPreparedTransactions?:
    | number
    | undefined;
  /**
   * Whether the spill files are compressed or not.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression).
   */
  gpWorkfileCompression?:
    | boolean
    | undefined;
  /**
   * The maximum memory limit for a query, in bytes.
   *
   * Helps to avoid out-of-memory errors on a segment host during query processing as a result of setting `statement_mem` too high.
   *
   * Taking into account the configuration of a single segment host, calculate [max_statement_mem] as follows: `seghost_physical_memory` / `average_number_concurrent_queries`.
   *
   * When changing both [max_statement_mem] and `statement_mem`, [max_statement_mem] must be changed first, or listed first in the `postgresql.conf` file.
   *
   * Default value is 2097152000 (2000 MB).
   *
   * More info in [Greenplum® documentation](https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem).
   */
  maxStatementMem?:
    | number
    | undefined;
  /**
   * Logged SQL statements.
   *
   * `PREPARE` and `EXPLAIN ANALYZE` statements are also logged if their contained command belongs to an appropriate type.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement).
   */
  logStatement: LogStatement;
}

export interface GreenplumConfig621 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21";
  /** Maximum number of inbound connections on master segment */
  maxConnections?:
    | number
    | undefined;
  /**
   * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
   * https://www.postgresql.org/docs/current/runtime-config-replication.html
   */
  maxSlotWalKeepSize?:
    | number
    | undefined;
  /**
   * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment
   */
  gpWorkfileLimitPerSegment?:
    | number
    | undefined;
  /**
   * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query
   */
  gpWorkfileLimitPerQuery?:
    | number
    | undefined;
  /**
   * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
   * Spill files are created when executing a query that requires more memory than it is allocated.
   * The current query is terminated when the limit is exceeded.
   * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query
   * Default value is 10000
   */
  gpWorkfileLimitFilesPerQuery?:
    | number
    | undefined;
  /**
   * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
   * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
   */
  maxPreparedTransactions?:
    | number
    | undefined;
  /**
   * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression
   */
  gpWorkfileCompression?:
    | boolean
    | undefined;
  /**
   * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
   * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
   * (seghost_physical_memory) / (average_number_concurrent_queries)
   * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
   * https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
   * Default value is 2097152000 (2000MB)
   */
  maxStatementMem?:
    | number
    | undefined;
  /**
   * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
   * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
   * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement
   * Default value is ddl
   */
  logStatement: LogStatement;
  /** https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
  gpAddColumnInheritsTableSetting?: boolean | undefined;
}

export interface GreenplumConfig622 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22";
  /** Maximum number of inbound connections on master segment */
  maxConnections?:
    | number
    | undefined;
  /**
   * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
   * https://www.postgresql.org/docs/current/runtime-config-replication.html
   */
  maxSlotWalKeepSize?:
    | number
    | undefined;
  /**
   * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment
   */
  gpWorkfileLimitPerSegment?:
    | number
    | undefined;
  /**
   * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query
   */
  gpWorkfileLimitPerQuery?:
    | number
    | undefined;
  /**
   * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
   * Spill files are created when executing a query that requires more memory than it is allocated.
   * The current query is terminated when the limit is exceeded.
   * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query
   * Default value is 10000
   */
  gpWorkfileLimitFilesPerQuery?:
    | number
    | undefined;
  /**
   * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
   * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
   */
  maxPreparedTransactions?:
    | number
    | undefined;
  /**
   * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression
   */
  gpWorkfileCompression?:
    | boolean
    | undefined;
  /**
   * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
   * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
   * (seghost_physical_memory) / (average_number_concurrent_queries)
   * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
   * https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
   * Default value is 2097152000 (2000MB)
   */
  maxStatementMem?:
    | number
    | undefined;
  /**
   * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
   * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
   * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement
   * Default value is ddl
   */
  logStatement: LogStatement;
  /** https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
  gpAddColumnInheritsTableSetting?: boolean | undefined;
}

/** Configuration settings version 6.17 */
export interface GreenplumConfigSet617 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17";
  /** Effective settings for a Greenplum® cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?:
    | GreenplumConfig617
    | undefined;
  /** User-defined settings for a Greenplum® cluster. */
  userConfig?:
    | GreenplumConfig617
    | undefined;
  /** Default configuration for a Greenplum® cluster. */
  defaultConfig?: GreenplumConfig617 | undefined;
}

/** Configuration settings version 6.19 */
export interface GreenplumConfigSet619 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19";
  /** Effective settings for a Greenplum® cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?:
    | GreenplumConfig619
    | undefined;
  /** User-defined settings for a Greenplum® cluster. */
  userConfig?:
    | GreenplumConfig619
    | undefined;
  /** Default configuration for a Greenplum® cluster. */
  defaultConfig?: GreenplumConfig619 | undefined;
}

export interface GreenplumConfigSet621 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21";
  /** Effective settings for a Greenplum®  cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?:
    | GreenplumConfig621
    | undefined;
  /** User-defined settings for a Greenplum® cluster. */
  userConfig?:
    | GreenplumConfig621
    | undefined;
  /** Default configuration for a Greenplum® cluster. */
  defaultConfig?: GreenplumConfig621 | undefined;
}

export interface GreenplumConfigSet622 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22";
  /** Effective settings for a Greenplum®  cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?:
    | GreenplumConfig622
    | undefined;
  /** User-defined settings for a Greenplum® cluster. */
  userConfig?:
    | GreenplumConfig622
    | undefined;
  /** Default configuration for a Greenplum® cluster. */
  defaultConfig?: GreenplumConfig622 | undefined;
}

export interface GreenplumConfigSet6 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6";
  /**
   * Effective settings for a Greenplum (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | GreenplumConfig6
    | undefined;
  /** User-defined settings for a Greenplum. */
  userConfig?:
    | GreenplumConfig6
    | undefined;
  /** Default configuration for a Greenplum. */
  defaultConfig?: GreenplumConfig6 | undefined;
}

export interface ConnectionPoolerConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet";
  /** Effective settings for an Odyssey® pooler (a combination of settings defined in [ConnectionPoolerConfigSet.user_config] and [ConnectionPoolerConfigSet.default_config]). */
  effectiveConfig?:
    | ConnectionPoolerConfig
    | undefined;
  /** User-defined settings for an Odyssey® pooler. */
  userConfig?:
    | ConnectionPoolerConfig
    | undefined;
  /** Default configuration for an Odyssey® pooler. */
  defaultConfig?: ConnectionPoolerConfig | undefined;
}

function createBaseResources(): Resources {
  return { $type: "yandex.cloud.mdb.greenplum.v1.Resources", resourcePresetId: "", diskSize: 0, diskTypeId: "" };
}

export const Resources = {
  $type: "yandex.cloud.mdb.greenplum.v1.Resources" as const,

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

function createBaseConnectionPoolerConfig(): ConnectionPoolerConfig {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig",
    mode: 0,
    size: undefined,
    clientIdleTimeout: undefined,
  };
}

export const ConnectionPoolerConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig" as const,

  encode(message: ConnectionPoolerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.size !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.size! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.clientIdleTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.clientIdleTimeout! },
        writer.uint32(26).fork(),
      ).ldelim();
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

          message.mode = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.size = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clientIdleTimeout = Int64Value.decode(reader, reader.uint32()).value;
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
      mode: isSet(object.mode) ? connectionPoolerConfig_PoolModeFromJSON(object.mode) : 0,
      size: isSet(object.size) ? Number(object.size) : undefined,
      clientIdleTimeout: isSet(object.clientIdleTimeout) ? Number(object.clientIdleTimeout) : undefined,
    };
  },

  toJSON(message: ConnectionPoolerConfig): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = connectionPoolerConfig_PoolModeToJSON(message.mode);
    }
    if (message.size !== undefined) {
      obj.size = message.size;
    }
    if (message.clientIdleTimeout !== undefined) {
      obj.clientIdleTimeout = message.clientIdleTimeout;
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectionPoolerConfig>): ConnectionPoolerConfig {
    return ConnectionPoolerConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionPoolerConfig>): ConnectionPoolerConfig {
    const message = createBaseConnectionPoolerConfig();
    message.mode = object.mode ?? 0;
    message.size = object.size ?? undefined;
    message.clientIdleTimeout = object.clientIdleTimeout ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectionPoolerConfig.$type, ConnectionPoolerConfig);

function createBaseBackgroundActivityStartAt(): BackgroundActivityStartAt {
  return { $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt", hours: 0, minutes: 0 };
}

export const BackgroundActivityStartAt = {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt" as const,

  encode(message: BackgroundActivityStartAt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hours !== 0) {
      writer.uint32(8).int64(message.hours);
    }
    if (message.minutes !== 0) {
      writer.uint32(16).int64(message.minutes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackgroundActivityStartAt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackgroundActivityStartAt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hours = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minutes = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackgroundActivityStartAt {
    return {
      $type: BackgroundActivityStartAt.$type,
      hours: isSet(object.hours) ? globalThis.Number(object.hours) : 0,
      minutes: isSet(object.minutes) ? globalThis.Number(object.minutes) : 0,
    };
  },

  toJSON(message: BackgroundActivityStartAt): unknown {
    const obj: any = {};
    if (message.hours !== 0) {
      obj.hours = Math.round(message.hours);
    }
    if (message.minutes !== 0) {
      obj.minutes = Math.round(message.minutes);
    }
    return obj;
  },

  create(base?: DeepPartial<BackgroundActivityStartAt>): BackgroundActivityStartAt {
    return BackgroundActivityStartAt.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BackgroundActivityStartAt>): BackgroundActivityStartAt {
    const message = createBaseBackgroundActivityStartAt();
    message.hours = object.hours ?? 0;
    message.minutes = object.minutes ?? 0;
    return message;
  },
};

messageTypeRegistry.set(BackgroundActivityStartAt.$type, BackgroundActivityStartAt);

function createBaseTableSizes(): TableSizes {
  return { $type: "yandex.cloud.mdb.greenplum.v1.TableSizes", starts: [] };
}

export const TableSizes = {
  $type: "yandex.cloud.mdb.greenplum.v1.TableSizes" as const,

  encode(message: TableSizes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.starts) {
      BackgroundActivityStartAt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableSizes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableSizes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.starts.push(BackgroundActivityStartAt.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TableSizes {
    return {
      $type: TableSizes.$type,
      starts: globalThis.Array.isArray(object?.starts)
        ? object.starts.map((e: any) => BackgroundActivityStartAt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TableSizes): unknown {
    const obj: any = {};
    if (message.starts?.length) {
      obj.starts = message.starts.map((e) => BackgroundActivityStartAt.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TableSizes>): TableSizes {
    return TableSizes.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TableSizes>): TableSizes {
    const message = createBaseTableSizes();
    message.starts = object.starts?.map((e) => BackgroundActivityStartAt.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TableSizes.$type, TableSizes);

function createBaseAnalyzeAndVacuum(): AnalyzeAndVacuum {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum",
    start: undefined,
    analyzeTimeout: undefined,
    vacuumTimeout: undefined,
  };
}

export const AnalyzeAndVacuum = {
  $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum" as const,

  encode(message: AnalyzeAndVacuum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      BackgroundActivityStartAt.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.analyzeTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.analyzeTimeout! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.vacuumTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumTimeout! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzeAndVacuum {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalyzeAndVacuum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.start = BackgroundActivityStartAt.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.analyzeTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.vacuumTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalyzeAndVacuum {
    return {
      $type: AnalyzeAndVacuum.$type,
      start: isSet(object.start) ? BackgroundActivityStartAt.fromJSON(object.start) : undefined,
      analyzeTimeout: isSet(object.analyzeTimeout) ? Number(object.analyzeTimeout) : undefined,
      vacuumTimeout: isSet(object.vacuumTimeout) ? Number(object.vacuumTimeout) : undefined,
    };
  },

  toJSON(message: AnalyzeAndVacuum): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = BackgroundActivityStartAt.toJSON(message.start);
    }
    if (message.analyzeTimeout !== undefined) {
      obj.analyzeTimeout = message.analyzeTimeout;
    }
    if (message.vacuumTimeout !== undefined) {
      obj.vacuumTimeout = message.vacuumTimeout;
    }
    return obj;
  },

  create(base?: DeepPartial<AnalyzeAndVacuum>): AnalyzeAndVacuum {
    return AnalyzeAndVacuum.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AnalyzeAndVacuum>): AnalyzeAndVacuum {
    const message = createBaseAnalyzeAndVacuum();
    message.start = (object.start !== undefined && object.start !== null)
      ? BackgroundActivityStartAt.fromPartial(object.start)
      : undefined;
    message.analyzeTimeout = object.analyzeTimeout ?? undefined;
    message.vacuumTimeout = object.vacuumTimeout ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AnalyzeAndVacuum.$type, AnalyzeAndVacuum);

function createBaseBackgroundActivitiesConfig(): BackgroundActivitiesConfig {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig",
    tableSizes: undefined,
    analyzeAndVacuum: undefined,
  };
}

export const BackgroundActivitiesConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig" as const,

  encode(message: BackgroundActivitiesConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableSizes !== undefined) {
      TableSizes.encode(message.tableSizes, writer.uint32(10).fork()).ldelim();
    }
    if (message.analyzeAndVacuum !== undefined) {
      AnalyzeAndVacuum.encode(message.analyzeAndVacuum, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackgroundActivitiesConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackgroundActivitiesConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tableSizes = TableSizes.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.analyzeAndVacuum = AnalyzeAndVacuum.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackgroundActivitiesConfig {
    return {
      $type: BackgroundActivitiesConfig.$type,
      tableSizes: isSet(object.tableSizes) ? TableSizes.fromJSON(object.tableSizes) : undefined,
      analyzeAndVacuum: isSet(object.analyzeAndVacuum) ? AnalyzeAndVacuum.fromJSON(object.analyzeAndVacuum) : undefined,
    };
  },

  toJSON(message: BackgroundActivitiesConfig): unknown {
    const obj: any = {};
    if (message.tableSizes !== undefined) {
      obj.tableSizes = TableSizes.toJSON(message.tableSizes);
    }
    if (message.analyzeAndVacuum !== undefined) {
      obj.analyzeAndVacuum = AnalyzeAndVacuum.toJSON(message.analyzeAndVacuum);
    }
    return obj;
  },

  create(base?: DeepPartial<BackgroundActivitiesConfig>): BackgroundActivitiesConfig {
    return BackgroundActivitiesConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BackgroundActivitiesConfig>): BackgroundActivitiesConfig {
    const message = createBaseBackgroundActivitiesConfig();
    message.tableSizes = (object.tableSizes !== undefined && object.tableSizes !== null)
      ? TableSizes.fromPartial(object.tableSizes)
      : undefined;
    message.analyzeAndVacuum = (object.analyzeAndVacuum !== undefined && object.analyzeAndVacuum !== null)
      ? AnalyzeAndVacuum.fromPartial(object.analyzeAndVacuum)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(BackgroundActivitiesConfig.$type, BackgroundActivitiesConfig);

function createBaseMasterSubclusterConfig(): MasterSubclusterConfig {
  return { $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig", resources: undefined };
}

export const MasterSubclusterConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig" as const,

  encode(message: MasterSubclusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterSubclusterConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterSubclusterConfig();
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

  fromJSON(object: any): MasterSubclusterConfig {
    return {
      $type: MasterSubclusterConfig.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MasterSubclusterConfig): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MasterSubclusterConfig>): MasterSubclusterConfig {
    return MasterSubclusterConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MasterSubclusterConfig>): MasterSubclusterConfig {
    const message = createBaseMasterSubclusterConfig();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MasterSubclusterConfig.$type, MasterSubclusterConfig);

function createBaseSegmentSubclusterConfig(): SegmentSubclusterConfig {
  return { $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig", resources: undefined };
}

export const SegmentSubclusterConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig" as const,

  encode(message: SegmentSubclusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SegmentSubclusterConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSegmentSubclusterConfig();
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

  fromJSON(object: any): SegmentSubclusterConfig {
    return {
      $type: SegmentSubclusterConfig.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: SegmentSubclusterConfig): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<SegmentSubclusterConfig>): SegmentSubclusterConfig {
    return SegmentSubclusterConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SegmentSubclusterConfig>): SegmentSubclusterConfig {
    const message = createBaseSegmentSubclusterConfig();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SegmentSubclusterConfig.$type, SegmentSubclusterConfig);

function createBaseGreenplumConfig6(): GreenplumConfig6 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6",
    maxConnections: undefined,
    maxSlotWalKeepSize: undefined,
    gpWorkfileLimitPerSegment: undefined,
    gpWorkfileLimitPerQuery: undefined,
    gpWorkfileLimitFilesPerQuery: undefined,
    maxPreparedTransactions: undefined,
    gpWorkfileCompression: undefined,
    maxStatementMem: undefined,
    logStatement: 0,
    gpAddColumnInheritsTableSetting: undefined,
  };
}

export const GreenplumConfig6 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6" as const,

  encode(message: GreenplumConfig6, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxSlotWalKeepSize! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerSegment! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerQuery! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitFilesPerQuery! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPreparedTransactions! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.gpWorkfileCompression! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.maxStatementMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStatementMem! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(72).int32(message.logStatement);
    }
    if (message.gpAddColumnInheritsTableSetting !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.gpAddColumnInheritsTableSetting! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig6 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfig6();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxSlotWalKeepSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gpWorkfileLimitPerSegment = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gpWorkfileLimitPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxPreparedTransactions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.gpWorkfileCompression = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.maxStatementMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.logStatement = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.gpAddColumnInheritsTableSetting = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfig6 {
    return {
      $type: GreenplumConfig6.$type,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      maxSlotWalKeepSize: isSet(object.maxSlotWalKeepSize) ? Number(object.maxSlotWalKeepSize) : undefined,
      gpWorkfileLimitPerSegment: isSet(object.gpWorkfileLimitPerSegment)
        ? Number(object.gpWorkfileLimitPerSegment)
        : undefined,
      gpWorkfileLimitPerQuery: isSet(object.gpWorkfileLimitPerQuery)
        ? Number(object.gpWorkfileLimitPerQuery)
        : undefined,
      gpWorkfileLimitFilesPerQuery: isSet(object.gpWorkfileLimitFilesPerQuery)
        ? Number(object.gpWorkfileLimitFilesPerQuery)
        : undefined,
      maxPreparedTransactions: isSet(object.maxPreparedTransactions)
        ? Number(object.maxPreparedTransactions)
        : undefined,
      gpWorkfileCompression: isSet(object.gpWorkfileCompression) ? Boolean(object.gpWorkfileCompression) : undefined,
      maxStatementMem: isSet(object.maxStatementMem) ? Number(object.maxStatementMem) : undefined,
      logStatement: isSet(object.logStatement) ? logStatementFromJSON(object.logStatement) : 0,
      gpAddColumnInheritsTableSetting: isSet(object.gpAddColumnInheritsTableSetting)
        ? Boolean(object.gpAddColumnInheritsTableSetting)
        : undefined,
    };
  },

  toJSON(message: GreenplumConfig6): unknown {
    const obj: any = {};
    if (message.maxConnections !== undefined) {
      obj.maxConnections = message.maxConnections;
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize;
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment;
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery;
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery;
    }
    if (message.maxPreparedTransactions !== undefined) {
      obj.maxPreparedTransactions = message.maxPreparedTransactions;
    }
    if (message.gpWorkfileCompression !== undefined) {
      obj.gpWorkfileCompression = message.gpWorkfileCompression;
    }
    if (message.maxStatementMem !== undefined) {
      obj.maxStatementMem = message.maxStatementMem;
    }
    if (message.logStatement !== 0) {
      obj.logStatement = logStatementToJSON(message.logStatement);
    }
    if (message.gpAddColumnInheritsTableSetting !== undefined) {
      obj.gpAddColumnInheritsTableSetting = message.gpAddColumnInheritsTableSetting;
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfig6>): GreenplumConfig6 {
    return GreenplumConfig6.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfig6>): GreenplumConfig6 {
    const message = createBaseGreenplumConfig6();
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment = object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery = object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery = object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    message.maxStatementMem = object.maxStatementMem ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.gpAddColumnInheritsTableSetting = object.gpAddColumnInheritsTableSetting ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfig6.$type, GreenplumConfig6);

function createBaseGreenplumConfig617(): GreenplumConfig617 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17",
    maxConnections: undefined,
    maxSlotWalKeepSize: undefined,
    gpWorkfileLimitPerSegment: undefined,
    gpWorkfileLimitPerQuery: undefined,
    gpWorkfileLimitFilesPerQuery: undefined,
    maxPreparedTransactions: undefined,
    gpWorkfileCompression: undefined,
  };
}

export const GreenplumConfig617 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17" as const,

  encode(message: GreenplumConfig617, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxSlotWalKeepSize! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerSegment! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerQuery! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitFilesPerQuery! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPreparedTransactions! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.gpWorkfileCompression! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig617 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfig617();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxSlotWalKeepSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gpWorkfileLimitPerSegment = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gpWorkfileLimitPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxPreparedTransactions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.gpWorkfileCompression = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfig617 {
    return {
      $type: GreenplumConfig617.$type,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      maxSlotWalKeepSize: isSet(object.maxSlotWalKeepSize) ? Number(object.maxSlotWalKeepSize) : undefined,
      gpWorkfileLimitPerSegment: isSet(object.gpWorkfileLimitPerSegment)
        ? Number(object.gpWorkfileLimitPerSegment)
        : undefined,
      gpWorkfileLimitPerQuery: isSet(object.gpWorkfileLimitPerQuery)
        ? Number(object.gpWorkfileLimitPerQuery)
        : undefined,
      gpWorkfileLimitFilesPerQuery: isSet(object.gpWorkfileLimitFilesPerQuery)
        ? Number(object.gpWorkfileLimitFilesPerQuery)
        : undefined,
      maxPreparedTransactions: isSet(object.maxPreparedTransactions)
        ? Number(object.maxPreparedTransactions)
        : undefined,
      gpWorkfileCompression: isSet(object.gpWorkfileCompression) ? Boolean(object.gpWorkfileCompression) : undefined,
    };
  },

  toJSON(message: GreenplumConfig617): unknown {
    const obj: any = {};
    if (message.maxConnections !== undefined) {
      obj.maxConnections = message.maxConnections;
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize;
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment;
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery;
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery;
    }
    if (message.maxPreparedTransactions !== undefined) {
      obj.maxPreparedTransactions = message.maxPreparedTransactions;
    }
    if (message.gpWorkfileCompression !== undefined) {
      obj.gpWorkfileCompression = message.gpWorkfileCompression;
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfig617>): GreenplumConfig617 {
    return GreenplumConfig617.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfig617>): GreenplumConfig617 {
    const message = createBaseGreenplumConfig617();
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment = object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery = object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery = object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfig617.$type, GreenplumConfig617);

function createBaseGreenplumConfig619(): GreenplumConfig619 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19",
    maxConnections: undefined,
    maxSlotWalKeepSize: undefined,
    gpWorkfileLimitPerSegment: undefined,
    gpWorkfileLimitPerQuery: undefined,
    gpWorkfileLimitFilesPerQuery: undefined,
    maxPreparedTransactions: undefined,
    gpWorkfileCompression: undefined,
    maxStatementMem: undefined,
    logStatement: 0,
  };
}

export const GreenplumConfig619 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19" as const,

  encode(message: GreenplumConfig619, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxSlotWalKeepSize! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerSegment! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerQuery! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitFilesPerQuery! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPreparedTransactions! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.gpWorkfileCompression! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.maxStatementMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStatementMem! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(72).int32(message.logStatement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig619 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfig619();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxSlotWalKeepSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gpWorkfileLimitPerSegment = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gpWorkfileLimitPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxPreparedTransactions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.gpWorkfileCompression = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.maxStatementMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.logStatement = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfig619 {
    return {
      $type: GreenplumConfig619.$type,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      maxSlotWalKeepSize: isSet(object.maxSlotWalKeepSize) ? Number(object.maxSlotWalKeepSize) : undefined,
      gpWorkfileLimitPerSegment: isSet(object.gpWorkfileLimitPerSegment)
        ? Number(object.gpWorkfileLimitPerSegment)
        : undefined,
      gpWorkfileLimitPerQuery: isSet(object.gpWorkfileLimitPerQuery)
        ? Number(object.gpWorkfileLimitPerQuery)
        : undefined,
      gpWorkfileLimitFilesPerQuery: isSet(object.gpWorkfileLimitFilesPerQuery)
        ? Number(object.gpWorkfileLimitFilesPerQuery)
        : undefined,
      maxPreparedTransactions: isSet(object.maxPreparedTransactions)
        ? Number(object.maxPreparedTransactions)
        : undefined,
      gpWorkfileCompression: isSet(object.gpWorkfileCompression) ? Boolean(object.gpWorkfileCompression) : undefined,
      maxStatementMem: isSet(object.maxStatementMem) ? Number(object.maxStatementMem) : undefined,
      logStatement: isSet(object.logStatement) ? logStatementFromJSON(object.logStatement) : 0,
    };
  },

  toJSON(message: GreenplumConfig619): unknown {
    const obj: any = {};
    if (message.maxConnections !== undefined) {
      obj.maxConnections = message.maxConnections;
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize;
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment;
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery;
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery;
    }
    if (message.maxPreparedTransactions !== undefined) {
      obj.maxPreparedTransactions = message.maxPreparedTransactions;
    }
    if (message.gpWorkfileCompression !== undefined) {
      obj.gpWorkfileCompression = message.gpWorkfileCompression;
    }
    if (message.maxStatementMem !== undefined) {
      obj.maxStatementMem = message.maxStatementMem;
    }
    if (message.logStatement !== 0) {
      obj.logStatement = logStatementToJSON(message.logStatement);
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfig619>): GreenplumConfig619 {
    return GreenplumConfig619.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfig619>): GreenplumConfig619 {
    const message = createBaseGreenplumConfig619();
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment = object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery = object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery = object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    message.maxStatementMem = object.maxStatementMem ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfig619.$type, GreenplumConfig619);

function createBaseGreenplumConfig621(): GreenplumConfig621 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21",
    maxConnections: undefined,
    maxSlotWalKeepSize: undefined,
    gpWorkfileLimitPerSegment: undefined,
    gpWorkfileLimitPerQuery: undefined,
    gpWorkfileLimitFilesPerQuery: undefined,
    maxPreparedTransactions: undefined,
    gpWorkfileCompression: undefined,
    maxStatementMem: undefined,
    logStatement: 0,
    gpAddColumnInheritsTableSetting: undefined,
  };
}

export const GreenplumConfig621 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21" as const,

  encode(message: GreenplumConfig621, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxSlotWalKeepSize! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerSegment! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerQuery! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitFilesPerQuery! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPreparedTransactions! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.gpWorkfileCompression! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.maxStatementMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStatementMem! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(72).int32(message.logStatement);
    }
    if (message.gpAddColumnInheritsTableSetting !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.gpAddColumnInheritsTableSetting! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig621 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfig621();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxSlotWalKeepSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gpWorkfileLimitPerSegment = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gpWorkfileLimitPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxPreparedTransactions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.gpWorkfileCompression = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.maxStatementMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.logStatement = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.gpAddColumnInheritsTableSetting = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfig621 {
    return {
      $type: GreenplumConfig621.$type,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      maxSlotWalKeepSize: isSet(object.maxSlotWalKeepSize) ? Number(object.maxSlotWalKeepSize) : undefined,
      gpWorkfileLimitPerSegment: isSet(object.gpWorkfileLimitPerSegment)
        ? Number(object.gpWorkfileLimitPerSegment)
        : undefined,
      gpWorkfileLimitPerQuery: isSet(object.gpWorkfileLimitPerQuery)
        ? Number(object.gpWorkfileLimitPerQuery)
        : undefined,
      gpWorkfileLimitFilesPerQuery: isSet(object.gpWorkfileLimitFilesPerQuery)
        ? Number(object.gpWorkfileLimitFilesPerQuery)
        : undefined,
      maxPreparedTransactions: isSet(object.maxPreparedTransactions)
        ? Number(object.maxPreparedTransactions)
        : undefined,
      gpWorkfileCompression: isSet(object.gpWorkfileCompression) ? Boolean(object.gpWorkfileCompression) : undefined,
      maxStatementMem: isSet(object.maxStatementMem) ? Number(object.maxStatementMem) : undefined,
      logStatement: isSet(object.logStatement) ? logStatementFromJSON(object.logStatement) : 0,
      gpAddColumnInheritsTableSetting: isSet(object.gpAddColumnInheritsTableSetting)
        ? Boolean(object.gpAddColumnInheritsTableSetting)
        : undefined,
    };
  },

  toJSON(message: GreenplumConfig621): unknown {
    const obj: any = {};
    if (message.maxConnections !== undefined) {
      obj.maxConnections = message.maxConnections;
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize;
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment;
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery;
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery;
    }
    if (message.maxPreparedTransactions !== undefined) {
      obj.maxPreparedTransactions = message.maxPreparedTransactions;
    }
    if (message.gpWorkfileCompression !== undefined) {
      obj.gpWorkfileCompression = message.gpWorkfileCompression;
    }
    if (message.maxStatementMem !== undefined) {
      obj.maxStatementMem = message.maxStatementMem;
    }
    if (message.logStatement !== 0) {
      obj.logStatement = logStatementToJSON(message.logStatement);
    }
    if (message.gpAddColumnInheritsTableSetting !== undefined) {
      obj.gpAddColumnInheritsTableSetting = message.gpAddColumnInheritsTableSetting;
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfig621>): GreenplumConfig621 {
    return GreenplumConfig621.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfig621>): GreenplumConfig621 {
    const message = createBaseGreenplumConfig621();
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment = object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery = object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery = object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    message.maxStatementMem = object.maxStatementMem ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.gpAddColumnInheritsTableSetting = object.gpAddColumnInheritsTableSetting ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfig621.$type, GreenplumConfig621);

function createBaseGreenplumConfig622(): GreenplumConfig622 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22",
    maxConnections: undefined,
    maxSlotWalKeepSize: undefined,
    gpWorkfileLimitPerSegment: undefined,
    gpWorkfileLimitPerQuery: undefined,
    gpWorkfileLimitFilesPerQuery: undefined,
    maxPreparedTransactions: undefined,
    gpWorkfileCompression: undefined,
    maxStatementMem: undefined,
    logStatement: 0,
    gpAddColumnInheritsTableSetting: undefined,
  };
}

export const GreenplumConfig622 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22" as const,

  encode(message: GreenplumConfig622, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxSlotWalKeepSize! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerSegment! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitPerQuery! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.gpWorkfileLimitFilesPerQuery! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPreparedTransactions! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.gpWorkfileCompression! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.maxStatementMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStatementMem! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(72).int32(message.logStatement);
    }
    if (message.gpAddColumnInheritsTableSetting !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.gpAddColumnInheritsTableSetting! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig622 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfig622();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxSlotWalKeepSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gpWorkfileLimitPerSegment = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gpWorkfileLimitPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxPreparedTransactions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.gpWorkfileCompression = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.maxStatementMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.logStatement = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.gpAddColumnInheritsTableSetting = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfig622 {
    return {
      $type: GreenplumConfig622.$type,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      maxSlotWalKeepSize: isSet(object.maxSlotWalKeepSize) ? Number(object.maxSlotWalKeepSize) : undefined,
      gpWorkfileLimitPerSegment: isSet(object.gpWorkfileLimitPerSegment)
        ? Number(object.gpWorkfileLimitPerSegment)
        : undefined,
      gpWorkfileLimitPerQuery: isSet(object.gpWorkfileLimitPerQuery)
        ? Number(object.gpWorkfileLimitPerQuery)
        : undefined,
      gpWorkfileLimitFilesPerQuery: isSet(object.gpWorkfileLimitFilesPerQuery)
        ? Number(object.gpWorkfileLimitFilesPerQuery)
        : undefined,
      maxPreparedTransactions: isSet(object.maxPreparedTransactions)
        ? Number(object.maxPreparedTransactions)
        : undefined,
      gpWorkfileCompression: isSet(object.gpWorkfileCompression) ? Boolean(object.gpWorkfileCompression) : undefined,
      maxStatementMem: isSet(object.maxStatementMem) ? Number(object.maxStatementMem) : undefined,
      logStatement: isSet(object.logStatement) ? logStatementFromJSON(object.logStatement) : 0,
      gpAddColumnInheritsTableSetting: isSet(object.gpAddColumnInheritsTableSetting)
        ? Boolean(object.gpAddColumnInheritsTableSetting)
        : undefined,
    };
  },

  toJSON(message: GreenplumConfig622): unknown {
    const obj: any = {};
    if (message.maxConnections !== undefined) {
      obj.maxConnections = message.maxConnections;
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize;
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment;
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery;
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery;
    }
    if (message.maxPreparedTransactions !== undefined) {
      obj.maxPreparedTransactions = message.maxPreparedTransactions;
    }
    if (message.gpWorkfileCompression !== undefined) {
      obj.gpWorkfileCompression = message.gpWorkfileCompression;
    }
    if (message.maxStatementMem !== undefined) {
      obj.maxStatementMem = message.maxStatementMem;
    }
    if (message.logStatement !== 0) {
      obj.logStatement = logStatementToJSON(message.logStatement);
    }
    if (message.gpAddColumnInheritsTableSetting !== undefined) {
      obj.gpAddColumnInheritsTableSetting = message.gpAddColumnInheritsTableSetting;
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfig622>): GreenplumConfig622 {
    return GreenplumConfig622.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfig622>): GreenplumConfig622 {
    const message = createBaseGreenplumConfig622();
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment = object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery = object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery = object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    message.maxStatementMem = object.maxStatementMem ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.gpAddColumnInheritsTableSetting = object.gpAddColumnInheritsTableSetting ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfig622.$type, GreenplumConfig622);

function createBaseGreenplumConfigSet617(): GreenplumConfigSet617 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const GreenplumConfigSet617 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17" as const,

  encode(message: GreenplumConfigSet617, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      GreenplumConfig617.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      GreenplumConfig617.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      GreenplumConfig617.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigSet617 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfigSet617();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = GreenplumConfig617.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = GreenplumConfig617.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = GreenplumConfig617.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfigSet617 {
    return {
      $type: GreenplumConfigSet617.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? GreenplumConfig617.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? GreenplumConfig617.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? GreenplumConfig617.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: GreenplumConfigSet617): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = GreenplumConfig617.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = GreenplumConfig617.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = GreenplumConfig617.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfigSet617>): GreenplumConfigSet617 {
    return GreenplumConfigSet617.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfigSet617>): GreenplumConfigSet617 {
    const message = createBaseGreenplumConfigSet617();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? GreenplumConfig617.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? GreenplumConfig617.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? GreenplumConfig617.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfigSet617.$type, GreenplumConfigSet617);

function createBaseGreenplumConfigSet619(): GreenplumConfigSet619 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const GreenplumConfigSet619 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19" as const,

  encode(message: GreenplumConfigSet619, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      GreenplumConfig619.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      GreenplumConfig619.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      GreenplumConfig619.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigSet619 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfigSet619();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = GreenplumConfig619.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = GreenplumConfig619.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = GreenplumConfig619.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfigSet619 {
    return {
      $type: GreenplumConfigSet619.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? GreenplumConfig619.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? GreenplumConfig619.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? GreenplumConfig619.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: GreenplumConfigSet619): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = GreenplumConfig619.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = GreenplumConfig619.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = GreenplumConfig619.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfigSet619>): GreenplumConfigSet619 {
    return GreenplumConfigSet619.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfigSet619>): GreenplumConfigSet619 {
    const message = createBaseGreenplumConfigSet619();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? GreenplumConfig619.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? GreenplumConfig619.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? GreenplumConfig619.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfigSet619.$type, GreenplumConfigSet619);

function createBaseGreenplumConfigSet621(): GreenplumConfigSet621 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const GreenplumConfigSet621 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21" as const,

  encode(message: GreenplumConfigSet621, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      GreenplumConfig621.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      GreenplumConfig621.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      GreenplumConfig621.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigSet621 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfigSet621();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = GreenplumConfig621.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = GreenplumConfig621.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = GreenplumConfig621.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfigSet621 {
    return {
      $type: GreenplumConfigSet621.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? GreenplumConfig621.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? GreenplumConfig621.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? GreenplumConfig621.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: GreenplumConfigSet621): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = GreenplumConfig621.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = GreenplumConfig621.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = GreenplumConfig621.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfigSet621>): GreenplumConfigSet621 {
    return GreenplumConfigSet621.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfigSet621>): GreenplumConfigSet621 {
    const message = createBaseGreenplumConfigSet621();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? GreenplumConfig621.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? GreenplumConfig621.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? GreenplumConfig621.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfigSet621.$type, GreenplumConfigSet621);

function createBaseGreenplumConfigSet622(): GreenplumConfigSet622 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const GreenplumConfigSet622 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22" as const,

  encode(message: GreenplumConfigSet622, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      GreenplumConfig622.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      GreenplumConfig622.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      GreenplumConfig622.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigSet622 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfigSet622();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = GreenplumConfig622.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = GreenplumConfig622.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = GreenplumConfig622.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfigSet622 {
    return {
      $type: GreenplumConfigSet622.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? GreenplumConfig622.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? GreenplumConfig622.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? GreenplumConfig622.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: GreenplumConfigSet622): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = GreenplumConfig622.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = GreenplumConfig622.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = GreenplumConfig622.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfigSet622>): GreenplumConfigSet622 {
    return GreenplumConfigSet622.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfigSet622>): GreenplumConfigSet622 {
    const message = createBaseGreenplumConfigSet622();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? GreenplumConfig622.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? GreenplumConfig622.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? GreenplumConfig622.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfigSet622.$type, GreenplumConfigSet622);

function createBaseGreenplumConfigSet6(): GreenplumConfigSet6 {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const GreenplumConfigSet6 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6" as const,

  encode(message: GreenplumConfigSet6, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      GreenplumConfig6.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      GreenplumConfig6.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      GreenplumConfig6.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigSet6 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreenplumConfigSet6();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = GreenplumConfig6.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = GreenplumConfig6.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = GreenplumConfig6.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfigSet6 {
    return {
      $type: GreenplumConfigSet6.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? GreenplumConfig6.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? GreenplumConfig6.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? GreenplumConfig6.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: GreenplumConfigSet6): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = GreenplumConfig6.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = GreenplumConfig6.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = GreenplumConfig6.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<GreenplumConfigSet6>): GreenplumConfigSet6 {
    return GreenplumConfigSet6.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GreenplumConfigSet6>): GreenplumConfigSet6 {
    const message = createBaseGreenplumConfigSet6();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? GreenplumConfig6.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? GreenplumConfig6.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? GreenplumConfig6.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfigSet6.$type, GreenplumConfigSet6);

function createBaseConnectionPoolerConfigSet(): ConnectionPoolerConfigSet {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const ConnectionPoolerConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet" as const,

  encode(message: ConnectionPoolerConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      ConnectionPoolerConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      ConnectionPoolerConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      ConnectionPoolerConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPoolerConfigSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionPoolerConfigSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = ConnectionPoolerConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = ConnectionPoolerConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = ConnectionPoolerConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionPoolerConfigSet {
    return {
      $type: ConnectionPoolerConfigSet.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? ConnectionPoolerConfig.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? ConnectionPoolerConfig.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? ConnectionPoolerConfig.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: ConnectionPoolerConfigSet): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = ConnectionPoolerConfig.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = ConnectionPoolerConfig.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = ConnectionPoolerConfig.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectionPoolerConfigSet>): ConnectionPoolerConfigSet {
    return ConnectionPoolerConfigSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionPoolerConfigSet>): ConnectionPoolerConfigSet {
    const message = createBaseConnectionPoolerConfigSet();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? ConnectionPoolerConfig.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? ConnectionPoolerConfig.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? ConnectionPoolerConfig.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectionPoolerConfigSet.$type, ConnectionPoolerConfigSet);

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
