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
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { OriginMeta } from "./origin";
import {
  OriginProtocol,
  originProtocolFromJSON,
  originProtocolToJSON,
  Resource,
  ResourceOptions,
  SecondaryHostnames,
  SSLTargetCertificate,
} from "./resource";

export const protobufPackage = "yandex.cloud.cdn.v1";

/** A request to get a resource. */
export interface GetResourceRequest {
  $type: "yandex.cloud.cdn.v1.GetResourceRequest";
  /** ID of the requested resource. */
  resourceId: string;
}

export interface ListResourcesRequest {
  $type: "yandex.cloud.cdn.v1.ListResourcesRequest";
  /** ID of the folder to request listing for. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListResourcesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListResourcesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListResourcesResponse {
  $type: "yandex.cloud.cdn.v1.ListResourcesResponse";
  /** List of the resources */
  resources: Resource[];
  /**
   * [next_page_token] token allows you to get the next page of results for list requests.
   * If the number of results is larger than [ListResourcesRequest.page_size], use
   * the [next_page_token] as the value for the [ListResourcesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateResourceRequest {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest";
  /** ID of the to bind with new resource. */
  folderId: string;
  /** CDN endpoint CNAME, must be unique among clients's resources. */
  cname: string;
  /** Specify the origins to be used for CDN resources requests. */
  origin?:
    | CreateResourceRequest_Origin
    | undefined;
  /** List of additional CNAMEs. */
  secondaryHostnames?:
    | SecondaryHostnames
    | undefined;
  /** Specify the protocol schema to be used in communication with origin. */
  originProtocol: OriginProtocol;
  /**
   * Flag to create Resource either in active or disabled state.
   * In active state Origins payload could be transmitted from CDN CNAME requests.
   * Default value: true
   */
  active?:
    | boolean
    | undefined;
  /** Resource settings and options to tune CDN edge behavior. Most is unset. */
  options?:
    | ResourceOptions
    | undefined;
  /** SSL Certificate options. */
  sslCertificate?:
    | SSLTargetCertificate
    | undefined;
  /** Labels of the resource. */
  labels: { [key: string]: string };
}

export interface CreateResourceRequest_Origin {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin";
  /** ID of pre-created origin group. */
  originGroupId?:
    | number
    | undefined;
  /**
   * Create new Origins group with single source, it's id will be
   * returned in result.
   */
  originSource?:
    | string
    | undefined;
  /** Set up resource origin parameters. */
  originSourceParams?: ResourceOriginParams | undefined;
}

export interface CreateResourceRequest_LabelsEntry {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry";
  key: string;
  value: string;
}

/** A set of resource origin parameters. */
export interface ResourceOriginParams {
  $type: "yandex.cloud.cdn.v1.ResourceOriginParams";
  /** Source of the content. */
  source: string;
  /** Set up type of the origin. */
  meta?: OriginMeta | undefined;
}

export interface CreateResourceMetadata {
  $type: "yandex.cloud.cdn.v1.CreateResourceMetadata";
  /** ID of created resource. */
  resourceId: string;
}

export interface UpdateResourceRequest {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest";
  /** ID of updated resource. */
  resourceId: string;
  /** ID of updated origin group. */
  originGroupId?:
    | number
    | undefined;
  /** List of additional CNAMEs. */
  secondaryHostnames?:
    | SecondaryHostnames
    | undefined;
  /** Resource settings and options to tune CDN edge behavior. */
  options?:
    | ResourceOptions
    | undefined;
  /** Specify the protocol schema to be used in communication with origin. */
  originProtocol: OriginProtocol;
  /**
   * Flag to create Resource either in active or disabled state.
   * In active state Origins payload could be transmitted from CDN CNAME requests.
   * Default value: true
   */
  active?:
    | boolean
    | undefined;
  /** SSL Certificate options. */
  sslCertificate?:
    | SSLTargetCertificate
    | undefined;
  /** Resource labels. At some point will be needed for granular detailing. */
  labels: { [key: string]: string };
}

export interface UpdateResourceRequest_LabelsEntry {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateResourceMetadata {
  $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata";
  /** ID of updated resource. */
  resourceId: string;
}

export interface DeleteResourceRequest {
  $type: "yandex.cloud.cdn.v1.DeleteResourceRequest";
  /** ID of resource to delete. */
  resourceId: string;
}

export interface DeleteResourceMetadata {
  $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata";
  /** ID of deleted resource. */
  resourceId: string;
}

export interface GetProviderCNameRequest {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest";
  /** Folder ID to get provider's CNAME. */
  folderId: string;
}

export interface GetProviderCNameResponse {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse";
  /** Provider's CNAME. */
  cname: string;
  /** ID of the folder that the provider belongs to. */
  folderId: string;
}

function createBaseGetResourceRequest(): GetResourceRequest {
  return { $type: "yandex.cloud.cdn.v1.GetResourceRequest", resourceId: "" };
}

export const GetResourceRequest = {
  $type: "yandex.cloud.cdn.v1.GetResourceRequest" as const,

  encode(message: GetResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResourceRequest {
    return {
      $type: GetResourceRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: GetResourceRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourceRequest>, I>>(base?: I): GetResourceRequest {
    return GetResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourceRequest>, I>>(object: I): GetResourceRequest {
    const message = createBaseGetResourceRequest();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetResourceRequest.$type, GetResourceRequest);

function createBaseListResourcesRequest(): ListResourcesRequest {
  return { $type: "yandex.cloud.cdn.v1.ListResourcesRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListResourcesRequest = {
  $type: "yandex.cloud.cdn.v1.ListResourcesRequest" as const,

  encode(message: ListResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourcesRequest();
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

  fromJSON(object: any): ListResourcesRequest {
    return {
      $type: ListResourcesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListResourcesRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(base?: I): ListResourcesRequest {
    return ListResourcesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(object: I): ListResourcesRequest {
    const message = createBaseListResourcesRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcesRequest.$type, ListResourcesRequest);

function createBaseListResourcesResponse(): ListResourcesResponse {
  return { $type: "yandex.cloud.cdn.v1.ListResourcesResponse", resources: [], nextPageToken: "" };
}

export const ListResourcesResponse = {
  $type: "yandex.cloud.cdn.v1.ListResourcesResponse" as const,

  encode(message: ListResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListResourcesResponse {
    return {
      $type: ListResourcesResponse.$type,
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourcesResponse>, I>>(base?: I): ListResourcesResponse {
    return ListResourcesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourcesResponse>, I>>(object: I): ListResourcesResponse {
    const message = createBaseListResourcesResponse();
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcesResponse.$type, ListResourcesResponse);

function createBaseCreateResourceRequest(): CreateResourceRequest {
  return {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest",
    folderId: "",
    cname: "",
    origin: undefined,
    secondaryHostnames: undefined,
    originProtocol: 0,
    active: undefined,
    options: undefined,
    sslCertificate: undefined,
    labels: {},
  };
}

export const CreateResourceRequest = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest" as const,

  encode(message: CreateResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.cname !== "") {
      writer.uint32(18).string(message.cname);
    }
    if (message.origin !== undefined) {
      CreateResourceRequest_Origin.encode(message.origin, writer.uint32(26).fork()).ldelim();
    }
    if (message.secondaryHostnames !== undefined) {
      SecondaryHostnames.encode(message.secondaryHostnames, writer.uint32(34).fork()).ldelim();
    }
    if (message.originProtocol !== 0) {
      writer.uint32(40).int32(message.originProtocol);
    }
    if (message.active !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.active! }, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.options !== undefined) {
      ResourceOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    if (message.sslCertificate !== undefined) {
      SSLTargetCertificate.encode(message.sslCertificate, writer.uint32(66).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateResourceRequest_LabelsEntry.encode({
        $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(74).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceRequest();
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

          message.cname = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.origin = CreateResourceRequest_Origin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.secondaryHostnames = SecondaryHostnames.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.originProtocol = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.active = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.options = ResourceOptions.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sslCertificate = SSLTargetCertificate.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = CreateResourceRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.labels[entry9.key] = entry9.value;
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

  fromJSON(object: any): CreateResourceRequest {
    return {
      $type: CreateResourceRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      cname: isSet(object.cname) ? globalThis.String(object.cname) : "",
      origin: isSet(object.origin) ? CreateResourceRequest_Origin.fromJSON(object.origin) : undefined,
      secondaryHostnames: isSet(object.secondaryHostnames)
        ? SecondaryHostnames.fromJSON(object.secondaryHostnames)
        : undefined,
      originProtocol: isSet(object.originProtocol) ? originProtocolFromJSON(object.originProtocol) : 0,
      active: isSet(object.active) ? Boolean(object.active) : undefined,
      options: isSet(object.options) ? ResourceOptions.fromJSON(object.options) : undefined,
      sslCertificate: isSet(object.sslCertificate) ? SSLTargetCertificate.fromJSON(object.sslCertificate) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateResourceRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.cname !== "") {
      obj.cname = message.cname;
    }
    if (message.origin !== undefined) {
      obj.origin = CreateResourceRequest_Origin.toJSON(message.origin);
    }
    if (message.secondaryHostnames !== undefined) {
      obj.secondaryHostnames = SecondaryHostnames.toJSON(message.secondaryHostnames);
    }
    if (message.originProtocol !== 0) {
      obj.originProtocol = originProtocolToJSON(message.originProtocol);
    }
    if (message.active !== undefined) {
      obj.active = message.active;
    }
    if (message.options !== undefined) {
      obj.options = ResourceOptions.toJSON(message.options);
    }
    if (message.sslCertificate !== undefined) {
      obj.sslCertificate = SSLTargetCertificate.toJSON(message.sslCertificate);
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

  create<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(base?: I): CreateResourceRequest {
    return CreateResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(object: I): CreateResourceRequest {
    const message = createBaseCreateResourceRequest();
    message.folderId = object.folderId ?? "";
    message.cname = object.cname ?? "";
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CreateResourceRequest_Origin.fromPartial(object.origin)
      : undefined;
    message.secondaryHostnames = (object.secondaryHostnames !== undefined && object.secondaryHostnames !== null)
      ? SecondaryHostnames.fromPartial(object.secondaryHostnames)
      : undefined;
    message.originProtocol = object.originProtocol ?? 0;
    message.active = object.active ?? undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? ResourceOptions.fromPartial(object.options)
      : undefined;
    message.sslCertificate = (object.sslCertificate !== undefined && object.sslCertificate !== null)
      ? SSLTargetCertificate.fromPartial(object.sslCertificate)
      : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(CreateResourceRequest.$type, CreateResourceRequest);

function createBaseCreateResourceRequest_Origin(): CreateResourceRequest_Origin {
  return {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin",
    originGroupId: undefined,
    originSource: undefined,
    originSourceParams: undefined,
  };
}

export const CreateResourceRequest_Origin = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin" as const,

  encode(message: CreateResourceRequest_Origin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originGroupId !== undefined) {
      writer.uint32(8).int64(message.originGroupId);
    }
    if (message.originSource !== undefined) {
      writer.uint32(18).string(message.originSource);
    }
    if (message.originSourceParams !== undefined) {
      ResourceOriginParams.encode(message.originSourceParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRequest_Origin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceRequest_Origin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.originGroupId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.originSource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.originSourceParams = ResourceOriginParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResourceRequest_Origin {
    return {
      $type: CreateResourceRequest_Origin.$type,
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : undefined,
      originSource: isSet(object.originSource) ? globalThis.String(object.originSource) : undefined,
      originSourceParams: isSet(object.originSourceParams)
        ? ResourceOriginParams.fromJSON(object.originSourceParams)
        : undefined,
    };
  },

  toJSON(message: CreateResourceRequest_Origin): unknown {
    const obj: any = {};
    if (message.originGroupId !== undefined) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    if (message.originSource !== undefined) {
      obj.originSource = message.originSource;
    }
    if (message.originSourceParams !== undefined) {
      obj.originSourceParams = ResourceOriginParams.toJSON(message.originSourceParams);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceRequest_Origin>, I>>(base?: I): CreateResourceRequest_Origin {
    return CreateResourceRequest_Origin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceRequest_Origin>, I>>(object: I): CreateResourceRequest_Origin {
    const message = createBaseCreateResourceRequest_Origin();
    message.originGroupId = object.originGroupId ?? undefined;
    message.originSource = object.originSource ?? undefined;
    message.originSourceParams = (object.originSourceParams !== undefined && object.originSourceParams !== null)
      ? ResourceOriginParams.fromPartial(object.originSourceParams)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateResourceRequest_Origin.$type, CreateResourceRequest_Origin);

function createBaseCreateResourceRequest_LabelsEntry(): CreateResourceRequest_LabelsEntry {
  return { $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry", key: "", value: "" };
}

export const CreateResourceRequest_LabelsEntry = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry" as const,

  encode(message: CreateResourceRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceRequest_LabelsEntry();
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

  fromJSON(object: any): CreateResourceRequest_LabelsEntry {
    return {
      $type: CreateResourceRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateResourceRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateResourceRequest_LabelsEntry {
    return CreateResourceRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateResourceRequest_LabelsEntry {
    const message = createBaseCreateResourceRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateResourceRequest_LabelsEntry.$type, CreateResourceRequest_LabelsEntry);

function createBaseResourceOriginParams(): ResourceOriginParams {
  return { $type: "yandex.cloud.cdn.v1.ResourceOriginParams", source: "", meta: undefined };
}

export const ResourceOriginParams = {
  $type: "yandex.cloud.cdn.v1.ResourceOriginParams" as const,

  encode(message: ResourceOriginParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOriginParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOriginParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.meta = OriginMeta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceOriginParams {
    return {
      $type: ResourceOriginParams.$type,
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      meta: isSet(object.meta) ? OriginMeta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: ResourceOriginParams): unknown {
    const obj: any = {};
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.meta !== undefined) {
      obj.meta = OriginMeta.toJSON(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceOriginParams>, I>>(base?: I): ResourceOriginParams {
    return ResourceOriginParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceOriginParams>, I>>(object: I): ResourceOriginParams {
    const message = createBaseResourceOriginParams();
    message.source = object.source ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? OriginMeta.fromPartial(object.meta)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceOriginParams.$type, ResourceOriginParams);

function createBaseCreateResourceMetadata(): CreateResourceMetadata {
  return { $type: "yandex.cloud.cdn.v1.CreateResourceMetadata", resourceId: "" };
}

export const CreateResourceMetadata = {
  $type: "yandex.cloud.cdn.v1.CreateResourceMetadata" as const,

  encode(message: CreateResourceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResourceMetadata {
    return {
      $type: CreateResourceMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: CreateResourceMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceMetadata>, I>>(base?: I): CreateResourceMetadata {
    return CreateResourceMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceMetadata>, I>>(object: I): CreateResourceMetadata {
    const message = createBaseCreateResourceMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateResourceMetadata.$type, CreateResourceMetadata);

function createBaseUpdateResourceRequest(): UpdateResourceRequest {
  return {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest",
    resourceId: "",
    originGroupId: undefined,
    secondaryHostnames: undefined,
    options: undefined,
    originProtocol: 0,
    active: undefined,
    sslCertificate: undefined,
    labels: {},
  };
}

export const UpdateResourceRequest = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest" as const,

  encode(message: UpdateResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.originGroupId !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.originGroupId! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.secondaryHostnames !== undefined) {
      SecondaryHostnames.encode(message.secondaryHostnames, writer.uint32(26).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ResourceOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.originProtocol !== 0) {
      writer.uint32(40).int32(message.originProtocol);
    }
    if (message.active !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.active! }, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.sslCertificate !== undefined) {
      SSLTargetCertificate.encode(message.sslCertificate, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateResourceRequest_LabelsEntry.encode({
        $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(66).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.originGroupId = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secondaryHostnames = SecondaryHostnames.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.options = ResourceOptions.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.originProtocol = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.active = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sslCertificate = SSLTargetCertificate.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = UpdateResourceRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
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

  fromJSON(object: any): UpdateResourceRequest {
    return {
      $type: UpdateResourceRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      originGroupId: isSet(object.originGroupId) ? Number(object.originGroupId) : undefined,
      secondaryHostnames: isSet(object.secondaryHostnames)
        ? SecondaryHostnames.fromJSON(object.secondaryHostnames)
        : undefined,
      options: isSet(object.options) ? ResourceOptions.fromJSON(object.options) : undefined,
      originProtocol: isSet(object.originProtocol) ? originProtocolFromJSON(object.originProtocol) : 0,
      active: isSet(object.active) ? Boolean(object.active) : undefined,
      sslCertificate: isSet(object.sslCertificate) ? SSLTargetCertificate.fromJSON(object.sslCertificate) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpdateResourceRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.originGroupId !== undefined) {
      obj.originGroupId = message.originGroupId;
    }
    if (message.secondaryHostnames !== undefined) {
      obj.secondaryHostnames = SecondaryHostnames.toJSON(message.secondaryHostnames);
    }
    if (message.options !== undefined) {
      obj.options = ResourceOptions.toJSON(message.options);
    }
    if (message.originProtocol !== 0) {
      obj.originProtocol = originProtocolToJSON(message.originProtocol);
    }
    if (message.active !== undefined) {
      obj.active = message.active;
    }
    if (message.sslCertificate !== undefined) {
      obj.sslCertificate = SSLTargetCertificate.toJSON(message.sslCertificate);
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

  create<I extends Exact<DeepPartial<UpdateResourceRequest>, I>>(base?: I): UpdateResourceRequest {
    return UpdateResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateResourceRequest>, I>>(object: I): UpdateResourceRequest {
    const message = createBaseUpdateResourceRequest();
    message.resourceId = object.resourceId ?? "";
    message.originGroupId = object.originGroupId ?? undefined;
    message.secondaryHostnames = (object.secondaryHostnames !== undefined && object.secondaryHostnames !== null)
      ? SecondaryHostnames.fromPartial(object.secondaryHostnames)
      : undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? ResourceOptions.fromPartial(object.options)
      : undefined;
    message.originProtocol = object.originProtocol ?? 0;
    message.active = object.active ?? undefined;
    message.sslCertificate = (object.sslCertificate !== undefined && object.sslCertificate !== null)
      ? SSLTargetCertificate.fromPartial(object.sslCertificate)
      : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(UpdateResourceRequest.$type, UpdateResourceRequest);

function createBaseUpdateResourceRequest_LabelsEntry(): UpdateResourceRequest_LabelsEntry {
  return { $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateResourceRequest_LabelsEntry = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry" as const,

  encode(message: UpdateResourceRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResourceRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateResourceRequest_LabelsEntry {
    return {
      $type: UpdateResourceRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateResourceRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResourceRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateResourceRequest_LabelsEntry {
    return UpdateResourceRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateResourceRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateResourceRequest_LabelsEntry {
    const message = createBaseUpdateResourceRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateResourceRequest_LabelsEntry.$type, UpdateResourceRequest_LabelsEntry);

function createBaseUpdateResourceMetadata(): UpdateResourceMetadata {
  return { $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata", resourceId: "" };
}

export const UpdateResourceMetadata = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata" as const,

  encode(message: UpdateResourceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResourceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateResourceMetadata {
    return {
      $type: UpdateResourceMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: UpdateResourceMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResourceMetadata>, I>>(base?: I): UpdateResourceMetadata {
    return UpdateResourceMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateResourceMetadata>, I>>(object: I): UpdateResourceMetadata {
    const message = createBaseUpdateResourceMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateResourceMetadata.$type, UpdateResourceMetadata);

function createBaseDeleteResourceRequest(): DeleteResourceRequest {
  return { $type: "yandex.cloud.cdn.v1.DeleteResourceRequest", resourceId: "" };
}

export const DeleteResourceRequest = {
  $type: "yandex.cloud.cdn.v1.DeleteResourceRequest" as const,

  encode(message: DeleteResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceRequest {
    return {
      $type: DeleteResourceRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: DeleteResourceRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourceRequest>, I>>(base?: I): DeleteResourceRequest {
    return DeleteResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteResourceRequest>, I>>(object: I): DeleteResourceRequest {
    const message = createBaseDeleteResourceRequest();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceRequest.$type, DeleteResourceRequest);

function createBaseDeleteResourceMetadata(): DeleteResourceMetadata {
  return { $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata", resourceId: "" };
}

export const DeleteResourceMetadata = {
  $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata" as const,

  encode(message: DeleteResourceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceMetadata {
    return {
      $type: DeleteResourceMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: DeleteResourceMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourceMetadata>, I>>(base?: I): DeleteResourceMetadata {
    return DeleteResourceMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteResourceMetadata>, I>>(object: I): DeleteResourceMetadata {
    const message = createBaseDeleteResourceMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceMetadata.$type, DeleteResourceMetadata);

function createBaseGetProviderCNameRequest(): GetProviderCNameRequest {
  return { $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest", folderId: "" };
}

export const GetProviderCNameRequest = {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest" as const,

  encode(message: GetProviderCNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProviderCNameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProviderCNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProviderCNameRequest {
    return {
      $type: GetProviderCNameRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: GetProviderCNameRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProviderCNameRequest>, I>>(base?: I): GetProviderCNameRequest {
    return GetProviderCNameRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProviderCNameRequest>, I>>(object: I): GetProviderCNameRequest {
    const message = createBaseGetProviderCNameRequest();
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetProviderCNameRequest.$type, GetProviderCNameRequest);

function createBaseGetProviderCNameResponse(): GetProviderCNameResponse {
  return { $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse", cname: "", folderId: "" };
}

export const GetProviderCNameResponse = {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse" as const,

  encode(message: GetProviderCNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cname !== "") {
      writer.uint32(10).string(message.cname);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProviderCNameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProviderCNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cname = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProviderCNameResponse {
    return {
      $type: GetProviderCNameResponse.$type,
      cname: isSet(object.cname) ? globalThis.String(object.cname) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: GetProviderCNameResponse): unknown {
    const obj: any = {};
    if (message.cname !== "") {
      obj.cname = message.cname;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProviderCNameResponse>, I>>(base?: I): GetProviderCNameResponse {
    return GetProviderCNameResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProviderCNameResponse>, I>>(object: I): GetProviderCNameResponse {
    const message = createBaseGetProviderCNameResponse();
    message.cname = object.cname ?? "";
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetProviderCNameResponse.$type, GetProviderCNameResponse);

/** Provider's resources management service. */
export type ResourceServiceService = typeof ResourceServiceService;
export const ResourceServiceService = {
  /** Get client's CDN resource by resource id. */
  get: {
    path: "/yandex.cloud.cdn.v1.ResourceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetResourceRequest) => Buffer.from(GetResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetResourceRequest.decode(value),
    responseSerialize: (value: Resource) => Buffer.from(Resource.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Resource.decode(value),
  },
  /** Lists CDN resources. */
  list: {
    path: "/yandex.cloud.cdn.v1.ResourceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListResourcesRequest) => Buffer.from(ListResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListResourcesRequest.decode(value),
    responseSerialize: (value: ListResourcesResponse) => Buffer.from(ListResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListResourcesResponse.decode(value),
  },
  /**
   * Creates a CDN resource in the specified folder.
   *
   * Creation may take up to 15 minutes.
   */
  create: {
    path: "/yandex.cloud.cdn.v1.ResourceService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateResourceRequest) => Buffer.from(CreateResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateResourceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified CDN resource.
   *
   * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
   * [CacheService.Purge] request.
   */
  update: {
    path: "/yandex.cloud.cdn.v1.ResourceService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateResourceRequest) => Buffer.from(UpdateResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateResourceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes client's CDN resource. */
  delete: {
    path: "/yandex.cloud.cdn.v1.ResourceService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteResourceRequest) => Buffer.from(DeleteResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteResourceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Get Provider's CNAME (edge endpoint) bind to specified folder id.
   * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
   */
  getProviderCName: {
    path: "/yandex.cloud.cdn.v1.ResourceService/GetProviderCName",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProviderCNameRequest) => Buffer.from(GetProviderCNameRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProviderCNameRequest.decode(value),
    responseSerialize: (value: GetProviderCNameResponse) =>
      Buffer.from(GetProviderCNameResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetProviderCNameResponse.decode(value),
  },
} as const;

export interface ResourceServiceServer extends UntypedServiceImplementation {
  /** Get client's CDN resource by resource id. */
  get: handleUnaryCall<GetResourceRequest, Resource>;
  /** Lists CDN resources. */
  list: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
  /**
   * Creates a CDN resource in the specified folder.
   *
   * Creation may take up to 15 minutes.
   */
  create: handleUnaryCall<CreateResourceRequest, Operation>;
  /**
   * Updates the specified CDN resource.
   *
   * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
   * [CacheService.Purge] request.
   */
  update: handleUnaryCall<UpdateResourceRequest, Operation>;
  /** Deletes client's CDN resource. */
  delete: handleUnaryCall<DeleteResourceRequest, Operation>;
  /**
   * Get Provider's CNAME (edge endpoint) bind to specified folder id.
   * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
   */
  getProviderCName: handleUnaryCall<GetProviderCNameRequest, GetProviderCNameResponse>;
}

export interface ResourceServiceClient extends Client {
  /** Get client's CDN resource by resource id. */
  get(request: GetResourceRequest, callback: (error: ServiceError | null, response: Resource) => void): ClientUnaryCall;
  get(
    request: GetResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Resource) => void,
  ): ClientUnaryCall;
  get(
    request: GetResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Resource) => void,
  ): ClientUnaryCall;
  /** Lists CDN resources. */
  list(
    request: ListResourcesRequest,
    callback: (error: ServiceError | null, response: ListResourcesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListResourcesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListResourcesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListResourcesResponse) => void,
  ): ClientUnaryCall;
  /**
   * Creates a CDN resource in the specified folder.
   *
   * Creation may take up to 15 minutes.
   */
  create(
    request: CreateResourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified CDN resource.
   *
   * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
   * [CacheService.Purge] request.
   */
  update(
    request: UpdateResourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes client's CDN resource. */
  delete(
    request: DeleteResourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Get Provider's CNAME (edge endpoint) bind to specified folder id.
   * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
   */
  getProviderCName(
    request: GetProviderCNameRequest,
    callback: (error: ServiceError | null, response: GetProviderCNameResponse) => void,
  ): ClientUnaryCall;
  getProviderCName(
    request: GetProviderCNameRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetProviderCNameResponse) => void,
  ): ClientUnaryCall;
  getProviderCName(
    request: GetProviderCNameRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetProviderCNameResponse) => void,
  ): ClientUnaryCall;
}

export const ResourceServiceClient = makeGenericClientConstructor(
  ResourceServiceService,
  "yandex.cloud.cdn.v1.ResourceService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ResourceServiceClient;
  service: typeof ResourceServiceService;
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
