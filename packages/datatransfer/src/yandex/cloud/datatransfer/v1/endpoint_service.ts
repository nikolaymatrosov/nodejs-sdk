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
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Endpoint, EndpointSettings } from "./endpoint";

export const protobufPackage = "yandex.cloud.datatransfer.v1";

export interface GetEndpointRequest {
  $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest";
  endpointId: string;
}

export interface ListEndpointsRequest {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest";
  /** Identifier of the folder containing the endpoints to be listed. */
  folderId: string;
  /**
   * The maximum number of endpoints to be sent in the response message. If the
   * folder contains more endpoints than `page_size`, `next_page_token` will be
   * included
   * in the response message. Include it into the subsequent `ListEndpointRequest` to
   * fetch the next page. Defaults to `100` if not specified. The maximum allowed
   * value
   * for this field is `500`.
   */
  pageSize: number;
  /**
   * Opaque value identifying the endpoints page to be fetched. Should be empty in
   * the first `ListEndpointsRequest`. Subsequent requests should have this field
   * filled
   * with the `next_page_token` from the previous `ListEndpointsResponse`.
   */
  pageToken: string;
}

export interface ListEndpointsResponse {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse";
  /**
   * The list of endpoints. If there are more endpoints in the folder, then
   * `next_page_token` is a non-empty string to be included into the subsequent
   * `ListEndpointsRequest` to fetch the next endpoints page.
   */
  endpoints: Endpoint[];
  /**
   * Opaque value identifying the next endpoints page. This field is empty if there
   * are no more endpoints in the folder. Otherwise, it is non-empty and should be
   * included in the subsequent `ListEndpointsRequest` to fetch the next endpoints
   * page.
   */
  nextPageToken: string;
}

export interface CreateEndpointRequest {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest";
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  settings?: EndpointSettings | undefined;
}

export interface CreateEndpointRequest_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateEndpointMetadata {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata";
  endpointId: string;
}

export interface UpdateEndpointRequest {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest";
  /** Identifier of the endpoint to be updated. */
  endpointId: string;
  /** The new endpoint name. Must be unique within the folder. */
  name: string;
  /** The new description for the endpoint. */
  description: string;
  labels: { [key: string]: string };
  /** The new endpoint name. Must be unique within the folder. */
  settings?:
    | EndpointSettings
    | undefined;
  /**
   * Field mask specifying endpoint fields to be updated. Semantics for this field is
   * described here:
   * <https://pkg.go.dev/google.golang.org/protobuf/types/known/fieldmaskpb#FieldMask>
   * The only exception: if the repeated field is specified in the mask, then
   * the new value replaces the old one instead of being appended to the old one.
   */
  updateMask?: string[] | undefined;
}

export interface UpdateEndpointRequest_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateEndpointMetadata {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata";
  endpointId: string;
}

export interface DeleteEndpointRequest {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest";
  endpointId: string;
}

export interface DeleteEndpointMetadata {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata";
  endpointId: string;
}

function createBaseGetEndpointRequest(): GetEndpointRequest {
  return { $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest", endpointId: "" };
}

export const GetEndpointRequest = {
  $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest" as const,

  encode(message: GetEndpointRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEndpointRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpointId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetEndpointRequest {
    return {
      $type: GetEndpointRequest.$type,
      endpointId: isSet(object.endpointId) ? globalThis.String(object.endpointId) : "",
    };
  },

  toJSON(message: GetEndpointRequest): unknown {
    const obj: any = {};
    if (message.endpointId !== "") {
      obj.endpointId = message.endpointId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEndpointRequest>, I>>(base?: I): GetEndpointRequest {
    return GetEndpointRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetEndpointRequest>, I>>(object: I): GetEndpointRequest {
    const message = createBaseGetEndpointRequest();
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetEndpointRequest.$type, GetEndpointRequest);

function createBaseListEndpointsRequest(): ListEndpointsRequest {
  return { $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest", folderId: "", pageSize: 0, pageToken: "" };
}

export const ListEndpointsRequest = {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest" as const,

  encode(message: ListEndpointsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListEndpointsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEndpointsRequest();
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
          if (tag !== 16) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEndpointsRequest {
    return {
      $type: ListEndpointsRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListEndpointsRequest): unknown {
    const obj: any = {};
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListEndpointsRequest>, I>>(base?: I): ListEndpointsRequest {
    return ListEndpointsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListEndpointsRequest>, I>>(object: I): ListEndpointsRequest {
    const message = createBaseListEndpointsRequest();
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListEndpointsRequest.$type, ListEndpointsRequest);

function createBaseListEndpointsResponse(): ListEndpointsResponse {
  return { $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse", endpoints: [], nextPageToken: "" };
}

export const ListEndpointsResponse = {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse" as const,

  encode(message: ListEndpointsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListEndpointsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEndpointsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEndpointsResponse {
    return {
      $type: ListEndpointsResponse.$type,
      endpoints: globalThis.Array.isArray(object?.endpoints)
        ? object.endpoints.map((e: any) => Endpoint.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListEndpointsResponse): unknown {
    const obj: any = {};
    if (message.endpoints?.length) {
      obj.endpoints = message.endpoints.map((e) => Endpoint.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListEndpointsResponse>, I>>(base?: I): ListEndpointsResponse {
    return ListEndpointsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListEndpointsResponse>, I>>(object: I): ListEndpointsResponse {
    const message = createBaseListEndpointsResponse();
    message.endpoints = object.endpoints?.map((e) => Endpoint.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListEndpointsResponse.$type, ListEndpointsResponse);

function createBaseCreateEndpointRequest(): CreateEndpointRequest {
  return {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest",
    folderId: "",
    name: "",
    description: "",
    labels: {},
    settings: undefined,
  };
}

export const CreateEndpointRequest = {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest" as const,

  encode(message: CreateEndpointRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CreateEndpointRequest_LabelsEntry.encode({
        $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.settings !== undefined) {
      EndpointSettings.encode(message.settings, writer.uint32(418).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEndpointRequest();
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

          const entry4 = CreateEndpointRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 52:
          if (tag !== 418) {
            break;
          }

          message.settings = EndpointSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateEndpointRequest {
    return {
      $type: CreateEndpointRequest.$type,
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      settings: isSet(object.settings) ? EndpointSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: CreateEndpointRequest): unknown {
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
    if (message.settings !== undefined) {
      obj.settings = EndpointSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateEndpointRequest>, I>>(base?: I): CreateEndpointRequest {
    return CreateEndpointRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateEndpointRequest>, I>>(object: I): CreateEndpointRequest {
    const message = createBaseCreateEndpointRequest();
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? EndpointSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateEndpointRequest.$type, CreateEndpointRequest);

function createBaseCreateEndpointRequest_LabelsEntry(): CreateEndpointRequest_LabelsEntry {
  return { $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry", key: "", value: "" };
}

export const CreateEndpointRequest_LabelsEntry = {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry" as const,

  encode(message: CreateEndpointRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEndpointRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEndpointRequest_LabelsEntry();
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

  fromJSON(object: any): CreateEndpointRequest_LabelsEntry {
    return {
      $type: CreateEndpointRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: CreateEndpointRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateEndpointRequest_LabelsEntry>, I>>(
    base?: I,
  ): CreateEndpointRequest_LabelsEntry {
    return CreateEndpointRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateEndpointRequest_LabelsEntry>, I>>(
    object: I,
  ): CreateEndpointRequest_LabelsEntry {
    const message = createBaseCreateEndpointRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateEndpointRequest_LabelsEntry.$type, CreateEndpointRequest_LabelsEntry);

function createBaseCreateEndpointMetadata(): CreateEndpointMetadata {
  return { $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata", endpointId: "" };
}

export const CreateEndpointMetadata = {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata" as const,

  encode(message: CreateEndpointMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEndpointMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEndpointMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpointId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateEndpointMetadata {
    return {
      $type: CreateEndpointMetadata.$type,
      endpointId: isSet(object.endpointId) ? globalThis.String(object.endpointId) : "",
    };
  },

  toJSON(message: CreateEndpointMetadata): unknown {
    const obj: any = {};
    if (message.endpointId !== "") {
      obj.endpointId = message.endpointId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateEndpointMetadata>, I>>(base?: I): CreateEndpointMetadata {
    return CreateEndpointMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateEndpointMetadata>, I>>(object: I): CreateEndpointMetadata {
    const message = createBaseCreateEndpointMetadata();
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateEndpointMetadata.$type, CreateEndpointMetadata);

function createBaseUpdateEndpointRequest(): UpdateEndpointRequest {
  return {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest",
    endpointId: "",
    name: "",
    description: "",
    labels: {},
    settings: undefined,
    updateMask: undefined,
  };
}

export const UpdateEndpointRequest = {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest" as const,

  encode(message: UpdateEndpointRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(82).string(message.endpointId);
    }
    if (message.name !== "") {
      writer.uint32(90).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(98).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateEndpointRequest_LabelsEntry.encode({
        $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(106).fork()).ldelim();
    });
    if (message.settings !== undefined) {
      EndpointSettings.encode(message.settings, writer.uint32(418).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(482).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEndpointRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          if (tag !== 82) {
            break;
          }

          message.endpointId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.name = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.description = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          const entry13 = UpdateEndpointRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry13.value !== undefined) {
            message.labels[entry13.key] = entry13.value;
          }
          continue;
        case 52:
          if (tag !== 418) {
            break;
          }

          message.settings = EndpointSettings.decode(reader, reader.uint32());
          continue;
        case 60:
          if (tag !== 482) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateEndpointRequest {
    return {
      $type: UpdateEndpointRequest.$type,
      endpointId: isSet(object.endpointId) ? globalThis.String(object.endpointId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      settings: isSet(object.settings) ? EndpointSettings.fromJSON(object.settings) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateEndpointRequest): unknown {
    const obj: any = {};
    if (message.endpointId !== "") {
      obj.endpointId = message.endpointId;
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
    if (message.settings !== undefined) {
      obj.settings = EndpointSettings.toJSON(message.settings);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateEndpointRequest>, I>>(base?: I): UpdateEndpointRequest {
    return UpdateEndpointRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateEndpointRequest>, I>>(object: I): UpdateEndpointRequest {
    const message = createBaseUpdateEndpointRequest();
    message.endpointId = object.endpointId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? EndpointSettings.fromPartial(object.settings)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateEndpointRequest.$type, UpdateEndpointRequest);

function createBaseUpdateEndpointRequest_LabelsEntry(): UpdateEndpointRequest_LabelsEntry {
  return { $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry", key: "", value: "" };
}

export const UpdateEndpointRequest_LabelsEntry = {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry" as const,

  encode(message: UpdateEndpointRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEndpointRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEndpointRequest_LabelsEntry();
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

  fromJSON(object: any): UpdateEndpointRequest_LabelsEntry {
    return {
      $type: UpdateEndpointRequest_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UpdateEndpointRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateEndpointRequest_LabelsEntry>, I>>(
    base?: I,
  ): UpdateEndpointRequest_LabelsEntry {
    return UpdateEndpointRequest_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateEndpointRequest_LabelsEntry>, I>>(
    object: I,
  ): UpdateEndpointRequest_LabelsEntry {
    const message = createBaseUpdateEndpointRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateEndpointRequest_LabelsEntry.$type, UpdateEndpointRequest_LabelsEntry);

function createBaseUpdateEndpointMetadata(): UpdateEndpointMetadata {
  return { $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata", endpointId: "" };
}

export const UpdateEndpointMetadata = {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata" as const,

  encode(message: UpdateEndpointMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEndpointMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEndpointMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpointId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateEndpointMetadata {
    return {
      $type: UpdateEndpointMetadata.$type,
      endpointId: isSet(object.endpointId) ? globalThis.String(object.endpointId) : "",
    };
  },

  toJSON(message: UpdateEndpointMetadata): unknown {
    const obj: any = {};
    if (message.endpointId !== "") {
      obj.endpointId = message.endpointId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateEndpointMetadata>, I>>(base?: I): UpdateEndpointMetadata {
    return UpdateEndpointMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateEndpointMetadata>, I>>(object: I): UpdateEndpointMetadata {
    const message = createBaseUpdateEndpointMetadata();
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateEndpointMetadata.$type, UpdateEndpointMetadata);

function createBaseDeleteEndpointRequest(): DeleteEndpointRequest {
  return { $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest", endpointId: "" };
}

export const DeleteEndpointRequest = {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest" as const,

  encode(message: DeleteEndpointRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEndpointRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpointId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteEndpointRequest {
    return {
      $type: DeleteEndpointRequest.$type,
      endpointId: isSet(object.endpointId) ? globalThis.String(object.endpointId) : "",
    };
  },

  toJSON(message: DeleteEndpointRequest): unknown {
    const obj: any = {};
    if (message.endpointId !== "") {
      obj.endpointId = message.endpointId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteEndpointRequest>, I>>(base?: I): DeleteEndpointRequest {
    return DeleteEndpointRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteEndpointRequest>, I>>(object: I): DeleteEndpointRequest {
    const message = createBaseDeleteEndpointRequest();
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteEndpointRequest.$type, DeleteEndpointRequest);

function createBaseDeleteEndpointMetadata(): DeleteEndpointMetadata {
  return { $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata", endpointId: "" };
}

export const DeleteEndpointMetadata = {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata" as const,

  encode(message: DeleteEndpointMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEndpointMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEndpointMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpointId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteEndpointMetadata {
    return {
      $type: DeleteEndpointMetadata.$type,
      endpointId: isSet(object.endpointId) ? globalThis.String(object.endpointId) : "",
    };
  },

  toJSON(message: DeleteEndpointMetadata): unknown {
    const obj: any = {};
    if (message.endpointId !== "") {
      obj.endpointId = message.endpointId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteEndpointMetadata>, I>>(base?: I): DeleteEndpointMetadata {
    return DeleteEndpointMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteEndpointMetadata>, I>>(object: I): DeleteEndpointMetadata {
    const message = createBaseDeleteEndpointMetadata();
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteEndpointMetadata.$type, DeleteEndpointMetadata);

export type EndpointServiceService = typeof EndpointServiceService;
export const EndpointServiceService = {
  get: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEndpointRequest) => Buffer.from(GetEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEndpointRequest.decode(value),
    responseSerialize: (value: Endpoint) => Buffer.from(Endpoint.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Endpoint.decode(value),
  },
  list: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListEndpointsRequest) => Buffer.from(ListEndpointsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListEndpointsRequest.decode(value),
    responseSerialize: (value: ListEndpointsResponse) => Buffer.from(ListEndpointsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListEndpointsResponse.decode(value),
  },
  create: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateEndpointRequest) => Buffer.from(CreateEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateEndpointRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  update: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateEndpointRequest) => Buffer.from(UpdateEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateEndpointRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  delete: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteEndpointRequest) => Buffer.from(DeleteEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteEndpointRequest.decode(value),
    responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface EndpointServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetEndpointRequest, Endpoint>;
  list: handleUnaryCall<ListEndpointsRequest, ListEndpointsResponse>;
  create: handleUnaryCall<CreateEndpointRequest, Operation>;
  update: handleUnaryCall<UpdateEndpointRequest, Operation>;
  delete: handleUnaryCall<DeleteEndpointRequest, Operation>;
}

export interface EndpointServiceClient extends Client {
  get(request: GetEndpointRequest, callback: (error: ServiceError | null, response: Endpoint) => void): ClientUnaryCall;
  get(
    request: GetEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Endpoint) => void,
  ): ClientUnaryCall;
  get(
    request: GetEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Endpoint) => void,
  ): ClientUnaryCall;
  list(
    request: ListEndpointsRequest,
    callback: (error: ServiceError | null, response: ListEndpointsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListEndpointsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListEndpointsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListEndpointsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListEndpointsResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateEndpointRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  create(
    request: CreateEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateEndpointRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteEndpointRequest,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void,
  ): ClientUnaryCall;
}

export const EndpointServiceClient = makeGenericClientConstructor(
  EndpointServiceService,
  "yandex.cloud.datatransfer.v1.EndpointService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EndpointServiceClient;
  service: typeof EndpointServiceService;
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
