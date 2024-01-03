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
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface AddMetricRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest";
  computeInstanceId: string;
  jobId: string;
  chunks: MetricChunk[];
  agentInstanceId: string;
}

export interface MetricChunk {
  $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk";
  data: Metric[];
  timestamp: number;
  comment: string;
  instanceHost: string;
}

export interface Metric {
  $type: "yandex.cloud.loadtesting.agent.v1.Metric";
  metricType: string;
  metricName: string;
  metricValue: number;
}

export interface AddMetricResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse";
  metricTrailId: string;
  code: number;
}

function createBaseAddMetricRequest(): AddMetricRequest {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest",
    computeInstanceId: "",
    jobId: "",
    chunks: [],
    agentInstanceId: "",
  };
}

export const AddMetricRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest" as const,

  encode(message: AddMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.jobId !== "") {
      writer.uint32(26).string(message.jobId);
    }
    for (const v of message.chunks) {
      MetricChunk.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(42).string(message.agentInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMetricRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddMetricRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jobId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chunks.push(MetricChunk.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.agentInstanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddMetricRequest {
    return {
      $type: AddMetricRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      chunks: globalThis.Array.isArray(object?.chunks) ? object.chunks.map((e: any) => MetricChunk.fromJSON(e)) : [],
      agentInstanceId: isSet(object.agentInstanceId) ? globalThis.String(object.agentInstanceId) : "",
    };
  },

  toJSON(message: AddMetricRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.chunks?.length) {
      obj.chunks = message.chunks.map((e) => MetricChunk.toJSON(e));
    }
    if (message.agentInstanceId !== "") {
      obj.agentInstanceId = message.agentInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddMetricRequest>, I>>(base?: I): AddMetricRequest {
    return AddMetricRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddMetricRequest>, I>>(object: I): AddMetricRequest {
    const message = createBaseAddMetricRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.jobId = object.jobId ?? "";
    message.chunks = object.chunks?.map((e) => MetricChunk.fromPartial(e)) || [];
    message.agentInstanceId = object.agentInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddMetricRequest.$type, AddMetricRequest);

function createBaseMetricChunk(): MetricChunk {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk",
    data: [],
    timestamp: 0,
    comment: "",
    instanceHost: "",
  };
}

export const MetricChunk = {
  $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk" as const,

  encode(message: MetricChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Metric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).int64(message.timestamp);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    if (message.instanceHost !== "") {
      writer.uint32(34).string(message.instanceHost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricChunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(Metric.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.instanceHost = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MetricChunk {
    return {
      $type: MetricChunk.$type,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Metric.fromJSON(e)) : [],
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
      instanceHost: isSet(object.instanceHost) ? globalThis.String(object.instanceHost) : "",
    };
  },

  toJSON(message: MetricChunk): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => Metric.toJSON(e));
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.instanceHost !== "") {
      obj.instanceHost = message.instanceHost;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MetricChunk>, I>>(base?: I): MetricChunk {
    return MetricChunk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MetricChunk>, I>>(object: I): MetricChunk {
    const message = createBaseMetricChunk();
    message.data = object.data?.map((e) => Metric.fromPartial(e)) || [];
    message.timestamp = object.timestamp ?? 0;
    message.comment = object.comment ?? "";
    message.instanceHost = object.instanceHost ?? "";
    return message;
  },
};

messageTypeRegistry.set(MetricChunk.$type, MetricChunk);

function createBaseMetric(): Metric {
  return { $type: "yandex.cloud.loadtesting.agent.v1.Metric", metricType: "", metricName: "", metricValue: 0 };
}

export const Metric = {
  $type: "yandex.cloud.loadtesting.agent.v1.Metric" as const,

  encode(message: Metric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricType !== "") {
      writer.uint32(10).string(message.metricType);
    }
    if (message.metricName !== "") {
      writer.uint32(18).string(message.metricName);
    }
    if (message.metricValue !== 0) {
      writer.uint32(25).double(message.metricValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metricType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metricName = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.metricValue = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metric {
    return {
      $type: Metric.$type,
      metricType: isSet(object.metricType) ? globalThis.String(object.metricType) : "",
      metricName: isSet(object.metricName) ? globalThis.String(object.metricName) : "",
      metricValue: isSet(object.metricValue) ? globalThis.Number(object.metricValue) : 0,
    };
  },

  toJSON(message: Metric): unknown {
    const obj: any = {};
    if (message.metricType !== "") {
      obj.metricType = message.metricType;
    }
    if (message.metricName !== "") {
      obj.metricName = message.metricName;
    }
    if (message.metricValue !== 0) {
      obj.metricValue = message.metricValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Metric>, I>>(base?: I): Metric {
    return Metric.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Metric>, I>>(object: I): Metric {
    const message = createBaseMetric();
    message.metricType = object.metricType ?? "";
    message.metricName = object.metricName ?? "";
    message.metricValue = object.metricValue ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Metric.$type, Metric);

function createBaseAddMetricResponse(): AddMetricResponse {
  return { $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse", metricTrailId: "", code: 0 };
}

export const AddMetricResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse" as const,

  encode(message: AddMetricResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricTrailId !== "") {
      writer.uint32(10).string(message.metricTrailId);
    }
    if (message.code !== 0) {
      writer.uint32(16).int64(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMetricResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddMetricResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metricTrailId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.code = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddMetricResponse {
    return {
      $type: AddMetricResponse.$type,
      metricTrailId: isSet(object.metricTrailId) ? globalThis.String(object.metricTrailId) : "",
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
    };
  },

  toJSON(message: AddMetricResponse): unknown {
    const obj: any = {};
    if (message.metricTrailId !== "") {
      obj.metricTrailId = message.metricTrailId;
    }
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddMetricResponse>, I>>(base?: I): AddMetricResponse {
    return AddMetricResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddMetricResponse>, I>>(object: I): AddMetricResponse {
    const message = createBaseAddMetricResponse();
    message.metricTrailId = object.metricTrailId ?? "";
    message.code = object.code ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AddMetricResponse.$type, AddMetricResponse);

export type MonitoringServiceService = typeof MonitoringServiceService;
export const MonitoringServiceService = {
  /** Saves monitoring events for specified job */
  addMetric: {
    path: "/yandex.cloud.loadtesting.agent.v1.MonitoringService/AddMetric",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddMetricRequest) => Buffer.from(AddMetricRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddMetricRequest.decode(value),
    responseSerialize: (value: AddMetricResponse) => Buffer.from(AddMetricResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AddMetricResponse.decode(value),
  },
} as const;

export interface MonitoringServiceServer extends UntypedServiceImplementation {
  /** Saves monitoring events for specified job */
  addMetric: handleUnaryCall<AddMetricRequest, AddMetricResponse>;
}

export interface MonitoringServiceClient extends Client {
  /** Saves monitoring events for specified job */
  addMetric(
    request: AddMetricRequest,
    callback: (error: ServiceError | null, response: AddMetricResponse) => void,
  ): ClientUnaryCall;
  addMetric(
    request: AddMetricRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AddMetricResponse) => void,
  ): ClientUnaryCall;
  addMetric(
    request: AddMetricRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AddMetricResponse) => void,
  ): ClientUnaryCall;
}

export const MonitoringServiceClient = makeGenericClientConstructor(
  MonitoringServiceService,
  "yandex.cloud.loadtesting.agent.v1.MonitoringService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MonitoringServiceClient;
  service: typeof MonitoringServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
