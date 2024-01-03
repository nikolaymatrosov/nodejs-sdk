/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

/**
 * A filesystem resource.
 * For details about the concept, see [documentation](/docs/compute/concepts/filesystem).
 */
export interface Filesystem {
  $type: "yandex.cloud.compute.v1.Filesystem";
  /** ID of the filesystem. Generated at creation time. */
  id: string;
  /** ID of the folder that the filesystem belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the filesystem. The name is unique within the folder. */
  name: string;
  /** Description of the filesystem. */
  description: string;
  /**
   * Filesystem labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /**
   * ID of the filesystem type.
   *
   * To get a list of available filesystem types, make a [yandex.cloud.compute.v1.DiskTypeService.List] request.
   */
  typeId: string;
  /**
   * ID of the availability zone where the filesystem resides.
   *
   * A filesystem can be attached only to instances residing in the same availability zone.
   */
  zoneId: string;
  /** Size of the filesystem, specified in bytes. */
  size: number;
  /** Block size used for the filesystem, specified in bytes. */
  blockSize: number;
  /** Current status of the filesystem. */
  status: Filesystem_Status;
}

export enum Filesystem_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - The filesystem is being created. */
  CREATING = 1,
  /** READY - The filesystem is ready to use. */
  READY = 2,
  /** ERROR - The filesystem encountered a problem and cannot operate. */
  ERROR = 3,
  /** DELETING - The filesystem is being deleted. */
  DELETING = 4,
  UNRECOGNIZED = -1,
}

export function filesystem_StatusFromJSON(object: any): Filesystem_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Filesystem_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Filesystem_Status.CREATING;
    case 2:
    case "READY":
      return Filesystem_Status.READY;
    case 3:
    case "ERROR":
      return Filesystem_Status.ERROR;
    case 4:
    case "DELETING":
      return Filesystem_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Filesystem_Status.UNRECOGNIZED;
  }
}

export function filesystem_StatusToJSON(object: Filesystem_Status): string {
  switch (object) {
    case Filesystem_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Filesystem_Status.CREATING:
      return "CREATING";
    case Filesystem_Status.READY:
      return "READY";
    case Filesystem_Status.ERROR:
      return "ERROR";
    case Filesystem_Status.DELETING:
      return "DELETING";
    case Filesystem_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Filesystem_LabelsEntry {
  $type: "yandex.cloud.compute.v1.Filesystem.LabelsEntry";
  key: string;
  value: string;
}

function createBaseFilesystem(): Filesystem {
  return {
    $type: "yandex.cloud.compute.v1.Filesystem",
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
    status: 0,
  };
}

export const Filesystem = {
  $type: "yandex.cloud.compute.v1.Filesystem" as const,

  encode(message: Filesystem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Filesystem_LabelsEntry.encode(
        { $type: "yandex.cloud.compute.v1.Filesystem.LabelsEntry", key: key as any, value },
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
      writer.uint32(80).int64(message.blockSize);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filesystem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilesystem();
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

          const entry6 = Filesystem_LabelsEntry.decode(reader, reader.uint32());
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
        case 10:
          if (tag !== 80) {
            break;
          }

          message.blockSize = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Filesystem {
    return {
      $type: Filesystem.$type,
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
      status: isSet(object.status) ? filesystem_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Filesystem): unknown {
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
    if (message.status !== 0) {
      obj.status = filesystem_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Filesystem>, I>>(base?: I): Filesystem {
    return Filesystem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Filesystem>, I>>(object: I): Filesystem {
    const message = createBaseFilesystem();
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
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Filesystem.$type, Filesystem);

function createBaseFilesystem_LabelsEntry(): Filesystem_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.Filesystem.LabelsEntry", key: "", value: "" };
}

export const Filesystem_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.Filesystem.LabelsEntry" as const,

  encode(message: Filesystem_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filesystem_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilesystem_LabelsEntry();
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

  fromJSON(object: any): Filesystem_LabelsEntry {
    return {
      $type: Filesystem_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Filesystem_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Filesystem_LabelsEntry>, I>>(base?: I): Filesystem_LabelsEntry {
    return Filesystem_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Filesystem_LabelsEntry>, I>>(object: I): Filesystem_LabelsEntry {
    const message = createBaseFilesystem_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Filesystem_LabelsEntry.$type, Filesystem_LabelsEntry);

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
