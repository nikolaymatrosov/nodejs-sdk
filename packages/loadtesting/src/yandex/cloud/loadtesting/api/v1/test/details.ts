/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import { Tag } from "../common/tag";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/** Test meta information. */
export interface Details {
  $type: "yandex.cloud.loadtesting.api.v1.test.Details";
  /** Name of the test. */
  name: string;
  /** Description of the test. */
  description: string;
  /** Tags assigned to the test. */
  tags: Tag[];
  /** ID of the logging group to which test artifacts are uploaded. */
  loggingLogGroupId: string;
}

function createBaseDetails(): Details {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.test.Details",
    name: "",
    description: "",
    tags: [],
    loggingLogGroupId: "",
  };
}

export const Details = {
  $type: "yandex.cloud.loadtesting.api.v1.test.Details" as const,

  encode(message: Details, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.loggingLogGroupId !== "") {
      writer.uint32(34).string(message.loggingLogGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Details {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetails();
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

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tags.push(Tag.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.loggingLogGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Details {
    return {
      $type: Details.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e: any) => Tag.fromJSON(e)) : [],
      loggingLogGroupId: isSet(object.loggingLogGroupId) ? globalThis.String(object.loggingLogGroupId) : "",
    };
  },

  toJSON(message: Details): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.tags?.length) {
      obj.tags = message.tags.map((e) => Tag.toJSON(e));
    }
    if (message.loggingLogGroupId !== "") {
      obj.loggingLogGroupId = message.loggingLogGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Details>, I>>(base?: I): Details {
    return Details.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Details>, I>>(object: I): Details {
    const message = createBaseDetails();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
    message.loggingLogGroupId = object.loggingLogGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Details.$type, Details);

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
