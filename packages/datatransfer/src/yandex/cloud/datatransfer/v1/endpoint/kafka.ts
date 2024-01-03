/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { DataTransformationOptions, NoAuth, Secret, TLSMode } from "./common";
import { Parser } from "./parsers";
import { Serializer } from "./serializers";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum KafkaMechanism {
  KAFKA_MECHANISM_UNSPECIFIED = 0,
  KAFKA_MECHANISM_SHA256 = 1,
  KAFKA_MECHANISM_SHA512 = 2,
  UNRECOGNIZED = -1,
}

export function kafkaMechanismFromJSON(object: any): KafkaMechanism {
  switch (object) {
    case 0:
    case "KAFKA_MECHANISM_UNSPECIFIED":
      return KafkaMechanism.KAFKA_MECHANISM_UNSPECIFIED;
    case 1:
    case "KAFKA_MECHANISM_SHA256":
      return KafkaMechanism.KAFKA_MECHANISM_SHA256;
    case 2:
    case "KAFKA_MECHANISM_SHA512":
      return KafkaMechanism.KAFKA_MECHANISM_SHA512;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KafkaMechanism.UNRECOGNIZED;
  }
}

export function kafkaMechanismToJSON(object: KafkaMechanism): string {
  switch (object) {
    case KafkaMechanism.KAFKA_MECHANISM_UNSPECIFIED:
      return "KAFKA_MECHANISM_UNSPECIFIED";
    case KafkaMechanism.KAFKA_MECHANISM_SHA256:
      return "KAFKA_MECHANISM_SHA256";
    case KafkaMechanism.KAFKA_MECHANISM_SHA512:
      return "KAFKA_MECHANISM_SHA512";
    case KafkaMechanism.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface KafkaConnectionOptions {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions";
  /** Managed Service for Kafka cluster ID */
  clusterId?:
    | string
    | undefined;
  /** Connection options for on-premise Kafka */
  onPremise?: OnPremiseKafka | undefined;
}

export interface OnPremiseKafka {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka";
  /** Kafka broker URLs */
  brokerUrls: string[];
  /** TLS settings for broker connection. Disabled by default. */
  tlsMode?:
    | TLSMode
    | undefined;
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
}

export interface KafkaAuth {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth";
  /** Authentication with SASL */
  sasl?:
    | KafkaSaslSecurity
    | undefined;
  /** No authentication */
  noAuth?: NoAuth | undefined;
}

export interface KafkaSaslSecurity {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity";
  /** User name */
  user: string;
  /** Password for user */
  password?:
    | Secret
    | undefined;
  /** SASL mechanism for authentication */
  mechanism: KafkaMechanism;
}

export interface KafkaSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource";
  /** Connection settings */
  connection?:
    | KafkaConnectionOptions
    | undefined;
  /** Authentication settings */
  auth?:
    | KafkaAuth
    | undefined;
  /** Security groups */
  securityGroups: string[];
  /**
   * Full source topic name
   * Deprecated in favor of topic names
   *
   * @deprecated
   */
  topicName: string;
  /** Data transformation rules */
  transformer?:
    | DataTransformationOptions
    | undefined;
  /** Data parsing rules */
  parser?:
    | Parser
    | undefined;
  /** List of topic names to read */
  topicNames: string[];
}

export interface KafkaTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget";
  /** Connection settings */
  connection?:
    | KafkaConnectionOptions
    | undefined;
  /** Authentication settings */
  auth?:
    | KafkaAuth
    | undefined;
  /** Security groups */
  securityGroups: string[];
  /** Target topic settings */
  topicSettings?:
    | KafkaTargetTopicSettings
    | undefined;
  /** Data serialization format settings */
  serializer?: Serializer | undefined;
}

export interface KafkaTargetTopicSettings {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings";
  /** Full topic name */
  topic?:
    | KafkaTargetTopic
    | undefined;
  /**
   * Topic prefix
   *
   * Analogue of the Debezium setting database.server.name.
   * Messages will be sent to topic with name <topic_prefix>.<schema>.<table_name>.
   */
  topicPrefix?: string | undefined;
}

export interface KafkaTargetTopic {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic";
  /** Topic name */
  topicName: string;
  /**
   * Save transactions order
   * Not to split events queue into separate per-table queues.
   */
  saveTxOrder: boolean;
}

function createBaseKafkaConnectionOptions(): KafkaConnectionOptions {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions",
    clusterId: undefined,
    onPremise: undefined,
  };
}

export const KafkaConnectionOptions = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions" as const,

  encode(message: KafkaConnectionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterId !== undefined) {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremiseKafka.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaConnectionOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaConnectionOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.onPremise = OnPremiseKafka.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KafkaConnectionOptions {
    return {
      $type: KafkaConnectionOptions.$type,
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : undefined,
      onPremise: isSet(object.onPremise) ? OnPremiseKafka.fromJSON(object.onPremise) : undefined,
    };
  },

  toJSON(message: KafkaConnectionOptions): unknown {
    const obj: any = {};
    if (message.clusterId !== undefined) {
      obj.clusterId = message.clusterId;
    }
    if (message.onPremise !== undefined) {
      obj.onPremise = OnPremiseKafka.toJSON(message.onPremise);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KafkaConnectionOptions>, I>>(base?: I): KafkaConnectionOptions {
    return KafkaConnectionOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KafkaConnectionOptions>, I>>(object: I): KafkaConnectionOptions {
    const message = createBaseKafkaConnectionOptions();
    message.clusterId = object.clusterId ?? undefined;
    message.onPremise = (object.onPremise !== undefined && object.onPremise !== null)
      ? OnPremiseKafka.fromPartial(object.onPremise)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(KafkaConnectionOptions.$type, KafkaConnectionOptions);

function createBaseOnPremiseKafka(): OnPremiseKafka {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka",
    brokerUrls: [],
    tlsMode: undefined,
    subnetId: "",
  };
}

export const OnPremiseKafka = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka" as const,

  encode(message: OnPremiseKafka, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.brokerUrls) {
      writer.uint32(10).string(v!);
    }
    if (message.tlsMode !== undefined) {
      TLSMode.encode(message.tlsMode, writer.uint32(42).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(34).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnPremiseKafka {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnPremiseKafka();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerUrls.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tlsMode = TLSMode.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OnPremiseKafka {
    return {
      $type: OnPremiseKafka.$type,
      brokerUrls: globalThis.Array.isArray(object?.brokerUrls)
        ? object.brokerUrls.map((e: any) => globalThis.String(e))
        : [],
      tlsMode: isSet(object.tlsMode) ? TLSMode.fromJSON(object.tlsMode) : undefined,
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: OnPremiseKafka): unknown {
    const obj: any = {};
    if (message.brokerUrls?.length) {
      obj.brokerUrls = message.brokerUrls;
    }
    if (message.tlsMode !== undefined) {
      obj.tlsMode = TLSMode.toJSON(message.tlsMode);
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OnPremiseKafka>, I>>(base?: I): OnPremiseKafka {
    return OnPremiseKafka.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OnPremiseKafka>, I>>(object: I): OnPremiseKafka {
    const message = createBaseOnPremiseKafka();
    message.brokerUrls = object.brokerUrls?.map((e) => e) || [];
    message.tlsMode = (object.tlsMode !== undefined && object.tlsMode !== null)
      ? TLSMode.fromPartial(object.tlsMode)
      : undefined;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(OnPremiseKafka.$type, OnPremiseKafka);

function createBaseKafkaAuth(): KafkaAuth {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth", sasl: undefined, noAuth: undefined };
}

export const KafkaAuth = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth" as const,

  encode(message: KafkaAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sasl !== undefined) {
      KafkaSaslSecurity.encode(message.sasl, writer.uint32(10).fork()).ldelim();
    }
    if (message.noAuth !== undefined) {
      NoAuth.encode(message.noAuth, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaAuth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sasl = KafkaSaslSecurity.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.noAuth = NoAuth.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KafkaAuth {
    return {
      $type: KafkaAuth.$type,
      sasl: isSet(object.sasl) ? KafkaSaslSecurity.fromJSON(object.sasl) : undefined,
      noAuth: isSet(object.noAuth) ? NoAuth.fromJSON(object.noAuth) : undefined,
    };
  },

  toJSON(message: KafkaAuth): unknown {
    const obj: any = {};
    if (message.sasl !== undefined) {
      obj.sasl = KafkaSaslSecurity.toJSON(message.sasl);
    }
    if (message.noAuth !== undefined) {
      obj.noAuth = NoAuth.toJSON(message.noAuth);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KafkaAuth>, I>>(base?: I): KafkaAuth {
    return KafkaAuth.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KafkaAuth>, I>>(object: I): KafkaAuth {
    const message = createBaseKafkaAuth();
    message.sasl = (object.sasl !== undefined && object.sasl !== null)
      ? KafkaSaslSecurity.fromPartial(object.sasl)
      : undefined;
    message.noAuth = (object.noAuth !== undefined && object.noAuth !== null)
      ? NoAuth.fromPartial(object.noAuth)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(KafkaAuth.$type, KafkaAuth);

function createBaseKafkaSaslSecurity(): KafkaSaslSecurity {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity",
    user: "",
    password: undefined,
    mechanism: 0,
  };
}

export const KafkaSaslSecurity = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity" as const,

  encode(message: KafkaSaslSecurity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
    }
    if (message.mechanism !== 0) {
      writer.uint32(24).int32(message.mechanism);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaSaslSecurity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaSaslSecurity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.mechanism = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KafkaSaslSecurity {
    return {
      $type: KafkaSaslSecurity.$type,
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      password: isSet(object.password) ? Secret.fromJSON(object.password) : undefined,
      mechanism: isSet(object.mechanism) ? kafkaMechanismFromJSON(object.mechanism) : 0,
    };
  },

  toJSON(message: KafkaSaslSecurity): unknown {
    const obj: any = {};
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.password !== undefined) {
      obj.password = Secret.toJSON(message.password);
    }
    if (message.mechanism !== 0) {
      obj.mechanism = kafkaMechanismToJSON(message.mechanism);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KafkaSaslSecurity>, I>>(base?: I): KafkaSaslSecurity {
    return KafkaSaslSecurity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KafkaSaslSecurity>, I>>(object: I): KafkaSaslSecurity {
    const message = createBaseKafkaSaslSecurity();
    message.user = object.user ?? "";
    message.password = (object.password !== undefined && object.password !== null)
      ? Secret.fromPartial(object.password)
      : undefined;
    message.mechanism = object.mechanism ?? 0;
    return message;
  },
};

messageTypeRegistry.set(KafkaSaslSecurity.$type, KafkaSaslSecurity);

function createBaseKafkaSource(): KafkaSource {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource",
    connection: undefined,
    auth: undefined,
    securityGroups: [],
    topicName: "",
    transformer: undefined,
    parser: undefined,
    topicNames: [],
  };
}

export const KafkaSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource" as const,

  encode(message: KafkaSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      KafkaConnectionOptions.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.auth !== undefined) {
      KafkaAuth.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(26).string(v!);
    }
    if (message.topicName !== "") {
      writer.uint32(34).string(message.topicName);
    }
    if (message.transformer !== undefined) {
      DataTransformationOptions.encode(message.transformer, writer.uint32(42).fork()).ldelim();
    }
    if (message.parser !== undefined) {
      Parser.encode(message.parser, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.topicNames) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = KafkaConnectionOptions.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auth = KafkaAuth.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.topicName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.transformer = DataTransformationOptions.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.parser = Parser.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.topicNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KafkaSource {
    return {
      $type: KafkaSource.$type,
      connection: isSet(object.connection) ? KafkaConnectionOptions.fromJSON(object.connection) : undefined,
      auth: isSet(object.auth) ? KafkaAuth.fromJSON(object.auth) : undefined,
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      topicName: isSet(object.topicName) ? globalThis.String(object.topicName) : "",
      transformer: isSet(object.transformer) ? DataTransformationOptions.fromJSON(object.transformer) : undefined,
      parser: isSet(object.parser) ? Parser.fromJSON(object.parser) : undefined,
      topicNames: globalThis.Array.isArray(object?.topicNames)
        ? object.topicNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: KafkaSource): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = KafkaConnectionOptions.toJSON(message.connection);
    }
    if (message.auth !== undefined) {
      obj.auth = KafkaAuth.toJSON(message.auth);
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
    }
    if (message.topicName !== "") {
      obj.topicName = message.topicName;
    }
    if (message.transformer !== undefined) {
      obj.transformer = DataTransformationOptions.toJSON(message.transformer);
    }
    if (message.parser !== undefined) {
      obj.parser = Parser.toJSON(message.parser);
    }
    if (message.topicNames?.length) {
      obj.topicNames = message.topicNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KafkaSource>, I>>(base?: I): KafkaSource {
    return KafkaSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KafkaSource>, I>>(object: I): KafkaSource {
    const message = createBaseKafkaSource();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? KafkaConnectionOptions.fromPartial(object.connection)
      : undefined;
    message.auth = (object.auth !== undefined && object.auth !== null) ? KafkaAuth.fromPartial(object.auth) : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.topicName = object.topicName ?? "";
    message.transformer = (object.transformer !== undefined && object.transformer !== null)
      ? DataTransformationOptions.fromPartial(object.transformer)
      : undefined;
    message.parser = (object.parser !== undefined && object.parser !== null)
      ? Parser.fromPartial(object.parser)
      : undefined;
    message.topicNames = object.topicNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(KafkaSource.$type, KafkaSource);

function createBaseKafkaTarget(): KafkaTarget {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget",
    connection: undefined,
    auth: undefined,
    securityGroups: [],
    topicSettings: undefined,
    serializer: undefined,
  };
}

export const KafkaTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget" as const,

  encode(message: KafkaTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      KafkaConnectionOptions.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.auth !== undefined) {
      KafkaAuth.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(26).string(v!);
    }
    if (message.topicSettings !== undefined) {
      KafkaTargetTopicSettings.encode(message.topicSettings, writer.uint32(58).fork()).ldelim();
    }
    if (message.serializer !== undefined) {
      Serializer.encode(message.serializer, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = KafkaConnectionOptions.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auth = KafkaAuth.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.securityGroups.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.topicSettings = KafkaTargetTopicSettings.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.serializer = Serializer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KafkaTarget {
    return {
      $type: KafkaTarget.$type,
      connection: isSet(object.connection) ? KafkaConnectionOptions.fromJSON(object.connection) : undefined,
      auth: isSet(object.auth) ? KafkaAuth.fromJSON(object.auth) : undefined,
      securityGroups: globalThis.Array.isArray(object?.securityGroups)
        ? object.securityGroups.map((e: any) => globalThis.String(e))
        : [],
      topicSettings: isSet(object.topicSettings) ? KafkaTargetTopicSettings.fromJSON(object.topicSettings) : undefined,
      serializer: isSet(object.serializer) ? Serializer.fromJSON(object.serializer) : undefined,
    };
  },

  toJSON(message: KafkaTarget): unknown {
    const obj: any = {};
    if (message.connection !== undefined) {
      obj.connection = KafkaConnectionOptions.toJSON(message.connection);
    }
    if (message.auth !== undefined) {
      obj.auth = KafkaAuth.toJSON(message.auth);
    }
    if (message.securityGroups?.length) {
      obj.securityGroups = message.securityGroups;
    }
    if (message.topicSettings !== undefined) {
      obj.topicSettings = KafkaTargetTopicSettings.toJSON(message.topicSettings);
    }
    if (message.serializer !== undefined) {
      obj.serializer = Serializer.toJSON(message.serializer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KafkaTarget>, I>>(base?: I): KafkaTarget {
    return KafkaTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KafkaTarget>, I>>(object: I): KafkaTarget {
    const message = createBaseKafkaTarget();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? KafkaConnectionOptions.fromPartial(object.connection)
      : undefined;
    message.auth = (object.auth !== undefined && object.auth !== null) ? KafkaAuth.fromPartial(object.auth) : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.topicSettings = (object.topicSettings !== undefined && object.topicSettings !== null)
      ? KafkaTargetTopicSettings.fromPartial(object.topicSettings)
      : undefined;
    message.serializer = (object.serializer !== undefined && object.serializer !== null)
      ? Serializer.fromPartial(object.serializer)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(KafkaTarget.$type, KafkaTarget);

function createBaseKafkaTargetTopicSettings(): KafkaTargetTopicSettings {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings",
    topic: undefined,
    topicPrefix: undefined,
  };
}

export const KafkaTargetTopicSettings = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings" as const,

  encode(message: KafkaTargetTopicSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== undefined) {
      KafkaTargetTopic.encode(message.topic, writer.uint32(10).fork()).ldelim();
    }
    if (message.topicPrefix !== undefined) {
      writer.uint32(18).string(message.topicPrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaTargetTopicSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaTargetTopicSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topic = KafkaTargetTopic.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.topicPrefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KafkaTargetTopicSettings {
    return {
      $type: KafkaTargetTopicSettings.$type,
      topic: isSet(object.topic) ? KafkaTargetTopic.fromJSON(object.topic) : undefined,
      topicPrefix: isSet(object.topicPrefix) ? globalThis.String(object.topicPrefix) : undefined,
    };
  },

  toJSON(message: KafkaTargetTopicSettings): unknown {
    const obj: any = {};
    if (message.topic !== undefined) {
      obj.topic = KafkaTargetTopic.toJSON(message.topic);
    }
    if (message.topicPrefix !== undefined) {
      obj.topicPrefix = message.topicPrefix;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KafkaTargetTopicSettings>, I>>(base?: I): KafkaTargetTopicSettings {
    return KafkaTargetTopicSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KafkaTargetTopicSettings>, I>>(object: I): KafkaTargetTopicSettings {
    const message = createBaseKafkaTargetTopicSettings();
    message.topic = (object.topic !== undefined && object.topic !== null)
      ? KafkaTargetTopic.fromPartial(object.topic)
      : undefined;
    message.topicPrefix = object.topicPrefix ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(KafkaTargetTopicSettings.$type, KafkaTargetTopicSettings);

function createBaseKafkaTargetTopic(): KafkaTargetTopic {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic", topicName: "", saveTxOrder: false };
}

export const KafkaTargetTopic = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic" as const,

  encode(message: KafkaTargetTopic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topicName !== "") {
      writer.uint32(10).string(message.topicName);
    }
    if (message.saveTxOrder === true) {
      writer.uint32(16).bool(message.saveTxOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaTargetTopic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaTargetTopic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topicName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.saveTxOrder = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KafkaTargetTopic {
    return {
      $type: KafkaTargetTopic.$type,
      topicName: isSet(object.topicName) ? globalThis.String(object.topicName) : "",
      saveTxOrder: isSet(object.saveTxOrder) ? globalThis.Boolean(object.saveTxOrder) : false,
    };
  },

  toJSON(message: KafkaTargetTopic): unknown {
    const obj: any = {};
    if (message.topicName !== "") {
      obj.topicName = message.topicName;
    }
    if (message.saveTxOrder === true) {
      obj.saveTxOrder = message.saveTxOrder;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KafkaTargetTopic>, I>>(base?: I): KafkaTargetTopic {
    return KafkaTargetTopic.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KafkaTargetTopic>, I>>(object: I): KafkaTargetTopic {
    const message = createBaseKafkaTargetTopic();
    message.topicName = object.topicName ?? "";
    message.saveTxOrder = object.saveTxOrder ?? false;
    return message;
  },
};

messageTypeRegistry.set(KafkaTargetTopic.$type, KafkaTargetTopic);

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
