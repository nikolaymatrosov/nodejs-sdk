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
import { Sku } from "./sku";

export const protobufPackage = "yandex.cloud.billing.v1";

export interface GetSkuRequest {
  $type: "yandex.cloud.billing.v1.GetSkuRequest";
  /**
   * ID of the SKU to return.
   * To get the SKU ID, use [SkuService.List] request.
   */
  id: string;
  /**
   * Currency of the SKU.
   * Can be one of the following:
   * * `RUB`
   * * `USD`
   * * `KZT`
   */
  currency: string;
  /**
   * Optional ID of the billing account.
   * If specified, contract prices for a particular billing account are included in the response.
   * To get the billing account ID, use [BillingAccountService.List] request.
   */
  billingAccountId: string;
}

export interface ListSkusRequest {
  $type: "yandex.cloud.billing.v1.ListSkusRequest";
  /**
   * Currency of the prices.
   * Can be one of the following:
   * * `RUB`
   * * `USD`
   * * `KZT`
   */
  currency: string;
  /**
   * Optional ID of the billing account.
   * If specified, contract prices for a particular billing account are included in the response.
   * To get the billing account ID, use [BillingAccountService.List] request.
   */
  billingAccountId: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [yandex.cloud.billing.v1.Sku.id] and [yandex.cloud.billing.v1.Sku.service_id] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListSkusResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListSkusResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSkusResponse {
  $type: "yandex.cloud.billing.v1.ListSkusResponse";
  /** List of skus. */
  skus: Sku[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSkusRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListSkusRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetSkuRequest(): GetSkuRequest {
  return { $type: "yandex.cloud.billing.v1.GetSkuRequest", id: "", currency: "", billingAccountId: "" };
}

export const GetSkuRequest = {
  $type: "yandex.cloud.billing.v1.GetSkuRequest" as const,

  encode(message: GetSkuRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.currency !== "") {
      writer.uint32(18).string(message.currency);
    }
    if (message.billingAccountId !== "") {
      writer.uint32(26).string(message.billingAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSkuRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSkuRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.billingAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSkuRequest {
    return {
      $type: GetSkuRequest.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
    };
  },

  toJSON(message: GetSkuRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.billingAccountId !== "") {
      obj.billingAccountId = message.billingAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSkuRequest>, I>>(base?: I): GetSkuRequest {
    return GetSkuRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSkuRequest>, I>>(object: I): GetSkuRequest {
    const message = createBaseGetSkuRequest();
    message.id = object.id ?? "";
    message.currency = object.currency ?? "";
    message.billingAccountId = object.billingAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSkuRequest.$type, GetSkuRequest);

function createBaseListSkusRequest(): ListSkusRequest {
  return {
    $type: "yandex.cloud.billing.v1.ListSkusRequest",
    currency: "",
    billingAccountId: "",
    filter: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListSkusRequest = {
  $type: "yandex.cloud.billing.v1.ListSkusRequest" as const,

  encode(message: ListSkusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currency !== "") {
      writer.uint32(10).string(message.currency);
    }
    if (message.billingAccountId !== "") {
      writer.uint32(18).string(message.billingAccountId);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSkusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSkusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.billingAccountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = reader.string();
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

  fromJSON(object: any): ListSkusRequest {
    return {
      $type: ListSkusRequest.$type,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSkusRequest): unknown {
    const obj: any = {};
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.billingAccountId !== "") {
      obj.billingAccountId = message.billingAccountId;
    }
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

  create<I extends Exact<DeepPartial<ListSkusRequest>, I>>(base?: I): ListSkusRequest {
    return ListSkusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSkusRequest>, I>>(object: I): ListSkusRequest {
    const message = createBaseListSkusRequest();
    message.currency = object.currency ?? "";
    message.billingAccountId = object.billingAccountId ?? "";
    message.filter = object.filter ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSkusRequest.$type, ListSkusRequest);

function createBaseListSkusResponse(): ListSkusResponse {
  return { $type: "yandex.cloud.billing.v1.ListSkusResponse", skus: [], nextPageToken: "" };
}

export const ListSkusResponse = {
  $type: "yandex.cloud.billing.v1.ListSkusResponse" as const,

  encode(message: ListSkusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.skus) {
      Sku.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSkusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSkusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.skus.push(Sku.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSkusResponse {
    return {
      $type: ListSkusResponse.$type,
      skus: globalThis.Array.isArray(object?.skus) ? object.skus.map((e: any) => Sku.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSkusResponse): unknown {
    const obj: any = {};
    if (message.skus?.length) {
      obj.skus = message.skus.map((e) => Sku.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSkusResponse>, I>>(base?: I): ListSkusResponse {
    return ListSkusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSkusResponse>, I>>(object: I): ListSkusResponse {
    const message = createBaseListSkusResponse();
    message.skus = object.skus?.map((e) => Sku.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSkusResponse.$type, ListSkusResponse);

/** A set of methods for managing Sku resources. */
export type SkuServiceService = typeof SkuServiceService;
export const SkuServiceService = {
  /** Returns the specified SKU. */
  get: {
    path: "/yandex.cloud.billing.v1.SkuService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSkuRequest) => Buffer.from(GetSkuRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSkuRequest.decode(value),
    responseSerialize: (value: Sku) => Buffer.from(Sku.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Sku.decode(value),
  },
  /** Retrieves the list of SKUs. */
  list: {
    path: "/yandex.cloud.billing.v1.SkuService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSkusRequest) => Buffer.from(ListSkusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSkusRequest.decode(value),
    responseSerialize: (value: ListSkusResponse) => Buffer.from(ListSkusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSkusResponse.decode(value),
  },
} as const;

export interface SkuServiceServer extends UntypedServiceImplementation {
  /** Returns the specified SKU. */
  get: handleUnaryCall<GetSkuRequest, Sku>;
  /** Retrieves the list of SKUs. */
  list: handleUnaryCall<ListSkusRequest, ListSkusResponse>;
}

export interface SkuServiceClient extends Client {
  /** Returns the specified SKU. */
  get(request: GetSkuRequest, callback: (error: ServiceError | null, response: Sku) => void): ClientUnaryCall;
  get(
    request: GetSkuRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Sku) => void,
  ): ClientUnaryCall;
  get(
    request: GetSkuRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Sku) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of SKUs. */
  list(
    request: ListSkusRequest,
    callback: (error: ServiceError | null, response: ListSkusResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSkusRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSkusResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListSkusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSkusResponse) => void,
  ): ClientUnaryCall;
}

export const SkuServiceClient = makeGenericClientConstructor(
  SkuServiceService,
  "yandex.cloud.billing.v1.SkuService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SkuServiceClient;
  service: typeof SkuServiceService;
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
