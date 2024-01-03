/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { StringValue } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Format, formatFromJSON, formatToJSON } from "./policy";

export const protobufPackage = "yandex.cloud.backup.v1";

/** Archive is a container that holds backups of Compute Cloud instance. */
export interface Archive {
  $type: "yandex.cloud.backup.v1.Archive";
  /** ID of the backup. */
  id: string;
  /** Name of the backup. */
  name: string;
  /** ID of the backup vault. */
  vaultId: string;
  /** Archive attributes. */
  attributes?:
    | Archive_ArchiveAttributes
    | undefined;
  /** Archive size. */
  size: number;
  /** Compressed data size. */
  compressedDataSize: number;
  /** Data size. */
  dataSize: number;
  /** Original data size. */
  originalDataSize: number;
  /** Logical size. */
  logicalSize: number;
  format: Format;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  lastBackupCreatedAt?: Date | undefined;
  lastSeenAt?:
    | Date
    | undefined;
  /**
   * If this field is true, it means that any of encryption algorithm
   * has been chosen.
   */
  protectedByPassword: boolean;
  encryptionAlgorithm: Archive_EncryptionAlgorithm;
  actions: Archive_Action[];
  /** Backup plan ID. */
  backupPlanId: string;
  /** Backup plan name. */
  backupPlanName: string;
  /** Backup plan description. */
  description: string;
  /** Display name, e.g. `INSTANCE_NAME - POLICY_NAME`. */
  displayName: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** If this field is true, it means that the archive is consistent. */
  consistent: boolean;
  /** If this field is true, it means that the archive was deleted. */
  deleted: boolean;
  /** Resource ID. */
  resourceId: string;
}

/**
 * Encryption Algorithm for underlying backups:
 * `ENCRYPTION_ALGORITHM_UNSPECIFIED`, `NONE`, `AES128`, `AES192`,
 * `AES256`.
 */
export enum Archive_EncryptionAlgorithm {
  ENCRYPTION_ALGORITHM_UNSPECIFIED = 0,
  NONE = 1,
  AES128 = 2,
  AES192 = 3,
  AES256 = 4,
  UNRECOGNIZED = -1,
}

export function archive_EncryptionAlgorithmFromJSON(object: any): Archive_EncryptionAlgorithm {
  switch (object) {
    case 0:
    case "ENCRYPTION_ALGORITHM_UNSPECIFIED":
      return Archive_EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED;
    case 1:
    case "NONE":
      return Archive_EncryptionAlgorithm.NONE;
    case 2:
    case "AES128":
      return Archive_EncryptionAlgorithm.AES128;
    case 3:
    case "AES192":
      return Archive_EncryptionAlgorithm.AES192;
    case 4:
    case "AES256":
      return Archive_EncryptionAlgorithm.AES256;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Archive_EncryptionAlgorithm.UNRECOGNIZED;
  }
}

export function archive_EncryptionAlgorithmToJSON(object: Archive_EncryptionAlgorithm): string {
  switch (object) {
    case Archive_EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED:
      return "ENCRYPTION_ALGORITHM_UNSPECIFIED";
    case Archive_EncryptionAlgorithm.NONE:
      return "NONE";
    case Archive_EncryptionAlgorithm.AES128:
      return "AES128";
    case Archive_EncryptionAlgorithm.AES192:
      return "AES192";
    case Archive_EncryptionAlgorithm.AES256:
      return "AES256";
    case Archive_EncryptionAlgorithm.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Action with archive backup: `ACTION_UNSPECIFIED`, `REFRESH`,
 * `DELETE_BY_AGENT`.
 */
export enum Archive_Action {
  ACTION_UNSPECIFIED = 0,
  REFRESH = 1,
  DELETE_BY_AGENT = 2,
  UNRECOGNIZED = -1,
}

export function archive_ActionFromJSON(object: any): Archive_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return Archive_Action.ACTION_UNSPECIFIED;
    case 1:
    case "REFRESH":
      return Archive_Action.REFRESH;
    case 2:
    case "DELETE_BY_AGENT":
      return Archive_Action.DELETE_BY_AGENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Archive_Action.UNRECOGNIZED;
  }
}

export function archive_ActionToJSON(object: Archive_Action): string {
  switch (object) {
    case Archive_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case Archive_Action.REFRESH:
      return "REFRESH";
    case Archive_Action.DELETE_BY_AGENT:
      return "DELETE_BY_AGENT";
    case Archive_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Archive attributes. */
export interface Archive_ArchiveAttributes {
  $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes";
  /** Archive attribute. Default value: `0`. */
  aaib: string;
  /** URI of the backup archive. */
  uri: string;
}

export interface Volume {
  $type: "yandex.cloud.backup.v1.Volume";
  /** Free space in the volume. */
  freeSpace: number;
  /** If this field is true, it means that the volume is bootable. */
  isBootable: boolean;
  /** If this field is true, it means that the volume is a system volume. */
  isSystem: boolean;
  /** Volume name. */
  name: string;
  /** Volume size. */
  size: number;
  /** Mount string ID. */
  mountStrid: string;
}

export interface Disk {
  $type: "yandex.cloud.backup.v1.Disk";
  /** Device model. */
  deviceModel: string;
  /** Disk name. */
  name: string;
  /** Disk size. */
  size: number;
  volumes: Volume[];
}

export interface Backup {
  $type: "yandex.cloud.backup.v1.Backup";
  /** ID of the backup. */
  id: string;
  /** ID of the backup vault. */
  vaultId: string;
  /** ID of the backup archive. */
  archiveId: string;
  createdAt?: Date | undefined;
  lastSeenAt?:
    | Date
    | undefined;
  /** Backup size. */
  size: number;
  /** Deduplicated backup size. */
  deduplicatedSize: number;
  /** Backed up data size. */
  backedUpDataSize: number;
  /** Original data size. */
  originalDataSize: number;
  attributes?:
    | Backup_BackupAttributes
    | undefined;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  disks: Disk[];
  type: Backup_Type;
  /** If this field is true, it means that the backup was deleted. */
  deleted: boolean;
  /** [Policy](/docs/backup/concepts/policy) ID. */
  policyId: string;
  /** Resource ID. It identifies Compute Cloud instance in backup service. */
  resourceId: string;
}

/**
 * Backup type.
 * For detailed information, please see [Backup types](/docs/backup/concepts/backup#types).
 */
export enum Backup_Type {
  TYPE_UNSPECIFIED = 0,
  FULL = 1,
  INCREMENTAL = 2,
  UNRECOGNIZED = -1,
}

export function backup_TypeFromJSON(object: any): Backup_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Backup_Type.TYPE_UNSPECIFIED;
    case 1:
    case "FULL":
      return Backup_Type.FULL;
    case 2:
    case "INCREMENTAL":
      return Backup_Type.INCREMENTAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Backup_Type.UNRECOGNIZED;
  }
}

export function backup_TypeToJSON(object: Backup_Type): string {
  switch (object) {
    case Backup_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Backup_Type.FULL:
      return "FULL";
    case Backup_Type.INCREMENTAL:
      return "INCREMENTAL";
    case Backup_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Backup attributes. */
export interface Backup_BackupAttributes {
  $type: "yandex.cloud.backup.v1.Backup.BackupAttributes";
  /** Backup stream name. */
  streamName: string;
  /** URI of the backup archive. */
  uri: string;
}

/** BackupFile represents a single unit of file or directory system inside the backup. */
export interface BackupFile {
  $type: "yandex.cloud.backup.v1.BackupFile";
  /** ID of the item. Should be used as source ID in case of listing. */
  id: string;
  /** Might be empty if this is root directory. */
  parentId?:
    | string
    | undefined;
  /** Type of the item. */
  type: BackupFile_Type;
  /** Absolute path of the item. */
  fullPath: string;
  /** Name of the directory / file. */
  name: string;
  /** Size in bytes of the item. */
  size: number;
  /** Actions that might be done on the object. */
  actions?: BackupFile_Actions | undefined;
  modifiedAt?: Date | undefined;
}

/** Type of the file. */
export enum BackupFile_Type {
  TYPE_UNSPECIFIED = 0,
  TYPE_DIR = 1,
  TYPE_FILE = 2,
  UNRECOGNIZED = -1,
}

export function backupFile_TypeFromJSON(object: any): BackupFile_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return BackupFile_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_DIR":
      return BackupFile_Type.TYPE_DIR;
    case 2:
    case "TYPE_FILE":
      return BackupFile_Type.TYPE_FILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BackupFile_Type.UNRECOGNIZED;
  }
}

export function backupFile_TypeToJSON(object: BackupFile_Type): string {
  switch (object) {
    case BackupFile_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case BackupFile_Type.TYPE_DIR:
      return "TYPE_DIR";
    case BackupFile_Type.TYPE_FILE:
      return "TYPE_FILE";
    case BackupFile_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface BackupFile_Actions {
  $type: "yandex.cloud.backup.v1.BackupFile.Actions";
  /** Allows to send request to restore item to disk */
  restoreToDisk: boolean;
  /** Allows to move to location by id. */
  goToLocation: boolean;
}

function createBaseArchive(): Archive {
  return {
    $type: "yandex.cloud.backup.v1.Archive",
    id: "",
    name: "",
    vaultId: "",
    attributes: undefined,
    size: 0,
    compressedDataSize: 0,
    dataSize: 0,
    originalDataSize: 0,
    logicalSize: 0,
    format: 0,
    createdAt: undefined,
    updatedAt: undefined,
    lastBackupCreatedAt: undefined,
    lastSeenAt: undefined,
    protectedByPassword: false,
    encryptionAlgorithm: 0,
    actions: [],
    backupPlanId: "",
    backupPlanName: "",
    description: "",
    displayName: "",
    computeInstanceId: "",
    consistent: false,
    deleted: false,
    resourceId: "",
  };
}

export const Archive = {
  $type: "yandex.cloud.backup.v1.Archive" as const,

  encode(message: Archive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.vaultId !== "") {
      writer.uint32(26).string(message.vaultId);
    }
    if (message.attributes !== undefined) {
      Archive_ArchiveAttributes.encode(message.attributes, writer.uint32(34).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(40).int64(message.size);
    }
    if (message.compressedDataSize !== 0) {
      writer.uint32(48).int64(message.compressedDataSize);
    }
    if (message.dataSize !== 0) {
      writer.uint32(56).int64(message.dataSize);
    }
    if (message.originalDataSize !== 0) {
      writer.uint32(64).int64(message.originalDataSize);
    }
    if (message.logicalSize !== 0) {
      writer.uint32(72).int64(message.logicalSize);
    }
    if (message.format !== 0) {
      writer.uint32(80).int32(message.format);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(90).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(98).fork()).ldelim();
    }
    if (message.lastBackupCreatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBackupCreatedAt), writer.uint32(106).fork()).ldelim();
    }
    if (message.lastSeenAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastSeenAt), writer.uint32(114).fork()).ldelim();
    }
    if (message.protectedByPassword === true) {
      writer.uint32(120).bool(message.protectedByPassword);
    }
    if (message.encryptionAlgorithm !== 0) {
      writer.uint32(128).int32(message.encryptionAlgorithm);
    }
    writer.uint32(162).fork();
    for (const v of message.actions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.backupPlanId !== "") {
      writer.uint32(178).string(message.backupPlanId);
    }
    if (message.backupPlanName !== "") {
      writer.uint32(186).string(message.backupPlanName);
    }
    if (message.description !== "") {
      writer.uint32(194).string(message.description);
    }
    if (message.displayName !== "") {
      writer.uint32(202).string(message.displayName);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(210).string(message.computeInstanceId);
    }
    if (message.consistent === true) {
      writer.uint32(216).bool(message.consistent);
    }
    if (message.deleted === true) {
      writer.uint32(240).bool(message.deleted);
    }
    if (message.resourceId !== "") {
      writer.uint32(250).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Archive {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchive();
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

          message.vaultId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.attributes = Archive_ArchiveAttributes.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.compressedDataSize = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.dataSize = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.originalDataSize = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.logicalSize = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.lastBackupCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.lastSeenAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.protectedByPassword = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.encryptionAlgorithm = reader.int32() as any;
          continue;
        case 20:
          if (tag === 160) {
            message.actions.push(reader.int32() as any);

            continue;
          }

          if (tag === 162) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actions.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.backupPlanId = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.backupPlanName = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.description = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.consistent = reader.bool();
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.deleted = reader.bool();
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Archive {
    return {
      $type: Archive.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      vaultId: isSet(object.vaultId) ? globalThis.String(object.vaultId) : "",
      attributes: isSet(object.attributes) ? Archive_ArchiveAttributes.fromJSON(object.attributes) : undefined,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      compressedDataSize: isSet(object.compressedDataSize) ? globalThis.Number(object.compressedDataSize) : 0,
      dataSize: isSet(object.dataSize) ? globalThis.Number(object.dataSize) : 0,
      originalDataSize: isSet(object.originalDataSize) ? globalThis.Number(object.originalDataSize) : 0,
      logicalSize: isSet(object.logicalSize) ? globalThis.Number(object.logicalSize) : 0,
      format: isSet(object.format) ? formatFromJSON(object.format) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      lastBackupCreatedAt: isSet(object.lastBackupCreatedAt)
        ? fromJsonTimestamp(object.lastBackupCreatedAt)
        : undefined,
      lastSeenAt: isSet(object.lastSeenAt) ? fromJsonTimestamp(object.lastSeenAt) : undefined,
      protectedByPassword: isSet(object.protectedByPassword) ? globalThis.Boolean(object.protectedByPassword) : false,
      encryptionAlgorithm: isSet(object.encryptionAlgorithm)
        ? archive_EncryptionAlgorithmFromJSON(object.encryptionAlgorithm)
        : 0,
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => archive_ActionFromJSON(e))
        : [],
      backupPlanId: isSet(object.backupPlanId) ? globalThis.String(object.backupPlanId) : "",
      backupPlanName: isSet(object.backupPlanName) ? globalThis.String(object.backupPlanName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      consistent: isSet(object.consistent) ? globalThis.Boolean(object.consistent) : false,
      deleted: isSet(object.deleted) ? globalThis.Boolean(object.deleted) : false,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: Archive): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.vaultId !== "") {
      obj.vaultId = message.vaultId;
    }
    if (message.attributes !== undefined) {
      obj.attributes = Archive_ArchiveAttributes.toJSON(message.attributes);
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.compressedDataSize !== 0) {
      obj.compressedDataSize = Math.round(message.compressedDataSize);
    }
    if (message.dataSize !== 0) {
      obj.dataSize = Math.round(message.dataSize);
    }
    if (message.originalDataSize !== 0) {
      obj.originalDataSize = Math.round(message.originalDataSize);
    }
    if (message.logicalSize !== 0) {
      obj.logicalSize = Math.round(message.logicalSize);
    }
    if (message.format !== 0) {
      obj.format = formatToJSON(message.format);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.lastBackupCreatedAt !== undefined) {
      obj.lastBackupCreatedAt = message.lastBackupCreatedAt.toISOString();
    }
    if (message.lastSeenAt !== undefined) {
      obj.lastSeenAt = message.lastSeenAt.toISOString();
    }
    if (message.protectedByPassword === true) {
      obj.protectedByPassword = message.protectedByPassword;
    }
    if (message.encryptionAlgorithm !== 0) {
      obj.encryptionAlgorithm = archive_EncryptionAlgorithmToJSON(message.encryptionAlgorithm);
    }
    if (message.actions?.length) {
      obj.actions = message.actions.map((e) => archive_ActionToJSON(e));
    }
    if (message.backupPlanId !== "") {
      obj.backupPlanId = message.backupPlanId;
    }
    if (message.backupPlanName !== "") {
      obj.backupPlanName = message.backupPlanName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.consistent === true) {
      obj.consistent = message.consistent;
    }
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Archive>, I>>(base?: I): Archive {
    return Archive.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Archive>, I>>(object: I): Archive {
    const message = createBaseArchive();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.vaultId = object.vaultId ?? "";
    message.attributes = (object.attributes !== undefined && object.attributes !== null)
      ? Archive_ArchiveAttributes.fromPartial(object.attributes)
      : undefined;
    message.size = object.size ?? 0;
    message.compressedDataSize = object.compressedDataSize ?? 0;
    message.dataSize = object.dataSize ?? 0;
    message.originalDataSize = object.originalDataSize ?? 0;
    message.logicalSize = object.logicalSize ?? 0;
    message.format = object.format ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.lastBackupCreatedAt = object.lastBackupCreatedAt ?? undefined;
    message.lastSeenAt = object.lastSeenAt ?? undefined;
    message.protectedByPassword = object.protectedByPassword ?? false;
    message.encryptionAlgorithm = object.encryptionAlgorithm ?? 0;
    message.actions = object.actions?.map((e) => e) || [];
    message.backupPlanId = object.backupPlanId ?? "";
    message.backupPlanName = object.backupPlanName ?? "";
    message.description = object.description ?? "";
    message.displayName = object.displayName ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.consistent = object.consistent ?? false;
    message.deleted = object.deleted ?? false;
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Archive.$type, Archive);

function createBaseArchive_ArchiveAttributes(): Archive_ArchiveAttributes {
  return { $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes", aaib: "", uri: "" };
}

export const Archive_ArchiveAttributes = {
  $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes" as const,

  encode(message: Archive_ArchiveAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aaib !== "") {
      writer.uint32(10).string(message.aaib);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Archive_ArchiveAttributes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchive_ArchiveAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aaib = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Archive_ArchiveAttributes {
    return {
      $type: Archive_ArchiveAttributes.$type,
      aaib: isSet(object.aaib) ? globalThis.String(object.aaib) : "",
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: Archive_ArchiveAttributes): unknown {
    const obj: any = {};
    if (message.aaib !== "") {
      obj.aaib = message.aaib;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Archive_ArchiveAttributes>, I>>(base?: I): Archive_ArchiveAttributes {
    return Archive_ArchiveAttributes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Archive_ArchiveAttributes>, I>>(object: I): Archive_ArchiveAttributes {
    const message = createBaseArchive_ArchiveAttributes();
    message.aaib = object.aaib ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(Archive_ArchiveAttributes.$type, Archive_ArchiveAttributes);

function createBaseVolume(): Volume {
  return {
    $type: "yandex.cloud.backup.v1.Volume",
    freeSpace: 0,
    isBootable: false,
    isSystem: false,
    name: "",
    size: 0,
    mountStrid: "",
  };
}

export const Volume = {
  $type: "yandex.cloud.backup.v1.Volume" as const,

  encode(message: Volume, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.freeSpace !== 0) {
      writer.uint32(8).int64(message.freeSpace);
    }
    if (message.isBootable === true) {
      writer.uint32(16).bool(message.isBootable);
    }
    if (message.isSystem === true) {
      writer.uint32(24).bool(message.isSystem);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(40).int64(message.size);
    }
    if (message.mountStrid !== "") {
      writer.uint32(50).string(message.mountStrid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Volume {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.freeSpace = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isBootable = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isSystem = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.mountStrid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Volume {
    return {
      $type: Volume.$type,
      freeSpace: isSet(object.freeSpace) ? globalThis.Number(object.freeSpace) : 0,
      isBootable: isSet(object.isBootable) ? globalThis.Boolean(object.isBootable) : false,
      isSystem: isSet(object.isSystem) ? globalThis.Boolean(object.isSystem) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      mountStrid: isSet(object.mountStrid) ? globalThis.String(object.mountStrid) : "",
    };
  },

  toJSON(message: Volume): unknown {
    const obj: any = {};
    if (message.freeSpace !== 0) {
      obj.freeSpace = Math.round(message.freeSpace);
    }
    if (message.isBootable === true) {
      obj.isBootable = message.isBootable;
    }
    if (message.isSystem === true) {
      obj.isSystem = message.isSystem;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.mountStrid !== "") {
      obj.mountStrid = message.mountStrid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Volume>, I>>(base?: I): Volume {
    return Volume.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Volume>, I>>(object: I): Volume {
    const message = createBaseVolume();
    message.freeSpace = object.freeSpace ?? 0;
    message.isBootable = object.isBootable ?? false;
    message.isSystem = object.isSystem ?? false;
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.mountStrid = object.mountStrid ?? "";
    return message;
  },
};

messageTypeRegistry.set(Volume.$type, Volume);

function createBaseDisk(): Disk {
  return { $type: "yandex.cloud.backup.v1.Disk", deviceModel: "", name: "", size: 0, volumes: [] };
}

export const Disk = {
  $type: "yandex.cloud.backup.v1.Disk" as const,

  encode(message: Disk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceModel !== "") {
      writer.uint32(10).string(message.deviceModel);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(24).int64(message.size);
    }
    for (const v of message.volumes) {
      Volume.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Disk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceModel = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.volumes.push(Volume.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Disk {
    return {
      $type: Disk.$type,
      deviceModel: isSet(object.deviceModel) ? globalThis.String(object.deviceModel) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      volumes: globalThis.Array.isArray(object?.volumes) ? object.volumes.map((e: any) => Volume.fromJSON(e)) : [],
    };
  },

  toJSON(message: Disk): unknown {
    const obj: any = {};
    if (message.deviceModel !== "") {
      obj.deviceModel = message.deviceModel;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.volumes?.length) {
      obj.volumes = message.volumes.map((e) => Volume.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Disk>, I>>(base?: I): Disk {
    return Disk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Disk>, I>>(object: I): Disk {
    const message = createBaseDisk();
    message.deviceModel = object.deviceModel ?? "";
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.volumes = object.volumes?.map((e) => Volume.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Disk.$type, Disk);

function createBaseBackup(): Backup {
  return {
    $type: "yandex.cloud.backup.v1.Backup",
    id: "",
    vaultId: "",
    archiveId: "",
    createdAt: undefined,
    lastSeenAt: undefined,
    size: 0,
    deduplicatedSize: 0,
    backedUpDataSize: 0,
    originalDataSize: 0,
    attributes: undefined,
    computeInstanceId: "",
    disks: [],
    type: 0,
    deleted: false,
    policyId: "",
    resourceId: "",
  };
}

export const Backup = {
  $type: "yandex.cloud.backup.v1.Backup" as const,

  encode(message: Backup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.vaultId !== "") {
      writer.uint32(18).string(message.vaultId);
    }
    if (message.archiveId !== "") {
      writer.uint32(26).string(message.archiveId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastSeenAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastSeenAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
    }
    if (message.deduplicatedSize !== 0) {
      writer.uint32(56).int64(message.deduplicatedSize);
    }
    if (message.backedUpDataSize !== 0) {
      writer.uint32(64).int64(message.backedUpDataSize);
    }
    if (message.originalDataSize !== 0) {
      writer.uint32(72).int64(message.originalDataSize);
    }
    if (message.attributes !== undefined) {
      Backup_BackupAttributes.encode(message.attributes, writer.uint32(82).fork()).ldelim();
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(90).string(message.computeInstanceId);
    }
    for (const v of message.disks) {
      Disk.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(120).int32(message.type);
    }
    if (message.deleted === true) {
      writer.uint32(168).bool(message.deleted);
    }
    if (message.policyId !== "") {
      writer.uint32(178).string(message.policyId);
    }
    if (message.resourceId !== "") {
      writer.uint32(186).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackup();
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

          message.vaultId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.archiveId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastSeenAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.deduplicatedSize = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.backedUpDataSize = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.originalDataSize = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.attributes = Backup_BackupAttributes.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.disks.push(Disk.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.deleted = reader.bool();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.policyId = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Backup {
    return {
      $type: Backup.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      vaultId: isSet(object.vaultId) ? globalThis.String(object.vaultId) : "",
      archiveId: isSet(object.archiveId) ? globalThis.String(object.archiveId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      lastSeenAt: isSet(object.lastSeenAt) ? fromJsonTimestamp(object.lastSeenAt) : undefined,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      deduplicatedSize: isSet(object.deduplicatedSize) ? globalThis.Number(object.deduplicatedSize) : 0,
      backedUpDataSize: isSet(object.backedUpDataSize) ? globalThis.Number(object.backedUpDataSize) : 0,
      originalDataSize: isSet(object.originalDataSize) ? globalThis.Number(object.originalDataSize) : 0,
      attributes: isSet(object.attributes) ? Backup_BackupAttributes.fromJSON(object.attributes) : undefined,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      disks: globalThis.Array.isArray(object?.disks) ? object.disks.map((e: any) => Disk.fromJSON(e)) : [],
      type: isSet(object.type) ? backup_TypeFromJSON(object.type) : 0,
      deleted: isSet(object.deleted) ? globalThis.Boolean(object.deleted) : false,
      policyId: isSet(object.policyId) ? globalThis.String(object.policyId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: Backup): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.vaultId !== "") {
      obj.vaultId = message.vaultId;
    }
    if (message.archiveId !== "") {
      obj.archiveId = message.archiveId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.lastSeenAt !== undefined) {
      obj.lastSeenAt = message.lastSeenAt.toISOString();
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.deduplicatedSize !== 0) {
      obj.deduplicatedSize = Math.round(message.deduplicatedSize);
    }
    if (message.backedUpDataSize !== 0) {
      obj.backedUpDataSize = Math.round(message.backedUpDataSize);
    }
    if (message.originalDataSize !== 0) {
      obj.originalDataSize = Math.round(message.originalDataSize);
    }
    if (message.attributes !== undefined) {
      obj.attributes = Backup_BackupAttributes.toJSON(message.attributes);
    }
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.disks?.length) {
      obj.disks = message.disks.map((e) => Disk.toJSON(e));
    }
    if (message.type !== 0) {
      obj.type = backup_TypeToJSON(message.type);
    }
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    if (message.policyId !== "") {
      obj.policyId = message.policyId;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Backup>, I>>(base?: I): Backup {
    return Backup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Backup>, I>>(object: I): Backup {
    const message = createBaseBackup();
    message.id = object.id ?? "";
    message.vaultId = object.vaultId ?? "";
    message.archiveId = object.archiveId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.lastSeenAt = object.lastSeenAt ?? undefined;
    message.size = object.size ?? 0;
    message.deduplicatedSize = object.deduplicatedSize ?? 0;
    message.backedUpDataSize = object.backedUpDataSize ?? 0;
    message.originalDataSize = object.originalDataSize ?? 0;
    message.attributes = (object.attributes !== undefined && object.attributes !== null)
      ? Backup_BackupAttributes.fromPartial(object.attributes)
      : undefined;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.disks = object.disks?.map((e) => Disk.fromPartial(e)) || [];
    message.type = object.type ?? 0;
    message.deleted = object.deleted ?? false;
    message.policyId = object.policyId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Backup.$type, Backup);

function createBaseBackup_BackupAttributes(): Backup_BackupAttributes {
  return { $type: "yandex.cloud.backup.v1.Backup.BackupAttributes", streamName: "", uri: "" };
}

export const Backup_BackupAttributes = {
  $type: "yandex.cloud.backup.v1.Backup.BackupAttributes" as const,

  encode(message: Backup_BackupAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streamName !== "") {
      writer.uint32(10).string(message.streamName);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backup_BackupAttributes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackup_BackupAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.streamName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Backup_BackupAttributes {
    return {
      $type: Backup_BackupAttributes.$type,
      streamName: isSet(object.streamName) ? globalThis.String(object.streamName) : "",
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: Backup_BackupAttributes): unknown {
    const obj: any = {};
    if (message.streamName !== "") {
      obj.streamName = message.streamName;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Backup_BackupAttributes>, I>>(base?: I): Backup_BackupAttributes {
    return Backup_BackupAttributes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Backup_BackupAttributes>, I>>(object: I): Backup_BackupAttributes {
    const message = createBaseBackup_BackupAttributes();
    message.streamName = object.streamName ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(Backup_BackupAttributes.$type, Backup_BackupAttributes);

function createBaseBackupFile(): BackupFile {
  return {
    $type: "yandex.cloud.backup.v1.BackupFile",
    id: "",
    parentId: undefined,
    type: 0,
    fullPath: "",
    name: "",
    size: 0,
    actions: undefined,
    modifiedAt: undefined,
  };
}

export const BackupFile = {
  $type: "yandex.cloud.backup.v1.BackupFile" as const,

  encode(message: BackupFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.parentId !== undefined) {
      StringValue.encode({ $type: "google.protobuf.StringValue", value: message.parentId! }, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.fullPath !== "") {
      writer.uint32(34).string(message.fullPath);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
    }
    if (message.actions !== undefined) {
      BackupFile_Actions.encode(message.actions, writer.uint32(58).fork()).ldelim();
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackupFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackupFile();
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

          message.parentId = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fullPath = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.actions = BackupFile_Actions.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackupFile {
    return {
      $type: BackupFile.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      type: isSet(object.type) ? backupFile_TypeFromJSON(object.type) : 0,
      fullPath: isSet(object.fullPath) ? globalThis.String(object.fullPath) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      actions: isSet(object.actions) ? BackupFile_Actions.fromJSON(object.actions) : undefined,
      modifiedAt: isSet(object.modifiedAt) ? fromJsonTimestamp(object.modifiedAt) : undefined,
    };
  },

  toJSON(message: BackupFile): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.parentId !== undefined) {
      obj.parentId = message.parentId;
    }
    if (message.type !== 0) {
      obj.type = backupFile_TypeToJSON(message.type);
    }
    if (message.fullPath !== "") {
      obj.fullPath = message.fullPath;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.actions !== undefined) {
      obj.actions = BackupFile_Actions.toJSON(message.actions);
    }
    if (message.modifiedAt !== undefined) {
      obj.modifiedAt = message.modifiedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BackupFile>, I>>(base?: I): BackupFile {
    return BackupFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BackupFile>, I>>(object: I): BackupFile {
    const message = createBaseBackupFile();
    message.id = object.id ?? "";
    message.parentId = object.parentId ?? undefined;
    message.type = object.type ?? 0;
    message.fullPath = object.fullPath ?? "";
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.actions = (object.actions !== undefined && object.actions !== null)
      ? BackupFile_Actions.fromPartial(object.actions)
      : undefined;
    message.modifiedAt = object.modifiedAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BackupFile.$type, BackupFile);

function createBaseBackupFile_Actions(): BackupFile_Actions {
  return { $type: "yandex.cloud.backup.v1.BackupFile.Actions", restoreToDisk: false, goToLocation: false };
}

export const BackupFile_Actions = {
  $type: "yandex.cloud.backup.v1.BackupFile.Actions" as const,

  encode(message: BackupFile_Actions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.restoreToDisk === true) {
      writer.uint32(8).bool(message.restoreToDisk);
    }
    if (message.goToLocation === true) {
      writer.uint32(16).bool(message.goToLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackupFile_Actions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackupFile_Actions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.restoreToDisk = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.goToLocation = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackupFile_Actions {
    return {
      $type: BackupFile_Actions.$type,
      restoreToDisk: isSet(object.restoreToDisk) ? globalThis.Boolean(object.restoreToDisk) : false,
      goToLocation: isSet(object.goToLocation) ? globalThis.Boolean(object.goToLocation) : false,
    };
  },

  toJSON(message: BackupFile_Actions): unknown {
    const obj: any = {};
    if (message.restoreToDisk === true) {
      obj.restoreToDisk = message.restoreToDisk;
    }
    if (message.goToLocation === true) {
      obj.goToLocation = message.goToLocation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BackupFile_Actions>, I>>(base?: I): BackupFile_Actions {
    return BackupFile_Actions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BackupFile_Actions>, I>>(object: I): BackupFile_Actions {
    const message = createBaseBackupFile_Actions();
    message.restoreToDisk = object.restoreToDisk ?? false;
    message.goToLocation = object.goToLocation ?? false;
    return message;
  },
};

messageTypeRegistry.set(BackupFile_Actions.$type, BackupFile_Actions);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
