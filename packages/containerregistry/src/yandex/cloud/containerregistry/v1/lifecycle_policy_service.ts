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
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Image } from "./image";
import {
  LifecyclePolicy,
  LifecyclePolicy_Status,
  lifecyclePolicy_StatusFromJSON,
  lifecyclePolicy_StatusToJSON,
  LifecycleRule,
} from "./lifecycle_policy";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface GetLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
}

export interface ListLifecyclePoliciesRequest {
  $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest";
  /** ID of the lifecycle policy. */
  registryId?:
    | string
    | undefined;
  /** Repository of the lifecycle policy. */
  repositoryId?:
    | string
    | undefined;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns
   * a [ListLifecyclePoliciesResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListLifecyclePoliciesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters lifecycle policy resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
  /**
   * Sorting the list by [LifecyclePolicy.name], [LifecyclePolicy.created_at] and [LifecyclePolicy.status] fields.
   * The default sorting order is ascending.
   */
  orderBy: string;
}

export interface ListLifecyclePoliciesResponse {
  $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse";
  /** List of lifecycle policies. */
  lifecyclePolicies: LifecyclePolicy[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListLifecyclePoliciesRequest.page_size], use `next_page_token` as the value
   * for the [ListLifecyclePoliciesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest";
  /** ID of the lifecycle policy repository. */
  repositoryId: string;
  /** Name of lifecycle policy. */
  name: string;
  /** Description of lifecycle policy. */
  description: string;
  /** Status of the lifecycle policy. */
  status: LifecyclePolicy_Status;
  /** The rules of the lifecycle policy. */
  rules: LifecycleRule[];
}

export interface UpdateLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
  /** Field mask that specifies which fields of the lifecycle policy resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of lifecycle policy. */
  name: string;
  /** Description of lifecycle policy. */
  description: string;
  /** Status of the lifecycle policy. */
  status: LifecyclePolicy_Status;
  /** The rules of the lifecycle policy. */
  rules: LifecycleRule[];
}

export interface DeleteLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
}

export interface CreateLifecyclePolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata";
  /** ID of the lifecycle policy resource that is being created. */
  lifecyclePolicyId: string;
}

export interface UpdateLifecyclePolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata";
  /** ID of the lifecycle policy resource that is being updated. */
  lifecyclePolicyId: string;
}

export interface DeleteLifecyclePolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata";
  /** ID of the lifecycle policy resource that is being deleted. */
  lifecyclePolicyId: string;
}

export interface DryRunLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
}

export interface DryRunLifecyclePolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata";
  /** ID of the dry run result of the lifecycle policy. */
  dryRunLifecyclePolicyResultId: string;
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
}

export interface DryRunLifecyclePolicyResult {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult";
  /** ID of the dry run result of the lifecycle policy. */
  dryRunLifecyclePolicyResultId: string;
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
  /** Time of the getting result. */
  runAt?:
    | Date
    | undefined;
  /** Count of affected images. */
  affectedImagesCount: number;
}

export interface GetDryRunLifecyclePolicyResultRequest {
  $type: "yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest";
  /** ID of the dry run result of the lifecycle policy. */
  dryRunLifecyclePolicyResultId: string;
}

export interface ListDryRunLifecyclePolicyResultsRequest {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns
   * a [ListDryRunLifecyclePolicyResultsResponse.next_page_token] that can be used to get
   * the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDryRunLifecyclePolicyResultsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters dry run results listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
  /**
   * Sorting the list by [DryRunLifecyclePolicyResult.run_at] and [DryRunLifecyclePolicyResult.affected_images_count] fields.
   * The default sorting order is ascending.
   */
  orderBy: string;
}

export interface ListDryRunLifecyclePolicyResultsResponse {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse";
  /** List of results of dry runs of a lifecycle policy. */
  dryRunLifecyclePolicyResults: DryRunLifecyclePolicyResult[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDryRunLifecyclePolicyResultsRequest.page_size] use `next_page_token` as the value
   * for the [ListDryRunLifecyclePolicyResultsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListDryRunLifecyclePolicyResultAffectedImagesRequest {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest";
  /** ID of the dry run result of the lifecycle policy */
  dryRunLifecyclePolicyResultId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters affected images listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
  /**
   * Sorting the list by [LifecyclePolicy.name] and [LifecyclePolicy.created_at] fields.
   * The default sorting order is ascending.
   */
  orderBy: string;
}

export interface ListDryRunLifecyclePolicyResultAffectedImagesResponse {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse";
  /** List of affected images. */
  affectedImages: Image[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_size], use `next_page_token` as the value
   * for the [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetLifecyclePolicyRequest(): GetLifecyclePolicyRequest {
  return { $type: "yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest", lifecyclePolicyId: "" };
}

export const GetLifecyclePolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest" as const,

  encode(message: GetLifecyclePolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLifecyclePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLifecyclePolicyRequest {
    return {
      $type: GetLifecyclePolicyRequest.$type,
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
    };
  },

  toJSON(message: GetLifecyclePolicyRequest): unknown {
    const obj: any = {};
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLifecyclePolicyRequest>, I>>(base?: I): GetLifecyclePolicyRequest {
    return GetLifecyclePolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLifecyclePolicyRequest>, I>>(object: I): GetLifecyclePolicyRequest {
    const message = createBaseGetLifecyclePolicyRequest();
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLifecyclePolicyRequest.$type, GetLifecyclePolicyRequest);

function createBaseListLifecyclePoliciesRequest(): ListLifecyclePoliciesRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest",
    registryId: undefined,
    repositoryId: undefined,
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListLifecyclePoliciesRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest" as const,

  encode(message: ListLifecyclePoliciesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== undefined) {
      writer.uint32(10).string(message.registryId);
    }
    if (message.repositoryId !== undefined) {
      writer.uint32(50).string(message.repositoryId);
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLifecyclePoliciesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLifecyclePoliciesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.repositoryId = reader.string();
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListLifecyclePoliciesRequest {
    return {
      $type: ListLifecyclePoliciesRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : undefined,
      repositoryId: isSet(object.repositoryId) ? globalThis.String(object.repositoryId) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListLifecyclePoliciesRequest): unknown {
    const obj: any = {};
    if (message.registryId !== undefined) {
      obj.registryId = message.registryId;
    }
    if (message.repositoryId !== undefined) {
      obj.repositoryId = message.repositoryId;
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
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLifecyclePoliciesRequest>, I>>(base?: I): ListLifecyclePoliciesRequest {
    return ListLifecyclePoliciesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLifecyclePoliciesRequest>, I>>(object: I): ListLifecyclePoliciesRequest {
    const message = createBaseListLifecyclePoliciesRequest();
    message.registryId = object.registryId ?? undefined;
    message.repositoryId = object.repositoryId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLifecyclePoliciesRequest.$type, ListLifecyclePoliciesRequest);

function createBaseListLifecyclePoliciesResponse(): ListLifecyclePoliciesResponse {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse",
    lifecyclePolicies: [],
    nextPageToken: "",
  };
}

export const ListLifecyclePoliciesResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse" as const,

  encode(message: ListLifecyclePoliciesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lifecyclePolicies) {
      LifecyclePolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLifecyclePoliciesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLifecyclePoliciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lifecyclePolicies.push(LifecyclePolicy.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListLifecyclePoliciesResponse {
    return {
      $type: ListLifecyclePoliciesResponse.$type,
      lifecyclePolicies: globalThis.Array.isArray(object?.lifecyclePolicies)
        ? object.lifecyclePolicies.map((e: any) => LifecyclePolicy.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListLifecyclePoliciesResponse): unknown {
    const obj: any = {};
    if (message.lifecyclePolicies?.length) {
      obj.lifecyclePolicies = message.lifecyclePolicies.map((e) => LifecyclePolicy.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLifecyclePoliciesResponse>, I>>(base?: I): ListLifecyclePoliciesResponse {
    return ListLifecyclePoliciesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLifecyclePoliciesResponse>, I>>(
    object: I,
  ): ListLifecyclePoliciesResponse {
    const message = createBaseListLifecyclePoliciesResponse();
    message.lifecyclePolicies = object.lifecyclePolicies?.map((e) => LifecyclePolicy.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLifecyclePoliciesResponse.$type, ListLifecyclePoliciesResponse);

function createBaseCreateLifecyclePolicyRequest(): CreateLifecyclePolicyRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest",
    repositoryId: "",
    name: "",
    description: "",
    status: 0,
    rules: [],
  };
}

export const CreateLifecyclePolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest" as const,

  encode(message: CreateLifecyclePolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repositoryId !== "") {
      writer.uint32(10).string(message.repositoryId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    for (const v of message.rules) {
      LifecycleRule.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLifecyclePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repositoryId = reader.string();
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
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLifecyclePolicyRequest {
    return {
      $type: CreateLifecyclePolicyRequest.$type,
      repositoryId: isSet(object.repositoryId) ? globalThis.String(object.repositoryId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? lifecyclePolicy_StatusFromJSON(object.status) : 0,
      rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e: any) => LifecycleRule.fromJSON(e)) : [],
    };
  },

  toJSON(message: CreateLifecyclePolicyRequest): unknown {
    const obj: any = {};
    if (message.repositoryId !== "") {
      obj.repositoryId = message.repositoryId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== 0) {
      obj.status = lifecyclePolicy_StatusToJSON(message.status);
    }
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => LifecycleRule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLifecyclePolicyRequest>, I>>(base?: I): CreateLifecyclePolicyRequest {
    return CreateLifecyclePolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLifecyclePolicyRequest>, I>>(object: I): CreateLifecyclePolicyRequest {
    const message = createBaseCreateLifecyclePolicyRequest();
    message.repositoryId = object.repositoryId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.rules = object.rules?.map((e) => LifecycleRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateLifecyclePolicyRequest.$type, CreateLifecyclePolicyRequest);

function createBaseUpdateLifecyclePolicyRequest(): UpdateLifecyclePolicyRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest",
    lifecyclePolicyId: "",
    updateMask: undefined,
    name: "",
    description: "",
    status: 0,
    rules: [],
  };
}

export const UpdateLifecyclePolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest" as const,

  encode(message: UpdateLifecyclePolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
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
    for (const v of message.rules) {
      LifecycleRule.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLifecyclePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
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

          message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateLifecyclePolicyRequest {
    return {
      $type: UpdateLifecyclePolicyRequest.$type,
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? lifecyclePolicy_StatusFromJSON(object.status) : 0,
      rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e: any) => LifecycleRule.fromJSON(e)) : [],
    };
  },

  toJSON(message: UpdateLifecyclePolicyRequest): unknown {
    const obj: any = {};
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
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
      obj.status = lifecyclePolicy_StatusToJSON(message.status);
    }
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => LifecycleRule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateLifecyclePolicyRequest>, I>>(base?: I): UpdateLifecyclePolicyRequest {
    return UpdateLifecyclePolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLifecyclePolicyRequest>, I>>(object: I): UpdateLifecyclePolicyRequest {
    const message = createBaseUpdateLifecyclePolicyRequest();
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.rules = object.rules?.map((e) => LifecycleRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateLifecyclePolicyRequest.$type, UpdateLifecyclePolicyRequest);

function createBaseDeleteLifecyclePolicyRequest(): DeleteLifecyclePolicyRequest {
  return { $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest", lifecyclePolicyId: "" };
}

export const DeleteLifecyclePolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest" as const,

  encode(message: DeleteLifecyclePolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLifecyclePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLifecyclePolicyRequest {
    return {
      $type: DeleteLifecyclePolicyRequest.$type,
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
    };
  },

  toJSON(message: DeleteLifecyclePolicyRequest): unknown {
    const obj: any = {};
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLifecyclePolicyRequest>, I>>(base?: I): DeleteLifecyclePolicyRequest {
    return DeleteLifecyclePolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLifecyclePolicyRequest>, I>>(object: I): DeleteLifecyclePolicyRequest {
    const message = createBaseDeleteLifecyclePolicyRequest();
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLifecyclePolicyRequest.$type, DeleteLifecyclePolicyRequest);

function createBaseCreateLifecyclePolicyMetadata(): CreateLifecyclePolicyMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata", lifecyclePolicyId: "" };
}

export const CreateLifecyclePolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata" as const,

  encode(message: CreateLifecyclePolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLifecyclePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLifecyclePolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLifecyclePolicyMetadata {
    return {
      $type: CreateLifecyclePolicyMetadata.$type,
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
    };
  },

  toJSON(message: CreateLifecyclePolicyMetadata): unknown {
    const obj: any = {};
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLifecyclePolicyMetadata>, I>>(base?: I): CreateLifecyclePolicyMetadata {
    return CreateLifecyclePolicyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLifecyclePolicyMetadata>, I>>(
    object: I,
  ): CreateLifecyclePolicyMetadata {
    const message = createBaseCreateLifecyclePolicyMetadata();
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLifecyclePolicyMetadata.$type, CreateLifecyclePolicyMetadata);

function createBaseUpdateLifecyclePolicyMetadata(): UpdateLifecyclePolicyMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata", lifecyclePolicyId: "" };
}

export const UpdateLifecyclePolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata" as const,

  encode(message: UpdateLifecyclePolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLifecyclePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLifecyclePolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateLifecyclePolicyMetadata {
    return {
      $type: UpdateLifecyclePolicyMetadata.$type,
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
    };
  },

  toJSON(message: UpdateLifecyclePolicyMetadata): unknown {
    const obj: any = {};
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateLifecyclePolicyMetadata>, I>>(base?: I): UpdateLifecyclePolicyMetadata {
    return UpdateLifecyclePolicyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLifecyclePolicyMetadata>, I>>(
    object: I,
  ): UpdateLifecyclePolicyMetadata {
    const message = createBaseUpdateLifecyclePolicyMetadata();
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateLifecyclePolicyMetadata.$type, UpdateLifecyclePolicyMetadata);

function createBaseDeleteLifecyclePolicyMetadata(): DeleteLifecyclePolicyMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata", lifecyclePolicyId: "" };
}

export const DeleteLifecyclePolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata" as const,

  encode(message: DeleteLifecyclePolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLifecyclePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLifecyclePolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLifecyclePolicyMetadata {
    return {
      $type: DeleteLifecyclePolicyMetadata.$type,
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
    };
  },

  toJSON(message: DeleteLifecyclePolicyMetadata): unknown {
    const obj: any = {};
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLifecyclePolicyMetadata>, I>>(base?: I): DeleteLifecyclePolicyMetadata {
    return DeleteLifecyclePolicyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLifecyclePolicyMetadata>, I>>(
    object: I,
  ): DeleteLifecyclePolicyMetadata {
    const message = createBaseDeleteLifecyclePolicyMetadata();
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLifecyclePolicyMetadata.$type, DeleteLifecyclePolicyMetadata);

function createBaseDryRunLifecyclePolicyRequest(): DryRunLifecyclePolicyRequest {
  return { $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest", lifecyclePolicyId: "" };
}

export const DryRunLifecyclePolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest" as const,

  encode(message: DryRunLifecyclePolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DryRunLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDryRunLifecyclePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DryRunLifecyclePolicyRequest {
    return {
      $type: DryRunLifecyclePolicyRequest.$type,
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
    };
  },

  toJSON(message: DryRunLifecyclePolicyRequest): unknown {
    const obj: any = {};
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DryRunLifecyclePolicyRequest>, I>>(base?: I): DryRunLifecyclePolicyRequest {
    return DryRunLifecyclePolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyRequest>, I>>(object: I): DryRunLifecyclePolicyRequest {
    const message = createBaseDryRunLifecyclePolicyRequest();
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DryRunLifecyclePolicyRequest.$type, DryRunLifecyclePolicyRequest);

function createBaseDryRunLifecyclePolicyMetadata(): DryRunLifecyclePolicyMetadata {
  return {
    $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata",
    dryRunLifecyclePolicyResultId: "",
    lifecyclePolicyId: "",
  };
}

export const DryRunLifecyclePolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata" as const,

  encode(message: DryRunLifecyclePolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dryRunLifecyclePolicyResultId !== "") {
      writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
    }
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(18).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DryRunLifecyclePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDryRunLifecyclePolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dryRunLifecyclePolicyResultId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DryRunLifecyclePolicyMetadata {
    return {
      $type: DryRunLifecyclePolicyMetadata.$type,
      dryRunLifecyclePolicyResultId: isSet(object.dryRunLifecyclePolicyResultId)
        ? globalThis.String(object.dryRunLifecyclePolicyResultId)
        : "",
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
    };
  },

  toJSON(message: DryRunLifecyclePolicyMetadata): unknown {
    const obj: any = {};
    if (message.dryRunLifecyclePolicyResultId !== "") {
      obj.dryRunLifecyclePolicyResultId = message.dryRunLifecyclePolicyResultId;
    }
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DryRunLifecyclePolicyMetadata>, I>>(base?: I): DryRunLifecyclePolicyMetadata {
    return DryRunLifecyclePolicyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyMetadata>, I>>(
    object: I,
  ): DryRunLifecyclePolicyMetadata {
    const message = createBaseDryRunLifecyclePolicyMetadata();
    message.dryRunLifecyclePolicyResultId = object.dryRunLifecyclePolicyResultId ?? "";
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DryRunLifecyclePolicyMetadata.$type, DryRunLifecyclePolicyMetadata);

function createBaseDryRunLifecyclePolicyResult(): DryRunLifecyclePolicyResult {
  return {
    $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult",
    dryRunLifecyclePolicyResultId: "",
    lifecyclePolicyId: "",
    runAt: undefined,
    affectedImagesCount: 0,
  };
}

export const DryRunLifecyclePolicyResult = {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult" as const,

  encode(message: DryRunLifecyclePolicyResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dryRunLifecyclePolicyResultId !== "") {
      writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
    }
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(18).string(message.lifecyclePolicyId);
    }
    if (message.runAt !== undefined) {
      Timestamp.encode(toTimestamp(message.runAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.affectedImagesCount !== 0) {
      writer.uint32(32).int64(message.affectedImagesCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DryRunLifecyclePolicyResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDryRunLifecyclePolicyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dryRunLifecyclePolicyResultId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.runAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.affectedImagesCount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DryRunLifecyclePolicyResult {
    return {
      $type: DryRunLifecyclePolicyResult.$type,
      dryRunLifecyclePolicyResultId: isSet(object.dryRunLifecyclePolicyResultId)
        ? globalThis.String(object.dryRunLifecyclePolicyResultId)
        : "",
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
      runAt: isSet(object.runAt) ? fromJsonTimestamp(object.runAt) : undefined,
      affectedImagesCount: isSet(object.affectedImagesCount) ? globalThis.Number(object.affectedImagesCount) : 0,
    };
  },

  toJSON(message: DryRunLifecyclePolicyResult): unknown {
    const obj: any = {};
    if (message.dryRunLifecyclePolicyResultId !== "") {
      obj.dryRunLifecyclePolicyResultId = message.dryRunLifecyclePolicyResultId;
    }
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
    }
    if (message.runAt !== undefined) {
      obj.runAt = message.runAt.toISOString();
    }
    if (message.affectedImagesCount !== 0) {
      obj.affectedImagesCount = Math.round(message.affectedImagesCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DryRunLifecyclePolicyResult>, I>>(base?: I): DryRunLifecyclePolicyResult {
    return DryRunLifecyclePolicyResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyResult>, I>>(object: I): DryRunLifecyclePolicyResult {
    const message = createBaseDryRunLifecyclePolicyResult();
    message.dryRunLifecyclePolicyResultId = object.dryRunLifecyclePolicyResultId ?? "";
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    message.runAt = object.runAt ?? undefined;
    message.affectedImagesCount = object.affectedImagesCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DryRunLifecyclePolicyResult.$type, DryRunLifecyclePolicyResult);

function createBaseGetDryRunLifecyclePolicyResultRequest(): GetDryRunLifecyclePolicyResultRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest",
    dryRunLifecyclePolicyResultId: "",
  };
}

export const GetDryRunLifecyclePolicyResultRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest" as const,

  encode(message: GetDryRunLifecyclePolicyResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dryRunLifecyclePolicyResultId !== "") {
      writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDryRunLifecyclePolicyResultRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDryRunLifecyclePolicyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dryRunLifecyclePolicyResultId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDryRunLifecyclePolicyResultRequest {
    return {
      $type: GetDryRunLifecyclePolicyResultRequest.$type,
      dryRunLifecyclePolicyResultId: isSet(object.dryRunLifecyclePolicyResultId)
        ? globalThis.String(object.dryRunLifecyclePolicyResultId)
        : "",
    };
  },

  toJSON(message: GetDryRunLifecyclePolicyResultRequest): unknown {
    const obj: any = {};
    if (message.dryRunLifecyclePolicyResultId !== "") {
      obj.dryRunLifecyclePolicyResultId = message.dryRunLifecyclePolicyResultId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDryRunLifecyclePolicyResultRequest>, I>>(
    base?: I,
  ): GetDryRunLifecyclePolicyResultRequest {
    return GetDryRunLifecyclePolicyResultRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDryRunLifecyclePolicyResultRequest>, I>>(
    object: I,
  ): GetDryRunLifecyclePolicyResultRequest {
    const message = createBaseGetDryRunLifecyclePolicyResultRequest();
    message.dryRunLifecyclePolicyResultId = object.dryRunLifecyclePolicyResultId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetDryRunLifecyclePolicyResultRequest.$type, GetDryRunLifecyclePolicyResultRequest);

function createBaseListDryRunLifecyclePolicyResultsRequest(): ListDryRunLifecyclePolicyResultsRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest",
    lifecyclePolicyId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListDryRunLifecyclePolicyResultsRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest" as const,

  encode(message: ListDryRunLifecyclePolicyResultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDryRunLifecyclePolicyResultsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDryRunLifecyclePolicyResultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lifecyclePolicyId = reader.string();
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDryRunLifecyclePolicyResultsRequest {
    return {
      $type: ListDryRunLifecyclePolicyResultsRequest.$type,
      lifecyclePolicyId: isSet(object.lifecyclePolicyId) ? globalThis.String(object.lifecyclePolicyId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListDryRunLifecyclePolicyResultsRequest): unknown {
    const obj: any = {};
    if (message.lifecyclePolicyId !== "") {
      obj.lifecyclePolicyId = message.lifecyclePolicyId;
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
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultsRequest>, I>>(
    base?: I,
  ): ListDryRunLifecyclePolicyResultsRequest {
    return ListDryRunLifecyclePolicyResultsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultsRequest>, I>>(
    object: I,
  ): ListDryRunLifecyclePolicyResultsRequest {
    const message = createBaseListDryRunLifecyclePolicyResultsRequest();
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDryRunLifecyclePolicyResultsRequest.$type, ListDryRunLifecyclePolicyResultsRequest);

function createBaseListDryRunLifecyclePolicyResultsResponse(): ListDryRunLifecyclePolicyResultsResponse {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse",
    dryRunLifecyclePolicyResults: [],
    nextPageToken: "",
  };
}

export const ListDryRunLifecyclePolicyResultsResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse" as const,

  encode(message: ListDryRunLifecyclePolicyResultsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dryRunLifecyclePolicyResults) {
      DryRunLifecyclePolicyResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDryRunLifecyclePolicyResultsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDryRunLifecyclePolicyResultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dryRunLifecyclePolicyResults.push(DryRunLifecyclePolicyResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDryRunLifecyclePolicyResultsResponse {
    return {
      $type: ListDryRunLifecyclePolicyResultsResponse.$type,
      dryRunLifecyclePolicyResults: globalThis.Array.isArray(object?.dryRunLifecyclePolicyResults)
        ? object.dryRunLifecyclePolicyResults.map((e: any) => DryRunLifecyclePolicyResult.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDryRunLifecyclePolicyResultsResponse): unknown {
    const obj: any = {};
    if (message.dryRunLifecyclePolicyResults?.length) {
      obj.dryRunLifecyclePolicyResults = message.dryRunLifecyclePolicyResults.map((e) =>
        DryRunLifecyclePolicyResult.toJSON(e)
      );
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultsResponse>, I>>(
    base?: I,
  ): ListDryRunLifecyclePolicyResultsResponse {
    return ListDryRunLifecyclePolicyResultsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultsResponse>, I>>(
    object: I,
  ): ListDryRunLifecyclePolicyResultsResponse {
    const message = createBaseListDryRunLifecyclePolicyResultsResponse();
    message.dryRunLifecyclePolicyResults =
      object.dryRunLifecyclePolicyResults?.map((e) => DryRunLifecyclePolicyResult.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDryRunLifecyclePolicyResultsResponse.$type, ListDryRunLifecyclePolicyResultsResponse);

function createBaseListDryRunLifecyclePolicyResultAffectedImagesRequest(): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest",
    dryRunLifecyclePolicyResultId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
  };
}

export const ListDryRunLifecyclePolicyResultAffectedImagesRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest" as const,

  encode(
    message: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.dryRunLifecyclePolicyResultId !== "") {
      writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDryRunLifecyclePolicyResultAffectedImagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dryRunLifecyclePolicyResultId = reader.string();
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    return {
      $type: ListDryRunLifecyclePolicyResultAffectedImagesRequest.$type,
      dryRunLifecyclePolicyResultId: isSet(object.dryRunLifecyclePolicyResultId)
        ? globalThis.String(object.dryRunLifecyclePolicyResultId)
        : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListDryRunLifecyclePolicyResultAffectedImagesRequest): unknown {
    const obj: any = {};
    if (message.dryRunLifecyclePolicyResultId !== "") {
      obj.dryRunLifecyclePolicyResultId = message.dryRunLifecyclePolicyResultId;
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
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesRequest>, I>>(
    base?: I,
  ): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    return ListDryRunLifecyclePolicyResultAffectedImagesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesRequest>, I>>(
    object: I,
  ): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    const message = createBaseListDryRunLifecyclePolicyResultAffectedImagesRequest();
    message.dryRunLifecyclePolicyResultId = object.dryRunLifecyclePolicyResultId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDryRunLifecyclePolicyResultAffectedImagesRequest.$type,
  ListDryRunLifecyclePolicyResultAffectedImagesRequest,
);

function createBaseListDryRunLifecyclePolicyResultAffectedImagesResponse(): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
  return {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse",
    affectedImages: [],
    nextPageToken: "",
  };
}

export const ListDryRunLifecyclePolicyResultAffectedImagesResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse" as const,

  encode(
    message: ListDryRunLifecyclePolicyResultAffectedImagesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.affectedImages) {
      Image.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDryRunLifecyclePolicyResultAffectedImagesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.affectedImages.push(Image.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    return {
      $type: ListDryRunLifecyclePolicyResultAffectedImagesResponse.$type,
      affectedImages: globalThis.Array.isArray(object?.affectedImages)
        ? object.affectedImages.map((e: any) => Image.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDryRunLifecyclePolicyResultAffectedImagesResponse): unknown {
    const obj: any = {};
    if (message.affectedImages?.length) {
      obj.affectedImages = message.affectedImages.map((e) => Image.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesResponse>, I>>(
    base?: I,
  ): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    return ListDryRunLifecyclePolicyResultAffectedImagesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesResponse>, I>>(
    object: I,
  ): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    const message = createBaseListDryRunLifecyclePolicyResultAffectedImagesResponse();
    message.affectedImages = object.affectedImages?.map((e) => Image.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDryRunLifecyclePolicyResultAffectedImagesResponse.$type,
  ListDryRunLifecyclePolicyResultAffectedImagesResponse,
);

/** A set of methods for managing Lifecycle policy resources. */
export type LifecyclePolicyServiceService = typeof LifecyclePolicyServiceService;
export const LifecyclePolicyServiceService = {
  /**
   * Returns the specified lifecycle policy.
   *
   * To get the list of all available lifecycle policies, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLifecyclePolicyRequest) =>
      Buffer.from(GetLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: LifecyclePolicy) => Buffer.from(LifecyclePolicy.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LifecyclePolicy.decode(value),
  },
  /** Retrieves the list of lifecycle policies in the specified repository. */
  list: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLifecyclePoliciesRequest) =>
      Buffer.from(ListLifecyclePoliciesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListLifecyclePoliciesRequest.decode(value),
    responseSerialize: (value: ListLifecyclePoliciesResponse) =>
      Buffer.from(ListLifecyclePoliciesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListLifecyclePoliciesResponse.decode(value),
  },
  /** Creates a lifecycle policy in the specified repository. */
  create: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLifecyclePolicyRequest) =>
      Buffer.from(CreateLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified lifecycle policy. */
  update: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateLifecyclePolicyRequest) =>
      Buffer.from(UpdateLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified lifecycle policy. */
  delete: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteLifecyclePolicyRequest) =>
      Buffer.from(DeleteLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a request of a dry run of the lifecycle policy. */
  dryRun: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DryRunLifecyclePolicyRequest) =>
      Buffer.from(DryRunLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DryRunLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the dry run result of the specified lifecycle policy. */
  getDryRunResult: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDryRunLifecyclePolicyResultRequest) =>
      Buffer.from(GetDryRunLifecyclePolicyResultRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDryRunLifecyclePolicyResultRequest.decode(value),
    responseSerialize: (value: DryRunLifecyclePolicyResult) =>
      Buffer.from(DryRunLifecyclePolicyResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DryRunLifecyclePolicyResult.decode(value),
  },
  /** Retrieves the list of the dry run results. */
  listDryRunResults: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDryRunLifecyclePolicyResultsRequest) =>
      Buffer.from(ListDryRunLifecyclePolicyResultsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultsRequest.decode(value),
    responseSerialize: (value: ListDryRunLifecyclePolicyResultsResponse) =>
      Buffer.from(ListDryRunLifecyclePolicyResultsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultsResponse.decode(value),
  },
  /** Retrieves the list of the affected images. */
  listDryRunResultAffectedImages: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDryRunLifecyclePolicyResultAffectedImagesRequest) =>
      Buffer.from(ListDryRunLifecyclePolicyResultAffectedImagesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultAffectedImagesRequest.decode(value),
    responseSerialize: (value: ListDryRunLifecyclePolicyResultAffectedImagesResponse) =>
      Buffer.from(ListDryRunLifecyclePolicyResultAffectedImagesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultAffectedImagesResponse.decode(value),
  },
} as const;

export interface LifecyclePolicyServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified lifecycle policy.
   *
   * To get the list of all available lifecycle policies, make a [List] request.
   */
  get: handleUnaryCall<GetLifecyclePolicyRequest, LifecyclePolicy>;
  /** Retrieves the list of lifecycle policies in the specified repository. */
  list: handleUnaryCall<ListLifecyclePoliciesRequest, ListLifecyclePoliciesResponse>;
  /** Creates a lifecycle policy in the specified repository. */
  create: handleUnaryCall<CreateLifecyclePolicyRequest, Operation>;
  /** Updates the specified lifecycle policy. */
  update: handleUnaryCall<UpdateLifecyclePolicyRequest, Operation>;
  /** Deletes the specified lifecycle policy. */
  delete: handleUnaryCall<DeleteLifecyclePolicyRequest, Operation>;
  /** Creates a request of a dry run of the lifecycle policy. */
  dryRun: handleUnaryCall<DryRunLifecyclePolicyRequest, Operation>;
  /** Returns the dry run result of the specified lifecycle policy. */
  getDryRunResult: handleUnaryCall<GetDryRunLifecyclePolicyResultRequest, DryRunLifecyclePolicyResult>;
  /** Retrieves the list of the dry run results. */
  listDryRunResults: handleUnaryCall<ListDryRunLifecyclePolicyResultsRequest, ListDryRunLifecyclePolicyResultsResponse>;
  /** Retrieves the list of the affected images. */
  listDryRunResultAffectedImages: handleUnaryCall<
    ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    ListDryRunLifecyclePolicyResultAffectedImagesResponse
  >;
}

export interface LifecyclePolicyServiceClient extends Client {
  /**
   * Returns the specified lifecycle policy.
   *
   * To get the list of all available lifecycle policies, make a [List] request.
   */
  get(
    request: GetLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: LifecyclePolicy) => void,
  ): ClientUnaryCall;
  get(
    request: GetLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LifecyclePolicy) => void,
  ): ClientUnaryCall;
  get(
    request: GetLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LifecyclePolicy) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of lifecycle policies in the specified repository. */
  list(
    request: ListLifecyclePoliciesRequest,
    callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLifecyclePoliciesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLifecyclePoliciesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void,
  ): ClientUnaryCall;
  /** Creates a lifecycle policy in the specified repository. */
  create(
    request: CreateLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified lifecycle policy. */
  update(
    request: UpdateLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified lifecycle policy. */
  delete(
    request: DeleteLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Creates a request of a dry run of the lifecycle policy. */
  dryRun(
    request: DryRunLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  dryRun(
    request: DryRunLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  dryRun(
    request: DryRunLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns the dry run result of the specified lifecycle policy. */
  getDryRunResult(
    request: GetDryRunLifecyclePolicyResultRequest,
    callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void,
  ): ClientUnaryCall;
  getDryRunResult(
    request: GetDryRunLifecyclePolicyResultRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void,
  ): ClientUnaryCall;
  getDryRunResult(
    request: GetDryRunLifecyclePolicyResultRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of the dry run results. */
  listDryRunResults(
    request: ListDryRunLifecyclePolicyResultsRequest,
    callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void,
  ): ClientUnaryCall;
  listDryRunResults(
    request: ListDryRunLifecyclePolicyResultsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void,
  ): ClientUnaryCall;
  listDryRunResults(
    request: ListDryRunLifecyclePolicyResultsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of the affected images. */
  listDryRunResultAffectedImages(
    request: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void,
  ): ClientUnaryCall;
  listDryRunResultAffectedImages(
    request: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void,
  ): ClientUnaryCall;
  listDryRunResultAffectedImages(
    request: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void,
  ): ClientUnaryCall;
}

export const LifecyclePolicyServiceClient = makeGenericClientConstructor(
  LifecyclePolicyServiceService,
  "yandex.cloud.containerregistry.v1.LifecyclePolicyService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): LifecyclePolicyServiceClient;
  service: typeof LifecyclePolicyServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
