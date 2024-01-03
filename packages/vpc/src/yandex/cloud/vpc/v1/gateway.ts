/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.vpc.v1";

/** A Gateway resource. For more information, see [Gateway](/docs/vpc/concepts/gateways). */
export interface Gateway {
  $type: "yandex.cloud.vpc.v1.Gateway";
  /** ID of the gateway. Generated at creation time. */
  id: string;
  /** ID of the folder that the gateway belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the gateway.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the gateway. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  sharedEgressGateway?: SharedEgressGateway | undefined;
}

export interface Gateway_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry";
  key: string;
  value: string;
}

/** Shared Egress Gateway configuration */
export interface SharedEgressGateway {
  $type: "yandex.cloud.vpc.v1.SharedEgressGateway";
}

function createBaseGateway(): Gateway {
  return {
    $type: "yandex.cloud.vpc.v1.Gateway",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    sharedEgressGateway: undefined,
  };
}

export const Gateway = {
  $type: "yandex.cloud.vpc.v1.Gateway" as const,

  encode(message: Gateway, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Gateway_LabelsEntry.encode(
        { $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.sharedEgressGateway !== undefined) {
      SharedEgressGateway.encode(message.sharedEgressGateway, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Gateway {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGateway();
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

          const entry6 = Gateway_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sharedEgressGateway = SharedEgressGateway.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Gateway {
    return {
      $type: Gateway.$type,
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
      sharedEgressGateway: isSet(object.sharedEgressGateway)
        ? SharedEgressGateway.fromJSON(object.sharedEgressGateway)
        : undefined,
    };
  },

  toJSON(message: Gateway): unknown {
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
    if (message.sharedEgressGateway !== undefined) {
      obj.sharedEgressGateway = SharedEgressGateway.toJSON(message.sharedEgressGateway);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Gateway>, I>>(base?: I): Gateway {
    return Gateway.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Gateway>, I>>(object: I): Gateway {
    const message = createBaseGateway();
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
    message.sharedEgressGateway = (object.sharedEgressGateway !== undefined && object.sharedEgressGateway !== null)
      ? SharedEgressGateway.fromPartial(object.sharedEgressGateway)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Gateway.$type, Gateway);

function createBaseGateway_LabelsEntry(): Gateway_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry", key: "", value: "" };
}

export const Gateway_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry" as const,

  encode(message: Gateway_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Gateway_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGateway_LabelsEntry();
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

  fromJSON(object: any): Gateway_LabelsEntry {
    return {
      $type: Gateway_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Gateway_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Gateway_LabelsEntry>, I>>(base?: I): Gateway_LabelsEntry {
    return Gateway_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Gateway_LabelsEntry>, I>>(object: I): Gateway_LabelsEntry {
    const message = createBaseGateway_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Gateway_LabelsEntry.$type, Gateway_LabelsEntry);

function createBaseSharedEgressGateway(): SharedEgressGateway {
  return { $type: "yandex.cloud.vpc.v1.SharedEgressGateway" };
}

export const SharedEgressGateway = {
  $type: "yandex.cloud.vpc.v1.SharedEgressGateway" as const,

  encode(_: SharedEgressGateway, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SharedEgressGateway {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSharedEgressGateway();
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

  fromJSON(_: any): SharedEgressGateway {
    return { $type: SharedEgressGateway.$type };
  },

  toJSON(_: SharedEgressGateway): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedEgressGateway>, I>>(base?: I): SharedEgressGateway {
    return SharedEgressGateway.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SharedEgressGateway>, I>>(_: I): SharedEgressGateway {
    const message = createBaseSharedEgressGateway();
    return message;
  },
};

messageTypeRegistry.set(SharedEgressGateway.$type, SharedEgressGateway);

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
