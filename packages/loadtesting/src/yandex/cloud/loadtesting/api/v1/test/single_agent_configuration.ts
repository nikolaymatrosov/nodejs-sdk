/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import { AgentSelector } from "./agent_selector";
import { FilePointer } from "./file_pointer";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/** Configuration of a test. */
export interface SingleAgentConfiguration {
  $type: "yandex.cloud.loadtesting.api.v1.test.SingleAgentConfiguration";
  /** ID of the config. */
  configId: string;
  /** Agent selection criterion. */
  agentSelector?:
    | AgentSelector
    | undefined;
  /**
   * Additional files to be used during test execution, represented as `rel_path:file` pairs.
   *
   * `rel_path` can be either a simple file name, a relative path, or absolute path. Files are
   * downloaded by the agent to appropriate location.
   *
   * Use cases include:
   * - [Test Data files](https://cloud.yandex.com/en-ru/docs/load-testing/concepts/payload).
   * - Custom Pandora executable.
   * - JMeter executable or ".jmx" scenario.
   * - etc.
   */
  files: { [key: string]: FilePointer };
}

export interface SingleAgentConfiguration_FilesEntry {
  $type: "yandex.cloud.loadtesting.api.v1.test.SingleAgentConfiguration.FilesEntry";
  key: string;
  value?: FilePointer | undefined;
}

function createBaseSingleAgentConfiguration(): SingleAgentConfiguration {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.test.SingleAgentConfiguration",
    configId: "",
    agentSelector: undefined,
    files: {},
  };
}

export const SingleAgentConfiguration = {
  $type: "yandex.cloud.loadtesting.api.v1.test.SingleAgentConfiguration" as const,

  encode(message: SingleAgentConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configId !== "") {
      writer.uint32(10).string(message.configId);
    }
    if (message.agentSelector !== undefined) {
      AgentSelector.encode(message.agentSelector, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.files).forEach(([key, value]) => {
      SingleAgentConfiguration_FilesEntry.encode({
        $type: "yandex.cloud.loadtesting.api.v1.test.SingleAgentConfiguration.FilesEntry",
        key: key as any,
        value,
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SingleAgentConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleAgentConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.agentSelector = AgentSelector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = SingleAgentConfiguration_FilesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.files[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SingleAgentConfiguration {
    return {
      $type: SingleAgentConfiguration.$type,
      configId: isSet(object.configId) ? globalThis.String(object.configId) : "",
      agentSelector: isSet(object.agentSelector) ? AgentSelector.fromJSON(object.agentSelector) : undefined,
      files: isObject(object.files)
        ? Object.entries(object.files).reduce<{ [key: string]: FilePointer }>((acc, [key, value]) => {
          acc[key] = FilePointer.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SingleAgentConfiguration): unknown {
    const obj: any = {};
    if (message.configId !== "") {
      obj.configId = message.configId;
    }
    if (message.agentSelector !== undefined) {
      obj.agentSelector = AgentSelector.toJSON(message.agentSelector);
    }
    if (message.files) {
      const entries = Object.entries(message.files);
      if (entries.length > 0) {
        obj.files = {};
        entries.forEach(([k, v]) => {
          obj.files[k] = FilePointer.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SingleAgentConfiguration>, I>>(base?: I): SingleAgentConfiguration {
    return SingleAgentConfiguration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SingleAgentConfiguration>, I>>(object: I): SingleAgentConfiguration {
    const message = createBaseSingleAgentConfiguration();
    message.configId = object.configId ?? "";
    message.agentSelector = (object.agentSelector !== undefined && object.agentSelector !== null)
      ? AgentSelector.fromPartial(object.agentSelector)
      : undefined;
    message.files = Object.entries(object.files ?? {}).reduce<{ [key: string]: FilePointer }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FilePointer.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(SingleAgentConfiguration.$type, SingleAgentConfiguration);

function createBaseSingleAgentConfiguration_FilesEntry(): SingleAgentConfiguration_FilesEntry {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.test.SingleAgentConfiguration.FilesEntry",
    key: "",
    value: undefined,
  };
}

export const SingleAgentConfiguration_FilesEntry = {
  $type: "yandex.cloud.loadtesting.api.v1.test.SingleAgentConfiguration.FilesEntry" as const,

  encode(message: SingleAgentConfiguration_FilesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FilePointer.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SingleAgentConfiguration_FilesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleAgentConfiguration_FilesEntry();
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

          message.value = FilePointer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SingleAgentConfiguration_FilesEntry {
    return {
      $type: SingleAgentConfiguration_FilesEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? FilePointer.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SingleAgentConfiguration_FilesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = FilePointer.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SingleAgentConfiguration_FilesEntry>, I>>(
    base?: I,
  ): SingleAgentConfiguration_FilesEntry {
    return SingleAgentConfiguration_FilesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SingleAgentConfiguration_FilesEntry>, I>>(
    object: I,
  ): SingleAgentConfiguration_FilesEntry {
    const message = createBaseSingleAgentConfiguration_FilesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? FilePointer.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SingleAgentConfiguration_FilesEntry.$type, SingleAgentConfiguration_FilesEntry);

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
