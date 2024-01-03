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
import { Version } from "./version";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export interface ListVersionsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListVersionsRequest";
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListVersionsResponse.next_page_token] that can be used
   * to get the next page of results in subsequent ListVersions requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token] to the [ListVersionsResponse.next_page_token] returned by a previous ListVersions
   * request to get the next page of results.
   */
  pageToken: string;
}

export interface ListVersionsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListVersionsResponse";
  /** Requested list of available versions. */
  version: Version[];
  /**
   * This token allows you to get the next page of results for ListVersions requests,
   * if the number of results is larger than [ListVersionsRequest.page_size] specified in the request.
   * To get the next page, specify the value of [next_page_token] as a value for
   * the [ListVersionsRequest.page_token] parameter in the next ListVerions request. Subsequent ListVersions
   * requests will have their own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseListVersionsRequest(): ListVersionsRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListVersionsRequest", pageSize: 0, pageToken: "" };
}

export const ListVersionsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListVersionsRequest" as const,

  encode(message: ListVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): ListVersionsRequest {
    return {
      $type: ListVersionsRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListVersionsRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListVersionsRequest>): ListVersionsRequest {
    return ListVersionsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVersionsRequest>): ListVersionsRequest {
    const message = createBaseListVersionsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVersionsRequest.$type, ListVersionsRequest);

function createBaseListVersionsResponse(): ListVersionsResponse {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListVersionsResponse", version: [], nextPageToken: "" };
}

export const ListVersionsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListVersionsResponse" as const,

  encode(message: ListVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.version) {
      Version.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version.push(Version.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListVersionsResponse {
    return {
      $type: ListVersionsResponse.$type,
      version: globalThis.Array.isArray(object?.version) ? object.version.map((e: any) => Version.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListVersionsResponse): unknown {
    const obj: any = {};
    if (message.version?.length) {
      obj.version = message.version.map((e) => Version.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListVersionsResponse>): ListVersionsResponse {
    return ListVersionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVersionsResponse>): ListVersionsResponse {
    const message = createBaseListVersionsResponse();
    message.version = object.version?.map((e) => Version.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVersionsResponse.$type, ListVersionsResponse);

/** A set of methods for managing ClickHouse versions. */
export type VersionsServiceService = typeof VersionsServiceService;
export const VersionsServiceService = {
  /** Returns list of available ClickHouse versions. */
  list: {
    path: "/yandex.cloud.mdb.clickhouse.v1.VersionsService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListVersionsRequest) => Buffer.from(ListVersionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListVersionsRequest.decode(value),
    responseSerialize: (value: ListVersionsResponse) => Buffer.from(ListVersionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListVersionsResponse.decode(value),
  },
} as const;

export interface VersionsServiceServer extends UntypedServiceImplementation {
  /** Returns list of available ClickHouse versions. */
  list: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
}

export interface VersionsServiceClient extends Client {
  /** Returns list of available ClickHouse versions. */
  list(
    request: ListVersionsRequest,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListVersionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListVersionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListVersionsResponse) => void,
  ): ClientUnaryCall;
}

export const VersionsServiceClient = makeGenericClientConstructor(
  VersionsServiceService,
  "yandex.cloud.mdb.clickhouse.v1.VersionsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): VersionsServiceClient;
  service: typeof VersionsServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
