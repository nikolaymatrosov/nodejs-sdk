/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Lock } from "./lock";
import { Template } from "./template";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface Instance {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Instance";
  id: string;
  cloudId: string;
  folderId: string;
  templateId: string;
  templateVersionId: string;
  description: string;
  startTime?: Date | undefined;
  endTime?: Date | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  state: Instance_State;
  locks: Lock[];
  licenseTemplate?: Template | undefined;
}

export enum Instance_State {
  STATE_UNSPECIFIED = 0,
  PENDING = 1,
  ACTIVE = 2,
  CANCELLED = 3,
  EXPIRED = 4,
  DEPRECATED = 5,
  DELETED = 6,
  UNRECOGNIZED = -1,
}

export function instance_StateFromJSON(object: any): Instance_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Instance_State.STATE_UNSPECIFIED;
    case 1:
    case "PENDING":
      return Instance_State.PENDING;
    case 2:
    case "ACTIVE":
      return Instance_State.ACTIVE;
    case 3:
    case "CANCELLED":
      return Instance_State.CANCELLED;
    case 4:
    case "EXPIRED":
      return Instance_State.EXPIRED;
    case 5:
    case "DEPRECATED":
      return Instance_State.DEPRECATED;
    case 6:
    case "DELETED":
      return Instance_State.DELETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Instance_State.UNRECOGNIZED;
  }
}

export function instance_StateToJSON(object: Instance_State): string {
  switch (object) {
    case Instance_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Instance_State.PENDING:
      return "PENDING";
    case Instance_State.ACTIVE:
      return "ACTIVE";
    case Instance_State.CANCELLED:
      return "CANCELLED";
    case Instance_State.EXPIRED:
      return "EXPIRED";
    case Instance_State.DEPRECATED:
      return "DEPRECATED";
    case Instance_State.DELETED:
      return "DELETED";
    case Instance_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseInstance(): Instance {
  return {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Instance",
    id: "",
    cloudId: "",
    folderId: "",
    templateId: "",
    templateVersionId: "",
    description: "",
    startTime: undefined,
    endTime: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    state: 0,
    locks: [],
    licenseTemplate: undefined,
  };
}

export const Instance = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Instance" as const,

  encode(message: Instance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.cloudId !== "") {
      writer.uint32(18).string(message.cloudId);
    }
    if (message.folderId !== "") {
      writer.uint32(26).string(message.folderId);
    }
    if (message.templateId !== "") {
      writer.uint32(34).string(message.templateId);
    }
    if (message.templateVersionId !== "") {
      writer.uint32(42).string(message.templateVersionId);
    }
    if (message.description !== "") {
      writer.uint32(114).string(message.description);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(88).int32(message.state);
    }
    for (const v of message.locks) {
      Lock.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.licenseTemplate !== undefined) {
      Template.encode(message.licenseTemplate, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance();
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

          message.folderId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.templateId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.templateVersionId = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.locks.push(Lock.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.licenseTemplate = Template.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Instance {
    return {
      $type: Instance.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      templateId: isSet(object.templateId) ? globalThis.String(object.templateId) : "",
      templateVersionId: isSet(object.templateVersionId) ? globalThis.String(object.templateVersionId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      state: isSet(object.state) ? instance_StateFromJSON(object.state) : 0,
      locks: globalThis.Array.isArray(object?.locks) ? object.locks.map((e: any) => Lock.fromJSON(e)) : [],
      licenseTemplate: isSet(object.licenseTemplate) ? Template.fromJSON(object.licenseTemplate) : undefined,
    };
  },

  toJSON(message: Instance): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.cloudId !== "") {
      obj.cloudId = message.cloudId;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.templateId !== "") {
      obj.templateId = message.templateId;
    }
    if (message.templateVersionId !== "") {
      obj.templateVersionId = message.templateVersionId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.endTime !== undefined) {
      obj.endTime = message.endTime.toISOString();
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.state !== 0) {
      obj.state = instance_StateToJSON(message.state);
    }
    if (message.locks?.length) {
      obj.locks = message.locks.map((e) => Lock.toJSON(e));
    }
    if (message.licenseTemplate !== undefined) {
      obj.licenseTemplate = Template.toJSON(message.licenseTemplate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Instance>, I>>(base?: I): Instance {
    return Instance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Instance>, I>>(object: I): Instance {
    const message = createBaseInstance();
    message.id = object.id ?? "";
    message.cloudId = object.cloudId ?? "";
    message.folderId = object.folderId ?? "";
    message.templateId = object.templateId ?? "";
    message.templateVersionId = object.templateVersionId ?? "";
    message.description = object.description ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.state = object.state ?? 0;
    message.locks = object.locks?.map((e) => Lock.fromPartial(e)) || [];
    message.licenseTemplate = (object.licenseTemplate !== undefined && object.licenseTemplate !== null)
      ? Template.fromPartial(object.licenseTemplate)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Instance.$type, Instance);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
