/* eslint-disable */
import { BoolValue } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

/**
 * A PostgreSQL Database resource. For more information, see
 * the [Developer's Guide](/docs/managed-postgresql/concepts).
 */
export interface Database {
  $type: "yandex.cloud.mdb.postgresql.v1.Database";
  /** Name of the database. */
  name: string;
  /** ID of the PostgreSQL cluster that the database belongs to. */
  clusterId: string;
  /** Name of the user assigned as the owner of the database. */
  owner: string;
  /**
   * POSIX locale for string sorting order.
   * Can only be set at creation time.
   */
  lcCollate: string;
  /**
   * POSIX locale for character classification.
   * Can only be set at creation time.
   */
  lcCtype: string;
  /** PostgreSQL extensions enabled for the database. */
  extensions: Extension[];
  /** Name of the database template. */
  templateDb: string;
  /**
   * Deletion Protection inhibits deletion of the database
   *
   * Default value: `unspecified` (inherits cluster's deletion_protection)
   */
  deletionProtection?: boolean | undefined;
}

export interface Extension {
  $type: "yandex.cloud.mdb.postgresql.v1.Extension";
  /**
   * Name of the extension, e.g. `pg_trgm` or `pg_btree`.
   * Extensions supported by Managed Service for PostgreSQL are [listed in the Developer's Guide](/docs/managed-postgresql/operations/extensions/cluster-extensions).
   */
  name: string;
  /** Version of the extension. */
  version: string;
}

export interface DatabaseSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec";
  /** Name of the PostgreSQL database. 1-63 characters long. */
  name: string;
  /**
   * Name of the user to be assigned as the owner of the database.
   * To get the list of available PostgreSQL users, make a [UserService.List] request.
   */
  owner: string;
  /**
   * POSIX locale for string sorting order.
   * Can only be set at creation time.
   */
  lcCollate: string;
  /**
   * POSIX locale for character classification.
   * Can only be set at creation time.
   */
  lcCtype: string;
  /** PostgreSQL extensions to be enabled for the database. */
  extensions: Extension[];
  /** Name of the PostgreSQL database template. */
  templateDb: string;
  /**
   * Deletion Protection inhibits deletion of the database
   *
   * Default value: `unspecified` (inherits cluster's deletion_protection)
   */
  deletionProtection?: boolean | undefined;
}

function createBaseDatabase(): Database {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.Database",
    name: "",
    clusterId: "",
    owner: "",
    lcCollate: "",
    lcCtype: "",
    extensions: [],
    templateDb: "",
    deletionProtection: undefined,
  };
}

export const Database = {
  $type: "yandex.cloud.mdb.postgresql.v1.Database" as const,

  encode(message: Database, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.lcCollate !== "") {
      writer.uint32(34).string(message.lcCollate);
    }
    if (message.lcCtype !== "") {
      writer.uint32(42).string(message.lcCtype);
    }
    for (const v of message.extensions) {
      Extension.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.templateDb !== "") {
      writer.uint32(58).string(message.templateDb);
    }
    if (message.deletionProtection !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.deletionProtection! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Database {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabase();
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

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lcCollate = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lcCtype = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.extensions.push(Extension.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.templateDb = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.deletionProtection = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Database {
    return {
      $type: Database.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      lcCollate: isSet(object.lcCollate) ? globalThis.String(object.lcCollate) : "",
      lcCtype: isSet(object.lcCtype) ? globalThis.String(object.lcCtype) : "",
      extensions: globalThis.Array.isArray(object?.extensions)
        ? object.extensions.map((e: any) => Extension.fromJSON(e))
        : [],
      templateDb: isSet(object.templateDb) ? globalThis.String(object.templateDb) : "",
      deletionProtection: isSet(object.deletionProtection) ? Boolean(object.deletionProtection) : undefined,
    };
  },

  toJSON(message: Database): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.lcCollate !== "") {
      obj.lcCollate = message.lcCollate;
    }
    if (message.lcCtype !== "") {
      obj.lcCtype = message.lcCtype;
    }
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => Extension.toJSON(e));
    }
    if (message.templateDb !== "") {
      obj.templateDb = message.templateDb;
    }
    if (message.deletionProtection !== undefined) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create(base?: DeepPartial<Database>): Database {
    return Database.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Database>): Database {
    const message = createBaseDatabase();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.owner = object.owner ?? "";
    message.lcCollate = object.lcCollate ?? "";
    message.lcCtype = object.lcCtype ?? "";
    message.extensions = object.extensions?.map((e) => Extension.fromPartial(e)) || [];
    message.templateDb = object.templateDb ?? "";
    message.deletionProtection = object.deletionProtection ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Database.$type, Database);

function createBaseExtension(): Extension {
  return { $type: "yandex.cloud.mdb.postgresql.v1.Extension", name: "", version: "" };
}

export const Extension = {
  $type: "yandex.cloud.mdb.postgresql.v1.Extension" as const,

  encode(message: Extension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Extension {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtension();
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

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Extension {
    return {
      $type: Extension.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
    };
  },

  toJSON(message: Extension): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },

  create(base?: DeepPartial<Extension>): Extension {
    return Extension.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Extension>): Extension {
    const message = createBaseExtension();
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    return message;
  },
};

messageTypeRegistry.set(Extension.$type, Extension);

function createBaseDatabaseSpec(): DatabaseSpec {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec",
    name: "",
    owner: "",
    lcCollate: "",
    lcCtype: "",
    extensions: [],
    templateDb: "",
    deletionProtection: undefined,
  };
}

export const DatabaseSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec" as const,

  encode(message: DatabaseSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.lcCollate !== "") {
      writer.uint32(26).string(message.lcCollate);
    }
    if (message.lcCtype !== "") {
      writer.uint32(34).string(message.lcCtype);
    }
    for (const v of message.extensions) {
      Extension.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.templateDb !== "") {
      writer.uint32(50).string(message.templateDb);
    }
    if (message.deletionProtection !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.deletionProtection! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatabaseSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabaseSpec();
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

          message.owner = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lcCollate = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lcCtype = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.extensions.push(Extension.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.templateDb = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deletionProtection = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatabaseSpec {
    return {
      $type: DatabaseSpec.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      lcCollate: isSet(object.lcCollate) ? globalThis.String(object.lcCollate) : "",
      lcCtype: isSet(object.lcCtype) ? globalThis.String(object.lcCtype) : "",
      extensions: globalThis.Array.isArray(object?.extensions)
        ? object.extensions.map((e: any) => Extension.fromJSON(e))
        : [],
      templateDb: isSet(object.templateDb) ? globalThis.String(object.templateDb) : "",
      deletionProtection: isSet(object.deletionProtection) ? Boolean(object.deletionProtection) : undefined,
    };
  },

  toJSON(message: DatabaseSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.lcCollate !== "") {
      obj.lcCollate = message.lcCollate;
    }
    if (message.lcCtype !== "") {
      obj.lcCtype = message.lcCtype;
    }
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => Extension.toJSON(e));
    }
    if (message.templateDb !== "") {
      obj.templateDb = message.templateDb;
    }
    if (message.deletionProtection !== undefined) {
      obj.deletionProtection = message.deletionProtection;
    }
    return obj;
  },

  create(base?: DeepPartial<DatabaseSpec>): DatabaseSpec {
    return DatabaseSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DatabaseSpec>): DatabaseSpec {
    const message = createBaseDatabaseSpec();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.lcCollate = object.lcCollate ?? "";
    message.lcCtype = object.lcCtype ?? "";
    message.extensions = object.extensions?.map((e) => Extension.fromPartial(e)) || [];
    message.templateDb = object.templateDb ?? "";
    message.deletionProtection = object.deletionProtection ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DatabaseSpec.$type, DatabaseSpec);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
