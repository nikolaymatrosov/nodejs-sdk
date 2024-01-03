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
import { messageTypeRegistry } from "../../../../../typeRegistry";
import {
  AsyncInvocationConfig,
  Connectivity,
  Function,
  LogOptions,
  Package,
  Resources,
  ScalingPolicy,
  Secret,
  StorageMount,
  Version,
} from "./function";

export const protobufPackage = "yandex.cloud.serverless.functions.v1";

export interface GetFunctionRequest {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest";
  /**
   * ID of the function to return.
   *
   * To get a function ID make a [FunctionService.List] request.
   */
  functionId: string;
}

export interface GetFunctionVersionRequest {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest";
  /**
   * ID of the version to return.
   *
   * To get a version ID make a [FunctionService.ListVersions] request.
   */
  functionVersionId: string;
}

export interface GetFunctionVersionByTagRequest {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest";
  /**
   * ID of the function whose versions should be listed.
   *
   * To get a function ID use a [FunctionService.List] request.
   */
  functionId: string;
  /**
   * Version tag.
   *
   * To get the history of version tags make a [FunctionService.ListTagHistory] request.
   */
  tag: string;
}

export interface ListFunctionsRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest";
  /**
   * ID of the folder to list functions in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListFunctionsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListFunctionsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters functions listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Function.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name="my-function"`.
   */
  filter: string;
}

export interface ListFunctionsResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse";
  /** List of functions in the specified folder. */
  functions: Function[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFunctionsRequest.page_size], use `nextPageToken` as the value
   * for the [ListFunctionsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateFunctionRequest {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest";
  /**
   * ID of the folder to create a function in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the function.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the function. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface CreateFunctionRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateFunctionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata";
  /** ID of the function that is being created. */
  functionId: string;
}

export interface UpdateFunctionRequest {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest";
  /**
   * ID of the function to update.
   *
   * To get a function ID make a [FunctionService.List] request.
   */
  functionId: string;
  /** Field mask that specifies which attributes of the function should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the function.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description for the function. */
  description: string;
  /**
   * Function labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label, request the current set of labels with a [FunctionService.Get] request.
   */
  labels: { [key: string]: string };
}

export interface UpdateFunctionRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateFunctionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata";
  /** ID of the function that is being updated. */
  functionId: string;
}

export interface DeleteFunctionRequest {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest";
  /**
   * ID of the function to delete.
   * To get a function ID make a [FunctionService.List] request.
   */
  functionId: string;
}

export interface DeleteFunctionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata";
  /** ID of the function that is being deleted. */
  functionId: string;
}

export interface DeleteFunctionVersionRequest {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest";
  /** ID of the function's version to delete. */
  functionVersionId: string;
  /**
   * Forces deletion of the version tags.
   *
   * If the value equals false and the function has tags with the selected version then request returns an error.
   */
  force: boolean;
}

export interface DeleteFunctionVersionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata";
  /** ID of the function's version is being deleted. */
  functionVersionId: string;
}

export interface ListRuntimesRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest";
}

export interface ListRuntimesResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse";
  /** Runtime environments available for the specified function. */
  runtimes: string[];
}

export interface ListFunctionsVersionsRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest";
  /**
   * ID of the folder to list function versions for.
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId?:
    | string
    | undefined;
  /**
   * ID of the function to list versions for.
   * To get a function ID use a [FunctionService.List] request.
   */
  functionId?:
    | string
    | undefined;
  /**
   * The maximum number of results per page to return. If the number of available results
   * is larger than `pageSize`, the service returns a [ListFunctionsVersionsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListFunctionsVersionsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Version.status] and [Version.runtime] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `status="ACTIVE"`.
   */
  filter: string;
}

export interface ListFunctionsVersionsResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse";
  /** List of versions for the specified folder or function. */
  versions: Version[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFunctionsVersionsRequest.page_size], use `nextPageToken` as the value
   * for the [ListFunctionsVersionsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListFunctionOperationsRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest";
  /** ID of the function to list operations for. */
  functionId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListFunctionOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListFunctionOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Examples of a filter: `done=false`, `created_by='John.Doe'`.
   */
  filter: string;
}

export interface ListFunctionOperationsResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse";
  /** List of operations for the specified function. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFunctionOperationsRequest.page_size], use `nextPageToken` as the value
   * for the [ListFunctionOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateFunctionVersionRequest {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest";
  /**
   * ID of the function to create a version for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /** Runtime environment for the version. */
  runtime: string;
  /** Description of the version */
  description: string;
  /** Entrypoint of the version. */
  entrypoint: string;
  /** Resources allocated to the version. */
  resources?:
    | Resources
    | undefined;
  /**
   * Timeout for the execution of the version.
   *
   * If the timeout is exceeded, Cloud Functions responds with a 504 HTTP code.
   */
  executionTimeout?:
    | Duration
    | undefined;
  /** ID of the service account to associate with the version. */
  serviceAccountId: string;
  /** Functions deployment package. */
  package?:
    | Package
    | undefined;
  /** Content of the deployment package. */
  content?:
    | Buffer
    | undefined;
  /**
   * ID of the version to be copied from. Source version must belong to the same folder as the created version
   * and the user must have read permissions to the source version.
   */
  versionId?:
    | string
    | undefined;
  /** Environment settings for the version. */
  environment: { [key: string]: string };
  /** Function version tags. For details, see [Version tag](/docs/functions/concepts/function#tag). */
  tag: string[];
  /** Function version connectivity. If specified the version will be attached to specified network/subnet(s). */
  connectivity?:
    | Connectivity
    | undefined;
  /** Additional service accounts to be used by the version. */
  namedServiceAccounts: { [key: string]: string };
  /** Yandex Lockbox secrets to be used by the version. */
  secrets: Secret[];
  /** Options for logging from the function */
  logOptions?:
    | LogOptions
    | undefined;
  /** S3 mounts to be used by the version. */
  storageMounts: StorageMount[];
  /** Config for asynchronous invocations of the version */
  asyncInvocationConfig?: AsyncInvocationConfig | undefined;
}

export interface CreateFunctionVersionRequest_EnvironmentEntry {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry";
  key: string;
  value: string;
}

export interface CreateFunctionVersionRequest_NamedServiceAccountsEntry {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry";
  key: string;
  value: string;
}

export interface CreateFunctionVersionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata";
  /** ID of the version that is being created. */
  functionVersionId: string;
}

export interface SetFunctionTagRequest {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest";
  /**
   * ID of the version to set the tag for.
   *
   * To get a version ID make a [FunctionService.ListVersions] request.
   */
  functionVersionId: string;
  /** Tag to set for the version. */
  tag: string;
}

export interface RemoveFunctionTagRequest {
  $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest";
  /**
   * ID of the version to remove a tag from.
   *
   * To get the a version ID make a [FunctionService.ListVersions] request.
   */
  functionVersionId: string;
  /** Tag to remove from the specified version. */
  tag: string;
}

export interface SetFunctionTagMetadata {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata";
  /** ID of the function versions that is being tagged. */
  functionVersionId: string;
}

export interface RemoveFunctionTagMetadata {
  $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata";
  /** ID of the function versions that is being untagged. */
  functionVersionId: string;
}

export interface ListFunctionTagHistoryRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest";
  /**
   * ID of the function to retrieve tag history for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /** Specific tag that history should be limited to. */
  tag: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListFunctionOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListFunctionOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [FunctionTagHistoryRecord.effective_from] and [FunctionTagHistoryRecord.effective_to] fields.
   * 2. An `=` or `>` or `<` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * For example, `effective_to>2021-01-01T12:00:00Z`.
   */
  filter: string;
}

export interface ListFunctionTagHistoryResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse";
  /** Set of relevant tag history records. */
  functionTagHistoryRecord: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFunctionTagHistoryRequest.page_size], use `nextPageToken` as the value
   * for the [ListFunctionTagHistoryRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

/** A record in the tag history. */
export interface ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord";
  /** ID of the function that the record is about. */
  functionId: string;
  /** ID of the function version that the record is about. */
  functionVersionId: string;
  /** Tag that was set for the version at some point. */
  tag: string;
  /** Timestamp when the tag started being active for the function. */
  effectiveFrom?:
    | Date
    | undefined;
  /** Timestamp when the tag stopped being active for the function. */
  effectiveTo?: Date | undefined;
}

export interface ListScalingPoliciesRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest";
  /**
   * ID of the function to retrieve scaling policies for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListScalingPoliciesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListScalingPoliciesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListScalingPoliciesResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse";
  /** Set of relevant scaling policies. */
  scalingPolicies: ScalingPolicy[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListScalingPoliciesRequest.page_size], use `nextPageToken` as the value
   * for the [ListScalingPoliciesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface SetScalingPolicyRequest {
  $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest";
  /**
   * ID of the function to retrieve scaling policies for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /**
   * Version tag.
   *
   * To get the history of version tags make a [FunctionService.ListTagHistory] request.
   */
  tag: string;
  /**
   * Minimum guaranteed provisioned instances count for all zones in total.
   * Billed separately.
   */
  provisionedInstancesCount: number;
  /**
   * Upper limit for instance count in each zone.
   * 0 means no limit.
   */
  zoneInstancesLimit: number;
  /**
   * Upper limit of requests count in each zone.
   * 0 means no limit.
   */
  zoneRequestsLimit: number;
}

export interface SetScalingPolicyMetadata {
  $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata";
  /** ID of the function for which scaling policy was set. */
  functionId: string;
}

export interface RemoveScalingPolicyRequest {
  $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest";
  /**
   * ID of the function to remove scaling policies for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /**
   * Version tag.
   *
   * To get the history of version tags make a [FunctionService.ListTagHistory] request.
   */
  tag: string;
}

export interface RemoveScalingPolicyMetadata {
  $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata";
  /** ID of the function for which scaling policy was removed. */
  functionId: string;
}

function createBaseGetFunctionRequest(): GetFunctionRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest", functionId: "" };
}

export const GetFunctionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest" as const,

  encode(message: GetFunctionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFunctionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFunctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFunctionRequest {
    return {
      $type: GetFunctionRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
    };
  },

  toJSON(message: GetFunctionRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFunctionRequest>, I>>(base?: I): GetFunctionRequest {
    return GetFunctionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFunctionRequest>, I>>(object: I): GetFunctionRequest {
    const message = createBaseGetFunctionRequest();
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFunctionRequest.$type, GetFunctionRequest);

function createBaseGetFunctionVersionRequest(): GetFunctionVersionRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest", functionVersionId: "" };
}

export const GetFunctionVersionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest" as const,

  encode(message: GetFunctionVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFunctionVersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFunctionVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionVersionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFunctionVersionRequest {
    return {
      $type: GetFunctionVersionRequest.$type,
      functionVersionId: isSet(object.functionVersionId) ? globalThis.String(object.functionVersionId) : "",
    };
  },

  toJSON(message: GetFunctionVersionRequest): unknown {
    const obj: any = {};
    if (message.functionVersionId !== "") {
      obj.functionVersionId = message.functionVersionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFunctionVersionRequest>, I>>(base?: I): GetFunctionVersionRequest {
    return GetFunctionVersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFunctionVersionRequest>, I>>(object: I): GetFunctionVersionRequest {
    const message = createBaseGetFunctionVersionRequest();
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFunctionVersionRequest.$type, GetFunctionVersionRequest);

function createBaseGetFunctionVersionByTagRequest(): GetFunctionVersionByTagRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest", functionId: "", tag: "" };
}

export const GetFunctionVersionByTagRequest = {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest" as const,

  encode(message: GetFunctionVersionByTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFunctionVersionByTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFunctionVersionByTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFunctionVersionByTagRequest {
    return {
      $type: GetFunctionVersionByTagRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
    };
  },

  toJSON(message: GetFunctionVersionByTagRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFunctionVersionByTagRequest>, I>>(base?: I): GetFunctionVersionByTagRequest {
    return GetFunctionVersionByTagRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFunctionVersionByTagRequest>, I>>(
    object: I,
  ): GetFunctionVersionByTagRequest {
    const message = createBaseGetFunctionVersionByTagRequest();
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFunctionVersionByTagRequest.$type, GetFunctionVersionByTagRequest);

function createBaseListFunctionsRequest(): ListFunctionsRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListFunctionsRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest" as const,

  encode(message: ListFunctionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctionsRequest();
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

  fromJSON(object: any): ListFunctionsRequest {
    return {
      $type: ListFunctionsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListFunctionsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListFunctionsRequest>, I>>(base?: I): ListFunctionsRequest {
    return ListFunctionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctionsRequest>, I>>(object: I): ListFunctionsRequest {
    const message = createBaseListFunctionsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionsRequest.$type, ListFunctionsRequest);

function createBaseListFunctionsResponse(): ListFunctionsResponse {
  return { $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse", functions: [], nextPageToken: "" };
}

export const ListFunctionsResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse" as const,

  encode(message: ListFunctionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.functions) {
      Function.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functions.push(Function.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListFunctionsResponse {
    return {
      $type: ListFunctionsResponse.$type,
      functions: globalThis.Array.isArray(object?.functions)
        ? object.functions.map((e: any) => Function.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFunctionsResponse): unknown {
    const obj: any = {};
    if (message.functions?.length) {
      obj.functions = message.functions.map((e) => Function.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFunctionsResponse>, I>>(base?: I): ListFunctionsResponse {
    return ListFunctionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctionsResponse>, I>>(object: I): ListFunctionsResponse {
    const message = createBaseListFunctionsResponse();
    message.functions = object.functions?.map((e) => Function.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionsResponse.$type, ListFunctionsResponse);

function createBaseCreateFunctionRequest(): CreateFunctionRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
  };
}

export const CreateFunctionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest" as const,

  encode(message: CreateFunctionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateFunctionRequest_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFunctionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFunctionRequest();
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

          const entry4 = CreateFunctionRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateFunctionRequest {
    return {
      $type: CreateFunctionRequest.$type,
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

  toJSON(message: CreateFunctionRequest): unknown {
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

  create<I extends Exact<DeepPartial<CreateFunctionRequest>, I>>(base?: I): CreateFunctionRequest {
    return CreateFunctionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFunctionRequest>, I>>(object: I): CreateFunctionRequest {
    const message = createBaseCreateFunctionRequest();
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

messageTypeRegistry.set(CreateFunctionRequest.$type, CreateFunctionRequest);

function createBaseCreateFunctionRequest_LabelsEntry(): CreateFunctionRequest_LabelsEntry {
  return { $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry", key: "", value: "" };
}

export const CreateFunctionRequest_LabelsEntry = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry" as const,

  encode(message: CreateFunctionRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFunctionRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFunctionRequest_LabelsEntry();
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

  fromJSON(object: any): CreateFunctionRequest_LabelsEntry {
    return {
      $type: CreateFunctionRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateFunctionRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFunctionRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateFunctionRequest_LabelsEntry {
    return CreateFunctionRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFunctionRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateFunctionRequest_LabelsEntry {
    const message = createBaseCreateFunctionRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFunctionRequest_LabelsEntry.$type, CreateFunctionRequest_LabelsEntry);

function createBaseCreateFunctionMetadata(): CreateFunctionMetadata {
  return { $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata", functionId: "" };
}

export const CreateFunctionMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata" as const,

  encode(message: CreateFunctionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFunctionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFunctionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFunctionMetadata {
    return {
      $type: CreateFunctionMetadata.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
    };
  },

  toJSON(message: CreateFunctionMetadata): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFunctionMetadata>, I>>(base?: I): CreateFunctionMetadata {
    return CreateFunctionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFunctionMetadata>, I>>(object: I): CreateFunctionMetadata {
    const message = createBaseCreateFunctionMetadata();
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFunctionMetadata.$type, CreateFunctionMetadata);

function createBaseUpdateFunctionRequest(): UpdateFunctionRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest",
    functionId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
  };
}

export const UpdateFunctionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest" as const,

  encode(message: UpdateFunctionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
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
      UpdateFunctionRequest_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFunctionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFunctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
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

          const entry5 = UpdateFunctionRequest_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateFunctionRequest {
    return {
      $type: UpdateFunctionRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
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

  toJSON(message: UpdateFunctionRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
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

  create<I extends Exact<DeepPartial<UpdateFunctionRequest>, I>>(base?: I): UpdateFunctionRequest {
    return UpdateFunctionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFunctionRequest>, I>>(object: I): UpdateFunctionRequest {
    const message = createBaseUpdateFunctionRequest();
    message.functionId = object.functionId ?? "";
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

messageTypeRegistry.set(UpdateFunctionRequest.$type, UpdateFunctionRequest);

function createBaseUpdateFunctionRequest_LabelsEntry(): UpdateFunctionRequest_LabelsEntry {
  return { $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateFunctionRequest_LabelsEntry = {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry" as const,

  encode(message: UpdateFunctionRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFunctionRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFunctionRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateFunctionRequest_LabelsEntry {
    return {
      $type: UpdateFunctionRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateFunctionRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFunctionRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateFunctionRequest_LabelsEntry {
    return UpdateFunctionRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFunctionRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateFunctionRequest_LabelsEntry {
    const message = createBaseUpdateFunctionRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFunctionRequest_LabelsEntry.$type, UpdateFunctionRequest_LabelsEntry);

function createBaseUpdateFunctionMetadata(): UpdateFunctionMetadata {
  return { $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata", functionId: "" };
}

export const UpdateFunctionMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata" as const,

  encode(message: UpdateFunctionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFunctionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFunctionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFunctionMetadata {
    return {
      $type: UpdateFunctionMetadata.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
    };
  },

  toJSON(message: UpdateFunctionMetadata): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFunctionMetadata>, I>>(base?: I): UpdateFunctionMetadata {
    return UpdateFunctionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFunctionMetadata>, I>>(object: I): UpdateFunctionMetadata {
    const message = createBaseUpdateFunctionMetadata();
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFunctionMetadata.$type, UpdateFunctionMetadata);

function createBaseDeleteFunctionRequest(): DeleteFunctionRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest", functionId: "" };
}

export const DeleteFunctionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest" as const,

  encode(message: DeleteFunctionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFunctionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFunctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFunctionRequest {
    return {
      $type: DeleteFunctionRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
    };
  },

  toJSON(message: DeleteFunctionRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFunctionRequest>, I>>(base?: I): DeleteFunctionRequest {
    return DeleteFunctionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteFunctionRequest>, I>>(object: I): DeleteFunctionRequest {
    const message = createBaseDeleteFunctionRequest();
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFunctionRequest.$type, DeleteFunctionRequest);

function createBaseDeleteFunctionMetadata(): DeleteFunctionMetadata {
  return { $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata", functionId: "" };
}

export const DeleteFunctionMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata" as const,

  encode(message: DeleteFunctionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFunctionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFunctionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFunctionMetadata {
    return {
      $type: DeleteFunctionMetadata.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
    };
  },

  toJSON(message: DeleteFunctionMetadata): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFunctionMetadata>, I>>(base?: I): DeleteFunctionMetadata {
    return DeleteFunctionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteFunctionMetadata>, I>>(object: I): DeleteFunctionMetadata {
    const message = createBaseDeleteFunctionMetadata();
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFunctionMetadata.$type, DeleteFunctionMetadata);

function createBaseDeleteFunctionVersionRequest(): DeleteFunctionVersionRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest",
    functionVersionId: "",
    force: false,
  };
}

export const DeleteFunctionVersionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest" as const,

  encode(message: DeleteFunctionVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(18).string(message.functionVersionId);
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFunctionVersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFunctionVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.functionVersionId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.force = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFunctionVersionRequest {
    return {
      $type: DeleteFunctionVersionRequest.$type,
      functionVersionId: isSet(object.functionVersionId) ? globalThis.String(object.functionVersionId) : "",
      force: isSet(object.force) ? globalThis.Boolean(object.force) : false,
    };
  },

  toJSON(message: DeleteFunctionVersionRequest): unknown {
    const obj: any = {};
    if (message.functionVersionId !== "") {
      obj.functionVersionId = message.functionVersionId;
    }
    if (message.force === true) {
      obj.force = message.force;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFunctionVersionRequest>, I>>(base?: I): DeleteFunctionVersionRequest {
    return DeleteFunctionVersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteFunctionVersionRequest>, I>>(object: I): DeleteFunctionVersionRequest {
    const message = createBaseDeleteFunctionVersionRequest();
    message.functionVersionId = object.functionVersionId ?? "";
    message.force = object.force ?? false;
    return message;
  },
};

messageTypeRegistry.set(DeleteFunctionVersionRequest.$type, DeleteFunctionVersionRequest);

function createBaseDeleteFunctionVersionMetadata(): DeleteFunctionVersionMetadata {
  return { $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata", functionVersionId: "" };
}

export const DeleteFunctionVersionMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata" as const,

  encode(message: DeleteFunctionVersionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(18).string(message.functionVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFunctionVersionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFunctionVersionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.functionVersionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFunctionVersionMetadata {
    return {
      $type: DeleteFunctionVersionMetadata.$type,
      functionVersionId: isSet(object.functionVersionId) ? globalThis.String(object.functionVersionId) : "",
    };
  },

  toJSON(message: DeleteFunctionVersionMetadata): unknown {
    const obj: any = {};
    if (message.functionVersionId !== "") {
      obj.functionVersionId = message.functionVersionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFunctionVersionMetadata>, I>>(base?: I): DeleteFunctionVersionMetadata {
    return DeleteFunctionVersionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteFunctionVersionMetadata>, I>>(
    object: I,
  ): DeleteFunctionVersionMetadata {
    const message = createBaseDeleteFunctionVersionMetadata();
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFunctionVersionMetadata.$type, DeleteFunctionVersionMetadata);

function createBaseListRuntimesRequest(): ListRuntimesRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest" };
}

export const ListRuntimesRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest" as const,

  encode(_: ListRuntimesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRuntimesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRuntimesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListRuntimesRequest {
    return { $type: ListRuntimesRequest.$type };
  },

  toJSON(_: ListRuntimesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRuntimesRequest>, I>>(base?: I): ListRuntimesRequest {
    return ListRuntimesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRuntimesRequest>, I>>(_: I): ListRuntimesRequest {
    const message = createBaseListRuntimesRequest();
    return message;
  },
};

messageTypeRegistry.set(ListRuntimesRequest.$type, ListRuntimesRequest);

function createBaseListRuntimesResponse(): ListRuntimesResponse {
  return { $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse", runtimes: [] };
}

export const ListRuntimesResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse" as const,

  encode(message: ListRuntimesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.runtimes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRuntimesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRuntimesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.runtimes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRuntimesResponse {
    return {
      $type: ListRuntimesResponse.$type,
      runtimes: globalThis.Array.isArray(object?.runtimes) ? object.runtimes.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ListRuntimesResponse): unknown {
    const obj: any = {};
    if (message.runtimes?.length) {
      obj.runtimes = message.runtimes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRuntimesResponse>, I>>(base?: I): ListRuntimesResponse {
    return ListRuntimesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRuntimesResponse>, I>>(object: I): ListRuntimesResponse {
    const message = createBaseListRuntimesResponse();
    message.runtimes = object.runtimes?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ListRuntimesResponse.$type, ListRuntimesResponse);

function createBaseListFunctionsVersionsRequest(): ListFunctionsVersionsRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest",
    folderId: undefined,
    functionId: undefined,
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListFunctionsVersionsRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest" as const,

  encode(message: ListFunctionsVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(10).string(message.folderId);
    }
    if (message.functionId !== undefined) {
      writer.uint32(18).string(message.functionId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctionsVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctionsVersionsRequest();
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

          message.functionId = reader.string();
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
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ListFunctionsVersionsRequest {
    return {
      $type: ListFunctionsVersionsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListFunctionsVersionsRequest): unknown {
    const obj: any = {};
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.functionId !== undefined) {
      obj.functionId = message.functionId;
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

  create<I extends Exact<DeepPartial<ListFunctionsVersionsRequest>, I>>(base?: I): ListFunctionsVersionsRequest {
    return ListFunctionsVersionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctionsVersionsRequest>, I>>(object: I): ListFunctionsVersionsRequest {
    const message = createBaseListFunctionsVersionsRequest();
    message.folderId = object.folderId ?? undefined;
    message.functionId = object.functionId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionsVersionsRequest.$type, ListFunctionsVersionsRequest);

function createBaseListFunctionsVersionsResponse(): ListFunctionsVersionsResponse {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse",
    versions: [],
    nextPageToken: "",
  };
}

export const ListFunctionsVersionsResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse" as const,

  encode(message: ListFunctionsVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctionsVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctionsVersionsResponse();
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

  fromJSON(object: any): ListFunctionsVersionsResponse {
    return {
      $type: ListFunctionsVersionsResponse.$type,
      versions: globalThis.Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFunctionsVersionsResponse): unknown {
    const obj: any = {};
    if (message.versions?.length) {
      obj.versions = message.versions.map((e) => Version.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFunctionsVersionsResponse>, I>>(base?: I): ListFunctionsVersionsResponse {
    return ListFunctionsVersionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctionsVersionsResponse>, I>>(
    object: I,
  ): ListFunctionsVersionsResponse {
    const message = createBaseListFunctionsVersionsResponse();
    message.versions = object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionsVersionsResponse.$type, ListFunctionsVersionsResponse);

function createBaseListFunctionOperationsRequest(): ListFunctionOperationsRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest",
    functionId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListFunctionOperationsRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest" as const,

  encode(message: ListFunctionOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctionOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctionOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
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

  fromJSON(object: any): ListFunctionOperationsRequest {
    return {
      $type: ListFunctionOperationsRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListFunctionOperationsRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
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

  create<I extends Exact<DeepPartial<ListFunctionOperationsRequest>, I>>(base?: I): ListFunctionOperationsRequest {
    return ListFunctionOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctionOperationsRequest>, I>>(
    object: I,
  ): ListFunctionOperationsRequest {
    const message = createBaseListFunctionOperationsRequest();
    message.functionId = object.functionId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionOperationsRequest.$type, ListFunctionOperationsRequest);

function createBaseListFunctionOperationsResponse(): ListFunctionOperationsResponse {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListFunctionOperationsResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse" as const,

  encode(message: ListFunctionOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctionOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctionOperationsResponse();
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

  fromJSON(object: any): ListFunctionOperationsResponse {
    return {
      $type: ListFunctionOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFunctionOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFunctionOperationsResponse>, I>>(base?: I): ListFunctionOperationsResponse {
    return ListFunctionOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctionOperationsResponse>, I>>(
    object: I,
  ): ListFunctionOperationsResponse {
    const message = createBaseListFunctionOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionOperationsResponse.$type, ListFunctionOperationsResponse);

function createBaseCreateFunctionVersionRequest(): CreateFunctionVersionRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest",
    functionId: "",
    runtime: "",
    description: "",
    entrypoint: "",
    resources: undefined,
    executionTimeout: undefined,
    serviceAccountId: "",
    package: undefined,
    content: undefined,
    versionId: undefined,
    environment: {},
    tag: [],
    connectivity: undefined,
    namedServiceAccounts: {},
    secrets: [],
    logOptions: undefined,
    storageMounts: [],
    asyncInvocationConfig: undefined,
  };
}

export const CreateFunctionVersionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest" as const,

  encode(message: CreateFunctionVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.runtime !== "") {
      writer.uint32(18).string(message.runtime);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.entrypoint !== "") {
      writer.uint32(34).string(message.entrypoint);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.executionTimeout !== undefined) {
      Duration.encode(message.executionTimeout, writer.uint32(50).fork()).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(58).string(message.serviceAccountId);
    }
    if (message.package !== undefined) {
      Package.encode(message.package, writer.uint32(74).fork()).ldelim();
    }
    if (message.content !== undefined) {
      writer.uint32(82).bytes(message.content);
    }
    if (message.versionId !== undefined) {
      writer.uint32(90).string(message.versionId);
    }
    Object.entries(message.environment).forEach(([key, value]) => {
      CreateFunctionVersionRequest_EnvironmentEntry.encode({
        $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry",
        key: key as any,
        value,
      }, writer.uint32(98).fork()).ldelim();
    });
    for (const v of message.tag) {
      writer.uint32(106).string(v!);
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(message.connectivity, writer.uint32(138).fork()).ldelim();
    }
    Object.entries(message.namedServiceAccounts).forEach(([key, value]) => {
      CreateFunctionVersionRequest_NamedServiceAccountsEntry.encode({
        $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry",
        key: key as any,
        value,
      }, writer.uint32(122).fork()).ldelim();
    });
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.storageMounts) {
      StorageMount.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.asyncInvocationConfig !== undefined) {
      AsyncInvocationConfig.encode(message.asyncInvocationConfig, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFunctionVersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFunctionVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runtime = reader.string();
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

          message.entrypoint = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.executionTimeout = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.package = Package.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.content = reader.bytes() as Buffer;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.versionId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          const entry12 = CreateFunctionVersionRequest_EnvironmentEntry.decode(reader, reader.uint32());
          if (entry12.value !== undefined) {
            message.environment[entry12.key] = entry12.value;
          }
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.tag.push(reader.string());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.connectivity = Connectivity.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          const entry15 = CreateFunctionVersionRequest_NamedServiceAccountsEntry.decode(reader, reader.uint32());
          if (entry15.value !== undefined) {
            message.namedServiceAccounts[entry15.key] = entry15.value;
          }
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.secrets.push(Secret.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.storageMounts.push(StorageMount.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.asyncInvocationConfig = AsyncInvocationConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFunctionVersionRequest {
    return {
      $type: CreateFunctionVersionRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      entrypoint: isSet(object.entrypoint) ? globalThis.String(object.entrypoint) : "",
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      executionTimeout: isSet(object.executionTimeout) ? Duration.fromJSON(object.executionTimeout) : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      package: isSet(object.package) ? Package.fromJSON(object.package) : undefined,
      content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : undefined,
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : undefined,
      environment: isObject(object.environment)
        ? Object.entries(object.environment).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      tag: globalThis.Array.isArray(object?.tag) ? object.tag.map((e: any) => globalThis.String(e)) : [],
      connectivity: isSet(object.connectivity) ? Connectivity.fromJSON(object.connectivity) : undefined,
      namedServiceAccounts: isObject(object.namedServiceAccounts)
        ? Object.entries(object.namedServiceAccounts).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      secrets: globalThis.Array.isArray(object?.secrets) ? object.secrets.map((e: any) => Secret.fromJSON(e)) : [],
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
      storageMounts: globalThis.Array.isArray(object?.storageMounts)
        ? object.storageMounts.map((e: any) => StorageMount.fromJSON(e))
        : [],
      asyncInvocationConfig: isSet(object.asyncInvocationConfig)
        ? AsyncInvocationConfig.fromJSON(object.asyncInvocationConfig)
        : undefined,
    };
  },

  toJSON(message: CreateFunctionVersionRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.entrypoint !== "") {
      obj.entrypoint = message.entrypoint;
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.executionTimeout !== undefined) {
      obj.executionTimeout = Duration.toJSON(message.executionTimeout);
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.package !== undefined) {
      obj.package = Package.toJSON(message.package);
    }
    if (message.content !== undefined) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.versionId !== undefined) {
      obj.versionId = message.versionId;
    }
    if (message.environment) {
      const entries = Object.entries(message.environment);
      if (entries.length > 0) {
        obj.environment = {};
        entries.forEach(([k, v]) => {
          obj.environment[k] = v;
        });
      }
    }
    if (message.tag?.length) {
      obj.tag = message.tag;
    }
    if (message.connectivity !== undefined) {
      obj.connectivity = Connectivity.toJSON(message.connectivity);
    }
    if (message.namedServiceAccounts) {
      const entries = Object.entries(message.namedServiceAccounts);
      if (entries.length > 0) {
        obj.namedServiceAccounts = {};
        entries.forEach(([k, v]) => {
          obj.namedServiceAccounts[k] = v;
        });
      }
    }
    if (message.secrets?.length) {
      obj.secrets = message.secrets.map((e) => Secret.toJSON(e));
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    if (message.storageMounts?.length) {
      obj.storageMounts = message.storageMounts.map((e) => StorageMount.toJSON(e));
    }
    if (message.asyncInvocationConfig !== undefined) {
      obj.asyncInvocationConfig = AsyncInvocationConfig.toJSON(message.asyncInvocationConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFunctionVersionRequest>, I>>(base?: I): CreateFunctionVersionRequest {
    return CreateFunctionVersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFunctionVersionRequest>, I>>(object: I): CreateFunctionVersionRequest {
    const message = createBaseCreateFunctionVersionRequest();
    message.functionId = object.functionId ?? "";
    message.runtime = object.runtime ?? "";
    message.description = object.description ?? "";
    message.entrypoint = object.entrypoint ?? "";
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.executionTimeout = (object.executionTimeout !== undefined && object.executionTimeout !== null)
      ? Duration.fromPartial(object.executionTimeout)
      : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.package = (object.package !== undefined && object.package !== null)
      ? Package.fromPartial(object.package)
      : undefined;
    message.content = object.content ?? undefined;
    message.versionId = object.versionId ?? undefined;
    message.environment = Object.entries(object.environment ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.tag = object.tag?.map((e) => e) || [];
    message.connectivity = (object.connectivity !== undefined && object.connectivity !== null)
      ? Connectivity.fromPartial(object.connectivity)
      : undefined;
    message.namedServiceAccounts = Object.entries(object.namedServiceAccounts ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    message.storageMounts = object.storageMounts?.map((e) => StorageMount.fromPartial(e)) || [];
    message.asyncInvocationConfig =
      (object.asyncInvocationConfig !== undefined && object.asyncInvocationConfig !== null)
        ? AsyncInvocationConfig.fromPartial(object.asyncInvocationConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateFunctionVersionRequest.$type, CreateFunctionVersionRequest);

function createBaseCreateFunctionVersionRequest_EnvironmentEntry(): CreateFunctionVersionRequest_EnvironmentEntry {
  return {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry",
    key: "",
    value: "",
  };
}

export const CreateFunctionVersionRequest_EnvironmentEntry = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry" as const,

  encode(message: CreateFunctionVersionRequest_EnvironmentEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFunctionVersionRequest_EnvironmentEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFunctionVersionRequest_EnvironmentEntry();
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

  fromJSON(object: any): CreateFunctionVersionRequest_EnvironmentEntry {
    return {
      $type: CreateFunctionVersionRequest_EnvironmentEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateFunctionVersionRequest_EnvironmentEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFunctionVersionRequest_EnvironmentEntry>, I>>(
    base?: I,
  ): CreateFunctionVersionRequest_EnvironmentEntry {
    return CreateFunctionVersionRequest_EnvironmentEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFunctionVersionRequest_EnvironmentEntry>, I>>(
    object: I,
  ): CreateFunctionVersionRequest_EnvironmentEntry {
    const message = createBaseCreateFunctionVersionRequest_EnvironmentEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFunctionVersionRequest_EnvironmentEntry.$type,
  CreateFunctionVersionRequest_EnvironmentEntry,
);

function createBaseCreateFunctionVersionRequest_NamedServiceAccountsEntry(): CreateFunctionVersionRequest_NamedServiceAccountsEntry {
  return {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry",
    key: "",
    value: "",
  };
}

export const CreateFunctionVersionRequest_NamedServiceAccountsEntry = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry" as const,

  encode(
    message: CreateFunctionVersionRequest_NamedServiceAccountsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFunctionVersionRequest_NamedServiceAccountsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFunctionVersionRequest_NamedServiceAccountsEntry();
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

  fromJSON(object: any): CreateFunctionVersionRequest_NamedServiceAccountsEntry {
    return {
      $type: CreateFunctionVersionRequest_NamedServiceAccountsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateFunctionVersionRequest_NamedServiceAccountsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFunctionVersionRequest_NamedServiceAccountsEntry>, I>>(
    base?: I,
  ): CreateFunctionVersionRequest_NamedServiceAccountsEntry {
    return CreateFunctionVersionRequest_NamedServiceAccountsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFunctionVersionRequest_NamedServiceAccountsEntry>, I>>(
    object: I,
  ): CreateFunctionVersionRequest_NamedServiceAccountsEntry {
    const message = createBaseCreateFunctionVersionRequest_NamedServiceAccountsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFunctionVersionRequest_NamedServiceAccountsEntry.$type,
  CreateFunctionVersionRequest_NamedServiceAccountsEntry,
);

function createBaseCreateFunctionVersionMetadata(): CreateFunctionVersionMetadata {
  return { $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata", functionVersionId: "" };
}

export const CreateFunctionVersionMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata" as const,

  encode(message: CreateFunctionVersionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFunctionVersionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFunctionVersionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionVersionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFunctionVersionMetadata {
    return {
      $type: CreateFunctionVersionMetadata.$type,
      functionVersionId: isSet(object.functionVersionId) ? globalThis.String(object.functionVersionId) : "",
    };
  },

  toJSON(message: CreateFunctionVersionMetadata): unknown {
    const obj: any = {};
    if (message.functionVersionId !== "") {
      obj.functionVersionId = message.functionVersionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFunctionVersionMetadata>, I>>(base?: I): CreateFunctionVersionMetadata {
    return CreateFunctionVersionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFunctionVersionMetadata>, I>>(
    object: I,
  ): CreateFunctionVersionMetadata {
    const message = createBaseCreateFunctionVersionMetadata();
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFunctionVersionMetadata.$type, CreateFunctionVersionMetadata);

function createBaseSetFunctionTagRequest(): SetFunctionTagRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest", functionVersionId: "", tag: "" };
}

export const SetFunctionTagRequest = {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest" as const,

  encode(message: SetFunctionTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFunctionTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFunctionTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionVersionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetFunctionTagRequest {
    return {
      $type: SetFunctionTagRequest.$type,
      functionVersionId: isSet(object.functionVersionId) ? globalThis.String(object.functionVersionId) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
    };
  },

  toJSON(message: SetFunctionTagRequest): unknown {
    const obj: any = {};
    if (message.functionVersionId !== "") {
      obj.functionVersionId = message.functionVersionId;
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetFunctionTagRequest>, I>>(base?: I): SetFunctionTagRequest {
    return SetFunctionTagRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetFunctionTagRequest>, I>>(object: I): SetFunctionTagRequest {
    const message = createBaseSetFunctionTagRequest();
    message.functionVersionId = object.functionVersionId ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetFunctionTagRequest.$type, SetFunctionTagRequest);

function createBaseRemoveFunctionTagRequest(): RemoveFunctionTagRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest", functionVersionId: "", tag: "" };
}

export const RemoveFunctionTagRequest = {
  $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest" as const,

  encode(message: RemoveFunctionTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFunctionTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveFunctionTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionVersionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveFunctionTagRequest {
    return {
      $type: RemoveFunctionTagRequest.$type,
      functionVersionId: isSet(object.functionVersionId) ? globalThis.String(object.functionVersionId) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
    };
  },

  toJSON(message: RemoveFunctionTagRequest): unknown {
    const obj: any = {};
    if (message.functionVersionId !== "") {
      obj.functionVersionId = message.functionVersionId;
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveFunctionTagRequest>, I>>(base?: I): RemoveFunctionTagRequest {
    return RemoveFunctionTagRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveFunctionTagRequest>, I>>(object: I): RemoveFunctionTagRequest {
    const message = createBaseRemoveFunctionTagRequest();
    message.functionVersionId = object.functionVersionId ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveFunctionTagRequest.$type, RemoveFunctionTagRequest);

function createBaseSetFunctionTagMetadata(): SetFunctionTagMetadata {
  return { $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata", functionVersionId: "" };
}

export const SetFunctionTagMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata" as const,

  encode(message: SetFunctionTagMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFunctionTagMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFunctionTagMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionVersionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetFunctionTagMetadata {
    return {
      $type: SetFunctionTagMetadata.$type,
      functionVersionId: isSet(object.functionVersionId) ? globalThis.String(object.functionVersionId) : "",
    };
  },

  toJSON(message: SetFunctionTagMetadata): unknown {
    const obj: any = {};
    if (message.functionVersionId !== "") {
      obj.functionVersionId = message.functionVersionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetFunctionTagMetadata>, I>>(base?: I): SetFunctionTagMetadata {
    return SetFunctionTagMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetFunctionTagMetadata>, I>>(object: I): SetFunctionTagMetadata {
    const message = createBaseSetFunctionTagMetadata();
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetFunctionTagMetadata.$type, SetFunctionTagMetadata);

function createBaseRemoveFunctionTagMetadata(): RemoveFunctionTagMetadata {
  return { $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata", functionVersionId: "" };
}

export const RemoveFunctionTagMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata" as const,

  encode(message: RemoveFunctionTagMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFunctionTagMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveFunctionTagMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionVersionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveFunctionTagMetadata {
    return {
      $type: RemoveFunctionTagMetadata.$type,
      functionVersionId: isSet(object.functionVersionId) ? globalThis.String(object.functionVersionId) : "",
    };
  },

  toJSON(message: RemoveFunctionTagMetadata): unknown {
    const obj: any = {};
    if (message.functionVersionId !== "") {
      obj.functionVersionId = message.functionVersionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveFunctionTagMetadata>, I>>(base?: I): RemoveFunctionTagMetadata {
    return RemoveFunctionTagMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveFunctionTagMetadata>, I>>(object: I): RemoveFunctionTagMetadata {
    const message = createBaseRemoveFunctionTagMetadata();
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveFunctionTagMetadata.$type, RemoveFunctionTagMetadata);

function createBaseListFunctionTagHistoryRequest(): ListFunctionTagHistoryRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest",
    functionId: "",
    tag: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListFunctionTagHistoryRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest" as const,

  encode(message: ListFunctionTagHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctionTagHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctionTagHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag = reader.string();
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
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ListFunctionTagHistoryRequest {
    return {
      $type: ListFunctionTagHistoryRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListFunctionTagHistoryRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
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

  create<I extends Exact<DeepPartial<ListFunctionTagHistoryRequest>, I>>(base?: I): ListFunctionTagHistoryRequest {
    return ListFunctionTagHistoryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctionTagHistoryRequest>, I>>(
    object: I,
  ): ListFunctionTagHistoryRequest {
    const message = createBaseListFunctionTagHistoryRequest();
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionTagHistoryRequest.$type, ListFunctionTagHistoryRequest);

function createBaseListFunctionTagHistoryResponse(): ListFunctionTagHistoryResponse {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse",
    functionTagHistoryRecord: [],
    nextPageToken: "",
  };
}

export const ListFunctionTagHistoryResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse" as const,

  encode(message: ListFunctionTagHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.functionTagHistoryRecord) {
      ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctionTagHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctionTagHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionTagHistoryRecord.push(
            ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): ListFunctionTagHistoryResponse {
    return {
      $type: ListFunctionTagHistoryResponse.$type,
      functionTagHistoryRecord: globalThis.Array.isArray(object?.functionTagHistoryRecord)
        ? object.functionTagHistoryRecord.map((e: any) =>
          ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.fromJSON(e)
        )
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFunctionTagHistoryResponse): unknown {
    const obj: any = {};
    if (message.functionTagHistoryRecord?.length) {
      obj.functionTagHistoryRecord = message.functionTagHistoryRecord.map((e) =>
        ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.toJSON(e)
      );
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFunctionTagHistoryResponse>, I>>(base?: I): ListFunctionTagHistoryResponse {
    return ListFunctionTagHistoryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctionTagHistoryResponse>, I>>(
    object: I,
  ): ListFunctionTagHistoryResponse {
    const message = createBaseListFunctionTagHistoryResponse();
    message.functionTagHistoryRecord =
      object.functionTagHistoryRecord?.map((e) =>
        ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.fromPartial(e)
      ) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionTagHistoryResponse.$type, ListFunctionTagHistoryResponse);

function createBaseListFunctionTagHistoryResponse_FunctionTagHistoryRecord(): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord",
    functionId: "",
    functionVersionId: "",
    tag: "",
    effectiveFrom: undefined,
    effectiveTo: undefined,
  };
}

export const ListFunctionTagHistoryResponse_FunctionTagHistoryRecord = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord" as const,

  encode(
    message: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.functionVersionId !== "") {
      writer.uint32(26).string(message.functionVersionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.effectiveFrom !== undefined) {
      Timestamp.encode(toTimestamp(message.effectiveFrom), writer.uint32(34).fork()).ldelim();
    }
    if (message.effectiveTo !== undefined) {
      Timestamp.encode(toTimestamp(message.effectiveTo), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFunctionTagHistoryResponse_FunctionTagHistoryRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.functionVersionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.effectiveFrom = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.effectiveTo = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
    return {
      $type: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      functionVersionId: isSet(object.functionVersionId) ? globalThis.String(object.functionVersionId) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
      effectiveFrom: isSet(object.effectiveFrom) ? fromJsonTimestamp(object.effectiveFrom) : undefined,
      effectiveTo: isSet(object.effectiveTo) ? fromJsonTimestamp(object.effectiveTo) : undefined,
    };
  },

  toJSON(message: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.functionVersionId !== "") {
      obj.functionVersionId = message.functionVersionId;
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    if (message.effectiveFrom !== undefined) {
      obj.effectiveFrom = message.effectiveFrom.toISOString();
    }
    if (message.effectiveTo !== undefined) {
      obj.effectiveTo = message.effectiveTo.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFunctionTagHistoryResponse_FunctionTagHistoryRecord>, I>>(
    base?: I,
  ): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
    return ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFunctionTagHistoryResponse_FunctionTagHistoryRecord>, I>>(
    object: I,
  ): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
    const message = createBaseListFunctionTagHistoryResponse_FunctionTagHistoryRecord();
    message.functionId = object.functionId ?? "";
    message.functionVersionId = object.functionVersionId ?? "";
    message.tag = object.tag ?? "";
    message.effectiveFrom = object.effectiveFrom ?? undefined;
    message.effectiveTo = object.effectiveTo ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.$type,
  ListFunctionTagHistoryResponse_FunctionTagHistoryRecord,
);

function createBaseListScalingPoliciesRequest(): ListScalingPoliciesRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest",
    functionId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListScalingPoliciesRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest" as const,

  encode(message: ListScalingPoliciesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListScalingPoliciesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListScalingPoliciesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
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

  fromJSON(object: any): ListScalingPoliciesRequest {
    return {
      $type: ListScalingPoliciesRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListScalingPoliciesRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListScalingPoliciesRequest>, I>>(base?: I): ListScalingPoliciesRequest {
    return ListScalingPoliciesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListScalingPoliciesRequest>, I>>(object: I): ListScalingPoliciesRequest {
    const message = createBaseListScalingPoliciesRequest();
    message.functionId = object.functionId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListScalingPoliciesRequest.$type, ListScalingPoliciesRequest);

function createBaseListScalingPoliciesResponse(): ListScalingPoliciesResponse {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse",
    scalingPolicies: [],
    nextPageToken: "",
  };
}

export const ListScalingPoliciesResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse" as const,

  encode(message: ListScalingPoliciesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.scalingPolicies) {
      ScalingPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListScalingPoliciesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListScalingPoliciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scalingPolicies.push(ScalingPolicy.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListScalingPoliciesResponse {
    return {
      $type: ListScalingPoliciesResponse.$type,
      scalingPolicies: globalThis.Array.isArray(object?.scalingPolicies)
        ? object.scalingPolicies.map((e: any) => ScalingPolicy.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListScalingPoliciesResponse): unknown {
    const obj: any = {};
    if (message.scalingPolicies?.length) {
      obj.scalingPolicies = message.scalingPolicies.map((e) => ScalingPolicy.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListScalingPoliciesResponse>, I>>(base?: I): ListScalingPoliciesResponse {
    return ListScalingPoliciesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListScalingPoliciesResponse>, I>>(object: I): ListScalingPoliciesResponse {
    const message = createBaseListScalingPoliciesResponse();
    message.scalingPolicies = object.scalingPolicies?.map((e) => ScalingPolicy.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListScalingPoliciesResponse.$type, ListScalingPoliciesResponse);

function createBaseSetScalingPolicyRequest(): SetScalingPolicyRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest",
    functionId: "",
    tag: "",
    provisionedInstancesCount: 0,
    zoneInstancesLimit: 0,
    zoneRequestsLimit: 0,
  };
}

export const SetScalingPolicyRequest = {
  $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest" as const,

  encode(message: SetScalingPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.provisionedInstancesCount !== 0) {
      writer.uint32(32).int64(message.provisionedInstancesCount);
    }
    if (message.zoneInstancesLimit !== 0) {
      writer.uint32(40).int64(message.zoneInstancesLimit);
    }
    if (message.zoneRequestsLimit !== 0) {
      writer.uint32(48).int64(message.zoneRequestsLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetScalingPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetScalingPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.provisionedInstancesCount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.zoneInstancesLimit = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.zoneRequestsLimit = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetScalingPolicyRequest {
    return {
      $type: SetScalingPolicyRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
      provisionedInstancesCount: isSet(object.provisionedInstancesCount)
        ? globalThis.Number(object.provisionedInstancesCount)
        : 0,
      zoneInstancesLimit: isSet(object.zoneInstancesLimit) ? globalThis.Number(object.zoneInstancesLimit) : 0,
      zoneRequestsLimit: isSet(object.zoneRequestsLimit) ? globalThis.Number(object.zoneRequestsLimit) : 0,
    };
  },

  toJSON(message: SetScalingPolicyRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    if (message.provisionedInstancesCount !== 0) {
      obj.provisionedInstancesCount = Math.round(message.provisionedInstancesCount);
    }
    if (message.zoneInstancesLimit !== 0) {
      obj.zoneInstancesLimit = Math.round(message.zoneInstancesLimit);
    }
    if (message.zoneRequestsLimit !== 0) {
      obj.zoneRequestsLimit = Math.round(message.zoneRequestsLimit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetScalingPolicyRequest>, I>>(base?: I): SetScalingPolicyRequest {
    return SetScalingPolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetScalingPolicyRequest>, I>>(object: I): SetScalingPolicyRequest {
    const message = createBaseSetScalingPolicyRequest();
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    message.provisionedInstancesCount = object.provisionedInstancesCount ?? 0;
    message.zoneInstancesLimit = object.zoneInstancesLimit ?? 0;
    message.zoneRequestsLimit = object.zoneRequestsLimit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SetScalingPolicyRequest.$type, SetScalingPolicyRequest);

function createBaseSetScalingPolicyMetadata(): SetScalingPolicyMetadata {
  return { $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata", functionId: "" };
}

export const SetScalingPolicyMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata" as const,

  encode(message: SetScalingPolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetScalingPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetScalingPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetScalingPolicyMetadata {
    return {
      $type: SetScalingPolicyMetadata.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
    };
  },

  toJSON(message: SetScalingPolicyMetadata): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetScalingPolicyMetadata>, I>>(base?: I): SetScalingPolicyMetadata {
    return SetScalingPolicyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetScalingPolicyMetadata>, I>>(object: I): SetScalingPolicyMetadata {
    const message = createBaseSetScalingPolicyMetadata();
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetScalingPolicyMetadata.$type, SetScalingPolicyMetadata);

function createBaseRemoveScalingPolicyRequest(): RemoveScalingPolicyRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest", functionId: "", tag: "" };
}

export const RemoveScalingPolicyRequest = {
  $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest" as const,

  encode(message: RemoveScalingPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveScalingPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveScalingPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveScalingPolicyRequest {
    return {
      $type: RemoveScalingPolicyRequest.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
    };
  },

  toJSON(message: RemoveScalingPolicyRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveScalingPolicyRequest>, I>>(base?: I): RemoveScalingPolicyRequest {
    return RemoveScalingPolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveScalingPolicyRequest>, I>>(object: I): RemoveScalingPolicyRequest {
    const message = createBaseRemoveScalingPolicyRequest();
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveScalingPolicyRequest.$type, RemoveScalingPolicyRequest);

function createBaseRemoveScalingPolicyMetadata(): RemoveScalingPolicyMetadata {
  return { $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata", functionId: "" };
}

export const RemoveScalingPolicyMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata" as const,

  encode(message: RemoveScalingPolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveScalingPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveScalingPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveScalingPolicyMetadata {
    return {
      $type: RemoveScalingPolicyMetadata.$type,
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
    };
  },

  toJSON(message: RemoveScalingPolicyMetadata): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveScalingPolicyMetadata>, I>>(base?: I): RemoveScalingPolicyMetadata {
    return RemoveScalingPolicyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveScalingPolicyMetadata>, I>>(object: I): RemoveScalingPolicyMetadata {
    const message = createBaseRemoveScalingPolicyMetadata();
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveScalingPolicyMetadata.$type, RemoveScalingPolicyMetadata);

/** A set of methods for managing serverless functions. */
export type FunctionServiceService = typeof FunctionServiceService;
export const FunctionServiceService = {
  /**
   * Returns the specified function.
   *
   * To get the list of all available functions, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFunctionRequest) => Buffer.from(GetFunctionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFunctionRequest.decode(value),
    responseSerialize: (value: Function) => Buffer.from(Function.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Function.decode(value),
  },
  /** Retrieves the list of functions in the specified folder. */
  list: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFunctionsRequest) => Buffer.from(ListFunctionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFunctionsRequest.decode(value),
    responseSerialize: (value: ListFunctionsResponse) => Buffer.from(ListFunctionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFunctionsResponse.decode(value),
  },
  /** Creates a function in the specified folder. */
  create: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFunctionRequest) => Buffer.from(CreateFunctionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateFunctionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified function. */
  update: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateFunctionRequest) => Buffer.from(UpdateFunctionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateFunctionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified function. */
  delete: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFunctionRequest) => Buffer.from(DeleteFunctionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteFunctionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified version of a function.
   *
   * To get the list of available version, make a [ListVersions] request.
   */
  getVersion: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFunctionVersionRequest) =>
      Buffer.from(GetFunctionVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFunctionVersionRequest.decode(value),
    responseSerialize: (value: Version) => Buffer.from(Version.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Version.decode(value),
  },
  /**
   * Returns all versions with the specified tag.
   *
   * To get the list of all available versions, make a [ListVersions] request.
   */
  getVersionByTag: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFunctionVersionByTagRequest) =>
      Buffer.from(GetFunctionVersionByTagRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFunctionVersionByTagRequest.decode(value),
    responseSerialize: (value: Version) => Buffer.from(Version.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Version.decode(value),
  },
  /**
   * Retrieves the list of versions for the specified function, or of all function versions
   * in the specified folder.
   */
  listVersions: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFunctionsVersionsRequest) =>
      Buffer.from(ListFunctionsVersionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFunctionsVersionsRequest.decode(value),
    responseSerialize: (value: ListFunctionsVersionsResponse) =>
      Buffer.from(ListFunctionsVersionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFunctionsVersionsResponse.decode(value),
  },
  /**
   * Deletes the specified version of a function.
   *
   * NOTE: old untagged function versions are deleted automatically.
   */
  deleteVersion: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/DeleteVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFunctionVersionRequest) =>
      Buffer.from(DeleteFunctionVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteFunctionVersionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Set a tag for the specified version of a function. */
  setTag: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetTag",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetFunctionTagRequest) => Buffer.from(SetFunctionTagRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetFunctionTagRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Remove a tag from the specified version of a function. */
  removeTag: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveFunctionTagRequest) => Buffer.from(RemoveFunctionTagRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveFunctionTagRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the log of tags assigned to versions of the specified function. */
  listTagHistory: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFunctionTagHistoryRequest) =>
      Buffer.from(ListFunctionTagHistoryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFunctionTagHistoryRequest.decode(value),
    responseSerialize: (value: ListFunctionTagHistoryResponse) =>
      Buffer.from(ListFunctionTagHistoryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFunctionTagHistoryResponse.decode(value),
  },
  /** Creates a version for the specified function. */
  createVersion: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFunctionVersionRequest) =>
      Buffer.from(CreateFunctionVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateFunctionVersionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists available runtime environments for the specified function. */
  listRuntimes: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRuntimesRequest) => Buffer.from(ListRuntimesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListRuntimesRequest.decode(value),
    responseSerialize: (value: ListRuntimesResponse) => Buffer.from(ListRuntimesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListRuntimesResponse.decode(value),
  },
  /** Lists operations for the specified function. */
  listOperations: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFunctionOperationsRequest) =>
      Buffer.from(ListFunctionOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFunctionOperationsRequest.decode(value),
    responseSerialize: (value: ListFunctionOperationsResponse) =>
      Buffer.from(ListFunctionOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFunctionOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified function. */
  listAccessBindings: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the function. */
  setAccessBindings: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified function. */
  updateAccessBindings: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists existing scaling policies for specified function */
  listScalingPolicies: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListScalingPolicies",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListScalingPoliciesRequest) =>
      Buffer.from(ListScalingPoliciesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListScalingPoliciesRequest.decode(value),
    responseSerialize: (value: ListScalingPoliciesResponse) =>
      Buffer.from(ListScalingPoliciesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListScalingPoliciesResponse.decode(value),
  },
  /** Set scaling policy for specified function and tag */
  setScalingPolicy: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetScalingPolicy",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetScalingPolicyRequest) => Buffer.from(SetScalingPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetScalingPolicyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Remove scaling policy for specified function and tag */
  removeScalingPolicy: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveScalingPolicy",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveScalingPolicyRequest) =>
      Buffer.from(RemoveScalingPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveScalingPolicyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface FunctionServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified function.
   *
   * To get the list of all available functions, make a [List] request.
   */
  get: handleUnaryCall<GetFunctionRequest, Function>;
  /** Retrieves the list of functions in the specified folder. */
  list: handleUnaryCall<ListFunctionsRequest, ListFunctionsResponse>;
  /** Creates a function in the specified folder. */
  create: handleUnaryCall<CreateFunctionRequest, Operation>;
  /** Updates the specified function. */
  update: handleUnaryCall<UpdateFunctionRequest, Operation>;
  /** Deletes the specified function. */
  delete: handleUnaryCall<DeleteFunctionRequest, Operation>;
  /**
   * Returns the specified version of a function.
   *
   * To get the list of available version, make a [ListVersions] request.
   */
  getVersion: handleUnaryCall<GetFunctionVersionRequest, Version>;
  /**
   * Returns all versions with the specified tag.
   *
   * To get the list of all available versions, make a [ListVersions] request.
   */
  getVersionByTag: handleUnaryCall<GetFunctionVersionByTagRequest, Version>;
  /**
   * Retrieves the list of versions for the specified function, or of all function versions
   * in the specified folder.
   */
  listVersions: handleUnaryCall<ListFunctionsVersionsRequest, ListFunctionsVersionsResponse>;
  /**
   * Deletes the specified version of a function.
   *
   * NOTE: old untagged function versions are deleted automatically.
   */
  deleteVersion: handleUnaryCall<DeleteFunctionVersionRequest, Operation>;
  /** Set a tag for the specified version of a function. */
  setTag: handleUnaryCall<SetFunctionTagRequest, Operation>;
  /** Remove a tag from the specified version of a function. */
  removeTag: handleUnaryCall<RemoveFunctionTagRequest, Operation>;
  /** Returns the log of tags assigned to versions of the specified function. */
  listTagHistory: handleUnaryCall<ListFunctionTagHistoryRequest, ListFunctionTagHistoryResponse>;
  /** Creates a version for the specified function. */
  createVersion: handleUnaryCall<CreateFunctionVersionRequest, Operation>;
  /** Lists available runtime environments for the specified function. */
  listRuntimes: handleUnaryCall<ListRuntimesRequest, ListRuntimesResponse>;
  /** Lists operations for the specified function. */
  listOperations: handleUnaryCall<ListFunctionOperationsRequest, ListFunctionOperationsResponse>;
  /** Lists existing access bindings for the specified function. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the function. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified function. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /** Lists existing scaling policies for specified function */
  listScalingPolicies: handleUnaryCall<ListScalingPoliciesRequest, ListScalingPoliciesResponse>;
  /** Set scaling policy for specified function and tag */
  setScalingPolicy: handleUnaryCall<SetScalingPolicyRequest, Operation>;
  /** Remove scaling policy for specified function and tag */
  removeScalingPolicy: handleUnaryCall<RemoveScalingPolicyRequest, Operation>;
}

export interface FunctionServiceClient extends Client {
  /**
   * Returns the specified function.
   *
   * To get the list of all available functions, make a [List] request.
   */
  get(request: GetFunctionRequest, callback: (error: ServiceError | null, response: Function) => void): ClientUnaryCall;
  get(
    request: GetFunctionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Function) => void,
  ): ClientUnaryCall;
  get(
    request: GetFunctionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Function) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of functions in the specified folder. */
  list(
    request: ListFunctionsRequest,
    callback: (error: ServiceError | null, response: ListFunctionsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListFunctionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFunctionsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListFunctionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFunctionsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a function in the specified folder. */
  create(
    request: CreateFunctionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateFunctionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateFunctionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified function. */
  update(
    request: UpdateFunctionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateFunctionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateFunctionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified function. */
  delete(
    request: DeleteFunctionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteFunctionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteFunctionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Returns the specified version of a function.
   *
   * To get the list of available version, make a [ListVersions] request.
   */
  getVersion(
    request: GetFunctionVersionRequest,
    callback: (error: ServiceError | null, response: Version) => void,
  ): ClientUnaryCall;
  getVersion(
    request: GetFunctionVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Version) => void,
  ): ClientUnaryCall;
  getVersion(
    request: GetFunctionVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Version) => void,
  ): ClientUnaryCall;
  /**
   * Returns all versions with the specified tag.
   *
   * To get the list of all available versions, make a [ListVersions] request.
   */
  getVersionByTag(
    request: GetFunctionVersionByTagRequest,
    callback: (error: ServiceError | null, response: Version) => void,
  ): ClientUnaryCall;
  getVersionByTag(
    request: GetFunctionVersionByTagRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Version) => void,
  ): ClientUnaryCall;
  getVersionByTag(
    request: GetFunctionVersionByTagRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Version) => void,
  ): ClientUnaryCall;
  /**
   * Retrieves the list of versions for the specified function, or of all function versions
   * in the specified folder.
   */
  listVersions(
    request: ListFunctionsVersionsRequest,
    callback: (error: ServiceError | null, response: ListFunctionsVersionsResponse) => void,
  ): ClientUnaryCall;
  listVersions(
    request: ListFunctionsVersionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFunctionsVersionsResponse) => void,
  ): ClientUnaryCall;
  listVersions(
    request: ListFunctionsVersionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFunctionsVersionsResponse) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified version of a function.
   *
   * NOTE: old untagged function versions are deleted automatically.
   */
  deleteVersion(
    request: DeleteFunctionVersionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteVersion(
    request: DeleteFunctionVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteVersion(
    request: DeleteFunctionVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Set a tag for the specified version of a function. */
  setTag(
    request: SetFunctionTagRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setTag(
    request: SetFunctionTagRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setTag(
    request: SetFunctionTagRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Remove a tag from the specified version of a function. */
  removeTag(
    request: RemoveFunctionTagRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeTag(
    request: RemoveFunctionTagRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeTag(
    request: RemoveFunctionTagRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns the log of tags assigned to versions of the specified function. */
  listTagHistory(
    request: ListFunctionTagHistoryRequest,
    callback: (error: ServiceError | null, response: ListFunctionTagHistoryResponse) => void,
  ): ClientUnaryCall;
  listTagHistory(
    request: ListFunctionTagHistoryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFunctionTagHistoryResponse) => void,
  ): ClientUnaryCall;
  listTagHistory(
    request: ListFunctionTagHistoryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFunctionTagHistoryResponse) => void,
  ): ClientUnaryCall;
  /** Creates a version for the specified function. */
  createVersion(
    request: CreateFunctionVersionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createVersion(
    request: CreateFunctionVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createVersion(
    request: CreateFunctionVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists available runtime environments for the specified function. */
  listRuntimes(
    request: ListRuntimesRequest,
    callback: (error: ServiceError | null, response: ListRuntimesResponse) => void,
  ): ClientUnaryCall;
  listRuntimes(
    request: ListRuntimesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListRuntimesResponse) => void,
  ): ClientUnaryCall;
  listRuntimes(
    request: ListRuntimesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListRuntimesResponse) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified function. */
  listOperations(
    request: ListFunctionOperationsRequest,
    callback: (error: ServiceError | null, response: ListFunctionOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListFunctionOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFunctionOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListFunctionOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFunctionOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified function. */
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
  /** Sets access bindings for the function. */
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
  /** Updates access bindings for the specified function. */
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
  /** Lists existing scaling policies for specified function */
  listScalingPolicies(
    request: ListScalingPoliciesRequest,
    callback: (error: ServiceError | null, response: ListScalingPoliciesResponse) => void,
  ): ClientUnaryCall;
  listScalingPolicies(
    request: ListScalingPoliciesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListScalingPoliciesResponse) => void,
  ): ClientUnaryCall;
  listScalingPolicies(
    request: ListScalingPoliciesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListScalingPoliciesResponse) => void,
  ): ClientUnaryCall;
  /** Set scaling policy for specified function and tag */
  setScalingPolicy(
    request: SetScalingPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setScalingPolicy(
    request: SetScalingPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  setScalingPolicy(
    request: SetScalingPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Remove scaling policy for specified function and tag */
  removeScalingPolicy(
    request: RemoveScalingPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeScalingPolicy(
    request: RemoveScalingPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeScalingPolicy(
    request: RemoveScalingPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const FunctionServiceClient = makeGenericClientConstructor(
  FunctionServiceService,
  "yandex.cloud.serverless.functions.v1.FunctionService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FunctionServiceClient;
  service: typeof FunctionServiceService;
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
  const seconds = date.getTime() / 1_000;
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
