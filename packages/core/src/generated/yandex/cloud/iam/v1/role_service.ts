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
import { Role } from "./role";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface GetRoleRequest {
  $type: "yandex.cloud.iam.v1.GetRoleRequest";
  /**
   * ID of the Role resource to return.
   * To get the role ID, use a [RoleService.List] request.
   */
  roleId: string;
}

export interface ListRolesRequest {
  $type: "yandex.cloud.iam.v1.ListRolesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListRolesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListRolesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /** A filter expression that filters resources listed in the response. */
  filter: string;
}

export interface ListRolesResponse {
  $type: "yandex.cloud.iam.v1.ListRolesResponse";
  /** List of Role resources. */
  roles: Role[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListRolesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListRolesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

function createBaseGetRoleRequest(): GetRoleRequest {
  return { $type: "yandex.cloud.iam.v1.GetRoleRequest", roleId: "" };
}

export const GetRoleRequest = {
  $type: "yandex.cloud.iam.v1.GetRoleRequest" as const,

  encode(message: GetRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRoleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRoleRequest {
    return { $type: GetRoleRequest.$type, roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "" };
  },

  toJSON(message: GetRoleRequest): unknown {
    const obj: any = {};
    if (message.roleId !== "") {
      obj.roleId = message.roleId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetRoleRequest>): GetRoleRequest {
    return GetRoleRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetRoleRequest>): GetRoleRequest {
    const message = createBaseGetRoleRequest();
    message.roleId = object.roleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetRoleRequest.$type, GetRoleRequest);

function createBaseListRolesRequest(): ListRolesRequest {
  return { $type: "yandex.cloud.iam.v1.ListRolesRequest", pageSize: 0, pageToken: "", filter: "" };
}

export const ListRolesRequest = {
  $type: "yandex.cloud.iam.v1.ListRolesRequest" as const,

  encode(message: ListRolesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRolesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRolesRequest();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRolesRequest {
    return {
      $type: ListRolesRequest.$type,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListRolesRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    return obj;
  },

  create(base?: DeepPartial<ListRolesRequest>): ListRolesRequest {
    return ListRolesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRolesRequest>): ListRolesRequest {
    const message = createBaseListRolesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRolesRequest.$type, ListRolesRequest);

function createBaseListRolesResponse(): ListRolesResponse {
  return { $type: "yandex.cloud.iam.v1.ListRolesResponse", roles: [], nextPageToken: "" };
}

export const ListRolesResponse = {
  $type: "yandex.cloud.iam.v1.ListRolesResponse" as const,

  encode(message: ListRolesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.roles) {
      Role.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRolesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roles.push(Role.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListRolesResponse {
    return {
      $type: ListRolesResponse.$type,
      roles: globalThis.Array.isArray(object?.roles) ? object.roles.map((e: any) => Role.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListRolesResponse): unknown {
    const obj: any = {};
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => Role.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListRolesResponse>): ListRolesResponse {
    return ListRolesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRolesResponse>): ListRolesResponse {
    const message = createBaseListRolesResponse();
    message.roles = object.roles?.map((e) => Role.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRolesResponse.$type, ListRolesResponse);

/** A set of methods for managing Role resources. */
export type RoleServiceService = typeof RoleServiceService;
export const RoleServiceService = {
  /**
   * Returns the specified Role resource.
   *
   * To get the list of available Role resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iam.v1.RoleService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRoleRequest) => Buffer.from(GetRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRoleRequest.decode(value),
    responseSerialize: (value: Role) => Buffer.from(Role.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Role.decode(value),
  },
  /** Retrieves the list of Role resources. */
  list: {
    path: "/yandex.cloud.iam.v1.RoleService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRolesRequest) => Buffer.from(ListRolesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListRolesRequest.decode(value),
    responseSerialize: (value: ListRolesResponse) => Buffer.from(ListRolesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListRolesResponse.decode(value),
  },
} as const;

export interface RoleServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Role resource.
   *
   * To get the list of available Role resources, make a [List] request.
   */
  get: handleUnaryCall<GetRoleRequest, Role>;
  /** Retrieves the list of Role resources. */
  list: handleUnaryCall<ListRolesRequest, ListRolesResponse>;
}

export interface RoleServiceClient extends Client {
  /**
   * Returns the specified Role resource.
   *
   * To get the list of available Role resources, make a [List] request.
   */
  get(request: GetRoleRequest, callback: (error: ServiceError | null, response: Role) => void): ClientUnaryCall;
  get(
    request: GetRoleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Role) => void,
  ): ClientUnaryCall;
  get(
    request: GetRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Role) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of Role resources. */
  list(
    request: ListRolesRequest,
    callback: (error: ServiceError | null, response: ListRolesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListRolesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListRolesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListRolesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListRolesResponse) => void,
  ): ClientUnaryCall;
}

export const RoleServiceClient = makeGenericClientConstructor(
  RoleServiceService,
  "yandex.cloud.iam.v1.RoleService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RoleServiceClient;
  service: typeof RoleServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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
