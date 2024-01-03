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
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
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
  Host,
  Host_Type,
  host_TypeFromJSON,
  host_TypeToJSON,
  PerformanceDiagnosticsConfig,
  Resources,
  Shard,
} from "./cluster";
import { MongoCfgConfig36, MongodConfig36, MongosConfig36 } from "./config/mongodb3_6";
import { MongoCfgConfig40, MongodConfig40, MongosConfig40 } from "./config/mongodb4_0";
import { MongoCfgConfig42, MongodConfig42, MongosConfig42 } from "./config/mongodb4_2";
import { MongoCfgConfig44, MongodConfig44, MongosConfig44 } from "./config/mongodb4_4";
import {
  MongoCfgConfig44Enterprise,
  MongodConfig44Enterprise,
  MongosConfig44Enterprise,
} from "./config/mongodb4_4_enterprise";
import { MongoCfgConfig50, MongodConfig50, MongosConfig50 } from "./config/mongodb5_0";
import {
  MongoCfgConfig50Enterprise,
  MongodConfig50Enterprise,
  MongosConfig50Enterprise,
} from "./config/mongodb5_0_enterprise";
import { MongoCfgConfig60, MongodConfig60, MongosConfig60 } from "./config/mongodb6_0";
import {
  MongoCfgConfig60Enterprise,
  MongodConfig60Enterprise,
  MongosConfig60Enterprise,
} from "./config/mongodb6_0_enterprise";
import { DatabaseSpec } from "./database";
import { MaintenanceWindow } from "./maintenance";
import { UserSpec } from "./user";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.GetClusterRequest";
  /**
   * ID of the MongoDB Cluster resource to return.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClustersRequest";
  /**
   * ID of the folder to list MongoDB clusters in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListClustersResponse.next_page_token] returned by the previous list request.
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
  $type: "yandex.cloud.mdb.mongodb.v1.ListClustersResponse";
  /** List of MongoDB Cluster resources. */
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
  $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest";
  /** ID of the folder to create MongoDB cluster in. */
  folderId: string;
  /** Name of the MongoDB cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the MongoDB cluster. */
  description: string;
  /**
   * Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the MongoDB cluster. */
  environment: Cluster_Environment;
  /** Configuration and resources for hosts that should be created for the MongoDB cluster. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /** Descriptions of databases to be created in the MongoDB cluster. */
  databaseSpecs: DatabaseSpec[];
  /** Descriptions of database users to be created in the MongoDB cluster. */
  userSpecs: UserSpec[];
  /** Individual configurations for hosts that should be created for the MongoDB cluster. */
  hostSpecs: HostSpec[];
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata";
  /** ID of the MongoDB cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest";
  /**
   * ID of the MongoDB Cluster resource to update.
   * To get the MongoDB cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the MongoDB Cluster resource should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New description of the MongoDB cluster. */
  description: string;
  /**
   * Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource.
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
  $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata";
  /** ID of the MongoDB Cluster resource that is being updated. */
  clusterId: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest";
  /**
   * ID of the MongoDB cluster to delete.
   * To get the MongoDB cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata";
  /** ID of the MongoDB cluster that is being deleted. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.StartClusterRequest";
  /** ID of the MongoDB cluster to start. */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.StartClusterMetadata";
  /** ID of the MongoDB cluster. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.StopClusterRequest";
  /** ID of the MongoDB cluster to stop. */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.StopClusterMetadata";
  /** ID of the MongoDB cluster. */
  clusterId: string;
}

export interface MoveClusterRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterRequest";
  /** ID of the MongoDB cluster to move. */
  clusterId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveClusterMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata";
  /** ID of the MongoDB cluster being moved. */
  clusterId: string;
  /** ID of the source folder. */
  sourceFolderId: string;
  /** ID of the destnation folder. */
  destinationFolderId: string;
}

export interface BackupClusterRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterRequest";
  /**
   * ID of the MongoDB cluster to back up.
   * To get the MongoDB cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface BackupClusterMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata";
  /** ID of the MongoDB cluster that is being backed up. */
  clusterId: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest";
  /**
   * ID of the backup to create a cluster from.
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /**
   * Name of the new MongoDB cluster. The name must be unique within the folder.
   * The name can't be changed after the MongoDB cluster is created.
   */
  name: string;
  /** Description of the new MongoDB cluster. */
  description: string;
  /**
   * Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the new MongoDB cluster. */
  environment: Cluster_Environment;
  /** Configuration for the MongoDB cluster to be created. */
  configSpec?:
    | ConfigSpec
    | undefined;
  /**
   * Configurations for MongoDB hosts that should be created for
   * the cluster that is being created from the backup.
   */
  hostSpecs: HostSpec[];
  /** ID of the network to create the MongoDB cluster in. */
  networkId: string;
  /** Required. ID of the folder to create the MongoDB cluster in. */
  folderId: string;
  /** Specification of the moment to which the MongoDB cluster should be restored. */
  recoveryTargetSpec?:
    | RestoreClusterRequest_RecoveryTargetSpec
    | undefined;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterRequest_RecoveryTargetSpec {
  $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec";
  /** Timestamp of the recovery target */
  timestamp: number;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata";
  /** ID of the new MongoDB cluster that is being created from a backup. */
  clusterId: string;
  /** ID of the backup that is being used for creating a cluster. */
  backupId: string;
}

export interface RescheduleMaintenanceRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest";
  /** ID of the MongoDB cluster to reschedule the maintenance operation for. */
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
  $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata";
  /** Required. ID of the MongoDB cluster. */
  clusterId: string;
  /** Required. The time until which this maintenance operation is to be delayed. */
  delayedUntil?: Date | undefined;
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.mongodb.v1.LogRecord";
  /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  timestamp?:
    | Date
    | undefined;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.mongodb.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest";
  /**
   * ID of the MongoDB cluster to request logs for.
   * To get the MongoDB cluster ID use a [ClusterService.List] request.
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
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
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
  /** MONGOD - Logs of MongoDB activity. */
  MONGOD = 1,
  MONGOS = 2,
  MONGOCFG = 3,
  /** AUDIT - MongoDB Enterprise audit logs */
  AUDIT = 4,
  UNRECOGNIZED = -1,
}

export function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "MONGOD":
      return ListClusterLogsRequest_ServiceType.MONGOD;
    case 2:
    case "MONGOS":
      return ListClusterLogsRequest_ServiceType.MONGOS;
    case 3:
    case "MONGOCFG":
      return ListClusterLogsRequest_ServiceType.MONGOCFG;
    case 4:
    case "AUDIT":
      return ListClusterLogsRequest_ServiceType.AUDIT;
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
    case ListClusterLogsRequest_ServiceType.MONGOD:
      return "MONGOD";
    case ListClusterLogsRequest_ServiceType.MONGOS:
      return "MONGOS";
    case ListClusterLogsRequest_ServiceType.MONGOCFG:
      return "MONGOCFG";
    case ListClusterLogsRequest_ServiceType.AUDIT:
      return "AUDIT";
    case ListClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse";
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
  $type: "yandex.cloud.mdb.mongodb.v1.StreamLogRecord";
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
  $type: "yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest";
  /** Required. ID of the MongoDB cluster. */
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
   * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.severity] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
   * Examples of a filter: `message.hostname='node1.db.cloud.yandex.net'`, `message.severity IN ('E', 'F')`
   */
  filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** MONGOD - Logs of MongoDB activity. */
  MONGOD = 1,
  MONGOS = 2,
  MONGOCFG = 3,
  /** AUDIT - MongoDB Enterprise audit logs */
  AUDIT = 4,
  UNRECOGNIZED = -1,
}

export function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "MONGOD":
      return StreamClusterLogsRequest_ServiceType.MONGOD;
    case 2:
    case "MONGOS":
      return StreamClusterLogsRequest_ServiceType.MONGOS;
    case 3:
    case "MONGOCFG":
      return StreamClusterLogsRequest_ServiceType.MONGOCFG;
    case 4:
    case "AUDIT":
      return StreamClusterLogsRequest_ServiceType.AUDIT;
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
    case StreamClusterLogsRequest_ServiceType.MONGOD:
      return "MONGOD";
    case StreamClusterLogsRequest_ServiceType.MONGOS:
      return "MONGOS";
    case StreamClusterLogsRequest_ServiceType.MONGOCFG:
      return "MONGOCFG";
    case StreamClusterLogsRequest_ServiceType.AUDIT:
      return "AUDIT";
    case StreamClusterLogsRequest_ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest";
  /** ID of the MongoDB Cluster resource to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterOperationsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse";
  /** List of Operation resources for the specified MongoDB cluster. */
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
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest";
  /**
   * ID of the MongoDB cluster.
   * To get the MongoDB cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the
   * [ListClusterBackupsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterBackupsResponse {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse";
  /** List of MongoDB Backup resources. */
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
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest";
  /**
   * ID of the MongoDB cluster.
   * To get the MongoDB cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterHostsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterHostsResponse {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse";
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
  $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest";
  /**
   * ID of the MongoDB cluster to add hosts to.
   * To get the MongoDB cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configurations for MongoDB hosts that should be added to the cluster. */
  hostSpecs: HostSpec[];
}

export interface AddClusterHostsMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata";
  /** ID of the MongoDB cluster to which the hosts are being added. */
  clusterId: string;
  /** Names of hosts that are being added to the cluster. */
  hostNames: string[];
}

export interface DeleteClusterHostsRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest";
  /**
   * ID of the MongoDB cluster to remove hosts from.
   * To get the MongoDB cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Names of hosts to delete. */
  hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata";
  /** ID of the MongoDB cluster to remove hosts from. */
  clusterId: string;
  /** Names of hosts that are being deleted. */
  hostNames: string[];
}

export interface EnableClusterShardingRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest";
  /** ID of the MongoDB cluster to enable sharding for. */
  clusterId: string;
  /** mongocfg specification for sharding. */
  mongocfg?:
    | EnableClusterShardingRequest_MongoCfg
    | undefined;
  /** mongos specification for sharding. */
  mongos?:
    | EnableClusterShardingRequest_Mongos
    | undefined;
  /** Configurations for mongos and mongocfg hosts. */
  hostSpecs: HostSpec[];
  /** mongos specification for sharding. */
  mongoinfra?: EnableClusterShardingRequest_MongoInfra | undefined;
}

export interface EnableClusterShardingRequest_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg";
  /** Resources for mongocfg hosts. */
  resources?: Resources | undefined;
}

export interface EnableClusterShardingRequest_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos";
  /** Resources for mongos hosts. */
  resources?: Resources | undefined;
}

export interface EnableClusterShardingRequest_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra";
  /** Resources for mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources | undefined;
}

export interface EnableClusterShardingMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata";
  /** ID of the MongoDB cluster that sharding is being enabled for. */
  clusterId: string;
}

export interface GetClusterShardRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest";
  /**
   * ID of the MongoDB cluster that the shard belongs to.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the MongoDB shard to return.
   * To get the name of the shard use a [ClusterService.ListShards] request.
   */
  shardName: string;
}

export interface ListClusterShardsRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest";
  /**
   * ID of the MongoDB cluster to list databases in.
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
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterShardsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterShardsResponse {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse";
  /** List of MongoDB shards. */
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
  $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest";
  /**
   * ID of the MongoDB cluster to add a shard to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the MongoDB shard to create. */
  shardName: string;
  /** Configurations for mongod hosts to be created with the shard. */
  hostSpecs: HostSpec[];
}

export interface AddClusterShardMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata";
  /** ID of the MongoDB cluster that a shard is being added to. */
  clusterId: string;
  /** Name of the shard being added. */
  shardName: string;
}

export interface DeleteClusterShardRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest";
  /**
   * ID of the MongoDB cluster to delete a shard in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the MongoDB shard to delete.
   * To get the name of the shard use a [ClusterService.ListShards] request.
   */
  shardName: string;
}

export interface DeleteClusterShardMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata";
  /** ID of the MongoDB cluster that a shard is being deleted in. */
  clusterId: string;
  /** Name of the shard being deleted. */
  shardName: string;
}

export interface ResetupHostsRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest";
  /** Required. ID of the MongoDB cluster. */
  clusterId: string;
  /** Required. Name of the hosts to resetup. */
  hostNames: string[];
}

export interface ResetupHostsMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata";
  /** Required. ID of the MongoDB cluster. */
  clusterId: string;
  /** Required. The name of hosts to resetup. */
  hostNames: string[];
}

export interface RestartHostsRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsRequest";
  /** Required. ID of the MongoDB cluster. */
  clusterId: string;
  /** Required. Name of the hosts to restart. */
  hostNames: string[];
}

export interface RestartHostsMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata";
  /** Required. ID of the MongoDB cluster. */
  clusterId: string;
  /** Required. The name of hosts to restart. */
  hostNames: string[];
}

export interface StepdownHostsRequest {
  $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest";
  /** Required. ID of the MongoDB cluster. */
  clusterId: string;
  /** Required. Name of the hosts to resetup. */
  hostNames: string[];
}

export interface StepdownHostsMetadata {
  $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata";
  /** Required. ID of the MongoDB cluster. */
  clusterId: string;
  /** Required. The name of hosts to resetup. */
  hostNames: string[];
}

export interface HostSpec {
  $type: "yandex.cloud.mdb.mongodb.v1.HostSpec";
  /**
   * ID of the availability zone where the host resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /**
   * ID of the subnet that the host should belong to. This subnet should be a part
   * of the network that the cluster belongs to.
   * The network ID is set in the [Cluster.network_id] field.
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
  /** Type of the host to be deployed. */
  type: Host_Type;
  /** Name of the shard that the host belongs to. */
  shardName: string;
}

export interface MongodbSpec36 {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6";
  /** Configuration and resource allocation for mongod 3.6 hosts. */
  mongod?:
    | MongodbSpec36_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg 3.6 hosts. */
  mongocfg?:
    | MongodbSpec36_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos 3.6 hosts. */
  mongos?:
    | MongodbSpec36_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 3.6 hosts. */
  mongoinfra?: MongodbSpec36_MongoInfra | undefined;
}

export interface MongodbSpec36_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod";
  /** Configuration for mongod 3.6 hosts. */
  config?:
    | MongodConfig36
    | undefined;
  /** Resources allocated to each mongod host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec36_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg";
  /** Configuration for mongocfg 3.6 hosts. */
  config?:
    | MongoCfgConfig36
    | undefined;
  /** Resources allocated to each mongocfg host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec36_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos";
  /** Configuration for mongos 3.6 hosts. */
  config?:
    | MongosConfig36
    | undefined;
  /** Resources allocated to each mongos host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec36_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra";
  /** Configuration for mongoinfra 3.6 hosts. */
  configMongos?: MongosConfig36 | undefined;
  configMongocfg?:
    | MongoCfgConfig36
    | undefined;
  /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec40 {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0";
  /** Configuration and resource allocation for mongod 4.0 hosts. */
  mongod?:
    | MongodbSpec40_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg 4.0 hosts. */
  mongocfg?:
    | MongodbSpec40_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos 4.0 hosts. */
  mongos?:
    | MongodbSpec40_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.0 hosts. */
  mongoinfra?: MongodbSpec40_MongoInfra | undefined;
}

export interface MongodbSpec40_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod";
  /** Configuration for mongod 4.0 hosts. */
  config?:
    | MongodConfig40
    | undefined;
  /** Resources allocated to each mongod host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec40_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg";
  /** Configuration for mongocfg 4.0 hosts. */
  config?:
    | MongoCfgConfig40
    | undefined;
  /** Resources allocated to each mongocfg host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec40_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos";
  /** Configuration for mongos 4.0 hosts. */
  config?:
    | MongosConfig40
    | undefined;
  /** Resources allocated to each mongos host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec40_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra";
  /** Configuration for mongoinfra 4.0 hosts. */
  configMongos?: MongosConfig40 | undefined;
  configMongocfg?:
    | MongoCfgConfig40
    | undefined;
  /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec42 {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2";
  /** Configuration and resource allocation for mongod 4.2 hosts. */
  mongod?:
    | MongodbSpec42_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg 4.2 hosts. */
  mongocfg?:
    | MongodbSpec42_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos 4.2 hosts. */
  mongos?:
    | MongodbSpec42_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.2 hosts. */
  mongoinfra?: MongodbSpec42_MongoInfra | undefined;
}

export interface MongodbSpec42_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod";
  /** Configuration for mongod 4.2 hosts. */
  config?:
    | MongodConfig42
    | undefined;
  /** Resources allocated to each mongod host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec42_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg";
  /** Configuration for mongocfg 4.2 hosts. */
  config?:
    | MongoCfgConfig42
    | undefined;
  /** Resources allocated to each mongocfg host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec42_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos";
  /** Configuration for mongos 4.2 hosts. */
  config?:
    | MongosConfig42
    | undefined;
  /** Resources allocated to each mongos host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec42_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra";
  /** Configuration for mongoinfra 4.2 hosts. */
  configMongos?: MongosConfig42 | undefined;
  configMongocfg?:
    | MongoCfgConfig42
    | undefined;
  /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec44 {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4";
  /** Configuration and resource allocation for mongod 4.4 hosts. */
  mongod?:
    | MongodbSpec44_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg 4.4 hosts. */
  mongocfg?:
    | MongodbSpec44_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos 4.4 hosts. */
  mongos?:
    | MongodbSpec44_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.4 hosts. */
  mongoinfra?: MongodbSpec44_MongoInfra | undefined;
}

export interface MongodbSpec44_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod";
  /** Configuration for mongod 4.4 hosts. */
  config?:
    | MongodConfig44
    | undefined;
  /** Resources allocated to each mongod host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec44_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg";
  /** Configuration for mongocfg 4.4 hosts. */
  config?:
    | MongoCfgConfig44
    | undefined;
  /** Resources allocated to each mongocfg host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec44_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos";
  /** Configuration for mongos 4.4 hosts. */
  config?:
    | MongosConfig44
    | undefined;
  /** Resources allocated to each mongos host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec44_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra";
  /** Configuration for mongoinfra 4.4 hosts. */
  configMongos?: MongosConfig44 | undefined;
  configMongocfg?:
    | MongoCfgConfig44
    | undefined;
  /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise";
  /** Configuration and resource allocation for mongod 4.4 hosts. */
  mongod?:
    | MongodbSpec44Enterprise_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg 4.4 hosts. */
  mongocfg?:
    | MongodbSpec44Enterprise_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos 4.4 hosts. */
  mongos?:
    | MongodbSpec44Enterprise_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.4 hosts. */
  mongoinfra?: MongodbSpec44Enterprise_MongoInfra | undefined;
}

export interface MongodbSpec44Enterprise_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod";
  /** Configuration for mongod 4.4 hosts. */
  config?:
    | MongodConfig44Enterprise
    | undefined;
  /** Resources allocated to each mongod host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec44Enterprise_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg";
  /** Configuration for mongocfg 4.4 hosts. */
  config?:
    | MongoCfgConfig44Enterprise
    | undefined;
  /** Resources allocated to each mongocfg host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec44Enterprise_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos";
  /** Configuration for mongos 4.4 hosts. */
  config?:
    | MongosConfig44Enterprise
    | undefined;
  /** Resources allocated to each mongos host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec44Enterprise_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra";
  /** Configuration for mongoinfra 4.4 hosts. */
  configMongos?: MongosConfig44Enterprise | undefined;
  configMongocfg?:
    | MongoCfgConfig44Enterprise
    | undefined;
  /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec50 {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0";
  /** Configuration and resource allocation for mongod 5.0 hosts. */
  mongod?:
    | MongodbSpec50_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg 5.0 hosts. */
  mongocfg?:
    | MongodbSpec50_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos 5.0 hosts. */
  mongos?:
    | MongodbSpec50_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 5.0 hosts. */
  mongoinfra?: MongodbSpec50_MongoInfra | undefined;
}

export interface MongodbSpec50_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod";
  /** Configuration for mongod 5.0 hosts. */
  config?:
    | MongodConfig50
    | undefined;
  /** Resources allocated to each mongod host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec50_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg";
  /** Configuration for mongocfg 5.0 hosts. */
  config?:
    | MongoCfgConfig50
    | undefined;
  /** Resources allocated to each mongocfg host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec50_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos";
  /** Configuration for mongos 5.0 hosts. */
  config?:
    | MongosConfig50
    | undefined;
  /** Resources allocated to each mongos host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec50_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra";
  /** Configuration for mongoinfra 5.0 hosts. */
  configMongos?: MongosConfig50 | undefined;
  configMongocfg?:
    | MongoCfgConfig50
    | undefined;
  /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec50Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise";
  /** Configuration and resource allocation for mongod 5.0 hosts. */
  mongod?:
    | MongodbSpec50Enterprise_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg 5.0 hosts. */
  mongocfg?:
    | MongodbSpec50Enterprise_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos 5.0 hosts. */
  mongos?:
    | MongodbSpec50Enterprise_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 5.0 hosts. */
  mongoinfra?: MongodbSpec50Enterprise_MongoInfra | undefined;
}

export interface MongodbSpec50Enterprise_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod";
  /** Configuration for mongod 5.0 hosts. */
  config?:
    | MongodConfig50Enterprise
    | undefined;
  /** Resources allocated to each mongod host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec50Enterprise_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg";
  /** Configuration for mongocfg 5.0 hosts. */
  config?:
    | MongoCfgConfig50Enterprise
    | undefined;
  /** Resources allocated to each mongocfg host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec50Enterprise_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos";
  /** Configuration for mongos 5.0 hosts. */
  config?:
    | MongosConfig50Enterprise
    | undefined;
  /** Resources allocated to each mongos host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec50Enterprise_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra";
  /** Configuration for mongoinfra 5.0 hosts. */
  configMongos?: MongosConfig50Enterprise | undefined;
  configMongocfg?:
    | MongoCfgConfig50Enterprise
    | undefined;
  /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec60 {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0";
  /** Configuration and resource allocation for mongod 6.0 hosts. */
  mongod?:
    | MongodbSpec60_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg 6.0 hosts. */
  mongocfg?:
    | MongodbSpec60_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos 6.0 hosts. */
  mongos?:
    | MongodbSpec60_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 6.0 hosts. */
  mongoinfra?: MongodbSpec60_MongoInfra | undefined;
}

export interface MongodbSpec60_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongod";
  /** Configuration for mongod 6.0 hosts. */
  config?:
    | MongodConfig60
    | undefined;
  /** Resources allocated to each mongod host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec60_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoCfg";
  /** Configuration for mongocfg 6.0 hosts. */
  config?:
    | MongoCfgConfig60
    | undefined;
  /** Resources allocated to each mongocfg host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec60_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongos";
  /** Configuration for mongos 6.0 hosts. */
  config?:
    | MongosConfig60
    | undefined;
  /** Resources allocated to each mongos host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec60_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoInfra";
  /** Configuration for mongoinfra 6.0 hosts. */
  configMongos?: MongosConfig60 | undefined;
  configMongocfg?:
    | MongoCfgConfig60
    | undefined;
  /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec60Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise";
  /** Configuration and resource allocation for mongod 6.0 hosts. */
  mongod?:
    | MongodbSpec60Enterprise_Mongod
    | undefined;
  /** Configuration and resource allocation for mongocfg 6.0 hosts. */
  mongocfg?:
    | MongodbSpec60Enterprise_MongoCfg
    | undefined;
  /** Configuration and resource allocation for mongos 6.0 hosts. */
  mongos?:
    | MongodbSpec60Enterprise_Mongos
    | undefined;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 6.0 hosts. */
  mongoinfra?: MongodbSpec60Enterprise_MongoInfra | undefined;
}

export interface MongodbSpec60Enterprise_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongod";
  /** Configuration for mongod 6.0 hosts. */
  config?:
    | MongodConfig60Enterprise
    | undefined;
  /** Resources allocated to each mongod host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec60Enterprise_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoCfg";
  /** Configuration for mongocfg 6.0 hosts. */
  config?:
    | MongoCfgConfig60Enterprise
    | undefined;
  /** Resources allocated to each mongocfg host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec60Enterprise_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongos";
  /** Configuration for mongos 6.0 hosts. */
  config?:
    | MongosConfig60Enterprise
    | undefined;
  /** Resources allocated to each mongos host. */
  resources?: Resources | undefined;
}

export interface MongodbSpec60Enterprise_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoInfra";
  /** Configuration for mongoinfra 6.0 hosts. */
  configMongos?: MongosConfig60Enterprise | undefined;
  configMongocfg?:
    | MongoCfgConfig60Enterprise
    | undefined;
  /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
  resources?: Resources | undefined;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.mongodb.v1.ConfigSpec";
  /** Version of MongoDB used in the cluster. Possible values: `3.6`, `4.0`, `4.2`, `4.4`, `4.4-enterprise`, `5.0`, `5.0-enterprise`, `6.0`, `6.0-enterprise`. */
  version: string;
  /**
   * MongoDB feature compatibility version. See usage details in [MongoDB documentation](https://docs.mongodb.com/manual/reference/command/setFeatureCompatibilityVersion/).
   *
   * Possible values:
   * * `3.6` - persist data compatibility for version 3.6. After setting this option the data will not be compatible with 3.4 or older.
   * * `4.0` - persist data compatibility for version 4.0. After setting this option the data will not be compatible with 3.6 or older.
   * * `4.2` - persist data compatibility for version 4.2. After setting this option the data will not be compatible with 4.0 or older.
   * * `4.4` - persist data compatibility for version 4.4. After setting this option the data will not be compatible with 4.2 or older.
   * * `5.0` - persist data compatibility for version 5.0. After setting this option the data will not be compatible with 4.4 or older.
   * * `6.0` - persist data compatibility for version 6.0. After setting this option the data will not be compatible with 5.0 or older.
   */
  featureCompatibilityVersion: string;
  /** Configuration and resource allocation for a MongoDB 3.6 cluster. */
  mongodbSpec36?:
    | MongodbSpec36
    | undefined;
  /** Configuration and resource allocation for a MongoDB 4.0 cluster. */
  mongodbSpec40?:
    | MongodbSpec40
    | undefined;
  /** Configuration and resource allocation for a MongoDB 4.2 cluster. */
  mongodbSpec42?:
    | MongodbSpec42
    | undefined;
  /** Configuration and resource allocation for a MongoDB 4.4 cluster. */
  mongodbSpec44?:
    | MongodbSpec44
    | undefined;
  /** Configuration and resource allocation for a MongoDB 5.0 cluster. */
  mongodbSpec50?:
    | MongodbSpec50
    | undefined;
  /** Configuration and resource allocation for a MongoDB 6.0 cluster. */
  mongodbSpec60?:
    | MongodbSpec60
    | undefined;
  /** Configuration and resource allocation for a MongoDB 4.4 Enterprise cluster. */
  mongodbSpec44Enterprise?:
    | MongodbSpec44Enterprise
    | undefined;
  /** Configuration and resource allocation for a MongoDB 5.0 Enterprise cluster. */
  mongodbSpec50Enterprise?:
    | MongodbSpec50Enterprise
    | undefined;
  /** Configuration and resource allocation for a MongoDB 6.0 Enterprise cluster. */
  mongodbSpec60Enterprise?:
    | MongodbSpec60Enterprise
    | undefined;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?:
    | TimeOfDay
    | undefined;
  /** Retain period of automatically created backup in days */
  backupRetainPeriodDays?:
    | number
    | undefined;
  /** Performance Diagnosics configuration */
  performanceDiagnostics?:
    | PerformanceDiagnosticsConfig
    | undefined;
  /** Access policy to DB */
  access?: Access | undefined;
}

function createBaseGetClusterRequest(): GetClusterRequest {
  return { $type: "yandex.cloud.mdb.mongodb.v1.GetClusterRequest", clusterId: "" };
}

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.GetClusterRequest" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
  };
}

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClustersRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListClustersResponse", clusters: [], nextPageToken: "" };
}

export const ListClustersResponse = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClustersResponse" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest",
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
  };
}

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.LabelsEntry",
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
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

function createBaseCreateClusterRequest_LabelsEntry(): CreateClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const CreateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata", clusterId: "" };
}

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest",
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
  $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.LabelsEntry",
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
  return { $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.LabelsEntry" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata", clusterId: "" };
}

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest", clusterId: "" };
}

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata", clusterId: "" };
}

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.StartClusterRequest", clusterId: "" };
}

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.StartClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.StartClusterMetadata", clusterId: "" };
}

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.StartClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.StopClusterRequest", clusterId: "" };
}

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.StopClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.StopClusterMetadata", clusterId: "" };
}

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.StopClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterRequest", clusterId: "", destinationFolderId: "" };
}

export const MoveClusterRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterRequest" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
  };
}

export const MoveClusterMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterRequest", clusterId: "" };
}

export const BackupClusterRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata", clusterId: "" };
}

export const BackupClusterMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest",
    backupId: "",
    name: "",
    description: "",
    labels: {},
    environment: 0,
    configSpec: undefined,
    hostSpecs: [],
    networkId: "",
    folderId: "",
    recoveryTargetSpec: undefined,
    securityGroupIds: [],
    deletionProtection: false,
  };
}

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest" as const,

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
        $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.LabelsEntry",
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
    if (message.recoveryTargetSpec !== undefined) {
      RestoreClusterRequest_RecoveryTargetSpec.encode(message.recoveryTargetSpec, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(90).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(96).bool(message.deletionProtection);
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

          message.recoveryTargetSpec = RestoreClusterRequest_RecoveryTargetSpec.decode(reader, reader.uint32());
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
      recoveryTargetSpec: isSet(object.recoveryTargetSpec)
        ? RestoreClusterRequest_RecoveryTargetSpec.fromJSON(object.recoveryTargetSpec)
        : undefined,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
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
    if (message.recoveryTargetSpec !== undefined) {
      obj.recoveryTargetSpec = RestoreClusterRequest_RecoveryTargetSpec.toJSON(message.recoveryTargetSpec);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
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
    message.recoveryTargetSpec = (object.recoveryTargetSpec !== undefined && object.recoveryTargetSpec !== null)
      ? RestoreClusterRequest_RecoveryTargetSpec.fromPartial(object.recoveryTargetSpec)
      : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

function createBaseRestoreClusterRequest_LabelsEntry(): RestoreClusterRequest_LabelsEntry {
  return { $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.LabelsEntry", key: "", value: "" };
}

export const RestoreClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.LabelsEntry" as const,

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

function createBaseRestoreClusterRequest_RecoveryTargetSpec(): RestoreClusterRequest_RecoveryTargetSpec {
  return { $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec", timestamp: 0 };
}

export const RestoreClusterRequest_RecoveryTargetSpec = {
  $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec" as const,

  encode(message: RestoreClusterRequest_RecoveryTargetSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreClusterRequest_RecoveryTargetSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreClusterRequest_RecoveryTargetSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreClusterRequest_RecoveryTargetSpec {
    return {
      $type: RestoreClusterRequest_RecoveryTargetSpec.$type,
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
    };
  },

  toJSON(message: RestoreClusterRequest_RecoveryTargetSpec): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreClusterRequest_RecoveryTargetSpec>): RestoreClusterRequest_RecoveryTargetSpec {
    return RestoreClusterRequest_RecoveryTargetSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreClusterRequest_RecoveryTargetSpec>): RestoreClusterRequest_RecoveryTargetSpec {
    const message = createBaseRestoreClusterRequest_RecoveryTargetSpec();
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest_RecoveryTargetSpec.$type, RestoreClusterRequest_RecoveryTargetSpec);

function createBaseRestoreClusterMetadata(): RestoreClusterMetadata {
  return { $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata", clusterId: "", backupId: "" };
}

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
    delayedUntil: undefined,
  };
}

export const RescheduleMaintenanceRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata", clusterId: "", delayedUntil: undefined };
}

export const RescheduleMaintenanceMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.LogRecord", timestamp: undefined, message: {} };
}

export const LogRecord = {
  $type: "yandex.cloud.mdb.mongodb.v1.LogRecord" as const,

  encode(message: LogRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.message).forEach(([key, value]) => {
      LogRecord_MessageEntry.encode({
        $type: "yandex.cloud.mdb.mongodb.v1.LogRecord.MessageEntry",
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
  return { $type: "yandex.cloud.mdb.mongodb.v1.LogRecord.MessageEntry", key: "", value: "" };
}

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.mongodb.v1.LogRecord.MessageEntry" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest",
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
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse", logs: [], nextPageToken: "" };
}

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.StreamLogRecord", record: undefined, nextRecordToken: "" };
}

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.mongodb.v1.StreamLogRecord" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest",
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
  $type: "yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest" as const,

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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse", operations: [], nextPageToken: "" };
}

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse", backups: [], nextPageToken: "" };
}

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse", hosts: [], nextPageToken: "" };
}

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest", clusterId: "", hostSpecs: [] };
}

export const AddClusterHostsRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const AddClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest", clusterId: "", hostNames: [] };
}

export const DeleteClusterHostsRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata", clusterId: "", hostNames: [] };
}

export const DeleteClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata" as const,

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

function createBaseEnableClusterShardingRequest(): EnableClusterShardingRequest {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest",
    clusterId: "",
    mongocfg: undefined,
    mongos: undefined,
    hostSpecs: [],
    mongoinfra: undefined,
  };
}

export const EnableClusterShardingRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest" as const,

  encode(message: EnableClusterShardingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mongocfg !== undefined) {
      EnableClusterShardingRequest_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      EnableClusterShardingRequest_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      EnableClusterShardingRequest_MongoInfra.encode(message.mongoinfra, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableClusterShardingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableClusterShardingRequest();
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

          message.mongocfg = EnableClusterShardingRequest_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = EnableClusterShardingRequest_Mongos.decode(reader, reader.uint32());
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

          message.mongoinfra = EnableClusterShardingRequest_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnableClusterShardingRequest {
    return {
      $type: EnableClusterShardingRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      mongocfg: isSet(object.mongocfg) ? EnableClusterShardingRequest_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? EnableClusterShardingRequest_Mongos.fromJSON(object.mongos) : undefined,
      hostSpecs: globalThis.Array.isArray(object?.hostSpecs)
        ? object.hostSpecs.map((e: any) => HostSpec.fromJSON(e))
        : [],
      mongoinfra: isSet(object.mongoinfra)
        ? EnableClusterShardingRequest_MongoInfra.fromJSON(object.mongoinfra)
        : undefined,
    };
  },

  toJSON(message: EnableClusterShardingRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = EnableClusterShardingRequest_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = EnableClusterShardingRequest_Mongos.toJSON(message.mongos);
    }
    if (message.hostSpecs?.length) {
      obj.hostSpecs = message.hostSpecs.map((e) => HostSpec.toJSON(e));
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = EnableClusterShardingRequest_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<EnableClusterShardingRequest>): EnableClusterShardingRequest {
    return EnableClusterShardingRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnableClusterShardingRequest>): EnableClusterShardingRequest {
    const message = createBaseEnableClusterShardingRequest();
    message.clusterId = object.clusterId ?? "";
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? EnableClusterShardingRequest_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? EnableClusterShardingRequest_Mongos.fromPartial(object.mongos)
      : undefined;
    message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? EnableClusterShardingRequest_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(EnableClusterShardingRequest.$type, EnableClusterShardingRequest);

function createBaseEnableClusterShardingRequest_MongoCfg(): EnableClusterShardingRequest_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg", resources: undefined };
}

export const EnableClusterShardingRequest_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg" as const,

  encode(message: EnableClusterShardingRequest_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableClusterShardingRequest_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableClusterShardingRequest_MongoCfg();
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

  fromJSON(object: any): EnableClusterShardingRequest_MongoCfg {
    return {
      $type: EnableClusterShardingRequest_MongoCfg.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: EnableClusterShardingRequest_MongoCfg): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<EnableClusterShardingRequest_MongoCfg>): EnableClusterShardingRequest_MongoCfg {
    return EnableClusterShardingRequest_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnableClusterShardingRequest_MongoCfg>): EnableClusterShardingRequest_MongoCfg {
    const message = createBaseEnableClusterShardingRequest_MongoCfg();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(EnableClusterShardingRequest_MongoCfg.$type, EnableClusterShardingRequest_MongoCfg);

function createBaseEnableClusterShardingRequest_Mongos(): EnableClusterShardingRequest_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos", resources: undefined };
}

export const EnableClusterShardingRequest_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos" as const,

  encode(message: EnableClusterShardingRequest_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableClusterShardingRequest_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableClusterShardingRequest_Mongos();
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

  fromJSON(object: any): EnableClusterShardingRequest_Mongos {
    return {
      $type: EnableClusterShardingRequest_Mongos.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: EnableClusterShardingRequest_Mongos): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<EnableClusterShardingRequest_Mongos>): EnableClusterShardingRequest_Mongos {
    return EnableClusterShardingRequest_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnableClusterShardingRequest_Mongos>): EnableClusterShardingRequest_Mongos {
    const message = createBaseEnableClusterShardingRequest_Mongos();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(EnableClusterShardingRequest_Mongos.$type, EnableClusterShardingRequest_Mongos);

function createBaseEnableClusterShardingRequest_MongoInfra(): EnableClusterShardingRequest_MongoInfra {
  return { $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra", resources: undefined };
}

export const EnableClusterShardingRequest_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra" as const,

  encode(message: EnableClusterShardingRequest_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableClusterShardingRequest_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableClusterShardingRequest_MongoInfra();
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

  fromJSON(object: any): EnableClusterShardingRequest_MongoInfra {
    return {
      $type: EnableClusterShardingRequest_MongoInfra.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: EnableClusterShardingRequest_MongoInfra): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<EnableClusterShardingRequest_MongoInfra>): EnableClusterShardingRequest_MongoInfra {
    return EnableClusterShardingRequest_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnableClusterShardingRequest_MongoInfra>): EnableClusterShardingRequest_MongoInfra {
    const message = createBaseEnableClusterShardingRequest_MongoInfra();
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(EnableClusterShardingRequest_MongoInfra.$type, EnableClusterShardingRequest_MongoInfra);

function createBaseEnableClusterShardingMetadata(): EnableClusterShardingMetadata {
  return { $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata", clusterId: "" };
}

export const EnableClusterShardingMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata" as const,

  encode(message: EnableClusterShardingMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableClusterShardingMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableClusterShardingMetadata();
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

  fromJSON(object: any): EnableClusterShardingMetadata {
    return {
      $type: EnableClusterShardingMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
    };
  },

  toJSON(message: EnableClusterShardingMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    return obj;
  },

  create(base?: DeepPartial<EnableClusterShardingMetadata>): EnableClusterShardingMetadata {
    return EnableClusterShardingMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnableClusterShardingMetadata>): EnableClusterShardingMetadata {
    const message = createBaseEnableClusterShardingMetadata();
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnableClusterShardingMetadata.$type, EnableClusterShardingMetadata);

function createBaseGetClusterShardRequest(): GetClusterShardRequest {
  return { $type: "yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest", clusterId: "", shardName: "" };
}

export const GetClusterShardRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListClusterShardsRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse", shards: [], nextPageToken: "" };
}

export const ListClusterShardsResponse = {
  $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest", clusterId: "", shardName: "", hostSpecs: [] };
}

export const AddClusterShardRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest" as const,

  encode(message: AddClusterShardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(26).fork()).ldelim();
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
  return { $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata", clusterId: "", shardName: "" };
}

export const AddClusterShardMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest", clusterId: "", shardName: "" };
}

export const DeleteClusterShardRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest" as const,

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
  return { $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata", clusterId: "", shardName: "" };
}

export const DeleteClusterShardMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata" as const,

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

function createBaseResetupHostsRequest(): ResetupHostsRequest {
  return { $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest", clusterId: "", hostNames: [] };
}

export const ResetupHostsRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest" as const,

  encode(message: ResetupHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResetupHostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResetupHostsRequest();
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

  fromJSON(object: any): ResetupHostsRequest {
    return {
      $type: ResetupHostsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ResetupHostsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<ResetupHostsRequest>): ResetupHostsRequest {
    return ResetupHostsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResetupHostsRequest>): ResetupHostsRequest {
    const message = createBaseResetupHostsRequest();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ResetupHostsRequest.$type, ResetupHostsRequest);

function createBaseResetupHostsMetadata(): ResetupHostsMetadata {
  return { $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata", clusterId: "", hostNames: [] };
}

export const ResetupHostsMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata" as const,

  encode(message: ResetupHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResetupHostsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResetupHostsMetadata();
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

  fromJSON(object: any): ResetupHostsMetadata {
    return {
      $type: ResetupHostsMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ResetupHostsMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<ResetupHostsMetadata>): ResetupHostsMetadata {
    return ResetupHostsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResetupHostsMetadata>): ResetupHostsMetadata {
    const message = createBaseResetupHostsMetadata();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ResetupHostsMetadata.$type, ResetupHostsMetadata);

function createBaseRestartHostsRequest(): RestartHostsRequest {
  return { $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsRequest", clusterId: "", hostNames: [] };
}

export const RestartHostsRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsRequest" as const,

  encode(message: RestartHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestartHostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestartHostsRequest();
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

  fromJSON(object: any): RestartHostsRequest {
    return {
      $type: RestartHostsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RestartHostsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<RestartHostsRequest>): RestartHostsRequest {
    return RestartHostsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestartHostsRequest>): RestartHostsRequest {
    const message = createBaseRestartHostsRequest();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RestartHostsRequest.$type, RestartHostsRequest);

function createBaseRestartHostsMetadata(): RestartHostsMetadata {
  return { $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata", clusterId: "", hostNames: [] };
}

export const RestartHostsMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata" as const,

  encode(message: RestartHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestartHostsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestartHostsMetadata();
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

  fromJSON(object: any): RestartHostsMetadata {
    return {
      $type: RestartHostsMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RestartHostsMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<RestartHostsMetadata>): RestartHostsMetadata {
    return RestartHostsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestartHostsMetadata>): RestartHostsMetadata {
    const message = createBaseRestartHostsMetadata();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RestartHostsMetadata.$type, RestartHostsMetadata);

function createBaseStepdownHostsRequest(): StepdownHostsRequest {
  return { $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest", clusterId: "", hostNames: [] };
}

export const StepdownHostsRequest = {
  $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest" as const,

  encode(message: StepdownHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StepdownHostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStepdownHostsRequest();
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

  fromJSON(object: any): StepdownHostsRequest {
    return {
      $type: StepdownHostsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StepdownHostsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<StepdownHostsRequest>): StepdownHostsRequest {
    return StepdownHostsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StepdownHostsRequest>): StepdownHostsRequest {
    const message = createBaseStepdownHostsRequest();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(StepdownHostsRequest.$type, StepdownHostsRequest);

function createBaseStepdownHostsMetadata(): StepdownHostsMetadata {
  return { $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata", clusterId: "", hostNames: [] };
}

export const StepdownHostsMetadata = {
  $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata" as const,

  encode(message: StepdownHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StepdownHostsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStepdownHostsMetadata();
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

  fromJSON(object: any): StepdownHostsMetadata {
    return {
      $type: StepdownHostsMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      hostNames: globalThis.Array.isArray(object?.hostNames)
        ? object.hostNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StepdownHostsMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.hostNames?.length) {
      obj.hostNames = message.hostNames;
    }
    return obj;
  },

  create(base?: DeepPartial<StepdownHostsMetadata>): StepdownHostsMetadata {
    return StepdownHostsMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StepdownHostsMetadata>): StepdownHostsMetadata {
    const message = createBaseStepdownHostsMetadata();
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(StepdownHostsMetadata.$type, StepdownHostsMetadata);

function createBaseHostSpec(): HostSpec {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.HostSpec",
    zoneId: "",
    subnetId: "",
    assignPublicIp: false,
    type: 0,
    shardName: "",
  };
}

export const HostSpec = {
  $type: "yandex.cloud.mdb.mongodb.v1.HostSpec" as const,

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
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
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
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
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
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      assignPublicIp: isSet(object.assignPublicIp) ? globalThis.Boolean(object.assignPublicIp) : false,
      type: isSet(object.type) ? host_TypeFromJSON(object.type) : 0,
      shardName: isSet(object.shardName) ? globalThis.String(object.shardName) : "",
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
    if (message.type !== 0) {
      obj.type = host_TypeToJSON(message.type);
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
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.type = object.type ?? 0;
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(HostSpec.$type, HostSpec);

function createBaseMongodbSpec36(): MongodbSpec36 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const MongodbSpec36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6" as const,

  encode(message: MongodbSpec36, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      MongodbSpec36_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      MongodbSpec36_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      MongodbSpec36_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      MongodbSpec36_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec36 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec36();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = MongodbSpec36_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = MongodbSpec36_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = MongodbSpec36_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = MongodbSpec36_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodbSpec36 {
    return {
      $type: MongodbSpec36.$type,
      mongod: isSet(object.mongod) ? MongodbSpec36_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? MongodbSpec36_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? MongodbSpec36_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? MongodbSpec36_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: MongodbSpec36): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = MongodbSpec36_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = MongodbSpec36_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = MongodbSpec36_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = MongodbSpec36_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec36>): MongodbSpec36 {
    return MongodbSpec36.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec36>): MongodbSpec36 {
    const message = createBaseMongodbSpec36();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? MongodbSpec36_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? MongodbSpec36_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? MongodbSpec36_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? MongodbSpec36_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec36.$type, MongodbSpec36);

function createBaseMongodbSpec36_Mongod(): MongodbSpec36_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod", config: undefined, resources: undefined };
}

export const MongodbSpec36_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod" as const,

  encode(message: MongodbSpec36_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfig36.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec36_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec36_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfig36.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec36_Mongod {
    return {
      $type: MongodbSpec36_Mongod.$type,
      config: isSet(object.config) ? MongodConfig36.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec36_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfig36.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec36_Mongod>): MongodbSpec36_Mongod {
    return MongodbSpec36_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec36_Mongod>): MongodbSpec36_Mongod {
    const message = createBaseMongodbSpec36_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfig36.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec36_Mongod.$type, MongodbSpec36_Mongod);

function createBaseMongodbSpec36_MongoCfg(): MongodbSpec36_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg", config: undefined, resources: undefined };
}

export const MongodbSpec36_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg" as const,

  encode(message: MongodbSpec36_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfig36.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec36_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec36_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfig36.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec36_MongoCfg {
    return {
      $type: MongodbSpec36_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfig36.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec36_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfig36.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec36_MongoCfg>): MongodbSpec36_MongoCfg {
    return MongodbSpec36_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec36_MongoCfg>): MongodbSpec36_MongoCfg {
    const message = createBaseMongodbSpec36_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfig36.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec36_MongoCfg.$type, MongodbSpec36_MongoCfg);

function createBaseMongodbSpec36_Mongos(): MongodbSpec36_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos", config: undefined, resources: undefined };
}

export const MongodbSpec36_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos" as const,

  encode(message: MongodbSpec36_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfig36.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec36_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec36_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfig36.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec36_Mongos {
    return {
      $type: MongodbSpec36_Mongos.$type,
      config: isSet(object.config) ? MongosConfig36.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec36_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfig36.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec36_Mongos>): MongodbSpec36_Mongos {
    return MongodbSpec36_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec36_Mongos>): MongodbSpec36_Mongos {
    const message = createBaseMongodbSpec36_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfig36.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec36_Mongos.$type, MongodbSpec36_Mongos);

function createBaseMongodbSpec36_MongoInfra(): MongodbSpec36_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const MongodbSpec36_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra" as const,

  encode(message: MongodbSpec36_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfig36.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfig36.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec36_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec36_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfig36.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfig36.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MongodbSpec36_MongoInfra {
    return {
      $type: MongodbSpec36_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfig36.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfig36.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec36_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfig36.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfig36.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec36_MongoInfra>): MongodbSpec36_MongoInfra {
    return MongodbSpec36_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec36_MongoInfra>): MongodbSpec36_MongoInfra {
    const message = createBaseMongodbSpec36_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfig36.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfig36.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec36_MongoInfra.$type, MongodbSpec36_MongoInfra);

function createBaseMongodbSpec40(): MongodbSpec40 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const MongodbSpec40 = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0" as const,

  encode(message: MongodbSpec40, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      MongodbSpec40_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      MongodbSpec40_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      MongodbSpec40_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      MongodbSpec40_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec40 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec40();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = MongodbSpec40_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = MongodbSpec40_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = MongodbSpec40_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = MongodbSpec40_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodbSpec40 {
    return {
      $type: MongodbSpec40.$type,
      mongod: isSet(object.mongod) ? MongodbSpec40_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? MongodbSpec40_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? MongodbSpec40_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? MongodbSpec40_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: MongodbSpec40): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = MongodbSpec40_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = MongodbSpec40_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = MongodbSpec40_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = MongodbSpec40_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec40>): MongodbSpec40 {
    return MongodbSpec40.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec40>): MongodbSpec40 {
    const message = createBaseMongodbSpec40();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? MongodbSpec40_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? MongodbSpec40_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? MongodbSpec40_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? MongodbSpec40_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec40.$type, MongodbSpec40);

function createBaseMongodbSpec40_Mongod(): MongodbSpec40_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod", config: undefined, resources: undefined };
}

export const MongodbSpec40_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod" as const,

  encode(message: MongodbSpec40_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfig40.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec40_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec40_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfig40.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec40_Mongod {
    return {
      $type: MongodbSpec40_Mongod.$type,
      config: isSet(object.config) ? MongodConfig40.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec40_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfig40.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec40_Mongod>): MongodbSpec40_Mongod {
    return MongodbSpec40_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec40_Mongod>): MongodbSpec40_Mongod {
    const message = createBaseMongodbSpec40_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfig40.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec40_Mongod.$type, MongodbSpec40_Mongod);

function createBaseMongodbSpec40_MongoCfg(): MongodbSpec40_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg", config: undefined, resources: undefined };
}

export const MongodbSpec40_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg" as const,

  encode(message: MongodbSpec40_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfig40.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec40_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec40_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfig40.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec40_MongoCfg {
    return {
      $type: MongodbSpec40_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfig40.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec40_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfig40.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec40_MongoCfg>): MongodbSpec40_MongoCfg {
    return MongodbSpec40_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec40_MongoCfg>): MongodbSpec40_MongoCfg {
    const message = createBaseMongodbSpec40_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfig40.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec40_MongoCfg.$type, MongodbSpec40_MongoCfg);

function createBaseMongodbSpec40_Mongos(): MongodbSpec40_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos", config: undefined, resources: undefined };
}

export const MongodbSpec40_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos" as const,

  encode(message: MongodbSpec40_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfig40.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec40_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec40_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfig40.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec40_Mongos {
    return {
      $type: MongodbSpec40_Mongos.$type,
      config: isSet(object.config) ? MongosConfig40.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec40_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfig40.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec40_Mongos>): MongodbSpec40_Mongos {
    return MongodbSpec40_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec40_Mongos>): MongodbSpec40_Mongos {
    const message = createBaseMongodbSpec40_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfig40.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec40_Mongos.$type, MongodbSpec40_Mongos);

function createBaseMongodbSpec40_MongoInfra(): MongodbSpec40_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const MongodbSpec40_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra" as const,

  encode(message: MongodbSpec40_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfig40.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfig40.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec40_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec40_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfig40.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfig40.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MongodbSpec40_MongoInfra {
    return {
      $type: MongodbSpec40_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfig40.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfig40.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec40_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfig40.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfig40.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec40_MongoInfra>): MongodbSpec40_MongoInfra {
    return MongodbSpec40_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec40_MongoInfra>): MongodbSpec40_MongoInfra {
    const message = createBaseMongodbSpec40_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfig40.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfig40.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec40_MongoInfra.$type, MongodbSpec40_MongoInfra);

function createBaseMongodbSpec42(): MongodbSpec42 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const MongodbSpec42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2" as const,

  encode(message: MongodbSpec42, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      MongodbSpec42_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      MongodbSpec42_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      MongodbSpec42_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      MongodbSpec42_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec42 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec42();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = MongodbSpec42_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = MongodbSpec42_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = MongodbSpec42_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = MongodbSpec42_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodbSpec42 {
    return {
      $type: MongodbSpec42.$type,
      mongod: isSet(object.mongod) ? MongodbSpec42_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? MongodbSpec42_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? MongodbSpec42_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? MongodbSpec42_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: MongodbSpec42): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = MongodbSpec42_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = MongodbSpec42_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = MongodbSpec42_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = MongodbSpec42_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec42>): MongodbSpec42 {
    return MongodbSpec42.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec42>): MongodbSpec42 {
    const message = createBaseMongodbSpec42();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? MongodbSpec42_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? MongodbSpec42_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? MongodbSpec42_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? MongodbSpec42_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec42.$type, MongodbSpec42);

function createBaseMongodbSpec42_Mongod(): MongodbSpec42_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod", config: undefined, resources: undefined };
}

export const MongodbSpec42_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod" as const,

  encode(message: MongodbSpec42_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfig42.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec42_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec42_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfig42.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec42_Mongod {
    return {
      $type: MongodbSpec42_Mongod.$type,
      config: isSet(object.config) ? MongodConfig42.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec42_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfig42.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec42_Mongod>): MongodbSpec42_Mongod {
    return MongodbSpec42_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec42_Mongod>): MongodbSpec42_Mongod {
    const message = createBaseMongodbSpec42_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfig42.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec42_Mongod.$type, MongodbSpec42_Mongod);

function createBaseMongodbSpec42_MongoCfg(): MongodbSpec42_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg", config: undefined, resources: undefined };
}

export const MongodbSpec42_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg" as const,

  encode(message: MongodbSpec42_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfig42.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec42_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec42_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfig42.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec42_MongoCfg {
    return {
      $type: MongodbSpec42_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfig42.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec42_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfig42.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec42_MongoCfg>): MongodbSpec42_MongoCfg {
    return MongodbSpec42_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec42_MongoCfg>): MongodbSpec42_MongoCfg {
    const message = createBaseMongodbSpec42_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfig42.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec42_MongoCfg.$type, MongodbSpec42_MongoCfg);

function createBaseMongodbSpec42_Mongos(): MongodbSpec42_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos", config: undefined, resources: undefined };
}

export const MongodbSpec42_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos" as const,

  encode(message: MongodbSpec42_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfig42.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec42_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec42_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfig42.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec42_Mongos {
    return {
      $type: MongodbSpec42_Mongos.$type,
      config: isSet(object.config) ? MongosConfig42.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec42_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfig42.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec42_Mongos>): MongodbSpec42_Mongos {
    return MongodbSpec42_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec42_Mongos>): MongodbSpec42_Mongos {
    const message = createBaseMongodbSpec42_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfig42.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec42_Mongos.$type, MongodbSpec42_Mongos);

function createBaseMongodbSpec42_MongoInfra(): MongodbSpec42_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const MongodbSpec42_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra" as const,

  encode(message: MongodbSpec42_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfig42.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfig42.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec42_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec42_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfig42.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfig42.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MongodbSpec42_MongoInfra {
    return {
      $type: MongodbSpec42_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfig42.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfig42.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec42_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfig42.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfig42.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec42_MongoInfra>): MongodbSpec42_MongoInfra {
    return MongodbSpec42_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec42_MongoInfra>): MongodbSpec42_MongoInfra {
    const message = createBaseMongodbSpec42_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfig42.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfig42.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec42_MongoInfra.$type, MongodbSpec42_MongoInfra);

function createBaseMongodbSpec44(): MongodbSpec44 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const MongodbSpec44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4" as const,

  encode(message: MongodbSpec44, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      MongodbSpec44_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      MongodbSpec44_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      MongodbSpec44_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      MongodbSpec44_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = MongodbSpec44_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = MongodbSpec44_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = MongodbSpec44_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = MongodbSpec44_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodbSpec44 {
    return {
      $type: MongodbSpec44.$type,
      mongod: isSet(object.mongod) ? MongodbSpec44_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? MongodbSpec44_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? MongodbSpec44_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? MongodbSpec44_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: MongodbSpec44): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = MongodbSpec44_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = MongodbSpec44_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = MongodbSpec44_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = MongodbSpec44_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44>): MongodbSpec44 {
    return MongodbSpec44.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44>): MongodbSpec44 {
    const message = createBaseMongodbSpec44();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? MongodbSpec44_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? MongodbSpec44_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? MongodbSpec44_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? MongodbSpec44_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44.$type, MongodbSpec44);

function createBaseMongodbSpec44_Mongod(): MongodbSpec44_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod", config: undefined, resources: undefined };
}

export const MongodbSpec44_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod" as const,

  encode(message: MongodbSpec44_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfig44.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfig44.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec44_Mongod {
    return {
      $type: MongodbSpec44_Mongod.$type,
      config: isSet(object.config) ? MongodConfig44.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec44_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfig44.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44_Mongod>): MongodbSpec44_Mongod {
    return MongodbSpec44_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44_Mongod>): MongodbSpec44_Mongod {
    const message = createBaseMongodbSpec44_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfig44.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44_Mongod.$type, MongodbSpec44_Mongod);

function createBaseMongodbSpec44_MongoCfg(): MongodbSpec44_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg", config: undefined, resources: undefined };
}

export const MongodbSpec44_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg" as const,

  encode(message: MongodbSpec44_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfig44.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfig44.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec44_MongoCfg {
    return {
      $type: MongodbSpec44_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfig44.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec44_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfig44.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44_MongoCfg>): MongodbSpec44_MongoCfg {
    return MongodbSpec44_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44_MongoCfg>): MongodbSpec44_MongoCfg {
    const message = createBaseMongodbSpec44_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfig44.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44_MongoCfg.$type, MongodbSpec44_MongoCfg);

function createBaseMongodbSpec44_Mongos(): MongodbSpec44_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos", config: undefined, resources: undefined };
}

export const MongodbSpec44_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos" as const,

  encode(message: MongodbSpec44_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfig44.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfig44.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec44_Mongos {
    return {
      $type: MongodbSpec44_Mongos.$type,
      config: isSet(object.config) ? MongosConfig44.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec44_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfig44.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44_Mongos>): MongodbSpec44_Mongos {
    return MongodbSpec44_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44_Mongos>): MongodbSpec44_Mongos {
    const message = createBaseMongodbSpec44_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfig44.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44_Mongos.$type, MongodbSpec44_Mongos);

function createBaseMongodbSpec44_MongoInfra(): MongodbSpec44_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const MongodbSpec44_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra" as const,

  encode(message: MongodbSpec44_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfig44.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfig44.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfig44.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfig44.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MongodbSpec44_MongoInfra {
    return {
      $type: MongodbSpec44_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfig44.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfig44.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec44_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfig44.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfig44.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44_MongoInfra>): MongodbSpec44_MongoInfra {
    return MongodbSpec44_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44_MongoInfra>): MongodbSpec44_MongoInfra {
    const message = createBaseMongodbSpec44_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfig44.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfig44.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44_MongoInfra.$type, MongodbSpec44_MongoInfra);

function createBaseMongodbSpec44Enterprise(): MongodbSpec44Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const MongodbSpec44Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise" as const,

  encode(message: MongodbSpec44Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      MongodbSpec44Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      MongodbSpec44Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      MongodbSpec44Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      MongodbSpec44Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = MongodbSpec44Enterprise_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = MongodbSpec44Enterprise_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = MongodbSpec44Enterprise_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = MongodbSpec44Enterprise_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodbSpec44Enterprise {
    return {
      $type: MongodbSpec44Enterprise.$type,
      mongod: isSet(object.mongod) ? MongodbSpec44Enterprise_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? MongodbSpec44Enterprise_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? MongodbSpec44Enterprise_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? MongodbSpec44Enterprise_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: MongodbSpec44Enterprise): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = MongodbSpec44Enterprise_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = MongodbSpec44Enterprise_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = MongodbSpec44Enterprise_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = MongodbSpec44Enterprise_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44Enterprise>): MongodbSpec44Enterprise {
    return MongodbSpec44Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44Enterprise>): MongodbSpec44Enterprise {
    const message = createBaseMongodbSpec44Enterprise();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? MongodbSpec44Enterprise_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? MongodbSpec44Enterprise_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? MongodbSpec44Enterprise_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? MongodbSpec44Enterprise_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44Enterprise.$type, MongodbSpec44Enterprise);

function createBaseMongodbSpec44Enterprise_Mongod(): MongodbSpec44Enterprise_Mongod {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod",
    config: undefined,
    resources: undefined,
  };
}

export const MongodbSpec44Enterprise_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod" as const,

  encode(message: MongodbSpec44Enterprise_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfig44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44Enterprise_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44Enterprise_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfig44Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec44Enterprise_Mongod {
    return {
      $type: MongodbSpec44Enterprise_Mongod.$type,
      config: isSet(object.config) ? MongodConfig44Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec44Enterprise_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfig44Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44Enterprise_Mongod>): MongodbSpec44Enterprise_Mongod {
    return MongodbSpec44Enterprise_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44Enterprise_Mongod>): MongodbSpec44Enterprise_Mongod {
    const message = createBaseMongodbSpec44Enterprise_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfig44Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44Enterprise_Mongod.$type, MongodbSpec44Enterprise_Mongod);

function createBaseMongodbSpec44Enterprise_MongoCfg(): MongodbSpec44Enterprise_MongoCfg {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg",
    config: undefined,
    resources: undefined,
  };
}

export const MongodbSpec44Enterprise_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg" as const,

  encode(message: MongodbSpec44Enterprise_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfig44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44Enterprise_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44Enterprise_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfig44Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec44Enterprise_MongoCfg {
    return {
      $type: MongodbSpec44Enterprise_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfig44Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec44Enterprise_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfig44Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44Enterprise_MongoCfg>): MongodbSpec44Enterprise_MongoCfg {
    return MongodbSpec44Enterprise_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44Enterprise_MongoCfg>): MongodbSpec44Enterprise_MongoCfg {
    const message = createBaseMongodbSpec44Enterprise_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfig44Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44Enterprise_MongoCfg.$type, MongodbSpec44Enterprise_MongoCfg);

function createBaseMongodbSpec44Enterprise_Mongos(): MongodbSpec44Enterprise_Mongos {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos",
    config: undefined,
    resources: undefined,
  };
}

export const MongodbSpec44Enterprise_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos" as const,

  encode(message: MongodbSpec44Enterprise_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfig44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44Enterprise_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44Enterprise_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfig44Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec44Enterprise_Mongos {
    return {
      $type: MongodbSpec44Enterprise_Mongos.$type,
      config: isSet(object.config) ? MongosConfig44Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec44Enterprise_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfig44Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44Enterprise_Mongos>): MongodbSpec44Enterprise_Mongos {
    return MongodbSpec44Enterprise_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44Enterprise_Mongos>): MongodbSpec44Enterprise_Mongos {
    const message = createBaseMongodbSpec44Enterprise_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfig44Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44Enterprise_Mongos.$type, MongodbSpec44Enterprise_Mongos);

function createBaseMongodbSpec44Enterprise_MongoInfra(): MongodbSpec44Enterprise_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const MongodbSpec44Enterprise_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra" as const,

  encode(message: MongodbSpec44Enterprise_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfig44Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfig44Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec44Enterprise_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec44Enterprise_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfig44Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfig44Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MongodbSpec44Enterprise_MongoInfra {
    return {
      $type: MongodbSpec44Enterprise_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfig44Enterprise.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg)
        ? MongoCfgConfig44Enterprise.fromJSON(object.configMongocfg)
        : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec44Enterprise_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfig44Enterprise.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfig44Enterprise.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec44Enterprise_MongoInfra>): MongodbSpec44Enterprise_MongoInfra {
    return MongodbSpec44Enterprise_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec44Enterprise_MongoInfra>): MongodbSpec44Enterprise_MongoInfra {
    const message = createBaseMongodbSpec44Enterprise_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfig44Enterprise.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfig44Enterprise.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec44Enterprise_MongoInfra.$type, MongodbSpec44Enterprise_MongoInfra);

function createBaseMongodbSpec50(): MongodbSpec50 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const MongodbSpec50 = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0" as const,

  encode(message: MongodbSpec50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      MongodbSpec50_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      MongodbSpec50_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      MongodbSpec50_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      MongodbSpec50_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = MongodbSpec50_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = MongodbSpec50_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = MongodbSpec50_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = MongodbSpec50_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodbSpec50 {
    return {
      $type: MongodbSpec50.$type,
      mongod: isSet(object.mongod) ? MongodbSpec50_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? MongodbSpec50_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? MongodbSpec50_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? MongodbSpec50_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: MongodbSpec50): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = MongodbSpec50_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = MongodbSpec50_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = MongodbSpec50_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = MongodbSpec50_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50>): MongodbSpec50 {
    return MongodbSpec50.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50>): MongodbSpec50 {
    const message = createBaseMongodbSpec50();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? MongodbSpec50_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? MongodbSpec50_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? MongodbSpec50_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? MongodbSpec50_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50.$type, MongodbSpec50);

function createBaseMongodbSpec50_Mongod(): MongodbSpec50_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod", config: undefined, resources: undefined };
}

export const MongodbSpec50_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod" as const,

  encode(message: MongodbSpec50_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfig50.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfig50.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec50_Mongod {
    return {
      $type: MongodbSpec50_Mongod.$type,
      config: isSet(object.config) ? MongodConfig50.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec50_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfig50.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50_Mongod>): MongodbSpec50_Mongod {
    return MongodbSpec50_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50_Mongod>): MongodbSpec50_Mongod {
    const message = createBaseMongodbSpec50_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfig50.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50_Mongod.$type, MongodbSpec50_Mongod);

function createBaseMongodbSpec50_MongoCfg(): MongodbSpec50_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg", config: undefined, resources: undefined };
}

export const MongodbSpec50_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg" as const,

  encode(message: MongodbSpec50_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfig50.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfig50.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec50_MongoCfg {
    return {
      $type: MongodbSpec50_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfig50.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec50_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfig50.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50_MongoCfg>): MongodbSpec50_MongoCfg {
    return MongodbSpec50_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50_MongoCfg>): MongodbSpec50_MongoCfg {
    const message = createBaseMongodbSpec50_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfig50.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50_MongoCfg.$type, MongodbSpec50_MongoCfg);

function createBaseMongodbSpec50_Mongos(): MongodbSpec50_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos", config: undefined, resources: undefined };
}

export const MongodbSpec50_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos" as const,

  encode(message: MongodbSpec50_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfig50.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfig50.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec50_Mongos {
    return {
      $type: MongodbSpec50_Mongos.$type,
      config: isSet(object.config) ? MongosConfig50.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec50_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfig50.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50_Mongos>): MongodbSpec50_Mongos {
    return MongodbSpec50_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50_Mongos>): MongodbSpec50_Mongos {
    const message = createBaseMongodbSpec50_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfig50.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50_Mongos.$type, MongodbSpec50_Mongos);

function createBaseMongodbSpec50_MongoInfra(): MongodbSpec50_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const MongodbSpec50_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra" as const,

  encode(message: MongodbSpec50_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfig50.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfig50.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfig50.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfig50.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MongodbSpec50_MongoInfra {
    return {
      $type: MongodbSpec50_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfig50.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfig50.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec50_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfig50.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfig50.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50_MongoInfra>): MongodbSpec50_MongoInfra {
    return MongodbSpec50_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50_MongoInfra>): MongodbSpec50_MongoInfra {
    const message = createBaseMongodbSpec50_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfig50.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfig50.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50_MongoInfra.$type, MongodbSpec50_MongoInfra);

function createBaseMongodbSpec50Enterprise(): MongodbSpec50Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const MongodbSpec50Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise" as const,

  encode(message: MongodbSpec50Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      MongodbSpec50Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      MongodbSpec50Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      MongodbSpec50Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      MongodbSpec50Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = MongodbSpec50Enterprise_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = MongodbSpec50Enterprise_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = MongodbSpec50Enterprise_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = MongodbSpec50Enterprise_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodbSpec50Enterprise {
    return {
      $type: MongodbSpec50Enterprise.$type,
      mongod: isSet(object.mongod) ? MongodbSpec50Enterprise_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? MongodbSpec50Enterprise_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? MongodbSpec50Enterprise_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? MongodbSpec50Enterprise_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: MongodbSpec50Enterprise): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = MongodbSpec50Enterprise_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = MongodbSpec50Enterprise_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = MongodbSpec50Enterprise_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = MongodbSpec50Enterprise_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50Enterprise>): MongodbSpec50Enterprise {
    return MongodbSpec50Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50Enterprise>): MongodbSpec50Enterprise {
    const message = createBaseMongodbSpec50Enterprise();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? MongodbSpec50Enterprise_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? MongodbSpec50Enterprise_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? MongodbSpec50Enterprise_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? MongodbSpec50Enterprise_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50Enterprise.$type, MongodbSpec50Enterprise);

function createBaseMongodbSpec50Enterprise_Mongod(): MongodbSpec50Enterprise_Mongod {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod",
    config: undefined,
    resources: undefined,
  };
}

export const MongodbSpec50Enterprise_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod" as const,

  encode(message: MongodbSpec50Enterprise_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfig50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50Enterprise_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50Enterprise_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfig50Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec50Enterprise_Mongod {
    return {
      $type: MongodbSpec50Enterprise_Mongod.$type,
      config: isSet(object.config) ? MongodConfig50Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec50Enterprise_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfig50Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50Enterprise_Mongod>): MongodbSpec50Enterprise_Mongod {
    return MongodbSpec50Enterprise_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50Enterprise_Mongod>): MongodbSpec50Enterprise_Mongod {
    const message = createBaseMongodbSpec50Enterprise_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfig50Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50Enterprise_Mongod.$type, MongodbSpec50Enterprise_Mongod);

function createBaseMongodbSpec50Enterprise_MongoCfg(): MongodbSpec50Enterprise_MongoCfg {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg",
    config: undefined,
    resources: undefined,
  };
}

export const MongodbSpec50Enterprise_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg" as const,

  encode(message: MongodbSpec50Enterprise_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfig50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50Enterprise_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50Enterprise_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfig50Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec50Enterprise_MongoCfg {
    return {
      $type: MongodbSpec50Enterprise_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfig50Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec50Enterprise_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfig50Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50Enterprise_MongoCfg>): MongodbSpec50Enterprise_MongoCfg {
    return MongodbSpec50Enterprise_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50Enterprise_MongoCfg>): MongodbSpec50Enterprise_MongoCfg {
    const message = createBaseMongodbSpec50Enterprise_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfig50Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50Enterprise_MongoCfg.$type, MongodbSpec50Enterprise_MongoCfg);

function createBaseMongodbSpec50Enterprise_Mongos(): MongodbSpec50Enterprise_Mongos {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos",
    config: undefined,
    resources: undefined,
  };
}

export const MongodbSpec50Enterprise_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos" as const,

  encode(message: MongodbSpec50Enterprise_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfig50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50Enterprise_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50Enterprise_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfig50Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec50Enterprise_Mongos {
    return {
      $type: MongodbSpec50Enterprise_Mongos.$type,
      config: isSet(object.config) ? MongosConfig50Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec50Enterprise_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfig50Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50Enterprise_Mongos>): MongodbSpec50Enterprise_Mongos {
    return MongodbSpec50Enterprise_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50Enterprise_Mongos>): MongodbSpec50Enterprise_Mongos {
    const message = createBaseMongodbSpec50Enterprise_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfig50Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50Enterprise_Mongos.$type, MongodbSpec50Enterprise_Mongos);

function createBaseMongodbSpec50Enterprise_MongoInfra(): MongodbSpec50Enterprise_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const MongodbSpec50Enterprise_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra" as const,

  encode(message: MongodbSpec50Enterprise_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfig50Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfig50Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec50Enterprise_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec50Enterprise_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfig50Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfig50Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MongodbSpec50Enterprise_MongoInfra {
    return {
      $type: MongodbSpec50Enterprise_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfig50Enterprise.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg)
        ? MongoCfgConfig50Enterprise.fromJSON(object.configMongocfg)
        : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec50Enterprise_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfig50Enterprise.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfig50Enterprise.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec50Enterprise_MongoInfra>): MongodbSpec50Enterprise_MongoInfra {
    return MongodbSpec50Enterprise_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec50Enterprise_MongoInfra>): MongodbSpec50Enterprise_MongoInfra {
    const message = createBaseMongodbSpec50Enterprise_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfig50Enterprise.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfig50Enterprise.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec50Enterprise_MongoInfra.$type, MongodbSpec50Enterprise_MongoInfra);

function createBaseMongodbSpec60(): MongodbSpec60 {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const MongodbSpec60 = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0" as const,

  encode(message: MongodbSpec60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      MongodbSpec60_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      MongodbSpec60_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      MongodbSpec60_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      MongodbSpec60_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = MongodbSpec60_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = MongodbSpec60_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = MongodbSpec60_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = MongodbSpec60_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodbSpec60 {
    return {
      $type: MongodbSpec60.$type,
      mongod: isSet(object.mongod) ? MongodbSpec60_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? MongodbSpec60_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? MongodbSpec60_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? MongodbSpec60_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: MongodbSpec60): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = MongodbSpec60_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = MongodbSpec60_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = MongodbSpec60_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = MongodbSpec60_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60>): MongodbSpec60 {
    return MongodbSpec60.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60>): MongodbSpec60 {
    const message = createBaseMongodbSpec60();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? MongodbSpec60_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? MongodbSpec60_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? MongodbSpec60_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? MongodbSpec60_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60.$type, MongodbSpec60);

function createBaseMongodbSpec60_Mongod(): MongodbSpec60_Mongod {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongod", config: undefined, resources: undefined };
}

export const MongodbSpec60_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongod" as const,

  encode(message: MongodbSpec60_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfig60.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfig60.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec60_Mongod {
    return {
      $type: MongodbSpec60_Mongod.$type,
      config: isSet(object.config) ? MongodConfig60.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec60_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfig60.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60_Mongod>): MongodbSpec60_Mongod {
    return MongodbSpec60_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60_Mongod>): MongodbSpec60_Mongod {
    const message = createBaseMongodbSpec60_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfig60.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60_Mongod.$type, MongodbSpec60_Mongod);

function createBaseMongodbSpec60_MongoCfg(): MongodbSpec60_MongoCfg {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoCfg", config: undefined, resources: undefined };
}

export const MongodbSpec60_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoCfg" as const,

  encode(message: MongodbSpec60_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfig60.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfig60.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec60_MongoCfg {
    return {
      $type: MongodbSpec60_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfig60.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec60_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfig60.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60_MongoCfg>): MongodbSpec60_MongoCfg {
    return MongodbSpec60_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60_MongoCfg>): MongodbSpec60_MongoCfg {
    const message = createBaseMongodbSpec60_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfig60.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60_MongoCfg.$type, MongodbSpec60_MongoCfg);

function createBaseMongodbSpec60_Mongos(): MongodbSpec60_Mongos {
  return { $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongos", config: undefined, resources: undefined };
}

export const MongodbSpec60_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongos" as const,

  encode(message: MongodbSpec60_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfig60.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfig60.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec60_Mongos {
    return {
      $type: MongodbSpec60_Mongos.$type,
      config: isSet(object.config) ? MongosConfig60.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec60_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfig60.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60_Mongos>): MongodbSpec60_Mongos {
    return MongodbSpec60_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60_Mongos>): MongodbSpec60_Mongos {
    const message = createBaseMongodbSpec60_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfig60.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60_Mongos.$type, MongodbSpec60_Mongos);

function createBaseMongodbSpec60_MongoInfra(): MongodbSpec60_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const MongodbSpec60_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoInfra" as const,

  encode(message: MongodbSpec60_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfig60.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfig60.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfig60.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfig60.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MongodbSpec60_MongoInfra {
    return {
      $type: MongodbSpec60_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfig60.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg) ? MongoCfgConfig60.fromJSON(object.configMongocfg) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec60_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfig60.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfig60.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60_MongoInfra>): MongodbSpec60_MongoInfra {
    return MongodbSpec60_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60_MongoInfra>): MongodbSpec60_MongoInfra {
    const message = createBaseMongodbSpec60_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfig60.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfig60.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60_MongoInfra.$type, MongodbSpec60_MongoInfra);

function createBaseMongodbSpec60Enterprise(): MongodbSpec60Enterprise {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise",
    mongod: undefined,
    mongocfg: undefined,
    mongos: undefined,
    mongoinfra: undefined,
  };
}

export const MongodbSpec60Enterprise = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise" as const,

  encode(message: MongodbSpec60Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mongod !== undefined) {
      MongodbSpec60Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
    }
    if (message.mongocfg !== undefined) {
      MongodbSpec60Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongos !== undefined) {
      MongodbSpec60Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      MongodbSpec60Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60Enterprise {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60Enterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mongod = MongodbSpec60Enterprise_Mongod.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongocfg = MongodbSpec60Enterprise_MongoCfg.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mongos = MongodbSpec60Enterprise_Mongos.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongoinfra = MongodbSpec60Enterprise_MongoInfra.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongodbSpec60Enterprise {
    return {
      $type: MongodbSpec60Enterprise.$type,
      mongod: isSet(object.mongod) ? MongodbSpec60Enterprise_Mongod.fromJSON(object.mongod) : undefined,
      mongocfg: isSet(object.mongocfg) ? MongodbSpec60Enterprise_MongoCfg.fromJSON(object.mongocfg) : undefined,
      mongos: isSet(object.mongos) ? MongodbSpec60Enterprise_Mongos.fromJSON(object.mongos) : undefined,
      mongoinfra: isSet(object.mongoinfra) ? MongodbSpec60Enterprise_MongoInfra.fromJSON(object.mongoinfra) : undefined,
    };
  },

  toJSON(message: MongodbSpec60Enterprise): unknown {
    const obj: any = {};
    if (message.mongod !== undefined) {
      obj.mongod = MongodbSpec60Enterprise_Mongod.toJSON(message.mongod);
    }
    if (message.mongocfg !== undefined) {
      obj.mongocfg = MongodbSpec60Enterprise_MongoCfg.toJSON(message.mongocfg);
    }
    if (message.mongos !== undefined) {
      obj.mongos = MongodbSpec60Enterprise_Mongos.toJSON(message.mongos);
    }
    if (message.mongoinfra !== undefined) {
      obj.mongoinfra = MongodbSpec60Enterprise_MongoInfra.toJSON(message.mongoinfra);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60Enterprise>): MongodbSpec60Enterprise {
    return MongodbSpec60Enterprise.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60Enterprise>): MongodbSpec60Enterprise {
    const message = createBaseMongodbSpec60Enterprise();
    message.mongod = (object.mongod !== undefined && object.mongod !== null)
      ? MongodbSpec60Enterprise_Mongod.fromPartial(object.mongod)
      : undefined;
    message.mongocfg = (object.mongocfg !== undefined && object.mongocfg !== null)
      ? MongodbSpec60Enterprise_MongoCfg.fromPartial(object.mongocfg)
      : undefined;
    message.mongos = (object.mongos !== undefined && object.mongos !== null)
      ? MongodbSpec60Enterprise_Mongos.fromPartial(object.mongos)
      : undefined;
    message.mongoinfra = (object.mongoinfra !== undefined && object.mongoinfra !== null)
      ? MongodbSpec60Enterprise_MongoInfra.fromPartial(object.mongoinfra)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60Enterprise.$type, MongodbSpec60Enterprise);

function createBaseMongodbSpec60Enterprise_Mongod(): MongodbSpec60Enterprise_Mongod {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongod",
    config: undefined,
    resources: undefined,
  };
}

export const MongodbSpec60Enterprise_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongod" as const,

  encode(message: MongodbSpec60Enterprise_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongodConfig60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60Enterprise_Mongod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60Enterprise_Mongod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongodConfig60Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec60Enterprise_Mongod {
    return {
      $type: MongodbSpec60Enterprise_Mongod.$type,
      config: isSet(object.config) ? MongodConfig60Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec60Enterprise_Mongod): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongodConfig60Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60Enterprise_Mongod>): MongodbSpec60Enterprise_Mongod {
    return MongodbSpec60Enterprise_Mongod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60Enterprise_Mongod>): MongodbSpec60Enterprise_Mongod {
    const message = createBaseMongodbSpec60Enterprise_Mongod();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongodConfig60Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60Enterprise_Mongod.$type, MongodbSpec60Enterprise_Mongod);

function createBaseMongodbSpec60Enterprise_MongoCfg(): MongodbSpec60Enterprise_MongoCfg {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoCfg",
    config: undefined,
    resources: undefined,
  };
}

export const MongodbSpec60Enterprise_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoCfg" as const,

  encode(message: MongodbSpec60Enterprise_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongoCfgConfig60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60Enterprise_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60Enterprise_MongoCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongoCfgConfig60Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec60Enterprise_MongoCfg {
    return {
      $type: MongodbSpec60Enterprise_MongoCfg.$type,
      config: isSet(object.config) ? MongoCfgConfig60Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec60Enterprise_MongoCfg): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongoCfgConfig60Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60Enterprise_MongoCfg>): MongodbSpec60Enterprise_MongoCfg {
    return MongodbSpec60Enterprise_MongoCfg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60Enterprise_MongoCfg>): MongodbSpec60Enterprise_MongoCfg {
    const message = createBaseMongodbSpec60Enterprise_MongoCfg();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongoCfgConfig60Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60Enterprise_MongoCfg.$type, MongodbSpec60Enterprise_MongoCfg);

function createBaseMongodbSpec60Enterprise_Mongos(): MongodbSpec60Enterprise_Mongos {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongos",
    config: undefined,
    resources: undefined,
  };
}

export const MongodbSpec60Enterprise_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongos" as const,

  encode(message: MongodbSpec60Enterprise_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      MongosConfig60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60Enterprise_Mongos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60Enterprise_Mongos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = MongosConfig60Enterprise.decode(reader, reader.uint32());
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

  fromJSON(object: any): MongodbSpec60Enterprise_Mongos {
    return {
      $type: MongodbSpec60Enterprise_Mongos.$type,
      config: isSet(object.config) ? MongosConfig60Enterprise.fromJSON(object.config) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec60Enterprise_Mongos): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = MongosConfig60Enterprise.toJSON(message.config);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60Enterprise_Mongos>): MongodbSpec60Enterprise_Mongos {
    return MongodbSpec60Enterprise_Mongos.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60Enterprise_Mongos>): MongodbSpec60Enterprise_Mongos {
    const message = createBaseMongodbSpec60Enterprise_Mongos();
    message.config = (object.config !== undefined && object.config !== null)
      ? MongosConfig60Enterprise.fromPartial(object.config)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60Enterprise_Mongos.$type, MongodbSpec60Enterprise_Mongos);

function createBaseMongodbSpec60Enterprise_MongoInfra(): MongodbSpec60Enterprise_MongoInfra {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoInfra",
    configMongos: undefined,
    configMongocfg: undefined,
    resources: undefined,
  };
}

export const MongodbSpec60Enterprise_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoInfra" as const,

  encode(message: MongodbSpec60Enterprise_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configMongos !== undefined) {
      MongosConfig60Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      MongoCfgConfig60Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec60Enterprise_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongodbSpec60Enterprise_MongoInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configMongos = MongosConfig60Enterprise.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configMongocfg = MongoCfgConfig60Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MongodbSpec60Enterprise_MongoInfra {
    return {
      $type: MongodbSpec60Enterprise_MongoInfra.$type,
      configMongos: isSet(object.configMongos) ? MongosConfig60Enterprise.fromJSON(object.configMongos) : undefined,
      configMongocfg: isSet(object.configMongocfg)
        ? MongoCfgConfig60Enterprise.fromJSON(object.configMongocfg)
        : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: MongodbSpec60Enterprise_MongoInfra): unknown {
    const obj: any = {};
    if (message.configMongos !== undefined) {
      obj.configMongos = MongosConfig60Enterprise.toJSON(message.configMongos);
    }
    if (message.configMongocfg !== undefined) {
      obj.configMongocfg = MongoCfgConfig60Enterprise.toJSON(message.configMongocfg);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<MongodbSpec60Enterprise_MongoInfra>): MongodbSpec60Enterprise_MongoInfra {
    return MongodbSpec60Enterprise_MongoInfra.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MongodbSpec60Enterprise_MongoInfra>): MongodbSpec60Enterprise_MongoInfra {
    const message = createBaseMongodbSpec60Enterprise_MongoInfra();
    message.configMongos = (object.configMongos !== undefined && object.configMongos !== null)
      ? MongosConfig60Enterprise.fromPartial(object.configMongos)
      : undefined;
    message.configMongocfg = (object.configMongocfg !== undefined && object.configMongocfg !== null)
      ? MongoCfgConfig60Enterprise.fromPartial(object.configMongocfg)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongodbSpec60Enterprise_MongoInfra.$type, MongodbSpec60Enterprise_MongoInfra);

function createBaseConfigSpec(): ConfigSpec {
  return {
    $type: "yandex.cloud.mdb.mongodb.v1.ConfigSpec",
    version: "",
    featureCompatibilityVersion: "",
    mongodbSpec36: undefined,
    mongodbSpec40: undefined,
    mongodbSpec42: undefined,
    mongodbSpec44: undefined,
    mongodbSpec50: undefined,
    mongodbSpec60: undefined,
    mongodbSpec44Enterprise: undefined,
    mongodbSpec50Enterprise: undefined,
    mongodbSpec60Enterprise: undefined,
    backupWindowStart: undefined,
    backupRetainPeriodDays: undefined,
    performanceDiagnostics: undefined,
    access: undefined,
  };
}

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.mongodb.v1.ConfigSpec" as const,

  encode(message: ConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.featureCompatibilityVersion !== "") {
      writer.uint32(42).string(message.featureCompatibilityVersion);
    }
    if (message.mongodbSpec36 !== undefined) {
      MongodbSpec36.encode(message.mongodbSpec36, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongodbSpec40 !== undefined) {
      MongodbSpec40.encode(message.mongodbSpec40, writer.uint32(34).fork()).ldelim();
    }
    if (message.mongodbSpec42 !== undefined) {
      MongodbSpec42.encode(message.mongodbSpec42, writer.uint32(58).fork()).ldelim();
    }
    if (message.mongodbSpec44 !== undefined) {
      MongodbSpec44.encode(message.mongodbSpec44, writer.uint32(66).fork()).ldelim();
    }
    if (message.mongodbSpec50 !== undefined) {
      MongodbSpec50.encode(message.mongodbSpec50, writer.uint32(82).fork()).ldelim();
    }
    if (message.mongodbSpec60 !== undefined) {
      MongodbSpec60.encode(message.mongodbSpec60, writer.uint32(114).fork()).ldelim();
    }
    if (message.mongodbSpec44Enterprise !== undefined) {
      MongodbSpec44Enterprise.encode(message.mongodbSpec44Enterprise, writer.uint32(90).fork()).ldelim();
    }
    if (message.mongodbSpec50Enterprise !== undefined) {
      MongodbSpec50Enterprise.encode(message.mongodbSpec50Enterprise, writer.uint32(98).fork()).ldelim();
    }
    if (message.mongodbSpec60Enterprise !== undefined) {
      MongodbSpec60Enterprise.encode(message.mongodbSpec60Enterprise, writer.uint32(122).fork()).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(message.backupWindowStart, writer.uint32(26).fork()).ldelim();
    }
    if (message.backupRetainPeriodDays !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backupRetainPeriodDays! },
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.performanceDiagnostics !== undefined) {
      PerformanceDiagnosticsConfig.encode(message.performanceDiagnostics, writer.uint32(106).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(50).fork()).ldelim();
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.featureCompatibilityVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mongodbSpec36 = MongodbSpec36.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mongodbSpec40 = MongodbSpec40.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mongodbSpec42 = MongodbSpec42.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.mongodbSpec44 = MongodbSpec44.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.mongodbSpec50 = MongodbSpec50.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.mongodbSpec60 = MongodbSpec60.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.mongodbSpec44Enterprise = MongodbSpec44Enterprise.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.mongodbSpec50Enterprise = MongodbSpec50Enterprise.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.mongodbSpec60Enterprise = MongodbSpec60Enterprise.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.backupRetainPeriodDays = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.performanceDiagnostics = PerformanceDiagnosticsConfig.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): ConfigSpec {
    return {
      $type: ConfigSpec.$type,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      featureCompatibilityVersion: isSet(object.featureCompatibilityVersion)
        ? globalThis.String(object.featureCompatibilityVersion)
        : "",
      mongodbSpec36: isSet(object.mongodbSpec_3_6) ? MongodbSpec36.fromJSON(object.mongodbSpec_3_6) : undefined,
      mongodbSpec40: isSet(object.mongodbSpec_4_0) ? MongodbSpec40.fromJSON(object.mongodbSpec_4_0) : undefined,
      mongodbSpec42: isSet(object.mongodbSpec_4_2) ? MongodbSpec42.fromJSON(object.mongodbSpec_4_2) : undefined,
      mongodbSpec44: isSet(object.mongodbSpec_4_4) ? MongodbSpec44.fromJSON(object.mongodbSpec_4_4) : undefined,
      mongodbSpec50: isSet(object.mongodbSpec_5_0) ? MongodbSpec50.fromJSON(object.mongodbSpec_5_0) : undefined,
      mongodbSpec60: isSet(object.mongodbSpec_6_0) ? MongodbSpec60.fromJSON(object.mongodbSpec_6_0) : undefined,
      mongodbSpec44Enterprise: isSet(object.mongodbSpec_4_4_enterprise)
        ? MongodbSpec44Enterprise.fromJSON(object.mongodbSpec_4_4_enterprise)
        : undefined,
      mongodbSpec50Enterprise: isSet(object.mongodbSpec_5_0_enterprise)
        ? MongodbSpec50Enterprise.fromJSON(object.mongodbSpec_5_0_enterprise)
        : undefined,
      mongodbSpec60Enterprise: isSet(object.mongodbSpec_6_0_enterprise)
        ? MongodbSpec60Enterprise.fromJSON(object.mongodbSpec_6_0_enterprise)
        : undefined,
      backupWindowStart: isSet(object.backupWindowStart) ? TimeOfDay.fromJSON(object.backupWindowStart) : undefined,
      backupRetainPeriodDays: isSet(object.backupRetainPeriodDays) ? Number(object.backupRetainPeriodDays) : undefined,
      performanceDiagnostics: isSet(object.performanceDiagnostics)
        ? PerformanceDiagnosticsConfig.fromJSON(object.performanceDiagnostics)
        : undefined,
      access: isSet(object.access) ? Access.fromJSON(object.access) : undefined,
    };
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.featureCompatibilityVersion !== "") {
      obj.featureCompatibilityVersion = message.featureCompatibilityVersion;
    }
    if (message.mongodbSpec36 !== undefined) {
      obj.mongodbSpec_3_6 = MongodbSpec36.toJSON(message.mongodbSpec36);
    }
    if (message.mongodbSpec40 !== undefined) {
      obj.mongodbSpec_4_0 = MongodbSpec40.toJSON(message.mongodbSpec40);
    }
    if (message.mongodbSpec42 !== undefined) {
      obj.mongodbSpec_4_2 = MongodbSpec42.toJSON(message.mongodbSpec42);
    }
    if (message.mongodbSpec44 !== undefined) {
      obj.mongodbSpec_4_4 = MongodbSpec44.toJSON(message.mongodbSpec44);
    }
    if (message.mongodbSpec50 !== undefined) {
      obj.mongodbSpec_5_0 = MongodbSpec50.toJSON(message.mongodbSpec50);
    }
    if (message.mongodbSpec60 !== undefined) {
      obj.mongodbSpec_6_0 = MongodbSpec60.toJSON(message.mongodbSpec60);
    }
    if (message.mongodbSpec44Enterprise !== undefined) {
      obj.mongodbSpec_4_4_enterprise = MongodbSpec44Enterprise.toJSON(message.mongodbSpec44Enterprise);
    }
    if (message.mongodbSpec50Enterprise !== undefined) {
      obj.mongodbSpec_5_0_enterprise = MongodbSpec50Enterprise.toJSON(message.mongodbSpec50Enterprise);
    }
    if (message.mongodbSpec60Enterprise !== undefined) {
      obj.mongodbSpec_6_0_enterprise = MongodbSpec60Enterprise.toJSON(message.mongodbSpec60Enterprise);
    }
    if (message.backupWindowStart !== undefined) {
      obj.backupWindowStart = TimeOfDay.toJSON(message.backupWindowStart);
    }
    if (message.backupRetainPeriodDays !== undefined) {
      obj.backupRetainPeriodDays = message.backupRetainPeriodDays;
    }
    if (message.performanceDiagnostics !== undefined) {
      obj.performanceDiagnostics = PerformanceDiagnosticsConfig.toJSON(message.performanceDiagnostics);
    }
    if (message.access !== undefined) {
      obj.access = Access.toJSON(message.access);
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigSpec>): ConfigSpec {
    return ConfigSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec {
    const message = createBaseConfigSpec();
    message.version = object.version ?? "";
    message.featureCompatibilityVersion = object.featureCompatibilityVersion ?? "";
    message.mongodbSpec36 = (object.mongodbSpec36 !== undefined && object.mongodbSpec36 !== null)
      ? MongodbSpec36.fromPartial(object.mongodbSpec36)
      : undefined;
    message.mongodbSpec40 = (object.mongodbSpec40 !== undefined && object.mongodbSpec40 !== null)
      ? MongodbSpec40.fromPartial(object.mongodbSpec40)
      : undefined;
    message.mongodbSpec42 = (object.mongodbSpec42 !== undefined && object.mongodbSpec42 !== null)
      ? MongodbSpec42.fromPartial(object.mongodbSpec42)
      : undefined;
    message.mongodbSpec44 = (object.mongodbSpec44 !== undefined && object.mongodbSpec44 !== null)
      ? MongodbSpec44.fromPartial(object.mongodbSpec44)
      : undefined;
    message.mongodbSpec50 = (object.mongodbSpec50 !== undefined && object.mongodbSpec50 !== null)
      ? MongodbSpec50.fromPartial(object.mongodbSpec50)
      : undefined;
    message.mongodbSpec60 = (object.mongodbSpec60 !== undefined && object.mongodbSpec60 !== null)
      ? MongodbSpec60.fromPartial(object.mongodbSpec60)
      : undefined;
    message.mongodbSpec44Enterprise =
      (object.mongodbSpec44Enterprise !== undefined && object.mongodbSpec44Enterprise !== null)
        ? MongodbSpec44Enterprise.fromPartial(object.mongodbSpec44Enterprise)
        : undefined;
    message.mongodbSpec50Enterprise =
      (object.mongodbSpec50Enterprise !== undefined && object.mongodbSpec50Enterprise !== null)
        ? MongodbSpec50Enterprise.fromPartial(object.mongodbSpec50Enterprise)
        : undefined;
    message.mongodbSpec60Enterprise =
      (object.mongodbSpec60Enterprise !== undefined && object.mongodbSpec60Enterprise !== null)
        ? MongodbSpec60Enterprise.fromPartial(object.mongodbSpec60Enterprise)
        : undefined;
    message.backupWindowStart = (object.backupWindowStart !== undefined && object.backupWindowStart !== null)
      ? TimeOfDay.fromPartial(object.backupWindowStart)
      : undefined;
    message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
    message.performanceDiagnostics =
      (object.performanceDiagnostics !== undefined && object.performanceDiagnostics !== null)
        ? PerformanceDiagnosticsConfig.fromPartial(object.performanceDiagnostics)
        : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? Access.fromPartial(object.access)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

/** A set of methods for managing MongoDB Cluster resources. */
export type ClusterServiceService = typeof ClusterServiceService;
export const ClusterServiceService = {
  /**
   * Returns the specified MongoDB Cluster resource.
   *
   * To get the list of available MongoDB Cluster resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) => Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /**
   * Retrieves the list of MongoDB Cluster resources that belong
   * to the specified folder.
   */
  list: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) => Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) => Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a MongoDB cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) => Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified MongoDB cluster. */
  update: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) => Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified MongoDB cluster. */
  delete: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) => Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Start the specified MongoDB cluster. */
  start: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) => Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stop the specified MongoDB cluster. */
  stop: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) => Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Moves the specified MongoDB cluster to the specified folder. */
  move: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveClusterRequest) => Buffer.from(MoveClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a backup for the specified MongoDB cluster. */
  backup: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Backup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BackupClusterRequest) => Buffer.from(BackupClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a new MongoDB cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreClusterRequest) => Buffer.from(RestoreClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/RescheduleMaintenance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RescheduleMaintenanceRequest) =>
      Buffer.from(RescheduleMaintenanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Retrieves logs for the specified MongoDB cluster.
   * See the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developers guide for detailed logs description.
   */
  listLogs: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListLogs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterLogsRequest) => Buffer.from(ListClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterLogsRequest.decode(value),
    responseSerialize: (value: ListClusterLogsResponse) => Buffer.from(ListClusterLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterLogsResponse.decode(value),
  },
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/StreamLogs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: StreamClusterLogsRequest) => Buffer.from(StreamClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StreamClusterLogsRequest.decode(value),
    responseSerialize: (value: StreamLogRecord) => Buffer.from(StreamLogRecord.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamLogRecord.decode(value),
  },
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
  },
  /** Retrieves the list of available backups for the specified MongoDB cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListBackups",
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
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListHosts",
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
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/AddHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterHostsRequest) => Buffer.from(AddClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterHostsRequest) =>
      Buffer.from(DeleteClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Enables sharding for the cluster:
   * creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
   * that would support adding and using shards in the cluster.
   */
  enableSharding: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/EnableSharding",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EnableClusterShardingRequest) =>
      Buffer.from(EnableClusterShardingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EnableClusterShardingRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified shard. */
  getShard: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/GetShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterShardRequest) => Buffer.from(GetClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterShardRequest.decode(value),
    responseSerialize: (value: Shard) => Buffer.from(Shard.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Shard.decode(value),
  },
  /** Retrieves a list of shards. */
  listShards: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListShards",
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
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/AddShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterShardRequest) => Buffer.from(AddClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified shard. */
  deleteShard: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterShardRequest) =>
      Buffer.from(DeleteClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Resetups hosts. */
  resetupHosts: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ResetupHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ResetupHostsRequest) => Buffer.from(ResetupHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ResetupHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Restarts hosts. */
  restartHosts: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/RestartHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestartHostsRequest) => Buffer.from(RestartHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestartHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stepdown hosts. */
  stepdownHosts: {
    path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/StepdownHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StepdownHostsRequest) => Buffer.from(StepdownHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StepdownHostsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified MongoDB Cluster resource.
   *
   * To get the list of available MongoDB Cluster resources, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /**
   * Retrieves the list of MongoDB Cluster resources that belong
   * to the specified folder.
   */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a MongoDB cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified MongoDB cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified MongoDB cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Start the specified MongoDB cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stop the specified MongoDB cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Moves the specified MongoDB cluster to the specified folder. */
  move: handleUnaryCall<MoveClusterRequest, Operation>;
  /** Creates a backup for the specified MongoDB cluster. */
  backup: handleUnaryCall<BackupClusterRequest, Operation>;
  /** Creates a new MongoDB cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
  /**
   * Retrieves logs for the specified MongoDB cluster.
   * See the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developers guide for detailed logs description.
   */
  listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
  /** Retrieves the list of available backups for the specified MongoDB cluster. */
  listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Creates new hosts for a cluster. */
  addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
  /**
   * Enables sharding for the cluster:
   * creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
   * that would support adding and using shards in the cluster.
   */
  enableSharding: handleUnaryCall<EnableClusterShardingRequest, Operation>;
  /** Returns the specified shard. */
  getShard: handleUnaryCall<GetClusterShardRequest, Shard>;
  /** Retrieves a list of shards. */
  listShards: handleUnaryCall<ListClusterShardsRequest, ListClusterShardsResponse>;
  /** Creates a new shard. */
  addShard: handleUnaryCall<AddClusterShardRequest, Operation>;
  /** Deletes the specified shard. */
  deleteShard: handleUnaryCall<DeleteClusterShardRequest, Operation>;
  /** Resetups hosts. */
  resetupHosts: handleUnaryCall<ResetupHostsRequest, Operation>;
  /** Restarts hosts. */
  restartHosts: handleUnaryCall<RestartHostsRequest, Operation>;
  /** Stepdown hosts. */
  stepdownHosts: handleUnaryCall<StepdownHostsRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified MongoDB Cluster resource.
   *
   * To get the list of available MongoDB Cluster resources, make a [List] request.
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
   * Retrieves the list of MongoDB Cluster resources that belong
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
  /** Creates a MongoDB cluster in the specified folder. */
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
  /** Updates the specified MongoDB cluster. */
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
  /** Deletes the specified MongoDB cluster. */
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
  /** Start the specified MongoDB cluster. */
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
  /** Stop the specified MongoDB cluster. */
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
  /** Moves the specified MongoDB cluster to the specified folder. */
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
  /** Creates a backup for the specified MongoDB cluster. */
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
  /** Creates a new MongoDB cluster using the specified backup. */
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
  /**
   * Retrieves logs for the specified MongoDB cluster.
   * See the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developers guide for detailed logs description.
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
  /** Retrieves the list of available backups for the specified MongoDB cluster. */
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
  /**
   * Enables sharding for the cluster:
   * creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
   * that would support adding and using shards in the cluster.
   */
  enableSharding(
    request: EnableClusterShardingRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  enableSharding(
    request: EnableClusterShardingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  enableSharding(
    request: EnableClusterShardingRequest,
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
  /** Resetups hosts. */
  resetupHosts(
    request: ResetupHostsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  resetupHosts(
    request: ResetupHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  resetupHosts(
    request: ResetupHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Restarts hosts. */
  restartHosts(
    request: RestartHostsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  restartHosts(
    request: RestartHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  restartHosts(
    request: RestartHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Stepdown hosts. */
  stepdownHosts(
    request: StepdownHostsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stepdownHosts(
    request: StepdownHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stepdownHosts(
    request: StepdownHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.mongodb.v1.ClusterService",
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
