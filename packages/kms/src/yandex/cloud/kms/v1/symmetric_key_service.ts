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
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
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
import {
  SymmetricAlgorithm,
  symmetricAlgorithmFromJSON,
  symmetricAlgorithmToJSON,
  SymmetricKey,
  SymmetricKey_Status,
  symmetricKey_StatusFromJSON,
  symmetricKey_StatusToJSON,
  SymmetricKeyVersion,
} from "./symmetric_key";

export const protobufPackage = "yandex.cloud.kms.v1";

export interface CreateSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest";
  /** ID of the folder to create a symmetric KMS key in. */
  folderId: string;
  /** Name of the key. */
  name: string;
  /** Description of the key. */
  description: string;
  /**
   * Custom labels for the symmetric KMS key as `key:value` pairs. Maximum 64 per key.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   */
  labels: { [key: string]: string };
  /** Encryption algorithm to be used with a new key version, generated with the next rotation. */
  defaultAlgorithm: SymmetricAlgorithm;
  /**
   * Interval between automatic rotations. To disable automatic rotation, don't include
   * this field in the creation request.
   */
  rotationPeriod?:
    | Duration
    | undefined;
  /** Flag that inhibits deletion of the symmetric KMS key */
  deletionProtection: boolean;
}

export interface CreateSymmetricKeyRequest_LabelsEntry {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSymmetricKeyMetadata {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyMetadata";
  /** ID of the key being created. */
  keyId: string;
  /** ID of the primary version of the key being created. */
  primaryVersionId: string;
}

export interface GetSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.GetSymmetricKeyRequest";
  /**
   * ID of the symmetric KMS key to return.
   * To get the ID of a symmetric KMS key use a [SymmetricKeyService.List] request.
   */
  keyId: string;
}

export interface ListSymmetricKeysRequest {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysRequest";
  /** ID of the folder to list symmetric KMS keys in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListSymmetricKeysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSymmetricKeysResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSymmetricKeysResponse {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysResponse";
  /** List of symmetric KMS keys in the specified folder. */
  keys: SymmetricKey[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListSymmetricKeysRequest.page_size], use
   * the [next_page_token] as the value for the [ListSymmetricKeysRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListSymmetricKeyVersionsRequest {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest";
  /** ID of the symmetric KMS key to list versions for. */
  keyId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListSymmetricKeyVersionsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSymmetricKeyVersionsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSymmetricKeyVersionsResponse {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse";
  /** List of versions for the specified symmetric KMS key. */
  keyVersions: SymmetricKeyVersion[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListSymmetricKeyVersionsRequest.page_size], use
   * the [next_page_token] as the value for the [ListSymmetricKeyVersionsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest";
  /**
   * ID of the symmetric KMS key to update.
   * To get the ID of a symmetric KMS key use a [SymmetricKeyService.List] request.
   */
  keyId: string;
  /** Field mask that specifies which attributes of the symmetric KMS key are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New name for the symmetric KMS key. */
  name: string;
  /** New description for the symmetric KMS key. */
  description: string;
  /**
   * New status for the symmetric KMS key.
   * Using the [SymmetricKeyService.Update] method you can only set ACTIVE or INACTIVE status.
   */
  status: SymmetricKey_Status;
  /** Custom labels for the symmetric KMS key as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** Default encryption algorithm to be used with new versions of the symmetric KMS key. */
  defaultAlgorithm: SymmetricAlgorithm;
  /** Time period between automatic symmetric KMS key rotations. */
  rotationPeriod?:
    | Duration
    | undefined;
  /** Flag that inhibits deletion of the symmetric KMS key */
  deletionProtection: boolean;
}

export interface UpdateSymmetricKeyRequest_LabelsEntry {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSymmetricKeyMetadata {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata";
  /** ID of the key being updated. */
  keyId: string;
}

export interface DeleteSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyRequest";
  /** ID of the key to be deleted. */
  keyId: string;
}

export interface DeleteSymmetricKeyMetadata {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata";
  /** ID of the key being deleted. */
  keyId: string;
}

export interface SetPrimarySymmetricKeyVersionRequest {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest";
  /** ID of the key to set a primary version for. */
  keyId: string;
  /** ID of the version that should become primary for the specified key. */
  versionId: string;
}

export interface SetPrimarySymmetricKeyVersionMetadata {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata";
  /** ID of the key that the primary version if being changed for. */
  keyId: string;
  /** ID of the version that is being made primary for the key. */
  versionId: string;
}

export interface RotateSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyRequest";
  /** ID of the key to be rotated. */
  keyId: string;
}

export interface RotateSymmetricKeyMetadata {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyMetadata";
  /** ID of the key being rotated. */
  keyId: string;
  /** ID of the version generated as a result of key rotation. */
  newPrimaryVersionId: string;
}

export interface ScheduleSymmetricKeyVersionDestructionRequest {
  $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest";
  /** ID of the key whose version should be scheduled for destruction. */
  keyId: string;
  /** ID of the version to be destroyed. */
  versionId: string;
  /**
   * Time interval between the version destruction request and actual destruction.
   * Default value: 7 days.
   */
  pendingPeriod?: Duration | undefined;
}

export interface ScheduleSymmetricKeyVersionDestructionMetadata {
  $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata";
  /** ID of the key whose version is being scheduled for destruction. */
  keyId: string;
  /** ID of the version that is being scheduled for destruction. */
  versionId: string;
  /** Time when the version is scheduled to be destroyed. */
  destroyAt?: Date | undefined;
}

export interface CancelSymmetricKeyVersionDestructionRequest {
  $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest";
  /** ID of the key to cancel a version's destruction for. */
  keyId: string;
  /** ID of the version whose scheduled destruction should be cancelled. */
  versionId: string;
}

export interface CancelSymmetricKeyVersionDestructionMetadata {
  $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata";
  /** ID of the key whose version's destruction is being cancelled. */
  keyId: string;
  /** ID of the version whose scheduled destruction is being cancelled. */
  versionId: string;
}

export interface ListSymmetricKeyOperationsRequest {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest";
  /**
   * ID of the symmetric KMS key to get operations for.
   *
   * To get the key ID, use a [SymmetricKeyService.List] request.
   */
  keyId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListSymmetricKeyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSymmetricKeyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSymmetricKeyOperationsResponse {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse";
  /** List of operations for the specified key. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSymmetricKeyOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListSymmetricKeyOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseCreateSymmetricKeyRequest(): CreateSymmetricKeyRequest {
  return {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    defaultAlgorithm: 0,
    rotationPeriod: undefined,
    deletionProtection: false,
  };
}

export const CreateSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest" as const,

  encode(message: CreateSymmetricKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateSymmetricKeyRequest_LabelsEntry.encode({
        $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.defaultAlgorithm !== 0) {
      writer.uint32(40).int32(message.defaultAlgorithm);
    }
    if (message.rotationPeriod !== undefined) {
      Duration.encode(message.rotationPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(56).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSymmetricKeyRequest();
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

          const entry4 = CreateSymmetricKeyRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.defaultAlgorithm = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.rotationPeriod = Duration.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateSymmetricKeyRequest {
    return {
      $type: CreateSymmetricKeyRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      defaultAlgorithm: isSet(object.defaultAlgorithm) ? symmetricAlgorithmFromJSON(object.defaultAlgorithm) : 0,
      rotationPeriod: isSet(object.rotationPeriod) ? Duration.fromJSON(object.rotationPeriod) : undefined,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: CreateSymmetricKeyRequest): unknown {
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
    if (message.defaultAlgorithm !== 0) {
      obj.defaultAlgorithm = symmetricAlgorithmToJSON(message.defaultAlgorithm);
    }
    if (message.rotationPeriod !== undefined) {
      obj.rotationPeriod = Duration.toJSON(message.rotationPeriod);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSymmetricKeyRequest>, I>>(base?: I): CreateSymmetricKeyRequest {
    return CreateSymmetricKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSymmetricKeyRequest>, I>>(object: I): CreateSymmetricKeyRequest {
    const message = createBaseCreateSymmetricKeyRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.defaultAlgorithm = object.defaultAlgorithm ?? 0;
    message.rotationPeriod = (object.rotationPeriod !== undefined && object.rotationPeriod !== null)
      ? Duration.fromPartial(object.rotationPeriod)
      : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateSymmetricKeyRequest.$type, CreateSymmetricKeyRequest);

function createBaseCreateSymmetricKeyRequest_LabelsEntry(): CreateSymmetricKeyRequest_LabelsEntry {
  return { $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry", key: "", value: "" };
}

export const CreateSymmetricKeyRequest_LabelsEntry = {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry" as const,

  encode(message: CreateSymmetricKeyRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSymmetricKeyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSymmetricKeyRequest_LabelsEntry();
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

  fromJSON(object: any): CreateSymmetricKeyRequest_LabelsEntry {
    return {
      $type: CreateSymmetricKeyRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateSymmetricKeyRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSymmetricKeyRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateSymmetricKeyRequest_LabelsEntry {
    return CreateSymmetricKeyRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSymmetricKeyRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateSymmetricKeyRequest_LabelsEntry {
    const message = createBaseCreateSymmetricKeyRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSymmetricKeyRequest_LabelsEntry.$type, CreateSymmetricKeyRequest_LabelsEntry);

function createBaseCreateSymmetricKeyMetadata(): CreateSymmetricKeyMetadata {
  return { $type: "yandex.cloud.kms.v1.CreateSymmetricKeyMetadata", keyId: "", primaryVersionId: "" };
}

export const CreateSymmetricKeyMetadata = {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyMetadata" as const,

  encode(message: CreateSymmetricKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.primaryVersionId !== "") {
      writer.uint32(18).string(message.primaryVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSymmetricKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSymmetricKeyMetadata();
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

          message.primaryVersionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSymmetricKeyMetadata {
    return {
      $type: CreateSymmetricKeyMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      primaryVersionId: isSet(object.primaryVersionId) ? globalThis.String(object.primaryVersionId) : "",
    };
  },

  toJSON(message: CreateSymmetricKeyMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.primaryVersionId !== "") {
      obj.primaryVersionId = message.primaryVersionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSymmetricKeyMetadata>, I>>(base?: I): CreateSymmetricKeyMetadata {
    return CreateSymmetricKeyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSymmetricKeyMetadata>, I>>(object: I): CreateSymmetricKeyMetadata {
    const message = createBaseCreateSymmetricKeyMetadata();
    message.keyId = object.keyId ?? "";
    message.primaryVersionId = object.primaryVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSymmetricKeyMetadata.$type, CreateSymmetricKeyMetadata);

function createBaseGetSymmetricKeyRequest(): GetSymmetricKeyRequest {
  return { $type: "yandex.cloud.kms.v1.GetSymmetricKeyRequest", keyId: "" };
}

export const GetSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.GetSymmetricKeyRequest" as const,

  encode(message: GetSymmetricKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSymmetricKeyRequest();
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

  fromJSON(object: any): GetSymmetricKeyRequest {
    return { $type: GetSymmetricKeyRequest.$type, keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "" };
  },

  toJSON(message: GetSymmetricKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSymmetricKeyRequest>, I>>(base?: I): GetSymmetricKeyRequest {
    return GetSymmetricKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSymmetricKeyRequest>, I>>(object: I): GetSymmetricKeyRequest {
    const message = createBaseGetSymmetricKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSymmetricKeyRequest.$type, GetSymmetricKeyRequest);

function createBaseListSymmetricKeysRequest(): ListSymmetricKeysRequest {
  return { $type: "yandex.cloud.kms.v1.ListSymmetricKeysRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListSymmetricKeysRequest = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysRequest" as const,

  encode(message: ListSymmetricKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSymmetricKeysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSymmetricKeysRequest();
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

  fromJSON(object: any): ListSymmetricKeysRequest {
    return {
      $type: ListSymmetricKeysRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSymmetricKeysRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListSymmetricKeysRequest>, I>>(base?: I): ListSymmetricKeysRequest {
    return ListSymmetricKeysRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSymmetricKeysRequest>, I>>(object: I): ListSymmetricKeysRequest {
    const message = createBaseListSymmetricKeysRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSymmetricKeysRequest.$type, ListSymmetricKeysRequest);

function createBaseListSymmetricKeysResponse(): ListSymmetricKeysResponse {
  return { $type: "yandex.cloud.kms.v1.ListSymmetricKeysResponse", keys: [], nextPageToken: "" };
}

export const ListSymmetricKeysResponse = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysResponse" as const,

  encode(message: ListSymmetricKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      SymmetricKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSymmetricKeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSymmetricKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keys.push(SymmetricKey.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSymmetricKeysResponse {
    return {
      $type: ListSymmetricKeysResponse.$type,
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => SymmetricKey.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSymmetricKeysResponse): unknown {
    const obj: any = {};
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => SymmetricKey.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSymmetricKeysResponse>, I>>(base?: I): ListSymmetricKeysResponse {
    return ListSymmetricKeysResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSymmetricKeysResponse>, I>>(object: I): ListSymmetricKeysResponse {
    const message = createBaseListSymmetricKeysResponse();
    message.keys = object.keys?.map((e) => SymmetricKey.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSymmetricKeysResponse.$type, ListSymmetricKeysResponse);

function createBaseListSymmetricKeyVersionsRequest(): ListSymmetricKeyVersionsRequest {
  return { $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest", keyId: "", pageSize: 0, pageToken: "" };
}

export const ListSymmetricKeyVersionsRequest = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest" as const,

  encode(message: ListSymmetricKeyVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSymmetricKeyVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSymmetricKeyVersionsRequest();
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

  fromJSON(object: any): ListSymmetricKeyVersionsRequest {
    return {
      $type: ListSymmetricKeyVersionsRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSymmetricKeyVersionsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListSymmetricKeyVersionsRequest>, I>>(base?: I): ListSymmetricKeyVersionsRequest {
    return ListSymmetricKeyVersionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSymmetricKeyVersionsRequest>, I>>(
    object: I,
  ): ListSymmetricKeyVersionsRequest {
    const message = createBaseListSymmetricKeyVersionsRequest();
    message.keyId = object.keyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSymmetricKeyVersionsRequest.$type, ListSymmetricKeyVersionsRequest);

function createBaseListSymmetricKeyVersionsResponse(): ListSymmetricKeyVersionsResponse {
  return { $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse", keyVersions: [], nextPageToken: "" };
}

export const ListSymmetricKeyVersionsResponse = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse" as const,

  encode(message: ListSymmetricKeyVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keyVersions) {
      SymmetricKeyVersion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSymmetricKeyVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSymmetricKeyVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyVersions.push(SymmetricKeyVersion.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSymmetricKeyVersionsResponse {
    return {
      $type: ListSymmetricKeyVersionsResponse.$type,
      keyVersions: globalThis.Array.isArray(object?.keyVersions)
        ? object.keyVersions.map((e: any) => SymmetricKeyVersion.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSymmetricKeyVersionsResponse): unknown {
    const obj: any = {};
    if (message.keyVersions?.length) {
      obj.keyVersions = message.keyVersions.map((e) => SymmetricKeyVersion.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSymmetricKeyVersionsResponse>, I>>(
    base?: I,
  ): ListSymmetricKeyVersionsResponse {
    return ListSymmetricKeyVersionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSymmetricKeyVersionsResponse>, I>>(
    object: I,
  ): ListSymmetricKeyVersionsResponse {
    const message = createBaseListSymmetricKeyVersionsResponse();
    message.keyVersions = object.keyVersions?.map((e) => SymmetricKeyVersion.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSymmetricKeyVersionsResponse.$type, ListSymmetricKeyVersionsResponse);

function createBaseUpdateSymmetricKeyRequest(): UpdateSymmetricKeyRequest {
  return {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest",
    keyId: "",
    updateMask: undefined,
    name: "",
    description: "",
    status: 0,
    labels: {},
    defaultAlgorithm: 0,
    rotationPeriod: undefined,
    deletionProtection: false,
  };
}

export const UpdateSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest" as const,

  encode(message: UpdateSymmetricKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      UpdateSymmetricKeyRequest_LabelsEntry.encode({
        $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.defaultAlgorithm !== 0) {
      writer.uint32(56).int32(message.defaultAlgorithm);
    }
    if (message.rotationPeriod !== undefined) {
      Duration.encode(message.rotationPeriod, writer.uint32(66).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSymmetricKeyRequest();
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

          const entry6 = UpdateSymmetricKeyRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.defaultAlgorithm = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.rotationPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
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

  fromJSON(object: any): UpdateSymmetricKeyRequest {
    return {
      $type: UpdateSymmetricKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? symmetricKey_StatusFromJSON(object.status) : 0,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      defaultAlgorithm: isSet(object.defaultAlgorithm) ? symmetricAlgorithmFromJSON(object.defaultAlgorithm) : 0,
      rotationPeriod: isSet(object.rotationPeriod) ? Duration.fromJSON(object.rotationPeriod) : undefined,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: UpdateSymmetricKeyRequest): unknown {
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
      obj.status = symmetricKey_StatusToJSON(message.status);
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
    if (message.defaultAlgorithm !== 0) {
      obj.defaultAlgorithm = symmetricAlgorithmToJSON(message.defaultAlgorithm);
    }
    if (message.rotationPeriod !== undefined) {
      obj.rotationPeriod = Duration.toJSON(message.rotationPeriod);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSymmetricKeyRequest>, I>>(base?: I): UpdateSymmetricKeyRequest {
    return UpdateSymmetricKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSymmetricKeyRequest>, I>>(object: I): UpdateSymmetricKeyRequest {
    const message = createBaseUpdateSymmetricKeyRequest();
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
    message.defaultAlgorithm = object.defaultAlgorithm ?? 0;
    message.rotationPeriod = (object.rotationPeriod !== undefined && object.rotationPeriod !== null)
      ? Duration.fromPartial(object.rotationPeriod)
      : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateSymmetricKeyRequest.$type, UpdateSymmetricKeyRequest);

function createBaseUpdateSymmetricKeyRequest_LabelsEntry(): UpdateSymmetricKeyRequest_LabelsEntry {
  return { $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateSymmetricKeyRequest_LabelsEntry = {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry" as const,

  encode(message: UpdateSymmetricKeyRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSymmetricKeyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSymmetricKeyRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateSymmetricKeyRequest_LabelsEntry {
    return {
      $type: UpdateSymmetricKeyRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateSymmetricKeyRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSymmetricKeyRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateSymmetricKeyRequest_LabelsEntry {
    return UpdateSymmetricKeyRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSymmetricKeyRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateSymmetricKeyRequest_LabelsEntry {
    const message = createBaseUpdateSymmetricKeyRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSymmetricKeyRequest_LabelsEntry.$type, UpdateSymmetricKeyRequest_LabelsEntry);

function createBaseUpdateSymmetricKeyMetadata(): UpdateSymmetricKeyMetadata {
  return { $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata", keyId: "" };
}

export const UpdateSymmetricKeyMetadata = {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata" as const,

  encode(message: UpdateSymmetricKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSymmetricKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSymmetricKeyMetadata();
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

  fromJSON(object: any): UpdateSymmetricKeyMetadata {
    return {
      $type: UpdateSymmetricKeyMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: UpdateSymmetricKeyMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSymmetricKeyMetadata>, I>>(base?: I): UpdateSymmetricKeyMetadata {
    return UpdateSymmetricKeyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSymmetricKeyMetadata>, I>>(object: I): UpdateSymmetricKeyMetadata {
    const message = createBaseUpdateSymmetricKeyMetadata();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSymmetricKeyMetadata.$type, UpdateSymmetricKeyMetadata);

function createBaseDeleteSymmetricKeyRequest(): DeleteSymmetricKeyRequest {
  return { $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyRequest", keyId: "" };
}

export const DeleteSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyRequest" as const,

  encode(message: DeleteSymmetricKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSymmetricKeyRequest();
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

  fromJSON(object: any): DeleteSymmetricKeyRequest {
    return {
      $type: DeleteSymmetricKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: DeleteSymmetricKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSymmetricKeyRequest>, I>>(base?: I): DeleteSymmetricKeyRequest {
    return DeleteSymmetricKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSymmetricKeyRequest>, I>>(object: I): DeleteSymmetricKeyRequest {
    const message = createBaseDeleteSymmetricKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSymmetricKeyRequest.$type, DeleteSymmetricKeyRequest);

function createBaseDeleteSymmetricKeyMetadata(): DeleteSymmetricKeyMetadata {
  return { $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata", keyId: "" };
}

export const DeleteSymmetricKeyMetadata = {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata" as const,

  encode(message: DeleteSymmetricKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSymmetricKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSymmetricKeyMetadata();
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

  fromJSON(object: any): DeleteSymmetricKeyMetadata {
    return {
      $type: DeleteSymmetricKeyMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: DeleteSymmetricKeyMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSymmetricKeyMetadata>, I>>(base?: I): DeleteSymmetricKeyMetadata {
    return DeleteSymmetricKeyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSymmetricKeyMetadata>, I>>(object: I): DeleteSymmetricKeyMetadata {
    const message = createBaseDeleteSymmetricKeyMetadata();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSymmetricKeyMetadata.$type, DeleteSymmetricKeyMetadata);

function createBaseSetPrimarySymmetricKeyVersionRequest(): SetPrimarySymmetricKeyVersionRequest {
  return { $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest", keyId: "", versionId: "" };
}

export const SetPrimarySymmetricKeyVersionRequest = {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest" as const,

  encode(message: SetPrimarySymmetricKeyVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimarySymmetricKeyVersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPrimarySymmetricKeyVersionRequest();
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

          message.versionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetPrimarySymmetricKeyVersionRequest {
    return {
      $type: SetPrimarySymmetricKeyVersionRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
    };
  },

  toJSON(message: SetPrimarySymmetricKeyVersionRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetPrimarySymmetricKeyVersionRequest>, I>>(
    base?: I,
  ): SetPrimarySymmetricKeyVersionRequest {
    return SetPrimarySymmetricKeyVersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPrimarySymmetricKeyVersionRequest>, I>>(
    object: I,
  ): SetPrimarySymmetricKeyVersionRequest {
    const message = createBaseSetPrimarySymmetricKeyVersionRequest();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetPrimarySymmetricKeyVersionRequest.$type, SetPrimarySymmetricKeyVersionRequest);

function createBaseSetPrimarySymmetricKeyVersionMetadata(): SetPrimarySymmetricKeyVersionMetadata {
  return { $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata", keyId: "", versionId: "" };
}

export const SetPrimarySymmetricKeyVersionMetadata = {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata" as const,

  encode(message: SetPrimarySymmetricKeyVersionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimarySymmetricKeyVersionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPrimarySymmetricKeyVersionMetadata();
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

          message.versionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetPrimarySymmetricKeyVersionMetadata {
    return {
      $type: SetPrimarySymmetricKeyVersionMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
    };
  },

  toJSON(message: SetPrimarySymmetricKeyVersionMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetPrimarySymmetricKeyVersionMetadata>, I>>(
    base?: I,
  ): SetPrimarySymmetricKeyVersionMetadata {
    return SetPrimarySymmetricKeyVersionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPrimarySymmetricKeyVersionMetadata>, I>>(
    object: I,
  ): SetPrimarySymmetricKeyVersionMetadata {
    const message = createBaseSetPrimarySymmetricKeyVersionMetadata();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetPrimarySymmetricKeyVersionMetadata.$type, SetPrimarySymmetricKeyVersionMetadata);

function createBaseRotateSymmetricKeyRequest(): RotateSymmetricKeyRequest {
  return { $type: "yandex.cloud.kms.v1.RotateSymmetricKeyRequest", keyId: "" };
}

export const RotateSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyRequest" as const,

  encode(message: RotateSymmetricKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RotateSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRotateSymmetricKeyRequest();
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

  fromJSON(object: any): RotateSymmetricKeyRequest {
    return {
      $type: RotateSymmetricKeyRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: RotateSymmetricKeyRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RotateSymmetricKeyRequest>, I>>(base?: I): RotateSymmetricKeyRequest {
    return RotateSymmetricKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RotateSymmetricKeyRequest>, I>>(object: I): RotateSymmetricKeyRequest {
    const message = createBaseRotateSymmetricKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RotateSymmetricKeyRequest.$type, RotateSymmetricKeyRequest);

function createBaseRotateSymmetricKeyMetadata(): RotateSymmetricKeyMetadata {
  return { $type: "yandex.cloud.kms.v1.RotateSymmetricKeyMetadata", keyId: "", newPrimaryVersionId: "" };
}

export const RotateSymmetricKeyMetadata = {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyMetadata" as const,

  encode(message: RotateSymmetricKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.newPrimaryVersionId !== "") {
      writer.uint32(18).string(message.newPrimaryVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RotateSymmetricKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRotateSymmetricKeyMetadata();
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

          message.newPrimaryVersionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RotateSymmetricKeyMetadata {
    return {
      $type: RotateSymmetricKeyMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      newPrimaryVersionId: isSet(object.newPrimaryVersionId) ? globalThis.String(object.newPrimaryVersionId) : "",
    };
  },

  toJSON(message: RotateSymmetricKeyMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.newPrimaryVersionId !== "") {
      obj.newPrimaryVersionId = message.newPrimaryVersionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RotateSymmetricKeyMetadata>, I>>(base?: I): RotateSymmetricKeyMetadata {
    return RotateSymmetricKeyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RotateSymmetricKeyMetadata>, I>>(object: I): RotateSymmetricKeyMetadata {
    const message = createBaseRotateSymmetricKeyMetadata();
    message.keyId = object.keyId ?? "";
    message.newPrimaryVersionId = object.newPrimaryVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RotateSymmetricKeyMetadata.$type, RotateSymmetricKeyMetadata);

function createBaseScheduleSymmetricKeyVersionDestructionRequest(): ScheduleSymmetricKeyVersionDestructionRequest {
  return {
    $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest",
    keyId: "",
    versionId: "",
    pendingPeriod: undefined,
  };
}

export const ScheduleSymmetricKeyVersionDestructionRequest = {
  $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest" as const,

  encode(message: ScheduleSymmetricKeyVersionDestructionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.pendingPeriod !== undefined) {
      Duration.encode(message.pendingPeriod, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleSymmetricKeyVersionDestructionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleSymmetricKeyVersionDestructionRequest();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pendingPeriod = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScheduleSymmetricKeyVersionDestructionRequest {
    return {
      $type: ScheduleSymmetricKeyVersionDestructionRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      pendingPeriod: isSet(object.pendingPeriod) ? Duration.fromJSON(object.pendingPeriod) : undefined,
    };
  },

  toJSON(message: ScheduleSymmetricKeyVersionDestructionRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.pendingPeriod !== undefined) {
      obj.pendingPeriod = Duration.toJSON(message.pendingPeriod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScheduleSymmetricKeyVersionDestructionRequest>, I>>(
    base?: I,
  ): ScheduleSymmetricKeyVersionDestructionRequest {
    return ScheduleSymmetricKeyVersionDestructionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScheduleSymmetricKeyVersionDestructionRequest>, I>>(
    object: I,
  ): ScheduleSymmetricKeyVersionDestructionRequest {
    const message = createBaseScheduleSymmetricKeyVersionDestructionRequest();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.pendingPeriod = (object.pendingPeriod !== undefined && object.pendingPeriod !== null)
      ? Duration.fromPartial(object.pendingPeriod)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ScheduleSymmetricKeyVersionDestructionRequest.$type,
  ScheduleSymmetricKeyVersionDestructionRequest,
);

function createBaseScheduleSymmetricKeyVersionDestructionMetadata(): ScheduleSymmetricKeyVersionDestructionMetadata {
  return {
    $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata",
    keyId: "",
    versionId: "",
    destroyAt: undefined,
  };
}

export const ScheduleSymmetricKeyVersionDestructionMetadata = {
  $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata" as const,

  encode(
    message: ScheduleSymmetricKeyVersionDestructionMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.destroyAt !== undefined) {
      Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleSymmetricKeyVersionDestructionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleSymmetricKeyVersionDestructionMetadata();
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

          message.versionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.destroyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScheduleSymmetricKeyVersionDestructionMetadata {
    return {
      $type: ScheduleSymmetricKeyVersionDestructionMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      destroyAt: isSet(object.destroyAt) ? fromJsonTimestamp(object.destroyAt) : undefined,
    };
  },

  toJSON(message: ScheduleSymmetricKeyVersionDestructionMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.destroyAt !== undefined) {
      obj.destroyAt = message.destroyAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScheduleSymmetricKeyVersionDestructionMetadata>, I>>(
    base?: I,
  ): ScheduleSymmetricKeyVersionDestructionMetadata {
    return ScheduleSymmetricKeyVersionDestructionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScheduleSymmetricKeyVersionDestructionMetadata>, I>>(
    object: I,
  ): ScheduleSymmetricKeyVersionDestructionMetadata {
    const message = createBaseScheduleSymmetricKeyVersionDestructionMetadata();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.destroyAt = object.destroyAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ScheduleSymmetricKeyVersionDestructionMetadata.$type,
  ScheduleSymmetricKeyVersionDestructionMetadata,
);

function createBaseCancelSymmetricKeyVersionDestructionRequest(): CancelSymmetricKeyVersionDestructionRequest {
  return { $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest", keyId: "", versionId: "" };
}

export const CancelSymmetricKeyVersionDestructionRequest = {
  $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest" as const,

  encode(message: CancelSymmetricKeyVersionDestructionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelSymmetricKeyVersionDestructionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelSymmetricKeyVersionDestructionRequest();
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

          message.versionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelSymmetricKeyVersionDestructionRequest {
    return {
      $type: CancelSymmetricKeyVersionDestructionRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
    };
  },

  toJSON(message: CancelSymmetricKeyVersionDestructionRequest): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CancelSymmetricKeyVersionDestructionRequest>, I>>(
    base?: I,
  ): CancelSymmetricKeyVersionDestructionRequest {
    return CancelSymmetricKeyVersionDestructionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CancelSymmetricKeyVersionDestructionRequest>, I>>(
    object: I,
  ): CancelSymmetricKeyVersionDestructionRequest {
    const message = createBaseCancelSymmetricKeyVersionDestructionRequest();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CancelSymmetricKeyVersionDestructionRequest.$type, CancelSymmetricKeyVersionDestructionRequest);

function createBaseCancelSymmetricKeyVersionDestructionMetadata(): CancelSymmetricKeyVersionDestructionMetadata {
  return { $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata", keyId: "", versionId: "" };
}

export const CancelSymmetricKeyVersionDestructionMetadata = {
  $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata" as const,

  encode(message: CancelSymmetricKeyVersionDestructionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelSymmetricKeyVersionDestructionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelSymmetricKeyVersionDestructionMetadata();
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

          message.versionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelSymmetricKeyVersionDestructionMetadata {
    return {
      $type: CancelSymmetricKeyVersionDestructionMetadata.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
    };
  },

  toJSON(message: CancelSymmetricKeyVersionDestructionMetadata): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CancelSymmetricKeyVersionDestructionMetadata>, I>>(
    base?: I,
  ): CancelSymmetricKeyVersionDestructionMetadata {
    return CancelSymmetricKeyVersionDestructionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CancelSymmetricKeyVersionDestructionMetadata>, I>>(
    object: I,
  ): CancelSymmetricKeyVersionDestructionMetadata {
    const message = createBaseCancelSymmetricKeyVersionDestructionMetadata();
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CancelSymmetricKeyVersionDestructionMetadata.$type,
  CancelSymmetricKeyVersionDestructionMetadata,
);

function createBaseListSymmetricKeyOperationsRequest(): ListSymmetricKeyOperationsRequest {
  return { $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest", keyId: "", pageSize: 0, pageToken: "" };
}

export const ListSymmetricKeyOperationsRequest = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest" as const,

  encode(message: ListSymmetricKeyOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSymmetricKeyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSymmetricKeyOperationsRequest();
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

  fromJSON(object: any): ListSymmetricKeyOperationsRequest {
    return {
      $type: ListSymmetricKeyOperationsRequest.$type,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSymmetricKeyOperationsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListSymmetricKeyOperationsRequest>, I>>(
    base?: I,
  ): ListSymmetricKeyOperationsRequest {
    return ListSymmetricKeyOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSymmetricKeyOperationsRequest>, I>>(
    object: I,
  ): ListSymmetricKeyOperationsRequest {
    const message = createBaseListSymmetricKeyOperationsRequest();
    message.keyId = object.keyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSymmetricKeyOperationsRequest.$type, ListSymmetricKeyOperationsRequest);

function createBaseListSymmetricKeyOperationsResponse(): ListSymmetricKeyOperationsResponse {
  return { $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListSymmetricKeyOperationsResponse = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse" as const,

  encode(message: ListSymmetricKeyOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSymmetricKeyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSymmetricKeyOperationsResponse();
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

  fromJSON(object: any): ListSymmetricKeyOperationsResponse {
    return {
      $type: ListSymmetricKeyOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSymmetricKeyOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSymmetricKeyOperationsResponse>, I>>(
    base?: I,
  ): ListSymmetricKeyOperationsResponse {
    return ListSymmetricKeyOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSymmetricKeyOperationsResponse>, I>>(
    object: I,
  ): ListSymmetricKeyOperationsResponse {
    const message = createBaseListSymmetricKeyOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSymmetricKeyOperationsResponse.$type, ListSymmetricKeyOperationsResponse);

/** Set of methods for managing symmetric KMS keys. */
export type SymmetricKeyServiceService = typeof SymmetricKeyServiceService;
export const SymmetricKeyServiceService = {
  /** Creates a symmetric KMS key in the specified folder. */
  create: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSymmetricKeyRequest) =>
      Buffer.from(CreateSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSymmetricKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified symmetric KMS key.
   *
   *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSymmetricKeyRequest) => Buffer.from(GetSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSymmetricKeyRequest.decode(value),
    responseSerialize: (value: SymmetricKey) => Buffer.from(SymmetricKey.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SymmetricKey.decode(value),
  },
  /** Returns the list of symmetric KMS keys in the specified folder. */
  list: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSymmetricKeysRequest) => Buffer.from(ListSymmetricKeysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSymmetricKeysRequest.decode(value),
    responseSerialize: (value: ListSymmetricKeysResponse) =>
      Buffer.from(ListSymmetricKeysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSymmetricKeysResponse.decode(value),
  },
  /** Returns the list of versions of the specified symmetric KMS key. */
  listVersions: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListVersions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSymmetricKeyVersionsRequest) =>
      Buffer.from(ListSymmetricKeyVersionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSymmetricKeyVersionsRequest.decode(value),
    responseSerialize: (value: ListSymmetricKeyVersionsResponse) =>
      Buffer.from(ListSymmetricKeyVersionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSymmetricKeyVersionsResponse.decode(value),
  },
  /** Updates the specified symmetric KMS key. */
  update: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSymmetricKeyRequest) =>
      Buffer.from(UpdateSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSymmetricKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified symmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSymmetricKeyRequest) =>
      Buffer.from(DeleteSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSymmetricKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Sets the primary version for the specified key. The primary version is used
   * by default for all encrypt/decrypt operations where no version ID is specified.
   */
  setPrimaryVersion: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetPrimaryVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetPrimarySymmetricKeyVersionRequest) =>
      Buffer.from(SetPrimarySymmetricKeyVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetPrimarySymmetricKeyVersionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Schedules the specified key version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ScheduleVersionDestruction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScheduleSymmetricKeyVersionDestructionRequest) =>
      Buffer.from(ScheduleSymmetricKeyVersionDestructionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScheduleSymmetricKeyVersionDestructionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/CancelVersionDestruction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CancelSymmetricKeyVersionDestructionRequest) =>
      Buffer.from(CancelSymmetricKeyVersionDestructionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CancelSymmetricKeyVersionDestructionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Rotates the specified key: creates a new key version and makes it the primary version.
   * The old version remains available for decryption of ciphertext encrypted with it.
   */
  rotate: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Rotate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RotateSymmetricKeyRequest) =>
      Buffer.from(RotateSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RotateSymmetricKeyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified symmetric KMS key. */
  listOperations: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSymmetricKeyOperationsRequest) =>
      Buffer.from(ListSymmetricKeyOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSymmetricKeyOperationsRequest.decode(value),
    responseSerialize: (value: ListSymmetricKeyOperationsResponse) =>
      Buffer.from(ListSymmetricKeyOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSymmetricKeyOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified key. */
  listAccessBindings: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListAccessBindings",
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
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified key. */
  updateAccessBindings: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface SymmetricKeyServiceServer extends UntypedServiceImplementation {
  /** Creates a symmetric KMS key in the specified folder. */
  create: handleUnaryCall<CreateSymmetricKeyRequest, Operation>;
  /**
   * Returns the specified symmetric KMS key.
   *
   *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get: handleUnaryCall<GetSymmetricKeyRequest, SymmetricKey>;
  /** Returns the list of symmetric KMS keys in the specified folder. */
  list: handleUnaryCall<ListSymmetricKeysRequest, ListSymmetricKeysResponse>;
  /** Returns the list of versions of the specified symmetric KMS key. */
  listVersions: handleUnaryCall<ListSymmetricKeyVersionsRequest, ListSymmetricKeyVersionsResponse>;
  /** Updates the specified symmetric KMS key. */
  update: handleUnaryCall<UpdateSymmetricKeyRequest, Operation>;
  /**
   * Deletes the specified symmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete: handleUnaryCall<DeleteSymmetricKeyRequest, Operation>;
  /**
   * Sets the primary version for the specified key. The primary version is used
   * by default for all encrypt/decrypt operations where no version ID is specified.
   */
  setPrimaryVersion: handleUnaryCall<SetPrimarySymmetricKeyVersionRequest, Operation>;
  /**
   * Schedules the specified key version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction: handleUnaryCall<ScheduleSymmetricKeyVersionDestructionRequest, Operation>;
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction: handleUnaryCall<CancelSymmetricKeyVersionDestructionRequest, Operation>;
  /**
   * Rotates the specified key: creates a new key version and makes it the primary version.
   * The old version remains available for decryption of ciphertext encrypted with it.
   */
  rotate: handleUnaryCall<RotateSymmetricKeyRequest, Operation>;
  /** Lists operations for the specified symmetric KMS key. */
  listOperations: handleUnaryCall<ListSymmetricKeyOperationsRequest, ListSymmetricKeyOperationsResponse>;
  /** Lists existing access bindings for the specified key. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the key. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified key. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface SymmetricKeyServiceClient extends Client {
  /** Creates a symmetric KMS key in the specified folder. */
  create(
    request: CreateSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified symmetric KMS key.
   *
   *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get(
    request: GetSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: SymmetricKey) => void,
  ): ClientUnaryCall;
  get(
    request: GetSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SymmetricKey) => void,
  ): ClientUnaryCall;
  get(
    request: GetSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SymmetricKey) => void,
  ): ClientUnaryCall;
  /** Returns the list of symmetric KMS keys in the specified folder. */
  list(
    request: ListSymmetricKeysRequest,
    callback: (error: ServiceError | null, response: ListSymmetricKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSymmetricKeysRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSymmetricKeysResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSymmetricKeysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSymmetricKeysResponse) => void,
  ): ClientUnaryCall;
  /** Returns the list of versions of the specified symmetric KMS key. */
  listVersions(
    request: ListSymmetricKeyVersionsRequest,
    callback: (error: ServiceError | null, response: ListSymmetricKeyVersionsResponse) => void,
  ): ClientUnaryCall;
  listVersions(
    request: ListSymmetricKeyVersionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSymmetricKeyVersionsResponse) => void,
  ): ClientUnaryCall;
  listVersions(
    request: ListSymmetricKeyVersionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSymmetricKeyVersionsResponse) => void,
  ): ClientUnaryCall;
  /** Updates the specified symmetric KMS key. */
  update(
    request: UpdateSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified symmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete(
    request: DeleteSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Sets the primary version for the specified key. The primary version is used
   * by default for all encrypt/decrypt operations where no version ID is specified.
   */
  setPrimaryVersion(
    request: SetPrimarySymmetricKeyVersionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setPrimaryVersion(
    request: SetPrimarySymmetricKeyVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setPrimaryVersion(
    request: SetPrimarySymmetricKeyVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Schedules the specified key version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction(
    request: ScheduleSymmetricKeyVersionDestructionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  scheduleVersionDestruction(
    request: ScheduleSymmetricKeyVersionDestructionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  scheduleVersionDestruction(
    request: ScheduleSymmetricKeyVersionDestructionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction(
    request: CancelSymmetricKeyVersionDestructionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  cancelVersionDestruction(
    request: CancelSymmetricKeyVersionDestructionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  cancelVersionDestruction(
    request: CancelSymmetricKeyVersionDestructionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Rotates the specified key: creates a new key version and makes it the primary version.
   * The old version remains available for decryption of ciphertext encrypted with it.
   */
  rotate(
    request: RotateSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rotate(
    request: RotateSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rotate(
    request: RotateSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified symmetric KMS key. */
  listOperations(
    request: ListSymmetricKeyOperationsRequest,
    callback: (error: ServiceError | null, response: ListSymmetricKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSymmetricKeyOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSymmetricKeyOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSymmetricKeyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSymmetricKeyOperationsResponse) => void,
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

export const SymmetricKeyServiceClient = makeGenericClientConstructor(
  SymmetricKeyServiceService,
  "yandex.cloud.kms.v1.SymmetricKeyService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SymmetricKeyServiceClient;
  service: typeof SymmetricKeyServiceService;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
