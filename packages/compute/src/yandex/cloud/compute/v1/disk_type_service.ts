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
import { DiskType } from "./disk_type";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetDiskTypeRequest {
  $type: "yandex.cloud.compute.v1.GetDiskTypeRequest";
  /**
   * ID of the disk type to return information about.
   * To get the disk type ID use a [DiskTypeService.List] request.
   */
  diskTypeId: string;
}

export interface ListDiskTypesRequest {
  $type: "yandex.cloud.compute.v1.ListDiskTypesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListDiskTypesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDiskTypesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListDiskTypesResponse {
  $type: "yandex.cloud.compute.v1.ListDiskTypesResponse";
  /** List of disk types. */
  diskTypes: DiskType[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDiskTypesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListDiskTypesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetDiskTypeRequest(): GetDiskTypeRequest {
  return { $type: "yandex.cloud.compute.v1.GetDiskTypeRequest", diskTypeId: "" };
}

export const GetDiskTypeRequest = {
  $type: "yandex.cloud.compute.v1.GetDiskTypeRequest" as const,

  encode(message: GetDiskTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diskTypeId !== "") {
      writer.uint32(10).string(message.diskTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDiskTypeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDiskTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskTypeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDiskTypeRequest {
    return {
      $type: GetDiskTypeRequest.$type,
      diskTypeId: isSet(object.diskTypeId) ? globalThis.String(object.diskTypeId) : "",
    };
  },

  toJSON(message: GetDiskTypeRequest): unknown {
    const obj: any = {};
    if (message.diskTypeId !== "") {
      obj.diskTypeId = message.diskTypeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDiskTypeRequest>, I>>(base?: I): GetDiskTypeRequest {
    return GetDiskTypeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDiskTypeRequest>, I>>(object: I): GetDiskTypeRequest {
    const message = createBaseGetDiskTypeRequest();
    message.diskTypeId = object.diskTypeId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetDiskTypeRequest.$type, GetDiskTypeRequest);

function createBaseListDiskTypesRequest(): ListDiskTypesRequest {
  return { $type: "yandex.cloud.compute.v1.ListDiskTypesRequest", pageSize: 0, pageToken: "" };
}

export const ListDiskTypesRequest = {
  $type: "yandex.cloud.compute.v1.ListDiskTypesRequest" as const,

  encode(message: ListDiskTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDiskTypesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDiskTypesRequest();
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

  fromJSON(object: any): ListDiskTypesRequest {
    return {
      $type: ListDiskTypesRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListDiskTypesRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDiskTypesRequest>, I>>(base?: I): ListDiskTypesRequest {
    return ListDiskTypesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDiskTypesRequest>, I>>(object: I): ListDiskTypesRequest {
    const message = createBaseListDiskTypesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDiskTypesRequest.$type, ListDiskTypesRequest);

function createBaseListDiskTypesResponse(): ListDiskTypesResponse {
  return { $type: "yandex.cloud.compute.v1.ListDiskTypesResponse", diskTypes: [], nextPageToken: "" };
}

export const ListDiskTypesResponse = {
  $type: "yandex.cloud.compute.v1.ListDiskTypesResponse" as const,

  encode(message: ListDiskTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.diskTypes) {
      DiskType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDiskTypesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDiskTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diskTypes.push(DiskType.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDiskTypesResponse {
    return {
      $type: ListDiskTypesResponse.$type,
      diskTypes: globalThis.Array.isArray(object?.diskTypes)
        ? object.diskTypes.map((e: any) => DiskType.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDiskTypesResponse): unknown {
    const obj: any = {};
    if (message.diskTypes?.length) {
      obj.diskTypes = message.diskTypes.map((e) => DiskType.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDiskTypesResponse>, I>>(base?: I): ListDiskTypesResponse {
    return ListDiskTypesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDiskTypesResponse>, I>>(object: I): ListDiskTypesResponse {
    const message = createBaseListDiskTypesResponse();
    message.diskTypes = object.diskTypes?.map((e) => DiskType.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDiskTypesResponse.$type, ListDiskTypesResponse);

/** A set of methods to retrieve information about disk types. */
export type DiskTypeServiceService = typeof DiskTypeServiceService;
export const DiskTypeServiceService = {
  /**
   * Returns the information about specified disk type.
   *
   * To get the list of available disk types, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.DiskTypeService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDiskTypeRequest) => Buffer.from(GetDiskTypeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDiskTypeRequest.decode(value),
    responseSerialize: (value: DiskType) => Buffer.from(DiskType.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DiskType.decode(value),
  },
  /** Retrieves the list of disk types for the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.DiskTypeService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDiskTypesRequest) => Buffer.from(ListDiskTypesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDiskTypesRequest.decode(value),
    responseSerialize: (value: ListDiskTypesResponse) => Buffer.from(ListDiskTypesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDiskTypesResponse.decode(value),
  },
} as const;

export interface DiskTypeServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the information about specified disk type.
   *
   * To get the list of available disk types, make a [List] request.
   */
  get: handleUnaryCall<GetDiskTypeRequest, DiskType>;
  /** Retrieves the list of disk types for the specified folder. */
  list: handleUnaryCall<ListDiskTypesRequest, ListDiskTypesResponse>;
}

export interface DiskTypeServiceClient extends Client {
  /**
   * Returns the information about specified disk type.
   *
   * To get the list of available disk types, make a [List] request.
   */
  get(request: GetDiskTypeRequest, callback: (error: ServiceError | null, response: DiskType) => void): ClientUnaryCall;
  get(
    request: GetDiskTypeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DiskType) => void,
  ): ClientUnaryCall;
  get(
    request: GetDiskTypeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DiskType) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of disk types for the specified folder. */
  list(
    request: ListDiskTypesRequest,
    callback: (error: ServiceError | null, response: ListDiskTypesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDiskTypesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDiskTypesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListDiskTypesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDiskTypesResponse) => void,
  ): ClientUnaryCall;
}

export const DiskTypeServiceClient = makeGenericClientConstructor(
  DiskTypeServiceService,
  "yandex.cloud.compute.v1.DiskTypeService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DiskTypeServiceClient;
  service: typeof DiskTypeServiceService;
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
