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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import {
  AsymmetricSignatureAlgorithm,
  asymmetricSignatureAlgorithmFromJSON,
  asymmetricSignatureAlgorithmToJSON,
  AsymmetricSignatureKey,
  AsymmetricSignatureKey_Status,
  asymmetricSignatureKey_StatusFromJSON,
  asymmetricSignatureKey_StatusToJSON,
} from "./asymmetric_signature_key";

export const protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";

export interface CreateAsymmetricSignatureKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest";
  /** ID of the folder to create a asymmetric KMS key in. */
  folderId: string;
  /** Name of the key. */
  name: string;
  /** Description of the key. */
  description: string;
  /**
   * Custom labels for the asymmetric KMS key as `key:value` pairs. Maximum 64 per key.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   */
  labels: { [key: string]: string };
  /** Asymmetric signature algorithm. */
  signatureAlgorithm: AsymmetricSignatureAlgorithm;
  /** Flag that inhibits deletion of the symmetric KMS key */
  deletionProtection: boolean;
}

export interface CreateAsymmetricSignatureKeyRequest_LabelsEntry {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateAsymmetricSignatureKeyMetadata {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyMetadata";
  /** ID of the key being created. */
  keyId: string;
}

export interface GetAsymmetricSignatureKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.GetAsymmetricSignatureKeyRequest";
  /**
   * ID of the asymmetric KMS key to return.
   * To get the ID of an asymmetric KMS key use a [AsymmetricSignatureKeyService.List] request.
   */
  keyId: string;
}

export interface ListAsymmetricSignatureKeysRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysRequest";
  /** ID of the folder to list asymmetric KMS keys in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListAsymmetricSignatureKeysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListAsymmetricSignatureKeysResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListAsymmetricSignatureKeysResponse {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysResponse";
  /** List of asymmetric KMS keys in the specified folder. */
  keys: AsymmetricSignatureKey[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListAsymmetricSignatureKeysRequest.page_size], use
   * the [next_page_token] as the value for the [ListAsymmetricSignatureKeysRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateAsymmetricSignatureKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest";
  /**
   * ID of the asymmetric KMS key to update.
   * To get the ID of a asymmetric KMS key use a [AsymmetricSignatureKeyService.List] request.
   */
  keyId: string;
  /** Field mask that specifies which attributes of the asymmetric KMS key are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New name for the asymmetric KMS key. */
  name: string;
  /** New description for the asymmetric KMS key. */
  description: string;
  /**
   * New status for the asymmetric KMS key.
   * Using the [AsymmetricSignatureKeyService.Update] method you can only set ACTIVE or INACTIVE status.
   */
  status: AsymmetricSignatureKey_Status;
  /** Custom labels for the asymmetric KMS key as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** Flag that inhibits deletion of the asymmetric KMS key */
  deletionProtection: boolean;
}

export interface UpdateAsymmetricSignatureKeyRequest_LabelsEntry {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateAsymmetricSignatureKeyMetadata {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyMetadata";
  /** ID of the key being updated. */
  keyId: string;
}

export interface DeleteAsymmetricSignatureKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyRequest";
  /** ID of the key to be deleted. */
  keyId: string;
}

export interface DeleteAsymmetricSignatureKeyMetadata {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyMetadata";
  /** ID of the key being deleted. */
  keyId: string;
}

export interface ListAsymmetricSignatureKeyOperationsRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsRequest";
  /**
   * ID of the symmetric KMS key to get operations for.
   *
   * To get the key ID, use a [AsymmetricSignatureKeyService.List] request.
   */
  keyId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListAsymmetricSignatureKeyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListAsymmetricSignatureKeyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListAsymmetricSignatureKeyOperationsResponse {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsResponse";
  /** List of operations for the specified key. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListAsymmetricSignatureKeyOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListAsymmetricSignatureKeyOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseCreateAsymmetricSignatureKeyRequest(): CreateAsymmetricSignatureKeyRequest {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    signatureAlgorithm: 0,
    deletionProtection: false,
  };
}

export const CreateAsymmetricSignatureKeyRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest" as const,

  encode(message: CreateAsymmetricSignatureKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateAsymmetricSignatureKeyRequest_LabelsEntry.encode({
        $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.signatureAlgorithm !== 0) {
      writer.uint32(40).int32(message.signatureAlgorithm);
    }
    if (message.deletionProtection === true) {
      writer.uint32(48).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAsymmetricSignatureKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAsymmetricSignatureKeyRequest();
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

          const entry4 = CreateAsymmetricSignatureKeyRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.signatureAlgorithm = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAsymmetricSignatureKeyRequest {
    return {
      $type: CreateAsymmetricSignatureKeyRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      signatureAlgorithm: isSet(object.signatureAlgorithm)
        ? asymmetricSignatureAlgorithmFromJSON(object.signatureAlgorithm)
        : 0,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: CreateAsymmetricSignatureKeyRequest): unknown {
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
    if (message.signatureAlgorithm !== 0) {
      obj.signatureAlgorithm = asymmetricSignatureAlgorithmToJSON(message.signatureAlgorithm);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAsymmetricSignatureKeyRequest>, I>>(
    base?: I,
  ): CreateAsymmetricSignatureKeyRequest {
    return CreateAsymmetricSignatureKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAsymmetricSignatureKeyRequest>, I>>(
    object: I,
  ): CreateAsymmetricSignatureKeyRequest {
    const message = createBaseCreateAsymmetricSignatureKeyRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.signatureAlgorithm = object.signatureAlgorithm ?? 0;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateAsymmetricSignatureKeyRequest.$type, CreateAsymmetricSignatureKeyRequest);

function createBaseCreateAsymmetricSignatureKeyRequest_LabelsEntry(): CreateAsymmetricSignatureKeyRequest_LabelsEntry {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest.LabelsEntry",
    key: "",
    value: "",
  };
}

export const CreateAsymmetricSignatureKeyRequest_LabelsEntry = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest.LabelsEntry" as const,

  encode(
    message: CreateAsymmetricSignatureKeyRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAsymmetricSignatureKeyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAsymmetricSignatureKeyRequest_LabelsEntry();
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

  fromJSON(object: any): CreateAsymmetricSignatureKeyRequest_LabelsEntry {
    return {
      $type: CreateAsymmetricSignatureKeyRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateAsymmetricSignatureKeyRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAsymmetricSignatureKeyRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateAsymmetricSignatureKeyRequest_LabelsEntry {
    return CreateAsymmetricSignatureKeyRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAsymmetricSignatureKeyRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateAsymmetricSignatureKeyRequest_LabelsEntry {
    const message = createBaseCreateAsymmetricSignatureKeyRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateAsymmetricSignatureKeyRequest_LabelsEntry.$type,
  CreateAsymmetricSignatureKeyRequest_LabelsEntry,
);

function createBaseCreateAsymmetricSignatureKeyMetadata(): CreateAsymmetricSignatureKeyMetadata {
  return { $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyMetadata", keyId: "" };
}

export const CreateAsymmetricSignatureKeyMetadata = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyMetadata" as const,

  encode(message: CreateAsymmetricSignatureKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAsymmetricSignatureKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAsymmetricSignatureKeyMetadata();
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

  fromJSON(object: any): CreateAsymmetricSignatureKeyMetadata {
    return {
      $type: CreateAsymmetricSignatureKeyMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: CreateAsymmetricSignatureKeyMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAsymmetricSignatureKeyMetadata>, I>>(
    base?: I,
  ): CreateAsymmetricSignatureKeyMetadata {
    return CreateAsymmetricSignatureKeyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAsymmetricSignatureKeyMetadata>, I>>(
    object: I,
  ): CreateAsymmetricSignatureKeyMetadata {
    const message = createBaseCreateAsymmetricSignatureKeyMetadata();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateAsymmetricSignatureKeyMetadata.$type, CreateAsymmetricSignatureKeyMetadata);

function createBaseGetAsymmetricSignatureKeyRequest(): GetAsymmetricSignatureKeyRequest {
  return { $type: "yandex.cloud.kms.v1.asymmetricsignature.GetAsymmetricSignatureKeyRequest", keyId: "" };
}

export const GetAsymmetricSignatureKeyRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.GetAsymmetricSignatureKeyRequest" as const,

  encode(message: GetAsymmetricSignatureKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAsymmetricSignatureKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAsymmetricSignatureKeyRequest();
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

  fromJSON(object: any): GetAsymmetricSignatureKeyRequest {
    return {
      $type: GetAsymmetricSignatureKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: GetAsymmetricSignatureKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAsymmetricSignatureKeyRequest>, I>>(
    base?: I,
  ): GetAsymmetricSignatureKeyRequest {
    return GetAsymmetricSignatureKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAsymmetricSignatureKeyRequest>, I>>(
    object: I,
  ): GetAsymmetricSignatureKeyRequest {
    const message = createBaseGetAsymmetricSignatureKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetAsymmetricSignatureKeyRequest.$type, GetAsymmetricSignatureKeyRequest);

function createBaseListAsymmetricSignatureKeysRequest(): ListAsymmetricSignatureKeysRequest {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListAsymmetricSignatureKeysRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysRequest" as const,

  encode(message: ListAsymmetricSignatureKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAsymmetricSignatureKeysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAsymmetricSignatureKeysRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAsymmetricSignatureKeysRequest {
    return {
      $type: ListAsymmetricSignatureKeysRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListAsymmetricSignatureKeysRequest): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAsymmetricSignatureKeysRequest>, I>>(
    base?: I,
  ): ListAsymmetricSignatureKeysRequest {
    return ListAsymmetricSignatureKeysRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAsymmetricSignatureKeysRequest>, I>>(
    object: I,
  ): ListAsymmetricSignatureKeysRequest {
    const message = createBaseListAsymmetricSignatureKeysRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAsymmetricSignatureKeysRequest.$type, ListAsymmetricSignatureKeysRequest);

function createBaseListAsymmetricSignatureKeysResponse(): ListAsymmetricSignatureKeysResponse {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysResponse",
    keys: [],
    nextPageToken: "",
  };
}

export const ListAsymmetricSignatureKeysResponse = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysResponse" as const,

  encode(message: ListAsymmetricSignatureKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      AsymmetricSignatureKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAsymmetricSignatureKeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAsymmetricSignatureKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keys.push(AsymmetricSignatureKey.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListAsymmetricSignatureKeysResponse {
    return {
      $type: ListAsymmetricSignatureKeysResponse.$type,
      keys: globalThis.Array.isArray(object?.keys)
        ? object.keys.map((e: any) => AsymmetricSignatureKey.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListAsymmetricSignatureKeysResponse): unknown {
    const obj: any = {};
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => AsymmetricSignatureKey.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAsymmetricSignatureKeysResponse>, I>>(
    base?: I,
  ): ListAsymmetricSignatureKeysResponse {
    return ListAsymmetricSignatureKeysResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAsymmetricSignatureKeysResponse>, I>>(
    object: I,
  ): ListAsymmetricSignatureKeysResponse {
    const message = createBaseListAsymmetricSignatureKeysResponse();
    message.keys = object.keys?.map((e) => AsymmetricSignatureKey.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAsymmetricSignatureKeysResponse.$type, ListAsymmetricSignatureKeysResponse);

function createBaseUpdateAsymmetricSignatureKeyRequest(): UpdateAsymmetricSignatureKeyRequest {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest",
    keyId: "",
    updateMask: undefined,
    name: "",
    description: "",
    status: 0,
    labels: {},
    deletionProtection: false,
  };
}

export const UpdateAsymmetricSignatureKeyRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest" as const,

  encode(message: UpdateAsymmetricSignatureKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
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
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateAsymmetricSignatureKeyRequest_LabelsEntry.encode({
        $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.deletionProtection === true) {
      writer.uint32(56).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAsymmetricSignatureKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAsymmetricSignatureKeyRequest();
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

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = UpdateAsymmetricSignatureKeyRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAsymmetricSignatureKeyRequest {
    return {
      $type: UpdateAsymmetricSignatureKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? asymmetricSignatureKey_StatusFromJSON(object.status) : 0,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: UpdateAsymmetricSignatureKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
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
    if (message.status !== 0) {
      obj.status = asymmetricSignatureKey_StatusToJSON(message.status);
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
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAsymmetricSignatureKeyRequest>, I>>(
    base?: I,
  ): UpdateAsymmetricSignatureKeyRequest {
    return UpdateAsymmetricSignatureKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAsymmetricSignatureKeyRequest>, I>>(
    object: I,
  ): UpdateAsymmetricSignatureKeyRequest {
    const message = createBaseUpdateAsymmetricSignatureKeyRequest();
    message.keyId = object.keyId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateAsymmetricSignatureKeyRequest.$type, UpdateAsymmetricSignatureKeyRequest);

function createBaseUpdateAsymmetricSignatureKeyRequest_LabelsEntry(): UpdateAsymmetricSignatureKeyRequest_LabelsEntry {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest.LabelsEntry",
    key: "",
    value: "",
  };
}

export const UpdateAsymmetricSignatureKeyRequest_LabelsEntry = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest.LabelsEntry" as const,

  encode(
    message: UpdateAsymmetricSignatureKeyRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAsymmetricSignatureKeyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAsymmetricSignatureKeyRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateAsymmetricSignatureKeyRequest_LabelsEntry {
    return {
      $type: UpdateAsymmetricSignatureKeyRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateAsymmetricSignatureKeyRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAsymmetricSignatureKeyRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateAsymmetricSignatureKeyRequest_LabelsEntry {
    return UpdateAsymmetricSignatureKeyRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAsymmetricSignatureKeyRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateAsymmetricSignatureKeyRequest_LabelsEntry {
    const message = createBaseUpdateAsymmetricSignatureKeyRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateAsymmetricSignatureKeyRequest_LabelsEntry.$type,
  UpdateAsymmetricSignatureKeyRequest_LabelsEntry,
);

function createBaseUpdateAsymmetricSignatureKeyMetadata(): UpdateAsymmetricSignatureKeyMetadata {
  return { $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyMetadata", keyId: "" };
}

export const UpdateAsymmetricSignatureKeyMetadata = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyMetadata" as const,

  encode(message: UpdateAsymmetricSignatureKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAsymmetricSignatureKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAsymmetricSignatureKeyMetadata();
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

  fromJSON(object: any): UpdateAsymmetricSignatureKeyMetadata {
    return {
      $type: UpdateAsymmetricSignatureKeyMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: UpdateAsymmetricSignatureKeyMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAsymmetricSignatureKeyMetadata>, I>>(
    base?: I,
  ): UpdateAsymmetricSignatureKeyMetadata {
    return UpdateAsymmetricSignatureKeyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAsymmetricSignatureKeyMetadata>, I>>(
    object: I,
  ): UpdateAsymmetricSignatureKeyMetadata {
    const message = createBaseUpdateAsymmetricSignatureKeyMetadata();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateAsymmetricSignatureKeyMetadata.$type, UpdateAsymmetricSignatureKeyMetadata);

function createBaseDeleteAsymmetricSignatureKeyRequest(): DeleteAsymmetricSignatureKeyRequest {
  return { $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyRequest", keyId: "" };
}

export const DeleteAsymmetricSignatureKeyRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyRequest" as const,

  encode(message: DeleteAsymmetricSignatureKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAsymmetricSignatureKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAsymmetricSignatureKeyRequest();
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

  fromJSON(object: any): DeleteAsymmetricSignatureKeyRequest {
    return {
      $type: DeleteAsymmetricSignatureKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: DeleteAsymmetricSignatureKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAsymmetricSignatureKeyRequest>, I>>(
    base?: I,
  ): DeleteAsymmetricSignatureKeyRequest {
    return DeleteAsymmetricSignatureKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAsymmetricSignatureKeyRequest>, I>>(
    object: I,
  ): DeleteAsymmetricSignatureKeyRequest {
    const message = createBaseDeleteAsymmetricSignatureKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteAsymmetricSignatureKeyRequest.$type, DeleteAsymmetricSignatureKeyRequest);

function createBaseDeleteAsymmetricSignatureKeyMetadata(): DeleteAsymmetricSignatureKeyMetadata {
  return { $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyMetadata", keyId: "" };
}

export const DeleteAsymmetricSignatureKeyMetadata = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyMetadata" as const,

  encode(message: DeleteAsymmetricSignatureKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAsymmetricSignatureKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAsymmetricSignatureKeyMetadata();
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

  fromJSON(object: any): DeleteAsymmetricSignatureKeyMetadata {
    return {
      $type: DeleteAsymmetricSignatureKeyMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: DeleteAsymmetricSignatureKeyMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAsymmetricSignatureKeyMetadata>, I>>(
    base?: I,
  ): DeleteAsymmetricSignatureKeyMetadata {
    return DeleteAsymmetricSignatureKeyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAsymmetricSignatureKeyMetadata>, I>>(
    object: I,
  ): DeleteAsymmetricSignatureKeyMetadata {
    const message = createBaseDeleteAsymmetricSignatureKeyMetadata();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteAsymmetricSignatureKeyMetadata.$type, DeleteAsymmetricSignatureKeyMetadata);

function createBaseListAsymmetricSignatureKeyOperationsRequest(): ListAsymmetricSignatureKeyOperationsRequest {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsRequest",
    keyId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListAsymmetricSignatureKeyOperationsRequest = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsRequest" as const,

  encode(message: ListAsymmetricSignatureKeyOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAsymmetricSignatureKeyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAsymmetricSignatureKeyOperationsRequest();
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

  fromJSON(object: any): ListAsymmetricSignatureKeyOperationsRequest {
    return {
      $type: ListAsymmetricSignatureKeyOperationsRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListAsymmetricSignatureKeyOperationsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListAsymmetricSignatureKeyOperationsRequest>, I>>(
    base?: I,
  ): ListAsymmetricSignatureKeyOperationsRequest {
    return ListAsymmetricSignatureKeyOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAsymmetricSignatureKeyOperationsRequest>, I>>(
    object: I,
  ): ListAsymmetricSignatureKeyOperationsRequest {
    const message = createBaseListAsymmetricSignatureKeyOperationsRequest();
    message.keyId = object.keyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListAsymmetricSignatureKeyOperationsRequest.$type, ListAsymmetricSignatureKeyOperationsRequest);

function createBaseListAsymmetricSignatureKeyOperationsResponse(): ListAsymmetricSignatureKeyOperationsResponse {
  return {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListAsymmetricSignatureKeyOperationsResponse = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsResponse" as const,

  encode(message: ListAsymmetricSignatureKeyOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAsymmetricSignatureKeyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAsymmetricSignatureKeyOperationsResponse();
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

  fromJSON(object: any): ListAsymmetricSignatureKeyOperationsResponse {
    return {
      $type: ListAsymmetricSignatureKeyOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListAsymmetricSignatureKeyOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAsymmetricSignatureKeyOperationsResponse>, I>>(
    base?: I,
  ): ListAsymmetricSignatureKeyOperationsResponse {
    return ListAsymmetricSignatureKeyOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAsymmetricSignatureKeyOperationsResponse>, I>>(
    object: I,
  ): ListAsymmetricSignatureKeyOperationsResponse {
    const message = createBaseListAsymmetricSignatureKeyOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListAsymmetricSignatureKeyOperationsResponse.$type,
  ListAsymmetricSignatureKeyOperationsResponse,
);

/** Set of methods for managing asymmetric signature keys. */
export type AsymmetricSignatureKeyServiceService = typeof AsymmetricSignatureKeyServiceService;
export const AsymmetricSignatureKeyServiceService = {
  /**
   * control plane
   * Creates an asymmetric KMS key in the specified folder.
   */
  create: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateAsymmetricSignatureKeyRequest) =>
      Buffer.from(CreateAsymmetricSignatureKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateAsymmetricSignatureKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified asymmetric KMS key.
   *
   *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAsymmetricSignatureKeyRequest) =>
      Buffer.from(GetAsymmetricSignatureKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAsymmetricSignatureKeyRequest.decode(value),
    responseSerialize: (value: AsymmetricSignatureKey) => Buffer.from(AsymmetricSignatureKey.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AsymmetricSignatureKey.decode(value),
  },
  /** Returns the list of asymmetric KMS keys in the specified folder. */
  list: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAsymmetricSignatureKeysRequest) =>
      Buffer.from(ListAsymmetricSignatureKeysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAsymmetricSignatureKeysRequest.decode(value),
    responseSerialize: (value: ListAsymmetricSignatureKeysResponse) =>
      Buffer.from(ListAsymmetricSignatureKeysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAsymmetricSignatureKeysResponse.decode(value),
  },
  /** Updates the specified asymmetric KMS key. */
  update: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAsymmetricSignatureKeyRequest) =>
      Buffer.from(UpdateAsymmetricSignatureKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAsymmetricSignatureKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified asymmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [AsymmetricSignatureKeyService.Get] and [AsymmetricSignatureKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAsymmetricSignatureKeyRequest) =>
      Buffer.from(DeleteAsymmetricSignatureKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteAsymmetricSignatureKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified asymmetric KMS key. */
  listOperations: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAsymmetricSignatureKeyOperationsRequest) =>
      Buffer.from(ListAsymmetricSignatureKeyOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAsymmetricSignatureKeyOperationsRequest.decode(value),
    responseSerialize: (value: ListAsymmetricSignatureKeyOperationsResponse) =>
      Buffer.from(ListAsymmetricSignatureKeyOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAsymmetricSignatureKeyOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified key. */
  listAccessBindings: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the key. */
  setAccessBindings: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified key. */
  updateAccessBindings: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface AsymmetricSignatureKeyServiceServer extends UntypedServiceImplementation {
  /**
   * control plane
   * Creates an asymmetric KMS key in the specified folder.
   */
  create: handleUnaryCall<CreateAsymmetricSignatureKeyRequest, Operation>;
  /**
   * Returns the specified asymmetric KMS key.
   *
   *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get: handleUnaryCall<GetAsymmetricSignatureKeyRequest, AsymmetricSignatureKey>;
  /** Returns the list of asymmetric KMS keys in the specified folder. */
  list: handleUnaryCall<ListAsymmetricSignatureKeysRequest, ListAsymmetricSignatureKeysResponse>;
  /** Updates the specified asymmetric KMS key. */
  update: handleUnaryCall<UpdateAsymmetricSignatureKeyRequest, Operation>;
  /**
   * Deletes the specified asymmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [AsymmetricSignatureKeyService.Get] and [AsymmetricSignatureKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete: handleUnaryCall<DeleteAsymmetricSignatureKeyRequest, Operation>;
  /** Lists operations for the specified asymmetric KMS key. */
  listOperations: handleUnaryCall<
    ListAsymmetricSignatureKeyOperationsRequest,
    ListAsymmetricSignatureKeyOperationsResponse
  >;
  /** Lists existing access bindings for the specified key. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the key. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified key. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface AsymmetricSignatureKeyServiceClient extends Client {
  /**
   * control plane
   * Creates an asymmetric KMS key in the specified folder.
   */
  create(
    request: CreateAsymmetricSignatureKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAsymmetricSignatureKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAsymmetricSignatureKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified asymmetric KMS key.
   *
   *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get(
    request: GetAsymmetricSignatureKeyRequest,
    callback: (error: ServiceError | null, response: AsymmetricSignatureKey) => void,
  ): ClientUnaryCall;
  get(
    request: GetAsymmetricSignatureKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AsymmetricSignatureKey) => void,
  ): ClientUnaryCall;
  get(
    request: GetAsymmetricSignatureKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AsymmetricSignatureKey) => void,
  ): ClientUnaryCall;
  /** Returns the list of asymmetric KMS keys in the specified folder. */
  list(
    request: ListAsymmetricSignatureKeysRequest,
    callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListAsymmetricSignatureKeysRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListAsymmetricSignatureKeysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeysResponse) => void,
  ): ClientUnaryCall;
  /** Updates the specified asymmetric KMS key. */
  update(
    request: UpdateAsymmetricSignatureKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateAsymmetricSignatureKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateAsymmetricSignatureKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified asymmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [AsymmetricSignatureKeyService.Get] and [AsymmetricSignatureKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete(
    request: DeleteAsymmetricSignatureKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteAsymmetricSignatureKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteAsymmetricSignatureKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified asymmetric KMS key. */
  listOperations(
    request: ListAsymmetricSignatureKeyOperationsRequest,
    callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListAsymmetricSignatureKeyOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListAsymmetricSignatureKeyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified key. */
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
  /** Sets access bindings for the key. */
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
  /** Updates access bindings for the specified key. */
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

export const AsymmetricSignatureKeyServiceClient = makeGenericClientConstructor(
  AsymmetricSignatureKeyServiceService,
  "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): AsymmetricSignatureKeyServiceClient;
  service: typeof AsymmetricSignatureKeyServiceService;
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
