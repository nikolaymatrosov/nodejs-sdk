/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Status } from "@yandex-cloud/core/dist/generated/google/rpc/status";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Destination, IncomingLogEntry, LogEntryDefaults } from "./log_entry";
import { LogEntryResource } from "./log_resource";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface WriteRequest {
  $type: "yandex.cloud.logging.v1.WriteRequest";
  /**
   * Log entries destination.
   *
   * See [Destination] for details.
   */
  destination?:
    | Destination
    | undefined;
  /** Common resource (type, ID) specification for log entries. */
  resource?:
    | LogEntryResource
    | undefined;
  /** List of log entries. */
  entries: IncomingLogEntry[];
  /**
   * Log entries defaults.
   *
   * See [LogEntryDefaults] for details.
   */
  defaults?: LogEntryDefaults | undefined;
}

export interface WriteResponse {
  $type: "yandex.cloud.logging.v1.WriteResponse";
  /**
   * Map<idx, status> of ingest failures.
   *
   * If entry with idx N is absent, it was ingested successfully.
   */
  errors: { [key: number]: Status };
}

export interface WriteResponse_ErrorsEntry {
  $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry";
  key: number;
  value?: Status | undefined;
}

function createBaseWriteRequest(): WriteRequest {
  return {
    $type: "yandex.cloud.logging.v1.WriteRequest",
    destination: undefined,
    resource: undefined,
    entries: [],
    defaults: undefined,
  };
}

export const WriteRequest = {
  $type: "yandex.cloud.logging.v1.WriteRequest" as const,

  encode(message: WriteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destination !== undefined) {
      Destination.encode(message.destination, writer.uint32(10).fork()).ldelim();
    }
    if (message.resource !== undefined) {
      LogEntryResource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.entries) {
      IncomingLogEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.defaults !== undefined) {
      LogEntryDefaults.encode(message.defaults, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.destination = Destination.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resource = LogEntryResource.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entries.push(IncomingLogEntry.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.defaults = LogEntryDefaults.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteRequest {
    return {
      $type: WriteRequest.$type,
      destination: isSet(object.destination) ? Destination.fromJSON(object.destination) : undefined,
      resource: isSet(object.resource) ? LogEntryResource.fromJSON(object.resource) : undefined,
      entries: globalThis.Array.isArray(object?.entries)
        ? object.entries.map((e: any) => IncomingLogEntry.fromJSON(e))
        : [],
      defaults: isSet(object.defaults) ? LogEntryDefaults.fromJSON(object.defaults) : undefined,
    };
  },

  toJSON(message: WriteRequest): unknown {
    const obj: any = {};
    if (message.destination !== undefined) {
      obj.destination = Destination.toJSON(message.destination);
    }
    if (message.resource !== undefined) {
      obj.resource = LogEntryResource.toJSON(message.resource);
    }
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => IncomingLogEntry.toJSON(e));
    }
    if (message.defaults !== undefined) {
      obj.defaults = LogEntryDefaults.toJSON(message.defaults);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteRequest>, I>>(base?: I): WriteRequest {
    return WriteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteRequest>, I>>(object: I): WriteRequest {
    const message = createBaseWriteRequest();
    message.destination = (object.destination !== undefined && object.destination !== null)
      ? Destination.fromPartial(object.destination)
      : undefined;
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? LogEntryResource.fromPartial(object.resource)
      : undefined;
    message.entries = object.entries?.map((e) => IncomingLogEntry.fromPartial(e)) || [];
    message.defaults = (object.defaults !== undefined && object.defaults !== null)
      ? LogEntryDefaults.fromPartial(object.defaults)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(WriteRequest.$type, WriteRequest);

function createBaseWriteResponse(): WriteResponse {
  return { $type: "yandex.cloud.logging.v1.WriteResponse", errors: {} };
}

export const WriteResponse = {
  $type: "yandex.cloud.logging.v1.WriteResponse" as const,

  encode(message: WriteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.errors).forEach(([key, value]) => {
      WriteResponse_ErrorsEntry.encode({
        $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry",
        key: key as any,
        value,
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = WriteResponse_ErrorsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.errors[entry1.key] = entry1.value;
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

  fromJSON(object: any): WriteResponse {
    return {
      $type: WriteResponse.$type,
      errors: isObject(object.errors)
        ? Object.entries(object.errors).reduce<{ [key: number]: Status }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Status.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: WriteResponse): unknown {
    const obj: any = {};
    if (message.errors) {
      const entries = Object.entries(message.errors);
      if (entries.length > 0) {
        obj.errors = {};
        entries.forEach(([k, v]) => {
          obj.errors[k] = Status.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteResponse>, I>>(base?: I): WriteResponse {
    return WriteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteResponse>, I>>(object: I): WriteResponse {
    const message = createBaseWriteResponse();
    message.errors = Object.entries(object.errors ?? {}).reduce<{ [key: number]: Status }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = Status.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(WriteResponse.$type, WriteResponse);

function createBaseWriteResponse_ErrorsEntry(): WriteResponse_ErrorsEntry {
  return { $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry", key: 0, value: undefined };
}

export const WriteResponse_ErrorsEntry = {
  $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry" as const,

  encode(message: WriteResponse_ErrorsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Status.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteResponse_ErrorsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteResponse_ErrorsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteResponse_ErrorsEntry {
    return {
      $type: WriteResponse_ErrorsEntry.$type,
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Status.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: WriteResponse_ErrorsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = Status.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteResponse_ErrorsEntry>, I>>(base?: I): WriteResponse_ErrorsEntry {
    return WriteResponse_ErrorsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteResponse_ErrorsEntry>, I>>(object: I): WriteResponse_ErrorsEntry {
    const message = createBaseWriteResponse_ErrorsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? Status.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(WriteResponse_ErrorsEntry.$type, WriteResponse_ErrorsEntry);

/** A set of methods for writing to log groups. */
export type LogIngestionServiceService = typeof LogIngestionServiceService;
export const LogIngestionServiceService = {
  /** Write log entries to specified destination. */
  write: {
    path: "/yandex.cloud.logging.v1.LogIngestionService/Write",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: WriteRequest) => Buffer.from(WriteRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => WriteRequest.decode(value),
    responseSerialize: (value: WriteResponse) => Buffer.from(WriteResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => WriteResponse.decode(value),
  },
} as const;

export interface LogIngestionServiceServer extends UntypedServiceImplementation {
  /** Write log entries to specified destination. */
  write: handleUnaryCall<WriteRequest, WriteResponse>;
}

export interface LogIngestionServiceClient extends Client {
  /** Write log entries to specified destination. */
  write(
    request: WriteRequest,
    callback: (error: ServiceError | null, response: WriteResponse) => void,
  ): ClientUnaryCall;
  write(
    request: WriteRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: WriteResponse) => void,
  ): ClientUnaryCall;
  write(
    request: WriteRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: WriteResponse) => void,
  ): ClientUnaryCall;
}

export const LogIngestionServiceClient = makeGenericClientConstructor(
  LogIngestionServiceService,
  "yandex.cloud.logging.v1.LogIngestionService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LogIngestionServiceClient;
  service: typeof LogIngestionServiceService;
};

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
