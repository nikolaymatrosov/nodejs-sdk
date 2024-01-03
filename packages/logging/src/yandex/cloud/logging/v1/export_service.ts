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
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
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
import { Export, ExportParams } from "./export";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface RunExportRequest {
  $type: "yandex.cloud.logging.v1.RunExportRequest";
  groupId: string;
  sinkId: string;
  params?: ExportParams | undefined;
  resultFilename: string;
  since?: Date | undefined;
  until?: Date | undefined;
}

export interface RunExportDetails {
  $type: "yandex.cloud.logging.v1.RunExportDetails";
  groupId: string;
  sinkId: string;
  params?: ExportParams | undefined;
  resultFilename: string;
  since?: Date | undefined;
  until?: Date | undefined;
}

export interface RunExportMetadata {
  $type: "yandex.cloud.logging.v1.RunExportMetadata";
  groupId: string;
  sinkId: string;
  resultFilename: string;
}

export interface GetExportRequest {
  $type: "yandex.cloud.logging.v1.GetExportRequest";
  /**
   * ID of the export to return.
   *
   * To get a export ID make a [ExportService.List] request.
   */
  exportId: string;
}

export interface ListExportsRequest {
  $type: "yandex.cloud.logging.v1.ListExportsRequest";
  /**
   * Folder ID of the exports to return.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListExportssResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListExportsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters exports listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Export.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name="my-export"`.
   */
  filter: string;
}

export interface ListExportsResponse {
  $type: "yandex.cloud.logging.v1.ListExportsResponse";
  /** List of exports in the specified folder. */
  exports: Export[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListExportsRequest.page_size], use `next_page_token` as the value
   * for the [ListExportsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateExportRequest {
  $type: "yandex.cloud.logging.v1.CreateExportRequest";
  /**
   * ID of the folder to create a export in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the export.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the export. */
  description: string;
  /** Export labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Logging Group ID logs exported from */
  groupId: string;
  /** Logging Sink ID logs exported to */
  sinkId: string;
  /** Parameters for logs filtration */
  params?: ExportParams | undefined;
}

export interface CreateExportRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.CreateExportRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateExportMetadata {
  $type: "yandex.cloud.logging.v1.CreateExportMetadata";
  /** ID of the export being created. */
  exportId: string;
}

export interface UpdateExportRequest {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest";
  /**
   * ID of the export to update.
   *
   * To get a export ID make a [ExportService.List] request.
   */
  exportId: string;
  /** Field mask that specifies which attributes of the function should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name of the export.
   * The name must be unique within the folder.
   */
  name: string;
  /** New Description of the export. */
  description: string;
  /** New export labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** New logging Group ID logs exported from */
  groupId: string;
  /** New logging Sink ID logs exported to */
  sinkId: string;
  /** New parameters for logs filtration */
  params?: ExportParams | undefined;
}

export interface UpdateExportRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateExportMetadata {
  $type: "yandex.cloud.logging.v1.UpdateExportMetadata";
  /** ID of the export being updated. */
  exportId: string;
}

export interface DeleteExportRequest {
  $type: "yandex.cloud.logging.v1.DeleteExportRequest";
  /**
   * ID of the export to delete.
   *
   * To get a export ID make a [ExportService.List] request.
   */
  exportId: string;
}

export interface DeleteExportMetadata {
  $type: "yandex.cloud.logging.v1.DeleteExportMetadata";
  /** ID of the export being deleted. */
  exportId: string;
}

export interface ListExportOperationsRequest {
  $type: "yandex.cloud.logging.v1.ListExportOperationsRequest";
  /**
   * ID of the export to list operations for.
   *
   * To get a export ID make a [ExportService.List] request.
   */
  exportId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListExportOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListExportOperationsResponse.next_page_token] returned by a previous list request.
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

export interface ListExportOperationsResponse {
  $type: "yandex.cloud.logging.v1.ListExportOperationsResponse";
  /** List of operations for the specified export. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListOExportperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListExportOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseRunExportRequest(): RunExportRequest {
  return {
    $type: "yandex.cloud.logging.v1.RunExportRequest",
    groupId: "",
    sinkId: "",
    params: undefined,
    resultFilename: "",
    since: undefined,
    until: undefined,
  };
}

export const RunExportRequest = {
  $type: "yandex.cloud.logging.v1.RunExportRequest" as const,

  encode(message: RunExportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.resultFilename !== "") {
      writer.uint32(34).string(message.resultFilename);
    }
    if (message.since !== undefined) {
      Timestamp.encode(toTimestamp(message.since), writer.uint32(42).fork()).ldelim();
    }
    if (message.until !== undefined) {
      Timestamp.encode(toTimestamp(message.until), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRunExportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sinkId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.params = ExportParams.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resultFilename = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.since = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.until = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RunExportRequest {
    return {
      $type: RunExportRequest.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      params: isSet(object.params) ? ExportParams.fromJSON(object.params) : undefined,
      resultFilename: isSet(object.resultFilename) ? globalThis.String(object.resultFilename) : "",
      since: isSet(object.since) ? fromJsonTimestamp(object.since) : undefined,
      until: isSet(object.until) ? fromJsonTimestamp(object.until) : undefined,
    };
  },

  toJSON(message: RunExportRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    if (message.params !== undefined) {
      obj.params = ExportParams.toJSON(message.params);
    }
    if (message.resultFilename !== "") {
      obj.resultFilename = message.resultFilename;
    }
    if (message.since !== undefined) {
      obj.since = message.since.toISOString();
    }
    if (message.until !== undefined) {
      obj.until = message.until.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RunExportRequest>, I>>(base?: I): RunExportRequest {
    return RunExportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RunExportRequest>, I>>(object: I): RunExportRequest {
    const message = createBaseRunExportRequest();
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ExportParams.fromPartial(object.params)
      : undefined;
    message.resultFilename = object.resultFilename ?? "";
    message.since = object.since ?? undefined;
    message.until = object.until ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RunExportRequest.$type, RunExportRequest);

function createBaseRunExportDetails(): RunExportDetails {
  return {
    $type: "yandex.cloud.logging.v1.RunExportDetails",
    groupId: "",
    sinkId: "",
    params: undefined,
    resultFilename: "",
    since: undefined,
    until: undefined,
  };
}

export const RunExportDetails = {
  $type: "yandex.cloud.logging.v1.RunExportDetails" as const,

  encode(message: RunExportDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.resultFilename !== "") {
      writer.uint32(34).string(message.resultFilename);
    }
    if (message.since !== undefined) {
      Timestamp.encode(toTimestamp(message.since), writer.uint32(42).fork()).ldelim();
    }
    if (message.until !== undefined) {
      Timestamp.encode(toTimestamp(message.until), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRunExportDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sinkId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.params = ExportParams.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resultFilename = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.since = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.until = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RunExportDetails {
    return {
      $type: RunExportDetails.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      params: isSet(object.params) ? ExportParams.fromJSON(object.params) : undefined,
      resultFilename: isSet(object.resultFilename) ? globalThis.String(object.resultFilename) : "",
      since: isSet(object.since) ? fromJsonTimestamp(object.since) : undefined,
      until: isSet(object.until) ? fromJsonTimestamp(object.until) : undefined,
    };
  },

  toJSON(message: RunExportDetails): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    if (message.params !== undefined) {
      obj.params = ExportParams.toJSON(message.params);
    }
    if (message.resultFilename !== "") {
      obj.resultFilename = message.resultFilename;
    }
    if (message.since !== undefined) {
      obj.since = message.since.toISOString();
    }
    if (message.until !== undefined) {
      obj.until = message.until.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RunExportDetails>, I>>(base?: I): RunExportDetails {
    return RunExportDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RunExportDetails>, I>>(object: I): RunExportDetails {
    const message = createBaseRunExportDetails();
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ExportParams.fromPartial(object.params)
      : undefined;
    message.resultFilename = object.resultFilename ?? "";
    message.since = object.since ?? undefined;
    message.until = object.until ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RunExportDetails.$type, RunExportDetails);

function createBaseRunExportMetadata(): RunExportMetadata {
  return { $type: "yandex.cloud.logging.v1.RunExportMetadata", groupId: "", sinkId: "", resultFilename: "" };
}

export const RunExportMetadata = {
  $type: "yandex.cloud.logging.v1.RunExportMetadata" as const,

  encode(message: RunExportMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.resultFilename !== "") {
      writer.uint32(26).string(message.resultFilename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRunExportMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sinkId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resultFilename = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RunExportMetadata {
    return {
      $type: RunExportMetadata.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      resultFilename: isSet(object.resultFilename) ? globalThis.String(object.resultFilename) : "",
    };
  },

  toJSON(message: RunExportMetadata): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    if (message.resultFilename !== "") {
      obj.resultFilename = message.resultFilename;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RunExportMetadata>, I>>(base?: I): RunExportMetadata {
    return RunExportMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RunExportMetadata>, I>>(object: I): RunExportMetadata {
    const message = createBaseRunExportMetadata();
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.resultFilename = object.resultFilename ?? "";
    return message;
  },
};

messageTypeRegistry.set(RunExportMetadata.$type, RunExportMetadata);

function createBaseGetExportRequest(): GetExportRequest {
  return { $type: "yandex.cloud.logging.v1.GetExportRequest", exportId: "" };
}

export const GetExportRequest = {
  $type: "yandex.cloud.logging.v1.GetExportRequest" as const,

  encode(message: GetExportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exportId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExportRequest {
    return {
      $type: GetExportRequest.$type,
      exportId: isSet(object.exportId) ? globalThis.String(object.exportId) : "",
    };
  },

  toJSON(message: GetExportRequest): unknown {
    const obj: any = {};
    if (message.exportId !== "") {
      obj.exportId = message.exportId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExportRequest>, I>>(base?: I): GetExportRequest {
    return GetExportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExportRequest>, I>>(object: I): GetExportRequest {
    const message = createBaseGetExportRequest();
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetExportRequest.$type, GetExportRequest);

function createBaseListExportsRequest(): ListExportsRequest {
  return { $type: "yandex.cloud.logging.v1.ListExportsRequest", folderId: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListExportsRequest = {
  $type: "yandex.cloud.logging.v1.ListExportsRequest" as const,

  encode(message: ListExportsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExportsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExportsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
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
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ListExportsRequest {
    return {
      $type: ListExportsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListExportsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListExportsRequest>, I>>(base?: I): ListExportsRequest {
    return ListExportsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListExportsRequest>, I>>(object: I): ListExportsRequest {
    const message = createBaseListExportsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExportsRequest.$type, ListExportsRequest);

function createBaseListExportsResponse(): ListExportsResponse {
  return { $type: "yandex.cloud.logging.v1.ListExportsResponse", exports: [], nextPageToken: "" };
}

export const ListExportsResponse = {
  $type: "yandex.cloud.logging.v1.ListExportsResponse" as const,

  encode(message: ListExportsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exports) {
      Export.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExportsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exports.push(Export.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListExportsResponse {
    return {
      $type: ListExportsResponse.$type,
      exports: globalThis.Array.isArray(object?.exports) ? object.exports.map((e: any) => Export.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListExportsResponse): unknown {
    const obj: any = {};
    if (message.exports?.length) {
      obj.exports = message.exports.map((e) => Export.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListExportsResponse>, I>>(base?: I): ListExportsResponse {
    return ListExportsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListExportsResponse>, I>>(object: I): ListExportsResponse {
    const message = createBaseListExportsResponse();
    message.exports = object.exports?.map((e) => Export.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExportsResponse.$type, ListExportsResponse);

function createBaseCreateExportRequest(): CreateExportRequest {
  return {
    $type: "yandex.cloud.logging.v1.CreateExportRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    groupId: "",
    sinkId: "",
    params: undefined,
  };
}

export const CreateExportRequest = {
  $type: "yandex.cloud.logging.v1.CreateExportRequest" as const,

  encode(message: CreateExportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateExportRequest_LabelsEntry.encode({
        $type: "yandex.cloud.logging.v1.CreateExportRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.groupId !== "") {
      writer.uint32(42).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(50).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExportRequest();
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

          const entry4 = CreateExportRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sinkId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.params = ExportParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateExportRequest {
    return {
      $type: CreateExportRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      params: isSet(object.params) ? ExportParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: CreateExportRequest): unknown {
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
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    if (message.params !== undefined) {
      obj.params = ExportParams.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateExportRequest>, I>>(base?: I): CreateExportRequest {
    return CreateExportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateExportRequest>, I>>(object: I): CreateExportRequest {
    const message = createBaseCreateExportRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ExportParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateExportRequest.$type, CreateExportRequest);

function createBaseCreateExportRequest_LabelsEntry(): CreateExportRequest_LabelsEntry {
  return { $type: "yandex.cloud.logging.v1.CreateExportRequest.LabelsEntry", key: "", value: "" };
}

export const CreateExportRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.CreateExportRequest.LabelsEntry" as const,

  encode(message: CreateExportRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExportRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExportRequest_LabelsEntry();
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

  fromJSON(object: any): CreateExportRequest_LabelsEntry {
    return {
      $type: CreateExportRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateExportRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateExportRequest_LabelsEntry>, I>>(base?: I): CreateExportRequest_LabelsEntry {
    return CreateExportRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateExportRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateExportRequest_LabelsEntry {
    const message = createBaseCreateExportRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateExportRequest_LabelsEntry.$type, CreateExportRequest_LabelsEntry);

function createBaseCreateExportMetadata(): CreateExportMetadata {
  return { $type: "yandex.cloud.logging.v1.CreateExportMetadata", exportId: "" };
}

export const CreateExportMetadata = {
  $type: "yandex.cloud.logging.v1.CreateExportMetadata" as const,

  encode(message: CreateExportMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExportMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExportMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exportId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateExportMetadata {
    return {
      $type: CreateExportMetadata.$type,
      exportId: isSet(object.exportId) ? globalThis.String(object.exportId) : "",
    };
  },

  toJSON(message: CreateExportMetadata): unknown {
    const obj: any = {};
    if (message.exportId !== "") {
      obj.exportId = message.exportId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateExportMetadata>, I>>(base?: I): CreateExportMetadata {
    return CreateExportMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateExportMetadata>, I>>(object: I): CreateExportMetadata {
    const message = createBaseCreateExportMetadata();
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateExportMetadata.$type, CreateExportMetadata);

function createBaseUpdateExportRequest(): UpdateExportRequest {
  return {
    $type: "yandex.cloud.logging.v1.UpdateExportRequest",
    exportId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    groupId: "",
    sinkId: "",
    params: undefined,
  };
}

export const UpdateExportRequest = {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest" as const,

  encode(message: UpdateExportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
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
      UpdateExportRequest_LabelsEntry.encode({
        $type: "yandex.cloud.logging.v1.UpdateExportRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.groupId !== "") {
      writer.uint32(50).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(58).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exportId = reader.string();
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

          const entry5 = UpdateExportRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sinkId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.params = ExportParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateExportRequest {
    return {
      $type: UpdateExportRequest.$type,
      exportId: isSet(object.exportId) ? globalThis.String(object.exportId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      params: isSet(object.params) ? ExportParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: UpdateExportRequest): unknown {
    const obj: any = {};
    if (message.exportId !== "") {
      obj.exportId = message.exportId;
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
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    if (message.params !== undefined) {
      obj.params = ExportParams.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateExportRequest>, I>>(base?: I): UpdateExportRequest {
    return UpdateExportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateExportRequest>, I>>(object: I): UpdateExportRequest {
    const message = createBaseUpdateExportRequest();
    message.exportId = object.exportId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ExportParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateExportRequest.$type, UpdateExportRequest);

function createBaseUpdateExportRequest_LabelsEntry(): UpdateExportRequest_LabelsEntry {
  return { $type: "yandex.cloud.logging.v1.UpdateExportRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateExportRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest.LabelsEntry" as const,

  encode(message: UpdateExportRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExportRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExportRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateExportRequest_LabelsEntry {
    return {
      $type: UpdateExportRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateExportRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateExportRequest_LabelsEntry>, I>>(base?: I): UpdateExportRequest_LabelsEntry {
    return UpdateExportRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateExportRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateExportRequest_LabelsEntry {
    const message = createBaseUpdateExportRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateExportRequest_LabelsEntry.$type, UpdateExportRequest_LabelsEntry);

function createBaseUpdateExportMetadata(): UpdateExportMetadata {
  return { $type: "yandex.cloud.logging.v1.UpdateExportMetadata", exportId: "" };
}

export const UpdateExportMetadata = {
  $type: "yandex.cloud.logging.v1.UpdateExportMetadata" as const,

  encode(message: UpdateExportMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExportMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExportMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exportId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateExportMetadata {
    return {
      $type: UpdateExportMetadata.$type,
      exportId: isSet(object.exportId) ? globalThis.String(object.exportId) : "",
    };
  },

  toJSON(message: UpdateExportMetadata): unknown {
    const obj: any = {};
    if (message.exportId !== "") {
      obj.exportId = message.exportId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateExportMetadata>, I>>(base?: I): UpdateExportMetadata {
    return UpdateExportMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateExportMetadata>, I>>(object: I): UpdateExportMetadata {
    const message = createBaseUpdateExportMetadata();
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateExportMetadata.$type, UpdateExportMetadata);

function createBaseDeleteExportRequest(): DeleteExportRequest {
  return { $type: "yandex.cloud.logging.v1.DeleteExportRequest", exportId: "" };
}

export const DeleteExportRequest = {
  $type: "yandex.cloud.logging.v1.DeleteExportRequest" as const,

  encode(message: DeleteExportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exportId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteExportRequest {
    return {
      $type: DeleteExportRequest.$type,
      exportId: isSet(object.exportId) ? globalThis.String(object.exportId) : "",
    };
  },

  toJSON(message: DeleteExportRequest): unknown {
    const obj: any = {};
    if (message.exportId !== "") {
      obj.exportId = message.exportId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteExportRequest>, I>>(base?: I): DeleteExportRequest {
    return DeleteExportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteExportRequest>, I>>(object: I): DeleteExportRequest {
    const message = createBaseDeleteExportRequest();
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteExportRequest.$type, DeleteExportRequest);

function createBaseDeleteExportMetadata(): DeleteExportMetadata {
  return { $type: "yandex.cloud.logging.v1.DeleteExportMetadata", exportId: "" };
}

export const DeleteExportMetadata = {
  $type: "yandex.cloud.logging.v1.DeleteExportMetadata" as const,

  encode(message: DeleteExportMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExportMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExportMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exportId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteExportMetadata {
    return {
      $type: DeleteExportMetadata.$type,
      exportId: isSet(object.exportId) ? globalThis.String(object.exportId) : "",
    };
  },

  toJSON(message: DeleteExportMetadata): unknown {
    const obj: any = {};
    if (message.exportId !== "") {
      obj.exportId = message.exportId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteExportMetadata>, I>>(base?: I): DeleteExportMetadata {
    return DeleteExportMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteExportMetadata>, I>>(object: I): DeleteExportMetadata {
    const message = createBaseDeleteExportMetadata();
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteExportMetadata.$type, DeleteExportMetadata);

function createBaseListExportOperationsRequest(): ListExportOperationsRequest {
  return {
    $type: "yandex.cloud.logging.v1.ListExportOperationsRequest",
    exportId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListExportOperationsRequest = {
  $type: "yandex.cloud.logging.v1.ListExportOperationsRequest" as const,

  encode(message: ListExportOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExportOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExportOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exportId = reader.string();
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

  fromJSON(object: any): ListExportOperationsRequest {
    return {
      $type: ListExportOperationsRequest.$type,
      exportId: isSet(object.exportId) ? globalThis.String(object.exportId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListExportOperationsRequest): unknown {
    const obj: any = {};
    if (message.exportId !== "") {
      obj.exportId = message.exportId;
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

  create<I extends Exact<DeepPartial<ListExportOperationsRequest>, I>>(base?: I): ListExportOperationsRequest {
    return ListExportOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListExportOperationsRequest>, I>>(object: I): ListExportOperationsRequest {
    const message = createBaseListExportOperationsRequest();
    message.exportId = object.exportId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExportOperationsRequest.$type, ListExportOperationsRequest);

function createBaseListExportOperationsResponse(): ListExportOperationsResponse {
  return { $type: "yandex.cloud.logging.v1.ListExportOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListExportOperationsResponse = {
  $type: "yandex.cloud.logging.v1.ListExportOperationsResponse" as const,

  encode(message: ListExportOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExportOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExportOperationsResponse();
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

  fromJSON(object: any): ListExportOperationsResponse {
    return {
      $type: ListExportOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListExportOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListExportOperationsResponse>, I>>(base?: I): ListExportOperationsResponse {
    return ListExportOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListExportOperationsResponse>, I>>(object: I): ListExportOperationsResponse {
    const message = createBaseListExportOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExportOperationsResponse.$type, ListExportOperationsResponse);

/** A set of methods for managing log exports. */
export type ExportServiceService = typeof ExportServiceService;
export const ExportServiceService = {
  /** Run new logs export from log group to sink */
  run: {
    path: "/yandex.cloud.logging.v1.ExportService/Run",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RunExportRequest) => Buffer.from(RunExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RunExportRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified export.
   *
   * To get the list of all available exports, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.logging.v1.ExportService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetExportRequest) => Buffer.from(GetExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetExportRequest.decode(value),
    responseSerialize: (value: Export) => Buffer.from(Export.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Export.decode(value),
  },
  /** Retrieves the list of exports in the specified folder. */
  list: {
    path: "/yandex.cloud.logging.v1.ExportService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListExportsRequest) => Buffer.from(ListExportsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListExportsRequest.decode(value),
    responseSerialize: (value: ListExportsResponse) => Buffer.from(ListExportsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListExportsResponse.decode(value),
  },
  /** Creates a export in the specified folder. */
  create: {
    path: "/yandex.cloud.logging.v1.ExportService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateExportRequest) => Buffer.from(CreateExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateExportRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified export. */
  update: {
    path: "/yandex.cloud.logging.v1.ExportService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateExportRequest) => Buffer.from(UpdateExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateExportRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified export. */
  delete: {
    path: "/yandex.cloud.logging.v1.ExportService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteExportRequest) => Buffer.from(DeleteExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteExportRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified export. */
  listOperations: {
    path: "/yandex.cloud.logging.v1.ExportService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListExportOperationsRequest) =>
      Buffer.from(ListExportOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListExportOperationsRequest.decode(value),
    responseSerialize: (value: ListExportOperationsResponse) =>
      Buffer.from(ListExportOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListExportOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified export. */
  listAccessBindings: {
    path: "/yandex.cloud.logging.v1.ExportService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified export. */
  setAccessBindings: {
    path: "/yandex.cloud.logging.v1.ExportService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified export. */
  updateAccessBindings: {
    path: "/yandex.cloud.logging.v1.ExportService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ExportServiceServer extends UntypedServiceImplementation {
  /** Run new logs export from log group to sink */
  run: handleUnaryCall<RunExportRequest, Operation>;
  /**
   * Returns the specified export.
   *
   * To get the list of all available exports, make a [List] request.
   */
  get: handleUnaryCall<GetExportRequest, Export>;
  /** Retrieves the list of exports in the specified folder. */
  list: handleUnaryCall<ListExportsRequest, ListExportsResponse>;
  /** Creates a export in the specified folder. */
  create: handleUnaryCall<CreateExportRequest, Operation>;
  /** Updates the specified export. */
  update: handleUnaryCall<UpdateExportRequest, Operation>;
  /** Deletes the specified export. */
  delete: handleUnaryCall<DeleteExportRequest, Operation>;
  /** Lists operations for the specified export. */
  listOperations: handleUnaryCall<ListExportOperationsRequest, ListExportOperationsResponse>;
  /** Lists existing access bindings for the specified export. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the specified export. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified export. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface ExportServiceClient extends Client {
  /** Run new logs export from log group to sink */
  run(request: RunExportRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
  run(
    request: RunExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  run(
    request: RunExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified export.
   *
   * To get the list of all available exports, make a [List] request.
   */
  get(request: GetExportRequest, callback: (error: ServiceError | null, response: Export) => void): ClientUnaryCall;
  get(
    request: GetExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Export) => void,
  ): ClientUnaryCall;
  get(
    request: GetExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Export) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of exports in the specified folder. */
  list(
    request: ListExportsRequest,
    callback: (error: ServiceError | null, response: ListExportsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListExportsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListExportsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListExportsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListExportsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a export in the specified folder. */
  create(
    request: CreateExportRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified export. */
  update(
    request: UpdateExportRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified export. */
  delete(
    request: DeleteExportRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified export. */
  listOperations(
    request: ListExportOperationsRequest,
    callback: (error: ServiceError | null, response: ListExportOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListExportOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListExportOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListExportOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListExportOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified export. */
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
  /** Sets access bindings for the specified export. */
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
  /** Updates access bindings for the specified export. */
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

export const ExportServiceClient = makeGenericClientConstructor(
  ExportServiceService,
  "yandex.cloud.logging.v1.ExportService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ExportServiceClient;
  service: typeof ExportServiceService;
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
