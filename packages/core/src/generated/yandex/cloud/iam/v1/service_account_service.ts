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
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { messageTypeRegistry } from "../../../../typeRegistry";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../access/access";
import { Operation } from "../../operation/operation";
import { ServiceAccount } from "./service_account";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface GetServiceAccountRequest {
  $type: "yandex.cloud.iam.v1.GetServiceAccountRequest";
  /**
   * ID of the ServiceAccount resource to return.
   * To get the service account ID, use a [ServiceAccountService.List] request.
   */
  serviceAccountId: string;
}

export interface ListServiceAccountsRequest {
  $type: "yandex.cloud.iam.v1.ListServiceAccountsRequest";
  /**
   * ID of the folder to list service accounts in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListServiceAccountsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListServiceAccountsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [ServiceAccount.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListServiceAccountsResponse {
  $type: "yandex.cloud.iam.v1.ListServiceAccountsResponse";
  /** List of ServiceAccount resources. */
  serviceAccounts: ServiceAccount[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListServiceAccountsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListServiceAccountsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateServiceAccountRequest {
  $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest";
  /**
   * ID of the folder to create a service account in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the service account.
   * The name must be unique within the cloud.
   */
  name: string;
  /** Description of the service account. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
}

export interface CreateServiceAccountRequest_LabelsEntry {
  $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateServiceAccountMetadata {
  $type: "yandex.cloud.iam.v1.CreateServiceAccountMetadata";
  /** ID of the service account that is being created. */
  serviceAccountId: string;
}

export interface UpdateServiceAccountRequest {
  $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest";
  /**
   * ID of the ServiceAccount resource to update.
   * To get the service account ID, use a [ServiceAccountService.List] request.
   */
  serviceAccountId: string;
  /** Field mask that specifies which fields of the ServiceAccount resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the service account.
   * The name must be unique within the cloud.
   */
  name: string;
  /** Description of the service account. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
}

export interface UpdateServiceAccountRequest_LabelsEntry {
  $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateServiceAccountMetadata {
  $type: "yandex.cloud.iam.v1.UpdateServiceAccountMetadata";
  /** ID of the ServiceAccount resource that is being updated. */
  serviceAccountId: string;
}

export interface DeleteServiceAccountRequest {
  $type: "yandex.cloud.iam.v1.DeleteServiceAccountRequest";
  /**
   * ID of the service account to delete.
   * To get the service account ID, use a [ServiceAccountService.List] request.
   */
  serviceAccountId: string;
}

export interface DeleteServiceAccountMetadata {
  $type: "yandex.cloud.iam.v1.DeleteServiceAccountMetadata";
  /** ID of the service account that is being deleted. */
  serviceAccountId: string;
}

export interface ListServiceAccountOperationsRequest {
  $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsRequest";
  /** ID of the ServiceAccount resource to list operations for. */
  serviceAccountId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListServiceAccountOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListServiceAccountOperationsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListServiceAccountOperationsResponse {
  $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsResponse";
  /** List of operations for the specified service account. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListServiceAccountOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListServiceAccountOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetServiceAccountRequest(): GetServiceAccountRequest {
  return { $type: "yandex.cloud.iam.v1.GetServiceAccountRequest", serviceAccountId: "" };
}

export const GetServiceAccountRequest = {
  $type: "yandex.cloud.iam.v1.GetServiceAccountRequest" as const,

  encode(message: GetServiceAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetServiceAccountRequest {
    return {
      $type: GetServiceAccountRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: GetServiceAccountRequest): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetServiceAccountRequest>): GetServiceAccountRequest {
    return GetServiceAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetServiceAccountRequest>): GetServiceAccountRequest {
    const message = createBaseGetServiceAccountRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetServiceAccountRequest.$type, GetServiceAccountRequest);

function createBaseListServiceAccountsRequest(): ListServiceAccountsRequest {
  return {
    $type: "yandex.cloud.iam.v1.ListServiceAccountsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListServiceAccountsRequest = {
  $type: "yandex.cloud.iam.v1.ListServiceAccountsRequest" as const,

  encode(message: ListServiceAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceAccountsRequest();
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

  fromJSON(object: any): ListServiceAccountsRequest {
    return {
      $type: ListServiceAccountsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListServiceAccountsRequest): unknown {
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

  create(base?: DeepPartial<ListServiceAccountsRequest>): ListServiceAccountsRequest {
    return ListServiceAccountsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListServiceAccountsRequest>): ListServiceAccountsRequest {
    const message = createBaseListServiceAccountsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListServiceAccountsRequest.$type, ListServiceAccountsRequest);

function createBaseListServiceAccountsResponse(): ListServiceAccountsResponse {
  return { $type: "yandex.cloud.iam.v1.ListServiceAccountsResponse", serviceAccounts: [], nextPageToken: "" };
}

export const ListServiceAccountsResponse = {
  $type: "yandex.cloud.iam.v1.ListServiceAccountsResponse" as const,

  encode(message: ListServiceAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.serviceAccounts) {
      ServiceAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccounts.push(ServiceAccount.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListServiceAccountsResponse {
    return {
      $type: ListServiceAccountsResponse.$type,
      serviceAccounts: globalThis.Array.isArray(object?.serviceAccounts)
        ? object.serviceAccounts.map((e: any) => ServiceAccount.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListServiceAccountsResponse): unknown {
    const obj: any = {};
    if (message.serviceAccounts?.length) {
      obj.serviceAccounts = message.serviceAccounts.map((e) => ServiceAccount.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListServiceAccountsResponse>): ListServiceAccountsResponse {
    return ListServiceAccountsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListServiceAccountsResponse>): ListServiceAccountsResponse {
    const message = createBaseListServiceAccountsResponse();
    message.serviceAccounts = object.serviceAccounts?.map((e) => ServiceAccount.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListServiceAccountsResponse.$type, ListServiceAccountsResponse);

function createBaseCreateServiceAccountRequest(): CreateServiceAccountRequest {
  return {
    $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
  };
}

export const CreateServiceAccountRequest = {
  $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest" as const,

  encode(message: CreateServiceAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateServiceAccountRequest_LabelsEntry.encode({
        $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateServiceAccountRequest();
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

          const entry4 = CreateServiceAccountRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateServiceAccountRequest {
    return {
      $type: CreateServiceAccountRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
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

  toJSON(message: CreateServiceAccountRequest): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<CreateServiceAccountRequest>): CreateServiceAccountRequest {
    return CreateServiceAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateServiceAccountRequest>): CreateServiceAccountRequest {
    const message = createBaseCreateServiceAccountRequest();
    message.folderId = object.folderId ?? "";
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

messageTypeRegistry.set(CreateServiceAccountRequest.$type, CreateServiceAccountRequest);

function createBaseCreateServiceAccountRequest_LabelsEntry(): CreateServiceAccountRequest_LabelsEntry {
  return { $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry", key: "", value: "" };
}

export const CreateServiceAccountRequest_LabelsEntry = {
  $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry" as const,

  encode(message: CreateServiceAccountRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceAccountRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateServiceAccountRequest_LabelsEntry();
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

  fromJSON(object: any): CreateServiceAccountRequest_LabelsEntry {
    return {
      $type: CreateServiceAccountRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateServiceAccountRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateServiceAccountRequest_LabelsEntry>): CreateServiceAccountRequest_LabelsEntry {
    return CreateServiceAccountRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateServiceAccountRequest_LabelsEntry>): CreateServiceAccountRequest_LabelsEntry {
    const message = createBaseCreateServiceAccountRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateServiceAccountRequest_LabelsEntry.$type, CreateServiceAccountRequest_LabelsEntry);

function createBaseCreateServiceAccountMetadata(): CreateServiceAccountMetadata {
  return { $type: "yandex.cloud.iam.v1.CreateServiceAccountMetadata", serviceAccountId: "" };
}

export const CreateServiceAccountMetadata = {
  $type: "yandex.cloud.iam.v1.CreateServiceAccountMetadata" as const,

  encode(message: CreateServiceAccountMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceAccountMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateServiceAccountMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateServiceAccountMetadata {
    return {
      $type: CreateServiceAccountMetadata.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: CreateServiceAccountMetadata): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateServiceAccountMetadata>): CreateServiceAccountMetadata {
    return CreateServiceAccountMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateServiceAccountMetadata>): CreateServiceAccountMetadata {
    const message = createBaseCreateServiceAccountMetadata();
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateServiceAccountMetadata.$type, CreateServiceAccountMetadata);

function createBaseUpdateServiceAccountRequest(): UpdateServiceAccountRequest {
  return {
    $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest",
    serviceAccountId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
  };
}

export const UpdateServiceAccountRequest = {
  $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest" as const,

  encode(message: UpdateServiceAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
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
      UpdateServiceAccountRequest_LabelsEntry.encode({
        $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServiceAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateServiceAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountId = reader.string();
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

          const entry5 = UpdateServiceAccountRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateServiceAccountRequest {
    return {
      $type: UpdateServiceAccountRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
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

  toJSON(message: UpdateServiceAccountRequest): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
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

  create(base?: DeepPartial<UpdateServiceAccountRequest>): UpdateServiceAccountRequest {
    return UpdateServiceAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateServiceAccountRequest>): UpdateServiceAccountRequest {
    const message = createBaseUpdateServiceAccountRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
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

messageTypeRegistry.set(UpdateServiceAccountRequest.$type, UpdateServiceAccountRequest);

function createBaseUpdateServiceAccountRequest_LabelsEntry(): UpdateServiceAccountRequest_LabelsEntry {
  return { $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateServiceAccountRequest_LabelsEntry = {
  $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry" as const,

  encode(message: UpdateServiceAccountRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServiceAccountRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateServiceAccountRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateServiceAccountRequest_LabelsEntry {
    return {
      $type: UpdateServiceAccountRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateServiceAccountRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateServiceAccountRequest_LabelsEntry>): UpdateServiceAccountRequest_LabelsEntry {
    return UpdateServiceAccountRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateServiceAccountRequest_LabelsEntry>): UpdateServiceAccountRequest_LabelsEntry {
    const message = createBaseUpdateServiceAccountRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateServiceAccountRequest_LabelsEntry.$type, UpdateServiceAccountRequest_LabelsEntry);

function createBaseUpdateServiceAccountMetadata(): UpdateServiceAccountMetadata {
  return { $type: "yandex.cloud.iam.v1.UpdateServiceAccountMetadata", serviceAccountId: "" };
}

export const UpdateServiceAccountMetadata = {
  $type: "yandex.cloud.iam.v1.UpdateServiceAccountMetadata" as const,

  encode(message: UpdateServiceAccountMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServiceAccountMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateServiceAccountMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateServiceAccountMetadata {
    return {
      $type: UpdateServiceAccountMetadata.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: UpdateServiceAccountMetadata): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateServiceAccountMetadata>): UpdateServiceAccountMetadata {
    return UpdateServiceAccountMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateServiceAccountMetadata>): UpdateServiceAccountMetadata {
    const message = createBaseUpdateServiceAccountMetadata();
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateServiceAccountMetadata.$type, UpdateServiceAccountMetadata);

function createBaseDeleteServiceAccountRequest(): DeleteServiceAccountRequest {
  return { $type: "yandex.cloud.iam.v1.DeleteServiceAccountRequest", serviceAccountId: "" };
}

export const DeleteServiceAccountRequest = {
  $type: "yandex.cloud.iam.v1.DeleteServiceAccountRequest" as const,

  encode(message: DeleteServiceAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteServiceAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteServiceAccountRequest {
    return {
      $type: DeleteServiceAccountRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: DeleteServiceAccountRequest): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteServiceAccountRequest>): DeleteServiceAccountRequest {
    return DeleteServiceAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteServiceAccountRequest>): DeleteServiceAccountRequest {
    const message = createBaseDeleteServiceAccountRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteServiceAccountRequest.$type, DeleteServiceAccountRequest);

function createBaseDeleteServiceAccountMetadata(): DeleteServiceAccountMetadata {
  return { $type: "yandex.cloud.iam.v1.DeleteServiceAccountMetadata", serviceAccountId: "" };
}

export const DeleteServiceAccountMetadata = {
  $type: "yandex.cloud.iam.v1.DeleteServiceAccountMetadata" as const,

  encode(message: DeleteServiceAccountMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceAccountMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteServiceAccountMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteServiceAccountMetadata {
    return {
      $type: DeleteServiceAccountMetadata.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: DeleteServiceAccountMetadata): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteServiceAccountMetadata>): DeleteServiceAccountMetadata {
    return DeleteServiceAccountMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteServiceAccountMetadata>): DeleteServiceAccountMetadata {
    const message = createBaseDeleteServiceAccountMetadata();
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteServiceAccountMetadata.$type, DeleteServiceAccountMetadata);

function createBaseListServiceAccountOperationsRequest(): ListServiceAccountOperationsRequest {
  return {
    $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsRequest",
    serviceAccountId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListServiceAccountOperationsRequest = {
  $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsRequest" as const,

  encode(message: ListServiceAccountOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceAccountOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceAccountOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountId = reader.string();
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

  fromJSON(object: any): ListServiceAccountOperationsRequest {
    return {
      $type: ListServiceAccountOperationsRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListServiceAccountOperationsRequest): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListServiceAccountOperationsRequest>): ListServiceAccountOperationsRequest {
    return ListServiceAccountOperationsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListServiceAccountOperationsRequest>): ListServiceAccountOperationsRequest {
    const message = createBaseListServiceAccountOperationsRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListServiceAccountOperationsRequest.$type, ListServiceAccountOperationsRequest);

function createBaseListServiceAccountOperationsResponse(): ListServiceAccountOperationsResponse {
  return { $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListServiceAccountOperationsResponse = {
  $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsResponse" as const,

  encode(message: ListServiceAccountOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceAccountOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceAccountOperationsResponse();
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

  fromJSON(object: any): ListServiceAccountOperationsResponse {
    return {
      $type: ListServiceAccountOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListServiceAccountOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListServiceAccountOperationsResponse>): ListServiceAccountOperationsResponse {
    return ListServiceAccountOperationsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListServiceAccountOperationsResponse>): ListServiceAccountOperationsResponse {
    const message = createBaseListServiceAccountOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListServiceAccountOperationsResponse.$type, ListServiceAccountOperationsResponse);

/** A set of methods for managing ServiceAccount resources. */
export type ServiceAccountServiceService = typeof ServiceAccountServiceService;
export const ServiceAccountServiceService = {
  /**
   * Returns the specified ServiceAccount resource.
   *
   * To get the list of available ServiceAccount resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetServiceAccountRequest) => Buffer.from(GetServiceAccountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetServiceAccountRequest.decode(value),
    responseSerialize: (value: ServiceAccount) => Buffer.from(ServiceAccount.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ServiceAccount.decode(value),
  },
  /** Retrieves the list of ServiceAccount resources in the specified folder. */
  list: {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListServiceAccountsRequest) =>
      Buffer.from(ListServiceAccountsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListServiceAccountsRequest.decode(value),
    responseSerialize: (value: ListServiceAccountsResponse) =>
      Buffer.from(ListServiceAccountsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListServiceAccountsResponse.decode(value),
  },
  /** Creates a service account in the specified folder. */
  create: {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateServiceAccountRequest) =>
      Buffer.from(CreateServiceAccountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateServiceAccountRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified service account. */
  update: {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateServiceAccountRequest) =>
      Buffer.from(UpdateServiceAccountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateServiceAccountRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified service account. */
  delete: {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteServiceAccountRequest) =>
      Buffer.from(DeleteServiceAccountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteServiceAccountRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists access bindings for the specified service account. */
  listAccessBindings: {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the service account. */
  setAccessBindings: {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified service account. */
  updateAccessBindings: {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified service account. */
  listOperations: {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListServiceAccountOperationsRequest) =>
      Buffer.from(ListServiceAccountOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListServiceAccountOperationsRequest.decode(value),
    responseSerialize: (value: ListServiceAccountOperationsResponse) =>
      Buffer.from(ListServiceAccountOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListServiceAccountOperationsResponse.decode(value),
  },
} as const;

export interface ServiceAccountServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified ServiceAccount resource.
   *
   * To get the list of available ServiceAccount resources, make a [List] request.
   */
  get: handleUnaryCall<GetServiceAccountRequest, ServiceAccount>;
  /** Retrieves the list of ServiceAccount resources in the specified folder. */
  list: handleUnaryCall<ListServiceAccountsRequest, ListServiceAccountsResponse>;
  /** Creates a service account in the specified folder. */
  create: handleUnaryCall<CreateServiceAccountRequest, Operation>;
  /** Updates the specified service account. */
  update: handleUnaryCall<UpdateServiceAccountRequest, Operation>;
  /** Deletes the specified service account. */
  delete: handleUnaryCall<DeleteServiceAccountRequest, Operation>;
  /** Lists access bindings for the specified service account. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the service account. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified service account. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /** Lists operations for the specified service account. */
  listOperations: handleUnaryCall<ListServiceAccountOperationsRequest, ListServiceAccountOperationsResponse>;
}

export interface ServiceAccountServiceClient extends Client {
  /**
   * Returns the specified ServiceAccount resource.
   *
   * To get the list of available ServiceAccount resources, make a [List] request.
   */
  get(
    request: GetServiceAccountRequest,
    callback: (error: ServiceError | null, response: ServiceAccount) => void,
  ): ClientUnaryCall;
  get(
    request: GetServiceAccountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ServiceAccount) => void,
  ): ClientUnaryCall;
  get(
    request: GetServiceAccountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ServiceAccount) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of ServiceAccount resources in the specified folder. */
  list(
    request: ListServiceAccountsRequest,
    callback: (error: ServiceError | null, response: ListServiceAccountsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListServiceAccountsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListServiceAccountsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListServiceAccountsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListServiceAccountsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a service account in the specified folder. */
  create(
    request: CreateServiceAccountRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateServiceAccountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateServiceAccountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified service account. */
  update(
    request: UpdateServiceAccountRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateServiceAccountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateServiceAccountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified service account. */
  delete(
    request: DeleteServiceAccountRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteServiceAccountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteServiceAccountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists access bindings for the specified service account. */
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
  /** Sets access bindings for the service account. */
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
  /** Updates access bindings for the specified service account. */
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
  /** Lists operations for the specified service account. */
  listOperations(
    request: ListServiceAccountOperationsRequest,
    callback: (error: ServiceError | null, response: ListServiceAccountOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListServiceAccountOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListServiceAccountOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListServiceAccountOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListServiceAccountOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceAccountServiceClient = makeGenericClientConstructor(
  ServiceAccountServiceService,
  "yandex.cloud.iam.v1.ServiceAccountService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ServiceAccountServiceClient;
  service: typeof ServiceAccountServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
