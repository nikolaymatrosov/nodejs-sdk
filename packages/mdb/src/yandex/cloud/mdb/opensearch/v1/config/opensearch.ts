/* eslint-disable */
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1.config";

export interface OpenSearchConfig2 {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2";
  /** the maximum number of allowed boolean clauses in a query */
  maxClauseCount?:
    | number
    | undefined;
  /** the percentage or absolute value (10%, 512mb) of heap space that is allocated to fielddata */
  fielddataCacheSize: string;
  reindexRemoteWhitelist: string;
}

export interface OpenSearchConfigSet2 {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2";
  effectiveConfig?: OpenSearchConfig2 | undefined;
  userConfig?: OpenSearchConfig2 | undefined;
  defaultConfig?: OpenSearchConfig2 | undefined;
}

function createBaseOpenSearchConfig2(): OpenSearchConfig2 {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2",
    maxClauseCount: undefined,
    fielddataCacheSize: "",
    reindexRemoteWhitelist: "",
  };
}

export const OpenSearchConfig2 = {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2" as const,

  encode(message: OpenSearchConfig2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxClauseCount !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxClauseCount! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.fielddataCacheSize !== "") {
      writer.uint32(34).string(message.fielddataCacheSize);
    }
    if (message.reindexRemoteWhitelist !== "") {
      writer.uint32(50).string(message.reindexRemoteWhitelist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchConfig2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSearchConfig2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxClauseCount = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fielddataCacheSize = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.reindexRemoteWhitelist = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenSearchConfig2 {
    return {
      $type: OpenSearchConfig2.$type,
      maxClauseCount: isSet(object.maxClauseCount) ? Number(object.maxClauseCount) : undefined,
      fielddataCacheSize: isSet(object.fielddataCacheSize) ? globalThis.String(object.fielddataCacheSize) : "",
      reindexRemoteWhitelist: isSet(object.reindexRemoteWhitelist)
        ? globalThis.String(object.reindexRemoteWhitelist)
        : "",
    };
  },

  toJSON(message: OpenSearchConfig2): unknown {
    const obj: any = {};
    if (message.maxClauseCount !== undefined) {
      obj.maxClauseCount = message.maxClauseCount;
    }
    if (message.fielddataCacheSize !== "") {
      obj.fielddataCacheSize = message.fielddataCacheSize;
    }
    if (message.reindexRemoteWhitelist !== "") {
      obj.reindexRemoteWhitelist = message.reindexRemoteWhitelist;
    }
    return obj;
  },

  create(base?: DeepPartial<OpenSearchConfig2>): OpenSearchConfig2 {
    return OpenSearchConfig2.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSearchConfig2>): OpenSearchConfig2 {
    const message = createBaseOpenSearchConfig2();
    message.maxClauseCount = object.maxClauseCount ?? undefined;
    message.fielddataCacheSize = object.fielddataCacheSize ?? "";
    message.reindexRemoteWhitelist = object.reindexRemoteWhitelist ?? "";
    return message;
  },
};

messageTypeRegistry.set(OpenSearchConfig2.$type, OpenSearchConfig2);

function createBaseOpenSearchConfigSet2(): OpenSearchConfigSet2 {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const OpenSearchConfigSet2 = {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2" as const,

  encode(message: OpenSearchConfigSet2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      OpenSearchConfig2.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      OpenSearchConfig2.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      OpenSearchConfig2.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchConfigSet2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSearchConfigSet2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = OpenSearchConfig2.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = OpenSearchConfig2.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = OpenSearchConfig2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenSearchConfigSet2 {
    return {
      $type: OpenSearchConfigSet2.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? OpenSearchConfig2.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? OpenSearchConfig2.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? OpenSearchConfig2.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: OpenSearchConfigSet2): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = OpenSearchConfig2.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = OpenSearchConfig2.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = OpenSearchConfig2.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenSearchConfigSet2>): OpenSearchConfigSet2 {
    return OpenSearchConfigSet2.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSearchConfigSet2>): OpenSearchConfigSet2 {
    const message = createBaseOpenSearchConfigSet2();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? OpenSearchConfig2.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? OpenSearchConfig2.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? OpenSearchConfig2.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(OpenSearchConfigSet2.$type, OpenSearchConfigSet2);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
