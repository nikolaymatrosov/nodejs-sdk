/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { RouteOptions, VirtualHost } from "./virtual_host";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/**
 * An HTTP router resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router).
 */
export interface HttpRouter {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouter";
  /** ID of the router. Generated at creation time. */
  id: string;
  /** Name of the router. The name is unique within the folder. */
  name: string;
  /** Description of the router. */
  description: string;
  /** ID of the folder that the router belongs to. */
  folderId: string;
  /**
   * Router labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /**
   * Virtual hosts that combine routes inside the router.
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
   *
   * Only one virtual host with no authority (default match) can be specified.
   */
  virtualHosts: VirtualHost[];
  /** Creation timestamp. */
  createdAt?: Date | undefined;
  routeOptions?: RouteOptions | undefined;
}

export interface HttpRouter_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry";
  key: string;
  value: string;
}

function createBaseHttpRouter(): HttpRouter {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouter",
    id: "",
    name: "",
    description: "",
    folderId: "",
    labels: {},
    virtualHosts: [],
    createdAt: undefined,
    routeOptions: undefined,
  };
}

export const HttpRouter = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouter" as const,

  encode(message: HttpRouter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.folderId !== "") {
      writer.uint32(34).string(message.folderId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      HttpRouter_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    for (const v of message.virtualHosts) {
      VirtualHost.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.routeOptions !== undefined) {
      RouteOptions.encode(message.routeOptions, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRouter();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = HttpRouter_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.virtualHosts.push(VirtualHost.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.routeOptions = RouteOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpRouter {
    return {
      $type: HttpRouter.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      virtualHosts: globalThis.Array.isArray(object?.virtualHosts)
        ? object.virtualHosts.map((e: any) => VirtualHost.fromJSON(e))
        : [],
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      routeOptions: isSet(object.routeOptions) ? RouteOptions.fromJSON(object.routeOptions) : undefined,
    };
  },

  toJSON(message: HttpRouter): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
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
    if (message.virtualHosts?.length) {
      obj.virtualHosts = message.virtualHosts.map((e) => VirtualHost.toJSON(e));
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.routeOptions !== undefined) {
      obj.routeOptions = RouteOptions.toJSON(message.routeOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpRouter>, I>>(base?: I): HttpRouter {
    return HttpRouter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpRouter>, I>>(object: I): HttpRouter {
    const message = createBaseHttpRouter();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.folderId = object.folderId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.virtualHosts = object.virtualHosts?.map((e) => VirtualHost.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.routeOptions = (object.routeOptions !== undefined && object.routeOptions !== null)
      ? RouteOptions.fromPartial(object.routeOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HttpRouter.$type, HttpRouter);

function createBaseHttpRouter_LabelsEntry(): HttpRouter_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry", key: "", value: "" };
}

export const HttpRouter_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry" as const,

  encode(message: HttpRouter_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouter_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRouter_LabelsEntry();
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

  fromJSON(object: any): HttpRouter_LabelsEntry {
    return {
      $type: HttpRouter_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: HttpRouter_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpRouter_LabelsEntry>, I>>(base?: I): HttpRouter_LabelsEntry {
    return HttpRouter_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpRouter_LabelsEntry>, I>>(object: I): HttpRouter_LabelsEntry {
    const message = createBaseHttpRouter_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(HttpRouter_LabelsEntry.$type, HttpRouter_LabelsEntry);

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
