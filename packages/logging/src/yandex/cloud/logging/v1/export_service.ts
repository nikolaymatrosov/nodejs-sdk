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
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { ExportParams } from "./export";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface RunExportRequest {
  $type: "yandex.cloud.logging.v1.RunExportRequest";
  groupId: string;
  sinkId: string;
  params?: ExportParams | undefined;
  resultFilename: string;
  since?: Date | undefined;
  until?: Date | undefined;
}

export interface RunExportDetails {
  $type: "yandex.cloud.logging.v1.RunExportDetails";
  groupId: string;
  sinkId: string;
  params?: ExportParams | undefined;
  resultFilename: string;
  since?: Date | undefined;
  until?: Date | undefined;
}

export interface RunExportMetadata {
  $type: "yandex.cloud.logging.v1.RunExportMetadata";
  groupId: string;
  sinkId: string;
  resultFilename: string;
}

function createBaseRunExportRequest(): RunExportRequest {
  return {
    $type: "yandex.cloud.logging.v1.RunExportRequest",
    groupId: "",
    sinkId: "",
    params: undefined,
    resultFilename: "",
    since: undefined,
    until: undefined,
  };
}

export const RunExportRequest = {
  $type: "yandex.cloud.logging.v1.RunExportRequest" as const,

  encode(message: RunExportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.resultFilename !== "") {
      writer.uint32(34).string(message.resultFilename);
    }
    if (message.since !== undefined) {
      Timestamp.encode(toTimestamp(message.since), writer.uint32(42).fork()).ldelim();
    }
    if (message.until !== undefined) {
      Timestamp.encode(toTimestamp(message.until), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRunExportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sinkId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.params = ExportParams.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resultFilename = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.since = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.until = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RunExportRequest {
    return {
      $type: RunExportRequest.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      params: isSet(object.params) ? ExportParams.fromJSON(object.params) : undefined,
      resultFilename: isSet(object.resultFilename) ? globalThis.String(object.resultFilename) : "",
      since: isSet(object.since) ? fromJsonTimestamp(object.since) : undefined,
      until: isSet(object.until) ? fromJsonTimestamp(object.until) : undefined,
    };
  },

  toJSON(message: RunExportRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    if (message.params !== undefined) {
      obj.params = ExportParams.toJSON(message.params);
    }
    if (message.resultFilename !== "") {
      obj.resultFilename = message.resultFilename;
    }
    if (message.since !== undefined) {
      obj.since = message.since.toISOString();
    }
    if (message.until !== undefined) {
      obj.until = message.until.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RunExportRequest>, I>>(base?: I): RunExportRequest {
    return RunExportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RunExportRequest>, I>>(object: I): RunExportRequest {
    const message = createBaseRunExportRequest();
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ExportParams.fromPartial(object.params)
      : undefined;
    message.resultFilename = object.resultFilename ?? "";
    message.since = object.since ?? undefined;
    message.until = object.until ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RunExportRequest.$type, RunExportRequest);

function createBaseRunExportDetails(): RunExportDetails {
  return {
    $type: "yandex.cloud.logging.v1.RunExportDetails",
    groupId: "",
    sinkId: "",
    params: undefined,
    resultFilename: "",
    since: undefined,
    until: undefined,
  };
}

export const RunExportDetails = {
  $type: "yandex.cloud.logging.v1.RunExportDetails" as const,

  encode(message: RunExportDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.resultFilename !== "") {
      writer.uint32(34).string(message.resultFilename);
    }
    if (message.since !== undefined) {
      Timestamp.encode(toTimestamp(message.since), writer.uint32(42).fork()).ldelim();
    }
    if (message.until !== undefined) {
      Timestamp.encode(toTimestamp(message.until), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRunExportDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sinkId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.params = ExportParams.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resultFilename = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.since = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.until = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RunExportDetails {
    return {
      $type: RunExportDetails.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      params: isSet(object.params) ? ExportParams.fromJSON(object.params) : undefined,
      resultFilename: isSet(object.resultFilename) ? globalThis.String(object.resultFilename) : "",
      since: isSet(object.since) ? fromJsonTimestamp(object.since) : undefined,
      until: isSet(object.until) ? fromJsonTimestamp(object.until) : undefined,
    };
  },

  toJSON(message: RunExportDetails): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    if (message.params !== undefined) {
      obj.params = ExportParams.toJSON(message.params);
    }
    if (message.resultFilename !== "") {
      obj.resultFilename = message.resultFilename;
    }
    if (message.since !== undefined) {
      obj.since = message.since.toISOString();
    }
    if (message.until !== undefined) {
      obj.until = message.until.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RunExportDetails>, I>>(base?: I): RunExportDetails {
    return RunExportDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RunExportDetails>, I>>(object: I): RunExportDetails {
    const message = createBaseRunExportDetails();
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ExportParams.fromPartial(object.params)
      : undefined;
    message.resultFilename = object.resultFilename ?? "";
    message.since = object.since ?? undefined;
    message.until = object.until ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RunExportDetails.$type, RunExportDetails);

function createBaseRunExportMetadata(): RunExportMetadata {
  return { $type: "yandex.cloud.logging.v1.RunExportMetadata", groupId: "", sinkId: "", resultFilename: "" };
}

export const RunExportMetadata = {
  $type: "yandex.cloud.logging.v1.RunExportMetadata" as const,

  encode(message: RunExportMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.resultFilename !== "") {
      writer.uint32(26).string(message.resultFilename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRunExportMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sinkId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resultFilename = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RunExportMetadata {
    return {
      $type: RunExportMetadata.$type,
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      resultFilename: isSet(object.resultFilename) ? globalThis.String(object.resultFilename) : "",
    };
  },

  toJSON(message: RunExportMetadata): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    if (message.resultFilename !== "") {
      obj.resultFilename = message.resultFilename;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RunExportMetadata>, I>>(base?: I): RunExportMetadata {
    return RunExportMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RunExportMetadata>, I>>(object: I): RunExportMetadata {
    const message = createBaseRunExportMetadata();
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.resultFilename = object.resultFilename ?? "";
    return message;
  },
};

messageTypeRegistry.set(RunExportMetadata.$type, RunExportMetadata);

export type ExportServiceService = typeof ExportServiceService;
export const ExportServiceService = {
  run: {
    path: "/yandex.cloud.logging.v1.ExportService/Run",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RunExportRequest) => Buffer.from(RunExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RunExportRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ExportServiceServer extends UntypedServiceImplementation {
  run: handleUnaryCall<RunExportRequest, Operation>;
}

export interface ExportServiceClient extends Client {
  run(request: RunExportRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
  run(
    request: RunExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  run(
    request: RunExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ExportServiceClient = makeGenericClientConstructor(
  ExportServiceService,
  "yandex.cloud.logging.v1.ExportService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ExportServiceClient;
  service: typeof ExportServiceService;
  serviceName: string;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
