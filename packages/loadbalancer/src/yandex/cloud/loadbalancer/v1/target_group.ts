/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadbalancer.v1";

/** A TargetGroup resource. For more information, see [Target groups and resources](/docs/network-load-balancer/concepts/target-resources). */
export interface TargetGroup {
  $type: "yandex.cloud.loadbalancer.v1.TargetGroup";
  /** Output only. ID of the target group. */
  id: string;
  /** ID of the folder that the target group belongs to. */
  folderId: string;
  /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the target group.
   * The name is unique within the folder. 3-63 characters long.
   */
  name: string;
  /** Description of the target group. 0-256 characters long. */
  description: string;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** ID of the region where the target group resides. */
  regionId: string;
  /** A list of targets in the target group. */
  targets: Target[];
}

export interface TargetGroup_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.TargetGroup.LabelsEntry";
  key: string;
  value: string;
}

/** A Target resource. For more information, see [Target groups and resources](/docs/network-load-balancer/concepts/target-resources). */
export interface Target {
  $type: "yandex.cloud.loadbalancer.v1.Target";
  /**
   * ID of the subnet that targets are connected to.
   * All targets in the target group must be connected to the same subnet within a single availability zone.
   */
  subnetId: string;
  /** IP address of the target. */
  address: string;
}

function createBaseTargetGroup(): TargetGroup {
  return {
    $type: "yandex.cloud.loadbalancer.v1.TargetGroup",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    regionId: "",
    targets: [],
  };
}

export const TargetGroup = {
  $type: "yandex.cloud.loadbalancer.v1.TargetGroup" as const,

  encode(message: TargetGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      TargetGroup_LabelsEntry.encode({
        $type: "yandex.cloud.loadbalancer.v1.TargetGroup.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.regionId !== "") {
      writer.uint32(58).string(message.regionId);
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetGroup();
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

          const entry6 = TargetGroup_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.regionId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.targets.push(Target.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetGroup {
    return {
      $type: TargetGroup.$type,
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
      regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
      targets: globalThis.Array.isArray(object?.targets) ? object.targets.map((e: any) => Target.fromJSON(e)) : [],
    };
  },

  toJSON(message: TargetGroup): unknown {
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
    if (message.regionId !== "") {
      obj.regionId = message.regionId;
    }
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) => Target.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetGroup>, I>>(base?: I): TargetGroup {
    return TargetGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetGroup>, I>>(object: I): TargetGroup {
    const message = createBaseTargetGroup();
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
    message.regionId = object.regionId ?? "";
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TargetGroup.$type, TargetGroup);

function createBaseTargetGroup_LabelsEntry(): TargetGroup_LabelsEntry {
  return { $type: "yandex.cloud.loadbalancer.v1.TargetGroup.LabelsEntry", key: "", value: "" };
}

export const TargetGroup_LabelsEntry = {
  $type: "yandex.cloud.loadbalancer.v1.TargetGroup.LabelsEntry" as const,

  encode(message: TargetGroup_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetGroup_LabelsEntry();
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

  fromJSON(object: any): TargetGroup_LabelsEntry {
    return {
      $type: TargetGroup_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: TargetGroup_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetGroup_LabelsEntry>, I>>(base?: I): TargetGroup_LabelsEntry {
    return TargetGroup_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetGroup_LabelsEntry>, I>>(object: I): TargetGroup_LabelsEntry {
    const message = createBaseTargetGroup_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(TargetGroup_LabelsEntry.$type, TargetGroup_LabelsEntry);

function createBaseTarget(): Target {
  return { $type: "yandex.cloud.loadbalancer.v1.Target", subnetId: "", address: "" };
}

export const Target = {
  $type: "yandex.cloud.loadbalancer.v1.Target" as const,

  encode(message: Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Target {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Target {
    return {
      $type: Target.$type,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Target>, I>>(base?: I): Target {
    return Target.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Target>, I>>(object: I): Target {
    const message = createBaseTarget();
    message.subnetId = object.subnetId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(Target.$type, Target);

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
