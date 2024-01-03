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
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { QueryStatement, SessionState } from "./perf_diag";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

export interface ListRawStatementsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest";
  /**
   * ID of a PostgreSQL cluster to request query statistics for.
   *
   * To get a PostgreSQL cluster ID, use the [ClusterService.List] method.
   */
  clusterId: string;
  /** Beginning of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  fromTime?:
    | Date
    | undefined;
  /** End of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  toTime?:
    | Date
    | undefined;
  /** The maximum number of results per page to return. If the number of the results is larger than [page_size], the service returns [ListRawStatementsResponse.next_page_token]. You can use it to get the next page of the results in subsequent requests. */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListRawStatementsResponse.next_page_token] returned by the previous SQL statement list request. */
  pageToken: string;
}

export interface ListRawSessionStatesRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest";
  /**
   * ID of a PostgreSQL cluster to request session statistics for.
   *
   * To get a PostgreSQL cluster ID, use the [ClusterService.List] request.
   */
  clusterId: string;
  /** Beginning of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  fromTime?:
    | Date
    | undefined;
  /** End of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  toTime?:
    | Date
    | undefined;
  /** The maximum number of results per page to return. If the number of the results is larger than [page_size], the service returns [ListRawSessionStatesResponse.next_page_token]. You can use it to get the next page of the results in subsequent requests. */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListRawSessionStatesResponse.next_page_token] returned by the previous PostgreSQL session list request. */
  pageToken: string;
}

export interface ListRawSessionStatesResponse {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse";
  /** List of PostgreSQL sessions. */
  sessionStates: SessionState[];
  /** This token allows you to get the next page of results when requesting the PostgreSQL session list. If the number of the results is larger than [ListRawSessionStatesRequest.page_size], use the [next_page_token] as the value for the [ListRawSessionStatesRequest.page_token] parameter in the next request. Each subsequent request will have its own [next_page_token] to continue paging through the results. */
  nextPageToken: string;
}

export interface ListRawStatementsResponse {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse";
  /** List of SQL statements (queries). */
  statements: QueryStatement[];
  /** This token allows you to get the next page of results when requesting the PostgreSQL session list. If the number of the results is larger than [ListRawStatementsRequest.page_size], use the [next_page_token] as the value for the [ListRawStatementsRequest.page_token] parameter in the next request. Each subsequent request will have its own [next_page_token] to continue paging through the results. */
  nextPageToken: string;
}

function createBaseListRawStatementsRequest(): ListRawStatementsRequest {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest",
    clusterId: "",
    fromTime: undefined,
    toTime: undefined,
    pageSize: 0,
    pageToken: "",
  };
}

export const ListRawStatementsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest" as const,

  encode(message: ListRawStatementsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(toTimestamp(message.toTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRawStatementsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRawStatementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fromTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.toTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRawStatementsRequest {
    return {
      $type: ListRawStatementsRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      fromTime: isSet(object.fromTime) ? fromJsonTimestamp(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? fromJsonTimestamp(object.toTime) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListRawStatementsRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.fromTime !== undefined) {
      obj.fromTime = message.fromTime.toISOString();
    }
    if (message.toTime !== undefined) {
      obj.toTime = message.toTime.toISOString();
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListRawStatementsRequest>): ListRawStatementsRequest {
    return ListRawStatementsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRawStatementsRequest>): ListRawStatementsRequest {
    const message = createBaseListRawStatementsRequest();
    message.clusterId = object.clusterId ?? "";
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRawStatementsRequest.$type, ListRawStatementsRequest);

function createBaseListRawSessionStatesRequest(): ListRawSessionStatesRequest {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest",
    clusterId: "",
    fromTime: undefined,
    toTime: undefined,
    pageSize: 0,
    pageToken: "",
  };
}

export const ListRawSessionStatesRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest" as const,

  encode(message: ListRawSessionStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(toTimestamp(message.toTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRawSessionStatesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRawSessionStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fromTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.toTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRawSessionStatesRequest {
    return {
      $type: ListRawSessionStatesRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      fromTime: isSet(object.fromTime) ? fromJsonTimestamp(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? fromJsonTimestamp(object.toTime) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListRawSessionStatesRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.fromTime !== undefined) {
      obj.fromTime = message.fromTime.toISOString();
    }
    if (message.toTime !== undefined) {
      obj.toTime = message.toTime.toISOString();
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListRawSessionStatesRequest>): ListRawSessionStatesRequest {
    return ListRawSessionStatesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRawSessionStatesRequest>): ListRawSessionStatesRequest {
    const message = createBaseListRawSessionStatesRequest();
    message.clusterId = object.clusterId ?? "";
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRawSessionStatesRequest.$type, ListRawSessionStatesRequest);

function createBaseListRawSessionStatesResponse(): ListRawSessionStatesResponse {
  return { $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse", sessionStates: [], nextPageToken: "" };
}

export const ListRawSessionStatesResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse" as const,

  encode(message: ListRawSessionStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessionStates) {
      SessionState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRawSessionStatesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRawSessionStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionStates.push(SessionState.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRawSessionStatesResponse {
    return {
      $type: ListRawSessionStatesResponse.$type,
      sessionStates: globalThis.Array.isArray(object?.sessionStates)
        ? object.sessionStates.map((e: any) => SessionState.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListRawSessionStatesResponse): unknown {
    const obj: any = {};
    if (message.sessionStates?.length) {
      obj.sessionStates = message.sessionStates.map((e) => SessionState.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListRawSessionStatesResponse>): ListRawSessionStatesResponse {
    return ListRawSessionStatesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRawSessionStatesResponse>): ListRawSessionStatesResponse {
    const message = createBaseListRawSessionStatesResponse();
    message.sessionStates = object.sessionStates?.map((e) => SessionState.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRawSessionStatesResponse.$type, ListRawSessionStatesResponse);

function createBaseListRawStatementsResponse(): ListRawStatementsResponse {
  return { $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse", statements: [], nextPageToken: "" };
}

export const ListRawStatementsResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse" as const,

  encode(message: ListRawStatementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.statements) {
      QueryStatement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRawStatementsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRawStatementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.statements.push(QueryStatement.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRawStatementsResponse {
    return {
      $type: ListRawStatementsResponse.$type,
      statements: globalThis.Array.isArray(object?.statements)
        ? object.statements.map((e: any) => QueryStatement.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListRawStatementsResponse): unknown {
    const obj: any = {};
    if (message.statements?.length) {
      obj.statements = message.statements.map((e) => QueryStatement.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListRawStatementsResponse>): ListRawStatementsResponse {
    return ListRawStatementsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRawStatementsResponse>): ListRawStatementsResponse {
    const message = createBaseListRawStatementsResponse();
    message.statements = object.statements?.map((e) => QueryStatement.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRawStatementsResponse.$type, ListRawStatementsResponse);

/** A set of methods for PostgreSQL performance diagnostics. */
export type PerformanceDiagnosticsServiceService = typeof PerformanceDiagnosticsServiceService;
export const PerformanceDiagnosticsServiceService = {
  /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  listRawSessionStates: {
    path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawSessionStates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRawSessionStatesRequest) =>
      Buffer.from(ListRawSessionStatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListRawSessionStatesRequest.decode(value),
    responseSerialize: (value: ListRawSessionStatesResponse) =>
      Buffer.from(ListRawSessionStatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListRawSessionStatesResponse.decode(value),
  },
  /** Retrieves statistics on planning and execution of SQL statements (queries). */
  listRawStatements: {
    path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawStatements",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRawStatementsRequest) => Buffer.from(ListRawStatementsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListRawStatementsRequest.decode(value),
    responseSerialize: (value: ListRawStatementsResponse) =>
      Buffer.from(ListRawStatementsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListRawStatementsResponse.decode(value),
  },
} as const;

export interface PerformanceDiagnosticsServiceServer extends UntypedServiceImplementation {
  /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  listRawSessionStates: handleUnaryCall<ListRawSessionStatesRequest, ListRawSessionStatesResponse>;
  /** Retrieves statistics on planning and execution of SQL statements (queries). */
  listRawStatements: handleUnaryCall<ListRawStatementsRequest, ListRawStatementsResponse>;
}

export interface PerformanceDiagnosticsServiceClient extends Client {
  /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  listRawSessionStates(
    request: ListRawSessionStatesRequest,
    callback: (error: ServiceError | null, response: ListRawSessionStatesResponse) => void,
  ): ClientUnaryCall;
  listRawSessionStates(
    request: ListRawSessionStatesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListRawSessionStatesResponse) => void,
  ): ClientUnaryCall;
  listRawSessionStates(
    request: ListRawSessionStatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListRawSessionStatesResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves statistics on planning and execution of SQL statements (queries). */
  listRawStatements(
    request: ListRawStatementsRequest,
    callback: (error: ServiceError | null, response: ListRawStatementsResponse) => void,
  ): ClientUnaryCall;
  listRawStatements(
    request: ListRawStatementsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListRawStatementsResponse) => void,
  ): ClientUnaryCall;
  listRawStatements(
    request: ListRawStatementsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListRawStatementsResponse) => void,
  ): ClientUnaryCall;
}

export const PerformanceDiagnosticsServiceClient = makeGenericClientConstructor(
  PerformanceDiagnosticsServiceService,
  "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): PerformanceDiagnosticsServiceClient;
  service: typeof PerformanceDiagnosticsServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
