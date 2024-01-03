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
import {
  AllocationPolicy,
  ApplicationLoadBalancerSpec,
  DeployPolicy,
  HealthChecksSpec,
  InstanceGroup,
  InstanceTemplate,
  LoadBalancerSpec,
  LogRecord,
  ManagedInstance,
  ScalePolicy,
  Variable,
} from "./instance_group";

export const protobufPackage = "yandex.cloud.compute.v1.instancegroup";

export enum InstanceGroupView {
  /** BASIC - Doesn't include the metadata of the instance template in the server response. */
  BASIC = 0,
  /** FULL - Returns the metadata of the instance template in the server response. */
  FULL = 1,
  UNRECOGNIZED = -1,
}

export function instanceGroupViewFromJSON(object: any): InstanceGroupView {
  switch (object) {
    case 0:
    case "BASIC":
      return InstanceGroupView.BASIC;
    case 1:
    case "FULL":
      return InstanceGroupView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstanceGroupView.UNRECOGNIZED;
  }
}

export function instanceGroupViewToJSON(object: InstanceGroupView): string {
  switch (object) {
    case InstanceGroupView.BASIC:
      return "BASIC";
    case InstanceGroupView.FULL:
      return "FULL";
    case InstanceGroupView.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ResumeInstanceGroupProcessesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest";
  /**
   * ID of the instance group to resume processes in.
   *
   * The instance group must have a `PAUSED` status ([InstanceGroup.status]).
   *
   * To get the instance group ID, make a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface ResumeInstanceGroupProcessMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata";
  /** ID of the instance group that processes are being resumed in. */
  instanceGroupId: string;
}

export interface PauseInstanceGroupProcessesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest";
  /**
   * ID of the instance group to pause processes in.
   *
   * The instance group must have an `ACTIVE` status ([InstanceGroup.status]).
   *
   * To get the instance group ID, make a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface PauseInstanceGroupProcessMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata";
  /** ID of the instance group that processes are being paused in. */
  instanceGroupId: string;
}

export interface GetInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest";
  /**
   * ID of the InstanceGroup resource to return.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /** Defines which information about the Instance template should be returned in the server response. */
  view: InstanceGroupView;
}

export interface CreateInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest";
  /**
   * ID of the folder to create an instance group in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the instance group. */
  name: string;
  /** Description of the instance group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Instance template that the instance group belongs to. */
  instanceTemplate?:
    | InstanceTemplate
    | undefined;
  /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
  scalePolicy?:
    | ScalePolicy
    | undefined;
  /** Deployment policy of the instance group. */
  deployPolicy?:
    | DeployPolicy
    | undefined;
  /** Allocation policy of the instance group by zones and regions. */
  allocationPolicy?:
    | AllocationPolicy
    | undefined;
  /**
   * Settings for balancing load between instances via [Network Load Balancer](/docs/network-load-balancer/concepts)
   * (OSI model layer 3).
   *
   * If specified, a Network Load Balancer target group containing all instances from the instance group will be created
   * and attributed to the instance group.
   */
  loadBalancerSpec?:
    | LoadBalancerSpec
    | undefined;
  /** Health checking specification. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
  healthChecksSpec?:
    | HealthChecksSpec
    | undefined;
  /**
   * ID of the service account. The service account will be used for all API calls
   * made by the Instance Groups component on behalf of the user (for example, creating instances, adding them to load balancer target group, etc.). For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
  variables: Variable[];
  /**
   * Flag prohibiting deletion of the instance group.
   *
   * Allowed values:</br>- `false`: The instance group can be deleted.</br>- `true`: The instance group cannot be deleted.
   *
   * The default is `false`.
   */
  deletionProtection: boolean;
  /**
   * Settings for balancing load between instances via [Application Load Balancer](/docs/application-load-balancer/concepts)
   * (OSI model layer 7).
   *
   * If specified, an Application Load Balancer target group containing all instances from the instance group will be created
   * and attributed to the instance group.
   */
  applicationLoadBalancerSpec?: ApplicationLoadBalancerSpec | undefined;
}

export interface CreateInstanceGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateInstanceGroupFromYamlRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest";
  /**
   * ID of the folder to create an instance group in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** [InstanceGroupService.Create] request in YAML format. */
  instanceGroupYaml: string;
}

export interface CreateInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata";
  /** ID of the instance group that is being created. */
  instanceGroupId: string;
}

export interface UpdateInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest";
  /**
   * ID of the instance group to update.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /** Field mask that specifies which fields of the InstanceGroup resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the instance group. */
  name: string;
  /** Description of the instance group. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * The existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /** Instance template that the instance group belongs to. */
  instanceTemplate?:
    | InstanceTemplate
    | undefined;
  /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
  scalePolicy?:
    | ScalePolicy
    | undefined;
  /** Deployment policy of the instance group. */
  deployPolicy?:
    | DeployPolicy
    | undefined;
  /** Allocation policy of the instance group by zones and regions. */
  allocationPolicy?:
    | AllocationPolicy
    | undefined;
  /** Health checking specification. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
  healthChecksSpec?:
    | HealthChecksSpec
    | undefined;
  /**
   * ID of the service account. The service account will be used for all API calls
   * made by the Instance Groups component on behalf of the user (for example, creating instances, adding them to load balancer target group, etc.). For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
  /**
   * Settings for balancing load between instances via [Network Load Balancer](/docs/network-load-balancer/concepts)
   * (OSI model layer 3).
   */
  loadBalancerSpec?: LoadBalancerSpec | undefined;
  variables: Variable[];
  /** Flag that inhibits deletion of the instance group */
  deletionProtection: boolean;
  /**
   * Settings for balancing load between instances via [Application Load Balancer](/docs/application-load-balancer/concepts)
   * (OSI model layer 7).
   */
  applicationLoadBalancerSpec?: ApplicationLoadBalancerSpec | undefined;
}

export interface UpdateInstanceGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateInstanceGroupFromYamlRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest";
  /**
   * ID of the instance group to update.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /** [InstanceGroupService.Update] request in YAML format. */
  instanceGroupYaml: string;
}

export interface UpdateInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata";
  /**
   * ID of the InstanceGroup resource that is being updated.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface StartInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest";
  /**
   * ID of the instance group to start.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface StartInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata";
  /** ID of the InstanceGroup resource that is being started. */
  instanceGroupId: string;
}

export interface StopInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest";
  /**
   * ID of the instance group to stop.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface StopInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata";
  /** ID of the InstanceGroup resource that is being stopped. */
  instanceGroupId: string;
}

export interface RollingRestartRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest";
  /**
   * ID of the instance group to restart instances in.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * IDs of managed instances in the group to restart
   * To get instance IDs, use a [InstanceGroupService.ListInstances] request.
   */
  managedInstanceIds: string[];
}

export interface RollingRestartMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata";
  /** ID of the InstanceGroup resource that is being rolling restarted. */
  instanceGroupId: string;
}

export interface RollingRecreateRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest";
  /**
   * ID of the instance group to recreate instances in.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * IDs of managed instances in the group to recreate
   * To get instance IDs, use a [InstanceGroupService.ListInstances] request.
   */
  managedInstanceIds: string[];
}

export interface RollingRecreateMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata";
  /** ID of the InstanceGroup resource that is being rolling recreated. */
  instanceGroupId: string;
}

export interface DeleteInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest";
  /**
   * ID of the instance group to delete.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface DeleteInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata";
  /**
   * ID of the instance group that is being deleted.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface DeleteInstancesMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata";
  /** ID of the instance group that the instances are being deleted from. */
  instanceGroupId: string;
}

export interface StopInstancesMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata";
  /** ID of the instance group that the instances are being stopped from. */
  instanceGroupId: string;
}

export interface ListInstanceGroupsRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest";
  /**
   * ID of the folder to list instance groups in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListInstanceGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListInstanceGroupsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [InstanceGroup.name] field.
   */
  filter: string;
  /** Defines which information about the Instance template should be returned in the server response. */
  view: InstanceGroupView;
}

export interface ListInstanceGroupsResponse {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse";
  /** Lists instance groups for the specified folder. */
  instanceGroups: InstanceGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListInstanceGroupsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListInstanceGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListInstanceGroupInstancesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest";
  /**
   * ID of the InstanceGroup resource to list instances for.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListInstanceGroupInstancesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListInstanceGroupInstancesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [ManagedInstance.name] field.
   */
  filter: string;
}

export interface ListInstanceGroupInstancesResponse {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse";
  /** Lists instances for the specified instance group. */
  instances: ManagedInstance[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is more than [ListInstanceGroupInstancesRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListInstanceGroupInstancesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteInstancesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest";
  /**
   * ID of the instance group that the instances are being deleted from.
   * To get the ID of the instance group, use the [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * IDs of the instances to delete. Instances will be deleted along with all dependent resources.
   * Only IDs from the ManagedInstance.id field are allowed, not ManagedInstance.instance_id.
   */
  managedInstanceIds: string[];
  /**
   * If set to true, the target size of instance group will not be reduced and
   * a new instance will be created instead of the deleted one. By default, the target size of instance group
   * will be reduced by the specified number of instance IDs.
   */
  createAnother: boolean;
}

export interface StopInstancesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest";
  /**
   * ID of the instance group that the instances are being stopped from.
   * To get the ID of the instance group, use the [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * IDs of the instances to stop. After stopping, the instance can be updated, started, or deleted
   * according to scale and deploy policies.
   * Only IDs from the ManagedInstance.id field are allowed, not ManagedInstance.instance_id.
   */
  managedInstanceIds: string[];
}

export interface ListInstanceGroupOperationsRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest";
  /**
   * ID of the InstanceGroup resource to list operations for.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is more than [page_size], the service returns a [ListInstanceGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListInstanceGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [InstanceGroup.name] field.
   */
  filter: string;
}

export interface ListInstanceGroupOperationsResponse {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse";
  /** Lists operations for the specified instance group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is more than [ListInstanceGroupOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListInstanceGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListInstanceGroupLogRecordsRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest";
  /**
   * ID of the InstanceGroup resource to list logs for.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListInstanceGroupLogRecordsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListInstanceGroupLogRecordsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [InstanceGroup.name] field.
   */
  filter: string;
}

export interface ListInstanceGroupLogRecordsResponse {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse";
  /** Lists logs for the specified instance group. */
  logRecords: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListInstanceGroupLogRecordsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListInstanceGroupLogRecordsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseResumeInstanceGroupProcessesRequest(): ResumeInstanceGroupProcessesRequest {
  return { $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest", instanceGroupId: "" };
}

export const ResumeInstanceGroupProcessesRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest" as const,

  encode(message: ResumeInstanceGroupProcessesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeInstanceGroupProcessesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeInstanceGroupProcessesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResumeInstanceGroupProcessesRequest {
    return {
      $type: ResumeInstanceGroupProcessesRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: ResumeInstanceGroupProcessesRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeInstanceGroupProcessesRequest>, I>>(
    base?: I,
  ): ResumeInstanceGroupProcessesRequest {
    return ResumeInstanceGroupProcessesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResumeInstanceGroupProcessesRequest>, I>>(
    object: I,
  ): ResumeInstanceGroupProcessesRequest {
    const message = createBaseResumeInstanceGroupProcessesRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeInstanceGroupProcessesRequest.$type, ResumeInstanceGroupProcessesRequest);

function createBaseResumeInstanceGroupProcessMetadata(): ResumeInstanceGroupProcessMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata", instanceGroupId: "" };
}

export const ResumeInstanceGroupProcessMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata" as const,

  encode(message: ResumeInstanceGroupProcessMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeInstanceGroupProcessMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResumeInstanceGroupProcessMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResumeInstanceGroupProcessMetadata {
    return {
      $type: ResumeInstanceGroupProcessMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: ResumeInstanceGroupProcessMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeInstanceGroupProcessMetadata>, I>>(
    base?: I,
  ): ResumeInstanceGroupProcessMetadata {
    return ResumeInstanceGroupProcessMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResumeInstanceGroupProcessMetadata>, I>>(
    object: I,
  ): ResumeInstanceGroupProcessMetadata {
    const message = createBaseResumeInstanceGroupProcessMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeInstanceGroupProcessMetadata.$type, ResumeInstanceGroupProcessMetadata);

function createBasePauseInstanceGroupProcessesRequest(): PauseInstanceGroupProcessesRequest {
  return { $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest", instanceGroupId: "" };
}

export const PauseInstanceGroupProcessesRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest" as const,

  encode(message: PauseInstanceGroupProcessesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseInstanceGroupProcessesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePauseInstanceGroupProcessesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PauseInstanceGroupProcessesRequest {
    return {
      $type: PauseInstanceGroupProcessesRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: PauseInstanceGroupProcessesRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PauseInstanceGroupProcessesRequest>, I>>(
    base?: I,
  ): PauseInstanceGroupProcessesRequest {
    return PauseInstanceGroupProcessesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PauseInstanceGroupProcessesRequest>, I>>(
    object: I,
  ): PauseInstanceGroupProcessesRequest {
    const message = createBasePauseInstanceGroupProcessesRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseInstanceGroupProcessesRequest.$type, PauseInstanceGroupProcessesRequest);

function createBasePauseInstanceGroupProcessMetadata(): PauseInstanceGroupProcessMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata", instanceGroupId: "" };
}

export const PauseInstanceGroupProcessMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata" as const,

  encode(message: PauseInstanceGroupProcessMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseInstanceGroupProcessMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePauseInstanceGroupProcessMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PauseInstanceGroupProcessMetadata {
    return {
      $type: PauseInstanceGroupProcessMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: PauseInstanceGroupProcessMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PauseInstanceGroupProcessMetadata>, I>>(
    base?: I,
  ): PauseInstanceGroupProcessMetadata {
    return PauseInstanceGroupProcessMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PauseInstanceGroupProcessMetadata>, I>>(
    object: I,
  ): PauseInstanceGroupProcessMetadata {
    const message = createBasePauseInstanceGroupProcessMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseInstanceGroupProcessMetadata.$type, PauseInstanceGroupProcessMetadata);

function createBaseGetInstanceGroupRequest(): GetInstanceGroupRequest {
  return { $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest", instanceGroupId: "", view: 0 };
}

export const GetInstanceGroupRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest" as const,

  encode(message: GetInstanceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInstanceGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.view = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetInstanceGroupRequest {
    return {
      $type: GetInstanceGroupRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      view: isSet(object.view) ? instanceGroupViewFromJSON(object.view) : 0,
    };
  },

  toJSON(message: GetInstanceGroupRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    if (message.view !== 0) {
      obj.view = instanceGroupViewToJSON(message.view);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetInstanceGroupRequest>, I>>(base?: I): GetInstanceGroupRequest {
    return GetInstanceGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetInstanceGroupRequest>, I>>(object: I): GetInstanceGroupRequest {
    const message = createBaseGetInstanceGroupRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetInstanceGroupRequest.$type, GetInstanceGroupRequest);

function createBaseCreateInstanceGroupRequest(): CreateInstanceGroupRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    instanceTemplate: undefined,
    scalePolicy: undefined,
    deployPolicy: undefined,
    allocationPolicy: undefined,
    loadBalancerSpec: undefined,
    healthChecksSpec: undefined,
    serviceAccountId: "",
    variables: [],
    deletionProtection: false,
    applicationLoadBalancerSpec: undefined,
  };
}

export const CreateInstanceGroupRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest" as const,

  encode(message: CreateInstanceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateInstanceGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.instanceTemplate !== undefined) {
      InstanceTemplate.encode(message.instanceTemplate, writer.uint32(50).fork()).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
    }
    if (message.deployPolicy !== undefined) {
      DeployPolicy.encode(message.deployPolicy, writer.uint32(66).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
    }
    if (message.loadBalancerSpec !== undefined) {
      LoadBalancerSpec.encode(message.loadBalancerSpec, writer.uint32(82).fork()).ldelim();
    }
    if (message.healthChecksSpec !== undefined) {
      HealthChecksSpec.encode(message.healthChecksSpec, writer.uint32(90).fork()).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(98).string(message.serviceAccountId);
    }
    for (const v of message.variables) {
      Variable.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(112).bool(message.deletionProtection);
    }
    if (message.applicationLoadBalancerSpec !== undefined) {
      ApplicationLoadBalancerSpec.encode(message.applicationLoadBalancerSpec, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
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

          const entry5 = CreateInstanceGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.instanceTemplate = InstanceTemplate.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.allocationPolicy = AllocationPolicy.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.loadBalancerSpec = LoadBalancerSpec.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.healthChecksSpec = HealthChecksSpec.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.variables.push(Variable.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.applicationLoadBalancerSpec = ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateInstanceGroupRequest {
    return {
      $type: CreateInstanceGroupRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      instanceTemplate: isSet(object.instanceTemplate) ? InstanceTemplate.fromJSON(object.instanceTemplate) : undefined,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
      deployPolicy: isSet(object.deployPolicy) ? DeployPolicy.fromJSON(object.deployPolicy) : undefined,
      allocationPolicy: isSet(object.allocationPolicy) ? AllocationPolicy.fromJSON(object.allocationPolicy) : undefined,
      loadBalancerSpec: isSet(object.loadBalancerSpec) ? LoadBalancerSpec.fromJSON(object.loadBalancerSpec) : undefined,
      healthChecksSpec: isSet(object.healthChecksSpec) ? HealthChecksSpec.fromJSON(object.healthChecksSpec) : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      variables: globalThis.Array.isArray(object?.variables)
        ? object.variables.map((e: any) => Variable.fromJSON(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      applicationLoadBalancerSpec: isSet(object.applicationLoadBalancerSpec)
        ? ApplicationLoadBalancerSpec.fromJSON(object.applicationLoadBalancerSpec)
        : undefined,
    };
  },

  toJSON(message: CreateInstanceGroupRequest): unknown {
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
    if (message.instanceTemplate !== undefined) {
      obj.instanceTemplate = InstanceTemplate.toJSON(message.instanceTemplate);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    if (message.deployPolicy !== undefined) {
      obj.deployPolicy = DeployPolicy.toJSON(message.deployPolicy);
    }
    if (message.allocationPolicy !== undefined) {
      obj.allocationPolicy = AllocationPolicy.toJSON(message.allocationPolicy);
    }
    if (message.loadBalancerSpec !== undefined) {
      obj.loadBalancerSpec = LoadBalancerSpec.toJSON(message.loadBalancerSpec);
    }
    if (message.healthChecksSpec !== undefined) {
      obj.healthChecksSpec = HealthChecksSpec.toJSON(message.healthChecksSpec);
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.variables?.length) {
      obj.variables = message.variables.map((e) => Variable.toJSON(e));
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.applicationLoadBalancerSpec !== undefined) {
      obj.applicationLoadBalancerSpec = ApplicationLoadBalancerSpec.toJSON(message.applicationLoadBalancerSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateInstanceGroupRequest>, I>>(base?: I): CreateInstanceGroupRequest {
    return CreateInstanceGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateInstanceGroupRequest>, I>>(object: I): CreateInstanceGroupRequest {
    const message = createBaseCreateInstanceGroupRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.instanceTemplate = (object.instanceTemplate !== undefined && object.instanceTemplate !== null)
      ? InstanceTemplate.fromPartial(object.instanceTemplate)
      : undefined;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    message.deployPolicy = (object.deployPolicy !== undefined && object.deployPolicy !== null)
      ? DeployPolicy.fromPartial(object.deployPolicy)
      : undefined;
    message.allocationPolicy = (object.allocationPolicy !== undefined && object.allocationPolicy !== null)
      ? AllocationPolicy.fromPartial(object.allocationPolicy)
      : undefined;
    message.loadBalancerSpec = (object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null)
      ? LoadBalancerSpec.fromPartial(object.loadBalancerSpec)
      : undefined;
    message.healthChecksSpec = (object.healthChecksSpec !== undefined && object.healthChecksSpec !== null)
      ? HealthChecksSpec.fromPartial(object.healthChecksSpec)
      : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.variables = object.variables?.map((e) => Variable.fromPartial(e)) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.applicationLoadBalancerSpec =
      (object.applicationLoadBalancerSpec !== undefined && object.applicationLoadBalancerSpec !== null)
        ? ApplicationLoadBalancerSpec.fromPartial(object.applicationLoadBalancerSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateInstanceGroupRequest.$type, CreateInstanceGroupRequest);

function createBaseCreateInstanceGroupRequest_LabelsEntry(): CreateInstanceGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry", key: "", value: "" };
}

export const CreateInstanceGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry" as const,

  encode(message: CreateInstanceGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceGroupRequest_LabelsEntry();
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

  fromJSON(object: any): CreateInstanceGroupRequest_LabelsEntry {
    return {
      $type: CreateInstanceGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateInstanceGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateInstanceGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateInstanceGroupRequest_LabelsEntry {
    return CreateInstanceGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateInstanceGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateInstanceGroupRequest_LabelsEntry {
    const message = createBaseCreateInstanceGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateInstanceGroupRequest_LabelsEntry.$type, CreateInstanceGroupRequest_LabelsEntry);

function createBaseCreateInstanceGroupFromYamlRequest(): CreateInstanceGroupFromYamlRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest",
    folderId: "",
    instanceGroupYaml: "",
  };
}

export const CreateInstanceGroupFromYamlRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest" as const,

  encode(message: CreateInstanceGroupFromYamlRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.instanceGroupYaml !== "") {
      writer.uint32(18).string(message.instanceGroupYaml);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceGroupFromYamlRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceGroupFromYamlRequest();
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

          message.instanceGroupYaml = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateInstanceGroupFromYamlRequest {
    return {
      $type: CreateInstanceGroupFromYamlRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      instanceGroupYaml: isSet(object.instanceGroupYaml) ? globalThis.String(object.instanceGroupYaml) : "",
    };
  },

  toJSON(message: CreateInstanceGroupFromYamlRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.instanceGroupYaml !== "") {
      obj.instanceGroupYaml = message.instanceGroupYaml;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateInstanceGroupFromYamlRequest>, I>>(
    base?: I,
  ): CreateInstanceGroupFromYamlRequest {
    return CreateInstanceGroupFromYamlRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateInstanceGroupFromYamlRequest>, I>>(
    object: I,
  ): CreateInstanceGroupFromYamlRequest {
    const message = createBaseCreateInstanceGroupFromYamlRequest();
    message.folderId = object.folderId ?? "";
    message.instanceGroupYaml = object.instanceGroupYaml ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateInstanceGroupFromYamlRequest.$type, CreateInstanceGroupFromYamlRequest);

function createBaseCreateInstanceGroupMetadata(): CreateInstanceGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata", instanceGroupId: "" };
}

export const CreateInstanceGroupMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata" as const,

  encode(message: CreateInstanceGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateInstanceGroupMetadata {
    return {
      $type: CreateInstanceGroupMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: CreateInstanceGroupMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateInstanceGroupMetadata>, I>>(base?: I): CreateInstanceGroupMetadata {
    return CreateInstanceGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateInstanceGroupMetadata>, I>>(object: I): CreateInstanceGroupMetadata {
    const message = createBaseCreateInstanceGroupMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateInstanceGroupMetadata.$type, CreateInstanceGroupMetadata);

function createBaseUpdateInstanceGroupRequest(): UpdateInstanceGroupRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest",
    instanceGroupId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    instanceTemplate: undefined,
    scalePolicy: undefined,
    deployPolicy: undefined,
    allocationPolicy: undefined,
    healthChecksSpec: undefined,
    serviceAccountId: "",
    loadBalancerSpec: undefined,
    variables: [],
    deletionProtection: false,
    applicationLoadBalancerSpec: undefined,
  };
}

export const UpdateInstanceGroupRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest" as const,

  encode(message: UpdateInstanceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
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
      UpdateInstanceGroupRequest_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.instanceTemplate !== undefined) {
      InstanceTemplate.encode(message.instanceTemplate, writer.uint32(50).fork()).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
    }
    if (message.deployPolicy !== undefined) {
      DeployPolicy.encode(message.deployPolicy, writer.uint32(66).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
    }
    if (message.healthChecksSpec !== undefined) {
      HealthChecksSpec.encode(message.healthChecksSpec, writer.uint32(90).fork()).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(98).string(message.serviceAccountId);
    }
    if (message.loadBalancerSpec !== undefined) {
      LoadBalancerSpec.encode(message.loadBalancerSpec, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.variables) {
      Variable.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(128).bool(message.deletionProtection);
    }
    if (message.applicationLoadBalancerSpec !== undefined) {
      ApplicationLoadBalancerSpec.encode(message.applicationLoadBalancerSpec, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstanceGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
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

          const entry5 = UpdateInstanceGroupRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.instanceTemplate = InstanceTemplate.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.allocationPolicy = AllocationPolicy.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.healthChecksSpec = HealthChecksSpec.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.loadBalancerSpec = LoadBalancerSpec.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.variables.push(Variable.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.applicationLoadBalancerSpec = ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceGroupRequest {
    return {
      $type: UpdateInstanceGroupRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      instanceTemplate: isSet(object.instanceTemplate) ? InstanceTemplate.fromJSON(object.instanceTemplate) : undefined,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
      deployPolicy: isSet(object.deployPolicy) ? DeployPolicy.fromJSON(object.deployPolicy) : undefined,
      allocationPolicy: isSet(object.allocationPolicy) ? AllocationPolicy.fromJSON(object.allocationPolicy) : undefined,
      healthChecksSpec: isSet(object.healthChecksSpec) ? HealthChecksSpec.fromJSON(object.healthChecksSpec) : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      loadBalancerSpec: isSet(object.loadBalancerSpec) ? LoadBalancerSpec.fromJSON(object.loadBalancerSpec) : undefined,
      variables: globalThis.Array.isArray(object?.variables)
        ? object.variables.map((e: any) => Variable.fromJSON(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      applicationLoadBalancerSpec: isSet(object.applicationLoadBalancerSpec)
        ? ApplicationLoadBalancerSpec.fromJSON(object.applicationLoadBalancerSpec)
        : undefined,
    };
  },

  toJSON(message: UpdateInstanceGroupRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
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
    if (message.instanceTemplate !== undefined) {
      obj.instanceTemplate = InstanceTemplate.toJSON(message.instanceTemplate);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    if (message.deployPolicy !== undefined) {
      obj.deployPolicy = DeployPolicy.toJSON(message.deployPolicy);
    }
    if (message.allocationPolicy !== undefined) {
      obj.allocationPolicy = AllocationPolicy.toJSON(message.allocationPolicy);
    }
    if (message.healthChecksSpec !== undefined) {
      obj.healthChecksSpec = HealthChecksSpec.toJSON(message.healthChecksSpec);
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.loadBalancerSpec !== undefined) {
      obj.loadBalancerSpec = LoadBalancerSpec.toJSON(message.loadBalancerSpec);
    }
    if (message.variables?.length) {
      obj.variables = message.variables.map((e) => Variable.toJSON(e));
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.applicationLoadBalancerSpec !== undefined) {
      obj.applicationLoadBalancerSpec = ApplicationLoadBalancerSpec.toJSON(message.applicationLoadBalancerSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateInstanceGroupRequest>, I>>(base?: I): UpdateInstanceGroupRequest {
    return UpdateInstanceGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateInstanceGroupRequest>, I>>(object: I): UpdateInstanceGroupRequest {
    const message = createBaseUpdateInstanceGroupRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.instanceTemplate = (object.instanceTemplate !== undefined && object.instanceTemplate !== null)
      ? InstanceTemplate.fromPartial(object.instanceTemplate)
      : undefined;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    message.deployPolicy = (object.deployPolicy !== undefined && object.deployPolicy !== null)
      ? DeployPolicy.fromPartial(object.deployPolicy)
      : undefined;
    message.allocationPolicy = (object.allocationPolicy !== undefined && object.allocationPolicy !== null)
      ? AllocationPolicy.fromPartial(object.allocationPolicy)
      : undefined;
    message.healthChecksSpec = (object.healthChecksSpec !== undefined && object.healthChecksSpec !== null)
      ? HealthChecksSpec.fromPartial(object.healthChecksSpec)
      : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.loadBalancerSpec = (object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null)
      ? LoadBalancerSpec.fromPartial(object.loadBalancerSpec)
      : undefined;
    message.variables = object.variables?.map((e) => Variable.fromPartial(e)) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.applicationLoadBalancerSpec =
      (object.applicationLoadBalancerSpec !== undefined && object.applicationLoadBalancerSpec !== null)
        ? ApplicationLoadBalancerSpec.fromPartial(object.applicationLoadBalancerSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateInstanceGroupRequest.$type, UpdateInstanceGroupRequest);

function createBaseUpdateInstanceGroupRequest_LabelsEntry(): UpdateInstanceGroupRequest_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateInstanceGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry" as const,

  encode(message: UpdateInstanceGroupRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstanceGroupRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateInstanceGroupRequest_LabelsEntry {
    return {
      $type: UpdateInstanceGroupRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateInstanceGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateInstanceGroupRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateInstanceGroupRequest_LabelsEntry {
    return UpdateInstanceGroupRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateInstanceGroupRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateInstanceGroupRequest_LabelsEntry {
    const message = createBaseUpdateInstanceGroupRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateInstanceGroupRequest_LabelsEntry.$type, UpdateInstanceGroupRequest_LabelsEntry);

function createBaseUpdateInstanceGroupFromYamlRequest(): UpdateInstanceGroupFromYamlRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest",
    instanceGroupId: "",
    instanceGroupYaml: "",
  };
}

export const UpdateInstanceGroupFromYamlRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest" as const,

  encode(message: UpdateInstanceGroupFromYamlRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    if (message.instanceGroupYaml !== "") {
      writer.uint32(18).string(message.instanceGroupYaml);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceGroupFromYamlRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstanceGroupFromYamlRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instanceGroupYaml = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceGroupFromYamlRequest {
    return {
      $type: UpdateInstanceGroupFromYamlRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      instanceGroupYaml: isSet(object.instanceGroupYaml) ? globalThis.String(object.instanceGroupYaml) : "",
    };
  },

  toJSON(message: UpdateInstanceGroupFromYamlRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    if (message.instanceGroupYaml !== "") {
      obj.instanceGroupYaml = message.instanceGroupYaml;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateInstanceGroupFromYamlRequest>, I>>(
    base?: I,
  ): UpdateInstanceGroupFromYamlRequest {
    return UpdateInstanceGroupFromYamlRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateInstanceGroupFromYamlRequest>, I>>(
    object: I,
  ): UpdateInstanceGroupFromYamlRequest {
    const message = createBaseUpdateInstanceGroupFromYamlRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.instanceGroupYaml = object.instanceGroupYaml ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateInstanceGroupFromYamlRequest.$type, UpdateInstanceGroupFromYamlRequest);

function createBaseUpdateInstanceGroupMetadata(): UpdateInstanceGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata", instanceGroupId: "" };
}

export const UpdateInstanceGroupMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata" as const,

  encode(message: UpdateInstanceGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstanceGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceGroupMetadata {
    return {
      $type: UpdateInstanceGroupMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: UpdateInstanceGroupMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateInstanceGroupMetadata>, I>>(base?: I): UpdateInstanceGroupMetadata {
    return UpdateInstanceGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateInstanceGroupMetadata>, I>>(object: I): UpdateInstanceGroupMetadata {
    const message = createBaseUpdateInstanceGroupMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateInstanceGroupMetadata.$type, UpdateInstanceGroupMetadata);

function createBaseStartInstanceGroupRequest(): StartInstanceGroupRequest {
  return { $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest", instanceGroupId: "" };
}

export const StartInstanceGroupRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest" as const,

  encode(message: StartInstanceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartInstanceGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartInstanceGroupRequest {
    return {
      $type: StartInstanceGroupRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: StartInstanceGroupRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartInstanceGroupRequest>, I>>(base?: I): StartInstanceGroupRequest {
    return StartInstanceGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartInstanceGroupRequest>, I>>(object: I): StartInstanceGroupRequest {
    const message = createBaseStartInstanceGroupRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartInstanceGroupRequest.$type, StartInstanceGroupRequest);

function createBaseStartInstanceGroupMetadata(): StartInstanceGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata", instanceGroupId: "" };
}

export const StartInstanceGroupMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata" as const,

  encode(message: StartInstanceGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartInstanceGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartInstanceGroupMetadata {
    return {
      $type: StartInstanceGroupMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: StartInstanceGroupMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartInstanceGroupMetadata>, I>>(base?: I): StartInstanceGroupMetadata {
    return StartInstanceGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartInstanceGroupMetadata>, I>>(object: I): StartInstanceGroupMetadata {
    const message = createBaseStartInstanceGroupMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartInstanceGroupMetadata.$type, StartInstanceGroupMetadata);

function createBaseStopInstanceGroupRequest(): StopInstanceGroupRequest {
  return { $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest", instanceGroupId: "" };
}

export const StopInstanceGroupRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest" as const,

  encode(message: StopInstanceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopInstanceGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopInstanceGroupRequest {
    return {
      $type: StopInstanceGroupRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: StopInstanceGroupRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopInstanceGroupRequest>, I>>(base?: I): StopInstanceGroupRequest {
    return StopInstanceGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopInstanceGroupRequest>, I>>(object: I): StopInstanceGroupRequest {
    const message = createBaseStopInstanceGroupRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopInstanceGroupRequest.$type, StopInstanceGroupRequest);

function createBaseStopInstanceGroupMetadata(): StopInstanceGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata", instanceGroupId: "" };
}

export const StopInstanceGroupMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata" as const,

  encode(message: StopInstanceGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopInstanceGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopInstanceGroupMetadata {
    return {
      $type: StopInstanceGroupMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: StopInstanceGroupMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopInstanceGroupMetadata>, I>>(base?: I): StopInstanceGroupMetadata {
    return StopInstanceGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopInstanceGroupMetadata>, I>>(object: I): StopInstanceGroupMetadata {
    const message = createBaseStopInstanceGroupMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopInstanceGroupMetadata.$type, StopInstanceGroupMetadata);

function createBaseRollingRestartRequest(): RollingRestartRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest",
    instanceGroupId: "",
    managedInstanceIds: [],
  };
}

export const RollingRestartRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest" as const,

  encode(message: RollingRestartRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    for (const v of message.managedInstanceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollingRestartRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollingRestartRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.managedInstanceIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RollingRestartRequest {
    return {
      $type: RollingRestartRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      managedInstanceIds: globalThis.Array.isArray(object?.managedInstanceIds)
        ? object.managedInstanceIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RollingRestartRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    if (message.managedInstanceIds?.length) {
      obj.managedInstanceIds = message.managedInstanceIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RollingRestartRequest>, I>>(base?: I): RollingRestartRequest {
    return RollingRestartRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RollingRestartRequest>, I>>(object: I): RollingRestartRequest {
    const message = createBaseRollingRestartRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.managedInstanceIds = object.managedInstanceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RollingRestartRequest.$type, RollingRestartRequest);

function createBaseRollingRestartMetadata(): RollingRestartMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata", instanceGroupId: "" };
}

export const RollingRestartMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata" as const,

  encode(message: RollingRestartMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollingRestartMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollingRestartMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RollingRestartMetadata {
    return {
      $type: RollingRestartMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: RollingRestartMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RollingRestartMetadata>, I>>(base?: I): RollingRestartMetadata {
    return RollingRestartMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RollingRestartMetadata>, I>>(object: I): RollingRestartMetadata {
    const message = createBaseRollingRestartMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RollingRestartMetadata.$type, RollingRestartMetadata);

function createBaseRollingRecreateRequest(): RollingRecreateRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest",
    instanceGroupId: "",
    managedInstanceIds: [],
  };
}

export const RollingRecreateRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest" as const,

  encode(message: RollingRecreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    for (const v of message.managedInstanceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollingRecreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollingRecreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.managedInstanceIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RollingRecreateRequest {
    return {
      $type: RollingRecreateRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      managedInstanceIds: globalThis.Array.isArray(object?.managedInstanceIds)
        ? object.managedInstanceIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RollingRecreateRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    if (message.managedInstanceIds?.length) {
      obj.managedInstanceIds = message.managedInstanceIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RollingRecreateRequest>, I>>(base?: I): RollingRecreateRequest {
    return RollingRecreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RollingRecreateRequest>, I>>(object: I): RollingRecreateRequest {
    const message = createBaseRollingRecreateRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.managedInstanceIds = object.managedInstanceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RollingRecreateRequest.$type, RollingRecreateRequest);

function createBaseRollingRecreateMetadata(): RollingRecreateMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata", instanceGroupId: "" };
}

export const RollingRecreateMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata" as const,

  encode(message: RollingRecreateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollingRecreateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollingRecreateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RollingRecreateMetadata {
    return {
      $type: RollingRecreateMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: RollingRecreateMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RollingRecreateMetadata>, I>>(base?: I): RollingRecreateMetadata {
    return RollingRecreateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RollingRecreateMetadata>, I>>(object: I): RollingRecreateMetadata {
    const message = createBaseRollingRecreateMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RollingRecreateMetadata.$type, RollingRecreateMetadata);

function createBaseDeleteInstanceGroupRequest(): DeleteInstanceGroupRequest {
  return { $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest", instanceGroupId: "" };
}

export const DeleteInstanceGroupRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest" as const,

  encode(message: DeleteInstanceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInstanceGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteInstanceGroupRequest {
    return {
      $type: DeleteInstanceGroupRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: DeleteInstanceGroupRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInstanceGroupRequest>, I>>(base?: I): DeleteInstanceGroupRequest {
    return DeleteInstanceGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInstanceGroupRequest>, I>>(object: I): DeleteInstanceGroupRequest {
    const message = createBaseDeleteInstanceGroupRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteInstanceGroupRequest.$type, DeleteInstanceGroupRequest);

function createBaseDeleteInstanceGroupMetadata(): DeleteInstanceGroupMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata", instanceGroupId: "" };
}

export const DeleteInstanceGroupMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata" as const,

  encode(message: DeleteInstanceGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInstanceGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteInstanceGroupMetadata {
    return {
      $type: DeleteInstanceGroupMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: DeleteInstanceGroupMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInstanceGroupMetadata>, I>>(base?: I): DeleteInstanceGroupMetadata {
    return DeleteInstanceGroupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInstanceGroupMetadata>, I>>(object: I): DeleteInstanceGroupMetadata {
    const message = createBaseDeleteInstanceGroupMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteInstanceGroupMetadata.$type, DeleteInstanceGroupMetadata);

function createBaseDeleteInstancesMetadata(): DeleteInstancesMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata", instanceGroupId: "" };
}

export const DeleteInstancesMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata" as const,

  encode(message: DeleteInstancesMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInstancesMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInstancesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteInstancesMetadata {
    return {
      $type: DeleteInstancesMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: DeleteInstancesMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInstancesMetadata>, I>>(base?: I): DeleteInstancesMetadata {
    return DeleteInstancesMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInstancesMetadata>, I>>(object: I): DeleteInstancesMetadata {
    const message = createBaseDeleteInstancesMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteInstancesMetadata.$type, DeleteInstancesMetadata);

function createBaseStopInstancesMetadata(): StopInstancesMetadata {
  return { $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata", instanceGroupId: "" };
}

export const StopInstancesMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata" as const,

  encode(message: StopInstancesMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopInstancesMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopInstancesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopInstancesMetadata {
    return {
      $type: StopInstancesMetadata.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
    };
  },

  toJSON(message: StopInstancesMetadata): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopInstancesMetadata>, I>>(base?: I): StopInstancesMetadata {
    return StopInstancesMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopInstancesMetadata>, I>>(object: I): StopInstancesMetadata {
    const message = createBaseStopInstancesMetadata();
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopInstancesMetadata.$type, StopInstancesMetadata);

function createBaseListInstanceGroupsRequest(): ListInstanceGroupsRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    view: 0,
  };
}

export const ListInstanceGroupsRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest" as const,

  encode(message: ListInstanceGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.view !== 0) {
      writer.uint32(40).int32(message.view);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceGroupsRequest();
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
        case 5:
          if (tag !== 40) {
            break;
          }

          message.view = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListInstanceGroupsRequest {
    return {
      $type: ListInstanceGroupsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      view: isSet(object.view) ? instanceGroupViewFromJSON(object.view) : 0,
    };
  },

  toJSON(message: ListInstanceGroupsRequest): unknown {
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
    if (message.view !== 0) {
      obj.view = instanceGroupViewToJSON(message.view);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListInstanceGroupsRequest>, I>>(base?: I): ListInstanceGroupsRequest {
    return ListInstanceGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupsRequest>, I>>(object: I): ListInstanceGroupsRequest {
    const message = createBaseListInstanceGroupsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListInstanceGroupsRequest.$type, ListInstanceGroupsRequest);

function createBaseListInstanceGroupsResponse(): ListInstanceGroupsResponse {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse",
    instanceGroups: [],
    nextPageToken: "",
  };
}

export const ListInstanceGroupsResponse = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse" as const,

  encode(message: ListInstanceGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instanceGroups) {
      InstanceGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroups.push(InstanceGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListInstanceGroupsResponse {
    return {
      $type: ListInstanceGroupsResponse.$type,
      instanceGroups: globalThis.Array.isArray(object?.instanceGroups)
        ? object.instanceGroups.map((e: any) => InstanceGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListInstanceGroupsResponse): unknown {
    const obj: any = {};
    if (message.instanceGroups?.length) {
      obj.instanceGroups = message.instanceGroups.map((e) => InstanceGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListInstanceGroupsResponse>, I>>(base?: I): ListInstanceGroupsResponse {
    return ListInstanceGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupsResponse>, I>>(object: I): ListInstanceGroupsResponse {
    const message = createBaseListInstanceGroupsResponse();
    message.instanceGroups = object.instanceGroups?.map((e) => InstanceGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstanceGroupsResponse.$type, ListInstanceGroupsResponse);

function createBaseListInstanceGroupInstancesRequest(): ListInstanceGroupInstancesRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest",
    instanceGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListInstanceGroupInstancesRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest" as const,

  encode(message: ListInstanceGroupInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceGroupInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceGroupInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
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

  fromJSON(object: any): ListInstanceGroupInstancesRequest {
    return {
      $type: ListInstanceGroupInstancesRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListInstanceGroupInstancesRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
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

  create<I extends Exact<DeepPartial<ListInstanceGroupInstancesRequest>, I>>(
    base?: I,
  ): ListInstanceGroupInstancesRequest {
    return ListInstanceGroupInstancesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupInstancesRequest>, I>>(
    object: I,
  ): ListInstanceGroupInstancesRequest {
    const message = createBaseListInstanceGroupInstancesRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstanceGroupInstancesRequest.$type, ListInstanceGroupInstancesRequest);

function createBaseListInstanceGroupInstancesResponse(): ListInstanceGroupInstancesResponse {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse",
    instances: [],
    nextPageToken: "",
  };
}

export const ListInstanceGroupInstancesResponse = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse" as const,

  encode(message: ListInstanceGroupInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instances) {
      ManagedInstance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceGroupInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceGroupInstancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instances.push(ManagedInstance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListInstanceGroupInstancesResponse {
    return {
      $type: ListInstanceGroupInstancesResponse.$type,
      instances: globalThis.Array.isArray(object?.instances)
        ? object.instances.map((e: any) => ManagedInstance.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListInstanceGroupInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances?.length) {
      obj.instances = message.instances.map((e) => ManagedInstance.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListInstanceGroupInstancesResponse>, I>>(
    base?: I,
  ): ListInstanceGroupInstancesResponse {
    return ListInstanceGroupInstancesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupInstancesResponse>, I>>(
    object: I,
  ): ListInstanceGroupInstancesResponse {
    const message = createBaseListInstanceGroupInstancesResponse();
    message.instances = object.instances?.map((e) => ManagedInstance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstanceGroupInstancesResponse.$type, ListInstanceGroupInstancesResponse);

function createBaseDeleteInstancesRequest(): DeleteInstancesRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest",
    instanceGroupId: "",
    managedInstanceIds: [],
    createAnother: false,
  };
}

export const DeleteInstancesRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest" as const,

  encode(message: DeleteInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    for (const v of message.managedInstanceIds) {
      writer.uint32(18).string(v!);
    }
    if (message.createAnother === true) {
      writer.uint32(24).bool(message.createAnother);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.managedInstanceIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.createAnother = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteInstancesRequest {
    return {
      $type: DeleteInstancesRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      managedInstanceIds: globalThis.Array.isArray(object?.managedInstanceIds)
        ? object.managedInstanceIds.map((e: any) => globalThis.String(e))
        : [],
      createAnother: isSet(object.createAnother) ? globalThis.Boolean(object.createAnother) : false,
    };
  },

  toJSON(message: DeleteInstancesRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    if (message.managedInstanceIds?.length) {
      obj.managedInstanceIds = message.managedInstanceIds;
    }
    if (message.createAnother === true) {
      obj.createAnother = message.createAnother;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInstancesRequest>, I>>(base?: I): DeleteInstancesRequest {
    return DeleteInstancesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInstancesRequest>, I>>(object: I): DeleteInstancesRequest {
    const message = createBaseDeleteInstancesRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.managedInstanceIds = object.managedInstanceIds?.map((e) => e) || [];
    message.createAnother = object.createAnother ?? false;
    return message;
  },
};

messageTypeRegistry.set(DeleteInstancesRequest.$type, DeleteInstancesRequest);

function createBaseStopInstancesRequest(): StopInstancesRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest",
    instanceGroupId: "",
    managedInstanceIds: [],
  };
}

export const StopInstancesRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest" as const,

  encode(message: StopInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    for (const v of message.managedInstanceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.managedInstanceIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopInstancesRequest {
    return {
      $type: StopInstancesRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      managedInstanceIds: globalThis.Array.isArray(object?.managedInstanceIds)
        ? object.managedInstanceIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StopInstancesRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
    }
    if (message.managedInstanceIds?.length) {
      obj.managedInstanceIds = message.managedInstanceIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopInstancesRequest>, I>>(base?: I): StopInstancesRequest {
    return StopInstancesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopInstancesRequest>, I>>(object: I): StopInstancesRequest {
    const message = createBaseStopInstancesRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.managedInstanceIds = object.managedInstanceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(StopInstancesRequest.$type, StopInstancesRequest);

function createBaseListInstanceGroupOperationsRequest(): ListInstanceGroupOperationsRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest",
    instanceGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListInstanceGroupOperationsRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest" as const,

  encode(message: ListInstanceGroupOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceGroupOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
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

  fromJSON(object: any): ListInstanceGroupOperationsRequest {
    return {
      $type: ListInstanceGroupOperationsRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListInstanceGroupOperationsRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
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

  create<I extends Exact<DeepPartial<ListInstanceGroupOperationsRequest>, I>>(
    base?: I,
  ): ListInstanceGroupOperationsRequest {
    return ListInstanceGroupOperationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupOperationsRequest>, I>>(
    object: I,
  ): ListInstanceGroupOperationsRequest {
    const message = createBaseListInstanceGroupOperationsRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstanceGroupOperationsRequest.$type, ListInstanceGroupOperationsRequest);

function createBaseListInstanceGroupOperationsResponse(): ListInstanceGroupOperationsResponse {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse",
    operations: [],
    nextPageToken: "",
  };
}

export const ListInstanceGroupOperationsResponse = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse" as const,

  encode(message: ListInstanceGroupOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceGroupOperationsResponse();
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

  fromJSON(object: any): ListInstanceGroupOperationsResponse {
    return {
      $type: ListInstanceGroupOperationsResponse.$type,
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListInstanceGroupOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListInstanceGroupOperationsResponse>, I>>(
    base?: I,
  ): ListInstanceGroupOperationsResponse {
    return ListInstanceGroupOperationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupOperationsResponse>, I>>(
    object: I,
  ): ListInstanceGroupOperationsResponse {
    const message = createBaseListInstanceGroupOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstanceGroupOperationsResponse.$type, ListInstanceGroupOperationsResponse);

function createBaseListInstanceGroupLogRecordsRequest(): ListInstanceGroupLogRecordsRequest {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest",
    instanceGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListInstanceGroupLogRecordsRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest" as const,

  encode(message: ListInstanceGroupLogRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceGroupLogRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceGroupLogRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceGroupId = reader.string();
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

  fromJSON(object: any): ListInstanceGroupLogRecordsRequest {
    return {
      $type: ListInstanceGroupLogRecordsRequest.$type,
      instanceGroupId: isSet(object.instanceGroupId) ? globalThis.String(object.instanceGroupId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListInstanceGroupLogRecordsRequest): unknown {
    const obj: any = {};
    if (message.instanceGroupId !== "") {
      obj.instanceGroupId = message.instanceGroupId;
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

  create<I extends Exact<DeepPartial<ListInstanceGroupLogRecordsRequest>, I>>(
    base?: I,
  ): ListInstanceGroupLogRecordsRequest {
    return ListInstanceGroupLogRecordsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupLogRecordsRequest>, I>>(
    object: I,
  ): ListInstanceGroupLogRecordsRequest {
    const message = createBaseListInstanceGroupLogRecordsRequest();
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstanceGroupLogRecordsRequest.$type, ListInstanceGroupLogRecordsRequest);

function createBaseListInstanceGroupLogRecordsResponse(): ListInstanceGroupLogRecordsResponse {
  return {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse",
    logRecords: [],
    nextPageToken: "",
  };
}

export const ListInstanceGroupLogRecordsResponse = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse" as const,

  encode(message: ListInstanceGroupLogRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logRecords) {
      LogRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceGroupLogRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceGroupLogRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logRecords.push(LogRecord.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListInstanceGroupLogRecordsResponse {
    return {
      $type: ListInstanceGroupLogRecordsResponse.$type,
      logRecords: globalThis.Array.isArray(object?.logRecords)
        ? object.logRecords.map((e: any) => LogRecord.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListInstanceGroupLogRecordsResponse): unknown {
    const obj: any = {};
    if (message.logRecords?.length) {
      obj.logRecords = message.logRecords.map((e) => LogRecord.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListInstanceGroupLogRecordsResponse>, I>>(
    base?: I,
  ): ListInstanceGroupLogRecordsResponse {
    return ListInstanceGroupLogRecordsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupLogRecordsResponse>, I>>(
    object: I,
  ): ListInstanceGroupLogRecordsResponse {
    const message = createBaseListInstanceGroupLogRecordsResponse();
    message.logRecords = object.logRecords?.map((e) => LogRecord.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstanceGroupLogRecordsResponse.$type, ListInstanceGroupLogRecordsResponse);

/** A set of methods for managing InstanceGroup resources. */
export type InstanceGroupServiceService = typeof InstanceGroupServiceService;
export const InstanceGroupServiceService = {
  /**
   * Returns the specified InstanceGroup resource.
   *
   * To get the list of available InstanceGroup resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetInstanceGroupRequest) => Buffer.from(GetInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetInstanceGroupRequest.decode(value),
    responseSerialize: (value: InstanceGroup) => Buffer.from(InstanceGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InstanceGroup.decode(value),
  },
  /** Retrieves the list of InstanceGroup resources in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstanceGroupsRequest) =>
      Buffer.from(ListInstanceGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListInstanceGroupsRequest.decode(value),
    responseSerialize: (value: ListInstanceGroupsResponse) =>
      Buffer.from(ListInstanceGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListInstanceGroupsResponse.decode(value),
  },
  /**
   * Creates an instance group in the specified folder.
   * This method starts an operation that can be cancelled by another operation.
   */
  create: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateInstanceGroupRequest) =>
      Buffer.from(CreateInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Creates an instance group in the specified folder from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  createFromYaml: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateInstanceGroupFromYamlRequest) =>
      Buffer.from(CreateInstanceGroupFromYamlRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateInstanceGroupFromYamlRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified instance group.
   * This method starts an operation that can be cancelled by another operation.
   */
  update: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateInstanceGroupRequest) =>
      Buffer.from(UpdateInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified instance group from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  updateFromYaml: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateInstanceGroupFromYamlRequest) =>
      Buffer.from(UpdateInstanceGroupFromYamlRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateInstanceGroupFromYamlRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified instance group. */
  stop: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopInstanceGroupRequest) => Buffer.from(StopInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Performs rolling restart of specified instances for the specified instance group.
   * Rolling restart does restart of instances respecting all group policies.
   */
  rollingRestart: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRestart",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RollingRestartRequest) => Buffer.from(RollingRestartRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RollingRestartRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Performs rolling recreate of specified instances for the specified instance group.
   * Rolling recreate does recreate of instance VMs respecting all group policies.
   */
  rollingRecreate: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRecreate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RollingRecreateRequest) => Buffer.from(RollingRecreateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RollingRecreateRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified instance group. */
  start: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartInstanceGroupRequest) =>
      Buffer.from(StartInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified instance group. */
  delete: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteInstanceGroupRequest) =>
      Buffer.from(DeleteInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists instances for the specified instance group. */
  listInstances: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstanceGroupInstancesRequest) =>
      Buffer.from(ListInstanceGroupInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListInstanceGroupInstancesRequest.decode(value),
    responseSerialize: (value: ListInstanceGroupInstancesResponse) =>
      Buffer.from(ListInstanceGroupInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListInstanceGroupInstancesResponse.decode(value),
  },
  /** Delete instances from the instance group. */
  deleteInstances: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteInstancesRequest) => Buffer.from(DeleteInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteInstancesRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stop instances from the instance group. */
  stopInstances: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopInstancesRequest) => Buffer.from(StopInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopInstancesRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified instance group. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstanceGroupOperationsRequest) =>
      Buffer.from(ListInstanceGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListInstanceGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListInstanceGroupOperationsResponse) =>
      Buffer.from(ListInstanceGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListInstanceGroupOperationsResponse.decode(value),
  },
  /** Lists logs for the specified instance group. */
  listLogRecords: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstanceGroupLogRecordsRequest) =>
      Buffer.from(ListInstanceGroupLogRecordsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListInstanceGroupLogRecordsRequest.decode(value),
    responseSerialize: (value: ListInstanceGroupLogRecordsResponse) =>
      Buffer.from(ListInstanceGroupLogRecordsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListInstanceGroupLogRecordsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified instance group. */
  listAccessBindings: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified instance group. */
  setAccessBindings: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified instance group. */
  updateAccessBindings: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Resumes all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them.
   */
  resumeProcesses: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ResumeInstanceGroupProcessesRequest) =>
      Buffer.from(ResumeInstanceGroupProcessesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ResumeInstanceGroupProcessesRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Pauses all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
   */
  pauseProcesses: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PauseInstanceGroupProcessesRequest) =>
      Buffer.from(PauseInstanceGroupProcessesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PauseInstanceGroupProcessesRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface InstanceGroupServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified InstanceGroup resource.
   *
   * To get the list of available InstanceGroup resources, make a [List] request.
   */
  get: handleUnaryCall<GetInstanceGroupRequest, InstanceGroup>;
  /** Retrieves the list of InstanceGroup resources in the specified folder. */
  list: handleUnaryCall<ListInstanceGroupsRequest, ListInstanceGroupsResponse>;
  /**
   * Creates an instance group in the specified folder.
   * This method starts an operation that can be cancelled by another operation.
   */
  create: handleUnaryCall<CreateInstanceGroupRequest, Operation>;
  /**
   * Creates an instance group in the specified folder from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  createFromYaml: handleUnaryCall<CreateInstanceGroupFromYamlRequest, Operation>;
  /**
   * Updates the specified instance group.
   * This method starts an operation that can be cancelled by another operation.
   */
  update: handleUnaryCall<UpdateInstanceGroupRequest, Operation>;
  /**
   * Updates the specified instance group from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  updateFromYaml: handleUnaryCall<UpdateInstanceGroupFromYamlRequest, Operation>;
  /** Stops the specified instance group. */
  stop: handleUnaryCall<StopInstanceGroupRequest, Operation>;
  /**
   * Performs rolling restart of specified instances for the specified instance group.
   * Rolling restart does restart of instances respecting all group policies.
   */
  rollingRestart: handleUnaryCall<RollingRestartRequest, Operation>;
  /**
   * Performs rolling recreate of specified instances for the specified instance group.
   * Rolling recreate does recreate of instance VMs respecting all group policies.
   */
  rollingRecreate: handleUnaryCall<RollingRecreateRequest, Operation>;
  /** Starts the specified instance group. */
  start: handleUnaryCall<StartInstanceGroupRequest, Operation>;
  /** Deletes the specified instance group. */
  delete: handleUnaryCall<DeleteInstanceGroupRequest, Operation>;
  /** Lists instances for the specified instance group. */
  listInstances: handleUnaryCall<ListInstanceGroupInstancesRequest, ListInstanceGroupInstancesResponse>;
  /** Delete instances from the instance group. */
  deleteInstances: handleUnaryCall<DeleteInstancesRequest, Operation>;
  /** Stop instances from the instance group. */
  stopInstances: handleUnaryCall<StopInstancesRequest, Operation>;
  /** Lists operations for the specified instance group. */
  listOperations: handleUnaryCall<ListInstanceGroupOperationsRequest, ListInstanceGroupOperationsResponse>;
  /** Lists logs for the specified instance group. */
  listLogRecords: handleUnaryCall<ListInstanceGroupLogRecordsRequest, ListInstanceGroupLogRecordsResponse>;
  /** Lists existing access bindings for the specified instance group. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Sets access bindings for the specified instance group. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified instance group. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /**
   * Resumes all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them.
   */
  resumeProcesses: handleUnaryCall<ResumeInstanceGroupProcessesRequest, Operation>;
  /**
   * Pauses all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
   */
  pauseProcesses: handleUnaryCall<PauseInstanceGroupProcessesRequest, Operation>;
}

export interface InstanceGroupServiceClient extends Client {
  /**
   * Returns the specified InstanceGroup resource.
   *
   * To get the list of available InstanceGroup resources, make a [List] request.
   */
  get(
    request: GetInstanceGroupRequest,
    callback: (error: ServiceError | null, response: InstanceGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: InstanceGroup) => void,
  ): ClientUnaryCall;
  get(
    request: GetInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: InstanceGroup) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of InstanceGroup resources in the specified folder. */
  list(
    request: ListInstanceGroupsRequest,
    callback: (error: ServiceError | null, response: ListInstanceGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListInstanceGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListInstanceGroupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListInstanceGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListInstanceGroupsResponse) => void,
  ): ClientUnaryCall;
  /**
   * Creates an instance group in the specified folder.
   * This method starts an operation that can be cancelled by another operation.
   */
  create(
    request: CreateInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Creates an instance group in the specified folder from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  createFromYaml(
    request: CreateInstanceGroupFromYamlRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createFromYaml(
    request: CreateInstanceGroupFromYamlRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createFromYaml(
    request: CreateInstanceGroupFromYamlRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified instance group.
   * This method starts an operation that can be cancelled by another operation.
   */
  update(
    request: UpdateInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Updates the specified instance group from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  updateFromYaml(
    request: UpdateInstanceGroupFromYamlRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateFromYaml(
    request: UpdateInstanceGroupFromYamlRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateFromYaml(
    request: UpdateInstanceGroupFromYamlRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Stops the specified instance group. */
  stop(
    request: StopInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Performs rolling restart of specified instances for the specified instance group.
   * Rolling restart does restart of instances respecting all group policies.
   */
  rollingRestart(
    request: RollingRestartRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rollingRestart(
    request: RollingRestartRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rollingRestart(
    request: RollingRestartRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Performs rolling recreate of specified instances for the specified instance group.
   * Rolling recreate does recreate of instance VMs respecting all group policies.
   */
  rollingRecreate(
    request: RollingRecreateRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rollingRecreate(
    request: RollingRecreateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rollingRecreate(
    request: RollingRecreateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Starts the specified instance group. */
  start(
    request: StartInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified instance group. */
  delete(
    request: DeleteInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists instances for the specified instance group. */
  listInstances(
    request: ListInstanceGroupInstancesRequest,
    callback: (error: ServiceError | null, response: ListInstanceGroupInstancesResponse) => void,
  ): ClientUnaryCall;
  listInstances(
    request: ListInstanceGroupInstancesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListInstanceGroupInstancesResponse) => void,
  ): ClientUnaryCall;
  listInstances(
    request: ListInstanceGroupInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListInstanceGroupInstancesResponse) => void,
  ): ClientUnaryCall;
  /** Delete instances from the instance group. */
  deleteInstances(
    request: DeleteInstancesRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteInstances(
    request: DeleteInstancesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteInstances(
    request: DeleteInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Stop instances from the instance group. */
  stopInstances(
    request: StopInstancesRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stopInstances(
    request: StopInstancesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stopInstances(
    request: StopInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists operations for the specified instance group. */
  listOperations(
    request: ListInstanceGroupOperationsRequest,
    callback: (error: ServiceError | null, response: ListInstanceGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListInstanceGroupOperationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListInstanceGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  listOperations(
    request: ListInstanceGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListInstanceGroupOperationsResponse) => void,
  ): ClientUnaryCall;
  /** Lists logs for the specified instance group. */
  listLogRecords(
    request: ListInstanceGroupLogRecordsRequest,
    callback: (error: ServiceError | null, response: ListInstanceGroupLogRecordsResponse) => void,
  ): ClientUnaryCall;
  listLogRecords(
    request: ListInstanceGroupLogRecordsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListInstanceGroupLogRecordsResponse) => void,
  ): ClientUnaryCall;
  listLogRecords(
    request: ListInstanceGroupLogRecordsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListInstanceGroupLogRecordsResponse) => void,
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified instance group. */
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
  /** Sets access bindings for the specified instance group. */
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
  /** Updates access bindings for the specified instance group. */
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
  /**
   * Resumes all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them.
   */
  resumeProcesses(
    request: ResumeInstanceGroupProcessesRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  resumeProcesses(
    request: ResumeInstanceGroupProcessesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  resumeProcesses(
    request: ResumeInstanceGroupProcessesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /**
   * Pauses all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
   */
  pauseProcesses(
    request: PauseInstanceGroupProcessesRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  pauseProcesses(
    request: PauseInstanceGroupProcessesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  pauseProcesses(
    request: PauseInstanceGroupProcessesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const InstanceGroupServiceClient = makeGenericClientConstructor(
  InstanceGroupServiceService,
  "yandex.cloud.compute.v1.instancegroup.InstanceGroupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): InstanceGroupServiceClient;
  service: typeof InstanceGroupServiceService;
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
