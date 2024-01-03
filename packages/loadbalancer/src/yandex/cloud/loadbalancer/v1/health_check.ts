/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadbalancer.v1";

/** A HealthCheck resource. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
export interface HealthCheck {
  $type: "yandex.cloud.loadbalancer.v1.HealthCheck";
  /** Name of the health check. The name must be unique for each target group that attached to a single load balancer. 3-63 characters long. */
  name: string;
  /** The interval between health checks. The default is 2 seconds. */
  interval?:
    | Duration
    | undefined;
  /** Timeout for a target to return a response for the health check. The default is 1 second. */
  timeout?:
    | Duration
    | undefined;
  /** Number of failed health checks before changing the status to `` UNHEALTHY ``. The default is 2. */
  unhealthyThreshold: number;
  /** Number of successful health checks required in order to set the `` HEALTHY `` status for the target. The default is 2. */
  healthyThreshold: number;
  /** Options for TCP health check. */
  tcpOptions?:
    | HealthCheck_TcpOptions
    | undefined;
  /** Options for HTTP health check. */
  httpOptions?: HealthCheck_HttpOptions | undefined;
}

/** Configuration option for a TCP health check. */
export interface HealthCheck_TcpOptions {
  $type: "yandex.cloud.loadbalancer.v1.HealthCheck.TcpOptions";
  /** Port to use for TCP health checks. */
  port: number;
}

/** Configuration option for an HTTP health check. */
export interface HealthCheck_HttpOptions {
  $type: "yandex.cloud.loadbalancer.v1.HealthCheck.HttpOptions";
  /** Port to use for HTTP health checks. */
  port: number;
  /**
   * URL path to set for health checking requests for every target in the target group.
   * For example `` /ping ``. The default path is `` / ``.
   */
  path: string;
}

function createBaseHealthCheck(): HealthCheck {
  return {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck",
    name: "",
    interval: undefined,
    timeout: undefined,
    unhealthyThreshold: 0,
    healthyThreshold: 0,
    tcpOptions: undefined,
    httpOptions: undefined,
  };
}

export const HealthCheck = {
  $type: "yandex.cloud.loadbalancer.v1.HealthCheck" as const,

  encode(message: HealthCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.interval !== undefined) {
      Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(26).fork()).ldelim();
    }
    if (message.unhealthyThreshold !== 0) {
      writer.uint32(32).int64(message.unhealthyThreshold);
    }
    if (message.healthyThreshold !== 0) {
      writer.uint32(40).int64(message.healthyThreshold);
    }
    if (message.tcpOptions !== undefined) {
      HealthCheck_TcpOptions.encode(message.tcpOptions, writer.uint32(50).fork()).ldelim();
    }
    if (message.httpOptions !== undefined) {
      HealthCheck_HttpOptions.encode(message.httpOptions, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheck();
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

          message.interval = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.unhealthyThreshold = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.healthyThreshold = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tcpOptions = HealthCheck_TcpOptions.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.httpOptions = HealthCheck_HttpOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheck {
    return {
      $type: HealthCheck.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      interval: isSet(object.interval) ? Duration.fromJSON(object.interval) : undefined,
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
      unhealthyThreshold: isSet(object.unhealthyThreshold) ? globalThis.Number(object.unhealthyThreshold) : 0,
      healthyThreshold: isSet(object.healthyThreshold) ? globalThis.Number(object.healthyThreshold) : 0,
      tcpOptions: isSet(object.tcpOptions) ? HealthCheck_TcpOptions.fromJSON(object.tcpOptions) : undefined,
      httpOptions: isSet(object.httpOptions) ? HealthCheck_HttpOptions.fromJSON(object.httpOptions) : undefined,
    };
  },

  toJSON(message: HealthCheck): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.interval !== undefined) {
      obj.interval = Duration.toJSON(message.interval);
    }
    if (message.timeout !== undefined) {
      obj.timeout = Duration.toJSON(message.timeout);
    }
    if (message.unhealthyThreshold !== 0) {
      obj.unhealthyThreshold = Math.round(message.unhealthyThreshold);
    }
    if (message.healthyThreshold !== 0) {
      obj.healthyThreshold = Math.round(message.healthyThreshold);
    }
    if (message.tcpOptions !== undefined) {
      obj.tcpOptions = HealthCheck_TcpOptions.toJSON(message.tcpOptions);
    }
    if (message.httpOptions !== undefined) {
      obj.httpOptions = HealthCheck_HttpOptions.toJSON(message.httpOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheck>, I>>(base?: I): HealthCheck {
    return HealthCheck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheck>, I>>(object: I): HealthCheck {
    const message = createBaseHealthCheck();
    message.name = object.name ?? "";
    message.interval = (object.interval !== undefined && object.interval !== null)
      ? Duration.fromPartial(object.interval)
      : undefined;
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    message.unhealthyThreshold = object.unhealthyThreshold ?? 0;
    message.healthyThreshold = object.healthyThreshold ?? 0;
    message.tcpOptions = (object.tcpOptions !== undefined && object.tcpOptions !== null)
      ? HealthCheck_TcpOptions.fromPartial(object.tcpOptions)
      : undefined;
    message.httpOptions = (object.httpOptions !== undefined && object.httpOptions !== null)
      ? HealthCheck_HttpOptions.fromPartial(object.httpOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HealthCheck.$type, HealthCheck);

function createBaseHealthCheck_TcpOptions(): HealthCheck_TcpOptions {
  return { $type: "yandex.cloud.loadbalancer.v1.HealthCheck.TcpOptions", port: 0 };
}

export const HealthCheck_TcpOptions = {
  $type: "yandex.cloud.loadbalancer.v1.HealthCheck.TcpOptions" as const,

  encode(message: HealthCheck_TcpOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port !== 0) {
      writer.uint32(8).int64(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck_TcpOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheck_TcpOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheck_TcpOptions {
    return { $type: HealthCheck_TcpOptions.$type, port: isSet(object.port) ? globalThis.Number(object.port) : 0 };
  },

  toJSON(message: HealthCheck_TcpOptions): unknown {
    const obj: any = {};
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheck_TcpOptions>, I>>(base?: I): HealthCheck_TcpOptions {
    return HealthCheck_TcpOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheck_TcpOptions>, I>>(object: I): HealthCheck_TcpOptions {
    const message = createBaseHealthCheck_TcpOptions();
    message.port = object.port ?? 0;
    return message;
  },
};

messageTypeRegistry.set(HealthCheck_TcpOptions.$type, HealthCheck_TcpOptions);

function createBaseHealthCheck_HttpOptions(): HealthCheck_HttpOptions {
  return { $type: "yandex.cloud.loadbalancer.v1.HealthCheck.HttpOptions", port: 0, path: "" };
}

export const HealthCheck_HttpOptions = {
  $type: "yandex.cloud.loadbalancer.v1.HealthCheck.HttpOptions" as const,

  encode(message: HealthCheck_HttpOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port !== 0) {
      writer.uint32(8).int64(message.port);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck_HttpOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheck_HttpOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheck_HttpOptions {
    return {
      $type: HealthCheck_HttpOptions.$type,
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: HealthCheck_HttpOptions): unknown {
    const obj: any = {};
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheck_HttpOptions>, I>>(base?: I): HealthCheck_HttpOptions {
    return HealthCheck_HttpOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheck_HttpOptions>, I>>(object: I): HealthCheck_HttpOptions {
    const message = createBaseHealthCheck_HttpOptions();
    message.port = object.port ?? 0;
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(HealthCheck_HttpOptions.$type, HealthCheck_HttpOptions);

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
