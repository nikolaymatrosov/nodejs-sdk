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

export interface CreateTrailRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest";
  computeInstanceId: string;
  data: Trail[];
  jobId: string;
  agentInstanceId: string;
}

export interface Trail {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail";
  overall: number;
  caseId: string;
  time: string;
  reqps: number;
  resps: number;
  expect: number;
  input: number;
  output: number;
  connectTime: number;
  sendTime: number;
  latency: number;
  receiveTime: number;
  threads: number;
  q50: number;
  q75: number;
  q80: number;
  q85: number;
  q90: number;
  q95: number;
  q98: number;
  q99: number;
  q100: number;
  httpCodes: Trail_Codes[];
  netCodes: Trail_Codes[];
  timeIntervals: Trail_Intervals[];
}

export interface Trail_Codes {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes";
  code: number;
  count: number;
}

export interface Trail_Intervals {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals";
  to: number;
  count: number;
}

export interface CreateTrailResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse";
  trailId: string;
  code: number;
}

function createBaseCreateTrailRequest(): CreateTrailRequest {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest",
    computeInstanceId: "",
    data: [],
    jobId: "",
    agentInstanceId: "",
  };
}

export const CreateTrailRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest" as const,

  encode(message: CreateTrailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    for (const v of message.data) {
      Trail.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.jobId !== "") {
      writer.uint32(26).string(message.jobId);
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(34).string(message.agentInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTrailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.computeInstanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data.push(Trail.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CreateTrailRequest {
    return {
      $type: CreateTrailRequest.$type,
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Trail.fromJSON(e)) : [],
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      agentInstanceId: isSet(object.agentInstanceId) ? globalThis.String(object.agentInstanceId) : "",
    };
  },

  toJSON(message: CreateTrailRequest): unknown {
    const obj: any = {};
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => Trail.toJSON(e));
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.agentInstanceId !== "") {
      obj.agentInstanceId = message.agentInstanceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTrailRequest>, I>>(base?: I): CreateTrailRequest {
    return CreateTrailRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTrailRequest>, I>>(object: I): CreateTrailRequest {
    const message = createBaseCreateTrailRequest();
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.data = object.data?.map((e) => Trail.fromPartial(e)) || [];
    message.jobId = object.jobId ?? "";
    message.agentInstanceId = object.agentInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTrailRequest.$type, CreateTrailRequest);

function createBaseTrail(): Trail {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail",
    overall: 0,
    caseId: "",
    time: "",
    reqps: 0,
    resps: 0,
    expect: 0,
    input: 0,
    output: 0,
    connectTime: 0,
    sendTime: 0,
    latency: 0,
    receiveTime: 0,
    threads: 0,
    q50: 0,
    q75: 0,
    q80: 0,
    q85: 0,
    q90: 0,
    q95: 0,
    q98: 0,
    q99: 0,
    q100: 0,
    httpCodes: [],
    netCodes: [],
    timeIntervals: [],
  };
}

export const Trail = {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail" as const,

  encode(message: Trail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overall !== 0) {
      writer.uint32(8).int64(message.overall);
    }
    if (message.caseId !== "") {
      writer.uint32(18).string(message.caseId);
    }
    if (message.time !== "") {
      writer.uint32(26).string(message.time);
    }
    if (message.reqps !== 0) {
      writer.uint32(32).int64(message.reqps);
    }
    if (message.resps !== 0) {
      writer.uint32(40).int64(message.resps);
    }
    if (message.expect !== 0) {
      writer.uint32(49).double(message.expect);
    }
    if (message.input !== 0) {
      writer.uint32(56).int64(message.input);
    }
    if (message.output !== 0) {
      writer.uint32(64).int64(message.output);
    }
    if (message.connectTime !== 0) {
      writer.uint32(73).double(message.connectTime);
    }
    if (message.sendTime !== 0) {
      writer.uint32(81).double(message.sendTime);
    }
    if (message.latency !== 0) {
      writer.uint32(89).double(message.latency);
    }
    if (message.receiveTime !== 0) {
      writer.uint32(97).double(message.receiveTime);
    }
    if (message.threads !== 0) {
      writer.uint32(104).int64(message.threads);
    }
    if (message.q50 !== 0) {
      writer.uint32(113).double(message.q50);
    }
    if (message.q75 !== 0) {
      writer.uint32(121).double(message.q75);
    }
    if (message.q80 !== 0) {
      writer.uint32(129).double(message.q80);
    }
    if (message.q85 !== 0) {
      writer.uint32(137).double(message.q85);
    }
    if (message.q90 !== 0) {
      writer.uint32(145).double(message.q90);
    }
    if (message.q95 !== 0) {
      writer.uint32(153).double(message.q95);
    }
    if (message.q98 !== 0) {
      writer.uint32(161).double(message.q98);
    }
    if (message.q99 !== 0) {
      writer.uint32(169).double(message.q99);
    }
    if (message.q100 !== 0) {
      writer.uint32(177).double(message.q100);
    }
    for (const v of message.httpCodes) {
      Trail_Codes.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.netCodes) {
      Trail_Codes.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.timeIntervals) {
      Trail_Intervals.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.overall = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.caseId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.time = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.reqps = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.resps = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.expect = reader.double();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.input = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.output = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 73) {
            break;
          }

          message.connectTime = reader.double();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.sendTime = reader.double();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.latency = reader.double();
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.receiveTime = reader.double();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.threads = longToNumber(reader.int64() as Long);
          continue;
        case 14:
          if (tag !== 113) {
            break;
          }

          message.q50 = reader.double();
          continue;
        case 15:
          if (tag !== 121) {
            break;
          }

          message.q75 = reader.double();
          continue;
        case 16:
          if (tag !== 129) {
            break;
          }

          message.q80 = reader.double();
          continue;
        case 17:
          if (tag !== 137) {
            break;
          }

          message.q85 = reader.double();
          continue;
        case 18:
          if (tag !== 145) {
            break;
          }

          message.q90 = reader.double();
          continue;
        case 19:
          if (tag !== 153) {
            break;
          }

          message.q95 = reader.double();
          continue;
        case 20:
          if (tag !== 161) {
            break;
          }

          message.q98 = reader.double();
          continue;
        case 21:
          if (tag !== 169) {
            break;
          }

          message.q99 = reader.double();
          continue;
        case 22:
          if (tag !== 177) {
            break;
          }

          message.q100 = reader.double();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.httpCodes.push(Trail_Codes.decode(reader, reader.uint32()));
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.netCodes.push(Trail_Codes.decode(reader, reader.uint32()));
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.timeIntervals.push(Trail_Intervals.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trail {
    return {
      $type: Trail.$type,
      overall: isSet(object.overall) ? globalThis.Number(object.overall) : 0,
      caseId: isSet(object.caseId) ? globalThis.String(object.caseId) : "",
      time: isSet(object.time) ? globalThis.String(object.time) : "",
      reqps: isSet(object.reqps) ? globalThis.Number(object.reqps) : 0,
      resps: isSet(object.resps) ? globalThis.Number(object.resps) : 0,
      expect: isSet(object.expect) ? globalThis.Number(object.expect) : 0,
      input: isSet(object.input) ? globalThis.Number(object.input) : 0,
      output: isSet(object.output) ? globalThis.Number(object.output) : 0,
      connectTime: isSet(object.connectTime) ? globalThis.Number(object.connectTime) : 0,
      sendTime: isSet(object.sendTime) ? globalThis.Number(object.sendTime) : 0,
      latency: isSet(object.latency) ? globalThis.Number(object.latency) : 0,
      receiveTime: isSet(object.receiveTime) ? globalThis.Number(object.receiveTime) : 0,
      threads: isSet(object.threads) ? globalThis.Number(object.threads) : 0,
      q50: isSet(object.q50) ? globalThis.Number(object.q50) : 0,
      q75: isSet(object.q75) ? globalThis.Number(object.q75) : 0,
      q80: isSet(object.q80) ? globalThis.Number(object.q80) : 0,
      q85: isSet(object.q85) ? globalThis.Number(object.q85) : 0,
      q90: isSet(object.q90) ? globalThis.Number(object.q90) : 0,
      q95: isSet(object.q95) ? globalThis.Number(object.q95) : 0,
      q98: isSet(object.q98) ? globalThis.Number(object.q98) : 0,
      q99: isSet(object.q99) ? globalThis.Number(object.q99) : 0,
      q100: isSet(object.q100) ? globalThis.Number(object.q100) : 0,
      httpCodes: globalThis.Array.isArray(object?.httpCodes)
        ? object.httpCodes.map((e: any) => Trail_Codes.fromJSON(e))
        : [],
      netCodes: globalThis.Array.isArray(object?.netCodes)
        ? object.netCodes.map((e: any) => Trail_Codes.fromJSON(e))
        : [],
      timeIntervals: globalThis.Array.isArray(object?.timeIntervals)
        ? object.timeIntervals.map((e: any) => Trail_Intervals.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Trail): unknown {
    const obj: any = {};
    if (message.overall !== 0) {
      obj.overall = Math.round(message.overall);
    }
    if (message.caseId !== "") {
      obj.caseId = message.caseId;
    }
    if (message.time !== "") {
      obj.time = message.time;
    }
    if (message.reqps !== 0) {
      obj.reqps = Math.round(message.reqps);
    }
    if (message.resps !== 0) {
      obj.resps = Math.round(message.resps);
    }
    if (message.expect !== 0) {
      obj.expect = message.expect;
    }
    if (message.input !== 0) {
      obj.input = Math.round(message.input);
    }
    if (message.output !== 0) {
      obj.output = Math.round(message.output);
    }
    if (message.connectTime !== 0) {
      obj.connectTime = message.connectTime;
    }
    if (message.sendTime !== 0) {
      obj.sendTime = message.sendTime;
    }
    if (message.latency !== 0) {
      obj.latency = message.latency;
    }
    if (message.receiveTime !== 0) {
      obj.receiveTime = message.receiveTime;
    }
    if (message.threads !== 0) {
      obj.threads = Math.round(message.threads);
    }
    if (message.q50 !== 0) {
      obj.q50 = message.q50;
    }
    if (message.q75 !== 0) {
      obj.q75 = message.q75;
    }
    if (message.q80 !== 0) {
      obj.q80 = message.q80;
    }
    if (message.q85 !== 0) {
      obj.q85 = message.q85;
    }
    if (message.q90 !== 0) {
      obj.q90 = message.q90;
    }
    if (message.q95 !== 0) {
      obj.q95 = message.q95;
    }
    if (message.q98 !== 0) {
      obj.q98 = message.q98;
    }
    if (message.q99 !== 0) {
      obj.q99 = message.q99;
    }
    if (message.q100 !== 0) {
      obj.q100 = message.q100;
    }
    if (message.httpCodes?.length) {
      obj.httpCodes = message.httpCodes.map((e) => Trail_Codes.toJSON(e));
    }
    if (message.netCodes?.length) {
      obj.netCodes = message.netCodes.map((e) => Trail_Codes.toJSON(e));
    }
    if (message.timeIntervals?.length) {
      obj.timeIntervals = message.timeIntervals.map((e) => Trail_Intervals.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trail>, I>>(base?: I): Trail {
    return Trail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trail>, I>>(object: I): Trail {
    const message = createBaseTrail();
    message.overall = object.overall ?? 0;
    message.caseId = object.caseId ?? "";
    message.time = object.time ?? "";
    message.reqps = object.reqps ?? 0;
    message.resps = object.resps ?? 0;
    message.expect = object.expect ?? 0;
    message.input = object.input ?? 0;
    message.output = object.output ?? 0;
    message.connectTime = object.connectTime ?? 0;
    message.sendTime = object.sendTime ?? 0;
    message.latency = object.latency ?? 0;
    message.receiveTime = object.receiveTime ?? 0;
    message.threads = object.threads ?? 0;
    message.q50 = object.q50 ?? 0;
    message.q75 = object.q75 ?? 0;
    message.q80 = object.q80 ?? 0;
    message.q85 = object.q85 ?? 0;
    message.q90 = object.q90 ?? 0;
    message.q95 = object.q95 ?? 0;
    message.q98 = object.q98 ?? 0;
    message.q99 = object.q99 ?? 0;
    message.q100 = object.q100 ?? 0;
    message.httpCodes = object.httpCodes?.map((e) => Trail_Codes.fromPartial(e)) || [];
    message.netCodes = object.netCodes?.map((e) => Trail_Codes.fromPartial(e)) || [];
    message.timeIntervals = object.timeIntervals?.map((e) => Trail_Intervals.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Trail.$type, Trail);

function createBaseTrail_Codes(): Trail_Codes {
  return { $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes", code: 0, count: 0 };
}

export const Trail_Codes = {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes" as const,

  encode(message: Trail_Codes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int64(message.code);
    }
    if (message.count !== 0) {
      writer.uint32(16).int64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trail_Codes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrail_Codes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trail_Codes {
    return {
      $type: Trail_Codes.$type,
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
    };
  },

  toJSON(message: Trail_Codes): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trail_Codes>, I>>(base?: I): Trail_Codes {
    return Trail_Codes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trail_Codes>, I>>(object: I): Trail_Codes {
    const message = createBaseTrail_Codes();
    message.code = object.code ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Trail_Codes.$type, Trail_Codes);

function createBaseTrail_Intervals(): Trail_Intervals {
  return { $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals", to: 0, count: 0 };
}

export const Trail_Intervals = {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals" as const,

  encode(message: Trail_Intervals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to !== 0) {
      writer.uint32(9).double(message.to);
    }
    if (message.count !== 0) {
      writer.uint32(16).int64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trail_Intervals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrail_Intervals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.to = reader.double();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trail_Intervals {
    return {
      $type: Trail_Intervals.$type,
      to: isSet(object.to) ? globalThis.Number(object.to) : 0,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
    };
  },

  toJSON(message: Trail_Intervals): unknown {
    const obj: any = {};
    if (message.to !== 0) {
      obj.to = message.to;
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trail_Intervals>, I>>(base?: I): Trail_Intervals {
    return Trail_Intervals.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trail_Intervals>, I>>(object: I): Trail_Intervals {
    const message = createBaseTrail_Intervals();
    message.to = object.to ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Trail_Intervals.$type, Trail_Intervals);

function createBaseCreateTrailResponse(): CreateTrailResponse {
  return { $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse", trailId: "", code: 0 };
}

export const CreateTrailResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse" as const,

  encode(message: CreateTrailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trailId !== "") {
      writer.uint32(10).string(message.trailId);
    }
    if (message.code !== 0) {
      writer.uint32(16).int64(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTrailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trailId = reader.string();
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

  fromJSON(object: any): CreateTrailResponse {
    return {
      $type: CreateTrailResponse.$type,
      trailId: isSet(object.trailId) ? globalThis.String(object.trailId) : "",
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
    };
  },

  toJSON(message: CreateTrailResponse): unknown {
    const obj: any = {};
    if (message.trailId !== "") {
      obj.trailId = message.trailId;
    }
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTrailResponse>, I>>(base?: I): CreateTrailResponse {
    return CreateTrailResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTrailResponse>, I>>(object: I): CreateTrailResponse {
    const message = createBaseCreateTrailResponse();
    message.trailId = object.trailId ?? "";
    message.code = object.code ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateTrailResponse.$type, CreateTrailResponse);

export type TrailServiceService = typeof TrailServiceService;
export const TrailServiceService = {
  /** Creates trail for specified job. */
  create: {
    path: "/yandex.cloud.loadtesting.agent.v1.TrailService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTrailRequest) => Buffer.from(CreateTrailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTrailRequest.decode(value),
    responseSerialize: (value: CreateTrailResponse) => Buffer.from(CreateTrailResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateTrailResponse.decode(value),
  },
} as const;

export interface TrailServiceServer extends UntypedServiceImplementation {
  /** Creates trail for specified job. */
  create: handleUnaryCall<CreateTrailRequest, CreateTrailResponse>;
}

export interface TrailServiceClient extends Client {
  /** Creates trail for specified job. */
  create(
    request: CreateTrailRequest,
    callback: (error: ServiceError | null, response: CreateTrailResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTrailRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateTrailResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTrailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateTrailResponse) => void,
  ): ClientUnaryCall;
}

export const TrailServiceClient = makeGenericClientConstructor(
  TrailServiceService,
  "yandex.cloud.loadtesting.agent.v1.TrailService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TrailServiceClient;
  service: typeof TrailServiceService;
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
