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
import { Organization } from "./organization";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

export interface GetOrganizationRequest {
  $type: "yandex.cloud.organizationmanager.v1.GetOrganizationRequest";
  /**
   * ID of the Organization resource to return.
   * To get the organization ID, use a [OrganizationService.List] request.
   */
  organizationId: string;
}

export interface ListOrganizationsRequest {
  $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListOrganizationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListOrganizationsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [Organization.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListOrganizationsResponse {
  $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsResponse";
  /** List of Organization resources. */
  organizations: Organization[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListOrganizationsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListOrganizationsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateOrganizationRequest {
  $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest";
  /**
   * ID of the organization to update.
   * To get the organization ID, use a [OrganizationService.List] request.
   */
  organizationId: string;
  /** Field mask that specifies which fields of the organization are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the organization. */
  name: string;
  /** Description of the organization. */
  description: string;
  /** Display name of the organization. */
  title: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
}

export interface UpdateOrganizationRequest_LabelsEntry {
  $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateOrganizationMetadata {
  $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata";
  /** ID of the organization that is being updated. */
  organizationId: string;
}

export interface ListOrganizationOperationsRequest {
  $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest";
  /** ID of the Organization resource to list operations for. */
  organizationId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListOrganizationOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListOrganizationOperationsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListOrganizationOperationsResponse {
  $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse";
  /** List of operations for the specified organization. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListOrganizationOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListOrganizationOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetOrganizationRequest(): GetOrganizationRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.GetOrganizationRequest", organizationId: "" };
}

export const GetOrganizationRequest = {
  $type: "yandex.cloud.organizationmanager.v1.GetOrganizationRequest" as const,

  encode(message: GetOrganizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrganizationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrganizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): GetOrganizationRequest {
    return {
      $type: GetOrganizationRequest.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
    };
  },

  toJSON(message: GetOrganizationRequest): unknown {
    const obj: any = {};
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrganizationRequest>, I>>(base?: I): GetOrganizationRequest {
    return GetOrganizationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrganizationRequest>, I>>(object: I): GetOrganizationRequest {
    const message = createBaseGetOrganizationRequest();
    message.organizationId = object.organizationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetOrganizationRequest.$type, GetOrganizationRequest);

function createBaseListOrganizationsRequest(): ListOrganizationsRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsRequest",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListOrganizationsRequest = {
  $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsRequest" as const,

  encode(message: ListOrganizationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOrganizationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrganizationsRequest();
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

  fromJSON(object: any): ListOrganizationsRequest {
    return {
      $type: ListOrganizationsRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListOrganizationsRequest): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<ListOrganizationsRequest>, I>>(base?: I): ListOrganizationsRequest {
    return ListOrganizationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOrganizationsRequest>, I>>(object: I): ListOrganizationsRequest {
    const message = createBaseListOrganizationsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOrganizationsRequest.$type, ListOrganizationsRequest);

function createBaseListOrganizationsResponse(): ListOrganizationsResponse {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsResponse",
    organizations: [],
    nextPageToken: "",
  };
}

export const ListOrganizationsResponse = {
  $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsResponse" as const,

  encode(message: ListOrganizationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.organizations) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOrganizationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrganizationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organizations.push(Organization.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListOrganizationsResponse {
    return {
      $type: ListOrganizationsResponse.$type,
      organizations: globalThis.Array.isArray(object?.organizations)
        ? object.organizations.map((e: any) => Organization.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListOrganizationsResponse): unknown {
    const obj: any = {};
    if (message.organizations?.length) {
      obj.organizations = message.organizations.map((e) => Organization.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOrganizationsResponse>, I>>(base?: I): ListOrganizationsResponse {
    return ListOrganizationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOrganizationsResponse>, I>>(object: I): ListOrganizationsResponse {
    const message = createBaseListOrganizationsResponse();
    message.organizations = object.organizations?.map((e) => Organization.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOrganizationsResponse.$type, ListOrganizationsResponse);

function createBaseUpdateOrganizationRequest(): UpdateOrganizationRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest",
    organizationId: "",
    updateMask: undefined,
    name: "",
    description: "",
    title: "",
    labels: {},
  };
}

export const UpdateOrganizationRequest = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest" as const,

  encode(message: UpdateOrganizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
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
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateOrganizationRequest_LabelsEntry.encode({
        $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrganizationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOrganizationRequest();
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

          message.title = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = UpdateOrganizationRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
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

  fromJSON(object: any): UpdateOrganizationRequest {
    return {
      $type: UpdateOrganizationRequest.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpdateOrganizationRequest): unknown {
    const obj: any = {};
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
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
    if (message.title !== "") {
      obj.title = message.title;
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

  create<I extends Exact<DeepPartial<UpdateOrganizationRequest>, I>>(base?: I): UpdateOrganizationRequest {
    return UpdateOrganizationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOrganizationRequest>, I>>(object: I): UpdateOrganizationRequest {
    const message = createBaseUpdateOrganizationRequest();
    message.organizationId = object.organizationId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.title = object.title ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(UpdateOrganizationRequest.$type, UpdateOrganizationRequest);

function createBaseUpdateOrganizationRequest_LabelsEntry(): UpdateOrganizationRequest_LabelsEntry {
  return { $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateOrganizationRequest_LabelsEntry = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry" as const,

  encode(message: UpdateOrganizationRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrganizationRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOrganizationRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateOrganizationRequest_LabelsEntry {
    return {
      $type: UpdateOrganizationRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateOrganizationRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOrganizationRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateOrganizationRequest_LabelsEntry {
    return UpdateOrganizationRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOrganizationRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateOrganizationRequest_LabelsEntry {
    const message = createBaseUpdateOrganizationRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateOrganizationRequest_LabelsEntry.$type, UpdateOrganizationRequest_LabelsEntry);

function createBaseUpdateOrganizationMetadata(): UpdateOrganizationMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata", organizationId: "" };
}

export const UpdateOrganizationMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata" as const,

  encode(message: UpdateOrganizationMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrganizationMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOrganizationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): UpdateOrganizationMetadata {
    return {
      $type: UpdateOrganizationMetadata.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
    };
  },

  toJSON(message: UpdateOrganizationMetadata): unknown {
    const obj: any = {};
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOrganizationMetadata>, I>>(base?: I): UpdateOrganizationMetadata {
    return UpdateOrganizationMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOrganizationMetadata>, I>>(object: I): UpdateOrganizationMetadata {
    const message = createBaseUpdateOrganizationMetadata();
    message.organizationId = object.organizationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateOrganizationMetadata.$type, UpdateOrganizationMetadata);

function createBaseListOrganizationOperationsRequest(): ListOrganizationOperationsRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest",
    organizationId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListOrganizationOperationsRequest = {
  $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest" as const,

  encode(message: ListOrganizationOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOrganizationOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrganizationOperationsRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOrganizationOperationsRequest {
    return {
      $type: ListOrganizationOperationsRequest.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListOrganizationOperationsRequest): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOrganizationOperationsRequest>, I>>(
    base?: I,
  ): ListOrganizationOperationsRequest {
    return ListOrganizationOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOrganizationOperationsRequest>, I>>(
    object: I,
  ): ListOrganizationOperationsRequest {
    const message = createBaseListOrganizationOperationsRequest();
    message.organizationId = object.organizationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOrganizationOperationsRequest.$type, ListOrganizationOperationsRequest);

function createBaseListOrganizationOperationsResponse(): ListOrganizationOperationsResponse {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListOrganizationOperationsResponse = {
  $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse" as const,

  encode(message: ListOrganizationOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOrganizationOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrganizationOperationsResponse();
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

  fromJSON(object: any): ListOrganizationOperationsResponse {
    return {
      $type: ListOrganizationOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListOrganizationOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOrganizationOperationsResponse>, I>>(
    base?: I,
  ): ListOrganizationOperationsResponse {
    return ListOrganizationOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOrganizationOperationsResponse>, I>>(
    object: I,
  ): ListOrganizationOperationsResponse {
    const message = createBaseListOrganizationOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOrganizationOperationsResponse.$type, ListOrganizationOperationsResponse);

/** A set of methods for managing Organization resources. */
export type OrganizationServiceService = typeof OrganizationServiceService;
export const OrganizationServiceService = {
  /**
   * Returns the specified Organization resource.
   *
   * To get the list of available Organization resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOrganizationRequest) => Buffer.from(GetOrganizationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOrganizationRequest.decode(value),
    responseSerialize: (value: Organization) => Buffer.from(Organization.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Organization.decode(value),
  },
  /** Retrieves the list of Organization resources. */
  list: {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListOrganizationsRequest) => Buffer.from(ListOrganizationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListOrganizationsRequest.decode(value),
    responseSerialize: (value: ListOrganizationsResponse) =>
      Buffer.from(ListOrganizationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListOrganizationsResponse.decode(value),
  },
  /** Updates the specified organization. */
  update: {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateOrganizationRequest) =>
      Buffer.from(UpdateOrganizationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateOrganizationRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified organization. */
  listOperations: {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListOrganizationOperationsRequest) =>
      Buffer.from(ListOrganizationOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListOrganizationOperationsRequest.decode(value),
    responseSerialize: (value: ListOrganizationOperationsResponse) =>
      Buffer.from(ListOrganizationOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListOrganizationOperationsResponse.decode(value),
  },
  /** Lists access bindings for the specified organization. */
  listAccessBindings: {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified organization. */
  setAccessBindings: {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified organization. */
  updateAccessBindings: {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface OrganizationServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Organization resource.
   *
   * To get the list of available Organization resources, make a [List] request.
   */
  get: handleUnaryCall<GetOrganizationRequest, Organization>;
  /** Retrieves the list of Organization resources. */
  list: handleUnaryCall<ListOrganizationsRequest, ListOrganizationsResponse>;
  /** Updates the specified organization. */
  update: handleUnaryCall<UpdateOrganizationRequest, Operation>;
  /** Lists operations for the specified organization. */
  listOperations: handleUnaryCall<ListOrganizationOperationsRequest, ListOrganizationOperationsResponse>;
  /** Lists access bindings for the specified organization. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the specified organization. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified organization. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface OrganizationServiceClient extends Client {
  /**
   * Returns the specified Organization resource.
   *
   * To get the list of available Organization resources, make a [List] request.
   */
  get(
    request: GetOrganizationRequest,
    callback: (error: ServiceError | null, response: Organization) => void,
  ): ClientUnaryCall;
  get(
    request: GetOrganizationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Organization) => void,
  ): ClientUnaryCall;
  get(
    request: GetOrganizationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Organization) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Organization resources. */
  list(
    request: ListOrganizationsRequest,
    callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListOrganizationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListOrganizationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void,
  ): ClientUnaryCall;
  /** Updates the specified organization. */
  update(
    request: UpdateOrganizationRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateOrganizationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateOrganizationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified organization. */
  listOperations(
    request: ListOrganizationOperationsRequest,
    callback: (error: ServiceError | null, response: ListOrganizationOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListOrganizationOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListOrganizationOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListOrganizationOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListOrganizationOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists access bindings for the specified organization. */
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
  /** Sets access bindings for the specified organization. */
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
  /** Updates access bindings for the specified organization. */
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

export const OrganizationServiceClient = makeGenericClientConstructor(
  OrganizationServiceService,
  "yandex.cloud.organizationmanager.v1.OrganizationService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): OrganizationServiceClient;
  service: typeof OrganizationServiceService;
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
