/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.iot.broker.v1";

/** A broker. */
export interface Broker {
  $type: "yandex.cloud.iot.broker.v1.Broker";
  /** ID of the broker. */
  id: string;
  /** ID of the folder that the broker belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the broker. The name is unique within the folder. */
  name: string;
  /** Description of the broker. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** Status of the broker. */
  status: Broker_Status;
}

export enum Broker_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Broker is being created. */
  CREATING = 1,
  /** ACTIVE - Broker is ready to use. */
  ACTIVE = 2,
  /** DELETING - Broker is being deleted. */
  DELETING = 3,
  UNRECOGNIZED = -1,
}

export function broker_StatusFromJSON(object: any): Broker_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Broker_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Broker_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Broker_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Broker_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Broker_Status.UNRECOGNIZED;
  }
}

export function broker_StatusToJSON(object: Broker_Status): string {
  switch (object) {
    case Broker_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Broker_Status.CREATING:
      return "CREATING";
    case Broker_Status.ACTIVE:
      return "ACTIVE";
    case Broker_Status.DELETING:
      return "DELETING";
    case Broker_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Broker_LabelsEntry {
  $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry";
  key: string;
  value: string;
}

/** A broker certificate. */
export interface BrokerCertificate {
  $type: "yandex.cloud.iot.broker.v1.BrokerCertificate";
  /** ID of the broker that the certificate belongs to. */
  brokerId: string;
  /** SHA256 hash of the certificates. */
  fingerprint: string;
  /** Public part of the certificate. */
  certificateData: string;
  /** Creation timestamp. */
  createdAt?: Date | undefined;
}

/** A broker password. */
export interface BrokerPassword {
  $type: "yandex.cloud.iot.broker.v1.BrokerPassword";
  /** ID of the broker that the password belongs to. */
  brokerId: string;
  /** ID of the password. */
  id: string;
  /** Creation timestamp. */
  createdAt?: Date | undefined;
}

function createBaseBroker(): Broker {
  return {
    $type: "yandex.cloud.iot.broker.v1.Broker",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
  };
}

export const Broker = {
  $type: "yandex.cloud.iot.broker.v1.Broker" as const,

  encode(message: Broker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Broker_LabelsEntry.encode(
        { $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Broker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroker();
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

          const entry6 = Broker_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): Broker {
    return {
      $type: Broker.$type,
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
      status: isSet(object.status) ? broker_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Broker): unknown {
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
      obj.status = broker_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Broker>, I>>(base?: I): Broker {
    return Broker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Broker>, I>>(object: I): Broker {
    const message = createBaseBroker();
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
    return message;
  },
};

messageTypeRegistry.set(Broker.$type, Broker);

function createBaseBroker_LabelsEntry(): Broker_LabelsEntry {
  return { $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry", key: "", value: "" };
}

export const Broker_LabelsEntry = {
  $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry" as const,

  encode(message: Broker_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Broker_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroker_LabelsEntry();
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

  fromJSON(object: any): Broker_LabelsEntry {
    return {
      $type: Broker_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Broker_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Broker_LabelsEntry>, I>>(base?: I): Broker_LabelsEntry {
    return Broker_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Broker_LabelsEntry>, I>>(object: I): Broker_LabelsEntry {
    const message = createBaseBroker_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Broker_LabelsEntry.$type, Broker_LabelsEntry);

function createBaseBrokerCertificate(): BrokerCertificate {
  return {
    $type: "yandex.cloud.iot.broker.v1.BrokerCertificate",
    brokerId: "",
    fingerprint: "",
    certificateData: "",
    createdAt: undefined,
  };
}

export const BrokerCertificate = {
  $type: "yandex.cloud.iot.broker.v1.BrokerCertificate" as const,

  encode(message: BrokerCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    if (message.certificateData !== "") {
      writer.uint32(26).string(message.certificateData);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrokerCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrokerCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fingerprint = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.certificateData = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): BrokerCertificate {
    return {
      $type: BrokerCertificate.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
      certificateData: isSet(object.certificateData) ? globalThis.String(object.certificateData) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: BrokerCertificate): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.fingerprint !== "") {
      obj.fingerprint = message.fingerprint;
    }
    if (message.certificateData !== "") {
      obj.certificateData = message.certificateData;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BrokerCertificate>, I>>(base?: I): BrokerCertificate {
    return BrokerCertificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BrokerCertificate>, I>>(object: I): BrokerCertificate {
    const message = createBaseBrokerCertificate();
    message.brokerId = object.brokerId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    message.certificateData = object.certificateData ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BrokerCertificate.$type, BrokerCertificate);

function createBaseBrokerPassword(): BrokerPassword {
  return { $type: "yandex.cloud.iot.broker.v1.BrokerPassword", brokerId: "", id: "", createdAt: undefined };
}

export const BrokerPassword = {
  $type: "yandex.cloud.iot.broker.v1.BrokerPassword" as const,

  encode(message: BrokerPassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrokerPassword {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrokerPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): BrokerPassword {
    return {
      $type: BrokerPassword.$type,
      brokerId: isSet(object.brokerId) ? globalThis.String(object.brokerId) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: BrokerPassword): unknown {
    const obj: any = {};
    if (message.brokerId !== "") {
      obj.brokerId = message.brokerId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BrokerPassword>, I>>(base?: I): BrokerPassword {
    return BrokerPassword.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BrokerPassword>, I>>(object: I): BrokerPassword {
    const message = createBaseBrokerPassword();
    message.brokerId = object.brokerId ?? "";
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BrokerPassword.$type, BrokerPassword);

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
