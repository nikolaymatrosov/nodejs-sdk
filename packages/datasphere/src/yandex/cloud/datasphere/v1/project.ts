/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datasphere.v1";

/** A Project resource. */
export interface Project {
  $type: "yandex.cloud.datasphere.v1.Project";
  /** ID of the project. */
  id: string;
  /** ID of the folder that the project belongs to. */
  folderId: string;
  createdAt?:
    | Date
    | undefined;
  /** Name of the project. 1-63 characters long. */
  name: string;
  /** Description of the project. 0-256 characters long. */
  description: string;
  /** Settings of the project. */
  settings?:
    | Project_Settings
    | undefined;
  /** Limits of the project. */
  limits?: Project_Limits | undefined;
}

export interface Project_Settings {
  $type: "yandex.cloud.datasphere.v1.Project.Settings";
  /** ID of the service account, on whose behalf all operations with clusters will be performed. */
  serviceAccountId: string;
  /**
   * ID of the subnet where the DataProc cluster resides.
   * Currently only subnets created in the availability zone ru-central1-a are supported.
   */
  subnetId: string;
  /** ID of the DataProc cluster. */
  dataProcClusterId: string;
  /** Commit mode that is assigned to the project. */
  commitMode: Project_Settings_CommitMode;
  /** Network interfaces security groups. */
  securityGroupIds: string[];
}

export enum Project_Settings_CommitMode {
  COMMIT_MODE_UNSPECIFIED = 0,
  /** STANDARD - Commit happens after the execution of a cell or group of cells or after completion with an error. */
  STANDARD = 1,
  /**
   * AUTO - Commit happens periodically.
   * Also, automatic saving of state occurs when switching to another type of computing resource.
   */
  AUTO = 2,
  UNRECOGNIZED = -1,
}

export function project_Settings_CommitModeFromJSON(object: any): Project_Settings_CommitMode {
  switch (object) {
    case 0:
    case "COMMIT_MODE_UNSPECIFIED":
      return Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED;
    case 1:
    case "STANDARD":
      return Project_Settings_CommitMode.STANDARD;
    case 2:
    case "AUTO":
      return Project_Settings_CommitMode.AUTO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Project_Settings_CommitMode.UNRECOGNIZED;
  }
}

export function project_Settings_CommitModeToJSON(object: Project_Settings_CommitMode): string {
  switch (object) {
    case Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED:
      return "COMMIT_MODE_UNSPECIFIED";
    case Project_Settings_CommitMode.STANDARD:
      return "STANDARD";
    case Project_Settings_CommitMode.AUTO:
      return "AUTO";
    case Project_Settings_CommitMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Project_Limits {
  $type: "yandex.cloud.datasphere.v1.Project.Limits";
  /** The number of units that can be spent per hour. */
  maxUnitsPerHour?:
    | number
    | undefined;
  /** The number of units that can be spent on the one execution. */
  maxUnitsPerExecution?: number | undefined;
}

function createBaseProject(): Project {
  return {
    $type: "yandex.cloud.datasphere.v1.Project",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    settings: undefined,
    limits: undefined,
  };
}

export const Project = {
  $type: "yandex.cloud.datasphere.v1.Project" as const,

  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.settings !== undefined) {
      Project_Settings.encode(message.settings, writer.uint32(50).fork()).ldelim();
    }
    if (message.limits !== undefined) {
      Project_Limits.encode(message.limits, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
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

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

          message.settings = Project_Settings.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.limits = Project_Limits.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      $type: Project.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      settings: isSet(object.settings) ? Project_Settings.fromJSON(object.settings) : undefined,
      limits: isSet(object.limits) ? Project_Limits.fromJSON(object.limits) : undefined,
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.settings !== undefined) {
      obj.settings = Project_Settings.toJSON(message.settings);
    }
    if (message.limits !== undefined) {
      obj.limits = Project_Limits.toJSON(message.limits);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Project>, I>>(base?: I): Project {
    return Project.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
    const message = createBaseProject();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? Project_Settings.fromPartial(object.settings)
      : undefined;
    message.limits = (object.limits !== undefined && object.limits !== null)
      ? Project_Limits.fromPartial(object.limits)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Project.$type, Project);

function createBaseProject_Settings(): Project_Settings {
  return {
    $type: "yandex.cloud.datasphere.v1.Project.Settings",
    serviceAccountId: "",
    subnetId: "",
    dataProcClusterId: "",
    commitMode: 0,
    securityGroupIds: [],
  };
}

export const Project_Settings = {
  $type: "yandex.cloud.datasphere.v1.Project.Settings" as const,

  encode(message: Project_Settings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    if (message.dataProcClusterId !== "") {
      writer.uint32(26).string(message.dataProcClusterId);
    }
    if (message.commitMode !== 0) {
      writer.uint32(32).int32(message.commitMode);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project_Settings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject_Settings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountId = reader.string();
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

          message.dataProcClusterId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.commitMode = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): Project_Settings {
    return {
      $type: Project_Settings.$type,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      dataProcClusterId: isSet(object.dataProcClusterId) ? globalThis.String(object.dataProcClusterId) : "",
      commitMode: isSet(object.commitMode) ? project_Settings_CommitModeFromJSON(object.commitMode) : 0,
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Project_Settings): unknown {
    const obj: any = {};
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.dataProcClusterId !== "") {
      obj.dataProcClusterId = message.dataProcClusterId;
    }
    if (message.commitMode !== 0) {
      obj.commitMode = project_Settings_CommitModeToJSON(message.commitMode);
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Project_Settings>, I>>(base?: I): Project_Settings {
    return Project_Settings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Project_Settings>, I>>(object: I): Project_Settings {
    const message = createBaseProject_Settings();
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.dataProcClusterId = object.dataProcClusterId ?? "";
    message.commitMode = object.commitMode ?? 0;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Project_Settings.$type, Project_Settings);

function createBaseProject_Limits(): Project_Limits {
  return {
    $type: "yandex.cloud.datasphere.v1.Project.Limits",
    maxUnitsPerHour: undefined,
    maxUnitsPerExecution: undefined,
  };
}

export const Project_Limits = {
  $type: "yandex.cloud.datasphere.v1.Project.Limits" as const,

  encode(message: Project_Limits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxUnitsPerHour !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxUnitsPerHour! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.maxUnitsPerExecution !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxUnitsPerExecution! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project_Limits {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject_Limits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxUnitsPerHour = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxUnitsPerExecution = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Project_Limits {
    return {
      $type: Project_Limits.$type,
      maxUnitsPerHour: isSet(object.maxUnitsPerHour) ? Number(object.maxUnitsPerHour) : undefined,
      maxUnitsPerExecution: isSet(object.maxUnitsPerExecution) ? Number(object.maxUnitsPerExecution) : undefined,
    };
  },

  toJSON(message: Project_Limits): unknown {
    const obj: any = {};
    if (message.maxUnitsPerHour !== undefined) {
      obj.maxUnitsPerHour = message.maxUnitsPerHour;
    }
    if (message.maxUnitsPerExecution !== undefined) {
      obj.maxUnitsPerExecution = message.maxUnitsPerExecution;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Project_Limits>, I>>(base?: I): Project_Limits {
    return Project_Limits.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Project_Limits>, I>>(object: I): Project_Limits {
    const message = createBaseProject_Limits();
    message.maxUnitsPerHour = object.maxUnitsPerHour ?? undefined;
    message.maxUnitsPerExecution = object.maxUnitsPerExecution ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Project_Limits.$type, Project_Limits);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
