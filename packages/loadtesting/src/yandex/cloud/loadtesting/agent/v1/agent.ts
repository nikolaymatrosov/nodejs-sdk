/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface AgentInstance {
  $type: "yandex.cloud.loadtesting.agent.v1.AgentInstance";
  id: string;
}

function createBaseAgentInstance(): AgentInstance {
  return { $type: "yandex.cloud.loadtesting.agent.v1.AgentInstance", id: "" };
}

export const AgentInstance = {
  $type: "yandex.cloud.loadtesting.agent.v1.AgentInstance" as const,

  encode(message: AgentInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AgentInstance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgentInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AgentInstance {
    return { $type: AgentInstance.$type, id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: AgentInstance): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AgentInstance>, I>>(base?: I): AgentInstance {
    return AgentInstance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AgentInstance>, I>>(object: I): AgentInstance {
    const message = createBaseAgentInstance();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(AgentInstance.$type, AgentInstance);

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
