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
import { Backup } from "./backup";

export const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";

export interface GetBackupRequest {
  $type: "yandex.cloud.mdb.sqlserver.v1.GetBackupRequest";
  /**
   * ID of the backup to return information about.
   *
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
}

export interface ListBackupsRequest {
  $type: "yandex.cloud.mdb.sqlserver.v1.ListBackupsRequest";
  /**
   * ID of the folder to list backups in.
   *
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListBackupsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListBackupsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface ListBackupsResponse {
  $type: "yandex.cloud.mdb.sqlserver.v1.ListBackupsResponse";
  /** List of SQL Server backups. */
  backups: Backup[];
  /**
   * This token allows you to get the next page of results for ListBackups requests.
   *
   * If the number of results is larger than [ListBackupsRequest.page_size], use the [next_page_token] as the value for the [ListBackupsRequest.page_token] parameter in the next ListBackups request.
   *
   * Each subsequent ListBackups request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetBackupRequest(): GetBackupRequest {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.GetBackupRequest", backupId: "" };
}

export const GetBackupRequest = {
  $type: "yandex.cloud.mdb.sqlserver.v1.GetBackupRequest" as const,

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

  create(base?: DeepPartial<GetBackupRequest>): GetBackupRequest {
    return GetBackupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetBackupRequest>): GetBackupRequest {
    const message = createBaseGetBackupRequest();
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBackupRequest.$type, GetBackupRequest);

function createBaseListBackupsRequest(): ListBackupsRequest {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.ListBackupsRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListBackupsRequest = {
  $type: "yandex.cloud.mdb.sqlserver.v1.ListBackupsRequest" as const,

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

  create(base?: DeepPartial<ListBackupsRequest>): ListBackupsRequest {
    return ListBackupsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListBackupsRequest>): ListBackupsRequest {
    const message = createBaseListBackupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackupsRequest.$type, ListBackupsRequest);

function createBaseListBackupsResponse(): ListBackupsResponse {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.ListBackupsResponse", backups: [], nextPageToken: "" };
}

export const ListBackupsResponse = {
  $type: "yandex.cloud.mdb.sqlserver.v1.ListBackupsResponse" as const,

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

  create(base?: DeepPartial<ListBackupsResponse>): ListBackupsResponse {
    return ListBackupsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListBackupsResponse>): ListBackupsResponse {
    const message = createBaseListBackupsResponse();
    message.backups = object.backups?.map((e) => Backup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackupsResponse.$type, ListBackupsResponse);

/** A set of methods for managing SQL Server backups. */
export type BackupServiceService = typeof BackupServiceService;
export const BackupServiceService = {
  /**
   * Returns the specified SQL Server backup.
   *
   * To get the list of available SQL Server backups, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.sqlserver.v1.BackupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBackupRequest) => Buffer.from(GetBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBackupRequest.decode(value),
    responseSerialize: (value: Backup) => Buffer.from(Backup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Backup.decode(value),
  },
  /** Retrieves the list of SQL Server backups available for the specified folder. */
  list: {
    path: "/yandex.cloud.mdb.sqlserver.v1.BackupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBackupsRequest) => Buffer.from(ListBackupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBackupsRequest.decode(value),
    responseSerialize: (value: ListBackupsResponse) => Buffer.from(ListBackupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBackupsResponse.decode(value),
  },
} as const;

export interface BackupServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified SQL Server backup.
   *
   * To get the list of available SQL Server backups, make a [List] request.
   */
  get: handleUnaryCall<GetBackupRequest, Backup>;
  /** Retrieves the list of SQL Server backups available for the specified folder. */
  list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
}

export interface BackupServiceClient extends Client {
  /**
   * Returns the specified SQL Server backup.
   *
   * To get the list of available SQL Server backups, make a [List] request.
   */
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
  /** Retrieves the list of SQL Server backups available for the specified folder. */
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
}

export const BackupServiceClient = makeGenericClientConstructor(
  BackupServiceService,
  "yandex.cloud.mdb.sqlserver.v1.BackupService",
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
