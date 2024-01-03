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
import { StorageType } from "./storage_type";

export const protobufPackage = "yandex.cloud.ydb.v1";

export interface GetStorageTypeRequest {
  $type: "yandex.cloud.ydb.v1.GetStorageTypeRequest";
  /** Required. ID of the storage type to return. */
  storageTypeId: string;
}

export interface ListStorageTypesRequest {
  $type: "yandex.cloud.ydb.v1.ListStorageTypesRequest";
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a `next_page_token` that can be used
   * to get the next page of results in subsequent ListStorageTypes requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set `page_token` to the `next_page_token` returned by a previous ListStorageTypes
   * request to get the next page of results.
   */
  pageToken: string;
}

export interface ListStorageTypesResponse {
  $type: "yandex.cloud.ydb.v1.ListStorageTypesResponse";
  /** Requested list of storage types. */
  storageTypes: StorageType[];
  /**
   * This token allows you to get the next page of results for ListStorageTypes requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListStorageTypes request. Subsequent ListStorageTypes
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetStorageTypeRequest(): GetStorageTypeRequest {
  return { $type: "yandex.cloud.ydb.v1.GetStorageTypeRequest", storageTypeId: "" };
}

export const GetStorageTypeRequest = {
  $type: "yandex.cloud.ydb.v1.GetStorageTypeRequest" as const,

  encode(message: GetStorageTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageTypeId !== "") {
      writer.uint32(10).string(message.storageTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStorageTypeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStorageTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storageTypeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStorageTypeRequest {
    return {
      $type: GetStorageTypeRequest.$type,
      storageTypeId: isSet(object.storageTypeId) ? globalThis.String(object.storageTypeId) : "",
    };
  },

  toJSON(message: GetStorageTypeRequest): unknown {
    const obj: any = {};
    if (message.storageTypeId !== "") {
      obj.storageTypeId = message.storageTypeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStorageTypeRequest>, I>>(base?: I): GetStorageTypeRequest {
    return GetStorageTypeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStorageTypeRequest>, I>>(object: I): GetStorageTypeRequest {
    const message = createBaseGetStorageTypeRequest();
    message.storageTypeId = object.storageTypeId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetStorageTypeRequest.$type, GetStorageTypeRequest);

function createBaseListStorageTypesRequest(): ListStorageTypesRequest {
  return { $type: "yandex.cloud.ydb.v1.ListStorageTypesRequest", pageSize: 0, pageToken: "" };
}

export const ListStorageTypesRequest = {
  $type: "yandex.cloud.ydb.v1.ListStorageTypesRequest" as const,

  encode(message: ListStorageTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListStorageTypesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListStorageTypesRequest();
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

  fromJSON(object: any): ListStorageTypesRequest {
    return {
      $type: ListStorageTypesRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListStorageTypesRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListStorageTypesRequest>, I>>(base?: I): ListStorageTypesRequest {
    return ListStorageTypesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListStorageTypesRequest>, I>>(object: I): ListStorageTypesRequest {
    const message = createBaseListStorageTypesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListStorageTypesRequest.$type, ListStorageTypesRequest);

function createBaseListStorageTypesResponse(): ListStorageTypesResponse {
  return { $type: "yandex.cloud.ydb.v1.ListStorageTypesResponse", storageTypes: [], nextPageToken: "" };
}

export const ListStorageTypesResponse = {
  $type: "yandex.cloud.ydb.v1.ListStorageTypesResponse" as const,

  encode(message: ListStorageTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storageTypes) {
      StorageType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListStorageTypesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListStorageTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storageTypes.push(StorageType.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListStorageTypesResponse {
    return {
      $type: ListStorageTypesResponse.$type,
      storageTypes: globalThis.Array.isArray(object?.storageTypes)
        ? object.storageTypes.map((e: any) => StorageType.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListStorageTypesResponse): unknown {
    const obj: any = {};
    if (message.storageTypes?.length) {
      obj.storageTypes = message.storageTypes.map((e) => StorageType.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListStorageTypesResponse>, I>>(base?: I): ListStorageTypesResponse {
    return ListStorageTypesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListStorageTypesResponse>, I>>(object: I): ListStorageTypesResponse {
    const message = createBaseListStorageTypesResponse();
    message.storageTypes = object.storageTypes?.map((e) => StorageType.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListStorageTypesResponse.$type, ListStorageTypesResponse);

export type StorageTypeServiceService = typeof StorageTypeServiceService;
export const StorageTypeServiceService = {
  /** Returns the specified storage types. */
  get: {
    path: "/yandex.cloud.ydb.v1.StorageTypeService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStorageTypeRequest) => Buffer.from(GetStorageTypeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStorageTypeRequest.decode(value),
    responseSerialize: (value: StorageType) => Buffer.from(StorageType.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StorageType.decode(value),
  },
  /** Returns the list of available storage types. */
  list: {
    path: "/yandex.cloud.ydb.v1.StorageTypeService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListStorageTypesRequest) => Buffer.from(ListStorageTypesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListStorageTypesRequest.decode(value),
    responseSerialize: (value: ListStorageTypesResponse) =>
      Buffer.from(ListStorageTypesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListStorageTypesResponse.decode(value),
  },
} as const;

export interface StorageTypeServiceServer extends UntypedServiceImplementation {
  /** Returns the specified storage types. */
  get: handleUnaryCall<GetStorageTypeRequest, StorageType>;
  /** Returns the list of available storage types. */
  list: handleUnaryCall<ListStorageTypesRequest, ListStorageTypesResponse>;
}

export interface StorageTypeServiceClient extends Client {
  /** Returns the specified storage types. */
  get(
    request: GetStorageTypeRequest,
    callback: (error: ServiceError | null, response: StorageType) => void,
  ): ClientUnaryCall;
  get(
    request: GetStorageTypeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StorageType) => void,
  ): ClientUnaryCall;
  get(
    request: GetStorageTypeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StorageType) => void,
  ): ClientUnaryCall;
  /** Returns the list of available storage types. */
  list(
    request: ListStorageTypesRequest,
    callback: (error: ServiceError | null, response: ListStorageTypesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListStorageTypesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListStorageTypesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListStorageTypesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListStorageTypesResponse) => void,
  ): ClientUnaryCall;
}

export const StorageTypeServiceClient = makeGenericClientConstructor(
  StorageTypeServiceService,
  "yandex.cloud.ydb.v1.StorageTypeService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): StorageTypeServiceClient;
  service: typeof StorageTypeServiceService;
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
