/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

/** A Registry resource. For more information, see the [Registry](/docs/container-registry/concepts/registry) section of the documentation. */
export interface Registry {
  $type: "yandex.cloud.containerregistry.v1.Registry";
  /** Output only. ID of the registry. */
  id: string;
  /** ID of the folder that the registry belongs to. */
  folderId: string;
  /** Name of the registry. */
  name: string;
  /** Output only. Status of the registry. */
  status: Registry_Status;
  /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
}

export enum Registry_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Registry is being created. */
  CREATING = 1,
  /** ACTIVE - Registry is ready to use. */
  ACTIVE = 2,
  /** DELETING - Registry is being deleted. */
  DELETING = 3,
  UNRECOGNIZED = -1,
}

export function registry_StatusFromJSON(object: any): Registry_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Registry_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Registry_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Registry_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Registry_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Registry_Status.UNRECOGNIZED;
  }
}

export function registry_StatusToJSON(object: Registry_Status): string {
  switch (object) {
    case Registry_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Registry_Status.CREATING:
      return "CREATING";
    case Registry_Status.ACTIVE:
      return "ACTIVE";
    case Registry_Status.DELETING:
      return "DELETING";
    case Registry_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Registry_LabelsEntry {
  $type: "yandex.cloud.containerregistry.v1.Registry.LabelsEntry";
  key: string;
  value: string;
}

function createBaseRegistry(): Registry {
  return {
    $type: "yandex.cloud.containerregistry.v1.Registry",
    id: "",
    folderId: "",
    name: "",
    status: 0,
    createdAt: undefined,
    labels: {},
  };
}

export const Registry = {
  $type: "yandex.cloud.containerregistry.v1.Registry" as const,

  encode(message: Registry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Registry_LabelsEntry.encode({
        $type: "yandex.cloud.containerregistry.v1.Registry.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Registry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistry();
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

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = Registry_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
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

  fromJSON(object: any): Registry {
    return {
      $type: Registry.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      status: isSet(object.status) ? registry_StatusFromJSON(object.status) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Registry): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.status !== 0) {
      obj.status = registry_StatusToJSON(message.status);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
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

  create<I extends Exact<DeepPartial<Registry>, I>>(base?: I): Registry {
    return Registry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Registry>, I>>(object: I): Registry {
    const message = createBaseRegistry();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.status = object.status ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(Registry.$type, Registry);

function createBaseRegistry_LabelsEntry(): Registry_LabelsEntry {
  return { $type: "yandex.cloud.containerregistry.v1.Registry.LabelsEntry", key: "", value: "" };
}

export const Registry_LabelsEntry = {
  $type: "yandex.cloud.containerregistry.v1.Registry.LabelsEntry" as const,

  encode(message: Registry_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Registry_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistry_LabelsEntry();
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

  fromJSON(object: any): Registry_LabelsEntry {
    return {
      $type: Registry_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Registry_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Registry_LabelsEntry>, I>>(base?: I): Registry_LabelsEntry {
    return Registry_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Registry_LabelsEntry>, I>>(object: I): Registry_LabelsEntry {
    const message = createBaseRegistry_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Registry_LabelsEntry.$type, Registry_LabelsEntry);

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
