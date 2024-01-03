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
import { GroupMapping, GroupMappingItem } from "./group_mapping";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

export interface GetGroupMappingRequest {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest";
  federationId: string;
}

export interface GetGroupMappingResponse {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse";
  groupMapping?: GroupMapping | undefined;
}

export interface CreateGroupMappingRequest {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest";
  /** Federation the group mapping will be created for */
  federationId: string;
  /** Synchronization status. */
  enabled: boolean;
}

export interface CreateGroupMappingMetadata {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata";
  federationId: string;
}

/** Request for updating group mapping configuration */
export interface UpdateGroupMappingRequest {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest";
  /** Federation the group mapping update is requested */
  federationId: string;
  /** A set of fields that should be updated */
  updateMask?:
    | string[]
    | undefined;
  /** A new state of synchronization to update (if mentioned in update_mask). */
  enabled: boolean;
}

export interface UpdateGroupMappingMetadata {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata";
  federationId: string;
}

export interface DeleteGroupMappingRequest {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest";
  /** Federation the group mapping deletion is requested */
  federationId: string;
}

export interface DeleteGroupMappingMetadata {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata";
  federationId: string;
}

/** Request for updating group mapping configuration */
export interface UpdateGroupMappingItemsRequest {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest";
  /** Federation the group mapping update is requested */
  federationId: string;
  /** A collection of mapping items to add or remove (ignores update_fields). */
  groupMappingItemDeltas: GroupMappingItemDelta[];
}

/** Message describes the user's request to change (add or remove) a single group mapping. */
export interface GroupMappingItemDelta {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta";
  item?: GroupMappingItem | undefined;
  action: GroupMappingItemDelta_Action;
}

export enum GroupMappingItemDelta_Action {
  ACTION_UNSPECIFIED = 0,
  /** ADD - Group mapping item is to be added */
  ADD = 1,
  /** REMOVE - Group mapping item is to be removed */
  REMOVE = 2,
  UNRECOGNIZED = -1,
}

export function groupMappingItemDelta_ActionFromJSON(object: any): GroupMappingItemDelta_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return GroupMappingItemDelta_Action.ACTION_UNSPECIFIED;
    case 1:
    case "ADD":
      return GroupMappingItemDelta_Action.ADD;
    case 2:
    case "REMOVE":
      return GroupMappingItemDelta_Action.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GroupMappingItemDelta_Action.UNRECOGNIZED;
  }
}

export function groupMappingItemDelta_ActionToJSON(object: GroupMappingItemDelta_Action): string {
  switch (object) {
    case GroupMappingItemDelta_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case GroupMappingItemDelta_Action.ADD:
      return "ADD";
    case GroupMappingItemDelta_Action.REMOVE:
      return "REMOVE";
    case GroupMappingItemDelta_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface UpdateGroupMappingItemsMetadata {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata";
  federationId: string;
}

export interface UpdateGroupMappingItemsResponse {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse";
  /** Effective changes that were applied */
  groupMappingItemDeltas: GroupMappingItemDelta[];
}

export interface ListGroupMappingItemsRequest {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest";
  federationId: string;
  pageSize: number;
  pageToken: string;
  filter: string;
}

export interface ListGroupMappingItemsResponse {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse";
  groupMappingItems: GroupMappingItem[];
  nextPageToken: string;
}

function createBaseGetGroupMappingRequest(): GetGroupMappingRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest", federationId: "" };
}

export const GetGroupMappingRequest = {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest" as const,

  encode(message: GetGroupMappingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupMappingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMappingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupMappingRequest {
    return {
      $type: GetGroupMappingRequest.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
    };
  },

  toJSON(message: GetGroupMappingRequest): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupMappingRequest>, I>>(base?: I): GetGroupMappingRequest {
    return GetGroupMappingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGroupMappingRequest>, I>>(object: I): GetGroupMappingRequest {
    const message = createBaseGetGroupMappingRequest();
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetGroupMappingRequest.$type, GetGroupMappingRequest);

function createBaseGetGroupMappingResponse(): GetGroupMappingResponse {
  return { $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse", groupMapping: undefined };
}

export const GetGroupMappingResponse = {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse" as const,

  encode(message: GetGroupMappingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupMapping !== undefined) {
      GroupMapping.encode(message.groupMapping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupMappingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMappingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupMapping = GroupMapping.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupMappingResponse {
    return {
      $type: GetGroupMappingResponse.$type,
      groupMapping: isSet(object.groupMapping) ? GroupMapping.fromJSON(object.groupMapping) : undefined,
    };
  },

  toJSON(message: GetGroupMappingResponse): unknown {
    const obj: any = {};
    if (message.groupMapping !== undefined) {
      obj.groupMapping = GroupMapping.toJSON(message.groupMapping);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupMappingResponse>, I>>(base?: I): GetGroupMappingResponse {
    return GetGroupMappingResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGroupMappingResponse>, I>>(object: I): GetGroupMappingResponse {
    const message = createBaseGetGroupMappingResponse();
    message.groupMapping = (object.groupMapping !== undefined && object.groupMapping !== null)
      ? GroupMapping.fromPartial(object.groupMapping)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetGroupMappingResponse.$type, GetGroupMappingResponse);

function createBaseCreateGroupMappingRequest(): CreateGroupMappingRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest", federationId: "", enabled: false };
}

export const CreateGroupMappingRequest = {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest" as const,

  encode(message: CreateGroupMappingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupMappingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupMappingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupMappingRequest {
    return {
      $type: CreateGroupMappingRequest.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
    };
  },

  toJSON(message: CreateGroupMappingRequest): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupMappingRequest>, I>>(base?: I): CreateGroupMappingRequest {
    return CreateGroupMappingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroupMappingRequest>, I>>(object: I): CreateGroupMappingRequest {
    const message = createBaseCreateGroupMappingRequest();
    message.federationId = object.federationId ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateGroupMappingRequest.$type, CreateGroupMappingRequest);

function createBaseCreateGroupMappingMetadata(): CreateGroupMappingMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata", federationId: "" };
}

export const CreateGroupMappingMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata" as const,

  encode(message: CreateGroupMappingMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupMappingMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupMappingMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupMappingMetadata {
    return {
      $type: CreateGroupMappingMetadata.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
    };
  },

  toJSON(message: CreateGroupMappingMetadata): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupMappingMetadata>, I>>(base?: I): CreateGroupMappingMetadata {
    return CreateGroupMappingMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroupMappingMetadata>, I>>(object: I): CreateGroupMappingMetadata {
    const message = createBaseCreateGroupMappingMetadata();
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateGroupMappingMetadata.$type, CreateGroupMappingMetadata);

function createBaseUpdateGroupMappingRequest(): UpdateGroupMappingRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest",
    federationId: "",
    updateMask: undefined,
    enabled: false,
  };
}

export const UpdateGroupMappingRequest = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest" as const,

  encode(message: UpdateGroupMappingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMappingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupMappingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingRequest {
    return {
      $type: UpdateGroupMappingRequest.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
    };
  },

  toJSON(message: UpdateGroupMappingRequest): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupMappingRequest>, I>>(base?: I): UpdateGroupMappingRequest {
    return UpdateGroupMappingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingRequest>, I>>(object: I): UpdateGroupMappingRequest {
    const message = createBaseUpdateGroupMappingRequest();
    message.federationId = object.federationId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateGroupMappingRequest.$type, UpdateGroupMappingRequest);

function createBaseUpdateGroupMappingMetadata(): UpdateGroupMappingMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata", federationId: "" };
}

export const UpdateGroupMappingMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata" as const,

  encode(message: UpdateGroupMappingMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMappingMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupMappingMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingMetadata {
    return {
      $type: UpdateGroupMappingMetadata.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
    };
  },

  toJSON(message: UpdateGroupMappingMetadata): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupMappingMetadata>, I>>(base?: I): UpdateGroupMappingMetadata {
    return UpdateGroupMappingMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingMetadata>, I>>(object: I): UpdateGroupMappingMetadata {
    const message = createBaseUpdateGroupMappingMetadata();
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateGroupMappingMetadata.$type, UpdateGroupMappingMetadata);

function createBaseDeleteGroupMappingRequest(): DeleteGroupMappingRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest", federationId: "" };
}

export const DeleteGroupMappingRequest = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest" as const,

  encode(message: DeleteGroupMappingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupMappingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupMappingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupMappingRequest {
    return {
      $type: DeleteGroupMappingRequest.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
    };
  },

  toJSON(message: DeleteGroupMappingRequest): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupMappingRequest>, I>>(base?: I): DeleteGroupMappingRequest {
    return DeleteGroupMappingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGroupMappingRequest>, I>>(object: I): DeleteGroupMappingRequest {
    const message = createBaseDeleteGroupMappingRequest();
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteGroupMappingRequest.$type, DeleteGroupMappingRequest);

function createBaseDeleteGroupMappingMetadata(): DeleteGroupMappingMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata", federationId: "" };
}

export const DeleteGroupMappingMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata" as const,

  encode(message: DeleteGroupMappingMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupMappingMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupMappingMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupMappingMetadata {
    return {
      $type: DeleteGroupMappingMetadata.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
    };
  },

  toJSON(message: DeleteGroupMappingMetadata): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupMappingMetadata>, I>>(base?: I): DeleteGroupMappingMetadata {
    return DeleteGroupMappingMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGroupMappingMetadata>, I>>(object: I): DeleteGroupMappingMetadata {
    const message = createBaseDeleteGroupMappingMetadata();
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteGroupMappingMetadata.$type, DeleteGroupMappingMetadata);

function createBaseUpdateGroupMappingItemsRequest(): UpdateGroupMappingItemsRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest",
    federationId: "",
    groupMappingItemDeltas: [],
  };
}

export const UpdateGroupMappingItemsRequest = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest" as const,

  encode(message: UpdateGroupMappingItemsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    for (const v of message.groupMappingItemDeltas) {
      GroupMappingItemDelta.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMappingItemsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupMappingItemsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.groupMappingItemDeltas.push(GroupMappingItemDelta.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingItemsRequest {
    return {
      $type: UpdateGroupMappingItemsRequest.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
      groupMappingItemDeltas: globalThis.Array.isArray(object?.groupMappingItemDeltas)
        ? object.groupMappingItemDeltas.map((e: any) => GroupMappingItemDelta.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateGroupMappingItemsRequest): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    if (message.groupMappingItemDeltas?.length) {
      obj.groupMappingItemDeltas = message.groupMappingItemDeltas.map((e) => GroupMappingItemDelta.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupMappingItemsRequest>, I>>(base?: I): UpdateGroupMappingItemsRequest {
    return UpdateGroupMappingItemsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingItemsRequest>, I>>(
    object: I,
  ): UpdateGroupMappingItemsRequest {
    const message = createBaseUpdateGroupMappingItemsRequest();
    message.federationId = object.federationId ?? "";
    message.groupMappingItemDeltas = object.groupMappingItemDeltas?.map((e) => GroupMappingItemDelta.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(UpdateGroupMappingItemsRequest.$type, UpdateGroupMappingItemsRequest);

function createBaseGroupMappingItemDelta(): GroupMappingItemDelta {
  return { $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta", item: undefined, action: 0 };
}

export const GroupMappingItemDelta = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta" as const,

  encode(message: GroupMappingItemDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.item !== undefined) {
      GroupMappingItem.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMappingItemDelta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMappingItemDelta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.item = GroupMappingItem.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupMappingItemDelta {
    return {
      $type: GroupMappingItemDelta.$type,
      item: isSet(object.item) ? GroupMappingItem.fromJSON(object.item) : undefined,
      action: isSet(object.action) ? groupMappingItemDelta_ActionFromJSON(object.action) : 0,
    };
  },

  toJSON(message: GroupMappingItemDelta): unknown {
    const obj: any = {};
    if (message.item !== undefined) {
      obj.item = GroupMappingItem.toJSON(message.item);
    }
    if (message.action !== 0) {
      obj.action = groupMappingItemDelta_ActionToJSON(message.action);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupMappingItemDelta>, I>>(base?: I): GroupMappingItemDelta {
    return GroupMappingItemDelta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupMappingItemDelta>, I>>(object: I): GroupMappingItemDelta {
    const message = createBaseGroupMappingItemDelta();
    message.item = (object.item !== undefined && object.item !== null)
      ? GroupMappingItem.fromPartial(object.item)
      : undefined;
    message.action = object.action ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GroupMappingItemDelta.$type, GroupMappingItemDelta);

function createBaseUpdateGroupMappingItemsMetadata(): UpdateGroupMappingItemsMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata", federationId: "" };
}

export const UpdateGroupMappingItemsMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata" as const,

  encode(message: UpdateGroupMappingItemsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMappingItemsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupMappingItemsMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingItemsMetadata {
    return {
      $type: UpdateGroupMappingItemsMetadata.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
    };
  },

  toJSON(message: UpdateGroupMappingItemsMetadata): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupMappingItemsMetadata>, I>>(base?: I): UpdateGroupMappingItemsMetadata {
    return UpdateGroupMappingItemsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingItemsMetadata>, I>>(
    object: I,
  ): UpdateGroupMappingItemsMetadata {
    const message = createBaseUpdateGroupMappingItemsMetadata();
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateGroupMappingItemsMetadata.$type, UpdateGroupMappingItemsMetadata);

function createBaseUpdateGroupMappingItemsResponse(): UpdateGroupMappingItemsResponse {
  return { $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse", groupMappingItemDeltas: [] };
}

export const UpdateGroupMappingItemsResponse = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse" as const,

  encode(message: UpdateGroupMappingItemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groupMappingItemDeltas) {
      GroupMappingItemDelta.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMappingItemsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupMappingItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.groupMappingItemDeltas.push(GroupMappingItemDelta.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingItemsResponse {
    return {
      $type: UpdateGroupMappingItemsResponse.$type,
      groupMappingItemDeltas: globalThis.Array.isArray(object?.groupMappingItemDeltas)
        ? object.groupMappingItemDeltas.map((e: any) => GroupMappingItemDelta.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateGroupMappingItemsResponse): unknown {
    const obj: any = {};
    if (message.groupMappingItemDeltas?.length) {
      obj.groupMappingItemDeltas = message.groupMappingItemDeltas.map((e) => GroupMappingItemDelta.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupMappingItemsResponse>, I>>(base?: I): UpdateGroupMappingItemsResponse {
    return UpdateGroupMappingItemsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingItemsResponse>, I>>(
    object: I,
  ): UpdateGroupMappingItemsResponse {
    const message = createBaseUpdateGroupMappingItemsResponse();
    message.groupMappingItemDeltas = object.groupMappingItemDeltas?.map((e) => GroupMappingItemDelta.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(UpdateGroupMappingItemsResponse.$type, UpdateGroupMappingItemsResponse);

function createBaseListGroupMappingItemsRequest(): ListGroupMappingItemsRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest",
    federationId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListGroupMappingItemsRequest = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest" as const,

  encode(message: ListGroupMappingItemsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupMappingItemsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupMappingItemsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.federationId = reader.string();
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

  fromJSON(object: any): ListGroupMappingItemsRequest {
    return {
      $type: ListGroupMappingItemsRequest.$type,
      federationId: isSet(object.federationId) ? globalThis.String(object.federationId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListGroupMappingItemsRequest): unknown {
    const obj: any = {};
    if (message.federationId !== "") {
      obj.federationId = message.federationId;
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

  create<I extends Exact<DeepPartial<ListGroupMappingItemsRequest>, I>>(base?: I): ListGroupMappingItemsRequest {
    return ListGroupMappingItemsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupMappingItemsRequest>, I>>(object: I): ListGroupMappingItemsRequest {
    const message = createBaseListGroupMappingItemsRequest();
    message.federationId = object.federationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGroupMappingItemsRequest.$type, ListGroupMappingItemsRequest);

function createBaseListGroupMappingItemsResponse(): ListGroupMappingItemsResponse {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse",
    groupMappingItems: [],
    nextPageToken: "",
  };
}

export const ListGroupMappingItemsResponse = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse" as const,

  encode(message: ListGroupMappingItemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groupMappingItems) {
      GroupMappingItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupMappingItemsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupMappingItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupMappingItems.push(GroupMappingItem.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListGroupMappingItemsResponse {
    return {
      $type: ListGroupMappingItemsResponse.$type,
      groupMappingItems: globalThis.Array.isArray(object?.groupMappingItems)
        ? object.groupMappingItems.map((e: any) => GroupMappingItem.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListGroupMappingItemsResponse): unknown {
    const obj: any = {};
    if (message.groupMappingItems?.length) {
      obj.groupMappingItems = message.groupMappingItems.map((e) => GroupMappingItem.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupMappingItemsResponse>, I>>(base?: I): ListGroupMappingItemsResponse {
    return ListGroupMappingItemsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupMappingItemsResponse>, I>>(
    object: I,
  ): ListGroupMappingItemsResponse {
    const message = createBaseListGroupMappingItemsResponse();
    message.groupMappingItems = object.groupMappingItems?.map((e) => GroupMappingItem.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGroupMappingItemsResponse.$type, ListGroupMappingItemsResponse);

/** RPC service dedicated for federation group mapping. */
export type GroupMappingServiceService = typeof GroupMappingServiceService;
export const GroupMappingServiceService = {
  /**
   * Returns a group mapping configured for the specific federation
   * If a federation does not exist this call will return an error
   *    NOT_FOUND will be returned
   * If a federation exist, but has not ever been configured for group mapping
   *   the call FAILED_PRECONDITION will be returned.
   */
  get: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGroupMappingRequest) => Buffer.from(GetGroupMappingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGroupMappingRequest.decode(value),
    responseSerialize: (value: GetGroupMappingResponse) => Buffer.from(GetGroupMappingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetGroupMappingResponse.decode(value),
  },
  /**
   * Adds a group mapping for a federation
   * If mapping already exist, ALREADY_EXISTS will be returned
   */
  create: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGroupMappingRequest) =>
      Buffer.from(CreateGroupMappingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateGroupMappingRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates an existing group mapping for a federation
   * Errors:
   * - if federation is not found
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - enabling when already enabled
   * - disabling when disabled
   * Such parts of request will be ignored. Others will be applied.
   */
  update: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateGroupMappingRequest) =>
      Buffer.from(UpdateGroupMappingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateGroupMappingRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes a group mapping. This will remove all the mapping items
   * cascade.
   */
  delete: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteGroupMappingRequest) =>
      Buffer.from(DeleteGroupMappingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteGroupMappingRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns all the group mappings items
   *
   * Filtering is only supported by external_group_id or internal_group_id
   */
  listItems: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/ListItems",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGroupMappingItemsRequest) =>
      Buffer.from(ListGroupMappingItemsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGroupMappingItemsRequest.decode(value),
    responseSerialize: (value: ListGroupMappingItemsResponse) =>
      Buffer.from(ListGroupMappingItemsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListGroupMappingItemsResponse.decode(value),
  },
  /**
   * Updates group mapping items for a specified federation
   * Errors:
   * - if federation is not found
   * - if internal group in the mapping added does not exist
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - adding group mapping items that are already present
   * - removing group mapping items that are not present
   * Such parts of request will be ignored. Others will be applied.
   */
  updateItems: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/UpdateItems",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateGroupMappingItemsRequest) =>
      Buffer.from(UpdateGroupMappingItemsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateGroupMappingItemsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface GroupMappingServiceServer extends UntypedServiceImplementation {
  /**
   * Returns a group mapping configured for the specific federation
   * If a federation does not exist this call will return an error
   *    NOT_FOUND will be returned
   * If a federation exist, but has not ever been configured for group mapping
   *   the call FAILED_PRECONDITION will be returned.
   */
  get: handleUnaryCall<GetGroupMappingRequest, GetGroupMappingResponse>;
  /**
   * Adds a group mapping for a federation
   * If mapping already exist, ALREADY_EXISTS will be returned
   */
  create: handleUnaryCall<CreateGroupMappingRequest, Operation>;
  /**
   * Updates an existing group mapping for a federation
   * Errors:
   * - if federation is not found
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - enabling when already enabled
   * - disabling when disabled
   * Such parts of request will be ignored. Others will be applied.
   */
  update: handleUnaryCall<UpdateGroupMappingRequest, Operation>;
  /**
   * Deletes a group mapping. This will remove all the mapping items
   * cascade.
   */
  delete: handleUnaryCall<DeleteGroupMappingRequest, Operation>;
  /**
   * Returns all the group mappings items
   *
   * Filtering is only supported by external_group_id or internal_group_id
   */
  listItems: handleUnaryCall<ListGroupMappingItemsRequest, ListGroupMappingItemsResponse>;
  /**
   * Updates group mapping items for a specified federation
   * Errors:
   * - if federation is not found
   * - if internal group in the mapping added does not exist
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - adding group mapping items that are already present
   * - removing group mapping items that are not present
   * Such parts of request will be ignored. Others will be applied.
   */
  updateItems: handleUnaryCall<UpdateGroupMappingItemsRequest, Operation>;
}

export interface GroupMappingServiceClient extends Client {
  /**
   * Returns a group mapping configured for the specific federation
   * If a federation does not exist this call will return an error
   *    NOT_FOUND will be returned
   * If a federation exist, but has not ever been configured for group mapping
   *   the call FAILED_PRECONDITION will be returned.
   */
  get(
    request: GetGroupMappingRequest,
    callback: (error: ServiceError | null, response: GetGroupMappingResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetGroupMappingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetGroupMappingResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetGroupMappingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetGroupMappingResponse) => void,
  ): ClientUnaryCall;
  /**
   * Adds a group mapping for a federation
   * If mapping already exist, ALREADY_EXISTS will be returned
   */
  create(
    request: CreateGroupMappingRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateGroupMappingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateGroupMappingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates an existing group mapping for a federation
   * Errors:
   * - if federation is not found
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - enabling when already enabled
   * - disabling when disabled
   * Such parts of request will be ignored. Others will be applied.
   */
  update(
    request: UpdateGroupMappingRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateGroupMappingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateGroupMappingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Deletes a group mapping. This will remove all the mapping items
   * cascade.
   */
  delete(
    request: DeleteGroupMappingRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteGroupMappingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteGroupMappingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Returns all the group mappings items
   *
   * Filtering is only supported by external_group_id or internal_group_id
   */
  listItems(
    request: ListGroupMappingItemsRequest,
    callback: (error: ServiceError | null, response: ListGroupMappingItemsResponse) => void,
  ): ClientUnaryCall;
  listItems(
    request: ListGroupMappingItemsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListGroupMappingItemsResponse) => void,
  ): ClientUnaryCall;
  listItems(
    request: ListGroupMappingItemsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListGroupMappingItemsResponse) => void,
  ): ClientUnaryCall;
  /**
   * Updates group mapping items for a specified federation
   * Errors:
   * - if federation is not found
   * - if internal group in the mapping added does not exist
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - adding group mapping items that are already present
   * - removing group mapping items that are not present
   * Such parts of request will be ignored. Others will be applied.
   */
  updateItems(
    request: UpdateGroupMappingItemsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateItems(
    request: UpdateGroupMappingItemsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateItems(
    request: UpdateGroupMappingItemsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const GroupMappingServiceClient = makeGenericClientConstructor(
  GroupMappingServiceService,
  "yandex.cloud.organizationmanager.v1.GroupMappingService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GroupMappingServiceClient;
  service: typeof GroupMappingServiceService;
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
