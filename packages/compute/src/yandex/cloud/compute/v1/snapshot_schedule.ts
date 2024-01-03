/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

/** A snapshot schedule. For details about the concept, see [documentation](/docs/compute/concepts/snapshot-schedule). */
export interface SnapshotSchedule {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule";
  /** ID of the snapshot schedule. */
  id: string;
  /** ID of the folder that the snapshot schedule belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the snapshot schedule.
   *
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the snapshot schedule. */
  description: string;
  /** Snapshot schedule labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Status of the snapshot schedule. */
  status: SnapshotSchedule_Status;
  /** Frequency settings of the snapshot schedule. */
  schedulePolicy?:
    | SchedulePolicy
    | undefined;
  /**
   * Retention period of the snapshot schedule. Once a snapshot created by the schedule reaches this age, it is
   * automatically deleted.
   */
  retentionPeriod?:
    | Duration
    | undefined;
  /**
   * Retention count of the snapshot schedule. Once the number of snapshots created by the schedule exceeds this
   * number, the oldest ones are automatically deleted. E.g. if the number is 5, the first snapshot is deleted
   * after the sixth one is created, the second is deleted after the seventh one is created, and so on.
   */
  snapshotCount?:
    | number
    | undefined;
  /** Attributes of snapshots created by the snapshot schedule. */
  snapshotSpec?: SnapshotSpec | undefined;
}

export enum SnapshotSchedule_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - The snapshot schedule is being created. */
  CREATING = 1,
  /**
   * ACTIVE - The snapshot schedule is on: new disk snapshots will be created, old ones deleted
   * (if [SnapshotSchedule.retention_policy] is specified).
   */
  ACTIVE = 2,
  /** INACTIVE - The schedule is interrupted, snapshots won't be created or deleted. */
  INACTIVE = 3,
  /** DELETING - The schedule is being deleted. */
  DELETING = 4,
  /** UPDATING - Changes are being made to snapshot schedule settings or a list of attached disks. */
  UPDATING = 5,
  UNRECOGNIZED = -1,
}

export function snapshotSchedule_StatusFromJSON(object: any): SnapshotSchedule_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return SnapshotSchedule_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return SnapshotSchedule_Status.CREATING;
    case 2:
    case "ACTIVE":
      return SnapshotSchedule_Status.ACTIVE;
    case 3:
    case "INACTIVE":
      return SnapshotSchedule_Status.INACTIVE;
    case 4:
    case "DELETING":
      return SnapshotSchedule_Status.DELETING;
    case 5:
    case "UPDATING":
      return SnapshotSchedule_Status.UPDATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SnapshotSchedule_Status.UNRECOGNIZED;
  }
}

export function snapshotSchedule_StatusToJSON(object: SnapshotSchedule_Status): string {
  switch (object) {
    case SnapshotSchedule_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case SnapshotSchedule_Status.CREATING:
      return "CREATING";
    case SnapshotSchedule_Status.ACTIVE:
      return "ACTIVE";
    case SnapshotSchedule_Status.INACTIVE:
      return "INACTIVE";
    case SnapshotSchedule_Status.DELETING:
      return "DELETING";
    case SnapshotSchedule_Status.UPDATING:
      return "UPDATING";
    case SnapshotSchedule_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SnapshotSchedule_LabelsEntry {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry";
  key: string;
  value: string;
}

/** A resource for frequency settings of a snapshot schedule. */
export interface SchedulePolicy {
  $type: "yandex.cloud.compute.v1.SchedulePolicy";
  /** Timestamp for creating the first snapshot. */
  startAt?:
    | Date
    | undefined;
  /**
   * Cron expression for the snapshot schedule (UTC+0).
   *
   * The expression must consist of five fields (`Minutes Hours Day-of-month Month Day-of-week`) or be one of
   * nonstandard predefined expressions (e.g. `@hourly`). For details about the format,
   * see [documentation](/docs/compute/concepts/snapshot-schedule#cron)
   */
  expression: string;
}

/** A resource for attributes of snapshots created by the snapshot schedule. */
export interface SnapshotSpec {
  $type: "yandex.cloud.compute.v1.SnapshotSpec";
  /** Description of the created snapshot. */
  description: string;
  /** Snapshot labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface SnapshotSpec_LabelsEntry {
  $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry";
  key: string;
  value: string;
}

function createBaseSnapshotSchedule(): SnapshotSchedule {
  return {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
    schedulePolicy: undefined,
    retentionPeriod: undefined,
    snapshotCount: undefined,
    snapshotSpec: undefined,
  };
}

export const SnapshotSchedule = {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule" as const,

  encode(message: SnapshotSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    Object.entries(message.labels).forEach(([key, value]) => {
      SnapshotSchedule_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.schedulePolicy !== undefined) {
      SchedulePolicy.encode(message.schedulePolicy, writer.uint32(66).fork()).ldelim();
    }
    if (message.retentionPeriod !== undefined) {
      Duration.encode(message.retentionPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.snapshotCount !== undefined) {
      writer.uint32(80).int64(message.snapshotCount);
    }
    if (message.snapshotSpec !== undefined) {
      SnapshotSpec.encode(message.snapshotSpec, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSchedule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotSchedule();
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

          const entry6 = SnapshotSchedule_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.schedulePolicy = SchedulePolicy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.retentionPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.snapshotCount = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.snapshotSpec = SnapshotSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SnapshotSchedule {
    return {
      $type: SnapshotSchedule.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      status: isSet(object.status) ? snapshotSchedule_StatusFromJSON(object.status) : 0,
      schedulePolicy: isSet(object.schedulePolicy) ? SchedulePolicy.fromJSON(object.schedulePolicy) : undefined,
      retentionPeriod: isSet(object.retentionPeriod) ? Duration.fromJSON(object.retentionPeriod) : undefined,
      snapshotCount: isSet(object.snapshotCount) ? globalThis.Number(object.snapshotCount) : undefined,
      snapshotSpec: isSet(object.snapshotSpec) ? SnapshotSpec.fromJSON(object.snapshotSpec) : undefined,
    };
  },

  toJSON(message: SnapshotSchedule): unknown {
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
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.status !== 0) {
      obj.status = snapshotSchedule_StatusToJSON(message.status);
    }
    if (message.schedulePolicy !== undefined) {
      obj.schedulePolicy = SchedulePolicy.toJSON(message.schedulePolicy);
    }
    if (message.retentionPeriod !== undefined) {
      obj.retentionPeriod = Duration.toJSON(message.retentionPeriod);
    }
    if (message.snapshotCount !== undefined) {
      obj.snapshotCount = Math.round(message.snapshotCount);
    }
    if (message.snapshotSpec !== undefined) {
      obj.snapshotSpec = SnapshotSpec.toJSON(message.snapshotSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SnapshotSchedule>, I>>(base?: I): SnapshotSchedule {
    return SnapshotSchedule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotSchedule>, I>>(object: I): SnapshotSchedule {
    const message = createBaseSnapshotSchedule();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.status = object.status ?? 0;
    message.schedulePolicy = (object.schedulePolicy !== undefined && object.schedulePolicy !== null)
      ? SchedulePolicy.fromPartial(object.schedulePolicy)
      : undefined;
    message.retentionPeriod = (object.retentionPeriod !== undefined && object.retentionPeriod !== null)
      ? Duration.fromPartial(object.retentionPeriod)
      : undefined;
    message.snapshotCount = object.snapshotCount ?? undefined;
    message.snapshotSpec = (object.snapshotSpec !== undefined && object.snapshotSpec !== null)
      ? SnapshotSpec.fromPartial(object.snapshotSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SnapshotSchedule.$type, SnapshotSchedule);

function createBaseSnapshotSchedule_LabelsEntry(): SnapshotSchedule_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry", key: "", value: "" };
}

export const SnapshotSchedule_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry" as const,

  encode(message: SnapshotSchedule_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSchedule_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotSchedule_LabelsEntry();
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

  fromJSON(object: any): SnapshotSchedule_LabelsEntry {
    return {
      $type: SnapshotSchedule_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: SnapshotSchedule_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SnapshotSchedule_LabelsEntry>, I>>(base?: I): SnapshotSchedule_LabelsEntry {
    return SnapshotSchedule_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotSchedule_LabelsEntry>, I>>(object: I): SnapshotSchedule_LabelsEntry {
    const message = createBaseSnapshotSchedule_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(SnapshotSchedule_LabelsEntry.$type, SnapshotSchedule_LabelsEntry);

function createBaseSchedulePolicy(): SchedulePolicy {
  return { $type: "yandex.cloud.compute.v1.SchedulePolicy", startAt: undefined, expression: "" };
}

export const SchedulePolicy = {
  $type: "yandex.cloud.compute.v1.SchedulePolicy" as const,

  encode(message: SchedulePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startAt), writer.uint32(10).fork()).ldelim();
    }
    if (message.expression !== "") {
      writer.uint32(18).string(message.expression);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchedulePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedulePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.expression = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchedulePolicy {
    return {
      $type: SchedulePolicy.$type,
      startAt: isSet(object.startAt) ? fromJsonTimestamp(object.startAt) : undefined,
      expression: isSet(object.expression) ? globalThis.String(object.expression) : "",
    };
  },

  toJSON(message: SchedulePolicy): unknown {
    const obj: any = {};
    if (message.startAt !== undefined) {
      obj.startAt = message.startAt.toISOString();
    }
    if (message.expression !== "") {
      obj.expression = message.expression;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SchedulePolicy>, I>>(base?: I): SchedulePolicy {
    return SchedulePolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SchedulePolicy>, I>>(object: I): SchedulePolicy {
    const message = createBaseSchedulePolicy();
    message.startAt = object.startAt ?? undefined;
    message.expression = object.expression ?? "";
    return message;
  },
};

messageTypeRegistry.set(SchedulePolicy.$type, SchedulePolicy);

function createBaseSnapshotSpec(): SnapshotSpec {
  return { $type: "yandex.cloud.compute.v1.SnapshotSpec", description: "", labels: {} };
}

export const SnapshotSpec = {
  $type: "yandex.cloud.compute.v1.SnapshotSpec" as const,

  encode(message: SnapshotSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      SnapshotSpec_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = SnapshotSpec_LabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
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

  fromJSON(object: any): SnapshotSpec {
    return {
      $type: SnapshotSpec.$type,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SnapshotSpec): unknown {
    const obj: any = {};
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
    return obj;
  },

  create<I extends Exact<DeepPartial<SnapshotSpec>, I>>(base?: I): SnapshotSpec {
    return SnapshotSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotSpec>, I>>(object: I): SnapshotSpec {
    const message = createBaseSnapshotSpec();
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(SnapshotSpec.$type, SnapshotSpec);

function createBaseSnapshotSpec_LabelsEntry(): SnapshotSpec_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry", key: "", value: "" };
}

export const SnapshotSpec_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry" as const,

  encode(message: SnapshotSpec_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSpec_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotSpec_LabelsEntry();
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

  fromJSON(object: any): SnapshotSpec_LabelsEntry {
    return {
      $type: SnapshotSpec_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: SnapshotSpec_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SnapshotSpec_LabelsEntry>, I>>(base?: I): SnapshotSpec_LabelsEntry {
    return SnapshotSpec_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotSpec_LabelsEntry>, I>>(object: I): SnapshotSpec_LabelsEntry {
    const message = createBaseSnapshotSpec_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(SnapshotSpec_LabelsEntry.$type, SnapshotSpec_LabelsEntry);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
