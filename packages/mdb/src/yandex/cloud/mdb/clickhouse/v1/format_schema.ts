/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export enum FormatSchemaType {
  FORMAT_SCHEMA_TYPE_UNSPECIFIED = 0,
  FORMAT_SCHEMA_TYPE_PROTOBUF = 1,
  FORMAT_SCHEMA_TYPE_CAPNPROTO = 2,
  UNRECOGNIZED = -1,
}

export function formatSchemaTypeFromJSON(object: any): FormatSchemaType {
  switch (object) {
    case 0:
    case "FORMAT_SCHEMA_TYPE_UNSPECIFIED":
      return FormatSchemaType.FORMAT_SCHEMA_TYPE_UNSPECIFIED;
    case 1:
    case "FORMAT_SCHEMA_TYPE_PROTOBUF":
      return FormatSchemaType.FORMAT_SCHEMA_TYPE_PROTOBUF;
    case 2:
    case "FORMAT_SCHEMA_TYPE_CAPNPROTO":
      return FormatSchemaType.FORMAT_SCHEMA_TYPE_CAPNPROTO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FormatSchemaType.UNRECOGNIZED;
  }
}

export function formatSchemaTypeToJSON(object: FormatSchemaType): string {
  switch (object) {
    case FormatSchemaType.FORMAT_SCHEMA_TYPE_UNSPECIFIED:
      return "FORMAT_SCHEMA_TYPE_UNSPECIFIED";
    case FormatSchemaType.FORMAT_SCHEMA_TYPE_PROTOBUF:
      return "FORMAT_SCHEMA_TYPE_PROTOBUF";
    case FormatSchemaType.FORMAT_SCHEMA_TYPE_CAPNPROTO:
      return "FORMAT_SCHEMA_TYPE_CAPNPROTO";
    case FormatSchemaType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FormatSchema {
  $type: "yandex.cloud.mdb.clickhouse.v1.FormatSchema";
  name: string;
  clusterId: string;
  type: FormatSchemaType;
  uri: string;
}

function createBaseFormatSchema(): FormatSchema {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.FormatSchema", name: "", clusterId: "", type: 0, uri: "" };
}

export const FormatSchema = {
  $type: "yandex.cloud.mdb.clickhouse.v1.FormatSchema" as const,

  encode(message: FormatSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FormatSchema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFormatSchema();
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
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FormatSchema {
    return {
      $type: FormatSchema.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      type: isSet(object.type) ? formatSchemaTypeFromJSON(object.type) : 0,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: FormatSchema): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.type !== 0) {
      obj.type = formatSchemaTypeToJSON(message.type);
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<FormatSchema>): FormatSchema {
    return FormatSchema.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FormatSchema>): FormatSchema {
    const message = createBaseFormatSchema();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.type = object.type ?? 0;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(FormatSchema.$type, FormatSchema);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
