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
  ConnectionPoolerConfig,
  DiskSizeAutoscaling,
  Host,
  PerformanceDiagnostics,
  Resources,
} from "./cluster";
import { PostgresqlHostConfig10 } from "./config/host10";
import { PostgresqlHostConfig101C } from "./config/host10_1c";
import { PostgresqlHostConfig11 } from "./config/host11";
import { PostgresqlHostConfig111C } from "./config/host11_1c";
import { PostgresqlHostConfig12 } from "./config/host12";
import { PostgresqlHostConfig121C } from "./config/host12_1c";
import { PostgresqlHostConfig13 } from "./config/host13";
import { PostgresqlHostConfig131C } from "./config/host13_1c";
import { PostgresqlHostConfig14 } from "./config/host14";
import { PostgresqlHostConfig141C } from "./config/host14_1c";
import { PostgresqlHostConfig15 } from "./config/host15";
import { PostgresqlHostConfig151C } from "./config/host15_1c";
import { PostgresqlHostConfig16 } from "./config/host16";
import { PostgresqlHostConfig161C } from "./config/host16_1c";
import { PostgresqlHostConfig96 } from "./config/host9_6";
import { PostgresqlConfig10 } from "./config/postgresql10";
import { PostgresqlConfig101C } from "./config/postgresql10_1c";
import { PostgresqlConfig11 } from "./config/postgresql11";
import { PostgresqlConfig111C } from "./config/postgresql11_1c";
import { PostgresqlConfig12 } from "./config/postgresql12";
import { PostgresqlConfig121C } from "./config/postgresql12_1c";
import { PostgresqlConfig13 } from "./config/postgresql13";
import { PostgresqlConfig131C } from "./config/postgresql13_1c";
import { PostgresqlConfig14 } from "./config/postgresql14";
import { PostgresqlConfig141C } from "./config/postgresql14_1c";
import { PostgresqlConfig15 } from "./config/postgresql15";
import { PostgresqlConfig151C } from "./config/postgresql15_1c";
import { PostgresqlConfig16 } from "./config/postgresql16";
import { PostgresqlConfig161C } from "./config/postgresql16_1c";
import { PostgresqlConfig96 } from "./config/postgresql9_6";
import { DatabaseSpec } from "./database";
import { MaintenanceWindow } from "./maintenance";
import { UserSpec } from "./user";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.GetClusterRequest";
  /**
   * ID of the PostgreSQL Cluster resource to return.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersRequest";
  /**
   * ID of the folder to list PostgreSQL clusters in.
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersResponse";
  /** List of PostgreSQL Cluster resources. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest";
  /** ID of the folder to create the PostgreSQL cluster in. */
  folderId: string;
  /** Name of the PostgreSQL cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the PostgreSQL cluster. */
  description: string;
  /**
   * Custom labels for the PostgreSQL cluster as `` key:value `` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the PostgreSQL cluster. */
  environment: Cluster_Environment;
  /** Configuration and resources for hosts that should be created for the PostgreSQL cluster. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /** Descriptions of databases to be created in the PostgreSQL cluster. */
  databaseSpecs: DatabaseSpec[];
  /** Descriptions of database users to be created in the PostgreSQL cluster. */
  userSpecs: UserSpec[];
  /** Individual configurations for hosts that should be created for the PostgreSQL cluster. */
  hostSpecs: HostSpec[];
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata";
  /** ID of the PostgreSQL cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest";
  /**
   * ID of the PostgreSQL Cluster resource to update.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the PostgreSQL Cluster resource should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New description of the PostgreSQL cluster. */
  description: string;
  /**
   * Custom labels for the PostgreSQL cluster as `` key:value `` pairs. Maximum 64 per resource.
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
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata";
  /** ID of the PostgreSQL Cluster resource that is being updated. */
  clusterId: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest";
  /**
   * ID of the PostgreSQL cluster to delete.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata";
  /** ID of the PostgreSQL cluster that is being deleted. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterRequest";
  /** ID of the PostgreSQL cluster to start. */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterMetadata";
  /** ID of the PostgreSQL cluster. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterRequest";
  /** ID of the PostgreSQL cluster to stop. */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterMetadata";
  /** ID of the PostgreSQL cluster. */
  clusterId: string;
}

export interface MoveClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterRequest";
  /** ID of the PostgreSQL cluster to move. */
  clusterId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata";
  /** ID of the PostgreSQL cluster being moved. */
  clusterId: string;
  /** ID of the source folder. */
  sourceFolderId: string;
  /** ID of the destnation folder. */
  destinationFolderId: string;
}

export interface BackupClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterRequest";
  /**
   * ID of the PostgreSQL cluster to back up.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface BackupClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata";
  /** ID of the PostgreSQL cluster that is being backed up. */
  clusterId: string;
  /** ID of the PostgreSQL backup that is being created. */
  backupId: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest";
  /**
   * ID of the backup to create a cluster from.
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /** Timestamp of the moment to which the PostgreSQL cluster should be restored. */
  time?:
    | Date
    | undefined;
  /**
   * Flag that indicates whether a database should be restored to the first backup point
   * available just after the timestamp specified in the [time] field instead of just before.
   *
   * Possible values:
   * * false (default) - the restore point refers to the first backup moment before [time].
   * * true - the restore point refers to the first backup point after [time].
   */
  timeInclusive: boolean;
  /** Name of the new PostgreSQL cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the new PostgreSQL cluster. */
  description: string;
  /**
   * Custom labels for the PostgreSQL cluster as `` key:value `` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the new PostgreSQL cluster. */
  environment: Cluster_Environment;
  /** Configuration for the PostgreSQL cluster to be created. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /**
   * Configurations for PostgreSQL hosts that should be created for
   * the cluster that is being created from the backup.
   */
  hostSpecs: HostSpec[];
  /** ID of the network to create the PostgreSQL cluster in. */
  networkId: string;
  /** ID of the folder to create the PostgreSQL cluster in. */
  folderId: string;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata";
  /** ID of the new PostgreSQL cluster that is being created from a backup. */
  clusterId: string;
  /** ID of the backup that is being used for creating a cluster. */
  backupId: string;
}

export interface StartClusterFailoverRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest";
  /** ID of PostgreSQL cluster. */
  clusterId: string;
  /** New master host. Switch to the most up-to-date replica if not provided. */
  hostName: string;
}

export interface StartClusterFailoverMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata";
  /** ID of the PostgreSQL cluster being failovered. */
  clusterId: string;
}

export interface RescheduleMaintenanceRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest";
  /** ID of the PostgreSQL cluster to reschedule the maintenance operation for. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata";
  /** Required. ID of the PostgreSQL cluster. */
  clusterId: string;
  /** Required. The time until which this maintenance operation is to be delayed. */
  delayedUntil?: Date | undefined;
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord";
  /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  timestamp?:
    | Date
    | undefined;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest";
  /**
   * ID of the PostgreSQL cluster to request logs for.
   * To get the PostgreSQL cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Columns from the logs table to request.
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
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterLogsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
  /** Always return `next_page_token`, even if current page is empty. */
  alwaysNextPageToken: boolean;
}

export enum ListClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** POSTGRESQL - Logs of PostgreSQL activity. */
  POSTGRESQL = 1,
  /** POOLER - Logs of connection pooler activity. */
  POOLER = 2,
  UNRECOGNIZED = -1,
}

export function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "POSTGRESQL":
      return ListClusterLogsRequest_ServiceType.POSTGRESQL;
    case 2:
    case "POOLER":
      return ListClusterLogsRequest_ServiceType.POOLER;
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
    case ListClusterLogsRequest_ServiceType.POSTGRESQL:
      return "POSTGRESQL";
    case ListClusterLogsRequest_ServiceType.POOLER:
      return "POOLER";
    case ListClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse";
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
  $type: "yandex.cloud.mdb.postgresql.v1.StreamLogRecord";
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
  $type: "yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest";
  /** Required. ID of the PostgreSQL cluster. */
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
   * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname],
   * [LogRecord.logs.message.error_severity] (for POSTGRESQL service), [LogRecord.logs.message.level] (for POOLER service) fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
   * Examples of a filter:
   * `message.hostname='node1.db.cloud.yandex.net'`
   * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`
   */
  filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** POSTGRESQL - Logs of PostgreSQL activity. */
  POSTGRESQL = 1,
  /** POOLER - Logs of connection pooler activity. */
  POOLER = 2,
  UNRECOGNIZED = -1,
}

export function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "POSTGRESQL":
      return StreamClusterLogsRequest_ServiceType.POSTGRESQL;
    case 2:
    case "POOLER":
      return StreamClusterLogsRequest_ServiceType.POOLER;
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
    case StreamClusterLogsRequest_ServiceType.POSTGRESQL:
      return "POSTGRESQL";
    case StreamClusterLogsRequest_ServiceType.POOLER:
      return "POOLER";
    case StreamClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest";
  /** ID of the PostgreSQL Cluster resource to list operations for. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse";
  /** List of Operation resources for the specified PostgreSQL cluster. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest";
  /**
   * ID of the PostgreSQL cluster.
   * To get the PostgreSQL cluster ID use a [ClusterService.List] request.
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse";
  /** List of PostgreSQL Backup resources. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest";
  /**
   * ID of the PostgreSQL cluster.
   * To get the PostgreSQL cluster ID use a [ClusterService.List] request.
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse";
  /** List of Host resources. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest";
  /**
   * ID of the PostgreSQL cluster to add hosts to.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configurations for PostgreSQL hosts that should be added to the cluster. */
  hostSpecs: HostSpec[];
}

export interface AddClusterHostsMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata";
  /** ID of the PostgreSQL cluster to which the hosts are being added. */
  clusterId: string;
  /** Names of hosts that are being added to the cluster. */
  hostNames: string[];
}

export interface DeleteClusterHostsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest";
  /**
   * ID of the PostgreSQL cluster to remove hosts from.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Names of hosts to delete. */
  hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata";
  /** ID of the PostgreSQL cluster to remove hosts from. */
  clusterId: string;
  /** Names of hosts that are being deleted. */
  hostNames: string[];
}

export interface UpdateClusterHostsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest";
  /**
   * ID of the PostgreSQL cluster to update hosts in.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** New configurations to apply to hosts. */
  updateHostSpecs: UpdateHostSpec[];
}

export interface UpdateClusterHostsMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata";
  /** ID of the PostgreSQL cluster to update hosts in. */
  clusterId: string;
  /** Names of hosts that are being updated. */
  hostNames: string[];
}

export interface UpdateHostSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateHostSpec";
  /**
   * Name of the host to update.
   * To get the PostgreSQL host name, use a [ClusterService.ListHosts] request.
   */
  hostName: string;
  /**
   * [Host.name] of the host to be used as the replication source (for cascading replication).
   * To get the PostgreSQL host name, use a [ClusterService.ListHosts] request.
   */
  replicationSource: string;
  /**
   * The host with the highest priority is the synchronous replica. All others are asynchronous.
   * The synchronous replica replaces the master when needed.
   *
   * When a replica becomes the master, its priority is ignored.
   */
  priority?:
    | number
    | undefined;
  /** Configuration of a PostgreSQL server for the host. */
  configSpec?:
    | ConfigHostSpec
    | undefined;
  /** Field mask that specifies which fields of the PostgreSQL host should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Whether the host should get a public IP address on creation. */
  assignPublicIp: boolean;
}

export interface HostSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.HostSpec";
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
  /** [Host.name] of the host to be used as the replication source (for cascading replication). */
  replicationSource: string;
  /**
   * Priority of the host as a replica. A higher value corresponds to higher priority.
   *
   * The host with the highest priority is the synchronous replica. All others are asynchronous.
   * The synchronous replica replaces the master when needed.
   *
   * When a replica becomes the master, its priority is ignored.
   */
  priority?:
    | number
    | undefined;
  /** Configuration of a PostgreSQL server for the host. */
  configSpec?: ConfigHostSpec | undefined;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigSpec";
  /**
   * Version of PostgreSQL used in the cluster.
   * Possible values: `9.6`, `10`, `10_1c`, `11`, `12`, `13`, `14`, `15`
   */
  version: string;
  /** Configuration for a PostgreSQL 9.6 cluster. */
  postgresqlConfig96?:
    | PostgresqlConfig96
    | undefined;
  /** Configuration for a PostgreSQL 10 1C cluster. */
  postgresqlConfig101c?:
    | PostgresqlConfig101C
    | undefined;
  /** Configuration for a PostgreSQL 10 cluster. */
  postgresqlConfig10?:
    | PostgresqlConfig10
    | undefined;
  /** Configuration for a PostgreSQL 11 cluster. */
  postgresqlConfig11?:
    | PostgresqlConfig11
    | undefined;
  /** Configuration for a PostgreSQL 11 1C cluster. */
  postgresqlConfig111c?:
    | PostgresqlConfig111C
    | undefined;
  /** Configuration for a PostgreSQL 12 cluster. */
  postgresqlConfig12?:
    | PostgresqlConfig12
    | undefined;
  /** Configuration for a PostgreSQL 12 1C cluster. */
  postgresqlConfig121c?:
    | PostgresqlConfig121C
    | undefined;
  /** Configuration for a PostgreSQL 13 cluster. */
  postgresqlConfig13?:
    | PostgresqlConfig13
    | undefined;
  /** Configuration for a PostgreSQL 13 1C cluster. */
  postgresqlConfig131c?:
    | PostgresqlConfig131C
    | undefined;
  /** Configuration for a PostgreSQL 14 cluster. */
  postgresqlConfig14?:
    | PostgresqlConfig14
    | undefined;
  /** Configuration for a PostgreSQL 14 1C cluster. */
  postgresqlConfig141c?:
    | PostgresqlConfig141C
    | undefined;
  /** Configuration for a PostgreSQL 15 cluster. */
  postgresqlConfig15?:
    | PostgresqlConfig15
    | undefined;
  /** Configuration for a PostgreSQL 15 1C cluster. */
  postgresqlConfig151c?:
    | PostgresqlConfig151C
    | undefined;
  /** Configuration for a PostgreSQL 16 cluster. */
  postgresqlConfig16?:
    | PostgresqlConfig16
    | undefined;
  /** Configuration for a PostgreSQL 16 1C cluster. */
  postgresqlConfig161c?:
    | PostgresqlConfig161C
    | undefined;
  /** Configuration of the connection pooler. */
  poolerConfig?:
    | ConnectionPoolerConfig
    | undefined;
  /** Resources allocated to PostgreSQL hosts. */
  resources?:
    | Resources
    | undefined;
  /** Configuration setting which enables/disables autofailover in cluster. */
  autofailover?:
    | boolean
    | undefined;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /** Retention policy of automated backups. */
  backupRetainPeriodDays?:
    | number
    | undefined;
  /** Access policy to DB */
  access?:
    | Access
    | undefined;
  /** Configuration of the performance diagnostics service. */
  performanceDiagnostics?:
    | PerformanceDiagnostics
    | undefined;
  /** Disk size autoscaling */
  diskSizeAutoscaling?: DiskSizeAutoscaling | undefined;
}

export interface ConfigHostSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigHostSpec";
  /** Configuration for a host with PostgreSQL 9.6 server deployed. */
  postgresqlConfig96?:
    | PostgresqlHostConfig96
    | undefined;
  /** Configuration for a host with PostgreSQL 10 1C server deployed. */
  postgresqlConfig101c?:
    | PostgresqlHostConfig101C
    | undefined;
  /** Configuration for a host with PostgreSQL 10 server deployed. */
  postgresqlConfig10?:
    | PostgresqlHostConfig10
    | undefined;
  /** Configuration for a host with PostgreSQL 11 server deployed. */
  postgresqlConfig11?:
    | PostgresqlHostConfig11
    | undefined;
  /** Configuration for a host with PostgreSQL 11 1C server deployed. */
  postgresqlConfig111c?:
    | PostgresqlHostConfig111C
    | undefined;
  /** Configuration for a host with PostgreSQL 12 server deployed. */
  postgresqlConfig12?:
    | PostgresqlHostConfig12
    | undefined;
  /** Configuration for a host with PostgreSQL 12 1C server deployed. */
  postgresqlConfig121c?:
    | PostgresqlHostConfig121C
    | undefined;
  /** Configuration for a host with PostgreSQL 13 server deployed. */
  postgresqlConfig13?:
    | PostgresqlHostConfig13
    | undefined;
  /** Configuration for a host with PostgreSQL 13 1C server deployed. */
  postgresqlConfig131c?:
    | PostgresqlHostConfig131C
    | undefined;
  /** Configuration for a host with PostgreSQL 14 server deployed. */
  postgresqlConfig14?:
    | PostgresqlHostConfig14
    | undefined;
  /** Configuration for a host with PostgreSQL 14 1C server deployed. */
  postgresqlConfig141c?:
    | PostgresqlHostConfig141C
    | undefined;
  /** Configuration for a host with PostgreSQL 15 server deployed. */
  postgresqlConfig15?:
    | PostgresqlHostConfig15
    | undefined;
  /** Configuration for a host with PostgreSQL 15 1C server deployed. */
  postgresqlConfig151c?:
    | PostgresqlHostConfig151C
    | undefined;
  /** Configuration for a host with PostgreSQL 16 server deployed. */
  postgresqlConfig16?:
    | PostgresqlHostConfig16
    | undefined;
  /** Configuration for a host with PostgreSQL 16 1C server deployed. */
  postgresqlConfig161c?: PostgresqlHostConfig161C | undefined;
}

function createBaseGetClusterRequest(): GetClusterRequest {
  return { $type: "yandex.cloud.mdb.postgresql.v1.GetClusterRequest", clusterId: "" };
}

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.GetClusterRequest" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.ListClustersResponse", clusters: [], nextPageToken: "" };
}

export const ListClustersResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersResponse" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest",
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
    securityGroupIds: [],
    deletionProtection: false,
    hostGroupIds: [],
  };
}

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry",
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
    for (const v of message.securityGroupIds) {
      writer.uint32(90).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(96).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(106).string(v!);
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
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      hostGroupIds: globalThis.Array.isArray(object?.hostGroupIds)
        ? object.hostGroupIds.map((e: any) => globalThis.String(e))
        : [],
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
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.hostGroupIds?.length) {
      obj.hostGroupIds = message.hostGroupIds;
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
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

function createBaseCreateClusterRequest_LabelsEntry(): CreateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata", clusterId: "" };
}

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest",
    clusterId: "",
    updateMask: undefined,
    description: "",
    labels: {},
    configSpec: undefined,
    name: "",
    maintenanceWindow: undefined,
    securityGroupIds: [],
    deletionProtection: false,
  };
}

export const UpdateClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry",
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
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

function createBaseUpdateClusterRequest_LabelsEntry(): UpdateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata", clusterId: "" };
}

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest", clusterId: "" };
}

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata", clusterId: "" };
}

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.StartClusterRequest", clusterId: "" };
}

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.StartClusterMetadata", clusterId: "" };
}

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.StopClusterRequest", clusterId: "" };
}

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.StopClusterMetadata", clusterId: "" };
}

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterRequest", clusterId: "", destinationFolderId: "" };
}

export const MoveClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterRequest" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
  };
}

export const MoveClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata" as const,

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

function createBaseBackupClusterRequest(): BackupClusterRequest {
  return { $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterRequest", clusterId: "" };
}

export const BackupClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata", clusterId: "", backupId: "" };
}

export const BackupClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata" as const,

  encode(message: BackupClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
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

  fromJSON(object: any): BackupClusterMetadata {
    return {
      $type: BackupClusterMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
    };
  },

  toJSON(message: BackupClusterMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    return obj;
  },

  create(base?: DeepPartial<BackupClusterMetadata>): BackupClusterMetadata {
    return BackupClusterMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BackupClusterMetadata>): BackupClusterMetadata {
    const message = createBaseBackupClusterMetadata();
    message.clusterId = object.clusterId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BackupClusterMetadata.$type, BackupClusterMetadata);

function createBaseRestoreClusterRequest(): RestoreClusterRequest {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest",
    backupId: "",
    time: undefined,
    timeInclusive: false,
    name: "",
    description: "",
    labels: {},
    environment: 0,
    configSpec: undefined,
    hostSpecs: [],
    networkId: "",
    folderId: "",
    securityGroupIds: [],
    deletionProtection: false,
    hostGroupIds: [],
  };
}

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest" as const,

  encode(message: RestoreClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (message.timeInclusive === true) {
      writer.uint32(24).bool(message.timeInclusive);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RestoreClusterRequest_LabelsEntry.encode({
        $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(56).int32(message.environment);
    }
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(82).string(message.networkId);
    }
    if (message.folderId !== "") {
      writer.uint32(90).string(message.folderId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(98).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(104).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(114).string(v!);
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

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timeInclusive = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = RestoreClusterRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.environment = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
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

          message.folderId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.securityGroupIds.push(reader.string());
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

          message.hostGroupIds.push(reader.string());
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
      timeInclusive: isSet(object.timeInclusive) ? globalThis.Boolean(object.timeInclusive) : false,
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
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
      hostGroupIds: globalThis.Array.isArray(object?.hostGroupIds)
        ? object.hostGroupIds.map((e: any) => globalThis.String(e))
        : [],
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
    if (message.timeInclusive === true) {
      obj.timeInclusive = message.timeInclusive;
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
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    if (message.hostGroupIds?.length) {
      obj.hostGroupIds = message.hostGroupIds;
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
    message.timeInclusive = object.timeInclusive ?? false;
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
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

function createBaseRestoreClusterRequest_LabelsEntry(): RestoreClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry", key: "", value: "" };
}

export const RestoreClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata", clusterId: "", backupId: "" };
}

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest", clusterId: "", hostName: "" };
}

export const StartClusterFailoverRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest" as const,

  encode(message: StartClusterFailoverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.hostName !== "") {
      writer.uint32(18).string(message.hostName);
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

          message.hostName = reader.string();
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
      hostName: isSet(object.hostName) ? globalThis.String(object.hostName) : "",
    };
  },

  toJSON(message: StartClusterFailoverRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostName !== "") {
      obj.hostName = message.hostName;
    }
    return obj;
  },

  create(base?: DeepPartial<StartClusterFailoverRequest>): StartClusterFailoverRequest {
    return StartClusterFailoverRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartClusterFailoverRequest>): StartClusterFailoverRequest {
    const message = createBaseStartClusterFailoverRequest();
    message.clusterId = object.clusterId ?? "";
    message.hostName = object.hostName ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterFailoverRequest.$type, StartClusterFailoverRequest);

function createBaseStartClusterFailoverMetadata(): StartClusterFailoverMetadata {
  return { $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata", clusterId: "" };
}

export const StartClusterFailoverMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata" as const,

  encode(message: StartClusterFailoverMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
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
    };
  },

  toJSON(message: StartClusterFailoverMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<StartClusterFailoverMetadata>): StartClusterFailoverMetadata {
    return StartClusterFailoverMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartClusterFailoverMetadata>): StartClusterFailoverMetadata {
    const message = createBaseStartClusterFailoverMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterFailoverMetadata.$type, StartClusterFailoverMetadata);

function createBaseRescheduleMaintenanceRequest(): RescheduleMaintenanceRequest {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
    delayedUntil: undefined,
  };
}

export const RescheduleMaintenanceRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata",
    clusterId: "",
    delayedUntil: undefined,
  };
}

export const RescheduleMaintenanceMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.LogRecord", timestamp: undefined, message: {} };
}

export const LogRecord = {
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord" as const,

  encode(message: LogRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.message).forEach(([key, value]) => {
      LogRecord_MessageEntry.encode({
        $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry",
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
  return { $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry", key: "", value: "" };
}

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: [],
    serviceType: 0,
    fromTime: undefined,
    toTime: undefined,
    pageSize: 0,
    pageToken: "",
    alwaysNextPageToken: false,
  };
}

export const ListClusterLogsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest" as const,

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
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsRequest.$type, ListClusterLogsRequest);

function createBaseListClusterLogsResponse(): ListClusterLogsResponse {
  return { $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse", logs: [], nextPageToken: "" };
}

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.StreamLogRecord", record: undefined, nextRecordToken: "" };
}

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.postgresql.v1.StreamLogRecord" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest",
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
  $type: "yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse" as const,

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
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse", backups: [], nextPageToken: "" };
}

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse", hosts: [], nextPageToken: "" };
}

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest", clusterId: "", hostSpecs: [] };
}

export const AddClusterHostsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const AddClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest", clusterId: "", hostNames: [] };
}

export const DeleteClusterHostsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const DeleteClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata" as const,

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

function createBaseUpdateClusterHostsRequest(): UpdateClusterHostsRequest {
  return { $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest", clusterId: "", updateHostSpecs: [] };
}

export const UpdateClusterHostsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const UpdateClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata" as const,

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

function createBaseUpdateHostSpec(): UpdateHostSpec {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateHostSpec",
    hostName: "",
    replicationSource: "",
    priority: undefined,
    configSpec: undefined,
    updateMask: undefined,
    assignPublicIp: false,
  };
}

export const UpdateHostSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateHostSpec" as const,

  encode(message: UpdateHostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostName !== "") {
      writer.uint32(10).string(message.hostName);
    }
    if (message.replicationSource !== "") {
      writer.uint32(18).string(message.replicationSource);
    }
    if (message.priority !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.priority! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.configSpec !== undefined) {
      ConfigHostSpec.encode(message.configSpec, writer.uint32(34).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(42).fork()).ldelim();
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
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

          message.replicationSource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.priority = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.configSpec = ConfigHostSpec.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
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

  fromJSON(object: any): UpdateHostSpec {
    return {
      $type: UpdateHostSpec.$type,
      hostName: isSet(object.hostName) ? globalThis.String(object.hostName) : "",
      replicationSource: isSet(object.replicationSource) ? globalThis.String(object.replicationSource) : "",
      priority: isSet(object.priority) ? Number(object.priority) : undefined,
      configSpec: isSet(object.configSpec) ? ConfigHostSpec.fromJSON(object.configSpec) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
    };
  },

  toJSON(message: UpdateHostSpec): unknown {
    const obj: any = {};
    if (message.hostName !== "") {
      obj.hostName = message.hostName;
    }
    if (message.replicationSource !== "") {
      obj.replicationSource = message.replicationSource;
    }
    if (message.priority !== undefined) {
      obj.priority = message.priority;
    }
    if (message.configSpec !== undefined) {
      obj.configSpec = ConfigHostSpec.toJSON(message.configSpec);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.assignPublicIp === true) {
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
    message.replicationSource = object.replicationSource ?? "";
    message.priority = object.priority ?? undefined;
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? ConfigHostSpec.fromPartial(object.configSpec)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateHostSpec.$type, UpdateHostSpec);

function createBaseHostSpec(): HostSpec {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.HostSpec",
    zoneId: "",
    subnetId: "",
    assignPublicIp: false,
    replicationSource: "",
    priority: undefined,
    configSpec: undefined,
  };
}

export const HostSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.HostSpec" as const,

  encode(message: HostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(24).bool(message.assignPublicIp);
    }
    if (message.replicationSource !== "") {
      writer.uint32(34).string(message.replicationSource);
    }
    if (message.priority !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.priority! }, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.configSpec !== undefined) {
      ConfigHostSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
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
          if (tag !== 24) {
            break;
          }

          message.assignPublicIp = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.replicationSource = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.priority = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.configSpec = ConfigHostSpec.decode(reader, reader.uint32());
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
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      replicationSource: isSet(object.replicationSource) ? globalThis.String(object.replicationSource) : "",
      priority: isSet(object.priority) ? Number(object.priority) : undefined,
      configSpec: isSet(object.configSpec) ? ConfigHostSpec.fromJSON(object.configSpec) : undefined,
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
    if (message.assignPublicIp === true) {
      obj.assignPublicIp = message.assignPublicIp;
    }
    if (message.replicationSource !== "") {
      obj.replicationSource = message.replicationSource;
    }
    if (message.priority !== undefined) {
      obj.priority = message.priority;
    }
    if (message.configSpec !== undefined) {
      obj.configSpec = ConfigHostSpec.toJSON(message.configSpec);
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
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.replicationSource = object.replicationSource ?? "";
    message.priority = object.priority ?? undefined;
    message.configSpec = (object.configSpec !== undefined && object.configSpec !== null)
      ? ConfigHostSpec.fromPartial(object.configSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HostSpec.$type, HostSpec);

function createBaseConfigSpec(): ConfigSpec {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.ConfigSpec",
    version: "",
    postgresqlConfig96: undefined,
    postgresqlConfig101c: undefined,
    postgresqlConfig10: undefined,
    postgresqlConfig11: undefined,
    postgresqlConfig111c: undefined,
    postgresqlConfig12: undefined,
    postgresqlConfig121c: undefined,
    postgresqlConfig13: undefined,
    postgresqlConfig131c: undefined,
    postgresqlConfig14: undefined,
    postgresqlConfig141c: undefined,
    postgresqlConfig15: undefined,
    postgresqlConfig151c: undefined,
    postgresqlConfig16: undefined,
    postgresqlConfig161c: undefined,
    poolerConfig: undefined,
    resources: undefined,
    autofailover: undefined,
    backupWindowStart: undefined,
    backupRetainPeriodDays: undefined,
    access: undefined,
    performanceDiagnostics: undefined,
    diskSizeAutoscaling: undefined,
  };
}

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigSpec" as const,

  encode(message: ConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.postgresqlConfig96 !== undefined) {
      PostgresqlConfig96.encode(message.postgresqlConfig96, writer.uint32(18).fork()).ldelim();
    }
    if (message.postgresqlConfig101c !== undefined) {
      PostgresqlConfig101C.encode(message.postgresqlConfig101c, writer.uint32(82).fork()).ldelim();
    }
    if (message.postgresqlConfig10 !== undefined) {
      PostgresqlConfig10.encode(message.postgresqlConfig10, writer.uint32(26).fork()).ldelim();
    }
    if (message.postgresqlConfig11 !== undefined) {
      PostgresqlConfig11.encode(message.postgresqlConfig11, writer.uint32(58).fork()).ldelim();
    }
    if (message.postgresqlConfig111c !== undefined) {
      PostgresqlConfig111C.encode(message.postgresqlConfig111c, writer.uint32(106).fork()).ldelim();
    }
    if (message.postgresqlConfig12 !== undefined) {
      PostgresqlConfig12.encode(message.postgresqlConfig12, writer.uint32(90).fork()).ldelim();
    }
    if (message.postgresqlConfig121c !== undefined) {
      PostgresqlConfig121C.encode(message.postgresqlConfig121c, writer.uint32(114).fork()).ldelim();
    }
    if (message.postgresqlConfig13 !== undefined) {
      PostgresqlConfig13.encode(message.postgresqlConfig13, writer.uint32(122).fork()).ldelim();
    }
    if (message.postgresqlConfig131c !== undefined) {
      PostgresqlConfig131C.encode(message.postgresqlConfig131c, writer.uint32(146).fork()).ldelim();
    }
    if (message.postgresqlConfig14 !== undefined) {
      PostgresqlConfig14.encode(message.postgresqlConfig14, writer.uint32(130).fork()).ldelim();
    }
    if (message.postgresqlConfig141c !== undefined) {
      PostgresqlConfig141C.encode(message.postgresqlConfig141c, writer.uint32(154).fork()).ldelim();
    }
    if (message.postgresqlConfig15 !== undefined) {
      PostgresqlConfig15.encode(message.postgresqlConfig15, writer.uint32(170).fork()).ldelim();
    }
    if (message.postgresqlConfig151c !== undefined) {
      PostgresqlConfig151C.encode(message.postgresqlConfig151c, writer.uint32(178).fork()).ldelim();
    }
    if (message.postgresqlConfig16 !== undefined) {
      PostgresqlConfig16.encode(message.postgresqlConfig16, writer.uint32(194).fork()).ldelim();
    }
    if (message.postgresqlConfig161c !== undefined) {
      PostgresqlConfig161C.encode(message.postgresqlConfig161c, writer.uint32(202).fork()).ldelim();
    }
    if (message.poolerConfig !== undefined) {
      ConnectionPoolerConfig.encode(message.poolerConfig, writer.uint32(34).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.autofailover !== undefined) {
      BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.autofailover! }, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(66).fork()).ldelim();
    }
    if (message.backupRetainPeriodDays !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backupRetainPeriodDays! },
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(74).fork()).ldelim();
    }
    if (message.performanceDiagnostics !== undefined) {
      PerformanceDiagnostics.encode(message.performanceDiagnostics, writer.uint32(98).fork()).ldelim();
    }
    if (message.diskSizeAutoscaling !== undefined) {
      DiskSizeAutoscaling.encode(message.diskSizeAutoscaling, writer.uint32(186).fork()).ldelim();
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

          message.postgresqlConfig96 = PostgresqlConfig96.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.postgresqlConfig101c = PostgresqlConfig101C.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.postgresqlConfig10 = PostgresqlConfig10.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.postgresqlConfig11 = PostgresqlConfig11.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.postgresqlConfig111c = PostgresqlConfig111C.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.postgresqlConfig12 = PostgresqlConfig12.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.postgresqlConfig121c = PostgresqlConfig121C.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.postgresqlConfig13 = PostgresqlConfig13.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.postgresqlConfig131c = PostgresqlConfig131C.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.postgresqlConfig14 = PostgresqlConfig14.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.postgresqlConfig141c = PostgresqlConfig141C.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.postgresqlConfig15 = PostgresqlConfig15.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.postgresqlConfig151c = PostgresqlConfig151C.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.postgresqlConfig16 = PostgresqlConfig16.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.postgresqlConfig161c = PostgresqlConfig161C.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.poolerConfig = ConnectionPoolerConfig.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.autofailover = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.backupRetainPeriodDays = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.access = Access.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.performanceDiagnostics = PerformanceDiagnostics.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(reader, reader.uint32());
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
      postgresqlConfig96: isSet(object.postgresqlConfig_9_6)
        ? PostgresqlConfig96.fromJSON(object.postgresqlConfig_9_6)
        : undefined,
      postgresqlConfig101c: isSet(object.postgresqlConfig_10_1c)
        ? PostgresqlConfig101C.fromJSON(object.postgresqlConfig_10_1c)
        : undefined,
      postgresqlConfig10: isSet(object.postgresqlConfig_10)
        ? PostgresqlConfig10.fromJSON(object.postgresqlConfig_10)
        : undefined,
      postgresqlConfig11: isSet(object.postgresqlConfig_11)
        ? PostgresqlConfig11.fromJSON(object.postgresqlConfig_11)
        : undefined,
      postgresqlConfig111c: isSet(object.postgresqlConfig_11_1c)
        ? PostgresqlConfig111C.fromJSON(object.postgresqlConfig_11_1c)
        : undefined,
      postgresqlConfig12: isSet(object.postgresqlConfig_12)
        ? PostgresqlConfig12.fromJSON(object.postgresqlConfig_12)
        : undefined,
      postgresqlConfig121c: isSet(object.postgresqlConfig_12_1c)
        ? PostgresqlConfig121C.fromJSON(object.postgresqlConfig_12_1c)
        : undefined,
      postgresqlConfig13: isSet(object.postgresqlConfig_13)
        ? PostgresqlConfig13.fromJSON(object.postgresqlConfig_13)
        : undefined,
      postgresqlConfig131c: isSet(object.postgresqlConfig_13_1c)
        ? PostgresqlConfig131C.fromJSON(object.postgresqlConfig_13_1c)
        : undefined,
      postgresqlConfig14: isSet(object.postgresqlConfig_14)
        ? PostgresqlConfig14.fromJSON(object.postgresqlConfig_14)
        : undefined,
      postgresqlConfig141c: isSet(object.postgresqlConfig_14_1c)
        ? PostgresqlConfig141C.fromJSON(object.postgresqlConfig_14_1c)
        : undefined,
      postgresqlConfig15: isSet(object.postgresqlConfig_15)
        ? PostgresqlConfig15.fromJSON(object.postgresqlConfig_15)
        : undefined,
      postgresqlConfig151c: isSet(object.postgresqlConfig_15_1c)
        ? PostgresqlConfig151C.fromJSON(object.postgresqlConfig_15_1c)
        : undefined,
      postgresqlConfig16: isSet(object.postgresqlConfig_16)
        ? PostgresqlConfig16.fromJSON(object.postgresqlConfig_16)
        : undefined,
      postgresqlConfig161c: isSet(object.postgresqlConfig_16_1c)
        ? PostgresqlConfig161C.fromJSON(object.postgresqlConfig_16_1c)
        : undefined,
      poolerConfig: isSet(object.poolerConfig) ? ConnectionPoolerConfig.fromJSON(object.poolerConfig) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      autofailover: isSet(object.autofailover) ? Boolean(object.autofailover) : undefined,
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      backupRetainPeriodDays: isSet(object.backupRetainPeriodDays) ? Number(object.backupRetainPeriodDays) : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
      performanceDiagnostics: isSet(object.performanceDiagnostics)
        ? PerformanceDiagnostics.fromJSON(object.performanceDiagnostics)
        : undefined,
      diskSizeAutoscaling: isSet(object.diskSizeAutoscaling)
        ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
        : undefined,
    };
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.postgresqlConfig96 !== undefined) {
      obj.postgresqlConfig_9_6 = PostgresqlConfig96.toJSON(message.postgresqlConfig96);
    }
    if (message.postgresqlConfig101c !== undefined) {
      obj.postgresqlConfig_10_1c = PostgresqlConfig101C.toJSON(message.postgresqlConfig101c);
    }
    if (message.postgresqlConfig10 !== undefined) {
      obj.postgresqlConfig_10 = PostgresqlConfig10.toJSON(message.postgresqlConfig10);
    }
    if (message.postgresqlConfig11 !== undefined) {
      obj.postgresqlConfig_11 = PostgresqlConfig11.toJSON(message.postgresqlConfig11);
    }
    if (message.postgresqlConfig111c !== undefined) {
      obj.postgresqlConfig_11_1c = PostgresqlConfig111C.toJSON(message.postgresqlConfig111c);
    }
    if (message.postgresqlConfig12 !== undefined) {
      obj.postgresqlConfig_12 = PostgresqlConfig12.toJSON(message.postgresqlConfig12);
    }
    if (message.postgresqlConfig121c !== undefined) {
      obj.postgresqlConfig_12_1c = PostgresqlConfig121C.toJSON(message.postgresqlConfig121c);
    }
    if (message.postgresqlConfig13 !== undefined) {
      obj.postgresqlConfig_13 = PostgresqlConfig13.toJSON(message.postgresqlConfig13);
    }
    if (message.postgresqlConfig131c !== undefined) {
      obj.postgresqlConfig_13_1c = PostgresqlConfig131C.toJSON(message.postgresqlConfig131c);
    }
    if (message.postgresqlConfig14 !== undefined) {
      obj.postgresqlConfig_14 = PostgresqlConfig14.toJSON(message.postgresqlConfig14);
    }
    if (message.postgresqlConfig141c !== undefined) {
      obj.postgresqlConfig_14_1c = PostgresqlConfig141C.toJSON(message.postgresqlConfig141c);
    }
    if (message.postgresqlConfig15 !== undefined) {
      obj.postgresqlConfig_15 = PostgresqlConfig15.toJSON(message.postgresqlConfig15);
    }
    if (message.postgresqlConfig151c !== undefined) {
      obj.postgresqlConfig_15_1c = PostgresqlConfig151C.toJSON(message.postgresqlConfig151c);
    }
    if (message.postgresqlConfig16 !== undefined) {
      obj.postgresqlConfig_16 = PostgresqlConfig16.toJSON(message.postgresqlConfig16);
    }
    if (message.postgresqlConfig161c !== undefined) {
      obj.postgresqlConfig_16_1c = PostgresqlConfig161C.toJSON(message.postgresqlConfig161c);
    }
    if (message.poolerConfig !== undefined) {
      obj.poolerConfig = ConnectionPoolerConfig.toJSON(message.poolerConfig);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    if (message.autofailover !== undefined) {
      obj.autofailover = message.autofailover;
    }
    if (message.backupWindowStart !== undefined) {
      obj.backupWindowStart = TimeOfDay.toJSON(message.backupWindowStart);
    }
    if (message.backupRetainPeriodDays !== undefined) {
      obj.backupRetainPeriodDays = message.backupRetainPeriodDays;
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    if (message.performanceDiagnostics !== undefined) {
      obj.performanceDiagnostics = PerformanceDiagnostics.toJSON(message.performanceDiagnostics);
    }
    if (message.diskSizeAutoscaling !== undefined) {
      obj.diskSizeAutoscaling = DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec>): ConfigSpec {
    return ConfigSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec {
    const message = createBaseConfigSpec();
    message.version = object.version ?? "";
    message.postgresqlConfig96 = (object.postgresqlConfig96 !== undefined && object.postgresqlConfig96 !== null)
      ? PostgresqlConfig96.fromPartial(object.postgresqlConfig96)
      : undefined;
    message.postgresqlConfig101c = (object.postgresqlConfig101c !== undefined && object.postgresqlConfig101c !== null)
      ? PostgresqlConfig101C.fromPartial(object.postgresqlConfig101c)
      : undefined;
    message.postgresqlConfig10 = (object.postgresqlConfig10 !== undefined && object.postgresqlConfig10 !== null)
      ? PostgresqlConfig10.fromPartial(object.postgresqlConfig10)
      : undefined;
    message.postgresqlConfig11 = (object.postgresqlConfig11 !== undefined && object.postgresqlConfig11 !== null)
      ? PostgresqlConfig11.fromPartial(object.postgresqlConfig11)
      : undefined;
    message.postgresqlConfig111c = (object.postgresqlConfig111c !== undefined && object.postgresqlConfig111c !== null)
      ? PostgresqlConfig111C.fromPartial(object.postgresqlConfig111c)
      : undefined;
    message.postgresqlConfig12 = (object.postgresqlConfig12 !== undefined && object.postgresqlConfig12 !== null)
      ? PostgresqlConfig12.fromPartial(object.postgresqlConfig12)
      : undefined;
    message.postgresqlConfig121c = (object.postgresqlConfig121c !== undefined && object.postgresqlConfig121c !== null)
      ? PostgresqlConfig121C.fromPartial(object.postgresqlConfig121c)
      : undefined;
    message.postgresqlConfig13 = (object.postgresqlConfig13 !== undefined && object.postgresqlConfig13 !== null)
      ? PostgresqlConfig13.fromPartial(object.postgresqlConfig13)
      : undefined;
    message.postgresqlConfig131c = (object.postgresqlConfig131c !== undefined && object.postgresqlConfig131c !== null)
      ? PostgresqlConfig131C.fromPartial(object.postgresqlConfig131c)
      : undefined;
    message.postgresqlConfig14 = (object.postgresqlConfig14 !== undefined && object.postgresqlConfig14 !== null)
      ? PostgresqlConfig14.fromPartial(object.postgresqlConfig14)
      : undefined;
    message.postgresqlConfig141c = (object.postgresqlConfig141c !== undefined && object.postgresqlConfig141c !== null)
      ? PostgresqlConfig141C.fromPartial(object.postgresqlConfig141c)
      : undefined;
    message.postgresqlConfig15 = (object.postgresqlConfig15 !== undefined && object.postgresqlConfig15 !== null)
      ? PostgresqlConfig15.fromPartial(object.postgresqlConfig15)
      : undefined;
    message.postgresqlConfig151c = (object.postgresqlConfig151c !== undefined && object.postgresqlConfig151c !== null)
      ? PostgresqlConfig151C.fromPartial(object.postgresqlConfig151c)
      : undefined;
    message.postgresqlConfig16 = (object.postgresqlConfig16 !== undefined && object.postgresqlConfig16 !== null)
      ? PostgresqlConfig16.fromPartial(object.postgresqlConfig16)
      : undefined;
    message.postgresqlConfig161c = (object.postgresqlConfig161c !== undefined && object.postgresqlConfig161c !== null)
      ? PostgresqlConfig161C.fromPartial(object.postgresqlConfig161c)
      : undefined;
    message.poolerConfig = (object.poolerConfig !== undefined && object.poolerConfig !== null)
      ? ConnectionPoolerConfig.fromPartial(object.poolerConfig)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    message.autofailover = object.autofailover ?? undefined;
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    message.performanceDiagnostics =
      (object.performanceDiagnostics !== undefined && object.performanceDiagnostics !== null)
        ? PerformanceDiagnostics.fromPartial(object.performanceDiagnostics)
        : undefined;
    message.diskSizeAutoscaling = (object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null)
      ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

function createBaseConfigHostSpec(): ConfigHostSpec {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.ConfigHostSpec",
    postgresqlConfig96: undefined,
    postgresqlConfig101c: undefined,
    postgresqlConfig10: undefined,
    postgresqlConfig11: undefined,
    postgresqlConfig111c: undefined,
    postgresqlConfig12: undefined,
    postgresqlConfig121c: undefined,
    postgresqlConfig13: undefined,
    postgresqlConfig131c: undefined,
    postgresqlConfig14: undefined,
    postgresqlConfig141c: undefined,
    postgresqlConfig15: undefined,
    postgresqlConfig151c: undefined,
    postgresqlConfig16: undefined,
    postgresqlConfig161c: undefined,
  };
}

export const ConfigHostSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigHostSpec" as const,

  encode(message: ConfigHostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postgresqlConfig96 !== undefined) {
      PostgresqlHostConfig96.encode(message.postgresqlConfig96, writer.uint32(10).fork()).ldelim();
    }
    if (message.postgresqlConfig101c !== undefined) {
      PostgresqlHostConfig101C.encode(message.postgresqlConfig101c, writer.uint32(34).fork()).ldelim();
    }
    if (message.postgresqlConfig10 !== undefined) {
      PostgresqlHostConfig10.encode(message.postgresqlConfig10, writer.uint32(18).fork()).ldelim();
    }
    if (message.postgresqlConfig11 !== undefined) {
      PostgresqlHostConfig11.encode(message.postgresqlConfig11, writer.uint32(26).fork()).ldelim();
    }
    if (message.postgresqlConfig111c !== undefined) {
      PostgresqlHostConfig111C.encode(message.postgresqlConfig111c, writer.uint32(50).fork()).ldelim();
    }
    if (message.postgresqlConfig12 !== undefined) {
      PostgresqlHostConfig12.encode(message.postgresqlConfig12, writer.uint32(42).fork()).ldelim();
    }
    if (message.postgresqlConfig121c !== undefined) {
      PostgresqlHostConfig121C.encode(message.postgresqlConfig121c, writer.uint32(58).fork()).ldelim();
    }
    if (message.postgresqlConfig13 !== undefined) {
      PostgresqlHostConfig13.encode(message.postgresqlConfig13, writer.uint32(66).fork()).ldelim();
    }
    if (message.postgresqlConfig131c !== undefined) {
      PostgresqlHostConfig131C.encode(message.postgresqlConfig131c, writer.uint32(82).fork()).ldelim();
    }
    if (message.postgresqlConfig14 !== undefined) {
      PostgresqlHostConfig14.encode(message.postgresqlConfig14, writer.uint32(74).fork()).ldelim();
    }
    if (message.postgresqlConfig141c !== undefined) {
      PostgresqlHostConfig141C.encode(message.postgresqlConfig141c, writer.uint32(90).fork()).ldelim();
    }
    if (message.postgresqlConfig15 !== undefined) {
      PostgresqlHostConfig15.encode(message.postgresqlConfig15, writer.uint32(98).fork()).ldelim();
    }
    if (message.postgresqlConfig151c !== undefined) {
      PostgresqlHostConfig151C.encode(message.postgresqlConfig151c, writer.uint32(106).fork()).ldelim();
    }
    if (message.postgresqlConfig16 !== undefined) {
      PostgresqlHostConfig16.encode(message.postgresqlConfig16, writer.uint32(114).fork()).ldelim();
    }
    if (message.postgresqlConfig161c !== undefined) {
      PostgresqlHostConfig161C.encode(message.postgresqlConfig161c, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigHostSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigHostSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.postgresqlConfig96 = PostgresqlHostConfig96.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.postgresqlConfig101c = PostgresqlHostConfig101C.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.postgresqlConfig10 = PostgresqlHostConfig10.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.postgresqlConfig11 = PostgresqlHostConfig11.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.postgresqlConfig111c = PostgresqlHostConfig111C.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.postgresqlConfig12 = PostgresqlHostConfig12.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.postgresqlConfig121c = PostgresqlHostConfig121C.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.postgresqlConfig13 = PostgresqlHostConfig13.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.postgresqlConfig131c = PostgresqlHostConfig131C.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.postgresqlConfig14 = PostgresqlHostConfig14.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.postgresqlConfig141c = PostgresqlHostConfig141C.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.postgresqlConfig15 = PostgresqlHostConfig15.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.postgresqlConfig151c = PostgresqlHostConfig151C.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.postgresqlConfig16 = PostgresqlHostConfig16.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.postgresqlConfig161c = PostgresqlHostConfig161C.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigHostSpec {
    return {
      $type: ConfigHostSpec.$type,
      postgresqlConfig96: isSet(object.postgresqlHostConfig_9_6)
        ? PostgresqlHostConfig96.fromJSON(object.postgresqlHostConfig_9_6)
        : undefined,
      postgresqlConfig101c: isSet(object.postgresqlHostConfig_10_1c)
        ? PostgresqlHostConfig101C.fromJSON(object.postgresqlHostConfig_10_1c)
        : undefined,
      postgresqlConfig10: isSet(object.postgresqlHostConfig_10)
        ? PostgresqlHostConfig10.fromJSON(object.postgresqlHostConfig_10)
        : undefined,
      postgresqlConfig11: isSet(object.postgresqlHostConfig_11)
        ? PostgresqlHostConfig11.fromJSON(object.postgresqlHostConfig_11)
        : undefined,
      postgresqlConfig111c: isSet(object.postgresqlHostConfig_11_1c)
        ? PostgresqlHostConfig111C.fromJSON(object.postgresqlHostConfig_11_1c)
        : undefined,
      postgresqlConfig12: isSet(object.postgresqlHostConfig_12)
        ? PostgresqlHostConfig12.fromJSON(object.postgresqlHostConfig_12)
        : undefined,
      postgresqlConfig121c: isSet(object.postgresqlHostConfig_12_1c)
        ? PostgresqlHostConfig121C.fromJSON(object.postgresqlHostConfig_12_1c)
        : undefined,
      postgresqlConfig13: isSet(object.postgresqlHostConfig_13)
        ? PostgresqlHostConfig13.fromJSON(object.postgresqlHostConfig_13)
        : undefined,
      postgresqlConfig131c: isSet(object.postgresqlHostConfig_13_1c)
        ? PostgresqlHostConfig131C.fromJSON(object.postgresqlHostConfig_13_1c)
        : undefined,
      postgresqlConfig14: isSet(object.postgresqlHostConfig_14)
        ? PostgresqlHostConfig14.fromJSON(object.postgresqlHostConfig_14)
        : undefined,
      postgresqlConfig141c: isSet(object.postgresqlHostConfig_14_1c)
        ? PostgresqlHostConfig141C.fromJSON(object.postgresqlHostConfig_14_1c)
        : undefined,
      postgresqlConfig15: isSet(object.postgresqlHostConfig_15)
        ? PostgresqlHostConfig15.fromJSON(object.postgresqlHostConfig_15)
        : undefined,
      postgresqlConfig151c: isSet(object.postgresqlHostConfig_15_1c)
        ? PostgresqlHostConfig151C.fromJSON(object.postgresqlHostConfig_15_1c)
        : undefined,
      postgresqlConfig16: isSet(object.postgresqlHostConfig_16)
        ? PostgresqlHostConfig16.fromJSON(object.postgresqlHostConfig_16)
        : undefined,
      postgresqlConfig161c: isSet(object.postgresqlHostConfig_16_1c)
        ? PostgresqlHostConfig161C.fromJSON(object.postgresqlHostConfig_16_1c)
        : undefined,
    };
  },

  toJSON(message: ConfigHostSpec): unknown {
    const obj: any = {};
    if (message.postgresqlConfig96 !== undefined) {
      obj.postgresqlHostConfig_9_6 = PostgresqlHostConfig96.toJSON(message.postgresqlConfig96);
    }
    if (message.postgresqlConfig101c !== undefined) {
      obj.postgresqlHostConfig_10_1c = PostgresqlHostConfig101C.toJSON(message.postgresqlConfig101c);
    }
    if (message.postgresqlConfig10 !== undefined) {
      obj.postgresqlHostConfig_10 = PostgresqlHostConfig10.toJSON(message.postgresqlConfig10);
    }
    if (message.postgresqlConfig11 !== undefined) {
      obj.postgresqlHostConfig_11 = PostgresqlHostConfig11.toJSON(message.postgresqlConfig11);
    }
    if (message.postgresqlConfig111c !== undefined) {
      obj.postgresqlHostConfig_11_1c = PostgresqlHostConfig111C.toJSON(message.postgresqlConfig111c);
    }
    if (message.postgresqlConfig12 !== undefined) {
      obj.postgresqlHostConfig_12 = PostgresqlHostConfig12.toJSON(message.postgresqlConfig12);
    }
    if (message.postgresqlConfig121c !== undefined) {
      obj.postgresqlHostConfig_12_1c = PostgresqlHostConfig121C.toJSON(message.postgresqlConfig121c);
    }
    if (message.postgresqlConfig13 !== undefined) {
      obj.postgresqlHostConfig_13 = PostgresqlHostConfig13.toJSON(message.postgresqlConfig13);
    }
    if (message.postgresqlConfig131c !== undefined) {
      obj.postgresqlHostConfig_13_1c = PostgresqlHostConfig131C.toJSON(message.postgresqlConfig131c);
    }
    if (message.postgresqlConfig14 !== undefined) {
      obj.postgresqlHostConfig_14 = PostgresqlHostConfig14.toJSON(message.postgresqlConfig14);
    }
    if (message.postgresqlConfig141c !== undefined) {
      obj.postgresqlHostConfig_14_1c = PostgresqlHostConfig141C.toJSON(message.postgresqlConfig141c);
    }
    if (message.postgresqlConfig15 !== undefined) {
      obj.postgresqlHostConfig_15 = PostgresqlHostConfig15.toJSON(message.postgresqlConfig15);
    }
    if (message.postgresqlConfig151c !== undefined) {
      obj.postgresqlHostConfig_15_1c = PostgresqlHostConfig151C.toJSON(message.postgresqlConfig151c);
    }
    if (message.postgresqlConfig16 !== undefined) {
      obj.postgresqlHostConfig_16 = PostgresqlHostConfig16.toJSON(message.postgresqlConfig16);
    }
    if (message.postgresqlConfig161c !== undefined) {
      obj.postgresqlHostConfig_16_1c = PostgresqlHostConfig161C.toJSON(message.postgresqlConfig161c);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigHostSpec>): ConfigHostSpec {
    return ConfigHostSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigHostSpec>): ConfigHostSpec {
    const message = createBaseConfigHostSpec();
    message.postgresqlConfig96 = (object.postgresqlConfig96 !== undefined && object.postgresqlConfig96 !== null)
      ? PostgresqlHostConfig96.fromPartial(object.postgresqlConfig96)
      : undefined;
    message.postgresqlConfig101c = (object.postgresqlConfig101c !== undefined && object.postgresqlConfig101c !== null)
      ? PostgresqlHostConfig101C.fromPartial(object.postgresqlConfig101c)
      : undefined;
    message.postgresqlConfig10 = (object.postgresqlConfig10 !== undefined && object.postgresqlConfig10 !== null)
      ? PostgresqlHostConfig10.fromPartial(object.postgresqlConfig10)
      : undefined;
    message.postgresqlConfig11 = (object.postgresqlConfig11 !== undefined && object.postgresqlConfig11 !== null)
      ? PostgresqlHostConfig11.fromPartial(object.postgresqlConfig11)
      : undefined;
    message.postgresqlConfig111c = (object.postgresqlConfig111c !== undefined && object.postgresqlConfig111c !== null)
      ? PostgresqlHostConfig111C.fromPartial(object.postgresqlConfig111c)
      : undefined;
    message.postgresqlConfig12 = (object.postgresqlConfig12 !== undefined && object.postgresqlConfig12 !== null)
      ? PostgresqlHostConfig12.fromPartial(object.postgresqlConfig12)
      : undefined;
    message.postgresqlConfig121c = (object.postgresqlConfig121c !== undefined && object.postgresqlConfig121c !== null)
      ? PostgresqlHostConfig121C.fromPartial(object.postgresqlConfig121c)
      : undefined;
    message.postgresqlConfig13 = (object.postgresqlConfig13 !== undefined && object.postgresqlConfig13 !== null)
      ? PostgresqlHostConfig13.fromPartial(object.postgresqlConfig13)
      : undefined;
    message.postgresqlConfig131c = (object.postgresqlConfig131c !== undefined && object.postgresqlConfig131c !== null)
      ? PostgresqlHostConfig131C.fromPartial(object.postgresqlConfig131c)
      : undefined;
    message.postgresqlConfig14 = (object.postgresqlConfig14 !== undefined && object.postgresqlConfig14 !== null)
      ? PostgresqlHostConfig14.fromPartial(object.postgresqlConfig14)
      : undefined;
    message.postgresqlConfig141c = (object.postgresqlConfig141c !== undefined && object.postgresqlConfig141c !== null)
      ? PostgresqlHostConfig141C.fromPartial(object.postgresqlConfig141c)
      : undefined;
    message.postgresqlConfig15 = (object.postgresqlConfig15 !== undefined && object.postgresqlConfig15 !== null)
      ? PostgresqlHostConfig15.fromPartial(object.postgresqlConfig15)
      : undefined;
    message.postgresqlConfig151c = (object.postgresqlConfig151c !== undefined && object.postgresqlConfig151c !== null)
      ? PostgresqlHostConfig151C.fromPartial(object.postgresqlConfig151c)
      : undefined;
    message.postgresqlConfig16 = (object.postgresqlConfig16 !== undefined && object.postgresqlConfig16 !== null)
      ? PostgresqlHostConfig16.fromPartial(object.postgresqlConfig16)
      : undefined;
    message.postgresqlConfig161c = (object.postgresqlConfig161c !== undefined && object.postgresqlConfig161c !== null)
      ? PostgresqlHostConfig161C.fromPartial(object.postgresqlConfig161c)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigHostSpec.$type, ConfigHostSpec);

/** A set of methods for managing PostgreSQL Cluster resources. */
export type ClusterServiceService = typeof ClusterServiceService;
export const ClusterServiceService = {
  /**
   * Returns the specified PostgreSQL Cluster resource.
   *
   * To get the list of available PostgreSQL Cluster resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) => Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /**
   * Retrieves the list of PostgreSQL Cluster resources that belong
   * to the specified folder.
   */
  list: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) => Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) => Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a PostgreSQL cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) => Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified PostgreSQL cluster. */
  update: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) => Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified PostgreSQL cluster. */
  delete: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) => Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Start the specified PostgreSQL cluster. */
  start: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) => Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stop the specified PostgreSQL cluster. */
  stop: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) => Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Moves the specified PostgreSQL cluster to the specified folder. */
  move: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveClusterRequest) => Buffer.from(MoveClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a backup for the specified PostgreSQL cluster. */
  backup: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Backup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BackupClusterRequest) => Buffer.from(BackupClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a new PostgreSQL cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreClusterRequest) => Buffer.from(RestoreClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/RescheduleMaintenance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RescheduleMaintenanceRequest) =>
      Buffer.from(RescheduleMaintenanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Start a manual failover on the specified PostgreSQL cluster. */
  startFailover: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/StartFailover",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterFailoverRequest) =>
      Buffer.from(StartClusterFailoverRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterFailoverRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves logs for the specified PostgreSQL cluster. */
  listLogs: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListLogs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterLogsRequest) => Buffer.from(ListClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterLogsRequest.decode(value),
    responseSerialize: (value: ListClusterLogsResponse) => Buffer.from(ListClusterLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterLogsResponse.decode(value),
  },
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/StreamLogs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: StreamClusterLogsRequest) => Buffer.from(StreamClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StreamClusterLogsRequest.decode(value),
    responseSerialize: (value: StreamLogRecord) => Buffer.from(StreamLogRecord.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamLogRecord.decode(value),
  },
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
  },
  /** Retrieves the list of available backups for the specified PostgreSQL cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListBackups",
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
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListHosts",
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
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/AddHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterHostsRequest) => Buffer.from(AddClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/DeleteHosts",
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
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/UpdateHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterHostsRequest) =>
      Buffer.from(UpdateClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified PostgreSQL Cluster resource.
   *
   * To get the list of available PostgreSQL Cluster resources, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /**
   * Retrieves the list of PostgreSQL Cluster resources that belong
   * to the specified folder.
   */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a PostgreSQL cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified PostgreSQL cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified PostgreSQL cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Start the specified PostgreSQL cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stop the specified PostgreSQL cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Moves the specified PostgreSQL cluster to the specified folder. */
  move: handleUnaryCall<MoveClusterRequest, Operation>;
  /** Creates a backup for the specified PostgreSQL cluster. */
  backup: handleUnaryCall<BackupClusterRequest, Operation>;
  /** Creates a new PostgreSQL cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
  /** Start a manual failover on the specified PostgreSQL cluster. */
  startFailover: handleUnaryCall<StartClusterFailoverRequest, Operation>;
  /** Retrieves logs for the specified PostgreSQL cluster. */
  listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
  /** Retrieves the list of available backups for the specified PostgreSQL cluster. */
  listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Creates new hosts for a cluster. */
  addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
  /** Updates the specified hosts. */
  updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified PostgreSQL Cluster resource.
   *
   * To get the list of available PostgreSQL Cluster resources, make a [List] request.
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
   * Retrieves the list of PostgreSQL Cluster resources that belong
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
  /** Creates a PostgreSQL cluster in the specified folder. */
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
  /** Updates the specified PostgreSQL cluster. */
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
  /** Deletes the specified PostgreSQL cluster. */
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
  /** Start the specified PostgreSQL cluster. */
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
  /** Stop the specified PostgreSQL cluster. */
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
  /** Moves the specified PostgreSQL cluster to the specified folder. */
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
  /** Creates a backup for the specified PostgreSQL cluster. */
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
  /** Creates a new PostgreSQL cluster using the specified backup. */
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
  /** Start a manual failover on the specified PostgreSQL cluster. */
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
  /** Retrieves logs for the specified PostgreSQL cluster. */
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
  /** Retrieves the list of available backups for the specified PostgreSQL cluster. */
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
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.postgresql.v1.ClusterService",
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
