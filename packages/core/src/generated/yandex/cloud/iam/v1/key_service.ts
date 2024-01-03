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
import { Key, Key_Algorithm, key_AlgorithmFromJSON, key_AlgorithmToJSON } from "./key";

export const protobufPackage = "yandex.cloud.iam.v1";

export enum KeyFormat {
  /** PEM_FILE - Privacy-Enhanced Mail (PEM) format. Default value. */
  PEM_FILE = 0,
  UNRECOGNIZED = -1,
}

export function keyFormatFromJSON(object: any): KeyFormat {
  switch (object) {
    case 0:
    case "PEM_FILE":
      return KeyFormat.PEM_FILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyFormat.UNRECOGNIZED;
  }
}

export function keyFormatToJSON(object: KeyFormat): string {
  switch (object) {
    case KeyFormat.PEM_FILE:
      return "PEM_FILE";
    case KeyFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetKeyRequest {
  $type: "yandex.cloud.iam.v1.GetKeyRequest";
  /**
   * ID of the Key resource to return.
   * To get the ID use a [KeyService.List] request.
   */
  keyId: string;
  /** Output format of the key. */
  format: KeyFormat;
}

export interface ListKeysRequest {
  $type: "yandex.cloud.iam.v1.ListKeysRequest";
  /** Output format of the key. */
  format: KeyFormat;
  /**
   * ID of the service account to list key pairs for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListKeysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListKeysResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListKeysResponse {
  $type: "yandex.cloud.iam.v1.ListKeysResponse";
  /** List of Key resources. */
  keys: Key[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListKeysRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListKeysRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateKeyRequest {
  $type: "yandex.cloud.iam.v1.CreateKeyRequest";
  /**
   * ID of the service account to create a key pair for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /** Description of the key pair. */
  description: string;
  /** Output format of the key. */
  format: KeyFormat;
  /** An algorithm used to generate a key pair of the Key resource. */
  keyAlgorithm: Key_Algorithm;
}

export interface CreateKeyResponse {
  $type: "yandex.cloud.iam.v1.CreateKeyResponse";
  /** Key resource. */
  key?:
    | Key
    | undefined;
  /**
   * A private key of the Key resource.
   * This key must be stored securely.
   */
  privateKey: string;
}

export interface UpdateKeyRequest {
  $type: "yandex.cloud.iam.v1.UpdateKeyRequest";
  /**
   * ID of the Key resource to update.
   * To get key pair ID, use a [KeyService.List] request.
   */
  keyId: string;
  /** Field mask that specifies which fields of the Key resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Description of the key pair. */
  description: string;
}

export interface UpdateKeyMetadata {
  $type: "yandex.cloud.iam.v1.UpdateKeyMetadata";
  /** ID of the Key resource that is being updated. */
  keyId: string;
}

export interface DeleteKeyRequest {
  $type: "yandex.cloud.iam.v1.DeleteKeyRequest";
  /**
   * ID of the key to delete.
   * To get key ID use a [KeyService.List] request.
   */
  keyId: string;
}

export interface DeleteKeyMetadata {
  $type: "yandex.cloud.iam.v1.DeleteKeyMetadata";
  /** ID of the key that is being deleted. */
  keyId: string;
}

export interface ListKeyOperationsRequest {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest";
  /** ID of the key to list operations for. */
  keyId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListKeyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListKeyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListKeyOperationsResponse {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse";
  /** List of operations for the specified key. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListKeyOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListKeyOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetKeyRequest(): GetKeyRequest {
  return { $type: "yandex.cloud.iam.v1.GetKeyRequest", keyId: "", format: 0 };
}

export const GetKeyRequest = {
  $type: "yandex.cloud.iam.v1.GetKeyRequest" as const,

  encode(message: GetKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.format !== 0) {
      writer.uint32(16).int32(message.format);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetKeyRequest {
    return {
      $type: GetKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      format: isSet(object.format) ? keyFormatFromJSON(object.format) : 0,
    };
  },

  toJSON(message: GetKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.format !== 0) {
      obj.format = keyFormatToJSON(message.format);
    }
    return obj;
  },

  create(base?: DeepPartial<GetKeyRequest>): GetKeyRequest {
    return GetKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetKeyRequest>): GetKeyRequest {
    const message = createBaseGetKeyRequest();
    message.keyId = object.keyId ?? "";
    message.format = object.format ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetKeyRequest.$type, GetKeyRequest);

function createBaseListKeysRequest(): ListKeysRequest {
  return { $type: "yandex.cloud.iam.v1.ListKeysRequest", format: 0, serviceAccountId: "", pageSize: 0, pageToken: "" };
}

export const ListKeysRequest = {
  $type: "yandex.cloud.iam.v1.ListKeysRequest" as const,

  encode(message: ListKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.format !== 0) {
      writer.uint32(8).int32(message.format);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(18).string(message.serviceAccountId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): ListKeysRequest {
    return {
      $type: ListKeysRequest.$type,
      format: isSet(object.format) ? keyFormatFromJSON(object.format) : 0,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListKeysRequest): unknown {
    const obj: any = {};
    if (message.format !== 0) {
      obj.format = keyFormatToJSON(message.format);
    }
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

  create(base?: DeepPartial<ListKeysRequest>): ListKeysRequest {
    return ListKeysRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListKeysRequest>): ListKeysRequest {
    const message = createBaseListKeysRequest();
    message.format = object.format ?? 0;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListKeysRequest.$type, ListKeysRequest);

function createBaseListKeysResponse(): ListKeysResponse {
  return { $type: "yandex.cloud.iam.v1.ListKeysResponse", keys: [], nextPageToken: "" };
}

export const ListKeysResponse = {
  $type: "yandex.cloud.iam.v1.ListKeysResponse" as const,

  encode(message: ListKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      Key.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keys.push(Key.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListKeysResponse {
    return {
      $type: ListKeysResponse.$type,
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => Key.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListKeysResponse): unknown {
    const obj: any = {};
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => Key.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListKeysResponse>): ListKeysResponse {
    return ListKeysResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListKeysResponse>): ListKeysResponse {
    const message = createBaseListKeysResponse();
    message.keys = object.keys?.map((e) => Key.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListKeysResponse.$type, ListKeysResponse);

function createBaseCreateKeyRequest(): CreateKeyRequest {
  return {
    $type: "yandex.cloud.iam.v1.CreateKeyRequest",
    serviceAccountId: "",
    description: "",
    format: 0,
    keyAlgorithm: 0,
  };
}

export const CreateKeyRequest = {
  $type: "yandex.cloud.iam.v1.CreateKeyRequest" as const,

  encode(message: CreateKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.format !== 0) {
      writer.uint32(24).int32(message.format);
    }
    if (message.keyAlgorithm !== 0) {
      writer.uint32(32).int32(message.keyAlgorithm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateKeyRequest();
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.keyAlgorithm = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateKeyRequest {
    return {
      $type: CreateKeyRequest.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      format: isSet(object.format) ? keyFormatFromJSON(object.format) : 0,
      keyAlgorithm: isSet(object.keyAlgorithm) ? key_AlgorithmFromJSON(object.keyAlgorithm) : 0,
    };
  },

  toJSON(message: CreateKeyRequest): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.format !== 0) {
      obj.format = keyFormatToJSON(message.format);
    }
    if (message.keyAlgorithm !== 0) {
      obj.keyAlgorithm = key_AlgorithmToJSON(message.keyAlgorithm);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateKeyRequest>): CreateKeyRequest {
    return CreateKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateKeyRequest>): CreateKeyRequest {
    const message = createBaseCreateKeyRequest();
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.description = object.description ?? "";
    message.format = object.format ?? 0;
    message.keyAlgorithm = object.keyAlgorithm ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateKeyRequest.$type, CreateKeyRequest);

function createBaseCreateKeyResponse(): CreateKeyResponse {
  return { $type: "yandex.cloud.iam.v1.CreateKeyResponse", key: undefined, privateKey: "" };
}

export const CreateKeyResponse = {
  $type: "yandex.cloud.iam.v1.CreateKeyResponse" as const,

  encode(message: CreateKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.privateKey !== "") {
      writer.uint32(18).string(message.privateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = Key.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.privateKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateKeyResponse {
    return {
      $type: CreateKeyResponse.$type,
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      privateKey: isSet(object.privateKey) ? globalThis.String(object.privateKey) : "",
    };
  },

  toJSON(message: CreateKeyResponse): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = Key.toJSON(message.key);
    }
    if (message.privateKey !== "") {
      obj.privateKey = message.privateKey;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateKeyResponse>): CreateKeyResponse {
    return CreateKeyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateKeyResponse>): CreateKeyResponse {
    const message = createBaseCreateKeyResponse();
    message.key = (object.key !== undefined && object.key !== null) ? Key.fromPartial(object.key) : undefined;
    message.privateKey = object.privateKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateKeyResponse.$type, CreateKeyResponse);

function createBaseUpdateKeyRequest(): UpdateKeyRequest {
  return { $type: "yandex.cloud.iam.v1.UpdateKeyRequest", keyId: "", updateMask: undefined, description: "" };
}

export const UpdateKeyRequest = {
  $type: "yandex.cloud.iam.v1.UpdateKeyRequest" as const,

  encode(message: UpdateKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
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

  fromJSON(object: any): UpdateKeyRequest {
    return {
      $type: UpdateKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: UpdateKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateKeyRequest>): UpdateKeyRequest {
    return UpdateKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateKeyRequest>): UpdateKeyRequest {
    const message = createBaseUpdateKeyRequest();
    message.keyId = object.keyId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateKeyRequest.$type, UpdateKeyRequest);

function createBaseUpdateKeyMetadata(): UpdateKeyMetadata {
  return { $type: "yandex.cloud.iam.v1.UpdateKeyMetadata", keyId: "" };
}

export const UpdateKeyMetadata = {
  $type: "yandex.cloud.iam.v1.UpdateKeyMetadata" as const,

  encode(message: UpdateKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateKeyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateKeyMetadata {
    return { $type: UpdateKeyMetadata.$type, keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "" };
  },

  toJSON(message: UpdateKeyMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateKeyMetadata>): UpdateKeyMetadata {
    return UpdateKeyMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateKeyMetadata>): UpdateKeyMetadata {
    const message = createBaseUpdateKeyMetadata();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateKeyMetadata.$type, UpdateKeyMetadata);

function createBaseDeleteKeyRequest(): DeleteKeyRequest {
  return { $type: "yandex.cloud.iam.v1.DeleteKeyRequest", keyId: "" };
}

export const DeleteKeyRequest = {
  $type: "yandex.cloud.iam.v1.DeleteKeyRequest" as const,

  encode(message: DeleteKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteKeyRequest {
    return { $type: DeleteKeyRequest.$type, keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "" };
  },

  toJSON(message: DeleteKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteKeyRequest>): DeleteKeyRequest {
    return DeleteKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteKeyRequest>): DeleteKeyRequest {
    const message = createBaseDeleteKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteKeyRequest.$type, DeleteKeyRequest);

function createBaseDeleteKeyMetadata(): DeleteKeyMetadata {
  return { $type: "yandex.cloud.iam.v1.DeleteKeyMetadata", keyId: "" };
}

export const DeleteKeyMetadata = {
  $type: "yandex.cloud.iam.v1.DeleteKeyMetadata" as const,

  encode(message: DeleteKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteKeyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteKeyMetadata {
    return { $type: DeleteKeyMetadata.$type, keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "" };
  },

  toJSON(message: DeleteKeyMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteKeyMetadata>): DeleteKeyMetadata {
    return DeleteKeyMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteKeyMetadata>): DeleteKeyMetadata {
    const message = createBaseDeleteKeyMetadata();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteKeyMetadata.$type, DeleteKeyMetadata);

function createBaseListKeyOperationsRequest(): ListKeyOperationsRequest {
  return { $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest", keyId: "", pageSize: 0, pageToken: "" };
}

export const ListKeyOperationsRequest = {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest" as const,

  encode(message: ListKeyOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeyOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
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

  fromJSON(object: any): ListKeyOperationsRequest {
    return {
      $type: ListKeyOperationsRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListKeyOperationsRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListKeyOperationsRequest>): ListKeyOperationsRequest {
    return ListKeyOperationsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListKeyOperationsRequest>): ListKeyOperationsRequest {
    const message = createBaseListKeyOperationsRequest();
    message.keyId = object.keyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListKeyOperationsRequest.$type, ListKeyOperationsRequest);

function createBaseListKeyOperationsResponse(): ListKeyOperationsResponse {
  return { $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListKeyOperationsResponse = {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse" as const,

  encode(message: ListKeyOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeyOperationsResponse();
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

  fromJSON(object: any): ListKeyOperationsResponse {
    return {
      $type: ListKeyOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListKeyOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListKeyOperationsResponse>): ListKeyOperationsResponse {
    return ListKeyOperationsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListKeyOperationsResponse>): ListKeyOperationsResponse {
    const message = createBaseListKeyOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListKeyOperationsResponse.$type, ListKeyOperationsResponse);

/** A set of methods for managing Key resources. */
export type KeyServiceService = typeof KeyServiceService;
export const KeyServiceService = {
  /**
   * Returns the specified Key resource.
   *
   * To get the list of available Key resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iam.v1.KeyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetKeyRequest) => Buffer.from(GetKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetKeyRequest.decode(value),
    responseSerialize: (value: Key) => Buffer.from(Key.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Key.decode(value),
  },
  /** Retrieves the list of Key resources for the specified service account. */
  list: {
    path: "/yandex.cloud.iam.v1.KeyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListKeysRequest) => Buffer.from(ListKeysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListKeysRequest.decode(value),
    responseSerialize: (value: ListKeysResponse) => Buffer.from(ListKeysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListKeysResponse.decode(value),
  },
  /** Creates a key pair for the specified service account. */
  create: {
    path: "/yandex.cloud.iam.v1.KeyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateKeyRequest) => Buffer.from(CreateKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateKeyRequest.decode(value),
    responseSerialize: (value: CreateKeyResponse) => Buffer.from(CreateKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateKeyResponse.decode(value),
  },
  /** Updates the specified key pair. */
  update: {
    path: "/yandex.cloud.iam.v1.KeyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateKeyRequest) => Buffer.from(UpdateKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified key pair. */
  delete: {
    path: "/yandex.cloud.iam.v1.KeyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteKeyRequest) => Buffer.from(DeleteKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified key. */
  listOperations: {
    path: "/yandex.cloud.iam.v1.KeyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListKeyOperationsRequest) => Buffer.from(ListKeyOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListKeyOperationsRequest.decode(value),
    responseSerialize: (value: ListKeyOperationsResponse) =>
      Buffer.from(ListKeyOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListKeyOperationsResponse.decode(value),
  },
} as const;

export interface KeyServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Key resource.
   *
   * To get the list of available Key resources, make a [List] request.
   */
  get: handleUnaryCall<GetKeyRequest, Key>;
  /** Retrieves the list of Key resources for the specified service account. */
  list: handleUnaryCall<ListKeysRequest, ListKeysResponse>;
  /** Creates a key pair for the specified service account. */
  create: handleUnaryCall<CreateKeyRequest, CreateKeyResponse>;
  /** Updates the specified key pair. */
  update: handleUnaryCall<UpdateKeyRequest, Operation>;
  /** Deletes the specified key pair. */
  delete: handleUnaryCall<DeleteKeyRequest, Operation>;
  /** Lists operations for the specified key. */
  listOperations: handleUnaryCall<ListKeyOperationsRequest, ListKeyOperationsResponse>;
}

export interface KeyServiceClient extends Client {
  /**
   * Returns the specified Key resource.
   *
   * To get the list of available Key resources, make a [List] request.
   */
  get(request: GetKeyRequest, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
  get(
    request: GetKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Key) => void,
  ): ClientUnaryCall;
  get(
    request: GetKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Key) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Key resources for the specified service account. */
  list(
    request: ListKeysRequest,
    callback: (error: ServiceError | null, response: ListKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListKeysRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListKeysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListKeysResponse) => void,
  ): ClientUnaryCall;
  /** Creates a key pair for the specified service account. */
  create(
    request: CreateKeyRequest,
    callback: (error: ServiceError | null, response: CreateKeyResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateKeyResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateKeyResponse) => void,
  ): ClientUnaryCall;
  /** Updates the specified key pair. */
  update(
    request: UpdateKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified key pair. */
  delete(
    request: DeleteKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified key. */
  listOperations(
    request: ListKeyOperationsRequest,
    callback: (error: ServiceError | null, response: ListKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListKeyOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListKeyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListKeyOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const KeyServiceClient = makeGenericClientConstructor(
  KeyServiceService,
  "yandex.cloud.iam.v1.KeyService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): KeyServiceClient;
  service: typeof KeyServiceService;
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
