/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.serverless.apigateway.websocket.v1";

export interface Connection {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection";
  /** ID of the connection. */
  id: string;
  /** ID of the API Gateway. */
  gatewayId: string;
  /** The information about the caller making the request to API Gateway. */
  identity?:
    | Identity
    | undefined;
  /** The timestamp at which connection was established. */
  connectedAt?:
    | Date
    | undefined;
  /** The timestamp at which connection was last accessed. */
  lastActiveAt?: Date | undefined;
}

export interface Identity {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity";
  /** The source IP address of the caller making the request to API Gateway. */
  sourceIp: string;
  /** The User Agent of the caller making the request to API Gateway. */
  userAgent: string;
}

function createBaseConnection(): Connection {
  return {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection",
    id: "",
    gatewayId: "",
    identity: undefined,
    connectedAt: undefined,
    lastActiveAt: undefined,
  };
}

export const Connection = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection" as const,

  encode(message: Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.gatewayId !== "") {
      writer.uint32(18).string(message.gatewayId);
    }
    if (message.identity !== undefined) {
      Identity.encode(message.identity, writer.uint32(26).fork()).ldelim();
    }
    if (message.connectedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.connectedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastActiveAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastActiveAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnection();
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

          message.gatewayId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identity = Identity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.connectedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastActiveAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Connection {
    return {
      $type: Connection.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      gatewayId: isSet(object.gatewayId) ? globalThis.String(object.gatewayId) : "",
      identity: isSet(object.identity) ? Identity.fromJSON(object.identity) : undefined,
      connectedAt: isSet(object.connectedAt) ? fromJsonTimestamp(object.connectedAt) : undefined,
      lastActiveAt: isSet(object.lastActiveAt) ? fromJsonTimestamp(object.lastActiveAt) : undefined,
    };
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.gatewayId !== "") {
      obj.gatewayId = message.gatewayId;
    }
    if (message.identity !== undefined) {
      obj.identity = Identity.toJSON(message.identity);
    }
    if (message.connectedAt !== undefined) {
      obj.connectedAt = message.connectedAt.toISOString();
    }
    if (message.lastActiveAt !== undefined) {
      obj.lastActiveAt = message.lastActiveAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Connection>, I>>(base?: I): Connection {
    return Connection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Connection>, I>>(object: I): Connection {
    const message = createBaseConnection();
    message.id = object.id ?? "";
    message.gatewayId = object.gatewayId ?? "";
    message.identity = (object.identity !== undefined && object.identity !== null)
      ? Identity.fromPartial(object.identity)
      : undefined;
    message.connectedAt = object.connectedAt ?? undefined;
    message.lastActiveAt = object.lastActiveAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Connection.$type, Connection);

function createBaseIdentity(): Identity {
  return { $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity", sourceIp: "", userAgent: "" };
}

export const Identity = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity" as const,

  encode(message: Identity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceIp !== "") {
      writer.uint32(10).string(message.sourceIp);
    }
    if (message.userAgent !== "") {
      writer.uint32(18).string(message.userAgent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Identity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceIp = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userAgent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Identity {
    return {
      $type: Identity.$type,
      sourceIp: isSet(object.sourceIp) ? globalThis.String(object.sourceIp) : "",
      userAgent: isSet(object.userAgent) ? globalThis.String(object.userAgent) : "",
    };
  },

  toJSON(message: Identity): unknown {
    const obj: any = {};
    if (message.sourceIp !== "") {
      obj.sourceIp = message.sourceIp;
    }
    if (message.userAgent !== "") {
      obj.userAgent = message.userAgent;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Identity>, I>>(base?: I): Identity {
    return Identity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Identity>, I>>(object: I): Identity {
    const message = createBaseIdentity();
    message.sourceIp = object.sourceIp ?? "";
    message.userAgent = object.userAgent ?? "";
    return message;
  },
};

messageTypeRegistry.set(Identity.$type, Identity);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
