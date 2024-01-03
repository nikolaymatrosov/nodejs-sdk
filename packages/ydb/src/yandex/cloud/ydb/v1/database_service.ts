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
import { messageTypeRegistry } from "../../../../typeRegistry";
import { BackupConfig, BackupSettings } from "./backup";
import {
  Database,
  DedicatedDatabase,
  MonitoringConfig,
  RegionalDatabase,
  ScalePolicy,
  ServerlessDatabase,
  StorageConfig,
  ZonalDatabase,
} from "./database";

export const protobufPackage = "yandex.cloud.ydb.v1";

export interface MoveDatabaseRequest {
  $type: "yandex.cloud.ydb.v1.MoveDatabaseRequest";
  /** ID of the YDB instance to move. */
  databaseId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveDatabaseMetadata {
  $type: "yandex.cloud.ydb.v1.MoveDatabaseMetadata";
  databaseId: string;
  databaseName: string;
}

export interface RestoreBackupRequest {
  $type: "yandex.cloud.ydb.v1.RestoreBackupRequest";
  /** Required. ID of the YDB backup. */
  backupId: string;
  /** Required. ID of the YDB database. */
  databaseId: string;
  /**
   * Specify paths to restore.
   * If empty, all paths will restored by default.
   */
  pathsToRestore: string[];
  /** Specify target path. */
  targetPath: string;
}

export interface RestoreBackupMetadata {
  $type: "yandex.cloud.ydb.v1.RestoreBackupMetadata";
  backupId: string;
  databaseId: string;
}

export interface BackupDatabaseRequest {
  $type: "yandex.cloud.ydb.v1.BackupDatabaseRequest";
  databaseId: string;
  /** custom backup options, if required. */
  backupSettings?: BackupSettings | undefined;
}

export interface BackupDatabaseMetadata {
  $type: "yandex.cloud.ydb.v1.BackupDatabaseMetadata";
  backupId: string;
  databaseId: string;
}

export interface StartDatabaseRequest {
  $type: "yandex.cloud.ydb.v1.StartDatabaseRequest";
  databaseId: string;
}

export interface StartDatabaseMetadata {
  $type: "yandex.cloud.ydb.v1.StartDatabaseMetadata";
  databaseId: string;
  databaseName: string;
}

export interface StopDatabaseRequest {
  $type: "yandex.cloud.ydb.v1.StopDatabaseRequest";
  databaseId: string;
}

export interface StopDatabaseMetadata {
  $type: "yandex.cloud.ydb.v1.StopDatabaseMetadata";
  databaseId: string;
  databaseName: string;
}

export interface GetDatabaseRequest {
  $type: "yandex.cloud.ydb.v1.GetDatabaseRequest";
  /** Required. ID of the YDB cluster. */
  databaseId: string;
}

export interface ListDatabasesRequest {
  $type: "yandex.cloud.ydb.v1.ListDatabasesRequest";
  folderId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a `next_page_token` that can be used
   * to get the next page of results in subsequent ListDatabases requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set `page_token` to the `next_page_token` returned by a previous ListDatabases
   * request to get the next page of results.
   */
  pageToken: string;
}

export interface ListDatabasesResponse {
  $type: "yandex.cloud.ydb.v1.ListDatabasesResponse";
  databases: Database[];
  /**
   * This token allows you to get the next page of results for ListDatabases requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListDatabases request. Subsequent ListDatabases
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateDatabaseRequest {
  $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest";
  folderId: string;
  name: string;
  description: string;
  resourcePresetId: string;
  storageConfig?: StorageConfig | undefined;
  scalePolicy?: ScalePolicy | undefined;
  networkId: string;
  subnetIds: string[];
  /** deprecated field */
  zonalDatabase?:
    | ZonalDatabase
    | undefined;
  /** deprecated field */
  regionalDatabase?: RegionalDatabase | undefined;
  dedicatedDatabase?: DedicatedDatabase | undefined;
  serverlessDatabase?: ServerlessDatabase | undefined;
  assignPublicIps: boolean;
  locationId: string;
  labels: { [key: string]: string };
  backupConfig?: BackupConfig | undefined;
  monitoringConfig?: MonitoringConfig | undefined;
  deletionProtection: boolean;
}

export interface CreateDatabaseRequest_LabelsEntry {
  $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateDatabaseMetadata {
  $type: "yandex.cloud.ydb.v1.CreateDatabaseMetadata";
  /** Required. ID of the YDB cluster. */
  databaseId: string;
  /** Required. Name of the creating database. */
  databaseName: string;
}

export interface UpdateDatabaseRequest {
  $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest";
  folderId: string;
  updateMask?: string[] | undefined;
  databaseId: string;
  name: string;
  description: string;
  resourcePresetId: string;
  storageConfig?: StorageConfig | undefined;
  scalePolicy?: ScalePolicy | undefined;
  networkId: string;
  subnetIds: string[];
  zonalDatabase?: ZonalDatabase | undefined;
  regionalDatabase?: RegionalDatabase | undefined;
  dedicatedDatabase?: DedicatedDatabase | undefined;
  serverlessDatabase?: ServerlessDatabase | undefined;
  assignPublicIps: boolean;
  locationId: string;
  labels: { [key: string]: string };
  backupConfig?: BackupConfig | undefined;
  monitoringConfig?: MonitoringConfig | undefined;
  deletionProtection: boolean;
}

export interface UpdateDatabaseRequest_LabelsEntry {
  $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateDatabaseMetadata {
  $type: "yandex.cloud.ydb.v1.UpdateDatabaseMetadata";
  databaseId: string;
  databaseName: string;
}

export interface DeleteDatabaseRequest {
  $type: "yandex.cloud.ydb.v1.DeleteDatabaseRequest";
  databaseId: string;
}

export interface DeleteDatabaseMetadata {
  $type: "yandex.cloud.ydb.v1.DeleteDatabaseMetadata";
  databaseId: string;
  databaseName: string;
}

function createBaseMoveDatabaseRequest(): MoveDatabaseRequest {
  return { $type: "yandex.cloud.ydb.v1.MoveDatabaseRequest", databaseId: "", destinationFolderId: "" };
}

export const MoveDatabaseRequest = {
  $type: "yandex.cloud.ydb.v1.MoveDatabaseRequest" as const,

  encode(message: MoveDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveDatabaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
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

  fromJSON(object: any): MoveDatabaseRequest {
    return {
      $type: MoveDatabaseRequest.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      destinationFolderId: isSet(object.destinationFolderId) ? globalThis.String(object.destinationFolderId) : "",
    };
  },

  toJSON(message: MoveDatabaseRequest): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.destinationFolderId !== "") {
      obj.destinationFolderId = message.destinationFolderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveDatabaseRequest>, I>>(base?: I): MoveDatabaseRequest {
    return MoveDatabaseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveDatabaseRequest>, I>>(object: I): MoveDatabaseRequest {
    const message = createBaseMoveDatabaseRequest();
    message.databaseId = object.databaseId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveDatabaseRequest.$type, MoveDatabaseRequest);

function createBaseMoveDatabaseMetadata(): MoveDatabaseMetadata {
  return { $type: "yandex.cloud.ydb.v1.MoveDatabaseMetadata", databaseId: "", databaseName: "" };
}

export const MoveDatabaseMetadata = {
  $type: "yandex.cloud.ydb.v1.MoveDatabaseMetadata" as const,

  encode(message: MoveDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveDatabaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveDatabaseMetadata {
    return {
      $type: MoveDatabaseMetadata.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: MoveDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MoveDatabaseMetadata>, I>>(base?: I): MoveDatabaseMetadata {
    return MoveDatabaseMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MoveDatabaseMetadata>, I>>(object: I): MoveDatabaseMetadata {
    const message = createBaseMoveDatabaseMetadata();
    message.databaseId = object.databaseId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveDatabaseMetadata.$type, MoveDatabaseMetadata);

function createBaseRestoreBackupRequest(): RestoreBackupRequest {
  return {
    $type: "yandex.cloud.ydb.v1.RestoreBackupRequest",
    backupId: "",
    databaseId: "",
    pathsToRestore: [],
    targetPath: "",
  };
}

export const RestoreBackupRequest = {
  $type: "yandex.cloud.ydb.v1.RestoreBackupRequest" as const,

  encode(message: RestoreBackupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.databaseId !== "") {
      writer.uint32(18).string(message.databaseId);
    }
    for (const v of message.pathsToRestore) {
      writer.uint32(26).string(v!);
    }
    if (message.targetPath !== "") {
      writer.uint32(34).string(message.targetPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreBackupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreBackupRequest();
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

          message.databaseId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pathsToRestore.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.targetPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreBackupRequest {
    return {
      $type: RestoreBackupRequest.$type,
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      pathsToRestore: globalThis.Array.isArray(object?.pathsToRestore)
        ? object.pathsToRestore.map((e: any) => globalThis.String(e))
        : [],
      targetPath: isSet(object.targetPath) ? globalThis.String(object.targetPath) : "",
    };
  },

  toJSON(message: RestoreBackupRequest): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.pathsToRestore?.length) {
      obj.pathsToRestore = message.pathsToRestore;
    }
    if (message.targetPath !== "") {
      obj.targetPath = message.targetPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RestoreBackupRequest>, I>>(base?: I): RestoreBackupRequest {
    return RestoreBackupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RestoreBackupRequest>, I>>(object: I): RestoreBackupRequest {
    const message = createBaseRestoreBackupRequest();
    message.backupId = object.backupId ?? "";
    message.databaseId = object.databaseId ?? "";
    message.pathsToRestore = object.pathsToRestore?.map((e) => e) || [];
    message.targetPath = object.targetPath ?? "";
    return message;
  },
};

messageTypeRegistry.set(RestoreBackupRequest.$type, RestoreBackupRequest);

function createBaseRestoreBackupMetadata(): RestoreBackupMetadata {
  return { $type: "yandex.cloud.ydb.v1.RestoreBackupMetadata", backupId: "", databaseId: "" };
}

export const RestoreBackupMetadata = {
  $type: "yandex.cloud.ydb.v1.RestoreBackupMetadata" as const,

  encode(message: RestoreBackupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.databaseId !== "") {
      writer.uint32(18).string(message.databaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreBackupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreBackupMetadata();
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

          message.databaseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreBackupMetadata {
    return {
      $type: RestoreBackupMetadata.$type,
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
    };
  },

  toJSON(message: RestoreBackupMetadata): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RestoreBackupMetadata>, I>>(base?: I): RestoreBackupMetadata {
    return RestoreBackupMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RestoreBackupMetadata>, I>>(object: I): RestoreBackupMetadata {
    const message = createBaseRestoreBackupMetadata();
    message.backupId = object.backupId ?? "";
    message.databaseId = object.databaseId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RestoreBackupMetadata.$type, RestoreBackupMetadata);

function createBaseBackupDatabaseRequest(): BackupDatabaseRequest {
  return { $type: "yandex.cloud.ydb.v1.BackupDatabaseRequest", databaseId: "", backupSettings: undefined };
}

export const BackupDatabaseRequest = {
  $type: "yandex.cloud.ydb.v1.BackupDatabaseRequest" as const,

  encode(message: BackupDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    if (message.backupSettings !== undefined) {
      BackupSettings.encode(message.backupSettings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackupDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackupDatabaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backupSettings = BackupSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackupDatabaseRequest {
    return {
      $type: BackupDatabaseRequest.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      backupSettings: isSet(object.backupSettings) ? BackupSettings.fromJSON(object.backupSettings) : undefined,
    };
  },

  toJSON(message: BackupDatabaseRequest): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.backupSettings !== undefined) {
      obj.backupSettings = BackupSettings.toJSON(message.backupSettings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BackupDatabaseRequest>, I>>(base?: I): BackupDatabaseRequest {
    return BackupDatabaseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BackupDatabaseRequest>, I>>(object: I): BackupDatabaseRequest {
    const message = createBaseBackupDatabaseRequest();
    message.databaseId = object.databaseId ?? "";
    message.backupSettings = (object.backupSettings !== undefined && object.backupSettings !== null)
      ? BackupSettings.fromPartial(object.backupSettings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(BackupDatabaseRequest.$type, BackupDatabaseRequest);

function createBaseBackupDatabaseMetadata(): BackupDatabaseMetadata {
  return { $type: "yandex.cloud.ydb.v1.BackupDatabaseMetadata", backupId: "", databaseId: "" };
}

export const BackupDatabaseMetadata = {
  $type: "yandex.cloud.ydb.v1.BackupDatabaseMetadata" as const,

  encode(message: BackupDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.databaseId !== "") {
      writer.uint32(18).string(message.databaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackupDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackupDatabaseMetadata();
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

          message.databaseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackupDatabaseMetadata {
    return {
      $type: BackupDatabaseMetadata.$type,
      backupId: isSet(object.backupId) ? globalThis.String(object.backupId) : "",
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
    };
  },

  toJSON(message: BackupDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.backupId !== "") {
      obj.backupId = message.backupId;
    }
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BackupDatabaseMetadata>, I>>(base?: I): BackupDatabaseMetadata {
    return BackupDatabaseMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BackupDatabaseMetadata>, I>>(object: I): BackupDatabaseMetadata {
    const message = createBaseBackupDatabaseMetadata();
    message.backupId = object.backupId ?? "";
    message.databaseId = object.databaseId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BackupDatabaseMetadata.$type, BackupDatabaseMetadata);

function createBaseStartDatabaseRequest(): StartDatabaseRequest {
  return { $type: "yandex.cloud.ydb.v1.StartDatabaseRequest", databaseId: "" };
}

export const StartDatabaseRequest = {
  $type: "yandex.cloud.ydb.v1.StartDatabaseRequest" as const,

  encode(message: StartDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartDatabaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartDatabaseRequest {
    return {
      $type: StartDatabaseRequest.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
    };
  },

  toJSON(message: StartDatabaseRequest): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartDatabaseRequest>, I>>(base?: I): StartDatabaseRequest {
    return StartDatabaseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartDatabaseRequest>, I>>(object: I): StartDatabaseRequest {
    const message = createBaseStartDatabaseRequest();
    message.databaseId = object.databaseId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartDatabaseRequest.$type, StartDatabaseRequest);

function createBaseStartDatabaseMetadata(): StartDatabaseMetadata {
  return { $type: "yandex.cloud.ydb.v1.StartDatabaseMetadata", databaseId: "", databaseName: "" };
}

export const StartDatabaseMetadata = {
  $type: "yandex.cloud.ydb.v1.StartDatabaseMetadata" as const,

  encode(message: StartDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartDatabaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartDatabaseMetadata {
    return {
      $type: StartDatabaseMetadata.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: StartDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartDatabaseMetadata>, I>>(base?: I): StartDatabaseMetadata {
    return StartDatabaseMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartDatabaseMetadata>, I>>(object: I): StartDatabaseMetadata {
    const message = createBaseStartDatabaseMetadata();
    message.databaseId = object.databaseId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartDatabaseMetadata.$type, StartDatabaseMetadata);

function createBaseStopDatabaseRequest(): StopDatabaseRequest {
  return { $type: "yandex.cloud.ydb.v1.StopDatabaseRequest", databaseId: "" };
}

export const StopDatabaseRequest = {
  $type: "yandex.cloud.ydb.v1.StopDatabaseRequest" as const,

  encode(message: StopDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopDatabaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopDatabaseRequest {
    return {
      $type: StopDatabaseRequest.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
    };
  },

  toJSON(message: StopDatabaseRequest): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopDatabaseRequest>, I>>(base?: I): StopDatabaseRequest {
    return StopDatabaseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopDatabaseRequest>, I>>(object: I): StopDatabaseRequest {
    const message = createBaseStopDatabaseRequest();
    message.databaseId = object.databaseId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopDatabaseRequest.$type, StopDatabaseRequest);

function createBaseStopDatabaseMetadata(): StopDatabaseMetadata {
  return { $type: "yandex.cloud.ydb.v1.StopDatabaseMetadata", databaseId: "", databaseName: "" };
}

export const StopDatabaseMetadata = {
  $type: "yandex.cloud.ydb.v1.StopDatabaseMetadata" as const,

  encode(message: StopDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopDatabaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopDatabaseMetadata {
    return {
      $type: StopDatabaseMetadata.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: StopDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopDatabaseMetadata>, I>>(base?: I): StopDatabaseMetadata {
    return StopDatabaseMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopDatabaseMetadata>, I>>(object: I): StopDatabaseMetadata {
    const message = createBaseStopDatabaseMetadata();
    message.databaseId = object.databaseId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopDatabaseMetadata.$type, StopDatabaseMetadata);

function createBaseGetDatabaseRequest(): GetDatabaseRequest {
  return { $type: "yandex.cloud.ydb.v1.GetDatabaseRequest", databaseId: "" };
}

export const GetDatabaseRequest = {
  $type: "yandex.cloud.ydb.v1.GetDatabaseRequest" as const,

  encode(message: GetDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDatabaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDatabaseRequest {
    return {
      $type: GetDatabaseRequest.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
    };
  },

  toJSON(message: GetDatabaseRequest): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDatabaseRequest>, I>>(base?: I): GetDatabaseRequest {
    return GetDatabaseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDatabaseRequest>, I>>(object: I): GetDatabaseRequest {
    const message = createBaseGetDatabaseRequest();
    message.databaseId = object.databaseId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetDatabaseRequest.$type, GetDatabaseRequest);

function createBaseListDatabasesRequest(): ListDatabasesRequest {
  return { $type: "yandex.cloud.ydb.v1.ListDatabasesRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListDatabasesRequest = {
  $type: "yandex.cloud.ydb.v1.ListDatabasesRequest" as const,

  encode(message: ListDatabasesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDatabasesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDatabasesRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDatabasesRequest {
    return {
      $type: ListDatabasesRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListDatabasesRequest): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDatabasesRequest>, I>>(base?: I): ListDatabasesRequest {
    return ListDatabasesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDatabasesRequest>, I>>(object: I): ListDatabasesRequest {
    const message = createBaseListDatabasesRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDatabasesRequest.$type, ListDatabasesRequest);

function createBaseListDatabasesResponse(): ListDatabasesResponse {
  return { $type: "yandex.cloud.ydb.v1.ListDatabasesResponse", databases: [], nextPageToken: "" };
}

export const ListDatabasesResponse = {
  $type: "yandex.cloud.ydb.v1.ListDatabasesResponse" as const,

  encode(message: ListDatabasesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.databases) {
      Database.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDatabasesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDatabasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databases.push(Database.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDatabasesResponse {
    return {
      $type: ListDatabasesResponse.$type,
      databases: globalThis.Array.isArray(object?.databases)
        ? object.databases.map((e: any) => Database.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDatabasesResponse): unknown {
    const obj: any = {};
    if (message.databases?.length) {
      obj.databases = message.databases.map((e) => Database.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDatabasesResponse>, I>>(base?: I): ListDatabasesResponse {
    return ListDatabasesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDatabasesResponse>, I>>(object: I): ListDatabasesResponse {
    const message = createBaseListDatabasesResponse();
    message.databases = object.databases?.map((e) => Database.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDatabasesResponse.$type, ListDatabasesResponse);

function createBaseCreateDatabaseRequest(): CreateDatabaseRequest {
  return {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest",
    folderId: "",
    name: "",
    description: "",
    resourcePresetId: "",
    storageConfig: undefined,
    scalePolicy: undefined,
    networkId: "",
    subnetIds: [],
    zonalDatabase: undefined,
    regionalDatabase: undefined,
    dedicatedDatabase: undefined,
    serverlessDatabase: undefined,
    assignPublicIps: false,
    locationId: "",
    labels: {},
    backupConfig: undefined,
    monitoringConfig: undefined,
    deletionProtection: false,
  };
}

export const CreateDatabaseRequest = {
  $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest" as const,

  encode(message: CreateDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.resourcePresetId !== "") {
      writer.uint32(34).string(message.resourcePresetId);
    }
    if (message.storageConfig !== undefined) {
      StorageConfig.encode(message.storageConfig, writer.uint32(42).fork()).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(58).string(message.networkId);
    }
    for (const v of message.subnetIds) {
      writer.uint32(66).string(v!);
    }
    if (message.zonalDatabase !== undefined) {
      ZonalDatabase.encode(message.zonalDatabase, writer.uint32(74).fork()).ldelim();
    }
    if (message.regionalDatabase !== undefined) {
      RegionalDatabase.encode(message.regionalDatabase, writer.uint32(82).fork()).ldelim();
    }
    if (message.dedicatedDatabase !== undefined) {
      DedicatedDatabase.encode(message.dedicatedDatabase, writer.uint32(106).fork()).ldelim();
    }
    if (message.serverlessDatabase !== undefined) {
      ServerlessDatabase.encode(message.serverlessDatabase, writer.uint32(114).fork()).ldelim();
    }
    if (message.assignPublicIps === true) {
      writer.uint32(88).bool(message.assignPublicIps);
    }
    if (message.locationId !== "") {
      writer.uint32(98).string(message.locationId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateDatabaseRequest_LabelsEntry.encode({
        $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(122).fork()).ldelim();
    });
    if (message.backupConfig !== undefined) {
      BackupConfig.encode(message.backupConfig, writer.uint32(130).fork()).ldelim();
    }
    if (message.monitoringConfig !== undefined) {
      MonitoringConfig.encode(message.monitoringConfig, writer.uint32(138).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(144).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDatabaseRequest();
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

          message.resourcePresetId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.storageConfig = StorageConfig.decode(reader, reader.uint32());
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

          message.networkId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.zonalDatabase = ZonalDatabase.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.regionalDatabase = RegionalDatabase.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.dedicatedDatabase = DedicatedDatabase.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.serverlessDatabase = ServerlessDatabase.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.assignPublicIps = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.locationId = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          const entry15 = CreateDatabaseRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry15.value !== undefined) {
            message.labels[entry15.key] = entry15.value;
          }
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.backupConfig = BackupConfig.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.monitoringConfig = MonitoringConfig.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 144) {
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

  fromJSON(object: any): CreateDatabaseRequest {
    return {
      $type: CreateDatabaseRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      resourcePresetId: isSet(object.resourcePresetId) ? globalThis.String(object.resourcePresetId) : "",
      storageConfig: isSet(object.storageConfig) ? StorageConfig.fromJSON(object.storageConfig) : undefined,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      zonalDatabase: isSet(object.zonalDatabase) ? ZonalDatabase.fromJSON(object.zonalDatabase) : undefined,
      regionalDatabase: isSet(object.regionalDatabase) ? RegionalDatabase.fromJSON(object.regionalDatabase) : undefined,
      dedicatedDatabase: isSet(object.dedicatedDatabase)
        ? DedicatedDatabase.fromJSON(object.dedicatedDatabase)
        : undefined,
      serverlessDatabase: isSet(object.serverlessDatabase)
        ? ServerlessDatabase.fromJSON(object.serverlessDatabase)
        : undefined,
      assignPublicIps: isSet(object.assignPublicIps) ? globalThis.Boolean(object.assignPublicIps) : false,
      locationId: isSet(object.locationId) ? globalThis.String(object.locationId) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      backupConfig: isSet(object.backupConfig) ? BackupConfig.fromJSON(object.backupConfig) : undefined,
      monitoringConfig: isSet(object.monitoringConfig) ? MonitoringConfig.fromJSON(object.monitoringConfig) : undefined,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: CreateDatabaseRequest): unknown {
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
    if (message.resourcePresetId !== "") {
      obj.resourcePresetId = message.resourcePresetId;
    }
    if (message.storageConfig !== undefined) {
      obj.storageConfig = StorageConfig.toJSON(message.storageConfig);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.zonalDatabase !== undefined) {
      obj.zonalDatabase = ZonalDatabase.toJSON(message.zonalDatabase);
    }
    if (message.regionalDatabase !== undefined) {
      obj.regionalDatabase = RegionalDatabase.toJSON(message.regionalDatabase);
    }
    if (message.dedicatedDatabase !== undefined) {
      obj.dedicatedDatabase = DedicatedDatabase.toJSON(message.dedicatedDatabase);
    }
    if (message.serverlessDatabase !== undefined) {
      obj.serverlessDatabase = ServerlessDatabase.toJSON(message.serverlessDatabase);
    }
    if (message.assignPublicIps === true) {
      obj.assignPublicIps = message.assignPublicIps;
    }
    if (message.locationId !== "") {
      obj.locationId = message.locationId;
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
    if (message.backupConfig !== undefined) {
      obj.backupConfig = BackupConfig.toJSON(message.backupConfig);
    }
    if (message.monitoringConfig !== undefined) {
      obj.monitoringConfig = MonitoringConfig.toJSON(message.monitoringConfig);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDatabaseRequest>, I>>(base?: I): CreateDatabaseRequest {
    return CreateDatabaseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDatabaseRequest>, I>>(object: I): CreateDatabaseRequest {
    const message = createBaseCreateDatabaseRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.storageConfig = (object.storageConfig !== undefined && object.storageConfig !== null)
      ? StorageConfig.fromPartial(object.storageConfig)
      : undefined;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    message.networkId = object.networkId ?? "";
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.zonalDatabase = (object.zonalDatabase !== undefined && object.zonalDatabase !== null)
      ? ZonalDatabase.fromPartial(object.zonalDatabase)
      : undefined;
    message.regionalDatabase = (object.regionalDatabase !== undefined && object.regionalDatabase !== null)
      ? RegionalDatabase.fromPartial(object.regionalDatabase)
      : undefined;
    message.dedicatedDatabase = (object.dedicatedDatabase !== undefined && object.dedicatedDatabase !== null)
      ? DedicatedDatabase.fromPartial(object.dedicatedDatabase)
      : undefined;
    message.serverlessDatabase = (object.serverlessDatabase !== undefined && object.serverlessDatabase !== null)
      ? ServerlessDatabase.fromPartial(object.serverlessDatabase)
      : undefined;
    message.assignPublicIps = object.assignPublicIps ?? false;
    message.locationId = object.locationId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.backupConfig = (object.backupConfig !== undefined && object.backupConfig !== null)
      ? BackupConfig.fromPartial(object.backupConfig)
      : undefined;
    message.monitoringConfig = (object.monitoringConfig !== undefined && object.monitoringConfig !== null)
      ? MonitoringConfig.fromPartial(object.monitoringConfig)
      : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateDatabaseRequest.$type, CreateDatabaseRequest);

function createBaseCreateDatabaseRequest_LabelsEntry(): CreateDatabaseRequest_LabelsEntry {
  return { $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry", key: "", value: "" };
}

export const CreateDatabaseRequest_LabelsEntry = {
  $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry" as const,

  encode(message: CreateDatabaseRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatabaseRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDatabaseRequest_LabelsEntry();
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

  fromJSON(object: any): CreateDatabaseRequest_LabelsEntry {
    return {
      $type: CreateDatabaseRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateDatabaseRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDatabaseRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateDatabaseRequest_LabelsEntry {
    return CreateDatabaseRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDatabaseRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateDatabaseRequest_LabelsEntry {
    const message = createBaseCreateDatabaseRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDatabaseRequest_LabelsEntry.$type, CreateDatabaseRequest_LabelsEntry);

function createBaseCreateDatabaseMetadata(): CreateDatabaseMetadata {
  return { $type: "yandex.cloud.ydb.v1.CreateDatabaseMetadata", databaseId: "", databaseName: "" };
}

export const CreateDatabaseMetadata = {
  $type: "yandex.cloud.ydb.v1.CreateDatabaseMetadata" as const,

  encode(message: CreateDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDatabaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDatabaseMetadata {
    return {
      $type: CreateDatabaseMetadata.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: CreateDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDatabaseMetadata>, I>>(base?: I): CreateDatabaseMetadata {
    return CreateDatabaseMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDatabaseMetadata>, I>>(object: I): CreateDatabaseMetadata {
    const message = createBaseCreateDatabaseMetadata();
    message.databaseId = object.databaseId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDatabaseMetadata.$type, CreateDatabaseMetadata);

function createBaseUpdateDatabaseRequest(): UpdateDatabaseRequest {
  return {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest",
    folderId: "",
    updateMask: undefined,
    databaseId: "",
    name: "",
    description: "",
    resourcePresetId: "",
    storageConfig: undefined,
    scalePolicy: undefined,
    networkId: "",
    subnetIds: [],
    zonalDatabase: undefined,
    regionalDatabase: undefined,
    dedicatedDatabase: undefined,
    serverlessDatabase: undefined,
    assignPublicIps: false,
    locationId: "",
    labels: {},
    backupConfig: undefined,
    monitoringConfig: undefined,
    deletionProtection: false,
  };
}

export const UpdateDatabaseRequest = {
  $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest" as const,

  encode(message: UpdateDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.databaseId !== "") {
      writer.uint32(26).string(message.databaseId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.resourcePresetId !== "") {
      writer.uint32(50).string(message.resourcePresetId);
    }
    if (message.storageConfig !== undefined) {
      StorageConfig.encode(message.storageConfig, writer.uint32(58).fork()).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(74).string(message.networkId);
    }
    for (const v of message.subnetIds) {
      writer.uint32(82).string(v!);
    }
    if (message.zonalDatabase !== undefined) {
      ZonalDatabase.encode(message.zonalDatabase, writer.uint32(90).fork()).ldelim();
    }
    if (message.regionalDatabase !== undefined) {
      RegionalDatabase.encode(message.regionalDatabase, writer.uint32(98).fork()).ldelim();
    }
    if (message.dedicatedDatabase !== undefined) {
      DedicatedDatabase.encode(message.dedicatedDatabase, writer.uint32(122).fork()).ldelim();
    }
    if (message.serverlessDatabase !== undefined) {
      ServerlessDatabase.encode(message.serverlessDatabase, writer.uint32(130).fork()).ldelim();
    }
    if (message.assignPublicIps === true) {
      writer.uint32(104).bool(message.assignPublicIps);
    }
    if (message.locationId !== "") {
      writer.uint32(114).string(message.locationId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateDatabaseRequest_LabelsEntry.encode({
        $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(138).fork()).ldelim();
    });
    if (message.backupConfig !== undefined) {
      BackupConfig.encode(message.backupConfig, writer.uint32(146).fork()).ldelim();
    }
    if (message.monitoringConfig !== undefined) {
      MonitoringConfig.encode(message.monitoringConfig, writer.uint32(154).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(160).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDatabaseRequest();
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

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.databaseId = reader.string();
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

          message.resourcePresetId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.storageConfig = StorageConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.subnetIds.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.zonalDatabase = ZonalDatabase.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.regionalDatabase = RegionalDatabase.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.dedicatedDatabase = DedicatedDatabase.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.serverlessDatabase = ServerlessDatabase.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.assignPublicIps = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.locationId = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          const entry17 = UpdateDatabaseRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry17.value !== undefined) {
            message.labels[entry17.key] = entry17.value;
          }
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.backupConfig = BackupConfig.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.monitoringConfig = MonitoringConfig.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 160) {
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

  fromJSON(object: any): UpdateDatabaseRequest {
    return {
      $type: UpdateDatabaseRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      resourcePresetId: isSet(object.resourcePresetId) ? globalThis.String(object.resourcePresetId) : "",
      storageConfig: isSet(object.storageConfig) ? StorageConfig.fromJSON(object.storageConfig) : undefined,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      subnetIds: globalThis.Array.isArray(object?.subnetIds)
        ? object.subnetIds.map((e: any) => globalThis.String(e))
        : [],
      zonalDatabase: isSet(object.zonalDatabase) ? ZonalDatabase.fromJSON(object.zonalDatabase) : undefined,
      regionalDatabase: isSet(object.regionalDatabase) ? RegionalDatabase.fromJSON(object.regionalDatabase) : undefined,
      dedicatedDatabase: isSet(object.dedicatedDatabase)
        ? DedicatedDatabase.fromJSON(object.dedicatedDatabase)
        : undefined,
      serverlessDatabase: isSet(object.serverlessDatabase)
        ? ServerlessDatabase.fromJSON(object.serverlessDatabase)
        : undefined,
      assignPublicIps: isSet(object.assignPublicIps) ? globalThis.Boolean(object.assignPublicIps) : false,
      locationId: isSet(object.locationId) ? globalThis.String(object.locationId) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      backupConfig: isSet(object.backupConfig) ? BackupConfig.fromJSON(object.backupConfig) : undefined,
      monitoringConfig: isSet(object.monitoringConfig) ? MonitoringConfig.fromJSON(object.monitoringConfig) : undefined,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: UpdateDatabaseRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.resourcePresetId !== "") {
      obj.resourcePresetId = message.resourcePresetId;
    }
    if (message.storageConfig !== undefined) {
      obj.storageConfig = StorageConfig.toJSON(message.storageConfig);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.subnetIds?.length) {
      obj.subnetIds = message.subnetIds;
    }
    if (message.zonalDatabase !== undefined) {
      obj.zonalDatabase = ZonalDatabase.toJSON(message.zonalDatabase);
    }
    if (message.regionalDatabase !== undefined) {
      obj.regionalDatabase = RegionalDatabase.toJSON(message.regionalDatabase);
    }
    if (message.dedicatedDatabase !== undefined) {
      obj.dedicatedDatabase = DedicatedDatabase.toJSON(message.dedicatedDatabase);
    }
    if (message.serverlessDatabase !== undefined) {
      obj.serverlessDatabase = ServerlessDatabase.toJSON(message.serverlessDatabase);
    }
    if (message.assignPublicIps === true) {
      obj.assignPublicIps = message.assignPublicIps;
    }
    if (message.locationId !== "") {
      obj.locationId = message.locationId;
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
    if (message.backupConfig !== undefined) {
      obj.backupConfig = BackupConfig.toJSON(message.backupConfig);
    }
    if (message.monitoringConfig !== undefined) {
      obj.monitoringConfig = MonitoringConfig.toJSON(message.monitoringConfig);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDatabaseRequest>, I>>(base?: I): UpdateDatabaseRequest {
    return UpdateDatabaseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDatabaseRequest>, I>>(object: I): UpdateDatabaseRequest {
    const message = createBaseUpdateDatabaseRequest();
    message.folderId = object.folderId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.databaseId = object.databaseId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.storageConfig = (object.storageConfig !== undefined && object.storageConfig !== null)
      ? StorageConfig.fromPartial(object.storageConfig)
      : undefined;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    message.networkId = object.networkId ?? "";
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.zonalDatabase = (object.zonalDatabase !== undefined && object.zonalDatabase !== null)
      ? ZonalDatabase.fromPartial(object.zonalDatabase)
      : undefined;
    message.regionalDatabase = (object.regionalDatabase !== undefined && object.regionalDatabase !== null)
      ? RegionalDatabase.fromPartial(object.regionalDatabase)
      : undefined;
    message.dedicatedDatabase = (object.dedicatedDatabase !== undefined && object.dedicatedDatabase !== null)
      ? DedicatedDatabase.fromPartial(object.dedicatedDatabase)
      : undefined;
    message.serverlessDatabase = (object.serverlessDatabase !== undefined && object.serverlessDatabase !== null)
      ? ServerlessDatabase.fromPartial(object.serverlessDatabase)
      : undefined;
    message.assignPublicIps = object.assignPublicIps ?? false;
    message.locationId = object.locationId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.backupConfig = (object.backupConfig !== undefined && object.backupConfig !== null)
      ? BackupConfig.fromPartial(object.backupConfig)
      : undefined;
    message.monitoringConfig = (object.monitoringConfig !== undefined && object.monitoringConfig !== null)
      ? MonitoringConfig.fromPartial(object.monitoringConfig)
      : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateDatabaseRequest.$type, UpdateDatabaseRequest);

function createBaseUpdateDatabaseRequest_LabelsEntry(): UpdateDatabaseRequest_LabelsEntry {
  return { $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateDatabaseRequest_LabelsEntry = {
  $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry" as const,

  encode(message: UpdateDatabaseRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDatabaseRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDatabaseRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateDatabaseRequest_LabelsEntry {
    return {
      $type: UpdateDatabaseRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateDatabaseRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDatabaseRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateDatabaseRequest_LabelsEntry {
    return UpdateDatabaseRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDatabaseRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateDatabaseRequest_LabelsEntry {
    const message = createBaseUpdateDatabaseRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDatabaseRequest_LabelsEntry.$type, UpdateDatabaseRequest_LabelsEntry);

function createBaseUpdateDatabaseMetadata(): UpdateDatabaseMetadata {
  return { $type: "yandex.cloud.ydb.v1.UpdateDatabaseMetadata", databaseId: "", databaseName: "" };
}

export const UpdateDatabaseMetadata = {
  $type: "yandex.cloud.ydb.v1.UpdateDatabaseMetadata" as const,

  encode(message: UpdateDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDatabaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDatabaseMetadata {
    return {
      $type: UpdateDatabaseMetadata.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: UpdateDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDatabaseMetadata>, I>>(base?: I): UpdateDatabaseMetadata {
    return UpdateDatabaseMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDatabaseMetadata>, I>>(object: I): UpdateDatabaseMetadata {
    const message = createBaseUpdateDatabaseMetadata();
    message.databaseId = object.databaseId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDatabaseMetadata.$type, UpdateDatabaseMetadata);

function createBaseDeleteDatabaseRequest(): DeleteDatabaseRequest {
  return { $type: "yandex.cloud.ydb.v1.DeleteDatabaseRequest", databaseId: "" };
}

export const DeleteDatabaseRequest = {
  $type: "yandex.cloud.ydb.v1.DeleteDatabaseRequest" as const,

  encode(message: DeleteDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDatabaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDatabaseRequest {
    return {
      $type: DeleteDatabaseRequest.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
    };
  },

  toJSON(message: DeleteDatabaseRequest): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDatabaseRequest>, I>>(base?: I): DeleteDatabaseRequest {
    return DeleteDatabaseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDatabaseRequest>, I>>(object: I): DeleteDatabaseRequest {
    const message = createBaseDeleteDatabaseRequest();
    message.databaseId = object.databaseId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDatabaseRequest.$type, DeleteDatabaseRequest);

function createBaseDeleteDatabaseMetadata(): DeleteDatabaseMetadata {
  return { $type: "yandex.cloud.ydb.v1.DeleteDatabaseMetadata", databaseId: "", databaseName: "" };
}

export const DeleteDatabaseMetadata = {
  $type: "yandex.cloud.ydb.v1.DeleteDatabaseMetadata" as const,

  encode(message: DeleteDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseId !== "") {
      writer.uint32(10).string(message.databaseId);
    }
    if (message.databaseName !== "") {
      writer.uint32(18).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDatabaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDatabaseMetadata {
    return {
      $type: DeleteDatabaseMetadata.$type,
      databaseId: isSet(object.databaseId) ? globalThis.String(object.databaseId) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: DeleteDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.databaseId !== "") {
      obj.databaseId = message.databaseId;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDatabaseMetadata>, I>>(base?: I): DeleteDatabaseMetadata {
    return DeleteDatabaseMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteDatabaseMetadata>, I>>(object: I): DeleteDatabaseMetadata {
    const message = createBaseDeleteDatabaseMetadata();
    message.databaseId = object.databaseId ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDatabaseMetadata.$type, DeleteDatabaseMetadata);

/** A set of methods for managing databases. */
export type DatabaseServiceService = typeof DatabaseServiceService;
export const DatabaseServiceService = {
  /** Returns the specified database. */
  get: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDatabaseRequest) => Buffer.from(GetDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDatabaseRequest.decode(value),
    responseSerialize: (value: Database) => Buffer.from(Database.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Database.decode(value),
  },
  /** Retrieves a list of databases. */
  list: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDatabasesRequest) => Buffer.from(ListDatabasesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDatabasesRequest.decode(value),
    responseSerialize: (value: ListDatabasesResponse) => Buffer.from(ListDatabasesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDatabasesResponse.decode(value),
  },
  /** Creates a new database. */
  create: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDatabaseRequest) => Buffer.from(CreateDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Modifies the specified database. */
  update: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDatabaseRequest) => Buffer.from(UpdateDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified database. */
  start: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartDatabaseRequest) => Buffer.from(StartDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified database. */
  stop: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopDatabaseRequest) => Buffer.from(StopDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  move: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveDatabaseRequest) => Buffer.from(MoveDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  listAccessBindings: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  setAccessBindings: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  updateAccessBindings: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified database. */
  delete: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDatabaseRequest) => Buffer.from(DeleteDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Restores the specified backup */
  restore: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreBackupRequest) => Buffer.from(RestoreBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreBackupRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  backup: {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Backup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BackupDatabaseRequest) => Buffer.from(BackupDatabaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BackupDatabaseRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface DatabaseServiceServer extends UntypedServiceImplementation {
  /** Returns the specified database. */
  get: handleUnaryCall<GetDatabaseRequest, Database>;
  /** Retrieves a list of databases. */
  list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
  /** Creates a new database. */
  create: handleUnaryCall<CreateDatabaseRequest, Operation>;
  /** Modifies the specified database. */
  update: handleUnaryCall<UpdateDatabaseRequest, Operation>;
  /** Starts the specified database. */
  start: handleUnaryCall<StartDatabaseRequest, Operation>;
  /** Stops the specified database. */
  stop: handleUnaryCall<StopDatabaseRequest, Operation>;
  move: handleUnaryCall<MoveDatabaseRequest, Operation>;
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /** Deletes the specified database. */
  delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
  /** Restores the specified backup */
  restore: handleUnaryCall<RestoreBackupRequest, Operation>;
  backup: handleUnaryCall<BackupDatabaseRequest, Operation>;
}

export interface DatabaseServiceClient extends Client {
  /** Returns the specified database. */
  get(request: GetDatabaseRequest, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
  get(
    request: GetDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Database) => void,
  ): ClientUnaryCall;
  get(
    request: GetDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Database) => void,
  ): ClientUnaryCall;
  /** Retrieves a list of databases. */
  list(
    request: ListDatabasesRequest,
    callback: (error: ServiceError | null, response: ListDatabasesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDatabasesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDatabasesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDatabasesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDatabasesResponse) => void,
  ): ClientUnaryCall;
  /** Creates a new database. */
  create(
    request: CreateDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Modifies the specified database. */
  update(
    request: UpdateDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Starts the specified database. */
  start(
    request: StartDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  start(
    request: StartDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Stops the specified database. */
  stop(
    request: StopDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  stop(
    request: StopDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  move(
    request: MoveDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
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
  /** Deletes the specified database. */
  delete(
    request: DeleteDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Restores the specified backup */
  restore(
    request: RestoreBackupRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  restore(
    request: RestoreBackupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  restore(
    request: RestoreBackupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  backup(
    request: BackupDatabaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  backup(
    request: BackupDatabaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  backup(
    request: BackupDatabaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const DatabaseServiceClient = makeGenericClientConstructor(
  DatabaseServiceService,
  "yandex.cloud.ydb.v1.DatabaseService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DatabaseServiceClient;
  service: typeof DatabaseServiceService;
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
