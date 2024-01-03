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
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  UpdateAccessBindingsRequest,
} from "@yandex-cloud/core/dist/generated/yandex/cloud/access/access";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { BillableObject, BillableObjectBinding } from "./billable_object";
import { BillingAccount } from "./billing_account";

export const protobufPackage = "yandex.cloud.billing.v1";

export interface GetBillingAccountRequest {
  $type: "yandex.cloud.billing.v1.GetBillingAccountRequest";
  /**
   * ID of the billing account to return.
   * To get the billing account ID, use [BillingAccountService.List] request.
   */
  id: string;
}

export interface ListBillingAccountsRequest {
  $type: "yandex.cloud.billing.v1.ListBillingAccountsRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListBillingAccountsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListBillingAccountsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListBillingAccountsResponse {
  $type: "yandex.cloud.billing.v1.ListBillingAccountsResponse";
  /** List of billing accounts. */
  billingAccounts: BillingAccount[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListBillingAccountsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListBillingAccountsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListBillableObjectBindingsRequest {
  $type: "yandex.cloud.billing.v1.ListBillableObjectBindingsRequest";
  /**
   * ID of the billing account to list associated billable object bindings.
   * To get the billing account ID, use [BillingAccountService.List] request.
   */
  billingAccountId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListBillableObjectBindingsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListBillableObjectBindingsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListBillableObjectBindingsResponse {
  $type: "yandex.cloud.billing.v1.ListBillableObjectBindingsResponse";
  /** List of billable object bindings. */
  billableObjectBindings: BillableObjectBinding[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListBillableObjectBindingsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListBillableObjectBindingsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface BindBillableObjectRequest {
  $type: "yandex.cloud.billing.v1.BindBillableObjectRequest";
  /**
   * ID of the billing account to bind billable object.
   * To get the billing account ID, use [BillingAccountService.List] request.
   */
  billingAccountId: string;
  /** [yandex.cloud.billing.v1.BillableObject] to bind with billing account. */
  billableObject?: BillableObject | undefined;
}

export interface BindBillableObjectMetadata {
  $type: "yandex.cloud.billing.v1.BindBillableObjectMetadata";
  /** ID of the [yandex.cloud.billing.v1.BillableObject] that was bound to billing account. */
  billableObjectId: string;
}

function createBaseGetBillingAccountRequest(): GetBillingAccountRequest {
  return { $type: "yandex.cloud.billing.v1.GetBillingAccountRequest", id: "" };
}

export const GetBillingAccountRequest = {
  $type: "yandex.cloud.billing.v1.GetBillingAccountRequest" as const,

  encode(message: GetBillingAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBillingAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBillingAccountRequest();
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

  fromJSON(object: any): GetBillingAccountRequest {
    return { $type: GetBillingAccountRequest.$type, id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetBillingAccountRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBillingAccountRequest>, I>>(base?: I): GetBillingAccountRequest {
    return GetBillingAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBillingAccountRequest>, I>>(object: I): GetBillingAccountRequest {
    const message = createBaseGetBillingAccountRequest();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBillingAccountRequest.$type, GetBillingAccountRequest);

function createBaseListBillingAccountsRequest(): ListBillingAccountsRequest {
  return { $type: "yandex.cloud.billing.v1.ListBillingAccountsRequest", pageSize: 0, pageToken: "" };
}

export const ListBillingAccountsRequest = {
  $type: "yandex.cloud.billing.v1.ListBillingAccountsRequest" as const,

  encode(message: ListBillingAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBillingAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBillingAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): ListBillingAccountsRequest {
    return {
      $type: ListBillingAccountsRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListBillingAccountsRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBillingAccountsRequest>, I>>(base?: I): ListBillingAccountsRequest {
    return ListBillingAccountsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBillingAccountsRequest>, I>>(object: I): ListBillingAccountsRequest {
    const message = createBaseListBillingAccountsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBillingAccountsRequest.$type, ListBillingAccountsRequest);

function createBaseListBillingAccountsResponse(): ListBillingAccountsResponse {
  return { $type: "yandex.cloud.billing.v1.ListBillingAccountsResponse", billingAccounts: [], nextPageToken: "" };
}

export const ListBillingAccountsResponse = {
  $type: "yandex.cloud.billing.v1.ListBillingAccountsResponse" as const,

  encode(message: ListBillingAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.billingAccounts) {
      BillingAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBillingAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBillingAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.billingAccounts.push(BillingAccount.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListBillingAccountsResponse {
    return {
      $type: ListBillingAccountsResponse.$type,
      billingAccounts: globalThis.Array.isArray(object?.billingAccounts)
        ? object.billingAccounts.map((e: any) => BillingAccount.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBillingAccountsResponse): unknown {
    const obj: any = {};
    if (message.billingAccounts?.length) {
      obj.billingAccounts = message.billingAccounts.map((e) => BillingAccount.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBillingAccountsResponse>, I>>(base?: I): ListBillingAccountsResponse {
    return ListBillingAccountsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBillingAccountsResponse>, I>>(object: I): ListBillingAccountsResponse {
    const message = createBaseListBillingAccountsResponse();
    message.billingAccounts = object.billingAccounts?.map((e) => BillingAccount.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBillingAccountsResponse.$type, ListBillingAccountsResponse);

function createBaseListBillableObjectBindingsRequest(): ListBillableObjectBindingsRequest {
  return {
    $type: "yandex.cloud.billing.v1.ListBillableObjectBindingsRequest",
    billingAccountId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListBillableObjectBindingsRequest = {
  $type: "yandex.cloud.billing.v1.ListBillableObjectBindingsRequest" as const,

  encode(message: ListBillableObjectBindingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billingAccountId !== "") {
      writer.uint32(10).string(message.billingAccountId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBillableObjectBindingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBillableObjectBindingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.billingAccountId = reader.string();
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

  fromJSON(object: any): ListBillableObjectBindingsRequest {
    return {
      $type: ListBillableObjectBindingsRequest.$type,
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListBillableObjectBindingsRequest): unknown {
    const obj: any = {};
    if (message.billingAccountId !== "") {
      obj.billingAccountId = message.billingAccountId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBillableObjectBindingsRequest>, I>>(
    base?: I,
  ): ListBillableObjectBindingsRequest {
    return ListBillableObjectBindingsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBillableObjectBindingsRequest>, I>>(
    object: I,
  ): ListBillableObjectBindingsRequest {
    const message = createBaseListBillableObjectBindingsRequest();
    message.billingAccountId = object.billingAccountId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBillableObjectBindingsRequest.$type, ListBillableObjectBindingsRequest);

function createBaseListBillableObjectBindingsResponse(): ListBillableObjectBindingsResponse {
  return {
    $type: "yandex.cloud.billing.v1.ListBillableObjectBindingsResponse",
    billableObjectBindings: [],
    nextPageToken: "",
  };
}

export const ListBillableObjectBindingsResponse = {
  $type: "yandex.cloud.billing.v1.ListBillableObjectBindingsResponse" as const,

  encode(message: ListBillableObjectBindingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.billableObjectBindings) {
      BillableObjectBinding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBillableObjectBindingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBillableObjectBindingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.billableObjectBindings.push(BillableObjectBinding.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListBillableObjectBindingsResponse {
    return {
      $type: ListBillableObjectBindingsResponse.$type,
      billableObjectBindings: globalThis.Array.isArray(object?.billableObjectBindings)
        ? object.billableObjectBindings.map((e: any) => BillableObjectBinding.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBillableObjectBindingsResponse): unknown {
    const obj: any = {};
    if (message.billableObjectBindings?.length) {
      obj.billableObjectBindings = message.billableObjectBindings.map((e) => BillableObjectBinding.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBillableObjectBindingsResponse>, I>>(
    base?: I,
  ): ListBillableObjectBindingsResponse {
    return ListBillableObjectBindingsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBillableObjectBindingsResponse>, I>>(
    object: I,
  ): ListBillableObjectBindingsResponse {
    const message = createBaseListBillableObjectBindingsResponse();
    message.billableObjectBindings = object.billableObjectBindings?.map((e) => BillableObjectBinding.fromPartial(e)) ||
      [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBillableObjectBindingsResponse.$type, ListBillableObjectBindingsResponse);

function createBaseBindBillableObjectRequest(): BindBillableObjectRequest {
  return {
    $type: "yandex.cloud.billing.v1.BindBillableObjectRequest",
    billingAccountId: "",
    billableObject: undefined,
  };
}

export const BindBillableObjectRequest = {
  $type: "yandex.cloud.billing.v1.BindBillableObjectRequest" as const,

  encode(message: BindBillableObjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billingAccountId !== "") {
      writer.uint32(10).string(message.billingAccountId);
    }
    if (message.billableObject !== undefined) {
      BillableObject.encode(message.billableObject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BindBillableObjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindBillableObjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.billingAccountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.billableObject = BillableObject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BindBillableObjectRequest {
    return {
      $type: BindBillableObjectRequest.$type,
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
      billableObject: isSet(object.billableObject) ? BillableObject.fromJSON(object.billableObject) : undefined,
    };
  },

  toJSON(message: BindBillableObjectRequest): unknown {
    const obj: any = {};
    if (message.billingAccountId !== "") {
      obj.billingAccountId = message.billingAccountId;
    }
    if (message.billableObject !== undefined) {
      obj.billableObject = BillableObject.toJSON(message.billableObject);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BindBillableObjectRequest>, I>>(base?: I): BindBillableObjectRequest {
    return BindBillableObjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BindBillableObjectRequest>, I>>(object: I): BindBillableObjectRequest {
    const message = createBaseBindBillableObjectRequest();
    message.billingAccountId = object.billingAccountId ?? "";
    message.billableObject = (object.billableObject !== undefined && object.billableObject !== null)
      ? BillableObject.fromPartial(object.billableObject)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(BindBillableObjectRequest.$type, BindBillableObjectRequest);

function createBaseBindBillableObjectMetadata(): BindBillableObjectMetadata {
  return { $type: "yandex.cloud.billing.v1.BindBillableObjectMetadata", billableObjectId: "" };
}

export const BindBillableObjectMetadata = {
  $type: "yandex.cloud.billing.v1.BindBillableObjectMetadata" as const,

  encode(message: BindBillableObjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billableObjectId !== "") {
      writer.uint32(10).string(message.billableObjectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BindBillableObjectMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindBillableObjectMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.billableObjectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BindBillableObjectMetadata {
    return {
      $type: BindBillableObjectMetadata.$type,
      billableObjectId: isSet(object.billableObjectId) ? globalThis.String(object.billableObjectId) : "",
    };
  },

  toJSON(message: BindBillableObjectMetadata): unknown {
    const obj: any = {};
    if (message.billableObjectId !== "") {
      obj.billableObjectId = message.billableObjectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BindBillableObjectMetadata>, I>>(base?: I): BindBillableObjectMetadata {
    return BindBillableObjectMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BindBillableObjectMetadata>, I>>(object: I): BindBillableObjectMetadata {
    const message = createBaseBindBillableObjectMetadata();
    message.billableObjectId = object.billableObjectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BindBillableObjectMetadata.$type, BindBillableObjectMetadata);

/** A set of methods for managing BillingAccount resources. */
export type BillingAccountServiceService = typeof BillingAccountServiceService;
export const BillingAccountServiceService = {
  /** Returns the specified billing account. */
  get: {
    path: "/yandex.cloud.billing.v1.BillingAccountService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBillingAccountRequest) => Buffer.from(GetBillingAccountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBillingAccountRequest.decode(value),
    responseSerialize: (value: BillingAccount) => Buffer.from(BillingAccount.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BillingAccount.decode(value),
  },
  /** Retrieves the list of billing accounts available for current user. */
  list: {
    path: "/yandex.cloud.billing.v1.BillingAccountService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBillingAccountsRequest) =>
      Buffer.from(ListBillingAccountsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBillingAccountsRequest.decode(value),
    responseSerialize: (value: ListBillingAccountsResponse) =>
      Buffer.from(ListBillingAccountsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBillingAccountsResponse.decode(value),
  },
  /** Retrieves the list of billable object bindings associated with the specified billing account. */
  listBillableObjectBindings: {
    path: "/yandex.cloud.billing.v1.BillingAccountService/ListBillableObjectBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBillableObjectBindingsRequest) =>
      Buffer.from(ListBillableObjectBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBillableObjectBindingsRequest.decode(value),
    responseSerialize: (value: ListBillableObjectBindingsResponse) =>
      Buffer.from(ListBillableObjectBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBillableObjectBindingsResponse.decode(value),
  },
  /** Binds billable object to the specified billing account. */
  bindBillableObject: {
    path: "/yandex.cloud.billing.v1.BillingAccountService/BindBillableObject",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BindBillableObjectRequest) =>
      Buffer.from(BindBillableObjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BindBillableObjectRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists access bindings for the specified billing account. */
  listAccessBindings: {
    path: "/yandex.cloud.billing.v1.BillingAccountService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
  },
  /** Updates access bindings for the specified billing account. */
  updateAccessBindings: {
    path: "/yandex.cloud.billing.v1.BillingAccountService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface BillingAccountServiceServer extends UntypedServiceImplementation {
  /** Returns the specified billing account. */
  get: handleUnaryCall<GetBillingAccountRequest, BillingAccount>;
  /** Retrieves the list of billing accounts available for current user. */
  list: handleUnaryCall<ListBillingAccountsRequest, ListBillingAccountsResponse>;
  /** Retrieves the list of billable object bindings associated with the specified billing account. */
  listBillableObjectBindings: handleUnaryCall<ListBillableObjectBindingsRequest, ListBillableObjectBindingsResponse>;
  /** Binds billable object to the specified billing account. */
  bindBillableObject: handleUnaryCall<BindBillableObjectRequest, Operation>;
  /** Lists access bindings for the specified billing account. */
  listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
  /** Updates access bindings for the specified billing account. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface BillingAccountServiceClient extends Client {
  /** Returns the specified billing account. */
  get(
    request: GetBillingAccountRequest,
    callback: (error: ServiceError | null, response: BillingAccount) => void,
  ): ClientUnaryCall;
  get(
    request: GetBillingAccountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BillingAccount) => void,
  ): ClientUnaryCall;
  get(
    request: GetBillingAccountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BillingAccount) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of billing accounts available for current user. */
  list(
    request: ListBillingAccountsRequest,
    callback: (error: ServiceError | null, response: ListBillingAccountsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBillingAccountsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBillingAccountsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBillingAccountsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBillingAccountsResponse) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of billable object bindings associated with the specified billing account. */
  listBillableObjectBindings(
    request: ListBillableObjectBindingsRequest,
    callback: (error: ServiceError | null, response: ListBillableObjectBindingsResponse) => void,
  ): ClientUnaryCall;
  listBillableObjectBindings(
    request: ListBillableObjectBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBillableObjectBindingsResponse) => void,
  ): ClientUnaryCall;
  listBillableObjectBindings(
    request: ListBillableObjectBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBillableObjectBindingsResponse) => void,
  ): ClientUnaryCall;
  /** Binds billable object to the specified billing account. */
  bindBillableObject(
    request: BindBillableObjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  bindBillableObject(
    request: BindBillableObjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  bindBillableObject(
    request: BindBillableObjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Lists access bindings for the specified billing account. */
  listAccessBindings(
    request: ListAccessBindingsRequest,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
  ): ClientUnaryCall;
  /** Updates access bindings for the specified billing account. */
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const BillingAccountServiceClient = makeGenericClientConstructor(
  BillingAccountServiceService,
  "yandex.cloud.billing.v1.BillingAccountService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BillingAccountServiceClient;
  service: typeof BillingAccountServiceService;
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
