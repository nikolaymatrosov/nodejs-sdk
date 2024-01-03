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
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Archive, Backup, BackupFile } from "./backup";

export const protobufPackage = "yandex.cloud.backup.v1";

export interface ListArchivesRequest {
  $type: "yandex.cloud.backup.v1.ListArchivesRequest";
  /** List of archives in specified folder. */
  folderId?:
    | string
    | undefined;
  /** List of archives of the specified Compute Cloud instance. */
  computeInstanceId?: string | undefined;
}

export interface ListArchivesResponse {
  $type: "yandex.cloud.backup.v1.ListArchivesResponse";
  archives: Archive[];
}

export interface ListBackupsRequest {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest";
  /** List backups that belongs to specific Compute Cloud instance. */
  computeInstanceId?:
    | string
    | undefined;
  /** List backups that belongs to specific archive of specific folder. */
  archive?:
    | ListBackupsRequest_ArchiveParameters
    | undefined;
  /** List backups that belongs to specific folder. */
  folderId?:
    | string
    | undefined;
  /** List backups that belongs to specific instance and policy at the same time. */
  instancePolicy?:
    | ListBackupsRequest_InstancePolicy
    | undefined;
  /** List backups by specific resource ID. */
  resourceId?:
    | string
    | undefined;
  /** List backups by specific policy ID. */
  policyId?:
    | string
    | undefined;
  /**
   * By which column the listing should be ordered and in which direction,
   * format is "createdAt desc". "createdAt desc" if omitted.
   */
  orderBy: string;
  /**
   * Filter list by various parameters.
   * Supported parameters are:
   * * created_at
   *
   * Supported logic operators:
   * * AND
   */
  filter: string;
}

export interface ListBackupsRequest_ArchiveParameters {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters";
  /** Archive ID. */
  archiveId: string;
  /** Folder ID. */
  folderId: string;
}

export interface ListBackupsRequest_InstancePolicy {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Policy ID. */
  policyId: string;
}

export interface ListBackupsResponse {
  $type: "yandex.cloud.backup.v1.ListBackupsResponse";
  backups: Backup[];
}

export interface ListFilesRequest {
  $type: "yandex.cloud.backup.v1.ListFilesRequest";
  /** Folder ID. */
  folderId: string;
  /** Backup ID. */
  backupId: string;
  /** Empty source will list disks of the backup. */
  sourceId: string;
}

export interface ListFilesResponse {
  $type: "yandex.cloud.backup.v1.ListFilesResponse";
  files: BackupFile[];
}

export interface GetBackupRequest {
  $type: "yandex.cloud.backup.v1.GetBackupRequest";
  /** Backup ID. */
  backupId: string;
  /** Folder ID. */
  folderId: string;
}

export interface StartRecoveryRequest {
  $type: "yandex.cloud.backup.v1.StartRecoveryRequest";
  /** Destination Compute Cloud instance ID to which backup should be applied. */
  computeInstanceId: string;
  /** Backup ID that will be applied to destination Compute Cloud instance. */
  backupId: string;
}

export interface StartRecoveryMetadata {
  $type: "yandex.cloud.backup.v1.StartRecoveryMetadata";
  /** Progress of the backup process. */
  progressPercentage: number;
  /** Source Backup ID that will be applied. */
  srcBackupId: string;
  /** Destination Compute Cloud instance ID to which backup will be applied. */
  dstComputeInstanceId: string;
}

export interface TargetPathOriginal {
  $type: "yandex.cloud.backup.v1.TargetPathOriginal";
}

export interface TargetPathCustom {
  $type: "yandex.cloud.backup.v1.TargetPathCustom";
  /** Custom folder for file recovery. */
  path: string;
}

export interface FilesRecoveryOptions {
  $type: "yandex.cloud.backup.v1.FilesRecoveryOptions";
  /** Overwrite options declares the behavior for files that already exists on the file system. */
  overwrite: FilesRecoveryOptions_Overwrite;
  /** specifies whether the recovery plan is able to reboot host if needed. */
  rebootIfNeeded: boolean;
  /** Keep original paths of files. */
  original?:
    | TargetPathOriginal
    | undefined;
  /** Set custom folder for file recovery. */
  custom?: TargetPathCustom | undefined;
}

export enum FilesRecoveryOptions_Overwrite {
  /** OVERWRITE_UNSPECIFIED - Unspecified value treated as Overwrite all */
  OVERWRITE_UNSPECIFIED = 0,
  /** OVERWRITE_ALL - All overwrites all existing files by recovered ones. */
  OVERWRITE_ALL = 1,
  /** OVERWRITE_OLDER - Older overwrites older files only. */
  OVERWRITE_OLDER = 2,
  /** OVERWRITE_NONE - None does not overwrites files at all. */
  OVERWRITE_NONE = 3,
  UNRECOGNIZED = -1,
}

export function filesRecoveryOptions_OverwriteFromJSON(object: any): FilesRecoveryOptions_Overwrite {
  switch (object) {
    case 0:
    case "OVERWRITE_UNSPECIFIED":
      return FilesRecoveryOptions_Overwrite.OVERWRITE_UNSPECIFIED;
    case 1:
    case "OVERWRITE_ALL":
      return FilesRecoveryOptions_Overwrite.OVERWRITE_ALL;
    case 2:
    case "OVERWRITE_OLDER":
      return FilesRecoveryOptions_Overwrite.OVERWRITE_OLDER;
    case 3:
    case "OVERWRITE_NONE":
      return FilesRecoveryOptions_Overwrite.OVERWRITE_NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FilesRecoveryOptions_Overwrite.UNRECOGNIZED;
  }
}

export function filesRecoveryOptions_OverwriteToJSON(object: FilesRecoveryOptions_Overwrite): string {
  switch (object) {
    case FilesRecoveryOptions_Overwrite.OVERWRITE_UNSPECIFIED:
      return "OVERWRITE_UNSPECIFIED";
    case FilesRecoveryOptions_Overwrite.OVERWRITE_ALL:
      return "OVERWRITE_ALL";
    case FilesRecoveryOptions_Overwrite.OVERWRITE_OLDER:
      return "OVERWRITE_OLDER";
    case FilesRecoveryOptions_Overwrite.OVERWRITE_NONE:
      return "OVERWRITE_NONE";
    case FilesRecoveryOptions_Overwrite.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface StartFilesRecoveryRequest {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest";
  /** Destination instance ID. */
  computeInstanceId: string;
  /** Backup ID. */
  backupId: string;
  opts?: FilesRecoveryOptions | undefined;
  sourceIds: string[];
}

export interface StartFilesRecoveryMetadata {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata";
  progressPercentage: number;
  /** Destination instance ID. */
  computeInstanceId: string;
  /** Backup ID. */
  backupId: string;
  sourceIds: string[];
}

export interface DeleteBackupRequest {
  $type: "yandex.cloud.backup.v1.DeleteBackupRequest";
  /** Compute Cloud instance ID of the Backup. */
  computeInstanceId: string;
  /** Backup ID that should be deleted. */
  backupId: string;
}

export interface DeleteBackupMetadata {
  $type: "yandex.cloud.backup.v1.DeleteBackupMetadata";
  /** Compute Cloud instance ID of the Backup. */
  computeInstanceId: string;
  /** Backup ID that should be deleted. */
  backupId: string;
}

function createBaseListArchivesRequest(): ListArchivesRequest {
  return { $type: "yandex.cloud.backup.v1.ListArchivesRequest", folderId: undefined, computeInstanceId: undefined };
}

export const ListArchivesRequest = {
  $type: "yandex.cloud.backup.v1.ListArchivesRequest" as const,

  encode(message: ListArchivesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(10).string(message.folderId);
    }
    if (message.computeInstanceId !== undefined) {
      writer.uint32(18).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListArchivesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListArchivesRequest();
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

          message.computeInstanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListArchivesRequest {
    return {
      $type: ListArchivesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : undefined,
    };
  },

  toJSON(message: ListArchivesRequest): unknown {
    const obj: any = {};
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.computeInstanceId !== undefined) {
      obj.computeInstanceId = message.computeInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListArchivesRequest>, I>>(base?: I): ListArchivesRequest {
    return ListArchivesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListArchivesRequest>, I>>(object: I): ListArchivesRequest {
    const message = createBaseListArchivesRequest();
    message.folderId = object.folderId ?? undefined;
    message.computeInstanceId = object.computeInstanceId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ListArchivesRequest.$type, ListArchivesRequest);

function createBaseListArchivesResponse(): ListArchivesResponse {
  return { $type: "yandex.cloud.backup.v1.ListArchivesResponse", archives: [] };
}

export const ListArchivesResponse = {
  $type: "yandex.cloud.backup.v1.ListArchivesResponse" as const,

  encode(message: ListArchivesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.archives) {
      Archive.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListArchivesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListArchivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.archives.push(Archive.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListArchivesResponse {
    return {
      $type: ListArchivesResponse.$type,
      archives: globalThis.Array.isArray(object?.archives) ? object.archives.map((e: any) => Archive.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListArchivesResponse): unknown {
    const obj: any = {};
    if (message.archives?.length) {
      obj.archives = message.archives.map((e) => Archive.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListArchivesResponse>, I>>(base?: I): ListArchivesResponse {
    return ListArchivesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListArchivesResponse>, I>>(object: I): ListArchivesResponse {
    const message = createBaseListArchivesResponse();
    message.archives = object.archives?.map((e) => Archive.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListArchivesResponse.$type, ListArchivesResponse);

function createBaseListBackupsRequest(): ListBackupsRequest {
  return {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest",
    computeInstanceId: undefined,
    archive: undefined,
    folderId: undefined,
    instancePolicy: undefined,
    resourceId: undefined,
    policyId: undefined,
    orderBy: "",
    filter: "",
  };
}

export const ListBackupsRequest = {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest" as const,

  encode(message: ListBackupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== undefined) {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.archive !== undefined) {
      ListBackupsRequest_ArchiveParameters.encode(message.archive, writer.uint32(18).fork()).ldelim();
    }
    if (message.folderId !== undefined) {
      writer.uint32(26).string(message.folderId);
    }
    if (message.instancePolicy !== undefined) {
      ListBackupsRequest_InstancePolicy.encode(message.instancePolicy, writer.uint32(34).fork()).ldelim();
    }
    if (message.resourceId !== undefined) {
      writer.uint32(50).string(message.resourceId);
    }
    if (message.policyId !== undefined) {
      writer.uint32(58).string(message.policyId);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    if (message.filter !== "") {
      writer.uint32(66).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.archive = ListBackupsRequest_ArchiveParameters.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.instancePolicy = ListBackupsRequest_InstancePolicy.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.policyId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
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

  fromJSON(object: any): ListBackupsRequest {
    return {
      $type: ListBackupsRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : undefined,
      archive: isSet(object.archive) ? ListBackupsRequest_ArchiveParameters.fromJSON(object.archive) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      instancePolicy: isSet(object.instancePolicy)
        ? ListBackupsRequest_InstancePolicy.fromJSON(object.instancePolicy)
        : undefined,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : undefined,
      policyId: isSet(object.policyId) ? globalThis.String(object.policyId) : undefined,
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListBackupsRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== undefined) {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.archive !== undefined) {
      obj.archive = ListBackupsRequest_ArchiveParameters.toJSON(message.archive);
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.instancePolicy !== undefined) {
      obj.instancePolicy = ListBackupsRequest_InstancePolicy.toJSON(message.instancePolicy);
    }
    if (message.resourceId !== undefined) {
      obj.resourceId = message.resourceId;
    }
    if (message.policyId !== undefined) {
      obj.policyId = message.policyId;
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBackupsRequest>, I>>(base?: I): ListBackupsRequest {
    return ListBackupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackupsRequest>, I>>(object: I): ListBackupsRequest {
    const message = createBaseListBackupsRequest();
    message.computeInstanceId = object.computeInstanceId ?? undefined;
    message.archive = (object.archive !== undefined && object.archive !== null)
      ? ListBackupsRequest_ArchiveParameters.fromPartial(object.archive)
      : undefined;
    message.folderId = object.folderId ?? undefined;
    message.instancePolicy = (object.instancePolicy !== undefined && object.instancePolicy !== null)
      ? ListBackupsRequest_InstancePolicy.fromPartial(object.instancePolicy)
      : undefined;
    message.resourceId = object.resourceId ?? undefined;
    message.policyId = object.policyId ?? undefined;
    message.orderBy = object.orderBy ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackupsRequest.$type, ListBackupsRequest);

function createBaseListBackupsRequest_ArchiveParameters(): ListBackupsRequest_ArchiveParameters {
  return { $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters", archiveId: "", folderId: "" };
}

export const ListBackupsRequest_ArchiveParameters = {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters" as const,

  encode(message: ListBackupsRequest_ArchiveParameters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.archiveId !== "") {
      writer.uint32(10).string(message.archiveId);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsRequest_ArchiveParameters {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackupsRequest_ArchiveParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.archiveId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBackupsRequest_ArchiveParameters {
    return {
      $type: ListBackupsRequest_ArchiveParameters.$type,
      archiveId: isSet(object.archiveId) ? globalThis.String(object.archiveId) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: ListBackupsRequest_ArchiveParameters): unknown {
    const obj: any = {};
    if (message.archiveId !== "") {
      obj.archiveId = message.archiveId;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBackupsRequest_ArchiveParameters>, I>>(
    base?: I,
  ): ListBackupsRequest_ArchiveParameters {
    return ListBackupsRequest_ArchiveParameters.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackupsRequest_ArchiveParameters>, I>>(
    object: I,
  ): ListBackupsRequest_ArchiveParameters {
    const message = createBaseListBackupsRequest_ArchiveParameters();
    message.archiveId = object.archiveId ?? "";
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackupsRequest_ArchiveParameters.$type, ListBackupsRequest_ArchiveParameters);

function createBaseListBackupsRequest_InstancePolicy(): ListBackupsRequest_InstancePolicy {
  return { $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy", computeInstanceId: "", policyId: "" };
}

export const ListBackupsRequest_InstancePolicy = {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy" as const,

  encode(message: ListBackupsRequest_InstancePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.policyId !== "") {
      writer.uint32(18).string(message.policyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsRequest_InstancePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackupsRequest_InstancePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.policyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBackupsRequest_InstancePolicy {
    return {
      $type: ListBackupsRequest_InstancePolicy.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      policyId: isSet(object.policyId) ? globalThis.String(object.policyId) : "",
    };
  },

  toJSON(message: ListBackupsRequest_InstancePolicy): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.policyId !== "") {
      obj.policyId = message.policyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBackupsRequest_InstancePolicy>, I>>(
    base?: I,
  ): ListBackupsRequest_InstancePolicy {
    return ListBackupsRequest_InstancePolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackupsRequest_InstancePolicy>, I>>(
    object: I,
  ): ListBackupsRequest_InstancePolicy {
    const message = createBaseListBackupsRequest_InstancePolicy();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.policyId = object.policyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackupsRequest_InstancePolicy.$type, ListBackupsRequest_InstancePolicy);

function createBaseListBackupsResponse(): ListBackupsResponse {
  return { $type: "yandex.cloud.backup.v1.ListBackupsResponse", backups: [] };
}

export const ListBackupsResponse = {
  $type: "yandex.cloud.backup.v1.ListBackupsResponse" as const,

  encode(message: ListBackupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backups) {
      Backup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backups.push(Backup.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBackupsResponse {
    return {
      $type: ListBackupsResponse.$type,
      backups: globalThis.Array.isArray(object?.backups) ? object.backups.map((e: any) => Backup.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListBackupsResponse): unknown {
    const obj: any = {};
    if (message.backups?.length) {
      obj.backups = message.backups.map((e) => Backup.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBackupsResponse>, I>>(base?: I): ListBackupsResponse {
    return ListBackupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBackupsResponse>, I>>(object: I): ListBackupsResponse {
    const message = createBaseListBackupsResponse();
    message.backups = object.backups?.map((e) => Backup.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListBackupsResponse.$type, ListBackupsResponse);

function createBaseListFilesRequest(): ListFilesRequest {
  return { $type: "yandex.cloud.backup.v1.ListFilesRequest", folderId: "", backupId: "", sourceId: "" };
}

export const ListFilesRequest = {
  $type: "yandex.cloud.backup.v1.ListFilesRequest" as const,

  encode(message: ListFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    if (message.sourceId !== "") {
      writer.uint32(26).string(message.sourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesRequest();
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

          message.backupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListFilesRequest {
    return {
      $type: ListFilesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      sourceId: isSet(object.sourceId) ? globalThis.String(object.sourceId) : "",
    };
  },

  toJSON(message: ListFilesRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.sourceId !== "") {
      obj.sourceId = message.sourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFilesRequest>, I>>(base?: I): ListFilesRequest {
    return ListFilesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFilesRequest>, I>>(object: I): ListFilesRequest {
    const message = createBaseListFilesRequest();
    message.folderId = object.folderId ?? "";
    message.backupId = object.backupId ?? "";
    message.sourceId = object.sourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFilesRequest.$type, ListFilesRequest);

function createBaseListFilesResponse(): ListFilesResponse {
  return { $type: "yandex.cloud.backup.v1.ListFilesResponse", files: [] };
}

export const ListFilesResponse = {
  $type: "yandex.cloud.backup.v1.ListFilesResponse" as const,

  encode(message: ListFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      BackupFile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.files.push(BackupFile.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListFilesResponse {
    return {
      $type: ListFilesResponse.$type,
      files: globalThis.Array.isArray(object?.files) ? object.files.map((e: any) => BackupFile.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListFilesResponse): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files.map((e) => BackupFile.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFilesResponse>, I>>(base?: I): ListFilesResponse {
    return ListFilesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFilesResponse>, I>>(object: I): ListFilesResponse {
    const message = createBaseListFilesResponse();
    message.files = object.files?.map((e) => BackupFile.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListFilesResponse.$type, ListFilesResponse);

function createBaseGetBackupRequest(): GetBackupRequest {
  return { $type: "yandex.cloud.backup.v1.GetBackupRequest", backupId: "", folderId: "" };
}

export const GetBackupRequest = {
  $type: "yandex.cloud.backup.v1.GetBackupRequest" as const,

  encode(message: GetBackupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBackupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBackupRequest();
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

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBackupRequest {
    return {
      $type: GetBackupRequest.$type,
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: GetBackupRequest): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBackupRequest>, I>>(base?: I): GetBackupRequest {
    return GetBackupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBackupRequest>, I>>(object: I): GetBackupRequest {
    const message = createBaseGetBackupRequest();
    message.backupId = object.backupId ?? "";
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBackupRequest.$type, GetBackupRequest);

function createBaseStartRecoveryRequest(): StartRecoveryRequest {
  return { $type: "yandex.cloud.backup.v1.StartRecoveryRequest", computeInstanceId: "", backupId: "" };
}

export const StartRecoveryRequest = {
  $type: "yandex.cloud.backup.v1.StartRecoveryRequest" as const,

  encode(message: StartRecoveryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartRecoveryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartRecoveryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
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

  fromJSON(object: any): StartRecoveryRequest {
    return {
      $type: StartRecoveryRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
    };
  },

  toJSON(message: StartRecoveryRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartRecoveryRequest>, I>>(base?: I): StartRecoveryRequest {
    return StartRecoveryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartRecoveryRequest>, I>>(object: I): StartRecoveryRequest {
    const message = createBaseStartRecoveryRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartRecoveryRequest.$type, StartRecoveryRequest);

function createBaseStartRecoveryMetadata(): StartRecoveryMetadata {
  return {
    $type: "yandex.cloud.backup.v1.StartRecoveryMetadata",
    progressPercentage: 0,
    srcBackupId: "",
    dstComputeInstanceId: "",
  };
}

export const StartRecoveryMetadata = {
  $type: "yandex.cloud.backup.v1.StartRecoveryMetadata" as const,

  encode(message: StartRecoveryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.progressPercentage !== 0) {
      writer.uint32(9).double(message.progressPercentage);
    }
    if (message.srcBackupId !== "") {
      writer.uint32(18).string(message.srcBackupId);
    }
    if (message.dstComputeInstanceId !== "") {
      writer.uint32(26).string(message.dstComputeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartRecoveryMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartRecoveryMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.progressPercentage = reader.double();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.srcBackupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dstComputeInstanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartRecoveryMetadata {
    return {
      $type: StartRecoveryMetadata.$type,
      progressPercentage: isSet(object.progressPercentage) ? globalThis.Number(object.progressPercentage) : 0,
      srcBackupId: isSet(object.srcBackupId) ? globalThis.String(object.srcBackupId) : "",
      dstComputeInstanceId: isSet(object.dstComputeInstanceId) ? globalThis.String(object.dstComputeInstanceId) : "",
    };
  },

  toJSON(message: StartRecoveryMetadata): unknown {
    const obj: any = {};
    if (message.progressPercentage !== 0) {
      obj.progressPercentage = message.progressPercentage;
    }
    if (message.srcBackupId !== "") {
      obj.srcBackupId = message.srcBackupId;
    }
    if (message.dstComputeInstanceId !== "") {
      obj.dstComputeInstanceId = message.dstComputeInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartRecoveryMetadata>, I>>(base?: I): StartRecoveryMetadata {
    return StartRecoveryMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartRecoveryMetadata>, I>>(object: I): StartRecoveryMetadata {
    const message = createBaseStartRecoveryMetadata();
    message.progressPercentage = object.progressPercentage ?? 0;
    message.srcBackupId = object.srcBackupId ?? "";
    message.dstComputeInstanceId = object.dstComputeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartRecoveryMetadata.$type, StartRecoveryMetadata);

function createBaseTargetPathOriginal(): TargetPathOriginal {
  return { $type: "yandex.cloud.backup.v1.TargetPathOriginal" };
}

export const TargetPathOriginal = {
  $type: "yandex.cloud.backup.v1.TargetPathOriginal" as const,

  encode(_: TargetPathOriginal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetPathOriginal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetPathOriginal();
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

  fromJSON(_: any): TargetPathOriginal {
    return { $type: TargetPathOriginal.$type };
  },

  toJSON(_: TargetPathOriginal): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetPathOriginal>, I>>(base?: I): TargetPathOriginal {
    return TargetPathOriginal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetPathOriginal>, I>>(_: I): TargetPathOriginal {
    const message = createBaseTargetPathOriginal();
    return message;
  },
};

messageTypeRegistry.set(TargetPathOriginal.$type, TargetPathOriginal);

function createBaseTargetPathCustom(): TargetPathCustom {
  return { $type: "yandex.cloud.backup.v1.TargetPathCustom", path: "" };
}

export const TargetPathCustom = {
  $type: "yandex.cloud.backup.v1.TargetPathCustom" as const,

  encode(message: TargetPathCustom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetPathCustom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetPathCustom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetPathCustom {
    return { $type: TargetPathCustom.$type, path: isSet(object.path) ? globalThis.String(object.path) : "" };
  },

  toJSON(message: TargetPathCustom): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetPathCustom>, I>>(base?: I): TargetPathCustom {
    return TargetPathCustom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetPathCustom>, I>>(object: I): TargetPathCustom {
    const message = createBaseTargetPathCustom();
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(TargetPathCustom.$type, TargetPathCustom);

function createBaseFilesRecoveryOptions(): FilesRecoveryOptions {
  return {
    $type: "yandex.cloud.backup.v1.FilesRecoveryOptions",
    overwrite: 0,
    rebootIfNeeded: false,
    original: undefined,
    custom: undefined,
  };
}

export const FilesRecoveryOptions = {
  $type: "yandex.cloud.backup.v1.FilesRecoveryOptions" as const,

  encode(message: FilesRecoveryOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overwrite !== 0) {
      writer.uint32(8).int32(message.overwrite);
    }
    if (message.rebootIfNeeded === true) {
      writer.uint32(16).bool(message.rebootIfNeeded);
    }
    if (message.original !== undefined) {
      TargetPathOriginal.encode(message.original, writer.uint32(802).fork()).ldelim();
    }
    if (message.custom !== undefined) {
      TargetPathCustom.encode(message.custom, writer.uint32(810).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FilesRecoveryOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilesRecoveryOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.overwrite = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rebootIfNeeded = reader.bool();
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.original = TargetPathOriginal.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.custom = TargetPathCustom.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FilesRecoveryOptions {
    return {
      $type: FilesRecoveryOptions.$type,
      overwrite: isSet(object.overwrite) ? filesRecoveryOptions_OverwriteFromJSON(object.overwrite) : 0,
      rebootIfNeeded: isSet(object.rebootIfNeeded) ? globalThis.Boolean(object.rebootIfNeeded) : false,
      original: isSet(object.original) ? TargetPathOriginal.fromJSON(object.original) : undefined,
      custom: isSet(object.custom) ? TargetPathCustom.fromJSON(object.custom) : undefined,
    };
  },

  toJSON(message: FilesRecoveryOptions): unknown {
    const obj: any = {};
    if (message.overwrite !== 0) {
      obj.overwrite = filesRecoveryOptions_OverwriteToJSON(message.overwrite);
    }
    if (message.rebootIfNeeded === true) {
      obj.rebootIfNeeded = message.rebootIfNeeded;
    }
    if (message.original !== undefined) {
      obj.original = TargetPathOriginal.toJSON(message.original);
    }
    if (message.custom !== undefined) {
      obj.custom = TargetPathCustom.toJSON(message.custom);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FilesRecoveryOptions>, I>>(base?: I): FilesRecoveryOptions {
    return FilesRecoveryOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FilesRecoveryOptions>, I>>(object: I): FilesRecoveryOptions {
    const message = createBaseFilesRecoveryOptions();
    message.overwrite = object.overwrite ?? 0;
    message.rebootIfNeeded = object.rebootIfNeeded ?? false;
    message.original = (object.original !== undefined && object.original !== null)
      ? TargetPathOriginal.fromPartial(object.original)
      : undefined;
    message.custom = (object.custom !== undefined && object.custom !== null)
      ? TargetPathCustom.fromPartial(object.custom)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(FilesRecoveryOptions.$type, FilesRecoveryOptions);

function createBaseStartFilesRecoveryRequest(): StartFilesRecoveryRequest {
  return {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest",
    computeInstanceId: "",
    backupId: "",
    opts: undefined,
    sourceIds: [],
  };
}

export const StartFilesRecoveryRequest = {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest" as const,

  encode(message: StartFilesRecoveryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    if (message.opts !== undefined) {
      FilesRecoveryOptions.encode(message.opts, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sourceIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartFilesRecoveryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartFilesRecoveryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.opts = FilesRecoveryOptions.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sourceIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartFilesRecoveryRequest {
    return {
      $type: StartFilesRecoveryRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      opts: isSet(object.opts) ? FilesRecoveryOptions.fromJSON(object.opts) : undefined,
      sourceIds: globalThis.Array.isArray(object?.sourceIds)
        ? object.sourceIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StartFilesRecoveryRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.opts !== undefined) {
      obj.opts = FilesRecoveryOptions.toJSON(message.opts);
    }
    if (message.sourceIds?.length) {
      obj.sourceIds = message.sourceIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartFilesRecoveryRequest>, I>>(base?: I): StartFilesRecoveryRequest {
    return StartFilesRecoveryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartFilesRecoveryRequest>, I>>(object: I): StartFilesRecoveryRequest {
    const message = createBaseStartFilesRecoveryRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? FilesRecoveryOptions.fromPartial(object.opts)
      : undefined;
    message.sourceIds = object.sourceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(StartFilesRecoveryRequest.$type, StartFilesRecoveryRequest);

function createBaseStartFilesRecoveryMetadata(): StartFilesRecoveryMetadata {
  return {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata",
    progressPercentage: 0,
    computeInstanceId: "",
    backupId: "",
    sourceIds: [],
  };
}

export const StartFilesRecoveryMetadata = {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata" as const,

  encode(message: StartFilesRecoveryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.progressPercentage !== 0) {
      writer.uint32(9).double(message.progressPercentage);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(26).string(message.backupId);
    }
    for (const v of message.sourceIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartFilesRecoveryMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartFilesRecoveryMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.progressPercentage = reader.double();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.backupId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sourceIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartFilesRecoveryMetadata {
    return {
      $type: StartFilesRecoveryMetadata.$type,
      progressPercentage: isSet(object.progressPercentage) ? globalThis.Number(object.progressPercentage) : 0,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      sourceIds: globalThis.Array.isArray(object?.sourceIds)
        ? object.sourceIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: StartFilesRecoveryMetadata): unknown {
    const obj: any = {};
    if (message.progressPercentage !== 0) {
      obj.progressPercentage = message.progressPercentage;
    }
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.sourceIds?.length) {
      obj.sourceIds = message.sourceIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartFilesRecoveryMetadata>, I>>(base?: I): StartFilesRecoveryMetadata {
    return StartFilesRecoveryMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartFilesRecoveryMetadata>, I>>(object: I): StartFilesRecoveryMetadata {
    const message = createBaseStartFilesRecoveryMetadata();
    message.progressPercentage = object.progressPercentage ?? 0;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    message.sourceIds = object.sourceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(StartFilesRecoveryMetadata.$type, StartFilesRecoveryMetadata);

function createBaseDeleteBackupRequest(): DeleteBackupRequest {
  return { $type: "yandex.cloud.backup.v1.DeleteBackupRequest", computeInstanceId: "", backupId: "" };
}

export const DeleteBackupRequest = {
  $type: "yandex.cloud.backup.v1.DeleteBackupRequest" as const,

  encode(message: DeleteBackupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBackupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
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

  fromJSON(object: any): DeleteBackupRequest {
    return {
      $type: DeleteBackupRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
    };
  },

  toJSON(message: DeleteBackupRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBackupRequest>, I>>(base?: I): DeleteBackupRequest {
    return DeleteBackupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBackupRequest>, I>>(object: I): DeleteBackupRequest {
    const message = createBaseDeleteBackupRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBackupRequest.$type, DeleteBackupRequest);

function createBaseDeleteBackupMetadata(): DeleteBackupMetadata {
  return { $type: "yandex.cloud.backup.v1.DeleteBackupMetadata", computeInstanceId: "", backupId: "" };
}

export const DeleteBackupMetadata = {
  $type: "yandex.cloud.backup.v1.DeleteBackupMetadata" as const,

  encode(message: DeleteBackupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBackupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
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

  fromJSON(object: any): DeleteBackupMetadata {
    return {
      $type: DeleteBackupMetadata.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
    };
  },

  toJSON(message: DeleteBackupMetadata): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBackupMetadata>, I>>(base?: I): DeleteBackupMetadata {
    return DeleteBackupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteBackupMetadata>, I>>(object: I): DeleteBackupMetadata {
    const message = createBaseDeleteBackupMetadata();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBackupMetadata.$type, DeleteBackupMetadata);

/** A set of methods for managing [backups](/docs/backup/concepts/backup). */
export type BackupServiceService = typeof BackupServiceService;
export const BackupServiceService = {
  /** List backups using filters. */
  list: {
    path: "/yandex.cloud.backup.v1.BackupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBackupsRequest) => Buffer.from(ListBackupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBackupsRequest.decode(value),
    responseSerialize: (value: ListBackupsResponse) => Buffer.from(ListBackupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBackupsResponse.decode(value),
  },
  /**
   * List archives that holds backups for specified folder or
   * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
   */
  listArchives: {
    path: "/yandex.cloud.backup.v1.BackupService/ListArchives",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListArchivesRequest) => Buffer.from(ListArchivesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListArchivesRequest.decode(value),
    responseSerialize: (value: ListArchivesResponse) => Buffer.from(ListArchivesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListArchivesResponse.decode(value),
  },
  /** ListFiles of the backup. */
  listFiles: {
    path: "/yandex.cloud.backup.v1.BackupService/ListFiles",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFilesRequest) => Buffer.from(ListFilesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFilesRequest.decode(value),
    responseSerialize: (value: ListFilesResponse) => Buffer.from(ListFilesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFilesResponse.decode(value),
  },
  /** Get backup by its id. */
  get: {
    path: "/yandex.cloud.backup.v1.BackupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBackupRequest) => Buffer.from(GetBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBackupRequest.decode(value),
    responseSerialize: (value: Backup) => Buffer.from(Backup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Backup.decode(value),
  },
  /**
   * Start recovery process of specified backup to specific Compute Cloud instance.
   *
   * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
   */
  startRecovery: {
    path: "/yandex.cloud.backup.v1.BackupService/StartRecovery",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartRecoveryRequest) => Buffer.from(StartRecoveryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartRecoveryRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
  startFilesRecovery: {
    path: "/yandex.cloud.backup.v1.BackupService/StartFilesRecovery",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartFilesRecoveryRequest) =>
      Buffer.from(StartFilesRecoveryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartFilesRecoveryRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Delete specific backup. */
  delete: {
    path: "/yandex.cloud.backup.v1.BackupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBackupRequest) => Buffer.from(DeleteBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBackupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface BackupServiceServer extends UntypedServiceImplementation {
  /** List backups using filters. */
  list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
  /**
   * List archives that holds backups for specified folder or
   * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
   */
  listArchives: handleUnaryCall<ListArchivesRequest, ListArchivesResponse>;
  /** ListFiles of the backup. */
  listFiles: handleUnaryCall<ListFilesRequest, ListFilesResponse>;
  /** Get backup by its id. */
  get: handleUnaryCall<GetBackupRequest, Backup>;
  /**
   * Start recovery process of specified backup to specific Compute Cloud instance.
   *
   * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
   */
  startRecovery: handleUnaryCall<StartRecoveryRequest, Operation>;
  /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
  startFilesRecovery: handleUnaryCall<StartFilesRecoveryRequest, Operation>;
  /** Delete specific backup. */
  delete: handleUnaryCall<DeleteBackupRequest, Operation>;
}

export interface BackupServiceClient extends Client {
  /** List backups using filters. */
  list(
    request: ListBackupsRequest,
    callback: (error: ServiceError | null, response: ListBackupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBackupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBackupsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBackupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBackupsResponse) => void,
  ): ClientUnaryCall;
  /**
   * List archives that holds backups for specified folder or
   * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
   */
  listArchives(
    request: ListArchivesRequest,
    callback: (error: ServiceError | null, response: ListArchivesResponse) => void,
  ): ClientUnaryCall;
  listArchives(
    request: ListArchivesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListArchivesResponse) => void,
  ): ClientUnaryCall;
  listArchives(
    request: ListArchivesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListArchivesResponse) => void,
  ): ClientUnaryCall;
  /** ListFiles of the backup. */
  listFiles(
    request: ListFilesRequest,
    callback: (error: ServiceError | null, response: ListFilesResponse) => void,
  ): ClientUnaryCall;
  listFiles(
    request: ListFilesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFilesResponse) => void,
  ): ClientUnaryCall;
  listFiles(
    request: ListFilesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFilesResponse) => void,
  ): ClientUnaryCall;
  /** Get backup by its id. */
  get(request: GetBackupRequest, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
  get(
    request: GetBackupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Backup) => void,
  ): ClientUnaryCall;
  get(
    request: GetBackupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Backup) => void,
  ): ClientUnaryCall;
  /**
   * Start recovery process of specified backup to specific Compute Cloud instance.
   *
   * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
   */
  startRecovery(
    request: StartRecoveryRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  startRecovery(
    request: StartRecoveryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  startRecovery(
    request: StartRecoveryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
  startFilesRecovery(
    request: StartFilesRecoveryRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  startFilesRecovery(
    request: StartFilesRecoveryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  startFilesRecovery(
    request: StartFilesRecoveryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Delete specific backup. */
  delete(
    request: DeleteBackupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteBackupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteBackupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const BackupServiceClient = makeGenericClientConstructor(
  BackupServiceService,
  "yandex.cloud.backup.v1.BackupService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BackupServiceClient;
  service: typeof BackupServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
