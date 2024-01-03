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
import { Sink, Sink_S3, Sink_Yds } from "./sink";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface GetSinkRequest {
  $type: "yandex.cloud.logging.v1.GetSinkRequest";
  /**
   * ID of the sink to return.
   *
   * To get a sink ID make a [SinkService.List] request.
   */
  sinkId: string;
}

export interface ListSinksRequest {
  $type: "yandex.cloud.logging.v1.ListSinksRequest";
  /**
   * Folder ID of the sinks to return.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListSinkssResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSinksResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters sinks listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Sink.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name="my-sink"`.
   */
  filter: string;
}

export interface ListSinksResponse {
  $type: "yandex.cloud.logging.v1.ListSinksResponse";
  /** List of sinks in the specified folder. */
  sinks: Sink[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListSinksRequest.page_size], use `next_page_token` as the value
   * for the [ListSinksRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSinkRequest {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest";
  /**
   * ID of the folder to create a sink in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the sink.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the sink. */
  description: string;
  /** Sink labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Logs will be written to the sink on behalf of this service account */
  serviceAccountId: string;
  /** Yandex data stream */
  yds?:
    | Sink_Yds
    | undefined;
  /** Object storage */
  s3?: Sink_S3 | undefined;
}

export interface CreateSinkRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSinkMetadata {
  $type: "yandex.cloud.logging.v1.CreateSinkMetadata";
  /** ID of the sink being created. */
  sinkId: string;
}

export interface UpdateSinkRequest {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest";
  /**
   * ID of the sink to update.
   *
   * To get a sink ID make a [SinkService.List] request.
   */
  sinkId: string;
  /** Field mask that specifies which attributes of the function should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name of the sink.
   * The name must be unique within the folder.
   */
  name: string;
  /** New Description of the sink. */
  description: string;
  /** New sink labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** new service account to use for logs writing to the sink. */
  serviceAccountId: string;
  /** Yandex data stream */
  yds?:
    | Sink_Yds
    | undefined;
  /** Object storage */
  s3?: Sink_S3 | undefined;
}

export interface UpdateSinkRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSinkMetadata {
  $type: "yandex.cloud.logging.v1.UpdateSinkMetadata";
  /** ID of the sink being updated. */
  sinkId: string;
}

export interface DeleteSinkRequest {
  $type: "yandex.cloud.logging.v1.DeleteSinkRequest";
  /**
   * ID of the sink to delete.
   *
   * To get a sink ID make a [SinkService.List] request.
   */
  sinkId: string;
}

export interface DeleteSinkMetadata {
  $type: "yandex.cloud.logging.v1.DeleteSinkMetadata";
  /** ID of the sink being deleted. */
  sinkId: string;
}

export interface ListSinkOperationsRequest {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest";
  /**
   * ID of the sink to list operations for.
   *
   * To get a sink ID make a [SinkService.List] request.
   */
  sinkId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListSinkOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSinkOperationsResponse.next_page_token] returned by a previous list request.
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

export interface ListSinkOperationsResponse {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse";
  /** List of operations for the specified sink. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListOSinkperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListSinkOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetSinkRequest(): GetSinkRequest {
  return { $type: "yandex.cloud.logging.v1.GetSinkRequest", sinkId: "" };
}

export const GetSinkRequest = {
  $type: "yandex.cloud.logging.v1.GetSinkRequest" as const,

  encode(message: GetSinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sinkId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSinkRequest {
    return { $type: GetSinkRequest.$type, sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "" };
  },

  toJSON(message: GetSinkRequest): unknown {
    const obj: any = {};
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSinkRequest>, I>>(base?: I): GetSinkRequest {
    return GetSinkRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSinkRequest>, I>>(object: I): GetSinkRequest {
    const message = createBaseGetSinkRequest();
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSinkRequest.$type, GetSinkRequest);

function createBaseListSinksRequest(): ListSinksRequest {
  return { $type: "yandex.cloud.logging.v1.ListSinksRequest", folderId: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListSinksRequest = {
  $type: "yandex.cloud.logging.v1.ListSinksRequest" as const,

  encode(message: ListSinksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSinksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinksRequest();
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

  fromJSON(object: any): ListSinksRequest {
    return {
      $type: ListSinksRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListSinksRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListSinksRequest>, I>>(base?: I): ListSinksRequest {
    return ListSinksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSinksRequest>, I>>(object: I): ListSinksRequest {
    const message = createBaseListSinksRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSinksRequest.$type, ListSinksRequest);

function createBaseListSinksResponse(): ListSinksResponse {
  return { $type: "yandex.cloud.logging.v1.ListSinksResponse", sinks: [], nextPageToken: "" };
}

export const ListSinksResponse = {
  $type: "yandex.cloud.logging.v1.ListSinksResponse" as const,

  encode(message: ListSinksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sinks) {
      Sink.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSinksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sinks.push(Sink.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSinksResponse {
    return {
      $type: ListSinksResponse.$type,
      sinks: globalThis.Array.isArray(object?.sinks) ? object.sinks.map((e: any) => Sink.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSinksResponse): unknown {
    const obj: any = {};
    if (message.sinks?.length) {
      obj.sinks = message.sinks.map((e) => Sink.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSinksResponse>, I>>(base?: I): ListSinksResponse {
    return ListSinksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSinksResponse>, I>>(object: I): ListSinksResponse {
    const message = createBaseListSinksResponse();
    message.sinks = object.sinks?.map((e) => Sink.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSinksResponse.$type, ListSinksResponse);

function createBaseCreateSinkRequest(): CreateSinkRequest {
  return {
    $type: "yandex.cloud.logging.v1.CreateSinkRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    serviceAccountId: "",
    yds: undefined,
    s3: undefined,
  };
}

export const CreateSinkRequest = {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest" as const,

  encode(message: CreateSinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateSinkRequest_LabelsEntry.encode({
        $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.serviceAccountId !== "") {
      writer.uint32(42).string(message.serviceAccountId);
    }
    if (message.yds !== undefined) {
      Sink_Yds.encode(message.yds, writer.uint32(50).fork()).ldelim();
    }
    if (message.s3 !== undefined) {
      Sink_S3.encode(message.s3, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSinkRequest();
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

          const entry4 = CreateSinkRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.yds = Sink_Yds.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.s3 = Sink_S3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSinkRequest {
    return {
      $type: CreateSinkRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      yds: isSet(object.yds) ? Sink_Yds.fromJSON(object.yds) : undefined,
      s3: isSet(object.s3) ? Sink_S3.fromJSON(object.s3) : undefined,
    };
  },

  toJSON(message: CreateSinkRequest): unknown {
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
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.yds !== undefined) {
      obj.yds = Sink_Yds.toJSON(message.yds);
    }
    if (message.s3 !== undefined) {
      obj.s3 = Sink_S3.toJSON(message.s3);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSinkRequest>, I>>(base?: I): CreateSinkRequest {
    return CreateSinkRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSinkRequest>, I>>(object: I): CreateSinkRequest {
    const message = createBaseCreateSinkRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.yds = (object.yds !== undefined && object.yds !== null) ? Sink_Yds.fromPartial(object.yds) : undefined;
    message.s3 = (object.s3 !== undefined && object.s3 !== null) ? Sink_S3.fromPartial(object.s3) : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateSinkRequest.$type, CreateSinkRequest);

function createBaseCreateSinkRequest_LabelsEntry(): CreateSinkRequest_LabelsEntry {
  return { $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry", key: "", value: "" };
}

export const CreateSinkRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry" as const,

  encode(message: CreateSinkRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSinkRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSinkRequest_LabelsEntry();
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

  fromJSON(object: any): CreateSinkRequest_LabelsEntry {
    return {
      $type: CreateSinkRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateSinkRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSinkRequest_LabelsEntry>, I>>(base?: I): CreateSinkRequest_LabelsEntry {
    return CreateSinkRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSinkRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateSinkRequest_LabelsEntry {
    const message = createBaseCreateSinkRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSinkRequest_LabelsEntry.$type, CreateSinkRequest_LabelsEntry);

function createBaseCreateSinkMetadata(): CreateSinkMetadata {
  return { $type: "yandex.cloud.logging.v1.CreateSinkMetadata", sinkId: "" };
}

export const CreateSinkMetadata = {
  $type: "yandex.cloud.logging.v1.CreateSinkMetadata" as const,

  encode(message: CreateSinkMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSinkMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSinkMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sinkId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSinkMetadata {
    return { $type: CreateSinkMetadata.$type, sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "" };
  },

  toJSON(message: CreateSinkMetadata): unknown {
    const obj: any = {};
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSinkMetadata>, I>>(base?: I): CreateSinkMetadata {
    return CreateSinkMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSinkMetadata>, I>>(object: I): CreateSinkMetadata {
    const message = createBaseCreateSinkMetadata();
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSinkMetadata.$type, CreateSinkMetadata);

function createBaseUpdateSinkRequest(): UpdateSinkRequest {
  return {
    $type: "yandex.cloud.logging.v1.UpdateSinkRequest",
    sinkId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    serviceAccountId: "",
    yds: undefined,
    s3: undefined,
  };
}

export const UpdateSinkRequest = {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest" as const,

  encode(message: UpdateSinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
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
      UpdateSinkRequest_LabelsEntry.encode({
        $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.serviceAccountId !== "") {
      writer.uint32(50).string(message.serviceAccountId);
    }
    if (message.yds !== undefined) {
      Sink_Yds.encode(message.yds, writer.uint32(58).fork()).ldelim();
    }
    if (message.s3 !== undefined) {
      Sink_S3.encode(message.s3, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sinkId = reader.string();
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

          const entry5 = UpdateSinkRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.yds = Sink_Yds.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.s3 = Sink_S3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSinkRequest {
    return {
      $type: UpdateSinkRequest.$type,
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      yds: isSet(object.yds) ? Sink_Yds.fromJSON(object.yds) : undefined,
      s3: isSet(object.s3) ? Sink_S3.fromJSON(object.s3) : undefined,
    };
  },

  toJSON(message: UpdateSinkRequest): unknown {
    const obj: any = {};
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
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
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.yds !== undefined) {
      obj.yds = Sink_Yds.toJSON(message.yds);
    }
    if (message.s3 !== undefined) {
      obj.s3 = Sink_S3.toJSON(message.s3);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSinkRequest>, I>>(base?: I): UpdateSinkRequest {
    return UpdateSinkRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSinkRequest>, I>>(object: I): UpdateSinkRequest {
    const message = createBaseUpdateSinkRequest();
    message.sinkId = object.sinkId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.yds = (object.yds !== undefined && object.yds !== null) ? Sink_Yds.fromPartial(object.yds) : undefined;
    message.s3 = (object.s3 !== undefined && object.s3 !== null) ? Sink_S3.fromPartial(object.s3) : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateSinkRequest.$type, UpdateSinkRequest);

function createBaseUpdateSinkRequest_LabelsEntry(): UpdateSinkRequest_LabelsEntry {
  return { $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateSinkRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry" as const,

  encode(message: UpdateSinkRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSinkRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSinkRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateSinkRequest_LabelsEntry {
    return {
      $type: UpdateSinkRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateSinkRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSinkRequest_LabelsEntry>, I>>(base?: I): UpdateSinkRequest_LabelsEntry {
    return UpdateSinkRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSinkRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateSinkRequest_LabelsEntry {
    const message = createBaseUpdateSinkRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSinkRequest_LabelsEntry.$type, UpdateSinkRequest_LabelsEntry);

function createBaseUpdateSinkMetadata(): UpdateSinkMetadata {
  return { $type: "yandex.cloud.logging.v1.UpdateSinkMetadata", sinkId: "" };
}

export const UpdateSinkMetadata = {
  $type: "yandex.cloud.logging.v1.UpdateSinkMetadata" as const,

  encode(message: UpdateSinkMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSinkMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSinkMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sinkId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSinkMetadata {
    return { $type: UpdateSinkMetadata.$type, sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "" };
  },

  toJSON(message: UpdateSinkMetadata): unknown {
    const obj: any = {};
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSinkMetadata>, I>>(base?: I): UpdateSinkMetadata {
    return UpdateSinkMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSinkMetadata>, I>>(object: I): UpdateSinkMetadata {
    const message = createBaseUpdateSinkMetadata();
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSinkMetadata.$type, UpdateSinkMetadata);

function createBaseDeleteSinkRequest(): DeleteSinkRequest {
  return { $type: "yandex.cloud.logging.v1.DeleteSinkRequest", sinkId: "" };
}

export const DeleteSinkRequest = {
  $type: "yandex.cloud.logging.v1.DeleteSinkRequest" as const,

  encode(message: DeleteSinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sinkId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSinkRequest {
    return { $type: DeleteSinkRequest.$type, sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "" };
  },

  toJSON(message: DeleteSinkRequest): unknown {
    const obj: any = {};
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSinkRequest>, I>>(base?: I): DeleteSinkRequest {
    return DeleteSinkRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSinkRequest>, I>>(object: I): DeleteSinkRequest {
    const message = createBaseDeleteSinkRequest();
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSinkRequest.$type, DeleteSinkRequest);

function createBaseDeleteSinkMetadata(): DeleteSinkMetadata {
  return { $type: "yandex.cloud.logging.v1.DeleteSinkMetadata", sinkId: "" };
}

export const DeleteSinkMetadata = {
  $type: "yandex.cloud.logging.v1.DeleteSinkMetadata" as const,

  encode(message: DeleteSinkMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSinkMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSinkMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sinkId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSinkMetadata {
    return { $type: DeleteSinkMetadata.$type, sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "" };
  },

  toJSON(message: DeleteSinkMetadata): unknown {
    const obj: any = {};
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSinkMetadata>, I>>(base?: I): DeleteSinkMetadata {
    return DeleteSinkMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSinkMetadata>, I>>(object: I): DeleteSinkMetadata {
    const message = createBaseDeleteSinkMetadata();
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSinkMetadata.$type, DeleteSinkMetadata);

function createBaseListSinkOperationsRequest(): ListSinkOperationsRequest {
  return {
    $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest",
    sinkId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListSinkOperationsRequest = {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest" as const,

  encode(message: ListSinkOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSinkOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinkOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sinkId = reader.string();
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

  fromJSON(object: any): ListSinkOperationsRequest {
    return {
      $type: ListSinkOperationsRequest.$type,
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListSinkOperationsRequest): unknown {
    const obj: any = {};
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
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

  create<I extends Exact<DeepPartial<ListSinkOperationsRequest>, I>>(base?: I): ListSinkOperationsRequest {
    return ListSinkOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSinkOperationsRequest>, I>>(object: I): ListSinkOperationsRequest {
    const message = createBaseListSinkOperationsRequest();
    message.sinkId = object.sinkId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSinkOperationsRequest.$type, ListSinkOperationsRequest);

function createBaseListSinkOperationsResponse(): ListSinkOperationsResponse {
  return { $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListSinkOperationsResponse = {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse" as const,

  encode(message: ListSinkOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSinkOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinkOperationsResponse();
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

  fromJSON(object: any): ListSinkOperationsResponse {
    return {
      $type: ListSinkOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSinkOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSinkOperationsResponse>, I>>(base?: I): ListSinkOperationsResponse {
    return ListSinkOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSinkOperationsResponse>, I>>(object: I): ListSinkOperationsResponse {
    const message = createBaseListSinkOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSinkOperationsResponse.$type, ListSinkOperationsResponse);

/** A set of methods for managing log sinks. */
export type SinkServiceService = typeof SinkServiceService;
export const SinkServiceService = {
  /**
   * Returns the specified sink.
   *
   * To get the list of all available sinks, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.logging.v1.SinkService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSinkRequest) => Buffer.from(GetSinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSinkRequest.decode(value),
    responseSerialize: (value: Sink) => Buffer.from(Sink.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Sink.decode(value),
  },
  /** Retrieves the list of sinks in the specified folder. */
  list: {
    path: "/yandex.cloud.logging.v1.SinkService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSinksRequest) => Buffer.from(ListSinksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSinksRequest.decode(value),
    responseSerialize: (value: ListSinksResponse) => Buffer.from(ListSinksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSinksResponse.decode(value),
  },
  /** Creates a sink in the specified folder. */
  create: {
    path: "/yandex.cloud.logging.v1.SinkService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSinkRequest) => Buffer.from(CreateSinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSinkRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified sink. */
  update: {
    path: "/yandex.cloud.logging.v1.SinkService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSinkRequest) => Buffer.from(UpdateSinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSinkRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified sink. */
  delete: {
    path: "/yandex.cloud.logging.v1.SinkService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSinkRequest) => Buffer.from(DeleteSinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSinkRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified sink. */
  listOperations: {
    path: "/yandex.cloud.logging.v1.SinkService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSinkOperationsRequest) =>
      Buffer.from(ListSinkOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSinkOperationsRequest.decode(value),
    responseSerialize: (value: ListSinkOperationsResponse) =>
      Buffer.from(ListSinkOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSinkOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified sink. */
  listAccessBindings: {
    path: "/yandex.cloud.logging.v1.SinkService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified sink. */
  setAccessBindings: {
    path: "/yandex.cloud.logging.v1.SinkService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified sink. */
  updateAccessBindings: {
    path: "/yandex.cloud.logging.v1.SinkService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface SinkServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified sink.
   *
   * To get the list of all available sinks, make a [List] request.
   */
  get: handleUnaryCall<GetSinkRequest, Sink>;
  /** Retrieves the list of sinks in the specified folder. */
  list: handleUnaryCall<ListSinksRequest, ListSinksResponse>;
  /** Creates a sink in the specified folder. */
  create: handleUnaryCall<CreateSinkRequest, Operation>;
  /** Updates the specified sink. */
  update: handleUnaryCall<UpdateSinkRequest, Operation>;
  /** Deletes the specified sink. */
  delete: handleUnaryCall<DeleteSinkRequest, Operation>;
  /** Lists operations for the specified sink. */
  listOperations: handleUnaryCall<ListSinkOperationsRequest, ListSinkOperationsResponse>;
  /** Lists existing access bindings for the specified sink. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the specified sink. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified sink. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface SinkServiceClient extends Client {
  /**
   * Returns the specified sink.
   *
   * To get the list of all available sinks, make a [List] request.
   */
  get(request: GetSinkRequest, callback: (error: ServiceError | null, response: Sink) => void): ClientUnaryCall;
  get(
    request: GetSinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Sink) => void,
  ): ClientUnaryCall;
  get(
    request: GetSinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Sink) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of sinks in the specified folder. */
  list(
    request: ListSinksRequest,
    callback: (error: ServiceError | null, response: ListSinksResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSinksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSinksResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSinksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSinksResponse) => void,
  ): ClientUnaryCall;
  /** Creates a sink in the specified folder. */
  create(
    request: CreateSinkRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified sink. */
  update(
    request: UpdateSinkRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified sink. */
  delete(
    request: DeleteSinkRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified sink. */
  listOperations(
    request: ListSinkOperationsRequest,
    callback: (error: ServiceError | null, response: ListSinkOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSinkOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSinkOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSinkOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSinkOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified sink. */
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
  /** Sets access bindings for the specified sink. */
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
  /** Updates access bindings for the specified sink. */
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

export const SinkServiceClient = makeGenericClientConstructor(
  SinkServiceService,
  "yandex.cloud.logging.v1.SinkService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SinkServiceClient;
  service: typeof SinkServiceService;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
