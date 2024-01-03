/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { ClickhouseSource, ClickhouseTarget } from "./endpoint/clickhouse";
import { KafkaSource, KafkaTarget } from "./endpoint/kafka";
import { MongoSource, MongoTarget } from "./endpoint/mongo";
import { MysqlSource, MysqlTarget } from "./endpoint/mysql";
import { PostgresSource, PostgresTarget } from "./endpoint/postgres";
import { YdbSource, YdbTarget } from "./endpoint/ydb";

export const protobufPackage = "yandex.cloud.datatransfer.v1";

export interface Endpoint {
  $type: "yandex.cloud.datatransfer.v1.Endpoint";
  id: string;
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  settings?: EndpointSettings | undefined;
}

export interface Endpoint_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry";
  key: string;
  value: string;
}

export interface EndpointSettings {
  $type: "yandex.cloud.datatransfer.v1.EndpointSettings";
  mysqlSource?: MysqlSource | undefined;
  postgresSource?: PostgresSource | undefined;
  ydbSource?: YdbSource | undefined;
  kafkaSource?: KafkaSource | undefined;
  mongoSource?: MongoSource | undefined;
  clickhouseSource?: ClickhouseSource | undefined;
  mysqlTarget?: MysqlTarget | undefined;
  postgresTarget?: PostgresTarget | undefined;
  clickhouseTarget?: ClickhouseTarget | undefined;
  ydbTarget?: YdbTarget | undefined;
  kafkaTarget?: KafkaTarget | undefined;
  mongoTarget?: MongoTarget | undefined;
}

function createBaseEndpoint(): Endpoint {
  return {
    $type: "yandex.cloud.datatransfer.v1.Endpoint",
    id: "",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    settings: undefined,
  };
}

export const Endpoint = {
  $type: "yandex.cloud.datatransfer.v1.Endpoint" as const,

  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Endpoint_LabelsEntry.encode({
        $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.settings !== undefined) {
      EndpointSettings.encode(message.settings, writer.uint32(418).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
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

          message.folderId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = Endpoint_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 52:
          if (tag !== 418) {
            break;
          }

          message.settings = EndpointSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Endpoint {
    return {
      $type: Endpoint.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      settings: isSet(object.settings) ? EndpointSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.settings !== undefined) {
      obj.settings = EndpointSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Endpoint>, I>>(base?: I): Endpoint {
    return Endpoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
    const message = createBaseEndpoint();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? EndpointSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Endpoint.$type, Endpoint);

function createBaseEndpoint_LabelsEntry(): Endpoint_LabelsEntry {
  return { $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry", key: "", value: "" };
}

export const Endpoint_LabelsEntry = {
  $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry" as const,

  encode(message: Endpoint_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Endpoint_LabelsEntry {
    return {
      $type: Endpoint_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Endpoint_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Endpoint_LabelsEntry>, I>>(base?: I): Endpoint_LabelsEntry {
    return Endpoint_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Endpoint_LabelsEntry>, I>>(object: I): Endpoint_LabelsEntry {
    const message = createBaseEndpoint_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Endpoint_LabelsEntry.$type, Endpoint_LabelsEntry);

function createBaseEndpointSettings(): EndpointSettings {
  return {
    $type: "yandex.cloud.datatransfer.v1.EndpointSettings",
    mysqlSource: undefined,
    postgresSource: undefined,
    ydbSource: undefined,
    kafkaSource: undefined,
    mongoSource: undefined,
    clickhouseSource: undefined,
    mysqlTarget: undefined,
    postgresTarget: undefined,
    clickhouseTarget: undefined,
    ydbTarget: undefined,
    kafkaTarget: undefined,
    mongoTarget: undefined,
  };
}

export const EndpointSettings = {
  $type: "yandex.cloud.datatransfer.v1.EndpointSettings" as const,

  encode(message: EndpointSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mysqlSource !== undefined) {
      MysqlSource.encode(message.mysqlSource, writer.uint32(10).fork()).ldelim();
    }
    if (message.postgresSource !== undefined) {
      PostgresSource.encode(message.postgresSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.ydbSource !== undefined) {
      YdbSource.encode(message.ydbSource, writer.uint32(26).fork()).ldelim();
    }
    if (message.kafkaSource !== undefined) {
      KafkaSource.encode(message.kafkaSource, writer.uint32(66).fork()).ldelim();
    }
    if (message.mongoSource !== undefined) {
      MongoSource.encode(message.mongoSource, writer.uint32(74).fork()).ldelim();
    }
    if (message.clickhouseSource !== undefined) {
      ClickhouseSource.encode(message.clickhouseSource, writer.uint32(130).fork()).ldelim();
    }
    if (message.mysqlTarget !== undefined) {
      MysqlTarget.encode(message.mysqlTarget, writer.uint32(810).fork()).ldelim();
    }
    if (message.postgresTarget !== undefined) {
      PostgresTarget.encode(message.postgresTarget, writer.uint32(818).fork()).ldelim();
    }
    if (message.clickhouseTarget !== undefined) {
      ClickhouseTarget.encode(message.clickhouseTarget, writer.uint32(834).fork()).ldelim();
    }
    if (message.ydbTarget !== undefined) {
      YdbTarget.encode(message.ydbTarget, writer.uint32(842).fork()).ldelim();
    }
    if (message.kafkaTarget !== undefined) {
      KafkaTarget.encode(message.kafkaTarget, writer.uint32(882).fork()).ldelim();
    }
    if (message.mongoTarget !== undefined) {
      MongoTarget.encode(message.mongoTarget, writer.uint32(890).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpointSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mysqlSource = MysqlSource.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.postgresSource = PostgresSource.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ydbSource = YdbSource.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.kafkaSource = KafkaSource.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.mongoSource = MongoSource.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.clickhouseSource = ClickhouseSource.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.mysqlTarget = MysqlTarget.decode(reader, reader.uint32());
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.postgresTarget = PostgresTarget.decode(reader, reader.uint32());
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.clickhouseTarget = ClickhouseTarget.decode(reader, reader.uint32());
          continue;
        case 105:
          if (tag !== 842) {
            break;
          }

          message.ydbTarget = YdbTarget.decode(reader, reader.uint32());
          continue;
        case 110:
          if (tag !== 882) {
            break;
          }

          message.kafkaTarget = KafkaTarget.decode(reader, reader.uint32());
          continue;
        case 111:
          if (tag !== 890) {
            break;
          }

          message.mongoTarget = MongoTarget.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EndpointSettings {
    return {
      $type: EndpointSettings.$type,
      mysqlSource: isSet(object.mysqlSource) ? MysqlSource.fromJSON(object.mysqlSource) : undefined,
      postgresSource: isSet(object.postgresSource) ? PostgresSource.fromJSON(object.postgresSource) : undefined,
      ydbSource: isSet(object.ydbSource) ? YdbSource.fromJSON(object.ydbSource) : undefined,
      kafkaSource: isSet(object.kafkaSource) ? KafkaSource.fromJSON(object.kafkaSource) : undefined,
      mongoSource: isSet(object.mongoSource) ? MongoSource.fromJSON(object.mongoSource) : undefined,
      clickhouseSource: isSet(object.clickhouseSource) ? ClickhouseSource.fromJSON(object.clickhouseSource) : undefined,
      mysqlTarget: isSet(object.mysqlTarget) ? MysqlTarget.fromJSON(object.mysqlTarget) : undefined,
      postgresTarget: isSet(object.postgresTarget) ? PostgresTarget.fromJSON(object.postgresTarget) : undefined,
      clickhouseTarget: isSet(object.clickhouseTarget) ? ClickhouseTarget.fromJSON(object.clickhouseTarget) : undefined,
      ydbTarget: isSet(object.ydbTarget) ? YdbTarget.fromJSON(object.ydbTarget) : undefined,
      kafkaTarget: isSet(object.kafkaTarget) ? KafkaTarget.fromJSON(object.kafkaTarget) : undefined,
      mongoTarget: isSet(object.mongoTarget) ? MongoTarget.fromJSON(object.mongoTarget) : undefined,
    };
  },

  toJSON(message: EndpointSettings): unknown {
    const obj: any = {};
    if (message.mysqlSource !== undefined) {
      obj.mysqlSource = MysqlSource.toJSON(message.mysqlSource);
    }
    if (message.postgresSource !== undefined) {
      obj.postgresSource = PostgresSource.toJSON(message.postgresSource);
    }
    if (message.ydbSource !== undefined) {
      obj.ydbSource = YdbSource.toJSON(message.ydbSource);
    }
    if (message.kafkaSource !== undefined) {
      obj.kafkaSource = KafkaSource.toJSON(message.kafkaSource);
    }
    if (message.mongoSource !== undefined) {
      obj.mongoSource = MongoSource.toJSON(message.mongoSource);
    }
    if (message.clickhouseSource !== undefined) {
      obj.clickhouseSource = ClickhouseSource.toJSON(message.clickhouseSource);
    }
    if (message.mysqlTarget !== undefined) {
      obj.mysqlTarget = MysqlTarget.toJSON(message.mysqlTarget);
    }
    if (message.postgresTarget !== undefined) {
      obj.postgresTarget = PostgresTarget.toJSON(message.postgresTarget);
    }
    if (message.clickhouseTarget !== undefined) {
      obj.clickhouseTarget = ClickhouseTarget.toJSON(message.clickhouseTarget);
    }
    if (message.ydbTarget !== undefined) {
      obj.ydbTarget = YdbTarget.toJSON(message.ydbTarget);
    }
    if (message.kafkaTarget !== undefined) {
      obj.kafkaTarget = KafkaTarget.toJSON(message.kafkaTarget);
    }
    if (message.mongoTarget !== undefined) {
      obj.mongoTarget = MongoTarget.toJSON(message.mongoTarget);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EndpointSettings>, I>>(base?: I): EndpointSettings {
    return EndpointSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EndpointSettings>, I>>(object: I): EndpointSettings {
    const message = createBaseEndpointSettings();
    message.mysqlSource = (object.mysqlSource !== undefined && object.mysqlSource !== null)
      ? MysqlSource.fromPartial(object.mysqlSource)
      : undefined;
    message.postgresSource = (object.postgresSource !== undefined && object.postgresSource !== null)
      ? PostgresSource.fromPartial(object.postgresSource)
      : undefined;
    message.ydbSource = (object.ydbSource !== undefined && object.ydbSource !== null)
      ? YdbSource.fromPartial(object.ydbSource)
      : undefined;
    message.kafkaSource = (object.kafkaSource !== undefined && object.kafkaSource !== null)
      ? KafkaSource.fromPartial(object.kafkaSource)
      : undefined;
    message.mongoSource = (object.mongoSource !== undefined && object.mongoSource !== null)
      ? MongoSource.fromPartial(object.mongoSource)
      : undefined;
    message.clickhouseSource = (object.clickhouseSource !== undefined && object.clickhouseSource !== null)
      ? ClickhouseSource.fromPartial(object.clickhouseSource)
      : undefined;
    message.mysqlTarget = (object.mysqlTarget !== undefined && object.mysqlTarget !== null)
      ? MysqlTarget.fromPartial(object.mysqlTarget)
      : undefined;
    message.postgresTarget = (object.postgresTarget !== undefined && object.postgresTarget !== null)
      ? PostgresTarget.fromPartial(object.postgresTarget)
      : undefined;
    message.clickhouseTarget = (object.clickhouseTarget !== undefined && object.clickhouseTarget !== null)
      ? ClickhouseTarget.fromPartial(object.clickhouseTarget)
      : undefined;
    message.ydbTarget = (object.ydbTarget !== undefined && object.ydbTarget !== null)
      ? YdbTarget.fromPartial(object.ydbTarget)
      : undefined;
    message.kafkaTarget = (object.kafkaTarget !== undefined && object.kafkaTarget !== null)
      ? KafkaTarget.fromPartial(object.kafkaTarget)
      : undefined;
    message.mongoTarget = (object.mongoTarget !== undefined && object.mongoTarget !== null)
      ? MongoTarget.fromPartial(object.mongoTarget)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(EndpointSettings.$type, EndpointSettings);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
