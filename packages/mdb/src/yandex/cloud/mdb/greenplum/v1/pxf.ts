/* eslint-disable */
import { BoolValue, Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export interface PXFConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig";
  /** Connection */
  connectionTimeout?: number | undefined;
  uploadTimeout?:
    | number
    | undefined;
  /** Thread pool */
  maxThreads?: number | undefined;
  poolAllowCoreThreadTimeout?: boolean | undefined;
  poolCoreSize?: number | undefined;
  poolQueueCapacity?: number | undefined;
  poolMaxSize?:
    | number
    | undefined;
  /** JVM */
  xmx?: number | undefined;
  xms?: number | undefined;
}

export interface PXFConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet";
  effectiveConfig?:
    | PXFConfig
    | undefined;
  /** User-defined settings */
  userConfig?:
    | PXFConfig
    | undefined;
  /** Default configuration */
  defaultConfig?: PXFConfig | undefined;
}

function createBasePXFConfig(): PXFConfig {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig",
    connectionTimeout: undefined,
    uploadTimeout: undefined,
    maxThreads: undefined,
    poolAllowCoreThreadTimeout: undefined,
    poolCoreSize: undefined,
    poolQueueCapacity: undefined,
    poolMaxSize: undefined,
    xmx: undefined,
    xms: undefined,
  };
}

export const PXFConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig" as const,

  encode(message: PXFConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.connectionTimeout! },
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.uploadTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.uploadTimeout! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.maxThreads !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxThreads! }, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.poolAllowCoreThreadTimeout !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.poolAllowCoreThreadTimeout! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.poolCoreSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.poolCoreSize! }, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.poolQueueCapacity !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.poolQueueCapacity! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.poolMaxSize !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.poolMaxSize! }, writer.uint32(58).fork())
        .ldelim();
    }
    if (message.xmx !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.xmx! }, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.xms !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.xms! }, writer.uint32(74).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uploadTimeout = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxThreads = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.poolAllowCoreThreadTimeout = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.poolCoreSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.poolQueueCapacity = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.poolMaxSize = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.xmx = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.xms = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFConfig {
    return {
      $type: PXFConfig.$type,
      connectionTimeout: isSet(object.connectionTimeout) ? Number(object.connectionTimeout) : undefined,
      uploadTimeout: isSet(object.uploadTimeout) ? Number(object.uploadTimeout) : undefined,
      maxThreads: isSet(object.maxThreads) ? Number(object.maxThreads) : undefined,
      poolAllowCoreThreadTimeout: isSet(object.poolAllowCoreThreadTimeout)
        ? Boolean(object.poolAllowCoreThreadTimeout)
        : undefined,
      poolCoreSize: isSet(object.poolCoreSize) ? Number(object.poolCoreSize) : undefined,
      poolQueueCapacity: isSet(object.poolQueueCapacity) ? Number(object.poolQueueCapacity) : undefined,
      poolMaxSize: isSet(object.poolMaxSize) ? Number(object.poolMaxSize) : undefined,
      xmx: isSet(object.xmx) ? Number(object.xmx) : undefined,
      xms: isSet(object.xms) ? Number(object.xms) : undefined,
    };
  },

  toJSON(message: PXFConfig): unknown {
    const obj: any = {};
    if (message.connectionTimeout !== undefined) {
      obj.connectionTimeout = message.connectionTimeout;
    }
    if (message.uploadTimeout !== undefined) {
      obj.uploadTimeout = message.uploadTimeout;
    }
    if (message.maxThreads !== undefined) {
      obj.maxThreads = message.maxThreads;
    }
    if (message.poolAllowCoreThreadTimeout !== undefined) {
      obj.poolAllowCoreThreadTimeout = message.poolAllowCoreThreadTimeout;
    }
    if (message.poolCoreSize !== undefined) {
      obj.poolCoreSize = message.poolCoreSize;
    }
    if (message.poolQueueCapacity !== undefined) {
      obj.poolQueueCapacity = message.poolQueueCapacity;
    }
    if (message.poolMaxSize !== undefined) {
      obj.poolMaxSize = message.poolMaxSize;
    }
    if (message.xmx !== undefined) {
      obj.xmx = message.xmx;
    }
    if (message.xms !== undefined) {
      obj.xms = message.xms;
    }
    return obj;
  },

  create(base?: DeepPartial<PXFConfig>): PXFConfig {
    return PXFConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFConfig>): PXFConfig {
    const message = createBasePXFConfig();
    message.connectionTimeout = object.connectionTimeout ?? undefined;
    message.uploadTimeout = object.uploadTimeout ?? undefined;
    message.maxThreads = object.maxThreads ?? undefined;
    message.poolAllowCoreThreadTimeout = object.poolAllowCoreThreadTimeout ?? undefined;
    message.poolCoreSize = object.poolCoreSize ?? undefined;
    message.poolQueueCapacity = object.poolQueueCapacity ?? undefined;
    message.poolMaxSize = object.poolMaxSize ?? undefined;
    message.xmx = object.xmx ?? undefined;
    message.xms = object.xms ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFConfig.$type, PXFConfig);

function createBasePXFConfigSet(): PXFConfigSet {
  return {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet",
    effectiveConfig: undefined,
    userConfig: undefined,
    defaultConfig: undefined,
  };
}

export const PXFConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet" as const,

  encode(message: PXFConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      PXFConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.userConfig !== undefined) {
      PXFConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      PXFConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFConfigSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePXFConfigSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effectiveConfig = PXFConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userConfig = PXFConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultConfig = PXFConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PXFConfigSet {
    return {
      $type: PXFConfigSet.$type,
      effectiveConfig: isSet(object.effectiveConfig) ? PXFConfig.fromJSON(object.effectiveConfig) : undefined,
      userConfig: isSet(object.userConfig) ? PXFConfig.fromJSON(object.userConfig) : undefined,
      defaultConfig: isSet(object.defaultConfig) ? PXFConfig.fromJSON(object.defaultConfig) : undefined,
    };
  },

  toJSON(message: PXFConfigSet): unknown {
    const obj: any = {};
    if (message.effectiveConfig !== undefined) {
      obj.effectiveConfig = PXFConfig.toJSON(message.effectiveConfig);
    }
    if (message.userConfig !== undefined) {
      obj.userConfig = PXFConfig.toJSON(message.userConfig);
    }
    if (message.defaultConfig !== undefined) {
      obj.defaultConfig = PXFConfig.toJSON(message.defaultConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<PXFConfigSet>): PXFConfigSet {
    return PXFConfigSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PXFConfigSet>): PXFConfigSet {
    const message = createBasePXFConfigSet();
    message.effectiveConfig = (object.effectiveConfig !== undefined && object.effectiveConfig !== null)
      ? PXFConfig.fromPartial(object.effectiveConfig)
      : undefined;
    message.userConfig = (object.userConfig !== undefined && object.userConfig !== null)
      ? PXFConfig.fromPartial(object.userConfig)
      : undefined;
    message.defaultConfig = (object.defaultConfig !== undefined && object.defaultConfig !== null)
      ? PXFConfig.fromPartial(object.defaultConfig)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFConfigSet.$type, PXFConfigSet);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
