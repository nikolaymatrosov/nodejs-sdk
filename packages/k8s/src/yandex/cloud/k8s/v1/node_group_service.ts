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
import { Node, NodeTemplate, Taint } from "./node";
import {
  DeployPolicy,
  NodeGroup,
  NodeGroupAllocationPolicy,
  NodeGroupMaintenancePolicy,
  ScalePolicy,
} from "./node_group";
import { UpdateVersionSpec } from "./version";

export const protobufPackage = "yandex.cloud.k8s.v1";

export interface GetNodeGroupRequest {
  $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest";
  /**
   * ID of the node group to return.
   * To get the node group ID use a [NodeGroupService.List] request.
   */
  nodeGroupId: string;
}

export interface ListNodeGroupsRequest {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest";
  /**
   * ID of the folder to list node groups in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListNodeGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListNodeGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [NodeGroup.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListNodeGroupsResponse {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse";
  /** List of node groups. */
  nodeGroups: NodeGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNodeGroupsRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListNodeGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListNodeGroupNodesRequest {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest";
  /**
   * ID of the node group to list.
   * To get the node group ID use a [NodeGroupService.List] request.
   */
  nodeGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListNodeGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListNodeGroupNodesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListNodeGroupNodesResponse {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse";
  /** List of nodes. */
  nodes: Node[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNodeGroupNodesRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListNodeGroupNodesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteNodeGroupRequest {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest";
  /**
   * ID of the node group to delete.
   * To get node group ID use a [NodeGroupService.List] request.
   */
  nodeGroupId: string;
}

export interface DeleteNodeGroupMetadata {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata";
  /** ID of the node group that is being deleted. */
  nodeGroupId: string;
}

export interface UpdateNodeGroupRequest {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest";
  /**
   * ID of the node group to update.
   * To get the node group ID use a [NodeGroupService.List] request.
   */
  nodeGroupId: string;
  /** Field mask that specifies which fields of the node group are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /**
   * Name of the node group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the node group. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /**
   * Node template for the node group.
   * Change may trigger nodes rolling reboot or recreate.
   */
  nodeTemplate?:
    | NodeTemplate
    | undefined;
  /** Scale policy of the node group. */
  scalePolicy?:
    | ScalePolicy
    | undefined;
  /** Allocation policy of the node group by the zones and regions. */
  allocationPolicy?:
    | NodeGroupAllocationPolicy
    | undefined;
  /**
   * Deploy policy according to which the updates are rolled out. If not specified,
   * the default is used.
   */
  deployPolicy?:
    | DeployPolicy
    | undefined;
  /** Version of Kubernetes components that runs on the nodes. */
  version?:
    | UpdateVersionSpec
    | undefined;
  /** Maintenance policy of the node group. */
  maintenancePolicy?:
    | NodeGroupMaintenancePolicy
    | undefined;
  /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
  allowedUnsafeSysctls: string[];
  /** Taints that are applied to the nodes of the node group at creation time. */
  nodeTaints: Taint[];
  /** Labels that are assigned to the nodes of the node group at creation time. */
  nodeLabels: { [key: string]: string };
}

export interface UpdateNodeGroupRequest_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateNodeGroupRequest_NodeLabelsEntry {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry";
  key: string;
  value: string;
}

export interface UpdateNodeGroupMetadata {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata";
  /** ID of the Node group that is being updated. */
  nodeGroupId: string;
}

export interface CreateNodeGroupRequest {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest";
  /**
   * ID of the Kubernetes cluster to create a node group in.
   * To get the Kubernetes cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the node group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the node group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Node template for creating the node group. */
  nodeTemplate?:
    | NodeTemplate
    | undefined;
  /** Scale policy of the node group. */
  scalePolicy?:
    | ScalePolicy
    | undefined;
  /** Allocation policy of the node group by the zones and regions. */
  allocationPolicy?:
    | NodeGroupAllocationPolicy
    | undefined;
  /**
   * Deploy policy according to which the updates are rolled out. If not specified,
   * the default is used.
   */
  deployPolicy?:
    | DeployPolicy
    | undefined;
  /** Version of Kubernetes components that runs on the nodes. */
  version: string;
  /** Maintenance policy of the node group. */
  maintenancePolicy?:
    | NodeGroupMaintenancePolicy
    | undefined;
  /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
  allowedUnsafeSysctls: string[];
  /** Taints that are applied to the nodes of the node group at creation time. */
  nodeTaints: Taint[];
  /** Labels that are assigned to the nodes of the node group at creation time. */
  nodeLabels: { [key: string]: string };
}

export interface CreateNodeGroupRequest_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateNodeGroupRequest_NodeLabelsEntry {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry";
  key: string;
  value: string;
}

export interface CreateNodeGroupMetadata {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata";
  /** ID of the node group that is being created. */
  nodeGroupId: string;
}

export interface AutoUpgradeNodeGroupMetadata {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata";
  /** ID of the node group that is being auto upgraded. */
  nodeGroupId: string;
}

export interface ListNodeGroupOperationsRequest {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest";
  /** ID of the node group to list operations for. */
  nodeGroupId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListNodeGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListNodeGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [NodeGroup.name] field.
   */
  filter: string;
}

export interface ListNodeGroupOperationsResponse {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse";
  /** List of operations for the specified node group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNodeGroupOperationsRequest.page_size], use the `next_page_token` as the value
   * for the [ListNodeGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetNodeGroupRequest(): GetNodeGroupRequest {
  return { $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest", nodeGroupId: "" };
}

export const GetNodeGroupRequest = {
  $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest" as const,

  encode(message: GetNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNodeGroupRequest {
    return {
      $type: GetNodeGroupRequest.$type,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
    };
  },

  toJSON(message: GetNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetNodeGroupRequest>, I>>(base?: I): GetNodeGroupRequest {
    return GetNodeGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetNodeGroupRequest>, I>>(object: I): GetNodeGroupRequest {
    const message = createBaseGetNodeGroupRequest();
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetNodeGroupRequest.$type, GetNodeGroupRequest);

function createBaseListNodeGroupsRequest(): ListNodeGroupsRequest {
  return { $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest", folderId: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListNodeGroupsRequest = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest" as const,

  encode(message: ListNodeGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNodeGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNodeGroupsRequest();
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

  fromJSON(object: any): ListNodeGroupsRequest {
    return {
      $type: ListNodeGroupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListNodeGroupsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListNodeGroupsRequest>, I>>(base?: I): ListNodeGroupsRequest {
    return ListNodeGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNodeGroupsRequest>, I>>(object: I): ListNodeGroupsRequest {
    const message = createBaseListNodeGroupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNodeGroupsRequest.$type, ListNodeGroupsRequest);

function createBaseListNodeGroupsResponse(): ListNodeGroupsResponse {
  return { $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse", nodeGroups: [], nextPageToken: "" };
}

export const ListNodeGroupsResponse = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse" as const,

  encode(message: ListNodeGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodeGroups) {
      NodeGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNodeGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNodeGroupsResponse();
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

  fromJSON(object: any): ListNodeGroupsResponse {
    return {
      $type: ListNodeGroupsResponse.$type,
      nodeGroups: globalThis.Array.isArray(object?.nodeGroups)
        ? object.nodeGroups.map((e: any) => NodeGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListNodeGroupsResponse): unknown {
    const obj: any = {};
    if (message.nodeGroups?.length) {
      obj.nodeGroups = message.nodeGroups.map((e) => NodeGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNodeGroupsResponse>, I>>(base?: I): ListNodeGroupsResponse {
    return ListNodeGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNodeGroupsResponse>, I>>(object: I): ListNodeGroupsResponse {
    const message = createBaseListNodeGroupsResponse();
    message.nodeGroups = object.nodeGroups?.map((e) => NodeGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNodeGroupsResponse.$type, ListNodeGroupsResponse);

function createBaseListNodeGroupNodesRequest(): ListNodeGroupNodesRequest {
  return { $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest", nodeGroupId: "", pageSize: 0, pageToken: "" };
}

export const ListNodeGroupNodesRequest = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest" as const,

  encode(message: ListNodeGroupNodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNodeGroupNodesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNodeGroupNodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroupId = reader.string();
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

  fromJSON(object: any): ListNodeGroupNodesRequest {
    return {
      $type: ListNodeGroupNodesRequest.$type,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListNodeGroupNodesRequest): unknown {
    const obj: any = {};
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNodeGroupNodesRequest>, I>>(base?: I): ListNodeGroupNodesRequest {
    return ListNodeGroupNodesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNodeGroupNodesRequest>, I>>(object: I): ListNodeGroupNodesRequest {
    const message = createBaseListNodeGroupNodesRequest();
    message.nodeGroupId = object.nodeGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNodeGroupNodesRequest.$type, ListNodeGroupNodesRequest);

function createBaseListNodeGroupNodesResponse(): ListNodeGroupNodesResponse {
  return { $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse", nodes: [], nextPageToken: "" };
}

export const ListNodeGroupNodesResponse = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse" as const,

  encode(message: ListNodeGroupNodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNodeGroupNodesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNodeGroupNodesResponse();
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

  fromJSON(object: any): ListNodeGroupNodesResponse {
    return {
      $type: ListNodeGroupNodesResponse.$type,
      nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListNodeGroupNodesResponse): unknown {
    const obj: any = {};
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => Node.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNodeGroupNodesResponse>, I>>(base?: I): ListNodeGroupNodesResponse {
    return ListNodeGroupNodesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNodeGroupNodesResponse>, I>>(object: I): ListNodeGroupNodesResponse {
    const message = createBaseListNodeGroupNodesResponse();
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNodeGroupNodesResponse.$type, ListNodeGroupNodesResponse);

function createBaseDeleteNodeGroupRequest(): DeleteNodeGroupRequest {
  return { $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest", nodeGroupId: "" };
}

export const DeleteNodeGroupRequest = {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest" as const,

  encode(message: DeleteNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteNodeGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteNodeGroupRequest {
    return {
      $type: DeleteNodeGroupRequest.$type,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
    };
  },

  toJSON(message: DeleteNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteNodeGroupRequest>, I>>(base?: I): DeleteNodeGroupRequest {
    return DeleteNodeGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteNodeGroupRequest>, I>>(object: I): DeleteNodeGroupRequest {
    const message = createBaseDeleteNodeGroupRequest();
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNodeGroupRequest.$type, DeleteNodeGroupRequest);

function createBaseDeleteNodeGroupMetadata(): DeleteNodeGroupMetadata {
  return { $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata", nodeGroupId: "" };
}

export const DeleteNodeGroupMetadata = {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata" as const,

  encode(message: DeleteNodeGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteNodeGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteNodeGroupMetadata {
    return {
      $type: DeleteNodeGroupMetadata.$type,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
    };
  },

  toJSON(message: DeleteNodeGroupMetadata): unknown {
    const obj: any = {};
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteNodeGroupMetadata>, I>>(base?: I): DeleteNodeGroupMetadata {
    return DeleteNodeGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteNodeGroupMetadata>, I>>(object: I): DeleteNodeGroupMetadata {
    const message = createBaseDeleteNodeGroupMetadata();
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNodeGroupMetadata.$type, DeleteNodeGroupMetadata);

function createBaseUpdateNodeGroupRequest(): UpdateNodeGroupRequest {
  return {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest",
    nodeGroupId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    nodeTemplate: undefined,
    scalePolicy: undefined,
    allocationPolicy: undefined,
    deployPolicy: undefined,
    version: undefined,
    maintenancePolicy: undefined,
    allowedUnsafeSysctls: [],
    nodeTaints: [],
    nodeLabels: {},
  };
}

export const UpdateNodeGroupRequest = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest" as const,

  encode(message: UpdateNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
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
      UpdateNodeGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.nodeTemplate !== undefined) {
      NodeTemplate.encode(message.nodeTemplate, writer.uint32(66).fork()).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      NodeGroupAllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
    }
    if (message.deployPolicy !== undefined) {
      DeployPolicy.encode(message.deployPolicy, writer.uint32(122).fork()).ldelim();
    }
    if (message.version !== undefined) {
      UpdateVersionSpec.encode(message.version, writer.uint32(82).fork()).ldelim();
    }
    if (message.maintenancePolicy !== undefined) {
      NodeGroupMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.allowedUnsafeSysctls) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.nodeTaints) {
      Taint.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    Object.entries(message.nodeLabels).forEach(([key, value]) => {
      UpdateNodeGroupRequest_NodeLabelsEntry.encode({
        $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(114).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNodeGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroupId = reader.string();
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

          const entry5 = UpdateNodeGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.nodeTemplate = NodeTemplate.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.allocationPolicy = NodeGroupAllocationPolicy.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.version = UpdateVersionSpec.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.maintenancePolicy = NodeGroupMaintenancePolicy.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.allowedUnsafeSysctls.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.nodeTaints.push(Taint.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          const entry14 = UpdateNodeGroupRequest_NodeLabelsEntry.decode(reader, reader.uint32());
          if (entry14.value !== undefined) {
            message.nodeLabels[entry14.key] = entry14.value;
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

  fromJSON(object: any): UpdateNodeGroupRequest {
    return {
      $type: UpdateNodeGroupRequest.$type,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      nodeTemplate: isSet(object.nodeTemplate) ? NodeTemplate.fromJSON(object.nodeTemplate) : undefined,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
      allocationPolicy: isSet(object.allocationPolicy)
        ? NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy)
        : undefined,
      deployPolicy: isSet(object.deployPolicy) ? DeployPolicy.fromJSON(object.deployPolicy) : undefined,
      version: isSet(object.version) ? UpdateVersionSpec.fromJSON(object.version) : undefined,
      maintenancePolicy: isSet(object.maintenancePolicy)
        ? NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy)
        : undefined,
      allowedUnsafeSysctls: globalThis.Array.isArray(object?.allowedUnsafeSysctls)
        ? object.allowedUnsafeSysctls.map((e: any) => globalThis.String(e))
        : [],
      nodeTaints: globalThis.Array.isArray(object?.nodeTaints)
        ? object.nodeTaints.map((e: any) => Taint.fromJSON(e))
        : [],
      nodeLabels: isObject(object.nodeLabels)
        ? Object.entries(object.nodeLabels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpdateNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
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
    if (message.nodeTemplate !== undefined) {
      obj.nodeTemplate = NodeTemplate.toJSON(message.nodeTemplate);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    if (message.allocationPolicy !== undefined) {
      obj.allocationPolicy = NodeGroupAllocationPolicy.toJSON(message.allocationPolicy);
    }
    if (message.deployPolicy !== undefined) {
      obj.deployPolicy = DeployPolicy.toJSON(message.deployPolicy);
    }
    if (message.version !== undefined) {
      obj.version = UpdateVersionSpec.toJSON(message.version);
    }
    if (message.maintenancePolicy !== undefined) {
      obj.maintenancePolicy = NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy);
    }
    if (message.allowedUnsafeSysctls?.length) {
      obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls;
    }
    if (message.nodeTaints?.length) {
      obj.nodeTaints = message.nodeTaints.map((e) => Taint.toJSON(e));
    }
    if (message.nodeLabels) {
      const entries = Object.entries(message.nodeLabels);
      if (entries.length > 0) {
        obj.nodeLabels = {};
        entries.forEach(([k, v]) => {
          obj.nodeLabels[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateNodeGroupRequest>, I>>(base?: I): UpdateNodeGroupRequest {
    return UpdateNodeGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateNodeGroupRequest>, I>>(object: I): UpdateNodeGroupRequest {
    const message = createBaseUpdateNodeGroupRequest();
    message.nodeGroupId = object.nodeGroupId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.nodeTemplate = (object.nodeTemplate !== undefined && object.nodeTemplate !== null)
      ? NodeTemplate.fromPartial(object.nodeTemplate)
      : undefined;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    message.allocationPolicy = (object.allocationPolicy !== undefined && object.allocationPolicy !== null)
      ? NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy)
      : undefined;
    message.deployPolicy = (object.deployPolicy !== undefined && object.deployPolicy !== null)
      ? DeployPolicy.fromPartial(object.deployPolicy)
      : undefined;
    message.version = (object.version !== undefined && object.version !== null)
      ? UpdateVersionSpec.fromPartial(object.version)
      : undefined;
    message.maintenancePolicy = (object.maintenancePolicy !== undefined && object.maintenancePolicy !== null)
      ? NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy)
      : undefined;
    message.allowedUnsafeSysctls = object.allowedUnsafeSysctls?.map((e) => e) || [];
    message.nodeTaints = object.nodeTaints?.map((e) => Taint.fromPartial(e)) || [];
    message.nodeLabels = Object.entries(object.nodeLabels ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

messageTypeRegistry.set(UpdateNodeGroupRequest.$type, UpdateNodeGroupRequest);

function createBaseUpdateNodeGroupRequest_LabelsEntry(): UpdateNodeGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateNodeGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry" as const,

  encode(message: UpdateNodeGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNodeGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNodeGroupRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateNodeGroupRequest_LabelsEntry {
    return {
      $type: UpdateNodeGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateNodeGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateNodeGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateNodeGroupRequest_LabelsEntry {
    return UpdateNodeGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateNodeGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateNodeGroupRequest_LabelsEntry {
    const message = createBaseUpdateNodeGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateNodeGroupRequest_LabelsEntry.$type, UpdateNodeGroupRequest_LabelsEntry);

function createBaseUpdateNodeGroupRequest_NodeLabelsEntry(): UpdateNodeGroupRequest_NodeLabelsEntry {
  return { $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry", key: "", value: "" };
}

export const UpdateNodeGroupRequest_NodeLabelsEntry = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry" as const,

  encode(message: UpdateNodeGroupRequest_NodeLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNodeGroupRequest_NodeLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNodeGroupRequest_NodeLabelsEntry();
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

  fromJSON(object: any): UpdateNodeGroupRequest_NodeLabelsEntry {
    return {
      $type: UpdateNodeGroupRequest_NodeLabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateNodeGroupRequest_NodeLabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateNodeGroupRequest_NodeLabelsEntry>, I>>(
    base?: I,
  ): UpdateNodeGroupRequest_NodeLabelsEntry {
    return UpdateNodeGroupRequest_NodeLabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateNodeGroupRequest_NodeLabelsEntry>, I>>(
    object: I,
  ): UpdateNodeGroupRequest_NodeLabelsEntry {
    const message = createBaseUpdateNodeGroupRequest_NodeLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateNodeGroupRequest_NodeLabelsEntry.$type, UpdateNodeGroupRequest_NodeLabelsEntry);

function createBaseUpdateNodeGroupMetadata(): UpdateNodeGroupMetadata {
  return { $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata", nodeGroupId: "" };
}

export const UpdateNodeGroupMetadata = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata" as const,

  encode(message: UpdateNodeGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNodeGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateNodeGroupMetadata {
    return {
      $type: UpdateNodeGroupMetadata.$type,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
    };
  },

  toJSON(message: UpdateNodeGroupMetadata): unknown {
    const obj: any = {};
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateNodeGroupMetadata>, I>>(base?: I): UpdateNodeGroupMetadata {
    return UpdateNodeGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateNodeGroupMetadata>, I>>(object: I): UpdateNodeGroupMetadata {
    const message = createBaseUpdateNodeGroupMetadata();
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateNodeGroupMetadata.$type, UpdateNodeGroupMetadata);

function createBaseCreateNodeGroupRequest(): CreateNodeGroupRequest {
  return {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest",
    clusterId: "",
    name: "",
    description: "",
    labels: {},
    nodeTemplate: undefined,
    scalePolicy: undefined,
    allocationPolicy: undefined,
    deployPolicy: undefined,
    version: "",
    maintenancePolicy: undefined,
    allowedUnsafeSysctls: [],
    nodeTaints: [],
    nodeLabels: {},
  };
}

export const CreateNodeGroupRequest = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest" as const,

  encode(message: CreateNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateNodeGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.nodeTemplate !== undefined) {
      NodeTemplate.encode(message.nodeTemplate, writer.uint32(42).fork()).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      NodeGroupAllocationPolicy.encode(message.allocationPolicy, writer.uint32(58).fork()).ldelim();
    }
    if (message.deployPolicy !== undefined) {
      DeployPolicy.encode(message.deployPolicy, writer.uint32(106).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(66).string(message.version);
    }
    if (message.maintenancePolicy !== undefined) {
      NodeGroupMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.allowedUnsafeSysctls) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.nodeTaints) {
      Taint.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    Object.entries(message.nodeLabels).forEach(([key, value]) => {
      CreateNodeGroupRequest_NodeLabelsEntry.encode({
        $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(98).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNodeGroupRequest();
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

          const entry4 = CreateNodeGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nodeTemplate = NodeTemplate.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.allocationPolicy = NodeGroupAllocationPolicy.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.version = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.maintenancePolicy = NodeGroupMaintenancePolicy.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.allowedUnsafeSysctls.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.nodeTaints.push(Taint.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          const entry12 = CreateNodeGroupRequest_NodeLabelsEntry.decode(reader, reader.uint32());
          if (entry12.value !== undefined) {
            message.nodeLabels[entry12.key] = entry12.value;
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

  fromJSON(object: any): CreateNodeGroupRequest {
    return {
      $type: CreateNodeGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      nodeTemplate: isSet(object.nodeTemplate) ? NodeTemplate.fromJSON(object.nodeTemplate) : undefined,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
      allocationPolicy: isSet(object.allocationPolicy)
        ? NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy)
        : undefined,
      deployPolicy: isSet(object.deployPolicy) ? DeployPolicy.fromJSON(object.deployPolicy) : undefined,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      maintenancePolicy: isSet(object.maintenancePolicy)
        ? NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy)
        : undefined,
      allowedUnsafeSysctls: globalThis.Array.isArray(object?.allowedUnsafeSysctls)
        ? object.allowedUnsafeSysctls.map((e: any) => globalThis.String(e))
        : [],
      nodeTaints: globalThis.Array.isArray(object?.nodeTaints)
        ? object.nodeTaints.map((e: any) => Taint.fromJSON(e))
        : [],
      nodeLabels: isObject(object.nodeLabels)
        ? Object.entries(object.nodeLabels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
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
    if (message.nodeTemplate !== undefined) {
      obj.nodeTemplate = NodeTemplate.toJSON(message.nodeTemplate);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    if (message.allocationPolicy !== undefined) {
      obj.allocationPolicy = NodeGroupAllocationPolicy.toJSON(message.allocationPolicy);
    }
    if (message.deployPolicy !== undefined) {
      obj.deployPolicy = DeployPolicy.toJSON(message.deployPolicy);
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.maintenancePolicy !== undefined) {
      obj.maintenancePolicy = NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy);
    }
    if (message.allowedUnsafeSysctls?.length) {
      obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls;
    }
    if (message.nodeTaints?.length) {
      obj.nodeTaints = message.nodeTaints.map((e) => Taint.toJSON(e));
    }
    if (message.nodeLabels) {
      const entries = Object.entries(message.nodeLabels);
      if (entries.length > 0) {
        obj.nodeLabels = {};
        entries.forEach(([k, v]) => {
          obj.nodeLabels[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNodeGroupRequest>, I>>(base?: I): CreateNodeGroupRequest {
    return CreateNodeGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateNodeGroupRequest>, I>>(object: I): CreateNodeGroupRequest {
    const message = createBaseCreateNodeGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.nodeTemplate = (object.nodeTemplate !== undefined && object.nodeTemplate !== null)
      ? NodeTemplate.fromPartial(object.nodeTemplate)
      : undefined;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    message.allocationPolicy = (object.allocationPolicy !== undefined && object.allocationPolicy !== null)
      ? NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy)
      : undefined;
    message.deployPolicy = (object.deployPolicy !== undefined && object.deployPolicy !== null)
      ? DeployPolicy.fromPartial(object.deployPolicy)
      : undefined;
    message.version = object.version ?? "";
    message.maintenancePolicy = (object.maintenancePolicy !== undefined && object.maintenancePolicy !== null)
      ? NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy)
      : undefined;
    message.allowedUnsafeSysctls = object.allowedUnsafeSysctls?.map((e) => e) || [];
    message.nodeTaints = object.nodeTaints?.map((e) => Taint.fromPartial(e)) || [];
    message.nodeLabels = Object.entries(object.nodeLabels ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

messageTypeRegistry.set(CreateNodeGroupRequest.$type, CreateNodeGroupRequest);

function createBaseCreateNodeGroupRequest_LabelsEntry(): CreateNodeGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry", key: "", value: "" };
}

export const CreateNodeGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry" as const,

  encode(message: CreateNodeGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNodeGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNodeGroupRequest_LabelsEntry();
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

  fromJSON(object: any): CreateNodeGroupRequest_LabelsEntry {
    return {
      $type: CreateNodeGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateNodeGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNodeGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateNodeGroupRequest_LabelsEntry {
    return CreateNodeGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateNodeGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateNodeGroupRequest_LabelsEntry {
    const message = createBaseCreateNodeGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateNodeGroupRequest_LabelsEntry.$type, CreateNodeGroupRequest_LabelsEntry);

function createBaseCreateNodeGroupRequest_NodeLabelsEntry(): CreateNodeGroupRequest_NodeLabelsEntry {
  return { $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry", key: "", value: "" };
}

export const CreateNodeGroupRequest_NodeLabelsEntry = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry" as const,

  encode(message: CreateNodeGroupRequest_NodeLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNodeGroupRequest_NodeLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNodeGroupRequest_NodeLabelsEntry();
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

  fromJSON(object: any): CreateNodeGroupRequest_NodeLabelsEntry {
    return {
      $type: CreateNodeGroupRequest_NodeLabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateNodeGroupRequest_NodeLabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNodeGroupRequest_NodeLabelsEntry>, I>>(
    base?: I,
  ): CreateNodeGroupRequest_NodeLabelsEntry {
    return CreateNodeGroupRequest_NodeLabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateNodeGroupRequest_NodeLabelsEntry>, I>>(
    object: I,
  ): CreateNodeGroupRequest_NodeLabelsEntry {
    const message = createBaseCreateNodeGroupRequest_NodeLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateNodeGroupRequest_NodeLabelsEntry.$type, CreateNodeGroupRequest_NodeLabelsEntry);

function createBaseCreateNodeGroupMetadata(): CreateNodeGroupMetadata {
  return { $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata", nodeGroupId: "" };
}

export const CreateNodeGroupMetadata = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata" as const,

  encode(message: CreateNodeGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNodeGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateNodeGroupMetadata {
    return {
      $type: CreateNodeGroupMetadata.$type,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
    };
  },

  toJSON(message: CreateNodeGroupMetadata): unknown {
    const obj: any = {};
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNodeGroupMetadata>, I>>(base?: I): CreateNodeGroupMetadata {
    return CreateNodeGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateNodeGroupMetadata>, I>>(object: I): CreateNodeGroupMetadata {
    const message = createBaseCreateNodeGroupMetadata();
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateNodeGroupMetadata.$type, CreateNodeGroupMetadata);

function createBaseAutoUpgradeNodeGroupMetadata(): AutoUpgradeNodeGroupMetadata {
  return { $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata", nodeGroupId: "" };
}

export const AutoUpgradeNodeGroupMetadata = {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata" as const,

  encode(message: AutoUpgradeNodeGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AutoUpgradeNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoUpgradeNodeGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoUpgradeNodeGroupMetadata {
    return {
      $type: AutoUpgradeNodeGroupMetadata.$type,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
    };
  },

  toJSON(message: AutoUpgradeNodeGroupMetadata): unknown {
    const obj: any = {};
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AutoUpgradeNodeGroupMetadata>, I>>(base?: I): AutoUpgradeNodeGroupMetadata {
    return AutoUpgradeNodeGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AutoUpgradeNodeGroupMetadata>, I>>(object: I): AutoUpgradeNodeGroupMetadata {
    const message = createBaseAutoUpgradeNodeGroupMetadata();
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AutoUpgradeNodeGroupMetadata.$type, AutoUpgradeNodeGroupMetadata);

function createBaseListNodeGroupOperationsRequest(): ListNodeGroupOperationsRequest {
  return {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest",
    nodeGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListNodeGroupOperationsRequest = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest" as const,

  encode(message: ListNodeGroupOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNodeGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNodeGroupOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeGroupId = reader.string();
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

  fromJSON(object: any): ListNodeGroupOperationsRequest {
    return {
      $type: ListNodeGroupOperationsRequest.$type,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListNodeGroupOperationsRequest): unknown {
    const obj: any = {};
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
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

  create<I extends Exact<DeepPartial<ListNodeGroupOperationsRequest>, I>>(base?: I): ListNodeGroupOperationsRequest {
    return ListNodeGroupOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNodeGroupOperationsRequest>, I>>(
    object: I,
  ): ListNodeGroupOperationsRequest {
    const message = createBaseListNodeGroupOperationsRequest();
    message.nodeGroupId = object.nodeGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNodeGroupOperationsRequest.$type, ListNodeGroupOperationsRequest);

function createBaseListNodeGroupOperationsResponse(): ListNodeGroupOperationsResponse {
  return { $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListNodeGroupOperationsResponse = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse" as const,

  encode(message: ListNodeGroupOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNodeGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNodeGroupOperationsResponse();
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

  fromJSON(object: any): ListNodeGroupOperationsResponse {
    return {
      $type: ListNodeGroupOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListNodeGroupOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNodeGroupOperationsResponse>, I>>(base?: I): ListNodeGroupOperationsResponse {
    return ListNodeGroupOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNodeGroupOperationsResponse>, I>>(
    object: I,
  ): ListNodeGroupOperationsResponse {
    const message = createBaseListNodeGroupOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNodeGroupOperationsResponse.$type, ListNodeGroupOperationsResponse);

/** A set of methods for managing node groups. */
export type NodeGroupServiceService = typeof NodeGroupServiceService;
export const NodeGroupServiceService = {
  /**
   * Returns the specified node group.
   *
   * To get the list of available node group, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetNodeGroupRequest) => Buffer.from(GetNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetNodeGroupRequest.decode(value),
    responseSerialize: (value: NodeGroup) => Buffer.from(NodeGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => NodeGroup.decode(value),
  },
  /** Retrieves the list of node group in the specified Kubernetes cluster. */
  list: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNodeGroupsRequest) => Buffer.from(ListNodeGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListNodeGroupsRequest.decode(value),
    responseSerialize: (value: ListNodeGroupsResponse) => Buffer.from(ListNodeGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListNodeGroupsResponse.decode(value),
  },
  /** Creates a node group in the specified Kubernetes cluster. */
  create: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateNodeGroupRequest) => Buffer.from(CreateNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified node group. */
  update: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateNodeGroupRequest) => Buffer.from(UpdateNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified node group. */
  delete: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteNodeGroupRequest) => Buffer.from(DeleteNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified node group. */
  listOperations: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNodeGroupOperationsRequest) =>
      Buffer.from(ListNodeGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListNodeGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListNodeGroupOperationsResponse) =>
      Buffer.from(ListNodeGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListNodeGroupOperationsResponse.decode(value),
  },
  /** Retrieves the list of nodes in the specified Kubernetes cluster. */
  listNodes: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/ListNodes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNodeGroupNodesRequest) =>
      Buffer.from(ListNodeGroupNodesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListNodeGroupNodesRequest.decode(value),
    responseSerialize: (value: ListNodeGroupNodesResponse) =>
      Buffer.from(ListNodeGroupNodesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListNodeGroupNodesResponse.decode(value),
  },
} as const;

export interface NodeGroupServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified node group.
   *
   * To get the list of available node group, make a [List] request.
   */
  get: handleUnaryCall<GetNodeGroupRequest, NodeGroup>;
  /** Retrieves the list of node group in the specified Kubernetes cluster. */
  list: handleUnaryCall<ListNodeGroupsRequest, ListNodeGroupsResponse>;
  /** Creates a node group in the specified Kubernetes cluster. */
  create: handleUnaryCall<CreateNodeGroupRequest, Operation>;
  /** Updates the specified node group. */
  update: handleUnaryCall<UpdateNodeGroupRequest, Operation>;
  /** Deletes the specified node group. */
  delete: handleUnaryCall<DeleteNodeGroupRequest, Operation>;
  /** Lists operations for the specified node group. */
  listOperations: handleUnaryCall<ListNodeGroupOperationsRequest, ListNodeGroupOperationsResponse>;
  /** Retrieves the list of nodes in the specified Kubernetes cluster. */
  listNodes: handleUnaryCall<ListNodeGroupNodesRequest, ListNodeGroupNodesResponse>;
}

export interface NodeGroupServiceClient extends Client {
  /**
   * Returns the specified node group.
   *
   * To get the list of available node group, make a [List] request.
   */
  get(
    request: GetNodeGroupRequest,
    callback: (error: ServiceError | null, response: NodeGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: NodeGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: NodeGroup) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of node group in the specified Kubernetes cluster. */
  list(
    request: ListNodeGroupsRequest,
    callback: (error: ServiceError | null, response: ListNodeGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListNodeGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListNodeGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListNodeGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListNodeGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a node group in the specified Kubernetes cluster. */
  create(
    request: CreateNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified node group. */
  update(
    request: UpdateNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified node group. */
  delete(
    request: DeleteNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified node group. */
  listOperations(
    request: ListNodeGroupOperationsRequest,
    callback: (error: ServiceError | null, response: ListNodeGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListNodeGroupOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListNodeGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListNodeGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListNodeGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of nodes in the specified Kubernetes cluster. */
  listNodes(
    request: ListNodeGroupNodesRequest,
    callback: (error: ServiceError | null, response: ListNodeGroupNodesResponse) => void,
  ): ClientUnaryCall;
  listNodes(
    request: ListNodeGroupNodesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListNodeGroupNodesResponse) => void,
  ): ClientUnaryCall;
  listNodes(
    request: ListNodeGroupNodesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListNodeGroupNodesResponse) => void,
  ): ClientUnaryCall;
}

export const NodeGroupServiceClient = makeGenericClientConstructor(
  NodeGroupServiceService,
  "yandex.cloud.k8s.v1.NodeGroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): NodeGroupServiceClient;
  service: typeof NodeGroupServiceService;
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
