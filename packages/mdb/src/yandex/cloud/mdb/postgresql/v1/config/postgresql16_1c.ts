/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";

/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters which detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/11/runtime-config.html).
 */
export interface PostgresqlConfig161C {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig16_1C";
  maxConnections?:
    | number
    | undefined;
  /** in bytes. */
  sharedBuffers?:
    | number
    | undefined;
  /** in bytes. */
  tempBuffers?: number | undefined;
  maxPreparedTransactions?:
    | number
    | undefined;
  /** in bytes. */
  workMem?:
    | number
    | undefined;
  /** in bytes. */
  maintenanceWorkMem?:
    | number
    | undefined;
  /** in bytes. */
  autovacuumWorkMem?:
    | number
    | undefined;
  /** in bytes. */
  tempFileLimit?:
    | number
    | undefined;
  /** in milliseconds. */
  vacuumCostDelay?: number | undefined;
  vacuumCostPageHit?: number | undefined;
  vacuumCostPageMiss?: number | undefined;
  vacuumCostPageDirty?: number | undefined;
  vacuumCostLimit?:
    | number
    | undefined;
  /** in milliseconds. */
  bgwriterDelay?: number | undefined;
  bgwriterLruMaxpages?: number | undefined;
  bgwriterLruMultiplier?: number | undefined;
  bgwriterFlushAfter?: number | undefined;
  backendFlushAfter?: number | undefined;
  oldSnapshotThreshold?: number | undefined;
  walLevel: PostgresqlConfig161C_WalLevel;
  synchronousCommit: PostgresqlConfig161C_SynchronousCommit;
  /** in milliseconds. */
  checkpointTimeout?: number | undefined;
  checkpointCompletionTarget?: number | undefined;
  checkpointFlushAfter?:
    | number
    | undefined;
  /** in bytes. */
  maxWalSize?:
    | number
    | undefined;
  /** in bytes. */
  minWalSize?:
    | number
    | undefined;
  /** in milliseconds. */
  maxStandbyStreamingDelay?: number | undefined;
  defaultStatisticsTarget?: number | undefined;
  constraintExclusion: PostgresqlConfig161C_ConstraintExclusion;
  cursorTupleFraction?: number | undefined;
  fromCollapseLimit?: number | undefined;
  joinCollapseLimit?: number | undefined;
  debugParallelQuery: PostgresqlConfig161C_DebugParallelQuery;
  clientMinMessages: PostgresqlConfig161C_LogLevel;
  logMinMessages: PostgresqlConfig161C_LogLevel;
  logMinErrorStatement: PostgresqlConfig161C_LogLevel;
  /** in milliseconds. */
  logMinDurationStatement?: number | undefined;
  logCheckpoints?: boolean | undefined;
  logConnections?: boolean | undefined;
  logDisconnections?: boolean | undefined;
  logDuration?: boolean | undefined;
  logErrorVerbosity: PostgresqlConfig161C_LogErrorVerbosity;
  logLockWaits?: boolean | undefined;
  logStatement: PostgresqlConfig161C_LogStatement;
  logTempFiles?: number | undefined;
  searchPath: string;
  rowSecurity?: boolean | undefined;
  defaultTransactionIsolation: PostgresqlConfig161C_TransactionIsolation;
  /** in milliseconds. */
  statementTimeout?:
    | number
    | undefined;
  /** in milliseconds. */
  lockTimeout?:
    | number
    | undefined;
  /** in milliseconds. */
  idleInTransactionSessionTimeout?: number | undefined;
  byteaOutput: PostgresqlConfig161C_ByteaOutput;
  xmlbinary: PostgresqlConfig161C_XmlBinary;
  xmloption: PostgresqlConfig161C_XmlOption;
  /** in bytes. */
  ginPendingListLimit?:
    | number
    | undefined;
  /** in milliseconds. */
  deadlockTimeout?: number | undefined;
  maxLocksPerTransaction?: number | undefined;
  maxPredLocksPerTransaction?: number | undefined;
  arrayNulls?: boolean | undefined;
  backslashQuote: PostgresqlConfig161C_BackslashQuote;
  defaultWithOids?: boolean | undefined;
  escapeStringWarning?: boolean | undefined;
  loCompatPrivileges?: boolean | undefined;
  quoteAllIdentifiers?: boolean | undefined;
  standardConformingStrings?: boolean | undefined;
  synchronizeSeqscans?: boolean | undefined;
  transformNullEquals?: boolean | undefined;
  exitOnError?: boolean | undefined;
  seqPageCost?: number | undefined;
  randomPageCost?: number | undefined;
  autovacuumMaxWorkers?: number | undefined;
  autovacuumVacuumCostDelay?: number | undefined;
  autovacuumVacuumCostLimit?:
    | number
    | undefined;
  /** in milliseconds. */
  autovacuumNaptime?:
    | number
    | undefined;
  /** in milliseconds. */
  archiveTimeout?: number | undefined;
  trackActivityQuerySize?: number | undefined;
  onlineAnalyzeEnable?: boolean | undefined;
  enableBitmapscan?: boolean | undefined;
  enableHashagg?: boolean | undefined;
  enableHashjoin?: boolean | undefined;
  enableIndexscan?: boolean | undefined;
  enableIndexonlyscan?: boolean | undefined;
  enableMaterial?: boolean | undefined;
  enableMergejoin?: boolean | undefined;
  enableNestloop?: boolean | undefined;
  enableSeqscan?: boolean | undefined;
  enableSort?: boolean | undefined;
  enableTidscan?: boolean | undefined;
  maxWorkerProcesses?: number | undefined;
  maxParallelWorkers?: number | undefined;
  maxParallelWorkersPerGather?: number | undefined;
  autovacuumVacuumScaleFactor?: number | undefined;
  autovacuumAnalyzeScaleFactor?: number | undefined;
  defaultTransactionReadOnly?: boolean | undefined;
  timezone: string;
  enableParallelAppend?: boolean | undefined;
  enableParallelHash?: boolean | undefined;
  enablePartitionPruning?: boolean | undefined;
  enablePartitionwiseAggregate?: boolean | undefined;
  enablePartitionwiseJoin?: boolean | undefined;
  jit?: boolean | undefined;
  maxParallelMaintenanceWorkers?: number | undefined;
  parallelLeaderParticipation?: boolean | undefined;
  logTransactionSampleRate?: number | undefined;
  planCacheMode: PostgresqlConfig161C_PlanCacheMode;
  effectiveIoConcurrency?: number | undefined;
  effectiveCacheSize?: number | undefined;
  sharedPreloadLibraries: PostgresqlConfig161C_SharedPreloadLibraries[];
  /** in milliseconds. */
  autoExplainLogMinDuration?: number | undefined;
  autoExplainLogAnalyze?: boolean | undefined;
  autoExplainLogBuffers?: boolean | undefined;
  autoExplainLogTiming?: boolean | undefined;
  autoExplainLogTriggers?: boolean | undefined;
  autoExplainLogVerbose?: boolean | undefined;
  autoExplainLogNestedStatements?: boolean | undefined;
  autoExplainSampleRate?: number | undefined;
  pgHintPlanEnableHint?: boolean | undefined;
  pgHintPlanEnableHintTable?: boolean | undefined;
  pgHintPlanDebugPrint: PostgresqlConfig161C_PgHintPlanDebugPrint;
  pgHintPlanMessageLevel: PostgresqlConfig161C_LogLevel;
  hashMemMultiplier?:
    | number
    | undefined;
  /** in bytes. */
  logicalDecodingWorkMem?: number | undefined;
  maintenanceIoConcurrency?:
    | number
    | undefined;
  /** in bytes. */
  maxSlotWalKeepSize?:
    | number
    | undefined;
  /** in bytes. */
  walKeepSize?: number | undefined;
  enableIncrementalSort?: boolean | undefined;
  autovacuumVacuumInsertThreshold?: number | undefined;
  autovacuumVacuumInsertScaleFactor?:
    | number
    | undefined;
  /** in milliseconds. */
  logMinDurationSample?: number | undefined;
  logStatementSampleRate?:
    | number
    | undefined;
  /** in bytes. */
  logParameterMaxLength?:
    | number
    | undefined;
  /** in bytes. */
  logParameterMaxLengthOnError?:
    | number
    | undefined;
  /** in milliseconds. */
  clientConnectionCheckInterval?: number | undefined;
  enableAsyncAppend?: boolean | undefined;
  enableGathermerge?: boolean | undefined;
  enableMemoize?:
    | boolean
    | undefined;
  /** in milliseconds. */
  logRecoveryConflictWaits?:
    | boolean
    | undefined;
  /** in milliseconds. */
  vacuumFailsafeAge?:
    | number
    | undefined;
  /** in milliseconds. */
  vacuumMultixactFailsafeAge?: number | undefined;
  pgQualstatsEnabled?: boolean | undefined;
  pgQualstatsTrackConstants?: boolean | undefined;
  pgQualstatsMax?: number | undefined;
  pgQualstatsResolveOids?: boolean | undefined;
  pgQualstatsSampleRate?: number | undefined;
  plantunerFixEmptyTable?:
    | boolean
    | undefined;
  /** in bytes. */
  maxStackDepth?: number | undefined;
  enableGroupByReordering?:
    | boolean
    | undefined;
  /** enable Genetic Query Optimizer, by default is on */
  geqo?:
    | boolean
    | undefined;
  /** The number of tables to use geqo, default is 12 */
  geqoThreshold?:
    | number
    | undefined;
  /** tradeoff between planning time and query plan quality, default is 5 */
  geqoEffort?:
    | number
    | undefined;
  /** number of individuals in the genetic population, useful values are typically 100 to 1000; default - 0 - choose based on based on geqo_effort */
  geqoPoolSize?:
    | number
    | undefined;
  /** the number of generations used by GEQO, useful values are in the same range as the pool size */
  geqoGenerations?:
    | number
    | undefined;
  /** selective pressure within the population */
  geqoSelectionBias?:
    | number
    | undefined;
  /** initial value of the random number generator used by GEQO */
  geqoSeed?: number | undefined;
  pgTrgmSimilarityThreshold?: number | undefined;
  pgTrgmWordSimilarityThreshold?: number | undefined;
  pgTrgmStrictWordSimilarityThreshold?:
    | number
    | undefined;
  /** in milliseconds. */
  maxStandbyArchiveDelay?:
    | number
    | undefined;
  /** Terminate any session that exceeds the designated timeout, specified in milliseconds. If a timeout is not specified, the default session timeout is set to 12 hours. To disable it, specify a value of 0. */
  sessionDurationTimeout?: number | undefined;
  logReplicationCommands?:
    | boolean
    | undefined;
  /** in milliseconds. The default is 1000 (1 sec). */
  logAutovacuumMinDuration?: number | undefined;
}

export enum PostgresqlConfig161C_BackslashQuote {
  BACKSLASH_QUOTE_UNSPECIFIED = 0,
  BACKSLASH_QUOTE = 1,
  BACKSLASH_QUOTE_ON = 2,
  BACKSLASH_QUOTE_OFF = 3,
  BACKSLASH_QUOTE_SAFE_ENCODING = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_BackslashQuoteFromJSON(object: any): PostgresqlConfig161C_BackslashQuote {
  switch (object) {
    case 0:
    case "BACKSLASH_QUOTE_UNSPECIFIED":
      return PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
    case 1:
    case "BACKSLASH_QUOTE":
      return PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE;
    case 2:
    case "BACKSLASH_QUOTE_ON":
      return PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE_ON;
    case 3:
    case "BACKSLASH_QUOTE_OFF":
      return PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE_OFF;
    case 4:
    case "BACKSLASH_QUOTE_SAFE_ENCODING":
      return PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_BackslashQuote.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_BackslashQuoteToJSON(object: PostgresqlConfig161C_BackslashQuote): string {
  switch (object) {
    case PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
      return "BACKSLASH_QUOTE_UNSPECIFIED";
    case PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE:
      return "BACKSLASH_QUOTE";
    case PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE_ON:
      return "BACKSLASH_QUOTE_ON";
    case PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE_OFF:
      return "BACKSLASH_QUOTE_OFF";
    case PostgresqlConfig161C_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
      return "BACKSLASH_QUOTE_SAFE_ENCODING";
    case PostgresqlConfig161C_BackslashQuote.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_ByteaOutput {
  BYTEA_OUTPUT_UNSPECIFIED = 0,
  BYTEA_OUTPUT_HEX = 1,
  BYTEA_OUTPUT_ESCAPED = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_ByteaOutputFromJSON(object: any): PostgresqlConfig161C_ByteaOutput {
  switch (object) {
    case 0:
    case "BYTEA_OUTPUT_UNSPECIFIED":
      return PostgresqlConfig161C_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
    case 1:
    case "BYTEA_OUTPUT_HEX":
      return PostgresqlConfig161C_ByteaOutput.BYTEA_OUTPUT_HEX;
    case 2:
    case "BYTEA_OUTPUT_ESCAPED":
      return PostgresqlConfig161C_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_ByteaOutput.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_ByteaOutputToJSON(object: PostgresqlConfig161C_ByteaOutput): string {
  switch (object) {
    case PostgresqlConfig161C_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
      return "BYTEA_OUTPUT_UNSPECIFIED";
    case PostgresqlConfig161C_ByteaOutput.BYTEA_OUTPUT_HEX:
      return "BYTEA_OUTPUT_HEX";
    case PostgresqlConfig161C_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
      return "BYTEA_OUTPUT_ESCAPED";
    case PostgresqlConfig161C_ByteaOutput.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_ConstraintExclusion {
  CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
  CONSTRAINT_EXCLUSION_ON = 1,
  CONSTRAINT_EXCLUSION_OFF = 2,
  CONSTRAINT_EXCLUSION_PARTITION = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_ConstraintExclusionFromJSON(
  object: any,
): PostgresqlConfig161C_ConstraintExclusion {
  switch (object) {
    case 0:
    case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
      return PostgresqlConfig161C_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
    case 1:
    case "CONSTRAINT_EXCLUSION_ON":
      return PostgresqlConfig161C_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
    case 2:
    case "CONSTRAINT_EXCLUSION_OFF":
      return PostgresqlConfig161C_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
    case 3:
    case "CONSTRAINT_EXCLUSION_PARTITION":
      return PostgresqlConfig161C_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_ConstraintExclusion.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_ConstraintExclusionToJSON(
  object: PostgresqlConfig161C_ConstraintExclusion,
): string {
  switch (object) {
    case PostgresqlConfig161C_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
      return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    case PostgresqlConfig161C_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
      return "CONSTRAINT_EXCLUSION_ON";
    case PostgresqlConfig161C_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
      return "CONSTRAINT_EXCLUSION_OFF";
    case PostgresqlConfig161C_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
      return "CONSTRAINT_EXCLUSION_PARTITION";
    case PostgresqlConfig161C_ConstraintExclusion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_DebugParallelQuery {
  DEBUG_PARALLEL_QUERY_UNSPECIFIED = 0,
  DEBUG_PARALLEL_QUERY_ON = 1,
  DEBUG_PARALLEL_QUERY_OFF = 2,
  DEBUG_PARALLEL_QUERY_REGRESS = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_DebugParallelQueryFromJSON(object: any): PostgresqlConfig161C_DebugParallelQuery {
  switch (object) {
    case 0:
    case "DEBUG_PARALLEL_QUERY_UNSPECIFIED":
      return PostgresqlConfig161C_DebugParallelQuery.DEBUG_PARALLEL_QUERY_UNSPECIFIED;
    case 1:
    case "DEBUG_PARALLEL_QUERY_ON":
      return PostgresqlConfig161C_DebugParallelQuery.DEBUG_PARALLEL_QUERY_ON;
    case 2:
    case "DEBUG_PARALLEL_QUERY_OFF":
      return PostgresqlConfig161C_DebugParallelQuery.DEBUG_PARALLEL_QUERY_OFF;
    case 3:
    case "DEBUG_PARALLEL_QUERY_REGRESS":
      return PostgresqlConfig161C_DebugParallelQuery.DEBUG_PARALLEL_QUERY_REGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_DebugParallelQuery.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_DebugParallelQueryToJSON(object: PostgresqlConfig161C_DebugParallelQuery): string {
  switch (object) {
    case PostgresqlConfig161C_DebugParallelQuery.DEBUG_PARALLEL_QUERY_UNSPECIFIED:
      return "DEBUG_PARALLEL_QUERY_UNSPECIFIED";
    case PostgresqlConfig161C_DebugParallelQuery.DEBUG_PARALLEL_QUERY_ON:
      return "DEBUG_PARALLEL_QUERY_ON";
    case PostgresqlConfig161C_DebugParallelQuery.DEBUG_PARALLEL_QUERY_OFF:
      return "DEBUG_PARALLEL_QUERY_OFF";
    case PostgresqlConfig161C_DebugParallelQuery.DEBUG_PARALLEL_QUERY_REGRESS:
      return "DEBUG_PARALLEL_QUERY_REGRESS";
    case PostgresqlConfig161C_DebugParallelQuery.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_LogErrorVerbosity {
  LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
  LOG_ERROR_VERBOSITY_TERSE = 1,
  LOG_ERROR_VERBOSITY_DEFAULT = 2,
  LOG_ERROR_VERBOSITY_VERBOSE = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_LogErrorVerbosityFromJSON(object: any): PostgresqlConfig161C_LogErrorVerbosity {
  switch (object) {
    case 0:
    case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
      return PostgresqlConfig161C_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
    case 1:
    case "LOG_ERROR_VERBOSITY_TERSE":
      return PostgresqlConfig161C_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
    case 2:
    case "LOG_ERROR_VERBOSITY_DEFAULT":
      return PostgresqlConfig161C_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
    case 3:
    case "LOG_ERROR_VERBOSITY_VERBOSE":
      return PostgresqlConfig161C_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_LogErrorVerbosity.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_LogErrorVerbosityToJSON(object: PostgresqlConfig161C_LogErrorVerbosity): string {
  switch (object) {
    case PostgresqlConfig161C_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
      return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    case PostgresqlConfig161C_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
      return "LOG_ERROR_VERBOSITY_TERSE";
    case PostgresqlConfig161C_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
      return "LOG_ERROR_VERBOSITY_DEFAULT";
    case PostgresqlConfig161C_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
      return "LOG_ERROR_VERBOSITY_VERBOSE";
    case PostgresqlConfig161C_LogErrorVerbosity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_LogLevel {
  LOG_LEVEL_UNSPECIFIED = 0,
  LOG_LEVEL_DEBUG5 = 1,
  LOG_LEVEL_DEBUG4 = 2,
  LOG_LEVEL_DEBUG3 = 3,
  LOG_LEVEL_DEBUG2 = 4,
  LOG_LEVEL_DEBUG1 = 5,
  LOG_LEVEL_INFO = 12,
  LOG_LEVEL_LOG = 6,
  LOG_LEVEL_NOTICE = 7,
  LOG_LEVEL_WARNING = 8,
  LOG_LEVEL_ERROR = 9,
  LOG_LEVEL_FATAL = 10,
  LOG_LEVEL_PANIC = 11,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_LogLevelFromJSON(object: any): PostgresqlConfig161C_LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "LOG_LEVEL_DEBUG5":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG5;
    case 2:
    case "LOG_LEVEL_DEBUG4":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG4;
    case 3:
    case "LOG_LEVEL_DEBUG3":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG3;
    case 4:
    case "LOG_LEVEL_DEBUG2":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG2;
    case 5:
    case "LOG_LEVEL_DEBUG1":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG1;
    case 12:
    case "LOG_LEVEL_INFO":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_INFO;
    case 6:
    case "LOG_LEVEL_LOG":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_LOG;
    case 7:
    case "LOG_LEVEL_NOTICE":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_NOTICE;
    case 8:
    case "LOG_LEVEL_WARNING":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_WARNING;
    case 9:
    case "LOG_LEVEL_ERROR":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_ERROR;
    case 10:
    case "LOG_LEVEL_FATAL":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_FATAL;
    case 11:
    case "LOG_LEVEL_PANIC":
      return PostgresqlConfig161C_LogLevel.LOG_LEVEL_PANIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_LogLevel.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_LogLevelToJSON(object: PostgresqlConfig161C_LogLevel): string {
  switch (object) {
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG5:
      return "LOG_LEVEL_DEBUG5";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG4:
      return "LOG_LEVEL_DEBUG4";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG3:
      return "LOG_LEVEL_DEBUG3";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG2:
      return "LOG_LEVEL_DEBUG2";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_DEBUG1:
      return "LOG_LEVEL_DEBUG1";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_INFO:
      return "LOG_LEVEL_INFO";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_LOG:
      return "LOG_LEVEL_LOG";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_NOTICE:
      return "LOG_LEVEL_NOTICE";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_WARNING:
      return "LOG_LEVEL_WARNING";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_ERROR:
      return "LOG_LEVEL_ERROR";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_FATAL:
      return "LOG_LEVEL_FATAL";
    case PostgresqlConfig161C_LogLevel.LOG_LEVEL_PANIC:
      return "LOG_LEVEL_PANIC";
    case PostgresqlConfig161C_LogLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_LogStatement {
  LOG_STATEMENT_UNSPECIFIED = 0,
  LOG_STATEMENT_NONE = 1,
  LOG_STATEMENT_DDL = 2,
  LOG_STATEMENT_MOD = 3,
  LOG_STATEMENT_ALL = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_LogStatementFromJSON(object: any): PostgresqlConfig161C_LogStatement {
  switch (object) {
    case 0:
    case "LOG_STATEMENT_UNSPECIFIED":
      return PostgresqlConfig161C_LogStatement.LOG_STATEMENT_UNSPECIFIED;
    case 1:
    case "LOG_STATEMENT_NONE":
      return PostgresqlConfig161C_LogStatement.LOG_STATEMENT_NONE;
    case 2:
    case "LOG_STATEMENT_DDL":
      return PostgresqlConfig161C_LogStatement.LOG_STATEMENT_DDL;
    case 3:
    case "LOG_STATEMENT_MOD":
      return PostgresqlConfig161C_LogStatement.LOG_STATEMENT_MOD;
    case 4:
    case "LOG_STATEMENT_ALL":
      return PostgresqlConfig161C_LogStatement.LOG_STATEMENT_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_LogStatement.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_LogStatementToJSON(object: PostgresqlConfig161C_LogStatement): string {
  switch (object) {
    case PostgresqlConfig161C_LogStatement.LOG_STATEMENT_UNSPECIFIED:
      return "LOG_STATEMENT_UNSPECIFIED";
    case PostgresqlConfig161C_LogStatement.LOG_STATEMENT_NONE:
      return "LOG_STATEMENT_NONE";
    case PostgresqlConfig161C_LogStatement.LOG_STATEMENT_DDL:
      return "LOG_STATEMENT_DDL";
    case PostgresqlConfig161C_LogStatement.LOG_STATEMENT_MOD:
      return "LOG_STATEMENT_MOD";
    case PostgresqlConfig161C_LogStatement.LOG_STATEMENT_ALL:
      return "LOG_STATEMENT_ALL";
    case PostgresqlConfig161C_LogStatement.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_PgHintPlanDebugPrint {
  PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED = 0,
  PG_HINT_PLAN_DEBUG_PRINT_OFF = 1,
  PG_HINT_PLAN_DEBUG_PRINT_ON = 2,
  PG_HINT_PLAN_DEBUG_PRINT_DETAILED = 3,
  PG_HINT_PLAN_DEBUG_PRINT_VERBOSE = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_PgHintPlanDebugPrintFromJSON(
  object: any,
): PostgresqlConfig161C_PgHintPlanDebugPrint {
  switch (object) {
    case 0:
    case "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED":
      return PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED;
    case 1:
    case "PG_HINT_PLAN_DEBUG_PRINT_OFF":
      return PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF;
    case 2:
    case "PG_HINT_PLAN_DEBUG_PRINT_ON":
      return PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON;
    case 3:
    case "PG_HINT_PLAN_DEBUG_PRINT_DETAILED":
      return PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED;
    case 4:
    case "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE":
      return PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_PgHintPlanDebugPrint.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_PgHintPlanDebugPrintToJSON(
  object: PostgresqlConfig161C_PgHintPlanDebugPrint,
): string {
  switch (object) {
    case PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED:
      return "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED";
    case PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF:
      return "PG_HINT_PLAN_DEBUG_PRINT_OFF";
    case PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON:
      return "PG_HINT_PLAN_DEBUG_PRINT_ON";
    case PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED:
      return "PG_HINT_PLAN_DEBUG_PRINT_DETAILED";
    case PostgresqlConfig161C_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE:
      return "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE";
    case PostgresqlConfig161C_PgHintPlanDebugPrint.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_PlanCacheMode {
  PLAN_CACHE_MODE_UNSPECIFIED = 0,
  PLAN_CACHE_MODE_AUTO = 1,
  PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN = 2,
  PLAN_CACHE_MODE_FORCE_GENERIC_PLAN = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_PlanCacheModeFromJSON(object: any): PostgresqlConfig161C_PlanCacheMode {
  switch (object) {
    case 0:
    case "PLAN_CACHE_MODE_UNSPECIFIED":
      return PostgresqlConfig161C_PlanCacheMode.PLAN_CACHE_MODE_UNSPECIFIED;
    case 1:
    case "PLAN_CACHE_MODE_AUTO":
      return PostgresqlConfig161C_PlanCacheMode.PLAN_CACHE_MODE_AUTO;
    case 2:
    case "PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN":
      return PostgresqlConfig161C_PlanCacheMode.PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN;
    case 3:
    case "PLAN_CACHE_MODE_FORCE_GENERIC_PLAN":
      return PostgresqlConfig161C_PlanCacheMode.PLAN_CACHE_MODE_FORCE_GENERIC_PLAN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_PlanCacheMode.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_PlanCacheModeToJSON(object: PostgresqlConfig161C_PlanCacheMode): string {
  switch (object) {
    case PostgresqlConfig161C_PlanCacheMode.PLAN_CACHE_MODE_UNSPECIFIED:
      return "PLAN_CACHE_MODE_UNSPECIFIED";
    case PostgresqlConfig161C_PlanCacheMode.PLAN_CACHE_MODE_AUTO:
      return "PLAN_CACHE_MODE_AUTO";
    case PostgresqlConfig161C_PlanCacheMode.PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN:
      return "PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN";
    case PostgresqlConfig161C_PlanCacheMode.PLAN_CACHE_MODE_FORCE_GENERIC_PLAN:
      return "PLAN_CACHE_MODE_FORCE_GENERIC_PLAN";
    case PostgresqlConfig161C_PlanCacheMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_SharedPreloadLibraries {
  SHARED_PRELOAD_LIBRARIES_UNSPECIFIED = 0,
  SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN = 1,
  SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN = 2,
  SHARED_PRELOAD_LIBRARIES_TIMESCALEDB = 3,
  SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS = 4,
  SHARED_PRELOAD_LIBRARIES_PG_CRON = 5,
  SHARED_PRELOAD_LIBRARIES_PGLOGICAL = 6,
  SHARED_PRELOAD_LIBRARIES_PG_PREWARM = 7,
  SHARED_PRELOAD_LIBRARIES_PGAUDIT = 8,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_SharedPreloadLibrariesFromJSON(
  object: any,
): PostgresqlConfig161C_SharedPreloadLibraries {
  switch (object) {
    case 0:
    case "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED":
      return PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED;
    case 1:
    case "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN":
      return PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN;
    case 2:
    case "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN":
      return PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN;
    case 3:
    case "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB":
      return PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB;
    case 4:
    case "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS":
      return PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS;
    case 5:
    case "SHARED_PRELOAD_LIBRARIES_PG_CRON":
      return PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON;
    case 6:
    case "SHARED_PRELOAD_LIBRARIES_PGLOGICAL":
      return PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL;
    case 7:
    case "SHARED_PRELOAD_LIBRARIES_PG_PREWARM":
      return PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM;
    case 8:
    case "SHARED_PRELOAD_LIBRARIES_PGAUDIT":
      return PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_SharedPreloadLibraries.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_SharedPreloadLibrariesToJSON(
  object: PostgresqlConfig161C_SharedPreloadLibraries,
): string {
  switch (object) {
    case PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED:
      return "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED";
    case PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN:
      return "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN";
    case PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN:
      return "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN";
    case PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB:
      return "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB";
    case PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS:
      return "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS";
    case PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON:
      return "SHARED_PRELOAD_LIBRARIES_PG_CRON";
    case PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL:
      return "SHARED_PRELOAD_LIBRARIES_PGLOGICAL";
    case PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM:
      return "SHARED_PRELOAD_LIBRARIES_PG_PREWARM";
    case PostgresqlConfig161C_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT:
      return "SHARED_PRELOAD_LIBRARIES_PGAUDIT";
    case PostgresqlConfig161C_SharedPreloadLibraries.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_SynchronousCommit {
  SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
  SYNCHRONOUS_COMMIT_ON = 1,
  SYNCHRONOUS_COMMIT_OFF = 2,
  SYNCHRONOUS_COMMIT_LOCAL = 3,
  SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
  SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_SynchronousCommitFromJSON(object: any): PostgresqlConfig161C_SynchronousCommit {
  switch (object) {
    case 0:
    case "SYNCHRONOUS_COMMIT_UNSPECIFIED":
      return PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
    case 1:
    case "SYNCHRONOUS_COMMIT_ON":
      return PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
    case 2:
    case "SYNCHRONOUS_COMMIT_OFF":
      return PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
    case 3:
    case "SYNCHRONOUS_COMMIT_LOCAL":
      return PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
    case 4:
    case "SYNCHRONOUS_COMMIT_REMOTE_WRITE":
      return PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
    case 5:
    case "SYNCHRONOUS_COMMIT_REMOTE_APPLY":
      return PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_SynchronousCommit.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_SynchronousCommitToJSON(object: PostgresqlConfig161C_SynchronousCommit): string {
  switch (object) {
    case PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
      return "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    case PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
      return "SYNCHRONOUS_COMMIT_ON";
    case PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
      return "SYNCHRONOUS_COMMIT_OFF";
    case PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
      return "SYNCHRONOUS_COMMIT_LOCAL";
    case PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
      return "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    case PostgresqlConfig161C_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
      return "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    case PostgresqlConfig161C_SynchronousCommit.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_TransactionIsolation {
  TRANSACTION_ISOLATION_UNSPECIFIED = 0,
  TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
  TRANSACTION_ISOLATION_READ_COMMITTED = 2,
  TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
  TRANSACTION_ISOLATION_SERIALIZABLE = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_TransactionIsolationFromJSON(
  object: any,
): PostgresqlConfig161C_TransactionIsolation {
  switch (object) {
    case 0:
    case "TRANSACTION_ISOLATION_UNSPECIFIED":
      return PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
    case 1:
    case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
      return PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
    case 2:
    case "TRANSACTION_ISOLATION_READ_COMMITTED":
      return PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
    case 3:
    case "TRANSACTION_ISOLATION_REPEATABLE_READ":
      return PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
    case 4:
    case "TRANSACTION_ISOLATION_SERIALIZABLE":
      return PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_TransactionIsolation.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_TransactionIsolationToJSON(
  object: PostgresqlConfig161C_TransactionIsolation,
): string {
  switch (object) {
    case PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
      return "TRANSACTION_ISOLATION_UNSPECIFIED";
    case PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
      return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    case PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
      return "TRANSACTION_ISOLATION_READ_COMMITTED";
    case PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
      return "TRANSACTION_ISOLATION_REPEATABLE_READ";
    case PostgresqlConfig161C_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
      return "TRANSACTION_ISOLATION_SERIALIZABLE";
    case PostgresqlConfig161C_TransactionIsolation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_WalLevel {
  WAL_LEVEL_UNSPECIFIED = 0,
  WAL_LEVEL_REPLICA = 1,
  WAL_LEVEL_LOGICAL = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_WalLevelFromJSON(object: any): PostgresqlConfig161C_WalLevel {
  switch (object) {
    case 0:
    case "WAL_LEVEL_UNSPECIFIED":
      return PostgresqlConfig161C_WalLevel.WAL_LEVEL_UNSPECIFIED;
    case 1:
    case "WAL_LEVEL_REPLICA":
      return PostgresqlConfig161C_WalLevel.WAL_LEVEL_REPLICA;
    case 2:
    case "WAL_LEVEL_LOGICAL":
      return PostgresqlConfig161C_WalLevel.WAL_LEVEL_LOGICAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_WalLevel.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_WalLevelToJSON(object: PostgresqlConfig161C_WalLevel): string {
  switch (object) {
    case PostgresqlConfig161C_WalLevel.WAL_LEVEL_UNSPECIFIED:
      return "WAL_LEVEL_UNSPECIFIED";
    case PostgresqlConfig161C_WalLevel.WAL_LEVEL_REPLICA:
      return "WAL_LEVEL_REPLICA";
    case PostgresqlConfig161C_WalLevel.WAL_LEVEL_LOGICAL:
      return "WAL_LEVEL_LOGICAL";
    case PostgresqlConfig161C_WalLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_XmlBinary {
  XML_BINARY_UNSPECIFIED = 0,
  XML_BINARY_BASE64 = 1,
  XML_BINARY_HEX = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_XmlBinaryFromJSON(object: any): PostgresqlConfig161C_XmlBinary {
  switch (object) {
    case 0:
    case "XML_BINARY_UNSPECIFIED":
      return PostgresqlConfig161C_XmlBinary.XML_BINARY_UNSPECIFIED;
    case 1:
    case "XML_BINARY_BASE64":
      return PostgresqlConfig161C_XmlBinary.XML_BINARY_BASE64;
    case 2:
    case "XML_BINARY_HEX":
      return PostgresqlConfig161C_XmlBinary.XML_BINARY_HEX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_XmlBinary.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_XmlBinaryToJSON(object: PostgresqlConfig161C_XmlBinary): string {
  switch (object) {
    case PostgresqlConfig161C_XmlBinary.XML_BINARY_UNSPECIFIED:
      return "XML_BINARY_UNSPECIFIED";
    case PostgresqlConfig161C_XmlBinary.XML_BINARY_BASE64:
      return "XML_BINARY_BASE64";
    case PostgresqlConfig161C_XmlBinary.XML_BINARY_HEX:
      return "XML_BINARY_HEX";
    case PostgresqlConfig161C_XmlBinary.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig161C_XmlOption {
  XML_OPTION_UNSPECIFIED = 0,
  XML_OPTION_DOCUMENT = 1,
  XML_OPTION_CONTENT = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig161C_XmlOptionFromJSON(object: any): PostgresqlConfig161C_XmlOption {
  switch (object) {
    case 0:
    case "XML_OPTION_UNSPECIFIED":
      return PostgresqlConfig161C_XmlOption.XML_OPTION_UNSPECIFIED;
    case 1:
    case "XML_OPTION_DOCUMENT":
      return PostgresqlConfig161C_XmlOption.XML_OPTION_DOCUMENT;
    case 2:
    case "XML_OPTION_CONTENT":
      return PostgresqlConfig161C_XmlOption.XML_OPTION_CONTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig161C_XmlOption.UNRECOGNIZED;
  }
}

export function postgresqlConfig161C_XmlOptionToJSON(object: PostgresqlConfig161C_XmlOption): string {
  switch (object) {
    case PostgresqlConfig161C_XmlOption.XML_OPTION_UNSPECIFIED:
      return "XML_OPTION_UNSPECIFIED";
    case PostgresqlConfig161C_XmlOption.XML_OPTION_DOCUMENT:
      return "XML_OPTION_DOCUMENT";
    case PostgresqlConfig161C_XmlOption.XML_OPTION_CONTENT:
      return "XML_OPTION_CONTENT";
    case PostgresqlConfig161C_XmlOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PostgresqlConfigSet161C {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet16_1C";
  /**
   * Effective settings for a PostgreSQL 16 1C cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | PostgresqlConfig161C
    | undefined;
  /** User-defined settings for a PostgreSQL 16 1C cluster. */
  userConfig?:
    | PostgresqlConfig161C
    | undefined;
  /** Default configuration for a PostgreSQL 16 1C cluster. */
  defaultConfig?: PostgresqlConfig161C | undefined;
}

function createBasePostgresqlConfig161C(): PostgresqlConfig161C {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig16_1C",
    maxConnections: undefined,
    sharedBuffers: undefined,
    tempBuffers: undefined,
    maxPreparedTransactions: undefined,
    workMem: undefined,
    maintenanceWorkMem: undefined,
    autovacuumWorkMem: undefined,
    tempFileLimit: undefined,
    vacuumCostDelay: undefined,
    vacuumCostPageHit: undefined,
    vacuumCostPageMiss: undefined,
    vacuumCostPageDirty: undefined,
    vacuumCostLimit: undefined,
    bgwriterDelay: undefined,
    bgwriterLruMaxpages: undefined,
    bgwriterLruMultiplier: undefined,
    bgwriterFlushAfter: undefined,
    backendFlushAfter: undefined,
    oldSnapshotThreshold: undefined,
    walLevel: 0,
    synchronousCommit: 0,
    checkpointTimeout: undefined,
    checkpointCompletionTarget: undefined,
    checkpointFlushAfter: undefined,
    maxWalSize: undefined,
    minWalSize: undefined,
    maxStandbyStreamingDelay: undefined,
    defaultStatisticsTarget: undefined,
    constraintExclusion: 0,
    cursorTupleFraction: undefined,
    fromCollapseLimit: undefined,
    joinCollapseLimit: undefined,
    debugParallelQuery: 0,
    clientMinMessages: 0,
    logMinMessages: 0,
    logMinErrorStatement: 0,
    logMinDurationStatement: undefined,
    logCheckpoints: undefined,
    logConnections: undefined,
    logDisconnections: undefined,
    logDuration: undefined,
    logErrorVerbosity: 0,
    logLockWaits: undefined,
    logStatement: 0,
    logTempFiles: undefined,
    searchPath: "",
    rowSecurity: undefined,
    defaultTransactionIsolation: 0,
    statementTimeout: undefined,
    lockTimeout: undefined,
    idleInTransactionSessionTimeout: undefined,
    byteaOutput: 0,
    xmlbinary: 0,
    xmloption: 0,
    ginPendingListLimit: undefined,
    deadlockTimeout: undefined,
    maxLocksPerTransaction: undefined,
    maxPredLocksPerTransaction: undefined,
    arrayNulls: undefined,
    backslashQuote: 0,
    defaultWithOids: undefined,
    escapeStringWarning: undefined,
    loCompatPrivileges: undefined,
    quoteAllIdentifiers: undefined,
    standardConformingStrings: undefined,
    synchronizeSeqscans: undefined,
    transformNullEquals: undefined,
    exitOnError: undefined,
    seqPageCost: undefined,
    randomPageCost: undefined,
    autovacuumMaxWorkers: undefined,
    autovacuumVacuumCostDelay: undefined,
    autovacuumVacuumCostLimit: undefined,
    autovacuumNaptime: undefined,
    archiveTimeout: undefined,
    trackActivityQuerySize: undefined,
    onlineAnalyzeEnable: undefined,
    enableBitmapscan: undefined,
    enableHashagg: undefined,
    enableHashjoin: undefined,
    enableIndexscan: undefined,
    enableIndexonlyscan: undefined,
    enableMaterial: undefined,
    enableMergejoin: undefined,
    enableNestloop: undefined,
    enableSeqscan: undefined,
    enableSort: undefined,
    enableTidscan: undefined,
    maxWorkerProcesses: undefined,
    maxParallelWorkers: undefined,
    maxParallelWorkersPerGather: undefined,
    autovacuumVacuumScaleFactor: undefined,
    autovacuumAnalyzeScaleFactor: undefined,
    defaultTransactionReadOnly: undefined,
    timezone: "",
    enableParallelAppend: undefined,
    enableParallelHash: undefined,
    enablePartitionPruning: undefined,
    enablePartitionwiseAggregate: undefined,
    enablePartitionwiseJoin: undefined,
    jit: undefined,
    maxParallelMaintenanceWorkers: undefined,
    parallelLeaderParticipation: undefined,
    logTransactionSampleRate: undefined,
    planCacheMode: 0,
    effectiveIoConcurrency: undefined,
    effectiveCacheSize: undefined,
    sharedPreloadLibraries: [],
    autoExplainLogMinDuration: undefined,
    autoExplainLogAnalyze: undefined,
    autoExplainLogBuffers: undefined,
    autoExplainLogTiming: undefined,
    autoExplainLogTriggers: undefined,
    autoExplainLogVerbose: undefined,
    autoExplainLogNestedStatements: undefined,
    autoExplainSampleRate: undefined,
    pgHintPlanEnableHint: undefined,
    pgHintPlanEnableHintTable: undefined,
    pgHintPlanDebugPrint: 0,
    pgHintPlanMessageLevel: 0,
    hashMemMultiplier: undefined,
    logicalDecodingWorkMem: undefined,
    maintenanceIoConcurrency: undefined,
    maxSlotWalKeepSize: undefined,
    walKeepSize: undefined,
    enableIncrementalSort: undefined,
    autovacuumVacuumInsertThreshold: undefined,
    autovacuumVacuumInsertScaleFactor: undefined,
    logMinDurationSample: undefined,
    logStatementSampleRate: undefined,
    logParameterMaxLength: undefined,
    logParameterMaxLengthOnError: undefined,
    clientConnectionCheckInterval: undefined,
    enableAsyncAppend: undefined,
    enableGathermerge: undefined,
    enableMemoize: undefined,
    logRecoveryConflictWaits: undefined,
    vacuumFailsafeAge: undefined,
    vacuumMultixactFailsafeAge: undefined,
    pgQualstatsEnabled: undefined,
    pgQualstatsTrackConstants: undefined,
    pgQualstatsMax: undefined,
    pgQualstatsResolveOids: undefined,
    pgQualstatsSampleRate: undefined,
    plantunerFixEmptyTable: undefined,
    maxStackDepth: undefined,
    enableGroupByReordering: undefined,
    geqo: undefined,
    geqoThreshold: undefined,
    geqoEffort: undefined,
    geqoPoolSize: undefined,
    geqoGenerations: undefined,
    geqoSelectionBias: undefined,
    geqoSeed: undefined,
    pgTrgmSimilarityThreshold: undefined,
    pgTrgmWordSimilarityThreshold: undefined,
    pgTrgmStrictWordSimilarityThreshold: undefined,
    maxStandbyArchiveDelay: undefined,
    sessionDurationTimeout: undefined,
    logReplicationCommands: undefined,
    logAutovacuumMinDuration: undefined,
  };
}

export const PostgresqlConfig161C = {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig16_1C" as const,

  encode(message: PostgresqlConfig161C, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.sharedBuffers !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.sharedBuffers! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.tempBuffers !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tempBuffers! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPreparedTransactions! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.workMem !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.workMem! }, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.maintenanceWorkMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maintenanceWorkMem! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.autovacuumWorkMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumWorkMem! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.tempFileLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tempFileLimit! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.vacuumCostDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostDelay! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.vacuumCostPageHit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostPageHit! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.vacuumCostPageMiss !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostPageMiss! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.vacuumCostPageDirty !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostPageDirty! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.vacuumCostLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostLimit! },
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.bgwriterDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.bgwriterDelay! },
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.bgwriterLruMaxpages !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.bgwriterLruMaxpages! },
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.bgwriterLruMultiplier !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.bgwriterLruMultiplier! },
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.bgwriterFlushAfter !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.bgwriterFlushAfter! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.backendFlushAfter !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backendFlushAfter! },
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.oldSnapshotThreshold !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.oldSnapshotThreshold! },
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.walLevel !== 0) {
      writer.uint32(160).int32(message.walLevel);
    }
    if (message.synchronousCommit !== 0) {
      writer.uint32(168).int32(message.synchronousCommit);
    }
    if (message.checkpointTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.checkpointTimeout! },
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.checkpointCompletionTarget !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.checkpointCompletionTarget! },
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.checkpointFlushAfter !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.checkpointFlushAfter! },
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.maxWalSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxWalSize! }, writer.uint32(202).fork())
        .ldelim();
    }
    if (message.minWalSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.minWalSize! }, writer.uint32(210).fork())
        .ldelim();
    }
    if (message.maxStandbyStreamingDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStandbyStreamingDelay! },
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.defaultStatisticsTarget !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.defaultStatisticsTarget! },
        writer.uint32(226).fork(),
      ).ldelim();
    }
    if (message.constraintExclusion !== 0) {
      writer.uint32(232).int32(message.constraintExclusion);
    }
    if (message.cursorTupleFraction !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.cursorTupleFraction! },
        writer.uint32(242).fork(),
      ).ldelim();
    }
    if (message.fromCollapseLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fromCollapseLimit! },
        writer.uint32(250).fork(),
      ).ldelim();
    }
    if (message.joinCollapseLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.joinCollapseLimit! },
        writer.uint32(258).fork(),
      ).ldelim();
    }
    if (message.debugParallelQuery !== 0) {
      writer.uint32(264).int32(message.debugParallelQuery);
    }
    if (message.clientMinMessages !== 0) {
      writer.uint32(272).int32(message.clientMinMessages);
    }
    if (message.logMinMessages !== 0) {
      writer.uint32(280).int32(message.logMinMessages);
    }
    if (message.logMinErrorStatement !== 0) {
      writer.uint32(288).int32(message.logMinErrorStatement);
    }
    if (message.logMinDurationStatement !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logMinDurationStatement! },
        writer.uint32(298).fork(),
      ).ldelim();
    }
    if (message.logCheckpoints !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logCheckpoints! },
        writer.uint32(306).fork(),
      ).ldelim();
    }
    if (message.logConnections !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logConnections! },
        writer.uint32(314).fork(),
      ).ldelim();
    }
    if (message.logDisconnections !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logDisconnections! },
        writer.uint32(322).fork(),
      ).ldelim();
    }
    if (message.logDuration !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logDuration! }, writer.uint32(330).fork())
        .ldelim();
    }
    if (message.logErrorVerbosity !== 0) {
      writer.uint32(336).int32(message.logErrorVerbosity);
    }
    if (message.logLockWaits !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logLockWaits! }, writer.uint32(346).fork())
        .ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(352).int32(message.logStatement);
    }
    if (message.logTempFiles !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logTempFiles! },
        writer.uint32(362).fork(),
      ).ldelim();
    }
    if (message.searchPath !== "") {
      writer.uint32(370).string(message.searchPath);
    }
    if (message.rowSecurity !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.rowSecurity! }, writer.uint32(378).fork())
        .ldelim();
    }
    if (message.defaultTransactionIsolation !== 0) {
      writer.uint32(384).int32(message.defaultTransactionIsolation);
    }
    if (message.statementTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.statementTimeout! },
        writer.uint32(394).fork(),
      ).ldelim();
    }
    if (message.lockTimeout !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.lockTimeout! }, writer.uint32(402).fork())
        .ldelim();
    }
    if (message.idleInTransactionSessionTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.idleInTransactionSessionTimeout! },
        writer.uint32(410).fork(),
      ).ldelim();
    }
    if (message.byteaOutput !== 0) {
      writer.uint32(416).int32(message.byteaOutput);
    }
    if (message.xmlbinary !== 0) {
      writer.uint32(424).int32(message.xmlbinary);
    }
    if (message.xmloption !== 0) {
      writer.uint32(432).int32(message.xmloption);
    }
    if (message.ginPendingListLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.ginPendingListLimit! },
        writer.uint32(442).fork(),
      ).ldelim();
    }
    if (message.deadlockTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.deadlockTimeout! },
        writer.uint32(450).fork(),
      ).ldelim();
    }
    if (message.maxLocksPerTransaction !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxLocksPerTransaction! },
        writer.uint32(458).fork(),
      ).ldelim();
    }
    if (message.maxPredLocksPerTransaction !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPredLocksPerTransaction! },
        writer.uint32(466).fork(),
      ).ldelim();
    }
    if (message.arrayNulls !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.arrayNulls! }, writer.uint32(474).fork())
        .ldelim();
    }
    if (message.backslashQuote !== 0) {
      writer.uint32(480).int32(message.backslashQuote);
    }
    if (message.defaultWithOids !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.defaultWithOids! },
        writer.uint32(490).fork(),
      ).ldelim();
    }
    if (message.escapeStringWarning !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.escapeStringWarning! },
        writer.uint32(498).fork(),
      ).ldelim();
    }
    if (message.loCompatPrivileges !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.loCompatPrivileges! },
        writer.uint32(506).fork(),
      ).ldelim();
    }
    if (message.quoteAllIdentifiers !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.quoteAllIdentifiers! },
        writer.uint32(522).fork(),
      ).ldelim();
    }
    if (message.standardConformingStrings !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.standardConformingStrings! },
        writer.uint32(530).fork(),
      ).ldelim();
    }
    if (message.synchronizeSeqscans !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.synchronizeSeqscans! },
        writer.uint32(538).fork(),
      ).ldelim();
    }
    if (message.transformNullEquals !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.transformNullEquals! },
        writer.uint32(546).fork(),
      ).ldelim();
    }
    if (message.exitOnError !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.exitOnError! }, writer.uint32(554).fork())
        .ldelim();
    }
    if (message.seqPageCost !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.seqPageCost! },
        writer.uint32(562).fork(),
      ).ldelim();
    }
    if (message.randomPageCost !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.randomPageCost! },
        writer.uint32(570).fork(),
      ).ldelim();
    }
    if (message.autovacuumMaxWorkers !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumMaxWorkers! },
        writer.uint32(578).fork(),
      ).ldelim();
    }
    if (message.autovacuumVacuumCostDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumVacuumCostDelay! },
        writer.uint32(586).fork(),
      ).ldelim();
    }
    if (message.autovacuumVacuumCostLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumVacuumCostLimit! },
        writer.uint32(594).fork(),
      ).ldelim();
    }
    if (message.autovacuumNaptime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumNaptime! },
        writer.uint32(602).fork(),
      ).ldelim();
    }
    if (message.archiveTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.archiveTimeout! },
        writer.uint32(610).fork(),
      ).ldelim();
    }
    if (message.trackActivityQuerySize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.trackActivityQuerySize! },
        writer.uint32(618).fork(),
      ).ldelim();
    }
    if (message.onlineAnalyzeEnable !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.onlineAnalyzeEnable! },
        writer.uint32(634).fork(),
      ).ldelim();
    }
    if (message.enableBitmapscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableBitmapscan! },
        writer.uint32(642).fork(),
      ).ldelim();
    }
    if (message.enableHashagg !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableHashagg! }, writer.uint32(650).fork())
        .ldelim();
    }
    if (message.enableHashjoin !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableHashjoin! },
        writer.uint32(658).fork(),
      ).ldelim();
    }
    if (message.enableIndexscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableIndexscan! },
        writer.uint32(666).fork(),
      ).ldelim();
    }
    if (message.enableIndexonlyscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableIndexonlyscan! },
        writer.uint32(674).fork(),
      ).ldelim();
    }
    if (message.enableMaterial !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableMaterial! },
        writer.uint32(682).fork(),
      ).ldelim();
    }
    if (message.enableMergejoin !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableMergejoin! },
        writer.uint32(690).fork(),
      ).ldelim();
    }
    if (message.enableNestloop !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableNestloop! },
        writer.uint32(698).fork(),
      ).ldelim();
    }
    if (message.enableSeqscan !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableSeqscan! }, writer.uint32(706).fork())
        .ldelim();
    }
    if (message.enableSort !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableSort! }, writer.uint32(714).fork())
        .ldelim();
    }
    if (message.enableTidscan !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableTidscan! }, writer.uint32(722).fork())
        .ldelim();
    }
    if (message.maxWorkerProcesses !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxWorkerProcesses! },
        writer.uint32(730).fork(),
      ).ldelim();
    }
    if (message.maxParallelWorkers !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxParallelWorkers! },
        writer.uint32(738).fork(),
      ).ldelim();
    }
    if (message.maxParallelWorkersPerGather !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxParallelWorkersPerGather! },
        writer.uint32(746).fork(),
      ).ldelim();
    }
    if (message.autovacuumVacuumScaleFactor !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.autovacuumVacuumScaleFactor! },
        writer.uint32(754).fork(),
      ).ldelim();
    }
    if (message.autovacuumAnalyzeScaleFactor !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.autovacuumAnalyzeScaleFactor! },
        writer.uint32(762).fork(),
      ).ldelim();
    }
    if (message.defaultTransactionReadOnly !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.defaultTransactionReadOnly! },
        writer.uint32(770).fork(),
      ).ldelim();
    }
    if (message.timezone !== "") {
      writer.uint32(778).string(message.timezone);
    }
    if (message.enableParallelAppend !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableParallelAppend! },
        writer.uint32(786).fork(),
      ).ldelim();
    }
    if (message.enableParallelHash !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableParallelHash! },
        writer.uint32(794).fork(),
      ).ldelim();
    }
    if (message.enablePartitionPruning !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enablePartitionPruning! },
        writer.uint32(802).fork(),
      ).ldelim();
    }
    if (message.enablePartitionwiseAggregate !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enablePartitionwiseAggregate! },
        writer.uint32(810).fork(),
      ).ldelim();
    }
    if (message.enablePartitionwiseJoin !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enablePartitionwiseJoin! },
        writer.uint32(818).fork(),
      ).ldelim();
    }
    if (message.jit !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.jit! }, writer.uint32(826).fork()).ldelim();
    }
    if (message.maxParallelMaintenanceWorkers !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxParallelMaintenanceWorkers! },
        writer.uint32(834).fork(),
      ).ldelim();
    }
    if (message.parallelLeaderParticipation !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.parallelLeaderParticipation! },
        writer.uint32(842).fork(),
      ).ldelim();
    }
    if (message.logTransactionSampleRate !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.logTransactionSampleRate! },
        writer.uint32(858).fork(),
      ).ldelim();
    }
    if (message.planCacheMode !== 0) {
      writer.uint32(864).int32(message.planCacheMode);
    }
    if (message.effectiveIoConcurrency !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.effectiveIoConcurrency! },
        writer.uint32(874).fork(),
      ).ldelim();
    }
    if (message.effectiveCacheSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.effectiveCacheSize! },
        writer.uint32(882).fork(),
      ).ldelim();
    }
    writer.uint32(890).fork();
    for (const v of message.sharedPreloadLibraries) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.autoExplainLogMinDuration !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autoExplainLogMinDuration! },
        writer.uint32(898).fork(),
      ).ldelim();
    }
    if (message.autoExplainLogAnalyze !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autoExplainLogAnalyze! },
        writer.uint32(906).fork(),
      ).ldelim();
    }
    if (message.autoExplainLogBuffers !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autoExplainLogBuffers! },
        writer.uint32(914).fork(),
      ).ldelim();
    }
    if (message.autoExplainLogTiming !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autoExplainLogTiming! },
        writer.uint32(922).fork(),
      ).ldelim();
    }
    if (message.autoExplainLogTriggers !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autoExplainLogTriggers! },
        writer.uint32(930).fork(),
      ).ldelim();
    }
    if (message.autoExplainLogVerbose !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autoExplainLogVerbose! },
        writer.uint32(938).fork(),
      ).ldelim();
    }
    if (message.autoExplainLogNestedStatements !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autoExplainLogNestedStatements! },
        writer.uint32(946).fork(),
      ).ldelim();
    }
    if (message.autoExplainSampleRate !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.autoExplainSampleRate! },
        writer.uint32(954).fork(),
      ).ldelim();
    }
    if (message.pgHintPlanEnableHint !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.pgHintPlanEnableHint! },
        writer.uint32(962).fork(),
      ).ldelim();
    }
    if (message.pgHintPlanEnableHintTable !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.pgHintPlanEnableHintTable! },
        writer.uint32(970).fork(),
      ).ldelim();
    }
    if (message.pgHintPlanDebugPrint !== 0) {
      writer.uint32(976).int32(message.pgHintPlanDebugPrint);
    }
    if (message.pgHintPlanMessageLevel !== 0) {
      writer.uint32(984).int32(message.pgHintPlanMessageLevel);
    }
    if (message.hashMemMultiplier !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.hashMemMultiplier! },
        writer.uint32(994).fork(),
      ).ldelim();
    }
    if (message.logicalDecodingWorkMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logicalDecodingWorkMem! },
        writer.uint32(1010).fork(),
      ).ldelim();
    }
    if (message.maintenanceIoConcurrency !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maintenanceIoConcurrency! },
        writer.uint32(1018).fork(),
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxSlotWalKeepSize! },
        writer.uint32(1026).fork(),
      ).ldelim();
    }
    if (message.walKeepSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.walKeepSize! },
        writer.uint32(1034).fork(),
      ).ldelim();
    }
    if (message.enableIncrementalSort !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableIncrementalSort! },
        writer.uint32(1042).fork(),
      ).ldelim();
    }
    if (message.autovacuumVacuumInsertThreshold !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumVacuumInsertThreshold! },
        writer.uint32(1050).fork(),
      ).ldelim();
    }
    if (message.autovacuumVacuumInsertScaleFactor !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.autovacuumVacuumInsertScaleFactor! },
        writer.uint32(1058).fork(),
      ).ldelim();
    }
    if (message.logMinDurationSample !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logMinDurationSample! },
        writer.uint32(1066).fork(),
      ).ldelim();
    }
    if (message.logStatementSampleRate !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.logStatementSampleRate! },
        writer.uint32(1074).fork(),
      ).ldelim();
    }
    if (message.logParameterMaxLength !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logParameterMaxLength! },
        writer.uint32(1082).fork(),
      ).ldelim();
    }
    if (message.logParameterMaxLengthOnError !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logParameterMaxLengthOnError! },
        writer.uint32(1090).fork(),
      ).ldelim();
    }
    if (message.clientConnectionCheckInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.clientConnectionCheckInterval! },
        writer.uint32(1098).fork(),
      ).ldelim();
    }
    if (message.enableAsyncAppend !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableAsyncAppend! },
        writer.uint32(1106).fork(),
      ).ldelim();
    }
    if (message.enableGathermerge !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableGathermerge! },
        writer.uint32(1114).fork(),
      ).ldelim();
    }
    if (message.enableMemoize !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableMemoize! },
        writer.uint32(1122).fork(),
      ).ldelim();
    }
    if (message.logRecoveryConflictWaits !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logRecoveryConflictWaits! },
        writer.uint32(1130).fork(),
      ).ldelim();
    }
    if (message.vacuumFailsafeAge !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumFailsafeAge! },
        writer.uint32(1138).fork(),
      ).ldelim();
    }
    if (message.vacuumMultixactFailsafeAge !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumMultixactFailsafeAge! },
        writer.uint32(1146).fork(),
      ).ldelim();
    }
    if (message.pgQualstatsEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.pgQualstatsEnabled! },
        writer.uint32(1154).fork(),
      ).ldelim();
    }
    if (message.pgQualstatsTrackConstants !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.pgQualstatsTrackConstants! },
        writer.uint32(1162).fork(),
      ).ldelim();
    }
    if (message.pgQualstatsMax !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.pgQualstatsMax! },
        writer.uint32(1170).fork(),
      ).ldelim();
    }
    if (message.pgQualstatsResolveOids !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.pgQualstatsResolveOids! },
        writer.uint32(1178).fork(),
      ).ldelim();
    }
    if (message.pgQualstatsSampleRate !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.pgQualstatsSampleRate! },
        writer.uint32(1186).fork(),
      ).ldelim();
    }
    if (message.plantunerFixEmptyTable !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.plantunerFixEmptyTable! },
        writer.uint32(1194).fork(),
      ).ldelim();
    }
    if (message.maxStackDepth !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStackDepth! },
        writer.uint32(1202).fork(),
      ).ldelim();
    }
    if (message.enableGroupByReordering !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableGroupByReordering! },
        writer.uint32(1210).fork(),
      ).ldelim();
    }
    if (message.geqo !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.geqo! }, writer.uint32(1218).fork())
        .ldelim();
    }
    if (message.geqoThreshold !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.geqoThreshold! },
        writer.uint32(1226).fork(),
      ).ldelim();
    }
    if (message.geqoEffort !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.geqoEffort! }, writer.uint32(1234).fork())
        .ldelim();
    }
    if (message.geqoPoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.geqoPoolSize! },
        writer.uint32(1242).fork(),
      ).ldelim();
    }
    if (message.geqoGenerations !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.geqoGenerations! },
        writer.uint32(1250).fork(),
      ).ldelim();
    }
    if (message.geqoSelectionBias !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.geqoSelectionBias! },
        writer.uint32(1258).fork(),
      ).ldelim();
    }
    if (message.geqoSeed !== undefined) {
      DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.geqoSeed! }, writer.uint32(1266).fork())
        .ldelim();
    }
    if (message.pgTrgmSimilarityThreshold !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.pgTrgmSimilarityThreshold! },
        writer.uint32(1274).fork(),
      ).ldelim();
    }
    if (message.pgTrgmWordSimilarityThreshold !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.pgTrgmWordSimilarityThreshold! },
        writer.uint32(1282).fork(),
      ).ldelim();
    }
    if (message.pgTrgmStrictWordSimilarityThreshold !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.pgTrgmStrictWordSimilarityThreshold! },
        writer.uint32(1290).fork(),
      ).ldelim();
    }
    if (message.maxStandbyArchiveDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStandbyArchiveDelay! },
        writer.uint32(1298).fork(),
      ).ldelim();
    }
    if (message.sessionDurationTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.sessionDurationTimeout! },
        writer.uint32(1306).fork(),
      ).ldelim();
    }
    if (message.logReplicationCommands !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logReplicationCommands! },
        writer.uint32(1314).fork(),
      ).ldelim();
    }
    if (message.logAutovacuumMinDuration !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logAutovacuumMinDuration! },
        writer.uint32(1322).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlConfig161C {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostgresqlConfig161C();
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

          message.sharedBuffers = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tempBuffers = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxPreparedTransactions = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.workMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maintenanceWorkMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.autovacuumWorkMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tempFileLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.vacuumCostDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.vacuumCostPageHit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.vacuumCostPageMiss = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.vacuumCostPageDirty = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.vacuumCostLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.bgwriterDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.bgwriterLruMaxpages = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.bgwriterLruMultiplier = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.bgwriterFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.backendFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.oldSnapshotThreshold = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.walLevel = reader.int32() as any;
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.synchronousCommit = reader.int32() as any;
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.checkpointTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.checkpointCompletionTarget = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.checkpointFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.maxWalSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.minWalSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.maxStandbyStreamingDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.defaultStatisticsTarget = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.constraintExclusion = reader.int32() as any;
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.cursorTupleFraction = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.fromCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.joinCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 33:
          if (tag !== 264) {
            break;
          }

          message.debugParallelQuery = reader.int32() as any;
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.clientMinMessages = reader.int32() as any;
          continue;
        case 35:
          if (tag !== 280) {
            break;
          }

          message.logMinMessages = reader.int32() as any;
          continue;
        case 36:
          if (tag !== 288) {
            break;
          }

          message.logMinErrorStatement = reader.int32() as any;
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.logMinDurationStatement = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 38:
          if (tag !== 306) {
            break;
          }

          message.logCheckpoints = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.logConnections = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.logDisconnections = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.logDuration = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 42:
          if (tag !== 336) {
            break;
          }

          message.logErrorVerbosity = reader.int32() as any;
          continue;
        case 43:
          if (tag !== 346) {
            break;
          }

          message.logLockWaits = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 44:
          if (tag !== 352) {
            break;
          }

          message.logStatement = reader.int32() as any;
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.logTempFiles = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.searchPath = reader.string();
          continue;
        case 47:
          if (tag !== 378) {
            break;
          }

          message.rowSecurity = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 48:
          if (tag !== 384) {
            break;
          }

          message.defaultTransactionIsolation = reader.int32() as any;
          continue;
        case 49:
          if (tag !== 394) {
            break;
          }

          message.statementTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.lockTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 51:
          if (tag !== 410) {
            break;
          }

          message.idleInTransactionSessionTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 52:
          if (tag !== 416) {
            break;
          }

          message.byteaOutput = reader.int32() as any;
          continue;
        case 53:
          if (tag !== 424) {
            break;
          }

          message.xmlbinary = reader.int32() as any;
          continue;
        case 54:
          if (tag !== 432) {
            break;
          }

          message.xmloption = reader.int32() as any;
          continue;
        case 55:
          if (tag !== 442) {
            break;
          }

          message.ginPendingListLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.deadlockTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.maxLocksPerTransaction = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 58:
          if (tag !== 466) {
            break;
          }

          message.maxPredLocksPerTransaction = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 59:
          if (tag !== 474) {
            break;
          }

          message.arrayNulls = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 60:
          if (tag !== 480) {
            break;
          }

          message.backslashQuote = reader.int32() as any;
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          message.defaultWithOids = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 62:
          if (tag !== 498) {
            break;
          }

          message.escapeStringWarning = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 63:
          if (tag !== 506) {
            break;
          }

          message.loCompatPrivileges = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 65:
          if (tag !== 522) {
            break;
          }

          message.quoteAllIdentifiers = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 66:
          if (tag !== 530) {
            break;
          }

          message.standardConformingStrings = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 67:
          if (tag !== 538) {
            break;
          }

          message.synchronizeSeqscans = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 68:
          if (tag !== 546) {
            break;
          }

          message.transformNullEquals = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 69:
          if (tag !== 554) {
            break;
          }

          message.exitOnError = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 70:
          if (tag !== 562) {
            break;
          }

          message.seqPageCost = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 71:
          if (tag !== 570) {
            break;
          }

          message.randomPageCost = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 72:
          if (tag !== 578) {
            break;
          }

          message.autovacuumMaxWorkers = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 73:
          if (tag !== 586) {
            break;
          }

          message.autovacuumVacuumCostDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 74:
          if (tag !== 594) {
            break;
          }

          message.autovacuumVacuumCostLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 75:
          if (tag !== 602) {
            break;
          }

          message.autovacuumNaptime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 76:
          if (tag !== 610) {
            break;
          }

          message.archiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 77:
          if (tag !== 618) {
            break;
          }

          message.trackActivityQuerySize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 79:
          if (tag !== 634) {
            break;
          }

          message.onlineAnalyzeEnable = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 80:
          if (tag !== 642) {
            break;
          }

          message.enableBitmapscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 81:
          if (tag !== 650) {
            break;
          }

          message.enableHashagg = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 82:
          if (tag !== 658) {
            break;
          }

          message.enableHashjoin = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 83:
          if (tag !== 666) {
            break;
          }

          message.enableIndexscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 84:
          if (tag !== 674) {
            break;
          }

          message.enableIndexonlyscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 85:
          if (tag !== 682) {
            break;
          }

          message.enableMaterial = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 86:
          if (tag !== 690) {
            break;
          }

          message.enableMergejoin = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 87:
          if (tag !== 698) {
            break;
          }

          message.enableNestloop = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 88:
          if (tag !== 706) {
            break;
          }

          message.enableSeqscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 89:
          if (tag !== 714) {
            break;
          }

          message.enableSort = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 90:
          if (tag !== 722) {
            break;
          }

          message.enableTidscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 91:
          if (tag !== 730) {
            break;
          }

          message.maxWorkerProcesses = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 92:
          if (tag !== 738) {
            break;
          }

          message.maxParallelWorkers = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 93:
          if (tag !== 746) {
            break;
          }

          message.maxParallelWorkersPerGather = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 94:
          if (tag !== 754) {
            break;
          }

          message.autovacuumVacuumScaleFactor = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 95:
          if (tag !== 762) {
            break;
          }

          message.autovacuumAnalyzeScaleFactor = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 96:
          if (tag !== 770) {
            break;
          }

          message.defaultTransactionReadOnly = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 97:
          if (tag !== 778) {
            break;
          }

          message.timezone = reader.string();
          continue;
        case 98:
          if (tag !== 786) {
            break;
          }

          message.enableParallelAppend = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 99:
          if (tag !== 794) {
            break;
          }

          message.enableParallelHash = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.enablePartitionPruning = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.enablePartitionwiseAggregate = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.enablePartitionwiseJoin = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.jit = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.maxParallelMaintenanceWorkers = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 105:
          if (tag !== 842) {
            break;
          }

          message.parallelLeaderParticipation = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 107:
          if (tag !== 858) {
            break;
          }

          message.logTransactionSampleRate = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 108:
          if (tag !== 864) {
            break;
          }

          message.planCacheMode = reader.int32() as any;
          continue;
        case 109:
          if (tag !== 874) {
            break;
          }

          message.effectiveIoConcurrency = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 110:
          if (tag !== 882) {
            break;
          }

          message.effectiveCacheSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 111:
          if (tag === 888) {
            message.sharedPreloadLibraries.push(reader.int32() as any);

            continue;
          }

          if (tag === 890) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sharedPreloadLibraries.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 112:
          if (tag !== 898) {
            break;
          }

          message.autoExplainLogMinDuration = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 113:
          if (tag !== 906) {
            break;
          }

          message.autoExplainLogAnalyze = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 114:
          if (tag !== 914) {
            break;
          }

          message.autoExplainLogBuffers = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 115:
          if (tag !== 922) {
            break;
          }

          message.autoExplainLogTiming = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 116:
          if (tag !== 930) {
            break;
          }

          message.autoExplainLogTriggers = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 117:
          if (tag !== 938) {
            break;
          }

          message.autoExplainLogVerbose = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 118:
          if (tag !== 946) {
            break;
          }

          message.autoExplainLogNestedStatements = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 119:
          if (tag !== 954) {
            break;
          }

          message.autoExplainSampleRate = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 120:
          if (tag !== 962) {
            break;
          }

          message.pgHintPlanEnableHint = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 121:
          if (tag !== 970) {
            break;
          }

          message.pgHintPlanEnableHintTable = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 122:
          if (tag !== 976) {
            break;
          }

          message.pgHintPlanDebugPrint = reader.int32() as any;
          continue;
        case 123:
          if (tag !== 984) {
            break;
          }

          message.pgHintPlanMessageLevel = reader.int32() as any;
          continue;
        case 124:
          if (tag !== 994) {
            break;
          }

          message.hashMemMultiplier = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 126:
          if (tag !== 1010) {
            break;
          }

          message.logicalDecodingWorkMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 127:
          if (tag !== 1018) {
            break;
          }

          message.maintenanceIoConcurrency = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 128:
          if (tag !== 1026) {
            break;
          }

          message.maxSlotWalKeepSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 129:
          if (tag !== 1034) {
            break;
          }

          message.walKeepSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 130:
          if (tag !== 1042) {
            break;
          }

          message.enableIncrementalSort = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 131:
          if (tag !== 1050) {
            break;
          }

          message.autovacuumVacuumInsertThreshold = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 132:
          if (tag !== 1058) {
            break;
          }

          message.autovacuumVacuumInsertScaleFactor = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 133:
          if (tag !== 1066) {
            break;
          }

          message.logMinDurationSample = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 134:
          if (tag !== 1074) {
            break;
          }

          message.logStatementSampleRate = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 135:
          if (tag !== 1082) {
            break;
          }

          message.logParameterMaxLength = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 136:
          if (tag !== 1090) {
            break;
          }

          message.logParameterMaxLengthOnError = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 137:
          if (tag !== 1098) {
            break;
          }

          message.clientConnectionCheckInterval = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 138:
          if (tag !== 1106) {
            break;
          }

          message.enableAsyncAppend = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 139:
          if (tag !== 1114) {
            break;
          }

          message.enableGathermerge = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 140:
          if (tag !== 1122) {
            break;
          }

          message.enableMemoize = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 141:
          if (tag !== 1130) {
            break;
          }

          message.logRecoveryConflictWaits = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 142:
          if (tag !== 1138) {
            break;
          }

          message.vacuumFailsafeAge = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 143:
          if (tag !== 1146) {
            break;
          }

          message.vacuumMultixactFailsafeAge = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 144:
          if (tag !== 1154) {
            break;
          }

          message.pgQualstatsEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 145:
          if (tag !== 1162) {
            break;
          }

          message.pgQualstatsTrackConstants = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 146:
          if (tag !== 1170) {
            break;
          }

          message.pgQualstatsMax = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 147:
          if (tag !== 1178) {
            break;
          }

          message.pgQualstatsResolveOids = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 148:
          if (tag !== 1186) {
            break;
          }

          message.pgQualstatsSampleRate = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 149:
          if (tag !== 1194) {
            break;
          }

          message.plantunerFixEmptyTable = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 150:
          if (tag !== 1202) {
            break;
          }

          message.maxStackDepth = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 151:
          if (tag !== 1210) {
            break;
          }

          message.enableGroupByReordering = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 152:
          if (tag !== 1218) {
            break;
          }

          message.geqo = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 153:
          if (tag !== 1226) {
            break;
          }

          message.geqoThreshold = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 154:
          if (tag !== 1234) {
            break;
          }

          message.geqoEffort = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 155:
          if (tag !== 1242) {
            break;
          }

          message.geqoPoolSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 156:
          if (tag !== 1250) {
            break;
          }

          message.geqoGenerations = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 157:
          if (tag !== 1258) {
            break;
          }

          message.geqoSelectionBias = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 158:
          if (tag !== 1266) {
            break;
          }

          message.geqoSeed = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 159:
          if (tag !== 1274) {
            break;
          }

          message.pgTrgmSimilarityThreshold = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 160:
          if (tag !== 1282) {
            break;
          }

          message.pgTrgmWordSimilarityThreshold = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 161:
          if (tag !== 1290) {
            break;
          }

          message.pgTrgmStrictWordSimilarityThreshold = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 162:
          if (tag !== 1298) {
            break;
          }

          message.maxStandbyArchiveDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 163:
          if (tag !== 1306) {
            break;
          }

          message.sessionDurationTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 164:
          if (tag !== 1314) {
            break;
          }

          message.logReplicationCommands = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 165:
          if (tag !== 1322) {
            break;
          }

          message.logAutovacuumMinDuration = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostgresqlConfig161C {
    return {
      $type: PostgresqlConfig161C.$type,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      sharedBuffers: isSet(object.sharedBuffers) ? Number(object.sharedBuffers) : undefined,
      tempBuffers: isSet(object.tempBuffers) ? Number(object.tempBuffers) : undefined,
      maxPreparedTransactions: isSet(object.maxPreparedTransactions)
        ? Number(object.maxPreparedTransactions)
        : undefined,
      workMem: isSet(object.workMem) ? Number(object.workMem) : undefined,
      maintenanceWorkMem: isSet(object.maintenanceWorkMem) ? Number(object.maintenanceWorkMem) : undefined,
      autovacuumWorkMem: isSet(object.autovacuumWorkMem) ? Number(object.autovacuumWorkMem) : undefined,
      tempFileLimit: isSet(object.tempFileLimit) ? Number(object.tempFileLimit) : undefined,
      vacuumCostDelay: isSet(object.vacuumCostDelay) ? Number(object.vacuumCostDelay) : undefined,
      vacuumCostPageHit: isSet(object.vacuumCostPageHit) ? Number(object.vacuumCostPageHit) : undefined,
      vacuumCostPageMiss: isSet(object.vacuumCostPageMiss) ? Number(object.vacuumCostPageMiss) : undefined,
      vacuumCostPageDirty: isSet(object.vacuumCostPageDirty) ? Number(object.vacuumCostPageDirty) : undefined,
      vacuumCostLimit: isSet(object.vacuumCostLimit) ? Number(object.vacuumCostLimit) : undefined,
      bgwriterDelay: isSet(object.bgwriterDelay) ? Number(object.bgwriterDelay) : undefined,
      bgwriterLruMaxpages: isSet(object.bgwriterLruMaxpages) ? Number(object.bgwriterLruMaxpages) : undefined,
      bgwriterLruMultiplier: isSet(object.bgwriterLruMultiplier) ? Number(object.bgwriterLruMultiplier) : undefined,
      bgwriterFlushAfter: isSet(object.bgwriterFlushAfter) ? Number(object.bgwriterFlushAfter) : undefined,
      backendFlushAfter: isSet(object.backendFlushAfter) ? Number(object.backendFlushAfter) : undefined,
      oldSnapshotThreshold: isSet(object.oldSnapshotThreshold) ? Number(object.oldSnapshotThreshold) : undefined,
      walLevel: isSet(object.walLevel) ? postgresqlConfig161C_WalLevelFromJSON(object.walLevel) : 0,
      synchronousCommit: isSet(object.synchronousCommit)
        ? postgresqlConfig161C_SynchronousCommitFromJSON(object.synchronousCommit)
        : 0,
      checkpointTimeout: isSet(object.checkpointTimeout) ? Number(object.checkpointTimeout) : undefined,
      checkpointCompletionTarget: isSet(object.checkpointCompletionTarget)
        ? Number(object.checkpointCompletionTarget)
        : undefined,
      checkpointFlushAfter: isSet(object.checkpointFlushAfter) ? Number(object.checkpointFlushAfter) : undefined,
      maxWalSize: isSet(object.maxWalSize) ? Number(object.maxWalSize) : undefined,
      minWalSize: isSet(object.minWalSize) ? Number(object.minWalSize) : undefined,
      maxStandbyStreamingDelay: isSet(object.maxStandbyStreamingDelay)
        ? Number(object.maxStandbyStreamingDelay)
        : undefined,
      defaultStatisticsTarget: isSet(object.defaultStatisticsTarget)
        ? Number(object.defaultStatisticsTarget)
        : undefined,
      constraintExclusion: isSet(object.constraintExclusion)
        ? postgresqlConfig161C_ConstraintExclusionFromJSON(object.constraintExclusion)
        : 0,
      cursorTupleFraction: isSet(object.cursorTupleFraction) ? Number(object.cursorTupleFraction) : undefined,
      fromCollapseLimit: isSet(object.fromCollapseLimit) ? Number(object.fromCollapseLimit) : undefined,
      joinCollapseLimit: isSet(object.joinCollapseLimit) ? Number(object.joinCollapseLimit) : undefined,
      debugParallelQuery: isSet(object.debugParallelQuery)
        ? postgresqlConfig161C_DebugParallelQueryFromJSON(object.debugParallelQuery)
        : 0,
      clientMinMessages: isSet(object.clientMinMessages)
        ? postgresqlConfig161C_LogLevelFromJSON(object.clientMinMessages)
        : 0,
      logMinMessages: isSet(object.logMinMessages) ? postgresqlConfig161C_LogLevelFromJSON(object.logMinMessages) : 0,
      logMinErrorStatement: isSet(object.logMinErrorStatement)
        ? postgresqlConfig161C_LogLevelFromJSON(object.logMinErrorStatement)
        : 0,
      logMinDurationStatement: isSet(object.logMinDurationStatement)
        ? Number(object.logMinDurationStatement)
        : undefined,
      logCheckpoints: isSet(object.logCheckpoints) ? Boolean(object.logCheckpoints) : undefined,
      logConnections: isSet(object.logConnections) ? Boolean(object.logConnections) : undefined,
      logDisconnections: isSet(object.logDisconnections) ? Boolean(object.logDisconnections) : undefined,
      logDuration: isSet(object.logDuration) ? Boolean(object.logDuration) : undefined,
      logErrorVerbosity: isSet(object.logErrorVerbosity)
        ? postgresqlConfig161C_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
        : 0,
      logLockWaits: isSet(object.logLockWaits) ? Boolean(object.logLockWaits) : undefined,
      logStatement: isSet(object.logStatement) ? postgresqlConfig161C_LogStatementFromJSON(object.logStatement) : 0,
      logTempFiles: isSet(object.logTempFiles) ? Number(object.logTempFiles) : undefined,
      searchPath: isSet(object.searchPath) ? globalThis.String(object.searchPath) : "",
      rowSecurity: isSet(object.rowSecurity) ? Boolean(object.rowSecurity) : undefined,
      defaultTransactionIsolation: isSet(object.defaultTransactionIsolation)
        ? postgresqlConfig161C_TransactionIsolationFromJSON(object.defaultTransactionIsolation)
        : 0,
      statementTimeout: isSet(object.statementTimeout) ? Number(object.statementTimeout) : undefined,
      lockTimeout: isSet(object.lockTimeout) ? Number(object.lockTimeout) : undefined,
      idleInTransactionSessionTimeout: isSet(object.idleInTransactionSessionTimeout)
        ? Number(object.idleInTransactionSessionTimeout)
        : undefined,
      byteaOutput: isSet(object.byteaOutput) ? postgresqlConfig161C_ByteaOutputFromJSON(object.byteaOutput) : 0,
      xmlbinary: isSet(object.xmlbinary) ? postgresqlConfig161C_XmlBinaryFromJSON(object.xmlbinary) : 0,
      xmloption: isSet(object.xmloption) ? postgresqlConfig161C_XmlOptionFromJSON(object.xmloption) : 0,
      ginPendingListLimit: isSet(object.ginPendingListLimit) ? Number(object.ginPendingListLimit) : undefined,
      deadlockTimeout: isSet(object.deadlockTimeout) ? Number(object.deadlockTimeout) : undefined,
      maxLocksPerTransaction: isSet(object.maxLocksPerTransaction) ? Number(object.maxLocksPerTransaction) : undefined,
      maxPredLocksPerTransaction: isSet(object.maxPredLocksPerTransaction)
        ? Number(object.maxPredLocksPerTransaction)
        : undefined,
      arrayNulls: isSet(object.arrayNulls) ? Boolean(object.arrayNulls) : undefined,
      backslashQuote: isSet(object.backslashQuote)
        ? postgresqlConfig161C_BackslashQuoteFromJSON(object.backslashQuote)
        : 0,
      defaultWithOids: isSet(object.defaultWithOids) ? Boolean(object.defaultWithOids) : undefined,
      escapeStringWarning: isSet(object.escapeStringWarning) ? Boolean(object.escapeStringWarning) : undefined,
      loCompatPrivileges: isSet(object.loCompatPrivileges) ? Boolean(object.loCompatPrivileges) : undefined,
      quoteAllIdentifiers: isSet(object.quoteAllIdentifiers) ? Boolean(object.quoteAllIdentifiers) : undefined,
      standardConformingStrings: isSet(object.standardConformingStrings)
        ? Boolean(object.standardConformingStrings)
        : undefined,
      synchronizeSeqscans: isSet(object.synchronizeSeqscans) ? Boolean(object.synchronizeSeqscans) : undefined,
      transformNullEquals: isSet(object.transformNullEquals) ? Boolean(object.transformNullEquals) : undefined,
      exitOnError: isSet(object.exitOnError) ? Boolean(object.exitOnError) : undefined,
      seqPageCost: isSet(object.seqPageCost) ? Number(object.seqPageCost) : undefined,
      randomPageCost: isSet(object.randomPageCost) ? Number(object.randomPageCost) : undefined,
      autovacuumMaxWorkers: isSet(object.autovacuumMaxWorkers) ? Number(object.autovacuumMaxWorkers) : undefined,
      autovacuumVacuumCostDelay: isSet(object.autovacuumVacuumCostDelay)
        ? Number(object.autovacuumVacuumCostDelay)
        : undefined,
      autovacuumVacuumCostLimit: isSet(object.autovacuumVacuumCostLimit)
        ? Number(object.autovacuumVacuumCostLimit)
        : undefined,
      autovacuumNaptime: isSet(object.autovacuumNaptime) ? Number(object.autovacuumNaptime) : undefined,
      archiveTimeout: isSet(object.archiveTimeout) ? Number(object.archiveTimeout) : undefined,
      trackActivityQuerySize: isSet(object.trackActivityQuerySize) ? Number(object.trackActivityQuerySize) : undefined,
      onlineAnalyzeEnable: isSet(object.onlineAnalyzeEnable) ? Boolean(object.onlineAnalyzeEnable) : undefined,
      enableBitmapscan: isSet(object.enableBitmapscan) ? Boolean(object.enableBitmapscan) : undefined,
      enableHashagg: isSet(object.enableHashagg) ? Boolean(object.enableHashagg) : undefined,
      enableHashjoin: isSet(object.enableHashjoin) ? Boolean(object.enableHashjoin) : undefined,
      enableIndexscan: isSet(object.enableIndexscan) ? Boolean(object.enableIndexscan) : undefined,
      enableIndexonlyscan: isSet(object.enableIndexonlyscan) ? Boolean(object.enableIndexonlyscan) : undefined,
      enableMaterial: isSet(object.enableMaterial) ? Boolean(object.enableMaterial) : undefined,
      enableMergejoin: isSet(object.enableMergejoin) ? Boolean(object.enableMergejoin) : undefined,
      enableNestloop: isSet(object.enableNestloop) ? Boolean(object.enableNestloop) : undefined,
      enableSeqscan: isSet(object.enableSeqscan) ? Boolean(object.enableSeqscan) : undefined,
      enableSort: isSet(object.enableSort) ? Boolean(object.enableSort) : undefined,
      enableTidscan: isSet(object.enableTidscan) ? Boolean(object.enableTidscan) : undefined,
      maxWorkerProcesses: isSet(object.maxWorkerProcesses) ? Number(object.maxWorkerProcesses) : undefined,
      maxParallelWorkers: isSet(object.maxParallelWorkers) ? Number(object.maxParallelWorkers) : undefined,
      maxParallelWorkersPerGather: isSet(object.maxParallelWorkersPerGather)
        ? Number(object.maxParallelWorkersPerGather)
        : undefined,
      autovacuumVacuumScaleFactor: isSet(object.autovacuumVacuumScaleFactor)
        ? Number(object.autovacuumVacuumScaleFactor)
        : undefined,
      autovacuumAnalyzeScaleFactor: isSet(object.autovacuumAnalyzeScaleFactor)
        ? Number(object.autovacuumAnalyzeScaleFactor)
        : undefined,
      defaultTransactionReadOnly: isSet(object.defaultTransactionReadOnly)
        ? Boolean(object.defaultTransactionReadOnly)
        : undefined,
      timezone: isSet(object.timezone) ? globalThis.String(object.timezone) : "",
      enableParallelAppend: isSet(object.enableParallelAppend) ? Boolean(object.enableParallelAppend) : undefined,
      enableParallelHash: isSet(object.enableParallelHash) ? Boolean(object.enableParallelHash) : undefined,
      enablePartitionPruning: isSet(object.enablePartitionPruning) ? Boolean(object.enablePartitionPruning) : undefined,
      enablePartitionwiseAggregate: isSet(object.enablePartitionwiseAggregate)
        ? Boolean(object.enablePartitionwiseAggregate)
        : undefined,
      enablePartitionwiseJoin: isSet(object.enablePartitionwiseJoin)
        ? Boolean(object.enablePartitionwiseJoin)
        : undefined,
      jit: isSet(object.jit) ? Boolean(object.jit) : undefined,
      maxParallelMaintenanceWorkers: isSet(object.maxParallelMaintenanceWorkers)
        ? Number(object.maxParallelMaintenanceWorkers)
        : undefined,
      parallelLeaderParticipation: isSet(object.parallelLeaderParticipation)
        ? Boolean(object.parallelLeaderParticipation)
        : undefined,
      logTransactionSampleRate: isSet(object.logTransactionSampleRate)
        ? Number(object.logTransactionSampleRate)
        : undefined,
      planCacheMode: isSet(object.planCacheMode) ? postgresqlConfig161C_PlanCacheModeFromJSON(object.planCacheMode) : 0,
      effectiveIoConcurrency: isSet(object.effectiveIoConcurrency) ? Number(object.effectiveIoConcurrency) : undefined,
      effectiveCacheSize: isSet(object.effectiveCacheSize) ? Number(object.effectiveCacheSize) : undefined,
      sharedPreloadLibraries: globalThis.Array.isArray(object?.sharedPreloadLibraries)
        ? object.sharedPreloadLibraries.map((e: any) => postgresqlConfig161C_SharedPreloadLibrariesFromJSON(e))
        : [],
      autoExplainLogMinDuration: isSet(object.autoExplainLogMinDuration)
        ? Number(object.autoExplainLogMinDuration)
        : undefined,
      autoExplainLogAnalyze: isSet(object.autoExplainLogAnalyze) ? Boolean(object.autoExplainLogAnalyze) : undefined,
      autoExplainLogBuffers: isSet(object.autoExplainLogBuffers) ? Boolean(object.autoExplainLogBuffers) : undefined,
      autoExplainLogTiming: isSet(object.autoExplainLogTiming) ? Boolean(object.autoExplainLogTiming) : undefined,
      autoExplainLogTriggers: isSet(object.autoExplainLogTriggers) ? Boolean(object.autoExplainLogTriggers) : undefined,
      autoExplainLogVerbose: isSet(object.autoExplainLogVerbose) ? Boolean(object.autoExplainLogVerbose) : undefined,
      autoExplainLogNestedStatements: isSet(object.autoExplainLogNestedStatements)
        ? Boolean(object.autoExplainLogNestedStatements)
        : undefined,
      autoExplainSampleRate: isSet(object.autoExplainSampleRate) ? Number(object.autoExplainSampleRate) : undefined,
      pgHintPlanEnableHint: isSet(object.pgHintPlanEnableHint) ? Boolean(object.pgHintPlanEnableHint) : undefined,
      pgHintPlanEnableHintTable: isSet(object.pgHintPlanEnableHintTable)
        ? Boolean(object.pgHintPlanEnableHintTable)
        : undefined,
      pgHintPlanDebugPrint: isSet(object.pgHintPlanDebugPrint)
        ? postgresqlConfig161C_PgHintPlanDebugPrintFromJSON(object.pgHintPlanDebugPrint)
        : 0,
      pgHintPlanMessageLevel: isSet(object.pgHintPlanMessageLevel)
        ? postgresqlConfig161C_LogLevelFromJSON(object.pgHintPlanMessageLevel)
        : 0,
      hashMemMultiplier: isSet(object.hashMemMultiplier) ? Number(object.hashMemMultiplier) : undefined,
      logicalDecodingWorkMem: isSet(object.logicalDecodingWorkMem) ? Number(object.logicalDecodingWorkMem) : undefined,
      maintenanceIoConcurrency: isSet(object.maintenanceIoConcurrency)
        ? Number(object.maintenanceIoConcurrency)
        : undefined,
      maxSlotWalKeepSize: isSet(object.maxSlotWalKeepSize) ? Number(object.maxSlotWalKeepSize) : undefined,
      walKeepSize: isSet(object.walKeepSize) ? Number(object.walKeepSize) : undefined,
      enableIncrementalSort: isSet(object.enableIncrementalSort) ? Boolean(object.enableIncrementalSort) : undefined,
      autovacuumVacuumInsertThreshold: isSet(object.autovacuumVacuumInsertThreshold)
        ? Number(object.autovacuumVacuumInsertThreshold)
        : undefined,
      autovacuumVacuumInsertScaleFactor: isSet(object.autovacuumVacuumInsertScaleFactor)
        ? Number(object.autovacuumVacuumInsertScaleFactor)
        : undefined,
      logMinDurationSample: isSet(object.logMinDurationSample) ? Number(object.logMinDurationSample) : undefined,
      logStatementSampleRate: isSet(object.logStatementSampleRate) ? Number(object.logStatementSampleRate) : undefined,
      logParameterMaxLength: isSet(object.logParameterMaxLength) ? Number(object.logParameterMaxLength) : undefined,
      logParameterMaxLengthOnError: isSet(object.logParameterMaxLengthOnError)
        ? Number(object.logParameterMaxLengthOnError)
        : undefined,
      clientConnectionCheckInterval: isSet(object.clientConnectionCheckInterval)
        ? Number(object.clientConnectionCheckInterval)
        : undefined,
      enableAsyncAppend: isSet(object.enableAsyncAppend) ? Boolean(object.enableAsyncAppend) : undefined,
      enableGathermerge: isSet(object.enableGathermerge) ? Boolean(object.enableGathermerge) : undefined,
      enableMemoize: isSet(object.enableMemoize) ? Boolean(object.enableMemoize) : undefined,
      logRecoveryConflictWaits: isSet(object.logRecoveryConflictWaits)
        ? Boolean(object.logRecoveryConflictWaits)
        : undefined,
      vacuumFailsafeAge: isSet(object.vacuumFailsafeAge) ? Number(object.vacuumFailsafeAge) : undefined,
      vacuumMultixactFailsafeAge: isSet(object.vacuumMultixactFailsafeAge)
        ? Number(object.vacuumMultixactFailsafeAge)
        : undefined,
      pgQualstatsEnabled: isSet(object.pgQualstatsEnabled) ? Boolean(object.pgQualstatsEnabled) : undefined,
      pgQualstatsTrackConstants: isSet(object.pgQualstatsTrackConstants)
        ? Boolean(object.pgQualstatsTrackConstants)
        : undefined,
      pgQualstatsMax: isSet(object.pgQualstatsMax) ? Number(object.pgQualstatsMax) : undefined,
      pgQualstatsResolveOids: isSet(object.pgQualstatsResolveOids) ? Boolean(object.pgQualstatsResolveOids) : undefined,
      pgQualstatsSampleRate: isSet(object.pgQualstatsSampleRate) ? Number(object.pgQualstatsSampleRate) : undefined,
      plantunerFixEmptyTable: isSet(object.plantunerFixEmptyTable) ? Boolean(object.plantunerFixEmptyTable) : undefined,
      maxStackDepth: isSet(object.maxStackDepth) ? Number(object.maxStackDepth) : undefined,
      enableGroupByReordering: isSet(object.enableGroupByReordering)
        ? Boolean(object.enableGroupByReordering)
        : undefined,
      geqo: isSet(object.geqo) ? Boolean(object.geqo) : undefined,
      geqoThreshold: isSet(object.geqoThreshold) ? Number(object.geqoThreshold) : undefined,
      geqoEffort: isSet(object.geqoEffort) ? Number(object.geqoEffort) : undefined,
      geqoPoolSize: isSet(object.geqoPoolSize) ? Number(object.geqoPoolSize) : undefined,
      geqoGenerations: isSet(object.geqoGenerations) ? Number(object.geqoGenerations) : undefined,
      geqoSelectionBias: isSet(object.geqoSelectionBias) ? Number(object.geqoSelectionBias) : undefined,
      geqoSeed: isSet(object.geqoSeed) ? Number(object.geqoSeed) : undefined,
      pgTrgmSimilarityThreshold: isSet(object.pgTrgmSimilarityThreshold)
        ? Number(object.pgTrgmSimilarityThreshold)
        : undefined,
      pgTrgmWordSimilarityThreshold: isSet(object.pgTrgmWordSimilarityThreshold)
        ? Number(object.pgTrgmWordSimilarityThreshold)
        : undefined,
      pgTrgmStrictWordSimilarityThreshold: isSet(object.pgTrgmStrictWordSimilarityThreshold)
        ? Number(object.pgTrgmStrictWordSimilarityThreshold)
        : undefined,
      maxStandbyArchiveDelay: isSet(object.maxStandbyArchiveDelay) ? Number(object.maxStandbyArchiveDelay) : undefined,
      sessionDurationTimeout: isSet(object.sessionDurationTimeout) ? Number(object.sessionDurationTimeout) : undefined,
      logReplicationCommands: isSet(object.logReplicationCommands) ? Boolean(object.logReplicationCommands) : undefined,
      logAutovacuumMinDuration: isSet(object.logAutovacuumMinDuration)
        ? Number(object.logAutovacuumMinDuration)
        : undefined,
    };
  },

  toJSON(message: PostgresqlConfig161C): unknown {
    const obj: any = {};
    if (message.maxConnections !== undefined) {
      obj.maxConnections = message.maxConnections;
    }
    if (message.sharedBuffers !== undefined) {
      obj.sharedBuffers = message.sharedBuffers;
    }
    if (message.tempBuffers !== undefined) {
      obj.tempBuffers = message.tempBuffers;
    }
    if (message.maxPreparedTransactions !== undefined) {
      obj.maxPreparedTransactions = message.maxPreparedTransactions;
    }
    if (message.workMem !== undefined) {
      obj.workMem = message.workMem;
    }
    if (message.maintenanceWorkMem !== undefined) {
      obj.maintenanceWorkMem = message.maintenanceWorkMem;
    }
    if (message.autovacuumWorkMem !== undefined) {
      obj.autovacuumWorkMem = message.autovacuumWorkMem;
    }
    if (message.tempFileLimit !== undefined) {
      obj.tempFileLimit = message.tempFileLimit;
    }
    if (message.vacuumCostDelay !== undefined) {
      obj.vacuumCostDelay = message.vacuumCostDelay;
    }
    if (message.vacuumCostPageHit !== undefined) {
      obj.vacuumCostPageHit = message.vacuumCostPageHit;
    }
    if (message.vacuumCostPageMiss !== undefined) {
      obj.vacuumCostPageMiss = message.vacuumCostPageMiss;
    }
    if (message.vacuumCostPageDirty !== undefined) {
      obj.vacuumCostPageDirty = message.vacuumCostPageDirty;
    }
    if (message.vacuumCostLimit !== undefined) {
      obj.vacuumCostLimit = message.vacuumCostLimit;
    }
    if (message.bgwriterDelay !== undefined) {
      obj.bgwriterDelay = message.bgwriterDelay;
    }
    if (message.bgwriterLruMaxpages !== undefined) {
      obj.bgwriterLruMaxpages = message.bgwriterLruMaxpages;
    }
    if (message.bgwriterLruMultiplier !== undefined) {
      obj.bgwriterLruMultiplier = message.bgwriterLruMultiplier;
    }
    if (message.bgwriterFlushAfter !== undefined) {
      obj.bgwriterFlushAfter = message.bgwriterFlushAfter;
    }
    if (message.backendFlushAfter !== undefined) {
      obj.backendFlushAfter = message.backendFlushAfter;
    }
    if (message.oldSnapshotThreshold !== undefined) {
      obj.oldSnapshotThreshold = message.oldSnapshotThreshold;
    }
    if (message.walLevel !== 0) {
      obj.walLevel = postgresqlConfig161C_WalLevelToJSON(message.walLevel);
    }
    if (message.synchronousCommit !== 0) {
      obj.synchronousCommit = postgresqlConfig161C_SynchronousCommitToJSON(message.synchronousCommit);
    }
    if (message.checkpointTimeout !== undefined) {
      obj.checkpointTimeout = message.checkpointTimeout;
    }
    if (message.checkpointCompletionTarget !== undefined) {
      obj.checkpointCompletionTarget = message.checkpointCompletionTarget;
    }
    if (message.checkpointFlushAfter !== undefined) {
      obj.checkpointFlushAfter = message.checkpointFlushAfter;
    }
    if (message.maxWalSize !== undefined) {
      obj.maxWalSize = message.maxWalSize;
    }
    if (message.minWalSize !== undefined) {
      obj.minWalSize = message.minWalSize;
    }
    if (message.maxStandbyStreamingDelay !== undefined) {
      obj.maxStandbyStreamingDelay = message.maxStandbyStreamingDelay;
    }
    if (message.defaultStatisticsTarget !== undefined) {
      obj.defaultStatisticsTarget = message.defaultStatisticsTarget;
    }
    if (message.constraintExclusion !== 0) {
      obj.constraintExclusion = postgresqlConfig161C_ConstraintExclusionToJSON(message.constraintExclusion);
    }
    if (message.cursorTupleFraction !== undefined) {
      obj.cursorTupleFraction = message.cursorTupleFraction;
    }
    if (message.fromCollapseLimit !== undefined) {
      obj.fromCollapseLimit = message.fromCollapseLimit;
    }
    if (message.joinCollapseLimit !== undefined) {
      obj.joinCollapseLimit = message.joinCollapseLimit;
    }
    if (message.debugParallelQuery !== 0) {
      obj.debugParallelQuery = postgresqlConfig161C_DebugParallelQueryToJSON(message.debugParallelQuery);
    }
    if (message.clientMinMessages !== 0) {
      obj.clientMinMessages = postgresqlConfig161C_LogLevelToJSON(message.clientMinMessages);
    }
    if (message.logMinMessages !== 0) {
      obj.logMinMessages = postgresqlConfig161C_LogLevelToJSON(message.logMinMessages);
    }
    if (message.logMinErrorStatement !== 0) {
      obj.logMinErrorStatement = postgresqlConfig161C_LogLevelToJSON(message.logMinErrorStatement);
    }
    if (message.logMinDurationStatement !== undefined) {
      obj.logMinDurationStatement = message.logMinDurationStatement;
    }
    if (message.logCheckpoints !== undefined) {
      obj.logCheckpoints = message.logCheckpoints;
    }
    if (message.logConnections !== undefined) {
      obj.logConnections = message.logConnections;
    }
    if (message.logDisconnections !== undefined) {
      obj.logDisconnections = message.logDisconnections;
    }
    if (message.logDuration !== undefined) {
      obj.logDuration = message.logDuration;
    }
    if (message.logErrorVerbosity !== 0) {
      obj.logErrorVerbosity = postgresqlConfig161C_LogErrorVerbosityToJSON(message.logErrorVerbosity);
    }
    if (message.logLockWaits !== undefined) {
      obj.logLockWaits = message.logLockWaits;
    }
    if (message.logStatement !== 0) {
      obj.logStatement = postgresqlConfig161C_LogStatementToJSON(message.logStatement);
    }
    if (message.logTempFiles !== undefined) {
      obj.logTempFiles = message.logTempFiles;
    }
    if (message.searchPath !== "") {
      obj.searchPath = message.searchPath;
    }
    if (message.rowSecurity !== undefined) {
      obj.rowSecurity = message.rowSecurity;
    }
    if (message.defaultTransactionIsolation !== 0) {
      obj.defaultTransactionIsolation = postgresqlConfig161C_TransactionIsolationToJSON(
        message.defaultTransactionIsolation,
      );
    }
    if (message.statementTimeout !== undefined) {
      obj.statementTimeout = message.statementTimeout;
    }
    if (message.lockTimeout !== undefined) {
      obj.lockTimeout = message.lockTimeout;
    }
    if (message.idleInTransactionSessionTimeout !== undefined) {
      obj.idleInTransactionSessionTimeout = message.idleInTransactionSessionTimeout;
    }
    if (message.byteaOutput !== 0) {
      obj.byteaOutput = postgresqlConfig161C_ByteaOutputToJSON(message.byteaOutput);
    }
    if (message.xmlbinary !== 0) {
      obj.xmlbinary = postgresqlConfig161C_XmlBinaryToJSON(message.xmlbinary);
    }
    if (message.xmloption !== 0) {
      obj.xmloption = postgresqlConfig161C_XmlOptionToJSON(message.xmloption);
    }
    if (message.ginPendingListLimit !== undefined) {
      obj.ginPendingListLimit = message.ginPendingListLimit;
    }
    if (message.deadlockTimeout !== undefined) {
      obj.deadlockTimeout = message.deadlockTimeout;
    }
    if (message.maxLocksPerTransaction !== undefined) {
      obj.maxLocksPerTransaction = message.maxLocksPerTransaction;
    }
    if (message.maxPredLocksPerTransaction !== undefined) {
      obj.maxPredLocksPerTransaction = message.maxPredLocksPerTransaction;
    }
    if (message.arrayNulls !== undefined) {
      obj.arrayNulls = message.arrayNulls;
    }
    if (message.backslashQuote !== 0) {
      obj.backslashQuote = postgresqlConfig161C_BackslashQuoteToJSON(message.backslashQuote);
    }
    if (message.defaultWithOids !== undefined) {
      obj.defaultWithOids = message.defaultWithOids;
    }
    if (message.escapeStringWarning !== undefined) {
      obj.escapeStringWarning = message.escapeStringWarning;
    }
    if (message.loCompatPrivileges !== undefined) {
      obj.loCompatPrivileges = message.loCompatPrivileges;
    }
    if (message.quoteAllIdentifiers !== undefined) {
      obj.quoteAllIdentifiers = message.quoteAllIdentifiers;
    }
    if (message.standardConformingStrings !== undefined) {
      obj.standardConformingStrings = message.standardConformingStrings;
    }
    if (message.synchronizeSeqscans !== undefined) {
      obj.synchronizeSeqscans = message.synchronizeSeqscans;
    }
    if (message.transformNullEquals !== undefined) {
      obj.transformNullEquals = message.transformNullEquals;
    }
    if (message.exitOnError !== undefined) {
      obj.exitOnError = message.exitOnError;
    }
    if (message.seqPageCost !== undefined) {
      obj.seqPageCost = message.seqPageCost;
    }
    if (message.randomPageCost !== undefined) {
      obj.randomPageCost = message.randomPageCost;
    }
    if (message.autovacuumMaxWorkers !== undefined) {
      obj.autovacuumMaxWorkers = message.autovacuumMaxWorkers;
    }
    if (message.autovacuumVacuumCostDelay !== undefined) {
      obj.autovacuumVacuumCostDelay = message.autovacuumVacuumCostDelay;
    }
    if (message.autovacuumVacuumCostLimit !== undefined) {
      obj.autovacuumVacuumCostLimit = message.autovacuumVacuumCostLimit;
    }
    if (message.autovacuumNaptime !== undefined) {
      obj.autovacuumNaptime = message.autovacuumNaptime;
    }
    if (message.archiveTimeout !== undefined) {
      obj.archiveTimeout = message.archiveTimeout;
    }
    if (message.trackActivityQuerySize !== undefined) {
      obj.trackActivityQuerySize = message.trackActivityQuerySize;
    }
    if (message.onlineAnalyzeEnable !== undefined) {
      obj.onlineAnalyzeEnable = message.onlineAnalyzeEnable;
    }
    if (message.enableBitmapscan !== undefined) {
      obj.enableBitmapscan = message.enableBitmapscan;
    }
    if (message.enableHashagg !== undefined) {
      obj.enableHashagg = message.enableHashagg;
    }
    if (message.enableHashjoin !== undefined) {
      obj.enableHashjoin = message.enableHashjoin;
    }
    if (message.enableIndexscan !== undefined) {
      obj.enableIndexscan = message.enableIndexscan;
    }
    if (message.enableIndexonlyscan !== undefined) {
      obj.enableIndexonlyscan = message.enableIndexonlyscan;
    }
    if (message.enableMaterial !== undefined) {
      obj.enableMaterial = message.enableMaterial;
    }
    if (message.enableMergejoin !== undefined) {
      obj.enableMergejoin = message.enableMergejoin;
    }
    if (message.enableNestloop !== undefined) {
      obj.enableNestloop = message.enableNestloop;
    }
    if (message.enableSeqscan !== undefined) {
      obj.enableSeqscan = message.enableSeqscan;
    }
    if (message.enableSort !== undefined) {
      obj.enableSort = message.enableSort;
    }
    if (message.enableTidscan !== undefined) {
      obj.enableTidscan = message.enableTidscan;
    }
    if (message.maxWorkerProcesses !== undefined) {
      obj.maxWorkerProcesses = message.maxWorkerProcesses;
    }
    if (message.maxParallelWorkers !== undefined) {
      obj.maxParallelWorkers = message.maxParallelWorkers;
    }
    if (message.maxParallelWorkersPerGather !== undefined) {
      obj.maxParallelWorkersPerGather = message.maxParallelWorkersPerGather;
    }
    if (message.autovacuumVacuumScaleFactor !== undefined) {
      obj.autovacuumVacuumScaleFactor = message.autovacuumVacuumScaleFactor;
    }
    if (message.autovacuumAnalyzeScaleFactor !== undefined) {
      obj.autovacuumAnalyzeScaleFactor = message.autovacuumAnalyzeScaleFactor;
    }
    if (message.defaultTransactionReadOnly !== undefined) {
      obj.defaultTransactionReadOnly = message.defaultTransactionReadOnly;
    }
    if (message.timezone !== "") {
      obj.timezone = message.timezone;
    }
    if (message.enableParallelAppend !== undefined) {
      obj.enableParallelAppend = message.enableParallelAppend;
    }
    if (message.enableParallelHash !== undefined) {
      obj.enableParallelHash = message.enableParallelHash;
    }
    if (message.enablePartitionPruning !== undefined) {
      obj.enablePartitionPruning = message.enablePartitionPruning;
    }
    if (message.enablePartitionwiseAggregate !== undefined) {
      obj.enablePartitionwiseAggregate = message.enablePartitionwiseAggregate;
    }
    if (message.enablePartitionwiseJoin !== undefined) {
      obj.enablePartitionwiseJoin = message.enablePartitionwiseJoin;
    }
    if (message.jit !== undefined) {
      obj.jit = message.jit;
    }
    if (message.maxParallelMaintenanceWorkers !== undefined) {
      obj.maxParallelMaintenanceWorkers = message.maxParallelMaintenanceWorkers;
    }
    if (message.parallelLeaderParticipation !== undefined) {
      obj.parallelLeaderParticipation = message.parallelLeaderParticipation;
    }
    if (message.logTransactionSampleRate !== undefined) {
      obj.logTransactionSampleRate = message.logTransactionSampleRate;
    }
    if (message.planCacheMode !== 0) {
      obj.planCacheMode = postgresqlConfig161C_PlanCacheModeToJSON(message.planCacheMode);
    }
    if (message.effectiveIoConcurrency !== undefined) {
      obj.effectiveIoConcurrency = message.effectiveIoConcurrency;
    }
    if (message.effectiveCacheSize !== undefined) {
      obj.effectiveCacheSize = message.effectiveCacheSize;
    }
    if (message.sharedPreloadLibraries?.length) {
      obj.sharedPreloadLibraries = message.sharedPreloadLibraries.map((e) =>
        postgresqlConfig161C_SharedPreloadLibrariesToJSON(e)
      );
    }
    if (message.autoExplainLogMinDuration !== undefined) {
      obj.autoExplainLogMinDuration = message.autoExplainLogMinDuration;
    }
    if (message.autoExplainLogAnalyze !== undefined) {
      obj.autoExplainLogAnalyze = message.autoExplainLogAnalyze;
    }
    if (message.autoExplainLogBuffers !== undefined) {
      obj.autoExplainLogBuffers = message.autoExplainLogBuffers;
    }
    if (message.autoExplainLogTiming !== undefined) {
      obj.autoExplainLogTiming = message.autoExplainLogTiming;
    }
    if (message.autoExplainLogTriggers !== undefined) {
      obj.autoExplainLogTriggers = message.autoExplainLogTriggers;
    }
    if (message.autoExplainLogVerbose !== undefined) {
      obj.autoExplainLogVerbose = message.autoExplainLogVerbose;
    }
    if (message.autoExplainLogNestedStatements !== undefined) {
      obj.autoExplainLogNestedStatements = message.autoExplainLogNestedStatements;
    }
    if (message.autoExplainSampleRate !== undefined) {
      obj.autoExplainSampleRate = message.autoExplainSampleRate;
    }
    if (message.pgHintPlanEnableHint !== undefined) {
      obj.pgHintPlanEnableHint = message.pgHintPlanEnableHint;
    }
    if (message.pgHintPlanEnableHintTable !== undefined) {
      obj.pgHintPlanEnableHintTable = message.pgHintPlanEnableHintTable;
    }
    if (message.pgHintPlanDebugPrint !== 0) {
      obj.pgHintPlanDebugPrint = postgresqlConfig161C_PgHintPlanDebugPrintToJSON(message.pgHintPlanDebugPrint);
    }
    if (message.pgHintPlanMessageLevel !== 0) {
      obj.pgHintPlanMessageLevel = postgresqlConfig161C_LogLevelToJSON(message.pgHintPlanMessageLevel);
    }
    if (message.hashMemMultiplier !== undefined) {
      obj.hashMemMultiplier = message.hashMemMultiplier;
    }
    if (message.logicalDecodingWorkMem !== undefined) {
      obj.logicalDecodingWorkMem = message.logicalDecodingWorkMem;
    }
    if (message.maintenanceIoConcurrency !== undefined) {
      obj.maintenanceIoConcurrency = message.maintenanceIoConcurrency;
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize;
    }
    if (message.walKeepSize !== undefined) {
      obj.walKeepSize = message.walKeepSize;
    }
    if (message.enableIncrementalSort !== undefined) {
      obj.enableIncrementalSort = message.enableIncrementalSort;
    }
    if (message.autovacuumVacuumInsertThreshold !== undefined) {
      obj.autovacuumVacuumInsertThreshold = message.autovacuumVacuumInsertThreshold;
    }
    if (message.autovacuumVacuumInsertScaleFactor !== undefined) {
      obj.autovacuumVacuumInsertScaleFactor = message.autovacuumVacuumInsertScaleFactor;
    }
    if (message.logMinDurationSample !== undefined) {
      obj.logMinDurationSample = message.logMinDurationSample;
    }
    if (message.logStatementSampleRate !== undefined) {
      obj.logStatementSampleRate = message.logStatementSampleRate;
    }
    if (message.logParameterMaxLength !== undefined) {
      obj.logParameterMaxLength = message.logParameterMaxLength;
    }
    if (message.logParameterMaxLengthOnError !== undefined) {
      obj.logParameterMaxLengthOnError = message.logParameterMaxLengthOnError;
    }
    if (message.clientConnectionCheckInterval !== undefined) {
      obj.clientConnectionCheckInterval = message.clientConnectionCheckInterval;
    }
    if (message.enableAsyncAppend !== undefined) {
      obj.enableAsyncAppend = message.enableAsyncAppend;
    }
    if (message.enableGathermerge !== undefined) {
      obj.enableGathermerge = message.enableGathermerge;
    }
    if (message.enableMemoize !== undefined) {
      obj.enableMemoize = message.enableMemoize;
    }
    if (message.logRecoveryConflictWaits !== undefined) {
      obj.logRecoveryConflictWaits = message.logRecoveryConflictWaits;
    }
    if (message.vacuumFailsafeAge !== undefined) {
      obj.vacuumFailsafeAge = message.vacuumFailsafeAge;
    }
    if (message.vacuumMultixactFailsafeAge !== undefined) {
      obj.vacuumMultixactFailsafeAge = message.vacuumMultixactFailsafeAge;
    }
    if (message.pgQualstatsEnabled !== undefined) {
      obj.pgQualstatsEnabled = message.pgQualstatsEnabled;
    }
    if (message.pgQualstatsTrackConstants !== undefined) {
      obj.pgQualstatsTrackConstants = message.pgQualstatsTrackConstants;
    }
    if (message.pgQualstatsMax !== undefined) {
      obj.pgQualstatsMax = message.pgQualstatsMax;
    }
    if (message.pgQualstatsResolveOids !== undefined) {
      obj.pgQualstatsResolveOids = message.pgQualstatsResolveOids;
    }
    if (message.pgQualstatsSampleRate !== undefined) {
      obj.pgQualstatsSampleRate = message.pgQualstatsSampleRate;
    }
    if (message.plantunerFixEmptyTable !== undefined) {
      obj.plantunerFixEmptyTable = message.plantunerFixEmptyTable;
    }
    if (message.maxStackDepth !== undefined) {
      obj.maxStackDepth = message.maxStackDepth;
    }
    if (message.enableGroupByReordering !== undefined) {
      obj.enableGroupByReordering = message.enableGroupByReordering;
    }
    if (message.geqo !== undefined) {
      obj.geqo = message.geqo;
    }
    if (message.geqoThreshold !== undefined) {
      obj.geqoThreshold = message.geqoThreshold;
    }
    if (message.geqoEffort !== undefined) {
      obj.geqoEffort = message.geqoEffort;
    }
    if (message.geqoPoolSize !== undefined) {
      obj.geqoPoolSize = message.geqoPoolSize;
    }
    if (message.geqoGenerations !== undefined) {
      obj.geqoGenerations = message.geqoGenerations;
    }
    if (message.geqoSelectionBias !== undefined) {
      obj.geqoSelectionBias = message.geqoSelectionBias;
    }
    if (message.geqoSeed !== undefined) {
      obj.geqoSeed = message.geqoSeed;
    }
    if (message.pgTrgmSimilarityThreshold !== undefined) {
      obj.pgTrgmSimilarityThreshold = message.pgTrgmSimilarityThreshold;
    }
    if (message.pgTrgmWordSimilarityThreshold !== undefined) {
      obj.pgTrgmWordSimilarityThreshold = message.pgTrgmWordSimilarityThreshold;
    }
    if (message.pgTrgmStrictWordSimilarityThreshold !== undefined) {
      obj.pgTrgmStrictWordSimilarityThreshold = message.pgTrgmStrictWordSimilarityThreshold;
    }
    if (message.maxStandbyArchiveDelay !== undefined) {
      obj.maxStandbyArchiveDelay = message.maxStandbyArchiveDelay;
    }
    if (message.sessionDurationTimeout !== undefined) {
      obj.sessionDurationTimeout = message.sessionDurationTimeout;
    }
    if (message.logReplicationCommands !== undefined) {
      obj.logReplicationCommands = message.logReplicationCommands;
    }
    if (message.logAutovacuumMinDuration !== undefined) {
      obj.logAutovacuumMinDuration = message.logAutovacuumMinDuration;
    }
    return obj;
  },

  create(base?: DeepPartial<PostgresqlConfig161C>): PostgresqlConfig161C {
    return PostgresqlConfig161C.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PostgresqlConfig161C>): PostgresqlConfig161C {
    const message = createBasePostgresqlConfig161C();
    message.maxConnections = object.maxConnections ?? undefined;
    message.sharedBuffers = object.sharedBuffers ?? undefined;
    message.tempBuffers = object.tempBuffers ?? undefined;
    message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
    message.workMem = object.workMem ?? undefined;
    message.maintenanceWorkMem = object.maintenanceWorkMem ?? undefined;
    message.autovacuumWorkMem = object.autovacuumWorkMem ?? undefined;
    message.tempFileLimit = object.tempFileLimit ?? undefined;
    message.vacuumCostDelay = object.vacuumCostDelay ?? undefined;
    message.vacuumCostPageHit = object.vacuumCostPageHit ?? undefined;
    message.vacuumCostPageMiss = object.vacuumCostPageMiss ?? undefined;
    message.vacuumCostPageDirty = object.vacuumCostPageDirty ?? undefined;
    message.vacuumCostLimit = object.vacuumCostLimit ?? undefined;
    message.bgwriterDelay = object.bgwriterDelay ?? undefined;
    message.bgwriterLruMaxpages = object.bgwriterLruMaxpages ?? undefined;
    message.bgwriterLruMultiplier = object.bgwriterLruMultiplier ?? undefined;
    message.bgwriterFlushAfter = object.bgwriterFlushAfter ?? undefined;
    message.backendFlushAfter = object.backendFlushAfter ?? undefined;
    message.oldSnapshotThreshold = object.oldSnapshotThreshold ?? undefined;
    message.walLevel = object.walLevel ?? 0;
    message.synchronousCommit = object.synchronousCommit ?? 0;
    message.checkpointTimeout = object.checkpointTimeout ?? undefined;
    message.checkpointCompletionTarget = object.checkpointCompletionTarget ?? undefined;
    message.checkpointFlushAfter = object.checkpointFlushAfter ?? undefined;
    message.maxWalSize = object.maxWalSize ?? undefined;
    message.minWalSize = object.minWalSize ?? undefined;
    message.maxStandbyStreamingDelay = object.maxStandbyStreamingDelay ?? undefined;
    message.defaultStatisticsTarget = object.defaultStatisticsTarget ?? undefined;
    message.constraintExclusion = object.constraintExclusion ?? 0;
    message.cursorTupleFraction = object.cursorTupleFraction ?? undefined;
    message.fromCollapseLimit = object.fromCollapseLimit ?? undefined;
    message.joinCollapseLimit = object.joinCollapseLimit ?? undefined;
    message.debugParallelQuery = object.debugParallelQuery ?? 0;
    message.clientMinMessages = object.clientMinMessages ?? 0;
    message.logMinMessages = object.logMinMessages ?? 0;
    message.logMinErrorStatement = object.logMinErrorStatement ?? 0;
    message.logMinDurationStatement = object.logMinDurationStatement ?? undefined;
    message.logCheckpoints = object.logCheckpoints ?? undefined;
    message.logConnections = object.logConnections ?? undefined;
    message.logDisconnections = object.logDisconnections ?? undefined;
    message.logDuration = object.logDuration ?? undefined;
    message.logErrorVerbosity = object.logErrorVerbosity ?? 0;
    message.logLockWaits = object.logLockWaits ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.logTempFiles = object.logTempFiles ?? undefined;
    message.searchPath = object.searchPath ?? "";
    message.rowSecurity = object.rowSecurity ?? undefined;
    message.defaultTransactionIsolation = object.defaultTransactionIsolation ?? 0;
    message.statementTimeout = object.statementTimeout ?? undefined;
    message.lockTimeout = object.lockTimeout ?? undefined;
    message.idleInTransactionSessionTimeout = object.idleInTransactionSessionTimeout ?? undefined;
    message.byteaOutput = object.byteaOutput ?? 0;
    message.xmlbinary = object.xmlbinary ?? 0;
    message.xmloption = object.xmloption ?? 0;
    message.ginPendingListLimit = object.ginPendingListLimit ?? undefined;
    message.deadlockTimeout = object.deadlockTimeout ?? undefined;
    message.maxLocksPerTransaction = object.maxLocksPerTransaction ?? undefined;
    message.maxPredLocksPerTransaction = object.maxPredLocksPerTransaction ?? undefined;
    message.arrayNulls = object.arrayNulls ?? undefined;
    message.backslashQuote = object.backslashQuote ?? 0;
    message.defaultWithOids = object.defaultWithOids ?? undefined;
    message.escapeStringWarning = object.escapeStringWarning ?? undefined;
    message.loCompatPrivileges = object.loCompatPrivileges ?? undefined;
    message.quoteAllIdentifiers = object.quoteAllIdentifiers ?? undefined;
    message.standardConformingStrings = object.standardConformingStrings ?? undefined;
    message.synchronizeSeqscans = object.synchronizeSeqscans ?? undefined;
    message.transformNullEquals = object.transformNullEquals ?? undefined;
    message.exitOnError = object.exitOnError ?? undefined;
    message.seqPageCost = object.seqPageCost ?? undefined;
    message.randomPageCost = object.randomPageCost ?? undefined;
    message.autovacuumMaxWorkers = object.autovacuumMaxWorkers ?? undefined;
    message.autovacuumVacuumCostDelay = object.autovacuumVacuumCostDelay ?? undefined;
    message.autovacuumVacuumCostLimit = object.autovacuumVacuumCostLimit ?? undefined;
    message.autovacuumNaptime = object.autovacuumNaptime ?? undefined;
    message.archiveTimeout = object.archiveTimeout ?? undefined;
    message.trackActivityQuerySize = object.trackActivityQuerySize ?? undefined;
    message.onlineAnalyzeEnable = object.onlineAnalyzeEnable ?? undefined;
    message.enableBitmapscan = object.enableBitmapscan ?? undefined;
    message.enableHashagg = object.enableHashagg ?? undefined;
    message.enableHashjoin = object.enableHashjoin ?? undefined;
    message.enableIndexscan = object.enableIndexscan ?? undefined;
    message.enableIndexonlyscan = object.enableIndexonlyscan ?? undefined;
    message.enableMaterial = object.enableMaterial ?? undefined;
    message.enableMergejoin = object.enableMergejoin ?? undefined;
    message.enableNestloop = object.enableNestloop ?? undefined;
    message.enableSeqscan = object.enableSeqscan ?? undefined;
    message.enableSort = object.enableSort ?? undefined;
    message.enableTidscan = object.enableTidscan ?? undefined;
    message.maxWorkerProcesses = object.maxWorkerProcesses ?? undefined;
    message.maxParallelWorkers = object.maxParallelWorkers ?? undefined;
    message.maxParallelWorkersPerGather = object.maxParallelWorkersPerGather ?? undefined;
    message.autovacuumVacuumScaleFactor = object.autovacuumVacuumScaleFactor ?? undefined;
    message.autovacuumAnalyzeScaleFactor = object.autovacuumAnalyzeScaleFactor ?? undefined;
    message.defaultTransactionReadOnly = object.defaultTransactionReadOnly ?? undefined;
    message.timezone = object.timezone ?? "";
    message.enableParallelAppend = object.enableParallelAppend ?? undefined;
    message.enableParallelHash = object.enableParallelHash ?? undefined;
    message.enablePartitionPruning = object.enablePartitionPruning ?? undefined;
    message.enablePartitionwiseAggregate = object.enablePartitionwiseAggregate ?? undefined;
    message.enablePartitionwiseJoin = object.enablePartitionwiseJoin ?? undefined;
    message.jit = object.jit ?? undefined;
    message.maxParallelMaintenanceWorkers = object.maxParallelMaintenanceWorkers ?? undefined;
    message.parallelLeaderParticipation = object.parallelLeaderParticipation ?? undefined;
    message.logTransactionSampleRate = object.logTransactionSampleRate ?? undefined;
    message.planCacheMode = object.planCacheMode ?? 0;
    message.effectiveIoConcurrency = object.effectiveIoConcurrency ?? undefined;
    message.effectiveCacheSize = object.effectiveCacheSize ?? undefined;
    message.sharedPreloadLibraries = object.sharedPreloadLibraries?.map((e) => e) || [];
    message.autoExplainLogMinDuration = object.autoExplainLogMinDuration ?? undefined;
    message.autoExplainLogAnalyze = object.autoExplainLogAnalyze ?? undefined;
    message.autoExplainLogBuffers = object.autoExplainLogBuffers ?? undefined;
    message.autoExplainLogTiming = object.autoExplainLogTiming ?? undefined;
    message.autoExplainLogTriggers = object.autoExplainLogTriggers ?? undefined;
    message.autoExplainLogVerbose = object.autoExplainLogVerbose ?? undefined;
    message.autoExplainLogNestedStatements = object.autoExplainLogNestedStatements ?? undefined;
    message.autoExplainSampleRate = object.autoExplainSampleRate ?? undefined;
    message.pgHintPlanEnableHint = object.pgHintPlanEnableHint ?? undefined;
    message.pgHintPlanEnableHintTable = object.pgHintPlanEnableHintTable ?? undefined;
    message.pgHintPlanDebugPrint = object.pgHintPlanDebugPrint ?? 0;
    message.pgHintPlanMessageLevel = object.pgHintPlanMessageLevel ?? 0;
    message.hashMemMultiplier = object.hashMemMultiplier ?? undefined;
    message.logicalDecodingWorkMem = object.logicalDecodingWorkMem ?? undefined;
    message.maintenanceIoConcurrency = object.maintenanceIoConcurrency ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.walKeepSize = object.walKeepSize ?? undefined;
    message.enableIncrementalSort = object.enableIncrementalSort ?? undefined;
    message.autovacuumVacuumInsertThreshold = object.autovacuumVacuumInsertThreshold ?? undefined;
    message.autovacuumVacuumInsertScaleFactor = object.autovacuumVacuumInsertScaleFactor ?? undefined;
    message.logMinDurationSample = object.logMinDurationSample ?? undefined;
    message.logStatementSampleRate = object.logStatementSampleRate ?? undefined;
    message.logParameterMaxLength = object.logParameterMaxLength ?? undefined;
    message.logParameterMaxLengthOnError = object.logParameterMaxLengthOnError ?? undefined;
    message.clientConnectionCheckInterval = object.clientConnectionCheckInterval ?? undefined;
    message.enableAsyncAppend = object.enableAsyncAppend ?? undefined;
    message.enableGathermerge = object.enableGathermerge ?? undefined;
    message.enableMemoize = object.enableMemoize ?? undefined;
    message.logRecoveryConflictWaits = object.logRecoveryConflictWaits ?? undefined;
    message.vacuumFailsafeAge = object.vacuumFailsafeAge ?? undefined;
    message.vacuumMultixactFailsafeAge = object.vacuumMultixactFailsafeAge ?? undefined;
    message.pgQualstatsEnabled = object.pgQualstatsEnabled ?? undefined;
    message.pgQualstatsTrackConstants = object.pgQualstatsTrackConstants ?? undefined;
    message.pgQualstatsMax = object.pgQualstatsMax ?? undefined;
    message.pgQualstatsResolveOids = object.pgQualstatsResolveOids ?? undefined;
    message.pgQualstatsSampleRate = object.pgQualstatsSampleRate ?? undefined;
    message.plantunerFixEmptyTable = object.plantunerFixEmptyTable ?? undefined;
    message.maxStackDepth = object.maxStackDepth ?? undefined;
    message.enableGroupByReordering = object.enableGroupByReordering ?? undefined;
    message.geqo = object.geqo ?? undefined;
    message.geqoThreshold = object.geqoThreshold ?? undefined;
    message.geqoEffort = object.geqoEffort ?? undefined;
    message.geqoPoolSize = object.geqoPoolSize ?? undefined;
    message.geqoGenerations = object.geqoGenerations ?? undefined;
    message.geqoSelectionBias = object.geqoSelectionBias ?? undefined;
    message.geqoSeed = object.geqoSeed ?? undefined;
    message.pgTrgmSimilarityThreshold = object.pgTrgmSimilarityThreshold ?? undefined;
    message.pgTrgmWordSimilarityThreshold = object.pgTrgmWordSimilarityThreshold ?? undefined;
    message.pgTrgmStrictWordSimilarityThreshold = object.pgTrgmStrictWordSimilarityThreshold ?? undefined;
    message.maxStandbyArchiveDelay = object.maxStandbyArchiveDelay ?? undefined;
    message.sessionDurationTimeout = object.sessionDurationTimeout ?? undefined;
    message.logReplicationCommands = object.logReplicationCommands ?? undefined;
    message.logAutovacuumMinDuration = object.logAutovacuumMinDuration ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PostgresqlConfig161C.$type, PostgresqlConfig161C);

function createBasePostgresqlConfigSet161C(): PostgresqlConfigSet161C {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet16_1C",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const PostgresqlConfigSet161C = {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet16_1C" as const,

  encode(message: PostgresqlConfigSet161C, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      PostgresqlConfig161C.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      PostgresqlConfig161C.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      PostgresqlConfig161C.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlConfigSet161C {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostgresqlConfigSet161C();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = PostgresqlConfig161C.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = PostgresqlConfig161C.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = PostgresqlConfig161C.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostgresqlConfigSet161C {
    return {
      $type: PostgresqlConfigSet161C.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? PostgresqlConfig161C.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? PostgresqlConfig161C.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? PostgresqlConfig161C.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: PostgresqlConfigSet161C): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = PostgresqlConfig161C.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = PostgresqlConfig161C.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = PostgresqlConfig161C.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<PostgresqlConfigSet161C>): PostgresqlConfigSet161C {
    return PostgresqlConfigSet161C.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PostgresqlConfigSet161C>): PostgresqlConfigSet161C {
    const message = createBasePostgresqlConfigSet161C();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? PostgresqlConfig161C.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? PostgresqlConfig161C.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? PostgresqlConfig161C.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PostgresqlConfigSet161C.$type, PostgresqlConfigSet161C);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
