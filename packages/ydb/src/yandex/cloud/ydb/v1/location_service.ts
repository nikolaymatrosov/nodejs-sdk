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
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Location } from "./location";

export const protobufPackage = "yandex.cloud.ydb.v1";

export interface GetLocationRequest {
  $type: "yandex.cloud.ydb.v1.GetLocationRequest";
  /** Required. ID of the location to return. */
  locationId: string;
}

export interface ListLocationsRequest {
  $type: "yandex.cloud.ydb.v1.ListLocationsRequest";
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a `next_page_token` that can be used
   * to get the next page of results in subsequent ListLocations requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set `page_token` to the `next_page_token` returned by a previous ListLocations
   * request to get the next page of results.
   */
  pageToken: string;
}

export interface ListLocationsResponse {
  $type: "yandex.cloud.ydb.v1.ListLocationsResponse";
  /** Requested list of locations. */
  locations: Location[];
  /**
   * This token allows you to get the next page of results for ListLocations requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListLocations request. Subsequent ListLocations
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetLocationRequest(): GetLocationRequest {
  return { $type: "yandex.cloud.ydb.v1.GetLocationRequest", locationId: "" };
}

export const GetLocationRequest = {
  $type: "yandex.cloud.ydb.v1.GetLocationRequest" as const,

  encode(message: GetLocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.locationId !== "") {
      writer.uint32(10).string(message.locationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLocationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.locationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLocationRequest {
    return {
      $type: GetLocationRequest.$type,
      locationId: isSet(object.locationId) ? globalThis.String(object.locationId) : "",
    };
  },

  toJSON(message: GetLocationRequest): unknown {
    const obj: any = {};
    if (message.locationId !== "") {
      obj.locationId = message.locationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLocationRequest>, I>>(base?: I): GetLocationRequest {
    return GetLocationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLocationRequest>, I>>(object: I): GetLocationRequest {
    const message = createBaseGetLocationRequest();
    message.locationId = object.locationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLocationRequest.$type, GetLocationRequest);

function createBaseListLocationsRequest(): ListLocationsRequest {
  return { $type: "yandex.cloud.ydb.v1.ListLocationsRequest", pageSize: 0, pageToken: "" };
}

export const ListLocationsRequest = {
  $type: "yandex.cloud.ydb.v1.ListLocationsRequest" as const,

  encode(message: ListLocationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLocationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLocationsRequest();
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

  fromJSON(object: any): ListLocationsRequest {
    return {
      $type: ListLocationsRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListLocationsRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLocationsRequest>, I>>(base?: I): ListLocationsRequest {
    return ListLocationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLocationsRequest>, I>>(object: I): ListLocationsRequest {
    const message = createBaseListLocationsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLocationsRequest.$type, ListLocationsRequest);

function createBaseListLocationsResponse(): ListLocationsResponse {
  return { $type: "yandex.cloud.ydb.v1.ListLocationsResponse", locations: [], nextPageToken: "" };
}

export const ListLocationsResponse = {
  $type: "yandex.cloud.ydb.v1.ListLocationsResponse" as const,

  encode(message: ListLocationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locations) {
      Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLocationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLocationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.locations.push(Location.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListLocationsResponse {
    return {
      $type: ListLocationsResponse.$type,
      locations: globalThis.Array.isArray(object?.locations)
        ? object.locations.map((e: any) => Location.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListLocationsResponse): unknown {
    const obj: any = {};
    if (message.locations?.length) {
      obj.locations = message.locations.map((e) => Location.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListLocationsResponse>, I>>(base?: I): ListLocationsResponse {
    return ListLocationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListLocationsResponse>, I>>(object: I): ListLocationsResponse {
    const message = createBaseListLocationsResponse();
    message.locations = object.locations?.map((e) => Location.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLocationsResponse.$type, ListLocationsResponse);

export type LocationServiceService = typeof LocationServiceService;
export const LocationServiceService = {
  /** Returns the specified location. */
  get: {
    path: "/yandex.cloud.ydb.v1.LocationService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLocationRequest) => Buffer.from(GetLocationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLocationRequest.decode(value),
    responseSerialize: (value: Location) => Buffer.from(Location.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Location.decode(value),
  },
  /** Returns the list of available locations. */
  list: {
    path: "/yandex.cloud.ydb.v1.LocationService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLocationsRequest) => Buffer.from(ListLocationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListLocationsRequest.decode(value),
    responseSerialize: (value: ListLocationsResponse) => Buffer.from(ListLocationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListLocationsResponse.decode(value),
  },
} as const;

export interface LocationServiceServer extends UntypedServiceImplementation {
  /** Returns the specified location. */
  get: handleUnaryCall<GetLocationRequest, Location>;
  /** Returns the list of available locations. */
  list: handleUnaryCall<ListLocationsRequest, ListLocationsResponse>;
}

export interface LocationServiceClient extends Client {
  /** Returns the specified location. */
  get(request: GetLocationRequest, callback: (error: ServiceError | null, response: Location) => void): ClientUnaryCall;
  get(
    request: GetLocationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Location) => void,
  ): ClientUnaryCall;
  get(
    request: GetLocationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Location) => void,
  ): ClientUnaryCall;
  /** Returns the list of available locations. */
  list(
    request: ListLocationsRequest,
    callback: (error: ServiceError | null, response: ListLocationsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLocationsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListLocationsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListLocationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListLocationsResponse) => void,
  ): ClientUnaryCall;
}

export const LocationServiceClient = makeGenericClientConstructor(
  LocationServiceService,
  "yandex.cloud.ydb.v1.LocationService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LocationServiceClient;
  service: typeof LocationServiceService;
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
