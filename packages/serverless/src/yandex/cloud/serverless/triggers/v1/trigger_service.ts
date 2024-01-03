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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Trigger, Trigger_Rule } from "./trigger";

export const protobufPackage = "yandex.cloud.serverless.triggers.v1";

export interface GetTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest";
  /**
   * ID of the trigger to return.
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
}

export interface ListTriggersRequest {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest";
  /**
   * ID of the folder to list triggers in.
   *
   * To get a folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListTriggersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListTriggersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters triggers listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-trigger`.
   */
  filter: string;
}

export interface ListTriggersResponse {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse";
  /** List of triggers in the specified folder. */
  triggers: Trigger[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListTriggersRequest.page_size], use `nextPageToken` as the value
   * for the [ListTriggersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest";
  /**
   * ID of the folder to create a trigger in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the trigger.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the trigger. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Trigger type. */
  rule?: Trigger_Rule | undefined;
}

export interface CreateTriggerRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata";
  /** ID of the trigger that is being created. */
  triggerId: string;
}

export interface UpdateTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest";
  /**
   * ID of the trigger to update.
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
  /** Field mask that specifies which attributes of the trigger should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the trigger.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the trigger. */
  description: string;
  /**
   * Trigger labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label, request the current set of labels with a [TriggerService.Get] request.
   */
  labels: { [key: string]: string };
  /** New parameters for trigger. */
  rule?: Trigger_Rule | undefined;
}

export interface UpdateTriggerRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata";
  /** ID of the trigger that is being updated. */
  triggerId: string;
}

export interface DeleteTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest";
  /**
   * ID of the trigger to delete.
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
}

export interface DeleteTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata";
  /** ID of the trigger that is being deleted. */
  triggerId: string;
}

export interface PauseTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest";
  /**
   * ID of the trigger to pause
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
}

export interface PauseTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata";
  /** ID of the trigger that is being paused. */
  triggerId: string;
}

export interface ResumeTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest";
  /**
   * ID of the trigger to pause
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
}

export interface ResumeTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata";
  /** ID of the trigger that is being paused. */
  triggerId: string;
}

export interface ListTriggerOperationsRequest {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest";
  /** ID of the trigger to list operations for. */
  triggerId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListTriggerOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListTriggerOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-function`.
   */
  filter: string;
}

export interface ListTriggerOperationsResponse {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse";
  /** List of operations for the specified trigger. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListTriggerOperationsRequest.page_size], use `nextPageToken` as the value
   * for the [ListTriggerOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetTriggerRequest(): GetTriggerRequest {
  return { $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest", triggerId: "" };
}

export const GetTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest" as const,

  encode(message: GetTriggerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTriggerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTriggerRequest {
    return {
      $type: GetTriggerRequest.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
    };
  },

  toJSON(message: GetTriggerRequest): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTriggerRequest>, I>>(base?: I): GetTriggerRequest {
    return GetTriggerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTriggerRequest>, I>>(object: I): GetTriggerRequest {
    const message = createBaseGetTriggerRequest();
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTriggerRequest.$type, GetTriggerRequest);

function createBaseListTriggersRequest(): ListTriggersRequest {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListTriggersRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest" as const,

  encode(message: ListTriggersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTriggersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTriggersRequest();
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

  fromJSON(object: any): ListTriggersRequest {
    return {
      $type: ListTriggersRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListTriggersRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListTriggersRequest>, I>>(base?: I): ListTriggersRequest {
    return ListTriggersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTriggersRequest>, I>>(object: I): ListTriggersRequest {
    const message = createBaseListTriggersRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTriggersRequest.$type, ListTriggersRequest);

function createBaseListTriggersResponse(): ListTriggersResponse {
  return { $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse", triggers: [], nextPageToken: "" };
}

export const ListTriggersResponse = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse" as const,

  encode(message: ListTriggersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.triggers) {
      Trigger.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTriggersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTriggersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggers.push(Trigger.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTriggersResponse {
    return {
      $type: ListTriggersResponse.$type,
      triggers: globalThis.Array.isArray(object?.triggers) ? object.triggers.map((e: any) => Trigger.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTriggersResponse): unknown {
    const obj: any = {};
    if (message.triggers?.length) {
      obj.triggers = message.triggers.map((e) => Trigger.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTriggersResponse>, I>>(base?: I): ListTriggersResponse {
    return ListTriggersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTriggersResponse>, I>>(object: I): ListTriggersResponse {
    const message = createBaseListTriggersResponse();
    message.triggers = object.triggers?.map((e) => Trigger.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTriggersResponse.$type, ListTriggersResponse);

function createBaseCreateTriggerRequest(): CreateTriggerRequest {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    rule: undefined,
  };
}

export const CreateTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest" as const,

  encode(message: CreateTriggerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateTriggerRequest_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.rule !== undefined) {
      Trigger_Rule.encode(message.rule, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTriggerRequest();
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

          const entry4 = CreateTriggerRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rule = Trigger_Rule.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTriggerRequest {
    return {
      $type: CreateTriggerRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      rule: isSet(object.rule) ? Trigger_Rule.fromJSON(object.rule) : undefined,
    };
  },

  toJSON(message: CreateTriggerRequest): unknown {
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
    if (message.rule !== undefined) {
      obj.rule = Trigger_Rule.toJSON(message.rule);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTriggerRequest>, I>>(base?: I): CreateTriggerRequest {
    return CreateTriggerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTriggerRequest>, I>>(object: I): CreateTriggerRequest {
    const message = createBaseCreateTriggerRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.rule = (object.rule !== undefined && object.rule !== null)
      ? Trigger_Rule.fromPartial(object.rule)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateTriggerRequest.$type, CreateTriggerRequest);

function createBaseCreateTriggerRequest_LabelsEntry(): CreateTriggerRequest_LabelsEntry {
  return { $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry", key: "", value: "" };
}

export const CreateTriggerRequest_LabelsEntry = {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry" as const,

  encode(message: CreateTriggerRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTriggerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTriggerRequest_LabelsEntry();
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

  fromJSON(object: any): CreateTriggerRequest_LabelsEntry {
    return {
      $type: CreateTriggerRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateTriggerRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTriggerRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateTriggerRequest_LabelsEntry {
    return CreateTriggerRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTriggerRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateTriggerRequest_LabelsEntry {
    const message = createBaseCreateTriggerRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTriggerRequest_LabelsEntry.$type, CreateTriggerRequest_LabelsEntry);

function createBaseCreateTriggerMetadata(): CreateTriggerMetadata {
  return { $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata", triggerId: "" };
}

export const CreateTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata" as const,

  encode(message: CreateTriggerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTriggerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTriggerMetadata {
    return {
      $type: CreateTriggerMetadata.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
    };
  },

  toJSON(message: CreateTriggerMetadata): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTriggerMetadata>, I>>(base?: I): CreateTriggerMetadata {
    return CreateTriggerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTriggerMetadata>, I>>(object: I): CreateTriggerMetadata {
    const message = createBaseCreateTriggerMetadata();
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTriggerMetadata.$type, CreateTriggerMetadata);

function createBaseUpdateTriggerRequest(): UpdateTriggerRequest {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest",
    triggerId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    rule: undefined,
  };
}

export const UpdateTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest" as const,

  encode(message: UpdateTriggerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
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
      UpdateTriggerRequest_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.rule !== undefined) {
      Trigger_Rule.encode(message.rule, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTriggerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
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

          const entry5 = UpdateTriggerRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.rule = Trigger_Rule.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTriggerRequest {
    return {
      $type: UpdateTriggerRequest.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      rule: isSet(object.rule) ? Trigger_Rule.fromJSON(object.rule) : undefined,
    };
  },

  toJSON(message: UpdateTriggerRequest): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
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
    if (message.rule !== undefined) {
      obj.rule = Trigger_Rule.toJSON(message.rule);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTriggerRequest>, I>>(base?: I): UpdateTriggerRequest {
    return UpdateTriggerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTriggerRequest>, I>>(object: I): UpdateTriggerRequest {
    const message = createBaseUpdateTriggerRequest();
    message.triggerId = object.triggerId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.rule = (object.rule !== undefined && object.rule !== null)
      ? Trigger_Rule.fromPartial(object.rule)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateTriggerRequest.$type, UpdateTriggerRequest);

function createBaseUpdateTriggerRequest_LabelsEntry(): UpdateTriggerRequest_LabelsEntry {
  return { $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateTriggerRequest_LabelsEntry = {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry" as const,

  encode(message: UpdateTriggerRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTriggerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTriggerRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateTriggerRequest_LabelsEntry {
    return {
      $type: UpdateTriggerRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateTriggerRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTriggerRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateTriggerRequest_LabelsEntry {
    return UpdateTriggerRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTriggerRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateTriggerRequest_LabelsEntry {
    const message = createBaseUpdateTriggerRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTriggerRequest_LabelsEntry.$type, UpdateTriggerRequest_LabelsEntry);

function createBaseUpdateTriggerMetadata(): UpdateTriggerMetadata {
  return { $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata", triggerId: "" };
}

export const UpdateTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata" as const,

  encode(message: UpdateTriggerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTriggerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTriggerMetadata {
    return {
      $type: UpdateTriggerMetadata.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
    };
  },

  toJSON(message: UpdateTriggerMetadata): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTriggerMetadata>, I>>(base?: I): UpdateTriggerMetadata {
    return UpdateTriggerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTriggerMetadata>, I>>(object: I): UpdateTriggerMetadata {
    const message = createBaseUpdateTriggerMetadata();
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTriggerMetadata.$type, UpdateTriggerMetadata);

function createBaseDeleteTriggerRequest(): DeleteTriggerRequest {
  return { $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest", triggerId: "" };
}

export const DeleteTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest" as const,

  encode(message: DeleteTriggerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTriggerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTriggerRequest {
    return {
      $type: DeleteTriggerRequest.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
    };
  },

  toJSON(message: DeleteTriggerRequest): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTriggerRequest>, I>>(base?: I): DeleteTriggerRequest {
    return DeleteTriggerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTriggerRequest>, I>>(object: I): DeleteTriggerRequest {
    const message = createBaseDeleteTriggerRequest();
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTriggerRequest.$type, DeleteTriggerRequest);

function createBaseDeleteTriggerMetadata(): DeleteTriggerMetadata {
  return { $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata", triggerId: "" };
}

export const DeleteTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata" as const,

  encode(message: DeleteTriggerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTriggerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTriggerMetadata {
    return {
      $type: DeleteTriggerMetadata.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
    };
  },

  toJSON(message: DeleteTriggerMetadata): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTriggerMetadata>, I>>(base?: I): DeleteTriggerMetadata {
    return DeleteTriggerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTriggerMetadata>, I>>(object: I): DeleteTriggerMetadata {
    const message = createBaseDeleteTriggerMetadata();
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTriggerMetadata.$type, DeleteTriggerMetadata);

function createBasePauseTriggerRequest(): PauseTriggerRequest {
  return { $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest", triggerId: "" };
}

export const PauseTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest" as const,

  encode(message: PauseTriggerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePauseTriggerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PauseTriggerRequest {
    return {
      $type: PauseTriggerRequest.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
    };
  },

  toJSON(message: PauseTriggerRequest): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PauseTriggerRequest>, I>>(base?: I): PauseTriggerRequest {
    return PauseTriggerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PauseTriggerRequest>, I>>(object: I): PauseTriggerRequest {
    const message = createBasePauseTriggerRequest();
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseTriggerRequest.$type, PauseTriggerRequest);

function createBasePauseTriggerMetadata(): PauseTriggerMetadata {
  return { $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata", triggerId: "" };
}

export const PauseTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata" as const,

  encode(message: PauseTriggerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePauseTriggerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PauseTriggerMetadata {
    return {
      $type: PauseTriggerMetadata.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
    };
  },

  toJSON(message: PauseTriggerMetadata): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PauseTriggerMetadata>, I>>(base?: I): PauseTriggerMetadata {
    return PauseTriggerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PauseTriggerMetadata>, I>>(object: I): PauseTriggerMetadata {
    const message = createBasePauseTriggerMetadata();
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseTriggerMetadata.$type, PauseTriggerMetadata);

function createBaseResumeTriggerRequest(): ResumeTriggerRequest {
  return { $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest", triggerId: "" };
}

export const ResumeTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest" as const,

  encode(message: ResumeTriggerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeTriggerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResumeTriggerRequest {
    return {
      $type: ResumeTriggerRequest.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
    };
  },

  toJSON(message: ResumeTriggerRequest): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeTriggerRequest>, I>>(base?: I): ResumeTriggerRequest {
    return ResumeTriggerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResumeTriggerRequest>, I>>(object: I): ResumeTriggerRequest {
    const message = createBaseResumeTriggerRequest();
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeTriggerRequest.$type, ResumeTriggerRequest);

function createBaseResumeTriggerMetadata(): ResumeTriggerMetadata {
  return { $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata", triggerId: "" };
}

export const ResumeTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata" as const,

  encode(message: ResumeTriggerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeTriggerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResumeTriggerMetadata {
    return {
      $type: ResumeTriggerMetadata.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
    };
  },

  toJSON(message: ResumeTriggerMetadata): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeTriggerMetadata>, I>>(base?: I): ResumeTriggerMetadata {
    return ResumeTriggerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResumeTriggerMetadata>, I>>(object: I): ResumeTriggerMetadata {
    const message = createBaseResumeTriggerMetadata();
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeTriggerMetadata.$type, ResumeTriggerMetadata);

function createBaseListTriggerOperationsRequest(): ListTriggerOperationsRequest {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest",
    triggerId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListTriggerOperationsRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest" as const,

  encode(message: ListTriggerOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTriggerOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTriggerOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerId = reader.string();
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

  fromJSON(object: any): ListTriggerOperationsRequest {
    return {
      $type: ListTriggerOperationsRequest.$type,
      triggerId: isSet(object.triggerId) ? globalThis.String(object.triggerId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListTriggerOperationsRequest): unknown {
    const obj: any = {};
    if (message.triggerId !== "") {
      obj.triggerId = message.triggerId;
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

  create<I extends Exact<DeepPartial<ListTriggerOperationsRequest>, I>>(base?: I): ListTriggerOperationsRequest {
    return ListTriggerOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTriggerOperationsRequest>, I>>(object: I): ListTriggerOperationsRequest {
    const message = createBaseListTriggerOperationsRequest();
    message.triggerId = object.triggerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTriggerOperationsRequest.$type, ListTriggerOperationsRequest);

function createBaseListTriggerOperationsResponse(): ListTriggerOperationsResponse {
  return {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListTriggerOperationsResponse = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse" as const,

  encode(message: ListTriggerOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTriggerOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTriggerOperationsResponse();
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

  fromJSON(object: any): ListTriggerOperationsResponse {
    return {
      $type: ListTriggerOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTriggerOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTriggerOperationsResponse>, I>>(base?: I): ListTriggerOperationsResponse {
    return ListTriggerOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTriggerOperationsResponse>, I>>(
    object: I,
  ): ListTriggerOperationsResponse {
    const message = createBaseListTriggerOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTriggerOperationsResponse.$type, ListTriggerOperationsResponse);

/** A set of methods for managing triggers for serverless functions. */
export type TriggerServiceService = typeof TriggerServiceService;
export const TriggerServiceService = {
  /**
   * Returns the specified trigger.
   *
   * To get the list of all available triggers, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTriggerRequest) => Buffer.from(GetTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTriggerRequest.decode(value),
    responseSerialize: (value: Trigger) => Buffer.from(Trigger.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Trigger.decode(value),
  },
  /** Retrieves the list of triggers in the specified folder. */
  list: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTriggersRequest) => Buffer.from(ListTriggersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTriggersRequest.decode(value),
    responseSerialize: (value: ListTriggersResponse) => Buffer.from(ListTriggersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTriggersResponse.decode(value),
  },
  /** Creates a trigger in the specified folder. */
  create: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTriggerRequest) => Buffer.from(CreateTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTriggerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified trigger. */
  update: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTriggerRequest) => Buffer.from(UpdateTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTriggerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified trigger. */
  delete: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteTriggerRequest) => Buffer.from(DeleteTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteTriggerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Pauses the specified trigger. */
  pause: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Pause",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PauseTriggerRequest) => Buffer.from(PauseTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PauseTriggerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Restarts the specified trigger. */
  resume: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Resume",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ResumeTriggerRequest) => Buffer.from(ResumeTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ResumeTriggerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified trigger. */
  listOperations: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTriggerOperationsRequest) =>
      Buffer.from(ListTriggerOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTriggerOperationsRequest.decode(value),
    responseSerialize: (value: ListTriggerOperationsResponse) =>
      Buffer.from(ListTriggerOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTriggerOperationsResponse.decode(value),
  },
} as const;

export interface TriggerServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified trigger.
   *
   * To get the list of all available triggers, make a [List] request.
   */
  get: handleUnaryCall<GetTriggerRequest, Trigger>;
  /** Retrieves the list of triggers in the specified folder. */
  list: handleUnaryCall<ListTriggersRequest, ListTriggersResponse>;
  /** Creates a trigger in the specified folder. */
  create: handleUnaryCall<CreateTriggerRequest, Operation>;
  /** Updates the specified trigger. */
  update: handleUnaryCall<UpdateTriggerRequest, Operation>;
  /** Deletes the specified trigger. */
  delete: handleUnaryCall<DeleteTriggerRequest, Operation>;
  /** Pauses the specified trigger. */
  pause: handleUnaryCall<PauseTriggerRequest, Operation>;
  /** Restarts the specified trigger. */
  resume: handleUnaryCall<ResumeTriggerRequest, Operation>;
  /** Lists operations for the specified trigger. */
  listOperations: handleUnaryCall<ListTriggerOperationsRequest, ListTriggerOperationsResponse>;
}

export interface TriggerServiceClient extends Client {
  /**
   * Returns the specified trigger.
   *
   * To get the list of all available triggers, make a [List] request.
   */
  get(request: GetTriggerRequest, callback: (error: ServiceError | null, response: Trigger) => void): ClientUnaryCall;
  get(
    request: GetTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Trigger) => void,
  ): ClientUnaryCall;
  get(
    request: GetTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Trigger) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of triggers in the specified folder. */
  list(
    request: ListTriggersRequest,
    callback: (error: ServiceError | null, response: ListTriggersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTriggersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTriggersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListTriggersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTriggersResponse) => void,
  ): ClientUnaryCall;
  /** Creates a trigger in the specified folder. */
  create(
    request: CreateTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified trigger. */
  update(
    request: UpdateTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified trigger. */
  delete(
    request: DeleteTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Pauses the specified trigger. */
  pause(
    request: PauseTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  pause(
    request: PauseTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  pause(
    request: PauseTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Restarts the specified trigger. */
  resume(
    request: ResumeTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  resume(
    request: ResumeTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  resume(
    request: ResumeTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified trigger. */
  listOperations(
    request: ListTriggerOperationsRequest,
    callback: (error: ServiceError | null, response: ListTriggerOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListTriggerOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTriggerOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListTriggerOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTriggerOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const TriggerServiceClient = makeGenericClientConstructor(
  TriggerServiceService,
  "yandex.cloud.serverless.triggers.v1.TriggerService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TriggerServiceClient;
  service: typeof TriggerServiceService;
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
