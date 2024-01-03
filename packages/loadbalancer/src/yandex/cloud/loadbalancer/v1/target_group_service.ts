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
import { Target, TargetGroup } from "./target_group";

export const protobufPackage = "yandex.cloud.loadbalancer.v1";

export interface GetTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetGroupRequest";
  /**
   * ID of the TargetGroup resource to return.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
}

export interface ListTargetGroupsRequest {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsRequest";
  /**
   * ID of the folder to list target groups in.
   * To get the folder ID, use a [TargetGroupService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListTargetGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListTargetGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can only filter by the [TargetGroup.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListTargetGroupsResponse {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsResponse";
  /** List of TargetGroup resources. */
  targetGroups: TargetGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListTargetGroupsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListTargetGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest";
  /**
   * ID of the folder to list target groups in.
   * To get the folder ID, use a [TargetGroupService.List] request.
   */
  folderId: string;
  /**
   * Name of the target group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the target group. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** ID of the availability zone where the target group resides. */
  regionId: string;
  /** List of targets within the target group. */
  targets: Target[];
}

export interface CreateTargetGroupRequest_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupMetadata";
  /** ID of the target group that is being created. */
  targetGroupId: string;
}

export interface UpdateTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest";
  /**
   * ID of the TargetGroup resource to update.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
  /** Field mask that specifies which fields of the TargetGroup resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the target group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the target group. */
  description: string;
  /**
   * Resource labels as `` key:value `` pairs.
   *
   * The existing set of `` labels `` is completely replaced with the provided set.
   */
  labels: { [key: string]: string };
  /** A new list of targets for this target group. */
  targets: Target[];
}

export interface UpdateTargetGroupRequest_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupMetadata";
  /** ID of the target group that is being updated. */
  targetGroupId: string;
}

export interface DeleteTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupRequest";
  /**
   * ID of the target group to delete.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
}

export interface DeleteTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupMetadata";
  /** ID of the target group that is being deleted. */
  targetGroupId: string;
}

export interface AddTargetsRequest {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsRequest";
  /**
   * ID of the TargetGroup resource to add targets to.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
  /** List of targets to add to the target group. */
  targets: Target[];
}

export interface AddTargetsMetadata {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsMetadata";
  /** ID of the target group that targets are being added to. */
  targetGroupId: string;
}

export interface RemoveTargetsRequest {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsRequest";
  /**
   * ID of the target group to remove targets from.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
  /** List of targets to remove from the target group. */
  targets: Target[];
}

export interface RemoveTargetsMetadata {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsMetadata";
  /** ID of the target group that targets are being removed from. */
  targetGroupId: string;
}

export interface ListTargetGroupOperationsRequest {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsRequest";
  /**
   * ID of the TargetGroup resource to update.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListTargetGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListTargetGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListTargetGroupOperationsResponse {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsResponse";
  /** List of operations for the specified target group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListTargetGroupOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListTargetGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetTargetGroupRequest(): GetTargetGroupRequest {
  return { $type: "yandex.cloud.loadbalancer.v1.GetTargetGroupRequest", targetGroupId: "" };
}

export const GetTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetGroupRequest" as const,

  encode(message: GetTargetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTargetGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTargetGroupRequest {
    return {
      $type: GetTargetGroupRequest.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: GetTargetGroupRequest): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTargetGroupRequest>, I>>(base?: I): GetTargetGroupRequest {
    return GetTargetGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTargetGroupRequest>, I>>(object: I): GetTargetGroupRequest {
    const message = createBaseGetTargetGroupRequest();
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTargetGroupRequest.$type, GetTargetGroupRequest);

function createBaseListTargetGroupsRequest(): ListTargetGroupsRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListTargetGroupsRequest = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsRequest" as const,

  encode(message: ListTargetGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTargetGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTargetGroupsRequest();
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

  fromJSON(object: any): ListTargetGroupsRequest {
    return {
      $type: ListTargetGroupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListTargetGroupsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListTargetGroupsRequest>, I>>(base?: I): ListTargetGroupsRequest {
    return ListTargetGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTargetGroupsRequest>, I>>(object: I): ListTargetGroupsRequest {
    const message = createBaseListTargetGroupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTargetGroupsRequest.$type, ListTargetGroupsRequest);

function createBaseListTargetGroupsResponse(): ListTargetGroupsResponse {
  return { $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsResponse", targetGroups: [], nextPageToken: "" };
}

export const ListTargetGroupsResponse = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsResponse" as const,

  encode(message: ListTargetGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.targetGroups) {
      TargetGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTargetGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTargetGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroups.push(TargetGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTargetGroupsResponse {
    return {
      $type: ListTargetGroupsResponse.$type,
      targetGroups: globalThis.Array.isArray(object?.targetGroups)
        ? object.targetGroups.map((e: any) => TargetGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTargetGroupsResponse): unknown {
    const obj: any = {};
    if (message.targetGroups?.length) {
      obj.targetGroups = message.targetGroups.map((e) => TargetGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTargetGroupsResponse>, I>>(base?: I): ListTargetGroupsResponse {
    return ListTargetGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTargetGroupsResponse>, I>>(object: I): ListTargetGroupsResponse {
    const message = createBaseListTargetGroupsResponse();
    message.targetGroups = object.targetGroups?.map((e) => TargetGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTargetGroupsResponse.$type, ListTargetGroupsResponse);

function createBaseCreateTargetGroupRequest(): CreateTargetGroupRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    regionId: "",
    targets: [],
  };
}

export const CreateTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest" as const,

  encode(message: CreateTargetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateTargetGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.regionId !== "") {
      writer.uint32(42).string(message.regionId);
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTargetGroupRequest();
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

          const entry4 = CreateTargetGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.regionId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.targets.push(Target.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTargetGroupRequest {
    return {
      $type: CreateTargetGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
      targets: globalThis.Array.isArray(object?.targets) ? object.targets.map((e: any) => Target.fromJSON(e)) : [],
    };
  },

  toJSON(message: CreateTargetGroupRequest): unknown {
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
    if (message.regionId !== "") {
      obj.regionId = message.regionId;
    }
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) => Target.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTargetGroupRequest>, I>>(base?: I): CreateTargetGroupRequest {
    return CreateTargetGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTargetGroupRequest>, I>>(object: I): CreateTargetGroupRequest {
    const message = createBaseCreateTargetGroupRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.regionId = object.regionId ?? "";
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateTargetGroupRequest.$type, CreateTargetGroupRequest);

function createBaseCreateTargetGroupRequest_LabelsEntry(): CreateTargetGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry", key: "", value: "" };
}

export const CreateTargetGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry" as const,

  encode(message: CreateTargetGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTargetGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTargetGroupRequest_LabelsEntry();
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

  fromJSON(object: any): CreateTargetGroupRequest_LabelsEntry {
    return {
      $type: CreateTargetGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateTargetGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTargetGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateTargetGroupRequest_LabelsEntry {
    return CreateTargetGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTargetGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateTargetGroupRequest_LabelsEntry {
    const message = createBaseCreateTargetGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTargetGroupRequest_LabelsEntry.$type, CreateTargetGroupRequest_LabelsEntry);

function createBaseCreateTargetGroupMetadata(): CreateTargetGroupMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupMetadata", targetGroupId: "" };
}

export const CreateTargetGroupMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupMetadata" as const,

  encode(message: CreateTargetGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTargetGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTargetGroupMetadata {
    return {
      $type: CreateTargetGroupMetadata.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: CreateTargetGroupMetadata): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTargetGroupMetadata>, I>>(base?: I): CreateTargetGroupMetadata {
    return CreateTargetGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTargetGroupMetadata>, I>>(object: I): CreateTargetGroupMetadata {
    const message = createBaseCreateTargetGroupMetadata();
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTargetGroupMetadata.$type, CreateTargetGroupMetadata);

function createBaseUpdateTargetGroupRequest(): UpdateTargetGroupRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest",
    targetGroupId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    targets: [],
  };
}

export const UpdateTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest" as const,

  encode(message: UpdateTargetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
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
      UpdateTargetGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTargetGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
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

          const entry5 = UpdateTargetGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.targets.push(Target.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTargetGroupRequest {
    return {
      $type: UpdateTargetGroupRequest.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      targets: globalThis.Array.isArray(object?.targets) ? object.targets.map((e: any) => Target.fromJSON(e)) : [],
    };
  },

  toJSON(message: UpdateTargetGroupRequest): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
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
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) => Target.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTargetGroupRequest>, I>>(base?: I): UpdateTargetGroupRequest {
    return UpdateTargetGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTargetGroupRequest>, I>>(object: I): UpdateTargetGroupRequest {
    const message = createBaseUpdateTargetGroupRequest();
    message.targetGroupId = object.targetGroupId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateTargetGroupRequest.$type, UpdateTargetGroupRequest);

function createBaseUpdateTargetGroupRequest_LabelsEntry(): UpdateTargetGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateTargetGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry" as const,

  encode(message: UpdateTargetGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTargetGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTargetGroupRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateTargetGroupRequest_LabelsEntry {
    return {
      $type: UpdateTargetGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateTargetGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTargetGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateTargetGroupRequest_LabelsEntry {
    return UpdateTargetGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTargetGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateTargetGroupRequest_LabelsEntry {
    const message = createBaseUpdateTargetGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTargetGroupRequest_LabelsEntry.$type, UpdateTargetGroupRequest_LabelsEntry);

function createBaseUpdateTargetGroupMetadata(): UpdateTargetGroupMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupMetadata", targetGroupId: "" };
}

export const UpdateTargetGroupMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupMetadata" as const,

  encode(message: UpdateTargetGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTargetGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTargetGroupMetadata {
    return {
      $type: UpdateTargetGroupMetadata.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: UpdateTargetGroupMetadata): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTargetGroupMetadata>, I>>(base?: I): UpdateTargetGroupMetadata {
    return UpdateTargetGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTargetGroupMetadata>, I>>(object: I): UpdateTargetGroupMetadata {
    const message = createBaseUpdateTargetGroupMetadata();
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTargetGroupMetadata.$type, UpdateTargetGroupMetadata);

function createBaseDeleteTargetGroupRequest(): DeleteTargetGroupRequest {
  return { $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupRequest", targetGroupId: "" };
}

export const DeleteTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupRequest" as const,

  encode(message: DeleteTargetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTargetGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTargetGroupRequest {
    return {
      $type: DeleteTargetGroupRequest.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: DeleteTargetGroupRequest): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTargetGroupRequest>, I>>(base?: I): DeleteTargetGroupRequest {
    return DeleteTargetGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTargetGroupRequest>, I>>(object: I): DeleteTargetGroupRequest {
    const message = createBaseDeleteTargetGroupRequest();
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTargetGroupRequest.$type, DeleteTargetGroupRequest);

function createBaseDeleteTargetGroupMetadata(): DeleteTargetGroupMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupMetadata", targetGroupId: "" };
}

export const DeleteTargetGroupMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupMetadata" as const,

  encode(message: DeleteTargetGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTargetGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTargetGroupMetadata {
    return {
      $type: DeleteTargetGroupMetadata.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: DeleteTargetGroupMetadata): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTargetGroupMetadata>, I>>(base?: I): DeleteTargetGroupMetadata {
    return DeleteTargetGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTargetGroupMetadata>, I>>(object: I): DeleteTargetGroupMetadata {
    const message = createBaseDeleteTargetGroupMetadata();
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTargetGroupMetadata.$type, DeleteTargetGroupMetadata);

function createBaseAddTargetsRequest(): AddTargetsRequest {
  return { $type: "yandex.cloud.loadbalancer.v1.AddTargetsRequest", targetGroupId: "", targets: [] };
}

export const AddTargetsRequest = {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsRequest" as const,

  encode(message: AddTargetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddTargetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddTargetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targets.push(Target.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddTargetsRequest {
    return {
      $type: AddTargetsRequest.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
      targets: globalThis.Array.isArray(object?.targets) ? object.targets.map((e: any) => Target.fromJSON(e)) : [],
    };
  },

  toJSON(message: AddTargetsRequest): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) => Target.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddTargetsRequest>, I>>(base?: I): AddTargetsRequest {
    return AddTargetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddTargetsRequest>, I>>(object: I): AddTargetsRequest {
    const message = createBaseAddTargetsRequest();
    message.targetGroupId = object.targetGroupId ?? "";
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AddTargetsRequest.$type, AddTargetsRequest);

function createBaseAddTargetsMetadata(): AddTargetsMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.AddTargetsMetadata", targetGroupId: "" };
}

export const AddTargetsMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsMetadata" as const,

  encode(message: AddTargetsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddTargetsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddTargetsMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddTargetsMetadata {
    return {
      $type: AddTargetsMetadata.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: AddTargetsMetadata): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddTargetsMetadata>, I>>(base?: I): AddTargetsMetadata {
    return AddTargetsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddTargetsMetadata>, I>>(object: I): AddTargetsMetadata {
    const message = createBaseAddTargetsMetadata();
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddTargetsMetadata.$type, AddTargetsMetadata);

function createBaseRemoveTargetsRequest(): RemoveTargetsRequest {
  return { $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsRequest", targetGroupId: "", targets: [] };
}

export const RemoveTargetsRequest = {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsRequest" as const,

  encode(message: RemoveTargetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTargetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveTargetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targets.push(Target.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveTargetsRequest {
    return {
      $type: RemoveTargetsRequest.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
      targets: globalThis.Array.isArray(object?.targets) ? object.targets.map((e: any) => Target.fromJSON(e)) : [],
    };
  },

  toJSON(message: RemoveTargetsRequest): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) => Target.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveTargetsRequest>, I>>(base?: I): RemoveTargetsRequest {
    return RemoveTargetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveTargetsRequest>, I>>(object: I): RemoveTargetsRequest {
    const message = createBaseRemoveTargetsRequest();
    message.targetGroupId = object.targetGroupId ?? "";
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RemoveTargetsRequest.$type, RemoveTargetsRequest);

function createBaseRemoveTargetsMetadata(): RemoveTargetsMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsMetadata", targetGroupId: "" };
}

export const RemoveTargetsMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsMetadata" as const,

  encode(message: RemoveTargetsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTargetsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveTargetsMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveTargetsMetadata {
    return {
      $type: RemoveTargetsMetadata.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: RemoveTargetsMetadata): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveTargetsMetadata>, I>>(base?: I): RemoveTargetsMetadata {
    return RemoveTargetsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveTargetsMetadata>, I>>(object: I): RemoveTargetsMetadata {
    const message = createBaseRemoveTargetsMetadata();
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveTargetsMetadata.$type, RemoveTargetsMetadata);

function createBaseListTargetGroupOperationsRequest(): ListTargetGroupOperationsRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsRequest",
    targetGroupId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListTargetGroupOperationsRequest = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsRequest" as const,

  encode(message: ListTargetGroupOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTargetGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTargetGroupOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupId = reader.string();
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

  fromJSON(object: any): ListTargetGroupOperationsRequest {
    return {
      $type: ListTargetGroupOperationsRequest.$type,
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListTargetGroupOperationsRequest): unknown {
    const obj: any = {};
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTargetGroupOperationsRequest>, I>>(
    base?: I,
  ): ListTargetGroupOperationsRequest {
    return ListTargetGroupOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTargetGroupOperationsRequest>, I>>(
    object: I,
  ): ListTargetGroupOperationsRequest {
    const message = createBaseListTargetGroupOperationsRequest();
    message.targetGroupId = object.targetGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTargetGroupOperationsRequest.$type, ListTargetGroupOperationsRequest);

function createBaseListTargetGroupOperationsResponse(): ListTargetGroupOperationsResponse {
  return { $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListTargetGroupOperationsResponse = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsResponse" as const,

  encode(message: ListTargetGroupOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTargetGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTargetGroupOperationsResponse();
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

  fromJSON(object: any): ListTargetGroupOperationsResponse {
    return {
      $type: ListTargetGroupOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTargetGroupOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTargetGroupOperationsResponse>, I>>(
    base?: I,
  ): ListTargetGroupOperationsResponse {
    return ListTargetGroupOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTargetGroupOperationsResponse>, I>>(
    object: I,
  ): ListTargetGroupOperationsResponse {
    const message = createBaseListTargetGroupOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTargetGroupOperationsResponse.$type, ListTargetGroupOperationsResponse);

/** A set of methods for managing TargetGroup resources. */
export type TargetGroupServiceService = typeof TargetGroupServiceService;
export const TargetGroupServiceService = {
  /** Returns the specified TargetGroup resource. */
  get: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTargetGroupRequest) => Buffer.from(GetTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTargetGroupRequest.decode(value),
    responseSerialize: (value: TargetGroup) => Buffer.from(TargetGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TargetGroup.decode(value),
  },
  /** Retrieves the list of TargetGroup resources in the specified folder. */
  list: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTargetGroupsRequest) => Buffer.from(ListTargetGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTargetGroupsRequest.decode(value),
    responseSerialize: (value: ListTargetGroupsResponse) =>
      Buffer.from(ListTargetGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTargetGroupsResponse.decode(value),
  },
  /** Creates a target group in the specified folder and adds the specified targets to it. */
  create: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTargetGroupRequest) => Buffer.from(CreateTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified target group. */
  update: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTargetGroupRequest) => Buffer.from(UpdateTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified target group. */
  delete: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteTargetGroupRequest) => Buffer.from(DeleteTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds targets to the target group. */
  addTargets: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/AddTargets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddTargetsRequest) => Buffer.from(AddTargetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddTargetsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes targets from the target group. */
  removeTargets: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/RemoveTargets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveTargetsRequest) => Buffer.from(RemoveTargetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveTargetsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified target group. */
  listOperations: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTargetGroupOperationsRequest) =>
      Buffer.from(ListTargetGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTargetGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListTargetGroupOperationsResponse) =>
      Buffer.from(ListTargetGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTargetGroupOperationsResponse.decode(value),
  },
} as const;

export interface TargetGroupServiceServer extends UntypedServiceImplementation {
  /** Returns the specified TargetGroup resource. */
  get: handleUnaryCall<GetTargetGroupRequest, TargetGroup>;
  /** Retrieves the list of TargetGroup resources in the specified folder. */
  list: handleUnaryCall<ListTargetGroupsRequest, ListTargetGroupsResponse>;
  /** Creates a target group in the specified folder and adds the specified targets to it. */
  create: handleUnaryCall<CreateTargetGroupRequest, Operation>;
  /** Updates the specified target group. */
  update: handleUnaryCall<UpdateTargetGroupRequest, Operation>;
  /** Deletes the specified target group. */
  delete: handleUnaryCall<DeleteTargetGroupRequest, Operation>;
  /** Adds targets to the target group. */
  addTargets: handleUnaryCall<AddTargetsRequest, Operation>;
  /** Removes targets from the target group. */
  removeTargets: handleUnaryCall<RemoveTargetsRequest, Operation>;
  /** Lists operations for the specified target group. */
  listOperations: handleUnaryCall<ListTargetGroupOperationsRequest, ListTargetGroupOperationsResponse>;
}

export interface TargetGroupServiceClient extends Client {
  /** Returns the specified TargetGroup resource. */
  get(
    request: GetTargetGroupRequest,
    callback: (error: ServiceError | null, response: TargetGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TargetGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TargetGroup) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of TargetGroup resources in the specified folder. */
  list(
    request: ListTargetGroupsRequest,
    callback: (error: ServiceError | null, response: ListTargetGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTargetGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTargetGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTargetGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTargetGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a target group in the specified folder and adds the specified targets to it. */
  create(
    request: CreateTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified target group. */
  update(
    request: UpdateTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified target group. */
  delete(
    request: DeleteTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Adds targets to the target group. */
  addTargets(
    request: AddTargetsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addTargets(
    request: AddTargetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addTargets(
    request: AddTargetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Removes targets from the target group. */
  removeTargets(
    request: RemoveTargetsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeTargets(
    request: RemoveTargetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeTargets(
    request: RemoveTargetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified target group. */
  listOperations(
    request: ListTargetGroupOperationsRequest,
    callback: (error: ServiceError | null, response: ListTargetGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListTargetGroupOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTargetGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListTargetGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTargetGroupOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const TargetGroupServiceClient = makeGenericClientConstructor(
  TargetGroupServiceService,
  "yandex.cloud.loadbalancer.v1.TargetGroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TargetGroupServiceClient;
  service: typeof TargetGroupServiceService;
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
