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
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Operation } from "../../../operation/operation";
import { AccessKey } from "./access_key";

export const protobufPackage = "yandex.cloud.iam.v1.awscompatibility";

export interface GetAccessKeyRequest {
  $type: "yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest";
  /**
   * ID of the AccessKey resource to return.
   * To get the access key ID, use a [AccessKeyService.List] request.
   */
  accessKeyId: string;
}

export interface ListAccessKeysRequest {
  $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest";
  /**
   * ID of the service account to list access keys for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListAccessKeysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListAccessKeysResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListAccessKeysResponse {
  $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse";
  /** List of access keys. */
  accessKeys: AccessKey[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListAccessKeysRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListAccessKeysRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateAccessKeyRequest {
  $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest";
  /**
   * ID of the service account to create an access key for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /** Description of the access key. */
  description: string;
}

export interface CreateAccessKeyResponse {
  $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse";
  /** AccessKey resource. */
  accessKey?:
    | AccessKey
    | undefined;
  /**
   * Secret access key.
   * The key is AWS compatible.
   */
  secret: string;
}

export interface UpdateAccessKeyRequest {
  $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest";
  /**
   * ID of the AccessKey resource to update.
   * To get the access key ID, use a [AccessKeyService.List] request.
   */
  accessKeyId: string;
  /** Field mask that specifies which fields of the Accesskey resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Description of the access key. */
  description: string;
}

export interface UpdateAccessKeyMetadata {
  $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyMetadata";
  /** ID of the AccessKey resource that is being updated. */
  accessKeyId: string;
}

export interface DeleteAccessKeyRequest {
  $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest";
  /**
   * ID of the access key to delete.
   * To get the access key ID, use a [AccessKeyService.List] request.
   */
  accessKeyId: string;
}

export interface DeleteAccessKeyMetadata {
  $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyMetadata";
  /** ID of the access key that is being deleted. */
  accessKeyId: string;
}

export interface ListAccessKeyOperationsRequest {
  $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest";
  /** ID of the key to list operations for. */
  accessKeyId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListAccessKeyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListAccessKeyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListAccessKeyOperationsResponse {
  $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse";
  /** List of operations for the specified access key. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListAccessKeyOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListAccessKeyOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetAccessKeyRequest(): GetAccessKeyRequest {
  return { $type: "yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest", accessKeyId: "" };
}

export const GetAccessKeyRequest = {
  $type: "yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest" as const,

  encode(message: GetAccessKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccessKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccessKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAccessKeyRequest {
    return {
      $type: GetAccessKeyRequest.$type,
      accessKeyId: isSet(object.accessKeyId) ? globalThis.String(object.accessKeyId) : "",
    };
  },

  toJSON(message: GetAccessKeyRequest): unknown {
    const obj: any = {};
    if (message.accessKeyId !== "") {
      obj.accessKeyId = message.accessKeyId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetAccessKeyRequest>): GetAccessKeyRequest {
    return GetAccessKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAccessKeyRequest>): GetAccessKeyRequest {
    const message = createBaseGetAccessKeyRequest();
    message.accessKeyId = object.accessKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetAccessKeyRequest.$type, GetAccessKeyRequest);

function createBaseListAccessKeysRequest(): ListAccessKeysRequest {
  return {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest",
    serviceAccountId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListAccessKeysRequest = {
  $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest" as const,

  encode(message: ListAccessKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessKeysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccessKeysRequest();
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

  fromJSON(object: any): ListAccessKeysRequest {
    return {
      $type: ListAccessKeysRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListAccessKeysRequest): unknown {
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

  create(base?: DeepPartial<ListAccessKeysRequest>): ListAccessKeysRequest {
    return ListAccessKeysRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAccessKeysRequest>): ListAccessKeysRequest {
    const message = createBaseListAccessKeysRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAccessKeysRequest.$type, ListAccessKeysRequest);

function createBaseListAccessKeysResponse(): ListAccessKeysResponse {
  return { $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse", accessKeys: [], nextPageToken: "" };
}

export const ListAccessKeysResponse = {
  $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse" as const,

  encode(message: ListAccessKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accessKeys) {
      AccessKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessKeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccessKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeys.push(AccessKey.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListAccessKeysResponse {
    return {
      $type: ListAccessKeysResponse.$type,
      accessKeys: globalThis.Array.isArray(object?.accessKeys)
        ? object.accessKeys.map((e: any) => AccessKey.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListAccessKeysResponse): unknown {
    const obj: any = {};
    if (message.accessKeys?.length) {
      obj.accessKeys = message.accessKeys.map((e) => AccessKey.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListAccessKeysResponse>): ListAccessKeysResponse {
    return ListAccessKeysResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAccessKeysResponse>): ListAccessKeysResponse {
    const message = createBaseListAccessKeysResponse();
    message.accessKeys = object.accessKeys?.map((e) => AccessKey.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAccessKeysResponse.$type, ListAccessKeysResponse);

function createBaseCreateAccessKeyRequest(): CreateAccessKeyRequest {
  return {
    $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest",
    serviceAccountId: "",
    description: "",
  };
}

export const CreateAccessKeyRequest = {
  $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest" as const,

  encode(message: CreateAccessKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccessKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAccessKeyRequest();
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

  fromJSON(object: any): CreateAccessKeyRequest {
    return {
      $type: CreateAccessKeyRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: CreateAccessKeyRequest): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateAccessKeyRequest>): CreateAccessKeyRequest {
    return CreateAccessKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateAccessKeyRequest>): CreateAccessKeyRequest {
    const message = createBaseCreateAccessKeyRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateAccessKeyRequest.$type, CreateAccessKeyRequest);

function createBaseCreateAccessKeyResponse(): CreateAccessKeyResponse {
  return { $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse", accessKey: undefined, secret: "" };
}

export const CreateAccessKeyResponse = {
  $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse" as const,

  encode(message: CreateAccessKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKey !== undefined) {
      AccessKey.encode(message.accessKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.secret !== "") {
      writer.uint32(18).string(message.secret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccessKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAccessKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKey = AccessKey.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateAccessKeyResponse {
    return {
      $type: CreateAccessKeyResponse.$type,
      accessKey: isSet(object.accessKey) ? AccessKey.fromJSON(object.accessKey) : undefined,
      secret: isSet(object.secret) ? globalThis.String(object.secret) : "",
    };
  },

  toJSON(message: CreateAccessKeyResponse): unknown {
    const obj: any = {};
    if (message.accessKey !== undefined) {
      obj.accessKey = AccessKey.toJSON(message.accessKey);
    }
    if (message.secret !== "") {
      obj.secret = message.secret;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateAccessKeyResponse>): CreateAccessKeyResponse {
    return CreateAccessKeyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateAccessKeyResponse>): CreateAccessKeyResponse {
    const message = createBaseCreateAccessKeyResponse();
    message.accessKey = (object.accessKey !== undefined && object.accessKey !== null)
      ? AccessKey.fromPartial(object.accessKey)
      : undefined;
    message.secret = object.secret ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateAccessKeyResponse.$type, CreateAccessKeyResponse);

function createBaseUpdateAccessKeyRequest(): UpdateAccessKeyRequest {
  return {
    $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest",
    accessKeyId: "",
    updateMask: undefined,
    description: "",
  };
}

export const UpdateAccessKeyRequest = {
  $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest" as const,

  encode(message: UpdateAccessKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccessKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeyId = reader.string();
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

  fromJSON(object: any): UpdateAccessKeyRequest {
    return {
      $type: UpdateAccessKeyRequest.$type,
      accessKeyId: isSet(object.accessKeyId) ? globalThis.String(object.accessKeyId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: UpdateAccessKeyRequest): unknown {
    const obj: any = {};
    if (message.accessKeyId !== "") {
      obj.accessKeyId = message.accessKeyId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAccessKeyRequest>): UpdateAccessKeyRequest {
    return UpdateAccessKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAccessKeyRequest>): UpdateAccessKeyRequest {
    const message = createBaseUpdateAccessKeyRequest();
    message.accessKeyId = object.accessKeyId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateAccessKeyRequest.$type, UpdateAccessKeyRequest);

function createBaseUpdateAccessKeyMetadata(): UpdateAccessKeyMetadata {
  return { $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyMetadata", accessKeyId: "" };
}

export const UpdateAccessKeyMetadata = {
  $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyMetadata" as const,

  encode(message: UpdateAccessKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccessKeyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAccessKeyMetadata {
    return {
      $type: UpdateAccessKeyMetadata.$type,
      accessKeyId: isSet(object.accessKeyId) ? globalThis.String(object.accessKeyId) : "",
    };
  },

  toJSON(message: UpdateAccessKeyMetadata): unknown {
    const obj: any = {};
    if (message.accessKeyId !== "") {
      obj.accessKeyId = message.accessKeyId;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAccessKeyMetadata>): UpdateAccessKeyMetadata {
    return UpdateAccessKeyMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAccessKeyMetadata>): UpdateAccessKeyMetadata {
    const message = createBaseUpdateAccessKeyMetadata();
    message.accessKeyId = object.accessKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateAccessKeyMetadata.$type, UpdateAccessKeyMetadata);

function createBaseDeleteAccessKeyRequest(): DeleteAccessKeyRequest {
  return { $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest", accessKeyId: "" };
}

export const DeleteAccessKeyRequest = {
  $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest" as const,

  encode(message: DeleteAccessKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAccessKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAccessKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAccessKeyRequest {
    return {
      $type: DeleteAccessKeyRequest.$type,
      accessKeyId: isSet(object.accessKeyId) ? globalThis.String(object.accessKeyId) : "",
    };
  },

  toJSON(message: DeleteAccessKeyRequest): unknown {
    const obj: any = {};
    if (message.accessKeyId !== "") {
      obj.accessKeyId = message.accessKeyId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteAccessKeyRequest>): DeleteAccessKeyRequest {
    return DeleteAccessKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteAccessKeyRequest>): DeleteAccessKeyRequest {
    const message = createBaseDeleteAccessKeyRequest();
    message.accessKeyId = object.accessKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteAccessKeyRequest.$type, DeleteAccessKeyRequest);

function createBaseDeleteAccessKeyMetadata(): DeleteAccessKeyMetadata {
  return { $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyMetadata", accessKeyId: "" };
}

export const DeleteAccessKeyMetadata = {
  $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyMetadata" as const,

  encode(message: DeleteAccessKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAccessKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAccessKeyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAccessKeyMetadata {
    return {
      $type: DeleteAccessKeyMetadata.$type,
      accessKeyId: isSet(object.accessKeyId) ? globalThis.String(object.accessKeyId) : "",
    };
  },

  toJSON(message: DeleteAccessKeyMetadata): unknown {
    const obj: any = {};
    if (message.accessKeyId !== "") {
      obj.accessKeyId = message.accessKeyId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteAccessKeyMetadata>): DeleteAccessKeyMetadata {
    return DeleteAccessKeyMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteAccessKeyMetadata>): DeleteAccessKeyMetadata {
    const message = createBaseDeleteAccessKeyMetadata();
    message.accessKeyId = object.accessKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteAccessKeyMetadata.$type, DeleteAccessKeyMetadata);

function createBaseListAccessKeyOperationsRequest(): ListAccessKeyOperationsRequest {
  return {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest",
    accessKeyId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListAccessKeyOperationsRequest = {
  $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest" as const,

  encode(message: ListAccessKeyOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessKeyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccessKeyOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeyId = reader.string();
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

  fromJSON(object: any): ListAccessKeyOperationsRequest {
    return {
      $type: ListAccessKeyOperationsRequest.$type,
      accessKeyId: isSet(object.accessKeyId) ? globalThis.String(object.accessKeyId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListAccessKeyOperationsRequest): unknown {
    const obj: any = {};
    if (message.accessKeyId !== "") {
      obj.accessKeyId = message.accessKeyId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListAccessKeyOperationsRequest>): ListAccessKeyOperationsRequest {
    return ListAccessKeyOperationsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAccessKeyOperationsRequest>): ListAccessKeyOperationsRequest {
    const message = createBaseListAccessKeyOperationsRequest();
    message.accessKeyId = object.accessKeyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAccessKeyOperationsRequest.$type, ListAccessKeyOperationsRequest);

function createBaseListAccessKeyOperationsResponse(): ListAccessKeyOperationsResponse {
  return {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListAccessKeyOperationsResponse = {
  $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse" as const,

  encode(message: ListAccessKeyOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessKeyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccessKeyOperationsResponse();
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

  fromJSON(object: any): ListAccessKeyOperationsResponse {
    return {
      $type: ListAccessKeyOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListAccessKeyOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListAccessKeyOperationsResponse>): ListAccessKeyOperationsResponse {
    return ListAccessKeyOperationsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAccessKeyOperationsResponse>): ListAccessKeyOperationsResponse {
    const message = createBaseListAccessKeyOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAccessKeyOperationsResponse.$type, ListAccessKeyOperationsResponse);

/** A set of methods for managing access keys. */
export type AccessKeyServiceService = typeof AccessKeyServiceService;
export const AccessKeyServiceService = {
  /** Retrieves the list of access keys for the specified service account. */
  list: {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessKeysRequest) => Buffer.from(ListAccessKeysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessKeysRequest.decode(value),
    responseSerialize: (value: ListAccessKeysResponse) => Buffer.from(ListAccessKeysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessKeysResponse.decode(value),
  },
  /**
   * Returns the specified access key.
   *
   * To get the list of available access keys, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAccessKeyRequest) => Buffer.from(GetAccessKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAccessKeyRequest.decode(value),
    responseSerialize: (value: AccessKey) => Buffer.from(AccessKey.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AccessKey.decode(value),
  },
  /** Creates an access key for the specified service account. */
  create: {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateAccessKeyRequest) => Buffer.from(CreateAccessKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateAccessKeyRequest.decode(value),
    responseSerialize: (value: CreateAccessKeyResponse) => Buffer.from(CreateAccessKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateAccessKeyResponse.decode(value),
  },
  /** Updates the specified access key. */
  update: {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessKeyRequest) => Buffer.from(UpdateAccessKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified access key. */
  delete: {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAccessKeyRequest) => Buffer.from(DeleteAccessKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteAccessKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of operations for the specified access key. */
  listOperations: {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessKeyOperationsRequest) =>
      Buffer.from(ListAccessKeyOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessKeyOperationsRequest.decode(value),
    responseSerialize: (value: ListAccessKeyOperationsResponse) =>
      Buffer.from(ListAccessKeyOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessKeyOperationsResponse.decode(value),
  },
} as const;

export interface AccessKeyServiceServer extends UntypedServiceImplementation {
  /** Retrieves the list of access keys for the specified service account. */
  list: handleUnaryCall<ListAccessKeysRequest, ListAccessKeysResponse>;
  /**
   * Returns the specified access key.
   *
   * To get the list of available access keys, make a [List] request.
   */
  get: handleUnaryCall<GetAccessKeyRequest, AccessKey>;
  /** Creates an access key for the specified service account. */
  create: handleUnaryCall<CreateAccessKeyRequest, CreateAccessKeyResponse>;
  /** Updates the specified access key. */
  update: handleUnaryCall<UpdateAccessKeyRequest, Operation>;
  /** Deletes the specified access key. */
  delete: handleUnaryCall<DeleteAccessKeyRequest, Operation>;
  /** Retrieves the list of operations for the specified access key. */
  listOperations: handleUnaryCall<ListAccessKeyOperationsRequest, ListAccessKeyOperationsResponse>;
}

export interface AccessKeyServiceClient extends Client {
  /** Retrieves the list of access keys for the specified service account. */
  list(
    request: ListAccessKeysRequest,
    callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListAccessKeysRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListAccessKeysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified access key.
   *
   * To get the list of available access keys, make a [List] request.
   */
  get(
    request: GetAccessKeyRequest,
    callback: (error: ServiceError | null, response: AccessKey) => void,
  ): ClientUnaryCall;
  get(
    request: GetAccessKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AccessKey) => void,
  ): ClientUnaryCall;
  get(
    request: GetAccessKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AccessKey) => void,
  ): ClientUnaryCall;
  /** Creates an access key for the specified service account. */
  create(
    request: CreateAccessKeyRequest,
    callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAccessKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAccessKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void,
  ): ClientUnaryCall;
  /** Updates the specified access key. */
  update(
    request: UpdateAccessKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateAccessKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateAccessKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified access key. */
  delete(
    request: DeleteAccessKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteAccessKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteAccessKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of operations for the specified access key. */
  listOperations(
    request: ListAccessKeyOperationsRequest,
    callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListAccessKeyOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListAccessKeyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const AccessKeyServiceClient = makeGenericClientConstructor(
  AccessKeyServiceService,
  "yandex.cloud.iam.v1.awscompatibility.AccessKeyService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AccessKeyServiceClient;
  service: typeof AccessKeyServiceService;
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
