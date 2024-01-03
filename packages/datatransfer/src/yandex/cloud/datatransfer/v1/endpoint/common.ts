/* eslint-disable */
import { Empty } from "@yandex-cloud/core/dist/generated/google/protobuf/empty";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum ObjectTransferStage {
  OBJECT_TRANSFER_STAGE_UNSPECIFIED = 0,
  /** BEFORE_DATA - Before data transfer */
  BEFORE_DATA = 1,
  /** AFTER_DATA - After data transfer */
  AFTER_DATA = 2,
  /** NEVER - Don't copy */
  NEVER = 3,
  UNRECOGNIZED = -1,
}

export function objectTransferStageFromJSON(object: any): ObjectTransferStage {
  switch (object) {
    case 0:
    case "OBJECT_TRANSFER_STAGE_UNSPECIFIED":
      return ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED;
    case 1:
    case "BEFORE_DATA":
      return ObjectTransferStage.BEFORE_DATA;
    case 2:
    case "AFTER_DATA":
      return ObjectTransferStage.AFTER_DATA;
    case 3:
    case "NEVER":
      return ObjectTransferStage.NEVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectTransferStage.UNRECOGNIZED;
  }
}

export function objectTransferStageToJSON(object: ObjectTransferStage): string {
  switch (object) {
    case ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED:
      return "OBJECT_TRANSFER_STAGE_UNSPECIFIED";
    case ObjectTransferStage.BEFORE_DATA:
      return "BEFORE_DATA";
    case ObjectTransferStage.AFTER_DATA:
      return "AFTER_DATA";
    case ObjectTransferStage.NEVER:
      return "NEVER";
    case ObjectTransferStage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CleanupPolicy {
  CLEANUP_POLICY_UNSPECIFIED = 0,
  /** DISABLED - Don't cleanup */
  DISABLED = 1,
  /** DROP - Drop */
  DROP = 2,
  /** TRUNCATE - Truncate */
  TRUNCATE = 3,
  UNRECOGNIZED = -1,
}

export function cleanupPolicyFromJSON(object: any): CleanupPolicy {
  switch (object) {
    case 0:
    case "CLEANUP_POLICY_UNSPECIFIED":
      return CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
    case 1:
    case "DISABLED":
      return CleanupPolicy.DISABLED;
    case 2:
    case "DROP":
      return CleanupPolicy.DROP;
    case 3:
    case "TRUNCATE":
      return CleanupPolicy.TRUNCATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CleanupPolicy.UNRECOGNIZED;
  }
}

export function cleanupPolicyToJSON(object: CleanupPolicy): string {
  switch (object) {
    case CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
      return "CLEANUP_POLICY_UNSPECIFIED";
    case CleanupPolicy.DISABLED:
      return "DISABLED";
    case CleanupPolicy.DROP:
      return "DROP";
    case CleanupPolicy.TRUNCATE:
      return "TRUNCATE";
    case CleanupPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ColumnType {
  COLUMN_TYPE_UNSPECIFIED = 0,
  INT64 = 14,
  INT32 = 1,
  INT16 = 2,
  INT8 = 3,
  UINT64 = 4,
  UINT32 = 5,
  UINT16 = 6,
  UINT8 = 7,
  DOUBLE = 8,
  BOOLEAN = 9,
  STRING = 10,
  UTF8 = 11,
  ANY = 12,
  DATETIME = 13,
  UNRECOGNIZED = -1,
}

export function columnTypeFromJSON(object: any): ColumnType {
  switch (object) {
    case 0:
    case "COLUMN_TYPE_UNSPECIFIED":
      return ColumnType.COLUMN_TYPE_UNSPECIFIED;
    case 14:
    case "INT64":
      return ColumnType.INT64;
    case 1:
    case "INT32":
      return ColumnType.INT32;
    case 2:
    case "INT16":
      return ColumnType.INT16;
    case 3:
    case "INT8":
      return ColumnType.INT8;
    case 4:
    case "UINT64":
      return ColumnType.UINT64;
    case 5:
    case "UINT32":
      return ColumnType.UINT32;
    case 6:
    case "UINT16":
      return ColumnType.UINT16;
    case 7:
    case "UINT8":
      return ColumnType.UINT8;
    case 8:
    case "DOUBLE":
      return ColumnType.DOUBLE;
    case 9:
    case "BOOLEAN":
      return ColumnType.BOOLEAN;
    case 10:
    case "STRING":
      return ColumnType.STRING;
    case 11:
    case "UTF8":
      return ColumnType.UTF8;
    case 12:
    case "ANY":
      return ColumnType.ANY;
    case 13:
    case "DATETIME":
      return ColumnType.DATETIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ColumnType.UNRECOGNIZED;
  }
}

export function columnTypeToJSON(object: ColumnType): string {
  switch (object) {
    case ColumnType.COLUMN_TYPE_UNSPECIFIED:
      return "COLUMN_TYPE_UNSPECIFIED";
    case ColumnType.INT64:
      return "INT64";
    case ColumnType.INT32:
      return "INT32";
    case ColumnType.INT16:
      return "INT16";
    case ColumnType.INT8:
      return "INT8";
    case ColumnType.UINT64:
      return "UINT64";
    case ColumnType.UINT32:
      return "UINT32";
    case ColumnType.UINT16:
      return "UINT16";
    case ColumnType.UINT8:
      return "UINT8";
    case ColumnType.DOUBLE:
      return "DOUBLE";
    case ColumnType.BOOLEAN:
      return "BOOLEAN";
    case ColumnType.STRING:
      return "STRING";
    case ColumnType.UTF8:
      return "UTF8";
    case ColumnType.ANY:
      return "ANY";
    case ColumnType.DATETIME:
      return "DATETIME";
    case ColumnType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AltName {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AltName";
  /** Source table name */
  fromName: string;
  /** Target table name */
  toName: string;
}

export interface Secret {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Secret";
  /** Raw secret value */
  raw?: string | undefined;
}

export interface ColSchema {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema";
  name: string;
  type: ColumnType;
  key: boolean;
  required: boolean;
  path: string;
}

export interface TLSMode {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode";
  disabled?: Empty | undefined;
  enabled?: TLSConfig | undefined;
}

export interface TLSConfig {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig";
  /**
   * CA certificate
   *
   * X.509 certificate of the certificate authority which issued the server's
   * certificate, in PEM format. When CA certificate is specified TLS is used to
   * connect to the server.
   */
  caCertificate: string;
}

export interface ColumnValue {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue";
  stringValue?: string | undefined;
}

export interface DataTransformationOptions {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions";
  /** Cloud function */
  cloudFunction: string;
  /** Service account */
  serviceAccountId: string;
  /** Number of retries */
  numberOfRetries: number;
  /** Buffer size for function */
  bufferSize: string;
  /** Flush interval */
  bufferFlushInterval: string;
  /** Invocation timeout */
  invocationTimeout: string;
}

export interface FieldList {
  $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList";
  /** Column schema */
  fields: ColSchema[];
}

export interface DataSchema {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema";
  fields?: FieldList | undefined;
  jsonFields?: string | undefined;
}

/** No authentication */
export interface NoAuth {
  $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth";
}

function createBaseAltName(): AltName {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.AltName", fromName: "", toName: "" };
}

export const AltName = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AltName" as const,

  encode(message: AltName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromName !== "") {
      writer.uint32(10).string(message.fromName);
    }
    if (message.toName !== "") {
      writer.uint32(18).string(message.toName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fromName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AltName {
    return {
      $type: AltName.$type,
      fromName: isSet(object.fromName) ? globalThis.String(object.fromName) : "",
      toName: isSet(object.toName) ? globalThis.String(object.toName) : "",
    };
  },

  toJSON(message: AltName): unknown {
    const obj: any = {};
    if (message.fromName !== "") {
      obj.fromName = message.fromName;
    }
    if (message.toName !== "") {
      obj.toName = message.toName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AltName>, I>>(base?: I): AltName {
    return AltName.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AltName>, I>>(object: I): AltName {
    const message = createBaseAltName();
    message.fromName = object.fromName ?? "";
    message.toName = object.toName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AltName.$type, AltName);

function createBaseSecret(): Secret {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.Secret", raw: undefined };
}

export const Secret = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Secret" as const,

  encode(message: Secret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.raw !== undefined) {
      writer.uint32(10).string(message.raw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecret();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.raw = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Secret {
    return { $type: Secret.$type, raw: isSet(object.raw) ? globalThis.String(object.raw) : undefined };
  },

  toJSON(message: Secret): unknown {
    const obj: any = {};
    if (message.raw !== undefined) {
      obj.raw = message.raw;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Secret>, I>>(base?: I): Secret {
    return Secret.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
    const message = createBaseSecret();
    message.raw = object.raw ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Secret.$type, Secret);

function createBaseColSchema(): ColSchema {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema",
    name: "",
    type: 0,
    key: false,
    required: false,
    path: "",
  };
}

export const ColSchema = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema" as const,

  encode(message: ColSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.key === true) {
      writer.uint32(24).bool(message.key);
    }
    if (message.required === true) {
      writer.uint32(32).bool(message.required);
    }
    if (message.path !== "") {
      writer.uint32(42).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ColSchema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColSchema();
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
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.key = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.required = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ColSchema {
    return {
      $type: ColSchema.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? columnTypeFromJSON(object.type) : 0,
      key: isSet(object.key) ? globalThis.Boolean(object.key) : false,
      required: isSet(object.required) ? globalThis.Boolean(object.required) : false,
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: ColSchema): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = columnTypeToJSON(message.type);
    }
    if (message.key === true) {
      obj.key = message.key;
    }
    if (message.required === true) {
      obj.required = message.required;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ColSchema>, I>>(base?: I): ColSchema {
    return ColSchema.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ColSchema>, I>>(object: I): ColSchema {
    const message = createBaseColSchema();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.key = object.key ?? false;
    message.required = object.required ?? false;
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(ColSchema.$type, ColSchema);

function createBaseTLSMode(): TLSMode {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode", disabled: undefined, enabled: undefined };
}

export const TLSMode = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode" as const,

  encode(message: TLSMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disabled !== undefined) {
      Empty.encode(message.disabled, writer.uint32(10).fork()).ldelim();
    }
    if (message.enabled !== undefined) {
      TLSConfig.encode(message.enabled, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSMode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTLSMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.disabled = Empty.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.enabled = TLSConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TLSMode {
    return {
      $type: TLSMode.$type,
      disabled: isSet(object.disabled) ? Empty.fromJSON(object.disabled) : undefined,
      enabled: isSet(object.enabled) ? TLSConfig.fromJSON(object.enabled) : undefined,
    };
  },

  toJSON(message: TLSMode): unknown {
    const obj: any = {};
    if (message.disabled !== undefined) {
      obj.disabled = Empty.toJSON(message.disabled);
    }
    if (message.enabled !== undefined) {
      obj.enabled = TLSConfig.toJSON(message.enabled);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TLSMode>, I>>(base?: I): TLSMode {
    return TLSMode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TLSMode>, I>>(object: I): TLSMode {
    const message = createBaseTLSMode();
    message.disabled = (object.disabled !== undefined && object.disabled !== null)
      ? Empty.fromPartial(object.disabled)
      : undefined;
    message.enabled = (object.enabled !== undefined && object.enabled !== null)
      ? TLSConfig.fromPartial(object.enabled)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(TLSMode.$type, TLSMode);

function createBaseTLSConfig(): TLSConfig {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig", caCertificate: "" };
}

export const TLSConfig = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig" as const,

  encode(message: TLSConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.caCertificate !== "") {
      writer.uint32(10).string(message.caCertificate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTLSConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.caCertificate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TLSConfig {
    return {
      $type: TLSConfig.$type,
      caCertificate: isSet(object.caCertificate) ? globalThis.String(object.caCertificate) : "",
    };
  },

  toJSON(message: TLSConfig): unknown {
    const obj: any = {};
    if (message.caCertificate !== "") {
      obj.caCertificate = message.caCertificate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TLSConfig>, I>>(base?: I): TLSConfig {
    return TLSConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TLSConfig>, I>>(object: I): TLSConfig {
    const message = createBaseTLSConfig();
    message.caCertificate = object.caCertificate ?? "";
    return message;
  },
};

messageTypeRegistry.set(TLSConfig.$type, TLSConfig);

function createBaseColumnValue(): ColumnValue {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue", stringValue: undefined };
}

export const ColumnValue = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue" as const,

  encode(message: ColumnValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stringValue !== undefined) {
      writer.uint32(10).string(message.stringValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ColumnValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColumnValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stringValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ColumnValue {
    return {
      $type: ColumnValue.$type,
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
    };
  },

  toJSON(message: ColumnValue): unknown {
    const obj: any = {};
    if (message.stringValue !== undefined) {
      obj.stringValue = message.stringValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ColumnValue>, I>>(base?: I): ColumnValue {
    return ColumnValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ColumnValue>, I>>(object: I): ColumnValue {
    const message = createBaseColumnValue();
    message.stringValue = object.stringValue ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ColumnValue.$type, ColumnValue);

function createBaseDataTransformationOptions(): DataTransformationOptions {
  return {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions",
    cloudFunction: "",
    serviceAccountId: "",
    numberOfRetries: 0,
    bufferSize: "",
    bufferFlushInterval: "",
    invocationTimeout: "",
  };
}

export const DataTransformationOptions = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions" as const,

  encode(message: DataTransformationOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cloudFunction !== "") {
      writer.uint32(10).string(message.cloudFunction);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(66).string(message.serviceAccountId);
    }
    if (message.numberOfRetries !== 0) {
      writer.uint32(16).int64(message.numberOfRetries);
    }
    if (message.bufferSize !== "") {
      writer.uint32(26).string(message.bufferSize);
    }
    if (message.bufferFlushInterval !== "") {
      writer.uint32(34).string(message.bufferFlushInterval);
    }
    if (message.invocationTimeout !== "") {
      writer.uint32(42).string(message.invocationTimeout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataTransformationOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataTransformationOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cloudFunction = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.numberOfRetries = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bufferSize = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bufferFlushInterval = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.invocationTimeout = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataTransformationOptions {
    return {
      $type: DataTransformationOptions.$type,
      cloudFunction: isSet(object.cloudFunction) ? globalThis.String(object.cloudFunction) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      numberOfRetries: isSet(object.numberOfRetries) ? globalThis.Number(object.numberOfRetries) : 0,
      bufferSize: isSet(object.bufferSize) ? globalThis.String(object.bufferSize) : "",
      bufferFlushInterval: isSet(object.bufferFlushInterval) ? globalThis.String(object.bufferFlushInterval) : "",
      invocationTimeout: isSet(object.invocationTimeout) ? globalThis.String(object.invocationTimeout) : "",
    };
  },

  toJSON(message: DataTransformationOptions): unknown {
    const obj: any = {};
    if (message.cloudFunction !== "") {
      obj.cloudFunction = message.cloudFunction;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.numberOfRetries !== 0) {
      obj.numberOfRetries = Math.round(message.numberOfRetries);
    }
    if (message.bufferSize !== "") {
      obj.bufferSize = message.bufferSize;
    }
    if (message.bufferFlushInterval !== "") {
      obj.bufferFlushInterval = message.bufferFlushInterval;
    }
    if (message.invocationTimeout !== "") {
      obj.invocationTimeout = message.invocationTimeout;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataTransformationOptions>, I>>(base?: I): DataTransformationOptions {
    return DataTransformationOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataTransformationOptions>, I>>(object: I): DataTransformationOptions {
    const message = createBaseDataTransformationOptions();
    message.cloudFunction = object.cloudFunction ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.numberOfRetries = object.numberOfRetries ?? 0;
    message.bufferSize = object.bufferSize ?? "";
    message.bufferFlushInterval = object.bufferFlushInterval ?? "";
    message.invocationTimeout = object.invocationTimeout ?? "";
    return message;
  },
};

messageTypeRegistry.set(DataTransformationOptions.$type, DataTransformationOptions);

function createBaseFieldList(): FieldList {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList", fields: [] };
}

export const FieldList = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList" as const,

  encode(message: FieldList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fields) {
      ColSchema.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fields.push(ColSchema.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldList {
    return {
      $type: FieldList.$type,
      fields: globalThis.Array.isArray(object?.fields) ? object.fields.map((e: any) => ColSchema.fromJSON(e)) : [],
    };
  },

  toJSON(message: FieldList): unknown {
    const obj: any = {};
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => ColSchema.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FieldList>, I>>(base?: I): FieldList {
    return FieldList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FieldList>, I>>(object: I): FieldList {
    const message = createBaseFieldList();
    message.fields = object.fields?.map((e) => ColSchema.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(FieldList.$type, FieldList);

function createBaseDataSchema(): DataSchema {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema", fields: undefined, jsonFields: undefined };
}

export const DataSchema = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema" as const,

  encode(message: DataSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fields !== undefined) {
      FieldList.encode(message.fields, writer.uint32(18).fork()).ldelim();
    }
    if (message.jsonFields !== undefined) {
      writer.uint32(10).string(message.jsonFields);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSchema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fields = FieldList.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jsonFields = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSchema {
    return {
      $type: DataSchema.$type,
      fields: isSet(object.fields) ? FieldList.fromJSON(object.fields) : undefined,
      jsonFields: isSet(object.jsonFields) ? globalThis.String(object.jsonFields) : undefined,
    };
  },

  toJSON(message: DataSchema): unknown {
    const obj: any = {};
    if (message.fields !== undefined) {
      obj.fields = FieldList.toJSON(message.fields);
    }
    if (message.jsonFields !== undefined) {
      obj.jsonFields = message.jsonFields;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataSchema>, I>>(base?: I): DataSchema {
    return DataSchema.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataSchema>, I>>(object: I): DataSchema {
    const message = createBaseDataSchema();
    message.fields = (object.fields !== undefined && object.fields !== null)
      ? FieldList.fromPartial(object.fields)
      : undefined;
    message.jsonFields = object.jsonFields ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DataSchema.$type, DataSchema);

function createBaseNoAuth(): NoAuth {
  return { $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth" };
}

export const NoAuth = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth" as const,

  encode(_: NoAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoAuth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoAuth();
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

  fromJSON(_: any): NoAuth {
    return { $type: NoAuth.$type };
  },

  toJSON(_: NoAuth): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NoAuth>, I>>(base?: I): NoAuth {
    return NoAuth.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NoAuth>, I>>(_: I): NoAuth {
    const message = createBaseNoAuth();
    return message;
  },
};

messageTypeRegistry.set(NoAuth.$type, NoAuth);

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
