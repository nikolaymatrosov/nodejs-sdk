/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Status } from "../../../google/rpc/status";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "yandex.cloud.operation";

/** An Operation resource. For more information, see [Operation](/docs/api-design-guide/concepts/operation). */
export interface Operation {
  $type: "yandex.cloud.operation.Operation";
  /** ID of the operation. */
  id: string;
  /** Description of the operation. 0-256 characters long. */
  description: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** ID of the user or service account who initiated the operation. */
  createdBy: string;
  /** The time when the Operation resource was last modified. */
  modifiedAt?:
    | Date
    | undefined;
  /**
   * If the value is `false`, it means the operation is still in progress.
   * If `true`, the operation is completed, and either `error` or `response` is available.
   */
  done: boolean;
  /**
   * Service-specific metadata associated with the operation.
   * It typically contains the ID of the target resource that the operation is performed on.
   * Any method that returns a long-running operation should document the metadata type, if any.
   */
  metadata?:
    | Any
    | undefined;
  /** The error result of the operation in case of failure or cancellation. */
  error?:
    | Status
    | undefined;
  /**
   * The normal response of the operation in case of success.
   * If the original method returns no data on success, such as Delete,
   * the response is [google.protobuf.Empty].
   * If the original method is the standard Create/Update,
   * the response should be the target resource of the operation.
   * Any method that returns a long-running operation should document the response type, if any.
   */
  response?: Any | undefined;
}

function createBaseOperation(): Operation {
  return {
    $type: "yandex.cloud.operation.Operation",
    id: "",
    description: "",
    createdAt: undefined,
    createdBy: "",
    modifiedAt: undefined,
    done: false,
    metadata: undefined,
    error: undefined,
    response: undefined,
  };
}

export const Operation = {
  $type: "yandex.cloud.operation.Operation" as const,

  encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.createdBy !== "") {
      writer.uint32(34).string(message.createdBy);
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.done === true) {
      writer.uint32(48).bool(message.done);
    }
    if (message.metadata !== undefined) {
      Any.encode(message.metadata, writer.uint32(58).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(66).fork()).ldelim();
    }
    if (message.response !== undefined) {
      Any.encode(message.response, writer.uint32(74).fork()).ldelim();
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

          message.id = reader.string();
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.done = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.metadata = Any.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.response = Any.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      modifiedAt: isSet(object.modifiedAt) ? fromJsonTimestamp(object.modifiedAt) : undefined,
      done: isSet(object.done) ? globalThis.Boolean(object.done) : false,
      metadata: isSet(object.metadata) ? Any.fromJSON(object.metadata) : undefined,
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
      response: isSet(object.response) ? Any.fromJSON(object.response) : undefined,
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.modifiedAt !== undefined) {
      obj.modifiedAt = message.modifiedAt.toISOString();
    }
    if (message.done === true) {
      obj.done = message.done;
    }
    if (message.metadata !== undefined) {
      obj.metadata = Any.toJSON(message.metadata);
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    if (message.response !== undefined) {
      obj.response = Any.toJSON(message.response);
    }
    return obj;
  },

  create(base?: DeepPartial<Operation>): Operation {
    return Operation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Operation>): Operation {
    const message = createBaseOperation();
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.createdBy = object.createdBy ?? "";
    message.modifiedAt = object.modifiedAt ?? undefined;
    message.done = object.done ?? false;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Any.fromPartial(object.metadata)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? Any.fromPartial(object.response)
      : undefined;
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
