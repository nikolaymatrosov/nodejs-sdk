/* eslint-disable */
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1.config";

/**
 * Elasticsearch 7.x supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html).
 *
 * Any options that are not listed here are not supported.
 */
export interface ElasticsearchConfig7 {
  $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7";
  /**
   * The maximum number of clauses a boolean query can contain.
   *
   * The limit is in place to prevent searches from becoming too large and taking up too much CPU and memory.
   * It affects not only Elasticsearch's `bool` query, but many other queries that are implicitly converted to `bool` query by Elastcsearch.
   *
   * Default value: `1024`.
   *
   * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-settings.html).
   */
  maxClauseCount?:
    | number
    | undefined;
  /**
   * The maximum percentage or absolute value (10%, 512mb) of heap space that is allocated to field data cache.
   *
   * All the field values that are placed in this cache, get loaded to memory in order to provide fast document based access to those values.
   * Building the field data cache for a field can be an expensive operations, so its recommended to have enough memory for this cache, and to keep it loaded.
   *
   * Default value: unbounded.
   *
   * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-fielddata.html).
   */
  fielddataCacheSize: string;
  /**
   * Remote hosts for reindex have to be explicitly allowed in elasticsearch.yml using the reindex.remote.whitelist property.
   * It can be set to a comma delimited list of allowed remote host and port combinations.
   * Scheme is ignored, only the host and port are used.
   */
  reindexRemoteWhitelist: string;
  /**
   * List of paths to PEM encoded certificate files that should be trusted.
   *
   * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html#reindex-ssl)
   */
  reindexSslCaPath: string;
}

/** Elasticsearch 7.x data node configuration. */
export interface ElasticsearchConfigSet7 {
  $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7";
  /** Effective settings for an Elasticsearch cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?:
    | ElasticsearchConfig7
    | undefined;
  /** User-defined settings for an Elasticsearch cluster. */
  userConfig?:
    | ElasticsearchConfig7
    | undefined;
  /** Default settings for an Elasticsearch cluster. */
  defaultConfig?: ElasticsearchConfig7 | undefined;
}

function createBaseElasticsearchConfig7(): ElasticsearchConfig7 {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7",
    maxClauseCount: undefined,
    fielddataCacheSize: "",
    reindexRemoteWhitelist: "",
    reindexSslCaPath: "",
  };
}

export const ElasticsearchConfig7 = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7" as const,

  encode(message: ElasticsearchConfig7, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.reindexSslCaPath !== "") {
      writer.uint32(58).string(message.reindexSslCaPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ElasticsearchConfig7 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseElasticsearchConfig7();
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
        case 7:
          if (tag !== 58) {
            break;
          }

          message.reindexSslCaPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ElasticsearchConfig7 {
    return {
      $type: ElasticsearchConfig7.$type,
      maxClauseCount: isSet(object.maxClauseCount) ? Number(object.maxClauseCount) : undefined,
      fielddataCacheSize: isSet(object.fielddataCacheSize) ? globalThis.String(object.fielddataCacheSize) : "",
      reindexRemoteWhitelist: isSet(object.reindexRemoteWhitelist)
        ? globalThis.String(object.reindexRemoteWhitelist)
        : "",
      reindexSslCaPath: isSet(object.reindexSslCaPath) ? globalThis.String(object.reindexSslCaPath) : "",
    };
  },

  toJSON(message: ElasticsearchConfig7): unknown {
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
    if (message.reindexSslCaPath !== "") {
      obj.reindexSslCaPath = message.reindexSslCaPath;
    }
    return obj;
  },

  create(base?: DeepPartial<ElasticsearchConfig7>): ElasticsearchConfig7 {
    return ElasticsearchConfig7.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ElasticsearchConfig7>): ElasticsearchConfig7 {
    const message = createBaseElasticsearchConfig7();
    message.maxClauseCount = object.maxClauseCount ?? undefined;
    message.fielddataCacheSize = object.fielddataCacheSize ?? "";
    message.reindexRemoteWhitelist = object.reindexRemoteWhitelist ?? "";
    message.reindexSslCaPath = object.reindexSslCaPath ?? "";
    return message;
  },
};

messageTypeRegistry.set(ElasticsearchConfig7.$type, ElasticsearchConfig7);

function createBaseElasticsearchConfigSet7(): ElasticsearchConfigSet7 {
  return {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const ElasticsearchConfigSet7 = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7" as const,

  encode(message: ElasticsearchConfigSet7, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      ElasticsearchConfig7.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      ElasticsearchConfig7.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      ElasticsearchConfig7.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ElasticsearchConfigSet7 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseElasticsearchConfigSet7();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = ElasticsearchConfig7.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = ElasticsearchConfig7.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = ElasticsearchConfig7.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ElasticsearchConfigSet7 {
    return {
      $type: ElasticsearchConfigSet7.$type,
      effectiveConfig: isSet(object.effectiveConfig)
        ? ElasticsearchConfig7.fromJSON(object.effectiveConfig)
        : undefined,
      userConfig: isSet(object.userConfig) ? ElasticsearchConfig7.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? ElasticsearchConfig7.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: ElasticsearchConfigSet7): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = ElasticsearchConfig7.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = ElasticsearchConfig7.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = ElasticsearchConfig7.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<ElasticsearchConfigSet7>): ElasticsearchConfigSet7 {
    return ElasticsearchConfigSet7.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ElasticsearchConfigSet7>): ElasticsearchConfigSet7 {
    const message = createBaseElasticsearchConfigSet7();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? ElasticsearchConfig7.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? ElasticsearchConfig7.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? ElasticsearchConfig7.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ElasticsearchConfigSet7.$type, ElasticsearchConfigSet7);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
