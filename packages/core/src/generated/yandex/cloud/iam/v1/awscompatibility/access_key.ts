/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.iam.v1.awscompatibility";

/**
 * An access key.
 * For more information, see [AWS-compatible access keys](/docs/iam/concepts/authorization/access-key).
 */
export interface AccessKey {
  $type: "yandex.cloud.iam.v1.awscompatibility.AccessKey";
  /**
   * ID of the AccessKey resource.
   * It is used to manage secret credentials: an access key ID and a secret access key.
   */
  id: string;
  /** ID of the service account that the access key belongs to. */
  serviceAccountId: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Description of the access key. 0-256 characters long. */
  description: string;
  /**
   * ID of the access key.
   * The key is AWS compatible.
   */
  keyId: string;
}

function createBaseAccessKey(): AccessKey {
  return {
    $type: "yandex.cloud.iam.v1.awscompatibility.AccessKey",
    id: "",
    serviceAccountId: "",
    createdAt: undefined,
    description: "",
    keyId: "",
  };
}

export const AccessKey = {
  $type: "yandex.cloud.iam.v1.awscompatibility.AccessKey" as const,

  encode(message: AccessKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(18).string(message.serviceAccountId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.keyId !== "") {
      writer.uint32(42).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessKey();
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

          message.serviceAccountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

          message.keyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessKey {
    return {
      $type: AccessKey.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: AccessKey): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.serviceAccountId !== "") {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create(base?: DeepPartial<AccessKey>): AccessKey {
    return AccessKey.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessKey>): AccessKey {
    const message = createBaseAccessKey();
    message.id = object.id ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.description = object.description ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AccessKey.$type, AccessKey);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
