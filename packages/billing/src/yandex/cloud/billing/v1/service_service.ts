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
import { Service } from "./service";

export const protobufPackage = "yandex.cloud.billing.v1";

export interface GetServiceRequest {
  $type: "yandex.cloud.billing.v1.GetServiceRequest";
  /**
   * ID of the service to return.
   * To get the service ID, use [ServiceService.List] request.
   */
  id: string;
}

export interface ListServicesRequest {
  $type: "yandex.cloud.billing.v1.ListServicesRequest";
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [yandex.cloud.billing.v1.Service.id] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListServicesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListServicesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListServicesResponse {
  $type: "yandex.cloud.billing.v1.ListServicesResponse";
  /** List of services. */
  services: Service[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListServicesRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListServicesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetServiceRequest(): GetServiceRequest {
  return { $type: "yandex.cloud.billing.v1.GetServiceRequest", id: "" };
}

export const GetServiceRequest = {
  $type: "yandex.cloud.billing.v1.GetServiceRequest" as const,

  encode(message: GetServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetServiceRequest {
    return { $type: GetServiceRequest.$type, id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetServiceRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetServiceRequest>, I>>(base?: I): GetServiceRequest {
    return GetServiceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetServiceRequest>, I>>(object: I): GetServiceRequest {
    const message = createBaseGetServiceRequest();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetServiceRequest.$type, GetServiceRequest);

function createBaseListServicesRequest(): ListServicesRequest {
  return { $type: "yandex.cloud.billing.v1.ListServicesRequest", filter: "", pageSize: 0, pageToken: "" };
}

export const ListServicesRequest = {
  $type: "yandex.cloud.billing.v1.ListServicesRequest" as const,

  encode(message: ListServicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ListServicesRequest {
    return {
      $type: ListServicesRequest.$type,
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListServicesRequest): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListServicesRequest>, I>>(base?: I): ListServicesRequest {
    return ListServicesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListServicesRequest>, I>>(object: I): ListServicesRequest {
    const message = createBaseListServicesRequest();
    message.filter = object.filter ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListServicesRequest.$type, ListServicesRequest);

function createBaseListServicesResponse(): ListServicesResponse {
  return { $type: "yandex.cloud.billing.v1.ListServicesResponse", services: [], nextPageToken: "" };
}

export const ListServicesResponse = {
  $type: "yandex.cloud.billing.v1.ListServicesResponse" as const,

  encode(message: ListServicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.services.push(Service.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListServicesResponse {
    return {
      $type: ListServicesResponse.$type,
      services: globalThis.Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListServicesResponse): unknown {
    const obj: any = {};
    if (message.services?.length) {
      obj.services = message.services.map((e) => Service.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListServicesResponse>, I>>(base?: I): ListServicesResponse {
    return ListServicesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListServicesResponse>, I>>(object: I): ListServicesResponse {
    const message = createBaseListServicesResponse();
    message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListServicesResponse.$type, ListServicesResponse);

/** A set of methods for managing Service resources. */
export type ServiceServiceService = typeof ServiceServiceService;
export const ServiceServiceService = {
  /** Returns the specified service. */
  get: {
    path: "/yandex.cloud.billing.v1.ServiceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetServiceRequest) => Buffer.from(GetServiceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetServiceRequest.decode(value),
    responseSerialize: (value: Service) => Buffer.from(Service.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Service.decode(value),
  },
  /** Retrieves the list of services. */
  list: {
    path: "/yandex.cloud.billing.v1.ServiceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListServicesRequest) => Buffer.from(ListServicesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListServicesRequest.decode(value),
    responseSerialize: (value: ListServicesResponse) => Buffer.from(ListServicesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListServicesResponse.decode(value),
  },
} as const;

export interface ServiceServiceServer extends UntypedServiceImplementation {
  /** Returns the specified service. */
  get: handleUnaryCall<GetServiceRequest, Service>;
  /** Retrieves the list of services. */
  list: handleUnaryCall<ListServicesRequest, ListServicesResponse>;
}

export interface ServiceServiceClient extends Client {
  /** Returns the specified service. */
  get(request: GetServiceRequest, callback: (error: ServiceError | null, response: Service) => void): ClientUnaryCall;
  get(
    request: GetServiceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Service) => void,
  ): ClientUnaryCall;
  get(
    request: GetServiceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Service) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of services. */
  list(
    request: ListServicesRequest,
    callback: (error: ServiceError | null, response: ListServicesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListServicesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListServicesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListServicesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListServicesResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceServiceClient = makeGenericClientConstructor(
  ServiceServiceService,
  "yandex.cloud.billing.v1.ServiceService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ServiceServiceClient;
  service: typeof ServiceServiceService;
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
