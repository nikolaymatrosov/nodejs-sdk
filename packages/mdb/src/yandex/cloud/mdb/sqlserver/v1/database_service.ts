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
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Database, DatabaseSpec } from "./database";

export const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";

export interface GetDatabaseRequest {
  $type: "yandex.cloud.mdb.sqlserver.v1.GetDatabaseRequest";
  /**
   * ID of the SQL Server cluster the database belongs to.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the SQL Server database to return.
   *
   * To get the name of the database use a [DatabaseService.List] request.
   */
  databaseName: string;
}

export interface ListDatabasesRequest {
  $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesRequest";
  /**
   * ID of the SQL Server cluster to list databases in.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListDatabasesResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListDatabasesResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface ListDatabasesResponse {
  $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesResponse";
  /** List of SQL Server databases. */
  databases: Database[];
  /**
   * Token that allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListDatabasesRequest.page_size], use the [next_page_token] as the value for the [ListDatabasesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateDatabaseRequest {
  $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseRequest";
  /**
   * ID of the SQL Server cluster to create a database in.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the database to create. */
  databaseSpec?: DatabaseSpec | undefined;
}

export interface CreateDatabaseMetadata {
  $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseMetadata";
  /** ID of the SQL Server cluster where the database is being created. */
  clusterId: string;
  /** Name of the SQL Server database being created. */
  databaseName: string;
}

export interface DeleteDatabaseRequest {
  $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseRequest";
  /**
   * ID of the SQL Server cluster to delete a database in.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the database to delete.
   *
   * To get the name of the database, use a [DatabaseService.List] request.
   */
  databaseName: string;
}

export interface DeleteDatabaseMetadata {
  $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseMetadata";
  /** ID of the SQL Server cluster where the database is being deleted. */
  clusterId: string;
  /** Name of the SQL Server database being deleted. */
  databaseName: string;
}

export interface RestoreDatabaseRequest {
  $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseRequest";
  /**
   * ID of the SQL Server cluster to restore a database in.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the SQL Server database that is being restored. */
  databaseName: string;
  /** Name of the database which backup is used to restore the database. */
  fromDatabase: string;
  /** ID of a backup to be used. */
  backupId: string;
  /** Timestamp which is used for Point-in-Time recovery. */
  time?: Date | undefined;
}

export interface RestoreDatabaseMetadata {
  $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseMetadata";
  /** ID of the SQL Server cluster where a database is being created. */
  clusterId: string;
  /** Name of an SQL Server database that is being created. */
  databaseName: string;
  /** Name of the database which backup is used to restore the database. */
  fromDatabase: string;
  /** ID of a backup to be used. */
  backupId: string;
}

export interface ImportDatabaseBackupRequest {
  $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupRequest";
  /**
   * ID of the SQL Server cluster to import a database in.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the SQL Server database that is being imported. */
  databaseName: string;
  /** Name of object storage bucket to import backups from. */
  s3Bucket: string;
  /** Path in object storage bucket to import backups from. */
  s3Path: string;
  /** List of .bak files in bucket containing database backup. */
  files: string[];
}

export interface ImportDatabaseBackupMetadata {
  $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupMetadata";
  /** ID of the SQL Server cluster where a database is being imported. */
  clusterId: string;
  /** Name of the SQL Server database that is being imported. */
  databaseName: string;
  /** Name of object storage bucket to import backups from. */
  s3Bucket: string;
  /** Path in object storage bucket to import backups from. */
  s3Path: string;
}

export interface ExportDatabaseBackupRequest {
  $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupRequest";
  /**
   * ID of the SQL Server cluster to export a database from.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the SQL Server database that is being exported. */
  databaseName: string;
  /** Name of object storage bucket to export backups to. */
  s3Bucket: string;
  /** Path in object storage bucket to export backups to. */
  s3Path: string;
  /** Prefix for .bak files to export. */
  prefix: string;
}

export interface ExportDatabaseBackupMetadata {
  $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupMetadata";
  /** ID of the SQL Server cluster where a database is being exported. */
  clusterId: string;
  /** Name of the SQL Server database that is being exported. */
  databaseName: string;
  /** Name of object storage bucket to export backups to. */
  s3Bucket: string;
  /** Path in object storage bucket to export backups to. */
  s3Path: string;
}

function createBaseGetDatabaseRequest(): GetDatabaseRequest {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.GetDatabaseRequest", clusterId: "", databaseName: "" };
}

export const GetDatabaseRequest = {
  $type: "yandex.cloud.mdb.sqlserver.v1.GetDatabaseRequest" as const,

  encode(message: GetDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDatabaseRequest();
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

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDatabaseRequest {
    return {
      $type: GetDatabaseRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: GetDatabaseRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create(base?: DeepPartial<GetDatabaseRequest>): GetDatabaseRequest {
    return GetDatabaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetDatabaseRequest>): GetDatabaseRequest {
    const message = createBaseGetDatabaseRequest();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetDatabaseRequest.$type, GetDatabaseRequest);

function createBaseListDatabasesRequest(): ListDatabasesRequest {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListDatabasesRequest = {
  $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesRequest" as const,

  encode(message: ListDatabasesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDatabasesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDatabasesRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDatabasesRequest {
    return {
      $type: ListDatabasesRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListDatabasesRequest): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<ListDatabasesRequest>): ListDatabasesRequest {
    return ListDatabasesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListDatabasesRequest>): ListDatabasesRequest {
    const message = createBaseListDatabasesRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDatabasesRequest.$type, ListDatabasesRequest);

function createBaseListDatabasesResponse(): ListDatabasesResponse {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesResponse", databases: [], nextPageToken: "" };
}

export const ListDatabasesResponse = {
  $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesResponse" as const,

  encode(message: ListDatabasesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.databases) {
      Database.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDatabasesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDatabasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databases.push(Database.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDatabasesResponse {
    return {
      $type: ListDatabasesResponse.$type,
      databases: globalThis.Array.isArray(object?.databases)
        ? object.databases.map((e: any) => Database.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDatabasesResponse): unknown {
    const obj: any = {};
    if (message.databases?.length) {
      obj.databases = message.databases.map((e) => Database.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListDatabasesResponse>): ListDatabasesResponse {
    return ListDatabasesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListDatabasesResponse>): ListDatabasesResponse {
    const message = createBaseListDatabasesResponse();
    message.databases = object.databases?.map((e) => Database.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDatabasesResponse.$type, ListDatabasesResponse);

function createBaseCreateDatabaseRequest(): CreateDatabaseRequest {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseRequest", clusterId: "", databaseSpec: undefined };
}

export const CreateDatabaseRequest = {
  $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseRequest" as const,

  encode(message: CreateDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseSpec !== undefined) {
      DatabaseSpec.encode(message.databaseSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDatabaseRequest();
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

          message.databaseSpec = DatabaseSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDatabaseRequest {
    return {
      $type: CreateDatabaseRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseSpec: isSet(object.databaseSpec) ? DatabaseSpec.fromJSON(object.databaseSpec) : undefined,
    };
  },

  toJSON(message: CreateDatabaseRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseSpec !== undefined) {
      obj.databaseSpec = DatabaseSpec.toJSON(message.databaseSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateDatabaseRequest>): CreateDatabaseRequest {
    return CreateDatabaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateDatabaseRequest>): CreateDatabaseRequest {
    const message = createBaseCreateDatabaseRequest();
    message.clusterId = object.clusterId ?? "";
    message.databaseSpec = (object.databaseSpec !== undefined && object.databaseSpec !== null)
      ? DatabaseSpec.fromPartial(object.databaseSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateDatabaseRequest.$type, CreateDatabaseRequest);

function createBaseCreateDatabaseMetadata(): CreateDatabaseMetadata {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseMetadata", clusterId: "", databaseName: "" };
}

export const CreateDatabaseMetadata = {
  $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseMetadata" as const,

  encode(message: CreateDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDatabaseMetadata();
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

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDatabaseMetadata {
    return {
      $type: CreateDatabaseMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: CreateDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateDatabaseMetadata>): CreateDatabaseMetadata {
    return CreateDatabaseMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateDatabaseMetadata>): CreateDatabaseMetadata {
    const message = createBaseCreateDatabaseMetadata();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDatabaseMetadata.$type, CreateDatabaseMetadata);

function createBaseDeleteDatabaseRequest(): DeleteDatabaseRequest {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseRequest", clusterId: "", databaseName: "" };
}

export const DeleteDatabaseRequest = {
  $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseRequest" as const,

  encode(message: DeleteDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDatabaseRequest();
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

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDatabaseRequest {
    return {
      $type: DeleteDatabaseRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: DeleteDatabaseRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteDatabaseRequest>): DeleteDatabaseRequest {
    return DeleteDatabaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteDatabaseRequest>): DeleteDatabaseRequest {
    const message = createBaseDeleteDatabaseRequest();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDatabaseRequest.$type, DeleteDatabaseRequest);

function createBaseDeleteDatabaseMetadata(): DeleteDatabaseMetadata {
  return { $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseMetadata", clusterId: "", databaseName: "" };
}

export const DeleteDatabaseMetadata = {
  $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseMetadata" as const,

  encode(message: DeleteDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDatabaseMetadata();
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

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDatabaseMetadata {
    return {
      $type: DeleteDatabaseMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: DeleteDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteDatabaseMetadata>): DeleteDatabaseMetadata {
    return DeleteDatabaseMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteDatabaseMetadata>): DeleteDatabaseMetadata {
    const message = createBaseDeleteDatabaseMetadata();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDatabaseMetadata.$type, DeleteDatabaseMetadata);

function createBaseRestoreDatabaseRequest(): RestoreDatabaseRequest {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseRequest",
    clusterId: "",
    databaseName: "",
    fromDatabase: "",
    backupId: "",
    time: undefined,
  };
}

export const RestoreDatabaseRequest = {
  $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseRequest" as const,

  encode(message: RestoreDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    if (message.fromDatabase !== "") {
      writer.uint32(26).string(message.fromDatabase);
    }
    if (message.backupId !== "") {
      writer.uint32(34).string(message.backupId);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreDatabaseRequest();
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

          message.databaseName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fromDatabase = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.backupId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreDatabaseRequest {
    return {
      $type: RestoreDatabaseRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
      fromDatabase: isSet(object.fromDatabase) ? globalThis.String(object.fromDatabase) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
    };
  },

  toJSON(message: RestoreDatabaseRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    if (message.fromDatabase !== "") {
      obj.fromDatabase = message.fromDatabase;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreDatabaseRequest>): RestoreDatabaseRequest {
    return RestoreDatabaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreDatabaseRequest>): RestoreDatabaseRequest {
    const message = createBaseRestoreDatabaseRequest();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    message.fromDatabase = object.fromDatabase ?? "";
    message.backupId = object.backupId ?? "";
    message.time = object.time ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RestoreDatabaseRequest.$type, RestoreDatabaseRequest);

function createBaseRestoreDatabaseMetadata(): RestoreDatabaseMetadata {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseMetadata",
    clusterId: "",
    databaseName: "",
    fromDatabase: "",
    backupId: "",
  };
}

export const RestoreDatabaseMetadata = {
  $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseMetadata" as const,

  encode(message: RestoreDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    if (message.fromDatabase !== "") {
      writer.uint32(26).string(message.fromDatabase);
    }
    if (message.backupId !== "") {
      writer.uint32(34).string(message.backupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreDatabaseMetadata();
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

          message.databaseName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fromDatabase = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): RestoreDatabaseMetadata {
    return {
      $type: RestoreDatabaseMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
      fromDatabase: isSet(object.fromDatabase) ? globalThis.String(object.fromDatabase) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
    };
  },

  toJSON(message: RestoreDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    if (message.fromDatabase !== "") {
      obj.fromDatabase = message.fromDatabase;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreDatabaseMetadata>): RestoreDatabaseMetadata {
    return RestoreDatabaseMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreDatabaseMetadata>): RestoreDatabaseMetadata {
    const message = createBaseRestoreDatabaseMetadata();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    message.fromDatabase = object.fromDatabase ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RestoreDatabaseMetadata.$type, RestoreDatabaseMetadata);

function createBaseImportDatabaseBackupRequest(): ImportDatabaseBackupRequest {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupRequest",
    clusterId: "",
    databaseName: "",
    s3Bucket: "",
    s3Path: "",
    files: [],
  };
}

export const ImportDatabaseBackupRequest = {
  $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupRequest" as const,

  encode(message: ImportDatabaseBackupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    if (message.s3Bucket !== "") {
      writer.uint32(26).string(message.s3Bucket);
    }
    if (message.s3Path !== "") {
      writer.uint32(34).string(message.s3Path);
    }
    for (const v of message.files) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImportDatabaseBackupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportDatabaseBackupRequest();
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

          message.databaseName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.s3Bucket = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.s3Path = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.files.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportDatabaseBackupRequest {
    return {
      $type: ImportDatabaseBackupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
      s3Bucket: isSet(object.s3Bucket) ? globalThis.String(object.s3Bucket) : "",
      s3Path: isSet(object.s3Path) ? globalThis.String(object.s3Path) : "",
      files: globalThis.Array.isArray(object?.files) ? object.files.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ImportDatabaseBackupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    if (message.s3Bucket !== "") {
      obj.s3Bucket = message.s3Bucket;
    }
    if (message.s3Path !== "") {
      obj.s3Path = message.s3Path;
    }
    if (message.files?.length) {
      obj.files = message.files;
    }
    return obj;
  },

  create(base?: DeepPartial<ImportDatabaseBackupRequest>): ImportDatabaseBackupRequest {
    return ImportDatabaseBackupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImportDatabaseBackupRequest>): ImportDatabaseBackupRequest {
    const message = createBaseImportDatabaseBackupRequest();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    message.s3Bucket = object.s3Bucket ?? "";
    message.s3Path = object.s3Path ?? "";
    message.files = object.files?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ImportDatabaseBackupRequest.$type, ImportDatabaseBackupRequest);

function createBaseImportDatabaseBackupMetadata(): ImportDatabaseBackupMetadata {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupMetadata",
    clusterId: "",
    databaseName: "",
    s3Bucket: "",
    s3Path: "",
  };
}

export const ImportDatabaseBackupMetadata = {
  $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupMetadata" as const,

  encode(message: ImportDatabaseBackupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    if (message.s3Bucket !== "") {
      writer.uint32(26).string(message.s3Bucket);
    }
    if (message.s3Path !== "") {
      writer.uint32(34).string(message.s3Path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImportDatabaseBackupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportDatabaseBackupMetadata();
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

          message.databaseName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.s3Bucket = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.s3Path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportDatabaseBackupMetadata {
    return {
      $type: ImportDatabaseBackupMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
      s3Bucket: isSet(object.s3Bucket) ? globalThis.String(object.s3Bucket) : "",
      s3Path: isSet(object.s3Path) ? globalThis.String(object.s3Path) : "",
    };
  },

  toJSON(message: ImportDatabaseBackupMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    if (message.s3Bucket !== "") {
      obj.s3Bucket = message.s3Bucket;
    }
    if (message.s3Path !== "") {
      obj.s3Path = message.s3Path;
    }
    return obj;
  },

  create(base?: DeepPartial<ImportDatabaseBackupMetadata>): ImportDatabaseBackupMetadata {
    return ImportDatabaseBackupMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImportDatabaseBackupMetadata>): ImportDatabaseBackupMetadata {
    const message = createBaseImportDatabaseBackupMetadata();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    message.s3Bucket = object.s3Bucket ?? "";
    message.s3Path = object.s3Path ?? "";
    return message;
  },
};

messageTypeRegistry.set(ImportDatabaseBackupMetadata.$type, ImportDatabaseBackupMetadata);

function createBaseExportDatabaseBackupRequest(): ExportDatabaseBackupRequest {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupRequest",
    clusterId: "",
    databaseName: "",
    s3Bucket: "",
    s3Path: "",
    prefix: "",
  };
}

export const ExportDatabaseBackupRequest = {
  $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupRequest" as const,

  encode(message: ExportDatabaseBackupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    if (message.s3Bucket !== "") {
      writer.uint32(26).string(message.s3Bucket);
    }
    if (message.s3Path !== "") {
      writer.uint32(34).string(message.s3Path);
    }
    if (message.prefix !== "") {
      writer.uint32(42).string(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportDatabaseBackupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportDatabaseBackupRequest();
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

          message.databaseName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.s3Bucket = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.s3Path = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.prefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportDatabaseBackupRequest {
    return {
      $type: ExportDatabaseBackupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
      s3Bucket: isSet(object.s3Bucket) ? globalThis.String(object.s3Bucket) : "",
      s3Path: isSet(object.s3Path) ? globalThis.String(object.s3Path) : "",
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : "",
    };
  },

  toJSON(message: ExportDatabaseBackupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    if (message.s3Bucket !== "") {
      obj.s3Bucket = message.s3Bucket;
    }
    if (message.s3Path !== "") {
      obj.s3Path = message.s3Path;
    }
    if (message.prefix !== "") {
      obj.prefix = message.prefix;
    }
    return obj;
  },

  create(base?: DeepPartial<ExportDatabaseBackupRequest>): ExportDatabaseBackupRequest {
    return ExportDatabaseBackupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportDatabaseBackupRequest>): ExportDatabaseBackupRequest {
    const message = createBaseExportDatabaseBackupRequest();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    message.s3Bucket = object.s3Bucket ?? "";
    message.s3Path = object.s3Path ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExportDatabaseBackupRequest.$type, ExportDatabaseBackupRequest);

function createBaseExportDatabaseBackupMetadata(): ExportDatabaseBackupMetadata {
  return {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupMetadata",
    clusterId: "",
    databaseName: "",
    s3Bucket: "",
    s3Path: "",
  };
}

export const ExportDatabaseBackupMetadata = {
  $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupMetadata" as const,

  encode(message: ExportDatabaseBackupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    if (message.s3Bucket !== "") {
      writer.uint32(26).string(message.s3Bucket);
    }
    if (message.s3Path !== "") {
      writer.uint32(34).string(message.s3Path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportDatabaseBackupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportDatabaseBackupMetadata();
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

          message.databaseName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.s3Bucket = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.s3Path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportDatabaseBackupMetadata {
    return {
      $type: ExportDatabaseBackupMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
      s3Bucket: isSet(object.s3Bucket) ? globalThis.String(object.s3Bucket) : "",
      s3Path: isSet(object.s3Path) ? globalThis.String(object.s3Path) : "",
    };
  },

  toJSON(message: ExportDatabaseBackupMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    if (message.s3Bucket !== "") {
      obj.s3Bucket = message.s3Bucket;
    }
    if (message.s3Path !== "") {
      obj.s3Path = message.s3Path;
    }
    return obj;
  },

  create(base?: DeepPartial<ExportDatabaseBackupMetadata>): ExportDatabaseBackupMetadata {
    return ExportDatabaseBackupMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportDatabaseBackupMetadata>): ExportDatabaseBackupMetadata {
    const message = createBaseExportDatabaseBackupMetadata();
    message.clusterId = object.clusterId ?? "";
    message.databaseName = object.databaseName ?? "";
    message.s3Bucket = object.s3Bucket ?? "";
    message.s3Path = object.s3Path ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExportDatabaseBackupMetadata.$type, ExportDatabaseBackupMetadata);

/** A set of methods for managing SQL Server databases. */
export type DatabaseServiceService = typeof DatabaseServiceService;
export const DatabaseServiceService = {
  /**
   * Returns the specified SQL Server database.
   *
   * To get the list of available SQL Server databases, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDatabaseRequest) => Buffer.from(GetDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDatabaseRequest.decode(value),
    responseSerialize: (value: Database) => Buffer.from(Database.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Database.decode(value),
  },
  /** Retrieves the list of SQL Server databases in the specified cluster. */
  list: {
    path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDatabasesRequest) => Buffer.from(ListDatabasesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDatabasesRequest.decode(value),
    responseSerialize: (value: ListDatabasesResponse) => Buffer.from(ListDatabasesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDatabasesResponse.decode(value),
  },
  /** Creates a new SQL Server database in the specified cluster. */
  create: {
    path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDatabaseRequest) => Buffer.from(CreateDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a new SQL Server database in the specified cluster from a backup. */
  restore: {
    path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreDatabaseRequest) => Buffer.from(RestoreDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Imports a new SQL Server database from an external backup. */
  importBackup: {
    path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/ImportBackup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ImportDatabaseBackupRequest) =>
      Buffer.from(ImportDatabaseBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ImportDatabaseBackupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Exports the last database backup to an external backup. */
  exportBackup: {
    path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/ExportBackup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExportDatabaseBackupRequest) =>
      Buffer.from(ExportDatabaseBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ExportDatabaseBackupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified SQL Server database. */
  delete: {
    path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDatabaseRequest) => Buffer.from(DeleteDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface DatabaseServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified SQL Server database.
   *
   * To get the list of available SQL Server databases, make a [List] request.
   */
  get: handleUnaryCall<GetDatabaseRequest, Database>;
  /** Retrieves the list of SQL Server databases in the specified cluster. */
  list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
  /** Creates a new SQL Server database in the specified cluster. */
  create: handleUnaryCall<CreateDatabaseRequest, Operation>;
  /** Creates a new SQL Server database in the specified cluster from a backup. */
  restore: handleUnaryCall<RestoreDatabaseRequest, Operation>;
  /** Imports a new SQL Server database from an external backup. */
  importBackup: handleUnaryCall<ImportDatabaseBackupRequest, Operation>;
  /** Exports the last database backup to an external backup. */
  exportBackup: handleUnaryCall<ExportDatabaseBackupRequest, Operation>;
  /** Deletes the specified SQL Server database. */
  delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
}

export interface DatabaseServiceClient extends Client {
  /**
   * Returns the specified SQL Server database.
   *
   * To get the list of available SQL Server databases, make a [List] request.
   */
  get(request: GetDatabaseRequest, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
  get(
    request: GetDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Database) => void,
  ): ClientUnaryCall;
  get(
    request: GetDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Database) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of SQL Server databases in the specified cluster. */
  list(
    request: ListDatabasesRequest,
    callback: (error: ServiceError | null, response: ListDatabasesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDatabasesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDatabasesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDatabasesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDatabasesResponse) => void,
  ): ClientUnaryCall;
  /** Creates a new SQL Server database in the specified cluster. */
  create(
    request: CreateDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Creates a new SQL Server database in the specified cluster from a backup. */
  restore(
    request: RestoreDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  restore(
    request: RestoreDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  restore(
    request: RestoreDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Imports a new SQL Server database from an external backup. */
  importBackup(
    request: ImportDatabaseBackupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  importBackup(
    request: ImportDatabaseBackupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  importBackup(
    request: ImportDatabaseBackupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Exports the last database backup to an external backup. */
  exportBackup(
    request: ExportDatabaseBackupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  exportBackup(
    request: ExportDatabaseBackupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  exportBackup(
    request: ExportDatabaseBackupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified SQL Server database. */
  delete(
    request: DeleteDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const DatabaseServiceClient = makeGenericClientConstructor(
  DatabaseServiceService,
  "yandex.cloud.mdb.sqlserver.v1.DatabaseService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DatabaseServiceClient;
  service: typeof DatabaseServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
