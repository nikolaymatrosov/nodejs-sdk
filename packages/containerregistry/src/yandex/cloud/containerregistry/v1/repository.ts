/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

/** A Repository resource. For more information, see [Repository](/docs/container-registry/concepts/repository). */
export interface Repository {
  $type: "yandex.cloud.containerregistry.v1.Repository";
  /**
   * Name of the repository.
   * The name is unique within the registry.
   */
  name: string;
  /** Output only. ID of the repository. */
  id: string;
}

function createBaseRepository(): Repository {
  return { $type: "yandex.cloud.containerregistry.v1.Repository", name: "", id: "" };
}

export const Repository = {
  $type: "yandex.cloud.containerregistry.v1.Repository" as const,

  encode(message: Repository, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Repository {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepository();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Repository {
    return {
      $type: Repository.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: Repository): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Repository>, I>>(base?: I): Repository {
    return Repository.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Repository>, I>>(object: I): Repository {
    const message = createBaseRepository();
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(Repository.$type, Repository);

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
