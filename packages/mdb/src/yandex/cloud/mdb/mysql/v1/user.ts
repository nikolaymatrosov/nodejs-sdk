/* eslint-disable */
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1";

export enum GlobalPermission {
  GLOBAL_PERMISSION_UNSPECIFIED = 0,
  /** REPLICATION_CLIENT - Enables use of the `SHOW MASTER STATUS`, `SHOW SLAVE STATUS`, and `SHOW BINARY LOGS` statements. */
  REPLICATION_CLIENT = 1,
  /**
   * REPLICATION_SLAVE - Enables the account to request updates that have been made to databases on the master server,
   * using the `SHOW SLAVE HOSTS`, `SHOW RELAYLOG EVENTS` and `SHOW BINLOG EVENTS` statements.
   */
  REPLICATION_SLAVE = 2,
  /**
   * PROCESS - Enables display of information about the the statements currently being performed by sessions (the set of threads executing within the server).
   *
   * The privilege enables use of `SHOW PROCESSLIST` or `mysqladmin` processlist to see threads belonging to other users.
   * You can always see your own threads. The `PROCESS` privilege also enables use of `SHOW ENGINE`.
   */
  PROCESS = 3,
  /** FLUSH_OPTIMIZER_COSTS - Enables use of the `FLUSH OPTIMIZER_COSTS` statement. */
  FLUSH_OPTIMIZER_COSTS = 4,
  /**
   * SHOW_ROUTINE - Enables a user to access definitions and properties of all stored routines (stored procedures and functions), even those for which the user is not named as the routine DEFINER.
   * This access includes:
   * The contents of the Information Schema `ROUTINES` table.
   * The `SHOW CREATE FUNCTION` and `SHOW CREATE PROCEDURE` statements.
   * The `SHOW FUNCTION CODE` and `SHOW PROCEDURE CODE` statements.
   * The SHOW `FUNCTION STATUS` and `SHOW PROCEDURE STATUS` statements.
   */
  SHOW_ROUTINE = 5,
  UNRECOGNIZED = -1,
}

export function globalPermissionFromJSON(object: any): GlobalPermission {
  switch (object) {
    case 0:
    case "GLOBAL_PERMISSION_UNSPECIFIED":
      return GlobalPermission.GLOBAL_PERMISSION_UNSPECIFIED;
    case 1:
    case "REPLICATION_CLIENT":
      return GlobalPermission.REPLICATION_CLIENT;
    case 2:
    case "REPLICATION_SLAVE":
      return GlobalPermission.REPLICATION_SLAVE;
    case 3:
    case "PROCESS":
      return GlobalPermission.PROCESS;
    case 4:
    case "FLUSH_OPTIMIZER_COSTS":
      return GlobalPermission.FLUSH_OPTIMIZER_COSTS;
    case 5:
    case "SHOW_ROUTINE":
      return GlobalPermission.SHOW_ROUTINE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GlobalPermission.UNRECOGNIZED;
  }
}

export function globalPermissionToJSON(object: GlobalPermission): string {
  switch (object) {
    case GlobalPermission.GLOBAL_PERMISSION_UNSPECIFIED:
      return "GLOBAL_PERMISSION_UNSPECIFIED";
    case GlobalPermission.REPLICATION_CLIENT:
      return "REPLICATION_CLIENT";
    case GlobalPermission.REPLICATION_SLAVE:
      return "REPLICATION_SLAVE";
    case GlobalPermission.PROCESS:
      return "PROCESS";
    case GlobalPermission.FLUSH_OPTIMIZER_COSTS:
      return "FLUSH_OPTIMIZER_COSTS";
    case GlobalPermission.SHOW_ROUTINE:
      return "SHOW_ROUTINE";
    case GlobalPermission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum AuthPlugin {
  AUTH_PLUGIN_UNSPECIFIED = 0,
  /** MYSQL_NATIVE_PASSWORD - Use [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
  MYSQL_NATIVE_PASSWORD = 1,
  /** CACHING_SHA2_PASSWORD - Use [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
  CACHING_SHA2_PASSWORD = 2,
  /** SHA256_PASSWORD - Use [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
  SHA256_PASSWORD = 3,
  UNRECOGNIZED = -1,
}

export function authPluginFromJSON(object: any): AuthPlugin {
  switch (object) {
    case 0:
    case "AUTH_PLUGIN_UNSPECIFIED":
      return AuthPlugin.AUTH_PLUGIN_UNSPECIFIED;
    case 1:
    case "MYSQL_NATIVE_PASSWORD":
      return AuthPlugin.MYSQL_NATIVE_PASSWORD;
    case 2:
    case "CACHING_SHA2_PASSWORD":
      return AuthPlugin.CACHING_SHA2_PASSWORD;
    case 3:
    case "SHA256_PASSWORD":
      return AuthPlugin.SHA256_PASSWORD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthPlugin.UNRECOGNIZED;
  }
}

export function authPluginToJSON(object: AuthPlugin): string {
  switch (object) {
    case AuthPlugin.AUTH_PLUGIN_UNSPECIFIED:
      return "AUTH_PLUGIN_UNSPECIFIED";
    case AuthPlugin.MYSQL_NATIVE_PASSWORD:
      return "MYSQL_NATIVE_PASSWORD";
    case AuthPlugin.CACHING_SHA2_PASSWORD:
      return "CACHING_SHA2_PASSWORD";
    case AuthPlugin.SHA256_PASSWORD:
      return "SHA256_PASSWORD";
    case AuthPlugin.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * An object that represents MySQL user.
 *
 * See [the documentation](/docs/managed-mysql/operations/cluster-users) for details.
 */
export interface User {
  $type: "yandex.cloud.mdb.mysql.v1.User";
  /** Name of the user. */
  name: string;
  /** ID of the cluster the user belongs to. */
  clusterId: string;
  /** Set of permissions granted to the user. */
  permissions: Permission[];
  /** Set of global permissions to grant to the user. */
  globalPermissions: GlobalPermission[];
  /** Set of user connection limits. */
  connectionLimits?:
    | ConnectionLimits
    | undefined;
  /** User authentication plugin. */
  authenticationPlugin: AuthPlugin;
}

export interface Permission {
  $type: "yandex.cloud.mdb.mysql.v1.Permission";
  /** Name of the database that the permission grants access to. */
  databaseName: string;
  /**
   * Roles granted to the user within the database.
   *
   * See [the documentation](/docs/managed-mysql/operations/grant) for details.
   */
  roles: Permission_Privilege[];
}

export enum Permission_Privilege {
  PRIVILEGE_UNSPECIFIED = 0,
  /** ALL_PRIVILEGES - All privileges that can be made available to the user. */
  ALL_PRIVILEGES = 1,
  /** ALTER - Altering tables. */
  ALTER = 2,
  /** ALTER_ROUTINE - Altering stored routines and functions. */
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
  /** LOCK_TABLES - Using `LOCK TABLES` statement for tables available with `SELECT` privilege. */
  LOCK_TABLES = 14,
  /**
   * SELECT - Selecting rows from tables.
   *
   * Some `SELECT` statements can be allowed without the `SELECT` privilege. All statements that read column values require the `SELECT` privilege.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_select) for details.
   */
  SELECT = 15,
  /** SHOW_VIEW - Using the `SHOW CREATE VIEW` statement. Also needed for views used with `EXPLAIN`. */
  SHOW_VIEW = 16,
  /** TRIGGER - Creating, removing, executing, or displaying triggers for a table. */
  TRIGGER = 17,
  /** UPDATE - Updating rows in the database. */
  UPDATE = 18,
  /** REFERENCES - Creation of a foreign key constraint for the parent table. */
  REFERENCES = 19,
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
    case 19:
    case "REFERENCES":
      return Permission_Privilege.REFERENCES;
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
    case Permission_Privilege.REFERENCES:
      return "REFERENCES";
    case Permission_Privilege.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ConnectionLimits {
  $type: "yandex.cloud.mdb.mysql.v1.ConnectionLimits";
  /** The maximum permitted number of user questions per hour. */
  maxQuestionsPerHour?:
    | number
    | undefined;
  /** The maximum permitted number of user updates per hour. */
  maxUpdatesPerHour?:
    | number
    | undefined;
  /** The maximum permitted number of simultaneous client connections per hour. */
  maxConnectionsPerHour?:
    | number
    | undefined;
  /** The maximum number of simultaneous connections permitted to any given MySQL user account. */
  maxUserConnections?: number | undefined;
}

export interface UserSpec {
  $type: "yandex.cloud.mdb.mysql.v1.UserSpec";
  /** Name of the user. */
  name: string;
  /** Password of the user. */
  password: string;
  /**
   * Set of permissions granted to the user to access specific databases.
   * One permission per database.
   *
   * When a permission for a database is set, the user will have access to the database.
   */
  permissions: Permission[];
  /** Set of global permissions to grant to the user. */
  globalPermissions: GlobalPermission[];
  /** Set of user connection limits. */
  connectionLimits?:
    | ConnectionLimits
    | undefined;
  /** User authentication plugin. */
  authenticationPlugin: AuthPlugin;
}

function createBaseUser(): User {
  return {
    $type: "yandex.cloud.mdb.mysql.v1.User",
    name: "",
    clusterId: "",
    permissions: [],
    globalPermissions: [],
    connectionLimits: undefined,
    authenticationPlugin: 0,
  };
}

export const User = {
  $type: "yandex.cloud.mdb.mysql.v1.User" as const,

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
    writer.uint32(34).fork();
    for (const v of message.globalPermissions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.connectionLimits !== undefined) {
      ConnectionLimits.encode(message.connectionLimits, writer.uint32(42).fork()).ldelim();
    }
    if (message.authenticationPlugin !== 0) {
      writer.uint32(48).int32(message.authenticationPlugin);
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
        case 4:
          if (tag === 32) {
            message.globalPermissions.push(reader.int32() as any);

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalPermissions.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.connectionLimits = ConnectionLimits.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.authenticationPlugin = reader.int32() as any;
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
      globalPermissions: globalThis.Array.isArray(object?.globalPermissions)
        ? object.globalPermissions.map((e: any) => globalPermissionFromJSON(e))
        : [],
      connectionLimits: isSet(object.connectionLimits) ? ConnectionLimits.fromJSON(object.connectionLimits) : undefined,
      authenticationPlugin: isSet(object.authenticationPlugin) ? authPluginFromJSON(object.authenticationPlugin) : 0,
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
    if (message.globalPermissions?.length) {
      obj.globalPermissions = message.globalPermissions.map((e) => globalPermissionToJSON(e));
    }
    if (message.connectionLimits !== undefined) {
      obj.connectionLimits = ConnectionLimits.toJSON(message.connectionLimits);
    }
    if (message.authenticationPlugin !== 0) {
      obj.authenticationPlugin = authPluginToJSON(message.authenticationPlugin);
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
    message.globalPermissions = object.globalPermissions?.map((e) => e) || [];
    message.connectionLimits = (object.connectionLimits !== undefined && object.connectionLimits !== null)
      ? ConnectionLimits.fromPartial(object.connectionLimits)
      : undefined;
    message.authenticationPlugin = object.authenticationPlugin ?? 0;
    return message;
  },
};

messageTypeRegistry.set(User.$type, User);

function createBasePermission(): Permission {
  return { $type: "yandex.cloud.mdb.mysql.v1.Permission", databaseName: "", roles: [] };
}

export const Permission = {
  $type: "yandex.cloud.mdb.mysql.v1.Permission" as const,

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

function createBaseConnectionLimits(): ConnectionLimits {
  return {
    $type: "yandex.cloud.mdb.mysql.v1.ConnectionLimits",
    maxQuestionsPerHour: undefined,
    maxUpdatesPerHour: undefined,
    maxConnectionsPerHour: undefined,
    maxUserConnections: undefined,
  };
}

export const ConnectionLimits = {
  $type: "yandex.cloud.mdb.mysql.v1.ConnectionLimits" as const,

  encode(message: ConnectionLimits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxQuestionsPerHour !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxQuestionsPerHour! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.maxUpdatesPerHour !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxUpdatesPerHour! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.maxConnectionsPerHour !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnectionsPerHour! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.maxUserConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxUserConnections! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionLimits {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxQuestionsPerHour = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxUpdatesPerHour = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxConnectionsPerHour = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxUserConnections = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionLimits {
    return {
      $type: ConnectionLimits.$type,
      maxQuestionsPerHour: isSet(object.maxQuestionsPerHour) ? Number(object.maxQuestionsPerHour) : undefined,
      maxUpdatesPerHour: isSet(object.maxUpdatesPerHour) ? Number(object.maxUpdatesPerHour) : undefined,
      maxConnectionsPerHour: isSet(object.maxConnectionsPerHour) ? Number(object.maxConnectionsPerHour) : undefined,
      maxUserConnections: isSet(object.maxUserConnections) ? Number(object.maxUserConnections) : undefined,
    };
  },

  toJSON(message: ConnectionLimits): unknown {
    const obj: any = {};
    if (message.maxQuestionsPerHour !== undefined) {
      obj.maxQuestionsPerHour = message.maxQuestionsPerHour;
    }
    if (message.maxUpdatesPerHour !== undefined) {
      obj.maxUpdatesPerHour = message.maxUpdatesPerHour;
    }
    if (message.maxConnectionsPerHour !== undefined) {
      obj.maxConnectionsPerHour = message.maxConnectionsPerHour;
    }
    if (message.maxUserConnections !== undefined) {
      obj.maxUserConnections = message.maxUserConnections;
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectionLimits>): ConnectionLimits {
    return ConnectionLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionLimits>): ConnectionLimits {
    const message = createBaseConnectionLimits();
    message.maxQuestionsPerHour = object.maxQuestionsPerHour ?? undefined;
    message.maxUpdatesPerHour = object.maxUpdatesPerHour ?? undefined;
    message.maxConnectionsPerHour = object.maxConnectionsPerHour ?? undefined;
    message.maxUserConnections = object.maxUserConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectionLimits.$type, ConnectionLimits);

function createBaseUserSpec(): UserSpec {
  return {
    $type: "yandex.cloud.mdb.mysql.v1.UserSpec",
    name: "",
    password: "",
    permissions: [],
    globalPermissions: [],
    connectionLimits: undefined,
    authenticationPlugin: 0,
  };
}

export const UserSpec = {
  $type: "yandex.cloud.mdb.mysql.v1.UserSpec" as const,

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
    writer.uint32(34).fork();
    for (const v of message.globalPermissions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.connectionLimits !== undefined) {
      ConnectionLimits.encode(message.connectionLimits, writer.uint32(42).fork()).ldelim();
    }
    if (message.authenticationPlugin !== 0) {
      writer.uint32(48).int32(message.authenticationPlugin);
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
        case 4:
          if (tag === 32) {
            message.globalPermissions.push(reader.int32() as any);

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalPermissions.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.connectionLimits = ConnectionLimits.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.authenticationPlugin = reader.int32() as any;
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
      globalPermissions: globalThis.Array.isArray(object?.globalPermissions)
        ? object.globalPermissions.map((e: any) => globalPermissionFromJSON(e))
        : [],
      connectionLimits: isSet(object.connectionLimits) ? ConnectionLimits.fromJSON(object.connectionLimits) : undefined,
      authenticationPlugin: isSet(object.authenticationPlugin) ? authPluginFromJSON(object.authenticationPlugin) : 0,
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
    if (message.globalPermissions?.length) {
      obj.globalPermissions = message.globalPermissions.map((e) => globalPermissionToJSON(e));
    }
    if (message.connectionLimits !== undefined) {
      obj.connectionLimits = ConnectionLimits.toJSON(message.connectionLimits);
    }
    if (message.authenticationPlugin !== 0) {
      obj.authenticationPlugin = authPluginToJSON(message.authenticationPlugin);
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
    message.globalPermissions = object.globalPermissions?.map((e) => e) || [];
    message.connectionLimits = (object.connectionLimits !== undefined && object.connectionLimits !== null)
      ? ConnectionLimits.fromPartial(object.connectionLimits)
      : undefined;
    message.authenticationPlugin = object.authenticationPlugin ?? 0;
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
