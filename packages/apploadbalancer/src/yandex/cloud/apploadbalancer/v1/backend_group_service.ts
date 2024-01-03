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
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import {
  BackendGroup,
  GrpcBackend,
  GrpcBackendGroup,
  HttpBackend,
  HttpBackendGroup,
  StreamBackend,
  StreamBackendGroup,
} from "./backend_group";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

export interface GetBackendGroupRequest {
  $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest";
  /**
   * ID of the backend group to return.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
}

export interface ListBackendGroupsRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest";
  /**
   * ID of the folder to list backend groups in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListBackendGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListBackendGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters backend groups listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [BackendGroup.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-backend-group`.
   */
  filter: string;
}

export interface ListBackendGroupsResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse";
  /** List of backend groups in the specified folder. */
  backendGroups: BackendGroup[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListBackendGroupsRequest.page_size], use `next_page_token` as the value
   * for the [ListBackendGroupsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteBackendGroupRequest {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest";
  /**
   * ID of the backend group to delete.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
}

export interface DeleteBackendGroupMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata";
  /** ID of the backend group that is being deleted. */
  backendGroupId: string;
}

export interface UpdateBackendGroupRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest";
  /**
   * ID of the backend group to update.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
  /** Field mask that specifies which attributes of the backend group should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the backend group.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the backend group. */
  description: string;
  /**
   * Backend group labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [BackendGroupService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /** New list of HTTP backends that the backend group will consist of. */
  http?:
    | HttpBackendGroup
    | undefined;
  /** New list of gRPC backends that the backend group will consist of. */
  grpc?:
    | GrpcBackendGroup
    | undefined;
  /** New list of stream (TCP) backends that the backend group will consist of. */
  stream?: StreamBackendGroup | undefined;
}

export interface UpdateBackendGroupRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateBackendGroupMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata";
  /** ID of the backend group that is being updated. */
  backendGroupId: string;
}

export interface CreateBackendGroupRequest {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest";
  /**
   * ID of the folder to create a backend group in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the backend group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the backend group. */
  description: string;
  /**
   * Backend group labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /** List of HTTP backends that the backend group will consist of. */
  http?:
    | HttpBackendGroup
    | undefined;
  /** List of gRPC backends that the backend group consists of. */
  grpc?:
    | GrpcBackendGroup
    | undefined;
  /** List of stream (TCP) backends that the backend group consists of. */
  stream?: StreamBackendGroup | undefined;
}

export interface CreateBackendGroupRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateBackendGroupMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata";
  /** ID of the backend group that is being created. */
  backendGroupId: string;
}

export interface AddBackendRequest {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest";
  /**
   * ID of the backend group to add a backend to.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
  /** HTTP backend to add to the backend group. */
  http?:
    | HttpBackend
    | undefined;
  /** gRPC backend to add to the backend group. */
  grpc?:
    | GrpcBackend
    | undefined;
  /** New settings for the Stream backend. */
  stream?: StreamBackend | undefined;
}

export interface AddBackendMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata";
  /** ID of the backend group that the backend is being added to. */
  backendGroupId: string;
  /** Name of the backend that is being added to the backend group. */
  backendName: string;
}

export interface UpdateBackendRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest";
  /** ID of the backend group to update the backend in. */
  backendGroupId: string;
  /** Field mask that specifies which attributes of the backend should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New settings for the HTTP backend. */
  http?:
    | HttpBackend
    | undefined;
  /** New settings for the gRPC backend. */
  grpc?:
    | GrpcBackend
    | undefined;
  /** New settings for the stream (TCP) backend. */
  stream?: StreamBackend | undefined;
}

export interface UpdateBackendMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata";
  /** ID of the backend group that the backend is being updated it. */
  backendGroupId: string;
  /** Name of the backend that is being updated. */
  backendName: string;
}

export interface RemoveBackendRequest {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest";
  /**
   * ID of the backend group to remove a backend from.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
  /**
   * Name of the backend to remove.
   *
   * To get the backend name, make a [BackendGroupService.Get] request.
   */
  backendName: string;
}

export interface RemoveBackendMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata";
  /** ID of the backend group that the backend is being removed from. */
  backendGroupId: string;
  /** Name of the backend that is being removed. */
  backendName: string;
}

export interface ListBackendGroupOperationsRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest";
  /**
   * ID of the backend group to get operations for.
   *
   * To get the backend group ID, use a [BackendGroupService.List] request.
   */
  backendGroupId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListBackendGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListBackendGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListBackendGroupOperationsResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse";
  /** List of operations for the specified backend group. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListBackendGroupOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListBackendGroupOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetBackendGroupRequest(): GetBackendGroupRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest", backendGroupId: "" };
}

export const GetBackendGroupRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest" as const,

  encode(message: GetBackendGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBackendGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBackendGroupRequest {
    return {
      $type: GetBackendGroupRequest.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
    };
  },

  toJSON(message: GetBackendGroupRequest): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBackendGroupRequest>, I>>(base?: I): GetBackendGroupRequest {
    return GetBackendGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBackendGroupRequest>, I>>(object: I): GetBackendGroupRequest {
    const message = createBaseGetBackendGroupRequest();
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBackendGroupRequest.$type, GetBackendGroupRequest);

function createBaseListBackendGroupsRequest(): ListBackendGroupsRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListBackendGroupsRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest" as const,

  encode(message: ListBackendGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackendGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackendGroupsRequest();
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

  fromJSON(object: any): ListBackendGroupsRequest {
    return {
      $type: ListBackendGroupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListBackendGroupsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListBackendGroupsRequest>, I>>(base?: I): ListBackendGroupsRequest {
    return ListBackendGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackendGroupsRequest>, I>>(object: I): ListBackendGroupsRequest {
    const message = createBaseListBackendGroupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackendGroupsRequest.$type, ListBackendGroupsRequest);

function createBaseListBackendGroupsResponse(): ListBackendGroupsResponse {
  return { $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse", backendGroups: [], nextPageToken: "" };
}

export const ListBackendGroupsResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse" as const,

  encode(message: ListBackendGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backendGroups) {
      BackendGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackendGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackendGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroups.push(BackendGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListBackendGroupsResponse {
    return {
      $type: ListBackendGroupsResponse.$type,
      backendGroups: globalThis.Array.isArray(object?.backendGroups)
        ? object.backendGroups.map((e: any) => BackendGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBackendGroupsResponse): unknown {
    const obj: any = {};
    if (message.backendGroups?.length) {
      obj.backendGroups = message.backendGroups.map((e) => BackendGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBackendGroupsResponse>, I>>(base?: I): ListBackendGroupsResponse {
    return ListBackendGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackendGroupsResponse>, I>>(object: I): ListBackendGroupsResponse {
    const message = createBaseListBackendGroupsResponse();
    message.backendGroups = object.backendGroups?.map((e) => BackendGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackendGroupsResponse.$type, ListBackendGroupsResponse);

function createBaseDeleteBackendGroupRequest(): DeleteBackendGroupRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest", backendGroupId: "" };
}

export const DeleteBackendGroupRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest" as const,

  encode(message: DeleteBackendGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackendGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBackendGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBackendGroupRequest {
    return {
      $type: DeleteBackendGroupRequest.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
    };
  },

  toJSON(message: DeleteBackendGroupRequest): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBackendGroupRequest>, I>>(base?: I): DeleteBackendGroupRequest {
    return DeleteBackendGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBackendGroupRequest>, I>>(object: I): DeleteBackendGroupRequest {
    const message = createBaseDeleteBackendGroupRequest();
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBackendGroupRequest.$type, DeleteBackendGroupRequest);

function createBaseDeleteBackendGroupMetadata(): DeleteBackendGroupMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata", backendGroupId: "" };
}

export const DeleteBackendGroupMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata" as const,

  encode(message: DeleteBackendGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackendGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBackendGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBackendGroupMetadata {
    return {
      $type: DeleteBackendGroupMetadata.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
    };
  },

  toJSON(message: DeleteBackendGroupMetadata): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBackendGroupMetadata>, I>>(base?: I): DeleteBackendGroupMetadata {
    return DeleteBackendGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBackendGroupMetadata>, I>>(object: I): DeleteBackendGroupMetadata {
    const message = createBaseDeleteBackendGroupMetadata();
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBackendGroupMetadata.$type, DeleteBackendGroupMetadata);

function createBaseUpdateBackendGroupRequest(): UpdateBackendGroupRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest",
    backendGroupId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    http: undefined,
    grpc: undefined,
    stream: undefined,
  };
}

export const UpdateBackendGroupRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest" as const,

  encode(message: UpdateBackendGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
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
      UpdateBackendGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.http !== undefined) {
      HttpBackendGroup.encode(message.http, writer.uint32(50).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcBackendGroup.encode(message.grpc, writer.uint32(58).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamBackendGroup.encode(message.stream, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBackendGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBackendGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
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

          const entry5 = UpdateBackendGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.http = HttpBackendGroup.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.grpc = GrpcBackendGroup.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.stream = StreamBackendGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateBackendGroupRequest {
    return {
      $type: UpdateBackendGroupRequest.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      http: isSet(object.http) ? HttpBackendGroup.fromJSON(object.http) : undefined,
      grpc: isSet(object.grpc) ? GrpcBackendGroup.fromJSON(object.grpc) : undefined,
      stream: isSet(object.stream) ? StreamBackendGroup.fromJSON(object.stream) : undefined,
    };
  },

  toJSON(message: UpdateBackendGroupRequest): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
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
    if (message.http !== undefined) {
      obj.http = HttpBackendGroup.toJSON(message.http);
    }
    if (message.grpc !== undefined) {
      obj.grpc = GrpcBackendGroup.toJSON(message.grpc);
    }
    if (message.stream !== undefined) {
      obj.stream = StreamBackendGroup.toJSON(message.stream);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBackendGroupRequest>, I>>(base?: I): UpdateBackendGroupRequest {
    return UpdateBackendGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateBackendGroupRequest>, I>>(object: I): UpdateBackendGroupRequest {
    const message = createBaseUpdateBackendGroupRequest();
    message.backendGroupId = object.backendGroupId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.http = (object.http !== undefined && object.http !== null)
      ? HttpBackendGroup.fromPartial(object.http)
      : undefined;
    message.grpc = (object.grpc !== undefined && object.grpc !== null)
      ? GrpcBackendGroup.fromPartial(object.grpc)
      : undefined;
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? StreamBackendGroup.fromPartial(object.stream)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateBackendGroupRequest.$type, UpdateBackendGroupRequest);

function createBaseUpdateBackendGroupRequest_LabelsEntry(): UpdateBackendGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateBackendGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry" as const,

  encode(message: UpdateBackendGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBackendGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBackendGroupRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateBackendGroupRequest_LabelsEntry {
    return {
      $type: UpdateBackendGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateBackendGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBackendGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateBackendGroupRequest_LabelsEntry {
    return UpdateBackendGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateBackendGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateBackendGroupRequest_LabelsEntry {
    const message = createBaseUpdateBackendGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateBackendGroupRequest_LabelsEntry.$type, UpdateBackendGroupRequest_LabelsEntry);

function createBaseUpdateBackendGroupMetadata(): UpdateBackendGroupMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata", backendGroupId: "" };
}

export const UpdateBackendGroupMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata" as const,

  encode(message: UpdateBackendGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBackendGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBackendGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateBackendGroupMetadata {
    return {
      $type: UpdateBackendGroupMetadata.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
    };
  },

  toJSON(message: UpdateBackendGroupMetadata): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBackendGroupMetadata>, I>>(base?: I): UpdateBackendGroupMetadata {
    return UpdateBackendGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateBackendGroupMetadata>, I>>(object: I): UpdateBackendGroupMetadata {
    const message = createBaseUpdateBackendGroupMetadata();
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateBackendGroupMetadata.$type, UpdateBackendGroupMetadata);

function createBaseCreateBackendGroupRequest(): CreateBackendGroupRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    http: undefined,
    grpc: undefined,
    stream: undefined,
  };
}

export const CreateBackendGroupRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest" as const,

  encode(message: CreateBackendGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateBackendGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.http !== undefined) {
      HttpBackendGroup.encode(message.http, writer.uint32(42).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcBackendGroup.encode(message.grpc, writer.uint32(50).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamBackendGroup.encode(message.stream, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBackendGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBackendGroupRequest();
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

          const entry4 = CreateBackendGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.http = HttpBackendGroup.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.grpc = GrpcBackendGroup.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.stream = StreamBackendGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateBackendGroupRequest {
    return {
      $type: CreateBackendGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      http: isSet(object.http) ? HttpBackendGroup.fromJSON(object.http) : undefined,
      grpc: isSet(object.grpc) ? GrpcBackendGroup.fromJSON(object.grpc) : undefined,
      stream: isSet(object.stream) ? StreamBackendGroup.fromJSON(object.stream) : undefined,
    };
  },

  toJSON(message: CreateBackendGroupRequest): unknown {
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
    if (message.http !== undefined) {
      obj.http = HttpBackendGroup.toJSON(message.http);
    }
    if (message.grpc !== undefined) {
      obj.grpc = GrpcBackendGroup.toJSON(message.grpc);
    }
    if (message.stream !== undefined) {
      obj.stream = StreamBackendGroup.toJSON(message.stream);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBackendGroupRequest>, I>>(base?: I): CreateBackendGroupRequest {
    return CreateBackendGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateBackendGroupRequest>, I>>(object: I): CreateBackendGroupRequest {
    const message = createBaseCreateBackendGroupRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.http = (object.http !== undefined && object.http !== null)
      ? HttpBackendGroup.fromPartial(object.http)
      : undefined;
    message.grpc = (object.grpc !== undefined && object.grpc !== null)
      ? GrpcBackendGroup.fromPartial(object.grpc)
      : undefined;
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? StreamBackendGroup.fromPartial(object.stream)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateBackendGroupRequest.$type, CreateBackendGroupRequest);

function createBaseCreateBackendGroupRequest_LabelsEntry(): CreateBackendGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry", key: "", value: "" };
}

export const CreateBackendGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry" as const,

  encode(message: CreateBackendGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBackendGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBackendGroupRequest_LabelsEntry();
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

  fromJSON(object: any): CreateBackendGroupRequest_LabelsEntry {
    return {
      $type: CreateBackendGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateBackendGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBackendGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateBackendGroupRequest_LabelsEntry {
    return CreateBackendGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateBackendGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateBackendGroupRequest_LabelsEntry {
    const message = createBaseCreateBackendGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBackendGroupRequest_LabelsEntry.$type, CreateBackendGroupRequest_LabelsEntry);

function createBaseCreateBackendGroupMetadata(): CreateBackendGroupMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata", backendGroupId: "" };
}

export const CreateBackendGroupMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata" as const,

  encode(message: CreateBackendGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBackendGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBackendGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateBackendGroupMetadata {
    return {
      $type: CreateBackendGroupMetadata.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
    };
  },

  toJSON(message: CreateBackendGroupMetadata): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBackendGroupMetadata>, I>>(base?: I): CreateBackendGroupMetadata {
    return CreateBackendGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateBackendGroupMetadata>, I>>(object: I): CreateBackendGroupMetadata {
    const message = createBaseCreateBackendGroupMetadata();
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBackendGroupMetadata.$type, CreateBackendGroupMetadata);

function createBaseAddBackendRequest(): AddBackendRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest",
    backendGroupId: "",
    http: undefined,
    grpc: undefined,
    stream: undefined,
  };
}

export const AddBackendRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest" as const,

  encode(message: AddBackendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.http !== undefined) {
      HttpBackend.encode(message.http, writer.uint32(18).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcBackend.encode(message.grpc, writer.uint32(26).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamBackend.encode(message.stream, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBackendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddBackendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.http = HttpBackend.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.grpc = GrpcBackend.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stream = StreamBackend.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddBackendRequest {
    return {
      $type: AddBackendRequest.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      http: isSet(object.http) ? HttpBackend.fromJSON(object.http) : undefined,
      grpc: isSet(object.grpc) ? GrpcBackend.fromJSON(object.grpc) : undefined,
      stream: isSet(object.stream) ? StreamBackend.fromJSON(object.stream) : undefined,
    };
  },

  toJSON(message: AddBackendRequest): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    if (message.http !== undefined) {
      obj.http = HttpBackend.toJSON(message.http);
    }
    if (message.grpc !== undefined) {
      obj.grpc = GrpcBackend.toJSON(message.grpc);
    }
    if (message.stream !== undefined) {
      obj.stream = StreamBackend.toJSON(message.stream);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddBackendRequest>, I>>(base?: I): AddBackendRequest {
    return AddBackendRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddBackendRequest>, I>>(object: I): AddBackendRequest {
    const message = createBaseAddBackendRequest();
    message.backendGroupId = object.backendGroupId ?? "";
    message.http = (object.http !== undefined && object.http !== null)
      ? HttpBackend.fromPartial(object.http)
      : undefined;
    message.grpc = (object.grpc !== undefined && object.grpc !== null)
      ? GrpcBackend.fromPartial(object.grpc)
      : undefined;
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? StreamBackend.fromPartial(object.stream)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddBackendRequest.$type, AddBackendRequest);

function createBaseAddBackendMetadata(): AddBackendMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata", backendGroupId: "", backendName: "" };
}

export const AddBackendMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata" as const,

  encode(message: AddBackendMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.backendName !== "") {
      writer.uint32(18).string(message.backendName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBackendMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddBackendMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backendName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddBackendMetadata {
    return {
      $type: AddBackendMetadata.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      backendName: isSet(object.backendName) ? globalThis.String(object.backendName) : "",
    };
  },

  toJSON(message: AddBackendMetadata): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    if (message.backendName !== "") {
      obj.backendName = message.backendName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddBackendMetadata>, I>>(base?: I): AddBackendMetadata {
    return AddBackendMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddBackendMetadata>, I>>(object: I): AddBackendMetadata {
    const message = createBaseAddBackendMetadata();
    message.backendGroupId = object.backendGroupId ?? "";
    message.backendName = object.backendName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddBackendMetadata.$type, AddBackendMetadata);

function createBaseUpdateBackendRequest(): UpdateBackendRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest",
    backendGroupId: "",
    updateMask: undefined,
    http: undefined,
    grpc: undefined,
    stream: undefined,
  };
}

export const UpdateBackendRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest" as const,

  encode(message: UpdateBackendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.http !== undefined) {
      HttpBackend.encode(message.http, writer.uint32(26).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcBackend.encode(message.grpc, writer.uint32(34).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamBackend.encode(message.stream, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBackendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBackendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
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

          message.http = HttpBackend.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.grpc = GrpcBackend.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stream = StreamBackend.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateBackendRequest {
    return {
      $type: UpdateBackendRequest.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      http: isSet(object.http) ? HttpBackend.fromJSON(object.http) : undefined,
      grpc: isSet(object.grpc) ? GrpcBackend.fromJSON(object.grpc) : undefined,
      stream: isSet(object.stream) ? StreamBackend.fromJSON(object.stream) : undefined,
    };
  },

  toJSON(message: UpdateBackendRequest): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.http !== undefined) {
      obj.http = HttpBackend.toJSON(message.http);
    }
    if (message.grpc !== undefined) {
      obj.grpc = GrpcBackend.toJSON(message.grpc);
    }
    if (message.stream !== undefined) {
      obj.stream = StreamBackend.toJSON(message.stream);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBackendRequest>, I>>(base?: I): UpdateBackendRequest {
    return UpdateBackendRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateBackendRequest>, I>>(object: I): UpdateBackendRequest {
    const message = createBaseUpdateBackendRequest();
    message.backendGroupId = object.backendGroupId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.http = (object.http !== undefined && object.http !== null)
      ? HttpBackend.fromPartial(object.http)
      : undefined;
    message.grpc = (object.grpc !== undefined && object.grpc !== null)
      ? GrpcBackend.fromPartial(object.grpc)
      : undefined;
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? StreamBackend.fromPartial(object.stream)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateBackendRequest.$type, UpdateBackendRequest);

function createBaseUpdateBackendMetadata(): UpdateBackendMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata", backendGroupId: "", backendName: "" };
}

export const UpdateBackendMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata" as const,

  encode(message: UpdateBackendMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.backendName !== "") {
      writer.uint32(18).string(message.backendName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBackendMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBackendMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backendName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateBackendMetadata {
    return {
      $type: UpdateBackendMetadata.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      backendName: isSet(object.backendName) ? globalThis.String(object.backendName) : "",
    };
  },

  toJSON(message: UpdateBackendMetadata): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    if (message.backendName !== "") {
      obj.backendName = message.backendName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBackendMetadata>, I>>(base?: I): UpdateBackendMetadata {
    return UpdateBackendMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateBackendMetadata>, I>>(object: I): UpdateBackendMetadata {
    const message = createBaseUpdateBackendMetadata();
    message.backendGroupId = object.backendGroupId ?? "";
    message.backendName = object.backendName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateBackendMetadata.$type, UpdateBackendMetadata);

function createBaseRemoveBackendRequest(): RemoveBackendRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest", backendGroupId: "", backendName: "" };
}

export const RemoveBackendRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest" as const,

  encode(message: RemoveBackendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.backendName !== "") {
      writer.uint32(18).string(message.backendName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveBackendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveBackendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backendName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveBackendRequest {
    return {
      $type: RemoveBackendRequest.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      backendName: isSet(object.backendName) ? globalThis.String(object.backendName) : "",
    };
  },

  toJSON(message: RemoveBackendRequest): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    if (message.backendName !== "") {
      obj.backendName = message.backendName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveBackendRequest>, I>>(base?: I): RemoveBackendRequest {
    return RemoveBackendRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveBackendRequest>, I>>(object: I): RemoveBackendRequest {
    const message = createBaseRemoveBackendRequest();
    message.backendGroupId = object.backendGroupId ?? "";
    message.backendName = object.backendName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveBackendRequest.$type, RemoveBackendRequest);

function createBaseRemoveBackendMetadata(): RemoveBackendMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata", backendGroupId: "", backendName: "" };
}

export const RemoveBackendMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata" as const,

  encode(message: RemoveBackendMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.backendName !== "") {
      writer.uint32(18).string(message.backendName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveBackendMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveBackendMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backendName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveBackendMetadata {
    return {
      $type: RemoveBackendMetadata.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      backendName: isSet(object.backendName) ? globalThis.String(object.backendName) : "",
    };
  },

  toJSON(message: RemoveBackendMetadata): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    if (message.backendName !== "") {
      obj.backendName = message.backendName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveBackendMetadata>, I>>(base?: I): RemoveBackendMetadata {
    return RemoveBackendMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveBackendMetadata>, I>>(object: I): RemoveBackendMetadata {
    const message = createBaseRemoveBackendMetadata();
    message.backendGroupId = object.backendGroupId ?? "";
    message.backendName = object.backendName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveBackendMetadata.$type, RemoveBackendMetadata);

function createBaseListBackendGroupOperationsRequest(): ListBackendGroupOperationsRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest",
    backendGroupId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListBackendGroupOperationsRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest" as const,

  encode(message: ListBackendGroupOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackendGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackendGroupOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
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

  fromJSON(object: any): ListBackendGroupOperationsRequest {
    return {
      $type: ListBackendGroupOperationsRequest.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListBackendGroupOperationsRequest): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBackendGroupOperationsRequest>, I>>(
    base?: I,
  ): ListBackendGroupOperationsRequest {
    return ListBackendGroupOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackendGroupOperationsRequest>, I>>(
    object: I,
  ): ListBackendGroupOperationsRequest {
    const message = createBaseListBackendGroupOperationsRequest();
    message.backendGroupId = object.backendGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackendGroupOperationsRequest.$type, ListBackendGroupOperationsRequest);

function createBaseListBackendGroupOperationsResponse(): ListBackendGroupOperationsResponse {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListBackendGroupOperationsResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse" as const,

  encode(message: ListBackendGroupOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackendGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackendGroupOperationsResponse();
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

  fromJSON(object: any): ListBackendGroupOperationsResponse {
    return {
      $type: ListBackendGroupOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBackendGroupOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBackendGroupOperationsResponse>, I>>(
    base?: I,
  ): ListBackendGroupOperationsResponse {
    return ListBackendGroupOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackendGroupOperationsResponse>, I>>(
    object: I,
  ): ListBackendGroupOperationsResponse {
    const message = createBaseListBackendGroupOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackendGroupOperationsResponse.$type, ListBackendGroupOperationsResponse);

/** A set of methods for managing backend groups. */
export type BackendGroupServiceService = typeof BackendGroupServiceService;
export const BackendGroupServiceService = {
  /**
   * Returns the specified backend group.
   *
   * To get the list of all available backend groups, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBackendGroupRequest) => Buffer.from(GetBackendGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBackendGroupRequest.decode(value),
    responseSerialize: (value: BackendGroup) => Buffer.from(BackendGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BackendGroup.decode(value),
  },
  /** Lists backend groups in the specified folder. */
  list: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBackendGroupsRequest) => Buffer.from(ListBackendGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBackendGroupsRequest.decode(value),
    responseSerialize: (value: ListBackendGroupsResponse) =>
      Buffer.from(ListBackendGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBackendGroupsResponse.decode(value),
  },
  /** Creates a backend group in the specified folder. */
  create: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateBackendGroupRequest) =>
      Buffer.from(CreateBackendGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateBackendGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified backend group. */
  update: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateBackendGroupRequest) =>
      Buffer.from(UpdateBackendGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateBackendGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified backend group. */
  delete: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBackendGroupRequest) =>
      Buffer.from(DeleteBackendGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBackendGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds backends to the specified backend group. */
  addBackend: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddBackendRequest) => Buffer.from(AddBackendRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddBackendRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes backends from the specified backend group. */
  removeBackend: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveBackendRequest) => Buffer.from(RemoveBackendRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveBackendRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified backend. */
  updateBackend: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateBackendRequest) => Buffer.from(UpdateBackendRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateBackendRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified backend group. */
  listOperations: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBackendGroupOperationsRequest) =>
      Buffer.from(ListBackendGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBackendGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListBackendGroupOperationsResponse) =>
      Buffer.from(ListBackendGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBackendGroupOperationsResponse.decode(value),
  },
} as const;

export interface BackendGroupServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified backend group.
   *
   * To get the list of all available backend groups, make a [List] request.
   */
  get: handleUnaryCall<GetBackendGroupRequest, BackendGroup>;
  /** Lists backend groups in the specified folder. */
  list: handleUnaryCall<ListBackendGroupsRequest, ListBackendGroupsResponse>;
  /** Creates a backend group in the specified folder. */
  create: handleUnaryCall<CreateBackendGroupRequest, Operation>;
  /** Updates the specified backend group. */
  update: handleUnaryCall<UpdateBackendGroupRequest, Operation>;
  /** Deletes the specified backend group. */
  delete: handleUnaryCall<DeleteBackendGroupRequest, Operation>;
  /** Adds backends to the specified backend group. */
  addBackend: handleUnaryCall<AddBackendRequest, Operation>;
  /** Removes backends from the specified backend group. */
  removeBackend: handleUnaryCall<RemoveBackendRequest, Operation>;
  /** Updates the specified backend. */
  updateBackend: handleUnaryCall<UpdateBackendRequest, Operation>;
  /** Lists operations for the specified backend group. */
  listOperations: handleUnaryCall<ListBackendGroupOperationsRequest, ListBackendGroupOperationsResponse>;
}

export interface BackendGroupServiceClient extends Client {
  /**
   * Returns the specified backend group.
   *
   * To get the list of all available backend groups, make a [List] request.
   */
  get(
    request: GetBackendGroupRequest,
    callback: (error: ServiceError | null, response: BackendGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetBackendGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BackendGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetBackendGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BackendGroup) => void,
  ): ClientUnaryCall;
  /** Lists backend groups in the specified folder. */
  list(
    request: ListBackendGroupsRequest,
    callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBackendGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBackendGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a backend group in the specified folder. */
  create(
    request: CreateBackendGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateBackendGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateBackendGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified backend group. */
  update(
    request: UpdateBackendGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateBackendGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateBackendGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified backend group. */
  delete(
    request: DeleteBackendGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteBackendGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteBackendGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Adds backends to the specified backend group. */
  addBackend(
    request: AddBackendRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addBackend(
    request: AddBackendRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addBackend(
    request: AddBackendRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Removes backends from the specified backend group. */
  removeBackend(
    request: RemoveBackendRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeBackend(
    request: RemoveBackendRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeBackend(
    request: RemoveBackendRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified backend. */
  updateBackend(
    request: UpdateBackendRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateBackend(
    request: UpdateBackendRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateBackend(
    request: UpdateBackendRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified backend group. */
  listOperations(
    request: ListBackendGroupOperationsRequest,
    callback: (error: ServiceError | null, response: ListBackendGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListBackendGroupOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBackendGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListBackendGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBackendGroupOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const BackendGroupServiceClient = makeGenericClientConstructor(
  BackendGroupServiceService,
  "yandex.cloud.apploadbalancer.v1.BackendGroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BackendGroupServiceClient;
  service: typeof BackendGroupServiceService;
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
