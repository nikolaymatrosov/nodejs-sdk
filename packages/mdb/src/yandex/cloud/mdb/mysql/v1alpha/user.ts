/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";

/** A MySQL user. For more information, see the [documentation](/docs/managed-mysql/concepts). */
export interface User {
  $type: "yandex.cloud.mdb.mysql.v1alpha.User";
  /** Name of the MySQL user. */
  name: string;
  /** ID of the MySQL cluster the user belongs to. */
  clusterId: string;
  /** Set of permissions granted to the user. */
  permissions: Permission[];
}

export interface Permission {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Permission";
  /** Name of the database that the permission grants access to. */
  databaseName: string;
  /** Roles granted to the user within the database. */
  roles: Permission_Privilege[];
}

export enum Permission_Privilege {
  PRIVILEGE_UNSPECIFIED = 0,
  /** ALL_PRIVILEGES - All privileges that can be made available to the user. */
  ALL_PRIVILEGES = 1,
  /** ALTER - Altering tables. */
  ALTER = 2,
  /** ALTER_ROUTINE - Altering stored routines (stored procedures and functions). */
  ALTER_ROUTINE = 3,
  /** CREATE - Creating tables or indexes. */
  CREATE = 4,
  /** CREATE_ROUTINE - Creating stored routines. */
  CREATE_ROUTINE = 5,
  /** CREATE_TEMPORARY_TABLES - Creating temporary tables. */
  CREATE_TEMPORARY_TABLES = 6,
  /** CREATE_VIEW - Creating views. */
  CREATE_VIEW = 7,
  /** DELETE - Deleting tables. */
  DELETE = 8,
  /** DROP - Removing tables or views. */
  DROP = 9,
  /** EVENT - Creating, altering, dropping, or displaying events for the Event Scheduler. */
  EVENT = 10,
  /** EXECUTE - Executing stored routines. */
  EXECUTE = 11,
  /** INDEX - Creating and removing indexes. */
  INDEX = 12,
  /** INSERT - Inserting rows into the database. */
  INSERT = 13,
  /** LOCK_TABLES - Using LOCK TABLES statement for tables available with SELECT privilege. */
  LOCK_TABLES = 14,
  /**
   * SELECT - Selecting rows from tables.
   *
   * Some SELECT statements can be allowed without the SELECT privilege. All statements that read column values require the SELECT privilege. See details in [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html#priv_select).
   */
  SELECT = 15,
  /** SHOW_VIEW - Using the SHOW CREATE VIEW statement. Also needed for views used with EXPLAIN. */
  SHOW_VIEW = 16,
  /** TRIGGER - Creating, removing, executing, or displaying triggers for a table. */
  TRIGGER = 17,
  /** UPDATE - Updating rows in the database. */
  UPDATE = 18,
  UNRECOGNIZED = -1,
}

export function permission_PrivilegeFromJSON(object: any): Permission_Privilege {
  switch (object) {
    case 0:
    case "PRIVILEGE_UNSPECIFIED":
      return Permission_Privilege.PRIVILEGE_UNSPECIFIED;
    case 1:
    case "ALL_PRIVILEGES":
      return Permission_Privilege.ALL_PRIVILEGES;
    case 2:
    case "ALTER":
      return Permission_Privilege.ALTER;
    case 3:
    case "ALTER_ROUTINE":
      return Permission_Privilege.ALTER_ROUTINE;
    case 4:
    case "CREATE":
      return Permission_Privilege.CREATE;
    case 5:
    case "CREATE_ROUTINE":
      return Permission_Privilege.CREATE_ROUTINE;
    case 6:
    case "CREATE_TEMPORARY_TABLES":
      return Permission_Privilege.CREATE_TEMPORARY_TABLES;
    case 7:
    case "CREATE_VIEW":
      return Permission_Privilege.CREATE_VIEW;
    case 8:
    case "DELETE":
      return Permission_Privilege.DELETE;
    case 9:
    case "DROP":
      return Permission_Privilege.DROP;
    case 10:
    case "EVENT":
      return Permission_Privilege.EVENT;
    case 11:
    case "EXECUTE":
      return Permission_Privilege.EXECUTE;
    case 12:
    case "INDEX":
      return Permission_Privilege.INDEX;
    case 13:
    case "INSERT":
      return Permission_Privilege.INSERT;
    case 14:
    case "LOCK_TABLES":
      return Permission_Privilege.LOCK_TABLES;
    case 15:
    case "SELECT":
      return Permission_Privilege.SELECT;
    case 16:
    case "SHOW_VIEW":
      return Permission_Privilege.SHOW_VIEW;
    case 17:
    case "TRIGGER":
      return Permission_Privilege.TRIGGER;
    case 18:
    case "UPDATE":
      return Permission_Privilege.UPDATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permission_Privilege.UNRECOGNIZED;
  }
}

export function permission_PrivilegeToJSON(object: Permission_Privilege): string {
  switch (object) {
    case Permission_Privilege.PRIVILEGE_UNSPECIFIED:
      return "PRIVILEGE_UNSPECIFIED";
    case Permission_Privilege.ALL_PRIVILEGES:
      return "ALL_PRIVILEGES";
    case Permission_Privilege.ALTER:
      return "ALTER";
    case Permission_Privilege.ALTER_ROUTINE:
      return "ALTER_ROUTINE";
    case Permission_Privilege.CREATE:
      return "CREATE";
    case Permission_Privilege.CREATE_ROUTINE:
      return "CREATE_ROUTINE";
    case Permission_Privilege.CREATE_TEMPORARY_TABLES:
      return "CREATE_TEMPORARY_TABLES";
    case Permission_Privilege.CREATE_VIEW:
      return "CREATE_VIEW";
    case Permission_Privilege.DELETE:
      return "DELETE";
    case Permission_Privilege.DROP:
      return "DROP";
    case Permission_Privilege.EVENT:
      return "EVENT";
    case Permission_Privilege.EXECUTE:
      return "EXECUTE";
    case Permission_Privilege.INDEX:
      return "INDEX";
    case Permission_Privilege.INSERT:
      return "INSERT";
    case Permission_Privilege.LOCK_TABLES:
      return "LOCK_TABLES";
    case Permission_Privilege.SELECT:
      return "SELECT";
    case Permission_Privilege.SHOW_VIEW:
      return "SHOW_VIEW";
    case Permission_Privilege.TRIGGER:
      return "TRIGGER";
    case Permission_Privilege.UPDATE:
      return "UPDATE";
    case Permission_Privilege.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface UserSpec {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UserSpec";
  /** Name of the MySQL user. */
  name: string;
  /** Password of the MySQL user. */
  password: string;
  /** Set of permissions to grant to the user. */
  permissions: Permission[];
}

function createBaseUser(): User {
  return { $type: "yandex.cloud.mdb.mysql.v1alpha.User", name: "", clusterId: "", permissions: [] };
}

export const User = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.User" as const,

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

function createBasePermission(): Permission {
  return { $type: "yandex.cloud.mdb.mysql.v1alpha.Permission", databaseName: "", roles: [] };
}

export const Permission = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Permission" as const,

  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseName !== "") {
      writer.uint32(10).string(message.databaseName);
    }
    writer.uint32(18).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
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

          message.databaseName = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.roles.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }

            continue;
          }

          break;
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
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
      roles: globalThis.Array.isArray(object?.roles)
        ? object.roles.map((e: any) => permission_PrivilegeFromJSON(e))
        : [],
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => permission_PrivilegeToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Permission>): Permission {
    return Permission.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Permission>): Permission {
    const message = createBasePermission();
    message.databaseName = object.databaseName ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Permission.$type, Permission);

function createBaseUserSpec(): UserSpec {
  return { $type: "yandex.cloud.mdb.mysql.v1alpha.UserSpec", name: "", password: "", permissions: [] };
}

export const UserSpec = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UserSpec" as const,

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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
