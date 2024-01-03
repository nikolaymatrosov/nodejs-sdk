/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/**
 * Agent selection criterion.
 *
 * The structure is used by service to determine on which agents a specific test should be executed.
 */
export interface AgentSelector {
  $type: "yandex.cloud.loadtesting.api.v1.test.AgentSelector";
  /** Selection by agent ID. */
  agentId?: string | undefined;
}

function createBaseAgentSelector(): AgentSelector {
  return { $type: "yandex.cloud.loadtesting.api.v1.test.AgentSelector", agentId: undefined };
}

export const AgentSelector = {
  $type: "yandex.cloud.loadtesting.api.v1.test.AgentSelector" as const,

  encode(message: AgentSelector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentId !== undefined) {
      writer.uint32(10).string(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AgentSelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgentSelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.agentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AgentSelector {
    return {
      $type: AgentSelector.$type,
      agentId: isSet(object.agentId) ? globalThis.String(object.agentId) : undefined,
    };
  },

  toJSON(message: AgentSelector): unknown {
    const obj: any = {};
    if (message.agentId !== undefined) {
      obj.agentId = message.agentId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AgentSelector>, I>>(base?: I): AgentSelector {
    return AgentSelector.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AgentSelector>, I>>(object: I): AgentSelector {
    const message = createBaseAgentSelector();
    message.agentId = object.agentId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AgentSelector.$type, AgentSelector);

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
