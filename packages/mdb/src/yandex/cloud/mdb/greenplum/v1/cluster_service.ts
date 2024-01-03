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
import { Backup } from "./backup";
import {
  CloudStorage,
  Cluster,
  Cluster_Environment,
  cluster_EnvironmentFromJSON,
  cluster_EnvironmentToJSON,
  GreenplumConfig,
  GreenplumRestoreConfig,
} from "./cluster";
import {
  BackgroundActivitiesConfig,
  ConnectionPoolerConfig,
  GreenplumConfig6,
  GreenplumConfig617,
  GreenplumConfig619,
  GreenplumConfig621,
  GreenplumConfig622,
  Resources,
} from "./config";
import { Host } from "./host";
import { MaintenanceWindow } from "./maintenance";
import { PXFConfig } from "./pxf";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest";
  /**
   * ID of the Greenplum® cluster resource to return.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest";
  /**
   * ID of the folder to list Greenplum® clusters in.
   *
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token] returned by the previous list request. */
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
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse";
  /** List of Greenplum® cluster resources. */
  clusters: Cluster[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value for the [ListClustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest";
  /** ID of the folder to create the Greenplum® cluster in. */
  folderId: string;
  /** Name of the Greenplum® cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the Greenplum® cluster. */
  description: string;
  /**
   * Custom labels for the Greenplum® cluster as `key:value` pairs.
   * For example, `"project":"mvp"` or `"source":"dictionary"`.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the Greenplum® cluster. */
  environment: Cluster_Environment;
  /** Greenplum® cluster configuration. */
  config?:
    | GreenplumConfig
    | undefined;
  /** Configuration of the Greenplum® master subcluster. */
  masterConfig?:
    | MasterSubclusterConfigSpec
    | undefined;
  /** Configuration of the Greenplum® segment subcluster. */
  segmentConfig?:
    | SegmentSubclusterConfigSpec
    | undefined;
  /** Number of hosts in the master subcluster. */
  masterHostCount: number;
  /** Number of segments per host. */
  segmentInHost: number;
  /** Number of hosts in the segment subcluster. */
  segmentHostCount: number;
  /** Owner user name. */
  userName: string;
  /** Owner user password. */
  userPassword: string;
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups. */
  securityGroupIds: string[];
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Host groups to place VMs of the cluster in. */
  hostGroupIds: string[];
  /** A Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** Configuration of Greenplum® and Odyssey®. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /** Cloud storage settings */
  cloudStorage?: CloudStorage | undefined;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec";
  greenplumConfig617?: GreenplumConfig617 | undefined;
  greenplumConfig619?: GreenplumConfig619 | undefined;
  greenplumConfig621?: GreenplumConfig621 | undefined;
  greenplumConfig622?: GreenplumConfig622 | undefined;
  greenplumConfig6?:
    | GreenplumConfig6
    | undefined;
  /** Odyssey® pool settings. */
  pool?: ConnectionPoolerConfig | undefined;
  backgroundActivities?: BackgroundActivitiesConfig | undefined;
  pxfConfig?: PXFConfig | undefined;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata";
  /** ID of the Greenplum® cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest";
  /**
   * ID of the Greenplum® cluster resource to update.
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the Greenplum® cluster resource should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New description of the Greenplum® cluster. */
  description: string;
  /**
   * Custom labels for the Greenplum® cluster as `key:value` pairs.
   * For example, `"project":"mvp"` or `"source":"dictionary"`.
   *
   * The new set of labels completely replaces the old one.
   * To add a label, request the current set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
   */
  labels: { [key: string]: string };
  /** New name for the cluster. */
  name: string;
  /** The Greenplum® cluster configuration. */
  config?:
    | GreenplumConfig
    | undefined;
  /** Configuration of the Greenplum® master subcluster. */
  masterConfig?:
    | MasterSubclusterConfigSpec
    | undefined;
  /** Configuration of the Greenplum® segment subcluster. */
  segmentConfig?:
    | SegmentSubclusterConfigSpec
    | undefined;
  /** Owner user password. */
  userPassword: string;
  /** The Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** User security groups. */
  securityGroupIds: string[];
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Settings of the Greenplum® cluster. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /** Cloud storage settings */
  cloudStorage?: CloudStorage | undefined;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata";
  /** ID of the Greenplum® cluster resource that is being updated. */
  clusterId: string;
}

export interface AddClusterHostsMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata";
  /** ID of the Greenplum Cluster resource that is being updated. */
  clusterId: string;
}

export interface ExpandRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest";
  /**
   * ID of the Greenplum Cluster resource to update.
   * To get the Greenplum cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Number of hosts for add to the segment subcluster */
  segmentHostCount: number;
  /** Number of segments per host to add */
  addSegmentsPerHostCount: number;
  /** Redistribute duration, in seconds */
  duration: number;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest";
  /**
   * ID of the Greenplum® cluster to delete.
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata";
  /** ID of the Greenplum® cluster that is being deleted. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest";
  /**
   * ID of the Greenplum® cluster to start.
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata";
  /** ID of the Greenplum® cluster being started. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest";
  /**
   * ID of the Greenplum® cluster to stop.
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata";
  /** ID of the Greenplum® cluster being stopped. */
  clusterId: string;
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest";
  /** ID of the Greenplum® cluster resource to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse";
  /** List of Operation resources for the specified Greenplum® cluster. */
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
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest";
  /**
   * ID of the Greenplum® cluster.
   *
   * To get the Greenplum® cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface ListClusterHostsResponse {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse";
  /** Requested list of hosts for the cluster. */
  hosts: Host[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MasterSubclusterConfigSpec {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec";
  /** Resources allocated to Greenplum® master subcluster hosts. */
  resources?: Resources | undefined;
}

export interface SegmentSubclusterConfigSpec {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec";
  /** Resources allocated to Greenplum® segment subcluster hosts. */
  resources?: Resources | undefined;
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse";
  /** Requested log records. */
  logs: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   *
   * This value is interchangeable with the [StreamLogRecord.next_record_token] from [StreamLogs] method.
   */
  nextPageToken: string;
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord";
  /** Time when the log was recorded. */
  timestamp?:
    | Date
    | undefined;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest";
  /**
   * ID of the Greenplum® cluster to request logs for.
   *
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Columns from log table to request.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Type of the service to request logs about. */
  serviceType: ListClusterLogsRequest_ServiceType;
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
   * If the number of available results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
  /** The service always returns a [ListClusterLogsResponse.next_page_token], even if the current page is empty. */
  alwaysNextPageToken: boolean;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.error_severity] (for `GREENPLUM` service) and [LogRecord.logs.message.level] (for `GREENPLUM_POOLER` service) fields.
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
}

export enum ListClusterLogsRequest_ServiceType {
  /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** GREENPLUM - Greenplum® activity logs. */
  GREENPLUM = 1,
  /** GREENPLUM_POOLER - Greenplum® pooler logs. */
  GREENPLUM_POOLER = 2,
  /** GREENPLUM_PXF - Greenplum® PXF service logs. */
  GREENPLUM_PXF = 3,
  UNRECOGNIZED = -1,
}

export function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "GREENPLUM":
      return ListClusterLogsRequest_ServiceType.GREENPLUM;
    case 2:
    case "GREENPLUM_POOLER":
      return ListClusterLogsRequest_ServiceType.GREENPLUM_POOLER;
    case 3:
    case "GREENPLUM_PXF":
      return ListClusterLogsRequest_ServiceType.GREENPLUM_PXF;
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
    case ListClusterLogsRequest_ServiceType.GREENPLUM:
      return "GREENPLUM";
    case ListClusterLogsRequest_ServiceType.GREENPLUM_POOLER:
      return "GREENPLUM_POOLER";
    case ListClusterLogsRequest_ServiceType.GREENPLUM_PXF:
      return "GREENPLUM_PXF";
    case ListClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterBackupsRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest";
  /**
   * ID of the Greenplum® cluster.
   *
   * To get the Greenplum® cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterBackupsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface StreamLogRecord {
  $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord";
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
  $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest";
  /** ID of the Greenplum® cluster. */
  clusterId: string;
  /**
   * Columns from log table to get in the response.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Type of the service to request logs about. */
  serviceType: StreamClusterLogsRequest_ServiceType;
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
  /** Record token. Set [record_token] to the [StreamLogs.next_record_token] returned by the previous [StreamLogs] request to start streaming from the next log record. */
  recordToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.error_severity] (for GREENPLUM service), [LogRecord.logs.message.level] (for POOLER service) fields.
   *
   * 2. An `=` operator.
   *
   * 3. A value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
   *
   * Examples of a filter:
   *
   * * `message.hostname='node1.db.cloud.yandex.net'`;
   * * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`.
   */
  filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
  /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** GREENPLUM - Greenplum® activity logs. */
  GREENPLUM = 1,
  /** GREENPLUM_POOLER - Greenplum® pooler logs. */
  GREENPLUM_POOLER = 2,
  /** GREENPLUM_PXF - Greenplum® PXF service logs. */
  GREENPLUM_PXF = 3,
  UNRECOGNIZED = -1,
}

export function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "GREENPLUM":
      return StreamClusterLogsRequest_ServiceType.GREENPLUM;
    case 2:
    case "GREENPLUM_POOLER":
      return StreamClusterLogsRequest_ServiceType.GREENPLUM_POOLER;
    case 3:
    case "GREENPLUM_PXF":
      return StreamClusterLogsRequest_ServiceType.GREENPLUM_PXF;
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
    case StreamClusterLogsRequest_ServiceType.GREENPLUM:
      return "GREENPLUM";
    case StreamClusterLogsRequest_ServiceType.GREENPLUM_POOLER:
      return "GREENPLUM_POOLER";
    case StreamClusterLogsRequest_ServiceType.GREENPLUM_PXF:
      return "GREENPLUM_PXF";
    case StreamClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterBackupsResponse {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse";
  /** List of Greenplum® backups. */
  backups: Backup[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value for the [ListClusterBackupsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest";
  /**
   * ID of the backup to create a cluster from.
   *
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /** Timestamp of the moment to which the Greenplum cluster should be restored. */
  time?:
    | Date
    | undefined;
  /** ID of the folder to create the Greenplum® cluster in. */
  folderId: string;
  /** Name of the Greenplum® cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the Greenplum® cluster. */
  description: string;
  /**
   * Custom labels for the Greenplum® cluster as `key:value` pairs.
   * For example, "project":"mvp" or "source":"dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the Greenplum® cluster. */
  environment: Cluster_Environment;
  /** Greenplum® cluster config. */
  config?:
    | GreenplumRestoreConfig
    | undefined;
  /** Resources of the Greenplum® master subcluster. */
  masterResources?:
    | Resources
    | undefined;
  /** Resources of the Greenplum® segment subcluster. */
  segmentResources?:
    | Resources
    | undefined;
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups. */
  securityGroupIds: string[];
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Host groups to place VMs of cluster on. */
  hostGroupIds: string[];
  /** ID of the placement group. */
  placementGroupId: string;
  /** A Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** Number of segment hosts */
  segmentHostCount: number;
  /** Number of segments on each host */
  segmentInHost: number;
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata";
  /** ID of the new Greenplum® cluster that is being created from a backup. */
  clusterId: string;
  /** ID of the backup that is being used for creating a cluster. */
  backupId: string;
}

function createBaseGetClusterRequest(): GetClusterRequest {
  return { $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest", clusterId: "" };
}

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest" as const,

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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse", clusters: [], nextPageToken: "" };
}

export const ListClustersResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse" as const,

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
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    environment: 0,
    config: undefined,
    masterConfig: undefined,
    segmentConfig: undefined,
    masterHostCount: 0,
    segmentInHost: 0,
    segmentHostCount: 0,
    userName: "",
    userPassword: "",
    networkId: "",
    securityGroupIds: [],
    deletionProtection: false,
    hostGroupIds: [],
    maintenanceWindow: undefined,
    configSpec: undefined,
    cloudStorage: undefined,
  };
}

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(40).int32(message.environment);
    }
    if (message.config !== undefined) {
      GreenplumConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
    }
    if (message.masterConfig !== undefined) {
      MasterSubclusterConfigSpec.encode(message.masterConfig, writer.uint32(58).fork()).ldelim();
    }
    if (message.segmentConfig !== undefined) {
      SegmentSubclusterConfigSpec.encode(message.segmentConfig, writer.uint32(66).fork()).ldelim();
    }
    if (message.masterHostCount !== 0) {
      writer.uint32(72).int64(message.masterHostCount);
    }
    if (message.segmentInHost !== 0) {
      writer.uint32(80).int64(message.segmentInHost);
    }
    if (message.segmentHostCount !== 0) {
      writer.uint32(88).int64(message.segmentHostCount);
    }
    if (message.userName !== "") {
      writer.uint32(98).string(message.userName);
    }
    if (message.userPassword !== "") {
      writer.uint32(106).string(message.userPassword);
    }
    if (message.networkId !== "") {
      writer.uint32(114).string(message.networkId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(122).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(128).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(138).string(v!);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(154).fork()).ldelim();
    }
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(162).fork()).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(message.cloudStorage, writer.uint32(170).fork()).ldelim();
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

          message.config = GreenplumConfig.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.masterConfig = MasterSubclusterConfigSpec.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.segmentConfig = SegmentSubclusterConfigSpec.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.masterHostCount = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.segmentInHost = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.segmentHostCount = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.userPassword = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.securityGroupIds.push(reader.string());
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

          message.hostGroupIds.push(reader.string());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
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
      config: isSet(object.config) ? GreenplumConfig.fromJSON(object.config) : undefined,
      masterConfig: isSet(object.masterConfig) ? MasterSubclusterConfigSpec.fromJSON(object.masterConfig) : undefined,
      segmentConfig: isSet(object.segmentConfig)
        ? SegmentSubclusterConfigSpec.fromJSON(object.segmentConfig)
        : undefined,
      masterHostCount: isSet(object.masterHostCount) ? globalThis.Number(object.masterHostCount) : 0,
      segmentInHost: isSet(object.segmentInHost) ? globalThis.Number(object.segmentInHost) : 0,
      segmentHostCount: isSet(object.segmentHostCount) ? globalThis.Number(object.segmentHostCount) : 0,
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      userPassword: isSet(object.userPassword) ? globalThis.String(object.userPassword) : "",
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      hostGroupIds: globalThis.Array.isArray(object?.hostGroupIds)
        ? object.hostGroupIds.map((e: any) => globalThis.String(e))
        : [],
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
      configSpec: isSet(object.configSpec) ? ConfigSpec.fromJSON(object.configSpec) : undefined,
      cloudStorage: isSet(object.cloudStorage) ? CloudStorage.fromJSON(object.cloudStorage) : undefined,
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
    if (message.config !== undefined) {
      obj.config = GreenplumConfig.toJSON(message.config);
    }
    if (message.masterConfig !== undefined) {
      obj.masterConfig = MasterSubclusterConfigSpec.toJSON(message.masterConfig);
    }
    if (message.segmentConfig !== undefined) {
      obj.segmentConfig = SegmentSubclusterConfigSpec.toJSON(message.segmentConfig);
    }
    if (message.masterHostCount !== 0) {
      obj.masterHostCount = Math.round(message.masterHostCount);
    }
    if (message.segmentInHost !== 0) {
      obj.segmentInHost = Math.round(message.segmentInHost);
    }
    if (message.segmentHostCount !== 0) {
      obj.segmentHostCount = Math.round(message.segmentHostCount);
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.userPassword !== "") {
      obj.userPassword = message.userPassword;
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.hostGroupIds?.length) {
      obj.hostGroupIds = message.hostGroupIds;
    }
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    if (message.configSpec !== undefined) {
      obj.configSpec = ConfigSpec.toJSON(message.configSpec);
    }
    if (message.cloudStorage !== undefined) {
      obj.cloudStorage = CloudStorage.toJSON(message.cloudStorage);
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
    message.config = (object.config !== undefined && object.config !== null)
      ? GreenplumConfig.fromPartial(object.config)
      : undefined;
    message.masterConfig = (object.masterConfig !== undefined && object.masterConfig !== null)
      ? MasterSubclusterConfigSpec.fromPartial(object.masterConfig)
      : undefined;
    message.segmentConfig = (object.segmentConfig !== undefined && object.segmentConfig !== null)
      ? SegmentSubclusterConfigSpec.fromPartial(object.segmentConfig)
      : undefined;
    message.masterHostCount = object.masterHostCount ?? 0;
    message.segmentInHost = object.segmentInHost ?? 0;
    message.segmentHostCount = object.segmentHostCount ?? 0;
    message.userName = object.userName ?? "";
    message.userPassword = object.userPassword ?? "";
    message.networkId = object.networkId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? ConfigSpec.fromPartial(object.configSpec)
      : undefined;
    message.cloudStorage = (object.cloudStorage !== undefined && object.cloudStorage !== null)
      ? CloudStorage.fromPartial(object.cloudStorage)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

function createBaseCreateClusterRequest_LabelsEntry(): CreateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry" as const,

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

function createBaseConfigSpec(): ConfigSpec {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec",
    greenplumConfig617: undefined,
    greenplumConfig619: undefined,
    greenplumConfig621: undefined,
    greenplumConfig622: undefined,
    greenplumConfig6: undefined,
    pool: undefined,
    backgroundActivities: undefined,
    pxfConfig: undefined,
  };
}

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec" as const,

  encode(message: ConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.greenplumConfig617 !== undefined) {
      GreenplumConfig617.encode(message.greenplumConfig617, writer.uint32(10).fork()).ldelim();
    }
    if (message.greenplumConfig619 !== undefined) {
      GreenplumConfig619.encode(message.greenplumConfig619, writer.uint32(18).fork()).ldelim();
    }
    if (message.greenplumConfig621 !== undefined) {
      GreenplumConfig621.encode(message.greenplumConfig621, writer.uint32(34).fork()).ldelim();
    }
    if (message.greenplumConfig622 !== undefined) {
      GreenplumConfig622.encode(message.greenplumConfig622, writer.uint32(42).fork()).ldelim();
    }
    if (message.greenplumConfig6 !== undefined) {
      GreenplumConfig6.encode(message.greenplumConfig6, writer.uint32(74).fork()).ldelim();
    }
    if (message.pool !== undefined) {
      ConnectionPoolerConfig.encode(message.pool, writer.uint32(26).fork()).ldelim();
    }
    if (message.backgroundActivities !== undefined) {
      BackgroundActivitiesConfig.encode(message.backgroundActivities, writer.uint32(50).fork()).ldelim();
    }
    if (message.pxfConfig !== undefined) {
      PXFConfig.encode(message.pxfConfig, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.greenplumConfig617 = GreenplumConfig617.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.greenplumConfig619 = GreenplumConfig619.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.greenplumConfig621 = GreenplumConfig621.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.greenplumConfig622 = GreenplumConfig622.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.greenplumConfig6 = GreenplumConfig6.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pool = ConnectionPoolerConfig.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.backgroundActivities = BackgroundActivitiesConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.pxfConfig = PXFConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigSpec {
    return {
      $type: ConfigSpec.$type,
      greenplumConfig617: isSet(object.greenplumConfig_6_17)
        ? GreenplumConfig617.fromJSON(object.greenplumConfig_6_17)
        : undefined,
      greenplumConfig619: isSet(object.greenplumConfig_6_19)
        ? GreenplumConfig619.fromJSON(object.greenplumConfig_6_19)
        : undefined,
      greenplumConfig621: isSet(object.greenplumConfig_6_21)
        ? GreenplumConfig621.fromJSON(object.greenplumConfig_6_21)
        : undefined,
      greenplumConfig622: isSet(object.greenplumConfig_6_22)
        ? GreenplumConfig622.fromJSON(object.greenplumConfig_6_22)
        : undefined,
      greenplumConfig6: isSet(object.greenplumConfig_6)
        ? GreenplumConfig6.fromJSON(object.greenplumConfig_6)
        : undefined,
      pool: isSet(object.pool) ? ConnectionPoolerConfig.fromJSON(object.pool) : undefined,
      backgroundActivities: isSet(object.backgroundActivities)
        ? BackgroundActivitiesConfig.fromJSON(object.backgroundActivities)
        : undefined,
      pxfConfig: isSet(object.pxfConfig) ? PXFConfig.fromJSON(object.pxfConfig) : undefined,
    };
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    if (message.greenplumConfig617 !== undefined) {
      obj.greenplumConfig_6_17 = GreenplumConfig617.toJSON(message.greenplumConfig617);
    }
    if (message.greenplumConfig619 !== undefined) {
      obj.greenplumConfig_6_19 = GreenplumConfig619.toJSON(message.greenplumConfig619);
    }
    if (message.greenplumConfig621 !== undefined) {
      obj.greenplumConfig_6_21 = GreenplumConfig621.toJSON(message.greenplumConfig621);
    }
    if (message.greenplumConfig622 !== undefined) {
      obj.greenplumConfig_6_22 = GreenplumConfig622.toJSON(message.greenplumConfig622);
    }
    if (message.greenplumConfig6 !== undefined) {
      obj.greenplumConfig_6 = GreenplumConfig6.toJSON(message.greenplumConfig6);
    }
    if (message.pool !== undefined) {
      obj.pool = ConnectionPoolerConfig.toJSON(message.pool);
    }
    if (message.backgroundActivities !== undefined) {
      obj.backgroundActivities = BackgroundActivitiesConfig.toJSON(message.backgroundActivities);
    }
    if (message.pxfConfig !== undefined) {
      obj.pxfConfig = PXFConfig.toJSON(message.pxfConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec>): ConfigSpec {
    return ConfigSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec {
    const message = createBaseConfigSpec();
    message.greenplumConfig617 = (object.greenplumConfig617 !== undefined && object.greenplumConfig617 !== null)
      ? GreenplumConfig617.fromPartial(object.greenplumConfig617)
      : undefined;
    message.greenplumConfig619 = (object.greenplumConfig619 !== undefined && object.greenplumConfig619 !== null)
      ? GreenplumConfig619.fromPartial(object.greenplumConfig619)
      : undefined;
    message.greenplumConfig621 = (object.greenplumConfig621 !== undefined && object.greenplumConfig621 !== null)
      ? GreenplumConfig621.fromPartial(object.greenplumConfig621)
      : undefined;
    message.greenplumConfig622 = (object.greenplumConfig622 !== undefined && object.greenplumConfig622 !== null)
      ? GreenplumConfig622.fromPartial(object.greenplumConfig622)
      : undefined;
    message.greenplumConfig6 = (object.greenplumConfig6 !== undefined && object.greenplumConfig6 !== null)
      ? GreenplumConfig6.fromPartial(object.greenplumConfig6)
      : undefined;
    message.pool = (object.pool !== undefined && object.pool !== null)
      ? ConnectionPoolerConfig.fromPartial(object.pool)
      : undefined;
    message.backgroundActivities = (object.backgroundActivities !== undefined && object.backgroundActivities !== null)
      ? BackgroundActivitiesConfig.fromPartial(object.backgroundActivities)
      : undefined;
    message.pxfConfig = (object.pxfConfig !== undefined && object.pxfConfig !== null)
      ? PXFConfig.fromPartial(object.pxfConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

function createBaseCreateClusterMetadata(): CreateClusterMetadata {
  return { $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata", clusterId: "" };
}

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest",
    clusterId: "",
    updateMask: undefined,
    description: "",
    labels: {},
    name: "",
    config: undefined,
    masterConfig: undefined,
    segmentConfig: undefined,
    userPassword: "",
    maintenanceWindow: undefined,
    securityGroupIds: [],
    deletionProtection: false,
    configSpec: undefined,
    cloudStorage: undefined,
  };
}

export const UpdateClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.config !== undefined) {
      GreenplumConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
    }
    if (message.masterConfig !== undefined) {
      MasterSubclusterConfigSpec.encode(message.masterConfig, writer.uint32(58).fork()).ldelim();
    }
    if (message.segmentConfig !== undefined) {
      SegmentSubclusterConfigSpec.encode(message.segmentConfig, writer.uint32(66).fork()).ldelim();
    }
    if (message.userPassword !== "") {
      writer.uint32(106).string(message.userPassword);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(138).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(144).bool(message.deletionProtection);
    }
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(154).fork()).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(message.cloudStorage, writer.uint32(162).fork()).ldelim();
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

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.config = GreenplumConfig.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.masterConfig = MasterSubclusterConfigSpec.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.segmentConfig = SegmentSubclusterConfigSpec.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.userPassword = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      config: isSet(object.config) ? GreenplumConfig.fromJSON(object.config) : undefined,
      masterConfig: isSet(object.masterConfig) ? MasterSubclusterConfigSpec.fromJSON(object.masterConfig) : undefined,
      segmentConfig: isSet(object.segmentConfig)
        ? SegmentSubclusterConfigSpec.fromJSON(object.segmentConfig)
        : undefined,
      userPassword: isSet(object.userPassword) ? globalThis.String(object.userPassword) : "",
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      configSpec: isSet(object.configSpec) ? ConfigSpec.fromJSON(object.configSpec) : undefined,
      cloudStorage: isSet(object.cloudStorage) ? CloudStorage.fromJSON(object.cloudStorage) : undefined,
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
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.config !== undefined) {
      obj.config = GreenplumConfig.toJSON(message.config);
    }
    if (message.masterConfig !== undefined) {
      obj.masterConfig = MasterSubclusterConfigSpec.toJSON(message.masterConfig);
    }
    if (message.segmentConfig !== undefined) {
      obj.segmentConfig = SegmentSubclusterConfigSpec.toJSON(message.segmentConfig);
    }
    if (message.userPassword !== "") {
      obj.userPassword = message.userPassword;
    }
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.configSpec !== undefined) {
      obj.configSpec = ConfigSpec.toJSON(message.configSpec);
    }
    if (message.cloudStorage !== undefined) {
      obj.cloudStorage = CloudStorage.toJSON(message.cloudStorage);
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
    message.name = object.name ?? "";
    message.config = (object.config !== undefined && object.config !== null)
      ? GreenplumConfig.fromPartial(object.config)
      : undefined;
    message.masterConfig = (object.masterConfig !== undefined && object.masterConfig !== null)
      ? MasterSubclusterConfigSpec.fromPartial(object.masterConfig)
      : undefined;
    message.segmentConfig = (object.segmentConfig !== undefined && object.segmentConfig !== null)
      ? SegmentSubclusterConfigSpec.fromPartial(object.segmentConfig)
      : undefined;
    message.userPassword = object.userPassword ?? "";
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? ConfigSpec.fromPartial(object.configSpec)
      : undefined;
    message.cloudStorage = (object.cloudStorage !== undefined && object.cloudStorage !== null)
      ? CloudStorage.fromPartial(object.cloudStorage)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

function createBaseUpdateClusterRequest_LabelsEntry(): UpdateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata", clusterId: "" };
}

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata" as const,

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

function createBaseAddClusterHostsMetadata(): AddClusterHostsMetadata {
  return { $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata", clusterId: "" };
}

export const AddClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata" as const,

  encode(message: AddClusterHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterHostsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddClusterHostsMetadata();
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

  fromJSON(object: any): AddClusterHostsMetadata {
    return {
      $type: AddClusterHostsMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: AddClusterHostsMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<AddClusterHostsMetadata>): AddClusterHostsMetadata {
    return AddClusterHostsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddClusterHostsMetadata>): AddClusterHostsMetadata {
    const message = createBaseAddClusterHostsMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddClusterHostsMetadata.$type, AddClusterHostsMetadata);

function createBaseExpandRequest(): ExpandRequest {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest",
    clusterId: "",
    segmentHostCount: 0,
    addSegmentsPerHostCount: 0,
    duration: 0,
  };
}

export const ExpandRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest" as const,

  encode(message: ExpandRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.segmentHostCount !== 0) {
      writer.uint32(16).int64(message.segmentHostCount);
    }
    if (message.addSegmentsPerHostCount !== 0) {
      writer.uint32(24).int64(message.addSegmentsPerHostCount);
    }
    if (message.duration !== 0) {
      writer.uint32(32).int64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpandRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpandRequest();
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

          message.segmentHostCount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.addSegmentsPerHostCount = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.duration = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExpandRequest {
    return {
      $type: ExpandRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      segmentHostCount: isSet(object.segmentHostCount) ? globalThis.Number(object.segmentHostCount) : 0,
      addSegmentsPerHostCount: isSet(object.addSegmentsPerHostCount)
        ? globalThis.Number(object.addSegmentsPerHostCount)
        : 0,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
    };
  },

  toJSON(message: ExpandRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.segmentHostCount !== 0) {
      obj.segmentHostCount = Math.round(message.segmentHostCount);
    }
    if (message.addSegmentsPerHostCount !== 0) {
      obj.addSegmentsPerHostCount = Math.round(message.addSegmentsPerHostCount);
    }
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    return obj;
  },

  create(base?: DeepPartial<ExpandRequest>): ExpandRequest {
    return ExpandRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExpandRequest>): ExpandRequest {
    const message = createBaseExpandRequest();
    message.clusterId = object.clusterId ?? "";
    message.segmentHostCount = object.segmentHostCount ?? 0;
    message.addSegmentsPerHostCount = object.addSegmentsPerHostCount ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ExpandRequest.$type, ExpandRequest);

function createBaseDeleteClusterRequest(): DeleteClusterRequest {
  return { $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest", clusterId: "" };
}

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata", clusterId: "" };
}

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata" as const,

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

function createBaseStartClusterRequest(): StartClusterRequest {
  return { $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest", clusterId: "" };
}

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata", clusterId: "" };
}

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest", clusterId: "" };
}

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata", clusterId: "" };
}

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata" as const,

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

function createBaseListClusterOperationsRequest(): ListClusterOperationsRequest {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse", hosts: [], nextPageToken: "" };
}

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse" as const,

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

function createBaseMasterSubclusterConfigSpec(): MasterSubclusterConfigSpec {
  return { $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec", resources: undefined };
}

export const MasterSubclusterConfigSpec = {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec" as const,

  encode(message: MasterSubclusterConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterSubclusterConfigSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterSubclusterConfigSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MasterSubclusterConfigSpec {
    return {
      $type: MasterSubclusterConfigSpec.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MasterSubclusterConfigSpec): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MasterSubclusterConfigSpec>): MasterSubclusterConfigSpec {
    return MasterSubclusterConfigSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MasterSubclusterConfigSpec>): MasterSubclusterConfigSpec {
    const message = createBaseMasterSubclusterConfigSpec();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MasterSubclusterConfigSpec.$type, MasterSubclusterConfigSpec);

function createBaseSegmentSubclusterConfigSpec(): SegmentSubclusterConfigSpec {
  return { $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec", resources: undefined };
}

export const SegmentSubclusterConfigSpec = {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec" as const,

  encode(message: SegmentSubclusterConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SegmentSubclusterConfigSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSegmentSubclusterConfigSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SegmentSubclusterConfigSpec {
    return {
      $type: SegmentSubclusterConfigSpec.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: SegmentSubclusterConfigSpec): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<SegmentSubclusterConfigSpec>): SegmentSubclusterConfigSpec {
    return SegmentSubclusterConfigSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SegmentSubclusterConfigSpec>): SegmentSubclusterConfigSpec {
    const message = createBaseSegmentSubclusterConfigSpec();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SegmentSubclusterConfigSpec.$type, SegmentSubclusterConfigSpec);

function createBaseListClusterLogsResponse(): ListClusterLogsResponse {
  return { $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse", logs: [], nextPageToken: "" };
}

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse" as const,

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

function createBaseLogRecord(): LogRecord {
  return { $type: "yandex.cloud.mdb.greenplum.v1.LogRecord", timestamp: undefined, message: {} };
}

export const LogRecord = {
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord" as const,

  encode(message: LogRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.message).forEach(([key, value]) => {
      LogRecord_MessageEntry.encode({
        $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry",
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
  return { $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry", key: "", value: "" };
}

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry" as const,

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

function createBaseListClusterLogsRequest(): ListClusterLogsRequest {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: [],
    serviceType: 0,
    fromTime: undefined,
    toTime: undefined,
    pageSize: 0,
    pageToken: "",
    alwaysNextPageToken: false,
    filter: "",
  };
}

export const ListClusterLogsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest" as const,

  encode(message: ListClusterLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.columnFilter) {
      writer.uint32(18).string(v!);
    }
    if (message.serviceType !== 0) {
      writer.uint32(24).int32(message.serviceType);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(toTimestamp(message.toTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(48).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(58).string(message.pageToken);
    }
    if (message.alwaysNextPageToken === true) {
      writer.uint32(64).bool(message.alwaysNextPageToken);
    }
    if (message.filter !== "") {
      writer.uint32(74).string(message.filter);
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
          if (tag !== 24) {
            break;
          }

          message.serviceType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fromTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.toTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.alwaysNextPageToken = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): ListClusterLogsRequest {
    return {
      $type: ListClusterLogsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      columnFilter: globalThis.Array.isArray(object?.columnFilter)
        ? object.columnFilter.map((e: any) => globalThis.String(e))
        : [],
      serviceType: isSet(object.serviceType) ? listClusterLogsRequest_ServiceTypeFromJSON(object.serviceType) : 0,
      fromTime: isSet(object.fromTime) ? fromJsonTimestamp(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? fromJsonTimestamp(object.toTime) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      alwaysNextPageToken: isSet(object.alwaysNextPageToken) ? globalThis.Boolean(object.alwaysNextPageToken) : false,
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
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
    if (message.serviceType !== 0) {
      obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(message.serviceType);
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
    return obj;
  },

  create(base?: DeepPartial<ListClusterLogsRequest>): ListClusterLogsRequest {
    return ListClusterLogsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterLogsRequest>): ListClusterLogsRequest {
    const message = createBaseListClusterLogsRequest();
    message.clusterId = object.clusterId ?? "";
    message.columnFilter = object.columnFilter?.map((e) => e) || [];
    message.serviceType = object.serviceType ?? 0;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.alwaysNextPageToken = object.alwaysNextPageToken ?? false;
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsRequest.$type, ListClusterLogsRequest);

function createBaseListClusterBackupsRequest(): ListClusterBackupsRequest {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest" as const,

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

function createBaseStreamLogRecord(): StreamLogRecord {
  return { $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord", record: undefined, nextRecordToken: "" };
}

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord" as const,

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
    $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest",
    clusterId: "",
    columnFilter: [],
    serviceType: 0,
    fromTime: undefined,
    toTime: undefined,
    recordToken: "",
    filter: "",
  };
}

export const StreamClusterLogsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest" as const,

  encode(message: StreamClusterLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.columnFilter) {
      writer.uint32(18).string(v!);
    }
    if (message.serviceType !== 0) {
      writer.uint32(24).int32(message.serviceType);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(toTimestamp(message.toTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.recordToken !== "") {
      writer.uint32(50).string(message.recordToken);
    }
    if (message.filter !== "") {
      writer.uint32(58).string(message.filter);
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
          if (tag !== 24) {
            break;
          }

          message.serviceType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fromTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.toTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.recordToken = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): StreamClusterLogsRequest {
    return {
      $type: StreamClusterLogsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      columnFilter: globalThis.Array.isArray(object?.columnFilter)
        ? object.columnFilter.map((e: any) => globalThis.String(e))
        : [],
      serviceType: isSet(object.serviceType) ? streamClusterLogsRequest_ServiceTypeFromJSON(object.serviceType) : 0,
      fromTime: isSet(object.fromTime) ? fromJsonTimestamp(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? fromJsonTimestamp(object.toTime) : undefined,
      recordToken: isSet(object.recordToken) ? globalThis.String(object.recordToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
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
    if (message.serviceType !== 0) {
      obj.serviceType = streamClusterLogsRequest_ServiceTypeToJSON(message.serviceType);
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
    return obj;
  },

  create(base?: DeepPartial<StreamClusterLogsRequest>): StreamClusterLogsRequest {
    return StreamClusterLogsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamClusterLogsRequest>): StreamClusterLogsRequest {
    const message = createBaseStreamClusterLogsRequest();
    message.clusterId = object.clusterId ?? "";
    message.columnFilter = object.columnFilter?.map((e) => e) || [];
    message.serviceType = object.serviceType ?? 0;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.recordToken = object.recordToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(StreamClusterLogsRequest.$type, StreamClusterLogsRequest);

function createBaseListClusterBackupsResponse(): ListClusterBackupsResponse {
  return { $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse", backups: [], nextPageToken: "" };
}

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse" as const,

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

function createBaseRestoreClusterRequest(): RestoreClusterRequest {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest",
    backupId: "",
    time: undefined,
    folderId: "",
    name: "",
    description: "",
    labels: {},
    environment: 0,
    config: undefined,
    masterResources: undefined,
    segmentResources: undefined,
    networkId: "",
    securityGroupIds: [],
    deletionProtection: false,
    hostGroupIds: [],
    placementGroupId: "",
    maintenanceWindow: undefined,
    segmentHostCount: 0,
    segmentInHost: 0,
  };
}

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest" as const,

  encode(message: RestoreClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(130).fork()).ldelim();
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RestoreClusterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(48).int32(message.environment);
    }
    if (message.config !== undefined) {
      GreenplumRestoreConfig.encode(message.config, writer.uint32(58).fork()).ldelim();
    }
    if (message.masterResources !== undefined) {
      Resources.encode(message.masterResources, writer.uint32(66).fork()).ldelim();
    }
    if (message.segmentResources !== undefined) {
      Resources.encode(message.segmentResources, writer.uint32(74).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(82).string(message.networkId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(90).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(96).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(106).string(v!);
    }
    if (message.placementGroupId !== "") {
      writer.uint32(114).string(message.placementGroupId);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(122).fork()).ldelim();
    }
    if (message.segmentHostCount !== 0) {
      writer.uint32(136).int64(message.segmentHostCount);
    }
    if (message.segmentInHost !== 0) {
      writer.uint32(144).int64(message.segmentInHost);
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
        case 16:
          if (tag !== 130) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

          const entry5 = RestoreClusterRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.environment = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.config = GreenplumRestoreConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.masterResources = Resources.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.segmentResources = Resources.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.networkId = reader.string();
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

          message.hostGroupIds.push(reader.string());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.placementGroupId = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.segmentHostCount = longToNumber(reader.int64() as Long);
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.segmentInHost = longToNumber(reader.int64() as Long);
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
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
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
      config: isSet(object.config) ? GreenplumRestoreConfig.fromJSON(object.config) : undefined,
      masterResources: isSet(object.masterResources) ? Resources.fromJSON(object.masterResources) : undefined,
      segmentResources: isSet(object.segmentResources) ? Resources.fromJSON(object.segmentResources) : undefined,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      hostGroupIds: globalThis.Array.isArray(object?.hostGroupIds)
        ? object.hostGroupIds.map((e: any) => globalThis.String(e))
        : [],
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
      segmentHostCount: isSet(object.segmentHostCount) ? globalThis.Number(object.segmentHostCount) : 0,
      segmentInHost: isSet(object.segmentInHost) ? globalThis.Number(object.segmentInHost) : 0,
    };
  },

  toJSON(message: RestoreClusterRequest): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
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
    if (message.config !== undefined) {
      obj.config = GreenplumRestoreConfig.toJSON(message.config);
    }
    if (message.masterResources !== undefined) {
      obj.masterResources = Resources.toJSON(message.masterResources);
    }
    if (message.segmentResources !== undefined) {
      obj.segmentResources = Resources.toJSON(message.segmentResources);
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.hostGroupIds?.length) {
      obj.hostGroupIds = message.hostGroupIds;
    }
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    if (message.segmentHostCount !== 0) {
      obj.segmentHostCount = Math.round(message.segmentHostCount);
    }
    if (message.segmentInHost !== 0) {
      obj.segmentInHost = Math.round(message.segmentInHost);
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreClusterRequest>): RestoreClusterRequest {
    return RestoreClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreClusterRequest>): RestoreClusterRequest {
    const message = createBaseRestoreClusterRequest();
    message.backupId = object.backupId ?? "";
    message.time = object.time ?? undefined;
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
    message.config = (object.config !== undefined && object.config !== null)
      ? GreenplumRestoreConfig.fromPartial(object.config)
      : undefined;
    message.masterResources = (object.masterResources !== undefined && object.masterResources !== null)
      ? Resources.fromPartial(object.masterResources)
      : undefined;
    message.segmentResources = (object.segmentResources !== undefined && object.segmentResources !== null)
      ? Resources.fromPartial(object.segmentResources)
      : undefined;
    message.networkId = object.networkId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    message.placementGroupId = object.placementGroupId ?? "";
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    message.segmentHostCount = object.segmentHostCount ?? 0;
    message.segmentInHost = object.segmentInHost ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

function createBaseRestoreClusterRequest_LabelsEntry(): RestoreClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry", key: "", value: "" };
}

export const RestoreClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata", clusterId: "", backupId: "" };
}

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata" as const,

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

/** A set of methods for managing Greenplum® clusters. */
export type ClusterServiceService = typeof ClusterServiceService;
export const ClusterServiceService = {
  /**
   * Returns the specified Greenplum® cluster.
   *
   * To get the list of all available Greenplum® clusters, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) => Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
  list: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) => Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) => Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a Greenplum® cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) => Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified Greenplum® cluster. */
  update: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) => Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Expands the specified Greenplum® cluster. */
  expand: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Expand",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExpandRequest) => Buffer.from(ExpandRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ExpandRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified Greenplum® cluster. */
  delete: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) => Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified Greenplum® cluster. */
  start: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) => Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified Greenplum® cluster. */
  stop: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) => Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
  },
  /** Retrieves a list of master hosts for the specified cluster. */
  listMasterHosts: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListMasterHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterHostsRequest) => Buffer.from(ListClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterHostsRequest.decode(value),
    responseSerialize: (value: ListClusterHostsResponse) =>
      Buffer.from(ListClusterHostsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterHostsResponse.decode(value),
  },
  /** Retrieves a list of segment hosts for the specified cluster. */
  listSegmentHosts: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListSegmentHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterHostsRequest) => Buffer.from(ListClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterHostsRequest.decode(value),
    responseSerialize: (value: ListClusterHostsResponse) =>
      Buffer.from(ListClusterHostsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterHostsResponse.decode(value),
  },
  /** Retrieves logs for the specified Greenplum® cluster. */
  listLogs: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListLogs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterLogsRequest) => Buffer.from(ListClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterLogsRequest.decode(value),
    responseSerialize: (value: ListClusterLogsResponse) => Buffer.from(ListClusterLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterLogsResponse.decode(value),
  },
  /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/StreamLogs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: StreamClusterLogsRequest) => Buffer.from(StreamClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StreamClusterLogsRequest.decode(value),
    responseSerialize: (value: StreamLogRecord) => Buffer.from(StreamLogRecord.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamLogRecord.decode(value),
  },
  /** Retrieves a list of available backups for the specified Greenplum® cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListBackups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterBackupsRequest) =>
      Buffer.from(ListClusterBackupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterBackupsRequest.decode(value),
    responseSerialize: (value: ListClusterBackupsResponse) =>
      Buffer.from(ListClusterBackupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterBackupsResponse.decode(value),
  },
  /** Creates a new Greenplum® cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreClusterRequest) => Buffer.from(RestoreClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Greenplum® cluster.
   *
   * To get the list of all available Greenplum® clusters, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a Greenplum® cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified Greenplum® cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Expands the specified Greenplum® cluster. */
  expand: handleUnaryCall<ExpandRequest, Operation>;
  /** Deletes the specified Greenplum® cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Starts the specified Greenplum® cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stops the specified Greenplum® cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
  /** Retrieves a list of master hosts for the specified cluster. */
  listMasterHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Retrieves a list of segment hosts for the specified cluster. */
  listSegmentHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Retrieves logs for the specified Greenplum® cluster. */
  listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
  /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
  /** Retrieves a list of available backups for the specified Greenplum® cluster. */
  listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
  /** Creates a new Greenplum® cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified Greenplum® cluster.
   *
   * To get the list of all available Greenplum® clusters, make a [List] request.
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
  /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
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
  /** Creates a Greenplum® cluster in the specified folder. */
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
  /** Updates the specified Greenplum® cluster. */
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
  /** Expands the specified Greenplum® cluster. */
  expand(request: ExpandRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
  expand(
    request: ExpandRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  expand(
    request: ExpandRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified Greenplum® cluster. */
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
  /** Starts the specified Greenplum® cluster. */
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
  /** Stops the specified Greenplum® cluster. */
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
  /** Retrieves a list of master hosts for the specified cluster. */
  listMasterHosts(
    request: ListClusterHostsRequest,
    callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
  ): ClientUnaryCall;
  listMasterHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
  ): ClientUnaryCall;
  listMasterHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves a list of segment hosts for the specified cluster. */
  listSegmentHosts(
    request: ListClusterHostsRequest,
    callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
  ): ClientUnaryCall;
  listSegmentHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
  ): ClientUnaryCall;
  listSegmentHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves logs for the specified Greenplum® cluster. */
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
  /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
  streamLogs(
    request: StreamClusterLogsRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<StreamLogRecord>;
  /** Retrieves a list of available backups for the specified Greenplum® cluster. */
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
  /** Creates a new Greenplum® cluster using the specified backup. */
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
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.greenplum.v1.ClusterService",
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
