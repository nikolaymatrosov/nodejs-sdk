/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { DataSchema } from "./common";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export interface Parser {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Parser";
  jsonParser?: GenericParserCommon | undefined;
  auditTrailsV1Parser?: AuditTrailsV1Parser | undefined;
  cloudLoggingParser?: CloudLoggingParser | undefined;
  tskvParser?: GenericParserCommon | undefined;
}

export interface GenericParserCommon {
  $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon";
  dataSchema?:
    | DataSchema
    | undefined;
  /** Allow null keys, if no - null keys will be putted to unparsed data */
  nullKeysAllowed: boolean;
  /** Will add _rest column for all unknown fields */
  addRestColumn: boolean;
}

export interface AuditTrailsV1Parser {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser";
}

export interface CloudLoggingParser {
  $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser";
}

function createBaseParser(): Parser {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Parser",
    jsonParser: undefined,
    auditTrailsV1Parser: undefined,
    cloudLoggingParser: undefined,
    tskvParser: undefined,
  };
}

export const Parser = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Parser" as const,

  encode(message: Parser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jsonParser !== undefined) {
      GenericParserCommon.encode(message.jsonParser, writer.uint32(10).fork()).ldelim();
    }
    if (message.auditTrailsV1Parser !== undefined) {
      AuditTrailsV1Parser.encode(message.auditTrailsV1Parser, writer.uint32(18).fork()).ldelim();
    }
    if (message.cloudLoggingParser !== undefined) {
      CloudLoggingParser.encode(message.cloudLoggingParser, writer.uint32(34).fork()).ldelim();
    }
    if (message.tskvParser !== undefined) {
      GenericParserCommon.encode(message.tskvParser, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jsonParser = GenericParserCommon.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auditTrailsV1Parser = AuditTrailsV1Parser.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cloudLoggingParser = CloudLoggingParser.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tskvParser = GenericParserCommon.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Parser {
    return {
      $type: Parser.$type,
      jsonParser: isSet(object.jsonParser) ? GenericParserCommon.fromJSON(object.jsonParser) : undefined,
      auditTrailsV1Parser: isSet(object.auditTrailsV1Parser)
        ? AuditTrailsV1Parser.fromJSON(object.auditTrailsV1Parser)
        : undefined,
      cloudLoggingParser: isSet(object.cloudLoggingParser)
        ? CloudLoggingParser.fromJSON(object.cloudLoggingParser)
        : undefined,
      tskvParser: isSet(object.tskvParser) ? GenericParserCommon.fromJSON(object.tskvParser) : undefined,
    };
  },

  toJSON(message: Parser): unknown {
    const obj: any = {};
    if (message.jsonParser !== undefined) {
      obj.jsonParser = GenericParserCommon.toJSON(message.jsonParser);
    }
    if (message.auditTrailsV1Parser !== undefined) {
      obj.auditTrailsV1Parser = AuditTrailsV1Parser.toJSON(message.auditTrailsV1Parser);
    }
    if (message.cloudLoggingParser !== undefined) {
      obj.cloudLoggingParser = CloudLoggingParser.toJSON(message.cloudLoggingParser);
    }
    if (message.tskvParser !== undefined) {
      obj.tskvParser = GenericParserCommon.toJSON(message.tskvParser);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Parser>, I>>(base?: I): Parser {
    return Parser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Parser>, I>>(object: I): Parser {
    const message = createBaseParser();
    message.jsonParser = (object.jsonParser !== undefined && object.jsonParser !== null)
      ? GenericParserCommon.fromPartial(object.jsonParser)
      : undefined;
    message.auditTrailsV1Parser = (object.auditTrailsV1Parser !== undefined && object.auditTrailsV1Parser !== null)
      ? AuditTrailsV1Parser.fromPartial(object.auditTrailsV1Parser)
      : undefined;
    message.cloudLoggingParser = (object.cloudLoggingParser !== undefined && object.cloudLoggingParser !== null)
      ? CloudLoggingParser.fromPartial(object.cloudLoggingParser)
      : undefined;
    message.tskvParser = (object.tskvParser !== undefined && object.tskvParser !== null)
      ? GenericParserCommon.fromPartial(object.tskvParser)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Parser.$type, Parser);

function createBaseGenericParserCommon(): GenericParserCommon {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon",
    dataSchema: undefined,
    nullKeysAllowed: false,
    addRestColumn: false,
  };
}

export const GenericParserCommon = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon" as const,

  encode(message: GenericParserCommon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataSchema !== undefined) {
      DataSchema.encode(message.dataSchema, writer.uint32(10).fork()).ldelim();
    }
    if (message.nullKeysAllowed === true) {
      writer.uint32(16).bool(message.nullKeysAllowed);
    }
    if (message.addRestColumn === true) {
      writer.uint32(24).bool(message.addRestColumn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenericParserCommon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericParserCommon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataSchema = DataSchema.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nullKeysAllowed = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.addRestColumn = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenericParserCommon {
    return {
      $type: GenericParserCommon.$type,
      dataSchema: isSet(object.dataSchema) ? DataSchema.fromJSON(object.dataSchema) : undefined,
      nullKeysAllowed: isSet(object.nullKeysAllowed) ? globalThis.Boolean(object.nullKeysAllowed) : false,
      addRestColumn: isSet(object.addRestColumn) ? globalThis.Boolean(object.addRestColumn) : false,
    };
  },

  toJSON(message: GenericParserCommon): unknown {
    const obj: any = {};
    if (message.dataSchema !== undefined) {
      obj.dataSchema = DataSchema.toJSON(message.dataSchema);
    }
    if (message.nullKeysAllowed === true) {
      obj.nullKeysAllowed = message.nullKeysAllowed;
    }
    if (message.addRestColumn === true) {
      obj.addRestColumn = message.addRestColumn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenericParserCommon>, I>>(base?: I): GenericParserCommon {
    return GenericParserCommon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenericParserCommon>, I>>(object: I): GenericParserCommon {
    const message = createBaseGenericParserCommon();
    message.dataSchema = (object.dataSchema !== undefined && object.dataSchema !== null)
      ? DataSchema.fromPartial(object.dataSchema)
      : undefined;
    message.nullKeysAllowed = object.nullKeysAllowed ?? false;
    message.addRestColumn = object.addRestColumn ?? false;
    return message;
  },
};

messageTypeRegistry.set(GenericParserCommon.$type, GenericParserCommon);

function createBaseAuditTrailsV1Parser(): AuditTrailsV1Parser {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser" };
}

export const AuditTrailsV1Parser = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser" as const,

  encode(_: AuditTrailsV1Parser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuditTrailsV1Parser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditTrailsV1Parser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AuditTrailsV1Parser {
    return { $type: AuditTrailsV1Parser.$type };
  },

  toJSON(_: AuditTrailsV1Parser): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AuditTrailsV1Parser>, I>>(base?: I): AuditTrailsV1Parser {
    return AuditTrailsV1Parser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuditTrailsV1Parser>, I>>(_: I): AuditTrailsV1Parser {
    const message = createBaseAuditTrailsV1Parser();
    return message;
  },
};

messageTypeRegistry.set(AuditTrailsV1Parser.$type, AuditTrailsV1Parser);

function createBaseCloudLoggingParser(): CloudLoggingParser {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser" };
}

export const CloudLoggingParser = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser" as const,

  encode(_: CloudLoggingParser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloudLoggingParser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloudLoggingParser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CloudLoggingParser {
    return { $type: CloudLoggingParser.$type };
  },

  toJSON(_: CloudLoggingParser): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CloudLoggingParser>, I>>(base?: I): CloudLoggingParser {
    return CloudLoggingParser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CloudLoggingParser>, I>>(_: I): CloudLoggingParser {
    const message = createBaseCloudLoggingParser();
    return message;
  },
};

messageTypeRegistry.set(CloudLoggingParser.$type, CloudLoggingParser);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
