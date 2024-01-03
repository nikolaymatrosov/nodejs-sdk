/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import {
  LogLevel_Level,
  logLevel_LevelFromJSON,
  logLevel_LevelToJSON,
} from "@yandex-cloud/logging/dist/yandex/cloud/logging/v1/log_entry";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.iot.devices.v1";

/** A registry. For more information, see [Registry](/docs/iot-core/concepts/index#registry). */
export interface Registry {
  $type: "yandex.cloud.iot.devices.v1.Registry";
  /** ID of the registry. */
  id: string;
  /** ID of the folder that the registry belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the registry. The name is unique within the folder. */
  name: string;
  /** Description of the registry. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** Status of the registry. */
  status: Registry_Status;
  /** ID of the logs group for the specified registry. */
  logGroupId: string;
  /** Options for logging registry events */
  logOptions?: LogOptions | undefined;
}

export enum Registry_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Registry is being created. */
  CREATING = 1,
  /** ACTIVE - Registry is ready to use. */
  ACTIVE = 2,
  /** DELETING - Registry is being deleted. */
  DELETING = 3,
  UNRECOGNIZED = -1,
}

export function registry_StatusFromJSON(object: any): Registry_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Registry_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Registry_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Registry_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Registry_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Registry_Status.UNRECOGNIZED;
  }
}

export function registry_StatusToJSON(object: Registry_Status): string {
  switch (object) {
    case Registry_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Registry_Status.CREATING:
      return "CREATING";
    case Registry_Status.ACTIVE:
      return "ACTIVE";
    case Registry_Status.DELETING:
      return "DELETING";
    case Registry_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Registry_LabelsEntry {
  $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry";
  key: string;
  value: string;
}

/** A registry certificate. For more information, see [Managing registry certificates](/docs/iot-core/operations/certificates/registry-certificates). */
export interface RegistryCertificate {
  $type: "yandex.cloud.iot.devices.v1.RegistryCertificate";
  /** ID of the registry that the certificate belongs to. */
  registryId: string;
  /** SHA256 hash of the certificates. */
  fingerprint: string;
  /** Public part of the certificate. */
  certificateData: string;
  /** Creation timestamp. */
  createdAt?: Date | undefined;
}

/**
 * A device topic alias.
 *
 * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/abcdef/events`. For more information, see [Using topic aliases](/docs/iot-core/concepts/topic#aliases).
 */
export interface DeviceAlias {
  $type: "yandex.cloud.iot.devices.v1.DeviceAlias";
  /** ID of the device that the alias belongs to. */
  deviceId: string;
  /** Prefix of a canonical topic name to be aliased, e.g. `$devices/abcdef`. */
  topicPrefix: string;
  /** Alias of a device topic. */
  alias: string;
}

/** A registry password. */
export interface RegistryPassword {
  $type: "yandex.cloud.iot.devices.v1.RegistryPassword";
  /** ID of the registry that the password belongs to. */
  registryId: string;
  /** ID of the password. */
  id: string;
  /** Creation timestamp. */
  createdAt?: Date | undefined;
}

/** A Yandex Data Streams export. */
export interface DataStreamExport {
  $type: "yandex.cloud.iot.devices.v1.DataStreamExport";
  /** ID of the YDS export. */
  id: string;
  /** Name of the YDS export. */
  name: string;
  /** ID of the registry that the YDS export belongs to. */
  registryId: string;
  /** MQTT topic whose messages export to YDS. */
  mqttTopicFilter: string;
  /** YDS database. */
  database: string;
  /** YDS stream name. */
  stream: string;
  /** ID of the service account which has permission to write to data stream. */
  serviceAccountId: string;
  /** Creation timestamp. */
  createdAt?: Date | undefined;
}

export interface LogOptions {
  $type: "yandex.cloud.iot.devices.v1.LogOptions";
  /** Is logging from registry disabled. */
  disabled: boolean;
  /** Entry should be written to log group resolved by ID. */
  logGroupId?:
    | string
    | undefined;
  /** Entry should be written to default log group for specified folder. */
  folderId?:
    | string
    | undefined;
  /**
   * Minimum log entry level.
   *
   * See [LogLevel.Level] for details.
   */
  minLevel: LogLevel_Level;
}

function createBaseRegistry(): Registry {
  return {
    $type: "yandex.cloud.iot.devices.v1.Registry",
    id: "",
    folderId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    status: 0,
    logGroupId: "",
    logOptions: undefined,
  };
}

export const Registry = {
  $type: "yandex.cloud.iot.devices.v1.Registry" as const,

  encode(message: Registry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Registry_LabelsEntry.encode(
        { $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry", key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.logGroupId !== "") {
      writer.uint32(66).string(message.logGroupId);
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Registry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistry();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

          const entry6 = Registry_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Registry {
    return {
      $type: Registry.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      status: isSet(object.status) ? registry_StatusFromJSON(object.status) : 0,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
    };
  },

  toJSON(message: Registry): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
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
    if (message.status !== 0) {
      obj.status = registry_StatusToJSON(message.status);
    }
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Registry>, I>>(base?: I): Registry {
    return Registry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Registry>, I>>(object: I): Registry {
    const message = createBaseRegistry();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.status = object.status ?? 0;
    message.logGroupId = object.logGroupId ?? "";
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Registry.$type, Registry);

function createBaseRegistry_LabelsEntry(): Registry_LabelsEntry {
  return { $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry", key: "", value: "" };
}

export const Registry_LabelsEntry = {
  $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry" as const,

  encode(message: Registry_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Registry_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistry_LabelsEntry();
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

  fromJSON(object: any): Registry_LabelsEntry {
    return {
      $type: Registry_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Registry_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Registry_LabelsEntry>, I>>(base?: I): Registry_LabelsEntry {
    return Registry_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Registry_LabelsEntry>, I>>(object: I): Registry_LabelsEntry {
    const message = createBaseRegistry_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Registry_LabelsEntry.$type, Registry_LabelsEntry);

function createBaseRegistryCertificate(): RegistryCertificate {
  return {
    $type: "yandex.cloud.iot.devices.v1.RegistryCertificate",
    registryId: "",
    fingerprint: "",
    certificateData: "",
    createdAt: undefined,
  };
}

export const RegistryCertificate = {
  $type: "yandex.cloud.iot.devices.v1.RegistryCertificate" as const,

  encode(message: RegistryCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    if (message.certificateData !== "") {
      writer.uint32(26).string(message.certificateData);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistryCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistryCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fingerprint = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.certificateData = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegistryCertificate {
    return {
      $type: RegistryCertificate.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
      certificateData: isSet(object.certificateData) ? globalThis.String(object.certificateData) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: RegistryCertificate): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.fingerprint !== "") {
      obj.fingerprint = message.fingerprint;
    }
    if (message.certificateData !== "") {
      obj.certificateData = message.certificateData;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegistryCertificate>, I>>(base?: I): RegistryCertificate {
    return RegistryCertificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegistryCertificate>, I>>(object: I): RegistryCertificate {
    const message = createBaseRegistryCertificate();
    message.registryId = object.registryId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    message.certificateData = object.certificateData ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RegistryCertificate.$type, RegistryCertificate);

function createBaseDeviceAlias(): DeviceAlias {
  return { $type: "yandex.cloud.iot.devices.v1.DeviceAlias", deviceId: "", topicPrefix: "", alias: "" };
}

export const DeviceAlias = {
  $type: "yandex.cloud.iot.devices.v1.DeviceAlias" as const,

  encode(message: DeviceAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.topicPrefix !== "") {
      writer.uint32(18).string(message.topicPrefix);
    }
    if (message.alias !== "") {
      writer.uint32(26).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceAlias {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceAlias();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.topicPrefix = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.alias = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeviceAlias {
    return {
      $type: DeviceAlias.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      topicPrefix: isSet(object.topicPrefix) ? globalThis.String(object.topicPrefix) : "",
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
    };
  },

  toJSON(message: DeviceAlias): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.topicPrefix !== "") {
      obj.topicPrefix = message.topicPrefix;
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceAlias>, I>>(base?: I): DeviceAlias {
    return DeviceAlias.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeviceAlias>, I>>(object: I): DeviceAlias {
    const message = createBaseDeviceAlias();
    message.deviceId = object.deviceId ?? "";
    message.topicPrefix = object.topicPrefix ?? "";
    message.alias = object.alias ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeviceAlias.$type, DeviceAlias);

function createBaseRegistryPassword(): RegistryPassword {
  return { $type: "yandex.cloud.iot.devices.v1.RegistryPassword", registryId: "", id: "", createdAt: undefined };
}

export const RegistryPassword = {
  $type: "yandex.cloud.iot.devices.v1.RegistryPassword" as const,

  encode(message: RegistryPassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistryPassword {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistryPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegistryPassword {
    return {
      $type: RegistryPassword.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: RegistryPassword): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegistryPassword>, I>>(base?: I): RegistryPassword {
    return RegistryPassword.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegistryPassword>, I>>(object: I): RegistryPassword {
    const message = createBaseRegistryPassword();
    message.registryId = object.registryId ?? "";
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RegistryPassword.$type, RegistryPassword);

function createBaseDataStreamExport(): DataStreamExport {
  return {
    $type: "yandex.cloud.iot.devices.v1.DataStreamExport",
    id: "",
    name: "",
    registryId: "",
    mqttTopicFilter: "",
    database: "",
    stream: "",
    serviceAccountId: "",
    createdAt: undefined,
  };
}

export const DataStreamExport = {
  $type: "yandex.cloud.iot.devices.v1.DataStreamExport" as const,

  encode(message: DataStreamExport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.registryId !== "") {
      writer.uint32(26).string(message.registryId);
    }
    if (message.mqttTopicFilter !== "") {
      writer.uint32(34).string(message.mqttTopicFilter);
    }
    if (message.database !== "") {
      writer.uint32(42).string(message.database);
    }
    if (message.stream !== "") {
      writer.uint32(50).string(message.stream);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(58).string(message.serviceAccountId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataStreamExport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataStreamExport();
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
          if (tag !== 26) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mqttTopicFilter = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.database = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.stream = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataStreamExport {
    return {
      $type: DataStreamExport.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      mqttTopicFilter: isSet(object.mqttTopicFilter) ? globalThis.String(object.mqttTopicFilter) : "",
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      stream: isSet(object.stream) ? globalThis.String(object.stream) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: DataStreamExport): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.mqttTopicFilter !== "") {
      obj.mqttTopicFilter = message.mqttTopicFilter;
    }
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.stream !== "") {
      obj.stream = message.stream;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataStreamExport>, I>>(base?: I): DataStreamExport {
    return DataStreamExport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataStreamExport>, I>>(object: I): DataStreamExport {
    const message = createBaseDataStreamExport();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.registryId = object.registryId ?? "";
    message.mqttTopicFilter = object.mqttTopicFilter ?? "";
    message.database = object.database ?? "";
    message.stream = object.stream ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DataStreamExport.$type, DataStreamExport);

function createBaseLogOptions(): LogOptions {
  return {
    $type: "yandex.cloud.iot.devices.v1.LogOptions",
    disabled: false,
    logGroupId: undefined,
    folderId: undefined,
    minLevel: 0,
  };
}

export const LogOptions = {
  $type: "yandex.cloud.iot.devices.v1.LogOptions" as const,

  encode(message: LogOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disabled === true) {
      writer.uint32(8).bool(message.disabled);
    }
    if (message.logGroupId !== undefined) {
      writer.uint32(18).string(message.logGroupId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(26).string(message.folderId);
    }
    if (message.minLevel !== 0) {
      writer.uint32(32).int32(message.minLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.disabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.minLevel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogOptions {
    return {
      $type: LogOptions.$type,
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : undefined,
      minLevel: isSet(object.minLevel) ? logLevel_LevelFromJSON(object.minLevel) : 0,
    };
  },

  toJSON(message: LogOptions): unknown {
    const obj: any = {};
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    if (message.logGroupId !== undefined) {
      obj.logGroupId = message.logGroupId;
    }
    if (message.folderId !== undefined) {
      obj.folderId = message.folderId;
    }
    if (message.minLevel !== 0) {
      obj.minLevel = logLevel_LevelToJSON(message.minLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogOptions>, I>>(base?: I): LogOptions {
    return LogOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(object: I): LogOptions {
    const message = createBaseLogOptions();
    message.disabled = object.disabled ?? false;
    message.logGroupId = object.logGroupId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    message.minLevel = object.minLevel ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LogOptions.$type, LogOptions);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
