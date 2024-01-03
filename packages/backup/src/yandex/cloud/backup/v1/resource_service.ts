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
import { Resource, Task } from "./resource";

export const protobufPackage = "yandex.cloud.backup.v1";

export interface ListResourcesRequest {
  $type: "yandex.cloud.backup.v1.ListResourcesRequest";
  /** Folder ID. */
  folderId: string;
  /** Number of results per page. */
  pageSize: number;
  /** Token for the results page. */
  pageToken: string;
}

export interface ListResourcesResponse {
  $type: "yandex.cloud.backup.v1.ListResourcesResponse";
  /** Set of resource parameters. */
  resources: Resource[];
  /** Token for the next results page. */
  nextPageToken: string;
}

export interface GetResourceRequest {
  $type: "yandex.cloud.backup.v1.GetResourceRequest";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export interface GetResourceResponse {
  $type: "yandex.cloud.backup.v1.GetResourceResponse";
  /** Set of resource parameters. */
  resource?: Resource | undefined;
}

export interface DeleteResourceRequest {
  $type: "yandex.cloud.backup.v1.DeleteResourceRequest";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Resource ID is used to identify Compute Cloud instance in backup service. */
  resourceId: string;
}

export interface DeleteResourceMetadata {
  $type: "yandex.cloud.backup.v1.DeleteResourceMetadata";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export interface ListTasksRequest {
  $type: "yandex.cloud.backup.v1.ListTasksRequest";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Number of results per page. */
  pageSize: number;
  /** Token for the results page. */
  pageToken: string;
}

export interface ListTasksResponse {
  $type: "yandex.cloud.backup.v1.ListTasksResponse";
  /** Set of tasks parameters. */
  tasks: Task[];
  /** Token for the next results page. */
  nextPageToken: string;
}

export interface ListDirectoryRequest {
  $type: "yandex.cloud.backup.v1.ListDirectoryRequest";
  /** Folder ID. */
  folderId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Path to list items in. */
  path: string;
}

export interface ListDirectoryResponse {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse";
  items: ListDirectoryResponse_FilesystemItem[];
}

export interface ListDirectoryResponse_FilesystemItem {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem";
  /** Item name. */
  name: string;
  /** Might be Volume, Directory of File. */
  type: ListDirectoryResponse_FilesystemItem_Type;
  /** Might be Directory or File. */
  fileType: ListDirectoryResponse_FilesystemItem_Type;
  size: number;
}

export enum ListDirectoryResponse_FilesystemItem_Type {
  TYPE_UNSPECIFIED = 0,
  VOLUME = 1,
  DIRECTORY = 2,
  FILE = 3,
  UNRECOGNIZED = -1,
}

export function listDirectoryResponse_FilesystemItem_TypeFromJSON(
  object: any,
): ListDirectoryResponse_FilesystemItem_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return ListDirectoryResponse_FilesystemItem_Type.TYPE_UNSPECIFIED;
    case 1:
    case "VOLUME":
      return ListDirectoryResponse_FilesystemItem_Type.VOLUME;
    case 2:
    case "DIRECTORY":
      return ListDirectoryResponse_FilesystemItem_Type.DIRECTORY;
    case 3:
    case "FILE":
      return ListDirectoryResponse_FilesystemItem_Type.FILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListDirectoryResponse_FilesystemItem_Type.UNRECOGNIZED;
  }
}

export function listDirectoryResponse_FilesystemItem_TypeToJSON(
  object: ListDirectoryResponse_FilesystemItem_Type,
): string {
  switch (object) {
    case ListDirectoryResponse_FilesystemItem_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case ListDirectoryResponse_FilesystemItem_Type.VOLUME:
      return "VOLUME";
    case ListDirectoryResponse_FilesystemItem_Type.DIRECTORY:
      return "DIRECTORY";
    case ListDirectoryResponse_FilesystemItem_Type.FILE:
      return "FILE";
    case ListDirectoryResponse_FilesystemItem_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CreateDirectoryRequest {
  $type: "yandex.cloud.backup.v1.CreateDirectoryRequest";
  /** Folder ID. */
  folderId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Path to create directory in. */
  path: string;
}

export interface CreateDirectoryMetadata {
  $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Path to create directory metadata in. */
  path: string;
}

function createBaseListResourcesRequest(): ListResourcesRequest {
  return { $type: "yandex.cloud.backup.v1.ListResourcesRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListResourcesRequest = {
  $type: "yandex.cloud.backup.v1.ListResourcesRequest" as const,

  encode(message: ListResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): ListResourcesRequest {
    return {
      $type: ListResourcesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListResourcesRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(base?: I): ListResourcesRequest {
    return ListResourcesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(object: I): ListResourcesRequest {
    const message = createBaseListResourcesRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcesRequest.$type, ListResourcesRequest);

function createBaseListResourcesResponse(): ListResourcesResponse {
  return { $type: "yandex.cloud.backup.v1.ListResourcesResponse", resources: [], nextPageToken: "" };
}

export const ListResourcesResponse = {
  $type: "yandex.cloud.backup.v1.ListResourcesResponse" as const,

  encode(message: ListResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
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

          message.resources.push(Resource.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListResourcesResponse {
    return {
      $type: ListResourcesResponse.$type,
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourcesResponse>, I>>(base?: I): ListResourcesResponse {
    return ListResourcesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourcesResponse>, I>>(object: I): ListResourcesResponse {
    const message = createBaseListResourcesResponse();
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcesResponse.$type, ListResourcesResponse);

function createBaseGetResourceRequest(): GetResourceRequest {
  return { $type: "yandex.cloud.backup.v1.GetResourceRequest", computeInstanceId: "" };
}

export const GetResourceRequest = {
  $type: "yandex.cloud.backup.v1.GetResourceRequest" as const,

  encode(message: GetResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResourceRequest {
    return {
      $type: GetResourceRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
    };
  },

  toJSON(message: GetResourceRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourceRequest>, I>>(base?: I): GetResourceRequest {
    return GetResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourceRequest>, I>>(object: I): GetResourceRequest {
    const message = createBaseGetResourceRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetResourceRequest.$type, GetResourceRequest);

function createBaseGetResourceResponse(): GetResourceResponse {
  return { $type: "yandex.cloud.backup.v1.GetResourceResponse", resource: undefined };
}

export const GetResourceResponse = {
  $type: "yandex.cloud.backup.v1.GetResourceResponse" as const,

  encode(message: GetResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = Resource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResourceResponse {
    return {
      $type: GetResourceResponse.$type,
      resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined,
    };
  },

  toJSON(message: GetResourceResponse): unknown {
    const obj: any = {};
    if (message.resource !== undefined) {
      obj.resource = Resource.toJSON(message.resource);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourceResponse>, I>>(base?: I): GetResourceResponse {
    return GetResourceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourceResponse>, I>>(object: I): GetResourceResponse {
    const message = createBaseGetResourceResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Resource.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetResourceResponse.$type, GetResourceResponse);

function createBaseDeleteResourceRequest(): DeleteResourceRequest {
  return { $type: "yandex.cloud.backup.v1.DeleteResourceRequest", computeInstanceId: "", resourceId: "" };
}

export const DeleteResourceRequest = {
  $type: "yandex.cloud.backup.v1.DeleteResourceRequest" as const,

  encode(message: DeleteResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceRequest {
    return {
      $type: DeleteResourceRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: DeleteResourceRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourceRequest>, I>>(base?: I): DeleteResourceRequest {
    return DeleteResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteResourceRequest>, I>>(object: I): DeleteResourceRequest {
    const message = createBaseDeleteResourceRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceRequest.$type, DeleteResourceRequest);

function createBaseDeleteResourceMetadata(): DeleteResourceMetadata {
  return { $type: "yandex.cloud.backup.v1.DeleteResourceMetadata", computeInstanceId: "" };
}

export const DeleteResourceMetadata = {
  $type: "yandex.cloud.backup.v1.DeleteResourceMetadata" as const,

  encode(message: DeleteResourceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceMetadata {
    return {
      $type: DeleteResourceMetadata.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
    };
  },

  toJSON(message: DeleteResourceMetadata): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourceMetadata>, I>>(base?: I): DeleteResourceMetadata {
    return DeleteResourceMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteResourceMetadata>, I>>(object: I): DeleteResourceMetadata {
    const message = createBaseDeleteResourceMetadata();
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceMetadata.$type, DeleteResourceMetadata);

function createBaseListTasksRequest(): ListTasksRequest {
  return { $type: "yandex.cloud.backup.v1.ListTasksRequest", computeInstanceId: "", pageSize: 0, pageToken: "" };
}

export const ListTasksRequest = {
  $type: "yandex.cloud.backup.v1.ListTasksRequest" as const,

  encode(message: ListTasksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTasksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTasksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
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

  fromJSON(object: any): ListTasksRequest {
    return {
      $type: ListTasksRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListTasksRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTasksRequest>, I>>(base?: I): ListTasksRequest {
    return ListTasksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTasksRequest>, I>>(object: I): ListTasksRequest {
    const message = createBaseListTasksRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTasksRequest.$type, ListTasksRequest);

function createBaseListTasksResponse(): ListTasksResponse {
  return { $type: "yandex.cloud.backup.v1.ListTasksResponse", tasks: [], nextPageToken: "" };
}

export const ListTasksResponse = {
  $type: "yandex.cloud.backup.v1.ListTasksResponse" as const,

  encode(message: ListTasksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tasks) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTasksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTasksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tasks.push(Task.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTasksResponse {
    return {
      $type: ListTasksResponse.$type,
      tasks: globalThis.Array.isArray(object?.tasks) ? object.tasks.map((e: any) => Task.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTasksResponse): unknown {
    const obj: any = {};
    if (message.tasks?.length) {
      obj.tasks = message.tasks.map((e) => Task.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTasksResponse>, I>>(base?: I): ListTasksResponse {
    return ListTasksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTasksResponse>, I>>(object: I): ListTasksResponse {
    const message = createBaseListTasksResponse();
    message.tasks = object.tasks?.map((e) => Task.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTasksResponse.$type, ListTasksResponse);

function createBaseListDirectoryRequest(): ListDirectoryRequest {
  return { $type: "yandex.cloud.backup.v1.ListDirectoryRequest", folderId: "", computeInstanceId: "", path: "" };
}

export const ListDirectoryRequest = {
  $type: "yandex.cloud.backup.v1.ListDirectoryRequest" as const,

  encode(message: ListDirectoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDirectoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDirectoryRequest();
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

          message.computeInstanceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDirectoryRequest {
    return {
      $type: ListDirectoryRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: ListDirectoryRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDirectoryRequest>, I>>(base?: I): ListDirectoryRequest {
    return ListDirectoryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDirectoryRequest>, I>>(object: I): ListDirectoryRequest {
    const message = createBaseListDirectoryRequest();
    message.folderId = object.folderId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDirectoryRequest.$type, ListDirectoryRequest);

function createBaseListDirectoryResponse(): ListDirectoryResponse {
  return { $type: "yandex.cloud.backup.v1.ListDirectoryResponse", items: [] };
}

export const ListDirectoryResponse = {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse" as const,

  encode(message: ListDirectoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ListDirectoryResponse_FilesystemItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDirectoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDirectoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ListDirectoryResponse_FilesystemItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDirectoryResponse {
    return {
      $type: ListDirectoryResponse.$type,
      items: globalThis.Array.isArray(object?.items)
        ? object.items.map((e: any) => ListDirectoryResponse_FilesystemItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListDirectoryResponse): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => ListDirectoryResponse_FilesystemItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDirectoryResponse>, I>>(base?: I): ListDirectoryResponse {
    return ListDirectoryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDirectoryResponse>, I>>(object: I): ListDirectoryResponse {
    const message = createBaseListDirectoryResponse();
    message.items = object.items?.map((e) => ListDirectoryResponse_FilesystemItem.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListDirectoryResponse.$type, ListDirectoryResponse);

function createBaseListDirectoryResponse_FilesystemItem(): ListDirectoryResponse_FilesystemItem {
  return {
    $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem",
    name: "",
    type: 0,
    fileType: 0,
    size: 0,
  };
}

export const ListDirectoryResponse_FilesystemItem = {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem" as const,

  encode(message: ListDirectoryResponse_FilesystemItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.fileType !== 0) {
      writer.uint32(24).int32(message.fileType);
    }
    if (message.size !== 0) {
      writer.uint32(32).int64(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDirectoryResponse_FilesystemItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDirectoryResponse_FilesystemItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.fileType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDirectoryResponse_FilesystemItem {
    return {
      $type: ListDirectoryResponse_FilesystemItem.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? listDirectoryResponse_FilesystemItem_TypeFromJSON(object.type) : 0,
      fileType: isSet(object.fileType) ? listDirectoryResponse_FilesystemItem_TypeFromJSON(object.fileType) : 0,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
    };
  },

  toJSON(message: ListDirectoryResponse_FilesystemItem): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = listDirectoryResponse_FilesystemItem_TypeToJSON(message.type);
    }
    if (message.fileType !== 0) {
      obj.fileType = listDirectoryResponse_FilesystemItem_TypeToJSON(message.fileType);
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDirectoryResponse_FilesystemItem>, I>>(
    base?: I,
  ): ListDirectoryResponse_FilesystemItem {
    return ListDirectoryResponse_FilesystemItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDirectoryResponse_FilesystemItem>, I>>(
    object: I,
  ): ListDirectoryResponse_FilesystemItem {
    const message = createBaseListDirectoryResponse_FilesystemItem();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.fileType = object.fileType ?? 0;
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListDirectoryResponse_FilesystemItem.$type, ListDirectoryResponse_FilesystemItem);

function createBaseCreateDirectoryRequest(): CreateDirectoryRequest {
  return { $type: "yandex.cloud.backup.v1.CreateDirectoryRequest", folderId: "", computeInstanceId: "", path: "" };
}

export const CreateDirectoryRequest = {
  $type: "yandex.cloud.backup.v1.CreateDirectoryRequest" as const,

  encode(message: CreateDirectoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDirectoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDirectoryRequest();
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

          message.computeInstanceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDirectoryRequest {
    return {
      $type: CreateDirectoryRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: CreateDirectoryRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDirectoryRequest>, I>>(base?: I): CreateDirectoryRequest {
    return CreateDirectoryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDirectoryRequest>, I>>(object: I): CreateDirectoryRequest {
    const message = createBaseCreateDirectoryRequest();
    message.folderId = object.folderId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDirectoryRequest.$type, CreateDirectoryRequest);

function createBaseCreateDirectoryMetadata(): CreateDirectoryMetadata {
  return { $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata", computeInstanceId: "", path: "" };
}

export const CreateDirectoryMetadata = {
  $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata" as const,

  encode(message: CreateDirectoryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDirectoryMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDirectoryMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDirectoryMetadata {
    return {
      $type: CreateDirectoryMetadata.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: CreateDirectoryMetadata): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDirectoryMetadata>, I>>(base?: I): CreateDirectoryMetadata {
    return CreateDirectoryMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDirectoryMetadata>, I>>(object: I): CreateDirectoryMetadata {
    const message = createBaseCreateDirectoryMetadata();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDirectoryMetadata.$type, CreateDirectoryMetadata);

/** A set of methods for managing backup resources: [Compute Cloud instances](/docs/backup/concepts/vm-connection#os). */
export type ResourceServiceService = typeof ResourceServiceService;
export const ResourceServiceService = {
  /** List resources: Compute Cloud instances. */
  list: {
    path: "/yandex.cloud.backup.v1.ResourceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListResourcesRequest) => Buffer.from(ListResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListResourcesRequest.decode(value),
    responseSerialize: (value: ListResourcesResponse) => Buffer.from(ListResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListResourcesResponse.decode(value),
  },
  /** Get specific Compute Cloud instance. */
  get: {
    path: "/yandex.cloud.backup.v1.ResourceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetResourceRequest) => Buffer.from(GetResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetResourceRequest.decode(value),
    responseSerialize: (value: GetResourceResponse) => Buffer.from(GetResourceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetResourceResponse.decode(value),
  },
  /**
   * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
   * instance from Cloud Compute service.
   */
  delete: {
    path: "/yandex.cloud.backup.v1.ResourceService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteResourceRequest) => Buffer.from(DeleteResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteResourceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List tasks of resources. */
  listTasks: {
    path: "/yandex.cloud.backup.v1.ResourceService/ListTasks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTasksRequest) => Buffer.from(ListTasksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTasksRequest.decode(value),
    responseSerialize: (value: ListTasksResponse) => Buffer.from(ListTasksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTasksResponse.decode(value),
  },
  /**
   * ListDirectory returns all subdirectories found in requested directory identified
   * by the id.
   */
  listDirectory: {
    path: "/yandex.cloud.backup.v1.ResourceService/ListDirectory",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDirectoryRequest) => Buffer.from(ListDirectoryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDirectoryRequest.decode(value),
    responseSerialize: (value: ListDirectoryResponse) => Buffer.from(ListDirectoryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDirectoryResponse.decode(value),
  },
  /** CreateDirectory creates new directory by requested path. */
  createDirectory: {
    path: "/yandex.cloud.backup.v1.ResourceService/CreateDirectory",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDirectoryRequest) => Buffer.from(CreateDirectoryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDirectoryRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ResourceServiceServer extends UntypedServiceImplementation {
  /** List resources: Compute Cloud instances. */
  list: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
  /** Get specific Compute Cloud instance. */
  get: handleUnaryCall<GetResourceRequest, GetResourceResponse>;
  /**
   * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
   * instance from Cloud Compute service.
   */
  delete: handleUnaryCall<DeleteResourceRequest, Operation>;
  /** List tasks of resources. */
  listTasks: handleUnaryCall<ListTasksRequest, ListTasksResponse>;
  /**
   * ListDirectory returns all subdirectories found in requested directory identified
   * by the id.
   */
  listDirectory: handleUnaryCall<ListDirectoryRequest, ListDirectoryResponse>;
  /** CreateDirectory creates new directory by requested path. */
  createDirectory: handleUnaryCall<CreateDirectoryRequest, Operation>;
}

export interface ResourceServiceClient extends Client {
  /** List resources: Compute Cloud instances. */
  list(
    request: ListResourcesRequest,
    callback: (error: ServiceError | null, response: ListResourcesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListResourcesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListResourcesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListResourcesResponse) => void,
  ): ClientUnaryCall;
  /** Get specific Compute Cloud instance. */
  get(
    request: GetResourceRequest,
    callback: (error: ServiceError | null, response: GetResourceResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetResourceResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetResourceResponse) => void,
  ): ClientUnaryCall;
  /**
   * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
   * instance from Cloud Compute service.
   */
  delete(
    request: DeleteResourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** List tasks of resources. */
  listTasks(
    request: ListTasksRequest,
    callback: (error: ServiceError | null, response: ListTasksResponse) => void,
  ): ClientUnaryCall;
  listTasks(
    request: ListTasksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTasksResponse) => void,
  ): ClientUnaryCall;
  listTasks(
    request: ListTasksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTasksResponse) => void,
  ): ClientUnaryCall;
  /**
   * ListDirectory returns all subdirectories found in requested directory identified
   * by the id.
   */
  listDirectory(
    request: ListDirectoryRequest,
    callback: (error: ServiceError | null, response: ListDirectoryResponse) => void,
  ): ClientUnaryCall;
  listDirectory(
    request: ListDirectoryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDirectoryResponse) => void,
  ): ClientUnaryCall;
  listDirectory(
    request: ListDirectoryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDirectoryResponse) => void,
  ): ClientUnaryCall;
  /** CreateDirectory creates new directory by requested path. */
  createDirectory(
    request: CreateDirectoryRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createDirectory(
    request: CreateDirectoryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createDirectory(
    request: CreateDirectoryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ResourceServiceClient = makeGenericClientConstructor(
  ResourceServiceService,
  "yandex.cloud.backup.v1.ResourceService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ResourceServiceClient;
  service: typeof ResourceServiceService;
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
