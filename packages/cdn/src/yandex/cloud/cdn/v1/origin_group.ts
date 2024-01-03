/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Origin } from "./origin";

export const protobufPackage = "yandex.cloud.cdn.v1";

/** Origin group parameters. For details about the concept, see [documentation](/docs/cdn/concepts/origins#groups). */
export interface OriginGroup {
  $type: "yandex.cloud.cdn.v1.OriginGroup";
  /** ID of the origin group. Generated at creation time. */
  id: number;
  /** ID of the folder that the origin group belongs to. */
  folderId: string;
  /** Name of the origin group. */
  name: string;
  /**
   * This option have two possible conditions:
   * true - the option is active. In case the origin responds with 4XX or 5XX codes,
   *        use the next origin from the list.
   * false - the option is disabled.
   */
  useNext: boolean;
  /** List of origins. */
  origins: Origin[];
}

function createBaseOriginGroup(): OriginGroup {
  return { $type: "yandex.cloud.cdn.v1.OriginGroup", id: 0, folderId: "", name: "", useNext: false, origins: [] };
}

export const OriginGroup = {
  $type: "yandex.cloud.cdn.v1.OriginGroup" as const,

  encode(message: OriginGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.useNext === true) {
      writer.uint32(32).bool(message.useNext);
    }
    for (const v of message.origins) {
      Origin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
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
          if (tag !== 32) {
            break;
          }

          message.useNext = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.origins.push(Origin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OriginGroup {
    return {
      $type: OriginGroup.$type,
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      useNext: isSet(object.useNext) ? globalThis.Boolean(object.useNext) : false,
      origins: globalThis.Array.isArray(object?.origins) ? object.origins.map((e: any) => Origin.fromJSON(e)) : [],
    };
  },

  toJSON(message: OriginGroup): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.useNext === true) {
      obj.useNext = message.useNext;
    }
    if (message.origins?.length) {
      obj.origins = message.origins.map((e) => Origin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OriginGroup>, I>>(base?: I): OriginGroup {
    return OriginGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OriginGroup>, I>>(object: I): OriginGroup {
    const message = createBaseOriginGroup();
    message.id = object.id ?? 0;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.useNext = object.useNext ?? false;
    message.origins = object.origins?.map((e) => Origin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(OriginGroup.$type, OriginGroup);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
