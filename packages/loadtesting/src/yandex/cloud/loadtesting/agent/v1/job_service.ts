/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface Job {
  $type: "yandex.cloud.loadtesting.agent.v1.Job";
  id: string;
  config: string;
  ammo?: File | undefined;
  loggingLogGroupId: string;
  testData?: StorageObject | undefined;
  dataPayload: TestDataEntry[];
  artifactUploadSettings?: TestArtifactUploadSettings | undefined;
}

export interface File {
  $type: "yandex.cloud.loadtesting.agent.v1.File";
  name: string;
  content: Buffer;
}

export interface StorageObject {
  $type: "yandex.cloud.loadtesting.agent.v1.StorageObject";
  objectStorageBucket: string;
  objectStorageFilename: string;
}

export interface TestDataEntry {
  $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry";
  name: string;
  isTransient: boolean;
  storageObject?: StorageObject | undefined;
}

export interface TestArtifactUploadSettings {
  $type: "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings";
  outputBucket: string;
  outputName: string;
  isArchive: boolean;
  filterInclude: string[];
  filterExclude: string[];
}

export interface GetJobTransientFile {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile";
  jobId: string;
  name: string;
}

export interface GetJobRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest";
  computeInstanceId: string;
  agentInstanceId: string;
  jobId: string;
}

export interface ClaimJobStatusRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest";
  jobId: string;
  status: ClaimJobStatusRequest_JobStatus;
  error: string;
}

export enum ClaimJobStatusRequest_JobStatus {
  JOB_STATUS_UNSPECIFIED = 0,
  POST_PROCESS = 1,
  INITIATED = 2,
  PREPARING = 3,
  NOT_FOUND = 4,
  RUNNING = 5,
  FINISHING = 6,
  FINISHED = 7,
  STOPPED = 8,
  FAILED = 9,
  AUTOSTOPPED = 10,
  WAITING_FOR_A_COMMAND_TO_RUN = 11,
  UNRECOGNIZED = -1,
}

export function claimJobStatusRequest_JobStatusFromJSON(object: any): ClaimJobStatusRequest_JobStatus {
  switch (object) {
    case 0:
    case "JOB_STATUS_UNSPECIFIED":
      return ClaimJobStatusRequest_JobStatus.JOB_STATUS_UNSPECIFIED;
    case 1:
    case "POST_PROCESS":
      return ClaimJobStatusRequest_JobStatus.POST_PROCESS;
    case 2:
    case "INITIATED":
      return ClaimJobStatusRequest_JobStatus.INITIATED;
    case 3:
    case "PREPARING":
      return ClaimJobStatusRequest_JobStatus.PREPARING;
    case 4:
    case "NOT_FOUND":
      return ClaimJobStatusRequest_JobStatus.NOT_FOUND;
    case 5:
    case "RUNNING":
      return ClaimJobStatusRequest_JobStatus.RUNNING;
    case 6:
    case "FINISHING":
      return ClaimJobStatusRequest_JobStatus.FINISHING;
    case 7:
    case "FINISHED":
      return ClaimJobStatusRequest_JobStatus.FINISHED;
    case 8:
    case "STOPPED":
      return ClaimJobStatusRequest_JobStatus.STOPPED;
    case 9:
    case "FAILED":
      return ClaimJobStatusRequest_JobStatus.FAILED;
    case 10:
    case "AUTOSTOPPED":
      return ClaimJobStatusRequest_JobStatus.AUTOSTOPPED;
    case 11:
    case "WAITING_FOR_A_COMMAND_TO_RUN":
      return ClaimJobStatusRequest_JobStatus.WAITING_FOR_A_COMMAND_TO_RUN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimJobStatusRequest_JobStatus.UNRECOGNIZED;
  }
}

export function claimJobStatusRequest_JobStatusToJSON(object: ClaimJobStatusRequest_JobStatus): string {
  switch (object) {
    case ClaimJobStatusRequest_JobStatus.JOB_STATUS_UNSPECIFIED:
      return "JOB_STATUS_UNSPECIFIED";
    case ClaimJobStatusRequest_JobStatus.POST_PROCESS:
      return "POST_PROCESS";
    case ClaimJobStatusRequest_JobStatus.INITIATED:
      return "INITIATED";
    case ClaimJobStatusRequest_JobStatus.PREPARING:
      return "PREPARING";
    case ClaimJobStatusRequest_JobStatus.NOT_FOUND:
      return "NOT_FOUND";
    case ClaimJobStatusRequest_JobStatus.RUNNING:
      return "RUNNING";
    case ClaimJobStatusRequest_JobStatus.FINISHING:
      return "FINISHING";
    case ClaimJobStatusRequest_JobStatus.FINISHED:
      return "FINISHED";
    case ClaimJobStatusRequest_JobStatus.STOPPED:
      return "STOPPED";
    case ClaimJobStatusRequest_JobStatus.FAILED:
      return "FAILED";
    case ClaimJobStatusRequest_JobStatus.AUTOSTOPPED:
      return "AUTOSTOPPED";
    case ClaimJobStatusRequest_JobStatus.WAITING_FOR_A_COMMAND_TO_RUN:
      return "WAITING_FOR_A_COMMAND_TO_RUN";
    case ClaimJobStatusRequest_JobStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ClaimJobStatusResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse";
  code: number;
}

export interface JobSignalRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest";
  jobId: string;
}

export interface JobSignalResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse";
  signal: JobSignalResponse_Signal;
  /** seconds */
  waitDuration: number;
  /** seconds */
  runIn: number;
}

export enum JobSignalResponse_Signal {
  SIGNAL_UNSPECIFIED = 0,
  STOP = 1,
  WAIT = 2,
  RUN_IN = 3,
  UNRECOGNIZED = -1,
}

export function jobSignalResponse_SignalFromJSON(object: any): JobSignalResponse_Signal {
  switch (object) {
    case 0:
    case "SIGNAL_UNSPECIFIED":
      return JobSignalResponse_Signal.SIGNAL_UNSPECIFIED;
    case 1:
    case "STOP":
      return JobSignalResponse_Signal.STOP;
    case 2:
    case "WAIT":
      return JobSignalResponse_Signal.WAIT;
    case 3:
    case "RUN_IN":
      return JobSignalResponse_Signal.RUN_IN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobSignalResponse_Signal.UNRECOGNIZED;
  }
}

export function jobSignalResponse_SignalToJSON(object: JobSignalResponse_Signal): string {
  switch (object) {
    case JobSignalResponse_Signal.SIGNAL_UNSPECIFIED:
      return "SIGNAL_UNSPECIFIED";
    case JobSignalResponse_Signal.STOP:
      return "STOP";
    case JobSignalResponse_Signal.WAIT:
      return "WAIT";
    case JobSignalResponse_Signal.RUN_IN:
      return "RUN_IN";
    case JobSignalResponse_Signal.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseJob(): Job {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.Job",
    id: "",
    config: "",
    ammo: undefined,
    loggingLogGroupId: "",
    testData: undefined,
    dataPayload: [],
    artifactUploadSettings: undefined,
  };
}

export const Job = {
  $type: "yandex.cloud.loadtesting.agent.v1.Job" as const,

  encode(message: Job, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.config !== "") {
      writer.uint32(18).string(message.config);
    }
    if (message.ammo !== undefined) {
      File.encode(message.ammo, writer.uint32(26).fork()).ldelim();
    }
    if (message.loggingLogGroupId !== "") {
      writer.uint32(34).string(message.loggingLogGroupId);
    }
    if (message.testData !== undefined) {
      StorageObject.encode(message.testData, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.dataPayload) {
      TestDataEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.artifactUploadSettings !== undefined) {
      TestArtifactUploadSettings.encode(message.artifactUploadSettings, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Job {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJob();
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

          message.config = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ammo = File.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.loggingLogGroupId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.testData = StorageObject.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dataPayload.push(TestDataEntry.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.artifactUploadSettings = TestArtifactUploadSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Job {
    return {
      $type: Job.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      ammo: isSet(object.ammo) ? File.fromJSON(object.ammo) : undefined,
      loggingLogGroupId: isSet(object.loggingLogGroupId) ? globalThis.String(object.loggingLogGroupId) : "",
      testData: isSet(object.testData) ? StorageObject.fromJSON(object.testData) : undefined,
      dataPayload: globalThis.Array.isArray(object?.dataPayload)
        ? object.dataPayload.map((e: any) => TestDataEntry.fromJSON(e))
        : [],
      artifactUploadSettings: isSet(object.artifactUploadSettings)
        ? TestArtifactUploadSettings.fromJSON(object.artifactUploadSettings)
        : undefined,
    };
  },

  toJSON(message: Job): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.config !== "") {
      obj.config = message.config;
    }
    if (message.ammo !== undefined) {
      obj.ammo = File.toJSON(message.ammo);
    }
    if (message.loggingLogGroupId !== "") {
      obj.loggingLogGroupId = message.loggingLogGroupId;
    }
    if (message.testData !== undefined) {
      obj.testData = StorageObject.toJSON(message.testData);
    }
    if (message.dataPayload?.length) {
      obj.dataPayload = message.dataPayload.map((e) => TestDataEntry.toJSON(e));
    }
    if (message.artifactUploadSettings !== undefined) {
      obj.artifactUploadSettings = TestArtifactUploadSettings.toJSON(message.artifactUploadSettings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Job>, I>>(base?: I): Job {
    return Job.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Job>, I>>(object: I): Job {
    const message = createBaseJob();
    message.id = object.id ?? "";
    message.config = object.config ?? "";
    message.ammo = (object.ammo !== undefined && object.ammo !== null) ? File.fromPartial(object.ammo) : undefined;
    message.loggingLogGroupId = object.loggingLogGroupId ?? "";
    message.testData = (object.testData !== undefined && object.testData !== null)
      ? StorageObject.fromPartial(object.testData)
      : undefined;
    message.dataPayload = object.dataPayload?.map((e) => TestDataEntry.fromPartial(e)) || [];
    message.artifactUploadSettings =
      (object.artifactUploadSettings !== undefined && object.artifactUploadSettings !== null)
        ? TestArtifactUploadSettings.fromPartial(object.artifactUploadSettings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Job.$type, Job);

function createBaseFile(): File {
  return { $type: "yandex.cloud.loadtesting.agent.v1.File", name: "", content: Buffer.alloc(0) };
}

export const File = {
  $type: "yandex.cloud.loadtesting.agent.v1.File" as const,

  encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.content.length !== 0) {
      writer.uint32(18).bytes(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): File {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFile();
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

          message.content = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): File {
    return {
      $type: File.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : Buffer.alloc(0),
    };
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<File>, I>>(base?: I): File {
    return File.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<File>, I>>(object: I): File {
    const message = createBaseFile();
    message.name = object.name ?? "";
    message.content = object.content ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(File.$type, File);

function createBaseStorageObject(): StorageObject {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.StorageObject",
    objectStorageBucket: "",
    objectStorageFilename: "",
  };
}

export const StorageObject = {
  $type: "yandex.cloud.loadtesting.agent.v1.StorageObject" as const,

  encode(message: StorageObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectStorageBucket !== "") {
      writer.uint32(10).string(message.objectStorageBucket);
    }
    if (message.objectStorageFilename !== "") {
      writer.uint32(18).string(message.objectStorageFilename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.objectStorageBucket = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.objectStorageFilename = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StorageObject {
    return {
      $type: StorageObject.$type,
      objectStorageBucket: isSet(object.objectStorageBucket) ? globalThis.String(object.objectStorageBucket) : "",
      objectStorageFilename: isSet(object.objectStorageFilename) ? globalThis.String(object.objectStorageFilename) : "",
    };
  },

  toJSON(message: StorageObject): unknown {
    const obj: any = {};
    if (message.objectStorageBucket !== "") {
      obj.objectStorageBucket = message.objectStorageBucket;
    }
    if (message.objectStorageFilename !== "") {
      obj.objectStorageFilename = message.objectStorageFilename;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StorageObject>, I>>(base?: I): StorageObject {
    return StorageObject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StorageObject>, I>>(object: I): StorageObject {
    const message = createBaseStorageObject();
    message.objectStorageBucket = object.objectStorageBucket ?? "";
    message.objectStorageFilename = object.objectStorageFilename ?? "";
    return message;
  },
};

messageTypeRegistry.set(StorageObject.$type, StorageObject);

function createBaseTestDataEntry(): TestDataEntry {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry",
    name: "",
    isTransient: false,
    storageObject: undefined,
  };
}

export const TestDataEntry = {
  $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry" as const,

  encode(message: TestDataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.isTransient === true) {
      writer.uint32(16).bool(message.isTransient);
    }
    if (message.storageObject !== undefined) {
      StorageObject.encode(message.storageObject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestDataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestDataEntry();
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

          message.isTransient = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.storageObject = StorageObject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestDataEntry {
    return {
      $type: TestDataEntry.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      isTransient: isSet(object.isTransient) ? globalThis.Boolean(object.isTransient) : false,
      storageObject: isSet(object.storageObject) ? StorageObject.fromJSON(object.storageObject) : undefined,
    };
  },

  toJSON(message: TestDataEntry): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.isTransient === true) {
      obj.isTransient = message.isTransient;
    }
    if (message.storageObject !== undefined) {
      obj.storageObject = StorageObject.toJSON(message.storageObject);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestDataEntry>, I>>(base?: I): TestDataEntry {
    return TestDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestDataEntry>, I>>(object: I): TestDataEntry {
    const message = createBaseTestDataEntry();
    message.name = object.name ?? "";
    message.isTransient = object.isTransient ?? false;
    message.storageObject = (object.storageObject !== undefined && object.storageObject !== null)
      ? StorageObject.fromPartial(object.storageObject)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(TestDataEntry.$type, TestDataEntry);

function createBaseTestArtifactUploadSettings(): TestArtifactUploadSettings {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings",
    outputBucket: "",
    outputName: "",
    isArchive: false,
    filterInclude: [],
    filterExclude: [],
  };
}

export const TestArtifactUploadSettings = {
  $type: "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings" as const,

  encode(message: TestArtifactUploadSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outputBucket !== "") {
      writer.uint32(10).string(message.outputBucket);
    }
    if (message.outputName !== "") {
      writer.uint32(18).string(message.outputName);
    }
    if (message.isArchive === true) {
      writer.uint32(24).bool(message.isArchive);
    }
    for (const v of message.filterInclude) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.filterExclude) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestArtifactUploadSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestArtifactUploadSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outputBucket = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outputName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isArchive = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filterInclude.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.filterExclude.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestArtifactUploadSettings {
    return {
      $type: TestArtifactUploadSettings.$type,
      outputBucket: isSet(object.outputBucket) ? globalThis.String(object.outputBucket) : "",
      outputName: isSet(object.outputName) ? globalThis.String(object.outputName) : "",
      isArchive: isSet(object.isArchive) ? globalThis.Boolean(object.isArchive) : false,
      filterInclude: globalThis.Array.isArray(object?.filterInclude)
        ? object.filterInclude.map((e: any) => globalThis.String(e))
        : [],
      filterExclude: globalThis.Array.isArray(object?.filterExclude)
        ? object.filterExclude.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: TestArtifactUploadSettings): unknown {
    const obj: any = {};
    if (message.outputBucket !== "") {
      obj.outputBucket = message.outputBucket;
    }
    if (message.outputName !== "") {
      obj.outputName = message.outputName;
    }
    if (message.isArchive === true) {
      obj.isArchive = message.isArchive;
    }
    if (message.filterInclude?.length) {
      obj.filterInclude = message.filterInclude;
    }
    if (message.filterExclude?.length) {
      obj.filterExclude = message.filterExclude;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestArtifactUploadSettings>, I>>(base?: I): TestArtifactUploadSettings {
    return TestArtifactUploadSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestArtifactUploadSettings>, I>>(object: I): TestArtifactUploadSettings {
    const message = createBaseTestArtifactUploadSettings();
    message.outputBucket = object.outputBucket ?? "";
    message.outputName = object.outputName ?? "";
    message.isArchive = object.isArchive ?? false;
    message.filterInclude = object.filterInclude?.map((e) => e) || [];
    message.filterExclude = object.filterExclude?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(TestArtifactUploadSettings.$type, TestArtifactUploadSettings);

function createBaseGetJobTransientFile(): GetJobTransientFile {
  return { $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile", jobId: "", name: "" };
}

export const GetJobTransientFile = {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile" as const,

  encode(message: GetJobTransientFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobTransientFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobTransientFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): GetJobTransientFile {
    return {
      $type: GetJobTransientFile.$type,
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: GetJobTransientFile): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobTransientFile>, I>>(base?: I): GetJobTransientFile {
    return GetJobTransientFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobTransientFile>, I>>(object: I): GetJobTransientFile {
    const message = createBaseGetJobTransientFile();
    message.jobId = object.jobId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetJobTransientFile.$type, GetJobTransientFile);

function createBaseGetJobRequest(): GetJobRequest {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest",
    computeInstanceId: "",
    agentInstanceId: "",
    jobId: "",
  };
}

export const GetJobRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest" as const,

  encode(message: GetJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(18).string(message.agentInstanceId);
    }
    if (message.jobId !== "") {
      writer.uint32(26).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.agentInstanceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jobId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJobRequest {
    return {
      $type: GetJobRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      agentInstanceId: isSet(object.agentInstanceId) ? globalThis.String(object.agentInstanceId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
    };
  },

  toJSON(message: GetJobRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.agentInstanceId !== "") {
      obj.agentInstanceId = message.agentInstanceId;
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobRequest>, I>>(base?: I): GetJobRequest {
    return GetJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobRequest>, I>>(object: I): GetJobRequest {
    const message = createBaseGetJobRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.agentInstanceId = object.agentInstanceId ?? "";
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetJobRequest.$type, GetJobRequest);

function createBaseClaimJobStatusRequest(): ClaimJobStatusRequest {
  return { $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest", jobId: "", status: 0, error: "" };
}

export const ClaimJobStatusRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest" as const,

  encode(message: ClaimJobStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimJobStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimJobStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClaimJobStatusRequest {
    return {
      $type: ClaimJobStatusRequest.$type,
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      status: isSet(object.status) ? claimJobStatusRequest_JobStatusFromJSON(object.status) : 0,
      error: isSet(object.error) ? globalThis.String(object.error) : "",
    };
  },

  toJSON(message: ClaimJobStatusRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.status !== 0) {
      obj.status = claimJobStatusRequest_JobStatusToJSON(message.status);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClaimJobStatusRequest>, I>>(base?: I): ClaimJobStatusRequest {
    return ClaimJobStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClaimJobStatusRequest>, I>>(object: I): ClaimJobStatusRequest {
    const message = createBaseClaimJobStatusRequest();
    message.jobId = object.jobId ?? "";
    message.status = object.status ?? 0;
    message.error = object.error ?? "";
    return message;
  },
};

messageTypeRegistry.set(ClaimJobStatusRequest.$type, ClaimJobStatusRequest);

function createBaseClaimJobStatusResponse(): ClaimJobStatusResponse {
  return { $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse", code: 0 };
}

export const ClaimJobStatusResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse" as const,

  encode(message: ClaimJobStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int64(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimJobStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimJobStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClaimJobStatusResponse {
    return { $type: ClaimJobStatusResponse.$type, code: isSet(object.code) ? globalThis.Number(object.code) : 0 };
  },

  toJSON(message: ClaimJobStatusResponse): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClaimJobStatusResponse>, I>>(base?: I): ClaimJobStatusResponse {
    return ClaimJobStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClaimJobStatusResponse>, I>>(object: I): ClaimJobStatusResponse {
    const message = createBaseClaimJobStatusResponse();
    message.code = object.code ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ClaimJobStatusResponse.$type, ClaimJobStatusResponse);

function createBaseJobSignalRequest(): JobSignalRequest {
  return { $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest", jobId: "" };
}

export const JobSignalRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest" as const,

  encode(message: JobSignalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobSignalRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobSignalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JobSignalRequest {
    return { $type: JobSignalRequest.$type, jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "" };
  },

  toJSON(message: JobSignalRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JobSignalRequest>, I>>(base?: I): JobSignalRequest {
    return JobSignalRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JobSignalRequest>, I>>(object: I): JobSignalRequest {
    const message = createBaseJobSignalRequest();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(JobSignalRequest.$type, JobSignalRequest);

function createBaseJobSignalResponse(): JobSignalResponse {
  return { $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse", signal: 0, waitDuration: 0, runIn: 0 };
}

export const JobSignalResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse" as const,

  encode(message: JobSignalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signal !== 0) {
      writer.uint32(8).int32(message.signal);
    }
    if (message.waitDuration !== 0) {
      writer.uint32(17).double(message.waitDuration);
    }
    if (message.runIn !== 0) {
      writer.uint32(25).double(message.runIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobSignalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobSignalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.signal = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.waitDuration = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.runIn = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JobSignalResponse {
    return {
      $type: JobSignalResponse.$type,
      signal: isSet(object.signal) ? jobSignalResponse_SignalFromJSON(object.signal) : 0,
      waitDuration: isSet(object.waitDuration) ? globalThis.Number(object.waitDuration) : 0,
      runIn: isSet(object.runIn) ? globalThis.Number(object.runIn) : 0,
    };
  },

  toJSON(message: JobSignalResponse): unknown {
    const obj: any = {};
    if (message.signal !== 0) {
      obj.signal = jobSignalResponse_SignalToJSON(message.signal);
    }
    if (message.waitDuration !== 0) {
      obj.waitDuration = message.waitDuration;
    }
    if (message.runIn !== 0) {
      obj.runIn = message.runIn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JobSignalResponse>, I>>(base?: I): JobSignalResponse {
    return JobSignalResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JobSignalResponse>, I>>(object: I): JobSignalResponse {
    const message = createBaseJobSignalResponse();
    message.signal = object.signal ?? 0;
    message.waitDuration = object.waitDuration ?? 0;
    message.runIn = object.runIn ?? 0;
    return message;
  },
};

messageTypeRegistry.set(JobSignalResponse.$type, JobSignalResponse);

export type JobServiceService = typeof JobServiceService;
export const JobServiceService = {
  /** Claims status for the specified job. */
  claimStatus: {
    path: "/yandex.cloud.loadtesting.agent.v1.JobService/ClaimStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ClaimJobStatusRequest) => Buffer.from(ClaimJobStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ClaimJobStatusRequest.decode(value),
    responseSerialize: (value: ClaimJobStatusResponse) => Buffer.from(ClaimJobStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ClaimJobStatusResponse.decode(value),
  },
  /** Returns the job for the specified agent. */
  get: {
    path: "/yandex.cloud.loadtesting.agent.v1.JobService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetJobRequest) => Buffer.from(GetJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetJobRequest.decode(value),
    responseSerialize: (value: Job) => Buffer.from(Job.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Job.decode(value),
  },
  /** Returns the signal for the specified job. */
  getSignal: {
    path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetSignal",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: JobSignalRequest) => Buffer.from(JobSignalRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => JobSignalRequest.decode(value),
    responseSerialize: (value: JobSignalResponse) => Buffer.from(JobSignalResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => JobSignalResponse.decode(value),
  },
  getTransientFile: {
    path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetTransientFile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetJobTransientFile) => Buffer.from(GetJobTransientFile.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetJobTransientFile.decode(value),
    responseSerialize: (value: File) => Buffer.from(File.encode(value).finish()),
    responseDeserialize: (value: Buffer) => File.decode(value),
  },
} as const;

export interface JobServiceServer extends UntypedServiceImplementation {
  /** Claims status for the specified job. */
  claimStatus: handleUnaryCall<ClaimJobStatusRequest, ClaimJobStatusResponse>;
  /** Returns the job for the specified agent. */
  get: handleUnaryCall<GetJobRequest, Job>;
  /** Returns the signal for the specified job. */
  getSignal: handleUnaryCall<JobSignalRequest, JobSignalResponse>;
  getTransientFile: handleUnaryCall<GetJobTransientFile, File>;
}

export interface JobServiceClient extends Client {
  /** Claims status for the specified job. */
  claimStatus(
    request: ClaimJobStatusRequest,
    callback: (error: ServiceError | null, response: ClaimJobStatusResponse) => void,
  ): ClientUnaryCall;
  claimStatus(
    request: ClaimJobStatusRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ClaimJobStatusResponse) => void,
  ): ClientUnaryCall;
  claimStatus(
    request: ClaimJobStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ClaimJobStatusResponse) => void,
  ): ClientUnaryCall;
  /** Returns the job for the specified agent. */
  get(request: GetJobRequest, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
  get(
    request: GetJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Job) => void,
  ): ClientUnaryCall;
  get(
    request: GetJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Job) => void,
  ): ClientUnaryCall;
  /** Returns the signal for the specified job. */
  getSignal(
    request: JobSignalRequest,
    callback: (error: ServiceError | null, response: JobSignalResponse) => void,
  ): ClientUnaryCall;
  getSignal(
    request: JobSignalRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: JobSignalResponse) => void,
  ): ClientUnaryCall;
  getSignal(
    request: JobSignalRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: JobSignalResponse) => void,
  ): ClientUnaryCall;
  getTransientFile(
    request: GetJobTransientFile,
    callback: (error: ServiceError | null, response: File) => void,
  ): ClientUnaryCall;
  getTransientFile(
    request: GetJobTransientFile,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: File) => void,
  ): ClientUnaryCall;
  getTransientFile(
    request: GetJobTransientFile,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: File) => void,
  ): ClientUnaryCall;
}

export const JobServiceClient = makeGenericClientConstructor(
  JobServiceService,
  "yandex.cloud.loadtesting.agent.v1.JobService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): JobServiceClient;
  service: typeof JobServiceService;
  serviceName: string;
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

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
