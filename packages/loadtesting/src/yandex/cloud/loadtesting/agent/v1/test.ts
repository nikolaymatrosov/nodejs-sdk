/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface Test {
  $type: "yandex.cloud.loadtesting.agent.v1.Test";
  id: string;
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  createdAt?: Date | undefined;
  startedAt?: Date | undefined;
  finishedAt?: Date | undefined;
  updatedAt?: Date | undefined;
  generator: Test_Generator;
  /** AgentInstance ID where Test is running. */
  agentInstanceId: string;
  /** Target VM. */
  targetAddress: string;
  targetPort: number;
  /** Version of object under test. */
  targetVersion: string;
  /** Test details */
  config: string;
  ammoUrls?: string | undefined;
  ammoId?: string | undefined;
  cases: string[];
  status: Test_Status;
  errors: string[];
  favorite: boolean;
}

export enum Test_Status {
  STATUS_UNSPECIFIED = 0,
  CREATED = 1,
  INITIATED = 2,
  PREPARING = 3,
  RUNNING = 4,
  FINISHING = 5,
  DONE = 6,
  POST_PROCESSING = 7,
  FAILED = 8,
  STOPPING = 9,
  STOPPED = 10,
  AUTOSTOPPED = 11,
  WAITING = 12,
  DELETING = 13,
  LOST = 14,
  UNRECOGNIZED = -1,
}

export function test_StatusFromJSON(object: any): Test_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Test_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATED":
      return Test_Status.CREATED;
    case 2:
    case "INITIATED":
      return Test_Status.INITIATED;
    case 3:
    case "PREPARING":
      return Test_Status.PREPARING;
    case 4:
    case "RUNNING":
      return Test_Status.RUNNING;
    case 5:
    case "FINISHING":
      return Test_Status.FINISHING;
    case 6:
    case "DONE":
      return Test_Status.DONE;
    case 7:
    case "POST_PROCESSING":
      return Test_Status.POST_PROCESSING;
    case 8:
    case "FAILED":
      return Test_Status.FAILED;
    case 9:
    case "STOPPING":
      return Test_Status.STOPPING;
    case 10:
    case "STOPPED":
      return Test_Status.STOPPED;
    case 11:
    case "AUTOSTOPPED":
      return Test_Status.AUTOSTOPPED;
    case 12:
    case "WAITING":
      return Test_Status.WAITING;
    case 13:
    case "DELETING":
      return Test_Status.DELETING;
    case 14:
    case "LOST":
      return Test_Status.LOST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Test_Status.UNRECOGNIZED;
  }
}

export function test_StatusToJSON(object: Test_Status): string {
  switch (object) {
    case Test_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Test_Status.CREATED:
      return "CREATED";
    case Test_Status.INITIATED:
      return "INITIATED";
    case Test_Status.PREPARING:
      return "PREPARING";
    case Test_Status.RUNNING:
      return "RUNNING";
    case Test_Status.FINISHING:
      return "FINISHING";
    case Test_Status.DONE:
      return "DONE";
    case Test_Status.POST_PROCESSING:
      return "POST_PROCESSING";
    case Test_Status.FAILED:
      return "FAILED";
    case Test_Status.STOPPING:
      return "STOPPING";
    case Test_Status.STOPPED:
      return "STOPPED";
    case Test_Status.AUTOSTOPPED:
      return "AUTOSTOPPED";
    case Test_Status.WAITING:
      return "WAITING";
    case Test_Status.DELETING:
      return "DELETING";
    case Test_Status.LOST:
      return "LOST";
    case Test_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Test_Generator {
  GENERATOR_UNSPECIFIED = 0,
  PANDORA = 1,
  PHANTOM = 2,
  JMETER = 3,
  UNRECOGNIZED = -1,
}

export function test_GeneratorFromJSON(object: any): Test_Generator {
  switch (object) {
    case 0:
    case "GENERATOR_UNSPECIFIED":
      return Test_Generator.GENERATOR_UNSPECIFIED;
    case 1:
    case "PANDORA":
      return Test_Generator.PANDORA;
    case 2:
    case "PHANTOM":
      return Test_Generator.PHANTOM;
    case 3:
    case "JMETER":
      return Test_Generator.JMETER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Test_Generator.UNRECOGNIZED;
  }
}

export function test_GeneratorToJSON(object: Test_Generator): string {
  switch (object) {
    case Test_Generator.GENERATOR_UNSPECIFIED:
      return "GENERATOR_UNSPECIFIED";
    case Test_Generator.PANDORA:
      return "PANDORA";
    case Test_Generator.PHANTOM:
      return "PHANTOM";
    case Test_Generator.JMETER:
      return "JMETER";
    case Test_Generator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Test_LabelsEntry {
  $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry";
  key: string;
  value: string;
}

function createBaseTest(): Test {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.Test",
    id: "",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    createdAt: undefined,
    startedAt: undefined,
    finishedAt: undefined,
    updatedAt: undefined,
    generator: 0,
    agentInstanceId: "",
    targetAddress: "",
    targetPort: 0,
    targetVersion: "",
    config: "",
    ammoUrls: undefined,
    ammoId: undefined,
    cases: [],
    status: 0,
    errors: [],
    favorite: false,
  };
}

export const Test = {
  $type: "yandex.cloud.loadtesting.agent.v1.Test" as const,

  encode(message: Test, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Test_LabelsEntry.encode(
        { $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry", key: key as any, value },
        writer.uint32(42).fork(),
      ).ldelim();
    });
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.finishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.generator !== 0) {
      writer.uint32(80).int32(message.generator);
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(90).string(message.agentInstanceId);
    }
    if (message.targetAddress !== "") {
      writer.uint32(98).string(message.targetAddress);
    }
    if (message.targetPort !== 0) {
      writer.uint32(104).int64(message.targetPort);
    }
    if (message.targetVersion !== "") {
      writer.uint32(114).string(message.targetVersion);
    }
    if (message.config !== "") {
      writer.uint32(122).string(message.config);
    }
    if (message.ammoUrls !== undefined) {
      writer.uint32(130).string(message.ammoUrls);
    }
    if (message.ammoId !== undefined) {
      writer.uint32(138).string(message.ammoId);
    }
    for (const v of message.cases) {
      writer.uint32(146).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(152).int32(message.status);
    }
    for (const v of message.errors) {
      writer.uint32(162).string(v!);
    }
    if (message.favorite === true) {
      writer.uint32(168).bool(message.favorite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Test {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTest();
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

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
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

          const entry5 = Test_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.finishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.generator = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.agentInstanceId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.targetAddress = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.targetPort = longToNumber(reader.int64() as Long);
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.targetVersion = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.config = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.ammoUrls = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.ammoId = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.cases.push(reader.string());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.errors.push(reader.string());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.favorite = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Test {
    return {
      $type: Test.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      startedAt: isSet(object.startedAt) ? fromJsonTimestamp(object.startedAt) : undefined,
      finishedAt: isSet(object.finishedAt) ? fromJsonTimestamp(object.finishedAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      generator: isSet(object.generator) ? test_GeneratorFromJSON(object.generator) : 0,
      agentInstanceId: isSet(object.agentInstanceId) ? globalThis.String(object.agentInstanceId) : "",
      targetAddress: isSet(object.targetAddress) ? globalThis.String(object.targetAddress) : "",
      targetPort: isSet(object.targetPort) ? globalThis.Number(object.targetPort) : 0,
      targetVersion: isSet(object.targetVersion) ? globalThis.String(object.targetVersion) : "",
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      ammoUrls: isSet(object.ammoUrls) ? globalThis.String(object.ammoUrls) : undefined,
      ammoId: isSet(object.ammoId) ? globalThis.String(object.ammoId) : undefined,
      cases: globalThis.Array.isArray(object?.cases) ? object.cases.map((e: any) => globalThis.String(e)) : [],
      status: isSet(object.status) ? test_StatusFromJSON(object.status) : 0,
      errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e: any) => globalThis.String(e)) : [],
      favorite: isSet(object.favorite) ? globalThis.Boolean(object.favorite) : false,
    };
  },

  toJSON(message: Test): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.startedAt !== undefined) {
      obj.startedAt = message.startedAt.toISOString();
    }
    if (message.finishedAt !== undefined) {
      obj.finishedAt = message.finishedAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.generator !== 0) {
      obj.generator = test_GeneratorToJSON(message.generator);
    }
    if (message.agentInstanceId !== "") {
      obj.agentInstanceId = message.agentInstanceId;
    }
    if (message.targetAddress !== "") {
      obj.targetAddress = message.targetAddress;
    }
    if (message.targetPort !== 0) {
      obj.targetPort = Math.round(message.targetPort);
    }
    if (message.targetVersion !== "") {
      obj.targetVersion = message.targetVersion;
    }
    if (message.config !== "") {
      obj.config = message.config;
    }
    if (message.ammoUrls !== undefined) {
      obj.ammoUrls = message.ammoUrls;
    }
    if (message.ammoId !== undefined) {
      obj.ammoId = message.ammoId;
    }
    if (message.cases?.length) {
      obj.cases = message.cases;
    }
    if (message.status !== 0) {
      obj.status = test_StatusToJSON(message.status);
    }
    if (message.errors?.length) {
      obj.errors = message.errors;
    }
    if (message.favorite === true) {
      obj.favorite = message.favorite;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Test>, I>>(base?: I): Test {
    return Test.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Test>, I>>(object: I): Test {
    const message = createBaseTest();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.createdAt = object.createdAt ?? undefined;
    message.startedAt = object.startedAt ?? undefined;
    message.finishedAt = object.finishedAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.generator = object.generator ?? 0;
    message.agentInstanceId = object.agentInstanceId ?? "";
    message.targetAddress = object.targetAddress ?? "";
    message.targetPort = object.targetPort ?? 0;
    message.targetVersion = object.targetVersion ?? "";
    message.config = object.config ?? "";
    message.ammoUrls = object.ammoUrls ?? undefined;
    message.ammoId = object.ammoId ?? undefined;
    message.cases = object.cases?.map((e) => e) || [];
    message.status = object.status ?? 0;
    message.errors = object.errors?.map((e) => e) || [];
    message.favorite = object.favorite ?? false;
    return message;
  },
};

messageTypeRegistry.set(Test.$type, Test);

function createBaseTest_LabelsEntry(): Test_LabelsEntry {
  return { $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry", key: "", value: "" };
}

export const Test_LabelsEntry = {
  $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry" as const,

  encode(message: Test_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Test_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTest_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Test_LabelsEntry {
    return {
      $type: Test_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Test_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Test_LabelsEntry>, I>>(base?: I): Test_LabelsEntry {
    return Test_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Test_LabelsEntry>, I>>(object: I): Test_LabelsEntry {
    const message = createBaseTest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Test_LabelsEntry.$type, Test_LabelsEntry);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
