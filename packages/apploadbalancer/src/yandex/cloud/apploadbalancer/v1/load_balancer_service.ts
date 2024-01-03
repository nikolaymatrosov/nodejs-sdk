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
  AllocationPolicy,
  AutoScalePolicy,
  HttpListener,
  LoadBalancer,
  StreamListener,
  TargetState,
  TlsHandler,
  TlsListener,
} from "./load_balancer";
import { LogOptions } from "./logging";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

export interface GetLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest";
  /**
   * ID of the application load balancer to return.
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
}

export interface ListLoadBalancersRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest";
  /**
   * ID of the folder to list application load balancers in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListLoadBalancersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListLoadBalancersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters application load balancers listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [LoadBalancer.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-load-balancer`.
   */
  filter: string;
}

export interface ListLoadBalancersResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse";
  /** List of application load balancers in the specified folder. */
  loadBalancers: LoadBalancer[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListLoadBalancersRequest.page_size], use `next_page_token` as the value
   * for the [ListLoadBalancersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest";
  /**
   * ID of the application load balancer to delete.
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
}

export interface DeleteLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata";
  /** ID of the application load balancer that is being deleted. */
  loadBalancerId: string;
}

export interface UpdateLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest";
  /**
   * ID of the application load balancer to update.
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
  /** Field mask that specifies which attributes of the application load balancer should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New name for the application load balancer.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the application load balancer. */
  description: string;
  /**
   * New application load balancer labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [LoadBalancerService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /**
   * New listeners for the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
   *
   * Existing list of listeners is completely replaced by the specified list, so if you just want to add, update,
   * or remove a listener, make a [LoadBalancerService.AddListener] request,
   * a [LoadBalancerService.UpdateListener] request, or a [LoadBalancerService.RemoveListener] request.
   */
  listenerSpecs: ListenerSpec[];
  /**
   * New locality settings of the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
   *
   * Existing locality settings are completely replaced by the specified settings,
   * so if you just want to add or remove an allocation policy:
   * 1. Get the current settings with a [LoadBalancerService.Get] request.
   * 2. Add or remove a policy in this set.
   * 3. Send the new set in this field.
   */
  allocationPolicy?:
    | AllocationPolicy
    | undefined;
  /**
   * ID's of new security groups attributed to the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
   *
   * Existing list of security groups is completely replaced by the specified list,
   * so if you just want to add or remove an allocation policy:
   * 1. Get the current set of security groups with a [LoadBalancerService.Get] request.
   * 2. Add or remove a group in this set.
   * 3. Send the new set in this field.
   */
  securityGroupIds: string[];
  /**
   * New scaling settings of the application load balancer.
   *
   * The scaling settings relate to a special internal instance group which facilitates the balancer's work.
   * Instances in this group are called _resource units_. The group is scaled automatically based on incoming load
   * and within limitations specified in these settings.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lcu-scaling).
   */
  autoScalePolicy?:
    | AutoScalePolicy
    | undefined;
  /** Cloud logging settings of the application load balancer. */
  logOptions?: LogOptions | undefined;
}

export interface UpdateLoadBalancerRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata";
  /** ID of the application load balancer that is being updated. */
  loadBalancerId: string;
}

export interface CreateLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest";
  /**
   * ID of the folder to create an application load balancer in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the application load balancer.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the application load balancer. */
  description: string;
  /**
   * Application load balancer labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /**
   * ID of the region that the application load balancer is located at.
   *
   * The only supported value is `ru-central1`.
   */
  regionId: string;
  /** ID of the network that the application load balancer belongs to. */
  networkId: string;
  /**
   * Listeners that belong to the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
   */
  listenerSpecs: ListenerSpec[];
  /**
   * Locality settings of the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
   */
  allocationPolicy?:
    | AllocationPolicy
    | undefined;
  /**
   * ID's of the security groups attributed to the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
   */
  securityGroupIds: string[];
  /**
   * Scaling settings of the application load balancer.
   *
   * The scaling settings relate to a special internal instance group which facilitates the balancer's work.
   * Instances in this group are called _resource units_. The group is scaled automatically based on incoming load
   * and within limitations specified in these settings.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lcu-scaling).
   */
  autoScalePolicy?:
    | AutoScalePolicy
    | undefined;
  /** Cloud logging settings of the application load balancer. */
  logOptions?: LogOptions | undefined;
}

export interface CreateLoadBalancerRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata";
  /** ID of the application load balancer that is being created. */
  loadBalancerId: string;
}

export interface StartLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest";
  /**
   * ID of the application load balancer to start.
   *
   * The application load balancer must have a `STOPPED` status ([LoadBalancer.status]).
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
}

export interface StartLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata";
  /** ID of the application load balancer that is being started. */
  loadBalancerId: string;
}

export interface StopLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest";
  /**
   * ID of the application load balancer to stop.
   *
   * The application load balancer must have an `ACTIVE` status ([LoadBalancer.status]).
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
}

export interface StopLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata";
  /** ID of the application load balancer that is being stopped. */
  loadBalancerId: string;
}

export interface AddListenerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest";
  /** ID of the application load balancer to add a listener to. */
  loadBalancerId: string;
  /** Listener to add to the application load balancer. */
  listenerSpec?: ListenerSpec | undefined;
}

export interface AddListenerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata";
  /** ID of the application load balancer that the listener is being added to. */
  loadBalancerId: string;
  /** Name of the listener that is being added to the application load balancer. */
  listenerName: string;
}

export interface RemoveListenerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest";
  /** ID of the application load balancer to remove the listener from. */
  loadBalancerId: string;
  /** Name of the listener to remove from the application load balancer. */
  name: string;
}

export interface RemoveListenerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata";
  /** ID of the application load balancer that the listener is being removed from. */
  loadBalancerId: string;
  /** Name of the listener that is being removed from the application load balancer. */
  listenerName: string;
}

export interface UpdateListenerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest";
  /** ID of the application load balancer to update the listener in. */
  loadBalancerId: string;
  /** Field mask that specifies which attributes of the listener should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New attributes of the listener. */
  listenerSpec?: ListenerSpec | undefined;
}

export interface UpdateListenerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata";
  /** ID of the application load balancer that the listener is being updated in. */
  loadBalancerId: string;
  /** Name of the listener that is being updated. */
  listenerName: string;
}

export interface AddressSpec {
  $type: "yandex.cloud.apploadbalancer.v1.AddressSpec";
  /** Public IPv4 endpoint address. */
  externalIpv4AddressSpec?:
    | ExternalIpv4AddressSpec
    | undefined;
  /**
   * Internal IPv4 endpoint address.
   *
   * To enable the use of listeners with internal addresses, [contact support](https://console.cloud.yandex.ru/support).
   */
  internalIpv4AddressSpec?:
    | InternalIpv4AddressSpec
    | undefined;
  /** Public IPv6 endpoint address. */
  externalIpv6AddressSpec?: ExternalIpv6AddressSpec | undefined;
}

export interface ExternalIpv4AddressSpec {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec";
  /** IPv4 address. */
  address: string;
}

export interface InternalIpv4AddressSpec {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec";
  /** IPv4 address. */
  address: string;
  /** ID of the subnet that the address belongs to. */
  subnetId: string;
}

export interface ExternalIpv6AddressSpec {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec";
  /** IPv6 address. */
  address: string;
}

export interface EndpointSpec {
  $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec";
  /** Endpoint public (external) and internal addresses. */
  addressSpecs: AddressSpec[];
  /** Endpoint ports. */
  ports: number[];
}

export interface ListenerSpec {
  $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec";
  /** Name of the listener. The name is unique within the application load balancer. */
  name: string;
  /**
   * Endpoints of the listener.
   *
   * Endpoints are defined by their IP addresses and ports.
   */
  endpointSpecs: EndpointSpec[];
  /** Unencrypted HTTP listener settings. */
  http?:
    | HttpListener
    | undefined;
  /**
   * TLS-encrypted HTTP or TCP stream listener settings.
   *
   * All handlers within a listener ([TlsListener.default_handler] and [TlsListener.sni_handlers]) must be of one
   * type, [HttpHandler] or [StreamHandler]. Mixing HTTP and TCP stream traffic in a TLS-encrypted listener is not
   * supported.
   */
  tls?:
    | TlsListener
    | undefined;
  /** Unencrypted stream (TCP) listener settings. */
  stream?: StreamListener | undefined;
}

export interface GetTargetStatesRequest {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest";
  /** ID of the application load balancer that the backend group is attributed to. */
  loadBalancerId: string;
  /** ID of the backend group that the target group is attributed to. */
  backendGroupId: string;
  /** ID of the target group to get target states of. */
  targetGroupId: string;
}

export interface GetTargetStatesResponse {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse";
  /** Target states of the specified target group. */
  targetStates: TargetState[];
}

export interface AddSniMatchRequest {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest";
  /** ID of the application load balancer to add a SNI handler to. */
  loadBalancerId: string;
  /** Name of the listener to add a SNI handler to. */
  listenerName: string;
  /** Name of the SNI handler to add. */
  name: string;
  /** Server names that are matched by the SNI handler. */
  serverNames: string[];
  /** Settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
  handler?: TlsHandler | undefined;
}

export interface AddSniMatchMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata";
  /** ID of the application load balancer that the SNI handler is being added to. */
  loadBalancerId: string;
  /** Name of the listener that the SNI handler is being added to. */
  listenerName: string;
  /** Name of the SNI handler that is being added to the listener. */
  sniMatchName: string;
}

export interface RemoveSniMatchRequest {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest";
  /** ID of the application load balancer to remove the SNI handler from. */
  loadBalancerId: string;
  /** Name of the listener te remove the SNI handler from. */
  listenerName: string;
  /** Name of the SNI handler to remove. */
  sniMatchName: string;
}

export interface RemoveSniMatchMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata";
  /** ID of the application load balancer that the SNI handler is being removed from. */
  loadBalancerId: string;
  /** Name of the listener that the SNI handler is being removed from. */
  listenerName: string;
  /** Name of the SNI handler that is being removed. */
  sniMatchName: string;
}

export interface UpdateSniMatchRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest";
  /** ID of the application load balancer to update the SNI handler in. */
  loadBalancerId: string;
  /** Name of the listener to update the SNI handler in. */
  listenerName: string;
  /** Name of the SNI handler to update. */
  name: string;
  /** Field mask that specifies which attributes of the SNI handler should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * New server names that are matched by the SNI handler.
   *
   * Existing set of server names is completely replaced by the provided set, so if you just want
   * to add or remove a server name:
   * 1. Get the current set of server names with a [LoadBalancerService.Get] request.
   * 2. Add or remove a server name in this set.
   * 3. Send the new set in this field.
   */
  serverNames: string[];
  /** New settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
  handler?: TlsHandler | undefined;
}

export interface UpdateSniMatchMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata";
  /** ID of the application load balancer that the SNI handler is being updated in. */
  loadBalancerId: string;
  /** Name of the listener that the SNI handler is being updated in. */
  listenerName: string;
  /** Name of the SNI handler that is being updated. */
  sniMatchName: string;
}

export interface ListLoadBalancerOperationsRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest";
  /**
   * ID of the application load balancer to get operations for.
   *
   * To get the application load balancer ID, use a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListLoadBalancerOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListLoadBalancerOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListLoadBalancerOperationsResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse";
  /** List of operations for the specified application load balancer. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListLoadBalancerOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListLoadBalancerOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetLoadBalancerRequest(): GetLoadBalancerRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest", loadBalancerId: "" };
}

export const GetLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest" as const,

  encode(message: GetLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLoadBalancerRequest {
    return {
      $type: GetLoadBalancerRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
    };
  },

  toJSON(message: GetLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLoadBalancerRequest>, I>>(base?: I): GetLoadBalancerRequest {
    return GetLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLoadBalancerRequest>, I>>(object: I): GetLoadBalancerRequest {
    const message = createBaseGetLoadBalancerRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLoadBalancerRequest.$type, GetLoadBalancerRequest);

function createBaseListLoadBalancersRequest(): ListLoadBalancersRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListLoadBalancersRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest" as const,

  encode(message: ListLoadBalancersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLoadBalancersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLoadBalancersRequest();
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

  fromJSON(object: any): ListLoadBalancersRequest {
    return {
      $type: ListLoadBalancersRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListLoadBalancersRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListLoadBalancersRequest>, I>>(base?: I): ListLoadBalancersRequest {
    return ListLoadBalancersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLoadBalancersRequest>, I>>(object: I): ListLoadBalancersRequest {
    const message = createBaseListLoadBalancersRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLoadBalancersRequest.$type, ListLoadBalancersRequest);

function createBaseListLoadBalancersResponse(): ListLoadBalancersResponse {
  return { $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse", loadBalancers: [], nextPageToken: "" };
}

export const ListLoadBalancersResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse" as const,

  encode(message: ListLoadBalancersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.loadBalancers) {
      LoadBalancer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLoadBalancersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLoadBalancersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancers.push(LoadBalancer.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListLoadBalancersResponse {
    return {
      $type: ListLoadBalancersResponse.$type,
      loadBalancers: globalThis.Array.isArray(object?.loadBalancers)
        ? object.loadBalancers.map((e: any) => LoadBalancer.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListLoadBalancersResponse): unknown {
    const obj: any = {};
    if (message.loadBalancers?.length) {
      obj.loadBalancers = message.loadBalancers.map((e) => LoadBalancer.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLoadBalancersResponse>, I>>(base?: I): ListLoadBalancersResponse {
    return ListLoadBalancersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLoadBalancersResponse>, I>>(object: I): ListLoadBalancersResponse {
    const message = createBaseListLoadBalancersResponse();
    message.loadBalancers = object.loadBalancers?.map((e) => LoadBalancer.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLoadBalancersResponse.$type, ListLoadBalancersResponse);

function createBaseDeleteLoadBalancerRequest(): DeleteLoadBalancerRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest", loadBalancerId: "" };
}

export const DeleteLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest" as const,

  encode(message: DeleteLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLoadBalancerRequest {
    return {
      $type: DeleteLoadBalancerRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
    };
  },

  toJSON(message: DeleteLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLoadBalancerRequest>, I>>(base?: I): DeleteLoadBalancerRequest {
    return DeleteLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLoadBalancerRequest>, I>>(object: I): DeleteLoadBalancerRequest {
    const message = createBaseDeleteLoadBalancerRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLoadBalancerRequest.$type, DeleteLoadBalancerRequest);

function createBaseDeleteLoadBalancerMetadata(): DeleteLoadBalancerMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata", loadBalancerId: "" };
}

export const DeleteLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata" as const,

  encode(message: DeleteLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLoadBalancerMetadata {
    return {
      $type: DeleteLoadBalancerMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
    };
  },

  toJSON(message: DeleteLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLoadBalancerMetadata>, I>>(base?: I): DeleteLoadBalancerMetadata {
    return DeleteLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLoadBalancerMetadata>, I>>(object: I): DeleteLoadBalancerMetadata {
    const message = createBaseDeleteLoadBalancerMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLoadBalancerMetadata.$type, DeleteLoadBalancerMetadata);

function createBaseUpdateLoadBalancerRequest(): UpdateLoadBalancerRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest",
    loadBalancerId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    listenerSpecs: [],
    allocationPolicy: undefined,
    securityGroupIds: [],
    autoScalePolicy: undefined,
    logOptions: undefined,
  };
}

export const UpdateLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest" as const,

  encode(message: UpdateLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
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
      UpdateLoadBalancerRequest_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    for (const v of message.listenerSpecs) {
      ListenerSpec.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(message.allocationPolicy, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(66).string(v!);
    }
    if (message.autoScalePolicy !== undefined) {
      AutoScalePolicy.encode(message.autoScalePolicy, writer.uint32(74).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
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

          const entry5 = UpdateLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
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

          message.allocationPolicy = AllocationPolicy.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.autoScalePolicy = AutoScalePolicy.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateLoadBalancerRequest {
    return {
      $type: UpdateLoadBalancerRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
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
      allocationPolicy: isSet(object.allocationPolicy) ? AllocationPolicy.fromJSON(object.allocationPolicy) : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      autoScalePolicy: isSet(object.autoScalePolicy) ? AutoScalePolicy.fromJSON(object.autoScalePolicy) : undefined,
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
    };
  },

  toJSON(message: UpdateLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
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
    if (message.allocationPolicy !== undefined) {
      obj.allocationPolicy = AllocationPolicy.toJSON(message.allocationPolicy);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.autoScalePolicy !== undefined) {
      obj.autoScalePolicy = AutoScalePolicy.toJSON(message.autoScalePolicy);
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateLoadBalancerRequest>, I>>(base?: I): UpdateLoadBalancerRequest {
    return UpdateLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLoadBalancerRequest>, I>>(object: I): UpdateLoadBalancerRequest {
    const message = createBaseUpdateLoadBalancerRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
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
    message.allocationPolicy = (object.allocationPolicy !== undefined && object.allocationPolicy !== null)
      ? AllocationPolicy.fromPartial(object.allocationPolicy)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.autoScalePolicy = (object.autoScalePolicy !== undefined && object.autoScalePolicy !== null)
      ? AutoScalePolicy.fromPartial(object.autoScalePolicy)
      : undefined;
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateLoadBalancerRequest.$type, UpdateLoadBalancerRequest);

function createBaseUpdateLoadBalancerRequest_LabelsEntry(): UpdateLoadBalancerRequest_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateLoadBalancerRequest_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry" as const,

  encode(message: UpdateLoadBalancerRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLoadBalancerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLoadBalancerRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateLoadBalancerRequest_LabelsEntry {
    return {
      $type: UpdateLoadBalancerRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateLoadBalancerRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateLoadBalancerRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateLoadBalancerRequest_LabelsEntry {
    return UpdateLoadBalancerRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLoadBalancerRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateLoadBalancerRequest_LabelsEntry {
    const message = createBaseUpdateLoadBalancerRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateLoadBalancerRequest_LabelsEntry.$type, UpdateLoadBalancerRequest_LabelsEntry);

function createBaseUpdateLoadBalancerMetadata(): UpdateLoadBalancerMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata", loadBalancerId: "" };
}

export const UpdateLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata" as const,

  encode(message: UpdateLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateLoadBalancerMetadata {
    return {
      $type: UpdateLoadBalancerMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
    };
  },

  toJSON(message: UpdateLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateLoadBalancerMetadata>, I>>(base?: I): UpdateLoadBalancerMetadata {
    return UpdateLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLoadBalancerMetadata>, I>>(object: I): UpdateLoadBalancerMetadata {
    const message = createBaseUpdateLoadBalancerMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateLoadBalancerMetadata.$type, UpdateLoadBalancerMetadata);

function createBaseCreateLoadBalancerRequest(): CreateLoadBalancerRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    regionId: "",
    networkId: "",
    listenerSpecs: [],
    allocationPolicy: undefined,
    securityGroupIds: [],
    autoScalePolicy: undefined,
    logOptions: undefined,
  };
}

export const CreateLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest" as const,

  encode(message: CreateLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateLoadBalancerRequest_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.regionId !== "") {
      writer.uint32(42).string(message.regionId);
    }
    if (message.networkId !== "") {
      writer.uint32(50).string(message.networkId);
    }
    for (const v of message.listenerSpecs) {
      ListenerSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(message.allocationPolicy, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(74).string(v!);
    }
    if (message.autoScalePolicy !== undefined) {
      AutoScalePolicy.encode(message.autoScalePolicy, writer.uint32(82).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLoadBalancerRequest();
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

          const entry4 = CreateLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
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
          if (tag !== 50) {
            break;
          }

          message.networkId = reader.string();
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

          message.allocationPolicy = AllocationPolicy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.autoScalePolicy = AutoScalePolicy.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLoadBalancerRequest {
    return {
      $type: CreateLoadBalancerRequest.$type,
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
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      listenerSpecs: globalThis.Array.isArray(object?.listenerSpecs)
        ? object.listenerSpecs.map((e: any) => ListenerSpec.fromJSON(e))
        : [],
      allocationPolicy: isSet(object.allocationPolicy) ? AllocationPolicy.fromJSON(object.allocationPolicy) : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      autoScalePolicy: isSet(object.autoScalePolicy) ? AutoScalePolicy.fromJSON(object.autoScalePolicy) : undefined,
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
    };
  },

  toJSON(message: CreateLoadBalancerRequest): unknown {
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
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.listenerSpecs?.length) {
      obj.listenerSpecs = message.listenerSpecs.map((e) => ListenerSpec.toJSON(e));
    }
    if (message.allocationPolicy !== undefined) {
      obj.allocationPolicy = AllocationPolicy.toJSON(message.allocationPolicy);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.autoScalePolicy !== undefined) {
      obj.autoScalePolicy = AutoScalePolicy.toJSON(message.autoScalePolicy);
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLoadBalancerRequest>, I>>(base?: I): CreateLoadBalancerRequest {
    return CreateLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLoadBalancerRequest>, I>>(object: I): CreateLoadBalancerRequest {
    const message = createBaseCreateLoadBalancerRequest();
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
    message.networkId = object.networkId ?? "";
    message.listenerSpecs = object.listenerSpecs?.map((e) => ListenerSpec.fromPartial(e)) || [];
    message.allocationPolicy = (object.allocationPolicy !== undefined && object.allocationPolicy !== null)
      ? AllocationPolicy.fromPartial(object.allocationPolicy)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.autoScalePolicy = (object.autoScalePolicy !== undefined && object.autoScalePolicy !== null)
      ? AutoScalePolicy.fromPartial(object.autoScalePolicy)
      : undefined;
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateLoadBalancerRequest.$type, CreateLoadBalancerRequest);

function createBaseCreateLoadBalancerRequest_LabelsEntry(): CreateLoadBalancerRequest_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry", key: "", value: "" };
}

export const CreateLoadBalancerRequest_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry" as const,

  encode(message: CreateLoadBalancerRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLoadBalancerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLoadBalancerRequest_LabelsEntry();
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

  fromJSON(object: any): CreateLoadBalancerRequest_LabelsEntry {
    return {
      $type: CreateLoadBalancerRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateLoadBalancerRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLoadBalancerRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateLoadBalancerRequest_LabelsEntry {
    return CreateLoadBalancerRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLoadBalancerRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateLoadBalancerRequest_LabelsEntry {
    const message = createBaseCreateLoadBalancerRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLoadBalancerRequest_LabelsEntry.$type, CreateLoadBalancerRequest_LabelsEntry);

function createBaseCreateLoadBalancerMetadata(): CreateLoadBalancerMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata", loadBalancerId: "" };
}

export const CreateLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata" as const,

  encode(message: CreateLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLoadBalancerMetadata {
    return {
      $type: CreateLoadBalancerMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
    };
  },

  toJSON(message: CreateLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLoadBalancerMetadata>, I>>(base?: I): CreateLoadBalancerMetadata {
    return CreateLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLoadBalancerMetadata>, I>>(object: I): CreateLoadBalancerMetadata {
    const message = createBaseCreateLoadBalancerMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLoadBalancerMetadata.$type, CreateLoadBalancerMetadata);

function createBaseStartLoadBalancerRequest(): StartLoadBalancerRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest", loadBalancerId: "" };
}

export const StartLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest" as const,

  encode(message: StartLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartLoadBalancerRequest {
    return {
      $type: StartLoadBalancerRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
    };
  },

  toJSON(message: StartLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartLoadBalancerRequest>, I>>(base?: I): StartLoadBalancerRequest {
    return StartLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartLoadBalancerRequest>, I>>(object: I): StartLoadBalancerRequest {
    const message = createBaseStartLoadBalancerRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartLoadBalancerRequest.$type, StartLoadBalancerRequest);

function createBaseStartLoadBalancerMetadata(): StartLoadBalancerMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata", loadBalancerId: "" };
}

export const StartLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata" as const,

  encode(message: StartLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartLoadBalancerMetadata {
    return {
      $type: StartLoadBalancerMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
    };
  },

  toJSON(message: StartLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartLoadBalancerMetadata>, I>>(base?: I): StartLoadBalancerMetadata {
    return StartLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartLoadBalancerMetadata>, I>>(object: I): StartLoadBalancerMetadata {
    const message = createBaseStartLoadBalancerMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartLoadBalancerMetadata.$type, StartLoadBalancerMetadata);

function createBaseStopLoadBalancerRequest(): StopLoadBalancerRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest", loadBalancerId: "" };
}

export const StopLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest" as const,

  encode(message: StopLoadBalancerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopLoadBalancerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopLoadBalancerRequest {
    return {
      $type: StopLoadBalancerRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
    };
  },

  toJSON(message: StopLoadBalancerRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopLoadBalancerRequest>, I>>(base?: I): StopLoadBalancerRequest {
    return StopLoadBalancerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopLoadBalancerRequest>, I>>(object: I): StopLoadBalancerRequest {
    const message = createBaseStopLoadBalancerRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopLoadBalancerRequest.$type, StopLoadBalancerRequest);

function createBaseStopLoadBalancerMetadata(): StopLoadBalancerMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata", loadBalancerId: "" };
}

export const StopLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata" as const,

  encode(message: StopLoadBalancerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopLoadBalancerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopLoadBalancerMetadata {
    return {
      $type: StopLoadBalancerMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
    };
  },

  toJSON(message: StopLoadBalancerMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopLoadBalancerMetadata>, I>>(base?: I): StopLoadBalancerMetadata {
    return StopLoadBalancerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopLoadBalancerMetadata>, I>>(object: I): StopLoadBalancerMetadata {
    const message = createBaseStopLoadBalancerMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopLoadBalancerMetadata.$type, StopLoadBalancerMetadata);

function createBaseAddListenerRequest(): AddListenerRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest", loadBalancerId: "", listenerSpec: undefined };
}

export const AddListenerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest" as const,

  encode(message: AddListenerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerSpec !== undefined) {
      ListenerSpec.encode(message.listenerSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddListenerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddListenerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
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

  fromJSON(object: any): AddListenerRequest {
    return {
      $type: AddListenerRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerSpec: isSet(object.listenerSpec) ? ListenerSpec.fromJSON(object.listenerSpec) : undefined,
    };
  },

  toJSON(message: AddListenerRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerSpec !== undefined) {
      obj.listenerSpec = ListenerSpec.toJSON(message.listenerSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddListenerRequest>, I>>(base?: I): AddListenerRequest {
    return AddListenerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddListenerRequest>, I>>(object: I): AddListenerRequest {
    const message = createBaseAddListenerRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerSpec = (object.listenerSpec !== undefined && object.listenerSpec !== null)
      ? ListenerSpec.fromPartial(object.listenerSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddListenerRequest.$type, AddListenerRequest);

function createBaseAddListenerMetadata(): AddListenerMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata", loadBalancerId: "", listenerName: "" };
}

export const AddListenerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata" as const,

  encode(message: AddListenerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddListenerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
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

  fromJSON(object: any): AddListenerMetadata {
    return {
      $type: AddListenerMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
    };
  },

  toJSON(message: AddListenerMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddListenerMetadata>, I>>(base?: I): AddListenerMetadata {
    return AddListenerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddListenerMetadata>, I>>(object: I): AddListenerMetadata {
    const message = createBaseAddListenerMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddListenerMetadata.$type, AddListenerMetadata);

function createBaseRemoveListenerRequest(): RemoveListenerRequest {
  return { $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest", loadBalancerId: "", name: "" };
}

export const RemoveListenerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest" as const,

  encode(message: RemoveListenerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveListenerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveListenerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveListenerRequest {
    return {
      $type: RemoveListenerRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: RemoveListenerRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveListenerRequest>, I>>(base?: I): RemoveListenerRequest {
    return RemoveListenerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveListenerRequest>, I>>(object: I): RemoveListenerRequest {
    const message = createBaseRemoveListenerRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveListenerRequest.$type, RemoveListenerRequest);

function createBaseRemoveListenerMetadata(): RemoveListenerMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata", loadBalancerId: "", listenerName: "" };
}

export const RemoveListenerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata" as const,

  encode(message: RemoveListenerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveListenerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
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

  fromJSON(object: any): RemoveListenerMetadata {
    return {
      $type: RemoveListenerMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
    };
  },

  toJSON(message: RemoveListenerMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveListenerMetadata>, I>>(base?: I): RemoveListenerMetadata {
    return RemoveListenerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveListenerMetadata>, I>>(object: I): RemoveListenerMetadata {
    const message = createBaseRemoveListenerMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveListenerMetadata.$type, RemoveListenerMetadata);

function createBaseUpdateListenerRequest(): UpdateListenerRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest",
    loadBalancerId: "",
    updateMask: undefined,
    listenerSpec: undefined,
  };
}

export const UpdateListenerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest" as const,

  encode(message: UpdateListenerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.listenerSpec !== undefined) {
      ListenerSpec.encode(message.listenerSpec, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateListenerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateListenerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
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

  fromJSON(object: any): UpdateListenerRequest {
    return {
      $type: UpdateListenerRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      listenerSpec: isSet(object.listenerSpec) ? ListenerSpec.fromJSON(object.listenerSpec) : undefined,
    };
  },

  toJSON(message: UpdateListenerRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.listenerSpec !== undefined) {
      obj.listenerSpec = ListenerSpec.toJSON(message.listenerSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateListenerRequest>, I>>(base?: I): UpdateListenerRequest {
    return UpdateListenerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateListenerRequest>, I>>(object: I): UpdateListenerRequest {
    const message = createBaseUpdateListenerRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.listenerSpec = (object.listenerSpec !== undefined && object.listenerSpec !== null)
      ? ListenerSpec.fromPartial(object.listenerSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateListenerRequest.$type, UpdateListenerRequest);

function createBaseUpdateListenerMetadata(): UpdateListenerMetadata {
  return { $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata", loadBalancerId: "", listenerName: "" };
}

export const UpdateListenerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata" as const,

  encode(message: UpdateListenerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateListenerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
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

  fromJSON(object: any): UpdateListenerMetadata {
    return {
      $type: UpdateListenerMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
    };
  },

  toJSON(message: UpdateListenerMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateListenerMetadata>, I>>(base?: I): UpdateListenerMetadata {
    return UpdateListenerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateListenerMetadata>, I>>(object: I): UpdateListenerMetadata {
    const message = createBaseUpdateListenerMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateListenerMetadata.$type, UpdateListenerMetadata);

function createBaseAddressSpec(): AddressSpec {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.AddressSpec",
    externalIpv4AddressSpec: undefined,
    internalIpv4AddressSpec: undefined,
    externalIpv6AddressSpec: undefined,
  };
}

export const AddressSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.AddressSpec" as const,

  encode(message: AddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalIpv4AddressSpec !== undefined) {
      ExternalIpv4AddressSpec.encode(message.externalIpv4AddressSpec, writer.uint32(10).fork()).ldelim();
    }
    if (message.internalIpv4AddressSpec !== undefined) {
      InternalIpv4AddressSpec.encode(message.internalIpv4AddressSpec, writer.uint32(18).fork()).ldelim();
    }
    if (message.externalIpv6AddressSpec !== undefined) {
      ExternalIpv6AddressSpec.encode(message.externalIpv6AddressSpec, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalIpv4AddressSpec = ExternalIpv4AddressSpec.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.internalIpv4AddressSpec = InternalIpv4AddressSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalIpv6AddressSpec = ExternalIpv6AddressSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressSpec {
    return {
      $type: AddressSpec.$type,
      externalIpv4AddressSpec: isSet(object.externalIpv4AddressSpec)
        ? ExternalIpv4AddressSpec.fromJSON(object.externalIpv4AddressSpec)
        : undefined,
      internalIpv4AddressSpec: isSet(object.internalIpv4AddressSpec)
        ? InternalIpv4AddressSpec.fromJSON(object.internalIpv4AddressSpec)
        : undefined,
      externalIpv6AddressSpec: isSet(object.externalIpv6AddressSpec)
        ? ExternalIpv6AddressSpec.fromJSON(object.externalIpv6AddressSpec)
        : undefined,
    };
  },

  toJSON(message: AddressSpec): unknown {
    const obj: any = {};
    if (message.externalIpv4AddressSpec !== undefined) {
      obj.externalIpv4AddressSpec = ExternalIpv4AddressSpec.toJSON(message.externalIpv4AddressSpec);
    }
    if (message.internalIpv4AddressSpec !== undefined) {
      obj.internalIpv4AddressSpec = InternalIpv4AddressSpec.toJSON(message.internalIpv4AddressSpec);
    }
    if (message.externalIpv6AddressSpec !== undefined) {
      obj.externalIpv6AddressSpec = ExternalIpv6AddressSpec.toJSON(message.externalIpv6AddressSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddressSpec>, I>>(base?: I): AddressSpec {
    return AddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddressSpec>, I>>(object: I): AddressSpec {
    const message = createBaseAddressSpec();
    message.externalIpv4AddressSpec =
      (object.externalIpv4AddressSpec !== undefined && object.externalIpv4AddressSpec !== null)
        ? ExternalIpv4AddressSpec.fromPartial(object.externalIpv4AddressSpec)
        : undefined;
    message.internalIpv4AddressSpec =
      (object.internalIpv4AddressSpec !== undefined && object.internalIpv4AddressSpec !== null)
        ? InternalIpv4AddressSpec.fromPartial(object.internalIpv4AddressSpec)
        : undefined;
    message.externalIpv6AddressSpec =
      (object.externalIpv6AddressSpec !== undefined && object.externalIpv6AddressSpec !== null)
        ? ExternalIpv6AddressSpec.fromPartial(object.externalIpv6AddressSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddressSpec.$type, AddressSpec);

function createBaseExternalIpv4AddressSpec(): ExternalIpv4AddressSpec {
  return { $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec", address: "" };
}

export const ExternalIpv4AddressSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec" as const,

  encode(message: ExternalIpv4AddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIpv4AddressSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalIpv4AddressSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalIpv4AddressSpec {
    return {
      $type: ExternalIpv4AddressSpec.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: ExternalIpv4AddressSpec): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalIpv4AddressSpec>, I>>(base?: I): ExternalIpv4AddressSpec {
    return ExternalIpv4AddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalIpv4AddressSpec>, I>>(object: I): ExternalIpv4AddressSpec {
    const message = createBaseExternalIpv4AddressSpec();
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv4AddressSpec.$type, ExternalIpv4AddressSpec);

function createBaseInternalIpv4AddressSpec(): InternalIpv4AddressSpec {
  return { $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec", address: "", subnetId: "" };
}

export const InternalIpv4AddressSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec" as const,

  encode(message: InternalIpv4AddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalIpv4AddressSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalIpv4AddressSpec();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InternalIpv4AddressSpec {
    return {
      $type: InternalIpv4AddressSpec.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: InternalIpv4AddressSpec): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InternalIpv4AddressSpec>, I>>(base?: I): InternalIpv4AddressSpec {
    return InternalIpv4AddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InternalIpv4AddressSpec>, I>>(object: I): InternalIpv4AddressSpec {
    const message = createBaseInternalIpv4AddressSpec();
    message.address = object.address ?? "";
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InternalIpv4AddressSpec.$type, InternalIpv4AddressSpec);

function createBaseExternalIpv6AddressSpec(): ExternalIpv6AddressSpec {
  return { $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec", address: "" };
}

export const ExternalIpv6AddressSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec" as const,

  encode(message: ExternalIpv6AddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIpv6AddressSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalIpv6AddressSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalIpv6AddressSpec {
    return {
      $type: ExternalIpv6AddressSpec.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: ExternalIpv6AddressSpec): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalIpv6AddressSpec>, I>>(base?: I): ExternalIpv6AddressSpec {
    return ExternalIpv6AddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalIpv6AddressSpec>, I>>(object: I): ExternalIpv6AddressSpec {
    const message = createBaseExternalIpv6AddressSpec();
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv6AddressSpec.$type, ExternalIpv6AddressSpec);

function createBaseEndpointSpec(): EndpointSpec {
  return { $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec", addressSpecs: [], ports: [] };
}

export const EndpointSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec" as const,

  encode(message: EndpointSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addressSpecs) {
      AddressSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.ports) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpointSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressSpecs.push(AddressSpec.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag === 16) {
            message.ports.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ports.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EndpointSpec {
    return {
      $type: EndpointSpec.$type,
      addressSpecs: globalThis.Array.isArray(object?.addressSpecs)
        ? object.addressSpecs.map((e: any) => AddressSpec.fromJSON(e))
        : [],
      ports: globalThis.Array.isArray(object?.ports) ? object.ports.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: EndpointSpec): unknown {
    const obj: any = {};
    if (message.addressSpecs?.length) {
      obj.addressSpecs = message.addressSpecs.map((e) => AddressSpec.toJSON(e));
    }
    if (message.ports?.length) {
      obj.ports = message.ports.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EndpointSpec>, I>>(base?: I): EndpointSpec {
    return EndpointSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EndpointSpec>, I>>(object: I): EndpointSpec {
    const message = createBaseEndpointSpec();
    message.addressSpecs = object.addressSpecs?.map((e) => AddressSpec.fromPartial(e)) || [];
    message.ports = object.ports?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(EndpointSpec.$type, EndpointSpec);

function createBaseListenerSpec(): ListenerSpec {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec",
    name: "",
    endpointSpecs: [],
    http: undefined,
    tls: undefined,
    stream: undefined,
  };
}

export const ListenerSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec" as const,

  encode(message: ListenerSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.endpointSpecs) {
      EndpointSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.http !== undefined) {
      HttpListener.encode(message.http, writer.uint32(26).fork()).ldelim();
    }
    if (message.tls !== undefined) {
      TlsListener.encode(message.tls, writer.uint32(34).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamListener.encode(message.stream, writer.uint32(42).fork()).ldelim();
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
          if (tag !== 18) {
            break;
          }

          message.endpointSpecs.push(EndpointSpec.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.http = HttpListener.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tls = TlsListener.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stream = StreamListener.decode(reader, reader.uint32());
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
      endpointSpecs: globalThis.Array.isArray(object?.endpointSpecs)
        ? object.endpointSpecs.map((e: any) => EndpointSpec.fromJSON(e))
        : [],
      http: isSet(object.http) ? HttpListener.fromJSON(object.http) : undefined,
      tls: isSet(object.tls) ? TlsListener.fromJSON(object.tls) : undefined,
      stream: isSet(object.stream) ? StreamListener.fromJSON(object.stream) : undefined,
    };
  },

  toJSON(message: ListenerSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.endpointSpecs?.length) {
      obj.endpointSpecs = message.endpointSpecs.map((e) => EndpointSpec.toJSON(e));
    }
    if (message.http !== undefined) {
      obj.http = HttpListener.toJSON(message.http);
    }
    if (message.tls !== undefined) {
      obj.tls = TlsListener.toJSON(message.tls);
    }
    if (message.stream !== undefined) {
      obj.stream = StreamListener.toJSON(message.stream);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListenerSpec>, I>>(base?: I): ListenerSpec {
    return ListenerSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListenerSpec>, I>>(object: I): ListenerSpec {
    const message = createBaseListenerSpec();
    message.name = object.name ?? "";
    message.endpointSpecs = object.endpointSpecs?.map((e) => EndpointSpec.fromPartial(e)) || [];
    message.http = (object.http !== undefined && object.http !== null)
      ? HttpListener.fromPartial(object.http)
      : undefined;
    message.tls = (object.tls !== undefined && object.tls !== null) ? TlsListener.fromPartial(object.tls) : undefined;
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? StreamListener.fromPartial(object.stream)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ListenerSpec.$type, ListenerSpec);

function createBaseGetTargetStatesRequest(): GetTargetStatesRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest",
    loadBalancerId: "",
    backendGroupId: "",
    targetGroupId: "",
  };
}

export const GetTargetStatesRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest" as const,

  encode(message: GetTargetStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.backendGroupId !== "") {
      writer.uint32(18).string(message.backendGroupId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(26).string(message.targetGroupId);
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

          message.loadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      targetGroupId: isSet(object.targetGroupId) ? globalThis.String(object.targetGroupId) : "",
    };
  },

  toJSON(message: GetTargetStatesRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
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
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.backendGroupId = object.backendGroupId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTargetStatesRequest.$type, GetTargetStatesRequest);

function createBaseGetTargetStatesResponse(): GetTargetStatesResponse {
  return { $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse", targetStates: [] };
}

export const GetTargetStatesResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse" as const,

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

function createBaseAddSniMatchRequest(): AddSniMatchRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest",
    loadBalancerId: "",
    listenerName: "",
    name: "",
    serverNames: [],
    handler: undefined,
  };
}

export const AddSniMatchRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest" as const,

  encode(message: AddSniMatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.serverNames) {
      writer.uint32(34).string(v!);
    }
    if (message.handler !== undefined) {
      TlsHandler.encode(message.handler, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSniMatchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSniMatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listenerName = reader.string();
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

          message.serverNames.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.handler = TlsHandler.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddSniMatchRequest {
    return {
      $type: AddSniMatchRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      serverNames: globalThis.Array.isArray(object?.serverNames)
        ? object.serverNames.map((e: any) => globalThis.String(e))
        : [],
      handler: isSet(object.handler) ? TlsHandler.fromJSON(object.handler) : undefined,
    };
  },

  toJSON(message: AddSniMatchRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.serverNames?.length) {
      obj.serverNames = message.serverNames;
    }
    if (message.handler !== undefined) {
      obj.handler = TlsHandler.toJSON(message.handler);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddSniMatchRequest>, I>>(base?: I): AddSniMatchRequest {
    return AddSniMatchRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddSniMatchRequest>, I>>(object: I): AddSniMatchRequest {
    const message = createBaseAddSniMatchRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.name = object.name ?? "";
    message.serverNames = object.serverNames?.map((e) => e) || [];
    message.handler = (object.handler !== undefined && object.handler !== null)
      ? TlsHandler.fromPartial(object.handler)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddSniMatchRequest.$type, AddSniMatchRequest);

function createBaseAddSniMatchMetadata(): AddSniMatchMetadata {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata",
    loadBalancerId: "",
    listenerName: "",
    sniMatchName: "",
  };
}

export const AddSniMatchMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata" as const,

  encode(message: AddSniMatchMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.sniMatchName !== "") {
      writer.uint32(26).string(message.sniMatchName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSniMatchMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSniMatchMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listenerName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sniMatchName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddSniMatchMetadata {
    return {
      $type: AddSniMatchMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
      sniMatchName: isSet(object.sniMatchName) ? globalThis.String(object.sniMatchName) : "",
    };
  },

  toJSON(message: AddSniMatchMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    if (message.sniMatchName !== "") {
      obj.sniMatchName = message.sniMatchName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddSniMatchMetadata>, I>>(base?: I): AddSniMatchMetadata {
    return AddSniMatchMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddSniMatchMetadata>, I>>(object: I): AddSniMatchMetadata {
    const message = createBaseAddSniMatchMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.sniMatchName = object.sniMatchName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddSniMatchMetadata.$type, AddSniMatchMetadata);

function createBaseRemoveSniMatchRequest(): RemoveSniMatchRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest",
    loadBalancerId: "",
    listenerName: "",
    sniMatchName: "",
  };
}

export const RemoveSniMatchRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest" as const,

  encode(message: RemoveSniMatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.sniMatchName !== "") {
      writer.uint32(26).string(message.sniMatchName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSniMatchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSniMatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listenerName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sniMatchName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveSniMatchRequest {
    return {
      $type: RemoveSniMatchRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
      sniMatchName: isSet(object.sniMatchName) ? globalThis.String(object.sniMatchName) : "",
    };
  },

  toJSON(message: RemoveSniMatchRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    if (message.sniMatchName !== "") {
      obj.sniMatchName = message.sniMatchName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveSniMatchRequest>, I>>(base?: I): RemoveSniMatchRequest {
    return RemoveSniMatchRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveSniMatchRequest>, I>>(object: I): RemoveSniMatchRequest {
    const message = createBaseRemoveSniMatchRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.sniMatchName = object.sniMatchName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveSniMatchRequest.$type, RemoveSniMatchRequest);

function createBaseRemoveSniMatchMetadata(): RemoveSniMatchMetadata {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata",
    loadBalancerId: "",
    listenerName: "",
    sniMatchName: "",
  };
}

export const RemoveSniMatchMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata" as const,

  encode(message: RemoveSniMatchMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.sniMatchName !== "") {
      writer.uint32(26).string(message.sniMatchName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSniMatchMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSniMatchMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listenerName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sniMatchName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveSniMatchMetadata {
    return {
      $type: RemoveSniMatchMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
      sniMatchName: isSet(object.sniMatchName) ? globalThis.String(object.sniMatchName) : "",
    };
  },

  toJSON(message: RemoveSniMatchMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    if (message.sniMatchName !== "") {
      obj.sniMatchName = message.sniMatchName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveSniMatchMetadata>, I>>(base?: I): RemoveSniMatchMetadata {
    return RemoveSniMatchMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveSniMatchMetadata>, I>>(object: I): RemoveSniMatchMetadata {
    const message = createBaseRemoveSniMatchMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.sniMatchName = object.sniMatchName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveSniMatchMetadata.$type, RemoveSniMatchMetadata);

function createBaseUpdateSniMatchRequest(): UpdateSniMatchRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest",
    loadBalancerId: "",
    listenerName: "",
    name: "",
    updateMask: undefined,
    serverNames: [],
    handler: undefined,
  };
}

export const UpdateSniMatchRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest" as const,

  encode(message: UpdateSniMatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.serverNames) {
      writer.uint32(42).string(v!);
    }
    if (message.handler !== undefined) {
      TlsHandler.encode(message.handler, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSniMatchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSniMatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listenerName = reader.string();
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

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.serverNames.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.handler = TlsHandler.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSniMatchRequest {
    return {
      $type: UpdateSniMatchRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      serverNames: globalThis.Array.isArray(object?.serverNames)
        ? object.serverNames.map((e: any) => globalThis.String(e))
        : [],
      handler: isSet(object.handler) ? TlsHandler.fromJSON(object.handler) : undefined,
    };
  },

  toJSON(message: UpdateSniMatchRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.serverNames?.length) {
      obj.serverNames = message.serverNames;
    }
    if (message.handler !== undefined) {
      obj.handler = TlsHandler.toJSON(message.handler);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSniMatchRequest>, I>>(base?: I): UpdateSniMatchRequest {
    return UpdateSniMatchRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSniMatchRequest>, I>>(object: I): UpdateSniMatchRequest {
    const message = createBaseUpdateSniMatchRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.name = object.name ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.serverNames = object.serverNames?.map((e) => e) || [];
    message.handler = (object.handler !== undefined && object.handler !== null)
      ? TlsHandler.fromPartial(object.handler)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateSniMatchRequest.$type, UpdateSniMatchRequest);

function createBaseUpdateSniMatchMetadata(): UpdateSniMatchMetadata {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata",
    loadBalancerId: "",
    listenerName: "",
    sniMatchName: "",
  };
}

export const UpdateSniMatchMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata" as const,

  encode(message: UpdateSniMatchMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.sniMatchName !== "") {
      writer.uint32(26).string(message.sniMatchName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSniMatchMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSniMatchMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listenerName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sniMatchName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSniMatchMetadata {
    return {
      $type: UpdateSniMatchMetadata.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      listenerName: isSet(object.listenerName) ? globalThis.String(object.listenerName) : "",
      sniMatchName: isSet(object.sniMatchName) ? globalThis.String(object.sniMatchName) : "",
    };
  },

  toJSON(message: UpdateSniMatchMetadata): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.listenerName !== "") {
      obj.listenerName = message.listenerName;
    }
    if (message.sniMatchName !== "") {
      obj.sniMatchName = message.sniMatchName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSniMatchMetadata>, I>>(base?: I): UpdateSniMatchMetadata {
    return UpdateSniMatchMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSniMatchMetadata>, I>>(object: I): UpdateSniMatchMetadata {
    const message = createBaseUpdateSniMatchMetadata();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.sniMatchName = object.sniMatchName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSniMatchMetadata.$type, UpdateSniMatchMetadata);

function createBaseListLoadBalancerOperationsRequest(): ListLoadBalancerOperationsRequest {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest",
    loadBalancerId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListLoadBalancerOperationsRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest" as const,

  encode(message: ListLoadBalancerOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLoadBalancerOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLoadBalancerOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loadBalancerId = reader.string();
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

  fromJSON(object: any): ListLoadBalancerOperationsRequest {
    return {
      $type: ListLoadBalancerOperationsRequest.$type,
      loadBalancerId: isSet(object.loadBalancerId) ? globalThis.String(object.loadBalancerId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListLoadBalancerOperationsRequest): unknown {
    const obj: any = {};
    if (message.loadBalancerId !== "") {
      obj.loadBalancerId = message.loadBalancerId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLoadBalancerOperationsRequest>, I>>(
    base?: I,
  ): ListLoadBalancerOperationsRequest {
    return ListLoadBalancerOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLoadBalancerOperationsRequest>, I>>(
    object: I,
  ): ListLoadBalancerOperationsRequest {
    const message = createBaseListLoadBalancerOperationsRequest();
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLoadBalancerOperationsRequest.$type, ListLoadBalancerOperationsRequest);

function createBaseListLoadBalancerOperationsResponse(): ListLoadBalancerOperationsResponse {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListLoadBalancerOperationsResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse" as const,

  encode(message: ListLoadBalancerOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLoadBalancerOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLoadBalancerOperationsResponse();
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

  fromJSON(object: any): ListLoadBalancerOperationsResponse {
    return {
      $type: ListLoadBalancerOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListLoadBalancerOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLoadBalancerOperationsResponse>, I>>(
    base?: I,
  ): ListLoadBalancerOperationsResponse {
    return ListLoadBalancerOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLoadBalancerOperationsResponse>, I>>(
    object: I,
  ): ListLoadBalancerOperationsResponse {
    const message = createBaseListLoadBalancerOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLoadBalancerOperationsResponse.$type, ListLoadBalancerOperationsResponse);

/** A set of methods for managing application load balancers. */
export type LoadBalancerServiceService = typeof LoadBalancerServiceService;
export const LoadBalancerServiceService = {
  /**
   * Returns the specified application load balancer.
   *
   * To get the list of all available application load balancers, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLoadBalancerRequest) => Buffer.from(GetLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLoadBalancerRequest.decode(value),
    responseSerialize: (value: LoadBalancer) => Buffer.from(LoadBalancer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LoadBalancer.decode(value),
  },
  /** Lists application load balancers in the specified folder. */
  list: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLoadBalancersRequest) => Buffer.from(ListLoadBalancersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListLoadBalancersRequest.decode(value),
    responseSerialize: (value: ListLoadBalancersResponse) =>
      Buffer.from(ListLoadBalancersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListLoadBalancersResponse.decode(value),
  },
  /** Creates an application load balancer in the specified folder. */
  create: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLoadBalancerRequest) =>
      Buffer.from(CreateLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified application load balancer. */
  update: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateLoadBalancerRequest) =>
      Buffer.from(UpdateLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified application load balancer. */
  delete: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteLoadBalancerRequest) =>
      Buffer.from(DeleteLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified application load balancer. */
  start: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartLoadBalancerRequest) => Buffer.from(StartLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified application load balancer. */
  stop: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopLoadBalancerRequest) => Buffer.from(StopLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds a listener to the specified application load balancer. */
  addListener: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddListenerRequest) => Buffer.from(AddListenerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddListenerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified listener. */
  removeListener: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveListenerRequest) => Buffer.from(RemoveListenerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveListenerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified listener of the specified application load balancer. */
  updateListener: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateListenerRequest) => Buffer.from(UpdateListenerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateListenerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Adds a SNI handler to the specified listener.
   *
   * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  addSniMatch: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddSniMatchRequest) => Buffer.from(AddSniMatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddSniMatchRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified SNI handler of the specified listener.
   *
   * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  updateSniMatch: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSniMatchRequest) => Buffer.from(UpdateSniMatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSniMatchRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified SNI handler.
   *
   * This request does not allow to delete [TlsListener.default_handler].
   */
  removeSniMatch: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveSniMatchRequest) => Buffer.from(RemoveSniMatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveSniMatchRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
  getTargetStates: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTargetStatesRequest) => Buffer.from(GetTargetStatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTargetStatesRequest.decode(value),
    responseSerialize: (value: GetTargetStatesResponse) => Buffer.from(GetTargetStatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetTargetStatesResponse.decode(value),
  },
  /** Lists operations for the specified application load balancer. */
  listOperations: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLoadBalancerOperationsRequest) =>
      Buffer.from(ListLoadBalancerOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListLoadBalancerOperationsRequest.decode(value),
    responseSerialize: (value: ListLoadBalancerOperationsResponse) =>
      Buffer.from(ListLoadBalancerOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListLoadBalancerOperationsResponse.decode(value),
  },
} as const;

export interface LoadBalancerServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified application load balancer.
   *
   * To get the list of all available application load balancers, make a [List] request.
   */
  get: handleUnaryCall<GetLoadBalancerRequest, LoadBalancer>;
  /** Lists application load balancers in the specified folder. */
  list: handleUnaryCall<ListLoadBalancersRequest, ListLoadBalancersResponse>;
  /** Creates an application load balancer in the specified folder. */
  create: handleUnaryCall<CreateLoadBalancerRequest, Operation>;
  /** Updates the specified application load balancer. */
  update: handleUnaryCall<UpdateLoadBalancerRequest, Operation>;
  /** Deletes the specified application load balancer. */
  delete: handleUnaryCall<DeleteLoadBalancerRequest, Operation>;
  /** Starts the specified application load balancer. */
  start: handleUnaryCall<StartLoadBalancerRequest, Operation>;
  /** Stops the specified application load balancer. */
  stop: handleUnaryCall<StopLoadBalancerRequest, Operation>;
  /** Adds a listener to the specified application load balancer. */
  addListener: handleUnaryCall<AddListenerRequest, Operation>;
  /** Deletes the specified listener. */
  removeListener: handleUnaryCall<RemoveListenerRequest, Operation>;
  /** Updates the specified listener of the specified application load balancer. */
  updateListener: handleUnaryCall<UpdateListenerRequest, Operation>;
  /**
   * Adds a SNI handler to the specified listener.
   *
   * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  addSniMatch: handleUnaryCall<AddSniMatchRequest, Operation>;
  /**
   * Updates the specified SNI handler of the specified listener.
   *
   * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  updateSniMatch: handleUnaryCall<UpdateSniMatchRequest, Operation>;
  /**
   * Deletes the specified SNI handler.
   *
   * This request does not allow to delete [TlsListener.default_handler].
   */
  removeSniMatch: handleUnaryCall<RemoveSniMatchRequest, Operation>;
  /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
  getTargetStates: handleUnaryCall<GetTargetStatesRequest, GetTargetStatesResponse>;
  /** Lists operations for the specified application load balancer. */
  listOperations: handleUnaryCall<ListLoadBalancerOperationsRequest, ListLoadBalancerOperationsResponse>;
}

export interface LoadBalancerServiceClient extends Client {
  /**
   * Returns the specified application load balancer.
   *
   * To get the list of all available application load balancers, make a [List] request.
   */
  get(
    request: GetLoadBalancerRequest,
    callback: (error: ServiceError | null, response: LoadBalancer) => void,
  ): ClientUnaryCall;
  get(
    request: GetLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LoadBalancer) => void,
  ): ClientUnaryCall;
  get(
    request: GetLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LoadBalancer) => void,
  ): ClientUnaryCall;
  /** Lists application load balancers in the specified folder. */
  list(
    request: ListLoadBalancersRequest,
    callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLoadBalancersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLoadBalancersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void,
  ): ClientUnaryCall;
  /** Creates an application load balancer in the specified folder. */
  create(
    request: CreateLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified application load balancer. */
  update(
    request: UpdateLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified application load balancer. */
  delete(
    request: DeleteLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Starts the specified application load balancer. */
  start(
    request: StartLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Stops the specified application load balancer. */
  stop(
    request: StopLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Adds a listener to the specified application load balancer. */
  addListener(
    request: AddListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addListener(
    request: AddListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addListener(
    request: AddListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified listener. */
  removeListener(
    request: RemoveListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeListener(
    request: RemoveListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeListener(
    request: RemoveListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified listener of the specified application load balancer. */
  updateListener(
    request: UpdateListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateListener(
    request: UpdateListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateListener(
    request: UpdateListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Adds a SNI handler to the specified listener.
   *
   * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  addSniMatch(
    request: AddSniMatchRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addSniMatch(
    request: AddSniMatchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addSniMatch(
    request: AddSniMatchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified SNI handler of the specified listener.
   *
   * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  updateSniMatch(
    request: UpdateSniMatchRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateSniMatch(
    request: UpdateSniMatchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateSniMatch(
    request: UpdateSniMatchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Deletes the specified SNI handler.
   *
   * This request does not allow to delete [TlsListener.default_handler].
   */
  removeSniMatch(
    request: RemoveSniMatchRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeSniMatch(
    request: RemoveSniMatchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  removeSniMatch(
    request: RemoveSniMatchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
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
  /** Lists operations for the specified application load balancer. */
  listOperations(
    request: ListLoadBalancerOperationsRequest,
    callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListLoadBalancerOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListLoadBalancerOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void,
  ): ClientUnaryCall;
}

export const LoadBalancerServiceClient = makeGenericClientConstructor(
  LoadBalancerServiceService,
  "yandex.cloud.apploadbalancer.v1.LoadBalancerService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LoadBalancerServiceClient;
  service: typeof LoadBalancerServiceService;
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
