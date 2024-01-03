/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { CleanupPolicy, cleanupPolicyFromJSON, cleanupPolicyToJSON, Secret, TLSMode } from "./common";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export interface OnPremiseMongo {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo";
  hosts: string[];
  port: number;
  tlsMode?: TLSMode | undefined;
  replicaSet: string;
}

export interface MongoConnectionOptions {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions";
  mdbClusterId?: string | undefined;
  onPremise?:
    | OnPremiseMongo
    | undefined;
  /** User name */
  user: string;
  /** Password for user */
  password?:
    | Secret
    | undefined;
  /** Database name associated with the credentials */
  authSource: string;
}

export interface MongoConnection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection";
  connectionOptions?: MongoConnectionOptions | undefined;
}

export interface MongoCollection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection";
  databaseName: string;
  collectionName: string;
}

export interface MongoSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource";
  connection?: MongoConnection | undefined;
  subnetId: string;
  /** Security groups */
  securityGroups: string[];
  /**
   * List of collections for replication. Empty list implies replication of all
   * tables on the deployment. Allowed to use * as collection name.
   */
  collections: MongoCollection[];
  /**
   * List of forbidden collections for replication. Allowed to use * as collection
   * name for forbid all collections of concrete schema.
   */
  excludedCollections: MongoCollection[];
  /** Read mode for mongo client */
  secondaryPreferredMode: boolean;
}

export interface MongoTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget";
  connection?: MongoConnection | undefined;
  subnetId: string;
  /** Security groups */
  securityGroups: string[];
  /** Database name */
  database: string;
  cleanupPolicy: CleanupPolicy;
}

function createBaseOnPremiseMongo(): OnPremiseMongo {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo",
    hosts: [],
    port: 0,
    tlsMode: undefined,
    replicaSet: "",
  };
}

export const OnPremiseMongo = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo" as const,

  encode(message: OnPremiseMongo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hosts) {
      writer.uint32(10).string(v!);
    }
    if (message.port !== 0) {
      writer.uint32(16).int64(message.port);
    }
    if (message.tlsMode !== undefined) {
      TLSMode.encode(message.tlsMode, writer.uint32(50).fork()).ldelim();
    }
    if (message.replicaSet !== "") {
      writer.uint32(42).string(message.replicaSet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnPremiseMongo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnPremiseMongo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hosts.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tlsMode = TLSMode.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.replicaSet = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OnPremiseMongo {
    return {
      $type: OnPremiseMongo.$type,
      hosts: globalThis.Array.isArray(object?.hosts) ? object.hosts.map((e: any) => globalThis.String(e)) : [],
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      tlsMode: isSet(object.tlsMode) ? TLSMode.fromJSON(object.tlsMode) : undefined,
      replicaSet: isSet(object.replicaSet) ? globalThis.String(object.replicaSet) : "",
    };
  },

  toJSON(message: OnPremiseMongo): unknown {
    const obj: any = {};
    if (message.hosts?.length) {
      obj.hosts = message.hosts;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.tlsMode !== undefined) {
      obj.tlsMode = TLSMode.toJSON(message.tlsMode);
    }
    if (message.replicaSet !== "") {
      obj.replicaSet = message.replicaSet;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OnPremiseMongo>, I>>(base?: I): OnPremiseMongo {
    return OnPremiseMongo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OnPremiseMongo>, I>>(object: I): OnPremiseMongo {
    const message = createBaseOnPremiseMongo();
    message.hosts = object.hosts?.map((e) => e) || [];
    message.port = object.port ?? 0;
    message.tlsMode = (object.tlsMode !== undefined && object.tlsMode !== null)
      ? TLSMode.fromPartial(object.tlsMode)
      : undefined;
    message.replicaSet = object.replicaSet ?? "";
    return message;
  },
};

messageTypeRegistry.set(OnPremiseMongo.$type, OnPremiseMongo);

function createBaseMongoConnectionOptions(): MongoConnectionOptions {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions",
    mdbClusterId: undefined,
    onPremise: undefined,
    user: "",
    password: undefined,
    authSource: "",
  };
}

export const MongoConnectionOptions = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions" as const,

  encode(message: MongoConnectionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mdbClusterId !== undefined) {
      writer.uint32(10).string(message.mdbClusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremiseMongo.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
    }
    if (message.authSource !== "") {
      writer.uint32(42).string(message.authSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoConnectionOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoConnectionOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mdbClusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.onPremise = OnPremiseMongo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.user = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = Secret.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.authSource = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoConnectionOptions {
    return {
      $type: MongoConnectionOptions.$type,
      mdbClusterId: isSet(object.mdbClusterId) ? globalThis.String(object.mdbClusterId) : undefined,
      onPremise: isSet(object.onPremise) ? OnPremiseMongo.fromJSON(object.onPremise) : undefined,
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? Secret.fromJSON(object.password) : undefined,
      authSource: isSet(object.authSource) ? globalThis.String(object.authSource) : "",
    };
  },

  toJSON(message: MongoConnectionOptions): unknown {
    const obj: any = {};
    if (message.mdbClusterId !== undefined) {
      obj.mdbClusterId = message.mdbClusterId;
    }
    if (message.onPremise !== undefined) {
      obj.onPremise = OnPremiseMongo.toJSON(message.onPremise);
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== undefined) {
      obj.password = Secret.toJSON(message.password);
    }
    if (message.authSource !== "") {
      obj.authSource = message.authSource;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MongoConnectionOptions>, I>>(base?: I): MongoConnectionOptions {
    return MongoConnectionOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MongoConnectionOptions>, I>>(object: I): MongoConnectionOptions {
    const message = createBaseMongoConnectionOptions();
    message.mdbClusterId = object.mdbClusterId ?? undefined;
    message.onPremise = (object.onPremise !== undefined && object.onPremise !== null)
      ? OnPremiseMongo.fromPartial(object.onPremise)
      : undefined;
    message.user = object.user ?? "";
    message.password = (object.password !== undefined && object.password !== null)
      ? Secret.fromPartial(object.password)
      : undefined;
    message.authSource = object.authSource ?? "";
    return message;
  },
};

messageTypeRegistry.set(MongoConnectionOptions.$type, MongoConnectionOptions);

function createBaseMongoConnection(): MongoConnection {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection", connectionOptions: undefined };
}

export const MongoConnection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection" as const,

  encode(message: MongoConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionOptions !== undefined) {
      MongoConnectionOptions.encode(message.connectionOptions, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.connectionOptions = MongoConnectionOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoConnection {
    return {
      $type: MongoConnection.$type,
      connectionOptions: isSet(object.connectionOptions)
        ? MongoConnectionOptions.fromJSON(object.connectionOptions)
        : undefined,
    };
  },

  toJSON(message: MongoConnection): unknown {
    const obj: any = {};
    if (message.connectionOptions !== undefined) {
      obj.connectionOptions = MongoConnectionOptions.toJSON(message.connectionOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MongoConnection>, I>>(base?: I): MongoConnection {
    return MongoConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MongoConnection>, I>>(object: I): MongoConnection {
    const message = createBaseMongoConnection();
    message.connectionOptions = (object.connectionOptions !== undefined && object.connectionOptions !== null)
      ? MongoConnectionOptions.fromPartial(object.connectionOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoConnection.$type, MongoConnection);

function createBaseMongoCollection(): MongoCollection {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection", databaseName: "", collectionName: "" };
}

export const MongoCollection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection" as const,

  encode(message: MongoCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseName !== "") {
      writer.uint32(10).string(message.databaseName);
    }
    if (message.collectionName !== "") {
      writer.uint32(18).string(message.collectionName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCollection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoCollection();
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
          if (tag !== 18) {
            break;
          }

          message.collectionName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoCollection {
    return {
      $type: MongoCollection.$type,
      databaseName: isSet(object.databaseName) ? globalThis.String(object.databaseName) : "",
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
    };
  },

  toJSON(message: MongoCollection): unknown {
    const obj: any = {};
    if (message.databaseName !== "") {
      obj.databaseName = message.databaseName;
    }
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MongoCollection>, I>>(base?: I): MongoCollection {
    return MongoCollection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MongoCollection>, I>>(object: I): MongoCollection {
    const message = createBaseMongoCollection();
    message.databaseName = object.databaseName ?? "";
    message.collectionName = object.collectionName ?? "";
    return message;
  },
};

messageTypeRegistry.set(MongoCollection.$type, MongoCollection);

function createBaseMongoSource(): MongoSource {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource",
    connection: undefined,
    subnetId: "",
    securityGroups: [],
    collections: [],
    excludedCollections: [],
    secondaryPreferredMode: false,
  };
}

export const MongoSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource" as const,

  encode(message: MongoSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      MongoConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.collections) {
      MongoCollection.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.excludedCollections) {
      MongoCollection.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.secondaryPreferredMode === true) {
      writer.uint32(64).bool(message.secondaryPreferredMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = MongoConnection.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.collections.push(MongoCollection.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.excludedCollections.push(MongoCollection.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.secondaryPreferredMode = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoSource {
    return {
      $type: MongoSource.$type,
      connection: isSet(object.connection) ? MongoConnection.fromJSON(object.connection) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      collections: globalThis.Array.isArray(object?.collections)
        ? object.collections.map((e: any) => MongoCollection.fromJSON(e))
        : [],
      excludedCollections: globalThis.Array.isArray(object?.excludedCollections)
        ? object.excludedCollections.map((e: any) => MongoCollection.fromJSON(e))
        : [],
      secondaryPreferredMode: isSet(object.secondaryPreferredMode)
        ? globalThis.Boolean(object.secondaryPreferredMode)
        : false,
    };
  },

  toJSON(message: MongoSource): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = MongoConnection.toJSON(message.connection);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
    }
    if (message.collections?.length) {
      obj.collections = message.collections.map((e) => MongoCollection.toJSON(e));
    }
    if (message.excludedCollections?.length) {
      obj.excludedCollections = message.excludedCollections.map((e) => MongoCollection.toJSON(e));
    }
    if (message.secondaryPreferredMode === true) {
      obj.secondaryPreferredMode = message.secondaryPreferredMode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MongoSource>, I>>(base?: I): MongoSource {
    return MongoSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MongoSource>, I>>(object: I): MongoSource {
    const message = createBaseMongoSource();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? MongoConnection.fromPartial(object.connection)
      : undefined;
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.collections = object.collections?.map((e) => MongoCollection.fromPartial(e)) || [];
    message.excludedCollections = object.excludedCollections?.map((e) => MongoCollection.fromPartial(e)) || [];
    message.secondaryPreferredMode = object.secondaryPreferredMode ?? false;
    return message;
  },
};

messageTypeRegistry.set(MongoSource.$type, MongoSource);

function createBaseMongoTarget(): MongoTarget {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget",
    connection: undefined,
    subnetId: "",
    securityGroups: [],
    database: "",
    cleanupPolicy: 0,
  };
}

export const MongoTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget" as const,

  encode(message: MongoTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      MongoConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(58).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(66).string(v!);
    }
    if (message.database !== "") {
      writer.uint32(18).string(message.database);
    }
    if (message.cleanupPolicy !== 0) {
      writer.uint32(48).int32(message.cleanupPolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMongoTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = MongoConnection.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.database = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.cleanupPolicy = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MongoTarget {
    return {
      $type: MongoTarget.$type,
      connection: isSet(object.connection) ? MongoConnection.fromJSON(object.connection) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      cleanupPolicy: isSet(object.cleanupPolicy) ? cleanupPolicyFromJSON(object.cleanupPolicy) : 0,
    };
  },

  toJSON(message: MongoTarget): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = MongoConnection.toJSON(message.connection);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
    }
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.cleanupPolicy !== 0) {
      obj.cleanupPolicy = cleanupPolicyToJSON(message.cleanupPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MongoTarget>, I>>(base?: I): MongoTarget {
    return MongoTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MongoTarget>, I>>(object: I): MongoTarget {
    const message = createBaseMongoTarget();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? MongoConnection.fromPartial(object.connection)
      : undefined;
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MongoTarget.$type, MongoTarget);

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
