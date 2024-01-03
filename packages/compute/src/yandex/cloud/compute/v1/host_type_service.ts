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
import { HostType } from "./host_type";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetHostTypeRequest {
  $type: "yandex.cloud.compute.v1.GetHostTypeRequest";
  /**
   * ID of the host type to return.
   *
   * To get a host type ID make a [HostTypeService.List] request.
   */
  hostTypeId: string;
}

export interface ListHostTypesRequest {
  $type: "yandex.cloud.compute.v1.ListHostTypesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListHostTypesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListHostTypesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListHostTypesResponse {
  $type: "yandex.cloud.compute.v1.ListHostTypesResponse";
  /** Lists host types. */
  hostTypes: HostType[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListHostTypesRequest.page_size], use `next_page_token` as the value
   * for the [ListHostTypesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetHostTypeRequest(): GetHostTypeRequest {
  return { $type: "yandex.cloud.compute.v1.GetHostTypeRequest", hostTypeId: "" };
}

export const GetHostTypeRequest = {
  $type: "yandex.cloud.compute.v1.GetHostTypeRequest" as const,

  encode(message: GetHostTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostTypeId !== "") {
      writer.uint32(10).string(message.hostTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHostTypeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHostTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostTypeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetHostTypeRequest {
    return {
      $type: GetHostTypeRequest.$type,
      hostTypeId: isSet(object.hostTypeId) ? globalThis.String(object.hostTypeId) : "",
    };
  },

  toJSON(message: GetHostTypeRequest): unknown {
    const obj: any = {};
    if (message.hostTypeId !== "") {
      obj.hostTypeId = message.hostTypeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetHostTypeRequest>, I>>(base?: I): GetHostTypeRequest {
    return GetHostTypeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHostTypeRequest>, I>>(object: I): GetHostTypeRequest {
    const message = createBaseGetHostTypeRequest();
    message.hostTypeId = object.hostTypeId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetHostTypeRequest.$type, GetHostTypeRequest);

function createBaseListHostTypesRequest(): ListHostTypesRequest {
  return { $type: "yandex.cloud.compute.v1.ListHostTypesRequest", pageSize: 0, pageToken: "" };
}

export const ListHostTypesRequest = {
  $type: "yandex.cloud.compute.v1.ListHostTypesRequest" as const,

  encode(message: ListHostTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostTypesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostTypesRequest();
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

  fromJSON(object: any): ListHostTypesRequest {
    return {
      $type: ListHostTypesRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListHostTypesRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHostTypesRequest>, I>>(base?: I): ListHostTypesRequest {
    return ListHostTypesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostTypesRequest>, I>>(object: I): ListHostTypesRequest {
    const message = createBaseListHostTypesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostTypesRequest.$type, ListHostTypesRequest);

function createBaseListHostTypesResponse(): ListHostTypesResponse {
  return { $type: "yandex.cloud.compute.v1.ListHostTypesResponse", hostTypes: [], nextPageToken: "" };
}

export const ListHostTypesResponse = {
  $type: "yandex.cloud.compute.v1.ListHostTypesResponse" as const,

  encode(message: ListHostTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hostTypes) {
      HostType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHostTypesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHostTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostTypes.push(HostType.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListHostTypesResponse {
    return {
      $type: ListHostTypesResponse.$type,
      hostTypes: globalThis.Array.isArray(object?.hostTypes)
        ? object.hostTypes.map((e: any) => HostType.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListHostTypesResponse): unknown {
    const obj: any = {};
    if (message.hostTypes?.length) {
      obj.hostTypes = message.hostTypes.map((e) => HostType.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHostTypesResponse>, I>>(base?: I): ListHostTypesResponse {
    return ListHostTypesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHostTypesResponse>, I>>(object: I): ListHostTypesResponse {
    const message = createBaseListHostTypesResponse();
    message.hostTypes = object.hostTypes?.map((e) => HostType.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHostTypesResponse.$type, ListHostTypesResponse);

/** Set of methods to view possible host configurations. */
export type HostTypeServiceService = typeof HostTypeServiceService;
export const HostTypeServiceService = {
  /** Returns information about specified host type. */
  get: {
    path: "/yandex.cloud.compute.v1.HostTypeService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetHostTypeRequest) => Buffer.from(GetHostTypeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetHostTypeRequest.decode(value),
    responseSerialize: (value: HostType) => Buffer.from(HostType.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HostType.decode(value),
  },
  /** List avaliable host types. */
  list: {
    path: "/yandex.cloud.compute.v1.HostTypeService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHostTypesRequest) => Buffer.from(ListHostTypesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListHostTypesRequest.decode(value),
    responseSerialize: (value: ListHostTypesResponse) => Buffer.from(ListHostTypesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListHostTypesResponse.decode(value),
  },
} as const;

export interface HostTypeServiceServer extends UntypedServiceImplementation {
  /** Returns information about specified host type. */
  get: handleUnaryCall<GetHostTypeRequest, HostType>;
  /** List avaliable host types. */
  list: handleUnaryCall<ListHostTypesRequest, ListHostTypesResponse>;
}

export interface HostTypeServiceClient extends Client {
  /** Returns information about specified host type. */
  get(request: GetHostTypeRequest, callback: (error: ServiceError | null, response: HostType) => void): ClientUnaryCall;
  get(
    request: GetHostTypeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HostType) => void,
  ): ClientUnaryCall;
  get(
    request: GetHostTypeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HostType) => void,
  ): ClientUnaryCall;
  /** List avaliable host types. */
  list(
    request: ListHostTypesRequest,
    callback: (error: ServiceError | null, response: ListHostTypesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListHostTypesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListHostTypesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListHostTypesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListHostTypesResponse) => void,
  ): ClientUnaryCall;
}

export const HostTypeServiceClient = makeGenericClientConstructor(
  HostTypeServiceService,
  "yandex.cloud.compute.v1.HostTypeService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): HostTypeServiceClient;
  service: typeof HostTypeServiceService;
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
