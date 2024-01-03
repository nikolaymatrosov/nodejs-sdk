/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface DiskPlacementGroup {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup";
  /** ID of the placement group. */
  id: string;
  /** ID of the folder that the placement group belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the placement group.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the placement group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** ID of the availability zone where the placement group resides. */
  zoneId: string;
  /** Current status of the placement group */
  status: DiskPlacementGroup_Status;
  /** Distribute disks over distinct failure domains. */
  spreadPlacementStrategy?:
    | DiskSpreadPlacementStrategy
    | undefined;
  /** Distribute disks over partitions. */
  partitionPlacementStrategy?: DiskPartitionPlacementStrategy | undefined;
}

export enum DiskPlacementGroup_Status {
  STATUS_UNSPECIFIED = 0,
  CREATING = 1,
  READY = 2,
  DELETING = 4,
  UNRECOGNIZED = -1,
}

export function diskPlacementGroup_StatusFromJSON(object: any): DiskPlacementGroup_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return DiskPlacementGroup_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return DiskPlacementGroup_Status.CREATING;
    case 2:
    case "READY":
      return DiskPlacementGroup_Status.READY;
    case 4:
    case "DELETING":
      return DiskPlacementGroup_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DiskPlacementGroup_Status.UNRECOGNIZED;
  }
}

export function diskPlacementGroup_StatusToJSON(object: DiskPlacementGroup_Status): string {
  switch (object) {
    case DiskPlacementGroup_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case DiskPlacementGroup_Status.CREATING:
      return "CREATING";
    case DiskPlacementGroup_Status.READY:
      return "READY";
    case DiskPlacementGroup_Status.DELETING:
      return "DELETING";
    case DiskPlacementGroup_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DiskPlacementGroup_LabelsEntry {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry";
  key: string;
  value: string;
}

export interface DiskSpreadPlacementStrategy {
  $type: "yandex.cloud.compute.v1.DiskSpreadPlacementStrategy";
}

export interface DiskPartitionPlacementStrategy {
  $type: "yandex.cloud.compute.v1.DiskPartitionPlacementStrategy";
  partitions: number;
}

function createBaseDiskPlacementGroup(): DiskPlacementGroup {
  return {
    $type: "yandex.cloud.compute.v1.DiskPlacementGroup",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    zoneId: "",
    status: 0,
    spreadPlacementStrategy: undefined,
    partitionPlacementStrategy: undefined,
  };
}

export const DiskPlacementGroup = {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup" as const,

  encode(message: DiskPlacementGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      DiskPlacementGroup_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(58).string(message.zoneId);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.spreadPlacementStrategy !== undefined) {
      DiskSpreadPlacementStrategy.encode(message.spreadPlacementStrategy, writer.uint32(66).fork()).ldelim();
    }
    if (message.partitionPlacementStrategy !== undefined) {
      DiskPartitionPlacementStrategy.encode(message.partitionPlacementStrategy, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskPlacementGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskPlacementGroup();
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

          const entry6 = DiskPlacementGroup_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.spreadPlacementStrategy = DiskSpreadPlacementStrategy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.partitionPlacementStrategy = DiskPartitionPlacementStrategy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiskPlacementGroup {
    return {
      $type: DiskPlacementGroup.$type,
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
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      status: isSet(object.status) ? diskPlacementGroup_StatusFromJSON(object.status) : 0,
      spreadPlacementStrategy: isSet(object.spreadPlacementStrategy)
        ? DiskSpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
        : undefined,
      partitionPlacementStrategy: isSet(object.partitionPlacementStrategy)
        ? DiskPartitionPlacementStrategy.fromJSON(object.partitionPlacementStrategy)
        : undefined,
    };
  },

  toJSON(message: DiskPlacementGroup): unknown {
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
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.status !== 0) {
      obj.status = diskPlacementGroup_StatusToJSON(message.status);
    }
    if (message.spreadPlacementStrategy !== undefined) {
      obj.spreadPlacementStrategy = DiskSpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy);
    }
    if (message.partitionPlacementStrategy !== undefined) {
      obj.partitionPlacementStrategy = DiskPartitionPlacementStrategy.toJSON(message.partitionPlacementStrategy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiskPlacementGroup>, I>>(base?: I): DiskPlacementGroup {
    return DiskPlacementGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiskPlacementGroup>, I>>(object: I): DiskPlacementGroup {
    const message = createBaseDiskPlacementGroup();
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
    message.zoneId = object.zoneId ?? "";
    message.status = object.status ?? 0;
    message.spreadPlacementStrategy =
      (object.spreadPlacementStrategy !== undefined && object.spreadPlacementStrategy !== null)
        ? DiskSpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy)
        : undefined;
    message.partitionPlacementStrategy =
      (object.partitionPlacementStrategy !== undefined && object.partitionPlacementStrategy !== null)
        ? DiskPartitionPlacementStrategy.fromPartial(object.partitionPlacementStrategy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DiskPlacementGroup.$type, DiskPlacementGroup);

function createBaseDiskPlacementGroup_LabelsEntry(): DiskPlacementGroup_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry", key: "", value: "" };
}

export const DiskPlacementGroup_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry" as const,

  encode(message: DiskPlacementGroup_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskPlacementGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskPlacementGroup_LabelsEntry();
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

  fromJSON(object: any): DiskPlacementGroup_LabelsEntry {
    return {
      $type: DiskPlacementGroup_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: DiskPlacementGroup_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiskPlacementGroup_LabelsEntry>, I>>(base?: I): DiskPlacementGroup_LabelsEntry {
    return DiskPlacementGroup_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiskPlacementGroup_LabelsEntry>, I>>(
    object: I,
  ): DiskPlacementGroup_LabelsEntry {
    const message = createBaseDiskPlacementGroup_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(DiskPlacementGroup_LabelsEntry.$type, DiskPlacementGroup_LabelsEntry);

function createBaseDiskSpreadPlacementStrategy(): DiskSpreadPlacementStrategy {
  return { $type: "yandex.cloud.compute.v1.DiskSpreadPlacementStrategy" };
}

export const DiskSpreadPlacementStrategy = {
  $type: "yandex.cloud.compute.v1.DiskSpreadPlacementStrategy" as const,

  encode(_: DiskSpreadPlacementStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskSpreadPlacementStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskSpreadPlacementStrategy();
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

  fromJSON(_: any): DiskSpreadPlacementStrategy {
    return { $type: DiskSpreadPlacementStrategy.$type };
  },

  toJSON(_: DiskSpreadPlacementStrategy): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DiskSpreadPlacementStrategy>, I>>(base?: I): DiskSpreadPlacementStrategy {
    return DiskSpreadPlacementStrategy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiskSpreadPlacementStrategy>, I>>(_: I): DiskSpreadPlacementStrategy {
    const message = createBaseDiskSpreadPlacementStrategy();
    return message;
  },
};

messageTypeRegistry.set(DiskSpreadPlacementStrategy.$type, DiskSpreadPlacementStrategy);

function createBaseDiskPartitionPlacementStrategy(): DiskPartitionPlacementStrategy {
  return { $type: "yandex.cloud.compute.v1.DiskPartitionPlacementStrategy", partitions: 0 };
}

export const DiskPartitionPlacementStrategy = {
  $type: "yandex.cloud.compute.v1.DiskPartitionPlacementStrategy" as const,

  encode(message: DiskPartitionPlacementStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partitions !== 0) {
      writer.uint32(8).int64(message.partitions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskPartitionPlacementStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskPartitionPlacementStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.partitions = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiskPartitionPlacementStrategy {
    return {
      $type: DiskPartitionPlacementStrategy.$type,
      partitions: isSet(object.partitions) ? globalThis.Number(object.partitions) : 0,
    };
  },

  toJSON(message: DiskPartitionPlacementStrategy): unknown {
    const obj: any = {};
    if (message.partitions !== 0) {
      obj.partitions = Math.round(message.partitions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiskPartitionPlacementStrategy>, I>>(base?: I): DiskPartitionPlacementStrategy {
    return DiskPartitionPlacementStrategy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiskPartitionPlacementStrategy>, I>>(
    object: I,
  ): DiskPartitionPlacementStrategy {
    const message = createBaseDiskPartitionPlacementStrategy();
    message.partitions = object.partitions ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DiskPartitionPlacementStrategy.$type, DiskPartitionPlacementStrategy);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
