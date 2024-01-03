/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.vpc.v1";

export enum IpVersion {
  IP_VERSION_UNSPECIFIED = 0,
  IPV4 = 1,
  IPV6 = 2,
  UNRECOGNIZED = -1,
}

export function ipVersionFromJSON(object: any): IpVersion {
  switch (object) {
    case 0:
    case "IP_VERSION_UNSPECIFIED":
      return IpVersion.IP_VERSION_UNSPECIFIED;
    case 1:
    case "IPV4":
      return IpVersion.IPV4;
    case 2:
    case "IPV6":
      return IpVersion.IPV6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IpVersion.UNRECOGNIZED;
  }
}

export function ipVersionToJSON(object: IpVersion): string {
  switch (object) {
    case IpVersion.IP_VERSION_UNSPECIFIED:
      return "IP_VERSION_UNSPECIFIED";
    case IpVersion.IPV4:
      return "IPV4";
    case IpVersion.IPV6:
      return "IPV6";
    case IpVersion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A Subnet resource. For more information, see [Subnets](/docs/vpc/concepts/network#subnet). */
export interface Subnet {
  $type: "yandex.cloud.vpc.v1.Subnet";
  /** ID of the subnet. */
  id: string;
  /** ID of the folder that the subnet belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the subnet. The name is unique within the project. 3-63 characters long. */
  name: string;
  /** Optional description of the subnet. 0-256 characters long. */
  description: string;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** ID of the network the subnet belongs to. */
  networkId: string;
  /** ID of the availability zone where the subnet resides. */
  zoneId: string;
  /**
   * CIDR block.
   * The range of internal addresses that are defined for this subnet.
   * This field can be set only at Subnet resource creation time and cannot be changed.
   * For example, 10.0.0.0/22 or 192.168.0.0/24.
   * Minimum subnet size is /28, maximum subnet size is /16.
   */
  v4CidrBlocks: string[];
  /** IPv6 not available yet. */
  v6CidrBlocks: string[];
  /** ID of route table the subnet is linked to. */
  routeTableId: string;
  dhcpOptions?: DhcpOptions | undefined;
}

export interface Subnet_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry";
  key: string;
  value: string;
}

export interface DhcpOptions {
  $type: "yandex.cloud.vpc.v1.DhcpOptions";
  domainNameServers: string[];
  domainName: string;
  ntpServers: string[];
}

function createBaseSubnet(): Subnet {
  return {
    $type: "yandex.cloud.vpc.v1.Subnet",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    networkId: "",
    zoneId: "",
    v4CidrBlocks: [],
    v6CidrBlocks: [],
    routeTableId: "",
    dhcpOptions: undefined,
  };
}

export const Subnet = {
  $type: "yandex.cloud.vpc.v1.Subnet" as const,

  encode(message: Subnet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Subnet_LabelsEntry.encode(
        { $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(58).string(message.networkId);
    }
    if (message.zoneId !== "") {
      writer.uint32(66).string(message.zoneId);
    }
    for (const v of message.v4CidrBlocks) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.v6CidrBlocks) {
      writer.uint32(90).string(v!);
    }
    if (message.routeTableId !== "") {
      writer.uint32(98).string(message.routeTableId);
    }
    if (message.dhcpOptions !== undefined) {
      DhcpOptions.encode(message.dhcpOptions, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subnet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubnet();
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

          const entry6 = Subnet_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.v4CidrBlocks.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.v6CidrBlocks.push(reader.string());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.routeTableId = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.dhcpOptions = DhcpOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Subnet {
    return {
      $type: Subnet.$type,
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
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      v4CidrBlocks: globalThis.Array.isArray(object?.v4CidrBlocks)
        ? object.v4CidrBlocks.map((e: any) => globalThis.String(e))
        : [],
      v6CidrBlocks: globalThis.Array.isArray(object?.v6CidrBlocks)
        ? object.v6CidrBlocks.map((e: any) => globalThis.String(e))
        : [],
      routeTableId: isSet(object.routeTableId) ? globalThis.String(object.routeTableId) : "",
      dhcpOptions: isSet(object.dhcpOptions) ? DhcpOptions.fromJSON(object.dhcpOptions) : undefined,
    };
  },

  toJSON(message: Subnet): unknown {
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
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.v4CidrBlocks?.length) {
      obj.v4CidrBlocks = message.v4CidrBlocks;
    }
    if (message.v6CidrBlocks?.length) {
      obj.v6CidrBlocks = message.v6CidrBlocks;
    }
    if (message.routeTableId !== "") {
      obj.routeTableId = message.routeTableId;
    }
    if (message.dhcpOptions !== undefined) {
      obj.dhcpOptions = DhcpOptions.toJSON(message.dhcpOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Subnet>, I>>(base?: I): Subnet {
    return Subnet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Subnet>, I>>(object: I): Subnet {
    const message = createBaseSubnet();
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
    message.networkId = object.networkId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.v4CidrBlocks = object.v4CidrBlocks?.map((e) => e) || [];
    message.v6CidrBlocks = object.v6CidrBlocks?.map((e) => e) || [];
    message.routeTableId = object.routeTableId ?? "";
    message.dhcpOptions = (object.dhcpOptions !== undefined && object.dhcpOptions !== null)
      ? DhcpOptions.fromPartial(object.dhcpOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Subnet.$type, Subnet);

function createBaseSubnet_LabelsEntry(): Subnet_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry", key: "", value: "" };
}

export const Subnet_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry" as const,

  encode(message: Subnet_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subnet_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubnet_LabelsEntry();
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

  fromJSON(object: any): Subnet_LabelsEntry {
    return {
      $type: Subnet_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Subnet_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Subnet_LabelsEntry>, I>>(base?: I): Subnet_LabelsEntry {
    return Subnet_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Subnet_LabelsEntry>, I>>(object: I): Subnet_LabelsEntry {
    const message = createBaseSubnet_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Subnet_LabelsEntry.$type, Subnet_LabelsEntry);

function createBaseDhcpOptions(): DhcpOptions {
  return { $type: "yandex.cloud.vpc.v1.DhcpOptions", domainNameServers: [], domainName: "", ntpServers: [] };
}

export const DhcpOptions = {
  $type: "yandex.cloud.vpc.v1.DhcpOptions" as const,

  encode(message: DhcpOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.domainNameServers) {
      writer.uint32(10).string(v!);
    }
    if (message.domainName !== "") {
      writer.uint32(18).string(message.domainName);
    }
    for (const v of message.ntpServers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DhcpOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDhcpOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.domainNameServers.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domainName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ntpServers.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DhcpOptions {
    return {
      $type: DhcpOptions.$type,
      domainNameServers: globalThis.Array.isArray(object?.domainNameServers)
        ? object.domainNameServers.map((e: any) => globalThis.String(e))
        : [],
      domainName: isSet(object.domainName) ? globalThis.String(object.domainName) : "",
      ntpServers: globalThis.Array.isArray(object?.ntpServers)
        ? object.ntpServers.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: DhcpOptions): unknown {
    const obj: any = {};
    if (message.domainNameServers?.length) {
      obj.domainNameServers = message.domainNameServers;
    }
    if (message.domainName !== "") {
      obj.domainName = message.domainName;
    }
    if (message.ntpServers?.length) {
      obj.ntpServers = message.ntpServers;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DhcpOptions>, I>>(base?: I): DhcpOptions {
    return DhcpOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DhcpOptions>, I>>(object: I): DhcpOptions {
    const message = createBaseDhcpOptions();
    message.domainNameServers = object.domainNameServers?.map((e) => e) || [];
    message.domainName = object.domainName ?? "";
    message.ntpServers = object.ntpServers?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(DhcpOptions.$type, DhcpOptions);

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
