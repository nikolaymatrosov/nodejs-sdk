/* eslint-disable */
import { BoolValue, DoubleValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";

/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/9.6/static/runtime-config).
 */
export interface PostgresqlConfig96 {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6";
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
  maintenanceWorkMem?: number | undefined;
  replacementSortTuples?:
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
  walLevel: PostgresqlConfig96_WalLevel;
  synchronousCommit: PostgresqlConfig96_SynchronousCommit;
  /** in milliseconds. */
  checkpointTimeout?:
    | number
    | undefined;
  /** Acceptable values are 0.0 to 1.0, inclusive. */
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
  constraintExclusion: PostgresqlConfig96_ConstraintExclusion;
  cursorTupleFraction?: number | undefined;
  fromCollapseLimit?: number | undefined;
  joinCollapseLimit?: number | undefined;
  forceParallelMode: PostgresqlConfig96_ForceParallelMode;
  clientMinMessages: PostgresqlConfig96_LogLevel;
  logMinMessages: PostgresqlConfig96_LogLevel;
  logMinErrorStatement: PostgresqlConfig96_LogLevel;
  /** in milliseconds. */
  logMinDurationStatement?: number | undefined;
  logCheckpoints?: boolean | undefined;
  logConnections?: boolean | undefined;
  logDisconnections?: boolean | undefined;
  logDuration?: boolean | undefined;
  logErrorVerbosity: PostgresqlConfig96_LogErrorVerbosity;
  logLockWaits?: boolean | undefined;
  logStatement: PostgresqlConfig96_LogStatement;
  logTempFiles?: number | undefined;
  searchPath: string;
  rowSecurity?: boolean | undefined;
  defaultTransactionIsolation: PostgresqlConfig96_TransactionIsolation;
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
  byteaOutput: PostgresqlConfig96_ByteaOutput;
  xmlbinary: PostgresqlConfig96_XmlBinary;
  xmloption: PostgresqlConfig96_XmlOption;
  /** in bytes. */
  ginPendingListLimit?:
    | number
    | undefined;
  /** in milliseconds. */
  deadlockTimeout?: number | undefined;
  maxLocksPerTransaction?: number | undefined;
  maxPredLocksPerTransaction?: number | undefined;
  arrayNulls?: boolean | undefined;
  backslashQuote: PostgresqlConfig96_BackslashQuote;
  defaultWithOids?: boolean | undefined;
  escapeStringWarning?: boolean | undefined;
  loCompatPrivileges?: boolean | undefined;
  operatorPrecedenceWarning?: boolean | undefined;
  quoteAllIdentifiers?: boolean | undefined;
  standardConformingStrings?: boolean | undefined;
  synchronizeSeqscans?: boolean | undefined;
  transformNullEquals?: boolean | undefined;
  exitOnError?: boolean | undefined;
  seqPageCost?: number | undefined;
  randomPageCost?:
    | number
    | undefined;
  /** This option has been removed in PostgreSQL 10. */
  sqlInheritance?: boolean | undefined;
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
  effectiveIoConcurrency?: number | undefined;
  effectiveCacheSize?: number | undefined;
}

export enum PostgresqlConfig96_WalLevel {
  WAL_LEVEL_UNSPECIFIED = 0,
  WAL_LEVEL_REPLICA = 1,
  WAL_LEVEL_LOGICAL = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_WalLevelFromJSON(object: any): PostgresqlConfig96_WalLevel {
  switch (object) {
    case 0:
    case "WAL_LEVEL_UNSPECIFIED":
      return PostgresqlConfig96_WalLevel.WAL_LEVEL_UNSPECIFIED;
    case 1:
    case "WAL_LEVEL_REPLICA":
      return PostgresqlConfig96_WalLevel.WAL_LEVEL_REPLICA;
    case 2:
    case "WAL_LEVEL_LOGICAL":
      return PostgresqlConfig96_WalLevel.WAL_LEVEL_LOGICAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_WalLevel.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_WalLevelToJSON(object: PostgresqlConfig96_WalLevel): string {
  switch (object) {
    case PostgresqlConfig96_WalLevel.WAL_LEVEL_UNSPECIFIED:
      return "WAL_LEVEL_UNSPECIFIED";
    case PostgresqlConfig96_WalLevel.WAL_LEVEL_REPLICA:
      return "WAL_LEVEL_REPLICA";
    case PostgresqlConfig96_WalLevel.WAL_LEVEL_LOGICAL:
      return "WAL_LEVEL_LOGICAL";
    case PostgresqlConfig96_WalLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_SynchronousCommit {
  SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
  SYNCHRONOUS_COMMIT_ON = 1,
  SYNCHRONOUS_COMMIT_OFF = 2,
  SYNCHRONOUS_COMMIT_LOCAL = 3,
  SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
  SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_SynchronousCommitFromJSON(object: any): PostgresqlConfig96_SynchronousCommit {
  switch (object) {
    case 0:
    case "SYNCHRONOUS_COMMIT_UNSPECIFIED":
      return PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
    case 1:
    case "SYNCHRONOUS_COMMIT_ON":
      return PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
    case 2:
    case "SYNCHRONOUS_COMMIT_OFF":
      return PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
    case 3:
    case "SYNCHRONOUS_COMMIT_LOCAL":
      return PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
    case 4:
    case "SYNCHRONOUS_COMMIT_REMOTE_WRITE":
      return PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
    case 5:
    case "SYNCHRONOUS_COMMIT_REMOTE_APPLY":
      return PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_SynchronousCommit.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_SynchronousCommitToJSON(object: PostgresqlConfig96_SynchronousCommit): string {
  switch (object) {
    case PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
      return "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    case PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
      return "SYNCHRONOUS_COMMIT_ON";
    case PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
      return "SYNCHRONOUS_COMMIT_OFF";
    case PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
      return "SYNCHRONOUS_COMMIT_LOCAL";
    case PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
      return "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    case PostgresqlConfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
      return "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    case PostgresqlConfig96_SynchronousCommit.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_ConstraintExclusion {
  CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
  CONSTRAINT_EXCLUSION_ON = 1,
  CONSTRAINT_EXCLUSION_OFF = 2,
  CONSTRAINT_EXCLUSION_PARTITION = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_ConstraintExclusionFromJSON(object: any): PostgresqlConfig96_ConstraintExclusion {
  switch (object) {
    case 0:
    case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
      return PostgresqlConfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
    case 1:
    case "CONSTRAINT_EXCLUSION_ON":
      return PostgresqlConfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
    case 2:
    case "CONSTRAINT_EXCLUSION_OFF":
      return PostgresqlConfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
    case 3:
    case "CONSTRAINT_EXCLUSION_PARTITION":
      return PostgresqlConfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_ConstraintExclusion.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_ConstraintExclusionToJSON(object: PostgresqlConfig96_ConstraintExclusion): string {
  switch (object) {
    case PostgresqlConfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
      return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    case PostgresqlConfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
      return "CONSTRAINT_EXCLUSION_ON";
    case PostgresqlConfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
      return "CONSTRAINT_EXCLUSION_OFF";
    case PostgresqlConfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
      return "CONSTRAINT_EXCLUSION_PARTITION";
    case PostgresqlConfig96_ConstraintExclusion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_ForceParallelMode {
  FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
  FORCE_PARALLEL_MODE_ON = 1,
  FORCE_PARALLEL_MODE_OFF = 2,
  FORCE_PARALLEL_MODE_REGRESS = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_ForceParallelModeFromJSON(object: any): PostgresqlConfig96_ForceParallelMode {
  switch (object) {
    case 0:
    case "FORCE_PARALLEL_MODE_UNSPECIFIED":
      return PostgresqlConfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
    case 1:
    case "FORCE_PARALLEL_MODE_ON":
      return PostgresqlConfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
    case 2:
    case "FORCE_PARALLEL_MODE_OFF":
      return PostgresqlConfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
    case 3:
    case "FORCE_PARALLEL_MODE_REGRESS":
      return PostgresqlConfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_ForceParallelMode.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_ForceParallelModeToJSON(object: PostgresqlConfig96_ForceParallelMode): string {
  switch (object) {
    case PostgresqlConfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
      return "FORCE_PARALLEL_MODE_UNSPECIFIED";
    case PostgresqlConfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
      return "FORCE_PARALLEL_MODE_ON";
    case PostgresqlConfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
      return "FORCE_PARALLEL_MODE_OFF";
    case PostgresqlConfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
      return "FORCE_PARALLEL_MODE_REGRESS";
    case PostgresqlConfig96_ForceParallelMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_LogLevel {
  LOG_LEVEL_UNSPECIFIED = 0,
  LOG_LEVEL_DEBUG5 = 1,
  LOG_LEVEL_DEBUG4 = 2,
  LOG_LEVEL_DEBUG3 = 3,
  LOG_LEVEL_DEBUG2 = 4,
  LOG_LEVEL_DEBUG1 = 5,
  LOG_LEVEL_LOG = 6,
  LOG_LEVEL_NOTICE = 7,
  LOG_LEVEL_WARNING = 8,
  LOG_LEVEL_ERROR = 9,
  LOG_LEVEL_FATAL = 10,
  LOG_LEVEL_PANIC = 11,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_LogLevelFromJSON(object: any): PostgresqlConfig96_LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "LOG_LEVEL_DEBUG5":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG5;
    case 2:
    case "LOG_LEVEL_DEBUG4":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG4;
    case 3:
    case "LOG_LEVEL_DEBUG3":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG3;
    case 4:
    case "LOG_LEVEL_DEBUG2":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG2;
    case 5:
    case "LOG_LEVEL_DEBUG1":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG1;
    case 6:
    case "LOG_LEVEL_LOG":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_LOG;
    case 7:
    case "LOG_LEVEL_NOTICE":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_NOTICE;
    case 8:
    case "LOG_LEVEL_WARNING":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_WARNING;
    case 9:
    case "LOG_LEVEL_ERROR":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_ERROR;
    case 10:
    case "LOG_LEVEL_FATAL":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_FATAL;
    case 11:
    case "LOG_LEVEL_PANIC":
      return PostgresqlConfig96_LogLevel.LOG_LEVEL_PANIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_LogLevel.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_LogLevelToJSON(object: PostgresqlConfig96_LogLevel): string {
  switch (object) {
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG5:
      return "LOG_LEVEL_DEBUG5";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG4:
      return "LOG_LEVEL_DEBUG4";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG3:
      return "LOG_LEVEL_DEBUG3";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG2:
      return "LOG_LEVEL_DEBUG2";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_DEBUG1:
      return "LOG_LEVEL_DEBUG1";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_LOG:
      return "LOG_LEVEL_LOG";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_NOTICE:
      return "LOG_LEVEL_NOTICE";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_WARNING:
      return "LOG_LEVEL_WARNING";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_ERROR:
      return "LOG_LEVEL_ERROR";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_FATAL:
      return "LOG_LEVEL_FATAL";
    case PostgresqlConfig96_LogLevel.LOG_LEVEL_PANIC:
      return "LOG_LEVEL_PANIC";
    case PostgresqlConfig96_LogLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_LogErrorVerbosity {
  LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
  LOG_ERROR_VERBOSITY_TERSE = 1,
  LOG_ERROR_VERBOSITY_DEFAULT = 2,
  LOG_ERROR_VERBOSITY_VERBOSE = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_LogErrorVerbosityFromJSON(object: any): PostgresqlConfig96_LogErrorVerbosity {
  switch (object) {
    case 0:
    case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
      return PostgresqlConfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
    case 1:
    case "LOG_ERROR_VERBOSITY_TERSE":
      return PostgresqlConfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
    case 2:
    case "LOG_ERROR_VERBOSITY_DEFAULT":
      return PostgresqlConfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
    case 3:
    case "LOG_ERROR_VERBOSITY_VERBOSE":
      return PostgresqlConfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_LogErrorVerbosity.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_LogErrorVerbosityToJSON(object: PostgresqlConfig96_LogErrorVerbosity): string {
  switch (object) {
    case PostgresqlConfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
      return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    case PostgresqlConfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
      return "LOG_ERROR_VERBOSITY_TERSE";
    case PostgresqlConfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
      return "LOG_ERROR_VERBOSITY_DEFAULT";
    case PostgresqlConfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
      return "LOG_ERROR_VERBOSITY_VERBOSE";
    case PostgresqlConfig96_LogErrorVerbosity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_LogStatement {
  LOG_STATEMENT_UNSPECIFIED = 0,
  LOG_STATEMENT_NONE = 1,
  LOG_STATEMENT_DDL = 2,
  LOG_STATEMENT_MOD = 3,
  LOG_STATEMENT_ALL = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_LogStatementFromJSON(object: any): PostgresqlConfig96_LogStatement {
  switch (object) {
    case 0:
    case "LOG_STATEMENT_UNSPECIFIED":
      return PostgresqlConfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED;
    case 1:
    case "LOG_STATEMENT_NONE":
      return PostgresqlConfig96_LogStatement.LOG_STATEMENT_NONE;
    case 2:
    case "LOG_STATEMENT_DDL":
      return PostgresqlConfig96_LogStatement.LOG_STATEMENT_DDL;
    case 3:
    case "LOG_STATEMENT_MOD":
      return PostgresqlConfig96_LogStatement.LOG_STATEMENT_MOD;
    case 4:
    case "LOG_STATEMENT_ALL":
      return PostgresqlConfig96_LogStatement.LOG_STATEMENT_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_LogStatement.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_LogStatementToJSON(object: PostgresqlConfig96_LogStatement): string {
  switch (object) {
    case PostgresqlConfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED:
      return "LOG_STATEMENT_UNSPECIFIED";
    case PostgresqlConfig96_LogStatement.LOG_STATEMENT_NONE:
      return "LOG_STATEMENT_NONE";
    case PostgresqlConfig96_LogStatement.LOG_STATEMENT_DDL:
      return "LOG_STATEMENT_DDL";
    case PostgresqlConfig96_LogStatement.LOG_STATEMENT_MOD:
      return "LOG_STATEMENT_MOD";
    case PostgresqlConfig96_LogStatement.LOG_STATEMENT_ALL:
      return "LOG_STATEMENT_ALL";
    case PostgresqlConfig96_LogStatement.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_TransactionIsolation {
  TRANSACTION_ISOLATION_UNSPECIFIED = 0,
  TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
  TRANSACTION_ISOLATION_READ_COMMITTED = 2,
  TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
  TRANSACTION_ISOLATION_SERIALIZABLE = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_TransactionIsolationFromJSON(object: any): PostgresqlConfig96_TransactionIsolation {
  switch (object) {
    case 0:
    case "TRANSACTION_ISOLATION_UNSPECIFIED":
      return PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
    case 1:
    case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
      return PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
    case 2:
    case "TRANSACTION_ISOLATION_READ_COMMITTED":
      return PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
    case 3:
    case "TRANSACTION_ISOLATION_REPEATABLE_READ":
      return PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
    case 4:
    case "TRANSACTION_ISOLATION_SERIALIZABLE":
      return PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_TransactionIsolation.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_TransactionIsolationToJSON(object: PostgresqlConfig96_TransactionIsolation): string {
  switch (object) {
    case PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
      return "TRANSACTION_ISOLATION_UNSPECIFIED";
    case PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
      return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    case PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
      return "TRANSACTION_ISOLATION_READ_COMMITTED";
    case PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
      return "TRANSACTION_ISOLATION_REPEATABLE_READ";
    case PostgresqlConfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
      return "TRANSACTION_ISOLATION_SERIALIZABLE";
    case PostgresqlConfig96_TransactionIsolation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_ByteaOutput {
  BYTEA_OUTPUT_UNSPECIFIED = 0,
  BYTEA_OUTPUT_HEX = 1,
  BYTEA_OUTPUT_ESCAPED = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_ByteaOutputFromJSON(object: any): PostgresqlConfig96_ByteaOutput {
  switch (object) {
    case 0:
    case "BYTEA_OUTPUT_UNSPECIFIED":
      return PostgresqlConfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
    case 1:
    case "BYTEA_OUTPUT_HEX":
      return PostgresqlConfig96_ByteaOutput.BYTEA_OUTPUT_HEX;
    case 2:
    case "BYTEA_OUTPUT_ESCAPED":
      return PostgresqlConfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_ByteaOutput.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_ByteaOutputToJSON(object: PostgresqlConfig96_ByteaOutput): string {
  switch (object) {
    case PostgresqlConfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
      return "BYTEA_OUTPUT_UNSPECIFIED";
    case PostgresqlConfig96_ByteaOutput.BYTEA_OUTPUT_HEX:
      return "BYTEA_OUTPUT_HEX";
    case PostgresqlConfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
      return "BYTEA_OUTPUT_ESCAPED";
    case PostgresqlConfig96_ByteaOutput.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_XmlBinary {
  XML_BINARY_UNSPECIFIED = 0,
  XML_BINARY_BASE64 = 1,
  XML_BINARY_HEX = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_XmlBinaryFromJSON(object: any): PostgresqlConfig96_XmlBinary {
  switch (object) {
    case 0:
    case "XML_BINARY_UNSPECIFIED":
      return PostgresqlConfig96_XmlBinary.XML_BINARY_UNSPECIFIED;
    case 1:
    case "XML_BINARY_BASE64":
      return PostgresqlConfig96_XmlBinary.XML_BINARY_BASE64;
    case 2:
    case "XML_BINARY_HEX":
      return PostgresqlConfig96_XmlBinary.XML_BINARY_HEX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_XmlBinary.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_XmlBinaryToJSON(object: PostgresqlConfig96_XmlBinary): string {
  switch (object) {
    case PostgresqlConfig96_XmlBinary.XML_BINARY_UNSPECIFIED:
      return "XML_BINARY_UNSPECIFIED";
    case PostgresqlConfig96_XmlBinary.XML_BINARY_BASE64:
      return "XML_BINARY_BASE64";
    case PostgresqlConfig96_XmlBinary.XML_BINARY_HEX:
      return "XML_BINARY_HEX";
    case PostgresqlConfig96_XmlBinary.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_XmlOption {
  XML_OPTION_UNSPECIFIED = 0,
  XML_OPTION_DOCUMENT = 1,
  XML_OPTION_CONTENT = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_XmlOptionFromJSON(object: any): PostgresqlConfig96_XmlOption {
  switch (object) {
    case 0:
    case "XML_OPTION_UNSPECIFIED":
      return PostgresqlConfig96_XmlOption.XML_OPTION_UNSPECIFIED;
    case 1:
    case "XML_OPTION_DOCUMENT":
      return PostgresqlConfig96_XmlOption.XML_OPTION_DOCUMENT;
    case 2:
    case "XML_OPTION_CONTENT":
      return PostgresqlConfig96_XmlOption.XML_OPTION_CONTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_XmlOption.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_XmlOptionToJSON(object: PostgresqlConfig96_XmlOption): string {
  switch (object) {
    case PostgresqlConfig96_XmlOption.XML_OPTION_UNSPECIFIED:
      return "XML_OPTION_UNSPECIFIED";
    case PostgresqlConfig96_XmlOption.XML_OPTION_DOCUMENT:
      return "XML_OPTION_DOCUMENT";
    case PostgresqlConfig96_XmlOption.XML_OPTION_CONTENT:
      return "XML_OPTION_CONTENT";
    case PostgresqlConfig96_XmlOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlConfig96_BackslashQuote {
  BACKSLASH_QUOTE_UNSPECIFIED = 0,
  BACKSLASH_QUOTE = 1,
  BACKSLASH_QUOTE_ON = 2,
  BACKSLASH_QUOTE_OFF = 3,
  BACKSLASH_QUOTE_SAFE_ENCODING = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlConfig96_BackslashQuoteFromJSON(object: any): PostgresqlConfig96_BackslashQuote {
  switch (object) {
    case 0:
    case "BACKSLASH_QUOTE_UNSPECIFIED":
      return PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
    case 1:
    case "BACKSLASH_QUOTE":
      return PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE;
    case 2:
    case "BACKSLASH_QUOTE_ON":
      return PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE_ON;
    case 3:
    case "BACKSLASH_QUOTE_OFF":
      return PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE_OFF;
    case 4:
    case "BACKSLASH_QUOTE_SAFE_ENCODING":
      return PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlConfig96_BackslashQuote.UNRECOGNIZED;
  }
}

export function postgresqlConfig96_BackslashQuoteToJSON(object: PostgresqlConfig96_BackslashQuote): string {
  switch (object) {
    case PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
      return "BACKSLASH_QUOTE_UNSPECIFIED";
    case PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE:
      return "BACKSLASH_QUOTE";
    case PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE_ON:
      return "BACKSLASH_QUOTE_ON";
    case PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE_OFF:
      return "BACKSLASH_QUOTE_OFF";
    case PostgresqlConfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
      return "BACKSLASH_QUOTE_SAFE_ENCODING";
    case PostgresqlConfig96_BackslashQuote.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PostgresqlConfigSet96 {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6";
  /**
   * Effective settings for a PostgreSQL 9.6 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?:
    | PostgresqlConfig96
    | undefined;
  /** User-defined settings for a PostgreSQL 9.6 cluster. */
  userConfig?:
    | PostgresqlConfig96
    | undefined;
  /** Default configuration for a PostgreSQL 9.6 cluster. */
  defaultConfig?: PostgresqlConfig96 | undefined;
}

function createBasePostgresqlConfig96(): PostgresqlConfig96 {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6",
    maxConnections: undefined,
    sharedBuffers: undefined,
    tempBuffers: undefined,
    maxPreparedTransactions: undefined,
    workMem: undefined,
    maintenanceWorkMem: undefined,
    replacementSortTuples: undefined,
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
    forceParallelMode: 0,
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
    operatorPrecedenceWarning: undefined,
    quoteAllIdentifiers: undefined,
    standardConformingStrings: undefined,
    synchronizeSeqscans: undefined,
    transformNullEquals: undefined,
    exitOnError: undefined,
    seqPageCost: undefined,
    randomPageCost: undefined,
    sqlInheritance: undefined,
    autovacuumMaxWorkers: undefined,
    autovacuumVacuumCostDelay: undefined,
    autovacuumVacuumCostLimit: undefined,
    autovacuumNaptime: undefined,
    archiveTimeout: undefined,
    trackActivityQuerySize: undefined,
    effectiveIoConcurrency: undefined,
    effectiveCacheSize: undefined,
  };
}

export const PostgresqlConfig96 = {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6" as const,

  encode(message: PostgresqlConfig96, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.replacementSortTuples !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replacementSortTuples! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.autovacuumWorkMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumWorkMem! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.tempFileLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tempFileLimit! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.vacuumCostDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostDelay! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.vacuumCostPageHit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostPageHit! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.vacuumCostPageMiss !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostPageMiss! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.vacuumCostPageDirty !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostPageDirty! },
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.vacuumCostLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumCostLimit! },
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.bgwriterDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.bgwriterDelay! },
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.bgwriterLruMaxpages !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.bgwriterLruMaxpages! },
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.bgwriterLruMultiplier !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.bgwriterLruMultiplier! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.bgwriterFlushAfter !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.bgwriterFlushAfter! },
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.backendFlushAfter !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backendFlushAfter! },
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.oldSnapshotThreshold !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.oldSnapshotThreshold! },
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.walLevel !== 0) {
      writer.uint32(168).int32(message.walLevel);
    }
    if (message.synchronousCommit !== 0) {
      writer.uint32(176).int32(message.synchronousCommit);
    }
    if (message.checkpointTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.checkpointTimeout! },
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.checkpointCompletionTarget !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.checkpointCompletionTarget! },
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.checkpointFlushAfter !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.checkpointFlushAfter! },
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.maxWalSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxWalSize! }, writer.uint32(210).fork())
        .ldelim();
    }
    if (message.minWalSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.minWalSize! }, writer.uint32(218).fork())
        .ldelim();
    }
    if (message.maxStandbyStreamingDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStandbyStreamingDelay! },
        writer.uint32(226).fork(),
      ).ldelim();
    }
    if (message.defaultStatisticsTarget !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.defaultStatisticsTarget! },
        writer.uint32(234).fork(),
      ).ldelim();
    }
    if (message.constraintExclusion !== 0) {
      writer.uint32(240).int32(message.constraintExclusion);
    }
    if (message.cursorTupleFraction !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.cursorTupleFraction! },
        writer.uint32(250).fork(),
      ).ldelim();
    }
    if (message.fromCollapseLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fromCollapseLimit! },
        writer.uint32(258).fork(),
      ).ldelim();
    }
    if (message.joinCollapseLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.joinCollapseLimit! },
        writer.uint32(266).fork(),
      ).ldelim();
    }
    if (message.forceParallelMode !== 0) {
      writer.uint32(272).int32(message.forceParallelMode);
    }
    if (message.clientMinMessages !== 0) {
      writer.uint32(280).int32(message.clientMinMessages);
    }
    if (message.logMinMessages !== 0) {
      writer.uint32(288).int32(message.logMinMessages);
    }
    if (message.logMinErrorStatement !== 0) {
      writer.uint32(296).int32(message.logMinErrorStatement);
    }
    if (message.logMinDurationStatement !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logMinDurationStatement! },
        writer.uint32(306).fork(),
      ).ldelim();
    }
    if (message.logCheckpoints !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logCheckpoints! },
        writer.uint32(314).fork(),
      ).ldelim();
    }
    if (message.logConnections !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logConnections! },
        writer.uint32(322).fork(),
      ).ldelim();
    }
    if (message.logDisconnections !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logDisconnections! },
        writer.uint32(330).fork(),
      ).ldelim();
    }
    if (message.logDuration !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logDuration! }, writer.uint32(338).fork())
        .ldelim();
    }
    if (message.logErrorVerbosity !== 0) {
      writer.uint32(344).int32(message.logErrorVerbosity);
    }
    if (message.logLockWaits !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logLockWaits! }, writer.uint32(354).fork())
        .ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(360).int32(message.logStatement);
    }
    if (message.logTempFiles !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logTempFiles! },
        writer.uint32(370).fork(),
      ).ldelim();
    }
    if (message.searchPath !== "") {
      writer.uint32(378).string(message.searchPath);
    }
    if (message.rowSecurity !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.rowSecurity! }, writer.uint32(386).fork())
        .ldelim();
    }
    if (message.defaultTransactionIsolation !== 0) {
      writer.uint32(392).int32(message.defaultTransactionIsolation);
    }
    if (message.statementTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.statementTimeout! },
        writer.uint32(402).fork(),
      ).ldelim();
    }
    if (message.lockTimeout !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.lockTimeout! }, writer.uint32(410).fork())
        .ldelim();
    }
    if (message.idleInTransactionSessionTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.idleInTransactionSessionTimeout! },
        writer.uint32(418).fork(),
      ).ldelim();
    }
    if (message.byteaOutput !== 0) {
      writer.uint32(424).int32(message.byteaOutput);
    }
    if (message.xmlbinary !== 0) {
      writer.uint32(432).int32(message.xmlbinary);
    }
    if (message.xmloption !== 0) {
      writer.uint32(440).int32(message.xmloption);
    }
    if (message.ginPendingListLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.ginPendingListLimit! },
        writer.uint32(450).fork(),
      ).ldelim();
    }
    if (message.deadlockTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.deadlockTimeout! },
        writer.uint32(458).fork(),
      ).ldelim();
    }
    if (message.maxLocksPerTransaction !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxLocksPerTransaction! },
        writer.uint32(466).fork(),
      ).ldelim();
    }
    if (message.maxPredLocksPerTransaction !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPredLocksPerTransaction! },
        writer.uint32(474).fork(),
      ).ldelim();
    }
    if (message.arrayNulls !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.arrayNulls! }, writer.uint32(482).fork())
        .ldelim();
    }
    if (message.backslashQuote !== 0) {
      writer.uint32(488).int32(message.backslashQuote);
    }
    if (message.defaultWithOids !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.defaultWithOids! },
        writer.uint32(498).fork(),
      ).ldelim();
    }
    if (message.escapeStringWarning !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.escapeStringWarning! },
        writer.uint32(506).fork(),
      ).ldelim();
    }
    if (message.loCompatPrivileges !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.loCompatPrivileges! },
        writer.uint32(514).fork(),
      ).ldelim();
    }
    if (message.operatorPrecedenceWarning !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.operatorPrecedenceWarning! },
        writer.uint32(522).fork(),
      ).ldelim();
    }
    if (message.quoteAllIdentifiers !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.quoteAllIdentifiers! },
        writer.uint32(530).fork(),
      ).ldelim();
    }
    if (message.standardConformingStrings !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.standardConformingStrings! },
        writer.uint32(538).fork(),
      ).ldelim();
    }
    if (message.synchronizeSeqscans !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.synchronizeSeqscans! },
        writer.uint32(546).fork(),
      ).ldelim();
    }
    if (message.transformNullEquals !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.transformNullEquals! },
        writer.uint32(554).fork(),
      ).ldelim();
    }
    if (message.exitOnError !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.exitOnError! }, writer.uint32(562).fork())
        .ldelim();
    }
    if (message.seqPageCost !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.seqPageCost! },
        writer.uint32(570).fork(),
      ).ldelim();
    }
    if (message.randomPageCost !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.randomPageCost! },
        writer.uint32(578).fork(),
      ).ldelim();
    }
    if (message.sqlInheritance !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.sqlInheritance! },
        writer.uint32(586).fork(),
      ).ldelim();
    }
    if (message.autovacuumMaxWorkers !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumMaxWorkers! },
        writer.uint32(594).fork(),
      ).ldelim();
    }
    if (message.autovacuumVacuumCostDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumVacuumCostDelay! },
        writer.uint32(602).fork(),
      ).ldelim();
    }
    if (message.autovacuumVacuumCostLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumVacuumCostLimit! },
        writer.uint32(610).fork(),
      ).ldelim();
    }
    if (message.autovacuumNaptime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.autovacuumNaptime! },
        writer.uint32(618).fork(),
      ).ldelim();
    }
    if (message.archiveTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.archiveTimeout! },
        writer.uint32(626).fork(),
      ).ldelim();
    }
    if (message.trackActivityQuerySize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.trackActivityQuerySize! },
        writer.uint32(634).fork(),
      ).ldelim();
    }
    if (message.effectiveIoConcurrency !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.effectiveIoConcurrency! },
        writer.uint32(642).fork(),
      ).ldelim();
    }
    if (message.effectiveCacheSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.effectiveCacheSize! },
        writer.uint32(650).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlConfig96 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostgresqlConfig96();
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

          message.replacementSortTuples = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.autovacuumWorkMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.tempFileLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.vacuumCostDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.vacuumCostPageHit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.vacuumCostPageMiss = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.vacuumCostPageDirty = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.vacuumCostLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.bgwriterDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.bgwriterLruMaxpages = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.bgwriterLruMultiplier = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.bgwriterFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.backendFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.oldSnapshotThreshold = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.walLevel = reader.int32() as any;
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.synchronousCommit = reader.int32() as any;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.checkpointTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.checkpointCompletionTarget = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.checkpointFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.maxWalSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.minWalSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.maxStandbyStreamingDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.defaultStatisticsTarget = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.constraintExclusion = reader.int32() as any;
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.cursorTupleFraction = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.fromCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.joinCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.forceParallelMode = reader.int32() as any;
          continue;
        case 35:
          if (tag !== 280) {
            break;
          }

          message.clientMinMessages = reader.int32() as any;
          continue;
        case 36:
          if (tag !== 288) {
            break;
          }

          message.logMinMessages = reader.int32() as any;
          continue;
        case 37:
          if (tag !== 296) {
            break;
          }

          message.logMinErrorStatement = reader.int32() as any;
          continue;
        case 38:
          if (tag !== 306) {
            break;
          }

          message.logMinDurationStatement = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.logCheckpoints = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.logConnections = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.logDisconnections = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 42:
          if (tag !== 338) {
            break;
          }

          message.logDuration = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 43:
          if (tag !== 344) {
            break;
          }

          message.logErrorVerbosity = reader.int32() as any;
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.logLockWaits = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 45:
          if (tag !== 360) {
            break;
          }

          message.logStatement = reader.int32() as any;
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.logTempFiles = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 47:
          if (tag !== 378) {
            break;
          }

          message.searchPath = reader.string();
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          message.rowSecurity = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 49:
          if (tag !== 392) {
            break;
          }

          message.defaultTransactionIsolation = reader.int32() as any;
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.statementTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 51:
          if (tag !== 410) {
            break;
          }

          message.lockTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 52:
          if (tag !== 418) {
            break;
          }

          message.idleInTransactionSessionTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 53:
          if (tag !== 424) {
            break;
          }

          message.byteaOutput = reader.int32() as any;
          continue;
        case 54:
          if (tag !== 432) {
            break;
          }

          message.xmlbinary = reader.int32() as any;
          continue;
        case 55:
          if (tag !== 440) {
            break;
          }

          message.xmloption = reader.int32() as any;
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.ginPendingListLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.deadlockTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 58:
          if (tag !== 466) {
            break;
          }

          message.maxLocksPerTransaction = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 59:
          if (tag !== 474) {
            break;
          }

          message.maxPredLocksPerTransaction = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 60:
          if (tag !== 482) {
            break;
          }

          message.arrayNulls = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 61:
          if (tag !== 488) {
            break;
          }

          message.backslashQuote = reader.int32() as any;
          continue;
        case 62:
          if (tag !== 498) {
            break;
          }

          message.defaultWithOids = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 63:
          if (tag !== 506) {
            break;
          }

          message.escapeStringWarning = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 64:
          if (tag !== 514) {
            break;
          }

          message.loCompatPrivileges = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 65:
          if (tag !== 522) {
            break;
          }

          message.operatorPrecedenceWarning = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 66:
          if (tag !== 530) {
            break;
          }

          message.quoteAllIdentifiers = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 67:
          if (tag !== 538) {
            break;
          }

          message.standardConformingStrings = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 68:
          if (tag !== 546) {
            break;
          }

          message.synchronizeSeqscans = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 69:
          if (tag !== 554) {
            break;
          }

          message.transformNullEquals = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 70:
          if (tag !== 562) {
            break;
          }

          message.exitOnError = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 71:
          if (tag !== 570) {
            break;
          }

          message.seqPageCost = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 72:
          if (tag !== 578) {
            break;
          }

          message.randomPageCost = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 73:
          if (tag !== 586) {
            break;
          }

          message.sqlInheritance = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 74:
          if (tag !== 594) {
            break;
          }

          message.autovacuumMaxWorkers = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 75:
          if (tag !== 602) {
            break;
          }

          message.autovacuumVacuumCostDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 76:
          if (tag !== 610) {
            break;
          }

          message.autovacuumVacuumCostLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 77:
          if (tag !== 618) {
            break;
          }

          message.autovacuumNaptime = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 78:
          if (tag !== 626) {
            break;
          }

          message.archiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 79:
          if (tag !== 634) {
            break;
          }

          message.trackActivityQuerySize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 80:
          if (tag !== 642) {
            break;
          }

          message.effectiveIoConcurrency = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 81:
          if (tag !== 650) {
            break;
          }

          message.effectiveCacheSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostgresqlConfig96 {
    return {
      $type: PostgresqlConfig96.$type,
      maxConnections: isSet(object.maxConnections) ? Number(object.maxConnections) : undefined,
      sharedBuffers: isSet(object.sharedBuffers) ? Number(object.sharedBuffers) : undefined,
      tempBuffers: isSet(object.tempBuffers) ? Number(object.tempBuffers) : undefined,
      maxPreparedTransactions: isSet(object.maxPreparedTransactions)
        ? Number(object.maxPreparedTransactions)
        : undefined,
      workMem: isSet(object.workMem) ? Number(object.workMem) : undefined,
      maintenanceWorkMem: isSet(object.maintenanceWorkMem) ? Number(object.maintenanceWorkMem) : undefined,
      replacementSortTuples: isSet(object.replacementSortTuples) ? Number(object.replacementSortTuples) : undefined,
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
      walLevel: isSet(object.walLevel) ? postgresqlConfig96_WalLevelFromJSON(object.walLevel) : 0,
      synchronousCommit: isSet(object.synchronousCommit)
        ? postgresqlConfig96_SynchronousCommitFromJSON(object.synchronousCommit)
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
        ? postgresqlConfig96_ConstraintExclusionFromJSON(object.constraintExclusion)
        : 0,
      cursorTupleFraction: isSet(object.cursorTupleFraction) ? Number(object.cursorTupleFraction) : undefined,
      fromCollapseLimit: isSet(object.fromCollapseLimit) ? Number(object.fromCollapseLimit) : undefined,
      joinCollapseLimit: isSet(object.joinCollapseLimit) ? Number(object.joinCollapseLimit) : undefined,
      forceParallelMode: isSet(object.forceParallelMode)
        ? postgresqlConfig96_ForceParallelModeFromJSON(object.forceParallelMode)
        : 0,
      clientMinMessages: isSet(object.clientMinMessages)
        ? postgresqlConfig96_LogLevelFromJSON(object.clientMinMessages)
        : 0,
      logMinMessages: isSet(object.logMinMessages) ? postgresqlConfig96_LogLevelFromJSON(object.logMinMessages) : 0,
      logMinErrorStatement: isSet(object.logMinErrorStatement)
        ? postgresqlConfig96_LogLevelFromJSON(object.logMinErrorStatement)
        : 0,
      logMinDurationStatement: isSet(object.logMinDurationStatement)
        ? Number(object.logMinDurationStatement)
        : undefined,
      logCheckpoints: isSet(object.logCheckpoints) ? Boolean(object.logCheckpoints) : undefined,
      logConnections: isSet(object.logConnections) ? Boolean(object.logConnections) : undefined,
      logDisconnections: isSet(object.logDisconnections) ? Boolean(object.logDisconnections) : undefined,
      logDuration: isSet(object.logDuration) ? Boolean(object.logDuration) : undefined,
      logErrorVerbosity: isSet(object.logErrorVerbosity)
        ? postgresqlConfig96_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
        : 0,
      logLockWaits: isSet(object.logLockWaits) ? Boolean(object.logLockWaits) : undefined,
      logStatement: isSet(object.logStatement) ? postgresqlConfig96_LogStatementFromJSON(object.logStatement) : 0,
      logTempFiles: isSet(object.logTempFiles) ? Number(object.logTempFiles) : undefined,
      searchPath: isSet(object.searchPath) ? globalThis.String(object.searchPath) : "",
      rowSecurity: isSet(object.rowSecurity) ? Boolean(object.rowSecurity) : undefined,
      defaultTransactionIsolation: isSet(object.defaultTransactionIsolation)
        ? postgresqlConfig96_TransactionIsolationFromJSON(object.defaultTransactionIsolation)
        : 0,
      statementTimeout: isSet(object.statementTimeout) ? Number(object.statementTimeout) : undefined,
      lockTimeout: isSet(object.lockTimeout) ? Number(object.lockTimeout) : undefined,
      idleInTransactionSessionTimeout: isSet(object.idleInTransactionSessionTimeout)
        ? Number(object.idleInTransactionSessionTimeout)
        : undefined,
      byteaOutput: isSet(object.byteaOutput) ? postgresqlConfig96_ByteaOutputFromJSON(object.byteaOutput) : 0,
      xmlbinary: isSet(object.xmlbinary) ? postgresqlConfig96_XmlBinaryFromJSON(object.xmlbinary) : 0,
      xmloption: isSet(object.xmloption) ? postgresqlConfig96_XmlOptionFromJSON(object.xmloption) : 0,
      ginPendingListLimit: isSet(object.ginPendingListLimit) ? Number(object.ginPendingListLimit) : undefined,
      deadlockTimeout: isSet(object.deadlockTimeout) ? Number(object.deadlockTimeout) : undefined,
      maxLocksPerTransaction: isSet(object.maxLocksPerTransaction) ? Number(object.maxLocksPerTransaction) : undefined,
      maxPredLocksPerTransaction: isSet(object.maxPredLocksPerTransaction)
        ? Number(object.maxPredLocksPerTransaction)
        : undefined,
      arrayNulls: isSet(object.arrayNulls) ? Boolean(object.arrayNulls) : undefined,
      backslashQuote: isSet(object.backslashQuote)
        ? postgresqlConfig96_BackslashQuoteFromJSON(object.backslashQuote)
        : 0,
      defaultWithOids: isSet(object.defaultWithOids) ? Boolean(object.defaultWithOids) : undefined,
      escapeStringWarning: isSet(object.escapeStringWarning) ? Boolean(object.escapeStringWarning) : undefined,
      loCompatPrivileges: isSet(object.loCompatPrivileges) ? Boolean(object.loCompatPrivileges) : undefined,
      operatorPrecedenceWarning: isSet(object.operatorPrecedenceWarning)
        ? Boolean(object.operatorPrecedenceWarning)
        : undefined,
      quoteAllIdentifiers: isSet(object.quoteAllIdentifiers) ? Boolean(object.quoteAllIdentifiers) : undefined,
      standardConformingStrings: isSet(object.standardConformingStrings)
        ? Boolean(object.standardConformingStrings)
        : undefined,
      synchronizeSeqscans: isSet(object.synchronizeSeqscans) ? Boolean(object.synchronizeSeqscans) : undefined,
      transformNullEquals: isSet(object.transformNullEquals) ? Boolean(object.transformNullEquals) : undefined,
      exitOnError: isSet(object.exitOnError) ? Boolean(object.exitOnError) : undefined,
      seqPageCost: isSet(object.seqPageCost) ? Number(object.seqPageCost) : undefined,
      randomPageCost: isSet(object.randomPageCost) ? Number(object.randomPageCost) : undefined,
      sqlInheritance: isSet(object.sqlInheritance) ? Boolean(object.sqlInheritance) : undefined,
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
      effectiveIoConcurrency: isSet(object.effectiveIoConcurrency) ? Number(object.effectiveIoConcurrency) : undefined,
      effectiveCacheSize: isSet(object.effectiveCacheSize) ? Number(object.effectiveCacheSize) : undefined,
    };
  },

  toJSON(message: PostgresqlConfig96): unknown {
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
    if (message.replacementSortTuples !== undefined) {
      obj.replacementSortTuples = message.replacementSortTuples;
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
      obj.walLevel = postgresqlConfig96_WalLevelToJSON(message.walLevel);
    }
    if (message.synchronousCommit !== 0) {
      obj.synchronousCommit = postgresqlConfig96_SynchronousCommitToJSON(message.synchronousCommit);
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
      obj.constraintExclusion = postgresqlConfig96_ConstraintExclusionToJSON(message.constraintExclusion);
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
    if (message.forceParallelMode !== 0) {
      obj.forceParallelMode = postgresqlConfig96_ForceParallelModeToJSON(message.forceParallelMode);
    }
    if (message.clientMinMessages !== 0) {
      obj.clientMinMessages = postgresqlConfig96_LogLevelToJSON(message.clientMinMessages);
    }
    if (message.logMinMessages !== 0) {
      obj.logMinMessages = postgresqlConfig96_LogLevelToJSON(message.logMinMessages);
    }
    if (message.logMinErrorStatement !== 0) {
      obj.logMinErrorStatement = postgresqlConfig96_LogLevelToJSON(message.logMinErrorStatement);
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
      obj.logErrorVerbosity = postgresqlConfig96_LogErrorVerbosityToJSON(message.logErrorVerbosity);
    }
    if (message.logLockWaits !== undefined) {
      obj.logLockWaits = message.logLockWaits;
    }
    if (message.logStatement !== 0) {
      obj.logStatement = postgresqlConfig96_LogStatementToJSON(message.logStatement);
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
      obj.defaultTransactionIsolation = postgresqlConfig96_TransactionIsolationToJSON(
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
      obj.byteaOutput = postgresqlConfig96_ByteaOutputToJSON(message.byteaOutput);
    }
    if (message.xmlbinary !== 0) {
      obj.xmlbinary = postgresqlConfig96_XmlBinaryToJSON(message.xmlbinary);
    }
    if (message.xmloption !== 0) {
      obj.xmloption = postgresqlConfig96_XmlOptionToJSON(message.xmloption);
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
      obj.backslashQuote = postgresqlConfig96_BackslashQuoteToJSON(message.backslashQuote);
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
    if (message.operatorPrecedenceWarning !== undefined) {
      obj.operatorPrecedenceWarning = message.operatorPrecedenceWarning;
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
    if (message.sqlInheritance !== undefined) {
      obj.sqlInheritance = message.sqlInheritance;
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
    if (message.effectiveIoConcurrency !== undefined) {
      obj.effectiveIoConcurrency = message.effectiveIoConcurrency;
    }
    if (message.effectiveCacheSize !== undefined) {
      obj.effectiveCacheSize = message.effectiveCacheSize;
    }
    return obj;
  },

  create(base?: DeepPartial<PostgresqlConfig96>): PostgresqlConfig96 {
    return PostgresqlConfig96.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PostgresqlConfig96>): PostgresqlConfig96 {
    const message = createBasePostgresqlConfig96();
    message.maxConnections = object.maxConnections ?? undefined;
    message.sharedBuffers = object.sharedBuffers ?? undefined;
    message.tempBuffers = object.tempBuffers ?? undefined;
    message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
    message.workMem = object.workMem ?? undefined;
    message.maintenanceWorkMem = object.maintenanceWorkMem ?? undefined;
    message.replacementSortTuples = object.replacementSortTuples ?? undefined;
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
    message.forceParallelMode = object.forceParallelMode ?? 0;
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
    message.operatorPrecedenceWarning = object.operatorPrecedenceWarning ?? undefined;
    message.quoteAllIdentifiers = object.quoteAllIdentifiers ?? undefined;
    message.standardConformingStrings = object.standardConformingStrings ?? undefined;
    message.synchronizeSeqscans = object.synchronizeSeqscans ?? undefined;
    message.transformNullEquals = object.transformNullEquals ?? undefined;
    message.exitOnError = object.exitOnError ?? undefined;
    message.seqPageCost = object.seqPageCost ?? undefined;
    message.randomPageCost = object.randomPageCost ?? undefined;
    message.sqlInheritance = object.sqlInheritance ?? undefined;
    message.autovacuumMaxWorkers = object.autovacuumMaxWorkers ?? undefined;
    message.autovacuumVacuumCostDelay = object.autovacuumVacuumCostDelay ?? undefined;
    message.autovacuumVacuumCostLimit = object.autovacuumVacuumCostLimit ?? undefined;
    message.autovacuumNaptime = object.autovacuumNaptime ?? undefined;
    message.archiveTimeout = object.archiveTimeout ?? undefined;
    message.trackActivityQuerySize = object.trackActivityQuerySize ?? undefined;
    message.effectiveIoConcurrency = object.effectiveIoConcurrency ?? undefined;
    message.effectiveCacheSize = object.effectiveCacheSize ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PostgresqlConfig96.$type, PostgresqlConfig96);

function createBasePostgresqlConfigSet96(): PostgresqlConfigSet96 {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const PostgresqlConfigSet96 = {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6" as const,

  encode(message: PostgresqlConfigSet96, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      PostgresqlConfig96.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      PostgresqlConfig96.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      PostgresqlConfig96.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlConfigSet96 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostgresqlConfigSet96();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = PostgresqlConfig96.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = PostgresqlConfig96.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = PostgresqlConfig96.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostgresqlConfigSet96 {
    return {
      $type: PostgresqlConfigSet96.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? PostgresqlConfig96.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? PostgresqlConfig96.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? PostgresqlConfig96.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: PostgresqlConfigSet96): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = PostgresqlConfig96.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = PostgresqlConfig96.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = PostgresqlConfig96.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<PostgresqlConfigSet96>): PostgresqlConfigSet96 {
    return PostgresqlConfigSet96.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PostgresqlConfigSet96>): PostgresqlConfigSet96 {
    const message = createBasePostgresqlConfigSet96();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? PostgresqlConfig96.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? PostgresqlConfig96.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? PostgresqlConfig96.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PostgresqlConfigSet96.$type, PostgresqlConfigSet96);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
