/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";

/** A MySQL database. For more information, see the [documentation](/docs/managed-mysql/concepts). */
export interface Database {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Database";
  /** Name of the database. */
  name: string;
  /** ID of the MySQL cluster that the database belongs to. */
  clusterId: string;
}

export interface DatabaseSpec {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DatabaseSpec";
  /** Name of the MySQL database. */
  name: string;
}

function createBaseDatabase(): Database {
  return { $type: "yandex.cloud.mdb.mysql.v1alpha.Database", name: "", clusterId: "" };
}

export const Database = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Database" as const,

  encode(message: Database, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
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
    return obj;
  },

  create(base?: DeepPartial<Database>): Database {
    return Database.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Database>): Database {
    const message = createBaseDatabase();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Database.$type, Database);

function createBaseDatabaseSpec(): DatabaseSpec {
  return { $type: "yandex.cloud.mdb.mysql.v1alpha.DatabaseSpec", name: "" };
}

export const DatabaseSpec = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DatabaseSpec" as const,

  encode(message: DatabaseSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatabaseSpec {
    return { $type: DatabaseSpec.$type, name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DatabaseSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DatabaseSpec>): DatabaseSpec {
    return DatabaseSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DatabaseSpec>): DatabaseSpec {
    const message = createBaseDatabaseSpec();
    message.name = object.name ?? "";
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
