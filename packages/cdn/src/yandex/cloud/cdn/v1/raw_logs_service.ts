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
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { RawLogsSettings, RawLogsStatus, rawLogsStatusFromJSON, rawLogsStatusToJSON } from "./raw_logs";

export const protobufPackage = "yandex.cloud.cdn.v1";

export interface ActivateRawLogsRequest {
  $type: "yandex.cloud.cdn.v1.ActivateRawLogsRequest";
  /** ID of CDN resource to switch logs storage for.. */
  resourceId: string;
  /** Raw logs settings. */
  settings?: RawLogsSettings | undefined;
}

export interface ActivateRawLogsMetadata {
  $type: "yandex.cloud.cdn.v1.ActivateRawLogsMetadata";
  /** ID of resource with activated raw logs. */
  resourceId: string;
}

export interface ActivateRawLogsResponse {
  $type: "yandex.cloud.cdn.v1.ActivateRawLogsResponse";
  /** Raw logs status. */
  status: RawLogsStatus;
  /** Raw logs settings. */
  settings?: RawLogsSettings | undefined;
}

export interface DeactivateRawLogsRequest {
  $type: "yandex.cloud.cdn.v1.DeactivateRawLogsRequest";
  /** ID of CDN resource to deactivate Raw Logs for. */
  resourceId: string;
}

export interface DeactivateRawLogsMetadata {
  $type: "yandex.cloud.cdn.v1.DeactivateRawLogsMetadata";
  /** ID of CDN resource. */
  resourceId: string;
}

export interface GetRawLogsRequest {
  $type: "yandex.cloud.cdn.v1.GetRawLogsRequest";
  /** ID of CDN resource to request status and settings. */
  resourceId: string;
}

export interface GetRawLogsResponse {
  $type: "yandex.cloud.cdn.v1.GetRawLogsResponse";
  /** Raw logs status. */
  status: RawLogsStatus;
  /** Raw logs settings. */
  settings?: RawLogsSettings | undefined;
}

export interface UpdateRawLogsRequest {
  $type: "yandex.cloud.cdn.v1.UpdateRawLogsRequest";
  /** ID of CDN resource. */
  resourceId: string;
  /** Raw logs settings. */
  settings?: RawLogsSettings | undefined;
}

export interface UpdateRawLogsResponse {
  $type: "yandex.cloud.cdn.v1.UpdateRawLogsResponse";
  /** Raw logs status. */
  status: RawLogsStatus;
  /** Raw logs settings. */
  settings?: RawLogsSettings | undefined;
}

export interface UpdateRawLogsMetadata {
  $type: "yandex.cloud.cdn.v1.UpdateRawLogsMetadata";
  /** ID of CDN resource. */
  resourceId: string;
}

function createBaseActivateRawLogsRequest(): ActivateRawLogsRequest {
  return { $type: "yandex.cloud.cdn.v1.ActivateRawLogsRequest", resourceId: "", settings: undefined };
}

export const ActivateRawLogsRequest = {
  $type: "yandex.cloud.cdn.v1.ActivateRawLogsRequest" as const,

  encode(message: ActivateRawLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.settings !== undefined) {
      RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateRawLogsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateRawLogsRequest();
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

          message.settings = RawLogsSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateRawLogsRequest {
    return {
      $type: ActivateRawLogsRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      settings: isSet(object.settings) ? RawLogsSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: ActivateRawLogsRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.settings !== undefined) {
      obj.settings = RawLogsSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateRawLogsRequest>, I>>(base?: I): ActivateRawLogsRequest {
    return ActivateRawLogsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateRawLogsRequest>, I>>(object: I): ActivateRawLogsRequest {
    const message = createBaseActivateRawLogsRequest();
    message.resourceId = object.resourceId ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? RawLogsSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ActivateRawLogsRequest.$type, ActivateRawLogsRequest);

function createBaseActivateRawLogsMetadata(): ActivateRawLogsMetadata {
  return { $type: "yandex.cloud.cdn.v1.ActivateRawLogsMetadata", resourceId: "" };
}

export const ActivateRawLogsMetadata = {
  $type: "yandex.cloud.cdn.v1.ActivateRawLogsMetadata" as const,

  encode(message: ActivateRawLogsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateRawLogsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateRawLogsMetadata();
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

  fromJSON(object: any): ActivateRawLogsMetadata {
    return {
      $type: ActivateRawLogsMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: ActivateRawLogsMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateRawLogsMetadata>, I>>(base?: I): ActivateRawLogsMetadata {
    return ActivateRawLogsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateRawLogsMetadata>, I>>(object: I): ActivateRawLogsMetadata {
    const message = createBaseActivateRawLogsMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateRawLogsMetadata.$type, ActivateRawLogsMetadata);

function createBaseActivateRawLogsResponse(): ActivateRawLogsResponse {
  return { $type: "yandex.cloud.cdn.v1.ActivateRawLogsResponse", status: 0, settings: undefined };
}

export const ActivateRawLogsResponse = {
  $type: "yandex.cloud.cdn.v1.ActivateRawLogsResponse" as const,

  encode(message: ActivateRawLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.settings !== undefined) {
      RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateRawLogsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateRawLogsResponse();
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

          message.settings = RawLogsSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateRawLogsResponse {
    return {
      $type: ActivateRawLogsResponse.$type,
      status: isSet(object.status) ? rawLogsStatusFromJSON(object.status) : 0,
      settings: isSet(object.settings) ? RawLogsSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: ActivateRawLogsResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = rawLogsStatusToJSON(message.status);
    }
    if (message.settings !== undefined) {
      obj.settings = RawLogsSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateRawLogsResponse>, I>>(base?: I): ActivateRawLogsResponse {
    return ActivateRawLogsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateRawLogsResponse>, I>>(object: I): ActivateRawLogsResponse {
    const message = createBaseActivateRawLogsResponse();
    message.status = object.status ?? 0;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? RawLogsSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ActivateRawLogsResponse.$type, ActivateRawLogsResponse);

function createBaseDeactivateRawLogsRequest(): DeactivateRawLogsRequest {
  return { $type: "yandex.cloud.cdn.v1.DeactivateRawLogsRequest", resourceId: "" };
}

export const DeactivateRawLogsRequest = {
  $type: "yandex.cloud.cdn.v1.DeactivateRawLogsRequest" as const,

  encode(message: DeactivateRawLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateRawLogsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateRawLogsRequest();
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

  fromJSON(object: any): DeactivateRawLogsRequest {
    return {
      $type: DeactivateRawLogsRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: DeactivateRawLogsRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateRawLogsRequest>, I>>(base?: I): DeactivateRawLogsRequest {
    return DeactivateRawLogsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateRawLogsRequest>, I>>(object: I): DeactivateRawLogsRequest {
    const message = createBaseDeactivateRawLogsRequest();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateRawLogsRequest.$type, DeactivateRawLogsRequest);

function createBaseDeactivateRawLogsMetadata(): DeactivateRawLogsMetadata {
  return { $type: "yandex.cloud.cdn.v1.DeactivateRawLogsMetadata", resourceId: "" };
}

export const DeactivateRawLogsMetadata = {
  $type: "yandex.cloud.cdn.v1.DeactivateRawLogsMetadata" as const,

  encode(message: DeactivateRawLogsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateRawLogsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateRawLogsMetadata();
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

  fromJSON(object: any): DeactivateRawLogsMetadata {
    return {
      $type: DeactivateRawLogsMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: DeactivateRawLogsMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateRawLogsMetadata>, I>>(base?: I): DeactivateRawLogsMetadata {
    return DeactivateRawLogsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateRawLogsMetadata>, I>>(object: I): DeactivateRawLogsMetadata {
    const message = createBaseDeactivateRawLogsMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateRawLogsMetadata.$type, DeactivateRawLogsMetadata);

function createBaseGetRawLogsRequest(): GetRawLogsRequest {
  return { $type: "yandex.cloud.cdn.v1.GetRawLogsRequest", resourceId: "" };
}

export const GetRawLogsRequest = {
  $type: "yandex.cloud.cdn.v1.GetRawLogsRequest" as const,

  encode(message: GetRawLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRawLogsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRawLogsRequest();
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

  fromJSON(object: any): GetRawLogsRequest {
    return {
      $type: GetRawLogsRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: GetRawLogsRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRawLogsRequest>, I>>(base?: I): GetRawLogsRequest {
    return GetRawLogsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRawLogsRequest>, I>>(object: I): GetRawLogsRequest {
    const message = createBaseGetRawLogsRequest();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetRawLogsRequest.$type, GetRawLogsRequest);

function createBaseGetRawLogsResponse(): GetRawLogsResponse {
  return { $type: "yandex.cloud.cdn.v1.GetRawLogsResponse", status: 0, settings: undefined };
}

export const GetRawLogsResponse = {
  $type: "yandex.cloud.cdn.v1.GetRawLogsResponse" as const,

  encode(message: GetRawLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.settings !== undefined) {
      RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRawLogsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRawLogsResponse();
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

          message.settings = RawLogsSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRawLogsResponse {
    return {
      $type: GetRawLogsResponse.$type,
      status: isSet(object.status) ? rawLogsStatusFromJSON(object.status) : 0,
      settings: isSet(object.settings) ? RawLogsSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: GetRawLogsResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = rawLogsStatusToJSON(message.status);
    }
    if (message.settings !== undefined) {
      obj.settings = RawLogsSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRawLogsResponse>, I>>(base?: I): GetRawLogsResponse {
    return GetRawLogsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRawLogsResponse>, I>>(object: I): GetRawLogsResponse {
    const message = createBaseGetRawLogsResponse();
    message.status = object.status ?? 0;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? RawLogsSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetRawLogsResponse.$type, GetRawLogsResponse);

function createBaseUpdateRawLogsRequest(): UpdateRawLogsRequest {
  return { $type: "yandex.cloud.cdn.v1.UpdateRawLogsRequest", resourceId: "", settings: undefined };
}

export const UpdateRawLogsRequest = {
  $type: "yandex.cloud.cdn.v1.UpdateRawLogsRequest" as const,

  encode(message: UpdateRawLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.settings !== undefined) {
      RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRawLogsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRawLogsRequest();
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

          message.settings = RawLogsSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateRawLogsRequest {
    return {
      $type: UpdateRawLogsRequest.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      settings: isSet(object.settings) ? RawLogsSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: UpdateRawLogsRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.settings !== undefined) {
      obj.settings = RawLogsSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRawLogsRequest>, I>>(base?: I): UpdateRawLogsRequest {
    return UpdateRawLogsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRawLogsRequest>, I>>(object: I): UpdateRawLogsRequest {
    const message = createBaseUpdateRawLogsRequest();
    message.resourceId = object.resourceId ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? RawLogsSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateRawLogsRequest.$type, UpdateRawLogsRequest);

function createBaseUpdateRawLogsResponse(): UpdateRawLogsResponse {
  return { $type: "yandex.cloud.cdn.v1.UpdateRawLogsResponse", status: 0, settings: undefined };
}

export const UpdateRawLogsResponse = {
  $type: "yandex.cloud.cdn.v1.UpdateRawLogsResponse" as const,

  encode(message: UpdateRawLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.settings !== undefined) {
      RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRawLogsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRawLogsResponse();
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

          message.settings = RawLogsSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateRawLogsResponse {
    return {
      $type: UpdateRawLogsResponse.$type,
      status: isSet(object.status) ? rawLogsStatusFromJSON(object.status) : 0,
      settings: isSet(object.settings) ? RawLogsSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: UpdateRawLogsResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = rawLogsStatusToJSON(message.status);
    }
    if (message.settings !== undefined) {
      obj.settings = RawLogsSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRawLogsResponse>, I>>(base?: I): UpdateRawLogsResponse {
    return UpdateRawLogsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRawLogsResponse>, I>>(object: I): UpdateRawLogsResponse {
    const message = createBaseUpdateRawLogsResponse();
    message.status = object.status ?? 0;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? RawLogsSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateRawLogsResponse.$type, UpdateRawLogsResponse);

function createBaseUpdateRawLogsMetadata(): UpdateRawLogsMetadata {
  return { $type: "yandex.cloud.cdn.v1.UpdateRawLogsMetadata", resourceId: "" };
}

export const UpdateRawLogsMetadata = {
  $type: "yandex.cloud.cdn.v1.UpdateRawLogsMetadata" as const,

  encode(message: UpdateRawLogsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRawLogsMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRawLogsMetadata();
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

  fromJSON(object: any): UpdateRawLogsMetadata {
    return {
      $type: UpdateRawLogsMetadata.$type,
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
    };
  },

  toJSON(message: UpdateRawLogsMetadata): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRawLogsMetadata>, I>>(base?: I): UpdateRawLogsMetadata {
    return UpdateRawLogsMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRawLogsMetadata>, I>>(object: I): UpdateRawLogsMetadata {
    const message = createBaseUpdateRawLogsMetadata();
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateRawLogsMetadata.$type, UpdateRawLogsMetadata);

export type RawLogsServiceService = typeof RawLogsServiceService;
export const RawLogsServiceService = {
  activate: {
    path: "/yandex.cloud.cdn.v1.RawLogsService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateRawLogsRequest) => Buffer.from(ActivateRawLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateRawLogsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  deactivate: {
    path: "/yandex.cloud.cdn.v1.RawLogsService/Deactivate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeactivateRawLogsRequest) => Buffer.from(DeactivateRawLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeactivateRawLogsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  get: {
    path: "/yandex.cloud.cdn.v1.RawLogsService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRawLogsRequest) => Buffer.from(GetRawLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRawLogsRequest.decode(value),
    responseSerialize: (value: GetRawLogsResponse) => Buffer.from(GetRawLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetRawLogsResponse.decode(value),
  },
  update: {
    path: "/yandex.cloud.cdn.v1.RawLogsService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateRawLogsRequest) => Buffer.from(UpdateRawLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateRawLogsRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface RawLogsServiceServer extends UntypedServiceImplementation {
  activate: handleUnaryCall<ActivateRawLogsRequest, Operation>;
  deactivate: handleUnaryCall<DeactivateRawLogsRequest, Operation>;
  get: handleUnaryCall<GetRawLogsRequest, GetRawLogsResponse>;
  update: handleUnaryCall<UpdateRawLogsRequest, Operation>;
}

export interface RawLogsServiceClient extends Client {
  activate(
    request: ActivateRawLogsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateRawLogsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  activate(
    request: ActivateRawLogsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateRawLogsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateRawLogsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateRawLogsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  get(
    request: GetRawLogsRequest,
    callback: (error: ServiceError | null, response: GetRawLogsResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetRawLogsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetRawLogsResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetRawLogsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetRawLogsResponse) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRawLogsRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRawLogsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRawLogsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const RawLogsServiceClient = makeGenericClientConstructor(
  RawLogsServiceService,
  "yandex.cloud.cdn.v1.RawLogsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RawLogsServiceClient;
  service: typeof RawLogsServiceService;
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
