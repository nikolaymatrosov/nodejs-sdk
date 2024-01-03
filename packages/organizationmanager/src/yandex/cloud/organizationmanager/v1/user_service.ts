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
import { SubjectClaims } from "@yandex-cloud/core/dist/generated/yandex/cloud/oauth/claims";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

export interface ListMembersRequest {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest";
  /** ID of the Organization resource to list members for. */
  organizationId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListMembersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListMembersResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListMembersResponse {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse";
  /** List of users for the specified organization. */
  users: ListMembersResponse_OrganizationUser[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListMembersRequest.page_size], use the [next_page_token] as the value
   * for the [ListMembersRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListMembersResponse_OrganizationUser {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser";
  /** OpenID standard claims with additional Cloud Organization claims. */
  subjectClaims?: SubjectClaims | undefined;
}

export interface DeleteMembershipRequest {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest";
  /** ID of the organization to delete membership. */
  organizationId: string;
  /**
   * ID of the subject that is being deleted from organization.
   * By default equals to authenticated subject.
   */
  subjectId: string;
}

export interface DeleteMembershipMetadata {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata";
  /** ID of the organization to delete membership. */
  organizationId: string;
  /** ID of the subject that is being deleted from organization. */
  subjectId: string;
}

export interface DeleteMembershipResponse {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse";
  /** ID of the organization to delete membership. */
  organizationId: string;
  /** ID of the subject that is being deleted from organization. */
  subjectId: string;
}

function createBaseListMembersRequest(): ListMembersRequest {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest",
    organizationId: "",
    pageSize: 0,
    pageToken: "",
  };
}

export const ListMembersRequest = {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest" as const,

  encode(message: ListMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMembersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organizationId = reader.string();
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

  fromJSON(object: any): ListMembersRequest {
    return {
      $type: ListMembersRequest.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListMembersRequest): unknown {
    const obj: any = {};
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMembersRequest>, I>>(base?: I): ListMembersRequest {
    return ListMembersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMembersRequest>, I>>(object: I): ListMembersRequest {
    const message = createBaseListMembersRequest();
    message.organizationId = object.organizationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListMembersRequest.$type, ListMembersRequest);

function createBaseListMembersResponse(): ListMembersResponse {
  return { $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse", users: [], nextPageToken: "" };
}

export const ListMembersResponse = {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse" as const,

  encode(message: ListMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      ListMembersResponse_OrganizationUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMembersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(ListMembersResponse_OrganizationUser.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListMembersResponse {
    return {
      $type: ListMembersResponse.$type,
      users: globalThis.Array.isArray(object?.users)
        ? object.users.map((e: any) => ListMembersResponse_OrganizationUser.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListMembersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => ListMembersResponse_OrganizationUser.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMembersResponse>, I>>(base?: I): ListMembersResponse {
    return ListMembersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMembersResponse>, I>>(object: I): ListMembersResponse {
    const message = createBaseListMembersResponse();
    message.users = object.users?.map((e) => ListMembersResponse_OrganizationUser.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListMembersResponse.$type, ListMembersResponse);

function createBaseListMembersResponse_OrganizationUser(): ListMembersResponse_OrganizationUser {
  return {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser",
    subjectClaims: undefined,
  };
}

export const ListMembersResponse_OrganizationUser = {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser" as const,

  encode(message: ListMembersResponse_OrganizationUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subjectClaims !== undefined) {
      SubjectClaims.encode(message.subjectClaims, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMembersResponse_OrganizationUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMembersResponse_OrganizationUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subjectClaims = SubjectClaims.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListMembersResponse_OrganizationUser {
    return {
      $type: ListMembersResponse_OrganizationUser.$type,
      subjectClaims: isSet(object.subjectClaims) ? SubjectClaims.fromJSON(object.subjectClaims) : undefined,
    };
  },

  toJSON(message: ListMembersResponse_OrganizationUser): unknown {
    const obj: any = {};
    if (message.subjectClaims !== undefined) {
      obj.subjectClaims = SubjectClaims.toJSON(message.subjectClaims);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMembersResponse_OrganizationUser>, I>>(
    base?: I,
  ): ListMembersResponse_OrganizationUser {
    return ListMembersResponse_OrganizationUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMembersResponse_OrganizationUser>, I>>(
    object: I,
  ): ListMembersResponse_OrganizationUser {
    const message = createBaseListMembersResponse_OrganizationUser();
    message.subjectClaims = (object.subjectClaims !== undefined && object.subjectClaims !== null)
      ? SubjectClaims.fromPartial(object.subjectClaims)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ListMembersResponse_OrganizationUser.$type, ListMembersResponse_OrganizationUser);

function createBaseDeleteMembershipRequest(): DeleteMembershipRequest {
  return { $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest", organizationId: "", subjectId: "" };
}

export const DeleteMembershipRequest = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest" as const,

  encode(message: DeleteMembershipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.subjectId !== "") {
      writer.uint32(18).string(message.subjectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMembershipRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMembershipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organizationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subjectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteMembershipRequest {
    return {
      $type: DeleteMembershipRequest.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      subjectId: isSet(object.subjectId) ? globalThis.String(object.subjectId) : "",
    };
  },

  toJSON(message: DeleteMembershipRequest): unknown {
    const obj: any = {};
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    if (message.subjectId !== "") {
      obj.subjectId = message.subjectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMembershipRequest>, I>>(base?: I): DeleteMembershipRequest {
    return DeleteMembershipRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMembershipRequest>, I>>(object: I): DeleteMembershipRequest {
    const message = createBaseDeleteMembershipRequest();
    message.organizationId = object.organizationId ?? "";
    message.subjectId = object.subjectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteMembershipRequest.$type, DeleteMembershipRequest);

function createBaseDeleteMembershipMetadata(): DeleteMembershipMetadata {
  return { $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata", organizationId: "", subjectId: "" };
}

export const DeleteMembershipMetadata = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata" as const,

  encode(message: DeleteMembershipMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.subjectId !== "") {
      writer.uint32(18).string(message.subjectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMembershipMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMembershipMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organizationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subjectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteMembershipMetadata {
    return {
      $type: DeleteMembershipMetadata.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      subjectId: isSet(object.subjectId) ? globalThis.String(object.subjectId) : "",
    };
  },

  toJSON(message: DeleteMembershipMetadata): unknown {
    const obj: any = {};
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    if (message.subjectId !== "") {
      obj.subjectId = message.subjectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMembershipMetadata>, I>>(base?: I): DeleteMembershipMetadata {
    return DeleteMembershipMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMembershipMetadata>, I>>(object: I): DeleteMembershipMetadata {
    const message = createBaseDeleteMembershipMetadata();
    message.organizationId = object.organizationId ?? "";
    message.subjectId = object.subjectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteMembershipMetadata.$type, DeleteMembershipMetadata);

function createBaseDeleteMembershipResponse(): DeleteMembershipResponse {
  return { $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse", organizationId: "", subjectId: "" };
}

export const DeleteMembershipResponse = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse" as const,

  encode(message: DeleteMembershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.subjectId !== "") {
      writer.uint32(18).string(message.subjectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMembershipResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMembershipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organizationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subjectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteMembershipResponse {
    return {
      $type: DeleteMembershipResponse.$type,
      organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
      subjectId: isSet(object.subjectId) ? globalThis.String(object.subjectId) : "",
    };
  },

  toJSON(message: DeleteMembershipResponse): unknown {
    const obj: any = {};
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId;
    }
    if (message.subjectId !== "") {
      obj.subjectId = message.subjectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMembershipResponse>, I>>(base?: I): DeleteMembershipResponse {
    return DeleteMembershipResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMembershipResponse>, I>>(object: I): DeleteMembershipResponse {
    const message = createBaseDeleteMembershipResponse();
    message.organizationId = object.organizationId ?? "";
    message.subjectId = object.subjectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteMembershipResponse.$type, DeleteMembershipResponse);

/** A set of methods for managing Organization users. */
export type UserServiceService = typeof UserServiceService;
export const UserServiceService = {
  /** List organization active members. */
  listMembers: {
    path: "/yandex.cloud.organizationmanager.v1.UserService/ListMembers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListMembersRequest) => Buffer.from(ListMembersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListMembersRequest.decode(value),
    responseSerialize: (value: ListMembersResponse) => Buffer.from(ListMembersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListMembersResponse.decode(value),
  },
  /** Delete user membership. */
  deleteMembership: {
    path: "/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteMembershipRequest) => Buffer.from(DeleteMembershipRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteMembershipRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  /** List organization active members. */
  listMembers: handleUnaryCall<ListMembersRequest, ListMembersResponse>;
  /** Delete user membership. */
  deleteMembership: handleUnaryCall<DeleteMembershipRequest, Operation>;
}

export interface UserServiceClient extends Client {
  /** List organization active members. */
  listMembers(
    request: ListMembersRequest,
    callback: (error: ServiceError | null, response: ListMembersResponse) => void,
  ): ClientUnaryCall;
  listMembers(
    request: ListMembersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListMembersResponse) => void,
  ): ClientUnaryCall;
  listMembers(
    request: ListMembersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListMembersResponse) => void,
  ): ClientUnaryCall;
  /** Delete user membership. */
  deleteMembership(
    request: DeleteMembershipRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteMembership(
    request: DeleteMembershipRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deleteMembership(
    request: DeleteMembershipRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(
  UserServiceService,
  "yandex.cloud.organizationmanager.v1.UserService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserServiceClient;
  service: typeof UserServiceService;
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
