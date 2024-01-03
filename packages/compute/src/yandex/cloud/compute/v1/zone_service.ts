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
import { Zone } from "./zone";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface ListZonesRequest {
  $type: "yandex.cloud.compute.v1.ListZonesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListZonesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListZonesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListZonesResponse {
  $type: "yandex.cloud.compute.v1.ListZonesResponse";
  /** List of availability zones. */
  zones: Zone[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListZonesRequest.page_size], use
   * the [ListZonesRequest.page_token] as the value
   * for the [ListZonesRequest.page_token] query parameter
   * in the next list request. Subsequent list requests will have their own
   * [ListZonesRequest.page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface GetZoneRequest {
  $type: "yandex.cloud.compute.v1.GetZoneRequest";
  /** ID of the availability zone to return information about. */
  zoneId: string;
}

function createBaseListZonesRequest(): ListZonesRequest {
  return { $type: "yandex.cloud.compute.v1.ListZonesRequest", pageSize: 0, pageToken: "" };
}

export const ListZonesRequest = {
  $type: "yandex.cloud.compute.v1.ListZonesRequest" as const,

  encode(message: ListZonesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListZonesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListZonesRequest();
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

  fromJSON(object: any): ListZonesRequest {
    return {
      $type: ListZonesRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListZonesRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListZonesRequest>, I>>(base?: I): ListZonesRequest {
    return ListZonesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListZonesRequest>, I>>(object: I): ListZonesRequest {
    const message = createBaseListZonesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListZonesRequest.$type, ListZonesRequest);

function createBaseListZonesResponse(): ListZonesResponse {
  return { $type: "yandex.cloud.compute.v1.ListZonesResponse", zones: [], nextPageToken: "" };
}

export const ListZonesResponse = {
  $type: "yandex.cloud.compute.v1.ListZonesResponse" as const,

  encode(message: ListZonesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.zones) {
      Zone.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListZonesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListZonesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zones.push(Zone.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListZonesResponse {
    return {
      $type: ListZonesResponse.$type,
      zones: globalThis.Array.isArray(object?.zones) ? object.zones.map((e: any) => Zone.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListZonesResponse): unknown {
    const obj: any = {};
    if (message.zones?.length) {
      obj.zones = message.zones.map((e) => Zone.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListZonesResponse>, I>>(base?: I): ListZonesResponse {
    return ListZonesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListZonesResponse>, I>>(object: I): ListZonesResponse {
    const message = createBaseListZonesResponse();
    message.zones = object.zones?.map((e) => Zone.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListZonesResponse.$type, ListZonesResponse);

function createBaseGetZoneRequest(): GetZoneRequest {
  return { $type: "yandex.cloud.compute.v1.GetZoneRequest", zoneId: "" };
}

export const GetZoneRequest = {
  $type: "yandex.cloud.compute.v1.GetZoneRequest" as const,

  encode(message: GetZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetZoneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetZoneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetZoneRequest {
    return { $type: GetZoneRequest.$type, zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "" };
  },

  toJSON(message: GetZoneRequest): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetZoneRequest>, I>>(base?: I): GetZoneRequest {
    return GetZoneRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetZoneRequest>, I>>(object: I): GetZoneRequest {
    const message = createBaseGetZoneRequest();
    message.zoneId = object.zoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetZoneRequest.$type, GetZoneRequest);

/** A set of methods to retrieve information about availability zones. */
export type ZoneServiceService = typeof ZoneServiceService;
export const ZoneServiceService = {
  /**
   * Returns the information about the specified availability zone.
   *
   * To get the list of availability zones, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.ZoneService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetZoneRequest) => Buffer.from(GetZoneRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetZoneRequest.decode(value),
    responseSerialize: (value: Zone) => Buffer.from(Zone.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Zone.decode(value),
  },
  /** Retrieves the list of availability zones. */
  list: {
    path: "/yandex.cloud.compute.v1.ZoneService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListZonesRequest) => Buffer.from(ListZonesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListZonesRequest.decode(value),
    responseSerialize: (value: ListZonesResponse) => Buffer.from(ListZonesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListZonesResponse.decode(value),
  },
} as const;

export interface ZoneServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the information about the specified availability zone.
   *
   * To get the list of availability zones, make a [List] request.
   */
  get: handleUnaryCall<GetZoneRequest, Zone>;
  /** Retrieves the list of availability zones. */
  list: handleUnaryCall<ListZonesRequest, ListZonesResponse>;
}

export interface ZoneServiceClient extends Client {
  /**
   * Returns the information about the specified availability zone.
   *
   * To get the list of availability zones, make a [List] request.
   */
  get(request: GetZoneRequest, callback: (error: ServiceError | null, response: Zone) => void): ClientUnaryCall;
  get(
    request: GetZoneRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Zone) => void,
  ): ClientUnaryCall;
  get(
    request: GetZoneRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Zone) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of availability zones. */
  list(
    request: ListZonesRequest,
    callback: (error: ServiceError | null, response: ListZonesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListZonesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListZonesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListZonesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListZonesResponse) => void,
  ): ClientUnaryCall;
}

export const ZoneServiceClient = makeGenericClientConstructor(
  ZoneServiceService,
  "yandex.cloud.compute.v1.ZoneService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ZoneServiceClient;
  service: typeof ZoneServiceService;
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
