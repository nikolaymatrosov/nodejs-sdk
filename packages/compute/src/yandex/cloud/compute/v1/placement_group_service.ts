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
import { Instance } from "./instance";
import { PartitionPlacementStrategy, PlacementGroup, SpreadPlacementStrategy } from "./placement_group";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetPlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest";
  /**
   * ID of the placement group to return.
   *
   * To get a placement group ID make a [PlacementGroupService.List] request.
   */
  placementGroupId: string;
}

export interface ListPlacementGroupsRequest {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest";
  /**
   * ID of the folder to list placement groups in.
   *
   * To get the folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListPlacementGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListPlacementGroupsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
   *
   * Each condition has the form `<field> <operator> <value>`, where:
   * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
   * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
   * 3. `<value>` represents a value.
   * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
   */
  filter: string;
  /**
   * By which column the listing should be ordered and in which direction,
   * format is "createdAt desc". "id asc" if omitted.
   * The default sorting order is ascending
   */
  orderBy: string;
}

export interface ListPlacementGroupsResponse {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse";
  /** Lists placement groups in the specified folder. */
  placementGroups: PlacementGroup[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListPlacementGroupsRequest.page_size], use `next_page_token` as the value
   * for the [ListPlacementGroupsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreatePlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest";
  /**
   * ID of the folder to create a placement group in.
   *
   * To get a folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the placement group. */
  name: string;
  /** Description of the placement group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Anti-affinity placement strategy (`spread`). Instances are distributed over distinct failure domains. */
  spreadPlacementStrategy?: SpreadPlacementStrategy | undefined;
  partitionPlacementStrategy?: PartitionPlacementStrategy | undefined;
}

export interface CreatePlacementGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreatePlacementGroupMetadata {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata";
  /** ID of the placement group that is being created. */
  placementGroupId: string;
}

export interface UpdatePlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest";
  /**
   * ID of the placement group to update.
   *
   * To get the placement group ID, use an [PlacementGroupService.List] request.
   */
  placementGroupId: string;
  /** Field mask that specifies which fields of the PlacementGroup resource should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the placement group. */
  name: string;
  /** Description of the placement group. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * The existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
}

export interface UpdatePlacementGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdatePlacementGroupMetadata {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata";
  /** ID of the placement group that is being updated. */
  placementGroupId: string;
}

export interface DeletePlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest";
  /**
   * ID of the placement group to delete.
   *
   * To get the placement group ID, use [PlacementGroupService.List] request.
   */
  placementGroupId: string;
}

export interface DeletePlacementGroupMetadata {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata";
  /** ID of the placement group that is being deleted. */
  placementGroupId: string;
}

export interface ListPlacementGroupInstancesRequest {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest";
  /**
   * ID of the placement group to list instances for.
   *
   * To get the placement group ID, use [PlacementGroupService.List] request.
   */
  placementGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListPlacementGroupInstancesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListPlacementGroupInstancesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListPlacementGroupInstancesResponse {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse";
  /** Lists instances for the specified placement group. */
  instances: Instance[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is more than [ListPlacementGroupInstancesRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListPlacementGroupInstancesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListPlacementGroupOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest";
  /**
   * ID of the placement group to list operations for.
   *
   * To get the placement group ID, use [PlacementGroupService.List] request.
   */
  placementGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListPlacementGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListPlacementGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListPlacementGroupOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse";
  /** List of operations for the specified placement group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListPlacementGroupOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListPlacementGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetPlacementGroupRequest(): GetPlacementGroupRequest {
  return { $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest", placementGroupId: "" };
}

export const GetPlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest" as const,

  encode(message: GetPlacementGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPlacementGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPlacementGroupRequest {
    return {
      $type: GetPlacementGroupRequest.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
    };
  },

  toJSON(message: GetPlacementGroupRequest): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPlacementGroupRequest>, I>>(base?: I): GetPlacementGroupRequest {
    return GetPlacementGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetPlacementGroupRequest>, I>>(object: I): GetPlacementGroupRequest {
    const message = createBaseGetPlacementGroupRequest();
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetPlacementGroupRequest.$type, GetPlacementGroupRequest);

function createBaseListPlacementGroupsRequest(): ListPlacementGroupsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListPlacementGroupsRequest = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest" as const,

  encode(message: ListPlacementGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPlacementGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPlacementGroupsRequest();
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

  fromJSON(object: any): ListPlacementGroupsRequest {
    return {
      $type: ListPlacementGroupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListPlacementGroupsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListPlacementGroupsRequest>, I>>(base?: I): ListPlacementGroupsRequest {
    return ListPlacementGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPlacementGroupsRequest>, I>>(object: I): ListPlacementGroupsRequest {
    const message = createBaseListPlacementGroupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPlacementGroupsRequest.$type, ListPlacementGroupsRequest);

function createBaseListPlacementGroupsResponse(): ListPlacementGroupsResponse {
  return { $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse", placementGroups: [], nextPageToken: "" };
}

export const ListPlacementGroupsResponse = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse" as const,

  encode(message: ListPlacementGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.placementGroups) {
      PlacementGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPlacementGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPlacementGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroups.push(PlacementGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListPlacementGroupsResponse {
    return {
      $type: ListPlacementGroupsResponse.$type,
      placementGroups: globalThis.Array.isArray(object?.placementGroups)
        ? object.placementGroups.map((e: any) => PlacementGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListPlacementGroupsResponse): unknown {
    const obj: any = {};
    if (message.placementGroups?.length) {
      obj.placementGroups = message.placementGroups.map((e) => PlacementGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPlacementGroupsResponse>, I>>(base?: I): ListPlacementGroupsResponse {
    return ListPlacementGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPlacementGroupsResponse>, I>>(object: I): ListPlacementGroupsResponse {
    const message = createBaseListPlacementGroupsResponse();
    message.placementGroups = object.placementGroups?.map((e) => PlacementGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPlacementGroupsResponse.$type, ListPlacementGroupsResponse);

function createBaseCreatePlacementGroupRequest(): CreatePlacementGroupRequest {
  return {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    spreadPlacementStrategy: undefined,
    partitionPlacementStrategy: undefined,
  };
}

export const CreatePlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest" as const,

  encode(message: CreatePlacementGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreatePlacementGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.spreadPlacementStrategy !== undefined) {
      SpreadPlacementStrategy.encode(message.spreadPlacementStrategy, writer.uint32(42).fork()).ldelim();
    }
    if (message.partitionPlacementStrategy !== undefined) {
      PartitionPlacementStrategy.encode(message.partitionPlacementStrategy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePlacementGroupRequest();
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

          const entry4 = CreatePlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.spreadPlacementStrategy = SpreadPlacementStrategy.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.partitionPlacementStrategy = PartitionPlacementStrategy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePlacementGroupRequest {
    return {
      $type: CreatePlacementGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      spreadPlacementStrategy: isSet(object.spreadPlacementStrategy)
        ? SpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
        : undefined,
      partitionPlacementStrategy: isSet(object.partitionPlacementStrategy)
        ? PartitionPlacementStrategy.fromJSON(object.partitionPlacementStrategy)
        : undefined,
    };
  },

  toJSON(message: CreatePlacementGroupRequest): unknown {
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
    if (message.spreadPlacementStrategy !== undefined) {
      obj.spreadPlacementStrategy = SpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy);
    }
    if (message.partitionPlacementStrategy !== undefined) {
      obj.partitionPlacementStrategy = PartitionPlacementStrategy.toJSON(message.partitionPlacementStrategy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePlacementGroupRequest>, I>>(base?: I): CreatePlacementGroupRequest {
    return CreatePlacementGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlacementGroupRequest>, I>>(object: I): CreatePlacementGroupRequest {
    const message = createBaseCreatePlacementGroupRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.spreadPlacementStrategy =
      (object.spreadPlacementStrategy !== undefined && object.spreadPlacementStrategy !== null)
        ? SpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy)
        : undefined;
    message.partitionPlacementStrategy =
      (object.partitionPlacementStrategy !== undefined && object.partitionPlacementStrategy !== null)
        ? PartitionPlacementStrategy.fromPartial(object.partitionPlacementStrategy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreatePlacementGroupRequest.$type, CreatePlacementGroupRequest);

function createBaseCreatePlacementGroupRequest_LabelsEntry(): CreatePlacementGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry", key: "", value: "" };
}

export const CreatePlacementGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry" as const,

  encode(message: CreatePlacementGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlacementGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePlacementGroupRequest_LabelsEntry();
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

  fromJSON(object: any): CreatePlacementGroupRequest_LabelsEntry {
    return {
      $type: CreatePlacementGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreatePlacementGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePlacementGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreatePlacementGroupRequest_LabelsEntry {
    return CreatePlacementGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlacementGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): CreatePlacementGroupRequest_LabelsEntry {
    const message = createBaseCreatePlacementGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreatePlacementGroupRequest_LabelsEntry.$type, CreatePlacementGroupRequest_LabelsEntry);

function createBaseCreatePlacementGroupMetadata(): CreatePlacementGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata", placementGroupId: "" };
}

export const CreatePlacementGroupMetadata = {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata" as const,

  encode(message: CreatePlacementGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlacementGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePlacementGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePlacementGroupMetadata {
    return {
      $type: CreatePlacementGroupMetadata.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
    };
  },

  toJSON(message: CreatePlacementGroupMetadata): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePlacementGroupMetadata>, I>>(base?: I): CreatePlacementGroupMetadata {
    return CreatePlacementGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlacementGroupMetadata>, I>>(object: I): CreatePlacementGroupMetadata {
    const message = createBaseCreatePlacementGroupMetadata();
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreatePlacementGroupMetadata.$type, CreatePlacementGroupMetadata);

function createBaseUpdatePlacementGroupRequest(): UpdatePlacementGroupRequest {
  return {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest",
    placementGroupId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
  };
}

export const UpdatePlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest" as const,

  encode(message: UpdatePlacementGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
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
      UpdatePlacementGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePlacementGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
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

          const entry5 = UpdatePlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdatePlacementGroupRequest {
    return {
      $type: UpdatePlacementGroupRequest.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
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

  toJSON(message: UpdatePlacementGroupRequest): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
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

  create<I extends Exact<DeepPartial<UpdatePlacementGroupRequest>, I>>(base?: I): UpdatePlacementGroupRequest {
    return UpdatePlacementGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlacementGroupRequest>, I>>(object: I): UpdatePlacementGroupRequest {
    const message = createBaseUpdatePlacementGroupRequest();
    message.placementGroupId = object.placementGroupId ?? "";
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

messageTypeRegistry.set(UpdatePlacementGroupRequest.$type, UpdatePlacementGroupRequest);

function createBaseUpdatePlacementGroupRequest_LabelsEntry(): UpdatePlacementGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry", key: "", value: "" };
}

export const UpdatePlacementGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry" as const,

  encode(message: UpdatePlacementGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlacementGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePlacementGroupRequest_LabelsEntry();
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

  fromJSON(object: any): UpdatePlacementGroupRequest_LabelsEntry {
    return {
      $type: UpdatePlacementGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdatePlacementGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePlacementGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdatePlacementGroupRequest_LabelsEntry {
    return UpdatePlacementGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlacementGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdatePlacementGroupRequest_LabelsEntry {
    const message = createBaseUpdatePlacementGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdatePlacementGroupRequest_LabelsEntry.$type, UpdatePlacementGroupRequest_LabelsEntry);

function createBaseUpdatePlacementGroupMetadata(): UpdatePlacementGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata", placementGroupId: "" };
}

export const UpdatePlacementGroupMetadata = {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata" as const,

  encode(message: UpdatePlacementGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlacementGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePlacementGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePlacementGroupMetadata {
    return {
      $type: UpdatePlacementGroupMetadata.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
    };
  },

  toJSON(message: UpdatePlacementGroupMetadata): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePlacementGroupMetadata>, I>>(base?: I): UpdatePlacementGroupMetadata {
    return UpdatePlacementGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlacementGroupMetadata>, I>>(object: I): UpdatePlacementGroupMetadata {
    const message = createBaseUpdatePlacementGroupMetadata();
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdatePlacementGroupMetadata.$type, UpdatePlacementGroupMetadata);

function createBaseDeletePlacementGroupRequest(): DeletePlacementGroupRequest {
  return { $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest", placementGroupId: "" };
}

export const DeletePlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest" as const,

  encode(message: DeletePlacementGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePlacementGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePlacementGroupRequest {
    return {
      $type: DeletePlacementGroupRequest.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
    };
  },

  toJSON(message: DeletePlacementGroupRequest): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePlacementGroupRequest>, I>>(base?: I): DeletePlacementGroupRequest {
    return DeletePlacementGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePlacementGroupRequest>, I>>(object: I): DeletePlacementGroupRequest {
    const message = createBaseDeletePlacementGroupRequest();
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeletePlacementGroupRequest.$type, DeletePlacementGroupRequest);

function createBaseDeletePlacementGroupMetadata(): DeletePlacementGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata", placementGroupId: "" };
}

export const DeletePlacementGroupMetadata = {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata" as const,

  encode(message: DeletePlacementGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlacementGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePlacementGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePlacementGroupMetadata {
    return {
      $type: DeletePlacementGroupMetadata.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
    };
  },

  toJSON(message: DeletePlacementGroupMetadata): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePlacementGroupMetadata>, I>>(base?: I): DeletePlacementGroupMetadata {
    return DeletePlacementGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePlacementGroupMetadata>, I>>(object: I): DeletePlacementGroupMetadata {
    const message = createBaseDeletePlacementGroupMetadata();
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeletePlacementGroupMetadata.$type, DeletePlacementGroupMetadata);

function createBaseListPlacementGroupInstancesRequest(): ListPlacementGroupInstancesRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest",
    placementGroupId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListPlacementGroupInstancesRequest = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest" as const,

  encode(message: ListPlacementGroupInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPlacementGroupInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPlacementGroupInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
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

  fromJSON(object: any): ListPlacementGroupInstancesRequest {
    return {
      $type: ListPlacementGroupInstancesRequest.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListPlacementGroupInstancesRequest): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPlacementGroupInstancesRequest>, I>>(
    base?: I,
  ): ListPlacementGroupInstancesRequest {
    return ListPlacementGroupInstancesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPlacementGroupInstancesRequest>, I>>(
    object: I,
  ): ListPlacementGroupInstancesRequest {
    const message = createBaseListPlacementGroupInstancesRequest();
    message.placementGroupId = object.placementGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPlacementGroupInstancesRequest.$type, ListPlacementGroupInstancesRequest);

function createBaseListPlacementGroupInstancesResponse(): ListPlacementGroupInstancesResponse {
  return { $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse", instances: [], nextPageToken: "" };
}

export const ListPlacementGroupInstancesResponse = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse" as const,

  encode(message: ListPlacementGroupInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPlacementGroupInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPlacementGroupInstancesResponse();
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

  fromJSON(object: any): ListPlacementGroupInstancesResponse {
    return {
      $type: ListPlacementGroupInstancesResponse.$type,
      instances: globalThis.Array.isArray(object?.instances)
        ? object.instances.map((e: any) => Instance.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListPlacementGroupInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances?.length) {
      obj.instances = message.instances.map((e) => Instance.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPlacementGroupInstancesResponse>, I>>(
    base?: I,
  ): ListPlacementGroupInstancesResponse {
    return ListPlacementGroupInstancesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPlacementGroupInstancesResponse>, I>>(
    object: I,
  ): ListPlacementGroupInstancesResponse {
    const message = createBaseListPlacementGroupInstancesResponse();
    message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPlacementGroupInstancesResponse.$type, ListPlacementGroupInstancesResponse);

function createBaseListPlacementGroupOperationsRequest(): ListPlacementGroupOperationsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest",
    placementGroupId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListPlacementGroupOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest" as const,

  encode(message: ListPlacementGroupOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPlacementGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPlacementGroupOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
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

  fromJSON(object: any): ListPlacementGroupOperationsRequest {
    return {
      $type: ListPlacementGroupOperationsRequest.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListPlacementGroupOperationsRequest): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPlacementGroupOperationsRequest>, I>>(
    base?: I,
  ): ListPlacementGroupOperationsRequest {
    return ListPlacementGroupOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPlacementGroupOperationsRequest>, I>>(
    object: I,
  ): ListPlacementGroupOperationsRequest {
    const message = createBaseListPlacementGroupOperationsRequest();
    message.placementGroupId = object.placementGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPlacementGroupOperationsRequest.$type, ListPlacementGroupOperationsRequest);

function createBaseListPlacementGroupOperationsResponse(): ListPlacementGroupOperationsResponse {
  return { $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListPlacementGroupOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse" as const,

  encode(message: ListPlacementGroupOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPlacementGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPlacementGroupOperationsResponse();
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

  fromJSON(object: any): ListPlacementGroupOperationsResponse {
    return {
      $type: ListPlacementGroupOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListPlacementGroupOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPlacementGroupOperationsResponse>, I>>(
    base?: I,
  ): ListPlacementGroupOperationsResponse {
    return ListPlacementGroupOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPlacementGroupOperationsResponse>, I>>(
    object: I,
  ): ListPlacementGroupOperationsResponse {
    const message = createBaseListPlacementGroupOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPlacementGroupOperationsResponse.$type, ListPlacementGroupOperationsResponse);

/** A set of methods for managing placement groups. */
export type PlacementGroupServiceService = typeof PlacementGroupServiceService;
export const PlacementGroupServiceService = {
  /**
   * Returns the specified placement group.
   *
   * To get the list of all available placement groups, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPlacementGroupRequest) => Buffer.from(GetPlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPlacementGroupRequest.decode(value),
    responseSerialize: (value: PlacementGroup) => Buffer.from(PlacementGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PlacementGroup.decode(value),
  },
  /** Retrieves the list of placement groups in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPlacementGroupsRequest) =>
      Buffer.from(ListPlacementGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListPlacementGroupsRequest.decode(value),
    responseSerialize: (value: ListPlacementGroupsResponse) =>
      Buffer.from(ListPlacementGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListPlacementGroupsResponse.decode(value),
  },
  /** Creates a placement group in the specified folder. */
  create: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePlacementGroupRequest) =>
      Buffer.from(CreatePlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePlacementGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified placement group. */
  update: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePlacementGroupRequest) =>
      Buffer.from(UpdatePlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdatePlacementGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified placement group. */
  delete: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePlacementGroupRequest) =>
      Buffer.from(DeletePlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeletePlacementGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists instances for the specified placement group. */
  listInstances: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/ListInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPlacementGroupInstancesRequest) =>
      Buffer.from(ListPlacementGroupInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListPlacementGroupInstancesRequest.decode(value),
    responseSerialize: (value: ListPlacementGroupInstancesResponse) =>
      Buffer.from(ListPlacementGroupInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListPlacementGroupInstancesResponse.decode(value),
  },
  /** Lists operations for the specified placement group. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPlacementGroupOperationsRequest) =>
      Buffer.from(ListPlacementGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListPlacementGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListPlacementGroupOperationsResponse) =>
      Buffer.from(ListPlacementGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListPlacementGroupOperationsResponse.decode(value),
  },
} as const;

export interface PlacementGroupServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified placement group.
   *
   * To get the list of all available placement groups, make a [List] request.
   */
  get: handleUnaryCall<GetPlacementGroupRequest, PlacementGroup>;
  /** Retrieves the list of placement groups in the specified folder. */
  list: handleUnaryCall<ListPlacementGroupsRequest, ListPlacementGroupsResponse>;
  /** Creates a placement group in the specified folder. */
  create: handleUnaryCall<CreatePlacementGroupRequest, Operation>;
  /** Updates the specified placement group. */
  update: handleUnaryCall<UpdatePlacementGroupRequest, Operation>;
  /** Deletes the specified placement group. */
  delete: handleUnaryCall<DeletePlacementGroupRequest, Operation>;
  /** Lists instances for the specified placement group. */
  listInstances: handleUnaryCall<ListPlacementGroupInstancesRequest, ListPlacementGroupInstancesResponse>;
  /** Lists operations for the specified placement group. */
  listOperations: handleUnaryCall<ListPlacementGroupOperationsRequest, ListPlacementGroupOperationsResponse>;
}

export interface PlacementGroupServiceClient extends Client {
  /**
   * Returns the specified placement group.
   *
   * To get the list of all available placement groups, make a [List] request.
   */
  get(
    request: GetPlacementGroupRequest,
    callback: (error: ServiceError | null, response: PlacementGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetPlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PlacementGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetPlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PlacementGroup) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of placement groups in the specified folder. */
  list(
    request: ListPlacementGroupsRequest,
    callback: (error: ServiceError | null, response: ListPlacementGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListPlacementGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListPlacementGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListPlacementGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListPlacementGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a placement group in the specified folder. */
  create(
    request: CreatePlacementGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified placement group. */
  update(
    request: UpdatePlacementGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdatePlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdatePlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified placement group. */
  delete(
    request: DeletePlacementGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeletePlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeletePlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists instances for the specified placement group. */
  listInstances(
    request: ListPlacementGroupInstancesRequest,
    callback: (error: ServiceError | null, response: ListPlacementGroupInstancesResponse) => void,
  ): ClientUnaryCall;
  listInstances(
    request: ListPlacementGroupInstancesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListPlacementGroupInstancesResponse) => void,
  ): ClientUnaryCall;
  listInstances(
    request: ListPlacementGroupInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListPlacementGroupInstancesResponse) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified placement group. */
  listOperations(
    request: ListPlacementGroupOperationsRequest,
    callback: (error: ServiceError | null, response: ListPlacementGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListPlacementGroupOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListPlacementGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListPlacementGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListPlacementGroupOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const PlacementGroupServiceClient = makeGenericClientConstructor(
  PlacementGroupServiceService,
  "yandex.cloud.compute.v1.PlacementGroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PlacementGroupServiceClient;
  service: typeof PlacementGroupServiceService;
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
