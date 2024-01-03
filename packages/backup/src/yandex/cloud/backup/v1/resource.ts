/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.backup.v1";

export interface Resource {
  $type: "yandex.cloud.backup.v1.Resource";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  createdAt?: Date | undefined;
  updatedAt?:
    | Date
    | undefined;
  /** If this field is true, it means that instance is online. */
  online: boolean;
  /** If this field is true, it means that backup is enabled to instance. */
  enabled: boolean;
  status: Resource_Status;
  /**
   * If status value is one of `OTHER` or `FAILED`,
   * detailed info might be stored here.
   */
  statusDetails: string;
  /**
   * In case status is one of `BACKUPING` or `RECOVERING`,
   * progress value might be found here.
   */
  statusProgress: number;
  lastBackupTime?: Date | undefined;
  nextBackupTime?:
    | Date
    | undefined;
  /** Resource ID is used to identify Compute Cloud instance in backup service. */
  resourceId: string;
  /**
   * Status `is_active` shows whether current Compute Cloud instance controls Cloud Backup resource.
   * If status `is_active` is false it means Compute Cloud instance is not able to manipulate
   * Cloud Backup resource.
   */
  isActive: boolean;
}

export enum Resource_Status {
  STATUS_UNSPECIFIED = 0,
  /** IDLE - Compute Cloud instance is doing nothing right now. */
  IDLE = 1,
  /** BACKUPING - Compute Cloud instance is currently backing up itself. */
  BACKUPING = 2,
  /** RECOVERING - Compute Cloud instance is currently recovering itself. */
  RECOVERING = 3,
  /**
   * FAILED - Compute Cloud instance is in failure state, check content of
   * `status_details` field for more information.
   */
  FAILED = 4,
  /**
   * OTHER - Unspecified state, check `status_details` field
   * for more information.
   */
  OTHER = 5,
  UNRECOGNIZED = -1,
}

export function resource_StatusFromJSON(object: any): Resource_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Resource_Status.STATUS_UNSPECIFIED;
    case 1:
    case "IDLE":
      return Resource_Status.IDLE;
    case 2:
    case "BACKUPING":
      return Resource_Status.BACKUPING;
    case 3:
    case "RECOVERING":
      return Resource_Status.RECOVERING;
    case 4:
    case "FAILED":
      return Resource_Status.FAILED;
    case 5:
    case "OTHER":
      return Resource_Status.OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Resource_Status.UNRECOGNIZED;
  }
}

export function resource_StatusToJSON(object: Resource_Status): string {
  switch (object) {
    case Resource_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Resource_Status.IDLE:
      return "IDLE";
    case Resource_Status.BACKUPING:
      return "BACKUPING";
    case Resource_Status.RECOVERING:
      return "RECOVERING";
    case Resource_Status.FAILED:
      return "FAILED";
    case Resource_Status.OTHER:
      return "OTHER";
    case Resource_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Progress {
  $type: "yandex.cloud.backup.v1.Progress";
  current: number;
  total: number;
}

export interface Task {
  $type: "yandex.cloud.backup.v1.Task";
  /** Task ID. */
  id: number;
  /**
   * Shows whether the task is cancellable.
   * Note: task cancellation is not supported yet.
   */
  cancellable: boolean;
  /** Policy ID. */
  policyId: string;
  /** Type of the task. */
  type: Task_Type;
  /** Task progress. */
  progress?:
    | Progress
    | undefined;
  /** Task status. */
  status: Task_Status;
  enqueuedAt?: Date | undefined;
  startedAt?: Date | undefined;
  updatedAt?: Date | undefined;
  completedAt?:
    | Date
    | undefined;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export enum Task_Type {
  TYPE_UNSPECIFIED = 0,
  BACKUP = 1,
  RETENTION = 2,
  RECOVERY = 3,
  UNRECOGNIZED = -1,
}

export function task_TypeFromJSON(object: any): Task_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Task_Type.TYPE_UNSPECIFIED;
    case 1:
    case "BACKUP":
      return Task_Type.BACKUP;
    case 2:
    case "RETENTION":
      return Task_Type.RETENTION;
    case 3:
    case "RECOVERY":
      return Task_Type.RECOVERY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Task_Type.UNRECOGNIZED;
  }
}

export function task_TypeToJSON(object: Task_Type): string {
  switch (object) {
    case Task_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Task_Type.BACKUP:
      return "BACKUP";
    case Task_Type.RETENTION:
      return "RETENTION";
    case Task_Type.RECOVERY:
      return "RECOVERY";
    case Task_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Status of task. */
export enum Task_Status {
  STATUS_UNSPECIFIED = 0,
  ENQUEUED = 1,
  ASSIGNED = 2,
  STARTED = 3,
  PAUSED = 4,
  COMPLETED = 5,
  UNRECOGNIZED = -1,
}

export function task_StatusFromJSON(object: any): Task_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Task_Status.STATUS_UNSPECIFIED;
    case 1:
    case "ENQUEUED":
      return Task_Status.ENQUEUED;
    case 2:
    case "ASSIGNED":
      return Task_Status.ASSIGNED;
    case 3:
    case "STARTED":
      return Task_Status.STARTED;
    case 4:
    case "PAUSED":
      return Task_Status.PAUSED;
    case 5:
    case "COMPLETED":
      return Task_Status.COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Task_Status.UNRECOGNIZED;
  }
}

export function task_StatusToJSON(object: Task_Status): string {
  switch (object) {
    case Task_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Task_Status.ENQUEUED:
      return "ENQUEUED";
    case Task_Status.ASSIGNED:
      return "ASSIGNED";
    case Task_Status.STARTED:
      return "STARTED";
    case Task_Status.PAUSED:
      return "PAUSED";
    case Task_Status.COMPLETED:
      return "COMPLETED";
    case Task_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseResource(): Resource {
  return {
    $type: "yandex.cloud.backup.v1.Resource",
    computeInstanceId: "",
    createdAt: undefined,
    updatedAt: undefined,
    online: false,
    enabled: false,
    status: 0,
    statusDetails: "",
    statusProgress: 0,
    lastBackupTime: undefined,
    nextBackupTime: undefined,
    resourceId: "",
    isActive: false,
  };
}

export const Resource = {
  $type: "yandex.cloud.backup.v1.Resource" as const,

  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.online === true) {
      writer.uint32(32).bool(message.online);
    }
    if (message.enabled === true) {
      writer.uint32(40).bool(message.enabled);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.statusDetails !== "") {
      writer.uint32(58).string(message.statusDetails);
    }
    if (message.statusProgress !== 0) {
      writer.uint32(64).int64(message.statusProgress);
    }
    if (message.lastBackupTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBackupTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.nextBackupTime !== undefined) {
      Timestamp.encode(toTimestamp(message.nextBackupTime), writer.uint32(82).fork()).ldelim();
    }
    if (message.resourceId !== "") {
      writer.uint32(90).string(message.resourceId);
    }
    if (message.isActive === true) {
      writer.uint32(96).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.online = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.statusDetails = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.statusProgress = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.lastBackupTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.nextBackupTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.isActive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      $type: Resource.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      online: isSet(object.online) ? globalThis.Boolean(object.online) : false,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      status: isSet(object.status) ? resource_StatusFromJSON(object.status) : 0,
      statusDetails: isSet(object.statusDetails) ? globalThis.String(object.statusDetails) : "",
      statusProgress: isSet(object.statusProgress) ? globalThis.Number(object.statusProgress) : 0,
      lastBackupTime: isSet(object.lastBackupTime) ? fromJsonTimestamp(object.lastBackupTime) : undefined,
      nextBackupTime: isSet(object.nextBackupTime) ? fromJsonTimestamp(object.nextBackupTime) : undefined,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      isActive: isSet(object.isActive) ? globalThis.Boolean(object.isActive) : false,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.online === true) {
      obj.online = message.online;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.status !== 0) {
      obj.status = resource_StatusToJSON(message.status);
    }
    if (message.statusDetails !== "") {
      obj.statusDetails = message.statusDetails;
    }
    if (message.statusProgress !== 0) {
      obj.statusProgress = Math.round(message.statusProgress);
    }
    if (message.lastBackupTime !== undefined) {
      obj.lastBackupTime = message.lastBackupTime.toISOString();
    }
    if (message.nextBackupTime !== undefined) {
      obj.nextBackupTime = message.nextBackupTime.toISOString();
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.isActive === true) {
      obj.isActive = message.isActive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resource>, I>>(base?: I): Resource {
    return Resource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.online = object.online ?? false;
    message.enabled = object.enabled ?? false;
    message.status = object.status ?? 0;
    message.statusDetails = object.statusDetails ?? "";
    message.statusProgress = object.statusProgress ?? 0;
    message.lastBackupTime = object.lastBackupTime ?? undefined;
    message.nextBackupTime = object.nextBackupTime ?? undefined;
    message.resourceId = object.resourceId ?? "";
    message.isActive = object.isActive ?? false;
    return message;
  },
};

messageTypeRegistry.set(Resource.$type, Resource);

function createBaseProgress(): Progress {
  return { $type: "yandex.cloud.backup.v1.Progress", current: 0, total: 0 };
}

export const Progress = {
  $type: "yandex.cloud.backup.v1.Progress" as const,

  encode(message: Progress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.current !== 0) {
      writer.uint32(8).int64(message.current);
    }
    if (message.total !== 0) {
      writer.uint32(16).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Progress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.current = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Progress {
    return {
      $type: Progress.$type,
      current: isSet(object.current) ? globalThis.Number(object.current) : 0,
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: Progress): unknown {
    const obj: any = {};
    if (message.current !== 0) {
      obj.current = Math.round(message.current);
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Progress>, I>>(base?: I): Progress {
    return Progress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Progress>, I>>(object: I): Progress {
    const message = createBaseProgress();
    message.current = object.current ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Progress.$type, Progress);

function createBaseTask(): Task {
  return {
    $type: "yandex.cloud.backup.v1.Task",
    id: 0,
    cancellable: false,
    policyId: "",
    type: 0,
    progress: undefined,
    status: 0,
    enqueuedAt: undefined,
    startedAt: undefined,
    updatedAt: undefined,
    completedAt: undefined,
    computeInstanceId: "",
  };
}

export const Task = {
  $type: "yandex.cloud.backup.v1.Task" as const,

  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.cancellable === true) {
      writer.uint32(16).bool(message.cancellable);
    }
    if (message.policyId !== "") {
      writer.uint32(26).string(message.policyId);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.progress !== undefined) {
      Progress.encode(message.progress, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.enqueuedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.enqueuedAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.completedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.completedAt), writer.uint32(82).fork()).ldelim();
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(90).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.cancellable = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.policyId = reader.string();
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

          message.progress = Progress.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.enqueuedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.completedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
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

  fromJSON(object: any): Task {
    return {
      $type: Task.$type,
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      cancellable: isSet(object.cancellable) ? globalThis.Boolean(object.cancellable) : false,
      policyId: isSet(object.policyId) ? globalThis.String(object.policyId) : "",
      type: isSet(object.type) ? task_TypeFromJSON(object.type) : 0,
      progress: isSet(object.progress) ? Progress.fromJSON(object.progress) : undefined,
      status: isSet(object.status) ? task_StatusFromJSON(object.status) : 0,
      enqueuedAt: isSet(object.enqueuedAt) ? fromJsonTimestamp(object.enqueuedAt) : undefined,
      startedAt: isSet(object.startedAt) ? fromJsonTimestamp(object.startedAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      completedAt: isSet(object.completedAt) ? fromJsonTimestamp(object.completedAt) : undefined,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
    };
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.cancellable === true) {
      obj.cancellable = message.cancellable;
    }
    if (message.policyId !== "") {
      obj.policyId = message.policyId;
    }
    if (message.type !== 0) {
      obj.type = task_TypeToJSON(message.type);
    }
    if (message.progress !== undefined) {
      obj.progress = Progress.toJSON(message.progress);
    }
    if (message.status !== 0) {
      obj.status = task_StatusToJSON(message.status);
    }
    if (message.enqueuedAt !== undefined) {
      obj.enqueuedAt = message.enqueuedAt.toISOString();
    }
    if (message.startedAt !== undefined) {
      obj.startedAt = message.startedAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.completedAt !== undefined) {
      obj.completedAt = message.completedAt.toISOString();
    }
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Task>, I>>(base?: I): Task {
    return Task.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Task>, I>>(object: I): Task {
    const message = createBaseTask();
    message.id = object.id ?? 0;
    message.cancellable = object.cancellable ?? false;
    message.policyId = object.policyId ?? "";
    message.type = object.type ?? 0;
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? Progress.fromPartial(object.progress)
      : undefined;
    message.status = object.status ?? 0;
    message.enqueuedAt = object.enqueuedAt ?? undefined;
    message.startedAt = object.startedAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.completedAt = object.completedAt ?? undefined;
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Task.$type, Task);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
