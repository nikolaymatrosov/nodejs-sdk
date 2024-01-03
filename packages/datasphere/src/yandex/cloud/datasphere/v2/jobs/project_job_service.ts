/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientReadableStream,
  handleServerStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Empty } from "@yandex-cloud/core/dist/generated/google/protobuf/empty";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { File, Job, JobParameters, JobResult, StorageFile } from "./jobs";

export const protobufPackage = "yandex.cloud.datasphere.v2.jobs";

export enum StandardStream {
  STANDARD_STREAM_UNSPECIFIED = 0,
  /** OUT - Stdout. */
  OUT = 1,
  /** ERR - Stderr. */
  ERR = 2,
  UNRECOGNIZED = -1,
}

export function standardStreamFromJSON(object: any): StandardStream {
  switch (object) {
    case 0:
    case "STANDARD_STREAM_UNSPECIFIED":
      return StandardStream.STANDARD_STREAM_UNSPECIFIED;
    case 1:
    case "OUT":
      return StandardStream.OUT;
    case 2:
    case "ERR":
      return StandardStream.ERR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StandardStream.UNRECOGNIZED;
  }
}

export function standardStreamToJSON(object: StandardStream): string {
  switch (object) {
    case StandardStream.STANDARD_STREAM_UNSPECIFIED:
      return "STANDARD_STREAM_UNSPECIFIED";
    case StandardStream.OUT:
      return "OUT";
    case StandardStream.ERR:
      return "ERR";
    case StandardStream.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CreateProjectJobRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.CreateProjectJobRequest";
  /** ID of the project. */
  projectId: string;
  /** Parameters of the job. */
  jobParameters?:
    | JobParameters
    | undefined;
  /** Config of the job. */
  config: string;
  /** Name of the job. */
  name: string;
  /** Description of the job. */
  desc: string;
  /** Job data TTL. */
  dataTtl?: Duration | undefined;
}

export interface CreateProjectJobMetadata {
  $type: "yandex.cloud.datasphere.v2.jobs.CreateProjectJobMetadata";
  /** ID of the project. */
  projectId: string;
}

export interface CreateProjectJobResponse {
  $type: "yandex.cloud.datasphere.v2.jobs.CreateProjectJobResponse";
  /** ID of the job. */
  jobId: string;
  /** Files to upload with their presigned URLs for upload. */
  uploadFiles: StorageFile[];
}

export interface ExecuteProjectJobRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.ExecuteProjectJobRequest";
  /** ID of the job. */
  jobId: string;
}

export interface ExecuteProjectJobResponse {
  $type: "yandex.cloud.datasphere.v2.jobs.ExecuteProjectJobResponse";
  /** Uploaded output files with URLs. */
  outputFiles: StorageFile[];
  /** Result of the job. */
  result?: JobResult | undefined;
}

export interface ExecuteProjectJobMetadata {
  $type: "yandex.cloud.datasphere.v2.jobs.ExecuteProjectJobMetadata";
  /** Instance of the job. */
  job?: Job | undefined;
}

export interface CancelProjectJobRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.CancelProjectJobRequest";
  /** ID of the job. */
  jobId: string;
  /** Optional cancellation reason. */
  reason: string;
}

export interface FinalizeProjectJobRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.FinalizeProjectJobRequest";
  /** ID of the job. */
  jobId: string;
}

export interface FinalizeProjectJobResponse {
  $type: "yandex.cloud.datasphere.v2.jobs.FinalizeProjectJobResponse";
  /** ID of the job. */
  jobId: string;
}

export interface ReadProjectJobStdLogsRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobStdLogsRequest";
  /** ID of the job. */
  jobId: string;
  /** Log offset. */
  offset: number;
}

export interface ReadProjectJobStdLogsResponse {
  $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobStdLogsResponse";
  logs: StdLog[];
  /** Log offset. */
  offset: number;
}

export interface ReadProjectJobLogsRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobLogsRequest";
  /** ID of the job. */
  jobId: string;
  /** Log offset. */
  offset: number;
}

export interface ReadProjectJobLogsResponse {
  $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobLogsResponse";
  logs: LogMessage[];
  /** Log offset. */
  offset: number;
}

export interface DownloadProjectJobFilesRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.DownloadProjectJobFilesRequest";
  jobId: string;
  files: File[];
}

export interface DownloadProjectJobFilesResponse {
  $type: "yandex.cloud.datasphere.v2.jobs.DownloadProjectJobFilesResponse";
  downloadFiles: StorageFile[];
}

export interface ListProjectJobRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.ListProjectJobRequest";
  /** ID of the project. */
  projectId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListProjectJobResponse.page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListProjectJobResponse.page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListProjectJobResponse {
  $type: "yandex.cloud.datasphere.v2.jobs.ListProjectJobResponse";
  /** Instances of the jobs. */
  jobs: Job[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListProjectJobRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListProjectJobRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [page_token] to continue paging through the results.
   */
  pageToken: string;
}

export interface GetProjectJobRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.GetProjectJobRequest";
  /** ID of the job. */
  jobId: string;
}

export interface DeleteProjectJobRequest {
  $type: "yandex.cloud.datasphere.v2.jobs.DeleteProjectJobRequest";
  /** ID of the job. */
  jobId: string;
}

export interface DeleteProjectJobMetadata {
  $type: "yandex.cloud.datasphere.v2.jobs.DeleteProjectJobMetadata";
  /** ID of the job. */
  jobId: string;
}

export interface StdLog {
  $type: "yandex.cloud.datasphere.v2.jobs.StdLog";
  /** Log contents. */
  content: Buffer;
  /** Log type. */
  type: StdLog_Type;
}

export enum StdLog_Type {
  TYPE_UNSPECIFIED = 0,
  /** OUT - stdout. */
  OUT = 1,
  /** ERR - stderr. */
  ERR = 2,
  UNRECOGNIZED = -1,
}

export function stdLog_TypeFromJSON(object: any): StdLog_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return StdLog_Type.TYPE_UNSPECIFIED;
    case 1:
    case "OUT":
      return StdLog_Type.OUT;
    case 2:
    case "ERR":
      return StdLog_Type.ERR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StdLog_Type.UNRECOGNIZED;
  }
}

export function stdLog_TypeToJSON(object: StdLog_Type): string {
  switch (object) {
    case StdLog_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case StdLog_Type.OUT:
      return "OUT";
    case StdLog_Type.ERR:
      return "ERR";
    case StdLog_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LogMessage {
  $type: "yandex.cloud.datasphere.v2.jobs.LogMessage";
  /** Log message contents. */
  content: Buffer;
  /** Log message creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Program standard streams. */
  standardStream?:
    | StandardStream
    | undefined;
  /** System debug log files. */
  filePath?: string | undefined;
}

function createBaseCreateProjectJobRequest(): CreateProjectJobRequest {
  return {
    $type: "yandex.cloud.datasphere.v2.jobs.CreateProjectJobRequest",
    projectId: "",
    jobParameters: undefined,
    config: "",
    name: "",
    desc: "",
    dataTtl: undefined,
  };
}

export const CreateProjectJobRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.CreateProjectJobRequest" as const,

  encode(message: CreateProjectJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.jobParameters !== undefined) {
      JobParameters.encode(message.jobParameters, writer.uint32(18).fork()).ldelim();
    }
    if (message.config !== "") {
      writer.uint32(26).string(message.config);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(42).string(message.desc);
    }
    if (message.dataTtl !== undefined) {
      Duration.encode(message.dataTtl, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectJobRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jobParameters = JobParameters.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.config = reader.string();
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

          message.desc = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dataTtl = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProjectJobRequest {
    return {
      $type: CreateProjectJobRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      jobParameters: isSet(object.jobParameters) ? JobParameters.fromJSON(object.jobParameters) : undefined,
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      desc: isSet(object.desc) ? globalThis.String(object.desc) : "",
      dataTtl: isSet(object.dataTtl) ? Duration.fromJSON(object.dataTtl) : undefined,
    };
  },

  toJSON(message: CreateProjectJobRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.jobParameters !== undefined) {
      obj.jobParameters = JobParameters.toJSON(message.jobParameters);
    }
    if (message.config !== "") {
      obj.config = message.config;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.desc !== "") {
      obj.desc = message.desc;
    }
    if (message.dataTtl !== undefined) {
      obj.dataTtl = Duration.toJSON(message.dataTtl);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectJobRequest>, I>>(base?: I): CreateProjectJobRequest {
    return CreateProjectJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProjectJobRequest>, I>>(object: I): CreateProjectJobRequest {
    const message = createBaseCreateProjectJobRequest();
    message.projectId = object.projectId ?? "";
    message.jobParameters = (object.jobParameters !== undefined && object.jobParameters !== null)
      ? JobParameters.fromPartial(object.jobParameters)
      : undefined;
    message.config = object.config ?? "";
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.dataTtl = (object.dataTtl !== undefined && object.dataTtl !== null)
      ? Duration.fromPartial(object.dataTtl)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateProjectJobRequest.$type, CreateProjectJobRequest);

function createBaseCreateProjectJobMetadata(): CreateProjectJobMetadata {
  return { $type: "yandex.cloud.datasphere.v2.jobs.CreateProjectJobMetadata", projectId: "" };
}

export const CreateProjectJobMetadata = {
  $type: "yandex.cloud.datasphere.v2.jobs.CreateProjectJobMetadata" as const,

  encode(message: CreateProjectJobMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectJobMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectJobMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProjectJobMetadata {
    return {
      $type: CreateProjectJobMetadata.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: CreateProjectJobMetadata): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectJobMetadata>, I>>(base?: I): CreateProjectJobMetadata {
    return CreateProjectJobMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProjectJobMetadata>, I>>(object: I): CreateProjectJobMetadata {
    const message = createBaseCreateProjectJobMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateProjectJobMetadata.$type, CreateProjectJobMetadata);

function createBaseCreateProjectJobResponse(): CreateProjectJobResponse {
  return { $type: "yandex.cloud.datasphere.v2.jobs.CreateProjectJobResponse", jobId: "", uploadFiles: [] };
}

export const CreateProjectJobResponse = {
  $type: "yandex.cloud.datasphere.v2.jobs.CreateProjectJobResponse" as const,

  encode(message: CreateProjectJobResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    for (const v of message.uploadFiles) {
      StorageFile.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectJobResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectJobResponse();
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

          message.uploadFiles.push(StorageFile.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProjectJobResponse {
    return {
      $type: CreateProjectJobResponse.$type,
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      uploadFiles: globalThis.Array.isArray(object?.uploadFiles)
        ? object.uploadFiles.map((e: any) => StorageFile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateProjectJobResponse): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.uploadFiles?.length) {
      obj.uploadFiles = message.uploadFiles.map((e) => StorageFile.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectJobResponse>, I>>(base?: I): CreateProjectJobResponse {
    return CreateProjectJobResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProjectJobResponse>, I>>(object: I): CreateProjectJobResponse {
    const message = createBaseCreateProjectJobResponse();
    message.jobId = object.jobId ?? "";
    message.uploadFiles = object.uploadFiles?.map((e) => StorageFile.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateProjectJobResponse.$type, CreateProjectJobResponse);

function createBaseExecuteProjectJobRequest(): ExecuteProjectJobRequest {
  return { $type: "yandex.cloud.datasphere.v2.jobs.ExecuteProjectJobRequest", jobId: "" };
}

export const ExecuteProjectJobRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.ExecuteProjectJobRequest" as const,

  encode(message: ExecuteProjectJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteProjectJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteProjectJobRequest();
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

  fromJSON(object: any): ExecuteProjectJobRequest {
    return { $type: ExecuteProjectJobRequest.$type, jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "" };
  },

  toJSON(message: ExecuteProjectJobRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecuteProjectJobRequest>, I>>(base?: I): ExecuteProjectJobRequest {
    return ExecuteProjectJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecuteProjectJobRequest>, I>>(object: I): ExecuteProjectJobRequest {
    const message = createBaseExecuteProjectJobRequest();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExecuteProjectJobRequest.$type, ExecuteProjectJobRequest);

function createBaseExecuteProjectJobResponse(): ExecuteProjectJobResponse {
  return { $type: "yandex.cloud.datasphere.v2.jobs.ExecuteProjectJobResponse", outputFiles: [], result: undefined };
}

export const ExecuteProjectJobResponse = {
  $type: "yandex.cloud.datasphere.v2.jobs.ExecuteProjectJobResponse" as const,

  encode(message: ExecuteProjectJobResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outputFiles) {
      StorageFile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      JobResult.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteProjectJobResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteProjectJobResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outputFiles.push(StorageFile.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.result = JobResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecuteProjectJobResponse {
    return {
      $type: ExecuteProjectJobResponse.$type,
      outputFiles: globalThis.Array.isArray(object?.outputFiles)
        ? object.outputFiles.map((e: any) => StorageFile.fromJSON(e))
        : [],
      result: isSet(object.result) ? JobResult.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: ExecuteProjectJobResponse): unknown {
    const obj: any = {};
    if (message.outputFiles?.length) {
      obj.outputFiles = message.outputFiles.map((e) => StorageFile.toJSON(e));
    }
    if (message.result !== undefined) {
      obj.result = JobResult.toJSON(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecuteProjectJobResponse>, I>>(base?: I): ExecuteProjectJobResponse {
    return ExecuteProjectJobResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecuteProjectJobResponse>, I>>(object: I): ExecuteProjectJobResponse {
    const message = createBaseExecuteProjectJobResponse();
    message.outputFiles = object.outputFiles?.map((e) => StorageFile.fromPartial(e)) || [];
    message.result = (object.result !== undefined && object.result !== null)
      ? JobResult.fromPartial(object.result)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ExecuteProjectJobResponse.$type, ExecuteProjectJobResponse);

function createBaseExecuteProjectJobMetadata(): ExecuteProjectJobMetadata {
  return { $type: "yandex.cloud.datasphere.v2.jobs.ExecuteProjectJobMetadata", job: undefined };
}

export const ExecuteProjectJobMetadata = {
  $type: "yandex.cloud.datasphere.v2.jobs.ExecuteProjectJobMetadata" as const,

  encode(message: ExecuteProjectJobMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.job !== undefined) {
      Job.encode(message.job, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteProjectJobMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteProjectJobMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.job = Job.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecuteProjectJobMetadata {
    return { $type: ExecuteProjectJobMetadata.$type, job: isSet(object.job) ? Job.fromJSON(object.job) : undefined };
  },

  toJSON(message: ExecuteProjectJobMetadata): unknown {
    const obj: any = {};
    if (message.job !== undefined) {
      obj.job = Job.toJSON(message.job);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecuteProjectJobMetadata>, I>>(base?: I): ExecuteProjectJobMetadata {
    return ExecuteProjectJobMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecuteProjectJobMetadata>, I>>(object: I): ExecuteProjectJobMetadata {
    const message = createBaseExecuteProjectJobMetadata();
    message.job = (object.job !== undefined && object.job !== null) ? Job.fromPartial(object.job) : undefined;
    return message;
  },
};

messageTypeRegistry.set(ExecuteProjectJobMetadata.$type, ExecuteProjectJobMetadata);

function createBaseCancelProjectJobRequest(): CancelProjectJobRequest {
  return { $type: "yandex.cloud.datasphere.v2.jobs.CancelProjectJobRequest", jobId: "", reason: "" };
}

export const CancelProjectJobRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.CancelProjectJobRequest" as const,

  encode(message: CancelProjectJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelProjectJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelProjectJobRequest();
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

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelProjectJobRequest {
    return {
      $type: CancelProjectJobRequest.$type,
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: CancelProjectJobRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CancelProjectJobRequest>, I>>(base?: I): CancelProjectJobRequest {
    return CancelProjectJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CancelProjectJobRequest>, I>>(object: I): CancelProjectJobRequest {
    const message = createBaseCancelProjectJobRequest();
    message.jobId = object.jobId ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

messageTypeRegistry.set(CancelProjectJobRequest.$type, CancelProjectJobRequest);

function createBaseFinalizeProjectJobRequest(): FinalizeProjectJobRequest {
  return { $type: "yandex.cloud.datasphere.v2.jobs.FinalizeProjectJobRequest", jobId: "" };
}

export const FinalizeProjectJobRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.FinalizeProjectJobRequest" as const,

  encode(message: FinalizeProjectJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinalizeProjectJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizeProjectJobRequest();
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

  fromJSON(object: any): FinalizeProjectJobRequest {
    return {
      $type: FinalizeProjectJobRequest.$type,
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
    };
  },

  toJSON(message: FinalizeProjectJobRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinalizeProjectJobRequest>, I>>(base?: I): FinalizeProjectJobRequest {
    return FinalizeProjectJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinalizeProjectJobRequest>, I>>(object: I): FinalizeProjectJobRequest {
    const message = createBaseFinalizeProjectJobRequest();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(FinalizeProjectJobRequest.$type, FinalizeProjectJobRequest);

function createBaseFinalizeProjectJobResponse(): FinalizeProjectJobResponse {
  return { $type: "yandex.cloud.datasphere.v2.jobs.FinalizeProjectJobResponse", jobId: "" };
}

export const FinalizeProjectJobResponse = {
  $type: "yandex.cloud.datasphere.v2.jobs.FinalizeProjectJobResponse" as const,

  encode(message: FinalizeProjectJobResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinalizeProjectJobResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizeProjectJobResponse();
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

  fromJSON(object: any): FinalizeProjectJobResponse {
    return {
      $type: FinalizeProjectJobResponse.$type,
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
    };
  },

  toJSON(message: FinalizeProjectJobResponse): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinalizeProjectJobResponse>, I>>(base?: I): FinalizeProjectJobResponse {
    return FinalizeProjectJobResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinalizeProjectJobResponse>, I>>(object: I): FinalizeProjectJobResponse {
    const message = createBaseFinalizeProjectJobResponse();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(FinalizeProjectJobResponse.$type, FinalizeProjectJobResponse);

function createBaseReadProjectJobStdLogsRequest(): ReadProjectJobStdLogsRequest {
  return { $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobStdLogsRequest", jobId: "", offset: 0 };
}

export const ReadProjectJobStdLogsRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobStdLogsRequest" as const,

  encode(message: ReadProjectJobStdLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadProjectJobStdLogsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadProjectJobStdLogsRequest();
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

          message.offset = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadProjectJobStdLogsRequest {
    return {
      $type: ReadProjectJobStdLogsRequest.$type,
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: ReadProjectJobStdLogsRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadProjectJobStdLogsRequest>, I>>(base?: I): ReadProjectJobStdLogsRequest {
    return ReadProjectJobStdLogsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadProjectJobStdLogsRequest>, I>>(object: I): ReadProjectJobStdLogsRequest {
    const message = createBaseReadProjectJobStdLogsRequest();
    message.jobId = object.jobId ?? "";
    message.offset = object.offset ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ReadProjectJobStdLogsRequest.$type, ReadProjectJobStdLogsRequest);

function createBaseReadProjectJobStdLogsResponse(): ReadProjectJobStdLogsResponse {
  return { $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobStdLogsResponse", logs: [], offset: 0 };
}

export const ReadProjectJobStdLogsResponse = {
  $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobStdLogsResponse" as const,

  encode(message: ReadProjectJobStdLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logs) {
      StdLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.offset !== 0) {
      writer.uint32(16).int64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadProjectJobStdLogsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadProjectJobStdLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logs.push(StdLog.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadProjectJobStdLogsResponse {
    return {
      $type: ReadProjectJobStdLogsResponse.$type,
      logs: globalThis.Array.isArray(object?.logs) ? object.logs.map((e: any) => StdLog.fromJSON(e)) : [],
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: ReadProjectJobStdLogsResponse): unknown {
    const obj: any = {};
    if (message.logs?.length) {
      obj.logs = message.logs.map((e) => StdLog.toJSON(e));
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadProjectJobStdLogsResponse>, I>>(base?: I): ReadProjectJobStdLogsResponse {
    return ReadProjectJobStdLogsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadProjectJobStdLogsResponse>, I>>(
    object: I,
  ): ReadProjectJobStdLogsResponse {
    const message = createBaseReadProjectJobStdLogsResponse();
    message.logs = object.logs?.map((e) => StdLog.fromPartial(e)) || [];
    message.offset = object.offset ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ReadProjectJobStdLogsResponse.$type, ReadProjectJobStdLogsResponse);

function createBaseReadProjectJobLogsRequest(): ReadProjectJobLogsRequest {
  return { $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobLogsRequest", jobId: "", offset: 0 };
}

export const ReadProjectJobLogsRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobLogsRequest" as const,

  encode(message: ReadProjectJobLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadProjectJobLogsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadProjectJobLogsRequest();
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

          message.offset = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadProjectJobLogsRequest {
    return {
      $type: ReadProjectJobLogsRequest.$type,
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: ReadProjectJobLogsRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadProjectJobLogsRequest>, I>>(base?: I): ReadProjectJobLogsRequest {
    return ReadProjectJobLogsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadProjectJobLogsRequest>, I>>(object: I): ReadProjectJobLogsRequest {
    const message = createBaseReadProjectJobLogsRequest();
    message.jobId = object.jobId ?? "";
    message.offset = object.offset ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ReadProjectJobLogsRequest.$type, ReadProjectJobLogsRequest);

function createBaseReadProjectJobLogsResponse(): ReadProjectJobLogsResponse {
  return { $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobLogsResponse", logs: [], offset: 0 };
}

export const ReadProjectJobLogsResponse = {
  $type: "yandex.cloud.datasphere.v2.jobs.ReadProjectJobLogsResponse" as const,

  encode(message: ReadProjectJobLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logs) {
      LogMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.offset !== 0) {
      writer.uint32(16).int64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadProjectJobLogsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadProjectJobLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logs.push(LogMessage.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadProjectJobLogsResponse {
    return {
      $type: ReadProjectJobLogsResponse.$type,
      logs: globalThis.Array.isArray(object?.logs) ? object.logs.map((e: any) => LogMessage.fromJSON(e)) : [],
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: ReadProjectJobLogsResponse): unknown {
    const obj: any = {};
    if (message.logs?.length) {
      obj.logs = message.logs.map((e) => LogMessage.toJSON(e));
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadProjectJobLogsResponse>, I>>(base?: I): ReadProjectJobLogsResponse {
    return ReadProjectJobLogsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadProjectJobLogsResponse>, I>>(object: I): ReadProjectJobLogsResponse {
    const message = createBaseReadProjectJobLogsResponse();
    message.logs = object.logs?.map((e) => LogMessage.fromPartial(e)) || [];
    message.offset = object.offset ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ReadProjectJobLogsResponse.$type, ReadProjectJobLogsResponse);

function createBaseDownloadProjectJobFilesRequest(): DownloadProjectJobFilesRequest {
  return { $type: "yandex.cloud.datasphere.v2.jobs.DownloadProjectJobFilesRequest", jobId: "", files: [] };
}

export const DownloadProjectJobFilesRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.DownloadProjectJobFilesRequest" as const,

  encode(message: DownloadProjectJobFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadProjectJobFilesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadProjectJobFilesRequest();
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

          message.files.push(File.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadProjectJobFilesRequest {
    return {
      $type: DownloadProjectJobFilesRequest.$type,
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      files: globalThis.Array.isArray(object?.files) ? object.files.map((e: any) => File.fromJSON(e)) : [],
    };
  },

  toJSON(message: DownloadProjectJobFilesRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.files?.length) {
      obj.files = message.files.map((e) => File.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadProjectJobFilesRequest>, I>>(base?: I): DownloadProjectJobFilesRequest {
    return DownloadProjectJobFilesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadProjectJobFilesRequest>, I>>(
    object: I,
  ): DownloadProjectJobFilesRequest {
    const message = createBaseDownloadProjectJobFilesRequest();
    message.jobId = object.jobId ?? "";
    message.files = object.files?.map((e) => File.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(DownloadProjectJobFilesRequest.$type, DownloadProjectJobFilesRequest);

function createBaseDownloadProjectJobFilesResponse(): DownloadProjectJobFilesResponse {
  return { $type: "yandex.cloud.datasphere.v2.jobs.DownloadProjectJobFilesResponse", downloadFiles: [] };
}

export const DownloadProjectJobFilesResponse = {
  $type: "yandex.cloud.datasphere.v2.jobs.DownloadProjectJobFilesResponse" as const,

  encode(message: DownloadProjectJobFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.downloadFiles) {
      StorageFile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadProjectJobFilesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadProjectJobFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.downloadFiles.push(StorageFile.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadProjectJobFilesResponse {
    return {
      $type: DownloadProjectJobFilesResponse.$type,
      downloadFiles: globalThis.Array.isArray(object?.downloadFiles)
        ? object.downloadFiles.map((e: any) => StorageFile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DownloadProjectJobFilesResponse): unknown {
    const obj: any = {};
    if (message.downloadFiles?.length) {
      obj.downloadFiles = message.downloadFiles.map((e) => StorageFile.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadProjectJobFilesResponse>, I>>(base?: I): DownloadProjectJobFilesResponse {
    return DownloadProjectJobFilesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadProjectJobFilesResponse>, I>>(
    object: I,
  ): DownloadProjectJobFilesResponse {
    const message = createBaseDownloadProjectJobFilesResponse();
    message.downloadFiles = object.downloadFiles?.map((e) => StorageFile.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(DownloadProjectJobFilesResponse.$type, DownloadProjectJobFilesResponse);

function createBaseListProjectJobRequest(): ListProjectJobRequest {
  return { $type: "yandex.cloud.datasphere.v2.jobs.ListProjectJobRequest", projectId: "", pageSize: 0, pageToken: "" };
}

export const ListProjectJobRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.ListProjectJobRequest" as const,

  encode(message: ListProjectJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProjectJobRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProjectJobRequest {
    return {
      $type: ListProjectJobRequest.$type,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListProjectJobRequest): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProjectJobRequest>, I>>(base?: I): ListProjectJobRequest {
    return ListProjectJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProjectJobRequest>, I>>(object: I): ListProjectJobRequest {
    const message = createBaseListProjectJobRequest();
    message.projectId = object.projectId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProjectJobRequest.$type, ListProjectJobRequest);

function createBaseListProjectJobResponse(): ListProjectJobResponse {
  return { $type: "yandex.cloud.datasphere.v2.jobs.ListProjectJobResponse", jobs: [], pageToken: "" };
}

export const ListProjectJobResponse = {
  $type: "yandex.cloud.datasphere.v2.jobs.ListProjectJobResponse" as const,

  encode(message: ListProjectJobResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.jobs) {
      Job.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectJobResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProjectJobResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobs.push(Job.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProjectJobResponse {
    return {
      $type: ListProjectJobResponse.$type,
      jobs: globalThis.Array.isArray(object?.jobs) ? object.jobs.map((e: any) => Job.fromJSON(e)) : [],
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListProjectJobResponse): unknown {
    const obj: any = {};
    if (message.jobs?.length) {
      obj.jobs = message.jobs.map((e) => Job.toJSON(e));
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProjectJobResponse>, I>>(base?: I): ListProjectJobResponse {
    return ListProjectJobResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProjectJobResponse>, I>>(object: I): ListProjectJobResponse {
    const message = createBaseListProjectJobResponse();
    message.jobs = object.jobs?.map((e) => Job.fromPartial(e)) || [];
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProjectJobResponse.$type, ListProjectJobResponse);

function createBaseGetProjectJobRequest(): GetProjectJobRequest {
  return { $type: "yandex.cloud.datasphere.v2.jobs.GetProjectJobRequest", jobId: "" };
}

export const GetProjectJobRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.GetProjectJobRequest" as const,

  encode(message: GetProjectJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectJobRequest();
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

  fromJSON(object: any): GetProjectJobRequest {
    return { $type: GetProjectJobRequest.$type, jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "" };
  },

  toJSON(message: GetProjectJobRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectJobRequest>, I>>(base?: I): GetProjectJobRequest {
    return GetProjectJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProjectJobRequest>, I>>(object: I): GetProjectJobRequest {
    const message = createBaseGetProjectJobRequest();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetProjectJobRequest.$type, GetProjectJobRequest);

function createBaseDeleteProjectJobRequest(): DeleteProjectJobRequest {
  return { $type: "yandex.cloud.datasphere.v2.jobs.DeleteProjectJobRequest", jobId: "" };
}

export const DeleteProjectJobRequest = {
  $type: "yandex.cloud.datasphere.v2.jobs.DeleteProjectJobRequest" as const,

  encode(message: DeleteProjectJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectJobRequest();
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

  fromJSON(object: any): DeleteProjectJobRequest {
    return { $type: DeleteProjectJobRequest.$type, jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "" };
  },

  toJSON(message: DeleteProjectJobRequest): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProjectJobRequest>, I>>(base?: I): DeleteProjectJobRequest {
    return DeleteProjectJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteProjectJobRequest>, I>>(object: I): DeleteProjectJobRequest {
    const message = createBaseDeleteProjectJobRequest();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteProjectJobRequest.$type, DeleteProjectJobRequest);

function createBaseDeleteProjectJobMetadata(): DeleteProjectJobMetadata {
  return { $type: "yandex.cloud.datasphere.v2.jobs.DeleteProjectJobMetadata", jobId: "" };
}

export const DeleteProjectJobMetadata = {
  $type: "yandex.cloud.datasphere.v2.jobs.DeleteProjectJobMetadata" as const,

  encode(message: DeleteProjectJobMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectJobMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectJobMetadata();
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

  fromJSON(object: any): DeleteProjectJobMetadata {
    return { $type: DeleteProjectJobMetadata.$type, jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "" };
  },

  toJSON(message: DeleteProjectJobMetadata): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProjectJobMetadata>, I>>(base?: I): DeleteProjectJobMetadata {
    return DeleteProjectJobMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteProjectJobMetadata>, I>>(object: I): DeleteProjectJobMetadata {
    const message = createBaseDeleteProjectJobMetadata();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteProjectJobMetadata.$type, DeleteProjectJobMetadata);

function createBaseStdLog(): StdLog {
  return { $type: "yandex.cloud.datasphere.v2.jobs.StdLog", content: Buffer.alloc(0), type: 0 };
}

export const StdLog = {
  $type: "yandex.cloud.datasphere.v2.jobs.StdLog" as const,

  encode(message: StdLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StdLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStdLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): StdLog {
    return {
      $type: StdLog.$type,
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : Buffer.alloc(0),
      type: isSet(object.type) ? stdLog_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: StdLog): unknown {
    const obj: any = {};
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.type !== 0) {
      obj.type = stdLog_TypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StdLog>, I>>(base?: I): StdLog {
    return StdLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StdLog>, I>>(object: I): StdLog {
    const message = createBaseStdLog();
    message.content = object.content ?? Buffer.alloc(0);
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(StdLog.$type, StdLog);

function createBaseLogMessage(): LogMessage {
  return {
    $type: "yandex.cloud.datasphere.v2.jobs.LogMessage",
    content: Buffer.alloc(0),
    createdAt: undefined,
    standardStream: undefined,
    filePath: undefined,
  };
}

export const LogMessage = {
  $type: "yandex.cloud.datasphere.v2.jobs.LogMessage" as const,

  encode(message: LogMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.standardStream !== undefined) {
      writer.uint32(24).int32(message.standardStream);
    }
    if (message.filePath !== undefined) {
      writer.uint32(34).string(message.filePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.standardStream = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filePath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogMessage {
    return {
      $type: LogMessage.$type,
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : Buffer.alloc(0),
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      standardStream: isSet(object.standardStream) ? standardStreamFromJSON(object.standardStream) : undefined,
      filePath: isSet(object.filePath) ? globalThis.String(object.filePath) : undefined,
    };
  },

  toJSON(message: LogMessage): unknown {
    const obj: any = {};
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.standardStream !== undefined) {
      obj.standardStream = standardStreamToJSON(message.standardStream);
    }
    if (message.filePath !== undefined) {
      obj.filePath = message.filePath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogMessage>, I>>(base?: I): LogMessage {
    return LogMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogMessage>, I>>(object: I): LogMessage {
    const message = createBaseLogMessage();
    message.content = object.content ?? Buffer.alloc(0);
    message.createdAt = object.createdAt ?? undefined;
    message.standardStream = object.standardStream ?? undefined;
    message.filePath = object.filePath ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(LogMessage.$type, LogMessage);

/**
 * A set of methods for managing Project Jobs. Do not use these methods manually.
 * For working with DataSphere Jobs, install DataSphere CLI via `pip install datasphere`.
 */
export type ProjectJobServiceService = typeof ProjectJobServiceService;
export const ProjectJobServiceService = {
  /** Creates job. */
  create: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectJobRequest) => Buffer.from(CreateProjectJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProjectJobRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Runs job execution. */
  execute: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/Execute",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExecuteProjectJobRequest) => Buffer.from(ExecuteProjectJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ExecuteProjectJobRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Cancels running job. */
  cancel: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/Cancel",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CancelProjectJobRequest) => Buffer.from(CancelProjectJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CancelProjectJobRequest.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Triggers cleanup after downloading job results. */
  finalize: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/Finalize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FinalizeProjectJobRequest) =>
      Buffer.from(FinalizeProjectJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FinalizeProjectJobRequest.decode(value),
    responseSerialize: (value: FinalizeProjectJobResponse) =>
      Buffer.from(FinalizeProjectJobResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FinalizeProjectJobResponse.decode(value),
  },
  /**
   * Returns stream of job logs.
   *
   * @deprecated
   */
  readStdLogs: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/ReadStdLogs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: ReadProjectJobStdLogsRequest) =>
      Buffer.from(ReadProjectJobStdLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReadProjectJobStdLogsRequest.decode(value),
    responseSerialize: (value: ReadProjectJobStdLogsResponse) =>
      Buffer.from(ReadProjectJobStdLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReadProjectJobStdLogsResponse.decode(value),
  },
  /** Returns stream of job logs. */
  readLogs: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/ReadLogs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: ReadProjectJobLogsRequest) =>
      Buffer.from(ReadProjectJobLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReadProjectJobLogsRequest.decode(value),
    responseSerialize: (value: ReadProjectJobLogsResponse) =>
      Buffer.from(ReadProjectJobLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReadProjectJobLogsResponse.decode(value),
  },
  /** Returns download urls for job files. */
  downloadJobFiles: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/DownloadJobFiles",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DownloadProjectJobFilesRequest) =>
      Buffer.from(DownloadProjectJobFilesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DownloadProjectJobFilesRequest.decode(value),
    responseSerialize: (value: DownloadProjectJobFilesResponse) =>
      Buffer.from(DownloadProjectJobFilesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DownloadProjectJobFilesResponse.decode(value),
  },
  /** Lists jobs. */
  list: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListProjectJobRequest) => Buffer.from(ListProjectJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListProjectJobRequest.decode(value),
    responseSerialize: (value: ListProjectJobResponse) => Buffer.from(ListProjectJobResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListProjectJobResponse.decode(value),
  },
  /** Returns job by id. */
  get: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectJobRequest) => Buffer.from(GetProjectJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectJobRequest.decode(value),
    responseSerialize: (value: Job) => Buffer.from(Job.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Job.decode(value),
  },
  /** Deletes specified job. */
  delete: {
    path: "/yandex.cloud.datasphere.v2.jobs.ProjectJobService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProjectJobRequest) => Buffer.from(DeleteProjectJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteProjectJobRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ProjectJobServiceServer extends UntypedServiceImplementation {
  /** Creates job. */
  create: handleUnaryCall<CreateProjectJobRequest, Operation>;
  /** Runs job execution. */
  execute: handleUnaryCall<ExecuteProjectJobRequest, Operation>;
  /** Cancels running job. */
  cancel: handleUnaryCall<CancelProjectJobRequest, Empty>;
  /** Triggers cleanup after downloading job results. */
  finalize: handleUnaryCall<FinalizeProjectJobRequest, FinalizeProjectJobResponse>;
  /**
   * Returns stream of job logs.
   *
   * @deprecated
   */
  readStdLogs: handleServerStreamingCall<ReadProjectJobStdLogsRequest, ReadProjectJobStdLogsResponse>;
  /** Returns stream of job logs. */
  readLogs: handleServerStreamingCall<ReadProjectJobLogsRequest, ReadProjectJobLogsResponse>;
  /** Returns download urls for job files. */
  downloadJobFiles: handleUnaryCall<DownloadProjectJobFilesRequest, DownloadProjectJobFilesResponse>;
  /** Lists jobs. */
  list: handleUnaryCall<ListProjectJobRequest, ListProjectJobResponse>;
  /** Returns job by id. */
  get: handleUnaryCall<GetProjectJobRequest, Job>;
  /** Deletes specified job. */
  delete: handleUnaryCall<DeleteProjectJobRequest, Operation>;
}

export interface ProjectJobServiceClient extends Client {
  /** Creates job. */
  create(
    request: CreateProjectJobRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProjectJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProjectJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Runs job execution. */
  execute(
    request: ExecuteProjectJobRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  execute(
    request: ExecuteProjectJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  execute(
    request: ExecuteProjectJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Cancels running job. */
  cancel(
    request: CancelProjectJobRequest,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  cancel(
    request: CancelProjectJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  cancel(
    request: CancelProjectJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  /** Triggers cleanup after downloading job results. */
  finalize(
    request: FinalizeProjectJobRequest,
    callback: (error: ServiceError | null, response: FinalizeProjectJobResponse) => void,
  ): ClientUnaryCall;
  finalize(
    request: FinalizeProjectJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: FinalizeProjectJobResponse) => void,
  ): ClientUnaryCall;
  finalize(
    request: FinalizeProjectJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: FinalizeProjectJobResponse) => void,
  ): ClientUnaryCall;
  /**
   * Returns stream of job logs.
   *
   * @deprecated
   */
  readStdLogs(
    request: ReadProjectJobStdLogsRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ReadProjectJobStdLogsResponse>;
  readStdLogs(
    request: ReadProjectJobStdLogsRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ReadProjectJobStdLogsResponse>;
  /** Returns stream of job logs. */
  readLogs(
    request: ReadProjectJobLogsRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ReadProjectJobLogsResponse>;
  readLogs(
    request: ReadProjectJobLogsRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ReadProjectJobLogsResponse>;
  /** Returns download urls for job files. */
  downloadJobFiles(
    request: DownloadProjectJobFilesRequest,
    callback: (error: ServiceError | null, response: DownloadProjectJobFilesResponse) => void,
  ): ClientUnaryCall;
  downloadJobFiles(
    request: DownloadProjectJobFilesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DownloadProjectJobFilesResponse) => void,
  ): ClientUnaryCall;
  downloadJobFiles(
    request: DownloadProjectJobFilesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DownloadProjectJobFilesResponse) => void,
  ): ClientUnaryCall;
  /** Lists jobs. */
  list(
    request: ListProjectJobRequest,
    callback: (error: ServiceError | null, response: ListProjectJobResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListProjectJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListProjectJobResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListProjectJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListProjectJobResponse) => void,
  ): ClientUnaryCall;
  /** Returns job by id. */
  get(request: GetProjectJobRequest, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
  get(
    request: GetProjectJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Job) => void,
  ): ClientUnaryCall;
  get(
    request: GetProjectJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Job) => void,
  ): ClientUnaryCall;
  /** Deletes specified job. */
  delete(
    request: DeleteProjectJobRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteProjectJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteProjectJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ProjectJobServiceClient = makeGenericClientConstructor(
  ProjectJobServiceService,
  "yandex.cloud.datasphere.v2.jobs.ProjectJobService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectJobServiceClient;
  service: typeof ProjectJobServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
