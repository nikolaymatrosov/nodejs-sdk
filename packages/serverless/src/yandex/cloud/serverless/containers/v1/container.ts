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

export const protobufPackage = "yandex.cloud.serverless.containers.v1";

export interface Container {
  $type: "yandex.cloud.serverless.containers.v1.Container";
  /** ID of the container. Generated at creation time. */
  id: string;
  /** ID of the folder that the container belongs to. */
  folderId: string;
  /** Creation timestamp for the container. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the container. The name is unique within the folder. */
  name: string;
  /** Description of the container. */
  description: string;
  /** Container labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** URL that needs to be requested to call the container. */
  url: string;
  /** Status of the container. */
  status: Container_Status;
}

export enum Container_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Container is being created. */
  CREATING = 1,
  /** ACTIVE - Container is ready for use. */
  ACTIVE = 2,
  /** DELETING - Container is being deleted. */
  DELETING = 3,
  /** ERROR - Container failed. The only allowed action is delete. */
  ERROR = 4,
  UNRECOGNIZED = -1,
}

export function container_StatusFromJSON(object: any): Container_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Container_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Container_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Container_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Container_Status.DELETING;
    case 4:
    case "ERROR":
      return Container_Status.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Container_Status.UNRECOGNIZED;
  }
}

export function container_StatusToJSON(object: Container_Status): string {
  switch (object) {
    case Container_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Container_Status.CREATING:
      return "CREATING";
    case Container_Status.ACTIVE:
      return "ACTIVE";
    case Container_Status.DELETING:
      return "DELETING";
    case Container_Status.ERROR:
      return "ERROR";
    case Container_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Container_LabelsEntry {
  $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry";
  key: string;
  value: string;
}

export interface Revision {
  $type: "yandex.cloud.serverless.containers.v1.Revision";
  /** ID of the revision. */
  id: string;
  /** ID of the container that the revision belongs to. */
  containerId: string;
  /** Description of the revision. */
  description: string;
  /** Creation timestamp for the revision. */
  createdAt?:
    | Date
    | undefined;
  /** Image configuration for the revision. */
  image?:
    | Image
    | undefined;
  /** Resources allocated to the revision. */
  resources?:
    | Resources
    | undefined;
  /**
   * Timeout for the execution of the revision.
   *
   * If the timeout is exceeded, Serverless Containers responds with a 504 HTTP code.
   */
  executionTimeout?:
    | Duration
    | undefined;
  /** The number of concurrent requests allowed per container instance. */
  concurrency: number;
  /** ID of the service account associated with the revision. */
  serviceAccountId: string;
  /** Status of the revision. */
  status: Revision_Status;
  /** Yandex Lockbox secrets to be used by the revision. */
  secrets: Secret[];
  /** Network access. If specified the revision will be attached to specified network/subnet(s). */
  connectivity?:
    | Connectivity
    | undefined;
  /**
   * Policy for provisioning instances of the revision.
   *
   * The policy is only applied when the revision is ACTIVE.
   */
  provisionPolicy?:
    | ProvisionPolicy
    | undefined;
  /** Policy for scaling instances of the revision. */
  scalingPolicy?:
    | ScalingPolicy
    | undefined;
  /** Options for logging from the container. */
  logOptions?:
    | LogOptions
    | undefined;
  /** S3 mounts to be used by the version. */
  storageMounts: StorageMount[];
}

export enum Revision_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Revision is being created. */
  CREATING = 1,
  /** ACTIVE - Revision is currently used by the container. */
  ACTIVE = 2,
  /** OBSOLETE - Revision is not used by the container. May be deleted later. */
  OBSOLETE = 3,
  UNRECOGNIZED = -1,
}

export function revision_StatusFromJSON(object: any): Revision_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Revision_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Revision_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Revision_Status.ACTIVE;
    case 3:
    case "OBSOLETE":
      return Revision_Status.OBSOLETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Revision_Status.UNRECOGNIZED;
  }
}

export function revision_StatusToJSON(object: Revision_Status): string {
  switch (object) {
    case Revision_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Revision_Status.CREATING:
      return "CREATING";
    case Revision_Status.ACTIVE:
      return "ACTIVE";
    case Revision_Status.OBSOLETE:
      return "OBSOLETE";
    case Revision_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Revision image specification. */
export interface Image {
  $type: "yandex.cloud.serverless.containers.v1.Image";
  /** Image URL, that is used by the revision. */
  imageUrl: string;
  /** Digest of the image. Calculated at creation time. */
  imageDigest: string;
  /** Override for the image's ENTRYPOINT. */
  command?:
    | Command
    | undefined;
  /** Override for the image's CMD. */
  args?:
    | Args
    | undefined;
  /** Additional environment for the container. */
  environment: { [key: string]: string };
  /** Override for the image's WORKDIR. */
  workingDir: string;
}

export interface Image_EnvironmentEntry {
  $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry";
  key: string;
  value: string;
}

export interface Command {
  $type: "yandex.cloud.serverless.containers.v1.Command";
  /**
   * Command that will override ENTRYPOINT of an image.
   *
   * Commands will be executed as is. The runtime will not substitute environment
   * variables or execute shell commands. If one wants to do that, they should
   * invoke shell interpreter with an appropriate shell script.
   */
  command: string[];
}

export interface Args {
  $type: "yandex.cloud.serverless.containers.v1.Args";
  /**
   * Arguments that will override CMD of an image.
   *
   * Arguments will be passed as is. The runtime will not substitute environment
   * variables or execute shell commands. If one wants to do that, they should
   * invoke shell interpreter with an appropriate shell script.
   */
  args: string[];
}

/** Resources allocated to a revision. */
export interface Resources {
  $type: "yandex.cloud.serverless.containers.v1.Resources";
  /** Amount of memory available to the revision, specified in bytes, multiple of 128MB. */
  memory: number;
  /** Number of cores available to the revision. */
  cores: number;
  /**
   * Specifies baseline performance for a core in percent, multiple of 5%.
   * Should be 100% for cores > 1.
   */
  coreFraction: number;
}

export interface ProvisionPolicy {
  $type: "yandex.cloud.serverless.containers.v1.ProvisionPolicy";
  /**
   * Minimum number of guaranteed provisioned container instances for all zones
   * in total.
   */
  minInstances: number;
}

/** Secret that is available to the container at run time. */
export interface Secret {
  $type: "yandex.cloud.serverless.containers.v1.Secret";
  /** ID of Yandex Lockbox secret. */
  id: string;
  /** ID of Yandex Lockbox secret. */
  versionId: string;
  /** Key in secret's payload, which value to be delivered into container environment. */
  key: string;
  /** Environment variable in which secret's value is delivered. */
  environmentVariable?: string | undefined;
}

/** Revision connectivity specification. */
export interface Connectivity {
  $type: "yandex.cloud.serverless.containers.v1.Connectivity";
  /** Network the revision will have access to. */
  networkId: string;
  /**
   * The list of subnets (from the same network) the revision can be attached to.
   *
   * Deprecated, it is sufficient to specify only network_id, without the list of subnet_ids.
   */
  subnetIds: string[];
}

export interface LogOptions {
  $type: "yandex.cloud.serverless.containers.v1.LogOptions";
  /** Is logging from container disabled. */
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

export interface ScalingPolicy {
  $type: "yandex.cloud.serverless.containers.v1.ScalingPolicy";
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

export interface StorageMount {
  $type: "yandex.cloud.serverless.containers.v1.StorageMount";
  /** S3 bucket name for mounting. */
  bucketId: string;
  /** S3 bucket prefix for mounting. */
  prefix: string;
  /** Is mount read only. */
  readOnly: boolean;
  /** Mount point path inside the container for mounting. */
  mountPointPath: string;
}

function createBaseContainer(): Container {
  return {
    $type: "yandex.cloud.serverless.containers.v1.Container",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    url: "",
    status: 0,
  };
}

export const Container = {
  $type: "yandex.cloud.serverless.containers.v1.Container" as const,

  encode(message: Container, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Container_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.url !== "") {
      writer.uint32(66).string(message.url);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Container {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainer();
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

          const entry6 = Container_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.url = reader.string();
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

  fromJSON(object: any): Container {
    return {
      $type: Container.$type,
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
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      status: isSet(object.status) ? container_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Container): unknown {
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
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.status !== 0) {
      obj.status = container_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Container>, I>>(base?: I): Container {
    return Container.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Container>, I>>(object: I): Container {
    const message = createBaseContainer();
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
    message.url = object.url ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Container.$type, Container);

function createBaseContainer_LabelsEntry(): Container_LabelsEntry {
  return { $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry", key: "", value: "" };
}

export const Container_LabelsEntry = {
  $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry" as const,

  encode(message: Container_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Container_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainer_LabelsEntry();
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

  fromJSON(object: any): Container_LabelsEntry {
    return {
      $type: Container_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Container_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Container_LabelsEntry>, I>>(base?: I): Container_LabelsEntry {
    return Container_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Container_LabelsEntry>, I>>(object: I): Container_LabelsEntry {
    const message = createBaseContainer_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Container_LabelsEntry.$type, Container_LabelsEntry);

function createBaseRevision(): Revision {
  return {
    $type: "yandex.cloud.serverless.containers.v1.Revision",
    id: "",
    containerId: "",
    description: "",
    createdAt: undefined,
    image: undefined,
    resources: undefined,
    executionTimeout: undefined,
    concurrency: 0,
    serviceAccountId: "",
    status: 0,
    secrets: [],
    connectivity: undefined,
    provisionPolicy: undefined,
    scalingPolicy: undefined,
    logOptions: undefined,
    storageMounts: [],
  };
}

export const Revision = {
  $type: "yandex.cloud.serverless.containers.v1.Revision" as const,

  encode(message: Revision, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.containerId !== "") {
      writer.uint32(18).string(message.containerId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.image !== undefined) {
      Image.encode(message.image, writer.uint32(42).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(50).fork()).ldelim();
    }
    if (message.executionTimeout !== undefined) {
      Duration.encode(message.executionTimeout, writer.uint32(58).fork()).ldelim();
    }
    if (message.concurrency !== 0) {
      writer.uint32(64).int64(message.concurrency);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(message.connectivity, writer.uint32(98).fork()).ldelim();
    }
    if (message.provisionPolicy !== undefined) {
      ProvisionPolicy.encode(message.provisionPolicy, writer.uint32(106).fork()).ldelim();
    }
    if (message.scalingPolicy !== undefined) {
      ScalingPolicy.encode(message.scalingPolicy, writer.uint32(114).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.storageMounts) {
      StorageMount.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Revision {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevision();
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

          message.containerId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.image = Image.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.executionTimeout = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.concurrency = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.secrets.push(Secret.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.connectivity = Connectivity.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.provisionPolicy = ProvisionPolicy.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.scalingPolicy = ScalingPolicy.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.storageMounts.push(StorageMount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Revision {
    return {
      $type: Revision.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      containerId: isSet(object.containerId) ? globalThis.String(object.containerId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      image: isSet(object.image) ? Image.fromJSON(object.image) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      executionTimeout: isSet(object.executionTimeout) ? Duration.fromJSON(object.executionTimeout) : undefined,
      concurrency: isSet(object.concurrency) ? globalThis.Number(object.concurrency) : 0,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      status: isSet(object.status) ? revision_StatusFromJSON(object.status) : 0,
      secrets: globalThis.Array.isArray(object?.secrets) ? object.secrets.map((e: any) => Secret.fromJSON(e)) : [],
      connectivity: isSet(object.connectivity) ? Connectivity.fromJSON(object.connectivity) : undefined,
      provisionPolicy: isSet(object.provisionPolicy) ? ProvisionPolicy.fromJSON(object.provisionPolicy) : undefined,
      scalingPolicy: isSet(object.scalingPolicy) ? ScalingPolicy.fromJSON(object.scalingPolicy) : undefined,
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
      storageMounts: globalThis.Array.isArray(object?.storageMounts)
        ? object.storageMounts.map((e: any) => StorageMount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Revision): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.containerId !== "") {
      obj.containerId = message.containerId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.image !== undefined) {
      obj.image = Image.toJSON(message.image);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.executionTimeout !== undefined) {
      obj.executionTimeout = Duration.toJSON(message.executionTimeout);
    }
    if (message.concurrency !== 0) {
      obj.concurrency = Math.round(message.concurrency);
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.status !== 0) {
      obj.status = revision_StatusToJSON(message.status);
    }
    if (message.secrets?.length) {
      obj.secrets = message.secrets.map((e) => Secret.toJSON(e));
    }
    if (message.connectivity !== undefined) {
      obj.connectivity = Connectivity.toJSON(message.connectivity);
    }
    if (message.provisionPolicy !== undefined) {
      obj.provisionPolicy = ProvisionPolicy.toJSON(message.provisionPolicy);
    }
    if (message.scalingPolicy !== undefined) {
      obj.scalingPolicy = ScalingPolicy.toJSON(message.scalingPolicy);
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    if (message.storageMounts?.length) {
      obj.storageMounts = message.storageMounts.map((e) => StorageMount.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Revision>, I>>(base?: I): Revision {
    return Revision.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Revision>, I>>(object: I): Revision {
    const message = createBaseRevision();
    message.id = object.id ?? "";
    message.containerId = object.containerId ?? "";
    message.description = object.description ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.image = (object.image !== undefined && object.image !== null) ? Image.fromPartial(object.image) : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.executionTimeout = (object.executionTimeout !== undefined && object.executionTimeout !== null)
      ? Duration.fromPartial(object.executionTimeout)
      : undefined;
    message.concurrency = object.concurrency ?? 0;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.status = object.status ?? 0;
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.connectivity = (object.connectivity !== undefined && object.connectivity !== null)
      ? Connectivity.fromPartial(object.connectivity)
      : undefined;
    message.provisionPolicy = (object.provisionPolicy !== undefined && object.provisionPolicy !== null)
      ? ProvisionPolicy.fromPartial(object.provisionPolicy)
      : undefined;
    message.scalingPolicy = (object.scalingPolicy !== undefined && object.scalingPolicy !== null)
      ? ScalingPolicy.fromPartial(object.scalingPolicy)
      : undefined;
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    message.storageMounts = object.storageMounts?.map((e) => StorageMount.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Revision.$type, Revision);

function createBaseImage(): Image {
  return {
    $type: "yandex.cloud.serverless.containers.v1.Image",
    imageUrl: "",
    imageDigest: "",
    command: undefined,
    args: undefined,
    environment: {},
    workingDir: "",
  };
}

export const Image = {
  $type: "yandex.cloud.serverless.containers.v1.Image" as const,

  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageUrl !== "") {
      writer.uint32(10).string(message.imageUrl);
    }
    if (message.imageDigest !== "") {
      writer.uint32(18).string(message.imageDigest);
    }
    if (message.command !== undefined) {
      Command.encode(message.command, writer.uint32(26).fork()).ldelim();
    }
    if (message.args !== undefined) {
      Args.encode(message.args, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.environment).forEach(([key, value]) => {
      Image_EnvironmentEntry.encode({
        $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.workingDir !== "") {
      writer.uint32(50).string(message.workingDir);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.imageUrl = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.imageDigest = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.command = Command.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.args = Args.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = Image_EnvironmentEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.environment[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.workingDir = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Image {
    return {
      $type: Image.$type,
      imageUrl: isSet(object.imageUrl) ? globalThis.String(object.imageUrl) : "",
      imageDigest: isSet(object.imageDigest) ? globalThis.String(object.imageDigest) : "",
      command: isSet(object.command) ? Command.fromJSON(object.command) : undefined,
      args: isSet(object.args) ? Args.fromJSON(object.args) : undefined,
      environment: isObject(object.environment)
        ? Object.entries(object.environment).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      workingDir: isSet(object.workingDir) ? globalThis.String(object.workingDir) : "",
    };
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    if (message.imageUrl !== "") {
      obj.imageUrl = message.imageUrl;
    }
    if (message.imageDigest !== "") {
      obj.imageDigest = message.imageDigest;
    }
    if (message.command !== undefined) {
      obj.command = Command.toJSON(message.command);
    }
    if (message.args !== undefined) {
      obj.args = Args.toJSON(message.args);
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
    if (message.workingDir !== "") {
      obj.workingDir = message.workingDir;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Image>, I>>(base?: I): Image {
    return Image.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
    const message = createBaseImage();
    message.imageUrl = object.imageUrl ?? "";
    message.imageDigest = object.imageDigest ?? "";
    message.command = (object.command !== undefined && object.command !== null)
      ? Command.fromPartial(object.command)
      : undefined;
    message.args = (object.args !== undefined && object.args !== null) ? Args.fromPartial(object.args) : undefined;
    message.environment = Object.entries(object.environment ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.workingDir = object.workingDir ?? "";
    return message;
  },
};

messageTypeRegistry.set(Image.$type, Image);

function createBaseImage_EnvironmentEntry(): Image_EnvironmentEntry {
  return { $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry", key: "", value: "" };
}

export const Image_EnvironmentEntry = {
  $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry" as const,

  encode(message: Image_EnvironmentEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image_EnvironmentEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImage_EnvironmentEntry();
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

  fromJSON(object: any): Image_EnvironmentEntry {
    return {
      $type: Image_EnvironmentEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Image_EnvironmentEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Image_EnvironmentEntry>, I>>(base?: I): Image_EnvironmentEntry {
    return Image_EnvironmentEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Image_EnvironmentEntry>, I>>(object: I): Image_EnvironmentEntry {
    const message = createBaseImage_EnvironmentEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Image_EnvironmentEntry.$type, Image_EnvironmentEntry);

function createBaseCommand(): Command {
  return { $type: "yandex.cloud.serverless.containers.v1.Command", command: [] };
}

export const Command = {
  $type: "yandex.cloud.serverless.containers.v1.Command" as const,

  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.command) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.command.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Command {
    return {
      $type: Command.$type,
      command: globalThis.Array.isArray(object?.command) ? object.command.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    if (message.command?.length) {
      obj.command = message.command;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command {
    return Command.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    message.command = object.command?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Command.$type, Command);

function createBaseArgs(): Args {
  return { $type: "yandex.cloud.serverless.containers.v1.Args", args: [] };
}

export const Args = {
  $type: "yandex.cloud.serverless.containers.v1.Args" as const,

  encode(message: Args, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Args {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.args.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Args {
    return {
      $type: Args.$type,
      args: globalThis.Array.isArray(object?.args) ? object.args.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Args): unknown {
    const obj: any = {};
    if (message.args?.length) {
      obj.args = message.args;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Args>, I>>(base?: I): Args {
    return Args.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Args>, I>>(object: I): Args {
    const message = createBaseArgs();
    message.args = object.args?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Args.$type, Args);

function createBaseResources(): Resources {
  return { $type: "yandex.cloud.serverless.containers.v1.Resources", memory: 0, cores: 0, coreFraction: 0 };
}

export const Resources = {
  $type: "yandex.cloud.serverless.containers.v1.Resources" as const,

  encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memory !== 0) {
      writer.uint32(8).int64(message.memory);
    }
    if (message.cores !== 0) {
      writer.uint32(16).int64(message.cores);
    }
    if (message.coreFraction !== 0) {
      writer.uint32(24).int64(message.coreFraction);
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
        case 2:
          if (tag !== 16) {
            break;
          }

          message.cores = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.coreFraction = longToNumber(reader.int64() as Long);
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
      memory: isSet(object.memory) ? globalThis.Number(object.memory) : 0,
      cores: isSet(object.cores) ? globalThis.Number(object.cores) : 0,
      coreFraction: isSet(object.coreFraction) ? globalThis.Number(object.coreFraction) : 0,
    };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.memory !== 0) {
      obj.memory = Math.round(message.memory);
    }
    if (message.cores !== 0) {
      obj.cores = Math.round(message.cores);
    }
    if (message.coreFraction !== 0) {
      obj.coreFraction = Math.round(message.coreFraction);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resources>, I>>(base?: I): Resources {
    return Resources.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
    const message = createBaseResources();
    message.memory = object.memory ?? 0;
    message.cores = object.cores ?? 0;
    message.coreFraction = object.coreFraction ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

function createBaseProvisionPolicy(): ProvisionPolicy {
  return { $type: "yandex.cloud.serverless.containers.v1.ProvisionPolicy", minInstances: 0 };
}

export const ProvisionPolicy = {
  $type: "yandex.cloud.serverless.containers.v1.ProvisionPolicy" as const,

  encode(message: ProvisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minInstances !== 0) {
      writer.uint32(8).int64(message.minInstances);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProvisionPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.minInstances = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProvisionPolicy {
    return {
      $type: ProvisionPolicy.$type,
      minInstances: isSet(object.minInstances) ? globalThis.Number(object.minInstances) : 0,
    };
  },

  toJSON(message: ProvisionPolicy): unknown {
    const obj: any = {};
    if (message.minInstances !== 0) {
      obj.minInstances = Math.round(message.minInstances);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProvisionPolicy>, I>>(base?: I): ProvisionPolicy {
    return ProvisionPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProvisionPolicy>, I>>(object: I): ProvisionPolicy {
    const message = createBaseProvisionPolicy();
    message.minInstances = object.minInstances ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ProvisionPolicy.$type, ProvisionPolicy);

function createBaseSecret(): Secret {
  return {
    $type: "yandex.cloud.serverless.containers.v1.Secret",
    id: "",
    versionId: "",
    key: "",
    environmentVariable: undefined,
  };
}

export const Secret = {
  $type: "yandex.cloud.serverless.containers.v1.Secret" as const,

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

function createBaseConnectivity(): Connectivity {
  return { $type: "yandex.cloud.serverless.containers.v1.Connectivity", networkId: "", subnetIds: [] };
}

export const Connectivity = {
  $type: "yandex.cloud.serverless.containers.v1.Connectivity" as const,

  encode(message: Connectivity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    for (const v of message.subnetIds) {
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

          message.subnetIds.push(reader.string());
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
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Connectivity): unknown {
    const obj: any = {};
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Connectivity>, I>>(base?: I): Connectivity {
    return Connectivity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Connectivity>, I>>(object: I): Connectivity {
    const message = createBaseConnectivity();
    message.networkId = object.networkId ?? "";
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Connectivity.$type, Connectivity);

function createBaseLogOptions(): LogOptions {
  return {
    $type: "yandex.cloud.serverless.containers.v1.LogOptions",
    disabled: false,
    logGroupId: undefined,
    folderId: undefined,
    minLevel: 0,
  };
}

export const LogOptions = {
  $type: "yandex.cloud.serverless.containers.v1.LogOptions" as const,

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

function createBaseScalingPolicy(): ScalingPolicy {
  return { $type: "yandex.cloud.serverless.containers.v1.ScalingPolicy", zoneInstancesLimit: 0, zoneRequestsLimit: 0 };
}

export const ScalingPolicy = {
  $type: "yandex.cloud.serverless.containers.v1.ScalingPolicy" as const,

  encode(message: ScalingPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneInstancesLimit !== 0) {
      writer.uint32(8).int64(message.zoneInstancesLimit);
    }
    if (message.zoneRequestsLimit !== 0) {
      writer.uint32(16).int64(message.zoneRequestsLimit);
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
          if (tag !== 8) {
            break;
          }

          message.zoneInstancesLimit = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
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
      zoneInstancesLimit: isSet(object.zoneInstancesLimit) ? globalThis.Number(object.zoneInstancesLimit) : 0,
      zoneRequestsLimit: isSet(object.zoneRequestsLimit) ? globalThis.Number(object.zoneRequestsLimit) : 0,
    };
  },

  toJSON(message: ScalingPolicy): unknown {
    const obj: any = {};
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
    message.zoneInstancesLimit = object.zoneInstancesLimit ?? 0;
    message.zoneRequestsLimit = object.zoneRequestsLimit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ScalingPolicy.$type, ScalingPolicy);

function createBaseStorageMount(): StorageMount {
  return {
    $type: "yandex.cloud.serverless.containers.v1.StorageMount",
    bucketId: "",
    prefix: "",
    readOnly: false,
    mountPointPath: "",
  };
}

export const StorageMount = {
  $type: "yandex.cloud.serverless.containers.v1.StorageMount" as const,

  encode(message: StorageMount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    if (message.readOnly === true) {
      writer.uint32(32).bool(message.readOnly);
    }
    if (message.mountPointPath !== "") {
      writer.uint32(42).string(message.mountPointPath);
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
        case 4:
          if (tag !== 32) {
            break;
          }

          message.readOnly = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.mountPointPath = reader.string();
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
      readOnly: isSet(object.readOnly) ? globalThis.Boolean(object.readOnly) : false,
      mountPointPath: isSet(object.mountPointPath) ? globalThis.String(object.mountPointPath) : "",
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
    if (message.readOnly === true) {
      obj.readOnly = message.readOnly;
    }
    if (message.mountPointPath !== "") {
      obj.mountPointPath = message.mountPointPath;
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
    message.readOnly = object.readOnly ?? false;
    message.mountPointPath = object.mountPointPath ?? "";
    return message;
  },
};

messageTypeRegistry.set(StorageMount.$type, StorageMount);

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
