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
  Cilium,
  Cluster,
  IPAllocationPolicy,
  KMSProvider,
  MasterLogging,
  MasterMaintenancePolicy,
  NetworkPolicy,
  ReleaseChannel,
  releaseChannelFromJSON,
  releaseChannelToJSON,
} from "./cluster";
import { Node } from "./node";
import { NodeGroup } from "./node_group";
import { UpdateVersionSpec } from "./version";

export const protobufPackage = "yandex.cloud.k8s.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.k8s.v1.GetClusterRequest";
  /** ID of the Kubernetes cluster to return. */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.k8s.v1.ListClustersRequest";
  /**
   * ID of the folder to list Kubernetes cluster in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListClustersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListClustersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListClustersResponse {
  $type: "yandex.cloud.k8s.v1.ListClustersResponse";
  /** List of Kubernetes cluster. */
  clusters: Cluster[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClustersRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListClustersRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.k8s.v1.DeleteClusterRequest";
  /**
   * ID of the Kubernetes cluster to delete.
   * To get Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.k8s.v1.DeleteClusterMetadata";
  /** ID of the Kubernetes cluster that is being deleted. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.k8s.v1.StopClusterRequest";
  /**
   * ID of the Kubernetes cluster to stop.
   * To get Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.k8s.v1.StopClusterMetadata";
  /** ID of the Kubernetes cluster that is being stopped. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.k8s.v1.StartClusterRequest";
  /**
   * ID of the Kubernetes cluster to start.
   * To get Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.k8s.v1.StartClusterMetadata";
  /** ID of the Kubernetes cluster that is being started. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest";
  /**
   * ID of the Kubernetes cluster to update.
   * To get the Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the Kubernetes cluster.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the Kubernetes cluster. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /** Gateway IPv4 address. */
  gatewayIpv4Address?:
    | string
    | undefined;
  /** Specification of the master update. */
  masterSpec?:
    | MasterUpdateSpec
    | undefined;
  /**
   * Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster.
   * Selected service account should have `edit` role on the folder where the Kubernetes cluster will be
   * located and on the folder where selected network resides.
   */
  serviceAccountId: string;
  /**
   * Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry
   * or to push node logs and metrics.
   */
  nodeServiceAccountId: string;
  networkPolicy?: NetworkPolicy | undefined;
  ipAllocationPolicy?: IPAllocationPolicy | undefined;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface MasterUpdateSpec {
  $type: "yandex.cloud.k8s.v1.MasterUpdateSpec";
  /** Specification of the master update. */
  version?:
    | UpdateVersionSpec
    | undefined;
  /** Maintenance policy of the master. */
  maintenancePolicy?:
    | MasterMaintenancePolicy
    | undefined;
  /** Master security groups. */
  securityGroupIds: string[];
  /** Cloud Logging for master components. */
  masterLogging?:
    | MasterLogging
    | undefined;
  /** Update master instance locations. */
  locations: LocationSpec[];
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.k8s.v1.UpdateClusterMetadata";
  /** ID of the Kubernetes cluster that is being updated. */
  clusterId: string;
}

export interface CreateClusterRequest {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest";
  /**
   * ID of the folder to create a Kubernetes cluster in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the Kubernetes cluster.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the Kubernetes cluster. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** ID of the network. */
  networkId: string;
  /** Master specification of the Kubernetes cluster. */
  masterSpec?:
    | MasterSpec
    | undefined;
  /** IP allocation policy of the Kubernetes cluster. */
  ipAllocationPolicy?:
    | IPAllocationPolicy
    | undefined;
  /** Gateway IPv4 address. */
  gatewayIpv4Address?:
    | string
    | undefined;
  /**
   * Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster.
   * Selected service account should have `edit` role on the folder where the Kubernetes cluster will be
   * located and on the folder where selected network resides.
   */
  serviceAccountId: string;
  /** Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry or to push node logs and metrics. */
  nodeServiceAccountId: string;
  /** Release channel for the master. */
  releaseChannel: ReleaseChannel;
  networkPolicy?:
    | NetworkPolicy
    | undefined;
  /** KMS provider configuration. */
  kmsProvider?: KMSProvider | undefined;
  cilium?: Cilium | undefined;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.k8s.v1.CreateClusterMetadata";
  /** ID of the Kubernetes cluster that is being created. */
  clusterId: string;
}

export interface AutoUpgradeMasterMetadata {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata";
  /** ID of the Kubernetes cluster that is being auto upgraded. */
  clusterId: string;
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsRequest";
  /** ID of the Kubernetes cluster to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [Cluster.name] field.
   */
  filter: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsResponse";
  /** List of operations for the specified Kubernetes cluster. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterOperationsRequest.page_size], use the `next_page_token` as the value
   * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterNodeGroupsRequest {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest";
  /**
   * ID of the Kubernetes cluster to list node groups in.
   * To get the Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListClusterNodeGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListClusterNodeGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [Cluster.name] field.
   */
  filter: string;
}

export interface ListClusterNodeGroupsResponse {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse";
  /** List of node groups for the specified Kubernetes cluster. */
  nodeGroups: NodeGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterNodeGroupsRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListClusterNodeGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterNodesRequest {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesRequest";
  /**
   * ID of the Kubernetes cluster to list nodes in.
   * To get the Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListClusterNodesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListClusterNodeGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListClusterNodesResponse {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesResponse";
  /** List of nodes for the specified Kubernetes cluster. */
  nodes: Node[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterNodesRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListClusterNodesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MasterSpec {
  $type: "yandex.cloud.k8s.v1.MasterSpec";
  /** Specification of the zonal master. */
  zonalMasterSpec?:
    | ZonalMasterSpec
    | undefined;
  /** Specification of the regional master. */
  regionalMasterSpec?:
    | RegionalMasterSpec
    | undefined;
  /**
   * Locations specification for Kubernetes control-plane (master) instances.
   * Works in conjunction with [etcd_cluster_size]. See it's documentation for details.
   * Possible combinations:
   * - 1 location and etcd_cluster_size = 1 - a single node cluster whose availability is limited by the availability of a single Compute Instance; downtime is expected during cluster updates.
   * - 1 location and etcd_cluster_size = 3 - a highly available cluster within a single availability zone; can survive the failure of a Compute Instance, a server, or an individual server rack.
   * - 3 location and etcd_cluster_size = 3 - a highly available cluster with each etcd instance located within separate availability zone; can survive the failure of a single availability zone.
   */
  locations: LocationSpec[];
  /**
   * Number of etcd nodes in cluster.
   * Works in conjunction with [locations]. See it's documentation for details.
   * Optional. If not set, will be assumed equal to the number of locations.
   */
  etcdClusterSize: number;
  /** Specification of parameters for external IPv4 networking. */
  externalV4AddressSpec?:
    | ExternalAddressSpec
    | undefined;
  /** Specification of parameters for external IPv6 networking. */
  externalV6AddressSpec?:
    | ExternalAddressSpec
    | undefined;
  /** Version of Kubernetes components that runs on the master. */
  version: string;
  /** Maintenance policy of the master. */
  maintenancePolicy?:
    | MasterMaintenancePolicy
    | undefined;
  /** Master security groups. */
  securityGroupIds: string[];
  /** Cloud Logging for master components. */
  masterLogging?: MasterLogging | undefined;
}

export interface ZonalMasterSpec {
  $type: "yandex.cloud.k8s.v1.ZonalMasterSpec";
  /** ID of the availability zone. */
  zoneId: string;
  /** Specification of parameters for internal IPv4 networking. */
  internalV4AddressSpec?:
    | InternalAddressSpec
    | undefined;
  /** Specification of parameters for external IPv4 networking. */
  externalV4AddressSpec?: ExternalAddressSpec | undefined;
}

export interface RegionalMasterSpec {
  $type: "yandex.cloud.k8s.v1.RegionalMasterSpec";
  /** ID of the availability zone where the master resides. */
  regionId: string;
  /** List of locations where the master will be allocated. */
  locations: MasterLocation[];
  /** Specify to allocate a static public IP for the master. */
  externalV4AddressSpec?:
    | ExternalAddressSpec
    | undefined;
  /** Specification of parameters for external IPv6 networking. */
  externalV6AddressSpec?: ExternalAddressSpec | undefined;
}

export interface InternalAddressSpec {
  $type: "yandex.cloud.k8s.v1.InternalAddressSpec";
  /** ID of the subnet. If no ID is specified, and there only one subnet in specified zone, an address in this subnet will be allocated. */
  subnetId: string;
}

export interface ExternalAddressSpec {
  $type: "yandex.cloud.k8s.v1.ExternalAddressSpec";
  /** IP address. */
  address: string;
}

export interface MasterLocation {
  $type: "yandex.cloud.k8s.v1.MasterLocation";
  /** ID of the availability zone. */
  zoneId: string;
  /**
   * If not specified and there is a single subnet in specified zone, address
   * in this subnet will be allocated.
   */
  internalV4AddressSpec?: InternalAddressSpec | undefined;
}

export interface LocationSpec {
  $type: "yandex.cloud.k8s.v1.LocationSpec";
  /** ID of the availability zone where the master resides. */
  zoneId: string;
  /**
   * ID of the VPC network's subnet where the master resides.
   * If not specified and there is a single subnet in specified zone, address in this subnet will be allocated.
   */
  subnetId: string;
}

function createBaseGetClusterRequest(): GetClusterRequest {
  return { $type: "yandex.cloud.k8s.v1.GetClusterRequest", clusterId: "" };
}

export const GetClusterRequest = {
  $type: "yandex.cloud.k8s.v1.GetClusterRequest" as const,

  encode(message: GetClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetClusterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetClusterRequest {
    return {
      $type: GetClusterRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: GetClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetClusterRequest>, I>>(base?: I): GetClusterRequest {
    return GetClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetClusterRequest>, I>>(object: I): GetClusterRequest {
    const message = createBaseGetClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetClusterRequest.$type, GetClusterRequest);

function createBaseListClustersRequest(): ListClustersRequest {
  return { $type: "yandex.cloud.k8s.v1.ListClustersRequest", folderId: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListClustersRequest = {
  $type: "yandex.cloud.k8s.v1.ListClustersRequest" as const,

  encode(message: ListClustersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClustersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClustersRequest();
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

  fromJSON(object: any): ListClustersRequest {
    return {
      $type: ListClustersRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListClustersRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListClustersRequest>, I>>(base?: I): ListClustersRequest {
    return ListClustersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClustersRequest>, I>>(object: I): ListClustersRequest {
    const message = createBaseListClustersRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClustersRequest.$type, ListClustersRequest);

function createBaseListClustersResponse(): ListClustersResponse {
  return { $type: "yandex.cloud.k8s.v1.ListClustersResponse", clusters: [], nextPageToken: "" };
}

export const ListClustersResponse = {
  $type: "yandex.cloud.k8s.v1.ListClustersResponse" as const,

  encode(message: ListClustersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clusters) {
      Cluster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClustersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClustersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusters.push(Cluster.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClustersResponse {
    return {
      $type: ListClustersResponse.$type,
      clusters: globalThis.Array.isArray(object?.clusters) ? object.clusters.map((e: any) => Cluster.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClustersResponse): unknown {
    const obj: any = {};
    if (message.clusters?.length) {
      obj.clusters = message.clusters.map((e) => Cluster.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListClustersResponse>, I>>(base?: I): ListClustersResponse {
    return ListClustersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClustersResponse>, I>>(object: I): ListClustersResponse {
    const message = createBaseListClustersResponse();
    message.clusters = object.clusters?.map((e) => Cluster.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClustersResponse.$type, ListClustersResponse);

function createBaseDeleteClusterRequest(): DeleteClusterRequest {
  return { $type: "yandex.cloud.k8s.v1.DeleteClusterRequest", clusterId: "" };
}

export const DeleteClusterRequest = {
  $type: "yandex.cloud.k8s.v1.DeleteClusterRequest" as const,

  encode(message: DeleteClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterRequest {
    return {
      $type: DeleteClusterRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: DeleteClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteClusterRequest>, I>>(base?: I): DeleteClusterRequest {
    return DeleteClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteClusterRequest>, I>>(object: I): DeleteClusterRequest {
    const message = createBaseDeleteClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterRequest.$type, DeleteClusterRequest);

function createBaseDeleteClusterMetadata(): DeleteClusterMetadata {
  return { $type: "yandex.cloud.k8s.v1.DeleteClusterMetadata", clusterId: "" };
}

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.DeleteClusterMetadata" as const,

  encode(message: DeleteClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterMetadata {
    return {
      $type: DeleteClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: DeleteClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteClusterMetadata>, I>>(base?: I): DeleteClusterMetadata {
    return DeleteClusterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteClusterMetadata>, I>>(object: I): DeleteClusterMetadata {
    const message = createBaseDeleteClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterMetadata.$type, DeleteClusterMetadata);

function createBaseStopClusterRequest(): StopClusterRequest {
  return { $type: "yandex.cloud.k8s.v1.StopClusterRequest", clusterId: "" };
}

export const StopClusterRequest = {
  $type: "yandex.cloud.k8s.v1.StopClusterRequest" as const,

  encode(message: StopClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopClusterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopClusterRequest {
    return {
      $type: StopClusterRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: StopClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopClusterRequest>, I>>(base?: I): StopClusterRequest {
    return StopClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopClusterRequest>, I>>(object: I): StopClusterRequest {
    const message = createBaseStopClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopClusterRequest.$type, StopClusterRequest);

function createBaseStopClusterMetadata(): StopClusterMetadata {
  return { $type: "yandex.cloud.k8s.v1.StopClusterMetadata", clusterId: "" };
}

export const StopClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.StopClusterMetadata" as const,

  encode(message: StopClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopClusterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopClusterMetadata {
    return {
      $type: StopClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: StopClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopClusterMetadata>, I>>(base?: I): StopClusterMetadata {
    return StopClusterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopClusterMetadata>, I>>(object: I): StopClusterMetadata {
    const message = createBaseStopClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopClusterMetadata.$type, StopClusterMetadata);

function createBaseStartClusterRequest(): StartClusterRequest {
  return { $type: "yandex.cloud.k8s.v1.StartClusterRequest", clusterId: "" };
}

export const StartClusterRequest = {
  $type: "yandex.cloud.k8s.v1.StartClusterRequest" as const,

  encode(message: StartClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartClusterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartClusterRequest {
    return {
      $type: StartClusterRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: StartClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartClusterRequest>, I>>(base?: I): StartClusterRequest {
    return StartClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartClusterRequest>, I>>(object: I): StartClusterRequest {
    const message = createBaseStartClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterRequest.$type, StartClusterRequest);

function createBaseStartClusterMetadata(): StartClusterMetadata {
  return { $type: "yandex.cloud.k8s.v1.StartClusterMetadata", clusterId: "" };
}

export const StartClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.StartClusterMetadata" as const,

  encode(message: StartClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartClusterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartClusterMetadata {
    return {
      $type: StartClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: StartClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartClusterMetadata>, I>>(base?: I): StartClusterMetadata {
    return StartClusterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartClusterMetadata>, I>>(object: I): StartClusterMetadata {
    const message = createBaseStartClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterMetadata.$type, StartClusterMetadata);

function createBaseUpdateClusterRequest(): UpdateClusterRequest {
  return {
    $type: "yandex.cloud.k8s.v1.UpdateClusterRequest",
    clusterId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    gatewayIpv4Address: undefined,
    masterSpec: undefined,
    serviceAccountId: "",
    nodeServiceAccountId: "",
    networkPolicy: undefined,
    ipAllocationPolicy: undefined,
  };
}

export const UpdateClusterRequest = {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest" as const,

  encode(message: UpdateClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
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
      UpdateClusterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.gatewayIpv4Address !== undefined) {
      writer.uint32(50).string(message.gatewayIpv4Address);
    }
    if (message.masterSpec !== undefined) {
      MasterUpdateSpec.encode(message.masterSpec, writer.uint32(58).fork()).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.nodeServiceAccountId !== "") {
      writer.uint32(66).string(message.nodeServiceAccountId);
    }
    if (message.networkPolicy !== undefined) {
      NetworkPolicy.encode(message.networkPolicy, writer.uint32(82).fork()).ldelim();
    }
    if (message.ipAllocationPolicy !== undefined) {
      IPAllocationPolicy.encode(message.ipAllocationPolicy, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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

          const entry5 = UpdateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.gatewayIpv4Address = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.masterSpec = MasterUpdateSpec.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.nodeServiceAccountId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.networkPolicy = NetworkPolicy.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.ipAllocationPolicy = IPAllocationPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterRequest {
    return {
      $type: UpdateClusterRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      gatewayIpv4Address: isSet(object.gatewayIpv4Address) ? globalThis.String(object.gatewayIpv4Address) : undefined,
      masterSpec: isSet(object.masterSpec) ? MasterUpdateSpec.fromJSON(object.masterSpec) : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      nodeServiceAccountId: isSet(object.nodeServiceAccountId) ? globalThis.String(object.nodeServiceAccountId) : "",
      networkPolicy: isSet(object.networkPolicy) ? NetworkPolicy.fromJSON(object.networkPolicy) : undefined,
      ipAllocationPolicy: isSet(object.ipAllocationPolicy)
        ? IPAllocationPolicy.fromJSON(object.ipAllocationPolicy)
        : undefined,
    };
  },

  toJSON(message: UpdateClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
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
    if (message.gatewayIpv4Address !== undefined) {
      obj.gatewayIpv4Address = message.gatewayIpv4Address;
    }
    if (message.masterSpec !== undefined) {
      obj.masterSpec = MasterUpdateSpec.toJSON(message.masterSpec);
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.nodeServiceAccountId !== "") {
      obj.nodeServiceAccountId = message.nodeServiceAccountId;
    }
    if (message.networkPolicy !== undefined) {
      obj.networkPolicy = NetworkPolicy.toJSON(message.networkPolicy);
    }
    if (message.ipAllocationPolicy !== undefined) {
      obj.ipAllocationPolicy = IPAllocationPolicy.toJSON(message.ipAllocationPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateClusterRequest>, I>>(base?: I): UpdateClusterRequest {
    return UpdateClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest>, I>>(object: I): UpdateClusterRequest {
    const message = createBaseUpdateClusterRequest();
    message.clusterId = object.clusterId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.gatewayIpv4Address = object.gatewayIpv4Address ?? undefined;
    message.masterSpec = (object.masterSpec !== undefined && object.masterSpec !== null)
      ? MasterUpdateSpec.fromPartial(object.masterSpec)
      : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.nodeServiceAccountId = object.nodeServiceAccountId ?? "";
    message.networkPolicy = (object.networkPolicy !== undefined && object.networkPolicy !== null)
      ? NetworkPolicy.fromPartial(object.networkPolicy)
      : undefined;
    message.ipAllocationPolicy = (object.ipAllocationPolicy !== undefined && object.ipAllocationPolicy !== null)
      ? IPAllocationPolicy.fromPartial(object.ipAllocationPolicy)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

function createBaseUpdateClusterRequest_LabelsEntry(): UpdateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry" as const,

  encode(message: UpdateClusterRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateClusterRequest_LabelsEntry {
    return {
      $type: UpdateClusterRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateClusterRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateClusterRequest_LabelsEntry {
    return UpdateClusterRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateClusterRequest_LabelsEntry {
    const message = createBaseUpdateClusterRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest_LabelsEntry.$type, UpdateClusterRequest_LabelsEntry);

function createBaseMasterUpdateSpec(): MasterUpdateSpec {
  return {
    $type: "yandex.cloud.k8s.v1.MasterUpdateSpec",
    version: undefined,
    maintenancePolicy: undefined,
    securityGroupIds: [],
    masterLogging: undefined,
    locations: [],
  };
}

export const MasterUpdateSpec = {
  $type: "yandex.cloud.k8s.v1.MasterUpdateSpec" as const,

  encode(message: MasterUpdateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      UpdateVersionSpec.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.maintenancePolicy !== undefined) {
      MasterMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(26).string(v!);
    }
    if (message.masterLogging !== undefined) {
      MasterLogging.encode(message.masterLogging, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.locations) {
      LocationSpec.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterUpdateSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = UpdateVersionSpec.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maintenancePolicy = MasterMaintenancePolicy.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.masterLogging = MasterLogging.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.locations.push(LocationSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MasterUpdateSpec {
    return {
      $type: MasterUpdateSpec.$type,
      version: isSet(object.version) ? UpdateVersionSpec.fromJSON(object.version) : undefined,
      maintenancePolicy: isSet(object.maintenancePolicy)
        ? MasterMaintenancePolicy.fromJSON(object.maintenancePolicy)
        : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      masterLogging: isSet(object.masterLogging) ? MasterLogging.fromJSON(object.masterLogging) : undefined,
      locations: globalThis.Array.isArray(object?.locations)
        ? object.locations.map((e: any) => LocationSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MasterUpdateSpec): unknown {
    const obj: any = {};
    if (message.version !== undefined) {
      obj.version = UpdateVersionSpec.toJSON(message.version);
    }
    if (message.maintenancePolicy !== undefined) {
      obj.maintenancePolicy = MasterMaintenancePolicy.toJSON(message.maintenancePolicy);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.masterLogging !== undefined) {
      obj.masterLogging = MasterLogging.toJSON(message.masterLogging);
    }
    if (message.locations?.length) {
      obj.locations = message.locations.map((e) => LocationSpec.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterUpdateSpec>, I>>(base?: I): MasterUpdateSpec {
    return MasterUpdateSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterUpdateSpec>, I>>(object: I): MasterUpdateSpec {
    const message = createBaseMasterUpdateSpec();
    message.version = (object.version !== undefined && object.version !== null)
      ? UpdateVersionSpec.fromPartial(object.version)
      : undefined;
    message.maintenancePolicy = (object.maintenancePolicy !== undefined && object.maintenancePolicy !== null)
      ? MasterMaintenancePolicy.fromPartial(object.maintenancePolicy)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.masterLogging = (object.masterLogging !== undefined && object.masterLogging !== null)
      ? MasterLogging.fromPartial(object.masterLogging)
      : undefined;
    message.locations = object.locations?.map((e) => LocationSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MasterUpdateSpec.$type, MasterUpdateSpec);

function createBaseUpdateClusterMetadata(): UpdateClusterMetadata {
  return { $type: "yandex.cloud.k8s.v1.UpdateClusterMetadata", clusterId: "" };
}

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.UpdateClusterMetadata" as const,

  encode(message: UpdateClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterMetadata {
    return {
      $type: UpdateClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: UpdateClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateClusterMetadata>, I>>(base?: I): UpdateClusterMetadata {
    return UpdateClusterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateClusterMetadata>, I>>(object: I): UpdateClusterMetadata {
    const message = createBaseUpdateClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterMetadata.$type, UpdateClusterMetadata);

function createBaseCreateClusterRequest(): CreateClusterRequest {
  return {
    $type: "yandex.cloud.k8s.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    networkId: "",
    masterSpec: undefined,
    ipAllocationPolicy: undefined,
    gatewayIpv4Address: undefined,
    serviceAccountId: "",
    nodeServiceAccountId: "",
    releaseChannel: 0,
    networkPolicy: undefined,
    kmsProvider: undefined,
    cilium: undefined,
  };
}

export const CreateClusterRequest = {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest" as const,

  encode(message: CreateClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateClusterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(42).string(message.networkId);
    }
    if (message.masterSpec !== undefined) {
      MasterSpec.encode(message.masterSpec, writer.uint32(50).fork()).ldelim();
    }
    if (message.ipAllocationPolicy !== undefined) {
      IPAllocationPolicy.encode(message.ipAllocationPolicy, writer.uint32(58).fork()).ldelim();
    }
    if (message.gatewayIpv4Address !== undefined) {
      writer.uint32(66).string(message.gatewayIpv4Address);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.nodeServiceAccountId !== "") {
      writer.uint32(82).string(message.nodeServiceAccountId);
    }
    if (message.releaseChannel !== 0) {
      writer.uint32(88).int32(message.releaseChannel);
    }
    if (message.networkPolicy !== undefined) {
      NetworkPolicy.encode(message.networkPolicy, writer.uint32(98).fork()).ldelim();
    }
    if (message.kmsProvider !== undefined) {
      KMSProvider.encode(message.kmsProvider, writer.uint32(106).fork()).ldelim();
    }
    if (message.cilium !== undefined) {
      Cilium.encode(message.cilium, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClusterRequest();
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

          const entry4 = CreateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.masterSpec = MasterSpec.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ipAllocationPolicy = IPAllocationPolicy.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.gatewayIpv4Address = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.nodeServiceAccountId = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.releaseChannel = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.networkPolicy = NetworkPolicy.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.kmsProvider = KMSProvider.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.cilium = Cilium.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateClusterRequest {
    return {
      $type: CreateClusterRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      masterSpec: isSet(object.masterSpec) ? MasterSpec.fromJSON(object.masterSpec) : undefined,
      ipAllocationPolicy: isSet(object.ipAllocationPolicy)
        ? IPAllocationPolicy.fromJSON(object.ipAllocationPolicy)
        : undefined,
      gatewayIpv4Address: isSet(object.gatewayIpv4Address) ? globalThis.String(object.gatewayIpv4Address) : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      nodeServiceAccountId: isSet(object.nodeServiceAccountId) ? globalThis.String(object.nodeServiceAccountId) : "",
      releaseChannel: isSet(object.releaseChannel) ? releaseChannelFromJSON(object.releaseChannel) : 0,
      networkPolicy: isSet(object.networkPolicy) ? NetworkPolicy.fromJSON(object.networkPolicy) : undefined,
      kmsProvider: isSet(object.kmsProvider) ? KMSProvider.fromJSON(object.kmsProvider) : undefined,
      cilium: isSet(object.cilium) ? Cilium.fromJSON(object.cilium) : undefined,
    };
  },

  toJSON(message: CreateClusterRequest): unknown {
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
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.masterSpec !== undefined) {
      obj.masterSpec = MasterSpec.toJSON(message.masterSpec);
    }
    if (message.ipAllocationPolicy !== undefined) {
      obj.ipAllocationPolicy = IPAllocationPolicy.toJSON(message.ipAllocationPolicy);
    }
    if (message.gatewayIpv4Address !== undefined) {
      obj.gatewayIpv4Address = message.gatewayIpv4Address;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.nodeServiceAccountId !== "") {
      obj.nodeServiceAccountId = message.nodeServiceAccountId;
    }
    if (message.releaseChannel !== 0) {
      obj.releaseChannel = releaseChannelToJSON(message.releaseChannel);
    }
    if (message.networkPolicy !== undefined) {
      obj.networkPolicy = NetworkPolicy.toJSON(message.networkPolicy);
    }
    if (message.kmsProvider !== undefined) {
      obj.kmsProvider = KMSProvider.toJSON(message.kmsProvider);
    }
    if (message.cilium !== undefined) {
      obj.cilium = Cilium.toJSON(message.cilium);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateClusterRequest>, I>>(base?: I): CreateClusterRequest {
    return CreateClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateClusterRequest>, I>>(object: I): CreateClusterRequest {
    const message = createBaseCreateClusterRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.networkId = object.networkId ?? "";
    message.masterSpec = (object.masterSpec !== undefined && object.masterSpec !== null)
      ? MasterSpec.fromPartial(object.masterSpec)
      : undefined;
    message.ipAllocationPolicy = (object.ipAllocationPolicy !== undefined && object.ipAllocationPolicy !== null)
      ? IPAllocationPolicy.fromPartial(object.ipAllocationPolicy)
      : undefined;
    message.gatewayIpv4Address = object.gatewayIpv4Address ?? undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.nodeServiceAccountId = object.nodeServiceAccountId ?? "";
    message.releaseChannel = object.releaseChannel ?? 0;
    message.networkPolicy = (object.networkPolicy !== undefined && object.networkPolicy !== null)
      ? NetworkPolicy.fromPartial(object.networkPolicy)
      : undefined;
    message.kmsProvider = (object.kmsProvider !== undefined && object.kmsProvider !== null)
      ? KMSProvider.fromPartial(object.kmsProvider)
      : undefined;
    message.cilium = (object.cilium !== undefined && object.cilium !== null)
      ? Cilium.fromPartial(object.cilium)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

function createBaseCreateClusterRequest_LabelsEntry(): CreateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry" as const,

  encode(message: CreateClusterRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClusterRequest_LabelsEntry();
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

  fromJSON(object: any): CreateClusterRequest_LabelsEntry {
    return {
      $type: CreateClusterRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateClusterRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateClusterRequest_LabelsEntry {
    return CreateClusterRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateClusterRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateClusterRequest_LabelsEntry {
    const message = createBaseCreateClusterRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest_LabelsEntry.$type, CreateClusterRequest_LabelsEntry);

function createBaseCreateClusterMetadata(): CreateClusterMetadata {
  return { $type: "yandex.cloud.k8s.v1.CreateClusterMetadata", clusterId: "" };
}

export const CreateClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.CreateClusterMetadata" as const,

  encode(message: CreateClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClusterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateClusterMetadata {
    return {
      $type: CreateClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: CreateClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateClusterMetadata>, I>>(base?: I): CreateClusterMetadata {
    return CreateClusterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateClusterMetadata>, I>>(object: I): CreateClusterMetadata {
    const message = createBaseCreateClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateClusterMetadata.$type, CreateClusterMetadata);

function createBaseAutoUpgradeMasterMetadata(): AutoUpgradeMasterMetadata {
  return { $type: "yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata", clusterId: "" };
}

export const AutoUpgradeMasterMetadata = {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata" as const,

  encode(message: AutoUpgradeMasterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AutoUpgradeMasterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoUpgradeMasterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoUpgradeMasterMetadata {
    return {
      $type: AutoUpgradeMasterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: AutoUpgradeMasterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AutoUpgradeMasterMetadata>, I>>(base?: I): AutoUpgradeMasterMetadata {
    return AutoUpgradeMasterMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AutoUpgradeMasterMetadata>, I>>(object: I): AutoUpgradeMasterMetadata {
    const message = createBaseAutoUpgradeMasterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AutoUpgradeMasterMetadata.$type, AutoUpgradeMasterMetadata);

function createBaseListClusterOperationsRequest(): ListClusterOperationsRequest {
  return {
    $type: "yandex.cloud.k8s.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsRequest" as const,

  encode(message: ListClusterOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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

  fromJSON(object: any): ListClusterOperationsRequest {
    return {
      $type: ListClusterOperationsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListClusterOperationsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
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

  create<I extends Exact<DeepPartial<ListClusterOperationsRequest>, I>>(base?: I): ListClusterOperationsRequest {
    return ListClusterOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClusterOperationsRequest>, I>>(object: I): ListClusterOperationsRequest {
    const message = createBaseListClusterOperationsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterOperationsRequest.$type, ListClusterOperationsRequest);

function createBaseListClusterOperationsResponse(): ListClusterOperationsResponse {
  return { $type: "yandex.cloud.k8s.v1.ListClusterOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsResponse" as const,

  encode(message: ListClusterOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterOperationsResponse();
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

  fromJSON(object: any): ListClusterOperationsResponse {
    return {
      $type: ListClusterOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClusterOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListClusterOperationsResponse>, I>>(base?: I): ListClusterOperationsResponse {
    return ListClusterOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClusterOperationsResponse>, I>>(
    object: I,
  ): ListClusterOperationsResponse {
    const message = createBaseListClusterOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterOperationsResponse.$type, ListClusterOperationsResponse);

function createBaseListClusterNodeGroupsRequest(): ListClusterNodeGroupsRequest {
  return {
    $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClusterNodeGroupsRequest = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest" as const,

  encode(message: ListClusterNodeGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterNodeGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterNodeGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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

  fromJSON(object: any): ListClusterNodeGroupsRequest {
    return {
      $type: ListClusterNodeGroupsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListClusterNodeGroupsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
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

  create<I extends Exact<DeepPartial<ListClusterNodeGroupsRequest>, I>>(base?: I): ListClusterNodeGroupsRequest {
    return ListClusterNodeGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClusterNodeGroupsRequest>, I>>(object: I): ListClusterNodeGroupsRequest {
    const message = createBaseListClusterNodeGroupsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterNodeGroupsRequest.$type, ListClusterNodeGroupsRequest);

function createBaseListClusterNodeGroupsResponse(): ListClusterNodeGroupsResponse {
  return { $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse", nodeGroups: [], nextPageToken: "" };
}

export const ListClusterNodeGroupsResponse = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse" as const,

  encode(message: ListClusterNodeGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodeGroups) {
      NodeGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterNodeGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterNodeGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroups.push(NodeGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterNodeGroupsResponse {
    return {
      $type: ListClusterNodeGroupsResponse.$type,
      nodeGroups: globalThis.Array.isArray(object?.nodeGroups)
        ? object.nodeGroups.map((e: any) => NodeGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClusterNodeGroupsResponse): unknown {
    const obj: any = {};
    if (message.nodeGroups?.length) {
      obj.nodeGroups = message.nodeGroups.map((e) => NodeGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListClusterNodeGroupsResponse>, I>>(base?: I): ListClusterNodeGroupsResponse {
    return ListClusterNodeGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClusterNodeGroupsResponse>, I>>(
    object: I,
  ): ListClusterNodeGroupsResponse {
    const message = createBaseListClusterNodeGroupsResponse();
    message.nodeGroups = object.nodeGroups?.map((e) => NodeGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterNodeGroupsResponse.$type, ListClusterNodeGroupsResponse);

function createBaseListClusterNodesRequest(): ListClusterNodesRequest {
  return { $type: "yandex.cloud.k8s.v1.ListClusterNodesRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterNodesRequest = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesRequest" as const,

  encode(message: ListClusterNodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterNodesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterNodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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

  fromJSON(object: any): ListClusterNodesRequest {
    return {
      $type: ListClusterNodesRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListClusterNodesRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListClusterNodesRequest>, I>>(base?: I): ListClusterNodesRequest {
    return ListClusterNodesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClusterNodesRequest>, I>>(object: I): ListClusterNodesRequest {
    const message = createBaseListClusterNodesRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterNodesRequest.$type, ListClusterNodesRequest);

function createBaseListClusterNodesResponse(): ListClusterNodesResponse {
  return { $type: "yandex.cloud.k8s.v1.ListClusterNodesResponse", nodes: [], nextPageToken: "" };
}

export const ListClusterNodesResponse = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesResponse" as const,

  encode(message: ListClusterNodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterNodesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterNodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodes.push(Node.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterNodesResponse {
    return {
      $type: ListClusterNodesResponse.$type,
      nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClusterNodesResponse): unknown {
    const obj: any = {};
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => Node.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListClusterNodesResponse>, I>>(base?: I): ListClusterNodesResponse {
    return ListClusterNodesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClusterNodesResponse>, I>>(object: I): ListClusterNodesResponse {
    const message = createBaseListClusterNodesResponse();
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterNodesResponse.$type, ListClusterNodesResponse);

function createBaseMasterSpec(): MasterSpec {
  return {
    $type: "yandex.cloud.k8s.v1.MasterSpec",
    zonalMasterSpec: undefined,
    regionalMasterSpec: undefined,
    locations: [],
    etcdClusterSize: 0,
    externalV4AddressSpec: undefined,
    externalV6AddressSpec: undefined,
    version: "",
    maintenancePolicy: undefined,
    securityGroupIds: [],
    masterLogging: undefined,
  };
}

export const MasterSpec = {
  $type: "yandex.cloud.k8s.v1.MasterSpec" as const,

  encode(message: MasterSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zonalMasterSpec !== undefined) {
      ZonalMasterSpec.encode(message.zonalMasterSpec, writer.uint32(10).fork()).ldelim();
    }
    if (message.regionalMasterSpec !== undefined) {
      RegionalMasterSpec.encode(message.regionalMasterSpec, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.locations) {
      LocationSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.etcdClusterSize !== 0) {
      writer.uint32(72).int64(message.etcdClusterSize);
    }
    if (message.externalV4AddressSpec !== undefined) {
      ExternalAddressSpec.encode(message.externalV4AddressSpec, writer.uint32(82).fork()).ldelim();
    }
    if (message.externalV6AddressSpec !== undefined) {
      ExternalAddressSpec.encode(message.externalV6AddressSpec, writer.uint32(90).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.maintenancePolicy !== undefined) {
      MasterMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(50).string(v!);
    }
    if (message.masterLogging !== undefined) {
      MasterLogging.encode(message.masterLogging, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zonalMasterSpec = ZonalMasterSpec.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.regionalMasterSpec = RegionalMasterSpec.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.locations.push(LocationSpec.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.etcdClusterSize = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.externalV4AddressSpec = ExternalAddressSpec.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.externalV6AddressSpec = ExternalAddressSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maintenancePolicy = MasterMaintenancePolicy.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.masterLogging = MasterLogging.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MasterSpec {
    return {
      $type: MasterSpec.$type,
      zonalMasterSpec: isSet(object.zonalMasterSpec) ? ZonalMasterSpec.fromJSON(object.zonalMasterSpec) : undefined,
      regionalMasterSpec: isSet(object.regionalMasterSpec)
        ? RegionalMasterSpec.fromJSON(object.regionalMasterSpec)
        : undefined,
      locations: globalThis.Array.isArray(object?.locations)
        ? object.locations.map((e: any) => LocationSpec.fromJSON(e))
        : [],
      etcdClusterSize: isSet(object.etcdClusterSize) ? globalThis.Number(object.etcdClusterSize) : 0,
      externalV4AddressSpec: isSet(object.externalV4AddressSpec)
        ? ExternalAddressSpec.fromJSON(object.externalV4AddressSpec)
        : undefined,
      externalV6AddressSpec: isSet(object.externalV6AddressSpec)
        ? ExternalAddressSpec.fromJSON(object.externalV6AddressSpec)
        : undefined,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      maintenancePolicy: isSet(object.maintenancePolicy)
        ? MasterMaintenancePolicy.fromJSON(object.maintenancePolicy)
        : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      masterLogging: isSet(object.masterLogging) ? MasterLogging.fromJSON(object.masterLogging) : undefined,
    };
  },

  toJSON(message: MasterSpec): unknown {
    const obj: any = {};
    if (message.zonalMasterSpec !== undefined) {
      obj.zonalMasterSpec = ZonalMasterSpec.toJSON(message.zonalMasterSpec);
    }
    if (message.regionalMasterSpec !== undefined) {
      obj.regionalMasterSpec = RegionalMasterSpec.toJSON(message.regionalMasterSpec);
    }
    if (message.locations?.length) {
      obj.locations = message.locations.map((e) => LocationSpec.toJSON(e));
    }
    if (message.etcdClusterSize !== 0) {
      obj.etcdClusterSize = Math.round(message.etcdClusterSize);
    }
    if (message.externalV4AddressSpec !== undefined) {
      obj.externalV4AddressSpec = ExternalAddressSpec.toJSON(message.externalV4AddressSpec);
    }
    if (message.externalV6AddressSpec !== undefined) {
      obj.externalV6AddressSpec = ExternalAddressSpec.toJSON(message.externalV6AddressSpec);
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.maintenancePolicy !== undefined) {
      obj.maintenancePolicy = MasterMaintenancePolicy.toJSON(message.maintenancePolicy);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.masterLogging !== undefined) {
      obj.masterLogging = MasterLogging.toJSON(message.masterLogging);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterSpec>, I>>(base?: I): MasterSpec {
    return MasterSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterSpec>, I>>(object: I): MasterSpec {
    const message = createBaseMasterSpec();
    message.zonalMasterSpec = (object.zonalMasterSpec !== undefined && object.zonalMasterSpec !== null)
      ? ZonalMasterSpec.fromPartial(object.zonalMasterSpec)
      : undefined;
    message.regionalMasterSpec = (object.regionalMasterSpec !== undefined && object.regionalMasterSpec !== null)
      ? RegionalMasterSpec.fromPartial(object.regionalMasterSpec)
      : undefined;
    message.locations = object.locations?.map((e) => LocationSpec.fromPartial(e)) || [];
    message.etcdClusterSize = object.etcdClusterSize ?? 0;
    message.externalV4AddressSpec =
      (object.externalV4AddressSpec !== undefined && object.externalV4AddressSpec !== null)
        ? ExternalAddressSpec.fromPartial(object.externalV4AddressSpec)
        : undefined;
    message.externalV6AddressSpec =
      (object.externalV6AddressSpec !== undefined && object.externalV6AddressSpec !== null)
        ? ExternalAddressSpec.fromPartial(object.externalV6AddressSpec)
        : undefined;
    message.version = object.version ?? "";
    message.maintenancePolicy = (object.maintenancePolicy !== undefined && object.maintenancePolicy !== null)
      ? MasterMaintenancePolicy.fromPartial(object.maintenancePolicy)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.masterLogging = (object.masterLogging !== undefined && object.masterLogging !== null)
      ? MasterLogging.fromPartial(object.masterLogging)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MasterSpec.$type, MasterSpec);

function createBaseZonalMasterSpec(): ZonalMasterSpec {
  return {
    $type: "yandex.cloud.k8s.v1.ZonalMasterSpec",
    zoneId: "",
    internalV4AddressSpec: undefined,
    externalV4AddressSpec: undefined,
  };
}

export const ZonalMasterSpec = {
  $type: "yandex.cloud.k8s.v1.ZonalMasterSpec" as const,

  encode(message: ZonalMasterSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.internalV4AddressSpec !== undefined) {
      InternalAddressSpec.encode(message.internalV4AddressSpec, writer.uint32(18).fork()).ldelim();
    }
    if (message.externalV4AddressSpec !== undefined) {
      ExternalAddressSpec.encode(message.externalV4AddressSpec, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZonalMasterSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZonalMasterSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.internalV4AddressSpec = InternalAddressSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalV4AddressSpec = ExternalAddressSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZonalMasterSpec {
    return {
      $type: ZonalMasterSpec.$type,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      internalV4AddressSpec: isSet(object.internalV4AddressSpec)
        ? InternalAddressSpec.fromJSON(object.internalV4AddressSpec)
        : undefined,
      externalV4AddressSpec: isSet(object.externalV4AddressSpec)
        ? ExternalAddressSpec.fromJSON(object.externalV4AddressSpec)
        : undefined,
    };
  },

  toJSON(message: ZonalMasterSpec): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.internalV4AddressSpec !== undefined) {
      obj.internalV4AddressSpec = InternalAddressSpec.toJSON(message.internalV4AddressSpec);
    }
    if (message.externalV4AddressSpec !== undefined) {
      obj.externalV4AddressSpec = ExternalAddressSpec.toJSON(message.externalV4AddressSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZonalMasterSpec>, I>>(base?: I): ZonalMasterSpec {
    return ZonalMasterSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZonalMasterSpec>, I>>(object: I): ZonalMasterSpec {
    const message = createBaseZonalMasterSpec();
    message.zoneId = object.zoneId ?? "";
    message.internalV4AddressSpec =
      (object.internalV4AddressSpec !== undefined && object.internalV4AddressSpec !== null)
        ? InternalAddressSpec.fromPartial(object.internalV4AddressSpec)
        : undefined;
    message.externalV4AddressSpec =
      (object.externalV4AddressSpec !== undefined && object.externalV4AddressSpec !== null)
        ? ExternalAddressSpec.fromPartial(object.externalV4AddressSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ZonalMasterSpec.$type, ZonalMasterSpec);

function createBaseRegionalMasterSpec(): RegionalMasterSpec {
  return {
    $type: "yandex.cloud.k8s.v1.RegionalMasterSpec",
    regionId: "",
    locations: [],
    externalV4AddressSpec: undefined,
    externalV6AddressSpec: undefined,
  };
}

export const RegionalMasterSpec = {
  $type: "yandex.cloud.k8s.v1.RegionalMasterSpec" as const,

  encode(message: RegionalMasterSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    for (const v of message.locations) {
      MasterLocation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.externalV4AddressSpec !== undefined) {
      ExternalAddressSpec.encode(message.externalV4AddressSpec, writer.uint32(26).fork()).ldelim();
    }
    if (message.externalV6AddressSpec !== undefined) {
      ExternalAddressSpec.encode(message.externalV6AddressSpec, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegionalMasterSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegionalMasterSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.regionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.locations.push(MasterLocation.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalV4AddressSpec = ExternalAddressSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.externalV6AddressSpec = ExternalAddressSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegionalMasterSpec {
    return {
      $type: RegionalMasterSpec.$type,
      regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
      locations: globalThis.Array.isArray(object?.locations)
        ? object.locations.map((e: any) => MasterLocation.fromJSON(e))
        : [],
      externalV4AddressSpec: isSet(object.externalV4AddressSpec)
        ? ExternalAddressSpec.fromJSON(object.externalV4AddressSpec)
        : undefined,
      externalV6AddressSpec: isSet(object.externalV6AddressSpec)
        ? ExternalAddressSpec.fromJSON(object.externalV6AddressSpec)
        : undefined,
    };
  },

  toJSON(message: RegionalMasterSpec): unknown {
    const obj: any = {};
    if (message.regionId !== "") {
      obj.regionId = message.regionId;
    }
    if (message.locations?.length) {
      obj.locations = message.locations.map((e) => MasterLocation.toJSON(e));
    }
    if (message.externalV4AddressSpec !== undefined) {
      obj.externalV4AddressSpec = ExternalAddressSpec.toJSON(message.externalV4AddressSpec);
    }
    if (message.externalV6AddressSpec !== undefined) {
      obj.externalV6AddressSpec = ExternalAddressSpec.toJSON(message.externalV6AddressSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegionalMasterSpec>, I>>(base?: I): RegionalMasterSpec {
    return RegionalMasterSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegionalMasterSpec>, I>>(object: I): RegionalMasterSpec {
    const message = createBaseRegionalMasterSpec();
    message.regionId = object.regionId ?? "";
    message.locations = object.locations?.map((e) => MasterLocation.fromPartial(e)) || [];
    message.externalV4AddressSpec =
      (object.externalV4AddressSpec !== undefined && object.externalV4AddressSpec !== null)
        ? ExternalAddressSpec.fromPartial(object.externalV4AddressSpec)
        : undefined;
    message.externalV6AddressSpec =
      (object.externalV6AddressSpec !== undefined && object.externalV6AddressSpec !== null)
        ? ExternalAddressSpec.fromPartial(object.externalV6AddressSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(RegionalMasterSpec.$type, RegionalMasterSpec);

function createBaseInternalAddressSpec(): InternalAddressSpec {
  return { $type: "yandex.cloud.k8s.v1.InternalAddressSpec", subnetId: "" };
}

export const InternalAddressSpec = {
  $type: "yandex.cloud.k8s.v1.InternalAddressSpec" as const,

  encode(message: InternalAddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
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

  fromJSON(object: any): InternalAddressSpec {
    return {
      $type: InternalAddressSpec.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: InternalAddressSpec): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InternalAddressSpec>, I>>(base?: I): InternalAddressSpec {
    return InternalAddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InternalAddressSpec>, I>>(object: I): InternalAddressSpec {
    const message = createBaseInternalAddressSpec();
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InternalAddressSpec.$type, InternalAddressSpec);

function createBaseExternalAddressSpec(): ExternalAddressSpec {
  return { $type: "yandex.cloud.k8s.v1.ExternalAddressSpec", address: "" };
}

export const ExternalAddressSpec = {
  $type: "yandex.cloud.k8s.v1.ExternalAddressSpec" as const,

  encode(message: ExternalAddressSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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
    };
  },

  toJSON(message: ExternalAddressSpec): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalAddressSpec>, I>>(base?: I): ExternalAddressSpec {
    return ExternalAddressSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalAddressSpec>, I>>(object: I): ExternalAddressSpec {
    const message = createBaseExternalAddressSpec();
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalAddressSpec.$type, ExternalAddressSpec);

function createBaseMasterLocation(): MasterLocation {
  return { $type: "yandex.cloud.k8s.v1.MasterLocation", zoneId: "", internalV4AddressSpec: undefined };
}

export const MasterLocation = {
  $type: "yandex.cloud.k8s.v1.MasterLocation" as const,

  encode(message: MasterLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.internalV4AddressSpec !== undefined) {
      InternalAddressSpec.encode(message.internalV4AddressSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterLocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.internalV4AddressSpec = InternalAddressSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MasterLocation {
    return {
      $type: MasterLocation.$type,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      internalV4AddressSpec: isSet(object.internalV4AddressSpec)
        ? InternalAddressSpec.fromJSON(object.internalV4AddressSpec)
        : undefined,
    };
  },

  toJSON(message: MasterLocation): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.internalV4AddressSpec !== undefined) {
      obj.internalV4AddressSpec = InternalAddressSpec.toJSON(message.internalV4AddressSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterLocation>, I>>(base?: I): MasterLocation {
    return MasterLocation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterLocation>, I>>(object: I): MasterLocation {
    const message = createBaseMasterLocation();
    message.zoneId = object.zoneId ?? "";
    message.internalV4AddressSpec =
      (object.internalV4AddressSpec !== undefined && object.internalV4AddressSpec !== null)
        ? InternalAddressSpec.fromPartial(object.internalV4AddressSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MasterLocation.$type, MasterLocation);

function createBaseLocationSpec(): LocationSpec {
  return { $type: "yandex.cloud.k8s.v1.LocationSpec", zoneId: "", subnetId: "" };
}

export const LocationSpec = {
  $type: "yandex.cloud.k8s.v1.LocationSpec" as const,

  encode(message: LocationSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneId = reader.string();
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

  fromJSON(object: any): LocationSpec {
    return {
      $type: LocationSpec.$type,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: LocationSpec): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LocationSpec>, I>>(base?: I): LocationSpec {
    return LocationSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LocationSpec>, I>>(object: I): LocationSpec {
    const message = createBaseLocationSpec();
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(LocationSpec.$type, LocationSpec);

/** A set of methods for managing Kubernetes cluster. */
export type ClusterServiceService = typeof ClusterServiceService;
export const ClusterServiceService = {
  /**
   * Returns the specified Kubernetes cluster.
   *
   * To get the list of available Kubernetes cluster, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) => Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /** Retrieves the list of Kubernetes cluster in the specified folder. */
  list: {
    path: "/yandex.cloud.k8s.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) => Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) => Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a Kubernetes cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) => Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified Kubernetes cluster. */
  update: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) => Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified Kubernetes cluster. */
  delete: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) => Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified Kubernetes cluster. */
  stop: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) => Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified Kubernetes cluster. */
  start: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) => Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists nodegroup for the specified Kubernetes cluster. */
  listNodeGroups: {
    path: "/yandex.cloud.k8s.v1.ClusterService/ListNodeGroups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterNodeGroupsRequest) =>
      Buffer.from(ListClusterNodeGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterNodeGroupsRequest.decode(value),
    responseSerialize: (value: ListClusterNodeGroupsResponse) =>
      Buffer.from(ListClusterNodeGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterNodeGroupsResponse.decode(value),
  },
  /** Lists operations for the specified Kubernetes cluster. */
  listOperations: {
    path: "/yandex.cloud.k8s.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
  },
  /** Lists cluster's nodes. */
  listNodes: {
    path: "/yandex.cloud.k8s.v1.ClusterService/ListNodes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterNodesRequest) => Buffer.from(ListClusterNodesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterNodesRequest.decode(value),
    responseSerialize: (value: ListClusterNodesResponse) =>
      Buffer.from(ListClusterNodesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterNodesResponse.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Kubernetes cluster.
   *
   * To get the list of available Kubernetes cluster, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /** Retrieves the list of Kubernetes cluster in the specified folder. */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a Kubernetes cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified Kubernetes cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified Kubernetes cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Stops the specified Kubernetes cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Starts the specified Kubernetes cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Lists nodegroup for the specified Kubernetes cluster. */
  listNodeGroups: handleUnaryCall<ListClusterNodeGroupsRequest, ListClusterNodeGroupsResponse>;
  /** Lists operations for the specified Kubernetes cluster. */
  listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
  /** Lists cluster's nodes. */
  listNodes: handleUnaryCall<ListClusterNodesRequest, ListClusterNodesResponse>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified Kubernetes cluster.
   *
   * To get the list of available Kubernetes cluster, make a [List] request.
   */
  get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
  get(
    request: GetClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Cluster) => void,
  ): ClientUnaryCall;
  get(
    request: GetClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Cluster) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Kubernetes cluster in the specified folder. */
  list(
    request: ListClustersRequest,
    callback: (error: ServiceError | null, response: ListClustersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListClustersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClustersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListClustersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClustersResponse) => void,
  ): ClientUnaryCall;
  /** Creates a Kubernetes cluster in the specified folder. */
  create(
    request: CreateClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified Kubernetes cluster. */
  update(
    request: UpdateClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified Kubernetes cluster. */
  delete(
    request: DeleteClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Stops the specified Kubernetes cluster. */
  stop(
    request: StopClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Starts the specified Kubernetes cluster. */
  start(
    request: StartClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists nodegroup for the specified Kubernetes cluster. */
  listNodeGroups(
    request: ListClusterNodeGroupsRequest,
    callback: (error: ServiceError | null, response: ListClusterNodeGroupsResponse) => void,
  ): ClientUnaryCall;
  listNodeGroups(
    request: ListClusterNodeGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterNodeGroupsResponse) => void,
  ): ClientUnaryCall;
  listNodeGroups(
    request: ListClusterNodeGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterNodeGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified Kubernetes cluster. */
  listOperations(
    request: ListClusterOperationsRequest,
    callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListClusterOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListClusterOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists cluster's nodes. */
  listNodes(
    request: ListClusterNodesRequest,
    callback: (error: ServiceError | null, response: ListClusterNodesResponse) => void,
  ): ClientUnaryCall;
  listNodes(
    request: ListClusterNodesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterNodesResponse) => void,
  ): ClientUnaryCall;
  listNodes(
    request: ListClusterNodesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterNodesResponse) => void,
  ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.k8s.v1.ClusterService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ClusterServiceClient;
  service: typeof ClusterServiceService;
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
