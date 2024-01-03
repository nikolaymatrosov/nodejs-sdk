/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import { ImbalancePoint } from "./imbalance_point";
import { Status, statusFromJSON, statusToJSON } from "./status";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/** Process of test and some results */
export interface Summary {
  $type: "yandex.cloud.loadtesting.api.v1.test.Summary";
  /** Status of the test. */
  status: Status;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** UA or SA that created the test. */
  createdBy: string;
  /**
   * Test start timestamp.
   *
   * Empty if the test has not been started yet.
   */
  startedAt?:
    | Date
    | undefined;
  /**
   * Test finish timestamp.
   *
   * Empty if the test has not been finished yet.
   */
  finishedAt?:
    | Date
    | undefined;
  /** Indicates whether the test is finished. */
  isFinished: boolean;
  /** Error message. */
  error: string;
  /**
   * Detected imbalance point.
   *
   * Contains information about a state at the moment it has been
   * [auto-stopped](/docs/load-testing/concepts/auto-stop).
   *
   * Empty if no auto-stop occured.
   */
  imbalancePoint?: ImbalancePoint | undefined;
}

function createBaseSummary(): Summary {
  return {
    $type: "yandex.cloud.loadtesting.api.v1.test.Summary",
    status: 0,
    createdAt: undefined,
    createdBy: "",
    startedAt: undefined,
    finishedAt: undefined,
    isFinished: false,
    error: "",
    imbalancePoint: undefined,
  };
}

export const Summary = {
  $type: "yandex.cloud.loadtesting.api.v1.test.Summary" as const,

  encode(message: Summary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.createdBy !== "") {
      writer.uint32(26).string(message.createdBy);
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.finishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.isFinished === true) {
      writer.uint32(48).bool(message.isFinished);
    }
    if (message.error !== "") {
      writer.uint32(58).string(message.error);
    }
    if (message.imbalancePoint !== undefined) {
      ImbalancePoint.encode(message.imbalancePoint, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Summary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.finishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isFinished = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.error = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.imbalancePoint = ImbalancePoint.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Summary {
    return {
      $type: Summary.$type,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      startedAt: isSet(object.startedAt) ? fromJsonTimestamp(object.startedAt) : undefined,
      finishedAt: isSet(object.finishedAt) ? fromJsonTimestamp(object.finishedAt) : undefined,
      isFinished: isSet(object.isFinished) ? globalThis.Boolean(object.isFinished) : false,
      error: isSet(object.error) ? globalThis.String(object.error) : "",
      imbalancePoint: isSet(object.imbalancePoint) ? ImbalancePoint.fromJSON(object.imbalancePoint) : undefined,
    };
  },

  toJSON(message: Summary): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.startedAt !== undefined) {
      obj.startedAt = message.startedAt.toISOString();
    }
    if (message.finishedAt !== undefined) {
      obj.finishedAt = message.finishedAt.toISOString();
    }
    if (message.isFinished === true) {
      obj.isFinished = message.isFinished;
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    if (message.imbalancePoint !== undefined) {
      obj.imbalancePoint = ImbalancePoint.toJSON(message.imbalancePoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Summary>, I>>(base?: I): Summary {
    return Summary.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Summary>, I>>(object: I): Summary {
    const message = createBaseSummary();
    message.status = object.status ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.createdBy = object.createdBy ?? "";
    message.startedAt = object.startedAt ?? undefined;
    message.finishedAt = object.finishedAt ?? undefined;
    message.isFinished = object.isFinished ?? false;
    message.error = object.error ?? "";
    message.imbalancePoint = (object.imbalancePoint !== undefined && object.imbalancePoint !== null)
      ? ImbalancePoint.fromPartial(object.imbalancePoint)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Summary.$type, Summary);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

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
