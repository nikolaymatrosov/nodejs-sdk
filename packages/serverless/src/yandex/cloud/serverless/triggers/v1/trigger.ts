/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import {
  LogLevel_Level,
  logLevel_LevelFromJSON,
  logLevel_LevelToJSON,
} from "@yandex-cloud/logging/dist/yandex/cloud/logging/v1/log_entry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.serverless.triggers.v1";

export enum TriggerType {
  TRIGGER_TYPE_UNSPECIFIED = 0,
  /** TIMER - The trigger is activated on a timer. */
  TIMER = 2,
  /**
   * MESSAGE_QUEUE - The trigger is activated by messages from a message queue.
   *
   * Only Message Queue is currently supported.
   */
  MESSAGE_QUEUE = 3,
  /** IOT_MESSAGE - The trigger is activated by messages from IoT Core. */
  IOT_MESSAGE = 4,
  IOT_BROKER_MESSAGE = 12,
  OBJECT_STORAGE = 5,
  CONTAINER_REGISTRY = 6,
  /** CLOUD_LOGS - The trigger is activated by cloud log group events */
  CLOUD_LOGS = 7,
  /** LOGGING - The trigger is activated by logging group events */
  LOGGING = 8,
  /** BILLING_BUDGET - The trigger is activated by billing events */
  BILLING_BUDGET = 9,
  /** YDS - The trigger is activated by YDS events */
  YDS = 10,
  /** MAIL - The trigger is activated by email */
  MAIL = 11,
  UNRECOGNIZED = -1,
}

export function triggerTypeFromJSON(object: any): TriggerType {
  switch (object) {
    case 0:
    case "TRIGGER_TYPE_UNSPECIFIED":
      return TriggerType.TRIGGER_TYPE_UNSPECIFIED;
    case 2:
    case "TIMER":
      return TriggerType.TIMER;
    case 3:
    case "MESSAGE_QUEUE":
      return TriggerType.MESSAGE_QUEUE;
    case 4:
    case "IOT_MESSAGE":
      return TriggerType.IOT_MESSAGE;
    case 12:
    case "IOT_BROKER_MESSAGE":
      return TriggerType.IOT_BROKER_MESSAGE;
    case 5:
    case "OBJECT_STORAGE":
      return TriggerType.OBJECT_STORAGE;
    case 6:
    case "CONTAINER_REGISTRY":
      return TriggerType.CONTAINER_REGISTRY;
    case 7:
    case "CLOUD_LOGS":
      return TriggerType.CLOUD_LOGS;
    case 8:
    case "LOGGING":
      return TriggerType.LOGGING;
    case 9:
    case "BILLING_BUDGET":
      return TriggerType.BILLING_BUDGET;
    case 10:
    case "YDS":
      return TriggerType.YDS;
    case 11:
    case "MAIL":
      return TriggerType.MAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TriggerType.UNRECOGNIZED;
  }
}

export function triggerTypeToJSON(object: TriggerType): string {
  switch (object) {
    case TriggerType.TRIGGER_TYPE_UNSPECIFIED:
      return "TRIGGER_TYPE_UNSPECIFIED";
    case TriggerType.TIMER:
      return "TIMER";
    case TriggerType.MESSAGE_QUEUE:
      return "MESSAGE_QUEUE";
    case TriggerType.IOT_MESSAGE:
      return "IOT_MESSAGE";
    case TriggerType.IOT_BROKER_MESSAGE:
      return "IOT_BROKER_MESSAGE";
    case TriggerType.OBJECT_STORAGE:
      return "OBJECT_STORAGE";
    case TriggerType.CONTAINER_REGISTRY:
      return "CONTAINER_REGISTRY";
    case TriggerType.CLOUD_LOGS:
      return "CLOUD_LOGS";
    case TriggerType.LOGGING:
      return "LOGGING";
    case TriggerType.BILLING_BUDGET:
      return "BILLING_BUDGET";
    case TriggerType.YDS:
      return "YDS";
    case TriggerType.MAIL:
      return "MAIL";
    case TriggerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A trigger to invoke a serverless function. For more information, see [Triggers](/docs/functions/concepts/trigger). */
export interface Trigger {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger";
  /** ID of the trigger. Generated at creation time. */
  id: string;
  /** ID of the folder that the trigger belongs to. */
  folderId: string;
  /** Creation timestamp for the trigger. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the trigger. */
  name: string;
  /** Description of the trigger. */
  description: string;
  /** Trigger labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Rule for trigger activation (always consistent with the trigger type). */
  rule?:
    | Trigger_Rule
    | undefined;
  /** Trigger status. */
  status: Trigger_Status;
}

export enum Trigger_ObjectStorageEventType {
  OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED = 0,
  OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT = 1,
  OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT = 2,
  OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT = 3,
  UNRECOGNIZED = -1,
}

export function trigger_ObjectStorageEventTypeFromJSON(object: any): Trigger_ObjectStorageEventType {
  switch (object) {
    case 0:
    case "OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED":
      return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT":
      return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT;
    case 2:
    case "OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT":
      return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT;
    case 3:
    case "OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT":
      return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Trigger_ObjectStorageEventType.UNRECOGNIZED;
  }
}

export function trigger_ObjectStorageEventTypeToJSON(object: Trigger_ObjectStorageEventType): string {
  switch (object) {
    case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED:
      return "OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED";
    case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT:
      return "OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT";
    case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT:
      return "OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT";
    case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT:
      return "OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT";
    case Trigger_ObjectStorageEventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Trigger_ContainerRegistryEventType {
  CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED = 0,
  CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE = 1,
  CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE = 2,
  CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG = 3,
  CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG = 4,
  UNRECOGNIZED = -1,
}

export function trigger_ContainerRegistryEventTypeFromJSON(object: any): Trigger_ContainerRegistryEventType {
  switch (object) {
    case 0:
    case "CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE;
    case 2:
    case "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE;
    case 3:
    case "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG;
    case 4:
    case "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Trigger_ContainerRegistryEventType.UNRECOGNIZED;
  }
}

export function trigger_ContainerRegistryEventTypeToJSON(object: Trigger_ContainerRegistryEventType): string {
  switch (object) {
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED:
      return "CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED";
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE:
      return "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE";
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE:
      return "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE";
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG:
      return "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG";
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG:
      return "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG";
    case Trigger_ContainerRegistryEventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Trigger_Status {
  STATUS_UNSPECIFIED = 0,
  ACTIVE = 1,
  PAUSED = 2,
  UNRECOGNIZED = -1,
}

export function trigger_StatusFromJSON(object: any): Trigger_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Trigger_Status.STATUS_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return Trigger_Status.ACTIVE;
    case 2:
    case "PAUSED":
      return Trigger_Status.PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Trigger_Status.UNRECOGNIZED;
  }
}

export function trigger_StatusToJSON(object: Trigger_Status): string {
  switch (object) {
    case Trigger_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Trigger_Status.ACTIVE:
      return "ACTIVE";
    case Trigger_Status.PAUSED:
      return "PAUSED";
    case Trigger_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Trigger_LabelsEntry {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry";
  key: string;
  value: string;
}

/** Description of a rule for trigger activation. */
export interface Trigger_Rule {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule";
  /** Rule for a timed trigger. */
  timer?:
    | Trigger_Timer
    | undefined;
  /** Rule for a message queue trigger. */
  messageQueue?:
    | Trigger_MessageQueue
    | undefined;
  /** Rule for a IoT Core trigger. */
  iotMessage?: Trigger_IoTMessage | undefined;
  iotBrokerMessage?: Trigger_IoTBrokerMessage | undefined;
  objectStorage?: Trigger_ObjectStorage | undefined;
  containerRegistry?: Trigger_ContainerRegistry | undefined;
  cloudLogs?: Trigger_CloudLogs | undefined;
  logging?: Trigger_Logging | undefined;
  billingBudget?: BillingBudget | undefined;
  dataStream?: DataStream | undefined;
  mail?: Mail | undefined;
}

/** Rule for activating a timed trigger. */
export interface Trigger_Timer {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer";
  /** Description of a schedule as a [cron expression](/docs/functions/concepts/trigger/timer). */
  cronExpression: string;
  /** Payload to be passed to function. */
  payload: string;
  /** Instructions for invoking a function once. */
  invokeFunction?:
    | InvokeFunctionOnce
    | undefined;
  /** Instructions for invoking a function with retry. */
  invokeFunctionWithRetry?:
    | InvokeFunctionWithRetry
    | undefined;
  /** Instructions for invoking a container with retry. */
  invokeContainerWithRetry?: InvokeContainerWithRetry | undefined;
}

/** Rule for activating a message queue trigger. */
export interface Trigger_MessageQueue {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue";
  /** ID of the message queue in Message Queue. */
  queueId: string;
  /** ID of the service account which has read access to the message queue. */
  serviceAccountId: string;
  /** Batch settings for processing messages in the queue. */
  batchSettings?:
    | BatchSettings
    | undefined;
  /** Queue visibility timeout override. */
  visibilityTimeout?:
    | Duration
    | undefined;
  /** Instructions for invoking a function once. */
  invokeFunction?:
    | InvokeFunctionOnce
    | undefined;
  /** Instructions for invoking a container once. */
  invokeContainer?: InvokeContainerOnce | undefined;
}

/** Rule for activating a IoT Core trigger. */
export interface Trigger_IoTMessage {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage";
  /** ID of the IoT Core registry. */
  registryId: string;
  /** ID of the IoT Core device in the registry. */
  deviceId: string;
  /** MQTT topic whose messages activate the trigger. */
  mqttTopic: string;
  /** Batch settings for processing events. */
  batchSettings?:
    | BatchSettings
    | undefined;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?:
    | InvokeFunctionWithRetry
    | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

/** Rule for activating a IoT Core Broker trigger. */
export interface Trigger_IoTBrokerMessage {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage";
  /** ID of the IoT Core broker. */
  brokerId: string;
  /** MQTT topic whose messages activate the trigger. */
  mqttTopic: string;
  /** Batch settings for processing events. */
  batchSettings?:
    | BatchSettings
    | undefined;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?:
    | InvokeFunctionWithRetry
    | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface Trigger_ObjectStorage {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage";
  /** Type (name) of events, at least one value is required. */
  eventType: Trigger_ObjectStorageEventType[];
  /** ID of the bucket. */
  bucketId: string;
  /** Prefix of the object key. Filter, optional. */
  prefix: string;
  /** Suffix of the object key. Filter, optional. */
  suffix: string;
  /** Batch settings for processing events. */
  batchSettings?:
    | BatchSettings
    | undefined;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?:
    | InvokeFunctionWithRetry
    | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface Trigger_ContainerRegistry {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry";
  /** Type (name) of events, at least one value is required. */
  eventType: Trigger_ContainerRegistryEventType[];
  /** ID of the registry. */
  registryId: string;
  /** Docker-image name. Filter, optional. */
  imageName: string;
  /** Docker-image tag. Filter, optional. */
  tag: string;
  /** Batch settings for processing events. */
  batchSettings?:
    | BatchSettings
    | undefined;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?:
    | InvokeFunctionWithRetry
    | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface Trigger_CloudLogs {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs";
  /** Log group identifiers, at least one value is required. */
  logGroupId: string[];
  /** Batch settings for processing log events. */
  batchSettings?:
    | CloudLogsBatchSettings
    | undefined;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?:
    | InvokeFunctionWithRetry
    | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface Trigger_Logging {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging";
  /** Log events filter settings. */
  logGroupId: string;
  resourceType: string[];
  resourceId: string[];
  streamName: string[];
  levels: LogLevel_Level[];
  /** Batch settings for processing log events. */
  batchSettings?:
    | LoggingBatchSettings
    | undefined;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?:
    | InvokeFunctionWithRetry
    | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

/** A single function invocation. */
export interface InvokeFunctionOnce {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce";
  /** ID of the function to invoke. */
  functionId: string;
  /** Version tag of the function to execute. */
  functionTag: string;
  /** ID of the service account that should be used to invoke the function. */
  serviceAccountId: string;
}

/** A function invocation with retries. */
export interface InvokeFunctionWithRetry {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry";
  /** ID of the function to invoke. */
  functionId: string;
  /** Version tag of the function to execute. */
  functionTag: string;
  /** ID of the service account which has permission to invoke the function. */
  serviceAccountId: string;
  /** Retry policy. If the field is not specified, or the value is empty, no retries will be attempted. */
  retrySettings?:
    | RetrySettings
    | undefined;
  /** DLQ policy (no value means discarding a message). */
  deadLetterQueue?: PutQueueMessage | undefined;
}

/** A single container invocation. */
export interface InvokeContainerOnce {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce";
  /** ID of the container to invoke. */
  containerId: string;
  /** Endpoint HTTP path to invoke. */
  path: string;
  /** ID of the service account which has permission to invoke the container. */
  serviceAccountId: string;
}

/** A container invocation with retries. */
export interface InvokeContainerWithRetry {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry";
  /** ID of the container to invoke. */
  containerId: string;
  /** Endpoint HTTP path to invoke. */
  path: string;
  /** ID of the service account which has permission to invoke the container. */
  serviceAccountId: string;
  /** Retry policy. If the field is not specified, or the value is empty, no retries will be attempted. */
  retrySettings?:
    | RetrySettings
    | undefined;
  /** DLQ policy (no value means discarding a message). */
  deadLetterQueue?: PutQueueMessage | undefined;
}

export interface PutQueueMessage {
  $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage";
  /** ID of the queue. */
  queueId: string;
  /** Service account which has write permission on the queue. */
  serviceAccountId: string;
}

/** Settings for batch processing of messages in a queue. */
export interface BatchSettings {
  $type: "yandex.cloud.serverless.triggers.v1.BatchSettings";
  /**
   * Batch size. Trigger will send the batch of messages to the function
   * when the number of messages in the queue reaches [size], or the [cutoff] time has passed.
   */
  size: number;
  /**
   * Maximum wait time. Trigger will send the batch of messages to the function when
   * the number of messages in the queue reaches [size], or the [cutoff] time has passed.
   */
  cutoff?: Duration | undefined;
}

export interface CloudLogsBatchSettings {
  $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings";
  /**
   * Batch size. Trigger will send the batch of messages to the function
   * when the number of messages in the log group reaches [size], or the [cutoff] time has passed.
   */
  size: number;
  /**
   * Maximum wait time. Trigger will send the batch of messages to the function when
   * the number of messages in the log group reaches [size], or the [cutoff] time has passed.
   */
  cutoff?: Duration | undefined;
}

export interface LoggingBatchSettings {
  $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings";
  /**
   * Batch size. Trigger will send the batch of messages to the associated function
   * when the number of log events reaches this value, or the [cutoff] time has passed.
   */
  size: number;
  /**
   * Maximum wait time. Trigger will send the batch of messages the time since the last batch
   * exceeds the `cutoff` value, regardless of the amount of log events.
   */
  cutoff?: Duration | undefined;
}

/** Settings for retrying to invoke a function. */
export interface RetrySettings {
  $type: "yandex.cloud.serverless.triggers.v1.RetrySettings";
  /** Maximum number of retries (extra invokes) before the action is considered failed. */
  retryAttempts: number;
  /** Time in seconds to wait between individual retries. */
  interval?: Duration | undefined;
}

export interface BillingBudget {
  $type: "yandex.cloud.serverless.triggers.v1.BillingBudget";
  billingAccountId: string;
  budgetId: string;
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface DataStreamBatchSettings {
  $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings";
  /**
   * Batch size in bytes. Trigger will send the batch of messages to the associated function
   * when size of log events reaches this value, or the [cutoff] time has passed.
   */
  size: number;
  /**
   * Maximum wait time. Trigger will send the batch of messages the time since the last batch
   * exceeds the `cutoff` value, regardless of the amount of log events.
   */
  cutoff?: Duration | undefined;
}

export interface DataStream {
  $type: "yandex.cloud.serverless.triggers.v1.DataStream";
  /** Data stream endpoint. */
  endpoint: string;
  /** Data stream database. */
  database: string;
  /** Stream name. */
  stream: string;
  /** ID of the service account which has permission to read data stream. */
  serviceAccountId: string;
  /** Batch settings for processing events. */
  batchSettings?: DataStreamBatchSettings | undefined;
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface ObjectStorageBucketSettings {
  $type: "yandex.cloud.serverless.triggers.v1.ObjectStorageBucketSettings";
  /** Bucket for saving. */
  bucketId: string;
  /** SA which has write permission on storage. */
  serviceAccountId: string;
}

export interface Mail {
  $type: "yandex.cloud.serverless.triggers.v1.Mail";
  /**
   * Address to receive emails for trigger activation.
   * Field is ignored for write requests and populated on trigger creation.
   */
  email: string;
  /** Batch settings for processing events. */
  batchSettings?:
    | BatchSettings
    | undefined;
  /** Bucket settings for saving attachments. */
  attachmentsBucket?: ObjectStorageBucketSettings | undefined;
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

function createBaseTrigger(): Trigger {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    rule: undefined,
    status: 0,
  };
}

export const Trigger = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger" as const,

  encode(message: Trigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    Object.entries(message.labels).forEach(([key, value]) => {
      Trigger_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.rule !== undefined) {
      Trigger_Rule.encode(message.rule, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger();
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
          if (tag !== 50) {
            break;
          }

          const entry6 = Trigger_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.rule = Trigger_Rule.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger {
    return {
      $type: Trigger.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      rule: isSet(object.rule) ? Trigger_Rule.fromJSON(object.rule) : undefined,
      status: isSet(object.status) ? trigger_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Trigger): unknown {
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
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.rule !== undefined) {
      obj.rule = Trigger_Rule.toJSON(message.rule);
    }
    if (message.status !== 0) {
      obj.status = trigger_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger>, I>>(base?: I): Trigger {
    return Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger>, I>>(object: I): Trigger {
    const message = createBaseTrigger();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.rule = (object.rule !== undefined && object.rule !== null)
      ? Trigger_Rule.fromPartial(object.rule)
      : undefined;
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Trigger.$type, Trigger);

function createBaseTrigger_LabelsEntry(): Trigger_LabelsEntry {
  return { $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry", key: "", value: "" };
}

export const Trigger_LabelsEntry = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry" as const,

  encode(message: Trigger_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_LabelsEntry();
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

  fromJSON(object: any): Trigger_LabelsEntry {
    return {
      $type: Trigger_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Trigger_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_LabelsEntry>, I>>(base?: I): Trigger_LabelsEntry {
    return Trigger_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_LabelsEntry>, I>>(object: I): Trigger_LabelsEntry {
    const message = createBaseTrigger_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Trigger_LabelsEntry.$type, Trigger_LabelsEntry);

function createBaseTrigger_Rule(): Trigger_Rule {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule",
    timer: undefined,
    messageQueue: undefined,
    iotMessage: undefined,
    iotBrokerMessage: undefined,
    objectStorage: undefined,
    containerRegistry: undefined,
    cloudLogs: undefined,
    logging: undefined,
    billingBudget: undefined,
    dataStream: undefined,
    mail: undefined,
  };
}

export const Trigger_Rule = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule" as const,

  encode(message: Trigger_Rule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timer !== undefined) {
      Trigger_Timer.encode(message.timer, writer.uint32(18).fork()).ldelim();
    }
    if (message.messageQueue !== undefined) {
      Trigger_MessageQueue.encode(message.messageQueue, writer.uint32(26).fork()).ldelim();
    }
    if (message.iotMessage !== undefined) {
      Trigger_IoTMessage.encode(message.iotMessage, writer.uint32(34).fork()).ldelim();
    }
    if (message.iotBrokerMessage !== undefined) {
      Trigger_IoTBrokerMessage.encode(message.iotBrokerMessage, writer.uint32(114).fork()).ldelim();
    }
    if (message.objectStorage !== undefined) {
      Trigger_ObjectStorage.encode(message.objectStorage, writer.uint32(42).fork()).ldelim();
    }
    if (message.containerRegistry !== undefined) {
      Trigger_ContainerRegistry.encode(message.containerRegistry, writer.uint32(50).fork()).ldelim();
    }
    if (message.cloudLogs !== undefined) {
      Trigger_CloudLogs.encode(message.cloudLogs, writer.uint32(74).fork()).ldelim();
    }
    if (message.logging !== undefined) {
      Trigger_Logging.encode(message.logging, writer.uint32(82).fork()).ldelim();
    }
    if (message.billingBudget !== undefined) {
      BillingBudget.encode(message.billingBudget, writer.uint32(90).fork()).ldelim();
    }
    if (message.dataStream !== undefined) {
      DataStream.encode(message.dataStream, writer.uint32(98).fork()).ldelim();
    }
    if (message.mail !== undefined) {
      Mail.encode(message.mail, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Rule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Rule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timer = Trigger_Timer.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.messageQueue = Trigger_MessageQueue.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.iotMessage = Trigger_IoTMessage.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.iotBrokerMessage = Trigger_IoTBrokerMessage.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.objectStorage = Trigger_ObjectStorage.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.containerRegistry = Trigger_ContainerRegistry.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.cloudLogs = Trigger_CloudLogs.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.logging = Trigger_Logging.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.billingBudget = BillingBudget.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.dataStream = DataStream.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.mail = Mail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Rule {
    return {
      $type: Trigger_Rule.$type,
      timer: isSet(object.timer) ? Trigger_Timer.fromJSON(object.timer) : undefined,
      messageQueue: isSet(object.messageQueue) ? Trigger_MessageQueue.fromJSON(object.messageQueue) : undefined,
      iotMessage: isSet(object.iotMessage) ? Trigger_IoTMessage.fromJSON(object.iotMessage) : undefined,
      iotBrokerMessage: isSet(object.iotBrokerMessage)
        ? Trigger_IoTBrokerMessage.fromJSON(object.iotBrokerMessage)
        : undefined,
      objectStorage: isSet(object.objectStorage) ? Trigger_ObjectStorage.fromJSON(object.objectStorage) : undefined,
      containerRegistry: isSet(object.containerRegistry)
        ? Trigger_ContainerRegistry.fromJSON(object.containerRegistry)
        : undefined,
      cloudLogs: isSet(object.cloudLogs) ? Trigger_CloudLogs.fromJSON(object.cloudLogs) : undefined,
      logging: isSet(object.logging) ? Trigger_Logging.fromJSON(object.logging) : undefined,
      billingBudget: isSet(object.billingBudget) ? BillingBudget.fromJSON(object.billingBudget) : undefined,
      dataStream: isSet(object.dataStream) ? DataStream.fromJSON(object.dataStream) : undefined,
      mail: isSet(object.mail) ? Mail.fromJSON(object.mail) : undefined,
    };
  },

  toJSON(message: Trigger_Rule): unknown {
    const obj: any = {};
    if (message.timer !== undefined) {
      obj.timer = Trigger_Timer.toJSON(message.timer);
    }
    if (message.messageQueue !== undefined) {
      obj.messageQueue = Trigger_MessageQueue.toJSON(message.messageQueue);
    }
    if (message.iotMessage !== undefined) {
      obj.iotMessage = Trigger_IoTMessage.toJSON(message.iotMessage);
    }
    if (message.iotBrokerMessage !== undefined) {
      obj.iotBrokerMessage = Trigger_IoTBrokerMessage.toJSON(message.iotBrokerMessage);
    }
    if (message.objectStorage !== undefined) {
      obj.objectStorage = Trigger_ObjectStorage.toJSON(message.objectStorage);
    }
    if (message.containerRegistry !== undefined) {
      obj.containerRegistry = Trigger_ContainerRegistry.toJSON(message.containerRegistry);
    }
    if (message.cloudLogs !== undefined) {
      obj.cloudLogs = Trigger_CloudLogs.toJSON(message.cloudLogs);
    }
    if (message.logging !== undefined) {
      obj.logging = Trigger_Logging.toJSON(message.logging);
    }
    if (message.billingBudget !== undefined) {
      obj.billingBudget = BillingBudget.toJSON(message.billingBudget);
    }
    if (message.dataStream !== undefined) {
      obj.dataStream = DataStream.toJSON(message.dataStream);
    }
    if (message.mail !== undefined) {
      obj.mail = Mail.toJSON(message.mail);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Rule>, I>>(base?: I): Trigger_Rule {
    return Trigger_Rule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Rule>, I>>(object: I): Trigger_Rule {
    const message = createBaseTrigger_Rule();
    message.timer = (object.timer !== undefined && object.timer !== null)
      ? Trigger_Timer.fromPartial(object.timer)
      : undefined;
    message.messageQueue = (object.messageQueue !== undefined && object.messageQueue !== null)
      ? Trigger_MessageQueue.fromPartial(object.messageQueue)
      : undefined;
    message.iotMessage = (object.iotMessage !== undefined && object.iotMessage !== null)
      ? Trigger_IoTMessage.fromPartial(object.iotMessage)
      : undefined;
    message.iotBrokerMessage = (object.iotBrokerMessage !== undefined && object.iotBrokerMessage !== null)
      ? Trigger_IoTBrokerMessage.fromPartial(object.iotBrokerMessage)
      : undefined;
    message.objectStorage = (object.objectStorage !== undefined && object.objectStorage !== null)
      ? Trigger_ObjectStorage.fromPartial(object.objectStorage)
      : undefined;
    message.containerRegistry = (object.containerRegistry !== undefined && object.containerRegistry !== null)
      ? Trigger_ContainerRegistry.fromPartial(object.containerRegistry)
      : undefined;
    message.cloudLogs = (object.cloudLogs !== undefined && object.cloudLogs !== null)
      ? Trigger_CloudLogs.fromPartial(object.cloudLogs)
      : undefined;
    message.logging = (object.logging !== undefined && object.logging !== null)
      ? Trigger_Logging.fromPartial(object.logging)
      : undefined;
    message.billingBudget = (object.billingBudget !== undefined && object.billingBudget !== null)
      ? BillingBudget.fromPartial(object.billingBudget)
      : undefined;
    message.dataStream = (object.dataStream !== undefined && object.dataStream !== null)
      ? DataStream.fromPartial(object.dataStream)
      : undefined;
    message.mail = (object.mail !== undefined && object.mail !== null) ? Mail.fromPartial(object.mail) : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_Rule.$type, Trigger_Rule);

function createBaseTrigger_Timer(): Trigger_Timer {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer",
    cronExpression: "",
    payload: "",
    invokeFunction: undefined,
    invokeFunctionWithRetry: undefined,
    invokeContainerWithRetry: undefined,
  };
}

export const Trigger_Timer = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer" as const,

  encode(message: Trigger_Timer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cronExpression !== "") {
      writer.uint32(10).string(message.cronExpression);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionOnce.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeFunctionWithRetry !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunctionWithRetry, writer.uint32(826).fork()).ldelim();
    }
    if (message.invokeContainerWithRetry !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainerWithRetry, writer.uint32(834).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Timer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Timer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cronExpression = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = reader.string();
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionOnce.decode(reader, reader.uint32());
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.invokeFunctionWithRetry = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.invokeContainerWithRetry = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Timer {
    return {
      $type: Trigger_Timer.$type,
      cronExpression: isSet(object.cronExpression) ? globalThis.String(object.cronExpression) : "",
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
      invokeFunction: isSet(object.invokeFunction) ? InvokeFunctionOnce.fromJSON(object.invokeFunction) : undefined,
      invokeFunctionWithRetry: isSet(object.invokeFunctionWithRetry)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunctionWithRetry)
        : undefined,
      invokeContainerWithRetry: isSet(object.invokeContainerWithRetry)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainerWithRetry)
        : undefined,
    };
  },

  toJSON(message: Trigger_Timer): unknown {
    const obj: any = {};
    if (message.cronExpression !== "") {
      obj.cronExpression = message.cronExpression;
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionOnce.toJSON(message.invokeFunction);
    }
    if (message.invokeFunctionWithRetry !== undefined) {
      obj.invokeFunctionWithRetry = InvokeFunctionWithRetry.toJSON(message.invokeFunctionWithRetry);
    }
    if (message.invokeContainerWithRetry !== undefined) {
      obj.invokeContainerWithRetry = InvokeContainerWithRetry.toJSON(message.invokeContainerWithRetry);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Timer>, I>>(base?: I): Trigger_Timer {
    return Trigger_Timer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Timer>, I>>(object: I): Trigger_Timer {
    const message = createBaseTrigger_Timer();
    message.cronExpression = object.cronExpression ?? "";
    message.payload = object.payload ?? "";
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionOnce.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeFunctionWithRetry =
      (object.invokeFunctionWithRetry !== undefined && object.invokeFunctionWithRetry !== null)
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunctionWithRetry)
        : undefined;
    message.invokeContainerWithRetry =
      (object.invokeContainerWithRetry !== undefined && object.invokeContainerWithRetry !== null)
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainerWithRetry)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_Timer.$type, Trigger_Timer);

function createBaseTrigger_MessageQueue(): Trigger_MessageQueue {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue",
    queueId: "",
    serviceAccountId: "",
    batchSettings: undefined,
    visibilityTimeout: undefined,
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const Trigger_MessageQueue = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue" as const,

  encode(message: Trigger_MessageQueue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queueId !== "") {
      writer.uint32(90).string(message.queueId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(26).string(message.serviceAccountId);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(message.batchSettings, writer.uint32(34).fork()).ldelim();
    }
    if (message.visibilityTimeout !== undefined) {
      Duration.encode(message.visibilityTimeout, writer.uint32(42).fork()).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionOnce.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerOnce.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_MessageQueue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_MessageQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          if (tag !== 90) {
            break;
          }

          message.queueId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.visibilityTimeout = Duration.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionOnce.decode(reader, reader.uint32());
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.invokeContainer = InvokeContainerOnce.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_MessageQueue {
    return {
      $type: Trigger_MessageQueue.$type,
      queueId: isSet(object.queueId) ? globalThis.String(object.queueId) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      batchSettings: isSet(object.batchSettings) ? BatchSettings.fromJSON(object.batchSettings) : undefined,
      visibilityTimeout: isSet(object.visibilityTimeout) ? Duration.fromJSON(object.visibilityTimeout) : undefined,
      invokeFunction: isSet(object.invokeFunction) ? InvokeFunctionOnce.fromJSON(object.invokeFunction) : undefined,
      invokeContainer: isSet(object.invokeContainer) ? InvokeContainerOnce.fromJSON(object.invokeContainer) : undefined,
    };
  },

  toJSON(message: Trigger_MessageQueue): unknown {
    const obj: any = {};
    if (message.queueId !== "") {
      obj.queueId = message.queueId;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.batchSettings !== undefined) {
      obj.batchSettings = BatchSettings.toJSON(message.batchSettings);
    }
    if (message.visibilityTimeout !== undefined) {
      obj.visibilityTimeout = Duration.toJSON(message.visibilityTimeout);
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionOnce.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerOnce.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_MessageQueue>, I>>(base?: I): Trigger_MessageQueue {
    return Trigger_MessageQueue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_MessageQueue>, I>>(object: I): Trigger_MessageQueue {
    const message = createBaseTrigger_MessageQueue();
    message.queueId = object.queueId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.batchSettings = (object.batchSettings !== undefined && object.batchSettings !== null)
      ? BatchSettings.fromPartial(object.batchSettings)
      : undefined;
    message.visibilityTimeout = (object.visibilityTimeout !== undefined && object.visibilityTimeout !== null)
      ? Duration.fromPartial(object.visibilityTimeout)
      : undefined;
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionOnce.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerOnce.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_MessageQueue.$type, Trigger_MessageQueue);

function createBaseTrigger_IoTMessage(): Trigger_IoTMessage {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage",
    registryId: "",
    deviceId: "",
    mqttTopic: "",
    batchSettings: undefined,
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const Trigger_IoTMessage = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage" as const,

  encode(message: Trigger_IoTMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.deviceId !== "") {
      writer.uint32(18).string(message.deviceId);
    }
    if (message.mqttTopic !== "") {
      writer.uint32(26).string(message.mqttTopic);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(message.batchSettings, writer.uint32(34).fork()).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_IoTMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_IoTMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mqttTopic = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.invokeContainer = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_IoTMessage {
    return {
      $type: Trigger_IoTMessage.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      mqttTopic: isSet(object.mqttTopic) ? globalThis.String(object.mqttTopic) : "",
      batchSettings: isSet(object.batchSettings) ? BatchSettings.fromJSON(object.batchSettings) : undefined,
      invokeFunction: isSet(object.invokeFunction)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined,
      invokeContainer: isSet(object.invokeContainer)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined,
    };
  },

  toJSON(message: Trigger_IoTMessage): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.mqttTopic !== "") {
      obj.mqttTopic = message.mqttTopic;
    }
    if (message.batchSettings !== undefined) {
      obj.batchSettings = BatchSettings.toJSON(message.batchSettings);
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionWithRetry.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerWithRetry.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_IoTMessage>, I>>(base?: I): Trigger_IoTMessage {
    return Trigger_IoTMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_IoTMessage>, I>>(object: I): Trigger_IoTMessage {
    const message = createBaseTrigger_IoTMessage();
    message.registryId = object.registryId ?? "";
    message.deviceId = object.deviceId ?? "";
    message.mqttTopic = object.mqttTopic ?? "";
    message.batchSettings = (object.batchSettings !== undefined && object.batchSettings !== null)
      ? BatchSettings.fromPartial(object.batchSettings)
      : undefined;
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_IoTMessage.$type, Trigger_IoTMessage);

function createBaseTrigger_IoTBrokerMessage(): Trigger_IoTBrokerMessage {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage",
    brokerId: "",
    mqttTopic: "",
    batchSettings: undefined,
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const Trigger_IoTBrokerMessage = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage" as const,

  encode(message: Trigger_IoTBrokerMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.mqttTopic !== "") {
      writer.uint32(18).string(message.mqttTopic);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(message.batchSettings, writer.uint32(26).fork()).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_IoTBrokerMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_IoTBrokerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mqttTopic = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.invokeContainer = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_IoTBrokerMessage {
    return {
      $type: Trigger_IoTBrokerMessage.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      mqttTopic: isSet(object.mqttTopic) ? globalThis.String(object.mqttTopic) : "",
      batchSettings: isSet(object.batchSettings) ? BatchSettings.fromJSON(object.batchSettings) : undefined,
      invokeFunction: isSet(object.invokeFunction)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined,
      invokeContainer: isSet(object.invokeContainer)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined,
    };
  },

  toJSON(message: Trigger_IoTBrokerMessage): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.mqttTopic !== "") {
      obj.mqttTopic = message.mqttTopic;
    }
    if (message.batchSettings !== undefined) {
      obj.batchSettings = BatchSettings.toJSON(message.batchSettings);
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionWithRetry.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerWithRetry.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_IoTBrokerMessage>, I>>(base?: I): Trigger_IoTBrokerMessage {
    return Trigger_IoTBrokerMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_IoTBrokerMessage>, I>>(object: I): Trigger_IoTBrokerMessage {
    const message = createBaseTrigger_IoTBrokerMessage();
    message.brokerId = object.brokerId ?? "";
    message.mqttTopic = object.mqttTopic ?? "";
    message.batchSettings = (object.batchSettings !== undefined && object.batchSettings !== null)
      ? BatchSettings.fromPartial(object.batchSettings)
      : undefined;
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_IoTBrokerMessage.$type, Trigger_IoTBrokerMessage);

function createBaseTrigger_ObjectStorage(): Trigger_ObjectStorage {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage",
    eventType: [],
    bucketId: "",
    prefix: "",
    suffix: "",
    batchSettings: undefined,
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const Trigger_ObjectStorage = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage" as const,

  encode(message: Trigger_ObjectStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(26).fork();
    for (const v of message.eventType) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.bucketId !== "") {
      writer.uint32(34).string(message.bucketId);
    }
    if (message.prefix !== "") {
      writer.uint32(50).string(message.prefix);
    }
    if (message.suffix !== "") {
      writer.uint32(58).string(message.suffix);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(message.batchSettings, writer.uint32(66).fork()).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_ObjectStorage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_ObjectStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag === 24) {
            message.eventType.push(reader.int32() as any);

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eventType.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bucketId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.prefix = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.suffix = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.invokeContainer = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_ObjectStorage {
    return {
      $type: Trigger_ObjectStorage.$type,
      eventType: globalThis.Array.isArray(object?.eventType)
        ? object.eventType.map((e: any) => trigger_ObjectStorageEventTypeFromJSON(e))
        : [],
      bucketId: isSet(object.bucketId) ? globalThis.String(object.bucketId) : "",
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : "",
      suffix: isSet(object.suffix) ? globalThis.String(object.suffix) : "",
      batchSettings: isSet(object.batchSettings) ? BatchSettings.fromJSON(object.batchSettings) : undefined,
      invokeFunction: isSet(object.invokeFunction)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined,
      invokeContainer: isSet(object.invokeContainer)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined,
    };
  },

  toJSON(message: Trigger_ObjectStorage): unknown {
    const obj: any = {};
    if (message.eventType?.length) {
      obj.eventType = message.eventType.map((e) => trigger_ObjectStorageEventTypeToJSON(e));
    }
    if (message.bucketId !== "") {
      obj.bucketId = message.bucketId;
    }
    if (message.prefix !== "") {
      obj.prefix = message.prefix;
    }
    if (message.suffix !== "") {
      obj.suffix = message.suffix;
    }
    if (message.batchSettings !== undefined) {
      obj.batchSettings = BatchSettings.toJSON(message.batchSettings);
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionWithRetry.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerWithRetry.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_ObjectStorage>, I>>(base?: I): Trigger_ObjectStorage {
    return Trigger_ObjectStorage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_ObjectStorage>, I>>(object: I): Trigger_ObjectStorage {
    const message = createBaseTrigger_ObjectStorage();
    message.eventType = object.eventType?.map((e) => e) || [];
    message.bucketId = object.bucketId ?? "";
    message.prefix = object.prefix ?? "";
    message.suffix = object.suffix ?? "";
    message.batchSettings = (object.batchSettings !== undefined && object.batchSettings !== null)
      ? BatchSettings.fromPartial(object.batchSettings)
      : undefined;
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_ObjectStorage.$type, Trigger_ObjectStorage);

function createBaseTrigger_ContainerRegistry(): Trigger_ContainerRegistry {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry",
    eventType: [],
    registryId: "",
    imageName: "",
    tag: "",
    batchSettings: undefined,
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const Trigger_ContainerRegistry = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry" as const,

  encode(message: Trigger_ContainerRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(26).fork();
    for (const v of message.eventType) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.registryId !== "") {
      writer.uint32(34).string(message.registryId);
    }
    if (message.imageName !== "") {
      writer.uint32(42).string(message.imageName);
    }
    if (message.tag !== "") {
      writer.uint32(50).string(message.tag);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(message.batchSettings, writer.uint32(58).fork()).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_ContainerRegistry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_ContainerRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag === 24) {
            message.eventType.push(reader.int32() as any);

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eventType.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.imageName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tag = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.invokeContainer = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_ContainerRegistry {
    return {
      $type: Trigger_ContainerRegistry.$type,
      eventType: globalThis.Array.isArray(object?.eventType)
        ? object.eventType.map((e: any) => trigger_ContainerRegistryEventTypeFromJSON(e))
        : [],
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      imageName: isSet(object.imageName) ? globalThis.String(object.imageName) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
      batchSettings: isSet(object.batchSettings) ? BatchSettings.fromJSON(object.batchSettings) : undefined,
      invokeFunction: isSet(object.invokeFunction)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined,
      invokeContainer: isSet(object.invokeContainer)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined,
    };
  },

  toJSON(message: Trigger_ContainerRegistry): unknown {
    const obj: any = {};
    if (message.eventType?.length) {
      obj.eventType = message.eventType.map((e) => trigger_ContainerRegistryEventTypeToJSON(e));
    }
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.imageName !== "") {
      obj.imageName = message.imageName;
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    if (message.batchSettings !== undefined) {
      obj.batchSettings = BatchSettings.toJSON(message.batchSettings);
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionWithRetry.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerWithRetry.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_ContainerRegistry>, I>>(base?: I): Trigger_ContainerRegistry {
    return Trigger_ContainerRegistry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_ContainerRegistry>, I>>(object: I): Trigger_ContainerRegistry {
    const message = createBaseTrigger_ContainerRegistry();
    message.eventType = object.eventType?.map((e) => e) || [];
    message.registryId = object.registryId ?? "";
    message.imageName = object.imageName ?? "";
    message.tag = object.tag ?? "";
    message.batchSettings = (object.batchSettings !== undefined && object.batchSettings !== null)
      ? BatchSettings.fromPartial(object.batchSettings)
      : undefined;
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_ContainerRegistry.$type, Trigger_ContainerRegistry);

function createBaseTrigger_CloudLogs(): Trigger_CloudLogs {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs",
    logGroupId: [],
    batchSettings: undefined,
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const Trigger_CloudLogs = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs" as const,

  encode(message: Trigger_CloudLogs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logGroupId) {
      writer.uint32(10).string(v!);
    }
    if (message.batchSettings !== undefined) {
      CloudLogsBatchSettings.encode(message.batchSettings, writer.uint32(18).fork()).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_CloudLogs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_CloudLogs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.batchSettings = CloudLogsBatchSettings.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.invokeContainer = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_CloudLogs {
    return {
      $type: Trigger_CloudLogs.$type,
      logGroupId: globalThis.Array.isArray(object?.logGroupId)
        ? object.logGroupId.map((e: any) => globalThis.String(e))
        : [],
      batchSettings: isSet(object.batchSettings) ? CloudLogsBatchSettings.fromJSON(object.batchSettings) : undefined,
      invokeFunction: isSet(object.invokeFunction)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined,
      invokeContainer: isSet(object.invokeContainer)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined,
    };
  },

  toJSON(message: Trigger_CloudLogs): unknown {
    const obj: any = {};
    if (message.logGroupId?.length) {
      obj.logGroupId = message.logGroupId;
    }
    if (message.batchSettings !== undefined) {
      obj.batchSettings = CloudLogsBatchSettings.toJSON(message.batchSettings);
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionWithRetry.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerWithRetry.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_CloudLogs>, I>>(base?: I): Trigger_CloudLogs {
    return Trigger_CloudLogs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_CloudLogs>, I>>(object: I): Trigger_CloudLogs {
    const message = createBaseTrigger_CloudLogs();
    message.logGroupId = object.logGroupId?.map((e) => e) || [];
    message.batchSettings = (object.batchSettings !== undefined && object.batchSettings !== null)
      ? CloudLogsBatchSettings.fromPartial(object.batchSettings)
      : undefined;
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_CloudLogs.$type, Trigger_CloudLogs);

function createBaseTrigger_Logging(): Trigger_Logging {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging",
    logGroupId: "",
    resourceType: [],
    resourceId: [],
    streamName: [],
    levels: [],
    batchSettings: undefined,
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const Trigger_Logging = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging" as const,

  encode(message: Trigger_Logging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    for (const v of message.resourceType) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.resourceId) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.streamName) {
      writer.uint32(58).string(v!);
    }
    writer.uint32(42).fork();
    for (const v of message.levels) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.batchSettings !== undefined) {
      LoggingBatchSettings.encode(message.batchSettings, writer.uint32(50).fork()).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(826).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Logging {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Logging();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceType.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resourceId.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.streamName.push(reader.string());
          continue;
        case 5:
          if (tag === 40) {
            message.levels.push(reader.int32() as any);

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.levels.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.batchSettings = LoggingBatchSettings.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.invokeContainer = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Logging {
    return {
      $type: Trigger_Logging.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      resourceType: globalThis.Array.isArray(object?.resourceType)
        ? object.resourceType.map((e: any) => globalThis.String(e))
        : [],
      resourceId: globalThis.Array.isArray(object?.resourceId)
        ? object.resourceId.map((e: any) => globalThis.String(e))
        : [],
      streamName: globalThis.Array.isArray(object?.streamName)
        ? object.streamName.map((e: any) => globalThis.String(e))
        : [],
      levels: globalThis.Array.isArray(object?.levels) ? object.levels.map((e: any) => logLevel_LevelFromJSON(e)) : [],
      batchSettings: isSet(object.batchSettings) ? LoggingBatchSettings.fromJSON(object.batchSettings) : undefined,
      invokeFunction: isSet(object.invokeFunction)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined,
      invokeContainer: isSet(object.invokeContainer)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined,
    };
  },

  toJSON(message: Trigger_Logging): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.resourceType?.length) {
      obj.resourceType = message.resourceType;
    }
    if (message.resourceId?.length) {
      obj.resourceId = message.resourceId;
    }
    if (message.streamName?.length) {
      obj.streamName = message.streamName;
    }
    if (message.levels?.length) {
      obj.levels = message.levels.map((e) => logLevel_LevelToJSON(e));
    }
    if (message.batchSettings !== undefined) {
      obj.batchSettings = LoggingBatchSettings.toJSON(message.batchSettings);
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionWithRetry.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerWithRetry.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Logging>, I>>(base?: I): Trigger_Logging {
    return Trigger_Logging.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Logging>, I>>(object: I): Trigger_Logging {
    const message = createBaseTrigger_Logging();
    message.logGroupId = object.logGroupId ?? "";
    message.resourceType = object.resourceType?.map((e) => e) || [];
    message.resourceId = object.resourceId?.map((e) => e) || [];
    message.streamName = object.streamName?.map((e) => e) || [];
    message.levels = object.levels?.map((e) => e) || [];
    message.batchSettings = (object.batchSettings !== undefined && object.batchSettings !== null)
      ? LoggingBatchSettings.fromPartial(object.batchSettings)
      : undefined;
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_Logging.$type, Trigger_Logging);

function createBaseInvokeFunctionOnce(): InvokeFunctionOnce {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce",
    functionId: "",
    functionTag: "",
    serviceAccountId: "",
  };
}

export const InvokeFunctionOnce = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce" as const,

  encode(message: InvokeFunctionOnce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.functionTag !== "") {
      writer.uint32(18).string(message.functionTag);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(26).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeFunctionOnce {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeFunctionOnce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.functionTag = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvokeFunctionOnce {
    return {
      $type: InvokeFunctionOnce.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      functionTag: isSet(object.functionTag) ? globalThis.String(object.functionTag) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: InvokeFunctionOnce): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.functionTag !== "") {
      obj.functionTag = message.functionTag;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeFunctionOnce>, I>>(base?: I): InvokeFunctionOnce {
    return InvokeFunctionOnce.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeFunctionOnce>, I>>(object: I): InvokeFunctionOnce {
    const message = createBaseInvokeFunctionOnce();
    message.functionId = object.functionId ?? "";
    message.functionTag = object.functionTag ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InvokeFunctionOnce.$type, InvokeFunctionOnce);

function createBaseInvokeFunctionWithRetry(): InvokeFunctionWithRetry {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry",
    functionId: "",
    functionTag: "",
    serviceAccountId: "",
    retrySettings: undefined,
    deadLetterQueue: undefined,
  };
}

export const InvokeFunctionWithRetry = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry" as const,

  encode(message: InvokeFunctionWithRetry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.functionTag !== "") {
      writer.uint32(18).string(message.functionTag);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(26).string(message.serviceAccountId);
    }
    if (message.retrySettings !== undefined) {
      RetrySettings.encode(message.retrySettings, writer.uint32(34).fork()).ldelim();
    }
    if (message.deadLetterQueue !== undefined) {
      PutQueueMessage.encode(message.deadLetterQueue, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeFunctionWithRetry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeFunctionWithRetry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.functionTag = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.retrySettings = RetrySettings.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deadLetterQueue = PutQueueMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvokeFunctionWithRetry {
    return {
      $type: InvokeFunctionWithRetry.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      functionTag: isSet(object.functionTag) ? globalThis.String(object.functionTag) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      retrySettings: isSet(object.retrySettings) ? RetrySettings.fromJSON(object.retrySettings) : undefined,
      deadLetterQueue: isSet(object.deadLetterQueue) ? PutQueueMessage.fromJSON(object.deadLetterQueue) : undefined,
    };
  },

  toJSON(message: InvokeFunctionWithRetry): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.functionTag !== "") {
      obj.functionTag = message.functionTag;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.retrySettings !== undefined) {
      obj.retrySettings = RetrySettings.toJSON(message.retrySettings);
    }
    if (message.deadLetterQueue !== undefined) {
      obj.deadLetterQueue = PutQueueMessage.toJSON(message.deadLetterQueue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeFunctionWithRetry>, I>>(base?: I): InvokeFunctionWithRetry {
    return InvokeFunctionWithRetry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeFunctionWithRetry>, I>>(object: I): InvokeFunctionWithRetry {
    const message = createBaseInvokeFunctionWithRetry();
    message.functionId = object.functionId ?? "";
    message.functionTag = object.functionTag ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.retrySettings = (object.retrySettings !== undefined && object.retrySettings !== null)
      ? RetrySettings.fromPartial(object.retrySettings)
      : undefined;
    message.deadLetterQueue = (object.deadLetterQueue !== undefined && object.deadLetterQueue !== null)
      ? PutQueueMessage.fromPartial(object.deadLetterQueue)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(InvokeFunctionWithRetry.$type, InvokeFunctionWithRetry);

function createBaseInvokeContainerOnce(): InvokeContainerOnce {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce",
    containerId: "",
    path: "",
    serviceAccountId: "",
  };
}

export const InvokeContainerOnce = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce" as const,

  encode(message: InvokeContainerOnce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(34).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeContainerOnce {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeContainerOnce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.containerId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvokeContainerOnce {
    return {
      $type: InvokeContainerOnce.$type,
      containerId: isSet(object.containerId) ? globalThis.String(object.containerId) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: InvokeContainerOnce): unknown {
    const obj: any = {};
    if (message.containerId !== "") {
      obj.containerId = message.containerId;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeContainerOnce>, I>>(base?: I): InvokeContainerOnce {
    return InvokeContainerOnce.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeContainerOnce>, I>>(object: I): InvokeContainerOnce {
    const message = createBaseInvokeContainerOnce();
    message.containerId = object.containerId ?? "";
    message.path = object.path ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InvokeContainerOnce.$type, InvokeContainerOnce);

function createBaseInvokeContainerWithRetry(): InvokeContainerWithRetry {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry",
    containerId: "",
    path: "",
    serviceAccountId: "",
    retrySettings: undefined,
    deadLetterQueue: undefined,
  };
}

export const InvokeContainerWithRetry = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry" as const,

  encode(message: InvokeContainerWithRetry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(34).string(message.serviceAccountId);
    }
    if (message.retrySettings !== undefined) {
      RetrySettings.encode(message.retrySettings, writer.uint32(42).fork()).ldelim();
    }
    if (message.deadLetterQueue !== undefined) {
      PutQueueMessage.encode(message.deadLetterQueue, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeContainerWithRetry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeContainerWithRetry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.containerId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.retrySettings = RetrySettings.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deadLetterQueue = PutQueueMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvokeContainerWithRetry {
    return {
      $type: InvokeContainerWithRetry.$type,
      containerId: isSet(object.containerId) ? globalThis.String(object.containerId) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      retrySettings: isSet(object.retrySettings) ? RetrySettings.fromJSON(object.retrySettings) : undefined,
      deadLetterQueue: isSet(object.deadLetterQueue) ? PutQueueMessage.fromJSON(object.deadLetterQueue) : undefined,
    };
  },

  toJSON(message: InvokeContainerWithRetry): unknown {
    const obj: any = {};
    if (message.containerId !== "") {
      obj.containerId = message.containerId;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.retrySettings !== undefined) {
      obj.retrySettings = RetrySettings.toJSON(message.retrySettings);
    }
    if (message.deadLetterQueue !== undefined) {
      obj.deadLetterQueue = PutQueueMessage.toJSON(message.deadLetterQueue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeContainerWithRetry>, I>>(base?: I): InvokeContainerWithRetry {
    return InvokeContainerWithRetry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeContainerWithRetry>, I>>(object: I): InvokeContainerWithRetry {
    const message = createBaseInvokeContainerWithRetry();
    message.containerId = object.containerId ?? "";
    message.path = object.path ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.retrySettings = (object.retrySettings !== undefined && object.retrySettings !== null)
      ? RetrySettings.fromPartial(object.retrySettings)
      : undefined;
    message.deadLetterQueue = (object.deadLetterQueue !== undefined && object.deadLetterQueue !== null)
      ? PutQueueMessage.fromPartial(object.deadLetterQueue)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(InvokeContainerWithRetry.$type, InvokeContainerWithRetry);

function createBasePutQueueMessage(): PutQueueMessage {
  return { $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage", queueId: "", serviceAccountId: "" };
}

export const PutQueueMessage = {
  $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage" as const,

  encode(message: PutQueueMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queueId !== "") {
      writer.uint32(90).string(message.queueId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(18).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutQueueMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutQueueMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          if (tag !== 90) {
            break;
          }

          message.queueId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutQueueMessage {
    return {
      $type: PutQueueMessage.$type,
      queueId: isSet(object.queueId) ? globalThis.String(object.queueId) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: PutQueueMessage): unknown {
    const obj: any = {};
    if (message.queueId !== "") {
      obj.queueId = message.queueId;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PutQueueMessage>, I>>(base?: I): PutQueueMessage {
    return PutQueueMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PutQueueMessage>, I>>(object: I): PutQueueMessage {
    const message = createBasePutQueueMessage();
    message.queueId = object.queueId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PutQueueMessage.$type, PutQueueMessage);

function createBaseBatchSettings(): BatchSettings {
  return { $type: "yandex.cloud.serverless.triggers.v1.BatchSettings", size: 0, cutoff: undefined };
}

export const BatchSettings = {
  $type: "yandex.cloud.serverless.triggers.v1.BatchSettings" as const,

  encode(message: BatchSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    if (message.cutoff !== undefined) {
      Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cutoff = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchSettings {
    return {
      $type: BatchSettings.$type,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      cutoff: isSet(object.cutoff) ? Duration.fromJSON(object.cutoff) : undefined,
    };
  },

  toJSON(message: BatchSettings): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.cutoff !== undefined) {
      obj.cutoff = Duration.toJSON(message.cutoff);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BatchSettings>, I>>(base?: I): BatchSettings {
    return BatchSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BatchSettings>, I>>(object: I): BatchSettings {
    const message = createBaseBatchSettings();
    message.size = object.size ?? 0;
    message.cutoff = (object.cutoff !== undefined && object.cutoff !== null)
      ? Duration.fromPartial(object.cutoff)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(BatchSettings.$type, BatchSettings);

function createBaseCloudLogsBatchSettings(): CloudLogsBatchSettings {
  return { $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings", size: 0, cutoff: undefined };
}

export const CloudLogsBatchSettings = {
  $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings" as const,

  encode(message: CloudLogsBatchSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    if (message.cutoff !== undefined) {
      Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloudLogsBatchSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloudLogsBatchSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cutoff = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CloudLogsBatchSettings {
    return {
      $type: CloudLogsBatchSettings.$type,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      cutoff: isSet(object.cutoff) ? Duration.fromJSON(object.cutoff) : undefined,
    };
  },

  toJSON(message: CloudLogsBatchSettings): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.cutoff !== undefined) {
      obj.cutoff = Duration.toJSON(message.cutoff);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CloudLogsBatchSettings>, I>>(base?: I): CloudLogsBatchSettings {
    return CloudLogsBatchSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CloudLogsBatchSettings>, I>>(object: I): CloudLogsBatchSettings {
    const message = createBaseCloudLogsBatchSettings();
    message.size = object.size ?? 0;
    message.cutoff = (object.cutoff !== undefined && object.cutoff !== null)
      ? Duration.fromPartial(object.cutoff)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CloudLogsBatchSettings.$type, CloudLogsBatchSettings);

function createBaseLoggingBatchSettings(): LoggingBatchSettings {
  return { $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings", size: 0, cutoff: undefined };
}

export const LoggingBatchSettings = {
  $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings" as const,

  encode(message: LoggingBatchSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    if (message.cutoff !== undefined) {
      Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoggingBatchSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoggingBatchSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cutoff = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoggingBatchSettings {
    return {
      $type: LoggingBatchSettings.$type,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      cutoff: isSet(object.cutoff) ? Duration.fromJSON(object.cutoff) : undefined,
    };
  },

  toJSON(message: LoggingBatchSettings): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.cutoff !== undefined) {
      obj.cutoff = Duration.toJSON(message.cutoff);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoggingBatchSettings>, I>>(base?: I): LoggingBatchSettings {
    return LoggingBatchSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoggingBatchSettings>, I>>(object: I): LoggingBatchSettings {
    const message = createBaseLoggingBatchSettings();
    message.size = object.size ?? 0;
    message.cutoff = (object.cutoff !== undefined && object.cutoff !== null)
      ? Duration.fromPartial(object.cutoff)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(LoggingBatchSettings.$type, LoggingBatchSettings);

function createBaseRetrySettings(): RetrySettings {
  return { $type: "yandex.cloud.serverless.triggers.v1.RetrySettings", retryAttempts: 0, interval: undefined };
}

export const RetrySettings = {
  $type: "yandex.cloud.serverless.triggers.v1.RetrySettings" as const,

  encode(message: RetrySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retryAttempts !== 0) {
      writer.uint32(8).int64(message.retryAttempts);
    }
    if (message.interval !== undefined) {
      Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetrySettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetrySettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.retryAttempts = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.interval = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RetrySettings {
    return {
      $type: RetrySettings.$type,
      retryAttempts: isSet(object.retryAttempts) ? globalThis.Number(object.retryAttempts) : 0,
      interval: isSet(object.interval) ? Duration.fromJSON(object.interval) : undefined,
    };
  },

  toJSON(message: RetrySettings): unknown {
    const obj: any = {};
    if (message.retryAttempts !== 0) {
      obj.retryAttempts = Math.round(message.retryAttempts);
    }
    if (message.interval !== undefined) {
      obj.interval = Duration.toJSON(message.interval);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RetrySettings>, I>>(base?: I): RetrySettings {
    return RetrySettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RetrySettings>, I>>(object: I): RetrySettings {
    const message = createBaseRetrySettings();
    message.retryAttempts = object.retryAttempts ?? 0;
    message.interval = (object.interval !== undefined && object.interval !== null)
      ? Duration.fromPartial(object.interval)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(RetrySettings.$type, RetrySettings);

function createBaseBillingBudget(): BillingBudget {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.BillingBudget",
    billingAccountId: "",
    budgetId: "",
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const BillingBudget = {
  $type: "yandex.cloud.serverless.triggers.v1.BillingBudget" as const,

  encode(message: BillingBudget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billingAccountId !== "") {
      writer.uint32(10).string(message.billingAccountId);
    }
    if (message.budgetId !== "") {
      writer.uint32(18).string(message.budgetId);
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(826).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BillingBudget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBillingBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.billingAccountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.budgetId = reader.string();
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.invokeContainer = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BillingBudget {
    return {
      $type: BillingBudget.$type,
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
      budgetId: isSet(object.budgetId) ? globalThis.String(object.budgetId) : "",
      invokeFunction: isSet(object.invokeFunction)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined,
      invokeContainer: isSet(object.invokeContainer)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined,
    };
  },

  toJSON(message: BillingBudget): unknown {
    const obj: any = {};
    if (message.billingAccountId !== "") {
      obj.billingAccountId = message.billingAccountId;
    }
    if (message.budgetId !== "") {
      obj.budgetId = message.budgetId;
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionWithRetry.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerWithRetry.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BillingBudget>, I>>(base?: I): BillingBudget {
    return BillingBudget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BillingBudget>, I>>(object: I): BillingBudget {
    const message = createBaseBillingBudget();
    message.billingAccountId = object.billingAccountId ?? "";
    message.budgetId = object.budgetId ?? "";
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(BillingBudget.$type, BillingBudget);

function createBaseDataStreamBatchSettings(): DataStreamBatchSettings {
  return { $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings", size: 0, cutoff: undefined };
}

export const DataStreamBatchSettings = {
  $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings" as const,

  encode(message: DataStreamBatchSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    if (message.cutoff !== undefined) {
      Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataStreamBatchSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataStreamBatchSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cutoff = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataStreamBatchSettings {
    return {
      $type: DataStreamBatchSettings.$type,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      cutoff: isSet(object.cutoff) ? Duration.fromJSON(object.cutoff) : undefined,
    };
  },

  toJSON(message: DataStreamBatchSettings): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.cutoff !== undefined) {
      obj.cutoff = Duration.toJSON(message.cutoff);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataStreamBatchSettings>, I>>(base?: I): DataStreamBatchSettings {
    return DataStreamBatchSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataStreamBatchSettings>, I>>(object: I): DataStreamBatchSettings {
    const message = createBaseDataStreamBatchSettings();
    message.size = object.size ?? 0;
    message.cutoff = (object.cutoff !== undefined && object.cutoff !== null)
      ? Duration.fromPartial(object.cutoff)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(DataStreamBatchSettings.$type, DataStreamBatchSettings);

function createBaseDataStream(): DataStream {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.DataStream",
    endpoint: "",
    database: "",
    stream: "",
    serviceAccountId: "",
    batchSettings: undefined,
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const DataStream = {
  $type: "yandex.cloud.serverless.triggers.v1.DataStream" as const,

  encode(message: DataStream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpoint !== "") {
      writer.uint32(10).string(message.endpoint);
    }
    if (message.database !== "") {
      writer.uint32(18).string(message.database);
    }
    if (message.stream !== "") {
      writer.uint32(26).string(message.stream);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(34).string(message.serviceAccountId);
    }
    if (message.batchSettings !== undefined) {
      DataStreamBatchSettings.encode(message.batchSettings, writer.uint32(42).fork()).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(106).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataStream {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpoint = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.database = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stream = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.batchSettings = DataStreamBatchSettings.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.invokeFunction = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.invokeContainer = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataStream {
    return {
      $type: DataStream.$type,
      endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      stream: isSet(object.stream) ? globalThis.String(object.stream) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      batchSettings: isSet(object.batchSettings) ? DataStreamBatchSettings.fromJSON(object.batchSettings) : undefined,
      invokeFunction: isSet(object.invokeFunction)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined,
      invokeContainer: isSet(object.invokeContainer)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined,
    };
  },

  toJSON(message: DataStream): unknown {
    const obj: any = {};
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.stream !== "") {
      obj.stream = message.stream;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.batchSettings !== undefined) {
      obj.batchSettings = DataStreamBatchSettings.toJSON(message.batchSettings);
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionWithRetry.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerWithRetry.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataStream>, I>>(base?: I): DataStream {
    return DataStream.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataStream>, I>>(object: I): DataStream {
    const message = createBaseDataStream();
    message.endpoint = object.endpoint ?? "";
    message.database = object.database ?? "";
    message.stream = object.stream ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.batchSettings = (object.batchSettings !== undefined && object.batchSettings !== null)
      ? DataStreamBatchSettings.fromPartial(object.batchSettings)
      : undefined;
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(DataStream.$type, DataStream);

function createBaseObjectStorageBucketSettings(): ObjectStorageBucketSettings {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.ObjectStorageBucketSettings",
    bucketId: "",
    serviceAccountId: "",
  };
}

export const ObjectStorageBucketSettings = {
  $type: "yandex.cloud.serverless.triggers.v1.ObjectStorageBucketSettings" as const,

  encode(message: ObjectStorageBucketSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(18).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectStorageBucketSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectStorageBucketSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectStorageBucketSettings {
    return {
      $type: ObjectStorageBucketSettings.$type,
      bucketId: isSet(object.bucketId) ? globalThis.String(object.bucketId) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: ObjectStorageBucketSettings): unknown {
    const obj: any = {};
    if (message.bucketId !== "") {
      obj.bucketId = message.bucketId;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectStorageBucketSettings>, I>>(base?: I): ObjectStorageBucketSettings {
    return ObjectStorageBucketSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ObjectStorageBucketSettings>, I>>(object: I): ObjectStorageBucketSettings {
    const message = createBaseObjectStorageBucketSettings();
    message.bucketId = object.bucketId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ObjectStorageBucketSettings.$type, ObjectStorageBucketSettings);

function createBaseMail(): Mail {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.Mail",
    email: "",
    batchSettings: undefined,
    attachmentsBucket: undefined,
    invokeFunction: undefined,
    invokeContainer: undefined,
  };
}

export const Mail = {
  $type: "yandex.cloud.serverless.triggers.v1.Mail" as const,

  encode(message: Mail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(message.batchSettings, writer.uint32(26).fork()).ldelim();
    }
    if (message.attachmentsBucket !== undefined) {
      ObjectStorageBucketSettings.encode(message.attachmentsBucket, writer.uint32(34).fork()).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(826).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.attachmentsBucket = ObjectStorageBucketSettings.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.invokeFunction = InvokeFunctionWithRetry.decode(reader, reader.uint32());
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.invokeContainer = InvokeContainerWithRetry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mail {
    return {
      $type: Mail.$type,
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      batchSettings: isSet(object.batchSettings) ? BatchSettings.fromJSON(object.batchSettings) : undefined,
      attachmentsBucket: isSet(object.attachmentsBucket)
        ? ObjectStorageBucketSettings.fromJSON(object.attachmentsBucket)
        : undefined,
      invokeFunction: isSet(object.invokeFunction)
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined,
      invokeContainer: isSet(object.invokeContainer)
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined,
    };
  },

  toJSON(message: Mail): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.batchSettings !== undefined) {
      obj.batchSettings = BatchSettings.toJSON(message.batchSettings);
    }
    if (message.attachmentsBucket !== undefined) {
      obj.attachmentsBucket = ObjectStorageBucketSettings.toJSON(message.attachmentsBucket);
    }
    if (message.invokeFunction !== undefined) {
      obj.invokeFunction = InvokeFunctionWithRetry.toJSON(message.invokeFunction);
    }
    if (message.invokeContainer !== undefined) {
      obj.invokeContainer = InvokeContainerWithRetry.toJSON(message.invokeContainer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Mail>, I>>(base?: I): Mail {
    return Mail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Mail>, I>>(object: I): Mail {
    const message = createBaseMail();
    message.email = object.email ?? "";
    message.batchSettings = (object.batchSettings !== undefined && object.batchSettings !== null)
      ? BatchSettings.fromPartial(object.batchSettings)
      : undefined;
    message.attachmentsBucket = (object.attachmentsBucket !== undefined && object.attachmentsBucket !== null)
      ? ObjectStorageBucketSettings.fromPartial(object.attachmentsBucket)
      : undefined;
    message.invokeFunction = (object.invokeFunction !== undefined && object.invokeFunction !== null)
      ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
      : undefined;
    message.invokeContainer = (object.invokeContainer !== undefined && object.invokeContainer !== null)
      ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mail.$type, Mail);

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
  const seconds = Math.trunc(date.getTime() / 1_000);
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
