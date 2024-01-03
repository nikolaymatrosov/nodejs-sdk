/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

export enum MaintenancePolicy {
  MAINTENANCE_POLICY_UNSPECIFIED = 0,
  /** RESTART - Restart instances on the same host after maintenance event. */
  RESTART = 1,
  /** MIGRATE - Migrate instances to another host before maintenance event. */
  MIGRATE = 2,
  UNRECOGNIZED = -1,
}

export function maintenancePolicyFromJSON(object: any): MaintenancePolicy {
  switch (object) {
    case 0:
    case "MAINTENANCE_POLICY_UNSPECIFIED":
      return MaintenancePolicy.MAINTENANCE_POLICY_UNSPECIFIED;
    case 1:
    case "RESTART":
      return MaintenancePolicy.RESTART;
    case 2:
    case "MIGRATE":
      return MaintenancePolicy.MIGRATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MaintenancePolicy.UNRECOGNIZED;
  }
}

export function maintenancePolicyToJSON(object: MaintenancePolicy): string {
  switch (object) {
    case MaintenancePolicy.MAINTENANCE_POLICY_UNSPECIFIED:
      return "MAINTENANCE_POLICY_UNSPECIFIED";
    case MaintenancePolicy.RESTART:
      return "RESTART";
    case MaintenancePolicy.MIGRATE:
      return "MIGRATE";
    case MaintenancePolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Represents group of dedicated hosts */
export interface HostGroup {
  $type: "yandex.cloud.compute.v1.HostGroup";
  /** ID of the group. */
  id: string;
  /** ID of the folder that the group belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the group. The name is unique within the folder. */
  name: string;
  /** Description of the group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Availability zone where all dedicated hosts are allocated. */
  zoneId: string;
  /** Status of the group. */
  status: HostGroup_Status;
  /** ID of host type. Resources provided by each host of the group. */
  typeId: string;
  /** Behaviour on maintenance events. */
  maintenancePolicy: MaintenancePolicy;
  /** Scale policy. Only fixed number of hosts are supported at this moment. */
  scalePolicy?: ScalePolicy | undefined;
}

export enum HostGroup_Status {
  STATUS_UNSPECIFIED = 0,
  CREATING = 1,
  READY = 2,
  UPDATING = 3,
  DELETING = 4,
  UNRECOGNIZED = -1,
}

export function hostGroup_StatusFromJSON(object: any): HostGroup_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return HostGroup_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return HostGroup_Status.CREATING;
    case 2:
    case "READY":
      return HostGroup_Status.READY;
    case 3:
    case "UPDATING":
      return HostGroup_Status.UPDATING;
    case 4:
    case "DELETING":
      return HostGroup_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HostGroup_Status.UNRECOGNIZED;
  }
}

export function hostGroup_StatusToJSON(object: HostGroup_Status): string {
  switch (object) {
    case HostGroup_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case HostGroup_Status.CREATING:
      return "CREATING";
    case HostGroup_Status.READY:
      return "READY";
    case HostGroup_Status.UPDATING:
      return "UPDATING";
    case HostGroup_Status.DELETING:
      return "DELETING";
    case HostGroup_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface HostGroup_LabelsEntry {
  $type: "yandex.cloud.compute.v1.HostGroup.LabelsEntry";
  key: string;
  value: string;
}

/** Represents a dedicated host */
export interface Host {
  $type: "yandex.cloud.compute.v1.Host";
  /** ID of the host. */
  id: string;
  /** Current status of the host. New instances are unable to start on host in DOWN status. */
  status: Host_Status;
  /** ID of the physical server that the host belongs to. */
  serverId: string;
}

export enum Host_Status {
  STATUS_UNSPECIFIED = 0,
  UP = 1,
  DOWN = 2,
  UNRECOGNIZED = -1,
}

export function host_StatusFromJSON(object: any): Host_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Host_Status.STATUS_UNSPECIFIED;
    case 1:
    case "UP":
      return Host_Status.UP;
    case 2:
    case "DOWN":
      return Host_Status.DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Status.UNRECOGNIZED;
  }
}

export function host_StatusToJSON(object: Host_Status): string {
  switch (object) {
    case Host_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Host_Status.UP:
      return "UP";
    case Host_Status.DOWN:
      return "DOWN";
    case Host_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ScalePolicy {
  $type: "yandex.cloud.compute.v1.ScalePolicy";
  fixedScale?: ScalePolicy_FixedScale | undefined;
}

export interface ScalePolicy_FixedScale {
  $type: "yandex.cloud.compute.v1.ScalePolicy.FixedScale";
  size: number;
}

function createBaseHostGroup(): HostGroup {
  return {
    $type: "yandex.cloud.compute.v1.HostGroup",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    zoneId: "",
    status: 0,
    typeId: "",
    maintenancePolicy: 0,
    scalePolicy: undefined,
  };
}

export const HostGroup = {
  $type: "yandex.cloud.compute.v1.HostGroup" as const,

  encode(message: HostGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      HostGroup_LabelsEntry.encode(
        { $type: "yandex.cloud.compute.v1.HostGroup.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(58).string(message.zoneId);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.typeId !== "") {
      writer.uint32(74).string(message.typeId);
    }
    if (message.maintenancePolicy !== 0) {
      writer.uint32(80).int32(message.maintenancePolicy);
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(message.scalePolicy, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostGroup();
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

          const entry6 = HostGroup_LabelsEntry.decode(reader, reader.uint32());
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
        case 8:
          if (tag !== 64) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.maintenancePolicy = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HostGroup {
    return {
      $type: HostGroup.$type,
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
      status: isSet(object.status) ? hostGroup_StatusFromJSON(object.status) : 0,
      typeId: isSet(object.typeId) ? globalThis.String(object.typeId) : "",
      maintenancePolicy: isSet(object.maintenancePolicy) ? maintenancePolicyFromJSON(object.maintenancePolicy) : 0,
      scalePolicy: isSet(object.scalePolicy) ? ScalePolicy.fromJSON(object.scalePolicy) : undefined,
    };
  },

  toJSON(message: HostGroup): unknown {
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
      obj.status = hostGroup_StatusToJSON(message.status);
    }
    if (message.typeId !== "") {
      obj.typeId = message.typeId;
    }
    if (message.maintenancePolicy !== 0) {
      obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy);
    }
    if (message.scalePolicy !== undefined) {
      obj.scalePolicy = ScalePolicy.toJSON(message.scalePolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HostGroup>, I>>(base?: I): HostGroup {
    return HostGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HostGroup>, I>>(object: I): HostGroup {
    const message = createBaseHostGroup();
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
    message.typeId = object.typeId ?? "";
    message.maintenancePolicy = object.maintenancePolicy ?? 0;
    message.scalePolicy = (object.scalePolicy !== undefined && object.scalePolicy !== null)
      ? ScalePolicy.fromPartial(object.scalePolicy)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HostGroup.$type, HostGroup);

function createBaseHostGroup_LabelsEntry(): HostGroup_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.HostGroup.LabelsEntry", key: "", value: "" };
}

export const HostGroup_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.HostGroup.LabelsEntry" as const,

  encode(message: HostGroup_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostGroup_LabelsEntry();
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

  fromJSON(object: any): HostGroup_LabelsEntry {
    return {
      $type: HostGroup_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: HostGroup_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HostGroup_LabelsEntry>, I>>(base?: I): HostGroup_LabelsEntry {
    return HostGroup_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HostGroup_LabelsEntry>, I>>(object: I): HostGroup_LabelsEntry {
    const message = createBaseHostGroup_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(HostGroup_LabelsEntry.$type, HostGroup_LabelsEntry);

function createBaseHost(): Host {
  return { $type: "yandex.cloud.compute.v1.Host", id: "", status: 0, serverId: "" };
}

export const Host = {
  $type: "yandex.cloud.compute.v1.Host" as const,

  encode(message: Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.serverId !== "") {
      writer.uint32(26).string(message.serverId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHost();
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
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serverId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Host {
    return {
      $type: Host.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      status: isSet(object.status) ? host_StatusFromJSON(object.status) : 0,
      serverId: isSet(object.serverId) ? globalThis.String(object.serverId) : "",
    };
  },

  toJSON(message: Host): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.status !== 0) {
      obj.status = host_StatusToJSON(message.status);
    }
    if (message.serverId !== "") {
      obj.serverId = message.serverId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Host>, I>>(base?: I): Host {
    return Host.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Host>, I>>(object: I): Host {
    const message = createBaseHost();
    message.id = object.id ?? "";
    message.status = object.status ?? 0;
    message.serverId = object.serverId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

function createBaseScalePolicy(): ScalePolicy {
  return { $type: "yandex.cloud.compute.v1.ScalePolicy", fixedScale: undefined };
}

export const ScalePolicy = {
  $type: "yandex.cloud.compute.v1.ScalePolicy" as const,

  encode(message: ScalePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fixedScale !== undefined) {
      ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fixedScale = ScalePolicy_FixedScale.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScalePolicy {
    return {
      $type: ScalePolicy.$type,
      fixedScale: isSet(object.fixedScale) ? ScalePolicy_FixedScale.fromJSON(object.fixedScale) : undefined,
    };
  },

  toJSON(message: ScalePolicy): unknown {
    const obj: any = {};
    if (message.fixedScale !== undefined) {
      obj.fixedScale = ScalePolicy_FixedScale.toJSON(message.fixedScale);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScalePolicy>, I>>(base?: I): ScalePolicy {
    return ScalePolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScalePolicy>, I>>(object: I): ScalePolicy {
    const message = createBaseScalePolicy();
    message.fixedScale = (object.fixedScale !== undefined && object.fixedScale !== null)
      ? ScalePolicy_FixedScale.fromPartial(object.fixedScale)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy.$type, ScalePolicy);

function createBaseScalePolicy_FixedScale(): ScalePolicy_FixedScale {
  return { $type: "yandex.cloud.compute.v1.ScalePolicy.FixedScale", size: 0 };
}

export const ScalePolicy_FixedScale = {
  $type: "yandex.cloud.compute.v1.ScalePolicy.FixedScale" as const,

  encode(message: ScalePolicy_FixedScale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy_FixedScale {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalePolicy_FixedScale();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScalePolicy_FixedScale {
    return { $type: ScalePolicy_FixedScale.$type, size: isSet(object.size) ? globalThis.Number(object.size) : 0 };
  },

  toJSON(message: ScalePolicy_FixedScale): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScalePolicy_FixedScale>, I>>(base?: I): ScalePolicy_FixedScale {
    return ScalePolicy_FixedScale.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScalePolicy_FixedScale>, I>>(object: I): ScalePolicy_FixedScale {
    const message = createBaseScalePolicy_FixedScale();
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy_FixedScale.$type, ScalePolicy_FixedScale);

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
