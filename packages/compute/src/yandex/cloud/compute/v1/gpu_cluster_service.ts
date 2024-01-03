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
import { GpuCluster, GpuInterconnectType, gpuInterconnectTypeFromJSON, gpuInterconnectTypeToJSON } from "./gpu_cluster";
import { Instance } from "./instance";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetGpuClusterRequest {
  $type: "yandex.cloud.compute.v1.GetGpuClusterRequest";
  /**
   * ID of the GPU cluster to return.
   *
   * To get a GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
}

export interface ListGpuClustersRequest {
  $type: "yandex.cloud.compute.v1.ListGpuClustersRequest";
  /**
   * ID of the folder to list GPU clusters in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListGpuClustersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListGpuClustersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters GPU clusters listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [GpuCluster.name] field.
   * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-schedule`.
   */
  filter: string;
  /**
   * A sorting expression that sorts GPU clusters listed in the response.
   *
   * The expression must specify the field name from [GpuCluster] and `asc`ending or `desc`ending order,
   * e.g. `createdAt desc`.
   *
   * Default value: `id asc`.
   */
  orderBy: string;
}

export interface ListGpuClustersResponse {
  $type: "yandex.cloud.compute.v1.ListGpuClustersResponse";
  /** List of GPU clusters in the specified folder. */
  gpuClusters: GpuCluster[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListGpuClustersRequest.page_size], use `next_page_token` as the value
   * for the [ListGpuClustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateGpuClusterRequest {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest";
  /**
   * ID of the folder to create a GPU cluster in.
   *
   * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the GPU cluster.
   *
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the GPU cluster. */
  description: string;
  /** GPU cluster labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * ID of the availability zone where the GPU cluster resides.
   * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /** Type of interconnect to use for this GPU cluster. */
  interconnectType: GpuInterconnectType;
}

export interface CreateGpuClusterRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateGpuClusterMetadata {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata";
  /** ID of the GPU cluster that is being created. */
  gpuClusterId: string;
}

export interface UpdateGpuClusterRequest {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest";
  /**
   * ID of the GPU cluster to update.
   *
   * To get the GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
  /** Field mask that specifies which attributes of the GPU cluster should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the GPU cluster.
   *
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the GPU cluster. */
  description: string;
  /**
   * New GPU cluster labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [GpuClusterService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
}

export interface UpdateGpuClusterRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateGpuClusterMetadata {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata";
  /** ID of the GPU cluster that is being updated. */
  gpuClusterId: string;
}

export interface DeleteGpuClusterRequest {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest";
  /**
   * ID of the GPU cluster to delete.
   *
   * To get a GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
}

export interface DeleteGpuClusterMetadata {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata";
  /** ID of the GPU cluster that is being deleted. */
  gpuClusterId: string;
}

export interface ListGpuClusterOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest";
  /**
   * ID of the GPU cluster to list operations for.
   *
   * To get a GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListGpuClusterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListGpuClusterOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListGpuClusterOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse";
  /** List of operations for the specified GPU cluster. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListGpuClusterOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListGpuClusterOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListGpuClusterInstancesRequest {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest";
  /**
   * ID of the GPU cluster to list instances in.
   *
   * To get a GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListGpuClusterInstancesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListGpuClusterInstancesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [Instance.name] field.
   */
  filter: string;
}

export interface ListGpuClusterInstancesResponse {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse";
  /** List of instances in the specified GPU cluster. */
  instances: Instance[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListGpuClusterInstancesRequest.page_size], use `next_page_token` as the value
   * for the [ListGpuClusterInstancesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetGpuClusterRequest(): GetGpuClusterRequest {
  return { $type: "yandex.cloud.compute.v1.GetGpuClusterRequest", gpuClusterId: "" };
}

export const GetGpuClusterRequest = {
  $type: "yandex.cloud.compute.v1.GetGpuClusterRequest" as const,

  encode(message: GetGpuClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGpuClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGpuClusterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGpuClusterRequest {
    return {
      $type: GetGpuClusterRequest.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
    };
  },

  toJSON(message: GetGpuClusterRequest): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGpuClusterRequest>, I>>(base?: I): GetGpuClusterRequest {
    return GetGpuClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGpuClusterRequest>, I>>(object: I): GetGpuClusterRequest {
    const message = createBaseGetGpuClusterRequest();
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetGpuClusterRequest.$type, GetGpuClusterRequest);

function createBaseListGpuClustersRequest(): ListGpuClustersRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListGpuClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListGpuClustersRequest = {
  $type: "yandex.cloud.compute.v1.ListGpuClustersRequest" as const,

  encode(message: ListGpuClustersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGpuClustersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGpuClustersRequest();
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListGpuClustersRequest {
    return {
      $type: ListGpuClustersRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListGpuClustersRequest): unknown {
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
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGpuClustersRequest>, I>>(base?: I): ListGpuClustersRequest {
    return ListGpuClustersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGpuClustersRequest>, I>>(object: I): ListGpuClustersRequest {
    const message = createBaseListGpuClustersRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGpuClustersRequest.$type, ListGpuClustersRequest);

function createBaseListGpuClustersResponse(): ListGpuClustersResponse {
  return { $type: "yandex.cloud.compute.v1.ListGpuClustersResponse", gpuClusters: [], nextPageToken: "" };
}

export const ListGpuClustersResponse = {
  $type: "yandex.cloud.compute.v1.ListGpuClustersResponse" as const,

  encode(message: ListGpuClustersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gpuClusters) {
      GpuCluster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGpuClustersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGpuClustersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusters.push(GpuCluster.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListGpuClustersResponse {
    return {
      $type: ListGpuClustersResponse.$type,
      gpuClusters: globalThis.Array.isArray(object?.gpuClusters)
        ? object.gpuClusters.map((e: any) => GpuCluster.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListGpuClustersResponse): unknown {
    const obj: any = {};
    if (message.gpuClusters?.length) {
      obj.gpuClusters = message.gpuClusters.map((e) => GpuCluster.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGpuClustersResponse>, I>>(base?: I): ListGpuClustersResponse {
    return ListGpuClustersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGpuClustersResponse>, I>>(object: I): ListGpuClustersResponse {
    const message = createBaseListGpuClustersResponse();
    message.gpuClusters = object.gpuClusters?.map((e) => GpuCluster.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGpuClustersResponse.$type, ListGpuClustersResponse);

function createBaseCreateGpuClusterRequest(): CreateGpuClusterRequest {
  return {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    zoneId: "",
    interconnectType: 0,
  };
}

export const CreateGpuClusterRequest = {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest" as const,

  encode(message: CreateGpuClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateGpuClusterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(42).string(message.zoneId);
    }
    if (message.interconnectType !== 0) {
      writer.uint32(48).int32(message.interconnectType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGpuClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGpuClusterRequest();
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

          const entry4 = CreateGpuClusterRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.interconnectType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGpuClusterRequest {
    return {
      $type: CreateGpuClusterRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      interconnectType: isSet(object.interconnectType) ? gpuInterconnectTypeFromJSON(object.interconnectType) : 0,
    };
  },

  toJSON(message: CreateGpuClusterRequest): unknown {
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
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.interconnectType !== 0) {
      obj.interconnectType = gpuInterconnectTypeToJSON(message.interconnectType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGpuClusterRequest>, I>>(base?: I): CreateGpuClusterRequest {
    return CreateGpuClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGpuClusterRequest>, I>>(object: I): CreateGpuClusterRequest {
    const message = createBaseCreateGpuClusterRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.zoneId = object.zoneId ?? "";
    message.interconnectType = object.interconnectType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateGpuClusterRequest.$type, CreateGpuClusterRequest);

function createBaseCreateGpuClusterRequest_LabelsEntry(): CreateGpuClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateGpuClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry" as const,

  encode(message: CreateGpuClusterRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGpuClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGpuClusterRequest_LabelsEntry();
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

  fromJSON(object: any): CreateGpuClusterRequest_LabelsEntry {
    return {
      $type: CreateGpuClusterRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateGpuClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGpuClusterRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateGpuClusterRequest_LabelsEntry {
    return CreateGpuClusterRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGpuClusterRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateGpuClusterRequest_LabelsEntry {
    const message = createBaseCreateGpuClusterRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateGpuClusterRequest_LabelsEntry.$type, CreateGpuClusterRequest_LabelsEntry);

function createBaseCreateGpuClusterMetadata(): CreateGpuClusterMetadata {
  return { $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata", gpuClusterId: "" };
}

export const CreateGpuClusterMetadata = {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata" as const,

  encode(message: CreateGpuClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGpuClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGpuClusterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGpuClusterMetadata {
    return {
      $type: CreateGpuClusterMetadata.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
    };
  },

  toJSON(message: CreateGpuClusterMetadata): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGpuClusterMetadata>, I>>(base?: I): CreateGpuClusterMetadata {
    return CreateGpuClusterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGpuClusterMetadata>, I>>(object: I): CreateGpuClusterMetadata {
    const message = createBaseCreateGpuClusterMetadata();
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateGpuClusterMetadata.$type, CreateGpuClusterMetadata);

function createBaseUpdateGpuClusterRequest(): UpdateGpuClusterRequest {
  return {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest",
    gpuClusterId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
  };
}

export const UpdateGpuClusterRequest = {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest" as const,

  encode(message: UpdateGpuClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
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
      UpdateGpuClusterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGpuClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGpuClusterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
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

          const entry5 = UpdateGpuClusterRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateGpuClusterRequest {
    return {
      $type: UpdateGpuClusterRequest.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
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

  toJSON(message: UpdateGpuClusterRequest): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
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

  create<I extends Exact<DeepPartial<UpdateGpuClusterRequest>, I>>(base?: I): UpdateGpuClusterRequest {
    return UpdateGpuClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGpuClusterRequest>, I>>(object: I): UpdateGpuClusterRequest {
    const message = createBaseUpdateGpuClusterRequest();
    message.gpuClusterId = object.gpuClusterId ?? "";
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

messageTypeRegistry.set(UpdateGpuClusterRequest.$type, UpdateGpuClusterRequest);

function createBaseUpdateGpuClusterRequest_LabelsEntry(): UpdateGpuClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateGpuClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry" as const,

  encode(message: UpdateGpuClusterRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGpuClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGpuClusterRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateGpuClusterRequest_LabelsEntry {
    return {
      $type: UpdateGpuClusterRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateGpuClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGpuClusterRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateGpuClusterRequest_LabelsEntry {
    return UpdateGpuClusterRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGpuClusterRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateGpuClusterRequest_LabelsEntry {
    const message = createBaseUpdateGpuClusterRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateGpuClusterRequest_LabelsEntry.$type, UpdateGpuClusterRequest_LabelsEntry);

function createBaseUpdateGpuClusterMetadata(): UpdateGpuClusterMetadata {
  return { $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata", gpuClusterId: "" };
}

export const UpdateGpuClusterMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata" as const,

  encode(message: UpdateGpuClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGpuClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGpuClusterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGpuClusterMetadata {
    return {
      $type: UpdateGpuClusterMetadata.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
    };
  },

  toJSON(message: UpdateGpuClusterMetadata): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGpuClusterMetadata>, I>>(base?: I): UpdateGpuClusterMetadata {
    return UpdateGpuClusterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGpuClusterMetadata>, I>>(object: I): UpdateGpuClusterMetadata {
    const message = createBaseUpdateGpuClusterMetadata();
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateGpuClusterMetadata.$type, UpdateGpuClusterMetadata);

function createBaseDeleteGpuClusterRequest(): DeleteGpuClusterRequest {
  return { $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest", gpuClusterId: "" };
}

export const DeleteGpuClusterRequest = {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest" as const,

  encode(message: DeleteGpuClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGpuClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGpuClusterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGpuClusterRequest {
    return {
      $type: DeleteGpuClusterRequest.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
    };
  },

  toJSON(message: DeleteGpuClusterRequest): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGpuClusterRequest>, I>>(base?: I): DeleteGpuClusterRequest {
    return DeleteGpuClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGpuClusterRequest>, I>>(object: I): DeleteGpuClusterRequest {
    const message = createBaseDeleteGpuClusterRequest();
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteGpuClusterRequest.$type, DeleteGpuClusterRequest);

function createBaseDeleteGpuClusterMetadata(): DeleteGpuClusterMetadata {
  return { $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata", gpuClusterId: "" };
}

export const DeleteGpuClusterMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata" as const,

  encode(message: DeleteGpuClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGpuClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGpuClusterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGpuClusterMetadata {
    return {
      $type: DeleteGpuClusterMetadata.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
    };
  },

  toJSON(message: DeleteGpuClusterMetadata): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGpuClusterMetadata>, I>>(base?: I): DeleteGpuClusterMetadata {
    return DeleteGpuClusterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGpuClusterMetadata>, I>>(object: I): DeleteGpuClusterMetadata {
    const message = createBaseDeleteGpuClusterMetadata();
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteGpuClusterMetadata.$type, DeleteGpuClusterMetadata);

function createBaseListGpuClusterOperationsRequest(): ListGpuClusterOperationsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest",
    gpuClusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListGpuClusterOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest" as const,

  encode(message: ListGpuClusterOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGpuClusterOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGpuClusterOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
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

  fromJSON(object: any): ListGpuClusterOperationsRequest {
    return {
      $type: ListGpuClusterOperationsRequest.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListGpuClusterOperationsRequest): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGpuClusterOperationsRequest>, I>>(base?: I): ListGpuClusterOperationsRequest {
    return ListGpuClusterOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGpuClusterOperationsRequest>, I>>(
    object: I,
  ): ListGpuClusterOperationsRequest {
    const message = createBaseListGpuClusterOperationsRequest();
    message.gpuClusterId = object.gpuClusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGpuClusterOperationsRequest.$type, ListGpuClusterOperationsRequest);

function createBaseListGpuClusterOperationsResponse(): ListGpuClusterOperationsResponse {
  return { $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListGpuClusterOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse" as const,

  encode(message: ListGpuClusterOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGpuClusterOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGpuClusterOperationsResponse();
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

  fromJSON(object: any): ListGpuClusterOperationsResponse {
    return {
      $type: ListGpuClusterOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListGpuClusterOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGpuClusterOperationsResponse>, I>>(
    base?: I,
  ): ListGpuClusterOperationsResponse {
    return ListGpuClusterOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGpuClusterOperationsResponse>, I>>(
    object: I,
  ): ListGpuClusterOperationsResponse {
    const message = createBaseListGpuClusterOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGpuClusterOperationsResponse.$type, ListGpuClusterOperationsResponse);

function createBaseListGpuClusterInstancesRequest(): ListGpuClusterInstancesRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest",
    gpuClusterId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListGpuClusterInstancesRequest = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest" as const,

  encode(message: ListGpuClusterInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGpuClusterInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGpuClusterInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpuClusterId = reader.string();
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

  fromJSON(object: any): ListGpuClusterInstancesRequest {
    return {
      $type: ListGpuClusterInstancesRequest.$type,
      gpuClusterId: isSet(object.gpuClusterId) ? globalThis.String(object.gpuClusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListGpuClusterInstancesRequest): unknown {
    const obj: any = {};
    if (message.gpuClusterId !== "") {
      obj.gpuClusterId = message.gpuClusterId;
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

  create<I extends Exact<DeepPartial<ListGpuClusterInstancesRequest>, I>>(base?: I): ListGpuClusterInstancesRequest {
    return ListGpuClusterInstancesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGpuClusterInstancesRequest>, I>>(
    object: I,
  ): ListGpuClusterInstancesRequest {
    const message = createBaseListGpuClusterInstancesRequest();
    message.gpuClusterId = object.gpuClusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGpuClusterInstancesRequest.$type, ListGpuClusterInstancesRequest);

function createBaseListGpuClusterInstancesResponse(): ListGpuClusterInstancesResponse {
  return { $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse", instances: [], nextPageToken: "" };
}

export const ListGpuClusterInstancesResponse = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse" as const,

  encode(message: ListGpuClusterInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGpuClusterInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGpuClusterInstancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instances.push(Instance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListGpuClusterInstancesResponse {
    return {
      $type: ListGpuClusterInstancesResponse.$type,
      instances: globalThis.Array.isArray(object?.instances)
        ? object.instances.map((e: any) => Instance.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListGpuClusterInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances?.length) {
      obj.instances = message.instances.map((e) => Instance.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGpuClusterInstancesResponse>, I>>(base?: I): ListGpuClusterInstancesResponse {
    return ListGpuClusterInstancesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGpuClusterInstancesResponse>, I>>(
    object: I,
  ): ListGpuClusterInstancesResponse {
    const message = createBaseListGpuClusterInstancesResponse();
    message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGpuClusterInstancesResponse.$type, ListGpuClusterInstancesResponse);

/** A set of methods for managing GPU clusters. */
export type GpuClusterServiceService = typeof GpuClusterServiceService;
export const GpuClusterServiceService = {
  /**
   * Returns the specified GPU cluster.
   *
   * To get the list of available GPU clusters, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGpuClusterRequest) => Buffer.from(GetGpuClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGpuClusterRequest.decode(value),
    responseSerialize: (value: GpuCluster) => Buffer.from(GpuCluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GpuCluster.decode(value),
  },
  /** Retrieves the list of GPU clusters in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGpuClustersRequest) => Buffer.from(ListGpuClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGpuClustersRequest.decode(value),
    responseSerialize: (value: ListGpuClustersResponse) => Buffer.from(ListGpuClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListGpuClustersResponse.decode(value),
  },
  /** Creates a GPU cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGpuClusterRequest) => Buffer.from(CreateGpuClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateGpuClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified GPU cluster.
   *
   * Currently only name, description and labels can be updated.
   */
  update: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateGpuClusterRequest) => Buffer.from(UpdateGpuClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateGpuClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified GPU cluster.
   *
   * GPU cluster can be deleted only if it doesn't have any instances associated with it.
   */
  delete: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteGpuClusterRequest) => Buffer.from(DeleteGpuClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteGpuClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified GPU cluster. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGpuClusterOperationsRequest) =>
      Buffer.from(ListGpuClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGpuClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListGpuClusterOperationsResponse) =>
      Buffer.from(ListGpuClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListGpuClusterOperationsResponse.decode(value),
  },
  /** List instances created in this GPU cluster. */
  listInstances: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/ListInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGpuClusterInstancesRequest) =>
      Buffer.from(ListGpuClusterInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGpuClusterInstancesRequest.decode(value),
    responseSerialize: (value: ListGpuClusterInstancesResponse) =>
      Buffer.from(ListGpuClusterInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListGpuClusterInstancesResponse.decode(value),
  },
  /** Lists access bindings for the GPU cluster. */
  listAccessBindings: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the GPU cluster. */
  setAccessBindings: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the GPU cluster. */
  updateAccessBindings: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface GpuClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified GPU cluster.
   *
   * To get the list of available GPU clusters, make a [List] request.
   */
  get: handleUnaryCall<GetGpuClusterRequest, GpuCluster>;
  /** Retrieves the list of GPU clusters in the specified folder. */
  list: handleUnaryCall<ListGpuClustersRequest, ListGpuClustersResponse>;
  /** Creates a GPU cluster in the specified folder. */
  create: handleUnaryCall<CreateGpuClusterRequest, Operation>;
  /**
   * Updates the specified GPU cluster.
   *
   * Currently only name, description and labels can be updated.
   */
  update: handleUnaryCall<UpdateGpuClusterRequest, Operation>;
  /**
   * Deletes the specified GPU cluster.
   *
   * GPU cluster can be deleted only if it doesn't have any instances associated with it.
   */
  delete: handleUnaryCall<DeleteGpuClusterRequest, Operation>;
  /** Lists operations for the specified GPU cluster. */
  listOperations: handleUnaryCall<ListGpuClusterOperationsRequest, ListGpuClusterOperationsResponse>;
  /** List instances created in this GPU cluster. */
  listInstances: handleUnaryCall<ListGpuClusterInstancesRequest, ListGpuClusterInstancesResponse>;
  /** Lists access bindings for the GPU cluster. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the GPU cluster. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the GPU cluster. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface GpuClusterServiceClient extends Client {
  /**
   * Returns the specified GPU cluster.
   *
   * To get the list of available GPU clusters, make a [List] request.
   */
  get(
    request: GetGpuClusterRequest,
    callback: (error: ServiceError | null, response: GpuCluster) => void,
  ): ClientUnaryCall;
  get(
    request: GetGpuClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GpuCluster) => void,
  ): ClientUnaryCall;
  get(
    request: GetGpuClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GpuCluster) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of GPU clusters in the specified folder. */
  list(
    request: ListGpuClustersRequest,
    callback: (error: ServiceError | null, response: ListGpuClustersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListGpuClustersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListGpuClustersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListGpuClustersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListGpuClustersResponse) => void,
  ): ClientUnaryCall;
  /** Creates a GPU cluster in the specified folder. */
  create(
    request: CreateGpuClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateGpuClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateGpuClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified GPU cluster.
   *
   * Currently only name, description and labels can be updated.
   */
  update(
    request: UpdateGpuClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateGpuClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateGpuClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified GPU cluster.
   *
   * GPU cluster can be deleted only if it doesn't have any instances associated with it.
   */
  delete(
    request: DeleteGpuClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteGpuClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteGpuClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified GPU cluster. */
  listOperations(
    request: ListGpuClusterOperationsRequest,
    callback: (error: ServiceError | null, response: ListGpuClusterOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListGpuClusterOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListGpuClusterOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListGpuClusterOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListGpuClusterOperationsResponse) => void,
  ): ClientUnaryCall;
  /** List instances created in this GPU cluster. */
  listInstances(
    request: ListGpuClusterInstancesRequest,
    callback: (error: ServiceError | null, response: ListGpuClusterInstancesResponse) => void,
  ): ClientUnaryCall;
  listInstances(
    request: ListGpuClusterInstancesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListGpuClusterInstancesResponse) => void,
  ): ClientUnaryCall;
  listInstances(
    request: ListGpuClusterInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListGpuClusterInstancesResponse) => void,
  ): ClientUnaryCall;
  /** Lists access bindings for the GPU cluster. */
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
  /** Sets access bindings for the GPU cluster. */
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
  /** Updates access bindings for the GPU cluster. */
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

export const GpuClusterServiceClient = makeGenericClientConstructor(
  GpuClusterServiceService,
  "yandex.cloud.compute.v1.GpuClusterService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GpuClusterServiceClient;
  service: typeof GpuClusterServiceService;
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
