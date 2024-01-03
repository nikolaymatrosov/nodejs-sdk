/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

export enum GpuInterconnectType {
  GPU_INTERCONNECT_TYPE_UNSPECIFIED = 0,
  /** INFINIBAND - InfiniBand interconnect. */
  INFINIBAND = 1,
  UNRECOGNIZED = -1,
}

export function gpuInterconnectTypeFromJSON(object: any): GpuInterconnectType {
  switch (object) {
    case 0:
    case "GPU_INTERCONNECT_TYPE_UNSPECIFIED":
      return GpuInterconnectType.GPU_INTERCONNECT_TYPE_UNSPECIFIED;
    case 1:
    case "INFINIBAND":
      return GpuInterconnectType.INFINIBAND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GpuInterconnectType.UNRECOGNIZED;
  }
}

export function gpuInterconnectTypeToJSON(object: GpuInterconnectType): string {
  switch (object) {
    case GpuInterconnectType.GPU_INTERCONNECT_TYPE_UNSPECIFIED:
      return "GPU_INTERCONNECT_TYPE_UNSPECIFIED";
    case GpuInterconnectType.INFINIBAND:
      return "INFINIBAND";
    case GpuInterconnectType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A GPU cluster. For details about the concept, see [documentation](/docs/compute/concepts/gpu-cluster). */
export interface GpuCluster {
  $type: "yandex.cloud.compute.v1.GpuCluster";
  /** ID of GPU cluster. */
  id: string;
  /** ID of the folder that the GPU cluster belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the GPU cluster.
   *
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the GPU cluster. */
  description: string;
  /** GPU cluster labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Status of the GPU cluster. */
  status: GpuCluster_Status;
  /** ID of the availability zone where the GPU cluster resides. */
  zoneId: string;
  /** Type of interconnect used for this GPU cluster. */
  interconnectType: GpuInterconnectType;
}

export enum GpuCluster_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - GPU cluster is being created. */
  CREATING = 1,
  /** READY - GPU cluster is ready to use. */
  READY = 2,
  /** ERROR - GPU cluster encountered a problem and cannot operate. */
  ERROR = 3,
  /** DELETING - GPU cluster is being deleted. */
  DELETING = 4,
  UNRECOGNIZED = -1,
}

export function gpuCluster_StatusFromJSON(object: any): GpuCluster_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return GpuCluster_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return GpuCluster_Status.CREATING;
    case 2:
    case "READY":
      return GpuCluster_Status.READY;
    case 3:
    case "ERROR":
      return GpuCluster_Status.ERROR;
    case 4:
    case "DELETING":
      return GpuCluster_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GpuCluster_Status.UNRECOGNIZED;
  }
}

export function gpuCluster_StatusToJSON(object: GpuCluster_Status): string {
  switch (object) {
    case GpuCluster_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case GpuCluster_Status.CREATING:
      return "CREATING";
    case GpuCluster_Status.READY:
      return "READY";
    case GpuCluster_Status.ERROR:
      return "ERROR";
    case GpuCluster_Status.DELETING:
      return "DELETING";
    case GpuCluster_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GpuCluster_LabelsEntry {
  $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry";
  key: string;
  value: string;
}

function createBaseGpuCluster(): GpuCluster {
  return {
    $type: "yandex.cloud.compute.v1.GpuCluster",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
    zoneId: "",
    interconnectType: 0,
  };
}

export const GpuCluster = {
  $type: "yandex.cloud.compute.v1.GpuCluster" as const,

  encode(message: GpuCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      GpuCluster_LabelsEntry.encode(
        { $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.zoneId !== "") {
      writer.uint32(66).string(message.zoneId);
    }
    if (message.interconnectType !== 0) {
      writer.uint32(72).int32(message.interconnectType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpuCluster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpuCluster();
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

          const entry6 = GpuCluster_LabelsEntry.decode(reader, reader.uint32());
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

          message.zoneId = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.interconnectType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GpuCluster {
    return {
      $type: GpuCluster.$type,
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
      status: isSet(object.status) ? gpuCluster_StatusFromJSON(object.status) : 0,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      interconnectType: isSet(object.interconnectType) ? gpuInterconnectTypeFromJSON(object.interconnectType) : 0,
    };
  },

  toJSON(message: GpuCluster): unknown {
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
      obj.status = gpuCluster_StatusToJSON(message.status);
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.interconnectType !== 0) {
      obj.interconnectType = gpuInterconnectTypeToJSON(message.interconnectType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GpuCluster>, I>>(base?: I): GpuCluster {
    return GpuCluster.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GpuCluster>, I>>(object: I): GpuCluster {
    const message = createBaseGpuCluster();
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
    message.zoneId = object.zoneId ?? "";
    message.interconnectType = object.interconnectType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GpuCluster.$type, GpuCluster);

function createBaseGpuCluster_LabelsEntry(): GpuCluster_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry", key: "", value: "" };
}

export const GpuCluster_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry" as const,

  encode(message: GpuCluster_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpuCluster_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpuCluster_LabelsEntry();
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

  fromJSON(object: any): GpuCluster_LabelsEntry {
    return {
      $type: GpuCluster_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: GpuCluster_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GpuCluster_LabelsEntry>, I>>(base?: I): GpuCluster_LabelsEntry {
    return GpuCluster_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GpuCluster_LabelsEntry>, I>>(object: I): GpuCluster_LabelsEntry {
    const message = createBaseGpuCluster_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(GpuCluster_LabelsEntry.$type, GpuCluster_LabelsEntry);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
