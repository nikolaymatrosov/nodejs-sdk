/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.backup.v1";

/**
 * Format of the backup in policy. For backup locations that can be browsed
 * with a file manager, the backup format determines the number of files and
 * their extension.
 */
export enum Format {
  FORMAT_UNSPECIFIED = 0,
  /** VERSION_11 - A legacy backup format used in older versions. It's not recommended to use. */
  VERSION_11 = 1,
  /** VERSION_12 - A new format recommended in most cases for fast backup and recovery. */
  VERSION_12 = 2,
  /**
   * AUTO - Automatic version selection. Will be used version 12 unless the protection
   * plan (policy) appends backups to the ones created by earlier product
   * versions.
   */
  AUTO = 3,
  UNRECOGNIZED = -1,
}

export function formatFromJSON(object: any): Format {
  switch (object) {
    case 0:
    case "FORMAT_UNSPECIFIED":
      return Format.FORMAT_UNSPECIFIED;
    case 1:
    case "VERSION_11":
      return Format.VERSION_11;
    case 2:
    case "VERSION_12":
      return Format.VERSION_12;
    case 3:
    case "AUTO":
      return Format.AUTO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Format.UNRECOGNIZED;
  }
}

export function formatToJSON(object: Format): string {
  switch (object) {
    case Format.FORMAT_UNSPECIFIED:
      return "FORMAT_UNSPECIFIED";
    case Format.VERSION_11:
      return "VERSION_11";
    case Format.VERSION_12:
      return "VERSION_12";
    case Format.AUTO:
      return "AUTO";
    case Format.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Policy {
  $type: "yandex.cloud.backup.v1.Policy";
  /** Policy ID. */
  id: string;
  /** Policy name. */
  name: string;
  createdAt?: Date | undefined;
  updatedAt?:
    | Date
    | undefined;
  /** If this field is true, it means that the policy is enabled. */
  enabled: boolean;
  /** Set of policy settings */
  settings?:
    | PolicySettings
    | undefined;
  /** ID of the folder that the policy belongs to. */
  folderId: string;
}

/** Set of policy settings */
export interface PolicySettings {
  $type: "yandex.cloud.backup.v1.PolicySettings";
  /** Archive compression level. */
  compression: PolicySettings_Compression;
  /** Format of the Acronis backup archive. */
  format: Format;
  /** If true, snapshots of multiple volumes will be taken simultaneously. */
  multiVolumeSnapshottingEnabled: boolean;
  /** If true, the file security settings will be preserved. */
  preserveFileSecuritySettings: boolean;
  /** Configuration of retries on recoverable errors during the backup operations like reconnection to destination. No attempts to fix recoverable errors will be made if retry configuration is not set. */
  reattempts?:
    | PolicySettings_RetriesConfiguration
    | undefined;
  /** If true, a user interaction will be avoided when possible. Equals to false if value is not specified. */
  silentModeEnabled: boolean;
  /** Determines the size to split backups on. Splitting is not performed if value is not specified. */
  splitting?:
    | PolicySettings_Splitting
    | undefined;
  /** Configuration of retries on errors during the creation of the virtual machine snapshot. No attempts to fix recoverable errors will be made if retry configuration is not set. */
  vmSnapshotReattempts?:
    | PolicySettings_RetriesConfiguration
    | undefined;
  /** Settings for the Volume Shadow Copy Service (VSS) provider. If not set, no VSS provider is used. */
  vss?:
    | PolicySettings_VolumeShadowCopyServiceSettings
    | undefined;
  /** The archive properties. */
  archive?:
    | PolicySettings_ArchiveProperties
    | undefined;
  /** Time windows for performance limitations of backup and storage maintenance operations. */
  performanceWindow?:
    | PolicySettings_PerformanceWindow
    | undefined;
  /** Configuration of backup retention rules. */
  retention?:
    | PolicySettings_Retention
    | undefined;
  /** Configuration of the backup schedule. */
  scheduling?:
    | PolicySettings_Scheduling
    | undefined;
  /** A configuration of Changed Block Tracking (CBT). */
  cbt: PolicySettings_ChangedBlockTracking;
  /** If true, determines whether a file has changed by the file size and timestamp. Otherwise, the entire file contents are compared to those stored in the backup. */
  fastBackupEnabled: boolean;
  /** If true, a quiesced snapshot of the virtual machine will be taken. */
  quiesceSnapshottingEnabled: boolean;
}

/** Compression rate of the backups. */
export enum PolicySettings_Compression {
  COMPRESSION_UNSPECIFIED = 0,
  NORMAL = 1,
  HIGH = 2,
  MAX = 3,
  OFF = 4,
  UNRECOGNIZED = -1,
}

export function policySettings_CompressionFromJSON(object: any): PolicySettings_Compression {
  switch (object) {
    case 0:
    case "COMPRESSION_UNSPECIFIED":
      return PolicySettings_Compression.COMPRESSION_UNSPECIFIED;
    case 1:
    case "NORMAL":
      return PolicySettings_Compression.NORMAL;
    case 2:
    case "HIGH":
      return PolicySettings_Compression.HIGH;
    case 3:
    case "MAX":
      return PolicySettings_Compression.MAX;
    case 4:
    case "OFF":
      return PolicySettings_Compression.OFF;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicySettings_Compression.UNRECOGNIZED;
  }
}

export function policySettings_CompressionToJSON(object: PolicySettings_Compression): string {
  switch (object) {
    case PolicySettings_Compression.COMPRESSION_UNSPECIFIED:
      return "COMPRESSION_UNSPECIFIED";
    case PolicySettings_Compression.NORMAL:
      return "NORMAL";
    case PolicySettings_Compression.HIGH:
      return "HIGH";
    case PolicySettings_Compression.MAX:
      return "MAX";
    case PolicySettings_Compression.OFF:
      return "OFF";
    case PolicySettings_Compression.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PolicySettings_RepeatePeriod {
  REPEATE_PERIOD_UNSPECIFIED = 0,
  HOURLY = 1,
  DAILY = 2,
  WEEKLY = 3,
  MONTHLY = 4,
  UNRECOGNIZED = -1,
}

export function policySettings_RepeatePeriodFromJSON(object: any): PolicySettings_RepeatePeriod {
  switch (object) {
    case 0:
    case "REPEATE_PERIOD_UNSPECIFIED":
      return PolicySettings_RepeatePeriod.REPEATE_PERIOD_UNSPECIFIED;
    case 1:
    case "HOURLY":
      return PolicySettings_RepeatePeriod.HOURLY;
    case 2:
    case "DAILY":
      return PolicySettings_RepeatePeriod.DAILY;
    case 3:
    case "WEEKLY":
      return PolicySettings_RepeatePeriod.WEEKLY;
    case 4:
    case "MONTHLY":
      return PolicySettings_RepeatePeriod.MONTHLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicySettings_RepeatePeriod.UNRECOGNIZED;
  }
}

export function policySettings_RepeatePeriodToJSON(object: PolicySettings_RepeatePeriod): string {
  switch (object) {
    case PolicySettings_RepeatePeriod.REPEATE_PERIOD_UNSPECIFIED:
      return "REPEATE_PERIOD_UNSPECIFIED";
    case PolicySettings_RepeatePeriod.HOURLY:
      return "HOURLY";
    case PolicySettings_RepeatePeriod.DAILY:
      return "DAILY";
    case PolicySettings_RepeatePeriod.WEEKLY:
      return "WEEKLY";
    case PolicySettings_RepeatePeriod.MONTHLY:
      return "MONTHLY";
    case PolicySettings_RepeatePeriod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PolicySettings_Day {
  DAY_UNSPECIFIED = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7,
  UNRECOGNIZED = -1,
}

export function policySettings_DayFromJSON(object: any): PolicySettings_Day {
  switch (object) {
    case 0:
    case "DAY_UNSPECIFIED":
      return PolicySettings_Day.DAY_UNSPECIFIED;
    case 1:
    case "MONDAY":
      return PolicySettings_Day.MONDAY;
    case 2:
    case "TUESDAY":
      return PolicySettings_Day.TUESDAY;
    case 3:
    case "WEDNESDAY":
      return PolicySettings_Day.WEDNESDAY;
    case 4:
    case "THURSDAY":
      return PolicySettings_Day.THURSDAY;
    case 5:
    case "FRIDAY":
      return PolicySettings_Day.FRIDAY;
    case 6:
    case "SATURDAY":
      return PolicySettings_Day.SATURDAY;
    case 7:
    case "SUNDAY":
      return PolicySettings_Day.SUNDAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicySettings_Day.UNRECOGNIZED;
  }
}

export function policySettings_DayToJSON(object: PolicySettings_Day): string {
  switch (object) {
    case PolicySettings_Day.DAY_UNSPECIFIED:
      return "DAY_UNSPECIFIED";
    case PolicySettings_Day.MONDAY:
      return "MONDAY";
    case PolicySettings_Day.TUESDAY:
      return "TUESDAY";
    case PolicySettings_Day.WEDNESDAY:
      return "WEDNESDAY";
    case PolicySettings_Day.THURSDAY:
      return "THURSDAY";
    case PolicySettings_Day.FRIDAY:
      return "FRIDAY";
    case PolicySettings_Day.SATURDAY:
      return "SATURDAY";
    case PolicySettings_Day.SUNDAY:
      return "SUNDAY";
    case PolicySettings_Day.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PolicySettings_ChangedBlockTracking {
  CHANGED_BLOCK_TRACKING_UNSPECIFIED = 0,
  USE_IF_ENABLED = 1,
  ENABLE_AND_USE = 2,
  DO_NOT_USE = 3,
  UNRECOGNIZED = -1,
}

export function policySettings_ChangedBlockTrackingFromJSON(object: any): PolicySettings_ChangedBlockTracking {
  switch (object) {
    case 0:
    case "CHANGED_BLOCK_TRACKING_UNSPECIFIED":
      return PolicySettings_ChangedBlockTracking.CHANGED_BLOCK_TRACKING_UNSPECIFIED;
    case 1:
    case "USE_IF_ENABLED":
      return PolicySettings_ChangedBlockTracking.USE_IF_ENABLED;
    case 2:
    case "ENABLE_AND_USE":
      return PolicySettings_ChangedBlockTracking.ENABLE_AND_USE;
    case 3:
    case "DO_NOT_USE":
      return PolicySettings_ChangedBlockTracking.DO_NOT_USE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicySettings_ChangedBlockTracking.UNRECOGNIZED;
  }
}

export function policySettings_ChangedBlockTrackingToJSON(object: PolicySettings_ChangedBlockTracking): string {
  switch (object) {
    case PolicySettings_ChangedBlockTracking.CHANGED_BLOCK_TRACKING_UNSPECIFIED:
      return "CHANGED_BLOCK_TRACKING_UNSPECIFIED";
    case PolicySettings_ChangedBlockTracking.USE_IF_ENABLED:
      return "USE_IF_ENABLED";
    case PolicySettings_ChangedBlockTracking.ENABLE_AND_USE:
      return "ENABLE_AND_USE";
    case PolicySettings_ChangedBlockTracking.DO_NOT_USE:
      return "DO_NOT_USE";
    case PolicySettings_ChangedBlockTracking.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PolicySettings_Interval {
  $type: "yandex.cloud.backup.v1.PolicySettings.Interval";
  /** A type of the interval. */
  type: PolicySettings_Interval_Type;
  /** The amount of value specified in `Interval.Type`. */
  count: number;
}

export enum PolicySettings_Interval_Type {
  TYPE_UNSPECIFIED = 0,
  SECONDS = 1,
  MINUTES = 2,
  HOURS = 3,
  DAYS = 4,
  WEEKS = 5,
  MONTHS = 6,
  UNRECOGNIZED = -1,
}

export function policySettings_Interval_TypeFromJSON(object: any): PolicySettings_Interval_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return PolicySettings_Interval_Type.TYPE_UNSPECIFIED;
    case 1:
    case "SECONDS":
      return PolicySettings_Interval_Type.SECONDS;
    case 2:
    case "MINUTES":
      return PolicySettings_Interval_Type.MINUTES;
    case 3:
    case "HOURS":
      return PolicySettings_Interval_Type.HOURS;
    case 4:
    case "DAYS":
      return PolicySettings_Interval_Type.DAYS;
    case 5:
    case "WEEKS":
      return PolicySettings_Interval_Type.WEEKS;
    case 6:
    case "MONTHS":
      return PolicySettings_Interval_Type.MONTHS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicySettings_Interval_Type.UNRECOGNIZED;
  }
}

export function policySettings_Interval_TypeToJSON(object: PolicySettings_Interval_Type): string {
  switch (object) {
    case PolicySettings_Interval_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case PolicySettings_Interval_Type.SECONDS:
      return "SECONDS";
    case PolicySettings_Interval_Type.MINUTES:
      return "MINUTES";
    case PolicySettings_Interval_Type.HOURS:
      return "HOURS";
    case PolicySettings_Interval_Type.DAYS:
      return "DAYS";
    case PolicySettings_Interval_Type.WEEKS:
      return "WEEKS";
    case PolicySettings_Interval_Type.MONTHS:
      return "MONTHS";
    case PolicySettings_Interval_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PolicySettings_RetriesConfiguration {
  $type: "yandex.cloud.backup.v1.PolicySettings.RetriesConfiguration";
  /** If true, enables retry on errors. */
  enabled: boolean;
  /** An interval between retry attempts. */
  interval?:
    | PolicySettings_Interval
    | undefined;
  /**
   * Max number of retry attempts. Operation will be considered as failed
   * when max number of retry attempts is reached.
   */
  maxAttempts: number;
}

export interface PolicySettings_Splitting {
  $type: "yandex.cloud.backup.v1.PolicySettings.Splitting";
  /** The size of split backup file in bytes. */
  size: number;
}

/**
 * Settings for Volume Shadow Copy Services which allows to notify
 * VSS-aware applications that backup is about to start. This will
 * ensure the consistent state of all data used by the applications.
 */
export interface PolicySettings_VolumeShadowCopyServiceSettings {
  $type: "yandex.cloud.backup.v1.PolicySettings.VolumeShadowCopyServiceSettings";
  /** If true, the VSS will be enabled. */
  enabled: boolean;
  /** A type of VSS provider to use in backup. */
  provider: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider;
}

export enum PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider {
  VSS_PROVIDER_UNSPECIFIED = 0,
  NATIVE = 1,
  TARGET_SYSTEM_DEFINED = 2,
  UNRECOGNIZED = -1,
}

export function policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON(
  object: any,
): PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider {
  switch (object) {
    case 0:
    case "VSS_PROVIDER_UNSPECIFIED":
      return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.VSS_PROVIDER_UNSPECIFIED;
    case 1:
    case "NATIVE":
      return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.NATIVE;
    case 2:
    case "TARGET_SYSTEM_DEFINED":
      return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.TARGET_SYSTEM_DEFINED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.UNRECOGNIZED;
  }
}

export function policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON(
  object: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider,
): string {
  switch (object) {
    case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.VSS_PROVIDER_UNSPECIFIED:
      return "VSS_PROVIDER_UNSPECIFIED";
    case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.NATIVE:
      return "NATIVE";
    case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.TARGET_SYSTEM_DEFINED:
      return "TARGET_SYSTEM_DEFINED";
    case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PolicySettings_ArchiveProperties {
  $type: "yandex.cloud.backup.v1.PolicySettings.ArchiveProperties";
  /**
   * The name of the generated archive. The name may use the following variables: `[Machine Name]`, `[Plan ID]`, `[Plan Name]`, `[Unique ID]`, `[Virtualization Server Type]`.
   * Default value: `[Machine Name]-[Plan ID]-[Unique ID]A`.
   */
  name: string;
}

export interface PolicySettings_PerformanceWindow {
  $type: "yandex.cloud.backup.v1.PolicySettings.PerformanceWindow";
  /** If true, the time windows will be enabled. */
  enabled: boolean;
}

export interface PolicySettings_TimeOfDay {
  $type: "yandex.cloud.backup.v1.PolicySettings.TimeOfDay";
  /** Hours. */
  hour: number;
  /** Minutes. */
  minute: number;
}

export interface PolicySettings_Retention {
  $type: "yandex.cloud.backup.v1.PolicySettings.Retention";
  /** A list of retention rules. */
  rules: PolicySettings_Retention_RetentionRule[];
  /** If true, retention rules will be applied after backup is finished. */
  afterBackup: boolean;
}

export interface PolicySettings_Retention_RetentionRule {
  $type: "yandex.cloud.backup.v1.PolicySettings.Retention.RetentionRule";
  /** A list of backup sets where rules are effective. */
  backupSet: PolicySettings_RepeatePeriod[];
  maxAge?: PolicySettings_Interval | undefined;
  maxCount?: number | undefined;
}

export interface PolicySettings_Scheduling {
  $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling";
  /** A list of schedules with backup sets that compose the whole scheme. */
  backupSets: PolicySettings_Scheduling_BackupSet[];
  /** If true, the backup schedule will be enabled. */
  enabled: boolean;
  /** Max number of backup processes allowed to run in parallel. Unlimited if not set. */
  maxParallelBackups: number;
  /** Configuration of the random delay between the execution of parallel tasks. */
  randMaxDelay?:
    | PolicySettings_Interval
    | undefined;
  /** A backup scheme. Available values: `simple`, `always_full`, `always_incremental`, `weekly_incremental`, `weekly_full_daily_incremental`, `custom`, `cdp`. */
  scheme: PolicySettings_Scheduling_Scheme;
  /** A day of week to start weekly backups. */
  weeklyBackupDay: PolicySettings_Day;
}

/** Scheme of backups. */
export enum PolicySettings_Scheduling_Scheme {
  SCHEME_UNSPECIFIED = 0,
  SIMPLE = 1,
  ALWAYS_FULL = 2,
  ALWAYS_INCREMENTAL = 3,
  WEEKLY_INCREMENTAL = 4,
  WEEKLY_FULL_DAILY_INCREMENTAL = 5,
  /**
   * CUSTOM - Custom will require to specify schedules for full, differential
   * and incremental backups additionally.
   */
  CUSTOM = 6,
  CDP = 7,
  UNRECOGNIZED = -1,
}

export function policySettings_Scheduling_SchemeFromJSON(object: any): PolicySettings_Scheduling_Scheme {
  switch (object) {
    case 0:
    case "SCHEME_UNSPECIFIED":
      return PolicySettings_Scheduling_Scheme.SCHEME_UNSPECIFIED;
    case 1:
    case "SIMPLE":
      return PolicySettings_Scheduling_Scheme.SIMPLE;
    case 2:
    case "ALWAYS_FULL":
      return PolicySettings_Scheduling_Scheme.ALWAYS_FULL;
    case 3:
    case "ALWAYS_INCREMENTAL":
      return PolicySettings_Scheduling_Scheme.ALWAYS_INCREMENTAL;
    case 4:
    case "WEEKLY_INCREMENTAL":
      return PolicySettings_Scheduling_Scheme.WEEKLY_INCREMENTAL;
    case 5:
    case "WEEKLY_FULL_DAILY_INCREMENTAL":
      return PolicySettings_Scheduling_Scheme.WEEKLY_FULL_DAILY_INCREMENTAL;
    case 6:
    case "CUSTOM":
      return PolicySettings_Scheduling_Scheme.CUSTOM;
    case 7:
    case "CDP":
      return PolicySettings_Scheduling_Scheme.CDP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicySettings_Scheduling_Scheme.UNRECOGNIZED;
  }
}

export function policySettings_Scheduling_SchemeToJSON(object: PolicySettings_Scheduling_Scheme): string {
  switch (object) {
    case PolicySettings_Scheduling_Scheme.SCHEME_UNSPECIFIED:
      return "SCHEME_UNSPECIFIED";
    case PolicySettings_Scheduling_Scheme.SIMPLE:
      return "SIMPLE";
    case PolicySettings_Scheduling_Scheme.ALWAYS_FULL:
      return "ALWAYS_FULL";
    case PolicySettings_Scheduling_Scheme.ALWAYS_INCREMENTAL:
      return "ALWAYS_INCREMENTAL";
    case PolicySettings_Scheduling_Scheme.WEEKLY_INCREMENTAL:
      return "WEEKLY_INCREMENTAL";
    case PolicySettings_Scheduling_Scheme.WEEKLY_FULL_DAILY_INCREMENTAL:
      return "WEEKLY_FULL_DAILY_INCREMENTAL";
    case PolicySettings_Scheduling_Scheme.CUSTOM:
      return "CUSTOM";
    case PolicySettings_Scheduling_Scheme.CDP:
      return "CDP";
    case PolicySettings_Scheduling_Scheme.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PolicySettings_Scheduling_BackupSet {
  $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet";
  time?: PolicySettings_Scheduling_BackupSet_Time | undefined;
  sinceLastExecTime?: PolicySettings_Scheduling_BackupSet_SinceLastExecTime | undefined;
}

export interface PolicySettings_Scheduling_BackupSet_Time {
  $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.Time";
  /** Days in a week to perform a backup. */
  weekdays: PolicySettings_Day[];
  /** Time to repeat the backup. */
  repeatAt: PolicySettings_TimeOfDay[];
  /** Frequency of backup repetition. */
  repeatEvery?:
    | PolicySettings_Interval
    | undefined;
  /** The start time of the backup time interval. */
  timeFrom?:
    | PolicySettings_TimeOfDay
    | undefined;
  /** The end time of the backup time interval. */
  timeTo?:
    | PolicySettings_TimeOfDay
    | undefined;
  /**
   * Days in a month to perform a backup.
   * Allowed values are from 1 to 31.
   */
  monthdays: number[];
  /**
   * If set to true, last day of month will activate
   * the policy.
   */
  includeLastDayOfMonth: boolean;
  /** Set of values. Allowed values form 1 to 12. */
  months: number[];
  /** Possible types: `REPEATE_PERIOD_UNSPECIFIED`, `HOURLY`, `DAILY`, `WEEKLY`, `MONTHLY`. */
  type: PolicySettings_RepeatePeriod;
}

export interface PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
  $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.SinceLastExecTime";
  /** The interval between backups. */
  delay?: PolicySettings_Interval | undefined;
}

export interface PolicyApplication {
  $type: "yandex.cloud.backup.v1.PolicyApplication";
  /** Policy ID. */
  policyId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  enabled: boolean;
  status: PolicyApplication_Status;
  createdAt?: Date | undefined;
}

export enum PolicyApplication_Status {
  STATUS_UNSPECIFIED = 0,
  /** OK - Application is applied and everything is OK. */
  OK = 1,
  /** RUNNING - Application is currently running. */
  RUNNING = 2,
  /** DISABLED - Application is disabled. */
  DISABLED = 3,
  UNRECOGNIZED = -1,
}

export function policyApplication_StatusFromJSON(object: any): PolicyApplication_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return PolicyApplication_Status.STATUS_UNSPECIFIED;
    case 1:
    case "OK":
      return PolicyApplication_Status.OK;
    case 2:
    case "RUNNING":
      return PolicyApplication_Status.RUNNING;
    case 3:
    case "DISABLED":
      return PolicyApplication_Status.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicyApplication_Status.UNRECOGNIZED;
  }
}

export function policyApplication_StatusToJSON(object: PolicyApplication_Status): string {
  switch (object) {
    case PolicyApplication_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case PolicyApplication_Status.OK:
      return "OK";
    case PolicyApplication_Status.RUNNING:
      return "RUNNING";
    case PolicyApplication_Status.DISABLED:
      return "DISABLED";
    case PolicyApplication_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePolicy(): Policy {
  return {
    $type: "yandex.cloud.backup.v1.Policy",
    id: "",
    name: "",
    createdAt: undefined,
    updatedAt: undefined,
    enabled: false,
    settings: undefined,
    folderId: "",
  };
}

export const Policy = {
  $type: "yandex.cloud.backup.v1.Policy" as const,

  encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(40).bool(message.enabled);
    }
    if (message.settings !== undefined) {
      PolicySettings.encode(message.settings, writer.uint32(50).fork()).ldelim();
    }
    if (message.folderId !== "") {
      writer.uint32(58).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
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

          message.name = reader.string();
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

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.settings = PolicySettings.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Policy {
    return {
      $type: Policy.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      settings: isSet(object.settings) ? PolicySettings.fromJSON(object.settings) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.settings !== undefined) {
      obj.settings = PolicySettings.toJSON(message.settings);
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Policy>, I>>(base?: I): Policy {
    return Policy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Policy>, I>>(object: I): Policy {
    const message = createBasePolicy();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.enabled = object.enabled ?? false;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? PolicySettings.fromPartial(object.settings)
      : undefined;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Policy.$type, Policy);

function createBasePolicySettings(): PolicySettings {
  return {
    $type: "yandex.cloud.backup.v1.PolicySettings",
    compression: 0,
    format: 0,
    multiVolumeSnapshottingEnabled: false,
    preserveFileSecuritySettings: false,
    reattempts: undefined,
    silentModeEnabled: false,
    splitting: undefined,
    vmSnapshotReattempts: undefined,
    vss: undefined,
    archive: undefined,
    performanceWindow: undefined,
    retention: undefined,
    scheduling: undefined,
    cbt: 0,
    fastBackupEnabled: false,
    quiesceSnapshottingEnabled: false,
  };
}

export const PolicySettings = {
  $type: "yandex.cloud.backup.v1.PolicySettings" as const,

  encode(message: PolicySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.compression !== 0) {
      writer.uint32(8).int32(message.compression);
    }
    if (message.format !== 0) {
      writer.uint32(16).int32(message.format);
    }
    if (message.multiVolumeSnapshottingEnabled === true) {
      writer.uint32(24).bool(message.multiVolumeSnapshottingEnabled);
    }
    if (message.preserveFileSecuritySettings === true) {
      writer.uint32(32).bool(message.preserveFileSecuritySettings);
    }
    if (message.reattempts !== undefined) {
      PolicySettings_RetriesConfiguration.encode(message.reattempts, writer.uint32(42).fork()).ldelim();
    }
    if (message.silentModeEnabled === true) {
      writer.uint32(48).bool(message.silentModeEnabled);
    }
    if (message.splitting !== undefined) {
      PolicySettings_Splitting.encode(message.splitting, writer.uint32(58).fork()).ldelim();
    }
    if (message.vmSnapshotReattempts !== undefined) {
      PolicySettings_RetriesConfiguration.encode(message.vmSnapshotReattempts, writer.uint32(66).fork()).ldelim();
    }
    if (message.vss !== undefined) {
      PolicySettings_VolumeShadowCopyServiceSettings.encode(message.vss, writer.uint32(74).fork()).ldelim();
    }
    if (message.archive !== undefined) {
      PolicySettings_ArchiveProperties.encode(message.archive, writer.uint32(82).fork()).ldelim();
    }
    if (message.performanceWindow !== undefined) {
      PolicySettings_PerformanceWindow.encode(message.performanceWindow, writer.uint32(90).fork()).ldelim();
    }
    if (message.retention !== undefined) {
      PolicySettings_Retention.encode(message.retention, writer.uint32(98).fork()).ldelim();
    }
    if (message.scheduling !== undefined) {
      PolicySettings_Scheduling.encode(message.scheduling, writer.uint32(122).fork()).ldelim();
    }
    if (message.cbt !== 0) {
      writer.uint32(128).int32(message.cbt);
    }
    if (message.fastBackupEnabled === true) {
      writer.uint32(136).bool(message.fastBackupEnabled);
    }
    if (message.quiesceSnapshottingEnabled === true) {
      writer.uint32(144).bool(message.quiesceSnapshottingEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.compression = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.multiVolumeSnapshottingEnabled = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.preserveFileSecuritySettings = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.reattempts = PolicySettings_RetriesConfiguration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.silentModeEnabled = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.splitting = PolicySettings_Splitting.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.vmSnapshotReattempts = PolicySettings_RetriesConfiguration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.vss = PolicySettings_VolumeShadowCopyServiceSettings.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.archive = PolicySettings_ArchiveProperties.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.performanceWindow = PolicySettings_PerformanceWindow.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.retention = PolicySettings_Retention.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.scheduling = PolicySettings_Scheduling.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.cbt = reader.int32() as any;
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.fastBackupEnabled = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.quiesceSnapshottingEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings {
    return {
      $type: PolicySettings.$type,
      compression: isSet(object.compression) ? policySettings_CompressionFromJSON(object.compression) : 0,
      format: isSet(object.format) ? formatFromJSON(object.format) : 0,
      multiVolumeSnapshottingEnabled: isSet(object.multiVolumeSnapshottingEnabled)
        ? globalThis.Boolean(object.multiVolumeSnapshottingEnabled)
        : false,
      preserveFileSecuritySettings: isSet(object.preserveFileSecuritySettings)
        ? globalThis.Boolean(object.preserveFileSecuritySettings)
        : false,
      reattempts: isSet(object.reattempts)
        ? PolicySettings_RetriesConfiguration.fromJSON(object.reattempts)
        : undefined,
      silentModeEnabled: isSet(object.silentModeEnabled) ? globalThis.Boolean(object.silentModeEnabled) : false,
      splitting: isSet(object.splitting) ? PolicySettings_Splitting.fromJSON(object.splitting) : undefined,
      vmSnapshotReattempts: isSet(object.vmSnapshotReattempts)
        ? PolicySettings_RetriesConfiguration.fromJSON(object.vmSnapshotReattempts)
        : undefined,
      vss: isSet(object.vss) ? PolicySettings_VolumeShadowCopyServiceSettings.fromJSON(object.vss) : undefined,
      archive: isSet(object.archive) ? PolicySettings_ArchiveProperties.fromJSON(object.archive) : undefined,
      performanceWindow: isSet(object.performanceWindow)
        ? PolicySettings_PerformanceWindow.fromJSON(object.performanceWindow)
        : undefined,
      retention: isSet(object.retention) ? PolicySettings_Retention.fromJSON(object.retention) : undefined,
      scheduling: isSet(object.scheduling) ? PolicySettings_Scheduling.fromJSON(object.scheduling) : undefined,
      cbt: isSet(object.cbt) ? policySettings_ChangedBlockTrackingFromJSON(object.cbt) : 0,
      fastBackupEnabled: isSet(object.fastBackupEnabled) ? globalThis.Boolean(object.fastBackupEnabled) : false,
      quiesceSnapshottingEnabled: isSet(object.quiesceSnapshottingEnabled)
        ? globalThis.Boolean(object.quiesceSnapshottingEnabled)
        : false,
    };
  },

  toJSON(message: PolicySettings): unknown {
    const obj: any = {};
    if (message.compression !== 0) {
      obj.compression = policySettings_CompressionToJSON(message.compression);
    }
    if (message.format !== 0) {
      obj.format = formatToJSON(message.format);
    }
    if (message.multiVolumeSnapshottingEnabled === true) {
      obj.multiVolumeSnapshottingEnabled = message.multiVolumeSnapshottingEnabled;
    }
    if (message.preserveFileSecuritySettings === true) {
      obj.preserveFileSecuritySettings = message.preserveFileSecuritySettings;
    }
    if (message.reattempts !== undefined) {
      obj.reattempts = PolicySettings_RetriesConfiguration.toJSON(message.reattempts);
    }
    if (message.silentModeEnabled === true) {
      obj.silentModeEnabled = message.silentModeEnabled;
    }
    if (message.splitting !== undefined) {
      obj.splitting = PolicySettings_Splitting.toJSON(message.splitting);
    }
    if (message.vmSnapshotReattempts !== undefined) {
      obj.vmSnapshotReattempts = PolicySettings_RetriesConfiguration.toJSON(message.vmSnapshotReattempts);
    }
    if (message.vss !== undefined) {
      obj.vss = PolicySettings_VolumeShadowCopyServiceSettings.toJSON(message.vss);
    }
    if (message.archive !== undefined) {
      obj.archive = PolicySettings_ArchiveProperties.toJSON(message.archive);
    }
    if (message.performanceWindow !== undefined) {
      obj.performanceWindow = PolicySettings_PerformanceWindow.toJSON(message.performanceWindow);
    }
    if (message.retention !== undefined) {
      obj.retention = PolicySettings_Retention.toJSON(message.retention);
    }
    if (message.scheduling !== undefined) {
      obj.scheduling = PolicySettings_Scheduling.toJSON(message.scheduling);
    }
    if (message.cbt !== 0) {
      obj.cbt = policySettings_ChangedBlockTrackingToJSON(message.cbt);
    }
    if (message.fastBackupEnabled === true) {
      obj.fastBackupEnabled = message.fastBackupEnabled;
    }
    if (message.quiesceSnapshottingEnabled === true) {
      obj.quiesceSnapshottingEnabled = message.quiesceSnapshottingEnabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings>, I>>(base?: I): PolicySettings {
    return PolicySettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings>, I>>(object: I): PolicySettings {
    const message = createBasePolicySettings();
    message.compression = object.compression ?? 0;
    message.format = object.format ?? 0;
    message.multiVolumeSnapshottingEnabled = object.multiVolumeSnapshottingEnabled ?? false;
    message.preserveFileSecuritySettings = object.preserveFileSecuritySettings ?? false;
    message.reattempts = (object.reattempts !== undefined && object.reattempts !== null)
      ? PolicySettings_RetriesConfiguration.fromPartial(object.reattempts)
      : undefined;
    message.silentModeEnabled = object.silentModeEnabled ?? false;
    message.splitting = (object.splitting !== undefined && object.splitting !== null)
      ? PolicySettings_Splitting.fromPartial(object.splitting)
      : undefined;
    message.vmSnapshotReattempts = (object.vmSnapshotReattempts !== undefined && object.vmSnapshotReattempts !== null)
      ? PolicySettings_RetriesConfiguration.fromPartial(object.vmSnapshotReattempts)
      : undefined;
    message.vss = (object.vss !== undefined && object.vss !== null)
      ? PolicySettings_VolumeShadowCopyServiceSettings.fromPartial(object.vss)
      : undefined;
    message.archive = (object.archive !== undefined && object.archive !== null)
      ? PolicySettings_ArchiveProperties.fromPartial(object.archive)
      : undefined;
    message.performanceWindow = (object.performanceWindow !== undefined && object.performanceWindow !== null)
      ? PolicySettings_PerformanceWindow.fromPartial(object.performanceWindow)
      : undefined;
    message.retention = (object.retention !== undefined && object.retention !== null)
      ? PolicySettings_Retention.fromPartial(object.retention)
      : undefined;
    message.scheduling = (object.scheduling !== undefined && object.scheduling !== null)
      ? PolicySettings_Scheduling.fromPartial(object.scheduling)
      : undefined;
    message.cbt = object.cbt ?? 0;
    message.fastBackupEnabled = object.fastBackupEnabled ?? false;
    message.quiesceSnapshottingEnabled = object.quiesceSnapshottingEnabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings.$type, PolicySettings);

function createBasePolicySettings_Interval(): PolicySettings_Interval {
  return { $type: "yandex.cloud.backup.v1.PolicySettings.Interval", type: 0, count: 0 };
}

export const PolicySettings_Interval = {
  $type: "yandex.cloud.backup.v1.PolicySettings.Interval" as const,

  encode(message: PolicySettings_Interval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.count !== 0) {
      writer.uint32(16).int64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Interval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_Interval();
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

          message.count = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_Interval {
    return {
      $type: PolicySettings_Interval.$type,
      type: isSet(object.type) ? policySettings_Interval_TypeFromJSON(object.type) : 0,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
    };
  },

  toJSON(message: PolicySettings_Interval): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = policySettings_Interval_TypeToJSON(message.type);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_Interval>, I>>(base?: I): PolicySettings_Interval {
    return PolicySettings_Interval.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_Interval>, I>>(object: I): PolicySettings_Interval {
    const message = createBasePolicySettings_Interval();
    message.type = object.type ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_Interval.$type, PolicySettings_Interval);

function createBasePolicySettings_RetriesConfiguration(): PolicySettings_RetriesConfiguration {
  return {
    $type: "yandex.cloud.backup.v1.PolicySettings.RetriesConfiguration",
    enabled: false,
    interval: undefined,
    maxAttempts: 0,
  };
}

export const PolicySettings_RetriesConfiguration = {
  $type: "yandex.cloud.backup.v1.PolicySettings.RetriesConfiguration" as const,

  encode(message: PolicySettings_RetriesConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.interval !== undefined) {
      PolicySettings_Interval.encode(message.interval, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxAttempts !== 0) {
      writer.uint32(24).int64(message.maxAttempts);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_RetriesConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_RetriesConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.interval = PolicySettings_Interval.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxAttempts = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_RetriesConfiguration {
    return {
      $type: PolicySettings_RetriesConfiguration.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      interval: isSet(object.interval) ? PolicySettings_Interval.fromJSON(object.interval) : undefined,
      maxAttempts: isSet(object.maxAttempts) ? globalThis.Number(object.maxAttempts) : 0,
    };
  },

  toJSON(message: PolicySettings_RetriesConfiguration): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.interval !== undefined) {
      obj.interval = PolicySettings_Interval.toJSON(message.interval);
    }
    if (message.maxAttempts !== 0) {
      obj.maxAttempts = Math.round(message.maxAttempts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_RetriesConfiguration>, I>>(
    base?: I,
  ): PolicySettings_RetriesConfiguration {
    return PolicySettings_RetriesConfiguration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_RetriesConfiguration>, I>>(
    object: I,
  ): PolicySettings_RetriesConfiguration {
    const message = createBasePolicySettings_RetriesConfiguration();
    message.enabled = object.enabled ?? false;
    message.interval = (object.interval !== undefined && object.interval !== null)
      ? PolicySettings_Interval.fromPartial(object.interval)
      : undefined;
    message.maxAttempts = object.maxAttempts ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_RetriesConfiguration.$type, PolicySettings_RetriesConfiguration);

function createBasePolicySettings_Splitting(): PolicySettings_Splitting {
  return { $type: "yandex.cloud.backup.v1.PolicySettings.Splitting", size: 0 };
}

export const PolicySettings_Splitting = {
  $type: "yandex.cloud.backup.v1.PolicySettings.Splitting" as const,

  encode(message: PolicySettings_Splitting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Splitting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_Splitting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_Splitting {
    return { $type: PolicySettings_Splitting.$type, size: isSet(object.size) ? globalThis.Number(object.size) : 0 };
  },

  toJSON(message: PolicySettings_Splitting): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_Splitting>, I>>(base?: I): PolicySettings_Splitting {
    return PolicySettings_Splitting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_Splitting>, I>>(object: I): PolicySettings_Splitting {
    const message = createBasePolicySettings_Splitting();
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_Splitting.$type, PolicySettings_Splitting);

function createBasePolicySettings_VolumeShadowCopyServiceSettings(): PolicySettings_VolumeShadowCopyServiceSettings {
  return {
    $type: "yandex.cloud.backup.v1.PolicySettings.VolumeShadowCopyServiceSettings",
    enabled: false,
    provider: 0,
  };
}

export const PolicySettings_VolumeShadowCopyServiceSettings = {
  $type: "yandex.cloud.backup.v1.PolicySettings.VolumeShadowCopyServiceSettings" as const,

  encode(
    message: PolicySettings_VolumeShadowCopyServiceSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.provider !== 0) {
      writer.uint32(16).int32(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_VolumeShadowCopyServiceSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_VolumeShadowCopyServiceSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.provider = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_VolumeShadowCopyServiceSettings {
    return {
      $type: PolicySettings_VolumeShadowCopyServiceSettings.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      provider: isSet(object.provider)
        ? policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON(object.provider)
        : 0,
    };
  },

  toJSON(message: PolicySettings_VolumeShadowCopyServiceSettings): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.provider !== 0) {
      obj.provider = policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON(message.provider);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_VolumeShadowCopyServiceSettings>, I>>(
    base?: I,
  ): PolicySettings_VolumeShadowCopyServiceSettings {
    return PolicySettings_VolumeShadowCopyServiceSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_VolumeShadowCopyServiceSettings>, I>>(
    object: I,
  ): PolicySettings_VolumeShadowCopyServiceSettings {
    const message = createBasePolicySettings_VolumeShadowCopyServiceSettings();
    message.enabled = object.enabled ?? false;
    message.provider = object.provider ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  PolicySettings_VolumeShadowCopyServiceSettings.$type,
  PolicySettings_VolumeShadowCopyServiceSettings,
);

function createBasePolicySettings_ArchiveProperties(): PolicySettings_ArchiveProperties {
  return { $type: "yandex.cloud.backup.v1.PolicySettings.ArchiveProperties", name: "" };
}

export const PolicySettings_ArchiveProperties = {
  $type: "yandex.cloud.backup.v1.PolicySettings.ArchiveProperties" as const,

  encode(message: PolicySettings_ArchiveProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_ArchiveProperties {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_ArchiveProperties();
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

  fromJSON(object: any): PolicySettings_ArchiveProperties {
    return {
      $type: PolicySettings_ArchiveProperties.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: PolicySettings_ArchiveProperties): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_ArchiveProperties>, I>>(
    base?: I,
  ): PolicySettings_ArchiveProperties {
    return PolicySettings_ArchiveProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_ArchiveProperties>, I>>(
    object: I,
  ): PolicySettings_ArchiveProperties {
    const message = createBasePolicySettings_ArchiveProperties();
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_ArchiveProperties.$type, PolicySettings_ArchiveProperties);

function createBasePolicySettings_PerformanceWindow(): PolicySettings_PerformanceWindow {
  return { $type: "yandex.cloud.backup.v1.PolicySettings.PerformanceWindow", enabled: false };
}

export const PolicySettings_PerformanceWindow = {
  $type: "yandex.cloud.backup.v1.PolicySettings.PerformanceWindow" as const,

  encode(message: PolicySettings_PerformanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_PerformanceWindow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_PerformanceWindow();
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

  fromJSON(object: any): PolicySettings_PerformanceWindow {
    return {
      $type: PolicySettings_PerformanceWindow.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
    };
  },

  toJSON(message: PolicySettings_PerformanceWindow): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_PerformanceWindow>, I>>(
    base?: I,
  ): PolicySettings_PerformanceWindow {
    return PolicySettings_PerformanceWindow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_PerformanceWindow>, I>>(
    object: I,
  ): PolicySettings_PerformanceWindow {
    const message = createBasePolicySettings_PerformanceWindow();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_PerformanceWindow.$type, PolicySettings_PerformanceWindow);

function createBasePolicySettings_TimeOfDay(): PolicySettings_TimeOfDay {
  return { $type: "yandex.cloud.backup.v1.PolicySettings.TimeOfDay", hour: 0, minute: 0 };
}

export const PolicySettings_TimeOfDay = {
  $type: "yandex.cloud.backup.v1.PolicySettings.TimeOfDay" as const,

  encode(message: PolicySettings_TimeOfDay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hour !== 0) {
      writer.uint32(8).int64(message.hour);
    }
    if (message.minute !== 0) {
      writer.uint32(16).int64(message.minute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_TimeOfDay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_TimeOfDay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hour = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minute = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_TimeOfDay {
    return {
      $type: PolicySettings_TimeOfDay.$type,
      hour: isSet(object.hour) ? globalThis.Number(object.hour) : 0,
      minute: isSet(object.minute) ? globalThis.Number(object.minute) : 0,
    };
  },

  toJSON(message: PolicySettings_TimeOfDay): unknown {
    const obj: any = {};
    if (message.hour !== 0) {
      obj.hour = Math.round(message.hour);
    }
    if (message.minute !== 0) {
      obj.minute = Math.round(message.minute);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_TimeOfDay>, I>>(base?: I): PolicySettings_TimeOfDay {
    return PolicySettings_TimeOfDay.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_TimeOfDay>, I>>(object: I): PolicySettings_TimeOfDay {
    const message = createBasePolicySettings_TimeOfDay();
    message.hour = object.hour ?? 0;
    message.minute = object.minute ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_TimeOfDay.$type, PolicySettings_TimeOfDay);

function createBasePolicySettings_Retention(): PolicySettings_Retention {
  return { $type: "yandex.cloud.backup.v1.PolicySettings.Retention", rules: [], afterBackup: false };
}

export const PolicySettings_Retention = {
  $type: "yandex.cloud.backup.v1.PolicySettings.Retention" as const,

  encode(message: PolicySettings_Retention, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      PolicySettings_Retention_RetentionRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.afterBackup === true) {
      writer.uint32(16).bool(message.afterBackup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Retention {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_Retention();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rules.push(PolicySettings_Retention_RetentionRule.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.afterBackup = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_Retention {
    return {
      $type: PolicySettings_Retention.$type,
      rules: globalThis.Array.isArray(object?.rules)
        ? object.rules.map((e: any) => PolicySettings_Retention_RetentionRule.fromJSON(e))
        : [],
      afterBackup: isSet(object.afterBackup) ? globalThis.Boolean(object.afterBackup) : false,
    };
  },

  toJSON(message: PolicySettings_Retention): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => PolicySettings_Retention_RetentionRule.toJSON(e));
    }
    if (message.afterBackup === true) {
      obj.afterBackup = message.afterBackup;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_Retention>, I>>(base?: I): PolicySettings_Retention {
    return PolicySettings_Retention.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_Retention>, I>>(object: I): PolicySettings_Retention {
    const message = createBasePolicySettings_Retention();
    message.rules = object.rules?.map((e) => PolicySettings_Retention_RetentionRule.fromPartial(e)) || [];
    message.afterBackup = object.afterBackup ?? false;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_Retention.$type, PolicySettings_Retention);

function createBasePolicySettings_Retention_RetentionRule(): PolicySettings_Retention_RetentionRule {
  return {
    $type: "yandex.cloud.backup.v1.PolicySettings.Retention.RetentionRule",
    backupSet: [],
    maxAge: undefined,
    maxCount: undefined,
  };
}

export const PolicySettings_Retention_RetentionRule = {
  $type: "yandex.cloud.backup.v1.PolicySettings.Retention.RetentionRule" as const,

  encode(message: PolicySettings_Retention_RetentionRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.backupSet) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.maxAge !== undefined) {
      PolicySettings_Interval.encode(message.maxAge, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxCount !== undefined) {
      writer.uint32(24).int64(message.maxCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Retention_RetentionRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_Retention_RetentionRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.backupSet.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.backupSet.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxAge = PolicySettings_Interval.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxCount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_Retention_RetentionRule {
    return {
      $type: PolicySettings_Retention_RetentionRule.$type,
      backupSet: globalThis.Array.isArray(object?.backupSet)
        ? object.backupSet.map((e: any) => policySettings_RepeatePeriodFromJSON(e))
        : [],
      maxAge: isSet(object.maxAge) ? PolicySettings_Interval.fromJSON(object.maxAge) : undefined,
      maxCount: isSet(object.maxCount) ? globalThis.Number(object.maxCount) : undefined,
    };
  },

  toJSON(message: PolicySettings_Retention_RetentionRule): unknown {
    const obj: any = {};
    if (message.backupSet?.length) {
      obj.backupSet = message.backupSet.map((e) => policySettings_RepeatePeriodToJSON(e));
    }
    if (message.maxAge !== undefined) {
      obj.maxAge = PolicySettings_Interval.toJSON(message.maxAge);
    }
    if (message.maxCount !== undefined) {
      obj.maxCount = Math.round(message.maxCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_Retention_RetentionRule>, I>>(
    base?: I,
  ): PolicySettings_Retention_RetentionRule {
    return PolicySettings_Retention_RetentionRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_Retention_RetentionRule>, I>>(
    object: I,
  ): PolicySettings_Retention_RetentionRule {
    const message = createBasePolicySettings_Retention_RetentionRule();
    message.backupSet = object.backupSet?.map((e) => e) || [];
    message.maxAge = (object.maxAge !== undefined && object.maxAge !== null)
      ? PolicySettings_Interval.fromPartial(object.maxAge)
      : undefined;
    message.maxCount = object.maxCount ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_Retention_RetentionRule.$type, PolicySettings_Retention_RetentionRule);

function createBasePolicySettings_Scheduling(): PolicySettings_Scheduling {
  return {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling",
    backupSets: [],
    enabled: false,
    maxParallelBackups: 0,
    randMaxDelay: undefined,
    scheme: 0,
    weeklyBackupDay: 0,
  };
}

export const PolicySettings_Scheduling = {
  $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling" as const,

  encode(message: PolicySettings_Scheduling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backupSets) {
      PolicySettings_Scheduling_BackupSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.maxParallelBackups !== 0) {
      writer.uint32(24).int64(message.maxParallelBackups);
    }
    if (message.randMaxDelay !== undefined) {
      PolicySettings_Interval.encode(message.randMaxDelay, writer.uint32(34).fork()).ldelim();
    }
    if (message.scheme !== 0) {
      writer.uint32(40).int32(message.scheme);
    }
    if (message.weeklyBackupDay !== 0) {
      writer.uint32(48).int32(message.weeklyBackupDay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Scheduling {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_Scheduling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backupSets.push(PolicySettings_Scheduling_BackupSet.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxParallelBackups = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.randMaxDelay = PolicySettings_Interval.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.scheme = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.weeklyBackupDay = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_Scheduling {
    return {
      $type: PolicySettings_Scheduling.$type,
      backupSets: globalThis.Array.isArray(object?.backupSets)
        ? object.backupSets.map((e: any) => PolicySettings_Scheduling_BackupSet.fromJSON(e))
        : [],
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      maxParallelBackups: isSet(object.maxParallelBackups) ? globalThis.Number(object.maxParallelBackups) : 0,
      randMaxDelay: isSet(object.randMaxDelay) ? PolicySettings_Interval.fromJSON(object.randMaxDelay) : undefined,
      scheme: isSet(object.scheme) ? policySettings_Scheduling_SchemeFromJSON(object.scheme) : 0,
      weeklyBackupDay: isSet(object.weeklyBackupDay) ? policySettings_DayFromJSON(object.weeklyBackupDay) : 0,
    };
  },

  toJSON(message: PolicySettings_Scheduling): unknown {
    const obj: any = {};
    if (message.backupSets?.length) {
      obj.backupSets = message.backupSets.map((e) => PolicySettings_Scheduling_BackupSet.toJSON(e));
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.maxParallelBackups !== 0) {
      obj.maxParallelBackups = Math.round(message.maxParallelBackups);
    }
    if (message.randMaxDelay !== undefined) {
      obj.randMaxDelay = PolicySettings_Interval.toJSON(message.randMaxDelay);
    }
    if (message.scheme !== 0) {
      obj.scheme = policySettings_Scheduling_SchemeToJSON(message.scheme);
    }
    if (message.weeklyBackupDay !== 0) {
      obj.weeklyBackupDay = policySettings_DayToJSON(message.weeklyBackupDay);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_Scheduling>, I>>(base?: I): PolicySettings_Scheduling {
    return PolicySettings_Scheduling.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_Scheduling>, I>>(object: I): PolicySettings_Scheduling {
    const message = createBasePolicySettings_Scheduling();
    message.backupSets = object.backupSets?.map((e) => PolicySettings_Scheduling_BackupSet.fromPartial(e)) || [];
    message.enabled = object.enabled ?? false;
    message.maxParallelBackups = object.maxParallelBackups ?? 0;
    message.randMaxDelay = (object.randMaxDelay !== undefined && object.randMaxDelay !== null)
      ? PolicySettings_Interval.fromPartial(object.randMaxDelay)
      : undefined;
    message.scheme = object.scheme ?? 0;
    message.weeklyBackupDay = object.weeklyBackupDay ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_Scheduling.$type, PolicySettings_Scheduling);

function createBasePolicySettings_Scheduling_BackupSet(): PolicySettings_Scheduling_BackupSet {
  return {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet",
    time: undefined,
    sinceLastExecTime: undefined,
  };
}

export const PolicySettings_Scheduling_BackupSet = {
  $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet" as const,

  encode(message: PolicySettings_Scheduling_BackupSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      PolicySettings_Scheduling_BackupSet_Time.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.sinceLastExecTime !== undefined) {
      PolicySettings_Scheduling_BackupSet_SinceLastExecTime.encode(message.sinceLastExecTime, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Scheduling_BackupSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_Scheduling_BackupSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.time = PolicySettings_Scheduling_BackupSet_Time.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sinceLastExecTime = PolicySettings_Scheduling_BackupSet_SinceLastExecTime.decode(
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

  fromJSON(object: any): PolicySettings_Scheduling_BackupSet {
    return {
      $type: PolicySettings_Scheduling_BackupSet.$type,
      time: isSet(object.time) ? PolicySettings_Scheduling_BackupSet_Time.fromJSON(object.time) : undefined,
      sinceLastExecTime: isSet(object.sinceLastExecTime)
        ? PolicySettings_Scheduling_BackupSet_SinceLastExecTime.fromJSON(object.sinceLastExecTime)
        : undefined,
    };
  },

  toJSON(message: PolicySettings_Scheduling_BackupSet): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = PolicySettings_Scheduling_BackupSet_Time.toJSON(message.time);
    }
    if (message.sinceLastExecTime !== undefined) {
      obj.sinceLastExecTime = PolicySettings_Scheduling_BackupSet_SinceLastExecTime.toJSON(message.sinceLastExecTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_Scheduling_BackupSet>, I>>(
    base?: I,
  ): PolicySettings_Scheduling_BackupSet {
    return PolicySettings_Scheduling_BackupSet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_Scheduling_BackupSet>, I>>(
    object: I,
  ): PolicySettings_Scheduling_BackupSet {
    const message = createBasePolicySettings_Scheduling_BackupSet();
    message.time = (object.time !== undefined && object.time !== null)
      ? PolicySettings_Scheduling_BackupSet_Time.fromPartial(object.time)
      : undefined;
    message.sinceLastExecTime = (object.sinceLastExecTime !== undefined && object.sinceLastExecTime !== null)
      ? PolicySettings_Scheduling_BackupSet_SinceLastExecTime.fromPartial(object.sinceLastExecTime)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_Scheduling_BackupSet.$type, PolicySettings_Scheduling_BackupSet);

function createBasePolicySettings_Scheduling_BackupSet_Time(): PolicySettings_Scheduling_BackupSet_Time {
  return {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.Time",
    weekdays: [],
    repeatAt: [],
    repeatEvery: undefined,
    timeFrom: undefined,
    timeTo: undefined,
    monthdays: [],
    includeLastDayOfMonth: false,
    months: [],
    type: 0,
  };
}

export const PolicySettings_Scheduling_BackupSet_Time = {
  $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.Time" as const,

  encode(message: PolicySettings_Scheduling_BackupSet_Time, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.weekdays) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.repeatAt) {
      PolicySettings_TimeOfDay.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.repeatEvery !== undefined) {
      PolicySettings_Interval.encode(message.repeatEvery, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeFrom !== undefined) {
      PolicySettings_TimeOfDay.encode(message.timeFrom, writer.uint32(34).fork()).ldelim();
    }
    if (message.timeTo !== undefined) {
      PolicySettings_TimeOfDay.encode(message.timeTo, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.monthdays) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.includeLastDayOfMonth === true) {
      writer.uint32(56).bool(message.includeLastDayOfMonth);
    }
    writer.uint32(66).fork();
    for (const v of message.months) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.type !== 0) {
      writer.uint32(72).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Scheduling_BackupSet_Time {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_Scheduling_BackupSet_Time();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.weekdays.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weekdays.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.repeatAt.push(PolicySettings_TimeOfDay.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repeatEvery = PolicySettings_Interval.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timeFrom = PolicySettings_TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.timeTo = PolicySettings_TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag === 48) {
            message.monthdays.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.monthdays.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.includeLastDayOfMonth = reader.bool();
          continue;
        case 8:
          if (tag === 64) {
            message.months.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.months.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_Scheduling_BackupSet_Time {
    return {
      $type: PolicySettings_Scheduling_BackupSet_Time.$type,
      weekdays: globalThis.Array.isArray(object?.weekdays)
        ? object.weekdays.map((e: any) => policySettings_DayFromJSON(e))
        : [],
      repeatAt: globalThis.Array.isArray(object?.repeatAt)
        ? object.repeatAt.map((e: any) => PolicySettings_TimeOfDay.fromJSON(e))
        : [],
      repeatEvery: isSet(object.repeatEvery) ? PolicySettings_Interval.fromJSON(object.repeatEvery) : undefined,
      timeFrom: isSet(object.timeFrom) ? PolicySettings_TimeOfDay.fromJSON(object.timeFrom) : undefined,
      timeTo: isSet(object.timeTo) ? PolicySettings_TimeOfDay.fromJSON(object.timeTo) : undefined,
      monthdays: globalThis.Array.isArray(object?.monthdays)
        ? object.monthdays.map((e: any) => globalThis.Number(e))
        : [],
      includeLastDayOfMonth: isSet(object.includeLastDayOfMonth)
        ? globalThis.Boolean(object.includeLastDayOfMonth)
        : false,
      months: globalThis.Array.isArray(object?.months)
        ? object.months.map((e: any) => globalThis.Number(e))
        : [],
      type: isSet(object.type) ? policySettings_RepeatePeriodFromJSON(object.type) : 0,
    };
  },

  toJSON(message: PolicySettings_Scheduling_BackupSet_Time): unknown {
    const obj: any = {};
    if (message.weekdays?.length) {
      obj.weekdays = message.weekdays.map((e) => policySettings_DayToJSON(e));
    }
    if (message.repeatAt?.length) {
      obj.repeatAt = message.repeatAt.map((e) => PolicySettings_TimeOfDay.toJSON(e));
    }
    if (message.repeatEvery !== undefined) {
      obj.repeatEvery = PolicySettings_Interval.toJSON(message.repeatEvery);
    }
    if (message.timeFrom !== undefined) {
      obj.timeFrom = PolicySettings_TimeOfDay.toJSON(message.timeFrom);
    }
    if (message.timeTo !== undefined) {
      obj.timeTo = PolicySettings_TimeOfDay.toJSON(message.timeTo);
    }
    if (message.monthdays?.length) {
      obj.monthdays = message.monthdays.map((e) => Math.round(e));
    }
    if (message.includeLastDayOfMonth === true) {
      obj.includeLastDayOfMonth = message.includeLastDayOfMonth;
    }
    if (message.months?.length) {
      obj.months = message.months.map((e) => Math.round(e));
    }
    if (message.type !== 0) {
      obj.type = policySettings_RepeatePeriodToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_Scheduling_BackupSet_Time>, I>>(
    base?: I,
  ): PolicySettings_Scheduling_BackupSet_Time {
    return PolicySettings_Scheduling_BackupSet_Time.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_Scheduling_BackupSet_Time>, I>>(
    object: I,
  ): PolicySettings_Scheduling_BackupSet_Time {
    const message = createBasePolicySettings_Scheduling_BackupSet_Time();
    message.weekdays = object.weekdays?.map((e) => e) || [];
    message.repeatAt = object.repeatAt?.map((e) => PolicySettings_TimeOfDay.fromPartial(e)) || [];
    message.repeatEvery = (object.repeatEvery !== undefined && object.repeatEvery !== null)
      ? PolicySettings_Interval.fromPartial(object.repeatEvery)
      : undefined;
    message.timeFrom = (object.timeFrom !== undefined && object.timeFrom !== null)
      ? PolicySettings_TimeOfDay.fromPartial(object.timeFrom)
      : undefined;
    message.timeTo = (object.timeTo !== undefined && object.timeTo !== null)
      ? PolicySettings_TimeOfDay.fromPartial(object.timeTo)
      : undefined;
    message.monthdays = object.monthdays?.map((e) => e) || [];
    message.includeLastDayOfMonth = object.includeLastDayOfMonth ?? false;
    message.months = object.months?.map((e) => e) || [];
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PolicySettings_Scheduling_BackupSet_Time.$type, PolicySettings_Scheduling_BackupSet_Time);

function createBasePolicySettings_Scheduling_BackupSet_SinceLastExecTime(): PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
  return { $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.SinceLastExecTime", delay: undefined };
}

export const PolicySettings_Scheduling_BackupSet_SinceLastExecTime = {
  $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.SinceLastExecTime" as const,

  encode(
    message: PolicySettings_Scheduling_BackupSet_SinceLastExecTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delay !== undefined) {
      PolicySettings_Interval.encode(message.delay, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySettings_Scheduling_BackupSet_SinceLastExecTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delay = PolicySettings_Interval.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
    return {
      $type: PolicySettings_Scheduling_BackupSet_SinceLastExecTime.$type,
      delay: isSet(object.delay) ? PolicySettings_Interval.fromJSON(object.delay) : undefined,
    };
  },

  toJSON(message: PolicySettings_Scheduling_BackupSet_SinceLastExecTime): unknown {
    const obj: any = {};
    if (message.delay !== undefined) {
      obj.delay = PolicySettings_Interval.toJSON(message.delay);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySettings_Scheduling_BackupSet_SinceLastExecTime>, I>>(
    base?: I,
  ): PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
    return PolicySettings_Scheduling_BackupSet_SinceLastExecTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySettings_Scheduling_BackupSet_SinceLastExecTime>, I>>(
    object: I,
  ): PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
    const message = createBasePolicySettings_Scheduling_BackupSet_SinceLastExecTime();
    message.delay = (object.delay !== undefined && object.delay !== null)
      ? PolicySettings_Interval.fromPartial(object.delay)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  PolicySettings_Scheduling_BackupSet_SinceLastExecTime.$type,
  PolicySettings_Scheduling_BackupSet_SinceLastExecTime,
);

function createBasePolicyApplication(): PolicyApplication {
  return {
    $type: "yandex.cloud.backup.v1.PolicyApplication",
    policyId: "",
    computeInstanceId: "",
    enabled: false,
    status: 0,
    createdAt: undefined,
  };
}

export const PolicyApplication = {
  $type: "yandex.cloud.backup.v1.PolicyApplication" as const,

  encode(message: PolicyApplication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyApplication {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.policyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicyApplication {
    return {
      $type: PolicyApplication.$type,
      policyId: isSet(object.policyId) ? globalThis.String(object.policyId) : "",
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      status: isSet(object.status) ? policyApplication_StatusFromJSON(object.status) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: PolicyApplication): unknown {
    const obj: any = {};
    if (message.policyId !== "") {
      obj.policyId = message.policyId;
    }
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.status !== 0) {
      obj.status = policyApplication_StatusToJSON(message.status);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicyApplication>, I>>(base?: I): PolicyApplication {
    return PolicyApplication.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicyApplication>, I>>(object: I): PolicyApplication {
    const message = createBasePolicyApplication();
    message.policyId = object.policyId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.enabled = object.enabled ?? false;
    message.status = object.status ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PolicyApplication.$type, PolicyApplication);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
