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
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { HiveJob, Job, MapreduceJob, PysparkJob, SparkJob } from "./job";

export const protobufPackage = "yandex.cloud.dataproc.v1";

export interface GetJobRequest {
  $type: "yandex.cloud.dataproc.v1.GetJobRequest";
  /** ID of the cluster to request a job from. */
  clusterId: string;
  /**
   * ID of the job to return.
   *
   * To get a job ID make a [JobService.List] request.
   */
  jobId: string;
}

export interface ListJobsRequest {
  $type: "yandex.cloud.dataproc.v1.ListJobsRequest";
  /** ID of the cluster to list jobs for. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListJobsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListJobsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters jobs listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Job.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-job`.
   */
  filter: string;
}

export interface ListJobsResponse {
  $type: "yandex.cloud.dataproc.v1.ListJobsResponse";
  /** List of jobs for the specified cluster. */
  jobs: Job[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListJobsRequest.page_size], use `next_page_token` as the value
   * for the [ListJobsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateJobRequest {
  $type: "yandex.cloud.dataproc.v1.CreateJobRequest";
  /** ID of the cluster to create a job for. */
  clusterId: string;
  /** Name of the job. */
  name: string;
  /** Specification for a MapReduce job. */
  mapreduceJob?:
    | MapreduceJob
    | undefined;
  /** Specification for a Spark job. */
  sparkJob?:
    | SparkJob
    | undefined;
  /** Specification for a PySpark job. */
  pysparkJob?:
    | PysparkJob
    | undefined;
  /** Specification for a Hive job. */
  hiveJob?: HiveJob | undefined;
}

export interface CreateJobMetadata {
  $type: "yandex.cloud.dataproc.v1.CreateJobMetadata";
  /** ID of the cluster that the job is being created for. */
  clusterId: string;
  /** ID of the job being created. */
  jobId: string;
}

export interface CancelJobRequest {
  $type: "yandex.cloud.dataproc.v1.CancelJobRequest";
  /** Required. ID of the Dataproc cluster. */
  clusterId: string;
  /** Required. ID of the Dataproc job to cancel. */
  jobId: string;
}

export interface ListJobLogRequest {
  $type: "yandex.cloud.dataproc.v1.ListJobLogRequest";
  /** ID of the cluster that the job is being created for. */
  clusterId: string;
  /** ID of the job being created. */
  jobId: string;
  /**
   * The maximum bytes of job log per response to return. If the number of available
   * bytes is larger than [page_size], the service returns a [ListJobLogResponse.next_page_token]
   * that can be used to get the next page of output in subsequent list requests.
   * Default value: 1048576.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListJobLogResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListJobLogResponse {
  $type: "yandex.cloud.dataproc.v1.ListJobLogResponse";
  /** Requested part of Data Proc Job log. */
  content: string;
  /**
   * This token allows you to get the next page of results for ListLog requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListLog request. Subsequent ListLog
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetJobRequest(): GetJobRequest {
  return { $type: "yandex.cloud.dataproc.v1.GetJobRequest", clusterId: "", jobId: "" };
}

export const GetJobRequest = {
  $type: "yandex.cloud.dataproc.v1.GetJobRequest" as const,

  encode(message: GetJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.jobId !== "") {
      writer.uint32(18).string(message.jobId);
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

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
    };
  },

  toJSON(message: GetJobRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
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
    message.clusterId = object.clusterId ?? "";
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetJobRequest.$type, GetJobRequest);

function createBaseListJobsRequest(): ListJobsRequest {
  return { $type: "yandex.cloud.dataproc.v1.ListJobsRequest", clusterId: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListJobsRequest = {
  $type: "yandex.cloud.dataproc.v1.ListJobsRequest" as const,

  encode(message: ListJobsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListJobsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListJobsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListJobsRequest {
    return {
      $type: ListJobsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListJobsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListJobsRequest>, I>>(base?: I): ListJobsRequest {
    return ListJobsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListJobsRequest>, I>>(object: I): ListJobsRequest {
    const message = createBaseListJobsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListJobsRequest.$type, ListJobsRequest);

function createBaseListJobsResponse(): ListJobsResponse {
  return { $type: "yandex.cloud.dataproc.v1.ListJobsResponse", jobs: [], nextPageToken: "" };
}

export const ListJobsResponse = {
  $type: "yandex.cloud.dataproc.v1.ListJobsResponse" as const,

  encode(message: ListJobsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.jobs) {
      Job.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListJobsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListJobsResponse();
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

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListJobsResponse {
    return {
      $type: ListJobsResponse.$type,
      jobs: globalThis.Array.isArray(object?.jobs) ? object.jobs.map((e: any) => Job.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListJobsResponse): unknown {
    const obj: any = {};
    if (message.jobs?.length) {
      obj.jobs = message.jobs.map((e) => Job.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListJobsResponse>, I>>(base?: I): ListJobsResponse {
    return ListJobsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListJobsResponse>, I>>(object: I): ListJobsResponse {
    const message = createBaseListJobsResponse();
    message.jobs = object.jobs?.map((e) => Job.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListJobsResponse.$type, ListJobsResponse);

function createBaseCreateJobRequest(): CreateJobRequest {
  return {
    $type: "yandex.cloud.dataproc.v1.CreateJobRequest",
    clusterId: "",
    name: "",
    mapreduceJob: undefined,
    sparkJob: undefined,
    pysparkJob: undefined,
    hiveJob: undefined,
  };
}

export const CreateJobRequest = {
  $type: "yandex.cloud.dataproc.v1.CreateJobRequest" as const,

  encode(message: CreateJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.mapreduceJob !== undefined) {
      MapreduceJob.encode(message.mapreduceJob, writer.uint32(26).fork()).ldelim();
    }
    if (message.sparkJob !== undefined) {
      SparkJob.encode(message.sparkJob, writer.uint32(34).fork()).ldelim();
    }
    if (message.pysparkJob !== undefined) {
      PysparkJob.encode(message.pysparkJob, writer.uint32(42).fork()).ldelim();
    }
    if (message.hiveJob !== undefined) {
      HiveJob.encode(message.hiveJob, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateJobRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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

          message.mapreduceJob = MapreduceJob.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sparkJob = SparkJob.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pysparkJob = PysparkJob.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.hiveJob = HiveJob.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateJobRequest {
    return {
      $type: CreateJobRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      mapreduceJob: isSet(object.mapreduceJob) ? MapreduceJob.fromJSON(object.mapreduceJob) : undefined,
      sparkJob: isSet(object.sparkJob) ? SparkJob.fromJSON(object.sparkJob) : undefined,
      pysparkJob: isSet(object.pysparkJob) ? PysparkJob.fromJSON(object.pysparkJob) : undefined,
      hiveJob: isSet(object.hiveJob) ? HiveJob.fromJSON(object.hiveJob) : undefined,
    };
  },

  toJSON(message: CreateJobRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.mapreduceJob !== undefined) {
      obj.mapreduceJob = MapreduceJob.toJSON(message.mapreduceJob);
    }
    if (message.sparkJob !== undefined) {
      obj.sparkJob = SparkJob.toJSON(message.sparkJob);
    }
    if (message.pysparkJob !== undefined) {
      obj.pysparkJob = PysparkJob.toJSON(message.pysparkJob);
    }
    if (message.hiveJob !== undefined) {
      obj.hiveJob = HiveJob.toJSON(message.hiveJob);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateJobRequest>, I>>(base?: I): CreateJobRequest {
    return CreateJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateJobRequest>, I>>(object: I): CreateJobRequest {
    const message = createBaseCreateJobRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.mapreduceJob = (object.mapreduceJob !== undefined && object.mapreduceJob !== null)
      ? MapreduceJob.fromPartial(object.mapreduceJob)
      : undefined;
    message.sparkJob = (object.sparkJob !== undefined && object.sparkJob !== null)
      ? SparkJob.fromPartial(object.sparkJob)
      : undefined;
    message.pysparkJob = (object.pysparkJob !== undefined && object.pysparkJob !== null)
      ? PysparkJob.fromPartial(object.pysparkJob)
      : undefined;
    message.hiveJob = (object.hiveJob !== undefined && object.hiveJob !== null)
      ? HiveJob.fromPartial(object.hiveJob)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateJobRequest.$type, CreateJobRequest);

function createBaseCreateJobMetadata(): CreateJobMetadata {
  return { $type: "yandex.cloud.dataproc.v1.CreateJobMetadata", clusterId: "", jobId: "" };
}

export const CreateJobMetadata = {
  $type: "yandex.cloud.dataproc.v1.CreateJobMetadata" as const,

  encode(message: CreateJobMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.jobId !== "") {
      writer.uint32(18).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateJobMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): CreateJobMetadata {
    return {
      $type: CreateJobMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
    };
  },

  toJSON(message: CreateJobMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateJobMetadata>, I>>(base?: I): CreateJobMetadata {
    return CreateJobMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateJobMetadata>, I>>(object: I): CreateJobMetadata {
    const message = createBaseCreateJobMetadata();
    message.clusterId = object.clusterId ?? "";
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateJobMetadata.$type, CreateJobMetadata);

function createBaseCancelJobRequest(): CancelJobRequest {
  return { $type: "yandex.cloud.dataproc.v1.CancelJobRequest", clusterId: "", jobId: "" };
}

export const CancelJobRequest = {
  $type: "yandex.cloud.dataproc.v1.CancelJobRequest" as const,

  encode(message: CancelJobRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.jobId !== "") {
      writer.uint32(18).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelJobRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelJobRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): CancelJobRequest {
    return {
      $type: CancelJobRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
    };
  },

  toJSON(message: CancelJobRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CancelJobRequest>, I>>(base?: I): CancelJobRequest {
    return CancelJobRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CancelJobRequest>, I>>(object: I): CancelJobRequest {
    const message = createBaseCancelJobRequest();
    message.clusterId = object.clusterId ?? "";
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CancelJobRequest.$type, CancelJobRequest);

function createBaseListJobLogRequest(): ListJobLogRequest {
  return { $type: "yandex.cloud.dataproc.v1.ListJobLogRequest", clusterId: "", jobId: "", pageSize: 0, pageToken: "" };
}

export const ListJobLogRequest = {
  $type: "yandex.cloud.dataproc.v1.ListJobLogRequest" as const,

  encode(message: ListJobLogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.jobId !== "") {
      writer.uint32(18).string(message.jobId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListJobLogRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListJobLogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jobId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): ListJobLogRequest {
    return {
      $type: ListJobLogRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListJobLogRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListJobLogRequest>, I>>(base?: I): ListJobLogRequest {
    return ListJobLogRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListJobLogRequest>, I>>(object: I): ListJobLogRequest {
    const message = createBaseListJobLogRequest();
    message.clusterId = object.clusterId ?? "";
    message.jobId = object.jobId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListJobLogRequest.$type, ListJobLogRequest);

function createBaseListJobLogResponse(): ListJobLogResponse {
  return { $type: "yandex.cloud.dataproc.v1.ListJobLogResponse", content: "", nextPageToken: "" };
}

export const ListJobLogResponse = {
  $type: "yandex.cloud.dataproc.v1.ListJobLogResponse" as const,

  encode(message: ListJobLogResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListJobLogResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListJobLogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListJobLogResponse {
    return {
      $type: ListJobLogResponse.$type,
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListJobLogResponse): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListJobLogResponse>, I>>(base?: I): ListJobLogResponse {
    return ListJobLogResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListJobLogResponse>, I>>(object: I): ListJobLogResponse {
    const message = createBaseListJobLogResponse();
    message.content = object.content ?? "";
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListJobLogResponse.$type, ListJobLogResponse);

/** A set of methods for managing Data Proc jobs. */
export type JobServiceService = typeof JobServiceService;
export const JobServiceService = {
  /** Retrieves a list of jobs for a cluster. */
  list: {
    path: "/yandex.cloud.dataproc.v1.JobService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListJobsRequest) => Buffer.from(ListJobsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListJobsRequest.decode(value),
    responseSerialize: (value: ListJobsResponse) => Buffer.from(ListJobsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListJobsResponse.decode(value),
  },
  /** Creates a job for a cluster. */
  create: {
    path: "/yandex.cloud.dataproc.v1.JobService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateJobRequest) => Buffer.from(CreateJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateJobRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified job. */
  get: {
    path: "/yandex.cloud.dataproc.v1.JobService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetJobRequest) => Buffer.from(GetJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetJobRequest.decode(value),
    responseSerialize: (value: Job) => Buffer.from(Job.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Job.decode(value),
  },
  /** Returns a log for specified job. */
  listLog: {
    path: "/yandex.cloud.dataproc.v1.JobService/ListLog",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListJobLogRequest) => Buffer.from(ListJobLogRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListJobLogRequest.decode(value),
    responseSerialize: (value: ListJobLogResponse) => Buffer.from(ListJobLogResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListJobLogResponse.decode(value),
  },
  /** Cancels the specified Dataproc job. */
  cancel: {
    path: "/yandex.cloud.dataproc.v1.JobService/Cancel",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CancelJobRequest) => Buffer.from(CancelJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CancelJobRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface JobServiceServer extends UntypedServiceImplementation {
  /** Retrieves a list of jobs for a cluster. */
  list: handleUnaryCall<ListJobsRequest, ListJobsResponse>;
  /** Creates a job for a cluster. */
  create: handleUnaryCall<CreateJobRequest, Operation>;
  /** Returns the specified job. */
  get: handleUnaryCall<GetJobRequest, Job>;
  /** Returns a log for specified job. */
  listLog: handleUnaryCall<ListJobLogRequest, ListJobLogResponse>;
  /** Cancels the specified Dataproc job. */
  cancel: handleUnaryCall<CancelJobRequest, Operation>;
}

export interface JobServiceClient extends Client {
  /** Retrieves a list of jobs for a cluster. */
  list(
    request: ListJobsRequest,
    callback: (error: ServiceError | null, response: ListJobsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListJobsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListJobsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListJobsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListJobsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a job for a cluster. */
  create(
    request: CreateJobRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns the specified job. */
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
  /** Returns a log for specified job. */
  listLog(
    request: ListJobLogRequest,
    callback: (error: ServiceError | null, response: ListJobLogResponse) => void,
  ): ClientUnaryCall;
  listLog(
    request: ListJobLogRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListJobLogResponse) => void,
  ): ClientUnaryCall;
  listLog(
    request: ListJobLogRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListJobLogResponse) => void,
  ): ClientUnaryCall;
  /** Cancels the specified Dataproc job. */
  cancel(
    request: CancelJobRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  cancel(
    request: CancelJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  cancel(
    request: CancelJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const JobServiceClient = makeGenericClientConstructor(
  JobServiceService,
  "yandex.cloud.dataproc.v1.JobService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): JobServiceClient;
  service: typeof JobServiceService;
  serviceName: string;
};

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
