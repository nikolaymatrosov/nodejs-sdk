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
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.serverless.functions.v1";

/** A VPC network used in serverless resources. */
export interface UsedNetwork {
  $type: "yandex.cloud.serverless.functions.v1.UsedNetwork";
  /** ID of the VPC network. */
  networkId: string;
  /** ID of the cloud that the network belongs to. */
  cloudId: string;
  /** ID of the folder that the network belongs to. */
  folderId: string;
  /** Status of the network. */
  status: UsedNetwork_Status;
  /** Clean-up timestamp of the obsolete network. */
  willBeCleanedUpAt?:
    | Date
    | undefined;
  /** Number of serverless resources connected to the network. */
  connectionsCount: number;
}

export enum UsedNetwork_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Network is connecting to its first serverless resource. */
  CREATING = 1,
  /** ACTIVE - Network is already being used by some serverless resources. */
  ACTIVE = 2,
  /**
   * OBSOLETE - Network is no longer used by any serverless resources.
   * It will be cleaned-up after a while.
   */
  OBSOLETE = 3,
  UNRECOGNIZED = -1,
}

export function usedNetwork_StatusFromJSON(object: any): UsedNetwork_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return UsedNetwork_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return UsedNetwork_Status.CREATING;
    case 2:
    case "ACTIVE":
      return UsedNetwork_Status.ACTIVE;
    case 3:
    case "OBSOLETE":
      return UsedNetwork_Status.OBSOLETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UsedNetwork_Status.UNRECOGNIZED;
  }
}

export function usedNetwork_StatusToJSON(object: UsedNetwork_Status): string {
  switch (object) {
    case UsedNetwork_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case UsedNetwork_Status.CREATING:
      return "CREATING";
    case UsedNetwork_Status.ACTIVE:
      return "ACTIVE";
    case UsedNetwork_Status.OBSOLETE:
      return "OBSOLETE";
    case UsedNetwork_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetUsedNetworkRequest {
  $type: "yandex.cloud.serverless.functions.v1.GetUsedNetworkRequest";
  /** ID of the network to return. */
  networkId: string;
}

export interface ListUsedNetworksRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListUsedNetworksResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListUsedNetworksResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /** ID of the cloud to list used networks in. */
  cloudId?:
    | string
    | undefined;
  /** ID of the folder to list used networks in. */
  folderId?: string | undefined;
}

export interface ListUsedNetworksResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksResponse";
  /** List of used networks in the specified scope. */
  networks: UsedNetwork[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListUsedNetworksRequest.page_size], use `nextPageToken` as the value
   * for the [ListUsedNetworksRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListConnectedResourcesRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListConnectedResourcesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListConnectedResourcesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /** ID of the network to list serverless resources connected to it. */
  networkId?:
    | string
    | undefined;
  /** ID of the cloud to list serverless resources connected to any network from it. */
  cloudId?:
    | string
    | undefined;
  /** ID of the folder to list serverless resources connected to any network from it. */
  folderId?: string | undefined;
}

export interface ListConnectedResourcesResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse";
  /** List of serverless resources connected to any network from the specified scope. */
  resources: ListConnectedResourcesResponse_ConnectedResource[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListConnectedResourcesRequest.page_size], use `nextPageToken` as the value
   * for the [ListConnectedResourcesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

/** Serverless resource connected to VPC network. */
export interface ListConnectedResourcesResponse_ConnectedResource {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse.ConnectedResource";
  /** ID of the network to which the resource is connected. */
  networkId: string;
  /** Type of the serverless resource. */
  resourceType: string;
  /** ID of the serverless resource. */
  resourceId: string;
  /** Type of the serverless subresource. */
  subresourceType: string;
  /** ID of the serverless subresource. */
  subresourceId: string;
  /** ID of the cloud that the resource belongs to. */
  resourceCloudId: string;
  /** ID of the folder thar the resource belongs to. */
  resourceFolderId: string;
}

export interface TriggerUsedNetworkCleanupRequest {
  $type: "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupRequest";
  /** ID of the obsolete network to start the cleanup process for. */
  networkId: string;
}

export interface TriggerUsedNetworkCleanupResponse {
  $type: "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupResponse";
  /** Timestamp when cleanup of the specified network will be started. */
  networkCleanupTime?: Date | undefined;
}

function createBaseUsedNetwork(): UsedNetwork {
  return {
    $type: "yandex.cloud.serverless.functions.v1.UsedNetwork",
    networkId: "",
    cloudId: "",
    folderId: "",
    status: 0,
    willBeCleanedUpAt: undefined,
    connectionsCount: 0,
  };
}

export const UsedNetwork = {
  $type: "yandex.cloud.serverless.functions.v1.UsedNetwork" as const,

  encode(message: UsedNetwork, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.cloudId !== "") {
      writer.uint32(18).string(message.cloudId);
    }
    if (message.folderId !== "") {
      writer.uint32(26).string(message.folderId);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.willBeCleanedUpAt !== undefined) {
      Timestamp.encode(toTimestamp(message.willBeCleanedUpAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.connectionsCount !== 0) {
      writer.uint32(48).int64(message.connectionsCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsedNetwork {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsedNetwork();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cloudId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.folderId = reader.string();
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

          message.willBeCleanedUpAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.connectionsCount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UsedNetwork {
    return {
      $type: UsedNetwork.$type,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      status: isSet(object.status) ? usedNetwork_StatusFromJSON(object.status) : 0,
      willBeCleanedUpAt: isSet(object.willBeCleanedUpAt) ? fromJsonTimestamp(object.willBeCleanedUpAt) : undefined,
      connectionsCount: isSet(object.connectionsCount) ? globalThis.Number(object.connectionsCount) : 0,
    };
  },

  toJSON(message: UsedNetwork): unknown {
    const obj: any = {};
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.cloudId !== "") {
      obj.cloudId = message.cloudId;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.status !== 0) {
      obj.status = usedNetwork_StatusToJSON(message.status);
    }
    if (message.willBeCleanedUpAt !== undefined) {
      obj.willBeCleanedUpAt = message.willBeCleanedUpAt.toISOString();
    }
    if (message.connectionsCount !== 0) {
      obj.connectionsCount = Math.round(message.connectionsCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UsedNetwork>, I>>(base?: I): UsedNetwork {
    return UsedNetwork.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UsedNetwork>, I>>(object: I): UsedNetwork {
    const message = createBaseUsedNetwork();
    message.networkId = object.networkId ?? "";
    message.cloudId = object.cloudId ?? "";
    message.folderId = object.folderId ?? "";
    message.status = object.status ?? 0;
    message.willBeCleanedUpAt = object.willBeCleanedUpAt ?? undefined;
    message.connectionsCount = object.connectionsCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UsedNetwork.$type, UsedNetwork);

function createBaseGetUsedNetworkRequest(): GetUsedNetworkRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.GetUsedNetworkRequest", networkId: "" };
}

export const GetUsedNetworkRequest = {
  $type: "yandex.cloud.serverless.functions.v1.GetUsedNetworkRequest" as const,

  encode(message: GetUsedNetworkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsedNetworkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsedNetworkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUsedNetworkRequest {
    return {
      $type: GetUsedNetworkRequest.$type,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
    };
  },

  toJSON(message: GetUsedNetworkRequest): unknown {
    const obj: any = {};
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUsedNetworkRequest>, I>>(base?: I): GetUsedNetworkRequest {
    return GetUsedNetworkRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUsedNetworkRequest>, I>>(object: I): GetUsedNetworkRequest {
    const message = createBaseGetUsedNetworkRequest();
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUsedNetworkRequest.$type, GetUsedNetworkRequest);

function createBaseListUsedNetworksRequest(): ListUsedNetworksRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksRequest",
    pageSize: 0,
    pageToken: "",
    cloudId: undefined,
    folderId: undefined,
  };
}

export const ListUsedNetworksRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksRequest" as const,

  encode(message: ListUsedNetworksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.cloudId !== undefined) {
      writer.uint32(26).string(message.cloudId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(34).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsedNetworksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsedNetworksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cloudId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): ListUsedNetworksRequest {
    return {
      $type: ListUsedNetworksRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
    };
  },

  toJSON(message: ListUsedNetworksRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.cloudId !== undefined) {
      obj.cloudId = message.cloudId;
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUsedNetworksRequest>, I>>(base?: I): ListUsedNetworksRequest {
    return ListUsedNetworksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUsedNetworksRequest>, I>>(object: I): ListUsedNetworksRequest {
    const message = createBaseListUsedNetworksRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.cloudId = object.cloudId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ListUsedNetworksRequest.$type, ListUsedNetworksRequest);

function createBaseListUsedNetworksResponse(): ListUsedNetworksResponse {
  return { $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksResponse", networks: [], nextPageToken: "" };
}

export const ListUsedNetworksResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksResponse" as const,

  encode(message: ListUsedNetworksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.networks) {
      UsedNetwork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsedNetworksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsedNetworksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networks.push(UsedNetwork.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListUsedNetworksResponse {
    return {
      $type: ListUsedNetworksResponse.$type,
      networks: globalThis.Array.isArray(object?.networks)
        ? object.networks.map((e: any) => UsedNetwork.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListUsedNetworksResponse): unknown {
    const obj: any = {};
    if (message.networks?.length) {
      obj.networks = message.networks.map((e) => UsedNetwork.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUsedNetworksResponse>, I>>(base?: I): ListUsedNetworksResponse {
    return ListUsedNetworksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUsedNetworksResponse>, I>>(object: I): ListUsedNetworksResponse {
    const message = createBaseListUsedNetworksResponse();
    message.networks = object.networks?.map((e) => UsedNetwork.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListUsedNetworksResponse.$type, ListUsedNetworksResponse);

function createBaseListConnectedResourcesRequest(): ListConnectedResourcesRequest {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesRequest",
    pageSize: 0,
    pageToken: "",
    networkId: undefined,
    cloudId: undefined,
    folderId: undefined,
  };
}

export const ListConnectedResourcesRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesRequest" as const,

  encode(message: ListConnectedResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.networkId !== undefined) {
      writer.uint32(26).string(message.networkId);
    }
    if (message.cloudId !== undefined) {
      writer.uint32(34).string(message.cloudId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(42).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectedResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConnectedResourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cloudId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ListConnectedResourcesRequest {
    return {
      $type: ListConnectedResourcesRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : undefined,
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
    };
  },

  toJSON(message: ListConnectedResourcesRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.networkId !== undefined) {
      obj.networkId = message.networkId;
    }
    if (message.cloudId !== undefined) {
      obj.cloudId = message.cloudId;
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListConnectedResourcesRequest>, I>>(base?: I): ListConnectedResourcesRequest {
    return ListConnectedResourcesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListConnectedResourcesRequest>, I>>(
    object: I,
  ): ListConnectedResourcesRequest {
    const message = createBaseListConnectedResourcesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.networkId = object.networkId ?? undefined;
    message.cloudId = object.cloudId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ListConnectedResourcesRequest.$type, ListConnectedResourcesRequest);

function createBaseListConnectedResourcesResponse(): ListConnectedResourcesResponse {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse",
    resources: [],
    nextPageToken: "",
  };
}

export const ListConnectedResourcesResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse" as const,

  encode(message: ListConnectedResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      ListConnectedResourcesResponse_ConnectedResource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectedResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConnectedResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources.push(ListConnectedResourcesResponse_ConnectedResource.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListConnectedResourcesResponse {
    return {
      $type: ListConnectedResourcesResponse.$type,
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => ListConnectedResourcesResponse_ConnectedResource.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListConnectedResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => ListConnectedResourcesResponse_ConnectedResource.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListConnectedResourcesResponse>, I>>(base?: I): ListConnectedResourcesResponse {
    return ListConnectedResourcesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListConnectedResourcesResponse>, I>>(
    object: I,
  ): ListConnectedResourcesResponse {
    const message = createBaseListConnectedResourcesResponse();
    message.resources = object.resources?.map((e) => ListConnectedResourcesResponse_ConnectedResource.fromPartial(e)) ||
      [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListConnectedResourcesResponse.$type, ListConnectedResourcesResponse);

function createBaseListConnectedResourcesResponse_ConnectedResource(): ListConnectedResourcesResponse_ConnectedResource {
  return {
    $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse.ConnectedResource",
    networkId: "",
    resourceType: "",
    resourceId: "",
    subresourceType: "",
    subresourceId: "",
    resourceCloudId: "",
    resourceFolderId: "",
  };
}

export const ListConnectedResourcesResponse_ConnectedResource = {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse.ConnectedResource" as const,

  encode(
    message: ListConnectedResourcesResponse_ConnectedResource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.resourceType !== "") {
      writer.uint32(18).string(message.resourceType);
    }
    if (message.resourceId !== "") {
      writer.uint32(26).string(message.resourceId);
    }
    if (message.subresourceType !== "") {
      writer.uint32(34).string(message.subresourceType);
    }
    if (message.subresourceId !== "") {
      writer.uint32(42).string(message.subresourceId);
    }
    if (message.resourceCloudId !== "") {
      writer.uint32(50).string(message.resourceCloudId);
    }
    if (message.resourceFolderId !== "") {
      writer.uint32(58).string(message.resourceFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectedResourcesResponse_ConnectedResource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConnectedResourcesResponse_ConnectedResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subresourceType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subresourceId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.resourceCloudId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.resourceFolderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListConnectedResourcesResponse_ConnectedResource {
    return {
      $type: ListConnectedResourcesResponse_ConnectedResource.$type,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      resourceType: isSet(object.resourceType) ? globalThis.String(object.resourceType) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      subresourceType: isSet(object.subresourceType) ? globalThis.String(object.subresourceType) : "",
      subresourceId: isSet(object.subresourceId) ? globalThis.String(object.subresourceId) : "",
      resourceCloudId: isSet(object.resourceCloudId) ? globalThis.String(object.resourceCloudId) : "",
      resourceFolderId: isSet(object.resourceFolderId) ? globalThis.String(object.resourceFolderId) : "",
    };
  },

  toJSON(message: ListConnectedResourcesResponse_ConnectedResource): unknown {
    const obj: any = {};
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.resourceType !== "") {
      obj.resourceType = message.resourceType;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.subresourceType !== "") {
      obj.subresourceType = message.subresourceType;
    }
    if (message.subresourceId !== "") {
      obj.subresourceId = message.subresourceId;
    }
    if (message.resourceCloudId !== "") {
      obj.resourceCloudId = message.resourceCloudId;
    }
    if (message.resourceFolderId !== "") {
      obj.resourceFolderId = message.resourceFolderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListConnectedResourcesResponse_ConnectedResource>, I>>(
    base?: I,
  ): ListConnectedResourcesResponse_ConnectedResource {
    return ListConnectedResourcesResponse_ConnectedResource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListConnectedResourcesResponse_ConnectedResource>, I>>(
    object: I,
  ): ListConnectedResourcesResponse_ConnectedResource {
    const message = createBaseListConnectedResourcesResponse_ConnectedResource();
    message.networkId = object.networkId ?? "";
    message.resourceType = object.resourceType ?? "";
    message.resourceId = object.resourceId ?? "";
    message.subresourceType = object.subresourceType ?? "";
    message.subresourceId = object.subresourceId ?? "";
    message.resourceCloudId = object.resourceCloudId ?? "";
    message.resourceFolderId = object.resourceFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListConnectedResourcesResponse_ConnectedResource.$type,
  ListConnectedResourcesResponse_ConnectedResource,
);

function createBaseTriggerUsedNetworkCleanupRequest(): TriggerUsedNetworkCleanupRequest {
  return { $type: "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupRequest", networkId: "" };
}

export const TriggerUsedNetworkCleanupRequest = {
  $type: "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupRequest" as const,

  encode(message: TriggerUsedNetworkCleanupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerUsedNetworkCleanupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerUsedNetworkCleanupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerUsedNetworkCleanupRequest {
    return {
      $type: TriggerUsedNetworkCleanupRequest.$type,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
    };
  },

  toJSON(message: TriggerUsedNetworkCleanupRequest): unknown {
    const obj: any = {};
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerUsedNetworkCleanupRequest>, I>>(
    base?: I,
  ): TriggerUsedNetworkCleanupRequest {
    return TriggerUsedNetworkCleanupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerUsedNetworkCleanupRequest>, I>>(
    object: I,
  ): TriggerUsedNetworkCleanupRequest {
    const message = createBaseTriggerUsedNetworkCleanupRequest();
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(TriggerUsedNetworkCleanupRequest.$type, TriggerUsedNetworkCleanupRequest);

function createBaseTriggerUsedNetworkCleanupResponse(): TriggerUsedNetworkCleanupResponse {
  return {
    $type: "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupResponse",
    networkCleanupTime: undefined,
  };
}

export const TriggerUsedNetworkCleanupResponse = {
  $type: "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupResponse" as const,

  encode(message: TriggerUsedNetworkCleanupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkCleanupTime !== undefined) {
      Timestamp.encode(toTimestamp(message.networkCleanupTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerUsedNetworkCleanupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerUsedNetworkCleanupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkCleanupTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerUsedNetworkCleanupResponse {
    return {
      $type: TriggerUsedNetworkCleanupResponse.$type,
      networkCleanupTime: isSet(object.networkCleanupTime) ? fromJsonTimestamp(object.networkCleanupTime) : undefined,
    };
  },

  toJSON(message: TriggerUsedNetworkCleanupResponse): unknown {
    const obj: any = {};
    if (message.networkCleanupTime !== undefined) {
      obj.networkCleanupTime = message.networkCleanupTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerUsedNetworkCleanupResponse>, I>>(
    base?: I,
  ): TriggerUsedNetworkCleanupResponse {
    return TriggerUsedNetworkCleanupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerUsedNetworkCleanupResponse>, I>>(
    object: I,
  ): TriggerUsedNetworkCleanupResponse {
    const message = createBaseTriggerUsedNetworkCleanupResponse();
    message.networkCleanupTime = object.networkCleanupTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(TriggerUsedNetworkCleanupResponse.$type, TriggerUsedNetworkCleanupResponse);

/** A set of methods for managing VPC networks connected to serverless resources. */
export type NetworkServiceService = typeof NetworkServiceService;
export const NetworkServiceService = {
  /** Returns the specified network used in serverless resources. */
  getUsed: {
    path: "/yandex.cloud.serverless.functions.v1.NetworkService/GetUsed",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUsedNetworkRequest) => Buffer.from(GetUsedNetworkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUsedNetworkRequest.decode(value),
    responseSerialize: (value: UsedNetwork) => Buffer.from(UsedNetwork.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UsedNetwork.decode(value),
  },
  /** Retrieves the list of networks in the specified scope that are used in serverless resources. */
  listUsed: {
    path: "/yandex.cloud.serverless.functions.v1.NetworkService/ListUsed",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListUsedNetworksRequest) => Buffer.from(ListUsedNetworksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListUsedNetworksRequest.decode(value),
    responseSerialize: (value: ListUsedNetworksResponse) =>
      Buffer.from(ListUsedNetworksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListUsedNetworksResponse.decode(value),
  },
  /** Retrieves the list of serverless resources connected to any network from the specified scope. */
  listConnectedResources: {
    path: "/yandex.cloud.serverless.functions.v1.NetworkService/ListConnectedResources",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListConnectedResourcesRequest) =>
      Buffer.from(ListConnectedResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListConnectedResourcesRequest.decode(value),
    responseSerialize: (value: ListConnectedResourcesResponse) =>
      Buffer.from(ListConnectedResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListConnectedResourcesResponse.decode(value),
  },
  /**
   * Forces obsolete used network to start cleanup process as soon as possible.
   * Invocation does not wait for start or end of the cleanup process.
   * Second invocation with the same network does nothing until network is completely cleaned-up.
   */
  triggerUsedCleanup: {
    path: "/yandex.cloud.serverless.functions.v1.NetworkService/TriggerUsedCleanup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TriggerUsedNetworkCleanupRequest) =>
      Buffer.from(TriggerUsedNetworkCleanupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TriggerUsedNetworkCleanupRequest.decode(value),
    responseSerialize: (value: TriggerUsedNetworkCleanupResponse) =>
      Buffer.from(TriggerUsedNetworkCleanupResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TriggerUsedNetworkCleanupResponse.decode(value),
  },
} as const;

export interface NetworkServiceServer extends UntypedServiceImplementation {
  /** Returns the specified network used in serverless resources. */
  getUsed: handleUnaryCall<GetUsedNetworkRequest, UsedNetwork>;
  /** Retrieves the list of networks in the specified scope that are used in serverless resources. */
  listUsed: handleUnaryCall<ListUsedNetworksRequest, ListUsedNetworksResponse>;
  /** Retrieves the list of serverless resources connected to any network from the specified scope. */
  listConnectedResources: handleUnaryCall<ListConnectedResourcesRequest, ListConnectedResourcesResponse>;
  /**
   * Forces obsolete used network to start cleanup process as soon as possible.
   * Invocation does not wait for start or end of the cleanup process.
   * Second invocation with the same network does nothing until network is completely cleaned-up.
   */
  triggerUsedCleanup: handleUnaryCall<TriggerUsedNetworkCleanupRequest, TriggerUsedNetworkCleanupResponse>;
}

export interface NetworkServiceClient extends Client {
  /** Returns the specified network used in serverless resources. */
  getUsed(
    request: GetUsedNetworkRequest,
    callback: (error: ServiceError | null, response: UsedNetwork) => void,
  ): ClientUnaryCall;
  getUsed(
    request: GetUsedNetworkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UsedNetwork) => void,
  ): ClientUnaryCall;
  getUsed(
    request: GetUsedNetworkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UsedNetwork) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of networks in the specified scope that are used in serverless resources. */
  listUsed(
    request: ListUsedNetworksRequest,
    callback: (error: ServiceError | null, response: ListUsedNetworksResponse) => void,
  ): ClientUnaryCall;
  listUsed(
    request: ListUsedNetworksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListUsedNetworksResponse) => void,
  ): ClientUnaryCall;
  listUsed(
    request: ListUsedNetworksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListUsedNetworksResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of serverless resources connected to any network from the specified scope. */
  listConnectedResources(
    request: ListConnectedResourcesRequest,
    callback: (error: ServiceError | null, response: ListConnectedResourcesResponse) => void,
  ): ClientUnaryCall;
  listConnectedResources(
    request: ListConnectedResourcesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListConnectedResourcesResponse) => void,
  ): ClientUnaryCall;
  listConnectedResources(
    request: ListConnectedResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListConnectedResourcesResponse) => void,
  ): ClientUnaryCall;
  /**
   * Forces obsolete used network to start cleanup process as soon as possible.
   * Invocation does not wait for start or end of the cleanup process.
   * Second invocation with the same network does nothing until network is completely cleaned-up.
   */
  triggerUsedCleanup(
    request: TriggerUsedNetworkCleanupRequest,
    callback: (error: ServiceError | null, response: TriggerUsedNetworkCleanupResponse) => void,
  ): ClientUnaryCall;
  triggerUsedCleanup(
    request: TriggerUsedNetworkCleanupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TriggerUsedNetworkCleanupResponse) => void,
  ): ClientUnaryCall;
  triggerUsedCleanup(
    request: TriggerUsedNetworkCleanupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TriggerUsedNetworkCleanupResponse) => void,
  ): ClientUnaryCall;
}

export const NetworkServiceClient = makeGenericClientConstructor(
  NetworkServiceService,
  "yandex.cloud.serverless.functions.v1.NetworkService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): NetworkServiceClient;
  service: typeof NetworkServiceService;
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
