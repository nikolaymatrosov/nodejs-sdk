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
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Status, statusFromJSON, statusToJSON } from "./report/status";
import { Report } from "./report/table/report";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1";

export interface GetTableReportRequest {
  $type: "yandex.cloud.loadtesting.api.v1.GetTableReportRequest";
  /** ID of the test for which report table will be returned. */
  testId: string;
}

export interface GetTableReportResponse {
  $type: "yandex.cloud.loadtesting.api.v1.GetTableReportResponse";
  /** Status of report table. */
  status: Status;
  /** Result for all test cases combined ("overall" test case). */
  overall?:
    | Report
    | undefined;
  /** Results for individual test cases, mapped as `case_name:report`. */
  cases: { [key: string]: Report };
}

export interface GetTableReportResponse_CasesEntry {
  $type: "yandex.cloud.loadtesting.api.v1.GetTableReportResponse.CasesEntry";
  key: string;
  value?: Report | undefined;
}

function createBaseGetTableReportRequest(): GetTableReportRequest {
  return { $type: "yandex.cloud.loadtesting.api.v1.GetTableReportRequest", testId: "" };
}

export const GetTableReportRequest = {
  $type: "yandex.cloud.loadtesting.api.v1.GetTableReportRequest" as const,

  encode(message: GetTableReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTableReportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTableReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTableReportRequest {
    return { $type: GetTableReportRequest.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: GetTableReportRequest): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTableReportRequest>, I>>(base?: I): GetTableReportRequest {
    return GetTableReportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTableReportRequest>, I>>(object: I): GetTableReportRequest {
    const message = createBaseGetTableReportRequest();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTableReportRequest.$type, GetTableReportRequest);

function createBaseGetTableReportResponse(): GetTableReportResponse {
  return { $type: "yandex.cloud.loadtesting.api.v1.GetTableReportResponse", status: 0, overall: undefined, cases: {} };
}

export const GetTableReportResponse = {
  $type: "yandex.cloud.loadtesting.api.v1.GetTableReportResponse" as const,

  encode(message: GetTableReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.overall !== undefined) {
      Report.encode(message.overall, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.cases).forEach(([key, value]) => {
      GetTableReportResponse_CasesEntry.encode({
        $type: "yandex.cloud.loadtesting.api.v1.GetTableReportResponse.CasesEntry",
        key: key as any,
        value,
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTableReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTableReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.overall = Report.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = GetTableReportResponse_CasesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.cases[entry3.key] = entry3.value;
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

  fromJSON(object: any): GetTableReportResponse {
    return {
      $type: GetTableReportResponse.$type,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      overall: isSet(object.overall) ? Report.fromJSON(object.overall) : undefined,
      cases: isObject(object.cases)
        ? Object.entries(object.cases).reduce<{ [key: string]: Report }>((acc, [key, value]) => {
          acc[key] = Report.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GetTableReportResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.overall !== undefined) {
      obj.overall = Report.toJSON(message.overall);
    }
    if (message.cases) {
      const entries = Object.entries(message.cases);
      if (entries.length > 0) {
        obj.cases = {};
        entries.forEach(([k, v]) => {
          obj.cases[k] = Report.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTableReportResponse>, I>>(base?: I): GetTableReportResponse {
    return GetTableReportResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTableReportResponse>, I>>(object: I): GetTableReportResponse {
    const message = createBaseGetTableReportResponse();
    message.status = object.status ?? 0;
    message.overall = (object.overall !== undefined && object.overall !== null)
      ? Report.fromPartial(object.overall)
      : undefined;
    message.cases = Object.entries(object.cases ?? {}).reduce<{ [key: string]: Report }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Report.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(GetTableReportResponse.$type, GetTableReportResponse);

function createBaseGetTableReportResponse_CasesEntry(): GetTableReportResponse_CasesEntry {
  return { $type: "yandex.cloud.loadtesting.api.v1.GetTableReportResponse.CasesEntry", key: "", value: undefined };
}

export const GetTableReportResponse_CasesEntry = {
  $type: "yandex.cloud.loadtesting.api.v1.GetTableReportResponse.CasesEntry" as const,

  encode(message: GetTableReportResponse_CasesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Report.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTableReportResponse_CasesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTableReportResponse_CasesEntry();
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

          message.value = Report.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTableReportResponse_CasesEntry {
    return {
      $type: GetTableReportResponse_CasesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Report.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GetTableReportResponse_CasesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Report.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTableReportResponse_CasesEntry>, I>>(
    base?: I,
  ): GetTableReportResponse_CasesEntry {
    return GetTableReportResponse_CasesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTableReportResponse_CasesEntry>, I>>(
    object: I,
  ): GetTableReportResponse_CasesEntry {
    const message = createBaseGetTableReportResponse_CasesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Report.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetTableReportResponse_CasesEntry.$type, GetTableReportResponse_CasesEntry);

/** A set of methods for managing test reports. */
export type ReportServiceService = typeof ReportServiceService;
export const ReportServiceService = {
  /** Returns a report table for the specified test. */
  getTable: {
    path: "/yandex.cloud.loadtesting.api.v1.ReportService/GetTable",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTableReportRequest) => Buffer.from(GetTableReportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTableReportRequest.decode(value),
    responseSerialize: (value: GetTableReportResponse) => Buffer.from(GetTableReportResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetTableReportResponse.decode(value),
  },
} as const;

export interface ReportServiceServer extends UntypedServiceImplementation {
  /** Returns a report table for the specified test. */
  getTable: handleUnaryCall<GetTableReportRequest, GetTableReportResponse>;
}

export interface ReportServiceClient extends Client {
  /** Returns a report table for the specified test. */
  getTable(
    request: GetTableReportRequest,
    callback: (error: ServiceError | null, response: GetTableReportResponse) => void,
  ): ClientUnaryCall;
  getTable(
    request: GetTableReportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetTableReportResponse) => void,
  ): ClientUnaryCall;
  getTable(
    request: GetTableReportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetTableReportResponse) => void,
  ): ClientUnaryCall;
}

export const ReportServiceClient = makeGenericClientConstructor(
  ReportServiceService,
  "yandex.cloud.loadtesting.api.v1.ReportService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ReportServiceClient;
  service: typeof ReportServiceService;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
