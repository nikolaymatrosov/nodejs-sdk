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
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Permission, User, UserQuota, UserSettings, UserSpec } from "./user";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export interface GetUserRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetUserRequest";
  /**
   * ID of the ClickHouse cluster the user belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the ClickHouse User resource to return.
   * To get the name of the user, use a [UserService.List] request.
   */
  userName: string;
}

export interface ListUsersRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListUsersRequest";
  /**
   * ID of the cluster to list ClickHouse users in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListUsersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the [ListUsersResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListUsersResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListUsersResponse";
  /** List of ClickHouse User resources. */
  users: User[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListUsersRequest.page_size], use the [next_page_token] as the value
   * for the [ListUsersRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateUserRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateUserRequest";
  /**
   * ID of the ClickHouse cluster to create a user in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Properties of the user to be created. */
  userSpec?: UserSpec | undefined;
}

export interface CreateUserMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateUserMetadata";
  /** ID of the ClickHouse cluster the user is being created in. */
  clusterId: string;
  /** Name of the user that is being created. */
  userName: string;
}

export interface UpdateUserRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateUserRequest";
  /**
   * ID of the ClickHouse cluster the user belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to be updated.
   * To get the name of the user, use a [UserService.List] request.
   */
  userName: string;
  /** Field mask that specifies which attributes of the ClickHouse user should be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** New password for the user. */
  password: string;
  /** New set of permissions for the user. */
  permissions: Permission[];
  settings?: UserSettings | undefined;
  quotas: UserQuota[];
}

export interface UpdateUserMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateUserMetadata";
  /** ID of the ClickHouse cluster the user belongs to. */
  clusterId: string;
  /** Name of the user that is being updated. */
  userName: string;
}

export interface DeleteUserRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteUserRequest";
  /**
   * ID of the ClickHouse cluster the user belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to delete.
   * To get the name of the user, use a [UserService.List] request.
   */
  userName: string;
}

export interface DeleteUserMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteUserMetadata";
  /** ID of the ClickHouse cluster the user belongs to. */
  clusterId: string;
  /** Name of the user that is being deleted. */
  userName: string;
}

export interface GrantUserPermissionRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GrantUserPermissionRequest";
  /**
   * ID of the ClickHouse cluster the user belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to grant the permission to.
   * To get the name of the user, use a [UserService.List] request.
   */
  userName: string;
  /** Permission that should be granted to the specified user. */
  permission?: Permission | undefined;
}

export interface GrantUserPermissionMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.GrantUserPermissionMetadata";
  /** ID of the ClickHouse cluster the user belongs to. */
  clusterId: string;
  /** Name of the user that is being granted a permission. */
  userName: string;
}

export interface RevokeUserPermissionRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.RevokeUserPermissionRequest";
  /**
   * ID of the ClickHouse cluster the user belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to revoke a permission from.
   * To get the name of the user, use a [UserService.List] request.
   */
  userName: string;
  /** Name of the database that the user should lose access to. */
  databaseName: string;
}

export interface RevokeUserPermissionMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.RevokeUserPermissionMetadata";
  /** ID of the ClickHouse cluster the user belongs to. */
  clusterId: string;
  /** Name of the user whose permission is being revoked. */
  userName: string;
}

function createBaseGetUserRequest(): GetUserRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.GetUserRequest", clusterId: "", userName: "" };
}

export const GetUserRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetUserRequest" as const,

  encode(message: GetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    return {
      $type: GetUserRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
    };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserRequest>): GetUserRequest {
    return GetUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUserRequest.$type, GetUserRequest);

function createBaseListUsersRequest(): ListUsersRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListUsersRequest", clusterId: "", pageSize: 0, pageToken: "" };
}

export const ListUsersRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListUsersRequest" as const,

  encode(message: ListUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
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

  fromJSON(object: any): ListUsersRequest {
    return {
      $type: ListUsersRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListUsersRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListUsersRequest>): ListUsersRequest {
    return ListUsersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUsersRequest>): ListUsersRequest {
    const message = createBaseListUsersRequest();
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListUsersRequest.$type, ListUsersRequest);

function createBaseListUsersResponse(): ListUsersResponse {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.ListUsersResponse", users: [], nextPageToken: "" };
}

export const ListUsersResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListUsersResponse" as const,

  encode(message: ListUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListUsersResponse {
    return {
      $type: ListUsersResponse.$type,
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListUsersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListUsersResponse>): ListUsersResponse {
    return ListUsersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUsersResponse>): ListUsersResponse {
    const message = createBaseListUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListUsersResponse.$type, ListUsersResponse);

function createBaseCreateUserRequest(): CreateUserRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.CreateUserRequest", clusterId: "", userSpec: undefined };
}

export const CreateUserRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateUserRequest" as const,

  encode(message: CreateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userSpec !== undefined) {
      UserSpec.encode(message.userSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userSpec = UserSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      $type: CreateUserRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userSpec: isSet(object.userSpec) ? UserSpec.fromJSON(object.userSpec) : undefined,
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userSpec !== undefined) {
      obj.userSpec = UserSpec.toJSON(message.userSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateUserRequest>): CreateUserRequest {
    return CreateUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.clusterId = object.clusterId ?? "";
    message.userSpec = (object.userSpec !== undefined && object.userSpec !== null)
      ? UserSpec.fromPartial(object.userSpec)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateUserRequest.$type, CreateUserRequest);

function createBaseCreateUserMetadata(): CreateUserMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.CreateUserMetadata", clusterId: "", userName: "" };
}

export const CreateUserMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateUserMetadata" as const,

  encode(message: CreateUserMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserMetadata {
    return {
      $type: CreateUserMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
    };
  },

  toJSON(message: CreateUserMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateUserMetadata>): CreateUserMetadata {
    return CreateUserMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateUserMetadata>): CreateUserMetadata {
    const message = createBaseCreateUserMetadata();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateUserMetadata.$type, CreateUserMetadata);

function createBaseUpdateUserRequest(): UpdateUserRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateUserRequest",
    clusterId: "",
    userName: "",
    updateMask: undefined,
    password: "",
    permissions: [],
    settings: undefined,
    quotas: [],
  };
}

export const UpdateUserRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateUserRequest" as const,

  encode(message: UpdateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      UserSettings.encode(message.settings, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.quotas) {
      UserQuota.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.permissions.push(Permission.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.settings = UserSettings.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.quotas.push(UserQuota.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    return {
      $type: UpdateUserRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => Permission.fromJSON(e))
        : [],
      settings: isSet(object.settings) ? UserSettings.fromJSON(object.settings) : undefined,
      quotas: globalThis.Array.isArray(object?.quotas) ? object.quotas.map((e: any) => UserQuota.fromJSON(e)) : [],
    };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    if (message.settings !== undefined) {
      obj.settings = UserSettings.toJSON(message.settings);
    }
    if (message.quotas?.length) {
      obj.quotas = message.quotas.map((e) => UserQuota.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateUserRequest>): UpdateUserRequest {
    return UpdateUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateUserRequest>): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.password = object.password ?? "";
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? UserSettings.fromPartial(object.settings)
      : undefined;
    message.quotas = object.quotas?.map((e) => UserQuota.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateUserRequest.$type, UpdateUserRequest);

function createBaseUpdateUserMetadata(): UpdateUserMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.UpdateUserMetadata", clusterId: "", userName: "" };
}

export const UpdateUserMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateUserMetadata" as const,

  encode(message: UpdateUserMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserMetadata {
    return {
      $type: UpdateUserMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
    };
  },

  toJSON(message: UpdateUserMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateUserMetadata>): UpdateUserMetadata {
    return UpdateUserMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateUserMetadata>): UpdateUserMetadata {
    const message = createBaseUpdateUserMetadata();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateUserMetadata.$type, UpdateUserMetadata);

function createBaseDeleteUserRequest(): DeleteUserRequest {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteUserRequest", clusterId: "", userName: "" };
}

export const DeleteUserRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteUserRequest" as const,

  encode(message: DeleteUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserRequest {
    return {
      $type: DeleteUserRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
    };
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteUserRequest>): DeleteUserRequest {
    return DeleteUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteUserRequest>): DeleteUserRequest {
    const message = createBaseDeleteUserRequest();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteUserRequest.$type, DeleteUserRequest);

function createBaseDeleteUserMetadata(): DeleteUserMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.DeleteUserMetadata", clusterId: "", userName: "" };
}

export const DeleteUserMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteUserMetadata" as const,

  encode(message: DeleteUserMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserMetadata {
    return {
      $type: DeleteUserMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
    };
  },

  toJSON(message: DeleteUserMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteUserMetadata>): DeleteUserMetadata {
    return DeleteUserMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteUserMetadata>): DeleteUserMetadata {
    const message = createBaseDeleteUserMetadata();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteUserMetadata.$type, DeleteUserMetadata);

function createBaseGrantUserPermissionRequest(): GrantUserPermissionRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.GrantUserPermissionRequest",
    clusterId: "",
    userName: "",
    permission: undefined,
  };
}

export const GrantUserPermissionRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GrantUserPermissionRequest" as const,

  encode(message: GrantUserPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantUserPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantUserPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permission = Permission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GrantUserPermissionRequest {
    return {
      $type: GrantUserPermissionRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined,
    };
  },

  toJSON(message: GrantUserPermissionRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.permission !== undefined) {
      obj.permission = Permission.toJSON(message.permission);
    }
    return obj;
  },

  create(base?: DeepPartial<GrantUserPermissionRequest>): GrantUserPermissionRequest {
    return GrantUserPermissionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GrantUserPermissionRequest>): GrantUserPermissionRequest {
    const message = createBaseGrantUserPermissionRequest();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GrantUserPermissionRequest.$type, GrantUserPermissionRequest);

function createBaseGrantUserPermissionMetadata(): GrantUserPermissionMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.GrantUserPermissionMetadata", clusterId: "", userName: "" };
}

export const GrantUserPermissionMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GrantUserPermissionMetadata" as const,

  encode(message: GrantUserPermissionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantUserPermissionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantUserPermissionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GrantUserPermissionMetadata {
    return {
      $type: GrantUserPermissionMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
    };
  },

  toJSON(message: GrantUserPermissionMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    return obj;
  },

  create(base?: DeepPartial<GrantUserPermissionMetadata>): GrantUserPermissionMetadata {
    return GrantUserPermissionMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GrantUserPermissionMetadata>): GrantUserPermissionMetadata {
    const message = createBaseGrantUserPermissionMetadata();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GrantUserPermissionMetadata.$type, GrantUserPermissionMetadata);

function createBaseRevokeUserPermissionRequest(): RevokeUserPermissionRequest {
  return {
    $type: "yandex.cloud.mdb.clickhouse.v1.RevokeUserPermissionRequest",
    clusterId: "",
    userName: "",
    databaseName: "",
  };
}

export const RevokeUserPermissionRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RevokeUserPermissionRequest" as const,

  encode(message: RevokeUserPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.databaseName !== "") {
      writer.uint32(26).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokeUserPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeUserPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.databaseName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RevokeUserPermissionRequest {
    return {
      $type: RevokeUserPermissionRequest.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
    };
  },

  toJSON(message: RevokeUserPermissionRequest): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    return obj;
  },

  create(base?: DeepPartial<RevokeUserPermissionRequest>): RevokeUserPermissionRequest {
    return RevokeUserPermissionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RevokeUserPermissionRequest>): RevokeUserPermissionRequest {
    const message = createBaseRevokeUserPermissionRequest();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RevokeUserPermissionRequest.$type, RevokeUserPermissionRequest);

function createBaseRevokeUserPermissionMetadata(): RevokeUserPermissionMetadata {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.RevokeUserPermissionMetadata", clusterId: "", userName: "" };
}

export const RevokeUserPermissionMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RevokeUserPermissionMetadata" as const,

  encode(message: RevokeUserPermissionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokeUserPermissionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeUserPermissionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RevokeUserPermissionMetadata {
    return {
      $type: RevokeUserPermissionMetadata.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
    };
  },

  toJSON(message: RevokeUserPermissionMetadata): unknown {
    const obj: any = {};
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    return obj;
  },

  create(base?: DeepPartial<RevokeUserPermissionMetadata>): RevokeUserPermissionMetadata {
    return RevokeUserPermissionMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RevokeUserPermissionMetadata>): RevokeUserPermissionMetadata {
    const message = createBaseRevokeUserPermissionMetadata();
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RevokeUserPermissionMetadata.$type, RevokeUserPermissionMetadata);

/**
 * A set of methods for managing ClickHouse User resources.
 * NOTE: these methods are available only if user management through SQL is disabled.
 */
export type UserServiceService = typeof UserServiceService;
export const UserServiceService = {
  /**
   * Returns the specified ClickHouse User resource.
   *
   * To get the list of available ClickHouse User resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserRequest) => Buffer.from(GetUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserRequest.decode(value),
    responseSerialize: (value: User) => Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
  /** Retrieves the list of ClickHouse User resources in the specified cluster. */
  list: {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListUsersRequest) => Buffer.from(ListUsersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListUsersRequest.decode(value),
    responseSerialize: (value: ListUsersResponse) => Buffer.from(ListUsersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListUsersResponse.decode(value),
  },
  /** Creates a ClickHouse user in the specified cluster. */
  create: {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUserRequest) => Buffer.from(CreateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified ClickHouse user. */
  update: {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateUserRequest) => Buffer.from(UpdateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateUserRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified ClickHouse user. */
  delete: {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteUserRequest) => Buffer.from(DeleteUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteUserRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Grants a permission to the specified ClickHouse user. */
  grantPermission: {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/GrantPermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GrantUserPermissionRequest) =>
      Buffer.from(GrantUserPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GrantUserPermissionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Revokes a permission from the specified ClickHouse user. */
  revokePermission: {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/RevokePermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RevokeUserPermissionRequest) =>
      Buffer.from(RevokeUserPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RevokeUserPermissionRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified ClickHouse User resource.
   *
   * To get the list of available ClickHouse User resources, make a [List] request.
   */
  get: handleUnaryCall<GetUserRequest, User>;
  /** Retrieves the list of ClickHouse User resources in the specified cluster. */
  list: handleUnaryCall<ListUsersRequest, ListUsersResponse>;
  /** Creates a ClickHouse user in the specified cluster. */
  create: handleUnaryCall<CreateUserRequest, Operation>;
  /** Updates the specified ClickHouse user. */
  update: handleUnaryCall<UpdateUserRequest, Operation>;
  /** Deletes the specified ClickHouse user. */
  delete: handleUnaryCall<DeleteUserRequest, Operation>;
  /** Grants a permission to the specified ClickHouse user. */
  grantPermission: handleUnaryCall<GrantUserPermissionRequest, Operation>;
  /** Revokes a permission from the specified ClickHouse user. */
  revokePermission: handleUnaryCall<RevokeUserPermissionRequest, Operation>;
}

export interface UserServiceClient extends Client {
  /**
   * Returns the specified ClickHouse User resource.
   *
   * To get the list of available ClickHouse User resources, make a [List] request.
   */
  get(request: GetUserRequest, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
  get(
    request: GetUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: User) => void,
  ): ClientUnaryCall;
  get(
    request: GetUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: User) => void,
  ): ClientUnaryCall;
  /** Retrieves the list of ClickHouse User resources in the specified cluster. */
  list(
    request: ListUsersRequest,
    callback: (error: ServiceError | null, response: ListUsersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListUsersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListUsersResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListUsersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListUsersResponse) => void,
  ): ClientUnaryCall;
  /** Creates a ClickHouse user in the specified cluster. */
  create(
    request: CreateUserRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified ClickHouse user. */
  update(
    request: UpdateUserRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified ClickHouse user. */
  delete(
    request: DeleteUserRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Grants a permission to the specified ClickHouse user. */
  grantPermission(
    request: GrantUserPermissionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  grantPermission(
    request: GrantUserPermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  grantPermission(
    request: GrantUserPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Revokes a permission from the specified ClickHouse user. */
  revokePermission(
    request: RevokeUserPermissionRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  revokePermission(
    request: RevokeUserPermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  revokePermission(
    request: RevokeUserPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(
  UserServiceService,
  "yandex.cloud.mdb.clickhouse.v1.UserService",
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
