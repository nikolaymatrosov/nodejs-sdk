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
import { messageTypeRegistry } from "../../../../typeRegistry";
import {
  AttachedTargetGroup,
  IpVersion,
  ipVersionFromJSON,
  ipVersionToJSON,
  Listener_Protocol,
  listener_ProtocolFromJSON,
  listener_ProtocolToJSON,
  NetworkLoadBalancer,
  NetworkLoadBalancer_Type,
  networkLoadBalancer_TypeFromJSON,
  networkLoadBalancer_TypeToJSON,
  TargetState,
} from "./network_load_balancer";

export const protobufPackage = "yandex.cloud.loadbalancer.v1";

export interface GetNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest";
  /**
   * ID of the NetworkLoadBalancer resource to return.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
}

export interface ListNetworkLoadBalancersRequest {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest";
  /**
   * ID of the folder that the network load balancer belongs to.
   * To get the folder ID, use a [NetworkLoadBalancerService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [<ResponseMessage>.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListNetworkLoadBalancersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can only filter by the [NetworkLoadBalancer.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListNetworkLoadBalancersResponse {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse";
  /** List of NetworkLoadBalancer resources. */
  networkLoadBalancers: NetworkLoadBalancer[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNetworkLoadBalancersRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListNetworkLoadBalancersRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest";
  /**
   * ID of the folder to create a network load balancer in.
   * To get the folder ID, use a [NetworkLoadBalancerService.List] request.
   */
  folderId: string;
  /**
   * Name of the network load balancer.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the network load balancer. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** ID of the region where the network load balancer resides. */
  regionId: string;
  /** Type of the network load balancer. */
  type: NetworkLoadBalancer_Type;
  /** List of listeners and their specs for the network load balancer. */
  listenerSpecs: ListenerSpec[];
  /** List of attached target groups for the network load balancer. */
  attachedTargetGroups: AttachedTargetGroup[];
  /** Specifies if network load balancer protected from deletion. */
  deletionProtection: boolean;
}

export interface CreateNetworkLoadBalancerRequest_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata";
  /** ID of the network load balancer that is being created. */
  networkLoadBalancerId: string;
}

export interface UpdateNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest";
  /**
   * ID of the network load balancer to update.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /** Field mask that specifies which fields of the NetworkLoadBalancer resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the network load balancer.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the network load balancer. */
  description: string;
  /**
   * Resource labels as `` key:value `` pairs.
   *
   * The existing set of `` labels `` is completely replaced with the provided set.
   */
  labels: { [key: string]: string };
  /** A list of listeners and their specs for the network load balancer. */
  listenerSpecs: ListenerSpec[];
  /** A list of attached target groups for the network load balancer. */
  attachedTargetGroups: AttachedTargetGroup[];
  /** Specifies if network load balancer protected from deletion. */
  deletionProtection: boolean;
}

export interface UpdateNetworkLoadBalancerRequest_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata";
  /** ID of the NetworkLoadBalancer resource that is being updated. */
  networkLoadBalancerId: string;
}

export interface DeleteNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest";
  /**
   * ID of the network load balancer to delete.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
}

export interface DeleteNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata";
  /** ID of the NetworkLoadBalancer resource that is being deleted. */
  networkLoadBalancerId: string;
}

export interface StartNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest";
  /**
   * ID of the network load balancer to start.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
}

export interface StartNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata";
  /** ID of the NetworkLoadBalancer resource that is being started. */
  networkLoadBalancerId: string;
}

export interface StopNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest";
  /**
   * ID of the network load balancer to stop.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
}

export interface StopNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata";
  /** ID of the NetworkLoadBalancer resource that is being stopped. */
  networkLoadBalancerId: string;
}

export interface AttachNetworkLoadBalancerTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest";
  /**
   * ID of the network load balancer to attach the target group to.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /**
   * ID of the attached target group to attach to the network load balancer.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  attachedTargetGroup?: AttachedTargetGroup | undefined;
}

export interface AttachNetworkLoadBalancerTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata";
  /** ID of the network load balancer that the target group is being attached to. */
  networkLoadBalancerId: string;
  /** ID of the target group. */
  targetGroupId: string;
}

export interface DetachNetworkLoadBalancerTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest";
  /**
   * ID of the network load balancer to detach the target group from.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /** ID of the target group. */
  targetGroupId: string;
}

export interface DetachNetworkLoadBalancerTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata";
  /** ID of the network load balancer that the target group is being detached from. */
  networkLoadBalancerId: string;
  /** ID of the target group. */
  targetGroupId: string;
}

export interface AddNetworkLoadBalancerListenerRequest {
  $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest";
  /**
   * ID of the network load balancer to add a listener to.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /** Listener spec. */
  listenerSpec?: ListenerSpec | undefined;
}

export interface AddNetworkLoadBalancerListenerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata";
  /** ID of the network load balancer that the listener is being added to. */
  networkLoadBalancerId: string;
}

export interface RemoveNetworkLoadBalancerListenerRequest {
  $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest";
  /**
   * ID of the network load balancer to remove the listener from.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /** Name of the listener to delete. */
  listenerName: string;
}

export interface RemoveNetworkLoadBalancerListenerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata";
  /** ID of the network load balancer that the listener is being removed from. */
  networkLoadBalancerId: string;
}

export interface ListNetworkLoadBalancerOperationsRequest {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest";
  /** ID of the NetworkLoadBalancer resource to list operations for. */
  networkLoadBalancerId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListNetworkLoadBalancerOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListNetworkLoadBalancerOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListNetworkLoadBalancerOperationsResponse {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse";
  /** List of operations for the specified network load balancer. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNetworkLoadBalancerOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListNetworkLoadBalancerOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface GetTargetStatesRequest {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesRequest";
  /** ID of the NetworkLoadBalancer resource with an attached target group. */
  networkLoadBalancerId: string;
  /** ID of the target group to get states of resources from. */
  targetGroupId: string;
}

export interface GetTargetStatesResponse {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesResponse";
  /** List of states of targets within the target group that is specified in the [GetTargetStatesRequest] message. */
  targetStates: TargetState[];
}

/** External address specification that is used by [ListenerSpec]. */
export interface ExternalAddressSpec {
  $type: "yandex.cloud.loadbalancer.v1.ExternalAddressSpec";
  /**
   * Public IP address for a listener.
   * If you provide a static public IP address for the [NetworkLoadBalancerService.Update]
   * method, it will replace the existing listener address.
   */
  address: string;
  /** IP version. */
  ipVersion: IpVersion;
}

/** Internal address specification that is used by [ListenerSpec]. */
export interface InternalAddressSpec {
  $type: "yandex.cloud.loadbalancer.v1.InternalAddressSpec";
  /** Internal IP address for a listener. */
  address: string;
  /** ID of the subnet. */
  subnetId: string;
  /** IP version. */
  ipVersion: IpVersion;
}

/** Listener specification that will be used by a network load balancer. */
export interface ListenerSpec {
  $type: "yandex.cloud.loadbalancer.v1.ListenerSpec";
  /** Name of the listener. The name must be unique for each listener on a single load balancer. 3-63 characters long. */
  name: string;
  /** Port for incoming traffic. */
  port: number;
  /** Protocol for incoming traffic. */
  protocol: Listener_Protocol;
  /** External IP address specification. */
  externalAddressSpec?:
    | ExternalAddressSpec
    | undefined;
  /** Internal IP address specification. */
  internalAddressSpec?:
    | InternalAddressSpec
    | undefined;
  /**
   * Port of a target.
   * Acceptable values are 1 to 65535, inclusive.
   */
  targetPort: number;
}

function createBaseGetNetworkLoadBalancerRequest(): GetNetworkLoadBalancerRequest {
  return { $type: "yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest", networkLoadBalancerId: "" };
}

export const GetNetworkLoadBalancerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest" as const,

  encode(message: GetNetworkLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNetworkLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNetworkLoadBalancerRequest {
    return {
      $type: GetNetworkLoadBalancerRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: GetNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetNetworkLoadBalancerRequest>, I>>(base?: I): GetNetworkLoadBalancerRequest {
    return GetNetworkLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetNetworkLoadBalancerRequest>, I>>(
    object: I,
  ): GetNetworkLoadBalancerRequest {
    const message = createBaseGetNetworkLoadBalancerRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetNetworkLoadBalancerRequest.$type, GetNetworkLoadBalancerRequest);

function createBaseListNetworkLoadBalancersRequest(): ListNetworkLoadBalancersRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListNetworkLoadBalancersRequest = {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest" as const,

  encode(message: ListNetworkLoadBalancersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNetworkLoadBalancersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNetworkLoadBalancersRequest();
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

  fromJSON(object: any): ListNetworkLoadBalancersRequest {
    return {
      $type: ListNetworkLoadBalancersRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListNetworkLoadBalancersRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListNetworkLoadBalancersRequest>, I>>(base?: I): ListNetworkLoadBalancersRequest {
    return ListNetworkLoadBalancersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNetworkLoadBalancersRequest>, I>>(
    object: I,
  ): ListNetworkLoadBalancersRequest {
    const message = createBaseListNetworkLoadBalancersRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNetworkLoadBalancersRequest.$type, ListNetworkLoadBalancersRequest);

function createBaseListNetworkLoadBalancersResponse(): ListNetworkLoadBalancersResponse {
  return {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse",
    networkLoadBalancers: [],
    nextPageToken: "",
  };
}

export const ListNetworkLoadBalancersResponse = {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse" as const,

  encode(message: ListNetworkLoadBalancersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.networkLoadBalancers) {
      NetworkLoadBalancer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNetworkLoadBalancersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNetworkLoadBalancersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancers.push(NetworkLoadBalancer.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListNetworkLoadBalancersResponse {
    return {
      $type: ListNetworkLoadBalancersResponse.$type,
      networkLoadBalancers: globalThis.Array.isArray(object?.networkLoadBalancers)
        ? object.networkLoadBalancers.map((e: any) => NetworkLoadBalancer.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListNetworkLoadBalancersResponse): unknown {
    const obj: any = {};
    if (message.networkLoadBalancers?.length) {
      obj.networkLoadBalancers = message.networkLoadBalancers.map((e) => NetworkLoadBalancer.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNetworkLoadBalancersResponse>, I>>(
    base?: I,
  ): ListNetworkLoadBalancersResponse {
    return ListNetworkLoadBalancersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNetworkLoadBalancersResponse>, I>>(
    object: I,
  ): ListNetworkLoadBalancersResponse {
    const message = createBaseListNetworkLoadBalancersResponse();
    message.networkLoadBalancers = object.networkLoadBalancers?.map((e) => NetworkLoadBalancer.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNetworkLoadBalancersResponse.$type, ListNetworkLoadBalancersResponse);

function createBaseCreateNetworkLoadBalancerRequest(): CreateNetworkLoadBalancerRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    regionId: "",
    type: 0,
    listenerSpecs: [],
    attachedTargetGroups: [],
    deletionProtection: false,
  };
}

export const CreateNetworkLoadBalancerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest" as const,

  encode(message: CreateNetworkLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateNetworkLoadBalancerRequest_LabelsEntry.encode({
        $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.regionId !== "") {
      writer.uint32(42).string(message.regionId);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    for (const v of message.listenerSpecs) {
      ListenerSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.attachedTargetGroups) {
      AttachedTargetGroup.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNetworkLoadBalancerRequest();
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

          const entry4 = CreateNetworkLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.regionId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.listenerSpecs.push(ListenerSpec.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.attachedTargetGroups.push(AttachedTargetGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CreateNetworkLoadBalancerRequest {
    return {
      $type: CreateNetworkLoadBalancerRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
      type: isSet(object.type) ? networkLoadBalancer_TypeFromJSON(object.type) : 0,
      listenerSpecs: globalThis.Array.isArray(object?.listenerSpecs)
        ? object.listenerSpecs.map((e: any) => ListenerSpec.fromJSON(e))
        : [],
      attachedTargetGroups: globalThis.Array.isArray(object?.attachedTargetGroups)
        ? object.attachedTargetGroups.map((e: any) => AttachedTargetGroup.fromJSON(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: CreateNetworkLoadBalancerRequest): unknown {
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
    if (message.regionId !== "") {
      obj.regionId = message.regionId;
    }
    if (message.type !== 0) {
      obj.type = networkLoadBalancer_TypeToJSON(message.type);
    }
    if (message.listenerSpecs?.length) {
      obj.listenerSpecs = message.listenerSpecs.map((e) => ListenerSpec.toJSON(e));
    }
    if (message.attachedTargetGroups?.length) {
      obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => AttachedTargetGroup.toJSON(e));
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNetworkLoadBalancerRequest>, I>>(
    base?: I,
  ): CreateNetworkLoadBalancerRequest {
    return CreateNetworkLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateNetworkLoadBalancerRequest>, I>>(
    object: I,
  ): CreateNetworkLoadBalancerRequest {
    const message = createBaseCreateNetworkLoadBalancerRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.regionId = object.regionId ?? "";
    message.type = object.type ?? 0;
    message.listenerSpecs = object.listenerSpecs?.map((e) => ListenerSpec.fromPartial(e)) || [];
    message.attachedTargetGroups = object.attachedTargetGroups?.map((e) => AttachedTargetGroup.fromPartial(e)) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateNetworkLoadBalancerRequest.$type, CreateNetworkLoadBalancerRequest);

function createBaseCreateNetworkLoadBalancerRequest_LabelsEntry(): CreateNetworkLoadBalancerRequest_LabelsEntry {
  return { $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry", key: "", value: "" };
}

export const CreateNetworkLoadBalancerRequest_LabelsEntry = {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry" as const,

  encode(message: CreateNetworkLoadBalancerRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNetworkLoadBalancerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNetworkLoadBalancerRequest_LabelsEntry();
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

  fromJSON(object: any): CreateNetworkLoadBalancerRequest_LabelsEntry {
    return {
      $type: CreateNetworkLoadBalancerRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateNetworkLoadBalancerRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNetworkLoadBalancerRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateNetworkLoadBalancerRequest_LabelsEntry {
    return CreateNetworkLoadBalancerRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateNetworkLoadBalancerRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateNetworkLoadBalancerRequest_LabelsEntry {
    const message = createBaseCreateNetworkLoadBalancerRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateNetworkLoadBalancerRequest_LabelsEntry.$type,
  CreateNetworkLoadBalancerRequest_LabelsEntry,
);

function createBaseCreateNetworkLoadBalancerMetadata(): CreateNetworkLoadBalancerMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata", networkLoadBalancerId: "" };
}

export const CreateNetworkLoadBalancerMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata" as const,

  encode(message: CreateNetworkLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNetworkLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateNetworkLoadBalancerMetadata {
    return {
      $type: CreateNetworkLoadBalancerMetadata.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: CreateNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNetworkLoadBalancerMetadata>, I>>(
    base?: I,
  ): CreateNetworkLoadBalancerMetadata {
    return CreateNetworkLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateNetworkLoadBalancerMetadata>, I>>(
    object: I,
  ): CreateNetworkLoadBalancerMetadata {
    const message = createBaseCreateNetworkLoadBalancerMetadata();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateNetworkLoadBalancerMetadata.$type, CreateNetworkLoadBalancerMetadata);

function createBaseUpdateNetworkLoadBalancerRequest(): UpdateNetworkLoadBalancerRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest",
    networkLoadBalancerId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    listenerSpecs: [],
    attachedTargetGroups: [],
    deletionProtection: false,
  };
}

export const UpdateNetworkLoadBalancerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest" as const,

  encode(message: UpdateNetworkLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
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
      UpdateNetworkLoadBalancerRequest_LabelsEntry.encode({
        $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    for (const v of message.listenerSpecs) {
      ListenerSpec.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.attachedTargetGroups) {
      AttachedTargetGroup.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(64).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNetworkLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
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

          const entry5 = UpdateNetworkLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.listenerSpecs.push(ListenerSpec.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.attachedTargetGroups.push(AttachedTargetGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): UpdateNetworkLoadBalancerRequest {
    return {
      $type: UpdateNetworkLoadBalancerRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      listenerSpecs: globalThis.Array.isArray(object?.listenerSpecs)
        ? object.listenerSpecs.map((e: any) => ListenerSpec.fromJSON(e))
        : [],
      attachedTargetGroups: globalThis.Array.isArray(object?.attachedTargetGroups)
        ? object.attachedTargetGroups.map((e: any) => AttachedTargetGroup.fromJSON(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: UpdateNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
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
    if (message.listenerSpecs?.length) {
      obj.listenerSpecs = message.listenerSpecs.map((e) => ListenerSpec.toJSON(e));
    }
    if (message.attachedTargetGroups?.length) {
      obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => AttachedTargetGroup.toJSON(e));
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateNetworkLoadBalancerRequest>, I>>(
    base?: I,
  ): UpdateNetworkLoadBalancerRequest {
    return UpdateNetworkLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateNetworkLoadBalancerRequest>, I>>(
    object: I,
  ): UpdateNetworkLoadBalancerRequest {
    const message = createBaseUpdateNetworkLoadBalancerRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.listenerSpecs = object.listenerSpecs?.map((e) => ListenerSpec.fromPartial(e)) || [];
    message.attachedTargetGroups = object.attachedTargetGroups?.map((e) => AttachedTargetGroup.fromPartial(e)) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateNetworkLoadBalancerRequest.$type, UpdateNetworkLoadBalancerRequest);

function createBaseUpdateNetworkLoadBalancerRequest_LabelsEntry(): UpdateNetworkLoadBalancerRequest_LabelsEntry {
  return { $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateNetworkLoadBalancerRequest_LabelsEntry = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry" as const,

  encode(message: UpdateNetworkLoadBalancerRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNetworkLoadBalancerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNetworkLoadBalancerRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateNetworkLoadBalancerRequest_LabelsEntry {
    return {
      $type: UpdateNetworkLoadBalancerRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateNetworkLoadBalancerRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateNetworkLoadBalancerRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateNetworkLoadBalancerRequest_LabelsEntry {
    return UpdateNetworkLoadBalancerRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateNetworkLoadBalancerRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateNetworkLoadBalancerRequest_LabelsEntry {
    const message = createBaseUpdateNetworkLoadBalancerRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateNetworkLoadBalancerRequest_LabelsEntry.$type,
  UpdateNetworkLoadBalancerRequest_LabelsEntry,
);

function createBaseUpdateNetworkLoadBalancerMetadata(): UpdateNetworkLoadBalancerMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata", networkLoadBalancerId: "" };
}

export const UpdateNetworkLoadBalancerMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata" as const,

  encode(message: UpdateNetworkLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNetworkLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateNetworkLoadBalancerMetadata {
    return {
      $type: UpdateNetworkLoadBalancerMetadata.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: UpdateNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateNetworkLoadBalancerMetadata>, I>>(
    base?: I,
  ): UpdateNetworkLoadBalancerMetadata {
    return UpdateNetworkLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateNetworkLoadBalancerMetadata>, I>>(
    object: I,
  ): UpdateNetworkLoadBalancerMetadata {
    const message = createBaseUpdateNetworkLoadBalancerMetadata();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateNetworkLoadBalancerMetadata.$type, UpdateNetworkLoadBalancerMetadata);

function createBaseDeleteNetworkLoadBalancerRequest(): DeleteNetworkLoadBalancerRequest {
  return { $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest", networkLoadBalancerId: "" };
}

export const DeleteNetworkLoadBalancerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest" as const,

  encode(message: DeleteNetworkLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteNetworkLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteNetworkLoadBalancerRequest {
    return {
      $type: DeleteNetworkLoadBalancerRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: DeleteNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteNetworkLoadBalancerRequest>, I>>(
    base?: I,
  ): DeleteNetworkLoadBalancerRequest {
    return DeleteNetworkLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteNetworkLoadBalancerRequest>, I>>(
    object: I,
  ): DeleteNetworkLoadBalancerRequest {
    const message = createBaseDeleteNetworkLoadBalancerRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNetworkLoadBalancerRequest.$type, DeleteNetworkLoadBalancerRequest);

function createBaseDeleteNetworkLoadBalancerMetadata(): DeleteNetworkLoadBalancerMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata", networkLoadBalancerId: "" };
}

export const DeleteNetworkLoadBalancerMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata" as const,

  encode(message: DeleteNetworkLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteNetworkLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteNetworkLoadBalancerMetadata {
    return {
      $type: DeleteNetworkLoadBalancerMetadata.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: DeleteNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteNetworkLoadBalancerMetadata>, I>>(
    base?: I,
  ): DeleteNetworkLoadBalancerMetadata {
    return DeleteNetworkLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteNetworkLoadBalancerMetadata>, I>>(
    object: I,
  ): DeleteNetworkLoadBalancerMetadata {
    const message = createBaseDeleteNetworkLoadBalancerMetadata();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNetworkLoadBalancerMetadata.$type, DeleteNetworkLoadBalancerMetadata);

function createBaseStartNetworkLoadBalancerRequest(): StartNetworkLoadBalancerRequest {
  return { $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest", networkLoadBalancerId: "" };
}

export const StartNetworkLoadBalancerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest" as const,

  encode(message: StartNetworkLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartNetworkLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartNetworkLoadBalancerRequest {
    return {
      $type: StartNetworkLoadBalancerRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: StartNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartNetworkLoadBalancerRequest>, I>>(base?: I): StartNetworkLoadBalancerRequest {
    return StartNetworkLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartNetworkLoadBalancerRequest>, I>>(
    object: I,
  ): StartNetworkLoadBalancerRequest {
    const message = createBaseStartNetworkLoadBalancerRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartNetworkLoadBalancerRequest.$type, StartNetworkLoadBalancerRequest);

function createBaseStartNetworkLoadBalancerMetadata(): StartNetworkLoadBalancerMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata", networkLoadBalancerId: "" };
}

export const StartNetworkLoadBalancerMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata" as const,

  encode(message: StartNetworkLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartNetworkLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartNetworkLoadBalancerMetadata {
    return {
      $type: StartNetworkLoadBalancerMetadata.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: StartNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartNetworkLoadBalancerMetadata>, I>>(
    base?: I,
  ): StartNetworkLoadBalancerMetadata {
    return StartNetworkLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartNetworkLoadBalancerMetadata>, I>>(
    object: I,
  ): StartNetworkLoadBalancerMetadata {
    const message = createBaseStartNetworkLoadBalancerMetadata();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartNetworkLoadBalancerMetadata.$type, StartNetworkLoadBalancerMetadata);

function createBaseStopNetworkLoadBalancerRequest(): StopNetworkLoadBalancerRequest {
  return { $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest", networkLoadBalancerId: "" };
}

export const StopNetworkLoadBalancerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest" as const,

  encode(message: StopNetworkLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopNetworkLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopNetworkLoadBalancerRequest {
    return {
      $type: StopNetworkLoadBalancerRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: StopNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopNetworkLoadBalancerRequest>, I>>(base?: I): StopNetworkLoadBalancerRequest {
    return StopNetworkLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopNetworkLoadBalancerRequest>, I>>(
    object: I,
  ): StopNetworkLoadBalancerRequest {
    const message = createBaseStopNetworkLoadBalancerRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopNetworkLoadBalancerRequest.$type, StopNetworkLoadBalancerRequest);

function createBaseStopNetworkLoadBalancerMetadata(): StopNetworkLoadBalancerMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata", networkLoadBalancerId: "" };
}

export const StopNetworkLoadBalancerMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata" as const,

  encode(message: StopNetworkLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopNetworkLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopNetworkLoadBalancerMetadata {
    return {
      $type: StopNetworkLoadBalancerMetadata.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: StopNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopNetworkLoadBalancerMetadata>, I>>(base?: I): StopNetworkLoadBalancerMetadata {
    return StopNetworkLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopNetworkLoadBalancerMetadata>, I>>(
    object: I,
  ): StopNetworkLoadBalancerMetadata {
    const message = createBaseStopNetworkLoadBalancerMetadata();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopNetworkLoadBalancerMetadata.$type, StopNetworkLoadBalancerMetadata);

function createBaseAttachNetworkLoadBalancerTargetGroupRequest(): AttachNetworkLoadBalancerTargetGroupRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest",
    networkLoadBalancerId: "",
    attachedTargetGroup: undefined,
  };
}

export const AttachNetworkLoadBalancerTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest" as const,

  encode(message: AttachNetworkLoadBalancerTargetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.attachedTargetGroup !== undefined) {
      AttachedTargetGroup.encode(message.attachedTargetGroup, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachNetworkLoadBalancerTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachNetworkLoadBalancerTargetGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attachedTargetGroup = AttachedTargetGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachNetworkLoadBalancerTargetGroupRequest {
    return {
      $type: AttachNetworkLoadBalancerTargetGroupRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
      attachedTargetGroup: isSet(object.attachedTargetGroup)
        ? AttachedTargetGroup.fromJSON(object.attachedTargetGroup)
        : undefined,
    };
  },

  toJSON(message: AttachNetworkLoadBalancerTargetGroupRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    if (message.attachedTargetGroup !== undefined) {
      obj.attachedTargetGroup = AttachedTargetGroup.toJSON(message.attachedTargetGroup);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachNetworkLoadBalancerTargetGroupRequest>, I>>(
    base?: I,
  ): AttachNetworkLoadBalancerTargetGroupRequest {
    return AttachNetworkLoadBalancerTargetGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttachNetworkLoadBalancerTargetGroupRequest>, I>>(
    object: I,
  ): AttachNetworkLoadBalancerTargetGroupRequest {
    const message = createBaseAttachNetworkLoadBalancerTargetGroupRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.attachedTargetGroup = (object.attachedTargetGroup !== undefined && object.attachedTargetGroup !== null)
      ? AttachedTargetGroup.fromPartial(object.attachedTargetGroup)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AttachNetworkLoadBalancerTargetGroupRequest.$type, AttachNetworkLoadBalancerTargetGroupRequest);

function createBaseAttachNetworkLoadBalancerTargetGroupMetadata(): AttachNetworkLoadBalancerTargetGroupMetadata {
  return {
    $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata",
    networkLoadBalancerId: "",
    targetGroupId: "",
  };
}

export const AttachNetworkLoadBalancerTargetGroupMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata" as const,

  encode(message: AttachNetworkLoadBalancerTargetGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(18).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachNetworkLoadBalancerTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachNetworkLoadBalancerTargetGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachNetworkLoadBalancerTargetGroupMetadata {
    return {
      $type: AttachNetworkLoadBalancerTargetGroupMetadata.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: AttachNetworkLoadBalancerTargetGroupMetadata): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachNetworkLoadBalancerTargetGroupMetadata>, I>>(
    base?: I,
  ): AttachNetworkLoadBalancerTargetGroupMetadata {
    return AttachNetworkLoadBalancerTargetGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttachNetworkLoadBalancerTargetGroupMetadata>, I>>(
    object: I,
  ): AttachNetworkLoadBalancerTargetGroupMetadata {
    const message = createBaseAttachNetworkLoadBalancerTargetGroupMetadata();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AttachNetworkLoadBalancerTargetGroupMetadata.$type,
  AttachNetworkLoadBalancerTargetGroupMetadata,
);

function createBaseDetachNetworkLoadBalancerTargetGroupRequest(): DetachNetworkLoadBalancerTargetGroupRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest",
    networkLoadBalancerId: "",
    targetGroupId: "",
  };
}

export const DetachNetworkLoadBalancerTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest" as const,

  encode(message: DetachNetworkLoadBalancerTargetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(18).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DetachNetworkLoadBalancerTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetachNetworkLoadBalancerTargetGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DetachNetworkLoadBalancerTargetGroupRequest {
    return {
      $type: DetachNetworkLoadBalancerTargetGroupRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: DetachNetworkLoadBalancerTargetGroupRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DetachNetworkLoadBalancerTargetGroupRequest>, I>>(
    base?: I,
  ): DetachNetworkLoadBalancerTargetGroupRequest {
    return DetachNetworkLoadBalancerTargetGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DetachNetworkLoadBalancerTargetGroupRequest>, I>>(
    object: I,
  ): DetachNetworkLoadBalancerTargetGroupRequest {
    const message = createBaseDetachNetworkLoadBalancerTargetGroupRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DetachNetworkLoadBalancerTargetGroupRequest.$type, DetachNetworkLoadBalancerTargetGroupRequest);

function createBaseDetachNetworkLoadBalancerTargetGroupMetadata(): DetachNetworkLoadBalancerTargetGroupMetadata {
  return {
    $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata",
    networkLoadBalancerId: "",
    targetGroupId: "",
  };
}

export const DetachNetworkLoadBalancerTargetGroupMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata" as const,

  encode(message: DetachNetworkLoadBalancerTargetGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(18).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DetachNetworkLoadBalancerTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetachNetworkLoadBalancerTargetGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DetachNetworkLoadBalancerTargetGroupMetadata {
    return {
      $type: DetachNetworkLoadBalancerTargetGroupMetadata.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: DetachNetworkLoadBalancerTargetGroupMetadata): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DetachNetworkLoadBalancerTargetGroupMetadata>, I>>(
    base?: I,
  ): DetachNetworkLoadBalancerTargetGroupMetadata {
    return DetachNetworkLoadBalancerTargetGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DetachNetworkLoadBalancerTargetGroupMetadata>, I>>(
    object: I,
  ): DetachNetworkLoadBalancerTargetGroupMetadata {
    const message = createBaseDetachNetworkLoadBalancerTargetGroupMetadata();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DetachNetworkLoadBalancerTargetGroupMetadata.$type,
  DetachNetworkLoadBalancerTargetGroupMetadata,
);

function createBaseAddNetworkLoadBalancerListenerRequest(): AddNetworkLoadBalancerListenerRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest",
    networkLoadBalancerId: "",
    listenerSpec: undefined,
  };
}

export const AddNetworkLoadBalancerListenerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest" as const,

  encode(message: AddNetworkLoadBalancerListenerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.listenerSpec !== undefined) {
      ListenerSpec.encode(message.listenerSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNetworkLoadBalancerListenerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNetworkLoadBalancerListenerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listenerSpec = ListenerSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddNetworkLoadBalancerListenerRequest {
    return {
      $type: AddNetworkLoadBalancerListenerRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
      listenerSpec: isSet(object.listenerSpec) ? ListenerSpec.fromJSON(object.listenerSpec) : undefined,
    };
  },

  toJSON(message: AddNetworkLoadBalancerListenerRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    if (message.listenerSpec !== undefined) {
      obj.listenerSpec = ListenerSpec.toJSON(message.listenerSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddNetworkLoadBalancerListenerRequest>, I>>(
    base?: I,
  ): AddNetworkLoadBalancerListenerRequest {
    return AddNetworkLoadBalancerListenerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddNetworkLoadBalancerListenerRequest>, I>>(
    object: I,
  ): AddNetworkLoadBalancerListenerRequest {
    const message = createBaseAddNetworkLoadBalancerListenerRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.listenerSpec = (object.listenerSpec !== undefined && object.listenerSpec !== null)
      ? ListenerSpec.fromPartial(object.listenerSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddNetworkLoadBalancerListenerRequest.$type, AddNetworkLoadBalancerListenerRequest);

function createBaseAddNetworkLoadBalancerListenerMetadata(): AddNetworkLoadBalancerListenerMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata", networkLoadBalancerId: "" };
}

export const AddNetworkLoadBalancerListenerMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata" as const,

  encode(message: AddNetworkLoadBalancerListenerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNetworkLoadBalancerListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNetworkLoadBalancerListenerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddNetworkLoadBalancerListenerMetadata {
    return {
      $type: AddNetworkLoadBalancerListenerMetadata.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: AddNetworkLoadBalancerListenerMetadata): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddNetworkLoadBalancerListenerMetadata>, I>>(
    base?: I,
  ): AddNetworkLoadBalancerListenerMetadata {
    return AddNetworkLoadBalancerListenerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddNetworkLoadBalancerListenerMetadata>, I>>(
    object: I,
  ): AddNetworkLoadBalancerListenerMetadata {
    const message = createBaseAddNetworkLoadBalancerListenerMetadata();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddNetworkLoadBalancerListenerMetadata.$type, AddNetworkLoadBalancerListenerMetadata);

function createBaseRemoveNetworkLoadBalancerListenerRequest(): RemoveNetworkLoadBalancerListenerRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest",
    networkLoadBalancerId: "",
    listenerName: "",
  };
}

export const RemoveNetworkLoadBalancerListenerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest" as const,

  encode(message: RemoveNetworkLoadBalancerListenerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveNetworkLoadBalancerListenerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveNetworkLoadBalancerListenerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listenerName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveNetworkLoadBalancerListenerRequest {
    return {
      $type: RemoveNetworkLoadBalancerListenerRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
    };
  },

  toJSON(message: RemoveNetworkLoadBalancerListenerRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveNetworkLoadBalancerListenerRequest>, I>>(
    base?: I,
  ): RemoveNetworkLoadBalancerListenerRequest {
    return RemoveNetworkLoadBalancerListenerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveNetworkLoadBalancerListenerRequest>, I>>(
    object: I,
  ): RemoveNetworkLoadBalancerListenerRequest {
    const message = createBaseRemoveNetworkLoadBalancerListenerRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveNetworkLoadBalancerListenerRequest.$type, RemoveNetworkLoadBalancerListenerRequest);

function createBaseRemoveNetworkLoadBalancerListenerMetadata(): RemoveNetworkLoadBalancerListenerMetadata {
  return { $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata", networkLoadBalancerId: "" };
}

export const RemoveNetworkLoadBalancerListenerMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata" as const,

  encode(message: RemoveNetworkLoadBalancerListenerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveNetworkLoadBalancerListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveNetworkLoadBalancerListenerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveNetworkLoadBalancerListenerMetadata {
    return {
      $type: RemoveNetworkLoadBalancerListenerMetadata.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
    };
  },

  toJSON(message: RemoveNetworkLoadBalancerListenerMetadata): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveNetworkLoadBalancerListenerMetadata>, I>>(
    base?: I,
  ): RemoveNetworkLoadBalancerListenerMetadata {
    return RemoveNetworkLoadBalancerListenerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveNetworkLoadBalancerListenerMetadata>, I>>(
    object: I,
  ): RemoveNetworkLoadBalancerListenerMetadata {
    const message = createBaseRemoveNetworkLoadBalancerListenerMetadata();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveNetworkLoadBalancerListenerMetadata.$type, RemoveNetworkLoadBalancerListenerMetadata);

function createBaseListNetworkLoadBalancerOperationsRequest(): ListNetworkLoadBalancerOperationsRequest {
  return {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest",
    networkLoadBalancerId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListNetworkLoadBalancerOperationsRequest = {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest" as const,

  encode(message: ListNetworkLoadBalancerOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNetworkLoadBalancerOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNetworkLoadBalancerOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
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

  fromJSON(object: any): ListNetworkLoadBalancerOperationsRequest {
    return {
      $type: ListNetworkLoadBalancerOperationsRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListNetworkLoadBalancerOperationsRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNetworkLoadBalancerOperationsRequest>, I>>(
    base?: I,
  ): ListNetworkLoadBalancerOperationsRequest {
    return ListNetworkLoadBalancerOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNetworkLoadBalancerOperationsRequest>, I>>(
    object: I,
  ): ListNetworkLoadBalancerOperationsRequest {
    const message = createBaseListNetworkLoadBalancerOperationsRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNetworkLoadBalancerOperationsRequest.$type, ListNetworkLoadBalancerOperationsRequest);

function createBaseListNetworkLoadBalancerOperationsResponse(): ListNetworkLoadBalancerOperationsResponse {
  return {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListNetworkLoadBalancerOperationsResponse = {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse" as const,

  encode(message: ListNetworkLoadBalancerOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNetworkLoadBalancerOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNetworkLoadBalancerOperationsResponse();
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

  fromJSON(object: any): ListNetworkLoadBalancerOperationsResponse {
    return {
      $type: ListNetworkLoadBalancerOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListNetworkLoadBalancerOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNetworkLoadBalancerOperationsResponse>, I>>(
    base?: I,
  ): ListNetworkLoadBalancerOperationsResponse {
    return ListNetworkLoadBalancerOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNetworkLoadBalancerOperationsResponse>, I>>(
    object: I,
  ): ListNetworkLoadBalancerOperationsResponse {
    const message = createBaseListNetworkLoadBalancerOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNetworkLoadBalancerOperationsResponse.$type, ListNetworkLoadBalancerOperationsResponse);

function createBaseGetTargetStatesRequest(): GetTargetStatesRequest {
  return { $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesRequest", networkLoadBalancerId: "", targetGroupId: "" };
}

export const GetTargetStatesRequest = {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesRequest" as const,

  encode(message: GetTargetStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(18).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTargetStatesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTargetStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkLoadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTargetStatesRequest {
    return {
      $type: GetTargetStatesRequest.$type,
      networkLoadBalancerId: isSet(object.networkLoadBalancerId) ? globalThis.String(object.networkLoadBalancerId) : "",
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: GetTargetStatesRequest): unknown {
    const obj: any = {};
    if (message.networkLoadBalancerId !== "") {
      obj.networkLoadBalancerId = message.networkLoadBalancerId;
    }
    if (message.targetGroupId !== "") {
      obj.targetGroupId = message.targetGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTargetStatesRequest>, I>>(base?: I): GetTargetStatesRequest {
    return GetTargetStatesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTargetStatesRequest>, I>>(object: I): GetTargetStatesRequest {
    const message = createBaseGetTargetStatesRequest();
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTargetStatesRequest.$type, GetTargetStatesRequest);

function createBaseGetTargetStatesResponse(): GetTargetStatesResponse {
  return { $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesResponse", targetStates: [] };
}

export const GetTargetStatesResponse = {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesResponse" as const,

  encode(message: GetTargetStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.targetStates) {
      TargetState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTargetStatesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTargetStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetStates.push(TargetState.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTargetStatesResponse {
    return {
      $type: GetTargetStatesResponse.$type,
      targetStates: globalThis.Array.isArray(object?.targetStates)
        ? object.targetStates.map((e: any) => TargetState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetTargetStatesResponse): unknown {
    const obj: any = {};
    if (message.targetStates?.length) {
      obj.targetStates = message.targetStates.map((e) => TargetState.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTargetStatesResponse>, I>>(base?: I): GetTargetStatesResponse {
    return GetTargetStatesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTargetStatesResponse>, I>>(object: I): GetTargetStatesResponse {
    const message = createBaseGetTargetStatesResponse();
    message.targetStates = object.targetStates?.map((e) => TargetState.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GetTargetStatesResponse.$type, GetTargetStatesResponse);

function createBaseExternalAddressSpec(): ExternalAddressSpec {
  return { $type: "yandex.cloud.loadbalancer.v1.ExternalAddressSpec", address: "", ipVersion: 0 };
}

export const ExternalAddressSpec = {
  $type: "yandex.cloud.loadbalancer.v1.ExternalAddressSpec" as const,

  encode(message: ExternalAddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(16).int32(message.ipVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalAddressSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalAddressSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ipVersion = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalAddressSpec {
    return {
      $type: ExternalAddressSpec.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      ipVersion: isSet(object.ipVersion) ? ipVersionFromJSON(object.ipVersion) : 0,
    };
  },

  toJSON(message: ExternalAddressSpec): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.ipVersion !== 0) {
      obj.ipVersion = ipVersionToJSON(message.ipVersion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalAddressSpec>, I>>(base?: I): ExternalAddressSpec {
    return ExternalAddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalAddressSpec>, I>>(object: I): ExternalAddressSpec {
    const message = createBaseExternalAddressSpec();
    message.address = object.address ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ExternalAddressSpec.$type, ExternalAddressSpec);

function createBaseInternalAddressSpec(): InternalAddressSpec {
  return { $type: "yandex.cloud.loadbalancer.v1.InternalAddressSpec", address: "", subnetId: "", ipVersion: 0 };
}

export const InternalAddressSpec = {
  $type: "yandex.cloud.loadbalancer.v1.InternalAddressSpec" as const,

  encode(message: InternalAddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(24).int32(message.ipVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalAddressSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalAddressSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ipVersion = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InternalAddressSpec {
    return {
      $type: InternalAddressSpec.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      ipVersion: isSet(object.ipVersion) ? ipVersionFromJSON(object.ipVersion) : 0,
    };
  },

  toJSON(message: InternalAddressSpec): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.ipVersion !== 0) {
      obj.ipVersion = ipVersionToJSON(message.ipVersion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InternalAddressSpec>, I>>(base?: I): InternalAddressSpec {
    return InternalAddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InternalAddressSpec>, I>>(object: I): InternalAddressSpec {
    const message = createBaseInternalAddressSpec();
    message.address = object.address ?? "";
    message.subnetId = object.subnetId ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    return message;
  },
};

messageTypeRegistry.set(InternalAddressSpec.$type, InternalAddressSpec);

function createBaseListenerSpec(): ListenerSpec {
  return {
    $type: "yandex.cloud.loadbalancer.v1.ListenerSpec",
    name: "",
    port: 0,
    protocol: 0,
    externalAddressSpec: undefined,
    internalAddressSpec: undefined,
    targetPort: 0,
  };
}

export const ListenerSpec = {
  $type: "yandex.cloud.loadbalancer.v1.ListenerSpec" as const,

  encode(message: ListenerSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.port !== 0) {
      writer.uint32(16).int64(message.port);
    }
    if (message.protocol !== 0) {
      writer.uint32(24).int32(message.protocol);
    }
    if (message.externalAddressSpec !== undefined) {
      ExternalAddressSpec.encode(message.externalAddressSpec, writer.uint32(34).fork()).ldelim();
    }
    if (message.internalAddressSpec !== undefined) {
      InternalAddressSpec.encode(message.internalAddressSpec, writer.uint32(50).fork()).ldelim();
    }
    if (message.targetPort !== 0) {
      writer.uint32(40).int64(message.targetPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenerSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenerSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.protocol = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.externalAddressSpec = ExternalAddressSpec.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.internalAddressSpec = InternalAddressSpec.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.targetPort = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListenerSpec {
    return {
      $type: ListenerSpec.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      protocol: isSet(object.protocol) ? listener_ProtocolFromJSON(object.protocol) : 0,
      externalAddressSpec: isSet(object.externalAddressSpec)
        ? ExternalAddressSpec.fromJSON(object.externalAddressSpec)
        : undefined,
      internalAddressSpec: isSet(object.internalAddressSpec)
        ? InternalAddressSpec.fromJSON(object.internalAddressSpec)
        : undefined,
      targetPort: isSet(object.targetPort) ? globalThis.Number(object.targetPort) : 0,
    };
  },

  toJSON(message: ListenerSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.protocol !== 0) {
      obj.protocol = listener_ProtocolToJSON(message.protocol);
    }
    if (message.externalAddressSpec !== undefined) {
      obj.externalAddressSpec = ExternalAddressSpec.toJSON(message.externalAddressSpec);
    }
    if (message.internalAddressSpec !== undefined) {
      obj.internalAddressSpec = InternalAddressSpec.toJSON(message.internalAddressSpec);
    }
    if (message.targetPort !== 0) {
      obj.targetPort = Math.round(message.targetPort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListenerSpec>, I>>(base?: I): ListenerSpec {
    return ListenerSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListenerSpec>, I>>(object: I): ListenerSpec {
    const message = createBaseListenerSpec();
    message.name = object.name ?? "";
    message.port = object.port ?? 0;
    message.protocol = object.protocol ?? 0;
    message.externalAddressSpec = (object.externalAddressSpec !== undefined && object.externalAddressSpec !== null)
      ? ExternalAddressSpec.fromPartial(object.externalAddressSpec)
      : undefined;
    message.internalAddressSpec = (object.internalAddressSpec !== undefined && object.internalAddressSpec !== null)
      ? InternalAddressSpec.fromPartial(object.internalAddressSpec)
      : undefined;
    message.targetPort = object.targetPort ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListenerSpec.$type, ListenerSpec);

/** A set of methods for managing NetworkLoadBalancer resources. */
export type NetworkLoadBalancerServiceService = typeof NetworkLoadBalancerServiceService;
export const NetworkLoadBalancerServiceService = {
  /**
   * Returns the specified NetworkLoadBalancer resource.
   *
   * Get the list of available NetworkLoadBalancer resources by making a [List] request.
   */
  get: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetNetworkLoadBalancerRequest) =>
      Buffer.from(GetNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: NetworkLoadBalancer) => Buffer.from(NetworkLoadBalancer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => NetworkLoadBalancer.decode(value),
  },
  /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
  list: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNetworkLoadBalancersRequest) =>
      Buffer.from(ListNetworkLoadBalancersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListNetworkLoadBalancersRequest.decode(value),
    responseSerialize: (value: ListNetworkLoadBalancersResponse) =>
      Buffer.from(ListNetworkLoadBalancersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListNetworkLoadBalancersResponse.decode(value),
  },
  /** Creates a network load balancer in the specified folder using the data specified in the request. */
  create: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateNetworkLoadBalancerRequest) =>
      Buffer.from(CreateNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified network load balancer. */
  update: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateNetworkLoadBalancerRequest) =>
      Buffer.from(UpdateNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified network load balancer. */
  delete: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteNetworkLoadBalancerRequest) =>
      Buffer.from(DeleteNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Starts load balancing and health checking with the specified network load balancer with specified settings.
   * Changes network load balancer status to `` ACTIVE ``.
   */
  start: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartNetworkLoadBalancerRequest) =>
      Buffer.from(StartNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Stops load balancing and health checking with the specified network load balancer.
   * Changes load balancer status to `` STOPPED ``.
   */
  stop: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopNetworkLoadBalancerRequest) =>
      Buffer.from(StopNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Attaches a target group to the specified network load balancer. */
  attachTargetGroup: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AttachNetworkLoadBalancerTargetGroupRequest) =>
      Buffer.from(AttachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AttachNetworkLoadBalancerTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Detaches the target group from the specified network load balancer. */
  detachTargetGroup: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DetachNetworkLoadBalancerTargetGroupRequest) =>
      Buffer.from(DetachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DetachNetworkLoadBalancerTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Gets states of target resources in the attached target group. */
  getTargetStates: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTargetStatesRequest) => Buffer.from(GetTargetStatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTargetStatesRequest.decode(value),
    responseSerialize: (value: GetTargetStatesResponse) => Buffer.from(GetTargetStatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetTargetStatesResponse.decode(value),
  },
  /** Adds a listener to the specified network load balancer. */
  addListener: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddNetworkLoadBalancerListenerRequest) =>
      Buffer.from(AddNetworkLoadBalancerListenerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddNetworkLoadBalancerListenerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes the listener from the specified network load balancer. */
  removeListener: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveNetworkLoadBalancerListenerRequest) =>
      Buffer.from(RemoveNetworkLoadBalancerListenerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveNetworkLoadBalancerListenerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified network load balancer. */
  listOperations: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNetworkLoadBalancerOperationsRequest) =>
      Buffer.from(ListNetworkLoadBalancerOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListNetworkLoadBalancerOperationsRequest.decode(value),
    responseSerialize: (value: ListNetworkLoadBalancerOperationsResponse) =>
      Buffer.from(ListNetworkLoadBalancerOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListNetworkLoadBalancerOperationsResponse.decode(value),
  },
} as const;

export interface NetworkLoadBalancerServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified NetworkLoadBalancer resource.
   *
   * Get the list of available NetworkLoadBalancer resources by making a [List] request.
   */
  get: handleUnaryCall<GetNetworkLoadBalancerRequest, NetworkLoadBalancer>;
  /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
  list: handleUnaryCall<ListNetworkLoadBalancersRequest, ListNetworkLoadBalancersResponse>;
  /** Creates a network load balancer in the specified folder using the data specified in the request. */
  create: handleUnaryCall<CreateNetworkLoadBalancerRequest, Operation>;
  /** Updates the specified network load balancer. */
  update: handleUnaryCall<UpdateNetworkLoadBalancerRequest, Operation>;
  /** Deletes the specified network load balancer. */
  delete: handleUnaryCall<DeleteNetworkLoadBalancerRequest, Operation>;
  /**
   * Starts load balancing and health checking with the specified network load balancer with specified settings.
   * Changes network load balancer status to `` ACTIVE ``.
   */
  start: handleUnaryCall<StartNetworkLoadBalancerRequest, Operation>;
  /**
   * Stops load balancing and health checking with the specified network load balancer.
   * Changes load balancer status to `` STOPPED ``.
   */
  stop: handleUnaryCall<StopNetworkLoadBalancerRequest, Operation>;
  /** Attaches a target group to the specified network load balancer. */
  attachTargetGroup: handleUnaryCall<AttachNetworkLoadBalancerTargetGroupRequest, Operation>;
  /** Detaches the target group from the specified network load balancer. */
  detachTargetGroup: handleUnaryCall<DetachNetworkLoadBalancerTargetGroupRequest, Operation>;
  /** Gets states of target resources in the attached target group. */
  getTargetStates: handleUnaryCall<GetTargetStatesRequest, GetTargetStatesResponse>;
  /** Adds a listener to the specified network load balancer. */
  addListener: handleUnaryCall<AddNetworkLoadBalancerListenerRequest, Operation>;
  /** Removes the listener from the specified network load balancer. */
  removeListener: handleUnaryCall<RemoveNetworkLoadBalancerListenerRequest, Operation>;
  /** Lists operations for the specified network load balancer. */
  listOperations: handleUnaryCall<ListNetworkLoadBalancerOperationsRequest, ListNetworkLoadBalancerOperationsResponse>;
}

export interface NetworkLoadBalancerServiceClient extends Client {
  /**
   * Returns the specified NetworkLoadBalancer resource.
   *
   * Get the list of available NetworkLoadBalancer resources by making a [List] request.
   */
  get(
    request: GetNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: NetworkLoadBalancer) => void,
  ): ClientUnaryCall;
  get(
    request: GetNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: NetworkLoadBalancer) => void,
  ): ClientUnaryCall;
  get(
    request: GetNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: NetworkLoadBalancer) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
  list(
    request: ListNetworkLoadBalancersRequest,
    callback: (error: ServiceError | null, response: ListNetworkLoadBalancersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListNetworkLoadBalancersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListNetworkLoadBalancersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListNetworkLoadBalancersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListNetworkLoadBalancersResponse) => void,
  ): ClientUnaryCall;
  /** Creates a network load balancer in the specified folder using the data specified in the request. */
  create(
    request: CreateNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified network load balancer. */
  update(
    request: UpdateNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified network load balancer. */
  delete(
    request: DeleteNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Starts load balancing and health checking with the specified network load balancer with specified settings.
   * Changes network load balancer status to `` ACTIVE ``.
   */
  start(
    request: StartNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Stops load balancing and health checking with the specified network load balancer.
   * Changes load balancer status to `` STOPPED ``.
   */
  stop(
    request: StopNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Attaches a target group to the specified network load balancer. */
  attachTargetGroup(
    request: AttachNetworkLoadBalancerTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  attachTargetGroup(
    request: AttachNetworkLoadBalancerTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  attachTargetGroup(
    request: AttachNetworkLoadBalancerTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Detaches the target group from the specified network load balancer. */
  detachTargetGroup(
    request: DetachNetworkLoadBalancerTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  detachTargetGroup(
    request: DetachNetworkLoadBalancerTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  detachTargetGroup(
    request: DetachNetworkLoadBalancerTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Gets states of target resources in the attached target group. */
  getTargetStates(
    request: GetTargetStatesRequest,
    callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void,
  ): ClientUnaryCall;
  getTargetStates(
    request: GetTargetStatesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void,
  ): ClientUnaryCall;
  getTargetStates(
    request: GetTargetStatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void,
  ): ClientUnaryCall;
  /** Adds a listener to the specified network load balancer. */
  addListener(
    request: AddNetworkLoadBalancerListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addListener(
    request: AddNetworkLoadBalancerListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addListener(
    request: AddNetworkLoadBalancerListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Removes the listener from the specified network load balancer. */
  removeListener(
    request: RemoveNetworkLoadBalancerListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeListener(
    request: RemoveNetworkLoadBalancerListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeListener(
    request: RemoveNetworkLoadBalancerListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified network load balancer. */
  listOperations(
    request: ListNetworkLoadBalancerOperationsRequest,
    callback: (error: ServiceError | null, response: ListNetworkLoadBalancerOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListNetworkLoadBalancerOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListNetworkLoadBalancerOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListNetworkLoadBalancerOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListNetworkLoadBalancerOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const NetworkLoadBalancerServiceClient = makeGenericClientConstructor(
  NetworkLoadBalancerServiceService,
  "yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): NetworkLoadBalancerServiceClient;
  service: typeof NetworkLoadBalancerServiceService;
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
