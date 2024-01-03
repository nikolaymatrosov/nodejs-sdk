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
import { Secret, Version } from "./secret";

export const protobufPackage = "yandex.cloud.lockbox.v1";

export interface PayloadEntryChange {
  $type: "yandex.cloud.lockbox.v1.PayloadEntryChange";
  /** Non-confidential key of the entry. */
  key: string;
  /** Use the field to set a text value. */
  textValue?:
    | string
    | undefined;
  /** Use the field to set a binary value. */
  binaryValue?: Buffer | undefined;
}

export interface GetSecretRequest {
  $type: "yandex.cloud.lockbox.v1.GetSecretRequest";
  /**
   * ID of the secret to return.
   *
   * To get a secret ID make a [List] request.
   */
  secretId: string;
}

export interface ListSecretsRequest {
  $type: "yandex.cloud.lockbox.v1.ListSecretsRequest";
  /** ID of the folder to list secrets in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListSecretsRequest.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSecretsRequest.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSecretsResponse {
  $type: "yandex.cloud.lockbox.v1.ListSecretsResponse";
  /** List of secrets in the specified folder. */
  secrets: Secret[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListSecretsRequest.page_size], use
   * the `next_page_token` as the value for the [ListSecretsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSecretRequest {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest";
  /** ID of the folder to create a secret in. */
  folderId: string;
  /** Name of the secret. */
  name: string;
  /** Description of the secret. */
  description: string;
  /**
   * Custom labels for the secret as `key:value` pairs. Maximum 64 per key.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   */
  labels: { [key: string]: string };
  /** Optional ID of the KMS key will be used to encrypt and decrypt the secret. */
  kmsKeyId: string;
  /** Description of the first version. */
  versionDescription: string;
  /** Payload entries added to the first version. */
  versionPayloadEntries: PayloadEntryChange[];
  /** Flag that inhibits deletion of the secret. */
  deletionProtection: boolean;
}

export interface CreateSecretRequest_LabelsEntry {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata";
  /** ID of the secret being created. */
  secretId: string;
  /** ID of the current version of the secret being created. */
  versionId: string;
}

export interface UpdateSecretRequest {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest";
  /** ID of the secret to update. */
  secretId: string;
  /** Field mask that specifies which attributes of the secret are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New name of the secret. */
  name: string;
  /** New description of the secret. */
  description: string;
  /** Custom labels for the secret as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** Flag that inhibits deletion of the secret. */
  deletionProtection: boolean;
}

export interface UpdateSecretRequest_LabelsEntry {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata";
  /** ID of the secret being updated. */
  secretId: string;
}

export interface DeleteSecretRequest {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest";
  /** ID of the secret to be deleted. */
  secretId: string;
}

export interface DeleteSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata";
  /** ID of the secret being deleted. */
  secretId: string;
}

export interface ActivateSecretRequest {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest";
  /** ID of the secret to be activated. */
  secretId: string;
}

export interface ActivateSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata";
  /** ID of the secret being activated. */
  secretId: string;
}

export interface DeactivateSecretRequest {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest";
  /** ID of the secret to be deactivated. */
  secretId: string;
}

export interface DeactivateSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata";
  /** ID of the secret being deactivated. */
  secretId: string;
}

export interface AddVersionRequest {
  $type: "yandex.cloud.lockbox.v1.AddVersionRequest";
  /** ID of the secret. */
  secretId: string;
  /** Description of the version. */
  description: string;
  /** Describe how payload entries of the base version change in the added version. */
  payloadEntries: PayloadEntryChange[];
  /** Optional base version id. Defaults to the current version if not specified */
  baseVersionId: string;
}

export interface AddVersionMetadata {
  $type: "yandex.cloud.lockbox.v1.AddVersionMetadata";
  /** ID of the secret. */
  secretId: string;
  /** ID of the added version. */
  versionId: string;
}

export interface ListVersionsRequest {
  $type: "yandex.cloud.lockbox.v1.ListVersionsRequest";
  /** ID of the secret to list versions for. */
  secretId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListVersionsRequest.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListVersionsRequest.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListVersionsResponse {
  $type: "yandex.cloud.lockbox.v1.ListVersionsResponse";
  /** List of versions for the specified secret. */
  versions: Version[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListVersionsRequest.page_size], use
   * the `next_page_token` as the value for the [ListVersionsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ScheduleVersionDestructionRequest {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest";
  /** ID of the secret whose version should be scheduled for destruction. */
  secretId: string;
  /** ID of the version to be destroyed. */
  versionId: string;
  /**
   * Time interval between the version destruction request and actual destruction.
   * Default value: 7 days.
   */
  pendingPeriod?: Duration | undefined;
}

export interface ScheduleVersionDestructionMetadata {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata";
  /** ID of the secret whose version is being scheduled for destruction. */
  secretId: string;
  /** ID of the version that is being scheduled for destruction. */
  versionId: string;
  /** Destruction timestamp. */
  destroyAt?: Date | undefined;
}

export interface CancelVersionDestructionRequest {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest";
  /** ID of the secret to cancel a version's destruction for. */
  secretId: string;
  /** ID of the secret whose scheduled destruction should be cancelled. */
  versionId: string;
}

export interface CancelVersionDestructionMetadata {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata";
  /** ID of the secret whose version's destruction is being cancelled. */
  secretId: string;
  /** ID of the version whose scheduled destruction is being cancelled. */
  versionId: string;
}

export interface ListSecretOperationsRequest {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest";
  /** ID of the secret to get operations for. */
  secretId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListSecretOperationsRequest.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSecretOperationsRequest.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSecretOperationsResponse {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse";
  /** List of operations for the specified secret. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSecretOperationsResponse.page_size], use the `next_page_token` as the value
   * for the [ListSecretOperationsResponse.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBasePayloadEntryChange(): PayloadEntryChange {
  return { $type: "yandex.cloud.lockbox.v1.PayloadEntryChange", key: "", textValue: undefined, binaryValue: undefined };
}

export const PayloadEntryChange = {
  $type: "yandex.cloud.lockbox.v1.PayloadEntryChange" as const,

  encode(message: PayloadEntryChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.textValue !== undefined) {
      writer.uint32(18).string(message.textValue);
    }
    if (message.binaryValue !== undefined) {
      writer.uint32(26).bytes(message.binaryValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PayloadEntryChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayloadEntryChange();
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

          message.textValue = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.binaryValue = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PayloadEntryChange {
    return {
      $type: PayloadEntryChange.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      textValue: isSet(object.textValue) ? globalThis.String(object.textValue) : undefined,
      binaryValue: isSet(object.binaryValue) ? Buffer.from(bytesFromBase64(object.binaryValue)) : undefined,
    };
  },

  toJSON(message: PayloadEntryChange): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.textValue !== undefined) {
      obj.textValue = message.textValue;
    }
    if (message.binaryValue !== undefined) {
      obj.binaryValue = base64FromBytes(message.binaryValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayloadEntryChange>, I>>(base?: I): PayloadEntryChange {
    return PayloadEntryChange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayloadEntryChange>, I>>(object: I): PayloadEntryChange {
    const message = createBasePayloadEntryChange();
    message.key = object.key ?? "";
    message.textValue = object.textValue ?? undefined;
    message.binaryValue = object.binaryValue ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PayloadEntryChange.$type, PayloadEntryChange);

function createBaseGetSecretRequest(): GetSecretRequest {
  return { $type: "yandex.cloud.lockbox.v1.GetSecretRequest", secretId: "" };
}

export const GetSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.GetSecretRequest" as const,

  encode(message: GetSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSecretRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSecretRequest {
    return {
      $type: GetSecretRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
    };
  },

  toJSON(message: GetSecretRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSecretRequest>, I>>(base?: I): GetSecretRequest {
    return GetSecretRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSecretRequest>, I>>(object: I): GetSecretRequest {
    const message = createBaseGetSecretRequest();
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSecretRequest.$type, GetSecretRequest);

function createBaseListSecretsRequest(): ListSecretsRequest {
  return { $type: "yandex.cloud.lockbox.v1.ListSecretsRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListSecretsRequest = {
  $type: "yandex.cloud.lockbox.v1.ListSecretsRequest" as const,

  encode(message: ListSecretsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecretsRequest();
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

  fromJSON(object: any): ListSecretsRequest {
    return {
      $type: ListSecretsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSecretsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListSecretsRequest>, I>>(base?: I): ListSecretsRequest {
    return ListSecretsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSecretsRequest>, I>>(object: I): ListSecretsRequest {
    const message = createBaseListSecretsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecretsRequest.$type, ListSecretsRequest);

function createBaseListSecretsResponse(): ListSecretsResponse {
  return { $type: "yandex.cloud.lockbox.v1.ListSecretsResponse", secrets: [], nextPageToken: "" };
}

export const ListSecretsResponse = {
  $type: "yandex.cloud.lockbox.v1.ListSecretsResponse" as const,

  encode(message: ListSecretsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecretsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secrets.push(Secret.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSecretsResponse {
    return {
      $type: ListSecretsResponse.$type,
      secrets: globalThis.Array.isArray(object?.secrets) ? object.secrets.map((e: any) => Secret.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSecretsResponse): unknown {
    const obj: any = {};
    if (message.secrets?.length) {
      obj.secrets = message.secrets.map((e) => Secret.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSecretsResponse>, I>>(base?: I): ListSecretsResponse {
    return ListSecretsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSecretsResponse>, I>>(object: I): ListSecretsResponse {
    const message = createBaseListSecretsResponse();
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecretsResponse.$type, ListSecretsResponse);

function createBaseCreateSecretRequest(): CreateSecretRequest {
  return {
    $type: "yandex.cloud.lockbox.v1.CreateSecretRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    kmsKeyId: "",
    versionDescription: "",
    versionPayloadEntries: [],
    deletionProtection: false,
  };
}

export const CreateSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest" as const,

  encode(message: CreateSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateSecretRequest_LabelsEntry.encode({
        $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.kmsKeyId !== "") {
      writer.uint32(42).string(message.kmsKeyId);
    }
    if (message.versionDescription !== "") {
      writer.uint32(50).string(message.versionDescription);
    }
    for (const v of message.versionPayloadEntries) {
      PayloadEntryChange.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(64).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSecretRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSecretRequest();
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

          const entry4 = CreateSecretRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.kmsKeyId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.versionDescription = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.versionPayloadEntries.push(PayloadEntryChange.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
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

  fromJSON(object: any): CreateSecretRequest {
    return {
      $type: CreateSecretRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      kmsKeyId: isSet(object.kmsKeyId) ? globalThis.String(object.kmsKeyId) : "",
      versionDescription: isSet(object.versionDescription) ? globalThis.String(object.versionDescription) : "",
      versionPayloadEntries: globalThis.Array.isArray(object?.versionPayloadEntries)
        ? object.versionPayloadEntries.map((e: any) => PayloadEntryChange.fromJSON(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: CreateSecretRequest): unknown {
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
    if (message.kmsKeyId !== "") {
      obj.kmsKeyId = message.kmsKeyId;
    }
    if (message.versionDescription !== "") {
      obj.versionDescription = message.versionDescription;
    }
    if (message.versionPayloadEntries?.length) {
      obj.versionPayloadEntries = message.versionPayloadEntries.map((e) => PayloadEntryChange.toJSON(e));
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSecretRequest>, I>>(base?: I): CreateSecretRequest {
    return CreateSecretRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSecretRequest>, I>>(object: I): CreateSecretRequest {
    const message = createBaseCreateSecretRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.kmsKeyId = object.kmsKeyId ?? "";
    message.versionDescription = object.versionDescription ?? "";
    message.versionPayloadEntries = object.versionPayloadEntries?.map((e) => PayloadEntryChange.fromPartial(e)) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateSecretRequest.$type, CreateSecretRequest);

function createBaseCreateSecretRequest_LabelsEntry(): CreateSecretRequest_LabelsEntry {
  return { $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry", key: "", value: "" };
}

export const CreateSecretRequest_LabelsEntry = {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry" as const,

  encode(message: CreateSecretRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSecretRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSecretRequest_LabelsEntry();
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

  fromJSON(object: any): CreateSecretRequest_LabelsEntry {
    return {
      $type: CreateSecretRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateSecretRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSecretRequest_LabelsEntry>, I>>(base?: I): CreateSecretRequest_LabelsEntry {
    return CreateSecretRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSecretRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateSecretRequest_LabelsEntry {
    const message = createBaseCreateSecretRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSecretRequest_LabelsEntry.$type, CreateSecretRequest_LabelsEntry);

function createBaseCreateSecretMetadata(): CreateSecretMetadata {
  return { $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata", secretId: "", versionId: "" };
}

export const CreateSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata" as const,

  encode(message: CreateSecretMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSecretMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

  fromJSON(object: any): CreateSecretMetadata {
    return {
      $type: CreateSecretMetadata.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
    };
  },

  toJSON(message: CreateSecretMetadata): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSecretMetadata>, I>>(base?: I): CreateSecretMetadata {
    return CreateSecretMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSecretMetadata>, I>>(object: I): CreateSecretMetadata {
    const message = createBaseCreateSecretMetadata();
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSecretMetadata.$type, CreateSecretMetadata);

function createBaseUpdateSecretRequest(): UpdateSecretRequest {
  return {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest",
    secretId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    deletionProtection: false,
  };
}

export const UpdateSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest" as const,

  encode(message: UpdateSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
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
      UpdateSecretRequest_LabelsEntry.encode({
        $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.deletionProtection === true) {
      writer.uint32(48).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecretRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecretRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

          const entry5 = UpdateSecretRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
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

  fromJSON(object: any): UpdateSecretRequest {
    return {
      $type: UpdateSecretRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: UpdateSecretRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
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
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSecretRequest>, I>>(base?: I): UpdateSecretRequest {
    return UpdateSecretRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecretRequest>, I>>(object: I): UpdateSecretRequest {
    const message = createBaseUpdateSecretRequest();
    message.secretId = object.secretId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
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

messageTypeRegistry.set(UpdateSecretRequest.$type, UpdateSecretRequest);

function createBaseUpdateSecretRequest_LabelsEntry(): UpdateSecretRequest_LabelsEntry {
  return { $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateSecretRequest_LabelsEntry = {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry" as const,

  encode(message: UpdateSecretRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecretRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecretRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateSecretRequest_LabelsEntry {
    return {
      $type: UpdateSecretRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateSecretRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSecretRequest_LabelsEntry>, I>>(base?: I): UpdateSecretRequest_LabelsEntry {
    return UpdateSecretRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecretRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateSecretRequest_LabelsEntry {
    const message = createBaseUpdateSecretRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSecretRequest_LabelsEntry.$type, UpdateSecretRequest_LabelsEntry);

function createBaseUpdateSecretMetadata(): UpdateSecretMetadata {
  return { $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata", secretId: "" };
}

export const UpdateSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata" as const,

  encode(message: UpdateSecretMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSecretMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSecretMetadata {
    return {
      $type: UpdateSecretMetadata.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
    };
  },

  toJSON(message: UpdateSecretMetadata): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSecretMetadata>, I>>(base?: I): UpdateSecretMetadata {
    return UpdateSecretMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSecretMetadata>, I>>(object: I): UpdateSecretMetadata {
    const message = createBaseUpdateSecretMetadata();
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSecretMetadata.$type, UpdateSecretMetadata);

function createBaseDeleteSecretRequest(): DeleteSecretRequest {
  return { $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest", secretId: "" };
}

export const DeleteSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest" as const,

  encode(message: DeleteSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecretRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSecretRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSecretRequest {
    return {
      $type: DeleteSecretRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
    };
  },

  toJSON(message: DeleteSecretRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSecretRequest>, I>>(base?: I): DeleteSecretRequest {
    return DeleteSecretRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSecretRequest>, I>>(object: I): DeleteSecretRequest {
    const message = createBaseDeleteSecretRequest();
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSecretRequest.$type, DeleteSecretRequest);

function createBaseDeleteSecretMetadata(): DeleteSecretMetadata {
  return { $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata", secretId: "" };
}

export const DeleteSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata" as const,

  encode(message: DeleteSecretMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSecretMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteSecretMetadata {
    return {
      $type: DeleteSecretMetadata.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
    };
  },

  toJSON(message: DeleteSecretMetadata): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSecretMetadata>, I>>(base?: I): DeleteSecretMetadata {
    return DeleteSecretMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSecretMetadata>, I>>(object: I): DeleteSecretMetadata {
    const message = createBaseDeleteSecretMetadata();
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSecretMetadata.$type, DeleteSecretMetadata);

function createBaseActivateSecretRequest(): ActivateSecretRequest {
  return { $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest", secretId: "" };
}

export const ActivateSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest" as const,

  encode(message: ActivateSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateSecretRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateSecretRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateSecretRequest {
    return {
      $type: ActivateSecretRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
    };
  },

  toJSON(message: ActivateSecretRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateSecretRequest>, I>>(base?: I): ActivateSecretRequest {
    return ActivateSecretRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateSecretRequest>, I>>(object: I): ActivateSecretRequest {
    const message = createBaseActivateSecretRequest();
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateSecretRequest.$type, ActivateSecretRequest);

function createBaseActivateSecretMetadata(): ActivateSecretMetadata {
  return { $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata", secretId: "" };
}

export const ActivateSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata" as const,

  encode(message: ActivateSecretMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateSecretMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateSecretMetadata {
    return {
      $type: ActivateSecretMetadata.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
    };
  },

  toJSON(message: ActivateSecretMetadata): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateSecretMetadata>, I>>(base?: I): ActivateSecretMetadata {
    return ActivateSecretMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateSecretMetadata>, I>>(object: I): ActivateSecretMetadata {
    const message = createBaseActivateSecretMetadata();
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateSecretMetadata.$type, ActivateSecretMetadata);

function createBaseDeactivateSecretRequest(): DeactivateSecretRequest {
  return { $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest", secretId: "" };
}

export const DeactivateSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest" as const,

  encode(message: DeactivateSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSecretRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateSecretRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeactivateSecretRequest {
    return {
      $type: DeactivateSecretRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
    };
  },

  toJSON(message: DeactivateSecretRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateSecretRequest>, I>>(base?: I): DeactivateSecretRequest {
    return DeactivateSecretRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateSecretRequest>, I>>(object: I): DeactivateSecretRequest {
    const message = createBaseDeactivateSecretRequest();
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateSecretRequest.$type, DeactivateSecretRequest);

function createBaseDeactivateSecretMetadata(): DeactivateSecretMetadata {
  return { $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata", secretId: "" };
}

export const DeactivateSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata" as const,

  encode(message: DeactivateSecretMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateSecretMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeactivateSecretMetadata {
    return {
      $type: DeactivateSecretMetadata.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
    };
  },

  toJSON(message: DeactivateSecretMetadata): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateSecretMetadata>, I>>(base?: I): DeactivateSecretMetadata {
    return DeactivateSecretMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateSecretMetadata>, I>>(object: I): DeactivateSecretMetadata {
    const message = createBaseDeactivateSecretMetadata();
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateSecretMetadata.$type, DeactivateSecretMetadata);

function createBaseAddVersionRequest(): AddVersionRequest {
  return {
    $type: "yandex.cloud.lockbox.v1.AddVersionRequest",
    secretId: "",
    description: "",
    payloadEntries: [],
    baseVersionId: "",
  };
}

export const AddVersionRequest = {
  $type: "yandex.cloud.lockbox.v1.AddVersionRequest" as const,

  encode(message: AddVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.payloadEntries) {
      PayloadEntryChange.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.baseVersionId !== "") {
      writer.uint32(34).string(message.baseVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddVersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

          message.payloadEntries.push(PayloadEntryChange.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.baseVersionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddVersionRequest {
    return {
      $type: AddVersionRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      payloadEntries: globalThis.Array.isArray(object?.payloadEntries)
        ? object.payloadEntries.map((e: any) => PayloadEntryChange.fromJSON(e))
        : [],
      baseVersionId: isSet(object.baseVersionId) ? globalThis.String(object.baseVersionId) : "",
    };
  },

  toJSON(message: AddVersionRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.payloadEntries?.length) {
      obj.payloadEntries = message.payloadEntries.map((e) => PayloadEntryChange.toJSON(e));
    }
    if (message.baseVersionId !== "") {
      obj.baseVersionId = message.baseVersionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddVersionRequest>, I>>(base?: I): AddVersionRequest {
    return AddVersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddVersionRequest>, I>>(object: I): AddVersionRequest {
    const message = createBaseAddVersionRequest();
    message.secretId = object.secretId ?? "";
    message.description = object.description ?? "";
    message.payloadEntries = object.payloadEntries?.map((e) => PayloadEntryChange.fromPartial(e)) || [];
    message.baseVersionId = object.baseVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddVersionRequest.$type, AddVersionRequest);

function createBaseAddVersionMetadata(): AddVersionMetadata {
  return { $type: "yandex.cloud.lockbox.v1.AddVersionMetadata", secretId: "", versionId: "" };
}

export const AddVersionMetadata = {
  $type: "yandex.cloud.lockbox.v1.AddVersionMetadata" as const,

  encode(message: AddVersionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddVersionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddVersionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

  fromJSON(object: any): AddVersionMetadata {
    return {
      $type: AddVersionMetadata.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
    };
  },

  toJSON(message: AddVersionMetadata): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddVersionMetadata>, I>>(base?: I): AddVersionMetadata {
    return AddVersionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddVersionMetadata>, I>>(object: I): AddVersionMetadata {
    const message = createBaseAddVersionMetadata();
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddVersionMetadata.$type, AddVersionMetadata);

function createBaseListVersionsRequest(): ListVersionsRequest {
  return { $type: "yandex.cloud.lockbox.v1.ListVersionsRequest", secretId: "", pageSize: 0, pageToken: "" };
}

export const ListVersionsRequest = {
  $type: "yandex.cloud.lockbox.v1.ListVersionsRequest" as const,

  encode(message: ListVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

  fromJSON(object: any): ListVersionsRequest {
    return {
      $type: ListVersionsRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListVersionsRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListVersionsRequest>, I>>(base?: I): ListVersionsRequest {
    return ListVersionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListVersionsRequest>, I>>(object: I): ListVersionsRequest {
    const message = createBaseListVersionsRequest();
    message.secretId = object.secretId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVersionsRequest.$type, ListVersionsRequest);

function createBaseListVersionsResponse(): ListVersionsResponse {
  return { $type: "yandex.cloud.lockbox.v1.ListVersionsResponse", versions: [], nextPageToken: "" };
}

export const ListVersionsResponse = {
  $type: "yandex.cloud.lockbox.v1.ListVersionsResponse" as const,

  encode(message: ListVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.versions.push(Version.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListVersionsResponse {
    return {
      $type: ListVersionsResponse.$type,
      versions: globalThis.Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListVersionsResponse): unknown {
    const obj: any = {};
    if (message.versions?.length) {
      obj.versions = message.versions.map((e) => Version.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListVersionsResponse>, I>>(base?: I): ListVersionsResponse {
    return ListVersionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListVersionsResponse>, I>>(object: I): ListVersionsResponse {
    const message = createBaseListVersionsResponse();
    message.versions = object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVersionsResponse.$type, ListVersionsResponse);

function createBaseScheduleVersionDestructionRequest(): ScheduleVersionDestructionRequest {
  return {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest",
    secretId: "",
    versionId: "",
    pendingPeriod: undefined,
  };
}

export const ScheduleVersionDestructionRequest = {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest" as const,

  encode(message: ScheduleVersionDestructionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.pendingPeriod !== undefined) {
      Duration.encode(message.pendingPeriod, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleVersionDestructionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleVersionDestructionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

  fromJSON(object: any): ScheduleVersionDestructionRequest {
    return {
      $type: ScheduleVersionDestructionRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      pendingPeriod: isSet(object.pendingPeriod) ? Duration.fromJSON(object.pendingPeriod) : undefined,
    };
  },

  toJSON(message: ScheduleVersionDestructionRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.pendingPeriod !== undefined) {
      obj.pendingPeriod = Duration.toJSON(message.pendingPeriod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScheduleVersionDestructionRequest>, I>>(
    base?: I,
  ): ScheduleVersionDestructionRequest {
    return ScheduleVersionDestructionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScheduleVersionDestructionRequest>, I>>(
    object: I,
  ): ScheduleVersionDestructionRequest {
    const message = createBaseScheduleVersionDestructionRequest();
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    message.pendingPeriod = (object.pendingPeriod !== undefined && object.pendingPeriod !== null)
      ? Duration.fromPartial(object.pendingPeriod)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ScheduleVersionDestructionRequest.$type, ScheduleVersionDestructionRequest);

function createBaseScheduleVersionDestructionMetadata(): ScheduleVersionDestructionMetadata {
  return {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata",
    secretId: "",
    versionId: "",
    destroyAt: undefined,
  };
}

export const ScheduleVersionDestructionMetadata = {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata" as const,

  encode(message: ScheduleVersionDestructionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.destroyAt !== undefined) {
      Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleVersionDestructionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleVersionDestructionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

  fromJSON(object: any): ScheduleVersionDestructionMetadata {
    return {
      $type: ScheduleVersionDestructionMetadata.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      destroyAt: isSet(object.destroyAt) ? fromJsonTimestamp(object.destroyAt) : undefined,
    };
  },

  toJSON(message: ScheduleVersionDestructionMetadata): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.destroyAt !== undefined) {
      obj.destroyAt = message.destroyAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScheduleVersionDestructionMetadata>, I>>(
    base?: I,
  ): ScheduleVersionDestructionMetadata {
    return ScheduleVersionDestructionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScheduleVersionDestructionMetadata>, I>>(
    object: I,
  ): ScheduleVersionDestructionMetadata {
    const message = createBaseScheduleVersionDestructionMetadata();
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    message.destroyAt = object.destroyAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ScheduleVersionDestructionMetadata.$type, ScheduleVersionDestructionMetadata);

function createBaseCancelVersionDestructionRequest(): CancelVersionDestructionRequest {
  return { $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest", secretId: "", versionId: "" };
}

export const CancelVersionDestructionRequest = {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest" as const,

  encode(message: CancelVersionDestructionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelVersionDestructionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelVersionDestructionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

  fromJSON(object: any): CancelVersionDestructionRequest {
    return {
      $type: CancelVersionDestructionRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
    };
  },

  toJSON(message: CancelVersionDestructionRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CancelVersionDestructionRequest>, I>>(base?: I): CancelVersionDestructionRequest {
    return CancelVersionDestructionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CancelVersionDestructionRequest>, I>>(
    object: I,
  ): CancelVersionDestructionRequest {
    const message = createBaseCancelVersionDestructionRequest();
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CancelVersionDestructionRequest.$type, CancelVersionDestructionRequest);

function createBaseCancelVersionDestructionMetadata(): CancelVersionDestructionMetadata {
  return { $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata", secretId: "", versionId: "" };
}

export const CancelVersionDestructionMetadata = {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata" as const,

  encode(message: CancelVersionDestructionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelVersionDestructionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelVersionDestructionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

  fromJSON(object: any): CancelVersionDestructionMetadata {
    return {
      $type: CancelVersionDestructionMetadata.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
    };
  },

  toJSON(message: CancelVersionDestructionMetadata): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CancelVersionDestructionMetadata>, I>>(
    base?: I,
  ): CancelVersionDestructionMetadata {
    return CancelVersionDestructionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CancelVersionDestructionMetadata>, I>>(
    object: I,
  ): CancelVersionDestructionMetadata {
    const message = createBaseCancelVersionDestructionMetadata();
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CancelVersionDestructionMetadata.$type, CancelVersionDestructionMetadata);

function createBaseListSecretOperationsRequest(): ListSecretOperationsRequest {
  return { $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest", secretId: "", pageSize: 0, pageToken: "" };
}

export const ListSecretOperationsRequest = {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest" as const,

  encode(message: ListSecretOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecretOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secretId = reader.string();
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

  fromJSON(object: any): ListSecretOperationsRequest {
    return {
      $type: ListSecretOperationsRequest.$type,
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSecretOperationsRequest): unknown {
    const obj: any = {};
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSecretOperationsRequest>, I>>(base?: I): ListSecretOperationsRequest {
    return ListSecretOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSecretOperationsRequest>, I>>(object: I): ListSecretOperationsRequest {
    const message = createBaseListSecretOperationsRequest();
    message.secretId = object.secretId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecretOperationsRequest.$type, ListSecretOperationsRequest);

function createBaseListSecretOperationsResponse(): ListSecretOperationsResponse {
  return { $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListSecretOperationsResponse = {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse" as const,

  encode(message: ListSecretOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecretOperationsResponse();
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

  fromJSON(object: any): ListSecretOperationsResponse {
    return {
      $type: ListSecretOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSecretOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSecretOperationsResponse>, I>>(base?: I): ListSecretOperationsResponse {
    return ListSecretOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSecretOperationsResponse>, I>>(object: I): ListSecretOperationsResponse {
    const message = createBaseListSecretOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecretOperationsResponse.$type, ListSecretOperationsResponse);

/** A set of methods for managing secrets. */
export type SecretServiceService = typeof SecretServiceService;
export const SecretServiceService = {
  /**
   * Returns the specified secret.
   *
   * To get the list of all available secrets, make a [List] request.
   * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
   */
  get: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSecretRequest) => Buffer.from(GetSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSecretRequest.decode(value),
    responseSerialize: (value: Secret) => Buffer.from(Secret.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Secret.decode(value),
  },
  /** Retrieves the list of secrets in the specified folder. */
  list: {
    path: "/yandex.cloud.lockbox.v1.SecretService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSecretsRequest) => Buffer.from(ListSecretsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSecretsRequest.decode(value),
    responseSerialize: (value: ListSecretsResponse) => Buffer.from(ListSecretsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSecretsResponse.decode(value),
  },
  /** Creates a secret in the specified folder. */
  create: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSecretRequest) => Buffer.from(CreateSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSecretRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified secret. */
  update: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSecretRequest) => Buffer.from(UpdateSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSecretRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified secret. */
  delete: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSecretRequest) => Buffer.from(DeleteSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSecretRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Activates the specified secret. */
  activate: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateSecretRequest) => Buffer.from(ActivateSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateSecretRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deactivates the specified secret. */
  deactivate: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Deactivate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeactivateSecretRequest) => Buffer.from(DeactivateSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeactivateSecretRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of versions of the specified secret. */
  listVersions: {
    path: "/yandex.cloud.lockbox.v1.SecretService/ListVersions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListVersionsRequest) => Buffer.from(ListVersionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListVersionsRequest.decode(value),
    responseSerialize: (value: ListVersionsResponse) => Buffer.from(ListVersionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListVersionsResponse.decode(value),
  },
  /** Adds new version based on a previous one. */
  addVersion: {
    path: "/yandex.cloud.lockbox.v1.SecretService/AddVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddVersionRequest) => Buffer.from(AddVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddVersionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Schedules the specified version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction: {
    path: "/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScheduleVersionDestructionRequest) =>
      Buffer.from(ScheduleVersionDestructionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScheduleVersionDestructionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction: {
    path: "/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CancelVersionDestructionRequest) =>
      Buffer.from(CancelVersionDestructionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CancelVersionDestructionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified secret. */
  listOperations: {
    path: "/yandex.cloud.lockbox.v1.SecretService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSecretOperationsRequest) =>
      Buffer.from(ListSecretOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSecretOperationsRequest.decode(value),
    responseSerialize: (value: ListSecretOperationsResponse) =>
      Buffer.from(ListSecretOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSecretOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified secret. */
  listAccessBindings: {
    path: "/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the secret. */
  setAccessBindings: {
    path: "/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the secret. */
  updateAccessBindings: {
    path: "/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface SecretServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified secret.
   *
   * To get the list of all available secrets, make a [List] request.
   * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
   */
  get: handleUnaryCall<GetSecretRequest, Secret>;
  /** Retrieves the list of secrets in the specified folder. */
  list: handleUnaryCall<ListSecretsRequest, ListSecretsResponse>;
  /** Creates a secret in the specified folder. */
  create: handleUnaryCall<CreateSecretRequest, Operation>;
  /** Updates the specified secret. */
  update: handleUnaryCall<UpdateSecretRequest, Operation>;
  /** Deletes the specified secret. */
  delete: handleUnaryCall<DeleteSecretRequest, Operation>;
  /** Activates the specified secret. */
  activate: handleUnaryCall<ActivateSecretRequest, Operation>;
  /** Deactivates the specified secret. */
  deactivate: handleUnaryCall<DeactivateSecretRequest, Operation>;
  /** Retrieves the list of versions of the specified secret. */
  listVersions: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
  /** Adds new version based on a previous one. */
  addVersion: handleUnaryCall<AddVersionRequest, Operation>;
  /**
   * Schedules the specified version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction: handleUnaryCall<ScheduleVersionDestructionRequest, Operation>;
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction: handleUnaryCall<CancelVersionDestructionRequest, Operation>;
  /** Lists operations for the specified secret. */
  listOperations: handleUnaryCall<ListSecretOperationsRequest, ListSecretOperationsResponse>;
  /** Lists existing access bindings for the specified secret. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the secret. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the secret. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface SecretServiceClient extends Client {
  /**
   * Returns the specified secret.
   *
   * To get the list of all available secrets, make a [List] request.
   * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
   */
  get(request: GetSecretRequest, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
  get(
    request: GetSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Secret) => void,
  ): ClientUnaryCall;
  get(
    request: GetSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Secret) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of secrets in the specified folder. */
  list(
    request: ListSecretsRequest,
    callback: (error: ServiceError | null, response: ListSecretsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSecretsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSecretsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSecretsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSecretsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a secret in the specified folder. */
  create(
    request: CreateSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified secret. */
  update(
    request: UpdateSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified secret. */
  delete(
    request: DeleteSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Activates the specified secret. */
  activate(
    request: ActivateSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deactivates the specified secret. */
  deactivate(
    request: DeactivateSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of versions of the specified secret. */
  listVersions(
    request: ListVersionsRequest,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  listVersions(
    request: ListVersionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  listVersions(
    request: ListVersionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  /** Adds new version based on a previous one. */
  addVersion(
    request: AddVersionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addVersion(
    request: AddVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addVersion(
    request: AddVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Schedules the specified version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction(
    request: ScheduleVersionDestructionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  scheduleVersionDestruction(
    request: ScheduleVersionDestructionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  scheduleVersionDestruction(
    request: ScheduleVersionDestructionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction(
    request: CancelVersionDestructionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  cancelVersionDestruction(
    request: CancelVersionDestructionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  cancelVersionDestruction(
    request: CancelVersionDestructionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified secret. */
  listOperations(
    request: ListSecretOperationsRequest,
    callback: (error: ServiceError | null, response: ListSecretOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSecretOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSecretOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListSecretOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSecretOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified secret. */
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
  /** Sets access bindings for the secret. */
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
  /** Updates access bindings for the secret. */
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

export const SecretServiceClient = makeGenericClientConstructor(
  SecretServiceService,
  "yandex.cloud.lockbox.v1.SecretService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SecretServiceClient;
  service: typeof SecretServiceService;
  serviceName: string;
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
