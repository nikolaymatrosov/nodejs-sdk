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
import { Customer, CustomerPerson } from "./customer";

export const protobufPackage = "yandex.cloud.billing.v1";

export interface ListCustomersRequest {
  $type: "yandex.cloud.billing.v1.ListCustomersRequest";
  /** ID of the reseller. */
  resellerId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListCustomersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListCustomersResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListCustomersResponse {
  $type: "yandex.cloud.billing.v1.ListCustomersResponse";
  /** List of customers. */
  customers: Customer[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCustomersRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListCustomersRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface InviteCustomerRequest {
  $type: "yandex.cloud.billing.v1.InviteCustomerRequest";
  /** ID of the reseller that customer will be associated with. */
  resellerId: string;
  /** Name of the customer. */
  name: string;
  /** Customer email to send invitation to. */
  invitationEmail: string;
  /** Person of the customer. */
  person?: CustomerPerson | undefined;
}

export interface CreateResellerServedCustomerRequest {
  $type: "yandex.cloud.billing.v1.CreateResellerServedCustomerRequest";
  /** ID of the reseller that customer will be associated with. */
  resellerId: string;
  /** Name of the customer. */
  name: string;
  /** Person of the customer. */
  person?: CustomerPerson | undefined;
}

export interface ActivateCustomerRequest {
  $type: "yandex.cloud.billing.v1.ActivateCustomerRequest";
  /**
   * ID of the customer.
   * To get the customer ID, use [CustomerService.List] request.
   */
  customerId: string;
}

export interface SuspendCustomerRequest {
  $type: "yandex.cloud.billing.v1.SuspendCustomerRequest";
  /**
   * ID of the customer.
   * To get the customer ID, use [CustomerService.List] request.
   */
  customerId: string;
}

export interface CustomerMetadata {
  $type: "yandex.cloud.billing.v1.CustomerMetadata";
  /** ID of the reseller. */
  resellerId: string;
  /** ID of the customer. */
  customerId: string;
}

function createBaseListCustomersRequest(): ListCustomersRequest {
  return { $type: "yandex.cloud.billing.v1.ListCustomersRequest", resellerId: "", pageSize: 0, pageToken: "" };
}

export const ListCustomersRequest = {
  $type: "yandex.cloud.billing.v1.ListCustomersRequest" as const,

  encode(message: ListCustomersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resellerId !== "") {
      writer.uint32(10).string(message.resellerId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCustomersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCustomersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resellerId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): ListCustomersRequest {
    return {
      $type: ListCustomersRequest.$type,
      resellerId: isSet(object.resellerId) ? globalThis.String(object.resellerId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListCustomersRequest): unknown {
    const obj: any = {};
    if (message.resellerId !== "") {
      obj.resellerId = message.resellerId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCustomersRequest>, I>>(base?: I): ListCustomersRequest {
    return ListCustomersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCustomersRequest>, I>>(object: I): ListCustomersRequest {
    const message = createBaseListCustomersRequest();
    message.resellerId = object.resellerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCustomersRequest.$type, ListCustomersRequest);

function createBaseListCustomersResponse(): ListCustomersResponse {
  return { $type: "yandex.cloud.billing.v1.ListCustomersResponse", customers: [], nextPageToken: "" };
}

export const ListCustomersResponse = {
  $type: "yandex.cloud.billing.v1.ListCustomersResponse" as const,

  encode(message: ListCustomersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.customers) {
      Customer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCustomersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCustomersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customers.push(Customer.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListCustomersResponse {
    return {
      $type: ListCustomersResponse.$type,
      customers: globalThis.Array.isArray(object?.customers)
        ? object.customers.map((e: any) => Customer.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListCustomersResponse): unknown {
    const obj: any = {};
    if (message.customers?.length) {
      obj.customers = message.customers.map((e) => Customer.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCustomersResponse>, I>>(base?: I): ListCustomersResponse {
    return ListCustomersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCustomersResponse>, I>>(object: I): ListCustomersResponse {
    const message = createBaseListCustomersResponse();
    message.customers = object.customers?.map((e) => Customer.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCustomersResponse.$type, ListCustomersResponse);

function createBaseInviteCustomerRequest(): InviteCustomerRequest {
  return {
    $type: "yandex.cloud.billing.v1.InviteCustomerRequest",
    resellerId: "",
    name: "",
    invitationEmail: "",
    person: undefined,
  };
}

export const InviteCustomerRequest = {
  $type: "yandex.cloud.billing.v1.InviteCustomerRequest" as const,

  encode(message: InviteCustomerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resellerId !== "") {
      writer.uint32(10).string(message.resellerId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.invitationEmail !== "") {
      writer.uint32(26).string(message.invitationEmail);
    }
    if (message.person !== undefined) {
      CustomerPerson.encode(message.person, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteCustomerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInviteCustomerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resellerId = reader.string();
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

          message.invitationEmail = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.person = CustomerPerson.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InviteCustomerRequest {
    return {
      $type: InviteCustomerRequest.$type,
      resellerId: isSet(object.resellerId) ? globalThis.String(object.resellerId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      invitationEmail: isSet(object.invitationEmail) ? globalThis.String(object.invitationEmail) : "",
      person: isSet(object.person) ? CustomerPerson.fromJSON(object.person) : undefined,
    };
  },

  toJSON(message: InviteCustomerRequest): unknown {
    const obj: any = {};
    if (message.resellerId !== "") {
      obj.resellerId = message.resellerId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.invitationEmail !== "") {
      obj.invitationEmail = message.invitationEmail;
    }
    if (message.person !== undefined) {
      obj.person = CustomerPerson.toJSON(message.person);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteCustomerRequest>, I>>(base?: I): InviteCustomerRequest {
    return InviteCustomerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteCustomerRequest>, I>>(object: I): InviteCustomerRequest {
    const message = createBaseInviteCustomerRequest();
    message.resellerId = object.resellerId ?? "";
    message.name = object.name ?? "";
    message.invitationEmail = object.invitationEmail ?? "";
    message.person = (object.person !== undefined && object.person !== null)
      ? CustomerPerson.fromPartial(object.person)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(InviteCustomerRequest.$type, InviteCustomerRequest);

function createBaseCreateResellerServedCustomerRequest(): CreateResellerServedCustomerRequest {
  return {
    $type: "yandex.cloud.billing.v1.CreateResellerServedCustomerRequest",
    resellerId: "",
    name: "",
    person: undefined,
  };
}

export const CreateResellerServedCustomerRequest = {
  $type: "yandex.cloud.billing.v1.CreateResellerServedCustomerRequest" as const,

  encode(message: CreateResellerServedCustomerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resellerId !== "") {
      writer.uint32(10).string(message.resellerId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.person !== undefined) {
      CustomerPerson.encode(message.person, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResellerServedCustomerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResellerServedCustomerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resellerId = reader.string();
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

          message.person = CustomerPerson.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResellerServedCustomerRequest {
    return {
      $type: CreateResellerServedCustomerRequest.$type,
      resellerId: isSet(object.resellerId) ? globalThis.String(object.resellerId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      person: isSet(object.person) ? CustomerPerson.fromJSON(object.person) : undefined,
    };
  },

  toJSON(message: CreateResellerServedCustomerRequest): unknown {
    const obj: any = {};
    if (message.resellerId !== "") {
      obj.resellerId = message.resellerId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.person !== undefined) {
      obj.person = CustomerPerson.toJSON(message.person);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResellerServedCustomerRequest>, I>>(
    base?: I,
  ): CreateResellerServedCustomerRequest {
    return CreateResellerServedCustomerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResellerServedCustomerRequest>, I>>(
    object: I,
  ): CreateResellerServedCustomerRequest {
    const message = createBaseCreateResellerServedCustomerRequest();
    message.resellerId = object.resellerId ?? "";
    message.name = object.name ?? "";
    message.person = (object.person !== undefined && object.person !== null)
      ? CustomerPerson.fromPartial(object.person)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateResellerServedCustomerRequest.$type, CreateResellerServedCustomerRequest);

function createBaseActivateCustomerRequest(): ActivateCustomerRequest {
  return { $type: "yandex.cloud.billing.v1.ActivateCustomerRequest", customerId: "" };
}

export const ActivateCustomerRequest = {
  $type: "yandex.cloud.billing.v1.ActivateCustomerRequest" as const,

  encode(message: ActivateCustomerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateCustomerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateCustomerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateCustomerRequest {
    return {
      $type: ActivateCustomerRequest.$type,
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
    };
  },

  toJSON(message: ActivateCustomerRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateCustomerRequest>, I>>(base?: I): ActivateCustomerRequest {
    return ActivateCustomerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateCustomerRequest>, I>>(object: I): ActivateCustomerRequest {
    const message = createBaseActivateCustomerRequest();
    message.customerId = object.customerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateCustomerRequest.$type, ActivateCustomerRequest);

function createBaseSuspendCustomerRequest(): SuspendCustomerRequest {
  return { $type: "yandex.cloud.billing.v1.SuspendCustomerRequest", customerId: "" };
}

export const SuspendCustomerRequest = {
  $type: "yandex.cloud.billing.v1.SuspendCustomerRequest" as const,

  encode(message: SuspendCustomerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuspendCustomerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuspendCustomerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SuspendCustomerRequest {
    return {
      $type: SuspendCustomerRequest.$type,
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
    };
  },

  toJSON(message: SuspendCustomerRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SuspendCustomerRequest>, I>>(base?: I): SuspendCustomerRequest {
    return SuspendCustomerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SuspendCustomerRequest>, I>>(object: I): SuspendCustomerRequest {
    const message = createBaseSuspendCustomerRequest();
    message.customerId = object.customerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SuspendCustomerRequest.$type, SuspendCustomerRequest);

function createBaseCustomerMetadata(): CustomerMetadata {
  return { $type: "yandex.cloud.billing.v1.CustomerMetadata", resellerId: "", customerId: "" };
}

export const CustomerMetadata = {
  $type: "yandex.cloud.billing.v1.CustomerMetadata" as const,

  encode(message: CustomerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resellerId !== "") {
      writer.uint32(10).string(message.resellerId);
    }
    if (message.customerId !== "") {
      writer.uint32(18).string(message.customerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resellerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomerMetadata {
    return {
      $type: CustomerMetadata.$type,
      resellerId: isSet(object.resellerId) ? globalThis.String(object.resellerId) : "",
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
    };
  },

  toJSON(message: CustomerMetadata): unknown {
    const obj: any = {};
    if (message.resellerId !== "") {
      obj.resellerId = message.resellerId;
    }
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomerMetadata>, I>>(base?: I): CustomerMetadata {
    return CustomerMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomerMetadata>, I>>(object: I): CustomerMetadata {
    const message = createBaseCustomerMetadata();
    message.resellerId = object.resellerId ?? "";
    message.customerId = object.customerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CustomerMetadata.$type, CustomerMetadata);

/** A set of methods for managing Customer resources. */
export type CustomerServiceService = typeof CustomerServiceService;
export const CustomerServiceService = {
  /** Retrieves the list of customers associated with the specified reseller. */
  list: {
    path: "/yandex.cloud.billing.v1.CustomerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCustomersRequest) => Buffer.from(ListCustomersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCustomersRequest.decode(value),
    responseSerialize: (value: ListCustomersResponse) => Buffer.from(ListCustomersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListCustomersResponse.decode(value),
  },
  /** Invites customer to the specified reseller. */
  invite: {
    path: "/yandex.cloud.billing.v1.CustomerService/Invite",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InviteCustomerRequest) => Buffer.from(InviteCustomerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InviteCustomerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates new reseller-served customer. */
  createResellerServed: {
    path: "/yandex.cloud.billing.v1.CustomerService/CreateResellerServed",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateResellerServedCustomerRequest) =>
      Buffer.from(CreateResellerServedCustomerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateResellerServedCustomerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
  activate: {
    path: "/yandex.cloud.billing.v1.CustomerService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateCustomerRequest) => Buffer.from(ActivateCustomerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateCustomerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
  suspend: {
    path: "/yandex.cloud.billing.v1.CustomerService/Suspend",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SuspendCustomerRequest) => Buffer.from(SuspendCustomerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SuspendCustomerRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface CustomerServiceServer extends UntypedServiceImplementation {
  /** Retrieves the list of customers associated with the specified reseller. */
  list: handleUnaryCall<ListCustomersRequest, ListCustomersResponse>;
  /** Invites customer to the specified reseller. */
  invite: handleUnaryCall<InviteCustomerRequest, Operation>;
  /** Creates new reseller-served customer. */
  createResellerServed: handleUnaryCall<CreateResellerServedCustomerRequest, Operation>;
  /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
  activate: handleUnaryCall<ActivateCustomerRequest, Operation>;
  /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
  suspend: handleUnaryCall<SuspendCustomerRequest, Operation>;
}

export interface CustomerServiceClient extends Client {
  /** Retrieves the list of customers associated with the specified reseller. */
  list(
    request: ListCustomersRequest,
    callback: (error: ServiceError | null, response: ListCustomersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListCustomersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListCustomersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListCustomersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListCustomersResponse) => void,
  ): ClientUnaryCall;
  /** Invites customer to the specified reseller. */
  invite(
    request: InviteCustomerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  invite(
    request: InviteCustomerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  invite(
    request: InviteCustomerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Creates new reseller-served customer. */
  createResellerServed(
    request: CreateResellerServedCustomerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createResellerServed(
    request: CreateResellerServedCustomerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  createResellerServed(
    request: CreateResellerServedCustomerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
  activate(
    request: ActivateCustomerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateCustomerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateCustomerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
  suspend(
    request: SuspendCustomerRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  suspend(
    request: SuspendCustomerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  suspend(
    request: SuspendCustomerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const CustomerServiceClient = makeGenericClientConstructor(
  CustomerServiceService,
  "yandex.cloud.billing.v1.CustomerService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): CustomerServiceClient;
  service: typeof CustomerServiceService;
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
