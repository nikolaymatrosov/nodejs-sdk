/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.vpc.v1";

/** An Address resource. For more information, see [Address](/docs/vpc/concepts/address). */
export interface Address {
  $type: "yandex.cloud.vpc.v1.Address";
  /** ID of the address. Generated at creation time. */
  id: string;
  /** ID of the folder that the address belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Name of the address.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the address. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  externalIpv4Address?:
    | ExternalIpv4Address
    | undefined;
  /** Specifies if address is reserved or not. */
  reserved: boolean;
  /** Specifies if address is used or not. */
  used: boolean;
  /** Type of the IP address. */
  type: Address_Type;
  /** Vervion of the IP address. */
  ipVersion: Address_IpVersion;
  /** Specifies if address protected from deletion. */
  deletionProtection: boolean;
}

export enum Address_Type {
  TYPE_UNSPECIFIED = 0,
  /** INTERNAL - Internal IP address. */
  INTERNAL = 1,
  /** EXTERNAL - Public IP address. */
  EXTERNAL = 2,
  UNRECOGNIZED = -1,
}

export function address_TypeFromJSON(object: any): Address_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Address_Type.TYPE_UNSPECIFIED;
    case 1:
    case "INTERNAL":
      return Address_Type.INTERNAL;
    case 2:
    case "EXTERNAL":
      return Address_Type.EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Address_Type.UNRECOGNIZED;
  }
}

export function address_TypeToJSON(object: Address_Type): string {
  switch (object) {
    case Address_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Address_Type.INTERNAL:
      return "INTERNAL";
    case Address_Type.EXTERNAL:
      return "EXTERNAL";
    case Address_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Address_IpVersion {
  IP_VERSION_UNSPECIFIED = 0,
  /** IPV4 - IPv4 address. */
  IPV4 = 1,
  /** IPV6 - IPv6 address. */
  IPV6 = 2,
  UNRECOGNIZED = -1,
}

export function address_IpVersionFromJSON(object: any): Address_IpVersion {
  switch (object) {
    case 0:
    case "IP_VERSION_UNSPECIFIED":
      return Address_IpVersion.IP_VERSION_UNSPECIFIED;
    case 1:
    case "IPV4":
      return Address_IpVersion.IPV4;
    case 2:
    case "IPV6":
      return Address_IpVersion.IPV6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Address_IpVersion.UNRECOGNIZED;
  }
}

export function address_IpVersionToJSON(object: Address_IpVersion): string {
  switch (object) {
    case Address_IpVersion.IP_VERSION_UNSPECIFIED:
      return "IP_VERSION_UNSPECIFIED";
    case Address_IpVersion.IPV4:
      return "IPV4";
    case Address_IpVersion.IPV6:
      return "IPV6";
    case Address_IpVersion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Address_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.Address.LabelsEntry";
  key: string;
  value: string;
}

export interface ExternalIpv4Address {
  $type: "yandex.cloud.vpc.v1.ExternalIpv4Address";
  /** Value of address. */
  address: string;
  /** Availability zone from which the address will be allocated. */
  zoneId: string;
  /** Parameters of the allocated address, for example DDoS Protection. */
  requirements?: AddressRequirements | undefined;
}

export interface AddressRequirements {
  $type: "yandex.cloud.vpc.v1.AddressRequirements";
  /** DDoS protection provider ID. */
  ddosProtectionProvider: string;
  /** Capability to send SMTP traffic. */
  outgoingSmtpCapability: string;
}

function createBaseAddress(): Address {
  return {
    $type: "yandex.cloud.vpc.v1.Address",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    externalIpv4Address: undefined,
    reserved: false,
    used: false,
    type: 0,
    ipVersion: 0,
    deletionProtection: false,
  };
}

export const Address = {
  $type: "yandex.cloud.vpc.v1.Address" as const,

  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Address_LabelsEntry.encode(
        { $type: "yandex.cloud.vpc.v1.Address.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.externalIpv4Address !== undefined) {
      ExternalIpv4Address.encode(message.externalIpv4Address, writer.uint32(58).fork()).ldelim();
    }
    if (message.reserved === true) {
      writer.uint32(120).bool(message.reserved);
    }
    if (message.used === true) {
      writer.uint32(128).bool(message.used);
    }
    if (message.type !== 0) {
      writer.uint32(136).int32(message.type);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(144).int32(message.ipVersion);
    }
    if (message.deletionProtection === true) {
      writer.uint32(152).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
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

          const entry6 = Address_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.externalIpv4Address = ExternalIpv4Address.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.reserved = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.used = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.ipVersion = reader.int32() as any;
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.deletionProtection = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      $type: Address.$type,
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
      externalIpv4Address: isSet(object.externalIpv4Address)
        ? ExternalIpv4Address.fromJSON(object.externalIpv4Address)
        : undefined,
      reserved: isSet(object.reserved) ? globalThis.Boolean(object.reserved) : false,
      used: isSet(object.used) ? globalThis.Boolean(object.used) : false,
      type: isSet(object.type) ? address_TypeFromJSON(object.type) : 0,
      ipVersion: isSet(object.ipVersion) ? address_IpVersionFromJSON(object.ipVersion) : 0,
      deletionProtection: isSet(object.deletionProtection) ? globalThis.Boolean(object.deletionProtection) : false,
    };
  },

  toJSON(message: Address): unknown {
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
    if (message.externalIpv4Address !== undefined) {
      obj.externalIpv4Address = ExternalIpv4Address.toJSON(message.externalIpv4Address);
    }
    if (message.reserved === true) {
      obj.reserved = message.reserved;
    }
    if (message.used === true) {
      obj.used = message.used;
    }
    if (message.type !== 0) {
      obj.type = address_TypeToJSON(message.type);
    }
    if (message.ipVersion !== 0) {
      obj.ipVersion = address_IpVersionToJSON(message.ipVersion);
    }
    if (message.deletionProtection === true) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
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
    message.externalIpv4Address = (object.externalIpv4Address !== undefined && object.externalIpv4Address !== null)
      ? ExternalIpv4Address.fromPartial(object.externalIpv4Address)
      : undefined;
    message.reserved = object.reserved ?? false;
    message.used = object.used ?? false;
    message.type = object.type ?? 0;
    message.ipVersion = object.ipVersion ?? 0;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(Address.$type, Address);

function createBaseAddress_LabelsEntry(): Address_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.Address.LabelsEntry", key: "", value: "" };
}

export const Address_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.Address.LabelsEntry" as const,

  encode(message: Address_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress_LabelsEntry();
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

  fromJSON(object: any): Address_LabelsEntry {
    return {
      $type: Address_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Address_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Address_LabelsEntry>, I>>(base?: I): Address_LabelsEntry {
    return Address_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Address_LabelsEntry>, I>>(object: I): Address_LabelsEntry {
    const message = createBaseAddress_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Address_LabelsEntry.$type, Address_LabelsEntry);

function createBaseExternalIpv4Address(): ExternalIpv4Address {
  return { $type: "yandex.cloud.vpc.v1.ExternalIpv4Address", address: "", zoneId: "", requirements: undefined };
}

export const ExternalIpv4Address = {
  $type: "yandex.cloud.vpc.v1.ExternalIpv4Address" as const,

  encode(message: ExternalIpv4Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.zoneId !== "") {
      writer.uint32(18).string(message.zoneId);
    }
    if (message.requirements !== undefined) {
      AddressRequirements.encode(message.requirements, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIpv4Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalIpv4Address();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requirements = AddressRequirements.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalIpv4Address {
    return {
      $type: ExternalIpv4Address.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      requirements: isSet(object.requirements) ? AddressRequirements.fromJSON(object.requirements) : undefined,
    };
  },

  toJSON(message: ExternalIpv4Address): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.requirements !== undefined) {
      obj.requirements = AddressRequirements.toJSON(message.requirements);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalIpv4Address>, I>>(base?: I): ExternalIpv4Address {
    return ExternalIpv4Address.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalIpv4Address>, I>>(object: I): ExternalIpv4Address {
    const message = createBaseExternalIpv4Address();
    message.address = object.address ?? "";
    message.zoneId = object.zoneId ?? "";
    message.requirements = (object.requirements !== undefined && object.requirements !== null)
      ? AddressRequirements.fromPartial(object.requirements)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv4Address.$type, ExternalIpv4Address);

function createBaseAddressRequirements(): AddressRequirements {
  return { $type: "yandex.cloud.vpc.v1.AddressRequirements", ddosProtectionProvider: "", outgoingSmtpCapability: "" };
}

export const AddressRequirements = {
  $type: "yandex.cloud.vpc.v1.AddressRequirements" as const,

  encode(message: AddressRequirements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ddosProtectionProvider !== "") {
      writer.uint32(10).string(message.ddosProtectionProvider);
    }
    if (message.outgoingSmtpCapability !== "") {
      writer.uint32(18).string(message.outgoingSmtpCapability);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressRequirements {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressRequirements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ddosProtectionProvider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outgoingSmtpCapability = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressRequirements {
    return {
      $type: AddressRequirements.$type,
      ddosProtectionProvider: isSet(object.ddosProtectionProvider)
        ? globalThis.String(object.ddosProtectionProvider)
        : "",
      outgoingSmtpCapability: isSet(object.outgoingSmtpCapability)
        ? globalThis.String(object.outgoingSmtpCapability)
        : "",
    };
  },

  toJSON(message: AddressRequirements): unknown {
    const obj: any = {};
    if (message.ddosProtectionProvider !== "") {
      obj.ddosProtectionProvider = message.ddosProtectionProvider;
    }
    if (message.outgoingSmtpCapability !== "") {
      obj.outgoingSmtpCapability = message.outgoingSmtpCapability;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddressRequirements>, I>>(base?: I): AddressRequirements {
    return AddressRequirements.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddressRequirements>, I>>(object: I): AddressRequirements {
    const message = createBaseAddressRequirements();
    message.ddosProtectionProvider = object.ddosProtectionProvider ?? "";
    message.outgoingSmtpCapability = object.outgoingSmtpCapability ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddressRequirements.$type, AddressRequirements);

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
