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
import {
  ApplicationInfo,
  Job,
  Job_Status,
  job_StatusFromJSON,
  job_StatusToJSON,
  SupportJob,
  SupportJob_Status,
  supportJob_StatusFromJSON,
  supportJob_StatusToJSON,
} from "./job";

export const protobufPackage = "yandex.cloud.dataproc.manager.v1";

export interface ListJobsRequest {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest";
  /** Required. ID of the cluster to list Data Proc jobs of. */
  clusterId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a `next_page_token` that can be used
   * to get the next page of results in subsequent ListJobs requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set `page_token` to the `next_page_token` returned by a previous ListJobs
   * request to get the next page of results.
   */
  pageToken: string;
  /** String that describes a display filter. */
  filter: string;
}

export interface ListJobsResponse {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse";
  /** Requested list of Data Proc jobs. */
  jobs: Job[];
  /**
   * This token allows you to get the next page of results for ListJobs requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListClusters request. Subsequent ListClusters
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateJobStatusRequest {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest";
  /** Required. ID of the Data Proc cluster. */
  clusterId: string;
  /** Required. ID of the Data Proc job to update. */
  jobId: string;
  /** Required. New status of the job. */
  status: Job_Status;
  /** Attributes of YARN application. */
  applicationInfo?: ApplicationInfo | undefined;
}

export interface UpdateJobStatusResponse {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse";
}

export interface ListSupportJobsResponse {
  $type: "yandex.cloud.dataproc.manager.v1.ListSupportJobsResponse";
  /** Requested list of Data Proc jobs. */
  jobs: SupportJob[];
  /**
   * This token allows you to get the next page of results for ListJobs requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListClusters request. Subsequent ListClusters
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateSupportJobStatusRequest {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateSupportJobStatusRequest";
  /** Required. ID of the Data Proc cluster. */
  clusterId: string;
  /** Required. ID of the Data Proc job to update. */
  jobId: string;
  /** Required. New status of the job. */
  status: SupportJob_Status;
}

export interface SaveSupportJobLogRequest {
  $type: "yandex.cloud.dataproc.manager.v1.SaveSupportJobLogRequest";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the support job. */
  jobId: string;
  /** Job output. */
  output: string;
}

export interface SaveSupportJobLogResponse {
  $type: "yandex.cloud.dataproc.manager.v1.SaveSupportJobLogResponse";
}

function createBaseListJobsRequest(): ListJobsRequest {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListJobsRequest = {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest" as const,

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
  return { $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse", jobs: [], nextPageToken: "" };
}

export const ListJobsResponse = {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse" as const,

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

function createBaseUpdateJobStatusRequest(): UpdateJobStatusRequest {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest",
    clusterId: "",
    jobId: "",
    status: 0,
    applicationInfo: undefined,
  };
}

export const UpdateJobStatusRequest = {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest" as const,

  encode(message: UpdateJobStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.jobId !== "") {
      writer.uint32(18).string(message.jobId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(message.applicationInfo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateJobStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateJobStatusRequest();
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

          message.status = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.applicationInfo = ApplicationInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateJobStatusRequest {
    return {
      $type: UpdateJobStatusRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      status: isSet(object.status) ? job_StatusFromJSON(object.status) : 0,
      applicationInfo: isSet(object.applicationInfo) ? ApplicationInfo.fromJSON(object.applicationInfo) : undefined,
    };
  },

  toJSON(message: UpdateJobStatusRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.status !== 0) {
      obj.status = job_StatusToJSON(message.status);
    }
    if (message.applicationInfo !== undefined) {
      obj.applicationInfo = ApplicationInfo.toJSON(message.applicationInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateJobStatusRequest>, I>>(base?: I): UpdateJobStatusRequest {
    return UpdateJobStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateJobStatusRequest>, I>>(object: I): UpdateJobStatusRequest {
    const message = createBaseUpdateJobStatusRequest();
    message.clusterId = object.clusterId ?? "";
    message.jobId = object.jobId ?? "";
    message.status = object.status ?? 0;
    message.applicationInfo = (object.applicationInfo !== undefined && object.applicationInfo !== null)
      ? ApplicationInfo.fromPartial(object.applicationInfo)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateJobStatusRequest.$type, UpdateJobStatusRequest);

function createBaseUpdateJobStatusResponse(): UpdateJobStatusResponse {
  return { $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse" };
}

export const UpdateJobStatusResponse = {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse" as const,

  encode(_: UpdateJobStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateJobStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateJobStatusResponse();
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

  fromJSON(_: any): UpdateJobStatusResponse {
    return { $type: UpdateJobStatusResponse.$type };
  },

  toJSON(_: UpdateJobStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateJobStatusResponse>, I>>(base?: I): UpdateJobStatusResponse {
    return UpdateJobStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateJobStatusResponse>, I>>(_: I): UpdateJobStatusResponse {
    const message = createBaseUpdateJobStatusResponse();
    return message;
  },
};

messageTypeRegistry.set(UpdateJobStatusResponse.$type, UpdateJobStatusResponse);

function createBaseListSupportJobsResponse(): ListSupportJobsResponse {
  return { $type: "yandex.cloud.dataproc.manager.v1.ListSupportJobsResponse", jobs: [], nextPageToken: "" };
}

export const ListSupportJobsResponse = {
  $type: "yandex.cloud.dataproc.manager.v1.ListSupportJobsResponse" as const,

  encode(message: ListSupportJobsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.jobs) {
      SupportJob.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSupportJobsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSupportJobsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobs.push(SupportJob.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSupportJobsResponse {
    return {
      $type: ListSupportJobsResponse.$type,
      jobs: globalThis.Array.isArray(object?.jobs) ? object.jobs.map((e: any) => SupportJob.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSupportJobsResponse): unknown {
    const obj: any = {};
    if (message.jobs?.length) {
      obj.jobs = message.jobs.map((e) => SupportJob.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSupportJobsResponse>, I>>(base?: I): ListSupportJobsResponse {
    return ListSupportJobsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSupportJobsResponse>, I>>(object: I): ListSupportJobsResponse {
    const message = createBaseListSupportJobsResponse();
    message.jobs = object.jobs?.map((e) => SupportJob.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSupportJobsResponse.$type, ListSupportJobsResponse);

function createBaseUpdateSupportJobStatusRequest(): UpdateSupportJobStatusRequest {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateSupportJobStatusRequest",
    clusterId: "",
    jobId: "",
    status: 0,
  };
}

export const UpdateSupportJobStatusRequest = {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateSupportJobStatusRequest" as const,

  encode(message: UpdateSupportJobStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.jobId !== "") {
      writer.uint32(18).string(message.jobId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSupportJobStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSupportJobStatusRequest();
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

  fromJSON(object: any): UpdateSupportJobStatusRequest {
    return {
      $type: UpdateSupportJobStatusRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      status: isSet(object.status) ? supportJob_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: UpdateSupportJobStatusRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.status !== 0) {
      obj.status = supportJob_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSupportJobStatusRequest>, I>>(base?: I): UpdateSupportJobStatusRequest {
    return UpdateSupportJobStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSupportJobStatusRequest>, I>>(
    object: I,
  ): UpdateSupportJobStatusRequest {
    const message = createBaseUpdateSupportJobStatusRequest();
    message.clusterId = object.clusterId ?? "";
    message.jobId = object.jobId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UpdateSupportJobStatusRequest.$type, UpdateSupportJobStatusRequest);

function createBaseSaveSupportJobLogRequest(): SaveSupportJobLogRequest {
  return { $type: "yandex.cloud.dataproc.manager.v1.SaveSupportJobLogRequest", clusterId: "", jobId: "", output: "" };
}

export const SaveSupportJobLogRequest = {
  $type: "yandex.cloud.dataproc.manager.v1.SaveSupportJobLogRequest" as const,

  encode(message: SaveSupportJobLogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.jobId !== "") {
      writer.uint32(18).string(message.jobId);
    }
    if (message.output !== "") {
      writer.uint32(26).string(message.output);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveSupportJobLogRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveSupportJobLogRequest();
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
          if (tag !== 26) {
            break;
          }

          message.output = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SaveSupportJobLogRequest {
    return {
      $type: SaveSupportJobLogRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      output: isSet(object.output) ? globalThis.String(object.output) : "",
    };
  },

  toJSON(message: SaveSupportJobLogRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.output !== "") {
      obj.output = message.output;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SaveSupportJobLogRequest>, I>>(base?: I): SaveSupportJobLogRequest {
    return SaveSupportJobLogRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SaveSupportJobLogRequest>, I>>(object: I): SaveSupportJobLogRequest {
    const message = createBaseSaveSupportJobLogRequest();
    message.clusterId = object.clusterId ?? "";
    message.jobId = object.jobId ?? "";
    message.output = object.output ?? "";
    return message;
  },
};

messageTypeRegistry.set(SaveSupportJobLogRequest.$type, SaveSupportJobLogRequest);

function createBaseSaveSupportJobLogResponse(): SaveSupportJobLogResponse {
  return { $type: "yandex.cloud.dataproc.manager.v1.SaveSupportJobLogResponse" };
}

export const SaveSupportJobLogResponse = {
  $type: "yandex.cloud.dataproc.manager.v1.SaveSupportJobLogResponse" as const,

  encode(_: SaveSupportJobLogResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveSupportJobLogResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveSupportJobLogResponse();
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

  fromJSON(_: any): SaveSupportJobLogResponse {
    return { $type: SaveSupportJobLogResponse.$type };
  },

  toJSON(_: SaveSupportJobLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SaveSupportJobLogResponse>, I>>(base?: I): SaveSupportJobLogResponse {
    return SaveSupportJobLogResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SaveSupportJobLogResponse>, I>>(_: I): SaveSupportJobLogResponse {
    const message = createBaseSaveSupportJobLogResponse();
    return message;
  },
};

messageTypeRegistry.set(SaveSupportJobLogResponse.$type, SaveSupportJobLogResponse);

export type JobServiceService = typeof JobServiceService;
export const JobServiceService = {
  /** Retrieves a list of jobs for Data Proc cluster. */
  listActive: {
    path: "/yandex.cloud.dataproc.manager.v1.JobService/ListActive",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListJobsRequest) => Buffer.from(ListJobsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListJobsRequest.decode(value),
    responseSerialize: (value: ListJobsResponse) => Buffer.from(ListJobsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListJobsResponse.decode(value),
  },
  /** Currently used to update Job status. */
  updateStatus: {
    path: "/yandex.cloud.dataproc.manager.v1.JobService/UpdateStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateJobStatusRequest) => Buffer.from(UpdateJobStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateJobStatusRequest.decode(value),
    responseSerialize: (value: UpdateJobStatusResponse) => Buffer.from(UpdateJobStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateJobStatusResponse.decode(value),
  },
  /** Retrieves a list of support jobs for Data Proc cluster. */
  listSupportActive: {
    path: "/yandex.cloud.dataproc.manager.v1.JobService/ListSupportActive",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListJobsRequest) => Buffer.from(ListJobsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListJobsRequest.decode(value),
    responseSerialize: (value: ListSupportJobsResponse) => Buffer.from(ListSupportJobsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSupportJobsResponse.decode(value),
  },
  /** Currently used to update support job status. */
  updateSupportStatus: {
    path: "/yandex.cloud.dataproc.manager.v1.JobService/UpdateSupportStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSupportJobStatusRequest) =>
      Buffer.from(UpdateSupportJobStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSupportJobStatusRequest.decode(value),
    responseSerialize: (value: UpdateJobStatusResponse) => Buffer.from(UpdateJobStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateJobStatusResponse.decode(value),
  },
  /** Save support job output. */
  saveSupportLog: {
    path: "/yandex.cloud.dataproc.manager.v1.JobService/SaveSupportLog",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SaveSupportJobLogRequest) => Buffer.from(SaveSupportJobLogRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SaveSupportJobLogRequest.decode(value),
    responseSerialize: (value: SaveSupportJobLogResponse) =>
      Buffer.from(SaveSupportJobLogResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SaveSupportJobLogResponse.decode(value),
  },
} as const;

export interface JobServiceServer extends UntypedServiceImplementation {
  /** Retrieves a list of jobs for Data Proc cluster. */
  listActive: handleUnaryCall<ListJobsRequest, ListJobsResponse>;
  /** Currently used to update Job status. */
  updateStatus: handleUnaryCall<UpdateJobStatusRequest, UpdateJobStatusResponse>;
  /** Retrieves a list of support jobs for Data Proc cluster. */
  listSupportActive: handleUnaryCall<ListJobsRequest, ListSupportJobsResponse>;
  /** Currently used to update support job status. */
  updateSupportStatus: handleUnaryCall<UpdateSupportJobStatusRequest, UpdateJobStatusResponse>;
  /** Save support job output. */
  saveSupportLog: handleUnaryCall<SaveSupportJobLogRequest, SaveSupportJobLogResponse>;
}

export interface JobServiceClient extends Client {
  /** Retrieves a list of jobs for Data Proc cluster. */
  listActive(
    request: ListJobsRequest,
    callback: (error: ServiceError | null, response: ListJobsResponse) => void,
  ): ClientUnaryCall;
  listActive(
    request: ListJobsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListJobsResponse) => void,
  ): ClientUnaryCall;
  listActive(
    request: ListJobsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListJobsResponse) => void,
  ): ClientUnaryCall;
  /** Currently used to update Job status. */
  updateStatus(
    request: UpdateJobStatusRequest,
    callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void,
  ): ClientUnaryCall;
  updateStatus(
    request: UpdateJobStatusRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void,
  ): ClientUnaryCall;
  updateStatus(
    request: UpdateJobStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves a list of support jobs for Data Proc cluster. */
  listSupportActive(
    request: ListJobsRequest,
    callback: (error: ServiceError | null, response: ListSupportJobsResponse) => void,
  ): ClientUnaryCall;
  listSupportActive(
    request: ListJobsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSupportJobsResponse) => void,
  ): ClientUnaryCall;
  listSupportActive(
    request: ListJobsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSupportJobsResponse) => void,
  ): ClientUnaryCall;
  /** Currently used to update support job status. */
  updateSupportStatus(
    request: UpdateSupportJobStatusRequest,
    callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void,
  ): ClientUnaryCall;
  updateSupportStatus(
    request: UpdateSupportJobStatusRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void,
  ): ClientUnaryCall;
  updateSupportStatus(
    request: UpdateSupportJobStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void,
  ): ClientUnaryCall;
  /** Save support job output. */
  saveSupportLog(
    request: SaveSupportJobLogRequest,
    callback: (error: ServiceError | null, response: SaveSupportJobLogResponse) => void,
  ): ClientUnaryCall;
  saveSupportLog(
    request: SaveSupportJobLogRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SaveSupportJobLogResponse) => void,
  ): ClientUnaryCall;
  saveSupportLog(
    request: SaveSupportJobLogRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SaveSupportJobLogResponse) => void,
  ): ClientUnaryCall;
}

export const JobServiceClient = makeGenericClientConstructor(
  JobServiceService,
  "yandex.cloud.dataproc.manager.v1.JobService",
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
