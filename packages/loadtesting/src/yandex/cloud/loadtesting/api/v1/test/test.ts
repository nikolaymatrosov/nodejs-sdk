/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import { Details } from "./details";
import { SingleAgentConfiguration } from "./single_agent_configuration";
import { Summary } from "./summary";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/**
 * Load Test.
 *
 * In context of the service, Test represents a single testing task/job.
 */
export interface Test {
  $type: "yandex.cloud.loadtesting.api.v1.test.Test";
  /** ID of the test. Generated at creation time. */
  id: string;
  /**
   * Configuration of the test.
   *
   * A test can have multiple configurations if it can be
   * executed on multiple agents simultaneously. For more information, see
   * [Load testing using multiple agents](docs/load-testing/tutorials/loadtesting-multiply).
   */
  configurations: SingleAgentConfiguration[];
  /** Test meta information. Name, description, etc. */
  details?:
    | Details
    | undefined;
  /** Test execution information. */
  summary?:
    | Summary
    | undefined;
  /** ID of the folder that the test belongs to. */
  folderId: string;
}

function createBaseTest(): Test {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.test.Test",
    id: "",
    configurations: [],
    details: undefined,
    summary: undefined,
    folderId: "",
  };
}

export const Test = {
  $type: "yandex.cloud.loadtesting.api.v1.test.Test" as const,

  encode(message: Test, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.configurations) {
      SingleAgentConfiguration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(26).fork()).ldelim();
    }
    if (message.summary !== undefined) {
      Summary.encode(message.summary, writer.uint32(34).fork()).ldelim();
    }
    if (message.folderId !== "") {
      writer.uint32(42).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Test {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTest();
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

          message.configurations.push(SingleAgentConfiguration.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.summary = Summary.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.folderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Test {
    return {
      $type: Test.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      configurations: globalThis.Array.isArray(object?.configurations)
        ? object.configurations.map((e: any) => SingleAgentConfiguration.fromJSON(e))
        : [],
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      summary: isSet(object.summary) ? Summary.fromJSON(object.summary) : undefined,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
    };
  },

  toJSON(message: Test): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.configurations?.length) {
      obj.configurations = message.configurations.map((e) => SingleAgentConfiguration.toJSON(e));
    }
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.summary !== undefined) {
      obj.summary = Summary.toJSON(message.summary);
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Test>, I>>(base?: I): Test {
    return Test.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Test>, I>>(object: I): Test {
    const message = createBaseTest();
    message.id = object.id ?? "";
    message.configurations = object.configurations?.map((e) => SingleAgentConfiguration.fromPartial(e)) || [];
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.summary = (object.summary !== undefined && object.summary !== null)
      ? Summary.fromPartial(object.summary)
      : undefined;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Test.$type, Test);

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
