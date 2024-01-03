/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientReadableStream,
  handleServerStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { AuthSettings } from "./auth";
import { Backup } from "./backup";
import {
  Access,
  Cluster,
  Cluster_Environment,
  cluster_EnvironmentFromJSON,
  cluster_EnvironmentToJSON,
  Host,
  OpenSearch_GroupRole,
  openSearch_GroupRoleFromJSON,
  openSearch_GroupRoleToJSON,
  Resources,
} from "./cluster";
import { OpenSearchConfig2 } from "./config/opensearch";
import { MaintenanceWindow } from "./maintenance";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest";
  /**
   * ID of the OpenSearch cluster to return.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest";
  /**
   * ID of the folder to list OpenSearch clusters in.
   *
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns
   * a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
   *
   * 2. An `=` operator.
   *
   * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
   */
  filter: string;
}

export interface ListClustersResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse";
  /** List of OpenSearch clusters. */
  clusters: Cluster[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
   * for the [ListClustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest";
  /** ID of the folder to create the OpenSearch cluster in. */
  folderId: string;
  /** Name of the OpenSearch cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the OpenSearch cluster. */
  description: string;
  /**
   * Custom labels for the OpenSearch cluster as `key:value` pairs.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the OpenSearch cluster. */
  environment: Cluster_Environment;
  /** OpenSearch cluster configuration. */
  configSpec?:
    | ConfigCreateSpec
    | undefined;
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups. */
  securityGroupIds: string[];
  /** ID of the service account used to access Object Storage. */
  serviceAccountId: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow | undefined;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata";
  /** ID of the OpenSearch cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest";
  /**
   * ID of the OpenSearch cluster resource to update.
   * To get the OpenSearch cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the OpenSearch cluster resource should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New description of the OpenSearch cluster. */
  description: string;
  /**
   * Custom labels for the OpenSearch cluster as `key:value` pairs.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   *
   * The new set of labels completely replaces the old one. To add a label, request the current
   * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
   */
  labels: { [key: string]: string };
  /** New cluster configuration */
  configSpec?:
    | ConfigUpdateSpec
    | undefined;
  /** New name for the cluster. The name must be unique within the folder. */
  name: string;
  /** User security groups */
  securityGroupIds: string[];
  /** ID of the service account used to access Object Storage. */
  serviceAccountId: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow | undefined;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata";
  /** ID of the OpenSearch cluster resource that is being updated. */
  clusterId: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest";
  /**
   * ID of the OpenSearch cluster to delete.
   * To get the OpenSearch cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata";
  /** ID of the OpenSearch cluster that is being deleted. */
  clusterId: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest";
  /**
   * ID of the OpenSearch cluster to request logs for.
   *
   * To get the OpenSearch cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Columns from log table to request.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Start timestamp for the logs request. */
  fromTime?:
    | Date
    | undefined;
  /** End timestamp for the logs request. */
  toTime?:
    | Date
    | undefined;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterLogsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
  /** The service always returns a [ListClusterLogsResponse.next_page_token], even if the current page is empty. */
  alwaysNextPageToken: boolean;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname] field.
   *
   * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   *
   * 3. A value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
   *
   * Examples of a filter:
   * * `message.hostname='node1.db.cloud.yandex.net'`;
   * * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`.
   */
  filter: string;
  /** Type of the service to request logs about. */
  serviceType: ListClusterLogsRequest_ServiceType;
}

export enum ListClusterLogsRequest_ServiceType {
  /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** OPENSEARCH - OpenSearch logs. */
  OPENSEARCH = 1,
  /** DASHBOARDS - Dashboards logs. */
  DASHBOARDS = 2,
  UNRECOGNIZED = -1,
}

export function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "OPENSEARCH":
      return ListClusterLogsRequest_ServiceType.OPENSEARCH;
    case 2:
    case "DASHBOARDS":
      return ListClusterLogsRequest_ServiceType.DASHBOARDS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListClusterLogsRequest_ServiceType.UNRECOGNIZED;
  }
}

export function listClusterLogsRequest_ServiceTypeToJSON(object: ListClusterLogsRequest_ServiceType): string {
  switch (object) {
    case ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
      return "SERVICE_TYPE_UNSPECIFIED";
    case ListClusterLogsRequest_ServiceType.OPENSEARCH:
      return "OPENSEARCH";
    case ListClusterLogsRequest_ServiceType.DASHBOARDS:
      return "DASHBOARDS";
    case ListClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord";
  /** Time when the log was recorded. */
  timestamp?:
    | Date
    | undefined;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse";
  /** Requested log records. */
  logs: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   *
   * This value is interchangeable with the [StreamLogRecord.next_record_token] from [StreamLogs] method.
   */
  nextPageToken: string;
}

export interface StreamLogRecord {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord";
  /** One of the requested log records. */
  record?:
    | LogRecord
    | undefined;
  /**
   * This token allows you to continue streaming logs starting from the exact same record.
   *
   * To do that, specify value of [next_record_token] as the value for [StreamLogs.record_token] parameter in the next [StreamLogs] request.
   *
   * This value is interchangeable with [ListLogs.next_page_token] from [ListLogs] method.
   */
  nextRecordToken: string;
}

export interface StreamClusterLogsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest";
  /** ID of the OpenSearch cluster. */
  clusterId: string;
  /**
   * Columns from log table to get in the response.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Start timestamp for the logs request. */
  fromTime?:
    | Date
    | undefined;
  /**
   * End timestamp for the logs request.
   *
   * If this field is not set, all existing logs are sent as well as the new ones as they appear.
   *
   * In essence it has `tail -f` semantics.
   */
  toTime?:
    | Date
    | undefined;
  /**
   * Record token. Set `record_token` to the `next_record_token` returned by the previous [StreamLogs]
   * request to start streaming from the next log record.
   */
  recordToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname] field.
   *
   * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   *
   * 3. A value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
   *
   * Examples of a filter:
   * * `message.hostname='node1.db.cloud.yandex.net'`;
   * * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`.
   */
  filter: string;
  /** Type of the service to request logs about. */
  serviceType: StreamClusterLogsRequest_ServiceType;
}

export enum StreamClusterLogsRequest_ServiceType {
  /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** OPENSEARCH - OpenSearch logs. */
  OPENSEARCH = 1,
  /** DASHBOARDS - Dashboards logs. */
  DASHBOARDS = 2,
  UNRECOGNIZED = -1,
}

export function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "OPENSEARCH":
      return StreamClusterLogsRequest_ServiceType.OPENSEARCH;
    case 2:
    case "DASHBOARDS":
      return StreamClusterLogsRequest_ServiceType.DASHBOARDS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamClusterLogsRequest_ServiceType.UNRECOGNIZED;
  }
}

export function streamClusterLogsRequest_ServiceTypeToJSON(object: StreamClusterLogsRequest_ServiceType): string {
  switch (object) {
    case StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
      return "SERVICE_TYPE_UNSPECIFIED";
    case StreamClusterLogsRequest_ServiceType.OPENSEARCH:
      return "OPENSEARCH";
    case StreamClusterLogsRequest_ServiceType.DASHBOARDS:
      return "DASHBOARDS";
    case StreamClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest";
  /** ID of the OpenSearch cluster resource to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns
   * a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse";
  /** List of Operation resources for the specified OpenSearch cluster. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterHostsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest";
  /**
   * ID of the OpenSearch cluster.
   * To get the OpenSearch cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns
   * a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterHostsResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse";
  /** Requested list of hosts for the cluster. */
  hosts: Host[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token]
   * as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MoveClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest";
  /** ID of the OpenSearch cluster to move. */
  clusterId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata";
  /** ID of the OpenSearch cluster being moved. */
  clusterId: string;
  /** ID of the source folder. */
  sourceFolderId: string;
  /** ID of the destnation folder. */
  destinationFolderId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest";
  /**
   * ID of the OpenSearch cluster to start.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata";
  /** ID of the OpenSearch cluster being started. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest";
  /**
   * ID of the OpenSearch cluster to stop.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata";
  /** ID of the OpenSearch cluster being stopped. */
  clusterId: string;
}

export interface ConfigCreateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec";
  /** OpenSearch version. */
  version: string;
  /** OpenSearch admin password. */
  adminPassword: string;
  /** OpenSearch configuration. */
  opensearchSpec?:
    | OpenSearchCreateSpec
    | undefined;
  /** Dashboards configuration. */
  dashboardsSpec?:
    | DashboardsCreateSpec
    | undefined;
  /** Access policy for external services. */
  access?: Access | undefined;
}

/** OpenSearch create-time configuration. */
export interface OpenSearchCreateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec";
  /** Names of the cluster plugins. */
  plugins: string[];
  /** OpenSearch type host groups of the cluster. */
  nodeGroups: OpenSearchCreateSpec_NodeGroup[];
  opensearchConfig2?: OpenSearchConfig2 | undefined;
}

/** Configuration of the host group. */
export interface OpenSearchCreateSpec_NodeGroup {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup";
  /** Name of the group. */
  name: string;
  /** Resources allocated to the hosts. */
  resources?:
    | Resources
    | undefined;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** IDs of the availability zones the hosts belong to. */
  zoneIds: string[];
  /** IDs of the subnets that the hosts belong to. */
  subnetIds: string[];
  /** Determines whether a public IP is assigned to the hosts in the group. */
  assignPublicIp: boolean;
  /** Roles of the hosts in the group. */
  roles: OpenSearch_GroupRole[];
}

/** Dashboards create-time configuration. */
export interface DashboardsCreateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec";
  /** Dashboards type host groups of the cluster. */
  nodeGroups: DashboardsCreateSpec_NodeGroup[];
}

export interface DashboardsCreateSpec_NodeGroup {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup";
  /** Name of the group. */
  name: string;
  /** Resources allocated to the hosts. */
  resources?:
    | Resources
    | undefined;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** IDs of the availability zones the hosts belong to. */
  zoneIds: string[];
  /** IDs of the subnets that the hosts belong to. */
  subnetIds: string[];
  /** Determines whether a public IP is assigned to the hosts in the group. */
  assignPublicIp: boolean;
}

export interface ConfigUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec";
  /** OpenSearch version. */
  version: string;
  /** OpenSearch admin password. */
  adminPassword: string;
  /** OpenSearch configuration. */
  opensearchSpec?:
    | OpenSearchClusterUpdateSpec
    | undefined;
  /** Dashboards configuration. */
  dashboardsSpec?:
    | DashboardsClusterUpdateSpec
    | undefined;
  /** Access policy for external services. */
  access?: Access | undefined;
}

export interface OpenSearchClusterUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec";
  /** Names of the cluster plugins. */
  plugins: string[];
  opensearchConfig2?: OpenSearchConfig2 | undefined;
}

/** Dashboards configuration. */
export interface DashboardsClusterUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec";
}

export interface BackupClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest";
  /**
   * ID of the OpenSearch cluster to back up.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface BackupClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata";
  /** ID of the OpenSearch cluster being backed up. */
  clusterId: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest";
  /**
   * ID of the backup to create a new cluster from.
   *
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /** Name of the new OpenSearch cluster to be created from the backup. The name must be unique within the folder. */
  name: string;
  /** Description of the new OpenSearch cluster to be created from the backup. */
  description: string;
  /**
   * Custom labels for the new OpenSearch cluster to be created from the backup as `key:value` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the new OpenSearch cluster to be created from the backup. */
  environment: Cluster_Environment;
  /** Configuration for the new OpenSearch cluster to be created from the backup. */
  configSpec?:
    | ConfigCreateSpec
    | undefined;
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups. */
  securityGroupIds: string[];
  /** ID of the service account used to access Object Storage. */
  serviceAccountId: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /**
   * ID of the folder to create the OpenSearch cluster in.
   *
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow | undefined;
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata";
  /** ID of the new OpenSearch cluster being created from a backup. */
  clusterId: string;
  /** ID of the backup being used for creating a cluster. */
  backupId: string;
}

export interface RescheduleMaintenanceRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest";
  /**
   * ID of the OpenSearch cluster to reschedule the maintenance operation for.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** The type of the reschedule request. */
  rescheduleType: RescheduleMaintenanceRequest_RescheduleType;
  /**
   * The time until which this maintenance operation should be delayed.
   * The value should be ahead of the first time when the maintenance operation has been scheduled for no more than two weeks.
   * The value can also point to a moment in the past if [reschedule_type.IMMEDIATE] reschedule type is selected.
   */
  delayedUntil?: Date | undefined;
}

export enum RescheduleMaintenanceRequest_RescheduleType {
  /** RESCHEDULE_TYPE_UNSPECIFIED - Time of the maintenance is not specified.. */
  RESCHEDULE_TYPE_UNSPECIFIED = 0,
  /** IMMEDIATE - Start the maintenance operation immediately. */
  IMMEDIATE = 1,
  /** NEXT_AVAILABLE_WINDOW - Start the maintenance operation within the next available maintenance window. */
  NEXT_AVAILABLE_WINDOW = 2,
  /** SPECIFIC_TIME - Start the maintenance operation at the specific time. */
  SPECIFIC_TIME = 3,
  UNRECOGNIZED = -1,
}

export function rescheduleMaintenanceRequest_RescheduleTypeFromJSON(
  object: any,
): RescheduleMaintenanceRequest_RescheduleType {
  switch (object) {
    case 0:
    case "RESCHEDULE_TYPE_UNSPECIFIED":
      return RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED;
    case 1:
    case "IMMEDIATE":
      return RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE;
    case 2:
    case "NEXT_AVAILABLE_WINDOW":
      return RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW;
    case 3:
    case "SPECIFIC_TIME":
      return RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RescheduleMaintenanceRequest_RescheduleType.UNRECOGNIZED;
  }
}

export function rescheduleMaintenanceRequest_RescheduleTypeToJSON(
  object: RescheduleMaintenanceRequest_RescheduleType,
): string {
  switch (object) {
    case RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED:
      return "RESCHEDULE_TYPE_UNSPECIFIED";
    case RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE:
      return "IMMEDIATE";
    case RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW:
      return "NEXT_AVAILABLE_WINDOW";
    case RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME:
      return "SPECIFIC_TIME";
    case RescheduleMaintenanceRequest_RescheduleType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RescheduleMaintenanceMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata";
  /** ID of the OpenSearch cluster where the reschedule is applied. */
  clusterId: string;
  /** The time until which this maintenance operation is to be delayed. */
  delayedUntil?: Date | undefined;
}

export interface ListClusterBackupsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest";
  /**
   * ID of the OpenSearch cluster.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListClusterBackupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the [ListClusterBackupsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterBackupsResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse";
  /** List of the OpenSearch cluster backups. */
  backups: Backup[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
   * for the [ListClustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteOpenSearchNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to delete the OpenSearch type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the OpenSearch type host group to delete. */
  name: string;
}

export interface UpdateOpenSearchNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to update the OpenSearch type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the OpenSearch type host group to be updated. */
  name: string;
  /** Field mask that specifies which fields of the host group configuration should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New configuration for the host group. */
  nodeGroupSpec?: OpenSearchNodeGroupUpdateSpec | undefined;
}

export interface OpenSearchNodeGroupUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec";
  /** Resources allocated to the hosts. */
  resources?:
    | Resources
    | undefined;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** Opensearch roles applicable to the node group. */
  roles: OpenSearch_GroupRole[];
  /** IDs of the availability zones for hosts */
  zoneIds: string[];
  /** IDs of the subnets for hosts */
  subnetIds: string[];
  /** Whether the hosts should get a public IP address. */
  assignPublicIp: boolean;
}

export interface AddOpenSearchNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to create the OpenSearch type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the new host group. */
  nodeGroupSpec?: OpenSearchCreateSpec_NodeGroup | undefined;
}

export interface DeleteDashboardsNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to delete the Dashboards type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the Dashboards type host group to delete. */
  name: string;
}

export interface UpdateDashboardsNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest";
  /** ID of the OpenSearch cluster to update the Dashboards type host group in. */
  clusterId: string;
  /** Name of the Dashboards type host group to be updated. */
  name: string;
  /** Field mask that specifies which fields of the host group configuration should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New configuration for the host group. */
  nodeGroupSpec?: DashboardsNodeGroupUpdateSpec | undefined;
}

export interface DashboardsNodeGroupUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec";
  /** Resources allocated to the hosts. */
  resources?:
    | Resources
    | undefined;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** IDs of the availability zones for hosts */
  zoneIds: string[];
  /** IDs of the subnets for hosts */
  subnetIds: string[];
  /** Whether the hosts should get a public IP address. */
  assignPublicIp: boolean;
}

export interface AddDashboardsNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to create the Dashboards type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the new host group. */
  nodeGroupSpec?: DashboardsCreateSpec_NodeGroup | undefined;
}

export interface AddNodeGroupMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata";
  /** ID of the OpenSearch cluster where the host group is being created. */
  clusterId: string;
  /** Name of the host group being created. */
  name: string;
}

export interface UpdateNodeGroupMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata";
  /** ID of the OpenSearch cluster where the host group is being updated. */
  clusterId: string;
  /** Name of the host group being updated. */
  name: string;
}

export interface DeleteNodeGroupMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata";
  /** ID of the OpenSearch cluster where the host group is being deleted. */
  clusterId: string;
  /** Name of the host group being deleted. */
  name: string;
}

export interface GetAuthSettingsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest";
  /** Required. ID of the OpenSearch cluster. */
  clusterId: string;
}

export interface UpdateAuthSettingsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest";
  /** Required. ID of the OpenSearch cluster. */
  clusterId: string;
  /** Required. Auth settings. */
  settings?: AuthSettings | undefined;
}

export interface UpdateAuthSettingsMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata";
  /** ID of the OpenSearch cluster. */
  clusterId: string;
}

function createBaseGetClusterRequest(): GetClusterRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest", clusterId: "" };
}

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest" as const,

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

  create(base?: DeepPartial<GetClusterRequest>): GetClusterRequest {
    return GetClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetClusterRequest>): GetClusterRequest {
    const message = createBaseGetClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetClusterRequest.$type, GetClusterRequest);

function createBaseListClustersRequest(): ListClustersRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest" as const,

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

  create(base?: DeepPartial<ListClustersRequest>): ListClustersRequest {
    return ListClustersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClustersRequest>): ListClustersRequest {
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
  return { $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse", clusters: [], nextPageToken: "" };
}

export const ListClustersResponse = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse" as const,

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

  create(base?: DeepPartial<ListClustersResponse>): ListClustersResponse {
    return ListClustersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClustersResponse>): ListClustersResponse {
    const message = createBaseListClustersResponse();
    message.clusters = object.clusters?.map((e) => Cluster.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClustersResponse.$type, ListClustersResponse);

function createBaseCreateClusterRequest(): CreateClusterRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    environment: 0,
    configSpec: undefined,
    networkId: "",
    securityGroupIds: [],
    serviceAccountId: "",
    deletionProtection: false,
    maintenanceWindow: undefined,
  };
}

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(40).int32(message.environment);
    }
    if (message.configSpec !== undefined) {
      ConfigCreateSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(58).string(message.networkId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(66).string(v!);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.deletionProtection === true) {
      writer.uint32(80).bool(message.deletionProtection);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(90).fork()).ldelim();
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
          if (tag !== 40) {
            break;
          }

          message.environment = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.configSpec = ConfigCreateSpec.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.networkId = reader.string();
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

          message.serviceAccountId = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
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
      environment: isSet(object.environment) ? cluster_EnvironmentFromJSON(object.environment) : 0,
      configSpec: isSet(object.configSpec) ? ConfigCreateSpec.fromJSON(object.configSpec) : undefined,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
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
    if (message.environment !== 0) {
      obj.environment = cluster_EnvironmentToJSON(message.environment);
    }
    if (message.configSpec !== undefined) {
      obj.configSpec = ConfigCreateSpec.toJSON(message.configSpec);
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateClusterRequest>): CreateClusterRequest {
    return CreateClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateClusterRequest>): CreateClusterRequest {
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
    message.environment = object.environment ?? 0;
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? ConfigCreateSpec.fromPartial(object.configSpec)
      : undefined;
    message.networkId = object.networkId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

function createBaseCreateClusterRequest_LabelsEntry(): CreateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry" as const,

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

  create(base?: DeepPartial<CreateClusterRequest_LabelsEntry>): CreateClusterRequest_LabelsEntry {
    return CreateClusterRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateClusterRequest_LabelsEntry>): CreateClusterRequest_LabelsEntry {
    const message = createBaseCreateClusterRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest_LabelsEntry.$type, CreateClusterRequest_LabelsEntry);

function createBaseCreateClusterMetadata(): CreateClusterMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata", clusterId: "" };
}

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata" as const,

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

  create(base?: DeepPartial<CreateClusterMetadata>): CreateClusterMetadata {
    return CreateClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateClusterMetadata>): CreateClusterMetadata {
    const message = createBaseCreateClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateClusterMetadata.$type, CreateClusterMetadata);

function createBaseUpdateClusterRequest(): UpdateClusterRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest",
    clusterId: "",
    updateMask: undefined,
    description: "",
    labels: {},
    configSpec: undefined,
    name: "",
    securityGroupIds: [],
    serviceAccountId: "",
    deletionProtection: false,
    maintenanceWindow: undefined,
  };
}

export const UpdateClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.configSpec !== undefined) {
      ConfigUpdateSpec.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(58).string(v!);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(66).string(message.serviceAccountId);
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(82).fork()).ldelim();
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

          message.configSpec = ConfigUpdateSpec.decode(reader, reader.uint32());
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

          message.securityGroupIds.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
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
      configSpec: isSet(object.configSpec) ? ConfigUpdateSpec.fromJSON(object.configSpec) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
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
      obj.configSpec = ConfigUpdateSpec.toJSON(message.configSpec);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClusterRequest>): UpdateClusterRequest {
    return UpdateClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterRequest>): UpdateClusterRequest {
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
      ? ConfigUpdateSpec.fromPartial(object.configSpec)
      : undefined;
    message.name = object.name ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

function createBaseUpdateClusterRequest_LabelsEntry(): UpdateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry" as const,

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

  create(base?: DeepPartial<UpdateClusterRequest_LabelsEntry>): UpdateClusterRequest_LabelsEntry {
    return UpdateClusterRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterRequest_LabelsEntry>): UpdateClusterRequest_LabelsEntry {
    const message = createBaseUpdateClusterRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest_LabelsEntry.$type, UpdateClusterRequest_LabelsEntry);

function createBaseUpdateClusterMetadata(): UpdateClusterMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata", clusterId: "" };
}

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata" as const,

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

  create(base?: DeepPartial<UpdateClusterMetadata>): UpdateClusterMetadata {
    return UpdateClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterMetadata>): UpdateClusterMetadata {
    const message = createBaseUpdateClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterMetadata.$type, UpdateClusterMetadata);

function createBaseDeleteClusterRequest(): DeleteClusterRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest", clusterId: "" };
}

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest" as const,

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

  create(base?: DeepPartial<DeleteClusterRequest>): DeleteClusterRequest {
    return DeleteClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterRequest>): DeleteClusterRequest {
    const message = createBaseDeleteClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterRequest.$type, DeleteClusterRequest);

function createBaseDeleteClusterMetadata(): DeleteClusterMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata", clusterId: "" };
}

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata" as const,

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

  create(base?: DeepPartial<DeleteClusterMetadata>): DeleteClusterMetadata {
    return DeleteClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterMetadata>): DeleteClusterMetadata {
    const message = createBaseDeleteClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterMetadata.$type, DeleteClusterMetadata);

function createBaseListClusterLogsRequest(): ListClusterLogsRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: [],
    fromTime: undefined,
    toTime: undefined,
    pageSize: 0,
    pageToken: "",
    alwaysNextPageToken: false,
    filter: "",
    serviceType: 0,
  };
}

export const ListClusterLogsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest" as const,

  encode(message: ListClusterLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.columnFilter) {
      writer.uint32(18).string(v!);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(toTimestamp(message.toTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(40).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(50).string(message.pageToken);
    }
    if (message.alwaysNextPageToken === true) {
      writer.uint32(56).bool(message.alwaysNextPageToken);
    }
    if (message.filter !== "") {
      writer.uint32(66).string(message.filter);
    }
    if (message.serviceType !== 0) {
      writer.uint32(72).int32(message.serviceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterLogsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterLogsRequest();
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

          message.columnFilter.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fromTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.toTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.alwaysNextPageToken = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.serviceType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListClusterLogsRequest {
    return {
      $type: ListClusterLogsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      columnFilter: globalThis.Array.isArray(object?.columnFilter)
        ? object.columnFilter.map((e: any) => globalThis.String(e))
        : [],
      fromTime: isSet(object.fromTime) ? fromJsonTimestamp(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? fromJsonTimestamp(object.toTime) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      alwaysNextPageToken: isSet(object.alwaysNextPageToken) ? globalThis.Boolean(object.alwaysNextPageToken) : false,
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      serviceType: isSet(object.serviceType) ? listClusterLogsRequest_ServiceTypeFromJSON(object.serviceType) : 0,
    };
  },

  toJSON(message: ListClusterLogsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.columnFilter?.length) {
      obj.columnFilter = message.columnFilter;
    }
    if (message.fromTime !== undefined) {
      obj.fromTime = message.fromTime.toISOString();
    }
    if (message.toTime !== undefined) {
      obj.toTime = message.toTime.toISOString();
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.alwaysNextPageToken === true) {
      obj.alwaysNextPageToken = message.alwaysNextPageToken;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.serviceType !== 0) {
      obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(message.serviceType);
    }
    return obj;
  },

  create(base?: DeepPartial<ListClusterLogsRequest>): ListClusterLogsRequest {
    return ListClusterLogsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterLogsRequest>): ListClusterLogsRequest {
    const message = createBaseListClusterLogsRequest();
    message.clusterId = object.clusterId ?? "";
    message.columnFilter = object.columnFilter?.map((e) => e) || [];
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.alwaysNextPageToken = object.alwaysNextPageToken ?? false;
    message.filter = object.filter ?? "";
    message.serviceType = object.serviceType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsRequest.$type, ListClusterLogsRequest);

function createBaseLogRecord(): LogRecord {
  return { $type: "yandex.cloud.mdb.opensearch.v1.LogRecord", timestamp: undefined, message: {} };
}

export const LogRecord = {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord" as const,

  encode(message: LogRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.message).forEach(([key, value]) => {
      LogRecord_MessageEntry.encode({
        $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry",
        key: key as any,
        value,
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = LogRecord_MessageEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.message[entry2.key] = entry2.value;
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

  fromJSON(object: any): LogRecord {
    return {
      $type: LogRecord.$type,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      message: isObject(object.message)
        ? Object.entries(object.message).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: LogRecord): unknown {
    const obj: any = {};
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.message) {
      const entries = Object.entries(message.message);
      if (entries.length > 0) {
        obj.message = {};
        entries.forEach(([k, v]) => {
          obj.message[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<LogRecord>): LogRecord {
    return LogRecord.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LogRecord>): LogRecord {
    const message = createBaseLogRecord();
    message.timestamp = object.timestamp ?? undefined;
    message.message = Object.entries(object.message ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(LogRecord.$type, LogRecord);

function createBaseLogRecord_MessageEntry(): LogRecord_MessageEntry {
  return { $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry", key: "", value: "" };
}

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry" as const,

  encode(message: LogRecord_MessageEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogRecord_MessageEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogRecord_MessageEntry();
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

  fromJSON(object: any): LogRecord_MessageEntry {
    return {
      $type: LogRecord_MessageEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: LogRecord_MessageEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<LogRecord_MessageEntry>): LogRecord_MessageEntry {
    return LogRecord_MessageEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LogRecord_MessageEntry>): LogRecord_MessageEntry {
    const message = createBaseLogRecord_MessageEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(LogRecord_MessageEntry.$type, LogRecord_MessageEntry);

function createBaseListClusterLogsResponse(): ListClusterLogsResponse {
  return { $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse", logs: [], nextPageToken: "" };
}

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse" as const,

  encode(message: ListClusterLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logs) {
      LogRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterLogsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logs.push(LogRecord.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterLogsResponse {
    return {
      $type: ListClusterLogsResponse.$type,
      logs: globalThis.Array.isArray(object?.logs) ? object.logs.map((e: any) => LogRecord.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClusterLogsResponse): unknown {
    const obj: any = {};
    if (message.logs?.length) {
      obj.logs = message.logs.map((e) => LogRecord.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListClusterLogsResponse>): ListClusterLogsResponse {
    return ListClusterLogsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterLogsResponse>): ListClusterLogsResponse {
    const message = createBaseListClusterLogsResponse();
    message.logs = object.logs?.map((e) => LogRecord.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsResponse.$type, ListClusterLogsResponse);

function createBaseStreamLogRecord(): StreamLogRecord {
  return { $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord", record: undefined, nextRecordToken: "" };
}

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord" as const,

  encode(message: StreamLogRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      LogRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextRecordToken !== "") {
      writer.uint32(18).string(message.nextRecordToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamLogRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamLogRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.record = LogRecord.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextRecordToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamLogRecord {
    return {
      $type: StreamLogRecord.$type,
      record: isSet(object.record) ? LogRecord.fromJSON(object.record) : undefined,
      nextRecordToken: isSet(object.nextRecordToken) ? globalThis.String(object.nextRecordToken) : "",
    };
  },

  toJSON(message: StreamLogRecord): unknown {
    const obj: any = {};
    if (message.record !== undefined) {
      obj.record = LogRecord.toJSON(message.record);
    }
    if (message.nextRecordToken !== "") {
      obj.nextRecordToken = message.nextRecordToken;
    }
    return obj;
  },

  create(base?: DeepPartial<StreamLogRecord>): StreamLogRecord {
    return StreamLogRecord.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamLogRecord>): StreamLogRecord {
    const message = createBaseStreamLogRecord();
    message.record = (object.record !== undefined && object.record !== null)
      ? LogRecord.fromPartial(object.record)
      : undefined;
    message.nextRecordToken = object.nextRecordToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(StreamLogRecord.$type, StreamLogRecord);

function createBaseStreamClusterLogsRequest(): StreamClusterLogsRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest",
    clusterId: "",
    columnFilter: [],
    fromTime: undefined,
    toTime: undefined,
    recordToken: "",
    filter: "",
    serviceType: 0,
  };
}

export const StreamClusterLogsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest" as const,

  encode(message: StreamClusterLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.columnFilter) {
      writer.uint32(18).string(v!);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(toTimestamp(message.toTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.recordToken !== "") {
      writer.uint32(42).string(message.recordToken);
    }
    if (message.filter !== "") {
      writer.uint32(50).string(message.filter);
    }
    if (message.serviceType !== 0) {
      writer.uint32(56).int32(message.serviceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamClusterLogsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamClusterLogsRequest();
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

          message.columnFilter.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fromTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.toTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.recordToken = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.serviceType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamClusterLogsRequest {
    return {
      $type: StreamClusterLogsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      columnFilter: globalThis.Array.isArray(object?.columnFilter)
        ? object.columnFilter.map((e: any) => globalThis.String(e))
        : [],
      fromTime: isSet(object.fromTime) ? fromJsonTimestamp(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? fromJsonTimestamp(object.toTime) : undefined,
      recordToken: isSet(object.recordToken) ? globalThis.String(object.recordToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      serviceType: isSet(object.serviceType) ? streamClusterLogsRequest_ServiceTypeFromJSON(object.serviceType) : 0,
    };
  },

  toJSON(message: StreamClusterLogsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.columnFilter?.length) {
      obj.columnFilter = message.columnFilter;
    }
    if (message.fromTime !== undefined) {
      obj.fromTime = message.fromTime.toISOString();
    }
    if (message.toTime !== undefined) {
      obj.toTime = message.toTime.toISOString();
    }
    if (message.recordToken !== "") {
      obj.recordToken = message.recordToken;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.serviceType !== 0) {
      obj.serviceType = streamClusterLogsRequest_ServiceTypeToJSON(message.serviceType);
    }
    return obj;
  },

  create(base?: DeepPartial<StreamClusterLogsRequest>): StreamClusterLogsRequest {
    return StreamClusterLogsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamClusterLogsRequest>): StreamClusterLogsRequest {
    const message = createBaseStreamClusterLogsRequest();
    message.clusterId = object.clusterId ?? "";
    message.columnFilter = object.columnFilter?.map((e) => e) || [];
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.recordToken = object.recordToken ?? "";
    message.filter = object.filter ?? "";
    message.serviceType = object.serviceType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(StreamClusterLogsRequest.$type, StreamClusterLogsRequest);

function createBaseListClusterOperationsRequest(): ListClusterOperationsRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest" as const,

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

  create(base?: DeepPartial<ListClusterOperationsRequest>): ListClusterOperationsRequest {
    return ListClusterOperationsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterOperationsRequest>): ListClusterOperationsRequest {
    const message = createBaseListClusterOperationsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterOperationsRequest.$type, ListClusterOperationsRequest);

function createBaseListClusterOperationsResponse(): ListClusterOperationsResponse {
  return { $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse" as const,

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

  create(base?: DeepPartial<ListClusterOperationsResponse>): ListClusterOperationsResponse {
    return ListClusterOperationsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterOperationsResponse>): ListClusterOperationsResponse {
    const message = createBaseListClusterOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterOperationsResponse.$type, ListClusterOperationsResponse);

function createBaseListClusterHostsRequest(): ListClusterHostsRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest" as const,

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
    return obj;
  },

  create(base?: DeepPartial<ListClusterHostsRequest>): ListClusterHostsRequest {
    return ListClusterHostsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterHostsRequest>): ListClusterHostsRequest {
    const message = createBaseListClusterHostsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterHostsRequest.$type, ListClusterHostsRequest);

function createBaseListClusterHostsResponse(): ListClusterHostsResponse {
  return { $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse", hosts: [], nextPageToken: "" };
}

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse" as const,

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

  create(base?: DeepPartial<ListClusterHostsResponse>): ListClusterHostsResponse {
    return ListClusterHostsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterHostsResponse>): ListClusterHostsResponse {
    const message = createBaseListClusterHostsResponse();
    message.hosts = object.hosts?.map((e) => Host.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterHostsResponse.$type, ListClusterHostsResponse);

function createBaseMoveClusterRequest(): MoveClusterRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest", clusterId: "", destinationFolderId: "" };
}

export const MoveClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest" as const,

  encode(message: MoveClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveClusterRequest();
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

          message.destinationFolderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveClusterRequest {
    return {
      $type: MoveClusterRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create(base?: DeepPartial<MoveClusterRequest>): MoveClusterRequest {
    return MoveClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MoveClusterRequest>): MoveClusterRequest {
    const message = createBaseMoveClusterRequest();
    message.clusterId = object.clusterId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveClusterRequest.$type, MoveClusterRequest);

function createBaseMoveClusterMetadata(): MoveClusterMetadata {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
  };
}

export const MoveClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata" as const,

  encode(message: MoveClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.sourceFolderId !== "") {
      writer.uint32(18).string(message.sourceFolderId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(26).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveClusterMetadata();
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

          message.sourceFolderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.destinationFolderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveClusterMetadata {
    return {
      $type: MoveClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      sourceFolderId: isSet(object.sourceFolderId) ? globalThis.String(object.sourceFolderId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.sourceFolderId !== "") {
      obj.sourceFolderId = message.sourceFolderId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create(base?: DeepPartial<MoveClusterMetadata>): MoveClusterMetadata {
    return MoveClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MoveClusterMetadata>): MoveClusterMetadata {
    const message = createBaseMoveClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    message.sourceFolderId = object.sourceFolderId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveClusterMetadata.$type, MoveClusterMetadata);

function createBaseStartClusterRequest(): StartClusterRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest", clusterId: "" };
}

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest" as const,

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

  create(base?: DeepPartial<StartClusterRequest>): StartClusterRequest {
    return StartClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartClusterRequest>): StartClusterRequest {
    const message = createBaseStartClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterRequest.$type, StartClusterRequest);

function createBaseStartClusterMetadata(): StartClusterMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata", clusterId: "" };
}

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata" as const,

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

  create(base?: DeepPartial<StartClusterMetadata>): StartClusterMetadata {
    return StartClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartClusterMetadata>): StartClusterMetadata {
    const message = createBaseStartClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterMetadata.$type, StartClusterMetadata);

function createBaseStopClusterRequest(): StopClusterRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest", clusterId: "" };
}

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest" as const,

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

  create(base?: DeepPartial<StopClusterRequest>): StopClusterRequest {
    return StopClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StopClusterRequest>): StopClusterRequest {
    const message = createBaseStopClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopClusterRequest.$type, StopClusterRequest);

function createBaseStopClusterMetadata(): StopClusterMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata", clusterId: "" };
}

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata" as const,

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

  create(base?: DeepPartial<StopClusterMetadata>): StopClusterMetadata {
    return StopClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StopClusterMetadata>): StopClusterMetadata {
    const message = createBaseStopClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopClusterMetadata.$type, StopClusterMetadata);

function createBaseConfigCreateSpec(): ConfigCreateSpec {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec",
    version: "",
    adminPassword: "",
    opensearchSpec: undefined,
    dashboardsSpec: undefined,
    access: undefined,
  };
}

export const ConfigCreateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec" as const,

  encode(message: ConfigCreateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.adminPassword !== "") {
      writer.uint32(18).string(message.adminPassword);
    }
    if (message.opensearchSpec !== undefined) {
      OpenSearchCreateSpec.encode(message.opensearchSpec, writer.uint32(26).fork()).ldelim();
    }
    if (message.dashboardsSpec !== undefined) {
      DashboardsCreateSpec.encode(message.dashboardsSpec, writer.uint32(34).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigCreateSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigCreateSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.adminPassword = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.opensearchSpec = OpenSearchCreateSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dashboardsSpec = DashboardsCreateSpec.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigCreateSpec {
    return {
      $type: ConfigCreateSpec.$type,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      adminPassword: isSet(object.adminPassword) ? globalThis.String(object.adminPassword) : "",
      opensearchSpec: isSet(object.opensearchSpec) ? OpenSearchCreateSpec.fromJSON(object.opensearchSpec) : undefined,
      dashboardsSpec: isSet(object.dashboardsSpec) ? DashboardsCreateSpec.fromJSON(object.dashboardsSpec) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
    };
  },

  toJSON(message: ConfigCreateSpec): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.adminPassword !== "") {
      obj.adminPassword = message.adminPassword;
    }
    if (message.opensearchSpec !== undefined) {
      obj.opensearchSpec = OpenSearchCreateSpec.toJSON(message.opensearchSpec);
    }
    if (message.dashboardsSpec !== undefined) {
      obj.dashboardsSpec = DashboardsCreateSpec.toJSON(message.dashboardsSpec);
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigCreateSpec>): ConfigCreateSpec {
    return ConfigCreateSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigCreateSpec>): ConfigCreateSpec {
    const message = createBaseConfigCreateSpec();
    message.version = object.version ?? "";
    message.adminPassword = object.adminPassword ?? "";
    message.opensearchSpec = (object.opensearchSpec !== undefined && object.opensearchSpec !== null)
      ? OpenSearchCreateSpec.fromPartial(object.opensearchSpec)
      : undefined;
    message.dashboardsSpec = (object.dashboardsSpec !== undefined && object.dashboardsSpec !== null)
      ? DashboardsCreateSpec.fromPartial(object.dashboardsSpec)
      : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigCreateSpec.$type, ConfigCreateSpec);

function createBaseOpenSearchCreateSpec(): OpenSearchCreateSpec {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec",
    plugins: [],
    nodeGroups: [],
    opensearchConfig2: undefined,
  };
}

export const OpenSearchCreateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec" as const,

  encode(message: OpenSearchCreateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.plugins) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.nodeGroups) {
      OpenSearchCreateSpec_NodeGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.opensearchConfig2 !== undefined) {
      OpenSearchConfig2.encode(message.opensearchConfig2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchCreateSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSearchCreateSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plugins.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeGroups.push(OpenSearchCreateSpec_NodeGroup.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.opensearchConfig2 = OpenSearchConfig2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenSearchCreateSpec {
    return {
      $type: OpenSearchCreateSpec.$type,
      plugins: globalThis.Array.isArray(object?.plugins) ? object.plugins.map((e: any) => globalThis.String(e)) : [],
      nodeGroups: globalThis.Array.isArray(object?.nodeGroups)
        ? object.nodeGroups.map((e: any) => OpenSearchCreateSpec_NodeGroup.fromJSON(e))
        : [],
      opensearchConfig2: isSet(object.opensearchConfig_2)
        ? OpenSearchConfig2.fromJSON(object.opensearchConfig_2)
        : undefined,
    };
  },

  toJSON(message: OpenSearchCreateSpec): unknown {
    const obj: any = {};
    if (message.plugins?.length) {
      obj.plugins = message.plugins;
    }
    if (message.nodeGroups?.length) {
      obj.nodeGroups = message.nodeGroups.map((e) => OpenSearchCreateSpec_NodeGroup.toJSON(e));
    }
    if (message.opensearchConfig2 !== undefined) {
      obj.opensearchConfig_2 = OpenSearchConfig2.toJSON(message.opensearchConfig2);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenSearchCreateSpec>): OpenSearchCreateSpec {
    return OpenSearchCreateSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSearchCreateSpec>): OpenSearchCreateSpec {
    const message = createBaseOpenSearchCreateSpec();
    message.plugins = object.plugins?.map((e) => e) || [];
    message.nodeGroups = object.nodeGroups?.map((e) => OpenSearchCreateSpec_NodeGroup.fromPartial(e)) || [];
    message.opensearchConfig2 = (object.opensearchConfig2 !== undefined && object.opensearchConfig2 !== null)
      ? OpenSearchConfig2.fromPartial(object.opensearchConfig2)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(OpenSearchCreateSpec.$type, OpenSearchCreateSpec);

function createBaseOpenSearchCreateSpec_NodeGroup(): OpenSearchCreateSpec_NodeGroup {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup",
    name: "",
    resources: undefined,
    hostsCount: 0,
    zoneIds: [],
    subnetIds: [],
    assignPublicIp: false,
    roles: [],
  };
}

export const OpenSearchCreateSpec_NodeGroup = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup" as const,

  encode(message: OpenSearchCreateSpec_NodeGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(24).int64(message.hostsCount);
    }
    for (const v of message.zoneIds) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    writer.uint32(58).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchCreateSpec_NodeGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSearchCreateSpec_NodeGroup();
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

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zoneIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
        case 7:
          if (tag === 56) {
            message.roles.push(reader.int32() as any);

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
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

  fromJSON(object: any): OpenSearchCreateSpec_NodeGroup {
    return {
      $type: OpenSearchCreateSpec_NodeGroup.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      hostsCount: isSet(object.hostsCount) ? globalThis.Number(object.hostsCount) : 0,
      zoneIds: globalThis.Array.isArray(object?.zoneIds) ? object.zoneIds.map((e: any) => globalThis.String(e)) : [],
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      roles: globalThis.Array.isArray(object?.roles)
        ? object.roles.map((e: any) => openSearch_GroupRoleFromJSON(e))
        : [],
    };
  },

  toJSON(message: OpenSearchCreateSpec_NodeGroup): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.hostsCount !== 0) {
      obj.hostsCount = Math.round(message.hostsCount);
    }
    if (message.zoneIds?.length) {
      obj.zoneIds = message.zoneIds;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<OpenSearchCreateSpec_NodeGroup>): OpenSearchCreateSpec_NodeGroup {
    return OpenSearchCreateSpec_NodeGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSearchCreateSpec_NodeGroup>): OpenSearchCreateSpec_NodeGroup {
    const message = createBaseOpenSearchCreateSpec_NodeGroup();
    message.name = object.name ?? "";
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(OpenSearchCreateSpec_NodeGroup.$type, OpenSearchCreateSpec_NodeGroup);

function createBaseDashboardsCreateSpec(): DashboardsCreateSpec {
  return { $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec", nodeGroups: [] };
}

export const DashboardsCreateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec" as const,

  encode(message: DashboardsCreateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodeGroups) {
      DashboardsCreateSpec_NodeGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashboardsCreateSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDashboardsCreateSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeGroups.push(DashboardsCreateSpec_NodeGroup.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DashboardsCreateSpec {
    return {
      $type: DashboardsCreateSpec.$type,
      nodeGroups: globalThis.Array.isArray(object?.nodeGroups)
        ? object.nodeGroups.map((e: any) => DashboardsCreateSpec_NodeGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DashboardsCreateSpec): unknown {
    const obj: any = {};
    if (message.nodeGroups?.length) {
      obj.nodeGroups = message.nodeGroups.map((e) => DashboardsCreateSpec_NodeGroup.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DashboardsCreateSpec>): DashboardsCreateSpec {
    return DashboardsCreateSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DashboardsCreateSpec>): DashboardsCreateSpec {
    const message = createBaseDashboardsCreateSpec();
    message.nodeGroups = object.nodeGroups?.map((e) => DashboardsCreateSpec_NodeGroup.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(DashboardsCreateSpec.$type, DashboardsCreateSpec);

function createBaseDashboardsCreateSpec_NodeGroup(): DashboardsCreateSpec_NodeGroup {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup",
    name: "",
    resources: undefined,
    hostsCount: 0,
    zoneIds: [],
    subnetIds: [],
    assignPublicIp: false,
  };
}

export const DashboardsCreateSpec_NodeGroup = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup" as const,

  encode(message: DashboardsCreateSpec_NodeGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(24).int64(message.hostsCount);
    }
    for (const v of message.zoneIds) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashboardsCreateSpec_NodeGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDashboardsCreateSpec_NodeGroup();
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

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zoneIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DashboardsCreateSpec_NodeGroup {
    return {
      $type: DashboardsCreateSpec_NodeGroup.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      hostsCount: isSet(object.hostsCount) ? globalThis.Number(object.hostsCount) : 0,
      zoneIds: globalThis.Array.isArray(object?.zoneIds) ? object.zoneIds.map((e: any) => globalThis.String(e)) : [],
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
    };
  },

  toJSON(message: DashboardsCreateSpec_NodeGroup): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.hostsCount !== 0) {
      obj.hostsCount = Math.round(message.hostsCount);
    }
    if (message.zoneIds?.length) {
      obj.zoneIds = message.zoneIds;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    return obj;
  },

  create(base?: DeepPartial<DashboardsCreateSpec_NodeGroup>): DashboardsCreateSpec_NodeGroup {
    return DashboardsCreateSpec_NodeGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DashboardsCreateSpec_NodeGroup>): DashboardsCreateSpec_NodeGroup {
    const message = createBaseDashboardsCreateSpec_NodeGroup();
    message.name = object.name ?? "";
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(DashboardsCreateSpec_NodeGroup.$type, DashboardsCreateSpec_NodeGroup);

function createBaseConfigUpdateSpec(): ConfigUpdateSpec {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec",
    version: "",
    adminPassword: "",
    opensearchSpec: undefined,
    dashboardsSpec: undefined,
    access: undefined,
  };
}

export const ConfigUpdateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec" as const,

  encode(message: ConfigUpdateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.adminPassword !== "") {
      writer.uint32(18).string(message.adminPassword);
    }
    if (message.opensearchSpec !== undefined) {
      OpenSearchClusterUpdateSpec.encode(message.opensearchSpec, writer.uint32(26).fork()).ldelim();
    }
    if (message.dashboardsSpec !== undefined) {
      DashboardsClusterUpdateSpec.encode(message.dashboardsSpec, writer.uint32(34).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigUpdateSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.adminPassword = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.opensearchSpec = OpenSearchClusterUpdateSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dashboardsSpec = DashboardsClusterUpdateSpec.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigUpdateSpec {
    return {
      $type: ConfigUpdateSpec.$type,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      adminPassword: isSet(object.adminPassword) ? globalThis.String(object.adminPassword) : "",
      opensearchSpec: isSet(object.opensearchSpec)
        ? OpenSearchClusterUpdateSpec.fromJSON(object.opensearchSpec)
        : undefined,
      dashboardsSpec: isSet(object.dashboardsSpec)
        ? DashboardsClusterUpdateSpec.fromJSON(object.dashboardsSpec)
        : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
    };
  },

  toJSON(message: ConfigUpdateSpec): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.adminPassword !== "") {
      obj.adminPassword = message.adminPassword;
    }
    if (message.opensearchSpec !== undefined) {
      obj.opensearchSpec = OpenSearchClusterUpdateSpec.toJSON(message.opensearchSpec);
    }
    if (message.dashboardsSpec !== undefined) {
      obj.dashboardsSpec = DashboardsClusterUpdateSpec.toJSON(message.dashboardsSpec);
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigUpdateSpec>): ConfigUpdateSpec {
    return ConfigUpdateSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigUpdateSpec>): ConfigUpdateSpec {
    const message = createBaseConfigUpdateSpec();
    message.version = object.version ?? "";
    message.adminPassword = object.adminPassword ?? "";
    message.opensearchSpec = (object.opensearchSpec !== undefined && object.opensearchSpec !== null)
      ? OpenSearchClusterUpdateSpec.fromPartial(object.opensearchSpec)
      : undefined;
    message.dashboardsSpec = (object.dashboardsSpec !== undefined && object.dashboardsSpec !== null)
      ? DashboardsClusterUpdateSpec.fromPartial(object.dashboardsSpec)
      : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigUpdateSpec.$type, ConfigUpdateSpec);

function createBaseOpenSearchClusterUpdateSpec(): OpenSearchClusterUpdateSpec {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec",
    plugins: [],
    opensearchConfig2: undefined,
  };
}

export const OpenSearchClusterUpdateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec" as const,

  encode(message: OpenSearchClusterUpdateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.plugins) {
      writer.uint32(10).string(v!);
    }
    if (message.opensearchConfig2 !== undefined) {
      OpenSearchConfig2.encode(message.opensearchConfig2, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchClusterUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSearchClusterUpdateSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plugins.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opensearchConfig2 = OpenSearchConfig2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenSearchClusterUpdateSpec {
    return {
      $type: OpenSearchClusterUpdateSpec.$type,
      plugins: globalThis.Array.isArray(object?.plugins) ? object.plugins.map((e: any) => globalThis.String(e)) : [],
      opensearchConfig2: isSet(object.opensearchConfig_2)
        ? OpenSearchConfig2.fromJSON(object.opensearchConfig_2)
        : undefined,
    };
  },

  toJSON(message: OpenSearchClusterUpdateSpec): unknown {
    const obj: any = {};
    if (message.plugins?.length) {
      obj.plugins = message.plugins;
    }
    if (message.opensearchConfig2 !== undefined) {
      obj.opensearchConfig_2 = OpenSearchConfig2.toJSON(message.opensearchConfig2);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenSearchClusterUpdateSpec>): OpenSearchClusterUpdateSpec {
    return OpenSearchClusterUpdateSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSearchClusterUpdateSpec>): OpenSearchClusterUpdateSpec {
    const message = createBaseOpenSearchClusterUpdateSpec();
    message.plugins = object.plugins?.map((e) => e) || [];
    message.opensearchConfig2 = (object.opensearchConfig2 !== undefined && object.opensearchConfig2 !== null)
      ? OpenSearchConfig2.fromPartial(object.opensearchConfig2)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(OpenSearchClusterUpdateSpec.$type, OpenSearchClusterUpdateSpec);

function createBaseDashboardsClusterUpdateSpec(): DashboardsClusterUpdateSpec {
  return { $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec" };
}

export const DashboardsClusterUpdateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec" as const,

  encode(_: DashboardsClusterUpdateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashboardsClusterUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDashboardsClusterUpdateSpec();
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

  fromJSON(_: any): DashboardsClusterUpdateSpec {
    return { $type: DashboardsClusterUpdateSpec.$type };
  },

  toJSON(_: DashboardsClusterUpdateSpec): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DashboardsClusterUpdateSpec>): DashboardsClusterUpdateSpec {
    return DashboardsClusterUpdateSpec.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<DashboardsClusterUpdateSpec>): DashboardsClusterUpdateSpec {
    const message = createBaseDashboardsClusterUpdateSpec();
    return message;
  },
};

messageTypeRegistry.set(DashboardsClusterUpdateSpec.$type, DashboardsClusterUpdateSpec);

function createBaseBackupClusterRequest(): BackupClusterRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest", clusterId: "" };
}

export const BackupClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest" as const,

  encode(message: BackupClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackupClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackupClusterRequest();
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

  fromJSON(object: any): BackupClusterRequest {
    return {
      $type: BackupClusterRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: BackupClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<BackupClusterRequest>): BackupClusterRequest {
    return BackupClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BackupClusterRequest>): BackupClusterRequest {
    const message = createBaseBackupClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BackupClusterRequest.$type, BackupClusterRequest);

function createBaseBackupClusterMetadata(): BackupClusterMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata", clusterId: "" };
}

export const BackupClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata" as const,

  encode(message: BackupClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackupClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackupClusterMetadata();
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

  fromJSON(object: any): BackupClusterMetadata {
    return {
      $type: BackupClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: BackupClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<BackupClusterMetadata>): BackupClusterMetadata {
    return BackupClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BackupClusterMetadata>): BackupClusterMetadata {
    const message = createBaseBackupClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BackupClusterMetadata.$type, BackupClusterMetadata);

function createBaseRestoreClusterRequest(): RestoreClusterRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest",
    backupId: "",
    name: "",
    description: "",
    labels: {},
    environment: 0,
    configSpec: undefined,
    networkId: "",
    securityGroupIds: [],
    serviceAccountId: "",
    deletionProtection: false,
    folderId: "",
    maintenanceWindow: undefined,
  };
}

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest" as const,

  encode(message: RestoreClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RestoreClusterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(40).int32(message.environment);
    }
    if (message.configSpec !== undefined) {
      ConfigCreateSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(58).string(message.networkId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(66).string(v!);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.deletionProtection === true) {
      writer.uint32(80).bool(message.deletionProtection);
    }
    if (message.folderId !== "") {
      writer.uint32(90).string(message.folderId);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreClusterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backupId = reader.string();
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

          const entry4 = RestoreClusterRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.environment = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.configSpec = ConfigCreateSpec.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.networkId = reader.string();
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

          message.serviceAccountId = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreClusterRequest {
    return {
      $type: RestoreClusterRequest.$type,
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      environment: isSet(object.environment) ? cluster_EnvironmentFromJSON(object.environment) : 0,
      configSpec: isSet(object.configSpec) ? ConfigCreateSpec.fromJSON(object.configSpec) : undefined,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
    };
  },

  toJSON(message: RestoreClusterRequest): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
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
    if (message.environment !== 0) {
      obj.environment = cluster_EnvironmentToJSON(message.environment);
    }
    if (message.configSpec !== undefined) {
      obj.configSpec = ConfigCreateSpec.toJSON(message.configSpec);
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreClusterRequest>): RestoreClusterRequest {
    return RestoreClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreClusterRequest>): RestoreClusterRequest {
    const message = createBaseRestoreClusterRequest();
    message.backupId = object.backupId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.environment = object.environment ?? 0;
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? ConfigCreateSpec.fromPartial(object.configSpec)
      : undefined;
    message.networkId = object.networkId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.folderId = object.folderId ?? "";
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

function createBaseRestoreClusterRequest_LabelsEntry(): RestoreClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry", key: "", value: "" };
}

export const RestoreClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry" as const,

  encode(message: RestoreClusterRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreClusterRequest_LabelsEntry();
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

  fromJSON(object: any): RestoreClusterRequest_LabelsEntry {
    return {
      $type: RestoreClusterRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: RestoreClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreClusterRequest_LabelsEntry>): RestoreClusterRequest_LabelsEntry {
    return RestoreClusterRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreClusterRequest_LabelsEntry>): RestoreClusterRequest_LabelsEntry {
    const message = createBaseRestoreClusterRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest_LabelsEntry.$type, RestoreClusterRequest_LabelsEntry);

function createBaseRestoreClusterMetadata(): RestoreClusterMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata", clusterId: "", backupId: "" };
}

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata" as const,

  encode(message: RestoreClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreClusterMetadata();
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

          message.backupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreClusterMetadata {
    return {
      $type: RestoreClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
    };
  },

  toJSON(message: RestoreClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreClusterMetadata>): RestoreClusterMetadata {
    return RestoreClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreClusterMetadata>): RestoreClusterMetadata {
    const message = createBaseRestoreClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterMetadata.$type, RestoreClusterMetadata);

function createBaseRescheduleMaintenanceRequest(): RescheduleMaintenanceRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
    delayedUntil: undefined,
  };
}

export const RescheduleMaintenanceRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest" as const,

  encode(message: RescheduleMaintenanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.rescheduleType !== 0) {
      writer.uint32(16).int32(message.rescheduleType);
    }
    if (message.delayedUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RescheduleMaintenanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRescheduleMaintenanceRequest();
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

          message.rescheduleType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.delayedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RescheduleMaintenanceRequest {
    return {
      $type: RescheduleMaintenanceRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      rescheduleType: isSet(object.rescheduleType)
        ? rescheduleMaintenanceRequest_RescheduleTypeFromJSON(object.rescheduleType)
        : 0,
      delayedUntil: isSet(object.delayedUntil) ? fromJsonTimestamp(object.delayedUntil) : undefined,
    };
  },

  toJSON(message: RescheduleMaintenanceRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.rescheduleType !== 0) {
      obj.rescheduleType = rescheduleMaintenanceRequest_RescheduleTypeToJSON(message.rescheduleType);
    }
    if (message.delayedUntil !== undefined) {
      obj.delayedUntil = message.delayedUntil.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<RescheduleMaintenanceRequest>): RescheduleMaintenanceRequest {
    return RescheduleMaintenanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RescheduleMaintenanceRequest>): RescheduleMaintenanceRequest {
    const message = createBaseRescheduleMaintenanceRequest();
    message.clusterId = object.clusterId ?? "";
    message.rescheduleType = object.rescheduleType ?? 0;
    message.delayedUntil = object.delayedUntil ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RescheduleMaintenanceRequest.$type, RescheduleMaintenanceRequest);

function createBaseRescheduleMaintenanceMetadata(): RescheduleMaintenanceMetadata {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata",
    clusterId: "",
    delayedUntil: undefined,
  };
}

export const RescheduleMaintenanceMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata" as const,

  encode(message: RescheduleMaintenanceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.delayedUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RescheduleMaintenanceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRescheduleMaintenanceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.delayedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RescheduleMaintenanceMetadata {
    return {
      $type: RescheduleMaintenanceMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      delayedUntil: isSet(object.delayedUntil) ? fromJsonTimestamp(object.delayedUntil) : undefined,
    };
  },

  toJSON(message: RescheduleMaintenanceMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.delayedUntil !== undefined) {
      obj.delayedUntil = message.delayedUntil.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<RescheduleMaintenanceMetadata>): RescheduleMaintenanceMetadata {
    return RescheduleMaintenanceMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RescheduleMaintenanceMetadata>): RescheduleMaintenanceMetadata {
    const message = createBaseRescheduleMaintenanceMetadata();
    message.clusterId = object.clusterId ?? "";
    message.delayedUntil = object.delayedUntil ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RescheduleMaintenanceMetadata.$type, RescheduleMaintenanceMetadata);

function createBaseListClusterBackupsRequest(): ListClusterBackupsRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest" as const,

  encode(message: ListClusterBackupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterBackupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterBackupsRequest();
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

  fromJSON(object: any): ListClusterBackupsRequest {
    return {
      $type: ListClusterBackupsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListClusterBackupsRequest): unknown {
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

  create(base?: DeepPartial<ListClusterBackupsRequest>): ListClusterBackupsRequest {
    return ListClusterBackupsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterBackupsRequest>): ListClusterBackupsRequest {
    const message = createBaseListClusterBackupsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterBackupsRequest.$type, ListClusterBackupsRequest);

function createBaseListClusterBackupsResponse(): ListClusterBackupsResponse {
  return { $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse", backups: [], nextPageToken: "" };
}

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse" as const,

  encode(message: ListClusterBackupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backups) {
      Backup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterBackupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterBackupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backups.push(Backup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterBackupsResponse {
    return {
      $type: ListClusterBackupsResponse.$type,
      backups: globalThis.Array.isArray(object?.backups) ? object.backups.map((e: any) => Backup.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClusterBackupsResponse): unknown {
    const obj: any = {};
    if (message.backups?.length) {
      obj.backups = message.backups.map((e) => Backup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListClusterBackupsResponse>): ListClusterBackupsResponse {
    return ListClusterBackupsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterBackupsResponse>): ListClusterBackupsResponse {
    const message = createBaseListClusterBackupsResponse();
    message.backups = object.backups?.map((e) => Backup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterBackupsResponse.$type, ListClusterBackupsResponse);

function createBaseDeleteOpenSearchNodeGroupRequest(): DeleteOpenSearchNodeGroupRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest", clusterId: "", name: "" };
}

export const DeleteOpenSearchNodeGroupRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest" as const,

  encode(message: DeleteOpenSearchNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOpenSearchNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOpenSearchNodeGroupRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteOpenSearchNodeGroupRequest {
    return {
      $type: DeleteOpenSearchNodeGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: DeleteOpenSearchNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteOpenSearchNodeGroupRequest>): DeleteOpenSearchNodeGroupRequest {
    return DeleteOpenSearchNodeGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteOpenSearchNodeGroupRequest>): DeleteOpenSearchNodeGroupRequest {
    const message = createBaseDeleteOpenSearchNodeGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteOpenSearchNodeGroupRequest.$type, DeleteOpenSearchNodeGroupRequest);

function createBaseUpdateOpenSearchNodeGroupRequest(): UpdateOpenSearchNodeGroupRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest",
    clusterId: "",
    name: "",
    updateMask: undefined,
    nodeGroupSpec: undefined,
  };
}

export const UpdateOpenSearchNodeGroupRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest" as const,

  encode(message: UpdateOpenSearchNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.nodeGroupSpec !== undefined) {
      OpenSearchNodeGroupUpdateSpec.encode(message.nodeGroupSpec, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOpenSearchNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOpenSearchNodeGroupRequest();
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

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nodeGroupSpec = OpenSearchNodeGroupUpdateSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOpenSearchNodeGroupRequest {
    return {
      $type: UpdateOpenSearchNodeGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      nodeGroupSpec: isSet(object.nodeGroupSpec)
        ? OpenSearchNodeGroupUpdateSpec.fromJSON(object.nodeGroupSpec)
        : undefined,
    };
  },

  toJSON(message: UpdateOpenSearchNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.nodeGroupSpec !== undefined) {
      obj.nodeGroupSpec = OpenSearchNodeGroupUpdateSpec.toJSON(message.nodeGroupSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateOpenSearchNodeGroupRequest>): UpdateOpenSearchNodeGroupRequest {
    return UpdateOpenSearchNodeGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateOpenSearchNodeGroupRequest>): UpdateOpenSearchNodeGroupRequest {
    const message = createBaseUpdateOpenSearchNodeGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.nodeGroupSpec = (object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null)
      ? OpenSearchNodeGroupUpdateSpec.fromPartial(object.nodeGroupSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateOpenSearchNodeGroupRequest.$type, UpdateOpenSearchNodeGroupRequest);

function createBaseOpenSearchNodeGroupUpdateSpec(): OpenSearchNodeGroupUpdateSpec {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec",
    resources: undefined,
    hostsCount: 0,
    roles: [],
    zoneIds: [],
    subnetIds: [],
    assignPublicIp: false,
  };
}

export const OpenSearchNodeGroupUpdateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec" as const,

  encode(message: OpenSearchNodeGroupUpdateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(16).int64(message.hostsCount);
    }
    writer.uint32(26).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.zoneIds) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchNodeGroupUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSearchNodeGroupUpdateSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.hostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag === 24) {
            message.roles.push(reader.int32() as any);

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zoneIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenSearchNodeGroupUpdateSpec {
    return {
      $type: OpenSearchNodeGroupUpdateSpec.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      hostsCount: isSet(object.hostsCount) ? globalThis.Number(object.hostsCount) : 0,
      roles: globalThis.Array.isArray(object?.roles)
        ? object.roles.map((e: any) => openSearch_GroupRoleFromJSON(e))
        : [],
      zoneIds: globalThis.Array.isArray(object?.zoneIds) ? object.zoneIds.map((e: any) => globalThis.String(e)) : [],
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
    };
  },

  toJSON(message: OpenSearchNodeGroupUpdateSpec): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.hostsCount !== 0) {
      obj.hostsCount = Math.round(message.hostsCount);
    }
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
    }
    if (message.zoneIds?.length) {
      obj.zoneIds = message.zoneIds;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    return obj;
  },

  create(base?: DeepPartial<OpenSearchNodeGroupUpdateSpec>): OpenSearchNodeGroupUpdateSpec {
    return OpenSearchNodeGroupUpdateSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSearchNodeGroupUpdateSpec>): OpenSearchNodeGroupUpdateSpec {
    const message = createBaseOpenSearchNodeGroupUpdateSpec();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.roles = object.roles?.map((e) => e) || [];
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(OpenSearchNodeGroupUpdateSpec.$type, OpenSearchNodeGroupUpdateSpec);

function createBaseAddOpenSearchNodeGroupRequest(): AddOpenSearchNodeGroupRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest",
    clusterId: "",
    nodeGroupSpec: undefined,
  };
}

export const AddOpenSearchNodeGroupRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest" as const,

  encode(message: AddOpenSearchNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.nodeGroupSpec !== undefined) {
      OpenSearchCreateSpec_NodeGroup.encode(message.nodeGroupSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddOpenSearchNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOpenSearchNodeGroupRequest();
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

          message.nodeGroupSpec = OpenSearchCreateSpec_NodeGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddOpenSearchNodeGroupRequest {
    return {
      $type: AddOpenSearchNodeGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      nodeGroupSpec: isSet(object.nodeGroupSpec)
        ? OpenSearchCreateSpec_NodeGroup.fromJSON(object.nodeGroupSpec)
        : undefined,
    };
  },

  toJSON(message: AddOpenSearchNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.nodeGroupSpec !== undefined) {
      obj.nodeGroupSpec = OpenSearchCreateSpec_NodeGroup.toJSON(message.nodeGroupSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<AddOpenSearchNodeGroupRequest>): AddOpenSearchNodeGroupRequest {
    return AddOpenSearchNodeGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddOpenSearchNodeGroupRequest>): AddOpenSearchNodeGroupRequest {
    const message = createBaseAddOpenSearchNodeGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.nodeGroupSpec = (object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null)
      ? OpenSearchCreateSpec_NodeGroup.fromPartial(object.nodeGroupSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddOpenSearchNodeGroupRequest.$type, AddOpenSearchNodeGroupRequest);

function createBaseDeleteDashboardsNodeGroupRequest(): DeleteDashboardsNodeGroupRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest", clusterId: "", name: "" };
}

export const DeleteDashboardsNodeGroupRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest" as const,

  encode(message: DeleteDashboardsNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDashboardsNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDashboardsNodeGroupRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDashboardsNodeGroupRequest {
    return {
      $type: DeleteDashboardsNodeGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: DeleteDashboardsNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteDashboardsNodeGroupRequest>): DeleteDashboardsNodeGroupRequest {
    return DeleteDashboardsNodeGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteDashboardsNodeGroupRequest>): DeleteDashboardsNodeGroupRequest {
    const message = createBaseDeleteDashboardsNodeGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDashboardsNodeGroupRequest.$type, DeleteDashboardsNodeGroupRequest);

function createBaseUpdateDashboardsNodeGroupRequest(): UpdateDashboardsNodeGroupRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest",
    clusterId: "",
    name: "",
    updateMask: undefined,
    nodeGroupSpec: undefined,
  };
}

export const UpdateDashboardsNodeGroupRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest" as const,

  encode(message: UpdateDashboardsNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.nodeGroupSpec !== undefined) {
      DashboardsNodeGroupUpdateSpec.encode(message.nodeGroupSpec, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDashboardsNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDashboardsNodeGroupRequest();
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

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nodeGroupSpec = DashboardsNodeGroupUpdateSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDashboardsNodeGroupRequest {
    return {
      $type: UpdateDashboardsNodeGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      nodeGroupSpec: isSet(object.nodeGroupSpec)
        ? DashboardsNodeGroupUpdateSpec.fromJSON(object.nodeGroupSpec)
        : undefined,
    };
  },

  toJSON(message: UpdateDashboardsNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.nodeGroupSpec !== undefined) {
      obj.nodeGroupSpec = DashboardsNodeGroupUpdateSpec.toJSON(message.nodeGroupSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateDashboardsNodeGroupRequest>): UpdateDashboardsNodeGroupRequest {
    return UpdateDashboardsNodeGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateDashboardsNodeGroupRequest>): UpdateDashboardsNodeGroupRequest {
    const message = createBaseUpdateDashboardsNodeGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.nodeGroupSpec = (object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null)
      ? DashboardsNodeGroupUpdateSpec.fromPartial(object.nodeGroupSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateDashboardsNodeGroupRequest.$type, UpdateDashboardsNodeGroupRequest);

function createBaseDashboardsNodeGroupUpdateSpec(): DashboardsNodeGroupUpdateSpec {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec",
    resources: undefined,
    hostsCount: 0,
    zoneIds: [],
    subnetIds: [],
    assignPublicIp: false,
  };
}

export const DashboardsNodeGroupUpdateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec" as const,

  encode(message: DashboardsNodeGroupUpdateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(16).int64(message.hostsCount);
    }
    for (const v of message.zoneIds) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(34).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(40).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashboardsNodeGroupUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDashboardsNodeGroupUpdateSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.hostsCount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.zoneIds.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DashboardsNodeGroupUpdateSpec {
    return {
      $type: DashboardsNodeGroupUpdateSpec.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      hostsCount: isSet(object.hostsCount) ? globalThis.Number(object.hostsCount) : 0,
      zoneIds: globalThis.Array.isArray(object?.zoneIds) ? object.zoneIds.map((e: any) => globalThis.String(e)) : [],
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
    };
  },

  toJSON(message: DashboardsNodeGroupUpdateSpec): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.hostsCount !== 0) {
      obj.hostsCount = Math.round(message.hostsCount);
    }
    if (message.zoneIds?.length) {
      obj.zoneIds = message.zoneIds;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    return obj;
  },

  create(base?: DeepPartial<DashboardsNodeGroupUpdateSpec>): DashboardsNodeGroupUpdateSpec {
    return DashboardsNodeGroupUpdateSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DashboardsNodeGroupUpdateSpec>): DashboardsNodeGroupUpdateSpec {
    const message = createBaseDashboardsNodeGroupUpdateSpec();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(DashboardsNodeGroupUpdateSpec.$type, DashboardsNodeGroupUpdateSpec);

function createBaseAddDashboardsNodeGroupRequest(): AddDashboardsNodeGroupRequest {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest",
    clusterId: "",
    nodeGroupSpec: undefined,
  };
}

export const AddDashboardsNodeGroupRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest" as const,

  encode(message: AddDashboardsNodeGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.nodeGroupSpec !== undefined) {
      DashboardsCreateSpec_NodeGroup.encode(message.nodeGroupSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDashboardsNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDashboardsNodeGroupRequest();
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

          message.nodeGroupSpec = DashboardsCreateSpec_NodeGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDashboardsNodeGroupRequest {
    return {
      $type: AddDashboardsNodeGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      nodeGroupSpec: isSet(object.nodeGroupSpec)
        ? DashboardsCreateSpec_NodeGroup.fromJSON(object.nodeGroupSpec)
        : undefined,
    };
  },

  toJSON(message: AddDashboardsNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.nodeGroupSpec !== undefined) {
      obj.nodeGroupSpec = DashboardsCreateSpec_NodeGroup.toJSON(message.nodeGroupSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<AddDashboardsNodeGroupRequest>): AddDashboardsNodeGroupRequest {
    return AddDashboardsNodeGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddDashboardsNodeGroupRequest>): AddDashboardsNodeGroupRequest {
    const message = createBaseAddDashboardsNodeGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.nodeGroupSpec = (object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null)
      ? DashboardsCreateSpec_NodeGroup.fromPartial(object.nodeGroupSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddDashboardsNodeGroupRequest.$type, AddDashboardsNodeGroupRequest);

function createBaseAddNodeGroupMetadata(): AddNodeGroupMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata", clusterId: "", name: "" };
}

export const AddNodeGroupMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata" as const,

  encode(message: AddNodeGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNodeGroupMetadata();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddNodeGroupMetadata {
    return {
      $type: AddNodeGroupMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: AddNodeGroupMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<AddNodeGroupMetadata>): AddNodeGroupMetadata {
    return AddNodeGroupMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddNodeGroupMetadata>): AddNodeGroupMetadata {
    const message = createBaseAddNodeGroupMetadata();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddNodeGroupMetadata.$type, AddNodeGroupMetadata);

function createBaseUpdateNodeGroupMetadata(): UpdateNodeGroupMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata", clusterId: "", name: "" };
}

export const UpdateNodeGroupMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata" as const,

  encode(message: UpdateNodeGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
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

          message.clusterId = reader.string();
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

  fromJSON(object: any): UpdateNodeGroupMetadata {
    return {
      $type: UpdateNodeGroupMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: UpdateNodeGroupMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateNodeGroupMetadata>): UpdateNodeGroupMetadata {
    return UpdateNodeGroupMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateNodeGroupMetadata>): UpdateNodeGroupMetadata {
    const message = createBaseUpdateNodeGroupMetadata();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateNodeGroupMetadata.$type, UpdateNodeGroupMetadata);

function createBaseDeleteNodeGroupMetadata(): DeleteNodeGroupMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata", clusterId: "", name: "" };
}

export const DeleteNodeGroupMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata" as const,

  encode(message: DeleteNodeGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
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

          message.clusterId = reader.string();
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

  fromJSON(object: any): DeleteNodeGroupMetadata {
    return {
      $type: DeleteNodeGroupMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: DeleteNodeGroupMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteNodeGroupMetadata>): DeleteNodeGroupMetadata {
    return DeleteNodeGroupMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteNodeGroupMetadata>): DeleteNodeGroupMetadata {
    const message = createBaseDeleteNodeGroupMetadata();
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNodeGroupMetadata.$type, DeleteNodeGroupMetadata);

function createBaseGetAuthSettingsRequest(): GetAuthSettingsRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest", clusterId: "" };
}

export const GetAuthSettingsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest" as const,

  encode(message: GetAuthSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthSettingsRequest();
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

  fromJSON(object: any): GetAuthSettingsRequest {
    return {
      $type: GetAuthSettingsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: GetAuthSettingsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetAuthSettingsRequest>): GetAuthSettingsRequest {
    return GetAuthSettingsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAuthSettingsRequest>): GetAuthSettingsRequest {
    const message = createBaseGetAuthSettingsRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetAuthSettingsRequest.$type, GetAuthSettingsRequest);

function createBaseUpdateAuthSettingsRequest(): UpdateAuthSettingsRequest {
  return { $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest", clusterId: "", settings: undefined };
}

export const UpdateAuthSettingsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest" as const,

  encode(message: UpdateAuthSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.settings !== undefined) {
      AuthSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAuthSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAuthSettingsRequest();
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

          message.settings = AuthSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthSettingsRequest {
    return {
      $type: UpdateAuthSettingsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      settings: isSet(object.settings) ? AuthSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: UpdateAuthSettingsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.settings !== undefined) {
      obj.settings = AuthSettings.toJSON(message.settings);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAuthSettingsRequest>): UpdateAuthSettingsRequest {
    return UpdateAuthSettingsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAuthSettingsRequest>): UpdateAuthSettingsRequest {
    const message = createBaseUpdateAuthSettingsRequest();
    message.clusterId = object.clusterId ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? AuthSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateAuthSettingsRequest.$type, UpdateAuthSettingsRequest);

function createBaseUpdateAuthSettingsMetadata(): UpdateAuthSettingsMetadata {
  return { $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata", clusterId: "" };
}

export const UpdateAuthSettingsMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata" as const,

  encode(message: UpdateAuthSettingsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAuthSettingsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAuthSettingsMetadata();
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

  fromJSON(object: any): UpdateAuthSettingsMetadata {
    return {
      $type: UpdateAuthSettingsMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: UpdateAuthSettingsMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAuthSettingsMetadata>): UpdateAuthSettingsMetadata {
    return UpdateAuthSettingsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAuthSettingsMetadata>): UpdateAuthSettingsMetadata {
    const message = createBaseUpdateAuthSettingsMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateAuthSettingsMetadata.$type, UpdateAuthSettingsMetadata);

/** A set of methods for managing OpenSearch clusters. */
export type ClusterServiceService = typeof ClusterServiceService;
export const ClusterServiceService = {
  /**
   * Returns the specified OpenSearch cluster.
   *
   * To get the list of all available OpenSearch clusters, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) => Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
  list: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) => Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) => Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates an OpenSearch cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) => Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified OpenSearch cluster. */
  update: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) => Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified OpenSearch cluster. */
  delete: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) => Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a backup for the specified OpenSearch cluster. */
  backup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Backup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BackupClusterRequest) => Buffer.from(BackupClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a new OpenSearch cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreClusterRequest) => Buffer.from(RestoreClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Reschedules a planned maintenance operation. */
  rescheduleMaintenance: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/RescheduleMaintenance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RescheduleMaintenanceRequest) =>
      Buffer.from(RescheduleMaintenanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns a list of available backups for the specified OpenSearch cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListBackups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterBackupsRequest) =>
      Buffer.from(ListClusterBackupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterBackupsRequest.decode(value),
    responseSerialize: (value: ListClusterBackupsResponse) =>
      Buffer.from(ListClusterBackupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterBackupsResponse.decode(value),
  },
  /** Moves the specified OpenSearch cluster to the specified folder. */
  move: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveClusterRequest) => Buffer.from(MoveClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified OpenSearch cluster. */
  start: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) => Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified OpenSearch cluster. */
  stop: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) => Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Retrieves logs for the specified OpenSearch cluster.
   * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
   */
  listLogs: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListLogs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterLogsRequest) => Buffer.from(ListClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterLogsRequest.decode(value),
    responseSerialize: (value: ListClusterLogsResponse) => Buffer.from(ListClusterLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterLogsResponse.decode(value),
  },
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/StreamLogs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: StreamClusterLogsRequest) => Buffer.from(StreamClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StreamClusterLogsRequest.decode(value),
    responseSerialize: (value: StreamLogRecord) => Buffer.from(StreamLogRecord.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamLogRecord.decode(value),
  },
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
  },
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterHostsRequest) => Buffer.from(ListClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterHostsRequest.decode(value),
    responseSerialize: (value: ListClusterHostsResponse) =>
      Buffer.from(ListClusterHostsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterHostsResponse.decode(value),
  },
  /** Creates an OpenSearch type host group. */
  addOpenSearchNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddOpenSearchNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddOpenSearchNodeGroupRequest) =>
      Buffer.from(AddOpenSearchNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddOpenSearchNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes an OpenSearch type host group. */
  deleteOpenSearchNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteOpenSearchNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteOpenSearchNodeGroupRequest) =>
      Buffer.from(DeleteOpenSearchNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteOpenSearchNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates an OpenSearch type host group. */
  updateOpenSearchNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateOpenSearchNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateOpenSearchNodeGroupRequest) =>
      Buffer.from(UpdateOpenSearchNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateOpenSearchNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a Dashboards type host group. */
  addDashboardsNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddDashboardsNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddDashboardsNodeGroupRequest) =>
      Buffer.from(AddDashboardsNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddDashboardsNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes a Dashboards type host group. */
  deleteDashboardsNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteDashboardsNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDashboardsNodeGroupRequest) =>
      Buffer.from(DeleteDashboardsNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDashboardsNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates a Dashboards type host group. */
  updateDashboardsNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateDashboardsNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDashboardsNodeGroupRequest) =>
      Buffer.from(UpdateDashboardsNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateDashboardsNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves auth settings for specified cluster. */
  getAuthSettings: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/GetAuthSettings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAuthSettingsRequest) => Buffer.from(GetAuthSettingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAuthSettingsRequest.decode(value),
    responseSerialize: (value: AuthSettings) => Buffer.from(AuthSettings.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthSettings.decode(value),
  },
  /** Updates auth settings for specified cluster. */
  updateAuthSettings: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateAuthSettings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAuthSettingsRequest) =>
      Buffer.from(UpdateAuthSettingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAuthSettingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified OpenSearch cluster.
   *
   * To get the list of all available OpenSearch clusters, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates an OpenSearch cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified OpenSearch cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified OpenSearch cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Creates a backup for the specified OpenSearch cluster. */
  backup: handleUnaryCall<BackupClusterRequest, Operation>;
  /** Creates a new OpenSearch cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
  /** Reschedules a planned maintenance operation. */
  rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
  /** Returns a list of available backups for the specified OpenSearch cluster. */
  listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
  /** Moves the specified OpenSearch cluster to the specified folder. */
  move: handleUnaryCall<MoveClusterRequest, Operation>;
  /** Starts the specified OpenSearch cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stops the specified OpenSearch cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /**
   * Retrieves logs for the specified OpenSearch cluster.
   * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
   */
  listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Creates an OpenSearch type host group. */
  addOpenSearchNodeGroup: handleUnaryCall<AddOpenSearchNodeGroupRequest, Operation>;
  /** Deletes an OpenSearch type host group. */
  deleteOpenSearchNodeGroup: handleUnaryCall<DeleteOpenSearchNodeGroupRequest, Operation>;
  /** Updates an OpenSearch type host group. */
  updateOpenSearchNodeGroup: handleUnaryCall<UpdateOpenSearchNodeGroupRequest, Operation>;
  /** Creates a Dashboards type host group. */
  addDashboardsNodeGroup: handleUnaryCall<AddDashboardsNodeGroupRequest, Operation>;
  /** Deletes a Dashboards type host group. */
  deleteDashboardsNodeGroup: handleUnaryCall<DeleteDashboardsNodeGroupRequest, Operation>;
  /** Updates a Dashboards type host group. */
  updateDashboardsNodeGroup: handleUnaryCall<UpdateDashboardsNodeGroupRequest, Operation>;
  /** Retrieves auth settings for specified cluster. */
  getAuthSettings: handleUnaryCall<GetAuthSettingsRequest, AuthSettings>;
  /** Updates auth settings for specified cluster. */
  updateAuthSettings: handleUnaryCall<UpdateAuthSettingsRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified OpenSearch cluster.
   *
   * To get the list of all available OpenSearch clusters, make a [List] request.
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
  /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
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
  /** Creates an OpenSearch cluster in the specified folder. */
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
  /** Updates the specified OpenSearch cluster. */
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
  /** Deletes the specified OpenSearch cluster. */
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
  /** Creates a backup for the specified OpenSearch cluster. */
  backup(
    request: BackupClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  backup(
    request: BackupClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  backup(
    request: BackupClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Creates a new OpenSearch cluster using the specified backup. */
  restore(
    request: RestoreClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  restore(
    request: RestoreClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  restore(
    request: RestoreClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Reschedules a planned maintenance operation. */
  rescheduleMaintenance(
    request: RescheduleMaintenanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rescheduleMaintenance(
    request: RescheduleMaintenanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rescheduleMaintenance(
    request: RescheduleMaintenanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns a list of available backups for the specified OpenSearch cluster. */
  listBackups(
    request: ListClusterBackupsRequest,
    callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void,
  ): ClientUnaryCall;
  listBackups(
    request: ListClusterBackupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void,
  ): ClientUnaryCall;
  listBackups(
    request: ListClusterBackupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void,
  ): ClientUnaryCall;
  /** Moves the specified OpenSearch cluster to the specified folder. */
  move(
    request: MoveClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Starts the specified OpenSearch cluster. */
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
  /** Stops the specified OpenSearch cluster. */
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
  /**
   * Retrieves logs for the specified OpenSearch cluster.
   * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
   */
  listLogs(
    request: ListClusterLogsRequest,
    callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void,
  ): ClientUnaryCall;
  listLogs(
    request: ListClusterLogsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void,
  ): ClientUnaryCall;
  listLogs(
    request: ListClusterLogsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void,
  ): ClientUnaryCall;
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
  streamLogs(
    request: StreamClusterLogsRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<StreamLogRecord>;
  /** Retrieves the list of Operation resources for the specified cluster. */
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
  /** Retrieves a list of hosts for the specified cluster. */
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
  /** Creates an OpenSearch type host group. */
  addOpenSearchNodeGroup(
    request: AddOpenSearchNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addOpenSearchNodeGroup(
    request: AddOpenSearchNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addOpenSearchNodeGroup(
    request: AddOpenSearchNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes an OpenSearch type host group. */
  deleteOpenSearchNodeGroup(
    request: DeleteOpenSearchNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteOpenSearchNodeGroup(
    request: DeleteOpenSearchNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteOpenSearchNodeGroup(
    request: DeleteOpenSearchNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates an OpenSearch type host group. */
  updateOpenSearchNodeGroup(
    request: UpdateOpenSearchNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateOpenSearchNodeGroup(
    request: UpdateOpenSearchNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateOpenSearchNodeGroup(
    request: UpdateOpenSearchNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Creates a Dashboards type host group. */
  addDashboardsNodeGroup(
    request: AddDashboardsNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addDashboardsNodeGroup(
    request: AddDashboardsNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addDashboardsNodeGroup(
    request: AddDashboardsNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes a Dashboards type host group. */
  deleteDashboardsNodeGroup(
    request: DeleteDashboardsNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteDashboardsNodeGroup(
    request: DeleteDashboardsNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteDashboardsNodeGroup(
    request: DeleteDashboardsNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates a Dashboards type host group. */
  updateDashboardsNodeGroup(
    request: UpdateDashboardsNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateDashboardsNodeGroup(
    request: UpdateDashboardsNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateDashboardsNodeGroup(
    request: UpdateDashboardsNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves auth settings for specified cluster. */
  getAuthSettings(
    request: GetAuthSettingsRequest,
    callback: (error: ServiceError | null, response: AuthSettings) => void,
  ): ClientUnaryCall;
  getAuthSettings(
    request: GetAuthSettingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthSettings) => void,
  ): ClientUnaryCall;
  getAuthSettings(
    request: GetAuthSettingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthSettings) => void,
  ): ClientUnaryCall;
  /** Updates auth settings for specified cluster. */
  updateAuthSettings(
    request: UpdateAuthSettingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAuthSettings(
    request: UpdateAuthSettingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAuthSettings(
    request: UpdateAuthSettingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.opensearch.v1.ClusterService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ClusterServiceClient;
  service: typeof ClusterServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
