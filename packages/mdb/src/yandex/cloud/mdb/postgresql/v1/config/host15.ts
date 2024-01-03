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
export interface PostgresqlHostConfig15 {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig15";
  /** in milliseconds. */
  recoveryMinApplyDelay?:
    | number
    | undefined;
  /** in bytes. */
  sharedBuffers?:
    | number
    | undefined;
  /** in bytes. */
  tempBuffers?:
    | number
    | undefined;
  /** in bytes. */
  workMem?:
    | number
    | undefined;
  /** in bytes. */
  tempFileLimit?: number | undefined;
  backendFlushAfter?: number | undefined;
  oldSnapshotThreshold?:
    | number
    | undefined;
  /** in milliseconds. */
  maxStandbyStreamingDelay?: number | undefined;
  constraintExclusion: PostgresqlHostConfig15_ConstraintExclusion;
  cursorTupleFraction?: number | undefined;
  fromCollapseLimit?: number | undefined;
  joinCollapseLimit?: number | undefined;
  forceParallelMode: PostgresqlHostConfig15_ForceParallelMode;
  clientMinMessages: PostgresqlHostConfig15_LogLevel;
  logMinMessages: PostgresqlHostConfig15_LogLevel;
  logMinErrorStatement: PostgresqlHostConfig15_LogLevel;
  /** in milliseconds. */
  logMinDurationStatement?: number | undefined;
  logCheckpoints?: boolean | undefined;
  logConnections?: boolean | undefined;
  logDisconnections?: boolean | undefined;
  logDuration?: boolean | undefined;
  logErrorVerbosity: PostgresqlHostConfig15_LogErrorVerbosity;
  logLockWaits?: boolean | undefined;
  logStatement: PostgresqlHostConfig15_LogStatement;
  logTempFiles?: number | undefined;
  searchPath: string;
  rowSecurity?: boolean | undefined;
  defaultTransactionIsolation: PostgresqlHostConfig15_TransactionIsolation;
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
  byteaOutput: PostgresqlHostConfig15_ByteaOutput;
  xmlbinary: PostgresqlHostConfig15_XmlBinary;
  xmloption: PostgresqlHostConfig15_XmlOption;
  /** in bytes. */
  ginPendingListLimit?:
    | number
    | undefined;
  /** in milliseconds. */
  deadlockTimeout?: number | undefined;
  maxLocksPerTransaction?: number | undefined;
  maxPredLocksPerTransaction?: number | undefined;
  arrayNulls?: boolean | undefined;
  backslashQuote: PostgresqlHostConfig15_BackslashQuote;
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
  maxParallelWorkers?: number | undefined;
  maxParallelWorkersPerGather?: number | undefined;
  timezone: string;
  effectiveIoConcurrency?: number | undefined;
  effectiveCacheSize?: number | undefined;
}

export enum PostgresqlHostConfig15_BackslashQuote {
  BACKSLASH_QUOTE_UNSPECIFIED = 0,
  BACKSLASH_QUOTE = 1,
  BACKSLASH_QUOTE_ON = 2,
  BACKSLASH_QUOTE_OFF = 3,
  BACKSLASH_QUOTE_SAFE_ENCODING = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlHostConfig15_BackslashQuoteFromJSON(object: any): PostgresqlHostConfig15_BackslashQuote {
  switch (object) {
    case 0:
    case "BACKSLASH_QUOTE_UNSPECIFIED":
      return PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
    case 1:
    case "BACKSLASH_QUOTE":
      return PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE;
    case 2:
    case "BACKSLASH_QUOTE_ON":
      return PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE_ON;
    case 3:
    case "BACKSLASH_QUOTE_OFF":
      return PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE_OFF;
    case 4:
    case "BACKSLASH_QUOTE_SAFE_ENCODING":
      return PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_BackslashQuote.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_BackslashQuoteToJSON(object: PostgresqlHostConfig15_BackslashQuote): string {
  switch (object) {
    case PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
      return "BACKSLASH_QUOTE_UNSPECIFIED";
    case PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE:
      return "BACKSLASH_QUOTE";
    case PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE_ON:
      return "BACKSLASH_QUOTE_ON";
    case PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE_OFF:
      return "BACKSLASH_QUOTE_OFF";
    case PostgresqlHostConfig15_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
      return "BACKSLASH_QUOTE_SAFE_ENCODING";
    case PostgresqlHostConfig15_BackslashQuote.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlHostConfig15_ByteaOutput {
  BYTEA_OUTPUT_UNSPECIFIED = 0,
  BYTEA_OUTPUT_HEX = 1,
  BYTEA_OUTPUT_ESCAPED = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlHostConfig15_ByteaOutputFromJSON(object: any): PostgresqlHostConfig15_ByteaOutput {
  switch (object) {
    case 0:
    case "BYTEA_OUTPUT_UNSPECIFIED":
      return PostgresqlHostConfig15_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
    case 1:
    case "BYTEA_OUTPUT_HEX":
      return PostgresqlHostConfig15_ByteaOutput.BYTEA_OUTPUT_HEX;
    case 2:
    case "BYTEA_OUTPUT_ESCAPED":
      return PostgresqlHostConfig15_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_ByteaOutput.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_ByteaOutputToJSON(object: PostgresqlHostConfig15_ByteaOutput): string {
  switch (object) {
    case PostgresqlHostConfig15_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
      return "BYTEA_OUTPUT_UNSPECIFIED";
    case PostgresqlHostConfig15_ByteaOutput.BYTEA_OUTPUT_HEX:
      return "BYTEA_OUTPUT_HEX";
    case PostgresqlHostConfig15_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
      return "BYTEA_OUTPUT_ESCAPED";
    case PostgresqlHostConfig15_ByteaOutput.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlHostConfig15_ConstraintExclusion {
  CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
  CONSTRAINT_EXCLUSION_ON = 1,
  CONSTRAINT_EXCLUSION_OFF = 2,
  CONSTRAINT_EXCLUSION_PARTITION = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlHostConfig15_ConstraintExclusionFromJSON(
  object: any,
): PostgresqlHostConfig15_ConstraintExclusion {
  switch (object) {
    case 0:
    case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
      return PostgresqlHostConfig15_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
    case 1:
    case "CONSTRAINT_EXCLUSION_ON":
      return PostgresqlHostConfig15_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
    case 2:
    case "CONSTRAINT_EXCLUSION_OFF":
      return PostgresqlHostConfig15_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
    case 3:
    case "CONSTRAINT_EXCLUSION_PARTITION":
      return PostgresqlHostConfig15_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_ConstraintExclusion.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_ConstraintExclusionToJSON(
  object: PostgresqlHostConfig15_ConstraintExclusion,
): string {
  switch (object) {
    case PostgresqlHostConfig15_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
      return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    case PostgresqlHostConfig15_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
      return "CONSTRAINT_EXCLUSION_ON";
    case PostgresqlHostConfig15_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
      return "CONSTRAINT_EXCLUSION_OFF";
    case PostgresqlHostConfig15_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
      return "CONSTRAINT_EXCLUSION_PARTITION";
    case PostgresqlHostConfig15_ConstraintExclusion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlHostConfig15_ForceParallelMode {
  FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
  FORCE_PARALLEL_MODE_ON = 1,
  FORCE_PARALLEL_MODE_OFF = 2,
  FORCE_PARALLEL_MODE_REGRESS = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlHostConfig15_ForceParallelModeFromJSON(
  object: any,
): PostgresqlHostConfig15_ForceParallelMode {
  switch (object) {
    case 0:
    case "FORCE_PARALLEL_MODE_UNSPECIFIED":
      return PostgresqlHostConfig15_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
    case 1:
    case "FORCE_PARALLEL_MODE_ON":
      return PostgresqlHostConfig15_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
    case 2:
    case "FORCE_PARALLEL_MODE_OFF":
      return PostgresqlHostConfig15_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
    case 3:
    case "FORCE_PARALLEL_MODE_REGRESS":
      return PostgresqlHostConfig15_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_ForceParallelMode.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_ForceParallelModeToJSON(
  object: PostgresqlHostConfig15_ForceParallelMode,
): string {
  switch (object) {
    case PostgresqlHostConfig15_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
      return "FORCE_PARALLEL_MODE_UNSPECIFIED";
    case PostgresqlHostConfig15_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
      return "FORCE_PARALLEL_MODE_ON";
    case PostgresqlHostConfig15_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
      return "FORCE_PARALLEL_MODE_OFF";
    case PostgresqlHostConfig15_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
      return "FORCE_PARALLEL_MODE_REGRESS";
    case PostgresqlHostConfig15_ForceParallelMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlHostConfig15_LogErrorVerbosity {
  LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
  LOG_ERROR_VERBOSITY_TERSE = 1,
  LOG_ERROR_VERBOSITY_DEFAULT = 2,
  LOG_ERROR_VERBOSITY_VERBOSE = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlHostConfig15_LogErrorVerbosityFromJSON(
  object: any,
): PostgresqlHostConfig15_LogErrorVerbosity {
  switch (object) {
    case 0:
    case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
      return PostgresqlHostConfig15_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
    case 1:
    case "LOG_ERROR_VERBOSITY_TERSE":
      return PostgresqlHostConfig15_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
    case 2:
    case "LOG_ERROR_VERBOSITY_DEFAULT":
      return PostgresqlHostConfig15_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
    case 3:
    case "LOG_ERROR_VERBOSITY_VERBOSE":
      return PostgresqlHostConfig15_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_LogErrorVerbosity.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_LogErrorVerbosityToJSON(
  object: PostgresqlHostConfig15_LogErrorVerbosity,
): string {
  switch (object) {
    case PostgresqlHostConfig15_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
      return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    case PostgresqlHostConfig15_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
      return "LOG_ERROR_VERBOSITY_TERSE";
    case PostgresqlHostConfig15_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
      return "LOG_ERROR_VERBOSITY_DEFAULT";
    case PostgresqlHostConfig15_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
      return "LOG_ERROR_VERBOSITY_VERBOSE";
    case PostgresqlHostConfig15_LogErrorVerbosity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlHostConfig15_LogLevel {
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

export function postgresqlHostConfig15_LogLevelFromJSON(object: any): PostgresqlHostConfig15_LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "LOG_LEVEL_DEBUG5":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG5;
    case 2:
    case "LOG_LEVEL_DEBUG4":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG4;
    case 3:
    case "LOG_LEVEL_DEBUG3":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG3;
    case 4:
    case "LOG_LEVEL_DEBUG2":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG2;
    case 5:
    case "LOG_LEVEL_DEBUG1":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG1;
    case 6:
    case "LOG_LEVEL_LOG":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_LOG;
    case 7:
    case "LOG_LEVEL_NOTICE":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_NOTICE;
    case 8:
    case "LOG_LEVEL_WARNING":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_WARNING;
    case 9:
    case "LOG_LEVEL_ERROR":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_ERROR;
    case 10:
    case "LOG_LEVEL_FATAL":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_FATAL;
    case 11:
    case "LOG_LEVEL_PANIC":
      return PostgresqlHostConfig15_LogLevel.LOG_LEVEL_PANIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_LogLevel.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_LogLevelToJSON(object: PostgresqlHostConfig15_LogLevel): string {
  switch (object) {
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG5:
      return "LOG_LEVEL_DEBUG5";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG4:
      return "LOG_LEVEL_DEBUG4";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG3:
      return "LOG_LEVEL_DEBUG3";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG2:
      return "LOG_LEVEL_DEBUG2";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_DEBUG1:
      return "LOG_LEVEL_DEBUG1";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_LOG:
      return "LOG_LEVEL_LOG";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_NOTICE:
      return "LOG_LEVEL_NOTICE";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_WARNING:
      return "LOG_LEVEL_WARNING";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_ERROR:
      return "LOG_LEVEL_ERROR";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_FATAL:
      return "LOG_LEVEL_FATAL";
    case PostgresqlHostConfig15_LogLevel.LOG_LEVEL_PANIC:
      return "LOG_LEVEL_PANIC";
    case PostgresqlHostConfig15_LogLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlHostConfig15_LogStatement {
  LOG_STATEMENT_UNSPECIFIED = 0,
  LOG_STATEMENT_NONE = 1,
  LOG_STATEMENT_DDL = 2,
  LOG_STATEMENT_MOD = 3,
  LOG_STATEMENT_ALL = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlHostConfig15_LogStatementFromJSON(object: any): PostgresqlHostConfig15_LogStatement {
  switch (object) {
    case 0:
    case "LOG_STATEMENT_UNSPECIFIED":
      return PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_UNSPECIFIED;
    case 1:
    case "LOG_STATEMENT_NONE":
      return PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_NONE;
    case 2:
    case "LOG_STATEMENT_DDL":
      return PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_DDL;
    case 3:
    case "LOG_STATEMENT_MOD":
      return PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_MOD;
    case 4:
    case "LOG_STATEMENT_ALL":
      return PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_LogStatement.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_LogStatementToJSON(object: PostgresqlHostConfig15_LogStatement): string {
  switch (object) {
    case PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_UNSPECIFIED:
      return "LOG_STATEMENT_UNSPECIFIED";
    case PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_NONE:
      return "LOG_STATEMENT_NONE";
    case PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_DDL:
      return "LOG_STATEMENT_DDL";
    case PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_MOD:
      return "LOG_STATEMENT_MOD";
    case PostgresqlHostConfig15_LogStatement.LOG_STATEMENT_ALL:
      return "LOG_STATEMENT_ALL";
    case PostgresqlHostConfig15_LogStatement.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlHostConfig15_TransactionIsolation {
  TRANSACTION_ISOLATION_UNSPECIFIED = 0,
  TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
  TRANSACTION_ISOLATION_READ_COMMITTED = 2,
  TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
  TRANSACTION_ISOLATION_SERIALIZABLE = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlHostConfig15_TransactionIsolationFromJSON(
  object: any,
): PostgresqlHostConfig15_TransactionIsolation {
  switch (object) {
    case 0:
    case "TRANSACTION_ISOLATION_UNSPECIFIED":
      return PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
    case 1:
    case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
      return PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
    case 2:
    case "TRANSACTION_ISOLATION_READ_COMMITTED":
      return PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
    case 3:
    case "TRANSACTION_ISOLATION_REPEATABLE_READ":
      return PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
    case 4:
    case "TRANSACTION_ISOLATION_SERIALIZABLE":
      return PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_TransactionIsolation.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_TransactionIsolationToJSON(
  object: PostgresqlHostConfig15_TransactionIsolation,
): string {
  switch (object) {
    case PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
      return "TRANSACTION_ISOLATION_UNSPECIFIED";
    case PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
      return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    case PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
      return "TRANSACTION_ISOLATION_READ_COMMITTED";
    case PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
      return "TRANSACTION_ISOLATION_REPEATABLE_READ";
    case PostgresqlHostConfig15_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
      return "TRANSACTION_ISOLATION_SERIALIZABLE";
    case PostgresqlHostConfig15_TransactionIsolation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlHostConfig15_XmlBinary {
  XML_BINARY_UNSPECIFIED = 0,
  XML_BINARY_BASE64 = 1,
  XML_BINARY_HEX = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlHostConfig15_XmlBinaryFromJSON(object: any): PostgresqlHostConfig15_XmlBinary {
  switch (object) {
    case 0:
    case "XML_BINARY_UNSPECIFIED":
      return PostgresqlHostConfig15_XmlBinary.XML_BINARY_UNSPECIFIED;
    case 1:
    case "XML_BINARY_BASE64":
      return PostgresqlHostConfig15_XmlBinary.XML_BINARY_BASE64;
    case 2:
    case "XML_BINARY_HEX":
      return PostgresqlHostConfig15_XmlBinary.XML_BINARY_HEX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_XmlBinary.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_XmlBinaryToJSON(object: PostgresqlHostConfig15_XmlBinary): string {
  switch (object) {
    case PostgresqlHostConfig15_XmlBinary.XML_BINARY_UNSPECIFIED:
      return "XML_BINARY_UNSPECIFIED";
    case PostgresqlHostConfig15_XmlBinary.XML_BINARY_BASE64:
      return "XML_BINARY_BASE64";
    case PostgresqlHostConfig15_XmlBinary.XML_BINARY_HEX:
      return "XML_BINARY_HEX";
    case PostgresqlHostConfig15_XmlBinary.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PostgresqlHostConfig15_XmlOption {
  XML_OPTION_UNSPECIFIED = 0,
  XML_OPTION_DOCUMENT = 1,
  XML_OPTION_CONTENT = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlHostConfig15_XmlOptionFromJSON(object: any): PostgresqlHostConfig15_XmlOption {
  switch (object) {
    case 0:
    case "XML_OPTION_UNSPECIFIED":
      return PostgresqlHostConfig15_XmlOption.XML_OPTION_UNSPECIFIED;
    case 1:
    case "XML_OPTION_DOCUMENT":
      return PostgresqlHostConfig15_XmlOption.XML_OPTION_DOCUMENT;
    case 2:
    case "XML_OPTION_CONTENT":
      return PostgresqlHostConfig15_XmlOption.XML_OPTION_CONTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostgresqlHostConfig15_XmlOption.UNRECOGNIZED;
  }
}

export function postgresqlHostConfig15_XmlOptionToJSON(object: PostgresqlHostConfig15_XmlOption): string {
  switch (object) {
    case PostgresqlHostConfig15_XmlOption.XML_OPTION_UNSPECIFIED:
      return "XML_OPTION_UNSPECIFIED";
    case PostgresqlHostConfig15_XmlOption.XML_OPTION_DOCUMENT:
      return "XML_OPTION_DOCUMENT";
    case PostgresqlHostConfig15_XmlOption.XML_OPTION_CONTENT:
      return "XML_OPTION_CONTENT";
    case PostgresqlHostConfig15_XmlOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePostgresqlHostConfig15(): PostgresqlHostConfig15 {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig15",
    recoveryMinApplyDelay: undefined,
    sharedBuffers: undefined,
    tempBuffers: undefined,
    workMem: undefined,
    tempFileLimit: undefined,
    backendFlushAfter: undefined,
    oldSnapshotThreshold: undefined,
    maxStandbyStreamingDelay: undefined,
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
    quoteAllIdentifiers: undefined,
    standardConformingStrings: undefined,
    synchronizeSeqscans: undefined,
    transformNullEquals: undefined,
    exitOnError: undefined,
    seqPageCost: undefined,
    randomPageCost: undefined,
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
    maxParallelWorkers: undefined,
    maxParallelWorkersPerGather: undefined,
    timezone: "",
    effectiveIoConcurrency: undefined,
    effectiveCacheSize: undefined,
  };
}

export const PostgresqlHostConfig15 = {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig15" as const,

  encode(message: PostgresqlHostConfig15, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recoveryMinApplyDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.recoveryMinApplyDelay! },
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
    if (message.workMem !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.workMem! }, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.tempFileLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tempFileLimit! },
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.backendFlushAfter !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backendFlushAfter! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.oldSnapshotThreshold !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.oldSnapshotThreshold! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.maxStandbyStreamingDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStandbyStreamingDelay! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.constraintExclusion !== 0) {
      writer.uint32(72).int32(message.constraintExclusion);
    }
    if (message.cursorTupleFraction !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.cursorTupleFraction! },
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.fromCollapseLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fromCollapseLimit! },
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.joinCollapseLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.joinCollapseLimit! },
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.forceParallelMode !== 0) {
      writer.uint32(104).int32(message.forceParallelMode);
    }
    if (message.clientMinMessages !== 0) {
      writer.uint32(112).int32(message.clientMinMessages);
    }
    if (message.logMinMessages !== 0) {
      writer.uint32(120).int32(message.logMinMessages);
    }
    if (message.logMinErrorStatement !== 0) {
      writer.uint32(128).int32(message.logMinErrorStatement);
    }
    if (message.logMinDurationStatement !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logMinDurationStatement! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.logCheckpoints !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logCheckpoints! },
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.logConnections !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logConnections! },
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.logDisconnections !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logDisconnections! },
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.logDuration !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logDuration! }, writer.uint32(170).fork())
        .ldelim();
    }
    if (message.logErrorVerbosity !== 0) {
      writer.uint32(176).int32(message.logErrorVerbosity);
    }
    if (message.logLockWaits !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logLockWaits! }, writer.uint32(186).fork())
        .ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(192).int32(message.logStatement);
    }
    if (message.logTempFiles !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logTempFiles! },
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.searchPath !== "") {
      writer.uint32(210).string(message.searchPath);
    }
    if (message.rowSecurity !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.rowSecurity! }, writer.uint32(218).fork())
        .ldelim();
    }
    if (message.defaultTransactionIsolation !== 0) {
      writer.uint32(224).int32(message.defaultTransactionIsolation);
    }
    if (message.statementTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.statementTimeout! },
        writer.uint32(234).fork(),
      ).ldelim();
    }
    if (message.lockTimeout !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.lockTimeout! }, writer.uint32(242).fork())
        .ldelim();
    }
    if (message.idleInTransactionSessionTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.idleInTransactionSessionTimeout! },
        writer.uint32(250).fork(),
      ).ldelim();
    }
    if (message.byteaOutput !== 0) {
      writer.uint32(256).int32(message.byteaOutput);
    }
    if (message.xmlbinary !== 0) {
      writer.uint32(264).int32(message.xmlbinary);
    }
    if (message.xmloption !== 0) {
      writer.uint32(272).int32(message.xmloption);
    }
    if (message.ginPendingListLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.ginPendingListLimit! },
        writer.uint32(282).fork(),
      ).ldelim();
    }
    if (message.deadlockTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.deadlockTimeout! },
        writer.uint32(290).fork(),
      ).ldelim();
    }
    if (message.maxLocksPerTransaction !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxLocksPerTransaction! },
        writer.uint32(298).fork(),
      ).ldelim();
    }
    if (message.maxPredLocksPerTransaction !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxPredLocksPerTransaction! },
        writer.uint32(306).fork(),
      ).ldelim();
    }
    if (message.arrayNulls !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.arrayNulls! }, writer.uint32(314).fork())
        .ldelim();
    }
    if (message.backslashQuote !== 0) {
      writer.uint32(320).int32(message.backslashQuote);
    }
    if (message.defaultWithOids !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.defaultWithOids! },
        writer.uint32(330).fork(),
      ).ldelim();
    }
    if (message.escapeStringWarning !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.escapeStringWarning! },
        writer.uint32(338).fork(),
      ).ldelim();
    }
    if (message.loCompatPrivileges !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.loCompatPrivileges! },
        writer.uint32(346).fork(),
      ).ldelim();
    }
    if (message.quoteAllIdentifiers !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.quoteAllIdentifiers! },
        writer.uint32(362).fork(),
      ).ldelim();
    }
    if (message.standardConformingStrings !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.standardConformingStrings! },
        writer.uint32(370).fork(),
      ).ldelim();
    }
    if (message.synchronizeSeqscans !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.synchronizeSeqscans! },
        writer.uint32(378).fork(),
      ).ldelim();
    }
    if (message.transformNullEquals !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.transformNullEquals! },
        writer.uint32(386).fork(),
      ).ldelim();
    }
    if (message.exitOnError !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.exitOnError! }, writer.uint32(394).fork())
        .ldelim();
    }
    if (message.seqPageCost !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.seqPageCost! },
        writer.uint32(402).fork(),
      ).ldelim();
    }
    if (message.randomPageCost !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.randomPageCost! },
        writer.uint32(410).fork(),
      ).ldelim();
    }
    if (message.enableBitmapscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableBitmapscan! },
        writer.uint32(434).fork(),
      ).ldelim();
    }
    if (message.enableHashagg !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableHashagg! }, writer.uint32(442).fork())
        .ldelim();
    }
    if (message.enableHashjoin !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableHashjoin! },
        writer.uint32(450).fork(),
      ).ldelim();
    }
    if (message.enableIndexscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableIndexscan! },
        writer.uint32(458).fork(),
      ).ldelim();
    }
    if (message.enableIndexonlyscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableIndexonlyscan! },
        writer.uint32(466).fork(),
      ).ldelim();
    }
    if (message.enableMaterial !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableMaterial! },
        writer.uint32(474).fork(),
      ).ldelim();
    }
    if (message.enableMergejoin !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableMergejoin! },
        writer.uint32(482).fork(),
      ).ldelim();
    }
    if (message.enableNestloop !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableNestloop! },
        writer.uint32(490).fork(),
      ).ldelim();
    }
    if (message.enableSeqscan !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableSeqscan! }, writer.uint32(498).fork())
        .ldelim();
    }
    if (message.enableSort !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableSort! }, writer.uint32(506).fork())
        .ldelim();
    }
    if (message.enableTidscan !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableTidscan! }, writer.uint32(514).fork())
        .ldelim();
    }
    if (message.maxParallelWorkers !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxParallelWorkers! },
        writer.uint32(522).fork(),
      ).ldelim();
    }
    if (message.maxParallelWorkersPerGather !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxParallelWorkersPerGather! },
        writer.uint32(530).fork(),
      ).ldelim();
    }
    if (message.timezone !== "") {
      writer.uint32(538).string(message.timezone);
    }
    if (message.effectiveIoConcurrency !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.effectiveIoConcurrency! },
        writer.uint32(546).fork(),
      ).ldelim();
    }
    if (message.effectiveCacheSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.effectiveCacheSize! },
        writer.uint32(554).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlHostConfig15 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostgresqlHostConfig15();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recoveryMinApplyDelay = Int64Value.decode(reader, reader.uint32()).value;
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

          message.workMem = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tempFileLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.backendFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.oldSnapshotThreshold = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.maxStandbyStreamingDelay = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.constraintExclusion = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.cursorTupleFraction = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.fromCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.joinCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.forceParallelMode = reader.int32() as any;
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.clientMinMessages = reader.int32() as any;
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.logMinMessages = reader.int32() as any;
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.logMinErrorStatement = reader.int32() as any;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.logMinDurationStatement = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.logCheckpoints = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.logConnections = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.logDisconnections = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.logDuration = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.logErrorVerbosity = reader.int32() as any;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.logLockWaits = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.logStatement = reader.int32() as any;
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.logTempFiles = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.searchPath = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.rowSecurity = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.defaultTransactionIsolation = reader.int32() as any;
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.statementTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.lockTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.idleInTransactionSessionTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.byteaOutput = reader.int32() as any;
          continue;
        case 33:
          if (tag !== 264) {
            break;
          }

          message.xmlbinary = reader.int32() as any;
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.xmloption = reader.int32() as any;
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.ginPendingListLimit = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.deadlockTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.maxLocksPerTransaction = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 38:
          if (tag !== 306) {
            break;
          }

          message.maxPredLocksPerTransaction = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.arrayNulls = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 40:
          if (tag !== 320) {
            break;
          }

          message.backslashQuote = reader.int32() as any;
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.defaultWithOids = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 42:
          if (tag !== 338) {
            break;
          }

          message.escapeStringWarning = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 43:
          if (tag !== 346) {
            break;
          }

          message.loCompatPrivileges = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.quoteAllIdentifiers = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.standardConformingStrings = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 47:
          if (tag !== 378) {
            break;
          }

          message.synchronizeSeqscans = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          message.transformNullEquals = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 49:
          if (tag !== 394) {
            break;
          }

          message.exitOnError = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.seqPageCost = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 51:
          if (tag !== 410) {
            break;
          }

          message.randomPageCost = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 54:
          if (tag !== 434) {
            break;
          }

          message.enableBitmapscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 55:
          if (tag !== 442) {
            break;
          }

          message.enableHashagg = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.enableHashjoin = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.enableIndexscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 58:
          if (tag !== 466) {
            break;
          }

          message.enableIndexonlyscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 59:
          if (tag !== 474) {
            break;
          }

          message.enableMaterial = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 60:
          if (tag !== 482) {
            break;
          }

          message.enableMergejoin = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          message.enableNestloop = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 62:
          if (tag !== 498) {
            break;
          }

          message.enableSeqscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 63:
          if (tag !== 506) {
            break;
          }

          message.enableSort = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 64:
          if (tag !== 514) {
            break;
          }

          message.enableTidscan = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 65:
          if (tag !== 522) {
            break;
          }

          message.maxParallelWorkers = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 66:
          if (tag !== 530) {
            break;
          }

          message.maxParallelWorkersPerGather = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 67:
          if (tag !== 538) {
            break;
          }

          message.timezone = reader.string();
          continue;
        case 68:
          if (tag !== 546) {
            break;
          }

          message.effectiveIoConcurrency = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 69:
          if (tag !== 554) {
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

  fromJSON(object: any): PostgresqlHostConfig15 {
    return {
      $type: PostgresqlHostConfig15.$type,
      recoveryMinApplyDelay: isSet(object.recoveryMinApplyDelay) ? Number(object.recoveryMinApplyDelay) : undefined,
      sharedBuffers: isSet(object.sharedBuffers) ? Number(object.sharedBuffers) : undefined,
      tempBuffers: isSet(object.tempBuffers) ? Number(object.tempBuffers) : undefined,
      workMem: isSet(object.workMem) ? Number(object.workMem) : undefined,
      tempFileLimit: isSet(object.tempFileLimit) ? Number(object.tempFileLimit) : undefined,
      backendFlushAfter: isSet(object.backendFlushAfter) ? Number(object.backendFlushAfter) : undefined,
      oldSnapshotThreshold: isSet(object.oldSnapshotThreshold) ? Number(object.oldSnapshotThreshold) : undefined,
      maxStandbyStreamingDelay: isSet(object.maxStandbyStreamingDelay)
        ? Number(object.maxStandbyStreamingDelay)
        : undefined,
      constraintExclusion: isSet(object.constraintExclusion)
        ? postgresqlHostConfig15_ConstraintExclusionFromJSON(object.constraintExclusion)
        : 0,
      cursorTupleFraction: isSet(object.cursorTupleFraction) ? Number(object.cursorTupleFraction) : undefined,
      fromCollapseLimit: isSet(object.fromCollapseLimit) ? Number(object.fromCollapseLimit) : undefined,
      joinCollapseLimit: isSet(object.joinCollapseLimit) ? Number(object.joinCollapseLimit) : undefined,
      forceParallelMode: isSet(object.forceParallelMode)
        ? postgresqlHostConfig15_ForceParallelModeFromJSON(object.forceParallelMode)
        : 0,
      clientMinMessages: isSet(object.clientMinMessages)
        ? postgresqlHostConfig15_LogLevelFromJSON(object.clientMinMessages)
        : 0,
      logMinMessages: isSet(object.logMinMessages) ? postgresqlHostConfig15_LogLevelFromJSON(object.logMinMessages) : 0,
      logMinErrorStatement: isSet(object.logMinErrorStatement)
        ? postgresqlHostConfig15_LogLevelFromJSON(object.logMinErrorStatement)
        : 0,
      logMinDurationStatement: isSet(object.logMinDurationStatement)
        ? Number(object.logMinDurationStatement)
        : undefined,
      logCheckpoints: isSet(object.logCheckpoints) ? Boolean(object.logCheckpoints) : undefined,
      logConnections: isSet(object.logConnections) ? Boolean(object.logConnections) : undefined,
      logDisconnections: isSet(object.logDisconnections) ? Boolean(object.logDisconnections) : undefined,
      logDuration: isSet(object.logDuration) ? Boolean(object.logDuration) : undefined,
      logErrorVerbosity: isSet(object.logErrorVerbosity)
        ? postgresqlHostConfig15_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
        : 0,
      logLockWaits: isSet(object.logLockWaits) ? Boolean(object.logLockWaits) : undefined,
      logStatement: isSet(object.logStatement) ? postgresqlHostConfig15_LogStatementFromJSON(object.logStatement) : 0,
      logTempFiles: isSet(object.logTempFiles) ? Number(object.logTempFiles) : undefined,
      searchPath: isSet(object.searchPath) ? globalThis.String(object.searchPath) : "",
      rowSecurity: isSet(object.rowSecurity) ? Boolean(object.rowSecurity) : undefined,
      defaultTransactionIsolation: isSet(object.defaultTransactionIsolation)
        ? postgresqlHostConfig15_TransactionIsolationFromJSON(object.defaultTransactionIsolation)
        : 0,
      statementTimeout: isSet(object.statementTimeout) ? Number(object.statementTimeout) : undefined,
      lockTimeout: isSet(object.lockTimeout) ? Number(object.lockTimeout) : undefined,
      idleInTransactionSessionTimeout: isSet(object.idleInTransactionSessionTimeout)
        ? Number(object.idleInTransactionSessionTimeout)
        : undefined,
      byteaOutput: isSet(object.byteaOutput) ? postgresqlHostConfig15_ByteaOutputFromJSON(object.byteaOutput) : 0,
      xmlbinary: isSet(object.xmlbinary) ? postgresqlHostConfig15_XmlBinaryFromJSON(object.xmlbinary) : 0,
      xmloption: isSet(object.xmloption) ? postgresqlHostConfig15_XmlOptionFromJSON(object.xmloption) : 0,
      ginPendingListLimit: isSet(object.ginPendingListLimit) ? Number(object.ginPendingListLimit) : undefined,
      deadlockTimeout: isSet(object.deadlockTimeout) ? Number(object.deadlockTimeout) : undefined,
      maxLocksPerTransaction: isSet(object.maxLocksPerTransaction) ? Number(object.maxLocksPerTransaction) : undefined,
      maxPredLocksPerTransaction: isSet(object.maxPredLocksPerTransaction)
        ? Number(object.maxPredLocksPerTransaction)
        : undefined,
      arrayNulls: isSet(object.arrayNulls) ? Boolean(object.arrayNulls) : undefined,
      backslashQuote: isSet(object.backslashQuote)
        ? postgresqlHostConfig15_BackslashQuoteFromJSON(object.backslashQuote)
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
      maxParallelWorkers: isSet(object.maxParallelWorkers) ? Number(object.maxParallelWorkers) : undefined,
      maxParallelWorkersPerGather: isSet(object.maxParallelWorkersPerGather)
        ? Number(object.maxParallelWorkersPerGather)
        : undefined,
      timezone: isSet(object.timezone) ? globalThis.String(object.timezone) : "",
      effectiveIoConcurrency: isSet(object.effectiveIoConcurrency) ? Number(object.effectiveIoConcurrency) : undefined,
      effectiveCacheSize: isSet(object.effectiveCacheSize) ? Number(object.effectiveCacheSize) : undefined,
    };
  },

  toJSON(message: PostgresqlHostConfig15): unknown {
    const obj: any = {};
    if (message.recoveryMinApplyDelay !== undefined) {
      obj.recoveryMinApplyDelay = message.recoveryMinApplyDelay;
    }
    if (message.sharedBuffers !== undefined) {
      obj.sharedBuffers = message.sharedBuffers;
    }
    if (message.tempBuffers !== undefined) {
      obj.tempBuffers = message.tempBuffers;
    }
    if (message.workMem !== undefined) {
      obj.workMem = message.workMem;
    }
    if (message.tempFileLimit !== undefined) {
      obj.tempFileLimit = message.tempFileLimit;
    }
    if (message.backendFlushAfter !== undefined) {
      obj.backendFlushAfter = message.backendFlushAfter;
    }
    if (message.oldSnapshotThreshold !== undefined) {
      obj.oldSnapshotThreshold = message.oldSnapshotThreshold;
    }
    if (message.maxStandbyStreamingDelay !== undefined) {
      obj.maxStandbyStreamingDelay = message.maxStandbyStreamingDelay;
    }
    if (message.constraintExclusion !== 0) {
      obj.constraintExclusion = postgresqlHostConfig15_ConstraintExclusionToJSON(message.constraintExclusion);
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
      obj.forceParallelMode = postgresqlHostConfig15_ForceParallelModeToJSON(message.forceParallelMode);
    }
    if (message.clientMinMessages !== 0) {
      obj.clientMinMessages = postgresqlHostConfig15_LogLevelToJSON(message.clientMinMessages);
    }
    if (message.logMinMessages !== 0) {
      obj.logMinMessages = postgresqlHostConfig15_LogLevelToJSON(message.logMinMessages);
    }
    if (message.logMinErrorStatement !== 0) {
      obj.logMinErrorStatement = postgresqlHostConfig15_LogLevelToJSON(message.logMinErrorStatement);
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
      obj.logErrorVerbosity = postgresqlHostConfig15_LogErrorVerbosityToJSON(message.logErrorVerbosity);
    }
    if (message.logLockWaits !== undefined) {
      obj.logLockWaits = message.logLockWaits;
    }
    if (message.logStatement !== 0) {
      obj.logStatement = postgresqlHostConfig15_LogStatementToJSON(message.logStatement);
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
      obj.defaultTransactionIsolation = postgresqlHostConfig15_TransactionIsolationToJSON(
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
      obj.byteaOutput = postgresqlHostConfig15_ByteaOutputToJSON(message.byteaOutput);
    }
    if (message.xmlbinary !== 0) {
      obj.xmlbinary = postgresqlHostConfig15_XmlBinaryToJSON(message.xmlbinary);
    }
    if (message.xmloption !== 0) {
      obj.xmloption = postgresqlHostConfig15_XmlOptionToJSON(message.xmloption);
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
      obj.backslashQuote = postgresqlHostConfig15_BackslashQuoteToJSON(message.backslashQuote);
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
    if (message.maxParallelWorkers !== undefined) {
      obj.maxParallelWorkers = message.maxParallelWorkers;
    }
    if (message.maxParallelWorkersPerGather !== undefined) {
      obj.maxParallelWorkersPerGather = message.maxParallelWorkersPerGather;
    }
    if (message.timezone !== "") {
      obj.timezone = message.timezone;
    }
    if (message.effectiveIoConcurrency !== undefined) {
      obj.effectiveIoConcurrency = message.effectiveIoConcurrency;
    }
    if (message.effectiveCacheSize !== undefined) {
      obj.effectiveCacheSize = message.effectiveCacheSize;
    }
    return obj;
  },

  create(base?: DeepPartial<PostgresqlHostConfig15>): PostgresqlHostConfig15 {
    return PostgresqlHostConfig15.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PostgresqlHostConfig15>): PostgresqlHostConfig15 {
    const message = createBasePostgresqlHostConfig15();
    message.recoveryMinApplyDelay = object.recoveryMinApplyDelay ?? undefined;
    message.sharedBuffers = object.sharedBuffers ?? undefined;
    message.tempBuffers = object.tempBuffers ?? undefined;
    message.workMem = object.workMem ?? undefined;
    message.tempFileLimit = object.tempFileLimit ?? undefined;
    message.backendFlushAfter = object.backendFlushAfter ?? undefined;
    message.oldSnapshotThreshold = object.oldSnapshotThreshold ?? undefined;
    message.maxStandbyStreamingDelay = object.maxStandbyStreamingDelay ?? undefined;
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
    message.quoteAllIdentifiers = object.quoteAllIdentifiers ?? undefined;
    message.standardConformingStrings = object.standardConformingStrings ?? undefined;
    message.synchronizeSeqscans = object.synchronizeSeqscans ?? undefined;
    message.transformNullEquals = object.transformNullEquals ?? undefined;
    message.exitOnError = object.exitOnError ?? undefined;
    message.seqPageCost = object.seqPageCost ?? undefined;
    message.randomPageCost = object.randomPageCost ?? undefined;
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
    message.maxParallelWorkers = object.maxParallelWorkers ?? undefined;
    message.maxParallelWorkersPerGather = object.maxParallelWorkersPerGather ?? undefined;
    message.timezone = object.timezone ?? "";
    message.effectiveIoConcurrency = object.effectiveIoConcurrency ?? undefined;
    message.effectiveCacheSize = object.effectiveCacheSize ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PostgresqlHostConfig15.$type, PostgresqlHostConfig15);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
