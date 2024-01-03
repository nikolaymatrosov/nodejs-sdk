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
import { Cluster, HadoopConfig } from "./cluster";
import { Resources } from "./common";
import { AutoscalingConfig, Host, Role, roleFromJSON, roleToJSON } from "./subcluster";

export const protobufPackage = "yandex.cloud.dataproc.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.dataproc.v1.GetClusterRequest";
  /**
   * ID of the Data Proc cluster.
   *
   * To get a cluster ID make a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.dataproc.v1.ListClustersRequest";
  /**
   * ID of the folder to list clusters in.
   *
   * To get the folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
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
   * A filter expression that filters clusters listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-cluster`.
   */
  filter: string;
}

export interface ListClustersResponse {
  $type: "yandex.cloud.dataproc.v1.ListClustersResponse";
  /** List of clusters in the specified folder. */
  clusters: Cluster[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListClustersRequest.page_size], use `next_page_token` as the value
   * for the [ListClustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSubclusterConfigSpec {
  $type: "yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec";
  /** Name of the subcluster. */
  name: string;
  /** Role of the subcluster in the Data Proc cluster. */
  role: Role;
  /** Resource configuration for hosts in the subcluster. */
  resources?:
    | Resources
    | undefined;
  /** ID of the VPC subnet used for hosts in the subcluster. */
  subnetId: string;
  /** Number of hosts in the subcluster. */
  hostsCount: number;
  /** Assign public ip addresses for all hosts in subcluter. */
  assignPublicIp: boolean;
  /** Configuration for instance group based subclusters */
  autoscalingConfig?: AutoscalingConfig | undefined;
}

export interface UpdateSubclusterConfigSpec {
  $type: "yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec";
  /**
   * ID of the subcluster to update.
   *
   * To get the subcluster ID make a [SubclusterService.List] request.
   */
  id: string;
  /** Name of the subcluster. */
  name: string;
  /** Resource configuration for each host in the subcluster. */
  resources?:
    | Resources
    | undefined;
  /** Number of hosts in the subcluster. */
  hostsCount: number;
  /** Configuration for instance group based subclusters */
  autoscalingConfig?: AutoscalingConfig | undefined;
}

export interface CreateClusterConfigSpec {
  $type: "yandex.cloud.dataproc.v1.CreateClusterConfigSpec";
  /**
   * Version of the image for cluster provisioning.
   *
   * All available versions are listed in the [documentation](/docs/data-proc/concepts/environment).
   */
  versionId: string;
  /** Data Proc specific options. */
  hadoop?:
    | HadoopConfig
    | undefined;
  /** Specification for creating subclusters. */
  subclustersSpec: CreateSubclusterConfigSpec[];
}

export interface UpdateClusterConfigSpec {
  $type: "yandex.cloud.dataproc.v1.UpdateClusterConfigSpec";
  /** New configuration for subclusters in a cluster. */
  subclustersSpec: UpdateSubclusterConfigSpec[];
  /** Hadoop specific options */
  hadoop?: HadoopConfig | undefined;
}

export interface CreateClusterRequest {
  $type: "yandex.cloud.dataproc.v1.CreateClusterRequest";
  /**
   * ID of the folder to create a cluster in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the cluster. The name must be unique within the folder.
   * The name can't be changed after the Data Proc cluster is created.
   */
  name: string;
  /** Description of the cluster. */
  description: string;
  /** Cluster labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Configuration and resources for hosts that should be created with the cluster. */
  configSpec?:
    | CreateClusterConfigSpec
    | undefined;
  /**
   * ID of the availability zone where the cluster should be placed.
   *
   * To get the list of available zones make a [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /** ID of the service account to be used by the Data Proc manager agent. */
  serviceAccountId: string;
  /** Name of the Object Storage bucket to use for Data Proc jobs. */
  bucket: string;
  /** Enable UI Proxy feature. */
  uiProxy: boolean;
  /** User security groups. */
  securityGroupIds: string[];
  /** Host groups to place VMs of cluster on. */
  hostGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** ID of the cloud logging log group to write logs. If not set, logs will not be sent to logging service */
  logGroupId: string;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.dataproc.v1.CreateClusterMetadata";
  /** ID of the cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest";
  /**
   * ID of the cluster to update.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which attributes of the cluster should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New description for the cluster. */
  description: string;
  /** A new set of cluster labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Configuration and resources for hosts that should be created with the Data Proc cluster. */
  configSpec?:
    | UpdateClusterConfigSpec
    | undefined;
  /** New name for the Data Proc cluster. The name must be unique within the folder. */
  name: string;
  /** ID of the new service account to be used by the Data Proc manager agent. */
  serviceAccountId: string;
  /** Name of the new Object Storage bucket to use for Data Proc jobs. */
  bucket: string;
  /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
  decommissionTimeout: number;
  /** Enable UI Proxy feature. */
  uiProxy: boolean;
  /** User security groups. */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** ID of the cloud logging log group to write logs. If not set, logs will not be sent to logging service */
  logGroupId: string;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.dataproc.v1.UpdateClusterMetadata";
  /** ID of the cluster that is being updated. */
  clusterId: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.dataproc.v1.DeleteClusterRequest";
  /**
   * ID of the cluster to delete.
   *
   * To get a cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
  decommissionTimeout: number;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.dataproc.v1.DeleteClusterMetadata";
  /** ID of the Data Proc cluster that is being deleted. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.dataproc.v1.StartClusterRequest";
  /**
   * ID of the cluster to start.
   *
   * To get a cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.dataproc.v1.StartClusterMetadata";
  /** ID of the Data Proc cluster that is being started. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.dataproc.v1.StopClusterRequest";
  /**
   * ID of the cluster to stop.
   *
   * To get a cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
  decommissionTimeout: number;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.dataproc.v1.StopClusterMetadata";
  /** ID of the Data Proc cluster that is being stopped. */
  clusterId: string;
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.dataproc.v1.ListClusterOperationsRequest";
  /** ID of the cluster to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.dataproc.v1.ListClusterOperationsResponse";
  /** List of operations for the specified cluster. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListClusterOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListClusterOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterHostsRequest {
  $type: "yandex.cloud.dataproc.v1.ListClusterHostsRequest";
  /**
   * ID of the cluster to list hosts for.
   *
   * To get a cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterHostsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters hosts listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-host`
   */
  filter: string;
}

export interface ListClusterHostsResponse {
  $type: "yandex.cloud.dataproc.v1.ListClusterHostsResponse";
  /** Requested list of hosts. */
  hosts: Host[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListClusterHostsRequest.page_size], use `next_page_token` as the value
   * for the [ListClusterHostsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListUILinksRequest {
  $type: "yandex.cloud.dataproc.v1.ListUILinksRequest";
  /** Required. ID of the Hadoop cluster. */
  clusterId: string;
}

export interface UILink {
  $type: "yandex.cloud.dataproc.v1.UILink";
  name: string;
  url: string;
}

export interface ListUILinksResponse {
  $type: "yandex.cloud.dataproc.v1.ListUILinksResponse";
  /** Requested list of ui links. */
  links: UILink[];
}

function createBaseGetClusterRequest(): GetClusterRequest {
  return { $type: "yandex.cloud.dataproc.v1.GetClusterRequest", clusterId: "" };
}

export const GetClusterRequest = {
  $type: "yandex.cloud.dataproc.v1.GetClusterRequest" as const,

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
  return {
    $type: "yandex.cloud.dataproc.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClustersRequest = {
  $type: "yandex.cloud.dataproc.v1.ListClustersRequest" as const,

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
  return { $type: "yandex.cloud.dataproc.v1.ListClustersResponse", clusters: [], nextPageToken: "" };
}

export const ListClustersResponse = {
  $type: "yandex.cloud.dataproc.v1.ListClustersResponse" as const,

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

function createBaseCreateSubclusterConfigSpec(): CreateSubclusterConfigSpec {
  return {
    $type: "yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec",
    name: "",
    role: 0,
    resources: undefined,
    subnetId: "",
    hostsCount: 0,
    assignPublicIp: false,
    autoscalingConfig: undefined,
  };
}

export const CreateSubclusterConfigSpec = {
  $type: "yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec" as const,

  encode(message: CreateSubclusterConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.role !== 0) {
      writer.uint32(16).int32(message.role);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(34).string(message.subnetId);
    }
    if (message.hostsCount !== 0) {
      writer.uint32(40).int64(message.hostsCount);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    if (message.autoscalingConfig !== undefined) {
      AutoscalingConfig.encode(message.autoscalingConfig, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubclusterConfigSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubclusterConfigSpec();
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

          message.role = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.autoscalingConfig = AutoscalingConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSubclusterConfigSpec {
    return {
      $type: CreateSubclusterConfigSpec.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      role: isSet(object.role) ? roleFromJSON(object.role) : 0,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      hostsCount: isSet(object.hostsCount) ? globalThis.Number(object.hostsCount) : 0,
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      autoscalingConfig: isSet(object.autoscalingConfig)
        ? AutoscalingConfig.fromJSON(object.autoscalingConfig)
        : undefined,
    };
  },

  toJSON(message: CreateSubclusterConfigSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.role !== 0) {
      obj.role = roleToJSON(message.role);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.hostsCount !== 0) {
      obj.hostsCount = Math.round(message.hostsCount);
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    if (message.autoscalingConfig !== undefined) {
      obj.autoscalingConfig = AutoscalingConfig.toJSON(message.autoscalingConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubclusterConfigSpec>, I>>(base?: I): CreateSubclusterConfigSpec {
    return CreateSubclusterConfigSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSubclusterConfigSpec>, I>>(object: I): CreateSubclusterConfigSpec {
    const message = createBaseCreateSubclusterConfigSpec();
    message.name = object.name ?? "";
    message.role = object.role ?? 0;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.subnetId = object.subnetId ?? "";
    message.hostsCount = object.hostsCount ?? 0;
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.autoscalingConfig = (object.autoscalingConfig !== undefined && object.autoscalingConfig !== null)
      ? AutoscalingConfig.fromPartial(object.autoscalingConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateSubclusterConfigSpec.$type, CreateSubclusterConfigSpec);

function createBaseUpdateSubclusterConfigSpec(): UpdateSubclusterConfigSpec {
  return {
    $type: "yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec",
    id: "",
    name: "",
    resources: undefined,
    hostsCount: 0,
    autoscalingConfig: undefined,
  };
}

export const UpdateSubclusterConfigSpec = {
  $type: "yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec" as const,

  encode(message: UpdateSubclusterConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(32).int64(message.hostsCount);
    }
    if (message.autoscalingConfig !== undefined) {
      AutoscalingConfig.encode(message.autoscalingConfig, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubclusterConfigSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubclusterConfigSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.autoscalingConfig = AutoscalingConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSubclusterConfigSpec {
    return {
      $type: UpdateSubclusterConfigSpec.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      hostsCount: isSet(object.hostsCount) ? globalThis.Number(object.hostsCount) : 0,
      autoscalingConfig: isSet(object.autoscalingConfig)
        ? AutoscalingConfig.fromJSON(object.autoscalingConfig)
        : undefined,
    };
  },

  toJSON(message: UpdateSubclusterConfigSpec): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.hostsCount !== 0) {
      obj.hostsCount = Math.round(message.hostsCount);
    }
    if (message.autoscalingConfig !== undefined) {
      obj.autoscalingConfig = AutoscalingConfig.toJSON(message.autoscalingConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSubclusterConfigSpec>, I>>(base?: I): UpdateSubclusterConfigSpec {
    return UpdateSubclusterConfigSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSubclusterConfigSpec>, I>>(object: I): UpdateSubclusterConfigSpec {
    const message = createBaseUpdateSubclusterConfigSpec();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.autoscalingConfig = (object.autoscalingConfig !== undefined && object.autoscalingConfig !== null)
      ? AutoscalingConfig.fromPartial(object.autoscalingConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateSubclusterConfigSpec.$type, UpdateSubclusterConfigSpec);

function createBaseCreateClusterConfigSpec(): CreateClusterConfigSpec {
  return {
    $type: "yandex.cloud.dataproc.v1.CreateClusterConfigSpec",
    versionId: "",
    hadoop: undefined,
    subclustersSpec: [],
  };
}

export const CreateClusterConfigSpec = {
  $type: "yandex.cloud.dataproc.v1.CreateClusterConfigSpec" as const,

  encode(message: CreateClusterConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.versionId !== "") {
      writer.uint32(10).string(message.versionId);
    }
    if (message.hadoop !== undefined) {
      HadoopConfig.encode(message.hadoop, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.subclustersSpec) {
      CreateSubclusterConfigSpec.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterConfigSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClusterConfigSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.versionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hadoop = HadoopConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subclustersSpec.push(CreateSubclusterConfigSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateClusterConfigSpec {
    return {
      $type: CreateClusterConfigSpec.$type,
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      hadoop: isSet(object.hadoop) ? HadoopConfig.fromJSON(object.hadoop) : undefined,
      subclustersSpec: globalThis.Array.isArray(object?.subclustersSpec)
        ? object.subclustersSpec.map((e: any) => CreateSubclusterConfigSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateClusterConfigSpec): unknown {
    const obj: any = {};
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.hadoop !== undefined) {
      obj.hadoop = HadoopConfig.toJSON(message.hadoop);
    }
    if (message.subclustersSpec?.length) {
      obj.subclustersSpec = message.subclustersSpec.map((e) => CreateSubclusterConfigSpec.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateClusterConfigSpec>, I>>(base?: I): CreateClusterConfigSpec {
    return CreateClusterConfigSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateClusterConfigSpec>, I>>(object: I): CreateClusterConfigSpec {
    const message = createBaseCreateClusterConfigSpec();
    message.versionId = object.versionId ?? "";
    message.hadoop = (object.hadoop !== undefined && object.hadoop !== null)
      ? HadoopConfig.fromPartial(object.hadoop)
      : undefined;
    message.subclustersSpec = object.subclustersSpec?.map((e) => CreateSubclusterConfigSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateClusterConfigSpec.$type, CreateClusterConfigSpec);

function createBaseUpdateClusterConfigSpec(): UpdateClusterConfigSpec {
  return { $type: "yandex.cloud.dataproc.v1.UpdateClusterConfigSpec", subclustersSpec: [], hadoop: undefined };
}

export const UpdateClusterConfigSpec = {
  $type: "yandex.cloud.dataproc.v1.UpdateClusterConfigSpec" as const,

  encode(message: UpdateClusterConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subclustersSpec) {
      UpdateSubclusterConfigSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.hadoop !== undefined) {
      HadoopConfig.encode(message.hadoop, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterConfigSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterConfigSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subclustersSpec.push(UpdateSubclusterConfigSpec.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hadoop = HadoopConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterConfigSpec {
    return {
      $type: UpdateClusterConfigSpec.$type,
      subclustersSpec: globalThis.Array.isArray(object?.subclustersSpec)
        ? object.subclustersSpec.map((e: any) => UpdateSubclusterConfigSpec.fromJSON(e))
        : [],
      hadoop: isSet(object.hadoop) ? HadoopConfig.fromJSON(object.hadoop) : undefined,
    };
  },

  toJSON(message: UpdateClusterConfigSpec): unknown {
    const obj: any = {};
    if (message.subclustersSpec?.length) {
      obj.subclustersSpec = message.subclustersSpec.map((e) => UpdateSubclusterConfigSpec.toJSON(e));
    }
    if (message.hadoop !== undefined) {
      obj.hadoop = HadoopConfig.toJSON(message.hadoop);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateClusterConfigSpec>, I>>(base?: I): UpdateClusterConfigSpec {
    return UpdateClusterConfigSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateClusterConfigSpec>, I>>(object: I): UpdateClusterConfigSpec {
    const message = createBaseUpdateClusterConfigSpec();
    message.subclustersSpec = object.subclustersSpec?.map((e) => UpdateSubclusterConfigSpec.fromPartial(e)) || [];
    message.hadoop = (object.hadoop !== undefined && object.hadoop !== null)
      ? HadoopConfig.fromPartial(object.hadoop)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterConfigSpec.$type, UpdateClusterConfigSpec);

function createBaseCreateClusterRequest(): CreateClusterRequest {
  return {
    $type: "yandex.cloud.dataproc.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    configSpec: undefined,
    zoneId: "",
    serviceAccountId: "",
    bucket: "",
    uiProxy: false,
    securityGroupIds: [],
    hostGroupIds: [],
    deletionProtection: false,
    logGroupId: "",
  };
}

export const CreateClusterRequest = {
  $type: "yandex.cloud.dataproc.v1.CreateClusterRequest" as const,

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
        $type: "yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.configSpec !== undefined) {
      CreateClusterConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
    }
    if (message.zoneId !== "") {
      writer.uint32(58).string(message.zoneId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(66).string(message.serviceAccountId);
    }
    if (message.bucket !== "") {
      writer.uint32(74).string(message.bucket);
    }
    if (message.uiProxy === true) {
      writer.uint32(80).bool(message.uiProxy);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(98).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(104).bool(message.deletionProtection);
    }
    if (message.logGroupId !== "") {
      writer.uint32(114).string(message.logGroupId);
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
        case 6:
          if (tag !== 50) {
            break;
          }

          message.configSpec = CreateClusterConfigSpec.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.uiProxy = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.hostGroupIds.push(reader.string());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.logGroupId = reader.string();
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
      configSpec: isSet(object.configSpec) ? CreateClusterConfigSpec.fromJSON(object.configSpec) : undefined,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      bucket: isSet(object.bucket) ? globalThis.String(object.bucket) : "",
      uiProxy: isSet(object.uiProxy) ? globalThis.Boolean(object.uiProxy) : false,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      hostGroupIds: globalThis.Array.isArray(object?.hostGroupIds)
        ? object.hostGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
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
    if (message.configSpec !== undefined) {
      obj.configSpec = CreateClusterConfigSpec.toJSON(message.configSpec);
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.bucket !== "") {
      obj.bucket = message.bucket;
    }
    if (message.uiProxy === true) {
      obj.uiProxy = message.uiProxy;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.hostGroupIds?.length) {
      obj.hostGroupIds = message.hostGroupIds;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
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
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? CreateClusterConfigSpec.fromPartial(object.configSpec)
      : undefined;
    message.zoneId = object.zoneId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.bucket = object.bucket ?? "";
    message.uiProxy = object.uiProxy ?? false;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.logGroupId = object.logGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

function createBaseCreateClusterRequest_LabelsEntry(): CreateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.dataproc.v1.CreateClusterMetadata", clusterId: "" };
}

export const CreateClusterMetadata = {
  $type: "yandex.cloud.dataproc.v1.CreateClusterMetadata" as const,

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

function createBaseUpdateClusterRequest(): UpdateClusterRequest {
  return {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest",
    clusterId: "",
    updateMask: undefined,
    description: "",
    labels: {},
    configSpec: undefined,
    name: "",
    serviceAccountId: "",
    bucket: "",
    decommissionTimeout: 0,
    uiProxy: false,
    securityGroupIds: [],
    deletionProtection: false,
    logGroupId: "",
  };
}

export const UpdateClusterRequest = {
  $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest" as const,

  encode(message: UpdateClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateClusterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.configSpec !== undefined) {
      UpdateClusterConfigSpec.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(58).string(message.serviceAccountId);
    }
    if (message.bucket !== "") {
      writer.uint32(66).string(message.bucket);
    }
    if (message.decommissionTimeout !== 0) {
      writer.uint32(72).int64(message.decommissionTimeout);
    }
    if (message.uiProxy === true) {
      writer.uint32(80).bool(message.uiProxy);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(90).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(96).bool(message.deletionProtection);
    }
    if (message.logGroupId !== "") {
      writer.uint32(106).string(message.logGroupId);
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

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = UpdateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.configSpec = UpdateClusterConfigSpec.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.decommissionTimeout = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.uiProxy = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.logGroupId = reader.string();
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
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      configSpec: isSet(object.configSpec) ? UpdateClusterConfigSpec.fromJSON(object.configSpec) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      bucket: isSet(object.bucket) ? globalThis.String(object.bucket) : "",
      decommissionTimeout: isSet(object.decommissionTimeout) ? globalThis.Number(object.decommissionTimeout) : 0,
      uiProxy: isSet(object.uiProxy) ? globalThis.Boolean(object.uiProxy) : false,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
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
    if (message.configSpec !== undefined) {
      obj.configSpec = UpdateClusterConfigSpec.toJSON(message.configSpec);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.bucket !== "") {
      obj.bucket = message.bucket;
    }
    if (message.decommissionTimeout !== 0) {
      obj.decommissionTimeout = Math.round(message.decommissionTimeout);
    }
    if (message.uiProxy === true) {
      obj.uiProxy = message.uiProxy;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
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
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? UpdateClusterConfigSpec.fromPartial(object.configSpec)
      : undefined;
    message.name = object.name ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.bucket = object.bucket ?? "";
    message.decommissionTimeout = object.decommissionTimeout ?? 0;
    message.uiProxy = object.uiProxy ?? false;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.logGroupId = object.logGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

function createBaseUpdateClusterRequest_LabelsEntry(): UpdateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry" as const,

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

function createBaseUpdateClusterMetadata(): UpdateClusterMetadata {
  return { $type: "yandex.cloud.dataproc.v1.UpdateClusterMetadata", clusterId: "" };
}

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.dataproc.v1.UpdateClusterMetadata" as const,

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

function createBaseDeleteClusterRequest(): DeleteClusterRequest {
  return { $type: "yandex.cloud.dataproc.v1.DeleteClusterRequest", clusterId: "", decommissionTimeout: 0 };
}

export const DeleteClusterRequest = {
  $type: "yandex.cloud.dataproc.v1.DeleteClusterRequest" as const,

  encode(message: DeleteClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.decommissionTimeout !== 0) {
      writer.uint32(16).int64(message.decommissionTimeout);
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
        case 2:
          if (tag !== 16) {
            break;
          }

          message.decommissionTimeout = longToNumber(reader.int64() as Long);
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
      decommissionTimeout: isSet(object.decommissionTimeout) ? globalThis.Number(object.decommissionTimeout) : 0,
    };
  },

  toJSON(message: DeleteClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.decommissionTimeout !== 0) {
      obj.decommissionTimeout = Math.round(message.decommissionTimeout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteClusterRequest>, I>>(base?: I): DeleteClusterRequest {
    return DeleteClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteClusterRequest>, I>>(object: I): DeleteClusterRequest {
    const message = createBaseDeleteClusterRequest();
    message.clusterId = object.clusterId ?? "";
    message.decommissionTimeout = object.decommissionTimeout ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterRequest.$type, DeleteClusterRequest);

function createBaseDeleteClusterMetadata(): DeleteClusterMetadata {
  return { $type: "yandex.cloud.dataproc.v1.DeleteClusterMetadata", clusterId: "" };
}

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.dataproc.v1.DeleteClusterMetadata" as const,

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

function createBaseStartClusterRequest(): StartClusterRequest {
  return { $type: "yandex.cloud.dataproc.v1.StartClusterRequest", clusterId: "" };
}

export const StartClusterRequest = {
  $type: "yandex.cloud.dataproc.v1.StartClusterRequest" as const,

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
  return { $type: "yandex.cloud.dataproc.v1.StartClusterMetadata", clusterId: "" };
}

export const StartClusterMetadata = {
  $type: "yandex.cloud.dataproc.v1.StartClusterMetadata" as const,

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

function createBaseStopClusterRequest(): StopClusterRequest {
  return { $type: "yandex.cloud.dataproc.v1.StopClusterRequest", clusterId: "", decommissionTimeout: 0 };
}

export const StopClusterRequest = {
  $type: "yandex.cloud.dataproc.v1.StopClusterRequest" as const,

  encode(message: StopClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.decommissionTimeout !== 0) {
      writer.uint32(16).int64(message.decommissionTimeout);
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
        case 2:
          if (tag !== 16) {
            break;
          }

          message.decommissionTimeout = longToNumber(reader.int64() as Long);
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
      decommissionTimeout: isSet(object.decommissionTimeout) ? globalThis.Number(object.decommissionTimeout) : 0,
    };
  },

  toJSON(message: StopClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.decommissionTimeout !== 0) {
      obj.decommissionTimeout = Math.round(message.decommissionTimeout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopClusterRequest>, I>>(base?: I): StopClusterRequest {
    return StopClusterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopClusterRequest>, I>>(object: I): StopClusterRequest {
    const message = createBaseStopClusterRequest();
    message.clusterId = object.clusterId ?? "";
    message.decommissionTimeout = object.decommissionTimeout ?? 0;
    return message;
  },
};

messageTypeRegistry.set(StopClusterRequest.$type, StopClusterRequest);

function createBaseStopClusterMetadata(): StopClusterMetadata {
  return { $type: "yandex.cloud.dataproc.v1.StopClusterMetadata", clusterId: "" };
}

export const StopClusterMetadata = {
  $type: "yandex.cloud.dataproc.v1.StopClusterMetadata" as const,

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

function createBaseListClusterOperationsRequest(): ListClusterOperationsRequest {
  return { $type: "yandex.cloud.dataproc.v1.ListClusterOperationsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.dataproc.v1.ListClusterOperationsRequest" as const,

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
    return message;
  },
};

messageTypeRegistry.set(ListClusterOperationsRequest.$type, ListClusterOperationsRequest);

function createBaseListClusterOperationsResponse(): ListClusterOperationsResponse {
  return { $type: "yandex.cloud.dataproc.v1.ListClusterOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.dataproc.v1.ListClusterOperationsResponse" as const,

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

function createBaseListClusterHostsRequest(): ListClusterHostsRequest {
  return {
    $type: "yandex.cloud.dataproc.v1.ListClusterHostsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.dataproc.v1.ListClusterHostsRequest" as const,

  encode(message: ListClusterHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterHostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterHostsRequest();
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

  fromJSON(object: any): ListClusterHostsRequest {
    return {
      $type: ListClusterHostsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListClusterHostsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListClusterHostsRequest>, I>>(base?: I): ListClusterHostsRequest {
    return ListClusterHostsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClusterHostsRequest>, I>>(object: I): ListClusterHostsRequest {
    const message = createBaseListClusterHostsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterHostsRequest.$type, ListClusterHostsRequest);

function createBaseListClusterHostsResponse(): ListClusterHostsResponse {
  return { $type: "yandex.cloud.dataproc.v1.ListClusterHostsResponse", hosts: [], nextPageToken: "" };
}

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.dataproc.v1.ListClusterHostsResponse" as const,

  encode(message: ListClusterHostsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hosts) {
      Host.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterHostsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterHostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hosts.push(Host.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterHostsResponse {
    return {
      $type: ListClusterHostsResponse.$type,
      hosts: globalThis.Array.isArray(object?.hosts) ? object.hosts.map((e: any) => Host.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClusterHostsResponse): unknown {
    const obj: any = {};
    if (message.hosts?.length) {
      obj.hosts = message.hosts.map((e) => Host.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListClusterHostsResponse>, I>>(base?: I): ListClusterHostsResponse {
    return ListClusterHostsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListClusterHostsResponse>, I>>(object: I): ListClusterHostsResponse {
    const message = createBaseListClusterHostsResponse();
    message.hosts = object.hosts?.map((e) => Host.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterHostsResponse.$type, ListClusterHostsResponse);

function createBaseListUILinksRequest(): ListUILinksRequest {
  return { $type: "yandex.cloud.dataproc.v1.ListUILinksRequest", clusterId: "" };
}

export const ListUILinksRequest = {
  $type: "yandex.cloud.dataproc.v1.ListUILinksRequest" as const,

  encode(message: ListUILinksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUILinksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUILinksRequest();
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

  fromJSON(object: any): ListUILinksRequest {
    return {
      $type: ListUILinksRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: ListUILinksRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUILinksRequest>, I>>(base?: I): ListUILinksRequest {
    return ListUILinksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUILinksRequest>, I>>(object: I): ListUILinksRequest {
    const message = createBaseListUILinksRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListUILinksRequest.$type, ListUILinksRequest);

function createBaseUILink(): UILink {
  return { $type: "yandex.cloud.dataproc.v1.UILink", name: "", url: "" };
}

export const UILink = {
  $type: "yandex.cloud.dataproc.v1.UILink" as const,

  encode(message: UILink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UILink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUILink();
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

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UILink {
    return {
      $type: UILink.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
    };
  },

  toJSON(message: UILink): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UILink>, I>>(base?: I): UILink {
    return UILink.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UILink>, I>>(object: I): UILink {
    const message = createBaseUILink();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

messageTypeRegistry.set(UILink.$type, UILink);

function createBaseListUILinksResponse(): ListUILinksResponse {
  return { $type: "yandex.cloud.dataproc.v1.ListUILinksResponse", links: [] };
}

export const ListUILinksResponse = {
  $type: "yandex.cloud.dataproc.v1.ListUILinksResponse" as const,

  encode(message: ListUILinksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.links) {
      UILink.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUILinksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUILinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.links.push(UILink.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUILinksResponse {
    return {
      $type: ListUILinksResponse.$type,
      links: globalThis.Array.isArray(object?.links) ? object.links.map((e: any) => UILink.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListUILinksResponse): unknown {
    const obj: any = {};
    if (message.links?.length) {
      obj.links = message.links.map((e) => UILink.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUILinksResponse>, I>>(base?: I): ListUILinksResponse {
    return ListUILinksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUILinksResponse>, I>>(object: I): ListUILinksResponse {
    const message = createBaseListUILinksResponse();
    message.links = object.links?.map((e) => UILink.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListUILinksResponse.$type, ListUILinksResponse);

/** A set of methods for managing Data Proc clusters. */
export type ClusterServiceService = typeof ClusterServiceService;
export const ClusterServiceService = {
  /**
   * Returns the specified cluster.
   *
   * To get the list of all available clusters, make a [ClusterService.List] request.
   */
  get: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) => Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /** Retrieves the list of clusters in the specified folder. */
  list: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) => Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) => Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) => Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the configuration of the specified cluster. */
  update: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) => Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified cluster. */
  delete: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) => Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified cluster. */
  start: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) => Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified cluster. */
  stop: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) => Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified cluster. */
  listOperations: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
  },
  /** Retrieves the list of hosts in the specified cluster. */
  listHosts: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/ListHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterHostsRequest) => Buffer.from(ListClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterHostsRequest.decode(value),
    responseSerialize: (value: ListClusterHostsResponse) =>
      Buffer.from(ListClusterHostsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterHostsResponse.decode(value),
  },
  /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
  listUiLinks: {
    path: "/yandex.cloud.dataproc.v1.ClusterService/ListUILinks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListUILinksRequest) => Buffer.from(ListUILinksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListUILinksRequest.decode(value),
    responseSerialize: (value: ListUILinksResponse) => Buffer.from(ListUILinksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListUILinksResponse.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified cluster.
   *
   * To get the list of all available clusters, make a [ClusterService.List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /** Retrieves the list of clusters in the specified folder. */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the configuration of the specified cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Starts the specified cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stops the specified cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Lists operations for the specified cluster. */
  listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
  /** Retrieves the list of hosts in the specified cluster. */
  listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
  listUiLinks: handleUnaryCall<ListUILinksRequest, ListUILinksResponse>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified cluster.
   *
   * To get the list of all available clusters, make a [ClusterService.List] request.
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
  /** Retrieves the list of clusters in the specified folder. */
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
  /** Creates a cluster in the specified folder. */
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
  /** Updates the configuration of the specified cluster. */
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
  /** Deletes the specified cluster. */
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
  /** Starts the specified cluster. */
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
  /** Stops the specified cluster. */
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
  /** Lists operations for the specified cluster. */
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
  /** Retrieves the list of hosts in the specified cluster. */
  listHosts(
    request: ListClusterHostsRequest,
    callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
  ): ClientUnaryCall;
  listHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
  ): ClientUnaryCall;
  listHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
  listUiLinks(
    request: ListUILinksRequest,
    callback: (error: ServiceError | null, response: ListUILinksResponse) => void,
  ): ClientUnaryCall;
  listUiLinks(
    request: ListUILinksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListUILinksResponse) => void,
  ): ClientUnaryCall;
  listUiLinks(
    request: ListUILinksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListUILinksResponse) => void,
  ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.dataproc.v1.ClusterService",
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
