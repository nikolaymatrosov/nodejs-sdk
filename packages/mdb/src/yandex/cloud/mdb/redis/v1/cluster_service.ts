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
  Cluster,
  Cluster_Environment,
  cluster_EnvironmentFromJSON,
  cluster_EnvironmentToJSON,
  Cluster_PersistenceMode,
  cluster_PersistenceModeFromJSON,
  cluster_PersistenceModeToJSON,
  Host,
  Resources,
  Shard,
} from "./cluster";
import { RedisConfig } from "./config/redis";
import { RedisConfig50 } from "./config/redis5_0";
import { RedisConfig60 } from "./config/redis6_0";
import { RedisConfig62 } from "./config/redis6_2";
import { RedisConfig70 } from "./config/redis7_0";
import { MaintenanceWindow } from "./maintenance";

export const protobufPackage = "yandex.cloud.mdb.redis.v1";

export interface EnableShardingClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.EnableShardingClusterMetadata";
  clusterId: string;
}

export interface EnableShardingClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.EnableShardingClusterRequest";
  /** Required. ID of the Redis cluster to return. */
  clusterId: string;
}

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.GetClusterRequest";
  /**
   * ID of the Redis cluster to return.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.redis.v1.ListClustersRequest";
  /**
   * ID of the folder to list Redis clusters in.
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
   * A filter expression that filters clusters listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z]([-a-z0-9]{,61}[a-z0-9])?`.
   */
  filter: string;
}

export interface ListClustersResponse {
  $type: "yandex.cloud.mdb.redis.v1.ListClustersResponse";
  /** List of Redis clusters. */
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
  $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest";
  /** ID of the folder to create the Redis cluster in. */
  folderId: string;
  /** Name of the Redis cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the Redis cluster. */
  description: string;
  /**
   * Custom labels for the Redis cluster as `key:value` pairs. Maximum 64 per cluster.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the Redis cluster. */
  environment: Cluster_Environment;
  /** Configuration and resources for hosts that should be created for the Redis cluster. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /** Individual configurations for hosts that should be created for the Redis cluster. */
  hostSpecs: HostSpec[];
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** Redis cluster mode on/off. */
  sharded: boolean;
  /** User security groups */
  securityGroupIds: string[];
  /** TLS port and functionality on\off */
  tlsEnabled?:
    | boolean
    | undefined;
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Persistence mode */
  persistenceMode: Cluster_PersistenceMode;
  /** Enable FQDN instead of ip */
  announceHostnames: boolean;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.CreateClusterMetadata";
  /** ID of the Redis cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest";
  /**
   * ID of the Redis cluster to update.
   * To get the Redis cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the Redis cluster should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New description of the Redis cluster. */
  description: string;
  /**
   * Custom labels for the Redis cluster as `` key:value `` pairs. Maximum 64 per cluster.
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
  /** New maintenance window settings for the cluster. */
  maintenanceWindow?:
    | MaintenanceWindow
    | undefined;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Persistence mode */
  persistenceMode: Cluster_PersistenceMode;
  /** Enable FQDN instead of ip */
  announceHostnames: boolean;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterMetadata";
  /** ID of the Redis cluster that is being updated. */
  clusterId: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterRequest";
  /**
   * ID of the Redis cluster to delete.
   * To get the Redis cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterMetadata";
  /** ID of the Redis cluster that is being deleted. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.StartClusterRequest";
  /** ID of the Redis cluster to start. */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.StartClusterMetadata";
  /** ID of the Redis cluster. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.StopClusterRequest";
  /** ID of the Redis cluster to stop. */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.StopClusterMetadata";
  /** ID of the Redis cluster. */
  clusterId: string;
}

export interface MoveClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.MoveClusterRequest";
  /** ID of the Redis cluster to move. */
  clusterId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.MoveClusterMetadata";
  /** ID of the Redis cluster being moved. */
  clusterId: string;
  /** ID of the source folder. */
  sourceFolderId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface UpdateClusterHostsRequest {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsRequest";
  /**
   * ID of the Redis cluster to update hosts in.
   * To get the Redis cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** New configurations to apply to hosts. */
  updateHostSpecs: UpdateHostSpec[];
}

export interface UpdateClusterHostsMetadata {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsMetadata";
  /** ID of the Redis cluster to update hosts in. */
  clusterId: string;
  /** Names of hosts that are being updated. */
  hostNames: string[];
}

export interface BackupClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.BackupClusterRequest";
  /**
   * ID of the Redis cluster to back up.
   * To get the Redis cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface BackupClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.BackupClusterMetadata";
  /** ID of the Redis cluster that is being backed up. */
  clusterId: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest";
  /**
   * ID of the backup to create a cluster from.
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /** Name of the new Redis cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the new Redis cluster. */
  description: string;
  /**
   * Custom labels for the Redis cluster as `` key:value `` pairs. Maximum 64 per cluster.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the new Redis cluster. */
  environment: Cluster_Environment;
  /** Configuration for the Redis cluster to be created. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /**
   * Configurations for Redis hosts that should be created for
   * the cluster that is being created from the backup.
   */
  hostSpecs: HostSpec[];
  /** ID of the network to create the Redis cluster in. */
  networkId: string;
  /** ID of the folder to create the Redis cluster in. */
  folderId: string;
  /** User security groups */
  securityGroupIds: string[];
  /** TLS port and functionality on\off */
  tlsEnabled?:
    | boolean
    | undefined;
  /** Persistence mode */
  persistenceMode: Cluster_PersistenceMode;
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Enable FQDN instead of ip */
  announceHostnames: boolean;
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.RestoreClusterMetadata";
  /** ID of the new Redis cluster that is being created from a backup. */
  clusterId: string;
  /** ID of the backup that is being used for creating a cluster. */
  backupId: string;
}

export interface StartClusterFailoverRequest {
  $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverRequest";
  /** ID of the Redis cluster to start failover on. */
  clusterId: string;
  /** List of hostnames which should not be masters. Can be empty for sentinel clusters or can contain multiple hosts for sharded clusters. */
  hostNames: string[];
}

export interface StartClusterFailoverMetadata {
  $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverMetadata";
  /** ID of the Redis cluster on which failover will be initiated. */
  clusterId: string;
  /** List of hostnames which should not be masters. Can be empty for sentinel clusters or can contain multiple hosts for sharded clusters. */
  hostNames: string[];
}

export interface RescheduleMaintenanceRequest {
  $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceRequest";
  /** ID of the Redis cluster to reschedule the maintenance operation for. */
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

export interface RescheduleMaintenanceMetadata {
  $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceMetadata";
  /** Required. ID of the Redis cluster. */
  clusterId: string;
  /** Required. The time until which this maintenance operation is to be delayed. */
  delayedUntil?: Date | undefined;
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.redis.v1.LogRecord";
  /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  timestamp?:
    | Date
    | undefined;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.redis.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsRequest";
  /**
   * ID of the Redis cluster to request logs for.
   * To get the Redis cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Columns from the logs table to request.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
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
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterLogsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export enum ListClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** REDIS - Logs of Redis activity. */
  REDIS = 1,
  UNRECOGNIZED = -1,
}

export function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "REDIS":
      return ListClusterLogsRequest_ServiceType.REDIS;
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
    case ListClusterLogsRequest_ServiceType.REDIS:
      return "REDIS";
    case ListClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsResponse";
  /** Requested log records. */
  logs: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   * This value is interchangeable with `next_record_token` from StreamLogs method.
   */
  nextPageToken: string;
}

export interface StreamLogRecord {
  $type: "yandex.cloud.mdb.redis.v1.StreamLogRecord";
  /** One of the requested log records. */
  record?:
    | LogRecord
    | undefined;
  /**
   * This token allows you to continue streaming logs starting from the exact
   * same record. To continue streaming, specify value of `next_record_token`
   * as value for `record_token` parameter in the next StreamLogs request.
   * This value is interchangeable with `next_page_token` from ListLogs method.
   */
  nextRecordToken: string;
}

export interface StreamClusterLogsRequest {
  $type: "yandex.cloud.mdb.redis.v1.StreamClusterLogsRequest";
  /** Required. ID of the Redis cluster. */
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
   * they appear. In essence it has 'tail -f' semantics.
   */
  toTime?:
    | Date
    | undefined;
  /**
   * Record token. Set `record_token` to the `next_record_token` returned by a previous StreamLogs
   * request to start streaming from next log record.
   */
  recordToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.hostname] field
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Examples of a filter `message.hostname='node1.db.cloud.yandex.net'`.
   */
  filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** REDIS - Logs of Redis activity. */
  REDIS = 1,
  UNRECOGNIZED = -1,
}

export function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "REDIS":
      return StreamClusterLogsRequest_ServiceType.REDIS;
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
    case StreamClusterLogsRequest_ServiceType.REDIS:
      return "REDIS";
    case StreamClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsRequest";
  /** ID of the Redis cluster to list operations for. */
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
  $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsResponse";
  /** List of operations for the specified Redis cluster. */
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
  $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsRequest";
  /**
   * ID of the Redis cluster.
   * To get the Redis cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the [ListClusterBackupsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterBackupsResponse {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsResponse";
  /** List of Redis backups. */
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
  $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsRequest";
  /**
   * ID of the Redis cluster.
   * To get the Redis cluster ID use a [ClusterService.List] request.
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
  $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsResponse";
  /** List of hosts for the cluster. */
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
  $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsRequest";
  /**
   * ID of the Redis cluster to add hosts to.
   * To get the Redis cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configurations for Redis hosts that should be added to the cluster. */
  hostSpecs: HostSpec[];
}

export interface AddClusterHostsMetadata {
  $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsMetadata";
  /** ID of the Redis cluster to which the hosts are being added. */
  clusterId: string;
  /** Names of hosts that are being added to the cluster. */
  hostNames: string[];
}

export interface DeleteClusterHostsRequest {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsRequest";
  /**
   * ID of the Redis cluster to remove hosts from.
   * To get the Redis cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Names of hosts to delete. */
  hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsMetadata";
  /** ID of the Redis cluster to remove hosts from. */
  clusterId: string;
  /** Names of hosts that are being deleted. */
  hostNames: string[];
}

export interface GetClusterShardRequest {
  $type: "yandex.cloud.mdb.redis.v1.GetClusterShardRequest";
  /**
   * ID of the Redis cluster the shard belongs to.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of Redis shard to return.
   * To get the shard name use a [ClusterService.ListShards] request.
   */
  shardName: string;
}

export interface ListClusterShardsRequest {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsRequest";
  /**
   * ID of the Redis cluster to list shards in.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListClusterShardsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterShardsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterShardsResponse {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsResponse";
  /** List of Redis shards. */
  shards: Shard[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterShardsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListClusterShardsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface AddClusterShardRequest {
  $type: "yandex.cloud.mdb.redis.v1.AddClusterShardRequest";
  /**
   * ID of the Redis cluster to create a shard in.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard.
   * The name must be unique within the cluster.
   */
  shardName: string;
  /**
   * Configurations for Redis hosts that should be created with the shard.
   * Must contain at least one element.
   */
  hostSpecs: HostSpec[];
}

export interface AddClusterShardMetadata {
  $type: "yandex.cloud.mdb.redis.v1.AddClusterShardMetadata";
  /** ID of the Redis cluster that a shard is being added to. */
  clusterId: string;
  /** Name of the Redis shard that is being created. */
  shardName: string;
}

export interface DeleteClusterShardRequest {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardRequest";
  /**
   * ID of the Redis cluster the shard belongs to.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the Redis shard to delete.
   * To get the shard name use a [ClusterService.ListShards] request.
   */
  shardName: string;
}

export interface DeleteClusterShardMetadata {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardMetadata";
  /** ID of the Redis cluster the shard belongs to. */
  clusterId: string;
  /** Name of the Redis shard that is being deleted. */
  shardName: string;
}

export interface RebalanceClusterRequest {
  $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterRequest";
  /**
   * ID of the Redis cluster to rebalance.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface RebalanceClusterMetadata {
  $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterMetadata";
  /** ID of the Redis cluster that is being rebalancing. */
  clusterId: string;
}

export interface UpdateHostSpec {
  $type: "yandex.cloud.mdb.redis.v1.UpdateHostSpec";
  /**
   * Name of the host to update.
   * To get the Redis host name, use a [ClusterService.ListHosts] request.
   */
  hostName: string;
  /**
   * A replica with a low priority number is considered better for promotion.
   * A replica with priority of 0 will never be selected by Redis Sentinel for promotion.
   * Works only for non-sharded clusters. Default value is 100.
   */
  replicaPriority?:
    | number
    | undefined;
  /** Whether the host should get a public IP address on update. */
  assignPublicIp: boolean;
  /** Field mask that specifies which fields of the Redis host should be updated. */
  updateMask?: string[] | undefined;
}

export interface HostSpec {
  $type: "yandex.cloud.mdb.redis.v1.HostSpec";
  /**
   * ID of the availability zone where the host resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /**
   * ID of the subnet that the host should belong to. This subnet should be a part
   * of the network that the cluster belongs to.
   * The ID of the network is set in the field [Cluster.network_id].
   */
  subnetId: string;
  /**
   * ID of the Redis shard the host belongs to.
   * To get the shard ID use a [ClusterService.ListShards] request.
   */
  shardName: string;
  /**
   * A replica with a low priority number is considered better for promotion.
   * A replica with priority of 0 will never be selected by Redis Sentinel for promotion.
   * Works only for non-sharded clusters. Default value is 100.
   */
  replicaPriority?:
    | number
    | undefined;
  /**
   * Whether the host should get a public IP address on creation.
   *
   * Possible values:
   * * false - don't assign a public IP to the host.
   * * true - the host should have a public IP address.
   */
  assignPublicIp: boolean;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.redis.v1.ConfigSpec";
  /** Version of Redis used in the cluster. */
  version: string;
  redisConfig50?: RedisConfig50 | undefined;
  redisConfig60?: RedisConfig60 | undefined;
  redisConfig62?: RedisConfig62 | undefined;
  redisConfig70?:
    | RedisConfig70
    | undefined;
  /** Resources allocated to Redis hosts. */
  resources?:
    | Resources
    | undefined;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /** Access policy to DB */
  access?:
    | Access
    | undefined;
  /** Unified configuration of a Redis cluster */
  redis?: RedisConfig | undefined;
}

function createBaseEnableShardingClusterMetadata(): EnableShardingClusterMetadata {
  return { $type: "yandex.cloud.mdb.redis.v1.EnableShardingClusterMetadata", clusterId: "" };
}

export const EnableShardingClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.EnableShardingClusterMetadata" as const,

  encode(message: EnableShardingClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableShardingClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableShardingClusterMetadata();
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

  fromJSON(object: any): EnableShardingClusterMetadata {
    return {
      $type: EnableShardingClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: EnableShardingClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<EnableShardingClusterMetadata>): EnableShardingClusterMetadata {
    return EnableShardingClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnableShardingClusterMetadata>): EnableShardingClusterMetadata {
    const message = createBaseEnableShardingClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnableShardingClusterMetadata.$type, EnableShardingClusterMetadata);

function createBaseEnableShardingClusterRequest(): EnableShardingClusterRequest {
  return { $type: "yandex.cloud.mdb.redis.v1.EnableShardingClusterRequest", clusterId: "" };
}

export const EnableShardingClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.EnableShardingClusterRequest" as const,

  encode(message: EnableShardingClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableShardingClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableShardingClusterRequest();
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

  fromJSON(object: any): EnableShardingClusterRequest {
    return {
      $type: EnableShardingClusterRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: EnableShardingClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<EnableShardingClusterRequest>): EnableShardingClusterRequest {
    return EnableShardingClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnableShardingClusterRequest>): EnableShardingClusterRequest {
    const message = createBaseEnableShardingClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnableShardingClusterRequest.$type, EnableShardingClusterRequest);

function createBaseGetClusterRequest(): GetClusterRequest {
  return { $type: "yandex.cloud.mdb.redis.v1.GetClusterRequest", clusterId: "" };
}

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.GetClusterRequest" as const,

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
    $type: "yandex.cloud.mdb.redis.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.redis.v1.ListClustersRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClustersResponse", clusters: [], nextPageToken: "" };
}

export const ListClustersResponse = {
  $type: "yandex.cloud.mdb.redis.v1.ListClustersResponse" as const,

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
    $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    environment: 0,
    configSpec: undefined,
    hostSpecs: [],
    networkId: "",
    sharded: false,
    securityGroupIds: [],
    tlsEnabled: undefined,
    deletionProtection: false,
    persistenceMode: 0,
    announceHostnames: false,
  };
}

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest.LabelsEntry",
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
      writer.uint32(82).string(message.networkId);
    }
    if (message.sharded === true) {
      writer.uint32(88).bool(message.sharded);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(98).string(v!);
    }
    if (message.tlsEnabled !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.tlsEnabled! }, writer.uint32(106).fork())
        .ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(112).bool(message.deletionProtection);
    }
    if (message.persistenceMode !== 0) {
      writer.uint32(120).int32(message.persistenceMode);
    }
    if (message.announceHostnames === true) {
      writer.uint32(128).bool(message.announceHostnames);
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

          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.sharded = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.tlsEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.persistenceMode = reader.int32() as any;
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.announceHostnames = reader.bool();
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
      hostSpecs: globalThis.Array.isArray(object?.hostSpecs)
        ? object.hostSpecs.map((e: any) => HostSpec.fromJSON(e))
        : [],
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      sharded: isSet(object.sharded) ? globalThis.Boolean(object.sharded) : false,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      tlsEnabled: isSet(object.tlsEnabled) ? Boolean(object.tlsEnabled) : undefined,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      persistenceMode: isSet(object.persistenceMode) ? cluster_PersistenceModeFromJSON(object.persistenceMode) : 0,
      announceHostnames: isSet(object.announceHostnames) ? globalThis.Boolean(object.announceHostnames) : false,
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
    if (message.hostSpecs?.length) {
      obj.hostSpecs = message.hostSpecs.map((e) => HostSpec.toJSON(e));
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.sharded === true) {
      obj.sharded = message.sharded;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.tlsEnabled !== undefined) {
      obj.tlsEnabled = message.tlsEnabled;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.persistenceMode !== 0) {
      obj.persistenceMode = cluster_PersistenceModeToJSON(message.persistenceMode);
    }
    if (message.announceHostnames === true) {
      obj.announceHostnames = message.announceHostnames;
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
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.networkId = object.networkId ?? "";
    message.sharded = object.sharded ?? false;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.tlsEnabled = object.tlsEnabled ?? undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    message.persistenceMode = object.persistenceMode ?? 0;
    message.announceHostnames = object.announceHostnames ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

function createBaseCreateClusterRequest_LabelsEntry(): CreateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.CreateClusterMetadata", clusterId: "" };
}

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.CreateClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest",
    clusterId: "",
    updateMask: undefined,
    description: "",
    labels: {},
    configSpec: undefined,
    name: "",
    maintenanceWindow: undefined,
    securityGroupIds: [],
    deletionProtection: false,
    persistenceMode: 0,
    announceHostnames: false,
  };
}

export const UpdateClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest.LabelsEntry",
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
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(66).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    if (message.persistenceMode !== 0) {
      writer.uint32(80).int32(message.persistenceMode);
    }
    if (message.announceHostnames === true) {
      writer.uint32(96).bool(message.announceHostnames);
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

          message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.persistenceMode = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.announceHostnames = reader.bool();
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
      maintenanceWindow: isSet(object.maintenanceWindow)
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      persistenceMode: isSet(object.persistenceMode) ? cluster_PersistenceModeFromJSON(object.persistenceMode) : 0,
      announceHostnames: isSet(object.announceHostnames) ? globalThis.Boolean(object.announceHostnames) : false,
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
    if (message.maintenanceWindow !== undefined) {
      obj.maintenanceWindow = MaintenanceWindow.toJSON(message.maintenanceWindow);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.persistenceMode !== 0) {
      obj.persistenceMode = cluster_PersistenceModeToJSON(message.persistenceMode);
    }
    if (message.announceHostnames === true) {
      obj.announceHostnames = message.announceHostnames;
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
    message.maintenanceWindow = (object.maintenanceWindow !== undefined && object.maintenanceWindow !== null)
      ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.persistenceMode = object.persistenceMode ?? 0;
    message.announceHostnames = object.announceHostnames ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

function createBaseUpdateClusterRequest_LabelsEntry(): UpdateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.UpdateClusterMetadata", clusterId: "" };
}

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.DeleteClusterRequest", clusterId: "" };
}

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.DeleteClusterMetadata", clusterId: "" };
}

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.StartClusterRequest", clusterId: "" };
}

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.StartClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.StartClusterMetadata", clusterId: "" };
}

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.StartClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.StopClusterRequest", clusterId: "" };
}

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.StopClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.StopClusterMetadata", clusterId: "" };
}

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.StopClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.MoveClusterRequest", clusterId: "", destinationFolderId: "" };
}

export const MoveClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.MoveClusterRequest" as const,

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
    $type: "yandex.cloud.mdb.redis.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
  };
}

export const MoveClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.MoveClusterMetadata" as const,

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

function createBaseUpdateClusterHostsRequest(): UpdateClusterHostsRequest {
  return { $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsRequest", clusterId: "", updateHostSpecs: [] };
}

export const UpdateClusterHostsRequest = {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const UpdateClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsMetadata" as const,

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

function createBaseBackupClusterRequest(): BackupClusterRequest {
  return { $type: "yandex.cloud.mdb.redis.v1.BackupClusterRequest", clusterId: "" };
}

export const BackupClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.BackupClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.BackupClusterMetadata", clusterId: "" };
}

export const BackupClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.BackupClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest",
    backupId: "",
    name: "",
    description: "",
    labels: {},
    environment: 0,
    configSpec: undefined,
    hostSpecs: [],
    networkId: "",
    folderId: "",
    securityGroupIds: [],
    tlsEnabled: undefined,
    persistenceMode: 0,
    deletionProtection: false,
    announceHostnames: false,
  };
}

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest.LabelsEntry",
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
    for (const v of message.securityGroupIds) {
      writer.uint32(82).string(v!);
    }
    if (message.tlsEnabled !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.tlsEnabled! }, writer.uint32(90).fork())
        .ldelim();
    }
    if (message.persistenceMode !== 0) {
      writer.uint32(96).int32(message.persistenceMode);
    }
    if (message.deletionProtection === true) {
      writer.uint32(104).bool(message.deletionProtection);
    }
    if (message.announceHostnames === true) {
      writer.uint32(112).bool(message.announceHostnames);
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

          message.securityGroupIds.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tlsEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.persistenceMode = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.announceHostnames = reader.bool();
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
      configSpec: isSet(object.configSpec) ? ConfigSpec.fromJSON(object.configSpec) : undefined,
      hostSpecs: globalThis.Array.isArray(object?.hostSpecs)
        ? object.hostSpecs.map((e: any) => HostSpec.fromJSON(e))
        : [],
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      tlsEnabled: isSet(object.tlsEnabled) ? Boolean(object.tlsEnabled) : undefined,
      persistenceMode: isSet(object.persistenceMode) ? cluster_PersistenceModeFromJSON(object.persistenceMode) : 0,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      announceHostnames: isSet(object.announceHostnames) ? globalThis.Boolean(object.announceHostnames) : false,
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
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.tlsEnabled !== undefined) {
      obj.tlsEnabled = message.tlsEnabled;
    }
    if (message.persistenceMode !== 0) {
      obj.persistenceMode = cluster_PersistenceModeToJSON(message.persistenceMode);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.announceHostnames === true) {
      obj.announceHostnames = message.announceHostnames;
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
      ? ConfigSpec.fromPartial(object.configSpec)
      : undefined;
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.networkId = object.networkId ?? "";
    message.folderId = object.folderId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.tlsEnabled = object.tlsEnabled ?? undefined;
    message.persistenceMode = object.persistenceMode ?? 0;
    message.deletionProtection = object.deletionProtection ?? false;
    message.announceHostnames = object.announceHostnames ?? false;
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

function createBaseRestoreClusterRequest_LabelsEntry(): RestoreClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest.LabelsEntry", key: "", value: "" };
}

export const RestoreClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.RestoreClusterMetadata", clusterId: "", backupId: "" };
}

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.RestoreClusterMetadata" as const,

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

function createBaseStartClusterFailoverRequest(): StartClusterFailoverRequest {
  return { $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverRequest", clusterId: "", hostNames: [] };
}

export const StartClusterFailoverRequest = {
  $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverRequest" as const,

  encode(message: StartClusterFailoverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterFailoverRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartClusterFailoverRequest();
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

  fromJSON(object: any): StartClusterFailoverRequest {
    return {
      $type: StartClusterFailoverRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StartClusterFailoverRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<StartClusterFailoverRequest>): StartClusterFailoverRequest {
    return StartClusterFailoverRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartClusterFailoverRequest>): StartClusterFailoverRequest {
    const message = createBaseStartClusterFailoverRequest();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(StartClusterFailoverRequest.$type, StartClusterFailoverRequest);

function createBaseStartClusterFailoverMetadata(): StartClusterFailoverMetadata {
  return { $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverMetadata", clusterId: "", hostNames: [] };
}

export const StartClusterFailoverMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverMetadata" as const,

  encode(message: StartClusterFailoverMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterFailoverMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartClusterFailoverMetadata();
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

  fromJSON(object: any): StartClusterFailoverMetadata {
    return {
      $type: StartClusterFailoverMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StartClusterFailoverMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<StartClusterFailoverMetadata>): StartClusterFailoverMetadata {
    return StartClusterFailoverMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartClusterFailoverMetadata>): StartClusterFailoverMetadata {
    const message = createBaseStartClusterFailoverMetadata();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(StartClusterFailoverMetadata.$type, StartClusterFailoverMetadata);

function createBaseRescheduleMaintenanceRequest(): RescheduleMaintenanceRequest {
  return {
    $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
    delayedUntil: undefined,
  };
}

export const RescheduleMaintenanceRequest = {
  $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceMetadata", clusterId: "", delayedUntil: undefined };
}

export const RescheduleMaintenanceMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.LogRecord", timestamp: undefined, message: {} };
}

export const LogRecord = {
  $type: "yandex.cloud.mdb.redis.v1.LogRecord" as const,

  encode(message: LogRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.message).forEach(([key, value]) => {
      LogRecord_MessageEntry.encode({
        $type: "yandex.cloud.mdb.redis.v1.LogRecord.MessageEntry",
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
  return { $type: "yandex.cloud.mdb.redis.v1.LogRecord.MessageEntry", key: "", value: "" };
}

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.redis.v1.LogRecord.MessageEntry" as const,

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
    $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsRequest",
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
  $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsResponse", logs: [], nextPageToken: "" };
}

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.StreamLogRecord", record: undefined, nextRecordToken: "" };
}

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.redis.v1.StreamLogRecord" as const,

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
    $type: "yandex.cloud.mdb.redis.v1.StreamClusterLogsRequest",
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
  $type: "yandex.cloud.mdb.redis.v1.StreamClusterLogsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsResponse", backups: [], nextPageToken: "" };
}

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsResponse", hosts: [], nextPageToken: "" };
}

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsRequest", clusterId: "", hostSpecs: [] };
}

export const AddClusterHostsRequest = {
  $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsRequest" as const,

  encode(message: AddClusterHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(18).fork()).ldelim();
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
    return obj;
  },

  create(base?: DeepPartial<AddClusterHostsRequest>): AddClusterHostsRequest {
    return AddClusterHostsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddClusterHostsRequest>): AddClusterHostsRequest {
    const message = createBaseAddClusterHostsRequest();
    message.clusterId = object.clusterId ?? "";
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AddClusterHostsRequest.$type, AddClusterHostsRequest);

function createBaseAddClusterHostsMetadata(): AddClusterHostsMetadata {
  return { $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const AddClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsMetadata" as const,

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

function createBaseDeleteClusterHostsRequest(): DeleteClusterHostsRequest {
  return { $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsRequest", clusterId: "", hostNames: [] };
}

export const DeleteClusterHostsRequest = {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const DeleteClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.GetClusterShardRequest", clusterId: "", shardName: "" };
}

export const GetClusterShardRequest = {
  $type: "yandex.cloud.mdb.redis.v1.GetClusterShardRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterShardsRequest = {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsResponse", shards: [], nextPageToken: "" };
}

export const ListClusterShardsResponse = {
  $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.AddClusterShardRequest", clusterId: "", shardName: "", hostSpecs: [] };
}

export const AddClusterShardRequest = {
  $type: "yandex.cloud.mdb.redis.v1.AddClusterShardRequest" as const,

  encode(message: AddClusterShardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): AddClusterShardRequest {
    return {
      $type: AddClusterShardRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
      hostSpecs: globalThis.Array.isArray(object?.hostSpecs)
        ? object.hostSpecs.map((e: any) => HostSpec.fromJSON(e))
        : [],
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
    if (message.hostSpecs?.length) {
      obj.hostSpecs = message.hostSpecs.map((e) => HostSpec.toJSON(e));
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
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AddClusterShardRequest.$type, AddClusterShardRequest);

function createBaseAddClusterShardMetadata(): AddClusterShardMetadata {
  return { $type: "yandex.cloud.mdb.redis.v1.AddClusterShardMetadata", clusterId: "", shardName: "" };
}

export const AddClusterShardMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.AddClusterShardMetadata" as const,

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

function createBaseDeleteClusterShardRequest(): DeleteClusterShardRequest {
  return { $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardRequest", clusterId: "", shardName: "" };
}

export const DeleteClusterShardRequest = {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardRequest" as const,

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
  return { $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardMetadata", clusterId: "", shardName: "" };
}

export const DeleteClusterShardMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardMetadata" as const,

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

function createBaseRebalanceClusterRequest(): RebalanceClusterRequest {
  return { $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterRequest", clusterId: "" };
}

export const RebalanceClusterRequest = {
  $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterRequest" as const,

  encode(message: RebalanceClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RebalanceClusterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRebalanceClusterRequest();
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

  fromJSON(object: any): RebalanceClusterRequest {
    return {
      $type: RebalanceClusterRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: RebalanceClusterRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<RebalanceClusterRequest>): RebalanceClusterRequest {
    return RebalanceClusterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RebalanceClusterRequest>): RebalanceClusterRequest {
    const message = createBaseRebalanceClusterRequest();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RebalanceClusterRequest.$type, RebalanceClusterRequest);

function createBaseRebalanceClusterMetadata(): RebalanceClusterMetadata {
  return { $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterMetadata", clusterId: "" };
}

export const RebalanceClusterMetadata = {
  $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterMetadata" as const,

  encode(message: RebalanceClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RebalanceClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRebalanceClusterMetadata();
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

  fromJSON(object: any): RebalanceClusterMetadata {
    return {
      $type: RebalanceClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: RebalanceClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<RebalanceClusterMetadata>): RebalanceClusterMetadata {
    return RebalanceClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RebalanceClusterMetadata>): RebalanceClusterMetadata {
    const message = createBaseRebalanceClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RebalanceClusterMetadata.$type, RebalanceClusterMetadata);

function createBaseUpdateHostSpec(): UpdateHostSpec {
  return {
    $type: "yandex.cloud.mdb.redis.v1.UpdateHostSpec",
    hostName: "",
    replicaPriority: undefined,
    assignPublicIp: false,
    updateMask: undefined,
  };
}

export const UpdateHostSpec = {
  $type: "yandex.cloud.mdb.redis.v1.UpdateHostSpec" as const,

  encode(message: UpdateHostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostName !== "") {
      writer.uint32(10).string(message.hostName);
    }
    if (message.replicaPriority !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicaPriority! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.assignPublicIp === true) {
      writer.uint32(24).bool(message.assignPublicIp);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).ldelim();
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

          message.replicaPriority = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): UpdateHostSpec {
    return {
      $type: UpdateHostSpec.$type,
      hostName: isSet(object.hostName) ? globalThis.String(object.hostName) : "",
      replicaPriority: isSet(object.replicaPriority) ? Number(object.replicaPriority) : undefined,
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateHostSpec): unknown {
    const obj: any = {};
    if (message.hostName !== "") {
      obj.hostName = message.hostName;
    }
    if (message.replicaPriority !== undefined) {
      obj.replicaPriority = message.replicaPriority;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateHostSpec>): UpdateHostSpec {
    return UpdateHostSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateHostSpec>): UpdateHostSpec {
    const message = createBaseUpdateHostSpec();
    message.hostName = object.hostName ?? "";
    message.replicaPriority = object.replicaPriority ?? undefined;
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateHostSpec.$type, UpdateHostSpec);

function createBaseHostSpec(): HostSpec {
  return {
    $type: "yandex.cloud.mdb.redis.v1.HostSpec",
    zoneId: "",
    subnetId: "",
    shardName: "",
    replicaPriority: undefined,
    assignPublicIp: false,
  };
}

export const HostSpec = {
  $type: "yandex.cloud.mdb.redis.v1.HostSpec" as const,

  encode(message: HostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    if (message.shardName !== "") {
      writer.uint32(26).string(message.shardName);
    }
    if (message.replicaPriority !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.replicaPriority! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.assignPublicIp === true) {
      writer.uint32(40).bool(message.assignPublicIp);
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
          if (tag !== 18) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.shardName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.replicaPriority = Int64Value.decode(reader, reader.uint32()).value;
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

  fromJSON(object: any): HostSpec {
    return {
      $type: HostSpec.$type,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
      replicaPriority: isSet(object.replicaPriority) ? Number(object.replicaPriority) : undefined,
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
    };
  },

  toJSON(message: HostSpec): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.shardName !== "") {
      obj.shardName = message.shardName;
    }
    if (message.replicaPriority !== undefined) {
      obj.replicaPriority = message.replicaPriority;
    }
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    return obj;
  },

  create(base?: DeepPartial<HostSpec>): HostSpec {
    return HostSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HostSpec>): HostSpec {
    const message = createBaseHostSpec();
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.shardName = object.shardName ?? "";
    message.replicaPriority = object.replicaPriority ?? undefined;
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(HostSpec.$type, HostSpec);

function createBaseConfigSpec(): ConfigSpec {
  return {
    $type: "yandex.cloud.mdb.redis.v1.ConfigSpec",
    version: "",
    redisConfig50: undefined,
    redisConfig60: undefined,
    redisConfig62: undefined,
    redisConfig70: undefined,
    resources: undefined,
    backupWindowStart: undefined,
    access: undefined,
    redis: undefined,
  };
}

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.redis.v1.ConfigSpec" as const,

  encode(message: ConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.redisConfig50 !== undefined) {
      RedisConfig50.encode(message.redisConfig50, writer.uint32(18).fork()).ldelim();
    }
    if (message.redisConfig60 !== undefined) {
      RedisConfig60.encode(message.redisConfig60, writer.uint32(50).fork()).ldelim();
    }
    if (message.redisConfig62 !== undefined) {
      RedisConfig62.encode(message.redisConfig62, writer.uint32(58).fork()).ldelim();
    }
    if (message.redisConfig70 !== undefined) {
      RedisConfig70.encode(message.redisConfig70, writer.uint32(66).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(34).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(42).fork()).ldelim();
    }
    if (message.redis !== undefined) {
      RedisConfig.encode(message.redis, writer.uint32(90).fork()).ldelim();
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

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.redisConfig50 = RedisConfig50.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.redisConfig60 = RedisConfig60.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.redisConfig62 = RedisConfig62.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.redisConfig70 = RedisConfig70.decode(reader, reader.uint32());
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

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.redis = RedisConfig.decode(reader, reader.uint32());
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
      redisConfig50: isSet(object.redisConfig_5_0) ? RedisConfig50.fromJSON(object.redisConfig_5_0) : undefined,
      redisConfig60: isSet(object.redisConfig_6_0) ? RedisConfig60.fromJSON(object.redisConfig_6_0) : undefined,
      redisConfig62: isSet(object.redisConfig_6_2) ? RedisConfig62.fromJSON(object.redisConfig_6_2) : undefined,
      redisConfig70: isSet(object.redisConfig_7_0) ? RedisConfig70.fromJSON(object.redisConfig_7_0) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
      redis: isSet(object.redis) ? RedisConfig.fromJSON(object.redis) : undefined,
    };
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.redisConfig50 !== undefined) {
      obj.redisConfig_5_0 = RedisConfig50.toJSON(message.redisConfig50);
    }
    if (message.redisConfig60 !== undefined) {
      obj.redisConfig_6_0 = RedisConfig60.toJSON(message.redisConfig60);
    }
    if (message.redisConfig62 !== undefined) {
      obj.redisConfig_6_2 = RedisConfig62.toJSON(message.redisConfig62);
    }
    if (message.redisConfig70 !== undefined) {
      obj.redisConfig_7_0 = RedisConfig70.toJSON(message.redisConfig70);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.backupWindowStart !== undefined) {
      obj.backupWindowStart = TimeOfDay.toJSON(message.backupWindowStart);
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    if (message.redis !== undefined) {
      obj.redis = RedisConfig.toJSON(message.redis);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec>): ConfigSpec {
    return ConfigSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec {
    const message = createBaseConfigSpec();
    message.version = object.version ?? "";
    message.redisConfig50 = (object.redisConfig50 !== undefined && object.redisConfig50 !== null)
      ? RedisConfig50.fromPartial(object.redisConfig50)
      : undefined;
    message.redisConfig60 = (object.redisConfig60 !== undefined && object.redisConfig60 !== null)
      ? RedisConfig60.fromPartial(object.redisConfig60)
      : undefined;
    message.redisConfig62 = (object.redisConfig62 !== undefined && object.redisConfig62 !== null)
      ? RedisConfig62.fromPartial(object.redisConfig62)
      : undefined;
    message.redisConfig70 = (object.redisConfig70 !== undefined && object.redisConfig70 !== null)
      ? RedisConfig70.fromPartial(object.redisConfig70)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    message.redis = (object.redis !== undefined && object.redis !== null)
      ? RedisConfig.fromPartial(object.redis)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

/** A set of methods for managing Redis clusters. */
export type ClusterServiceService = typeof ClusterServiceService;
export const ClusterServiceService = {
  /**
   * Returns the specified Redis cluster.
   *
   * To get the list of available Redis clusters, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) => Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /**
   * Retrieves the list of Redis clusters that belong
   * to the specified folder.
   */
  list: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) => Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) => Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a Redis cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) => Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified Redis cluster. */
  update: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) => Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified Redis cluster. */
  delete: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) => Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Start the specified Redis cluster. */
  start: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) => Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stop the specified Redis cluster. */
  stop: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) => Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Moves a Redis cluster to the specified folder. */
  move: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveClusterRequest) => Buffer.from(MoveClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a backup for the specified Redis cluster. */
  backup: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Backup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BackupClusterRequest) => Buffer.from(BackupClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a new Redis cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreClusterRequest) => Buffer.from(RestoreClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/RescheduleMaintenance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RescheduleMaintenanceRequest) =>
      Buffer.from(RescheduleMaintenanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Start a manual failover on the specified Redis cluster. */
  startFailover: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/StartFailover",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterFailoverRequest) =>
      Buffer.from(StartClusterFailoverRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterFailoverRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves logs for the specified Redis cluster. */
  listLogs: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListLogs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterLogsRequest) => Buffer.from(ListClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterLogsRequest.decode(value),
    responseSerialize: (value: ListClusterLogsResponse) => Buffer.from(ListClusterLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterLogsResponse.decode(value),
  },
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/StreamLogs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: StreamClusterLogsRequest) => Buffer.from(StreamClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StreamClusterLogsRequest.decode(value),
    responseSerialize: (value: StreamLogRecord) => Buffer.from(StreamLogRecord.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamLogRecord.decode(value),
  },
  /** Retrieves the list of operations for the specified cluster. */
  listOperations: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
  },
  /** Retrieves the list of available backups for the specified Redis cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListBackups",
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
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListHosts",
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
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/AddHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterHostsRequest) => Buffer.from(AddClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/DeleteHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterHostsRequest) =>
      Buffer.from(DeleteClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified hosts. */
  updateHosts: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/UpdateHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterHostsRequest) =>
      Buffer.from(UpdateClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified shard. */
  getShard: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/GetShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterShardRequest) => Buffer.from(GetClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterShardRequest.decode(value),
    responseSerialize: (value: Shard) => Buffer.from(Shard.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Shard.decode(value),
  },
  /** Retrieves a list of shards. */
  listShards: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListShards",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterShardsRequest) => Buffer.from(ListClusterShardsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterShardsRequest.decode(value),
    responseSerialize: (value: ListClusterShardsResponse) =>
      Buffer.from(ListClusterShardsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterShardsResponse.decode(value),
  },
  /** Creates a new shard. */
  addShard: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/AddShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterShardRequest) => Buffer.from(AddClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified shard. */
  deleteShard: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/DeleteShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterShardRequest) =>
      Buffer.from(DeleteClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Rebalances the cluster. Evenly distributes all the hash slots between the shards. */
  rebalance: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Rebalance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RebalanceClusterRequest) => Buffer.from(RebalanceClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RebalanceClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Enable Sharding on non sharded cluster */
  enableSharding: {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/EnableSharding",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EnableShardingClusterRequest) =>
      Buffer.from(EnableShardingClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EnableShardingClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Redis cluster.
   *
   * To get the list of available Redis clusters, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /**
   * Retrieves the list of Redis clusters that belong
   * to the specified folder.
   */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a Redis cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified Redis cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified Redis cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Start the specified Redis cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stop the specified Redis cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Moves a Redis cluster to the specified folder. */
  move: handleUnaryCall<MoveClusterRequest, Operation>;
  /** Creates a backup for the specified Redis cluster. */
  backup: handleUnaryCall<BackupClusterRequest, Operation>;
  /** Creates a new Redis cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
  /** Start a manual failover on the specified Redis cluster. */
  startFailover: handleUnaryCall<StartClusterFailoverRequest, Operation>;
  /** Retrieves logs for the specified Redis cluster. */
  listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
  /** Retrieves the list of operations for the specified cluster. */
  listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
  /** Retrieves the list of available backups for the specified Redis cluster. */
  listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Creates new hosts for a cluster. */
  addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
  /** Updates the specified hosts. */
  updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
  /** Returns the specified shard. */
  getShard: handleUnaryCall<GetClusterShardRequest, Shard>;
  /** Retrieves a list of shards. */
  listShards: handleUnaryCall<ListClusterShardsRequest, ListClusterShardsResponse>;
  /** Creates a new shard. */
  addShard: handleUnaryCall<AddClusterShardRequest, Operation>;
  /** Deletes the specified shard. */
  deleteShard: handleUnaryCall<DeleteClusterShardRequest, Operation>;
  /** Rebalances the cluster. Evenly distributes all the hash slots between the shards. */
  rebalance: handleUnaryCall<RebalanceClusterRequest, Operation>;
  /** Enable Sharding on non sharded cluster */
  enableSharding: handleUnaryCall<EnableShardingClusterRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified Redis cluster.
   *
   * To get the list of available Redis clusters, make a [List] request.
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
   * Retrieves the list of Redis clusters that belong
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
  /** Creates a Redis cluster in the specified folder. */
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
  /** Updates the specified Redis cluster. */
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
  /** Deletes the specified Redis cluster. */
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
  /** Start the specified Redis cluster. */
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
  /** Stop the specified Redis cluster. */
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
  /** Moves a Redis cluster to the specified folder. */
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
  /** Creates a backup for the specified Redis cluster. */
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
  /** Creates a new Redis cluster using the specified backup. */
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
  /** Start a manual failover on the specified Redis cluster. */
  startFailover(
    request: StartClusterFailoverRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  startFailover(
    request: StartClusterFailoverRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  startFailover(
    request: StartClusterFailoverRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Retrieves logs for the specified Redis cluster. */
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
  /** Retrieves the list of operations for the specified cluster. */
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
  /** Retrieves the list of available backups for the specified Redis cluster. */
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
  /** Retrieves a list of shards. */
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
  /** Creates a new shard. */
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
  /** Rebalances the cluster. Evenly distributes all the hash slots between the shards. */
  rebalance(
    request: RebalanceClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rebalance(
    request: RebalanceClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  rebalance(
    request: RebalanceClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Enable Sharding on non sharded cluster */
  enableSharding(
    request: EnableShardingClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  enableSharding(
    request: EnableShardingClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  enableSharding(
    request: EnableShardingClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.redis.v1.ClusterService",
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
