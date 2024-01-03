/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

/** A Disk resource. For more information, see [Disks](/docs/compute/concepts/disk). */
export interface Disk {
  $type: "yandex.cloud.compute.v1.Disk";
  /** ID of the disk. */
  id: string;
  /** ID of the folder that the disk belongs to. */
  folderId: string;
  createdAt?:
    | Date
    | undefined;
  /** Name of the disk. 1-63 characters long. */
  name: string;
  /** Description of the disk. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** ID of the disk type. */
  typeId: string;
  /** ID of the availability zone where the disk resides. */
  zoneId: string;
  /** Size of the disk, specified in bytes. */
  size: number;
  /** Block size of the disk, specified in bytes. */
  blockSize: number;
  /**
   * License IDs that indicate which licenses are attached to this resource.
   * License IDs are used to calculate additional charges for the use of the virtual machine.
   *
   * The correct license ID is generated by the platform. IDs are inherited by new resources created from this resource.
   *
   * If you know the license IDs, specify them when you create the image.
   * For example, if you create a disk image using a third-party utility and load it into Object Storage, the license IDs will be lost.
   * You can specify them in the [yandex.cloud.compute.v1.ImageService.Create] request.
   */
  productIds: string[];
  /** Current status of the disk. */
  status: Disk_Status;
  /** ID of the image that was used for disk creation. */
  sourceImageId?:
    | string
    | undefined;
  /** ID of the snapshot that was used for disk creation. */
  sourceSnapshotId?:
    | string
    | undefined;
  /** Array of instances to which the disk is attached. */
  instanceIds: string[];
  /** Placement policy configuration. */
  diskPlacementPolicy?: DiskPlacementPolicy | undefined;
}

export enum Disk_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Disk is being created. */
  CREATING = 1,
  /** READY - Disk is ready to use. */
  READY = 2,
  /** ERROR - Disk encountered a problem and cannot operate. */
  ERROR = 3,
  /** DELETING - Disk is being deleted. */
  DELETING = 4,
  UNRECOGNIZED = -1,
}

export function disk_StatusFromJSON(object: any): Disk_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Disk_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Disk_Status.CREATING;
    case 2:
    case "READY":
      return Disk_Status.READY;
    case 3:
    case "ERROR":
      return Disk_Status.ERROR;
    case 4:
    case "DELETING":
      return Disk_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Disk_Status.UNRECOGNIZED;
  }
}

export function disk_StatusToJSON(object: Disk_Status): string {
  switch (object) {
    case Disk_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Disk_Status.CREATING:
      return "CREATING";
    case Disk_Status.READY:
      return "READY";
    case Disk_Status.ERROR:
      return "ERROR";
    case Disk_Status.DELETING:
      return "DELETING";
    case Disk_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Disk_LabelsEntry {
  $type: "yandex.cloud.compute.v1.Disk.LabelsEntry";
  key: string;
  value: string;
}

export interface DiskPlacementPolicy {
  $type: "yandex.cloud.compute.v1.DiskPlacementPolicy";
  /** Placement group ID. */
  placementGroupId: string;
  placementGroupPartition: number;
}

export interface DiskPlacementPolicyChange {
  $type: "yandex.cloud.compute.v1.DiskPlacementPolicyChange";
  /** Disk ID. */
  diskId: string;
  /** Placement policy configuration for given disk. */
  diskPlacementPolicy?: DiskPlacementPolicy | undefined;
}

function createBaseDisk(): Disk {
  return {
    $type: "yandex.cloud.compute.v1.Disk",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    typeId: "",
    zoneId: "",
    size: 0,
    blockSize: 0,
    productIds: [],
    status: 0,
    sourceImageId: undefined,
    sourceSnapshotId: undefined,
    instanceIds: [],
    diskPlacementPolicy: undefined,
  };
}

export const Disk = {
  $type: "yandex.cloud.compute.v1.Disk" as const,

  encode(message: Disk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Disk_LabelsEntry.encode(
        { $type: "yandex.cloud.compute.v1.Disk.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.typeId !== "") {
      writer.uint32(58).string(message.typeId);
    }
    if (message.zoneId !== "") {
      writer.uint32(66).string(message.zoneId);
    }
    if (message.size !== 0) {
      writer.uint32(72).int64(message.size);
    }
    if (message.blockSize !== 0) {
      writer.uint32(120).int64(message.blockSize);
    }
    for (const v of message.productIds) {
      writer.uint32(82).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.sourceImageId !== undefined) {
      writer.uint32(98).string(message.sourceImageId);
    }
    if (message.sourceSnapshotId !== undefined) {
      writer.uint32(106).string(message.sourceSnapshotId);
    }
    for (const v of message.instanceIds) {
      writer.uint32(114).string(v!);
    }
    if (message.diskPlacementPolicy !== undefined) {
      DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(130).fork()).ldelim();
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

          const entry6 = Disk_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.blockSize = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.productIds.push(reader.string());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.sourceImageId = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.sourceSnapshotId = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.instanceIds.push(reader.string());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.diskPlacementPolicy = DiskPlacementPolicy.decode(reader, reader.uint32());
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
      typeId: isSet(object.typeId) ? globalThis.String(object.typeId) : "",
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      blockSize: isSet(object.blockSize) ? globalThis.Number(object.blockSize) : 0,
      productIds: globalThis.Array.isArray(object?.productIds)
        ? object.productIds.map((e: any) => globalThis.String(e))
        : [],
      status: isSet(object.status) ? disk_StatusFromJSON(object.status) : 0,
      sourceImageId: isSet(object.sourceImageId) ? globalThis.String(object.sourceImageId) : undefined,
      sourceSnapshotId: isSet(object.sourceSnapshotId) ? globalThis.String(object.sourceSnapshotId) : undefined,
      instanceIds: globalThis.Array.isArray(object?.instanceIds)
        ? object.instanceIds.map((e: any) => globalThis.String(e))
        : [],
      diskPlacementPolicy: isSet(object.diskPlacementPolicy)
        ? DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
        : undefined,
    };
  },

  toJSON(message: Disk): unknown {
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
    if (message.typeId !== "") {
      obj.typeId = message.typeId;
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.blockSize !== 0) {
      obj.blockSize = Math.round(message.blockSize);
    }
    if (message.productIds?.length) {
      obj.productIds = message.productIds;
    }
    if (message.status !== 0) {
      obj.status = disk_StatusToJSON(message.status);
    }
    if (message.sourceImageId !== undefined) {
      obj.sourceImageId = message.sourceImageId;
    }
    if (message.sourceSnapshotId !== undefined) {
      obj.sourceSnapshotId = message.sourceSnapshotId;
    }
    if (message.instanceIds?.length) {
      obj.instanceIds = message.instanceIds;
    }
    if (message.diskPlacementPolicy !== undefined) {
      obj.diskPlacementPolicy = DiskPlacementPolicy.toJSON(message.diskPlacementPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Disk>, I>>(base?: I): Disk {
    return Disk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Disk>, I>>(object: I): Disk {
    const message = createBaseDisk();
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
    message.typeId = object.typeId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.size = object.size ?? 0;
    message.blockSize = object.blockSize ?? 0;
    message.productIds = object.productIds?.map((e) => e) || [];
    message.status = object.status ?? 0;
    message.sourceImageId = object.sourceImageId ?? undefined;
    message.sourceSnapshotId = object.sourceSnapshotId ?? undefined;
    message.instanceIds = object.instanceIds?.map((e) => e) || [];
    message.diskPlacementPolicy = (object.diskPlacementPolicy !== undefined && object.diskPlacementPolicy !== null)
      ? DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Disk.$type, Disk);

function createBaseDisk_LabelsEntry(): Disk_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.Disk.LabelsEntry", key: "", value: "" };
}

export const Disk_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.Disk.LabelsEntry" as const,

  encode(message: Disk_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Disk_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisk_LabelsEntry();
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

  fromJSON(object: any): Disk_LabelsEntry {
    return {
      $type: Disk_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Disk_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Disk_LabelsEntry>, I>>(base?: I): Disk_LabelsEntry {
    return Disk_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Disk_LabelsEntry>, I>>(object: I): Disk_LabelsEntry {
    const message = createBaseDisk_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Disk_LabelsEntry.$type, Disk_LabelsEntry);

function createBaseDiskPlacementPolicy(): DiskPlacementPolicy {
  return { $type: "yandex.cloud.compute.v1.DiskPlacementPolicy", placementGroupId: "", placementGroupPartition: 0 };
}

export const DiskPlacementPolicy = {
  $type: "yandex.cloud.compute.v1.DiskPlacementPolicy" as const,

  encode(message: DiskPlacementPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    if (message.placementGroupPartition !== 0) {
      writer.uint32(16).int64(message.placementGroupPartition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskPlacementPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskPlacementPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placementGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.placementGroupPartition = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiskPlacementPolicy {
    return {
      $type: DiskPlacementPolicy.$type,
      placementGroupId: isSet(object.placementGroupId) ? globalThis.String(object.placementGroupId) : "",
      placementGroupPartition: isSet(object.placementGroupPartition)
        ? globalThis.Number(object.placementGroupPartition)
        : 0,
    };
  },

  toJSON(message: DiskPlacementPolicy): unknown {
    const obj: any = {};
    if (message.placementGroupId !== "") {
      obj.placementGroupId = message.placementGroupId;
    }
    if (message.placementGroupPartition !== 0) {
      obj.placementGroupPartition = Math.round(message.placementGroupPartition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiskPlacementPolicy>, I>>(base?: I): DiskPlacementPolicy {
    return DiskPlacementPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiskPlacementPolicy>, I>>(object: I): DiskPlacementPolicy {
    const message = createBaseDiskPlacementPolicy();
    message.placementGroupId = object.placementGroupId ?? "";
    message.placementGroupPartition = object.placementGroupPartition ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DiskPlacementPolicy.$type, DiskPlacementPolicy);

function createBaseDiskPlacementPolicyChange(): DiskPlacementPolicyChange {
  return { $type: "yandex.cloud.compute.v1.DiskPlacementPolicyChange", diskId: "", diskPlacementPolicy: undefined };
}

export const DiskPlacementPolicyChange = {
  $type: "yandex.cloud.compute.v1.DiskPlacementPolicyChange" as const,

  encode(message: DiskPlacementPolicyChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.diskPlacementPolicy !== undefined) {
      DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskPlacementPolicyChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskPlacementPolicyChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.diskPlacementPolicy = DiskPlacementPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiskPlacementPolicyChange {
    return {
      $type: DiskPlacementPolicyChange.$type,
      diskId: isSet(object.diskId) ? globalThis.String(object.diskId) : "",
      diskPlacementPolicy: isSet(object.diskPlacementPolicy)
        ? DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
        : undefined,
    };
  },

  toJSON(message: DiskPlacementPolicyChange): unknown {
    const obj: any = {};
    if (message.diskId !== "") {
      obj.diskId = message.diskId;
    }
    if (message.diskPlacementPolicy !== undefined) {
      obj.diskPlacementPolicy = DiskPlacementPolicy.toJSON(message.diskPlacementPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiskPlacementPolicyChange>, I>>(base?: I): DiskPlacementPolicyChange {
    return DiskPlacementPolicyChange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiskPlacementPolicyChange>, I>>(object: I): DiskPlacementPolicyChange {
    const message = createBaseDiskPlacementPolicyChange();
    message.diskId = object.diskId ?? "";
    message.diskPlacementPolicy = (object.diskPlacementPolicy !== undefined && object.diskPlacementPolicy !== null)
      ? DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(DiskPlacementPolicyChange.$type, DiskPlacementPolicyChange);

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
