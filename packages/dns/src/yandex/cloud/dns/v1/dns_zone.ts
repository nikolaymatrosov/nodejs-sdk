/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.dns.v1";

/** A DNS zone. For details about the concept, see [DNS zones](/docs/dns/concepts/dns-zone). */
export interface DnsZone {
  $type: "yandex.cloud.dns.v1.DnsZone";
  /** ID of the DNS zone. Generated at creation time. */
  id: string;
  /** ID of the folder that the DNS zone belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the DNS zone.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the DNS zone. */
  description: string;
  /** DNS zone labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** DNS zone suffix. */
  zone: string;
  /**
   * Privately visible zone settings.
   * Specifies whether records within the zone are visible from a VPC networks only.
   */
  privateVisibility?:
    | PrivateVisibility
    | undefined;
  /**
   * Publicly visible zone settings.
   * Indicates whether records within the zone are publicly visible.
   */
  publicVisibility?: PublicVisibility | undefined;
}

export interface DnsZone_LabelsEntry {
  $type: "yandex.cloud.dns.v1.DnsZone.LabelsEntry";
  key: string;
  value: string;
}

/** A record set. For details about the concept, see [Resource record](/docs/dns/concepts/resource-record). */
export interface RecordSet {
  $type: "yandex.cloud.dns.v1.RecordSet";
  /** Domain name. */
  name: string;
  /** Record type. */
  type: string;
  /** Time to live in seconds. */
  ttl: number;
  /** Data of the record set. */
  data: string[];
}

/** Configuration for privately visible zones. */
export interface PrivateVisibility {
  $type: "yandex.cloud.dns.v1.PrivateVisibility";
  /** Network IDs. */
  networkIds: string[];
}

/** Configuration for publicly visible zones. */
export interface PublicVisibility {
  $type: "yandex.cloud.dns.v1.PublicVisibility";
}

function createBaseDnsZone(): DnsZone {
  return {
    $type: "yandex.cloud.dns.v1.DnsZone",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    zone: "",
    privateVisibility: undefined,
    publicVisibility: undefined,
  };
}

export const DnsZone = {
  $type: "yandex.cloud.dns.v1.DnsZone" as const,

  encode(message: DnsZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      DnsZone_LabelsEntry.encode(
        { $type: "yandex.cloud.dns.v1.DnsZone.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.zone !== "") {
      writer.uint32(58).string(message.zone);
    }
    if (message.privateVisibility !== undefined) {
      PrivateVisibility.encode(message.privateVisibility, writer.uint32(66).fork()).ldelim();
    }
    if (message.publicVisibility !== undefined) {
      PublicVisibility.encode(message.publicVisibility, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DnsZone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDnsZone();
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

          const entry6 = DnsZone_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.zone = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.privateVisibility = PrivateVisibility.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.publicVisibility = PublicVisibility.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DnsZone {
    return {
      $type: DnsZone.$type,
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
      zone: isSet(object.zone) ? globalThis.String(object.zone) : "",
      privateVisibility: isSet(object.privateVisibility)
        ? PrivateVisibility.fromJSON(object.privateVisibility)
        : undefined,
      publicVisibility: isSet(object.publicVisibility) ? PublicVisibility.fromJSON(object.publicVisibility) : undefined,
    };
  },

  toJSON(message: DnsZone): unknown {
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
    if (message.zone !== "") {
      obj.zone = message.zone;
    }
    if (message.privateVisibility !== undefined) {
      obj.privateVisibility = PrivateVisibility.toJSON(message.privateVisibility);
    }
    if (message.publicVisibility !== undefined) {
      obj.publicVisibility = PublicVisibility.toJSON(message.publicVisibility);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DnsZone>, I>>(base?: I): DnsZone {
    return DnsZone.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DnsZone>, I>>(object: I): DnsZone {
    const message = createBaseDnsZone();
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
    message.zone = object.zone ?? "";
    message.privateVisibility = (object.privateVisibility !== undefined && object.privateVisibility !== null)
      ? PrivateVisibility.fromPartial(object.privateVisibility)
      : undefined;
    message.publicVisibility = (object.publicVisibility !== undefined && object.publicVisibility !== null)
      ? PublicVisibility.fromPartial(object.publicVisibility)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(DnsZone.$type, DnsZone);

function createBaseDnsZone_LabelsEntry(): DnsZone_LabelsEntry {
  return { $type: "yandex.cloud.dns.v1.DnsZone.LabelsEntry", key: "", value: "" };
}

export const DnsZone_LabelsEntry = {
  $type: "yandex.cloud.dns.v1.DnsZone.LabelsEntry" as const,

  encode(message: DnsZone_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DnsZone_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDnsZone_LabelsEntry();
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

  fromJSON(object: any): DnsZone_LabelsEntry {
    return {
      $type: DnsZone_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: DnsZone_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DnsZone_LabelsEntry>, I>>(base?: I): DnsZone_LabelsEntry {
    return DnsZone_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DnsZone_LabelsEntry>, I>>(object: I): DnsZone_LabelsEntry {
    const message = createBaseDnsZone_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(DnsZone_LabelsEntry.$type, DnsZone_LabelsEntry);

function createBaseRecordSet(): RecordSet {
  return { $type: "yandex.cloud.dns.v1.RecordSet", name: "", type: "", ttl: 0, data: [] };
}

export const RecordSet = {
  $type: "yandex.cloud.dns.v1.RecordSet" as const,

  encode(message: RecordSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.ttl !== 0) {
      writer.uint32(24).int64(message.ttl);
    }
    for (const v of message.data) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ttl = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordSet {
    return {
      $type: RecordSet.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      ttl: isSet(object.ttl) ? globalThis.Number(object.ttl) : 0,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: RecordSet): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.ttl !== 0) {
      obj.ttl = Math.round(message.ttl);
    }
    if (message.data?.length) {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordSet>, I>>(base?: I): RecordSet {
    return RecordSet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordSet>, I>>(object: I): RecordSet {
    const message = createBaseRecordSet();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.ttl = object.ttl ?? 0;
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RecordSet.$type, RecordSet);

function createBasePrivateVisibility(): PrivateVisibility {
  return { $type: "yandex.cloud.dns.v1.PrivateVisibility", networkIds: [] };
}

export const PrivateVisibility = {
  $type: "yandex.cloud.dns.v1.PrivateVisibility" as const,

  encode(message: PrivateVisibility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.networkIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrivateVisibility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrivateVisibility {
    return {
      $type: PrivateVisibility.$type,
      networkIds: globalThis.Array.isArray(object?.networkIds)
        ? object.networkIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: PrivateVisibility): unknown {
    const obj: any = {};
    if (message.networkIds?.length) {
      obj.networkIds = message.networkIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrivateVisibility>, I>>(base?: I): PrivateVisibility {
    return PrivateVisibility.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrivateVisibility>, I>>(object: I): PrivateVisibility {
    const message = createBasePrivateVisibility();
    message.networkIds = object.networkIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(PrivateVisibility.$type, PrivateVisibility);

function createBasePublicVisibility(): PublicVisibility {
  return { $type: "yandex.cloud.dns.v1.PublicVisibility" };
}

export const PublicVisibility = {
  $type: "yandex.cloud.dns.v1.PublicVisibility" as const,

  encode(_: PublicVisibility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublicVisibility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicVisibility();
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

  fromJSON(_: any): PublicVisibility {
    return { $type: PublicVisibility.$type };
  },

  toJSON(_: PublicVisibility): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PublicVisibility>, I>>(base?: I): PublicVisibility {
    return PublicVisibility.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublicVisibility>, I>>(_: I): PublicVisibility {
    const message = createBasePublicVisibility();
    return message;
  },
};

messageTypeRegistry.set(PublicVisibility.$type, PublicVisibility);

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
