/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.cdn.v1";

/** An origin. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface Origin {
  $type: "yandex.cloud.cdn.v1.Origin";
  /** ID of the origin. */
  id: number;
  /** ID of the parent origin group. */
  originGroupId: number;
  /**
   * IP address or Domain name of your origin and the port (if custom).
   * Used if [meta] variant is `common`.
   */
  source: string;
  /**
   * The setting allows to enable or disable an Origin source in the Origins group.
   *
   * It has two possible values:
   *
   * True - The origin is enabled and used as a source for the CDN. An origins
   * group must contain at least one enabled origin.
   * False - The origin is disabled and the CDN is not using it to pull content.
   */
  enabled: boolean;
  /**
   * Specifies whether the origin is used in its origin group as backup.
   * A backup origin is used when one of active origins becomes unavailable.
   */
  backup: boolean;
  /** Set up origin of the content. */
  meta?: OriginMeta | undefined;
}

/** Origin parameters. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginParams {
  $type: "yandex.cloud.cdn.v1.OriginParams";
  /** Source: IP address or Domain name of your origin and the port (if custom). */
  source: string;
  /**
   * The setting allows to enable or disable an Origin source in the Origins group.
   *
   * It has two possible values:
   *
   * True - The origin is enabled and used as a source for the CDN. An origins
   * group must contain at least one enabled origins. False - The origin is disabled
   * and the CDN is not using it to pull content.
   */
  enabled: boolean;
  /**
   * backup option has two possible values:
   *
   *   True - The option is active. The origin will not be used until one of
   *          active origins become unavailable.
   *   False - The option is disabled.
   */
  backup: boolean;
  /** Set up origin of the content. */
  meta?: OriginMeta | undefined;
}

/** Origin type. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginMeta {
  $type: "yandex.cloud.cdn.v1.OriginMeta";
  /** A server with a domain name linked to it */
  common?:
    | OriginNamedMeta
    | undefined;
  /** An Object Storage bucket not configured as a static site hosting. */
  bucket?:
    | OriginNamedMeta
    | undefined;
  /** An Object Storage bucket configured as a static site hosting. */
  website?:
    | OriginNamedMeta
    | undefined;
  /**
   * An L7 load balancer from Application Load Balancer.
   * CDN servers will access the load balancer at one of its IP addresses that must be selected in the origin settings.
   */
  balancer?: OriginBalancerMeta | undefined;
}

/** Origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginNamedMeta {
  $type: "yandex.cloud.cdn.v1.OriginNamedMeta";
  /** Name of the origin. */
  name: string;
}

/** Application Load Balancer origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginBalancerMeta {
  $type: "yandex.cloud.cdn.v1.OriginBalancerMeta";
  /** ID of the origin. */
  id: string;
}

function createBaseOrigin(): Origin {
  return {
    $type: "yandex.cloud.cdn.v1.Origin",
    id: 0,
    originGroupId: 0,
    source: "",
    enabled: false,
    backup: false,
    meta: undefined,
  };
}

export const Origin = {
  $type: "yandex.cloud.cdn.v1.Origin" as const,

  encode(message: Origin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.backup === true) {
      writer.uint32(40).bool(message.backup);
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Origin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrigin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.originGroupId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.source = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.backup = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.meta = OriginMeta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Origin {
    return {
      $type: Origin.$type,
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      originGroupId: isSet(object.originGroupId) ? globalThis.Number(object.originGroupId) : 0,
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      backup: isSet(object.backup) ? globalThis.Boolean(object.backup) : false,
      meta: isSet(object.meta) ? OriginMeta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: Origin): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.originGroupId !== 0) {
      obj.originGroupId = Math.round(message.originGroupId);
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.backup === true) {
      obj.backup = message.backup;
    }
    if (message.meta !== undefined) {
      obj.meta = OriginMeta.toJSON(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Origin>, I>>(base?: I): Origin {
    return Origin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Origin>, I>>(object: I): Origin {
    const message = createBaseOrigin();
    message.id = object.id ?? 0;
    message.originGroupId = object.originGroupId ?? 0;
    message.source = object.source ?? "";
    message.enabled = object.enabled ?? false;
    message.backup = object.backup ?? false;
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? OriginMeta.fromPartial(object.meta)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Origin.$type, Origin);

function createBaseOriginParams(): OriginParams {
  return { $type: "yandex.cloud.cdn.v1.OriginParams", source: "", enabled: false, backup: false, meta: undefined };
}

export const OriginParams = {
  $type: "yandex.cloud.cdn.v1.OriginParams" as const,

  encode(message: OriginParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.backup === true) {
      writer.uint32(24).bool(message.backup);
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.backup = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = OriginMeta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OriginParams {
    return {
      $type: OriginParams.$type,
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      backup: isSet(object.backup) ? globalThis.Boolean(object.backup) : false,
      meta: isSet(object.meta) ? OriginMeta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: OriginParams): unknown {
    const obj: any = {};
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.backup === true) {
      obj.backup = message.backup;
    }
    if (message.meta !== undefined) {
      obj.meta = OriginMeta.toJSON(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OriginParams>, I>>(base?: I): OriginParams {
    return OriginParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OriginParams>, I>>(object: I): OriginParams {
    const message = createBaseOriginParams();
    message.source = object.source ?? "";
    message.enabled = object.enabled ?? false;
    message.backup = object.backup ?? false;
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? OriginMeta.fromPartial(object.meta)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(OriginParams.$type, OriginParams);

function createBaseOriginMeta(): OriginMeta {
  return {
    $type: "yandex.cloud.cdn.v1.OriginMeta",
    common: undefined,
    bucket: undefined,
    website: undefined,
    balancer: undefined,
  };
}

export const OriginMeta = {
  $type: "yandex.cloud.cdn.v1.OriginMeta" as const,

  encode(message: OriginMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.common !== undefined) {
      OriginNamedMeta.encode(message.common, writer.uint32(10).fork()).ldelim();
    }
    if (message.bucket !== undefined) {
      OriginNamedMeta.encode(message.bucket, writer.uint32(18).fork()).ldelim();
    }
    if (message.website !== undefined) {
      OriginNamedMeta.encode(message.website, writer.uint32(26).fork()).ldelim();
    }
    if (message.balancer !== undefined) {
      OriginBalancerMeta.encode(message.balancer, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.common = OriginNamedMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucket = OriginNamedMeta.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.website = OriginNamedMeta.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.balancer = OriginBalancerMeta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OriginMeta {
    return {
      $type: OriginMeta.$type,
      common: isSet(object.common) ? OriginNamedMeta.fromJSON(object.common) : undefined,
      bucket: isSet(object.bucket) ? OriginNamedMeta.fromJSON(object.bucket) : undefined,
      website: isSet(object.website) ? OriginNamedMeta.fromJSON(object.website) : undefined,
      balancer: isSet(object.balancer) ? OriginBalancerMeta.fromJSON(object.balancer) : undefined,
    };
  },

  toJSON(message: OriginMeta): unknown {
    const obj: any = {};
    if (message.common !== undefined) {
      obj.common = OriginNamedMeta.toJSON(message.common);
    }
    if (message.bucket !== undefined) {
      obj.bucket = OriginNamedMeta.toJSON(message.bucket);
    }
    if (message.website !== undefined) {
      obj.website = OriginNamedMeta.toJSON(message.website);
    }
    if (message.balancer !== undefined) {
      obj.balancer = OriginBalancerMeta.toJSON(message.balancer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OriginMeta>, I>>(base?: I): OriginMeta {
    return OriginMeta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OriginMeta>, I>>(object: I): OriginMeta {
    const message = createBaseOriginMeta();
    message.common = (object.common !== undefined && object.common !== null)
      ? OriginNamedMeta.fromPartial(object.common)
      : undefined;
    message.bucket = (object.bucket !== undefined && object.bucket !== null)
      ? OriginNamedMeta.fromPartial(object.bucket)
      : undefined;
    message.website = (object.website !== undefined && object.website !== null)
      ? OriginNamedMeta.fromPartial(object.website)
      : undefined;
    message.balancer = (object.balancer !== undefined && object.balancer !== null)
      ? OriginBalancerMeta.fromPartial(object.balancer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(OriginMeta.$type, OriginMeta);

function createBaseOriginNamedMeta(): OriginNamedMeta {
  return { $type: "yandex.cloud.cdn.v1.OriginNamedMeta", name: "" };
}

export const OriginNamedMeta = {
  $type: "yandex.cloud.cdn.v1.OriginNamedMeta" as const,

  encode(message: OriginNamedMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginNamedMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginNamedMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OriginNamedMeta {
    return { $type: OriginNamedMeta.$type, name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: OriginNamedMeta): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OriginNamedMeta>, I>>(base?: I): OriginNamedMeta {
    return OriginNamedMeta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OriginNamedMeta>, I>>(object: I): OriginNamedMeta {
    const message = createBaseOriginNamedMeta();
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(OriginNamedMeta.$type, OriginNamedMeta);

function createBaseOriginBalancerMeta(): OriginBalancerMeta {
  return { $type: "yandex.cloud.cdn.v1.OriginBalancerMeta", id: "" };
}

export const OriginBalancerMeta = {
  $type: "yandex.cloud.cdn.v1.OriginBalancerMeta" as const,

  encode(message: OriginBalancerMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginBalancerMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginBalancerMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OriginBalancerMeta {
    return { $type: OriginBalancerMeta.$type, id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: OriginBalancerMeta): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OriginBalancerMeta>, I>>(base?: I): OriginBalancerMeta {
    return OriginBalancerMeta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OriginBalancerMeta>, I>>(object: I): OriginBalancerMeta {
    const message = createBaseOriginBalancerMeta();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(OriginBalancerMeta.$type, OriginBalancerMeta);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
