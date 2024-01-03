/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.iam.v1";

/** A Key resource. For more information, see [Authorized keys](/docs/iam/concepts/authorization/key). */
export interface Key {
  $type: "yandex.cloud.iam.v1.Key";
  /** ID of the Key resource. */
  id: string;
  /** ID of the user account that the Key resource belongs to. */
  userAccountId?:
    | string
    | undefined;
  /** ID of the service account that the Key resource belongs to. */
  serviceAccountId?:
    | string
    | undefined;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** Description of the Key resource. 0-256 characters long. */
  description: string;
  /** An algorithm used to generate a key pair of the Key resource. */
  keyAlgorithm: Key_Algorithm;
  /** A public key of the Key resource. */
  publicKey: string;
}

export enum Key_Algorithm {
  ALGORITHM_UNSPECIFIED = 0,
  /** RSA_2048 - RSA with a 2048-bit key size. Default value. */
  RSA_2048 = 1,
  /** RSA_4096 - RSA with a 4096-bit key size. */
  RSA_4096 = 2,
  UNRECOGNIZED = -1,
}

export function key_AlgorithmFromJSON(object: any): Key_Algorithm {
  switch (object) {
    case 0:
    case "ALGORITHM_UNSPECIFIED":
      return Key_Algorithm.ALGORITHM_UNSPECIFIED;
    case 1:
    case "RSA_2048":
      return Key_Algorithm.RSA_2048;
    case 2:
    case "RSA_4096":
      return Key_Algorithm.RSA_4096;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Key_Algorithm.UNRECOGNIZED;
  }
}

export function key_AlgorithmToJSON(object: Key_Algorithm): string {
  switch (object) {
    case Key_Algorithm.ALGORITHM_UNSPECIFIED:
      return "ALGORITHM_UNSPECIFIED";
    case Key_Algorithm.RSA_2048:
      return "RSA_2048";
    case Key_Algorithm.RSA_4096:
      return "RSA_4096";
    case Key_Algorithm.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseKey(): Key {
  return {
    $type: "yandex.cloud.iam.v1.Key",
    id: "",
    userAccountId: undefined,
    serviceAccountId: undefined,
    createdAt: undefined,
    description: "",
    keyAlgorithm: 0,
    publicKey: "",
  };
}

export const Key = {
  $type: "yandex.cloud.iam.v1.Key" as const,

  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userAccountId !== undefined) {
      writer.uint32(18).string(message.userAccountId);
    }
    if (message.serviceAccountId !== undefined) {
      writer.uint32(26).string(message.serviceAccountId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.keyAlgorithm !== 0) {
      writer.uint32(48).int32(message.keyAlgorithm);
    }
    if (message.publicKey !== "") {
      writer.uint32(58).string(message.publicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();
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

          message.userAccountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serviceAccountId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.keyAlgorithm = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.publicKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Key {
    return {
      $type: Key.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      userAccountId: isSet(object.userAccountId) ? globalThis.String(object.userAccountId) : undefined,
      serviceAccountId: isSet(object.serviceAccountId) ? globalThis.String(object.serviceAccountId) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      keyAlgorithm: isSet(object.keyAlgorithm) ? key_AlgorithmFromJSON(object.keyAlgorithm) : 0,
      publicKey: isSet(object.publicKey) ? globalThis.String(object.publicKey) : "",
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userAccountId !== undefined) {
      obj.userAccountId = message.userAccountId;
    }
    if (message.serviceAccountId !== undefined) {
      obj.serviceAccountId = message.serviceAccountId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.keyAlgorithm !== 0) {
      obj.keyAlgorithm = key_AlgorithmToJSON(message.keyAlgorithm);
    }
    if (message.publicKey !== "") {
      obj.publicKey = message.publicKey;
    }
    return obj;
  },

  create(base?: DeepPartial<Key>): Key {
    return Key.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Key>): Key {
    const message = createBaseKey();
    message.id = object.id ?? "";
    message.userAccountId = object.userAccountId ?? undefined;
    message.serviceAccountId = object.serviceAccountId ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.description = object.description ?? "";
    message.keyAlgorithm = object.keyAlgorithm ?? 0;
    message.publicKey = object.publicKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(Key.$type, Key);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
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
