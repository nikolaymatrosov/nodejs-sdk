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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Database, DatabaseSpec } from "./database";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1";

export interface GetDatabaseRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.GetDatabaseRequest";
  /**
   * ID of the MongoDB cluster that the database belongs to.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the MongoDB database to return.
   * To get the name of the database use a [DatabaseService.List] request.
   */
  databaseName: string;
}

export interface ListDatabasesRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.ListDatabasesRequest";
  /**
   * ID of the MongoDB cluster to list databases in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListDatabasesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDatabasesResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListDatabasesResponse {
  $type: "yandex.cloud.mdb.mongodb.v1.ListDatabasesResponse";
  /** List of MongoDB databases. */
  databases: Database[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDatabasesRequest.page_size], use the [next_page_token] as the value
   * for the [ListDatabasesRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateDatabaseRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.CreateDatabaseRequest";
  /**
   * ID of the MongoDB cluster to create a database in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the database to create. */
  databaseSpec?: DatabaseSpec | undefined;
}

export interface CreateDatabaseMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.CreateDatabaseMetadata";
  /** ID of the MongoDB cluster where a database is being created. */
  clusterId: string;
  /** Name of the MongoDB database that is being created. */
  databaseName: string;
}

export interface DeleteDatabaseRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteDatabaseRequest";
  /**
   * ID of the MongoDB cluster to delete a database in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the database to delete.
   * To get the name of the database, use a [DatabaseService.List] request.
   */
  databaseName: string;
}

export interface DeleteDatabaseMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteDatabaseMetadata";
  /** ID of the MongoDB cluster where a database is being deleted. */
  clusterId: string;
  /** Name of the MongoDB database that is being deleted. */
  databaseName: string;
}

function createBaseGetDatabaseRequest(): GetDatabaseRequest {
  return { $type: "yandex.cloud.mdb.mongodb.v1.GetDatabaseRequest", clusterId: "", databaseName: "" };
}

export const GetDatabaseRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.GetDatabaseRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListDatabasesRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListDatabasesRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListDatabasesRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListDatabasesResponse", databases: [], nextPageToken: "" };
}

export const ListDatabasesResponse = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListDatabasesResponse" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.CreateDatabaseRequest", clusterId: "", databaseSpec: undefined };
}

export const CreateDatabaseRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.CreateDatabaseRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.CreateDatabaseMetadata", clusterId: "", databaseName: "" };
}

export const CreateDatabaseMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.CreateDatabaseMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.DeleteDatabaseRequest", clusterId: "", databaseName: "" };
}

export const DeleteDatabaseRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteDatabaseRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.DeleteDatabaseMetadata", clusterId: "", databaseName: "" };
}

export const DeleteDatabaseMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteDatabaseMetadata" as const,

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

/** A set of methods for managing MongoDB Database resources. */
export type DatabaseServiceService = typeof DatabaseServiceService;
export const DatabaseServiceService = {
  /**
   * Returns the specified MongoDB Database resource.
   *
   * To get the list of available MongoDB Database resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.mongodb.v1.DatabaseService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDatabaseRequest) => Buffer.from(GetDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDatabaseRequest.decode(value),
    responseSerialize: (value: Database) => Buffer.from(Database.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Database.decode(value),
  },
  /** Retrieves the list of MongoDB Database resources in the specified cluster. */
  list: {
    path: "/yandex.cloud.mdb.mongodb.v1.DatabaseService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDatabasesRequest) => Buffer.from(ListDatabasesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDatabasesRequest.decode(value),
    responseSerialize: (value: ListDatabasesResponse) => Buffer.from(ListDatabasesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDatabasesResponse.decode(value),
  },
  /** Creates a new MongoDB database in the specified cluster. */
  create: {
    path: "/yandex.cloud.mdb.mongodb.v1.DatabaseService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDatabaseRequest) => Buffer.from(CreateDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified MongoDB database. */
  delete: {
    path: "/yandex.cloud.mdb.mongodb.v1.DatabaseService/Delete",
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
   * Returns the specified MongoDB Database resource.
   *
   * To get the list of available MongoDB Database resources, make a [List] request.
   */
  get: handleUnaryCall<GetDatabaseRequest, Database>;
  /** Retrieves the list of MongoDB Database resources in the specified cluster. */
  list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
  /** Creates a new MongoDB database in the specified cluster. */
  create: handleUnaryCall<CreateDatabaseRequest, Operation>;
  /** Deletes the specified MongoDB database. */
  delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
}

export interface DatabaseServiceClient extends Client {
  /**
   * Returns the specified MongoDB Database resource.
   *
   * To get the list of available MongoDB Database resources, make a [List] request.
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
  /** Retrieves the list of MongoDB Database resources in the specified cluster. */
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
  /** Creates a new MongoDB database in the specified cluster. */
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
  /** Deletes the specified MongoDB database. */
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
  "yandex.cloud.mdb.mongodb.v1.DatabaseService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DatabaseServiceClient;
  service: typeof DatabaseServiceService;
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
