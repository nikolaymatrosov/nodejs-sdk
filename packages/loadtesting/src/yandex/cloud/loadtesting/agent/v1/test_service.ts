/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { FieldMask } from "@yandex-cloud/core/dist/generated/google/protobuf/field_mask";
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import {
  AmmoType,
  ammoTypeFromJSON,
  ammoTypeToJSON,
  Schedule,
  Test,
  Test_Generator,
  test_GeneratorFromJSON,
  test_GeneratorToJSON,
} from "./test";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface GetTestRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest";
  testId: string;
}

export interface CreateTestRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest";
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  generator: Test_Generator;
  agentInstanceId: string;
  /**
   * Fields for TestConfig creation. These fields have the higher priority than yaml config.
   * These fields are taken from Form
   */
  targetAddress: string;
  targetPort: number;
  targetVersion: string;
  instances: number;
  loadSchedule?: Schedule | undefined;
  config: string;
  ammoId: string;
  ammoUrls: string[];
  ammoHeaders: string[];
  ammoType: AmmoType;
  ssl: boolean;
  imbalancePoint: number;
  imbalanceTs: number;
  loggingLogGroupId: string;
}

export interface CreateTestRequest_LabelsEntry {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateTestMetadata {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata";
  testId: string;
}

export interface UpdateTestRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest";
  testId: string;
  updateMask?: string[] | undefined;
  name: string;
  description: string;
  labels: { [key: string]: string };
  favorite: boolean;
  targetVersion: string;
  imbalancePoint: number;
  imbalanceTs: number;
  imbalanceComment: string;
}

export interface UpdateTestRequest_LabelsEntry {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateTestMetadata {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata";
  testId: string;
}

function createBaseGetTestRequest(): GetTestRequest {
  return { $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest", testId: "" };
}

export const GetTestRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest" as const,

  encode(message: GetTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTestRequest {
    return { $type: GetTestRequest.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: GetTestRequest): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTestRequest>, I>>(base?: I): GetTestRequest {
    return GetTestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTestRequest>, I>>(object: I): GetTestRequest {
    const message = createBaseGetTestRequest();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTestRequest.$type, GetTestRequest);

function createBaseCreateTestRequest(): CreateTestRequest {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    generator: 0,
    agentInstanceId: "",
    targetAddress: "",
    targetPort: 0,
    targetVersion: "",
    instances: 0,
    loadSchedule: undefined,
    config: "",
    ammoId: "",
    ammoUrls: [],
    ammoHeaders: [],
    ammoType: 0,
    ssl: false,
    imbalancePoint: 0,
    imbalanceTs: 0,
    loggingLogGroupId: "",
  };
}

export const CreateTestRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest" as const,

  encode(message: CreateTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateTestRequest_LabelsEntry.encode({
        $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.generator !== 0) {
      writer.uint32(40).int32(message.generator);
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(50).string(message.agentInstanceId);
    }
    if (message.targetAddress !== "") {
      writer.uint32(58).string(message.targetAddress);
    }
    if (message.targetPort !== 0) {
      writer.uint32(64).int64(message.targetPort);
    }
    if (message.targetVersion !== "") {
      writer.uint32(74).string(message.targetVersion);
    }
    if (message.instances !== 0) {
      writer.uint32(80).int64(message.instances);
    }
    if (message.loadSchedule !== undefined) {
      Schedule.encode(message.loadSchedule, writer.uint32(90).fork()).ldelim();
    }
    if (message.config !== "") {
      writer.uint32(98).string(message.config);
    }
    if (message.ammoId !== "") {
      writer.uint32(106).string(message.ammoId);
    }
    for (const v of message.ammoUrls) {
      writer.uint32(114).string(v!);
    }
    for (const v of message.ammoHeaders) {
      writer.uint32(122).string(v!);
    }
    if (message.ammoType !== 0) {
      writer.uint32(128).int32(message.ammoType);
    }
    if (message.ssl === true) {
      writer.uint32(136).bool(message.ssl);
    }
    if (message.imbalancePoint !== 0) {
      writer.uint32(144).int64(message.imbalancePoint);
    }
    if (message.imbalanceTs !== 0) {
      writer.uint32(152).int64(message.imbalanceTs);
    }
    if (message.loggingLogGroupId !== "") {
      writer.uint32(162).string(message.loggingLogGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = CreateTestRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.generator = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.agentInstanceId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.targetAddress = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.targetPort = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.targetVersion = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.instances = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.loadSchedule = Schedule.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.config = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.ammoId = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.ammoUrls.push(reader.string());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.ammoHeaders.push(reader.string());
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.ammoType = reader.int32() as any;
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.ssl = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.imbalancePoint = longToNumber(reader.int64() as Long);
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.imbalanceTs = longToNumber(reader.int64() as Long);
          continue;
        case 20:
          if (tag !== 162) {
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

  fromJSON(object: any): CreateTestRequest {
    return {
      $type: CreateTestRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      generator: isSet(object.generator) ? test_GeneratorFromJSON(object.generator) : 0,
      agentInstanceId: isSet(object.agentInstanceId) ? globalThis.String(object.agentInstanceId) : "",
      targetAddress: isSet(object.targetAddress) ? globalThis.String(object.targetAddress) : "",
      targetPort: isSet(object.targetPort) ? globalThis.Number(object.targetPort) : 0,
      targetVersion: isSet(object.targetVersion) ? globalThis.String(object.targetVersion) : "",
      instances: isSet(object.instances) ? globalThis.Number(object.instances) : 0,
      loadSchedule: isSet(object.loadSchedule) ? Schedule.fromJSON(object.loadSchedule) : undefined,
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      ammoId: isSet(object.ammoId) ? globalThis.String(object.ammoId) : "",
      ammoUrls: globalThis.Array.isArray(object?.ammoUrls) ? object.ammoUrls.map((e: any) => globalThis.String(e)) : [],
      ammoHeaders: globalThis.Array.isArray(object?.ammoHeaders)
        ? object.ammoHeaders.map((e: any) => globalThis.String(e))
        : [],
      ammoType: isSet(object.ammoType) ? ammoTypeFromJSON(object.ammoType) : 0,
      ssl: isSet(object.ssl) ? globalThis.Boolean(object.ssl) : false,
      imbalancePoint: isSet(object.imbalancePoint) ? globalThis.Number(object.imbalancePoint) : 0,
      imbalanceTs: isSet(object.imbalanceTs) ? globalThis.Number(object.imbalanceTs) : 0,
      loggingLogGroupId: isSet(object.loggingLogGroupId) ? globalThis.String(object.loggingLogGroupId) : "",
    };
  },

  toJSON(message: CreateTestRequest): unknown {
    const obj: any = {};
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
    if (message.instances !== 0) {
      obj.instances = Math.round(message.instances);
    }
    if (message.loadSchedule !== undefined) {
      obj.loadSchedule = Schedule.toJSON(message.loadSchedule);
    }
    if (message.config !== "") {
      obj.config = message.config;
    }
    if (message.ammoId !== "") {
      obj.ammoId = message.ammoId;
    }
    if (message.ammoUrls?.length) {
      obj.ammoUrls = message.ammoUrls;
    }
    if (message.ammoHeaders?.length) {
      obj.ammoHeaders = message.ammoHeaders;
    }
    if (message.ammoType !== 0) {
      obj.ammoType = ammoTypeToJSON(message.ammoType);
    }
    if (message.ssl === true) {
      obj.ssl = message.ssl;
    }
    if (message.imbalancePoint !== 0) {
      obj.imbalancePoint = Math.round(message.imbalancePoint);
    }
    if (message.imbalanceTs !== 0) {
      obj.imbalanceTs = Math.round(message.imbalanceTs);
    }
    if (message.loggingLogGroupId !== "") {
      obj.loggingLogGroupId = message.loggingLogGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTestRequest>, I>>(base?: I): CreateTestRequest {
    return CreateTestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTestRequest>, I>>(object: I): CreateTestRequest {
    const message = createBaseCreateTestRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.generator = object.generator ?? 0;
    message.agentInstanceId = object.agentInstanceId ?? "";
    message.targetAddress = object.targetAddress ?? "";
    message.targetPort = object.targetPort ?? 0;
    message.targetVersion = object.targetVersion ?? "";
    message.instances = object.instances ?? 0;
    message.loadSchedule = (object.loadSchedule !== undefined && object.loadSchedule !== null)
      ? Schedule.fromPartial(object.loadSchedule)
      : undefined;
    message.config = object.config ?? "";
    message.ammoId = object.ammoId ?? "";
    message.ammoUrls = object.ammoUrls?.map((e) => e) || [];
    message.ammoHeaders = object.ammoHeaders?.map((e) => e) || [];
    message.ammoType = object.ammoType ?? 0;
    message.ssl = object.ssl ?? false;
    message.imbalancePoint = object.imbalancePoint ?? 0;
    message.imbalanceTs = object.imbalanceTs ?? 0;
    message.loggingLogGroupId = object.loggingLogGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTestRequest.$type, CreateTestRequest);

function createBaseCreateTestRequest_LabelsEntry(): CreateTestRequest_LabelsEntry {
  return { $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry", key: "", value: "" };
}

export const CreateTestRequest_LabelsEntry = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry" as const,

  encode(message: CreateTestRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTestRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTestRequest_LabelsEntry();
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

  fromJSON(object: any): CreateTestRequest_LabelsEntry {
    return {
      $type: CreateTestRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateTestRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTestRequest_LabelsEntry>, I>>(base?: I): CreateTestRequest_LabelsEntry {
    return CreateTestRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTestRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateTestRequest_LabelsEntry {
    const message = createBaseCreateTestRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTestRequest_LabelsEntry.$type, CreateTestRequest_LabelsEntry);

function createBaseCreateTestMetadata(): CreateTestMetadata {
  return { $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata", testId: "" };
}

export const CreateTestMetadata = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata" as const,

  encode(message: CreateTestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTestMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTestMetadata {
    return { $type: CreateTestMetadata.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: CreateTestMetadata): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTestMetadata>, I>>(base?: I): CreateTestMetadata {
    return CreateTestMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTestMetadata>, I>>(object: I): CreateTestMetadata {
    const message = createBaseCreateTestMetadata();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTestMetadata.$type, CreateTestMetadata);

function createBaseUpdateTestRequest(): UpdateTestRequest {
  return {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest",
    testId: "",
    updateMask: undefined,
    name: "",
    description: "",
    labels: {},
    favorite: false,
    targetVersion: "",
    imbalancePoint: 0,
    imbalanceTs: 0,
    imbalanceComment: "",
  };
}

export const UpdateTestRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest" as const,

  encode(message: UpdateTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateTestRequest_LabelsEntry.encode({
        $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.favorite === true) {
      writer.uint32(48).bool(message.favorite);
    }
    if (message.targetVersion !== "") {
      writer.uint32(58).string(message.targetVersion);
    }
    if (message.imbalancePoint !== 0) {
      writer.uint32(64).int64(message.imbalancePoint);
    }
    if (message.imbalanceTs !== 0) {
      writer.uint32(72).int64(message.imbalanceTs);
    }
    if (message.imbalanceComment !== "") {
      writer.uint32(82).string(message.imbalanceComment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
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

          const entry5 = UpdateTestRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.favorite = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.targetVersion = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.imbalancePoint = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.imbalanceTs = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.imbalanceComment = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTestRequest {
    return {
      $type: UpdateTestRequest.$type,
      testId: isSet(object.testId) ? globalThis.String(object.testId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      favorite: isSet(object.favorite) ? globalThis.Boolean(object.favorite) : false,
      targetVersion: isSet(object.targetVersion) ? globalThis.String(object.targetVersion) : "",
      imbalancePoint: isSet(object.imbalancePoint) ? globalThis.Number(object.imbalancePoint) : 0,
      imbalanceTs: isSet(object.imbalanceTs) ? globalThis.Number(object.imbalanceTs) : 0,
      imbalanceComment: isSet(object.imbalanceComment) ? globalThis.String(object.imbalanceComment) : "",
    };
  },

  toJSON(message: UpdateTestRequest): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
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
    if (message.favorite === true) {
      obj.favorite = message.favorite;
    }
    if (message.targetVersion !== "") {
      obj.targetVersion = message.targetVersion;
    }
    if (message.imbalancePoint !== 0) {
      obj.imbalancePoint = Math.round(message.imbalancePoint);
    }
    if (message.imbalanceTs !== 0) {
      obj.imbalanceTs = Math.round(message.imbalanceTs);
    }
    if (message.imbalanceComment !== "") {
      obj.imbalanceComment = message.imbalanceComment;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTestRequest>, I>>(base?: I): UpdateTestRequest {
    return UpdateTestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTestRequest>, I>>(object: I): UpdateTestRequest {
    const message = createBaseUpdateTestRequest();
    message.testId = object.testId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.favorite = object.favorite ?? false;
    message.targetVersion = object.targetVersion ?? "";
    message.imbalancePoint = object.imbalancePoint ?? 0;
    message.imbalanceTs = object.imbalanceTs ?? 0;
    message.imbalanceComment = object.imbalanceComment ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTestRequest.$type, UpdateTestRequest);

function createBaseUpdateTestRequest_LabelsEntry(): UpdateTestRequest_LabelsEntry {
  return { $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateTestRequest_LabelsEntry = {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry" as const,

  encode(message: UpdateTestRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTestRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTestRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateTestRequest_LabelsEntry {
    return {
      $type: UpdateTestRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateTestRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTestRequest_LabelsEntry>, I>>(base?: I): UpdateTestRequest_LabelsEntry {
    return UpdateTestRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTestRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateTestRequest_LabelsEntry {
    const message = createBaseUpdateTestRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTestRequest_LabelsEntry.$type, UpdateTestRequest_LabelsEntry);

function createBaseUpdateTestMetadata(): UpdateTestMetadata {
  return { $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata", testId: "" };
}

export const UpdateTestMetadata = {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata" as const,

  encode(message: UpdateTestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTestMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTestMetadata {
    return { $type: UpdateTestMetadata.$type, testId: isSet(object.testId) ? globalThis.String(object.testId) : "" };
  },

  toJSON(message: UpdateTestMetadata): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTestMetadata>, I>>(base?: I): UpdateTestMetadata {
    return UpdateTestMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTestMetadata>, I>>(object: I): UpdateTestMetadata {
    const message = createBaseUpdateTestMetadata();
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTestMetadata.$type, UpdateTestMetadata);

export type TestServiceService = typeof TestServiceService;
export const TestServiceService = {
  /** Returns test by test id. */
  get: {
    path: "/yandex.cloud.loadtesting.agent.v1.TestService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTestRequest) => Buffer.from(GetTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTestRequest.decode(value),
    responseSerialize: (value: Test) => Buffer.from(Test.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Test.decode(value),
  },
  /** Creates test for the specified folder. */
  create: {
    path: "/yandex.cloud.loadtesting.agent.v1.TestService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTestRequest) => Buffer.from(CreateTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTestRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified test. */
  update: {
    path: "/yandex.cloud.loadtesting.agent.v1.TestService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTestRequest) => Buffer.from(UpdateTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTestRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface TestServiceServer extends UntypedServiceImplementation {
  /** Returns test by test id. */
  get: handleUnaryCall<GetTestRequest, Test>;
  /** Creates test for the specified folder. */
  create: handleUnaryCall<CreateTestRequest, Operation>;
  /** Updates the specified test. */
  update: handleUnaryCall<UpdateTestRequest, Operation>;
}

export interface TestServiceClient extends Client {
  /** Returns test by test id. */
  get(request: GetTestRequest, callback: (error: ServiceError | null, response: Test) => void): ClientUnaryCall;
  get(
    request: GetTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Test) => void,
  ): ClientUnaryCall;
  get(
    request: GetTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Test) => void,
  ): ClientUnaryCall;
  /** Creates test for the specified folder. */
  create(
    request: CreateTestRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified test. */
  update(
    request: UpdateTestRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const TestServiceClient = makeGenericClientConstructor(
  TestServiceService,
  "yandex.cloud.loadtesting.agent.v1.TestService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TestServiceClient;
  service: typeof TestServiceService;
  serviceName: string;
};

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
