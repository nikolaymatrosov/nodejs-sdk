/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.iot.devices.v1";

export enum DeviceView {
  /**
   * BASIC - Server responses without monitoring data.
   * The default value.
   */
  BASIC = 0,
  /** FULL - Server responses with monitoring data. */
  FULL = 1,
  UNRECOGNIZED = -1,
}

export function deviceViewFromJSON(object: any): DeviceView {
  switch (object) {
    case 0:
    case "BASIC":
      return DeviceView.BASIC;
    case 1:
    case "FULL":
      return DeviceView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeviceView.UNRECOGNIZED;
  }
}

export function deviceViewToJSON(object: DeviceView): string {
  switch (object) {
    case DeviceView.BASIC:
      return "BASIC";
    case DeviceView.FULL:
      return "FULL";
    case DeviceView.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A device. For more information, see [Device](/docs/iot-core/concepts/index#device). */
export interface Device {
  $type: "yandex.cloud.iot.devices.v1.Device";
  /** ID of the device. */
  id: string;
  /** ID of the registry that the device belongs to. */
  registryId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Name of the device. The name is unique within the registry. */
  name: string;
  /** Description of the device. 0-256 characters long. */
  description: string;
  /**
   * Alias of a device topic.
   *
   * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/abcdef/events`.
   */
  topicAliases: { [key: string]: string };
  /** Status of the device. */
  status: Device_Status;
  /** Device monitoring data, returns if FULL view specified. */
  monitoringData?: DeviceMonitoringData | undefined;
}

export enum Device_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Device is being created. */
  CREATING = 1,
  /** ACTIVE - Device is ready to use. */
  ACTIVE = 2,
  /** DELETING - Device is being deleted. */
  DELETING = 3,
  UNRECOGNIZED = -1,
}

export function device_StatusFromJSON(object: any): Device_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Device_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Device_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Device_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Device_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Device_Status.UNRECOGNIZED;
  }
}

export function device_StatusToJSON(object: Device_Status): string {
  switch (object) {
    case Device_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Device_Status.CREATING:
      return "CREATING";
    case Device_Status.ACTIVE:
      return "ACTIVE";
    case Device_Status.DELETING:
      return "DELETING";
    case Device_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Device_TopicAliasesEntry {
  $type: "yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry";
  key: string;
  value: string;
}

/** A device certificate. For more information, see [Managing device certificates](/docs/iot-core/operations/certificates/device-certificates). */
export interface DeviceCertificate {
  $type: "yandex.cloud.iot.devices.v1.DeviceCertificate";
  /** ID of the device that the certificate belongs to. */
  deviceId: string;
  /** SHA256 hash of the certificate. */
  fingerprint: string;
  /** Public part of the certificate. */
  certificateData: string;
  /** Creation timestamp. */
  createdAt?: Date | undefined;
}

/** A device password. */
export interface DevicePassword {
  $type: "yandex.cloud.iot.devices.v1.DevicePassword";
  /** ID of the device that the password belongs to. */
  deviceId: string;
  /** ID of the password. */
  id: string;
  /** Creation timestamp. */
  createdAt?: Date | undefined;
}

export interface DeviceMonitoringData {
  $type: "yandex.cloud.iot.devices.v1.DeviceMonitoringData";
  lastAuthIp: string;
  lastAuthTime?: Date | undefined;
  lastPubActivityTime?: Date | undefined;
  lastSubActivityTime?: Date | undefined;
  lastOnlineTime?: Date | undefined;
}

function createBaseDevice(): Device {
  return {
    $type: "yandex.cloud.iot.devices.v1.Device",
    id: "",
    registryId: "",
    createdAt: undefined,
    name: "",
    description: "",
    topicAliases: {},
    status: 0,
    monitoringData: undefined,
  };
}

export const Device = {
  $type: "yandex.cloud.iot.devices.v1.Device" as const,

  encode(message: Device, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.registryId !== "") {
      writer.uint32(18).string(message.registryId);
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
    Object.entries(message.topicAliases).forEach(([key, value]) => {
      Device_TopicAliasesEntry.encode({
        $type: "yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry",
        key: key as any,
        value,
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.monitoringData !== undefined) {
      DeviceMonitoringData.encode(message.monitoringData, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Device {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevice();
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

          message.registryId = reader.string();
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

          const entry6 = Device_TopicAliasesEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.topicAliases[entry6.key] = entry6.value;
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

          message.monitoringData = DeviceMonitoringData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Device {
    return {
      $type: Device.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      topicAliases: isObject(object.topicAliases)
        ? Object.entries(object.topicAliases).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      status: isSet(object.status) ? device_StatusFromJSON(object.status) : 0,
      monitoringData: isSet(object.monitoringData) ? DeviceMonitoringData.fromJSON(object.monitoringData) : undefined,
    };
  },

  toJSON(message: Device): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
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
    if (message.topicAliases) {
      const entries = Object.entries(message.topicAliases);
      if (entries.length > 0) {
        obj.topicAliases = {};
        entries.forEach(([k, v]) => {
          obj.topicAliases[k] = v;
        });
      }
    }
    if (message.status !== 0) {
      obj.status = device_StatusToJSON(message.status);
    }
    if (message.monitoringData !== undefined) {
      obj.monitoringData = DeviceMonitoringData.toJSON(message.monitoringData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Device>, I>>(base?: I): Device {
    return Device.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Device>, I>>(object: I): Device {
    const message = createBaseDevice();
    message.id = object.id ?? "";
    message.registryId = object.registryId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.topicAliases = Object.entries(object.topicAliases ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.status = object.status ?? 0;
    message.monitoringData = (object.monitoringData !== undefined && object.monitoringData !== null)
      ? DeviceMonitoringData.fromPartial(object.monitoringData)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Device.$type, Device);

function createBaseDevice_TopicAliasesEntry(): Device_TopicAliasesEntry {
  return { $type: "yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry", key: "", value: "" };
}

export const Device_TopicAliasesEntry = {
  $type: "yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry" as const,

  encode(message: Device_TopicAliasesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Device_TopicAliasesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevice_TopicAliasesEntry();
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

  fromJSON(object: any): Device_TopicAliasesEntry {
    return {
      $type: Device_TopicAliasesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Device_TopicAliasesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Device_TopicAliasesEntry>, I>>(base?: I): Device_TopicAliasesEntry {
    return Device_TopicAliasesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Device_TopicAliasesEntry>, I>>(object: I): Device_TopicAliasesEntry {
    const message = createBaseDevice_TopicAliasesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Device_TopicAliasesEntry.$type, Device_TopicAliasesEntry);

function createBaseDeviceCertificate(): DeviceCertificate {
  return {
    $type: "yandex.cloud.iot.devices.v1.DeviceCertificate",
    deviceId: "",
    fingerprint: "",
    certificateData: "",
    createdAt: undefined,
  };
}

export const DeviceCertificate = {
  $type: "yandex.cloud.iot.devices.v1.DeviceCertificate" as const,

  encode(message: DeviceCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceCertificate();
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

  fromJSON(object: any): DeviceCertificate {
    return {
      $type: DeviceCertificate.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
      certificateData: isSet(object.certificateData) ? globalThis.String(object.certificateData) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: DeviceCertificate): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
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

  create<I extends Exact<DeepPartial<DeviceCertificate>, I>>(base?: I): DeviceCertificate {
    return DeviceCertificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeviceCertificate>, I>>(object: I): DeviceCertificate {
    const message = createBaseDeviceCertificate();
    message.deviceId = object.deviceId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    message.certificateData = object.certificateData ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DeviceCertificate.$type, DeviceCertificate);

function createBaseDevicePassword(): DevicePassword {
  return { $type: "yandex.cloud.iot.devices.v1.DevicePassword", deviceId: "", id: "", createdAt: undefined };
}

export const DevicePassword = {
  $type: "yandex.cloud.iot.devices.v1.DevicePassword" as const,

  encode(message: DevicePassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DevicePassword {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevicePassword();
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

  fromJSON(object: any): DevicePassword {
    return {
      $type: DevicePassword.$type,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: DevicePassword): unknown {
    const obj: any = {};
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DevicePassword>, I>>(base?: I): DevicePassword {
    return DevicePassword.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DevicePassword>, I>>(object: I): DevicePassword {
    const message = createBaseDevicePassword();
    message.deviceId = object.deviceId ?? "";
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DevicePassword.$type, DevicePassword);

function createBaseDeviceMonitoringData(): DeviceMonitoringData {
  return {
    $type: "yandex.cloud.iot.devices.v1.DeviceMonitoringData",
    lastAuthIp: "",
    lastAuthTime: undefined,
    lastPubActivityTime: undefined,
    lastSubActivityTime: undefined,
    lastOnlineTime: undefined,
  };
}

export const DeviceMonitoringData = {
  $type: "yandex.cloud.iot.devices.v1.DeviceMonitoringData" as const,

  encode(message: DeviceMonitoringData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastAuthIp !== "") {
      writer.uint32(10).string(message.lastAuthIp);
    }
    if (message.lastAuthTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastAuthTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.lastPubActivityTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastPubActivityTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.lastSubActivityTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastSubActivityTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastOnlineTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastOnlineTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceMonitoringData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceMonitoringData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lastAuthIp = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lastAuthTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastPubActivityTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lastSubActivityTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastOnlineTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeviceMonitoringData {
    return {
      $type: DeviceMonitoringData.$type,
      lastAuthIp: isSet(object.lastAuthIp) ? globalThis.String(object.lastAuthIp) : "",
      lastAuthTime: isSet(object.lastAuthTime) ? fromJsonTimestamp(object.lastAuthTime) : undefined,
      lastPubActivityTime: isSet(object.lastPubActivityTime)
        ? fromJsonTimestamp(object.lastPubActivityTime)
        : undefined,
      lastSubActivityTime: isSet(object.lastSubActivityTime)
        ? fromJsonTimestamp(object.lastSubActivityTime)
        : undefined,
      lastOnlineTime: isSet(object.lastOnlineTime) ? fromJsonTimestamp(object.lastOnlineTime) : undefined,
    };
  },

  toJSON(message: DeviceMonitoringData): unknown {
    const obj: any = {};
    if (message.lastAuthIp !== "") {
      obj.lastAuthIp = message.lastAuthIp;
    }
    if (message.lastAuthTime !== undefined) {
      obj.lastAuthTime = message.lastAuthTime.toISOString();
    }
    if (message.lastPubActivityTime !== undefined) {
      obj.lastPubActivityTime = message.lastPubActivityTime.toISOString();
    }
    if (message.lastSubActivityTime !== undefined) {
      obj.lastSubActivityTime = message.lastSubActivityTime.toISOString();
    }
    if (message.lastOnlineTime !== undefined) {
      obj.lastOnlineTime = message.lastOnlineTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceMonitoringData>, I>>(base?: I): DeviceMonitoringData {
    return DeviceMonitoringData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeviceMonitoringData>, I>>(object: I): DeviceMonitoringData {
    const message = createBaseDeviceMonitoringData();
    message.lastAuthIp = object.lastAuthIp ?? "";
    message.lastAuthTime = object.lastAuthTime ?? undefined;
    message.lastPubActivityTime = object.lastPubActivityTime ?? undefined;
    message.lastSubActivityTime = object.lastSubActivityTime ?? undefined;
    message.lastOnlineTime = object.lastOnlineTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DeviceMonitoringData.$type, DeviceMonitoringData);

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
