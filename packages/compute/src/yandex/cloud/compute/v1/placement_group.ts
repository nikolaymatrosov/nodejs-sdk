/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface PlacementGroup {
  $type: "yandex.cloud.compute.v1.PlacementGroup";
  /** ID of the placement group. Generated at creation time. */
  id: string;
  /** ID of the folder that the placement group belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the placement group.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the placement group. 0-256 characters long. */
  description: string;
  /** Placement group labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * Anti-affinity placement strategy (`spread`). Instances are distributed
   * over distinct failure domains.
   */
  spreadPlacementStrategy?: SpreadPlacementStrategy | undefined;
  partitionPlacementStrategy?: PartitionPlacementStrategy | undefined;
}

export interface PlacementGroup_LabelsEntry {
  $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry";
  key: string;
  value: string;
}

/**
 * This is an empty structure that must be passed to explicitly
 * specify the required placement strategy.
 */
export interface SpreadPlacementStrategy {
  $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy";
}

export interface PartitionPlacementStrategy {
  $type: "yandex.cloud.compute.v1.PartitionPlacementStrategy";
  partitions: number;
}

function createBasePlacementGroup(): PlacementGroup {
  return {
    $type: "yandex.cloud.compute.v1.PlacementGroup",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    spreadPlacementStrategy: undefined,
    partitionPlacementStrategy: undefined,
  };
}

export const PlacementGroup = {
  $type: "yandex.cloud.compute.v1.PlacementGroup" as const,

  encode(message: PlacementGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      PlacementGroup_LabelsEntry.encode({
        $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.spreadPlacementStrategy !== undefined) {
      SpreadPlacementStrategy.encode(message.spreadPlacementStrategy, writer.uint32(58).fork()).ldelim();
    }
    if (message.partitionPlacementStrategy !== undefined) {
      PartitionPlacementStrategy.encode(message.partitionPlacementStrategy, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlacementGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacementGroup();
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

          const entry6 = PlacementGroup_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.spreadPlacementStrategy = SpreadPlacementStrategy.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.partitionPlacementStrategy = PartitionPlacementStrategy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlacementGroup {
    return {
      $type: PlacementGroup.$type,
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
      spreadPlacementStrategy: isSet(object.spreadPlacementStrategy)
        ? SpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
        : undefined,
      partitionPlacementStrategy: isSet(object.partitionPlacementStrategy)
        ? PartitionPlacementStrategy.fromJSON(object.partitionPlacementStrategy)
        : undefined,
    };
  },

  toJSON(message: PlacementGroup): unknown {
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
    if (message.spreadPlacementStrategy !== undefined) {
      obj.spreadPlacementStrategy = SpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy);
    }
    if (message.partitionPlacementStrategy !== undefined) {
      obj.partitionPlacementStrategy = PartitionPlacementStrategy.toJSON(message.partitionPlacementStrategy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlacementGroup>, I>>(base?: I): PlacementGroup {
    return PlacementGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlacementGroup>, I>>(object: I): PlacementGroup {
    const message = createBasePlacementGroup();
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
    message.spreadPlacementStrategy =
      (object.spreadPlacementStrategy !== undefined && object.spreadPlacementStrategy !== null)
        ? SpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy)
        : undefined;
    message.partitionPlacementStrategy =
      (object.partitionPlacementStrategy !== undefined && object.partitionPlacementStrategy !== null)
        ? PartitionPlacementStrategy.fromPartial(object.partitionPlacementStrategy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PlacementGroup.$type, PlacementGroup);

function createBasePlacementGroup_LabelsEntry(): PlacementGroup_LabelsEntry {
  return { $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry", key: "", value: "" };
}

export const PlacementGroup_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry" as const,

  encode(message: PlacementGroup_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlacementGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacementGroup_LabelsEntry();
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

  fromJSON(object: any): PlacementGroup_LabelsEntry {
    return {
      $type: PlacementGroup_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: PlacementGroup_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlacementGroup_LabelsEntry>, I>>(base?: I): PlacementGroup_LabelsEntry {
    return PlacementGroup_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlacementGroup_LabelsEntry>, I>>(object: I): PlacementGroup_LabelsEntry {
    const message = createBasePlacementGroup_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(PlacementGroup_LabelsEntry.$type, PlacementGroup_LabelsEntry);

function createBaseSpreadPlacementStrategy(): SpreadPlacementStrategy {
  return { $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy" };
}

export const SpreadPlacementStrategy = {
  $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy" as const,

  encode(_: SpreadPlacementStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpreadPlacementStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpreadPlacementStrategy();
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

  fromJSON(_: any): SpreadPlacementStrategy {
    return { $type: SpreadPlacementStrategy.$type };
  },

  toJSON(_: SpreadPlacementStrategy): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SpreadPlacementStrategy>, I>>(base?: I): SpreadPlacementStrategy {
    return SpreadPlacementStrategy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SpreadPlacementStrategy>, I>>(_: I): SpreadPlacementStrategy {
    const message = createBaseSpreadPlacementStrategy();
    return message;
  },
};

messageTypeRegistry.set(SpreadPlacementStrategy.$type, SpreadPlacementStrategy);

function createBasePartitionPlacementStrategy(): PartitionPlacementStrategy {
  return { $type: "yandex.cloud.compute.v1.PartitionPlacementStrategy", partitions: 0 };
}

export const PartitionPlacementStrategy = {
  $type: "yandex.cloud.compute.v1.PartitionPlacementStrategy" as const,

  encode(message: PartitionPlacementStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partitions !== 0) {
      writer.uint32(8).int64(message.partitions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartitionPlacementStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartitionPlacementStrategy();
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

  fromJSON(object: any): PartitionPlacementStrategy {
    return {
      $type: PartitionPlacementStrategy.$type,
      partitions: isSet(object.partitions) ? globalThis.Number(object.partitions) : 0,
    };
  },

  toJSON(message: PartitionPlacementStrategy): unknown {
    const obj: any = {};
    if (message.partitions !== 0) {
      obj.partitions = Math.round(message.partitions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PartitionPlacementStrategy>, I>>(base?: I): PartitionPlacementStrategy {
    return PartitionPlacementStrategy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PartitionPlacementStrategy>, I>>(object: I): PartitionPlacementStrategy {
    const message = createBasePartitionPlacementStrategy();
    message.partitions = object.partitions ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PartitionPlacementStrategy.$type, PartitionPlacementStrategy);

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
