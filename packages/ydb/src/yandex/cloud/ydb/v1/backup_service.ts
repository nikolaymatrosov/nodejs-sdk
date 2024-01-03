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
import { Backup } from "./backup";

export const protobufPackage = "yandex.cloud.ydb.v1";

export interface ListPathsRequest {
  $type: "yandex.cloud.ydb.v1.ListPathsRequest";
  /** Required. ID of the YDB backup. */
  backupId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a `next_page_token` that can be used
   * to get the next page of results in subsequent ListPaths requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set `page_token` to the `next_page_token` returned by a previous ListPaths
   * request to get the next page of results.
   */
  pageToken: string;
}

export interface ListPathsResponse {
  $type: "yandex.cloud.ydb.v1.ListPathsResponse";
  paths: string[];
  nextPageToken: string;
}

export interface GetBackupRequest {
  $type: "yandex.cloud.ydb.v1.GetBackupRequest";
  /** Required. ID of the YDB backup. */
  backupId: string;
}

export interface ListBackupsRequest {
  $type: "yandex.cloud.ydb.v1.ListBackupsRequest";
  folderId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a `next_page_token` that can be used
   * to get the next page of results in subsequent ListBackups requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set `page_token` to the `next_page_token` returned by a previous ListBackups
   * request to get the next page of results.
   */
  pageToken: string;
}

export interface ListBackupsResponse {
  $type: "yandex.cloud.ydb.v1.ListBackupsResponse";
  backups: Backup[];
  /**
   * This token allows you to get the next page of results for ListBackups requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListBackups request. Subsequent ListBackups
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteBackupRequest {
  $type: "yandex.cloud.ydb.v1.DeleteBackupRequest";
  backupId: string;
}

export interface DeleteBackupMetadata {
  $type: "yandex.cloud.ydb.v1.DeleteBackupMetadata";
  backupId: string;
  databaseId: string;
}

function createBaseListPathsRequest(): ListPathsRequest {
  return { $type: "yandex.cloud.ydb.v1.ListPathsRequest", backupId: "", pageSize: 0, pageToken: "" };
}

export const ListPathsRequest = {
  $type: "yandex.cloud.ydb.v1.ListPathsRequest" as const,

  encode(message: ListPathsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPathsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPathsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backupId = reader.string();
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

  fromJSON(object: any): ListPathsRequest {
    return {
      $type: ListPathsRequest.$type,
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListPathsRequest): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPathsRequest>, I>>(base?: I): ListPathsRequest {
    return ListPathsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPathsRequest>, I>>(object: I): ListPathsRequest {
    const message = createBaseListPathsRequest();
    message.backupId = object.backupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPathsRequest.$type, ListPathsRequest);

function createBaseListPathsResponse(): ListPathsResponse {
  return { $type: "yandex.cloud.ydb.v1.ListPathsResponse", paths: [], nextPageToken: "" };
}

export const ListPathsResponse = {
  $type: "yandex.cloud.ydb.v1.ListPathsResponse" as const,

  encode(message: ListPathsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPathsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPathsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paths.push(reader.string());
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

  fromJSON(object: any): ListPathsResponse {
    return {
      $type: ListPathsResponse.$type,
      paths: globalThis.Array.isArray(object?.paths) ? object.paths.map((e: any) => globalThis.String(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListPathsResponse): unknown {
    const obj: any = {};
    if (message.paths?.length) {
      obj.paths = message.paths;
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPathsResponse>, I>>(base?: I): ListPathsResponse {
    return ListPathsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPathsResponse>, I>>(object: I): ListPathsResponse {
    const message = createBaseListPathsResponse();
    message.paths = object.paths?.map((e) => e) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPathsResponse.$type, ListPathsResponse);

function createBaseGetBackupRequest(): GetBackupRequest {
  return { $type: "yandex.cloud.ydb.v1.GetBackupRequest", backupId: "" };
}

export const GetBackupRequest = {
  $type: "yandex.cloud.ydb.v1.GetBackupRequest" as const,

  encode(message: GetBackupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBackupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBackupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBackupRequest {
    return {
      $type: GetBackupRequest.$type,
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
    };
  },

  toJSON(message: GetBackupRequest): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBackupRequest>, I>>(base?: I): GetBackupRequest {
    return GetBackupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBackupRequest>, I>>(object: I): GetBackupRequest {
    const message = createBaseGetBackupRequest();
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBackupRequest.$type, GetBackupRequest);

function createBaseListBackupsRequest(): ListBackupsRequest {
  return { $type: "yandex.cloud.ydb.v1.ListBackupsRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListBackupsRequest = {
  $type: "yandex.cloud.ydb.v1.ListBackupsRequest" as const,

  encode(message: ListBackupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackupsRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBackupsRequest {
    return {
      $type: ListBackupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListBackupsRequest): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBackupsRequest>, I>>(base?: I): ListBackupsRequest {
    return ListBackupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackupsRequest>, I>>(object: I): ListBackupsRequest {
    const message = createBaseListBackupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackupsRequest.$type, ListBackupsRequest);

function createBaseListBackupsResponse(): ListBackupsResponse {
  return { $type: "yandex.cloud.ydb.v1.ListBackupsResponse", backups: [], nextPageToken: "" };
}

export const ListBackupsResponse = {
  $type: "yandex.cloud.ydb.v1.ListBackupsResponse" as const,

  encode(message: ListBackupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backups) {
      Backup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backups.push(Backup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListBackupsResponse {
    return {
      $type: ListBackupsResponse.$type,
      backups: globalThis.Array.isArray(object?.backups) ? object.backups.map((e: any) => Backup.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBackupsResponse): unknown {
    const obj: any = {};
    if (message.backups?.length) {
      obj.backups = message.backups.map((e) => Backup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBackupsResponse>, I>>(base?: I): ListBackupsResponse {
    return ListBackupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackupsResponse>, I>>(object: I): ListBackupsResponse {
    const message = createBaseListBackupsResponse();
    message.backups = object.backups?.map((e) => Backup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackupsResponse.$type, ListBackupsResponse);

function createBaseDeleteBackupRequest(): DeleteBackupRequest {
  return { $type: "yandex.cloud.ydb.v1.DeleteBackupRequest", backupId: "" };
}

export const DeleteBackupRequest = {
  $type: "yandex.cloud.ydb.v1.DeleteBackupRequest" as const,

  encode(message: DeleteBackupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBackupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBackupRequest {
    return {
      $type: DeleteBackupRequest.$type,
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
    };
  },

  toJSON(message: DeleteBackupRequest): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBackupRequest>, I>>(base?: I): DeleteBackupRequest {
    return DeleteBackupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBackupRequest>, I>>(object: I): DeleteBackupRequest {
    const message = createBaseDeleteBackupRequest();
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBackupRequest.$type, DeleteBackupRequest);

function createBaseDeleteBackupMetadata(): DeleteBackupMetadata {
  return { $type: "yandex.cloud.ydb.v1.DeleteBackupMetadata", backupId: "", databaseId: "" };
}

export const DeleteBackupMetadata = {
  $type: "yandex.cloud.ydb.v1.DeleteBackupMetadata" as const,

  encode(message: DeleteBackupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.databaseId !== "") {
      writer.uint32(18).string(message.databaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBackupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.databaseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBackupMetadata {
    return {
      $type: DeleteBackupMetadata.$type,
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
    };
  },

  toJSON(message: DeleteBackupMetadata): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBackupMetadata>, I>>(base?: I): DeleteBackupMetadata {
    return DeleteBackupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBackupMetadata>, I>>(object: I): DeleteBackupMetadata {
    const message = createBaseDeleteBackupMetadata();
    message.backupId = object.backupId ?? "";
    message.databaseId = object.databaseId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBackupMetadata.$type, DeleteBackupMetadata);

/** A set of methods for managing backups. */
export type BackupServiceService = typeof BackupServiceService;
export const BackupServiceService = {
  /** Returns the specified backup. */
  get: {
    path: "/yandex.cloud.ydb.v1.BackupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBackupRequest) => Buffer.from(GetBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBackupRequest.decode(value),
    responseSerialize: (value: Backup) => Buffer.from(Backup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Backup.decode(value),
  },
  listPaths: {
    path: "/yandex.cloud.ydb.v1.BackupService/ListPaths",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPathsRequest) => Buffer.from(ListPathsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListPathsRequest.decode(value),
    responseSerialize: (value: ListPathsResponse) => Buffer.from(ListPathsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListPathsResponse.decode(value),
  },
  /** Retrieves a list of backups. */
  list: {
    path: "/yandex.cloud.ydb.v1.BackupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBackupsRequest) => Buffer.from(ListBackupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBackupsRequest.decode(value),
    responseSerialize: (value: ListBackupsResponse) => Buffer.from(ListBackupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBackupsResponse.decode(value),
  },
  listAccessBindings: {
    path: "/yandex.cloud.ydb.v1.BackupService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  setAccessBindings: {
    path: "/yandex.cloud.ydb.v1.BackupService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  updateAccessBindings: {
    path: "/yandex.cloud.ydb.v1.BackupService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified backup. */
  delete: {
    path: "/yandex.cloud.ydb.v1.BackupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBackupRequest) => Buffer.from(DeleteBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBackupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface BackupServiceServer extends UntypedServiceImplementation {
  /** Returns the specified backup. */
  get: handleUnaryCall<GetBackupRequest, Backup>;
  listPaths: handleUnaryCall<ListPathsRequest, ListPathsResponse>;
  /** Retrieves a list of backups. */
  list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /** Deletes the specified backup. */
  delete: handleUnaryCall<DeleteBackupRequest, Operation>;
}

export interface BackupServiceClient extends Client {
  /** Returns the specified backup. */
  get(request: GetBackupRequest, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
  get(
    request: GetBackupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Backup) => void,
  ): ClientUnaryCall;
  get(
    request: GetBackupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Backup) => void,
  ): ClientUnaryCall;
  listPaths(
    request: ListPathsRequest,
    callback: (error: ServiceError | null, response: ListPathsResponse) => void,
  ): ClientUnaryCall;
  listPaths(
    request: ListPathsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListPathsResponse) => void,
  ): ClientUnaryCall;
  listPaths(
    request: ListPathsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListPathsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves a list of backups. */
  list(
    request: ListBackupsRequest,
    callback: (error: ServiceError | null, response: ListBackupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBackupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBackupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBackupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBackupsResponse) => void,
  ): ClientUnaryCall;
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
  /** Deletes the specified backup. */
  delete(
    request: DeleteBackupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteBackupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteBackupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const BackupServiceClient = makeGenericClientConstructor(
  BackupServiceService,
  "yandex.cloud.ydb.v1.BackupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BackupServiceClient;
  service: typeof BackupServiceService;
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
