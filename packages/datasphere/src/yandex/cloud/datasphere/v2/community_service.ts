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
import { Community } from "./community";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface CreateCommunityRequest {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest";
  /** Name of the community. */
  name: string;
  /** Description of the community. */
  description: string;
  /** ID of the organization where community should be created. */
  organizationId: string;
  /** ID of the billing account for the created community. Optional, billing account could be bound to community later. */
  billingAccountId: string;
  /** Labels of the community. */
  labels: { [key: string]: string };
}

export interface CreateCommunityRequest_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateCommunityMetadata {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata";
  /** ID of the community that is being created. */
  communityId: string;
}

export interface GetCommunityRequest {
  $type: "yandex.cloud.datasphere.v2.GetCommunityRequest";
  /** ID of the community. */
  communityId: string;
}

export interface UpdateCommunityRequest {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest";
  /** ID of the community. */
  communityId: string;
  /** Field mask that specifies which fields of the Community resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the community. */
  name: string;
  /** Description of the community. */
  description: string;
  /** Labels of the community. */
  labels: { [key: string]: string };
}

export interface UpdateCommunityRequest_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateCommunityMetadata {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata";
  /** ID of the community that is being updated. */
  communityId: string;
}

export interface DeleteCommunityRequest {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest";
  /** ID of the community. */
  communityId: string;
}

export interface DeleteCommunityMetadata {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata";
  /** ID of the community that is being deleted. */
  communityId: string;
}

export interface ListCommunitiesRequest {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListCommunitiesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListCommunitiesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * Community name or description pattern.
   * Only communities with names or descriptions matching specified pattern will be returned.
   */
  nameOrDescriptionPattern: string;
  /** ID of the user. Only communities owned by specified user will be returned. */
  ownedById: string;
  /** If set to true, only public communities will be returned. */
  listPublic: boolean;
  /** ID of the organization to list communities in. */
  organizationId: string;
}

export interface ListCommunitiesResponse {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse";
  /** List of communities matching filters in list communities request. */
  communities: Community[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCommunitiesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListCommunitiesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface SetCommunityAccessBindingsMetadata {
  $type: "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata";
  /** ID of the community which access bindings are set. */
  communityId: string;
}

export interface UpdateCommunityAccessBindingsMetadata {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata";
  /** ID of the community which access bindings are updated. */
  communityId: string;
}

function createBaseCreateCommunityRequest(): CreateCommunityRequest {
  return {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest",
    name: "",
    description: "",
    organizationId: "",
    billingAccountId: "",
    labels: {},
  };
}

export const CreateCommunityRequest = {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest" as const,

  encode(message: CreateCommunityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.organizationId !== "") {
      writer.uint32(26).string(message.organizationId);
    }
    if (message.billingAccountId !== "") {
      writer.uint32(34).string(message.billingAccountId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateCommunityRequest_LabelsEntry.encode({
        $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCommunityRequest();
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
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.organizationId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.billingAccountId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = CreateCommunityRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateCommunityRequest {
    return {
      $type: CreateCommunityRequest.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateCommunityRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    if (message.billingAccountId !== "") {
      obj.billingAccountId = message.billingAccountId;
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

  create<I extends Exact<DeepPartial<CreateCommunityRequest>, I>>(base?: I): CreateCommunityRequest {
    return CreateCommunityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCommunityRequest>, I>>(object: I): CreateCommunityRequest {
    const message = createBaseCreateCommunityRequest();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.organizationId = object.organizationId ?? "";
    message.billingAccountId = object.billingAccountId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(CreateCommunityRequest.$type, CreateCommunityRequest);

function createBaseCreateCommunityRequest_LabelsEntry(): CreateCommunityRequest_LabelsEntry {
  return { $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry", key: "", value: "" };
}

export const CreateCommunityRequest_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry" as const,

  encode(message: CreateCommunityRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCommunityRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCommunityRequest_LabelsEntry();
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

  fromJSON(object: any): CreateCommunityRequest_LabelsEntry {
    return {
      $type: CreateCommunityRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateCommunityRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommunityRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateCommunityRequest_LabelsEntry {
    return CreateCommunityRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCommunityRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateCommunityRequest_LabelsEntry {
    const message = createBaseCreateCommunityRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateCommunityRequest_LabelsEntry.$type, CreateCommunityRequest_LabelsEntry);

function createBaseCreateCommunityMetadata(): CreateCommunityMetadata {
  return { $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata", communityId: "" };
}

export const CreateCommunityMetadata = {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata" as const,

  encode(message: CreateCommunityMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCommunityMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCommunityMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.communityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCommunityMetadata {
    return {
      $type: CreateCommunityMetadata.$type,
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
    };
  },

  toJSON(message: CreateCommunityMetadata): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommunityMetadata>, I>>(base?: I): CreateCommunityMetadata {
    return CreateCommunityMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCommunityMetadata>, I>>(object: I): CreateCommunityMetadata {
    const message = createBaseCreateCommunityMetadata();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateCommunityMetadata.$type, CreateCommunityMetadata);

function createBaseGetCommunityRequest(): GetCommunityRequest {
  return { $type: "yandex.cloud.datasphere.v2.GetCommunityRequest", communityId: "" };
}

export const GetCommunityRequest = {
  $type: "yandex.cloud.datasphere.v2.GetCommunityRequest" as const,

  encode(message: GetCommunityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCommunityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.communityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCommunityRequest {
    return {
      $type: GetCommunityRequest.$type,
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
    };
  },

  toJSON(message: GetCommunityRequest): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunityRequest>, I>>(base?: I): GetCommunityRequest {
    return GetCommunityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCommunityRequest>, I>>(object: I): GetCommunityRequest {
    const message = createBaseGetCommunityRequest();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetCommunityRequest.$type, GetCommunityRequest);

function createBaseUpdateCommunityRequest(): UpdateCommunityRequest {
  return {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest",
    communityId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
  };
}

export const UpdateCommunityRequest = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest" as const,

  encode(message: UpdateCommunityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
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
      UpdateCommunityRequest_LabelsEntry.encode({
        $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCommunityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.communityId = reader.string();
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

          const entry5 = UpdateCommunityRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateCommunityRequest {
    return {
      $type: UpdateCommunityRequest.$type,
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
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

  toJSON(message: UpdateCommunityRequest): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
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

  create<I extends Exact<DeepPartial<UpdateCommunityRequest>, I>>(base?: I): UpdateCommunityRequest {
    return UpdateCommunityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCommunityRequest>, I>>(object: I): UpdateCommunityRequest {
    const message = createBaseUpdateCommunityRequest();
    message.communityId = object.communityId ?? "";
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

messageTypeRegistry.set(UpdateCommunityRequest.$type, UpdateCommunityRequest);

function createBaseUpdateCommunityRequest_LabelsEntry(): UpdateCommunityRequest_LabelsEntry {
  return { $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateCommunityRequest_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry" as const,

  encode(message: UpdateCommunityRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCommunityRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCommunityRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateCommunityRequest_LabelsEntry {
    return {
      $type: UpdateCommunityRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateCommunityRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCommunityRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateCommunityRequest_LabelsEntry {
    return UpdateCommunityRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCommunityRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateCommunityRequest_LabelsEntry {
    const message = createBaseUpdateCommunityRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateCommunityRequest_LabelsEntry.$type, UpdateCommunityRequest_LabelsEntry);

function createBaseUpdateCommunityMetadata(): UpdateCommunityMetadata {
  return { $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata", communityId: "" };
}

export const UpdateCommunityMetadata = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata" as const,

  encode(message: UpdateCommunityMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCommunityMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCommunityMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.communityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCommunityMetadata {
    return {
      $type: UpdateCommunityMetadata.$type,
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
    };
  },

  toJSON(message: UpdateCommunityMetadata): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCommunityMetadata>, I>>(base?: I): UpdateCommunityMetadata {
    return UpdateCommunityMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCommunityMetadata>, I>>(object: I): UpdateCommunityMetadata {
    const message = createBaseUpdateCommunityMetadata();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateCommunityMetadata.$type, UpdateCommunityMetadata);

function createBaseDeleteCommunityRequest(): DeleteCommunityRequest {
  return { $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest", communityId: "" };
}

export const DeleteCommunityRequest = {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest" as const,

  encode(message: DeleteCommunityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCommunityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.communityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteCommunityRequest {
    return {
      $type: DeleteCommunityRequest.$type,
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
    };
  },

  toJSON(message: DeleteCommunityRequest): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommunityRequest>, I>>(base?: I): DeleteCommunityRequest {
    return DeleteCommunityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteCommunityRequest>, I>>(object: I): DeleteCommunityRequest {
    const message = createBaseDeleteCommunityRequest();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteCommunityRequest.$type, DeleteCommunityRequest);

function createBaseDeleteCommunityMetadata(): DeleteCommunityMetadata {
  return { $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata", communityId: "" };
}

export const DeleteCommunityMetadata = {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata" as const,

  encode(message: DeleteCommunityMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCommunityMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCommunityMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.communityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteCommunityMetadata {
    return {
      $type: DeleteCommunityMetadata.$type,
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
    };
  },

  toJSON(message: DeleteCommunityMetadata): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommunityMetadata>, I>>(base?: I): DeleteCommunityMetadata {
    return DeleteCommunityMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteCommunityMetadata>, I>>(object: I): DeleteCommunityMetadata {
    const message = createBaseDeleteCommunityMetadata();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteCommunityMetadata.$type, DeleteCommunityMetadata);

function createBaseListCommunitiesRequest(): ListCommunitiesRequest {
  return {
    $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest",
    pageSize: 0,
    pageToken: "",
    nameOrDescriptionPattern: "",
    ownedById: "",
    listPublic: false,
    organizationId: "",
  };
}

export const ListCommunitiesRequest = {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest" as const,

  encode(message: ListCommunitiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.nameOrDescriptionPattern !== "") {
      writer.uint32(26).string(message.nameOrDescriptionPattern);
    }
    if (message.ownedById !== "") {
      writer.uint32(42).string(message.ownedById);
    }
    if (message.listPublic === true) {
      writer.uint32(48).bool(message.listPublic);
    }
    if (message.organizationId !== "") {
      writer.uint32(58).string(message.organizationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCommunitiesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCommunitiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nameOrDescriptionPattern = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ownedById = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.listPublic = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.organizationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListCommunitiesRequest {
    return {
      $type: ListCommunitiesRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      nameOrDescriptionPattern: isSet(object.nameOrDescriptionPattern)
        ? globalThis.String(object.nameOrDescriptionPattern)
        : "",
      ownedById: isSet(object.ownedById) ? globalThis.String(object.ownedById) : "",
      listPublic: isSet(object.listPublic) ? globalThis.Boolean(object.listPublic) : false,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
    };
  },

  toJSON(message: ListCommunitiesRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.nameOrDescriptionPattern !== "") {
      obj.nameOrDescriptionPattern = message.nameOrDescriptionPattern;
    }
    if (message.ownedById !== "") {
      obj.ownedById = message.ownedById;
    }
    if (message.listPublic === true) {
      obj.listPublic = message.listPublic;
    }
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCommunitiesRequest>, I>>(base?: I): ListCommunitiesRequest {
    return ListCommunitiesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCommunitiesRequest>, I>>(object: I): ListCommunitiesRequest {
    const message = createBaseListCommunitiesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.nameOrDescriptionPattern = object.nameOrDescriptionPattern ?? "";
    message.ownedById = object.ownedById ?? "";
    message.listPublic = object.listPublic ?? false;
    message.organizationId = object.organizationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCommunitiesRequest.$type, ListCommunitiesRequest);

function createBaseListCommunitiesResponse(): ListCommunitiesResponse {
  return { $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse", communities: [], nextPageToken: "" };
}

export const ListCommunitiesResponse = {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse" as const,

  encode(message: ListCommunitiesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.communities) {
      Community.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCommunitiesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCommunitiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.communities.push(Community.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListCommunitiesResponse {
    return {
      $type: ListCommunitiesResponse.$type,
      communities: globalThis.Array.isArray(object?.communities)
        ? object.communities.map((e: any) => Community.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListCommunitiesResponse): unknown {
    const obj: any = {};
    if (message.communities?.length) {
      obj.communities = message.communities.map((e) => Community.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCommunitiesResponse>, I>>(base?: I): ListCommunitiesResponse {
    return ListCommunitiesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCommunitiesResponse>, I>>(object: I): ListCommunitiesResponse {
    const message = createBaseListCommunitiesResponse();
    message.communities = object.communities?.map((e) => Community.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCommunitiesResponse.$type, ListCommunitiesResponse);

function createBaseSetCommunityAccessBindingsMetadata(): SetCommunityAccessBindingsMetadata {
  return { $type: "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata", communityId: "" };
}

export const SetCommunityAccessBindingsMetadata = {
  $type: "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata" as const,

  encode(message: SetCommunityAccessBindingsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCommunityAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCommunityAccessBindingsMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.communityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetCommunityAccessBindingsMetadata {
    return {
      $type: SetCommunityAccessBindingsMetadata.$type,
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
    };
  },

  toJSON(message: SetCommunityAccessBindingsMetadata): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetCommunityAccessBindingsMetadata>, I>>(
    base?: I,
  ): SetCommunityAccessBindingsMetadata {
    return SetCommunityAccessBindingsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetCommunityAccessBindingsMetadata>, I>>(
    object: I,
  ): SetCommunityAccessBindingsMetadata {
    const message = createBaseSetCommunityAccessBindingsMetadata();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetCommunityAccessBindingsMetadata.$type, SetCommunityAccessBindingsMetadata);

function createBaseUpdateCommunityAccessBindingsMetadata(): UpdateCommunityAccessBindingsMetadata {
  return { $type: "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata", communityId: "" };
}

export const UpdateCommunityAccessBindingsMetadata = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata" as const,

  encode(message: UpdateCommunityAccessBindingsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCommunityAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCommunityAccessBindingsMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.communityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCommunityAccessBindingsMetadata {
    return {
      $type: UpdateCommunityAccessBindingsMetadata.$type,
      communityId: isSet(object.communityId) ? globalThis.String(object.communityId) : "",
    };
  },

  toJSON(message: UpdateCommunityAccessBindingsMetadata): unknown {
    const obj: any = {};
    if (message.communityId !== "") {
      obj.communityId = message.communityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCommunityAccessBindingsMetadata>, I>>(
    base?: I,
  ): UpdateCommunityAccessBindingsMetadata {
    return UpdateCommunityAccessBindingsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCommunityAccessBindingsMetadata>, I>>(
    object: I,
  ): UpdateCommunityAccessBindingsMetadata {
    const message = createBaseUpdateCommunityAccessBindingsMetadata();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateCommunityAccessBindingsMetadata.$type, UpdateCommunityAccessBindingsMetadata);

export type CommunityServiceService = typeof CommunityServiceService;
export const CommunityServiceService = {
  /** Creates community in specified organization. */
  create: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateCommunityRequest) => Buffer.from(CreateCommunityRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateCommunityRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns community. */
  get: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCommunityRequest) => Buffer.from(GetCommunityRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCommunityRequest.decode(value),
    responseSerialize: (value: Community) => Buffer.from(Community.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Community.decode(value),
  },
  /** Updates specified community. */
  update: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateCommunityRequest) => Buffer.from(UpdateCommunityRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateCommunityRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes specified community. */
  delete: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteCommunityRequest) => Buffer.from(DeleteCommunityRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteCommunityRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List communities in specified organization. */
  list: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCommunitiesRequest) => Buffer.from(ListCommunitiesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCommunitiesRequest.decode(value),
    responseSerialize: (value: ListCommunitiesResponse) => Buffer.from(ListCommunitiesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListCommunitiesResponse.decode(value),
  },
  /** Lists access bindings for specified community. */
  listAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for specified community. */
  setAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for specified community. */
  updateAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface CommunityServiceServer extends UntypedServiceImplementation {
  /** Creates community in specified organization. */
  create: handleUnaryCall<CreateCommunityRequest, Operation>;
  /** Returns community. */
  get: handleUnaryCall<GetCommunityRequest, Community>;
  /** Updates specified community. */
  update: handleUnaryCall<UpdateCommunityRequest, Operation>;
  /** Deletes specified community. */
  delete: handleUnaryCall<DeleteCommunityRequest, Operation>;
  /** List communities in specified organization. */
  list: handleUnaryCall<ListCommunitiesRequest, ListCommunitiesResponse>;
  /** Lists access bindings for specified community. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for specified community. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for specified community. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface CommunityServiceClient extends Client {
  /** Creates community in specified organization. */
  create(
    request: CreateCommunityRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateCommunityRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateCommunityRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns community. */
  get(
    request: GetCommunityRequest,
    callback: (error: ServiceError | null, response: Community) => void,
  ): ClientUnaryCall;
  get(
    request: GetCommunityRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Community) => void,
  ): ClientUnaryCall;
  get(
    request: GetCommunityRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Community) => void,
  ): ClientUnaryCall;
  /** Updates specified community. */
  update(
    request: UpdateCommunityRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateCommunityRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateCommunityRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes specified community. */
  delete(
    request: DeleteCommunityRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteCommunityRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteCommunityRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** List communities in specified organization. */
  list(
    request: ListCommunitiesRequest,
    callback: (error: ServiceError | null, response: ListCommunitiesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListCommunitiesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListCommunitiesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListCommunitiesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListCommunitiesResponse) => void,
  ): ClientUnaryCall;
  /** Lists access bindings for specified community. */
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
  /** Sets access bindings for specified community. */
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
  /** Updates access bindings for specified community. */
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

export const CommunityServiceClient = makeGenericClientConstructor(
  CommunityServiceService,
  "yandex.cloud.datasphere.v2.CommunityService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): CommunityServiceClient;
  service: typeof CommunityServiceService;
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
