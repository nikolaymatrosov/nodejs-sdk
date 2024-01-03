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
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { BalanceBudgetSpec, Budget, CostBudgetSpec, ExpenseBudgetSpec } from "./budget";

export const protobufPackage = "yandex.cloud.billing.v1";

export interface GetBudgetRequest {
  $type: "yandex.cloud.billing.v1.GetBudgetRequest";
  /**
   * ID of the budget to return.
   * To get the budget ID, use [BudgetService.List] request.
   */
  id: string;
}

export interface ListBudgetsRequest {
  $type: "yandex.cloud.billing.v1.ListBudgetsRequest";
  /**
   * ID of the billing account to list budgets corresponding to.
   * To get the billing account ID, use [BillingAccountService.List] request.
   */
  billingAccountId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListBudgetsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListBudgetsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListBudgetsResponse {
  $type: "yandex.cloud.billing.v1.ListBudgetsResponse";
  /** List of budgets. */
  budgets: Budget[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListBudgetsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListBudgetsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateBudgetRequest {
  $type: "yandex.cloud.billing.v1.CreateBudgetRequest";
  /**
   * ID of the billing account to list budgets corresponding to.
   * To get the billing account ID, use [yandex.cloud.billing.v1.BillingAccountService.List] request.
   */
  billingAccountId: string;
  /** Name of the budget. */
  name: string;
  /** Cost budget specification. */
  costBudgetSpec?:
    | CostBudgetSpec
    | undefined;
  /** Expense budget specification. */
  expenseBudgetSpec?:
    | ExpenseBudgetSpec
    | undefined;
  /** Balance budget specification. */
  balanceBudgetSpec?: BalanceBudgetSpec | undefined;
}

export interface CreateBudgetMetadata {
  $type: "yandex.cloud.billing.v1.CreateBudgetMetadata";
  /** ID of the budget. */
  budgetId: string;
}

function createBaseGetBudgetRequest(): GetBudgetRequest {
  return { $type: "yandex.cloud.billing.v1.GetBudgetRequest", id: "" };
}

export const GetBudgetRequest = {
  $type: "yandex.cloud.billing.v1.GetBudgetRequest" as const,

  encode(message: GetBudgetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBudgetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBudgetRequest();
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

  fromJSON(object: any): GetBudgetRequest {
    return { $type: GetBudgetRequest.$type, id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetBudgetRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBudgetRequest>, I>>(base?: I): GetBudgetRequest {
    return GetBudgetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBudgetRequest>, I>>(object: I): GetBudgetRequest {
    const message = createBaseGetBudgetRequest();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBudgetRequest.$type, GetBudgetRequest);

function createBaseListBudgetsRequest(): ListBudgetsRequest {
  return { $type: "yandex.cloud.billing.v1.ListBudgetsRequest", billingAccountId: "", pageSize: 0, pageToken: "" };
}

export const ListBudgetsRequest = {
  $type: "yandex.cloud.billing.v1.ListBudgetsRequest" as const,

  encode(message: ListBudgetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBudgetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBudgetsRequest();
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

  fromJSON(object: any): ListBudgetsRequest {
    return {
      $type: ListBudgetsRequest.$type,
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListBudgetsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListBudgetsRequest>, I>>(base?: I): ListBudgetsRequest {
    return ListBudgetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBudgetsRequest>, I>>(object: I): ListBudgetsRequest {
    const message = createBaseListBudgetsRequest();
    message.billingAccountId = object.billingAccountId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBudgetsRequest.$type, ListBudgetsRequest);

function createBaseListBudgetsResponse(): ListBudgetsResponse {
  return { $type: "yandex.cloud.billing.v1.ListBudgetsResponse", budgets: [], nextPageToken: "" };
}

export const ListBudgetsResponse = {
  $type: "yandex.cloud.billing.v1.ListBudgetsResponse" as const,

  encode(message: ListBudgetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.budgets) {
      Budget.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBudgetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBudgetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.budgets.push(Budget.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListBudgetsResponse {
    return {
      $type: ListBudgetsResponse.$type,
      budgets: globalThis.Array.isArray(object?.budgets) ? object.budgets.map((e: any) => Budget.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBudgetsResponse): unknown {
    const obj: any = {};
    if (message.budgets?.length) {
      obj.budgets = message.budgets.map((e) => Budget.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListBudgetsResponse>, I>>(base?: I): ListBudgetsResponse {
    return ListBudgetsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListBudgetsResponse>, I>>(object: I): ListBudgetsResponse {
    const message = createBaseListBudgetsResponse();
    message.budgets = object.budgets?.map((e) => Budget.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBudgetsResponse.$type, ListBudgetsResponse);

function createBaseCreateBudgetRequest(): CreateBudgetRequest {
  return {
    $type: "yandex.cloud.billing.v1.CreateBudgetRequest",
    billingAccountId: "",
    name: "",
    costBudgetSpec: undefined,
    expenseBudgetSpec: undefined,
    balanceBudgetSpec: undefined,
  };
}

export const CreateBudgetRequest = {
  $type: "yandex.cloud.billing.v1.CreateBudgetRequest" as const,

  encode(message: CreateBudgetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billingAccountId !== "") {
      writer.uint32(10).string(message.billingAccountId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.costBudgetSpec !== undefined) {
      CostBudgetSpec.encode(message.costBudgetSpec, writer.uint32(26).fork()).ldelim();
    }
    if (message.expenseBudgetSpec !== undefined) {
      ExpenseBudgetSpec.encode(message.expenseBudgetSpec, writer.uint32(34).fork()).ldelim();
    }
    if (message.balanceBudgetSpec !== undefined) {
      BalanceBudgetSpec.encode(message.balanceBudgetSpec, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBudgetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBudgetRequest();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.costBudgetSpec = CostBudgetSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.expenseBudgetSpec = ExpenseBudgetSpec.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.balanceBudgetSpec = BalanceBudgetSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateBudgetRequest {
    return {
      $type: CreateBudgetRequest.$type,
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      costBudgetSpec: isSet(object.costBudgetSpec) ? CostBudgetSpec.fromJSON(object.costBudgetSpec) : undefined,
      expenseBudgetSpec: isSet(object.expenseBudgetSpec)
        ? ExpenseBudgetSpec.fromJSON(object.expenseBudgetSpec)
        : undefined,
      balanceBudgetSpec: isSet(object.balanceBudgetSpec)
        ? BalanceBudgetSpec.fromJSON(object.balanceBudgetSpec)
        : undefined,
    };
  },

  toJSON(message: CreateBudgetRequest): unknown {
    const obj: any = {};
    if (message.billingAccountId !== "") {
      obj.billingAccountId = message.billingAccountId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.costBudgetSpec !== undefined) {
      obj.costBudgetSpec = CostBudgetSpec.toJSON(message.costBudgetSpec);
    }
    if (message.expenseBudgetSpec !== undefined) {
      obj.expenseBudgetSpec = ExpenseBudgetSpec.toJSON(message.expenseBudgetSpec);
    }
    if (message.balanceBudgetSpec !== undefined) {
      obj.balanceBudgetSpec = BalanceBudgetSpec.toJSON(message.balanceBudgetSpec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBudgetRequest>, I>>(base?: I): CreateBudgetRequest {
    return CreateBudgetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateBudgetRequest>, I>>(object: I): CreateBudgetRequest {
    const message = createBaseCreateBudgetRequest();
    message.billingAccountId = object.billingAccountId ?? "";
    message.name = object.name ?? "";
    message.costBudgetSpec = (object.costBudgetSpec !== undefined && object.costBudgetSpec !== null)
      ? CostBudgetSpec.fromPartial(object.costBudgetSpec)
      : undefined;
    message.expenseBudgetSpec = (object.expenseBudgetSpec !== undefined && object.expenseBudgetSpec !== null)
      ? ExpenseBudgetSpec.fromPartial(object.expenseBudgetSpec)
      : undefined;
    message.balanceBudgetSpec = (object.balanceBudgetSpec !== undefined && object.balanceBudgetSpec !== null)
      ? BalanceBudgetSpec.fromPartial(object.balanceBudgetSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateBudgetRequest.$type, CreateBudgetRequest);

function createBaseCreateBudgetMetadata(): CreateBudgetMetadata {
  return { $type: "yandex.cloud.billing.v1.CreateBudgetMetadata", budgetId: "" };
}

export const CreateBudgetMetadata = {
  $type: "yandex.cloud.billing.v1.CreateBudgetMetadata" as const,

  encode(message: CreateBudgetMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.budgetId !== "") {
      writer.uint32(10).string(message.budgetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBudgetMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBudgetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.budgetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateBudgetMetadata {
    return {
      $type: CreateBudgetMetadata.$type,
      budgetId: isSet(object.budgetId) ? globalThis.String(object.budgetId) : "",
    };
  },

  toJSON(message: CreateBudgetMetadata): unknown {
    const obj: any = {};
    if (message.budgetId !== "") {
      obj.budgetId = message.budgetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBudgetMetadata>, I>>(base?: I): CreateBudgetMetadata {
    return CreateBudgetMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateBudgetMetadata>, I>>(object: I): CreateBudgetMetadata {
    const message = createBaseCreateBudgetMetadata();
    message.budgetId = object.budgetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBudgetMetadata.$type, CreateBudgetMetadata);

/** A set of methods for managing Budget resources. */
export type BudgetServiceService = typeof BudgetServiceService;
export const BudgetServiceService = {
  /** Returns the specified budget. */
  get: {
    path: "/yandex.cloud.billing.v1.BudgetService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBudgetRequest) => Buffer.from(GetBudgetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBudgetRequest.decode(value),
    responseSerialize: (value: Budget) => Buffer.from(Budget.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Budget.decode(value),
  },
  /** Retrieves the list of budgets corresponding to the specified billing account. */
  list: {
    path: "/yandex.cloud.billing.v1.BudgetService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBudgetsRequest) => Buffer.from(ListBudgetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBudgetsRequest.decode(value),
    responseSerialize: (value: ListBudgetsResponse) => Buffer.from(ListBudgetsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBudgetsResponse.decode(value),
  },
  /** Creates a budget for the specified billing account. */
  create: {
    path: "/yandex.cloud.billing.v1.BudgetService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateBudgetRequest) => Buffer.from(CreateBudgetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateBudgetRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface BudgetServiceServer extends UntypedServiceImplementation {
  /** Returns the specified budget. */
  get: handleUnaryCall<GetBudgetRequest, Budget>;
  /** Retrieves the list of budgets corresponding to the specified billing account. */
  list: handleUnaryCall<ListBudgetsRequest, ListBudgetsResponse>;
  /** Creates a budget for the specified billing account. */
  create: handleUnaryCall<CreateBudgetRequest, Operation>;
}

export interface BudgetServiceClient extends Client {
  /** Returns the specified budget. */
  get(request: GetBudgetRequest, callback: (error: ServiceError | null, response: Budget) => void): ClientUnaryCall;
  get(
    request: GetBudgetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Budget) => void,
  ): ClientUnaryCall;
  get(
    request: GetBudgetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Budget) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of budgets corresponding to the specified billing account. */
  list(
    request: ListBudgetsRequest,
    callback: (error: ServiceError | null, response: ListBudgetsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBudgetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListBudgetsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListBudgetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListBudgetsResponse) => void,
  ): ClientUnaryCall;
  /** Creates a budget for the specified billing account. */
  create(
    request: CreateBudgetRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateBudgetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateBudgetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const BudgetServiceClient = makeGenericClientConstructor(
  BudgetServiceService,
  "yandex.cloud.billing.v1.BudgetService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BudgetServiceClient;
  service: typeof BudgetServiceService;
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
