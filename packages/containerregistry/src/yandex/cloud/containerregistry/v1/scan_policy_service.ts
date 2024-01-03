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
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { ScanPolicy, ScanRules } from "./scan_policy";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface GetScanPolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest";
  /** ID of the scan policy. */
  scanPolicyId: string;
}

export interface GetScanPolicyByRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest";
  /** ID of the registry with scan policy. */
  registryId: string;
}

export interface CreateScanPolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest";
  /** ID of the scan policy registry. */
  registryId: string;
  /** Name of the scan policy. */
  name: string;
  /** Description of the scan policy. */
  description: string;
  /** Rules of the scan policy. */
  rules?: ScanRules | undefined;
}

export interface UpdateScanPolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest";
  /** ID of the scan policy. */
  scanPolicyId: string;
  /** Field mask that specifies which fields of the scan policy resource are going to be updated. */
  updateMask?:
    | string[]
    | undefined;
  /** Name of the scan policy. */
  name: string;
  /** Description of the scan policy. */
  description: string;
  /** Rules of the scan policy. */
  rules?: ScanRules | undefined;
}

export interface DeleteScanPolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest";
  /** ID of the scan policy. */
  scanPolicyId: string;
}

export interface CreateScanPolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata";
  /** ID of created scan policy resource. */
  scanPolicyId: string;
}

export interface UpdateScanPolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata";
  /** ID of the scan policy resource that is updated. */
  scanPolicyId: string;
}

export interface DeleteScanPolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata";
  /** ID of the scan policy resource that is deleted. */
  scanPolicyId: string;
}

function createBaseGetScanPolicyRequest(): GetScanPolicyRequest {
  return { $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest", scanPolicyId: "" };
}

export const GetScanPolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest" as const,

  encode(message: GetScanPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScanPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScanPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanPolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetScanPolicyRequest {
    return {
      $type: GetScanPolicyRequest.$type,
      scanPolicyId: isSet(object.scanPolicyId) ? globalThis.String(object.scanPolicyId) : "",
    };
  },

  toJSON(message: GetScanPolicyRequest): unknown {
    const obj: any = {};
    if (message.scanPolicyId !== "") {
      obj.scanPolicyId = message.scanPolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScanPolicyRequest>, I>>(base?: I): GetScanPolicyRequest {
    return GetScanPolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetScanPolicyRequest>, I>>(object: I): GetScanPolicyRequest {
    const message = createBaseGetScanPolicyRequest();
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetScanPolicyRequest.$type, GetScanPolicyRequest);

function createBaseGetScanPolicyByRegistryRequest(): GetScanPolicyByRegistryRequest {
  return { $type: "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest", registryId: "" };
}

export const GetScanPolicyByRegistryRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest" as const,

  encode(message: GetScanPolicyByRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScanPolicyByRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScanPolicyByRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetScanPolicyByRegistryRequest {
    return {
      $type: GetScanPolicyByRegistryRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
    };
  },

  toJSON(message: GetScanPolicyByRegistryRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScanPolicyByRegistryRequest>, I>>(base?: I): GetScanPolicyByRegistryRequest {
    return GetScanPolicyByRegistryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetScanPolicyByRegistryRequest>, I>>(
    object: I,
  ): GetScanPolicyByRegistryRequest {
    const message = createBaseGetScanPolicyByRegistryRequest();
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetScanPolicyByRegistryRequest.$type, GetScanPolicyByRegistryRequest);

function createBaseCreateScanPolicyRequest(): CreateScanPolicyRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest",
    registryId: "",
    name: "",
    description: "",
    rules: undefined,
  };
}

export const CreateScanPolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest" as const,

  encode(message: CreateScanPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.rules !== undefined) {
      ScanRules.encode(message.rules, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateScanPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateScanPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
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

          message.rules = ScanRules.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateScanPolicyRequest {
    return {
      $type: CreateScanPolicyRequest.$type,
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      rules: isSet(object.rules) ? ScanRules.fromJSON(object.rules) : undefined,
    };
  },

  toJSON(message: CreateScanPolicyRequest): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.rules !== undefined) {
      obj.rules = ScanRules.toJSON(message.rules);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateScanPolicyRequest>, I>>(base?: I): CreateScanPolicyRequest {
    return CreateScanPolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateScanPolicyRequest>, I>>(object: I): CreateScanPolicyRequest {
    const message = createBaseCreateScanPolicyRequest();
    message.registryId = object.registryId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rules = (object.rules !== undefined && object.rules !== null)
      ? ScanRules.fromPartial(object.rules)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateScanPolicyRequest.$type, CreateScanPolicyRequest);

function createBaseUpdateScanPolicyRequest(): UpdateScanPolicyRequest {
  return {
    $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest",
    scanPolicyId: "",
    updateMask: undefined,
    name: "",
    description: "",
    rules: undefined,
  };
}

export const UpdateScanPolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest" as const,

  encode(message: UpdateScanPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
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
    if (message.rules !== undefined) {
      ScanRules.encode(message.rules, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateScanPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateScanPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanPolicyId = reader.string();
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

          message.rules = ScanRules.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateScanPolicyRequest {
    return {
      $type: UpdateScanPolicyRequest.$type,
      scanPolicyId: isSet(object.scanPolicyId) ? globalThis.String(object.scanPolicyId) : "",
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      rules: isSet(object.rules) ? ScanRules.fromJSON(object.rules) : undefined,
    };
  },

  toJSON(message: UpdateScanPolicyRequest): unknown {
    const obj: any = {};
    if (message.scanPolicyId !== "") {
      obj.scanPolicyId = message.scanPolicyId;
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
    if (message.rules !== undefined) {
      obj.rules = ScanRules.toJSON(message.rules);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateScanPolicyRequest>, I>>(base?: I): UpdateScanPolicyRequest {
    return UpdateScanPolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateScanPolicyRequest>, I>>(object: I): UpdateScanPolicyRequest {
    const message = createBaseUpdateScanPolicyRequest();
    message.scanPolicyId = object.scanPolicyId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rules = (object.rules !== undefined && object.rules !== null)
      ? ScanRules.fromPartial(object.rules)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateScanPolicyRequest.$type, UpdateScanPolicyRequest);

function createBaseDeleteScanPolicyRequest(): DeleteScanPolicyRequest {
  return { $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest", scanPolicyId: "" };
}

export const DeleteScanPolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest" as const,

  encode(message: DeleteScanPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteScanPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteScanPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanPolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteScanPolicyRequest {
    return {
      $type: DeleteScanPolicyRequest.$type,
      scanPolicyId: isSet(object.scanPolicyId) ? globalThis.String(object.scanPolicyId) : "",
    };
  },

  toJSON(message: DeleteScanPolicyRequest): unknown {
    const obj: any = {};
    if (message.scanPolicyId !== "") {
      obj.scanPolicyId = message.scanPolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteScanPolicyRequest>, I>>(base?: I): DeleteScanPolicyRequest {
    return DeleteScanPolicyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteScanPolicyRequest>, I>>(object: I): DeleteScanPolicyRequest {
    const message = createBaseDeleteScanPolicyRequest();
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteScanPolicyRequest.$type, DeleteScanPolicyRequest);

function createBaseCreateScanPolicyMetadata(): CreateScanPolicyMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata", scanPolicyId: "" };
}

export const CreateScanPolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata" as const,

  encode(message: CreateScanPolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateScanPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateScanPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanPolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateScanPolicyMetadata {
    return {
      $type: CreateScanPolicyMetadata.$type,
      scanPolicyId: isSet(object.scanPolicyId) ? globalThis.String(object.scanPolicyId) : "",
    };
  },

  toJSON(message: CreateScanPolicyMetadata): unknown {
    const obj: any = {};
    if (message.scanPolicyId !== "") {
      obj.scanPolicyId = message.scanPolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateScanPolicyMetadata>, I>>(base?: I): CreateScanPolicyMetadata {
    return CreateScanPolicyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateScanPolicyMetadata>, I>>(object: I): CreateScanPolicyMetadata {
    const message = createBaseCreateScanPolicyMetadata();
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateScanPolicyMetadata.$type, CreateScanPolicyMetadata);

function createBaseUpdateScanPolicyMetadata(): UpdateScanPolicyMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata", scanPolicyId: "" };
}

export const UpdateScanPolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata" as const,

  encode(message: UpdateScanPolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateScanPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateScanPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanPolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateScanPolicyMetadata {
    return {
      $type: UpdateScanPolicyMetadata.$type,
      scanPolicyId: isSet(object.scanPolicyId) ? globalThis.String(object.scanPolicyId) : "",
    };
  },

  toJSON(message: UpdateScanPolicyMetadata): unknown {
    const obj: any = {};
    if (message.scanPolicyId !== "") {
      obj.scanPolicyId = message.scanPolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateScanPolicyMetadata>, I>>(base?: I): UpdateScanPolicyMetadata {
    return UpdateScanPolicyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateScanPolicyMetadata>, I>>(object: I): UpdateScanPolicyMetadata {
    const message = createBaseUpdateScanPolicyMetadata();
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateScanPolicyMetadata.$type, UpdateScanPolicyMetadata);

function createBaseDeleteScanPolicyMetadata(): DeleteScanPolicyMetadata {
  return { $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata", scanPolicyId: "" };
}

export const DeleteScanPolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata" as const,

  encode(message: DeleteScanPolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteScanPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteScanPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scanPolicyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteScanPolicyMetadata {
    return {
      $type: DeleteScanPolicyMetadata.$type,
      scanPolicyId: isSet(object.scanPolicyId) ? globalThis.String(object.scanPolicyId) : "",
    };
  },

  toJSON(message: DeleteScanPolicyMetadata): unknown {
    const obj: any = {};
    if (message.scanPolicyId !== "") {
      obj.scanPolicyId = message.scanPolicyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteScanPolicyMetadata>, I>>(base?: I): DeleteScanPolicyMetadata {
    return DeleteScanPolicyMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteScanPolicyMetadata>, I>>(object: I): DeleteScanPolicyMetadata {
    const message = createBaseDeleteScanPolicyMetadata();
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteScanPolicyMetadata.$type, DeleteScanPolicyMetadata);

/** A set of methods for managing scan policy resources. */
export type ScanPolicyServiceService = typeof ScanPolicyServiceService;
export const ScanPolicyServiceService = {
  /** Returns the specified scan policy. */
  get: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetScanPolicyRequest) => Buffer.from(GetScanPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetScanPolicyRequest.decode(value),
    responseSerialize: (value: ScanPolicy) => Buffer.from(ScanPolicy.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanPolicy.decode(value),
  },
  /** Returns scan policy for the registry if any exists. */
  getByRegistry: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/GetByRegistry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetScanPolicyByRegistryRequest) =>
      Buffer.from(GetScanPolicyByRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetScanPolicyByRegistryRequest.decode(value),
    responseSerialize: (value: ScanPolicy) => Buffer.from(ScanPolicy.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanPolicy.decode(value),
  },
  /** Creates a scan policy for the specified registry. */
  create: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateScanPolicyRequest) => Buffer.from(CreateScanPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateScanPolicyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified scan policy. */
  update: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateScanPolicyRequest) => Buffer.from(UpdateScanPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateScanPolicyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified scan policy. */
  delete: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteScanPolicyRequest) => Buffer.from(DeleteScanPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteScanPolicyRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ScanPolicyServiceServer extends UntypedServiceImplementation {
  /** Returns the specified scan policy. */
  get: handleUnaryCall<GetScanPolicyRequest, ScanPolicy>;
  /** Returns scan policy for the registry if any exists. */
  getByRegistry: handleUnaryCall<GetScanPolicyByRegistryRequest, ScanPolicy>;
  /** Creates a scan policy for the specified registry. */
  create: handleUnaryCall<CreateScanPolicyRequest, Operation>;
  /** Updates the specified scan policy. */
  update: handleUnaryCall<UpdateScanPolicyRequest, Operation>;
  /** Deletes the specified scan policy. */
  delete: handleUnaryCall<DeleteScanPolicyRequest, Operation>;
}

export interface ScanPolicyServiceClient extends Client {
  /** Returns the specified scan policy. */
  get(
    request: GetScanPolicyRequest,
    callback: (error: ServiceError | null, response: ScanPolicy) => void,
  ): ClientUnaryCall;
  get(
    request: GetScanPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanPolicy) => void,
  ): ClientUnaryCall;
  get(
    request: GetScanPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanPolicy) => void,
  ): ClientUnaryCall;
  /** Returns scan policy for the registry if any exists. */
  getByRegistry(
    request: GetScanPolicyByRegistryRequest,
    callback: (error: ServiceError | null, response: ScanPolicy) => void,
  ): ClientUnaryCall;
  getByRegistry(
    request: GetScanPolicyByRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanPolicy) => void,
  ): ClientUnaryCall;
  getByRegistry(
    request: GetScanPolicyByRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanPolicy) => void,
  ): ClientUnaryCall;
  /** Creates a scan policy for the specified registry. */
  create(
    request: CreateScanPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateScanPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateScanPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Updates the specified scan policy. */
  update(
    request: UpdateScanPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateScanPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateScanPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Deletes the specified scan policy. */
  delete(
    request: DeleteScanPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteScanPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteScanPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ScanPolicyServiceClient = makeGenericClientConstructor(
  ScanPolicyServiceService,
  "yandex.cloud.containerregistry.v1.ScanPolicyService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ScanPolicyServiceClient;
  service: typeof ScanPolicyServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
