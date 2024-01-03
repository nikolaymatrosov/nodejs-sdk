/* eslint-disable */
import {
  AttachedDiskSpec,
  NetworkInterfaceSpec,
  ResourcesSpec,
} from "@yandex-cloud/compute/dist/yandex/cloud/compute/v1/instance_service";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";

export interface CreateComputeInstance {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance";
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * ID of the availability zone where the instance resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request
   */
  zoneId: string;
  /**
   * Computing resources of the instance, such as the amount of memory and number of cores.
   * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
   */
  resourcesSpec?:
    | ResourcesSpec
    | undefined;
  /**
   * The metadata `key:value` pairs that will be assigned to this instance. This includes custom metadata and predefined keys.
   * The total size of all keys and values must be less than 512 KB.
   *
   * Values are free-form strings, and only have meaning as interpreted by the programs which configure the instance.
   * The values must be 256 KB or less.
   *
   * For example, you may use the metadata in order to provide your public SSH key to the instance.
   * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
   */
  metadata: { [key: string]: string };
  /** Boot disk to attach to the instance. */
  bootDiskSpec?:
    | AttachedDiskSpec
    | undefined;
  /**
   * Network configuration for the instance. Specifies how the network interface is configured
   * to interact with other services on the internal network and on the internet.
   * Currently only one network interface is supported per instance.
   */
  networkInterfaceSpecs: NetworkInterfaceSpec[];
  /**
   * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
}

export interface CreateComputeInstance_LabelsEntry {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateComputeInstance_MetadataEntry {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry";
  key: string;
  value: string;
}

function createBaseCreateComputeInstance(): CreateComputeInstance {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance",
    labels: {},
    zoneId: "",
    resourcesSpec: undefined,
    metadata: {},
    bootDiskSpec: undefined,
    networkInterfaceSpecs: [],
    serviceAccountId: "",
  };
}

export const CreateComputeInstance = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance" as const,

  encode(message: CreateComputeInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateComputeInstance_LabelsEntry.encode({
        $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(42).string(message.zoneId);
    }
    if (message.resourcesSpec !== undefined) {
      ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      CreateComputeInstance_MetadataEntry.encode({
        $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry",
        key: key as any,
        value,
      }, writer.uint32(66).fork()).ldelim();
    });
    if (message.bootDiskSpec !== undefined) {
      AttachedDiskSpec.encode(message.bootDiskSpec, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.networkInterfaceSpecs) {
      NetworkInterfaceSpec.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(114).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateComputeInstance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateComputeInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = CreateComputeInstance_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = CreateComputeInstance_MetadataEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.metadata[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.bootDiskSpec = AttachedDiskSpec.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.networkInterfaceSpecs.push(NetworkInterfaceSpec.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateComputeInstance {
    return {
      $type: CreateComputeInstance.$type,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      resourcesSpec: isSet(object.resourcesSpec) ? ResourcesSpec.fromJSON(object.resourcesSpec) : undefined,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      bootDiskSpec: isSet(object.bootDiskSpec) ? AttachedDiskSpec.fromJSON(object.bootDiskSpec) : undefined,
      networkInterfaceSpecs: globalThis.Array.isArray(object?.networkInterfaceSpecs)
        ? object.networkInterfaceSpecs.map((e: any) => NetworkInterfaceSpec.fromJSON(e))
        : [],
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
    };
  },

  toJSON(message: CreateComputeInstance): unknown {
    const obj: any = {};
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.resourcesSpec !== undefined) {
      obj.resourcesSpec = ResourcesSpec.toJSON(message.resourcesSpec);
    }
    if (message.metadata) {
      const entries = Object.entries(message.metadata);
      if (entries.length > 0) {
        obj.metadata = {};
        entries.forEach(([k, v]) => {
          obj.metadata[k] = v;
        });
      }
    }
    if (message.bootDiskSpec !== undefined) {
      obj.bootDiskSpec = AttachedDiskSpec.toJSON(message.bootDiskSpec);
    }
    if (message.networkInterfaceSpecs?.length) {
      obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => NetworkInterfaceSpec.toJSON(e));
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateComputeInstance>, I>>(base?: I): CreateComputeInstance {
    return CreateComputeInstance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateComputeInstance>, I>>(object: I): CreateComputeInstance {
    const message = createBaseCreateComputeInstance();
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.zoneId = object.zoneId ?? "";
    message.resourcesSpec = (object.resourcesSpec !== undefined && object.resourcesSpec !== null)
      ? ResourcesSpec.fromPartial(object.resourcesSpec)
      : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.bootDiskSpec = (object.bootDiskSpec !== undefined && object.bootDiskSpec !== null)
      ? AttachedDiskSpec.fromPartial(object.bootDiskSpec)
      : undefined;
    message.networkInterfaceSpecs = object.networkInterfaceSpecs?.map((e) => NetworkInterfaceSpec.fromPartial(e)) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateComputeInstance.$type, CreateComputeInstance);

function createBaseCreateComputeInstance_LabelsEntry(): CreateComputeInstance_LabelsEntry {
  return { $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry", key: "", value: "" };
}

export const CreateComputeInstance_LabelsEntry = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry" as const,

  encode(message: CreateComputeInstance_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateComputeInstance_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateComputeInstance_LabelsEntry();
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

  fromJSON(object: any): CreateComputeInstance_LabelsEntry {
    return {
      $type: CreateComputeInstance_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateComputeInstance_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateComputeInstance_LabelsEntry>, I>>(
    base?: I,
  ): CreateComputeInstance_LabelsEntry {
    return CreateComputeInstance_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateComputeInstance_LabelsEntry>, I>>(
    object: I,
  ): CreateComputeInstance_LabelsEntry {
    const message = createBaseCreateComputeInstance_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateComputeInstance_LabelsEntry.$type, CreateComputeInstance_LabelsEntry);

function createBaseCreateComputeInstance_MetadataEntry(): CreateComputeInstance_MetadataEntry {
  return { $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry", key: "", value: "" };
}

export const CreateComputeInstance_MetadataEntry = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry" as const,

  encode(message: CreateComputeInstance_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateComputeInstance_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateComputeInstance_MetadataEntry();
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

  fromJSON(object: any): CreateComputeInstance_MetadataEntry {
    return {
      $type: CreateComputeInstance_MetadataEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateComputeInstance_MetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateComputeInstance_MetadataEntry>, I>>(
    base?: I,
  ): CreateComputeInstance_MetadataEntry {
    return CreateComputeInstance_MetadataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateComputeInstance_MetadataEntry>, I>>(
    object: I,
  ): CreateComputeInstance_MetadataEntry {
    const message = createBaseCreateComputeInstance_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateComputeInstance_MetadataEntry.$type, CreateComputeInstance_MetadataEntry);

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
