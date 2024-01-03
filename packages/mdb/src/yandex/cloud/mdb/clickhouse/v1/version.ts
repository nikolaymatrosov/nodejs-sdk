/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export interface Version {
  $type: "yandex.cloud.mdb.clickhouse.v1.Version";
  /** ID of the version. */
  id: string;
  /** Name of the version. */
  name: string;
  /** Whether version is deprecated. */
  deprecated: boolean;
  /** List of versions that can be updated from current. */
  updatableTo: string[];
}

function createBaseVersion(): Version {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.Version", id: "", name: "", deprecated: false, updatableTo: [] };
}

export const Version = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Version" as const,

  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    for (const v of message.updatableTo) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updatableTo.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      $type: Version.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
      updatableTo: globalThis.Array.isArray(object?.updatableTo)
        ? object.updatableTo.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.updatableTo?.length) {
      obj.updatableTo = message.updatableTo;
    }
    return obj;
  },

  create(base?: DeepPartial<Version>): Version {
    return Version.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.deprecated = object.deprecated ?? false;
    message.updatableTo = object.updatableTo?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Version.$type, Version);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
