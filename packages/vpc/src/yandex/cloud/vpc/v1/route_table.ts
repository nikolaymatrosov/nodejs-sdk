/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.vpc.v1";

/** A RouteTable resource. For more information, see [Static Routes](/docs/vpc/concepts/static-routes). */
export interface RouteTable {
  $type: "yandex.cloud.vpc.v1.RouteTable";
  /** ID of the route table. */
  id: string;
  /** ID of the folder that the route table belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the route table. The name is unique within the project. 3-63 characters long. */
  name: string;
  /** Optional description of the route table. 0-256 characters long. */
  description: string;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** ID of the network the route table belongs to. */
  networkId: string;
  /** List of static routes. */
  staticRoutes: StaticRoute[];
}

export interface RouteTable_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry";
  key: string;
  value: string;
}

/** A StaticRoute resource. For more information, see [Static Routes](/docs/vpc/concepts/static-routes). */
export interface StaticRoute {
  $type: "yandex.cloud.vpc.v1.StaticRoute";
  /** Destination subnet in CIDR notation */
  destinationPrefix?:
    | string
    | undefined;
  /** Next hop IP address */
  nextHopAddress?:
    | string
    | undefined;
  /** Next hop gateway id */
  gatewayId?:
    | string
    | undefined;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
}

export interface StaticRoute_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry";
  key: string;
  value: string;
}

function createBaseRouteTable(): RouteTable {
  return {
    $type: "yandex.cloud.vpc.v1.RouteTable",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    networkId: "",
    staticRoutes: [],
  };
}

export const RouteTable = {
  $type: "yandex.cloud.vpc.v1.RouteTable" as const,

  encode(message: RouteTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      RouteTable_LabelsEntry.encode(
        { $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(58).string(message.networkId);
    }
    for (const v of message.staticRoutes) {
      StaticRoute.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteTable();
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

          const entry6 = RouteTable_LabelsEntry.decode(reader, reader.uint32());
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

          message.staticRoutes.push(StaticRoute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RouteTable {
    return {
      $type: RouteTable.$type,
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
      staticRoutes: globalThis.Array.isArray(object?.staticRoutes)
        ? object.staticRoutes.map((e: any) => StaticRoute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RouteTable): unknown {
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
    if (message.staticRoutes?.length) {
      obj.staticRoutes = message.staticRoutes.map((e) => StaticRoute.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RouteTable>, I>>(base?: I): RouteTable {
    return RouteTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RouteTable>, I>>(object: I): RouteTable {
    const message = createBaseRouteTable();
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
    message.staticRoutes = object.staticRoutes?.map((e) => StaticRoute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RouteTable.$type, RouteTable);

function createBaseRouteTable_LabelsEntry(): RouteTable_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry", key: "", value: "" };
}

export const RouteTable_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry" as const,

  encode(message: RouteTable_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteTable_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteTable_LabelsEntry();
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

  fromJSON(object: any): RouteTable_LabelsEntry {
    return {
      $type: RouteTable_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: RouteTable_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RouteTable_LabelsEntry>, I>>(base?: I): RouteTable_LabelsEntry {
    return RouteTable_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RouteTable_LabelsEntry>, I>>(object: I): RouteTable_LabelsEntry {
    const message = createBaseRouteTable_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(RouteTable_LabelsEntry.$type, RouteTable_LabelsEntry);

function createBaseStaticRoute(): StaticRoute {
  return {
    $type: "yandex.cloud.vpc.v1.StaticRoute",
    destinationPrefix: undefined,
    nextHopAddress: undefined,
    gatewayId: undefined,
    labels: {},
  };
}

export const StaticRoute = {
  $type: "yandex.cloud.vpc.v1.StaticRoute" as const,

  encode(message: StaticRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destinationPrefix !== undefined) {
      writer.uint32(10).string(message.destinationPrefix);
    }
    if (message.nextHopAddress !== undefined) {
      writer.uint32(18).string(message.nextHopAddress);
    }
    if (message.gatewayId !== undefined) {
      writer.uint32(34).string(message.gatewayId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      StaticRoute_LabelsEntry.encode(
        { $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry", key: key as any, value },
        writer.uint32(26).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StaticRoute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaticRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.destinationPrefix = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextHopAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gatewayId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = StaticRoute_LabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
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

  fromJSON(object: any): StaticRoute {
    return {
      $type: StaticRoute.$type,
      destinationPrefix: isSet(object.destinationPrefix) ? globalThis.String(object.destinationPrefix) : undefined,
      nextHopAddress: isSet(object.nextHopAddress) ? globalThis.String(object.nextHopAddress) : undefined,
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: StaticRoute): unknown {
    const obj: any = {};
    if (message.destinationPrefix !== undefined) {
      obj.destinationPrefix = message.destinationPrefix;
    }
    if (message.nextHopAddress !== undefined) {
      obj.nextHopAddress = message.nextHopAddress;
    }
    if (message.gatewayId !== undefined) {
      obj.gatewayId = message.gatewayId;
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

  create<I extends Exact<DeepPartial<StaticRoute>, I>>(base?: I): StaticRoute {
    return StaticRoute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StaticRoute>, I>>(object: I): StaticRoute {
    const message = createBaseStaticRoute();
    message.destinationPrefix = object.destinationPrefix ?? undefined;
    message.nextHopAddress = object.nextHopAddress ?? undefined;
    message.gatewayId = object.gatewayId ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(StaticRoute.$type, StaticRoute);

function createBaseStaticRoute_LabelsEntry(): StaticRoute_LabelsEntry {
  return { $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry", key: "", value: "" };
}

export const StaticRoute_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry" as const,

  encode(message: StaticRoute_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StaticRoute_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaticRoute_LabelsEntry();
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

  fromJSON(object: any): StaticRoute_LabelsEntry {
    return {
      $type: StaticRoute_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: StaticRoute_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StaticRoute_LabelsEntry>, I>>(base?: I): StaticRoute_LabelsEntry {
    return StaticRoute_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StaticRoute_LabelsEntry>, I>>(object: I): StaticRoute_LabelsEntry {
    const message = createBaseStaticRoute_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(StaticRoute_LabelsEntry.$type, StaticRoute_LabelsEntry);

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
