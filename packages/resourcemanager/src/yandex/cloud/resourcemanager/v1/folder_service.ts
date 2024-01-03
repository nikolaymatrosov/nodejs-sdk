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
import { Folder } from "./folder";

export const protobufPackage = "yandex.cloud.resourcemanager.v1";

export interface GetFolderRequest {
  $type: "yandex.cloud.resourcemanager.v1.GetFolderRequest";
  /**
   * ID of the Folder resource to return.
   * To get the folder ID, use a [FolderService.List] request.
   */
  folderId: string;
}

export interface ListFoldersRequest {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersRequest";
  /**
   * ID of the cloud to list folders in.
   * To get the cloud ID, use a [yandex.cloud.resourcemanager.v1.CloudService.List] request.
   */
  cloudId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListFoldersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListFoldersResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [Folder.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListFoldersResponse {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersResponse";
  /** List of Folder resources. */
  folders: Folder[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListFoldersRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListFoldersRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateFolderRequest {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest";
  /**
   * ID of the cloud to create a folder in.
   * To get the cloud ID, use a [yandex.cloud.resourcemanager.v1.CloudService.List] request.
   */
  cloudId: string;
  /**
   * Name of the folder.
   * The name must be unique within the cloud.
   */
  name: string;
  /** Description of the folder. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
}

export interface CreateFolderRequest_LabelsEntry {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateFolderMetadata {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderMetadata";
  /** ID of the folder that is being created. */
  folderId: string;
}

export interface UpdateFolderRequest {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest";
  /**
   * ID of the Folder resource to update.
   * To get the folder ID, use a [FolderService.List] request.
   */
  folderId: string;
  /** Field mask that specifies which fields of the Folder resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the folder.
   * The name must be unique within the cloud.
   */
  name: string;
  /** Description of the folder. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
}

export interface UpdateFolderRequest_LabelsEntry {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateFolderMetadata {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderMetadata";
  /** ID of the Folder resource that is being updated. */
  folderId: string;
}

export interface DeleteFolderRequest {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderRequest";
  /**
   * ID of the folder to delete.
   * To get the folder ID, use a [FolderService.List] request.
   */
  folderId: string;
  /**
   * The timestamp after which the process of deleting the folder should begin.
   * Until this timestamp, the folder goes into the [Folder.Status.PENDING_DELETION] state and all resources in this
   * folder are stopped. In this state, it is possible to cancel the delete operation without any loss.
   * After this timestamp, the status of the folder will become [Folder.Status.DELETING] and the process of deleting
   * all the resources  of the folder will be started. If [delete_after] is not specified it will be
   * (now + 24 hours). To initiate an immediate deletion [delete_after] must be <= now.
   */
  deleteAfter?: Date | undefined;
}

export interface DeleteFolderMetadata {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderMetadata";
  /** ID of the folder that is being deleted. */
  folderId: string;
  /** The timestamp after which the process of deleting the folder should begin. */
  deleteAfter?:
    | Date
    | undefined;
  /** Information about operation cancellation */
  cancelledBy: string;
  cancelledAt?: Date | undefined;
}

export interface ListFolderOperationsRequest {
  $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsRequest";
  /** ID of the Folder resource to list operations for. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListFolderOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListFolderOperationsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListFolderOperationsResponse {
  $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsResponse";
  /** List of operations for the specified folder. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListFolderOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListFolderOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetFolderRequest(): GetFolderRequest {
  return { $type: "yandex.cloud.resourcemanager.v1.GetFolderRequest", folderId: "" };
}

export const GetFolderRequest = {
  $type: "yandex.cloud.resourcemanager.v1.GetFolderRequest" as const,

  encode(message: GetFolderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFolderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFolderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFolderRequest {
    return {
      $type: GetFolderRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: GetFolderRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFolderRequest>, I>>(base?: I): GetFolderRequest {
    return GetFolderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFolderRequest>, I>>(object: I): GetFolderRequest {
    const message = createBaseGetFolderRequest();
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFolderRequest.$type, GetFolderRequest);

function createBaseListFoldersRequest(): ListFoldersRequest {
  return {
    $type: "yandex.cloud.resourcemanager.v1.ListFoldersRequest",
    cloudId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListFoldersRequest = {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersRequest" as const,

  encode(message: ListFoldersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cloudId !== "") {
      writer.uint32(10).string(message.cloudId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFoldersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFoldersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cloudId = reader.string();
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

  fromJSON(object: any): ListFoldersRequest {
    return {
      $type: ListFoldersRequest.$type,
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListFoldersRequest): unknown {
    const obj: any = {};
    if (message.cloudId !== "") {
      obj.cloudId = message.cloudId;
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

  create<I extends Exact<DeepPartial<ListFoldersRequest>, I>>(base?: I): ListFoldersRequest {
    return ListFoldersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFoldersRequest>, I>>(object: I): ListFoldersRequest {
    const message = createBaseListFoldersRequest();
    message.cloudId = object.cloudId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFoldersRequest.$type, ListFoldersRequest);

function createBaseListFoldersResponse(): ListFoldersResponse {
  return { $type: "yandex.cloud.resourcemanager.v1.ListFoldersResponse", folders: [], nextPageToken: "" };
}

export const ListFoldersResponse = {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersResponse" as const,

  encode(message: ListFoldersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.folders) {
      Folder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFoldersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFoldersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folders.push(Folder.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListFoldersResponse {
    return {
      $type: ListFoldersResponse.$type,
      folders: globalThis.Array.isArray(object?.folders) ? object.folders.map((e: any) => Folder.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFoldersResponse): unknown {
    const obj: any = {};
    if (message.folders?.length) {
      obj.folders = message.folders.map((e) => Folder.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFoldersResponse>, I>>(base?: I): ListFoldersResponse {
    return ListFoldersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFoldersResponse>, I>>(object: I): ListFoldersResponse {
    const message = createBaseListFoldersResponse();
    message.folders = object.folders?.map((e) => Folder.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFoldersResponse.$type, ListFoldersResponse);

function createBaseCreateFolderRequest(): CreateFolderRequest {
  return {
    $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest",
    cloudId: "",
    name: "",
    description: "",
    labels: {},
  };
}

export const CreateFolderRequest = {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest" as const,

  encode(message: CreateFolderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cloudId !== "") {
      writer.uint32(10).string(message.cloudId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateFolderRequest_LabelsEntry.encode({
        $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFolderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFolderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cloudId = reader.string();
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

          const entry4 = CreateFolderRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFolderRequest {
    return {
      $type: CreateFolderRequest.$type,
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateFolderRequest): unknown {
    const obj: any = {};
    if (message.cloudId !== "") {
      obj.cloudId = message.cloudId;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFolderRequest>, I>>(base?: I): CreateFolderRequest {
    return CreateFolderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFolderRequest>, I>>(object: I): CreateFolderRequest {
    const message = createBaseCreateFolderRequest();
    message.cloudId = object.cloudId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(CreateFolderRequest.$type, CreateFolderRequest);

function createBaseCreateFolderRequest_LabelsEntry(): CreateFolderRequest_LabelsEntry {
  return { $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry", key: "", value: "" };
}

export const CreateFolderRequest_LabelsEntry = {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry" as const,

  encode(message: CreateFolderRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFolderRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFolderRequest_LabelsEntry();
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

  fromJSON(object: any): CreateFolderRequest_LabelsEntry {
    return {
      $type: CreateFolderRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateFolderRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFolderRequest_LabelsEntry>, I>>(base?: I): CreateFolderRequest_LabelsEntry {
    return CreateFolderRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFolderRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateFolderRequest_LabelsEntry {
    const message = createBaseCreateFolderRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFolderRequest_LabelsEntry.$type, CreateFolderRequest_LabelsEntry);

function createBaseCreateFolderMetadata(): CreateFolderMetadata {
  return { $type: "yandex.cloud.resourcemanager.v1.CreateFolderMetadata", folderId: "" };
}

export const CreateFolderMetadata = {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderMetadata" as const,

  encode(message: CreateFolderMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFolderMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFolderMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFolderMetadata {
    return {
      $type: CreateFolderMetadata.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: CreateFolderMetadata): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFolderMetadata>, I>>(base?: I): CreateFolderMetadata {
    return CreateFolderMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFolderMetadata>, I>>(object: I): CreateFolderMetadata {
    const message = createBaseCreateFolderMetadata();
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFolderMetadata.$type, CreateFolderMetadata);

function createBaseUpdateFolderRequest(): UpdateFolderRequest {
  return {
    $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest",
    folderId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
  };
}

export const UpdateFolderRequest = {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest" as const,

  encode(message: UpdateFolderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
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
      UpdateFolderRequest_LabelsEntry.encode({
        $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFolderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFolderRequest();
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

          const entry5 = UpdateFolderRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFolderRequest {
    return {
      $type: UpdateFolderRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpdateFolderRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFolderRequest>, I>>(base?: I): UpdateFolderRequest {
    return UpdateFolderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFolderRequest>, I>>(object: I): UpdateFolderRequest {
    const message = createBaseUpdateFolderRequest();
    message.folderId = object.folderId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(UpdateFolderRequest.$type, UpdateFolderRequest);

function createBaseUpdateFolderRequest_LabelsEntry(): UpdateFolderRequest_LabelsEntry {
  return { $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateFolderRequest_LabelsEntry = {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry" as const,

  encode(message: UpdateFolderRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFolderRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFolderRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateFolderRequest_LabelsEntry {
    return {
      $type: UpdateFolderRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateFolderRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFolderRequest_LabelsEntry>, I>>(base?: I): UpdateFolderRequest_LabelsEntry {
    return UpdateFolderRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFolderRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateFolderRequest_LabelsEntry {
    const message = createBaseUpdateFolderRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFolderRequest_LabelsEntry.$type, UpdateFolderRequest_LabelsEntry);

function createBaseUpdateFolderMetadata(): UpdateFolderMetadata {
  return { $type: "yandex.cloud.resourcemanager.v1.UpdateFolderMetadata", folderId: "" };
}

export const UpdateFolderMetadata = {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderMetadata" as const,

  encode(message: UpdateFolderMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFolderMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFolderMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFolderMetadata {
    return {
      $type: UpdateFolderMetadata.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: UpdateFolderMetadata): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFolderMetadata>, I>>(base?: I): UpdateFolderMetadata {
    return UpdateFolderMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFolderMetadata>, I>>(object: I): UpdateFolderMetadata {
    const message = createBaseUpdateFolderMetadata();
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFolderMetadata.$type, UpdateFolderMetadata);

function createBaseDeleteFolderRequest(): DeleteFolderRequest {
  return { $type: "yandex.cloud.resourcemanager.v1.DeleteFolderRequest", folderId: "", deleteAfter: undefined };
}

export const DeleteFolderRequest = {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderRequest" as const,

  encode(message: DeleteFolderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.deleteAfter !== undefined) {
      Timestamp.encode(toTimestamp(message.deleteAfter), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFolderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFolderRequest();
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

          message.deleteAfter = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFolderRequest {
    return {
      $type: DeleteFolderRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      deleteAfter: isSet(object.deleteAfter) ? fromJsonTimestamp(object.deleteAfter) : undefined,
    };
  },

  toJSON(message: DeleteFolderRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.deleteAfter !== undefined) {
      obj.deleteAfter = message.deleteAfter.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFolderRequest>, I>>(base?: I): DeleteFolderRequest {
    return DeleteFolderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteFolderRequest>, I>>(object: I): DeleteFolderRequest {
    const message = createBaseDeleteFolderRequest();
    message.folderId = object.folderId ?? "";
    message.deleteAfter = object.deleteAfter ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DeleteFolderRequest.$type, DeleteFolderRequest);

function createBaseDeleteFolderMetadata(): DeleteFolderMetadata {
  return {
    $type: "yandex.cloud.resourcemanager.v1.DeleteFolderMetadata",
    folderId: "",
    deleteAfter: undefined,
    cancelledBy: "",
    cancelledAt: undefined,
  };
}

export const DeleteFolderMetadata = {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderMetadata" as const,

  encode(message: DeleteFolderMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.deleteAfter !== undefined) {
      Timestamp.encode(toTimestamp(message.deleteAfter), writer.uint32(18).fork()).ldelim();
    }
    if (message.cancelledBy !== "") {
      writer.uint32(26).string(message.cancelledBy);
    }
    if (message.cancelledAt !== undefined) {
      Timestamp.encode(toTimestamp(message.cancelledAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFolderMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFolderMetadata();
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

          message.deleteAfter = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cancelledBy = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cancelledAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFolderMetadata {
    return {
      $type: DeleteFolderMetadata.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      deleteAfter: isSet(object.deleteAfter) ? fromJsonTimestamp(object.deleteAfter) : undefined,
      cancelledBy: isSet(object.cancelledBy) ? globalThis.String(object.cancelledBy) : "",
      cancelledAt: isSet(object.cancelledAt) ? fromJsonTimestamp(object.cancelledAt) : undefined,
    };
  },

  toJSON(message: DeleteFolderMetadata): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.deleteAfter !== undefined) {
      obj.deleteAfter = message.deleteAfter.toISOString();
    }
    if (message.cancelledBy !== "") {
      obj.cancelledBy = message.cancelledBy;
    }
    if (message.cancelledAt !== undefined) {
      obj.cancelledAt = message.cancelledAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFolderMetadata>, I>>(base?: I): DeleteFolderMetadata {
    return DeleteFolderMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteFolderMetadata>, I>>(object: I): DeleteFolderMetadata {
    const message = createBaseDeleteFolderMetadata();
    message.folderId = object.folderId ?? "";
    message.deleteAfter = object.deleteAfter ?? undefined;
    message.cancelledBy = object.cancelledBy ?? "";
    message.cancelledAt = object.cancelledAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DeleteFolderMetadata.$type, DeleteFolderMetadata);

function createBaseListFolderOperationsRequest(): ListFolderOperationsRequest {
  return {
    $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListFolderOperationsRequest = {
  $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsRequest" as const,

  encode(message: ListFolderOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFolderOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFolderOperationsRequest();
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

  fromJSON(object: any): ListFolderOperationsRequest {
    return {
      $type: ListFolderOperationsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListFolderOperationsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListFolderOperationsRequest>, I>>(base?: I): ListFolderOperationsRequest {
    return ListFolderOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFolderOperationsRequest>, I>>(object: I): ListFolderOperationsRequest {
    const message = createBaseListFolderOperationsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFolderOperationsRequest.$type, ListFolderOperationsRequest);

function createBaseListFolderOperationsResponse(): ListFolderOperationsResponse {
  return { $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListFolderOperationsResponse = {
  $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsResponse" as const,

  encode(message: ListFolderOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFolderOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFolderOperationsResponse();
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

  fromJSON(object: any): ListFolderOperationsResponse {
    return {
      $type: ListFolderOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFolderOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFolderOperationsResponse>, I>>(base?: I): ListFolderOperationsResponse {
    return ListFolderOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFolderOperationsResponse>, I>>(object: I): ListFolderOperationsResponse {
    const message = createBaseListFolderOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFolderOperationsResponse.$type, ListFolderOperationsResponse);

/** A set of methods for managing Folder resources. */
export type FolderServiceService = typeof FolderServiceService;
export const FolderServiceService = {
  /**
   * Returns the specified Folder resource.
   *
   * To get the list of available Folder resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFolderRequest) => Buffer.from(GetFolderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFolderRequest.decode(value),
    responseSerialize: (value: Folder) => Buffer.from(Folder.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Folder.decode(value),
  },
  /** Retrieves the list of Folder resources in the specified cloud. */
  list: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFoldersRequest) => Buffer.from(ListFoldersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFoldersRequest.decode(value),
    responseSerialize: (value: ListFoldersResponse) => Buffer.from(ListFoldersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFoldersResponse.decode(value),
  },
  /** Creates a folder in the specified cloud. */
  create: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFolderRequest) => Buffer.from(CreateFolderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateFolderRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified folder. */
  update: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateFolderRequest) => Buffer.from(UpdateFolderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateFolderRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified folder. */
  delete: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFolderRequest) => Buffer.from(DeleteFolderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteFolderRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified folder. */
  listOperations: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFolderOperationsRequest) =>
      Buffer.from(ListFolderOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFolderOperationsRequest.decode(value),
    responseSerialize: (value: ListFolderOperationsResponse) =>
      Buffer.from(ListFolderOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFolderOperationsResponse.decode(value),
  },
  /** Lists access bindings for the specified folder. */
  listAccessBindings: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified folder. */
  setAccessBindings: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified folder. */
  updateAccessBindings: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface FolderServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Folder resource.
   *
   * To get the list of available Folder resources, make a [List] request.
   */
  get: handleUnaryCall<GetFolderRequest, Folder>;
  /** Retrieves the list of Folder resources in the specified cloud. */
  list: handleUnaryCall<ListFoldersRequest, ListFoldersResponse>;
  /** Creates a folder in the specified cloud. */
  create: handleUnaryCall<CreateFolderRequest, Operation>;
  /** Updates the specified folder. */
  update: handleUnaryCall<UpdateFolderRequest, Operation>;
  /** Deletes the specified folder. */
  delete: handleUnaryCall<DeleteFolderRequest, Operation>;
  /** Lists operations for the specified folder. */
  listOperations: handleUnaryCall<ListFolderOperationsRequest, ListFolderOperationsResponse>;
  /** Lists access bindings for the specified folder. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the specified folder. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified folder. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface FolderServiceClient extends Client {
  /**
   * Returns the specified Folder resource.
   *
   * To get the list of available Folder resources, make a [List] request.
   */
  get(request: GetFolderRequest, callback: (error: ServiceError | null, response: Folder) => void): ClientUnaryCall;
  get(
    request: GetFolderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Folder) => void,
  ): ClientUnaryCall;
  get(
    request: GetFolderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Folder) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Folder resources in the specified cloud. */
  list(
    request: ListFoldersRequest,
    callback: (error: ServiceError | null, response: ListFoldersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListFoldersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFoldersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListFoldersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFoldersResponse) => void,
  ): ClientUnaryCall;
  /** Creates a folder in the specified cloud. */
  create(
    request: CreateFolderRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateFolderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateFolderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified folder. */
  update(
    request: UpdateFolderRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateFolderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateFolderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified folder. */
  delete(
    request: DeleteFolderRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteFolderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteFolderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified folder. */
  listOperations(
    request: ListFolderOperationsRequest,
    callback: (error: ServiceError | null, response: ListFolderOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListFolderOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFolderOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListFolderOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFolderOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists access bindings for the specified folder. */
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
  /** Sets access bindings for the specified folder. */
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
  /** Updates access bindings for the specified folder. */
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

export const FolderServiceClient = makeGenericClientConstructor(
  FolderServiceService,
  "yandex.cloud.resourcemanager.v1.FolderService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FolderServiceClient;
  service: typeof FolderServiceService;
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
