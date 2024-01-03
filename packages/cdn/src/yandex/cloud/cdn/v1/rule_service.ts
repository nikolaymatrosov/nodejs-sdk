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
import { Operation } from "@yandex-cloud/core/dist/generated/yandex/cloud/operation/operation";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { ResourceOptions } from "./resource";
import { Rule } from "./rule";

export const protobufPackage = "yandex.cloud.cdn.v1";

export interface ListResourceRulesRequest {
  $type: "yandex.cloud.cdn.v1.ListResourceRulesRequest";
  /** ID of resource. */
  resourceId: string;
}

export interface ListResourceRulesResponse {
  $type: "yandex.cloud.cdn.v1.ListResourceRulesResponse";
  /** List of the resource rules. */
  rules: Rule[];
}

export interface CreateResourceRuleRequest {
  $type: "yandex.cloud.cdn.v1.CreateResourceRuleRequest";
  /** ID of resource. */
  resourceId: string;
  /** Name of created resource rule. */
  name: string;
  /** Resource rule pattern. */
  rulePattern: string;
  options?: ResourceOptions | undefined;
}

export interface CreateResourceRuleMetadata {
  $type: "yandex.cloud.cdn.v1.CreateResourceRuleMetadata";
  /** ID of resource. */
  resourceId: string;
  /** ID of created resource rule. */
  ruleId: number;
}

export interface GetResourceRuleRequest {
  $type: "yandex.cloud.cdn.v1.GetResourceRuleRequest";
  /** ID of resource. */
  resourceId: string;
  /** ID of the requested resource rule. */
  ruleId: number;
}

export interface UpdateResourceRuleRequest {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRuleRequest";
  /** ID of resource. */
  resourceId: string;
  /** ID of updated resource rule. */
  ruleId: number;
  /** Name of updated resource rule. */
  name: string;
  /** Resource rule pattern. */
  rulePattern: string;
  options?: ResourceOptions | undefined;
}

export interface UpdateResourceRuleMetadata {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRuleMetadata";
  /** ID of resource. */
  resourceId: string;
  /** ID of updated resource rule. */
  ruleId: number;
}

export interface DeleteResourceRuleRequest {
  $type: "yandex.cloud.cdn.v1.DeleteResourceRuleRequest";
  /** ID of resource. */
  resourceId: string;
  /** ID of deleted resource rule. */
  ruleId: number;
}

export interface DeleteResourceRuleMetadata {
  $type: "yandex.cloud.cdn.v1.DeleteResourceRuleMetadata";
  /** ID of resource. */
  resourceId: string;
  /** ID of deleted resource rule. */
  ruleId: number;
}

function createBaseListResourceRulesRequest(): ListResourceRulesRequest {
  return { $type: "yandex.cloud.cdn.v1.ListResourceRulesRequest", resourceId: "" };
}

export const ListResourceRulesRequest = {
  $type: "yandex.cloud.cdn.v1.ListResourceRulesRequest" as const,

  encode(message: ListResourceRulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceRulesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourceRulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResourceRulesRequest {
    return {
      $type: ListResourceRulesRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: ListResourceRulesRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourceRulesRequest>, I>>(base?: I): ListResourceRulesRequest {
    return ListResourceRulesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourceRulesRequest>, I>>(object: I): ListResourceRulesRequest {
    const message = createBaseListResourceRulesRequest();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourceRulesRequest.$type, ListResourceRulesRequest);

function createBaseListResourceRulesResponse(): ListResourceRulesResponse {
  return { $type: "yandex.cloud.cdn.v1.ListResourceRulesResponse", rules: [] };
}

export const ListResourceRulesResponse = {
  $type: "yandex.cloud.cdn.v1.ListResourceRulesResponse" as const,

  encode(message: ListResourceRulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      Rule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceRulesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourceRulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rules.push(Rule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResourceRulesResponse {
    return {
      $type: ListResourceRulesResponse.$type,
      rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e: any) => Rule.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListResourceRulesResponse): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => Rule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourceRulesResponse>, I>>(base?: I): ListResourceRulesResponse {
    return ListResourceRulesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourceRulesResponse>, I>>(object: I): ListResourceRulesResponse {
    const message = createBaseListResourceRulesResponse();
    message.rules = object.rules?.map((e) => Rule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListResourceRulesResponse.$type, ListResourceRulesResponse);

function createBaseCreateResourceRuleRequest(): CreateResourceRuleRequest {
  return {
    $type: "yandex.cloud.cdn.v1.CreateResourceRuleRequest",
    resourceId: "",
    name: "",
    rulePattern: "",
    options: undefined,
  };
}

export const CreateResourceRuleRequest = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRuleRequest" as const,

  encode(message: CreateResourceRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.rulePattern !== "") {
      writer.uint32(26).string(message.rulePattern);
    }
    if (message.options !== undefined) {
      ResourceOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRuleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceRuleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
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

          message.rulePattern = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.options = ResourceOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResourceRuleRequest {
    return {
      $type: CreateResourceRuleRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      rulePattern: isSet(object.rulePattern) ? globalThis.String(object.rulePattern) : "",
      options: isSet(object.options) ? ResourceOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: CreateResourceRuleRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.rulePattern !== "") {
      obj.rulePattern = message.rulePattern;
    }
    if (message.options !== undefined) {
      obj.options = ResourceOptions.toJSON(message.options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceRuleRequest>, I>>(base?: I): CreateResourceRuleRequest {
    return CreateResourceRuleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceRuleRequest>, I>>(object: I): CreateResourceRuleRequest {
    const message = createBaseCreateResourceRuleRequest();
    message.resourceId = object.resourceId ?? "";
    message.name = object.name ?? "";
    message.rulePattern = object.rulePattern ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? ResourceOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateResourceRuleRequest.$type, CreateResourceRuleRequest);

function createBaseCreateResourceRuleMetadata(): CreateResourceRuleMetadata {
  return { $type: "yandex.cloud.cdn.v1.CreateResourceRuleMetadata", resourceId: "", ruleId: 0 };
}

export const CreateResourceRuleMetadata = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRuleMetadata" as const,

  encode(message: CreateResourceRuleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.ruleId !== 0) {
      writer.uint32(16).int64(message.ruleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRuleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceRuleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ruleId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResourceRuleMetadata {
    return {
      $type: CreateResourceRuleMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      ruleId: isSet(object.ruleId) ? globalThis.Number(object.ruleId) : 0,
    };
  },

  toJSON(message: CreateResourceRuleMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.ruleId !== 0) {
      obj.ruleId = Math.round(message.ruleId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceRuleMetadata>, I>>(base?: I): CreateResourceRuleMetadata {
    return CreateResourceRuleMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceRuleMetadata>, I>>(object: I): CreateResourceRuleMetadata {
    const message = createBaseCreateResourceRuleMetadata();
    message.resourceId = object.resourceId ?? "";
    message.ruleId = object.ruleId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateResourceRuleMetadata.$type, CreateResourceRuleMetadata);

function createBaseGetResourceRuleRequest(): GetResourceRuleRequest {
  return { $type: "yandex.cloud.cdn.v1.GetResourceRuleRequest", resourceId: "", ruleId: 0 };
}

export const GetResourceRuleRequest = {
  $type: "yandex.cloud.cdn.v1.GetResourceRuleRequest" as const,

  encode(message: GetResourceRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.ruleId !== 0) {
      writer.uint32(16).int64(message.ruleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceRuleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourceRuleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ruleId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResourceRuleRequest {
    return {
      $type: GetResourceRuleRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      ruleId: isSet(object.ruleId) ? globalThis.Number(object.ruleId) : 0,
    };
  },

  toJSON(message: GetResourceRuleRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.ruleId !== 0) {
      obj.ruleId = Math.round(message.ruleId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourceRuleRequest>, I>>(base?: I): GetResourceRuleRequest {
    return GetResourceRuleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourceRuleRequest>, I>>(object: I): GetResourceRuleRequest {
    const message = createBaseGetResourceRuleRequest();
    message.resourceId = object.resourceId ?? "";
    message.ruleId = object.ruleId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetResourceRuleRequest.$type, GetResourceRuleRequest);

function createBaseUpdateResourceRuleRequest(): UpdateResourceRuleRequest {
  return {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRuleRequest",
    resourceId: "",
    ruleId: 0,
    name: "",
    rulePattern: "",
    options: undefined,
  };
}

export const UpdateResourceRuleRequest = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRuleRequest" as const,

  encode(message: UpdateResourceRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.ruleId !== 0) {
      writer.uint32(16).int64(message.ruleId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.rulePattern !== "") {
      writer.uint32(34).string(message.rulePattern);
    }
    if (message.options !== undefined) {
      ResourceOptions.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceRuleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResourceRuleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ruleId = longToNumber(reader.int64() as Long);
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

          message.rulePattern = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.options = ResourceOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateResourceRuleRequest {
    return {
      $type: UpdateResourceRuleRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      ruleId: isSet(object.ruleId) ? globalThis.Number(object.ruleId) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      rulePattern: isSet(object.rulePattern) ? globalThis.String(object.rulePattern) : "",
      options: isSet(object.options) ? ResourceOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: UpdateResourceRuleRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.ruleId !== 0) {
      obj.ruleId = Math.round(message.ruleId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.rulePattern !== "") {
      obj.rulePattern = message.rulePattern;
    }
    if (message.options !== undefined) {
      obj.options = ResourceOptions.toJSON(message.options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResourceRuleRequest>, I>>(base?: I): UpdateResourceRuleRequest {
    return UpdateResourceRuleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateResourceRuleRequest>, I>>(object: I): UpdateResourceRuleRequest {
    const message = createBaseUpdateResourceRuleRequest();
    message.resourceId = object.resourceId ?? "";
    message.ruleId = object.ruleId ?? 0;
    message.name = object.name ?? "";
    message.rulePattern = object.rulePattern ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? ResourceOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateResourceRuleRequest.$type, UpdateResourceRuleRequest);

function createBaseUpdateResourceRuleMetadata(): UpdateResourceRuleMetadata {
  return { $type: "yandex.cloud.cdn.v1.UpdateResourceRuleMetadata", resourceId: "", ruleId: 0 };
}

export const UpdateResourceRuleMetadata = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRuleMetadata" as const,

  encode(message: UpdateResourceRuleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.ruleId !== 0) {
      writer.uint32(16).int64(message.ruleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceRuleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResourceRuleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ruleId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateResourceRuleMetadata {
    return {
      $type: UpdateResourceRuleMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      ruleId: isSet(object.ruleId) ? globalThis.Number(object.ruleId) : 0,
    };
  },

  toJSON(message: UpdateResourceRuleMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.ruleId !== 0) {
      obj.ruleId = Math.round(message.ruleId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResourceRuleMetadata>, I>>(base?: I): UpdateResourceRuleMetadata {
    return UpdateResourceRuleMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateResourceRuleMetadata>, I>>(object: I): UpdateResourceRuleMetadata {
    const message = createBaseUpdateResourceRuleMetadata();
    message.resourceId = object.resourceId ?? "";
    message.ruleId = object.ruleId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UpdateResourceRuleMetadata.$type, UpdateResourceRuleMetadata);

function createBaseDeleteResourceRuleRequest(): DeleteResourceRuleRequest {
  return { $type: "yandex.cloud.cdn.v1.DeleteResourceRuleRequest", resourceId: "", ruleId: 0 };
}

export const DeleteResourceRuleRequest = {
  $type: "yandex.cloud.cdn.v1.DeleteResourceRuleRequest" as const,

  encode(message: DeleteResourceRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.ruleId !== 0) {
      writer.uint32(16).int64(message.ruleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceRuleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourceRuleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ruleId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceRuleRequest {
    return {
      $type: DeleteResourceRuleRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      ruleId: isSet(object.ruleId) ? globalThis.Number(object.ruleId) : 0,
    };
  },

  toJSON(message: DeleteResourceRuleRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.ruleId !== 0) {
      obj.ruleId = Math.round(message.ruleId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourceRuleRequest>, I>>(base?: I): DeleteResourceRuleRequest {
    return DeleteResourceRuleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteResourceRuleRequest>, I>>(object: I): DeleteResourceRuleRequest {
    const message = createBaseDeleteResourceRuleRequest();
    message.resourceId = object.resourceId ?? "";
    message.ruleId = object.ruleId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceRuleRequest.$type, DeleteResourceRuleRequest);

function createBaseDeleteResourceRuleMetadata(): DeleteResourceRuleMetadata {
  return { $type: "yandex.cloud.cdn.v1.DeleteResourceRuleMetadata", resourceId: "", ruleId: 0 };
}

export const DeleteResourceRuleMetadata = {
  $type: "yandex.cloud.cdn.v1.DeleteResourceRuleMetadata" as const,

  encode(message: DeleteResourceRuleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.ruleId !== 0) {
      writer.uint32(16).int64(message.ruleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceRuleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourceRuleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ruleId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceRuleMetadata {
    return {
      $type: DeleteResourceRuleMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      ruleId: isSet(object.ruleId) ? globalThis.Number(object.ruleId) : 0,
    };
  },

  toJSON(message: DeleteResourceRuleMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.ruleId !== 0) {
      obj.ruleId = Math.round(message.ruleId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourceRuleMetadata>, I>>(base?: I): DeleteResourceRuleMetadata {
    return DeleteResourceRuleMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteResourceRuleMetadata>, I>>(object: I): DeleteResourceRuleMetadata {
    const message = createBaseDeleteResourceRuleMetadata();
    message.resourceId = object.resourceId ?? "";
    message.ruleId = object.ruleId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceRuleMetadata.$type, DeleteResourceRuleMetadata);

/**
 * Rules management service.
 *
 * Used for Resources Rules management.
 */
export type ResourceRulesServiceService = typeof ResourceRulesServiceService;
export const ResourceRulesServiceService = {
  /** List all rules for specified resource. */
  list: {
    path: "/yandex.cloud.cdn.v1.ResourceRulesService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListResourceRulesRequest) => Buffer.from(ListResourceRulesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListResourceRulesRequest.decode(value),
    responseSerialize: (value: ListResourceRulesResponse) =>
      Buffer.from(ListResourceRulesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListResourceRulesResponse.decode(value),
  },
  /** Create new resource rule with specified unique name and rule patter. */
  create: {
    path: "/yandex.cloud.cdn.v1.ResourceRulesService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateResourceRuleRequest) =>
      Buffer.from(CreateResourceRuleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateResourceRuleRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Get specified by id resource rule. */
  get: {
    path: "/yandex.cloud.cdn.v1.ResourceRulesService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetResourceRuleRequest) => Buffer.from(GetResourceRuleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetResourceRuleRequest.decode(value),
    responseSerialize: (value: Rule) => Buffer.from(Rule.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Rule.decode(value),
  },
  /** Update specified by id resource rule. */
  update: {
    path: "/yandex.cloud.cdn.v1.ResourceRulesService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateResourceRuleRequest) =>
      Buffer.from(UpdateResourceRuleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateResourceRuleRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Delete specified by id resource rule. */
  delete: {
    path: "/yandex.cloud.cdn.v1.ResourceRulesService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteResourceRuleRequest) =>
      Buffer.from(DeleteResourceRuleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteResourceRuleRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ResourceRulesServiceServer extends UntypedServiceImplementation {
  /** List all rules for specified resource. */
  list: handleUnaryCall<ListResourceRulesRequest, ListResourceRulesResponse>;
  /** Create new resource rule with specified unique name and rule patter. */
  create: handleUnaryCall<CreateResourceRuleRequest, Operation>;
  /** Get specified by id resource rule. */
  get: handleUnaryCall<GetResourceRuleRequest, Rule>;
  /** Update specified by id resource rule. */
  update: handleUnaryCall<UpdateResourceRuleRequest, Operation>;
  /** Delete specified by id resource rule. */
  delete: handleUnaryCall<DeleteResourceRuleRequest, Operation>;
}

export interface ResourceRulesServiceClient extends Client {
  /** List all rules for specified resource. */
  list(
    request: ListResourceRulesRequest,
    callback: (error: ServiceError | null, response: ListResourceRulesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListResourceRulesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListResourceRulesResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListResourceRulesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListResourceRulesResponse) => void,
  ): ClientUnaryCall;
  /** Create new resource rule with specified unique name and rule patter. */
  create(
    request: CreateResourceRuleRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateResourceRuleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateResourceRuleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Get specified by id resource rule. */
  get(request: GetResourceRuleRequest, callback: (error: ServiceError | null, response: Rule) => void): ClientUnaryCall;
  get(
    request: GetResourceRuleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Rule) => void,
  ): ClientUnaryCall;
  get(
    request: GetResourceRuleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Rule) => void,
  ): ClientUnaryCall;
  /** Update specified by id resource rule. */
  update(
    request: UpdateResourceRuleRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateResourceRuleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateResourceRuleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  /** Delete specified by id resource rule. */
  delete(
    request: DeleteResourceRuleRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRuleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRuleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const ResourceRulesServiceClient = makeGenericClientConstructor(
  ResourceRulesServiceService,
  "yandex.cloud.cdn.v1.ResourceRulesService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ResourceRulesServiceClient;
  service: typeof ResourceRulesServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
