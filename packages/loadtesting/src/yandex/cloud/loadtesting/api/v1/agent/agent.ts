/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import { Status, statusFromJSON, statusToJSON } from "./status";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";

/** Load testing agent on which tests are executed. */
export interface Agent {
  $type: "yandex.cloud.loadtesting.api.v1.agent.Agent";
  /** ID of the agent. Generated at creation time. */
  id: string;
  /** ID of the folder that the agent belongs to. */
  folderId: string;
  /** Name of the agent. */
  name: string;
  /** Description of the agent. */
  description: string;
  /**
   * ID of the compute instance managed by the agent.
   *
   * Empty if there is no such instance (i.e. the case of external agent).
   */
  computeInstanceId: string;
  /** Status of the agent. */
  status: Status;
  /** List of errors reported by the agent. */
  errors: string[];
  /** ID of the test that is currently being executed by the agent. */
  currentJobId: string;
  /** Version of the agent. */
  agentVersionId: string;
}

function createBaseAgent(): Agent {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.agent.Agent",
    id: "",
    folderId: "",
    name: "",
    description: "",
    computeInstanceId: "",
    status: 0,
    errors: [],
    currentJobId: "",
    agentVersionId: "",
  };
}

export const Agent = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.Agent" as const,

  encode(message: Agent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(42).string(message.computeInstanceId);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    for (const v of message.errors) {
      writer.uint32(66).string(v!);
    }
    if (message.currentJobId !== "") {
      writer.uint32(74).string(message.currentJobId);
    }
    if (message.agentVersionId !== "") {
      writer.uint32(82).string(message.agentVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Agent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgent();
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

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.computeInstanceId = reader.string();
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

          message.errors.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.currentJobId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.agentVersionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Agent {
    return {
      $type: Agent.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      computeInstanceId: isSet(object.computeInstanceId) ? globalThis.String(object.computeInstanceId) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e: any) => globalThis.String(e)) : [],
      currentJobId: isSet(object.currentJobId) ? globalThis.String(object.currentJobId) : "",
      agentVersionId: isSet(object.agentVersionId) ? globalThis.String(object.agentVersionId) : "",
    };
  },

  toJSON(message: Agent): unknown {
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
    if (message.computeInstanceId !== "") {
      obj.computeInstanceId = message.computeInstanceId;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.errors?.length) {
      obj.errors = message.errors;
    }
    if (message.currentJobId !== "") {
      obj.currentJobId = message.currentJobId;
    }
    if (message.agentVersionId !== "") {
      obj.agentVersionId = message.agentVersionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Agent>, I>>(base?: I): Agent {
    return Agent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Agent>, I>>(object: I): Agent {
    const message = createBaseAgent();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.status = object.status ?? 0;
    message.errors = object.errors?.map((e) => e) || [];
    message.currentJobId = object.currentJobId ?? "";
    message.agentVersionId = object.agentVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Agent.$type, Agent);

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
