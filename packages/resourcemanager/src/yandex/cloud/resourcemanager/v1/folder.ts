/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.resourcemanager.v1";

/** A Folder resource. For more information, see [Folder](/docs/resource-manager/concepts/resources-hierarchy#folder). */
export interface Folder {
  $type: "yandex.cloud.resourcemanager.v1.Folder";
  /** ID of the folder. */
  id: string;
  /** ID of the cloud that the folder belongs to. */
  cloudId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the folder.
   * The name is unique within the cloud. 3-63 characters long.
   */
  name: string;
  /** Description of the folder. 0-256 characters long. */
  description: string;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** Status of the folder. */
  status: Folder_Status;
}

export enum Folder_Status {
  STATUS_UNSPECIFIED = 0,
  /** ACTIVE - The folder is active. */
  ACTIVE = 1,
  /** DELETING - The folder is being deleted. */
  DELETING = 2,
  /** PENDING_DELETION - Stopping folder resources and waiting for the deletion start timestamp. */
  PENDING_DELETION = 3,
  UNRECOGNIZED = -1,
}

export function folder_StatusFromJSON(object: any): Folder_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Folder_Status.STATUS_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return Folder_Status.ACTIVE;
    case 2:
    case "DELETING":
      return Folder_Status.DELETING;
    case 3:
    case "PENDING_DELETION":
      return Folder_Status.PENDING_DELETION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Folder_Status.UNRECOGNIZED;
  }
}

export function folder_StatusToJSON(object: Folder_Status): string {
  switch (object) {
    case Folder_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Folder_Status.ACTIVE:
      return "ACTIVE";
    case Folder_Status.DELETING:
      return "DELETING";
    case Folder_Status.PENDING_DELETION:
      return "PENDING_DELETION";
    case Folder_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Folder_LabelsEntry {
  $type: "yandex.cloud.resourcemanager.v1.Folder.LabelsEntry";
  key: string;
  value: string;
}

function createBaseFolder(): Folder {
  return {
    $type: "yandex.cloud.resourcemanager.v1.Folder",
    id: "",
    cloudId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
  };
}

export const Folder = {
  $type: "yandex.cloud.resourcemanager.v1.Folder" as const,

  encode(message: Folder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.cloudId !== "") {
      writer.uint32(18).string(message.cloudId);
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
      Folder_LabelsEntry.encode(
        { $type: "yandex.cloud.resourcemanager.v1.Folder.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Folder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFolder();
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

          message.cloudId = reader.string();
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

          const entry6 = Folder_LabelsEntry.decode(reader, reader.uint32());
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Folder {
    return {
      $type: Folder.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      status: isSet(object.status) ? folder_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Folder): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.cloudId !== "") {
      obj.cloudId = message.cloudId;
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
      obj.status = folder_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Folder>, I>>(base?: I): Folder {
    return Folder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Folder>, I>>(object: I): Folder {
    const message = createBaseFolder();
    message.id = object.id ?? "";
    message.cloudId = object.cloudId ?? "";
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
    return message;
  },
};

messageTypeRegistry.set(Folder.$type, Folder);

function createBaseFolder_LabelsEntry(): Folder_LabelsEntry {
  return { $type: "yandex.cloud.resourcemanager.v1.Folder.LabelsEntry", key: "", value: "" };
}

export const Folder_LabelsEntry = {
  $type: "yandex.cloud.resourcemanager.v1.Folder.LabelsEntry" as const,

  encode(message: Folder_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Folder_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFolder_LabelsEntry();
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

  fromJSON(object: any): Folder_LabelsEntry {
    return {
      $type: Folder_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Folder_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Folder_LabelsEntry>, I>>(base?: I): Folder_LabelsEntry {
    return Folder_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Folder_LabelsEntry>, I>>(object: I): Folder_LabelsEntry {
    const message = createBaseFolder_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Folder_LabelsEntry.$type, Folder_LabelsEntry);

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
