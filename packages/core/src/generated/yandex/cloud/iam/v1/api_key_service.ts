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
import { Operation } from "../../operation/operation";
import { ApiKey } from "./api_key";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface GetApiKeyRequest {
  $type: "yandex.cloud.iam.v1.GetApiKeyRequest";
  /**
   * ID of the API key to return.
   * To get the API key ID, use a [ApiKeyService.List] request.
   */
  apiKeyId: string;
}

export interface ListApiKeysRequest {
  $type: "yandex.cloud.iam.v1.ListApiKeysRequest";
  /**
   * ID of the service account to list API keys for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListApiKeysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListApiKeysResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListApiKeysResponse {
  $type: "yandex.cloud.iam.v1.ListApiKeysResponse";
  /** List of API keys. */
  apiKeys: ApiKey[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListApiKeysRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListApiKeysRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateApiKeyRequest {
  $type: "yandex.cloud.iam.v1.CreateApiKeyRequest";
  /**
   * ID of the service account to create an API key for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /** Description of the API key. */
  description: string;
}

export interface CreateApiKeyResponse {
  $type: "yandex.cloud.iam.v1.CreateApiKeyResponse";
  /** ApiKey resource. */
  apiKey?:
    | ApiKey
    | undefined;
  /** Secret part of the API key. This secret key you may use in the requests for authentication. */
  secret: string;
}

export interface UpdateApiKeyRequest {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyRequest";
  /**
   * ID of the ApiKey resource to update.
   * To get the API key ID, use a [ApiKeyService.List] request.
   */
  apiKeyId: string;
  /** Field mask that specifies which fields of the ApiKey resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Description of the API key. */
  description: string;
}

export interface UpdateApiKeyMetadata {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyMetadata";
  /** ID of the ApiKey resource that is being updated. */
  apiKeyId: string;
}

export interface DeleteApiKeyRequest {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyRequest";
  /**
   * ID of the API key to delete.
   * To get the API key ID, use a [ApiKeyService.List] request.
   */
  apiKeyId: string;
}

export interface DeleteApiKeyMetadata {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyMetadata";
  /** ID of the API key that is being deleted. */
  apiKeyId: string;
}

export interface ListApiKeyOperationsRequest {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsRequest";
  /** ID of the key to list operations for. */
  apiKeyId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListApiKeyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListApiKeyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListApiKeyOperationsResponse {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsResponse";
  /** List of operations for the specified API key. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListApiKeyOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListApiKeyOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetApiKeyRequest(): GetApiKeyRequest {
  return { $type: "yandex.cloud.iam.v1.GetApiKeyRequest", apiKeyId: "" };
}

export const GetApiKeyRequest = {
  $type: "yandex.cloud.iam.v1.GetApiKeyRequest" as const,

  encode(message: GetApiKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetApiKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetApiKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiKeyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetApiKeyRequest {
    return {
      $type: GetApiKeyRequest.$type,
      apiKeyId: isSet(object.apiKeyId) ? globalThis.String(object.apiKeyId) : "",
    };
  },

  toJSON(message: GetApiKeyRequest): unknown {
    const obj: any = {};
    if (message.apiKeyId !== "") {
      obj.apiKeyId = message.apiKeyId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetApiKeyRequest>): GetApiKeyRequest {
    return GetApiKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetApiKeyRequest>): GetApiKeyRequest {
    const message = createBaseGetApiKeyRequest();
    message.apiKeyId = object.apiKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetApiKeyRequest.$type, GetApiKeyRequest);

function createBaseListApiKeysRequest(): ListApiKeysRequest {
  return { $type: "yandex.cloud.iam.v1.ListApiKeysRequest", serviceAccountId: "", pageSize: 0, pageToken: "" };
}

export const ListApiKeysRequest = {
  $type: "yandex.cloud.iam.v1.ListApiKeysRequest" as const,

  encode(message: ListApiKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiKeysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListApiKeysRequest();
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

  fromJSON(object: any): ListApiKeysRequest {
    return {
      $type: ListApiKeysRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListApiKeysRequest): unknown {
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

  create(base?: DeepPartial<ListApiKeysRequest>): ListApiKeysRequest {
    return ListApiKeysRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListApiKeysRequest>): ListApiKeysRequest {
    const message = createBaseListApiKeysRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiKeysRequest.$type, ListApiKeysRequest);

function createBaseListApiKeysResponse(): ListApiKeysResponse {
  return { $type: "yandex.cloud.iam.v1.ListApiKeysResponse", apiKeys: [], nextPageToken: "" };
}

export const ListApiKeysResponse = {
  $type: "yandex.cloud.iam.v1.ListApiKeysResponse" as const,

  encode(message: ListApiKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.apiKeys) {
      ApiKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiKeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListApiKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiKeys.push(ApiKey.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListApiKeysResponse {
    return {
      $type: ListApiKeysResponse.$type,
      apiKeys: globalThis.Array.isArray(object?.apiKeys) ? object.apiKeys.map((e: any) => ApiKey.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListApiKeysResponse): unknown {
    const obj: any = {};
    if (message.apiKeys?.length) {
      obj.apiKeys = message.apiKeys.map((e) => ApiKey.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListApiKeysResponse>): ListApiKeysResponse {
    return ListApiKeysResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListApiKeysResponse>): ListApiKeysResponse {
    const message = createBaseListApiKeysResponse();
    message.apiKeys = object.apiKeys?.map((e) => ApiKey.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiKeysResponse.$type, ListApiKeysResponse);

function createBaseCreateApiKeyRequest(): CreateApiKeyRequest {
  return { $type: "yandex.cloud.iam.v1.CreateApiKeyRequest", serviceAccountId: "", description: "" };
}

export const CreateApiKeyRequest = {
  $type: "yandex.cloud.iam.v1.CreateApiKeyRequest" as const,

  encode(message: CreateApiKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateApiKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateApiKeyRequest();
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

  fromJSON(object: any): CreateApiKeyRequest {
    return {
      $type: CreateApiKeyRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: CreateApiKeyRequest): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateApiKeyRequest>): CreateApiKeyRequest {
    return CreateApiKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateApiKeyRequest>): CreateApiKeyRequest {
    const message = createBaseCreateApiKeyRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateApiKeyRequest.$type, CreateApiKeyRequest);

function createBaseCreateApiKeyResponse(): CreateApiKeyResponse {
  return { $type: "yandex.cloud.iam.v1.CreateApiKeyResponse", apiKey: undefined, secret: "" };
}

export const CreateApiKeyResponse = {
  $type: "yandex.cloud.iam.v1.CreateApiKeyResponse" as const,

  encode(message: CreateApiKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.secret !== "") {
      writer.uint32(18).string(message.secret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateApiKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateApiKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiKey = ApiKey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.secret = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateApiKeyResponse {
    return {
      $type: CreateApiKeyResponse.$type,
      apiKey: isSet(object.apiKey) ? ApiKey.fromJSON(object.apiKey) : undefined,
      secret: isSet(object.secret) ? globalThis.String(object.secret) : "",
    };
  },

  toJSON(message: CreateApiKeyResponse): unknown {
    const obj: any = {};
    if (message.apiKey !== undefined) {
      obj.apiKey = ApiKey.toJSON(message.apiKey);
    }
    if (message.secret !== "") {
      obj.secret = message.secret;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateApiKeyResponse>): CreateApiKeyResponse {
    return CreateApiKeyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateApiKeyResponse>): CreateApiKeyResponse {
    const message = createBaseCreateApiKeyResponse();
    message.apiKey = (object.apiKey !== undefined && object.apiKey !== null)
      ? ApiKey.fromPartial(object.apiKey)
      : undefined;
    message.secret = object.secret ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateApiKeyResponse.$type, CreateApiKeyResponse);

function createBaseUpdateApiKeyRequest(): UpdateApiKeyRequest {
  return { $type: "yandex.cloud.iam.v1.UpdateApiKeyRequest", apiKeyId: "", updateMask: undefined, description: "" };
}

export const UpdateApiKeyRequest = {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyRequest" as const,

  encode(message: UpdateApiKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApiKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateApiKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiKeyId = reader.string();
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

  fromJSON(object: any): UpdateApiKeyRequest {
    return {
      $type: UpdateApiKeyRequest.$type,
      apiKeyId: isSet(object.apiKeyId) ? globalThis.String(object.apiKeyId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: UpdateApiKeyRequest): unknown {
    const obj: any = {};
    if (message.apiKeyId !== "") {
      obj.apiKeyId = message.apiKeyId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateApiKeyRequest>): UpdateApiKeyRequest {
    return UpdateApiKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateApiKeyRequest>): UpdateApiKeyRequest {
    const message = createBaseUpdateApiKeyRequest();
    message.apiKeyId = object.apiKeyId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateApiKeyRequest.$type, UpdateApiKeyRequest);

function createBaseUpdateApiKeyMetadata(): UpdateApiKeyMetadata {
  return { $type: "yandex.cloud.iam.v1.UpdateApiKeyMetadata", apiKeyId: "" };
}

export const UpdateApiKeyMetadata = {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyMetadata" as const,

  encode(message: UpdateApiKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApiKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateApiKeyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiKeyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateApiKeyMetadata {
    return {
      $type: UpdateApiKeyMetadata.$type,
      apiKeyId: isSet(object.apiKeyId) ? globalThis.String(object.apiKeyId) : "",
    };
  },

  toJSON(message: UpdateApiKeyMetadata): unknown {
    const obj: any = {};
    if (message.apiKeyId !== "") {
      obj.apiKeyId = message.apiKeyId;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateApiKeyMetadata>): UpdateApiKeyMetadata {
    return UpdateApiKeyMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateApiKeyMetadata>): UpdateApiKeyMetadata {
    const message = createBaseUpdateApiKeyMetadata();
    message.apiKeyId = object.apiKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateApiKeyMetadata.$type, UpdateApiKeyMetadata);

function createBaseDeleteApiKeyRequest(): DeleteApiKeyRequest {
  return { $type: "yandex.cloud.iam.v1.DeleteApiKeyRequest", apiKeyId: "" };
}

export const DeleteApiKeyRequest = {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyRequest" as const,

  encode(message: DeleteApiKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApiKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteApiKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiKeyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteApiKeyRequest {
    return {
      $type: DeleteApiKeyRequest.$type,
      apiKeyId: isSet(object.apiKeyId) ? globalThis.String(object.apiKeyId) : "",
    };
  },

  toJSON(message: DeleteApiKeyRequest): unknown {
    const obj: any = {};
    if (message.apiKeyId !== "") {
      obj.apiKeyId = message.apiKeyId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteApiKeyRequest>): DeleteApiKeyRequest {
    return DeleteApiKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteApiKeyRequest>): DeleteApiKeyRequest {
    const message = createBaseDeleteApiKeyRequest();
    message.apiKeyId = object.apiKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteApiKeyRequest.$type, DeleteApiKeyRequest);

function createBaseDeleteApiKeyMetadata(): DeleteApiKeyMetadata {
  return { $type: "yandex.cloud.iam.v1.DeleteApiKeyMetadata", apiKeyId: "" };
}

export const DeleteApiKeyMetadata = {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyMetadata" as const,

  encode(message: DeleteApiKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApiKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteApiKeyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiKeyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteApiKeyMetadata {
    return {
      $type: DeleteApiKeyMetadata.$type,
      apiKeyId: isSet(object.apiKeyId) ? globalThis.String(object.apiKeyId) : "",
    };
  },

  toJSON(message: DeleteApiKeyMetadata): unknown {
    const obj: any = {};
    if (message.apiKeyId !== "") {
      obj.apiKeyId = message.apiKeyId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteApiKeyMetadata>): DeleteApiKeyMetadata {
    return DeleteApiKeyMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteApiKeyMetadata>): DeleteApiKeyMetadata {
    const message = createBaseDeleteApiKeyMetadata();
    message.apiKeyId = object.apiKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteApiKeyMetadata.$type, DeleteApiKeyMetadata);

function createBaseListApiKeyOperationsRequest(): ListApiKeyOperationsRequest {
  return { $type: "yandex.cloud.iam.v1.ListApiKeyOperationsRequest", apiKeyId: "", pageSize: 0, pageToken: "" };
}

export const ListApiKeyOperationsRequest = {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsRequest" as const,

  encode(message: ListApiKeyOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiKeyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListApiKeyOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiKeyId = reader.string();
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

  fromJSON(object: any): ListApiKeyOperationsRequest {
    return {
      $type: ListApiKeyOperationsRequest.$type,
      apiKeyId: isSet(object.apiKeyId) ? globalThis.String(object.apiKeyId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListApiKeyOperationsRequest): unknown {
    const obj: any = {};
    if (message.apiKeyId !== "") {
      obj.apiKeyId = message.apiKeyId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListApiKeyOperationsRequest>): ListApiKeyOperationsRequest {
    return ListApiKeyOperationsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListApiKeyOperationsRequest>): ListApiKeyOperationsRequest {
    const message = createBaseListApiKeyOperationsRequest();
    message.apiKeyId = object.apiKeyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiKeyOperationsRequest.$type, ListApiKeyOperationsRequest);

function createBaseListApiKeyOperationsResponse(): ListApiKeyOperationsResponse {
  return { $type: "yandex.cloud.iam.v1.ListApiKeyOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListApiKeyOperationsResponse = {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsResponse" as const,

  encode(message: ListApiKeyOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiKeyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListApiKeyOperationsResponse();
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

  fromJSON(object: any): ListApiKeyOperationsResponse {
    return {
      $type: ListApiKeyOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListApiKeyOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListApiKeyOperationsResponse>): ListApiKeyOperationsResponse {
    return ListApiKeyOperationsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListApiKeyOperationsResponse>): ListApiKeyOperationsResponse {
    const message = createBaseListApiKeyOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiKeyOperationsResponse.$type, ListApiKeyOperationsResponse);

/** A set of methods for managing API keys. */
export type ApiKeyServiceService = typeof ApiKeyServiceService;
export const ApiKeyServiceService = {
  /** Retrieves the list of API keys for the specified service account. */
  list: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListApiKeysRequest) => Buffer.from(ListApiKeysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListApiKeysRequest.decode(value),
    responseSerialize: (value: ListApiKeysResponse) => Buffer.from(ListApiKeysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListApiKeysResponse.decode(value),
  },
  /**
   * Returns the specified API key.
   *
   * To get the list of available API keys, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetApiKeyRequest) => Buffer.from(GetApiKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetApiKeyRequest.decode(value),
    responseSerialize: (value: ApiKey) => Buffer.from(ApiKey.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ApiKey.decode(value),
  },
  /** Creates an API key for the specified service account. */
  create: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateApiKeyRequest) => Buffer.from(CreateApiKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateApiKeyRequest.decode(value),
    responseSerialize: (value: CreateApiKeyResponse) => Buffer.from(CreateApiKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateApiKeyResponse.decode(value),
  },
  /** Updates the specified API key. */
  update: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateApiKeyRequest) => Buffer.from(UpdateApiKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateApiKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified API key. */
  delete: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteApiKeyRequest) => Buffer.from(DeleteApiKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteApiKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of operations for the specified API key. */
  listOperations: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListApiKeyOperationsRequest) =>
      Buffer.from(ListApiKeyOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListApiKeyOperationsRequest.decode(value),
    responseSerialize: (value: ListApiKeyOperationsResponse) =>
      Buffer.from(ListApiKeyOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListApiKeyOperationsResponse.decode(value),
  },
} as const;

export interface ApiKeyServiceServer extends UntypedServiceImplementation {
  /** Retrieves the list of API keys for the specified service account. */
  list: handleUnaryCall<ListApiKeysRequest, ListApiKeysResponse>;
  /**
   * Returns the specified API key.
   *
   * To get the list of available API keys, make a [List] request.
   */
  get: handleUnaryCall<GetApiKeyRequest, ApiKey>;
  /** Creates an API key for the specified service account. */
  create: handleUnaryCall<CreateApiKeyRequest, CreateApiKeyResponse>;
  /** Updates the specified API key. */
  update: handleUnaryCall<UpdateApiKeyRequest, Operation>;
  /** Deletes the specified API key. */
  delete: handleUnaryCall<DeleteApiKeyRequest, Operation>;
  /** Retrieves the list of operations for the specified API key. */
  listOperations: handleUnaryCall<ListApiKeyOperationsRequest, ListApiKeyOperationsResponse>;
}

export interface ApiKeyServiceClient extends Client {
  /** Retrieves the list of API keys for the specified service account. */
  list(
    request: ListApiKeysRequest,
    callback: (error: ServiceError | null, response: ListApiKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListApiKeysRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListApiKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListApiKeysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListApiKeysResponse) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified API key.
   *
   * To get the list of available API keys, make a [List] request.
   */
  get(request: GetApiKeyRequest, callback: (error: ServiceError | null, response: ApiKey) => void): ClientUnaryCall;
  get(
    request: GetApiKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ApiKey) => void,
  ): ClientUnaryCall;
  get(
    request: GetApiKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ApiKey) => void,
  ): ClientUnaryCall;
  /** Creates an API key for the specified service account. */
  create(
    request: CreateApiKeyRequest,
    callback: (error: ServiceError | null, response: CreateApiKeyResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateApiKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateApiKeyResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateApiKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateApiKeyResponse) => void,
  ): ClientUnaryCall;
  /** Updates the specified API key. */
  update(
    request: UpdateApiKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateApiKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateApiKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified API key. */
  delete(
    request: DeleteApiKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteApiKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteApiKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of operations for the specified API key. */
  listOperations(
    request: ListApiKeyOperationsRequest,
    callback: (error: ServiceError | null, response: ListApiKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListApiKeyOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListApiKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListApiKeyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListApiKeyOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const ApiKeyServiceClient = makeGenericClientConstructor(
  ApiKeyServiceService,
  "yandex.cloud.iam.v1.ApiKeyService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ApiKeyServiceClient;
  service: typeof ApiKeyServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
