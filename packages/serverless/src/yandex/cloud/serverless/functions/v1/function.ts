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

export const protobufPackage = "yandex.cloud.serverless.functions.v1";

/** A serverless function. For details about the concept, see [Functions](/docs/functions/concepts/function). */
export interface Function {
  $type: "yandex.cloud.serverless.functions.v1.Function";
  /** ID of the function. Generated at creation time. */
  id: string;
  /** ID of the folder that the function belongs to. */
  folderId: string;
  /** Creation timestamp for the function. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the function. The name is unique within the folder. */
  name: string;
  /** Description of the function. */
  description: string;
  /** Function labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** ID of the log group for the function. */
  logGroupId: string;
  /** URL that needs to be requested to invoke the function. */
  httpInvokeUrl: string;
  /** Status of the function. */
  status: Function_Status;
}

export enum Function_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Function is being created. */
  CREATING = 1,
  /** ACTIVE - Function is ready to be invoked. */
  ACTIVE = 2,
  /** DELETING - Function is being deleted. */
  DELETING = 3,
  /** ERROR - Function failed. */
  ERROR = 4,
  UNRECOGNIZED = -1,
}

export function function_StatusFromJSON(object: any): Function_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Function_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Function_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Function_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Function_Status.DELETING;
    case 4:
    case "ERROR":
      return Function_Status.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Function_Status.UNRECOGNIZED;
  }
}

export function function_StatusToJSON(object: Function_Status): string {
  switch (object) {
    case Function_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Function_Status.CREATING:
      return "CREATING";
    case Function_Status.ACTIVE:
      return "ACTIVE";
    case Function_Status.DELETING:
      return "DELETING";
    case Function_Status.ERROR:
      return "ERROR";
    case Function_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Function_LabelsEntry {
  $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry";
  key: string;
  value: string;
}

/** Version of a function. For details about the concept, see [Function versions](/docs/functions/concepts/function#version). */
export interface Version {
  $type: "yandex.cloud.serverless.functions.v1.Version";
  /** ID of the version. */
  id: string;
  /** ID of the function that the version belongs to. */
  functionId: string;
  /** Description of the version. */
  description: string;
  /** Creation timestamp for the version. */
  createdAt?:
    | Date
    | undefined;
  /**
   * ID of the runtime environment for the function.
   *
   * Supported environments and their identifiers are listed in the [Runtime environments](/docs/functions/concepts/runtime).
   */
  runtime: string;
  /**
   * Entrypoint for the function: the name of the function to be called as the handler.
   *
   * Specified in the format `<function file name>.<handler name>`, for example, `index.myFunction`.
   */
  entrypoint: string;
  /** Resources allocated to the version. */
  resources?:
    | Resources
    | undefined;
  /**
   * Timeout for the execution of the version.
   *
   * If the timeout is exceeded, Cloud Functions responds with a 504 HTTP code.
   */
  executionTimeout?:
    | Duration
    | undefined;
  /** ID of the service account associated with the version. */
  serviceAccountId: string;
  /** Final size of the deployment package after unpacking. */
  imageSize: number;
  /** Status of the version. */
  status: Version_Status;
  /** Version tags. For details, see [Version tag](/docs/functions/concepts/function#tag). */
  tags: string[];
  /** ID of the log group for the version. */
  logGroupId: string;
  /** Environment settings for the version. */
  environment: { [key: string]: string };
  /** Network access. If specified the version will be attached to specified network/subnet(s). */
  connectivity?:
    | Connectivity
    | undefined;
  /** Additional service accounts to be used by the version. */
  namedServiceAccounts: { [key: string]: string };
  /** Yandex Lockbox secrets to be used by the version. */
  secrets: Secret[];
  /** Options for logging from the function */
  logOptions?:
    | LogOptions
    | undefined;
  /** S3 mounts to be used by the version. */
  storageMounts: StorageMount[];
  /** Config for asynchronous invocations of the version */
  asyncInvocationConfig?: AsyncInvocationConfig | undefined;
}

export enum Version_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Version is being created. */
  CREATING = 1,
  /** ACTIVE - Version is ready to use. */
  ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function version_StatusFromJSON(object: any): Version_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Version_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Version_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Version_Status.ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Version_Status.UNRECOGNIZED;
  }
}

export function version_StatusToJSON(object: Version_Status): string {
  switch (object) {
    case Version_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Version_Status.CREATING:
      return "CREATING";
    case Version_Status.ACTIVE:
      return "ACTIVE";
    case Version_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Version_EnvironmentEntry {
  $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry";
  key: string;
  value: string;
}

export interface Version_NamedServiceAccountsEntry {
  $type: "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry";
  key: string;
  value: string;
}

/** Resources allocated to a version. */
export interface Resources {
  $type: "yandex.cloud.serverless.functions.v1.Resources";
  /** Amount of memory available to the version, specified in bytes, multiple of 128MB. */
  memory: number;
}

/** Version deployment package. */
export interface Package {
  $type: "yandex.cloud.serverless.functions.v1.Package";
  /** Name of the bucket that stores the code for the version. */
  bucketName: string;
  /** Name of the object in the bucket that stores the code for the version. */
  objectName: string;
  /** SHA256 hash of the version deployment package. */
  sha256: string;
}

/** Version connectivity specification. */
export interface Connectivity {
  $type: "yandex.cloud.serverless.functions.v1.Connectivity";
  /**
   * Network the version will have access to.
   * It's essential to specify network with subnets in all availability zones.
   */
  networkId: string;
  /**
   * Complete list of subnets (from the same network) the version can be attached to.
   * It's essential to specify at least one subnet for each availability zones.
   */
  subnetId: string[];
}

export interface ScalingPolicy {
  $type: "yandex.cloud.serverless.functions.v1.ScalingPolicy";
  /** ID of the function that the scaling policy belongs to. */
  functionId: string;
  /** Tag of the version that the scaling policy belongs to. For details, see [Version tag](/docs/functions/concepts/function#tag). */
  tag: string;
  /** Creation timestamp for the scaling policy */
  createdAt?:
    | Date
    | undefined;
  /** Modification timestamp for the scaling policy */
  modifiedAt?:
    | Date
    | undefined;
  /**
   * Minimum guaranteed provisioned instances count for all zones in total.
   * Billed separately.
   */
  provisionedInstancesCount: number;
  /**
   * Upper limit for instance count in each zone.
   * 0 means no limit.
   */
  zoneInstancesLimit: number;
  /**
   * Upper limit of requests count in each zone.
   * 0 means no limit.
   */
  zoneRequestsLimit: number;
}

/** Secret for serverless function. */
export interface Secret {
  $type: "yandex.cloud.serverless.functions.v1.Secret";
  /** ID of Yandex Lockbox secret. */
  id: string;
  /** ID of Yandex Lockbox version. */
  versionId: string;
  /** Key in secret's payload, which value to be delivered into function environment. */
  key: string;
  /** environment variable in which secret's value to be delivered. */
  environmentVariable?: string | undefined;
}

export interface LogOptions {
  $type: "yandex.cloud.serverless.functions.v1.LogOptions";
  /** Is logging from function disabled. */
  disabled: boolean;
  /** Entry should be written to log group resolved by ID. */
  logGroupId?:
    | string
    | undefined;
  /** Entry should be written to default log group for specified folder. */
  folderId?:
    | string
    | undefined;
  /**
   * Minimum log entry level.
   *
   * See [LogLevel.Level] for details.
   */
  minLevel: LogLevel_Level;
}

export interface StorageMount {
  $type: "yandex.cloud.serverless.functions.v1.StorageMount";
  /** S3 bucket name for mounting. */
  bucketId: string;
  /** S3 bucket prefix for mounting. */
  prefix: string;
  /** Mount point directory name (not path) for mounting. */
  mountPointName: string;
  /** Is mount read only. */
  readOnly: boolean;
}

export interface AsyncInvocationConfig {
  $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig";
  /** Number of retries of version invocation */
  retriesCount: number;
  /** Target for successful result of the version's invocation */
  successTarget?:
    | AsyncInvocationConfig_ResponseTarget
    | undefined;
  /** Target for unsuccessful result, if all retries failed */
  failureTarget?:
    | AsyncInvocationConfig_ResponseTarget
    | undefined;
  /** Service account which can invoke version */
  serviceAccountId: string;
}

/** Target to which a result of an invocation will be sent */
export interface AsyncInvocationConfig_ResponseTarget {
  $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig.ResponseTarget";
  /** Target to ignore a result */
  emptyTarget?:
    | EmptyTarget
    | undefined;
  /** Target to send a result to ymq */
  ymqTarget?: YMQTarget | undefined;
}

export interface YMQTarget {
  $type: "yandex.cloud.serverless.functions.v1.YMQTarget";
  /** Queue ARN */
  queueArn: string;
  /** Service account which has write permission on the queue. */
  serviceAccountId: string;
}

export interface EmptyTarget {
  $type: "yandex.cloud.serverless.functions.v1.EmptyTarget";
}

function createBaseFunction(): Function {
  return {
    $type: "yandex.cloud.serverless.functions.v1.Function",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    logGroupId: "",
    httpInvokeUrl: "",
    status: 0,
  };
}

export const Function = {
  $type: "yandex.cloud.serverless.functions.v1.Function" as const,

  encode(message: Function, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Function_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.logGroupId !== "") {
      writer.uint32(58).string(message.logGroupId);
    }
    if (message.httpInvokeUrl !== "") {
      writer.uint32(66).string(message.httpInvokeUrl);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Function {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunction();
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

          const entry6 = Function_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.httpInvokeUrl = reader.string();
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

  fromJSON(object: any): Function {
    return {
      $type: Function.$type,
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
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      httpInvokeUrl: isSet(object.httpInvokeUrl) ? globalThis.String(object.httpInvokeUrl) : "",
      status: isSet(object.status) ? function_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Function): unknown {
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
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.httpInvokeUrl !== "") {
      obj.httpInvokeUrl = message.httpInvokeUrl;
    }
    if (message.status !== 0) {
      obj.status = function_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Function>, I>>(base?: I): Function {
    return Function.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Function>, I>>(object: I): Function {
    const message = createBaseFunction();
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
    message.logGroupId = object.logGroupId ?? "";
    message.httpInvokeUrl = object.httpInvokeUrl ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Function.$type, Function);

function createBaseFunction_LabelsEntry(): Function_LabelsEntry {
  return { $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry", key: "", value: "" };
}

export const Function_LabelsEntry = {
  $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry" as const,

  encode(message: Function_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Function_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunction_LabelsEntry();
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

  fromJSON(object: any): Function_LabelsEntry {
    return {
      $type: Function_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Function_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Function_LabelsEntry>, I>>(base?: I): Function_LabelsEntry {
    return Function_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Function_LabelsEntry>, I>>(object: I): Function_LabelsEntry {
    const message = createBaseFunction_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Function_LabelsEntry.$type, Function_LabelsEntry);

function createBaseVersion(): Version {
  return {
    $type: "yandex.cloud.serverless.functions.v1.Version",
    id: "",
    functionId: "",
    description: "",
    createdAt: undefined,
    runtime: "",
    entrypoint: "",
    resources: undefined,
    executionTimeout: undefined,
    serviceAccountId: "",
    imageSize: 0,
    status: 0,
    tags: [],
    logGroupId: "",
    environment: {},
    connectivity: undefined,
    namedServiceAccounts: {},
    secrets: [],
    logOptions: undefined,
    storageMounts: [],
    asyncInvocationConfig: undefined,
  };
}

export const Version = {
  $type: "yandex.cloud.serverless.functions.v1.Version" as const,

  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.functionId !== "") {
      writer.uint32(18).string(message.functionId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.runtime !== "") {
      writer.uint32(50).string(message.runtime);
    }
    if (message.entrypoint !== "") {
      writer.uint32(58).string(message.entrypoint);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(66).fork()).ldelim();
    }
    if (message.executionTimeout !== undefined) {
      Duration.encode(message.executionTimeout, writer.uint32(74).fork()).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(82).string(message.serviceAccountId);
    }
    if (message.imageSize !== 0) {
      writer.uint32(96).int64(message.imageSize);
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    for (const v of message.tags) {
      writer.uint32(114).string(v!);
    }
    if (message.logGroupId !== "") {
      writer.uint32(122).string(message.logGroupId);
    }
    Object.entries(message.environment).forEach(([key, value]) => {
      Version_EnvironmentEntry.encode({
        $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry",
        key: key as any,
        value,
      }, writer.uint32(130).fork()).ldelim();
    });
    if (message.connectivity !== undefined) {
      Connectivity.encode(message.connectivity, writer.uint32(138).fork()).ldelim();
    }
    Object.entries(message.namedServiceAccounts).forEach(([key, value]) => {
      Version_NamedServiceAccountsEntry.encode({
        $type: "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry",
        key: key as any,
        value,
      }, writer.uint32(146).fork()).ldelim();
    });
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.storageMounts) {
      StorageMount.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.asyncInvocationConfig !== undefined) {
      AsyncInvocationConfig.encode(message.asyncInvocationConfig, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
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

          message.functionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.runtime = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.entrypoint = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.executionTimeout = Duration.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.imageSize = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          const entry16 = Version_EnvironmentEntry.decode(reader, reader.uint32());
          if (entry16.value !== undefined) {
            message.environment[entry16.key] = entry16.value;
          }
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.connectivity = Connectivity.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          const entry18 = Version_NamedServiceAccountsEntry.decode(reader, reader.uint32());
          if (entry18.value !== undefined) {
            message.namedServiceAccounts[entry18.key] = entry18.value;
          }
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.secrets.push(Secret.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.storageMounts.push(StorageMount.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.asyncInvocationConfig = AsyncInvocationConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      $type: Version.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      entrypoint: isSet(object.entrypoint) ? globalThis.String(object.entrypoint) : "",
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      executionTimeout: isSet(object.executionTimeout) ? Duration.fromJSON(object.executionTimeout) : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      imageSize: isSet(object.imageSize) ? globalThis.Number(object.imageSize) : 0,
      status: isSet(object.status) ? version_StatusFromJSON(object.status) : 0,
      tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e: any) => globalThis.String(e)) : [],
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      environment: isObject(object.environment)
        ? Object.entries(object.environment).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      connectivity: isSet(object.connectivity) ? Connectivity.fromJSON(object.connectivity) : undefined,
      namedServiceAccounts: isObject(object.namedServiceAccounts)
        ? Object.entries(object.namedServiceAccounts).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      secrets: globalThis.Array.isArray(object?.secrets) ? object.secrets.map((e: any) => Secret.fromJSON(e)) : [],
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
      storageMounts: globalThis.Array.isArray(object?.storageMounts)
        ? object.storageMounts.map((e: any) => StorageMount.fromJSON(e))
        : [],
      asyncInvocationConfig: isSet(object.asyncInvocationConfig)
        ? AsyncInvocationConfig.fromJSON(object.asyncInvocationConfig)
        : undefined,
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    if (message.entrypoint !== "") {
      obj.entrypoint = message.entrypoint;
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.executionTimeout !== undefined) {
      obj.executionTimeout = Duration.toJSON(message.executionTimeout);
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.imageSize !== 0) {
      obj.imageSize = Math.round(message.imageSize);
    }
    if (message.status !== 0) {
      obj.status = version_StatusToJSON(message.status);
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.environment) {
      const entries = Object.entries(message.environment);
      if (entries.length > 0) {
        obj.environment = {};
        entries.forEach(([k, v]) => {
          obj.environment[k] = v;
        });
      }
    }
    if (message.connectivity !== undefined) {
      obj.connectivity = Connectivity.toJSON(message.connectivity);
    }
    if (message.namedServiceAccounts) {
      const entries = Object.entries(message.namedServiceAccounts);
      if (entries.length > 0) {
        obj.namedServiceAccounts = {};
        entries.forEach(([k, v]) => {
          obj.namedServiceAccounts[k] = v;
        });
      }
    }
    if (message.secrets?.length) {
      obj.secrets = message.secrets.map((e) => Secret.toJSON(e));
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    if (message.storageMounts?.length) {
      obj.storageMounts = message.storageMounts.map((e) => StorageMount.toJSON(e));
    }
    if (message.asyncInvocationConfig !== undefined) {
      obj.asyncInvocationConfig = AsyncInvocationConfig.toJSON(message.asyncInvocationConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Version>, I>>(base?: I): Version {
    return Version.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
    const message = createBaseVersion();
    message.id = object.id ?? "";
    message.functionId = object.functionId ?? "";
    message.description = object.description ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.runtime = object.runtime ?? "";
    message.entrypoint = object.entrypoint ?? "";
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.executionTimeout = (object.executionTimeout !== undefined && object.executionTimeout !== null)
      ? Duration.fromPartial(object.executionTimeout)
      : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.imageSize = object.imageSize ?? 0;
    message.status = object.status ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    message.logGroupId = object.logGroupId ?? "";
    message.environment = Object.entries(object.environment ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.connectivity = (object.connectivity !== undefined && object.connectivity !== null)
      ? Connectivity.fromPartial(object.connectivity)
      : undefined;
    message.namedServiceAccounts = Object.entries(object.namedServiceAccounts ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    message.storageMounts = object.storageMounts?.map((e) => StorageMount.fromPartial(e)) || [];
    message.asyncInvocationConfig =
      (object.asyncInvocationConfig !== undefined && object.asyncInvocationConfig !== null)
        ? AsyncInvocationConfig.fromPartial(object.asyncInvocationConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Version.$type, Version);

function createBaseVersion_EnvironmentEntry(): Version_EnvironmentEntry {
  return { $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry", key: "", value: "" };
}

export const Version_EnvironmentEntry = {
  $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry" as const,

  encode(message: Version_EnvironmentEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version_EnvironmentEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion_EnvironmentEntry();
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

  fromJSON(object: any): Version_EnvironmentEntry {
    return {
      $type: Version_EnvironmentEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Version_EnvironmentEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Version_EnvironmentEntry>, I>>(base?: I): Version_EnvironmentEntry {
    return Version_EnvironmentEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Version_EnvironmentEntry>, I>>(object: I): Version_EnvironmentEntry {
    const message = createBaseVersion_EnvironmentEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Version_EnvironmentEntry.$type, Version_EnvironmentEntry);

function createBaseVersion_NamedServiceAccountsEntry(): Version_NamedServiceAccountsEntry {
  return { $type: "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry", key: "", value: "" };
}

export const Version_NamedServiceAccountsEntry = {
  $type: "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry" as const,

  encode(message: Version_NamedServiceAccountsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version_NamedServiceAccountsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion_NamedServiceAccountsEntry();
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

  fromJSON(object: any): Version_NamedServiceAccountsEntry {
    return {
      $type: Version_NamedServiceAccountsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Version_NamedServiceAccountsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Version_NamedServiceAccountsEntry>, I>>(
    base?: I,
  ): Version_NamedServiceAccountsEntry {
    return Version_NamedServiceAccountsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Version_NamedServiceAccountsEntry>, I>>(
    object: I,
  ): Version_NamedServiceAccountsEntry {
    const message = createBaseVersion_NamedServiceAccountsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Version_NamedServiceAccountsEntry.$type, Version_NamedServiceAccountsEntry);

function createBaseResources(): Resources {
  return { $type: "yandex.cloud.serverless.functions.v1.Resources", memory: 0 };
}

export const Resources = {
  $type: "yandex.cloud.serverless.functions.v1.Resources" as const,

  encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memory !== 0) {
      writer.uint32(8).int64(message.memory);
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
          if (tag !== 8) {
            break;
          }

          message.memory = longToNumber(reader.int64() as Long);
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
    return { $type: Resources.$type, memory: isSet(object.memory) ? globalThis.Number(object.memory) : 0 };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.memory !== 0) {
      obj.memory = Math.round(message.memory);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resources>, I>>(base?: I): Resources {
    return Resources.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
    const message = createBaseResources();
    message.memory = object.memory ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

function createBasePackage(): Package {
  return { $type: "yandex.cloud.serverless.functions.v1.Package", bucketName: "", objectName: "", sha256: "" };
}

export const Package = {
  $type: "yandex.cloud.serverless.functions.v1.Package" as const,

  encode(message: Package, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(18).string(message.objectName);
    }
    if (message.sha256 !== "") {
      writer.uint32(26).string(message.sha256);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Package {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucketName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.objectName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sha256 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Package {
    return {
      $type: Package.$type,
      bucketName: isSet(object.bucketName) ? globalThis.String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? globalThis.String(object.objectName) : "",
      sha256: isSet(object.sha256) ? globalThis.String(object.sha256) : "",
    };
  },

  toJSON(message: Package): unknown {
    const obj: any = {};
    if (message.bucketName !== "") {
      obj.bucketName = message.bucketName;
    }
    if (message.objectName !== "") {
      obj.objectName = message.objectName;
    }
    if (message.sha256 !== "") {
      obj.sha256 = message.sha256;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Package>, I>>(base?: I): Package {
    return Package.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Package>, I>>(object: I): Package {
    const message = createBasePackage();
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.sha256 = object.sha256 ?? "";
    return message;
  },
};

messageTypeRegistry.set(Package.$type, Package);

function createBaseConnectivity(): Connectivity {
  return { $type: "yandex.cloud.serverless.functions.v1.Connectivity", networkId: "", subnetId: [] };
}

export const Connectivity = {
  $type: "yandex.cloud.serverless.functions.v1.Connectivity" as const,

  encode(message: Connectivity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    for (const v of message.subnetId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connectivity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnetId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Connectivity {
    return {
      $type: Connectivity.$type,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      subnetId: globalThis.Array.isArray(object?.subnetId) ? object.subnetId.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Connectivity): unknown {
    const obj: any = {};
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.subnetId?.length) {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Connectivity>, I>>(base?: I): Connectivity {
    return Connectivity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Connectivity>, I>>(object: I): Connectivity {
    const message = createBaseConnectivity();
    message.networkId = object.networkId ?? "";
    message.subnetId = object.subnetId?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Connectivity.$type, Connectivity);

function createBaseScalingPolicy(): ScalingPolicy {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ScalingPolicy",
    functionId: "",
    tag: "",
    createdAt: undefined,
    modifiedAt: undefined,
    provisionedInstancesCount: 0,
    zoneInstancesLimit: 0,
    zoneRequestsLimit: 0,
  };
}

export const ScalingPolicy = {
  $type: "yandex.cloud.serverless.functions.v1.ScalingPolicy" as const,

  encode(message: ScalingPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.provisionedInstancesCount !== 0) {
      writer.uint32(48).int64(message.provisionedInstancesCount);
    }
    if (message.zoneInstancesLimit !== 0) {
      writer.uint32(56).int64(message.zoneInstancesLimit);
    }
    if (message.zoneRequestsLimit !== 0) {
      writer.uint32(64).int64(message.zoneRequestsLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalingPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalingPolicy();
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

          message.tag = reader.string();
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

          message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.provisionedInstancesCount = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.zoneInstancesLimit = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.zoneRequestsLimit = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScalingPolicy {
    return {
      $type: ScalingPolicy.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      modifiedAt: isSet(object.modifiedAt) ? fromJsonTimestamp(object.modifiedAt) : undefined,
      provisionedInstancesCount: isSet(object.provisionedInstancesCount)
        ? globalThis.Number(object.provisionedInstancesCount)
        : 0,
      zoneInstancesLimit: isSet(object.zoneInstancesLimit) ? globalThis.Number(object.zoneInstancesLimit) : 0,
      zoneRequestsLimit: isSet(object.zoneRequestsLimit) ? globalThis.Number(object.zoneRequestsLimit) : 0,
    };
  },

  toJSON(message: ScalingPolicy): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.modifiedAt !== undefined) {
      obj.modifiedAt = message.modifiedAt.toISOString();
    }
    if (message.provisionedInstancesCount !== 0) {
      obj.provisionedInstancesCount = Math.round(message.provisionedInstancesCount);
    }
    if (message.zoneInstancesLimit !== 0) {
      obj.zoneInstancesLimit = Math.round(message.zoneInstancesLimit);
    }
    if (message.zoneRequestsLimit !== 0) {
      obj.zoneRequestsLimit = Math.round(message.zoneRequestsLimit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScalingPolicy>, I>>(base?: I): ScalingPolicy {
    return ScalingPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScalingPolicy>, I>>(object: I): ScalingPolicy {
    const message = createBaseScalingPolicy();
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.modifiedAt = object.modifiedAt ?? undefined;
    message.provisionedInstancesCount = object.provisionedInstancesCount ?? 0;
    message.zoneInstancesLimit = object.zoneInstancesLimit ?? 0;
    message.zoneRequestsLimit = object.zoneRequestsLimit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ScalingPolicy.$type, ScalingPolicy);

function createBaseSecret(): Secret {
  return {
    $type: "yandex.cloud.serverless.functions.v1.Secret",
    id: "",
    versionId: "",
    key: "",
    environmentVariable: undefined,
  };
}

export const Secret = {
  $type: "yandex.cloud.serverless.functions.v1.Secret" as const,

  encode(message: Secret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.environmentVariable !== undefined) {
      writer.uint32(34).string(message.environmentVariable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecret();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.environmentVariable = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Secret {
    return {
      $type: Secret.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      environmentVariable: isSet(object.environmentVariable)
        ? globalThis.String(object.environmentVariable)
        : undefined,
    };
  },

  toJSON(message: Secret): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.environmentVariable !== undefined) {
      obj.environmentVariable = message.environmentVariable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Secret>, I>>(base?: I): Secret {
    return Secret.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
    const message = createBaseSecret();
    message.id = object.id ?? "";
    message.versionId = object.versionId ?? "";
    message.key = object.key ?? "";
    message.environmentVariable = object.environmentVariable ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Secret.$type, Secret);

function createBaseLogOptions(): LogOptions {
  return {
    $type: "yandex.cloud.serverless.functions.v1.LogOptions",
    disabled: false,
    logGroupId: undefined,
    folderId: undefined,
    minLevel: 0,
  };
}

export const LogOptions = {
  $type: "yandex.cloud.serverless.functions.v1.LogOptions" as const,

  encode(message: LogOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disabled === true) {
      writer.uint32(8).bool(message.disabled);
    }
    if (message.logGroupId !== undefined) {
      writer.uint32(18).string(message.logGroupId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(26).string(message.folderId);
    }
    if (message.minLevel !== 0) {
      writer.uint32(32).int32(message.minLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.disabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.minLevel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogOptions {
    return {
      $type: LogOptions.$type,
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      minLevel: isSet(object.minLevel) ? logLevel_LevelFromJSON(object.minLevel) : 0,
    };
  },

  toJSON(message: LogOptions): unknown {
    const obj: any = {};
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    if (message.logGroupId !== undefined) {
      obj.logGroupId = message.logGroupId;
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.minLevel !== 0) {
      obj.minLevel = logLevel_LevelToJSON(message.minLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogOptions>, I>>(base?: I): LogOptions {
    return LogOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(object: I): LogOptions {
    const message = createBaseLogOptions();
    message.disabled = object.disabled ?? false;
    message.logGroupId = object.logGroupId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    message.minLevel = object.minLevel ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LogOptions.$type, LogOptions);

function createBaseStorageMount(): StorageMount {
  return {
    $type: "yandex.cloud.serverless.functions.v1.StorageMount",
    bucketId: "",
    prefix: "",
    mountPointName: "",
    readOnly: false,
  };
}

export const StorageMount = {
  $type: "yandex.cloud.serverless.functions.v1.StorageMount" as const,

  encode(message: StorageMount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    if (message.mountPointName !== "") {
      writer.uint32(26).string(message.mountPointName);
    }
    if (message.readOnly === true) {
      writer.uint32(32).bool(message.readOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageMount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageMount();
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

          message.prefix = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mountPointName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.readOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StorageMount {
    return {
      $type: StorageMount.$type,
      bucketId: isSet(object.bucketId) ? globalThis.String(object.bucketId) : "",
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : "",
      mountPointName: isSet(object.mountPointName) ? globalThis.String(object.mountPointName) : "",
      readOnly: isSet(object.readOnly) ? globalThis.Boolean(object.readOnly) : false,
    };
  },

  toJSON(message: StorageMount): unknown {
    const obj: any = {};
    if (message.bucketId !== "") {
      obj.bucketId = message.bucketId;
    }
    if (message.prefix !== "") {
      obj.prefix = message.prefix;
    }
    if (message.mountPointName !== "") {
      obj.mountPointName = message.mountPointName;
    }
    if (message.readOnly === true) {
      obj.readOnly = message.readOnly;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StorageMount>, I>>(base?: I): StorageMount {
    return StorageMount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StorageMount>, I>>(object: I): StorageMount {
    const message = createBaseStorageMount();
    message.bucketId = object.bucketId ?? "";
    message.prefix = object.prefix ?? "";
    message.mountPointName = object.mountPointName ?? "";
    message.readOnly = object.readOnly ?? false;
    return message;
  },
};

messageTypeRegistry.set(StorageMount.$type, StorageMount);

function createBaseAsyncInvocationConfig(): AsyncInvocationConfig {
  return {
    $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig",
    retriesCount: 0,
    successTarget: undefined,
    failureTarget: undefined,
    serviceAccountId: "",
  };
}

export const AsyncInvocationConfig = {
  $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig" as const,

  encode(message: AsyncInvocationConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retriesCount !== 0) {
      writer.uint32(8).int64(message.retriesCount);
    }
    if (message.successTarget !== undefined) {
      AsyncInvocationConfig_ResponseTarget.encode(message.successTarget, writer.uint32(18).fork()).ldelim();
    }
    if (message.failureTarget !== undefined) {
      AsyncInvocationConfig_ResponseTarget.encode(message.failureTarget, writer.uint32(26).fork()).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(34).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsyncInvocationConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsyncInvocationConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.retriesCount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.successTarget = AsyncInvocationConfig_ResponseTarget.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.failureTarget = AsyncInvocationConfig_ResponseTarget.decode(reader, reader.uint32());
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

  fromJSON(object: any): AsyncInvocationConfig {
    return {
      $type: AsyncInvocationConfig.$type,
      retriesCount: isSet(object.retriesCount) ? globalThis.Number(object.retriesCount) : 0,
      successTarget: isSet(object.successTarget)
        ? AsyncInvocationConfig_ResponseTarget.fromJSON(object.successTarget)
        : undefined,
      failureTarget: isSet(object.failureTarget)
        ? AsyncInvocationConfig_ResponseTarget.fromJSON(object.failureTarget)
        : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: AsyncInvocationConfig): unknown {
    const obj: any = {};
    if (message.retriesCount !== 0) {
      obj.retriesCount = Math.round(message.retriesCount);
    }
    if (message.successTarget !== undefined) {
      obj.successTarget = AsyncInvocationConfig_ResponseTarget.toJSON(message.successTarget);
    }
    if (message.failureTarget !== undefined) {
      obj.failureTarget = AsyncInvocationConfig_ResponseTarget.toJSON(message.failureTarget);
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsyncInvocationConfig>, I>>(base?: I): AsyncInvocationConfig {
    return AsyncInvocationConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsyncInvocationConfig>, I>>(object: I): AsyncInvocationConfig {
    const message = createBaseAsyncInvocationConfig();
    message.retriesCount = object.retriesCount ?? 0;
    message.successTarget = (object.successTarget !== undefined && object.successTarget !== null)
      ? AsyncInvocationConfig_ResponseTarget.fromPartial(object.successTarget)
      : undefined;
    message.failureTarget = (object.failureTarget !== undefined && object.failureTarget !== null)
      ? AsyncInvocationConfig_ResponseTarget.fromPartial(object.failureTarget)
      : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AsyncInvocationConfig.$type, AsyncInvocationConfig);

function createBaseAsyncInvocationConfig_ResponseTarget(): AsyncInvocationConfig_ResponseTarget {
  return {
    $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig.ResponseTarget",
    emptyTarget: undefined,
    ymqTarget: undefined,
  };
}

export const AsyncInvocationConfig_ResponseTarget = {
  $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig.ResponseTarget" as const,

  encode(message: AsyncInvocationConfig_ResponseTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emptyTarget !== undefined) {
      EmptyTarget.encode(message.emptyTarget, writer.uint32(10).fork()).ldelim();
    }
    if (message.ymqTarget !== undefined) {
      YMQTarget.encode(message.ymqTarget, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsyncInvocationConfig_ResponseTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsyncInvocationConfig_ResponseTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.emptyTarget = EmptyTarget.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ymqTarget = YMQTarget.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsyncInvocationConfig_ResponseTarget {
    return {
      $type: AsyncInvocationConfig_ResponseTarget.$type,
      emptyTarget: isSet(object.emptyTarget) ? EmptyTarget.fromJSON(object.emptyTarget) : undefined,
      ymqTarget: isSet(object.ymqTarget) ? YMQTarget.fromJSON(object.ymqTarget) : undefined,
    };
  },

  toJSON(message: AsyncInvocationConfig_ResponseTarget): unknown {
    const obj: any = {};
    if (message.emptyTarget !== undefined) {
      obj.emptyTarget = EmptyTarget.toJSON(message.emptyTarget);
    }
    if (message.ymqTarget !== undefined) {
      obj.ymqTarget = YMQTarget.toJSON(message.ymqTarget);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AsyncInvocationConfig_ResponseTarget>, I>>(
    base?: I,
  ): AsyncInvocationConfig_ResponseTarget {
    return AsyncInvocationConfig_ResponseTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AsyncInvocationConfig_ResponseTarget>, I>>(
    object: I,
  ): AsyncInvocationConfig_ResponseTarget {
    const message = createBaseAsyncInvocationConfig_ResponseTarget();
    message.emptyTarget = (object.emptyTarget !== undefined && object.emptyTarget !== null)
      ? EmptyTarget.fromPartial(object.emptyTarget)
      : undefined;
    message.ymqTarget = (object.ymqTarget !== undefined && object.ymqTarget !== null)
      ? YMQTarget.fromPartial(object.ymqTarget)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AsyncInvocationConfig_ResponseTarget.$type, AsyncInvocationConfig_ResponseTarget);

function createBaseYMQTarget(): YMQTarget {
  return { $type: "yandex.cloud.serverless.functions.v1.YMQTarget", queueArn: "", serviceAccountId: "" };
}

export const YMQTarget = {
  $type: "yandex.cloud.serverless.functions.v1.YMQTarget" as const,

  encode(message: YMQTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queueArn !== "") {
      writer.uint32(10).string(message.queueArn);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(18).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): YMQTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYMQTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.queueArn = reader.string();
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

  fromJSON(object: any): YMQTarget {
    return {
      $type: YMQTarget.$type,
      queueArn: isSet(object.queueArn) ? globalThis.String(object.queueArn) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: YMQTarget): unknown {
    const obj: any = {};
    if (message.queueArn !== "") {
      obj.queueArn = message.queueArn;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<YMQTarget>, I>>(base?: I): YMQTarget {
    return YMQTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<YMQTarget>, I>>(object: I): YMQTarget {
    const message = createBaseYMQTarget();
    message.queueArn = object.queueArn ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(YMQTarget.$type, YMQTarget);

function createBaseEmptyTarget(): EmptyTarget {
  return { $type: "yandex.cloud.serverless.functions.v1.EmptyTarget" };
}

export const EmptyTarget = {
  $type: "yandex.cloud.serverless.functions.v1.EmptyTarget" as const,

  encode(_: EmptyTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmptyTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): EmptyTarget {
    return { $type: EmptyTarget.$type };
  },

  toJSON(_: EmptyTarget): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<EmptyTarget>, I>>(base?: I): EmptyTarget {
    return EmptyTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EmptyTarget>, I>>(_: I): EmptyTarget {
    const message = createBaseEmptyTarget();
    return message;
  },
};

messageTypeRegistry.set(EmptyTarget.$type, EmptyTarget);

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
