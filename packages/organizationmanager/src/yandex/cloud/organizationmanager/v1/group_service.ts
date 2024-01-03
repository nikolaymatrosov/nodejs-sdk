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
import { Group } from "./group";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

export interface GetGroupRequest {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupRequest";
  /**
   * ID of the Group resource to return.
   * To get the group ID, use a [GroupService.List] request.
   */
  groupId: string;
}

export interface ListGroupsRequest {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupsRequest";
  /**
   * ID of the organization to list groups in.
   * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
   */
  organizationId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListGroupsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [Group.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListGroupsResponse {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupsResponse";
  /** List of Group resources. */
  groups: Group[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListGroupsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateGroupRequest {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupRequest";
  /**
   * ID of the organization to create a group in.
   * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
   */
  organizationId: string;
  /**
   * Name of the group.
   * The name must be unique within the organization.
   */
  name: string;
  /** Description of the group. */
  description: string;
}

export interface CreateGroupMetadata {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMetadata";
  /** ID of the group that is being created. */
  groupId: string;
}

export interface UpdateGroupRequest {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupRequest";
  /**
   * ID of the Group resource to update.
   * To get the group ID, use a [GroupService.List] request.
   */
  groupId: string;
  /** Field mask that specifies which fields of the Group resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the group.
   * The name must be unique within the organization.
   */
  name: string;
  /** Description of the group. */
  description: string;
}

export interface UpdateGroupMetadata {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMetadata";
  /** ID of the Group resource that is being updated. */
  groupId: string;
}

export interface DeleteGroupRequest {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupRequest";
  /**
   * ID of the group to delete.
   * To get the group ID, use a [GroupService.List] request.
   */
  groupId: string;
}

export interface DeleteGroupMetadata {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMetadata";
  /** ID of the group that is being deleted. */
  groupId: string;
}

export interface ListGroupOperationsRequest {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsRequest";
  /** ID of the Group resource to list operations for. */
  groupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListGroupOperationsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListGroupOperationsResponse {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsResponse";
  /** List of operations for the specified group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListGroupOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListGroupMembersRequest {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersRequest";
  /** ID of the Group resource to list members for. */
  groupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListGroupMembersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListGroupMembersResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListGroupMembersResponse {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersResponse";
  /** List of members for the specified group. */
  members: GroupMember[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListGroupMembersRequest.page_size], use the [next_page_token] as the value
   * for the [ListGroupMembersRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface GroupMember {
  $type: "yandex.cloud.organizationmanager.v1.GroupMember";
  /** ID of the subject. */
  subjectId: string;
  /**
   * Type of the subject.
   *
   * It can contain one of the following values:
   * * `userAccount`: An account on Yandex, added to Yandex Cloud.
   * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
   */
  subjectType: string;
}

export interface UpdateGroupMembersRequest {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersRequest";
  /**
   * ID of the group to update.
   * To get the group ID, use a [GroupService.List] request.
   */
  groupId: string;
  /** Updates to group members. */
  memberDeltas: MemberDelta[];
}

export interface UpdateGroupMembersMetadata {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersMetadata";
  /** ID of the group that is being updated. */
  groupId: string;
}

export interface MemberDelta {
  $type: "yandex.cloud.organizationmanager.v1.MemberDelta";
  /** The action that is being performed on a group member. */
  action: MemberDelta_MemberAction;
  /**
   * ID of the subject that is being added or removed from a group.
   *
   * Subject type can be one of following values:
   * * `userAccount`: An account on Yandex, added to Yandex Cloud.
   * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
   */
  subjectId: string;
}

export enum MemberDelta_MemberAction {
  MEMBER_ACTION_UNSPECIFIED = 0,
  /** ADD - Addition of a group member. */
  ADD = 1,
  /** REMOVE - Removal of a group member. */
  REMOVE = 2,
  UNRECOGNIZED = -1,
}

export function memberDelta_MemberActionFromJSON(object: any): MemberDelta_MemberAction {
  switch (object) {
    case 0:
    case "MEMBER_ACTION_UNSPECIFIED":
      return MemberDelta_MemberAction.MEMBER_ACTION_UNSPECIFIED;
    case 1:
    case "ADD":
      return MemberDelta_MemberAction.ADD;
    case 2:
    case "REMOVE":
      return MemberDelta_MemberAction.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MemberDelta_MemberAction.UNRECOGNIZED;
  }
}

export function memberDelta_MemberActionToJSON(object: MemberDelta_MemberAction): string {
  switch (object) {
    case MemberDelta_MemberAction.MEMBER_ACTION_UNSPECIFIED:
      return "MEMBER_ACTION_UNSPECIFIED";
    case MemberDelta_MemberAction.ADD:
      return "ADD";
    case MemberDelta_MemberAction.REMOVE:
      return "REMOVE";
    case MemberDelta_MemberAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseGetGroupRequest(): GetGroupRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.GetGroupRequest", groupId: "" };
}

export const GetGroupRequest = {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupRequest" as const,

  encode(message: GetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupRequest {
    return { $type: GetGroupRequest.$type, groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "" };
  },

  toJSON(message: GetGroupRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupRequest>, I>>(base?: I): GetGroupRequest {
    return GetGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGroupRequest>, I>>(object: I): GetGroupRequest {
    const message = createBaseGetGroupRequest();
    message.groupId = object.groupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetGroupRequest.$type, GetGroupRequest);

function createBaseListGroupsRequest(): ListGroupsRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupsRequest",
    organizationId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListGroupsRequest = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupsRequest" as const,

  encode(message: ListGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organizationId = reader.string();
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

  fromJSON(object: any): ListGroupsRequest {
    return {
      $type: ListGroupsRequest.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListGroupsRequest): unknown {
    const obj: any = {};
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
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

  create<I extends Exact<DeepPartial<ListGroupsRequest>, I>>(base?: I): ListGroupsRequest {
    return ListGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupsRequest>, I>>(object: I): ListGroupsRequest {
    const message = createBaseListGroupsRequest();
    message.organizationId = object.organizationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGroupsRequest.$type, ListGroupsRequest);

function createBaseListGroupsResponse(): ListGroupsResponse {
  return { $type: "yandex.cloud.organizationmanager.v1.ListGroupsResponse", groups: [], nextPageToken: "" };
}

export const ListGroupsResponse = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupsResponse" as const,

  encode(message: ListGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListGroupsResponse {
    return {
      $type: ListGroupsResponse.$type,
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListGroupsResponse): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupsResponse>, I>>(base?: I): ListGroupsResponse {
    return ListGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupsResponse>, I>>(object: I): ListGroupsResponse {
    const message = createBaseListGroupsResponse();
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGroupsResponse.$type, ListGroupsResponse);

function createBaseCreateGroupRequest(): CreateGroupRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupRequest",
    organizationId: "",
    name: "",
    description: "",
  };
}

export const CreateGroupRequest = {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupRequest" as const,

  encode(message: CreateGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organizationId = reader.string();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupRequest {
    return {
      $type: CreateGroupRequest.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: CreateGroupRequest): unknown {
    const obj: any = {};
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(base?: I): CreateGroupRequest {
    return CreateGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(object: I): CreateGroupRequest {
    const message = createBaseCreateGroupRequest();
    message.organizationId = object.organizationId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateGroupRequest.$type, CreateGroupRequest);

function createBaseCreateGroupMetadata(): CreateGroupMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.CreateGroupMetadata", groupId: "" };
}

export const CreateGroupMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMetadata" as const,

  encode(message: CreateGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupMetadata {
    return {
      $type: CreateGroupMetadata.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
    };
  },

  toJSON(message: CreateGroupMetadata): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupMetadata>, I>>(base?: I): CreateGroupMetadata {
    return CreateGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroupMetadata>, I>>(object: I): CreateGroupMetadata {
    const message = createBaseCreateGroupMetadata();
    message.groupId = object.groupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateGroupMetadata.$type, CreateGroupMetadata);

function createBaseUpdateGroupRequest(): UpdateGroupRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupRequest",
    groupId: "",
    updateMask: undefined,
    name: "",
    description: "",
  };
}

export const UpdateGroupRequest = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupRequest" as const,

  encode(message: UpdateGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupRequest {
    return {
      $type: UpdateGroupRequest.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: UpdateGroupRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupRequest>, I>>(base?: I): UpdateGroupRequest {
    return UpdateGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupRequest>, I>>(object: I): UpdateGroupRequest {
    const message = createBaseUpdateGroupRequest();
    message.groupId = object.groupId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateGroupRequest.$type, UpdateGroupRequest);

function createBaseUpdateGroupMetadata(): UpdateGroupMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMetadata", groupId: "" };
}

export const UpdateGroupMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMetadata" as const,

  encode(message: UpdateGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMetadata {
    return {
      $type: UpdateGroupMetadata.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
    };
  },

  toJSON(message: UpdateGroupMetadata): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupMetadata>, I>>(base?: I): UpdateGroupMetadata {
    return UpdateGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupMetadata>, I>>(object: I): UpdateGroupMetadata {
    const message = createBaseUpdateGroupMetadata();
    message.groupId = object.groupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateGroupMetadata.$type, UpdateGroupMetadata);

function createBaseDeleteGroupRequest(): DeleteGroupRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.DeleteGroupRequest", groupId: "" };
}

export const DeleteGroupRequest = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupRequest" as const,

  encode(message: DeleteGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupRequest {
    return { $type: DeleteGroupRequest.$type, groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "" };
  },

  toJSON(message: DeleteGroupRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupRequest>, I>>(base?: I): DeleteGroupRequest {
    return DeleteGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGroupRequest>, I>>(object: I): DeleteGroupRequest {
    const message = createBaseDeleteGroupRequest();
    message.groupId = object.groupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteGroupRequest.$type, DeleteGroupRequest);

function createBaseDeleteGroupMetadata(): DeleteGroupMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMetadata", groupId: "" };
}

export const DeleteGroupMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMetadata" as const,

  encode(message: DeleteGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupMetadata {
    return {
      $type: DeleteGroupMetadata.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
    };
  },

  toJSON(message: DeleteGroupMetadata): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupMetadata>, I>>(base?: I): DeleteGroupMetadata {
    return DeleteGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGroupMetadata>, I>>(object: I): DeleteGroupMetadata {
    const message = createBaseDeleteGroupMetadata();
    message.groupId = object.groupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteGroupMetadata.$type, DeleteGroupMetadata);

function createBaseListGroupOperationsRequest(): ListGroupOperationsRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsRequest",
    groupId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListGroupOperationsRequest = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsRequest" as const,

  encode(message: ListGroupOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
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

  fromJSON(object: any): ListGroupOperationsRequest {
    return {
      $type: ListGroupOperationsRequest.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListGroupOperationsRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupOperationsRequest>, I>>(base?: I): ListGroupOperationsRequest {
    return ListGroupOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupOperationsRequest>, I>>(object: I): ListGroupOperationsRequest {
    const message = createBaseListGroupOperationsRequest();
    message.groupId = object.groupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGroupOperationsRequest.$type, ListGroupOperationsRequest);

function createBaseListGroupOperationsResponse(): ListGroupOperationsResponse {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListGroupOperationsResponse = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsResponse" as const,

  encode(message: ListGroupOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupOperationsResponse();
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

  fromJSON(object: any): ListGroupOperationsResponse {
    return {
      $type: ListGroupOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListGroupOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupOperationsResponse>, I>>(base?: I): ListGroupOperationsResponse {
    return ListGroupOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupOperationsResponse>, I>>(object: I): ListGroupOperationsResponse {
    const message = createBaseListGroupOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGroupOperationsResponse.$type, ListGroupOperationsResponse);

function createBaseListGroupMembersRequest(): ListGroupMembersRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersRequest",
    groupId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListGroupMembersRequest = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersRequest" as const,

  encode(message: ListGroupMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupMembersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
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

  fromJSON(object: any): ListGroupMembersRequest {
    return {
      $type: ListGroupMembersRequest.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListGroupMembersRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupMembersRequest>, I>>(base?: I): ListGroupMembersRequest {
    return ListGroupMembersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupMembersRequest>, I>>(object: I): ListGroupMembersRequest {
    const message = createBaseListGroupMembersRequest();
    message.groupId = object.groupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGroupMembersRequest.$type, ListGroupMembersRequest);

function createBaseListGroupMembersResponse(): ListGroupMembersResponse {
  return { $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersResponse", members: [], nextPageToken: "" };
}

export const ListGroupMembersResponse = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersResponse" as const,

  encode(message: ListGroupMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.members.push(GroupMember.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListGroupMembersResponse {
    return {
      $type: ListGroupMembersResponse.$type,
      members: globalThis.Array.isArray(object?.members) ? object.members.map((e: any) => GroupMember.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListGroupMembersResponse): unknown {
    const obj: any = {};
    if (message.members?.length) {
      obj.members = message.members.map((e) => GroupMember.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupMembersResponse>, I>>(base?: I): ListGroupMembersResponse {
    return ListGroupMembersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupMembersResponse>, I>>(object: I): ListGroupMembersResponse {
    const message = createBaseListGroupMembersResponse();
    message.members = object.members?.map((e) => GroupMember.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGroupMembersResponse.$type, ListGroupMembersResponse);

function createBaseGroupMember(): GroupMember {
  return { $type: "yandex.cloud.organizationmanager.v1.GroupMember", subjectId: "", subjectType: "" };
}

export const GroupMember = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMember" as const,

  encode(message: GroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }
    if (message.subjectType !== "") {
      writer.uint32(18).string(message.subjectType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subjectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subjectType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupMember {
    return {
      $type: GroupMember.$type,
      subjectId: isSet(object.subjectId) ? globalThis.String(object.subjectId) : "",
      subjectType: isSet(object.subjectType) ? globalThis.String(object.subjectType) : "",
    };
  },

  toJSON(message: GroupMember): unknown {
    const obj: any = {};
    if (message.subjectId !== "") {
      obj.subjectId = message.subjectId;
    }
    if (message.subjectType !== "") {
      obj.subjectType = message.subjectType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupMember>, I>>(base?: I): GroupMember {
    return GroupMember.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupMember>, I>>(object: I): GroupMember {
    const message = createBaseGroupMember();
    message.subjectId = object.subjectId ?? "";
    message.subjectType = object.subjectType ?? "";
    return message;
  },
};

messageTypeRegistry.set(GroupMember.$type, GroupMember);

function createBaseUpdateGroupMembersRequest(): UpdateGroupMembersRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersRequest", groupId: "", memberDeltas: [] };
}

export const UpdateGroupMembersRequest = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersRequest" as const,

  encode(message: UpdateGroupMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    for (const v of message.memberDeltas) {
      MemberDelta.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMembersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.memberDeltas.push(MemberDelta.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMembersRequest {
    return {
      $type: UpdateGroupMembersRequest.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      memberDeltas: globalThis.Array.isArray(object?.memberDeltas)
        ? object.memberDeltas.map((e: any) => MemberDelta.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateGroupMembersRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.memberDeltas?.length) {
      obj.memberDeltas = message.memberDeltas.map((e) => MemberDelta.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupMembersRequest>, I>>(base?: I): UpdateGroupMembersRequest {
    return UpdateGroupMembersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupMembersRequest>, I>>(object: I): UpdateGroupMembersRequest {
    const message = createBaseUpdateGroupMembersRequest();
    message.groupId = object.groupId ?? "";
    message.memberDeltas = object.memberDeltas?.map((e) => MemberDelta.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateGroupMembersRequest.$type, UpdateGroupMembersRequest);

function createBaseUpdateGroupMembersMetadata(): UpdateGroupMembersMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersMetadata", groupId: "" };
}

export const UpdateGroupMembersMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersMetadata" as const,

  encode(message: UpdateGroupMembersMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMembersMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupMembersMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMembersMetadata {
    return {
      $type: UpdateGroupMembersMetadata.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
    };
  },

  toJSON(message: UpdateGroupMembersMetadata): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupMembersMetadata>, I>>(base?: I): UpdateGroupMembersMetadata {
    return UpdateGroupMembersMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupMembersMetadata>, I>>(object: I): UpdateGroupMembersMetadata {
    const message = createBaseUpdateGroupMembersMetadata();
    message.groupId = object.groupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateGroupMembersMetadata.$type, UpdateGroupMembersMetadata);

function createBaseMemberDelta(): MemberDelta {
  return { $type: "yandex.cloud.organizationmanager.v1.MemberDelta", action: 0, subjectId: "" };
}

export const MemberDelta = {
  $type: "yandex.cloud.organizationmanager.v1.MemberDelta" as const,

  encode(message: MemberDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.subjectId !== "") {
      writer.uint32(18).string(message.subjectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemberDelta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberDelta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subjectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MemberDelta {
    return {
      $type: MemberDelta.$type,
      action: isSet(object.action) ? memberDelta_MemberActionFromJSON(object.action) : 0,
      subjectId: isSet(object.subjectId) ? globalThis.String(object.subjectId) : "",
    };
  },

  toJSON(message: MemberDelta): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = memberDelta_MemberActionToJSON(message.action);
    }
    if (message.subjectId !== "") {
      obj.subjectId = message.subjectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MemberDelta>, I>>(base?: I): MemberDelta {
    return MemberDelta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MemberDelta>, I>>(object: I): MemberDelta {
    const message = createBaseMemberDelta();
    message.action = object.action ?? 0;
    message.subjectId = object.subjectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MemberDelta.$type, MemberDelta);

/** A set of methods for managing groups. */
export type GroupServiceService = typeof GroupServiceService;
export const GroupServiceService = {
  /**
   * Returns the specified Group resource.
   *
   * To get the list of available Group resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGroupRequest) => Buffer.from(GetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGroupRequest.decode(value),
    responseSerialize: (value: Group) => Buffer.from(Group.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Group.decode(value),
  },
  /** Retrieves the list of group resources. */
  list: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGroupsRequest) => Buffer.from(ListGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGroupsRequest.decode(value),
    responseSerialize: (value: ListGroupsResponse) => Buffer.from(ListGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListGroupsResponse.decode(value),
  },
  /** Creates a group in the specified organization. */
  create: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGroupRequest) => Buffer.from(CreateGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified group. */
  update: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateGroupRequest) => Buffer.from(UpdateGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified group. */
  delete: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteGroupRequest) => Buffer.from(DeleteGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified group. */
  listOperations: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGroupOperationsRequest) =>
      Buffer.from(ListGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListGroupOperationsResponse) =>
      Buffer.from(ListGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListGroupOperationsResponse.decode(value),
  },
  /** List group active members. */
  listMembers: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/ListMembers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGroupMembersRequest) => Buffer.from(ListGroupMembersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGroupMembersRequest.decode(value),
    responseSerialize: (value: ListGroupMembersResponse) =>
      Buffer.from(ListGroupMembersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListGroupMembersResponse.decode(value),
  },
  /** Update group members. */
  updateMembers: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/UpdateMembers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateGroupMembersRequest) =>
      Buffer.from(UpdateGroupMembersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateGroupMembersRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists access bindings for the specified group. */
  listAccessBindings: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified group. */
  setAccessBindings: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified group. */
  updateAccessBindings: {
    path: "/yandex.cloud.organizationmanager.v1.GroupService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface GroupServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Group resource.
   *
   * To get the list of available Group resources, make a [List] request.
   */
  get: handleUnaryCall<GetGroupRequest, Group>;
  /** Retrieves the list of group resources. */
  list: handleUnaryCall<ListGroupsRequest, ListGroupsResponse>;
  /** Creates a group in the specified organization. */
  create: handleUnaryCall<CreateGroupRequest, Operation>;
  /** Updates the specified group. */
  update: handleUnaryCall<UpdateGroupRequest, Operation>;
  /** Deletes the specified group. */
  delete: handleUnaryCall<DeleteGroupRequest, Operation>;
  /** Lists operations for the specified group. */
  listOperations: handleUnaryCall<ListGroupOperationsRequest, ListGroupOperationsResponse>;
  /** List group active members. */
  listMembers: handleUnaryCall<ListGroupMembersRequest, ListGroupMembersResponse>;
  /** Update group members. */
  updateMembers: handleUnaryCall<UpdateGroupMembersRequest, Operation>;
  /** Lists access bindings for the specified group. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the specified group. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified group. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface GroupServiceClient extends Client {
  /**
   * Returns the specified Group resource.
   *
   * To get the list of available Group resources, make a [List] request.
   */
  get(request: GetGroupRequest, callback: (error: ServiceError | null, response: Group) => void): ClientUnaryCall;
  get(
    request: GetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Group) => void,
  ): ClientUnaryCall;
  get(
    request: GetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Group) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of group resources. */
  list(
    request: ListGroupsRequest,
    callback: (error: ServiceError | null, response: ListGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a group in the specified organization. */
  create(
    request: CreateGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified group. */
  update(
    request: UpdateGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified group. */
  delete(
    request: DeleteGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified group. */
  listOperations(
    request: ListGroupOperationsRequest,
    callback: (error: ServiceError | null, response: ListGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListGroupOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  /** List group active members. */
  listMembers(
    request: ListGroupMembersRequest,
    callback: (error: ServiceError | null, response: ListGroupMembersResponse) => void,
  ): ClientUnaryCall;
  listMembers(
    request: ListGroupMembersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListGroupMembersResponse) => void,
  ): ClientUnaryCall;
  listMembers(
    request: ListGroupMembersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListGroupMembersResponse) => void,
  ): ClientUnaryCall;
  /** Update group members. */
  updateMembers(
    request: UpdateGroupMembersRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateMembers(
    request: UpdateGroupMembersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateMembers(
    request: UpdateGroupMembersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists access bindings for the specified group. */
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
  /** Sets access bindings for the specified group. */
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
  /** Updates access bindings for the specified group. */
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

export const GroupServiceClient = makeGenericClientConstructor(
  GroupServiceService,
  "yandex.cloud.organizationmanager.v1.GroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GroupServiceClient;
  service: typeof GroupServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
