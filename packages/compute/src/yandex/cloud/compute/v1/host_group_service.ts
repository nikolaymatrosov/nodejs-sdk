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
  Host,
  HostGroup,
  MaintenancePolicy,
  maintenancePolicyFromJSON,
  maintenancePolicyToJSON,
  ScalePolicy,
} from "./host_group";
import { Instance } from "./instance";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetHostGroupRequest {
  $type: "yandex.cloud.compute.v1.GetHostGroupRequest";
  /**
   * ID of the host group to return.
   * To get the host group ID, use [HostGroupService.List] request.
   */
  hostGroupId: string;
}

export interface ListHostGroupsRequest {
  $type: "yandex.cloud.compute.v1.ListHostGroupsRequest";
  /**
   * ID of the folder to list host groups in.
   * To get the folder ID, use [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListHostGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListHostGroupsResponse.next_page_token]
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

export interface ListHostGroupsResponse {
  $type: "yandex.cloud.compute.v1.ListHostGroupsResponse";
  /** Lists host groups for the specified folder. */
  hostGroups: HostGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListHostGroupsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListHostGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateHostGroupRequest {
  $type: "yandex.cloud.compute.v1.CreateHostGroupRequest";
  /**
   * ID of the folder to create a host group in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the group. */
  name: string;
  /** Description of the group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Availability zone where all dedicated hosts will be allocated. */
  zoneId: string;
  /** ID of host type. Resources provided by each host of the group. */
  typeId: string;
  /** Behaviour on maintenance events. */
  maintenancePolicy: MaintenancePolicy;
  /** Scale policy. Only fixed number of hosts are supported at this moment. */
  scalePolicy?: ScalePolicy | undefined;
}

export interface CreateHostGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateHostGroupMetadata {
  $type: "yandex.cloud.compute.v1.CreateHostGroupMetadata";
  /** ID of the host group that is being created. */
  hostGroupId: string;
}

export interface UpdateHostGroupRequest {
  $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest";
  /**
   * ID of the host group to update.
   * To get the host group ID, use an [HostGroupService.List] request.
   */
  hostGroupId: string;
  /** Field mask that specifies which fields of the HostGroup resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the group. */
  name: string;
  /** Description of the group. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * The existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /** Behaviour on maintenance events */
  maintenancePolicy: MaintenancePolicy;
  /** Scale policy. Only fixed number of hosts are supported at this moment. */
  scalePolicy?: ScalePolicy | undefined;
}

export interface UpdateHostGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateHostGroupMetadata {
  $type: "yandex.cloud.compute.v1.UpdateHostGroupMetadata";
  /** ID of the host group that is being updated. */
  hostGroupId: string;
}

export interface DeleteHostGroupRequest {
  $type: "yandex.cloud.compute.v1.DeleteHostGroupRequest";
  /**
   * ID of the host group to delete.
   * To get the host group ID, use [HostGroupService.List] request.
   */
  hostGroupId: string;
}

export interface DeleteHostGroupMetadata {
  $type: "yandex.cloud.compute.v1.DeleteHostGroupMetadata";
  /** ID of the host group that is being deleted. */
  hostGroupId: string;
}

export interface ListHostGroupInstancesRequest {
  $type: "yandex.cloud.compute.v1.ListHostGroupInstancesRequest";
  /**
   * ID of the host group to list instances for.
   * To get the host group ID, use [HostGroupService.List] request.
   */
  hostGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListHostGroupInstancesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListHostGroupInstancesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /** Filter support is not currently implemented. Any filters are ignored. */
  filter: string;
}

export interface ListHostGroupInstancesResponse {
  $type: "yandex.cloud.compute.v1.ListHostGroupInstancesResponse";
  /** Lists instances for the specified host group. */
  instances: Instance[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is more than [ListHostGroupInstancesRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListHostGroupInstancesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListHostGroupHostsRequest {
  $type: "yandex.cloud.compute.v1.ListHostGroupHostsRequest";
  /**
   * ID of the host group to list hosts for.
   * To get the host group ID, use [HostGroupService.List] request.
   */
  hostGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListHostGroupHostsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListHostGroupHostsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListHostGroupHostsResponse {
  $type: "yandex.cloud.compute.v1.ListHostGroupHostsResponse";
  /** Lists hosts for the specified host group. */
  hosts: Host[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is more than [ListHostGroupHostsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListHostGroupHostsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListHostGroupOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListHostGroupOperationsRequest";
  /**
   * ID of the host group to list operations for.
   * To get the host group ID, use [HostGroupService.List] request.
   */
  hostGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListHostGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListHostGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListHostGroupOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListHostGroupOperationsResponse";
  /** List of operations for the specified host group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListHostGroupOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListHostGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetHostGroupRequest(): GetHostGroupRequest {
  return { $type: "yandex.cloud.compute.v1.GetHostGroupRequest", hostGroupId: "" };
}

export const GetHostGroupRequest = {
  $type: "yandex.cloud.compute.v1.GetHostGroupRequest" as const,

  encode(message: GetHostGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostGroupId !== "") {
      writer.uint32(10).string(message.hostGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHostGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHostGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetHostGroupRequest {
    return {
      $type: GetHostGroupRequest.$type,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
    };
  },

  toJSON(message: GetHostGroupRequest): unknown {
    const obj: any = {};
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetHostGroupRequest>, I>>(base?: I): GetHostGroupRequest {
    return GetHostGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHostGroupRequest>, I>>(object: I): GetHostGroupRequest {
    const message = createBaseGetHostGroupRequest();
    message.hostGroupId = object.hostGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetHostGroupRequest.$type, GetHostGroupRequest);

function createBaseListHostGroupsRequest(): ListHostGroupsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListHostGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListHostGroupsRequest = {
  $type: "yandex.cloud.compute.v1.ListHostGroupsRequest" as const,

  encode(message: ListHostGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostGroupsRequest();
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

  fromJSON(object: any): ListHostGroupsRequest {
    return {
      $type: ListHostGroupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListHostGroupsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListHostGroupsRequest>, I>>(base?: I): ListHostGroupsRequest {
    return ListHostGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostGroupsRequest>, I>>(object: I): ListHostGroupsRequest {
    const message = createBaseListHostGroupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostGroupsRequest.$type, ListHostGroupsRequest);

function createBaseListHostGroupsResponse(): ListHostGroupsResponse {
  return { $type: "yandex.cloud.compute.v1.ListHostGroupsResponse", hostGroups: [], nextPageToken: "" };
}

export const ListHostGroupsResponse = {
  $type: "yandex.cloud.compute.v1.ListHostGroupsResponse" as const,

  encode(message: ListHostGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hostGroups) {
      HostGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroups.push(HostGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListHostGroupsResponse {
    return {
      $type: ListHostGroupsResponse.$type,
      hostGroups: globalThis.Array.isArray(object?.hostGroups)
        ? object.hostGroups.map((e: any) => HostGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListHostGroupsResponse): unknown {
    const obj: any = {};
    if (message.hostGroups?.length) {
      obj.hostGroups = message.hostGroups.map((e) => HostGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHostGroupsResponse>, I>>(base?: I): ListHostGroupsResponse {
    return ListHostGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostGroupsResponse>, I>>(object: I): ListHostGroupsResponse {
    const message = createBaseListHostGroupsResponse();
    message.hostGroups = object.hostGroups?.map((e) => HostGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostGroupsResponse.$type, ListHostGroupsResponse);

function createBaseCreateHostGroupRequest(): CreateHostGroupRequest {
  return {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    zoneId: "",
    typeId: "",
    maintenancePolicy: 0,
    scalePolicy: undefined,
  };
}

export const CreateHostGroupRequest = {
  $type: "yandex.cloud.compute.v1.CreateHostGroupRequest" as const,

  encode(message: CreateHostGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateHostGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(42).string(message.zoneId);
    }
    if (message.typeId !== "") {
      writer.uint32(50).string(message.typeId);
    }
    if (message.maintenancePolicy !== 0) {
      writer.uint32(56).int32(message.maintenancePolicy);
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateHostGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateHostGroupRequest();
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

          const entry4 = CreateHostGroupRequest_LabelsEntry.decode(reader, reader.uint32());
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
          if (tag !== 50) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.maintenancePolicy = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateHostGroupRequest {
    return {
      $type: CreateHostGroupRequest.$type,
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
      typeId: isSet(object.typeId) ? globalThis.String(object.typeId) : "",
      maintenancePolicy: isSet(object.maintenancePolicy) ? maintenancePolicyFromJSON(object.maintenancePolicy) : 0,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
    };
  },

  toJSON(message: CreateHostGroupRequest): unknown {
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
    if (message.typeId !== "") {
      obj.typeId = message.typeId;
    }
    if (message.maintenancePolicy !== 0) {
      obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateHostGroupRequest>, I>>(base?: I): CreateHostGroupRequest {
    return CreateHostGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateHostGroupRequest>, I>>(object: I): CreateHostGroupRequest {
    const message = createBaseCreateHostGroupRequest();
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
    message.typeId = object.typeId ?? "";
    message.maintenancePolicy = object.maintenancePolicy ?? 0;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateHostGroupRequest.$type, CreateHostGroupRequest);

function createBaseCreateHostGroupRequest_LabelsEntry(): CreateHostGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry", key: "", value: "" };
}

export const CreateHostGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry" as const,

  encode(message: CreateHostGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateHostGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateHostGroupRequest_LabelsEntry();
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

  fromJSON(object: any): CreateHostGroupRequest_LabelsEntry {
    return {
      $type: CreateHostGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateHostGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateHostGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateHostGroupRequest_LabelsEntry {
    return CreateHostGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateHostGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateHostGroupRequest_LabelsEntry {
    const message = createBaseCreateHostGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateHostGroupRequest_LabelsEntry.$type, CreateHostGroupRequest_LabelsEntry);

function createBaseCreateHostGroupMetadata(): CreateHostGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.CreateHostGroupMetadata", hostGroupId: "" };
}

export const CreateHostGroupMetadata = {
  $type: "yandex.cloud.compute.v1.CreateHostGroupMetadata" as const,

  encode(message: CreateHostGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostGroupId !== "") {
      writer.uint32(10).string(message.hostGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateHostGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateHostGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateHostGroupMetadata {
    return {
      $type: CreateHostGroupMetadata.$type,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
    };
  },

  toJSON(message: CreateHostGroupMetadata): unknown {
    const obj: any = {};
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateHostGroupMetadata>, I>>(base?: I): CreateHostGroupMetadata {
    return CreateHostGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateHostGroupMetadata>, I>>(object: I): CreateHostGroupMetadata {
    const message = createBaseCreateHostGroupMetadata();
    message.hostGroupId = object.hostGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateHostGroupMetadata.$type, CreateHostGroupMetadata);

function createBaseUpdateHostGroupRequest(): UpdateHostGroupRequest {
  return {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest",
    hostGroupId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    maintenancePolicy: 0,
    scalePolicy: undefined,
  };
}

export const UpdateHostGroupRequest = {
  $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest" as const,

  encode(message: UpdateHostGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostGroupId !== "") {
      writer.uint32(10).string(message.hostGroupId);
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
      UpdateHostGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.maintenancePolicy !== 0) {
      writer.uint32(48).int32(message.maintenancePolicy);
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateHostGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroupId = reader.string();
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

          const entry5 = UpdateHostGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maintenancePolicy = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateHostGroupRequest {
    return {
      $type: UpdateHostGroupRequest.$type,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      maintenancePolicy: isSet(object.maintenancePolicy) ? maintenancePolicyFromJSON(object.maintenancePolicy) : 0,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
    };
  },

  toJSON(message: UpdateHostGroupRequest): unknown {
    const obj: any = {};
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
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
    if (message.maintenancePolicy !== 0) {
      obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateHostGroupRequest>, I>>(base?: I): UpdateHostGroupRequest {
    return UpdateHostGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateHostGroupRequest>, I>>(object: I): UpdateHostGroupRequest {
    const message = createBaseUpdateHostGroupRequest();
    message.hostGroupId = object.hostGroupId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.maintenancePolicy = object.maintenancePolicy ?? 0;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateHostGroupRequest.$type, UpdateHostGroupRequest);

function createBaseUpdateHostGroupRequest_LabelsEntry(): UpdateHostGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateHostGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry" as const,

  encode(message: UpdateHostGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateHostGroupRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateHostGroupRequest_LabelsEntry {
    return {
      $type: UpdateHostGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateHostGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateHostGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateHostGroupRequest_LabelsEntry {
    return UpdateHostGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateHostGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateHostGroupRequest_LabelsEntry {
    const message = createBaseUpdateHostGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateHostGroupRequest_LabelsEntry.$type, UpdateHostGroupRequest_LabelsEntry);

function createBaseUpdateHostGroupMetadata(): UpdateHostGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.UpdateHostGroupMetadata", hostGroupId: "" };
}

export const UpdateHostGroupMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateHostGroupMetadata" as const,

  encode(message: UpdateHostGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostGroupId !== "") {
      writer.uint32(10).string(message.hostGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateHostGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateHostGroupMetadata {
    return {
      $type: UpdateHostGroupMetadata.$type,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
    };
  },

  toJSON(message: UpdateHostGroupMetadata): unknown {
    const obj: any = {};
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateHostGroupMetadata>, I>>(base?: I): UpdateHostGroupMetadata {
    return UpdateHostGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateHostGroupMetadata>, I>>(object: I): UpdateHostGroupMetadata {
    const message = createBaseUpdateHostGroupMetadata();
    message.hostGroupId = object.hostGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateHostGroupMetadata.$type, UpdateHostGroupMetadata);

function createBaseDeleteHostGroupRequest(): DeleteHostGroupRequest {
  return { $type: "yandex.cloud.compute.v1.DeleteHostGroupRequest", hostGroupId: "" };
}

export const DeleteHostGroupRequest = {
  $type: "yandex.cloud.compute.v1.DeleteHostGroupRequest" as const,

  encode(message: DeleteHostGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostGroupId !== "") {
      writer.uint32(10).string(message.hostGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteHostGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteHostGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteHostGroupRequest {
    return {
      $type: DeleteHostGroupRequest.$type,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
    };
  },

  toJSON(message: DeleteHostGroupRequest): unknown {
    const obj: any = {};
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteHostGroupRequest>, I>>(base?: I): DeleteHostGroupRequest {
    return DeleteHostGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteHostGroupRequest>, I>>(object: I): DeleteHostGroupRequest {
    const message = createBaseDeleteHostGroupRequest();
    message.hostGroupId = object.hostGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteHostGroupRequest.$type, DeleteHostGroupRequest);

function createBaseDeleteHostGroupMetadata(): DeleteHostGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.DeleteHostGroupMetadata", hostGroupId: "" };
}

export const DeleteHostGroupMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteHostGroupMetadata" as const,

  encode(message: DeleteHostGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostGroupId !== "") {
      writer.uint32(10).string(message.hostGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteHostGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteHostGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteHostGroupMetadata {
    return {
      $type: DeleteHostGroupMetadata.$type,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
    };
  },

  toJSON(message: DeleteHostGroupMetadata): unknown {
    const obj: any = {};
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteHostGroupMetadata>, I>>(base?: I): DeleteHostGroupMetadata {
    return DeleteHostGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteHostGroupMetadata>, I>>(object: I): DeleteHostGroupMetadata {
    const message = createBaseDeleteHostGroupMetadata();
    message.hostGroupId = object.hostGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteHostGroupMetadata.$type, DeleteHostGroupMetadata);

function createBaseListHostGroupInstancesRequest(): ListHostGroupInstancesRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesRequest",
    hostGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListHostGroupInstancesRequest = {
  $type: "yandex.cloud.compute.v1.ListHostGroupInstancesRequest" as const,

  encode(message: ListHostGroupInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostGroupId !== "") {
      writer.uint32(10).string(message.hostGroupId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostGroupInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroupId = reader.string();
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

  fromJSON(object: any): ListHostGroupInstancesRequest {
    return {
      $type: ListHostGroupInstancesRequest.$type,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListHostGroupInstancesRequest): unknown {
    const obj: any = {};
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
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

  create<I extends Exact<DeepPartial<ListHostGroupInstancesRequest>, I>>(base?: I): ListHostGroupInstancesRequest {
    return ListHostGroupInstancesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostGroupInstancesRequest>, I>>(
    object: I,
  ): ListHostGroupInstancesRequest {
    const message = createBaseListHostGroupInstancesRequest();
    message.hostGroupId = object.hostGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostGroupInstancesRequest.$type, ListHostGroupInstancesRequest);

function createBaseListHostGroupInstancesResponse(): ListHostGroupInstancesResponse {
  return { $type: "yandex.cloud.compute.v1.ListHostGroupInstancesResponse", instances: [], nextPageToken: "" };
}

export const ListHostGroupInstancesResponse = {
  $type: "yandex.cloud.compute.v1.ListHostGroupInstancesResponse" as const,

  encode(message: ListHostGroupInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostGroupInstancesResponse();
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

  fromJSON(object: any): ListHostGroupInstancesResponse {
    return {
      $type: ListHostGroupInstancesResponse.$type,
      instances: globalThis.Array.isArray(object?.instances)
        ? object.instances.map((e: any) => Instance.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListHostGroupInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances?.length) {
      obj.instances = message.instances.map((e) => Instance.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHostGroupInstancesResponse>, I>>(base?: I): ListHostGroupInstancesResponse {
    return ListHostGroupInstancesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostGroupInstancesResponse>, I>>(
    object: I,
  ): ListHostGroupInstancesResponse {
    const message = createBaseListHostGroupInstancesResponse();
    message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostGroupInstancesResponse.$type, ListHostGroupInstancesResponse);

function createBaseListHostGroupHostsRequest(): ListHostGroupHostsRequest {
  return { $type: "yandex.cloud.compute.v1.ListHostGroupHostsRequest", hostGroupId: "", pageSize: 0, pageToken: "" };
}

export const ListHostGroupHostsRequest = {
  $type: "yandex.cloud.compute.v1.ListHostGroupHostsRequest" as const,

  encode(message: ListHostGroupHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostGroupId !== "") {
      writer.uint32(10).string(message.hostGroupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupHostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostGroupHostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroupId = reader.string();
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

  fromJSON(object: any): ListHostGroupHostsRequest {
    return {
      $type: ListHostGroupHostsRequest.$type,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListHostGroupHostsRequest): unknown {
    const obj: any = {};
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHostGroupHostsRequest>, I>>(base?: I): ListHostGroupHostsRequest {
    return ListHostGroupHostsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostGroupHostsRequest>, I>>(object: I): ListHostGroupHostsRequest {
    const message = createBaseListHostGroupHostsRequest();
    message.hostGroupId = object.hostGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostGroupHostsRequest.$type, ListHostGroupHostsRequest);

function createBaseListHostGroupHostsResponse(): ListHostGroupHostsResponse {
  return { $type: "yandex.cloud.compute.v1.ListHostGroupHostsResponse", hosts: [], nextPageToken: "" };
}

export const ListHostGroupHostsResponse = {
  $type: "yandex.cloud.compute.v1.ListHostGroupHostsResponse" as const,

  encode(message: ListHostGroupHostsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hosts) {
      Host.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupHostsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostGroupHostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hosts.push(Host.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListHostGroupHostsResponse {
    return {
      $type: ListHostGroupHostsResponse.$type,
      hosts: globalThis.Array.isArray(object?.hosts) ? object.hosts.map((e: any) => Host.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListHostGroupHostsResponse): unknown {
    const obj: any = {};
    if (message.hosts?.length) {
      obj.hosts = message.hosts.map((e) => Host.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHostGroupHostsResponse>, I>>(base?: I): ListHostGroupHostsResponse {
    return ListHostGroupHostsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostGroupHostsResponse>, I>>(object: I): ListHostGroupHostsResponse {
    const message = createBaseListHostGroupHostsResponse();
    message.hosts = object.hosts?.map((e) => Host.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostGroupHostsResponse.$type, ListHostGroupHostsResponse);

function createBaseListHostGroupOperationsRequest(): ListHostGroupOperationsRequest {
  return {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsRequest",
    hostGroupId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListHostGroupOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListHostGroupOperationsRequest" as const,

  encode(message: ListHostGroupOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostGroupId !== "") {
      writer.uint32(10).string(message.hostGroupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostGroupOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostGroupId = reader.string();
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

  fromJSON(object: any): ListHostGroupOperationsRequest {
    return {
      $type: ListHostGroupOperationsRequest.$type,
      hostGroupId: isSet(object.hostGroupId) ? globalThis.String(object.hostGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListHostGroupOperationsRequest): unknown {
    const obj: any = {};
    if (message.hostGroupId !== "") {
      obj.hostGroupId = message.hostGroupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHostGroupOperationsRequest>, I>>(base?: I): ListHostGroupOperationsRequest {
    return ListHostGroupOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostGroupOperationsRequest>, I>>(
    object: I,
  ): ListHostGroupOperationsRequest {
    const message = createBaseListHostGroupOperationsRequest();
    message.hostGroupId = object.hostGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostGroupOperationsRequest.$type, ListHostGroupOperationsRequest);

function createBaseListHostGroupOperationsResponse(): ListHostGroupOperationsResponse {
  return { $type: "yandex.cloud.compute.v1.ListHostGroupOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListHostGroupOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListHostGroupOperationsResponse" as const,

  encode(message: ListHostGroupOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostGroupOperationsResponse();
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

  fromJSON(object: any): ListHostGroupOperationsResponse {
    return {
      $type: ListHostGroupOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListHostGroupOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHostGroupOperationsResponse>, I>>(base?: I): ListHostGroupOperationsResponse {
    return ListHostGroupOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostGroupOperationsResponse>, I>>(
    object: I,
  ): ListHostGroupOperationsResponse {
    const message = createBaseListHostGroupOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostGroupOperationsResponse.$type, ListHostGroupOperationsResponse);

/** A set of methods for managing groups of dedicated hosts. */
export type HostGroupServiceService = typeof HostGroupServiceService;
export const HostGroupServiceService = {
  /** Returns the specified host group. */
  get: {
    path: "/yandex.cloud.compute.v1.HostGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetHostGroupRequest) => Buffer.from(GetHostGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetHostGroupRequest.decode(value),
    responseSerialize: (value: HostGroup) => Buffer.from(HostGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HostGroup.decode(value),
  },
  /** Retrieves the list of host groups in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.HostGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHostGroupsRequest) => Buffer.from(ListHostGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListHostGroupsRequest.decode(value),
    responseSerialize: (value: ListHostGroupsResponse) => Buffer.from(ListHostGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListHostGroupsResponse.decode(value),
  },
  /** Creates a host group in the specified folder. */
  create: {
    path: "/yandex.cloud.compute.v1.HostGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateHostGroupRequest) => Buffer.from(CreateHostGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateHostGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified host group. */
  update: {
    path: "/yandex.cloud.compute.v1.HostGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateHostGroupRequest) => Buffer.from(UpdateHostGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateHostGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified host group. */
  delete: {
    path: "/yandex.cloud.compute.v1.HostGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteHostGroupRequest) => Buffer.from(DeleteHostGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteHostGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified host group. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.HostGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHostGroupOperationsRequest) =>
      Buffer.from(ListHostGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListHostGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListHostGroupOperationsResponse) =>
      Buffer.from(ListHostGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListHostGroupOperationsResponse.decode(value),
  },
  /** Lists instances that belongs to the specified host group. */
  listInstances: {
    path: "/yandex.cloud.compute.v1.HostGroupService/ListInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHostGroupInstancesRequest) =>
      Buffer.from(ListHostGroupInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListHostGroupInstancesRequest.decode(value),
    responseSerialize: (value: ListHostGroupInstancesResponse) =>
      Buffer.from(ListHostGroupInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListHostGroupInstancesResponse.decode(value),
  },
  /** Lists hosts that belongs to the specified host group. */
  listHosts: {
    path: "/yandex.cloud.compute.v1.HostGroupService/ListHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHostGroupHostsRequest) =>
      Buffer.from(ListHostGroupHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListHostGroupHostsRequest.decode(value),
    responseSerialize: (value: ListHostGroupHostsResponse) =>
      Buffer.from(ListHostGroupHostsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListHostGroupHostsResponse.decode(value),
  },
} as const;

export interface HostGroupServiceServer extends UntypedServiceImplementation {
  /** Returns the specified host group. */
  get: handleUnaryCall<GetHostGroupRequest, HostGroup>;
  /** Retrieves the list of host groups in the specified folder. */
  list: handleUnaryCall<ListHostGroupsRequest, ListHostGroupsResponse>;
  /** Creates a host group in the specified folder. */
  create: handleUnaryCall<CreateHostGroupRequest, Operation>;
  /** Updates the specified host group. */
  update: handleUnaryCall<UpdateHostGroupRequest, Operation>;
  /** Deletes the specified host group. */
  delete: handleUnaryCall<DeleteHostGroupRequest, Operation>;
  /** Lists operations for the specified host group. */
  listOperations: handleUnaryCall<ListHostGroupOperationsRequest, ListHostGroupOperationsResponse>;
  /** Lists instances that belongs to the specified host group. */
  listInstances: handleUnaryCall<ListHostGroupInstancesRequest, ListHostGroupInstancesResponse>;
  /** Lists hosts that belongs to the specified host group. */
  listHosts: handleUnaryCall<ListHostGroupHostsRequest, ListHostGroupHostsResponse>;
}

export interface HostGroupServiceClient extends Client {
  /** Returns the specified host group. */
  get(
    request: GetHostGroupRequest,
    callback: (error: ServiceError | null, response: HostGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetHostGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HostGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetHostGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HostGroup) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of host groups in the specified folder. */
  list(
    request: ListHostGroupsRequest,
    callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListHostGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListHostGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a host group in the specified folder. */
  create(
    request: CreateHostGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateHostGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateHostGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified host group. */
  update(
    request: UpdateHostGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateHostGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateHostGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified host group. */
  delete(
    request: DeleteHostGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteHostGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteHostGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified host group. */
  listOperations(
    request: ListHostGroupOperationsRequest,
    callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListHostGroupOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListHostGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists instances that belongs to the specified host group. */
  listInstances(
    request: ListHostGroupInstancesRequest,
    callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void,
  ): ClientUnaryCall;
  listInstances(
    request: ListHostGroupInstancesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void,
  ): ClientUnaryCall;
  listInstances(
    request: ListHostGroupInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void,
  ): ClientUnaryCall;
  /** Lists hosts that belongs to the specified host group. */
  listHosts(
    request: ListHostGroupHostsRequest,
    callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void,
  ): ClientUnaryCall;
  listHosts(
    request: ListHostGroupHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void,
  ): ClientUnaryCall;
  listHosts(
    request: ListHostGroupHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void,
  ): ClientUnaryCall;
}

export const HostGroupServiceClient = makeGenericClientConstructor(
  HostGroupServiceService,
  "yandex.cloud.compute.v1.HostGroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): HostGroupServiceClient;
  service: typeof HostGroupServiceService;
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
