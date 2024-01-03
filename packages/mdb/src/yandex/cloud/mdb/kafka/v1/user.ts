/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

/**
 * A Kafka user.
 * For more information, see the [Operations -> Accounts](/docs/managed-kafka/operations/cluster-accounts) section of the documentation.
 */
export interface User {
  $type: "yandex.cloud.mdb.kafka.v1.User";
  /** Name of the Kafka user. */
  name: string;
  /**
   * ID of the Apache Kafka® cluster the user belongs to.
   *
   * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Set of permissions granted to this user. */
  permissions: Permission[];
}

export interface UserSpec {
  $type: "yandex.cloud.mdb.kafka.v1.UserSpec";
  /** Name of the Kafka user. */
  name: string;
  /** Password of the Kafka user. */
  password: string;
  /** Set of permissions granted to the user. */
  permissions: Permission[];
}

export interface Permission {
  $type: "yandex.cloud.mdb.kafka.v1.Permission";
  /**
   * Name or prefix-pattern with wildcard for the topic that the permission grants access to.
   *
   * To get the topic name, make a [TopicService.List] request.
   */
  topicName: string;
  /** Access role type to grant to the user. */
  role: Permission_AccessRole;
  /**
   * Lists hosts allowed for this permission.
   * When not defined, access from any host is allowed.
   *
   * Bare in mind that the same host might appear in multiple permissions at the same time,
   * hence removing individual permission doesn't automatically restricts access from the [allow_hosts] of the permission.
   * If the same host(s) is listed for another permission of the same principal/topic, the host(s) remains allowed.
   */
  allowHosts: string[];
}

export enum Permission_AccessRole {
  ACCESS_ROLE_UNSPECIFIED = 0,
  /** ACCESS_ROLE_PRODUCER - producer role for the user. */
  ACCESS_ROLE_PRODUCER = 1,
  /** ACCESS_ROLE_CONSUMER - consumer role for the user. */
  ACCESS_ROLE_CONSUMER = 2,
  /** ACCESS_ROLE_ADMIN - admin role for the user. */
  ACCESS_ROLE_ADMIN = 3,
  UNRECOGNIZED = -1,
}

export function permission_AccessRoleFromJSON(object: any): Permission_AccessRole {
  switch (object) {
    case 0:
    case "ACCESS_ROLE_UNSPECIFIED":
      return Permission_AccessRole.ACCESS_ROLE_UNSPECIFIED;
    case 1:
    case "ACCESS_ROLE_PRODUCER":
      return Permission_AccessRole.ACCESS_ROLE_PRODUCER;
    case 2:
    case "ACCESS_ROLE_CONSUMER":
      return Permission_AccessRole.ACCESS_ROLE_CONSUMER;
    case 3:
    case "ACCESS_ROLE_ADMIN":
      return Permission_AccessRole.ACCESS_ROLE_ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permission_AccessRole.UNRECOGNIZED;
  }
}

export function permission_AccessRoleToJSON(object: Permission_AccessRole): string {
  switch (object) {
    case Permission_AccessRole.ACCESS_ROLE_UNSPECIFIED:
      return "ACCESS_ROLE_UNSPECIFIED";
    case Permission_AccessRole.ACCESS_ROLE_PRODUCER:
      return "ACCESS_ROLE_PRODUCER";
    case Permission_AccessRole.ACCESS_ROLE_CONSUMER:
      return "ACCESS_ROLE_CONSUMER";
    case Permission_AccessRole.ACCESS_ROLE_ADMIN:
      return "ACCESS_ROLE_ADMIN";
    case Permission_AccessRole.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUser(): User {
  return { $type: "yandex.cloud.mdb.kafka.v1.User", name: "", clusterId: "", permissions: [] };
}

export const User = {
  $type: "yandex.cloud.mdb.kafka.v1.User" as const,

  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permissions.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      $type: User.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => Permission.fromJSON(e))
        : [],
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(User.$type, User);

function createBaseUserSpec(): UserSpec {
  return { $type: "yandex.cloud.mdb.kafka.v1.UserSpec", name: "", password: "", permissions: [] };
}

export const UserSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.UserSpec" as const,

  encode(message: UserSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permissions.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSpec {
    return {
      $type: UserSpec.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => Permission.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UserSpec>): UserSpec {
    return UserSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserSpec>): UserSpec {
    const message = createBaseUserSpec();
    message.name = object.name ?? "";
    message.password = object.password ?? "";
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UserSpec.$type, UserSpec);

function createBasePermission(): Permission {
  return { $type: "yandex.cloud.mdb.kafka.v1.Permission", topicName: "", role: 0, allowHosts: [] };
}

export const Permission = {
  $type: "yandex.cloud.mdb.kafka.v1.Permission" as const,

  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topicName !== "") {
      writer.uint32(10).string(message.topicName);
    }
    if (message.role !== 0) {
      writer.uint32(16).int32(message.role);
    }
    for (const v of message.allowHosts) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topicName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allowHosts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permission {
    return {
      $type: Permission.$type,
      topicName: isSet(object.topicName) ? globalThis.String(object.topicName) : "",
      role: isSet(object.role) ? permission_AccessRoleFromJSON(object.role) : 0,
      allowHosts: globalThis.Array.isArray(object?.allowHosts)
        ? object.allowHosts.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    if (message.topicName !== "") {
      obj.topicName = message.topicName;
    }
    if (message.role !== 0) {
      obj.role = permission_AccessRoleToJSON(message.role);
    }
    if (message.allowHosts?.length) {
      obj.allowHosts = message.allowHosts;
    }
    return obj;
  },

  create(base?: DeepPartial<Permission>): Permission {
    return Permission.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Permission>): Permission {
    const message = createBasePermission();
    message.topicName = object.topicName ?? "";
    message.role = object.role ?? 0;
    message.allowHosts = object.allowHosts?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Permission.$type, Permission);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
