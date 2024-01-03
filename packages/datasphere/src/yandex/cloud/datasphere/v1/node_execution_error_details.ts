/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.datasphere.v1";

/** User code python execution's error details */
export interface NodeExecutionErrorDetails {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails";
  /** Error name */
  errorName: string;
  /** Error message */
  errorMessage: string;
  /** Error traceback */
  traceback: string[];
}

function createBaseNodeExecutionErrorDetails(): NodeExecutionErrorDetails {
  return {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails",
    errorName: "",
    errorMessage: "",
    traceback: [],
  };
}

export const NodeExecutionErrorDetails = {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails" as const,

  encode(message: NodeExecutionErrorDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.errorName !== "") {
      writer.uint32(10).string(message.errorName);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    for (const v of message.traceback) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeExecutionErrorDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeExecutionErrorDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.errorName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.traceback.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeExecutionErrorDetails {
    return {
      $type: NodeExecutionErrorDetails.$type,
      errorName: isSet(object.errorName) ? globalThis.String(object.errorName) : "",
      errorMessage: isSet(object.errorMessage) ? globalThis.String(object.errorMessage) : "",
      traceback: globalThis.Array.isArray(object?.traceback)
        ? object.traceback.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: NodeExecutionErrorDetails): unknown {
    const obj: any = {};
    if (message.errorName !== "") {
      obj.errorName = message.errorName;
    }
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    if (message.traceback?.length) {
      obj.traceback = message.traceback;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeExecutionErrorDetails>, I>>(base?: I): NodeExecutionErrorDetails {
    return NodeExecutionErrorDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeExecutionErrorDetails>, I>>(object: I): NodeExecutionErrorDetails {
    const message = createBaseNodeExecutionErrorDetails();
    message.errorName = object.errorName ?? "";
    message.errorMessage = object.errorMessage ?? "";
    message.traceback = object.traceback?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(NodeExecutionErrorDetails.$type, NodeExecutionErrorDetails);

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
