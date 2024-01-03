/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";

export interface Extension {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Extension";
  /** Name of the extension. */
  name: string;
  /** Unique ID of the extension. */
  id: string;
  /** ID of the Elasticsearch cluster the extension belongs to. */
  clusterId: string;
  /** Version of the extension. */
  version: number;
  /** The flag shows whether the extension is active. */
  active: boolean;
}

export interface ExtensionSpec {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ExtensionSpec";
  /** Name of the extension. */
  name: string;
  /** URI of the zip archive to create the new extension from. Currently only supports links that are stored in Object Storage. */
  uri: string;
  /** The flag shows whether to create the extension in disabled state. */
  disabled: boolean;
}

function createBaseExtension(): Extension {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Extension",
    name: "",
    id: "",
    clusterId: "",
    version: 0,
    active: false,
  };
}

export const Extension = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.Extension" as const,

  encode(message: Extension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.clusterId !== "") {
      writer.uint32(26).string(message.clusterId);
    }
    if (message.version !== 0) {
      writer.uint32(32).int64(message.version);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
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

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.version = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.active = reader.bool();
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
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
    };
  },

  toJSON(message: Extension): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    return obj;
  },

  create(base?: DeepPartial<Extension>): Extension {
    return Extension.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Extension>): Extension {
    const message = createBaseExtension();
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    message.clusterId = object.clusterId ?? "";
    message.version = object.version ?? 0;
    message.active = object.active ?? false;
    return message;
  },
};

messageTypeRegistry.set(Extension.$type, Extension);

function createBaseExtensionSpec(): ExtensionSpec {
  return { $type: "yandex.cloud.mdb.elasticsearch.v1.ExtensionSpec", name: "", uri: "", disabled: false };
}

export const ExtensionSpec = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ExtensionSpec" as const,

  encode(message: ExtensionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    if (message.disabled === true) {
      writer.uint32(24).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionSpec();
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

          message.uri = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtensionSpec {
    return {
      $type: ExtensionSpec.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
    };
  },

  toJSON(message: ExtensionSpec): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    return obj;
  },

  create(base?: DeepPartial<ExtensionSpec>): ExtensionSpec {
    return ExtensionSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExtensionSpec>): ExtensionSpec {
    const message = createBaseExtensionSpec();
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.disabled = object.disabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(ExtensionSpec.$type, ExtensionSpec);

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
