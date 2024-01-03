/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "yandex.cloud.api";

/**
 * Operation is annotation for rpc that returns longrunning operation, describes
 * message types that will be returned in metadata [google.protobuf.Any], and
 * in response [google.protobuf.Any] (for successful operation).
 */
export interface Operation {
  $type: "yandex.cloud.api.Operation";
  /**
   * Optional. If present, rpc returns operation which metadata field will
   * contains message of specified type.
   */
  metadata: string;
  /**
   * Required. rpc returns operation, in case of success response will contains message of
   * specified field.
   */
  response: string;
}

function createBaseOperation(): Operation {
  return { $type: "yandex.cloud.api.Operation", metadata: "", response: "" };
}

export const Operation = {
  $type: "yandex.cloud.api.Operation" as const,

  encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== "") {
      writer.uint32(10).string(message.metadata);
    }
    if (message.response !== "") {
      writer.uint32(18).string(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Operation {
    return {
      $type: Operation.$type,
      metadata: isSet(object.metadata) ? globalThis.String(object.metadata) : "",
      response: isSet(object.response) ? globalThis.String(object.response) : "",
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    if (message.response !== "") {
      obj.response = message.response;
    }
    return obj;
  },

  create(base?: DeepPartial<Operation>): Operation {
    return Operation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Operation>): Operation {
    const message = createBaseOperation();
    message.metadata = object.metadata ?? "";
    message.response = object.response ?? "";
    return message;
  },
};

messageTypeRegistry.set(Operation.$type, Operation);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
