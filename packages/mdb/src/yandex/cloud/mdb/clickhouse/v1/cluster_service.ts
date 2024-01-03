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
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import { TimeOfDay } from "@yandex-cloud/core/dist/generated/google/type/timeofday";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Backup } from "./backup";
import {
  Access,
  CloudStorage,
  Cluster,
  Cluster_Environment,
  cluster_EnvironmentFromJSON,
  cluster_EnvironmentToJSON,
  Host,
  Host_Type,
  host_TypeFromJSON,
  host_TypeToJSON,
  Resources,
  Shard,
  ShardGroup,
} from "./cluster";
import { ClickhouseConfig, ClickhouseConfig_ExternalDictionary } from "./config/clickhouse";
import { DatabaseSpec } from "./database";
import { MaintenanceWindow } from "./maintenance";
import { UserSpec } from "./user";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterRequest";
  /**
   * ID of the ClickHouse Cluster resource to return.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersRequest";
  /**
   * ID of the folder to list ClickHouse clusters in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
   */
  filter: string;
}

export interface ListClustersResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersResponse";
  /** List of ClickHouse Cluster resources. */
  clusters: Cluster[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
   * for the [ListClustersRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest";
  /** ID of the folder to create the ClickHouse cluster in. */
  folderId: string;
  /** Name of the ClickHouse cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the ClickHouse cluster. */
  description: string;
  /**
   * Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the ClickHouse cluster. */
  environment: Cluster_Environment;
  /** Configuration and resources for hosts that should be created for the ClickHouse cluster. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /** Descriptions of databases to be created in the ClickHouse cluster. */
  databaseSpecs: DatabaseSpec[];
  /** Descriptions of database users to be created in the ClickHouse cluster. */
  userSpecs: UserSpec[];
  /** Individual configurations for hosts that should be created for the ClickHouse cluster. */
  hostSpecs: HostSpec[];
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** Name of the first shard in cluster. If not set, defaults to the value 'shard1'. */
  shardName: string;
  /** ID of the service account used for access to Object Storage. */
  serviceAccountId: string;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Window of maintenance operations. */
  maintenanceWindow?: MaintenanceWindow | undefined;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterMetadata";
  /** ID of the ClickHouse cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest";
  /**
   * ID of the ClickHouse Cluster resource to update.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the ClickHouse Cluster resource should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New description of the ClickHouse cluster. */
  description: string;
  /**
   * Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   *
   * The new set of labels will completely replace the old ones. To add a label, request the current
   * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
   */
  labels: { [key: string]: string };
  /** New configuration and resources for hosts in the cluster. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /** New name for the cluster. */
  name: string;
  /** ID of the service account used for access to Object Storage. */
  serviceAccountId: string;
  /** New maintenance window settings for the cluster. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterMetadata";
  /** ID of the ClickHouse Cluster resource that is being updated. */
  clusterId: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterRequest";
  /**
   * ID of the ClickHouse cluster to delete.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterMetadata";
  /** ID of the ClickHouse cluster that is being deleted. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterRequest";
  /** ID of the ClickHouse cluster to start. */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterMetadata";
  /** ID of the ClickHouse cluster being started. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterRequest";
  /** ID of the ClickHouse cluster to stop. */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterMetadata";
  /** ID of the ClickHouse cluster being stopped. */
  clusterId: string;
}

export interface MoveClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterRequest";
  /** ID of the ClickHouse cluster to move. */
  clusterId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterMetadata";
  /** ID of the ClickHouse cluster being moved. */
  clusterId: string;
  /** ID of the source folder. */
  sourceFolderId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface AddClusterZookeeperRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperRequest";
  /** ID of the ClickHouse cluster to modify. */
  clusterId: string;
  /** Resources allocated to Zookeeper hosts. */
  resources?:
    | Resources
    | undefined;
  /** Configuration of ZooKeeper hosts. */
  hostSpecs: HostSpec[];
}

export interface AddClusterZookeeperMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperMetadata";
  /** ID of the ClickHouse cluster. */
  clusterId: string;
}

export interface BackupClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterRequest";
  /**
   * ID of the ClickHouse cluster to back up.
   * To get the ClickHouse cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface BackupClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterMetadata";
  /** ID of the ClickHouse cluster that is being backed up. */
  clusterId: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest";
  /**
   * ID of the backup to restore from. This backup will be used to create one cluster shard.
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /**
   * Additional IDs of the backups to restore from.
   * Each additional backup is responsible for restoring separate shard.
   * Restored cluster will have len(additional_backup_ids)+1 shards in total.
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  additionalBackupIds: string[];
  /** Name of the new ClickHouse cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the new ClickHouse cluster. */
  description: string;
  /**
   * Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the new ClickHouse cluster. */
  environment: Cluster_Environment;
  /** Configuration for the ClickHouse cluster to be created. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /**
   * Configurations for ClickHouse hosts that should be created for
   * the cluster that is being created from the backup.
   */
  hostSpecs: HostSpec[];
  /** ID of the network to create the ClickHouse cluster in. */
  networkId: string;
  /** ID of the folder to create the ClickHouse cluster in. */
  folderId: string;
  /** ID of the service account used for access to Object Storage. */
  serviceAccountId: string;
  /** User security groups */
  securityGroupIds: string[];
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterMetadata";
  /** ID of the new ClickHouse cluster that is being created from a backup. */
  clusterId: string;
  /** ID of the backup that is being used for creating a cluster. */
  backupId: string;
}

export interface RescheduleMaintenanceRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceRequest";
  /** ID of the ClickHouse cluster to reschedule the maintenance operation for. */
  clusterId: string;
  /** The type of reschedule request. */
  rescheduleType: RescheduleMaintenanceRequest_RescheduleType;
  /** The time until which this maintenance operation should be delayed. The value should be ahead of the first time when the maintenance operation has been scheduled for no more than two weeks. The value can also point to the past moment of time if [reschedule_type.IMMEDIATE] reschedule type is chosen. */
  delayedUntil?: Date | undefined;
}

export enum RescheduleMaintenanceRequest_RescheduleType {
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

/** Rescheduled maintenance operation metadata. */
export interface RescheduleMaintenanceMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceMetadata";
  /** Required. ID of the ClickHouse cluster. */
  clusterId: string;
  /** Required. The time until which this maintenance operation is to be delayed. */
  delayedUntil?: Date | undefined;
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord";
  /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  timestamp?:
    | Date
    | undefined;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsRequest";
  /**
   * ID of the ClickHouse cluster to request logs for.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Columns from logs table to request.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Type of the service to request logs about. */
  serviceType: ListClusterLogsRequest_ServiceType;
  /** Start timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  fromTime?:
    | Date
    | undefined;
  /** End timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  toTime?:
    | Date
    | undefined;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export enum ListClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** CLICKHOUSE - Logs of ClickHouse activity. */
  CLICKHOUSE = 1,
  UNRECOGNIZED = -1,
}

export function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "CLICKHOUSE":
      return ListClusterLogsRequest_ServiceType.CLICKHOUSE;
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
    case ListClusterLogsRequest_ServiceType.CLICKHOUSE:
      return "CLICKHOUSE";
    case ListClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsResponse";
  /** Requested log records. */
  logs: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   * This value is interchangeable with the [StreamLogRecord.next_record_token] from StreamLogs method.
   */
  nextPageToken: string;
}

export interface StreamLogRecord {
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamLogRecord";
  /** One of the requested log records. */
  record?:
    | LogRecord
    | undefined;
  /**
   * This token allows you to continue streaming logs starting from the exact
   * same record. To continue streaming, specify value of [next_record_token[
   * as value for the [StreamClusterLogsRequest.record_token] parameter in the next StreamLogs request.
   * This value is interchangeable with the [ListClusterLogsResponse.next_page_token] from ListLogs method.
   */
  nextRecordToken: string;
}

export interface StreamClusterLogsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamClusterLogsRequest";
  /** Required. ID of the ClickHouse cluster. */
  clusterId: string;
  /** Columns from logs table to get in the response. */
  columnFilter: string[];
  serviceType: StreamClusterLogsRequest_ServiceType;
  /** Start timestamp for the logs request. */
  fromTime?:
    | Date
    | undefined;
  /**
   * End timestamp for the logs request.
   * If this field is not set, all existing logs will be sent and then the new ones as
   * they appear. In essence it has `tail -f` semantics.
   */
  toTime?:
    | Date
    | undefined;
  /**
   * Record token. Set [record_token] to the [StreamLogRecord.next_record_token] returned by a previous StreamLogs
   * request to start streaming from next log record.
   */
  recordToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.severity] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
   * Examples of a filter:
   * - `message.hostname='node1.db.cloud.yandex.net'`
   * - `message.severity IN ('Error', 'Fatal') AND message.hostname != 'node2.db.cloud.yandex.net'`.
   */
  filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** CLICKHOUSE - Logs of ClickHouse activity. */
  CLICKHOUSE = 1,
  UNRECOGNIZED = -1,
}

export function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "CLICKHOUSE":
      return StreamClusterLogsRequest_ServiceType.CLICKHOUSE;
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
    case StreamClusterLogsRequest_ServiceType.CLICKHOUSE:
      return "CLICKHOUSE";
    case StreamClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsRequest";
  /** ID of the ClickHouse Cluster resource to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsResponse";
  /** List of Operation resources for the specified ClickHouse cluster. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterBackupsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsRequest";
  /**
   * ID of the ClickHouse cluster.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterBackupsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterBackupsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsResponse";
  /** List of ClickHouse Backup resources. */
  backups: Backup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterBackupsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterHostsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsRequest";
  /**
   * ID of the ClickHouse cluster.
   * To get the ClickHouse cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterHostsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsResponse";
  /** Requested list of hosts for the cluster. */
  hosts: Host[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface AddClusterHostsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsRequest";
  /**
   * ID of the ClickHouse cluster to add hosts to.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configurations for ClickHouse hosts that should be added to the cluster. */
  hostSpecs: HostSpec[];
  /** Whether to copy schema to new ClickHouse hosts from replicas. */
  copySchema?: boolean | undefined;
}

export interface AddClusterHostsMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsMetadata";
  /** ID of the ClickHouse cluster to which the hosts are being added. */
  clusterId: string;
  /** Names of hosts that are being added to the cluster. */
  hostNames: string[];
}

export interface UpdateHostSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateHostSpec";
  /**
   * Name of the host to update.
   * To get the ClickHouse host name, use a [ClusterService.ListHosts] request.
   */
  hostName: string;
  /** Field mask that specifies which fields of the ClickHouse host should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Whether the host should get a public IP address on creation. */
  assignPublicIp?: boolean | undefined;
}

export interface UpdateClusterHostsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsRequest";
  /**
   * ID of the ClickHouse cluster to update hosts in.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** New configurations to apply to hosts. */
  updateHostSpecs: UpdateHostSpec[];
}

export interface UpdateClusterHostsMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsMetadata";
  /** ID of the ClickHouse cluster to modify hosts in. */
  clusterId: string;
  /** Names of hosts that are being modified. */
  hostNames: string[];
}

export interface DeleteClusterHostsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsRequest";
  /**
   * ID of the ClickHouse cluster to remove hosts from.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Names of hosts to delete. */
  hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsMetadata";
  /** ID of the ClickHouse cluster to remove hosts from. */
  clusterId: string;
  /** Names of hosts that are being deleted. */
  hostNames: string[];
}

export interface GetClusterShardRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardRequest";
  /**
   * ID of the cluster that the shard belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   * To get the name of the database, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard to request information about.
   * To get the name of a shard, use a [ClusterService.ListShards] request.
   */
  shardName: string;
}

export interface ListClusterShardsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsRequest";
  /**
   * ID of the ClickHouse cluster to list shards in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterShardsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  to get the next page of results, set [page_token] to the [ListClusterShardsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterShardsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsResponse";
  /** List of ClickHouse shards. */
  shards: Shard[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterShardsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterShardsRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface AddClusterShardRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardRequest";
  /**
   * ID of the ClickHouse cluster to add a shard to.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name for the new shard. */
  shardName: string;
  /** Configuration of the new shard. */
  configSpec?:
    | ShardConfigSpec
    | undefined;
  /** Configurations for ClickHouse hosts that should be created with the shard. */
  hostSpecs: HostSpec[];
  /** Whether to copy schema to hosts of the shard to be created. The schema is copied from hosts of an existing shard. */
  copySchema?: boolean | undefined;
}

export interface AddClusterShardMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardMetadata";
  /** ID of the cluster that a shard is being added to. */
  clusterId: string;
  /** Name of the shard being created. */
  shardName: string;
}

export interface UpdateClusterShardRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardRequest";
  /**
   * ID of the ClickHouse cluster the shard belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard to be updated.
   * To get the name of a shard, use a [ClusterService.ListShards] request.
   */
  shardName: string;
  /** Field mask that specifies which attributes of the ClickHouse shard should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New configuration for the specified shard. */
  configSpec?: ShardConfigSpec | undefined;
}

export interface UpdateClusterShardMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardMetadata";
  /** ID of the cluster that contains the shard being updated. */
  clusterId: string;
  /** Name of the shard being updated. */
  shardName: string;
}

export interface DeleteClusterShardRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardRequest";
  /**
   * ID of the ClickHouse cluster the shard belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard to be deleted.
   * To get the name of a shard, use a [ClusterService.ListShards] request.
   */
  shardName: string;
}

export interface DeleteClusterShardMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardMetadata";
  /** ID of the cluster that contains the shard being deleted. */
  clusterId: string;
  /** Name of the shard being deleted. */
  shardName: string;
}

export interface GetClusterShardGroupRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardGroupRequest";
  /**
   * ID of the cluster that the shard group belongs to.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard group to request information about.
   *
   * To get the name of a shard group, make a [ClusterService.ListShardGroups] request.
   */
  shardGroupName: string;
}

export interface ListClusterShardGroupsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsRequest";
  /**
   * ID of the cluster that the shard group belongs to.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterShardGroupsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.
   *
   * To get the next page of results, set [page_token] to the [ListClusterShardGroupsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterShardGroupsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsResponse";
  /** List of ClickHouse cluster's shard groups. */
  shardGroups: ShardGroup[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterShardGroupsRequest.page_size], use the [next_page_token] as the value for the [ListClusterShardGroupsRequest.page_token] parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterShardGroupRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupRequest";
  /**
   * ID of the ClickHouse cluster to add a shard group to.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name for the new shard group. */
  shardGroupName: string;
  /** Description of the new shard group. 0-256 characters long. */
  description: string;
  /**
   * List of shard names that should be put into the new group.
   *
   * To get the list, make a [ClusterService.ListShardGroups] request.
   */
  shardNames: string[];
}

export interface CreateClusterShardGroupMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupMetadata";
  /** ID of the cluster to add a shard group to. */
  clusterId: string;
  /** Name of the shard group that is being added. */
  shardGroupName: string;
}

export interface UpdateClusterShardGroupRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupRequest";
  /**
   * ID of the ClickHouse cluster that contains the shard group to update.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard group that should be updated.
   *
   * To get the name, make a [ClusterService.ListShardGroups] request.
   */
  shardGroupName: string;
  updateMask?:
    | string[]
    | undefined;
  /** Updated description of the shard group. 0-256 characters long. */
  description: string;
  /** Updated list of shard names that belongs to the shard group. */
  shardNames: string[];
}

export interface UpdateClusterShardGroupMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupMetadata";
  /** ID of the cluster that contains the shard group being updated. */
  clusterId: string;
  /** Name of the shard group that is being updated. */
  shardGroupName: string;
}

export interface DeleteClusterShardGroupRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupRequest";
  /**
   * ID of the ClickHouse cluster that contains the shard group to delete.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard group that should be deleted.
   *
   * To get the name, make a [ClusterService.ListShardGroups] request.
   */
  shardGroupName: string;
}

export interface DeleteClusterShardGroupMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupMetadata";
  /** ID of the cluster that contains the shard group being deleted. */
  clusterId: string;
  /** Name of the shard group that is being deleted. */
  shardGroupName: string;
}

export interface ListClusterExternalDictionariesRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesRequest";
  /** ID of the cluster that the external dictionaries belong to. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterExternalDictionaryResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the [ListClusterExternalDictionaryResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListClusterExternalDictionariesResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesResponse";
  /** List of ClickHouse Cluster external dictionaries. */
  externalDictionaries: ClickhouseConfig_ExternalDictionary[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterExternalDictionaryRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterExternalDictionaryRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterExternalDictionaryRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryRequest";
  /**
   * ID of the ClickHouse cluster to create the external dictionary for.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the external dictionary. */
  externalDictionary?: ClickhouseConfig_ExternalDictionary | undefined;
}

export interface CreateClusterExternalDictionaryMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryMetadata";
  /** ID of the cluster for which an external dictionary is being created. */
  clusterId: string;
}

export interface UpdateClusterExternalDictionaryRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryRequest";
  /**
   * ID of the ClickHouse cluster to update the external dictionary for.
   * To get the cluster ID, use a [List] request.
   */
  clusterId: string;
  /** Configuration of the external dictionary. */
  externalDictionary?:
    | ClickhouseConfig_ExternalDictionary
    | undefined;
  /** Field mask that specifies which fields of the External Dictionary should be updated. */
  updateMask?: string[] | undefined;
}

export interface UpdateClusterExternalDictionaryMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryMetadata";
  /** ID of the cluster for which an external dictionary is being updated. */
  clusterId: string;
  /** Name of the external dictionary. */
  externalDictionaryName: string;
}

export interface DeleteClusterExternalDictionaryRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryRequest";
  /**
   * ID of the ClickHouse cluster to delete the external dictionary from.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the external dictionary to delete. */
  externalDictionaryName: string;
}

export interface DeleteClusterExternalDictionaryMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryMetadata";
  /** ID of the cluster where an external dictionary is being deleted. */
  clusterId: string;
}

export interface HostSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.HostSpec";
  /**
   * ID of the availability zone where the host resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /** Type of the host to be deployed. */
  type: Host_Type;
  /**
   * ID of the subnet that the host should belong to. This subnet should be a part
   * of the network that the cluster belongs to.
   * The ID of the network is set in the [Cluster.network_id] field.
   */
  subnetId: string;
  /**
   * Whether the host should get a public IP address on creation.
   *
   * After a host has been created, this setting cannot be changed. To remove an assigned public IP, or to assign
   * a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
   *
   * Possible values:
   * * false - don't assign a public IP to the host.
   * * true - the host should have a public IP address.
   */
  assignPublicIp: boolean;
  /** Name of the shard that the host is assigned to. */
  shardName: string;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec";
  /** Version of the ClickHouse server software. */
  version: string;
  /** Configuration and resources for a ClickHouse server. */
  clickhouse?:
    | ConfigSpec_Clickhouse
    | undefined;
  /** Configuration and resources for a ZooKeeper server. */
  zookeeper?:
    | ConfigSpec_Zookeeper
    | undefined;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /**
   * Access policy for external services.
   *
   * If you want a specific service to access the ClickHouse cluster, then set the necessary values in this policy.
   */
  access?: Access | undefined;
  cloudStorage?:
    | CloudStorage
    | undefined;
  /** Whether database management through SQL commands is enabled. */
  sqlDatabaseManagement?:
    | boolean
    | undefined;
  /** Whether user management through SQL commands is enabled. */
  sqlUserManagement?:
    | boolean
    | undefined;
  /** Password for user 'admin' that has SQL user management access. */
  adminPassword: string;
  /** Whether cluster should use embedded Keeper instead of Zookeeper */
  embeddedKeeper?: boolean | undefined;
}

export interface ConfigSpec_Clickhouse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Clickhouse";
  /** Configuration for a ClickHouse server. */
  config?:
    | ClickhouseConfig
    | undefined;
  /** Resources allocated to ClickHouse hosts. */
  resources?: Resources | undefined;
}

export interface ConfigSpec_Zookeeper {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Zookeeper";
  /**
   * Resources allocated to ZooKeeper hosts. If not set, minimal available resources will be used.
   * All available resource presets can be retrieved with a [ResourcePresetService.List] request.
   */
  resources?: Resources | undefined;
}

export interface ShardConfigSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec";
  /** ClickHouse configuration for a shard. */
  clickhouse?: ShardConfigSpec_Clickhouse | undefined;
}

export interface ShardConfigSpec_Clickhouse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec.Clickhouse";
  /** ClickHouse settings for the shard. */
  config?:
    | ClickhouseConfig
    | undefined;
  /** Computational resources for the shard. */
  resources?:
    | Resources
    | undefined;
  /**
   * Relative weight of the shard considered when writing data to the cluster.
   * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/operations/table_engines/distributed/).
   */
  weight?: number | undefined;
}

function createBaseGetClusterRequest(): GetClusterRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterRequest", clusterId: "" };
}

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterRequest" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersRequest" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersResponse", clusters: [], nextPageToken: "" };
}

export const ListClustersResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersResponse" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    environment: 0,
    configSpec: undefined,
    databaseSpecs: [],
    userSpecs: [],
    hostSpecs: [],
    networkId: "",
    shardName: "",
    serviceAccountId: "",
    securityGroupIds: [],
    deletionProtection: false,
    maintenanceWindow: undefined,
  };
}

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(40).int32(message.environment);
    }
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.databaseSpecs) {
      DatabaseSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.userSpecs) {
      UserSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(82).string(message.networkId);
    }
    if (message.shardName !== "") {
      writer.uint32(90).string(message.shardName);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(98).string(message.serviceAccountId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(106).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(112).bool(message.deletionProtection);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(122).fork()).ldelim();
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

          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.databaseSpecs.push(DatabaseSpec.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.userSpecs.push(UserSpec.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
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

          message.shardName = reader.string();
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

          message.securityGroupIds.push(reader.string());
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
      configSpec: isSet(object.configSpec) ? ConfigSpec.fromJSON(object.configSpec) : undefined,
      databaseSpecs: globalThis.Array.isArray(object?.databaseSpecs)
        ? object.databaseSpecs.map((e: any) => DatabaseSpec.fromJSON(e))
        : [],
      userSpecs: globalThis.Array.isArray(object?.userSpecs)
        ? object.userSpecs.map((e: any) => UserSpec.fromJSON(e))
        : [],
      hostSpecs: globalThis.Array.isArray(object?.hostSpecs)
        ? object.hostSpecs.map((e: any) => HostSpec.fromJSON(e))
        : [],
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
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
      obj.configSpec = ConfigSpec.toJSON(message.configSpec);
    }
    if (message.databaseSpecs?.length) {
      obj.databaseSpecs = message.databaseSpecs.map((e) => DatabaseSpec.toJSON(e));
    }
    if (message.userSpecs?.length) {
      obj.userSpecs = message.userSpecs.map((e) => UserSpec.toJSON(e));
    }
    if (message.hostSpecs?.length) {
      obj.hostSpecs = message.hostSpecs.map((e) => HostSpec.toJSON(e));
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
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
      ? ConfigSpec.fromPartial(object.configSpec)
      : undefined;
    message.databaseSpecs = object.databaseSpecs?.map((e) => DatabaseSpec.fromPartial(e)) || [];
    message.userSpecs = object.userSpecs?.map((e) => UserSpec.fromPartial(e)) || [];
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.networkId = object.networkId ?? "";
    message.shardName = object.shardName ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

function createBaseCreateClusterRequest_LabelsEntry(): CreateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterMetadata", clusterId: "" };
}

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest",
    clusterId: "",
    updateMask: undefined,
    description: "",
    labels: {},
    configSpec: undefined,
    name: "",
    serviceAccountId: "",
    maintenanceWindow: undefined,
    securityGroupIds: [],
    deletionProtection: false,
  };
}

export const UpdateClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(58).string(message.serviceAccountId);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(74).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(80).bool(message.deletionProtection);
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

          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
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

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 10:
          if (tag !== 80) {
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
      configSpec: isSet(object.configSpec) ? ConfigSpec.fromJSON(object.configSpec) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
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
      obj.configSpec = ConfigSpec.toJSON(message.configSpec);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
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
      ? ConfigSpec.fromPartial(object.configSpec)
      : undefined;
    message.name = object.name ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

function createBaseUpdateClusterRequest_LabelsEntry(): UpdateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterMetadata", clusterId: "" };
}

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterRequest", clusterId: "" };
}

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterMetadata", clusterId: "" };
}

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterRequest", clusterId: "" };
}

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterMetadata", clusterId: "" };
}

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterRequest", clusterId: "" };
}

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterMetadata", clusterId: "" };
}

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterMetadata" as const,

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

function createBaseMoveClusterRequest(): MoveClusterRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterRequest", clusterId: "", destinationFolderId: "" };
}

export const MoveClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterRequest" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
  };
}

export const MoveClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterMetadata" as const,

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

function createBaseAddClusterZookeeperRequest(): AddClusterZookeeperRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperRequest",
    clusterId: "",
    resources: undefined,
    hostSpecs: [],
  };
}

export const AddClusterZookeeperRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperRequest" as const,

  encode(message: AddClusterZookeeperRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterZookeeperRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddClusterZookeeperRequest();
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

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddClusterZookeeperRequest {
    return {
      $type: AddClusterZookeeperRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      hostSpecs: globalThis.Array.isArray(object?.hostSpecs)
        ? object.hostSpecs.map((e: any) => HostSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddClusterZookeeperRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.hostSpecs?.length) {
      obj.hostSpecs = message.hostSpecs.map((e) => HostSpec.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AddClusterZookeeperRequest>): AddClusterZookeeperRequest {
    return AddClusterZookeeperRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddClusterZookeeperRequest>): AddClusterZookeeperRequest {
    const message = createBaseAddClusterZookeeperRequest();
    message.clusterId = object.clusterId ?? "";
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AddClusterZookeeperRequest.$type, AddClusterZookeeperRequest);

function createBaseAddClusterZookeeperMetadata(): AddClusterZookeeperMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperMetadata", clusterId: "" };
}

export const AddClusterZookeeperMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperMetadata" as const,

  encode(message: AddClusterZookeeperMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterZookeeperMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddClusterZookeeperMetadata();
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

  fromJSON(object: any): AddClusterZookeeperMetadata {
    return {
      $type: AddClusterZookeeperMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: AddClusterZookeeperMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<AddClusterZookeeperMetadata>): AddClusterZookeeperMetadata {
    return AddClusterZookeeperMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddClusterZookeeperMetadata>): AddClusterZookeeperMetadata {
    const message = createBaseAddClusterZookeeperMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddClusterZookeeperMetadata.$type, AddClusterZookeeperMetadata);

function createBaseBackupClusterRequest(): BackupClusterRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterRequest", clusterId: "" };
}

export const BackupClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterMetadata", clusterId: "" };
}

export const BackupClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest",
    backupId: "",
    additionalBackupIds: [],
    name: "",
    description: "",
    labels: {},
    environment: 0,
    configSpec: undefined,
    hostSpecs: [],
    networkId: "",
    folderId: "",
    serviceAccountId: "",
    securityGroupIds: [],
  };
}

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest" as const,

  encode(message: RestoreClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    for (const v of message.additionalBackupIds) {
      writer.uint32(106).string(v!);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RestoreClusterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(40).int32(message.environment);
    }
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(66).string(message.networkId);
    }
    if (message.folderId !== "") {
      writer.uint32(74).string(message.folderId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(82).string(message.serviceAccountId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(90).string(v!);
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
        case 13:
          if (tag !== 106) {
            break;
          }

          message.additionalBackupIds.push(reader.string());
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

          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.securityGroupIds.push(reader.string());
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
      additionalBackupIds: globalThis.Array.isArray(object?.additionalBackupIds)
        ? object.additionalBackupIds.map((e: any) => globalThis.String(e))
        : [],
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      environment: isSet(object.environment) ? cluster_EnvironmentFromJSON(object.environment) : 0,
      configSpec: isSet(object.configSpec) ? ConfigSpec.fromJSON(object.configSpec) : undefined,
      hostSpecs: globalThis.Array.isArray(object?.hostSpecs)
        ? object.hostSpecs.map((e: any) => HostSpec.fromJSON(e))
        : [],
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RestoreClusterRequest): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.additionalBackupIds?.length) {
      obj.additionalBackupIds = message.additionalBackupIds;
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
      obj.configSpec = ConfigSpec.toJSON(message.configSpec);
    }
    if (message.hostSpecs?.length) {
      obj.hostSpecs = message.hostSpecs.map((e) => HostSpec.toJSON(e));
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreClusterRequest>): RestoreClusterRequest {
    return RestoreClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreClusterRequest>): RestoreClusterRequest {
    const message = createBaseRestoreClusterRequest();
    message.backupId = object.backupId ?? "";
    message.additionalBackupIds = object.additionalBackupIds?.map((e) => e) || [];
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
      ? ConfigSpec.fromPartial(object.configSpec)
      : undefined;
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.networkId = object.networkId ?? "";
    message.folderId = object.folderId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

function createBaseRestoreClusterRequest_LabelsEntry(): RestoreClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry", key: "", value: "" };
}

export const RestoreClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterMetadata", clusterId: "", backupId: "" };
}

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
    delayedUntil: undefined,
  };
}

export const RescheduleMaintenanceRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceRequest" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceMetadata",
    clusterId: "",
    delayedUntil: undefined,
  };
}

export const RescheduleMaintenanceMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceMetadata" as const,

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

function createBaseLogRecord(): LogRecord {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord", timestamp: undefined, message: {} };
}

export const LogRecord = {
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord" as const,

  encode(message: LogRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.message).forEach(([key, value]) => {
      LogRecord_MessageEntry.encode({
        $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry",
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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry", key: "", value: "" };
}

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: [],
    serviceType: 0,
    fromTime: undefined,
    toTime: undefined,
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterLogsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsRequest" as const,

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
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsRequest.$type, ListClusterLogsRequest);

function createBaseListClusterLogsResponse(): ListClusterLogsResponse {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsResponse", logs: [], nextPageToken: "" };
}

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.StreamLogRecord", record: undefined, nextRecordToken: "" };
}

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamLogRecord" as const,

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
    $type: "yandex.cloud.mdb.clickhouse.v1.StreamClusterLogsRequest",
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
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamClusterLogsRequest" as const,

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

function createBaseListClusterOperationsRequest(): ListClusterOperationsRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsResponse" as const,

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

function createBaseListClusterBackupsRequest(): ListClusterBackupsRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsResponse", backups: [], nextPageToken: "" };
}

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsResponse" as const,

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

function createBaseListClusterHostsRequest(): ListClusterHostsRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsResponse", hosts: [], nextPageToken: "" };
}

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsResponse" as const,

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

function createBaseAddClusterHostsRequest(): AddClusterHostsRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsRequest",
    clusterId: "",
    hostSpecs: [],
    copySchema: undefined,
  };
}

export const AddClusterHostsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsRequest" as const,

  encode(message: AddClusterHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.copySchema !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.copySchema! }, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterHostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddClusterHostsRequest();
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

          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.copySchema = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddClusterHostsRequest {
    return {
      $type: AddClusterHostsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostSpecs: globalThis.Array.isArray(object?.hostSpecs)
        ? object.hostSpecs.map((e: any) => HostSpec.fromJSON(e))
        : [],
      copySchema: isSet(object.copySchema) ? Boolean(object.copySchema) : undefined,
    };
  },

  toJSON(message: AddClusterHostsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostSpecs?.length) {
      obj.hostSpecs = message.hostSpecs.map((e) => HostSpec.toJSON(e));
    }
    if (message.copySchema !== undefined) {
      obj.copySchema = message.copySchema;
    }
    return obj;
  },

  create(base?: DeepPartial<AddClusterHostsRequest>): AddClusterHostsRequest {
    return AddClusterHostsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddClusterHostsRequest>): AddClusterHostsRequest {
    const message = createBaseAddClusterHostsRequest();
    message.clusterId = object.clusterId ?? "";
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.copySchema = object.copySchema ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AddClusterHostsRequest.$type, AddClusterHostsRequest);

function createBaseAddClusterHostsMetadata(): AddClusterHostsMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const AddClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsMetadata" as const,

  encode(message: AddClusterHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hostNames.push(reader.string());
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
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: AddClusterHostsMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<AddClusterHostsMetadata>): AddClusterHostsMetadata {
    return AddClusterHostsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddClusterHostsMetadata>): AddClusterHostsMetadata {
    const message = createBaseAddClusterHostsMetadata();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AddClusterHostsMetadata.$type, AddClusterHostsMetadata);

function createBaseUpdateHostSpec(): UpdateHostSpec {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateHostSpec",
    hostName: "",
    updateMask: undefined,
    assignPublicIp: undefined,
  };
}

export const UpdateHostSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateHostSpec" as const,

  encode(message: UpdateHostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostName !== "") {
      writer.uint32(10).string(message.hostName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.assignPublicIp !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.assignPublicIp! }, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateHostSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostName = reader.string();
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

          message.assignPublicIp = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateHostSpec {
    return {
      $type: UpdateHostSpec.$type,
      hostName: isSet(object.hostName) ? globalThis.String(object.hostName) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      assignPublicIp: isSet(object.assignPublicIp) ? Boolean(object.assignPublicIp) : undefined,
    };
  },

  toJSON(message: UpdateHostSpec): unknown {
    const obj: any = {};
    if (message.hostName !== "") {
      obj.hostName = message.hostName;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.assignPublicIp !== undefined) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateHostSpec>): UpdateHostSpec {
    return UpdateHostSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateHostSpec>): UpdateHostSpec {
    const message = createBaseUpdateHostSpec();
    message.hostName = object.hostName ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.assignPublicIp = object.assignPublicIp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateHostSpec.$type, UpdateHostSpec);

function createBaseUpdateClusterHostsRequest(): UpdateClusterHostsRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsRequest", clusterId: "", updateHostSpecs: [] };
}

export const UpdateClusterHostsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsRequest" as const,

  encode(message: UpdateClusterHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.updateHostSpecs) {
      UpdateHostSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterHostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterHostsRequest();
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

          message.updateHostSpecs.push(UpdateHostSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterHostsRequest {
    return {
      $type: UpdateClusterHostsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      updateHostSpecs: globalThis.Array.isArray(object?.updateHostSpecs)
        ? object.updateHostSpecs.map((e: any) => UpdateHostSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateClusterHostsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.updateHostSpecs?.length) {
      obj.updateHostSpecs = message.updateHostSpecs.map((e) => UpdateHostSpec.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClusterHostsRequest>): UpdateClusterHostsRequest {
    return UpdateClusterHostsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterHostsRequest>): UpdateClusterHostsRequest {
    const message = createBaseUpdateClusterHostsRequest();
    message.clusterId = object.clusterId ?? "";
    message.updateHostSpecs = object.updateHostSpecs?.map((e) => UpdateHostSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterHostsRequest.$type, UpdateClusterHostsRequest);

function createBaseUpdateClusterHostsMetadata(): UpdateClusterHostsMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const UpdateClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsMetadata" as const,

  encode(message: UpdateClusterHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterHostsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterHostsMetadata();
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

          message.hostNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterHostsMetadata {
    return {
      $type: UpdateClusterHostsMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: UpdateClusterHostsMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClusterHostsMetadata>): UpdateClusterHostsMetadata {
    return UpdateClusterHostsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterHostsMetadata>): UpdateClusterHostsMetadata {
    const message = createBaseUpdateClusterHostsMetadata();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterHostsMetadata.$type, UpdateClusterHostsMetadata);

function createBaseDeleteClusterHostsRequest(): DeleteClusterHostsRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsRequest", clusterId: "", hostNames: [] };
}

export const DeleteClusterHostsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsRequest" as const,

  encode(message: DeleteClusterHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterHostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterHostsRequest();
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

          message.hostNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterHostsRequest {
    return {
      $type: DeleteClusterHostsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: DeleteClusterHostsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteClusterHostsRequest>): DeleteClusterHostsRequest {
    return DeleteClusterHostsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterHostsRequest>): DeleteClusterHostsRequest {
    const message = createBaseDeleteClusterHostsRequest();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterHostsRequest.$type, DeleteClusterHostsRequest);

function createBaseDeleteClusterHostsMetadata(): DeleteClusterHostsMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const DeleteClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsMetadata" as const,

  encode(message: DeleteClusterHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterHostsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterHostsMetadata();
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

          message.hostNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterHostsMetadata {
    return {
      $type: DeleteClusterHostsMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: DeleteClusterHostsMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteClusterHostsMetadata>): DeleteClusterHostsMetadata {
    return DeleteClusterHostsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterHostsMetadata>): DeleteClusterHostsMetadata {
    const message = createBaseDeleteClusterHostsMetadata();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterHostsMetadata.$type, DeleteClusterHostsMetadata);

function createBaseGetClusterShardRequest(): GetClusterShardRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardRequest", clusterId: "", shardName: "" };
}

export const GetClusterShardRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardRequest" as const,

  encode(message: GetClusterShardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterShardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetClusterShardRequest();
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

          message.shardName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetClusterShardRequest {
    return {
      $type: GetClusterShardRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
    };
  },

  toJSON(message: GetClusterShardRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    return obj;
  },

  create(base?: DeepPartial<GetClusterShardRequest>): GetClusterShardRequest {
    return GetClusterShardRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetClusterShardRequest>): GetClusterShardRequest {
    const message = createBaseGetClusterShardRequest();
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetClusterShardRequest.$type, GetClusterShardRequest);

function createBaseListClusterShardsRequest(): ListClusterShardsRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterShardsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsRequest" as const,

  encode(message: ListClusterShardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterShardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterShardsRequest();
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

  fromJSON(object: any): ListClusterShardsRequest {
    return {
      $type: ListClusterShardsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListClusterShardsRequest): unknown {
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

  create(base?: DeepPartial<ListClusterShardsRequest>): ListClusterShardsRequest {
    return ListClusterShardsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterShardsRequest>): ListClusterShardsRequest {
    const message = createBaseListClusterShardsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterShardsRequest.$type, ListClusterShardsRequest);

function createBaseListClusterShardsResponse(): ListClusterShardsResponse {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsResponse", shards: [], nextPageToken: "" };
}

export const ListClusterShardsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsResponse" as const,

  encode(message: ListClusterShardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.shards) {
      Shard.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterShardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterShardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shards.push(Shard.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterShardsResponse {
    return {
      $type: ListClusterShardsResponse.$type,
      shards: globalThis.Array.isArray(object?.shards) ? object.shards.map((e: any) => Shard.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClusterShardsResponse): unknown {
    const obj: any = {};
    if (message.shards?.length) {
      obj.shards = message.shards.map((e) => Shard.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListClusterShardsResponse>): ListClusterShardsResponse {
    return ListClusterShardsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterShardsResponse>): ListClusterShardsResponse {
    const message = createBaseListClusterShardsResponse();
    message.shards = object.shards?.map((e) => Shard.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterShardsResponse.$type, ListClusterShardsResponse);

function createBaseAddClusterShardRequest(): AddClusterShardRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardRequest",
    clusterId: "",
    shardName: "",
    configSpec: undefined,
    hostSpecs: [],
    copySchema: undefined,
  };
}

export const AddClusterShardRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardRequest" as const,

  encode(message: AddClusterShardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    if (message.configSpec !== undefined) {
      ShardConfigSpec.encode(message.configSpec, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.copySchema !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.copySchema! }, writer.uint32(42).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterShardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddClusterShardRequest();
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

          message.shardName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.configSpec = ShardConfigSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.copySchema = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddClusterShardRequest {
    return {
      $type: AddClusterShardRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
      configSpec: isSet(object.configSpec) ? ShardConfigSpec.fromJSON(object.configSpec) : undefined,
      hostSpecs: globalThis.Array.isArray(object?.hostSpecs)
        ? object.hostSpecs.map((e: any) => HostSpec.fromJSON(e))
        : [],
      copySchema: isSet(object.copySchema) ? Boolean(object.copySchema) : undefined,
    };
  },

  toJSON(message: AddClusterShardRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    if (message.configSpec !== undefined) {
      obj.configSpec = ShardConfigSpec.toJSON(message.configSpec);
    }
    if (message.hostSpecs?.length) {
      obj.hostSpecs = message.hostSpecs.map((e) => HostSpec.toJSON(e));
    }
    if (message.copySchema !== undefined) {
      obj.copySchema = message.copySchema;
    }
    return obj;
  },

  create(base?: DeepPartial<AddClusterShardRequest>): AddClusterShardRequest {
    return AddClusterShardRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddClusterShardRequest>): AddClusterShardRequest {
    const message = createBaseAddClusterShardRequest();
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? ShardConfigSpec.fromPartial(object.configSpec)
      : undefined;
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.copySchema = object.copySchema ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AddClusterShardRequest.$type, AddClusterShardRequest);

function createBaseAddClusterShardMetadata(): AddClusterShardMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardMetadata", clusterId: "", shardName: "" };
}

export const AddClusterShardMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardMetadata" as const,

  encode(message: AddClusterShardMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterShardMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddClusterShardMetadata();
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

          message.shardName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddClusterShardMetadata {
    return {
      $type: AddClusterShardMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
    };
  },

  toJSON(message: AddClusterShardMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    return obj;
  },

  create(base?: DeepPartial<AddClusterShardMetadata>): AddClusterShardMetadata {
    return AddClusterShardMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddClusterShardMetadata>): AddClusterShardMetadata {
    const message = createBaseAddClusterShardMetadata();
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddClusterShardMetadata.$type, AddClusterShardMetadata);

function createBaseUpdateClusterShardRequest(): UpdateClusterShardRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardRequest",
    clusterId: "",
    shardName: "",
    updateMask: undefined,
    configSpec: undefined,
  };
}

export const UpdateClusterShardRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardRequest" as const,

  encode(message: UpdateClusterShardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.configSpec !== undefined) {
      ShardConfigSpec.encode(message.configSpec, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterShardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterShardRequest();
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

          message.shardName = reader.string();
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

          message.configSpec = ShardConfigSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterShardRequest {
    return {
      $type: UpdateClusterShardRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      configSpec: isSet(object.configSpec) ? ShardConfigSpec.fromJSON(object.configSpec) : undefined,
    };
  },

  toJSON(message: UpdateClusterShardRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.configSpec !== undefined) {
      obj.configSpec = ShardConfigSpec.toJSON(message.configSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClusterShardRequest>): UpdateClusterShardRequest {
    return UpdateClusterShardRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterShardRequest>): UpdateClusterShardRequest {
    const message = createBaseUpdateClusterShardRequest();
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? ShardConfigSpec.fromPartial(object.configSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterShardRequest.$type, UpdateClusterShardRequest);

function createBaseUpdateClusterShardMetadata(): UpdateClusterShardMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardMetadata", clusterId: "", shardName: "" };
}

export const UpdateClusterShardMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardMetadata" as const,

  encode(message: UpdateClusterShardMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterShardMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterShardMetadata();
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

          message.shardName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterShardMetadata {
    return {
      $type: UpdateClusterShardMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
    };
  },

  toJSON(message: UpdateClusterShardMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClusterShardMetadata>): UpdateClusterShardMetadata {
    return UpdateClusterShardMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterShardMetadata>): UpdateClusterShardMetadata {
    const message = createBaseUpdateClusterShardMetadata();
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterShardMetadata.$type, UpdateClusterShardMetadata);

function createBaseDeleteClusterShardRequest(): DeleteClusterShardRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardRequest", clusterId: "", shardName: "" };
}

export const DeleteClusterShardRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardRequest" as const,

  encode(message: DeleteClusterShardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterShardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterShardRequest();
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

          message.shardName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterShardRequest {
    return {
      $type: DeleteClusterShardRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
    };
  },

  toJSON(message: DeleteClusterShardRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteClusterShardRequest>): DeleteClusterShardRequest {
    return DeleteClusterShardRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterShardRequest>): DeleteClusterShardRequest {
    const message = createBaseDeleteClusterShardRequest();
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterShardRequest.$type, DeleteClusterShardRequest);

function createBaseDeleteClusterShardMetadata(): DeleteClusterShardMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardMetadata", clusterId: "", shardName: "" };
}

export const DeleteClusterShardMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardMetadata" as const,

  encode(message: DeleteClusterShardMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterShardMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterShardMetadata();
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

          message.shardName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterShardMetadata {
    return {
      $type: DeleteClusterShardMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
    };
  },

  toJSON(message: DeleteClusterShardMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteClusterShardMetadata>): DeleteClusterShardMetadata {
    return DeleteClusterShardMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterShardMetadata>): DeleteClusterShardMetadata {
    const message = createBaseDeleteClusterShardMetadata();
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterShardMetadata.$type, DeleteClusterShardMetadata);

function createBaseGetClusterShardGroupRequest(): GetClusterShardGroupRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardGroupRequest", clusterId: "", shardGroupName: "" };
}

export const GetClusterShardGroupRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardGroupRequest" as const,

  encode(message: GetClusterShardGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterShardGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetClusterShardGroupRequest();
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

          message.shardGroupName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetClusterShardGroupRequest {
    return {
      $type: GetClusterShardGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardGroupName: isSet(object.shardGroupName) ? globalThis.String(object.shardGroupName) : "",
    };
  },

  toJSON(message: GetClusterShardGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardGroupName !== "") {
      obj.shardGroupName = message.shardGroupName;
    }
    return obj;
  },

  create(base?: DeepPartial<GetClusterShardGroupRequest>): GetClusterShardGroupRequest {
    return GetClusterShardGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetClusterShardGroupRequest>): GetClusterShardGroupRequest {
    const message = createBaseGetClusterShardGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetClusterShardGroupRequest.$type, GetClusterShardGroupRequest);

function createBaseListClusterShardGroupsRequest(): ListClusterShardGroupsRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterShardGroupsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsRequest" as const,

  encode(message: ListClusterShardGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterShardGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterShardGroupsRequest();
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

  fromJSON(object: any): ListClusterShardGroupsRequest {
    return {
      $type: ListClusterShardGroupsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListClusterShardGroupsRequest): unknown {
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

  create(base?: DeepPartial<ListClusterShardGroupsRequest>): ListClusterShardGroupsRequest {
    return ListClusterShardGroupsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterShardGroupsRequest>): ListClusterShardGroupsRequest {
    const message = createBaseListClusterShardGroupsRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterShardGroupsRequest.$type, ListClusterShardGroupsRequest);

function createBaseListClusterShardGroupsResponse(): ListClusterShardGroupsResponse {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsResponse", shardGroups: [], nextPageToken: "" };
}

export const ListClusterShardGroupsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsResponse" as const,

  encode(message: ListClusterShardGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.shardGroups) {
      ShardGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterShardGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterShardGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shardGroups.push(ShardGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterShardGroupsResponse {
    return {
      $type: ListClusterShardGroupsResponse.$type,
      shardGroups: globalThis.Array.isArray(object?.shardGroups)
        ? object.shardGroups.map((e: any) => ShardGroup.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClusterShardGroupsResponse): unknown {
    const obj: any = {};
    if (message.shardGroups?.length) {
      obj.shardGroups = message.shardGroups.map((e) => ShardGroup.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListClusterShardGroupsResponse>): ListClusterShardGroupsResponse {
    return ListClusterShardGroupsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterShardGroupsResponse>): ListClusterShardGroupsResponse {
    const message = createBaseListClusterShardGroupsResponse();
    message.shardGroups = object.shardGroups?.map((e) => ShardGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterShardGroupsResponse.$type, ListClusterShardGroupsResponse);

function createBaseCreateClusterShardGroupRequest(): CreateClusterShardGroupRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupRequest",
    clusterId: "",
    shardGroupName: "",
    description: "",
    shardNames: [],
  };
}

export const CreateClusterShardGroupRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupRequest" as const,

  encode(message: CreateClusterShardGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.shardNames) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterShardGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClusterShardGroupRequest();
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

          message.shardGroupName = reader.string();
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

          message.shardNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateClusterShardGroupRequest {
    return {
      $type: CreateClusterShardGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardGroupName: isSet(object.shardGroupName) ? globalThis.String(object.shardGroupName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      shardNames: globalThis.Array.isArray(object?.shardNames)
        ? object.shardNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: CreateClusterShardGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardGroupName !== "") {
      obj.shardGroupName = message.shardGroupName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.shardNames?.length) {
      obj.shardNames = message.shardNames;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateClusterShardGroupRequest>): CreateClusterShardGroupRequest {
    return CreateClusterShardGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateClusterShardGroupRequest>): CreateClusterShardGroupRequest {
    const message = createBaseCreateClusterShardGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    message.description = object.description ?? "";
    message.shardNames = object.shardNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateClusterShardGroupRequest.$type, CreateClusterShardGroupRequest);

function createBaseCreateClusterShardGroupMetadata(): CreateClusterShardGroupMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupMetadata", clusterId: "", shardGroupName: "" };
}

export const CreateClusterShardGroupMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupMetadata" as const,

  encode(message: CreateClusterShardGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterShardGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClusterShardGroupMetadata();
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

          message.shardGroupName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateClusterShardGroupMetadata {
    return {
      $type: CreateClusterShardGroupMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardGroupName: isSet(object.shardGroupName) ? globalThis.String(object.shardGroupName) : "",
    };
  },

  toJSON(message: CreateClusterShardGroupMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardGroupName !== "") {
      obj.shardGroupName = message.shardGroupName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateClusterShardGroupMetadata>): CreateClusterShardGroupMetadata {
    return CreateClusterShardGroupMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateClusterShardGroupMetadata>): CreateClusterShardGroupMetadata {
    const message = createBaseCreateClusterShardGroupMetadata();
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateClusterShardGroupMetadata.$type, CreateClusterShardGroupMetadata);

function createBaseUpdateClusterShardGroupRequest(): UpdateClusterShardGroupRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupRequest",
    clusterId: "",
    shardGroupName: "",
    updateMask: undefined,
    description: "",
    shardNames: [],
  };
}

export const UpdateClusterShardGroupRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupRequest" as const,

  encode(message: UpdateClusterShardGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.shardNames) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterShardGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterShardGroupRequest();
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

          message.shardGroupName = reader.string();
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

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.shardNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterShardGroupRequest {
    return {
      $type: UpdateClusterShardGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardGroupName: isSet(object.shardGroupName) ? globalThis.String(object.shardGroupName) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      shardNames: globalThis.Array.isArray(object?.shardNames)
        ? object.shardNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: UpdateClusterShardGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardGroupName !== "") {
      obj.shardGroupName = message.shardGroupName;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.shardNames?.length) {
      obj.shardNames = message.shardNames;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClusterShardGroupRequest>): UpdateClusterShardGroupRequest {
    return UpdateClusterShardGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterShardGroupRequest>): UpdateClusterShardGroupRequest {
    const message = createBaseUpdateClusterShardGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.description = object.description ?? "";
    message.shardNames = object.shardNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterShardGroupRequest.$type, UpdateClusterShardGroupRequest);

function createBaseUpdateClusterShardGroupMetadata(): UpdateClusterShardGroupMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupMetadata", clusterId: "", shardGroupName: "" };
}

export const UpdateClusterShardGroupMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupMetadata" as const,

  encode(message: UpdateClusterShardGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterShardGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterShardGroupMetadata();
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

          message.shardGroupName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterShardGroupMetadata {
    return {
      $type: UpdateClusterShardGroupMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardGroupName: isSet(object.shardGroupName) ? globalThis.String(object.shardGroupName) : "",
    };
  },

  toJSON(message: UpdateClusterShardGroupMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardGroupName !== "") {
      obj.shardGroupName = message.shardGroupName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClusterShardGroupMetadata>): UpdateClusterShardGroupMetadata {
    return UpdateClusterShardGroupMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterShardGroupMetadata>): UpdateClusterShardGroupMetadata {
    const message = createBaseUpdateClusterShardGroupMetadata();
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterShardGroupMetadata.$type, UpdateClusterShardGroupMetadata);

function createBaseDeleteClusterShardGroupRequest(): DeleteClusterShardGroupRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupRequest", clusterId: "", shardGroupName: "" };
}

export const DeleteClusterShardGroupRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupRequest" as const,

  encode(message: DeleteClusterShardGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterShardGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterShardGroupRequest();
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

          message.shardGroupName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterShardGroupRequest {
    return {
      $type: DeleteClusterShardGroupRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardGroupName: isSet(object.shardGroupName) ? globalThis.String(object.shardGroupName) : "",
    };
  },

  toJSON(message: DeleteClusterShardGroupRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardGroupName !== "") {
      obj.shardGroupName = message.shardGroupName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteClusterShardGroupRequest>): DeleteClusterShardGroupRequest {
    return DeleteClusterShardGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterShardGroupRequest>): DeleteClusterShardGroupRequest {
    const message = createBaseDeleteClusterShardGroupRequest();
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterShardGroupRequest.$type, DeleteClusterShardGroupRequest);

function createBaseDeleteClusterShardGroupMetadata(): DeleteClusterShardGroupMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupMetadata", clusterId: "", shardGroupName: "" };
}

export const DeleteClusterShardGroupMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupMetadata" as const,

  encode(message: DeleteClusterShardGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterShardGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterShardGroupMetadata();
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

          message.shardGroupName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterShardGroupMetadata {
    return {
      $type: DeleteClusterShardGroupMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardGroupName: isSet(object.shardGroupName) ? globalThis.String(object.shardGroupName) : "",
    };
  },

  toJSON(message: DeleteClusterShardGroupMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.shardGroupName !== "") {
      obj.shardGroupName = message.shardGroupName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteClusterShardGroupMetadata>): DeleteClusterShardGroupMetadata {
    return DeleteClusterShardGroupMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterShardGroupMetadata>): DeleteClusterShardGroupMetadata {
    const message = createBaseDeleteClusterShardGroupMetadata();
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterShardGroupMetadata.$type, DeleteClusterShardGroupMetadata);

function createBaseListClusterExternalDictionariesRequest(): ListClusterExternalDictionariesRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterExternalDictionariesRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesRequest" as const,

  encode(message: ListClusterExternalDictionariesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterExternalDictionariesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterExternalDictionariesRequest();
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

  fromJSON(object: any): ListClusterExternalDictionariesRequest {
    return {
      $type: ListClusterExternalDictionariesRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListClusterExternalDictionariesRequest): unknown {
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

  create(base?: DeepPartial<ListClusterExternalDictionariesRequest>): ListClusterExternalDictionariesRequest {
    return ListClusterExternalDictionariesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterExternalDictionariesRequest>): ListClusterExternalDictionariesRequest {
    const message = createBaseListClusterExternalDictionariesRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterExternalDictionariesRequest.$type, ListClusterExternalDictionariesRequest);

function createBaseListClusterExternalDictionariesResponse(): ListClusterExternalDictionariesResponse {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesResponse",
    externalDictionaries: [],
    nextPageToken: "",
  };
}

export const ListClusterExternalDictionariesResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesResponse" as const,

  encode(message: ListClusterExternalDictionariesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.externalDictionaries) {
      ClickhouseConfig_ExternalDictionary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterExternalDictionariesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListClusterExternalDictionariesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalDictionaries.push(ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterExternalDictionariesResponse {
    return {
      $type: ListClusterExternalDictionariesResponse.$type,
      externalDictionaries: globalThis.Array.isArray(object?.externalDictionaries)
        ? object.externalDictionaries.map((e: any) => ClickhouseConfig_ExternalDictionary.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListClusterExternalDictionariesResponse): unknown {
    const obj: any = {};
    if (message.externalDictionaries?.length) {
      obj.externalDictionaries = message.externalDictionaries.map((e) => ClickhouseConfig_ExternalDictionary.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListClusterExternalDictionariesResponse>): ListClusterExternalDictionariesResponse {
    return ListClusterExternalDictionariesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListClusterExternalDictionariesResponse>): ListClusterExternalDictionariesResponse {
    const message = createBaseListClusterExternalDictionariesResponse();
    message.externalDictionaries =
      object.externalDictionaries?.map((e) => ClickhouseConfig_ExternalDictionary.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterExternalDictionariesResponse.$type, ListClusterExternalDictionariesResponse);

function createBaseCreateClusterExternalDictionaryRequest(): CreateClusterExternalDictionaryRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryRequest",
    clusterId: "",
    externalDictionary: undefined,
  };
}

export const CreateClusterExternalDictionaryRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryRequest" as const,

  encode(message: CreateClusterExternalDictionaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.externalDictionary !== undefined) {
      ClickhouseConfig_ExternalDictionary.encode(message.externalDictionary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterExternalDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClusterExternalDictionaryRequest();
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

          message.externalDictionary = ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateClusterExternalDictionaryRequest {
    return {
      $type: CreateClusterExternalDictionaryRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      externalDictionary: isSet(object.externalDictionary)
        ? ClickhouseConfig_ExternalDictionary.fromJSON(object.externalDictionary)
        : undefined,
    };
  },

  toJSON(message: CreateClusterExternalDictionaryRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.externalDictionary !== undefined) {
      obj.externalDictionary = ClickhouseConfig_ExternalDictionary.toJSON(message.externalDictionary);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateClusterExternalDictionaryRequest>): CreateClusterExternalDictionaryRequest {
    return CreateClusterExternalDictionaryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateClusterExternalDictionaryRequest>): CreateClusterExternalDictionaryRequest {
    const message = createBaseCreateClusterExternalDictionaryRequest();
    message.clusterId = object.clusterId ?? "";
    message.externalDictionary = (object.externalDictionary !== undefined && object.externalDictionary !== null)
      ? ClickhouseConfig_ExternalDictionary.fromPartial(object.externalDictionary)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateClusterExternalDictionaryRequest.$type, CreateClusterExternalDictionaryRequest);

function createBaseCreateClusterExternalDictionaryMetadata(): CreateClusterExternalDictionaryMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryMetadata", clusterId: "" };
}

export const CreateClusterExternalDictionaryMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryMetadata" as const,

  encode(message: CreateClusterExternalDictionaryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterExternalDictionaryMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClusterExternalDictionaryMetadata();
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

  fromJSON(object: any): CreateClusterExternalDictionaryMetadata {
    return {
      $type: CreateClusterExternalDictionaryMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: CreateClusterExternalDictionaryMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateClusterExternalDictionaryMetadata>): CreateClusterExternalDictionaryMetadata {
    return CreateClusterExternalDictionaryMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateClusterExternalDictionaryMetadata>): CreateClusterExternalDictionaryMetadata {
    const message = createBaseCreateClusterExternalDictionaryMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateClusterExternalDictionaryMetadata.$type, CreateClusterExternalDictionaryMetadata);

function createBaseUpdateClusterExternalDictionaryRequest(): UpdateClusterExternalDictionaryRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryRequest",
    clusterId: "",
    externalDictionary: undefined,
    updateMask: undefined,
  };
}

export const UpdateClusterExternalDictionaryRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryRequest" as const,

  encode(message: UpdateClusterExternalDictionaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.externalDictionary !== undefined) {
      ClickhouseConfig_ExternalDictionary.encode(message.externalDictionary, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterExternalDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterExternalDictionaryRequest();
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

          message.externalDictionary = ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterExternalDictionaryRequest {
    return {
      $type: UpdateClusterExternalDictionaryRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      externalDictionary: isSet(object.externalDictionary)
        ? ClickhouseConfig_ExternalDictionary.fromJSON(object.externalDictionary)
        : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateClusterExternalDictionaryRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.externalDictionary !== undefined) {
      obj.externalDictionary = ClickhouseConfig_ExternalDictionary.toJSON(message.externalDictionary);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClusterExternalDictionaryRequest>): UpdateClusterExternalDictionaryRequest {
    return UpdateClusterExternalDictionaryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterExternalDictionaryRequest>): UpdateClusterExternalDictionaryRequest {
    const message = createBaseUpdateClusterExternalDictionaryRequest();
    message.clusterId = object.clusterId ?? "";
    message.externalDictionary = (object.externalDictionary !== undefined && object.externalDictionary !== null)
      ? ClickhouseConfig_ExternalDictionary.fromPartial(object.externalDictionary)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterExternalDictionaryRequest.$type, UpdateClusterExternalDictionaryRequest);

function createBaseUpdateClusterExternalDictionaryMetadata(): UpdateClusterExternalDictionaryMetadata {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryMetadata",
    clusterId: "",
    externalDictionaryName: "",
  };
}

export const UpdateClusterExternalDictionaryMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryMetadata" as const,

  encode(message: UpdateClusterExternalDictionaryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.externalDictionaryName !== "") {
      writer.uint32(18).string(message.externalDictionaryName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterExternalDictionaryMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClusterExternalDictionaryMetadata();
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

          message.externalDictionaryName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterExternalDictionaryMetadata {
    return {
      $type: UpdateClusterExternalDictionaryMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      externalDictionaryName: isSet(object.externalDictionaryName)
        ? globalThis.String(object.externalDictionaryName)
        : "",
    };
  },

  toJSON(message: UpdateClusterExternalDictionaryMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.externalDictionaryName !== "") {
      obj.externalDictionaryName = message.externalDictionaryName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClusterExternalDictionaryMetadata>): UpdateClusterExternalDictionaryMetadata {
    return UpdateClusterExternalDictionaryMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClusterExternalDictionaryMetadata>): UpdateClusterExternalDictionaryMetadata {
    const message = createBaseUpdateClusterExternalDictionaryMetadata();
    message.clusterId = object.clusterId ?? "";
    message.externalDictionaryName = object.externalDictionaryName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterExternalDictionaryMetadata.$type, UpdateClusterExternalDictionaryMetadata);

function createBaseDeleteClusterExternalDictionaryRequest(): DeleteClusterExternalDictionaryRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryRequest",
    clusterId: "",
    externalDictionaryName: "",
  };
}

export const DeleteClusterExternalDictionaryRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryRequest" as const,

  encode(message: DeleteClusterExternalDictionaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.externalDictionaryName !== "") {
      writer.uint32(18).string(message.externalDictionaryName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterExternalDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterExternalDictionaryRequest();
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

          message.externalDictionaryName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterExternalDictionaryRequest {
    return {
      $type: DeleteClusterExternalDictionaryRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      externalDictionaryName: isSet(object.externalDictionaryName)
        ? globalThis.String(object.externalDictionaryName)
        : "",
    };
  },

  toJSON(message: DeleteClusterExternalDictionaryRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.externalDictionaryName !== "") {
      obj.externalDictionaryName = message.externalDictionaryName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteClusterExternalDictionaryRequest>): DeleteClusterExternalDictionaryRequest {
    return DeleteClusterExternalDictionaryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterExternalDictionaryRequest>): DeleteClusterExternalDictionaryRequest {
    const message = createBaseDeleteClusterExternalDictionaryRequest();
    message.clusterId = object.clusterId ?? "";
    message.externalDictionaryName = object.externalDictionaryName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterExternalDictionaryRequest.$type, DeleteClusterExternalDictionaryRequest);

function createBaseDeleteClusterExternalDictionaryMetadata(): DeleteClusterExternalDictionaryMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryMetadata", clusterId: "" };
}

export const DeleteClusterExternalDictionaryMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryMetadata" as const,

  encode(message: DeleteClusterExternalDictionaryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterExternalDictionaryMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteClusterExternalDictionaryMetadata();
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

  fromJSON(object: any): DeleteClusterExternalDictionaryMetadata {
    return {
      $type: DeleteClusterExternalDictionaryMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: DeleteClusterExternalDictionaryMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteClusterExternalDictionaryMetadata>): DeleteClusterExternalDictionaryMetadata {
    return DeleteClusterExternalDictionaryMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteClusterExternalDictionaryMetadata>): DeleteClusterExternalDictionaryMetadata {
    const message = createBaseDeleteClusterExternalDictionaryMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterExternalDictionaryMetadata.$type, DeleteClusterExternalDictionaryMetadata);

function createBaseHostSpec(): HostSpec {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.HostSpec",
    zoneId: "",
    type: 0,
    subnetId: "",
    assignPublicIp: false,
    shardName: "",
  };
}

export const HostSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.HostSpec" as const,

  encode(message: HostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.subnetId !== "") {
      writer.uint32(26).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(32).bool(message.assignPublicIp);
    }
    if (message.shardName !== "") {
      writer.uint32(42).string(message.shardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostSpec();
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
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.shardName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HostSpec {
    return {
      $type: HostSpec.$type,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      type: isSet(object.type) ? host_TypeFromJSON(object.type) : 0,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
    };
  },

  toJSON(message: HostSpec): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.type !== 0) {
      obj.type = host_TypeToJSON(message.type);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    return obj;
  },

  create(base?: DeepPartial<HostSpec>): HostSpec {
    return HostSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HostSpec>): HostSpec {
    const message = createBaseHostSpec();
    message.zoneId = object.zoneId ?? "";
    message.type = object.type ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(HostSpec.$type, HostSpec);

function createBaseConfigSpec(): ConfigSpec {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec",
    version: "",
    clickhouse: undefined,
    zookeeper: undefined,
    backupWindowStart: undefined,
    access: undefined,
    cloudStorage: undefined,
    sqlDatabaseManagement: undefined,
    sqlUserManagement: undefined,
    adminPassword: "",
    embeddedKeeper: undefined,
  };
}

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec" as const,

  encode(message: ConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.clickhouse !== undefined) {
      ConfigSpec_Clickhouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
    }
    if (message.zookeeper !== undefined) {
      ConfigSpec_Zookeeper.encode(message.zookeeper, writer.uint32(18).fork()).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(34).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(42).fork()).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(message.cloudStorage, writer.uint32(50).fork()).ldelim();
    }
    if (message.sqlDatabaseManagement !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.sqlDatabaseManagement! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.sqlUserManagement !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.sqlUserManagement! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.adminPassword !== "") {
      writer.uint32(74).string(message.adminPassword);
    }
    if (message.embeddedKeeper !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.embeddedKeeper! }, writer.uint32(82).fork())
        .ldelim();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clickhouse = ConfigSpec_Clickhouse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.zookeeper = ConfigSpec_Zookeeper.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sqlDatabaseManagement = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sqlUserManagement = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.adminPassword = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.embeddedKeeper = BoolValue.decode(reader, reader.uint32()).value;
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
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      clickhouse: isSet(object.clickhouse) ? ConfigSpec_Clickhouse.fromJSON(object.clickhouse) : undefined,
      zookeeper: isSet(object.zookeeper) ? ConfigSpec_Zookeeper.fromJSON(object.zookeeper) : undefined,
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
      cloudStorage: isSet(object.cloudStorage) ? CloudStorage.fromJSON(object.cloudStorage) : undefined,
      sqlDatabaseManagement: isSet(object.sqlDatabaseManagement) ? Boolean(object.sqlDatabaseManagement) : undefined,
      sqlUserManagement: isSet(object.sqlUserManagement) ? Boolean(object.sqlUserManagement) : undefined,
      adminPassword: isSet(object.adminPassword) ? globalThis.String(object.adminPassword) : "",
      embeddedKeeper: isSet(object.embeddedKeeper) ? Boolean(object.embeddedKeeper) : undefined,
    };
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.clickhouse !== undefined) {
      obj.clickhouse = ConfigSpec_Clickhouse.toJSON(message.clickhouse);
    }
    if (message.zookeeper !== undefined) {
      obj.zookeeper = ConfigSpec_Zookeeper.toJSON(message.zookeeper);
    }
    if (message.backupWindowStart !== undefined) {
      obj.backupWindowStart = TimeOfDay.toJSON(message.backupWindowStart);
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    if (message.cloudStorage !== undefined) {
      obj.cloudStorage = CloudStorage.toJSON(message.cloudStorage);
    }
    if (message.sqlDatabaseManagement !== undefined) {
      obj.sqlDatabaseManagement = message.sqlDatabaseManagement;
    }
    if (message.sqlUserManagement !== undefined) {
      obj.sqlUserManagement = message.sqlUserManagement;
    }
    if (message.adminPassword !== "") {
      obj.adminPassword = message.adminPassword;
    }
    if (message.embeddedKeeper !== undefined) {
      obj.embeddedKeeper = message.embeddedKeeper;
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec>): ConfigSpec {
    return ConfigSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec {
    const message = createBaseConfigSpec();
    message.version = object.version ?? "";
    message.clickhouse = (object.clickhouse !== undefined && object.clickhouse !== null)
      ? ConfigSpec_Clickhouse.fromPartial(object.clickhouse)
      : undefined;
    message.zookeeper = (object.zookeeper !== undefined && object.zookeeper !== null)
      ? ConfigSpec_Zookeeper.fromPartial(object.zookeeper)
      : undefined;
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    message.cloudStorage = (object.cloudStorage !== undefined && object.cloudStorage !== null)
      ? CloudStorage.fromPartial(object.cloudStorage)
      : undefined;
    message.sqlDatabaseManagement = object.sqlDatabaseManagement ?? undefined;
    message.sqlUserManagement = object.sqlUserManagement ?? undefined;
    message.adminPassword = object.adminPassword ?? "";
    message.embeddedKeeper = object.embeddedKeeper ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

function createBaseConfigSpec_Clickhouse(): ConfigSpec_Clickhouse {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Clickhouse", config: undefined, resources: undefined };
}

export const ConfigSpec_Clickhouse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Clickhouse" as const,

  encode(message: ConfigSpec_Clickhouse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      ClickhouseConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec_Clickhouse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigSpec_Clickhouse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = ClickhouseConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): ConfigSpec_Clickhouse {
    return {
      $type: ConfigSpec_Clickhouse.$type,
      config: isSet(object.config) ? ClickhouseConfig.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: ConfigSpec_Clickhouse): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = ClickhouseConfig.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec_Clickhouse>): ConfigSpec_Clickhouse {
    return ConfigSpec_Clickhouse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec_Clickhouse>): ConfigSpec_Clickhouse {
    const message = createBaseConfigSpec_Clickhouse();
    message.config = (object.config !== undefined && object.config !== null)
      ? ClickhouseConfig.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec_Clickhouse.$type, ConfigSpec_Clickhouse);

function createBaseConfigSpec_Zookeeper(): ConfigSpec_Zookeeper {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Zookeeper", resources: undefined };
}

export const ConfigSpec_Zookeeper = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Zookeeper" as const,

  encode(message: ConfigSpec_Zookeeper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec_Zookeeper {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigSpec_Zookeeper();
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

  fromJSON(object: any): ConfigSpec_Zookeeper {
    return {
      $type: ConfigSpec_Zookeeper.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: ConfigSpec_Zookeeper): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec_Zookeeper>): ConfigSpec_Zookeeper {
    return ConfigSpec_Zookeeper.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec_Zookeeper>): ConfigSpec_Zookeeper {
    const message = createBaseConfigSpec_Zookeeper();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec_Zookeeper.$type, ConfigSpec_Zookeeper);

function createBaseShardConfigSpec(): ShardConfigSpec {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec", clickhouse: undefined };
}

export const ShardConfigSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec" as const,

  encode(message: ShardConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clickhouse !== undefined) {
      ShardConfigSpec_Clickhouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShardConfigSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShardConfigSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clickhouse = ShardConfigSpec_Clickhouse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShardConfigSpec {
    return {
      $type: ShardConfigSpec.$type,
      clickhouse: isSet(object.clickhouse) ? ShardConfigSpec_Clickhouse.fromJSON(object.clickhouse) : undefined,
    };
  },

  toJSON(message: ShardConfigSpec): unknown {
    const obj: any = {};
    if (message.clickhouse !== undefined) {
      obj.clickhouse = ShardConfigSpec_Clickhouse.toJSON(message.clickhouse);
    }
    return obj;
  },

  create(base?: DeepPartial<ShardConfigSpec>): ShardConfigSpec {
    return ShardConfigSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ShardConfigSpec>): ShardConfigSpec {
    const message = createBaseShardConfigSpec();
    message.clickhouse = (object.clickhouse !== undefined && object.clickhouse !== null)
      ? ShardConfigSpec_Clickhouse.fromPartial(object.clickhouse)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ShardConfigSpec.$type, ShardConfigSpec);

function createBaseShardConfigSpec_Clickhouse(): ShardConfigSpec_Clickhouse {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec.Clickhouse",
    config: undefined,
    resources: undefined,
    weight: undefined,
  };
}

export const ShardConfigSpec_Clickhouse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec.Clickhouse" as const,

  encode(message: ShardConfigSpec_Clickhouse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      ClickhouseConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.weight !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.weight! }, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShardConfigSpec_Clickhouse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShardConfigSpec_Clickhouse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = ClickhouseConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.weight = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShardConfigSpec_Clickhouse {
    return {
      $type: ShardConfigSpec_Clickhouse.$type,
      config: isSet(object.config) ? ClickhouseConfig.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      weight: isSet(object.weight) ? Number(object.weight) : undefined,
    };
  },

  toJSON(message: ShardConfigSpec_Clickhouse): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = ClickhouseConfig.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.weight !== undefined) {
      obj.weight = message.weight;
    }
    return obj;
  },

  create(base?: DeepPartial<ShardConfigSpec_Clickhouse>): ShardConfigSpec_Clickhouse {
    return ShardConfigSpec_Clickhouse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ShardConfigSpec_Clickhouse>): ShardConfigSpec_Clickhouse {
    const message = createBaseShardConfigSpec_Clickhouse();
    message.config = (object.config !== undefined && object.config !== null)
      ? ClickhouseConfig.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.weight = object.weight ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ShardConfigSpec_Clickhouse.$type, ShardConfigSpec_Clickhouse);

/** A set of methods for managing ClickHouse clusters. */
export type ClusterServiceService = typeof ClusterServiceService;
export const ClusterServiceService = {
  /**
   * Returns the specified ClickHouse cluster.
   *
   * To get the list of available ClickHouse clusters, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) => Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /**
   * Retrieves a list of ClickHouse clusters that belong
   * to the specified folder.
   */
  list: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) => Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) => Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a ClickHouse cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) => Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified ClickHouse cluster. */
  update: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) => Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified ClickHouse cluster. */
  delete: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) => Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified ClickHouse cluster. */
  start: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) => Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified ClickHouse cluster. */
  stop: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) => Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Moves a ClickHouse cluster to the specified folder. */
  move: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveClusterRequest) => Buffer.from(MoveClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
  addZookeeper: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddZookeeper",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterZookeeperRequest) =>
      Buffer.from(AddClusterZookeeperRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterZookeeperRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a backup for the specified ClickHouse cluster. */
  backup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Backup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BackupClusterRequest) => Buffer.from(BackupClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a new ClickHouse cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreClusterRequest) => Buffer.from(RestoreClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/RescheduleMaintenance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RescheduleMaintenanceRequest) =>
      Buffer.from(RescheduleMaintenanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves logs for the specified ClickHouse cluster. */
  listLogs: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListLogs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterLogsRequest) => Buffer.from(ListClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterLogsRequest.decode(value),
    responseSerialize: (value: ListClusterLogsResponse) => Buffer.from(ListClusterLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterLogsResponse.decode(value),
  },
  /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/StreamLogs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: StreamClusterLogsRequest) => Buffer.from(StreamClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StreamClusterLogsRequest.decode(value),
    responseSerialize: (value: StreamLogRecord) => Buffer.from(StreamLogRecord.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamLogRecord.decode(value),
  },
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
  },
  /** Retrieves the list of available backups for the specified ClickHouse cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListBackups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterBackupsRequest) =>
      Buffer.from(ListClusterBackupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterBackupsRequest.decode(value),
    responseSerialize: (value: ListClusterBackupsResponse) =>
      Buffer.from(ListClusterBackupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterBackupsResponse.decode(value),
  },
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterHostsRequest) => Buffer.from(ListClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterHostsRequest.decode(value),
    responseSerialize: (value: ListClusterHostsResponse) =>
      Buffer.from(ListClusterHostsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterHostsResponse.decode(value),
  },
  /** Creates new hosts for a cluster. */
  addHosts: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterHostsRequest) => Buffer.from(AddClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified hosts. */
  updateHosts: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterHostsRequest) =>
      Buffer.from(UpdateClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterHostsRequest) =>
      Buffer.from(DeleteClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified shard. */
  getShard: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterShardRequest) => Buffer.from(GetClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterShardRequest.decode(value),
    responseSerialize: (value: Shard) => Buffer.from(Shard.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Shard.decode(value),
  },
  /** Retrieves a list of shards that belong to the specified cluster. */
  listShards: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShards",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterShardsRequest) => Buffer.from(ListClusterShardsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterShardsRequest.decode(value),
    responseSerialize: (value: ListClusterShardsResponse) =>
      Buffer.from(ListClusterShardsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterShardsResponse.decode(value),
  },
  /** Creates a new shard in the specified cluster. */
  addShard: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterShardRequest) => Buffer.from(AddClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Modifies the specified shard. */
  updateShard: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterShardRequest) =>
      Buffer.from(UpdateClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified shard. */
  deleteShard: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterShardRequest) =>
      Buffer.from(DeleteClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified shard group. */
  getShardGroup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShardGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterShardGroupRequest) =>
      Buffer.from(GetClusterShardGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterShardGroupRequest.decode(value),
    responseSerialize: (value: ShardGroup) => Buffer.from(ShardGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ShardGroup.decode(value),
  },
  /** Retrieves a list of shard groups that belong to specified cluster. */
  listShardGroups: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShardGroups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterShardGroupsRequest) =>
      Buffer.from(ListClusterShardGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterShardGroupsRequest.decode(value),
    responseSerialize: (value: ListClusterShardGroupsResponse) =>
      Buffer.from(ListClusterShardGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterShardGroupsResponse.decode(value),
  },
  /** Creates a new shard group in the specified cluster. */
  createShardGroup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateShardGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterShardGroupRequest) =>
      Buffer.from(CreateClusterShardGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterShardGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified shard group. */
  updateShardGroup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShardGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterShardGroupRequest) =>
      Buffer.from(UpdateClusterShardGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterShardGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified shard group. */
  deleteShardGroup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShardGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterShardGroupRequest) =>
      Buffer.from(DeleteClusterShardGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterShardGroupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves a list of external dictionaries that belong to specified cluster. */
  listExternalDictionaries: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListExternalDictionaries",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterExternalDictionariesRequest) =>
      Buffer.from(ListClusterExternalDictionariesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterExternalDictionariesRequest.decode(value),
    responseSerialize: (value: ListClusterExternalDictionariesResponse) =>
      Buffer.from(ListClusterExternalDictionariesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterExternalDictionariesResponse.decode(value),
  },
  /** Creates an external dictionary for the specified ClickHouse cluster. */
  createExternalDictionary: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateExternalDictionary",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterExternalDictionaryRequest) =>
      Buffer.from(CreateClusterExternalDictionaryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterExternalDictionaryRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates an external dictionary for the specified ClickHouse cluster. */
  updateExternalDictionary: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateExternalDictionary",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterExternalDictionaryRequest) =>
      Buffer.from(UpdateClusterExternalDictionaryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterExternalDictionaryRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified external dictionary. */
  deleteExternalDictionary: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteExternalDictionary",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterExternalDictionaryRequest) =>
      Buffer.from(DeleteClusterExternalDictionaryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterExternalDictionaryRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified ClickHouse cluster.
   *
   * To get the list of available ClickHouse clusters, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /**
   * Retrieves a list of ClickHouse clusters that belong
   * to the specified folder.
   */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a ClickHouse cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified ClickHouse cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified ClickHouse cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Starts the specified ClickHouse cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stops the specified ClickHouse cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Moves a ClickHouse cluster to the specified folder. */
  move: handleUnaryCall<MoveClusterRequest, Operation>;
  /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
  addZookeeper: handleUnaryCall<AddClusterZookeeperRequest, Operation>;
  /** Creates a backup for the specified ClickHouse cluster. */
  backup: handleUnaryCall<BackupClusterRequest, Operation>;
  /** Creates a new ClickHouse cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
  /** Retrieves logs for the specified ClickHouse cluster. */
  listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
  /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
  /** Retrieves the list of available backups for the specified ClickHouse cluster. */
  listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Creates new hosts for a cluster. */
  addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
  /** Updates the specified hosts. */
  updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
  /** Returns the specified shard. */
  getShard: handleUnaryCall<GetClusterShardRequest, Shard>;
  /** Retrieves a list of shards that belong to the specified cluster. */
  listShards: handleUnaryCall<ListClusterShardsRequest, ListClusterShardsResponse>;
  /** Creates a new shard in the specified cluster. */
  addShard: handleUnaryCall<AddClusterShardRequest, Operation>;
  /** Modifies the specified shard. */
  updateShard: handleUnaryCall<UpdateClusterShardRequest, Operation>;
  /** Deletes the specified shard. */
  deleteShard: handleUnaryCall<DeleteClusterShardRequest, Operation>;
  /** Returns the specified shard group. */
  getShardGroup: handleUnaryCall<GetClusterShardGroupRequest, ShardGroup>;
  /** Retrieves a list of shard groups that belong to specified cluster. */
  listShardGroups: handleUnaryCall<ListClusterShardGroupsRequest, ListClusterShardGroupsResponse>;
  /** Creates a new shard group in the specified cluster. */
  createShardGroup: handleUnaryCall<CreateClusterShardGroupRequest, Operation>;
  /** Updates the specified shard group. */
  updateShardGroup: handleUnaryCall<UpdateClusterShardGroupRequest, Operation>;
  /** Deletes the specified shard group. */
  deleteShardGroup: handleUnaryCall<DeleteClusterShardGroupRequest, Operation>;
  /** Retrieves a list of external dictionaries that belong to specified cluster. */
  listExternalDictionaries: handleUnaryCall<
    ListClusterExternalDictionariesRequest,
    ListClusterExternalDictionariesResponse
  >;
  /** Creates an external dictionary for the specified ClickHouse cluster. */
  createExternalDictionary: handleUnaryCall<CreateClusterExternalDictionaryRequest, Operation>;
  /** Updates an external dictionary for the specified ClickHouse cluster. */
  updateExternalDictionary: handleUnaryCall<UpdateClusterExternalDictionaryRequest, Operation>;
  /** Deletes the specified external dictionary. */
  deleteExternalDictionary: handleUnaryCall<DeleteClusterExternalDictionaryRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified ClickHouse cluster.
   *
   * To get the list of available ClickHouse clusters, make a [List] request.
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
  /**
   * Retrieves a list of ClickHouse clusters that belong
   * to the specified folder.
   */
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
  /** Creates a ClickHouse cluster in the specified folder. */
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
  /** Updates the specified ClickHouse cluster. */
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
  /** Deletes the specified ClickHouse cluster. */
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
  /** Starts the specified ClickHouse cluster. */
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
  /** Stops the specified ClickHouse cluster. */
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
  /** Moves a ClickHouse cluster to the specified folder. */
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
  /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
  addZookeeper(
    request: AddClusterZookeeperRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addZookeeper(
    request: AddClusterZookeeperRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addZookeeper(
    request: AddClusterZookeeperRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Creates a backup for the specified ClickHouse cluster. */
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
  /** Creates a new ClickHouse cluster using the specified backup. */
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
  /** Reschedules planned maintenance operation. */
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
  /** Retrieves logs for the specified ClickHouse cluster. */
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
  /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
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
  /** Retrieves the list of available backups for the specified ClickHouse cluster. */
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
  /** Creates new hosts for a cluster. */
  addHosts(
    request: AddClusterHostsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addHosts(
    request: AddClusterHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addHosts(
    request: AddClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified hosts. */
  updateHosts(
    request: UpdateClusterHostsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateHosts(
    request: UpdateClusterHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateHosts(
    request: UpdateClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified hosts for a cluster. */
  deleteHosts(
    request: DeleteClusterHostsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteHosts(
    request: DeleteClusterHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteHosts(
    request: DeleteClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns the specified shard. */
  getShard(
    request: GetClusterShardRequest,
    callback: (error: ServiceError | null, response: Shard) => void,
  ): ClientUnaryCall;
  getShard(
    request: GetClusterShardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Shard) => void,
  ): ClientUnaryCall;
  getShard(
    request: GetClusterShardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Shard) => void,
  ): ClientUnaryCall;
  /** Retrieves a list of shards that belong to the specified cluster. */
  listShards(
    request: ListClusterShardsRequest,
    callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void,
  ): ClientUnaryCall;
  listShards(
    request: ListClusterShardsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void,
  ): ClientUnaryCall;
  listShards(
    request: ListClusterShardsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a new shard in the specified cluster. */
  addShard(
    request: AddClusterShardRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addShard(
    request: AddClusterShardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  addShard(
    request: AddClusterShardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Modifies the specified shard. */
  updateShard(
    request: UpdateClusterShardRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateShard(
    request: UpdateClusterShardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateShard(
    request: UpdateClusterShardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified shard. */
  deleteShard(
    request: DeleteClusterShardRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteShard(
    request: DeleteClusterShardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteShard(
    request: DeleteClusterShardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Returns the specified shard group. */
  getShardGroup(
    request: GetClusterShardGroupRequest,
    callback: (error: ServiceError | null, response: ShardGroup) => void,
  ): ClientUnaryCall;
  getShardGroup(
    request: GetClusterShardGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ShardGroup) => void,
  ): ClientUnaryCall;
  getShardGroup(
    request: GetClusterShardGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ShardGroup) => void,
  ): ClientUnaryCall;
  /** Retrieves a list of shard groups that belong to specified cluster. */
  listShardGroups(
    request: ListClusterShardGroupsRequest,
    callback: (error: ServiceError | null, response: ListClusterShardGroupsResponse) => void,
  ): ClientUnaryCall;
  listShardGroups(
    request: ListClusterShardGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterShardGroupsResponse) => void,
  ): ClientUnaryCall;
  listShardGroups(
    request: ListClusterShardGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterShardGroupsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a new shard group in the specified cluster. */
  createShardGroup(
    request: CreateClusterShardGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createShardGroup(
    request: CreateClusterShardGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createShardGroup(
    request: CreateClusterShardGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified shard group. */
  updateShardGroup(
    request: UpdateClusterShardGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateShardGroup(
    request: UpdateClusterShardGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateShardGroup(
    request: UpdateClusterShardGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified shard group. */
  deleteShardGroup(
    request: DeleteClusterShardGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteShardGroup(
    request: DeleteClusterShardGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteShardGroup(
    request: DeleteClusterShardGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves a list of external dictionaries that belong to specified cluster. */
  listExternalDictionaries(
    request: ListClusterExternalDictionariesRequest,
    callback: (error: ServiceError | null, response: ListClusterExternalDictionariesResponse) => void,
  ): ClientUnaryCall;
  listExternalDictionaries(
    request: ListClusterExternalDictionariesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListClusterExternalDictionariesResponse) => void,
  ): ClientUnaryCall;
  listExternalDictionaries(
    request: ListClusterExternalDictionariesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListClusterExternalDictionariesResponse) => void,
  ): ClientUnaryCall;
  /** Creates an external dictionary for the specified ClickHouse cluster. */
  createExternalDictionary(
    request: CreateClusterExternalDictionaryRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createExternalDictionary(
    request: CreateClusterExternalDictionaryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createExternalDictionary(
    request: CreateClusterExternalDictionaryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates an external dictionary for the specified ClickHouse cluster. */
  updateExternalDictionary(
    request: UpdateClusterExternalDictionaryRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateExternalDictionary(
    request: UpdateClusterExternalDictionaryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateExternalDictionary(
    request: UpdateClusterExternalDictionaryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified external dictionary. */
  deleteExternalDictionary(
    request: DeleteClusterExternalDictionaryRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteExternalDictionary(
    request: DeleteClusterExternalDictionaryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteExternalDictionary(
    request: DeleteClusterExternalDictionaryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.clickhouse.v1.ClusterService",
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
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
