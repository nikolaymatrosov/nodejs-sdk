/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { BackupConfig } from "./backup";

export const protobufPackage = "yandex.cloud.ydb.v1";

export enum AlertEvaluationStatus {
  ALERT_EVALUATION_STATUS_UNSPECIFIED = 0,
  ALERT_EVALUATION_STATUS_OK = 1,
  ALERT_EVALUATION_STATUS_NO_DATA = 2,
  ALERT_EVALUATION_STATUS_ERROR = 3,
  ALERT_EVALUATION_STATUS_ALARM = 4,
  ALERT_EVALUATION_STATUS_WARN = 5,
  UNRECOGNIZED = -1,
}

export function alertEvaluationStatusFromJSON(object: any): AlertEvaluationStatus {
  switch (object) {
    case 0:
    case "ALERT_EVALUATION_STATUS_UNSPECIFIED":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_UNSPECIFIED;
    case 1:
    case "ALERT_EVALUATION_STATUS_OK":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_OK;
    case 2:
    case "ALERT_EVALUATION_STATUS_NO_DATA":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_NO_DATA;
    case 3:
    case "ALERT_EVALUATION_STATUS_ERROR":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ERROR;
    case 4:
    case "ALERT_EVALUATION_STATUS_ALARM":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ALARM;
    case 5:
    case "ALERT_EVALUATION_STATUS_WARN":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_WARN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AlertEvaluationStatus.UNRECOGNIZED;
  }
}

export function alertEvaluationStatusToJSON(object: AlertEvaluationStatus): string {
  switch (object) {
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_UNSPECIFIED:
      return "ALERT_EVALUATION_STATUS_UNSPECIFIED";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_OK:
      return "ALERT_EVALUATION_STATUS_OK";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_NO_DATA:
      return "ALERT_EVALUATION_STATUS_NO_DATA";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ERROR:
      return "ALERT_EVALUATION_STATUS_ERROR";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ALARM:
      return "ALERT_EVALUATION_STATUS_ALARM";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_WARN:
      return "ALERT_EVALUATION_STATUS_WARN";
    case AlertEvaluationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** YDB database. */
export interface Database {
  $type: "yandex.cloud.ydb.v1.Database";
  id: string;
  folderId: string;
  createdAt?: Date | undefined;
  name: string;
  description: string;
  status: Database_Status;
  endpoint: string;
  resourcePresetId: string;
  storageConfig?: StorageConfig | undefined;
  scalePolicy?: ScalePolicy | undefined;
  networkId: string;
  subnetIds: string[];
  /** deprecated field */
  zonalDatabase?:
    | ZonalDatabase
    | undefined;
  /** deprecated field */
  regionalDatabase?: RegionalDatabase | undefined;
  dedicatedDatabase?: DedicatedDatabase | undefined;
  serverlessDatabase?: ServerlessDatabase | undefined;
  assignPublicIps: boolean;
  locationId: string;
  labels: { [key: string]: string };
  backupConfig?: BackupConfig | undefined;
  documentApiEndpoint: string;
  kinesisApiEndpoint: string;
  kafkaApiEndpoint: string;
  monitoringConfig?: MonitoringConfig | undefined;
  deletionProtection: boolean;
}

export enum Database_Status {
  STATUS_UNSPECIFIED = 0,
  PROVISIONING = 1,
  RUNNING = 2,
  UPDATING = 4,
  ERROR = 5,
  DELETING = 6,
  STARTING = 7,
  STOPPED = 8,
  UNRECOGNIZED = -1,
}

export function database_StatusFromJSON(object: any): Database_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Database_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PROVISIONING":
      return Database_Status.PROVISIONING;
    case 2:
    case "RUNNING":
      return Database_Status.RUNNING;
    case 4:
    case "UPDATING":
      return Database_Status.UPDATING;
    case 5:
    case "ERROR":
      return Database_Status.ERROR;
    case 6:
    case "DELETING":
      return Database_Status.DELETING;
    case 7:
    case "STARTING":
      return Database_Status.STARTING;
    case 8:
    case "STOPPED":
      return Database_Status.STOPPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Database_Status.UNRECOGNIZED;
  }
}

export function database_StatusToJSON(object: Database_Status): string {
  switch (object) {
    case Database_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Database_Status.PROVISIONING:
      return "PROVISIONING";
    case Database_Status.RUNNING:
      return "RUNNING";
    case Database_Status.UPDATING:
      return "UPDATING";
    case Database_Status.ERROR:
      return "ERROR";
    case Database_Status.DELETING:
      return "DELETING";
    case Database_Status.STARTING:
      return "STARTING";
    case Database_Status.STOPPED:
      return "STOPPED";
    case Database_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Database_LabelsEntry {
  $type: "yandex.cloud.ydb.v1.Database.LabelsEntry";
  key: string;
  value: string;
}

export interface AlertParameter {
  $type: "yandex.cloud.ydb.v1.AlertParameter";
  doubleParameterValue?: AlertParameter_DoubleParameterValue | undefined;
  integerParameterValue?: AlertParameter_IntegerParameterValue | undefined;
  textParameterValue?: AlertParameter_TextParameterValue | undefined;
  textListParameterValue?: AlertParameter_TextListParameterValue | undefined;
  labelListParameterValue?: AlertParameter_LabelListParameterValue | undefined;
}

export interface AlertParameter_DoubleParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  value: number;
}

export interface AlertParameter_IntegerParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  value: number;
}

export interface AlertParameter_TextParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  value: string;
}

export interface AlertParameter_TextListParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  values: string[];
}

export interface AlertParameter_LabelListParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  values: string[];
}

export interface NotificationChannel {
  $type: "yandex.cloud.ydb.v1.NotificationChannel";
  notificationChannelId: string;
  notifyAboutStatuses: AlertEvaluationStatus[];
  repeateNotifyDelayMs: number;
}

export interface Alert {
  $type: "yandex.cloud.ydb.v1.Alert";
  /** output only field. */
  alertId: string;
  /** template of the alert. */
  alertTemplateId: string;
  /** name of the alert. */
  name: string;
  /** human readable description of the alert. */
  description: string;
  /** the notification channels of the alert. */
  notificationChannels: NotificationChannel[];
  /** alert parameters to override. */
  alertParameters: AlertParameter[];
  /** alert paratemers to override. */
  alertThresholds: AlertParameter[];
}

export interface MonitoringConfig {
  $type: "yandex.cloud.ydb.v1.MonitoringConfig";
  alerts: Alert[];
}

export interface DedicatedDatabase {
  $type: "yandex.cloud.ydb.v1.DedicatedDatabase";
  resourcePresetId: string;
  storageConfig?: StorageConfig | undefined;
  scalePolicy?: ScalePolicy | undefined;
  networkId: string;
  subnetIds: string[];
  assignPublicIps: boolean;
}

export interface ServerlessDatabase {
  $type: "yandex.cloud.ydb.v1.ServerlessDatabase";
  /**
   * Let's define 1 RU  - 1 request unit
   * Let's define 1 RCU - 1 request capacity unit, which is 1 RU per second.
   * If `enable_throttling_rcu_limit` flag is true, the database will be throttled using `throttling_rcu_limit` value.
   * Otherwise, the database is throttled using the cloud quotas.
   * If zero, all requests will be blocked until non zero value is set.
   */
  throttlingRcuLimit: number;
  /** Specify serverless database storage size limit. If zero, default value is applied. */
  storageSizeLimit: number;
  /** If false, the database is throttled by cloud value. */
  enableThrottlingRcuLimit: boolean;
  /**
   * Specify the number of provisioned RCUs to pay less if the database has predictable load.
   * You will be charged for the provisioned capacity regularly even if this capacity is not fully consumed.
   * You will be charged for the on-demand consumption only if provisioned capacity is consumed.
   */
  provisionedRcuLimit: number;
  /** write quota for topic service, defined in bytes per second. */
  topicWriteQuota: number;
}

export interface ZonalDatabase {
  $type: "yandex.cloud.ydb.v1.ZonalDatabase";
  zoneId: string;
}

export interface RegionalDatabase {
  $type: "yandex.cloud.ydb.v1.RegionalDatabase";
  regionId: string;
}

export interface ScalePolicy {
  $type: "yandex.cloud.ydb.v1.ScalePolicy";
  fixedScale?: ScalePolicy_FixedScale | undefined;
}

export interface ScalePolicy_FixedScale {
  $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale";
  size: number;
}

export interface StorageConfig {
  $type: "yandex.cloud.ydb.v1.StorageConfig";
  storageOptions: StorageOption[];
  /** output only field: storage size limit of dedicated database. */
  storageSizeLimit: number;
}

export interface StorageOption {
  $type: "yandex.cloud.ydb.v1.StorageOption";
  storageTypeId: string;
  groupCount: number;
}

function createBaseDatabase(): Database {
  return {
    $type: "yandex.cloud.ydb.v1.Database",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    status: 0,
    endpoint: "",
    resourcePresetId: "",
    storageConfig: undefined,
    scalePolicy: undefined,
    networkId: "",
    subnetIds: [],
    zonalDatabase: undefined,
    regionalDatabase: undefined,
    dedicatedDatabase: undefined,
    serverlessDatabase: undefined,
    assignPublicIps: false,
    locationId: "",
    labels: {},
    backupConfig: undefined,
    documentApiEndpoint: "",
    kinesisApiEndpoint: "",
    kafkaApiEndpoint: "",
    monitoringConfig: undefined,
    deletionProtection: false,
  };
}

export const Database = {
  $type: "yandex.cloud.ydb.v1.Database" as const,

  encode(message: Database, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.endpoint !== "") {
      writer.uint32(66).string(message.endpoint);
    }
    if (message.resourcePresetId !== "") {
      writer.uint32(74).string(message.resourcePresetId);
    }
    if (message.storageConfig !== undefined) {
      StorageConfig.encode(message.storageConfig, writer.uint32(82).fork()).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(90).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(98).string(message.networkId);
    }
    for (const v of message.subnetIds) {
      writer.uint32(106).string(v!);
    }
    if (message.zonalDatabase !== undefined) {
      ZonalDatabase.encode(message.zonalDatabase, writer.uint32(114).fork()).ldelim();
    }
    if (message.regionalDatabase !== undefined) {
      RegionalDatabase.encode(message.regionalDatabase, writer.uint32(122).fork()).ldelim();
    }
    if (message.dedicatedDatabase !== undefined) {
      DedicatedDatabase.encode(message.dedicatedDatabase, writer.uint32(146).fork()).ldelim();
    }
    if (message.serverlessDatabase !== undefined) {
      ServerlessDatabase.encode(message.serverlessDatabase, writer.uint32(154).fork()).ldelim();
    }
    if (message.assignPublicIps === true) {
      writer.uint32(128).bool(message.assignPublicIps);
    }
    if (message.locationId !== "") {
      writer.uint32(138).string(message.locationId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Database_LabelsEntry.encode(
        { $type: "yandex.cloud.ydb.v1.Database.LabelsEntry", key: key as any, value },
        writer.uint32(162).fork(),
      ).ldelim();
    });
    if (message.backupConfig !== undefined) {
      BackupConfig.encode(message.backupConfig, writer.uint32(170).fork()).ldelim();
    }
    if (message.documentApiEndpoint !== "") {
      writer.uint32(178).string(message.documentApiEndpoint);
    }
    if (message.kinesisApiEndpoint !== "") {
      writer.uint32(186).string(message.kinesisApiEndpoint);
    }
    if (message.kafkaApiEndpoint !== "") {
      writer.uint32(210).string(message.kafkaApiEndpoint);
    }
    if (message.monitoringConfig !== undefined) {
      MonitoringConfig.encode(message.monitoringConfig, writer.uint32(194).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(200).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Database {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabase();
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

          message.folderId = reader.string();
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

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.endpoint = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.resourcePresetId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.storageConfig = StorageConfig.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.zonalDatabase = ZonalDatabase.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.regionalDatabase = RegionalDatabase.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.dedicatedDatabase = DedicatedDatabase.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.serverlessDatabase = ServerlessDatabase.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.assignPublicIps = reader.bool();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.locationId = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          const entry20 = Database_LabelsEntry.decode(reader, reader.uint32());
          if (entry20.value !== undefined) {
            message.labels[entry20.key] = entry20.value;
          }
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.backupConfig = BackupConfig.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.documentApiEndpoint = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.kinesisApiEndpoint = reader.string();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.kafkaApiEndpoint = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.monitoringConfig = MonitoringConfig.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Database {
    return {
      $type: Database.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? database_StatusFromJSON(object.status) : 0,
      endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
      resourcePresetId: isSet(object.resourcePresetId) ? globalThis.String(object.resourcePresetId) : "",
      storageConfig: isSet(object.storageConfig) ? StorageConfig.fromJSON(object.storageConfig) : undefined,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      zonalDatabase: isSet(object.zonalDatabase) ? ZonalDatabase.fromJSON(object.zonalDatabase) : undefined,
      regionalDatabase: isSet(object.regionalDatabase) ? RegionalDatabase.fromJSON(object.regionalDatabase) : undefined,
      dedicatedDatabase: isSet(object.dedicatedDatabase)
        ? DedicatedDatabase.fromJSON(object.dedicatedDatabase)
        : undefined,
      serverlessDatabase: isSet(object.serverlessDatabase)
        ? ServerlessDatabase.fromJSON(object.serverlessDatabase)
        : undefined,
      assignPublicIps: isSet(object.assignPublicIps) ? globalThis.Boolean(object.assignPublicIps) : false,
      locationId: isSet(object.locationId) ? globalThis.String(object.locationId) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      backupConfig: isSet(object.backupConfig) ? BackupConfig.fromJSON(object.backupConfig) : undefined,
      documentApiEndpoint: isSet(object.documentApiEndpoint) ? globalThis.String(object.documentApiEndpoint) : "",
      kinesisApiEndpoint: isSet(object.kinesisApiEndpoint) ? globalThis.String(object.kinesisApiEndpoint) : "",
      kafkaApiEndpoint: isSet(object.kafkaApiEndpoint) ? globalThis.String(object.kafkaApiEndpoint) : "",
      monitoringConfig: isSet(object.monitoringConfig) ? MonitoringConfig.fromJSON(object.monitoringConfig) : undefined,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: Database): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== 0) {
      obj.status = database_StatusToJSON(message.status);
    }
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    if (message.resourcePresetId !== "") {
      obj.resourcePresetId = message.resourcePresetId;
    }
    if (message.storageConfig !== undefined) {
      obj.storageConfig = StorageConfig.toJSON(message.storageConfig);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.zonalDatabase !== undefined) {
      obj.zonalDatabase = ZonalDatabase.toJSON(message.zonalDatabase);
    }
    if (message.regionalDatabase !== undefined) {
      obj.regionalDatabase = RegionalDatabase.toJSON(message.regionalDatabase);
    }
    if (message.dedicatedDatabase !== undefined) {
      obj.dedicatedDatabase = DedicatedDatabase.toJSON(message.dedicatedDatabase);
    }
    if (message.serverlessDatabase !== undefined) {
      obj.serverlessDatabase = ServerlessDatabase.toJSON(message.serverlessDatabase);
    }
    if (message.assignPublicIps === true) {
      obj.assignPublicIps = message.assignPublicIps;
    }
    if (message.locationId !== "") {
      obj.locationId = message.locationId;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.backupConfig !== undefined) {
      obj.backupConfig = BackupConfig.toJSON(message.backupConfig);
    }
    if (message.documentApiEndpoint !== "") {
      obj.documentApiEndpoint = message.documentApiEndpoint;
    }
    if (message.kinesisApiEndpoint !== "") {
      obj.kinesisApiEndpoint = message.kinesisApiEndpoint;
    }
    if (message.kafkaApiEndpoint !== "") {
      obj.kafkaApiEndpoint = message.kafkaApiEndpoint;
    }
    if (message.monitoringConfig !== undefined) {
      obj.monitoringConfig = MonitoringConfig.toJSON(message.monitoringConfig);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Database>, I>>(base?: I): Database {
    return Database.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Database>, I>>(object: I): Database {
    const message = createBaseDatabase();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.endpoint = object.endpoint ?? "";
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.storageConfig = (object.storageConfig !== undefined && object.storageConfig !== null)
      ? StorageConfig.fromPartial(object.storageConfig)
      : undefined;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    message.networkId = object.networkId ?? "";
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.zonalDatabase = (object.zonalDatabase !== undefined && object.zonalDatabase !== null)
      ? ZonalDatabase.fromPartial(object.zonalDatabase)
      : undefined;
    message.regionalDatabase = (object.regionalDatabase !== undefined && object.regionalDatabase !== null)
      ? RegionalDatabase.fromPartial(object.regionalDatabase)
      : undefined;
    message.dedicatedDatabase = (object.dedicatedDatabase !== undefined && object.dedicatedDatabase !== null)
      ? DedicatedDatabase.fromPartial(object.dedicatedDatabase)
      : undefined;
    message.serverlessDatabase = (object.serverlessDatabase !== undefined && object.serverlessDatabase !== null)
      ? ServerlessDatabase.fromPartial(object.serverlessDatabase)
      : undefined;
    message.assignPublicIps = object.assignPublicIps ?? false;
    message.locationId = object.locationId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.backupConfig = (object.backupConfig !== undefined && object.backupConfig !== null)
      ? BackupConfig.fromPartial(object.backupConfig)
      : undefined;
    message.documentApiEndpoint = object.documentApiEndpoint ?? "";
    message.kinesisApiEndpoint = object.kinesisApiEndpoint ?? "";
    message.kafkaApiEndpoint = object.kafkaApiEndpoint ?? "";
    message.monitoringConfig = (object.monitoringConfig !== undefined && object.monitoringConfig !== null)
      ? MonitoringConfig.fromPartial(object.monitoringConfig)
      : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(Database.$type, Database);

function createBaseDatabase_LabelsEntry(): Database_LabelsEntry {
  return { $type: "yandex.cloud.ydb.v1.Database.LabelsEntry", key: "", value: "" };
}

export const Database_LabelsEntry = {
  $type: "yandex.cloud.ydb.v1.Database.LabelsEntry" as const,

  encode(message: Database_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Database_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabase_LabelsEntry();
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

  fromJSON(object: any): Database_LabelsEntry {
    return {
      $type: Database_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Database_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Database_LabelsEntry>, I>>(base?: I): Database_LabelsEntry {
    return Database_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Database_LabelsEntry>, I>>(object: I): Database_LabelsEntry {
    const message = createBaseDatabase_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Database_LabelsEntry.$type, Database_LabelsEntry);

function createBaseAlertParameter(): AlertParameter {
  return {
    $type: "yandex.cloud.ydb.v1.AlertParameter",
    doubleParameterValue: undefined,
    integerParameterValue: undefined,
    textParameterValue: undefined,
    textListParameterValue: undefined,
    labelListParameterValue: undefined,
  };
}

export const AlertParameter = {
  $type: "yandex.cloud.ydb.v1.AlertParameter" as const,

  encode(message: AlertParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.doubleParameterValue !== undefined) {
      AlertParameter_DoubleParameterValue.encode(message.doubleParameterValue, writer.uint32(10).fork()).ldelim();
    }
    if (message.integerParameterValue !== undefined) {
      AlertParameter_IntegerParameterValue.encode(message.integerParameterValue, writer.uint32(18).fork()).ldelim();
    }
    if (message.textParameterValue !== undefined) {
      AlertParameter_TextParameterValue.encode(message.textParameterValue, writer.uint32(26).fork()).ldelim();
    }
    if (message.textListParameterValue !== undefined) {
      AlertParameter_TextListParameterValue.encode(message.textListParameterValue, writer.uint32(34).fork()).ldelim();
    }
    if (message.labelListParameterValue !== undefined) {
      AlertParameter_LabelListParameterValue.encode(message.labelListParameterValue, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlertParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.doubleParameterValue = AlertParameter_DoubleParameterValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.integerParameterValue = AlertParameter_IntegerParameterValue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.textParameterValue = AlertParameter_TextParameterValue.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.textListParameterValue = AlertParameter_TextListParameterValue.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.labelListParameterValue = AlertParameter_LabelListParameterValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AlertParameter {
    return {
      $type: AlertParameter.$type,
      doubleParameterValue: isSet(object.doubleParameterValue)
        ? AlertParameter_DoubleParameterValue.fromJSON(object.doubleParameterValue)
        : undefined,
      integerParameterValue: isSet(object.integerParameterValue)
        ? AlertParameter_IntegerParameterValue.fromJSON(object.integerParameterValue)
        : undefined,
      textParameterValue: isSet(object.textParameterValue)
        ? AlertParameter_TextParameterValue.fromJSON(object.textParameterValue)
        : undefined,
      textListParameterValue: isSet(object.textListParameterValue)
        ? AlertParameter_TextListParameterValue.fromJSON(object.textListParameterValue)
        : undefined,
      labelListParameterValue: isSet(object.labelListParameterValue)
        ? AlertParameter_LabelListParameterValue.fromJSON(object.labelListParameterValue)
        : undefined,
    };
  },

  toJSON(message: AlertParameter): unknown {
    const obj: any = {};
    if (message.doubleParameterValue !== undefined) {
      obj.doubleParameterValue = AlertParameter_DoubleParameterValue.toJSON(message.doubleParameterValue);
    }
    if (message.integerParameterValue !== undefined) {
      obj.integerParameterValue = AlertParameter_IntegerParameterValue.toJSON(message.integerParameterValue);
    }
    if (message.textParameterValue !== undefined) {
      obj.textParameterValue = AlertParameter_TextParameterValue.toJSON(message.textParameterValue);
    }
    if (message.textListParameterValue !== undefined) {
      obj.textListParameterValue = AlertParameter_TextListParameterValue.toJSON(message.textListParameterValue);
    }
    if (message.labelListParameterValue !== undefined) {
      obj.labelListParameterValue = AlertParameter_LabelListParameterValue.toJSON(message.labelListParameterValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlertParameter>, I>>(base?: I): AlertParameter {
    return AlertParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlertParameter>, I>>(object: I): AlertParameter {
    const message = createBaseAlertParameter();
    message.doubleParameterValue = (object.doubleParameterValue !== undefined && object.doubleParameterValue !== null)
      ? AlertParameter_DoubleParameterValue.fromPartial(object.doubleParameterValue)
      : undefined;
    message.integerParameterValue =
      (object.integerParameterValue !== undefined && object.integerParameterValue !== null)
        ? AlertParameter_IntegerParameterValue.fromPartial(object.integerParameterValue)
        : undefined;
    message.textParameterValue = (object.textParameterValue !== undefined && object.textParameterValue !== null)
      ? AlertParameter_TextParameterValue.fromPartial(object.textParameterValue)
      : undefined;
    message.textListParameterValue =
      (object.textListParameterValue !== undefined && object.textListParameterValue !== null)
        ? AlertParameter_TextListParameterValue.fromPartial(object.textListParameterValue)
        : undefined;
    message.labelListParameterValue =
      (object.labelListParameterValue !== undefined && object.labelListParameterValue !== null)
        ? AlertParameter_LabelListParameterValue.fromPartial(object.labelListParameterValue)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AlertParameter.$type, AlertParameter);

function createBaseAlertParameter_DoubleParameterValue(): AlertParameter_DoubleParameterValue {
  return { $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue", name: "", value: 0 };
}

export const AlertParameter_DoubleParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue" as const,

  encode(message: AlertParameter_DoubleParameterValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlertParameter_DoubleParameterValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertParameter_DoubleParameterValue();
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
          if (tag !== 17) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AlertParameter_DoubleParameterValue {
    return {
      $type: AlertParameter_DoubleParameterValue.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: AlertParameter_DoubleParameterValue): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlertParameter_DoubleParameterValue>, I>>(
    base?: I,
  ): AlertParameter_DoubleParameterValue {
    return AlertParameter_DoubleParameterValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlertParameter_DoubleParameterValue>, I>>(
    object: I,
  ): AlertParameter_DoubleParameterValue {
    const message = createBaseAlertParameter_DoubleParameterValue();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AlertParameter_DoubleParameterValue.$type, AlertParameter_DoubleParameterValue);

function createBaseAlertParameter_IntegerParameterValue(): AlertParameter_IntegerParameterValue {
  return { $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue", name: "", value: 0 };
}

export const AlertParameter_IntegerParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue" as const,

  encode(message: AlertParameter_IntegerParameterValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlertParameter_IntegerParameterValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertParameter_IntegerParameterValue();
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
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AlertParameter_IntegerParameterValue {
    return {
      $type: AlertParameter_IntegerParameterValue.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: AlertParameter_IntegerParameterValue): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlertParameter_IntegerParameterValue>, I>>(
    base?: I,
  ): AlertParameter_IntegerParameterValue {
    return AlertParameter_IntegerParameterValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlertParameter_IntegerParameterValue>, I>>(
    object: I,
  ): AlertParameter_IntegerParameterValue {
    const message = createBaseAlertParameter_IntegerParameterValue();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AlertParameter_IntegerParameterValue.$type, AlertParameter_IntegerParameterValue);

function createBaseAlertParameter_TextParameterValue(): AlertParameter_TextParameterValue {
  return { $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue", name: "", value: "" };
}

export const AlertParameter_TextParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue" as const,

  encode(message: AlertParameter_TextParameterValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlertParameter_TextParameterValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertParameter_TextParameterValue();
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

  fromJSON(object: any): AlertParameter_TextParameterValue {
    return {
      $type: AlertParameter_TextParameterValue.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: AlertParameter_TextParameterValue): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlertParameter_TextParameterValue>, I>>(
    base?: I,
  ): AlertParameter_TextParameterValue {
    return AlertParameter_TextParameterValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlertParameter_TextParameterValue>, I>>(
    object: I,
  ): AlertParameter_TextParameterValue {
    const message = createBaseAlertParameter_TextParameterValue();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(AlertParameter_TextParameterValue.$type, AlertParameter_TextParameterValue);

function createBaseAlertParameter_TextListParameterValue(): AlertParameter_TextListParameterValue {
  return { $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue", name: "", values: [] };
}

export const AlertParameter_TextListParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue" as const,

  encode(message: AlertParameter_TextListParameterValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlertParameter_TextListParameterValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertParameter_TextListParameterValue();
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

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AlertParameter_TextListParameterValue {
    return {
      $type: AlertParameter_TextListParameterValue.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: AlertParameter_TextListParameterValue): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlertParameter_TextListParameterValue>, I>>(
    base?: I,
  ): AlertParameter_TextListParameterValue {
    return AlertParameter_TextListParameterValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlertParameter_TextListParameterValue>, I>>(
    object: I,
  ): AlertParameter_TextListParameterValue {
    const message = createBaseAlertParameter_TextListParameterValue();
    message.name = object.name ?? "";
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AlertParameter_TextListParameterValue.$type, AlertParameter_TextListParameterValue);

function createBaseAlertParameter_LabelListParameterValue(): AlertParameter_LabelListParameterValue {
  return { $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue", name: "", values: [] };
}

export const AlertParameter_LabelListParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue" as const,

  encode(message: AlertParameter_LabelListParameterValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlertParameter_LabelListParameterValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertParameter_LabelListParameterValue();
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

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AlertParameter_LabelListParameterValue {
    return {
      $type: AlertParameter_LabelListParameterValue.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: AlertParameter_LabelListParameterValue): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlertParameter_LabelListParameterValue>, I>>(
    base?: I,
  ): AlertParameter_LabelListParameterValue {
    return AlertParameter_LabelListParameterValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlertParameter_LabelListParameterValue>, I>>(
    object: I,
  ): AlertParameter_LabelListParameterValue {
    const message = createBaseAlertParameter_LabelListParameterValue();
    message.name = object.name ?? "";
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AlertParameter_LabelListParameterValue.$type, AlertParameter_LabelListParameterValue);

function createBaseNotificationChannel(): NotificationChannel {
  return {
    $type: "yandex.cloud.ydb.v1.NotificationChannel",
    notificationChannelId: "",
    notifyAboutStatuses: [],
    repeateNotifyDelayMs: 0,
  };
}

export const NotificationChannel = {
  $type: "yandex.cloud.ydb.v1.NotificationChannel" as const,

  encode(message: NotificationChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notificationChannelId !== "") {
      writer.uint32(10).string(message.notificationChannelId);
    }
    writer.uint32(18).fork();
    for (const v of message.notifyAboutStatuses) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.repeateNotifyDelayMs !== 0) {
      writer.uint32(24).int64(message.repeateNotifyDelayMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notificationChannelId = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.notifyAboutStatuses.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notifyAboutStatuses.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.repeateNotifyDelayMs = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotificationChannel {
    return {
      $type: NotificationChannel.$type,
      notificationChannelId: isSet(object.notificationChannelId) ? globalThis.String(object.notificationChannelId) : "",
      notifyAboutStatuses: globalThis.Array.isArray(object?.notifyAboutStatuses)
        ? object.notifyAboutStatuses.map((e: any) => alertEvaluationStatusFromJSON(e))
        : [],
      repeateNotifyDelayMs: isSet(object.repeateNotifyDelayMs) ? globalThis.Number(object.repeateNotifyDelayMs) : 0,
    };
  },

  toJSON(message: NotificationChannel): unknown {
    const obj: any = {};
    if (message.notificationChannelId !== "") {
      obj.notificationChannelId = message.notificationChannelId;
    }
    if (message.notifyAboutStatuses?.length) {
      obj.notifyAboutStatuses = message.notifyAboutStatuses.map((e) => alertEvaluationStatusToJSON(e));
    }
    if (message.repeateNotifyDelayMs !== 0) {
      obj.repeateNotifyDelayMs = Math.round(message.repeateNotifyDelayMs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotificationChannel>, I>>(base?: I): NotificationChannel {
    return NotificationChannel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotificationChannel>, I>>(object: I): NotificationChannel {
    const message = createBaseNotificationChannel();
    message.notificationChannelId = object.notificationChannelId ?? "";
    message.notifyAboutStatuses = object.notifyAboutStatuses?.map((e) => e) || [];
    message.repeateNotifyDelayMs = object.repeateNotifyDelayMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(NotificationChannel.$type, NotificationChannel);

function createBaseAlert(): Alert {
  return {
    $type: "yandex.cloud.ydb.v1.Alert",
    alertId: "",
    alertTemplateId: "",
    name: "",
    description: "",
    notificationChannels: [],
    alertParameters: [],
    alertThresholds: [],
  };
}

export const Alert = {
  $type: "yandex.cloud.ydb.v1.Alert" as const,

  encode(message: Alert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alertId !== "") {
      writer.uint32(10).string(message.alertId);
    }
    if (message.alertTemplateId !== "") {
      writer.uint32(18).string(message.alertTemplateId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.notificationChannels) {
      NotificationChannel.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.alertParameters) {
      AlertParameter.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.alertThresholds) {
      AlertParameter.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Alert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alertId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.alertTemplateId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.notificationChannels.push(NotificationChannel.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.alertParameters.push(AlertParameter.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.alertThresholds.push(AlertParameter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Alert {
    return {
      $type: Alert.$type,
      alertId: isSet(object.alertId) ? globalThis.String(object.alertId) : "",
      alertTemplateId: isSet(object.alertTemplateId) ? globalThis.String(object.alertTemplateId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      notificationChannels: globalThis.Array.isArray(object?.notificationChannels)
        ? object.notificationChannels.map((e: any) => NotificationChannel.fromJSON(e))
        : [],
      alertParameters: globalThis.Array.isArray(object?.alertParameters)
        ? object.alertParameters.map((e: any) => AlertParameter.fromJSON(e))
        : [],
      alertThresholds: globalThis.Array.isArray(object?.alertThresholds)
        ? object.alertThresholds.map((e: any) => AlertParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Alert): unknown {
    const obj: any = {};
    if (message.alertId !== "") {
      obj.alertId = message.alertId;
    }
    if (message.alertTemplateId !== "") {
      obj.alertTemplateId = message.alertTemplateId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.notificationChannels?.length) {
      obj.notificationChannels = message.notificationChannels.map((e) => NotificationChannel.toJSON(e));
    }
    if (message.alertParameters?.length) {
      obj.alertParameters = message.alertParameters.map((e) => AlertParameter.toJSON(e));
    }
    if (message.alertThresholds?.length) {
      obj.alertThresholds = message.alertThresholds.map((e) => AlertParameter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Alert>, I>>(base?: I): Alert {
    return Alert.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Alert>, I>>(object: I): Alert {
    const message = createBaseAlert();
    message.alertId = object.alertId ?? "";
    message.alertTemplateId = object.alertTemplateId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.notificationChannels = object.notificationChannels?.map((e) => NotificationChannel.fromPartial(e)) || [];
    message.alertParameters = object.alertParameters?.map((e) => AlertParameter.fromPartial(e)) || [];
    message.alertThresholds = object.alertThresholds?.map((e) => AlertParameter.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Alert.$type, Alert);

function createBaseMonitoringConfig(): MonitoringConfig {
  return { $type: "yandex.cloud.ydb.v1.MonitoringConfig", alerts: [] };
}

export const MonitoringConfig = {
  $type: "yandex.cloud.ydb.v1.MonitoringConfig" as const,

  encode(message: MonitoringConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.alerts) {
      Alert.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoringConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoringConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alerts.push(Alert.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MonitoringConfig {
    return {
      $type: MonitoringConfig.$type,
      alerts: globalThis.Array.isArray(object?.alerts) ? object.alerts.map((e: any) => Alert.fromJSON(e)) : [],
    };
  },

  toJSON(message: MonitoringConfig): unknown {
    const obj: any = {};
    if (message.alerts?.length) {
      obj.alerts = message.alerts.map((e) => Alert.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonitoringConfig>, I>>(base?: I): MonitoringConfig {
    return MonitoringConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonitoringConfig>, I>>(object: I): MonitoringConfig {
    const message = createBaseMonitoringConfig();
    message.alerts = object.alerts?.map((e) => Alert.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MonitoringConfig.$type, MonitoringConfig);

function createBaseDedicatedDatabase(): DedicatedDatabase {
  return {
    $type: "yandex.cloud.ydb.v1.DedicatedDatabase",
    resourcePresetId: "",
    storageConfig: undefined,
    scalePolicy: undefined,
    networkId: "",
    subnetIds: [],
    assignPublicIps: false,
  };
}

export const DedicatedDatabase = {
  $type: "yandex.cloud.ydb.v1.DedicatedDatabase" as const,

  encode(message: DedicatedDatabase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    if (message.storageConfig !== undefined) {
      StorageConfig.encode(message.storageConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(26).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(34).string(message.networkId);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIps === true) {
      writer.uint32(48).bool(message.assignPublicIps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DedicatedDatabase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDedicatedDatabase();
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
          if (tag !== 18) {
            break;
          }

          message.storageConfig = StorageConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.assignPublicIps = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DedicatedDatabase {
    return {
      $type: DedicatedDatabase.$type,
      resourcePresetId: isSet(object.resourcePresetId) ? globalThis.String(object.resourcePresetId) : "",
      storageConfig: isSet(object.storageConfig) ? StorageConfig.fromJSON(object.storageConfig) : undefined,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      assignPublicIps: isSet(object.assignPublicIps) ? globalThis.Boolean(object.assignPublicIps) : false,
    };
  },

  toJSON(message: DedicatedDatabase): unknown {
    const obj: any = {};
    if (message.resourcePresetId !== "") {
      obj.resourcePresetId = message.resourcePresetId;
    }
    if (message.storageConfig !== undefined) {
      obj.storageConfig = StorageConfig.toJSON(message.storageConfig);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.assignPublicIps === true) {
      obj.assignPublicIps = message.assignPublicIps;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DedicatedDatabase>, I>>(base?: I): DedicatedDatabase {
    return DedicatedDatabase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DedicatedDatabase>, I>>(object: I): DedicatedDatabase {
    const message = createBaseDedicatedDatabase();
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.storageConfig = (object.storageConfig !== undefined && object.storageConfig !== null)
      ? StorageConfig.fromPartial(object.storageConfig)
      : undefined;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    message.networkId = object.networkId ?? "";
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIps = object.assignPublicIps ?? false;
    return message;
  },
};

messageTypeRegistry.set(DedicatedDatabase.$type, DedicatedDatabase);

function createBaseServerlessDatabase(): ServerlessDatabase {
  return {
    $type: "yandex.cloud.ydb.v1.ServerlessDatabase",
    throttlingRcuLimit: 0,
    storageSizeLimit: 0,
    enableThrottlingRcuLimit: false,
    provisionedRcuLimit: 0,
    topicWriteQuota: 0,
  };
}

export const ServerlessDatabase = {
  $type: "yandex.cloud.ydb.v1.ServerlessDatabase" as const,

  encode(message: ServerlessDatabase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.throttlingRcuLimit !== 0) {
      writer.uint32(8).int64(message.throttlingRcuLimit);
    }
    if (message.storageSizeLimit !== 0) {
      writer.uint32(16).int64(message.storageSizeLimit);
    }
    if (message.enableThrottlingRcuLimit === true) {
      writer.uint32(24).bool(message.enableThrottlingRcuLimit);
    }
    if (message.provisionedRcuLimit !== 0) {
      writer.uint32(32).int64(message.provisionedRcuLimit);
    }
    if (message.topicWriteQuota !== 0) {
      writer.uint32(40).int64(message.topicWriteQuota);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerlessDatabase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerlessDatabase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.throttlingRcuLimit = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.storageSizeLimit = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.enableThrottlingRcuLimit = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.provisionedRcuLimit = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.topicWriteQuota = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerlessDatabase {
    return {
      $type: ServerlessDatabase.$type,
      throttlingRcuLimit: isSet(object.throttlingRcuLimit) ? globalThis.Number(object.throttlingRcuLimit) : 0,
      storageSizeLimit: isSet(object.storageSizeLimit) ? globalThis.Number(object.storageSizeLimit) : 0,
      enableThrottlingRcuLimit: isSet(object.enableThrottlingRcuLimit)
        ? globalThis.Boolean(object.enableThrottlingRcuLimit)
        : false,
      provisionedRcuLimit: isSet(object.provisionedRcuLimit) ? globalThis.Number(object.provisionedRcuLimit) : 0,
      topicWriteQuota: isSet(object.topicWriteQuota) ? globalThis.Number(object.topicWriteQuota) : 0,
    };
  },

  toJSON(message: ServerlessDatabase): unknown {
    const obj: any = {};
    if (message.throttlingRcuLimit !== 0) {
      obj.throttlingRcuLimit = Math.round(message.throttlingRcuLimit);
    }
    if (message.storageSizeLimit !== 0) {
      obj.storageSizeLimit = Math.round(message.storageSizeLimit);
    }
    if (message.enableThrottlingRcuLimit === true) {
      obj.enableThrottlingRcuLimit = message.enableThrottlingRcuLimit;
    }
    if (message.provisionedRcuLimit !== 0) {
      obj.provisionedRcuLimit = Math.round(message.provisionedRcuLimit);
    }
    if (message.topicWriteQuota !== 0) {
      obj.topicWriteQuota = Math.round(message.topicWriteQuota);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerlessDatabase>, I>>(base?: I): ServerlessDatabase {
    return ServerlessDatabase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServerlessDatabase>, I>>(object: I): ServerlessDatabase {
    const message = createBaseServerlessDatabase();
    message.throttlingRcuLimit = object.throttlingRcuLimit ?? 0;
    message.storageSizeLimit = object.storageSizeLimit ?? 0;
    message.enableThrottlingRcuLimit = object.enableThrottlingRcuLimit ?? false;
    message.provisionedRcuLimit = object.provisionedRcuLimit ?? 0;
    message.topicWriteQuota = object.topicWriteQuota ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ServerlessDatabase.$type, ServerlessDatabase);

function createBaseZonalDatabase(): ZonalDatabase {
  return { $type: "yandex.cloud.ydb.v1.ZonalDatabase", zoneId: "" };
}

export const ZonalDatabase = {
  $type: "yandex.cloud.ydb.v1.ZonalDatabase" as const,

  encode(message: ZonalDatabase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZonalDatabase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZonalDatabase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZonalDatabase {
    return { $type: ZonalDatabase.$type, zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "" };
  },

  toJSON(message: ZonalDatabase): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZonalDatabase>, I>>(base?: I): ZonalDatabase {
    return ZonalDatabase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZonalDatabase>, I>>(object: I): ZonalDatabase {
    const message = createBaseZonalDatabase();
    message.zoneId = object.zoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ZonalDatabase.$type, ZonalDatabase);

function createBaseRegionalDatabase(): RegionalDatabase {
  return { $type: "yandex.cloud.ydb.v1.RegionalDatabase", regionId: "" };
}

export const RegionalDatabase = {
  $type: "yandex.cloud.ydb.v1.RegionalDatabase" as const,

  encode(message: RegionalDatabase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegionalDatabase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegionalDatabase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.regionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegionalDatabase {
    return {
      $type: RegionalDatabase.$type,
      regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
    };
  },

  toJSON(message: RegionalDatabase): unknown {
    const obj: any = {};
    if (message.regionId !== "") {
      obj.regionId = message.regionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegionalDatabase>, I>>(base?: I): RegionalDatabase {
    return RegionalDatabase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegionalDatabase>, I>>(object: I): RegionalDatabase {
    const message = createBaseRegionalDatabase();
    message.regionId = object.regionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RegionalDatabase.$type, RegionalDatabase);

function createBaseScalePolicy(): ScalePolicy {
  return { $type: "yandex.cloud.ydb.v1.ScalePolicy", fixedScale: undefined };
}

export const ScalePolicy = {
  $type: "yandex.cloud.ydb.v1.ScalePolicy" as const,

  encode(message: ScalePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fixedScale !== undefined) {
      ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fixedScale = ScalePolicy_FixedScale.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScalePolicy {
    return {
      $type: ScalePolicy.$type,
      fixedScale: isSet(object.fixedScale) ? ScalePolicy_FixedScale.fromJSON(object.fixedScale) : undefined,
    };
  },

  toJSON(message: ScalePolicy): unknown {
    const obj: any = {};
    if (message.fixedScale !== undefined) {
      obj.fixedScale = ScalePolicy_FixedScale.toJSON(message.fixedScale);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScalePolicy>, I>>(base?: I): ScalePolicy {
    return ScalePolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScalePolicy>, I>>(object: I): ScalePolicy {
    const message = createBaseScalePolicy();
    message.fixedScale = (object.fixedScale !== undefined && object.fixedScale !== null)
      ? ScalePolicy_FixedScale.fromPartial(object.fixedScale)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy.$type, ScalePolicy);

function createBaseScalePolicy_FixedScale(): ScalePolicy_FixedScale {
  return { $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale", size: 0 };
}

export const ScalePolicy_FixedScale = {
  $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale" as const,

  encode(message: ScalePolicy_FixedScale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy_FixedScale {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalePolicy_FixedScale();
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

  fromJSON(object: any): ScalePolicy_FixedScale {
    return { $type: ScalePolicy_FixedScale.$type, size: isSet(object.size) ? globalThis.Number(object.size) : 0 };
  },

  toJSON(message: ScalePolicy_FixedScale): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScalePolicy_FixedScale>, I>>(base?: I): ScalePolicy_FixedScale {
    return ScalePolicy_FixedScale.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScalePolicy_FixedScale>, I>>(object: I): ScalePolicy_FixedScale {
    const message = createBaseScalePolicy_FixedScale();
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy_FixedScale.$type, ScalePolicy_FixedScale);

function createBaseStorageConfig(): StorageConfig {
  return { $type: "yandex.cloud.ydb.v1.StorageConfig", storageOptions: [], storageSizeLimit: 0 };
}

export const StorageConfig = {
  $type: "yandex.cloud.ydb.v1.StorageConfig" as const,

  encode(message: StorageConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storageOptions) {
      StorageOption.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.storageSizeLimit !== 0) {
      writer.uint32(16).int64(message.storageSizeLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storageOptions.push(StorageOption.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.storageSizeLimit = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StorageConfig {
    return {
      $type: StorageConfig.$type,
      storageOptions: globalThis.Array.isArray(object?.storageOptions)
        ? object.storageOptions.map((e: any) => StorageOption.fromJSON(e))
        : [],
      storageSizeLimit: isSet(object.storageSizeLimit) ? globalThis.Number(object.storageSizeLimit) : 0,
    };
  },

  toJSON(message: StorageConfig): unknown {
    const obj: any = {};
    if (message.storageOptions?.length) {
      obj.storageOptions = message.storageOptions.map((e) => StorageOption.toJSON(e));
    }
    if (message.storageSizeLimit !== 0) {
      obj.storageSizeLimit = Math.round(message.storageSizeLimit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StorageConfig>, I>>(base?: I): StorageConfig {
    return StorageConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StorageConfig>, I>>(object: I): StorageConfig {
    const message = createBaseStorageConfig();
    message.storageOptions = object.storageOptions?.map((e) => StorageOption.fromPartial(e)) || [];
    message.storageSizeLimit = object.storageSizeLimit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(StorageConfig.$type, StorageConfig);

function createBaseStorageOption(): StorageOption {
  return { $type: "yandex.cloud.ydb.v1.StorageOption", storageTypeId: "", groupCount: 0 };
}

export const StorageOption = {
  $type: "yandex.cloud.ydb.v1.StorageOption" as const,

  encode(message: StorageOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageTypeId !== "") {
      writer.uint32(10).string(message.storageTypeId);
    }
    if (message.groupCount !== 0) {
      writer.uint32(16).int64(message.groupCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storageTypeId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.groupCount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StorageOption {
    return {
      $type: StorageOption.$type,
      storageTypeId: isSet(object.storageTypeId) ? globalThis.String(object.storageTypeId) : "",
      groupCount: isSet(object.groupCount) ? globalThis.Number(object.groupCount) : 0,
    };
  },

  toJSON(message: StorageOption): unknown {
    const obj: any = {};
    if (message.storageTypeId !== "") {
      obj.storageTypeId = message.storageTypeId;
    }
    if (message.groupCount !== 0) {
      obj.groupCount = Math.round(message.groupCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StorageOption>, I>>(base?: I): StorageOption {
    return StorageOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StorageOption>, I>>(object: I): StorageOption {
    const message = createBaseStorageOption();
    message.storageTypeId = object.storageTypeId ?? "";
    message.groupCount = object.groupCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(StorageOption.$type, StorageOption);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
