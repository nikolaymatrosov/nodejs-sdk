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
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "@yandex-cloud/core/dist/generated/yandex/cloud/access/access";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { LogGroup } from "./log_group";
import { LogGroupResource } from "./log_resource";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface GetLogGroupRequest {
  $type: "yandex.cloud.logging.v1.GetLogGroupRequest";
  /**
   * ID of the log group to return.
   *
   * To get a log group ID make a [LogGroupService.List] request.
   */
  logGroupId: string;
}

export interface GetLogGroupStatsRequest {
  $type: "yandex.cloud.logging.v1.GetLogGroupStatsRequest";
  /**
   * ID of the log group to return stats for.
   *
   * To get a log group ID make a [LogGroupService.List] request.
   */
  logGroupId: string;
}

export interface ListLogGroupsRequest {
  $type: "yandex.cloud.logging.v1.ListLogGroupsRequest";
  /**
   * Folder ID of the log groups to return.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListLogGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListLogGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters log groups listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [LogGroup.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-log-group`.
   */
  filter: string;
}

export interface ListLogGroupsResponse {
  $type: "yandex.cloud.logging.v1.ListLogGroupsResponse";
  /** List of log groups in the specified folder. */
  groups: LogGroup[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListLogGroupsRequest.page_size], use `next_page_token` as the value
   * for the [ListLogGroupsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateLogGroupRequest {
  $type: "yandex.cloud.logging.v1.CreateLogGroupRequest";
  /**
   * ID of the folder to create a log group in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the log group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the log group. */
  description: string;
  /** Log group labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * Log group entry retention period.
   *
   * Entries will be present in group during this period.
   * If specified, must be non-negative.
   * Empty or zero value is treated as no limit.
   */
  retentionPeriod?:
    | Duration
    | undefined;
  /** If specified, all log records will be written to this data stream */
  dataStream: string;
}

export interface CreateLogGroupRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.CreateLogGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateLogGroupMetadata {
  $type: "yandex.cloud.logging.v1.CreateLogGroupMetadata";
  /** ID of the log group being created. */
  logGroupId: string;
}

export interface UpdateLogGroupRequest {
  $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest";
  /**
   * ID of the log group to update.
   *
   * To get a log group ID make a [LogGroupService.List] request.
   */
  logGroupId: string;
  /** Field mask that specifies which attributes of the function should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name of the log group.
   * The name must be unique within the folder.
   */
  name: string;
  /** New Description of the log group. */
  description: string;
  /** New log group labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * New log group entry retention period.
   *
   * Entries will be present in group during this period.
   * If specified, must be non-negative.
   * Empty or zero value is treated as no limit.
   */
  retentionPeriod?:
    | Duration
    | undefined;
  /** If specified, log records will be written to this data stream */
  dataStream: string;
}

export interface UpdateLogGroupRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateLogGroupMetadata {
  $type: "yandex.cloud.logging.v1.UpdateLogGroupMetadata";
  /** ID of the log group being updated. */
  logGroupId: string;
}

export interface DeleteLogGroupRequest {
  $type: "yandex.cloud.logging.v1.DeleteLogGroupRequest";
  /**
   * ID of the log group to delete.
   *
   * To get a log group ID make a [LogGroupService.List] request.
   */
  logGroupId: string;
}

export interface DeleteLogGroupMetadata {
  $type: "yandex.cloud.logging.v1.DeleteLogGroupMetadata";
  /** ID of the log group being deleted. */
  logGroupId: string;
}

export interface ListResourcesRequest {
  $type: "yandex.cloud.logging.v1.ListResourcesRequest";
  /**
   * ID of the log group to list resources for.
   *
   * To get a log group ID make a [LogGroupService.List] request.
   */
  logGroupId: string;
  /**
   * Resource type to return resources for.
   *
   * If not specified, [ListResourcesResponse] will contain information about all resource types.
   */
  type: string;
}

export interface ListResourcesResponse {
  $type: "yandex.cloud.logging.v1.ListResourcesResponse";
  /** List of resources present in log group. */
  resources: LogGroupResource[];
}

export interface ListOperationsRequest {
  $type: "yandex.cloud.logging.v1.ListOperationsRequest";
  /**
   * ID of the log group to list operations for.
   *
   * To get a log group ID make a [LogGroupService.List] request.
   */
  logGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can be applied to the [operation.Operation.description], [operation.Operation.created_at], [operation.Operation.modified_at], [operation.Operation.created_by], [operation.Operation.done] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Examples of a filter: `done=false`, `created_by='John.Doe'`.
   */
  filter: string;
}

export interface ListOperationsResponse {
  $type: "yandex.cloud.logging.v1.ListOperationsResponse";
  /** List of operations for the specified log group. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface GetLogGroupStatsResponse {
  $type: "yandex.cloud.logging.v1.GetLogGroupStatsResponse";
  /** Log group ID the stats are returned for. */
  logGroupId: string;
  /** Size of data in log group in bytes. */
  bytes: number;
  /** Amount of records in log group. */
  records: number;
}

function createBaseGetLogGroupRequest(): GetLogGroupRequest {
  return { $type: "yandex.cloud.logging.v1.GetLogGroupRequest", logGroupId: "" };
}

export const GetLogGroupRequest = {
  $type: "yandex.cloud.logging.v1.GetLogGroupRequest" as const,

  encode(message: GetLogGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLogGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLogGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLogGroupRequest {
    return {
      $type: GetLogGroupRequest.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
    };
  },

  toJSON(message: GetLogGroupRequest): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLogGroupRequest>, I>>(base?: I): GetLogGroupRequest {
    return GetLogGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLogGroupRequest>, I>>(object: I): GetLogGroupRequest {
    const message = createBaseGetLogGroupRequest();
    message.logGroupId = object.logGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLogGroupRequest.$type, GetLogGroupRequest);

function createBaseGetLogGroupStatsRequest(): GetLogGroupStatsRequest {
  return { $type: "yandex.cloud.logging.v1.GetLogGroupStatsRequest", logGroupId: "" };
}

export const GetLogGroupStatsRequest = {
  $type: "yandex.cloud.logging.v1.GetLogGroupStatsRequest" as const,

  encode(message: GetLogGroupStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLogGroupStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLogGroupStatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLogGroupStatsRequest {
    return {
      $type: GetLogGroupStatsRequest.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
    };
  },

  toJSON(message: GetLogGroupStatsRequest): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLogGroupStatsRequest>, I>>(base?: I): GetLogGroupStatsRequest {
    return GetLogGroupStatsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLogGroupStatsRequest>, I>>(object: I): GetLogGroupStatsRequest {
    const message = createBaseGetLogGroupStatsRequest();
    message.logGroupId = object.logGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLogGroupStatsRequest.$type, GetLogGroupStatsRequest);

function createBaseListLogGroupsRequest(): ListLogGroupsRequest {
  return {
    $type: "yandex.cloud.logging.v1.ListLogGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListLogGroupsRequest = {
  $type: "yandex.cloud.logging.v1.ListLogGroupsRequest" as const,

  encode(message: ListLogGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
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

  fromJSON(object: any): ListLogGroupsRequest {
    return {
      $type: ListLogGroupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListLogGroupsRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
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

  create<I extends Exact<DeepPartial<ListLogGroupsRequest>, I>>(base?: I): ListLogGroupsRequest {
    return ListLogGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLogGroupsRequest>, I>>(object: I): ListLogGroupsRequest {
    const message = createBaseListLogGroupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLogGroupsRequest.$type, ListLogGroupsRequest);

function createBaseListLogGroupsResponse(): ListLogGroupsResponse {
  return { $type: "yandex.cloud.logging.v1.ListLogGroupsResponse", groups: [], nextPageToken: "" };
}

export const ListLogGroupsResponse = {
  $type: "yandex.cloud.logging.v1.ListLogGroupsResponse" as const,

  encode(message: ListLogGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      LogGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(LogGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListLogGroupsResponse {
    return {
      $type: ListLogGroupsResponse.$type,
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => LogGroup.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListLogGroupsResponse): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => LogGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLogGroupsResponse>, I>>(base?: I): ListLogGroupsResponse {
    return ListLogGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLogGroupsResponse>, I>>(object: I): ListLogGroupsResponse {
    const message = createBaseListLogGroupsResponse();
    message.groups = object.groups?.map((e) => LogGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLogGroupsResponse.$type, ListLogGroupsResponse);

function createBaseCreateLogGroupRequest(): CreateLogGroupRequest {
  return {
    $type: "yandex.cloud.logging.v1.CreateLogGroupRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    retentionPeriod: undefined,
    dataStream: "",
  };
}

export const CreateLogGroupRequest = {
  $type: "yandex.cloud.logging.v1.CreateLogGroupRequest" as const,

  encode(message: CreateLogGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateLogGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.logging.v1.CreateLogGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.retentionPeriod !== undefined) {
      Duration.encode(message.retentionPeriod, writer.uint32(42).fork()).ldelim();
    }
    if (message.dataStream !== "") {
      writer.uint32(50).string(message.dataStream);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLogGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLogGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
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

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = CreateLogGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.retentionPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dataStream = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLogGroupRequest {
    return {
      $type: CreateLogGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      retentionPeriod: isSet(object.retentionPeriod) ? Duration.fromJSON(object.retentionPeriod) : undefined,
      dataStream: isSet(object.dataStream) ? globalThis.String(object.dataStream) : "",
    };
  },

  toJSON(message: CreateLogGroupRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
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
    if (message.retentionPeriod !== undefined) {
      obj.retentionPeriod = Duration.toJSON(message.retentionPeriod);
    }
    if (message.dataStream !== "") {
      obj.dataStream = message.dataStream;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLogGroupRequest>, I>>(base?: I): CreateLogGroupRequest {
    return CreateLogGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLogGroupRequest>, I>>(object: I): CreateLogGroupRequest {
    const message = createBaseCreateLogGroupRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.retentionPeriod = (object.retentionPeriod !== undefined && object.retentionPeriod !== null)
      ? Duration.fromPartial(object.retentionPeriod)
      : undefined;
    message.dataStream = object.dataStream ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLogGroupRequest.$type, CreateLogGroupRequest);

function createBaseCreateLogGroupRequest_LabelsEntry(): CreateLogGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.logging.v1.CreateLogGroupRequest.LabelsEntry", key: "", value: "" };
}

export const CreateLogGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.CreateLogGroupRequest.LabelsEntry" as const,

  encode(message: CreateLogGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLogGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLogGroupRequest_LabelsEntry();
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

  fromJSON(object: any): CreateLogGroupRequest_LabelsEntry {
    return {
      $type: CreateLogGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateLogGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLogGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateLogGroupRequest_LabelsEntry {
    return CreateLogGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLogGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateLogGroupRequest_LabelsEntry {
    const message = createBaseCreateLogGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLogGroupRequest_LabelsEntry.$type, CreateLogGroupRequest_LabelsEntry);

function createBaseCreateLogGroupMetadata(): CreateLogGroupMetadata {
  return { $type: "yandex.cloud.logging.v1.CreateLogGroupMetadata", logGroupId: "" };
}

export const CreateLogGroupMetadata = {
  $type: "yandex.cloud.logging.v1.CreateLogGroupMetadata" as const,

  encode(message: CreateLogGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLogGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLogGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLogGroupMetadata {
    return {
      $type: CreateLogGroupMetadata.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
    };
  },

  toJSON(message: CreateLogGroupMetadata): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLogGroupMetadata>, I>>(base?: I): CreateLogGroupMetadata {
    return CreateLogGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLogGroupMetadata>, I>>(object: I): CreateLogGroupMetadata {
    const message = createBaseCreateLogGroupMetadata();
    message.logGroupId = object.logGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLogGroupMetadata.$type, CreateLogGroupMetadata);

function createBaseUpdateLogGroupRequest(): UpdateLogGroupRequest {
  return {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest",
    logGroupId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    retentionPeriod: undefined,
    dataStream: "",
  };
}

export const UpdateLogGroupRequest = {
  $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest" as const,

  encode(message: UpdateLogGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateLogGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.retentionPeriod !== undefined) {
      Duration.encode(message.retentionPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.dataStream !== "") {
      writer.uint32(58).string(message.dataStream);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLogGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLogGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
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

          const entry5 = UpdateLogGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.retentionPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.dataStream = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateLogGroupRequest {
    return {
      $type: UpdateLogGroupRequest.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      retentionPeriod: isSet(object.retentionPeriod) ? Duration.fromJSON(object.retentionPeriod) : undefined,
      dataStream: isSet(object.dataStream) ? globalThis.String(object.dataStream) : "",
    };
  },

  toJSON(message: UpdateLogGroupRequest): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
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
    if (message.retentionPeriod !== undefined) {
      obj.retentionPeriod = Duration.toJSON(message.retentionPeriod);
    }
    if (message.dataStream !== "") {
      obj.dataStream = message.dataStream;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateLogGroupRequest>, I>>(base?: I): UpdateLogGroupRequest {
    return UpdateLogGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLogGroupRequest>, I>>(object: I): UpdateLogGroupRequest {
    const message = createBaseUpdateLogGroupRequest();
    message.logGroupId = object.logGroupId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.retentionPeriod = (object.retentionPeriod !== undefined && object.retentionPeriod !== null)
      ? Duration.fromPartial(object.retentionPeriod)
      : undefined;
    message.dataStream = object.dataStream ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateLogGroupRequest.$type, UpdateLogGroupRequest);

function createBaseUpdateLogGroupRequest_LabelsEntry(): UpdateLogGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateLogGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest.LabelsEntry" as const,

  encode(message: UpdateLogGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLogGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLogGroupRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateLogGroupRequest_LabelsEntry {
    return {
      $type: UpdateLogGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateLogGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateLogGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateLogGroupRequest_LabelsEntry {
    return UpdateLogGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLogGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateLogGroupRequest_LabelsEntry {
    const message = createBaseUpdateLogGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateLogGroupRequest_LabelsEntry.$type, UpdateLogGroupRequest_LabelsEntry);

function createBaseUpdateLogGroupMetadata(): UpdateLogGroupMetadata {
  return { $type: "yandex.cloud.logging.v1.UpdateLogGroupMetadata", logGroupId: "" };
}

export const UpdateLogGroupMetadata = {
  $type: "yandex.cloud.logging.v1.UpdateLogGroupMetadata" as const,

  encode(message: UpdateLogGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLogGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLogGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateLogGroupMetadata {
    return {
      $type: UpdateLogGroupMetadata.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
    };
  },

  toJSON(message: UpdateLogGroupMetadata): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateLogGroupMetadata>, I>>(base?: I): UpdateLogGroupMetadata {
    return UpdateLogGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLogGroupMetadata>, I>>(object: I): UpdateLogGroupMetadata {
    const message = createBaseUpdateLogGroupMetadata();
    message.logGroupId = object.logGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateLogGroupMetadata.$type, UpdateLogGroupMetadata);

function createBaseDeleteLogGroupRequest(): DeleteLogGroupRequest {
  return { $type: "yandex.cloud.logging.v1.DeleteLogGroupRequest", logGroupId: "" };
}

export const DeleteLogGroupRequest = {
  $type: "yandex.cloud.logging.v1.DeleteLogGroupRequest" as const,

  encode(message: DeleteLogGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLogGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLogGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLogGroupRequest {
    return {
      $type: DeleteLogGroupRequest.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
    };
  },

  toJSON(message: DeleteLogGroupRequest): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLogGroupRequest>, I>>(base?: I): DeleteLogGroupRequest {
    return DeleteLogGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLogGroupRequest>, I>>(object: I): DeleteLogGroupRequest {
    const message = createBaseDeleteLogGroupRequest();
    message.logGroupId = object.logGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLogGroupRequest.$type, DeleteLogGroupRequest);

function createBaseDeleteLogGroupMetadata(): DeleteLogGroupMetadata {
  return { $type: "yandex.cloud.logging.v1.DeleteLogGroupMetadata", logGroupId: "" };
}

export const DeleteLogGroupMetadata = {
  $type: "yandex.cloud.logging.v1.DeleteLogGroupMetadata" as const,

  encode(message: DeleteLogGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLogGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLogGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLogGroupMetadata {
    return {
      $type: DeleteLogGroupMetadata.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
    };
  },

  toJSON(message: DeleteLogGroupMetadata): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLogGroupMetadata>, I>>(base?: I): DeleteLogGroupMetadata {
    return DeleteLogGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLogGroupMetadata>, I>>(object: I): DeleteLogGroupMetadata {
    const message = createBaseDeleteLogGroupMetadata();
    message.logGroupId = object.logGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLogGroupMetadata.$type, DeleteLogGroupMetadata);

function createBaseListResourcesRequest(): ListResourcesRequest {
  return { $type: "yandex.cloud.logging.v1.ListResourcesRequest", logGroupId: "", type: "" };
}

export const ListResourcesRequest = {
  $type: "yandex.cloud.logging.v1.ListResourcesRequest" as const,

  encode(message: ListResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResourcesRequest {
    return {
      $type: ListResourcesRequest.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
    };
  },

  toJSON(message: ListResourcesRequest): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(base?: I): ListResourcesRequest {
    return ListResourcesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(object: I): ListResourcesRequest {
    const message = createBaseListResourcesRequest();
    message.logGroupId = object.logGroupId ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcesRequest.$type, ListResourcesRequest);

function createBaseListResourcesResponse(): ListResourcesResponse {
  return { $type: "yandex.cloud.logging.v1.ListResourcesResponse", resources: [] };
}

export const ListResourcesResponse = {
  $type: "yandex.cloud.logging.v1.ListResourcesResponse" as const,

  encode(message: ListResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      LogGroupResource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources.push(LogGroupResource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResourcesResponse {
    return {
      $type: ListResourcesResponse.$type,
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => LogGroupResource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => LogGroupResource.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourcesResponse>, I>>(base?: I): ListResourcesResponse {
    return ListResourcesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourcesResponse>, I>>(object: I): ListResourcesResponse {
    const message = createBaseListResourcesResponse();
    message.resources = object.resources?.map((e) => LogGroupResource.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListResourcesResponse.$type, ListResourcesResponse);

function createBaseListOperationsRequest(): ListOperationsRequest {
  return {
    $type: "yandex.cloud.logging.v1.ListOperationsRequest",
    logGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListOperationsRequest = {
  $type: "yandex.cloud.logging.v1.ListOperationsRequest" as const,

  encode(message: ListOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
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

  fromJSON(object: any): ListOperationsRequest {
    return {
      $type: ListOperationsRequest.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListOperationsRequest): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
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

  create<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(base?: I): ListOperationsRequest {
    return ListOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(object: I): ListOperationsRequest {
    const message = createBaseListOperationsRequest();
    message.logGroupId = object.logGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOperationsRequest.$type, ListOperationsRequest);

function createBaseListOperationsResponse(): ListOperationsResponse {
  return { $type: "yandex.cloud.logging.v1.ListOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListOperationsResponse = {
  $type: "yandex.cloud.logging.v1.ListOperationsResponse" as const,

  encode(message: ListOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operations.push(Operation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListOperationsResponse {
    return {
      $type: ListOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(base?: I): ListOperationsResponse {
    return ListOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(object: I): ListOperationsResponse {
    const message = createBaseListOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOperationsResponse.$type, ListOperationsResponse);

function createBaseGetLogGroupStatsResponse(): GetLogGroupStatsResponse {
  return { $type: "yandex.cloud.logging.v1.GetLogGroupStatsResponse", logGroupId: "", bytes: 0, records: 0 };
}

export const GetLogGroupStatsResponse = {
  $type: "yandex.cloud.logging.v1.GetLogGroupStatsResponse" as const,

  encode(message: GetLogGroupStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    if (message.bytes !== 0) {
      writer.uint32(16).int64(message.bytes);
    }
    if (message.records !== 0) {
      writer.uint32(24).int64(message.records);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLogGroupStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLogGroupStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bytes = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.records = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLogGroupStatsResponse {
    return {
      $type: GetLogGroupStatsResponse.$type,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      bytes: isSet(object.bytes) ? globalThis.Number(object.bytes) : 0,
      records: isSet(object.records) ? globalThis.Number(object.records) : 0,
    };
  },

  toJSON(message: GetLogGroupStatsResponse): unknown {
    const obj: any = {};
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.bytes !== 0) {
      obj.bytes = Math.round(message.bytes);
    }
    if (message.records !== 0) {
      obj.records = Math.round(message.records);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLogGroupStatsResponse>, I>>(base?: I): GetLogGroupStatsResponse {
    return GetLogGroupStatsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLogGroupStatsResponse>, I>>(object: I): GetLogGroupStatsResponse {
    const message = createBaseGetLogGroupStatsResponse();
    message.logGroupId = object.logGroupId ?? "";
    message.bytes = object.bytes ?? 0;
    message.records = object.records ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetLogGroupStatsResponse.$type, GetLogGroupStatsResponse);

/** A set of methods for managing log groups. */
export type LogGroupServiceService = typeof LogGroupServiceService;
export const LogGroupServiceService = {
  /**
   * Returns the specified log group.
   *
   * To get the list of all available log groups, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.logging.v1.LogGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLogGroupRequest) => Buffer.from(GetLogGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLogGroupRequest.decode(value),
    responseSerialize: (value: LogGroup) => Buffer.from(LogGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LogGroup.decode(value),
  },
  /** Returns stats for the specified log group. */
  stats: {
    path: "/yandex.cloud.logging.v1.LogGroupService/Stats",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLogGroupStatsRequest) => Buffer.from(GetLogGroupStatsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLogGroupStatsRequest.decode(value),
    responseSerialize: (value: GetLogGroupStatsResponse) =>
      Buffer.from(GetLogGroupStatsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetLogGroupStatsResponse.decode(value),
  },
  /** Retrieves the list of log groups in the specified folder. */
  list: {
    path: "/yandex.cloud.logging.v1.LogGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLogGroupsRequest) => Buffer.from(ListLogGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListLogGroupsRequest.decode(value),
    responseSerialize: (value: ListLogGroupsResponse) => Buffer.from(ListLogGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListLogGroupsResponse.decode(value),
  },
  /** Creates a log group in the specified folder. */
  create: {
    path: "/yandex.cloud.logging.v1.LogGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLogGroupRequest) => Buffer.from(CreateLogGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLogGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified log group. */
  update: {
    path: "/yandex.cloud.logging.v1.LogGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateLogGroupRequest) => Buffer.from(UpdateLogGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateLogGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified log group. */
  delete: {
    path: "/yandex.cloud.logging.v1.LogGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteLogGroupRequest) => Buffer.from(DeleteLogGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteLogGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the resources (type and IDs) in the specified log group. */
  listResources: {
    path: "/yandex.cloud.logging.v1.LogGroupService/ListResources",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListResourcesRequest) => Buffer.from(ListResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListResourcesRequest.decode(value),
    responseSerialize: (value: ListResourcesResponse) => Buffer.from(ListResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListResourcesResponse.decode(value),
  },
  /** Lists operations for the specified log group. */
  listOperations: {
    path: "/yandex.cloud.logging.v1.LogGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListOperationsRequest) => Buffer.from(ListOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListOperationsRequest.decode(value),
    responseSerialize: (value: ListOperationsResponse) => Buffer.from(ListOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified log group. */
  listAccessBindings: {
    path: "/yandex.cloud.logging.v1.LogGroupService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified log group. */
  setAccessBindings: {
    path: "/yandex.cloud.logging.v1.LogGroupService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified log group. */
  updateAccessBindings: {
    path: "/yandex.cloud.logging.v1.LogGroupService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface LogGroupServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified log group.
   *
   * To get the list of all available log groups, make a [List] request.
   */
  get: handleUnaryCall<GetLogGroupRequest, LogGroup>;
  /** Returns stats for the specified log group. */
  stats: handleUnaryCall<GetLogGroupStatsRequest, GetLogGroupStatsResponse>;
  /** Retrieves the list of log groups in the specified folder. */
  list: handleUnaryCall<ListLogGroupsRequest, ListLogGroupsResponse>;
  /** Creates a log group in the specified folder. */
  create: handleUnaryCall<CreateLogGroupRequest, Operation>;
  /** Updates the specified log group. */
  update: handleUnaryCall<UpdateLogGroupRequest, Operation>;
  /** Deletes the specified log group. */
  delete: handleUnaryCall<DeleteLogGroupRequest, Operation>;
  /** Retrieves the resources (type and IDs) in the specified log group. */
  listResources: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
  /** Lists operations for the specified log group. */
  listOperations: handleUnaryCall<ListOperationsRequest, ListOperationsResponse>;
  /** Lists existing access bindings for the specified log group. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the specified log group. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified log group. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface LogGroupServiceClient extends Client {
  /**
   * Returns the specified log group.
   *
   * To get the list of all available log groups, make a [List] request.
   */
  get(request: GetLogGroupRequest, callback: (error: ServiceError | null, response: LogGroup) => void): ClientUnaryCall;
  get(
    request: GetLogGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LogGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetLogGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LogGroup) => void,
  ): ClientUnaryCall;
  /** Returns stats for the specified log group. */
  stats(
    request: GetLogGroupStatsRequest,
    callback: (error: ServiceError | null, response: GetLogGroupStatsResponse) => void,
  ): ClientUnaryCall;
  stats(
    request: GetLogGroupStatsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetLogGroupStatsResponse) => void,
  ): ClientUnaryCall;
  stats(
    request: GetLogGroupStatsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetLogGroupStatsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of log groups in the specified folder. */
  list(
    request: ListLogGroupsRequest,
    callback: (error: ServiceError | null, response: ListLogGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLogGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListLogGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLogGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListLogGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a log group in the specified folder. */
  create(
    request: CreateLogGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLogGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLogGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified log group. */
  update(
    request: UpdateLogGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLogGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLogGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified log group. */
  delete(
    request: DeleteLogGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLogGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLogGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the resources (type and IDs) in the specified log group. */
  listResources(
    request: ListResourcesRequest,
    callback: (error: ServiceError | null, response: ListResourcesResponse) => void,
  ): ClientUnaryCall;
  listResources(
    request: ListResourcesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListResourcesResponse) => void,
  ): ClientUnaryCall;
  listResources(
    request: ListResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListResourcesResponse) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified log group. */
  listOperations(
    request: ListOperationsRequest,
    callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified log group. */
  listAccessBindings(
    request: ListAccessBindingsRequest,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  /** Sets access bindings for the specified log group. */
  setAccessBindings(
    request: SetAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates access bindings for the specified log group. */
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const LogGroupServiceClient = makeGenericClientConstructor(
  LogGroupServiceService,
  "yandex.cloud.logging.v1.LogGroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LogGroupServiceClient;
  service: typeof LogGroupServiceService;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
