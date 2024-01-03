/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/**
 * A target group resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/target-group).
 */
export interface TargetGroup {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup";
  /** ID of the target group. Generated at creation time. */
  id: string;
  /** Name of the target group. The name is unique within the folder. */
  name: string;
  /** Description of the target group. */
  description: string;
  /** ID of the folder that the target group belongs to. */
  folderId: string;
  /**
   * Target group labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /** List of targets in the target group. */
  targets: Target[];
  /** Creation timestamp. */
  createdAt?: Date | undefined;
}

export interface TargetGroup_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry";
  key: string;
  value: string;
}

/**
 * A target resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/target-group).
 */
export interface Target {
  $type: "yandex.cloud.apploadbalancer.v1.Target";
  /** IP address of the target. */
  ipAddress?:
    | string
    | undefined;
  /** ID of the subnet that the target is connected to. */
  subnetId: string;
  /**
   * If set, will not require `subnet_id` to validate the target.
   * Instead, the address should belong to one of the following ranges:
   * 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
   * Only one of `subnet_id` or `private_ipv4_address` should be set.
   */
  privateIpv4Address: boolean;
}

function createBaseTargetGroup(): TargetGroup {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroup",
    id: "",
    name: "",
    description: "",
    folderId: "",
    labels: {},
    targets: [],
    createdAt: undefined,
  };
}

export const TargetGroup = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup" as const,

  encode(message: TargetGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.folderId !== "") {
      writer.uint32(34).string(message.folderId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      TargetGroup_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
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

          message.folderId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = TargetGroup_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.targets.push(Target.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      targets: globalThis.Array.isArray(object?.targets) ? object.targets.map((e: any) => Target.fromJSON(e)) : [],
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: TargetGroup): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
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
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) => Target.toJSON(e));
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetGroup>, I>>(base?: I): TargetGroup {
    return TargetGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetGroup>, I>>(object: I): TargetGroup {
    const message = createBaseTargetGroup();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.folderId = object.folderId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(TargetGroup.$type, TargetGroup);

function createBaseTargetGroup_LabelsEntry(): TargetGroup_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry", key: "", value: "" };
}

export const TargetGroup_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry" as const,

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
  return {
    $type: "yandex.cloud.apploadbalancer.v1.Target",
    ipAddress: undefined,
    subnetId: "",
    privateIpv4Address: false,
  };
}

export const Target = {
  $type: "yandex.cloud.apploadbalancer.v1.Target" as const,

  encode(message: Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipAddress !== undefined) {
      writer.uint32(10).string(message.ipAddress);
    }
    if (message.subnetId !== "") {
      writer.uint32(26).string(message.subnetId);
    }
    if (message.privateIpv4Address === true) {
      writer.uint32(32).bool(message.privateIpv4Address);
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

          message.ipAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.privateIpv4Address = reader.bool();
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
      ipAddress: isSet(object.ipAddress) ? globalThis.String(object.ipAddress) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      privateIpv4Address: isSet(object.privateIpv4Address) ? globalThis.Boolean(object.privateIpv4Address) : false,
    };
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    if (message.ipAddress !== undefined) {
      obj.ipAddress = message.ipAddress;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.privateIpv4Address === true) {
      obj.privateIpv4Address = message.privateIpv4Address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Target>, I>>(base?: I): Target {
    return Target.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Target>, I>>(object: I): Target {
    const message = createBaseTarget();
    message.ipAddress = object.ipAddress ?? undefined;
    message.subnetId = object.subnetId ?? "";
    message.privateIpv4Address = object.privateIpv4Address ?? false;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
