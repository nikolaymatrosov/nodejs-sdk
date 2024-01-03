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
import { ApiGateway, Canary, Connectivity, LogOptions, VariableInput } from "./apigateway";

export const protobufPackage = "yandex.cloud.serverless.apigateway.v1";

export interface GetApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest";
  /**
   * ID of the API gateway to return.
   *
   * To get a API gateway ID make a [ApiGatewayService.List] request.
   */
  apiGatewayId: string;
}

export interface ListApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest";
  /**
   * ID of the folder to list API gateways in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListApiGatewayResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListApiGatewayResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters functions listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [ApiGateway.name](index) field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z]([-a-z0-9]{0,61}[a-z0-9])?`.
   * Example of a filter: `name=my-apigw`.
   */
  filter: string;
}

export interface ListApiGatewayResponse {
  $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse";
  /** List of API gateways in the specified folder. */
  apiGateways: ApiGateway[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListApiGatewayRequest.page_size], use `nextPageToken` as the value
   * for the [ListApiGatewayRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest";
  /**
   * ID of the folder to create an API gateway in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the API gateway.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the API gateway. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** The text of specification, JSON or YAML. */
  openapiSpec?:
    | string
    | undefined;
  /** Gateway connectivity. If specified the gateway will be attached to specified network/subnet(s). */
  connectivity?:
    | Connectivity
    | undefined;
  /** Options for logging from the API gateway. */
  logOptions?:
    | LogOptions
    | undefined;
  /** Values of variables defined in the specification. */
  variables: { [key: string]: VariableInput };
  /** Canary release of the gateway. */
  canary?: Canary | undefined;
}

export interface CreateApiGatewayRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateApiGatewayRequest_VariablesEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry";
  key: string;
  value?: VariableInput | undefined;
}

export interface UpdateApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest";
  /**
   * ID of the API gateway to update.
   *
   * To get a API gateway ID make a [ApiGatewayService.List] request.
   */
  apiGatewayId: string;
  /** Field mask that specifies which attributes of the API gateway should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the API gateway.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description for the API gateway. */
  description: string;
  /**
   * API gateway labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label, request the current set of labels with a [yandex.cloud.serverless.apigateway.v1.ApiGatewayService.Get] request.
   */
  labels: { [key: string]: string };
  /** The text of specification, JSON or YAML. */
  openapiSpec?:
    | string
    | undefined;
  /** Gateway connectivity. If specified the gateway will be attached to specified network/subnet(s). */
  connectivity?:
    | Connectivity
    | undefined;
  /** Options for logging from the API gateway. */
  logOptions?:
    | LogOptions
    | undefined;
  /** Values of variables defined in the specification. */
  variables: { [key: string]: VariableInput };
  /** Canary release of the gateway. */
  canary?: Canary | undefined;
}

export interface UpdateApiGatewayRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateApiGatewayRequest_VariablesEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry";
  key: string;
  value?: VariableInput | undefined;
}

export interface DeleteApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest";
  /**
   * ID of the API gateway to update.
   *
   * To get a API gateway ID make a [ApiGatewayService.List] request.
   */
  apiGatewayId: string;
}

export interface AddDomainRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest";
  /** ID of the API gateway that the domain is attached to. */
  apiGatewayId: string;
  /** Name of the attaching domain. */
  domainName: string;
  /** ID of certificate for the attaching domain. */
  certificateId: string;
}

export interface RemoveDomainRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest";
  /** ID of the API gateway from which the domain is being detached. */
  apiGatewayId: string;
  /** ID of the detaching domain. */
  domainId: string;
}

export interface CreateApiGatewayMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata";
  /** ID of the API gateway that is being created. */
  apiGatewayId: string;
}

export interface UpdateApiGatewayMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata";
  /** ID of the API gateway that is being updated. */
  apiGatewayId: string;
}

export interface DeleteApiGatewayMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata";
  /** ID of the API gateway that is being deleted. */
  apiGatewayId: string;
}

export interface AddDomainMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata";
  /** ID of the API gateway that the domain is attached to. */
  apiGatewayId: string;
  /** ID of the attached domain. */
  domainId: string;
  /** Name of the attaching domain. */
  domainName: string;
  /** ID of the certificate for provided domain. */
  certificateId: string;
}

export interface RemoveDomainMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata";
  /** ID of the API gateway from which the domain is being detached. */
  apiGatewayId: string;
  /** ID of the detaching domain. */
  domainId: string;
}

export interface ListOperationsRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest";
  /** ID of the API gateway to list operations for. */
  apiGatewayId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListOperationsResponse.next_page_token] returned by a previous list request.
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

export interface ListOperationsResponse {
  $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse";
  /** List of operations for the specified API gateway. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListOperationsRequest.page_size], use `nextPageToken` as the value
   * for the [ListOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface GetOpenapiSpecRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest";
  /** ID of the API gateway to get specification from. */
  apiGatewayId: string;
  /** Format of returned specification. Default is the original format used in [CreateApiGatewayRequest]. */
  format: GetOpenapiSpecRequest_Format;
}

export enum GetOpenapiSpecRequest_Format {
  FORMAT_UNSPECIFIED = 0,
  JSON = 1,
  YAML = 2,
  UNRECOGNIZED = -1,
}

export function getOpenapiSpecRequest_FormatFromJSON(object: any): GetOpenapiSpecRequest_Format {
  switch (object) {
    case 0:
    case "FORMAT_UNSPECIFIED":
      return GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED;
    case 1:
    case "JSON":
      return GetOpenapiSpecRequest_Format.JSON;
    case 2:
    case "YAML":
      return GetOpenapiSpecRequest_Format.YAML;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetOpenapiSpecRequest_Format.UNRECOGNIZED;
  }
}

export function getOpenapiSpecRequest_FormatToJSON(object: GetOpenapiSpecRequest_Format): string {
  switch (object) {
    case GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED:
      return "FORMAT_UNSPECIFIED";
    case GetOpenapiSpecRequest_Format.JSON:
      return "JSON";
    case GetOpenapiSpecRequest_Format.YAML:
      return "YAML";
    case GetOpenapiSpecRequest_Format.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetOpenapiSpecResponse {
  $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse";
  /** ID of the API gateway. */
  apiGatewayId: string;
  /** The text of specification, JSON or YAML. */
  openapiSpec: string;
}

function createBaseGetApiGatewayRequest(): GetApiGatewayRequest {
  return { $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest", apiGatewayId: "" };
}

export const GetApiGatewayRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest" as const,

  encode(message: GetApiGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetApiGatewayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetApiGatewayRequest {
    return {
      $type: GetApiGatewayRequest.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
    };
  },

  toJSON(message: GetApiGatewayRequest): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetApiGatewayRequest>, I>>(base?: I): GetApiGatewayRequest {
    return GetApiGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetApiGatewayRequest>, I>>(object: I): GetApiGatewayRequest {
    const message = createBaseGetApiGatewayRequest();
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetApiGatewayRequest.$type, GetApiGatewayRequest);

function createBaseListApiGatewayRequest(): ListApiGatewayRequest {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListApiGatewayRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest" as const,

  encode(message: ListApiGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListApiGatewayRequest();
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

  fromJSON(object: any): ListApiGatewayRequest {
    return {
      $type: ListApiGatewayRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListApiGatewayRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListApiGatewayRequest>, I>>(base?: I): ListApiGatewayRequest {
    return ListApiGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListApiGatewayRequest>, I>>(object: I): ListApiGatewayRequest {
    const message = createBaseListApiGatewayRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiGatewayRequest.$type, ListApiGatewayRequest);

function createBaseListApiGatewayResponse(): ListApiGatewayResponse {
  return { $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse", apiGateways: [], nextPageToken: "" };
}

export const ListApiGatewayResponse = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse" as const,

  encode(message: ListApiGatewayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.apiGateways) {
      ApiGateway.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiGatewayResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListApiGatewayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGateways.push(ApiGateway.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListApiGatewayResponse {
    return {
      $type: ListApiGatewayResponse.$type,
      apiGateways: globalThis.Array.isArray(object?.apiGateways)
        ? object.apiGateways.map((e: any) => ApiGateway.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListApiGatewayResponse): unknown {
    const obj: any = {};
    if (message.apiGateways?.length) {
      obj.apiGateways = message.apiGateways.map((e) => ApiGateway.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListApiGatewayResponse>, I>>(base?: I): ListApiGatewayResponse {
    return ListApiGatewayResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListApiGatewayResponse>, I>>(object: I): ListApiGatewayResponse {
    const message = createBaseListApiGatewayResponse();
    message.apiGateways = object.apiGateways?.map((e) => ApiGateway.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiGatewayResponse.$type, ListApiGatewayResponse);

function createBaseCreateApiGatewayRequest(): CreateApiGatewayRequest {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    openapiSpec: undefined,
    connectivity: undefined,
    logOptions: undefined,
    variables: {},
    canary: undefined,
  };
}

export const CreateApiGatewayRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest" as const,

  encode(message: CreateApiGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateApiGatewayRequest_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.openapiSpec !== undefined) {
      writer.uint32(42).string(message.openapiSpec);
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(message.connectivity, writer.uint32(50).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      CreateApiGatewayRequest_VariablesEntry.encode({
        $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry",
        key: key as any,
        value,
      }, writer.uint32(66).fork()).ldelim();
    });
    if (message.canary !== undefined) {
      Canary.encode(message.canary, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateApiGatewayRequest();
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

          const entry4 = CreateApiGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.openapiSpec = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.connectivity = Connectivity.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = CreateApiGatewayRequest_VariablesEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.variables[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.canary = Canary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateApiGatewayRequest {
    return {
      $type: CreateApiGatewayRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      openapiSpec: isSet(object.openapiSpec) ? globalThis.String(object.openapiSpec) : undefined,
      connectivity: isSet(object.connectivity) ? Connectivity.fromJSON(object.connectivity) : undefined,
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
      variables: isObject(object.variables)
        ? Object.entries(object.variables).reduce<{ [key: string]: VariableInput }>((acc, [key, value]) => {
          acc[key] = VariableInput.fromJSON(value);
          return acc;
        }, {})
        : {},
      canary: isSet(object.canary) ? Canary.fromJSON(object.canary) : undefined,
    };
  },

  toJSON(message: CreateApiGatewayRequest): unknown {
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
    if (message.openapiSpec !== undefined) {
      obj.openapiSpec = message.openapiSpec;
    }
    if (message.connectivity !== undefined) {
      obj.connectivity = Connectivity.toJSON(message.connectivity);
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    if (message.variables) {
      const entries = Object.entries(message.variables);
      if (entries.length > 0) {
        obj.variables = {};
        entries.forEach(([k, v]) => {
          obj.variables[k] = VariableInput.toJSON(v);
        });
      }
    }
    if (message.canary !== undefined) {
      obj.canary = Canary.toJSON(message.canary);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateApiGatewayRequest>, I>>(base?: I): CreateApiGatewayRequest {
    return CreateApiGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateApiGatewayRequest>, I>>(object: I): CreateApiGatewayRequest {
    const message = createBaseCreateApiGatewayRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.openapiSpec = object.openapiSpec ?? undefined;
    message.connectivity = (object.connectivity !== undefined && object.connectivity !== null)
      ? Connectivity.fromPartial(object.connectivity)
      : undefined;
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    message.variables = Object.entries(object.variables ?? {}).reduce<{ [key: string]: VariableInput }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = VariableInput.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.canary = (object.canary !== undefined && object.canary !== null)
      ? Canary.fromPartial(object.canary)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateApiGatewayRequest.$type, CreateApiGatewayRequest);

function createBaseCreateApiGatewayRequest_LabelsEntry(): CreateApiGatewayRequest_LabelsEntry {
  return { $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry", key: "", value: "" };
}

export const CreateApiGatewayRequest_LabelsEntry = {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry" as const,

  encode(message: CreateApiGatewayRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateApiGatewayRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateApiGatewayRequest_LabelsEntry();
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

  fromJSON(object: any): CreateApiGatewayRequest_LabelsEntry {
    return {
      $type: CreateApiGatewayRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateApiGatewayRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateApiGatewayRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateApiGatewayRequest_LabelsEntry {
    return CreateApiGatewayRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateApiGatewayRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateApiGatewayRequest_LabelsEntry {
    const message = createBaseCreateApiGatewayRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateApiGatewayRequest_LabelsEntry.$type, CreateApiGatewayRequest_LabelsEntry);

function createBaseCreateApiGatewayRequest_VariablesEntry(): CreateApiGatewayRequest_VariablesEntry {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry",
    key: "",
    value: undefined,
  };
}

export const CreateApiGatewayRequest_VariablesEntry = {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry" as const,

  encode(message: CreateApiGatewayRequest_VariablesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateApiGatewayRequest_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateApiGatewayRequest_VariablesEntry();
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

          message.value = VariableInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateApiGatewayRequest_VariablesEntry {
    return {
      $type: CreateApiGatewayRequest_VariablesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? VariableInput.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CreateApiGatewayRequest_VariablesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = VariableInput.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateApiGatewayRequest_VariablesEntry>, I>>(
    base?: I,
  ): CreateApiGatewayRequest_VariablesEntry {
    return CreateApiGatewayRequest_VariablesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateApiGatewayRequest_VariablesEntry>, I>>(
    object: I,
  ): CreateApiGatewayRequest_VariablesEntry {
    const message = createBaseCreateApiGatewayRequest_VariablesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? VariableInput.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateApiGatewayRequest_VariablesEntry.$type, CreateApiGatewayRequest_VariablesEntry);

function createBaseUpdateApiGatewayRequest(): UpdateApiGatewayRequest {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest",
    apiGatewayId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    openapiSpec: undefined,
    connectivity: undefined,
    logOptions: undefined,
    variables: {},
    canary: undefined,
  };
}

export const UpdateApiGatewayRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest" as const,

  encode(message: UpdateApiGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
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
      UpdateApiGatewayRequest_LabelsEntry.encode({
        $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.openapiSpec !== undefined) {
      writer.uint32(50).string(message.openapiSpec);
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(message.connectivity, writer.uint32(58).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(66).fork()).ldelim();
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      UpdateApiGatewayRequest_VariablesEntry.encode({
        $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry",
        key: key as any,
        value,
      }, writer.uint32(74).fork()).ldelim();
    });
    if (message.canary !== undefined) {
      Canary.encode(message.canary, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateApiGatewayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
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

          const entry5 = UpdateApiGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.openapiSpec = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.connectivity = Connectivity.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = UpdateApiGatewayRequest_VariablesEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.variables[entry9.key] = entry9.value;
          }
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.canary = Canary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateApiGatewayRequest {
    return {
      $type: UpdateApiGatewayRequest.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      openapiSpec: isSet(object.openapiSpec) ? globalThis.String(object.openapiSpec) : undefined,
      connectivity: isSet(object.connectivity) ? Connectivity.fromJSON(object.connectivity) : undefined,
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
      variables: isObject(object.variables)
        ? Object.entries(object.variables).reduce<{ [key: string]: VariableInput }>((acc, [key, value]) => {
          acc[key] = VariableInput.fromJSON(value);
          return acc;
        }, {})
        : {},
      canary: isSet(object.canary) ? Canary.fromJSON(object.canary) : undefined,
    };
  },

  toJSON(message: UpdateApiGatewayRequest): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
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
    if (message.openapiSpec !== undefined) {
      obj.openapiSpec = message.openapiSpec;
    }
    if (message.connectivity !== undefined) {
      obj.connectivity = Connectivity.toJSON(message.connectivity);
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    if (message.variables) {
      const entries = Object.entries(message.variables);
      if (entries.length > 0) {
        obj.variables = {};
        entries.forEach(([k, v]) => {
          obj.variables[k] = VariableInput.toJSON(v);
        });
      }
    }
    if (message.canary !== undefined) {
      obj.canary = Canary.toJSON(message.canary);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateApiGatewayRequest>, I>>(base?: I): UpdateApiGatewayRequest {
    return UpdateApiGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateApiGatewayRequest>, I>>(object: I): UpdateApiGatewayRequest {
    const message = createBaseUpdateApiGatewayRequest();
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.openapiSpec = object.openapiSpec ?? undefined;
    message.connectivity = (object.connectivity !== undefined && object.connectivity !== null)
      ? Connectivity.fromPartial(object.connectivity)
      : undefined;
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    message.variables = Object.entries(object.variables ?? {}).reduce<{ [key: string]: VariableInput }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = VariableInput.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.canary = (object.canary !== undefined && object.canary !== null)
      ? Canary.fromPartial(object.canary)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateApiGatewayRequest.$type, UpdateApiGatewayRequest);

function createBaseUpdateApiGatewayRequest_LabelsEntry(): UpdateApiGatewayRequest_LabelsEntry {
  return { $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateApiGatewayRequest_LabelsEntry = {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry" as const,

  encode(message: UpdateApiGatewayRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApiGatewayRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateApiGatewayRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateApiGatewayRequest_LabelsEntry {
    return {
      $type: UpdateApiGatewayRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateApiGatewayRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateApiGatewayRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateApiGatewayRequest_LabelsEntry {
    return UpdateApiGatewayRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateApiGatewayRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateApiGatewayRequest_LabelsEntry {
    const message = createBaseUpdateApiGatewayRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateApiGatewayRequest_LabelsEntry.$type, UpdateApiGatewayRequest_LabelsEntry);

function createBaseUpdateApiGatewayRequest_VariablesEntry(): UpdateApiGatewayRequest_VariablesEntry {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry",
    key: "",
    value: undefined,
  };
}

export const UpdateApiGatewayRequest_VariablesEntry = {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry" as const,

  encode(message: UpdateApiGatewayRequest_VariablesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApiGatewayRequest_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateApiGatewayRequest_VariablesEntry();
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

          message.value = VariableInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateApiGatewayRequest_VariablesEntry {
    return {
      $type: UpdateApiGatewayRequest_VariablesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? VariableInput.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: UpdateApiGatewayRequest_VariablesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = VariableInput.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateApiGatewayRequest_VariablesEntry>, I>>(
    base?: I,
  ): UpdateApiGatewayRequest_VariablesEntry {
    return UpdateApiGatewayRequest_VariablesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateApiGatewayRequest_VariablesEntry>, I>>(
    object: I,
  ): UpdateApiGatewayRequest_VariablesEntry {
    const message = createBaseUpdateApiGatewayRequest_VariablesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? VariableInput.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateApiGatewayRequest_VariablesEntry.$type, UpdateApiGatewayRequest_VariablesEntry);

function createBaseDeleteApiGatewayRequest(): DeleteApiGatewayRequest {
  return { $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest", apiGatewayId: "" };
}

export const DeleteApiGatewayRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest" as const,

  encode(message: DeleteApiGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteApiGatewayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteApiGatewayRequest {
    return {
      $type: DeleteApiGatewayRequest.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
    };
  },

  toJSON(message: DeleteApiGatewayRequest): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteApiGatewayRequest>, I>>(base?: I): DeleteApiGatewayRequest {
    return DeleteApiGatewayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteApiGatewayRequest>, I>>(object: I): DeleteApiGatewayRequest {
    const message = createBaseDeleteApiGatewayRequest();
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteApiGatewayRequest.$type, DeleteApiGatewayRequest);

function createBaseAddDomainRequest(): AddDomainRequest {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest",
    apiGatewayId: "",
    domainName: "",
    certificateId: "",
  };
}

export const AddDomainRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest" as const,

  encode(message: AddDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.domainName !== "") {
      writer.uint32(26).string(message.domainName);
    }
    if (message.certificateId !== "") {
      writer.uint32(34).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.domainName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.certificateId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDomainRequest {
    return {
      $type: AddDomainRequest.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
      domainName: isSet(object.domainName) ? globalThis.String(object.domainName) : "",
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
    };
  },

  toJSON(message: AddDomainRequest): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    if (message.domainName !== "") {
      obj.domainName = message.domainName;
    }
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddDomainRequest>, I>>(base?: I): AddDomainRequest {
    return AddDomainRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddDomainRequest>, I>>(object: I): AddDomainRequest {
    const message = createBaseAddDomainRequest();
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.domainName = object.domainName ?? "";
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddDomainRequest.$type, AddDomainRequest);

function createBaseRemoveDomainRequest(): RemoveDomainRequest {
  return { $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest", apiGatewayId: "", domainId: "" };
}

export const RemoveDomainRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest" as const,

  encode(message: RemoveDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.domainId !== "") {
      writer.uint32(18).string(message.domainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDomainRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domainId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveDomainRequest {
    return {
      $type: RemoveDomainRequest.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
      domainId: isSet(object.domainId) ? globalThis.String(object.domainId) : "",
    };
  },

  toJSON(message: RemoveDomainRequest): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    if (message.domainId !== "") {
      obj.domainId = message.domainId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveDomainRequest>, I>>(base?: I): RemoveDomainRequest {
    return RemoveDomainRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveDomainRequest>, I>>(object: I): RemoveDomainRequest {
    const message = createBaseRemoveDomainRequest();
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.domainId = object.domainId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveDomainRequest.$type, RemoveDomainRequest);

function createBaseCreateApiGatewayMetadata(): CreateApiGatewayMetadata {
  return { $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata", apiGatewayId: "" };
}

export const CreateApiGatewayMetadata = {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata" as const,

  encode(message: CreateApiGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateApiGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateApiGatewayMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateApiGatewayMetadata {
    return {
      $type: CreateApiGatewayMetadata.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
    };
  },

  toJSON(message: CreateApiGatewayMetadata): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateApiGatewayMetadata>, I>>(base?: I): CreateApiGatewayMetadata {
    return CreateApiGatewayMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateApiGatewayMetadata>, I>>(object: I): CreateApiGatewayMetadata {
    const message = createBaseCreateApiGatewayMetadata();
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateApiGatewayMetadata.$type, CreateApiGatewayMetadata);

function createBaseUpdateApiGatewayMetadata(): UpdateApiGatewayMetadata {
  return { $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata", apiGatewayId: "" };
}

export const UpdateApiGatewayMetadata = {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata" as const,

  encode(message: UpdateApiGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApiGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateApiGatewayMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateApiGatewayMetadata {
    return {
      $type: UpdateApiGatewayMetadata.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
    };
  },

  toJSON(message: UpdateApiGatewayMetadata): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateApiGatewayMetadata>, I>>(base?: I): UpdateApiGatewayMetadata {
    return UpdateApiGatewayMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateApiGatewayMetadata>, I>>(object: I): UpdateApiGatewayMetadata {
    const message = createBaseUpdateApiGatewayMetadata();
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateApiGatewayMetadata.$type, UpdateApiGatewayMetadata);

function createBaseDeleteApiGatewayMetadata(): DeleteApiGatewayMetadata {
  return { $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata", apiGatewayId: "" };
}

export const DeleteApiGatewayMetadata = {
  $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata" as const,

  encode(message: DeleteApiGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApiGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteApiGatewayMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteApiGatewayMetadata {
    return {
      $type: DeleteApiGatewayMetadata.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
    };
  },

  toJSON(message: DeleteApiGatewayMetadata): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteApiGatewayMetadata>, I>>(base?: I): DeleteApiGatewayMetadata {
    return DeleteApiGatewayMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteApiGatewayMetadata>, I>>(object: I): DeleteApiGatewayMetadata {
    const message = createBaseDeleteApiGatewayMetadata();
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteApiGatewayMetadata.$type, DeleteApiGatewayMetadata);

function createBaseAddDomainMetadata(): AddDomainMetadata {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata",
    apiGatewayId: "",
    domainId: "",
    domainName: "",
    certificateId: "",
  };
}

export const AddDomainMetadata = {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata" as const,

  encode(message: AddDomainMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.domainId !== "") {
      writer.uint32(18).string(message.domainId);
    }
    if (message.domainName !== "") {
      writer.uint32(26).string(message.domainName);
    }
    if (message.certificateId !== "") {
      writer.uint32(34).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDomainMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domainId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.domainName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.certificateId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDomainMetadata {
    return {
      $type: AddDomainMetadata.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
      domainId: isSet(object.domainId) ? globalThis.String(object.domainId) : "",
      domainName: isSet(object.domainName) ? globalThis.String(object.domainName) : "",
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "",
    };
  },

  toJSON(message: AddDomainMetadata): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    if (message.domainId !== "") {
      obj.domainId = message.domainId;
    }
    if (message.domainName !== "") {
      obj.domainName = message.domainName;
    }
    if (message.certificateId !== "") {
      obj.certificateId = message.certificateId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddDomainMetadata>, I>>(base?: I): AddDomainMetadata {
    return AddDomainMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddDomainMetadata>, I>>(object: I): AddDomainMetadata {
    const message = createBaseAddDomainMetadata();
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.domainId = object.domainId ?? "";
    message.domainName = object.domainName ?? "";
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddDomainMetadata.$type, AddDomainMetadata);

function createBaseRemoveDomainMetadata(): RemoveDomainMetadata {
  return { $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata", apiGatewayId: "", domainId: "" };
}

export const RemoveDomainMetadata = {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata" as const,

  encode(message: RemoveDomainMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.domainId !== "") {
      writer.uint32(18).string(message.domainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDomainMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveDomainMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domainId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveDomainMetadata {
    return {
      $type: RemoveDomainMetadata.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
      domainId: isSet(object.domainId) ? globalThis.String(object.domainId) : "",
    };
  },

  toJSON(message: RemoveDomainMetadata): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    if (message.domainId !== "") {
      obj.domainId = message.domainId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveDomainMetadata>, I>>(base?: I): RemoveDomainMetadata {
    return RemoveDomainMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveDomainMetadata>, I>>(object: I): RemoveDomainMetadata {
    const message = createBaseRemoveDomainMetadata();
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.domainId = object.domainId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveDomainMetadata.$type, RemoveDomainMetadata);

function createBaseListOperationsRequest(): ListOperationsRequest {
  return {
    $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest",
    apiGatewayId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListOperationsRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest" as const,

  encode(message: ListOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
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

  fromJSON(object: any): ListOperationsRequest {
    return {
      $type: ListOperationsRequest.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListOperationsRequest): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
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

  create<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(base?: I): ListOperationsRequest {
    return ListOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(object: I): ListOperationsRequest {
    const message = createBaseListOperationsRequest();
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOperationsRequest.$type, ListOperationsRequest);

function createBaseListOperationsResponse(): ListOperationsResponse {
  return { $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListOperationsResponse = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse" as const,

  encode(message: ListOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsResponse();
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

  fromJSON(object: any): ListOperationsResponse {
    return {
      $type: ListOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(base?: I): ListOperationsResponse {
    return ListOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(object: I): ListOperationsResponse {
    const message = createBaseListOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOperationsResponse.$type, ListOperationsResponse);

function createBaseGetOpenapiSpecRequest(): GetOpenapiSpecRequest {
  return { $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest", apiGatewayId: "", format: 0 };
}

export const GetOpenapiSpecRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest" as const,

  encode(message: GetOpenapiSpecRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.format !== 0) {
      writer.uint32(16).int32(message.format);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOpenapiSpecRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOpenapiSpecRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
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

  fromJSON(object: any): GetOpenapiSpecRequest {
    return {
      $type: GetOpenapiSpecRequest.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
      format: isSet(object.format) ? getOpenapiSpecRequest_FormatFromJSON(object.format) : 0,
    };
  },

  toJSON(message: GetOpenapiSpecRequest): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    if (message.format !== 0) {
      obj.format = getOpenapiSpecRequest_FormatToJSON(message.format);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOpenapiSpecRequest>, I>>(base?: I): GetOpenapiSpecRequest {
    return GetOpenapiSpecRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOpenapiSpecRequest>, I>>(object: I): GetOpenapiSpecRequest {
    const message = createBaseGetOpenapiSpecRequest();
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.format = object.format ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetOpenapiSpecRequest.$type, GetOpenapiSpecRequest);

function createBaseGetOpenapiSpecResponse(): GetOpenapiSpecResponse {
  return { $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse", apiGatewayId: "", openapiSpec: "" };
}

export const GetOpenapiSpecResponse = {
  $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse" as const,

  encode(message: GetOpenapiSpecResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.openapiSpec !== "") {
      writer.uint32(18).string(message.openapiSpec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOpenapiSpecResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOpenapiSpecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiGatewayId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.openapiSpec = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOpenapiSpecResponse {
    return {
      $type: GetOpenapiSpecResponse.$type,
      apiGatewayId: isSet(object.apiGatewayId) ? globalThis.String(object.apiGatewayId) : "",
      openapiSpec: isSet(object.openapiSpec) ? globalThis.String(object.openapiSpec) : "",
    };
  },

  toJSON(message: GetOpenapiSpecResponse): unknown {
    const obj: any = {};
    if (message.apiGatewayId !== "") {
      obj.apiGatewayId = message.apiGatewayId;
    }
    if (message.openapiSpec !== "") {
      obj.openapiSpec = message.openapiSpec;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOpenapiSpecResponse>, I>>(base?: I): GetOpenapiSpecResponse {
    return GetOpenapiSpecResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOpenapiSpecResponse>, I>>(object: I): GetOpenapiSpecResponse {
    const message = createBaseGetOpenapiSpecResponse();
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.openapiSpec = object.openapiSpec ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetOpenapiSpecResponse.$type, GetOpenapiSpecResponse);

/** A set of methods for managing API gateways. */
export type ApiGatewayServiceService = typeof ApiGatewayServiceService;
export const ApiGatewayServiceService = {
  /**
   * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
   * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
   *
   * To get the list of all available API gateways, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetApiGatewayRequest) => Buffer.from(GetApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetApiGatewayRequest.decode(value),
    responseSerialize: (value: ApiGateway) => Buffer.from(ApiGateway.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ApiGateway.decode(value),
  },
  /** Retrieves the list of API gateways in the specified folder. */
  list: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListApiGatewayRequest) => Buffer.from(ListApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListApiGatewayRequest.decode(value),
    responseSerialize: (value: ListApiGatewayResponse) => Buffer.from(ListApiGatewayResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListApiGatewayResponse.decode(value),
  },
  /** Creates an API gateway in the specified folder. */
  create: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateApiGatewayRequest) => Buffer.from(CreateApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateApiGatewayRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified API gateway. */
  update: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateApiGatewayRequest) => Buffer.from(UpdateApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateApiGatewayRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified API gateway. */
  delete: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteApiGatewayRequest) => Buffer.from(DeleteApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteApiGatewayRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Attaches domain to the specified API gateway. */
  addDomain: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/AddDomain",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddDomainRequest) => Buffer.from(AddDomainRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddDomainRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Detaches domain from the specified API gateway. */
  removeDomain: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/RemoveDomain",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveDomainRequest) => Buffer.from(RemoveDomainRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveDomainRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the OpenAPI specification of specified API gateway. */
  getOpenapiSpec: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/GetOpenapiSpec",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOpenapiSpecRequest) => Buffer.from(GetOpenapiSpecRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOpenapiSpecRequest.decode(value),
    responseSerialize: (value: GetOpenapiSpecResponse) => Buffer.from(GetOpenapiSpecResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetOpenapiSpecResponse.decode(value),
  },
  /** Lists operations for the specified API gateway. */
  listOperations: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListOperationsRequest) => Buffer.from(ListOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListOperationsRequest.decode(value),
    responseSerialize: (value: ListOperationsResponse) => Buffer.from(ListOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified API gateway. */
  listAccessBindings: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified API gateway. */
  setAccessBindings: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified API gateway. */
  updateAccessBindings: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ApiGatewayServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
   * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
   *
   * To get the list of all available API gateways, make a [List] request.
   */
  get: handleUnaryCall<GetApiGatewayRequest, ApiGateway>;
  /** Retrieves the list of API gateways in the specified folder. */
  list: handleUnaryCall<ListApiGatewayRequest, ListApiGatewayResponse>;
  /** Creates an API gateway in the specified folder. */
  create: handleUnaryCall<CreateApiGatewayRequest, Operation>;
  /** Updates the specified API gateway. */
  update: handleUnaryCall<UpdateApiGatewayRequest, Operation>;
  /** Deletes the specified API gateway. */
  delete: handleUnaryCall<DeleteApiGatewayRequest, Operation>;
  /** Attaches domain to the specified API gateway. */
  addDomain: handleUnaryCall<AddDomainRequest, Operation>;
  /** Detaches domain from the specified API gateway. */
  removeDomain: handleUnaryCall<RemoveDomainRequest, Operation>;
  /** Returns the OpenAPI specification of specified API gateway. */
  getOpenapiSpec: handleUnaryCall<GetOpenapiSpecRequest, GetOpenapiSpecResponse>;
  /** Lists operations for the specified API gateway. */
  listOperations: handleUnaryCall<ListOperationsRequest, ListOperationsResponse>;
  /** Lists existing access bindings for the specified API gateway. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the specified API gateway. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified API gateway. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface ApiGatewayServiceClient extends Client {
  /**
   * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
   * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
   *
   * To get the list of all available API gateways, make a [List] request.
   */
  get(
    request: GetApiGatewayRequest,
    callback: (error: ServiceError | null, response: ApiGateway) => void,
  ): ClientUnaryCall;
  get(
    request: GetApiGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ApiGateway) => void,
  ): ClientUnaryCall;
  get(
    request: GetApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ApiGateway) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of API gateways in the specified folder. */
  list(
    request: ListApiGatewayRequest,
    callback: (error: ServiceError | null, response: ListApiGatewayResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListApiGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListApiGatewayResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListApiGatewayResponse) => void,
  ): ClientUnaryCall;
  /** Creates an API gateway in the specified folder. */
  create(
    request: CreateApiGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateApiGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified API gateway. */
  update(
    request: UpdateApiGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateApiGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified API gateway. */
  delete(
    request: DeleteApiGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteApiGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Attaches domain to the specified API gateway. */
  addDomain(
    request: AddDomainRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addDomain(
    request: AddDomainRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addDomain(
    request: AddDomainRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Detaches domain from the specified API gateway. */
  removeDomain(
    request: RemoveDomainRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeDomain(
    request: RemoveDomainRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeDomain(
    request: RemoveDomainRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns the OpenAPI specification of specified API gateway. */
  getOpenapiSpec(
    request: GetOpenapiSpecRequest,
    callback: (error: ServiceError | null, response: GetOpenapiSpecResponse) => void,
  ): ClientUnaryCall;
  getOpenapiSpec(
    request: GetOpenapiSpecRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetOpenapiSpecResponse) => void,
  ): ClientUnaryCall;
  getOpenapiSpec(
    request: GetOpenapiSpecRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetOpenapiSpecResponse) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified API gateway. */
  listOperations(
    request: ListOperationsRequest,
    callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified API gateway. */
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
  /** Sets access bindings for the specified API gateway. */
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
  /** Updates access bindings for the specified API gateway. */
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

export const ApiGatewayServiceClient = makeGenericClientConstructor(
  ApiGatewayServiceService,
  "yandex.cloud.serverless.apigateway.v1.ApiGatewayService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ApiGatewayServiceClient;
  service: typeof ApiGatewayServiceService;
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
